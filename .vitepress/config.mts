import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/DUI_docs/",
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
			{
				// text: "快速开始",
				items: [{ text: "快速开始", link: "/quickstart" }],
			},
			{
				text: "Components",
				items: [
					{
						text: "General",
						items: [{ text: "Button", link: "/components/button" }],
					},
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/BreettySun/DUI" },
		],

		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2025-present diggo",
		},
	},
	head: [
		["link", { rel: "shortcut icon", href: "diggo.ico" }],
		["script", { type: "module", src: "dist/dui/dui.esm.js", async: "" }],
		["script", { nomodule: "", src: "dist/esm/dui.js", async: "" }],
	],
});
