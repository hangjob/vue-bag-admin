import { i as isClient, a as isString, n as noop, t as tryOnUnmounted, c as createEventHook, g as get, b as tryOnMounted } from "./@vueuse-10713cf2.js";
import { Q as customRef, o as onMounted$1, e as onUpdated$1, w as watch, H as unref, g as getCurrentInstance, d as defineComponent, O as h, l as ref } from "./@vue-39dade2e.js";
const defaultWindow = isClient ? window : void 0;
isClient ? window.document : void 0;
isClient ? window.navigator : void 0;
function unrefElement(elRef) {
  var _a2, _b;
  const plain = unref(elRef);
  return (_b = (_a2 = plain) === null || _a2 === void 0 ? void 0 : _a2.$el) !== null && _b !== void 0 ? _b : plain;
}
function useEventListener(...args) {
  let target;
  let event;
  let listener;
  let options;
  if (isString(args[0])) {
    [event, listener, options] = args;
    target = defaultWindow;
  } else {
    [target, event, listener, options] = args;
  }
  if (!target)
    return noop;
  let cleanup = noop;
  const stopWatch = watch(() => unref(target), (el) => {
    cleanup();
    if (!el)
      return;
    el.addEventListener(event, listener, options);
    cleanup = () => {
      el.removeEventListener(event, listener, options);
      cleanup = noop;
    };
  }, { immediate: true, flush: "post" });
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnUnmounted(stop);
  return stop;
}
function templateRef(key, initialValue = null) {
  const instance = getCurrentInstance();
  let _trigger = () => {
  };
  const element = customRef((track, trigger) => {
    _trigger = trigger;
    return {
      get() {
        var _a2, _b;
        track();
        return (_b = (_a2 = instance === null || instance === void 0 ? void 0 : instance.proxy) === null || _a2 === void 0 ? void 0 : _a2.$refs[key]) !== null && _b !== void 0 ? _b : initialValue;
      },
      set() {
      }
    };
  });
  onMounted$1(_trigger);
  onUpdated$1(_trigger);
  return element;
}
var SwipeDirection;
(function(SwipeDirection2) {
  SwipeDirection2["UP"] = "UP";
  SwipeDirection2["RIGHT"] = "RIGHT";
  SwipeDirection2["DOWN"] = "DOWN";
  SwipeDirection2["LEFT"] = "LEFT";
  SwipeDirection2["NONE"] = "NONE";
})(SwipeDirection || (SwipeDirection = {}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
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
function findInArray(array, callback) {
  for (var i = 0, length_1 = array.length; i < length_1; i++) {
    if (callback.apply(callback, [array[i], i, array]))
      return array[i];
  }
}
function isFunction(func) {
  return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
}
function isNum(num) {
  return !isNaN(num);
}
function _int(a) {
  return parseInt(a, 10);
}
function deepEqual(x, y) {
  var ok = Object.keys, tx = _typeof(x), ty = _typeof(y);
  return x && y && tx === "object" && tx === ty ? ok(x).length === ok(y).length && ok(x).every(function(key) {
    return deepEqual(x[key], y[key]);
  }) : x === y;
}
var prefixes = ["Moz", "Webkit", "O", "ms"];
function getPrefix(prop) {
  var _a2, _b;
  if (prop === void 0) {
    prop = "transform";
  }
  if (typeof window === "undefined")
    return "";
  var style = (_b = (_a2 = window.document) === null || _a2 === void 0 ? void 0 : _a2.documentElement) === null || _b === void 0 ? void 0 : _b.style;
  if (!style)
    return "";
  if (prop in style)
    return "";
  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style)
      return prefixes[i];
  }
  return "";
}
function browserPrefixToKey(prop, prefix) {
  return prefix ? "" + prefix + kebabToTitleCase(prop) : prop;
}
function kebabToTitleCase(str) {
  var out = "";
  var shouldCapitalize = true;
  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === "-") {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}
