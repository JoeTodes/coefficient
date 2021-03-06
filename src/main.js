// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {
	faBars,
	faChartLine,
	faCheckCircle,
	faDesktop,
	faHandHoldingUsd,
	faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(
	faBars,
	faCheckCircle,
	faHandHoldingUsd,
	faChartLine,
	faDesktop,
	faMobileAlt
);
export default function(Vue, { router, head, isClient }) {
	Vue.component("font-awesome", FontAwesomeIcon);
	head.link.push({
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Nunito%20Sans",
	});
	router.afterEach((to, from) => {
		if (process.isClient) {
			gtag("set", "page_path", to);
			gtag("event", "page_view");
		}
	});
}
