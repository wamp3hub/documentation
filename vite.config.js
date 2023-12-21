import { sveltekit } from '@sveltejs/kit/vite'
import svelteSVG from "vite-plugin-svelte-svg"
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [
		sveltekit(),
		svelteSVG(),
	]
})
