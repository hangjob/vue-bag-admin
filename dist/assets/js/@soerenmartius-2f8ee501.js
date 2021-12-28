/*!
  * @soerenmartius/vue3-clipboard v0.1.2
  * (c) 2021 Soeren Martius
  * @license MIT
  */
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var clipboard = createCommonjsModule(function(module, exports) {
  /*!
   * clipboard.js v2.0.6
   * https://clipboardjs.com/
   * 
   * Licensed MIT © Zeno Rocha
   */
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
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
      return __webpack_require__(__webpack_require__.s = 6);
    }([
      function(module2, exports2) {
        function select(element) {
          var selectedText;
          if (element.nodeName === "SELECT") {
            element.focus();
            selectedText = element.value;
          } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
            var isReadOnly = element.hasAttribute("readonly");
            if (!isReadOnly) {
              element.setAttribute("readonly", "");
            }
            element.select();
            element.setSelectionRange(0, element.value.length);
            if (!isReadOnly) {
              element.removeAttribute("readonly");
            }
            selectedText = element.value;
          } else {
            if (element.hasAttribute("contenteditable")) {
              element.focus();
            }
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            selectedText = selection.toString();
          }
          return selectedText;
        }
        module2.exports = select;
      },
      function(module2, exports2) {
        function E() {
        }
        E.prototype = {
          on: function(name, callback, ctx) {
            var e = this.e || (this.e = {});
            (e[name] || (e[name] = [])).push({
              fn: callback,
              ctx
            });
            return this;
          },
          once: function(name, callback, ctx) {
            var self2 = this;
            function listener() {
              self2.off(name, listener);
              callback.apply(ctx, arguments);
            }
            listener._ = callback;
            return this.on(name, listener, ctx);
          },
          emit: function(name) {
            var data = [].slice.call(arguments, 1);
            var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
            var i = 0;
            var len = evtArr.length;
            for (i; i < len; i++) {
              evtArr[i].fn.apply(evtArr[i].ctx, data);
            }
            return this;
          },
          off: function(name, callback) {
            var e = this.e || (this.e = {});
            var evts = e[name];
            var liveEvents = [];
            if (evts && callback) {
              for (var i = 0, len = evts.length; i < len; i++) {
                if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                  liveEvents.push(evts[i]);
              }
            }
            liveEvents.length ? e[name] = liveEvents : delete e[name];
            return this;
          }
        };
        module2.exports = E;
        module2.exports.TinyEmitter = E;
      },
      function(module2, exports2, __webpack_require__) {
        var is = __webpack_require__(3);
        var delegate = __webpack_require__(4);
        function listen(target, type, callback) {
          if (!target && !type && !callback) {
            throw new Error("Missing required arguments");
          }
          if (!is.string(type)) {
            throw new TypeError("Second argument must be a String");
          }
          if (!is.fn(callback)) {
            throw new TypeError("Third argument must be a Function");
          }
          if (is.node(target)) {
            return listenNode(target, type, callback);
          } else if (is.nodeList(target)) {
            return listenNodeList(target, type, callback);
          } else if (is.string(target)) {
            return listenSelector(target, type, callback);
          } else {
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
          }
        }
        function listenNode(node, type, callback) {
          node.addEventListener(type, callback);
          return {
            destroy: function() {
              node.removeEventListener(type, callback);
            }
          };
        }
        function listenNodeList(nodeList, type, callback) {
          Array.prototype.forEach.call(nodeList, function(node) {
            node.addEventListener(type, callback);
          });
          return {
            destroy: function() {
              Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
              });
            }
          };
        }
        function listenSelector(selector, type, callback) {
          return delegate(document.body, selector, type, callback);
        }
        module2.exports = listen;
      },
      function(module2, exports2) {
        exports2.node = function(value) {
          return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
        };
        exports2.nodeList = function(value) {
          var type = Object.prototype.toString.call(value);
          return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
        };
        exports2.string = function(value) {
          return typeof value === "string" || value instanceof String;
        };
        exports2.fn = function(value) {
          var type = Object.prototype.toString.call(value);
          return type === "[object Function]";
        };
      },
      function(module2, exports2, __webpack_require__) {
        var closest = __webpack_require__(5);
        function _delegate(element, selector, type, callback, useCapture) {
          var listenerFn = listener.apply(this, arguments);
          element.addEventListener(type, listenerFn, useCapture);
          return {
            destroy: function() {
              element.removeEventListener(type, listenerFn, useCapture);
            }
          };
        }
        function delegate(elements, selector, type, callback, useCapture) {
          if (typeof elements.addEventListener === "function") {
            return _delegate.apply(null, arguments);
          }
          if (typeof type === "function") {
            return _delegate.bind(null, document).apply(null, arguments);
          }
          if (typeof elements === "string") {
            elements = document.querySelectorAll(elements);
          }
          return Array.prototype.map.call(elements, function(element) {
            return _delegate(element, selector, type, callback, useCapture);
          });
        }
        function listener(element, selector, type, callback) {
          return function(e) {
            e.delegateTarget = closest(e.target, selector);
            if (e.delegateTarget) {
              callback.call(element, e);
            }
          };
        }
        module2.exports = delegate;
      },
      function(module2, exports2) {
        var DOCUMENT_NODE_TYPE = 9;
        if (typeof Element !== "undefined" && !Element.prototype.matches) {
          var proto = Element.prototype;
          proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
        }
        function closest(element, selector) {
          while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
            if (typeof element.matches === "function" && element.matches(selector)) {
              return element;
            }
            element = element.parentNode;
          }
        }
        module2.exports = closest;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var src_select = __webpack_require__(0);
        var select_default = /* @__PURE__ */ __webpack_require__.n(src_select);
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var clipboard_action_ClipboardAction = function() {
          function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);
            this.resolveOptions(options);
            this.initSelection();
          }
          _createClass(ClipboardAction, [{
            key: "resolveOptions",
            value: function resolveOptions() {
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.action = options.action;
              this.container = options.container;
              this.emitter = options.emitter;
              this.target = options.target;
              this.text = options.text;
              this.trigger = options.trigger;
              this.selectedText = "";
            }
          }, {
            key: "initSelection",
            value: function initSelection() {
              if (this.text) {
                this.selectFake();
              } else if (this.target) {
                this.selectTarget();
              }
            }
          }, {
            key: "selectFake",
            value: function selectFake() {
              var _this = this;
              var isRTL = document.documentElement.getAttribute("dir") == "rtl";
              this.removeFake();
              this.fakeHandlerCallback = function() {
                return _this.removeFake();
              };
              this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || true;
              this.fakeElem = document.createElement("textarea");
              this.fakeElem.style.fontSize = "12pt";
              this.fakeElem.style.border = "0";
              this.fakeElem.style.padding = "0";
              this.fakeElem.style.margin = "0";
              this.fakeElem.style.position = "absolute";
              this.fakeElem.style[isRTL ? "right" : "left"] = "-9999px";
              var yPosition = window.pageYOffset || document.documentElement.scrollTop;
              this.fakeElem.style.top = yPosition + "px";
              this.fakeElem.setAttribute("readonly", "");
              this.fakeElem.value = this.text;
              this.container.appendChild(this.fakeElem);
              this.selectedText = select_default()(this.fakeElem);
              this.copyText();
            }
          }, {
            key: "removeFake",
            value: function removeFake() {
              if (this.fakeHandler) {
                this.container.removeEventListener("click", this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
              }
              if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
              }
            }
          }, {
            key: "selectTarget",
            value: function selectTarget() {
              this.selectedText = select_default()(this.target);
              this.copyText();
            }
          }, {
            key: "copyText",
            value: function copyText() {
              var succeeded = void 0;
              try {
                succeeded = document.execCommand(this.action);
              } catch (err) {
                succeeded = false;
              }
              this.handleResult(succeeded);
            }
          }, {
            key: "handleResult",
            value: function handleResult(succeeded) {
              this.emitter.emit(succeeded ? "success" : "error", {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
              });
            }
          }, {
            key: "clearSelection",
            value: function clearSelection() {
              if (this.trigger) {
                this.trigger.focus();
              }
              document.activeElement.blur();
              window.getSelection().removeAllRanges();
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.removeFake();
            }
          }, {
            key: "action",
            set: function set() {
              var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "copy";
              this._action = action;
              if (this._action !== "copy" && this._action !== "cut") {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
              }
            },
            get: function get() {
              return this._action;
            }
          }, {
            key: "target",
            set: function set(target) {
              if (target !== void 0) {
                if (target && (typeof target === "undefined" ? "undefined" : _typeof(target)) === "object" && target.nodeType === 1) {
                  if (this.action === "copy" && target.hasAttribute("disabled")) {
                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                  }
                  if (this.action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                    throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  }
                  this._target = target;
                } else {
                  throw new Error('Invalid "target" value, use a valid Element');
                }
              }
            },
            get: function get() {
              return this._target;
            }
          }]);
          return ClipboardAction;
        }();
        var clipboard_action = clipboard_action_ClipboardAction;
        var tiny_emitter = __webpack_require__(1);
        var tiny_emitter_default = /* @__PURE__ */ __webpack_require__.n(tiny_emitter);
        var listen = __webpack_require__(2);
        var listen_default = /* @__PURE__ */ __webpack_require__.n(listen);
        var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var clipboard_createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function clipboard_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var clipboard_Clipboard = function(_Emitter) {
          _inherits(Clipboard, _Emitter);
          function Clipboard(trigger, options) {
            clipboard_classCallCheck(this, Clipboard);
            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
          }
          clipboard_createClass(Clipboard, [{
            key: "resolveOptions",
            value: function resolveOptions() {
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.action = typeof options.action === "function" ? options.action : this.defaultAction;
              this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
              this.text = typeof options.text === "function" ? options.text : this.defaultText;
              this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
            }
          }, {
            key: "listenClick",
            value: function listenClick(trigger) {
              var _this2 = this;
              this.listener = listen_default()(trigger, "click", function(e) {
                return _this2.onClick(e);
              });
            }
          }, {
            key: "onClick",
            value: function onClick(e) {
              var trigger = e.delegateTarget || e.currentTarget;
              if (this.clipboardAction) {
                this.clipboardAction = null;
              }
              this.clipboardAction = new clipboard_action({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger,
                emitter: this
              });
            }
          }, {
            key: "defaultAction",
            value: function defaultAction(trigger) {
              return getAttributeValue("action", trigger);
            }
          }, {
            key: "defaultTarget",
            value: function defaultTarget(trigger) {
              var selector = getAttributeValue("target", trigger);
              if (selector) {
                return document.querySelector(selector);
              }
            }
          }, {
            key: "defaultText",
            value: function defaultText(trigger) {
              return getAttributeValue("text", trigger);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.listener.destroy();
              if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
              }
            }
          }], [{
            key: "isSupported",
            value: function isSupported() {
              var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
              var actions = typeof action === "string" ? [action] : action;
              var support = !!document.queryCommandSupported;
              actions.forEach(function(action2) {
                support = support && !!document.queryCommandSupported(action2);
              });
              return support;
            }
          }]);
          return Clipboard;
        }(tiny_emitter_default.a);
        function getAttributeValue(suffix, element) {
          var attribute = "data-clipboard-" + suffix;
          if (!element.hasAttribute(attribute)) {
            return;
          }
          return element.getAttribute(attribute);
        }
        __webpack_exports__["default"] = clipboard_Clipboard;
      }
    ])["default"];
  });
});
var ClipboardJS = /* @__PURE__ */ getDefaultExportFromCjs(clipboard);
const toClipboard = (text, action = "copy") => {
  return new Promise((resolve, reject) => {
    const fakeElement = document.createElement("button");
    const clipboard2 = new ClipboardJS(fakeElement, {
      text: () => text,
      action: () => action
    });
    clipboard2.on("success", (e) => {
      clipboard2.destroy();
      resolve(e);
    });
    clipboard2.on("error", (e) => {
      clipboard2.destroy();
      reject(e);
    });
    {
      document.body.appendChild(fakeElement);
    }
    fakeElement.click();
    {
      document.body.removeChild(fakeElement);
    }
  });
};
export { toClipboard as t };
