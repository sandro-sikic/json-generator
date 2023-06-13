import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
export default defineConfig({
	base: '/zumiez-json-generator',
	plugins: [
		solid({
			ssr: false,
		}),
	],
});
