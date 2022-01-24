import { _ as _export_sfc, C as Contextmenu, b as apiAppRouter, i as install } from "./install-41f7cb8d.js";
import { d as defineComponent, Q as resolveComponent, W as openBlock, a1 as createBlock, a2 as withCtx, u as createTextVNode, Y as createBaseVNode, l as ref, c as reactive, E as toRaw, k as createVNode, p as provide, X as createElementBlock, F as Fragment, I as createApp } from "./@vue-e049e909.js";
import "./ant-design-vue-fdd04231.js";
import "./@babel-2ac7e3e5.js";
import "./regenerator-runtime-5031f1e2.js";
import "./vue-types-e39ece55.js";
import "./omit.js-8aeb4109.js";
import "./resize-observer-polyfill-41c23942.js";
import "./lodash-es-23e4464f.js";
import "./moment-f39140d2.js";
import "./dom-align-9919c820.js";
import "./@ant-design-2d8d3906.js";
import "./@ctrl-61649d3f.js";
import "./array-tree-filter-7da04b0d.js";
import "./mockjs-475bec84.js";
import "./shallow-equal-751ba107.js";
import "./async-validator-f2a6c09d.js";
import "./scroll-into-view-if-needed-c253da67.js";
import "./compute-scroll-into-view-f5b2517a.js";
import "./warning-cc941e3b.js";
import "./dom-scroll-into-view-5e57096f.js";
/* empty css                        */import "./vuex-e2e89b61.js";
import "./lodash-b6c46e4a.js";
import "./vue-router-01acb1b4.js";
import "./axios-0769891d.js";
import "./store-697dbeb5.js";
import "./nprogress-9d8acc3f.js";
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
import "./crypto-js-b36d07a8.js";
import "./@soerenmartius-2f8ee501.js";
import "./@mojs-a20d5914.js";
import "./echarts-fffd6d3a.js";
import "./zrender-cdd1d9d2.js";
import "./xlsx-31acc619.js";
import "./file-saver-4f4235a0.js";
import "./fuse.js-1fb2d2a0.js";
import "./@kangc-402aa479.js";
import "./vue-040306de.js";
import "./highlight.js-5d1de029.js";
import "./vue3-marquee-edfef22c.js";
import "./jquery-8159147d.js";
import "./print-js-5d24544a.js";
import "./quill-15a337e4.js";
import "./@vueuse-4abd6e7f.js";
import "./vxe-table-f054a188.js";
import "./xe-utils-a3a4c73c.js";
import "./@braks-03bbe884.js";
import "./mitt-e6c86215.js";
const _sfc_main$2 = defineComponent({
  name: "adad-ad22222erwerwrew"
});
const _hoisted_1$1 = /* @__PURE__ */ createTextVNode(" category\u5206\u7C7B111 ");
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("input", { type: "text" }, null, -1);
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_yxs_view = resolveComponent("yxs-view");
  return openBlock(), createBlock(_component_yxs_view, null, {
    default: withCtx(() => [
      _hoisted_1$1,
      _hoisted_2$1
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
  name: "new-home",
  setup() {
    const formRef = ref();
    const formState = reactive({
      name: "",
      region: void 0,
      date1: void 0,
      delivery: false,
      type: [],
      resource: "",
      desc: ""
    });
    const rules = {
      name: [
        { required: true, message: "Please input Activity name", trigger: "blur" },
        { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" }
      ],
      region: [{ required: true, message: "Please select Activity zone", trigger: "change" }],
      date1: [{ required: true, message: "Please pick a date", trigger: "change", type: "object" }],
      type: [
        {
          type: "array",
          required: true,
          message: "Please select at least one activity type",
          trigger: "change"
        }
      ],
      resource: [{ required: true, message: "Please select activity resource", trigger: "change" }],
      desc: [{ required: true, message: "Please input activity form", trigger: "blur" }]
    };
    const onSubmit = () => {
      formRef.value.validate().then(() => {
        console.log("values", formState, toRaw(formState));
      }).catch((error) => {
        console.log("error", error);
      });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: "",
      formState,
      rules,
      onSubmit,
      resetForm
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\u8BE5\u9875\u9762\u5DF2\u5F00\u542F\u7F13\u5B58");
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createTextVNode("Zone one");
const _hoisted_4 = /* @__PURE__ */ createTextVNode("Zone two");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("Online");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Promotion");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("Offline");
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Sponsor");
const _hoisted_9 = /* @__PURE__ */ createTextVNode("Venue");
const _hoisted_10 = /* @__PURE__ */ createTextVNode("Create");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("Reset");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_typography_title = resolveComponent("a-typography-title");
  const _component_a_input = resolveComponent("a-input");
  const _component_a_form_item = resolveComponent("a-form-item");
  const _component_a_select_option = resolveComponent("a-select-option");
  const _component_a_select = resolveComponent("a-select");
  const _component_a_date_picker = resolveComponent("a-date-picker");
  const _component_a_switch = resolveComponent("a-switch");
  const _component_a_checkbox = resolveComponent("a-checkbox");
  const _component_a_checkbox_group = resolveComponent("a-checkbox-group");
  const _component_a_radio = resolveComponent("a-radio");
  const _component_a_radio_group = resolveComponent("a-radio-group");
  const _component_a_textarea = resolveComponent("a-textarea");
  const _component_a_button = resolveComponent("a-button");
  const _component_a_form = resolveComponent("a-form");
  const _component_yxs_view = resolveComponent("yxs-view");
  return openBlock(), createBlock(_component_yxs_view, null, {
    default: withCtx(() => [
      createVNode(_component_a_typography_title, { level: 3 }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      _hoisted_2,
      createVNode(_component_a_form, {
        ref: "formRef",
        model: _ctx.formState,
        rules: _ctx.rules,
        "label-col": _ctx.labelCol,
        "wrapper-col": _ctx.wrapperCol
      }, {
        default: withCtx(() => [
          createVNode(_component_a_form_item, {
            ref: "name",
            label: "Activity name",
            name: "name"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_input, {
                value: _ctx.formState.name,
                "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.formState.name = $event)
              }, null, 8, ["value"])
            ]),
            _: 1
          }, 512),
          createVNode(_component_a_form_item, {
            label: "Activity zone",
            name: "region"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_select, {
                value: _ctx.formState.region,
                "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.formState.region = $event),
                placeholder: "please select your zone"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_select_option, { value: "shanghai" }, {
                    default: withCtx(() => [
                      _hoisted_3
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_select_option, { value: "beijing" }, {
                    default: withCtx(() => [
                      _hoisted_4
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            label: "Activity time",
            required: "",
            name: "date1"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_date_picker, {
                value: _ctx.formState.date1,
                "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.formState.date1 = $event),
                "show-time": "",
                type: "date",
                placeholder: "Pick a date",
                style: { "width": "100%" }
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            label: "Instant delivery",
            name: "delivery"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_switch, {
                checked: _ctx.formState.delivery,
                "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => _ctx.formState.delivery = $event)
              }, null, 8, ["checked"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            label: "Activity type",
            name: "type"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_checkbox_group, {
                value: _ctx.formState.type,
                "onUpdate:value": _cache[4] || (_cache[4] = ($event) => _ctx.formState.type = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_checkbox, {
                    value: "1",
                    name: "type"
                  }, {
                    default: withCtx(() => [
                      _hoisted_5
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_checkbox, {
                    value: "2",
                    name: "type"
                  }, {
                    default: withCtx(() => [
                      _hoisted_6
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_checkbox, {
                    value: "3",
                    name: "type"
                  }, {
                    default: withCtx(() => [
                      _hoisted_7
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            label: "Resources",
            name: "resource"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_radio_group, {
                value: _ctx.formState.resource,
                "onUpdate:value": _cache[5] || (_cache[5] = ($event) => _ctx.formState.resource = $event)
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_radio, { value: "1" }, {
                    default: withCtx(() => [
                      _hoisted_8
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_radio, { value: "2" }, {
                    default: withCtx(() => [
                      _hoisted_9
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            label: "Activity form",
            name: "desc"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_textarea, {
                value: _ctx.formState.desc,
                "onUpdate:value": _cache[6] || (_cache[6] = ($event) => _ctx.formState.desc = $event)
              }, null, 8, ["value"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, { "wrapper-col": { span: 14, offset: 4 } }, {
            default: withCtx(() => [
              createVNode(_component_a_button, {
                type: "primary",
                onClick: _ctx.onSubmit
              }, {
                default: withCtx(() => [
                  _hoisted_10
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_a_button, {
                style: { "margin-left": "10px" },
                onClick: _ctx.resetForm
              }, {
                default: withCtx(() => [
                  _hoisted_11
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "rules", "label-col", "wrapper-col"])
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
;
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
const file = { "/src/demo/views/category/index.vue": __glob_5_0, "/src/demo/views/home/index.vue": __glob_5_1 };
console.log("%c \u6B64\u9875\u9762\u9700\u8981\u540E\u7AEF\u670D\u52A1\uFF0C\u8BF7\u5148\u542F\u52A8egg\u670D\u52A1", "color:#ffacac;");
const app = createApp(App);
apiAppRouter().then((paths) => {
  const $options = {
    router: { file, paths },
    store: {
      module: store
    }
  };
  app.use(install, $options).mount("#app");
}).catch(() => {
  app.use(install).mount("#app");
});
