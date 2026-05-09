# Language Reference

This page documents Radon language features that are not covered in the
task-oriented guides. Each section is grounded in the current compiler
source at `core/tokens.py`, `core/parser.py`, and `core/interpreter.py`.

---

## Comments

Single-line comments start with `#` and continue to the end of the line.

```rn
# This is a single-line comment
var x = 1  # inline comment
```

Multi-line block comments are wrapped in `#!` … `!#`:

```rn
#!
    This is a
    multi-line comment.
!#
var y = 2
```

---

## Operators

### Arithmetic

| Operator | Name | Example |
|---|---|---|
| `+` | Addition / string concat | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication / repetition | `a * b` |
| `/` | Division | `a / b` |
| `//` | Integer (floor) division | `a // b` |
| `%` | Modulo | `a % b` |
| `^` | Exponentiation | `a ^ b` |

### Comparison

| Operator | Name |
|---|---|
| `==` | Equal |
| `!=` | Not equal |
| `<` | Less than |
| `<=` | Less than or equal |
| `>` | Greater than |
| `>=` | Greater than or equal |

### Logical

| Operator | Name |
|---|---|
| `and` | Logical AND |
| `or` | Logical OR |
| `not` | Logical NOT |
| `in` | Membership test — `a in b` returns `true` if `a` is an element of `b` |

### Assignment and Compound Assignment

```rn
var x = 10
x += 3  # x is now 13
x -= 2  # 11
x *= 2  # 22
x /= 2  # 11.0
x //= 3 # 3
x %= 2  # 1
x ^= 4  # 1
```

### Increment and Decrement

Postfix `++` and `--` increment or decrement a numeric variable by 1:

```rn
var i = 0
i++       # i is 1
i--       # i is 0
```

---

## `const` — Immutable Bindings

`const` declares a binding that cannot be reassigned after initialisation.
Attempting a reassignment raises a runtime error.

```rn
const PI = 3.14159
PI = 3   # Error: Cannot assign to constant 'PI'
```

`const` works with any value, including arrays and hashmaps. The binding
itself is constant; the contents can still be mutated through methods or
index assignment.

---

## `static` — Class-level Functions

`static` inside a class body makes a method callable on the class itself
without creating an instance. Instance access also works.

```rn
class MathHelper {
    static fun square(n) {
        return n ^ 2
    }
}

print(MathHelper.square(5)) # 25
```

---

## Spread Operator (`...`)

`...` inside an array literal spreads another array's elements in place:

```rn
var a = [1, 2, 3]
var b = [4, 5, 6]

print([...a, ...b])          # [1, 2, 3, 4, 5, 6]
print([0, ...a, ...b, 7])    # [0, 1, 2, 3, 4, 5, 6, 7]
```

In function definitions, `...name` collects extra positional arguments into
an array:

```rn
fun sum(...nums) {
    var total = 0
    for n in nums { total += n }
    return total
}

print(sum(1, 2, 3, 4)) # 10
```

---

## HashMap Unpack Operator (`***`)

`***` inside a hashmap literal or function call spreads another hashmap's
key-value pairs:

```rn
var defaults = {"color": "blue", "size": 10}
var overrides = {***defaults, "color": "red"}
print(overrides) # {"color": "red", "size": 10}
```

In function definitions, `***name` collects extra keyword arguments into a
hashmap:

```rn
fun show(***kwargs) {
    for key in kwargs {
        print(key + " = " + str(kwargs[key]))
    }
}

show(name="Alice", age=30)
```

---

## Closures

Inner functions capture variables from enclosing scopes. The captured
variable is shared — mutations are visible:

```rn
fun make_counter() {
    var count = 0
    return fun() {
        count += 1
        return count
    }
}

const counter = make_counter()
print(counter()) # 1
print(counter()) # 2
print(counter()) # 3
```

---

## Slicing

Arrays and strings support three-part slice syntax `[start:end:step]`.
Any part can be omitted (meaning "from beginning", "to end", or "step 1").
Negative indices count from the end.

```rn
const arr = [0, 1, 2, 3, 4, 5]

print(arr[1:4])    # [1, 2, 3]
print(arr[:3])     # [0, 1, 2]
print(arr[3:])     # [3, 4, 5]
print(arr[::2])    # [0, 2, 4]
print(arr[::-1])   # [5, 4, 3, 2, 1, 0]
print(arr[-2:])    # [4, 5]
```

Strings work the same way:

```rn
const s = "Hello, World!"
print(s[7:12])   # World
print(s[::-1])   # !dlroW ,olleH
```

---

## Built-in Classes

The following class names are available globally without any import.

### `File`

Wraps file I/O. `File` requires the `disk_access` permission.

```rn
var f = File("hello.txt", "w")
f.write("hello")
f.close()

var fr = File("hello.txt", "r")
print(fr.read())
fr.close()
```

Use `"r"` to read, `"w"` to write (overwrite), `"a"` to append.
See also the `file-handling.md` guide.

### `String`

Wraps a string value with chainable methods. The `String` class is the
same object exposed by `stdlib/string.rn`.

```rn
var s = String("hello world")
print(s.len())        # 11
print(s.find("world")) # 6
```

### `Json`

Provides JSON serialisation and deserialisation. Methods can be called
statically (on the class) or on an instance.

```rn
# Static access
const text = Json.dumps({"name": "Alice", "score": 42})
print(text)                        # {"name": "Alice", "score": 42}

const data = Json.loads(text)
print(data["name"])                # Alice

# Instance access
var j = Json()
print(j.dumps([1, 2, 3]))         # [1, 2, 3]
```

### `Requests`

HTTP client built on Python `urllib`. Requires the `network_access`
permission.

```rn
var res = Requests.get("https://api.example.com/data")
print(res.status_code)
print(res.text)
```

### `builtins`

Provides direct access to the Radon built-in scope as an object, useful
for reflection and tooling. Normally not needed in application code.

---

## Docstrings and `help()`

The first string literal in a function or class body is used as its
documentation string. `help(obj)` prints it along with the function
signature.

```rn
fun add(a, b) {
    "Returns the sum of a and b."
    return a + b
}

help(add)
```

---

## Scoping Rules

- Every `if`, `for`, `while`, `switch`, function, and class body opens a
	new child scope.
- A child scope can read variables from any ancestor scope.
- Assignment inside a body creates or updates a variable in that scope;
	it does not modify an enclosing binding unless the variable was already
	looked up from the enclosing scope during the same execution (captured
	by reference in closures).
- `const` bindings cannot be reassigned; their scope follows the same
	rules as `var`.

## Under Maintenance

The language reference is currently under maintenance. Please check back later.

Thank you for your patience.
