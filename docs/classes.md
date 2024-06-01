# Classes and Objects

## Object Oriented Programming

Object Oriented Programming (OOP) is a programming paradigm that uses objects
and their interactions to design and program applications. It is based on the
concept of objects rather than just functions and procedures. These objects
are organized into classes, which allow individual objects to be grouped
together. Most modern programming languages including Java, C/C++, and Python
are object-oriented languages, and many older programming languages now have
object-oriented versions.

In Radon, we also have support for OOP. We can create classes and objects.
We can also create methods and fields.

## Classes

Let's start by creating a class. We can create a class using the `class`
keyword. It is followed by the name of the class and the body of the class.
The body of the class is enclosed in curly braces.

```py linenums="1" title="classes.rn"
class Person {
    # Class body
}
```

## Objects

Now that we have created a class, we can create an object. We can create an
object by simply calling the class like as a function. It is followed by the
name of the class and the arguments in parentheses. The arguments are optional.

```js linenums="1" title="objects.rn"
person = Person()
```

## Fields

Fields are the variables that are declared inside a class. They are used to
store data. They are also called instance variables because they are unique
to each instance of the class. They are declared using the `var` keyword. It
is followed by the name of the field and the type of the field.
The type of the field is optional.

```js linenums="1" title="fields.rn"
class Person {
    name = "John"
    age = 20
}
```

## Constructors

Constructors are special methods that are used to initialize the fields of a
class. They are called when an object is created. They are declared using the
`fun` keyword. It is followed by the name (class name) of the constructor and
the parameters in parentheses. The parameters are optional.

```js linenums="1" title="constructors.rn"
class Person {
    fun Person(name, age) {
        this.name = name
        this.age = age
    }
}

person = Person("John", 20)
```

## Methods

Methods are the functions that are declared inside a class. They are used to
define the behavior of the class. They are declared using the `fun` keyword.
It is followed by the name of the method, the parameters in parentheses, and
the return type. The parameters and the return type are optional.

```py linenums="1" title="methods.rn"
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
