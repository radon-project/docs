# Control flow

## Conditional statements

Conditional statements are used to execute code based on a condition. In Rain,
the `if` statement is used to execute code if a condition is true. The `else`
statement is used to execute code if the condition is false. The `elif`
statement is used to execute code if the condition is false and another
condition is true. The `else` statement is optional.

```rn linenums="1" title="conditional-statements.rn"
if true {
  print("true")

} else {
  print("false")
}
```

```rn linenums="1" title="conditional-statements.rn"
if true {
    print("true")

} elif false {
    print("false")

} else {
    print("neither")
}
```

## Switch statement

The `switch` statement matches an expression against one or more `case` values. The first matching case runs; `default` runs when no case matches.

```rn linenums="1" title="switch.rn"
fun describe(x) {
    switch x {
        case 1  -> print("one")
        case 2  -> print("two")
        case 3  -> print("three")
        default -> print("something else: " + str(x))
    }
}

describe(2)  # two
describe(99) # something else: 99
```

### Multi-line case body

When a case body needs more than one statement, wrap it in `{ }`:

```rn linenums="1" title="switch-block.rn"
switch x {
    case 1 {
        print("one")
        print("still one")
    }
    default { print("not one") }
}
```

### `fallthrough`

`fallthrough` causes execution to continue into the **next** case body without re-checking its condition:

```rn linenums="1" title="fallthrough.rn"
for x in [1, 2, 3] {
    switch x {
        case 2 { fallthrough }
        case 3 { print("two or three") }
        default { print("other: " + str(x)) }
    }
}
```

### `fallout`

`fallout` immediately exits the `switch` block, similar to `break` in a loop:

```rn linenums="1" title="fallout.rn"
switch 44 {
    case 43 -> print("43")
    case 44 -> fallout           # stops here; cases below are skipped
    case 45 -> print("45")
    default -> print("default")
}
```

## Assert statement

`assert` takes a condition and an optional message. If the condition is falsy the program raises an error with the message.

```rn linenums="1" title="assert.rn"
assert true, "this never fires"

var x = 42
assert x > 0, "x must be positive"
```

`assert` can also be used as an expression — it returns the asserted value on success:

```rn linenums="1" title="assert-expr.rn"
const y = assert 99, "must be truthy"
print(y) # 99
```

Catching a failed assertion:

```rn linenums="1" title="assert-catch.rn"
try {
    assert false, "something went wrong"
} catch as e {
    print(e) # something went wrong
}
```

## Del statement

`del` removes one or more variables from the current scope. Accessing a deleted name afterwards raises an error.

```rn linenums="1" title="del.rn"
var a = 1
var b = 2
del a, b

try {
    print(a)
} catch as e {
    print(e) # 'a' is not defined
}
```

`del` also works on indexed targets:

```rn linenums="1" title="del-index.rn"
var arr = [10, 20, 30]
del arr[1]
print(arr) # [10, 30]
```
