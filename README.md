# WERKS Nuxt Boilerplate

## Installation

```bash
yarn install
```

## Description

Boilerplate to use for WERKS Nuxt projects.

## Bit Usage

To use Bit please view the details here: [Bit Quick Start Guide](https://docs.bit.dev/docs/quick-start)

### Bit Installation

```bash
npm install bit-bin -g
```

Visit [Bit Werks-UI](https://bit.dev/werks-ui) to see all Bit Werks-UI components

### Add new components to Werks UI

1. `bit add <file location> <filename>`
2. `bit tag --all [version]`
3. `bit export werks-ui.<category of component>`

Example:
1. `bit add src/component/headers.vue Header`
2. `bit tag --all 1.0.0`
3. `bit export werks-ui.components`

### Import components from Werks UI
Detailed Information located at [Sourcing Components](https://docs.bit.dev/docs/sourcing-components)
1. `bit import werks-ui.<category of component>/<filename>`

Example:
1. `bit import werks-ui.components/header`