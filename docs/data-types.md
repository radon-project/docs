# Data types

All primitive types in Radon support objective method syntax via dot notation.

## Numbers

Numbers represent both integers and floating-point values.

```rn linenums="1" title="numbers.rn"
var a = 42          # integer
var b = 3.14        # float
var c = -100        # negative
```

### Number Methods

| Method | Description |
|--------|-------------|
| `.to_string()` | Convert to string representation |
| `.abs()` | Get absolute value |
| `.round(digits=0)` | Round to decimal places |
| `.floor()` | Round down to nearest integer |
| `.ceil()` | Round up to nearest integer |
| `.is_int()` | Check if value is an integer |
| `.is_float()` | Check if value has decimal part |
| `.is_even()` | Check if integer is even |
| `.is_odd()` | Check if integer is odd |
| `.is_positive()` | Check if value is positive |
| `.is_negative()` | Check if value is negative |
| `.is_zero()` | Check if value is zero |
| `.sqrt()` | Square root |
| `.pow(exp)` | Raise to power |
| `.log(base=e)` | Logarithm (natural by default) |
| `.log10()` | Base-10 logarithm |
| `.log2()` | Base-2 logarithm |
| `.exp()` | e raised to this power |
| `.sin()` | Sine (radians) |
| `.cos()` | Cosine (radians) |
| `.tan()` | Tangent (radians) |
| `.asin()` | Arcsine (returns radians) |
| `.acos()` | Arccosine (returns radians) |
| `.atan()` | Arctangent (returns radians) |
| `.sinh()` | Hyperbolic sine |
| `.cosh()` | Hyperbolic cosine |
| `.tanh()` | Hyperbolic tangent |
| `.to_radians()` | Convert degrees to radians |
| `.to_degrees()` | Convert radians to degrees |
| `.sign()` | Return sign (-1, 0, or 1) |
| `.clamp(min, max)` | Clamp value to range |
| `.mod(divisor)` | Modulo operation |
| `.div(divisor)` | Integer division |

```rn linenums="1" title="number_methods.rn"
var n = 42
print(n.is_even())          # true
print(n.sqrt())             # 6.48074...
print(n.to_string())        # "42"

print((-5).abs())           # 5
print((3.14159).round(2))   # 3.14
print((2.7).floor())        # 2
print((2.3).ceil())         # 3

print((16).sqrt())          # 4
print((2).pow(10))          # 1024

print((100).clamp(0, 50))   # 50
print((17).mod(5))          # 2
print((17).div(5))          # 3
```

## Booleans

Booleans represent logical true or false values.

```rn linenums="1" title="booleans.rn"
var a = true
var b = false
```

### Boolean Methods

| Method | Description |
|--------|-------------|
| `.to_string()` | Convert to "true" or "false" |
| `.to_number()` | Convert to 1 or 0 |
| `.toggle()` | Return the opposite boolean value |
| `.and_(other)` | Logical AND with another value |
| `.or_(other)` | Logical OR with another value |
| `.xor(other)` | Logical XOR with another value |
| `.not_()` | Logical NOT (same as toggle) |
| `.implies(other)` | Logical implication (this -> other) |
| `.equals(other)` | Check equality with another boolean |

```rn linenums="1" title="boolean_methods.rn"
var b = true
print(b.to_string())        # "true"
print(b.to_number())        # 1
print(b.toggle())           # false
print(b.and_(false))        # false
print(b.or_(false))         # true
print(b.xor(true))          # false
```

## Strings

Strings are immutable sequences of characters.

```rn linenums="1" title="strings.rn"
var s = "Hello, World!"
var t = 'Single quotes work too'
```

See [Strings](strings.md) for the complete method reference (25+ methods).

## Arrays

Arrays are ordered, mutable collections of elements.

```rn linenums="1" title="arrays.rn"
var a = [1, 2, 3]           # array of numbers
var c = ["a", "b", "c"]     # array of strings
var d = [[1, 2], [3, 4]]    # nested arrays
var e = []                  # empty array
```

See [Arrays](arrays.md) for the complete method reference (27 methods).

## HashMaps

HashMaps are collections of key-value pairs with string keys.

```rn linenums="1" title="hashmaps.rn"
const a = { "x": 1, "y": 2 }
const b = { "name": "Alice", "age": 30 }

# Nested hashmaps
const d = { "outer": { "inner": 1 } }

# Empty hashmap
const e = {}

# Runtime keys
const key = "foo"
const f = {key: "bar"}
print(f["foo"]) # -> bar
```

### HashMap Methods

| Method | Description |
|--------|-------------|
| `.keys()` | Get array of all keys |
| `.values()` | Get array of all values |
| `.items()` | Get array of [key, value] pairs |
| `.get(key, default=null)` | Get value by key (with optional default) |
| `.set(key, value)` | Set a key-value pair |
| `.has(key)` | Check if key exists |
| `.remove(key)` | Remove a key-value pair |
| `.length()` | Get number of pairs |
| `.clear()` | Remove all pairs |
| `.to_string()` | Convert to string representation |
| `.is_empty()` | Check if hashmap is empty |
| `.copy()` | Create a shallow copy |
| `.merge(other)` | Return new hashmap merged with another |
| `.pop(key, default=null)` | Remove and return value |
| `.update(other)` | Update with another hashmap in place |
| `.get_or_set(key, default)` | Get value or set default if missing |
| `.filter(func)` | Filter pairs by predicate function |
| `.map_values(func)` | Transform values with function |

```rn linenums="1" title="hashmap_methods.rn"
var hm = {"name": "Alice", "age": 30}

print(hm.keys())            # ["name", "age"]
print(hm.values())          # ["Alice", 30]
print(hm.items())           # [["name", "Alice"], ["age", 30]]

print(hm.get("name"))       # "Alice"
print(hm.get("email", "N/A")) # "N/A"
print(hm.has("name"))       # true
print(hm.length())          # 2

hm.set("email", "alice@example.com")
print(hm.keys())            # ["name", "age", "email"]

var copy = hm.copy()
var merged = hm.merge({"city": "NYC"})
print(merged.keys())        # ["name", "age", "email", "city"]
```

## Null

Null represents the absence of a value.

```rn linenums="1" title="null.rn"
var a = null
print(is_null(a))  # true
```
