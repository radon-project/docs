# Radon Documentation

This repository contains the MkDocs source for the public Radon documentation at [radon-project.github.io/docs](https://radon-project.github.io/docs).

![Deploy workflow](https://github.com/radon-project/docs/actions/workflows/deploy.yaml/badge.svg)
![Tests workflow](https://github.com/radon-project/docs/actions/workflows/tests.yaml/badge.svg)

## Local Development

```bash
# Clone the repository
git clone git@github.com:radon-project/docs.git radon-docs
cd radon-docs

# Create and activate a virtual environment
python -m venv .venv
.venv\Scripts\activate

# Install documentation dependencies
pip install -r requirements.txt

# Start the local docs server
mkdocs serve
```

The site will be available at `http://127.0.0.1:8000/`.

## Scope

- The source-based installation flow
- The current CLI entrypoints in `radon.py`
- The built-in functions exported by the interpreter
- The modules currently shipped in `stdlib/`

## License

This documentation is licensed under [GNU GPL v3](LICENSE).
