# Arrays

## Array Methods

Arrays have built-in methods accessible via dot notation. No imports required.

### Mutating Methods

| Method | Description |
|--------|-------------|
| `.append(value)` | Add element to end of array |
| `.pop(index=-1)` | Remove and return element at index (default: last) |
| `.extend(array)` | Append all elements from another array |
| `.insert(index, value)` | Insert element at specified index |
| `.remove(value)` | Remove first occurrence of value |
| `.set(index, value)` | Set element at index |
| `.clear()` | Remove all elements |
| `.reverse()` | Reverse array in place |
| `.sort(reverse=false)` | Sort array in place |

### Query Methods

| Method | Description |
|--------|-------------|
| `.length()` | Get number of elements |
| `.get(index)` | Get element at index |
| `.find(element)` | Find index of element (-1 if not found) |
| `.index_of(element)` | Alias for find |
| `.includes(element)` | Check if element exists (returns boolean) |
| `.first()` | Get first element |
| `.last()` | Get last element |
| `.count(element)` | Count occurrences of element |
| `.is_empty()` | Check if array is empty |

### Transform Methods

| Method | Description |
|--------|-------------|
| `.slice(start, end)` | Get sub-array from start to end |
| `.chunk(size)` | Split into sub-arrays of given size |
| `.copy()` | Create shallow copy |
| `.unique()` | Return array with duplicates removed |
| `.join(separator="")` | Join elements into string |
| `.map(func)` | Transform each element with function |
| `.filter(func)` | Filter elements by predicate function |

### Aggregation Methods

| Method | Description |
|--------|-------------|
| `.sum()` | Sum all numeric elements |
| `.min()` | Get minimum element |
| `.max()` | Get maximum element |
| `.every(func)` | Check if all elements satisfy predicate |
| `.some(func)` | Check if any element satisfies predicate |

### Conversion Methods

| Method | Description |
|--------|-------------|
| `.to_string()` | Convert to string representation |

```rn linenums="1" title="methods.rn"
var arr = [1, 2, 3, 4, 5]

# Mutating
arr.append(6)
print(arr)              # [1, 2, 3, 4, 5, 6]

arr.pop()
print(arr)              # [1, 2, 3, 4, 5]

arr.extend([6, 7, 8])
print(arr)              # [1, 2, 3, 4, 5, 6, 7, 8]

# Querying
print(arr.length())     # 8
print(arr.get(0))       # 1
print(arr.includes(5))  # true
print(arr.first())      # 1
print(arr.last())       # 8

# Transforming
print(arr.slice(0, 3))  # [1, 2, 3]
print(arr.chunk(3))     # [[1, 2, 3], [4, 5, 6], [7, 8]]

# Functional
var doubled = arr.map(fun(x) -> x * 2)
print(doubled)          # [2, 4, 6, 8, 10, 12, 14, 16]

var evens = arr.filter(fun(x) -> x % 2 == 0)
print(evens)            # [2, 4, 6, 8]

# Aggregation
print(arr.sum())        # 36
print(arr.min())        # 1
print(arr.max())        # 8
```

## Array slicing

Arrays support slice syntax `[start:end:step]`. Any part can be omitted.

```rn linenums="1" title="slicing.rn"
const arr = [0, 1, 2, 3, 4, 5]

print(arr[1:4])   # [1, 2, 3]
print(arr[:3])    # [0, 1, 2]
print(arr[3:])    # [3, 4, 5]
print(arr[::2])   # [0, 2, 4]
print(arr[::-1])  # [5, 4, 3, 2, 1, 0]
```

## Array operators

- `+` (concatenation)
- `*` (repetition)

```rn linenums="1" title="operators.rn"
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

print(arr1 + arr2) # [1, 2, 3, 4, 5, 6]
print(arr1 * 2) # [1, 2, 3, 1, 2, 3]
```

## Array standard library (Legacy)

!!! note "Built-in Methods"
    Array methods are now built-in on all arrays. The `import array` module is kept for backwards compatibility but is no longer required.

```rn linenums="1" title="array-methods.rn"
# No import needed - methods work directly on arrays
var arr = [1, 2, 3, 4, 5]

print(arr.length())     # 5
print(arr.is_empty())   # false
print(arr.to_string())  # "[1, 2, 3, 4, 5]"

# Functional methods
print(arr.map(fun(x) -> String(x)))  # ["1", "2", "3", "4", "5"]

arr.append(6)
print(arr)              # [1, 2, 3, 4, 5, 6]

arr.pop()
print(arr)              # [1, 2, 3, 4, 5]

arr.extend([6, 7, 8])
print(arr)              # [1, 2, 3, 4, 5, 6, 7, 8]

print(arr.find(3))      # 2 (index of element 3)
print(arr.slice(0, 5))  # [1, 2, 3, 4, 5]
```
