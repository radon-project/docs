# Functions

## Types of functions

Functions are the building blocks of a task. They are used to define the
behavior of the program. In Radon, we declare functions using the `fun` keyword.
It is followed by the name of the function, the parameters, and the return type.
The body of the function is enclosed in curly braces.

In Radon, there are three types of functions:

- Named functions
- Anonymous functions
- One-liner functions

### Named functions

```rn linenums="1" title="named_functions.rn"
fun add(a, b) {
    return a + b
}
```

### Anonymous functions

```rn linenums="1" title="anonymous_functions.rn"
const add = fun (a, b) {
    return a + b
}
```

### One-liner functions

```rn linenums="1" title="one_liner_functions.rn"
fun add(a, b) -> a + b
```

## Calling functions

Calling a function is done by using the function name followed by the arguments
in parentheses, like in all C-like languages.

```rn linenums="1" title="calling_functions.rn"
add(1, 2) # Output: 3
```

There are also keyword arguments:
```rn linenums="1" title="kwargs.rn"
add(a=34, b=35) # Output: 69
```

That's it! You now know how to call functions in Radon.

## Function parameters

Function parameters are the names listed in the function definition. They are
used to pass values into the function. The parameters are separated by commas.
The parameters are optional.

We can also leave out the parentheses if there are no parameters.

```rn linenums="1" title="function_parameters.rn"
fun say_hello(name) {
    print("Hello, " + name + "!")
}

say_hello("World") # Output: Hello, World!
```

## Default parameters

Default parameters are used to assign a default value to a parameter. If the
parameter is not passed, the default value is used.

```rn linenums="1" title="default_parameters.rn"
fun new_user(name="Guest") {
    print("Hello, " + name + "!")
}

new_user() # Output: Hello, Guest!
new_user("World") # Output: Hello, World!
```

## Variadic parameters
```rn linenums="1" title="variadics.rn"
fun sum(...nums) {
    var ret = 0
    for x in nums {
        ret += x
    }
    return ret
}

sum(1, 2, 3) # Output: 6
sum(1, 2, 3, 4) # Output: 10
sum() # Output: 0
```
