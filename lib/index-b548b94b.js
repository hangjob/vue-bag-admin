import { NBreadcrumbItem, NBreadcrumb, NDivider, NSelect, NFormItem, NIcon, NSwitch, NForm, NButton, NDrawerContent, NDrawer, NAvatar, NText, NTag, NSpace, NThing, NListItem, NList, NTabPane, NNumberAnimation, NStatistic, NEmpty, NTabs, NCard, NPopover, NH2, NEl, NDropdown, NInput, NButtonGroup, NMenu, NLayoutSider, NLayoutHeader, NLayout } from "naive-ui";
import { defineComponent, computed, openBlock, createBlock, withCtx, createElementBlock, Fragment, renderList, resolveDynamicComponent, createTextVNode, toDisplayString, ref, reactive, resolveComponent, createVNode, createElementVNode, normalizeClass, withDirectives, vShow, pushScopeId, popScopeId, h, createCommentVNode, normalizeStyle, watch, inject, withModifiers, nextTick, Transition, KeepAlive } from "vue";
import { a as app, _ as _export_sfc, r as renderIcon, u as updateHtmlGray, b as updateHtmlWeak, c as useFullscreen, d as cloneDeep, g as getObjectPath, t as toTree, N as NProgress } from "./install-0e9f49b5.js";
import { useRouter } from "vue-router";
import "pinia";
import "axios";
import "@vicons/ionicons5";
import "@vicons/antd";
const _sfc_main$9 = defineComponent({
  setup() {
    const appStore = app();
    return {
      paths: computed(() => appStore.paths)
    };
  }
});
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_breadcrumb_item = NBreadcrumbItem;
  const _component_n_breadcrumb = NBreadcrumb;
  return openBlock(), createBlock(_component_n_breadcrumb, null, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.paths, (item) => {
        return openBlock(), createBlock(_component_n_breadcrumb_item, {
          key: item.id
        }, {
          default: withCtx(() => [
            item.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              (openBlock(), createBlock(resolveDynamicComponent(item.icon))),
              createTextVNode(" " + toDisplayString(item.title), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(item.title), 1)
            ], 64))
          ]),
          _: 2
        }, 1024);
      }), 128))
    ]),
    _: 1
  });
}
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const themeOptions = [
  { label: "苍翠", value: "#519a73" },
  { label: "杏红", value: "#ff8c31" },
  { label: "蔚蓝", value: "#70f3ff" },
  { label: "桃红", value: "#f47983" },
  { label: "柳绿", value: "#afdd22" },
  { label: "湖蓝", value: "#30dff3" }
];
const tabsMore = [
  { label: "重新加载", key: "1", icon: renderIcon("RefreshCircleOutline") },
  { label: "关闭当前页面", key: "2", icon: renderIcon("CloseOutline") },
  { type: "divider", key: "d1" },
  { label: "关闭左侧页面", key: "3", zt: "l", icon: renderIcon("StepBackwardFilled") },
  { label: "关闭右侧页面", key: "4", zt: "r", icon: renderIcon("StepForwardFilled") },
  { label: "关闭全部页面", key: "5", zt: "c", icon: renderIcon("StopOutlined") }
];
const themeTabsStyle = [
  { label: "经典卡片", key: "1", value: "sutra" },
  { label: "圆滑灵动", key: "2", value: "tact" }
];
const animations = [
  { label: "禁用动画", key: "100", value: "disabled", out: "disabled", prefix: "" },
  {
    label: "backInDown",
    key: "1",
    value: "animate__backInDown",
    out: "animate__backOutDown",
    prefix: "animate__animated"
  },
  {
    label: "backInLeft",
    key: "2",
    value: "animate__backInLeft",
    out: "animate__backOutLeft",
    prefix: "animate__animated"
  },
  {
    label: "backInRight",
    key: "3",
    value: "animate__backInRight",
    out: "animate__backOutRight",
    prefix: "animate__animated"
  },
  { label: "backInUp", key: "4", value: "animate__backInUp", out: "animate__backOutUp", prefix: "animate__animated" },
  {
    label: "lightSpeedInRight",
    key: "5",
    value: "animate__lightSpeedInRight",
    out: "animate__lightSpeedOutRight",
    prefix: "animate__animated"
  },
  {
    label: "slideInLeft",
    key: "6",
    value: "animate__slideInLeft",
    out: "animate__slideOutLeft",
    prefix: "animate__animated"
  },
  {
    label: "fadeInLeft",
    key: "7",
    value: "animate__fadeInLeft",
    out: "animate__fadeOutLeft",
    prefix: "animate__animated"
  }
];
const _sfc_main$8 = defineComponent({
  setup() {
    const showhide = ref(false);
    const app$1 = app();
    const change = (state = true) => {
      showhide.value = state;
    };
    const layoutOptions = ["ml", "mt", "tm"];
    const model = reactive({});
    const handleUpdateGray = (value) => {
      app$1.userSetting.gray = value;
      updateHtmlGray();
    };
    const handleUpdateWeak = (value) => {
      app$1.userSetting.weak = value;
      updateHtmlWeak();
    };
    const handlePattern = (value) => {
      app$1.userSetting.layoutName = value;
    };
    return {
      showhide,
      change,
      model,
      handlePattern,
      themeOptions,
      layoutOptions,
      themeTabsStyle,
      app: app$1,
      handleUpdateGray,
      handleUpdateWeak,
      animations
    };
  }
});
const UserSetting_vue_vue_type_style_index_0_scoped_032302c4_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-032302c4"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { class: "layout-pattern" };
const _hoisted_2$4 = ["onClick"];
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "left" }, null, -1));
const _hoisted_4$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", { class: "top" }, null, -1));
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_divider = NDivider;
  const _component_n_select = NSelect;
  const _component_n_form_item = NFormItem;
  const _component_CheckboxOutline = resolveComponent("CheckboxOutline");
  const _component_n_icon = NIcon;
  const _component_n_switch = NSwitch;
  const _component_n_form = NForm;
  const _component_n_button = NButton;
  const _component_n_drawer_content = NDrawerContent;
  const _component_n_drawer = NDrawer;
  return openBlock(), createBlock(_component_n_drawer, {
    show: _ctx.showhide,
    "onUpdate:show": _cache[8] || (_cache[8] = ($event) => _ctx.showhide = $event),
    "default-width": 350,
    placement: "right",
    resizable: ""
  }, {
    default: withCtx(() => [
      createVNode(_component_n_drawer_content, {
        closable: "",
        title: "设置"
      }, {
        footer: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("保存设置")
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_n_form, {
            ref: "formRef",
            model: _ctx.model,
            "label-placement": "left",
            "label-width": "auto"
          }, {
            default: withCtx(() => [
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 颜色主题 ")
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "主题",
                path: "themeColor"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_select, {
                    value: _ctx.app.userSetting.themeColor,
                    "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.app.userSetting.themeColor = $event),
                    placeholder: "选择主题",
                    options: _ctx.themeOptions
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 布局模式 ")
                ]),
                _: 1
              }),
              createElementVNode("div", _hoisted_1$5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.layoutOptions, (item) => {
                  return openBlock(), createElementBlock("div", {
                    class: normalizeClass(["pattern-item", item]),
                    onClick: ($event) => _ctx.handlePattern(item),
                    key: item
                  }, [
                    _hoisted_3$2,
                    _hoisted_4$1,
                    withDirectives(createVNode(_component_n_icon, {
                      class: "pattern-item-icon",
                      size: "18",
                      color: "#0e7a0d"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_CheckboxOutline)
                      ]),
                      _: 2
                    }, 1536), [
                      [vShow, item === _ctx.app.userSetting.layoutName]
                    ])
                  ], 10, _hoisted_2$4);
                }), 128))
              ]),
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 界面展示 ")
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "标签风格",
                path: "selectValue"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_select, {
                    value: _ctx.app.userSetting.tabsStyle,
                    "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.app.userSetting.tabsStyle = $event),
                    placeholder: "选择标签风格",
                    options: _ctx.themeTabsStyle
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "隐藏标签",
                path: "hideTag"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    value: _ctx.app.userSetting.hideTabs,
                    "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.app.userSetting.hideTabs = $event)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "标签持久化",
                path: "lasting"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    value: _ctx.app.userSetting.lasting,
                    "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.app.userSetting.lasting = $event)
                  }, {
                    checked: withCtx(() => [
                      createTextVNode(" 请刷新页面生效 ")
                    ]),
                    unchecked: withCtx(() => [
                      createTextVNode(" 开启标签持久化 ")
                    ]),
                    _: 1
                  }, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "灰色模式",
                path: "gray"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    "onUpdate:value": [
                      _ctx.handleUpdateGray,
                      _cache[4] || (_cache[4] = ($event) => _ctx.app.userSetting.gray = $event)
                    ],
                    value: _ctx.app.userSetting.gray
                  }, null, 8, ["onUpdate:value", "value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "色弱模式",
                path: "weak"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    "onUpdate:value": [
                      _ctx.handleUpdateWeak,
                      _cache[5] || (_cache[5] = ($event) => _ctx.app.userSetting.weak = $event)
                    ],
                    value: _ctx.app.userSetting.weak
                  }, null, 8, ["onUpdate:value", "value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "页面缓存",
                path: "weak"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_switch, {
                    value: _ctx.app.userSetting.keepAlive,
                    "onUpdate:value": _cache[6] || (_cache[6] = ($event) => _ctx.app.userSetting.keepAlive = $event)
                  }, null, 8, ["value"])
                ]),
                _: 1
              }),
              createVNode(_component_n_divider, { dashed: "" }, {
                default: withCtx(() => [
                  createTextVNode(" 页面动画 ")
                ]),
                _: 1
              }),
              createVNode(_component_n_form_item, {
                "label-align": "left",
                label: "动画方式",
                path: "selectValue"
              }, {
                default: withCtx(() => [
                  createVNode(_component_n_select, {
                    value: _ctx.app.userSetting.animation,
                    "onUpdate:value": _cache[7] || (_cache[7] = ($event) => _ctx.app.userSetting.animation = $event),
                    placeholder: "选择动画方式",
                    options: _ctx.animations
                  }, null, 8, ["value", "options"])
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["show"]);
}
const UserSetting = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-032302c4"]]);
function renderCustomHeader() {
  return h(
    "div",
    {
      style: "display: flex; align-items: center; padding: 8px 12px;"
    },
    [
      h(NAvatar, {
        round: true,
        style: "margin-right: 12px;",
        src: "https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG"
      }),
      h("div", null, [
        h("div", null, [h(NText, { depth: 2 }, { default: () => "羊先生" })]),
        h("div", { style: "font-size: 12px;" }, [
          h(
            NText,
            { depth: 3, style: "margin-top: 5px;display:inline-block;" },
            { default: () => "毫无疑问，你是办公室里最亮的星" }
          )
        ])
      ])
    ]
  );
}
const _sfc_main$7 = defineComponent({
  components: {
    UserSetting
  },
  setup() {
    const UserSettingRef = ref(null);
    const app$1 = app();
    const { themeName } = app$1.userSetting;
    const { isFullscreen, toggle } = useFullscreen(document.body);
    app$1.userSetting.isFullscreen = isFullscreen;
    const formRef = ref(null);
    const userIcon = ref(
      [
        { size: 18, color: "0e7a0d", name: "SearchOutline", show: computed(() => !app$1.browser.xs) },
        { size: 18, color: "0e7a0d", name: "NotificationsOutline", show: true },
        { size: 18, color: "0e7a0d", name: "HappyOutline", show: true },
        { size: 18, color: "0e7a0d", name: "LanguageOutline", show: true },
        { size: 18, color: "0e7a0d", name: "ScanOutline", show: computed(() => !app$1.browser.xs) },
        { size: 18, color: "0e7a0d", name: "SettingsOutline", show: true }
      ]
    );
    const compData = reactive({
      searchModel: false,
      formValue: {
        user: { name: "", age: "" },
        phone: ""
      },
      rules: {
        user: {
          name: { required: true, message: "请输入姓名", trigger: "blur" },
          age: { required: true, message: "请输入年龄", trigger: ["input", "blur"] }
        },
        phone: { required: true, message: "请输入电话号码", trigger: ["input"] }
      },
      handleValidateClick(e) {
        e.preventDefault();
      },
      SettingsOutline: () => {
        UserSettingRef.value.change();
      },
      LanguageOutline() {
        app$1.userSetting.language = app$1.userSetting.language ? null : "zhCN";
      },
      ScanOutline() {
        toggle();
      },
      SearchOutline() {
        compData.searchModel = true;
      },
      handleDarkTheme(value) {
        app$1.userSetting.themeName = value ? "darkTheme" : null;
      }
    });
    return {
      compData,
      app: app$1,
      formRef,
      UserSettingRef,
      darkTheme: themeName !== null,
      userOptions: [
        { key: "header", type: "render", render: renderCustomHeader },
        { key: "header-divider", type: "divider" },
        { label: "处理群消息 342 条", key: "stmt1" },
        { label: "被 @ 58 次", key: "stmt2" },
        { label: "加入群 17 个", key: "stmt3" }
      ],
      userIcon
    };
  }
});
const UserSet_vue_vue_type_style_index_0_scoped_434fa856_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-434fa856"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { class: "user-set" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_27 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("br", null, null, -1));
const _hoisted_35 = { class: "set-item" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_tag = NTag;
  const _component_n_space = NSpace;
  const _component_n_thing = NThing;
  const _component_n_list_item = NListItem;
  const _component_n_list = NList;
  const _component_n_tab_pane = NTabPane;
  const _component_n_number_animation = NNumberAnimation;
  const _component_n_statistic = NStatistic;
  const _component_n_button = NButton;
  const _component_n_empty = NEmpty;
  const _component_n_tabs = NTabs;
  const _component_n_card = NCard;
  const _component_n_popover = NPopover;
  const _component_n_h2 = NH2;
  const _component_n_icon = NIcon;
  const _component_n_el = NEl;
  const _component_MoonOutline = resolveComponent("MoonOutline");
  const _component_SunnyOutline = resolveComponent("SunnyOutline");
  const _component_n_switch = NSwitch;
  const _component_n_dropdown = NDropdown;
  const _component_n_input = NInput;
  const _component_n_form_item = NFormItem;
  const _component_n_form = NForm;
  const _component_CloseCircleOutline = resolveComponent("CloseCircleOutline");
  const _component_SyncCircleOutline = resolveComponent("SyncCircleOutline");
  const _component_SearchOutline = resolveComponent("SearchOutline");
  const _component_n_button_group = NButtonGroup;
  const _component_n_drawer_content = NDrawerContent;
  const _component_n_drawer = NDrawer;
  const _component_UserSetting = resolveComponent("UserSetting");
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("div", _hoisted_1$4, [
      !_ctx.app.browser.sm ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.userIcon, (item, idx) => {
        return openBlock(), createElementBlock(Fragment, { key: idx }, [
          item.show ? (openBlock(), createBlock(_component_n_el, {
            key: 0,
            tag: "div",
            class: "set-item hover-color",
            onClick: _ctx.compData[item.name]
          }, {
            default: withCtx(() => [
              createVNode(_component_n_icon, {
                size: item.size,
                color: item.color
              }, {
                default: withCtx(() => [
                  item.name === "NotificationsOutline" ? (openBlock(), createBlock(_component_n_popover, {
                    key: 0,
                    trigger: "click",
                    style: { "padding": "0" }
                  }, {
                    trigger: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(item.name)))
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_card, {
                        title: "",
                        style: { "margin-bottom": "16px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_tabs, {
                            type: "line",
                            animated: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_n_tab_pane, {
                                name: "oasis",
                                tab: "待办"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_list, {
                                    style: { "width": "300px" },
                                    hoverable: "",
                                    clickable: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_n_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_n_thing, {
                                            title: "你好，我是羊先生",
                                            "content-style": "margin-top: 10px;"
                                          }, {
                                            description: withCtx(() => [
                                              createVNode(_component_n_space, {
                                                size: "small",
                                                style: { "margin-top": "4px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("暑夜 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("晚春 ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" 今天的阳光很温顺，也许是我很久没出去走走了吧，看着阳外的天气，我靠在沙发睡着了..."),
                                              _hoisted_2$3
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_n_list_item, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_n_thing, {
                                            title: "他是一个单身，我的标签",
                                            "content-style": "margin-top: 10px;"
                                          }, {
                                            description: withCtx(() => [
                                              createVNode(_component_n_space, {
                                                size: "small",
                                                style: { "margin-top": "4px" }
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("前端程序员 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "info",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("杭州·西湖 ")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_n_tag, {
                                                    bordered: false,
                                                    type: "warning",
                                                    size: "small"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(" 会弹几首吉他 ")
                                                    ]),
                                                    _: 1
                                                  })
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            default: withCtx(() => [
                                              createTextVNode(" 曾经有人问我，你是怎么坚持下来的？"),
                                              _hoisted_3$1,
                                              createTextVNode(" 终有一天，你会明白，能找到自己喜欢的东西，并保持热爱，是多么的幸运，一辈子转瞬即逝，至少活的有态度些。"),
                                              _hoisted_4,
                                              createTextVNode(" 前路坎坷，我辈当不忘初心，愿你出走半生，归来仍是少年！"),
                                              _hoisted_5
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "the beatles",
                                tab: "消息"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_statistic, {
                                    label: "你一共处理了",
                                    "tabular-nums": ""
                                  }, {
                                    suffix: withCtx(() => [
                                      createTextVNode(" 条群消息 ")
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_n_number_animation, {
                                        ref_for: true,
                                        ref: "numberAnimationInstRef",
                                        from: 0,
                                        to: 12039
                                      }, null, 512)
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_n_space, { vertical: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" 花时间、花精力、花心思，愿你每一份努力都不负所望 "),
                                      createVNode(_component_n_button, null, {
                                        default: withCtx(() => [
                                          createTextVNode("处理群消息")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "jay chou",
                                tab: "通知"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_empty, { description: "你什么也找不到" }, {
                                    extra: withCtx(() => [
                                      createVNode(_component_n_button, { size: "small" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" 要不看看别的 ")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)) : item.name === "HappyOutline" ? (openBlock(), createBlock(_component_n_popover, {
                    key: 1,
                    trigger: "click",
                    style: { "padding": "0" }
                  }, {
                    trigger: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(item.name)))
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_n_card, {
                        title: "",
                        style: { "margin-bottom": "16px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_n_tabs, { type: "segment" }, {
                            default: withCtx(() => [
                              createVNode(_component_n_tab_pane, {
                                name: "chap1",
                                tab: "故乡"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_h2, null, {
                                    default: withCtx(() => [
                                      createTextVNode("许巍")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" 天边夕阳再次映上我的脸庞，再次映着我那不安的心"),
                                  _hoisted_6,
                                  _hoisted_7,
                                  createTextVNode(" 这是什么地方依然是如此的荒凉，那无尽的旅程如此漫长"),
                                  _hoisted_8,
                                  _hoisted_9,
                                  createTextVNode(" 我是永远向着远方独行的浪子，你是茫茫人海之中我的女人"),
                                  _hoisted_10,
                                  _hoisted_11,
                                  createTextVNode(" 在异乡的路上每一个寒冷的夜晚，这思念它如刀让我伤痛"),
                                  _hoisted_12,
                                  _hoisted_13,
                                  createTextVNode(" 总是在梦里我看到你无助的双眼，我的心又一次被唤醒"),
                                  _hoisted_14,
                                  _hoisted_15,
                                  createTextVNode(" 我站在这里想起和你曾经离别情景，你站在人群中间那么孤单"),
                                  _hoisted_16,
                                  _hoisted_17,
                                  createTextVNode(" 那是你 衣裙漫飞，那是你 温柔如水"),
                                  _hoisted_18
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "chap2",
                                tab: "平凡之路"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_h2, null, {
                                    default: withCtx(() => [
                                      createTextVNode("朴树")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" 徘徊着的 在路上的 你要走吗 Via Via 易碎的 骄傲着 那也曾是我的模样"),
                                  _hoisted_19,
                                  _hoisted_20,
                                  createTextVNode(" 沸腾着的 不安着的 你要去哪 Via Via 谜一样的 沉默着的 故事你真的在听吗"),
                                  _hoisted_21,
                                  _hoisted_22,
                                  createTextVNode(" 我曾经跨过山和大海 也穿过人山人海 "),
                                  _hoisted_23,
                                  _hoisted_24,
                                  createTextVNode(" 我曾经拥有着的一切 转眼都飘散如烟"),
                                  _hoisted_25,
                                  _hoisted_26,
                                  createTextVNode(" 我曾经失落失望失掉所有方向 直到看见平凡才是唯一的答案"),
                                  _hoisted_27
                                ]),
                                _: 1
                              }),
                              createVNode(_component_n_tab_pane, {
                                name: "chap3",
                                tab: "成都"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_n_h2, null, {
                                    default: withCtx(() => [
                                      createTextVNode("赵雷")
                                    ]),
                                    _: 1
                                  }),
                                  createTextVNode(" 让我掉下眼泪的 不止昨夜的酒，让我依依不舍的 不止你的温柔"),
                                  _hoisted_28,
                                  _hoisted_29,
                                  createTextVNode(" 雨路还要走多久 你攥着我的手，让我感到为难的 是挣扎的自由"),
                                  _hoisted_30,
                                  _hoisted_31,
                                  createTextVNode(" 分别总是在九月 回忆是思念的愁，深秋嫩绿的垂柳 亲吻着我额头"),
                                  _hoisted_32,
                                  _hoisted_33,
                                  createTextVNode(" 在那座阴雨的小城里 我从未忘记你，成都 带不走的 只有你"),
                                  _hoisted_34
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 2
                  }, 1024)) : (openBlock(), createBlock(resolveDynamicComponent(item.name), { key: 2 }))
                ]),
                _: 2
              }, 1032, ["size", "color"])
            ]),
            _: 2
          }, 1032, ["onClick"])) : createCommentVNode("", true)
        ], 64);
      }), 128)) : createCommentVNode("", true),
      createVNode(_component_n_el, {
        tag: "div",
        class: "set-item"
      }, {
        default: withCtx(() => [
          createVNode(_component_n_switch, {
            "onUpdate:value": [
              _ctx.compData.handleDarkTheme,
              _cache[0] || (_cache[0] = ($event) => _ctx.darkTheme = $event)
            ],
            value: _ctx.darkTheme,
            size: "medium"
          }, {
            "checked-icon": withCtx(() => [
              createVNode(_component_n_icon, { size: 14 }, {
                default: withCtx(() => [
                  createVNode(_component_MoonOutline)
                ]),
                _: 1
              })
            ]),
            "unchecked-icon": withCtx(() => [
              createVNode(_component_n_icon, { size: 14 }, {
                default: withCtx(() => [
                  createVNode(_component_SunnyOutline)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onUpdate:value", "value"])
        ]),
        _: 1
      }),
      createElementVNode("div", _hoisted_35, [
        createVNode(_component_n_dropdown, {
          trigger: "click",
          options: _ctx.userOptions
        }, {
          default: withCtx(() => [
            createTextVNode("管理员")
          ]),
          _: 1
        }, 8, ["options"])
      ])
    ]),
    createVNode(_component_n_drawer, {
      show: _ctx.compData.searchModel,
      "onUpdate:show": _cache[4] || (_cache[4] = ($event) => _ctx.compData.searchModel = $event),
      width: 502,
      placement: "top"
    }, {
      default: withCtx(() => [
        createVNode(_component_n_drawer_content, { title: "搜索" }, {
          footer: withCtx(() => [
            createVNode(_component_n_button_group, null, {
              default: withCtx(() => [
                createVNode(_component_n_button, { ghost: "" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, { size: "16" }, {
                      default: withCtx(() => [
                        createVNode(_component_CloseCircleOutline)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 关闭 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, { ghost: "" }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, null, {
                      default: withCtx(() => [
                        createVNode(_component_SyncCircleOutline)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 重置 ")
                  ]),
                  _: 1
                }),
                createVNode(_component_n_button, {
                  onClick: _ctx.compData.handleValidateClick,
                  ghost: ""
                }, {
                  icon: withCtx(() => [
                    createVNode(_component_n_icon, { size: "16" }, {
                      default: withCtx(() => [
                        createVNode(_component_SearchOutline)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" 搜索 ")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createVNode(_component_n_form, {
              ref: "formRef",
              inline: "",
              "label-width": 180,
              model: _ctx.compData.formValue,
              rules: _ctx.compData.rules,
              size: "medium"
            }, {
              default: withCtx(() => [
                createVNode(_component_n_form_item, {
                  label: "姓名",
                  path: "user.name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: _ctx.compData.formValue.user.name,
                      "onUpdate:value": _cache[1] || (_cache[1] = ($event) => _ctx.compData.formValue.user.name = $event),
                      placeholder: "输入姓名"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, {
                  label: "年龄",
                  path: "user.age"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: _ctx.compData.formValue.user.age,
                      "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.compData.formValue.user.age = $event),
                      placeholder: "输入年龄"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                }),
                createVNode(_component_n_form_item, {
                  label: "电话号码",
                  path: "phone"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_n_input, {
                      value: _ctx.compData.formValue.phone,
                      "onUpdate:value": _cache[3] || (_cache[3] = ($event) => _ctx.compData.formValue.phone = $event),
                      placeholder: "电话号码"
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["show"]),
    createVNode(_component_UserSetting, { ref: "UserSettingRef" }, null, 512)
  ], 64);
}
const UserSet = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-434fa856"]]);
const _sfc_main$6 = defineComponent({});
const MenuVisibleIcon_vue_vue_type_style_index_0_scoped_61bf55dc_lang = "";
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuUnfoldOutlined = resolveComponent("MenuUnfoldOutlined");
  const _component_n_icon = NIcon;
  return openBlock(), createBlock(_component_n_icon, {
    class: "menu-visible-icon",
    size: "18",
    color: "#0e7a0d"
  }, {
    default: withCtx(() => [
      createVNode(_component_MenuUnfoldOutlined)
    ]),
    _: 1
  });
}
const MenuVisibleIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-61bf55dc"]]);
const _sfc_main$5 = defineComponent({
  setup() {
    const app$1 = app();
    return {
      app: app$1
    };
  }
});
const AppLogo_vue_vue_type_style_index_0_scoped_0dc4e4b8_lang = "";
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "header-logo",
    style: normalizeStyle({ width: _ctx.app.collapsed ? "64px" : null })
  }, [
    _ctx.app.collapsed ? (openBlock(), createElementBlock("span", _hoisted_1$3, "品茗")) : (openBlock(), createElementBlock("span", _hoisted_2$2, "品茗科技"))
  ], 4);
}
const AppLogo = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-0dc4e4b8"]]);
const _sfc_main$4 = defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  components: {
    AppLogo
  },
  emits: ["update:isOpen"],
  setup(props, { emit }) {
    const app$1 = app();
    const router = useRouter();
    const updateExpandedKeys = () => {
      const paths = getObjectPath({ arr: toTree({ arr: app$1.allMenus }), id: app$1.currentRouter.meta.id });
      const tabPaths = paths.filter((item) => item.shows);
      compData.expandedKeys = tabPaths.map((item) => item.id);
    };
    const compData = reactive({
      expandedKeys: [],
      styleLeft: computed(() => {
        return app$1.mobile ? props.isOpen ? 0 : "-250px" : 0;
      }),
      allMenus: [],
      handleSelect(key, item) {
        router.push(item.path);
      },
      handleUpdateExpandedKeys(keys) {
        compData.expandedKeys = keys;
      },
      handleCollapse() {
        if (app$1.mobile) {
          emit("update:isOpen", false);
        } else {
          app$1.collapsed = true;
        }
      },
      value: void 0
    });
    watch(
      () => router.currentRoute.value.path,
      () => {
        updateExpandedKeys();
        if (router.currentRoute.value.meta.shows) {
          compData.value = app$1.currentRouter.meta.id;
        } else {
          compData.value = compData.expandedKeys[0];
        }
      },
      { immediate: true, deep: true }
    );
    watch(app$1.userSetting, () => {
      if (app$1.userSetting.layoutName === "tm") {
        compData.allMenus = computed(() => cloneDeep(app$1.paths[0].children || app$1.paths));
      } else {
        compData.allMenus = computed(() => cloneDeep(app$1.treeMenus));
      }
    }, {
      immediate: true
    });
    return {
      compData,
      app: app$1
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppLogo = resolveComponent("AppLogo");
  const _component_n_menu = NMenu;
  const _component_n_layout_sider = NLayoutSider;
  return _ctx.app.userSetting.layoutName !== "mt" || _ctx.app.mobile ? (openBlock(), createBlock(_component_n_layout_sider, {
    key: 0,
    bordered: "",
    "show-trigger": "",
    "collapse-mode": "width",
    "collapsed-width": 64,
    width: 240,
    "native-scrollbar": false,
    collapsed: _ctx.app.collapsed,
    class: normalizeClass([_ctx.app.mobile ? "mobile" : null]),
    style: normalizeStyle({ left: _ctx.compData.styleLeft }),
    onCollapse: _ctx.compData.handleCollapse,
    onExpand: _cache[1] || (_cache[1] = ($event) => _ctx.app.collapsed = false)
  }, {
    default: withCtx(() => [
      _ctx.app.mobile ? (openBlock(), createBlock(_component_AppLogo, { key: 0 })) : createCommentVNode("", true),
      createVNode(_component_n_menu, {
        "collapsed-width": 64,
        "collapsed-icon-size": 22,
        "icon-size": 18,
        "key-field": "id",
        "label-field": "title",
        value: _ctx.compData.value,
        "onUpdate:value": [
          _cache[0] || (_cache[0] = ($event) => _ctx.compData.value = $event),
          _ctx.compData.handleSelect
        ],
        options: _ctx.compData.allMenus,
        "expanded-keys": _ctx.compData.expandedKeys,
        "onUpdate:expandedKeys": _ctx.compData.handleUpdateExpandedKeys
      }, null, 8, ["value", "options", "expanded-keys", "onUpdate:value", "onUpdate:expandedKeys"])
    ]),
    _: 1
  }, 8, ["collapsed", "class", "style", "onCollapse"])) : createCommentVNode("", true);
}
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:isOpen"],
  setup() {
    const app$1 = app();
    const router = useRouter();
    const compData = reactive({
      expandedKeys: [],
      handleSelect(key, item) {
        router.push(item.path);
      },
      handleUpdateExpandedKeys(keys) {
        compData.expandedKeys = keys;
      }
    });
    return {
      app: app$1,
      compData
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_menu = NMenu;
  return openBlock(), createBlock(_component_n_menu, {
    "icon-size": 18,
    "key-field": "id",
    "label-field": "title",
    value: _ctx.app.currentRouter.meta.id,
    mode: "horizontal",
    options: _ctx.app.treeMenus,
    "onUpdate:value": _ctx.compData.handleSelect,
    "onUpdate:expandedKeys": _ctx.compData.handleUpdateExpandedKeys
  }, null, 8, ["value", "options", "onUpdate:value", "onUpdate:expandedKeys"]);
}
const Navbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = defineComponent({
  setup() {
    const app$1 = app();
    const tabsRefs = ref(null);
    const router = useRouter();
    const $mitt = inject("$mitt");
    let step = 0;
    const handleArrowScroll = (direction = "prev") => {
      const scrollWidth = tabsRefs.value.scrollWidth;
      const clientWidth = tabsRefs.value.clientWidth;
      const beScrollWidth = scrollWidth - clientWidth;
      direction === "next" ? step += 300 : step -= 300;
      if (step >= beScrollWidth) {
        step = beScrollWidth;
      }
      if (direction === "prev" && step <= 0) {
        step = 0;
      }
      tabsRefs.value.scrollTo({ left: step, behavior: "smooth" });
    };
    tabsMore.forEach((item) => {
      if (item.key === "1") {
        item.props = {
          onClick: () => {
            $mitt.emit("onReload");
          }
        };
      } else {
        item.disabled = computed(() => !(app$1.getTabs.length > 1));
        item.props = {
          onClick: () => {
            compData.handleColseRouter(app$1.currentRouter, item.zt);
          }
        };
      }
    });
    const compData = reactive({
      tabsMore,
      isClose() {
        return app$1.getTabs.length > 1;
      },
      handleActionRouter(item) {
        router.push(item.meta.tempPath || item.meta.path);
      },
      handleColseRouter(item, zt) {
        if (app$1.getTabs.length <= 1) {
          return false;
        }
        const idx = app$1.getTabs.findIndex((k) => k.meta.id === item.meta.id);
        if (zt === "l") {
          app$1.getTabs.splice(0, idx);
        } else if (zt === "r") {
          app$1.getTabs.splice(idx + 1, app$1.getTabs.length);
        } else if (zt === "c") {
          app$1.getTabs.splice(0, idx);
          app$1.getTabs.splice(1, app$1.getTabs.length);
        } else {
          app$1.getTabs.splice(idx, 1);
          if (app$1.currentRouter.meta.id === item.meta.id) {
            const current = app$1.getTabs[idx - 1 <= -1 ? 0 : idx - 1];
            if (current) {
              compData.handleActionRouter(current);
            }
          }
        }
      }
    });
    return {
      compData,
      app: app$1,
      tabsRefs,
      handleArrowScroll
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_0632d4c0_lang = "";
const _hoisted_1$2 = {
  key: 0,
  class: "tact tabs",
  ref: "tabsRefs"
};
const _hoisted_2$1 = {
  key: 1,
  class: "sutra tabs",
  ref: "tabsRefs"
};
const _hoisted_3 = { class: "arrow arrow-more" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronBackOutline = resolveComponent("ChevronBackOutline");
  const _component_n_icon = NIcon;
  const _component_CloseOutline = resolveComponent("CloseOutline");
  const _component_n_el = NEl;
  const _component_ChevronForwardOutline = resolveComponent("ChevronForwardOutline");
  const _component_SmileOutlined = resolveComponent("SmileOutlined");
  const _component_n_dropdown = NDropdown;
  return openBlock(), createBlock(_component_n_el, {
    tag: "div",
    class: "scrollbar"
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleArrowScroll("prev")),
        class: "arrow arrow-prev"
      }, [
        createVNode(_component_n_icon, {
          size: "18",
          color: "var(--primary-color)"
        }, {
          default: withCtx(() => [
            createVNode(_component_ChevronBackOutline)
          ]),
          _: 1
        })
      ]),
      _ctx.app.userSetting.tabsStyle === "tact" ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        _ctx.app.getTabs.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.app.getTabs, (item, idx) => {
          return openBlock(), createBlock(_component_n_el, {
            onClick: ($event) => _ctx.compData.handleActionRouter(item),
            key: idx,
            tag: "div",
            class: normalizeClass(["tabs-item", item.meta.id === _ctx.app.currentRouter.meta.id ? "active" : null])
          }, {
            default: withCtx(() => [
              item.meta.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.meta.icon), {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true),
              createElementVNode("span", null, toDisplayString(item.meta.title), 1),
              _ctx.compData.isClose(item) ? (openBlock(), createBlock(_component_n_icon, {
                key: 1,
                class: "icon-close",
                onClick: withModifiers(($event) => _ctx.compData.handleColseRouter(item), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_CloseOutline)
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]);
        }), 128)) : createCommentVNode("", true)
      ], 512)) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
        _ctx.app.getTabs.length ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.app.getTabs, (item, idx) => {
          return openBlock(), createBlock(_component_n_el, {
            onClick: ($event) => _ctx.compData.handleActionRouter(item),
            key: idx,
            tag: "div",
            class: normalizeClass(["tabs-item", item.meta.id === _ctx.app.currentRouter.meta.id ? "active" : null])
          }, {
            default: withCtx(() => [
              item.meta.icon ? (openBlock(), createBlock(resolveDynamicComponent(item.meta.icon), {
                key: 0,
                class: "icon"
              })) : createCommentVNode("", true),
              createElementVNode("span", null, toDisplayString(item.meta.title), 1),
              _ctx.compData.isClose(item) ? (openBlock(), createBlock(_component_n_icon, {
                key: 1,
                class: "icon-close",
                onClick: withModifiers(($event) => _ctx.compData.handleColseRouter(item), ["stop"])
              }, {
                default: withCtx(() => [
                  createVNode(_component_CloseOutline)
                ]),
                _: 2
              }, 1032, ["onClick"])) : createCommentVNode("", true)
            ]),
            _: 2
          }, 1032, ["onClick", "class"]);
        }), 128)) : createCommentVNode("", true)
      ], 512)),
      createElementVNode("div", {
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.handleArrowScroll("next")),
        class: "arrow arrow-next"
      }, [
        createVNode(_component_n_icon, {
          size: "18",
          color: "var(--primary-color)"
        }, {
          default: withCtx(() => [
            createVNode(_component_ChevronForwardOutline)
          ]),
          _: 1
        })
      ]),
      createElementVNode("div", _hoisted_3, [
        createVNode(_component_n_dropdown, {
          options: _ctx.compData.tabsMore,
          placement: "bottom-start",
          trigger: "click"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_icon, { size: "18" }, {
              default: withCtx(() => [
                createVNode(_component_SmileOutlined)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["options"])
      ])
    ]),
    _: 1
  });
}
const Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-0632d4c0"]]);
const _sfc_main$1 = defineComponent({
  setup() {
    const app$1 = app();
    const $mitt = inject("$mitt");
    const isRoad = ref(true);
    const caches = computed(() => {
      return app$1.allMenus.filter((item) => item.keepAlive).map((item) => item.name);
    });
    $mitt.on("onReload", () => {
      if (!NProgress.status) {
        NProgress.start();
        isRoad.value = false;
        nextTick(() => {
          isRoad.value = true;
          NProgress.done();
        });
      }
    });
    const enterActiveClass = computed(() => {
      let item = animations.find((item2) => app$1.userSetting.animation === item2.value);
      return [item.prefix, item.value].join(" ");
    });
    const leaveActiveClass = computed(() => {
      let item = animations.find((item2) => app$1.userSetting.animation === item2.value);
      return [item.prefix, item.out].join(" ");
    });
    return {
      app: app$1,
      enterActiveClass,
      leaveActiveClass,
      isRoad,
      caches
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_4ed6bac8_lang = "";
const _hoisted_1$1 = { class: "main bag-scroll" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_view = resolveComponent("router-view");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    _ctx.isRoad ? (openBlock(), createBlock(_component_router_view, { key: 0 }, {
      default: withCtx(({ Component }) => [
        createVNode(Transition, {
          mode: "out-in",
          "enter-active-class": _ctx.enterActiveClass,
          "leave-active-class": _ctx.leaveActiveClass
        }, {
          default: withCtx(() => [
            _ctx.app.userSetting.keepAlive ? (openBlock(), createBlock(KeepAlive, {
              key: 0,
              max: 30,
              include: _ctx.caches
            }, [
              (openBlock(), createBlock(resolveDynamicComponent(Component)))
            ], 1032, ["include"])) : (openBlock(), createBlock(resolveDynamicComponent(Component), { key: 1 }))
          ]),
          _: 2
        }, 1032, ["enter-active-class", "leave-active-class"])
      ]),
      _: 1
    })) : createCommentVNode("", true)
  ]);
}
const BagMain = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-4ed6bac8"]]);
const _sfc_main = defineComponent({
  components: {
    Breadcrumb,
    UserSet,
    MenuVisibleIcon,
    AppLogo,
    Sidebar,
    Navbar,
    Tabs,
    BagMain
  },
  setup() {
    const app$1 = app();
    const compData = reactive({
      isOpen: false,
      handleMobileMask() {
        compData.isOpen = !compData.isOpen;
      }
    });
    return {
      compData,
      app: app$1
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
const index_vue_vue_type_style_index_1_scoped_77c118b9_lang = "";
const _hoisted_1 = { class: "header-plan" };
const _hoisted_2 = { class: "header-user" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppLogo = resolveComponent("AppLogo");
  const _component_MenuVisibleIcon = resolveComponent("MenuVisibleIcon");
  const _component_Breadcrumb = resolveComponent("Breadcrumb");
  const _component_Navbar = resolveComponent("Navbar");
  const _component_UserSet = resolveComponent("UserSet");
  const _component_n_layout_header = NLayoutHeader;
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Tabs = resolveComponent("Tabs");
  const _component_BagMain = resolveComponent("BagMain");
  const _component_n_el = NEl;
  const _component_n_layout = NLayout;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_n_layout, { style: { "height": "100%" } }, {
      default: withCtx(() => [
        createVNode(_component_n_layout_header, {
          class: "header",
          bordered: ""
        }, {
          default: withCtx(() => [
            !_ctx.app.mobile ? (openBlock(), createBlock(_component_AppLogo, { key: 0 })) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_1, [
              _ctx.app.mobile ? (openBlock(), createBlock(_component_MenuVisibleIcon, {
                key: 0,
                onClick: _ctx.compData.handleMobileMask
              }, null, 8, ["onClick"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                _ctx.app.userSetting.layoutName === "ml" ? (openBlock(), createBlock(_component_Breadcrumb, { key: 0 })) : (openBlock(), createBlock(_component_Navbar, { key: 1 }))
              ], 64))
            ]),
            createElementVNode("div", _hoisted_2, [
              createVNode(_component_UserSet)
            ])
          ]),
          _: 1
        }),
        createVNode(_component_n_layout, {
          "has-sider": "",
          style: { "height": "calc(100% - 50px)" }
        }, {
          default: withCtx(() => [
            createVNode(_component_Sidebar, {
              isOpen: _ctx.compData.isOpen,
              "onUpdate:isOpen": _cache[0] || (_cache[0] = ($event) => _ctx.compData.isOpen = $event)
            }, null, 8, ["isOpen"]),
            createVNode(_component_n_layout, { style: { "height": "100%" } }, {
              default: withCtx(() => [
                createVNode(_component_n_el, {
                  tag: "div",
                  class: "layout-main"
                }, {
                  default: withCtx(() => [
                    withDirectives(createVNode(_component_Tabs, null, null, 512), [
                      [vShow, !_ctx.app.userSetting.hideTabs]
                    ]),
                    createVNode(_component_BagMain)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }),
    withDirectives(createElementVNode("div", {
      class: "mobile-mask",
      onClick: _cache[1] || (_cache[1] = (...args) => _ctx.compData.handleMobileMask && _ctx.compData.handleMobileMask(...args))
    }, null, 512), [
      [vShow, _ctx.compData.isOpen]
    ])
  ], 64);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-77c118b9"]]);
export {
  index as default
};
