# Quick Start

Radon can be used in two ways today:

- Start the REPL with `python radon.py`
- Run a file with `python radon.py program.rn`

## Hello World

```rn linenums="1" title="hello_world.rn"
print("Hello, World!")
```

Run it from the repository root:

```bash
python radon.py hello_world.rn
```

## REPL

Start the REPL:

```bash
python radon.py
```

Exit with `exit()` or by typing `exit` at the prompt.

## A Slightly Larger Example

```rn linenums="1" title="example.rn"
import io

fun iseven(num) -> num % 2 == 0

class Greeter {
    fun __constructor__(name) {
        this.name = name
    }

    fun greet() {
        print("Hello, " + this.name)
    }
}

var name = io.Input.get_string("Name: ")
var greeter = Greeter(name)
greeter.greet()
print("Name length: " + str(str_len(name)))
print("Even test: " + str(iseven(42)))
```

This example shows the current language model in practice: imports, functions, classes, methods, built-ins, and values from the standard library.
