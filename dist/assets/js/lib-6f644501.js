import { C as Contextmenu, _ as _export_sfc, i as install } from "./install-9172edae.js";
import { d as defineComponent, l as ref, p as provide, R as resolveComponent, X as createElementBlock, k as createVNode, F as Fragment, W as openBlock, I as createApp } from "./@vue-d6e06db2.js";
import "./ant-design-vue-a9120dd0.js";
import "./@babel-2ac7e3e5.js";
import "./regenerator-runtime-5031f1e2.js";
import "./vue-types-e39ece55.js";
import "./omit.js-8aeb4109.js";
import "./resize-observer-polyfill-41c23942.js";
import "./lodash-es-23e4464f.js";
import "./moment-f39140d2.js";
import "./dom-align-9919c820.js";
import "./@ant-design-4c41b3a2.js";
import "./@ctrl-61649d3f.js";
import "./array-tree-filter-2d8f4dff.js";
import "./axios-c5bbbefe.js";
import "./shallow-equal-751ba107.js";
import "./async-validator-f2a6c09d.js";
import "./scroll-into-view-if-needed-c253da67.js";
import "./compute-scroll-into-view-f5b2517a.js";
import "./warning-cc941e3b.js";
import "./dom-scroll-into-view-5e57096f.js";
/* empty css                        */import "./vuex-8522b295.js";
import "./store-e22b25f7.js";
import "./lodash-0fe20078.js";
import "./vue-router-10138f4c.js";
import "./nprogress-e54c853a.js";
import "./@antv-15af26e6.js";
import "./tslib-ca86d7fb.js";
import "./detect-browser-3458fdcd.js";
import "./gl-matrix-41ea8061.js";
import "./d3-ease-a82c91a3.js";
import "./d3-interpolate-d19ec80d.js";
import "./d3-color-9ef60408.js";
import "./d3-timer-29ea6e13.js";
import "./fecha-7b6e87e1.js";
import "./size-sensor-ba076d7e.js";
import "./d3-regression-e5d6f1c6.js";
import "./pdfast-e3a16ab3.js";
import "./fmin-29e03d32.js";
import "./d3-hierarchy-82895eaf.js";
import "./crypto-js-33836c9f.js";
import "./@mojs-1ff6c968.js";
import "./echarts-fffd6d3a.js";
import "./zrender-cdd1d9d2.js";
import "./xlsx-be779d30.js";
import "./@kangc-04825b99.js";
import "./vue-43f09295.js";
import "./highlight.js-5d1de029.js";
import "./vue3-marquee-df315685.js";
import "./print-js-49781bfc.js";
import "./quill-f4ba861e.js";
import "./@vueuse-38fac70d.js";
import "./vxe-table-fc8d645e.js";
import "./xe-utils-a3a4c73c.js";
import "./@soerenmartius-2f8ee501.js";
import "./@braks-9645e1a3.js";
import "./mockjs-ecfa51ef.js";
import "./mitt-e6c86215.js";
;
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
app.use(install).mount("#app");
window.__app__ = app;
