import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [tailwindcss()],
	base: '/Theatre/',
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		sourcemap: false,
	},
})
