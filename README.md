# Adilosam web with Astro : Basic

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/carfdev/adilosam)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](./public/captura.jpeg)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   ├── favicon.svg
│   └── captura.png
├── src/
│   ├── components/
│   │   ├── Dropdown.astro
│   │   ├── DropdownItem.astro
│   │   ├── Logo.astro
│   │   ├── Menu.astro
│   │   ├── MenuItem.astro
│   │   ├── Navbar.astro
│   │   └── TargetServicesIndex.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── privat/
│   │   │   └── hemstadning.astro
│   │   ├── about.astro
│   │   └── index.astro
│   └── sections/
│       ├── ChooseIndex.astro
│       ├── HeaderIndex.astro
│       ├── ServicesIndex.astro
│       └── SloganIndex.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |
