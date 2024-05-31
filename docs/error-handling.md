# Error Handling

In Radon, error handling is an important part of writing maintainable code. Radon provides a structured way to handle errors using `try-catch` blocks and allows raising errors using the `raise` keyword.

## Try-Catch Block
The `try-catch` block in Radon is used to handle exceptions that may occur during the execution of a block of code. 

### Syntax
```js linenums="1" title="try-catch.rn"
try
{
  # Code that might throw an exception
}
catch as e
{
  # Code to handle the exception
  # e is a string containing the error message
  print(e)
}
```

### Example
```js linenums="1" title="try-catch.rn"
try
{
  # Attempt to open a file that does not exist
  file = File("nonexistentfile.txt","r")
}
catch as e
{
  # Handle the error by printing the error message
  print("An error occurred: " + e)
}
```

## Raising Errors
In Radon, errors can be raised explicitly using the `raise` keyword. This is useful for enforcing certain conditions or for creating custom error messages.

Radon has a standard `radiation` module for Error Types (you can type `radiation.errors` in the shell to view a list of available error types)

### Syntax
```js linenums="1" title="raise.rn"
import radiation

# Raise an error with a custom message
raise radiation.TypeError("Input must be an integer")

# Raise an error without a custom message
raise radiation.TypeError
```

### Example
```js linenums="1" title="raise.rn"
import radiation

# Function that only accepts integers
fun checkInteger(input)
{
  if not is_int(input)
  {
    raise radiation.TypeError("Input must be an integer")
  }
}

try
{
  checkInteger("string")
}
catch as e
{
  print(e)  # Output: Input must be an integer
}
```

## Custom Error Messages
Radon allows the creation of custom error messages, which can be particularly useful for providing more context-specific error information.

### Syntax
```js linenums="1" title="raise.rn"
fun ArgError(arg)
{
  return "Argument `" + arg + "` is invalid!"
}
```

### Example
```js linenums="1" title="raise.rn"
import radiation

fun validateArg(arg)
{
  if arg == "bad_arg"
  {
    raise radiation.ArgError(arg)
  }
}

try
{
  validateArg("bad_arg")
}
catch as e
{
  print(e)  # Output: Argument `bad_arg` is invalid!
}
```