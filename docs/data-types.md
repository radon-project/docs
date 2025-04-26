# Data types

## Basic types

The basic types are:

- `number` - floating point number
- `bool` - boolean value.
- `string` - string of characters.

## Arrays

Arrays are declared using the `[]` syntax. The type of the array is the type
of the elements it contains.

```rn linenums="1" title="arrays.rn"
a = [1, 2, 3] # a is an array of numbers
c = ["a", "b", "c"] # c is an array of strings

# Arrays can be nested
d = [[1, 2], [3, 4]] # d is an array of arrays of ints

# Arrays can be empty
e = [] # e is an empty array of unknown type
```

## Hashmaps

Hashmaps are declared using the `{}` syntax.

```rn linenums="1" title="hashmaps.rn"
const a = { "x": 1, "y": 2 }
const b = { "x": 1.0, "y": 2.0 }
const c = { "x": "a", "y": "b" }

# Hashmaps can be nested
const d = { "x": { "y": 1, "z": 2 }, "w": { "y": 3, "z": 4 } }

# Hashmaps can be empty
const e = {}

# Hashmaps can be initialized with keys known at runtime
const key = "foo"
const f = {key: "bar"}
print(f["foo"]) # -> bar
```
