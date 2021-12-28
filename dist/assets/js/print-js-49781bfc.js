import { a as getDefaultExportFromCjs } from "./axios-c5bbbefe.js";
var print = { exports: {} };
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(window, function() {
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
      return __webpack_require__(__webpack_require__.s = 0);
    }({
      "./src/index.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__("./src/sass/index.scss");
        var _js_init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/init.js");
        var printJS2 = _js_init__WEBPACK_IMPORTED_MODULE_1__["default"].init;
        if (typeof window !== "undefined") {
          window.printJS = printJS2;
        }
        __webpack_exports__["default"] = printJS2;
      },
      "./src/js/browser.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var Browser = {
          isFirefox: function isFirefox() {
            return typeof InstallTrigger !== "undefined";
          },
          isIE: function isIE() {
            return navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode;
          },
          isEdge: function isEdge() {
            return !Browser.isIE() && !!window.StyleMedia;
          },
          isChrome: function isChrome() {
            var context = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : window;
            return !!context.chrome;
          },
          isSafari: function isSafari() {
            return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") > 0 || navigator.userAgent.toLowerCase().indexOf("safari") !== -1;
          },
          isIOSChrome: function isIOSChrome() {
            return navigator.userAgent.toLowerCase().indexOf("crios") !== -1;
          }
        };
        __webpack_exports__["default"] = Browser;
      },
      "./src/js/functions.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "addWrapper", function() {
          return addWrapper;
        });
        __webpack_require__.d(__webpack_exports__, "capitalizePrint", function() {
          return capitalizePrint;
        });
        __webpack_require__.d(__webpack_exports__, "collectStyles", function() {
          return collectStyles;
        });
        __webpack_require__.d(__webpack_exports__, "addHeader", function() {
          return addHeader;
        });
        __webpack_require__.d(__webpack_exports__, "cleanUp", function() {
          return cleanUp;
        });
        __webpack_require__.d(__webpack_exports__, "isRawHTML", function() {
          return isRawHTML;
        });
        var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/modal.js");
        var _browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/browser.js");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        function addWrapper(htmlData, params) {
          var bodyStyle = "font-family:" + params.font + " !important; font-size: " + params.font_size + " !important; width:100%;";
          return '<div style="' + bodyStyle + '">' + htmlData + "</div>";
        }
        function capitalizePrint(obj) {
          return obj.charAt(0).toUpperCase() + obj.slice(1);
        }
        function collectStyles(element, params) {
          var win = document.defaultView || window;
          var elementStyle = "";
          var styles = win.getComputedStyle(element, "");
          for (var key = 0; key < styles.length; key++) {
            if (params.targetStyles.indexOf("*") !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {
              if (styles.getPropertyValue(styles[key]))
                elementStyle += styles[key] + ":" + styles.getPropertyValue(styles[key]) + ";";
            }
          }
          elementStyle += "max-width: " + params.maxWidth + "px !important; font-size: " + params.font_size + " !important;";
          return elementStyle;
        }
        function targetStylesMatch(styles, value) {
          for (var i = 0; i < styles.length; i++) {
            if (_typeof(value) === "object" && value.indexOf(styles[i]) !== -1)
              return true;
          }
          return false;
        }
        function addHeader(printElement, params) {
          var headerContainer = document.createElement("div");
          if (isRawHTML(params.header)) {
            headerContainer.innerHTML = params.header;
          } else {
            var headerElement = document.createElement("h1");
            var headerNode = document.createTextNode(params.header);
            headerElement.appendChild(headerNode);
            headerElement.setAttribute("style", params.headerStyle);
            headerContainer.appendChild(headerElement);
          }
          printElement.insertBefore(headerContainer, printElement.childNodes[0]);
        }
        function cleanUp(params) {
          if (params.showModal)
            _modal__WEBPACK_IMPORTED_MODULE_0__["default"].close();
          if (params.onLoadingEnd)
            params.onLoadingEnd();
          if (params.showModal || params.onLoadingStart)
            window.URL.revokeObjectURL(params.printable);
          var event = "mouseover";
          if (_browser__WEBPACK_IMPORTED_MODULE_1__["default"].isChrome() || _browser__WEBPACK_IMPORTED_MODULE_1__["default"].isFirefox()) {
            event = "focus";
          }
          var handler = function handler2() {
            window.removeEventListener(event, handler2);
            params.onPrintDialogClose();
            var iframe = document.getElementById(params.frameId);
            if (iframe) {
              iframe.remove();
            }
          };
          window.addEventListener(event, handler);
        }
        function isRawHTML(raw) {
          var regexHtml = new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");
          return regexHtml.test(raw);
        }
      },
      "./src/js/html.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/functions.js");
        var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/print.js");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        __webpack_exports__["default"] = {
          print: function print2(params, printFrame) {
            var printElement = isHtmlElement(params.printable) ? params.printable : document.getElementById(params.printable);
            if (!printElement) {
              window.console.error("Invalid HTML element id: " + params.printable);
              return;
            }
            params.printableElement = cloneElement(printElement, params);
            if (params.header) {
              Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
            }
            _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
          }
        };
        function cloneElement(element, params) {
          var clone = element.cloneNode();
          var childNodesArray = Array.prototype.slice.call(element.childNodes);
          for (var i = 0; i < childNodesArray.length; i++) {
            if (params.ignoreElements.indexOf(childNodesArray[i].id) !== -1) {
              continue;
            }
            var clonedChild = cloneElement(childNodesArray[i], params);
            clone.appendChild(clonedChild);
          }
          if (params.scanStyles && element.nodeType === 1) {
            clone.setAttribute("style", Object(_functions__WEBPACK_IMPORTED_MODULE_0__["collectStyles"])(element, params));
          }
          switch (element.tagName) {
            case "SELECT":
              clone.value = element.value;
              break;
            case "CANVAS":
              clone.getContext("2d").drawImage(element, 0, 0);
              break;
          }
          return clone;
        }
        function isHtmlElement(printable) {
          return _typeof(printable) === "object" && printable && (printable instanceof HTMLElement || printable.nodeType === 1);
        }
      },
      "./src/js/image.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/functions.js");
        var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/print.js");
        var _browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/js/browser.js");
        __webpack_exports__["default"] = {
          print: function print2(params, printFrame) {
            if (params.printable.constructor !== Array) {
              params.printable = [params.printable];
            }
            params.printableElement = document.createElement("div");
            params.printable.forEach(function(src) {
              var img = document.createElement("img");
              img.setAttribute("style", params.imageStyle);
              img.src = src;
              if (_browser__WEBPACK_IMPORTED_MODULE_2__["default"].isFirefox()) {
                var fullyQualifiedSrc = img.src;
                img.src = fullyQualifiedSrc;
              }
              var imageWrapper = document.createElement("div");
              imageWrapper.appendChild(img);
              params.printableElement.appendChild(imageWrapper);
            });
            if (params.header)
              Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
            _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
          }
        };
      },
      "./src/js/init.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/browser.js");
        var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/modal.js");
        var _pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/js/pdf.js");
        var _html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/js/html.js");
        var _raw_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/js/raw-html.js");
        var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/js/image.js");
        var _json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/js/json.js");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        var printTypes = ["pdf", "html", "image", "json", "raw-html"];
        __webpack_exports__["default"] = {
          init: function init() {
            var params = {
              printable: null,
              fallbackPrintable: null,
              type: "pdf",
              header: null,
              headerStyle: "font-weight: 300;",
              maxWidth: 800,
              properties: null,
              gridHeaderStyle: "font-weight: bold; padding: 5px; border: 1px solid #dddddd;",
              gridStyle: "border: 1px solid lightgray; margin-bottom: -1px;",
              showModal: false,
              onError: function onError(error) {
                throw error;
              },
              onLoadingStart: null,
              onLoadingEnd: null,
              onPrintDialogClose: function onPrintDialogClose() {
              },
              onIncompatibleBrowser: function onIncompatibleBrowser() {
              },
              modalMessage: "Retrieving Document...",
              frameId: "printJS",
              printableElement: null,
              documentTitle: "Document",
              targetStyle: ["clear", "display", "width", "min-width", "height", "min-height", "max-height"],
              targetStyles: ["border", "box", "break", "text-decoration"],
              ignoreElements: [],
              repeatTableHeader: true,
              css: null,
              style: null,
              scanStyles: true,
              base64: false,
              onPdfOpen: null,
              font: "TimesNewRoman",
              font_size: "12pt",
              honorMarginPadding: true,
              honorColor: false,
              imageStyle: "max-width: 100%;"
            };
            var args = arguments[0];
            if (args === void 0) {
              throw new Error("printJS expects at least 1 attribute.");
            }
            switch (_typeof(args)) {
              case "string":
                params.printable = encodeURI(args);
                params.fallbackPrintable = params.printable;
                params.type = arguments[1] || params.type;
                break;
              case "object":
                params.printable = args.printable;
                params.fallbackPrintable = typeof args.fallbackPrintable !== "undefined" ? args.fallbackPrintable : params.printable;
                params.fallbackPrintable = params.base64 ? "data:application/pdf;base64,".concat(params.fallbackPrintable) : params.fallbackPrintable;
                for (var k in params) {
                  if (k === "printable" || k === "fallbackPrintable")
                    continue;
                  params[k] = typeof args[k] !== "undefined" ? args[k] : params[k];
                }
                break;
              default:
                throw new Error('Unexpected argument type! Expected "string" or "object", got ' + _typeof(args));
            }
            if (!params.printable)
              throw new Error("Missing printable information.");
            if (!params.type || typeof params.type !== "string" || printTypes.indexOf(params.type.toLowerCase()) === -1) {
              throw new Error("Invalid print type. Available types are: pdf, html, image and json.");
            }
            if (params.showModal)
              _modal__WEBPACK_IMPORTED_MODULE_1__["default"].show(params);
            if (params.onLoadingStart)
              params.onLoadingStart();
            var usedFrame = document.getElementById(params.frameId);
            if (usedFrame)
              usedFrame.parentNode.removeChild(usedFrame);
            var printFrame = document.createElement("iframe");
            if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
              printFrame.setAttribute("style", "width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0");
            } else {
              printFrame.setAttribute("style", "visibility: hidden; height: 0; width: 0; position: absolute; border: 0");
            }
            printFrame.setAttribute("id", params.frameId);
            if (params.type !== "pdf") {
              printFrame.srcdoc = "<html><head><title>" + params.documentTitle + "</title>";
              if (params.css) {
                if (!Array.isArray(params.css))
                  params.css = [params.css];
                params.css.forEach(function(file) {
                  printFrame.srcdoc += '<link rel="stylesheet" href="' + file + '">';
                });
              }
              printFrame.srcdoc += "</head><body></body></html>";
            }
            switch (params.type) {
              case "pdf":
                if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
                  try {
                    console.info("Print.js doesn't support PDF printing in Internet Explorer.");
                    var win = window.open(params.fallbackPrintable, "_blank");
                    win.focus();
                    params.onIncompatibleBrowser();
                  } catch (error) {
                    params.onError(error);
                  } finally {
                    if (params.showModal)
                      _modal__WEBPACK_IMPORTED_MODULE_1__["default"].close();
                    if (params.onLoadingEnd)
                      params.onLoadingEnd();
                  }
                } else {
                  _pdf__WEBPACK_IMPORTED_MODULE_2__["default"].print(params, printFrame);
                }
                break;
              case "image":
                _image__WEBPACK_IMPORTED_MODULE_5__["default"].print(params, printFrame);
                break;
              case "html":
                _html__WEBPACK_IMPORTED_MODULE_3__["default"].print(params, printFrame);
                break;
              case "raw-html":
                _raw_html__WEBPACK_IMPORTED_MODULE_4__["default"].print(params, printFrame);
                break;
              case "json":
                _json__WEBPACK_IMPORTED_MODULE_6__["default"].print(params, printFrame);
                break;
            }
          }
        };
      },
      "./src/js/json.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/functions.js");
        var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/print.js");
        function _typeof(obj) {
          "@babel/helpers - typeof";
          if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function _typeof2(obj2) {
              return typeof obj2;
            };
          } else {
            _typeof = function _typeof2(obj2) {
              return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
            };
          }
          return _typeof(obj);
        }
        __webpack_exports__["default"] = {
          print: function print2(params, printFrame) {
            if (_typeof(params.printable) !== "object") {
              throw new Error("Invalid javascript data object (JSON).");
            }
            if (typeof params.repeatTableHeader !== "boolean") {
              throw new Error("Invalid value for repeatTableHeader attribute (JSON).");
            }
            if (!params.properties || !Array.isArray(params.properties)) {
              throw new Error("Invalid properties array for your JSON data.");
            }
            params.properties = params.properties.map(function(property) {
              return {
                field: _typeof(property) === "object" ? property.field : property,
                displayName: _typeof(property) === "object" ? property.displayName : property,
                columnSize: _typeof(property) === "object" && property.columnSize ? property.columnSize + ";" : 100 / params.properties.length + "%;"
              };
            });
            params.printableElement = document.createElement("div");
            if (params.header) {
              Object(_functions__WEBPACK_IMPORTED_MODULE_0__["addHeader"])(params.printableElement, params);
            }
            params.printableElement.innerHTML += jsonToHTML(params);
            _print__WEBPACK_IMPORTED_MODULE_1__["default"].send(params, printFrame);
          }
        };
        function jsonToHTML(params) {
          var data = params.printable;
          var properties = params.properties;
          var htmlData = '<table style="border-collapse: collapse; width: 100%;">';
          if (params.repeatTableHeader) {
            htmlData += "<thead>";
          }
          htmlData += "<tr>";
          for (var a = 0; a < properties.length; a++) {
            htmlData += '<th style="width:' + properties[a].columnSize + ";" + params.gridHeaderStyle + '">' + Object(_functions__WEBPACK_IMPORTED_MODULE_0__["capitalizePrint"])(properties[a].displayName) + "</th>";
          }
          htmlData += "</tr>";
          if (params.repeatTableHeader) {
            htmlData += "</thead>";
          }
          htmlData += "<tbody>";
          for (var i = 0; i < data.length; i++) {
            htmlData += "<tr>";
            for (var n = 0; n < properties.length; n++) {
              var stringData = data[i];
              var property = properties[n].field.split(".");
              if (property.length > 1) {
                for (var p = 0; p < property.length; p++) {
                  stringData = stringData[property[p]];
                }
              } else {
                stringData = stringData[properties[n].field];
              }
              htmlData += '<td style="width:' + properties[n].columnSize + params.gridStyle + '">' + stringData + "</td>";
            }
            htmlData += "</tr>";
          }
          htmlData += "</tbody></table>";
          return htmlData;
        }
      },
      "./src/js/modal.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var Modal = {
          show: function show(params) {
            var modalStyle = "font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;";
            var printModal = document.createElement("div");
            printModal.setAttribute("style", modalStyle);
            printModal.setAttribute("id", "printJS-Modal");
            var contentDiv = document.createElement("div");
            contentDiv.setAttribute("style", "display:table-cell; vertical-align:middle; padding-bottom:100px;");
            var closeButton = document.createElement("div");
            closeButton.setAttribute("class", "printClose");
            closeButton.setAttribute("id", "printClose");
            contentDiv.appendChild(closeButton);
            var spinner = document.createElement("span");
            spinner.setAttribute("class", "printSpinner");
            contentDiv.appendChild(spinner);
            var messageNode = document.createTextNode(params.modalMessage);
            contentDiv.appendChild(messageNode);
            printModal.appendChild(contentDiv);
            document.getElementsByTagName("body")[0].appendChild(printModal);
            document.getElementById("printClose").addEventListener("click", function() {
              Modal.close();
            });
          },
          close: function close() {
            var printModal = document.getElementById("printJS-Modal");
            if (printModal) {
              printModal.parentNode.removeChild(printModal);
            }
          }
        };
        __webpack_exports__["default"] = Modal;
      },
      "./src/js/pdf.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/print.js");
        var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/functions.js");
        __webpack_exports__["default"] = {
          print: function print2(params, printFrame) {
            if (params.base64) {
              var bytesArray = Uint8Array.from(atob(params.printable), function(c) {
                return c.charCodeAt(0);
              });
              createBlobAndPrint(params, printFrame, bytesArray);
              return;
            }
            params.printable = /^(blob|http|\/\/)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== "/" ? "/" + params.printable : params.printable);
            var req = new window.XMLHttpRequest();
            req.responseType = "arraybuffer";
            req.addEventListener("error", function() {
              Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
              params.onError(req.statusText, req);
            });
            req.addEventListener("load", function() {
              if ([200, 201].indexOf(req.status) === -1) {
                Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
                params.onError(req.statusText, req);
                return;
              }
              createBlobAndPrint(params, printFrame, req.response);
            });
            req.open("GET", params.printable, true);
            req.send();
          }
        };
        function createBlobAndPrint(params, printFrame, data) {
          var localPdf = new window.Blob([data], {
            type: "application/pdf"
          });
          localPdf = window.URL.createObjectURL(localPdf);
          printFrame.setAttribute("src", localPdf);
          _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
        }
      },
      "./src/js/print.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/browser.js");
        var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/js/functions.js");
        var Print = {
          send: function send(params, printFrame) {
            document.getElementsByTagName("body")[0].appendChild(printFrame);
            var iframeElement = document.getElementById(params.frameId);
            iframeElement.onload = function() {
              if (params.type === "pdf") {
                if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
                  setTimeout(function() {
                    return performPrint(iframeElement, params);
                  }, 1e3);
                } else {
                  performPrint(iframeElement, params);
                }
                return;
              }
              var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
              if (printDocument.document)
                printDocument = printDocument.document;
              printDocument.body.appendChild(params.printableElement);
              if (params.type !== "pdf" && params.style) {
                var style = document.createElement("style");
                style.innerHTML = params.style;
                printDocument.head.appendChild(style);
              }
              var images = printDocument.getElementsByTagName("img");
              if (images.length > 0) {
                loadIframeImages(Array.from(images)).then(function() {
                  return performPrint(iframeElement, params);
                });
              } else {
                performPrint(iframeElement, params);
              }
            };
          }
        };
        function performPrint(iframeElement, params) {
          try {
            iframeElement.focus();
            if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isEdge() || _browser__WEBPACK_IMPORTED_MODULE_0__["default"].isIE()) {
              try {
                iframeElement.contentWindow.document.execCommand("print", false, null);
              } catch (e) {
                iframeElement.contentWindow.print();
              }
            } else {
              iframeElement.contentWindow.print();
            }
          } catch (error) {
            params.onError(error);
          } finally {
            if (_browser__WEBPACK_IMPORTED_MODULE_0__["default"].isFirefox()) {
              iframeElement.style.visibility = "hidden";
              iframeElement.style.left = "-1px";
            }
            Object(_functions__WEBPACK_IMPORTED_MODULE_1__["cleanUp"])(params);
          }
        }
        function loadIframeImages(images) {
          var promises = images.map(function(image) {
            if (image.src && image.src !== window.location.href) {
              return loadIframeImage(image);
            }
          });
          return Promise.all(promises);
        }
        function loadIframeImage(image) {
          return new Promise(function(resolve) {
            var pollImage = function pollImage2() {
              !image || typeof image.naturalWidth === "undefined" || image.naturalWidth === 0 || !image.complete ? setTimeout(pollImage2, 500) : resolve();
            };
            pollImage();
          });
        }
        __webpack_exports__["default"] = Print;
      },
      "./src/js/raw-html.js": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _print__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/print.js");
        __webpack_exports__["default"] = {
          print: function print2(params, printFrame) {
            params.printableElement = document.createElement("div");
            params.printableElement.setAttribute("style", "width:100%");
            params.printableElement.innerHTML = params.printable;
            _print__WEBPACK_IMPORTED_MODULE_0__["default"].send(params, printFrame);
          }
        };
      },
      "./src/sass/index.scss": function(module2, exports2, __webpack_require__) {
      },
      0: function(module2, exports2, __webpack_require__) {
        module2.exports = __webpack_require__("./src/index.js");
      }
    })["default"];
  });
})(print);
var printJS = /* @__PURE__ */ getDefaultExportFromCjs(print.exports);
export { printJS as p };
