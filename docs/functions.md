# Functions

## Types of functions

Functions are the building blocks of a task. They are used to define the behavior of the program. In Radon, we declare functions using the `fun` keyword. It is followed by the name of the function, the parameters, and the return type. The body of the function is enclosed in curly braces.

In Radon, there are three types of functions:

- Named functions
- Anonymous functions
- One-liner functions

### Named functions

```js linenums="1" title="named_functions.rn"
fun add(a, b) {
    return a + b
}
```

### Anonymous functions

```js linenums="1" title="anonymous_functions.rn"
fun add = (a, b) {
    return a + b
}
```

### One-liner functions

```js linenums="1" title="one_liner_functions.rn"
fun add(a, b) -> a + b
```

## Calling functions

Calling a function is done by using the function name followed by the arguments in parentheses.

```py linenums="1" title="calling_functions.rn"
add(1, 2) # Output: 3
```

That's it! You now know how to call functions in Radon.

## Function parameters

Function parameters are the names listed in the function definition. They are used to pass values into the function. The parameters are separated by commas. The parameters are optional.

We can also leave out the parentheses if there are no parameters.

```py linenums="1" title="function_parameters.rn"
fun sayHello(name) {
    print("Hello, " + name + "!")
}

sayHello("World") # Output: Hello, World!
```
