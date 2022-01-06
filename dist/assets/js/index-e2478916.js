var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
import { u as useStore } from "./vuex-8967e91b.js";
import { u as useRouter, a as useRoute } from "./vue-router-800df73d.js";
import { t as toTree, _ as _export_sfc, f as find, b as apiLogout, l as locaStore, a as _imports_0, c as last } from "./install-541d9a3a.js";
import { M as h, R as resolveComponent, k as createVNode, d as defineComponent, j as computed, l as ref, s as watchEffect, i as isVNode, W as openBlock, a0 as createBlock, a1 as withCtx, Y as createBaseVNode, a3 as toDisplayString, c as reactive, X as createElementBlock, _ as renderList, u as createTextVNode, F as Fragment, h as inject, o as onMounted, t as withDirectives, a2 as vModelText, a8 as normalizeClass, ab as withKeys, S as createCommentVNode, ac as withModifiers, n as nextTick, a4 as pushScopeId, a5 as popScopeId, w as watch, ad as KeepAlive, aa as resolveDynamicComponent, $ as normalizeStyle } from "./@vue-1066c1a5.js";
import { a1 as BellOutlined, a2 as ClearOutlined, D as DownOutlined, a3 as ExpandOutlined, a4 as MenuFoldOutlined, a5 as MenuUnfoldOutlined, S as SearchOutlined, a6 as SyncOutlined, b as CloseOutlined, a7 as CaretRightFilled, a8 as CaretLeftFilled } from "./@ant-design-16854b62.js";
import { n as notification } from "./ant-design-vue-682c916d.js";
import { N as NProgress } from "./nprogress-9d8acc3f.js";
/* empty css                        */import "./lodash-b6c46e4a.js";
import "./mockjs-475bec84.js";
import "./axios-0769891d.js";
import "./store-697dbeb5.js";
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
import "./moment-f39140d2.js";
import "./crypto-js-b36d07a8.js";
import "./@mojs-a20d5914.js";
import "./echarts-fffd6d3a.js";
import "./zrender-cdd1d9d2.js";
import "./xlsx-31acc619.js";
import "./@kangc-b9f4d80a.js";
import "./vue-5d336e77.js";
import "./highlight.js-5d1de029.js";
import "./vue3-marquee-58769409.js";
import "./print-js-5d24544a.js";
import "./quill-15a337e4.js";
import "./@vueuse-e750d898.js";
import "./vxe-table-b43f7153.js";
import "./xe-utils-a3a4c73c.js";
import "./@soerenmartius-2f8ee501.js";
import "./@braks-d66beae1.js";
import "./mitt-e6c86215.js";
import "./@ctrl-61649d3f.js";
import "./@babel-2ac7e3e5.js";
import "./regenerator-runtime-5031f1e2.js";
import "./vue-types-e39ece55.js";
import "./omit.js-8aeb4109.js";
import "./resize-observer-polyfill-41c23942.js";
import "./lodash-es-23e4464f.js";
import "./dom-align-9919c820.js";
import "./array-tree-filter-7da04b0d.js";
import "./shallow-equal-751ba107.js";
import "./async-validator-f2a6c09d.js";
import "./scroll-into-view-if-needed-c253da67.js";
import "./compute-scroll-into-view-f5b2517a.js";
import "./warning-cc941e3b.js";
import "./dom-scroll-into-view-5e57096f.js";
const deepMenu = function(list) {
  let html = null;
  return list.filter((item) => item.shows).map((item) => {
    if (item.children && item.children.length) {
      html = h(createVNode(resolveComponent("a-sub-menu"), {
        "key": item.id
      }, null), {}, {
        title: () => {
          return item.icon ? [h(resolveComponent(item.icon)), h("span", item.name)] : h("span", item.name);
        },
        default: () => {
          let children = item.children.map((todo) => {
            return createVNode(resolveComponent("a-menu-item"), {
              "menu-info": item,
              "key": todo.id
            }, {
              default: () => [todo.name]
            });
          });
          return children && deepMenu(item.children);
        }
      });
    } else {
      html = h(createVNode(resolveComponent("a-menu-item"), {
        "menu-info": item,
        "key": item.id
      }, null), {}, {
        default: () => {
          return item.icon ? [h(resolveComponent(item.icon)), h("span", item.name)] : h("span", item.name);
        }
      });
    }
    return html;
  });
};
function _isSlot$1(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var YxsMenuSlider = defineComponent({
  name: "yxs-menu-slider",
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const browser = computed(() => store.getters["app/getBrowser"]);
    const collapsed = computed(() => store.state.app.collapsed);
    const selectedKeys = ref([]);
    const openKeys = ref([]);
    const menuList = computed(() => toTree(store.getters["app/menuList"]));
    const visible = ref(true);
    const goView = (item) => {
      if (item.path && item.path != route.path) {
        router.push(item.path).then();
      }
      if (item.httpViewPath) {
        window.open(item.httpViewPath);
      }
    };
    const handleClick = (res) => {
      goView(res.item["menu-info"]);
    };
    watchEffect(() => {
      const tabPaths = JSON.parse(JSON.stringify(store.getters["app/tabViewsPath"]));
      openKeys.value = tabPaths.map((item) => item.id);
      if (tabPaths.length) {
        selectedKeys.value = [tabPaths.pop().id];
      }
    });
    return {
      selectedKeys,
      menuList,
      handleClick,
      openKeys,
      visible,
      collapsed,
      browser
    };
  },
  render(ctx) {
    const children = deepMenu(ctx.menuList);
    return ctx.visible && createVNode("div", {
      "class": "yxs-menu-slider"
    }, [createVNode(resolveComponent("a-menu"), {
      "selectedKeys": ctx.selectedKeys,
      "onUpdate:selectedKeys": ($event) => ctx.selectedKeys = $event,
      "openKeys": ctx.openKeys,
      "onUpdate:openKeys": ($event) => ctx.openKeys = $event,
      "inline-collapsed": ctx.collapsed,
      "mode": "inline",
      "onClick": ctx.handleClick,
      "theme": "light"
    }, _isSlot$1(children) ? children : {
      default: () => [children]
    })]);
  }
});
;
var slider_vue_vue_type_style_index_0_scoped_true_lang = "";
;
var slider_vue_vue_type_style_index_1_lang = "";
const _sfc_main$6 = defineComponent({
  name: "Slider",
  components: {
    YxsMenuSlider
  },
  setup() {
    const store = useStore();
    const app = store.state.app;
    const mask = computed(() => app.themeConfig.floatingMenu);
    const visible = computed(() => {
      return mask.value ? app.floatingVisible : true;
    });
    const width = computed(() => {
      let menuMinWidth = 80;
      if (!app.collapsed || app.themeConfig.floatingMenu) {
        menuMinWidth = app.themeConfig.menuMaxWidth;
      }
      return menuMinWidth;
    });
    const logoTitle = computed(() => width.value === 80 ? "admin" : "vue-vite-admin-ts");
    const close = () => {
      store.commit("app/updateFloatingVisible", !store.getters["app/getFloatingVisible"]);
    };
    return {
      width,
      visible,
      mask,
      close,
      logoTitle
    };
  }
});
const _hoisted_1$6 = { class: "slider-container" };
const _hoisted_2$6 = { class: "left-slider" };
const _hoisted_3$4 = { class: "left-slider-logo" };
const _hoisted_4$1 = { class: "scroll" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_YxsMenuSlider = resolveComponent("YxsMenuSlider");
  const _component_a_drawer = resolveComponent("a-drawer");
  return openBlock(), createBlock(_component_a_drawer, {
    closable: false,
    visible: _ctx.visible,
    mask: _ctx.mask,
    placement: "left",
    width: _ctx.width,
    wrapClassName: "drawer",
    getContainer: false,
    onClose: _ctx.close
  }, {
    title: withCtx(() => []),
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$6, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$4, toDisplayString(_ctx.logoTitle), 1),
          createBaseVNode("div", _hoisted_4$1, [
            createVNode(_component_YxsMenuSlider)
          ])
        ])
      ])
    ]),
    _: 1
  }, 8, ["visible", "mask", "width", "onClose"]);
}
var Slider = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-72903aa8"]]);
const themeList = [
  {
    name: "\u9ED8\u8BA4",
    path: "default"
  },
  {
    name: "\u8584\u66AE",
    path: "dusk"
  },
  {
    name: "\u706B\u5C71",
    path: "volcano"
  },
  {
    name: "\u65E5\u66AE",
    path: "eventide"
  },
  {
    name: "\u660E\u6E05",
    path: "ming"
  }
];
const tabStyles = [
  { name: "\u9ED8\u8BA4", value: 1 },
  { name: "\u5706\u70B9", value: 2 },
  { name: "\u5361\u7247", value: 3 }
];
const _sfc_main$5 = defineComponent({
  setup() {
    const placement = ref("right");
    const visible = ref(false);
    const store = useStore();
    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    const themeConfig = store.getters["app/getThemeConfig"];
    const cacheTheme = __spreadValues({}, themeConfig);
    let data = find({ key: "path", value: cacheTheme }, themeList);
    const formState = reactive({
      theme: data ? data.path : themeList[0].path,
      floatingMenu: themeConfig.floatingMenu,
      tabStyle: themeConfig.tabStyle,
      foldPrjMenu: themeConfig.foldPrjMenu
    });
    const changeTheme = (path) => {
      window["less"].modifyVars({
        "@primary-color": "blue"
      }).then(console.log);
    };
    const changeStyle = (value, key) => {
      store.commit("app/updateThemeConfig", { key, value });
      store.commit("app/updateCollapsed", false);
      console.log(store.getters["app/getThemeConfig"]);
    };
    const width = computed(() => store.getters["app/getBrowser"].isMobile ? "80%" : 400);
    return {
      placement,
      visible,
      showDrawer,
      onClose,
      labelCol: {
        span: 10
      },
      wrapperCol: {
        span: 14
      },
      formState,
      themeList,
      tabStyles,
      changeTheme,
      width,
      changeStyle
    };
  }
});
const _hoisted_1$5 = { style: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  borderTop: "1px solid #e8e8e8",
  padding: "10px 16px",
  textAlign: "right",
  left: 0,
  background: "#fff",
  borderRadius: "0 0 4px 4px"
} };
const _hoisted_2$5 = /* @__PURE__ */ createTextVNode("\u5173\u95ED");
const _hoisted_3$3 = /* @__PURE__ */ createTextVNode("\u4FDD\u5B58\u8BBE\u7F6E");
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_a_switch = resolveComponent("a-switch");
  const _component_a_form_item = resolveComponent("a-form-item");
  const _component_a_select_option = resolveComponent("a-select-option");
  const _component_a_select = resolveComponent("a-select");
  const _component_a_form = resolveComponent("a-form");
  const _component_a_button = resolveComponent("a-button");
  const _component_a_drawer = resolveComponent("a-drawer");
  return openBlock(), createBlock(_component_a_drawer, {
    title: "\u8BBE\u7F6E\u4E3B\u9898",
    placement: _ctx.placement,
    closable: false,
    width: _ctx.width,
    visible: _ctx.visible,
    onClose: _ctx.onClose
  }, {
    default: withCtx(() => [
      createVNode(_component_a_form, {
        model: _ctx.formState,
        labelAlign: "right",
        "label-col": _ctx.labelCol,
        "wrapper-col": _ctx.wrapperCol
      }, {
        default: withCtx(() => [
          createVNode(_component_a_form_item, {
            labelAlign: "left",
            label: "\u662F\u5426\u60AC\u6D6E\u5DE6\u4FA7\u83DC\u5355"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_switch, {
                onChange: _cache[0] || (_cache[0] = (check) => {
                  _ctx.changeStyle(check, "floatingMenu");
                }),
                checked: _ctx.formState.floatingMenu,
                "onUpdate:checked": _cache[1] || (_cache[1] = ($event) => _ctx.formState.floatingMenu = $event)
              }, null, 8, ["checked"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            labelAlign: "left",
            label: "\u662F\u5426\u6298\u53E0\u9879\u76EE\u83DC\u5355"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_switch, {
                onChange: _cache[2] || (_cache[2] = (check) => {
                  _ctx.changeStyle(check, "foldPrjMenu");
                }),
                checked: _ctx.formState.foldPrjMenu,
                "onUpdate:checked": _cache[3] || (_cache[3] = ($event) => _ctx.formState.foldPrjMenu = $event)
              }, null, 8, ["checked"])
            ]),
            _: 1
          }),
          createVNode(_component_a_form_item, {
            labelAlign: "left",
            label: "\u9875\u7B7E\u663E\u793A\u98CE\u683C"
          }, {
            default: withCtx(() => [
              createVNode(_component_a_select, {
                onChange: _cache[4] || (_cache[4] = (value) => {
                  _ctx.changeStyle(value, "tabStyle");
                }),
                value: _ctx.formState.tabStyle,
                "onUpdate:value": _cache[5] || (_cache[5] = ($event) => _ctx.formState.tabStyle = $event),
                placeholder: "\u9009\u62E9\u9875\u7B7E\u663E\u793A\u98CE\u683C"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.tabStyles, (item) => {
                    return openBlock(), createBlock(_component_a_select_option, {
                      key: item.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["value"])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model", "label-col", "wrapper-col"]),
      createBaseVNode("div", _hoisted_1$5, [
        createVNode(_component_a_button, {
          style: { "margin-right": "8px" },
          onClick: _ctx.onClose
        }, {
          default: withCtx(() => [
            _hoisted_2$5
          ]),
          _: 1
        }, 8, ["onClick"]),
        createVNode(_component_a_button, {
          type: "primary",
          onClick: _ctx.onClose
        }, {
          default: withCtx(() => [
            _hoisted_3$3
          ]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    _: 1
  }, 8, ["placement", "width", "visible", "onClose"]);
}
var userSetting = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
function checkFull() {
  let isFull = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
  return Boolean(isFull);
}
function requestFullScreen(element) {
  if (!element) {
    element = document.body;
  }
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
}
function exitFullScreen() {
  const _document = document;
  if (_document.cancelFullScreen) {
    _document.cancelFullScreen();
  } else if (_document.mozCancelFullScreen) {
    _document.mozCancelFullScreen();
  } else if (_document.webkitCancelFullScreen) {
    _document.webkitCancelFullScreen();
  } else if (_document.msExitFullscreen) {
    _document.msExitFullscreen();
  }
}
function switchScreen() {
  let full = checkFull();
  if (full) {
    exitFullScreen();
  } else {
    requestFullScreen();
  }
}
function fullscreenchange(handle) {
  const _document = document;
  _document.addEventListener("fullscreenchange", handle);
  _document.addEventListener("webkitfullscreenchange", handle);
  _document.addEventListener("mozfullscreenchange", handle);
  _document.addEventListener("MSFullscreenChange", handle);
}
function handleKeyBoard(e, handle) {
  if (e.keyCode === 229) {
    return;
  }
  handle(e);
}
;
var headerTopRightUser_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = defineComponent({
  components: {
    userSetting,
    BellOutlined,
    ClearOutlined,
    DownOutlined,
    ExpandOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
    SyncOutlined
  },
  setup() {
    const router = useRouter();
    const userSetting2 = ref();
    const searchActive = ref(null);
    const searchKey = ref("");
    const fullState = ref(false);
    const $mitt = inject("$mitt");
    const visible = ref(false);
    const noticeList = ref([]);
    const store = useStore();
    const userinfo = store.getters["user/userinfo"];
    const handleOpenThemeSetting = () => {
      userSetting2.value.showDrawer();
    };
    const isPC = computed(() => store.getters["app/getBrowser"].isPC);
    const handleSearch = () => {
      if (searchKey.value)
        ;
      else {
        searchActive.value = searchActive.value ? null : "search-active";
      }
    };
    const toggle = () => {
      nextTick(() => {
        fullState.value = checkFull();
      });
    };
    const handleScreenModel = () => {
      switchScreen();
    };
    const handleEnter = (e) => {
      notification["success"]({
        message: "\u641C\u7D22\u63D0\u793A",
        description: `\u55E8\uFF0C\u60A8\u8F93\u5165\u7684\u5173\u952E\u8BCD\u662F\uFF1A${searchKey.value}`
      });
    };
    const handleRefresh = () => {
      $mitt.emit("reload-router-view");
    };
    onMounted(() => {
      fullscreenchange(toggle);
    });
    const handleQuit = () => {
      apiLogout().then(() => {
        locaStore.clearAll();
        router.push("/login");
      });
    };
    const handleDebug = () => {
      router.push("/module/debug");
    };
    return {
      userSetting: userSetting2,
      searchActive,
      searchKey,
      fullState,
      userinfo,
      visible,
      noticeList,
      handleSearch,
      handleOpenThemeSetting,
      handleScreenModel,
      handleKeyBoard,
      handleEnter,
      handleRefresh,
      isPC,
      handleQuit,
      handleDebug
    };
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-1338c58a"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "right_menu-item" };
const _hoisted_2$4 = {
  key: 0,
  class: "right_menu-item"
};
const _hoisted_3$2 = {
  key: 1,
  class: "right_menu-item"
};
const _hoisted_4 = { class: "notice-content" };
const _hoisted_5 = { class: "right_menu-item" };
const _hoisted_6 = { class: "right_menu-item hidden-xs" };
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "user-head",
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/hangjob/vue-vite-admin-ts",
  target: "_blank"
}, "\u55E8\uFF0C\u4F60\u597D", -1));
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" \u9000\u51FA ");
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_SearchOutlined = resolveComponent("SearchOutlined");
  const _component_CompressOutlined = resolveComponent("CompressOutlined");
  const _component_ExpandOutlined = resolveComponent("ExpandOutlined");
  const _component_BellOutlined = resolveComponent("BellOutlined");
  const _component_a_badge = resolveComponent("a-badge");
  const _component_a_popover = resolveComponent("a-popover");
  const _component_BugOutlined = resolveComponent("BugOutlined");
  const _component_SyncOutlined = resolveComponent("SyncOutlined");
  const _component_ClearOutlined = resolveComponent("ClearOutlined");
  const _component_DownOutlined = resolveComponent("DownOutlined");
  const _component_a_menu_item = resolveComponent("a-menu-item");
  const _component_LogoutOutlined = resolveComponent("LogoutOutlined");
  const _component_a_menu = resolveComponent("a-menu");
  const _component_a_dropdown = resolveComponent("a-dropdown");
  const _component_userSetting = resolveComponent("userSetting");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$4, [
      withDirectives(createBaseVNode("input", {
        class: normalizeClass(["key-input", _ctx.searchActive]),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.searchKey = $event),
        onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => _ctx.handleKeyBoard($event, _ctx.handleEnter), ["enter"])),
        type: "text"
      }, null, 34), [
        [vModelText, _ctx.searchKey]
      ]),
      createVNode(_component_SearchOutlined, {
        class: "icon-svg icon-search",
        onClick: _ctx.handleSearch
      }, null, 8, ["onClick"])
    ]),
    _ctx.isPC ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
      _ctx.fullState ? (openBlock(), createBlock(_component_CompressOutlined, {
        key: 0,
        class: "icon-svg",
        onClick: _ctx.handleScreenModel
      }, null, 8, ["onClick"])) : (openBlock(), createBlock(_component_ExpandOutlined, {
        key: 1,
        class: "icon-svg",
        onClick: _ctx.handleScreenModel
      }, null, 8, ["onClick"]))
    ])) : createCommentVNode("", true),
    _ctx.isPC ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
      createVNode(_component_a_popover, {
        modelValue: _ctx.visible,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.visible = $event),
        title: "\u7CFB\u7EDF\u901A\u77E5",
        trigger: "click"
      }, {
        content: withCtx(() => [
          createBaseVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.noticeList, (item) => {
              return openBlock(), createElementBlock("p", {
                key: item.id
              }, toDisplayString(item.text) + " " + toDisplayString(item.createTime), 1);
            }), 128))
          ])
        ]),
        default: withCtx(() => [
          createVNode(_component_a_badge, {
            count: _ctx.noticeList.length
          }, {
            default: withCtx(() => [
              createVNode(_component_BellOutlined, { class: "icon-svg" })
            ]),
            _: 1
          }, 8, ["count"])
        ]),
        _: 1
      }, 8, ["modelValue"])
    ])) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: "right_menu-item hidden-xs",
      onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleDebug && _ctx.handleDebug(...args))
    }, [
      createVNode(_component_BugOutlined, { class: "icon-svg" })
    ]),
    createBaseVNode("div", _hoisted_5, [
      createVNode(_component_SyncOutlined, {
        class: "icon-svg refresh",
        onClick: _ctx.handleRefresh
      }, null, 8, ["onClick"])
    ]),
    createBaseVNode("div", {
      class: "right_menu-item",
      onClick: _cache[4] || (_cache[4] = (...args) => _ctx.handleOpenThemeSetting && _ctx.handleOpenThemeSetting(...args))
    }, [
      createVNode(_component_ClearOutlined, { class: "icon-svg" })
    ]),
    createBaseVNode("div", _hoisted_6, [
      _hoisted_7,
      createVNode(_component_a_dropdown, null, {
        overlay: withCtx(() => [
          createVNode(_component_a_menu, null, {
            default: withCtx(() => [
              createVNode(_component_a_menu_item, null, {
                default: withCtx(() => [
                  _hoisted_8
                ]),
                _: 1
              }),
              createVNode(_component_a_menu_item, { onClick: _ctx.handleQuit }, {
                default: withCtx(() => [
                  createVNode(_component_LogoutOutlined),
                  _hoisted_9
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("a", {
            class: "ant-dropdown-link",
            onClick: _cache[5] || (_cache[5] = withModifiers(() => {
            }, ["prevent"]))
          }, [
            createTextVNode(toDisplayString(_ctx.userinfo.username) + " ", 1),
            createVNode(_component_DownOutlined)
          ])
        ]),
        _: 1
      })
    ]),
    createVNode(_component_userSetting, { ref: "userSetting" }, null, 512)
  ], 64);
}
var HeaderTopRightUser = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-1338c58a"]]);
var classes = {
  "project-switch": "_project-switch_a630m_1",
  "project-switch-min": "_project-switch-min_a630m_12"
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var ProjectSwitch = defineComponent({
  name: "ProjectSwitch",
  setup() {
    const store = useStore();
    const router = useRouter();
    const prjMenu = computed(() => store.getters["app/getProjectMenu"]);
    const current = ref(null);
    const mode = ref("horizontal");
    const handleSelect = (res) => {
      let data = res.item["menu-info"];
      store.commit("app/updateMenuList", data.menus);
      router.push(data.menus[0].path);
    };
    const clssNames = computed(() => {
      const foldPrjMenu = store.getters["app/getThemeConfig"].foldPrjMenu;
      if (foldPrjMenu) {
        return classes["project-switch"] + " " + classes["project-switch-min"];
      } else {
        return classes["project-switch"];
      }
    });
    return {
      prjMenu,
      current,
      handleSelect,
      clssNames,
      mode
    };
  },
  render(ctx) {
    const children = deepMenu(ctx.prjMenu);
    return createVNode("div", {
      "class": ctx.clssNames
    }, [createVNode(resolveComponent("a-menu"), {
      "selectedKeys": ctx.current,
      "onUpdate:selectedKeys": ($event) => ctx.current = $event,
      "mode": ctx.mode,
      "onUpdate:mode": ($event) => ctx.mode = $event,
      "onSelect": ctx.handleSelect
    }, _isSlot(children) ? children : {
      default: () => [children]
    })]);
  }
});
;
var headerTop_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    HeaderTopRightUser,
    ProjectSwitch
  },
  setup() {
    const store = useStore();
    const list = computed(() => store.getters["app/tabViewsPath"]);
    const isMobile = computed(() => store.getters["app/getBrowser"].isMobile);
    const collapsed = computed(() => store.state.app.collapsed);
    const handleCollapsed = (bol) => {
      if (store.state.app.themeConfig.floatingMenu) {
        store.commit("app/updateCollapsed", false);
      } else {
        store.commit("app/updateCollapsed", bol);
      }
      store.commit("app/updateFloatingVisible", !store.getters["app/getFloatingVisible"]);
    };
    return {
      list,
      collapsed,
      isMobile,
      handleCollapsed
    };
  }
});
const _hoisted_1$3 = { class: "layout-header" };
const _hoisted_2$3 = { class: "layout-header_right_menu" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuFoldOutlined = resolveComponent("MenuFoldOutlined");
  const _component_MenuUnfoldOutlined = resolveComponent("MenuUnfoldOutlined");
  const _component_a_breadcrumb_item = resolveComponent("a-breadcrumb-item");
  const _component_a_breadcrumb = resolveComponent("a-breadcrumb");
  const _component_a_layout_header = resolveComponent("a-layout-header");
  const _component_ProjectSwitch = resolveComponent("ProjectSwitch");
  const _component_HeaderTopRightUser = resolveComponent("HeaderTopRightUser");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createVNode(_component_a_layout_header, { class: "layout-header_top" }, {
      default: withCtx(() => [
        _ctx.collapsed ? (openBlock(), createBlock(_component_MenuFoldOutlined, {
          key: 0,
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleCollapsed(false))
        })) : (openBlock(), createBlock(_component_MenuUnfoldOutlined, {
          key: 1,
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleCollapsed(true))
        })),
        !_ctx.isMobile ? (openBlock(), createBlock(_component_a_breadcrumb, {
          key: 2,
          class: "text-overflow breadcrumb",
          style: {}
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.list, (item, idx) => {
              return openBlock(), createBlock(_component_a_breadcrumb_item, { key: idx }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(item.name), 1)
                ]),
                _: 2
              }, 1024);
            }), 128))
          ]),
          _: 1
        })) : (openBlock(), createBlock(_component_a_breadcrumb, {
          key: 3,
          class: "text-overflow breadcrumb"
        }, {
          default: withCtx(() => [
            createVNode(_component_a_breadcrumb_item, null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.list[_ctx.list.length - 1].name), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }))
      ]),
      _: 1
    }),
    createVNode(_component_ProjectSwitch),
    createBaseVNode("div", _hoisted_2$3, [
      createVNode(_component_HeaderTopRightUser)
    ])
  ]);
}
var HeaderTop = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-366d2da2"]]);
const themeHook = function() {
  const store = useStore();
  const layoutClassName = computed(() => {
    let names = [];
    const app = store.state.app;
    if (app.collapsed) {
      names.push("layout-is-collapse");
    }
    if (app.themeConfig.floatingMenu) {
      names.push("layout-is-collapse-floating");
    }
    return names.join(" ");
  });
  const tabStlyeClassName = computed(() => {
    const themeConfig = store.state.app.themeConfig;
    if (themeConfig.tabStyle === 2) {
      return "tab-style-round";
    }
    if (themeConfig.tabStyle === 3) {
      return "tab-style-card";
    }
    return null;
  });
  return {
    layoutClassName,
    tabStlyeClassName
  };
};
var index_less_vue_type_style_index_0_src_scoped_true_lang = "";
const _sfc_main$2 = defineComponent({
  components: {
    CloseOutlined,
    CaretRightFilled,
    CaretLeftFilled
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const appContextmenu = inject("appContextmenu");
    const processList = computed(() => store.state.app.processList.filter((e) => e.tabHidden === false));
    const tabContainer = ref(null);
    const { tabStlyeClassName } = themeHook();
    function scrollBar(left) {
      tabContainer.value.scrollTo({
        left,
        behavior: "smooth"
      });
    }
    const handleScrollBar = (t) => {
      scrollBar(tabContainer.value.scrollLeft + (t ? 100 : -100));
    };
    const toPath = (path) => {
      if (path) {
        router.push(path);
        return;
      }
      const active = processList.value.find((e) => e.active);
      if (!active) {
        const next = last(processList.value);
        router.push(next ? next.path : "/");
      }
    };
    const handleColseCurrent = (item) => {
      const idx = processList.value.findIndex((e) => e.id == item.id);
      store.commit("app/delProcessList", idx);
      toPath();
    };
    const handleContextMenu = (e, item) => {
      e.preventDefault();
      if (item.tabFix || processList.value.length === 1) {
        return false;
      }
      let contextmenu = document.querySelector("#contextmenu");
      contextmenu.style.left = e.clientX + "px";
      contextmenu.style.top = e.clientY + "px";
      contextmenu.style.display = "block";
      appContextmenu.value.items = [
        {
          name: "\u5173\u95ED\u5F53\u524D",
          data: item,
          callback: (res) => {
            handleColseCurrent(res.data);
          }
        },
        {
          name: "\u5173\u95ED\u5176\u4ED6",
          data: item,
          callback: () => {
            const arr = processList.value.filter((e2) => {
              return e2.id == item.id || e2.path == "/" || e2.tabFix;
            });
            store.commit("app/setProcessList", arr);
            toPath();
          }
        },
        {
          name: "\u5173\u95ED\u6240\u6709",
          data: item,
          callback: () => {
            store.commit("app/resetProcessList");
            toPath(store.getters["app/processList"][0].path);
          }
        }
      ];
    };
    const handleClickCutTap = (item) => {
      router.push(item.path);
    };
    return {
      processList,
      handleContextMenu,
      handleClickCutTap,
      tabContainer,
      handleScrollBar,
      handleColseCurrent,
      tabStlyeClassName
    };
  }
});
const _hoisted_1$2 = {
  class: "tab-container",
  ref: "tabContainer"
};
const _hoisted_2$2 = ["onClick", "onContextmenu"];
const _hoisted_3$1 = { class: "title" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CaretLeftFilled = resolveComponent("CaretLeftFilled");
  const _component_CloseOutlined = resolveComponent("CloseOutlined");
  const _component_CaretRightFilled = resolveComponent("CaretRightFilled");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["layout-header_scroller", _ctx.tabStlyeClassName])
  }, [
    createBaseVNode("div", {
      class: "tab-action tab-action-left",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleScrollBar(false))
    }, [
      createVNode(_component_CaretLeftFilled, { class: "icon-svg" })
    ]),
    createBaseVNode("div", _hoisted_1$2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.processList, (item, index2) => {
        return openBlock(), createElementBlock("div", {
          class: normalizeClass(["app-process_item", { active: item.active }]),
          key: index2,
          onClick: ($event) => _ctx.handleClickCutTap(item),
          onContextmenu: withModifiers(($event) => _ctx.handleContextMenu($event, item), ["stop", "prevent"])
        }, [
          createBaseVNode("span", _hoisted_3$1, toDisplayString(item.name), 1),
          !item.tabFix && _ctx.processList.length !== 1 ? (openBlock(), createBlock(_component_CloseOutlined, {
            key: 0,
            class: "icon-svg",
            onClick: withModifiers(($event) => _ctx.handleColseCurrent(item), ["stop"])
          }, null, 8, ["onClick"])) : createCommentVNode("", true)
        ], 42, _hoisted_2$2);
      }), 128))
    ], 512),
    createBaseVNode("div", {
      class: "tab-action tab-action-right",
      onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleScrollBar(true))
    }, [
      createVNode(_component_CaretRightFilled, { class: "icon-svg" })
    ])
  ], 2);
}
var HeaderProcess = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-2da4759e"]]);
;
var layoutContainer_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  setup() {
    const store = useStore();
    const transition = ["slide-left", "slide-right"];
    const transitionName = ref(transition[0]);
    const hasOpenComponentsArr = ref([]);
    const route = useRoute();
    const $mitt = inject("$mitt");
    const routerView = ref(true);
    watch(() => route.path, (newIndex, oldIndex) => {
      if (newIndex > oldIndex) {
        transitionName.value = transition[0];
      } else {
        transitionName.value = transition[1];
      }
    });
    $mitt.on("reload-router-view", () => {
      if (!NProgress.status) {
        NProgress.start();
        routerView.value = false;
        nextTick(() => {
          routerView.value = true;
          NProgress.done();
        });
      }
    });
    const caches = computed(() => {
      return store.getters["app/processList"].filter((item) => {
        return item.keepAlive === true;
      }).map((item) => {
        return item.path.substring(1, item.path.length).replace(/\//g, "-");
      });
    });
    return {
      caches,
      routerView,
      transitionName,
      hasOpenComponentsArr
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "layout-container-view"
};
const _hoisted_2$1 = { class: "layout-container-view-content scroll" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  const _component_a_layout_content = resolveComponent("a-layout-content");
  return openBlock(), createBlock(_component_a_layout_content, { class: "layout-container" }, {
    default: withCtx(() => [
      _ctx.routerView ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createVNode(_component_router_view, null, {
            default: withCtx(({ Component, route }) => [
              (openBlock(), createBlock(KeepAlive, { include: _ctx.caches }, [
                (openBlock(), createBlock(resolveDynamicComponent(Component)))
              ], 1032, ["include"]))
            ]),
            _: 1
          })
        ])
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var LayoutContainer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-78496dea"]]);
;
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  components: {
    Slider,
    HeaderTop,
    HeaderProcess,
    LayoutContainer
  },
  setup() {
    const { layoutClassName } = themeHook();
    const store = useStore();
    const marginLeft = computed(() => store.state.app.themeConfig.menuMaxWidth + "px");
    return {
      layoutClassName,
      marginLeft
    };
  }
});
const _hoisted_1 = { class: "layout-footer" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Yxs Admin \xA92021 ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("www.vipbic.com");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Slider = resolveComponent("Slider");
  const _component_HeaderTop = resolveComponent("HeaderTop");
  const _component_HeaderProcess = resolveComponent("HeaderProcess");
  const _component_LayoutContainer = resolveComponent("LayoutContainer");
  const _component_a_typography_link = resolveComponent("a-typography-link");
  const _component_a_layout = resolveComponent("a-layout");
  return openBlock(), createBlock(_component_a_layout, { style: { "height": "100%" } }, {
    default: withCtx(() => [
      createVNode(_component_Slider),
      createVNode(_component_a_layout, {
        style: normalizeStyle({ marginLeft: _ctx.marginLeft }),
        class: normalizeClass(["layout", _ctx.layoutClassName])
      }, {
        default: withCtx(() => [
          createVNode(_component_HeaderTop),
          createVNode(_component_HeaderProcess),
          createVNode(_component_LayoutContainer),
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createVNode(_component_a_typography_link, { href: "//www.vipbic.com" }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }, 8, ["style", "class"])
    ]),
    _: 1
  });
}
var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5c2908e6"]]);
export { index as default };
