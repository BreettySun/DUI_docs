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
						items: [
							{ text: "Button 按钮", link: "/components/general/button" },
							{ text: "Icon 图标", link: "/components/general/icon" },
						],
					},
					{
						text: "Navigation",
						items: [
							{
								text: "Breadcrumb 面包屑",
								link: "/components/navigation/breadcrumb",
							},
						],
					},
					{
						text: "Feedback",
						items: [
							{
								text: "Message 全局提示",
								link: "/components/feedback/message",
							},
						],
					},
					{
						text: "Other",
						items: [
							{ text: "BackTop 回到顶部", link: "/components/other/backtop" },
						],
					},
				],
			},
		],

		outline: {
			level: [2, 3],
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/BreettySun/DUI" },
		],

		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2025-present Diggo",
		},
	},

	head: [
		["link", { rel: "icon", href: "/DUI_docs/diggo.ico" }],
		["link", { rel: "shortcut icon", href: "/DUI_docs/diggo.ico" }],
		["script", { type: "module", src: "/DUI_docs/dist/dui/dui.esm.js" }],
		["script", { nomodule: "", src: "/DUI_docs/dist/dui/dui.esm.js" }],
		[
			"script",
			{},
			`
      (function () {
        let seed = 0;
        function toast(type, text, duration = 3000, icon) {
          const msg = { id: seed++, type, text, duration, icon };
          window.dispatchEvent(new CustomEvent('d-message', {
            detail: msg,
            bubbles: true,
            composed: true
          }));
        }
        window.$message = {
          success(text, duration, icon) { toast('success', text, duration, icon); },
          info   (text, duration, icon) { toast('info',    text, duration, icon); },
          warning(text, duration, icon) { toast('warning', text, duration, icon); },
          error  (text, duration, icon) { toast('error',   text, duration, icon); },
        };
      })();
    `,
		],
	],
});
