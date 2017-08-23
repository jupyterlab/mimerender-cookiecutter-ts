# JupyterLab mimerender-cookiecutter-ts

A [cookiecutter](https://github.com/audreyr/cookiecutter) template for creating
a JupyterLab MIME renderer extension in TypeScript. (See also
[mimerender-cookiecutter-js](https://github.com/jupyterlab/mimerender-cookiecutter-js)
for a MIME renderer extension in CommonJS.)

## Use the template to create package

Install cookiecutter.

```
pip install cookiecutter
```

Use cookiecutter to generate a package, following the prompts to fill in the name and authorship of your new JupyterLab MIME render extension.

```
cookiecutter https://github.com/jupyterlab/mimerender-cookiecutter-ts
```

## A simple example

The ``src/`` directory of your new extension includes a very simple example of a working extension, written in TypeScript. Use this example as a guide to build your own extension.

## Package name

We suggest that simple extension names start with `jupyterlab_` and use underscores if needed to improve readability, such as `jupyterlab_myextension`.
