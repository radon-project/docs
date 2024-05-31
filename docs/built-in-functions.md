# Built-in Functions

## Types of built-in functions

Built-in functions are the functions that are built into the language.
They are used to perform common tasks. In Radon, there are a list of
built-in functions that are available to use.

They are:

### Utility methods

- `cls()` - clears the screen.
- `clear()` - clears the screen.
- `exit()` - exits the program.

### Shell commands

- `help(obj)` - get help about any object
- `license()` - show project license
- `credits()` - show project credits

### Same as `import` statement

- `require()` - same as include statement to include a file or
  library in the current program.

### Command line arguments

- `sys_args()` - returns the command line arguments.

### API methods

- `pyapi(string,ns)` - A high-level Python API for Radon.
  It is used to call Python functions from Radon.

### Typecase methods

- `int()` - converts any value to an integer.
- `float()` - converts any value to a float.
- `str()` - converts any value to a string.
- `bool()` - converts any value to a boolean.
- `type()` - returns the type of the value.

### Type checker methods

- `is_num()` - returns `true` if the value is a number, otherwise `false`.
- `is_int()` - returns `true` if the value is an integer, otherwise `false`.
- `is_float()` - returns `true` if the value is a float, otherwise `false`.
- `is_str()` - returns `true` if the value is a string, otherwise `false`.
- `is_bool()` - returns `true` if the value is a boolean, otherwise `false`.
- `is_array()` - returns `true` if the value is an array, otherwise `false`.
- `is_fun()` - returns `true` if the value is a function, otherwise `false`.

### String methods

- `str_len()` - returns the length of the string.
- `str_find(string, index)` - returns the character at the specified index.
- `str_slice(string, start, end)` - returns the substring from the specified
  start index to the specified end index.

### I/O methods

- `print()` - prints the specified value to the console.
- `print_ret()` - prints the specified value to the console
  and returns the value.
- `input()` - reads a line from the console.
- `input_int()` - reads an integer from the console.

### Array methods

- `arr_len()` - returns the length of the array.
- `arr_push(array, item)` - adds an item to the end of the array.
- `arr_pop(array, index)` - removes an item from the end of the array.
- `arr_append(array, item)` - adds an item to the end of the array.
- `arr_extend(array1, array2)` - adds all the items of an array to the end
  of the array.
- `arr_find(array, index)` - returns the item at the specified index.
- `arr_slice(array, start, end)` - returns the items from the specified start
  index to the specified end index.
