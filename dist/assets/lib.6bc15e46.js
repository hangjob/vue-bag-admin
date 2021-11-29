import { C as Contextmenu, _ as _export_sfc, m as mitt, s as setupInit, r as router } from "./mitt.920fab86.js";
import { d as defineComponent, h as ref, p as provide, L as resolveComponent, R as createElementBlock, f as createVNode, F as Fragment, M as openBlock, H as createApp } from "./vxe-table.b0b1f0db.js";
import "./ant-design-vue.62f23429.js";
import "./xe-utils.10e1e1d8.js";
import "./lodash.f4d4cfec.js";
import "./echarts.38dfff78.js";
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "App",
  components: {
    Contextmenu
  },
  setup(props, context) {
    const contextmenu = ref(null);
    provide("appContextmenu", contextmenu);
    return {
      contextmenu
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_Contextmenu = resolveComponent("Contextmenu");
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_router_view),
    createVNode(_component_Contextmenu, { ref: "contextmenu" }, null, 512)
  ], 64);
}
var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const app = createApp(App);
app.provide("$mitt", mitt());
setupInit(app);
router.isReady().then(() => {
  app.mount("#app");
});
window.__app__ = app;
