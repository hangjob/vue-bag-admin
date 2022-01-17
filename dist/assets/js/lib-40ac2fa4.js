import { C as Contextmenu, _ as _export_sfc, a as _imports_0, i as install } from "./install-ee3552d1.js";
import { d as defineComponent, l as ref, p as provide, R as resolveComponent, X as createElementBlock, k as createVNode, F as Fragment, W as openBlock, I as createApp } from "./@vue-39dade2e.js";
import { M as Mock } from "./mockjs-475bec84.js";
import "./ant-design-vue-7bb391d9.js";
import "./@babel-2ac7e3e5.js";
import "./regenerator-runtime-5031f1e2.js";
import "./vue-types-e39ece55.js";
import "./omit.js-8aeb4109.js";
import "./resize-observer-polyfill-41c23942.js";
import "./lodash-es-23e4464f.js";
import "./moment-f39140d2.js";
import "./dom-align-9919c820.js";
import "./@ant-design-9aa5e5ec.js";
import "./@ctrl-61649d3f.js";
import "./array-tree-filter-7da04b0d.js";
import "./shallow-equal-751ba107.js";
import "./async-validator-f2a6c09d.js";
import "./scroll-into-view-if-needed-c253da67.js";
import "./compute-scroll-into-view-f5b2517a.js";
import "./warning-cc941e3b.js";
import "./dom-scroll-into-view-5e57096f.js";
/* empty css                        */import "./vuex-7184d287.js";
import "./lodash-b6c46e4a.js";
import "./vue-router-d5b806b5.js";
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
import "./@kangc-13311aa6.js";
import "./vue-3d957193.js";
import "./highlight.js-5d1de029.js";
import "./vue3-marquee-280e79c7.js";
import "./jquery-8159147d.js";
import "./print-js-5d24544a.js";
import "./quill-15a337e4.js";
import "./@vueuse-10713cf2.js";
import "./vxe-table-5bbacb31.js";
import "./xe-utils-a3a4c73c.js";
import "./@braks-c6b0a994.js";
import "./mitt-e6c86215.js";
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
Mock.mock("/api/user/userinfo", "post", (options) => {
  let { body } = options;
  let type = "admin";
  let roles = ["admin", "editor", "test"];
  if (body) {
    body = JSON.parse(body);
    if (body.type !== "admin") {
      type = body.type;
      roles = [body.type];
    }
  }
  const data = Mock.mock({
    id: "@id",
    token: Mock.Random.string(30),
    username: "\u7F8A\u5148\u751F",
    createTime: "@datetime(yy-MM-dd HH:mm:ss)",
    text: "@cparagraph(5)",
    roles,
    type,
    "contentType|0-3": 0,
    "serviceUnreadCount|0-10": 0,
    userhead: _imports_0,
    expiredTime: 3600 * 12,
    headimgurl() {
      return Mock.Random.image("40x40", Mock.Random.color(), "#FFF", "png");
    }
  });
  const result = {
    code: 1,
    message: "\u8BF7\u6C42\u6210\u529F",
    data
  };
  return result;
});
Mock.mock("/api/app/notice", "post", () => {
  const data = Mock.mock({
    "array|5": [
      {
        id: "@id",
        text: "@cword(10)",
        createTime: "@datetime(MM-dd HH:mm:ss)"
      }
    ]
  });
  const result = {
    code: 1,
    message: "\u8BF7\u6C42\u6210\u529F",
    data: data.array
  };
  return result;
});
Mock.mock("/api/user/login", "post", () => {
  const result = {
    code: 1,
    message: "\u767B\u5F55\u6210\u529F",
    data: ""
  };
  return result;
});
Mock.mock("/api/user/logout", "post", () => {
  const result = {
    code: 1,
    message: "\u9000\u51FA\u6210\u529F",
    data: ""
  };
  return result;
});
const app = createApp(App);
app.use(install).mount("#app");
window.__app__ = app;
