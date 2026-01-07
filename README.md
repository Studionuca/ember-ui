# Studionuca Ember

Ember is an design system, made for Studionuca products. It's based on nuxt/ui and tailwindcss.

## Installation

```bash
npm install https://github.com/studionuca/ember-ui.git
```

Add the following to your `nuxt.config.ts` file:

```ts
export default defineNuxtConfig({
  modules: ['ember-ui'],
  components: [
    {
      path: '~/components/',
      prefix: 'Em'
    },
  ],
  ui: {
    prefix: 'Em',
    colorMode: true,
  }
})
```
