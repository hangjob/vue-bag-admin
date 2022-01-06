import { a as getDefaultExportFromCjs } from "./mockjs-475bec84.js";
var mo_umd = { exports: {} };
/*!
  @mojs/core – The motion graphics toolbelt for the web
  Oleg Solomka @legomushroom 2021 MIT
  1.2.1
*/
(function(module, exports) {
  var e;
  e = function() {
    return (() => {
      var t = { 50: (t2, e3, r2) => {
        r2.d(e3, { Z: () => n });
        var i2 = r2(2), s = { _sample: function(t3) {
          var e4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 4, r3 = (0, i2.Z)(e4), n2 = {};
          if (r3 === "number") {
            var a = 0, o = Math.pow(10, e4), l = 1 / o;
            n2[0] = t3(0);
            for (var u = 0; u < o - 1; u++) {
              a += l;
              var h = parseFloat(a.toFixed(e4));
              n2[h] = t3(a);
            }
            n2[1] = t3(1), n2.base = e4;
          } else
            r3 === "object" ? n2 = e4 : r3 === "string" && (n2 = JSON.parse(e4));
          return s._sample._proximate(n2);
        }, _proximate: function(t3) {
          var e4 = t3.base, r3 = 1 / Math.pow(10, e4), i3 = function(i4) {
            var s2, n2, a = function(t4, e5) {
              e5 = +e5 || 0;
              var r4 = Math.pow(10, e5);
              return Math.round(t4 * r4) / r4;
            }(i4, e4), o = t3[a.toString()];
            if (Math.abs(i4 - a) < r3)
              return o;
            var l = (n2 = i4 > a ? t3[s2 = a + r3] : t3[s2 = a - r3]) - o;
            return l < r3 ? o : o + (i4 - a) / (s2 - a) * (n2 > o ? -1 : 1) * l;
          };
          return i3.getSamples = function() {
            return t3;
          }, i3;
        } };
        s._sample._proximate = s._proximate;
        const n = s._sample;
      }, 973: (t2, e3, r2) => {
        r2.d(e3, { Z: () => l });
        var i2 = r2(2), s = r2(671), n = r2(144), a = r2(52), o = r2.n(a);
        const l = function() {
          function t3() {
            var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            (0, s.Z)(this, t3), this._o = e4, this._index = this._o.index || 0, this._arrayPropertyMap = { strokeDashoffset: 1, strokeDasharray: 1, origin: 1 }, this._skipPropsDelta = { timeline: 1, prevChainModule: 1, callbacksContext: 1 }, this._declareDefaults(), this._extendDefaults(), this._vars(), this._render();
          }
          return (0, n.Z)(t3, [{ key: "_declareDefaults", value: function() {
            this._defaults = {};
          } }, { key: "_vars", value: function() {
            this._progress = 0, this._strokeDasharrayBuffer = [];
          } }, { key: "_render", value: function() {
          } }, { key: "_setProp", value: function(t4, e4) {
            if ((0, i2.Z)(t4) === "object")
              for (var r3 in t4)
                this._assignProp(r3, t4[r3]);
            else
              this._assignProp(t4, e4);
          } }, { key: "_assignProp", value: function(t4, e4) {
            this._props[t4] = e4;
          } }, { key: "_show", value: function() {
            var t4 = this._props;
            this.el && (t4.isSoftHide ? this._showByTransform() : this.el.style.display = "block", this._isShown = true);
          } }, { key: "_hide", value: function() {
            this.el && (this._props.isSoftHide ? o().setPrefixedStyle(this.el, "transform", "scale(0)") : this.el.style.display = "none", this._isShown = false);
          } }, { key: "_showByTransform", value: function() {
          } }, { key: "_parseOptionString", value: function(t4) {
            return typeof t4 == "string" && t4.match(/stagger/) && (t4 = o().parseStagger(t4, this._index)), typeof t4 == "string" && t4.match(/rand/) && (t4 = o().parseRand(t4)), t4;
          } }, { key: "_parsePositionOption", value: function(t4, e4) {
            return o().unitOptionMap[t4] && (e4 = o().parseUnit(e4).string), e4;
          } }, { key: "_parseStrokeDashOption", value: function(t4, e4) {
            var r3 = e4;
            if (this._arrayPropertyMap[t4])
              switch (r3 = [], (0, i2.Z)(e4)) {
                case "number":
                  r3.push(o().parseUnit(e4));
                  break;
                case "string":
                  for (var s2 = e4.split(" "), n2 = 0; n2 < s2.length; n2++)
                    r3.push(o().parseUnit(s2[n2]));
              }
            return r3;
          } }, { key: "_isDelta", value: function(t4) {
            var e4 = o().isObject(t4);
            return !(!(e4 = e4 && !t4.unit) || o().isArray(t4) || o().isDOM(t4));
          } }, { key: "_getDelta", value: function(t4, e4) {
            var r3;
            if (t4 !== "left" && t4 !== "top" || this._o.ctx || o().warn("Consider to animate x/y properties instead of left/top,\n        as it would be much more performant", e4), !this._skipPropsDelta || !this._skipPropsDelta[t4]) {
              (r3 = o().parseDelta(t4, e4, this._index)).type != null && (this._deltas[t4] = r3);
              var s2 = (0, i2.Z)(r3.end) === "object" ? r3.end.value === 0 ? 0 : r3.end.string : r3.end;
              this._props[t4] = s2;
            }
          } }, { key: "_extendDefaults", value: function() {
            for (var t4 in this._props = {}, this._deltas = {}, this._defaults) {
              var e4 = this._o[t4] != null ? this._o[t4] : this._defaults[t4];
              this._parseOption(t4, e4);
            }
          } }, { key: "_tuneNewOptions", value: function(t4) {
            for (var e4 in this._hide(), t4)
              t4 && delete this._deltas[e4], this._o[e4] = t4[e4], this._parseOption(e4, t4[e4]);
          } }, { key: "_parseOption", value: function(t4, e4) {
            if (this._isDelta(e4) && !this._skipPropsDelta[t4]) {
              this._getDelta(t4, e4);
              var r3 = o().getDeltaEnd(e4);
              return this._assignProp(t4, this._parseProperty(t4, r3));
            }
            this._assignProp(t4, this._parseProperty(t4, e4));
          } }, { key: "_parsePreArrayProperty", value: function(t4, e4) {
            return e4 = this._parseOptionString(e4), this._parsePositionOption(t4, e4);
          } }, { key: "_parseProperty", value: function(t4, e4) {
            return t4 === "parent" ? o().parseEl(e4) : (e4 = this._parsePreArrayProperty(t4, e4), this._parseStrokeDashOption(t4, e4));
          } }, { key: "_parseDeltaValues", value: function(t4, e4) {
            var r3 = {};
            for (var i3 in e4) {
              var s2 = e4[i3], n2 = this._parsePreArrayProperty(t4, s2);
              r3[this._parsePreArrayProperty(t4, i3)] = n2;
            }
            return r3;
          } }, { key: "_preparsePropValue", value: function(t4, e4) {
            return this._isDelta(e4) ? this._parseDeltaValues(t4, e4) : this._parsePreArrayProperty(t4, e4);
          } }, { key: "_calcCurrentProps", value: function(t4, e4) {
            for (var r3 in this._deltas) {
              var i3 = this._deltas[r3], s2 = !!i3.curve, n2 = i3.easing == null || s2 ? t4 : i3.easing(e4);
              if (i3.type === "array") {
                var a2;
                o().isArray(this._props[r3]) ? (a2 = this._props[r3]).length = 0 : a2 = [];
                for (var l2 = s2 ? i3.curve(e4) : null, u = 0; u < i3.delta.length; u++) {
                  var h = i3.delta[u], p = s2 ? l2 * (i3.start[u].value + e4 * h.value) : i3.start[u].value + n2 * h.value;
                  a2.push({ string: "".concat(p).concat(h.unit), value: p, unit: h.unit });
                }
                this._props[r3] = a2;
              } else if (i3.type === "number")
                this._props[r3] = s2 ? i3.curve(e4) * (i3.start + e4 * i3.delta) : i3.start + n2 * i3.delta;
              else if (i3.type === "unit") {
                var c = s2 ? i3.curve(e4) * (i3.start.value + e4 * i3.delta) : i3.start.value + n2 * i3.delta;
                this._props[r3] = "".concat(c).concat(i3.end.unit);
              } else if (i3.type === "color") {
                var _, f, d, y;
                if (s2) {
                  var v = i3.curve(e4);
                  _ = parseInt(v * (i3.start.r + e4 * i3.delta.r), 10), f = parseInt(v * (i3.start.g + e4 * i3.delta.g), 10), d = parseInt(v * (i3.start.b + e4 * i3.delta.b), 10), y = parseFloat(v * (i3.start.a + e4 * i3.delta.a));
                } else
                  _ = parseInt(i3.start.r + n2 * i3.delta.r, 10), f = parseInt(i3.start.g + n2 * i3.delta.g, 10), d = parseInt(i3.start.b + n2 * i3.delta.b, 10), y = parseFloat(i3.start.a + n2 * i3.delta.a);
                this._props[r3] = "rgba(".concat(_, ",").concat(f, ",").concat(d, ",").concat(y, ")");
              }
            }
          } }, { key: "_setProgress", value: function(t4, e4) {
            this._progress = t4, this._calcCurrentProps(t4, e4);
          } }]), t3;
        }();
      }, 623: (t2, e3, r2) => {
        r2.d(e3, { Z: () => c });
        var i2 = r2(2), s = r2(671), n = r2(144), a = r2(340), o = r2(963), l = r2(120), u = r2(52), h = r2.n(u);
        function p(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r3, i3 = (0, l.Z)(t3);
            if (e4) {
              var s2 = (0, l.Z)(this).constructor;
              r3 = Reflect.construct(i3, arguments, s2);
            } else
              r3 = i3.apply(this, arguments);
            return (0, o.Z)(this, r3);
          };
        }
        const c = function(t3) {
          (0, a.Z)(r3, t3);
          var e4 = p(r3);
          function r3() {
            return (0, s.Z)(this, r3), e4.apply(this, arguments);
          }
          return (0, n.Z)(r3, [{ key: "_declareDefaults", value: function() {
            this._defaults = { ns: "http://www.w3.org/2000/svg", tag: "ellipse", parent: document.body, ratio: 1, radius: 50, radiusX: null, radiusY: null, stroke: "hotpink", "stroke-dasharray": "", "stroke-dashoffset": "", "stroke-linecap": "", "stroke-width": 2, "stroke-opacity": 1, fill: "transparent", "fill-opacity": 1, width: 0, height: 0 }, this._drawMap = ["stroke", "stroke-width", "stroke-opacity", "stroke-dasharray", "fill", "stroke-dashoffset", "stroke-linecap", "fill-opacity", "transform"];
          } }, { key: "_vars", value: function() {
            this._state = {}, this._drawMapLength = this._drawMap.length;
          } }, { key: "_render", value: function() {
            this._isRendered || (this._isRendered = true, this._createSVGCanvas(), this._setCanvasSize(), this._props.parent.appendChild(this._canvas));
          } }, { key: "_createSVGCanvas", value: function() {
            var t4 = this._props;
            this._canvas = document.createElementNS(t4.ns, "svg"), this.el = document.createElementNS(t4.ns, t4.tag), this._canvas.appendChild(this.el);
          } }, { key: "_setCanvasSize", value: function() {
            var t4 = this._canvas.style;
            t4.display = "block", t4.width = "100%", t4.height = "100%", t4.left = "0px", t4.top = "0px";
          } }, { key: "_draw", value: function() {
            this._props.length = this._getLength();
            for (var t4 = this._drawMapLength; t4--; ) {
              var e5 = this._drawMap[t4];
              switch (e5) {
                case "stroke-dasharray":
                case "stroke-dashoffset":
                  this.castStrokeDash(e5);
              }
              this._setAttrIfChanged(e5, this._props[e5]);
            }
            this._state.radius = this._props.radius;
          } }, { key: "castStrokeDash", value: function(t4) {
            var e5 = this._props;
            if (h().isArray(e5[t4])) {
              for (var r4 = "", s2 = 0; s2 < e5[t4].length; s2++) {
                var n2 = e5[t4][s2], a2 = n2.unit === "%" ? this.castPercent(n2.value) : n2.value;
                r4 += "".concat(a2, " ");
              }
              return e5[t4] = r4 === "0 " ? r4 = "" : r4, e5[t4] = r4;
            }
            (0, i2.Z)(e5[t4]) === "object" && (r4 = e5[t4].unit === "%" ? this.castPercent(e5[t4].value) : e5[t4].value, e5[t4] = r4 === 0 ? r4 = "" : r4);
          } }, { key: "castPercent", value: function(t4) {
            return t4 * (this._props.length / 100);
          } }, { key: "_setAttrIfChanged", value: function(t4, e5) {
            this._state[t4] !== e5 && (this.el.setAttribute(t4, e5), this._state[t4] = e5);
          } }, { key: "_getLength", value: function() {
            var t4 = this._props;
            return this.el && this.el.getTotalLength && this.el.getAttribute("d") ? this.el.getTotalLength() : 2 * (t4.radiusX != null ? t4.radiusX : t4.radius);
          } }, { key: "_getPointsPerimiter", value: function(t4) {
            for (var e5 = 0, r4 = 1; r4 < t4.length; r4++)
              e5 += this._pointsDelta(t4[r4 - 1], t4[r4]);
            return e5 += this._pointsDelta(t4[0], h().getLastItem(t4));
          } }, { key: "_pointsDelta", value: function(t4, e5) {
            var r4 = Math.abs(t4.x - e5.x), i3 = Math.abs(t4.y - e5.y);
            return Math.sqrt(r4 * r4 + i3 * i3);
          } }, { key: "_setSize", value: function(t4, e5) {
            var r4 = this._props;
            r4.width = t4, r4.height = e5, this._draw();
          } }]), r3;
        }(r2(973).Z);
      }, 472: (t2, e3, r2) => {
        r2.d(e3, { Z: () => h });
        var i2 = r2(671), s = r2(144), n = r2(752), a = r2(340), o = r2(963), l = r2(120);
        function u(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r3, i3 = (0, l.Z)(t3);
            if (e4) {
              var s2 = (0, l.Z)(this).constructor;
              r3 = Reflect.construct(i3, arguments, s2);
            } else
              r3 = i3.apply(this, arguments);
            return (0, o.Z)(this, r3);
          };
        }
        const h = function(t3) {
          (0, a.Z)(r3, t3);
          var e4 = u(r3);
          function r3() {
            return (0, i2.Z)(this, r3), e4.apply(this, arguments);
          }
          return (0, s.Z)(r3, [{ key: "_declareDefaults", value: function() {
            (0, n.Z)((0, l.Z)(r3.prototype), "_declareDefaults", this).call(this), this._defaults.tag = "path";
          } }, { key: "_draw", value: function() {
            (0, n.Z)((0, l.Z)(r3.prototype), "_draw", this).call(this);
            var t4 = this._props, e5 = t4.radiusX != null ? t4.radiusX : t4.radius, i3 = t4.radiusY != null ? t4.radiusY : t4.radius, s2 = e5 === this._prevRadiusX, a2 = i3 === this._prevRadiusY, o2 = t4.points === this._prevPoints;
            if (!(s2 && a2 && o2)) {
              var u2 = t4.width / 2, h2 = t4.height / 2, p = u2 + e5, c = "M".concat(u2 - e5, " ").concat(h2, " Q ").concat(u2, " ").concat(h2 - 2 * i3, " ").concat(p, " ").concat(h2);
              this.el.setAttribute("d", c), this._prevPoints = t4.points, this._prevRadiusX = e5, this._prevRadiusY = i3;
            }
          } }, { key: "_getLength", value: function() {
            var t4 = this._props, e5 = t4.radiusX != null ? t4.radiusX : t4.radius, r4 = t4.radiusY != null ? t4.radiusY : t4.radius, i3 = e5 + r4, s2 = Math.sqrt((3 * e5 + r4) * (e5 + 3 * r4));
            return 0.5 * Math.PI * (3 * i3 - s2);
          } }]), r3;
        }(r2(623).Z);
      }, 854: (t2, e3, r2) => {
        r2.d(e3, { Z: () => h });
        var i2 = r2(671), s = r2(144), n = r2(752), a = r2(340), o = r2(963), l = r2(120);
        function u(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r3, i3 = (0, l.Z)(t3);
            if (e4) {
              var s2 = (0, l.Z)(this).constructor;
              r3 = Reflect.construct(i3, arguments, s2);
            } else
              r3 = i3.apply(this, arguments);
            return (0, o.Z)(this, r3);
          };
        }
        const h = function(t3) {
          (0, a.Z)(r3, t3);
          var e4 = u(r3);
          function r3() {
            return (0, i2.Z)(this, r3), e4.apply(this, arguments);
          }
          return (0, s.Z)(r3, [{ key: "_declareDefaults", value: function() {
            (0, n.Z)((0, l.Z)(r3.prototype), "_declareDefaults", this).call(this), this._defaults.tag = "path", this._defaults.parent = null;
            for (var t4 = 0; t4 < this._drawMap.length; t4++)
              this._drawMap[t4] === "stroke-width" && this._drawMap.splice(t4, 1);
          } }, { key: "getShape", value: function() {
            return "";
          } }, { key: "getLength", value: function() {
            return 100;
          } }, { key: "_draw", value: function() {
            var t4 = this._props, e5 = this._state, i3 = e5.radiusX !== t4.radiusX, s2 = e5.radiusY !== t4.radiusY, a2 = e5.radius !== t4.radius;
            (i3 || s2 || a2) && (this.el.setAttribute("transform", this._getScale()), e5.radiusX = t4.radiusX, e5.radiusY = t4.radiusY, e5.radius = t4.radius), this._setAttrIfChanged("stroke-width", t4["stroke-width"] / t4.maxScale), (0, n.Z)((0, l.Z)(r3.prototype), "_draw", this).call(this);
          } }, { key: "_render", value: function() {
            if (!this._isRendered) {
              this._isRendered = true, this._length = this.getLength();
              var t4 = this._props;
              t4.parent.innerHTML = '<svg id="js-mojs-shape-canvas" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"><g id="js-mojs-shape-el">'.concat(this.getShape(), "</g></svg>"), this._canvas = t4.parent.querySelector("#js-mojs-shape-canvas"), this.el = t4.parent.querySelector("#js-mojs-shape-el"), this._setCanvasSize();
            }
          } }, { key: "_getScale", value: function() {
            var t4 = this._props, e5 = t4.radiusX ? t4.radiusX : t4.radius, r4 = t4.radiusY ? t4.radiusY : t4.radius;
            t4.scaleX = 2 * e5 / 100, t4.scaleY = 2 * r4 / 100, t4.maxScale = Math.max(t4.scaleX, t4.scaleY), t4.shiftX = t4.width / 2 - 50 * t4.scaleX, t4.shiftY = t4.height / 2 - 50 * t4.scaleY;
            var i3 = "translate(".concat(t4.shiftX, ", ").concat(t4.shiftY, ")");
            return "".concat(i3, " scale(").concat(t4.scaleX, ", ").concat(t4.scaleY, ")");
          } }, { key: "_getLength", value: function() {
            return this._length;
          } }]), r3;
        }(r2(623).Z);
      }, 342: (t2, e3, r2) => {
        r2.d(e3, { Z: () => _ });
        var i2 = r2(671), s = r2(144), n = r2(340), a = r2(963), o = r2(752), l = r2(120), u = r2(52), h = r2.n(u), p = r2(755);
        function c(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r3, i3 = (0, l.Z)(t3);
            if (e4) {
              var s2 = (0, l.Z)(this).constructor;
              r3 = Reflect.construct(i3, arguments, s2);
            } else
              r3 = i3.apply(this, arguments);
            return (0, a.Z)(this, r3);
          };
        }
        const _ = function(t3) {
          (0, n.Z)(r3, t3);
          var e4 = c(r3);
          function r3() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return (0, i2.Z)(this, r3), e4.call(this, t4);
          }
          return (0, s.Z)(r3, [{ key: "add", value: function() {
            for (var t4 = arguments.length, e5 = new Array(t4), r4 = 0; r4 < t4; r4++)
              e5[r4] = arguments[r4];
            return this._pushTimelineArray(e5), this._calcDimentions(), this;
          } }, { key: "append", value: function() {
            for (var t4 = arguments.length, e5 = new Array(t4), r4 = 0; r4 < t4; r4++)
              e5[r4] = arguments[r4];
            for (var i3 = 0, s2 = e5; i3 < s2.length; i3++) {
              var n2 = s2[i3];
              h().isArray(n2) ? this._appendTimelineArray(n2) : this._appendTimeline(n2, this._timelines.length), this._calcDimentions();
            }
            return this;
          } }, { key: "stop", value: function(t4) {
            return (0, o.Z)((0, l.Z)(r3.prototype), "stop", this).call(this, t4), this._stopChildren(t4), this;
          } }, { key: "reset", value: function() {
            return (0, o.Z)((0, l.Z)(r3.prototype), "reset", this).call(this), this._resetChildren(), this;
          } }, { key: "_resetChildren", value: function() {
            for (var t4 = 0; t4 < this._timelines.length; t4++)
              this._timelines[t4].reset();
          } }, { key: "_stopChildren", value: function(t4) {
            for (var e5 = this._timelines.length - 1; e5 >= 0; e5--)
              this._timelines[e5].stop(t4);
          } }, { key: "_appendTimelineArray", value: function(t4) {
            for (var e5 = t4.length, r4 = this._props.repeatTime - this._props.delay, i3 = this._timelines.length; e5--; )
              this._appendTimeline(t4[e5], i3, r4);
          } }, { key: "_appendTimeline", value: function(t4, e5, i3) {
            t4.timeline instanceof r3 && (t4 = t4.timeline), t4.tween instanceof p.Z && (t4 = t4.tween);
            var s2 = i3 != null ? i3 : this._props.duration;
            s2 += t4._props.shiftTime || 0, t4.index = e5, this._pushTimeline(t4, s2);
          } }, { key: "_pushTimelineArray", value: function(t4) {
            for (var e5 = 0; e5 < t4.length; e5++) {
              var r4 = t4[e5];
              h().isArray(r4) ? this._pushTimelineArray(r4) : this._pushTimeline(r4);
            }
          } }, { key: "_pushTimeline", value: function(t4, e5) {
            t4.timeline instanceof r3 && (t4 = t4.timeline), t4.tween instanceof p.Z && (t4 = t4.tween), e5 != null && t4._setProp({ shiftTime: e5 }), this._timelines.push(t4), this._recalcDuration(t4);
          } }, { key: "_setProgress", value: function(t4, e5, r4) {
            this._updateChildren(t4, e5, r4), p.Z.prototype._setProgress.call(this, t4, e5);
          } }, { key: "_updateChildren", value: function(t4, e5, r4) {
            var i3 = e5 > this._prevTime ? -1 : 1;
            this._props.isYoyo && r4 && (i3 *= -1);
            for (var s2 = this._props.startTime + t4 * this._props.duration, n2 = s2 + i3, a2 = this._timelines.length, o2 = 0; o2 < a2; o2++) {
              var l2 = s2 > n2 ? o2 : a2 - 1 - o2;
              this._timelines[l2]._update(s2, n2, this._prevYoyo, this._onEdge);
            }
            this._prevYoyo = r4;
          } }, { key: "_recalcDuration", value: function(t4) {
            var e5 = t4._props, r4 = e5.repeatTime / e5.speed + (e5.shiftTime || 0) + t4._negativeShift;
            this._props.duration = Math.max(r4, this._props.duration);
          } }, { key: "_recalcTotalDuration", value: function() {
            var t4 = this._timelines.length;
            for (this._props.duration = 0; t4--; ) {
              var e5 = this._timelines[t4];
              e5._recalcTotalDuration && e5._recalcTotalDuration(), this._recalcDuration(e5);
            }
            this._calcDimentions();
          } }, { key: "_setStartTime", value: function(t4) {
            var e5 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
            (0, o.Z)((0, l.Z)(r3.prototype), "_setStartTime", this).call(this, t4), this._startTimelines(this._props.startTime, e5);
          } }, { key: "_startTimelines", value: function(t4) {
            var e5 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r4 = this._state === "stop";
            t4 == null && (t4 = this._props.startTime);
            for (var i3 = 0; i3 < this._timelines.length; i3++) {
              var s2 = this._timelines[i3];
              s2._setStartTime(t4, e5), e5 || s2._prevTime == null || r4 || (s2._prevTime = s2._normPrevTimeForward());
            }
          } }, { key: "_refresh", value: function(t4) {
            for (var e5 = this._timelines.length, i3 = 0; i3 < e5; i3++)
              this._timelines[i3]._refresh(t4);
            (0, o.Z)((0, l.Z)(r3.prototype), "_refresh", this).call(this, t4);
          } }, { key: "_declareDefaults", value: function() {
            this._o.duration != null && (h().error('Duration can not be declared on Timeline, but "'.concat(this._o.duration, '" is. You probably want to use Tween instead.')), this._o.duration = 0), (0, o.Z)((0, l.Z)(r3.prototype), "_declareDefaults", this).call(this), this._defaults.duration = 0, this._defaults.easing = "Linear.None", this._defaults.backwardEasing = "Linear.None", this._defaults.nameBase = "Timeline";
          } }, { key: "_vars", value: function() {
            this._timelines = [], (0, o.Z)((0, l.Z)(r3.prototype), "_vars", this).call(this);
          } }]), r3;
        }(p.Z);
      }, 755: (t2, e3, r2) => {
        r2.d(e3, { Z: () => f });
        var i2 = r2(671), s = r2(144), n = r2(326), a = r2(752), o = r2(340), l = r2(963), u = r2(120), h = r2(47), p = r2(283), c = r2.n(p);
        function _(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r3, i3 = (0, u.Z)(t3);
            if (e4) {
              var s2 = (0, u.Z)(this).constructor;
              r3 = Reflect.construct(i3, arguments, s2);
            } else
              r3 = i3.apply(this, arguments);
            return (0, l.Z)(this, r3);
          };
        }
        const f = function(t3) {
          (0, o.Z)(r3, t3);
          var e4 = _(r3);
          function r3() {
            var t4, s2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return (0, i2.Z)(this, r3), (t4 = e4.call(this, s2))._props.name == null && t4._setSelfName(), (0, l.Z)(t4, (0, n.Z)(t4));
          }
          return (0, s.Z)(r3, [{ key: "_declareDefaults", value: function() {
            this._defaults = { duration: 350, delay: 0, repeat: 0, speed: 1, isYoyo: false, easing: "Sin.Out", backwardEasing: null, name: null, nameBase: "Tween", onProgress: null, onStart: null, onRefresh: null, onComplete: null, onRepeatStart: null, onRepeatComplete: null, onFirstUpdate: null, onUpdate: null, isChained: false, onPlaybackStart: null, onPlaybackPause: null, onPlaybackStop: null, onPlaybackComplete: null, callbacksContext: null };
          } }, { key: "play", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return this._state === "play" && this._isRunning || (this._props.isReversed = false, this._subPlay(t4, "play"), this._setPlaybackState("play")), this;
          } }, { key: "playBackward", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return this._state === "reverse" && this._isRunning || (this._props.isReversed = true, this._subPlay(t4, "reverse"), this._setPlaybackState("reverse")), this;
          } }, { key: "pause", value: function() {
            return this._state === "pause" || this._state === "stop" || (this._removeFromTweener(), this._setPlaybackState("pause")), this;
          } }, { key: "stop", value: function(t4) {
            if (this._state === "stop")
              return this;
            this._wasUknownUpdate = void 0;
            var e5 = t4 != null ? t4 : this._state === "reverse" ? 1 : 0;
            return this.setProgress(e5), this.reset(), this;
          } }, { key: "replay", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return this.reset(), this.play(t4), this;
          } }, { key: "replayBackward", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return this.reset(), this.playBackward(t4), this;
          } }, { key: "resume", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            if (this._state !== "pause")
              return this;
            switch (this._prevState) {
              case "play":
                this.play(t4);
                break;
              case "reverse":
                this.playBackward(t4);
            }
            return this;
          } }, { key: "setProgress", value: function(t4) {
            var e5 = this._props;
            return !e5.startTime && this._setStartTime(), this._playTime = null, t4 < 0 && (t4 = 0), t4 > 1 && (t4 = 1), this._update(e5.startTime - e5.delay + t4 * e5.repeatTime), this;
          } }, { key: "setSpeed", value: function(t4) {
            return this._props.speed = t4, this._state !== "play" && this._state !== "reverse" || this._setResumeTime(this._state), this;
          } }, { key: "reset", value: function() {
            return this._removeFromTweener(), this._setPlaybackState("stop"), this._progressTime = 0, this._isCompleted = false, this._isStarted = false, this._isFirstUpdate = false, this._wasUknownUpdate = void 0, this._prevTime = void 0, this._prevYoyo = void 0, this._props.isReversed = false, this;
          } }, { key: "_subPlay", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e5 = arguments.length > 1 ? arguments[1] : void 0, r4 = this._props, i3 = this._state, s2 = this._prevState, n2 = i3 === "pause", a2 = i3 === "play" || n2 && s2 === "play", o2 = i3 === "reverse" || n2 && s2 === "reverse", l2 = a2 && e5 === "reverse" || o2 && e5 === "play";
            return this._progressTime = this._progressTime >= r4.repeatTime ? 0 : this._progressTime, l2 && (this._progressTime = r4.repeatTime - this._progressTime), this._setResumeTime(e5, t4), h.Z.add(this), this;
          } }, { key: "_setResumeTime", value: function(t4) {
            var e5 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            this._resumeTime = performance.now();
            var r4 = this._resumeTime - Math.abs(e5) - this._progressTime;
            this._setStartTime(r4, false), this._prevTime != null && (this._prevTime = t4 === "play" ? this._normPrevTimeForward() : this._props.endTime - this._progressTime);
          } }, { key: "_normPrevTimeForward", value: function() {
            var t4 = this._props;
            return t4.startTime + this._progressTime - t4.delay;
          } }, { key: "_setSelfName", value: function() {
            var t4 = "_".concat(this._props.nameBase, "s");
            h.Z[t4] = h.Z[t4] == null ? 1 : ++h.Z[t4], this._props.name = "".concat(this._props.nameBase, " ").concat(h.Z[t4]);
          } }, { key: "_setPlaybackState", value: function(t4) {
            this._prevState = this._state, this._state = t4;
            var e5 = this._prevState === "pause", r4 = this._prevState === "stop", i3 = this._prevState === "play", s2 = this._prevState === "reverse", n2 = i3 || s2;
            t4 !== "play" && t4 !== "reverse" || !(r4 || e5) || this._playbackStart(), t4 === "pause" && n2 && this._playbackPause(), t4 === "stop" && (n2 || e5) && this._playbackStop();
          } }, { key: "_vars", value: function() {
            return this.progress = 0, this._prevTime = void 0, this._progressTime = 0, this._negativeShift = 0, this._state = "stop", this._props.delay < 0 && (this._negativeShift = this._props.delay, this._props.delay = 0), this._calcDimentions();
          } }, { key: "_calcDimentions", value: function() {
            this._props.time = this._props.duration + this._props.delay, this._props.repeatTime = this._props.time * (this._props.repeat + 1);
          } }, { key: "_extendDefaults", value: function() {
            this._callbackOverrides = this._o.callbackOverrides || {}, delete this._o.callbackOverrides, (0, a.Z)((0, u.Z)(r3.prototype), "_extendDefaults", this).call(this);
            var t4 = this._props;
            t4.easing = c().parseEasing(t4.easing), t4.easing._parent = this, t4.backwardEasing != null && (t4.backwardEasing = c().parseEasing(t4.backwardEasing), t4.backwardEasing._parent = this);
          } }, { key: "_setStartTime", value: function(t4) {
            var e5 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], r4 = this._props, i3 = r4.shiftTime || 0;
            e5 && (this._isCompleted = false, this._isRepeatCompleted = false, this._isStarted = false);
            var s2 = t4 == null ? performance.now() : t4;
            return r4.startTime = s2 + r4.delay + this._negativeShift + i3, r4.endTime = r4.startTime + r4.repeatTime - r4.delay, this._playTime = this._resumeTime != null ? this._resumeTime : s2 + i3, this._resumeTime = null, this;
          } }, { key: "_update", value: function(t4, e5, r4, i3) {
            var s2 = this._props;
            this._prevTime == null && e5 != null && (this._props.speed && this._playTime && (this._prevTime = this._playTime + this._props.speed * (e5 - this._playTime)), this._wasUknownUpdate = true);
            var n2 = s2.startTime - s2.delay;
            if (s2.speed && this._playTime && (t4 = this._playTime + s2.speed * (t4 - this._playTime)), Math.abs(s2.endTime - t4) < 1e-8 && (t4 = s2.endTime), i3 && r4 != null) {
              var a2 = this._getPeriod(t4), o2 = !(!s2.isYoyo || !this._props.repeat || a2 % 2 != 1);
              if (this._timelines)
                for (var l2 = 0; l2 < this._timelines.length; l2++)
                  this._timelines[l2]._update(t4, e5, r4, i3);
              i3 === 1 ? r4 ? (this._prevTime = t4 + 1, this._repeatStart(t4, o2), this._start(t4, o2)) : (this._prevTime = t4 - 1, this._repeatComplete(t4, o2), this._complete(t4, o2)) : i3 === -1 && (r4 ? (this._prevTime = t4 - 1, this._repeatComplete(t4, o2), this._complete(t4, o2)) : this._prevTime >= s2.startTime && this._prevTime <= s2.endTime && (this._prevTime = t4 + 1, this._repeatStart(t4, o2), this._start(t4, o2), this._isCompleted = true)), this._prevTime = void 0;
            }
            return t4 > n2 && t4 < s2.endTime ? this._progressTime = t4 - n2 : t4 <= n2 ? this._progressTime = 0 : t4 >= s2.endTime && (this._progressTime = s2.repeatTime + 1e-11), s2.isReversed && (t4 = s2.endTime - this._progressTime), this._prevTime == null ? (this._prevTime = t4, this._wasUknownUpdate = true, false) : (t4 >= n2 && t4 <= s2.endTime && this._progress((t4 - n2) / s2.repeatTime, t4), t4 >= s2.startTime && t4 <= s2.endTime ? this._updateInActiveArea(t4) : this._isInActiveArea ? this._updateInInactiveArea(t4) : this._isRefreshed || t4 < s2.startTime && this.progress !== 0 && (this._refresh(true), this._isRefreshed = true), this._prevTime = t4, t4 >= s2.endTime || t4 <= n2);
          } }, { key: "_updateInInactiveArea", value: function(t4) {
            if (this._isInActiveArea) {
              var e5 = this._props;
              if (t4 > e5.endTime && !this._isCompleted) {
                this._progress(1, t4);
                var r4 = this._getPeriod(e5.endTime), i3 = e5.isYoyo && r4 % 2 == 0;
                this._setProgress(i3 ? 0 : 1, t4, i3), this._repeatComplete(t4, i3), this._complete(t4, i3);
              }
              t4 < this._prevTime && t4 < e5.startTime && !this._isStarted && !this._isCompleted && (this._progress(0, t4, false), this._setProgress(0, t4, false), this._isRepeatStart = false, this._repeatStart(t4, false), this._start(t4, false)), this._isInActiveArea = false;
            }
          } }, { key: "_updateInActiveArea", value: function(t4) {
            var e5 = this._props, r4 = e5.delay + e5.duration, i3 = e5.startTime - e5.delay, s2 = (t4 - e5.startTime + e5.delay) % r4, n2 = Math.round((e5.endTime - e5.startTime + e5.delay) / r4), a2 = this._getPeriod(t4), o2 = this._delayT, l2 = this._getPeriod(this._prevTime), u2 = this._delayT, h2 = e5.isYoyo && a2 % 2 == 1, p2 = e5.isYoyo && l2 % 2 == 1, c2 = h2 ? 1 : 0;
            if (t4 === e5.endTime)
              return this._wasUknownUpdate = false, h2 = e5.isYoyo && (a2 - 1) % 2 == 1, this._setProgress(h2 ? 0 : 1, t4, h2), t4 > this._prevTime && (this._isRepeatCompleted = false), this._repeatComplete(t4, h2), this._complete(t4, h2);
            if (this._isCompleted = false, this._isRefreshed = false, i3 + s2 >= e5.startTime) {
              this._isInActiveArea = true, this._isRepeatCompleted = false, this._isRepeatStart = false, this._isStarted = false;
              var _2 = (t4 - e5.startTime) % r4 / e5.duration, f2 = a2 > 0 && l2 < a2, d = l2 > a2;
              if (this._onEdge = 0, f2 && (this._onEdge = 1), d && (this._onEdge = -1), this._wasUknownUpdate && (t4 > this._prevTime && (this._start(t4, h2), this._repeatStart(t4, h2), this._firstUpdate(t4, h2)), t4 < this._prevTime && (this._complete(t4, h2), this._repeatComplete(t4, h2), this._firstUpdate(t4, h2), this._isCompleted = false)), f2) {
                if (this.progress !== 1) {
                  var y = e5.isYoyo && (a2 - 1) % 2 == 1;
                  this._repeatComplete(t4, y);
                }
                l2 >= 0 && this._repeatStart(t4, h2);
              }
              t4 > this._prevTime && (!this._isStarted && this._prevTime <= e5.startTime && (this._start(t4, h2), this._repeatStart(t4, h2), this._isStarted = false, this._isRepeatStart = false), this._firstUpdate(t4, h2)), d && (this.progress !== 0 && this.progress !== 1 && l2 != n2 && this._repeatStart(t4, p2), l2 !== n2 || this._wasUknownUpdate || (this._complete(t4, h2), this._repeatComplete(t4, h2), this._firstUpdate(t4, h2), this._isCompleted = false), this._repeatComplete(t4, h2)), l2 === "delay" && (a2 < u2 && this._repeatComplete(t4, h2), a2 === u2 && a2 > 0 && this._repeatStart(t4, h2)), t4 > this._prevTime ? (_2 === 0 && this._repeatStart(t4, h2), t4 !== e5.endTime && this._setProgress(h2 ? 1 - _2 : _2, t4, h2)) : (t4 !== e5.endTime && this._setProgress(h2 ? 1 - _2 : _2, t4, h2), _2 === 0 && this._repeatStart(t4, h2)), t4 === e5.startTime && this._start(t4, h2);
            } else if (this._isInActiveArea) {
              var v = a2 === "delay" ? o2 : a2, m = t4 > this._prevTime;
              m && v--, c2 = e5.isYoyo && v % 2 == 1 ? 1 : 0, t4 < this._prevTime && (this._setProgress(c2, t4, c2 === 1), this._repeatStart(t4, c2 === 1)), this._setProgress(m ? 1 - c2 : c2, t4, c2 === 1), t4 > this._prevTime && (this.progress === 0 && c2 !== 1 || this._repeatComplete(t4, c2 === 1)), this._isInActiveArea = false;
            }
            this._wasUknownUpdate = false;
          } }, { key: "_removeFromTweener", value: function() {
            return h.Z.remove(this), this;
          } }, { key: "_getPeriod", value: function(t4) {
            var e5 = this._props, r4 = e5.delay + e5.duration, i3 = e5.delay + t4 - e5.startTime, s2 = i3 / r4, n2 = t4 < e5.endTime ? i3 % r4 : 0;
            return s2 = t4 >= e5.endTime ? Math.round(s2) : Math.floor(s2), t4 > e5.endTime ? s2 = Math.round((e5.endTime - e5.startTime + e5.delay) / r4) : n2 > 0 && n2 < e5.delay && (this._delayT = s2, s2 = "delay"), s2;
          } }, { key: "_setProgress", value: function(t4, e5, r4) {
            var i3 = this._props, s2 = i3.wasYoyo !== r4, n2 = e5 > this._prevTime;
            if (this.progress = t4, n2 && !r4 || !n2 && r4)
              this.easedProgress = i3.easing(t4);
            else if (!n2 && !r4 || n2 && r4) {
              var a2 = i3.backwardEasing != null ? i3.backwardEasing : i3.easing;
              this.easedProgress = a2(t4);
            }
            return (i3.prevEasedProgress !== this.easedProgress || s2) && i3.onUpdate != null && typeof i3.onUpdate == "function" && i3.onUpdate.call(i3.callbacksContext || this, this.easedProgress, this.progress, n2, r4), i3.prevEasedProgress = this.easedProgress, i3.wasYoyo = r4, this;
          } }, { key: "_start", value: function(t4, e5) {
            if (!this._isStarted) {
              var r4 = this._props;
              r4.onStart != null && typeof r4.onStart == "function" && r4.onStart.call(r4.callbacksContext || this, t4 > this._prevTime, e5), this._isCompleted = false, this._isStarted = true, this._isFirstUpdate = false;
            }
          } }, { key: "_playbackStart", value: function() {
            var t4 = this._props;
            t4.onPlaybackStart != null && typeof t4.onPlaybackStart == "function" && t4.onPlaybackStart.call(t4.callbacksContext || this);
          } }, { key: "_playbackPause", value: function() {
            var t4 = this._props;
            t4.onPlaybackPause != null && typeof t4.onPlaybackPause == "function" && t4.onPlaybackPause.call(t4.callbacksContext || this);
          } }, { key: "_playbackStop", value: function() {
            var t4 = this._props;
            t4.onPlaybackStop != null && typeof t4.onPlaybackStop == "function" && t4.onPlaybackStop.call(t4.callbacksContext || this);
          } }, { key: "_playbackComplete", value: function() {
            var t4 = this._props;
            t4.onPlaybackComplete != null && typeof t4.onPlaybackComplete == "function" && t4.onPlaybackComplete.call(t4.callbacksContext || this);
          } }, { key: "_complete", value: function(t4, e5) {
            if (!this._isCompleted) {
              var r4 = this._props;
              r4.onComplete != null && typeof r4.onComplete == "function" && r4.onComplete.call(r4.callbacksContext || this, t4 > this._prevTime, e5), this._isCompleted = true, this._isStarted = false, this._isFirstUpdate = false, this._prevYoyo = void 0;
            }
          } }, { key: "_firstUpdate", value: function(t4, e5) {
            if (!this._isFirstUpdate) {
              var r4 = this._props;
              r4.onFirstUpdate != null && typeof r4.onFirstUpdate == "function" && (r4.onFirstUpdate.tween = this, r4.onFirstUpdate.call(r4.callbacksContext || this, t4 > this._prevTime, e5)), this._isFirstUpdate = true;
            }
          } }, { key: "_repeatComplete", value: function(t4, e5) {
            if (!this._isRepeatCompleted) {
              var r4 = this._props;
              r4.onRepeatComplete != null && typeof r4.onRepeatComplete == "function" && r4.onRepeatComplete.call(r4.callbacksContext || this, t4 > this._prevTime, e5), this._isRepeatCompleted = true;
            }
          } }, { key: "_repeatStart", value: function(t4, e5) {
            if (!this._isRepeatStart) {
              var r4 = this._props;
              r4.onRepeatStart != null && typeof r4.onRepeatStart == "function" && r4.onRepeatStart.call(r4.callbacksContext || this, t4 > this._prevTime, e5), this._isRepeatStart = true;
            }
          } }, { key: "_progress", value: function(t4, e5) {
            var r4 = this._props;
            r4.onProgress != null && typeof r4.onProgress == "function" && r4.onProgress.call(r4.callbacksContext || this, t4, e5 > this._prevTime);
          } }, { key: "_refresh", value: function(t4) {
            var e5 = this._props;
            if (e5.onRefresh != null) {
              var r4 = e5.callbacksContext || this, i3 = t4 ? 0 : 1;
              e5.onRefresh.call(r4, t4, e5.easing(i3), i3);
            }
          } }, { key: "_onTweenerRemove", value: function() {
          } }, { key: "_onTweenerFinish", value: function() {
            this._setPlaybackState("stop"), this._playbackComplete();
          } }, { key: "_setProp", value: function(t4, e5) {
            (0, a.Z)((0, u.Z)(r3.prototype), "_setProp", this).call(this, t4, e5), this._calcDimentions();
          } }, { key: "_assignProp", value: function(t4, e5) {
            e5 == null && (e5 = this._defaults[t4]), t4 === "easing" && ((e5 = c().parseEasing(e5))._parent = this);
            var i3 = this._callbackOverrides[t4], s2 = !e5 || !e5.isMojsCallbackOverride;
            i3 && s2 && (e5 = this._overrideCallback(e5, i3)), (0, a.Z)((0, u.Z)(r3.prototype), "_assignProp", this).call(this, t4, e5);
          } }, { key: "_overrideCallback", value: function(t4, e5) {
            var r4 = t4 && typeof t4 == "function", i3 = function() {
              r4 && t4.apply(this, arguments), e5.apply(this, arguments);
            };
            return i3.isMojsCallbackOverride = true, i3;
          } }]), r3;
        }(r2(973).Z);
      }, 47: (t2, e3, r2) => {
        r2.d(e3, { Z: () => n });
        var i2 = r2(671), s = r2(144);
        const n = new (function() {
          function t3() {
            return (0, i2.Z)(this, t3), this._vars(), this._listenVisibilityChange(), this;
          }
          return (0, s.Z)(t3, [{ key: "_vars", value: function() {
            this.tweens = [], this._savedTweens = [], this._loop = this._loop.bind(this), this._onVisibilityChange = this._onVisibilityChange.bind(this);
          } }, { key: "_loop", value: function() {
            return !!this._isRunning && (this._update(window.performance.now()), this.tweens.length ? (requestAnimationFrame(this._loop), this) : this._isRunning = false);
          } }, { key: "_startLoop", value: function() {
            this._isRunning || (this._isRunning = true, requestAnimationFrame(this._loop));
          } }, { key: "_stopLoop", value: function() {
            this._isRunning = false;
          } }, { key: "_update", value: function(t4) {
            for (var e4 = this.tweens.length; e4--; ) {
              var r3 = this.tweens[e4];
              r3 && r3._update(t4) === true && (this.remove(r3), r3._onTweenerFinish(), r3._prevTime = void 0);
            }
          } }, { key: "add", value: function(t4) {
            t4._isRunning || (t4._isRunning = true, this.tweens.push(t4), this._startLoop());
          } }, { key: "removeAll", value: function() {
            this.tweens.length = 0;
          } }, { key: "remove", value: function(t4) {
            var e4 = typeof t4 == "number" ? t4 : this.tweens.indexOf(t4);
            e4 !== -1 && (t4 = this.tweens[e4]) && (t4._isRunning = false, this.tweens.splice(e4, 1), t4._onTweenerRemove());
          } }, { key: "_listenVisibilityChange", value: function() {
            document.hidden !== void 0 ? (this._visibilityHidden = "hidden", this._visibilityChange = "visibilitychange") : document.mozHidden !== void 0 ? (this._visibilityHidden = "mozHidden", this._visibilityChange = "mozvisibilitychange") : document.msHidden !== void 0 ? (this._visibilityHidden = "msHidden", this._visibilityChange = "msvisibilitychange") : document.webkitHidden !== void 0 && (this._visibilityHidden = "webkitHidden", this._visibilityChange = "webkitvisibilitychange"), document.addEventListener(this._visibilityChange, this._onVisibilityChange, false);
          } }, { key: "_onVisibilityChange", value: function() {
            document[this._visibilityHidden] ? this._savePlayingTweens() : this._restorePlayingTweens();
          } }, { key: "_savePlayingTweens", value: function() {
            this._savedTweens = this.tweens.slice(0);
            for (var t4 = 0; t4 < this._savedTweens.length; t4++)
              this._savedTweens[t4].pause();
          } }, { key: "_restorePlayingTweens", value: function() {
            for (var t4 = 0; t4 < this._savedTweens.length; t4++)
              this._savedTweens[t4].resume();
          } }]), t3;
        }())();
      }, 977: (t2, e3, r2) => {
        var i2, s;
        s = r2(52), i2 = new (function() {
          function t3(t4) {
            return this.vars(), this.generate;
          }
          return t3.prototype.vars = function() {
            return this.generate = s.bind(this.generate, this);
          }, t3.prototype.generate = function(t4, e4, r3, i3) {
            var s2, n, a, o, l, u, h, p, c, _, f, d, y, v, m, g, k, w, b, S, P, T, x, C;
            if (arguments.length < 4)
              return this.error("Bezier function expects 4 arguments");
            for (k = w = 0; w < 4; k = ++w)
              if (typeof (c = arguments[k]) != "number" || isNaN(c) || !isFinite(c))
                return this.error("Bezier function expects 4 arguments");
            return t4 < 0 || t4 > 1 || r3 < 0 || r3 > 1 ? this.error("Bezier x values should be > 0 and < 1") : (o = 4, l = 1e-3, h = 1e-7, u = 10, b = 1 / ((S = 11) - 1), v = !!Float32Array, s2 = function(t5, e5) {
              return 1 - 3 * e5 + 3 * t5;
            }, n = function(t5, e5) {
              return 3 * e5 - 6 * t5;
            }, a = function(t5) {
              return 3 * t5;
            }, f = function(t5, e5, r4) {
              return ((s2(e5, r4) * t5 + n(e5, r4)) * t5 + a(e5)) * t5;
            }, m = function(t5, e5, r4) {
              return 3 * s2(e5, r4) * t5 * t5 + 2 * n(e5, r4) * t5 + a(e5);
            }, T = function(e5, i4) {
              var s3;
              for (k = 0; k < o; ) {
                if ((s3 = m(i4, t4, r3)) === 0)
                  return i4;
                i4 -= (f(i4, t4, r3) - e5) / s3, ++k;
              }
              return i4;
            }, d = function() {
              for (k = 0; k < S; )
                P[k] = f(k * b, t4, r3), ++k;
            }, _ = function(e5, i4, s3) {
              var n2, a2;
              for (a2 = void 0, n2 = void 0, k = 0; (a2 = f(n2 = i4 + (s3 - i4) / 2, t4, r3) - e5) > 0 ? s3 = n2 : i4 = n2, Math.abs(a2) > h && ++k < u; )
                ;
              return n2;
            }, g = function(e5) {
              var i4, s3, n2, a2, o2, u2, h2;
              for (u2 = 0, i4 = 1, h2 = S - 1; i4 !== h2 && P[i4] <= e5; )
                u2 += b, ++i4;
              return --i4, s3 = P[i4 + 1] - P[i4], n2 = (e5 - P[i4]) / s3, (o2 = m(a2 = u2 + n2 * b, t4, r3)) >= l ? T(e5, a2) : o2 === 0 ? a2 : _(e5, u2, u2 + b);
            }, x = function() {
              if (t4 !== e4 || r3 !== i3)
                return d();
            }, P = v ? new Float32Array(S) : new Array(S), p = false, C = "bezier(" + [t4, e4, r3, i3] + ")", (y = function(s3) {
              return p || x(), t4 === e4 && r3 === i3 ? s3 : s3 === 0 ? 0 : s3 === 1 ? 1 : f(g(s3), e4, i3);
            }).toStr = function() {
              return C;
            }, y);
          }, t3.prototype.error = function(t4) {
            return s.error(t4);
          }, t3;
        }())(), t2.exports = i2;
      }, 283: (t2, e3, r2) => {
        var i2, s, n, a, o, l, u, h, p;
        u = r2(52), o = r2(977), n = r2(162), h = r2(440), a = r2(50).Z, p = Math.sin, s = Math.PI, i2 = function() {
          function t3() {
          }
          return t3.prototype.bezier = o, t3.prototype.PathEasing = n, t3.prototype.path = new n("creator").create, t3.prototype.approximate = a, t3.prototype.inverse = function(t4) {
            return 1 - t4;
          }, t3.prototype.linear = { none: function(t4) {
            return t4;
          } }, t3.prototype.ease = { in: o.apply(t3, [0.42, 0, 1, 1]), out: o.apply(t3, [0, 0, 0.58, 1]), inout: o.apply(t3, [0.42, 0, 0.58, 1]) }, t3.prototype.sin = { in: function(t4) {
            return 1 - Math.cos(t4 * s / 2);
          }, out: function(t4) {
            return p(t4 * s / 2);
          }, inout: function(t4) {
            return 0.5 * (1 - Math.cos(s * t4));
          } }, t3.prototype.quad = { in: function(t4) {
            return t4 * t4;
          }, out: function(t4) {
            return t4 * (2 - t4);
          }, inout: function(t4) {
            return (t4 *= 2) < 1 ? 0.5 * t4 * t4 : -0.5 * (--t4 * (t4 - 2) - 1);
          } }, t3.prototype.cubic = { in: function(t4) {
            return t4 * t4 * t4;
          }, out: function(t4) {
            return --t4 * t4 * t4 + 1;
          }, inout: function(t4) {
            return (t4 *= 2) < 1 ? 0.5 * t4 * t4 * t4 : 0.5 * ((t4 -= 2) * t4 * t4 + 2);
          } }, t3.prototype.quart = { in: function(t4) {
            return t4 * t4 * t4 * t4;
          }, out: function(t4) {
            return 1 - --t4 * t4 * t4 * t4;
          }, inout: function(t4) {
            return (t4 *= 2) < 1 ? 0.5 * t4 * t4 * t4 * t4 : -0.5 * ((t4 -= 2) * t4 * t4 * t4 - 2);
          } }, t3.prototype.quint = { in: function(t4) {
            return t4 * t4 * t4 * t4 * t4;
          }, out: function(t4) {
            return --t4 * t4 * t4 * t4 * t4 + 1;
          }, inout: function(t4) {
            return (t4 *= 2) < 1 ? 0.5 * t4 * t4 * t4 * t4 * t4 : 0.5 * ((t4 -= 2) * t4 * t4 * t4 * t4 + 2);
          } }, t3.prototype.expo = { in: function(t4) {
            return t4 === 0 ? 0 : Math.pow(1024, t4 - 1);
          }, out: function(t4) {
            return t4 === 1 ? 1 : 1 - Math.pow(2, -10 * t4);
          }, inout: function(t4) {
            return t4 === 0 ? 0 : t4 === 1 ? 1 : (t4 *= 2) < 1 ? 0.5 * Math.pow(1024, t4 - 1) : 0.5 * (2 - Math.pow(2, -10 * (t4 - 1)));
          } }, t3.prototype.circ = { in: function(t4) {
            return 1 - Math.sqrt(1 - t4 * t4);
          }, out: function(t4) {
            return Math.sqrt(1 - --t4 * t4);
          }, inout: function(t4) {
            return (t4 *= 2) < 1 ? -0.5 * (Math.sqrt(1 - t4 * t4) - 1) : 0.5 * (Math.sqrt(1 - (t4 -= 2) * t4) + 1);
          } }, t3.prototype.back = { in: function(t4) {
            var e4;
            return t4 * t4 * ((1 + (e4 = 1.70158)) * t4 - e4);
          }, out: function(t4) {
            var e4;
            return --t4 * t4 * ((1 + (e4 = 1.70158)) * t4 + e4) + 1;
          }, inout: function(t4) {
            var e4;
            return e4 = 2.5949095, (t4 *= 2) < 1 ? t4 * t4 * ((e4 + 1) * t4 - e4) * 0.5 : 0.5 * ((t4 -= 2) * t4 * ((e4 + 1) * t4 + e4) + 2);
          } }, t3.prototype.elastic = { in: function(t4) {
            return t4 === 0 ? 0 : t4 === 1 ? 1 : -1 * Math.pow(2, 10 * (t4 -= 1)) * Math.sin((t4 - 0.1) * (2 * Math.PI) / 0.4);
          }, out: function(t4) {
            return t4 === 0 ? 0 : t4 === 1 ? 1 : 1 * Math.pow(2, -10 * t4) * Math.sin((t4 - 0.1) * (2 * Math.PI) / 0.4) + 1;
          }, inout: function(t4) {
            return t4 === 0 ? 0 : t4 === 1 ? 1 : (t4 *= 2) < 1 ? 1 * Math.pow(2, 10 * (t4 -= 1)) * Math.sin((t4 - 0.1) * (2 * Math.PI) / 0.4) * -0.5 : 1 * Math.pow(2, -10 * (t4 -= 1)) * Math.sin((t4 - 0.1) * (2 * Math.PI) / 0.4) * 0.5 + 1;
          } }, t3.prototype.bounce = { in: function(t4) {
            return 1 - l.bounce.out(1 - t4);
          }, out: function(t4) {
            return t4 < 1 / 2.75 ? 7.5625 * t4 * t4 : t4 < 2 / 2.75 ? 7.5625 * (t4 -= 1.5 / 2.75) * t4 + 0.75 : t4 < 2.5 / 2.75 ? 7.5625 * (t4 -= 2.25 / 2.75) * t4 + 0.9375 : 7.5625 * (t4 -= 2.625 / 2.75) * t4 + 0.984375;
          }, inout: function(t4) {
            return t4 < 0.5 ? 0.5 * l.bounce.in(2 * t4) : 0.5 * l.bounce.out(2 * t4 - 1) + 0.5;
          } }, t3.prototype.parseEasing = function(t4) {
            var e4;
            return t4 == null && (t4 = "linear.none"), typeof t4 == "string" ? t4.charAt(0).toLowerCase() === "m" ? this.path(t4) : (e4 = this[(t4 = this._splitEasing(t4))[0]]) ? e4[t4[1]] : (u.error('Easing with name "' + t4[0] + '" was not found, fallback to "linear.none" instead'), this.linear.none) : u.isArray(t4) ? this.bezier.apply(this, t4) : t4;
          }, t3.prototype._splitEasing = function(t4) {
            var e4;
            return typeof t4 == "function" ? t4 : typeof t4 == "string" && t4.length ? [(e4 = t4.split("."))[0].toLowerCase() || "linear", e4[1].toLowerCase() || "none"] : ["linear", "none"];
          }, t3;
        }(), (l = new i2()).mix = h(l), t2.exports = l;
      }, 440: (t2) => {
        var e3, r2, i2, s, n, a, o = [].slice;
        r2 = null, n = function(t3) {
          return typeof t3.value == "number" ? t3.value : r2.parseEasing(t3.value);
        }, a = function(t3, e4) {
          var r3;
          return t3.value = n(t3), e4.value = n(e4), r3 = 0, t3.to < e4.to && (r3 = -1), t3.to > e4.to && (r3 = 1), r3;
        }, i2 = function(t3, e4) {
          var r3, i3, s2, n2;
          for (i3 = 0, r3 = s2 = 0, n2 = t3.length; s2 < n2 && (i3 = r3, !(t3[r3].to > e4)); r3 = ++s2)
            ;
          return i3;
        }, s = function() {
          var t3;
          return (t3 = 1 <= arguments.length ? o.call(arguments, 0) : []).length > 1 ? t3 = t3.sort(a) : t3[0].value = n(t3[0]), function(e4) {
            var r3, s2;
            if ((r3 = i2(t3, e4)) !== -1)
              return s2 = t3[r3].value, r3 === t3.length - 1 && e4 > t3[r3].to ? 1 : typeof s2 == "function" ? s2(e4) : s2;
          };
        }, e3 = function(t3) {
          return r2 = t3, s;
        }, t2.exports = e3;
      }, 162: (t2, e3, r2) => {
        var i2, s;
        s = r2(52), i2 = function() {
          function t3(t4, e4) {
            if (this.o = e4 != null ? e4 : {}, t4 !== "creator") {
              if (this.path = s.parsePath(t4), this.path == null)
                return s.error("Error while parsing the path");
              this._vars(), this.path.setAttribute("d", this._normalizePath(this.path.getAttribute("d"))), this.pathLength = this.path.getTotalLength(), this.sample = s.bind(this.sample, this), this._hardSample = s.bind(this._hardSample, this), this._preSample();
            }
          }
          return t3.prototype._vars = function() {
            return this._precompute = s.clamp(this.o.precompute || 1450, 100, 1e4), this._step = 1 / this._precompute, this._rect = this.o.rect || 100, this._approximateMax = this.o.approximateMax || 5, this._eps = this.o.eps || 1e-3, this._boundsPrevProgress = -1;
          }, t3.prototype._preSample = function() {
            var t4, e4, r3, i3, s2, n, a;
            for (this._samples = [], a = [], t4 = e4 = 0, n = this._precompute; 0 <= n ? e4 <= n : e4 >= n; t4 = 0 <= n ? ++e4 : --e4)
              s2 = t4 * this._step, r3 = this.pathLength * s2, i3 = this.path.getPointAtLength(r3), a.push(this._samples[t4] = { point: i3, length: r3, progress: s2 });
            return a;
          }, t3.prototype._findBounds = function(t4, e4) {
            var r3, i3, s2, n, a, o, l, u, h, p, c, _, f;
            if (e4 === this._boundsPrevProgress)
              return this._prevBounds;
            for (this._boundsStartIndex == null && (this._boundsStartIndex = 0), o = t4.length, this._boundsPrevProgress > e4 ? (l = 0, i3 = "reverse") : (l = o, i3 = "forward"), i3 === "forward" ? (_ = t4[0], s2 = t4[t4.length - 1]) : (_ = t4[t4.length - 1], s2 = t4[0]), n = a = p = this._boundsStartIndex, c = l; p <= c ? a < c : a > c; n = p <= c ? ++a : --a) {
              if (h = (f = t4[n]).point.x / this._rect, u = e4, i3 === "reverse" && (r3 = h, h = u, u = r3), !(h < u)) {
                s2 = f;
                break;
              }
              _ = f, this._boundsStartIndex = n;
            }
            return this._boundsPrevProgress = e4, this._prevBounds = { start: _, end: s2 };
          }, t3.prototype.sample = function(t4) {
            var e4, r3;
            return t4 = s.clamp(t4, 0, 1), e4 = this._findBounds(this._samples, t4), (r3 = this._checkIfBoundsCloseEnough(t4, e4)) != null ? r3 : this._findApproximate(t4, e4.start, e4.end);
          }, t3.prototype._checkIfBoundsCloseEnough = function(t4, e4) {
            var r3;
            return (r3 = this._checkIfPointCloseEnough(t4, e4.start.point)) != null ? r3 : this._checkIfPointCloseEnough(t4, e4.end.point);
          }, t3.prototype._checkIfPointCloseEnough = function(t4, e4) {
            if (s.closeEnough(t4, e4.x / this._rect, this._eps))
              return this._resolveY(e4);
          }, t3.prototype._approximate = function(t4, e4, r3) {
            var i3, s2;
            return i3 = e4.point.x - t4.point.x, s2 = (r3 - t4.point.x / this._rect) / (i3 / this._rect), t4.length + s2 * (e4.length - t4.length);
          }, t3.prototype._findApproximate = function(t4, e4, r3, i3) {
            var n, a, o, l, u;
            return i3 == null && (i3 = this._approximateMax), n = this._approximate(e4, r3, t4), u = (l = this.path.getPointAtLength(n)).x / this._rect, s.closeEnough(t4, u, this._eps) || --i3 < 1 ? this._resolveY(l) : (o = { point: l, length: n }, a = t4 < u ? [t4, e4, o, i3] : [t4, o, r3, i3], this._findApproximate.apply(this, a));
          }, t3.prototype._resolveY = function(t4) {
            return 1 - t4.y / this._rect;
          }, t3.prototype._normalizePath = function(t4) {
            var e4, r3, i3, s2;
            return s2 = /[M|L|H|V|C|S|Q|T|A]/gim, (i3 = t4.split(s2)).shift(), e4 = t4.match(s2), i3[0] = this._normalizeSegment(i3[0]), i3[r3 = i3.length - 1] = this._normalizeSegment(i3[r3], this._rect || 100), this._joinNormalizedPath(e4, i3);
          }, t3.prototype._joinNormalizedPath = function(t4, e4) {
            var r3, i3, s2, n;
            for (n = "", r3 = i3 = 0, s2 = t4.length; i3 < s2; r3 = ++i3)
              n += (r3 === 0 ? "" : " ") + t4[r3] + e4[r3].trim();
            return n;
          }, t3.prototype._normalizeSegment = function(t4, e4) {
            var r3, i3, s2, n, a, o, l, u;
            if (e4 == null && (e4 = 0), t4 = t4.trim(), a = /(-|\+)?((\d+(\.(\d|\e(-|\+)?)+)?)|(\.?(\d|\e|(\-|\+))+))/gim, u = (s2 = (o = this._getSegmentPairs(t4.match(a)))[o.length - 1])[0], Number(u) !== e4)
              for (t4 = "", s2[0] = e4, r3 = i3 = 0, n = o.length; i3 < n; r3 = ++i3)
                t4 += (r3 === 0 ? "" : " ") + (l = o[r3])[0] + "," + l[1];
            return t4;
          }, t3.prototype._getSegmentPairs = function(t4) {
            var e4, r3, i3, n, a;
            for (t4.length % 2 != 0 && s.error("Failed to parse the path - segment pairs are not even.", t4), n = [], e4 = r3 = 0, i3 = t4.length; r3 < i3; e4 = r3 += 2)
              t4[e4], a = [t4[e4], t4[e4 + 1]], n.push(a);
            return n;
          }, t3.prototype.create = function(e4, r3) {
            var i3;
            return (i3 = new t3(e4, r3)).sample.path = i3.path, i3.sample;
          }, t3;
        }(), t2.exports = i2;
      }, 52: (t2) => {
        var e3, r2;
        e3 = function() {
          function t3() {
            this.vars();
          }
          return t3.prototype.NS = "http://www.w3.org/2000/svg", t3.prototype.logBadgeCss = "background:#3A0839;color:#FF512F;border-radius:5px; padding: 1px 5px 2px; border: 1px solid #FF512F;", t3.prototype.shortColors = { transparent: "rgba(0,0,0,0)", none: "rgba(0,0,0,0)", aqua: "rgb(0,255,255)", black: "rgb(0,0,0)", blue: "rgb(0,0,255)", fuchsia: "rgb(255,0,255)", gray: "rgb(128,128,128)", green: "rgb(0,128,0)", lime: "rgb(0,255,0)", maroon: "rgb(128,0,0)", navy: "rgb(0,0,128)", olive: "rgb(128,128,0)", purple: "rgb(128,0,128)", red: "rgb(255,0,0)", silver: "rgb(192,192,192)", teal: "rgb(0,128,128)", white: "rgb(255,255,255)", yellow: "rgb(255,255,0)", orange: "rgb(255,128,0)" }, t3.prototype.chainOptionMap = {}, t3.prototype.callbacksMap = { onRefresh: 1, onStart: 1, onComplete: 1, onFirstUpdate: 1, onUpdate: 1, onProgress: 1, onRepeatStart: 1, onRepeatComplete: 1, onPlaybackStart: 1, onPlaybackPause: 1, onPlaybackStop: 1, onPlaybackComplete: 1 }, t3.prototype.tweenOptionMap = { duration: 1, delay: 1, speed: 1, repeat: 1, easing: 1, backwardEasing: 1, isYoyo: 1, shiftTime: 1, isReversed: 1, callbacksContext: 1 }, t3.prototype.unitOptionMap = { left: 1, top: 1, x: 1, y: 1, rx: 1, ry: 1 }, t3.prototype.RAD_TO_DEG = 180 / Math.PI, t3.prototype.vars = function() {
            var t4;
            return this.prefix = this.getPrefix(), this.getRemBase(), this.isFF = this.prefix.lowercase === "moz", this.isIE = this.prefix.lowercase === "ms", t4 = navigator.userAgent, this.isOldOpera = t4.match(/presto/gim), this.isSafari = t4.indexOf("Safari") > -1, this.isChrome = t4.indexOf("Chrome") > -1, this.isOpera = t4.toLowerCase().indexOf("op") > -1, this.isChrome && this.isSafari && (this.isSafari = false), t4.match(/PhantomJS/gim) && (this.isSafari = false), this.isChrome && this.isOpera && (this.isChrome = false), this.is3d = this.checkIf3d(), this.uniqIDs = -1, this.div = document.createElement("div"), document.body.appendChild(this.div), this.defaultStyles = this.computedStyle(this.div);
          }, t3.prototype.cloneObj = function(t4, e4) {
            var r3, i2, s, n;
            for (n = {}, r3 = (s = Object.keys(t4)).length; r3--; )
              i2 = s[r3], e4 != null && e4[i2] || (n[i2] = t4[i2]);
            return n;
          }, t3.prototype.extend = function(t4, e4) {
            var r3;
            for (r3 in e4)
              e4[r3], t4[r3] == null && (t4[r3] = e4[r3]);
            return t4;
          }, t3.prototype.getRemBase = function() {
            var t4, e4;
            return t4 = document.querySelector("html"), e4 = getComputedStyle(t4), this.remBase = parseFloat(e4.fontSize);
          }, t3.prototype.clamp = function(t4, e4, r3) {
            return t4 < e4 ? e4 : t4 > r3 ? r3 : t4;
          }, t3.prototype.setPrefixedStyle = function(t4, e4, r3) {
            return e4 === "transform" && (t4.style["" + this.prefix.css + e4] = r3), t4.style[e4] = r3;
          }, t3.prototype.style = function(t4, e4, r3) {
            var i2, s, n, a;
            if (typeof e4 == "object") {
              for (n = (s = Object.keys(e4)).length, a = []; n--; )
                r3 = e4[i2 = s[n]], a.push(this.setPrefixedStyle(t4, i2, r3));
              return a;
            }
            return this.setPrefixedStyle(t4, e4, r3);
          }, t3.prototype.prepareForLog = function(t4) {
            return (t4 = Array.prototype.slice.apply(t4)).unshift("::"), t4.unshift(this.logBadgeCss), t4.unshift("%cmo\xB7js%c"), t4;
          }, t3.prototype.log = function() {
            if (mojs.isDebug !== false)
              return console.log.apply(console, this.prepareForLog(arguments));
          }, t3.prototype.warn = function() {
            if (mojs.isDebug !== false)
              return console.warn.apply(console, this.prepareForLog(arguments));
          }, t3.prototype.error = function() {
            if (mojs.isDebug !== false)
              return console.error.apply(console, this.prepareForLog(arguments));
          }, t3.prototype.parseUnit = function(t4) {
            var e4, r3, i2, s, n;
            return typeof t4 == "number" ? { unit: "px", isStrict: false, value: t4, string: t4 === 0 ? "" + t4 : t4 + "px" } : typeof t4 == "string" ? (s = /px|%|rem|em|ex|cm|ch|mm|in|pt|pc|vh|vw|vmin|deg/gim, r3 = true, (n = (i2 = t4.match(s)) != null ? i2[0] : void 0) || (n = "px", r3 = false), { unit: n, isStrict: r3, value: e4 = parseFloat(t4), string: e4 === 0 ? "" + e4 : "" + e4 + n }) : t4;
          }, t3.prototype.bind = function(t4, e4) {
            var r3, i2;
            return i2 = function() {
              var i3, s;
              return i3 = Array.prototype.slice.call(arguments), s = r3.concat(i3), t4.apply(e4, s);
            }, r3 = Array.prototype.slice.call(arguments, 2), i2;
          }, t3.prototype.getRadialPoint = function(t4) {
            var e4, r3, i2;
            return t4 == null && (t4 = {}), e4 = 0.017453292519943295 * (t4.rotate - 90), r3 = t4.radiusX != null ? t4.radiusX : t4.radius, i2 = t4.radiusY != null ? t4.radiusY : t4.radius, { x: t4.center.x + Math.cos(e4) * r3, y: t4.center.y + Math.sin(e4) * i2 };
          }, t3.prototype.getPrefix = function() {
            var t4, e4, r3;
            return r3 = window.getComputedStyle(document.documentElement, ""), t4 = (Array.prototype.slice.call(r3).join("").match(/-(moz|webkit|ms)-/) || r3.OLink === "" && ["", "o"])[1], { dom: (e4 = "WebKit|Moz|MS|O".match(new RegExp("(" + t4 + ")", "i"))) != null ? e4[1] : void 0, lowercase: t4, css: "-" + t4 + "-", js: (t4 != null ? t4[0].toUpperCase() : void 0) + (t4 != null ? t4.substr(1) : void 0) };
          }, t3.prototype.strToArr = function(t4) {
            var e4, r3;
            return e4 = [], typeof t4 != "number" || isNaN(t4) ? (t4.trim().split(/\s+/gim).forEach((r3 = this, function(t5) {
              return e4.push(r3.parseUnit(r3.parseIfRand(t5)));
            })), e4) : (e4.push(this.parseUnit(t4)), e4);
          }, t3.prototype.calcArrDelta = function(t4, e4) {
            var r3, i2, s, n;
            for (r3 = [], i2 = s = 0, n = t4.length; s < n; i2 = ++s)
              t4[i2], r3[i2] = this.parseUnit("" + (e4[i2].value - t4[i2].value) + e4[i2].unit);
            return r3;
          }, t3.prototype.isArray = function(t4) {
            return t4 instanceof Array;
          }, t3.prototype.normDashArrays = function(t4, e4) {
            var r3, i2, s, n, a, o, l, u, h, p;
            if ((r3 = t4.length) > (i2 = e4.length))
              for (l = r3 - i2, p = e4.length, n = a = 0, u = l; 0 <= u ? a < u : a > u; n = 0 <= u ? ++a : --a)
                s = n + p, e4.push(this.parseUnit("0" + t4[s].unit));
            else if (i2 > r3)
              for (l = i2 - r3, p = t4.length, n = o = 0, h = l; 0 <= h ? o < h : o > h; n = 0 <= h ? ++o : --o)
                s = n + p, t4.push(this.parseUnit("0" + e4[s].unit));
            return [t4, e4];
          }, t3.prototype.makeColorObj = function(t4) {
            var e4, r3, i2, s, n, a, o, l;
            return t4[0] === "#" && (i2 = {}, (o = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t4)) && (a = o[1].length === 2 ? o[1] : o[1] + o[1], s = o[2].length === 2 ? o[2] : o[2] + o[2], r3 = o[3].length === 2 ? o[3] : o[3] + o[3], i2 = { r: parseInt(a, 16), g: parseInt(s, 16), b: parseInt(r3, 16), a: 1 })), t4[0] !== "#" && ((n = t4[0] === "r" && t4[1] === "g" && t4[2] === "b") && (l = t4), n || (l = this.shortColors[t4] ? this.shortColors[t4] : (this.div.style.color = t4, this.computedStyle(this.div).color)), o = new RegExp("^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$", "gi").exec(l), i2 = {}, e4 = parseFloat(o[4] || 1), o && (i2 = { r: parseInt(o[1], 10), g: parseInt(o[2], 10), b: parseInt(o[3], 10), a: e4 == null || isNaN(e4) ? 1 : e4 })), i2;
          }, t3.prototype.computedStyle = function(t4) {
            return getComputedStyle(t4);
          }, t3.prototype.capitalize = function(t4) {
            if (typeof t4 != "string")
              throw Error("String expected - nothing to capitalize");
            return t4.charAt(0).toUpperCase() + t4.substring(1);
          }, t3.prototype.parseRand = function(t4) {
            var e4, r3, i2;
            return r3 = t4.split(/rand\(|\,|\)/), i2 = this.parseUnit(r3[2]), e4 = this.rand(parseFloat(r3[1]), parseFloat(r3[2])), i2.unit && r3[2].match(i2.unit) ? e4 + i2.unit : e4;
          }, t3.prototype.parseStagger = function(t4, e4) {
            var r3, i2, s, n, a, o;
            return s = (o = t4.split(/stagger\(|\)$/)[1].toLowerCase()).split(/(rand\(.*?\)|[^\(,\s]+)(?=\s*,|\s*$)/gim), o = s.length > 3 ? (r3 = this.parseUnit(this.parseIfRand(s[1])), s[3]) : (r3 = this.parseUnit(0), s[1]), o = this.parseIfRand(o), i2 = e4 * (a = this.parseUnit(o)).value + r3.value, (n = r3.isStrict ? r3.unit : a.isStrict ? a.unit : "") ? "" + i2 + n : i2;
          }, t3.prototype.parseIfStagger = function(t4, e4) {
            return typeof t4 == "string" && t4.match(/stagger/g) ? this.parseStagger(t4, e4) : t4;
          }, t3.prototype.parseIfRand = function(t4) {
            return typeof t4 == "string" && t4.match(/rand\(/) ? this.parseRand(t4) : t4;
          }, t3.prototype.parseDelta = function(t4, e4, r3) {
            var i2, s, n, a, o, l, u, h, p, c, _, f;
            if ((n = (e4 = this.cloneObj(e4)).easing) != null && (n = mojs.easing.parseEasing(n)), delete e4.easing, (i2 = e4.curve) != null && (i2 = mojs.easing.parseEasing(i2)), delete e4.curve, a = e4[c = Object.keys(e4)[0]], s = { start: c }, !isNaN(parseFloat(c)) || c.match(/rand\(/) || c.match(/stagger\(/))
              if (t4 === "strokeDasharray" || t4 === "strokeDashoffset" || t4 === "origin") {
                for (_ = this.strToArr(c), o = this.strToArr(a), this.normDashArrays(_, o), u = h = 0, p = _.length; h < p; u = ++h)
                  c = _[u], a = o[u], this.mergeUnits(c, a, t4);
                s = { type: "array", name: t4, start: _, end: o, delta: this.calcArrDelta(_, o), easing: n, curve: i2 };
              } else
                this.callbacksMap[t4] || this.tweenOptionMap[t4] || (this.unitOptionMap[t4] ? (a = this.parseUnit(this.parseStringOption(a, r3)), c = this.parseUnit(this.parseStringOption(c, r3)), this.mergeUnits(c, a, t4), s = { type: "unit", name: t4, start: c, end: a, delta: a.value - c.value, easing: n, curve: i2 }) : (a = parseFloat(this.parseStringOption(a, r3)), s = { type: "number", name: t4, start: c = parseFloat(this.parseStringOption(c, r3)), end: a, delta: a - c, easing: n, curve: i2 }));
            else {
              if (t4 === "strokeLinecap")
                return this.warn("Sorry, stroke-linecap property is not animatable yet, using the start(" + c + ") value instead", e4), s;
              s = { type: "color", name: t4, start: f = this.makeColorObj(c), end: l = this.makeColorObj(a), easing: n, curve: i2, delta: { r: l.r - f.r, g: l.g - f.g, b: l.b - f.b, a: l.a - f.a } };
            }
            return s;
          }, t3.prototype.mergeUnits = function(t4, e4, r3) {
            return !e4.isStrict && t4.isStrict ? (e4.unit = t4.unit, e4.string = "" + e4.value + e4.unit) : e4.isStrict && !t4.isStrict ? (t4.unit = e4.unit, t4.string = "" + t4.value + t4.unit) : e4.isStrict && t4.isStrict && e4.unit !== t4.unit ? (t4.unit = e4.unit, t4.string = "" + t4.value + t4.unit, this.warn('Two different units were specified on "' + r3 + '" delta property, mo \xB7 js will fallback to end "' + e4.unit + '" unit ')) : void 0;
          }, t3.prototype.rand = function(t4, e4) {
            return Math.random() * (e4 - t4) + t4;
          }, t3.prototype.isDOM = function(t4) {
            var e4;
            return t4 != null && (e4 = typeof t4.nodeType == "number" && typeof t4.nodeName == "string", typeof t4 == "object" && e4);
          }, t3.prototype.getChildElements = function(t4) {
            var e4, r3, i2;
            for (r3 = [], i2 = (e4 = t4.childNodes).length; i2--; )
              e4[i2].nodeType === 1 && r3.unshift(e4[i2]);
            return r3;
          }, t3.prototype.delta = function(t4, e4) {
            var r3, i2, s, n, a;
            if (a = typeof e4, r3 = (n = typeof t4) == "string" || n === "number" && !isNaN(t4), i2 = a === "string" || a === "number" && !isNaN(e4), r3 && i2)
              return (s = {})[t4] = e4, s;
            this.error("delta method expects Strings or Numbers at input but got - " + t4 + ", " + e4);
          }, t3.prototype.getUniqID = function() {
            return ++this.uniqIDs;
          }, t3.prototype.parsePath = function(t4) {
            var e4;
            return typeof t4 == "string" ? t4.charAt(0).toLowerCase() === "m" ? ((e4 = document.createElementNS(this.NS, "path")).setAttributeNS(null, "d", t4), e4) : document.querySelector(t4) : t4.style ? t4 : void 0;
          }, t3.prototype.closeEnough = function(t4, e4, r3) {
            return Math.abs(t4 - e4) < r3;
          }, t3.prototype.checkIf3d = function() {
            var t4, e4, r3;
            return t4 = document.createElement("div"), this.style(t4, "transform", "translateZ(0)"), ((r3 = t4.style)[e4 = this.prefix.css + "transform"] != null ? r3[e4] : r3.transform) !== "";
          }, t3.prototype.isObject = function(t4) {
            return t4 !== null && typeof t4 == "object";
          }, t3.prototype.getDeltaEnd = function(t4) {
            return t4[Object.keys(t4)[0]];
          }, t3.prototype.getDeltaStart = function(t4) {
            return Object.keys(t4)[0];
          }, t3.prototype.isTweenProp = function(t4) {
            return this.tweenOptionMap[t4] || this.callbacksMap[t4];
          }, t3.prototype.parseStringOption = function(t4, e4) {
            return e4 == null && (e4 = 0), typeof t4 == "string" && (t4 = this.parseIfStagger(t4, e4), t4 = this.parseIfRand(t4)), t4;
          }, t3.prototype.getLastItem = function(t4) {
            return t4[t4.length - 1];
          }, t3.prototype.parseEl = function(t4) {
            return r2.isDOM(t4) || (typeof t4 == "string" && (t4 = document.querySelector(t4)), t4 === null && r2.error("Can't parse HTML element: ", t4)), t4;
          }, t3.prototype.force3d = function(t4) {
            return this.setPrefixedStyle(t4, "backface-visibility", "hidden"), t4;
          }, t3.prototype.isDelta = function(t4) {
            return !(!this.isObject(t4) || t4.unit || this.isArray(t4) || this.isDOM(t4));
          }, t3;
        }(), r2 = new e3(), t2.exports = r2;
      }, 291: (t2, e3, r2) => {
        var i2, s, n, a, o;
        a = r2(52), o = r2(247), n = r2(755).Z, s = r2(342).Z, i2 = function() {
          function t3(t4) {
            var e4, r3;
            this.o = t4 != null ? t4 : {}, this.calcHeight = (e4 = this.calcHeight, r3 = this, function() {
              return e4.apply(r3, arguments);
            }), this.vars() || this.createTween();
          }
          return t3.prototype.defaults = { path: null, curvature: { x: "75%", y: "50%" }, isCompositeLayer: true, delay: 0, duration: 1e3, easing: null, repeat: 0, yoyo: false, onStart: null, onComplete: null, onUpdate: null, offsetX: 0, offsetY: 0, rotationOffset: null, pathStart: 0, pathEnd: 1, motionBlur: 0, transformOrigin: null, isRotation: false, isReverse: false, isRunLess: false, isPresetPosition: true }, t3.prototype.vars = function() {
            return this.getScaler = a.bind(this.getScaler, this), this.resize = o, this.props = a.cloneObj(this.defaults), this.extendOptions(this.o), this.isMotionBlurReset = a.isSafari || a.isIE, this.isMotionBlurReset && (this.props.motionBlur = 0), this.history = [a.cloneObj(this.props)], this.postVars();
          }, t3.prototype.curveToPath = function(t4) {
            var e4, r3, i3, s2, n2, o2, l, u, h, p, c, _;
            return h = document.createElementNS(a.NS, "path"), u = { x: (_ = t4.start).x + t4.shift.x, y: _.x + t4.shift.y }, e4 = t4.curvature, o2 = t4.shift.x, l = t4.shift.y, p = Math.sqrt(o2 * o2 + l * l) / 100, c = Math.atan(l / o2) * (180 / Math.PI) + 90, t4.shift.x < 0 && (c += 180), r3 = (r3 = a.parseUnit(e4.x)).unit === "%" ? r3.value * p : r3.value, n2 = a.getRadialPoint({ center: { x: _.x, y: _.y }, radius: r3, rotate }), i3 = (i3 = a.parseUnit(e4.y)).unit === "%" ? i3.value * p : i3.value, s2 = a.getRadialPoint({ center: { x: n2.x, y: n2.y }, radius: i3, rotate: c + 90 }), h.setAttribute("d", "M" + _.x + "," + _.y + " Q" + s2.x + "," + s2.y + " " + u.x + "," + u.y), h;
          }, t3.prototype.postVars = function() {
            return this.props.pathStart = a.clamp(this.props.pathStart, 0, 1), this.props.pathEnd = a.clamp(this.props.pathEnd, this.props.pathStart, 1), this.rotate = 0, this.speedX = 0, this.speedY = 0, this.blurX = 0, this.blurY = 0, this.prevCoords = {}, this.blurAmount = 20, this.props.motionBlur = a.clamp(this.props.motionBlur, 0, 1), this.onUpdate = this.props.onUpdate, this.o.el ? (this.el = this.parseEl(this.props.el), this.props.motionBlur > 0 && this.createFilter(), this.path = this.getPath(), this.path.getAttribute("d") ? (this.len = this.path.getTotalLength(), this.slicedLen = this.len * (this.props.pathEnd - this.props.pathStart), this.startLen = this.props.pathStart * this.len, this.fill = this.props.fill, this.fill != null && (this.container = this.parseEl(this.props.fill.container), this.fillRule = this.props.fill.fillRule || "all", this.getScaler(), this.container != null) ? (this.removeEvent(this.container, "onresize", this.getScaler), this.addEvent(this.container, "onresize", this.getScaler)) : void 0) : (a.error("Path has no coordinates to work with, aborting"), true)) : (a.error('Missed "el" option. It could be a selector, DOMNode or another module.'), true);
          }, t3.prototype.addEvent = function(t4, e4, r3) {
            return t4.addEventListener(e4, r3, false);
          }, t3.prototype.removeEvent = function(t4, e4, r3) {
            return t4.removeEventListener(e4, r3, false);
          }, t3.prototype.createFilter = function() {
            var t4, e4;
            return t4 = document.createElement("div"), this.filterID = "filter-" + a.getUniqID(), t4.innerHTML = '<svg id="svg-' + this.filterID + '"\n    style="visibility:hidden; width:0px; height:0px">\n  <filter id="' + this.filterID + '" y="-20" x="-20" width="40" height="40">\n    <feOffset\n      id="blur-offset" in="SourceGraphic"\n      dx="0" dy="0" result="offset2"></feOffset>\n    <feGaussianblur\n      id="blur" in="offset2"\n      stdDeviation="0,0" result="blur2"></feGaussianblur>\n    <feMerge>\n      <feMergeNode in="SourceGraphic"></feMergeNode>\n      <feMergeNode in="blur2"></feMergeNode>\n    </feMerge>\n  </filter>\n</svg>', e4 = t4.querySelector("#svg-" + this.filterID), this.filter = e4.querySelector("#blur"), this.filterOffset = e4.querySelector("#blur-offset"), document.body.insertBefore(e4, document.body.firstChild), this.el.style.filter = "url(#" + this.filterID + ")", this.el.style[a.prefix.css + "filter"] = "url(#" + this.filterID + ")";
          }, t3.prototype.parseEl = function(t4) {
            return typeof t4 == "string" ? document.querySelector(t4) : t4 instanceof HTMLElement ? t4 : t4._setProp != null ? (this.isModule = true, t4) : void 0;
          }, t3.prototype.getPath = function() {
            return a.parsePath(this.props.path) || (this.props.path.x || this.props.path.y ? this.curveToPath({ start: { x: 0, y: 0 }, shift: { x: this.props.path.x || 0, y: this.props.path.y || 0 }, curvature: { x: this.props.curvature.x || this.defaults.curvature.x, y: this.props.curvature.y || this.defaults.curvature.y } }) : void 0);
          }, t3.prototype.getScaler = function() {
            var t4, e4, r3;
            switch (this.cSize = { width: this.container.offsetWidth || 0, height: this.container.offsetHeight || 0 }, r3 = this.path.getPointAtLength(0), t4 = this.path.getPointAtLength(this.len), e4 = {}, this.scaler = {}, e4.width = t4.x >= r3.x ? t4.x - r3.x : r3.x - t4.x, e4.height = t4.y >= r3.y ? t4.y - r3.y : r3.y - t4.y, this.fillRule) {
              case "all":
                return this.calcWidth(e4), this.calcHeight(e4);
              case "width":
                return this.calcWidth(e4), this.scaler.y = this.scaler.x;
              case "height":
                return this.calcHeight(e4), this.scaler.x = this.scaler.y;
            }
          }, t3.prototype.calcWidth = function(t4) {
            return this.scaler.x = this.cSize.width / t4.width, !isFinite(this.scaler.x) && (this.scaler.x = 1);
          }, t3.prototype.calcHeight = function(t4) {
            return this.scaler.y = this.cSize.height / t4.height, !isFinite(this.scaler.y) && (this.scaler.y = 1);
          }, t3.prototype.run = function(t4) {
            var e4, r3;
            if (t4) {
              for (e4 in this.history[0], t4)
                r3 = t4[e4], a.callbacksMap[e4] || a.tweenOptionMap[e4] ? (a.warn('the property "' + e4 + '" property can not be overridden on run yet'), delete t4[e4]) : this.history[0][e4] = r3;
              this.tuneOptions(t4);
            }
            return this.startTween();
          }, t3.prototype.createTween = function() {
            var t4;
            return this.tween = new n({ duration: this.props.duration, delay: this.props.delay, yoyo: this.props.yoyo, repeat: this.props.repeat, easing: this.props.easing, onStart: (t4 = this, function() {
              var e4;
              return (e4 = t4.props.onStart) != null ? e4.apply(t4) : void 0;
            }), onComplete: function(t5) {
              return function() {
                var e4;
                return t5.props.motionBlur && t5.setBlur({ blur: { x: 0, y: 0 }, offset: { x: 0, y: 0 } }), (e4 = t5.props.onComplete) != null ? e4.apply(t5) : void 0;
              };
            }(this), onUpdate: function(t5) {
              return function(e4) {
                return t5.setProgress(e4);
              };
            }(this), onFirstUpdate: function(t5) {
              return function(e4, r3) {
                if (!e4)
                  return t5.history.length > 1 && t5.tuneOptions(t5.history[0]);
              };
            }(this) }), this.timeline = new s(), this.timeline.add(this.tween), !this.props.isRunLess && this.startTween(), this.props.isPresetPosition && this.setProgress(0, true);
          }, t3.prototype.startTween = function() {
            return setTimeout((t4 = this, function() {
              var e4;
              return (e4 = t4.timeline) != null ? e4.play() : void 0;
            }), 1);
            var t4;
          }, t3.prototype.setProgress = function(t4, e4) {
            var r3, i3, s2, n2;
            return r3 = this.startLen + (this.props.isReverse ? (1 - t4) * this.slicedLen : t4 * this.slicedLen), s2 = (i3 = this.path.getPointAtLength(r3)).x + this.props.offsetX, n2 = i3.y + this.props.offsetY, this._getCurrentRotation(i3, r3, t4), this._setTransformOrigin(t4), this._setTransform(s2, n2, t4, e4), this.props.motionBlur && this.makeMotionBlur(s2, n2);
          }, t3.prototype.setElPosition = function(t4, e4, r3) {
            var i3;
            return i3 = "translate(" + t4 + "px," + e4 + "px) " + (this.rotate !== 0 ? "rotate(" + this.rotate + "deg)" : "") + " " + (this.props.isCompositeLayer && a.is3d ? "translateZ(0)" : ""), a.setPrefixedStyle(this.el, "transform", i3);
          }, t3.prototype.setModulePosition = function(t4, e4) {
            return this.el._setProp({ shiftX: t4 + "px", shiftY: e4 + "px", rotate: this.rotate }), this.el._draw();
          }, t3.prototype._getCurrentRotation = function(t4, e4, r3) {
            var i3, s2, n2, o2, l;
            return s2 = typeof this.props.transformOrigin == "function", this.props.isRotation || this.props.rotationOffset != null || s2 ? (n2 = this.path.getPointAtLength(e4 - 1), o2 = t4.y - n2.y, l = t4.x - n2.x, i3 = Math.atan(o2 / l), !isFinite(i3) && (i3 = 0), this.rotate = i3 * a.RAD_TO_DEG, typeof this.props.rotationOffset != "function" ? this.rotate += this.props.rotationOffset || 0 : this.rotate = this.props.rotationOffset.call(this, this.rotate, r3)) : this.rotate = 0;
          }, t3.prototype._setTransform = function(t4, e4, r3, i3) {
            var s2;
            return this.scaler && (t4 *= this.scaler.x, e4 *= this.scaler.y), s2 = null, i3 || (s2 = typeof this.onUpdate == "function" ? this.onUpdate(r3, { x: t4, y: e4, rotate: this.rotate }) : void 0), this.isModule ? this.setModulePosition(t4, e4) : typeof s2 != "string" ? this.setElPosition(t4, e4, r3) : a.setPrefixedStyle(this.el, "transform", s2);
          }, t3.prototype._setTransformOrigin = function(t4) {
            var e4;
            if (this.props.transformOrigin)
              return e4 = typeof this.props.transformOrigin == "function" ? this.props.transformOrigin(this.rotate, t4) : this.props.transformOrigin, a.setPrefixedStyle(this.el, "transform-origin", e4);
          }, t3.prototype.makeMotionBlur = function(t4, e4) {
            var r3, i3, s2, n2, o2, l, u;
            return u = 0, o2 = 1, l = 1, this.prevCoords.x == null || this.prevCoords.y == null ? (this.speedX = 0, this.speedY = 0) : (s2 = t4 - this.prevCoords.x, n2 = e4 - this.prevCoords.y, s2 > 0 && (o2 = -1), o2 < 0 && (l = -1), this.speedX = Math.abs(s2), this.speedY = Math.abs(n2), u = Math.atan(n2 / s2) * (180 / Math.PI) + 90), r3 = u - this.rotate, i3 = this.rotToCoords(r3), this.blurX = a.clamp(this.speedX / 16 * this.props.motionBlur, 0, 1), this.blurY = a.clamp(this.speedY / 16 * this.props.motionBlur, 0, 1), this.setBlur({ blur: { x: 3 * this.blurX * this.blurAmount * Math.abs(i3.x), y: 3 * this.blurY * this.blurAmount * Math.abs(i3.y) }, offset: { x: 3 * o2 * this.blurX * i3.x * this.blurAmount, y: 3 * l * this.blurY * i3.y * this.blurAmount } }), this.prevCoords.x = t4, this.prevCoords.y = e4;
          }, t3.prototype.setBlur = function(t4) {
            if (!this.isMotionBlurReset)
              return this.filter.setAttribute("stdDeviation", t4.blur.x + "," + t4.blur.y), this.filterOffset.setAttribute("dx", t4.offset.x), this.filterOffset.setAttribute("dy", t4.offset.y);
          }, t3.prototype.extendDefaults = function(t4) {
            var e4, r3, i3;
            for (e4 in r3 = [], t4)
              i3 = t4[e4], r3.push(this[e4] = i3);
            return r3;
          }, t3.prototype.extendOptions = function(t4) {
            var e4, r3, i3;
            for (e4 in r3 = [], t4)
              i3 = t4[e4], r3.push(this.props[e4] = i3);
            return r3;
          }, t3.prototype.then = function(t4) {
            var e4, r3, i3, s2, o2, l;
            for (r3 in i3 = {}, s2 = this.history[this.history.length - 1])
              o2 = s2[r3], !a.callbacksMap[r3] && !a.tweenOptionMap[r3] || r3 === "duration" ? t4[r3] == null && (t4[r3] = o2) : t4[r3] == null && (t4[r3] = void 0), a.tweenOptionMap[r3] && (i3[r3] = r3 !== "duration" || t4[r3] != null ? t4[r3] : s2[r3]);
            return this.history.push(t4), e4 = this, i3.onUpdate = (l = this, function(t5) {
              return l.setProgress(t5);
            }), i3.onStart = function(t5) {
              return function() {
                var e5;
                return (e5 = t5.props.onStart) != null ? e5.apply(t5) : void 0;
              };
            }(this), i3.onComplete = function(t5) {
              return function() {
                var e5;
                return (e5 = t5.props.onComplete) != null ? e5.apply(t5) : void 0;
              };
            }(this), i3.onFirstUpdate = function() {
              return e4.tuneOptions(e4.history[this.index]);
            }, i3.isChained = !t4.delay, this.timeline.append(new n(i3)), this;
          }, t3.prototype.tuneOptions = function(t4) {
            return this.extendOptions(t4), this.postVars();
          }, t3.prototype.rotToCoords = function(t4) {
            var e4, r3, i3;
            return e4 = ((t4 %= 360) - 90) * Math.PI / 180, r3 = Math.cos(e4), i3 = Math.sin(e4), { x: 1.428571429 * (r3 = r3 < 0 ? Math.max(r3, -0.7) : Math.min(r3, 0.7)), y: 1.428571429 * (i3 = i3 < 0 ? Math.max(i3, -0.7) : Math.min(i3, 0.7)) };
          }, t3;
        }(), t2.exports = i2;
      }, 785: (t2, e3, r2) => {
        var i2, s = {}.hasOwnProperty;
        i2 = function(t3) {
          function e4() {
            return e4.__super__.constructor.apply(this, arguments);
          }
          return function(t4, e5) {
            for (var r3 in e5)
              s.call(e5, r3) && (t4[r3] = e5[r3]);
            function i3() {
              this.constructor = t4;
            }
            i3.prototype = e5.prototype, t4.prototype = new i3(), t4.__super__ = e5.prototype;
          }(e4, t3), e4.prototype._declareDefaults = function() {
            return e4.__super__._declareDefaults.apply(this, arguments), this._defaults.shape = "ellipse";
          }, e4.prototype._draw = function() {
            var t4, r3;
            return t4 = this._props.radiusX != null ? this._props.radiusX : this._props.radius, r3 = this._props.radiusY != null ? this._props.radiusY : this._props.radius, this._setAttrIfChanged("rx", t4), this._setAttrIfChanged("ry", r3), this._setAttrIfChanged("cx", this._props.width / 2), this._setAttrIfChanged("cy", this._props.height / 2), e4.__super__._draw.apply(this, arguments);
          }, e4.prototype._getLength = function() {
            var t4, e5;
            return t4 = this._props.radiusX != null ? this._props.radiusX : this._props.radius, e5 = this._props.radiusY != null ? this._props.radiusY : this._props.radius, 2 * Math.PI * Math.sqrt((t4 * t4 + e5 * e5) / 2);
          }, e4;
        }(r2(623).Z), t2.exports = i2;
      }, 158: (t2, e3, r2) => {
        var i2, s = {}.hasOwnProperty;
        i2 = function(t3) {
          function e4() {
            return e4.__super__.constructor.apply(this, arguments);
          }
          return function(t4, e5) {
            for (var r3 in e5)
              s.call(e5, r3) && (t4[r3] = e5[r3]);
            function i3() {
              this.constructor = t4;
            }
            i3.prototype = e5.prototype, t4.prototype = new i3(), t4.__super__ = e5.prototype;
          }(e4, t3), e4.prototype._declareDefaults = function() {
            return e4.__super__._declareDefaults.apply(this, arguments), this._defaults.tag = "path";
          }, e4.prototype._draw = function() {
            var t4, r3, i3, s2, n, a, o;
            if (e4.__super__._draw.apply(this, arguments), this._props, s2 = this._props.radiusX != null ? this._props.radiusX : this._props.radius, n = this._props.radiusY != null ? this._props.radiusY : this._props.radius, r3 = s2 === this._prevRadiusX, i3 = n === this._prevRadiusY, !r3 || !i3)
              return t4 = "M" + ((a = this._props.width / 2) - s2) + "," + (o = this._props.height / 2) + " L" + (a + s2) + "," + o + " M" + a + "," + (o - n) + " L" + a + "," + (o + n), this.el.setAttribute("d", t4), this._prevRadiusX = s2, this._prevRadiusY = n;
          }, e4.prototype._getLength = function() {
            return 2 * ((this._props.radiusX != null ? this._props.radiusX : this._props.radius) + (this._props.radiusY != null ? this._props.radiusY : this._props.radius));
          }, e4;
        }(r2(623).Z), t2.exports = i2;
      }, 153: (t2, e3, r2) => {
        var i2, s = {}.hasOwnProperty;
        i2 = function(t3) {
          function e4() {
            return e4.__super__.constructor.apply(this, arguments);
          }
          return function(t4, e5) {
            for (var r3 in e5)
              s.call(e5, r3) && (t4[r3] = e5[r3]);
            function i3() {
              this.constructor = t4;
            }
            i3.prototype = e5.prototype, t4.prototype = new i3(), t4.__super__ = e5.prototype;
          }(e4, t3), e4.prototype._declareDefaults = function() {
            return e4.__super__._declareDefaults.apply(this, arguments), this._defaults.tag = "path", this._defaults.points = 2;
          }, e4.prototype._draw = function() {
            var t4, r3, i3, s2, n, a, o, l, u, h, p, c, _, f, d, y;
            if (e4.__super__._draw.apply(this, arguments), o = this._props, this._props.points && (l = this._props.radiusX != null ? this._props.radiusX : this._props.radius, u = this._props.radiusY != null ? this._props.radiusY : this._props.radius, s2 = l === this._prevRadiusX, n = u === this._prevRadiusY, i3 = o.points === this._prevPoints, !(s2 && n && i3))) {
              for (p = this._props.width / 2, f = this._props.height / 2, c = p - l, _ = p + l, t4 = "", y = 2 * u / (this._props.points - 1), d = f - u, r3 = a = 0, h = this._props.points; 0 <= h ? a < h : a > h; r3 = 0 <= h ? ++a : --a)
                t4 += "M" + c + ", " + (f = "" + (r3 * y + d)) + " L" + _ + ", " + f + " ";
              return this.el.setAttribute("d", t4), this._prevPoints = o.points, this._prevRadiusX = l, this._prevRadiusY = u;
            }
          }, e4.prototype._getLength = function() {
            return 2 * (this._props.radiusX != null ? this._props.radiusX : this._props.radius);
          }, e4;
        }(r2(623).Z), t2.exports = i2;
      }, 786: (t2, e3, r2) => {
        var i2, s = {}.hasOwnProperty;
        i2 = function(t3) {
          function e4() {
            return e4.__super__.constructor.apply(this, arguments);
          }
          return function(t4, e5) {
            for (var r3 in e5)
              s.call(e5, r3) && (t4[r3] = e5[r3]);
            function i3() {
              this.constructor = t4;
            }
            i3.prototype = e5.prototype, t4.prototype = new i3(), t4.__super__ = e5.prototype;
          }(e4, t3), e4.prototype._declareDefaults = function() {
            return e4.__super__._declareDefaults.apply(this, arguments), this._defaults.tag = "line";
          }, e4.prototype._draw = function() {
            var t4, r3, i3;
            return t4 = this._props.radiusX != null ? this._props.radiusX : this._props.radius, r3 = this._props.width / 2, i3 = this._props.height / 2, this._setAttrIfChanged("x1", r3 - t4), this._setAttrIfChanged("x2", r3 + t4), this._setAttrIfChanged("y1", i3), this._setAttrIfChanged("y2", i3), e4.__super__._draw.apply(this, arguments);
          }, e4;
        }(r2(623).Z), t2.exports = i2;
      }, 878: (t2, e3, r2) => {
        var i2, s, n = {}.hasOwnProperty;
        s = r2(52), i2 = function(t3) {
          function e4() {
            return e4.__super__.constructor.apply(this, arguments);
          }
          return function(t4, e5) {
            for (var r3 in e5)
              n.call(e5, r3) && (t4[r3] = e5[r3]);
            function i3() {
              this.constructor = t4;
            }
            i3.prototype = e5.prototype, t4.prototype = new i3(), t4.__super__ = e5.prototype;
          }(e4, t3), e4.prototype._declareDefaults = function() {
            return e4.__super__._declareDefaults.apply(this, arguments), this._defaults.tag = "path", this._defaults.points = 3;
          }, e4.prototype._draw = function() {
            var t4, r3, i3, n2, a, o, l, u, h, p, c, _, f, d, y;
            if (h = this._props, c = this._props.radiusX != null ? this._props.radiusX : this._props.radius, _ = this._props.radiusY != null ? this._props.radiusY : this._props.radius, n2 = c === this._prevRadiusX, a = _ === this._prevRadiusY, i3 = h.points === this._prevPoints, !(n2 && a && i3)) {
              for (y = 360 / this._props.points, this._radialPoints == null ? this._radialPoints = [] : this._radialPoints.length = 0, r3 = o = 0, f = this._props.points; 0 <= f ? o < f : o > f; r3 = 0 <= f ? ++o : --o)
                this._radialPoints.push(s.getRadialPoint({ radius: this._props.radius, radiusX: this._props.radiusX, radiusY: this._props.radiusY, rotate: r3 * y, center: { x: h.width / 2, y: h.height / 2 } }));
              for (t4 = "", r3 = l = 0, u = (d = this._radialPoints).length; l < u; r3 = ++l)
                t4 += (r3 === 0 ? "M" : "L") + (p = d[r3]).x.toFixed(4) + "," + p.y.toFixed(4) + " ";
              this._prevPoints = h.points, this._prevRadiusX = c, this._prevRadiusY = _, this.el.setAttribute("d", t4 += "z");
            }
            return e4.__super__._draw.apply(this, arguments);
          }, e4.prototype._getLength = function() {
            return this._getPointsPerimiter(this._radialPoints);
          }, e4;
        }(r2(623).Z), t2.exports = i2;
      }, 979: (t2, e3, r2) => {
        var i2, s = {}.hasOwnProperty;
        i2 = function(t3) {
          function e4() {
            return e4.__super__.constructor.apply(this, arguments);
          }
          return function(t4, e5) {
            for (var r3 in e5)
              s.call(e5, r3) && (t4[r3] = e5[r3]);
            function i3() {
              this.constructor = t4;
            }
            i3.prototype = e5.prototype, t4.prototype = new i3(), t4.__super__ = e5.prototype;
          }(e4, t3), e4.prototype._declareDefaults = function() {
            return e4.__super__._declareDefaults.apply(this, arguments), this._defaults.tag = "rect", this._defaults.rx = 0, this._defaults.ry = 0;
          }, e4.prototype._draw = function() {
            var t4, r3, i3;
            return e4.__super__._draw.apply(this, arguments), r3 = (t4 = this._props).radiusX != null ? t4.radiusX : t4.radius, i3 = t4.radiusY != null ? t4.radiusY : t4.radius, this._setAttrIfChanged("width", 2 * r3), this._setAttrIfChanged("height", 2 * i3), this._setAttrIfChanged("x", t4.width / 2 - r3), this._setAttrIfChanged("y", t4.height / 2 - i3), this._setAttrIfChanged("rx", t4.rx), this._setAttrIfChanged("ry", t4.ry);
          }, e4.prototype._getLength = function() {
            return 2 * (2 * (this._props.radiusX != null ? this._props.radiusX : this._props.radius) + 2 * (this._props.radiusY != null ? this._props.radiusY : this._props.radius));
          }, e4;
        }(r2(623).Z), t2.exports = i2;
      }, 806: (t2, e3, r2) => {
        var i2, s, n, a, o, l, u, h, p, c, _, f;
        f = r2(52), i2 = r2(623).Z, l = r2(854).Z, n = r2(785), h = r2(786), _ = r2(322), c = r2(979), p = r2(878), a = r2(158), o = r2(472).Z, u = r2(153), s = function() {
          function t3() {
            this.addShape = f.bind(this.addShape, this);
          }
          return t3.prototype.bit = i2, t3.prototype.custom = l, t3.prototype.circle = n, t3.prototype.line = h, t3.prototype.zigzag = _, t3.prototype.rect = c, t3.prototype.polygon = p, t3.prototype.cross = a, t3.prototype.equal = u, t3.prototype.curve = o, t3.prototype.getShape = function(t4) {
            return this[t4] || f.error('no "' + t4 + '" shape available yet, please choose from this list:', ["circle", "line", "zigzag", "rect", "polygon", "cross", "equal", "curve"]);
          }, t3.prototype.addShape = function(t4, e4) {
            return this[t4] = e4;
          }, t3;
        }(), t2.exports = new s();
      }, 322: (t2, e3, r2) => {
        var i2, s = {}.hasOwnProperty;
        i2 = function(t3) {
          function e4() {
            return e4.__super__.constructor.apply(this, arguments);
          }
          return function(t4, e5) {
            for (var r3 in e5)
              s.call(e5, r3) && (t4[r3] = e5[r3]);
            function i3() {
              this.constructor = t4;
            }
            i3.prototype = e5.prototype, t4.prototype = new i3(), t4.__super__ = e5.prototype;
          }(e4, t3), e4.prototype._declareDefaults = function() {
            return e4.__super__._declareDefaults.apply(this, arguments), this._defaults.tag = "path", this._defaults.points = 3;
          }, e4.prototype._draw = function() {
            var t4, r3, i3, s2, n, a, o, l, u, h, p, c, _, f, d, y;
            if (e4.__super__._draw.apply(this, arguments), u = this._props, this._props.points && (p = this._props.radiusX != null ? this._props.radiusX : this._props.radius, c = this._props.radiusY != null ? this._props.radiusY : this._props.radius, n = p === this._prevRadiusX, a = c === this._prevRadiusY, s2 = u.points === this._prevPoints, !(n && a && s2))) {
              for (t4 = u.width / 2 - p, r3 = d = u.height / 2, f = 2 * p / (u.points - 1), y = -1, l = -(i3 = Math.sqrt(f * f + c * c)), h = "M" + t4 + ", " + d + " ", o = 0, _ = u.points; 0 <= _ ? o < _ : o > _; 0 <= _ ? ++o : --o)
                h += "L" + t4 + ", " + r3 + " ", t4 += f, l += i3, r3 = y === -1 ? d - c : d, y = -y;
              return this._length = l, this.el.setAttribute("d", h), this._prevPoints = u.points, this._prevRadiusX = p, this._prevRadiusY = c;
            }
          }, e4.prototype._getLength = function() {
            return this._length;
          }, e4;
        }(r2(623).Z), t2.exports = i2;
      }, 247: (t2, e3) => {
        var r2, i2;
        i2 = function() {
          function t3(t4) {
            this.o = t4 != null ? t4 : {}, window.isAnyResizeEventInited || (this.vars(), this.redefineProto());
          }
          return t3.prototype.vars = function() {
            return window.isAnyResizeEventInited = true, this.allowedProtos = [HTMLDivElement, HTMLFormElement, HTMLLinkElement, HTMLBodyElement, HTMLParagraphElement, HTMLFieldSetElement, HTMLLegendElement, HTMLLabelElement, HTMLButtonElement, HTMLUListElement, HTMLOListElement, HTMLLIElement, HTMLHeadingElement, HTMLQuoteElement, HTMLPreElement, HTMLBRElement, HTMLFontElement, HTMLHRElement, HTMLModElement, HTMLParamElement, HTMLMapElement, HTMLTableElement, HTMLTableCaptionElement, HTMLImageElement, HTMLTableCellElement, HTMLSelectElement, HTMLInputElement, HTMLTextAreaElement, HTMLAnchorElement, HTMLObjectElement, HTMLTableColElement, HTMLTableSectionElement, HTMLTableRowElement], this.timerElements = { img: 1, textarea: 1, input: 1, embed: 1, object: 1, svg: 1, canvas: 1, tr: 1, tbody: 1, thead: 1, tfoot: 1, a: 1, select: 1, option: 1, optgroup: 1, dl: 1, dt: 1, br: 1, basefont: 1, font: 1, col: 1, iframe: 1 };
          }, t3.prototype.redefineProto = function() {
            var t4, e4, r3;
            return e4 = this, function() {
              var i3, s, n, a;
              for (n = this.allowedProtos, a = [], t4 = i3 = 0, s = n.length; i3 < s; t4 = ++i3)
                (r3 = n[t4]).prototype != null && a.push(function(t5) {
                  return function(r4) {
                    var i4;
                    i4 = function() {
                      return this === window && this === document || arguments[0] === "onresize" && !this.isAnyResizeEventInited && e4.handleResize({ args: arguments, that: this }), r4.apply(this, arguments);
                    }, t5.prototype.addEventListener ? t5.prototype.addEventListener = i4 : t5.prototype.attachEvent && (t5.prototype.attachEvent = i4);
                  }(t5.prototype.addEventListener || t5.prototype.attachEvent), function(e5) {
                    var r4;
                    return r4 = function() {
                      return this.isAnyResizeEventInited = false, this.iframe && this.removeChild(this.iframe), e5.apply(this, arguments);
                    }, t5.prototype.removeEventListener ? t5.prototype.removeEventListener = r4 : t5.prototype.detachEvent ? t5.prototype.detachEvent = wrappedListener : void 0;
                  }(t5.prototype.removeEventListener || t5.prototype.detachEvent);
                }(r3));
              return a;
            }.call(this);
          }, t3.prototype.handleResize = function(t4) {
            var e4, r3, i3, s, n, a, o, l;
            return r3 = t4.that, this.timerElements[r3.tagName.toLowerCase()] ? this.initTimer(r3) : (i3 = document.createElement("iframe"), r3.appendChild(i3), i3.style.width = "100%", i3.style.height = "100%", i3.style.position = "absolute", i3.style.zIndex = -999, i3.style.opacity = 0, i3.style.top = 0, i3.style.left = 0, e4 = window.getComputedStyle ? getComputedStyle(r3) : r3.currentStyle, n = r3.style.position === "", a = e4.position === "static" && n, s = e4.position === "" && r3.style.position === "", (a || s) && (r3.style.position = "relative"), (o = i3.contentWindow) != null && (o.onresize = (l = this, function(t5) {
              return l.dispatchEvent(r3);
            })), r3.iframe = i3), r3.isAnyResizeEventInited = true;
          }, t3.prototype.initTimer = function(t4) {
            var e4, r3, i3;
            return r3 = 0, e4 = 0, this.interval = setInterval((i3 = this, function() {
              var s, n;
              if (n = t4.offsetWidth, s = t4.offsetHeight, n !== r3 || s !== e4)
                return i3.dispatchEvent(t4), r3 = n, e4 = s;
            }), this.o.interval || 62.5);
          }, t3.prototype.dispatchEvent = function(t4) {
            var e4;
            return document.createEvent ? ((e4 = document.createEvent("HTMLEvents")).initEvent("onresize", false, false), t4.dispatchEvent(e4)) : !!document.createEventObject && (e4 = document.createEventObject(), t4.fireEvent("onresize", e4));
          }, t3.prototype.destroy = function() {
            var t4, e4, r3, i3, s, n;
            for (clearInterval(this.interval), this.interval = null, window.isAnyResizeEventInited = false, n = [], t4 = e4 = 0, r3 = (s = this.allowedProtos).length; e4 < r3; t4 = ++e4)
              (i3 = s[t4]).prototype != null && n.push(function(t5) {
                return t5.prototype.addEventListener || t5.prototype.attachEvent, t5.prototype.addEventListener ? t5.prototype.addEventListener = Element.prototype.addEventListener : t5.prototype.attachEvent && (t5.prototype.attachEvent = Element.prototype.attachEvent), t5.prototype.removeEventListener ? t5.prototype.removeEventListener = Element.prototype.removeEventListener : t5.prototype.detachEvent ? t5.prototype.detachEvent = Element.prototype.detachEvent : void 0;
              }(i3));
            return n;
          }, t3;
        }(), (r2 = function() {
          return new i2();
        }.apply(e3, [])) === void 0 || (t2.exports = r2);
      }, 326: (t2, e3, r2) => {
        function i2(t3) {
          if (t3 === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t3;
        }
        r2.d(e3, { Z: () => i2 });
      }, 671: (t2, e3, r2) => {
        function i2(t3, e4) {
          if (!(t3 instanceof e4))
            throw new TypeError("Cannot call a class as a function");
        }
        r2.d(e3, { Z: () => i2 });
      }, 144: (t2, e3, r2) => {
        function i2(t3, e4) {
          for (var r3 = 0; r3 < e4.length; r3++) {
            var i3 = e4[r3];
            i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(t3, i3.key, i3);
          }
        }
        function s(t3, e4, r3) {
          return e4 && i2(t3.prototype, e4), r3 && i2(t3, r3), t3;
        }
        r2.d(e3, { Z: () => s });
      }, 752: (t2, e3, r2) => {
        r2.d(e3, { Z: () => s });
        var i2 = r2(120);
        function s(t3, e4, r3) {
          return (s = typeof Reflect != "undefined" && Reflect.get ? Reflect.get : function(t4, e5, r4) {
            var s2 = function(t5, e6) {
              for (; !Object.prototype.hasOwnProperty.call(t5, e6) && (t5 = (0, i2.Z)(t5)) !== null; )
                ;
              return t5;
            }(t4, e5);
            if (s2) {
              var n = Object.getOwnPropertyDescriptor(s2, e5);
              return n.get ? n.get.call(r4) : n.value;
            }
          })(t3, e4, r3 || t3);
        }
      }, 120: (t2, e3, r2) => {
        function i2(t3) {
          return (i2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(t4) {
            return t4.__proto__ || Object.getPrototypeOf(t4);
          })(t3);
        }
        r2.d(e3, { Z: () => i2 });
      }, 340: (t2, e3, r2) => {
        function i2(t3, e4) {
          return (i2 = Object.setPrototypeOf || function(t4, e5) {
            return t4.__proto__ = e5, t4;
          })(t3, e4);
        }
        function s(t3, e4) {
          if (typeof e4 != "function" && e4 !== null)
            throw new TypeError("Super expression must either be null or a function");
          t3.prototype = Object.create(e4 && e4.prototype, { constructor: { value: t3, writable: true, configurable: true } }), e4 && i2(t3, e4);
        }
        r2.d(e3, { Z: () => s });
      }, 963: (t2, e3, r2) => {
        r2.d(e3, { Z: () => n });
        var i2 = r2(2), s = r2(326);
        function n(t3, e4) {
          if (e4 && ((0, i2.Z)(e4) === "object" || typeof e4 == "function"))
            return e4;
          if (e4 !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
          return (0, s.Z)(t3);
        }
      }, 2: (t2, e3, r2) => {
        function i2(t3) {
          return (i2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t4) {
            return typeof t4;
          } : function(t4) {
            return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
          })(t3);
        }
        r2.d(e3, { Z: () => i2 });
      } }, e2 = {};
      function r(i2) {
        var s = e2[i2];
        if (s !== void 0)
          return s.exports;
        var n = e2[i2] = { exports: {} };
        return t[i2](n, n.exports, r), n.exports;
      }
      r.n = (t2) => {
        var e3 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return r.d(e3, { a: e3 }), e3;
      }, r.d = (t2, e3) => {
        for (var i2 in e3)
          r.o(e3, i2) && !r.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e3[i2] });
      }, r.o = (t2, e3) => Object.prototype.hasOwnProperty.call(t2, e3);
      var i = {};
      return (() => {
        r.d(i, { default: () => rt });
        var t2 = r(52), e3 = r.n(t2), s = r(806), n = r.n(s), a = r(671), o = r(144), l = r(340), u = r(963), h = r(120), p = r(342);
        function c(t3, e4, r2) {
          return e4 in t3 ? Object.defineProperty(t3, e4, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[e4] = r2, t3;
        }
        var _ = r(752), f = r(755), d = r(973);
        function y(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        const v = function(t3) {
          (0, l.Z)(r2, t3);
          var e4 = y(r2);
          function r2() {
            var t4, i2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return (0, a.Z)(this, r2), (t4 = e4.call(this, i2))._transformTweenOptions(), !t4._o.isTweenLess && t4._makeTween(), !t4._o.isTimelineLess && t4._makeTimeline(), t4;
          }
          return (0, o.Z)(r2, [{ key: "play", value: function() {
            return this.timeline.play.apply(this.timeline, arguments), this;
          } }, { key: "playBackward", value: function() {
            return this.timeline.playBackward.apply(this.timeline, arguments), this;
          } }, { key: "pause", value: function() {
            return this.timeline.pause.apply(this.timeline, arguments), this;
          } }, { key: "stop", value: function() {
            return this.timeline.stop.apply(this.timeline, arguments), this;
          } }, { key: "reset", value: function() {
            return this.timeline.reset.apply(this.timeline, arguments), this;
          } }, { key: "replay", value: function() {
            return this.timeline.replay.apply(this.timeline, arguments), this;
          } }, { key: "replayBackward", value: function() {
            return this.timeline.replayBackward.apply(this.timeline, arguments), this;
          } }, { key: "resume", value: function() {
            return this.timeline.resume.apply(this.timeline, arguments), this;
          } }, { key: "setProgress", value: function() {
            return this.timeline.setProgress.apply(this.timeline, arguments), this;
          } }, { key: "setSpeed", value: function() {
            return this.timeline.setSpeed.apply(this.timeline, arguments), this;
          } }, { key: "_transformTweenOptions", value: function() {
          } }, { key: "_makeTween", value: function() {
            this._o.callbacksContext = this._o.callbacksContext || this, this.tween = new f.Z(this._o), this._o.isTimelineLess && (this.timeline = this.tween);
          } }, { key: "_makeTimeline", value: function() {
            this._o.timeline = this._o.timeline || {}, this._o.timeline.callbacksContext = this._o.callbacksContext || this, this.timeline = new p.Z(this._o.timeline), this._isTimeline = true, this.tween && this.timeline.add(this.tween);
          } }]), r2;
        }(d.Z);
        function m(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        const g = function(t3) {
          (0, l.Z)(i2, t3);
          var r2 = m(i2);
          function i2() {
            return (0, a.Z)(this, i2), r2.apply(this, arguments);
          }
          return (0, o.Z)(i2, [{ key: "then", value: function(t4) {
            if (t4 == null || !Object.keys(t4).length)
              return 1;
            var e4 = this._history[this._history.length - 1], r3 = this._mergeThenOptions(e4, t4);
            this._resetMergedFlags(r3);
            var i3 = new this.constructor(r3);
            return i3._masterModule = this, this._modules.push(i3), this.timeline.append(i3), this;
          } }, { key: "_resetMergedFlags", value: function(t4) {
            return t4.isTimelineLess = true, t4.isShowStart = false, t4.isRefreshState = false, t4.callbacksContext = this._props.callbacksContext || this, t4.prevChainModule = e3().getLastItem(this._modules), t4.masterModule = this, t4;
          } }, { key: "_vars", value: function() {
            (0, _.Z)((0, h.Z)(i2.prototype), "_vars", this).call(this), this._masterModule = this._o.masterModule, this._isChained = !!this._masterModule;
            var t4 = e3().cloneObj(this._props);
            for (var r3 in this._arrayPropertyMap)
              if (this._o[r3]) {
                var s2 = this._parsePreArrayProperty(r3, this._o[r3]);
                t4[r3] = s2;
              }
            this._history = [t4], this._modules = [this], this._nonMergeProps = { shape: 1 };
          } }, { key: "_mergeThenOptions", value: function(t4, e4) {
            var r3 = {};
            return this._mergeStartLoop(r3, t4), this._mergeEndLoop(r3, t4, e4), this._history.push(r3), r3;
          } }, { key: "_checkStartValue", value: function(t4, e4) {
            return e4;
          } }, { key: "_mergeStartLoop", value: function(t4, r3) {
            for (var i3 in r3) {
              var s2 = r3[i3];
              r3[i3] != null && (e3().isTweenProp(i3) && i3 !== "duration" || (this._isDelta(s2) ? t4[i3] = e3().getDeltaEnd(s2) : t4[i3] = s2));
            }
          } }, { key: "_mergeEndLoop", value: function(t4, e4, r3) {
            for (var i3 in r3)
              if (i3 != "parent") {
                var s2 = r3[i3], n2 = e4[i3] != null ? e4[i3] : this._defaults[i3];
                if (n2 = this._checkStartValue(i3, n2), s2 != null) {
                  var a2 = i3 === "radiusX" || i3 === "radiusY";
                  a2 && n2 == null && (n2 = e4.radius), (a2 = i3 === "scaleX" || i3 === "scaleY") && n2 == null && (n2 = e4.scale), t4[i3] = this._mergeThenProperty(i3, n2, s2);
                }
              } else
                t4[i3] = r3[i3];
          } }, { key: "_mergeThenProperty", value: function(t4, r3, i3) {
            var s2, n2, a2 = typeof i3 == "boolean";
            if (e3().isTweenProp(t4) || this._nonMergeProps[t4] || a2)
              return i3;
            if (e3().isObject(i3) && i3.to != null && (s2 = i3.curve, n2 = i3.easing, i3 = i3.to), this._isDelta(i3))
              return this._parseDeltaValues(t4, i3);
            var o2, l2, u2 = this._parsePreArrayProperty(t4, i3);
            return this._isDelta(r3) ? (c(o2 = {}, e3().getDeltaEnd(r3), u2), c(o2, "easing", n2), c(o2, "curve", s2), o2) : (c(l2 = {}, r3, u2), c(l2, "easing", n2), c(l2, "curve", s2), l2);
          } }, { key: "_getArrayLength", value: function(t4) {
            return e3().isArray(t4) ? t4.length : -1;
          } }, { key: "_isDelta", value: function(t4) {
            var r3 = e3().isObject(t4);
            return !(!(r3 = r3 && !t4.unit) || e3().isArray(t4) || e3().isDOM(t4));
          } }, { key: "_isFirstInChain", value: function() {
            return !this._masterModule;
          } }, { key: "_isLastInChain", value: function() {
            var t4 = this._masterModule;
            return t4 ? this === e3().getLastItem(t4._modules) : this._modules.length === 1;
          } }]), i2;
        }(v);
        function k(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        const w = function(t3) {
          (0, l.Z)(i2, t3);
          var r2 = k(i2);
          function i2() {
            return (0, a.Z)(this, i2), r2.apply(this, arguments);
          }
          return (0, o.Z)(i2, [{ key: "tune", value: function(t4) {
            if (t4 && Object.keys(t4).length) {
              for (var r3 in this._transformHistory(t4), this._tuneNewOptions(t4), this._history[0] = e3().cloneObj(this._props), this._arrayPropertyMap)
                t4[r3] != null && (this._history[0][r3] = this._preparsePropValue(r3, t4[r3]));
              this._tuneSubModules(), this._resetTweens();
            }
            return this;
          } }, { key: "generate", value: function() {
            return this.tune(this._o);
          } }, { key: "_transformHistory", value: function(t4) {
            for (var e4 in t4) {
              var r3 = t4[e4];
              this._transformHistoryFor(e4, this._preparsePropValue(e4, r3));
            }
          } }, { key: "_transformHistoryFor", value: function(t4, e4) {
            for (var r3 = 0; r3 < this._history.length && (e4 = this._transformHistoryRecord(r3, t4, e4)) != null; r3++)
              ;
          } }, { key: "_transformHistoryRecord", value: function(t4, r3, i3, s2, n2) {
            if (i3 == null)
              return null;
            s2 = s2 == null ? this._history[t4] : s2, n2 = n2 == null ? this._history[t4 + 1] : n2;
            var a2 = s2[r3], o2 = n2 == null ? null : n2[r3];
            if (t4 === 0) {
              if (s2[r3] = i3, e3().isTweenProp(r3) && r3 !== "duration")
                return null;
              var l2 = this._isRewriteNext(a2, o2), u2 = this._isDelta(i3) ? e3().getDeltaEnd(i3) : i3;
              return l2 ? u2 : null;
            }
            return this._isDelta(a2) ? (s2[r3] = c({}, i3, e3().getDeltaEnd(a2)), null) : (s2[r3] = i3, this._isRewriteNext(a2, o2) ? i3 : null);
          } }, { key: "_isRewriteNext", value: function(t4, r3) {
            if (r3 == null && t4 != null)
              return false;
            var i3 = t4 === r3, s2 = this._isDelta(r3), n2 = false, a2 = false;
            return this._isDelta(t4) && s2 ? e3().getDeltaEnd(t4) == e3().getDeltaStart(r3) && (a2 = true) : s2 && (n2 = e3().getDeltaStart(r3) === "".concat(t4)), i3 || n2 || a2;
          } }, { key: "_tuneSubModules", value: function() {
            for (var t4 = 1; t4 < this._modules.length; t4++)
              this._modules[t4]._tuneNewOptions(this._history[t4]);
          } }, { key: "_resetTweens", value: function() {
            var t4 = 0, e4 = this.timeline._timelines;
            if (e4 != null) {
              for (var r3 = 0; r3 < e4.length; r3++) {
                var i3 = e4[r3], s2 = e4[r3 - 1];
                t4 += s2 ? s2._props.repeatTime : 0, this._resetTween(i3, this._history[r3], t4);
              }
              this.timeline._setProp(this._props.timeline), this.timeline._recalcTotalDuration();
            }
          } }, { key: "_resetTween", value: function(t4, e4) {
            var r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            e4.shiftTime = r3, t4._setProp(e4);
          } }]), i2;
        }(g);
        function b(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        var S = function(t3) {
          (0, l.Z)(i2, t3);
          var r2 = b(i2);
          function i2(t4, e4) {
            var s2;
            return (0, a.Z)(this, i2), s2 = r2.call(this), (0, u.Z)(s2, s2._init(t4, e4));
          }
          return (0, o.Z)(i2, [{ key: "then", value: function(t4) {
            if (t4 == null)
              return this;
            for (var e4 = 0; e4 < this._modules.length; e4++)
              this._modules[e4].then(this._getOptionByIndex(e4, t4));
            return this.timeline._recalcTotalDuration(), this;
          } }, { key: "tune", value: function(t4) {
            if (t4 == null)
              return this;
            for (var e4 = 0; e4 < this._modules.length; e4++)
              this._modules[e4].tune(this._getOptionByIndex(e4, t4));
            return this.timeline._recalcTotalDuration(), this;
          } }, { key: "generate", value: function() {
            for (var t4 = 0; t4 < this._modules.length; t4++)
              this._modules[t4].generate();
            return this.timeline._recalcTotalDuration(), this;
          } }, { key: "_getOptionByMod", value: function(t4, r3, i3) {
            var s2 = i3[t4];
            s2 + "" != "[object NodeList]" && s2 + "" != "[object HTMLCollection]" || (s2 = Array.prototype.slice.call(s2, 0));
            var n2 = e3().isArray(s2) ? s2[r3 % s2.length] : s2;
            return e3().parseIfStagger(n2, r3);
          } }, { key: "_getOptionByIndex", value: function(t4, e4) {
            var r3 = this, i3 = {};
            return Object.keys(e4).forEach(function(s2) {
              return i3[s2] = r3._getOptionByMod(s2, t4, e4);
            }), i3;
          } }, { key: "_getChildQuantity", value: function(t4, r3) {
            if (typeof t4 == "number")
              return t4;
            var i3 = r3[t4];
            return e3().isArray(i3) || i3 + "" == "[object NodeList]" ? i3.length : i3 + "" == "[object HTMLCollection]" ? Array.prototype.slice.call(i3, 0).length : i3 instanceof HTMLElement || typeof i3 == "string" ? 1 : void 0;
          } }, { key: "_init", value: function(t4, e4) {
            var r3 = this._getChildQuantity(t4.quantifier || "el", t4);
            this._createTimeline(t4), this._modules = [];
            for (var i3 = 0; i3 < r3; i3++) {
              var s2 = this._getOptionByIndex(i3, t4);
              s2.isRunLess = true, s2.index = i3;
              var n2 = new e4(s2);
              this._modules.push(n2), this.timeline.add(n2);
            }
            return this;
          } }, { key: "_createTimeline", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.timeline = new p.Z(t4.timeline);
          } }, { key: "_makeTween", value: function() {
          } }, { key: "_makeTimeline", value: function() {
          } }]), i2;
        }(w), P = r(47), T = r(283), x = r.n(T);
        function C(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        const O = function(t3) {
          (0, l.Z)(i2, t3);
          var r2 = C(i2);
          function i2() {
            return (0, a.Z)(this, i2), r2.apply(this, arguments);
          }
          return (0, o.Z)(i2, [{ key: "_declareDefaults", value: function() {
            this._defaults = { parent: document.body, className: "", shape: "circle", stroke: "transparent", strokeOpacity: 1, strokeLinecap: "", strokeWidth: 2, strokeDasharray: 0, strokeDashoffset: 0, fill: "deeppink", fillOpacity: 1, isSoftHide: true, isForce3d: false, left: "50%", top: "50%", x: 0, y: 0, rotate: 0, scale: 1, scaleX: null, scaleY: null, origin: "50% 50%", opacity: 1, rx: 0, ry: 0, points: 3, radius: 50, radiusX: null, radiusY: null, isShowStart: false, isShowEnd: true, isRefreshState: true, duration: 400, width: null, height: null, isWithShape: true, callbacksContext: this };
          } }, { key: "tune", value: function(t4) {
            return (0, _.Z)((0, h.Z)(i2.prototype), "tune", this).call(this, t4), this._getMaxSizeInChain(), this;
          } }, { key: "then", value: function(t4) {
            return (0, _.Z)((0, h.Z)(i2.prototype), "then", this).call(this, t4), this._getMaxSizeInChain(), this;
          } }, { key: "_vars", value: function() {
            return (0, _.Z)((0, h.Z)(i2.prototype), "_vars", this).call(this), this._lastSet = {}, this._prevChainModule = this._o.prevChainModule, this.isForeign = !!this._o.ctx, this.isForeignBit = !!this._o.shape;
          } }, { key: "_render", value: function() {
            return this._isRendered || this._isChained ? this._isChained && (this.el = this._masterModule.el, this.shapeModule = this._masterModule.shapeModule) : (this.el = document.createElement("div"), this.el.setAttribute("data-name", "mojs-shape"), this.el.setAttribute("class", this._props.className), this._createShape(), this._props.parent.appendChild(this.el), this._setElStyles(), this._setProgress(0, 0), this._props.isShowStart ? this._show() : this._hide(), this._isRendered = true), this;
          } }, { key: "_setElStyles", value: function() {
            if (this.el) {
              var t4 = this._props, r3 = this.el.style, i3 = t4.shapeWidth, s2 = t4.shapeHeight;
              if (r3.position = "absolute", this._setElSizeStyles(i3, s2), t4.isForce3d) {
                var n2 = "backface-visibility";
                r3["".concat(n2)] = "hidden", r3["".concat(e3().prefix.css).concat(n2)] = "hidden";
              }
            }
          } }, { key: "_setElSizeStyles", value: function(t4, e4) {
            var r3 = this.el.style;
            r3.width = "".concat(t4, "px"), r3.height = "".concat(e4, "px"), r3["margin-left"] = "".concat(-t4 / 2, "px"), r3["margin-top"] = "".concat(-e4 / 2, "px");
          } }, { key: "_draw", value: function() {
            if (this.shapeModule) {
              var t4 = this._props, e4 = this.shapeModule._props;
              e4.rx = t4.rx, e4.ry = t4.ry, e4.stroke = t4.stroke, e4["stroke-width"] = t4.strokeWidth, e4["stroke-opacity"] = t4.strokeOpacity, e4["stroke-dasharray"] = t4.strokeDasharray, e4["stroke-dashoffset"] = t4.strokeDashoffset, e4["stroke-linecap"] = t4.strokeLinecap, e4.fill = t4.fill, e4["fill-opacity"] = t4.fillOpacity, e4.radius = t4.radius, e4.radiusX = t4.radiusX, e4.radiusY = t4.radiusY, e4.points = t4.points, this.shapeModule._draw(), this._drawEl();
            }
          } }, { key: "_drawEl", value: function() {
            if (this.el == null)
              return true;
            var t4 = this._props, r3 = this.el.style;
            if (this._isPropChanged("opacity") && (r3.opacity = t4.opacity), !this.isForeign) {
              this._isPropChanged("left") && (r3.left = t4.left), this._isPropChanged("top") && (r3.top = t4.top);
              var i3 = this._isPropChanged("x"), s2 = this._isPropChanged("y"), n2 = i3 || s2, a2 = this._isPropChanged("scaleX"), o2 = this._isPropChanged("scaleY"), l2 = this._isPropChanged("scale"), u2 = this._isPropChanged("rotate");
              if (l2 = l2 || a2 || o2, n2 || l2 || u2) {
                var h2 = this._fillTransform();
                r3["".concat(e3().prefix.css, "transform")] = h2, r3.transform = h2;
              }
              if (this._isPropChanged("origin") || this._deltas.origin) {
                var p2 = this._fillOrigin();
                r3["".concat(e3().prefix.css, "transform-origin")] = p2, r3["transform-origin"] = p2;
              }
            }
          } }, { key: "_isPropChanged", value: function(t4) {
            return this._lastSet[t4] == null && (this._lastSet[t4] = {}), this._lastSet[t4].value !== this._props[t4] && (this._lastSet[t4].value = this._props[t4], true);
          } }, { key: "_tuneNewOptions", value: function(t4) {
            if ((0, _.Z)((0, h.Z)(i2.prototype), "_tuneNewOptions", this).call(this, t4), t4 == null || !Object.keys(t4).length)
              return 1;
            this._setElStyles();
          } }, { key: "_getMaxRadius", value: function(t4) {
            var e4;
            return e4 = this._getRadiusSize("radius"), this._getRadiusSize(t4, e4);
          } }, { key: "_increaseSizeWithEasing", value: function() {
            var t4 = this._props, e4 = this._o.easing;
            switch (e4 && typeof e4 == "string" && e4.toLowerCase()) {
              case "elastic.out":
              case "elastic.inout":
                t4.size *= 1.25;
                break;
              case "back.out":
              case "back.inout":
                t4.size *= 1.1;
            }
          } }, { key: "_getRadiusSize", value: function(t4) {
            var e4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r3 = this._deltas[t4];
            return r3 != null ? Math.max(Math.abs(r3.end), Math.abs(r3.start)) : this._props[t4] != null ? parseFloat(this._props[t4]) : e4;
          } }, { key: "_getShapeSize", value: function() {
            var t4 = this._props, e4 = this._getMaxStroke();
            t4.shapeWidth = t4.width != null ? t4.width : 2 * this._getMaxRadius("radiusX") + e4, t4.shapeHeight = t4.height != null ? t4.height : 2 * this._getMaxRadius("radiusY") + e4;
          } }, { key: "_createShape", value: function() {
            if (this._getShapeSize(), this._props.isWithShape) {
              var t4 = this._props, e4 = n().getShape(this._props.shape);
              this.shapeModule = new e4({ width: t4.shapeWidth, height: t4.shapeHeight, parent: this.el });
            }
          } }, { key: "_getMaxSizeInChain", value: function() {
            for (var t4 = 0, e4 = 0, r3 = 0; r3 < this._modules.length; r3++)
              this._modules[r3]._getShapeSize(), t4 = Math.max(t4, this._modules[r3]._props.shapeWidth), e4 = Math.max(e4, this._modules[r3]._props.shapeHeight);
            this.shapeModule && this.shapeModule._setSize(t4, e4), this._setElSizeStyles(t4, e4);
          } }, { key: "_getMaxStroke", value: function() {
            var t4 = this._props, e4 = this._deltas.strokeWidth;
            return e4 != null ? Math.max(e4.start, e4.end) : t4.strokeWidth;
          } }, { key: "_setProgress", value: function(t4, e4) {
            d.Z.prototype._setProgress.call(this, t4, e4), this._draw(t4);
          } }, { key: "_applyCallbackOverrides", value: function(t4) {
            var e4 = this, r3 = this._props;
            t4.callbackOverrides = { onUpdate: function(t5, r4) {
              return e4._setProgress(t5, r4);
            }, onStart: function(t5) {
              e4._isChained || (t5 ? e4._show() : r3.isShowStart || e4._hide());
            }, onComplete: function(t5) {
              e4._isLastInChain() && (t5 ? r3.isShowEnd || e4._hide() : e4._show());
            }, onRefresh: function(t5) {
              r3.isRefreshState && t5 && e4._refreshBefore();
            } };
          } }, { key: "_transformTweenOptions", value: function() {
            this._applyCallbackOverrides(this._o);
          } }, { key: "_fillTransform", value: function() {
            var t4 = this._props, e4 = t4.scaleX != null ? t4.scaleX : t4.scale, r3 = t4.scaleY != null ? t4.scaleY : t4.scale, i3 = "".concat(e4, ", ").concat(r3);
            return "translate(".concat(t4.x, ", ").concat(t4.y, ") rotate(").concat(t4.rotate, "deg) scale(").concat(i3, ")");
          } }, { key: "_fillOrigin", value: function() {
            for (var t4 = this._props, e4 = "", r3 = 0; r3 < t4.origin.length; r3++)
              e4 += "".concat(t4.origin[r3].string, " ");
            return e4;
          } }, { key: "_refreshBefore", value: function() {
            this._setProgress(this.tween._props.easing(0), 0), this._props.isShowStart ? this._show() : this._hide();
          } }, { key: "_showByTransform", value: function() {
            this._lastSet.scale = null, this._drawEl();
          } }]), i2;
        }(w);
        function M(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        const D = function(t3) {
          (0, l.Z)(i2, t3);
          var r2 = M(i2);
          function i2() {
            return (0, a.Z)(this, i2), r2.apply(this, arguments);
          }
          return (0, o.Z)(i2, [{ key: "_declareDefaults", value: function() {
            (0, _.Z)((0, h.Z)(i2.prototype), "_declareDefaults", this).call(this), this._defaults.isSwirl = true, this._defaults.swirlSize = 10, this._defaults.swirlFrequency = 3, this._defaults.pathScale = 1, this._defaults.degreeShift = 0, this._defaults.radius = 5, this._defaults.x = 0, this._defaults.y = 0, this._defaults.scale = { 1: 0 }, this._defaults.direction = 1;
          } }, { key: "_extendDefaults", value: function() {
            (0, _.Z)((0, h.Z)(i2.prototype), "_extendDefaults", this).call(this), this._calcPosData();
          } }, { key: "_tuneNewOptions", value: function(t4) {
            t4 != null && ((0, _.Z)((0, h.Z)(i2.prototype), "_tuneNewOptions", this).call(this, t4), t4.x == null && t4.y == null || this._calcPosData());
          } }, { key: "_calcPosData", value: function() {
            var t4 = this._getPosValue("x"), r3 = this._getPosValue("y"), i3 = 90 + Math.atan(r3.delta / t4.delta || 0) * e3().RAD_TO_DEG;
            this._posData = { radius: Math.sqrt(t4.delta * t4.delta + r3.delta * r3.delta), rotate: t4.delta < 0 ? i3 + 180 : i3, x: t4, y: r3 };
          } }, { key: "_getPosValue", value: function(t4) {
            var r3 = this._deltas[t4];
            if (r3)
              return delete this._deltas[t4], { start: r3.start.value, end: r3.end.value, delta: r3.delta, units: r3.end.unit };
            var i3 = e3().parseUnit(this._props[t4]);
            return { start: i3.value, end: i3.value, delta: 0, units: i3.unit };
          } }, { key: "_setProgress", value: function(t4, e4) {
            this._progress = t4, this._calcCurrentProps(t4, e4), this._calcSwirlXY(t4), this._draw(t4);
          } }, { key: "_calcSwirlXY", value: function(t4) {
            var r3 = this._props, i3 = this._posData.rotate + r3.degreeShift, s2 = e3().getRadialPoint({ rotate: r3.isSwirl ? i3 + this._getSwirl(t4) : i3, radius: t4 * this._posData.radius * r3.pathScale, center: { x: this._posData.x.start, y: this._posData.y.start } }), n2 = s2.x, a2 = s2.y, o2 = 1e-6;
            n2 > 0 && n2 < o2 && (n2 = o2), a2 > 0 && a2 < o2 && (a2 = o2), n2 < 0 && n2 > -1e-6 && (n2 = -1e-6), a2 < 0 && a2 > -1e-6 && (a2 = -1e-6), r3.x = this._o.ctx ? n2 : "".concat(n2).concat(this._posData.x.units), r3.y = this._o.ctx ? a2 : "".concat(a2).concat(this._posData.y.units);
          } }, { key: "_getSwirl", value: function(t4) {
            var e4 = this._props;
            return e4.direction * e4.swirlSize * Math.sin(e4.swirlFrequency * t4);
          } }, { key: "_draw", value: function() {
            var t4 = this._props.isWithShape ? "_draw" : "_drawEl";
            O.prototype[t4].call(this);
          } }]), i2;
        }(O);
        function Z(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        var R = function(t3) {
          (0, l.Z)(i2, t3);
          var r2 = Z(i2);
          function i2() {
            return (0, a.Z)(this, i2), r2.apply(this, arguments);
          }
          return (0, o.Z)(i2, [{ key: "_declareDefaults", value: function() {
            this._defaults = { count: 5, degree: 360, radius: { 0: 50 }, radiusX: null, radiusY: null, width: 0, height: 0 };
          } }, { key: "then", value: function(t4) {
            this._removeTweenProperties(t4);
            var e4 = this._masterThen(t4), r3 = this._childThen(t4);
            return this._setSwirlDuration(e4, this._calcPackTime(r3)), this.timeline._recalcTotalDuration(), this;
          } }, { key: "tune", value: function(t4) {
            return t4 == null || (this._saveTimelineOptions(t4), this.timeline._setProp(this._timelineOptions), this._removeTweenProperties(t4), this._tuneNewOptions(t4), this.masterSwirl.tune(t4), this._tuneSwirls(t4), this._recalcModulesTime()), this;
          } }, { key: "_extendDefaults", value: function() {
            this._removeTweenProperties(this._o), (0, _.Z)((0, h.Z)(i2.prototype), "_extendDefaults", this).call(this);
          } }, { key: "_removeTweenProperties", value: function(t4) {
            for (var r3 in e3().tweenOptionMap)
              this._defaults[r3] == null && delete t4[r3];
          } }, { key: "_recalcModulesTime", value: function() {
            for (var t4 = this.masterSwirl._modules, e4 = this._swirls, r3 = 0, i3 = 0; i3 < t4.length; i3++) {
              var s2 = t4[i3].tween, n2 = this._calcPackTime(e4[i3]);
              s2._setProp({ duration: n2, shiftTime: r3 }), r3 += n2;
            }
            this.timeline._recalcTotalDuration();
          } }, { key: "_tuneSwirls", value: function(t4) {
            for (var e4 = this._swirls[0], r3 = 0; r3 < e4.length; r3++) {
              var i3 = e4[r3], s2 = this._getChildOption(t4 || {}, r3), n2 = s2.degreeShift != null;
              n2 || (s2.degreeShift = this._swirls[0][r3]._props.degreeShift), this._addBurstProperties(s2, r3), n2 || delete s2.degreeShift, i3.tune(s2), this._refreshBurstOptions(i3._modules, r3);
            }
          } }, { key: "_refreshBurstOptions", value: function(t4, e4) {
            for (var r3 = 1; r3 < t4.length; r3++) {
              var i3 = t4[r3], s2 = {};
              this._addBurstProperties(s2, e4, r3), i3._tuneNewOptions(s2);
            }
          } }, { key: "_masterThen", value: function(t4) {
            this.masterSwirl.then(t4);
            var r3 = e3().getLastItem(this.masterSwirl._modules);
            return this._masterSwirls.push(r3), r3;
          } }, { key: "_childThen", value: function(t4) {
            for (var r3 = this._swirls[0], i3 = [], s2 = 0; s2 < r3.length; s2++) {
              var n2 = this._getChildOption(t4, s2), a2 = r3[s2];
              n2.parent = this.el, this._addBurstProperties(n2, s2, this._masterSwirls.length - 1), a2.then(n2), i3.push(e3().getLastItem(a2._modules));
            }
            return this._swirls[this._masterSwirls.length - 1] = i3, i3;
          } }, { key: "_vars", value: function() {
            (0, _.Z)((0, h.Z)(i2.prototype), "_vars", this).call(this), this._bufferTimeline = new p.Z();
          } }, { key: "_render", value: function() {
            this._o.isWithShape = false, this._o.isSwirl = this._props.isSwirl, this._o.callbacksContext = this, this._saveTimelineOptions(this._o), this.masterSwirl = new L(this._o), this._masterSwirls = [this.masterSwirl], this.el = this.masterSwirl.el, this._renderSwirls();
          } }, { key: "_renderSwirls", value: function() {
            for (var t4 = this._props, e4 = [], r3 = 0; r3 < t4.count; r3++) {
              var i3 = this._getChildOption(this._o, r3);
              e4.push(new E(this._addOptionalProps(i3, r3)));
            }
            this._swirls = { 0: e4 }, this._setSwirlDuration(this.masterSwirl, this._calcPackTime(e4));
          } }, { key: "_saveTimelineOptions", value: function(t4) {
            this._timelineOptions = t4.timeline, delete t4.timeline;
          } }, { key: "_calcPackTime", value: function(t4) {
            for (var e4 = 0, r3 = 0; r3 < t4.length; r3++) {
              var i3 = t4[r3].tween._props;
              e4 = Math.max(i3.repeatTime / i3.speed, e4);
            }
            return e4;
          } }, { key: "_setSwirlDuration", value: function(t4, e4) {
            t4.tween._setProp("duration", e4), t4.timeline && t4.timeline._recalcTotalDuration && t4.timeline._recalcTotalDuration();
          } }, { key: "_getChildOption", value: function(t4, e4) {
            var r3 = {};
            for (var i3 in t4.children)
              r3[i3] = this._getPropByMod(i3, e4, t4.children);
            return r3;
          } }, { key: "_getPropByMod", value: function(t4, r3) {
            var i3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s2 = i3[t4];
            return e3().isArray(s2) ? s2[r3 % s2.length] : s2;
          } }, { key: "_addOptionalProps", value: function(t4, e4) {
            return t4.index = e4, t4.parent = this.masterSwirl.el, this._addBurstProperties(t4, e4), t4;
          } }, { key: "_addBurstProperties", value: function(t4, e4, r3) {
            var i3 = this._index;
            this._index = e4;
            var s2 = this._parseProperty("degreeShift", t4.degreeShift || 0);
            this._index = i3;
            var n2 = this._props, a2 = n2.degree % 360 == 0 ? n2.count : n2.count - 1 || 1, o2 = n2.degree / a2, l2 = this._getSidePoint("start", e4 * o2 + s2, r3), u2 = this._getSidePoint("end", e4 * o2 + s2, r3);
            t4.x = this._getDeltaFromPoints("x", l2, u2), t4.y = this._getDeltaFromPoints("y", l2, u2), t4.rotate = this._getBitRotation(t4.rotate || 0, s2, e4);
          } }, { key: "_getBitRotation", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, r3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i3 = arguments.length > 2 ? arguments[2] : void 0, s2 = this._props, n2 = s2.degree % 360 == 0 ? s2.count : s2.count - 1 || 1, a2 = s2.degree / n2, o2 = i3 * a2 + 90;
            if (o2 += r3, this._isDelta(t4)) {
              var l2 = {}, u2 = Object.keys(t4), h2 = u2[0], p2 = t4[h2];
              h2 = e3().parseStringOption(h2, i3), p2 = e3().parseStringOption(p2, i3), l2[parseFloat(h2) + o2] = parseFloat(p2) + o2, t4 = l2;
            } else
              t4 += o2;
            return t4;
          } }, { key: "_getSidePoint", value: function(t4, r3, i3) {
            var s2 = this._getSideRadius(t4, i3);
            return e3().getRadialPoint({ radius: s2.radius, radiusX: s2.radiusX, radiusY: s2.radiusY, rotate: r3, center: { x: 0, y: 0 } });
          } }, { key: "_getSideRadius", value: function(t4, e4) {
            return { radius: this._getRadiusByKey("radius", t4, e4), radiusX: this._getRadiusByKey("radiusX", t4, e4), radiusY: this._getRadiusByKey("radiusY", t4, e4) };
          } }, { key: "_getRadiusByKey", value: function(t4, e4) {
            var r3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i3 = this._masterSwirls[r3], s2 = i3._deltas, n2 = i3._props;
            return s2[t4] != null ? s2[t4][e4] : n2[t4] != null ? n2[t4] : void 0;
          } }, { key: "_getDeltaFromPoints", value: function(t4, e4, r3) {
            var i3 = {};
            return e4[t4] === r3[t4] ? i3 = e4[t4] : i3[e4[t4]] = r3[t4], i3;
          } }, { key: "_makeTimeline", value: function() {
            this._o.timeline = this._timelineOptions, (0, _.Z)((0, h.Z)(i2.prototype), "_makeTimeline", this).call(this), this.timeline.add(this.masterSwirl, this._swirls[0]);
          } }, { key: "_makeTween", value: function() {
          } }, { key: "_hide", value: function() {
          } }, { key: "_show", value: function() {
          } }]), i2;
        }(w), E = function(t3) {
          (0, l.Z)(r2, t3);
          var e4 = Z(r2);
          function r2() {
            return (0, a.Z)(this, r2), e4.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "_declareDefaults", value: function() {
            (0, _.Z)((0, h.Z)(r2.prototype), "_declareDefaults", this).call(this), this._defaults.isSwirl = false, this._o.duration = this._o.duration != null ? this._o.duration : 700;
          } }, { key: "_calcSwirlXY", value: function(t4) {
            var e5 = this._props.degreeShift;
            this._props.degreeShift = 0, (0, _.Z)((0, h.Z)(r2.prototype), "_calcSwirlXY", this).call(this, t4), this._props.degreeShift = e5;
          } }]), r2;
        }(D), L = function(t3) {
          (0, l.Z)(r2, t3);
          var e4 = Z(r2);
          function r2() {
            return (0, a.Z)(this, r2), e4.apply(this, arguments);
          }
          return (0, o.Z)(r2, [{ key: "_declareDefaults", value: function() {
            (0, _.Z)((0, h.Z)(r2.prototype), "_declareDefaults", this).call(this), this._defaults.scale = 1, this._defaults.width = 0, this._defaults.height = 0, this._defaults.radius = { 25: 75 };
          } }]), r2;
        }(E);
        R.ChildSwirl = E, R.MainSwirl = L;
        const A = R, I = function() {
          function t3() {
            var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            (0, a.Z)(this, t3), this._o = e4, this._createTween(e4.tweenOptions), !this._o.isChained && this.refresh(true);
          }
          return (0, o.Z)(t3, [{ key: "refresh", value: function(t4) {
            this._previousValues = [];
            for (var e4 = this._o.deltas, r2 = 0; r2 < e4.length; r2++) {
              var i2 = e4[r2].name;
              this._previousValues.push({ name: i2, value: this._o.props[i2] });
            }
            return this.tween._refresh(t4), this;
          } }, { key: "restore", value: function() {
            for (var t4 = this._previousValues, e4 = 0; e4 < t4.length; e4++) {
              var r2 = t4[e4];
              this._o.props[r2.name] = r2.value;
            }
            return this;
          } }, { key: "_createTween", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e4 = this;
            t4.callbackOverrides = { onUpdate: function(t5, r2) {
              e4._calcCurrentProps(t5, r2);
            } }, this._o.isChained || (t4.callbackOverrides.onRefresh = function(t5, r2, i2) {
              e4._calcCurrentProps(r2, i2);
            }), t4.callbacksContext = this._o.callbacksContext, this.tween = new f.Z(t4);
          } }, { key: "_calcCurrentProps", value: function(t4, e4) {
            for (var r2 = this._o.deltas, i2 = 0; i2 < r2.length; i2++) {
              var s2 = r2[i2].type;
              this["_calcCurrent_".concat(s2)](r2[i2], t4, e4);
            }
          } }, { key: "_calcCurrent_color", value: function(t4, e4, r2) {
            var i2, s2, n2, a2, o2 = t4.start, l2 = t4.delta;
            if (t4.curve) {
              var u2 = t4.curve(r2);
              i2 = parseInt(u2 * (o2.r + r2 * l2.r), 10), s2 = parseInt(u2 * (o2.g + r2 * l2.g), 10), n2 = parseInt(u2 * (o2.b + r2 * l2.b), 10), a2 = parseFloat(u2 * (o2.a + r2 * l2.a));
            } else
              i2 = parseInt(o2.r + e4 * l2.r, 10), s2 = parseInt(o2.g + e4 * l2.g, 10), n2 = parseInt(o2.b + e4 * l2.b, 10), a2 = parseFloat(o2.a + e4 * l2.a);
            this._o.props[t4.name] = "rgba(".concat(i2, ",").concat(s2, ",").concat(n2, ",").concat(a2, ")");
          } }, { key: "_calcCurrent_number", value: function(t4, e4, r2) {
            this._o.props[t4.name] = t4.curve ? t4.curve(r2) * (t4.start + r2 * t4.delta) : t4.start + e4 * t4.delta;
          } }, { key: "_calcCurrent_unit", value: function(t4, e4, r2) {
            var i2 = t4.curve ? t4.curve(r2) * (t4.start.value + r2 * t4.delta) : t4.start.value + e4 * t4.delta;
            this._o.props[t4.name] = "".concat(i2).concat(t4.end.unit);
          } }, { key: "_calcCurrent_array", value: function(t4, e4, r2) {
            for (var i2 = t4.name, s2 = this._o.props, n2 = "", a2 = t4.curve ? t4.curve(r2) : null, o2 = 0; o2 < t4.delta.length; o2++) {
              var l2 = t4.delta[o2], u2 = t4.curve ? a2 * (t4.start[o2].value + r2 * l2.value) : t4.start[o2].value + e4 * l2.value;
              n2 += "".concat(u2).concat(l2.unit, " ");
            }
            s2[i2] = n2;
          } }]), t3;
        }();
        function j(t3, e4) {
          var r2 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(t3);
            e4 && (i2 = i2.filter(function(e5) {
              return Object.getOwnPropertyDescriptor(t3, e5).enumerable;
            })), r2.push.apply(r2, i2);
          }
          return r2;
        }
        function Y(t3) {
          for (var e4 = 1; e4 < arguments.length; e4++) {
            var r2 = arguments[e4] != null ? arguments[e4] : {};
            e4 % 2 ? j(Object(r2), true).forEach(function(e5) {
              c(t3, e5, r2[e5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : j(Object(r2)).forEach(function(e5) {
              Object.defineProperty(t3, e5, Object.getOwnPropertyDescriptor(r2, e5));
            });
          }
          return t3;
        }
        var B = {};
        f.Z.prototype._declareDefaults.call(B);
        for (var X = Object.keys(B._defaults), F = 0; F < X.length; F++)
          B._defaults[X[F]] = 1;
        B._defaults.timeline = 1;
        var U = B._defaults;
        const H = function() {
          function t3() {
            var e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            (0, a.Z)(this, t3), this._o = e4, this._shortColors = { transparent: "rgba(0,0,0,0)", none: "rgba(0,0,0,0)", aqua: "rgb(0,255,255)", black: "rgb(0,0,0)", blue: "rgb(0,0,255)", fuchsia: "rgb(255,0,255)", gray: "rgb(128,128,128)", green: "rgb(0,128,0)", lime: "rgb(0,255,0)", maroon: "rgb(128,0,0)", navy: "rgb(0,0,128)", olive: "rgb(128,128,0)", purple: "rgb(128,0,128)", red: "rgb(255,0,0)", silver: "rgb(192,192,192)", teal: "rgb(0,128,128)", white: "rgb(255,255,255)", yellow: "rgb(255,255,0)", orange: "rgb(255,128,0)" }, this._ignoreDeltasMap = { prevChainModule: 1, masterModule: 1 }, this._parseDeltas(e4.options), this._createDeltas(), this._createTimeline(this._mainTweenOptions);
          }
          return (0, o.Z)(t3, [{ key: "refresh", value: function(t4) {
            for (var e4 = 0; e4 < this._deltas.length; e4++)
              this._deltas[e4].refresh(t4);
            return this;
          } }, { key: "restore", value: function() {
            for (var t4 = 0; t4 < this._deltas.length; t4++)
              this._deltas[t4].restore();
            return this;
          } }, { key: "_createTimeline", value: function() {
            this.timeline = new p.Z(), this.timeline.add(this._deltas);
          } }, { key: "_createDeltas", value: function() {
            this._deltas = [], this._deltas.push(this._createDelta(this._mainDeltas, this._mainTweenOptions));
            for (var t4 = 0; t4 < this._childDeltas.length; t4++) {
              var e4 = this._childDeltas[t4];
              this._deltas.push(this._createDelta([e4.delta], e4.tweenOptions));
            }
          } }, { key: "_createDelta", value: function(t4, e4) {
            var r2 = this._o;
            return new I({ deltas: t4, tweenOptions: e4, props: r2.props, isChained: r2.isChained, callbacksContext: r2.callbacksContext });
          } }, { key: "_parseDeltas", value: function(t4) {
            var e4 = this._splitTweenOptions(t4), r2 = e4.delta;
            this._mainTweenOptions = e4.tweenOptions, this._mainDeltas = [], this._childDeltas = [];
            for (var i2 = Object.keys(r2), s2 = 0; s2 < i2.length; s2++) {
              var n2 = i2[s2];
              if (this._isDelta(r2[n2]) && !this._ignoreDeltasMap[n2]) {
                var a2 = this._splitAndParseDelta(n2, r2[n2]);
                a2.tweenOptions ? this._childDeltas.push(a2) : this._mainDeltas.push(a2.delta);
              }
            }
          } }, { key: "_splitAndParseDelta", value: function(t4, e4) {
            var r2 = this._splitTweenOptions(e4);
            return r2.delta = this._parseDelta(t4, r2.delta), r2;
          } }, { key: "_parseDelta", value: function(t4, e4, r2) {
            return this._o.customProps && this._o.customProps[t4] != null ? this._parseDeltaByCustom(t4, e4, r2) : this._parseDeltaByGuess(t4, e4, r2);
          } }, { key: "_parseDeltaByCustom", value: function(t4, e4, r2) {
            return this._parseNumberDelta(t4, e4, r2);
          } }, { key: "_parseDeltaByGuess", value: function(t4, e4, r2) {
            var i2 = this._preparseDelta(e4).start, s2 = this._o;
            return !isNaN(parseFloat(i2)) || i2.match(/rand\(/) || i2.match(/stagger\(/) ? s2.arrayPropertyMap && s2.arrayPropertyMap[t4] ? this._parseArrayDelta(t4, e4) : s2.numberPropertyMap && s2.numberPropertyMap[t4] ? this._parseNumberDelta(t4, e4, r2) : this._parseUnitDelta(t4, e4, r2) : this._parseColorDelta(t4, e4);
          } }, { key: "_splitTweenOptions", value: function(t4) {
            t4 = Y({}, t4);
            for (var e4 = Object.keys(t4), r2 = {}, i2 = null, s2 = 0; s2 < e4.length; s2++) {
              var n2 = e4[s2];
              U[n2] && (t4[n2] != null && (r2[n2] = t4[n2], i2 = true), delete t4[n2]);
            }
            return { delta: t4, tweenOptions: i2 ? r2 : void 0 };
          } }, { key: "_isDelta", value: function(t4) {
            var r2 = e3().isObject(t4);
            return !(!(r2 = r2 && !t4.unit) || e3().isArray(t4) || e3().isDOM(t4));
          } }, { key: "_parseColorDelta", value: function(t4, r2) {
            if (t4 === "strokeLinecap")
              return e3().warn("Sorry, stroke-linecap property is not animatable yet, using the start(#{start}) value instead", r2), {};
            var i2 = this._preparseDelta(r2), s2 = this._makeColorObj(i2.start), n2 = this._makeColorObj(i2.end);
            return { type: "color", name: t4, start: s2, end: n2, curve: i2.curve, delta: { r: n2.r - s2.r, g: n2.g - s2.g, b: n2.b - s2.b, a: n2.a - s2.a } };
          } }, { key: "_parseArrayDelta", value: function(t4, r2) {
            var i2 = this._preparseDelta(r2), s2 = this._strToArr(i2.start), n2 = this._strToArr(i2.end);
            e3().normDashArrays(s2, n2);
            for (var a2 = 0; a2 < s2.length; a2++) {
              var o2 = n2[a2];
              e3().mergeUnits(s2[a2], o2, t4);
            }
            return { type: "array", name: t4, start: s2, end: n2, delta: e3().calcArrDelta(s2, n2), curve: i2.curve };
          } }, { key: "_parseUnitDelta", value: function(t4, r2, i2) {
            var s2 = this._preparseDelta(r2), n2 = e3().parseUnit(e3().parseStringOption(s2.end, i2)), a2 = e3().parseUnit(e3().parseStringOption(s2.start, i2));
            return e3().mergeUnits(a2, n2, t4), { type: "unit", name: t4, start: a2, end: n2, delta: n2.value - a2.value, curve: s2.curve };
          } }, { key: "_parseNumberDelta", value: function(t4, r2, i2) {
            var s2 = this._preparseDelta(r2), n2 = parseFloat(e3().parseStringOption(s2.end, i2)), a2 = parseFloat(e3().parseStringOption(s2.start, i2));
            return { type: "number", name: t4, start: a2, end: n2, delta: n2 - a2, curve: s2.curve };
          } }, { key: "_preparseDelta", value: function(t4) {
            var e4 = (t4 = Y({}, t4)).curve;
            e4 != null && ((e4 = x().parseEasing(e4))._parent = this), delete t4.curve;
            var r2 = Object.keys(t4)[0];
            return { start: r2, end: t4[r2], curve: e4 };
          } }, { key: "_makeColorObj", value: function(t4) {
            var r2 = {};
            if (t4[0] === "#") {
              var i2 = /^#?([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]{1,2})$/i.exec(t4);
              if (i2) {
                var s2 = i2[1].length === 2 ? i2[1] : i2[1] + i2[1], n2 = i2[2].length === 2 ? i2[2] : i2[2] + i2[2], a2 = i2[3].length === 2 ? i2[3] : i2[3] + i2[3];
                r2 = { r: parseInt(s2, 16), g: parseInt(n2, 16), b: parseInt(a2, 16), a: 1 };
              }
            }
            if (t4[0] !== "#") {
              var o2, l2 = t4[0] === "r" && t4[1] === "g" && t4[2] === "b";
              l2 && (o2 = t4), l2 || (this._shortColors[t4] ? o2 = this._shortColors[t4] : (e3().div.style.color = t4, o2 = e3().computedStyle(e3().div).color));
              var u2 = new RegExp("^rgba?\\((\\d{1,3}),\\s?(\\d{1,3}),\\s?(\\d{1,3}),?\\s?(\\d{1}|0?\\.\\d{1,})?\\)$", "gi").exec(o2), h2 = parseFloat(u2[4] || 1);
              u2 && (r2 = { r: parseInt(u2[1], 10), g: parseInt(u2[2], 10), b: parseInt(u2[3], 10), a: h2 == null || isNaN(h2) ? 1 : h2 });
            }
            return r2;
          } }, { key: "_strToArr", value: function(t4) {
            var r2 = [];
            return typeof t4 != "number" || isNaN(t4) ? (t4.trim().split(/\s+/gim).forEach(function(t5) {
              r2.push(e3().parseUnit(e3().parseIfRand(t5)));
            }), r2) : (r2.push(e3().parseUnit(t4)), r2);
          } }]), t3;
        }();
        function z(t3, e4) {
          var r2 = Object.keys(t3);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(t3);
            e4 && (i2 = i2.filter(function(e5) {
              return Object.getOwnPropertyDescriptor(t3, e5).enumerable;
            })), r2.push.apply(r2, i2);
          }
          return r2;
        }
        function N(t3) {
          for (var e4 = 1; e4 < arguments.length; e4++) {
            var r2 = arguments[e4] != null ? arguments[e4] : {};
            e4 % 2 ? z(Object(r2), true).forEach(function(e5) {
              c(t3, e5, r2[e5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(r2)) : z(Object(r2)).forEach(function(e5) {
              Object.defineProperty(t3, e5, Object.getOwnPropertyDescriptor(r2, e5));
            });
          }
          return t3;
        }
        function q(t3) {
          var e4 = function() {
            if (typeof Reflect == "undefined" || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if (typeof Proxy == "function")
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (t4) {
              return false;
            }
          }();
          return function() {
            var r2, i2 = (0, h.Z)(t3);
            if (e4) {
              var s2 = (0, h.Z)(this).constructor;
              r2 = Reflect.construct(i2, arguments, s2);
            } else
              r2 = i2.apply(this, arguments);
            return (0, u.Z)(this, r2);
          };
        }
        var V = {};
        f.Z.prototype._declareDefaults.call(V);
        for (var W = Object.keys(V._defaults), G = 0; G < W.length; G++)
          V._defaults[W[G]] = 1;
        V._defaults.timeline = 1;
        var Q = V._defaults;
        const $ = function(t3) {
          (0, l.Z)(i2, t3);
          var r2 = q(i2);
          function i2() {
            return (0, a.Z)(this, i2), r2.apply(this, arguments);
          }
          return (0, o.Z)(i2, [{ key: "_declareDefaults", value: function() {
            this._defaults = { x: 0, y: 0, z: 0, skewX: 0, skewY: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1, scaleX: 1, scaleY: 1, isSoftHide: true, isShowStart: true, isShowEnd: true, isForce3d: false, isRefreshState: true }, this._drawExclude = { el: 1 }, this._3dProperties = ["rotateX", "rotateY", "z"], this._arrayPropertyMap = { transformOrigin: 1, backgroundPosition: 1 }, this._numberPropertyMap = { opacity: 1, scale: 1, scaleX: 1, scaleY: 1, rotateX: 1, rotateY: 1, rotateZ: 1, skewX: 1, skewY: 1 }, this._prefixPropertyMap = { transform: 1, transformOrigin: 1 }, this._prefix = e3().prefix.css;
          } }, { key: "then", value: function(t4) {
            if (t4 == null || !Object.keys(t4).length)
              return 1;
            var r3 = e3().getLastItem(this._modules);
            return r3.deltas.refresh(false), this._history[this._history.length - 1] = r3._o, (0, _.Z)((0, h.Z)(i2.prototype), "then", this).call(this, t4), r3.deltas.restore(), this;
          } }, { key: "_checkStartValue", value: function(t4, r3) {
            return r3 == null ? this._defaults[t4] != null ? this._defaults[t4] : this._customProps[t4] != null ? this._customProps[t4] : e3().defaultStyles[t4] != null ? e3().defaultStyles[t4] : 0 : r3;
          } }, { key: "_draw", value: function() {
            for (var t4 = this._props, e4 = 0; e4 < this._drawProps.length; e4++) {
              var r3 = this._drawProps[e4];
              this._setStyle(r3, t4[r3]);
            }
            this._drawTransform(), this._customDraw && this._customDraw(this._props.el, this._props);
          } }, { key: "_drawTransform", value: function() {
            var t4 = this._props, e4 = this._is3d ? "translate3d(".concat(t4.x, ", ").concat(t4.y, ", ").concat(t4.z, ") rotateX(").concat(t4.rotateX, "deg) rotateY(").concat(t4.rotateY, "deg) rotateZ(").concat(t4.rotateZ, "deg) skew(").concat(t4.skewX, "deg, ").concat(t4.skewY, "deg) scale(").concat(t4.scaleX, ", ").concat(t4.scaleY, ")") : "translate(".concat(t4.x, ", ").concat(t4.y, ") rotate(").concat(t4.rotateZ, "deg) skew(").concat(t4.skewX, "deg, ").concat(t4.skewY, "deg) scale(").concat(t4.scaleX, ", ").concat(t4.scaleY, ")");
            this._setStyle("transform", e4);
          } }, { key: "_render", value: function() {
            if (!this._o.prevChainModule) {
              for (var t4 = this._props, e4 = 0; e4 < this._renderProps.length; e4++) {
                var r3 = this._renderProps[e4], i3 = t4[r3];
                i3 = typeof i3 == "number" ? "".concat(i3, "px") : i3, this._setStyle(r3, i3);
              }
              this._draw(), t4.isShowStart || this._hide();
            }
          } }, { key: "_setStyle", value: function(t4, e4) {
            if (this._state[t4] !== e4) {
              var r3 = this._props.el.style;
              r3[t4] = e4, this._prefixPropertyMap[t4] && (r3["".concat(this._prefix).concat(t4)] = e4), this._state[t4] = e4;
            }
          } }, { key: "_extendDefaults", value: function() {
            this._props = this._o.props || {}, this._renderProps = [], this._drawProps = [], this._saveCustomProperties(this._o);
            var t4 = N({}, this._o);
            t4 = this._addDefaults(t4);
            for (var r3 = Object.keys(t4), i3 = 0; i3 < r3.length; i3++) {
              var s2 = r3[i3], n2 = !this._drawExclude[s2] && this._defaults[s2] == null && !Q[s2], a2 = this._customProps[s2];
              e3().isDelta(t4[s2]) || Q[s2] ? n2 && !a2 && this._drawProps.push(s2) : (this._parseOption(s2, t4[s2]), s2 === "el" && (this._props.el = e3().parseEl(t4.el), this.el = this._props.el), n2 && !a2 && this._renderProps.push(s2));
            }
            this._createDeltas(t4);
          } }, { key: "_saveCustomProperties", value: function() {
            var t4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this._customProps = t4.customProperties || {}, this._customProps = N({}, this._customProps), this._customDraw = this._customProps.draw, delete this._customProps.draw, delete t4.customProperties, this._copyDefaultCustomProps();
          } }, { key: "_copyDefaultCustomProps", value: function() {
            for (var t4 in this._customProps)
              this._o[t4] == null && (this._o[t4] = this._customProps[t4]);
          } }, { key: "_resetMergedFlags", value: function(t4) {
            return (0, _.Z)((0, h.Z)(i2.prototype), "_resetMergedFlags", this).call(this, t4), t4.props = this._props, t4.customProperties = this._customProps, t4;
          } }, { key: "_parseOption", value: function(t4, r3) {
            (0, _.Z)((0, h.Z)(i2.prototype), "_parseOption", this).call(this, t4, r3);
            var s2 = this._props[t4];
            e3().isArray(s2) && (this._props[t4] = this._arrToString(s2));
          } }, { key: "_arrToString", value: function(t4) {
            for (var e4 = "", r3 = 0; r3 < t4.length; r3++)
              e4 += "".concat(t4[r3].string, " ");
            return e4;
          } }, { key: "_addDefaults", value: function(t4) {
            for (var e4 in this._is3d = false, this._defaults)
              t4[e4] == null ? t4[e4] = e4 === "scaleX" || e4 === "scaleY" ? t4.scale != null ? t4.scale : this._defaults.scale : this._defaults[e4] : this._3dProperties.indexOf(e4) !== -1 && (this._is3d = true);
            return this._o.isForce3d && (this._is3d = true), t4;
          } }, { key: "_vars", value: function() {
            this.deltas.refresh(false), (0, _.Z)((0, h.Z)(i2.prototype), "_vars", this).call(this), this._state = {}, this.deltas.restore(false);
          } }, { key: "_createDeltas", value: function(t4) {
            this.deltas = new H({ options: t4, props: this._props, arrayPropertyMap: this._arrayPropertyMap, numberPropertyMap: this._numberPropertyMap, customProps: this._customProps, callbacksContext: t4.callbacksContext || this, isChained: !!this._o.prevChainModule }), this._o.prevChainModule && (this.timeline = this.deltas.timeline);
          } }, { key: "_makeTween", value: function() {
          } }, { key: "_makeTimeline", value: function() {
            this._o.prevChainModule || (this._o.timeline = this._o.timeline || {}, this._addCallbackOverrides(this._o.timeline), (0, _.Z)((0, h.Z)(i2.prototype), "_makeTimeline", this).call(this), this.timeline.add(this.deltas));
          } }, { key: "_addCallbackOverrides", value: function(t4) {
            var e4 = this, r3 = this._props;
            t4.callbackOverrides = { onUpdate: this._draw, onRefresh: this._props.isRefreshState ? this._draw : void 0, onStart: function(t5) {
              e4._isChained || (t5 && !r3.isShowStart ? e4._show() : r3.isShowStart || e4._hide());
            }, onComplete: function(t5) {
              e4._isChained || (t5 ? r3.isShowEnd || e4._hide() : r3.isShowEnd || e4._show());
            } };
          } }, { key: "_showByTransform", value: function() {
            this._drawTransform();
          } }, { key: "_mergeThenProperty", value: function(t4, r3, i3) {
            var s2 = typeof i3 == "boolean";
            if (e3().isTweenProp(t4) || this._nonMergeProps[t4] || s2)
              return i3;
            var n2 = {};
            if (e3().isObject(i3) && i3.to != null) {
              for (var a2 in i3)
                (Q[a2] || a2 === "curve") && (n2[a2] = i3[a2], delete i3[a2]);
              i3 = i3.to;
            }
            if (this._isDelta(i3)) {
              var o2 = {};
              for (var l2 in i3)
                (Q[l2] || l2 === "curve") && (o2[l2] = i3[l2], delete i3[l2]);
              return N(N({}, this._parseDeltaValues(t4, i3)), o2);
            }
            var u2 = this._parsePreArrayProperty(t4, i3);
            return this._isDelta(r3) ? N(c({}, e3().getDeltaEnd(r3), u2), n2) : N(c({}, r3, u2), n2);
          } }]), i2;
        }(g), K = function() {
          function t3() {
            var r2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return (0, a.Z)(this, t3), this.o = r2, this.o.el ? (this._vars(), this._declareDefaults(), this._extendDefaults(), this._parseFrames(), this._frames.length <= 2 && e3().warn("Spriter: only ".concat(this._frames.length, " frames found")), this._frames.length < 1 && e3().error("Spriter: there is no frames to animate, aborting"), this._createTween(), this) : e3().error('No "el" option specified, aborting');
          }
          return (0, o.Z)(t3, [{ key: "_declareDefaults", value: function() {
            this._defaults = { duration: 500, delay: 0, easing: "linear.none", repeat: 0, yoyo: false, isRunLess: false, isShowEnd: false, onStart: null, onUpdate: null, onComplete: null };
          } }, { key: "_vars", value: function() {
            this._props = e3().cloneObj(this.o), this.el = this.o.el, this._frames = [];
          } }, { key: "run", value: function() {
            return this.timeline.play();
          } }, { key: "_extendDefaults", value: function() {
            return e3().extend(this._props, this._defaults);
          } }, { key: "_parseFrames", value: function() {
            this._frames = Array.prototype.slice.call(this.el.children, 0), this._frames.forEach(function(t4) {
              return t4.style.opacity = 0;
            }), this._frameStep = 1 / this._frames.length;
          } }, { key: "_createTween", value: function() {
            var t4 = this;
            this._tween = new f.Z({ duration: this._props.duration, delay: this._props.delay, yoyo: this._props.yoyo, repeat: this._props.repeat, easing: this._props.easing, onStart: function() {
              return t4._props.onStart && t4._props.onStart();
            }, onComplete: function() {
              return t4._props.onComplete && t4._props.onComplete();
            }, onUpdate: function(e4) {
              return t4._setProgress(e4);
            } }), this.timeline = new p.Z(), this.timeline.add(this._tween), this._props.isRunLess || this._startTween();
          } }, { key: "_startTween", value: function() {
            var t4 = this;
            setTimeout(function() {
              return t4.timeline.play();
            }, 1);
          } }, { key: "_setProgress", value: function(t4) {
            var e4 = Math.floor(t4 / this._frameStep);
            if (this._prevFrame != this._frames[e4]) {
              this._prevFrame && (this._prevFrame.style.opacity = 0);
              var r2 = t4 === 1 && this._props.isShowEnd ? e4 - 1 : e4;
              this._frames[r2] && (this._frames[r2].style.opacity = 1), this._prevFrame = this._frames[e4];
            }
            this._props.onUpdate && this._props.onUpdate(t4);
          } }]), t3;
        }();
        var J = r(291), tt = r.n(J), et = { revision: "1.2.1", isDebug: false, helpers: e3(), Shape: O, ShapeSwirl: D, Burst: A, Html: $, stagger: function(t3) {
          return function(e4) {
            return new S(e4, t3);
          };
        }, Spriter: K, MotionPath: tt(), Tween: f.Z, Timeline: p.Z, Tweenable: v, Thenable: g, Tunable: w, Module: d.Z, tweener: P.Z, easing: x(), shapesMap: n(), _pool: { Delta: I, Deltas: H }, h: e3(), delta: e3().delta, addShape: n().addShape, CustomShape: n().custom, Transit: O, Swirl: D };
        typeof window != "undefined" && (window.mojs = et);
        const rt = et;
      })(), i = i.default;
    })();
  }, module.exports = e();
})(mo_umd);
var mojs$1 = /* @__PURE__ */ getDefaultExportFromCjs(mo_umd.exports);
export { mojs$1 as m };