var browserPrefix = getPrefix();
var matchesSelectorFunc = "";
function matchesSelector(el, selector) {
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = findInArray(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(method) {
      return isFunction(el[method]);
    });
  }
  if (!isFunction(el[matchesSelectorFunc]))
    return false;
  return el[matchesSelectorFunc](selector);
}
function matchesSelectorAndParentsTo(el, selector, baseNode) {
  var node = el;
  do {
    if (matchesSelector(node, selector))
      return true;
    if (node === baseNode)
      return false;
    node = node.parentNode;
  } while (node);
  return false;
}
function addEvent(el, event, handler, inputOptions) {
  if (!el)
    return;
  var options = __assign({
    capture: true
  }, inputOptions);
  if (el.addEventListener) {
    el.addEventListener(event, handler, options);
  } else {
    el["on" + event] = handler;
  }
}
function removeEvent(el, event, handler, inputOptions) {
  if (!el)
    return;
  var options = __assign({
    capture: true
  }, inputOptions);
  if (el.removeEventListener) {
    el.removeEventListener(event, handler, options);
  } else {
    el["on" + event] = null;
  }
}
function outerHeight(node) {
  var _a2;
  var height = node.clientHeight;
  var computedStyle = (_a2 = node.ownerDocument.defaultView) === null || _a2 === void 0 ? void 0 : _a2.getComputedStyle(node);
  height += _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.borderTopWidth);
  height += _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.borderBottomWidth);
  return height;
}
function outerWidth(node) {
  var _a2;
  var width = node.clientWidth;
  var computedStyle = (_a2 = node.ownerDocument.defaultView) === null || _a2 === void 0 ? void 0 : _a2.getComputedStyle(node);
  width += _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.borderLeftWidth);
  width += _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.borderRightWidth);
  return width;
}
function getTouch(e, identifier) {
  return e.targetTouches && findInArray(e.targetTouches, function(t) {
    return identifier === t.identifier;
  }) || e.changedTouches && findInArray(e.changedTouches, function(t) {
    return identifier === t.identifier;
  });
}
function getTouchIdentifier(e) {
  if (e.targetTouches && e.targetTouches[0])
    return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0])
    return e.changedTouches[0].identifier;
}
function innerHeight(node) {
  var _a2;
  var height = node.clientHeight;
  var computedStyle = (_a2 = node.ownerDocument.defaultView) === null || _a2 === void 0 ? void 0 : _a2.getComputedStyle(node);
  height -= _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.paddingTop);
  height -= _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.paddingBottom);
  return height;
}
function innerWidth(node) {
  var _a2;
  var width = node.clientWidth;
  var computedStyle = (_a2 = node.ownerDocument.defaultView) === null || _a2 === void 0 ? void 0 : _a2.getComputedStyle(node);
  width -= _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.paddingLeft);
  width -= _int(computedStyle === null || computedStyle === void 0 ? void 0 : computedStyle.paddingRight);
  return width;
}
function offsetXYFromParent(evt, offsetParent, scale) {
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? {
    left: 0,
    top: 0
  } : offsetParent.getBoundingClientRect();
  var x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
  var y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
  return {
    x,
    y
  };
}
function createCSSTransform(controlPos, positionOffset) {
  var _a2;
  var translation = getTranslation(controlPos, "px", positionOffset);
  return _a2 = {}, _a2[browserPrefixToKey("transform", browserPrefix)] = translation, _a2;
}
function createSVGTransform(controlPos, positionOffset) {
  return getTranslation(controlPos, "", positionOffset);
}
function getTranslation(_a2, unitSuffix, positionOffset) {
  var x = _a2.x, y = _a2.y;
  if (unitSuffix === void 0) {
    unitSuffix = "px";
  }
  var translation = "translate(" + Math.round(x) + unitSuffix + "," + Math.round(y) + unitSuffix + ")";
  if (positionOffset) {
    var defaultX = "" + (typeof positionOffset.x === "string" ? positionOffset.x : Math.round(positionOffset.x) + unitSuffix);
    var defaultY = "" + (typeof positionOffset.y === "string" ? positionOffset.y : Math.round(positionOffset.y) + unitSuffix);
    translation = "translate(" + defaultX + ", " + defaultY + ")" + translation;
  }
  return translation;
}
function addUserSelectStyles(doc) {
  if (!doc)
    return;
  var styleEl = doc.getElementById("revue-draggable-style-el");
  if (!styleEl) {
    var el = doc.createElement("style");
    el.type = "text/css";
    el.id = "revue-draggable-style-el";
    el.innerHTML = ".revue-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
    el.innerHTML += ".revue-draggable-transparent-selection *::selection {all: inherit;}\n";
    doc.getElementsByTagName("head")[0].appendChild(el);
  }
  if (doc.body)
    addClassName(doc.body, "revue-draggable-transparent-selection");
}
function removeUserSelectStyles(doc) {
  if (!doc)
    return;
  try {
    if (doc.body)
      removeClassName(doc.body, "revue-draggable-transparent-selection");
    var selection = (doc.defaultView || window).getSelection();
    if (selection && selection.type !== "Caret") {
      selection.removeAllRanges();
    }
  } catch (e) {
  }
}
function addClassName(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp("(?:^|\\s)" + className + "(?!\\S)"))) {
      el.className += " " + className;
    }
  }
}
function removeClassName(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp("(?:^|\\s)" + className + "(?!\\S)", "g"), "");
  }
}
function getBoundPosition(_a2) {
  var bounds = _a2.bounds, x = _a2.x, y = _a2.y, node = _a2.node;
  if (!bounds)
    return [x, y];
  bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
  if (typeof bounds === "string") {
    var ownerDocument = node.ownerDocument;
    var ownerWindow = ownerDocument.defaultView;
    var boundNode = bounds === "parent" ? node.parentNode : ownerDocument.querySelector(bounds);
    if (!(ownerWindow && boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
    bounds = {
      left: -(node.offsetLeft - boundNode.offsetLeft) + _int(boundNodeStyle.paddingLeft) + _int(nodeStyle.marginLeft),
      top: -(node.offsetTop - boundNode.offsetTop) + _int(boundNodeStyle.paddingTop) + _int(nodeStyle.marginTop),
      right: innerWidth(boundNode) - outerWidth(node) - node.offsetLeft + _int(boundNodeStyle.paddingRight) - _int(nodeStyle.marginRight),
      bottom: innerHeight(boundNode) - outerHeight(node) - node.offsetTop + _int(boundNodeStyle.paddingBottom) - _int(nodeStyle.marginBottom)
    };
  }
  if (isNum(bounds.right))
    x = Math.min(x, bounds.right);
  if (isNum(bounds.bottom))
    y = Math.min(y, bounds.bottom);
  if (isNum(bounds.left))
    x = Math.max(x, bounds.left);
  if (isNum(bounds.top))
    y = Math.max(y, bounds.top);
  return [x, y];
}
function snapToGrid(grid, pendingX, pendingY) {
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}
function canDragX(axis) {
  return axis === "both" || axis === "x";
}
function canDragY(axis) {
  return axis === "both" || axis === "y";
}
function getControlPosition(_a2) {
  var e = _a2.e, touch = _a2.touch, node = _a2.node, offsetContainer = _a2.offsetContainer, scale = _a2.scale;
  var touchObj = typeof touch === "number" ? getTouch(e, touch) : null;
  if (typeof touch === "number" && !touchObj)
    return null;
  var offsetParent = offsetContainer || node.offsetParent || node.ownerDocument.body;
  return offsetXYFromParent(touchObj || e, offsetParent, scale);
}
function createCoreData(_a2) {
  var node = _a2.node, x = _a2.x, y = _a2.y, lastX = _a2.lastX, lastY = _a2.lastY;
  var isStart = !isNaN(lastX);
  if (!isStart) {
    return {
      node,
      deltaX: 0,
      deltaY: 0,
      lastX: x,
      lastY: y,
      x,
      y
    };
  } else {
    return {
      node,
      deltaX: x - lastX,
      deltaY: y - lastY,
      lastX,
      lastY,
      x,
      y
    };
  }
}
function createDraggableData(_a2) {
  var scale = _a2.scale, x = _a2.x, y = _a2.y, data = _a2.data;
  return {
    node: data.node,
    x: x + data.deltaX / scale,
    y: y + data.deltaY / scale,
    deltaX: data.deltaX / scale,
    deltaY: data.deltaY / scale,
    lastX: x,
    lastY: y
  };
}
function cloneBounds(bounds) {
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}
function log() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  if (typeof process !== "undefined" && {}.DRAGGABLE_DEBUG)
    console.log.apply(console, args);
}
var eventsFor = {
  touch: {
    start: "touchstart",
    move: "touchmove",
    stop: "touchend"
  },
  mouse: {
    start: "mousedown",
    move: "mousemove",
    stop: "mouseup"
  }
};
var dragEventFor = eventsFor.mouse;
var useDraggableCore = function useDraggableCore2(target, options) {
  var initState = function initState2(initialState) {
    return Object.assign({
      enableUserSelectHack: true,
      allowAnyClick: true,
      disabled: false,
      offsetParent: void 0,
      grid: void 0,
      handle: "",
      cancel: "",
      dragged: false,
      update: true,
      scale: 1,
      dragging: false,
      touch: 0,
      start: function start() {
      },
      move: function move() {
      },
      stop: function stop() {
      },
      mouseDown: function mouseDown() {
      }
    }, initialState);
  };
  var _a2 = [0, 0], posX = _a2[0], posY = _a2[1];
  var node = ref();
  var state = ref(initState(options));
  watch(state, function(val, oldVal) {
    if (deepEqual(val, oldVal))
      return;
    init();
  });
  var onDragStartHook = createEventHook(), onDragHook = createEventHook(), onDragStopHook = createEventHook();
  var handleDragStart = function handleDragStart2(e) {
    var _a3, _b;
    if (!get(state).allowAnyClick && e.button !== 0)
      return false;
    if (!get(node) || !get(node).ownerDocument || !get(node).ownerDocument.body) {
      throw new Error("No ref element found on DragStart!");
    }
    var ownerDocument = get(node).ownerDocument;
    if (get(state).disabled || !(ownerDocument.defaultView && e.target instanceof ownerDocument.defaultView.Node) || get(state).handle && !matchesSelectorAndParentsTo(e.target, get(state).handle, get(node)) || get(state).cancel && matchesSelectorAndParentsTo(e.target, get(state).cancel, get(node))) {
      return;
    }
    var isTouch = e.type === "touchstart";
    if (isTouch)
      e.preventDefault();
    get(state).touch = getTouchIdentifier(e);
    var position = getControlPosition({
      e,
      touch: get(state).touch,
      node: get(node),
      offsetContainer: get(state).offsetParent,
      scale: get(state).scale
    });
    if (position == null)
      return;
    var x = position.x, y = position.y;
    var coreEvent = createCoreData({
      node: get(node),
      x,
      y,
      lastX: posX,
      lastY: posY
    });
    log("DraggableCore: handleDragStart: %j", coreEvent);
    var shouldUpdate = (_b = (_a3 = get(state)).start) === null || _b === void 0 ? void 0 : _b.call(_a3, e, coreEvent);
    onDragStartHook.trigger({
      event: e,
      data: coreEvent
    });
    if ((shouldUpdate || get(state).update) === false)
      return false;
    if (get(state).enableUserSelectHack)
      addUserSelectStyles(ownerDocument);
    get(state).dragging = true;
    posX = x;
    posY = y;
    addEvent(ownerDocument, dragEventFor.move, handleDrag);
    addEvent(ownerDocument, dragEventFor.stop, handleDragStop);
  };
  var handleDrag = function handleDrag2(e) {
    var _a3;
    var _b, _c;
    if (get(node)) {
      var position = getControlPosition({
        e,
        touch: get(state).touch,
        node: get(node),
        offsetContainer: get(state).offsetParent,
        scale: get(state).scale
      });
      if (position == null)
        return;
      var x = position.x, y = position.y;
      if (Array.isArray(get(state).grid)) {
        var deltaX = x - posX, deltaY = y - posY;
        _a3 = snapToGrid(get(state).grid, deltaX, deltaY), deltaX = _a3[0], deltaY = _a3[1];
        if (!deltaX && !deltaY)
          return;
        x = posX + deltaX;
        y = posY + deltaY;
      }
      var coreEvent = createCoreData({
        node: get(node),
        x,
        y,
        lastX: posX,
        lastY: posY
      });
      log("DraggableCore: handleDrag: %j", coreEvent);
      var shouldUpdate = (_c = (_b = get(state)).move) === null || _c === void 0 ? void 0 : _c.call(_b, e, coreEvent);
      onDragHook.trigger({
        event: e,
        data: coreEvent
      });
      if ((shouldUpdate || get(state).update) === false) {
        try {
          handleDragStop(new MouseEvent("mouseup"));
        } catch (err) {
          var event_1 = document.createEvent("MouseEvents");
          event_1.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          handleDragStop(event_1);
        }
        return;
      }
      posX = x;
      posY = y;
    }
  };
  var handleDragStop = function handleDragStop2(e) {
    var _a3, _b;
    if (!get(state).dragging)
      return;
    if (get(node)) {
      var position = getControlPosition({
        e,
        touch: get(state).touch,
        node: get(node),
        offsetContainer: get(state).offsetParent,
        scale: get(state).scale
      });
      if (position == null)
        return;
      var x = position.x, y = position.y;
      var coreEvent = createCoreData({
        node: get(node),
        x,
        y,
        lastX: posX,
        lastY: posY
      });
      var shouldUpdate = (_b = (_a3 = get(state)).stop) === null || _b === void 0 ? void 0 : _b.call(_a3, e, coreEvent);
      onDragStopHook.trigger({
        event: e,
        data: coreEvent
      });
      if ((shouldUpdate || get(state).update) === false)
        return false;
      if (get(state).enableUserSelectHack)
        removeUserSelectStyles(get(node).ownerDocument);
      log("DraggableCore: handleDragStop: %j", coreEvent);
      get(state).dragging = false;
      log("DraggableCore: Removing handlers");
      removeEvent(get(node).ownerDocument, dragEventFor.move, handleDrag);
      removeEvent(get(node).ownerDocument, dragEventFor.stop, handleDragStop2);
    }
  };
  var onMouseDown = function onMouseDown2(e) {
    var _a3, _b;
    dragEventFor = eventsFor.mouse;
    (_b = (_a3 = get(state)).mouseDown) === null || _b === void 0 ? void 0 : _b.call(_a3, e);
    if (e.which == 3)
      return;
    return handleDragStart(e);
  };
  var onMouseUp = function onMouseUp2(e) {
    dragEventFor = eventsFor.mouse;
    return handleDragStop(e);
  };
  var onTouchStart = function onTouchStart2(e) {
    dragEventFor = eventsFor.touch;
    return handleDragStart(e);
  };
  var onTouchEnd = function onTouchEnd2(e) {
    dragEventFor = eventsFor.touch;
    return handleDragStop(e);
  };
  var initialized = false;
  var init = function init2() {
    if (get(node) && !initialized) {
      initialized = true;
      useEventListener(get(node), eventsFor.touch.start, onTouchStart, {
        passive: false
      });
      useEventListener(get(node), eventsFor.touch.stop, onTouchEnd);
      useEventListener(get(node), eventsFor.mouse.start, onMouseDown);
      useEventListener(get(node), eventsFor.mouse.stop, onMouseUp);
    }
  };
  tryOnMounted(function() {
    node = unrefElement(target);
    if (!node) {
      console.error("You are trying to use <DraggableCore> without passing a valid node reference. Canceling initialization.");
      return;
    }
    init();
  });
  return {
    state,
    onDragStart: onDragStartHook.on,
    onDrag: onDragHook.on,
    onDragStop: onDragStopHook.on
  };
};
var useDraggable = function useDraggable2(target, options) {
  var initState = function initState2(initialState) {
    return Object.assign({
      allowAnyClick: false,
      cancel: "",
      handle: "",
      disabled: false,
      enableUserSelectHack: true,
      enableTransformFix: false,
      offsetParent: void 0,
      grid: void 0,
      start: function start() {
      },
      move: function move() {
      },
      stop: function stop() {
      },
      mouseDown: function mouseDown() {
      },
      position: void 0,
      positionOffset: void 0,
      scale: 1,
      axis: "both",
      defaultClassNameDragging: "revue-draggable-dragging",
      defaultClassNameDragged: "revue-draggable-dragged",
      defaultClassName: "revue-draggable",
      defaultPosition: {
        x: 0,
        y: 0
      },
      bounds: false,
      dragging: false,
      dragged: false,
      x: 0,
      y: 0,
      prevPropsPosition: {
        x: 0,
        y: 0
      },
      isElementSVG: false,
      update: true
    }, initialState);
  };
  var node = ref();
  var state = ref(initState(options));
  watch(state, function(val, oldVal) {
    if (deepEqual(val, oldVal))
      return;
    coreState.value = __assign(__assign({}, coreState.value), val);
    onUpdated3();
  });
  var onDragStartHook = createEventHook(), onDragHook = createEventHook(), onDragStopHook = createEventHook(), onTransformedHook = createEventHook();
  var onDragStart = function onDragStart2(e, data) {
    var _a3, _b;
    log("Draggable: onDragStart: %j", data);
    var uiData = createDraggableData({
      data,
      x: get(state).x,
      y: get(state).y,
      scale: get(state).scale
    });
    var shouldUpdate = (_b = (_a3 = get(state)).start) === null || _b === void 0 ? void 0 : _b.call(_a3, e, uiData);
    onDragStartHook.trigger({
      event: e,
      data: uiData
    });
    if ((shouldUpdate || get(state).update) === false)
      return false;
    get(state).dragging = true;
    get(state).dragged = true;
  };
  var onDrag = function onDrag2(e, data) {
    var _a3, _b;
    if (!get(state).dragging)
      return false;
    log("Draggable: onDrag: %j", data);
    var uiData = createDraggableData({
      data,
      x: get(state).x,
      y: get(state).y,
      scale: get(state).scale
    });
    var newState = {
      x: uiData.x,
      y: uiData.y
    };
    if (get(state).bounds) {
      var _c = getBoundPosition({
        bounds: get(state).bounds,
        x: newState.x,
        y: newState.y,
        node: data.node
      }), boundX = _c[0], boundY = _c[1];
      newState.x = boundX;
      newState.y = boundY;
      uiData.x = newState.x;
      uiData.y = newState.y;
      uiData.deltaX = newState.x - get(state).x;
      uiData.deltaY = newState.y - get(state).y;
    }
    var shouldUpdate = (_b = (_a3 = get(state)).move) === null || _b === void 0 ? void 0 : _b.call(_a3, e, uiData);
    onDragHook.trigger({
      event: e,
      data: uiData
    });
    if ((shouldUpdate || get(state).update) === false)
      return false;
    get(state).x = newState.x;
    get(state).y = newState.y;
    transform();
  };
  var onDragStop = function onDragStop2(e, data) {
    var _a3, _b;
    if (!get(state).dragging)
      return false;
    var uiData = createDraggableData({
      scale: get(state).scale,
      x: get(state).x,
      y: get(state).y,
      data
    });
    var shouldUpdate = (_b = (_a3 = get(state)).stop) === null || _b === void 0 ? void 0 : _b.call(_a3, e, uiData);
    onDragStopHook.trigger({
      event: e,
      data: uiData
    });
    if ((shouldUpdate || get(state).update) === false)
      return false;
    log("Draggable: onDragStop: %j", data);
    var pos = get(state).position;
    var controlled = Boolean(pos);
    if (controlled && pos) {
      get(state).x = pos.x;
      get(state).y = pos.y;
    }
    if (get(state).enableTransformFix)
      applyTransformFix();
    get(state).dragging = false;
  };
  var applyTransformFix = function applyTransformFix2() {
    var _a3, _b;
    var target2 = get(node);
    if (!target2)
      return;
    target2.style.transform = "";
    target2.style.left = "";
    target2.style.top = "";
    target2.style.position = "relative";
    var _c = transformOpts(), x = _c.x, y = _c.y;
    target2.style.left = Math.round(parseInt((_a3 = get(state).positionOffset) === null || _a3 === void 0 ? void 0 : _a3.x) || 0) + Math.round(Number(x)) + "px";
    target2.style.top = Math.round(parseInt((_b = get(state).positionOffset) === null || _b === void 0 ? void 0 : _b.y) || 0) + Math.round(Number(y)) + "px";
  };
  var removeTransformFix = function removeTransformFix2() {
    var target2 = get(node);
    if (!target2)
      return;
    target2.style.transform = "";
    target2.style.position = "";
    target2.style.left = "";
    target2.style.top = "";
  };
  var canDrag = function canDrag2() {
    return Boolean(get(state).position) || get(state).dragging;
  };
  var validPosition = function validPosition2() {
    return get(state).position || get(state).defaultPosition;
  };
  var transformOpts = function transformOpts2() {
    return {
      x: canDragX(get(state).axis) && canDrag() ? get(state).x : validPosition().x,
      y: canDragY(get(state).axis) && canDrag() ? get(state).y : validPosition().y
    };
  };
  var transform = function transform2() {
    if (!get(node) || get(state).update === false)
      return;
    if (get(state).enableTransformFix)
      removeTransformFix();
    var offset = get(state).positionOffset;
    var isSvg = get(state).isElementSVG;
    var styles = !isSvg && createCSSTransform(transformOpts(), offset) || false;
    var svgTransform = isSvg && createSVGTransform(transformOpts(), offset) || false;
    var classes = addClasses();
    if (typeof svgTransform === "string") {
      get(node).setAttribute("transform", svgTransform);
    }
    Object.keys(styles).forEach(function(style) {
      if (styles)
        get(node).style[style] = styles[style];
    });
    var transformedData = {
      el: get(node),
      style: styles,
      transform: svgTransform,
      classes
    };
    onTransformedHook.trigger(transformedData);
  };
  var addClasses = function addClasses2() {
    var _a3;
    var classes = (_a3 = {}, _a3[get(state).defaultClassName] = !get(state).disabled, _a3[get(state).defaultClassNameDragging] = get(state).dragging, _a3[get(state).defaultClassNameDragged] = get(state).dragged, _a3);
    Object.keys(classes).forEach(function(cl) {
      classes[cl] ? get(node).classList.toggle(cl, true) : get(node).classList.toggle(cl, false);
    });
    return classes;
  };
  var onUpdated3 = function onUpdated4() {
    var pos = get(state).position;
    if (pos && (!get(state).prevPropsPosition || pos.x !== get(state).prevPropsPosition.x || pos.y !== get(state).prevPropsPosition.y)) {
      log("Draggable: Updated %j", {
        position: get(state).prevPropsPosition,
        prevPropsPosition: get(state).prevPropsPosition
      });
      get(state).x = pos.x;
      get(state).y = pos.y;
      get(state).prevPropsPosition = __assign({}, pos);
    }
    if (get(state).enableTransformFix) {
      applyTransformFix();
    } else {
      transform();
    }
  };
  tryOnUnmounted(function() {
    get(state).dragging = false;
  });
  tryOnMounted(function() {
    var _a3, _b;
    node = unrefElement(target);
    if (!node) {
      console.error("You are trying to use <Draggable> without passing a valid target reference.");
      return;
    }
    var x = (get(state).position ? (_a3 = get(state).position) === null || _a3 === void 0 ? void 0 : _a3.x : get(state).defaultPosition.x) || parseInt(get(node).style.top, 10) || 0;
    var y = (get(state).position ? (_b = get(state).position) === null || _b === void 0 ? void 0 : _b.x : get(state).defaultPosition.x) || parseInt(get(node).style.left, 10) || 0;
    get(state).defaultPosition = {
      x,
      y
    };
    get(state).x = x;
    get(state).y = y;
    addClasses() && onUpdated3();
  });
  var _a2 = useDraggableCore(target, options), coreStart = _a2.onDragStart, coreDrag = _a2.onDrag, coreStop = _a2.onDragStop, coreState = _a2.state;
  coreDrag(function(_a3) {
    var event = _a3.event, data = _a3.data;
    onDrag(event, data);
  });
  coreStart(function(_a3) {
    var event = _a3.event, data = _a3.data;
    onDragStart(event, data);
  });
  coreStop(function(_a3) {
    var event = _a3.event, data = _a3.data;
    onDragStop(event, data);
  });
  return {
    state,
    onDragStart: onDragStartHook.on,
    onDrag: onDragHook.on,
    onDragStop: onDragStopHook.on,
    onTransformed: onTransformedHook.on
  };
};
var _a;
var onMounted = function onMounted2(el, binding) {
  var _a2;
  var instance = getCurrentInstance();
  var emit = (_a2 = instance === null || instance === void 0 ? void 0 : instance.emit) !== null && _a2 !== void 0 ? _a2 : function(arg, data) {
    var event = new CustomEvent(arg, {
      detail: data
    });
    el.dispatchEvent(event);
  };
  if (binding.arg === "core") {
    var _b = useDraggableCore(el, binding.value), onDrag = _b.onDrag, onDragStop = _b.onDragStop, onDragStart = _b.onDragStart, state = _b.state;
    onDrag(function(dragEvent) {
      emit("move", dragEvent);
    });
    onDragStart(function(dragStartEvent) {
      emit("start", dragStartEvent);
    });
    onDragStop(function(dragStopEvent) {
      emit("stop", dragStopEvent);
    });
    el["revue-draggable"] = state;
  } else {
    var _c = useDraggable(el, binding.value), onDrag = _c.onDrag, onDragStop = _c.onDragStop, onDragStart = _c.onDragStart, onTransformed = _c.onTransformed, state = _c.state;
    onDrag(function(dragEvent) {
      emit("move", dragEvent);
    });
    onDragStart(function(dragStartEvent) {
      emit("start", dragStartEvent);
    });
    onDragStop(function(dragStopEvent) {
      emit("stop", dragStopEvent);
    });
    onTransformed(function(transformEvent) {
      emit("transformed", transformEvent);
    });
    el["revue-draggable"] = state;
  }
};
var onUpdated = function onUpdated2(el, binding) {
  var element = el;
  if (typeof element["revue-draggable"] !== "undefined" && binding.value) {
    if (JSON.stringify(binding.value) !== JSON.stringify(binding.oldValue)) {
      var state = element["revue-draggable"];
      state.value = __assign(__assign({}, state.value), binding.value);
    }
  }
};
var DraggableDirective = (_a = {}, _a["mounted"] = onMounted, _a["beforeUpdate"] = onUpdated, _a);
var Draggable = defineComponent({
  name: "Draggable",
  props: {
    axis: {
      type: String,
      "default": "both"
    },
    bounds: {
      type: [Object, String, Boolean],
      "default": false
    },
    defaultClassName: {
      type: String,
      "default": "revue-draggable"
    },
    defaultClassNameDragging: {
      type: String,
      "default": "revue-draggable-dragging"
    },
    defaultClassNameDragged: {
      type: String,
      "default": "revue-draggable-dragged"
    },
    defaultPosition: {
      type: Object,
      "default": function _default() {
        return {
          x: 0,
          y: 0
        };
      }
    },
    scale: {
      type: Number,
      "default": 1
    },
    position: {
      type: Object,
      "default": void 0
    },
    positionOffset: {
      type: Object,
      "default": void 0
    },
    allowAnyClick: {
      type: Boolean,
      "default": true
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    enableUserSelectHack: {
      type: Boolean,
      "default": true
    },
    enableTransformFix: {
      type: [Boolean, Object],
      "default": false
    },
    cancel: {
      type: String,
      "default": void 0
    },
    offsetParent: {
      type: Object,
      "default": function _default2() {
      }
    },
    grid: {
      type: Array,
      "default": void 0
    },
    handle: {
      type: String,
      "default": void 0
    },
    update: {
      type: Boolean,
      "default": true
    },
    start: {
      type: Function,
      "default": function _default3() {
      }
    },
    move: {
      type: Function,
      "default": function _default4() {
      }
    },
    stop: {
      type: Function,
      "default": function _default5() {
      }
    },
    mouseDown: {
      type: Function,
      "default": function _default6() {
      }
    }
  },
  emits: ["move", "start", "stop", "transformed"],
  setup: function setup(props, _a2) {
    var slots = _a2.slots, emit = _a2.emit, attrs = _a2.attrs;
    var target = templateRef("target", null);
    var _b = useDraggable(target, props), onDrag = _b.onDrag, onDragStart = _b.onDragStart, onDragStop = _b.onDragStop, onTransformed = _b.onTransformed, state = _b.state;
    onDrag(function(dragEvent) {
      emit("move", dragEvent);
    });
    onDragStart(function(dragStartEvent) {
      emit("start", dragStartEvent);
    });
    onDragStop(function(dragStopEvent) {
      emit("stop", dragStopEvent);
    });
    onTransformed(function(transformEvent) {
      emit("transformed", transformEvent);
    });
    onUpdated$1(function() {
      state.value = __assign(__assign({}, state.value), props);
    });
    {
      return function() {
        if (slots["default"]) {
          return h(slots["default"]({
            state
          })[0], __assign({
            ref: "target"
          }, attrs), {});
        }
      };
    }
  }
});
var DraggableCore = defineComponent({
  name: "DraggableCore",
  props: {
    scale: {
      type: Number,
      "default": 1
    },
    allowAnyClick: {
      type: Boolean,
      "default": true
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    enableUserSelectHack: {
      type: Boolean,
      "default": true
    },
    cancel: {
      type: String,
      "default": void 0
    },
    offsetParent: {
      type: Object,
      "default": void 0
    },
    grid: {
      type: Array,
      "default": void 0
    },
    handle: {
      type: String,
      "default": void 0
    },
    onStart: {
      type: Function,
      "default": function _default7() {
      }
    },
    onMove: {
      type: Function,
      "default": function _default8() {
      }
    },
    onStop: {
      type: Function,
      "default": function _default9() {
      }
    },
    onMouseDown: {
      type: Function,
      "default": function _default10() {
      }
    }
  },
  emits: ["start", "move", "stop"],
  setup: function setup2(props, _a2) {
    var slots = _a2.slots, emit = _a2.emit, attrs = _a2.attrs;
    var target = templateRef("core-target", null);
    var _b = useDraggableCore(target, props), onDrag = _b.onDrag, onDragStart = _b.onDragStart, onDragStop = _b.onDragStop, state = _b.state;
    onDrag(function(dragEvent) {
      emit("move", dragEvent);
    });
    onDragStart(function(dragStartEvent) {
      emit("start", dragStartEvent);
    });
    onDragStop(function(dragStopEvent) {
      emit("stop", dragStopEvent);
    });
    onUpdated$1(function() {
      state.value = __assign(__assign({}, state.value), props);
    });
    {
      return function() {
        if (slots["default"]) {
          return h(slots["default"]()[0], __assign({
            ref: "core-target"
          }, attrs), {});
        }
      };
    }
  }
});
var plugin = function plugin2(app) {
  app.component("Draggable", Draggable);
  app.component("DraggableCore", DraggableCore);
  app.directive("draggable", DraggableDirective);
};
export { plugin as p };
