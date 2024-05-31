# Exceptions

Radon has a powerfull exception handler. It can handle exceptions and errors in
the program. It can also throw exceptions and errors.

## Handling exceptions

To handle exceptions, we use the `try` and `catch` blocks. The `try` block
contains the code that may throw an exception. The `catch` block contains
the code that handles the exception.

```js linenums="1" title="exceptions.rn"
try {
    // code that may throw an exception
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

To raise an exception, we use the `raise` keyword followed by the exception
type and the message. We have builtin exceptions in `radiation` module. We can
use them to raise exceptions.

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

When the exception is raised, the program stops executing and the exception is
propagated up the call stack. The exception can be caught by a `try` block. If
the exception is not caught, the program stops executing and the exception
is printed to the console.
