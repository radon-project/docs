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
- `array` provides an `Array` class with helpers such as `map`, `append`, `pop`, and `slice`.
- `colorlib` provides ANSI color and text-style helpers.
- `io` provides `Input` and `Output` helpers, including password input.
- `math` provides constants and functions such as `PI`, `sqrt`, `pow`, `factorial`, and `sin`.
- `os` exposes filesystem and path helpers through the Python bridge.
- `radiation` defines reusable error constructors such as `ValueError` and `TypeError`.
- `string` provides a `String` class with utility methods and character-set constants.
- `system` exposes basic system information.
- `universe` is a small example-style module included with the distribution.
- `winlib` exists as a placeholder Windows-specific module.

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
