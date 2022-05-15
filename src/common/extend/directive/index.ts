import {App} from "vue";
import setupDebounce from "@/common/extend/directive/debounce";
import setupThrottle from "@/common/extend/directive/throttle";

export function setupGlobDirectives(app: App) {
    setupDebounce(app)
    setupThrottle(app)
}
