# Arrays

## Built-in Array methods

- `arr_len()` or `len(arr)` - returns the length of the array
- `arr_push(array, item)` - adds an item to the end of the array
- `arr_pop(array, index)` - removes an item from the end of the array
- `arr_append(array, item)` - adds an item to the end of the array
- `arr_extend(array1, array2)` - adds all the items of an array to the end of the array
- `arr_find(array, index)` - returns the item at the specified index
- `arr_slice(array, start, end)` - returns the items from the specified start index to the specified end index
    
```py linenums="1" title="methods.rn"
arr = [1, 2, 3, 4, 5]
print(arr_len(arr)) # 5

arr_push(arr, 6)
print(arr) # [1, 2, 3, 4, 5, 6]

arr_pop(arr)
print(arr) # [1, 2, 3, 4, 5]

arr_append(arr, 6)
print(arr) # [1, 2, 3, 4, 5, 6]

arr_extend(arr, [7, 8, 9])
print(arr) # [1, 2, 3, 4, 5, 6, 7, 8, 9]

print(arr_find(arr, 0)) # 1
print(arr_find(arr, 1)) # 2

print(arr_slice(arr, 0, 5)) # [1, 2, 3, 4, 5]
```

## Array operators

- `+` (concatenation)
- `*` (repetition)

```py linenums="1" title="operators.rn"
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]

print(arr1 + arr2) # [1, 2, 3, 4, 5, 6]
print(arr1 * 2) # [1, 2, 3, 1, 2, 3]
```

## Array standard library

- `map(func)` - returns a new array with the result of calling the specified function on each item of the array
- `append(item)` - adds an item to the end of the array
- `pop(index)` - removes an item from the end of the array
- `extend(list)` - adds all the items of an array to the end of the array
- `find(index)` - returns the item at the specified index
- `slice(start, end)` - returns the items from the specified start index to the specified end index
- `len()` - returns the length of the array
- `is_empty()` - returns `true` if the array is empty, otherwise `false`
- `to_string()` - returns the string representation of the array
- `is_array()` - returns `true` if the value is an array, otherwise `false`


```py linenums="1" title="array-standard-library.rn"
import Array # Include the Array standard library

# Create an array instance using the Array class
arr = Array([1, 2, 3, 4, 5])

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
