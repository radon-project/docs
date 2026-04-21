# Arrays

## Built-in Array functions

- `arr_len(array)` or `len(array)` — returns the length of the array
- `arr_append(array, item)` — adds an item to the end of the array
- `arr_pop(array, index)` — removes and returns the item at the specified index
- `arr_extend(array1, array2)` — appends all items from `array2` to `array1`
- `arr_get(array, index)` — returns the item at the specified index
- `arr_chunk(array, size)` — groups the array into chunks of the given size

```rn linenums="1" title="methods.rn"
const arr = [1, 2, 3, 4, 5]
print(arr_len(arr)) # 5

arr_append(arr, 6)
print(arr) # [1, 2, 3, 4, 5, 6]

arr_pop(arr, 5)
print(arr) # [1, 2, 3, 4, 5]

arr_extend(arr, [6, 7, 8])
print(arr) # [1, 2, 3, 4, 5, 6, 7, 8]

print(arr_get(arr, 0)) # 1
print(arr_get(arr, 1)) # 2

print(arr_chunk(arr, 3)) # [[1, 2, 3], [4, 5, 6], [7, 8]]
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

## Array standard library

- `map(func)` - returns a new array with the result of calling the specified
  function on each item of the array
- `append(item)` - adds an item to the end of the array
- `pop(index)` - removes an item from the end of the array
- `extend(list)` - adds all the items of an array to the end of the array
- `find(index)` - returns the item at the specified index
- `slice(start, end)` - returns the items from the specified start index to
  the specified end index
- `len()` - returns the length of the array
- `is_empty()` - returns `true` if the array is empty, otherwise `false`
- `to_string()` - returns the string representation of the array
- `is_array()` - returns `true` if the value is an array, otherwise `false`

```rn linenums="1" title="array-standard-library.rn"
import array # Include the array standard library

# Create an array instance using the Array class
const arr = array.Array([1, 2, 3, 4, 5])

print(len(arr)) # 5
print(arr.is_empty()) # false
print(arr.to_string()) # "[1, 2, 3, 4, 5]"
print(arr.is_array()) # true

print(arr.map(fun (item) -> str(item))) # ["1", "2", "3", "4", "5"]

print(arr.append(6)) # [1, 2, 3, 4, 5, 6]
print(arr.pop(5)) # [1, 2, 3, 4, 5]

print(arr.extend([6, 7, 8])) # [1, 2, 3, 4, 5, 6, 7, 8]
print(arr.find(0)) # 1
print(arr.find(1)) # 2

print(arr.slice(0, 5)) # [1, 2, 3, 4, 5]
```
