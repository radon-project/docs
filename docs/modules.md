# Modules

## Introduction to Modules

Modules are a way to organize code in a way that is easy to reuse, test,
and debug. Modules are also called packages, libraries, or frameworks.
Modules are used to group related code together. For example, a module can
be used to group code that is related to a specific task, such as sending
an email. Modules are also used to group code that is related to a specific
feature, such as a user interface.

## Creating a Module

A module is created by creating a file with the `.rn` extension. The file name
is the name of the module. The name should have to be in Pascal Case `PascalCase`.
The module have to implement the same name class as the file name. The class
name should have to be in Pascal Case `PascalCase`.

```rn linenums="1" title="Hello.rn"
class Hello {
    fun __constructor__() {
        print("Hello, World!")
    }
}
```

## Importing a Module

A module is imported by using the `include` keyword. It is followed by the name
of the module. The name of the module should have to be in Pascal Case `PascalCase`.

```rn linenums="1" title="main.rn"
import Hello
```
