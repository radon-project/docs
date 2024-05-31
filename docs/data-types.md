# Data types

## Basic types

The basic types are:

- `int` - integer number.
- `float` - floating point number.
- `bool` - boolean value.
- `string` - string of characters.

## Arrays

Arrays are declared using the `[]` syntax. The type of the array is the type
of the elements it contains.

```js linenums="1" title="arrays.rn"
a = [1, 2, 3]; // a is an array of ints
b = [1.0, 2.0, 3.0]; // b is an array of floats
c = ["a", "b", "c"]; // c is an array of strings

// Arrays can be nested
d = [
  [1, 2],
  [3, 4],
]; // d is an array of arrays of ints

// Arrays can be empty
e = []; // e is an empty array of unknown type
```

## Objects (Development)

Objects are declared using the `{}` syntax. The type of the object is the
type of the fields it contains.

```js linenums="1" title="objects.rn"
// a is an object with fields x and y of type int
a = { x: 1, y: 2 };
// b is an object with fields x and y of type float
b = { x: 1.0, y: 2.0 };
// c is an object with fields x and y of type string
c = { x: "a", y: "b" };

// Objects can be nested
// d is an object with fields x and w of type object
d = { x: { y: 1, z: 2 }, w: { y: 3, z: 4 } };

// Objects can be empty
// e is an empty object of unknown type
e = {};
```
