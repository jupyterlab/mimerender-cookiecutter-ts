# JupyterLab mimerender-cookiecutter-ts

![Github Actions Status](https://github.com/jupyterlab/mimerender-cookiecutter-ts/workflows/CI/badge.svg)

A [cookiecutter](https://github.com/audreyr/cookiecutter) template for creating
a JupyterLab MIME renderer extension in TypeScript.

## Use the template to create package

Install cookiecutter.

```
pip install cookiecutter
```

Use cookiecutter to generate a package, following the prompts to fill in the name and authorship of your new JupyterLab MIME render extension.

```
cookiecutter https://github.com/jupyterlab/mimerender-cookiecutter-ts
```

If you'd like to generate a package for a specific JupyterLab release, use the `--checkout` option and give a tag or commit from this repository.

```
cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts --checkout v1.0
cookiecutter https://github.com/jupyterlab/extension-cookiecutter-ts --checkout v2.0
```

## A simple example

Your new extension includes a very simple example of a working extension. Use this example as a guide to build your own extension.
