# Standard Library

The current Radon repository ships these modules in `stdlib/`:

```text
stdlib/
+-- argparser.rn
+-- array.rn
+-- colorlib.rn
+-- io.rn
+-- math.rn
+-- os.rn
+-- radiation.rn
+-- string.rn
+-- system.rn
+-- universe.rn
+-- winlib.rn
```

## Module Overview

- `argparser` provides a command-line parser implemented in Radon.
- `array` **[Legacy]** — Array methods are now built-in. This module is kept for backwards compatibility.
- `colorlib` provides ANSI color and text-style helpers.
- `io` provides `Input` and `Output` helpers, including password input.
- `math` provides constants and functions such as `PI`, `sqrt`, `pow`, `factorial`, and `sin`.
- `os` exposes filesystem and path helpers through the Python bridge.
- `radiation` defines reusable error constructors such as `ValueError` and `TypeError`.
- `string` **[Legacy]** — String methods are now built-in. This module is kept for backwards compatibility.
- `system` exposes basic system information.
- `universe` is a small example-style module included with the distribution.
- `winlib` exists as a placeholder Windows-specific module.

!!! tip "Built-in Primitive Methods"
    As of the latest release, all primitive types (Array, String, Number, Boolean, HashMap) have methods available via dot notation without any imports. See [Data Types](data-types.md) for the complete reference.

## Importing Modules

Import a whole module:

```rn linenums="1" title="import_module.rn"
import io

var name = io.Input.get_string("Name: ")
print(name)
```

Import selected names:

```rn linenums="1" title="from_import.rn"
from os import path
from io import Output as Out

print(path)
Out.write("Radon")
```

## Notes

Several standard library modules use `pyapi()` internally. That means filesystem, platform, or Python-hosted behavior may trigger Radon's runtime permission prompts.
