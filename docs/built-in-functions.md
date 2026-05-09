# Built-in Functions

Radon exposes a fixed set of interpreter built-ins. The list below reflects the functions currently registered in `core/builtin_funcs.py`.

## Console and Flow Control

- `print(value)` prints a value.
- `print_ret(value)` returns the string form of a value.
- `input(prompt)` reads a line of input.
- `input_int()` reads an integer and keeps prompting until the input is valid.
- `clear()` clears the terminal.
- `cls()` is an alias for `clear()`.
- `exit()` stops the current program.

## Introspection

- `len(value)` returns the length of a value when supported.
- `type(value)` returns the Radon type wrapper for a value.
- `help(obj)` prints the help representation of an object.
- `dir(obj)` returns an array of visible names on a module or class-like object.

## Type Conversion

- `int(value)` converts a value to an integer.
- `float(value)` converts a value to a float.
- `str(value)` converts a value to a string.
- `bool(value)` converts a value using Radon's truthiness rules.

## Type Checks

- `is_num(value)` returns whether the value is a number.
- `is_int(value)` returns whether the value is an integer number.
- `is_float(value)` returns whether the value is a floating-point number.
- `is_str(value)` returns whether the value is a string.
- `is_bool(value)` returns whether the value is a boolean.
- `is_array(value)` returns whether the value is an array.
- `is_fun(value)` returns whether the value is a function.
- `is_null(value)` returns whether the value is null.

## Runtime and Interop

- `require(module)` executes a standard library module name or a `.rn` file path.
- `pyapi(code, ns)` executes Python code with a Radon hash map used as the namespace bridge.
- `time_now()` returns the current Unix timestamp.

`pyapi()` is permission-gated at runtime.

## Shell Helpers

- `license()` prints the project license.
- `credits()` prints the project credits.
- `copyright()` prints the copyright banner.

## Command-Line Arguments

Radon does not expose a `sys_args()` built-in. The CLI stores process arguments in the global `argv` array before running user code.

```rn linenums="1" title="argv.rn"
for arg in argv {
    print(arg)
}
```

---

## Built-in Classes

The following class constructors are pre-loaded into the global scope without any import.

### `File(path, mode)`

Opens a file. Requires `disk_access` permission. Modes: `"r"` read, `"w"` write, `"a"` append. See the [file-handling guide](file-handling.md) for full usage.

### `String(value)`

Wraps a string with chainable helper methods (`len()`, `find()`, `join()`, `to_int()`, etc.). Identical to the object provided by `import string`.

### `Json`

Serialises and deserialises JSON. Can be used statically or as an instance:

```rn linenums="1" title="json.rn"
const text = Json.dumps({"key": "value"})
const data = Json.loads(text)
print(data["key"]) # value
```

### `Requests`

HTTP client. Requires `network_access` permission.

```rn linenums="1" title="requests.rn"
var res = Requests.get("https://api.example.com/data")
print(res.status_code)
print(res.text)
```

### `builtins`

Provides access to the built-in scope as an object. Used for reflection and tooling; not normally needed in application code.

---

## Primitive Methods

All primitive types (Array, String, Number, Boolean, HashMap) support objective method syntax via dot notation. Methods are called directly on values without needing any imports.

```rn linenums="1" title="primitive_methods.rn"
# Array methods
var arr = [1, 2, 3]
arr.append(4)           # [1, 2, 3, 4]
arr.length()            # 4
arr.pop()               # removes and returns 4

# String methods
var s = "hello world"
s.upper()               # "HELLO WORLD"
s.split(" ")            # ["hello", "world"]
s.length()              # 11

# Number methods
var n = 42
n.is_even()             # true
n.sqrt()                # 6.48...
(-5).abs()              # 5

# Boolean methods
var b = true
b.toggle()              # false
b.to_string()           # "true"

# HashMap methods
var hm = {"a": 1, "b": 2}
hm.keys()               # ["a", "b"]
hm.has("a")             # true
```

For complete method references, see:

- [Arrays](arrays.md) - 27 methods
- [Strings](strings.md) - 25+ methods
- [Data Types](data-types.md) - Number (28), Boolean (9), HashMap (18) methods
