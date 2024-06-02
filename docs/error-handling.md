# Error Handling

Error handling is an important part of writing maintainable code.
Radon has a powerful exception handler. It can handle exceptions that
may occur during the execution of a block of code.

## Handling exceptions

In Radon, `try-catch` blocks are used for error handling. The `try` block
contains the code that may throw an exception. The `catch` block contains
the code that handles the exception.

```js linenums="1" title="exceptions.rn"
try {
    // code that may throw an exception (in this case, zero division)
    a = 1 / 0
} catch as err {
    // code that handles the exception
    print("Exception caught: " + err)
}
```

**Output:**

```bash
Exception caught: Division by zero
```

Don't forget to use the `as` keyword to assign the exception to a variable.
The variable can be used to get the exception message. If you don't want to
use the exception message, you can omit the variable.

```js linenums="1" title="exceptions.rn"
try {
    // code that may throw an exception
    a = 1 / 0
} catch as _ {
    // code that handles the exception
    print("Exception caught")
}
```

**Output:**

```bash
Exception caught
```

## Raise exceptions

In Radon, errors can be raised explicitly using the `raise` keyword. This is useful for enforcing certain conditions or for creating custom error messages.

Radon has a standard `radiation` module for Error Types (you can type `radiation.errors` in the shell to view a list of available error types)

```js linenums="1" title="exceptions.rn"
import radiation

if 2 != 4 {
    raise radiation.ValueError("2 != 4")
}
```

**Output:**

```py
Radiation (most recent call last):
  File <stdin>, line 2
ValueError: 2 + 2 != 4

    raise radiation.ValueError("2 + 2 != 4")
          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

```

## Defining custom error types

To define custom errors, you need to define a function that returns a string as the
error message.

## Example

```js linenums="1" title="custom-error.rn"
fun CustomError(file) {
    return "Something went wrong in " + file
}

raise CustomError("custom-error.rn")
```

**Output:**

```py
Radiation (most recent call last):
  File <stdin>, line 5
FunctionError: Something went wrong in custom-error.rn

raise CustomError("custom-error.rn")
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

```

When the exception is raised, the program stops executing and the exception is
propagated up the call stack. The exception can be caught by a `try` block. If
the exception is not caught, the program stops executing and the exception
is printed to the console.
