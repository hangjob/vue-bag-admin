function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var vendorPrefix;
var jsCssMap = {
  Webkit: "-webkit-",
  Moz: "-moz-",
  ms: "-ms-",
  O: "-o-"
};
function getVendorPrefix() {
  if (vendorPrefix !== void 0) {
    return vendorPrefix;
  }
  vendorPrefix = "";
  var style = document.createElement("p").style;
  var testProp = "Transform";
  for (var key in jsCssMap) {
    if (key + testProp in style) {
      vendorPrefix = key;
    }
  }
  return vendorPrefix;
}
function getTransitionName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : "transitionProperty";
}
function getTransformName() {
  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : "transform";
}
function setTransitionProperty(node, value) {
  var name = getTransitionName();
  if (name) {
    node.style[name] = value;
    if (name !== "transitionProperty") {
      node.style.transitionProperty = value;
    }
  }
}
function setTransform(node, value) {
  var name = getTransformName();
  if (name) {
    node.style[name] = value;
    if (name !== "transform") {
      node.style.transform = value;
    }
  }
}
function getTransitionProperty(node) {
  return node.style.transitionProperty || node.style[getTransitionName()];
}
function getTransformXY(node) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var matrix = transform.replace(/[^0-9\-.,]/g, "").split(",");
    return {
      x: parseFloat(matrix[12] || matrix[4], 0),
      y: parseFloat(matrix[13] || matrix[5], 0)
    };
  }
  return {
    x: 0,
    y: 0
  };
}
var matrix2d = /matrix\((.*)\)/;
var matrix3d = /matrix3d\((.*)\)/;
function setTransformXY(node, xy) {
  var style = window.getComputedStyle(node, null);
  var transform = style.getPropertyValue("transform") || style.getPropertyValue(getTransformName());
  if (transform && transform !== "none") {
    var arr;
    var match2d = transform.match(matrix2d);
    if (match2d) {
      match2d = match2d[1];
      arr = match2d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[4] = xy.x;
      arr[5] = xy.y;
      setTransform(node, "matrix(".concat(arr.join(","), ")"));
    } else {
      var match3d = transform.match(matrix3d)[1];
      arr = match3d.split(",").map(function(item) {
        return parseFloat(item, 10);
      });
      arr[12] = xy.x;
      arr[13] = xy.y;
      setTransform(node, "matrix3d(".concat(arr.join(","), ")"));
    }
  } else {
    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
  }
}
var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
var getComputedStyleX;
function forceRelayout(elem) {
  var originalStyle = elem.style.display;
  elem.style.display = "none";
  elem.offsetHeight;
  elem.style.display = originalStyle;
}
function css(el, name, v) {
  var value = v;
  if (_typeof(name) === "object") {
    for (var i in name) {
      if (name.hasOwnProperty(i)) {
        css(el, i, name[i]);
      }
    }
    return void 0;
  }
  if (typeof value !== "undefined") {
    if (typeof value === "number") {
      value = "".concat(value, "px");
    }
    el.style[name] = value;
    return void 0;
  }
  return getComputedStyleX(el, name);
}
function getClientPosition(elem) {
  var box;
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getScroll(w, top) {
  var ret = w["page".concat(top ? "Y" : "X", "Offset")];
  var method = "scroll".concat(top ? "Top" : "Left");
  if (typeof ret !== "number") {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}
function getScrollLeft(w) {
  return getScroll(w);
}
function getScrollTop(w) {
  return getScroll(w, true);
}
function getOffset(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScrollLeft(w);
  pos.top += getScrollTop(w);
  return pos;
}
function isWindow(obj) {
  return obj !== null && obj !== void 0 && obj == obj.window;
}
function getDocument(node) {
  if (isWindow(node)) {
    return node.document;
  }
  if (node.nodeType === 9) {
    return node;
  }
  return node.ownerDocument;
}
function _getComputedStyle(elem, name, cs) {
  var computedStyle = cs;
  var val = "";
  var d = getDocument(elem);
  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
  if (computedStyle) {
    val = computedStyle.getPropertyValue(name) || computedStyle[name];
  }
  return val;
}
var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), "i");
var RE_POS = /^(top|right|bottom|left)$/;
var CURRENT_STYLE = "currentStyle";
var RUNTIME_STYLE = "runtimeStyle";
var LEFT = "left";
var PX = "px";
function _getComputedStyleIE(elem, name) {
  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
    var style = elem.style;
    var left = style[LEFT];
    var rsLeft = elem[RUNTIME_STYLE][LEFT];
    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
    style[LEFT] = name === "fontSize" ? "1em" : ret || 0;
    ret = style.pixelLeft + PX;
    style[LEFT] = left;
    elem[RUNTIME_STYLE][LEFT] = rsLeft;
  }
  return ret === "" ? "auto" : ret;
}
if (typeof window !== "undefined") {
  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
}
function getOffsetDirection(dir, option) {
  if (dir === "left") {
    return option.useCssRight ? "right" : dir;
  }
  return option.useCssBottom ? "bottom" : dir;
}
function oppositeOffsetDirection(dir) {
  if (dir === "left") {
    return "right";
  } else if (dir === "right") {
    return "left";
  } else if (dir === "top") {
    return "bottom";
  } else if (dir === "bottom") {
    return "top";
  }
}
function setLeftTop(elem, offset2, option) {
  if (css(elem, "position") === "static") {
    elem.style.position = "relative";
  }
  var presetH = -999;
  var presetV = -999;
  var horizontalProperty = getOffsetDirection("left", option);
  var verticalProperty = getOffsetDirection("top", option);
  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
  if (horizontalProperty !== "left") {
    presetH = 999;
  }
  if (verticalProperty !== "top") {
    presetV = 999;
  }
  var originalTransition = "";
  var originalOffset = getOffset(elem);
  if ("left" in offset2 || "top" in offset2) {
    originalTransition = getTransitionProperty(elem) || "";
    setTransitionProperty(elem, "none");
  }
  if ("left" in offset2) {
    elem.style[oppositeHorizontalProperty] = "";
    elem.style[horizontalProperty] = "".concat(presetH, "px");
  }
  if ("top" in offset2) {
    elem.style[oppositeVerticalProperty] = "";
    elem.style[verticalProperty] = "".concat(presetV, "px");
  }
  forceRelayout(elem);
  var old = getOffset(elem);
  var originalStyle = {};
  for (var key in offset2) {
    if (offset2.hasOwnProperty(key)) {
      var dir = getOffsetDirection(key, option);
      var preset = key === "left" ? presetH : presetV;
      var off = originalOffset[key] - old[key];
      if (dir === key) {
        originalStyle[dir] = preset + off;
      } else {
        originalStyle[dir] = preset - off;
      }
    }
  }
  css(elem, originalStyle);
  forceRelayout(elem);
  if ("left" in offset2 || "top" in offset2) {
    setTransitionProperty(elem, originalTransition);
  }
  var ret = {};
  for (var _key in offset2) {
    if (offset2.hasOwnProperty(_key)) {
      var _dir = getOffsetDirection(_key, option);
      var _off = offset2[_key] - originalOffset[_key];
      if (_key === _dir) {
        ret[_dir] = originalStyle[_dir] + _off;
      } else {
        ret[_dir] = originalStyle[_dir] - _off;
      }
    }
  }
  css(elem, ret);
}
function setTransform$1(elem, offset2) {
  var originalOffset = getOffset(elem);
  var originalXY = getTransformXY(elem);
  var resultXY = {
    x: originalXY.x,
    y: originalXY.y
  };
  if ("left" in offset2) {
    resultXY.x = originalXY.x + offset2.left - originalOffset.left;
  }
  if ("top" in offset2) {
    resultXY.y = originalXY.y + offset2.top - originalOffset.top;
  }
  setTransformXY(elem, resultXY);
}
function setOffset(elem, offset2, option) {
  if (option.ignoreShake) {
    var oriOffset = getOffset(elem);
    var oLeft = oriOffset.left.toFixed(0);
    var oTop = oriOffset.top.toFixed(0);
    var tLeft = offset2.left.toFixed(0);
    var tTop = offset2.top.toFixed(0);
    if (oLeft === tLeft && oTop === tTop) {
      return;
    }
  }
  if (option.useCssRight || option.useCssBottom) {
    setLeftTop(elem, offset2, option);
  } else if (option.useCssTransform && getTransformName() in document.body.style) {
    setTransform$1(elem, offset2);
  } else {
    setLeftTop(elem, offset2, option);
  }
}
function each(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}
function isBorderBoxFn(elem) {
  return getComputedStyleX(elem, "boxSizing") === "border-box";
}
var BOX_MODELS = ["margin", "border", "padding"];
var CONTENT_INDEX = -1;
var PADDING_INDEX = 2;
var BORDER_INDEX = 1;
var MARGIN_INDEX = 0;
function swap(elem, options, callback) {
  var old = {};
  var style = elem.style;
  var name;
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      old[name] = style[name];
      style[name] = options[name];
    }
  }
  callback.call(elem);
  for (name in options) {
    if (options.hasOwnProperty(name)) {
      style[name] = old[name];
    }
  }
}
function getPBMWidth(elem, props, which) {
  var value = 0;
  var prop;
  var j;
  var i;
  for (j = 0; j < props.length; j++) {
    prop = props[j];
    if (prop) {
      for (i = 0; i < which.length; i++) {
        var cssProp = void 0;
        if (prop === "border") {
          cssProp = "".concat(prop).concat(which[i], "Width");
        } else {
          cssProp = prop + which[i];
        }
        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
      }
    }
  }
  return value;
}
var domUtils = {
  getParent: function getParent(element) {
    var parent = element;
    do {
      if (parent.nodeType === 11 && parent.host) {
        parent = parent.host;
      } else {
        parent = parent.parentNode;
      }
    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
    return parent;
  }
};
each(["Width", "Height"], function(name) {
  domUtils["doc".concat(name)] = function(refWin) {
    var d = refWin.document;
    return Math.max(d.documentElement["scroll".concat(name)], d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
  };
  domUtils["viewport".concat(name)] = function(win) {
    var prop = "client".concat(name);
    var doc = win.document;
    var body = doc.body;
    var documentElement = doc.documentElement;
    var documentElementProp = documentElement[prop];
    return doc.compatMode === "CSS1Compat" && documentElementProp || body && body[prop] || documentElementProp;
  };
});
function getWH(elem, name, ex) {
  var extra = ex;
  if (isWindow(elem)) {
    return name === "width" ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
  } else if (elem.nodeType === 9) {
    return name === "width" ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
  }
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  var borderBoxValue = name === "width" ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
  var isBorderBox = isBorderBoxFn(elem);
  var cssBoxValue = 0;
  if (borderBoxValue === null || borderBoxValue === void 0 || borderBoxValue <= 0) {
    borderBoxValue = void 0;
    cssBoxValue = getComputedStyleX(elem, name);
    if (cssBoxValue === null || cssBoxValue === void 0 || Number(cssBoxValue) < 0) {
      cssBoxValue = elem.style[name] || 0;
    }
    cssBoxValue = parseFloat(cssBoxValue) || 0;
  }
  if (extra === void 0) {
    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
  }
  var borderBoxValueOrIsBorderBox = borderBoxValue !== void 0 || isBorderBox;
  var val = borderBoxValue || cssBoxValue;
  if (extra === CONTENT_INDEX) {
    if (borderBoxValueOrIsBorderBox) {
      return val - getPBMWidth(elem, ["border", "padding"], which);
    }
    return cssBoxValue;
  } else if (borderBoxValueOrIsBorderBox) {
    if (extra === BORDER_INDEX) {
      return val;
    }
    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ["border"], which) : getPBMWidth(elem, ["margin"], which));
  }
  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
}
var cssShow = {
  position: "absolute",
  visibility: "hidden",
  display: "block"
};
function getWHIgnoreDisplay() {
  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    args[_key2] = arguments[_key2];
  }
  var val;
  var elem = args[0];
  if (elem.offsetWidth !== 0) {
    val = getWH.apply(void 0, args);
  } else {
    swap(elem, cssShow, function() {
      val = getWH.apply(void 0, args);
    });
  }
  return val;
}
each(["width", "height"], function(name) {
  var first = name.charAt(0).toUpperCase() + name.slice(1);
  domUtils["outer".concat(first)] = function(el, includeMargin) {
    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
  };
  var which = name === "width" ? ["Left", "Right"] : ["Top", "Bottom"];
  domUtils[name] = function(elem, v) {
    var val = v;
    if (val !== void 0) {
      if (elem) {
        var isBorderBox = isBorderBoxFn(elem);
        if (isBorderBox) {
          val += getPBMWidth(elem, ["padding", "border"], which);
        }
        return css(elem, name, val);
      }
      return void 0;
    }
    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
  };
});
function mix(to, from) {
  for (var i in from) {
    if (from.hasOwnProperty(i)) {
      to[i] = from[i];
    }
  }
  return to;
}
var utils = {
  getWindow: function getWindow(node) {
    if (node && node.document && node.setTimeout) {
      return node;
    }
    var doc = node.ownerDocument || node;
    return doc.defaultView || doc.parentWindow;
  },
  getDocument,
  offset: function offset(el, value, option) {
    if (typeof value !== "undefined") {
      setOffset(el, value, option || {});
    } else {
      return getOffset(el);
    }
  },
  isWindow,
  each,
  css,
  clone: function clone(obj) {
    var i;
    var ret = {};
    for (i in obj) {
      if (obj.hasOwnProperty(i)) {
        ret[i] = obj[i];
      }
    }
    var overflow = obj.overflow;
    if (overflow) {
      for (i in obj) {
        if (obj.hasOwnProperty(i)) {
          ret.overflow[i] = obj.overflow[i];
        }
      }
    }
    return ret;
  },
  mix,
  getWindowScrollLeft: function getWindowScrollLeft(w) {
    return getScrollLeft(w);
  },
  getWindowScrollTop: function getWindowScrollTop(w) {
    return getScrollTop(w);
  },
  merge: function merge() {
    var ret = {};
    for (var i = 0; i < arguments.length; i++) {
      utils.mix(ret, i < 0 || arguments.length <= i ? void 0 : arguments[i]);
    }
    return ret;
  },
  viewportWidth: 0,
  viewportHeight: 0
};
mix(utils, domUtils);
var getParent2 = utils.getParent;
function getOffsetParent(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return null;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent;
  var positionStyle = utils.css(element, "position");
  var skipStatic = positionStyle === "fixed" || positionStyle === "absolute";
  if (!skipStatic) {
    return element.nodeName.toLowerCase() === "html" ? null : getParent2(element);
  }
  for (parent = getParent2(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent2(parent)) {
    positionStyle = utils.css(parent, "position");
    if (positionStyle !== "static") {
      return parent;
    }
  }
  return null;
}
var getParent$1 = utils.getParent;
function isAncestorFixed(element) {
  if (utils.isWindow(element) || element.nodeType === 9) {
    return false;
  }
  var doc = utils.getDocument(element);
  var body = doc.body;
  var parent = null;
  for (parent = getParent$1(element); parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
    var positionStyle = utils.css(parent, "position");
    if (positionStyle === "fixed") {
      return true;
    }
  }
  return false;
}
function getVisibleRectForElement(element, alwaysByViewport) {
  var visibleRect = {
    left: 0,
    right: Infinity,
    top: 0,
    bottom: Infinity
  };
  var el = getOffsetParent(element);
  var doc = utils.getDocument(element);
  var win = doc.defaultView || doc.parentWindow;
  var body = doc.body;
  var documentElement = doc.documentElement;
  while (el) {
    if ((navigator.userAgent.indexOf("MSIE") === -1 || el.clientWidth !== 0) && el !== body && el !== documentElement && utils.css(el, "overflow") !== "visible") {
      var pos = utils.offset(el);
      pos.left += el.clientLeft;
      pos.top += el.clientTop;
      visibleRect.top = Math.max(visibleRect.top, pos.top);
      visibleRect.right = Math.min(visibleRect.right, pos.left + el.clientWidth);
      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
      visibleRect.left = Math.max(visibleRect.left, pos.left);
    } else if (el === body || el === documentElement) {
      break;
    }
    el = getOffsetParent(el);
  }
  var originalPosition = null;
  if (!utils.isWindow(element) && element.nodeType !== 9) {
    originalPosition = element.style.position;
    var position = utils.css(element, "position");
    if (position === "absolute") {
      element.style.position = "fixed";
    }
  }
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  var documentWidth = documentElement.scrollWidth;
  var documentHeight = documentElement.scrollHeight;
  var bodyStyle = window.getComputedStyle(body);
  if (bodyStyle.overflowX === "hidden") {
    documentWidth = win.innerWidth;
  }
  if (bodyStyle.overflowY === "hidden") {
    documentHeight = win.innerHeight;
  }
  if (element.style) {
    element.style.position = originalPosition;
  }
  if (alwaysByViewport || isAncestorFixed(element)) {
    visibleRect.left = Math.max(visibleRect.left, scrollX);
    visibleRect.top = Math.max(visibleRect.top, scrollY);
    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
  } else {
    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
  }
  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
}
function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
  var pos = utils.clone(elFuturePos);
  var size = {
    width: elRegion.width,
    height: elRegion.height
  };
  if (overflow.adjustX && pos.left < visibleRect.left) {
    pos.left = visibleRect.left;
  }
  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
    size.width -= pos.left + size.width - visibleRect.right;
  }
  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
  }
  if (overflow.adjustY && pos.top < visibleRect.top) {
    pos.top = visibleRect.top;
  }
  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
    size.height -= pos.top + size.height - visibleRect.bottom;
  }
  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
  }
  return utils.mix(pos, size);
}
function getRegion(node) {
  var offset2;
  var w;
  var h;
  if (!utils.isWindow(node) && node.nodeType !== 9) {
    offset2 = utils.offset(node);
    w = utils.outerWidth(node);
    h = utils.outerHeight(node);
  } else {
    var win = utils.getWindow(node);
    offset2 = {
      left: utils.getWindowScrollLeft(win),
      top: utils.getWindowScrollTop(win)
    };
    w = utils.viewportWidth(win);
    h = utils.viewportHeight(win);
  }
  offset2.width = w;
  offset2.height = h;
  return offset2;
}
function getAlignOffset(region, align) {
  var V = align.charAt(0);
  var H = align.charAt(1);
  var w = region.width;
  var h = region.height;
  var x = region.left;
  var y = region.top;
  if (V === "c") {
    y += h / 2;
  } else if (V === "b") {
    y += h;
  }
  if (H === "c") {
    x += w / 2;
  } else if (H === "r") {
    x += w;
  }
  return {
    left: x,
    top: y
  };
}
function getElFuturePos(elRegion, refNodeRegion, points, offset2, targetOffset) {
  var p1 = getAlignOffset(refNodeRegion, points[1]);
  var p2 = getAlignOffset(elRegion, points[0]);
  var diff = [p2.left - p1.left, p2.top - p1.top];
  return {
    left: Math.round(elRegion.left - diff[0] + offset2[0] - targetOffset[0]),
    top: Math.round(elRegion.top - diff[1] + offset2[1] - targetOffset[1])
  };
}
function isFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
}
function isFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
}
function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
}
function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
}
function flip(points, reg, map) {
  var ret = [];
  utils.each(points, function(p) {
    ret.push(p.replace(reg, function(m) {
      return map[m];
    }));
  });
  return ret;
}
function flipOffset(offset2, index) {
  offset2[index] = -offset2[index];
  return offset2;
}
function convertOffset(str, offsetLen) {
  var n;
  if (/%$/.test(str)) {
    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
  } else {
    n = parseInt(str, 10);
  }
  return n || 0;
}
function normalizeOffset(offset2, el) {
  offset2[0] = convertOffset(offset2[0], el.width);
  offset2[1] = convertOffset(offset2[1], el.height);
}
function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
  var points = align.points;
  var offset2 = align.offset || [0, 0];
  var targetOffset = align.targetOffset || [0, 0];
  var overflow = align.overflow;
  var source = align.source || el;
  offset2 = [].concat(offset2);
  targetOffset = [].concat(targetOffset);
  overflow = overflow || {};
  var newOverflowCfg = {};
  var fail = 0;
  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport);
  var visibleRect = getVisibleRectForElement(source, alwaysByViewport);
  var elRegion = getRegion(source);
  normalizeOffset(offset2, elRegion);
  normalizeOffset(targetOffset, tgtRegion);
  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset);
  var newElRegion = utils.merge(elRegion, elFuturePos);
  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
    if (overflow.adjustX) {
      if (isFailX(elFuturePos, elRegion, visibleRect)) {
        var newPoints = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
        var newOffset = flipOffset(offset2, 0);
        var newTargetOffset = flipOffset(targetOffset, 0);
        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = newPoints;
          offset2 = newOffset;
          targetOffset = newTargetOffset;
        }
      }
    }
    if (overflow.adjustY) {
      if (isFailY(elFuturePos, elRegion, visibleRect)) {
        var _newPoints = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
        var _newOffset = flipOffset(offset2, 1);
        var _newTargetOffset = flipOffset(targetOffset, 1);
        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
          fail = 1;
          points = _newPoints;
          offset2 = _newOffset;
          targetOffset = _newTargetOffset;
        }
      }
    }
    if (fail) {
      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset2, targetOffset);
      utils.mix(newElRegion, elFuturePos);
    }
    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect);
    if (isStillFailX || isStillFailY) {
      var _newPoints2 = points;
      if (isStillFailX) {
        _newPoints2 = flip(points, /[lr]/gi, {
          l: "r",
          r: "l"
        });
      }
      if (isStillFailY) {
        _newPoints2 = flip(points, /[tb]/gi, {
          t: "b",
          b: "t"
        });
      }
      points = _newPoints2;
      offset2 = align.offset || [0, 0];
      targetOffset = align.targetOffset || [0, 0];
    }
    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY;
    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
    }
  }
  if (newElRegion.width !== elRegion.width) {
    utils.css(source, "width", utils.width(source) + newElRegion.width - elRegion.width);
  }
  if (newElRegion.height !== elRegion.height) {
    utils.css(source, "height", utils.height(source) + newElRegion.height - elRegion.height);
  }
  utils.offset(source, {
    left: newElRegion.left,
    top: newElRegion.top
  }, {
    useCssRight: align.useCssRight,
    useCssBottom: align.useCssBottom,
    useCssTransform: align.useCssTransform,
    ignoreShake: align.ignoreShake
  });
  return {
    points,
    offset: offset2,
    targetOffset,
    overflow: newOverflowCfg
  };
}
function isOutOfVisibleRect(target, alwaysByViewport) {
  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
  var targetRegion = getRegion(target);
  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
}
function alignElement(el, refNode, align) {
  var target = align.target || refNode;
  var refNodeRegion = getRegion(target);
  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
}
alignElement.__getOffsetParent = getOffsetParent;
alignElement.__getVisibleRectForElement = getVisibleRectForElement;
function alignPoint(el, tgtPoint, align) {
  var pageX;
  var pageY;
  var doc = utils.getDocument(el);
  var win = doc.defaultView || doc.parentWindow;
  var scrollX = utils.getWindowScrollLeft(win);
  var scrollY = utils.getWindowScrollTop(win);
  var viewportWidth = utils.viewportWidth(win);
  var viewportHeight = utils.viewportHeight(win);
  if ("pageX" in tgtPoint) {
    pageX = tgtPoint.pageX;
  } else {
    pageX = scrollX + tgtPoint.clientX;
  }
  if ("pageY" in tgtPoint) {
    pageY = tgtPoint.pageY;
  } else {
    pageY = scrollY + tgtPoint.clientY;
  }
  var tgtRegion = {
    left: pageX,
    top: pageY,
    width: 0,
    height: 0
  };
  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight;
  var points = [align.points[0], "cc"];
  return doAlign(el, tgtRegion, _objectSpread2(_objectSpread2({}, align), {}, {
    points
  }), pointInView);
}
export { alignElement as a, alignPoint as b };
