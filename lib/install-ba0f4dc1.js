import { getCurrentScope, onScopeDispose, unref, computed, ref, watch, watchEffect, getCurrentInstance, onMounted, openBlock, createElementBlock, defineComponent, createBlock, withCtx, createTextVNode, createVNode, Fragment, withKeys, withModifiers, createElementVNode, toDisplayString, h, readonly } from "vue";
import { defineStore, createPinia } from "pinia";
import { NButton, NDropdown, NSpace, useMessage, NInput, NFormItem, NCol, NRow, NForm, NIcon } from "naive-ui";
import * as vueRouter from "vue-router";
import { useRouter, createWebHashHistory } from "vue-router";
import axios from "axios";
import { Home, BookOutline, CubeOutline, PlanetOutline, SunnyOutline, SettingsOutline, LeafOutline, FileTrayOutline, CloseOutline, RefreshCircleOutline, ChevronBackOutline, ChevronForwardOutline, HomeOutline, FlashOutline, SearchOutline, NotificationsOutline, LanguageOutline, ScanOutline, HappyOutline, MoonOutline, CloseCircleOutline, SyncCircleOutline, CheckboxOutline, BagCheck, BatteryHalf, Bug, ChatbubblesOutline, CloudDownloadOutline, ColorPaletteOutline, CutOutline, FlowerSharp, GiftOutline, HeartDislikeCircleOutline, HourglassOutline, LayersOutline, LogoAlipay, LogoChrome, LogoIonic, LogoPinterest, MailUnread, MicOffCircle, NotificationsOffCircleSharp, QrCodeSharp, RainyOutline, RibbonOutline, RoseOutline, SnowSharp, WalletOutline, BagAdd, BagHandle, BicycleOutline, Disc, FastFood, FootballOutline, FootstepsOutline, DesktopOutline, TvOutline, ImageOutline, LaptopOutline, CreateOutline, AlertCircleOutline } from "@vicons/ionicons5";
import { UserSwitchOutlined, CloudSyncOutlined, DribbbleOutlined, UsergroupAddOutlined, BehanceOutlined, MenuOutlined, TeamOutlined, UserOutlined, StepBackwardFilled, StepForwardFilled, StopOutlined, SmileOutlined, MenuUnfoldOutlined, FireOutlined, GithubOutlined, IeOutlined, SketchOutlined, TaobaoCircleFilled, ZhihuOutlined, EuroOutlined, DashboardOutlined, BarcodeOutlined, AppleFilled, AmazonOutlined, AlertFilled, AimOutlined, AppleOutlined, CarFilled, CaretLeftOutlined, CaretRightFilled, CaretRightOutlined, CaretDownFilled, ClearOutlined, EnvironmentOutlined, GifOutlined, HomeTwotone, MehOutlined, PropertySafetyOutlined, ProfileOutlined, MediumOutlined, ReadOutlined, FrownOutlined, AlertOutlined, InstagramOutlined } from "@vicons/antd";
function mitt(n) {
  return { all: n = n || /* @__PURE__ */ new Map(), on: function(t, e) {
    var i = n.get(t);
    i ? i.push(e) : n.set(t, [e]);
  }, off: function(t, e) {
    var i = n.get(t);
    i && (e ? i.splice(i.indexOf(e) >>> 0, 1) : n.set(t, []));
  }, emit: function(t, e) {
    var i = n.get(t);
    i && i.slice().map(function(n2) {
      n2(e);
    }), (i = n.get("*")) && i.slice().map(function(n2) {
      n2(t, e);
    });
  } };
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$4(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$4;
var eq$3 = eq_1;
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$3(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var ListCache$3 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$3();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$d = Object.prototype;
var hasOwnProperty$a = objectProto$d.hasOwnProperty;
var nativeObjectToString$1 = objectProto$d.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$a.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$c = Object.prototype;
var nativeObjectToString = objectProto$c.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObject$9(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$9;
var baseGetTag$4 = _baseGetTag, isObject$8 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$2 = "[object Function]", genTag$1 = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$3(value) {
  if (!isObject$8(value)) {
    return false;
  }
  var tag = baseGetTag$4(value);
  return tag == funcTag$2 || tag == genTag$1 || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$3;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$2 = isFunction_1, isMasked = _isMasked, isObject$7 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$b = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$9 = objectProto$b.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$9).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$7(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$2(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object, key) {
  return object == null ? void 0 : object[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative, root$5 = _root;
var Map$4 = getNative$6(root$5, "Map");
var _Map = Map$4;
var getNative$5 = _getNative;
var nativeCreate$4 = getNative$5(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$a = Object.prototype;
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$8.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$7.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
var Hash = _Hash, ListCache$2 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$2)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$2(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype["delete"] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;
var _MapCache = MapCache$2;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE$1 = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE$1 - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var getNative$4 = _getNative;
var defineProperty$2 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty$1 = defineProperty$2;
var defineProperty$1 = _defineProperty$1;
function baseAssignValue$3(object, key, value) {
  if (key == "__proto__" && defineProperty$1) {
    defineProperty$1(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$3;
var baseAssignValue$2 = _baseAssignValue, eq$2 = eq_1;
function assignMergeValue$2(object, key, value) {
  if (value !== void 0 && !eq$2(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue$2(object, key, value);
  }
}
var _assignMergeValue = assignMergeValue$2;
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
var _cloneBuffer = { exports: {} };
_cloneBuffer.exports;
(function(module, exports) {
  var root2 = _root;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
  function cloneBuffer2(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
  }
  module.exports = cloneBuffer2;
})(_cloneBuffer, _cloneBuffer.exports);
var _cloneBufferExports = _cloneBuffer.exports;
var root$4 = _root;
var Uint8Array$1 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$1;
var Uint8Array = _Uint8Array;
function cloneArrayBuffer$3(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
var _cloneArrayBuffer = cloneArrayBuffer$3;
var cloneArrayBuffer$2 = _cloneArrayBuffer;
function cloneTypedArray$2(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$2(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var _cloneTypedArray = cloneTypedArray$2;
function copyArray$2(source, array) {
  var index2 = -1, length = source.length;
  array || (array = Array(length));
  while (++index2 < length) {
    array[index2] = source[index2];
  }
  return array;
}
var _copyArray = copyArray$2;
var isObject$6 = isObject_1;
var objectCreate = Object.create;
var baseCreate$1 = function() {
  function object() {
  }
  return function(proto) {
    if (!isObject$6(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
}();
var _baseCreate = baseCreate$1;
function overArg$2(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$2;
var overArg$1 = _overArg;
var getPrototype$3 = overArg$1(Object.getPrototypeOf, Object);
var _getPrototype = getPrototype$3;
var objectProto$8 = Object.prototype;
function isPrototype$3(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$8;
  return value === proto;
}
var _isPrototype = isPrototype$3;
var baseCreate = _baseCreate, getPrototype$2 = _getPrototype, isPrototype$2 = _isPrototype;
function initCloneObject$2(object) {
  return typeof object.constructor == "function" && !isPrototype$2(object) ? baseCreate(getPrototype$2(object)) : {};
}
var _initCloneObject = initCloneObject$2;
function isObjectLike$7(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$7;
var baseGetTag$3 = _baseGetTag, isObjectLike$6 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$6(value) && baseGetTag$3(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$5 = isObjectLike_1;
var objectProto$7 = Object.prototype;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$7.propertyIsEnumerable;
var isArguments$3 = baseIsArguments(function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$5(value) && hasOwnProperty$6.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$3;
var isArray$5 = Array.isArray;
var isArray_1 = isArray$5;
const isArray$6 = /* @__PURE__ */ getDefaultExportFromCjs(isArray_1);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
function isLength$2(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}
var isLength_1 = isLength$2;
var isFunction$1 = isFunction_1, isLength$1 = isLength_1;
function isArrayLike$4(value) {
  return value != null && isLength$1(value.length) && !isFunction$1(value);
}
var isArrayLike_1 = isArrayLike$4;
var isArrayLike$3 = isArrayLike_1, isObjectLike$4 = isObjectLike_1;
function isArrayLikeObject$2(value) {
  return isObjectLike$4(value) && isArrayLike$3(value);
}
var isArrayLikeObject_1 = isArrayLikeObject$2;
var isBuffer$3 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$3.exports;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$3, isBuffer$3.exports);
var isBufferExports = isBuffer$3.exports;
var baseGetTag$2 = _baseGetTag, getPrototype$1 = _getPrototype, isObjectLike$3 = isObjectLike_1;
var objectTag$3 = "[object Object]";
var funcProto = Function.prototype, objectProto$6 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject$1(value) {
  if (!isObjectLike$3(value) || baseGetTag$2(value) != objectTag$3) {
    return false;
  }
  var proto = getPrototype$1(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
var isPlainObject_1 = isPlainObject$1;
var baseGetTag$1 = _baseGetTag, isLength = isLength_1, isObjectLike$2 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$2 = "[object Boolean]", dateTag$2 = "[object Date]", errorTag$1 = "[object Error]", funcTag$1 = "[object Function]", mapTag$4 = "[object Map]", numberTag$2 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$2 = "[object RegExp]", setTag$4 = "[object Set]", stringTag$2 = "[object String]", weakMapTag$2 = "[object WeakMap]";
var arrayBufferTag$2 = "[object ArrayBuffer]", dataViewTag$3 = "[object DataView]", float32Tag$2 = "[object Float32Array]", float64Tag$2 = "[object Float64Array]", int8Tag$2 = "[object Int8Array]", int16Tag$2 = "[object Int16Array]", int32Tag$2 = "[object Int32Array]", uint8Tag$2 = "[object Uint8Array]", uint8ClampedTag$2 = "[object Uint8ClampedArray]", uint16Tag$2 = "[object Uint16Array]", uint32Tag$2 = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag$2] = typedArrayTags[float64Tag$2] = typedArrayTags[int8Tag$2] = typedArrayTags[int16Tag$2] = typedArrayTags[int32Tag$2] = typedArrayTags[uint8Tag$2] = typedArrayTags[uint8ClampedTag$2] = typedArrayTags[uint16Tag$2] = typedArrayTags[uint32Tag$2] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$2] = typedArrayTags[boolTag$2] = typedArrayTags[dataViewTag$3] = typedArrayTags[dateTag$2] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$4] = typedArrayTags[numberTag$2] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$2] = typedArrayTags[setTag$4] = typedArrayTags[stringTag$2] = typedArrayTags[weakMapTag$2] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$2(value) && isLength(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$3(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$3;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary$2 = _baseUnary, nodeUtil$2 = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary$2(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
function safeGet$2(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
var _safeGet = safeGet$2;
var baseAssignValue$1 = _baseAssignValue, eq$1 = eq_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
function assignValue$2(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$4.call(object, key) && eq$1(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue$1(object, key, value);
  }
}
var _assignValue = assignValue$2;
var assignValue$1 = _assignValue, baseAssignValue = _baseAssignValue;
function copyObject$5(source, props, object, customizer2) {
  var isNew = !object;
  object || (object = {});
  var index2 = -1, length = props.length;
  while (++index2 < length) {
    var key = props[index2];
    var newValue = customizer2 ? customizer2(object[key], source[key], key, object, source) : void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue$1(object, key, newValue);
    }
  }
  return object;
}
var _copyObject = copyObject$5;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var baseTimes = _baseTimes, isArguments$2 = isArguments_1, isArray$4 = isArray_1, isBuffer$2 = isBufferExports, isIndex$1 = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$4 = Object.prototype;
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;
function arrayLikeKeys$2(value, inherited) {
  var isArr = isArray$4(value), isArg = !isArr && isArguments$2(value), isBuff = !isArr && !isArg && isBuffer$2(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex$1(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$2;
function nativeKeysIn$1(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var _nativeKeysIn = nativeKeysIn$1;
var isObject$5 = isObject_1, isPrototype$1 = _isPrototype, nativeKeysIn = _nativeKeysIn;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeysIn$1(object) {
  if (!isObject$5(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype$1(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$2.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
var _baseKeysIn = baseKeysIn$1;
var arrayLikeKeys$1 = _arrayLikeKeys, baseKeysIn = _baseKeysIn, isArrayLike$2 = isArrayLike_1;
function keysIn$5(object) {
  return isArrayLike$2(object) ? arrayLikeKeys$1(object, true) : baseKeysIn(object);
}
var keysIn_1 = keysIn$5;
var copyObject$4 = _copyObject, keysIn$4 = keysIn_1;
function toPlainObject$1(value) {
  return copyObject$4(value, keysIn$4(value));
}
var toPlainObject_1 = toPlainObject$1;
var assignMergeValue$1 = _assignMergeValue, cloneBuffer$1 = _cloneBufferExports, cloneTypedArray$1 = _cloneTypedArray, copyArray$1 = _copyArray, initCloneObject$1 = _initCloneObject, isArguments$1 = isArguments_1, isArray$3 = isArray_1, isArrayLikeObject$1 = isArrayLikeObject_1, isBuffer$1 = isBufferExports, isFunction = isFunction_1, isObject$4 = isObject_1, isPlainObject = isPlainObject_1, isTypedArray = isTypedArray_1, safeGet$1 = _safeGet, toPlainObject = toPlainObject_1;
function baseMergeDeep$1(object, source, key, srcIndex, mergeFunc, customizer2, stack) {
  var objValue = safeGet$1(object, key), srcValue = safeGet$1(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue$1(object, key, stacked);
    return;
  }
  var newValue = customizer2 ? customizer2(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray$3(srcValue), isBuff = !isArr && isBuffer$1(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray$3(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject$1(objValue)) {
        newValue = copyArray$1(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer$1(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray$1(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments$1(srcValue)) {
      newValue = objValue;
      if (isArguments$1(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject$4(objValue) || isFunction(objValue)) {
        newValue = initCloneObject$1(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer2, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue$1(object, key, newValue);
}
var _baseMergeDeep = baseMergeDeep$1;
var Stack$1 = _Stack, assignMergeValue = _assignMergeValue, baseFor = _baseFor, baseMergeDeep = _baseMergeDeep, isObject$3 = isObject_1, keysIn$3 = keysIn_1, safeGet = _safeGet;
function baseMerge$2(object, source, srcIndex, customizer2, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack$1());
    if (isObject$3(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge$2, customizer2, stack);
    } else {
      var newValue = customizer2 ? customizer2(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn$3);
}
var _baseMerge = baseMerge$2;
function identity$2(value) {
  return value;
}
var identity_1 = identity$2;
function apply$1(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
var _apply = apply$1;
var apply = _apply;
var nativeMax = Math.max;
function overRest$1(func, start, transform) {
  start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
  return function() {
    var args = arguments, index2 = -1, length = nativeMax(args.length - start, 0), array = Array(length);
    while (++index2 < length) {
      array[index2] = args[start + index2];
    }
    index2 = -1;
    var otherArgs = Array(start + 1);
    while (++index2 < start) {
      otherArgs[index2] = args[index2];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}
var _overRest = overRest$1;
function constant$1(value) {
  return function() {
    return value;
  };
}
var constant_1 = constant$1;
var constant = constant_1, defineProperty = _defineProperty$1, identity$1 = identity_1;
var baseSetToString$1 = !defineProperty ? identity$1 : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var _baseSetToString = baseSetToString$1;
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut$1(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1;
var baseSetToString = _baseSetToString, shortOut = _shortOut;
var setToString$1 = shortOut(baseSetToString);
var _setToString = setToString$1;
var identity = identity_1, overRest = _overRest, setToString = _setToString;
function baseRest$2(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
var _baseRest = baseRest$2;
var eq = eq_1, isArrayLike$1 = isArrayLike_1, isIndex = _isIndex, isObject$2 = isObject_1;
function isIterateeCall$1(value, index2, object) {
  if (!isObject$2(object)) {
    return false;
  }
  var type = typeof index2;
  if (type == "number" ? isArrayLike$1(object) && isIndex(index2, object.length) : type == "string" && index2 in object) {
    return eq(object[index2], value);
  }
  return false;
}
var _isIterateeCall = isIterateeCall$1;
var baseRest$1 = _baseRest, isIterateeCall = _isIterateeCall;
function createAssigner$2(assigner) {
  return baseRest$1(function(object, sources) {
    var index2 = -1, length = sources.length, customizer2 = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer2 = assigner.length > 3 && typeof customizer2 == "function" ? (length--, customizer2) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer2 = length < 3 ? void 0 : customizer2;
      length = 1;
    }
    object = Object(object);
    while (++index2 < length) {
      var source = sources[index2];
      if (source) {
        assigner(object, source, index2, customizer2);
      }
    }
    return object;
  });
}
var _createAssigner = createAssigner$2;
var baseMerge$1 = _baseMerge, createAssigner$1 = _createAssigner;
var mergeWith = createAssigner$1(function(object, source, srcIndex, customizer2) {
  baseMerge$1(object, source, srcIndex, customizer2);
});
var mergeWith_1 = mergeWith;
const cloneDeep$2 = /* @__PURE__ */ getDefaultExportFromCjs(mergeWith_1);
const style = "";
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
const isClient = typeof window !== "undefined";
const noop$2 = () => {
};
function createFilterWrapper(filter, fn) {
  function wrapper(...args) {
    return new Promise((resolve, reject) => {
      Promise.resolve(filter(() => fn.apply(this, args), { fn, thisArg: this, args })).then(resolve).catch(reject);
    });
  }
  return wrapper;
}
function throttleFilter(ms, trailing = true, leading = true, rejectOnCancel = false) {
  let lastExec = 0;
  let timer;
  let isLeading = true;
  let lastRejector = noop$2;
  let lastValue;
  const clear = () => {
    if (timer) {
      clearTimeout(timer);
      timer = void 0;
      lastRejector();
      lastRejector = noop$2;
    }
  };
  const filter = (_invoke) => {
    const duration = toValue(ms);
    const elapsed = Date.now() - lastExec;
    const invoke = () => {
      return lastValue = _invoke();
    };
    clear();
    if (duration <= 0) {
      lastExec = Date.now();
      return invoke();
    }
    if (elapsed > duration && (leading || !isLeading)) {
      lastExec = Date.now();
      invoke();
    } else if (trailing) {
      lastValue = new Promise((resolve, reject) => {
        lastRejector = rejectOnCancel ? reject : resolve;
        timer = setTimeout(() => {
          lastExec = Date.now();
          isLeading = true;
          resolve(invoke());
          clear();
        }, Math.max(0, duration - elapsed));
      });
    }
    if (!leading && !timer)
      timer = setTimeout(() => isLeading = true, duration);
    isLeading = false;
    return lastValue;
  };
  return filter;
}
function increaseWithUnit(target, delta) {
  var _a;
  if (typeof target === "number")
    return target + delta;
  const value = ((_a = target.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : _a[0]) || "";
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;
  if (Number.isNaN(result))
    return target;
  return result + unit;
}
function useThrottleFn(fn, ms = 200, trailing = false, leading = true, rejectOnCancel = false) {
  return createFilterWrapper(
    throttleFilter(ms, trailing, leading, rejectOnCancel),
    fn
  );
}
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
const defaultWindow = isClient ? window : void 0;
const defaultDocument = isClient ? window.document : void 0;
function useEventListener(...args) {
  let target;
  let events;
  let listeners;
  let options2;
  if (typeof args[0] === "string" || Array.isArray(args[0])) {
    [events, listeners, options2] = args;
    target = defaultWindow;
  } else {
    [target, events, listeners, options2] = args;
  }
  if (!target)
    return noop$2;
  if (!Array.isArray(events))
    events = [events];
  if (!Array.isArray(listeners))
    listeners = [listeners];
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el, event, listener, options22) => {
    el.addEventListener(event, listener, options22);
    return () => el.removeEventListener(event, listener, options22);
  };
  const stopWatch = watch(
    () => [unrefElement(target), toValue(options2)],
    ([el, options22]) => {
      cleanup();
      if (!el)
        return;
      cleanups.push(
        ...events.flatMap((event) => {
          return listeners.map((listener) => register(el, event, listener, options22));
        })
      );
    },
    { immediate: true, flush: "post" }
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  tryOnScopeDispose(stop);
  return stop;
}
function useMounted() {
  const isMounted = ref(false);
  if (getCurrentInstance()) {
    onMounted(() => {
      isMounted.value = true;
    });
  }
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useMediaQuery(query, options2 = {}) {
  const { window: window2 = defaultWindow } = options2;
  const isSupported = useSupported(() => window2 && "matchMedia" in window2 && typeof window2.matchMedia === "function");
  let mediaQuery;
  const matches = ref(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  const cleanup = () => {
    if (!mediaQuery)
      return;
    if ("removeEventListener" in mediaQuery)
      mediaQuery.removeEventListener("change", handler);
    else
      mediaQuery.removeListener(handler);
  };
  const stopWatch = watchEffect(() => {
    if (!isSupported.value)
      return;
    cleanup();
    mediaQuery = window2.matchMedia(toValue(query));
    if ("addEventListener" in mediaQuery)
      mediaQuery.addEventListener("change", handler);
    else
      mediaQuery.addListener(handler);
    matches.value = mediaQuery.matches;
  });
  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = void 0;
  });
  return matches;
}
const breakpointsTailwind = {
  "sm": 640,
  "md": 768,
  "lg": 1024,
  "xl": 1280,
  "2xl": 1536
};
function useBreakpoints(breakpoints, options2 = {}) {
  function getValue2(k, delta) {
    let v = breakpoints[k];
    if (delta != null)
      v = increaseWithUnit(v, delta);
    if (typeof v === "number")
      v = `${v}px`;
    return v;
  }
  const { window: window2 = defaultWindow } = options2;
  function match(query) {
    if (!window2)
      return false;
    return window2.matchMedia(query).matches;
  }
  const greaterOrEqual = (k) => {
    return useMediaQuery(`(min-width: ${getValue2(k)})`, options2);
  };
  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, k) => {
    Object.defineProperty(shortcuts, k, {
      get: () => greaterOrEqual(k),
      enumerable: true,
      configurable: true
    });
    return shortcuts;
  }, {});
  return Object.assign(shortcutMethods, {
    greater(k) {
      return useMediaQuery(`(min-width: ${getValue2(k, 0.1)})`, options2);
    },
    greaterOrEqual,
    smaller(k) {
      return useMediaQuery(`(max-width: ${getValue2(k, -0.1)})`, options2);
    },
    smallerOrEqual(k) {
      return useMediaQuery(`(max-width: ${getValue2(k)})`, options2);
    },
    between(a, b) {
      return useMediaQuery(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`, options2);
    },
    isGreater(k) {
      return match(`(min-width: ${getValue2(k, 0.1)})`);
    },
    isGreaterOrEqual(k) {
      return match(`(min-width: ${getValue2(k)})`);
    },
    isSmaller(k) {
      return match(`(max-width: ${getValue2(k, -0.1)})`);
    },
    isSmallerOrEqual(k) {
      return match(`(max-width: ${getValue2(k)})`);
    },
    isInBetween(a, b) {
      return match(`(min-width: ${getValue2(a)}) and (max-width: ${getValue2(b, -0.1)})`);
    },
    current() {
      const points = Object.keys(breakpoints).map((i) => [i, greaterOrEqual(i)]);
      return computed(() => points.filter(([, v]) => v.value).map(([k]) => k));
    }
  });
}
const eventHandlers = [
  "fullscreenchange",
  "webkitfullscreenchange",
  "webkitendfullscreen",
  "mozfullscreenchange",
  "MSFullscreenChange"
];
function useFullscreen(target, options2 = {}) {
  const {
    document: document2 = defaultDocument,
    autoExit = false
  } = options2;
  const targetRef = computed(() => {
    var _a;
    return (_a = unrefElement(target)) != null ? _a : document2 == null ? void 0 : document2.querySelector("html");
  });
  const isFullscreen = ref(false);
  const requestMethod = computed(() => {
    return [
      "requestFullscreen",
      "webkitRequestFullscreen",
      "webkitEnterFullscreen",
      "webkitEnterFullScreen",
      "webkitRequestFullScreen",
      "mozRequestFullScreen",
      "msRequestFullscreen"
    ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
  });
  const exitMethod = computed(() => {
    return [
      "exitFullscreen",
      "webkitExitFullscreen",
      "webkitExitFullScreen",
      "webkitCancelFullScreen",
      "mozCancelFullScreen",
      "msExitFullscreen"
    ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
  });
  const fullscreenEnabled = computed(() => {
    return [
      "fullScreen",
      "webkitIsFullScreen",
      "webkitDisplayingFullscreen",
      "mozFullScreen",
      "msFullscreenElement"
    ].find((m) => document2 && m in document2 || targetRef.value && m in targetRef.value);
  });
  const fullscreenElementMethod = [
    "fullscreenElement",
    "webkitFullscreenElement",
    "mozFullScreenElement",
    "msFullscreenElement"
  ].find((m) => document2 && m in document2);
  const isSupported = useSupported(
    () => targetRef.value && document2 && requestMethod.value !== void 0 && exitMethod.value !== void 0 && fullscreenEnabled.value !== void 0
  );
  const isCurrentElementFullScreen = () => {
    if (fullscreenElementMethod)
      return (document2 == null ? void 0 : document2[fullscreenElementMethod]) === targetRef.value;
    return false;
  };
  const isElementFullScreen = () => {
    if (fullscreenEnabled.value) {
      if (document2 && document2[fullscreenEnabled.value] != null) {
        return document2[fullscreenEnabled.value];
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[fullscreenEnabled.value]) != null) {
          return Boolean(target2[fullscreenEnabled.value]);
        }
      }
    }
    return false;
  };
  async function exit() {
    if (!isSupported.value || !isFullscreen.value)
      return;
    if (exitMethod.value) {
      if ((document2 == null ? void 0 : document2[exitMethod.value]) != null) {
        await document2[exitMethod.value]();
      } else {
        const target2 = targetRef.value;
        if ((target2 == null ? void 0 : target2[exitMethod.value]) != null)
          await target2[exitMethod.value]();
      }
    }
    isFullscreen.value = false;
  }
  async function enter() {
    if (!isSupported.value || isFullscreen.value)
      return;
    if (isElementFullScreen())
      await exit();
    const target2 = targetRef.value;
    if (requestMethod.value && (target2 == null ? void 0 : target2[requestMethod.value]) != null) {
      await target2[requestMethod.value]();
      isFullscreen.value = true;
    }
  }
  async function toggle() {
    await (isFullscreen.value ? exit() : enter());
  }
  const handlerCallback = () => {
    const isElementFullScreenValue = isElementFullScreen();
    if (!isElementFullScreenValue || isElementFullScreenValue && isCurrentElementFullScreen())
      isFullscreen.value = isElementFullScreenValue;
  };
  useEventListener(document2, eventHandlers, handlerCallback, false);
  useEventListener(() => unrefElement(targetRef), eventHandlers, handlerCallback, false);
  if (autoExit)
    tryOnScopeDispose(exit);
  return {
    isSupported,
    isFullscreen,
    enter,
    exit,
    toggle
  };
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "error");
}
const error = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: error
}, Symbol.toStringTag, { value: "Module" }));
const options = [
  {
    label: "杰·盖茨比",
    key: "jay gatsby"
  },
  {
    label: "黛西·布坎南",
    key: "daisy buchanan"
  },
  {
    type: "divider",
    key: "d1"
  },
  {
    label: "尼克·卡拉威",
    key: "nick carraway"
  },
  {
    label: "其他",
    key: "others1",
    children: [
      {
        label: "乔丹·贝克",
        key: "jordan baker"
      },
      {
        label: "汤姆·布坎南",
        key: "tom buchanan"
      },
      {
        label: "其他",
        key: "others2",
        children: [
          {
            label: "鸡肉",
            key: "chicken"
          },
          {
            label: "牛肉",
            key: "beef"
          }
        ]
      }
    ]
  }
];
const _sfc_main$2 = defineComponent({
  setup() {
    const router2 = useRouter();
    return {
      options,
      handleSelect(key) {
        router2.push({ path: "/about" });
      }
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_button = NButton;
  const _component_n_dropdown = NDropdown;
  const _component_n_space = NSpace;
  return openBlock(), createBlock(_component_n_space, null, {
    default: withCtx(() => [
      createTextVNode(" 22 "),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "small",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("小号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"]),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "medium",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("中号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"]),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "large",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("大号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"]),
      createVNode(_component_n_dropdown, {
        placement: "bottom-start",
        trigger: "click",
        size: "huge",
        options: _ctx.options,
        onSelect: _ctx.handleSelect
      }, {
        default: withCtx(() => [
          createVNode(_component_n_button, null, {
            default: withCtx(() => [
              createTextVNode("巨大号")
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["options", "onSelect"])
    ]),
    _: 1
  });
}
const index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$1
}, Symbol.toStringTag, { value: "Module" }));
const denyList = /* @__PURE__ */ new Set([
  "ENOTFOUND",
  "ENETUNREACH",
  // SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
  "UNABLE_TO_GET_ISSUER_CERT",
  "UNABLE_TO_GET_CRL",
  "UNABLE_TO_DECRYPT_CERT_SIGNATURE",
  "UNABLE_TO_DECRYPT_CRL_SIGNATURE",
  "UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY",
  "CERT_SIGNATURE_FAILURE",
  "CRL_SIGNATURE_FAILURE",
  "CERT_NOT_YET_VALID",
  "CERT_HAS_EXPIRED",
  "CRL_NOT_YET_VALID",
  "CRL_HAS_EXPIRED",
  "ERROR_IN_CERT_NOT_BEFORE_FIELD",
  "ERROR_IN_CERT_NOT_AFTER_FIELD",
  "ERROR_IN_CRL_LAST_UPDATE_FIELD",
  "ERROR_IN_CRL_NEXT_UPDATE_FIELD",
  "OUT_OF_MEM",
  "DEPTH_ZERO_SELF_SIGNED_CERT",
  "SELF_SIGNED_CERT_IN_CHAIN",
  "UNABLE_TO_GET_ISSUER_CERT_LOCALLY",
  "UNABLE_TO_VERIFY_LEAF_SIGNATURE",
  "CERT_CHAIN_TOO_LONG",
  "CERT_REVOKED",
  "INVALID_CA",
  "PATH_LENGTH_EXCEEDED",
  "INVALID_PURPOSE",
  "CERT_UNTRUSTED",
  "CERT_REJECTED",
  "HOSTNAME_MISMATCH"
]);
var isRetryAllowed = (error2) => !denyList.has(error2 && error2.code);
const isRetryAllowed$1 = /* @__PURE__ */ getDefaultExportFromCjs(isRetryAllowed);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error2) {
    reject(error2);
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
function ownKeys(object, enumerableOnly) {
  var keys2 = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys2.push.apply(keys2, symbols);
  }
  return keys2;
}
function _objectSpread(target) {
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
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
var namespace$1 = "axios-retry";
function isNetworkError(error2) {
  return !error2.response && Boolean(error2.code) && // Prevents retrying cancelled requests
  error2.code !== "ECONNABORTED" && // Prevents retrying timed out requests
  isRetryAllowed$1(error2);
}
var SAFE_HTTP_METHODS = ["get", "head", "options"];
var IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(["put", "delete"]);
function isRetryableError(error2) {
  return error2.code !== "ECONNABORTED" && (!error2.response || error2.response.status >= 500 && error2.response.status <= 599);
}
function isSafeRequestError(error2) {
  if (!error2.config) {
    return false;
  }
  return isRetryableError(error2) && SAFE_HTTP_METHODS.indexOf(error2.config.method) !== -1;
}
function isIdempotentRequestError(error2) {
  if (!error2.config) {
    return false;
  }
  return isRetryableError(error2) && IDEMPOTENT_HTTP_METHODS.indexOf(error2.config.method) !== -1;
}
function isNetworkOrIdempotentRequestError(error2) {
  return isNetworkError(error2) || isIdempotentRequestError(error2);
}
function noDelay() {
  return 0;
}
function exponentialDelay() {
  var retryNumber = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  var delayFactor = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100;
  var delay = Math.pow(2, retryNumber) * delayFactor;
  var randomSum = delay * 0.2 * Math.random();
  return delay + randomSum;
}
function getCurrentState(config2) {
  var currentState = config2[namespace$1] || {};
  currentState.retryCount = currentState.retryCount || 0;
  config2[namespace$1] = currentState;
  return currentState;
}
function getRequestOptions(config2, defaultOptions) {
  return _objectSpread(_objectSpread({}, defaultOptions), config2[namespace$1]);
}
function fixConfig(axios2, config2) {
  if (axios2.defaults.agent === config2.agent) {
    delete config2.agent;
  }
  if (axios2.defaults.httpAgent === config2.httpAgent) {
    delete config2.httpAgent;
  }
  if (axios2.defaults.httpsAgent === config2.httpsAgent) {
    delete config2.httpsAgent;
  }
}
function shouldRetry(_x, _x2, _x3, _x4) {
  return _shouldRetry.apply(this, arguments);
}
function _shouldRetry() {
  _shouldRetry = _asyncToGenerator(function* (retries, retryCondition, currentState, error2) {
    var shouldRetryOrPromise = currentState.retryCount < retries && retryCondition(error2);
    if (typeof shouldRetryOrPromise === "object") {
      try {
        var shouldRetryPromiseResult = yield shouldRetryOrPromise;
        return shouldRetryPromiseResult !== false;
      } catch (_err) {
        return false;
      }
    }
    return shouldRetryOrPromise;
  });
  return _shouldRetry.apply(this, arguments);
}
function axiosRetry(axios2, defaultOptions) {
  var requestInterceptorId = axios2.interceptors.request.use((config2) => {
    var currentState = getCurrentState(config2);
    currentState.lastRequestTime = Date.now();
    return config2;
  });
  var responseInterceptorId = axios2.interceptors.response.use(null, /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* (error2) {
      var {
        config: config2
      } = error2;
      if (!config2) {
        return Promise.reject(error2);
      }
      var {
        retries = 3,
        retryCondition = isNetworkOrIdempotentRequestError,
        retryDelay = noDelay,
        shouldResetTimeout = false,
        onRetry = () => {
        }
      } = getRequestOptions(config2, defaultOptions);
      var currentState = getCurrentState(config2);
      if (yield shouldRetry(retries, retryCondition, currentState, error2)) {
        currentState.retryCount += 1;
        var delay = retryDelay(currentState.retryCount, error2);
        fixConfig(axios2, config2);
        if (!shouldResetTimeout && config2.timeout && currentState.lastRequestTime) {
          var lastRequestDuration = Date.now() - currentState.lastRequestTime;
          var timeout = config2.timeout - lastRequestDuration - delay;
          if (timeout <= 0) {
            return Promise.reject(error2);
          }
          config2.timeout = timeout;
        }
        config2.transformRequest = [(data) => data];
        onRetry(currentState.retryCount, error2, config2);
        return new Promise((resolve) => setTimeout(() => resolve(axios2(config2)), delay));
      }
      return Promise.reject(error2);
    });
    return function(_x5) {
      return _ref.apply(this, arguments);
    };
  }());
  return {
    requestInterceptorId,
    responseInterceptorId
  };
}
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.isRetryableError = isRetryableError;
const http = axios.create({
  withCredentials: true
});
axiosRetry(http, {
  retries: 3,
  shouldResetTimeout: true,
  retryDelay: (retryCount) => retryCount * 1500
  // 间隔时间
});
http.interceptors.request.use((config2) => {
  return config2;
}, (error2) => {
  return Promise.reject(error2);
});
http.interceptors.response.use((response) => {
  const { code } = response.data;
  if (code === 1) {
    return response.data;
  }
  return response;
}, (error2) => {
  return Promise.reject(error2);
});
const post = (url, params, config2) => {
  return http.post(url, params, config2);
};
const apiMap = {
  login: "/login",
  menus: "/menus",
  userInfo: "/userInfo"
};
const login$1 = () => {
  return post(apiMap.login);
};
const menus = () => {
  return post(apiMap.menus);
};
const userInfo = () => {
  return post(apiMap.userInfo);
};
const _sfc_main$1 = defineComponent({
  setup() {
    const formRef = ref(null);
    const rPasswordFormItemRef = ref(null);
    const message = useMessage();
    console.log(useMessage);
    const modelRef = ref({
      age: 1,
      password: 1,
      reenteredPassword: null
    });
    function validatePasswordStartWith(rule, value) {
      return !!modelRef.value.password && modelRef.value.password.startsWith(value) && modelRef.value.password.length >= value.length;
    }
    function validatePasswordSame(rule, value) {
      return value === modelRef.value.password;
    }
    const rules = {
      age: [
        {
          required: true,
          validator(rule, value) {
            if (!value) {
              return new Error("需要年龄");
            } else if (!/^\d*$/.test(value)) {
              return new Error("年龄应该为整数");
            } else if (Number(value) < 18) {
              return new Error("年龄应该超过十八岁");
            }
            return true;
          },
          trigger: ["input", "blur"]
        }
      ],
      password: [
        {
          required: true,
          message: "请输入密码"
        }
      ],
      reenteredPassword: [
        {
          required: true,
          message: "请再次输入密码",
          trigger: ["input", "blur"]
        },
        {
          validator: validatePasswordStartWith,
          message: "两次密码输入不一致",
          trigger: "input"
        },
        {
          validator: validatePasswordSame,
          message: "两次密码输入不一致",
          trigger: ["blur", "password-input"]
        }
      ]
    };
    return {
      formRef,
      rPasswordFormItemRef,
      model: modelRef,
      rules,
      handlePasswordInput() {
        var _a;
        if (modelRef.value.reenteredPassword) {
          (_a = rPasswordFormItemRef.value) == null ? void 0 : _a.validate({ trigger: "password-input" });
        }
      },
      handleValidateButtonClick(e) {
        var _a;
        e.preventDefault();
        login$1();
        (_a = formRef.value) == null ? void 0 : _a.validate((errors) => {
          if (!errors) {
            message.success("验证成功");
          } else {
            console.log(errors);
            message.error("验证失败");
          }
        });
      }
    };
  }
});
const _hoisted_1 = { style: { "display": "flex", "justify-content": "flex-end" } };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_n_input = NInput;
  const _component_n_form_item = NFormItem;
  const _component_n_button = NButton;
  const _component_n_col = NCol;
  const _component_n_row = NRow;
  const _component_n_form = NForm;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_n_form, {
      ref: "formRef",
      model: _ctx.model,
      rules: _ctx.rules
    }, {
      default: withCtx(() => [
        createVNode(_component_n_form_item, {
          path: "age",
          label: "年龄"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.model.age,
              "onUpdate:value": _cache[0] || (_cache[0] = ($event) => _ctx.model.age = $event),
              onKeydown: _cache[1] || (_cache[1] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"]))
            }, null, 8, ["value"])
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, {
          path: "password",
          label: "密码"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.model.password,
              "onUpdate:value": _cache[2] || (_cache[2] = ($event) => _ctx.model.password = $event),
              type: "password",
              onInput: _ctx.handlePasswordInput,
              onKeydown: _cache[3] || (_cache[3] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"]))
            }, null, 8, ["value", "onInput"])
          ]),
          _: 1
        }),
        createVNode(_component_n_form_item, {
          ref: "rPasswordFormItemRef",
          first: "",
          path: "reenteredPassword",
          label: "重复密码"
        }, {
          default: withCtx(() => [
            createVNode(_component_n_input, {
              value: _ctx.model.reenteredPassword,
              "onUpdate:value": _cache[4] || (_cache[4] = ($event) => _ctx.model.reenteredPassword = $event),
              disabled: !_ctx.model.password,
              type: "password",
              onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(() => {
              }, ["prevent"]), ["enter"]))
            }, null, 8, ["value", "disabled"])
          ]),
          _: 1
        }, 512),
        createVNode(_component_n_row, { gutter: [0, 24] }, {
          default: withCtx(() => [
            createVNode(_component_n_col, { span: 24 }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_1, [
                  createVNode(_component_n_button, {
                    disabled: _ctx.model.age === null,
                    round: "",
                    type: "primary",
                    onClick: _ctx.handleValidateButtonClick
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" 验证 ")
                    ]),
                    _: 1
                  }, 8, ["disabled", "onClick"])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["model", "rules"]),
    createElementVNode("pre", null, toDisplayString(JSON.stringify(_ctx.model, null, 2)) + "\n", 1)
  ], 64);
}
const login = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, "test");
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const config = {
  whiteList: ["/login"],
  resetPath: "/login",
  menus: [],
  // 通过注入函数，让框架获取外部文件
  getViews: () => {
    return /* @__PURE__ */ Object.assign({ "../packages/view/error/404.vue": __vite_glob_0_0, "../packages/view/home/index.vue": __vite_glob_0_1, "../packages/view/login/index.vue": __vite_glob_0_2, "../packages/view/test/index.vue": __vite_glob_0_3 });
  }
};
const paths = ["userSetting"], id = "app";
const appLoca = window.localStorage.getItem(id);
if (appLoca) {
  const { userSetting } = JSON.parse(appLoca);
  if (userSetting.lasting) {
    paths.push("tabs");
  }
}
const app = defineStore({
  id,
  persist: {
    storage: window.localStorage,
    paths
  },
  // 持久化存储插件其他配置
  state: () => {
    return {
      browser: {},
      // 当前浏览器信息
      configOptions: config,
      // 框架配置
      collapsed: false,
      // 是否折叠
      mobile: false,
      // 是否移动端
      userSetting: {
        // 主题设置
        layoutName: "ml",
        // 主题名称
        themeColor: "#519a73",
        // 主题颜色
        themeName: null,
        // 主题模式 深色 和 白色
        language: "zhCN",
        // 语言
        tabsStyle: "sutra",
        // 标签风格
        hideTabs: false,
        // 隐藏标签
        lasting: false,
        // 标签持久化
        gray: false,
        // 灰色模式
        weak: false,
        // 色弱模式
        isFullscreen: false,
        // 全屏模式
        animation: "animate__slideInLeft",
        // 类型 参考animation.css
        disableAnimation: false,
        // 动画
        keepAlive: false
        // 是否缓存
      },
      userInfo: {},
      userState: false,
      allMenus: [],
      // 所有菜单
      treeMenus: [],
      // 渲染的菜单
      paths: [],
      // 路由路径
      tabs: [],
      // 标签
      currentRouter: {}
      // 当前路由信息
    };
  }
});
function arrayEach$1(array, iteratee) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (iteratee(array[index2], index2, array) === false) {
      break;
    }
  }
  return array;
}
var _arrayEach = arrayEach$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$2 = Object.prototype;
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$1.call(object, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
var keys_1 = keys$3;
var copyObject$3 = _copyObject, keys$2 = keys_1;
function baseAssign$1(object, source) {
  return object && copyObject$3(source, keys$2(source), object);
}
var _baseAssign = baseAssign$1;
var copyObject$2 = _copyObject, keysIn$2 = keysIn_1;
function baseAssignIn$1(object, source) {
  return object && copyObject$2(source, keysIn$2(source), object);
}
var _baseAssignIn = baseAssignIn$1;
function arrayFilter$1(array, predicate) {
  var index2 = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array[index2];
    if (predicate(value, index2, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2;
var arrayFilter = _arrayFilter, stubArray$1 = stubArray_1;
var objectProto$1 = Object.prototype;
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;
var nativeGetSymbols$1 = Object.getOwnPropertySymbols;
var getSymbols$3 = !nativeGetSymbols$1 ? stubArray$1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols$1(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};
var _getSymbols = getSymbols$3;
var copyObject$1 = _copyObject, getSymbols$2 = _getSymbols;
function copySymbols$1(source, object) {
  return copyObject$1(source, getSymbols$2(source), object);
}
var _copySymbols = copySymbols$1;
function arrayPush$3(array, values) {
  var index2 = -1, length = values.length, offset = array.length;
  while (++index2 < length) {
    array[offset + index2] = values[index2];
  }
  return array;
}
var _arrayPush = arrayPush$3;
var arrayPush$2 = _arrayPush, getPrototype = _getPrototype, getSymbols$1 = _getSymbols, stubArray = stubArray_1;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn$2 = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush$2(result, getSymbols$1(object));
    object = getPrototype(object);
  }
  return result;
};
var _getSymbolsIn = getSymbolsIn$2;
var copyObject = _copyObject, getSymbolsIn$1 = _getSymbolsIn;
function copySymbolsIn$1(source, object) {
  return copyObject(source, getSymbolsIn$1(source), object);
}
var _copySymbolsIn = copySymbolsIn$1;
var arrayPush$1 = _arrayPush, isArray$2 = isArray_1;
function baseGetAllKeys$2(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$2(object) ? result : arrayPush$1(result, symbolsFunc(object));
}
var _baseGetAllKeys = baseGetAllKeys$2;
var baseGetAllKeys$1 = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object) {
  return baseGetAllKeys$1(object, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbolsIn = _getSymbolsIn, keysIn$1 = keysIn_1;
function getAllKeysIn$1(object) {
  return baseGetAllKeys(object, keysIn$1, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$3 = getNative$1(root$1, "Set");
var _Set = Set$3;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$2 = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag$3 = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag$3 = "[object Set]", weakMapTag$1 = "[object WeakMap]";
var dataViewTag$2 = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$2), weakMapCtorString = toSource(WeakMap);
var getTag$3 = baseGetTag;
if (DataView && getTag$3(new DataView(new ArrayBuffer(1))) != dataViewTag$2 || Map$1 && getTag$3(new Map$1()) != mapTag$3 || Promise$1 && getTag$3(Promise$1.resolve()) != promiseTag || Set$2 && getTag$3(new Set$2()) != setTag$3 || WeakMap && getTag$3(new WeakMap()) != weakMapTag$1) {
  getTag$3 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag$2;
        case mapCtorString:
          return mapTag$3;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag$3;
        case weakMapCtorString:
          return weakMapTag$1;
      }
    }
    return result;
  };
}
var _getTag = getTag$3;
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function initCloneArray$1(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
var _initCloneArray = initCloneArray$1;
var cloneArrayBuffer$1 = _cloneArrayBuffer;
function cloneDataView$1(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer$1(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var _cloneDataView = cloneDataView$1;
var reFlags = /\w*$/;
function cloneRegExp$1(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var _cloneRegExp = cloneRegExp$1;
var Symbol$2 = _Symbol;
var symbolProto = Symbol$2 ? Symbol$2.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol$1(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
var _cloneSymbol = cloneSymbol$1;
var cloneArrayBuffer = _cloneArrayBuffer, cloneDataView = _cloneDataView, cloneRegExp = _cloneRegExp, cloneSymbol = _cloneSymbol, cloneTypedArray = _cloneTypedArray;
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag$1(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
var _initCloneByTag = initCloneByTag$1;
var getTag$2 = _getTag, isObjectLike$1 = isObjectLike_1;
var mapTag$1 = "[object Map]";
function baseIsMap$1(value) {
  return isObjectLike$1(value) && getTag$2(value) == mapTag$1;
}
var _baseIsMap = baseIsMap$1;
var baseIsMap = _baseIsMap, baseUnary$1 = _baseUnary, nodeUtil$1 = _nodeUtilExports;
var nodeIsMap = nodeUtil$1 && nodeUtil$1.isMap;
var isMap$1 = nodeIsMap ? baseUnary$1(nodeIsMap) : baseIsMap;
var isMap_1 = isMap$1;
var getTag$1 = _getTag, isObjectLike = isObjectLike_1;
var setTag$1 = "[object Set]";
function baseIsSet$1(value) {
  return isObjectLike(value) && getTag$1(value) == setTag$1;
}
var _baseIsSet = baseIsSet$1;
var baseIsSet = _baseIsSet, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet$1 = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var isSet_1 = isSet$1;
var Stack = _Stack, arrayEach = _arrayEach, assignValue = _assignValue, baseAssign = _baseAssign, baseAssignIn = _baseAssignIn, cloneBuffer = _cloneBufferExports, copyArray = _copyArray, copySymbols = _copySymbols, copySymbolsIn = _copySymbolsIn, getAllKeys = _getAllKeys, getAllKeysIn = _getAllKeysIn, getTag = _getTag, initCloneArray = _initCloneArray, initCloneByTag = _initCloneByTag, initCloneObject = _initCloneObject, isArray$1 = isArray_1, isBuffer = isBufferExports, isMap = isMap_1, isObject$1 = isObject_1, isSet = isSet_1, keys = keys_1, keysIn = keysIn_1;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone$1(value, bitmask, customizer2, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer2) {
    result = object ? customizer2(value, key, object, stack) : customizer2(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject$1(value)) {
    return value;
  }
  var isArr = isArray$1(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone$1(subValue, bitmask, customizer2, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone$1(subValue, bitmask, customizer2, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone$1(subValue, bitmask, customizer2, key2, value, stack));
  });
  return result;
}
var _baseClone = baseClone$1;
var baseClone = _baseClone;
var CLONE_DEEP_FLAG = 1, CLONE_SYMBOLS_FLAG = 4;
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
var cloneDeep_1 = cloneDeep;
const cloneDeep$1 = /* @__PURE__ */ getDefaultExportFromCjs(cloneDeep_1);
const toTree = ({ arr = [], keyField = "id", children = "children", pid = "pid", callback = () => {
} }) => {
  const data = cloneDeep$1(arr);
  const map = {};
  data.forEach(function(item) {
    map[item[keyField]] = item;
  });
  const new_data = [];
  data.forEach(function(item) {
    const parent = map[item[pid]];
    if (parent) {
      (parent[children] || (parent[children] = [])).push(item);
    } else {
      new_data.push(item);
    }
    callback && callback(item);
  });
  return new_data;
};
const getObjectPath = ({ arr = [], id: id2 = "" }) => {
  const data = cloneDeep$1(arr);
  for (const i in arr) {
    if (data.hasOwnProperty(i)) {
      if (arr[i].id === id2) {
        return [data[i]];
      }
      if (data[i].children) {
        const node = getObjectPath({ arr: data[i].children, id: id2 });
        if (node !== void 0) {
          return node.concat(data[i]);
        }
      }
    }
  }
};
function htmlElementClass(state, clsName, target) {
  const targetEl = target || document.body;
  if (state) {
    targetEl.classList.add(clsName);
  } else {
    targetEl.classList.remove(clsName);
  }
}
const throttledFn = useThrottleFn(() => {
  const app$1 = app();
  const breakpoints = useBreakpoints(breakpointsTailwind);
  const xs = breakpoints.smaller("sm");
  const sm = breakpoints.between("sm", "md");
  const md = breakpoints.between("md", "lg");
  const lg = breakpoints.between("lg", "xl");
  const xl = breakpoints.between("xl", "2xl");
  const xxl = breakpoints["2xl"];
  app$1.browser = { xs, sm, md, lg, xl, xxl };
  app$1.mobile = xs.value;
  app$1.collapsed = sm.value || md.value;
}, 200);
const updateHtmlGray = () => {
  const app$1 = app();
  htmlElementClass(app$1.userSetting.gray, "bag-grey");
};
const updateHtmlWeak = () => {
  const app$1 = app();
  htmlElementClass(app$1.userSetting.weak, "bag-weak");
};
const setupGlobal = () => {
  throttledFn().then(() => useEventListener(window, "resize", throttledFn));
};
function isObject(v) {
  return typeof v === "object" && v !== null;
}
function normalizeOptions(options2, factoryOptions) {
  options2 = isObject(options2) ? options2 : /* @__PURE__ */ Object.create(null);
  return new Proxy(options2, {
    get(target, key, receiver) {
      if (key === "key")
        return Reflect.get(target, key, receiver);
      return Reflect.get(target, key, receiver) || Reflect.get(factoryOptions, key, receiver);
    }
  });
}
function get(state, path) {
  return path.reduce((obj, p) => {
    return obj == null ? void 0 : obj[p];
  }, state);
}
function set(state, path, val) {
  return path.slice(0, -1).reduce((obj, p) => {
    if (/^(__proto__)$/.test(p))
      return {};
    else
      return obj[p] = obj[p] || {};
  }, state)[path[path.length - 1]] = val, state;
}
function pick(baseState, paths2) {
  return paths2.reduce((substate, path) => {
    const pathArray = path.split(".");
    return set(substate, pathArray, get(baseState, pathArray));
  }, {});
}
function hydrateStore(store, { storage, serializer, key, debug }) {
  try {
    const fromStorage = storage == null ? void 0 : storage.getItem(key);
    if (fromStorage)
      store.$patch(serializer == null ? void 0 : serializer.deserialize(fromStorage));
  } catch (error2) {
    if (debug)
      console.error(error2);
  }
}
function persistState(state, { storage, serializer, key, paths: paths2, debug }) {
  try {
    const toStore = Array.isArray(paths2) ? pick(state, paths2) : state;
    storage.setItem(key, serializer.serialize(toStore));
  } catch (error2) {
    if (debug)
      console.error(error2);
  }
}
function createPersistedState(factoryOptions = {}) {
  return (context) => {
    const { auto = false } = factoryOptions;
    const {
      options: { persist = auto },
      store,
      pinia: pinia2
    } = context;
    if (!persist)
      return;
    if (!(store.$id in pinia2.state.value)) {
      const original_store = pinia2._s.get(store.$id.replace("__hot:", ""));
      if (original_store)
        Promise.resolve().then(() => original_store.$persist());
      return;
    }
    const persistences = (Array.isArray(persist) ? persist.map((p) => normalizeOptions(p, factoryOptions)) : [normalizeOptions(persist, factoryOptions)]).map(
      ({
        storage = localStorage,
        beforeRestore = null,
        afterRestore = null,
        serializer = {
          serialize: JSON.stringify,
          deserialize: JSON.parse
        },
        key = store.$id,
        paths: paths2 = null,
        debug = false
      }) => {
        var _a;
        return {
          storage,
          beforeRestore,
          afterRestore,
          serializer,
          key: ((_a = factoryOptions.key) != null ? _a : (k) => k)(typeof key == "string" ? key : key(store.$id)),
          paths: paths2,
          debug
        };
      }
    );
    store.$persist = () => {
      persistences.forEach((persistence) => {
        persistState(store.$state, persistence);
      });
    };
    store.$hydrate = ({ runHooks = true } = {}) => {
      persistences.forEach((persistence) => {
        const { beforeRestore, afterRestore } = persistence;
        if (runHooks)
          beforeRestore == null ? void 0 : beforeRestore(context);
        hydrateStore(store, persistence);
        if (runHooks)
          afterRestore == null ? void 0 : afterRestore(context);
      });
    };
    persistences.forEach((persistence) => {
      const { beforeRestore, afterRestore } = persistence;
      beforeRestore == null ? void 0 : beforeRestore(context);
      hydrateStore(store, persistence);
      afterRestore == null ? void 0 : afterRestore(context);
      store.$subscribe(
        (_mutation, state) => {
          persistState(state, persistence);
        },
        {
          detached: true
        }
      );
    });
  };
}
var src_default = createPersistedState();
const pinia = createPinia();
function initStore(app$1) {
  const appStore = app();
  const { configOptions } = app$1.config.globalProperties;
  appStore.configOptions = configOptions;
  updateHtmlGray();
  updateHtmlWeak();
}
const setupPinia = (app2) => {
  pinia.use(src_default);
  app2.use(pinia);
  initStore(app2);
};
const icons = {
  Home,
  UserSwitchOutlined,
  BookOutline,
  CloudSyncOutlined,
  DribbbleOutlined,
  CubeOutline,
  PlanetOutline,
  SunnyOutline,
  SettingsOutline,
  LeafOutline,
  FileTrayOutline,
  UsergroupAddOutlined,
  BehanceOutlined,
  CloseOutline,
  RefreshCircleOutline,
  ChevronBackOutline,
  ChevronForwardOutline,
  HomeOutline,
  MenuOutlined,
  TeamOutlined,
  UserOutlined,
  StepBackwardFilled,
  StepForwardFilled,
  StopOutlined,
  SmileOutlined,
  FlashOutline,
  MenuUnfoldOutlined,
  SearchOutline,
  NotificationsOutline,
  LanguageOutline,
  ScanOutline,
  HappyOutline,
  MoonOutline,
  CloseCircleOutline,
  SyncCircleOutline,
  CheckboxOutline,
  BagCheck,
  BatteryHalf,
  Bug,
  ChatbubblesOutline,
  CloudDownloadOutline,
  ColorPaletteOutline,
  CutOutline,
  FlowerSharp,
  GiftOutline,
  HeartDislikeCircleOutline,
  HourglassOutline,
  LayersOutline,
  LogoAlipay,
  LogoChrome,
  LogoIonic,
  LogoPinterest,
  MailUnread,
  MicOffCircle,
  NotificationsOffCircleSharp,
  QrCodeSharp,
  RainyOutline,
  RibbonOutline,
  RoseOutline,
  SnowSharp,
  WalletOutline,
  FireOutlined,
  GithubOutlined,
  IeOutlined,
  SketchOutlined,
  TaobaoCircleFilled,
  ZhihuOutlined,
  EuroOutlined,
  DashboardOutlined,
  BarcodeOutlined,
  AppleFilled,
  AmazonOutlined,
  AlertFilled,
  AimOutlined,
  AppleOutlined,
  CarFilled,
  CaretLeftOutlined,
  CaretRightFilled,
  CaretRightOutlined,
  CaretDownFilled,
  ClearOutlined,
  EnvironmentOutlined,
  GifOutlined,
  HomeTwotone,
  MehOutlined,
  PropertySafetyOutlined,
  ProfileOutlined,
  BagAdd,
  BagHandle,
  BicycleOutline,
  Disc,
  FastFood,
  FootballOutline,
  FootstepsOutline,
  DesktopOutline,
  TvOutline,
  ImageOutline,
  MediumOutlined,
  ReadOutlined,
  LaptopOutline,
  CreateOutline,
  AlertCircleOutline,
  FrownOutlined,
  AlertOutlined,
  InstagramOutlined
};
function renderIcon(iconName) {
  return () => h(NIcon, null, { default: () => h(icons[iconName]) });
}
const setupIcons = (app2) => {
  for (const iconsKey in icons) {
    app2.component(iconsKey, icons[iconsKey]);
  }
};
var nprogress$1 = { exports: {} };
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */
(function(module, exports) {
  (function(root2, factory) {
    {
      module.exports = factory();
    }
  })(commonjsGlobal, function() {
    var NProgress2 = {};
    NProgress2.version = "0.2.0";
    var Settings = NProgress2.settings = {
      minimum: 0.08,
      easing: "ease",
      positionUsing: "",
      speed: 200,
      trickle: true,
      trickleRate: 0.02,
      trickleSpeed: 800,
      showSpinner: true,
      barSelector: '[role="bar"]',
      spinnerSelector: '[role="spinner"]',
      parent: "body",
      template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress2.configure = function(options2) {
      var key, value;
      for (key in options2) {
        value = options2[key];
        if (value !== void 0 && options2.hasOwnProperty(key))
          Settings[key] = value;
      }
      return this;
    };
    NProgress2.status = null;
    NProgress2.set = function(n) {
      var started = NProgress2.isStarted();
      n = clamp(n, Settings.minimum, 1);
      NProgress2.status = n === 1 ? null : n;
      var progress = NProgress2.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
      progress.offsetWidth;
      queue(function(next) {
        if (Settings.positionUsing === "")
          Settings.positionUsing = NProgress2.getPositioningCSS();
        css(bar, barPositionCSS(n, speed, ease));
        if (n === 1) {
          css(progress, {
            transition: "none",
            opacity: 1
          });
          progress.offsetWidth;
          setTimeout(function() {
            css(progress, {
              transition: "all " + speed + "ms linear",
              opacity: 0
            });
            setTimeout(function() {
              NProgress2.remove();
              next();
            }, speed);
          }, speed);
        } else {
          setTimeout(next, speed);
        }
      });
      return this;
    };
    NProgress2.isStarted = function() {
      return typeof NProgress2.status === "number";
    };
    NProgress2.start = function() {
      if (!NProgress2.status)
        NProgress2.set(0);
      var work = function() {
        setTimeout(function() {
          if (!NProgress2.status)
            return;
          NProgress2.trickle();
          work();
        }, Settings.trickleSpeed);
      };
      if (Settings.trickle)
        work();
      return this;
    };
    NProgress2.done = function(force) {
      if (!force && !NProgress2.status)
        return this;
      return NProgress2.inc(0.3 + 0.5 * Math.random()).set(1);
    };
    NProgress2.inc = function(amount) {
      var n = NProgress2.status;
      if (!n) {
        return NProgress2.start();
      } else {
        if (typeof amount !== "number") {
          amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
        }
        n = clamp(n + amount, 0, 0.994);
        return NProgress2.set(n);
      }
    };
    NProgress2.trickle = function() {
      return NProgress2.inc(Math.random() * Settings.trickleRate);
    };
    (function() {
      var initial = 0, current = 0;
      NProgress2.promise = function($promise) {
        if (!$promise || $promise.state() === "resolved") {
          return this;
        }
        if (current === 0) {
          NProgress2.start();
        }
        initial++;
        current++;
        $promise.always(function() {
          current--;
          if (current === 0) {
            initial = 0;
            NProgress2.done();
          } else {
            NProgress2.set((initial - current) / initial);
          }
        });
        return this;
      };
    })();
    NProgress2.render = function(fromStart) {
      if (NProgress2.isRendered())
        return document.getElementById("nprogress");
      addClass(document.documentElement, "nprogress-busy");
      var progress = document.createElement("div");
      progress.id = "nprogress";
      progress.innerHTML = Settings.template;
      var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress2.status || 0), parent = document.querySelector(Settings.parent), spinner;
      css(bar, {
        transition: "all 0 linear",
        transform: "translate3d(" + perc + "%,0,0)"
      });
      if (!Settings.showSpinner) {
        spinner = progress.querySelector(Settings.spinnerSelector);
        spinner && removeElement(spinner);
      }
      if (parent != document.body) {
        addClass(parent, "nprogress-custom-parent");
      }
      parent.appendChild(progress);
      return progress;
    };
    NProgress2.remove = function() {
      removeClass(document.documentElement, "nprogress-busy");
      removeClass(document.querySelector(Settings.parent), "nprogress-custom-parent");
      var progress = document.getElementById("nprogress");
      progress && removeElement(progress);
    };
    NProgress2.isRendered = function() {
      return !!document.getElementById("nprogress");
    };
    NProgress2.getPositioningCSS = function() {
      var bodyStyle = document.body.style;
      var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
      if (vendorPrefix + "Perspective" in bodyStyle) {
        return "translate3d";
      } else if (vendorPrefix + "Transform" in bodyStyle) {
        return "translate";
      } else {
        return "margin";
      }
    };
    function clamp(n, min, max) {
      if (n < min)
        return min;
      if (n > max)
        return max;
      return n;
    }
    function toBarPerc(n) {
      return (-1 + n) * 100;
    }
    function barPositionCSS(n, speed, ease) {
      var barCSS;
      if (Settings.positionUsing === "translate3d") {
        barCSS = { transform: "translate3d(" + toBarPerc(n) + "%,0,0)" };
      } else if (Settings.positionUsing === "translate") {
        barCSS = { transform: "translate(" + toBarPerc(n) + "%,0)" };
      } else {
        barCSS = { "margin-left": toBarPerc(n) + "%" };
      }
      barCSS.transition = "all " + speed + "ms " + ease;
      return barCSS;
    }
    var queue = function() {
      var pending = [];
      function next() {
        var fn = pending.shift();
        if (fn) {
          fn(next);
        }
      }
      return function(fn) {
        pending.push(fn);
        if (pending.length == 1)
          next();
      };
    }();
    var css = function() {
      var cssPrefixes = ["Webkit", "O", "Moz", "ms"], cssProps = {};
      function camelCase(string) {
        return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
          return letter.toUpperCase();
        });
      }
      function getVendorProp(name) {
        var style2 = document.body.style;
        if (name in style2)
          return name;
        var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
        while (i--) {
          vendorName = cssPrefixes[i] + capName;
          if (vendorName in style2)
            return vendorName;
        }
        return name;
      }
      function getStyleProp(name) {
        name = camelCase(name);
        return cssProps[name] || (cssProps[name] = getVendorProp(name));
      }
      function applyCss(element, prop, value) {
        prop = getStyleProp(prop);
        element.style[prop] = value;
      }
      return function(element, properties) {
        var args = arguments, prop, value;
        if (args.length == 2) {
          for (prop in properties) {
            value = properties[prop];
            if (value !== void 0 && properties.hasOwnProperty(prop))
              applyCss(element, prop, value);
          }
        } else {
          applyCss(element, args[1], args[2]);
        }
      };
    }();
    function hasClass(element, name) {
      var list = typeof element == "string" ? element : classList(element);
      return list.indexOf(" " + name + " ") >= 0;
    }
    function addClass(element, name) {
      var oldList = classList(element), newList = oldList + name;
      if (hasClass(oldList, name))
        return;
      element.className = newList.substring(1);
    }
    function removeClass(element, name) {
      var oldList = classList(element), newList;
      if (!hasClass(element, name))
        return;
      newList = oldList.replace(" " + name + " ", " ");
      element.className = newList.substring(1, newList.length - 1);
    }
    function classList(element) {
      return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
    }
    function removeElement(element) {
      element && element.parentNode && element.parentNode.removeChild(element);
    }
    return NProgress2;
  });
})(nprogress$1);
var nprogressExports = nprogress$1.exports;
const NProgress = /* @__PURE__ */ getDefaultExportFromCjs(nprogressExports);
const nprogress = "";
let firstReload = true;
function updateCurrentRouter(to) {
  const appStore = app();
  appStore.currentRouter = { ...to };
}
function updatePaths(to) {
  const appStore = app();
  const paths2 = getObjectPath({ arr: toTree({ arr: appStore.allMenus }), id: to.meta.id });
  appStore.paths = paths2 && paths2.reverse() || [];
}
function updateTbas(current) {
  const appStore = app();
  const { href, hash, name, path, query, meta } = current;
  const tag = appStore.tabs.find((item) => item.meta.id === meta.id);
  if (!tag) {
    meta.tempPath = path;
    appStore.tabs.push(cloneDeep$1({ href, hash, name, path, query, meta }));
  }
}
function updateTbasFix() {
  const appStore = app();
  if (firstReload) {
    appStore.allMenus.forEach((current) => {
      if (current.tabFix && current.path) {
        updateTbas({ meta: current });
      }
    });
    firstReload = false;
  }
}
const afterEach = (to) => {
  updateCurrentRouter(to);
  updatePaths(to);
  updateTbas(to);
  updateTbasFix();
};
const routerMap = [
  {
    path: "/",
    name: "main",
    component: () => import("./index-9b086876.js"),
    redirect: "home",
    children: []
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "登录" },
    component: login
  },
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "出错了" },
    component: error
  }
];
var baseMerge = _baseMerge, createAssigner = _createAssigner;
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var merge_1 = merge;
const merge$1 = /* @__PURE__ */ getDefaultExportFromCjs(merge_1);
var Symbol$1 = _Symbol, isArguments = isArguments_1, isArray = isArray_1;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(value) {
  return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
var _isFlattenable = isFlattenable$1;
var arrayPush = _arrayPush, isFlattenable = _isFlattenable;
function baseFlatten$1(array, depth, predicate, isStrict, result) {
  var index2 = -1, length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index2 < length) {
    var value = array[index2];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten$1(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
var _baseFlatten = baseFlatten$1;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function baseFindIndex$1(array, predicate, fromIndex, fromRight) {
  var length = array.length, index2 = fromIndex + (fromRight ? 1 : -1);
  while (fromRight ? index2-- : ++index2 < length) {
    if (predicate(array[index2], index2, array)) {
      return index2;
    }
  }
  return -1;
}
var _baseFindIndex = baseFindIndex$1;
function baseIsNaN$1(value) {
  return value !== value;
}
var _baseIsNaN = baseIsNaN$1;
function strictIndexOf$1(array, value, fromIndex) {
  var index2 = fromIndex - 1, length = array.length;
  while (++index2 < length) {
    if (array[index2] === value) {
      return index2;
    }
  }
  return -1;
}
var _strictIndexOf = strictIndexOf$1;
var baseFindIndex = _baseFindIndex, baseIsNaN = _baseIsNaN, strictIndexOf = _strictIndexOf;
function baseIndexOf$1(array, value, fromIndex) {
  return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
var _baseIndexOf = baseIndexOf$1;
var baseIndexOf = _baseIndexOf;
function arrayIncludes$1(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
var _arrayIncludes = arrayIncludes$1;
function arrayIncludesWith$1(array, value, comparator) {
  var index2 = -1, length = array == null ? 0 : array.length;
  while (++index2 < length) {
    if (comparator(value, array[index2])) {
      return true;
    }
  }
  return false;
}
var _arrayIncludesWith = arrayIncludesWith$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
function noop$1() {
}
var noop_1 = noop$1;
function setToArray$2(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$2;
var Set$1 = _Set, noop = noop_1, setToArray$1 = _setToArray;
var INFINITY = 1 / 0;
var createSet$1 = !(Set$1 && 1 / setToArray$1(new Set$1([, -0]))[1] == INFINITY) ? noop : function(values) {
  return new Set$1(values);
};
var _createSet = createSet$1;
var SetCache = _SetCache, arrayIncludes = _arrayIncludes, arrayIncludesWith = _arrayIncludesWith, cacheHas = _cacheHas, createSet = _createSet, setToArray = _setToArray;
var LARGE_ARRAY_SIZE = 200;
function baseUniq$1(array, iteratee, comparator) {
  var index2 = -1, includes = arrayIncludes, length = array.length, isCommon = true, result = [], seen = result;
  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set2 = iteratee ? null : createSet(array);
    if (set2) {
      return setToArray(set2);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer:
    while (++index2 < length) {
      var value = array[index2], computed2 = iteratee ? iteratee(value) : value;
      value = comparator || value !== 0 ? value : 0;
      if (isCommon && computed2 === computed2) {
        var seenIndex = seen.length;
        while (seenIndex--) {
          if (seen[seenIndex] === computed2) {
            continue outer;
          }
        }
        if (iteratee) {
          seen.push(computed2);
        }
        result.push(value);
      } else if (!includes(seen, computed2, comparator)) {
        if (seen !== result) {
          seen.push(computed2);
        }
        result.push(value);
      }
    }
  return result;
}
var _baseUniq = baseUniq$1;
function last$1(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_1 = last$1;
var baseFlatten = _baseFlatten, baseRest = _baseRest, baseUniq = _baseUniq, isArrayLikeObject = isArrayLikeObject_1, last = last_1;
var unionWith = baseRest(function(arrays) {
  var comparator = last(arrays);
  comparator = typeof comparator == "function" ? comparator : void 0;
  return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), void 0, comparator);
});
var unionWith_1 = unionWith;
const unionWith$1 = /* @__PURE__ */ getDefaultExportFromCjs(unionWith_1);
let hasRoles = false;
const namespace = "main";
const frameView = /* @__PURE__ */ Object.assign({ "../packages/view/error/404.vue": __vite_glob_0_0, "../packages/view/home/index.vue": __vite_glob_0_1, "../packages/view/login/index.vue": __vite_glob_0_2, "../packages/view/test/index.vue": __vite_glob_0_3 });
function findComponent(filePath) {
  const appStore = app();
  const views = merge$1(appStore.configOptions.getViews(), frameView);
  const key = Object.keys(views).find((path) => {
    return path.toLowerCase().indexOf(filePath.toLowerCase()) > -1;
  });
  return filePath && views[key] && views[key].default;
}
function addRouter(item) {
  const component = findComponent(item.file);
  if (component) {
    router.addRoute(item.namespace ? item.namespace : namespace, {
      path: item.path,
      name: item.name,
      component,
      meta: item
    });
  }
}
function createRouterComponent(allMenus) {
  console.log(allMenus);
  allMenus.forEach((item) => {
    if (item.file) {
      addRouter(item);
    }
    if (item.add && Object.keys(item.add).length !== 0) {
      addRouter(item.add);
    }
    if (item.edit && Object.keys(item.edit).length !== 0) {
      addRouter(item.edit);
    }
    if (isArray$6(item.children)) {
      createRouterComponent(item.children);
    }
  });
}
function hasWhiteRouter(path) {
  const appStore = app();
  return appStore.configOptions.whiteList.some((e) => path.indexOf(e) === 0);
}
function hasUserInfo() {
  const appStore = app();
  return Object.keys(appStore.userInfo).length !== 0;
}
function getUserInfo(to, from, next) {
  const appStore = app();
  userInfo().then((res) => {
    appStore.userInfo = res;
    updateRouterAll(to, from, next);
  }).catch(() => {
    next(appStore.configOptions.resetPath);
  });
}
function updateRouterAll(to, from, next) {
  const appStore = app();
  if (hasRoles) {
    next();
  } else {
    menus().then((res) => {
      const { menus: menus2 } = appStore.configOptions;
      const allMenus = unionWith$1(res.data, menus2);
      appStore.allMenus = allMenus.map((item) => {
        if (item.icon) {
          item.iconName = item.icon;
          item.icon = renderIcon(item.iconName);
        } else {
          delete item.icon;
        }
        item.name = item.name || item.path;
        return item;
      });
      appStore.treeMenus = toTree({ arr: appStore.allMenus.filter((item) => item.shows) });
      createRouterComponent(allMenus);
    }).finally(() => {
      hasRoles = true;
      next(to.fullPath);
    });
  }
}
const beforeEach = (to, from, next) => {
  if (hasWhiteRouter(to.path)) {
    return next();
  }
  if (hasUserInfo()) {
    updateRouterAll(to, from, next);
  } else {
    getUserInfo(to, from, next);
  }
};
NProgress.configure({
  easing: "ease",
  // 动画方式
  speed: 1e3,
  // 递增进度条的速度
  showSpinner: false,
  // 是否显示加载ico
  trickleSpeed: 200,
  // 自动递增间隔
  minimum: 0.3
  // 初始化时的最小百分比
});
const router = vueRouter.createRouter({
  history: createWebHashHistory(),
  routes: routerMap
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  beforeEach(to, from, next);
});
router.afterEach((to) => {
  NProgress.done();
  afterEach(to);
});
const emitter = mitt();
function customizer(objValue, srcValue) {
  if (isArray$6(objValue)) {
    return objValue.concat(srcValue);
  }
}
const install = (app2, options2) => {
  const configOptions = cloneDeep$2(cloneDeep$2(config), cloneDeep$2(options2), customizer);
  app2.config.globalProperties["configOptions"] = configOptions;
  app2.provide("configOptions", readonly(configOptions));
  app2.provide("$mitt", emitter);
  setupPinia(app2);
  setupIcons(app2);
  setupGlobal();
};
export {
  NProgress as N,
  _export_sfc as _,
  app as a,
  updateHtmlWeak as b,
  useFullscreen as c,
  cloneDeep$1 as d,
  router as e,
  getObjectPath as g,
  http as h,
  install as i,
  renderIcon as r,
  toTree as t,
  updateHtmlGray as u
};
