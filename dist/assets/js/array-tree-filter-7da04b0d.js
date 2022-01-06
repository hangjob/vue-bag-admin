import { c as commonjsGlobal } from "./mockjs-475bec84.js";
var lib = { exports: {} };
(function(module, exports) {
  (function(global, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function arrayTreeFilter2(data, filterFn, options) {
      options = options || {};
      options.childrenKeyName = options.childrenKeyName || "children";
      var children = data || [];
      var result = [];
      var level = 0;
      do {
        var foundItem = children.filter(function(item) {
          return filterFn(item, level);
        })[0];
        if (!foundItem) {
          break;
        }
        result.push(foundItem);
        children = foundItem[options.childrenKeyName] || [];
        level += 1;
      } while (children.length > 0);
      return result;
    }
    return arrayTreeFilter2;
  });
})(lib);
var arrayTreeFilter = lib.exports;
export { arrayTreeFilter as a };
