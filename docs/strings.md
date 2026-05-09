# Strings

## String Methods

Strings have built-in methods accessible via dot notation. No imports required.

### Case Methods

| Method | Description |
|--------|-------------|
| `.upper()` | Convert to uppercase |
| `.lower()` | Convert to lowercase |
| `.title()` | Convert to title case |
| `.capitalize()` | Capitalize first character |
| `.swapcase()` | Swap case of all characters |

### Search Methods

| Method | Description |
|--------|-------------|
| `.find(substring)` | Find index of substring (-1 if not found) |
| `.includes(substring)` | Check if string contains substring |
| `.startswith(prefix)` | Check if string starts with prefix |
| `.endswith(suffix)` | Check if string ends with suffix |
| `.count(substring)` | Count occurrences of substring |

### Transform Methods

| Method | Description |
|--------|-------------|
| `.replace(old, new)` | Replace occurrences of old with new |
| `.split(separator)` | Split string into array |
| `.join(array)` | Join array elements with this string as separator |
| `.strip(chars="")` | Remove leading/trailing whitespace (or specified chars) |
| `.lstrip(chars="")` | Remove leading whitespace (or specified chars) |
| `.rstrip(chars="")` | Remove trailing whitespace (or specified chars) |
| `.reverse()` | Return reversed string |
| `.repeat(n)` | Repeat string n times |
| `.center(width, char)` | Center string in given width |
| `.zfill(width)` | Pad with zeros on the left |

### Validation Methods

| Method | Description |
|--------|-------------|
| `.is_digit()` | Check if all characters are digits |
| `.is_alpha()` | Check if all characters are alphabetic |
| `.is_alnum()` | Check if all characters are alphanumeric |
| `.is_space()` | Check if all characters are whitespace |
| `.is_upper()` | Check if all characters are uppercase |
| `.is_lower()` | Check if all characters are lowercase |
| `.is_empty()` | Check if string is empty |

### Access Methods

| Method | Description |
|--------|-------------|
| `.length()` | Get string length |
| `.get(index)` | Get character at index |
| `.slice(start, end)` | Get substring from start to end |

### Conversion Methods

| Method | Description |
|--------|-------------|
| `.to_string()` | Return the string (identity) |
| `.to_int()` | Convert to integer |
| `.to_float()` | Convert to float |

```rn linenums="1" title="methods.rn"
var s = "Hello, World!"

# Case methods
print(s.upper())            # "HELLO, WORLD!"
print(s.lower())            # "hello, world!"
print(s.title())            # "Hello, World!"

# Search methods
print(s.find("World"))      # 7
print(s.find("xyz"))        # -1
print(s.includes("Hello"))  # true
print(s.startswith("Hello")) # true
print(s.endswith("!"))      # true

# Access methods
print(s.length())           # 13
print(s.get(0))             # "H"
print(s.slice(0, 5))        # "Hello"

# Transform methods
print(s.replace("World", "Radon"))  # "Hello, Radon!"
print(s.split(", "))        # ["Hello", "World!"]
print("-".join(["a", "b"])) # "a-b"

# Validation
print("123".is_digit())     # true
print("abc".is_alpha())     # true
print("  ".is_space())      # true
```

## String slicing

Strings support the same `[start:end:step]` slice syntax as arrays.

```rn linenums="1" title="slicing.rn"
const s = "Hello, World!"

print(s[0:5])   # Hello
print(s[7:])    # World!
print(s[::-1])  # !dlroW ,olleH
```

## String operators

- `+` (concatenation)
- `*` (repetition)

```rn linenums="1" title="operators.rn"
const str = "Hello, World!"

print(str + " " + "Hello, World!") # Hello, World! Hello, World!
print(str * 2) # Hello, World!Hello, World!
```

## String type casting

- `str(value)` - converts any value to a string (built-in function)
- `String(value)` - wraps value in String class with methods

```rn linenums="1" title="casting.rn"
# Using str() function
print(str(123))         # "123"
print(str(123.456))     # "123.456"
print(str(true))        # "true"

# Using String class
var s = String(123)
print(s.length())       # 3

# Literal strings also have methods
print("hello".upper())  # "HELLO"
```

## String type checking

- `is_str(value)` - returns `true` if the value is a string, otherwise `false`

```rn linenums="1" title="typechecks.rn"
print(is_str("Hello, World!")) # true
print(is_str(123)) # false
print(is_str(123.456)) # false
print(is_str(true)) # false
print(is_str(false)) # false
```

## String standard library (Legacy)

!!! note "Built-in Methods"
    String methods are now built-in on all strings. The `import string` module is kept for backwards compatibility but is no longer required.
