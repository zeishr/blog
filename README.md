# Personal blog

This is my personal blog where I share posts about my projects, research and other topics that I find interesting. I also share some of my writeups from CTFs and other challenges.

It is powered by [Hugo](https://gohugo.io/) hosted on [GitHub Pages](https://pages.github.com/).

## 📍 Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) extended installed
- [Just](https://just.systems/) installed (optional)

## 🧩 Usage

### Local development

To run the blog locally, you can use the following command:

```bash
hugo server server --buildDrafts --renderToMemory --disableFastRender
# or if you have just installed
just serve
```

This will start a local server at `http://localhost:1313` where you can see the blog.

### Build

To build the blog, you can use the following command:

```bash
hugo
# or if you have just installed
just build
```

This will generate the static files in the `public` directory.
You can then deploy the `public` directory to your web server or hosting provider.

This is automatically done by GitHub Actions when you push to the `main` branch, see the `.github/workflows/hugo.yaml` file for more information.


## 📜 License

This work is licensed under a [Creative Commons Attribution 4.0 International License][LICENSE].
