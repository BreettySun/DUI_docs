import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import BackTop from "../components/BackTop.vue";
import { useRoute } from "vitepress";

export default {
	...DefaultTheme,
	Layout: () => {
		const route = useRoute();

		return h(DefaultTheme.Layout, null, {
			"layout-bottom": () => {
				if (route.path.includes("backtop")) {
					return null;
				}
				return h(BackTop);
			},
		});
	},
};
