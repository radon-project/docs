# Strings

## String built-in functions

- `str_len(string)` — returns the length of the string.
- `str_get(string, index)` — returns the character at the specified index.
- `str_find(string, value)` — returns the starting index of a substring, or `-1` if not found.

```rn linenums="1" title="methods.rn"
const s = "Hello, World!"

print(str_len(s))           # 13
print(str_get(s, 0))        # H
print(str_get(s, 1))        # e
print(str_find(s, "World")) # 7
print(str_find(s, "xyz"))   # -1
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

- `str()` - converts any value to a string

```rn linenums="1" title="casting.rn"
print(str(123)) # 123
print(str(123.456)) # 123.456
print(str(true)) # true
print(str(false)) # false
```

## String type checking

- `is_str()` - returns `true` if the value is a string, otherwise `false`

```rn linenums="1" title="typechecks.rn"
print(is_str("Hello, World!")) # true
print(is_str(123)) # false
print(is_str(123.456)) # false
print(is_str(true)) # false
print(is_str(false)) # false
```
