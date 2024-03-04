import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	content: [		
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {
			colors: {
				'primary': '#12A1ED',
				'light-color': '#121417',
				'border': '#E5E8EB',
			}
		},
	},
	plugins: [
		animations,
		require('flowbite/plugin')
	],
	darkMode: 'media',
}

