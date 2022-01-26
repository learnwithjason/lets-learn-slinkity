import { defineConfig } from 'slinkity'
import reactRenderer from '@slinkity/renderer-react'
import vueRenderer from '@slinkity/renderer-vue'
import svelteRenderer from '@slinkity/renderer-svelte'

export default defineConfig({
  renderers: [reactRenderer, vueRenderer, svelteRenderer],
})
