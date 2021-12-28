var src = { exports: {} };
var helper = { exports: {} };
(function(module) {
  var self = module.exports;
  module.exports.isNumber = function(x) {
    return typeof x === "number";
  };
  module.exports.findMin = function(arr) {
    if (arr.length === 0) {
      return Infinity;
    }
    var curr = arr[0];
    for (var i = 1; i < arr.length; i++) {
      curr = Math.min(curr, arr[i]);
    }
    return curr;
  };
  module.exports.findMax = function(arr) {
    if (arr.length === 0) {
      return -Infinity;
    }
    var curr = arr[0];
    for (var i = 1; i < arr.length; i++) {
      curr = Math.max(curr, arr[i]);
    }
    return curr;
  };
  module.exports.findMinMulti = function(arr) {
    var curr = self.findMin(arr[0]);
    for (var i = 1; i < arr.length; i++) {
      curr = Math.min(curr, self.findMin(arr[i]));
    }
    return curr;
  };
  module.exports.findMaxMulti = function(arr) {
    var curr = self.findMax(arr[0]);
    for (var i = 1; i < arr.length; i++) {
      curr = Math.max(curr, self.findMax(arr[i]));
    }
    return curr;
  };
  module.exports.inside = function(min, max, x) {
    return min <= x && x <= max;
  };
})(helper);
(function(module) {
  var DEFAULT_SIZE = 50;
  var DEFAULT_WIDTH = 2;
  var LN_2 = Math.log(2);
  var self = module.exports;
  var helper$1 = helper.exports;
  function kernel(x) {
    return 1 - Math.abs(x);
  }
  module.exports.getUnifiedMinMax = function(arr, options) {
    return self.getUnifiedMinMaxMulti([arr], options);
  };
  module.exports.getUnifiedMinMaxMulti = function(arrMulti, options) {
    options = options || {};
    var relaxMin = false;
    var relaxMax = false;
    var width = helper$1.isNumber(options.width) ? options.width : DEFAULT_WIDTH;
    var size = helper$1.isNumber(options.size) ? options.size : DEFAULT_SIZE;
    var min = helper$1.isNumber(options.min) ? options.min : (relaxMin = true, helper$1.findMinMulti(arrMulti));
    var max = helper$1.isNumber(options.max) ? options.max : (relaxMax = true, helper$1.findMaxMulti(arrMulti));
    var range = max - min;
    var step = range / (size - 1);
    if (relaxMin) {
      min = min - 2 * width * step;
    }
    if (relaxMax) {
      max = max + 2 * width * step;
    }
    return {
      min,
      max
    };
  };
  module.exports.create = function(arr, options) {
    options = options || {};
    if (!arr || arr.length === 0) {
      return [];
    }
    var size = helper$1.isNumber(options.size) ? options.size : DEFAULT_SIZE;
    var width = helper$1.isNumber(options.width) ? options.width : DEFAULT_WIDTH;
    var normalizedMinMax = self.getUnifiedMinMax(arr, {
      size,
      width,
      min: options.min,
      max: options.max
    });
    var min = normalizedMinMax.min;
    var max = normalizedMinMax.max;
    var range = max - min;
    var step = range / (size - 1);
    if (range === 0) {
      return [{ x: min, y: 1 }];
    }
    var buckets = [];
    for (var i = 0; i < size; i++) {
      buckets.push({
        x: min + i * step,
        y: 0
      });
    }
    var xToBucket = function(x) {
      return Math.floor((x - min) / step);
    };
    var partialArea = generatePartialAreas(kernel, width);
    var fullArea = partialArea[width];
    var c = partialArea[width - 1] - partialArea[width - 2];
    var initalValue = 0;
    arr.forEach(function(x) {
      var bucket = xToBucket(x);
      if (bucket + width < 0 || bucket - width >= buckets.length) {
        return;
      }
      var start = Math.max(bucket - width, 0);
      var mid = bucket;
      var end = Math.min(bucket + width, buckets.length - 1);
      var leftBlockCount = start - (bucket - width);
      var rightBlockCount = bucket + width - end;
      var spilledAreaLeft = partialArea[-width - 1 + leftBlockCount] || 0;
      var spilledAreaRight = partialArea[-width - 1 + rightBlockCount] || 0;
      var weight = fullArea / (fullArea - spilledAreaLeft - spilledAreaRight);
      if (leftBlockCount > 0) {
        initalValue += weight * (leftBlockCount - 1) * c;
      }
      var startGradPos = Math.max(0, bucket - width + 1);
      if (helper$1.inside(0, buckets.length - 1, startGradPos)) {
        buckets[startGradPos].y += weight * 1 * c;
      }
      if (helper$1.inside(0, buckets.length - 1, mid + 1)) {
        buckets[mid + 1].y -= weight * 2 * c;
      }
      if (helper$1.inside(0, buckets.length - 1, end + 1)) {
        buckets[end + 1].y += weight * 1 * c;
      }
    });
    var accumulator = initalValue;
    var gradAccumulator = 0;
    var area = 0;
    buckets.forEach(function(bucket) {
      gradAccumulator += bucket.y;
      accumulator += gradAccumulator;
      bucket.y = accumulator;
      area += accumulator;
    });
    if (area > 0) {
      buckets.forEach(function(bucket) {
        bucket.y /= area;
      });
    }
    return buckets;
  };
  function generatePartialAreas(kernel2, width) {
    var partialAreas = {};
    var accumulator = 0;
    for (var i = -width; i <= width; i++) {
      accumulator += kernel2(i / width);
      partialAreas[i] = accumulator;
    }
    return partialAreas;
  }
  module.exports.getExpectedValueFromPdf = function(pdf2) {
    if (!pdf2 || pdf2.length === 0) {
      return void 0;
    }
    var expected = 0;
    pdf2.forEach(function(obj) {
      expected += obj.x * obj.y;
    });
    return expected;
  };
  module.exports.getXWithLeftTailArea = function(pdf2, area) {
    if (!pdf2 || pdf2.length === 0) {
      return void 0;
    }
    var accumulator = 0;
    var last = 0;
    for (var i = 0; i < pdf2.length; i++) {
      last = i;
      accumulator += pdf2[i].y;
      if (accumulator >= area) {
        break;
      }
    }
    return pdf2[last].x;
  };
  module.exports.getPerplexity = function(pdf2) {
    if (!pdf2 || pdf2.length === 0) {
      return void 0;
    }
    var entropy = 0;
    pdf2.forEach(function(obj) {
      var ln = Math.log(obj.y);
      if (isFinite(ln)) {
        entropy += obj.y * ln;
      }
    });
    entropy = -entropy / LN_2;
    return Math.pow(2, entropy);
  };
})(src);
var pdf = src.exports;
export { pdf as p };
