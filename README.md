# Documentation of Radon

This documentation is generated using `mkdocs` and `mkdocs-material`. The documentation is hosted on [Github Pages](https://radon-project.github.io/docs).

![https://github.com/radon-project/docs/actions/workflows/deploy.yaml/badge.svg](https://github.com/radon-project/docs/actions/workflows/deploy.yaml/badge.svg)
![https://github.com/radon-project/docs/actions/workflows/tests.yaml/badge.svg](https://github.com/radon-project/docs/actions/workflows/tests.yaml/badge.svg)

## Local Development

Follow the instractions for local development setup.

```bash
# Clone the repo
git clone git@github.com:radon-project/docs.git radon-docs

# cd into the directory
cd radon-docs

# Create virtual envirenment
python3 -m venv .venv

# Activate the virtual environment (Windows)
.venv\Scripts\activate

# Activate the virtual environment (Linux or MacOS)
source .venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run mkdocs server
mkdocs serve
```

# License

This documentation is Licensed under [GNU GPL V3](LICENSE)
