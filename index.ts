import { defineNuxtModule, addComponentsDir } from '@nuxt/kit'
import { fileURLToPath } from 'url'
import { join } from 'path'

export default defineNuxtModule({
  meta: {
    name: 'ember-ui',
    configKey: 'ember-ui'
  },
  async setup(_, nuxt) {
    const rootDir = fileURLToPath(new URL('.', import.meta.url))

    await addComponentsDir({
      path: join(rootDir, 'components'),
      pathPrefix: false,
      global: true,
      prefix: 'Em' // Important!
    })

    nuxt.options.css.push(join(rootDir, 'assets/css/main.css'))
  }
})
