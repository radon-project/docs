# Classes and Objects

## Object Oriented Programming

Object Oriented Programming (OOP) is a programming paradigm that uses objects
and their interactions to design and program applications. It is based on the
concept of objects rather than just functions and procedures. These objects
are organized into classes, which allow individual objects to be grouped
together. Most modern programming languages including Java, C++, and Python
are object-oriented languages, and many older programming languages now have
object-oriented versions.

In Radon, we also have support for OOP. We can create classes and objects.
We can also create methods and fields.

## Classes

Let's start by creating a class. We can create a class using the `class`
keyword. It is followed by the name of the class and the body of the class.
The body of the class is enclosed in curly braces.

```rn linenums="1" title="classes.rn"
class Person {
    # Class body
}
```

## Objects

Now that we have created a class, we can create an object. We can create an
object by simply calling the class like as a function. It is followed by the
name of the class and the arguments in parentheses. The arguments are optional.

```rn linenums="1" title="objects.rn"
const person = Person()
```

## Fields

Fields are the variables that are declared inside a class. They are used to
store data. They are also called instance variables because they are unique
to each instance of the class. They are declared like any variable.

```rn linenums="1" title="fields.rn"
class Person {
    var name = "John"
    var age = 20
}
```

## Methods

Methods are the functions that are declared inside a class. They are used to
define the behavior of the class. They are declared using the `fun` keyword.
It is followed by the name of the method, the parameters in parentheses, and
the return type. The parameters and the return type are optional.

```rn linenums="1" title="methods.rn"
class Person {
    fun __constructor__(name, age) {
        this.name = name
        this.age = age
    }

    fun say_hello() {
        print("Hello, " + this.name + "!")
    }
}

person = Person("John", 20)
person.say_hello() # Output: Hello, John!
```

## Magic Methods/Operator Overloading
You may have noticed we declared a method called `__constructor__` in the above example. This is an example of a magic method. Magic methods are used for operator overloading. Here is an incomplete list:

| Method Name | Operator | Example | Example if we used regular function calls instead of operators |
|-------------|----------|---------|----------------------------------------------------------------|
`__constructor__` | Class instantiation | `var foo = Foo(1, 2, 3)` | `var foo = create(Foo); foo.__constructor(1, 2, 3)`[^create_func] |
`__add__` | Addition | `a + b` | `a.__add__(b)` |
`__sub__` | Subtraction | `a - b` | `a.__sub__(b)` |
`__mul__` | Multiplication | `a * b` | `a.__mul__(b)` |
`__div__` | Division | `a / b` | `a.__div__(b)` |
`__pow__` | Exponentiation | `a ^ b` | `a.__pow__(b)` |
`__eq__` | Equality | `a == b` | `a.__eq__(b)` |
`__ne__` | Non-equality | `a != b` | `a.__ne__(b)` |
`__call__` | Calling | `f(1, 2, 3)` | `f.__call__(1, 2, 3)` |
`__getitem__` | Subscripting | `a[b]` | `a.__getitem__(b)` |
`__setitem__` | Subscripting | `a[b] = c` | `a.__setitem(b, c)` |
`__contains__` | `in` | `a in b` | `b.__contains__(a)` |
`__truthy__` | Implicit conversions to bool | `if x { ... }` | `if x.__truthy__() { ... }`[^truthy_errors][^truthy_recursion]


[^create_func]: `create` doesn't actually exist. It's just pseudocode
[^truthy_errors]: If `__truthy__` throws an error, it is ignored and treated as if it returned `false`
[^truthy_recursion]: The `__truthy__` operator of the returned object will be called recursively until it is a `bool`
