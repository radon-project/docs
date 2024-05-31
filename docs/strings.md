# Strings

## String methods

- `str_len()` - returns the length of the string.
- `str_find(string, index)` - returns the character at the specified index.
- `str_slice(string, start, end)` - returns the substring from the specified
  start index to the specified end index

```py linenums="1" title="methods.rn"
str = "Hello, World!"

print(str_len(str)) # 13
print(str_find(str, 0)) # H
print(str_find(str, 1)) # e

print(str_slice(str, 0, 5)) # Hello
```

## String operators

- `+` (concatenation)
- `*` (repetition)

```py linenums="1" title="operators.rn"
str = "Hello, World!"

print(str + " " + "Hello, World!") # Hello, World! Hello, World!
print(str * 2) # Hello, World!Hello, World!
```

## String type casting

- `str()` - converts any value to a string

```py linenums="1" title="casting.rn"
print(str(123)) # 123
print(str(123.456)) # 123.456
print(str(true)) # true
print(str(false)) # false
```

## String type checking

- `is_str()` - returns `true` if the value is a string, otherwise `false`

```py linenums="1" title="type-checking.rn"
print(is_str("Hello, World!")) # true
print(is_str(123)) # false
print(is_str(123.456)) # false
print(is_str(true)) # false
print(is_str(false)) # false
```
