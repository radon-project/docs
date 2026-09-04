# The Radon Programming Language

<figure markdown="span">
  ![Radon Logo](./assets/images/radon.png "Radon Logo"){ width="300" }
  <figcaption>
    <a href="https://radon-project.github.io/">
        <strong>Radon</strong>
    </a> is a programming language that is designed to be easy to learn and use.
  </figcaption>
</figure>

Maintained by [Md. Almas Ali][almas]

[![Hits](https://hits.sh/radon-project.github.io/radon.svg)](https://hits.sh/radon-project.github.io/radon/)
[![GitHub release (latest by date)](https://img.shields.io/github/v/release/radon-project/radon?style=flat-square)][github]
[![GitHub last commit](https://img.shields.io/github/last-commit/radon-project/radon?style=flat-square)][github]
[![GitHub issues](https://img.shields.io/github/issues/radon-project/radon?style=flat-square)][github]
[![GitHub pull requests](https://img.shields.io/github/issues-pr/radon-project/radon?style=flat-square)][github]
[![GitHub contributors](https://img.shields.io/github/contributors/radon-project/radon?style=flat-square)][github]
[![GitHub](https://img.shields.io/github/license/radon-project/radon?style=flat-square)][github]
[![GitHub stars](https://img.shields.io/github/stars/radon-project/radon?style=social)][github]
[![license](https://img.shields.io/github/license/radon-project/radon.svg)](https://github.com/radon-project/radon/blob/master/LICENSE)

---

**Website**: [https://radon-project.github.io][web]{:target="_blank"}

**Documentation**: [https://radon-project.github.io/docs][docs]{:target="_blank"}

**Source**: [https://github.com/radon-project/radon][github]{:target="_blank"}

---

## What Radon Includes Today

The current repository ships with:

- An interactive REPL in `radon.py`
- File execution with `python radon.py program.rn`
- Inline execution with `python radon.py -c 'print("hello")'`
- Dynamic types including numbers, strings, booleans, arrays, hash maps, and null
- Functions, classes, methods, modules, and `from ... import ...` support
- Full object-oriented programming: inheritance (single, multiple, multilevel, hybrid) with `super()`, enforced `public`/`private`/`protected` access modifiers, and abstract classes
- `async`/`await` with real concurrency via `spawn()`/`gather()`
- A Radon standard library in `stdlib/`
- A Python bridge through `pyapi()` with runtime permission prompts

## First Run

```bash
git clone https://github.com/radon-project/radon.git
cd radon
python radon.py
```

To run a file instead of the REPL:

```bash
python radon.py examples/simple.rn
```

## Example

```rn linenums="1" title="login.rn"
import io

class Network {
    fun __constructor__(username, password) {
        this.username = username
        this.password = password
    }

    fun login() {
        if this.username == "radon" {
            if this.password == "password" {
                print("Log in successful")
            } else {
                print("Invalid credentials")
            }
        } else {
            print("Invalid credentials")
        }
    }
}

var username = input("Enter your username: ")
var password = io.Input.get_password("Enter your password: ")

var network = Network(username, password)
network.login()
```

## Notes on Permissions

Some capabilities delegate to Python or the host system. When a program uses the Python API, disk access, or network access, Radon can prompt before continuing. The CLI also exposes testing-only flags such as `--allow-py`, `--allow-disk`, and `--allow-network`.

[almas]: https://github.com/Almas-Ali "Md. Almas Ali"
[github]: https://github.com/radon-project/radon "Radon"
[web]: https://radon-project.github.io/ "Web"
[docs]: https://radon-project.github.io/docs "Docs"
