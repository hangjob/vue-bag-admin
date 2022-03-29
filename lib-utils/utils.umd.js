(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global["web-utils"] = factory());
})(this, function() {
  "use strict";
  const a = [{ a: 1 }];
  return a;
});
