var lib = {};
var sensorPool = {};
var id = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var id2 = 1;
  var _default = function _default2() {
    return "".concat(id2++);
  };
  exports["default"] = _default;
})(id);
var sensors = {};
var object = {};
var debounce = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _default = function _default2(fn) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60;
    var timer = null;
    return function() {
      var _this = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      clearTimeout(timer);
      timer = setTimeout(function() {
        fn.apply(_this, args);
      }, delay);
    };
  };
  exports["default"] = _default;
})(debounce);
var constant = {};
Object.defineProperty(constant, "__esModule", {
  value: true
});
constant.SensorTabIndex = constant.SensorClassName = constant.SizeSensorId = void 0;
var SizeSensorId = "size-sensor-id";
constant.SizeSensorId = SizeSensorId;
var SensorClassName = "size-sensor-object";
constant.SensorClassName = SensorClassName;
var SensorTabIndex = "-1";
constant.SensorTabIndex = SensorTabIndex;
Object.defineProperty(object, "__esModule", {
  value: true
});
object.createSensor = void 0;
var _debounce$1 = _interopRequireDefault$2(debounce);
var _constant$1 = constant;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var createSensor$2 = function createSensor(element) {
  var sensor = void 0;
  var listeners = [];
  var newSensor = function newSensor2() {
    if (getComputedStyle(element).position === "static") {
      element.style.position = "relative";
    }
    var obj = document.createElement("object");
    obj.onload = function() {
      obj.contentDocument.defaultView.addEventListener("resize", resizeListener);
      resizeListener();
    };
    obj.style.display = "block";
    obj.style.position = "absolute";
    obj.style.top = "0";
    obj.style.left = "0";
    obj.style.height = "100%";
    obj.style.width = "100%";
    obj.style.overflow = "hidden";
    obj.style.pointerEvents = "none";
    obj.style.zIndex = "-1";
    obj.style.opacity = "0";
    obj.setAttribute("class", _constant$1.SensorClassName);
    obj.setAttribute("tabindex", _constant$1.SensorTabIndex);
    obj.type = "text/html";
    element.appendChild(obj);
    obj.data = "about:blank";
    return obj;
  };
  var resizeListener = (0, _debounce$1["default"])(function() {
    listeners.forEach(function(listener) {
      listener(element);
    });
  });
  var bind3 = function bind4(cb) {
    if (!sensor) {
      sensor = newSensor();
    }
    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  var destroy = function destroy2() {
    if (sensor && sensor.parentNode) {
      if (sensor.contentDocument) {
        sensor.contentDocument.defaultView.removeEventListener("resize", resizeListener);
      }
      sensor.parentNode.removeChild(sensor);
      sensor = void 0;
      listeners = [];
    }
  };
  var unbind = function unbind2(cb) {
    var idx = listeners.indexOf(cb);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
    if (listeners.length === 0 && sensor) {
      destroy();
    }
  };
  return {
    element,
    bind: bind3,
    destroy,
    unbind
  };
};
object.createSensor = createSensor$2;
var resizeObserver = {};
Object.defineProperty(resizeObserver, "__esModule", {
  value: true
});
resizeObserver.createSensor = void 0;
var _debounce = _interopRequireDefault$1(debounce);
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var createSensor$1 = function createSensor2(element) {
  var sensor = void 0;
  var listeners = [];
  var resizeListener = (0, _debounce["default"])(function() {
    listeners.forEach(function(listener) {
      listener(element);
    });
  });
  var newSensor = function newSensor2() {
    var s = new ResizeObserver(resizeListener);
    s.observe(element);
    resizeListener();
    return s;
  };
  var bind3 = function bind4(cb) {
    if (!sensor) {
      sensor = newSensor();
    }
    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  var destroy = function destroy2() {
    sensor.disconnect();
    listeners = [];
    sensor = void 0;
  };
  var unbind = function unbind2(cb) {
    var idx = listeners.indexOf(cb);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
    if (listeners.length === 0 && sensor) {
      destroy();
    }
  };
  return {
    element,
    bind: bind3,
    destroy,
    unbind
  };
};
resizeObserver.createSensor = createSensor$1;
Object.defineProperty(sensors, "__esModule", {
  value: true
});
sensors.createSensor = void 0;
var _object = object;
var _resizeObserver = resizeObserver;
var createSensor3 = typeof ResizeObserver !== "undefined" ? _resizeObserver.createSensor : _object.createSensor;
sensors.createSensor = createSensor3;
Object.defineProperty(sensorPool, "__esModule", {
  value: true
});
sensorPool.removeSensor = sensorPool.getSensor = void 0;
var _id = _interopRequireDefault(id);
var _sensors = sensors;
var _constant = constant;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
var Sensors = {};
var getSensor = function getSensor2(element) {
  var sensorId = element.getAttribute(_constant.SizeSensorId);
  if (sensorId && Sensors[sensorId]) {
    return Sensors[sensorId];
  }
  var newId = (0, _id["default"])();
  element.setAttribute(_constant.SizeSensorId, newId);
  var sensor = (0, _sensors.createSensor)(element);
  Sensors[newId] = sensor;
  return sensor;
};
sensorPool.getSensor = getSensor;
var removeSensor = function removeSensor2(sensor) {
  var sensorId = sensor.element.getAttribute(_constant.SizeSensorId);
  sensor.element.removeAttribute(_constant.SizeSensorId);
  sensor.destroy();
  if (sensorId && Sensors[sensorId]) {
    delete Sensors[sensorId];
  }
};
sensorPool.removeSensor = removeSensor;
Object.defineProperty(lib, "__esModule", {
  value: true
});
lib.ver = lib.clear = bind_1 = lib.bind = void 0;
var _sensorPool = sensorPool;
var bind = function bind2(element, cb) {
  var sensor = (0, _sensorPool.getSensor)(element);
  sensor.bind(cb);
  return function() {
    sensor.unbind(cb);
  };
};
var bind_1 = lib.bind = bind;
var clear = function clear2(element) {
  var sensor = (0, _sensorPool.getSensor)(element);
  (0, _sensorPool.removeSensor)(sensor);
};
lib.clear = clear;
var ver = "1.0.1";
lib.ver = ver;
export { bind_1 as b };
