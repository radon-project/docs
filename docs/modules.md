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
is the name of the module.

```rn linenums="1" title="hello.rn"
const MESSAGE = "Hello, World!"

fun print_msg() {
    print(MESSAGE)
}
```

## Importing a Module

A module is imported by using the `import` keyword. It is followed by the name
of the module.

```rn linenums="1" title="main.rn"
import hello

hello.print_msg()
```

You can use the `from` keyword to import specific names from the module, as well as renaming them:
```rn linenums="1" title="main.rn"
from hello import MESSAGE, print_msg as pm

pm()
print(MESSAGE)
```

