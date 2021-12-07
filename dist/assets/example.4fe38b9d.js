import { _ as _export_sfc, C as Contextmenu, m as mitt, s as setupInit, r as router, a as apiAppRouter } from "./mitt.a8b03a81.js";
import { d as defineComponent, L as resolveComponent, M as openBlock, N as createBlock, O as withCtx, q as createTextVNode, P as createBaseVNode, h as ref, m as withDirectives, Q as vModelText, p as provide, R as createElementBlock, f as createVNode, F as Fragment, H as createApp } from "./vxe-table.c373b574.js";
import "./ant-design-vue.b23b4cea.js";
import "./xe-utils.10e1e1d8.js";
import "./lodash.f4d4cfec.js";
import "./echarts.38dfff78.js";
const _sfc_main$2 = defineComponent({
  name: "adad-ad22222erwerwrew"
});
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode(" category\u5206\u7C7B ");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("input", { type: "text" }, null, -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_yxs_view = resolveComponent("yxs-view");
  return openBlock(), createBlock(_component_yxs_view, null, {
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2
    ]),
    _: 1
  });
}
var index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
var __glob_5_0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$1
});
const _sfc_main$1 = defineComponent({
  name: "dsad-dsadsasda",
  setup() {
    const val = ref();
    val.value = 2222;
    return {
      val
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" \u521A\u624D\u5EFA\u8BBE\u7684 ");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_yxs_view = resolveComponent("yxs-view");
  return openBlock(), createBlock(_component_yxs_view, null, {
    default: withCtx(() => [
      _hoisted_1,
      withDirectives(createBaseVNode("input", {
        type: "text",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.val = $event)
      }, null, 512), [
        [vModelText, _ctx.val]
      ])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var __glob_5_1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index
});
var App_vue_vue_type_style_index_0_lang = "";
const _sfc_main = defineComponent({
  name: "App",
  components: {
    Contextmenu
  },
  setup() {
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
const install = async (app2, $plugin) => {
  app2.config.globalProperties.$plugin = $plugin;
  app2.provide("AppGlobal", { version: "0.0.1" });
  app2.provide("$mitt", mitt());
  setupInit(app2);
  router.isReady().then(() => {
    app2.mount("#app");
  });
  window.__app__ = app2;
};
const app$1 = {
  namespaced: true,
  state: {
    config: {
      name: "vite-vue3-typescript-admin"
    }
  },
  getters: {
    config: (state) => {
      return state.config;
    }
  },
  mutations: {
    updateConfig(state) {
      state.config.name = "\u6D4B\u8BD5";
    }
  }
};
const store = {
  app: app$1
};
const app = createApp(App);
apiAppRouter().then((res) => {
  const locas = { "/src/example/views/category/index.vue": __glob_5_0, "/src/example/views/home/index.vue": __glob_5_1 };
  const $plugin = {
    router: { views: [...res], external: locas },
    store: {
      module: store
    }
  };
  install(app, $plugin).then(() => {
  });
});
