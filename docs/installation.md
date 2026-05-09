# Installation

Radon is currently easiest to run directly from source. The repository ships with the interpreter entrypoint in `radon.py`, example programs, tests, and the standard library.

## Requirements

- Python 3.11 or newer
- Git

## Clone the Repository

```bash
git clone https://github.com/radon-project/radon.git
cd radon
```

## Run the REPL

```bash
python radon.py
```

When Radon starts, it prints the current interpreter version and documentation link, then opens the interactive shell.

## Run a Script

```bash
python radon.py examples/simple.rn
```

You can also run a one-off command:

```bash
python radon.py -c "print(1 + 2)"
```

## CLI Reference

Radon currently supports these top-level CLI options:

- `source_file` to run a `.rn` file
- `-c`, `--command` to run inline Radon code
- `-v`, `--version` to print the interpreter version
- `-h`, `--help` to show usage information

The repository also contains testing-oriented permission flags:

- `-A`, `--allow-all`
- `-D`, `--allow-disk`
- `-P`, `--allow-py`
- `-W`, `--allow-network`

These bypass runtime permission prompts and are intended for testing rather than normal interactive use.

## Optional REPL Enhancement

For syntax highlighting and an improved REPL experience, install prompt_toolkit:

```bash
pip install prompt_toolkit
```

This enables:

- **Live syntax highlighting** as you type
- **Command history** with up/down arrows
- **Auto-suggestions** from history

The REPL works without it, but the experience is enhanced with prompt_toolkit installed.

## Optional Python Environment

If you want an isolated environment while working on Radon itself:

```bash
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements-dev.txt
```

That setup is useful for development and linting, but not required just to run `radon.py`.
