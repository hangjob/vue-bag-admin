import { c as commonjsGlobal, a as getDefaultExportFromCjs } from "./mockjs-475bec84.js";
import { v as vue } from "./vue-040306de.js";
var baseEditor$1 = "";
var github$1 = "";
var baseEditor = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(vue.exports);
  })(typeof self !== "undefined" ? self : commonjsGlobal, function(__WEBPACK_EXTERNAL_MODULE__0__) {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 108);
    }([
      function(module2, exports2) {
        module2.exports = __WEBPACK_EXTERNAL_MODULE__0__;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return bold;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return clear;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return code;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return fullscreen;
        });
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return h1;
        });
        __webpack_require__.d(__webpack_exports__, "f", function() {
          return h2;
        });
        __webpack_require__.d(__webpack_exports__, "g", function() {
          return h3;
        });
        __webpack_require__.d(__webpack_exports__, "h", function() {
          return h4;
        });
        __webpack_require__.d(__webpack_exports__, "i", function() {
          return h5;
        });
        __webpack_require__.d(__webpack_exports__, "j", function() {
          return h6;
        });
        __webpack_require__.d(__webpack_exports__, "k", function() {
          return hr;
        });
        __webpack_require__.d(__webpack_exports__, "l", function() {
          return image;
        });
        __webpack_require__.d(__webpack_exports__, "m", function() {
          return italic;
        });
        __webpack_require__.d(__webpack_exports__, "n", function() {
          return link;
        });
        __webpack_require__.d(__webpack_exports__, "o", function() {
          return ol;
        });
        __webpack_require__.d(__webpack_exports__, "p", function() {
          return quote;
        });
        __webpack_require__.d(__webpack_exports__, "q", function() {
          return redo;
        });
        __webpack_require__.d(__webpack_exports__, "r", function() {
          return strikethrough;
        });
        __webpack_require__.d(__webpack_exports__, "s", function() {
          return syncScroll;
        });
        __webpack_require__.d(__webpack_exports__, "t", function() {
          return table;
        });
        __webpack_require__.d(__webpack_exports__, "u", function() {
          return ul;
        });
        __webpack_require__.d(__webpack_exports__, "v", function() {
          return undo;
        });
        var bold = "bold";
        var clear = "clear";
        var code = "code";
        var fullscreen = "fullscreen";
        var h1 = "h1";
        var h2 = "h2";
        var h3 = "h3";
        var h4 = "h4";
        var h5 = "h5";
        var h6 = "h6";
        var hr = "hr";
        var image = "image";
        var italic = "italic";
        var link = "link";
        var ol = "ol";
        var quote = "quote";
        var redo = "redo";
        var strikethrough = "strikethrough";
        var syncScroll = "sync-scroll";
        var table = "table";
        var ul = "ul";
        var undo = "undo";
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "e", function() {
          return isObject;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return arraytoObject;
        });
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return importAll;
        });
        __webpack_require__.d(__webpack_exports__, "d", function() {
          return isKorean;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return generatorText;
        });
        var toString = Object.prototype.toString;
        var isObject = function isObject2(target) {
          return toString.call(target) === "[object Object]";
        };
        function extend(to, _from) {
          Object.keys(_from).forEach(function(key) {
            to[key] = _from[key];
          });
          return to;
        }
        function arraytoObject(arr) {
          var res = {};
          for (var i = 0; i < arr.length; i++) {
            if (arr[i]) {
              extend(res, arr[i]);
            }
          }
          return res;
        }
        function importAll(map, r) {
          r.keys().forEach(function(filePath) {
            map[filePath] = r(filePath);
          });
        }
        function isKorean(text) {
          var reg = /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;
          return reg.test(text);
        }
        function generatorText(_ref) {
          var selected = _ref.selected, InsertGetter = _ref.InsertGetter, _ref$selectedGetter = _ref.selectedGetter, selectedGetter = _ref$selectedGetter === void 0 ? function(selected2) {
            return selected2;
          } : _ref$selectedGetter, _ref$ignoreEmptyLine = _ref.ignoreEmptyLine, ignoreEmptyLine = _ref$ignoreEmptyLine === void 0 ? true : _ref$ignoreEmptyLine;
          var insertContent;
          var newSelected;
          if (selected) {
            newSelected = selectedGetter(selected);
            insertContent = InsertGetter(selected, 1);
            if (selected.indexOf("\n") !== -1) {
              insertContent = selected.split("\n").map(function(rowText, index) {
                var isEmptyLine = !rowText;
                if (ignoreEmptyLine && isEmptyLine)
                  return "";
                return InsertGetter(rowText, index + 1).replace(selectedGetter(null), "");
              }).join("\n");
              newSelected = insertContent;
            }
          } else {
            insertContent = InsertGetter(null, 1);
            newSelected = selectedGetter(selected);
          }
          return {
            insertContent,
            newSelected
          };
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "c", function() {
          return LINE_MARKUP;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return HEADING_MARKUP;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return ANCHOR_MARKUP;
        });
        var LINE_MARKUP = "data-v-md-line";
        var HEADING_MARKUP = "data-v-md-heading";
        var ANCHOR_MARKUP = "data-v-md-anchor";
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_exports__["a"] = {
          PREVIEW: "preview",
          EDITABLE: "editable",
          EDIT: "edit"
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _extends;
        });
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return getScrollTop;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return scrollTo;
        });
        function getScrollTop(target) {
          var result = 0;
          if (target === window) {
            result = target.pageYOffset;
          } else if (target) {
            result = target.scrollTop;
          }
          return result;
        }
        function scrollTo(target, scrollTop) {
          if (target === window) {
            window.scrollTo(window.pageYOffset, scrollTop);
          } else if (target) {
            target.scrollTop = scrollTop;
          }
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var esm_extends = __webpack_require__(5);
        var lib = __webpack_require__(11);
        var lib_default = /* @__PURE__ */ __webpack_require__.n(lib);
        var svg = {
          svg: [],
          altGlyph: [],
          altGlyphDef: [],
          altGlyphItem: [],
          animate: [],
          animateColor: [],
          animateMotion: [],
          animateTransform: [],
          circle: [],
          clipPath: [],
          "color-profile": [],
          cursor: [],
          "definition-src": [],
          defs: [],
          desc: [],
          ellipse: [],
          feBlend: [],
          feColorMatrix: [],
          feComponentTransfer: [],
          feComposite: [],
          feConvolveMatrix: [],
          feDiffuseLighting: [],
          feDisplacementMap: [],
          feDistantLight: [],
          feFlood: [],
          feFuncA: [],
          feFuncB: [],
          feFuncG: [],
          feFuncR: [],
          feGaussianBlur: [],
          feImage: [],
          feMerge: [],
          feMergeNode: [],
          feMorphology: [],
          feOffset: [],
          fePointLight: [],
          feSpecularLighting: [],
          feSpotLight: [],
          feTile: [],
          feTurbulence: [],
          filter: [],
          font: [],
          foreignObject: [],
          g: [],
          glyph: [],
          glyphRef: [],
          hkern: [],
          image: [],
          line: [],
          linearGradient: [],
          marker: [],
          mask: [],
          metadata: [],
          "missing-glyph": [],
          mpath: [],
          path: [],
          pattern: [],
          polygon: [],
          polyline: [],
          radialGradient: [],
          rect: [],
          set: [],
          stop: [],
          style: [],
          switch: [],
          symbol: [],
          text: [],
          textPath: [],
          title: [],
          tref: [],
          tspan: [],
          use: [],
          view: [],
          vkern: []
        };
        var KaTex = {
          math: [],
          annotation: [],
          semantics: [],
          mtext: [],
          mn: [],
          mo: [],
          mi: [],
          mspace: [],
          mover: [],
          munder: [],
          munderover: [],
          msup: [],
          msub: [],
          msubsup: [],
          mfrac: [],
          mroot: [],
          msqrt: [],
          mtable: [],
          mtr: [],
          mtd: [],
          mlabeledtr: [],
          mrow: [],
          menclose: [],
          mstyle: [],
          mpadded: [],
          mphantom: [],
          mglyph: []
        };
        var attrWhiteList = ["style", "align", "class", "id"];
        var prefixAttrWhiteList = ["data-"];
        var tags = {
          input: ["type"],
          ol: ["reversed", "start", "type"],
          button: ["type"],
          summary: []
        };
        var tagWhiteList = Object(esm_extends["a"])({}, tags, KaTex, svg);
        var options = {
          whiteList: Object(esm_extends["a"])({}, lib_default.a.getDefaultWhiteList(), tagWhiteList),
          onIgnoreTagAttr: function onIgnoreTagAttr(tag, name, value) {
            if (svg[tag] || KaTex[tag] || attrWhiteList.find(function(attr) {
              return attr === name;
            }) || prefixAttrWhiteList.find(function(prefix) {
              return name.startsWith(prefix);
            })) {
              return name + '="' + lib_default.a.escapeAttrValue(value) + '"';
            }
          }
        };
        var xssFilterInstance = new lib_default.a.FilterXSS(options);
        xssFilterInstance.extend = function(extendOptions) {
          var instanceOptions = xssFilterInstance.options;
          Object.keys(extendOptions).forEach(function(optionName) {
            if (optionName === "whiteList") {
              Object.keys(extendOptions.whiteList).forEach(function(tagName) {
                var tagAttrWhiteList = extendOptions.whiteList[tagName];
                var instanceWhiteList = instanceOptions.whiteList;
                if (instanceWhiteList[tagName]) {
                  instanceWhiteList[tagName] = [].concat(instanceWhiteList[tagName], tagAttrWhiteList);
                } else {
                  instanceWhiteList[tagName] = tagAttrWhiteList;
                }
              });
            } else if (optionName === "onIgnoreTagAttr") {
              var oldHandler = instanceOptions.onIgnoreTagAttr;
              instanceOptions.onIgnoreTagAttr = function() {
                var _extendOptions$onIgno;
                for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                  arg[_key] = arguments[_key];
                }
                var oldReturnVal = oldHandler.call.apply(oldHandler, [this].concat(arg));
                var newReturnVal = (_extendOptions$onIgno = extendOptions.onIgnoreTagAttr).call.apply(_extendOptions$onIgno, [this].concat(arg));
                return oldReturnVal || newReturnVal;
              };
            } else {
              instanceOptions[optionName] = extendOptions[optionName];
            }
          });
        };
        __webpack_exports__["a"] = xssFilterInstance;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return smooth;
        });
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return smoothScroll;
        });
        var _scroll_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
        function smooth(_ref) {
          var currentScrollTop = _ref.currentScrollTop, scrollToTop = _ref.scrollToTop, scrollFn = _ref.scrollFn, _ref$percent = _ref.percent, percent = _ref$percent === void 0 ? 10 : _ref$percent, onScrollEnd = _ref.onScrollEnd;
          var scrollWay = scrollToTop > currentScrollTop ? "down" : "up";
          var step = (scrollToTop - currentScrollTop) * (percent / 100);
          var id;
          var scroll = function scroll2() {
            currentScrollTop += step;
            if (scrollWay === "down" && currentScrollTop >= scrollToTop || scrollWay === "up" && currentScrollTop <= scrollToTop) {
              scrollFn(scrollToTop);
              window.cancelAnimationFrame(id);
              if (onScrollEnd)
                window.requestAnimationFrame(onScrollEnd);
            } else {
              scrollFn(currentScrollTop);
              window.requestAnimationFrame(scroll2);
            }
          };
          window.requestAnimationFrame(scroll);
        }
        function smoothScroll(_ref2) {
          var scrollTarget = _ref2.scrollTarget, scrollToTop = _ref2.scrollToTop, _ref2$percent = _ref2.percent, percent = _ref2$percent === void 0 ? 10 : _ref2$percent, onScrollEnd = _ref2.onScrollEnd;
          var currentScrollTop = Object(_scroll_top__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollTarget);
          smooth({
            currentScrollTop,
            scrollToTop,
            scrollFn: function scrollFn(scrollTop) {
              return Object(_scroll_top__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollTarget, scrollTop);
            },
            percent,
            onScrollEnd
          });
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", {
            class: "v-md-editor-preview",
            style: {
              tabSize: _ctx.tabSize,
              "-moz-tab-size": _ctx.tabSize,
              "-o-tab-size": _ctx.tabSize
            },
            onClick: _cache[1] || (_cache[1] = function() {
              return _ctx.handlePreviewClick.apply(_ctx, arguments);
            })
          }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
            class: [_ctx.previewClass],
            innerHTML: _ctx.html
          }, null, 10, ["innerHTML"])], 4);
        }
        var xss = __webpack_require__(7);
        var lang = __webpack_require__(13);
        var v_md_parser_VMdParser = /* @__PURE__ */ function() {
          function VMdParser() {
            this.lang = new lang["a"]();
          }
          var _proto = VMdParser.prototype;
          _proto.defaultMarkdownLoader = function defaultMarkdownLoader(text) {
            return text;
          };
          _proto.use = function use(optionsOrInstall, opt) {
            if (typeof optionsOrInstall === "function") {
              optionsOrInstall(this, opt);
            } else {
              optionsOrInstall.install(this, opt);
            }
            return this;
          };
          _proto.theme = function theme(themeConfig) {
            this.themeConfig = themeConfig;
          };
          _proto.extendMarkdown = function extendMarkdown(extender) {
            if (!this.themeConfig) {
              return console.error("Please use theme before using plugins");
            }
            var markdownParser = this.themeConfig.markdownParser;
            extender(markdownParser);
          };
          _proto.parse = function parse(text) {
            var _markdownParser$rende;
            var markdownParser = this.themeConfig.markdownParser;
            var markdownLoader = (markdownParser == null ? void 0 : (_markdownParser$rende = markdownParser.render) == null ? void 0 : _markdownParser$rende.bind(markdownParser)) || this.defaultMarkdownLoader;
            if (typeof markdownLoader !== "function" || markdownLoader === this.defaultMarkdownLoader) {
              console.error("Please configure your markdown parser");
            }
            return markdownLoader(text);
          };
          return VMdParser;
        }();
        var preview = __webpack_require__(16);
        var component = {
          name: "v-md-preview",
          mixins: [preview["a"]],
          props: {
            text: {
              type: String,
              default: ""
            },
            theme: Object,
            beforeChange: Function
          },
          emits: ["change"],
          data: function data() {
            return {
              html: ""
            };
          },
          watch: {
            text: function text() {
              this.handleTextChange();
            },
            langConfig: function langConfig() {
              this.handleTextChange();
            }
          },
          computed: {
            vMdParser: function vMdParser2() {
              return this.$options.vMdParser;
            },
            previewClass: function previewClass() {
              return this.vMdParser.themeConfig.previewClass;
            },
            langConfig: function langConfig() {
              return this.vMdParser.lang.langConfig;
            }
          },
          created: function created() {
            this.handleTextChange();
          },
          methods: {
            handleTextChange: function handleTextChange() {
              var _this = this;
              var next = function next2(text) {
                _this.html = xss["a"].process(_this.$options.vMdParser.parse(text));
                _this.$emit("change", text, _this.html);
              };
              if (this.beforeChange) {
                this.beforeChange(this.text, next);
              } else {
                next(this.text);
              }
            }
          }
        };
        var vMdParser = new v_md_parser_VMdParser();
        vMdParser.lang.config = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["reactive"])(vMdParser.lang.config);
        component.vMdParser = new v_md_parser_VMdParser();
        var previewvue_type_script_lang_js = component;
        previewvue_type_script_lang_js.render = render;
        var src_preview = previewvue_type_script_lang_js;
        __webpack_require__(18);
        var version = "2.3.12";
        var preview_install = function install(app) {
          app.component(src_preview.name, src_preview);
        };
        src_preview.version = version;
        src_preview.install = preview_install;
        src_preview.xss = xss["a"];
        src_preview.use = function(optionsOrInstall, opt) {
          if (typeof optionsOrInstall === "function") {
            optionsOrInstall(src_preview, opt);
          } else {
            optionsOrInstall.install(src_preview, opt);
          }
          return src_preview;
        };
        __webpack_exports__["default"] = src_preview;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__(37);
      },
      function(module2, exports2, __webpack_require__) {
        var DEFAULT = __webpack_require__(19);
        var parser = __webpack_require__(22);
        var FilterXSS = __webpack_require__(26);
        function filterXSS(html, options) {
          var xss = new FilterXSS(options);
          return xss.process(html);
        }
        exports2 = module2.exports = filterXSS;
        exports2.filterXSS = filterXSS;
        exports2.FilterXSS = FilterXSS;
        for (var i in DEFAULT)
          exports2[i] = DEFAULT[i];
        for (var i in parser)
          exports2[i] = parser[i];
        if (typeof window !== "undefined") {
          window.filterXSS = module2.exports;
        }
        function isWorkerEnv() {
          return typeof self !== "undefined" && typeof DedicatedWorkerGlobalScope !== "undefined" && self instanceof DedicatedWorkerGlobalScope;
        }
        if (isWorkerEnv()) {
          self.filterXSS = module2.exports;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return filesFilter;
        });
        __webpack_require__.d(__webpack_exports__, "b", function() {
          return getFilesFromClipboardData;
        });
        function filesFilter(files, config) {
          var accept = config.accept;
          var filesKeys = Object.keys(files).filter(function(key) {
            var file = files[key];
            var type = file.type, name = file.name;
            var extension = name.indexOf(".") > -1 ? "." + name.split(".").pop() : "";
            var baseType = type.replace(/\/.*$/, "");
            return accept.split(",").map(function(type2) {
              return type2.trim();
            }).filter(function(type2) {
              return type2;
            }).some(function(acceptedType) {
              if (/\..+$/.test(acceptedType)) {
                return extension === acceptedType;
              }
              if (/\/\*$/.test(acceptedType)) {
                return baseType === acceptedType.replace(/\/\*$/, "");
              }
              if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
                return type === acceptedType;
              }
              return false;
            });
          });
          return filesKeys.map(function(key) {
            return files[key];
          });
        }
        function getFilesFromClipboardData(clipboardData) {
          var files = [];
          Object.keys(clipboardData.items).forEach(function(key) {
            var item = clipboardData.items[key];
            if (item.kind === "file") {
              var file = item.getAsFile();
              if (file)
                files.push(file);
            }
          });
          return files;
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return lang_Lang;
        });
        var util = __webpack_require__(2);
        var deep_assign_hasOwnProperty = Object.prototype.hasOwnProperty;
        function assignKey(to, from, key) {
          var val = from[key];
          if (val === void 0 || val === null) {
            return;
          }
          if (!deep_assign_hasOwnProperty.call(to, key) || !Object(util["e"])(val)) {
            to[key] = val;
          } else {
            to[key] = deepAssign(Object(to[key]), from[key]);
          }
        }
        function deepAssign(to, from) {
          Object.keys(from).forEach(function(key) {
            assignKey(to, from, key);
          });
          return to;
        }
        var lang_Lang = /* @__PURE__ */ function() {
          function Lang(options) {
            if (options === void 0) {
              options = {};
            }
            this.config = {
              lang: "zh-CN",
              langConfig: {
                "zh-CN": {}
              }
            };
            this.options = options;
          }
          var _proto = Lang.prototype;
          _proto.use = function use(lang, config) {
            var _this$add;
            this.config.lang = lang;
            this.add((_this$add = {}, _this$add[lang] = config, _this$add));
            if (this.options.afterUse)
              this.options.afterUse(lang, config);
          };
          _proto.add = function add(config) {
            if (config === void 0) {
              config = {};
            }
            deepAssign(this.config.langConfig, config);
          };
          return Lang;
        }();
      },
      function(module2, exports2, __webpack_require__) {
        var DEFAULT = __webpack_require__(20);
        var FilterCSS = __webpack_require__(24);
        function filterCSS(html, options) {
          var xss = new FilterCSS(options);
          return xss.process(html);
        }
        exports2 = module2.exports = filterCSS;
        exports2.FilterCSS = FilterCSS;
        for (var i in DEFAULT)
          exports2[i] = DEFAULT[i];
        if (typeof window !== "undefined") {
          window.filterCSS = module2.exports;
        }
      },
      function(module2, exports2) {
        module2.exports = {
          indexOf: function(arr, item) {
            var i, j;
            if (Array.prototype.indexOf) {
              return arr.indexOf(item);
            }
            for (i = 0, j = arr.length; i < j; i++) {
              if (arr[i] === item) {
                return i;
              }
            }
            return -1;
          },
          forEach: function(arr, fn, scope) {
            var i, j;
            if (Array.prototype.forEach) {
              return arr.forEach(fn, scope);
            }
            for (i = 0, j = arr.length; i < j; i++) {
              fn.call(scope, arr[i], i, arr);
            }
          },
          trim: function(str) {
            if (String.prototype.trim) {
              return str.trim();
            }
            return str.replace(/(^\s*)|(\s*$)/g, "");
          },
          spaceIndex: function(str) {
            var reg = /\s|\n|\t/;
            var match = reg.exec(str);
            return match ? match.index : -1;
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var _utils_scroll_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
        var _utils_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
        var _utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
        __webpack_exports__["a"] = {
          props: {
            tabSize: {
              type: Number,
              default: 2
            },
            scrollContainer: {
              type: Function,
              default: function _default() {
                return window;
              }
            },
            top: {
              type: Number,
              default: 0
            }
          },
          emits: ["image-click"],
          methods: {
            handlePreviewClick: function handlePreviewClick(e) {
              var target = e.target;
              if (target.tagName === "IMG") {
                var src = target.getAttribute("src");
                if (!src)
                  return;
                var imageEls = Array.from(this.$el.querySelectorAll("img"));
                var images = imageEls.map(function(el) {
                  return el.getAttribute("src");
                }).filter(function(src2) {
                  return src2;
                });
                var imagePreviewInitIndex = imageEls.indexOf(target);
                this.$emit("image-click", images, imagePreviewInitIndex);
                return;
              }
              var scrollToTargetId = target.getAttribute(_utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__["a"]);
              var scrollToTarget = this.$el.querySelector("[" + _utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__["b"] + '="' + scrollToTargetId + '"]');
              if (scrollToTarget) {
                this.scrollToTarget({
                  target: scrollToTarget
                });
              }
            },
            getOffsetTop: function getOffsetTop(target, container) {
              var rect = target.getBoundingClientRect();
              if (container === window || container === document.documentElement) {
                return rect.top;
              }
              return rect.top - container.getBoundingClientRect().top;
            },
            scrollToTarget: function scrollToTarget(_ref) {
              var target = _ref.target, _ref$scrollContainer = _ref.scrollContainer, scrollContainer = _ref$scrollContainer === void 0 ? this.scrollContainer() : _ref$scrollContainer, _ref$top = _ref.top, top = _ref$top === void 0 ? this.top : _ref$top, onScrollEnd = _ref.onScrollEnd;
              var offsetTop = this.getOffsetTop(target, scrollContainer);
              var scrollTop = Object(_utils_scroll_top__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollContainer) + offsetTop - top;
              Object(_utils_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__["a"])({
                scrollTarget: scrollContainer,
                scrollToTop: scrollTop,
                onScrollEnd
              });
            },
            scrollToLine: function scrollToLine(_ref2) {
              var lineIndex = _ref2.lineIndex, onScrollEnd = _ref2.onScrollEnd;
              if (lineIndex) {
                var target = this.$el.querySelector("[" + _utils_constants_markup__WEBPACK_IMPORTED_MODULE_2__["c"] + '="' + lineIndex + '"]');
                if (target)
                  this.scrollToTarget({
                    target,
                    onScrollEnd
                  });
              }
            }
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return _asyncToGenerator;
        });
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function() {
            var self2 = this, args = arguments;
            return new Promise(function(resolve, reject) {
              var gen = fn.apply(self2, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(void 0);
            });
          };
        }
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
        var FilterCSS = __webpack_require__(14).FilterCSS;
        var getDefaultCSSWhiteList = __webpack_require__(14).getDefaultWhiteList;
        var _ = __webpack_require__(15);
        function getDefaultWhiteList() {
          return {
            a: ["target", "href", "title"],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
            aside: [],
            audio: [
              "autoplay",
              "controls",
              "crossorigin",
              "loop",
              "muted",
              "preload",
              "src"
            ],
            b: [],
            bdi: ["dir"],
            bdo: ["dir"],
            big: [],
            blockquote: ["cite"],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ["align", "valign", "span", "width"],
            colgroup: ["align", "valign", "span", "width"],
            dd: [],
            del: ["datetime"],
            details: ["open"],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ["color", "size", "face"],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            ins: ["datetime"],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ["width", "border", "align", "valign"],
            tbody: ["align", "valign"],
            td: ["width", "rowspan", "colspan", "align", "valign"],
            tfoot: ["align", "valign"],
            th: ["width", "rowspan", "colspan", "align", "valign"],
            thead: ["align", "valign"],
            tr: ["rowspan", "align", "valign"],
            tt: [],
            u: [],
            ul: [],
            video: [
              "autoplay",
              "controls",
              "crossorigin",
              "loop",
              "muted",
              "playsinline",
              "poster",
              "preload",
              "src",
              "height",
              "width"
            ]
          };
        }
        var defaultCSSFilter = new FilterCSS();
        function onTag(tag, html, options) {
        }
        function onIgnoreTag(tag, html, options) {
        }
        function onTagAttr(tag, name, value) {
        }
        function onIgnoreTagAttr(tag, name, value) {
        }
        function escapeHtml(html) {
          return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
        }
        function safeAttrValue(tag, name, value, cssFilter) {
          value = friendlyAttrValue(value);
          if (name === "href" || name === "src") {
            value = _.trim(value);
            if (value === "#")
              return "#";
            if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value.substr(0, 11) === "data:image/" || value.substr(0, 6) === "ftp://" || value.substr(0, 2) === "./" || value.substr(0, 3) === "../" || value[0] === "#" || value[0] === "/")) {
              return "";
            }
          } else if (name === "background") {
            REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
            if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
              return "";
            }
          } else if (name === "style") {
            REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
            if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
              return "";
            }
            REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
            if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
              REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
              if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
                return "";
              }
            }
            if (cssFilter !== false) {
              cssFilter = cssFilter || defaultCSSFilter;
              value = cssFilter.process(value);
            }
          }
          value = escapeAttrValue(value);
          return value;
        }
        var REGEXP_LT = /</g;
        var REGEXP_GT = />/g;
        var REGEXP_QUOTE = /"/g;
        var REGEXP_QUOTE_2 = /&quot;/g;
        var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
        var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
        var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
        var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
        var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
        var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
        function escapeQuote(str) {
          return str.replace(REGEXP_QUOTE, "&quot;");
        }
        function unescapeQuote(str) {
          return str.replace(REGEXP_QUOTE_2, '"');
        }
        function escapeHtmlEntities(str) {
          return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str2, code) {
            return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
          });
        }
        function escapeDangerHtml5Entities(str) {
          return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
        }
        function clearNonPrintableCharacter(str) {
          var str2 = "";
          for (var i = 0, len = str.length; i < len; i++) {
            str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
          }
          return _.trim(str2);
        }
        function friendlyAttrValue(str) {
          str = unescapeQuote(str);
          str = escapeHtmlEntities(str);
          str = escapeDangerHtml5Entities(str);
          str = clearNonPrintableCharacter(str);
          return str;
        }
        function escapeAttrValue(str) {
          str = escapeQuote(str);
          str = escapeHtml(str);
          return str;
        }
        function onIgnoreTagStripAll() {
          return "";
        }
        function StripTagBody(tags, next) {
          if (typeof next !== "function") {
            next = function() {
            };
          }
          var isRemoveAllTag = !Array.isArray(tags);
          function isRemoveTag(tag) {
            if (isRemoveAllTag)
              return true;
            return _.indexOf(tags, tag) !== -1;
          }
          var removeList = [];
          var posStart = false;
          return {
            onIgnoreTag: function(tag, html, options) {
              if (isRemoveTag(tag)) {
                if (options.isClosing) {
                  var ret = "[/removed]";
                  var end = options.position + ret.length;
                  removeList.push([
                    posStart !== false ? posStart : options.position,
                    end
                  ]);
                  posStart = false;
                  return ret;
                } else {
                  if (!posStart) {
                    posStart = options.position;
                  }
                  return "[removed]";
                }
              } else {
                return next(tag, html, options);
              }
            },
            remove: function(html) {
              var rethtml = "";
              var lastPos = 0;
              _.forEach(removeList, function(pos) {
                rethtml += html.slice(lastPos, pos[0]);
                lastPos = pos[1];
              });
              rethtml += html.slice(lastPos);
              return rethtml;
            }
          };
        }
        function stripCommentTag(html) {
          return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
        }
        var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;
        function stripBlankChar(html) {
          var chars = html.split("");
          chars = chars.filter(function(char) {
            var c = char.charCodeAt(0);
            if (c === 127)
              return false;
            if (c <= 31) {
              if (c === 10 || c === 13)
                return true;
              return false;
            }
            return true;
          });
          return chars.join("");
        }
        exports2.whiteList = getDefaultWhiteList();
        exports2.getDefaultWhiteList = getDefaultWhiteList;
        exports2.onTag = onTag;
        exports2.onIgnoreTag = onIgnoreTag;
        exports2.onTagAttr = onTagAttr;
        exports2.onIgnoreTagAttr = onIgnoreTagAttr;
        exports2.safeAttrValue = safeAttrValue;
        exports2.escapeHtml = escapeHtml;
        exports2.escapeQuote = escapeQuote;
        exports2.unescapeQuote = unescapeQuote;
        exports2.escapeHtmlEntities = escapeHtmlEntities;
        exports2.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
        exports2.clearNonPrintableCharacter = clearNonPrintableCharacter;
        exports2.friendlyAttrValue = friendlyAttrValue;
        exports2.escapeAttrValue = escapeAttrValue;
        exports2.onIgnoreTagStripAll = onIgnoreTagStripAll;
        exports2.StripTagBody = StripTagBody;
        exports2.stripCommentTag = stripCommentTag;
        exports2.stripBlankChar = stripBlankChar;
        exports2.cssFilter = defaultCSSFilter;
        exports2.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
      },
      function(module2, exports2) {
        function getDefaultWhiteList() {
          var whiteList = {};
          whiteList["align-content"] = false;
          whiteList["align-items"] = false;
          whiteList["align-self"] = false;
          whiteList["alignment-adjust"] = false;
          whiteList["alignment-baseline"] = false;
          whiteList["all"] = false;
          whiteList["anchor-point"] = false;
          whiteList["animation"] = false;
          whiteList["animation-delay"] = false;
          whiteList["animation-direction"] = false;
          whiteList["animation-duration"] = false;
          whiteList["animation-fill-mode"] = false;
          whiteList["animation-iteration-count"] = false;
          whiteList["animation-name"] = false;
          whiteList["animation-play-state"] = false;
          whiteList["animation-timing-function"] = false;
          whiteList["azimuth"] = false;
          whiteList["backface-visibility"] = false;
          whiteList["background"] = true;
          whiteList["background-attachment"] = true;
          whiteList["background-clip"] = true;
          whiteList["background-color"] = true;
          whiteList["background-image"] = true;
          whiteList["background-origin"] = true;
          whiteList["background-position"] = true;
          whiteList["background-repeat"] = true;
          whiteList["background-size"] = true;
          whiteList["baseline-shift"] = false;
          whiteList["binding"] = false;
          whiteList["bleed"] = false;
          whiteList["bookmark-label"] = false;
          whiteList["bookmark-level"] = false;
          whiteList["bookmark-state"] = false;
          whiteList["border"] = true;
          whiteList["border-bottom"] = true;
          whiteList["border-bottom-color"] = true;
          whiteList["border-bottom-left-radius"] = true;
          whiteList["border-bottom-right-radius"] = true;
          whiteList["border-bottom-style"] = true;
          whiteList["border-bottom-width"] = true;
          whiteList["border-collapse"] = true;
          whiteList["border-color"] = true;
          whiteList["border-image"] = true;
          whiteList["border-image-outset"] = true;
          whiteList["border-image-repeat"] = true;
          whiteList["border-image-slice"] = true;
          whiteList["border-image-source"] = true;
          whiteList["border-image-width"] = true;
          whiteList["border-left"] = true;
          whiteList["border-left-color"] = true;
          whiteList["border-left-style"] = true;
          whiteList["border-left-width"] = true;
          whiteList["border-radius"] = true;
          whiteList["border-right"] = true;
          whiteList["border-right-color"] = true;
          whiteList["border-right-style"] = true;
          whiteList["border-right-width"] = true;
          whiteList["border-spacing"] = true;
          whiteList["border-style"] = true;
          whiteList["border-top"] = true;
          whiteList["border-top-color"] = true;
          whiteList["border-top-left-radius"] = true;
          whiteList["border-top-right-radius"] = true;
          whiteList["border-top-style"] = true;
          whiteList["border-top-width"] = true;
          whiteList["border-width"] = true;
          whiteList["bottom"] = false;
          whiteList["box-decoration-break"] = true;
          whiteList["box-shadow"] = true;
          whiteList["box-sizing"] = true;
          whiteList["box-snap"] = true;
          whiteList["box-suppress"] = true;
          whiteList["break-after"] = true;
          whiteList["break-before"] = true;
          whiteList["break-inside"] = true;
          whiteList["caption-side"] = false;
          whiteList["chains"] = false;
          whiteList["clear"] = true;
          whiteList["clip"] = false;
          whiteList["clip-path"] = false;
          whiteList["clip-rule"] = false;
          whiteList["color"] = true;
          whiteList["color-interpolation-filters"] = true;
          whiteList["column-count"] = false;
          whiteList["column-fill"] = false;
          whiteList["column-gap"] = false;
          whiteList["column-rule"] = false;
          whiteList["column-rule-color"] = false;
          whiteList["column-rule-style"] = false;
          whiteList["column-rule-width"] = false;
          whiteList["column-span"] = false;
          whiteList["column-width"] = false;
          whiteList["columns"] = false;
          whiteList["contain"] = false;
          whiteList["content"] = false;
          whiteList["counter-increment"] = false;
          whiteList["counter-reset"] = false;
          whiteList["counter-set"] = false;
          whiteList["crop"] = false;
          whiteList["cue"] = false;
          whiteList["cue-after"] = false;
          whiteList["cue-before"] = false;
          whiteList["cursor"] = false;
          whiteList["direction"] = false;
          whiteList["display"] = true;
          whiteList["display-inside"] = true;
          whiteList["display-list"] = true;
          whiteList["display-outside"] = true;
          whiteList["dominant-baseline"] = false;
          whiteList["elevation"] = false;
          whiteList["empty-cells"] = false;
          whiteList["filter"] = false;
          whiteList["flex"] = false;
          whiteList["flex-basis"] = false;
          whiteList["flex-direction"] = false;
          whiteList["flex-flow"] = false;
          whiteList["flex-grow"] = false;
          whiteList["flex-shrink"] = false;
          whiteList["flex-wrap"] = false;
          whiteList["float"] = false;
          whiteList["float-offset"] = false;
          whiteList["flood-color"] = false;
          whiteList["flood-opacity"] = false;
          whiteList["flow-from"] = false;
          whiteList["flow-into"] = false;
          whiteList["font"] = true;
          whiteList["font-family"] = true;
          whiteList["font-feature-settings"] = true;
          whiteList["font-kerning"] = true;
          whiteList["font-language-override"] = true;
          whiteList["font-size"] = true;
          whiteList["font-size-adjust"] = true;
          whiteList["font-stretch"] = true;
          whiteList["font-style"] = true;
          whiteList["font-synthesis"] = true;
          whiteList["font-variant"] = true;
          whiteList["font-variant-alternates"] = true;
          whiteList["font-variant-caps"] = true;
          whiteList["font-variant-east-asian"] = true;
          whiteList["font-variant-ligatures"] = true;
          whiteList["font-variant-numeric"] = true;
          whiteList["font-variant-position"] = true;
          whiteList["font-weight"] = true;
          whiteList["grid"] = false;
          whiteList["grid-area"] = false;
          whiteList["grid-auto-columns"] = false;
          whiteList["grid-auto-flow"] = false;
          whiteList["grid-auto-rows"] = false;
          whiteList["grid-column"] = false;
          whiteList["grid-column-end"] = false;
          whiteList["grid-column-start"] = false;
          whiteList["grid-row"] = false;
          whiteList["grid-row-end"] = false;
          whiteList["grid-row-start"] = false;
          whiteList["grid-template"] = false;
          whiteList["grid-template-areas"] = false;
          whiteList["grid-template-columns"] = false;
          whiteList["grid-template-rows"] = false;
          whiteList["hanging-punctuation"] = false;
          whiteList["height"] = true;
          whiteList["hyphens"] = false;
          whiteList["icon"] = false;
          whiteList["image-orientation"] = false;
          whiteList["image-resolution"] = false;
          whiteList["ime-mode"] = false;
          whiteList["initial-letters"] = false;
          whiteList["inline-box-align"] = false;
          whiteList["justify-content"] = false;
          whiteList["justify-items"] = false;
          whiteList["justify-self"] = false;
          whiteList["left"] = false;
          whiteList["letter-spacing"] = true;
          whiteList["lighting-color"] = true;
          whiteList["line-box-contain"] = false;
          whiteList["line-break"] = false;
          whiteList["line-grid"] = false;
          whiteList["line-height"] = false;
          whiteList["line-snap"] = false;
          whiteList["line-stacking"] = false;
          whiteList["line-stacking-ruby"] = false;
          whiteList["line-stacking-shift"] = false;
          whiteList["line-stacking-strategy"] = false;
          whiteList["list-style"] = true;
          whiteList["list-style-image"] = true;
          whiteList["list-style-position"] = true;
          whiteList["list-style-type"] = true;
          whiteList["margin"] = true;
          whiteList["margin-bottom"] = true;
          whiteList["margin-left"] = true;
          whiteList["margin-right"] = true;
          whiteList["margin-top"] = true;
          whiteList["marker-offset"] = false;
          whiteList["marker-side"] = false;
          whiteList["marks"] = false;
          whiteList["mask"] = false;
          whiteList["mask-box"] = false;
          whiteList["mask-box-outset"] = false;
          whiteList["mask-box-repeat"] = false;
          whiteList["mask-box-slice"] = false;
          whiteList["mask-box-source"] = false;
          whiteList["mask-box-width"] = false;
          whiteList["mask-clip"] = false;
          whiteList["mask-image"] = false;
          whiteList["mask-origin"] = false;
          whiteList["mask-position"] = false;
          whiteList["mask-repeat"] = false;
          whiteList["mask-size"] = false;
          whiteList["mask-source-type"] = false;
          whiteList["mask-type"] = false;
          whiteList["max-height"] = true;
          whiteList["max-lines"] = false;
          whiteList["max-width"] = true;
          whiteList["min-height"] = true;
          whiteList["min-width"] = true;
          whiteList["move-to"] = false;
          whiteList["nav-down"] = false;
          whiteList["nav-index"] = false;
          whiteList["nav-left"] = false;
          whiteList["nav-right"] = false;
          whiteList["nav-up"] = false;
          whiteList["object-fit"] = false;
          whiteList["object-position"] = false;
          whiteList["opacity"] = false;
          whiteList["order"] = false;
          whiteList["orphans"] = false;
          whiteList["outline"] = false;
          whiteList["outline-color"] = false;
          whiteList["outline-offset"] = false;
          whiteList["outline-style"] = false;
          whiteList["outline-width"] = false;
          whiteList["overflow"] = false;
          whiteList["overflow-wrap"] = false;
          whiteList["overflow-x"] = false;
          whiteList["overflow-y"] = false;
          whiteList["padding"] = true;
          whiteList["padding-bottom"] = true;
          whiteList["padding-left"] = true;
          whiteList["padding-right"] = true;
          whiteList["padding-top"] = true;
          whiteList["page"] = false;
          whiteList["page-break-after"] = false;
          whiteList["page-break-before"] = false;
          whiteList["page-break-inside"] = false;
          whiteList["page-policy"] = false;
          whiteList["pause"] = false;
          whiteList["pause-after"] = false;
          whiteList["pause-before"] = false;
          whiteList["perspective"] = false;
          whiteList["perspective-origin"] = false;
          whiteList["pitch"] = false;
          whiteList["pitch-range"] = false;
          whiteList["play-during"] = false;
          whiteList["position"] = false;
          whiteList["presentation-level"] = false;
          whiteList["quotes"] = false;
          whiteList["region-fragment"] = false;
          whiteList["resize"] = false;
          whiteList["rest"] = false;
          whiteList["rest-after"] = false;
          whiteList["rest-before"] = false;
          whiteList["richness"] = false;
          whiteList["right"] = false;
          whiteList["rotation"] = false;
          whiteList["rotation-point"] = false;
          whiteList["ruby-align"] = false;
          whiteList["ruby-merge"] = false;
          whiteList["ruby-position"] = false;
          whiteList["shape-image-threshold"] = false;
          whiteList["shape-outside"] = false;
          whiteList["shape-margin"] = false;
          whiteList["size"] = false;
          whiteList["speak"] = false;
          whiteList["speak-as"] = false;
          whiteList["speak-header"] = false;
          whiteList["speak-numeral"] = false;
          whiteList["speak-punctuation"] = false;
          whiteList["speech-rate"] = false;
          whiteList["stress"] = false;
          whiteList["string-set"] = false;
          whiteList["tab-size"] = false;
          whiteList["table-layout"] = false;
          whiteList["text-align"] = true;
          whiteList["text-align-last"] = true;
          whiteList["text-combine-upright"] = true;
          whiteList["text-decoration"] = true;
          whiteList["text-decoration-color"] = true;
          whiteList["text-decoration-line"] = true;
          whiteList["text-decoration-skip"] = true;
          whiteList["text-decoration-style"] = true;
          whiteList["text-emphasis"] = true;
          whiteList["text-emphasis-color"] = true;
          whiteList["text-emphasis-position"] = true;
          whiteList["text-emphasis-style"] = true;
          whiteList["text-height"] = true;
          whiteList["text-indent"] = true;
          whiteList["text-justify"] = true;
          whiteList["text-orientation"] = true;
          whiteList["text-overflow"] = true;
          whiteList["text-shadow"] = true;
          whiteList["text-space-collapse"] = true;
          whiteList["text-transform"] = true;
          whiteList["text-underline-position"] = true;
          whiteList["text-wrap"] = true;
          whiteList["top"] = false;
          whiteList["transform"] = false;
          whiteList["transform-origin"] = false;
          whiteList["transform-style"] = false;
          whiteList["transition"] = false;
          whiteList["transition-delay"] = false;
          whiteList["transition-duration"] = false;
          whiteList["transition-property"] = false;
          whiteList["transition-timing-function"] = false;
          whiteList["unicode-bidi"] = false;
          whiteList["vertical-align"] = false;
          whiteList["visibility"] = false;
          whiteList["voice-balance"] = false;
          whiteList["voice-duration"] = false;
          whiteList["voice-family"] = false;
          whiteList["voice-pitch"] = false;
          whiteList["voice-range"] = false;
          whiteList["voice-rate"] = false;
          whiteList["voice-stress"] = false;
          whiteList["voice-volume"] = false;
          whiteList["volume"] = false;
          whiteList["white-space"] = false;
          whiteList["widows"] = false;
          whiteList["width"] = true;
          whiteList["will-change"] = false;
          whiteList["word-break"] = true;
          whiteList["word-spacing"] = true;
          whiteList["word-wrap"] = true;
          whiteList["wrap-flow"] = false;
          whiteList["wrap-through"] = false;
          whiteList["writing-mode"] = false;
          whiteList["z-index"] = false;
          return whiteList;
        }
        function onAttr(name, value, options) {
        }
        function onIgnoreAttr(name, value, options) {
        }
        var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
        function safeAttrValue(name, value) {
          if (REGEXP_URL_JAVASCRIPT.test(value))
            return "";
          return value;
        }
        exports2.whiteList = getDefaultWhiteList();
        exports2.getDefaultWhiteList = getDefaultWhiteList;
        exports2.onAttr = onAttr;
        exports2.onIgnoreAttr = onIgnoreAttr;
        exports2.safeAttrValue = safeAttrValue;
      },
      function(module2, exports2) {
        module2.exports = {
          indexOf: function(arr, item) {
            var i, j;
            if (Array.prototype.indexOf) {
              return arr.indexOf(item);
            }
            for (i = 0, j = arr.length; i < j; i++) {
              if (arr[i] === item) {
                return i;
              }
            }
            return -1;
          },
          forEach: function(arr, fn, scope) {
            var i, j;
            if (Array.prototype.forEach) {
              return arr.forEach(fn, scope);
            }
            for (i = 0, j = arr.length; i < j; i++) {
              fn.call(scope, arr[i], i, arr);
            }
          },
          trim: function(str) {
            if (String.prototype.trim) {
              return str.trim();
            }
            return str.replace(/(^\s*)|(\s*$)/g, "");
          },
          trimRight: function(str) {
            if (String.prototype.trimRight) {
              return str.trimRight();
            }
            return str.replace(/(\s*$)/g, "");
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(15);
        function getTagName(html) {
          var i = _.spaceIndex(html);
          if (i === -1) {
            var tagName = html.slice(1, -1);
          } else {
            var tagName = html.slice(1, i + 1);
          }
          tagName = _.trim(tagName).toLowerCase();
          if (tagName.slice(0, 1) === "/")
            tagName = tagName.slice(1);
          if (tagName.slice(-1) === "/")
            tagName = tagName.slice(0, -1);
          return tagName;
        }
        function isClosing(html) {
          return html.slice(0, 2) === "</";
        }
        function parseTag(html, onTag, escapeHtml) {
          var rethtml = "";
          var lastPos = 0;
          var tagStart = false;
          var quoteStart = false;
          var currentPos = 0;
          var len = html.length;
          var currentTagName = "";
          var currentHtml = "";
          chariterator:
            for (currentPos = 0; currentPos < len; currentPos++) {
              var c = html.charAt(currentPos);
              if (tagStart === false) {
                if (c === "<") {
                  tagStart = currentPos;
                  continue;
                }
              } else {
                if (quoteStart === false) {
                  if (c === "<") {
                    rethtml += escapeHtml(html.slice(lastPos, currentPos));
                    tagStart = currentPos;
                    lastPos = currentPos;
                    continue;
                  }
                  if (c === ">") {
                    rethtml += escapeHtml(html.slice(lastPos, tagStart));
                    currentHtml = html.slice(tagStart, currentPos + 1);
                    currentTagName = getTagName(currentHtml);
                    rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
                    lastPos = currentPos + 1;
                    tagStart = false;
                    continue;
                  }
                  if (c === '"' || c === "'") {
                    var i = 1;
                    var ic = html.charAt(currentPos - i);
                    while (ic.trim() === "" || ic === "=") {
                      if (ic === "=") {
                        quoteStart = c;
                        continue chariterator;
                      }
                      ic = html.charAt(currentPos - ++i);
                    }
                  }
                } else {
                  if (c === quoteStart) {
                    quoteStart = false;
                    continue;
                  }
                }
              }
            }
          if (lastPos < html.length) {
            rethtml += escapeHtml(html.substr(lastPos));
          }
          return rethtml;
        }
        var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;
        function parseAttr(html, onAttr) {
          var lastPos = 0;
          var retAttrs = [];
          var tmpName = false;
          var len = html.length;
          function addAttr(name, value) {
            name = _.trim(name);
            name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
            if (name.length < 1)
              return;
            var ret = onAttr(name, value || "");
            if (ret)
              retAttrs.push(ret);
          }
          for (var i = 0; i < len; i++) {
            var c = html.charAt(i);
            var v, j;
            if (tmpName === false && c === "=") {
              tmpName = html.slice(lastPos, i);
              lastPos = i + 1;
              continue;
            }
            if (tmpName !== false) {
              if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
                j = html.indexOf(c, i + 1);
                if (j === -1) {
                  break;
                } else {
                  v = _.trim(html.slice(lastPos + 1, j));
                  addAttr(tmpName, v);
                  tmpName = false;
                  i = j;
                  lastPos = i + 1;
                  continue;
                }
              }
            }
            if (/\s|\n|\t/.test(c)) {
              html = html.replace(/\s|\n|\t/g, " ");
              if (tmpName === false) {
                j = findNextEqual(html, i);
                if (j === -1) {
                  v = _.trim(html.slice(lastPos, i));
                  addAttr(v);
                  tmpName = false;
                  lastPos = i + 1;
                  continue;
                } else {
                  i = j - 1;
                  continue;
                }
              } else {
                j = findBeforeEqual(html, i - 1);
                if (j === -1) {
                  v = _.trim(html.slice(lastPos, i));
                  v = stripQuoteWrap(v);
                  addAttr(tmpName, v);
                  tmpName = false;
                  lastPos = i + 1;
                  continue;
                } else {
                  continue;
                }
              }
            }
          }
          if (lastPos < html.length) {
            if (tmpName === false) {
              addAttr(html.slice(lastPos));
            } else {
              addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
            }
          }
          return _.trim(retAttrs.join(" "));
        }
        function findNextEqual(str, i) {
          for (; i < str.length; i++) {
            var c = str[i];
            if (c === " ")
              continue;
            if (c === "=")
              return i;
            return -1;
          }
        }
        function findBeforeEqual(str, i) {
          for (; i > 0; i--) {
            var c = str[i];
            if (c === " ")
              continue;
            if (c === "=")
              return i;
            return -1;
          }
        }
        function isQuoteWrapString(text) {
          if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
            return true;
          } else {
            return false;
          }
        }
        function stripQuoteWrap(text) {
          if (isQuoteWrapString(text)) {
            return text.substr(1, text.length - 2);
          } else {
            return text;
          }
        }
        exports2.parseTag = parseTag;
        exports2.parseAttr = parseAttr;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
        var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
        var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
        var _utils_file__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_2__["l"],
          icon: "v-md-icon-img",
          title: function title(editor) {
            return editor.langConfig.image.toolbar;
          },
          menus: [{
            name: "image-link",
            text: function text(editor) {
              return editor.langConfig.imageLink.toolbar;
            },
            action: function action(editor, config) {
              if (config == null ? void 0 : config.insertWithSize) {
                editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_2__["l"], {
                  width: "auto",
                  height: "auto"
                });
              } else {
                editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_2__["l"]);
              }
            }
          }, {
            name: "upload-image",
            text: function text(editor) {
              return editor.langConfig.uploadImage.toolbar;
            },
            action: function action(editor) {
              editor.uploadConfig = editor.uploadImgConfig;
              editor.$nextTick(/* @__PURE__ */ Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["a"])(/* @__PURE__ */ _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var event, files;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return editor.$refs.uploadFile.upload();
                      case 2:
                        event = _context.sent;
                        files = Object(_utils_file__WEBPACK_IMPORTED_MODULE_3__["a"])(event.target.files, editor.uploadImgConfig);
                        editor.emitUploadImage(event, files);
                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));
            }
          }]
        };
      },
      function(module2, exports2, __webpack_require__) {
        var DEFAULT = __webpack_require__(20);
        var parseStyle = __webpack_require__(25);
        __webpack_require__(21);
        function isNull(obj) {
          return obj === void 0 || obj === null;
        }
        function shallowCopyObject(obj) {
          var ret = {};
          for (var i in obj) {
            ret[i] = obj[i];
          }
          return ret;
        }
        function FilterCSS(options) {
          options = shallowCopyObject(options || {});
          options.whiteList = options.whiteList || DEFAULT.whiteList;
          options.onAttr = options.onAttr || DEFAULT.onAttr;
          options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
          options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
          this.options = options;
        }
        FilterCSS.prototype.process = function(css) {
          css = css || "";
          css = css.toString();
          if (!css)
            return "";
          var me = this;
          var options = me.options;
          var whiteList = options.whiteList;
          var onAttr = options.onAttr;
          var onIgnoreAttr = options.onIgnoreAttr;
          var safeAttrValue = options.safeAttrValue;
          var retCSS = parseStyle(css, function(sourcePosition, position, name, value, source) {
            var check = whiteList[name];
            var isWhite = false;
            if (check === true)
              isWhite = check;
            else if (typeof check === "function")
              isWhite = check(value);
            else if (check instanceof RegExp)
              isWhite = check.test(value);
            if (isWhite !== true)
              isWhite = false;
            value = safeAttrValue(name, value);
            if (!value)
              return;
            var opts = {
              position,
              sourcePosition,
              source,
              isWhite
            };
            if (isWhite) {
              var ret = onAttr(name, value, opts);
              if (isNull(ret)) {
                return name + ":" + value;
              } else {
                return ret;
              }
            } else {
              var ret = onIgnoreAttr(name, value, opts);
              if (!isNull(ret)) {
                return ret;
              }
            }
          });
          return retCSS;
        };
        module2.exports = FilterCSS;
      },
      function(module2, exports2, __webpack_require__) {
        var _ = __webpack_require__(21);
        function parseStyle(css, onAttr) {
          css = _.trimRight(css);
          if (css[css.length - 1] !== ";")
            css += ";";
          var cssLength = css.length;
          var isParenthesisOpen = false;
          var lastPos = 0;
          var i = 0;
          var retCSS = "";
          function addNewAttr() {
            if (!isParenthesisOpen) {
              var source = _.trim(css.slice(lastPos, i));
              var j2 = source.indexOf(":");
              if (j2 !== -1) {
                var name = _.trim(source.slice(0, j2));
                var value = _.trim(source.slice(j2 + 1));
                if (name) {
                  var ret = onAttr(lastPos, retCSS.length, name, value, source);
                  if (ret)
                    retCSS += ret + "; ";
                }
              }
            }
            lastPos = i + 1;
          }
          for (; i < cssLength; i++) {
            var c = css[i];
            if (c === "/" && css[i + 1] === "*") {
              var j = css.indexOf("*/", i + 2);
              if (j === -1)
                break;
              i = j + 1;
              lastPos = i + 1;
              isParenthesisOpen = false;
            } else if (c === "(") {
              isParenthesisOpen = true;
            } else if (c === ")") {
              isParenthesisOpen = false;
            } else if (c === ";") {
              if (isParenthesisOpen)
                ;
              else {
                addNewAttr();
              }
            } else if (c === "\n") {
              addNewAttr();
            }
          }
          return _.trim(retCSS);
        }
        module2.exports = parseStyle;
      },
      function(module2, exports2, __webpack_require__) {
        var FilterCSS = __webpack_require__(14).FilterCSS;
        var DEFAULT = __webpack_require__(19);
        var parser = __webpack_require__(22);
        var parseTag = parser.parseTag;
        var parseAttr = parser.parseAttr;
        var _ = __webpack_require__(15);
        function isNull(obj) {
          return obj === void 0 || obj === null;
        }
        function getAttrs(html) {
          var i = _.spaceIndex(html);
          if (i === -1) {
            return {
              html: "",
              closing: html[html.length - 2] === "/"
            };
          }
          html = _.trim(html.slice(i + 1, -1));
          var isClosing = html[html.length - 1] === "/";
          if (isClosing)
            html = _.trim(html.slice(0, -1));
          return {
            html,
            closing: isClosing
          };
        }
        function shallowCopyObject(obj) {
          var ret = {};
          for (var i in obj) {
            ret[i] = obj[i];
          }
          return ret;
        }
        function FilterXSS(options) {
          options = shallowCopyObject(options || {});
          if (options.stripIgnoreTag) {
            if (options.onIgnoreTag) {
              console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
            }
            options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
          }
          options.whiteList = options.whiteList || DEFAULT.whiteList;
          options.onTag = options.onTag || DEFAULT.onTag;
          options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
          options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
          options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
          options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
          options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
          this.options = options;
          if (options.css === false) {
            this.cssFilter = false;
          } else {
            options.css = options.css || {};
            this.cssFilter = new FilterCSS(options.css);
          }
        }
        FilterXSS.prototype.process = function(html) {
          html = html || "";
          html = html.toString();
          if (!html)
            return "";
          var me = this;
          var options = me.options;
          var whiteList = options.whiteList;
          var onTag = options.onTag;
          var onIgnoreTag = options.onIgnoreTag;
          var onTagAttr = options.onTagAttr;
          var onIgnoreTagAttr = options.onIgnoreTagAttr;
          var safeAttrValue = options.safeAttrValue;
          var escapeHtml = options.escapeHtml;
          var cssFilter = me.cssFilter;
          if (options.stripBlankChar) {
            html = DEFAULT.stripBlankChar(html);
          }
          if (!options.allowCommentTag) {
            html = DEFAULT.stripCommentTag(html);
          }
          var stripIgnoreTagBody = false;
          if (options.stripIgnoreTagBody) {
            var stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
            onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
          }
          var retHtml = parseTag(html, function(sourcePosition, position, tag, html2, isClosing) {
            var info = {
              sourcePosition,
              position,
              isClosing,
              isWhite: whiteList.hasOwnProperty(tag)
            };
            var ret = onTag(tag, html2, info);
            if (!isNull(ret))
              return ret;
            if (info.isWhite) {
              if (info.isClosing) {
                return "</" + tag + ">";
              }
              var attrs = getAttrs(html2);
              var whiteAttrList = whiteList[tag];
              var attrsHtml = parseAttr(attrs.html, function(name, value) {
                var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
                var ret2 = onTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret2))
                  return ret2;
                if (isWhiteAttr) {
                  value = safeAttrValue(tag, name, value, cssFilter);
                  if (value) {
                    return name + '="' + value + '"';
                  } else {
                    return name;
                  }
                } else {
                  var ret2 = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                  if (!isNull(ret2))
                    return ret2;
                  return;
                }
              });
              var html2 = "<" + tag;
              if (attrsHtml)
                html2 += " " + attrsHtml;
              if (attrs.closing)
                html2 += " /";
              html2 += ">";
              return html2;
            } else {
              var ret = onIgnoreTag(tag, html2, info);
              if (!isNull(ret))
                return ret;
              return escapeHtml(html2);
            }
          }, escapeHtml);
          if (stripIgnoreTagBody) {
            retHtml = stripIgnoreTagBody.remove(retHtml);
          }
          return retHtml;
        };
        module2.exports = FilterXSS;
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        (function(global) {
          var MapShim = function() {
            if (typeof Map !== "undefined") {
              return Map;
            }
            function getIndex(arr, key) {
              var result = -1;
              arr.some(function(entry, index2) {
                if (entry[0] === key) {
                  result = index2;
                  return true;
                }
                return false;
              });
              return result;
            }
            return function() {
              function class_1() {
                this.__entries__ = [];
              }
              Object.defineProperty(class_1.prototype, "size", {
                get: function() {
                  return this.__entries__.length;
                },
                enumerable: true,
                configurable: true
              });
              class_1.prototype.get = function(key) {
                var index2 = getIndex(this.__entries__, key);
                var entry = this.__entries__[index2];
                return entry && entry[1];
              };
              class_1.prototype.set = function(key, value) {
                var index2 = getIndex(this.__entries__, key);
                if (~index2) {
                  this.__entries__[index2][1] = value;
                } else {
                  this.__entries__.push([key, value]);
                }
              };
              class_1.prototype.delete = function(key) {
                var entries = this.__entries__;
                var index2 = getIndex(entries, key);
                if (~index2) {
                  entries.splice(index2, 1);
                }
              };
              class_1.prototype.has = function(key) {
                return !!~getIndex(this.__entries__, key);
              };
              class_1.prototype.clear = function() {
                this.__entries__.splice(0);
              };
              class_1.prototype.forEach = function(callback, ctx) {
                if (ctx === void 0) {
                  ctx = null;
                }
                for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
                  var entry = _a[_i];
                  callback.call(ctx, entry[1], entry[0]);
                }
              };
              return class_1;
            }();
          }();
          var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
          var global$1 = function() {
            if (typeof global !== "undefined" && global.Math === Math) {
              return global;
            }
            if (typeof self !== "undefined" && self.Math === Math) {
              return self;
            }
            if (typeof window !== "undefined" && window.Math === Math) {
              return window;
            }
            return Function("return this")();
          }();
          var requestAnimationFrame$1 = function() {
            if (typeof requestAnimationFrame === "function") {
              return requestAnimationFrame.bind(global$1);
            }
            return function(callback) {
              return setTimeout(function() {
                return callback(Date.now());
              }, 1e3 / 60);
            };
          }();
          var trailingTimeout = 2;
          function throttle(callback, delay) {
            var leadingCall = false, trailingCall = false, lastCallTime = 0;
            function resolvePending() {
              if (leadingCall) {
                leadingCall = false;
                callback();
              }
              if (trailingCall) {
                proxy();
              }
            }
            function timeoutCallback() {
              requestAnimationFrame$1(resolvePending);
            }
            function proxy() {
              var timeStamp = Date.now();
              if (leadingCall) {
                if (timeStamp - lastCallTime < trailingTimeout) {
                  return;
                }
                trailingCall = true;
              } else {
                leadingCall = true;
                trailingCall = false;
                setTimeout(timeoutCallback, delay);
              }
              lastCallTime = timeStamp;
            }
            return proxy;
          }
          var REFRESH_DELAY = 20;
          var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
          var mutationObserverSupported = typeof MutationObserver !== "undefined";
          var ResizeObserverController = function() {
            function ResizeObserverController2() {
              this.connected_ = false;
              this.mutationEventsAdded_ = false;
              this.mutationsObserver_ = null;
              this.observers_ = [];
              this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
              this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
            }
            ResizeObserverController2.prototype.addObserver = function(observer) {
              if (!~this.observers_.indexOf(observer)) {
                this.observers_.push(observer);
              }
              if (!this.connected_) {
                this.connect_();
              }
            };
            ResizeObserverController2.prototype.removeObserver = function(observer) {
              var observers2 = this.observers_;
              var index2 = observers2.indexOf(observer);
              if (~index2) {
                observers2.splice(index2, 1);
              }
              if (!observers2.length && this.connected_) {
                this.disconnect_();
              }
            };
            ResizeObserverController2.prototype.refresh = function() {
              var changesDetected = this.updateObservers_();
              if (changesDetected) {
                this.refresh();
              }
            };
            ResizeObserverController2.prototype.updateObservers_ = function() {
              var activeObservers = this.observers_.filter(function(observer) {
                return observer.gatherActive(), observer.hasActive();
              });
              activeObservers.forEach(function(observer) {
                return observer.broadcastActive();
              });
              return activeObservers.length > 0;
            };
            ResizeObserverController2.prototype.connect_ = function() {
              if (!isBrowser || this.connected_) {
                return;
              }
              document.addEventListener("transitionend", this.onTransitionEnd_);
              window.addEventListener("resize", this.refresh);
              if (mutationObserverSupported) {
                this.mutationsObserver_ = new MutationObserver(this.refresh);
                this.mutationsObserver_.observe(document, {
                  attributes: true,
                  childList: true,
                  characterData: true,
                  subtree: true
                });
              } else {
                document.addEventListener("DOMSubtreeModified", this.refresh);
                this.mutationEventsAdded_ = true;
              }
              this.connected_ = true;
            };
            ResizeObserverController2.prototype.disconnect_ = function() {
              if (!isBrowser || !this.connected_) {
                return;
              }
              document.removeEventListener("transitionend", this.onTransitionEnd_);
              window.removeEventListener("resize", this.refresh);
              if (this.mutationsObserver_) {
                this.mutationsObserver_.disconnect();
              }
              if (this.mutationEventsAdded_) {
                document.removeEventListener("DOMSubtreeModified", this.refresh);
              }
              this.mutationsObserver_ = null;
              this.mutationEventsAdded_ = false;
              this.connected_ = false;
            };
            ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
              var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
              var isReflowProperty = transitionKeys.some(function(key) {
                return !!~propertyName.indexOf(key);
              });
              if (isReflowProperty) {
                this.refresh();
              }
            };
            ResizeObserverController2.getInstance = function() {
              if (!this.instance_) {
                this.instance_ = new ResizeObserverController2();
              }
              return this.instance_;
            };
            ResizeObserverController2.instance_ = null;
            return ResizeObserverController2;
          }();
          var defineConfigurable = function(target, props) {
            for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
              var key = _a[_i];
              Object.defineProperty(target, key, {
                value: props[key],
                enumerable: false,
                writable: false,
                configurable: true
              });
            }
            return target;
          };
          var getWindowOf = function(target) {
            var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
            return ownerGlobal || global$1;
          };
          var emptyRect = createRectInit(0, 0, 0, 0);
          function toFloat(value) {
            return parseFloat(value) || 0;
          }
          function getBordersSize(styles) {
            var positions = [];
            for (var _i = 1; _i < arguments.length; _i++) {
              positions[_i - 1] = arguments[_i];
            }
            return positions.reduce(function(size, position) {
              var value = styles["border-" + position + "-width"];
              return size + toFloat(value);
            }, 0);
          }
          function getPaddings(styles) {
            var positions = ["top", "right", "bottom", "left"];
            var paddings = {};
            for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
              var position = positions_1[_i];
              var value = styles["padding-" + position];
              paddings[position] = toFloat(value);
            }
            return paddings;
          }
          function getSVGContentRect(target) {
            var bbox = target.getBBox();
            return createRectInit(0, 0, bbox.width, bbox.height);
          }
          function getHTMLElementContentRect(target) {
            var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
            if (!clientWidth && !clientHeight) {
              return emptyRect;
            }
            var styles = getWindowOf(target).getComputedStyle(target);
            var paddings = getPaddings(styles);
            var horizPad = paddings.left + paddings.right;
            var vertPad = paddings.top + paddings.bottom;
            var width = toFloat(styles.width), height = toFloat(styles.height);
            if (styles.boxSizing === "border-box") {
              if (Math.round(width + horizPad) !== clientWidth) {
                width -= getBordersSize(styles, "left", "right") + horizPad;
              }
              if (Math.round(height + vertPad) !== clientHeight) {
                height -= getBordersSize(styles, "top", "bottom") + vertPad;
              }
            }
            if (!isDocumentElement(target)) {
              var vertScrollbar = Math.round(width + horizPad) - clientWidth;
              var horizScrollbar = Math.round(height + vertPad) - clientHeight;
              if (Math.abs(vertScrollbar) !== 1) {
                width -= vertScrollbar;
              }
              if (Math.abs(horizScrollbar) !== 1) {
                height -= horizScrollbar;
              }
            }
            return createRectInit(paddings.left, paddings.top, width, height);
          }
          var isSVGGraphicsElement = function() {
            if (typeof SVGGraphicsElement !== "undefined") {
              return function(target) {
                return target instanceof getWindowOf(target).SVGGraphicsElement;
              };
            }
            return function(target) {
              return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
            };
          }();
          function isDocumentElement(target) {
            return target === getWindowOf(target).document.documentElement;
          }
          function getContentRect(target) {
            if (!isBrowser) {
              return emptyRect;
            }
            if (isSVGGraphicsElement(target)) {
              return getSVGContentRect(target);
            }
            return getHTMLElementContentRect(target);
          }
          function createReadOnlyRect(_a) {
            var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
            var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
            var rect = Object.create(Constr.prototype);
            defineConfigurable(rect, {
              x,
              y,
              width,
              height,
              top: y,
              right: x + width,
              bottom: height + y,
              left: x
            });
            return rect;
          }
          function createRectInit(x, y, width, height) {
            return { x, y, width, height };
          }
          var ResizeObservation = function() {
            function ResizeObservation2(target) {
              this.broadcastWidth = 0;
              this.broadcastHeight = 0;
              this.contentRect_ = createRectInit(0, 0, 0, 0);
              this.target = target;
            }
            ResizeObservation2.prototype.isActive = function() {
              var rect = getContentRect(this.target);
              this.contentRect_ = rect;
              return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
            };
            ResizeObservation2.prototype.broadcastRect = function() {
              var rect = this.contentRect_;
              this.broadcastWidth = rect.width;
              this.broadcastHeight = rect.height;
              return rect;
            };
            return ResizeObservation2;
          }();
          var ResizeObserverEntry = function() {
            function ResizeObserverEntry2(target, rectInit) {
              var contentRect = createReadOnlyRect(rectInit);
              defineConfigurable(this, { target, contentRect });
            }
            return ResizeObserverEntry2;
          }();
          var ResizeObserverSPI = function() {
            function ResizeObserverSPI2(callback, controller, callbackCtx) {
              this.activeObservations_ = [];
              this.observations_ = new MapShim();
              if (typeof callback !== "function") {
                throw new TypeError("The callback provided as parameter 1 is not a function.");
              }
              this.callback_ = callback;
              this.controller_ = controller;
              this.callbackCtx_ = callbackCtx;
            }
            ResizeObserverSPI2.prototype.observe = function(target) {
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              if (typeof Element === "undefined" || !(Element instanceof Object)) {
                return;
              }
              if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
              }
              var observations = this.observations_;
              if (observations.has(target)) {
                return;
              }
              observations.set(target, new ResizeObservation(target));
              this.controller_.addObserver(this);
              this.controller_.refresh();
            };
            ResizeObserverSPI2.prototype.unobserve = function(target) {
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              if (typeof Element === "undefined" || !(Element instanceof Object)) {
                return;
              }
              if (!(target instanceof getWindowOf(target).Element)) {
                throw new TypeError('parameter 1 is not of type "Element".');
              }
              var observations = this.observations_;
              if (!observations.has(target)) {
                return;
              }
              observations.delete(target);
              if (!observations.size) {
                this.controller_.removeObserver(this);
              }
            };
            ResizeObserverSPI2.prototype.disconnect = function() {
              this.clearActive();
              this.observations_.clear();
              this.controller_.removeObserver(this);
            };
            ResizeObserverSPI2.prototype.gatherActive = function() {
              var _this = this;
              this.clearActive();
              this.observations_.forEach(function(observation) {
                if (observation.isActive()) {
                  _this.activeObservations_.push(observation);
                }
              });
            };
            ResizeObserverSPI2.prototype.broadcastActive = function() {
              if (!this.hasActive()) {
                return;
              }
              var ctx = this.callbackCtx_;
              var entries = this.activeObservations_.map(function(observation) {
                return new ResizeObserverEntry(observation.target, observation.broadcastRect());
              });
              this.callback_.call(ctx, entries, ctx);
              this.clearActive();
            };
            ResizeObserverSPI2.prototype.clearActive = function() {
              this.activeObservations_.splice(0);
            };
            ResizeObserverSPI2.prototype.hasActive = function() {
              return this.activeObservations_.length > 0;
            };
            return ResizeObserverSPI2;
          }();
          var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
          var ResizeObserver = function() {
            function ResizeObserver2(callback) {
              if (!(this instanceof ResizeObserver2)) {
                throw new TypeError("Cannot call a class as a function.");
              }
              if (!arguments.length) {
                throw new TypeError("1 argument required, but only 0 present.");
              }
              var controller = ResizeObserverController.getInstance();
              var observer = new ResizeObserverSPI(callback, controller, this);
              observers.set(this, observer);
            }
            return ResizeObserver2;
          }();
          [
            "observe",
            "unobserve",
            "disconnect"
          ].forEach(function(method) {
            ResizeObserver.prototype[method] = function() {
              var _a;
              return (_a = observers.get(this))[method].apply(_a, arguments);
            };
          });
          var index = function() {
            if (typeof global$1.ResizeObserver !== "undefined") {
              return global$1.ResizeObserver;
            }
            return ResizeObserver;
          }();
          __webpack_exports__["a"] = index;
        }).call(this, __webpack_require__(86));
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.d(__webpack_exports__, "a", function() {
          return createEditor;
        });
        var utils_lang = __webpack_require__(13);
        var zh_CN = {
          undo: {
            toolbar: "\u64A4\u9500"
          },
          redo: {
            toolbar: "\u91CD\u505A"
          },
          clear: {
            toolbar: "\u6E05\u7A7A"
          },
          h: {
            toolbar: "\u6807\u9898"
          },
          h1: {
            toolbar: "\u4E00\u7EA7\u6807\u9898",
            placeholder: "\u4E00\u7EA7\u6807\u9898"
          },
          h2: {
            toolbar: "\u4E8C\u7EA7\u6807\u9898",
            placeholder: "\u4E8C\u7EA7\u6807\u9898"
          },
          h3: {
            toolbar: "\u4E09\u7EA7\u6807\u9898",
            placeholder: "\u4E09\u7EA7\u6807\u9898"
          },
          h4: {
            toolbar: "\u56DB\u7EA7\u6807\u9898",
            placeholder: "\u56DB\u7EA7\u6807\u9898"
          },
          h5: {
            toolbar: "\u4E94\u7EA7\u6807\u9898",
            placeholder: "\u4E94\u7EA7\u6807\u9898"
          },
          h6: {
            toolbar: "\u516D\u7EA7\u6807\u9898",
            placeholder: "\u516D\u7EA7\u6807\u9898"
          },
          bold: {
            toolbar: "\u7C97\u4F53",
            placeholder: "\u7C97\u4F53"
          },
          italic: {
            toolbar: "\u659C\u4F53",
            placeholder: "\u659C\u4F53"
          },
          strikethrough: {
            toolbar: "\u5220\u9664\u7EBF",
            placeholder: "\u5220\u9664\u7EBF"
          },
          quote: {
            toolbar: "\u63D2\u5165\u5F15\u7528",
            placeholder: "\u5F15\u7528"
          },
          ul: {
            toolbar: "\u65E0\u5E8F\u5217\u8868",
            placeholder: "\u65E0\u5E8F\u5217\u8868"
          },
          ol: {
            toolbar: "\u6709\u5E8F\u5217\u8868",
            placeholder: "\u6709\u5E8F\u5217\u8868"
          },
          table: {
            toolbar: "\u8868\u683C"
          },
          hr: {
            toolbar: "\u63D2\u5165\u5206\u5272\u7EBF"
          },
          link: {
            toolbar: "\u63D2\u5165\u94FE\u63A5",
            descPlaceholder: "\u94FE\u63A5"
          },
          image: {
            toolbar: "\u63D2\u5165\u56FE\u7247"
          },
          imageLink: {
            toolbar: "\u6DFB\u52A0\u56FE\u7247\u94FE\u63A5"
          },
          uploadImage: {
            toolbar: "\u4E0A\u4F20\u672C\u5730\u56FE\u7247"
          },
          code: {
            toolbar: "\u63D2\u5165\u4EE3\u7801\u5757"
          },
          save: {
            toolbar: "\u4FDD\u5B58"
          },
          preview: {
            enabled: "\u5F00\u542F\u9884\u89C8",
            disabled: "\u5173\u95ED\u9884\u89C8"
          },
          toc: {
            title: "\u76EE\u5F55\u5BFC\u822A",
            enabled: "\u5F00\u542F\u76EE\u5F55\u5BFC\u822A",
            disabled: "\u5173\u95ED\u76EE\u5F55\u5BFC\u822A"
          },
          syncScroll: {
            enabled: "\u5F00\u542F\u540C\u6B65\u6EDA\u52A8",
            disabled: "\u5173\u95ED\u540C\u6B65\u6EDA\u52A8"
          },
          fullscreen: {
            enabled: "\u5168\u5C4F\uFF08\u6309ESC\u8FD8\u539F\uFF09",
            disabled: "\u9000\u51FA\u5168\u5C4F"
          }
        };
        var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);
        var util = __webpack_require__(2);
        var defaultCommands = {};
        Object(util["c"])(defaultCommands, __webpack_require__(38));
        function command_registerCommand(target, commandName, callback) {
          if (commandName) {
            if (!target[commandName]) {
              target[commandName] = callback;
            } else {
              console.error("The command name is already in use: " + commandName);
            }
          } else {
            console.error("Command name is required");
          }
        }
        function commandWrapper(component) {
          component.commands = {};
          component.command = function(commandName, callback) {
            command_registerCommand(component.commands, commandName, callback);
          };
          Object.keys(defaultCommands).forEach(function(key) {
            var module3 = defaultCommands[key];
            var name = module3.name, callback = module3.default;
            component.command(name, callback);
          });
        }
        var esm_extends = __webpack_require__(5);
        var defaultToolbars = {};
        Object(util["c"])(defaultToolbars, __webpack_require__(61));
        function toolbar_registerToolbar(target, name, config) {
          if (name) {
            target[name] = Object(esm_extends["a"])({}, config);
          } else {
            console.error("Toolbar name is required");
          }
        }
        function toolbarWrapper(component) {
          component.toolbars = {};
          component.toolbar = function(name, config) {
            toolbar_registerToolbar(component.toolbars, name, config);
          };
          Object.keys(defaultToolbars).forEach(function(key) {
            var module3 = defaultToolbars[key];
            var config = module3.default;
            component.toolbar(config.name, config);
          });
        }
        __webpack_require__(81);
        var preview = __webpack_require__(9);
        var _hoisted_1 = {
          class: "v-md-editor__left-area-body"
        };
        var _hoisted_2 = {
          class: "v-md-editor__right-area"
        };
        var _hoisted_3 = {
          class: "v-md-editor__toolbar",
          ref: "toolbarWrapper"
        };
        var _hoisted_4 = {
          class: "v-md-editor__main"
        };
        var _hoisted_5 = {
          class: "v-md-editor__preview-wrapper",
          ref: "previewWrapper"
        };
        function containervue_type_template_id_e6b02356_bindings_leftToolbar_props_rightToolbar_props_toolbars_props_fullscreen_props_height_props_noresize_props_disabledMenus_props_leftAreaVisible_props_leftAreaTitle_props_leftAreaReverse_props_leftAreaWidth_props_mode_props_toolbarHeight_data_heightGetter_options_leftToolbarGroup_options_rightToolbarGroup_options_isPreviewMode_options_isEditMode_options_handleResize_options_handleToolbarWrapperResize_options_getToolbarConfig_options_handleEditorWrapperClick_options_handleToolbarItemClick_options_handleToolbarMenuClick_options_render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_editor_toolbar = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("editor-toolbar");
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", {
            class: ["v-md-editor", ["v-md-editor--" + $props.mode, {
              "v-md-editor--fullscreen": $props.fullscreen,
              "v-md-editor--left-area-reverse": $props.leftAreaReverse
            }]],
            style: {
              height: $options.heightGetter
            }
          }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
            class: "v-md-editor__left-area",
            style: {
              width: $props.leftAreaVisible ? $props.leftAreaWidth : 0,
              borderWidth: $props.leftAreaVisible ? "1px" : 0
            }
          }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
            class: "v-md-editor__left-area-title",
            style: {
              height: $data.toolbarHeight + "px",
              lineHeight: $data.toolbarHeight + "px"
            }
          }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.leftAreaTitle), 5), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_1, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "left-area")])], 4), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isPreviewMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_2, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_3, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_editor_toolbar, {
            class: "v-md-editor__toolbar-left",
            groups: $options.leftToolbarGroup,
            toolbars: $props.toolbars,
            "disabled-menus": $props.disabledMenus,
            onItemClick: $options.handleToolbarItemClick,
            onToolbarMenuClick: $options.handleToolbarMenuClick
          }, null, 8, ["groups", "toolbars", "disabled-menus", "onItemClick", "onToolbarMenuClick"]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_editor_toolbar, {
            class: "v-md-editor__toolbar-right",
            groups: $options.rightToolbarGroup,
            toolbars: $props.toolbars,
            "disabled-mens": $props.disabledMenus,
            onItemClick: $options.handleToolbarItemClick,
            onToolbarMenuClick: $options.handleToolbarMenuClick
          }, null, 8, ["groups", "toolbars", "disabled-mens", "onItemClick", "onToolbarMenuClick"])], 512), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isPreviewMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_4, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
            ref: "editorWrapper",
            class: "v-md-editor__editor-wrapper",
            onClick: _cache[1] || (_cache[1] = function() {
              return $options.handleEditorWrapperClick.apply($options, arguments);
            })
          }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "editor")], 512), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isPreviewMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", _hoisted_5, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "preview")], 512), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], !$options.isEditMode]]), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderSlot"])(_ctx.$slots, "default")])])], 6);
        }
        var toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_1 = {
          key: 0
        };
        var toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_2 = {
          key: 0,
          class: "v-md-editor__toolbar-divider"
        };
        function toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_toolbar_item = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("toolbar-item");
          return $props.groups.length ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("ul", toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_1, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.groups, function(group, idx) {
            return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])(group, function(toolbarName) {
              return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_toolbar_item, {
                key: toolbarName,
                name: toolbarName,
                title: $options.getConfig(toolbarName, "title"),
                icon: $options.getConfig(toolbarName, "icon"),
                text: $options.getConfig(toolbarName, "text"),
                active: $options.getConfig(toolbarName, "active"),
                menus: $options.getConfig(toolbarName, "menus"),
                "disabled-menus": $props.disabledMenus,
                onClick: function onClick($event) {
                  return _ctx.$emit("item-click", $props.toolbars[toolbarName]);
                },
                onMenuClick: _cache[1] || (_cache[1] = function($event) {
                  return _ctx.$emit("toolbar-menu-click", $event);
                })
              }, null, 8, ["name", "title", "icon", "text", "active", "menus", "disabled-menus", "onClick"]);
            }), 128)), idx !== $props.groups.length - 1 ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_hoisted_2)) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)], 64);
          }), 256))])) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true);
        }
        var toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_hoisted_1 = {
          key: 1,
          class: "v-md-icon-arrow-down v-md-editor__menu-ctrl",
          ref: "menuCtrl"
        };
        function toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_v_md_tooltip = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-tooltip");
          var _component_v_md_menu = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-menu");
          var _directive_clickoutside = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveDirective"])("clickoutside");
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])((Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", {
            class: ["v-md-editor__toolbar-item", [$props.icon, "v-md-editor__toolbar-item-" + $props.name, {
              "v-md-editor__toolbar-item--active": $props.active || $data.menuActive
            }, {
              "v-md-editor__toolbar-item--menu": $options.hasMenu
            }]],
            onMousedown: _cache[3] || (_cache[3] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
            }, ["prevent"])),
            onMouseleave: _cache[4] || (_cache[4] = function() {
              return $options.handleHideTooltip.apply($options, arguments);
            }),
            onMousemove: _cache[5] || (_cache[5] = function() {
              return $options.showTooltip.apply($options, arguments);
            }),
            onClick: _cache[6] || (_cache[6] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.handleClick.apply($options, arguments);
            }, ["stop"]))
          }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.text) + " ", 1), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_v_md_tooltip, {
            ref: "tooltip",
            text: $props.title
          }, null, 8, ["text"]), $options.hasMenu ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_menu, {
            key: 0,
            ref: "menu",
            mode: $options.menuMode,
            menus: $options.menuItems,
            "item-width": $props.menus.itemWidth,
            "row-num": $props.menus.rowNum,
            visible: $data.menuActive,
            "onUpdate:visible": _cache[1] || (_cache[1] = function($event) {
              return $data.menuActive = $event;
            }),
            onItemClick: _cache[2] || (_cache[2] = function($event) {
              return _ctx.$emit("menu-click", $event);
            })
          }, null, 8, ["mode", "menus", "item-width", "row-num", "visible"])) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true), $options.hasMenu ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("i", toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_hoisted_1, null, 512)) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)], 34)), [[_directive_clickoutside, $options.hideMenu, "hideMenu"]]);
        }
        function tooltipvue_type_template_id_047bb94e_bindings_text_props_position_data_visible_data_show_options_hide_options_calculateLayout_options_render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Transition"], {
            name: "v-md-fade-in"
          }, {
            default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
              return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
                style: {
                  left: $data.position.x + "px",
                  top: $data.position.y + "px"
                },
                class: "v-md-editor__tooltip"
              }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($props.text), 5), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], $data.visible]])];
            }),
            _: 1
          });
        }
        var tooltipvue_type_script_lang_js = {
          name: "v-md-tooltip",
          props: {
            text: String
          },
          data: function data() {
            return {
              position: {
                x: 0,
                y: 0
              },
              visible: false
            };
          },
          methods: {
            show: function show(position) {
              this.position = {
                x: position.x,
                y: position.y
              };
              this.visible = true;
              this.$nextTick(this.calculateLayout);
            },
            hide: function hide() {
              this.visible = false;
            },
            calculateLayout: function calculateLayout() {
              var _this$$el$getBounding = this.$el.getBoundingClientRect(), right = _this$$el$getBounding.right;
              var windowWidth = document.documentElement.clientWidth;
              if (windowWidth - right < 0) {
                this.position.x -= right - windowWidth;
              }
            }
          }
        };
        __webpack_require__(82);
        tooltipvue_type_script_lang_js.render = tooltipvue_type_template_id_047bb94e_bindings_text_props_position_data_visible_data_show_options_hide_options_calculateLayout_options_render;
        var tooltip = tooltipvue_type_script_lang_js;
        var menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_1 = {
          key: 1
        };
        var menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_2 = {
          class: "v-md-editor__menu-row"
        };
        function menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_v_md_render = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-render");
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Transition"], {
            name: "v-md-zoom-in-top"
          }, {
            default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
              return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withDirectives"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("ul", {
                class: ["v-md-editor__menu", ["v-md-editor__menu--" + $props.mode]],
                style: $data.style,
                onMousemove: _cache[1] || (_cache[1] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
                }, ["stop"])),
                onClick: _cache[2] || (_cache[2] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
                }, ["stop"]))
              }, [$options.isListMode ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], {
                key: 0
              }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.menus, function(item) {
                return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", {
                  key: item.name,
                  class: ["v-md-editor__menu-item", ["v-md-editor__menu-item-" + item.name, item.class]],
                  onClick: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function($event) {
                    return $options.handleClick(item);
                  }, ["stop"])
                }, [item.render ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_render, {
                  key: 0,
                  render: item.render,
                  editor: _ctx.$self
                }, null, 8, ["render", "editor"])) : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], {
                  key: 1
                }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])($options.getText(item.text)), 1)], 64))], 10, ["onClick"]);
              }), 128)) : (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_1, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($options.rowCount, function(rowIndex) {
                return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_hoisted_2, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($options.getRowMenus(rowIndex), function(item) {
                  return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("span", {
                    key: item.name,
                    style: {
                      width: $props.itemWidth
                    },
                    class: ["v-md-editor__menu-item", ["v-md-editor__menu-item-" + item.name, item.class]],
                    onClick: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function($event) {
                      return $options.handleClick(item);
                    }, ["stop"])
                  }, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(item.text), 15, ["onClick"]);
                }), 128))]);
              }), 256))]))], 38), [[external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["vShow"], $props.visible]])];
            }),
            _: 1
          });
        }
        var renderFn = function renderFn2(props, _ref) {
          var data = _ref.data;
          return props.render.apply(props, data.$attrs);
        };
        renderFn.props = ["render"];
        var components_render = renderFn;
        var menu_mode = {
          LIST: "list",
          PANEL: "panel"
        };
        var menuvue_type_script_lang_js = {
          name: "v-md-menu",
          components: {
            VMdRender: components_render
          },
          inject: ["markdownEditor"],
          props: {
            mode: {
              type: String,
              default: menu_mode.PANEL
            },
            menus: Array,
            itemWidth: {
              type: String,
              default: "30px"
            },
            rowNum: {
              type: Number,
              default: 10
            },
            visible: Boolean
          },
          emits: ["update:visible", "item-click"],
          data: function data() {
            return {
              style: {
                left: 0
              }
            };
          },
          computed: {
            rowCount: function rowCount() {
              return Math.ceil(this.menus.length / this.rowNum);
            },
            isListMode: function isListMode() {
              return this.mode === menu_mode.LIST;
            }
          },
          watch: {
            visible: function visible() {
              if (this.visible)
                this.$nextTick(this.calculateLayout);
            }
          },
          methods: {
            calculateLayout: function calculateLayout() {
              var _this$$el$getBounding = this.$el.getBoundingClientRect(), right = _this$$el$getBounding.right;
              var windowWidth = document.documentElement.clientWidth;
              if (windowWidth - right < 0)
                this.style = {
                  right: 0
                };
            },
            getRowMenus: function getRowMenus(rowIndex) {
              var end = rowIndex * this.rowNum;
              var start = end - this.rowNum;
              return this.menus.slice(start, end);
            },
            getText: function getText(text) {
              if (typeof text === "function") {
                return text(this.markdownEditor);
              }
              return text;
            },
            hide: function hide() {
              this.$emit("update:visible", false);
            },
            handleClick: function handleClick(item) {
              this.$emit("item-click", item);
              this.hide();
            }
          }
        };
        __webpack_require__(83);
        menuvue_type_script_lang_js.render = menuvue_type_template_id_57354868_bindings_markdownEditor_options_mode_props_menus_props_itemWidth_props_rowNum_props_visible_props_style_data_rowCount_options_isListMode_options_calculateLayout_options_getRowMenus_options_getText_options_hide_options_handleClick_options_render;
        var menu = menuvue_type_script_lang_js;
        var nodeList = [];
        var ctx = "@@clickoutsideContext";
        var isServer = typeof window === "undefined";
        var startClick;
        var seed = 0;
        if (!isServer) {
          document.addEventListener("mousedown", function(e) {
            startClick = e;
          });
          document.addEventListener("mouseup", function(e) {
            nodeList.forEach(function(node) {
              return node[ctx].documentHandler(e, startClick);
            });
          });
        }
        function createDocumentHandler(el, binding, vnode) {
          return function(mouseup, mousedown) {
            if (mouseup === void 0) {
              mouseup = {};
            }
            if (mousedown === void 0) {
              mousedown = {};
            }
            if (!vnode || !binding || !binding.instance || !mouseup.target || !mousedown.target || el.contains(mouseup.target) || el.contains(mousedown.target) || el === mouseup.target) {
              return;
            }
            if (binding.arg && el[ctx].methodName && binding.instance[el[ctx].methodName]) {
              binding.instance[el[ctx].methodName]();
            } else {
              el[ctx].bindingFn && el[ctx].bindingFn();
            }
          };
        }
        var clickoutside = {
          beforeMount: function beforeMount(el, binding, vnode) {
            nodeList.push(el);
            var id = seed++;
            el[ctx] = {
              id,
              documentHandler: createDocumentHandler(el, binding, vnode),
              methodName: binding.arg,
              bindingFn: binding.value
            };
          },
          updated: function updated(el, binding, vnode) {
            el[ctx].documentHandler = createDocumentHandler(el, binding, vnode);
            el[ctx].methodName = binding.arg;
            el[ctx].bindingFn = binding.value;
          },
          unmounted: function unmounted(el) {
            var len = nodeList.length;
            for (var i = 0; i < len; i++) {
              if (nodeList[i][ctx].id === el[ctx].id) {
                nodeList.splice(i, 1);
                break;
              }
            }
            delete el[ctx];
          }
        };
        var _components;
        var toolbar_itemvue_type_script_lang_js = {
          name: "toolbar-item",
          directives: {
            Clickoutside: clickoutside
          },
          components: (_components = {}, _components[tooltip.name] = tooltip, _components[menu.name] = menu, _components),
          props: {
            name: String,
            title: String,
            active: Boolean,
            text: String,
            icon: String,
            menus: [Array, Object],
            disabledMenus: Array
          },
          emits: ["click", "menu-click"],
          data: function data() {
            return {
              menuActive: false
            };
          },
          computed: {
            hasMenu: function hasMenu() {
              var _this$menuItems;
              return (_this$menuItems = this.menuItems) == null ? void 0 : _this$menuItems.length;
            },
            menuItems: function menuItems() {
              var _this = this;
              var menus = Object(util["e"])(this.menus) ? this.menus.items : this.menus;
              return menus == null ? void 0 : menus.filter(function(_ref) {
                var _this$disabledMenus;
                var menuName = _ref.name;
                return !((_this$disabledMenus = _this.disabledMenus) == null ? void 0 : _this$disabledMenus.includes(_this.name + "/" + menuName));
              });
            },
            menuMode: function menuMode() {
              return Object(util["e"])(this.menus) ? this.menus.mode : menu_mode.LIST;
            }
          },
          methods: {
            hideMenu: function hideMenu() {
              if (this.hasMenu) {
                this.menuActive = false;
              }
            },
            showMenu: function showMenu() {
              if (this.hasMenu) {
                this.menuActive = true;
              }
            },
            handleClick: function handleClick(e) {
              this.$emit("click");
              this.menuActive ? this.hideMenu() : this.showMenu();
              if (this.hasMenu) {
                this.handleHideTooltip();
              } else {
                this.showTooltip(e);
              }
            },
            showTooltip: function showTooltip(e) {
              var _this2 = this;
              var selfEl = this.$el;
              var target = e.target;
              var menuCtrl = this.$refs.menuCtrl;
              if (target !== selfEl && target !== menuCtrl || this.menuActive) {
                this.handleHideTooltip();
                return;
              }
              if (this.timmer)
                clearTimeout(this.timmer);
              var selfElRect = selfEl.getBoundingClientRect();
              var x = e.clientX - selfElRect.left;
              var y = e.clientY - selfElRect.top;
              this.timmer = setTimeout(function() {
                var _this2$$refs$tooltip;
                (_this2$$refs$tooltip = _this2.$refs.tooltip) == null ? void 0 : _this2$$refs$tooltip.show({
                  x: x - 2,
                  y: y + 20
                });
              }, 100);
            },
            handleHideTooltip: function handleHideTooltip() {
              if (this.timmer)
                clearTimeout(this.timmer);
              this.$refs.tooltip.hide();
            }
          }
        };
        __webpack_require__(84);
        toolbar_itemvue_type_script_lang_js.render = toolbar_itemvue_type_template_id_30f6176d_bindings_name_props_title_props_active_props_text_props_icon_props_menus_props_disabledMenus_props_menuActive_data_hasMenu_options_menuItems_options_menuMode_options_hideMenu_options_showMenu_options_handleClick_options_showTooltip_options_handleHideTooltip_options_render;
        var toolbar_item = toolbar_itemvue_type_script_lang_js;
        var toolbarvue_type_script_lang_js_components;
        var toolbarvue_type_script_lang_js = {
          name: "editor-toolbar",
          components: (toolbarvue_type_script_lang_js_components = {}, toolbarvue_type_script_lang_js_components[toolbar_item.name] = toolbar_item, toolbarvue_type_script_lang_js_components),
          inject: ["markdownEditor"],
          props: {
            groups: Array,
            toolbars: Object,
            disabledMenus: Array
          },
          emits: ["item-click", "toolbar-menu-click"],
          methods: {
            getConfig: function getConfig(toolbarName, configName) {
              var toolbarConfig = this.toolbars[toolbarName];
              var value = toolbarConfig[configName];
              return typeof value === "function" ? value(this.markdownEditor) : value;
            }
          }
        };
        __webpack_require__(85);
        toolbarvue_type_script_lang_js.render = toolbarvue_type_template_id_50c68f6d_bindings_markdownEditor_options_groups_props_toolbars_props_disabledMenus_props_getConfig_options_render;
        var toolbar = toolbarvue_type_script_lang_js;
        var ResizeObserver_es = __webpack_require__(34);
        var resize_event_isServer = typeof window === "undefined";
        var resizeHandler = function resizeHandler2(entries) {
          entries.forEach(function(entry) {
            var listeners = entry.target.__resizeListeners__ || [];
            if (listeners.length) {
              listeners.forEach(function(fn) {
                fn();
              });
            }
          });
        };
        var resize_event_addResizeListener = function addResizeListener(element, fn) {
          if (resize_event_isServer)
            return;
          if (!element.__resizeListeners__) {
            element.__resizeListeners__ = [];
            element.__ro__ = new ResizeObserver_es["a"](resizeHandler);
            element.__ro__.observe(element);
          }
          element.__resizeListeners__.push(fn);
        };
        var removeResizeListener = function removeResizeListener2(element, fn) {
          if (!element || !element.__resizeListeners__)
            return;
          element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
          if (!element.__resizeListeners__.length) {
            element.__ro__.disconnect();
          }
        };
        var editor_mode = __webpack_require__(4);
        var containervue_type_script_lang_js_components;
        var containervue_type_script_lang_js = {
          name: "v-md-container",
          components: (containervue_type_script_lang_js_components = {}, containervue_type_script_lang_js_components[toolbar.name] = toolbar, containervue_type_script_lang_js_components),
          props: {
            leftToolbar: String,
            rightToolbar: String,
            toolbars: Object,
            fullscreen: Boolean,
            height: String,
            noresize: Boolean,
            disabledMenus: Array,
            leftAreaVisible: Boolean,
            leftAreaTitle: String,
            leftAreaReverse: Boolean,
            leftAreaWidth: {
              type: String,
              default: "200px"
            },
            mode: {
              type: String,
              default: editor_mode["a"].EDITABLE
            }
          },
          emits: ["resize", "editor-wrapper-click", "toolbar-item-click", "toolbar-menu-click"],
          data: function data() {
            return {
              toolbarHeight: 0
            };
          },
          computed: {
            heightGetter: function heightGetter() {
              return this.fullscreen ? "auto" : this.height;
            },
            leftToolbarGroup: function leftToolbarGroup() {
              return this.getToolbarConfig(this.leftToolbar);
            },
            rightToolbarGroup: function rightToolbarGroup() {
              return this.getToolbarConfig(this.rightToolbar);
            },
            isPreviewMode: function isPreviewMode() {
              return this.mode === editor_mode["a"].PREVIEW;
            },
            isEditMode: function isEditMode() {
              return this.mode === editor_mode["a"].EDIT;
            }
          },
          mounted: function mounted() {
            if (!this.noresize) {
              resize_event_addResizeListener(this.$refs.editorWrapper, this.handleResize);
              resize_event_addResizeListener(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize);
            }
          },
          beforeUnmount: function beforeUnmount() {
            if (!this.noresize) {
              removeResizeListener(this.$refs.editorWrapper, this.handleResize);
              removeResizeListener(this.$refs.toolbarWrapper, this.handleToolbarWrapperResize);
            }
          },
          methods: {
            handleResize: function handleResize() {
              this.$emit("resize");
            },
            handleToolbarWrapperResize: function handleToolbarWrapperResize() {
              var toolbarWrapper2 = this.$refs.toolbarWrapper;
              if (toolbarWrapper2)
                this.toolbarHeight = toolbarWrapper2.offsetHeight;
            },
            getToolbarConfig: function getToolbarConfig(toolbarStr) {
              var _this = this;
              return toolbarStr.split("|").map(function(group) {
                return group.split(" ").filter(function(toolbarName) {
                  return toolbarName && _this.toolbars[toolbarName];
                });
              });
            },
            handleEditorWrapperClick: function handleEditorWrapperClick(e) {
              this.$emit("editor-wrapper-click", e);
            },
            handleToolbarItemClick: function handleToolbarItemClick(toolbar2) {
              this.$emit("toolbar-item-click", toolbar2);
            },
            handleToolbarMenuClick: function handleToolbarMenuClick(menu2) {
              this.$emit("toolbar-menu-click", menu2);
            }
          }
        };
        __webpack_require__(87);
        containervue_type_script_lang_js.render = containervue_type_template_id_e6b02356_bindings_leftToolbar_props_rightToolbar_props_toolbars_props_fullscreen_props_height_props_noresize_props_disabledMenus_props_leftAreaVisible_props_leftAreaTitle_props_leftAreaReverse_props_leftAreaWidth_props_mode_props_toolbarHeight_data_heightGetter_options_leftToolbarGroup_options_rightToolbarGroup_options_isPreviewMode_options_isEditMode_options_handleResize_options_handleToolbarWrapperResize_options_getToolbarConfig_options_handleEditorWrapperClick_options_handleToolbarItemClick_options_handleToolbarMenuClick_options_render;
        var container = containervue_type_script_lang_js;
        var scrollBarWidth;
        var scrollbar_width_isServer = typeof window === "undefined";
        var scrollbar_width = function() {
          if (scrollbar_width_isServer)
            return 0;
          if (scrollBarWidth !== void 0)
            return scrollBarWidth;
          var outer = document.createElement("div");
          outer.className = "scrollbar__wrap";
          outer.style.visibility = "hidden";
          outer.style.width = "100px";
          outer.style.position = "absolute";
          outer.style.top = "-9999px";
          document.body.appendChild(outer);
          var widthNoScroll = outer.offsetWidth;
          outer.style.overflow = "scroll";
          var inner = document.createElement("div");
          inner.style.width = "100%";
          outer.appendChild(inner);
          var widthWithScroll = inner.offsetWidth;
          outer.parentNode.removeChild(outer);
          scrollBarWidth = widthNoScroll - widthWithScroll;
          return scrollBarWidth;
        };
        var BAR_MAP = {
          vertical: {
            offset: "offsetHeight",
            scroll: "scrollTop",
            scrollSize: "scrollHeight",
            size: "height",
            key: "vertical",
            axis: "Y",
            client: "clientY",
            direction: "top"
          },
          horizontal: {
            offset: "offsetWidth",
            scroll: "scrollLeft",
            scrollSize: "scrollWidth",
            size: "width",
            key: "horizontal",
            axis: "X",
            client: "clientX",
            direction: "left"
          }
        };
        function renderThumbStyle(_ref) {
          var move = _ref.move, size = _ref.size, bar = _ref.bar;
          var style = {};
          var translate = "translate" + bar.axis + "(" + move + "%)";
          style[bar.size] = size;
          style.transform = translate;
          style.msTransform = translate;
          style.webkitTransform = translate;
          return style;
        }
        var scrollbar_bar = {
          name: "Bar",
          props: {
            vertical: Boolean,
            size: String,
            move: Number
          },
          computed: {
            bar: function bar() {
              return BAR_MAP[this.vertical ? "vertical" : "horizontal"];
            },
            wrap: function wrap() {
              return this.$parent.wrap;
            }
          },
          render: function render() {
            var size = this.size, move = this.move, bar = this.bar;
            return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
              "class": ["scrollbar__bar", "is-" + bar.key],
              "onMousedown": this.clickTrackHandler,
              "onClick": function onClick(e) {
                return e.stopPropagation();
              }
            }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
              "ref": "thumb",
              "class": "scrollbar__thumb",
              "onMousedown": this.clickThumbHandler,
              "style": renderThumbStyle({
                size,
                move,
                bar
              })
            }, null)]);
          },
          methods: {
            clickThumbHandler: function clickThumbHandler(e) {
              if (e.ctrlKey || e.button === 2) {
                return;
              }
              this.startDrag(e);
              this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
            },
            clickTrackHandler: function clickTrackHandler(e) {
              var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
              var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
              var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];
              this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
            },
            startDrag: function startDrag(e) {
              e.stopImmediatePropagation();
              this.cursorDown = true;
              document.addEventListener("mousemove", this.mouseMoveDocumentHandler, false);
              document.addEventListener("mouseup", this.mouseUpDocumentHandler, false);
              document.onselectstart = function() {
                return false;
              };
            },
            mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
              if (this.cursorDown === false)
                return;
              var prevPage = this[this.bar.axis];
              if (!prevPage)
                return;
              var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
              var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
              var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];
              this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
            },
            mouseUpDocumentHandler: function mouseUpDocumentHandler() {
              this.cursorDown = false;
              this[this.bar.axis] = 0;
              document.removeEventListener("mousemove", this.mouseMoveDocumentHandler, false);
              document.onselectstart = null;
            }
          },
          unmounted: function unmounted() {
            document.removeEventListener("mouseup", this.mouseUpDocumentHandler, false);
          }
        };
        var smooth_scroll = __webpack_require__(8);
        var scrollbarvue_type_script_lang_js = {
          name: "scrollbar",
          components: {
            Bar: scrollbar_bar
          },
          props: {
            native: Boolean,
            disabled: Boolean,
            wrapStyle: null,
            wrapClass: null,
            viewClass: null,
            viewStyle: null,
            noresize: Boolean,
            tag: {
              type: String,
              default: "div"
            }
          },
          emits: ["scroll"],
          data: function data() {
            return {
              sizeWidth: "0",
              sizeHeight: "0",
              moveX: 0,
              moveY: 0
            };
          },
          computed: {
            wrap: function wrap() {
              return this.$refs.wrap;
            }
          },
          mounted: function mounted() {
            if (this.native || this.disabled)
              return;
            this.$nextTick(this.update);
            !this.noresize && resize_event_addResizeListener(this.$refs.resize, this.update);
          },
          beforeUnmount: function beforeUnmount() {
            if (this.native || this.disabled)
              return;
            !this.noresize && removeResizeListener(this.$refs.resize, this.update);
          },
          methods: {
            getScrollInfo: function getScrollInfo() {
              var wrap = this.wrap;
              return {
                left: wrap.scrollLeft,
                top: wrap.scrollTop,
                width: wrap.scrollWidth,
                height: wrap.scrollHeight,
                clientWidth: wrap.clientWidth,
                clientHeight: wrap.clientHeight
              };
            },
            scrollTo: function scrollTo(scrollTop) {
              Object(smooth_scroll["a"])({
                scrollTarget: this.wrap,
                scrollToTop: scrollTop
              });
            },
            handleScroll: function handleScroll() {
              var wrap = this.wrap;
              this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
              this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
              this.$emit("scroll");
            },
            update: function update() {
              var wrap = this.wrap;
              if (!wrap)
                return;
              var heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
              var widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;
              this.sizeHeight = heightPercentage < 100 ? heightPercentage + "%" : "";
              this.sizeWidth = widthPercentage < 100 ? widthPercentage + "%" : "";
            }
          },
          render: function render() {
            if (this.disabled)
              return this.$slots.default();
            var gutter = scrollbar_width();
            var style = this.wrapStyle;
            if (gutter) {
              var scrollView = this.$refs.resize;
              var wrapper = this.$refs.wrap;
              var scrollViewHeight = scrollView == null ? void 0 : scrollView.scrollHeight;
              var scrollViewWidth = scrollView == null ? void 0 : scrollView.scrollWidth;
              var wrapperHeight = wrapper == null ? void 0 : wrapper.clientHeight;
              var wrapperWidth = wrapper == null ? void 0 : wrapper.clientWidth;
              var gutterWith = "-" + gutter + "px";
              var marginBottom = scrollViewWidth > wrapperWidth ? gutterWith : 0;
              var marginRight = scrollViewHeight > wrapperHeight ? gutterWith : 0;
              var gutterStyle = "margin-bottom: " + marginBottom + "; margin-right: " + marginRight + ";";
              if (Array.isArray(this.wrapStyle)) {
                style = Object(util["a"])(this.wrapStyle);
                style.marginRight = gutterWith;
                style.marginBottom = gutterWith;
              } else if (typeof this.wrapStyle === "string") {
                style += gutterStyle;
              } else {
                style = gutterStyle;
              }
            }
            var view = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["h"])(this.tag, {
              class: ["scrollbar__view", this.viewClass],
              style: this.viewStyle,
              ref: "resize"
            }, this.$slots.default());
            var wrap = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
              "ref": "wrap",
              "style": style,
              "onScroll": this.handleScroll,
              "class": [this.wrapClass, "scrollbar__wrap", gutter ? "" : "scrollbar__wrap--hidden-default"]
            }, [[view]]);
            var nodes;
            if (!this.native) {
              nodes = [wrap, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(scrollbar_bar, {
                "move": this.moveX,
                "size": this.sizeWidth
              }, null), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(scrollbar_bar, {
                "vertical": true,
                "move": this.moveY,
                "size": this.sizeHeight
              }, null)];
            } else {
              nodes = [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("div", {
                "ref": "wrap",
                "class": [this.wrapClass, "scrollbar__wrap"],
                "style": style
              }, [[view]])];
            }
            return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["h"])("div", {
              class: "scrollbar"
            }, nodes);
          }
        };
        __webpack_require__(88);
        var scrollbar = scrollbarvue_type_script_lang_js;
        var toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_1 = {
          class: "v-md-editor__toc-nav"
        };
        var toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_2 = {
          class: "v-md-editor__toc-nav-title"
        };
        function toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("ul", toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_1, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.titles, function(item) {
            return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("li", {
              style: {
                paddingLeft: $props.indent * item.indent + "px"
              },
              onClick: function onClick($event) {
                return _ctx.$emit("nav-click", item);
              },
              class: "v-md-editor__toc-nav-item"
            }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("span", toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_hoisted_2, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(item.title), 1)], 12, ["onClick"]);
          }), 256))]);
        }
        var toc_navvue_type_script_lang_js = {
          name: "toc-nav",
          props: {
            titles: Array,
            indent: {
              type: Number,
              default: 16
            }
          },
          emits: ["nav-click"]
        };
        __webpack_require__(89);
        toc_navvue_type_script_lang_js.render = toc_navvue_type_template_id_035b0d52_bindings_titles_props_indent_props_render;
        var toc_nav = toc_navvue_type_script_lang_js;
        var common_components;
        var common = {
          inheritAttrs: false,
          components: (common_components = {}, common_components[preview["default"].name] = preview["default"], common_components[container.name] = container, common_components[scrollbar.name] = scrollbar, common_components[toc_nav.name] = toc_nav, common_components),
          provide: function provide() {
            return {
              markdownEditor: this
            };
          },
          props: {
            height: String,
            theme: Object,
            mode: {
              type: String,
              default: editor_mode["a"].EDITABLE
            },
            autofocus: Boolean,
            placeholder: String,
            tocNavPositionRight: Boolean,
            tabSize: {
              type: Number,
              default: 2
            },
            beforePreviewChange: {
              type: Function,
              default: function _default(text, next) {
                next(text);
              }
            }
          },
          emits: ["blur", "change", "save", "image-click"],
          data: function data() {
            return {
              currentMode: this.mode,
              uploadConfig: {}
            };
          },
          watch: {
            mode: function mode() {
              this.currentMode = this.mode;
            },
            currentMode: function currentMode() {
              if (this.currentMode === editor_mode["a"].EDITABLE && this.enableSyncScroll) {
                this.$nextTick(this.previewSyncScroll);
              }
            }
          },
          created: function created() {
            if (this.theme)
              this.$options.use(this.theme);
          },
          computed: {
            isPreviewMode: function isPreviewMode() {
              return this.currentMode === editor_mode["a"].PREVIEW;
            },
            isEditMode: function isEditMode() {
              return this.currentMode === editor_mode["a"].EDIT;
            }
          },
          mounted: function mounted() {
            if (this.autofocus) {
              this.$nextTick(this.setFocusEnd);
            }
          },
          methods: {
            setFocusEnd: function setFocusEnd() {
              this.editorFocusEnd();
              this.editorScrollToTop(9999);
              this.previewScrollTo(9999);
            },
            handleChange: function handleChange(text, html) {
              this.$emit("change", text, html);
            },
            handleBlur: function handleBlur(e) {
              this.$emit("blur", e);
            },
            handlePreviewImageClick: function handlePreviewImageClick(images, currentIndex) {
              this.$emit("image-click", images, currentIndex);
            },
            save: function save() {
              this.$emit("save", this.text, this.$refs.preview.html);
            },
            insert: function insert(getInsertContent) {
              var _this = this;
              this.focus();
              var currentSelectedStr = this.getCurrentSelectedStr();
              var _getInsertContent = getInsertContent(currentSelectedStr), selected = _getInsertContent.selected, text = _getInsertContent.text;
              this.replaceSelectionText(text);
              this.$nextTick(function() {
                _this.changeSelctionTo(text, selected);
              });
            }
          }
        };
        var v_model = {
          props: {
            modelValue: {
              type: String,
              default: ""
            }
          },
          emits: ["update:modelValue"],
          data: function data() {
            return {
              text: this.modelValue
            };
          },
          methods: {
            handleInput: function handleInput(val) {
              this.text = val;
              this.$emit("update:modelValue", val);
            }
          }
        };
        var fullscreen = {
          props: {
            defaultFullscreen: Boolean
          },
          emits: ["fullscreen-change"],
          data: function data() {
            return {
              fullscreen: false
            };
          },
          watch: {
            fullscreen: function fullscreen2() {
              this.$emit("fullscreen-change", this.fullscreen);
            }
          },
          mounted: function mounted() {
            window.addEventListener("keyup", this.handleWindowKeyup, false);
            if (this.defaultFullscreen) {
              this.toggleFullScreen();
            }
          },
          beforeUnmount: function beforeUnmount() {
            window.removeEventListener("keyup", this.handleWindowKeyup, false);
          },
          methods: {
            handleWindowKeyup: function handleWindowKeyup(e) {
              if (e.keyCode === 27 && this.fullscreen) {
                this.toggleFullScreen(false);
              }
            },
            toggleFullScreen: function toggleFullScreen(fullscreen2) {
              if (fullscreen2 === void 0) {
                fullscreen2 = !this.fullscreen;
              }
              this.fullscreen = fullscreen2;
              var _document$querySelect = document.querySelectorAll("html, body"), html = _document$querySelect[0], body = _document$querySelect[1];
              var overflow = this.fullscreen ? "hidden" : null;
              body.style.overflow = overflow;
              html.style.overflow = overflow;
            }
          }
        };
        function upload_filevue_type_template_id_e27464d6_bindings_uploadConfig_props_handleUpload_data_key_data_upload_options_chooseFile_options_render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("input", {
            type: "file",
            style: {
              "display": "none"
            },
            key: $data.key,
            accept: $props.uploadConfig.accept,
            multiple: $props.uploadConfig.multiple,
            onInput: _cache[1] || (_cache[1] = function() {
              return $data.handleUpload.apply($data, arguments);
            }),
            ref: "fileInput"
          }, null, 40, ["accept", "multiple"]);
        }
        var regenerator = __webpack_require__(10);
        var regenerator_default = /* @__PURE__ */ __webpack_require__.n(regenerator);
        var asyncToGenerator = __webpack_require__(17);
        var upload_filevue_type_script_lang_js = {
          name: "v-md-upload-file",
          props: {
            uploadConfig: Object
          },
          data: function data() {
            return {
              handleUpload: function handleUpload() {
              },
              key: 0
            };
          },
          methods: {
            upload: function upload() {
              var _this = this;
              return Object(asyncToGenerator["a"])(/* @__PURE__ */ regenerator_default.a.mark(function _callee() {
                var event;
                return regenerator_default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this.chooseFile();
                      case 2:
                        event = _context.sent;
                        return _context.abrupt("return", event);
                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();
            },
            chooseFile: function chooseFile() {
              var _this2 = this;
              return new Promise(function(resolve) {
                _this2.handleUpload = function(e) {
                  resolve(e);
                  _this2.key++;
                };
                _this2.$refs.fileInput.click();
              });
            }
          }
        };
        upload_filevue_type_script_lang_js.render = upload_filevue_type_template_id_e27464d6_bindings_uploadConfig_props_handleUpload_data_key_data_upload_options_chooseFile_options_render;
        var upload_file = upload_filevue_type_script_lang_js;
        var toolbar_image = __webpack_require__(23);
        var file = __webpack_require__(12);
        var command = __webpack_require__(1);
        var upload_image_components;
        var defaultConfig = {
          accept: "image/*",
          multiple: false
        };
        var upload_image = {
          components: (upload_image_components = {}, upload_image_components[upload_file.name] = upload_file, upload_image_components),
          props: {
            uploadImageConfig: Object
          },
          emits: ["upload-image"],
          computed: {
            uploadImgConfig: function uploadImgConfig() {
              return Object(esm_extends["a"])({}, defaultConfig, this.uploadImageConfig);
            },
            hasUploadImage: function hasUploadImage() {
              return !this.disabledMenus.includes(toolbar_image["default"].name + "/upload-image");
            }
          },
          methods: {
            handleDrop: function handleDrop(e) {
              var files = Object(file["a"])(e.dataTransfer.files, this.uploadImgConfig);
              this.emitUploadImage(e, files);
            },
            handlePaste: function handlePaste(e) {
              var clipboardData = e.clipboardData;
              if (!clipboardData)
                return;
              var files = Object(file["a"])(Object(file["b"])(clipboardData), this.uploadImgConfig);
              this.emitUploadImage(e, files);
            },
            emitUploadImage: function emitUploadImage(e, files) {
              var _this = this;
              if (this.hasUploadImage && files.length) {
                e.preventDefault();
                this.$emit("upload-image", e, function(imageConfig) {
                  _this.execCommand(command["l"], imageConfig);
                }, files);
              }
            }
          }
        };
        var markup = __webpack_require__(3);
        var sync_scroll = {
          data: function data() {
            return {
              enableSyncScroll: true
            };
          },
          methods: {
            toggleSyncScroll: function toggleSyncScroll(isEnable) {
              if (isEnable === void 0) {
                isEnable = !this.enableSyncScroll;
              }
              this.enableSyncScroll = isEnable;
              if (isEnable)
                this.previewSyncScroll();
            },
            previewSyncScroll: function previewSyncScroll() {
              if (this.isEditMode)
                return;
              var previewEl = this.$refs.preview.$el;
              var previewScrollerEl = this.$refs.previewScroller.$el;
              var previewLines = previewEl.querySelectorAll("[" + markup["c"] + "]");
              var _this$getScrollInfo = this.getScrollInfo(), editorClientHeight = _this$getScrollInfo.clientHeight, editorScrollTop = _this$getScrollInfo.top, editorScrollHeight = _this$getScrollInfo.height;
              var previewScrollWrapper = previewScrollerEl.querySelector(".scrollbar__wrap");
              if (editorClientHeight + editorScrollTop === editorScrollHeight) {
                var clientHeight = previewScrollWrapper.clientHeight;
                var scrollHeight = previewScrollWrapper.scrollHeight;
                this.previewScrollTo(scrollHeight - clientHeight);
              } else {
                var currentLine;
                var nextLine;
                for (var i = 0; i < previewLines.length; i++) {
                  var lineNumber = previewLines[i].getAttribute(markup["c"]);
                  var height = this.heightAtLine(lineNumber - 1, "local");
                  if (height < editorScrollTop) {
                    currentLine = lineNumber;
                  } else {
                    nextLine = lineNumber;
                    break;
                  }
                }
                var percent = 0;
                if (currentLine && nextLine && currentLine !== nextLine) {
                  var currentLineTop = this.heightAtLine(currentLine - 1, "local");
                  var nextLineTop = this.heightAtLine(nextLine - 1, "local");
                  percent = (editorScrollTop - currentLineTop) / (nextLineTop - currentLineTop);
                }
                var newLineTop = 0;
                var newNextLineTop = previewScrollWrapper.scrollHeight - previewScrollWrapper.clientHeight;
                if (currentLine) {
                  newLineTop = previewEl.querySelector("[" + markup["c"] + '="' + currentLine + '"]').offsetTop;
                }
                if (nextLine) {
                  newNextLineTop = previewEl.querySelector("[" + markup["c"] + '="' + nextLine + '"]').offsetTop;
                }
                var newScrollTop = newLineTop + (newNextLineTop - newLineTop) * percent;
                this.previewScrollTo(newScrollTop);
              }
            },
            handleEditorScroll: function handleEditorScroll() {
              if (!this.enableSyncScroll || this.ignoreSyncScroll)
                return;
              clearTimeout(this.scrollTimmer);
              this.scrollTimmer = setTimeout(this.previewSyncScroll, 60);
            }
          }
        };
        var mixins_toolbar = function(Component) {
          return {
            props: {
              leftToolbar: {
                type: String,
                default: "undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save"
              },
              rightToolbar: {
                type: String,
                default: "preview toc sync-scroll fullscreen"
              },
              toolbar: {
                type: Object,
                default: function _default() {
                  return {};
                }
              },
              disabledMenus: {
                type: Array,
                default: function _default() {
                  return ["image/upload-image"];
                }
              },
              toolbarConfig: {
                type: Object,
                default: function _default() {
                  return {};
                }
              }
            },
            created: function created() {
              var _this = this;
              var toolbars = Component.toolbars;
              this.toolbars = {};
              Object.keys(toolbars).forEach(function(name) {
                _this.registerToolbar(name, toolbars[name]);
              });
              Object.keys(this.toolbar).forEach(function(name) {
                _this.registerToolbar(name, _this.toolbar[name]);
              });
            },
            methods: {
              registerToolbar: function registerToolbar(name, config) {
                toolbar_registerToolbar(this.toolbars, name, config);
              },
              handleToolbarItemClick: function handleToolbarItemClick(toolbar2) {
                var _toolbar$menus;
                if (toolbar2.action && !((_toolbar$menus = toolbar2.menus) == null ? void 0 : _toolbar$menus.length) && typeof toolbar2.action === "function") {
                  toolbar2.action.call(toolbar2, this, this.toolbarConfig[toolbar2.name]);
                }
              },
              handleToolbarMenuClick: function handleToolbarMenuClick(menu2) {
                if (menu2.action && typeof menu2.action === "function") {
                  menu2.action.call(menu2, this, this.toolbarConfig[menu2.name]);
                }
              }
            }
          };
        };
        var mixins_command = function(Component) {
          return {
            created: function created() {
              var _this = this;
              var commands = Component.commands;
              this.commands = {};
              Object.keys(commands).forEach(function(name) {
                _this.registerCommand(name, commands[name]);
              });
            },
            methods: {
              registerCommand: function registerCommand(name, callback) {
                command_registerCommand(this.commands, name, callback);
              },
              execCommand: function execCommand(name) {
                var commandCallBack = this.commands[name];
                if (commandCallBack) {
                  for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    arg[_key - 1] = arguments[_key];
                  }
                  commandCallBack.apply(void 0, [this].concat(arg));
                } else {
                  console.error("Command not found: " + name);
                }
              }
            }
          };
        };
        var toc = {
          data: function data() {
            return {
              tocVisible: false,
              titles: []
            };
          },
          props: {
            includeLevel: {
              type: Array,
              default: function _default() {
                return [2, 3];
              }
            }
          },
          watch: {
            text: {
              immediate: true,
              handler: function handler(newval, oldVal) {
                if (typeof oldVal === "undefined") {
                  this.$nextTick(this.updateTocNav);
                  return;
                }
                if (this.updateTocNavTimmer)
                  clearTimeout(this.updateTocNavTimmer);
                this.updateTocNavTimmer = setTimeout(this.updateTocNav, 800);
              }
            }
          },
          computed: {
            anchorsSelector: function anchorsSelector() {
              return this.includeLevel.map(function(level) {
                return "h" + level;
              }).join(",");
            }
          },
          methods: {
            toggleToc: function toggleToc(visible) {
              if (visible === void 0) {
                visible = !this.tocVisible;
              }
              this.tocVisible = visible;
            },
            updateTocNav: function updateTocNav() {
              var _this$$refs$preview;
              var previewEl = (_this$$refs$preview = this.$refs.preview) == null ? void 0 : _this$$refs$preview.$el;
              if (!previewEl)
                return;
              var anchors = previewEl.querySelectorAll(this.anchorsSelector);
              var titles = Array.from(anchors).filter(function(title) {
                return !!title.innerText.trim();
              });
              if (!titles.length) {
                this.titles = [];
                return;
              }
              var hTags = Array.from(new Set(titles.map(function(title) {
                return title.tagName;
              }))).sort();
              this.titles = titles.map(function(el) {
                return {
                  title: el.innerText,
                  lineIndex: el.getAttribute(markup["c"]),
                  indent: hTags.indexOf(el.tagName)
                };
              });
            },
            handleNavClick: function handleNavClick(_ref) {
              var lineIndex = _ref.lineIndex;
              this.scrollToLine(lineIndex);
            }
          }
        };
        var mixins_scroll = {
          props: {
            previewScrollContainer: Function
          },
          computed: {
            getPreviewScrollContainer: function getPreviewScrollContainer() {
              var _this = this;
              return function() {
                var previewScrollContainer = _this.$refs.previewScroller.$el.querySelector(".scrollbar__wrap");
                var defaultContainer = _this.isPreviewMode ? window : previewScrollContainer;
                return _this.previewScrollContainer ? _this.previewScrollContainer() : defaultContainer;
              };
            }
          },
          methods: {
            previewScrollTo: function previewScrollTo(scrollTop) {
              this.$refs.previewScroller.scrollTo(scrollTop);
            },
            scrollToLine: function scrollToLine(lineIndex) {
              var _this2 = this;
              if (!this.isPreviewMode) {
                this.editorScrollToLine(lineIndex);
              }
              if (!this.isEditMode) {
                this.ignoreSyncScroll = true;
                this.previewScrollToLine({
                  lineIndex,
                  onScrollEnd: function onScrollEnd() {
                    _this2.ignoreSyncScroll = false;
                  }
                });
              }
            },
            editorScrollToLine: function editorScrollToLine(lineIndex) {
              var offsetTop = this.heightAtLine(lineIndex - 1, "local");
              this.editorScrollToTop(offsetTop);
            },
            previewScrollToTarget: function previewScrollToTarget() {
              var _this$$refs$preview;
              (_this$$refs$preview = this.$refs.preview).scrollToTarget.apply(_this$$refs$preview, arguments);
            },
            previewScrollToLine: function previewScrollToLine(_ref) {
              var lineIndex = _ref.lineIndex, onScrollEnd = _ref.onScrollEnd;
              this.$refs.preview.scrollToLine({
                lineIndex,
                onScrollEnd
              });
            }
          }
        };
        var defaultHotkeys = {};
        Object(util["c"])(defaultHotkeys, __webpack_require__(90));
        var hotkeys = function(Component) {
          return {
            mounted: function mounted() {
              var _this = this;
              if (this.isPreviewMode)
                return;
              var hotkeys2 = Component.hotkeys;
              Object.keys(defaultHotkeys).forEach(function(key) {
                _this.registerHotkeys(defaultHotkeys[key].default);
              });
              hotkeys2.forEach(function(config) {
                _this.registerHotkeys(config);
              });
            },
            methods: {
              registerHotkeys: function registerHotkeys(_ref) {
                var _this2 = this;
                var modifier = _ref.modifier, key = _ref.key, _action = _ref.action, _ref$preventDefault = _ref.preventDefault, preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault;
                this.editorRegisterHotkeys({
                  modifier,
                  key,
                  preventDefault,
                  action: function action() {
                    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                      arg[_key] = arguments[_key];
                    }
                    return _action.apply(void 0, [_this2].concat(arg));
                  }
                });
              }
            }
          };
        };
        var ol = /^\s*([\d]+\.)( \[[ xX]])? /;
        var ul = /^\s*([-*])( \[[ xX]])? /;
        var ulSyntax = /([*-] |[\d]+\. )/;
        var olSyntax = /([\d])+\.( \[[ xX]])? /;
        var list = {
          mounted: function mounted() {
            var _this = this;
            if (this.isPreviewMode)
              return;
            this.registerHotkeys({
              key: "enter",
              preventDefault: false,
              action: function action(editor, e) {
                if (e.isComposing)
                  return;
                var cursorLineLeftText = _this.getCursorLineLeftText();
                var suffix;
                var syntax;
                if (ol.test(cursorLineLeftText)) {
                  suffix = "x. ";
                  syntax = olSyntax;
                  e.preventDefault();
                } else if (ul.test(cursorLineLeftText)) {
                  suffix = "- ";
                  syntax = ulSyntax;
                  e.preventDefault();
                } else {
                  return;
                }
                var indent = cursorLineLeftText.search(syntax);
                var suffixIndex = indent + suffix.length;
                var beforeText = cursorLineLeftText.slice(0, suffixIndex);
                var content = cursorLineLeftText.slice(suffixIndex, cursorLineLeftText.length);
                if (content) {
                  if (suffix === "x. ") {
                    beforeText = beforeText.replace(/(\d+)/, window.parseInt(beforeText) + 1);
                  }
                  _this.replaceSelectionText("\n" + beforeText, "end");
                }
              }
            });
          }
        };
        var mixins_lang = {
          computed: {
            langConfig: function langConfig() {
              var lang = this.$options.lang.config;
              return lang.langConfig[lang.lang];
            }
          }
        };
        var create_editor_lang = new utils_lang["a"]({
          afterUse: function afterUse(lang) {
            preview["default"].vMdParser.lang.config.lang = lang;
          }
        });
        create_editor_lang.config = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["reactive"])(create_editor_lang.config);
        create_editor_lang.add({
          "zh-CN": zh_CN
        });
        function createEditor(component) {
          commandWrapper(component);
          toolbarWrapper(component);
          component.name = "v-md-editor";
          component.lang = create_editor_lang;
          component.vMdParser = preview["default"].vMdParser;
          component.Preview = preview["default"];
          component.hotkeys = [];
          component.hotkey = function(config) {
            component.hotkeys.push(config);
          };
          component.mixins = [common, v_model, mixins_toolbar(component), mixins_command(component), hotkeys(component), fullscreen, upload_image, sync_scroll, toc, mixins_scroll, list, mixins_lang];
        }
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        var keyCodesToName = {
          48: 0,
          49: 1,
          50: 2,
          51: 3,
          52: 4,
          53: 5,
          54: 6,
          55: 7,
          56: 8,
          57: 9,
          65: "a",
          66: "b",
          67: "c",
          68: "d",
          69: "e",
          70: "f",
          71: "g",
          72: "h",
          73: "i",
          74: "j",
          75: "k",
          76: "l",
          77: "m",
          78: "n",
          79: "o",
          80: "p",
          81: "q",
          82: "r",
          83: "s",
          84: "t",
          85: "u",
          86: "v",
          87: "w",
          88: "x",
          89: "y",
          90: "z",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12"
        };
        var keyNames = {
          esc: ["Esc", "Escape"],
          tab: "Tab",
          enter: "Enter",
          space: [" ", "Spacebar"],
          up: ["Up", "ArrowUp"],
          left: ["Left", "ArrowLeft"],
          right: ["Right", "ArrowRight"],
          down: ["Down", "ArrowDown"],
          delete: ["Backspace", "Delete", "Del"]
        };
        var hotkeys_Hotkeys = /* @__PURE__ */ function() {
          function Hotkeys() {
            this.hotkeys = {
              ctrl: {},
              shift: {},
              ctrlAlt: {},
              ctrlShift: {},
              keys: {}
            };
          }
          var _proto = Hotkeys.prototype;
          _proto.dispatch = function dispatch(e) {
            var keyName = this.getKeyName(e).toLowerCase();
            var opt;
            if (!keyName)
              return;
            if (this.isKeyEnterExact(e)) {
              opt = this.hotkeys.keys[keyName];
            } else if (this.isCtrlEnterExact(e)) {
              opt = this.hotkeys.ctrl[keyName];
            } else if (this.isShiftEnterExact(e)) {
              opt = this.hotkeys.shift[keyName];
            } else if (this.isCtrlAltEnterExact(e)) {
              opt = this.hotkeys.ctrlAlt[keyName];
            } else if (this.isCtrlShiftEnterExact(e)) {
              opt = this.hotkeys.ctrlShift[keyName];
            }
            if (opt) {
              var _opt = opt, action = _opt.action, preventDefault = _opt.preventDefault;
              if (preventDefault)
                e.preventDefault();
              action(e);
            }
          };
          _proto.isKeyEnterExact = function isKeyEnterExact(e) {
            return !this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
          };
          _proto.isCtrlShiftEnterExact = function isCtrlShiftEnterExact(e) {
            return this.isCtrlEnter(e) && this.isShiftEnter(e) && !this.isAltEnter(e);
          };
          _proto.isCtrlAltEnterExact = function isCtrlAltEnterExact(e) {
            return this.isCtrlEnter(e) && this.isAltEnter(e) && !this.isShiftEnter(e);
          };
          _proto.isCtrlEnterExact = function isCtrlEnterExact(e) {
            return this.isCtrlEnter(e) && !this.isShiftEnter(e) && !this.isAltEnter(e);
          };
          _proto.isShiftEnterExact = function isShiftEnterExact(e) {
            return this.isShiftEnter(e) && !this.isCtrlEnter(e) && !this.isAltEnter(e);
          };
          _proto.isCtrlEnter = function isCtrlEnter(e) {
            return e.ctrlKey || e.metaKey;
          };
          _proto.isShiftEnter = function isShiftEnter(e) {
            return e.shiftKey;
          };
          _proto.isAltEnter = function isAltEnter(e) {
            return e.altKey;
          };
          _proto.registerHotkeys = function registerHotkeys(_ref) {
            var modifier = _ref.modifier, key = _ref.key, _ref$preventDefault = _ref.preventDefault, preventDefault = _ref$preventDefault === void 0 ? true : _ref$preventDefault, action = _ref.action;
            if (modifier) {
              this.hotkeys[modifier][key] = {
                preventDefault,
                action
              };
            } else {
              this.hotkeys.keys[key] = {
                preventDefault,
                action
              };
            }
          };
          _proto.getKeyName = function getKeyName(e) {
            var key = e.key, keyCode = e.keyCode;
            if (key !== void 0) {
              var keyName = Object.keys(keyNames).find(function(keyName2) {
                var validNames = keyNames[keyName2];
                return typeof validNames === "string" ? validNames === key : validNames.indexOf(key) !== -1;
              });
              return keyName || key;
            }
            return keyCodesToName[keyCode];
          };
          return Hotkeys;
        }();
        __webpack_exports__["a"] = hotkeys_Hotkeys;
      },
      function(module2, exports2, __webpack_require__) {
        var runtime = function(exports3) {
          var Op = Object.prototype;
          var hasOwn = Op.hasOwnProperty;
          var undefined$1;
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
            return obj[key];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function(obj, key, value) {
              return obj[key] = value;
            };
          }
          function wrap(innerFn, outerFn, self2, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
            var generator = Object.create(protoGenerator.prototype);
            var context = new Context(tryLocsList || []);
            generator._invoke = makeInvokeMethod(innerFn, self2, context);
            return generator;
          }
          exports3.wrap = wrap;
          function tryCatch(fn, obj, arg) {
            try {
              return { type: "normal", arg: fn.call(obj, arg) };
            } catch (err) {
              return { type: "throw", arg: err };
            }
          }
          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";
          var ContinueSentinel = {};
          function Generator() {
          }
          function GeneratorFunction() {
          }
          function GeneratorFunctionPrototype() {
          }
          var IteratorPrototype = {};
          IteratorPrototype[iteratorSymbol] = function() {
            return this;
          };
          var getProto = Object.getPrototypeOf;
          var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
            IteratorPrototype = NativeIteratorPrototype;
          }
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function(method) {
              define(prototype, method, function(arg) {
                return this._invoke(method, arg);
              });
            });
          }
          exports3.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };
          exports3.mark = function(genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              define(genFun, toStringTagSymbol, "GeneratorFunction");
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };
          exports3.awrap = function(arg) {
            return { __await: arg };
          };
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                  return PromiseImpl.resolve(value.__await).then(function(value2) {
                    invoke("next", value2, resolve, reject);
                  }, function(err) {
                    invoke("throw", err, resolve, reject);
                  });
                }
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                  result.value = unwrapped;
                  resolve(result);
                }, function(error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
            }
            var previousPromise;
            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            this._invoke = enqueue;
          }
          defineIteratorMethods(AsyncIterator.prototype);
          AsyncIterator.prototype[asyncIteratorSymbol] = function() {
            return this;
          };
          exports3.AsyncIterator = AsyncIterator;
          exports3.async = function(innerFn, outerFn, self2, tryLocsList, PromiseImpl) {
            if (PromiseImpl === void 0)
              PromiseImpl = Promise;
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self2, tryLocsList), PromiseImpl);
            return exports3.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
          };
          function makeInvokeMethod(innerFn, self2, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }
              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }
                return doneResult();
              }
              context.method = method;
              context.arg = arg;
              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel)
                      continue;
                    return delegateResult;
                  }
                }
                if (context.method === "next") {
                  context.sent = context._sent = context.arg;
                } else if (context.method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw context.arg;
                  }
                  context.dispatchException(context.arg);
                } else if (context.method === "return") {
                  context.abrupt("return", context.arg);
                }
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self2, context);
                if (record.type === "normal") {
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                  if (record.arg === ContinueSentinel) {
                    continue;
                  }
                  return {
                    value: record.arg,
                    done: context.done
                  };
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  context.method = "throw";
                  context.arg = record.arg;
                }
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (method === undefined$1) {
              context.delegate = null;
              if (context.method === "throw") {
                if (delegate.iterator["return"]) {
                  context.method = "return";
                  context.arg = undefined$1;
                  maybeInvokeDelegate(delegate, context);
                  if (context.method === "throw") {
                    return ContinueSentinel;
                  }
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if (record.type === "throw") {
              context.method = "throw";
              context.arg = record.arg;
              context.delegate = null;
              return ContinueSentinel;
            }
            var info = record.arg;
            if (!info) {
              context.method = "throw";
              context.arg = new TypeError("iterator result is not an object");
              context.delegate = null;
              return ContinueSentinel;
            }
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
              if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined$1;
              }
            } else {
              return info;
            }
            context.delegate = null;
            return ContinueSentinel;
          }
          defineIteratorMethods(Gp);
          define(Gp, toStringTagSymbol, "Generator");
          Gp[iteratorSymbol] = function() {
            return this;
          };
          Gp.toString = function() {
            return "[object Generator]";
          };
          function pushTryEntry(locs) {
            var entry = { tryLoc: locs[0] };
            if (1 in locs) {
              entry.catchLoc = locs[1];
            }
            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{ tryLoc: "root" }];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }
          exports3.keys = function(object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();
            return function next() {
              while (keys.length) {
                var key2 = keys.pop();
                if (key2 in object) {
                  next.value = key2;
                  next.done = false;
                  return next;
                }
              }
              next.done = true;
              return next;
            };
          };
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }
              if (typeof iterable.next === "function") {
                return iterable;
              }
              if (!isNaN(iterable.length)) {
                var i = -1, next = function next2() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next2.value = iterable[i];
                      next2.done = false;
                      return next2;
                    }
                  }
                  next2.value = undefined$1;
                  next2.done = true;
                  return next2;
                };
                return next.next = next;
              }
            }
            return { next: doneResult };
          }
          exports3.values = values;
          function doneResult() {
            return { value: undefined$1, done: true };
          }
          Context.prototype = {
            constructor: Context,
            reset: function(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              this.sent = this._sent = undefined$1;
              this.done = false;
              this.delegate = null;
              this.method = "next";
              this.arg = undefined$1;
              this.tryEntries.forEach(resetTryEntry);
              if (!skipTempReset) {
                for (var name in this) {
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined$1;
                  }
                }
              }
            },
            stop: function() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }
              return this.rval;
            },
            dispatchException: function(exception) {
              if (this.done) {
                throw exception;
              }
              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                  context.method = "next";
                  context.arg = undefined$1;
                }
                return !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") {
                  return handle("end");
                }
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                finallyEntry = null;
              }
              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;
              if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
              }
              return this.complete(record);
            },
            complete: function(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }
              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }
              return ContinueSentinel;
            },
            finish: function(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            "catch": function(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName,
                nextLoc
              };
              if (this.method === "next") {
                this.arg = undefined$1;
              }
              return ContinueSentinel;
            }
          };
          return exports3;
        }(module2.exports);
        try {
          regeneratorRuntime = runtime;
        } catch (accidentalStrictMode) {
          Function("r", "regeneratorRuntime = r")(runtime);
        }
      },
      function(module2, exports2, __webpack_require__) {
        var map = {
          "./bold.js": 39,
          "./clear.js": 40,
          "./code.js": 41,
          "./fullscreen.js": 42,
          "./h1.js": 43,
          "./h2.js": 44,
          "./h3.js": 45,
          "./h4.js": 46,
          "./h5.js": 47,
          "./h6.js": 48,
          "./hr.js": 49,
          "./image.js": 50,
          "./italic.js": 51,
          "./link.js": 52,
          "./ol.js": 53,
          "./quote.js": 54,
          "./redo.js": 55,
          "./strikethrough.js": 56,
          "./sync-scroll.js": 57,
          "./table.js": 58,
          "./ul.js": 59,
          "./undo.js": 60
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module2.exports = webpackContext;
        webpackContext.id = 38;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["a"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "**";
            var suffix = "**";
            var placeholder = editor.langConfig.bold.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return "" + prefix + selectedGetter(selected2) + suffix;
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["b"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.clear();
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["c"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "``` language";
            var suffix = "```";
            var text = prefix + "\n" + suffix;
            if (selected) {
              text = prefix + "\n  " + selected + "\n" + suffix;
            }
            return {
              text,
              selected: "language"
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["d"];
        });
        __webpack_exports__["default"] = function(editor, fullScreen) {
          editor.toggleFullScreen(fullScreen);
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["e"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "#";
            var placeholder = editor.langConfig.h1.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return prefix + " " + selectedGetter(selected2);
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["f"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "##";
            var placeholder = editor.langConfig.h2.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return prefix + " " + selectedGetter(selected2);
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["g"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "###";
            var placeholder = editor.langConfig.h3.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return prefix + " " + selectedGetter(selected2);
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["h"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "####";
            var placeholder = editor.langConfig.h4.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return prefix + " " + selectedGetter(selected2);
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["i"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "#####";
            var placeholder = editor.langConfig.h5.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return prefix + " " + selectedGetter(selected2);
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["j"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "######";
            var placeholder = editor.langConfig.h6.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return prefix + " " + selectedGetter(selected2);
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["k"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function() {
            return {
              text: "------------------------------------"
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["l"];
        });
        __webpack_exports__["default"] = function(editor, _temp) {
          var _ref = _temp === void 0 ? {} : _temp, url = _ref.url, desc = _ref.desc, width = _ref.width, height = _ref.height;
          editor.insert(function() {
            var urlPlaceholder = "http://";
            var descPlaceholder = "Description";
            var selected = urlPlaceholder;
            var text = "![" + (desc || descPlaceholder) + "](" + (url || urlPlaceholder) + ")";
            var style = [];
            if (width) {
              style.push('width="' + width + '"');
            }
            if (height) {
              style.push('height="' + height + '"');
            }
            if (style.length) {
              text += "{{{" + style.join(" ") + "}}}";
            }
            if (url && desc) {
              selected = null;
            } else if (url) {
              selected = descPlaceholder;
            } else if (desc) {
              selected = urlPlaceholder;
            }
            return {
              text,
              selected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["m"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "*";
            var suffix = "*";
            var placeholder = editor.langConfig.italic.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return "" + prefix + selectedGetter(selected2) + suffix;
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["n"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var descPlaceholder = editor.langConfig.link.descPlaceholder;
            var linkPlaceholder = "http://";
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return "[" + (selected2 || descPlaceholder) + "](" + linkPlaceholder + ")";
              },
              selectedGetter: function selectedGetter(selected2) {
                return selected2 ? linkPlaceholder : descPlaceholder;
              }
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["o"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var placeholder = editor.langConfig.ol.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2, rowIndex) {
                return rowIndex + ". " + selectedGetter(selected2);
              },
              selectedGetter,
              ignoreEmptyLine: false
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["p"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = ">";
            var content = selected || editor.langConfig.quote.placeholder;
            return {
              text: prefix + " " + content,
              selected: content
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["q"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.redo();
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["r"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var prefix = "~~";
            var suffix = "~~";
            var placeholder = editor.langConfig.strikethrough.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return "" + prefix + selectedGetter(selected2) + suffix;
              },
              selectedGetter
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["s"];
        });
        __webpack_exports__["default"] = function(editor, isEnable) {
          editor.toggleSyncScroll(isEnable);
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["t"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function() {
            var content = "|column1|column2|column3|\n|-|-|-|\n|content1|content2|content3|";
            return {
              text: content,
              selected: "column1"
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_1__["u"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.insert(function(selected) {
            var placeholder = editor.langConfig.ul.placeholder;
            var selectedGetter = function selectedGetter2(selected2) {
              return selected2 || placeholder;
            };
            var _generatorText = Object(_utils_util__WEBPACK_IMPORTED_MODULE_0__["b"])({
              selected,
              InsertGetter: function InsertGetter(selected2) {
                return "- " + selectedGetter(selected2);
              },
              selectedGetter,
              ignoreEmptyLine: false
            }), insertContent = _generatorText.insertContent, newSelected = _generatorText.newSelected;
            return {
              text: insertContent,
              selected: newSelected
            };
          });
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_require__.d(__webpack_exports__, "name", function() {
          return _utils_constants_command_js__WEBPACK_IMPORTED_MODULE_0__["v"];
        });
        __webpack_exports__["default"] = function(editor) {
          editor.undo();
        };
      },
      function(module2, exports2, __webpack_require__) {
        var map = {
          "./bold.js": 62,
          "./clear.js": 63,
          "./code.js": 64,
          "./fullscreen.js": 65,
          "./h.js": 66,
          "./hr.js": 67,
          "./image.js": 23,
          "./italic.js": 68,
          "./link.js": 69,
          "./ol.js": 70,
          "./preview.js": 71,
          "./quote.js": 72,
          "./redo.js": 73,
          "./save.js": 74,
          "./strikethrough.js": 75,
          "./sync-scroll.js": 76,
          "./table.js": 77,
          "./toc.js": 78,
          "./ul.js": 79,
          "./undo.js": 80
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module2.exports = webpackContext;
        webpackContext.id = 61;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["a"],
          icon: "v-md-icon-bold",
          title: function title(editor) {
            return editor.langConfig.bold.toolbar + "\uFF08Ctrl+B\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["a"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["b"],
          icon: "v-md-icon-clear",
          title: function title(editor) {
            return editor.langConfig.clear.toolbar;
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["b"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["c"],
          icon: "v-md-icon-code",
          title: function title(editor) {
            return editor.langConfig.code.toolbar;
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["c"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["d"],
          icon: "v-md-icon-fullscreen",
          title: function title(editor) {
            var fullscreenLang = editor.langConfig.fullscreen;
            return editor.fullscreen ? fullscreenLang.disabled : fullscreenLang.enabled;
          },
          active: function active(editor) {
            return editor.fullscreen;
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["d"], !editor.fullscreen);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: "h",
          text: "H",
          title: function title(editor) {
            return editor.langConfig.h.toolbar + "\uFF08Ctrl+1~6\uFF09";
          },
          menus: [{
            name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["e"],
            text: function text(editor) {
              return editor.langConfig.h1.toolbar;
            },
            action: function action(editor) {
              editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["e"]);
            }
          }, {
            name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["f"],
            text: function text(editor) {
              return editor.langConfig.h2.toolbar;
            },
            action: function action(editor) {
              editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["f"]);
            }
          }, {
            name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["g"],
            text: function text(editor) {
              return editor.langConfig.h3.toolbar;
            },
            action: function action(editor) {
              editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["g"]);
            }
          }, {
            name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["h"],
            text: function text(editor) {
              return editor.langConfig.h4.toolbar;
            },
            action: function action(editor) {
              editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["h"]);
            }
          }, {
            name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["i"],
            text: function text(editor) {
              return editor.langConfig.h5.toolbar;
            },
            action: function action(editor) {
              editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["i"]);
            }
          }, {
            name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["j"],
            text: function text(editor) {
              return editor.langConfig.h6.toolbar;
            },
            action: function action(editor) {
              editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["j"]);
            }
          }]
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["k"],
          icon: "v-md-icon-horizontal",
          title: function title(editor) {
            return editor.langConfig.hr.toolbar;
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["k"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["m"],
          icon: "v-md-icon-italic",
          title: function title(editor) {
            return editor.langConfig.italic.toolbar + "\uFF08Ctrl+I\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["m"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["n"],
          icon: "v-md-icon-link",
          title: function title(editor) {
            return editor.langConfig.link.toolbar + "\uFF08Ctrl+L\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["n"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["o"],
          icon: "v-md-icon-ol",
          title: function title(editor) {
            return editor.langConfig.ol.toolbar + "\uFF08Ctrl+O\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["o"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
        __webpack_exports__["default"] = {
          name: "preview",
          icon: "v-md-icon-preview",
          title: function title(editor) {
            var previewLang = editor.langConfig.preview;
            return editor.currentMode === _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__["a"].EDITABLE ? previewLang.disabled : previewLang.enabled;
          },
          active: function active(editor) {
            return editor.currentMode === _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__["a"].EDITABLE;
          },
          action: function action(editor) {
            editor.currentMode = editor.currentMode === _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__["a"].EDITABLE ? _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__["a"].EDIT : _utils_constants_editor_mode__WEBPACK_IMPORTED_MODULE_0__["a"].EDITABLE;
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["p"],
          icon: "v-md-icon-quote",
          title: function title(editor) {
            return editor.langConfig.quote.toolbar + "\uFF08Ctrl+Q\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["p"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["q"],
          icon: "v-md-icon-redo",
          title: function title(editor) {
            return editor.langConfig.redo.toolbar + "\uFF08Ctrl+Y\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["q"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = {
          name: "save",
          icon: "v-md-icon-save",
          title: function title(editor) {
            return editor.langConfig.save.toolbar + "\uFF08Ctrl+S\uFF09";
          },
          action: function action(editor) {
            editor.save();
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["r"],
          icon: "v-md-icon-strikethrough",
          title: function title(editor) {
            return editor.langConfig.strikethrough.toolbar;
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["r"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["s"],
          icon: "v-md-icon-sync",
          title: function title(editor) {
            var syncScrollLang = editor.langConfig.syncScroll;
            return editor.enableSyncScroll ? syncScrollLang.disabled : syncScrollLang.enabled;
          },
          active: function active(editor) {
            return editor.enableSyncScroll;
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["s"], !editor.enableSyncScroll);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["t"],
          icon: "v-md-icon-table",
          title: function title(editor) {
            return editor.langConfig.table.toolbar;
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["t"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = {
          name: "toc",
          icon: "v-md-icon-toc",
          title: function title(editor) {
            var tocLang = editor.langConfig.toc;
            return editor.tocVisible ? tocLang.disabled : tocLang.enabled;
          },
          active: function active(editor) {
            return editor.tocVisible;
          },
          action: function action(editor) {
            editor.toggleToc();
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["u"],
          icon: "v-md-icon-ul",
          title: function title(editor) {
            return editor.langConfig.ul.toolbar + "\uFF08Ctrl+U\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["u"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          name: _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["v"],
          icon: "v-md-icon-undo",
          title: function title(editor) {
            return editor.langConfig.undo.toolbar + "\uFF08Ctrl+Z\uFF09";
          },
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["v"]);
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(27);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(28);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(29);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(30);
      },
      function(module2, exports2) {
        var g;
        g = function() {
          return this;
        }();
        try {
          g = g || new Function("return this")();
        } catch (e) {
          if (typeof window === "object")
            g = window;
        }
        module2.exports = g;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(31);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(32);
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(33);
      },
      function(module2, exports2, __webpack_require__) {
        var map = {
          "./bold.js": 91,
          "./h1.js": 92,
          "./h2.js": 93,
          "./h3.js": 94,
          "./h4.js": 95,
          "./h5.js": 96,
          "./h6.js": 97,
          "./italic.js": 98,
          "./link.js": 99,
          "./ol.js": 100,
          "./quote.js": 101,
          "./save.js": 102,
          "./ul.js": 103
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = "MODULE_NOT_FOUND";
            throw e;
          }
          return map[req];
        }
        webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        };
        webpackContext.resolve = webpackContextResolve;
        module2.exports = webpackContext;
        webpackContext.id = 90;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "b",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["a"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "1",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["e"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "2",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["f"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "3",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["g"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "4",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["h"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "5",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["i"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "6",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["j"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "i",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["m"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "l",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["n"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "o",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["o"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "q",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["p"]);
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "s",
          action: function action(editor) {
            editor.save();
          }
        };
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_constants_command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
        __webpack_exports__["default"] = {
          modifier: "ctrl",
          key: "u",
          action: function action(editor) {
            editor.execCommand(_utils_constants_command__WEBPACK_IMPORTED_MODULE_0__["u"]);
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
      },
      ,
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__(104);
      },
      ,
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_ = __webpack_require__(0);
        function render(_ctx, _cache, $props, $setup, $data, $options) {
          var _component_toc_nav = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("toc-nav");
          var _component_scrollbar = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("scrollbar");
          var _component_v_md_textarea_editor = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-textarea-editor");
          var _component_v_md_preview = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-preview");
          var _component_v_md_upload_file = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-upload-file");
          var _component_v_md_container = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["resolveComponent"])("v-md-container");
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_container, {
            "left-toolbar": _ctx.leftToolbar,
            "right-toolbar": _ctx.rightToolbar,
            toolbars: _ctx.toolbars,
            "disabled-menus": _ctx.disabledMenus,
            height: _ctx.height,
            fullscreen: _ctx.fullscreen,
            "left-area-visible": _ctx.tocVisible,
            "left-area-title": _ctx.langConfig.toc.title,
            "left-area-reverse": _ctx.tocNavPositionRight,
            mode: _ctx.currentMode,
            onEditorWrapperClick: _ctx.handleEditorWrapperClick,
            onToolbarItemClick: _ctx.handleToolbarItemClick,
            onToolbarMenuClick: _ctx.handleToolbarMenuClick,
            ref: "contaner"
          }, {
            "left-area": Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
              return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_scrollbar, null, {
                default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
                  return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_toc_nav, {
                    titles: _ctx.titles,
                    onNavClick: _ctx.handleNavClick
                  }, null, 8, ["titles", "onNavClick"])];
                }),
                _: 1
              })];
            }),
            editor: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
              return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_scrollbar, {
                onScroll: _ctx.handleEditorScroll,
                ref: "editorScroller"
              }, {
                default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
                  return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_v_md_textarea_editor, {
                    "model-value": _ctx.text,
                    "min-height": _ctx.textEditorMinHeight,
                    placeholder: _ctx.placeholder,
                    "onUpdate:modelValue": _ctx.handleInput,
                    onClick: _cache[1] || (_cache[1] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
                    }, ["stop"])),
                    onDrop: _ctx.handleDrop,
                    onPaste: _ctx.handlePaste,
                    onBlur: _ctx.handleBlur,
                    ref: "editorEgine"
                  }, null, 8, ["model-value", "min-height", "placeholder", "onUpdate:modelValue", "onDrop", "onPaste", "onBlur"])];
                }),
                _: 1
              }, 8, ["onScroll"])];
            }),
            preview: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
              return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_scrollbar, {
                ref: "previewScroller"
              }, {
                default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
                  return [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])(_component_v_md_preview, {
                    text: _ctx.text,
                    "tab-size": _ctx.tabSize,
                    "scroll-container": _ctx.getPreviewScrollContainer,
                    "before-change": _ctx.beforePreviewChange,
                    onChange: _ctx.handleChange,
                    onImageClick: _ctx.handlePreviewImageClick,
                    ref: "preview"
                  }, null, 8, ["text", "tab-size", "scroll-container", "before-change", "onChange", "onImageClick"])];
                }),
                _: 1
              }, 512)];
            }),
            default: Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withCtx"])(function() {
              return [_ctx.hasUploadImage ? (Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(_component_v_md_upload_file, {
                key: 0,
                "upload-config": _ctx.uploadConfig,
                ref: "uploadFile"
              }, null, 8, ["upload-config"])) : Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createCommentVNode"])("v-if", true)];
            }),
            _: 1
          }, 8, ["left-toolbar", "right-toolbar", "toolbars", "disabled-menus", "height", "fullscreen", "left-area-visible", "left-area-title", "left-area-reverse", "mode", "onEditorWrapperClick", "onToolbarItemClick", "onToolbarMenuClick"]);
        }
        var regenerator = __webpack_require__(10);
        var regenerator_default = /* @__PURE__ */ __webpack_require__.n(regenerator);
        var asyncToGenerator = __webpack_require__(17);
        var _hoisted_1 = {
          class: "v-md-textarea-editor"
        };
        var _hoisted_2 = /* @__PURE__ */ Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("br", null, null, -1);
        function textarea_editorvue_type_template_id_31fed1ea_bindings_modelValue_props_minHeight_props_placeholder_props_historyDebounce_props_historyMax_props_isComposing_data_textareaEl_options_handleCompositionStart_options_handleCompositionUpdate_options_handleCompositionEnd_options_handlePaste_options_handleBlur_options_registerHotkeys_options_handleKeydown_options_heightAtLine_options_clearTimeout_options_updateCurrentHistoryRange_options_handleInput_options_saveHistory_options_updateHistory_options_goHistory_options_getRange_options_setRange_options_focus_options_insertText_options_undo_options_redo_options_render(_ctx, _cache, $props, $setup, $data, $options) {
          return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("div", _hoisted_1, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("pre", {
            style: {
              minHeight: $props.minHeight
            }
          }, [(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(true), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["Fragment"], null, Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["renderList"])($props.modelValue.split("\n"), function(row, idx) {
            return Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["openBlock"])(), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createBlock"])("section", {
              "data-line": idx + 1
            }, [Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createTextVNode"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["toDisplayString"])(row || " "), 1), _hoisted_2], 8, ["data-line"]);
          }), 256))], 4), Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["createVNode"])("textarea", {
            ref: "textarea",
            value: $props.modelValue,
            placeholder: $props.placeholder,
            spellcheck: "false",
            onCompositionstart: _cache[1] || (_cache[1] = function() {
              return $options.handleCompositionStart.apply($options, arguments);
            }),
            onCompositionupdate: _cache[2] || (_cache[2] = function() {
              return $options.handleCompositionUpdate.apply($options, arguments);
            }),
            onCompositionend: _cache[3] || (_cache[3] = function() {
              return $options.handleCompositionEnd.apply($options, arguments);
            }),
            onInput: _cache[4] || (_cache[4] = function() {
              return $options.handleInput.apply($options, arguments);
            }),
            onClick: _cache[5] || (_cache[5] = function() {
              return $options.updateCurrentHistoryRange.apply($options, arguments);
            }),
            onPaste: _cache[6] || (_cache[6] = function() {
              return $options.handlePaste.apply($options, arguments);
            }),
            onBlur: _cache[7] || (_cache[7] = function() {
              return $options.handleBlur.apply($options, arguments);
            }),
            onKeydown: [_cache[8] || (_cache[8] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
            }, ["prevent"]), ["tab"])), _cache[9] || (_cache[9] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.undo.apply($options, arguments);
            }, ["ctrl", "prevent", "exact"]), ["z"])), _cache[10] || (_cache[10] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.undo.apply($options, arguments);
            }, ["meta", "prevent", "exact"]), ["z"])), _cache[11] || (_cache[11] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.redo.apply($options, arguments);
            }, ["ctrl", "prevent", "exact"]), ["y"])), _cache[12] || (_cache[12] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.redo.apply($options, arguments);
            }, ["meta", "prevent", "exact"]), ["y"]))],
            onKeyup: [_cache[13] || (_cache[13] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.updateCurrentHistoryRange.apply($options, arguments);
            }, ["shift", "exact"]), ["up"])), _cache[14] || (_cache[14] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.updateCurrentHistoryRange.apply($options, arguments);
            }, ["shift", "exact"]), ["down"])), _cache[15] || (_cache[15] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.updateCurrentHistoryRange.apply($options, arguments);
            }, ["shift", "exact"]), ["left"])), _cache[16] || (_cache[16] = Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withKeys"])(Object(external_root_Vue_commonjs_vue_commonjs2_vue_amd_vue_["withModifiers"])(function() {
              return $options.updateCurrentHistoryRange.apply($options, arguments);
            }, ["shift", "exact"]), ["right"]))]
          }, null, 40, ["value", "placeholder"])]);
        }
        var esm_extends = __webpack_require__(5);
        var browserSupportsTextareaTextNodes;
        function canManipulateViaTextNodes(input) {
          if (input.nodeName !== "TEXTAREA") {
            return false;
          }
          if (typeof browserSupportsTextareaTextNodes === "undefined") {
            var textarea = document.createElement("textarea");
            textarea.value = 1;
            browserSupportsTextareaTextNodes = !!textarea.firstChild;
          }
          return browserSupportsTextareaTextNodes;
        }
        function index_esm_index(input, text) {
          input.focus();
          if (document.selection) {
            var ieRange = document.selection.createRange();
            ieRange.text = text;
            ieRange.collapse(false);
            ieRange.select();
            return;
          }
          var isSuccess = document.execCommand("insertText", false, text);
          if (!isSuccess) {
            var start = input.selectionStart;
            var end = input.selectionEnd;
            if (typeof input.setRangeText === "function") {
              input.setRangeText(text);
            } else {
              var range = document.createRange();
              var textNode = document.createTextNode(text);
              if (canManipulateViaTextNodes(input)) {
                var node = input.firstChild;
                if (!node) {
                  input.appendChild(textNode);
                } else {
                  var offset = 0;
                  var startNode = null;
                  var endNode = null;
                  while (node && (startNode === null || endNode === null)) {
                    var nodeLength = node.nodeValue.length;
                    if (start >= offset && start <= offset + nodeLength) {
                      range.setStart(startNode = node, start - offset);
                    }
                    if (end >= offset && end <= offset + nodeLength) {
                      range.setEnd(endNode = node, end - offset);
                    }
                    offset += nodeLength;
                    node = node.nextSibling;
                  }
                  if (start !== end) {
                    range.deleteContents();
                  }
                }
              }
              if (canManipulateViaTextNodes(input) && range.commonAncestorContainer.nodeName === "#text") {
                range.insertNode(textNode);
              } else {
                var value = input.value;
                input.value = value.slice(0, start) + text + value.slice(end);
              }
            }
            input.setSelectionRange(start + text.length, start + text.length);
            var e = document.createEvent("UIEvent");
            e.initEvent("input", true, false);
            input.dispatchEvent(e);
          }
        }
        var index_esm = index_esm_index;
        var hotkeys = __webpack_require__(36);
        var util = __webpack_require__(2);
        var textarea_editorvue_type_script_lang_js = {
          name: "v-md-textarea-editor",
          props: {
            modelValue: String,
            minHeight: String,
            placeholder: String,
            historyDebounce: {
              type: Number,
              default: 400
            },
            historyMax: {
              type: Number,
              default: 30
            }
          },
          emits: ["blur", "paste", "update:modelValue"],
          data: function data() {
            return {
              isComposing: false
            };
          },
          computed: {
            textareaEl: function textareaEl() {
              return this.$refs.textarea;
            }
          },
          watch: {
            modelValue: function modelValue() {
              var _this = this;
              this.clearTimeout();
              if (!this.triggerInputBySetHistory) {
                this.timmer = setTimeout(function() {
                  _this.saveHistory();
                  _this.clearTimeout();
                }, this.historyDebounce);
              }
            }
          },
          created: function created() {
            this.historyStack = [];
            this.historyIndex = 0;
            this.hotkeysManager = new hotkeys["a"]();
          },
          mounted: function mounted() {
            this.saveHistory();
            this.textareaEl.addEventListener("keydown", this.handleKeydown, false);
          },
          beforeUnmount: function beforeUnmount() {
            this.textareaEl.removeEventListener("keydown", this.handleKeydown, false);
          },
          methods: {
            handleCompositionStart: function handleCompositionStart() {
              this.isComposing = true;
            },
            handleCompositionUpdate: function handleCompositionUpdate(event) {
              var text = event.target.value;
              var lastCharacter = text[text.length - 1] || "";
              this.isComposing = !Object(util["d"])(lastCharacter);
            },
            handleCompositionEnd: function handleCompositionEnd(event) {
              if (this.isComposing) {
                this.isComposing = false;
                this.handleInput(event);
              }
            },
            handlePaste: function handlePaste(e) {
              this.$emit("paste", e);
            },
            handleBlur: function handleBlur(e) {
              this.$emit("blur", e);
            },
            registerHotkeys: function registerHotkeys() {
              var _this$hotkeysManager;
              (_this$hotkeysManager = this.hotkeysManager).registerHotkeys.apply(_this$hotkeysManager, arguments);
            },
            handleKeydown: function handleKeydown(e) {
              this.hotkeysManager.dispatch(e);
            },
            heightAtLine: function heightAtLine(lineIndex) {
              var el = this.$el.querySelector('section[data-line="' + lineIndex + '"]');
              return el ? el.offsetTop + el.offsetHeight : 0;
            },
            clearTimeout: function(_clearTimeout) {
              function clearTimeout2() {
                return _clearTimeout.apply(this, arguments);
              }
              clearTimeout2.toString = function() {
                return _clearTimeout.toString();
              };
              return clearTimeout2;
            }(function() {
              if (this.timmer)
                clearTimeout(this.timmer);
              this.timmer = null;
            }),
            updateCurrentHistoryRange: function updateCurrentHistoryRange() {
              if (!this.timmer) {
                this.updateHistory(this.historyIndex, {
                  range: this.getRange()
                });
              }
            },
            handleInput: function handleInput(e) {
              if (this.isComposing)
                return;
              this.$emit("update:modelValue", e.target.value);
            },
            saveHistory: function saveHistory() {
              var range = this.getRange();
              var history = {
                value: this.modelValue,
                range
              };
              this.historyStack = this.historyStack.slice(0, this.historyIndex + 1);
              this.historyStack.push(history);
              if (this.historyStack.length > this.historyMax)
                this.historyStack.shift();
              this.historyIndex = this.historyStack.length - 1;
            },
            updateHistory: function updateHistory(index, data) {
              var history = this.historyStack[index];
              if ("value" in data)
                history.value = data.value;
              Object(esm_extends["a"])(history.range, data.range);
            },
            goHistory: function goHistory(index) {
              var _this2 = this;
              var _this$historyStack$in = this.historyStack[index], value = _this$historyStack$in.value, range = _this$historyStack$in.range;
              this.$emit("update:modelValue", value);
              this.triggerInputBySetHistory = true;
              this.$nextTick(function() {
                _this2.triggerInputBySetHistory = false;
                _this2.setRange(range);
              });
            },
            getRange: function getRange() {
              return {
                start: this.textareaEl.selectionStart,
                end: this.textareaEl.selectionEnd
              };
            },
            setRange: function setRange(_ref) {
              var start = _ref.start, end = _ref.end;
              this.textareaEl.setSelectionRange(start, end);
              this.updateCurrentHistoryRange();
            },
            focus: function focus() {
              this.textareaEl.focus();
            },
            insertText: function insertText(text) {
              index_esm(this.textareaEl, text);
            },
            undo: function undo() {
              if (this.historyIndex > 0) {
                this.historyIndex--;
                this.goHistory(this.historyIndex);
              }
            },
            redo: function redo() {
              if (this.historyIndex < this.historyStack.length - 1) {
                this.historyIndex++;
                this.goHistory(this.historyIndex);
              }
            }
          }
        };
        __webpack_require__(106);
        textarea_editorvue_type_script_lang_js.render = textarea_editorvue_type_template_id_31fed1ea_bindings_modelValue_props_minHeight_props_placeholder_props_historyDebounce_props_historyMax_props_isComposing_data_textareaEl_options_handleCompositionStart_options_handleCompositionUpdate_options_handleCompositionEnd_options_handlePaste_options_handleBlur_options_registerHotkeys_options_handleKeydown_options_heightAtLine_options_clearTimeout_options_updateCurrentHistoryRange_options_handleInput_options_saveHistory_options_updateHistory_options_goHistory_options_getRange_options_setRange_options_focus_options_insertText_options_undo_options_redo_options_render;
        var textarea_editor = textarea_editorvue_type_script_lang_js;
        var create_editor = __webpack_require__(35);
        var _components;
        var component = {
          components: (_components = {}, _components[textarea_editor.name] = textarea_editor, _components),
          watch: {
            modelValue: function modelValue() {
              this.text = this.modelValue;
            },
            height: {
              handler: function handler() {
                var _this = this;
                return Object(asyncToGenerator["a"])(/* @__PURE__ */ regenerator_default.a.mark(function _callee() {
                  var editorWrapper;
                  return regenerator_default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return _this.$nextTick();
                        case 2:
                          if (_this.height) {
                            editorWrapper = _this.$el.querySelector(".v-md-editor__editor-wrapper");
                            _this.textEditorMinHeight = window.getComputedStyle(editorWrapper).height;
                          } else {
                            _this.textEditorMinHeight = "";
                          }
                        case 3:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))();
              },
              immediate: true
            }
          },
          data: function data() {
            return {
              textEditorMinHeight: ""
            };
          },
          methods: {
            handleEditorWrapperClick: function handleEditorWrapperClick() {
              this.setFocusEnd();
            },
            editorFocusEnd: function editorFocusEnd() {
              this.focus();
              this.$refs.editorEgine.setRange({
                start: this.text.length,
                end: this.text.length
              });
            },
            delLineLeft: function delLineLeft() {
              var editorEgine = this.$refs.editorEgine;
              var _editorEgine$getRange = editorEgine.getRange(), start = _editorEgine$getRange.start;
              var leftText = this.getCursorLineLeftText();
              editorEgine.setRange({
                start: start - leftText.length - 1,
                end: start
              });
              this.replaceSelectionText("\n");
            },
            getCursorLineLeftText: function getCursorLineLeftText() {
              var _this$$refs$editorEgi = this.$refs.editorEgine.getRange(), start = _this$$refs$editorEgi.start, end = _this$$refs$editorEgi.end;
              return start === end ? this.text.slice(0, start).split("\n").pop() : null;
            },
            editorRegisterHotkeys: function editorRegisterHotkeys() {
              var _this$$refs$editorEgi2;
              (_this$$refs$editorEgi2 = this.$refs.editorEgine).registerHotkeys.apply(_this$$refs$editorEgi2, arguments);
            },
            editorScrollToTop: function editorScrollToTop(scrollTop) {
              this.$refs.editorScroller.scrollTo(scrollTop);
            },
            getScrollInfo: function getScrollInfo() {
              return this.$refs.editorScroller.getScrollInfo();
            },
            heightAtLine: function heightAtLine() {
              var _this$$refs$editorEgi3;
              return (_this$$refs$editorEgi3 = this.$refs.editorEgine).heightAtLine.apply(_this$$refs$editorEgi3, arguments);
            },
            focus: function focus() {
              this.$refs.editorEgine.focus();
            },
            undo: function undo() {
              this.$refs.editorEgine.undo();
            },
            redo: function redo() {
              this.$refs.editorEgine.redo();
            },
            clear: function clear() {
              this.focus();
              this.handleInput("");
            },
            replaceSelectionText: function replaceSelectionText(text) {
              this.$refs.editorEgine.insertText(text);
            },
            getCurrentSelectedStr: function getCurrentSelectedStr() {
              var _this$$refs$editorEgi4 = this.$refs.editorEgine.getRange(), start = _this$$refs$editorEgi4.start, end = _this$$refs$editorEgi4.end;
              return end > start ? this.text.slice(start, end) : null;
            },
            changeSelctionTo: function changeSelctionTo(insertText, selectedText) {
              var editorEgine = this.$refs.editorEgine;
              var selectedIndexOfStr = insertText.indexOf(selectedText);
              var cursorEndIndex = editorEgine.getRange().end;
              if (selectedIndexOfStr === -1)
                return;
              var text = this.text.slice(0, cursorEndIndex);
              var insertTextIndex = text.length - insertText.length;
              var rangeStartIndex = insertTextIndex + selectedIndexOfStr;
              var rangeEndIndex = rangeStartIndex + selectedText.length;
              this.$refs.editorEgine.setRange({
                start: rangeStartIndex,
                end: rangeEndIndex
              });
            }
          }
        };
        Object(create_editor["a"])(component);
        var base_editorvue_type_script_lang_js = component;
        base_editorvue_type_script_lang_js.render = render;
        var base_editor = base_editorvue_type_script_lang_js;
        var xss = __webpack_require__(7);
        __webpack_require__(18);
        var version = "2.3.12";
        var base_editor_install = function install(app) {
          app.component(base_editor.name, base_editor);
        };
        base_editor.version = version;
        base_editor.install = base_editor_install;
        base_editor.xss = xss["a"];
        base_editor.use = function(optionsOrInstall, opt) {
          if (typeof optionsOrInstall === "function") {
            optionsOrInstall(base_editor, opt);
          } else {
            optionsOrInstall.install(base_editor, opt);
          }
          return base_editor;
        };
        __webpack_exports__["default"] = base_editor;
      }
    ])["default"];
  });
})(baseEditor);
var VMdEditor = /* @__PURE__ */ getDefaultExportFromCjs(baseEditor.exports);
var github = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(typeof self != "undefined" ? self : commonjsGlobal, function() {
    return function(e) {
      var t = {};
      function r(n) {
        if (t[n])
          return t[n].exports;
        var s = t[n] = { i: n, l: false, exports: {} };
        return e[n].call(s.exports, s, s.exports, r), s.l = true, s.exports;
      }
      return r.m = e, r.c = t, r.d = function(e2, t2, n) {
        r.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: n });
      }, r.r = function(e2) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      }, r.t = function(e2, t2) {
        if (1 & t2 && (e2 = r(e2)), 8 & t2)
          return e2;
        if (4 & t2 && typeof e2 == "object" && e2 && e2.__esModule)
          return e2;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: e2 }), 2 & t2 && typeof e2 != "string")
          for (var s in e2)
            r.d(n, s, function(t3) {
              return e2[t3];
            }.bind(null, s));
        return n;
      }, r.n = function(e2) {
        var t2 = e2 && e2.__esModule ? function() {
          return e2.default;
        } : function() {
          return e2;
        };
        return r.d(t2, "a", t2), t2;
      }, r.o = function(e2, t2) {
        return Object.prototype.hasOwnProperty.call(e2, t2);
      }, r.p = "", r(r.s = 82);
    }([function(e, t, r) {
      var n = Object.prototype.hasOwnProperty;
      function s(e2, t2) {
        return n.call(e2, t2);
      }
      function i(e2) {
        return !(e2 >= 55296 && e2 <= 57343) && (!(e2 >= 64976 && e2 <= 65007) && ((65535 & e2) != 65535 && (65535 & e2) != 65534 && (!(e2 >= 0 && e2 <= 8) && (e2 !== 11 && (!(e2 >= 14 && e2 <= 31) && (!(e2 >= 127 && e2 <= 159) && !(e2 > 1114111)))))));
      }
      function o(e2) {
        if (e2 > 65535) {
          var t2 = 55296 + ((e2 -= 65536) >> 10), r2 = 56320 + (1023 & e2);
          return String.fromCharCode(t2, r2);
        }
        return String.fromCharCode(e2);
      }
      var a = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, c = new RegExp(a.source + "|" + /&([a-z#][a-z0-9]{1,31});/gi.source, "gi"), l = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, u = r(7);
      var p = /[&<>"]/, h = /[&<>"]/g, f = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
      function d(e2) {
        return f[e2];
      }
      var g = /[.?*+^$[\]\\(){}|-]/g;
      var m = r(3);
      t.lib = {}, t.lib.mdurl = r(8), t.lib.ucmicro = r(26), t.assign = function(e2) {
        var t2 = Array.prototype.slice.call(arguments, 1);
        return t2.forEach(function(t3) {
          if (t3) {
            if (typeof t3 != "object")
              throw new TypeError(t3 + "must be object");
            Object.keys(t3).forEach(function(r2) {
              e2[r2] = t3[r2];
            });
          }
        }), e2;
      }, t.isString = function(e2) {
        return function(e3) {
          return Object.prototype.toString.call(e3);
        }(e2) === "[object String]";
      }, t.has = s, t.unescapeMd = function(e2) {
        return e2.indexOf("\\") < 0 ? e2 : e2.replace(a, "$1");
      }, t.unescapeAll = function(e2) {
        return e2.indexOf("\\") < 0 && e2.indexOf("&") < 0 ? e2 : e2.replace(c, function(e3, t2, r2) {
          return t2 || function(e4, t3) {
            var r3 = 0;
            return s(u, t3) ? u[t3] : t3.charCodeAt(0) === 35 && l.test(t3) && i(r3 = t3[1].toLowerCase() === "x" ? parseInt(t3.slice(2), 16) : parseInt(t3.slice(1), 10)) ? o(r3) : e4;
          }(e3, r2);
        });
      }, t.isValidEntityCode = i, t.fromCodePoint = o, t.escapeHtml = function(e2) {
        return p.test(e2) ? e2.replace(h, d) : e2;
      }, t.arrayReplaceAt = function(e2, t2, r2) {
        return [].concat(e2.slice(0, t2), r2, e2.slice(t2 + 1));
      }, t.isSpace = function(e2) {
        switch (e2) {
          case 9:
          case 32:
            return true;
        }
        return false;
      }, t.isWhiteSpace = function(e2) {
        if (e2 >= 8192 && e2 <= 8202)
          return true;
        switch (e2) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 32:
          case 160:
          case 5760:
          case 8239:
          case 8287:
          case 12288:
            return true;
        }
        return false;
      }, t.isMdAsciiPunct = function(e2) {
        switch (e2) {
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 38:
          case 39:
          case 40:
          case 41:
          case 42:
          case 43:
          case 44:
          case 45:
          case 46:
          case 47:
          case 58:
          case 59:
          case 60:
          case 61:
          case 62:
          case 63:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 124:
          case 125:
          case 126:
            return true;
          default:
            return false;
        }
      }, t.isPunctChar = function(e2) {
        return m.test(e2);
      }, t.escapeRE = function(e2) {
        return e2.replace(g, "\\$&");
      }, t.normalizeReference = function(e2) {
        return e2 = e2.trim().replace(/\s+/g, " "), "\u1E9E".toLowerCase() === "\u1E7E" && (e2 = e2.replace(/ẞ/g, "\xDF")), e2.toLowerCase().toUpperCase();
      };
    }, function(e, t, r) {
      function n() {
        return (n = Object.assign || function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
          }
          return e2;
        }).apply(this, arguments);
      }
      r.d(t, "a", function() {
        return n;
      });
    }, function(e, t, r) {
      r.d(t, "a", function() {
        return o;
      });
      var n = r(16), s = r.n(n), i = r(0);
      function o(e2) {
        var t2 = e2.codeHighlightExtensionMap, r2 = t2 === void 0 ? {} : t2, n2 = e2.hasLang, s2 = n2 === void 0 ? function() {
          return true;
        } : n2, o2 = e2.highlight, a = o2 === void 0 ? function(e3) {
          return e3;
        } : o2, c = e2.codeBlockClass;
        return function(e3, t3) {
          var n3 = Object(i.escapeHtml)(e3);
          return (t3 = r2[t3] || t3) && s2(t3) && (n3 = a(e3, t3)), '<pre class="' + function(e4) {
            return c ? c(e4) : "language-" + e4;
          }(t3) + '"><code>' + n3 + "</code></pre>";
        };
      }
      t.b = function() {
        var e2 = new s.a();
        return e2.set({ html: true, breaks: true, linkify: false, typographer: true }), e2;
      };
    }, function(e, t) {
      e.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/;
    }, function(e, t, r) {
      function n() {
        this.__rules__ = [], this.__cache__ = null;
      }
      n.prototype.__find__ = function(e2) {
        for (var t2 = 0; t2 < this.__rules__.length; t2++)
          if (this.__rules__[t2].name === e2)
            return t2;
        return -1;
      }, n.prototype.__compile__ = function() {
        var e2 = this, t2 = [""];
        e2.__rules__.forEach(function(e3) {
          e3.enabled && e3.alt.forEach(function(e4) {
            t2.indexOf(e4) < 0 && t2.push(e4);
          });
        }), e2.__cache__ = {}, t2.forEach(function(t3) {
          e2.__cache__[t3] = [], e2.__rules__.forEach(function(r2) {
            r2.enabled && (t3 && r2.alt.indexOf(t3) < 0 || e2.__cache__[t3].push(r2.fn));
          });
        });
      }, n.prototype.at = function(e2, t2, r2) {
        var n2 = this.__find__(e2), s = r2 || {};
        if (n2 === -1)
          throw new Error("Parser rule not found: " + e2);
        this.__rules__[n2].fn = t2, this.__rules__[n2].alt = s.alt || [], this.__cache__ = null;
      }, n.prototype.before = function(e2, t2, r2, n2) {
        var s = this.__find__(e2), i = n2 || {};
        if (s === -1)
          throw new Error("Parser rule not found: " + e2);
        this.__rules__.splice(s, 0, { name: t2, enabled: true, fn: r2, alt: i.alt || [] }), this.__cache__ = null;
      }, n.prototype.after = function(e2, t2, r2, n2) {
        var s = this.__find__(e2), i = n2 || {};
        if (s === -1)
          throw new Error("Parser rule not found: " + e2);
        this.__rules__.splice(s + 1, 0, { name: t2, enabled: true, fn: r2, alt: i.alt || [] }), this.__cache__ = null;
      }, n.prototype.push = function(e2, t2, r2) {
        var n2 = r2 || {};
        this.__rules__.push({ name: e2, enabled: true, fn: t2, alt: n2.alt || [] }), this.__cache__ = null;
      }, n.prototype.enable = function(e2, t2) {
        Array.isArray(e2) || (e2 = [e2]);
        var r2 = [];
        return e2.forEach(function(e3) {
          var n2 = this.__find__(e3);
          if (n2 < 0) {
            if (t2)
              return;
            throw new Error("Rules manager: invalid rule name " + e3);
          }
          this.__rules__[n2].enabled = true, r2.push(e3);
        }, this), this.__cache__ = null, r2;
      }, n.prototype.enableOnly = function(e2, t2) {
        Array.isArray(e2) || (e2 = [e2]), this.__rules__.forEach(function(e3) {
          e3.enabled = false;
        }), this.enable(e2, t2);
      }, n.prototype.disable = function(e2, t2) {
        Array.isArray(e2) || (e2 = [e2]);
        var r2 = [];
        return e2.forEach(function(e3) {
          var n2 = this.__find__(e3);
          if (n2 < 0) {
            if (t2)
              return;
            throw new Error("Rules manager: invalid rule name " + e3);
          }
          this.__rules__[n2].enabled = false, r2.push(e3);
        }, this), this.__cache__ = null, r2;
      }, n.prototype.getRules = function(e2) {
        return this.__cache__ === null && this.__compile__(), this.__cache__[e2] || [];
      }, e.exports = n;
    }, function(e, t, r) {
      function n(e2, t2, r2) {
        this.type = e2, this.tag = t2, this.attrs = null, this.map = null, this.nesting = r2, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
      }
      n.prototype.attrIndex = function(e2) {
        var t2, r2, n2;
        if (!this.attrs)
          return -1;
        for (r2 = 0, n2 = (t2 = this.attrs).length; r2 < n2; r2++)
          if (t2[r2][0] === e2)
            return r2;
        return -1;
      }, n.prototype.attrPush = function(e2) {
        this.attrs ? this.attrs.push(e2) : this.attrs = [e2];
      }, n.prototype.attrSet = function(e2, t2) {
        var r2 = this.attrIndex(e2), n2 = [e2, t2];
        r2 < 0 ? this.attrPush(n2) : this.attrs[r2] = n2;
      }, n.prototype.attrGet = function(e2) {
        var t2 = this.attrIndex(e2), r2 = null;
        return t2 >= 0 && (r2 = this.attrs[t2][1]), r2;
      }, n.prototype.attrJoin = function(e2, t2) {
        var r2 = this.attrIndex(e2);
        r2 < 0 ? this.attrPush([e2, t2]) : this.attrs[r2][1] = this.attrs[r2][1] + " " + t2;
      }, e.exports = n;
    }, function(e, t, r) {
      const n = /[\u0000-\u001f]/g, s = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’–—<>,.?/]+/g, i = /[\u0300-\u036F]/g;
      e.exports = function(e2) {
        return e2.normalize("NFKD").replace(i, "").replace(n, "").replace(s, "-").replace(/\-{2,}/g, "-").replace(/^\-+|\-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
      };
    }, function(e, t, r) {
      e.exports = r(21);
    }, function(e, t, r) {
      e.exports.encode = r(22), e.exports.decode = r(23), e.exports.format = r(24), e.exports.parse = r(25);
    }, function(e, t) {
      e.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    }, function(e, t) {
      e.exports = /[\0-\x1F\x7F-\x9F]/;
    }, function(e, t) {
      e.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/;
    }, function(e, t, r) {
      var n = `<[A-Za-z][A-Za-z0-9\\-]*(?:\\s+[a-zA-Z_:][a-zA-Z0-9:._-]*(?:\\s*=\\s*(?:[^"'=<>\`\\x00-\\x20]+|'[^']*'|"[^"]*"))?)*\\s*\\/?>`, s = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", i = new RegExp("^(?:" + n + "|" + s + "|<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->|<[?][\\s\\S]*?[?]>|<![A-Z]+\\s+[^>]*>|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>)"), o = new RegExp("^(?:" + n + "|" + s + ")");
      e.exports.HTML_TAG_RE = i, e.exports.HTML_OPEN_CLOSE_TAG_RE = o;
    }, function(e, t, r) {
      function n(e2, t2) {
        var r2, n2, s, i, o, a = [], c = t2.length;
        for (r2 = 0; r2 < c; r2++)
          (s = t2[r2]).marker === 126 && s.end !== -1 && (i = t2[s.end], (o = e2.tokens[s.token]).type = "s_open", o.tag = "s", o.nesting = 1, o.markup = "~~", o.content = "", (o = e2.tokens[i.token]).type = "s_close", o.tag = "s", o.nesting = -1, o.markup = "~~", o.content = "", e2.tokens[i.token - 1].type === "text" && e2.tokens[i.token - 1].content === "~" && a.push(i.token - 1));
        for (; a.length; ) {
          for (n2 = (r2 = a.pop()) + 1; n2 < e2.tokens.length && e2.tokens[n2].type === "s_close"; )
            n2++;
          r2 !== --n2 && (o = e2.tokens[n2], e2.tokens[n2] = e2.tokens[r2], e2.tokens[r2] = o);
        }
      }
      e.exports.tokenize = function(e2, t2) {
        var r2, n2, s, i, o = e2.pos, a = e2.src.charCodeAt(o);
        if (t2)
          return false;
        if (a !== 126)
          return false;
        if (s = (n2 = e2.scanDelims(e2.pos, true)).length, i = String.fromCharCode(a), s < 2)
          return false;
        for (s % 2 && (e2.push("text", "", 0).content = i, s--), r2 = 0; r2 < s; r2 += 2)
          e2.push("text", "", 0).content = i + i, e2.delimiters.push({ marker: a, length: 0, jump: r2 / 2, token: e2.tokens.length - 1, end: -1, open: n2.can_open, close: n2.can_close });
        return e2.pos += n2.length, true;
      }, e.exports.postProcess = function(e2) {
        var t2, r2 = e2.tokens_meta, s = e2.tokens_meta.length;
        for (n(e2, e2.delimiters), t2 = 0; t2 < s; t2++)
          r2[t2] && r2[t2].delimiters && n(e2, r2[t2].delimiters);
      };
    }, function(e, t, r) {
      function n(e2, t2) {
        var r2, n2, s, i, o, a;
        for (r2 = t2.length - 1; r2 >= 0; r2--)
          (n2 = t2[r2]).marker !== 95 && n2.marker !== 42 || n2.end !== -1 && (s = t2[n2.end], a = r2 > 0 && t2[r2 - 1].end === n2.end + 1 && t2[r2 - 1].token === n2.token - 1 && t2[n2.end + 1].token === s.token + 1 && t2[r2 - 1].marker === n2.marker, o = String.fromCharCode(n2.marker), (i = e2.tokens[n2.token]).type = a ? "strong_open" : "em_open", i.tag = a ? "strong" : "em", i.nesting = 1, i.markup = a ? o + o : o, i.content = "", (i = e2.tokens[s.token]).type = a ? "strong_close" : "em_close", i.tag = a ? "strong" : "em", i.nesting = -1, i.markup = a ? o + o : o, i.content = "", a && (e2.tokens[t2[r2 - 1].token].content = "", e2.tokens[t2[n2.end + 1].token].content = "", r2--));
      }
      e.exports.tokenize = function(e2, t2) {
        var r2, n2, s = e2.pos, i = e2.src.charCodeAt(s);
        if (t2)
          return false;
        if (i !== 95 && i !== 42)
          return false;
        for (n2 = e2.scanDelims(e2.pos, i === 42), r2 = 0; r2 < n2.length; r2++)
          e2.push("text", "", 0).content = String.fromCharCode(i), e2.delimiters.push({ marker: i, length: n2.length, jump: r2, token: e2.tokens.length - 1, end: -1, open: n2.can_open, close: n2.can_close });
        return e2.pos += n2.length, true;
      }, e.exports.postProcess = function(e2) {
        var t2, r2 = e2.tokens_meta, s = e2.tokens_meta.length;
        for (n(e2, e2.delimiters), t2 = 0; t2 < s; t2++)
          r2[t2] && r2[t2].delimiters && n(e2, r2[t2].delimiters);
      };
    }, function(e, t, r) {
      const n = r(18), s = { leftDelimiter: "{", rightDelimiter: "}", allowedAttributes: [] };
      function i(e2, t2, r2) {
        let n2 = { match: false, j: null }, s2 = r2.shift !== void 0 ? t2 + r2.shift : r2.position, l = (u = e2, (p = s2) >= 0 ? u[p] : u[u.length + p]);
        var u, p;
        if (l === void 0)
          return n2;
        for (let e3 in r2)
          if (e3 !== "shift" && e3 !== "position") {
            if (l[e3] === void 0)
              return n2;
            if (e3 === "children" && o(r2.children)) {
              if (l.children.length === 0)
                return n2;
              let e4, t3 = r2.children, s3 = l.children;
              if (t3.every((e5) => e5.position !== void 0)) {
                if (e4 = t3.every((e5) => i(s3, e5.position, e5).match), e4) {
                  let e5 = c(t3).position;
                  n2.j = e5 >= 0 ? e5 : s3.length + e5;
                }
              } else
                for (let r3 = 0; r3 < s3.length; r3++)
                  if (e4 = t3.every((e5) => i(s3, r3, e5).match), e4) {
                    n2.j = r3;
                    break;
                  }
              if (e4 === false)
                return n2;
            } else
              switch (typeof r2[e3]) {
                case "boolean":
                case "number":
                case "string":
                  if (l[e3] !== r2[e3])
                    return n2;
                  break;
                case "function":
                  if (!r2[e3](l[e3]))
                    return n2;
                  break;
                case "object":
                  if (a(r2[e3])) {
                    if (r2[e3].every((t3) => t3(l[e3])) === false)
                      return n2;
                    break;
                  }
                default:
                  throw new Error(`Unknown type of pattern test (key: ${e3}). Test should be of type boolean, number, string, function or array of functions.`);
              }
          }
        return n2.match = true, n2;
      }
      function o(e2) {
        return Array.isArray(e2) && e2.length && e2.every((e3) => typeof e3 == "object");
      }
      function a(e2) {
        return Array.isArray(e2) && e2.length && e2.every((e3) => typeof e3 == "function");
      }
      function c(e2) {
        return e2.slice(-1)[0] || {};
      }
      e.exports = function(e2, t2) {
        let r2 = Object.assign({}, s);
        r2 = Object.assign(r2, t2);
        const o2 = n(r2);
        e2.core.ruler.before("linkify", "curly_attributes", function(e3) {
          let t3 = e3.tokens;
          for (let e4 = 0; e4 < t3.length; e4++)
            for (let r3 = 0; r3 < o2.length; r3++) {
              let n2 = o2[r3], s2 = null;
              n2.tests.every((r4) => {
                let n3 = i(t3, e4, r4);
                return n3.j !== null && (s2 = n3.j), n3.match;
              }) && (n2.transform(t3, e4, s2), n2.name !== "inline attributes" && n2.name !== "inline nesting 0" || r3--);
            }
        });
      };
    }, function(e, t, r) {
      e.exports = r(20);
    }, function(e, t, r) {
      r.r(t), r.d(t, "default", function() {
        return g;
      });
      var n = r(1), s = r(15), i = r.n(s), o = function(e2, t2) {
        var r2 = (t2 === void 0 ? {} : t2).lineMarkup, n2 = r2 === void 0 ? "data-line" : r2, s2 = function(e3, t3, r3, n3, s3) {
          return s3.renderToken(e3, t3, r3);
        };
        function i2(e3) {
          return function(t3, r3, s3, i3, o3) {
            var a3 = t3[r3];
            return a3.attrPush([n2, a3.map[0] + 1]), e3(t3, r3, s3, i3, o3);
          };
        }
        function o2(e3) {
          return function(t3, r3, s3, i3, o3) {
            var a3 = e3(t3, r3, s3, i3, o3), c2 = t3[r3].map[0] + 1;
            return "<div " + n2 + '="' + c2 + '">' + a3 + "</div>";
          };
        }
        var a2 = { table_open: i2, blockquote_open: i2, bullet_list_open: i2, ordered_list_open: i2, reference_open: i2, heading_open: i2, lheading_open: i2, paragraph_open: i2, hr: i2, html_block: o2, code_block: o2, fence: o2 };
        Object.keys(a2).forEach(function(t3) {
          var r3 = e2.renderer.rules[t3] || s2;
          e2.renderer.rules[t3] = a2[t3](r3);
        });
      }, a = function(e2, t2) {
        t2 === void 0 && (t2 = {});
        var r2 = t2.getMarks;
        r2 && e2.core.ruler.push("anchor", function(e3) {
          var t3 = {}, n2 = e3.tokens;
          n2.filter(function(e4) {
            return e4.type === "heading_open";
          }).forEach(function(e4) {
            var s2 = n2[n2.indexOf(e4) + 1].content, i2 = Number(e4.tag.substr(1));
            t3[s2] = s2 in t3 ? Number(t3[s2]) + 1 : "";
            var o2 = r2(s2, i2, t3[s2]);
            o2 && o2.forEach(function(t4) {
              var r3 = t4.attr, n3 = t4.value;
              e4.attrPush([r3, n3]);
            });
          });
        });
      }, c = { includeLevel: [2, 3], containerClass: "table-of-contents", listClass: "table-of-content-list", listItemClass: "table-of-content-list-item", markerPattern: /^\[\[toc\]\]/im, listType: "ul", getAnchorAttrs: function() {
        return [];
      }, format: void 0, forceFullToc: false, containerHeaderHtml: void 0, containerFooterHtml: void 0, transformLink: void 0 }, l = function(e2, t2) {
        var r2, s2 = Object(n.a)({}, c, t2), i2 = s2.markerPattern;
        function o2(e3, t3, r3) {
          for (var n2, i3, a2 = [], c2 = "", l2 = t3.length, u2 = e3; u2 < l2; ) {
            var p2 = t3[u2], h2 = t3[u2 - 1], f2 = p2.tag && parseInt(p2.tag.substr(1, 1));
            if (p2.type === "heading_close" && s2.includeLevel.indexOf(f2) != -1 && h2.type === "inline") {
              if (n2) {
                if (f2 > n2) {
                  c2 += (i3 = o2(u2, t3, r3))[1], u2 = i3[0];
                  continue;
                }
                if (f2 < n2)
                  return c2 += "</li>", a2.push(c2), [u2, "<" + s2.listType + ' class="' + s2.listClass + '">' + a2.join("") + "</" + s2.listType + ">"];
                f2 == n2 && (c2 += "</li>", a2.push(c2));
              } else
                n2 = f2;
              var d2 = h2.children.reduce(function(e4, t4) {
                return e4 + t4.content;
              }, ""), g2 = h2.content, m = r3[g2] = g2 in r3 ? Number(r3[g2]) + 1 : "", _ = s2.getAnchorAttrs(g2, f2, m);
              c2 = '<li class="' + s2.listItemClass + '">\n      <a ' + _.map(function(e4) {
                return e4.attr + '="' + e4.value + '"';
              }).join(" ") + ">", c2 += d2, c2 += "</a>", u2++;
            } else
              u2++;
          }
          return c2 += c2 === "" ? "" : "</li>", a2.push(c2), [u2, "<" + s2.listType + ' class="' + s2.listClass + '">' + a2.join("") + "</" + s2.listType + ">"];
        }
        e2.renderer.rules.toc_open = function(e3, t3) {
          var r3 = '<div class="' + s2.containerClass + '">';
          return s2.containerHeaderHtml && (r3 += s2.containerHeaderHtml), r3;
        }, e2.renderer.rules.toc_close = function(e3, t3) {
          var r3 = "";
          return s2.containerFooterHtml && (r3 = s2.containerFooterHtml), r3 + "</div>";
        }, e2.renderer.rules.toc_body = function(e3, t3) {
          var n2 = {};
          if (s2.forceFullToc) {
            for (var i3 = "", a2 = 0, c2 = r2 && r2.tokens && r2.tokens.length; a2 < c2; ) {
              var l2 = o2(a2, r2.tokens, n2);
              a2 = l2[0], i3 += l2[1];
            }
            return i3;
          }
          return o2(0, r2.tokens, n2)[1];
        }, e2.core.ruler.push("grab_state", function(e3) {
          r2 = e3;
        }), e2.inline.ruler.after("emphasis", "toc", function(e3, t3) {
          var r3;
          if (e3.src.charCodeAt(e3.pos) !== 91)
            return false;
          if (t3)
            return false;
          if ((r3 = (r3 = i2.exec(e3.src.substr(e3.pos))) ? r3.filter(function(e4) {
            return e4;
          }) : []).length < 1)
            return false;
          e3.push("toc_open", "toc", 1).markup = "[[toc]]", e3.push("toc_body", "", 0), e3.push("toc_close", "toc", -1);
          var n2 = e3.src.indexOf("\n", e3.pos);
          return e3.pos = n2 !== -1 ? n2 : e3.pos + e3.posMax + 1, true;
        });
      }, u = function(e2, t2) {
        t2 === void 0 && (t2 = {});
        var r2 = t2.getWrapperClass, n2 = r2 === void 0 ? function(e3) {
          return "language-" + e3;
        } : r2, s2 = function(e3) {
          return function() {
            for (var t3 = arguments.length, r3 = new Array(t3), s3 = 0; s3 < t3; s3++)
              r3[s3] = arguments[s3];
            var i3 = r3[0], o3 = r3[1], a3 = i3[o3], c2 = e3.apply(void 0, r3);
            return '<!--beforebegin--><div class="' + n2(a3.info.trim()) + ' extra-class" extra-attr><!--afterbegin-->' + c2 + "<!--beforeend--></div><!--afterend-->";
          };
        }, i2 = e2.renderer.rules, o2 = i2.fence, a2 = i2.code_block;
        e2.renderer.rules.fence = s2(o2), e2.renderer.rules.code_block = s2(a2);
      }, p = function(e2, t2) {
        var r2 = t2.externalAttrs, n2 = t2.openLinkIcon, s2 = t2.openLinkIconClass, i2 = false;
        e2.renderer.rules.link_open = function(e3, t3, n3, s3, o2) {
          var a2 = e3[t3], c2 = a2.attrIndex("href");
          if (c2 >= 0) {
            var l2 = a2.attrs[c2][1];
            /^https?:/.test(l2) && (Object.keys(r2).forEach(function(e4) {
              a2.attrSet(e4, r2[e4]);
            }), /_blank/i.test(r2.target) && (i2 = true));
          }
          return o2.renderToken(e3, t3, n3);
        }, e2.renderer.rules.link_close = function(e3, t3, r3, o2, a2) {
          return i2 && (i2 = false, n2) ? s2 ? '<i class="' + s2 + '"></i>' + a2.renderToken(e3, t3, r3) : '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="v-md-svg-outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>' + a2.renderToken(e3, t3, r3) : a2.renderToken(e3, t3, r3);
        };
      }, h = r(6), f = r.n(h), d = r(2);
      function g(e2) {
        var t2 = e2 === void 0 ? {} : e2, r2 = t2.toc, s2 = t2.link, c2 = t2.attrs, h2 = Object(d.b)();
        return h2.use(p, Object(n.a)({ externalAttrs: { target: "_blank" } }, s2)).use(u, { getWrapperClass: function(e3) {
          return "v-md-pre-wrapper v-md-pre-wrapper-" + e3;
        } }).use(i.a, Object(n.a)({ leftDelimiter: "{{{", rightDelimiter: "}}}" }, c2, { allowedAttributes: ["width", "height"].concat(c2 == null ? void 0 : c2.allowedAttributes) })).use(a, { getMarks: function(e3, t3, r3) {
          return [{ attr: "data-v-md-heading", value: f()(e3) + (r3 ? "-" + r3 : "") }];
        } }).use(l, Object(n.a)({ listClass: "v-md-toc", listItemClass: "v-md-toc-item", getAnchorAttrs: function(e3, t3, r3) {
          return [{ attr: "data-v-md-anchor", value: f()(e3) + (r3 ? "-" + r3 : "") }];
        } }, r2)).use(o, { lineMarkup: "data-v-md-line" }), { previewClass: "markdown-body", extend: function(e3) {
          e3(h2);
        }, markdownParser: h2 };
      }
    }, function(e, t, r) {
      const n = r(19);
      function s(e2) {
        return e2.slice(-1)[0];
      }
      e.exports = (e2) => {
        const t2 = new RegExp("^ {0,3}[-*_]{3,} ?" + n.escapeRegExp(e2.leftDelimiter) + "[^" + n.escapeRegExp(e2.rightDelimiter) + "]");
        return [{ name: "fenced code blocks", tests: [{ shift: 0, block: true, info: n.hasDelimiters("end", e2) }], transform: (t3, r2) => {
          let s2 = t3[r2], i = s2.info.lastIndexOf(e2.leftDelimiter), o = n.getAttrs(s2.info, i, e2);
          n.addAttrs(o, s2), s2.info = n.removeDelimiter(s2.info, e2);
        } }, { name: "inline nesting 0", tests: [{ shift: 0, type: "inline", children: [{ shift: -1, type: (e3) => e3 === "image" || e3 === "code_inline" }, { shift: 0, type: "text", content: n.hasDelimiters("start", e2) }] }], transform: (t3, r2, s2) => {
          let i = t3[r2].children[s2], o = i.content.indexOf(e2.rightDelimiter), a = t3[r2].children[s2 - 1], c = n.getAttrs(i.content, 0, e2);
          n.addAttrs(c, a), i.content.length === o + e2.rightDelimiter.length ? t3[r2].children.splice(s2, 1) : i.content = i.content.slice(o + e2.rightDelimiter.length);
        } }, { name: "tables", tests: [{ shift: 0, type: "table_close" }, { shift: 1, type: "paragraph_open" }, { shift: 2, type: "inline", content: n.hasDelimiters("only", e2) }], transform: (t3, r2) => {
          let s2 = t3[r2 + 2], i = n.getMatchingOpeningToken(t3, r2), o = n.getAttrs(s2.content, 0, e2);
          n.addAttrs(o, i), t3.splice(r2 + 1, 3);
        } }, { name: "inline attributes", tests: [{ shift: 0, type: "inline", children: [{ shift: -1, nesting: -1 }, { shift: 0, type: "text", content: n.hasDelimiters("start", e2) }] }], transform: (t3, r2, s2) => {
          let i = t3[r2].children[s2], o = i.content, a = n.getAttrs(o, 0, e2), c = n.getMatchingOpeningToken(t3[r2].children, s2 - 1);
          n.addAttrs(a, c), i.content = o.slice(o.indexOf(e2.rightDelimiter) + e2.rightDelimiter.length);
        } }, { name: "list softbreak", tests: [{ shift: -2, type: "list_item_open" }, { shift: 0, type: "inline", children: [{ position: -2, type: "softbreak" }, { position: -1, type: "text", content: n.hasDelimiters("only", e2) }] }], transform: (t3, r2, s2) => {
          let i = t3[r2].children[s2].content, o = n.getAttrs(i, 0, e2), a = r2 - 2;
          for (; t3[a - 1] && t3[a - 1].type !== "ordered_list_open" && t3[a - 1].type !== "bullet_list_open"; )
            a--;
          n.addAttrs(o, t3[a - 1]), t3[r2].children = t3[r2].children.slice(0, -2);
        } }, { name: "list double softbreak", tests: [{ shift: 0, type: (e3) => e3 === "bullet_list_close" || e3 === "ordered_list_close" }, { shift: 1, type: "paragraph_open" }, { shift: 2, type: "inline", content: n.hasDelimiters("only", e2), children: (e3) => e3.length === 1 }, { shift: 3, type: "paragraph_close" }], transform: (t3, r2) => {
          let s2 = t3[r2 + 2].content, i = n.getAttrs(s2, 0, e2), o = n.getMatchingOpeningToken(t3, r2);
          n.addAttrs(i, o), t3.splice(r2 + 1, 3);
        } }, { name: "list item end", tests: [{ shift: -2, type: "list_item_open" }, { shift: 0, type: "inline", children: [{ position: -1, type: "text", content: n.hasDelimiters("end", e2) }] }], transform: (t3, r2, i) => {
          let o = t3[r2].children[i], a = o.content, c = n.getAttrs(a, a.lastIndexOf(e2.leftDelimiter), e2);
          n.addAttrs(c, t3[r2 - 2]);
          let l = a.slice(0, a.lastIndexOf(e2.leftDelimiter));
          o.content = s(l) !== " " ? l : l.slice(0, -1);
        } }, { name: "\n{.a} softbreak then curly in start", tests: [{ shift: 0, type: "inline", children: [{ position: -2, type: "softbreak" }, { position: -1, type: "text", content: n.hasDelimiters("only", e2) }] }], transform: (t3, r2, s2) => {
          let i = t3[r2].children[s2], o = n.getAttrs(i.content, 0, e2), a = r2 + 1;
          for (; t3[a + 1] && t3[a + 1].nesting === -1; )
            a++;
          let c = n.getMatchingOpeningToken(t3, a);
          n.addAttrs(o, c), t3[r2].children = t3[r2].children.slice(0, -2);
        } }, { name: "horizontal rule", tests: [{ shift: 0, type: "paragraph_open" }, { shift: 1, type: "inline", children: (e3) => e3.length === 1, content: (e3) => e3.match(t2) !== null }, { shift: 2, type: "paragraph_close" }], transform: (t3, r2) => {
          let s2 = t3[r2];
          s2.type = "hr", s2.tag = "hr", s2.nesting = 0;
          let i = t3[r2 + 1].content, o = i.lastIndexOf(e2.leftDelimiter);
          s2.attrs = n.getAttrs(i, o, e2), s2.markup = i, t3.splice(r2 + 1, 2);
        } }, { name: "end of block", tests: [{ shift: 0, type: "inline", children: [{ position: -1, content: n.hasDelimiters("end", e2), type: (e3) => e3 !== "code_inline" }] }], transform: (t3, r2, i) => {
          let o = t3[r2].children[i], a = o.content, c = n.getAttrs(a, a.lastIndexOf(e2.leftDelimiter), e2), l = r2 + 1;
          for (; t3[l + 1] && t3[l + 1].nesting === -1; )
            l++;
          let u = n.getMatchingOpeningToken(t3, l);
          n.addAttrs(c, u);
          let p = a.slice(0, a.lastIndexOf(e2.leftDelimiter));
          o.content = s(p) !== " " ? p : p.slice(0, -1);
        } }];
      };
    }, function(e, t, r) {
      function n(e2) {
        return e2.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      t.getAttrs = function(e2, t2, r2) {
        const n2 = /[^\t\n\f />"'=]/, s2 = [];
        let i2 = "", o2 = "", a2 = true, c = false;
        for (let l = t2 + r2.leftDelimiter.length; l < e2.length; l++) {
          if (e2.slice(l, l + r2.rightDelimiter.length) === r2.rightDelimiter) {
            i2 !== "" && s2.push([i2, o2]);
            break;
          }
          let t3 = e2.charAt(l);
          if (t3 === "=" && a2)
            a2 = false;
          else if (t3 !== "." || i2 !== "")
            if (t3 !== "#" || i2 !== "")
              if (t3 !== '"' || o2 !== "")
                if (t3 === '"' && c)
                  c = false;
                else if (t3 !== " " || c)
                  a2 && t3.search(n2) === -1 || (a2 ? i2 += t3 : o2 += t3);
                else {
                  if (i2 === "")
                    continue;
                  s2.push([i2, o2]), i2 = "", o2 = "", a2 = true;
                }
              else
                c = true;
            else
              i2 = "id", a2 = false;
          else
            e2.charAt(l + 1) === "." ? (i2 = "css-module", l += 1) : i2 = "class", a2 = false;
        }
        if (r2.allowedAttributes && r2.allowedAttributes.length) {
          let e3 = r2.allowedAttributes;
          return s2.filter(function(t3) {
            let r3 = t3[0];
            return e3.some(function(e4) {
              return r3 === e4 || e4 instanceof RegExp && e4.test(r3);
            });
          });
        }
        return s2;
      }, t.addAttrs = function(e2, t2) {
        for (let r2 = 0, n2 = e2.length; r2 < n2; ++r2) {
          let n3 = e2[r2][0];
          n3 === "class" ? t2.attrJoin("class", e2[r2][1]) : n3 === "css-module" ? t2.attrJoin("css-module", e2[r2][1]) : t2.attrPush(e2[r2]);
        }
        return t2;
      }, t.hasDelimiters = function(e2, t2) {
        if (!e2)
          throw new Error('Parameter `where` not passed. Should be "start", "middle", "end" or "only".');
        return function(r2) {
          let n2, s2, i2, o2, a2 = t2.leftDelimiter.length + 1 + t2.rightDelimiter.length;
          if (!r2 || typeof r2 != "string" || r2.length < a2)
            return false;
          let c = a2 - t2.rightDelimiter.length;
          switch (e2) {
            case "start":
              i2 = r2.slice(0, t2.leftDelimiter.length), n2 = i2 === t2.leftDelimiter ? 0 : -1, s2 = n2 === -1 ? -1 : r2.indexOf(t2.rightDelimiter, c), o2 = r2.charAt(s2 + t2.rightDelimiter.length), o2 && t2.rightDelimiter.indexOf(o2) !== -1 && (s2 = -1);
              break;
            case "end":
              n2 = r2.lastIndexOf(t2.leftDelimiter), s2 = n2 === -1 ? -1 : r2.indexOf(t2.rightDelimiter, n2 + c), s2 = s2 === r2.length - t2.rightDelimiter.length ? s2 : -1;
              break;
            case "only":
              i2 = r2.slice(0, t2.leftDelimiter.length), n2 = i2 === t2.leftDelimiter ? 0 : -1, i2 = r2.slice(r2.length - t2.rightDelimiter.length), s2 = i2 === t2.rightDelimiter ? r2.length - t2.rightDelimiter.length : -1;
          }
          return n2 !== -1 && s2 !== -1 && function(e3) {
            let r3 = e3.charAt(t2.leftDelimiter.length) === ".", n3 = e3.charAt(t2.leftDelimiter.length) === "#";
            return r3 || n3 ? e3.length >= a2 + 1 : e3.length >= a2;
          }(r2.substring(n2, s2 + t2.rightDelimiter.length));
        };
      }, t.removeDelimiter = function(e2, t2) {
        const r2 = n(t2.leftDelimiter), s2 = n(t2.rightDelimiter);
        let i2 = new RegExp("[ \\n]?" + r2 + "[^" + r2 + s2 + "]+" + s2 + "$"), o2 = e2.search(i2);
        return o2 !== -1 ? e2.slice(0, o2) : e2;
      }, t.escapeRegExp = n, t.getMatchingOpeningToken = function(e2, t2) {
        if (e2[t2].type === "softbreak")
          return false;
        if (e2[t2].nesting === 0)
          return e2[t2];
        let r2 = e2[t2].level, n2 = e2[t2].type.replace("_close", "_open");
        for (; t2 >= 0; --t2)
          if (e2[t2].type === n2 && e2[t2].level === r2)
            return e2[t2];
      };
      let s = /[&<>"]/, i = /[&<>"]/g, o = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
      function a(e2) {
        return o[e2];
      }
      t.escapeHtml = function(e2) {
        return s.test(e2) ? e2.replace(i, a) : e2;
      };
    }, function(e, t, r) {
      var n = r(0), s = r(28), i = r(32), o = r(33), a = r(41), c = r(55), l = r(68), u = r(8), p = r(70), h = { default: r(73), zero: r(74), commonmark: r(75) }, f = /^(vbscript|javascript|file|data):/, d = /^data:image\/(gif|png|jpeg|webp);/;
      function g(e2) {
        var t2 = e2.trim().toLowerCase();
        return !f.test(t2) || !!d.test(t2);
      }
      var m = ["http:", "https:", "mailto:"];
      function _(e2) {
        var t2 = u.parse(e2, true);
        if (t2.hostname && (!t2.protocol || m.indexOf(t2.protocol) >= 0))
          try {
            t2.hostname = p.toASCII(t2.hostname);
          } catch (e3) {
          }
        return u.encode(u.format(t2));
      }
      function b(e2) {
        var t2 = u.parse(e2, true);
        if (t2.hostname && (!t2.protocol || m.indexOf(t2.protocol) >= 0))
          try {
            t2.hostname = p.toUnicode(t2.hostname);
          } catch (e3) {
          }
        return u.decode(u.format(t2), u.decode.defaultChars + "%");
      }
      function k(e2, t2) {
        if (!(this instanceof k))
          return new k(e2, t2);
        t2 || n.isString(e2) || (t2 = e2 || {}, e2 = "default"), this.inline = new c(), this.block = new a(), this.core = new o(), this.renderer = new i(), this.linkify = new l(), this.validateLink = g, this.normalizeLink = _, this.normalizeLinkText = b, this.utils = n, this.helpers = n.assign({}, s), this.options = {}, this.configure(e2), t2 && this.set(t2);
      }
      k.prototype.set = function(e2) {
        return n.assign(this.options, e2), this;
      }, k.prototype.configure = function(e2) {
        var t2, r2 = this;
        if (n.isString(e2) && !(e2 = h[t2 = e2]))
          throw new Error('Wrong `markdown-it` preset "' + t2 + '", check name');
        if (!e2)
          throw new Error("Wrong `markdown-it` preset, can't be empty");
        return e2.options && r2.set(e2.options), e2.components && Object.keys(e2.components).forEach(function(t3) {
          e2.components[t3].rules && r2[t3].ruler.enableOnly(e2.components[t3].rules), e2.components[t3].rules2 && r2[t3].ruler2.enableOnly(e2.components[t3].rules2);
        }), this;
      }, k.prototype.enable = function(e2, t2) {
        var r2 = [];
        Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(t3) {
          r2 = r2.concat(this[t3].ruler.enable(e2, true));
        }, this), r2 = r2.concat(this.inline.ruler2.enable(e2, true));
        var n2 = e2.filter(function(e3) {
          return r2.indexOf(e3) < 0;
        });
        if (n2.length && !t2)
          throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n2);
        return this;
      }, k.prototype.disable = function(e2, t2) {
        var r2 = [];
        Array.isArray(e2) || (e2 = [e2]), ["core", "block", "inline"].forEach(function(t3) {
          r2 = r2.concat(this[t3].ruler.disable(e2, true));
        }, this), r2 = r2.concat(this.inline.ruler2.disable(e2, true));
        var n2 = e2.filter(function(e3) {
          return r2.indexOf(e3) < 0;
        });
        if (n2.length && !t2)
          throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n2);
        return this;
      }, k.prototype.use = function(e2) {
        var t2 = [this].concat(Array.prototype.slice.call(arguments, 1));
        return e2.apply(e2, t2), this;
      }, k.prototype.parse = function(e2, t2) {
        if (typeof e2 != "string")
          throw new Error("Input data should be a String");
        var r2 = new this.core.State(e2, this, t2);
        return this.core.process(r2), r2.tokens;
      }, k.prototype.render = function(e2, t2) {
        return t2 = t2 || {}, this.renderer.render(this.parse(e2, t2), this.options, t2);
      }, k.prototype.parseInline = function(e2, t2) {
        var r2 = new this.core.State(e2, this, t2);
        return r2.inlineMode = true, this.core.process(r2), r2.tokens;
      }, k.prototype.renderInline = function(e2, t2) {
        return t2 = t2 || {}, this.renderer.render(this.parseInline(e2, t2), this.options, t2);
      }, e.exports = k;
    }, function(e) {
      e.exports = JSON.parse('{"Aacute":"\xC1","aacute":"\xE1","Abreve":"\u0102","abreve":"\u0103","ac":"\u223E","acd":"\u223F","acE":"\u223E\u0333","Acirc":"\xC2","acirc":"\xE2","acute":"\xB4","Acy":"\u0410","acy":"\u0430","AElig":"\xC6","aelig":"\xE6","af":"\u2061","Afr":"\u{1D504}","afr":"\u{1D51E}","Agrave":"\xC0","agrave":"\xE0","alefsym":"\u2135","aleph":"\u2135","Alpha":"\u0391","alpha":"\u03B1","Amacr":"\u0100","amacr":"\u0101","amalg":"\u2A3F","amp":"&","AMP":"&","andand":"\u2A55","And":"\u2A53","and":"\u2227","andd":"\u2A5C","andslope":"\u2A58","andv":"\u2A5A","ang":"\u2220","ange":"\u29A4","angle":"\u2220","angmsdaa":"\u29A8","angmsdab":"\u29A9","angmsdac":"\u29AA","angmsdad":"\u29AB","angmsdae":"\u29AC","angmsdaf":"\u29AD","angmsdag":"\u29AE","angmsdah":"\u29AF","angmsd":"\u2221","angrt":"\u221F","angrtvb":"\u22BE","angrtvbd":"\u299D","angsph":"\u2222","angst":"\xC5","angzarr":"\u237C","Aogon":"\u0104","aogon":"\u0105","Aopf":"\u{1D538}","aopf":"\u{1D552}","apacir":"\u2A6F","ap":"\u2248","apE":"\u2A70","ape":"\u224A","apid":"\u224B","apos":"\'","ApplyFunction":"\u2061","approx":"\u2248","approxeq":"\u224A","Aring":"\xC5","aring":"\xE5","Ascr":"\u{1D49C}","ascr":"\u{1D4B6}","Assign":"\u2254","ast":"*","asymp":"\u2248","asympeq":"\u224D","Atilde":"\xC3","atilde":"\xE3","Auml":"\xC4","auml":"\xE4","awconint":"\u2233","awint":"\u2A11","backcong":"\u224C","backepsilon":"\u03F6","backprime":"\u2035","backsim":"\u223D","backsimeq":"\u22CD","Backslash":"\u2216","Barv":"\u2AE7","barvee":"\u22BD","barwed":"\u2305","Barwed":"\u2306","barwedge":"\u2305","bbrk":"\u23B5","bbrktbrk":"\u23B6","bcong":"\u224C","Bcy":"\u0411","bcy":"\u0431","bdquo":"\u201E","becaus":"\u2235","because":"\u2235","Because":"\u2235","bemptyv":"\u29B0","bepsi":"\u03F6","bernou":"\u212C","Bernoullis":"\u212C","Beta":"\u0392","beta":"\u03B2","beth":"\u2136","between":"\u226C","Bfr":"\u{1D505}","bfr":"\u{1D51F}","bigcap":"\u22C2","bigcirc":"\u25EF","bigcup":"\u22C3","bigodot":"\u2A00","bigoplus":"\u2A01","bigotimes":"\u2A02","bigsqcup":"\u2A06","bigstar":"\u2605","bigtriangledown":"\u25BD","bigtriangleup":"\u25B3","biguplus":"\u2A04","bigvee":"\u22C1","bigwedge":"\u22C0","bkarow":"\u290D","blacklozenge":"\u29EB","blacksquare":"\u25AA","blacktriangle":"\u25B4","blacktriangledown":"\u25BE","blacktriangleleft":"\u25C2","blacktriangleright":"\u25B8","blank":"\u2423","blk12":"\u2592","blk14":"\u2591","blk34":"\u2593","block":"\u2588","bne":"=\u20E5","bnequiv":"\u2261\u20E5","bNot":"\u2AED","bnot":"\u2310","Bopf":"\u{1D539}","bopf":"\u{1D553}","bot":"\u22A5","bottom":"\u22A5","bowtie":"\u22C8","boxbox":"\u29C9","boxdl":"\u2510","boxdL":"\u2555","boxDl":"\u2556","boxDL":"\u2557","boxdr":"\u250C","boxdR":"\u2552","boxDr":"\u2553","boxDR":"\u2554","boxh":"\u2500","boxH":"\u2550","boxhd":"\u252C","boxHd":"\u2564","boxhD":"\u2565","boxHD":"\u2566","boxhu":"\u2534","boxHu":"\u2567","boxhU":"\u2568","boxHU":"\u2569","boxminus":"\u229F","boxplus":"\u229E","boxtimes":"\u22A0","boxul":"\u2518","boxuL":"\u255B","boxUl":"\u255C","boxUL":"\u255D","boxur":"\u2514","boxuR":"\u2558","boxUr":"\u2559","boxUR":"\u255A","boxv":"\u2502","boxV":"\u2551","boxvh":"\u253C","boxvH":"\u256A","boxVh":"\u256B","boxVH":"\u256C","boxvl":"\u2524","boxvL":"\u2561","boxVl":"\u2562","boxVL":"\u2563","boxvr":"\u251C","boxvR":"\u255E","boxVr":"\u255F","boxVR":"\u2560","bprime":"\u2035","breve":"\u02D8","Breve":"\u02D8","brvbar":"\xA6","bscr":"\u{1D4B7}","Bscr":"\u212C","bsemi":"\u204F","bsim":"\u223D","bsime":"\u22CD","bsolb":"\u29C5","bsol":"\\\\","bsolhsub":"\u27C8","bull":"\u2022","bullet":"\u2022","bump":"\u224E","bumpE":"\u2AAE","bumpe":"\u224F","Bumpeq":"\u224E","bumpeq":"\u224F","Cacute":"\u0106","cacute":"\u0107","capand":"\u2A44","capbrcup":"\u2A49","capcap":"\u2A4B","cap":"\u2229","Cap":"\u22D2","capcup":"\u2A47","capdot":"\u2A40","CapitalDifferentialD":"\u2145","caps":"\u2229\uFE00","caret":"\u2041","caron":"\u02C7","Cayleys":"\u212D","ccaps":"\u2A4D","Ccaron":"\u010C","ccaron":"\u010D","Ccedil":"\xC7","ccedil":"\xE7","Ccirc":"\u0108","ccirc":"\u0109","Cconint":"\u2230","ccups":"\u2A4C","ccupssm":"\u2A50","Cdot":"\u010A","cdot":"\u010B","cedil":"\xB8","Cedilla":"\xB8","cemptyv":"\u29B2","cent":"\xA2","centerdot":"\xB7","CenterDot":"\xB7","cfr":"\u{1D520}","Cfr":"\u212D","CHcy":"\u0427","chcy":"\u0447","check":"\u2713","checkmark":"\u2713","Chi":"\u03A7","chi":"\u03C7","circ":"\u02C6","circeq":"\u2257","circlearrowleft":"\u21BA","circlearrowright":"\u21BB","circledast":"\u229B","circledcirc":"\u229A","circleddash":"\u229D","CircleDot":"\u2299","circledR":"\xAE","circledS":"\u24C8","CircleMinus":"\u2296","CirclePlus":"\u2295","CircleTimes":"\u2297","cir":"\u25CB","cirE":"\u29C3","cire":"\u2257","cirfnint":"\u2A10","cirmid":"\u2AEF","cirscir":"\u29C2","ClockwiseContourIntegral":"\u2232","CloseCurlyDoubleQuote":"\u201D","CloseCurlyQuote":"\u2019","clubs":"\u2663","clubsuit":"\u2663","colon":":","Colon":"\u2237","Colone":"\u2A74","colone":"\u2254","coloneq":"\u2254","comma":",","commat":"@","comp":"\u2201","compfn":"\u2218","complement":"\u2201","complexes":"\u2102","cong":"\u2245","congdot":"\u2A6D","Congruent":"\u2261","conint":"\u222E","Conint":"\u222F","ContourIntegral":"\u222E","copf":"\u{1D554}","Copf":"\u2102","coprod":"\u2210","Coproduct":"\u2210","copy":"\xA9","COPY":"\xA9","copysr":"\u2117","CounterClockwiseContourIntegral":"\u2233","crarr":"\u21B5","cross":"\u2717","Cross":"\u2A2F","Cscr":"\u{1D49E}","cscr":"\u{1D4B8}","csub":"\u2ACF","csube":"\u2AD1","csup":"\u2AD0","csupe":"\u2AD2","ctdot":"\u22EF","cudarrl":"\u2938","cudarrr":"\u2935","cuepr":"\u22DE","cuesc":"\u22DF","cularr":"\u21B6","cularrp":"\u293D","cupbrcap":"\u2A48","cupcap":"\u2A46","CupCap":"\u224D","cup":"\u222A","Cup":"\u22D3","cupcup":"\u2A4A","cupdot":"\u228D","cupor":"\u2A45","cups":"\u222A\uFE00","curarr":"\u21B7","curarrm":"\u293C","curlyeqprec":"\u22DE","curlyeqsucc":"\u22DF","curlyvee":"\u22CE","curlywedge":"\u22CF","curren":"\xA4","curvearrowleft":"\u21B6","curvearrowright":"\u21B7","cuvee":"\u22CE","cuwed":"\u22CF","cwconint":"\u2232","cwint":"\u2231","cylcty":"\u232D","dagger":"\u2020","Dagger":"\u2021","daleth":"\u2138","darr":"\u2193","Darr":"\u21A1","dArr":"\u21D3","dash":"\u2010","Dashv":"\u2AE4","dashv":"\u22A3","dbkarow":"\u290F","dblac":"\u02DD","Dcaron":"\u010E","dcaron":"\u010F","Dcy":"\u0414","dcy":"\u0434","ddagger":"\u2021","ddarr":"\u21CA","DD":"\u2145","dd":"\u2146","DDotrahd":"\u2911","ddotseq":"\u2A77","deg":"\xB0","Del":"\u2207","Delta":"\u0394","delta":"\u03B4","demptyv":"\u29B1","dfisht":"\u297F","Dfr":"\u{1D507}","dfr":"\u{1D521}","dHar":"\u2965","dharl":"\u21C3","dharr":"\u21C2","DiacriticalAcute":"\xB4","DiacriticalDot":"\u02D9","DiacriticalDoubleAcute":"\u02DD","DiacriticalGrave":"`","DiacriticalTilde":"\u02DC","diam":"\u22C4","diamond":"\u22C4","Diamond":"\u22C4","diamondsuit":"\u2666","diams":"\u2666","die":"\xA8","DifferentialD":"\u2146","digamma":"\u03DD","disin":"\u22F2","div":"\xF7","divide":"\xF7","divideontimes":"\u22C7","divonx":"\u22C7","DJcy":"\u0402","djcy":"\u0452","dlcorn":"\u231E","dlcrop":"\u230D","dollar":"$","Dopf":"\u{1D53B}","dopf":"\u{1D555}","Dot":"\xA8","dot":"\u02D9","DotDot":"\u20DC","doteq":"\u2250","doteqdot":"\u2251","DotEqual":"\u2250","dotminus":"\u2238","dotplus":"\u2214","dotsquare":"\u22A1","doublebarwedge":"\u2306","DoubleContourIntegral":"\u222F","DoubleDot":"\xA8","DoubleDownArrow":"\u21D3","DoubleLeftArrow":"\u21D0","DoubleLeftRightArrow":"\u21D4","DoubleLeftTee":"\u2AE4","DoubleLongLeftArrow":"\u27F8","DoubleLongLeftRightArrow":"\u27FA","DoubleLongRightArrow":"\u27F9","DoubleRightArrow":"\u21D2","DoubleRightTee":"\u22A8","DoubleUpArrow":"\u21D1","DoubleUpDownArrow":"\u21D5","DoubleVerticalBar":"\u2225","DownArrowBar":"\u2913","downarrow":"\u2193","DownArrow":"\u2193","Downarrow":"\u21D3","DownArrowUpArrow":"\u21F5","DownBreve":"\u0311","downdownarrows":"\u21CA","downharpoonleft":"\u21C3","downharpoonright":"\u21C2","DownLeftRightVector":"\u2950","DownLeftTeeVector":"\u295E","DownLeftVectorBar":"\u2956","DownLeftVector":"\u21BD","DownRightTeeVector":"\u295F","DownRightVectorBar":"\u2957","DownRightVector":"\u21C1","DownTeeArrow":"\u21A7","DownTee":"\u22A4","drbkarow":"\u2910","drcorn":"\u231F","drcrop":"\u230C","Dscr":"\u{1D49F}","dscr":"\u{1D4B9}","DScy":"\u0405","dscy":"\u0455","dsol":"\u29F6","Dstrok":"\u0110","dstrok":"\u0111","dtdot":"\u22F1","dtri":"\u25BF","dtrif":"\u25BE","duarr":"\u21F5","duhar":"\u296F","dwangle":"\u29A6","DZcy":"\u040F","dzcy":"\u045F","dzigrarr":"\u27FF","Eacute":"\xC9","eacute":"\xE9","easter":"\u2A6E","Ecaron":"\u011A","ecaron":"\u011B","Ecirc":"\xCA","ecirc":"\xEA","ecir":"\u2256","ecolon":"\u2255","Ecy":"\u042D","ecy":"\u044D","eDDot":"\u2A77","Edot":"\u0116","edot":"\u0117","eDot":"\u2251","ee":"\u2147","efDot":"\u2252","Efr":"\u{1D508}","efr":"\u{1D522}","eg":"\u2A9A","Egrave":"\xC8","egrave":"\xE8","egs":"\u2A96","egsdot":"\u2A98","el":"\u2A99","Element":"\u2208","elinters":"\u23E7","ell":"\u2113","els":"\u2A95","elsdot":"\u2A97","Emacr":"\u0112","emacr":"\u0113","empty":"\u2205","emptyset":"\u2205","EmptySmallSquare":"\u25FB","emptyv":"\u2205","EmptyVerySmallSquare":"\u25AB","emsp13":"\u2004","emsp14":"\u2005","emsp":"\u2003","ENG":"\u014A","eng":"\u014B","ensp":"\u2002","Eogon":"\u0118","eogon":"\u0119","Eopf":"\u{1D53C}","eopf":"\u{1D556}","epar":"\u22D5","eparsl":"\u29E3","eplus":"\u2A71","epsi":"\u03B5","Epsilon":"\u0395","epsilon":"\u03B5","epsiv":"\u03F5","eqcirc":"\u2256","eqcolon":"\u2255","eqsim":"\u2242","eqslantgtr":"\u2A96","eqslantless":"\u2A95","Equal":"\u2A75","equals":"=","EqualTilde":"\u2242","equest":"\u225F","Equilibrium":"\u21CC","equiv":"\u2261","equivDD":"\u2A78","eqvparsl":"\u29E5","erarr":"\u2971","erDot":"\u2253","escr":"\u212F","Escr":"\u2130","esdot":"\u2250","Esim":"\u2A73","esim":"\u2242","Eta":"\u0397","eta":"\u03B7","ETH":"\xD0","eth":"\xF0","Euml":"\xCB","euml":"\xEB","euro":"\u20AC","excl":"!","exist":"\u2203","Exists":"\u2203","expectation":"\u2130","exponentiale":"\u2147","ExponentialE":"\u2147","fallingdotseq":"\u2252","Fcy":"\u0424","fcy":"\u0444","female":"\u2640","ffilig":"\uFB03","fflig":"\uFB00","ffllig":"\uFB04","Ffr":"\u{1D509}","ffr":"\u{1D523}","filig":"\uFB01","FilledSmallSquare":"\u25FC","FilledVerySmallSquare":"\u25AA","fjlig":"fj","flat":"\u266D","fllig":"\uFB02","fltns":"\u25B1","fnof":"\u0192","Fopf":"\u{1D53D}","fopf":"\u{1D557}","forall":"\u2200","ForAll":"\u2200","fork":"\u22D4","forkv":"\u2AD9","Fouriertrf":"\u2131","fpartint":"\u2A0D","frac12":"\xBD","frac13":"\u2153","frac14":"\xBC","frac15":"\u2155","frac16":"\u2159","frac18":"\u215B","frac23":"\u2154","frac25":"\u2156","frac34":"\xBE","frac35":"\u2157","frac38":"\u215C","frac45":"\u2158","frac56":"\u215A","frac58":"\u215D","frac78":"\u215E","frasl":"\u2044","frown":"\u2322","fscr":"\u{1D4BB}","Fscr":"\u2131","gacute":"\u01F5","Gamma":"\u0393","gamma":"\u03B3","Gammad":"\u03DC","gammad":"\u03DD","gap":"\u2A86","Gbreve":"\u011E","gbreve":"\u011F","Gcedil":"\u0122","Gcirc":"\u011C","gcirc":"\u011D","Gcy":"\u0413","gcy":"\u0433","Gdot":"\u0120","gdot":"\u0121","ge":"\u2265","gE":"\u2267","gEl":"\u2A8C","gel":"\u22DB","geq":"\u2265","geqq":"\u2267","geqslant":"\u2A7E","gescc":"\u2AA9","ges":"\u2A7E","gesdot":"\u2A80","gesdoto":"\u2A82","gesdotol":"\u2A84","gesl":"\u22DB\uFE00","gesles":"\u2A94","Gfr":"\u{1D50A}","gfr":"\u{1D524}","gg":"\u226B","Gg":"\u22D9","ggg":"\u22D9","gimel":"\u2137","GJcy":"\u0403","gjcy":"\u0453","gla":"\u2AA5","gl":"\u2277","glE":"\u2A92","glj":"\u2AA4","gnap":"\u2A8A","gnapprox":"\u2A8A","gne":"\u2A88","gnE":"\u2269","gneq":"\u2A88","gneqq":"\u2269","gnsim":"\u22E7","Gopf":"\u{1D53E}","gopf":"\u{1D558}","grave":"`","GreaterEqual":"\u2265","GreaterEqualLess":"\u22DB","GreaterFullEqual":"\u2267","GreaterGreater":"\u2AA2","GreaterLess":"\u2277","GreaterSlantEqual":"\u2A7E","GreaterTilde":"\u2273","Gscr":"\u{1D4A2}","gscr":"\u210A","gsim":"\u2273","gsime":"\u2A8E","gsiml":"\u2A90","gtcc":"\u2AA7","gtcir":"\u2A7A","gt":">","GT":">","Gt":"\u226B","gtdot":"\u22D7","gtlPar":"\u2995","gtquest":"\u2A7C","gtrapprox":"\u2A86","gtrarr":"\u2978","gtrdot":"\u22D7","gtreqless":"\u22DB","gtreqqless":"\u2A8C","gtrless":"\u2277","gtrsim":"\u2273","gvertneqq":"\u2269\uFE00","gvnE":"\u2269\uFE00","Hacek":"\u02C7","hairsp":"\u200A","half":"\xBD","hamilt":"\u210B","HARDcy":"\u042A","hardcy":"\u044A","harrcir":"\u2948","harr":"\u2194","hArr":"\u21D4","harrw":"\u21AD","Hat":"^","hbar":"\u210F","Hcirc":"\u0124","hcirc":"\u0125","hearts":"\u2665","heartsuit":"\u2665","hellip":"\u2026","hercon":"\u22B9","hfr":"\u{1D525}","Hfr":"\u210C","HilbertSpace":"\u210B","hksearow":"\u2925","hkswarow":"\u2926","hoarr":"\u21FF","homtht":"\u223B","hookleftarrow":"\u21A9","hookrightarrow":"\u21AA","hopf":"\u{1D559}","Hopf":"\u210D","horbar":"\u2015","HorizontalLine":"\u2500","hscr":"\u{1D4BD}","Hscr":"\u210B","hslash":"\u210F","Hstrok":"\u0126","hstrok":"\u0127","HumpDownHump":"\u224E","HumpEqual":"\u224F","hybull":"\u2043","hyphen":"\u2010","Iacute":"\xCD","iacute":"\xED","ic":"\u2063","Icirc":"\xCE","icirc":"\xEE","Icy":"\u0418","icy":"\u0438","Idot":"\u0130","IEcy":"\u0415","iecy":"\u0435","iexcl":"\xA1","iff":"\u21D4","ifr":"\u{1D526}","Ifr":"\u2111","Igrave":"\xCC","igrave":"\xEC","ii":"\u2148","iiiint":"\u2A0C","iiint":"\u222D","iinfin":"\u29DC","iiota":"\u2129","IJlig":"\u0132","ijlig":"\u0133","Imacr":"\u012A","imacr":"\u012B","image":"\u2111","ImaginaryI":"\u2148","imagline":"\u2110","imagpart":"\u2111","imath":"\u0131","Im":"\u2111","imof":"\u22B7","imped":"\u01B5","Implies":"\u21D2","incare":"\u2105","in":"\u2208","infin":"\u221E","infintie":"\u29DD","inodot":"\u0131","intcal":"\u22BA","int":"\u222B","Int":"\u222C","integers":"\u2124","Integral":"\u222B","intercal":"\u22BA","Intersection":"\u22C2","intlarhk":"\u2A17","intprod":"\u2A3C","InvisibleComma":"\u2063","InvisibleTimes":"\u2062","IOcy":"\u0401","iocy":"\u0451","Iogon":"\u012E","iogon":"\u012F","Iopf":"\u{1D540}","iopf":"\u{1D55A}","Iota":"\u0399","iota":"\u03B9","iprod":"\u2A3C","iquest":"\xBF","iscr":"\u{1D4BE}","Iscr":"\u2110","isin":"\u2208","isindot":"\u22F5","isinE":"\u22F9","isins":"\u22F4","isinsv":"\u22F3","isinv":"\u2208","it":"\u2062","Itilde":"\u0128","itilde":"\u0129","Iukcy":"\u0406","iukcy":"\u0456","Iuml":"\xCF","iuml":"\xEF","Jcirc":"\u0134","jcirc":"\u0135","Jcy":"\u0419","jcy":"\u0439","Jfr":"\u{1D50D}","jfr":"\u{1D527}","jmath":"\u0237","Jopf":"\u{1D541}","jopf":"\u{1D55B}","Jscr":"\u{1D4A5}","jscr":"\u{1D4BF}","Jsercy":"\u0408","jsercy":"\u0458","Jukcy":"\u0404","jukcy":"\u0454","Kappa":"\u039A","kappa":"\u03BA","kappav":"\u03F0","Kcedil":"\u0136","kcedil":"\u0137","Kcy":"\u041A","kcy":"\u043A","Kfr":"\u{1D50E}","kfr":"\u{1D528}","kgreen":"\u0138","KHcy":"\u0425","khcy":"\u0445","KJcy":"\u040C","kjcy":"\u045C","Kopf":"\u{1D542}","kopf":"\u{1D55C}","Kscr":"\u{1D4A6}","kscr":"\u{1D4C0}","lAarr":"\u21DA","Lacute":"\u0139","lacute":"\u013A","laemptyv":"\u29B4","lagran":"\u2112","Lambda":"\u039B","lambda":"\u03BB","lang":"\u27E8","Lang":"\u27EA","langd":"\u2991","langle":"\u27E8","lap":"\u2A85","Laplacetrf":"\u2112","laquo":"\xAB","larrb":"\u21E4","larrbfs":"\u291F","larr":"\u2190","Larr":"\u219E","lArr":"\u21D0","larrfs":"\u291D","larrhk":"\u21A9","larrlp":"\u21AB","larrpl":"\u2939","larrsim":"\u2973","larrtl":"\u21A2","latail":"\u2919","lAtail":"\u291B","lat":"\u2AAB","late":"\u2AAD","lates":"\u2AAD\uFE00","lbarr":"\u290C","lBarr":"\u290E","lbbrk":"\u2772","lbrace":"{","lbrack":"[","lbrke":"\u298B","lbrksld":"\u298F","lbrkslu":"\u298D","Lcaron":"\u013D","lcaron":"\u013E","Lcedil":"\u013B","lcedil":"\u013C","lceil":"\u2308","lcub":"{","Lcy":"\u041B","lcy":"\u043B","ldca":"\u2936","ldquo":"\u201C","ldquor":"\u201E","ldrdhar":"\u2967","ldrushar":"\u294B","ldsh":"\u21B2","le":"\u2264","lE":"\u2266","LeftAngleBracket":"\u27E8","LeftArrowBar":"\u21E4","leftarrow":"\u2190","LeftArrow":"\u2190","Leftarrow":"\u21D0","LeftArrowRightArrow":"\u21C6","leftarrowtail":"\u21A2","LeftCeiling":"\u2308","LeftDoubleBracket":"\u27E6","LeftDownTeeVector":"\u2961","LeftDownVectorBar":"\u2959","LeftDownVector":"\u21C3","LeftFloor":"\u230A","leftharpoondown":"\u21BD","leftharpoonup":"\u21BC","leftleftarrows":"\u21C7","leftrightarrow":"\u2194","LeftRightArrow":"\u2194","Leftrightarrow":"\u21D4","leftrightarrows":"\u21C6","leftrightharpoons":"\u21CB","leftrightsquigarrow":"\u21AD","LeftRightVector":"\u294E","LeftTeeArrow":"\u21A4","LeftTee":"\u22A3","LeftTeeVector":"\u295A","leftthreetimes":"\u22CB","LeftTriangleBar":"\u29CF","LeftTriangle":"\u22B2","LeftTriangleEqual":"\u22B4","LeftUpDownVector":"\u2951","LeftUpTeeVector":"\u2960","LeftUpVectorBar":"\u2958","LeftUpVector":"\u21BF","LeftVectorBar":"\u2952","LeftVector":"\u21BC","lEg":"\u2A8B","leg":"\u22DA","leq":"\u2264","leqq":"\u2266","leqslant":"\u2A7D","lescc":"\u2AA8","les":"\u2A7D","lesdot":"\u2A7F","lesdoto":"\u2A81","lesdotor":"\u2A83","lesg":"\u22DA\uFE00","lesges":"\u2A93","lessapprox":"\u2A85","lessdot":"\u22D6","lesseqgtr":"\u22DA","lesseqqgtr":"\u2A8B","LessEqualGreater":"\u22DA","LessFullEqual":"\u2266","LessGreater":"\u2276","lessgtr":"\u2276","LessLess":"\u2AA1","lesssim":"\u2272","LessSlantEqual":"\u2A7D","LessTilde":"\u2272","lfisht":"\u297C","lfloor":"\u230A","Lfr":"\u{1D50F}","lfr":"\u{1D529}","lg":"\u2276","lgE":"\u2A91","lHar":"\u2962","lhard":"\u21BD","lharu":"\u21BC","lharul":"\u296A","lhblk":"\u2584","LJcy":"\u0409","ljcy":"\u0459","llarr":"\u21C7","ll":"\u226A","Ll":"\u22D8","llcorner":"\u231E","Lleftarrow":"\u21DA","llhard":"\u296B","lltri":"\u25FA","Lmidot":"\u013F","lmidot":"\u0140","lmoustache":"\u23B0","lmoust":"\u23B0","lnap":"\u2A89","lnapprox":"\u2A89","lne":"\u2A87","lnE":"\u2268","lneq":"\u2A87","lneqq":"\u2268","lnsim":"\u22E6","loang":"\u27EC","loarr":"\u21FD","lobrk":"\u27E6","longleftarrow":"\u27F5","LongLeftArrow":"\u27F5","Longleftarrow":"\u27F8","longleftrightarrow":"\u27F7","LongLeftRightArrow":"\u27F7","Longleftrightarrow":"\u27FA","longmapsto":"\u27FC","longrightarrow":"\u27F6","LongRightArrow":"\u27F6","Longrightarrow":"\u27F9","looparrowleft":"\u21AB","looparrowright":"\u21AC","lopar":"\u2985","Lopf":"\u{1D543}","lopf":"\u{1D55D}","loplus":"\u2A2D","lotimes":"\u2A34","lowast":"\u2217","lowbar":"_","LowerLeftArrow":"\u2199","LowerRightArrow":"\u2198","loz":"\u25CA","lozenge":"\u25CA","lozf":"\u29EB","lpar":"(","lparlt":"\u2993","lrarr":"\u21C6","lrcorner":"\u231F","lrhar":"\u21CB","lrhard":"\u296D","lrm":"\u200E","lrtri":"\u22BF","lsaquo":"\u2039","lscr":"\u{1D4C1}","Lscr":"\u2112","lsh":"\u21B0","Lsh":"\u21B0","lsim":"\u2272","lsime":"\u2A8D","lsimg":"\u2A8F","lsqb":"[","lsquo":"\u2018","lsquor":"\u201A","Lstrok":"\u0141","lstrok":"\u0142","ltcc":"\u2AA6","ltcir":"\u2A79","lt":"<","LT":"<","Lt":"\u226A","ltdot":"\u22D6","lthree":"\u22CB","ltimes":"\u22C9","ltlarr":"\u2976","ltquest":"\u2A7B","ltri":"\u25C3","ltrie":"\u22B4","ltrif":"\u25C2","ltrPar":"\u2996","lurdshar":"\u294A","luruhar":"\u2966","lvertneqq":"\u2268\uFE00","lvnE":"\u2268\uFE00","macr":"\xAF","male":"\u2642","malt":"\u2720","maltese":"\u2720","Map":"\u2905","map":"\u21A6","mapsto":"\u21A6","mapstodown":"\u21A7","mapstoleft":"\u21A4","mapstoup":"\u21A5","marker":"\u25AE","mcomma":"\u2A29","Mcy":"\u041C","mcy":"\u043C","mdash":"\u2014","mDDot":"\u223A","measuredangle":"\u2221","MediumSpace":"\u205F","Mellintrf":"\u2133","Mfr":"\u{1D510}","mfr":"\u{1D52A}","mho":"\u2127","micro":"\xB5","midast":"*","midcir":"\u2AF0","mid":"\u2223","middot":"\xB7","minusb":"\u229F","minus":"\u2212","minusd":"\u2238","minusdu":"\u2A2A","MinusPlus":"\u2213","mlcp":"\u2ADB","mldr":"\u2026","mnplus":"\u2213","models":"\u22A7","Mopf":"\u{1D544}","mopf":"\u{1D55E}","mp":"\u2213","mscr":"\u{1D4C2}","Mscr":"\u2133","mstpos":"\u223E","Mu":"\u039C","mu":"\u03BC","multimap":"\u22B8","mumap":"\u22B8","nabla":"\u2207","Nacute":"\u0143","nacute":"\u0144","nang":"\u2220\u20D2","nap":"\u2249","napE":"\u2A70\u0338","napid":"\u224B\u0338","napos":"\u0149","napprox":"\u2249","natural":"\u266E","naturals":"\u2115","natur":"\u266E","nbsp":"\xA0","nbump":"\u224E\u0338","nbumpe":"\u224F\u0338","ncap":"\u2A43","Ncaron":"\u0147","ncaron":"\u0148","Ncedil":"\u0145","ncedil":"\u0146","ncong":"\u2247","ncongdot":"\u2A6D\u0338","ncup":"\u2A42","Ncy":"\u041D","ncy":"\u043D","ndash":"\u2013","nearhk":"\u2924","nearr":"\u2197","neArr":"\u21D7","nearrow":"\u2197","ne":"\u2260","nedot":"\u2250\u0338","NegativeMediumSpace":"\u200B","NegativeThickSpace":"\u200B","NegativeThinSpace":"\u200B","NegativeVeryThinSpace":"\u200B","nequiv":"\u2262","nesear":"\u2928","nesim":"\u2242\u0338","NestedGreaterGreater":"\u226B","NestedLessLess":"\u226A","NewLine":"\\n","nexist":"\u2204","nexists":"\u2204","Nfr":"\u{1D511}","nfr":"\u{1D52B}","ngE":"\u2267\u0338","nge":"\u2271","ngeq":"\u2271","ngeqq":"\u2267\u0338","ngeqslant":"\u2A7E\u0338","nges":"\u2A7E\u0338","nGg":"\u22D9\u0338","ngsim":"\u2275","nGt":"\u226B\u20D2","ngt":"\u226F","ngtr":"\u226F","nGtv":"\u226B\u0338","nharr":"\u21AE","nhArr":"\u21CE","nhpar":"\u2AF2","ni":"\u220B","nis":"\u22FC","nisd":"\u22FA","niv":"\u220B","NJcy":"\u040A","njcy":"\u045A","nlarr":"\u219A","nlArr":"\u21CD","nldr":"\u2025","nlE":"\u2266\u0338","nle":"\u2270","nleftarrow":"\u219A","nLeftarrow":"\u21CD","nleftrightarrow":"\u21AE","nLeftrightarrow":"\u21CE","nleq":"\u2270","nleqq":"\u2266\u0338","nleqslant":"\u2A7D\u0338","nles":"\u2A7D\u0338","nless":"\u226E","nLl":"\u22D8\u0338","nlsim":"\u2274","nLt":"\u226A\u20D2","nlt":"\u226E","nltri":"\u22EA","nltrie":"\u22EC","nLtv":"\u226A\u0338","nmid":"\u2224","NoBreak":"\u2060","NonBreakingSpace":"\xA0","nopf":"\u{1D55F}","Nopf":"\u2115","Not":"\u2AEC","not":"\xAC","NotCongruent":"\u2262","NotCupCap":"\u226D","NotDoubleVerticalBar":"\u2226","NotElement":"\u2209","NotEqual":"\u2260","NotEqualTilde":"\u2242\u0338","NotExists":"\u2204","NotGreater":"\u226F","NotGreaterEqual":"\u2271","NotGreaterFullEqual":"\u2267\u0338","NotGreaterGreater":"\u226B\u0338","NotGreaterLess":"\u2279","NotGreaterSlantEqual":"\u2A7E\u0338","NotGreaterTilde":"\u2275","NotHumpDownHump":"\u224E\u0338","NotHumpEqual":"\u224F\u0338","notin":"\u2209","notindot":"\u22F5\u0338","notinE":"\u22F9\u0338","notinva":"\u2209","notinvb":"\u22F7","notinvc":"\u22F6","NotLeftTriangleBar":"\u29CF\u0338","NotLeftTriangle":"\u22EA","NotLeftTriangleEqual":"\u22EC","NotLess":"\u226E","NotLessEqual":"\u2270","NotLessGreater":"\u2278","NotLessLess":"\u226A\u0338","NotLessSlantEqual":"\u2A7D\u0338","NotLessTilde":"\u2274","NotNestedGreaterGreater":"\u2AA2\u0338","NotNestedLessLess":"\u2AA1\u0338","notni":"\u220C","notniva":"\u220C","notnivb":"\u22FE","notnivc":"\u22FD","NotPrecedes":"\u2280","NotPrecedesEqual":"\u2AAF\u0338","NotPrecedesSlantEqual":"\u22E0","NotReverseElement":"\u220C","NotRightTriangleBar":"\u29D0\u0338","NotRightTriangle":"\u22EB","NotRightTriangleEqual":"\u22ED","NotSquareSubset":"\u228F\u0338","NotSquareSubsetEqual":"\u22E2","NotSquareSuperset":"\u2290\u0338","NotSquareSupersetEqual":"\u22E3","NotSubset":"\u2282\u20D2","NotSubsetEqual":"\u2288","NotSucceeds":"\u2281","NotSucceedsEqual":"\u2AB0\u0338","NotSucceedsSlantEqual":"\u22E1","NotSucceedsTilde":"\u227F\u0338","NotSuperset":"\u2283\u20D2","NotSupersetEqual":"\u2289","NotTilde":"\u2241","NotTildeEqual":"\u2244","NotTildeFullEqual":"\u2247","NotTildeTilde":"\u2249","NotVerticalBar":"\u2224","nparallel":"\u2226","npar":"\u2226","nparsl":"\u2AFD\u20E5","npart":"\u2202\u0338","npolint":"\u2A14","npr":"\u2280","nprcue":"\u22E0","nprec":"\u2280","npreceq":"\u2AAF\u0338","npre":"\u2AAF\u0338","nrarrc":"\u2933\u0338","nrarr":"\u219B","nrArr":"\u21CF","nrarrw":"\u219D\u0338","nrightarrow":"\u219B","nRightarrow":"\u21CF","nrtri":"\u22EB","nrtrie":"\u22ED","nsc":"\u2281","nsccue":"\u22E1","nsce":"\u2AB0\u0338","Nscr":"\u{1D4A9}","nscr":"\u{1D4C3}","nshortmid":"\u2224","nshortparallel":"\u2226","nsim":"\u2241","nsime":"\u2244","nsimeq":"\u2244","nsmid":"\u2224","nspar":"\u2226","nsqsube":"\u22E2","nsqsupe":"\u22E3","nsub":"\u2284","nsubE":"\u2AC5\u0338","nsube":"\u2288","nsubset":"\u2282\u20D2","nsubseteq":"\u2288","nsubseteqq":"\u2AC5\u0338","nsucc":"\u2281","nsucceq":"\u2AB0\u0338","nsup":"\u2285","nsupE":"\u2AC6\u0338","nsupe":"\u2289","nsupset":"\u2283\u20D2","nsupseteq":"\u2289","nsupseteqq":"\u2AC6\u0338","ntgl":"\u2279","Ntilde":"\xD1","ntilde":"\xF1","ntlg":"\u2278","ntriangleleft":"\u22EA","ntrianglelefteq":"\u22EC","ntriangleright":"\u22EB","ntrianglerighteq":"\u22ED","Nu":"\u039D","nu":"\u03BD","num":"#","numero":"\u2116","numsp":"\u2007","nvap":"\u224D\u20D2","nvdash":"\u22AC","nvDash":"\u22AD","nVdash":"\u22AE","nVDash":"\u22AF","nvge":"\u2265\u20D2","nvgt":">\u20D2","nvHarr":"\u2904","nvinfin":"\u29DE","nvlArr":"\u2902","nvle":"\u2264\u20D2","nvlt":"<\u20D2","nvltrie":"\u22B4\u20D2","nvrArr":"\u2903","nvrtrie":"\u22B5\u20D2","nvsim":"\u223C\u20D2","nwarhk":"\u2923","nwarr":"\u2196","nwArr":"\u21D6","nwarrow":"\u2196","nwnear":"\u2927","Oacute":"\xD3","oacute":"\xF3","oast":"\u229B","Ocirc":"\xD4","ocirc":"\xF4","ocir":"\u229A","Ocy":"\u041E","ocy":"\u043E","odash":"\u229D","Odblac":"\u0150","odblac":"\u0151","odiv":"\u2A38","odot":"\u2299","odsold":"\u29BC","OElig":"\u0152","oelig":"\u0153","ofcir":"\u29BF","Ofr":"\u{1D512}","ofr":"\u{1D52C}","ogon":"\u02DB","Ograve":"\xD2","ograve":"\xF2","ogt":"\u29C1","ohbar":"\u29B5","ohm":"\u03A9","oint":"\u222E","olarr":"\u21BA","olcir":"\u29BE","olcross":"\u29BB","oline":"\u203E","olt":"\u29C0","Omacr":"\u014C","omacr":"\u014D","Omega":"\u03A9","omega":"\u03C9","Omicron":"\u039F","omicron":"\u03BF","omid":"\u29B6","ominus":"\u2296","Oopf":"\u{1D546}","oopf":"\u{1D560}","opar":"\u29B7","OpenCurlyDoubleQuote":"\u201C","OpenCurlyQuote":"\u2018","operp":"\u29B9","oplus":"\u2295","orarr":"\u21BB","Or":"\u2A54","or":"\u2228","ord":"\u2A5D","order":"\u2134","orderof":"\u2134","ordf":"\xAA","ordm":"\xBA","origof":"\u22B6","oror":"\u2A56","orslope":"\u2A57","orv":"\u2A5B","oS":"\u24C8","Oscr":"\u{1D4AA}","oscr":"\u2134","Oslash":"\xD8","oslash":"\xF8","osol":"\u2298","Otilde":"\xD5","otilde":"\xF5","otimesas":"\u2A36","Otimes":"\u2A37","otimes":"\u2297","Ouml":"\xD6","ouml":"\xF6","ovbar":"\u233D","OverBar":"\u203E","OverBrace":"\u23DE","OverBracket":"\u23B4","OverParenthesis":"\u23DC","para":"\xB6","parallel":"\u2225","par":"\u2225","parsim":"\u2AF3","parsl":"\u2AFD","part":"\u2202","PartialD":"\u2202","Pcy":"\u041F","pcy":"\u043F","percnt":"%","period":".","permil":"\u2030","perp":"\u22A5","pertenk":"\u2031","Pfr":"\u{1D513}","pfr":"\u{1D52D}","Phi":"\u03A6","phi":"\u03C6","phiv":"\u03D5","phmmat":"\u2133","phone":"\u260E","Pi":"\u03A0","pi":"\u03C0","pitchfork":"\u22D4","piv":"\u03D6","planck":"\u210F","planckh":"\u210E","plankv":"\u210F","plusacir":"\u2A23","plusb":"\u229E","pluscir":"\u2A22","plus":"+","plusdo":"\u2214","plusdu":"\u2A25","pluse":"\u2A72","PlusMinus":"\xB1","plusmn":"\xB1","plussim":"\u2A26","plustwo":"\u2A27","pm":"\xB1","Poincareplane":"\u210C","pointint":"\u2A15","popf":"\u{1D561}","Popf":"\u2119","pound":"\xA3","prap":"\u2AB7","Pr":"\u2ABB","pr":"\u227A","prcue":"\u227C","precapprox":"\u2AB7","prec":"\u227A","preccurlyeq":"\u227C","Precedes":"\u227A","PrecedesEqual":"\u2AAF","PrecedesSlantEqual":"\u227C","PrecedesTilde":"\u227E","preceq":"\u2AAF","precnapprox":"\u2AB9","precneqq":"\u2AB5","precnsim":"\u22E8","pre":"\u2AAF","prE":"\u2AB3","precsim":"\u227E","prime":"\u2032","Prime":"\u2033","primes":"\u2119","prnap":"\u2AB9","prnE":"\u2AB5","prnsim":"\u22E8","prod":"\u220F","Product":"\u220F","profalar":"\u232E","profline":"\u2312","profsurf":"\u2313","prop":"\u221D","Proportional":"\u221D","Proportion":"\u2237","propto":"\u221D","prsim":"\u227E","prurel":"\u22B0","Pscr":"\u{1D4AB}","pscr":"\u{1D4C5}","Psi":"\u03A8","psi":"\u03C8","puncsp":"\u2008","Qfr":"\u{1D514}","qfr":"\u{1D52E}","qint":"\u2A0C","qopf":"\u{1D562}","Qopf":"\u211A","qprime":"\u2057","Qscr":"\u{1D4AC}","qscr":"\u{1D4C6}","quaternions":"\u210D","quatint":"\u2A16","quest":"?","questeq":"\u225F","quot":"\\"","QUOT":"\\"","rAarr":"\u21DB","race":"\u223D\u0331","Racute":"\u0154","racute":"\u0155","radic":"\u221A","raemptyv":"\u29B3","rang":"\u27E9","Rang":"\u27EB","rangd":"\u2992","range":"\u29A5","rangle":"\u27E9","raquo":"\xBB","rarrap":"\u2975","rarrb":"\u21E5","rarrbfs":"\u2920","rarrc":"\u2933","rarr":"\u2192","Rarr":"\u21A0","rArr":"\u21D2","rarrfs":"\u291E","rarrhk":"\u21AA","rarrlp":"\u21AC","rarrpl":"\u2945","rarrsim":"\u2974","Rarrtl":"\u2916","rarrtl":"\u21A3","rarrw":"\u219D","ratail":"\u291A","rAtail":"\u291C","ratio":"\u2236","rationals":"\u211A","rbarr":"\u290D","rBarr":"\u290F","RBarr":"\u2910","rbbrk":"\u2773","rbrace":"}","rbrack":"]","rbrke":"\u298C","rbrksld":"\u298E","rbrkslu":"\u2990","Rcaron":"\u0158","rcaron":"\u0159","Rcedil":"\u0156","rcedil":"\u0157","rceil":"\u2309","rcub":"}","Rcy":"\u0420","rcy":"\u0440","rdca":"\u2937","rdldhar":"\u2969","rdquo":"\u201D","rdquor":"\u201D","rdsh":"\u21B3","real":"\u211C","realine":"\u211B","realpart":"\u211C","reals":"\u211D","Re":"\u211C","rect":"\u25AD","reg":"\xAE","REG":"\xAE","ReverseElement":"\u220B","ReverseEquilibrium":"\u21CB","ReverseUpEquilibrium":"\u296F","rfisht":"\u297D","rfloor":"\u230B","rfr":"\u{1D52F}","Rfr":"\u211C","rHar":"\u2964","rhard":"\u21C1","rharu":"\u21C0","rharul":"\u296C","Rho":"\u03A1","rho":"\u03C1","rhov":"\u03F1","RightAngleBracket":"\u27E9","RightArrowBar":"\u21E5","rightarrow":"\u2192","RightArrow":"\u2192","Rightarrow":"\u21D2","RightArrowLeftArrow":"\u21C4","rightarrowtail":"\u21A3","RightCeiling":"\u2309","RightDoubleBracket":"\u27E7","RightDownTeeVector":"\u295D","RightDownVectorBar":"\u2955","RightDownVector":"\u21C2","RightFloor":"\u230B","rightharpoondown":"\u21C1","rightharpoonup":"\u21C0","rightleftarrows":"\u21C4","rightleftharpoons":"\u21CC","rightrightarrows":"\u21C9","rightsquigarrow":"\u219D","RightTeeArrow":"\u21A6","RightTee":"\u22A2","RightTeeVector":"\u295B","rightthreetimes":"\u22CC","RightTriangleBar":"\u29D0","RightTriangle":"\u22B3","RightTriangleEqual":"\u22B5","RightUpDownVector":"\u294F","RightUpTeeVector":"\u295C","RightUpVectorBar":"\u2954","RightUpVector":"\u21BE","RightVectorBar":"\u2953","RightVector":"\u21C0","ring":"\u02DA","risingdotseq":"\u2253","rlarr":"\u21C4","rlhar":"\u21CC","rlm":"\u200F","rmoustache":"\u23B1","rmoust":"\u23B1","rnmid":"\u2AEE","roang":"\u27ED","roarr":"\u21FE","robrk":"\u27E7","ropar":"\u2986","ropf":"\u{1D563}","Ropf":"\u211D","roplus":"\u2A2E","rotimes":"\u2A35","RoundImplies":"\u2970","rpar":")","rpargt":"\u2994","rppolint":"\u2A12","rrarr":"\u21C9","Rrightarrow":"\u21DB","rsaquo":"\u203A","rscr":"\u{1D4C7}","Rscr":"\u211B","rsh":"\u21B1","Rsh":"\u21B1","rsqb":"]","rsquo":"\u2019","rsquor":"\u2019","rthree":"\u22CC","rtimes":"\u22CA","rtri":"\u25B9","rtrie":"\u22B5","rtrif":"\u25B8","rtriltri":"\u29CE","RuleDelayed":"\u29F4","ruluhar":"\u2968","rx":"\u211E","Sacute":"\u015A","sacute":"\u015B","sbquo":"\u201A","scap":"\u2AB8","Scaron":"\u0160","scaron":"\u0161","Sc":"\u2ABC","sc":"\u227B","sccue":"\u227D","sce":"\u2AB0","scE":"\u2AB4","Scedil":"\u015E","scedil":"\u015F","Scirc":"\u015C","scirc":"\u015D","scnap":"\u2ABA","scnE":"\u2AB6","scnsim":"\u22E9","scpolint":"\u2A13","scsim":"\u227F","Scy":"\u0421","scy":"\u0441","sdotb":"\u22A1","sdot":"\u22C5","sdote":"\u2A66","searhk":"\u2925","searr":"\u2198","seArr":"\u21D8","searrow":"\u2198","sect":"\xA7","semi":";","seswar":"\u2929","setminus":"\u2216","setmn":"\u2216","sext":"\u2736","Sfr":"\u{1D516}","sfr":"\u{1D530}","sfrown":"\u2322","sharp":"\u266F","SHCHcy":"\u0429","shchcy":"\u0449","SHcy":"\u0428","shcy":"\u0448","ShortDownArrow":"\u2193","ShortLeftArrow":"\u2190","shortmid":"\u2223","shortparallel":"\u2225","ShortRightArrow":"\u2192","ShortUpArrow":"\u2191","shy":"\xAD","Sigma":"\u03A3","sigma":"\u03C3","sigmaf":"\u03C2","sigmav":"\u03C2","sim":"\u223C","simdot":"\u2A6A","sime":"\u2243","simeq":"\u2243","simg":"\u2A9E","simgE":"\u2AA0","siml":"\u2A9D","simlE":"\u2A9F","simne":"\u2246","simplus":"\u2A24","simrarr":"\u2972","slarr":"\u2190","SmallCircle":"\u2218","smallsetminus":"\u2216","smashp":"\u2A33","smeparsl":"\u29E4","smid":"\u2223","smile":"\u2323","smt":"\u2AAA","smte":"\u2AAC","smtes":"\u2AAC\uFE00","SOFTcy":"\u042C","softcy":"\u044C","solbar":"\u233F","solb":"\u29C4","sol":"/","Sopf":"\u{1D54A}","sopf":"\u{1D564}","spades":"\u2660","spadesuit":"\u2660","spar":"\u2225","sqcap":"\u2293","sqcaps":"\u2293\uFE00","sqcup":"\u2294","sqcups":"\u2294\uFE00","Sqrt":"\u221A","sqsub":"\u228F","sqsube":"\u2291","sqsubset":"\u228F","sqsubseteq":"\u2291","sqsup":"\u2290","sqsupe":"\u2292","sqsupset":"\u2290","sqsupseteq":"\u2292","square":"\u25A1","Square":"\u25A1","SquareIntersection":"\u2293","SquareSubset":"\u228F","SquareSubsetEqual":"\u2291","SquareSuperset":"\u2290","SquareSupersetEqual":"\u2292","SquareUnion":"\u2294","squarf":"\u25AA","squ":"\u25A1","squf":"\u25AA","srarr":"\u2192","Sscr":"\u{1D4AE}","sscr":"\u{1D4C8}","ssetmn":"\u2216","ssmile":"\u2323","sstarf":"\u22C6","Star":"\u22C6","star":"\u2606","starf":"\u2605","straightepsilon":"\u03F5","straightphi":"\u03D5","strns":"\xAF","sub":"\u2282","Sub":"\u22D0","subdot":"\u2ABD","subE":"\u2AC5","sube":"\u2286","subedot":"\u2AC3","submult":"\u2AC1","subnE":"\u2ACB","subne":"\u228A","subplus":"\u2ABF","subrarr":"\u2979","subset":"\u2282","Subset":"\u22D0","subseteq":"\u2286","subseteqq":"\u2AC5","SubsetEqual":"\u2286","subsetneq":"\u228A","subsetneqq":"\u2ACB","subsim":"\u2AC7","subsub":"\u2AD5","subsup":"\u2AD3","succapprox":"\u2AB8","succ":"\u227B","succcurlyeq":"\u227D","Succeeds":"\u227B","SucceedsEqual":"\u2AB0","SucceedsSlantEqual":"\u227D","SucceedsTilde":"\u227F","succeq":"\u2AB0","succnapprox":"\u2ABA","succneqq":"\u2AB6","succnsim":"\u22E9","succsim":"\u227F","SuchThat":"\u220B","sum":"\u2211","Sum":"\u2211","sung":"\u266A","sup1":"\xB9","sup2":"\xB2","sup3":"\xB3","sup":"\u2283","Sup":"\u22D1","supdot":"\u2ABE","supdsub":"\u2AD8","supE":"\u2AC6","supe":"\u2287","supedot":"\u2AC4","Superset":"\u2283","SupersetEqual":"\u2287","suphsol":"\u27C9","suphsub":"\u2AD7","suplarr":"\u297B","supmult":"\u2AC2","supnE":"\u2ACC","supne":"\u228B","supplus":"\u2AC0","supset":"\u2283","Supset":"\u22D1","supseteq":"\u2287","supseteqq":"\u2AC6","supsetneq":"\u228B","supsetneqq":"\u2ACC","supsim":"\u2AC8","supsub":"\u2AD4","supsup":"\u2AD6","swarhk":"\u2926","swarr":"\u2199","swArr":"\u21D9","swarrow":"\u2199","swnwar":"\u292A","szlig":"\xDF","Tab":"\\t","target":"\u2316","Tau":"\u03A4","tau":"\u03C4","tbrk":"\u23B4","Tcaron":"\u0164","tcaron":"\u0165","Tcedil":"\u0162","tcedil":"\u0163","Tcy":"\u0422","tcy":"\u0442","tdot":"\u20DB","telrec":"\u2315","Tfr":"\u{1D517}","tfr":"\u{1D531}","there4":"\u2234","therefore":"\u2234","Therefore":"\u2234","Theta":"\u0398","theta":"\u03B8","thetasym":"\u03D1","thetav":"\u03D1","thickapprox":"\u2248","thicksim":"\u223C","ThickSpace":"\u205F\u200A","ThinSpace":"\u2009","thinsp":"\u2009","thkap":"\u2248","thksim":"\u223C","THORN":"\xDE","thorn":"\xFE","tilde":"\u02DC","Tilde":"\u223C","TildeEqual":"\u2243","TildeFullEqual":"\u2245","TildeTilde":"\u2248","timesbar":"\u2A31","timesb":"\u22A0","times":"\xD7","timesd":"\u2A30","tint":"\u222D","toea":"\u2928","topbot":"\u2336","topcir":"\u2AF1","top":"\u22A4","Topf":"\u{1D54B}","topf":"\u{1D565}","topfork":"\u2ADA","tosa":"\u2929","tprime":"\u2034","trade":"\u2122","TRADE":"\u2122","triangle":"\u25B5","triangledown":"\u25BF","triangleleft":"\u25C3","trianglelefteq":"\u22B4","triangleq":"\u225C","triangleright":"\u25B9","trianglerighteq":"\u22B5","tridot":"\u25EC","trie":"\u225C","triminus":"\u2A3A","TripleDot":"\u20DB","triplus":"\u2A39","trisb":"\u29CD","tritime":"\u2A3B","trpezium":"\u23E2","Tscr":"\u{1D4AF}","tscr":"\u{1D4C9}","TScy":"\u0426","tscy":"\u0446","TSHcy":"\u040B","tshcy":"\u045B","Tstrok":"\u0166","tstrok":"\u0167","twixt":"\u226C","twoheadleftarrow":"\u219E","twoheadrightarrow":"\u21A0","Uacute":"\xDA","uacute":"\xFA","uarr":"\u2191","Uarr":"\u219F","uArr":"\u21D1","Uarrocir":"\u2949","Ubrcy":"\u040E","ubrcy":"\u045E","Ubreve":"\u016C","ubreve":"\u016D","Ucirc":"\xDB","ucirc":"\xFB","Ucy":"\u0423","ucy":"\u0443","udarr":"\u21C5","Udblac":"\u0170","udblac":"\u0171","udhar":"\u296E","ufisht":"\u297E","Ufr":"\u{1D518}","ufr":"\u{1D532}","Ugrave":"\xD9","ugrave":"\xF9","uHar":"\u2963","uharl":"\u21BF","uharr":"\u21BE","uhblk":"\u2580","ulcorn":"\u231C","ulcorner":"\u231C","ulcrop":"\u230F","ultri":"\u25F8","Umacr":"\u016A","umacr":"\u016B","uml":"\xA8","UnderBar":"_","UnderBrace":"\u23DF","UnderBracket":"\u23B5","UnderParenthesis":"\u23DD","Union":"\u22C3","UnionPlus":"\u228E","Uogon":"\u0172","uogon":"\u0173","Uopf":"\u{1D54C}","uopf":"\u{1D566}","UpArrowBar":"\u2912","uparrow":"\u2191","UpArrow":"\u2191","Uparrow":"\u21D1","UpArrowDownArrow":"\u21C5","updownarrow":"\u2195","UpDownArrow":"\u2195","Updownarrow":"\u21D5","UpEquilibrium":"\u296E","upharpoonleft":"\u21BF","upharpoonright":"\u21BE","uplus":"\u228E","UpperLeftArrow":"\u2196","UpperRightArrow":"\u2197","upsi":"\u03C5","Upsi":"\u03D2","upsih":"\u03D2","Upsilon":"\u03A5","upsilon":"\u03C5","UpTeeArrow":"\u21A5","UpTee":"\u22A5","upuparrows":"\u21C8","urcorn":"\u231D","urcorner":"\u231D","urcrop":"\u230E","Uring":"\u016E","uring":"\u016F","urtri":"\u25F9","Uscr":"\u{1D4B0}","uscr":"\u{1D4CA}","utdot":"\u22F0","Utilde":"\u0168","utilde":"\u0169","utri":"\u25B5","utrif":"\u25B4","uuarr":"\u21C8","Uuml":"\xDC","uuml":"\xFC","uwangle":"\u29A7","vangrt":"\u299C","varepsilon":"\u03F5","varkappa":"\u03F0","varnothing":"\u2205","varphi":"\u03D5","varpi":"\u03D6","varpropto":"\u221D","varr":"\u2195","vArr":"\u21D5","varrho":"\u03F1","varsigma":"\u03C2","varsubsetneq":"\u228A\uFE00","varsubsetneqq":"\u2ACB\uFE00","varsupsetneq":"\u228B\uFE00","varsupsetneqq":"\u2ACC\uFE00","vartheta":"\u03D1","vartriangleleft":"\u22B2","vartriangleright":"\u22B3","vBar":"\u2AE8","Vbar":"\u2AEB","vBarv":"\u2AE9","Vcy":"\u0412","vcy":"\u0432","vdash":"\u22A2","vDash":"\u22A8","Vdash":"\u22A9","VDash":"\u22AB","Vdashl":"\u2AE6","veebar":"\u22BB","vee":"\u2228","Vee":"\u22C1","veeeq":"\u225A","vellip":"\u22EE","verbar":"|","Verbar":"\u2016","vert":"|","Vert":"\u2016","VerticalBar":"\u2223","VerticalLine":"|","VerticalSeparator":"\u2758","VerticalTilde":"\u2240","VeryThinSpace":"\u200A","Vfr":"\u{1D519}","vfr":"\u{1D533}","vltri":"\u22B2","vnsub":"\u2282\u20D2","vnsup":"\u2283\u20D2","Vopf":"\u{1D54D}","vopf":"\u{1D567}","vprop":"\u221D","vrtri":"\u22B3","Vscr":"\u{1D4B1}","vscr":"\u{1D4CB}","vsubnE":"\u2ACB\uFE00","vsubne":"\u228A\uFE00","vsupnE":"\u2ACC\uFE00","vsupne":"\u228B\uFE00","Vvdash":"\u22AA","vzigzag":"\u299A","Wcirc":"\u0174","wcirc":"\u0175","wedbar":"\u2A5F","wedge":"\u2227","Wedge":"\u22C0","wedgeq":"\u2259","weierp":"\u2118","Wfr":"\u{1D51A}","wfr":"\u{1D534}","Wopf":"\u{1D54E}","wopf":"\u{1D568}","wp":"\u2118","wr":"\u2240","wreath":"\u2240","Wscr":"\u{1D4B2}","wscr":"\u{1D4CC}","xcap":"\u22C2","xcirc":"\u25EF","xcup":"\u22C3","xdtri":"\u25BD","Xfr":"\u{1D51B}","xfr":"\u{1D535}","xharr":"\u27F7","xhArr":"\u27FA","Xi":"\u039E","xi":"\u03BE","xlarr":"\u27F5","xlArr":"\u27F8","xmap":"\u27FC","xnis":"\u22FB","xodot":"\u2A00","Xopf":"\u{1D54F}","xopf":"\u{1D569}","xoplus":"\u2A01","xotime":"\u2A02","xrarr":"\u27F6","xrArr":"\u27F9","Xscr":"\u{1D4B3}","xscr":"\u{1D4CD}","xsqcup":"\u2A06","xuplus":"\u2A04","xutri":"\u25B3","xvee":"\u22C1","xwedge":"\u22C0","Yacute":"\xDD","yacute":"\xFD","YAcy":"\u042F","yacy":"\u044F","Ycirc":"\u0176","ycirc":"\u0177","Ycy":"\u042B","ycy":"\u044B","yen":"\xA5","Yfr":"\u{1D51C}","yfr":"\u{1D536}","YIcy":"\u0407","yicy":"\u0457","Yopf":"\u{1D550}","yopf":"\u{1D56A}","Yscr":"\u{1D4B4}","yscr":"\u{1D4CE}","YUcy":"\u042E","yucy":"\u044E","yuml":"\xFF","Yuml":"\u0178","Zacute":"\u0179","zacute":"\u017A","Zcaron":"\u017D","zcaron":"\u017E","Zcy":"\u0417","zcy":"\u0437","Zdot":"\u017B","zdot":"\u017C","zeetrf":"\u2128","ZeroWidthSpace":"\u200B","Zeta":"\u0396","zeta":"\u03B6","zfr":"\u{1D537}","Zfr":"\u2128","ZHcy":"\u0416","zhcy":"\u0436","zigrarr":"\u21DD","zopf":"\u{1D56B}","Zopf":"\u2124","Zscr":"\u{1D4B5}","zscr":"\u{1D4CF}","zwj":"\u200D","zwnj":"\u200C"}');
    }, function(e, t, r) {
      var n = {};
      function s(e2, t2, r2) {
        var i, o, a, c, l, u = "";
        for (typeof t2 != "string" && (r2 = t2, t2 = s.defaultChars), r2 === void 0 && (r2 = true), l = function(e3) {
          var t3, r3, s2 = n[e3];
          if (s2)
            return s2;
          for (s2 = n[e3] = [], t3 = 0; t3 < 128; t3++)
            r3 = String.fromCharCode(t3), /^[0-9a-z]$/i.test(r3) ? s2.push(r3) : s2.push("%" + ("0" + t3.toString(16).toUpperCase()).slice(-2));
          for (t3 = 0; t3 < e3.length; t3++)
            s2[e3.charCodeAt(t3)] = e3[t3];
          return s2;
        }(t2), i = 0, o = e2.length; i < o; i++)
          if (a = e2.charCodeAt(i), r2 && a === 37 && i + 2 < o && /^[0-9a-f]{2}$/i.test(e2.slice(i + 1, i + 3)))
            u += e2.slice(i, i + 3), i += 2;
          else if (a < 128)
            u += l[a];
          else if (a >= 55296 && a <= 57343) {
            if (a >= 55296 && a <= 56319 && i + 1 < o && (c = e2.charCodeAt(i + 1)) >= 56320 && c <= 57343) {
              u += encodeURIComponent(e2[i] + e2[i + 1]), i++;
              continue;
            }
            u += "%EF%BF%BD";
          } else
            u += encodeURIComponent(e2[i]);
        return u;
      }
      s.defaultChars = ";/?:@&=+$,-_.!~*'()#", s.componentChars = "-_.!~*'()", e.exports = s;
    }, function(e, t, r) {
      var n = {};
      function s(e2, t2) {
        var r2;
        return typeof t2 != "string" && (t2 = s.defaultChars), r2 = function(e3) {
          var t3, r3, s2 = n[e3];
          if (s2)
            return s2;
          for (s2 = n[e3] = [], t3 = 0; t3 < 128; t3++)
            r3 = String.fromCharCode(t3), s2.push(r3);
          for (t3 = 0; t3 < e3.length; t3++)
            s2[r3 = e3.charCodeAt(t3)] = "%" + ("0" + r3.toString(16).toUpperCase()).slice(-2);
          return s2;
        }(t2), e2.replace(/(%[a-f0-9]{2})+/gi, function(e3) {
          var t3, n2, s2, i, o, a, c, l = "";
          for (t3 = 0, n2 = e3.length; t3 < n2; t3 += 3)
            (s2 = parseInt(e3.slice(t3 + 1, t3 + 3), 16)) < 128 ? l += r2[s2] : (224 & s2) == 192 && t3 + 3 < n2 && (192 & (i = parseInt(e3.slice(t3 + 4, t3 + 6), 16))) == 128 ? (l += (c = s2 << 6 & 1984 | 63 & i) < 128 ? "\uFFFD\uFFFD" : String.fromCharCode(c), t3 += 3) : (240 & s2) == 224 && t3 + 6 < n2 && (i = parseInt(e3.slice(t3 + 4, t3 + 6), 16), o = parseInt(e3.slice(t3 + 7, t3 + 9), 16), (192 & i) == 128 && (192 & o) == 128) ? (l += (c = s2 << 12 & 61440 | i << 6 & 4032 | 63 & o) < 2048 || c >= 55296 && c <= 57343 ? "\uFFFD\uFFFD\uFFFD" : String.fromCharCode(c), t3 += 6) : (248 & s2) == 240 && t3 + 9 < n2 && (i = parseInt(e3.slice(t3 + 4, t3 + 6), 16), o = parseInt(e3.slice(t3 + 7, t3 + 9), 16), a = parseInt(e3.slice(t3 + 10, t3 + 12), 16), (192 & i) == 128 && (192 & o) == 128 && (192 & a) == 128) ? ((c = s2 << 18 & 1835008 | i << 12 & 258048 | o << 6 & 4032 | 63 & a) < 65536 || c > 1114111 ? l += "\uFFFD\uFFFD\uFFFD\uFFFD" : (c -= 65536, l += String.fromCharCode(55296 + (c >> 10), 56320 + (1023 & c))), t3 += 9) : l += "\uFFFD";
          return l;
        });
      }
      s.defaultChars = ";/?:@&=+$,#", s.componentChars = "", e.exports = s;
    }, function(e, t, r) {
      e.exports = function(e2) {
        var t2 = "";
        return t2 += e2.protocol || "", t2 += e2.slashes ? "//" : "", t2 += e2.auth ? e2.auth + "@" : "", e2.hostname && e2.hostname.indexOf(":") !== -1 ? t2 += "[" + e2.hostname + "]" : t2 += e2.hostname || "", t2 += e2.port ? ":" + e2.port : "", t2 += e2.pathname || "", t2 += e2.search || "", t2 += e2.hash || "";
      };
    }, function(e, t, r) {
      function n() {
        this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
      }
      var s = /^([a-z0-9.+-]+:)/i, i = /:[0-9]*$/, o = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, a = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), c = ["'"].concat(a), l = ["%", "/", "?", ";", "#"].concat(c), u = ["/", "?", "#"], p = /^[+a-z0-9A-Z_-]{0,63}$/, h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, f = { javascript: true, "javascript:": true }, d = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true };
      n.prototype.parse = function(e2, t2) {
        var r2, n2, i2, a2, c2, g = e2;
        if (g = g.trim(), !t2 && e2.split("#").length === 1) {
          var m = o.exec(g);
          if (m)
            return this.pathname = m[1], m[2] && (this.search = m[2]), this;
        }
        var _ = s.exec(g);
        if (_ && (i2 = (_ = _[0]).toLowerCase(), this.protocol = _, g = g.substr(_.length)), (t2 || _ || g.match(/^\/\/[^@\/]+@[^@\/]+/)) && (!(c2 = g.substr(0, 2) === "//") || _ && f[_] || (g = g.substr(2), this.slashes = true)), !f[_] && (c2 || _ && !d[_])) {
          var b, k, v = -1;
          for (r2 = 0; r2 < u.length; r2++)
            (a2 = g.indexOf(u[r2])) !== -1 && (v === -1 || a2 < v) && (v = a2);
          for ((k = v === -1 ? g.lastIndexOf("@") : g.lastIndexOf("@", v)) !== -1 && (b = g.slice(0, k), g = g.slice(k + 1), this.auth = b), v = -1, r2 = 0; r2 < l.length; r2++)
            (a2 = g.indexOf(l[r2])) !== -1 && (v === -1 || a2 < v) && (v = a2);
          v === -1 && (v = g.length), g[v - 1] === ":" && v--;
          var y = g.slice(0, v);
          g = g.slice(v), this.parseHost(y), this.hostname = this.hostname || "";
          var x = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
          if (!x) {
            var C = this.hostname.split(/\./);
            for (r2 = 0, n2 = C.length; r2 < n2; r2++) {
              var A = C[r2];
              if (A && !A.match(p)) {
                for (var D = "", w = 0, E = A.length; w < E; w++)
                  A.charCodeAt(w) > 127 ? D += "x" : D += A[w];
                if (!D.match(p)) {
                  var q = C.slice(0, r2), S = C.slice(r2 + 1), F = A.match(h);
                  F && (q.push(F[1]), S.unshift(F[2])), S.length && (g = S.join(".") + g), this.hostname = q.join(".");
                  break;
                }
              }
            }
          }
          this.hostname.length > 255 && (this.hostname = ""), x && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
        }
        var L = g.indexOf("#");
        L !== -1 && (this.hash = g.substr(L), g = g.slice(0, L));
        var z = g.indexOf("?");
        return z !== -1 && (this.search = g.substr(z), g = g.slice(0, z)), g && (this.pathname = g), d[i2] && this.hostname && !this.pathname && (this.pathname = ""), this;
      }, n.prototype.parseHost = function(e2) {
        var t2 = i.exec(e2);
        t2 && ((t2 = t2[0]) !== ":" && (this.port = t2.substr(1)), e2 = e2.substr(0, e2.length - t2.length)), e2 && (this.hostname = e2);
      }, e.exports = function(e2, t2) {
        if (e2 && e2 instanceof n)
          return e2;
        var r2 = new n();
        return r2.parse(e2, t2), r2;
      };
    }, function(e, t, r) {
      t.Any = r(9), t.Cc = r(10), t.Cf = r(27), t.P = r(3), t.Z = r(11);
    }, function(e, t) {
      e.exports = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/;
    }, function(e, t, r) {
      t.parseLinkLabel = r(29), t.parseLinkDestination = r(30), t.parseLinkTitle = r(31);
    }, function(e, t, r) {
      e.exports = function(e2, t2, r2) {
        var n, s, i, o, a = -1, c = e2.posMax, l = e2.pos;
        for (e2.pos = t2 + 1, n = 1; e2.pos < c; ) {
          if ((i = e2.src.charCodeAt(e2.pos)) === 93 && --n === 0) {
            s = true;
            break;
          }
          if (o = e2.pos, e2.md.inline.skipToken(e2), i === 91) {
            if (o === e2.pos - 1)
              n++;
            else if (r2)
              return e2.pos = l, -1;
          }
        }
        return s && (a = e2.pos), e2.pos = l, a;
      };
    }, function(e, t, r) {
      var n = r(0).unescapeAll;
      e.exports = function(e2, t2, r2) {
        var s, i, o = t2, a = { ok: false, pos: 0, lines: 0, str: "" };
        if (e2.charCodeAt(t2) === 60) {
          for (t2++; t2 < r2; ) {
            if ((s = e2.charCodeAt(t2)) === 10)
              return a;
            if (s === 60)
              return a;
            if (s === 62)
              return a.pos = t2 + 1, a.str = n(e2.slice(o + 1, t2)), a.ok = true, a;
            s === 92 && t2 + 1 < r2 ? t2 += 2 : t2++;
          }
          return a;
        }
        for (i = 0; t2 < r2 && (s = e2.charCodeAt(t2)) !== 32 && !(s < 32 || s === 127); )
          if (s === 92 && t2 + 1 < r2) {
            if (e2.charCodeAt(t2 + 1) === 32)
              break;
            t2 += 2;
          } else {
            if (s === 40 && ++i > 32)
              return a;
            if (s === 41) {
              if (i === 0)
                break;
              i--;
            }
            t2++;
          }
        return o === t2 || i !== 0 || (a.str = n(e2.slice(o, t2)), a.lines = 0, a.pos = t2, a.ok = true), a;
      };
    }, function(e, t, r) {
      var n = r(0).unescapeAll;
      e.exports = function(e2, t2, r2) {
        var s, i, o = 0, a = t2, c = { ok: false, pos: 0, lines: 0, str: "" };
        if (t2 >= r2)
          return c;
        if ((i = e2.charCodeAt(t2)) !== 34 && i !== 39 && i !== 40)
          return c;
        for (t2++, i === 40 && (i = 41); t2 < r2; ) {
          if ((s = e2.charCodeAt(t2)) === i)
            return c.pos = t2 + 1, c.lines = o, c.str = n(e2.slice(a + 1, t2)), c.ok = true, c;
          if (s === 40 && i === 41)
            return c;
          s === 10 ? o++ : s === 92 && t2 + 1 < r2 && (t2++, e2.charCodeAt(t2) === 10 && o++), t2++;
        }
        return c;
      };
    }, function(e, t, r) {
      var n = r(0).assign, s = r(0).unescapeAll, i = r(0).escapeHtml, o = {};
      function a() {
        this.rules = n({}, o);
      }
      o.code_inline = function(e2, t2, r2, n2, s2) {
        var o2 = e2[t2];
        return "<code" + s2.renderAttrs(o2) + ">" + i(e2[t2].content) + "</code>";
      }, o.code_block = function(e2, t2, r2, n2, s2) {
        var o2 = e2[t2];
        return "<pre" + s2.renderAttrs(o2) + "><code>" + i(e2[t2].content) + "</code></pre>\n";
      }, o.fence = function(e2, t2, r2, n2, o2) {
        var a2, c, l, u, p, h = e2[t2], f = h.info ? s(h.info).trim() : "", d = "", g = "";
        return f && (d = (l = f.split(/(\s+)/g))[0], g = l.slice(2).join("")), (a2 = r2.highlight && r2.highlight(h.content, d, g) || i(h.content)).indexOf("<pre") === 0 ? a2 + "\n" : f ? (c = h.attrIndex("class"), u = h.attrs ? h.attrs.slice() : [], c < 0 ? u.push(["class", r2.langPrefix + d]) : (u[c] = u[c].slice(), u[c][1] += " " + r2.langPrefix + d), p = { attrs: u }, "<pre><code" + o2.renderAttrs(p) + ">" + a2 + "</code></pre>\n") : "<pre><code" + o2.renderAttrs(h) + ">" + a2 + "</code></pre>\n";
      }, o.image = function(e2, t2, r2, n2, s2) {
        var i2 = e2[t2];
        return i2.attrs[i2.attrIndex("alt")][1] = s2.renderInlineAsText(i2.children, r2, n2), s2.renderToken(e2, t2, r2);
      }, o.hardbreak = function(e2, t2, r2) {
        return r2.xhtmlOut ? "<br />\n" : "<br>\n";
      }, o.softbreak = function(e2, t2, r2) {
        return r2.breaks ? r2.xhtmlOut ? "<br />\n" : "<br>\n" : "\n";
      }, o.text = function(e2, t2) {
        return i(e2[t2].content);
      }, o.html_block = function(e2, t2) {
        return e2[t2].content;
      }, o.html_inline = function(e2, t2) {
        return e2[t2].content;
      }, a.prototype.renderAttrs = function(e2) {
        var t2, r2, n2;
        if (!e2.attrs)
          return "";
        for (n2 = "", t2 = 0, r2 = e2.attrs.length; t2 < r2; t2++)
          n2 += " " + i(e2.attrs[t2][0]) + '="' + i(e2.attrs[t2][1]) + '"';
        return n2;
      }, a.prototype.renderToken = function(e2, t2, r2) {
        var n2, s2 = "", i2 = false, o2 = e2[t2];
        return o2.hidden ? "" : (o2.block && o2.nesting !== -1 && t2 && e2[t2 - 1].hidden && (s2 += "\n"), s2 += (o2.nesting === -1 ? "</" : "<") + o2.tag, s2 += this.renderAttrs(o2), o2.nesting === 0 && r2.xhtmlOut && (s2 += " /"), o2.block && (i2 = true, o2.nesting === 1 && t2 + 1 < e2.length && ((n2 = e2[t2 + 1]).type === "inline" || n2.hidden || n2.nesting === -1 && n2.tag === o2.tag) && (i2 = false)), s2 += i2 ? ">\n" : ">");
      }, a.prototype.renderInline = function(e2, t2, r2) {
        for (var n2, s2 = "", i2 = this.rules, o2 = 0, a2 = e2.length; o2 < a2; o2++)
          i2[n2 = e2[o2].type] !== void 0 ? s2 += i2[n2](e2, o2, t2, r2, this) : s2 += this.renderToken(e2, o2, t2);
        return s2;
      }, a.prototype.renderInlineAsText = function(e2, t2, r2) {
        for (var n2 = "", s2 = 0, i2 = e2.length; s2 < i2; s2++)
          e2[s2].type === "text" ? n2 += e2[s2].content : e2[s2].type === "image" ? n2 += this.renderInlineAsText(e2[s2].children, t2, r2) : e2[s2].type === "softbreak" && (n2 += "\n");
        return n2;
      }, a.prototype.render = function(e2, t2, r2) {
        var n2, s2, i2, o2 = "", a2 = this.rules;
        for (n2 = 0, s2 = e2.length; n2 < s2; n2++)
          (i2 = e2[n2].type) === "inline" ? o2 += this.renderInline(e2[n2].children, t2, r2) : a2[i2] !== void 0 ? o2 += a2[e2[n2].type](e2, n2, t2, r2, this) : o2 += this.renderToken(e2, n2, t2, r2);
        return o2;
      }, e.exports = a;
    }, function(e, t, r) {
      var n = r(4), s = [["normalize", r(34)], ["block", r(35)], ["inline", r(36)], ["linkify", r(37)], ["replacements", r(38)], ["smartquotes", r(39)]];
      function i() {
        this.ruler = new n();
        for (var e2 = 0; e2 < s.length; e2++)
          this.ruler.push(s[e2][0], s[e2][1]);
      }
      i.prototype.process = function(e2) {
        var t2, r2, n2;
        for (t2 = 0, r2 = (n2 = this.ruler.getRules("")).length; t2 < r2; t2++)
          n2[t2](e2);
      }, i.prototype.State = r(40), e.exports = i;
    }, function(e, t, r) {
      var n = /\r\n?|\n/g, s = /\0/g;
      e.exports = function(e2) {
        var t2;
        t2 = (t2 = e2.src.replace(n, "\n")).replace(s, "\uFFFD"), e2.src = t2;
      };
    }, function(e, t, r) {
      e.exports = function(e2) {
        var t2;
        e2.inlineMode ? ((t2 = new e2.Token("inline", "", 0)).content = e2.src, t2.map = [0, 1], t2.children = [], e2.tokens.push(t2)) : e2.md.block.parse(e2.src, e2.md, e2.env, e2.tokens);
      };
    }, function(e, t, r) {
      e.exports = function(e2) {
        var t2, r2, n, s = e2.tokens;
        for (r2 = 0, n = s.length; r2 < n; r2++)
          (t2 = s[r2]).type === "inline" && e2.md.inline.parse(t2.content, e2.md, e2.env, t2.children);
      };
    }, function(e, t, r) {
      var n = r(0).arrayReplaceAt;
      function s(e2) {
        return /^<\/a\s*>/i.test(e2);
      }
      e.exports = function(e2) {
        var t2, r2, i, o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y = e2.tokens;
        if (e2.md.options.linkify) {
          for (r2 = 0, i = y.length; r2 < i; r2++)
            if (y[r2].type === "inline" && e2.md.linkify.pretest(y[r2].content))
              for (g = 0, t2 = (o = y[r2].children).length - 1; t2 >= 0; t2--)
                if ((c = o[t2]).type !== "link_close") {
                  if (c.type === "html_inline" && (v = c.content, /^<a[>\s]/i.test(v) && g > 0 && g--, s(c.content) && g++), !(g > 0) && c.type === "text" && e2.md.linkify.test(c.content)) {
                    for (p = c.content, k = e2.md.linkify.match(p), l = [], d = c.level, f = 0, u = 0; u < k.length; u++)
                      m = k[u].url, _ = e2.md.normalizeLink(m), e2.md.validateLink(_) && (b = k[u].text, b = k[u].schema ? k[u].schema !== "mailto:" || /^mailto:/i.test(b) ? e2.md.normalizeLinkText(b) : e2.md.normalizeLinkText("mailto:" + b).replace(/^mailto:/, "") : e2.md.normalizeLinkText("http://" + b).replace(/^http:\/\//, ""), (h = k[u].index) > f && ((a = new e2.Token("text", "", 0)).content = p.slice(f, h), a.level = d, l.push(a)), (a = new e2.Token("link_open", "a", 1)).attrs = [["href", _]], a.level = d++, a.markup = "linkify", a.info = "auto", l.push(a), (a = new e2.Token("text", "", 0)).content = b, a.level = d, l.push(a), (a = new e2.Token("link_close", "a", -1)).level = --d, a.markup = "linkify", a.info = "auto", l.push(a), f = k[u].lastIndex);
                    f < p.length && ((a = new e2.Token("text", "", 0)).content = p.slice(f), a.level = d, l.push(a)), y[r2].children = o = n(o, t2, l);
                  }
                } else
                  for (t2--; o[t2].level !== c.level && o[t2].type !== "link_open"; )
                    t2--;
        }
      };
    }, function(e, t, r) {
      var n = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, s = /\((c|tm|r|p)\)/i, i = /\((c|tm|r|p)\)/gi, o = { c: "\xA9", r: "\xAE", p: "\xA7", tm: "\u2122" };
      function a(e2, t2) {
        return o[t2.toLowerCase()];
      }
      function c(e2) {
        var t2, r2, n2 = 0;
        for (t2 = e2.length - 1; t2 >= 0; t2--)
          (r2 = e2[t2]).type !== "text" || n2 || (r2.content = r2.content.replace(i, a)), r2.type === "link_open" && r2.info === "auto" && n2--, r2.type === "link_close" && r2.info === "auto" && n2++;
      }
      function l(e2) {
        var t2, r2, s2 = 0;
        for (t2 = e2.length - 1; t2 >= 0; t2--)
          (r2 = e2[t2]).type !== "text" || s2 || n.test(r2.content) && (r2.content = r2.content.replace(/\+-/g, "\xB1").replace(/\.{2,}/g, "\u2026").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/gm, "$1\u2014").replace(/(^|\s)--(?=\s|$)/gm, "$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/gm, "$1\u2013")), r2.type === "link_open" && r2.info === "auto" && s2--, r2.type === "link_close" && r2.info === "auto" && s2++;
      }
      e.exports = function(e2) {
        var t2;
        if (e2.md.options.typographer)
          for (t2 = e2.tokens.length - 1; t2 >= 0; t2--)
            e2.tokens[t2].type === "inline" && (s.test(e2.tokens[t2].content) && c(e2.tokens[t2].children), n.test(e2.tokens[t2].content) && l(e2.tokens[t2].children));
      };
    }, function(e, t, r) {
      var n = r(0).isWhiteSpace, s = r(0).isPunctChar, i = r(0).isMdAsciiPunct, o = /['"]/, a = /['"]/g;
      function c(e2, t2, r2) {
        return e2.substr(0, t2) + r2 + e2.substr(t2 + 1);
      }
      function l(e2, t2) {
        var r2, o2, l2, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A, D, w, E;
        for (D = [], r2 = 0; r2 < e2.length; r2++) {
          for (o2 = e2[r2], f = e2[r2].level, C = D.length - 1; C >= 0 && !(D[C].level <= f); C--)
            ;
          if (D.length = C + 1, o2.type === "text") {
            p = 0, h = (l2 = o2.content).length;
            e:
              for (; p < h && (a.lastIndex = p, u = a.exec(l2)); ) {
                if (y = x = true, p = u.index + 1, A = u[0] === "'", g = 32, u.index - 1 >= 0)
                  g = l2.charCodeAt(u.index - 1);
                else
                  for (C = r2 - 1; C >= 0 && (e2[C].type !== "softbreak" && e2[C].type !== "hardbreak"); C--)
                    if (e2[C].content) {
                      g = e2[C].content.charCodeAt(e2[C].content.length - 1);
                      break;
                    }
                if (m = 32, p < h)
                  m = l2.charCodeAt(p);
                else
                  for (C = r2 + 1; C < e2.length && (e2[C].type !== "softbreak" && e2[C].type !== "hardbreak"); C++)
                    if (e2[C].content) {
                      m = e2[C].content.charCodeAt(0);
                      break;
                    }
                if (_ = i(g) || s(String.fromCharCode(g)), b = i(m) || s(String.fromCharCode(m)), k = n(g), (v = n(m)) ? y = false : b && (k || _ || (y = false)), k ? x = false : _ && (v || b || (x = false)), m === 34 && u[0] === '"' && g >= 48 && g <= 57 && (x = y = false), y && x && (y = _, x = b), y || x) {
                  if (x) {
                    for (C = D.length - 1; C >= 0 && (d = D[C], !(D[C].level < f)); C--)
                      if (d.single === A && D[C].level === f) {
                        d = D[C], A ? (w = t2.md.options.quotes[2], E = t2.md.options.quotes[3]) : (w = t2.md.options.quotes[0], E = t2.md.options.quotes[1]), o2.content = c(o2.content, u.index, E), e2[d.token].content = c(e2[d.token].content, d.pos, w), p += E.length - 1, d.token === r2 && (p += w.length - 1), h = (l2 = o2.content).length, D.length = C;
                        continue e;
                      }
                  }
                  y ? D.push({ token: r2, pos: u.index, single: A, level: f }) : x && A && (o2.content = c(o2.content, u.index, "\u2019"));
                } else
                  A && (o2.content = c(o2.content, u.index, "\u2019"));
              }
          }
        }
      }
      e.exports = function(e2) {
        var t2;
        if (e2.md.options.typographer)
          for (t2 = e2.tokens.length - 1; t2 >= 0; t2--)
            e2.tokens[t2].type === "inline" && o.test(e2.tokens[t2].content) && l(e2.tokens[t2].children, e2);
      };
    }, function(e, t, r) {
      var n = r(5);
      function s(e2, t2, r2) {
        this.src = e2, this.env = r2, this.tokens = [], this.inlineMode = false, this.md = t2;
      }
      s.prototype.Token = n, e.exports = s;
    }, function(e, t, r) {
      var n = r(4), s = [["table", r(42), ["paragraph", "reference"]], ["code", r(43)], ["fence", r(44), ["paragraph", "reference", "blockquote", "list"]], ["blockquote", r(45), ["paragraph", "reference", "blockquote", "list"]], ["hr", r(46), ["paragraph", "reference", "blockquote", "list"]], ["list", r(47), ["paragraph", "reference", "blockquote"]], ["reference", r(48)], ["html_block", r(49), ["paragraph", "reference", "blockquote"]], ["heading", r(51), ["paragraph", "reference", "blockquote"]], ["lheading", r(52)], ["paragraph", r(53)]];
      function i() {
        this.ruler = new n();
        for (var e2 = 0; e2 < s.length; e2++)
          this.ruler.push(s[e2][0], s[e2][1], { alt: (s[e2][2] || []).slice() });
      }
      i.prototype.tokenize = function(e2, t2, r2) {
        for (var n2, s2 = this.ruler.getRules(""), i2 = s2.length, o = t2, a = false, c = e2.md.options.maxNesting; o < r2 && (e2.line = o = e2.skipEmptyLines(o), !(o >= r2)) && !(e2.sCount[o] < e2.blkIndent); ) {
          if (e2.level >= c) {
            e2.line = r2;
            break;
          }
          for (n2 = 0; n2 < i2 && !s2[n2](e2, o, r2, false); n2++)
            ;
          e2.tight = !a, e2.isEmpty(e2.line - 1) && (a = true), (o = e2.line) < r2 && e2.isEmpty(o) && (a = true, o++, e2.line = o);
        }
      }, i.prototype.parse = function(e2, t2, r2, n2) {
        var s2;
        e2 && (s2 = new this.State(e2, t2, r2, n2), this.tokenize(s2, s2.line, s2.lineMax));
      }, i.prototype.State = r(54), e.exports = i;
    }, function(e, t, r) {
      var n = r(0).isSpace;
      function s(e2, t2) {
        var r2 = e2.bMarks[t2] + e2.tShift[t2], n2 = e2.eMarks[t2];
        return e2.src.substr(r2, n2 - r2);
      }
      function i(e2) {
        var t2, r2 = [], n2 = 0, s2 = e2.length, i2 = false, o = 0, a = "";
        for (t2 = e2.charCodeAt(n2); n2 < s2; )
          t2 === 124 && (i2 ? (a += e2.substring(o, n2 - 1), o = n2) : (r2.push(a + e2.substring(o, n2)), a = "", o = n2 + 1)), i2 = t2 === 92, n2++, t2 = e2.charCodeAt(n2);
        return r2.push(a + e2.substring(o)), r2;
      }
      e.exports = function(e2, t2, r2, o) {
        var a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A;
        if (t2 + 2 > r2)
          return false;
        if (h = t2 + 1, e2.sCount[h] < e2.blkIndent)
          return false;
        if (e2.sCount[h] - e2.blkIndent >= 4)
          return false;
        if ((l = e2.bMarks[h] + e2.tShift[h]) >= e2.eMarks[h])
          return false;
        if ((C = e2.src.charCodeAt(l++)) !== 124 && C !== 45 && C !== 58)
          return false;
        if (l >= e2.eMarks[h])
          return false;
        if ((A = e2.src.charCodeAt(l++)) !== 124 && A !== 45 && A !== 58 && !n(A))
          return false;
        if (C === 45 && n(A))
          return false;
        for (; l < e2.eMarks[h]; ) {
          if ((a = e2.src.charCodeAt(l)) !== 124 && a !== 45 && a !== 58 && !n(a))
            return false;
          l++;
        }
        for (f = (c = s(e2, t2 + 1)).split("|"), m = [], u = 0; u < f.length; u++) {
          if (!(_ = f[u].trim())) {
            if (u === 0 || u === f.length - 1)
              continue;
            return false;
          }
          if (!/^:?-+:?$/.test(_))
            return false;
          _.charCodeAt(_.length - 1) === 58 ? m.push(_.charCodeAt(0) === 58 ? "center" : "right") : _.charCodeAt(0) === 58 ? m.push("left") : m.push("");
        }
        if ((c = s(e2, t2).trim()).indexOf("|") === -1)
          return false;
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if ((f = i(c)).length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), (d = f.length) === 0 || d !== m.length)
          return false;
        if (o)
          return true;
        for (v = e2.parentType, e2.parentType = "table", x = e2.md.block.ruler.getRules("blockquote"), (g = e2.push("table_open", "table", 1)).map = b = [t2, 0], (g = e2.push("thead_open", "thead", 1)).map = [t2, t2 + 1], (g = e2.push("tr_open", "tr", 1)).map = [t2, t2 + 1], u = 0; u < f.length; u++)
          g = e2.push("th_open", "th", 1), m[u] && (g.attrs = [["style", "text-align:" + m[u]]]), (g = e2.push("inline", "", 0)).content = f[u].trim(), g.children = [], g = e2.push("th_close", "th", -1);
        for (g = e2.push("tr_close", "tr", -1), g = e2.push("thead_close", "thead", -1), h = t2 + 2; h < r2 && !(e2.sCount[h] < e2.blkIndent); h++) {
          for (y = false, u = 0, p = x.length; u < p; u++)
            if (x[u](e2, h, r2, true)) {
              y = true;
              break;
            }
          if (y)
            break;
          if (!(c = s(e2, h).trim()))
            break;
          if (e2.sCount[h] - e2.blkIndent >= 4)
            break;
          for ((f = i(c)).length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), h === t2 + 2 && ((g = e2.push("tbody_open", "tbody", 1)).map = k = [t2 + 2, 0]), (g = e2.push("tr_open", "tr", 1)).map = [h, h + 1], u = 0; u < d; u++)
            g = e2.push("td_open", "td", 1), m[u] && (g.attrs = [["style", "text-align:" + m[u]]]), (g = e2.push("inline", "", 0)).content = f[u] ? f[u].trim() : "", g.children = [], g = e2.push("td_close", "td", -1);
          g = e2.push("tr_close", "tr", -1);
        }
        return k && (g = e2.push("tbody_close", "tbody", -1), k[1] = h), g = e2.push("table_close", "table", -1), b[1] = h, e2.parentType = v, e2.line = h, true;
      };
    }, function(e, t, r) {
      e.exports = function(e2, t2, r2) {
        var n, s, i;
        if (e2.sCount[t2] - e2.blkIndent < 4)
          return false;
        for (s = n = t2 + 1; n < r2; )
          if (e2.isEmpty(n))
            n++;
          else {
            if (!(e2.sCount[n] - e2.blkIndent >= 4))
              break;
            s = ++n;
          }
        return e2.line = s, (i = e2.push("code_block", "code", 0)).content = e2.getLines(t2, s, 4 + e2.blkIndent, true), i.map = [t2, e2.line], true;
      };
    }, function(e, t, r) {
      e.exports = function(e2, t2, r2, n) {
        var s, i, o, a, c, l, u, p = false, h = e2.bMarks[t2] + e2.tShift[t2], f = e2.eMarks[t2];
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if (h + 3 > f)
          return false;
        if ((s = e2.src.charCodeAt(h)) !== 126 && s !== 96)
          return false;
        if (c = h, (i = (h = e2.skipChars(h, s)) - c) < 3)
          return false;
        if (u = e2.src.slice(c, h), o = e2.src.slice(h, f), s === 96 && o.indexOf(String.fromCharCode(s)) >= 0)
          return false;
        if (n)
          return true;
        for (a = t2; !(++a >= r2) && !((h = c = e2.bMarks[a] + e2.tShift[a]) < (f = e2.eMarks[a]) && e2.sCount[a] < e2.blkIndent); )
          if (e2.src.charCodeAt(h) === s && !(e2.sCount[a] - e2.blkIndent >= 4 || (h = e2.skipChars(h, s)) - c < i || (h = e2.skipSpaces(h)) < f)) {
            p = true;
            break;
          }
        return i = e2.sCount[t2], e2.line = a + (p ? 1 : 0), (l = e2.push("fence", "code", 0)).info = o, l.content = e2.getLines(t2 + 1, a, i, true), l.markup = u, l.map = [t2, e2.line], true;
      };
    }, function(e, t, r) {
      var n = r(0).isSpace;
      e.exports = function(e2, t2, r2, s) {
        var i, o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A, D = e2.lineMax, w = e2.bMarks[t2] + e2.tShift[t2], E = e2.eMarks[t2];
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if (e2.src.charCodeAt(w++) !== 62)
          return false;
        if (s)
          return true;
        for (c = f = e2.sCount[t2] + 1, e2.src.charCodeAt(w) === 32 ? (w++, c++, f++, i = false, v = true) : e2.src.charCodeAt(w) === 9 ? (v = true, (e2.bsCount[t2] + f) % 4 == 3 ? (w++, c++, f++, i = false) : i = true) : v = false, d = [e2.bMarks[t2]], e2.bMarks[t2] = w; w < E && (o = e2.src.charCodeAt(w), n(o)); )
          o === 9 ? f += 4 - (f + e2.bsCount[t2] + (i ? 1 : 0)) % 4 : f++, w++;
        for (g = [e2.bsCount[t2]], e2.bsCount[t2] = e2.sCount[t2] + 1 + (v ? 1 : 0), u = w >= E, b = [e2.sCount[t2]], e2.sCount[t2] = f - c, k = [e2.tShift[t2]], e2.tShift[t2] = w - e2.bMarks[t2], x = e2.md.block.ruler.getRules("blockquote"), _ = e2.parentType, e2.parentType = "blockquote", h = t2 + 1; h < r2 && (A = e2.sCount[h] < e2.blkIndent, !((w = e2.bMarks[h] + e2.tShift[h]) >= (E = e2.eMarks[h]))); h++)
          if (e2.src.charCodeAt(w++) !== 62 || A) {
            if (u)
              break;
            for (y = false, a = 0, l = x.length; a < l; a++)
              if (x[a](e2, h, r2, true)) {
                y = true;
                break;
              }
            if (y) {
              e2.lineMax = h, e2.blkIndent !== 0 && (d.push(e2.bMarks[h]), g.push(e2.bsCount[h]), k.push(e2.tShift[h]), b.push(e2.sCount[h]), e2.sCount[h] -= e2.blkIndent);
              break;
            }
            d.push(e2.bMarks[h]), g.push(e2.bsCount[h]), k.push(e2.tShift[h]), b.push(e2.sCount[h]), e2.sCount[h] = -1;
          } else {
            for (c = f = e2.sCount[h] + 1, e2.src.charCodeAt(w) === 32 ? (w++, c++, f++, i = false, v = true) : e2.src.charCodeAt(w) === 9 ? (v = true, (e2.bsCount[h] + f) % 4 == 3 ? (w++, c++, f++, i = false) : i = true) : v = false, d.push(e2.bMarks[h]), e2.bMarks[h] = w; w < E && (o = e2.src.charCodeAt(w), n(o)); )
              o === 9 ? f += 4 - (f + e2.bsCount[h] + (i ? 1 : 0)) % 4 : f++, w++;
            u = w >= E, g.push(e2.bsCount[h]), e2.bsCount[h] = e2.sCount[h] + 1 + (v ? 1 : 0), b.push(e2.sCount[h]), e2.sCount[h] = f - c, k.push(e2.tShift[h]), e2.tShift[h] = w - e2.bMarks[h];
          }
        for (m = e2.blkIndent, e2.blkIndent = 0, (C = e2.push("blockquote_open", "blockquote", 1)).markup = ">", C.map = p = [t2, 0], e2.md.block.tokenize(e2, t2, h), (C = e2.push("blockquote_close", "blockquote", -1)).markup = ">", e2.lineMax = D, e2.parentType = _, p[1] = e2.line, a = 0; a < k.length; a++)
          e2.bMarks[a + t2] = d[a], e2.tShift[a + t2] = k[a], e2.sCount[a + t2] = b[a], e2.bsCount[a + t2] = g[a];
        return e2.blkIndent = m, true;
      };
    }, function(e, t, r) {
      var n = r(0).isSpace;
      e.exports = function(e2, t2, r2, s) {
        var i, o, a, c, l = e2.bMarks[t2] + e2.tShift[t2], u = e2.eMarks[t2];
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if ((i = e2.src.charCodeAt(l++)) !== 42 && i !== 45 && i !== 95)
          return false;
        for (o = 1; l < u; ) {
          if ((a = e2.src.charCodeAt(l++)) !== i && !n(a))
            return false;
          a === i && o++;
        }
        return !(o < 3) && (s || (e2.line = t2 + 1, (c = e2.push("hr", "hr", 0)).map = [t2, e2.line], c.markup = Array(o + 1).join(String.fromCharCode(i))), true);
      };
    }, function(e, t, r) {
      var n = r(0).isSpace;
      function s(e2, t2) {
        var r2, s2, i2, o;
        return s2 = e2.bMarks[t2] + e2.tShift[t2], i2 = e2.eMarks[t2], (r2 = e2.src.charCodeAt(s2++)) !== 42 && r2 !== 45 && r2 !== 43 || s2 < i2 && (o = e2.src.charCodeAt(s2), !n(o)) ? -1 : s2;
      }
      function i(e2, t2) {
        var r2, s2 = e2.bMarks[t2] + e2.tShift[t2], i2 = s2, o = e2.eMarks[t2];
        if (i2 + 1 >= o)
          return -1;
        if ((r2 = e2.src.charCodeAt(i2++)) < 48 || r2 > 57)
          return -1;
        for (; ; ) {
          if (i2 >= o)
            return -1;
          if (!((r2 = e2.src.charCodeAt(i2++)) >= 48 && r2 <= 57)) {
            if (r2 === 41 || r2 === 46)
              break;
            return -1;
          }
          if (i2 - s2 >= 10)
            return -1;
        }
        return i2 < o && (r2 = e2.src.charCodeAt(i2), !n(r2)) ? -1 : i2;
      }
      e.exports = function(e2, t2, r2, n2) {
        var o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x, C, A, D, w, E, q, S, F, L, z, T, I = false, M = true;
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if (e2.listIndent >= 0 && e2.sCount[t2] - e2.listIndent >= 4 && e2.sCount[t2] < e2.blkIndent)
          return false;
        if (n2 && e2.parentType === "paragraph" && e2.tShift[t2] >= e2.blkIndent && (I = true), (q = i(e2, t2)) >= 0) {
          if (h = true, F = e2.bMarks[t2] + e2.tShift[t2], b = Number(e2.src.substr(F, q - F - 1)), I && b !== 1)
            return false;
        } else {
          if (!((q = s(e2, t2)) >= 0))
            return false;
          h = false;
        }
        if (I && e2.skipSpaces(q) >= e2.eMarks[t2])
          return false;
        if (_ = e2.src.charCodeAt(q - 1), n2)
          return true;
        for (m = e2.tokens.length, h ? (T = e2.push("ordered_list_open", "ol", 1), b !== 1 && (T.attrs = [["start", b]])) : T = e2.push("bullet_list_open", "ul", 1), T.map = g = [t2, 0], T.markup = String.fromCharCode(_), v = t2, S = false, z = e2.md.block.ruler.getRules("list"), C = e2.parentType, e2.parentType = "list"; v < r2; ) {
          for (E = q, k = e2.eMarks[v], p = y = e2.sCount[v] + q - (e2.bMarks[t2] + e2.tShift[t2]); E < k; ) {
            if ((o = e2.src.charCodeAt(E)) === 9)
              y += 4 - (y + e2.bsCount[v]) % 4;
            else {
              if (o !== 32)
                break;
              y++;
            }
            E++;
          }
          if ((u = (a = E) >= k ? 1 : y - p) > 4 && (u = 1), l = p + u, (T = e2.push("list_item_open", "li", 1)).markup = String.fromCharCode(_), T.map = f = [t2, 0], w = e2.tight, D = e2.tShift[t2], A = e2.sCount[t2], x = e2.listIndent, e2.listIndent = e2.blkIndent, e2.blkIndent = l, e2.tight = true, e2.tShift[t2] = a - e2.bMarks[t2], e2.sCount[t2] = y, a >= k && e2.isEmpty(t2 + 1) ? e2.line = Math.min(e2.line + 2, r2) : e2.md.block.tokenize(e2, t2, r2, true), e2.tight && !S || (M = false), S = e2.line - t2 > 1 && e2.isEmpty(e2.line - 1), e2.blkIndent = e2.listIndent, e2.listIndent = x, e2.tShift[t2] = D, e2.sCount[t2] = A, e2.tight = w, (T = e2.push("list_item_close", "li", -1)).markup = String.fromCharCode(_), v = t2 = e2.line, f[1] = v, a = e2.bMarks[t2], v >= r2)
            break;
          if (e2.sCount[v] < e2.blkIndent)
            break;
          if (e2.sCount[t2] - e2.blkIndent >= 4)
            break;
          for (L = false, c = 0, d = z.length; c < d; c++)
            if (z[c](e2, v, r2, true)) {
              L = true;
              break;
            }
          if (L)
            break;
          if (h) {
            if ((q = i(e2, v)) < 0)
              break;
          } else if ((q = s(e2, v)) < 0)
            break;
          if (_ !== e2.src.charCodeAt(q - 1))
            break;
        }
        return (T = h ? e2.push("ordered_list_close", "ol", -1) : e2.push("bullet_list_close", "ul", -1)).markup = String.fromCharCode(_), g[1] = v, e2.line = v, e2.parentType = C, M && function(e3, t3) {
          var r3, n3, s2 = e3.level + 2;
          for (r3 = t3 + 2, n3 = e3.tokens.length - 2; r3 < n3; r3++)
            e3.tokens[r3].level === s2 && e3.tokens[r3].type === "paragraph_open" && (e3.tokens[r3 + 2].hidden = true, e3.tokens[r3].hidden = true, r3 += 2);
        }(e2, m), true;
      };
    }, function(e, t, r) {
      var n = r(0).normalizeReference, s = r(0).isSpace;
      e.exports = function(e2, t2, r2, i) {
        var o, a, c, l, u, p, h, f, d, g, m, _, b, k, v, y, x = 0, C = e2.bMarks[t2] + e2.tShift[t2], A = e2.eMarks[t2], D = t2 + 1;
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if (e2.src.charCodeAt(C) !== 91)
          return false;
        for (; ++C < A; )
          if (e2.src.charCodeAt(C) === 93 && e2.src.charCodeAt(C - 1) !== 92) {
            if (C + 1 === A)
              return false;
            if (e2.src.charCodeAt(C + 1) !== 58)
              return false;
            break;
          }
        for (l = e2.lineMax, v = e2.md.block.ruler.getRules("reference"), g = e2.parentType, e2.parentType = "reference"; D < l && !e2.isEmpty(D); D++)
          if (!(e2.sCount[D] - e2.blkIndent > 3 || e2.sCount[D] < 0)) {
            for (k = false, p = 0, h = v.length; p < h; p++)
              if (v[p](e2, D, l, true)) {
                k = true;
                break;
              }
            if (k)
              break;
          }
        for (A = (b = e2.getLines(t2, D, e2.blkIndent, false).trim()).length, C = 1; C < A; C++) {
          if ((o = b.charCodeAt(C)) === 91)
            return false;
          if (o === 93) {
            d = C;
            break;
          }
          (o === 10 || o === 92 && ++C < A && b.charCodeAt(C) === 10) && x++;
        }
        if (d < 0 || b.charCodeAt(d + 1) !== 58)
          return false;
        for (C = d + 2; C < A; C++)
          if ((o = b.charCodeAt(C)) === 10)
            x++;
          else if (!s(o))
            break;
        if (!(m = e2.md.helpers.parseLinkDestination(b, C, A)).ok)
          return false;
        if (u = e2.md.normalizeLink(m.str), !e2.md.validateLink(u))
          return false;
        for (a = C = m.pos, c = x += m.lines, _ = C; C < A; C++)
          if ((o = b.charCodeAt(C)) === 10)
            x++;
          else if (!s(o))
            break;
        for (m = e2.md.helpers.parseLinkTitle(b, C, A), C < A && _ !== C && m.ok ? (y = m.str, C = m.pos, x += m.lines) : (y = "", C = a, x = c); C < A && (o = b.charCodeAt(C), s(o)); )
          C++;
        if (C < A && b.charCodeAt(C) !== 10 && y)
          for (y = "", C = a, x = c; C < A && (o = b.charCodeAt(C), s(o)); )
            C++;
        return !(C < A && b.charCodeAt(C) !== 10) && (!!(f = n(b.slice(1, d))) && (i || (e2.env.references === void 0 && (e2.env.references = {}), e2.env.references[f] === void 0 && (e2.env.references[f] = { title: y, href: u }), e2.parentType = g, e2.line = t2 + x + 1), true));
      };
    }, function(e, t, r) {
      var n = r(50), s = r(12).HTML_OPEN_CLOSE_TAG_RE, i = [[/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true], [/^<!--/, /-->/, true], [/^<\?/, /\?>/, true], [/^<![A-Z]/, />/, true], [/^<!\[CDATA\[/, /\]\]>/, true], [new RegExp("^</?(" + n.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true], [new RegExp(s.source + "\\s*$"), /^$/, false]];
      e.exports = function(e2, t2, r2, n2) {
        var s2, o, a, c, l = e2.bMarks[t2] + e2.tShift[t2], u = e2.eMarks[t2];
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if (!e2.md.options.html)
          return false;
        if (e2.src.charCodeAt(l) !== 60)
          return false;
        for (c = e2.src.slice(l, u), s2 = 0; s2 < i.length && !i[s2][0].test(c); s2++)
          ;
        if (s2 === i.length)
          return false;
        if (n2)
          return i[s2][2];
        if (o = t2 + 1, !i[s2][1].test(c)) {
          for (; o < r2 && !(e2.sCount[o] < e2.blkIndent); o++)
            if (l = e2.bMarks[o] + e2.tShift[o], u = e2.eMarks[o], c = e2.src.slice(l, u), i[s2][1].test(c)) {
              c.length !== 0 && o++;
              break;
            }
        }
        return e2.line = o, (a = e2.push("html_block", "", 0)).map = [t2, o], a.content = e2.getLines(t2, o, e2.blkIndent, true), true;
      };
    }, function(e, t, r) {
      e.exports = ["address", "article", "aside", "base", "basefont", "blockquote", "body", "caption", "center", "col", "colgroup", "dd", "details", "dialog", "dir", "div", "dl", "dt", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "iframe", "legend", "li", "link", "main", "menu", "menuitem", "nav", "noframes", "ol", "optgroup", "option", "p", "param", "section", "source", "summary", "table", "tbody", "td", "tfoot", "th", "thead", "title", "tr", "track", "ul"];
    }, function(e, t, r) {
      var n = r(0).isSpace;
      e.exports = function(e2, t2, r2, s) {
        var i, o, a, c, l = e2.bMarks[t2] + e2.tShift[t2], u = e2.eMarks[t2];
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        if ((i = e2.src.charCodeAt(l)) !== 35 || l >= u)
          return false;
        for (o = 1, i = e2.src.charCodeAt(++l); i === 35 && l < u && o <= 6; )
          o++, i = e2.src.charCodeAt(++l);
        return !(o > 6 || l < u && !n(i)) && (s || (u = e2.skipSpacesBack(u, l), (a = e2.skipCharsBack(u, 35, l)) > l && n(e2.src.charCodeAt(a - 1)) && (u = a), e2.line = t2 + 1, (c = e2.push("heading_open", "h" + String(o), 1)).markup = "########".slice(0, o), c.map = [t2, e2.line], (c = e2.push("inline", "", 0)).content = e2.src.slice(l, u).trim(), c.map = [t2, e2.line], c.children = [], (c = e2.push("heading_close", "h" + String(o), -1)).markup = "########".slice(0, o)), true);
      };
    }, function(e, t, r) {
      e.exports = function(e2, t2, r2) {
        var n, s, i, o, a, c, l, u, p, h, f = t2 + 1, d = e2.md.block.ruler.getRules("paragraph");
        if (e2.sCount[t2] - e2.blkIndent >= 4)
          return false;
        for (h = e2.parentType, e2.parentType = "paragraph"; f < r2 && !e2.isEmpty(f); f++)
          if (!(e2.sCount[f] - e2.blkIndent > 3)) {
            if (e2.sCount[f] >= e2.blkIndent && (c = e2.bMarks[f] + e2.tShift[f]) < (l = e2.eMarks[f]) && ((p = e2.src.charCodeAt(c)) === 45 || p === 61) && (c = e2.skipChars(c, p), (c = e2.skipSpaces(c)) >= l)) {
              u = p === 61 ? 1 : 2;
              break;
            }
            if (!(e2.sCount[f] < 0)) {
              for (s = false, i = 0, o = d.length; i < o; i++)
                if (d[i](e2, f, r2, true)) {
                  s = true;
                  break;
                }
              if (s)
                break;
            }
          }
        return !!u && (n = e2.getLines(t2, f, e2.blkIndent, false).trim(), e2.line = f + 1, (a = e2.push("heading_open", "h" + String(u), 1)).markup = String.fromCharCode(p), a.map = [t2, e2.line], (a = e2.push("inline", "", 0)).content = n, a.map = [t2, e2.line - 1], a.children = [], (a = e2.push("heading_close", "h" + String(u), -1)).markup = String.fromCharCode(p), e2.parentType = h, true);
      };
    }, function(e, t, r) {
      e.exports = function(e2, t2) {
        var r2, n, s, i, o, a, c = t2 + 1, l = e2.md.block.ruler.getRules("paragraph"), u = e2.lineMax;
        for (a = e2.parentType, e2.parentType = "paragraph"; c < u && !e2.isEmpty(c); c++)
          if (!(e2.sCount[c] - e2.blkIndent > 3 || e2.sCount[c] < 0)) {
            for (n = false, s = 0, i = l.length; s < i; s++)
              if (l[s](e2, c, u, true)) {
                n = true;
                break;
              }
            if (n)
              break;
          }
        return r2 = e2.getLines(t2, c, e2.blkIndent, false).trim(), e2.line = c, (o = e2.push("paragraph_open", "p", 1)).map = [t2, e2.line], (o = e2.push("inline", "", 0)).content = r2, o.map = [t2, e2.line], o.children = [], o = e2.push("paragraph_close", "p", -1), e2.parentType = a, true;
      };
    }, function(e, t, r) {
      var n = r(5), s = r(0).isSpace;
      function i(e2, t2, r2, n2) {
        var i2, o, a, c, l, u, p, h;
        for (this.src = e2, this.md = t2, this.env = r2, this.tokens = n2, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", h = false, a = c = u = p = 0, l = (o = this.src).length; c < l; c++) {
          if (i2 = o.charCodeAt(c), !h) {
            if (s(i2)) {
              u++, i2 === 9 ? p += 4 - p % 4 : p++;
              continue;
            }
            h = true;
          }
          i2 !== 10 && c !== l - 1 || (i2 !== 10 && c++, this.bMarks.push(a), this.eMarks.push(c), this.tShift.push(u), this.sCount.push(p), this.bsCount.push(0), h = false, u = 0, p = 0, a = c + 1);
        }
        this.bMarks.push(o.length), this.eMarks.push(o.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
      }
      i.prototype.push = function(e2, t2, r2) {
        var s2 = new n(e2, t2, r2);
        return s2.block = true, r2 < 0 && this.level--, s2.level = this.level, r2 > 0 && this.level++, this.tokens.push(s2), s2;
      }, i.prototype.isEmpty = function(e2) {
        return this.bMarks[e2] + this.tShift[e2] >= this.eMarks[e2];
      }, i.prototype.skipEmptyLines = function(e2) {
        for (var t2 = this.lineMax; e2 < t2 && !(this.bMarks[e2] + this.tShift[e2] < this.eMarks[e2]); e2++)
          ;
        return e2;
      }, i.prototype.skipSpaces = function(e2) {
        for (var t2, r2 = this.src.length; e2 < r2 && (t2 = this.src.charCodeAt(e2), s(t2)); e2++)
          ;
        return e2;
      }, i.prototype.skipSpacesBack = function(e2, t2) {
        if (e2 <= t2)
          return e2;
        for (; e2 > t2; )
          if (!s(this.src.charCodeAt(--e2)))
            return e2 + 1;
        return e2;
      }, i.prototype.skipChars = function(e2, t2) {
        for (var r2 = this.src.length; e2 < r2 && this.src.charCodeAt(e2) === t2; e2++)
          ;
        return e2;
      }, i.prototype.skipCharsBack = function(e2, t2, r2) {
        if (e2 <= r2)
          return e2;
        for (; e2 > r2; )
          if (t2 !== this.src.charCodeAt(--e2))
            return e2 + 1;
        return e2;
      }, i.prototype.getLines = function(e2, t2, r2, n2) {
        var i2, o, a, c, l, u, p, h = e2;
        if (e2 >= t2)
          return "";
        for (u = new Array(t2 - e2), i2 = 0; h < t2; h++, i2++) {
          for (o = 0, p = c = this.bMarks[h], l = h + 1 < t2 || n2 ? this.eMarks[h] + 1 : this.eMarks[h]; c < l && o < r2; ) {
            if (a = this.src.charCodeAt(c), s(a))
              a === 9 ? o += 4 - (o + this.bsCount[h]) % 4 : o++;
            else {
              if (!(c - p < this.tShift[h]))
                break;
              o++;
            }
            c++;
          }
          u[i2] = o > r2 ? new Array(o - r2 + 1).join(" ") + this.src.slice(c, l) : this.src.slice(c, l);
        }
        return u.join("");
      }, i.prototype.Token = n, e.exports = i;
    }, function(e, t, r) {
      var n = r(4), s = [["text", r(56)], ["newline", r(57)], ["escape", r(58)], ["backticks", r(59)], ["strikethrough", r(13).tokenize], ["emphasis", r(14).tokenize], ["link", r(60)], ["image", r(61)], ["autolink", r(62)], ["html_inline", r(63)], ["entity", r(64)]], i = [["balance_pairs", r(65)], ["strikethrough", r(13).postProcess], ["emphasis", r(14).postProcess], ["text_collapse", r(66)]];
      function o() {
        var e2;
        for (this.ruler = new n(), e2 = 0; e2 < s.length; e2++)
          this.ruler.push(s[e2][0], s[e2][1]);
        for (this.ruler2 = new n(), e2 = 0; e2 < i.length; e2++)
          this.ruler2.push(i[e2][0], i[e2][1]);
      }
      o.prototype.skipToken = function(e2) {
        var t2, r2, n2 = e2.pos, s2 = this.ruler.getRules(""), i2 = s2.length, o2 = e2.md.options.maxNesting, a = e2.cache;
        if (a[n2] === void 0) {
          if (e2.level < o2)
            for (r2 = 0; r2 < i2 && (e2.level++, t2 = s2[r2](e2, true), e2.level--, !t2); r2++)
              ;
          else
            e2.pos = e2.posMax;
          t2 || e2.pos++, a[n2] = e2.pos;
        } else
          e2.pos = a[n2];
      }, o.prototype.tokenize = function(e2) {
        for (var t2, r2, n2 = this.ruler.getRules(""), s2 = n2.length, i2 = e2.posMax, o2 = e2.md.options.maxNesting; e2.pos < i2; ) {
          if (e2.level < o2)
            for (r2 = 0; r2 < s2 && !(t2 = n2[r2](e2, false)); r2++)
              ;
          if (t2) {
            if (e2.pos >= i2)
              break;
          } else
            e2.pending += e2.src[e2.pos++];
        }
        e2.pending && e2.pushPending();
      }, o.prototype.parse = function(e2, t2, r2, n2) {
        var s2, i2, o2, a = new this.State(e2, t2, r2, n2);
        for (this.tokenize(a), o2 = (i2 = this.ruler2.getRules("")).length, s2 = 0; s2 < o2; s2++)
          i2[s2](a);
      }, o.prototype.State = r(67), e.exports = o;
    }, function(e, t, r) {
      function n(e2) {
        switch (e2) {
          case 10:
          case 33:
          case 35:
          case 36:
          case 37:
          case 38:
          case 42:
          case 43:
          case 45:
          case 58:
          case 60:
          case 61:
          case 62:
          case 64:
          case 91:
          case 92:
          case 93:
          case 94:
          case 95:
          case 96:
          case 123:
          case 125:
          case 126:
            return true;
          default:
            return false;
        }
      }
      e.exports = function(e2, t2) {
        for (var r2 = e2.pos; r2 < e2.posMax && !n(e2.src.charCodeAt(r2)); )
          r2++;
        return r2 !== e2.pos && (t2 || (e2.pending += e2.src.slice(e2.pos, r2)), e2.pos = r2, true);
      };
    }, function(e, t, r) {
      var n = r(0).isSpace;
      e.exports = function(e2, t2) {
        var r2, s, i = e2.pos;
        if (e2.src.charCodeAt(i) !== 10)
          return false;
        for (r2 = e2.pending.length - 1, s = e2.posMax, t2 || (r2 >= 0 && e2.pending.charCodeAt(r2) === 32 ? r2 >= 1 && e2.pending.charCodeAt(r2 - 1) === 32 ? (e2.pending = e2.pending.replace(/ +$/, ""), e2.push("hardbreak", "br", 0)) : (e2.pending = e2.pending.slice(0, -1), e2.push("softbreak", "br", 0)) : e2.push("softbreak", "br", 0)), i++; i < s && n(e2.src.charCodeAt(i)); )
          i++;
        return e2.pos = i, true;
      };
    }, function(e, t, r) {
      for (var n = r(0).isSpace, s = [], i = 0; i < 256; i++)
        s.push(0);
      "\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e2) {
        s[e2.charCodeAt(0)] = 1;
      }), e.exports = function(e2, t2) {
        var r2, i2 = e2.pos, o = e2.posMax;
        if (e2.src.charCodeAt(i2) !== 92)
          return false;
        if (++i2 < o) {
          if ((r2 = e2.src.charCodeAt(i2)) < 256 && s[r2] !== 0)
            return t2 || (e2.pending += e2.src[i2]), e2.pos += 2, true;
          if (r2 === 10) {
            for (t2 || e2.push("hardbreak", "br", 0), i2++; i2 < o && (r2 = e2.src.charCodeAt(i2), n(r2)); )
              i2++;
            return e2.pos = i2, true;
          }
        }
        return t2 || (e2.pending += "\\"), e2.pos++, true;
      };
    }, function(e, t, r) {
      e.exports = function(e2, t2) {
        var r2, n, s, i, o, a, c, l, u = e2.pos;
        if (e2.src.charCodeAt(u) !== 96)
          return false;
        for (r2 = u, u++, n = e2.posMax; u < n && e2.src.charCodeAt(u) === 96; )
          u++;
        if (c = (s = e2.src.slice(r2, u)).length, e2.backticksScanned && (e2.backticks[c] || 0) <= r2)
          return t2 || (e2.pending += s), e2.pos += c, true;
        for (o = a = u; (o = e2.src.indexOf("`", a)) !== -1; ) {
          for (a = o + 1; a < n && e2.src.charCodeAt(a) === 96; )
            a++;
          if ((l = a - o) === c)
            return t2 || ((i = e2.push("code_inline", "code", 0)).markup = s, i.content = e2.src.slice(u, o).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), e2.pos = a, true;
          e2.backticks[l] = o;
        }
        return e2.backticksScanned = true, t2 || (e2.pending += s), e2.pos += c, true;
      };
    }, function(e, t, r) {
      var n = r(0).normalizeReference, s = r(0).isSpace;
      e.exports = function(e2, t2) {
        var r2, i, o, a, c, l, u, p, h = "", f = "", d = e2.pos, g = e2.posMax, m = e2.pos, _ = true;
        if (e2.src.charCodeAt(e2.pos) !== 91)
          return false;
        if (c = e2.pos + 1, (a = e2.md.helpers.parseLinkLabel(e2, e2.pos, true)) < 0)
          return false;
        if ((l = a + 1) < g && e2.src.charCodeAt(l) === 40) {
          for (_ = false, l++; l < g && (i = e2.src.charCodeAt(l), s(i) || i === 10); l++)
            ;
          if (l >= g)
            return false;
          if (m = l, (u = e2.md.helpers.parseLinkDestination(e2.src, l, e2.posMax)).ok) {
            for (h = e2.md.normalizeLink(u.str), e2.md.validateLink(h) ? l = u.pos : h = "", m = l; l < g && (i = e2.src.charCodeAt(l), s(i) || i === 10); l++)
              ;
            if (u = e2.md.helpers.parseLinkTitle(e2.src, l, e2.posMax), l < g && m !== l && u.ok)
              for (f = u.str, l = u.pos; l < g && (i = e2.src.charCodeAt(l), s(i) || i === 10); l++)
                ;
          }
          (l >= g || e2.src.charCodeAt(l) !== 41) && (_ = true), l++;
        }
        if (_) {
          if (e2.env.references === void 0)
            return false;
          if (l < g && e2.src.charCodeAt(l) === 91 ? (m = l + 1, (l = e2.md.helpers.parseLinkLabel(e2, l)) >= 0 ? o = e2.src.slice(m, l++) : l = a + 1) : l = a + 1, o || (o = e2.src.slice(c, a)), !(p = e2.env.references[n(o)]))
            return e2.pos = d, false;
          h = p.href, f = p.title;
        }
        return t2 || (e2.pos = c, e2.posMax = a, e2.push("link_open", "a", 1).attrs = r2 = [["href", h]], f && r2.push(["title", f]), e2.md.inline.tokenize(e2), e2.push("link_close", "a", -1)), e2.pos = l, e2.posMax = g, true;
      };
    }, function(e, t, r) {
      var n = r(0).normalizeReference, s = r(0).isSpace;
      e.exports = function(e2, t2) {
        var r2, i, o, a, c, l, u, p, h, f, d, g, m, _ = "", b = e2.pos, k = e2.posMax;
        if (e2.src.charCodeAt(e2.pos) !== 33)
          return false;
        if (e2.src.charCodeAt(e2.pos + 1) !== 91)
          return false;
        if (l = e2.pos + 2, (c = e2.md.helpers.parseLinkLabel(e2, e2.pos + 1, false)) < 0)
          return false;
        if ((u = c + 1) < k && e2.src.charCodeAt(u) === 40) {
          for (u++; u < k && (i = e2.src.charCodeAt(u), s(i) || i === 10); u++)
            ;
          if (u >= k)
            return false;
          for (m = u, (h = e2.md.helpers.parseLinkDestination(e2.src, u, e2.posMax)).ok && (_ = e2.md.normalizeLink(h.str), e2.md.validateLink(_) ? u = h.pos : _ = ""), m = u; u < k && (i = e2.src.charCodeAt(u), s(i) || i === 10); u++)
            ;
          if (h = e2.md.helpers.parseLinkTitle(e2.src, u, e2.posMax), u < k && m !== u && h.ok)
            for (f = h.str, u = h.pos; u < k && (i = e2.src.charCodeAt(u), s(i) || i === 10); u++)
              ;
          else
            f = "";
          if (u >= k || e2.src.charCodeAt(u) !== 41)
            return e2.pos = b, false;
          u++;
        } else {
          if (e2.env.references === void 0)
            return false;
          if (u < k && e2.src.charCodeAt(u) === 91 ? (m = u + 1, (u = e2.md.helpers.parseLinkLabel(e2, u)) >= 0 ? a = e2.src.slice(m, u++) : u = c + 1) : u = c + 1, a || (a = e2.src.slice(l, c)), !(p = e2.env.references[n(a)]))
            return e2.pos = b, false;
          _ = p.href, f = p.title;
        }
        return t2 || (o = e2.src.slice(l, c), e2.md.inline.parse(o, e2.md, e2.env, g = []), (d = e2.push("image", "img", 0)).attrs = r2 = [["src", _], ["alt", ""]], d.children = g, d.content = o, f && r2.push(["title", f])), e2.pos = u, e2.posMax = k, true;
      };
    }, function(e, t, r) {
      var n = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, s = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;
      e.exports = function(e2, t2) {
        var r2, i, o, a, c, l, u = e2.pos;
        if (e2.src.charCodeAt(u) !== 60)
          return false;
        for (c = e2.pos, l = e2.posMax; ; ) {
          if (++u >= l)
            return false;
          if ((a = e2.src.charCodeAt(u)) === 60)
            return false;
          if (a === 62)
            break;
        }
        return r2 = e2.src.slice(c + 1, u), s.test(r2) ? (i = e2.md.normalizeLink(r2), !!e2.md.validateLink(i) && (t2 || ((o = e2.push("link_open", "a", 1)).attrs = [["href", i]], o.markup = "autolink", o.info = "auto", (o = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(r2), (o = e2.push("link_close", "a", -1)).markup = "autolink", o.info = "auto"), e2.pos += r2.length + 2, true)) : !!n.test(r2) && (i = e2.md.normalizeLink("mailto:" + r2), !!e2.md.validateLink(i) && (t2 || ((o = e2.push("link_open", "a", 1)).attrs = [["href", i]], o.markup = "autolink", o.info = "auto", (o = e2.push("text", "", 0)).content = e2.md.normalizeLinkText(r2), (o = e2.push("link_close", "a", -1)).markup = "autolink", o.info = "auto"), e2.pos += r2.length + 2, true));
      };
    }, function(e, t, r) {
      var n = r(12).HTML_TAG_RE;
      e.exports = function(e2, t2) {
        var r2, s, i, o = e2.pos;
        return !!e2.md.options.html && (i = e2.posMax, !(e2.src.charCodeAt(o) !== 60 || o + 2 >= i) && (!((r2 = e2.src.charCodeAt(o + 1)) !== 33 && r2 !== 63 && r2 !== 47 && !function(e3) {
          var t3 = 32 | e3;
          return t3 >= 97 && t3 <= 122;
        }(r2)) && (!!(s = e2.src.slice(o).match(n)) && (t2 || (e2.push("html_inline", "", 0).content = e2.src.slice(o, o + s[0].length)), e2.pos += s[0].length, true))));
      };
    }, function(e, t, r) {
      var n = r(7), s = r(0).has, i = r(0).isValidEntityCode, o = r(0).fromCodePoint, a = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, c = /^&([a-z][a-z0-9]{1,31});/i;
      e.exports = function(e2, t2) {
        var r2, l, u = e2.pos, p = e2.posMax;
        if (e2.src.charCodeAt(u) !== 38)
          return false;
        if (u + 1 < p) {
          if (e2.src.charCodeAt(u + 1) === 35) {
            if (l = e2.src.slice(u).match(a))
              return t2 || (r2 = l[1][0].toLowerCase() === "x" ? parseInt(l[1].slice(1), 16) : parseInt(l[1], 10), e2.pending += i(r2) ? o(r2) : o(65533)), e2.pos += l[0].length, true;
          } else if ((l = e2.src.slice(u).match(c)) && s(n, l[1]))
            return t2 || (e2.pending += n[l[1]]), e2.pos += l[0].length, true;
        }
        return t2 || (e2.pending += "&"), e2.pos++, true;
      };
    }, function(e, t, r) {
      function n(e2, t2) {
        var r2, n2, s, i, o, a, c, l, u = {}, p = t2.length;
        for (r2 = 0; r2 < p; r2++)
          if ((s = t2[r2]).length = s.length || 0, s.close) {
            for (u.hasOwnProperty(s.marker) || (u[s.marker] = [-1, -1, -1]), o = u[s.marker][s.length % 3], (n2 = r2 - s.jump - 1) < -1 && (n2 = -1), a = n2; n2 > o; n2 -= i.jump + 1)
              if ((i = t2[n2]).marker === s.marker && i.open && i.end < 0 && (c = false, (i.close || s.open) && (i.length + s.length) % 3 == 0 && (i.length % 3 == 0 && s.length % 3 == 0 || (c = true)), !c)) {
                l = n2 > 0 && !t2[n2 - 1].open ? t2[n2 - 1].jump + 1 : 0, s.jump = r2 - n2 + l, s.open = false, i.end = r2, i.jump = l, i.close = false, a = -1;
                break;
              }
            a !== -1 && (u[s.marker][(s.length || 0) % 3] = a);
          }
      }
      e.exports = function(e2) {
        var t2, r2 = e2.tokens_meta, s = e2.tokens_meta.length;
        for (n(0, e2.delimiters), t2 = 0; t2 < s; t2++)
          r2[t2] && r2[t2].delimiters && n(0, r2[t2].delimiters);
      };
    }, function(e, t, r) {
      e.exports = function(e2) {
        var t2, r2, n = 0, s = e2.tokens, i = e2.tokens.length;
        for (t2 = r2 = 0; t2 < i; t2++)
          s[t2].nesting < 0 && n--, s[t2].level = n, s[t2].nesting > 0 && n++, s[t2].type === "text" && t2 + 1 < i && s[t2 + 1].type === "text" ? s[t2 + 1].content = s[t2].content + s[t2 + 1].content : (t2 !== r2 && (s[r2] = s[t2]), r2++);
        t2 !== r2 && (s.length = r2);
      };
    }, function(e, t, r) {
      var n = r(5), s = r(0).isWhiteSpace, i = r(0).isPunctChar, o = r(0).isMdAsciiPunct;
      function a(e2, t2, r2, n2) {
        this.src = e2, this.env = r2, this.md = t2, this.tokens = n2, this.tokens_meta = Array(n2.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false;
      }
      a.prototype.pushPending = function() {
        var e2 = new n("text", "", 0);
        return e2.content = this.pending, e2.level = this.pendingLevel, this.tokens.push(e2), this.pending = "", e2;
      }, a.prototype.push = function(e2, t2, r2) {
        this.pending && this.pushPending();
        var s2 = new n(e2, t2, r2), i2 = null;
        return r2 < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), s2.level = this.level, r2 > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], i2 = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(s2), this.tokens_meta.push(i2), s2;
      }, a.prototype.scanDelims = function(e2, t2) {
        var r2, n2, a2, c, l, u, p, h, f, d = e2, g = true, m = true, _ = this.posMax, b = this.src.charCodeAt(e2);
        for (r2 = e2 > 0 ? this.src.charCodeAt(e2 - 1) : 32; d < _ && this.src.charCodeAt(d) === b; )
          d++;
        return a2 = d - e2, n2 = d < _ ? this.src.charCodeAt(d) : 32, p = o(r2) || i(String.fromCharCode(r2)), f = o(n2) || i(String.fromCharCode(n2)), u = s(r2), (h = s(n2)) ? g = false : f && (u || p || (g = false)), u ? m = false : p && (h || f || (m = false)), t2 ? (c = g, l = m) : (c = g && (!m || p), l = m && (!g || f)), { can_open: c, can_close: l, length: a2 };
      }, a.prototype.Token = n, e.exports = a;
    }, function(e, t, r) {
      function n(e2) {
        var t2 = Array.prototype.slice.call(arguments, 1);
        return t2.forEach(function(t3) {
          t3 && Object.keys(t3).forEach(function(r2) {
            e2[r2] = t3[r2];
          });
        }), e2;
      }
      function s(e2) {
        return Object.prototype.toString.call(e2);
      }
      function i(e2) {
        return s(e2) === "[object Function]";
      }
      function o(e2) {
        return e2.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
      }
      var a = { fuzzyLink: true, fuzzyEmail: true, fuzzyIP: false };
      var c = { "http:": { validate: function(e2, t2, r2) {
        var n2 = e2.slice(t2);
        return r2.re.http || (r2.re.http = new RegExp("^\\/\\/" + r2.re.src_auth + r2.re.src_host_port_strict + r2.re.src_path, "i")), r2.re.http.test(n2) ? n2.match(r2.re.http)[0].length : 0;
      } }, "https:": "http:", "ftp:": "http:", "//": { validate: function(e2, t2, r2) {
        var n2 = e2.slice(t2);
        return r2.re.no_http || (r2.re.no_http = new RegExp("^" + r2.re.src_auth + "(?:localhost|(?:(?:" + r2.re.src_domain + ")\\.)+" + r2.re.src_domain_root + ")" + r2.re.src_port + r2.re.src_host_terminator + r2.re.src_path, "i")), r2.re.no_http.test(n2) ? t2 >= 3 && e2[t2 - 3] === ":" || t2 >= 3 && e2[t2 - 3] === "/" ? 0 : n2.match(r2.re.no_http)[0].length : 0;
      } }, "mailto:": { validate: function(e2, t2, r2) {
        var n2 = e2.slice(t2);
        return r2.re.mailto || (r2.re.mailto = new RegExp("^" + r2.re.src_email_name + "@" + r2.re.src_host_strict, "i")), r2.re.mailto.test(n2) ? n2.match(r2.re.mailto)[0].length : 0;
      } } }, l = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");
      function u(e2) {
        var t2 = e2.re = r(69)(e2.__opts__), n2 = e2.__tlds__.slice();
        function a2(e3) {
          return e3.replace("%TLDS%", t2.src_tlds);
        }
        e2.onCompile(), e2.__tlds_replaced__ || n2.push("a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]"), n2.push(t2.src_xn), t2.src_tlds = n2.join("|"), t2.email_fuzzy = RegExp(a2(t2.tpl_email_fuzzy), "i"), t2.link_fuzzy = RegExp(a2(t2.tpl_link_fuzzy), "i"), t2.link_no_ip_fuzzy = RegExp(a2(t2.tpl_link_no_ip_fuzzy), "i"), t2.host_fuzzy_test = RegExp(a2(t2.tpl_host_fuzzy_test), "i");
        var c2 = [];
        function l2(e3, t3) {
          throw new Error('(LinkifyIt) Invalid schema "' + e3 + '": ' + t3);
        }
        e2.__compiled__ = {}, Object.keys(e2.__schemas__).forEach(function(t3) {
          var r2 = e2.__schemas__[t3];
          if (r2 !== null) {
            var n3 = { validate: null, link: null };
            if (e2.__compiled__[t3] = n3, s(r2) === "[object Object]")
              return !function(e3) {
                return s(e3) === "[object RegExp]";
              }(r2.validate) ? i(r2.validate) ? n3.validate = r2.validate : l2(t3, r2) : n3.validate = function(e3) {
                return function(t4, r3) {
                  var n4 = t4.slice(r3);
                  return e3.test(n4) ? n4.match(e3)[0].length : 0;
                };
              }(r2.validate), void (i(r2.normalize) ? n3.normalize = r2.normalize : r2.normalize ? l2(t3, r2) : n3.normalize = function(e3, t4) {
                t4.normalize(e3);
              });
            !function(e3) {
              return s(e3) === "[object String]";
            }(r2) ? l2(t3, r2) : c2.push(t3);
          }
        }), c2.forEach(function(t3) {
          e2.__compiled__[e2.__schemas__[t3]] && (e2.__compiled__[t3].validate = e2.__compiled__[e2.__schemas__[t3]].validate, e2.__compiled__[t3].normalize = e2.__compiled__[e2.__schemas__[t3]].normalize);
        }), e2.__compiled__[""] = { validate: null, normalize: function(e3, t3) {
          t3.normalize(e3);
        } };
        var u2 = Object.keys(e2.__compiled__).filter(function(t3) {
          return t3.length > 0 && e2.__compiled__[t3];
        }).map(o).join("|");
        e2.re.schema_test = RegExp("(^|(?!_)(?:[><\uFF5C]|" + t2.src_ZPCc + "))(" + u2 + ")", "i"), e2.re.schema_search = RegExp("(^|(?!_)(?:[><\uFF5C]|" + t2.src_ZPCc + "))(" + u2 + ")", "ig"), e2.re.pretest = RegExp("(" + e2.re.schema_test.source + ")|(" + e2.re.host_fuzzy_test.source + ")|@", "i"), function(e3) {
          e3.__index__ = -1, e3.__text_cache__ = "";
        }(e2);
      }
      function p(e2, t2) {
        var r2 = e2.__index__, n2 = e2.__last_index__, s2 = e2.__text_cache__.slice(r2, n2);
        this.schema = e2.__schema__.toLowerCase(), this.index = r2 + t2, this.lastIndex = n2 + t2, this.raw = s2, this.text = s2, this.url = s2;
      }
      function h(e2, t2) {
        var r2 = new p(e2, t2);
        return e2.__compiled__[r2.schema].normalize(r2, e2), r2;
      }
      function f(e2, t2) {
        if (!(this instanceof f))
          return new f(e2, t2);
        var r2;
        t2 || (r2 = e2, Object.keys(r2 || {}).reduce(function(e3, t3) {
          return e3 || a.hasOwnProperty(t3);
        }, false) && (t2 = e2, e2 = {})), this.__opts__ = n({}, a, t2), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = n({}, c, e2), this.__compiled__ = {}, this.__tlds__ = l, this.__tlds_replaced__ = false, this.re = {}, u(this);
      }
      f.prototype.add = function(e2, t2) {
        return this.__schemas__[e2] = t2, u(this), this;
      }, f.prototype.set = function(e2) {
        return this.__opts__ = n(this.__opts__, e2), this;
      }, f.prototype.test = function(e2) {
        if (this.__text_cache__ = e2, this.__index__ = -1, !e2.length)
          return false;
        var t2, r2, n2, s2, i2, o2, a2, c2;
        if (this.re.schema_test.test(e2)) {
          for ((a2 = this.re.schema_search).lastIndex = 0; (t2 = a2.exec(e2)) !== null; )
            if (s2 = this.testSchemaAt(e2, t2[2], a2.lastIndex)) {
              this.__schema__ = t2[2], this.__index__ = t2.index + t2[1].length, this.__last_index__ = t2.index + t2[0].length + s2;
              break;
            }
        }
        return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c2 = e2.search(this.re.host_fuzzy_test)) >= 0 && (this.__index__ < 0 || c2 < this.__index__) && (r2 = e2.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i2 = r2.index + r2[1].length, (this.__index__ < 0 || i2 < this.__index__) && (this.__schema__ = "", this.__index__ = i2, this.__last_index__ = r2.index + r2[0].length)), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && e2.indexOf("@") >= 0 && (n2 = e2.match(this.re.email_fuzzy)) !== null && (i2 = n2.index + n2[1].length, o2 = n2.index + n2[0].length, (this.__index__ < 0 || i2 < this.__index__ || i2 === this.__index__ && o2 > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i2, this.__last_index__ = o2)), this.__index__ >= 0;
      }, f.prototype.pretest = function(e2) {
        return this.re.pretest.test(e2);
      }, f.prototype.testSchemaAt = function(e2, t2, r2) {
        return this.__compiled__[t2.toLowerCase()] ? this.__compiled__[t2.toLowerCase()].validate(e2, r2, this) : 0;
      }, f.prototype.match = function(e2) {
        var t2 = 0, r2 = [];
        this.__index__ >= 0 && this.__text_cache__ === e2 && (r2.push(h(this, t2)), t2 = this.__last_index__);
        for (var n2 = t2 ? e2.slice(t2) : e2; this.test(n2); )
          r2.push(h(this, t2)), n2 = n2.slice(this.__last_index__), t2 += this.__last_index__;
        return r2.length ? r2 : null;
      }, f.prototype.tlds = function(e2, t2) {
        return e2 = Array.isArray(e2) ? e2 : [e2], t2 ? (this.__tlds__ = this.__tlds__.concat(e2).sort().filter(function(e3, t3, r2) {
          return e3 !== r2[t3 - 1];
        }).reverse(), u(this), this) : (this.__tlds__ = e2.slice(), this.__tlds_replaced__ = true, u(this), this);
      }, f.prototype.normalize = function(e2) {
        e2.schema || (e2.url = "http://" + e2.url), e2.schema !== "mailto:" || /^mailto:/i.test(e2.url) || (e2.url = "mailto:" + e2.url);
      }, f.prototype.onCompile = function() {
      }, e.exports = f;
    }, function(e, t, r) {
      e.exports = function(e2) {
        var t2 = {};
        t2.src_Any = r(9).source, t2.src_Cc = r(10).source, t2.src_Z = r(11).source, t2.src_P = r(3).source, t2.src_ZPCc = [t2.src_Z, t2.src_P, t2.src_Cc].join("|"), t2.src_ZCc = [t2.src_Z, t2.src_Cc].join("|");
        return t2.src_pseudo_letter = "(?:(?![><\uFF5C]|" + t2.src_ZPCc + ")" + t2.src_Any + ")", t2.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t2.src_auth = "(?:(?:(?!" + t2.src_ZCc + "|[@/\\[\\]()]).)+@)?", t2.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t2.src_host_terminator = "(?=$|[><\uFF5C]|" + t2.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + t2.src_ZPCc + "))", t2.src_path = "(?:[/?#](?:(?!" + t2.src_ZCc + `|[><\uFF5C]|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + t2.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t2.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t2.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t2.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t2.src_ZCc + "|[']).)+\\'|\\'(?=" + t2.src_pseudo_letter + "|[-]).|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t2.src_ZCc + "|[.]).|" + (e2 && e2["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + t2.src_ZCc + ").|\\!+(?!" + t2.src_ZCc + "|[!]).|\\?(?!" + t2.src_ZCc + "|[?]).)+|\\/)?", t2.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t2.src_xn = "xn--[a-z0-9\\-]{1,59}", t2.src_domain_root = "(?:" + t2.src_xn + "|" + t2.src_pseudo_letter + "{1,63})", t2.src_domain = "(?:" + t2.src_xn + "|(?:" + t2.src_pseudo_letter + ")|(?:" + t2.src_pseudo_letter + "(?:-|" + t2.src_pseudo_letter + "){0,61}" + t2.src_pseudo_letter + "))", t2.src_host = "(?:(?:(?:(?:" + t2.src_domain + ")\\.)*" + t2.src_domain + "))", t2.tpl_host_fuzzy = "(?:" + t2.src_ip4 + "|(?:(?:(?:" + t2.src_domain + ")\\.)+(?:%TLDS%)))", t2.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t2.src_domain + ")\\.)+(?:%TLDS%))", t2.src_host_strict = t2.src_host + t2.src_host_terminator, t2.tpl_host_fuzzy_strict = t2.tpl_host_fuzzy + t2.src_host_terminator, t2.src_host_port_strict = t2.src_host + t2.src_port + t2.src_host_terminator, t2.tpl_host_port_fuzzy_strict = t2.tpl_host_fuzzy + t2.src_port + t2.src_host_terminator, t2.tpl_host_port_no_ip_fuzzy_strict = t2.tpl_host_no_ip_fuzzy + t2.src_port + t2.src_host_terminator, t2.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t2.src_ZPCc + "|>|$))", t2.tpl_email_fuzzy = '(^|[><\uFF5C]|"|\\(|' + t2.src_ZCc + ")(" + t2.src_email_name + "@" + t2.tpl_host_fuzzy_strict + ")", t2.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + t2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + t2.tpl_host_port_fuzzy_strict + t2.src_path + ")", t2.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|" + t2.src_ZPCc + "))((?![$+<=>^`|\uFF5C])" + t2.tpl_host_port_no_ip_fuzzy_strict + t2.src_path + ")", t2;
      };
    }, function(e, t, r) {
      (function(e2, n) {
        var s;
        /*! https://mths.be/punycode v1.4.1 by @mathias */
        !function(i) {
          t && t.nodeType, e2 && e2.nodeType;
          var o = typeof n == "object" && n;
          o.global !== o && o.window !== o && o.self;
          var a, c = 2147483647, l = /^xn--/, u = /[^\x20-\x7E]/, p = /[\x2E\u3002\uFF0E\uFF61]/g, h = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, f = Math.floor, d = String.fromCharCode;
          function g(e3) {
            throw new RangeError(h[e3]);
          }
          function m(e3, t2) {
            for (var r2 = e3.length, n2 = []; r2--; )
              n2[r2] = t2(e3[r2]);
            return n2;
          }
          function _(e3, t2) {
            var r2 = e3.split("@"), n2 = "";
            return r2.length > 1 && (n2 = r2[0] + "@", e3 = r2[1]), n2 + m((e3 = e3.replace(p, ".")).split("."), t2).join(".");
          }
          function b(e3) {
            for (var t2, r2, n2 = [], s2 = 0, i2 = e3.length; s2 < i2; )
              (t2 = e3.charCodeAt(s2++)) >= 55296 && t2 <= 56319 && s2 < i2 ? (64512 & (r2 = e3.charCodeAt(s2++))) == 56320 ? n2.push(((1023 & t2) << 10) + (1023 & r2) + 65536) : (n2.push(t2), s2--) : n2.push(t2);
            return n2;
          }
          function k(e3) {
            return m(e3, function(e4) {
              var t2 = "";
              return e4 > 65535 && (t2 += d((e4 -= 65536) >>> 10 & 1023 | 55296), e4 = 56320 | 1023 & e4), t2 += d(e4);
            }).join("");
          }
          function v(e3, t2) {
            return e3 + 22 + 75 * (e3 < 26) - ((t2 != 0) << 5);
          }
          function y(e3, t2, r2) {
            var n2 = 0;
            for (e3 = r2 ? f(e3 / 700) : e3 >> 1, e3 += f(e3 / t2); e3 > 455; n2 += 36)
              e3 = f(e3 / 35);
            return f(n2 + 36 * e3 / (e3 + 38));
          }
          function x(e3) {
            var t2, r2, n2, s2, i2, o2, a2, l2, u2, p2, h2, d2 = [], m2 = e3.length, _2 = 0, b2 = 128, v2 = 72;
            for ((r2 = e3.lastIndexOf("-")) < 0 && (r2 = 0), n2 = 0; n2 < r2; ++n2)
              e3.charCodeAt(n2) >= 128 && g("not-basic"), d2.push(e3.charCodeAt(n2));
            for (s2 = r2 > 0 ? r2 + 1 : 0; s2 < m2; ) {
              for (i2 = _2, o2 = 1, a2 = 36; s2 >= m2 && g("invalid-input"), ((l2 = (h2 = e3.charCodeAt(s2++)) - 48 < 10 ? h2 - 22 : h2 - 65 < 26 ? h2 - 65 : h2 - 97 < 26 ? h2 - 97 : 36) >= 36 || l2 > f((c - _2) / o2)) && g("overflow"), _2 += l2 * o2, !(l2 < (u2 = a2 <= v2 ? 1 : a2 >= v2 + 26 ? 26 : a2 - v2)); a2 += 36)
                o2 > f(c / (p2 = 36 - u2)) && g("overflow"), o2 *= p2;
              v2 = y(_2 - i2, t2 = d2.length + 1, i2 == 0), f(_2 / t2) > c - b2 && g("overflow"), b2 += f(_2 / t2), _2 %= t2, d2.splice(_2++, 0, b2);
            }
            return k(d2);
          }
          function C(e3) {
            var t2, r2, n2, s2, i2, o2, a2, l2, u2, p2, h2, m2, _2, k2, x2, C2 = [];
            for (m2 = (e3 = b(e3)).length, t2 = 128, r2 = 0, i2 = 72, o2 = 0; o2 < m2; ++o2)
              (h2 = e3[o2]) < 128 && C2.push(d(h2));
            for (n2 = s2 = C2.length, s2 && C2.push("-"); n2 < m2; ) {
              for (a2 = c, o2 = 0; o2 < m2; ++o2)
                (h2 = e3[o2]) >= t2 && h2 < a2 && (a2 = h2);
              for (a2 - t2 > f((c - r2) / (_2 = n2 + 1)) && g("overflow"), r2 += (a2 - t2) * _2, t2 = a2, o2 = 0; o2 < m2; ++o2)
                if ((h2 = e3[o2]) < t2 && ++r2 > c && g("overflow"), h2 == t2) {
                  for (l2 = r2, u2 = 36; !(l2 < (p2 = u2 <= i2 ? 1 : u2 >= i2 + 26 ? 26 : u2 - i2)); u2 += 36)
                    x2 = l2 - p2, k2 = 36 - p2, C2.push(d(v(p2 + x2 % k2, 0))), l2 = f(x2 / k2);
                  C2.push(d(v(l2, 0))), i2 = y(r2, _2, n2 == s2), r2 = 0, ++n2;
                }
              ++r2, ++t2;
            }
            return C2.join("");
          }
          a = { version: "1.4.1", ucs2: { decode: b, encode: k }, decode: x, encode: C, toASCII: function(e3) {
            return _(e3, function(e4) {
              return u.test(e4) ? "xn--" + C(e4) : e4;
            });
          }, toUnicode: function(e3) {
            return _(e3, function(e4) {
              return l.test(e4) ? x(e4.slice(4).toLowerCase()) : e4;
            });
          } }, (s = function() {
            return a;
          }.call(t, r, t, e2)) === void 0 || (e2.exports = s);
        }();
      }).call(this, r(71)(e), r(72));
    }, function(e, t) {
      e.exports = function(e2) {
        return e2.webpackPolyfill || (e2.deprecate = function() {
        }, e2.paths = [], e2.children || (e2.children = []), Object.defineProperty(e2, "loaded", { enumerable: true, get: function() {
          return e2.l;
        } }), Object.defineProperty(e2, "id", { enumerable: true, get: function() {
          return e2.i;
        } }), e2.webpackPolyfill = 1), e2;
      };
    }, function(e, t) {
      var r;
      r = function() {
        return this;
      }();
      try {
        r = r || new Function("return this")();
      } catch (e2) {
        typeof window == "object" && (r = window);
      }
      e.exports = r;
    }, function(e, t, r) {
      e.exports = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "\u201C\u201D\u2018\u2019", highlight: null, maxNesting: 100 }, components: { core: {}, block: {}, inline: {} } };
    }, function(e, t, r) {
      e.exports = { options: { html: false, xhtmlOut: false, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "\u201C\u201D\u2018\u2019", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline"] }, block: { rules: ["paragraph"] }, inline: { rules: ["text"], rules2: ["balance_pairs", "text_collapse"] } } };
    }, function(e, t, r) {
      e.exports = { options: { html: true, xhtmlOut: true, breaks: false, langPrefix: "language-", linkify: false, typographer: false, quotes: "\u201C\u201D\u2018\u2019", highlight: null, maxNesting: 20 }, components: { core: { rules: ["normalize", "block", "inline"] }, block: { rules: ["blockquote", "code", "fence", "heading", "hr", "html_block", "lheading", "list", "reference", "paragraph"] }, inline: { rules: ["autolink", "backticks", "emphasis", "entity", "escape", "html_inline", "image", "link", "newline", "text"], rules2: ["balance_pairs", "emphasis", "text_collapse"] } } };
    }, function(e, t, r) {
      r.r(t), r.d(t, "default", function() {
        return i;
      });
      var n = r(17), s = r(2);
      function i(e2) {
        var t2 = e2 === void 0 ? {} : e2, r2 = t2.Hljs, i2 = t2.baseConfig, o = t2.codeBlockClass, a = t2.codeHighlightExtensionMap, c = a === void 0 ? {} : a, l = Object(n.default)(i2);
        return l.extend(function(e3) {
          e3.set({ highlight: Object(s.a)({ codeHighlightExtensionMap: c, hasLang: function(e4) {
            return r2.getLanguage(e4);
          }, codeBlockClass: o, highlight: function(e4, t3) {
            return r2.highlight(e4, { language: t3 }).value;
          } }) });
        }), { previewClass: "markdown-body", extend: function(e3) {
          l.extend(function() {
            e3.apply(void 0, arguments);
          });
        }, markdownParser: l.markdownParser };
      }
    }, , function(e, t, r) {
      r.r(t);
      var n = r(76);
      t.default = function(e2, t2) {
        t2 === void 0 && (t2 = {});
        var r2 = t2, s = r2.extend, i = r2.config, o = r2.codeHighlightExtensionMap, a = function(e3) {
          var t3 = Object(n.default)({ Hljs: e3.Hljs, baseConfig: e3.baseConfig, codeBlockClass: e3.codeBlockClass || function(e4) {
            return "v-md-hljs-" + e4;
          }, codeHighlightExtensionMap: e3.codeHighlightExtensionMap || {} });
          return { previewClass: "github-markdown-body", extend: function(e4) {
            t3.extend(e4);
          }, markdownParser: t3.markdownParser };
        }({ Hljs: r2.Hljs, baseConfig: i, codeHighlightExtensionMap: o });
        s && a.extend(s), e2.theme(a);
      };
    }, , function(e, t, r) {
    }, , function(e, t, r) {
      r.r(t);
      var n = r(78);
      r(80), r(83);
      t.default = { install: function(e2, t2) {
        e2.vMdParser.use(n.default, t2);
      } };
    }, function(e, t, r) {
    }]).default;
  });
})(github);
var githubTheme = /* @__PURE__ */ getDefaultExportFromCjs(github.exports);
export { VMdEditor as V, githubTheme as g };
