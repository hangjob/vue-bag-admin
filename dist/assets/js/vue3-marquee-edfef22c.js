import { d as defineComponent, W as openBlock, X as createElementBlock, Y as createBaseVNode, Z as renderSlot, F as Fragment, _ as renderList, t as withDirectives, z as vShow, $ as normalizeStyle } from "./@vue-e049e909.js";
var script = /* @__PURE__ */ defineComponent({
  name: "Vue3Marquee",
  props: {
    direction: {
      type: String,
      required: false,
      default: "left",
      validator(value) {
        return ["left", "right"].includes(value);
      }
    },
    duration: {
      type: Number,
      required: false,
      default: 20
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    },
    loop: {
      type: Number,
      required: false,
      default: 0
    },
    clone: {
      type: Boolean,
      required: false,
      default: false
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false
    },
    gradientColor: {
      type: Array,
      required: false,
      default: [255, 255, 255],
      validator: (value) => {
        if (value.length != 3) {
          return false;
        }
        if (typeof value[0] !== "number" || value[0] < 0 || value[0] > 255) {
          return false;
        }
        if (typeof value[1] !== "number" || value[1] < 0 || value[1] > 255) {
          return false;
        }
        if (typeof value[2] !== "number" || value[2] < 0 || value[2] > 255) {
          return false;
        }
        return true;
      }
    },
    gradientWidth: {
      type: [String, Number],
      required: false,
      default: 200
    },
    pauseOnHover: {
      type: Boolean,
      required: false,
      default: false
    },
    pauseOnClick: {
      type: Boolean,
      required: false,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: {}
    }
  },
  data() {
    return {
      localDirection: this.direction,
      localDuration: this.duration,
      localDelay: this.delay,
      localLoop: this.loop,
      localGradient: this.gradient,
      localGradientColor: this.gradientColor,
      localGradientWidth: this.gradientWidth,
      localPauseOnHover: this.pauseOnHover,
      localPauseOnClick: this.pauseOnClick,
      localClone: this.clone,
      minWidth: 0,
      cloneAmount: 0
    };
  },
  methods: {
    checkForClone() {
      if (this.localClone) {
        this.minWidth = 0;
        const contentWidth = this.$refs.marqueeContent.clientWidth;
        const containerWidth = this.$refs.marqueeContainer.clientWidth;
        this.cloneAmount = Math.ceil(containerWidth / (contentWidth * 2));
      } else {
        this.minWidth = "100%";
      }
    }
  },
  computed: {
    getMarqueeDirection() {
      if (this.localDirection === "left") {
        return "normal";
      } else if (this.localDirection === "right") {
        return "reverse";
      }
      return "normal";
    },
    getPauseOnHover() {
      if (this.localPauseOnHover) {
        return "paused";
      }
      return "running";
    },
    getpauseOnClick() {
      if (this.localPauseOnClick) {
        return "paused";
      }
      return "running";
    },
    getLoops() {
      return this.localLoop === 0 ? "infinite" : this.localLoop;
    },
    getCurrentStyle() {
      let cssVariables = {
        "--duration": `${this.localDuration}s`,
        "--delay": `${this.localDelay}s`,
        "--direction": `${this.getMarqueeDirection}`,
        "--pauseOnHover": `${this.getPauseOnHover}`,
        "--pauseOnClick": `${this.getpauseOnClick}`,
        "--loops": `${this.getLoops}`
      };
      if (this.localGradient) {
        const rgbaGradientColor = `rgba(${this.localGradientColor[0]}, ${this.localGradientColor[1]}, ${this.localGradientColor[2]}`;
        cssVariables["--gradient-color"] = `${rgbaGradientColor}, 1), ${rgbaGradientColor}, 0)`;
        cssVariables["--gradient-width"] = typeof this.localGradientWidth === "number" ? `${this.localGradientWidth}px` : this.localGradientWidth;
      }
      cssVariables["--min-width"] = this.minWidth;
      return cssVariables;
    }
  },
  mounted() {
    if (this.options) {
      if (this.options.direction) {
        this.localDirection = this.options.direction;
      }
      if (this.options.duration) {
        this.localDuration = this.options.duration;
      }
      if (this.options.delay) {
        this.localDelay = this.options.delay;
      }
      if (this.options.loop) {
        this.localLoop = this.options.loop;
      }
      if (this.options.gradient) {
        this.localGradient = this.options.gradient;
      }
      if (this.options.gradientColor) {
        this.localGradientColor = this.options.gradientColor;
      }
      if (this.options.gradientWidth) {
        this.localGradientWidth = this.options.gradientWidth;
      }
      if (this.options.pauseOnHover) {
        this.localPauseOnHover = this.options.pauseOnHover;
      }
      if (this.options.pauseOnClick) {
        this.localPauseOnClick = this.options.pauseOnClick;
      }
      if (this.options.clone) {
        this.localClone = this.options.clone;
      }
    }
    this.checkForClone();
  }
});
const _hoisted_1 = {
  class: "overlay",
  ref: "marqueeContainer"
};
const _hoisted_2 = {
  class: "marquee",
  ref: "marqueeContent"
};
const _hoisted_3 = {
  class: "marquee"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [createBaseVNode("div", {
    class: "vue3-marquee",
    style: normalizeStyle(_ctx.getCurrentStyle)
  }, [createBaseVNode("div", _hoisted_1, null, 512), createBaseVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "default")], 512), createBaseVNode("div", _hoisted_3, [renderSlot(_ctx.$slots, "default")]), (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.cloneAmount, (num) => {
    return withDirectives((openBlock(), createElementBlock("div", {
      class: "marquee",
      key: num
    }, [renderSlot(_ctx.$slots, "default")], 512)), [[vShow, _ctx.localClone]]);
  }), 128))], 4)]);
}
function styleInject(css, ref) {
  if (ref === void 0)
    ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
var css_248z = '\n.vue3-marquee {\n  overflow-x: hidden !important;\n  display: flex !important;\n  flex-direction: row !important;\n  position: relative;\n  width: 100%;\n}\n.vue3-marquee:hover div {\n  animation-play-state: var(--pauseOnHover);\n}\n.vue3-marquee:active div {\n  animation-play-state: var(--pauseOnClick);\n}\n.marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--loops);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n0% {\n    transform: translateX(0%);\n}\n100% {\n    transform: translateX(-100%);\n}\n}\n.overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.overlay::before,\n.overlay::after {\n  background: linear-gradient(to right, var(--gradient-color));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n}\n.overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.overlay::before {\n  left: 0;\n  top: 0;\n}\n';
styleInject(css_248z);
script.render = render;
var entry_esm = /* @__PURE__ */ (() => {
  const installable = script;
  installable.install = (app) => {
    app.component("Vue3Marquee", installable);
  };
  return installable;
})();
export { entry_esm as e };
