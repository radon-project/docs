# Async and Concurrency

Radon supports `async`/`await` for writing concurrent code — the kind of
code that spends a lot of its time waiting (on a network request, a file,
a timer) rather than computing, where doing several of those waits at once
is much faster than doing them one at a time.

## `async fun` and `await`

A function declared with `async fun` may contain `await` expressions in
its body. `await` is also legal at the top level of a script (the whole
program already runs inside Radon's event loop), but it's a syntax error
inside a plain, non-async `fun`.

```rn linenums="1" title="async_basic.rn"
async fun greet(name) {
    await sleep(0.1)
    return "Hello, " + name + "!"
}

print(await greet("World")) # Hello, World!
```

Calling any function — async or not — still runs it to completion
immediately, exactly like today. `async` by itself doesn't create
concurrency; it just marks a function as allowed to contain `await`. Real
concurrency comes from `spawn()`.

## `spawn()` — running things concurrently

`spawn(callable)` takes a zero-argument callable, starts it running in the
background immediately, and returns a `Task` — a handle to that
in-progress (or already finished) work. `spawn()` itself returns right
away; it doesn't wait for the callable to finish.

```rn linenums="1" title="spawn_basic.rn"
async fun slow_task(label) {
    await sleep(0.5)
    print(label + " done")
    return label
}

var task = spawn(fun() -> slow_task("background work"))
print("spawn() returned immediately")
var result = await task # now wait for it
print(result) # background work
```

Because `spawn()` only accepts a callable with **no arguments**, wrap a
call that needs arguments in an anonymous function:

```rn
spawn(fun() -> slow_task("some label"))
```

## `await` on a `Task`

`await` on a `Task` suspends the current async function until that task
resolves, and gives you back its return value (or raises its error, if it
raised one). `await` on anything that isn't a `Task` — a plain value, or
the direct result of a regular function call — is a harmless passthrough;
it just gives you that value back unchanged.

## `gather()` — waiting on many tasks at once

`gather(tasks)` takes an array of `Task` values and waits for all of them
concurrently, returning an array of their results in the same order they
were passed in (not the order they finish in).

```rn linenums="1" title="gather_basic.rn"
async fun fetch(id) {
    await sleep(0.1)
    return "item-" + str(id)
}

var tasks = [spawn(fun() -> fetch(1)), spawn(fun() -> fetch(2)), spawn(fun() -> fetch(3))]
var results = await gather(tasks)
print(results) # ["item-1", "item-2", "item-3"]
```

If any task in the batch raises an error, `gather()` raises that error —
which means one failing task stops you from ever seeing the others'
results. If you need partial success (some tasks succeeding even though
one fails), `await` each task individually inside its own `try`/`catch`
instead of going through a single `gather()` call — see the
[loop example](#error-handling-and-partial-success) below.

## A worked example: sequential vs. concurrent

The clearest way to see the benefit is to measure it. `time_now()` returns
the current Unix timestamp, so you can time both approaches directly:

```rn linenums="1" title="sync_vs_async.rn"
async fun fetch_page(name, seconds) {
    await sleep(seconds)
    return name
}

var pages = [["home", 0.3], ["about", 0.3], ["contact", 0.3]]

# Sequential: one await at a time
var sync_start = time_now()
for page in pages {
    await fetch_page(page[0], page[1])
}
var sync_elapsed = time_now() - sync_start
print("sequential: " + str(sync_elapsed) + "s") # ~0.9s

# Concurrent: spawn all three, then wait for all of them together
var async_start = time_now()
var tasks = []
for page in pages {
    tasks.append(spawn(fun() -> fetch_page(page[0], page[1])))
}
await gather(tasks)
var async_elapsed = time_now() - async_start
print("concurrent: " + str(async_elapsed) + "s") # ~0.3s
```

Three 0.3-second waits take about 0.9 seconds run one after another, but
only about 0.3 seconds run concurrently — because all three `sleep()`
calls are overlapping instead of stacking up.

!!! warning "Closures inside a `for` loop"
    `for page in pages` reuses the *same* `page` variable binding on every
    iteration. A closure created directly inside the loop body — like
    `fun() -> fetch_page(page[0], page[1])` written inline in the loop
    above — would only ever see the **last** page's value, because the
    spawned tasks don't actually run until later, by which point the loop
    has already finished and `page` holds its final value. The example
    above works because `page` is captured fresh on each iteration before
    the closure is built. If you need to build closures with per-iteration
    values in a more complex loop, route through a helper function's own
    parameters instead — a function's parameters get a fresh binding on
    every call, unlike a shared loop variable:

    ```rn
    fun make_task(name, seconds) -> fun() -> fetch_page(name, seconds)
    # ...
    tasks.append(spawn(make_task(page[0], page[1])))
    ```

## Error handling and partial success

Errors raised inside an async function propagate through `await` exactly
like a regular function call:

```rn linenums="1" title="async_error.rn"
fun BoomError(msg) -> msg

async fun risky() {
    raise BoomError("something went wrong")
}

try {
    await risky()
} catch as e {
    print("caught: " + e) # caught: something went wrong
}
```

For a batch of concurrent tasks where one failing shouldn't stop the
others, `await` each task individually rather than passing them all to a
single `gather()`:

```rn linenums="1" title="partial_success.rn"
var results = []
for task in tasks {
    try {
        results.append(await task)
    } catch as e {
        print("a task failed: " + e)
    }
}
```

## Known limitations

- `spawn()` only takes a zero-argument callable — wrap calls that need
  arguments in an anonymous function, as shown throughout this page.
- The built-in `Requests` (HTTP) and `File` classes still perform their
  I/O synchronously under the hood. They work correctly inside `spawn()`ed
  tasks, but won't overlap with other concurrent work the way `sleep()`
  does.
- Calling a Radon function (async or not) from synchronous Python code via
  `pyapi()` works, including one that itself uses `await` — it runs to
  completion on an isolated thread before control returns to the Python
  side, so the caller doesn't need to know or care that it's async.
