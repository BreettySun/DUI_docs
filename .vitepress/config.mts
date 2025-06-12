import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "DUI",
	description: "DUI",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],

		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2025-present diggo",
		},
	},
	head: [
		["link", { rel: "icon", href: "/diggo.ico" }],
		["script", { type: "module", src: "/dist/dui/dui.esm.js" }],
		["script", { nomodule: "", src: "/dist/esm/dui.js" }],
	],
});
