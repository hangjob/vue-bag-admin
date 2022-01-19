function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = void 0;
  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i)
        break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null)
        _i["return"]();
    } finally {
      if (_d)
        throw _e;
    }
  }
  return _arr;
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function points(data, x, y, sort) {
  data = data.filter(function(d2, i2) {
    var u = x(d2, i2), v = y(d2, i2);
    return u != null && isFinite(u) && v != null && isFinite(v);
  });
  if (sort) {
    data.sort(function(a, b) {
      return x(a) - x(b);
    });
  }
  var n = data.length, X = new Float64Array(n), Y = new Float64Array(n);
  var ux = 0, uy = 0, xv, yv, d;
  for (var i = 0; i < n; ) {
    d = data[i];
    X[i] = xv = +x(d, i, data);
    Y[i] = yv = +y(d, i, data);
    ++i;
    ux += (xv - ux) / i;
    uy += (yv - uy) / i;
  }
  for (var _i = 0; _i < n; ++_i) {
    X[_i] -= ux;
    Y[_i] -= uy;
  }
  return [X, Y, ux, uy];
}
function visitPoints(data, x, y, cb) {
  var iterations = 0;
  for (var i = 0, n = data.length; i < n; i++) {
    var d = data[i], dx = +x(d, i, data), dy = +y(d, i, data);
    if (dx != null && isFinite(dx) && dy != null && isFinite(dy)) {
      cb(dx, dy, iterations++);
    }
  }
}
function determination(data, x, y, uY, predict) {
  var SSE = 0, SST = 0;
  visitPoints(data, x, y, function(dx, dy) {
    var sse = dy - predict(dx), sst = dy - uY;
    SSE += sse * sse;
    SST += sst * sst;
  });
  return 1 - SSE / SST;
}
function angle(line) {
  return Math.atan2(line[1][1] - line[0][1], line[1][0] - line[0][0]) * 180 / Math.PI;
}
function midpoint(line) {
  return [(line[0][0] + line[1][0]) / 2, (line[0][1] + line[1][1]) / 2];
}
function interpose(xmin, xmax, predict) {
  var l = Math.log(xmax - xmin) * Math.LOG10E + 1 | 0;
  var precision = 1 * Math.pow(10, -l / 2 - 1), maxIter = 1e4;
  var points2 = [px(xmin), px(xmax)], iter = 0;
  while (find(points2) && iter < maxIter) {
  }
  return points2;
  function px(x) {
    return [x, predict(x)];
  }
  function find(points3) {
    iter++;
    var n = points3.length;
    var found = false;
    for (var i = 0; i < n - 1; i++) {
      var p0 = points3[i], p1 = points3[i + 1], m = midpoint([p0, p1]), mp = px(m[0]), a0 = angle([p0, m]), a1 = angle([p0, mp]), a = Math.abs(a0 - a1);
      if (a > precision) {
        points3.splice(i + 1, 0, mp);
        found = true;
      }
    }
    return found;
  }
}
function ols(uX, uY, uXY, uX2) {
  var delta = uX2 - uX * uX, slope = Math.abs(delta) < 1e-24 ? 0 : (uXY - uX * uY) / delta, intercept = uY - slope * uX;
  return [intercept, slope];
}
function exponential() {
  var x = function x2(d) {
    return d[0];
  }, y = function y2(d) {
    return d[1];
  }, domain;
  function exponential2(data) {
    var n = 0, Y = 0, YL = 0, XY = 0, XYL = 0, X2Y = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function(dx, dy) {
      var ly = Math.log(dy), xy = dx * dy;
      ++n;
      Y += (dy - Y) / n;
      XY += (xy - XY) / n;
      X2Y += (dx * xy - X2Y) / n;
      YL += (dy * ly - YL) / n;
      XYL += (xy * ly - XYL) / n;
      if (!domain) {
        if (dx < xmin)
          xmin = dx;
        if (dx > xmax)
          xmax = dx;
      }
    });
    var _ols = ols(XY / Y, YL / Y, XYL / Y, X2Y / Y), _ols2 = _slicedToArray(_ols, 2), a = _ols2[0], b = _ols2[1];
    a = Math.exp(a);
    var fn = function fn2(x2) {
      return a * Math.exp(b * x2);
    }, out = interpose(xmin, xmax, fn);
    out.a = a;
    out.b = b;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }
  exponential2.domain = function(arr) {
    return arguments.length ? (domain = arr, exponential2) : domain;
  };
  exponential2.x = function(fn) {
    return arguments.length ? (x = fn, exponential2) : x;
  };
  exponential2.y = function(fn) {
    return arguments.length ? (y = fn, exponential2) : y;
  };
  return exponential2;
}
function linear() {
  var x = function x2(d) {
    return d[0];
  }, y = function y2(d) {
    return d[1];
  }, domain;
  function linear2(data) {
    var n = 0, X = 0, Y = 0, XY = 0, X2 = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function(dx, dy) {
      ++n;
      X += (dx - X) / n;
      Y += (dy - Y) / n;
      XY += (dx * dy - XY) / n;
      X2 += (dx * dx - X2) / n;
      if (!domain) {
        if (dx < xmin)
          xmin = dx;
        if (dx > xmax)
          xmax = dx;
      }
    });
    var _ols = ols(X, Y, XY, X2), _ols2 = _slicedToArray(_ols, 2), intercept = _ols2[0], slope = _ols2[1], fn = function fn2(x2) {
      return slope * x2 + intercept;
    }, out = [[xmin, fn(xmin)], [xmax, fn(xmax)]];
    out.a = slope;
    out.b = intercept;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }
  linear2.domain = function(arr) {
    return arguments.length ? (domain = arr, linear2) : domain;
  };
  linear2.x = function(fn) {
    return arguments.length ? (x = fn, linear2) : x;
  };
  linear2.y = function(fn) {
    return arguments.length ? (y = fn, linear2) : y;
  };
  return linear2;
}
function median(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  var i = arr.length / 2;
  return i % 1 === 0 ? (arr[i - 1] + arr[i]) / 2 : arr[Math.floor(i)];
}
var maxiters = 2, epsilon = 1e-12;
function loess() {
  var x = function x2(d) {
    return d[0];
  }, y = function y2(d) {
    return d[1];
  }, bandwidth = 0.3;
  function loess2(data) {
    var _points = points(data, x, y, true), _points2 = _slicedToArray(_points, 4), xv = _points2[0], yv = _points2[1], ux = _points2[2], uy = _points2[3], n = xv.length, bw = Math.max(2, ~~(bandwidth * n)), yhat = new Float64Array(n), residuals = new Float64Array(n), robustWeights = new Float64Array(n).fill(1);
    for (var iter = -1; ++iter <= maxiters; ) {
      var interval = [0, bw - 1];
      for (var i = 0; i < n; ++i) {
        var dx = xv[i], i0 = interval[0], i1 = interval[1], edge = dx - xv[i0] > xv[i1] - dx ? i0 : i1;
        var W = 0, X = 0, Y = 0, XY = 0, X2 = 0, denom = 1 / Math.abs(xv[edge] - dx || 1);
        for (var k = i0; k <= i1; ++k) {
          var xk = xv[k], yk = yv[k], w = tricube(Math.abs(dx - xk) * denom) * robustWeights[k], xkw = xk * w;
          W += w;
          X += xkw;
          Y += yk * w;
          XY += yk * xkw;
          X2 += xk * xkw;
        }
        var _ols = ols(X / W, Y / W, XY / W, X2 / W), _ols2 = _slicedToArray(_ols, 2), a = _ols2[0], b = _ols2[1];
        yhat[i] = a + b * dx;
        residuals[i] = Math.abs(yv[i] - yhat[i]);
        updateInterval(xv, i + 1, interval);
      }
      if (iter === maxiters) {
        break;
      }
      var medianResidual = median(residuals);
      if (Math.abs(medianResidual) < epsilon)
        break;
      for (var _i = 0, arg, _w; _i < n; ++_i) {
        arg = residuals[_i] / (6 * medianResidual);
        robustWeights[_i] = arg >= 1 ? epsilon : (_w = 1 - arg * arg) * _w;
      }
    }
    return output(xv, yhat, ux, uy);
  }
  loess2.bandwidth = function(bw) {
    return arguments.length ? (bandwidth = bw, loess2) : bandwidth;
  };
  loess2.x = function(fn) {
    return arguments.length ? (x = fn, loess2) : x;
  };
  loess2.y = function(fn) {
    return arguments.length ? (y = fn, loess2) : y;
  };
  return loess2;
}
function tricube(x) {
  return (x = 1 - x * x * x) * x * x;
}
function updateInterval(xv, i, interval) {
  var val = xv[i], left = interval[0], right = interval[1] + 1;
  if (right >= xv.length)
    return;
  while (i > left && xv[right] - val <= val - xv[left]) {
    interval[0] = ++left;
    interval[1] = right;
    ++right;
  }
}
function output(xv, yhat, ux, uy) {
  var n = xv.length, out = [];
  var i = 0, cnt = 0, prev = [], v;
  for (; i < n; ++i) {
    v = xv[i] + ux;
    if (prev[0] === v) {
      prev[1] += (yhat[i] - prev[1]) / ++cnt;
    } else {
      cnt = 0;
      prev[1] += uy;
      prev = [v, yhat[i]];
      out.push(prev);
    }
  }
  prev[1] += uy;
  return out;
}
function logarithmic() {
  var x = function x2(d) {
    return d[0];
  }, y = function y2(d) {
    return d[1];
  }, base = Math.E, domain;
  function logarithmic2(data) {
    var n = 0, X = 0, Y = 0, XY = 0, X2 = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity, lb = Math.log(base);
    visitPoints(data, x, y, function(dx, dy) {
      var lx = Math.log(dx) / lb;
      ++n;
      X += (lx - X) / n;
      Y += (dy - Y) / n;
      XY += (lx * dy - XY) / n;
      X2 += (lx * lx - X2) / n;
      if (!domain) {
        if (dx < xmin)
          xmin = dx;
        if (dx > xmax)
          xmax = dx;
      }
    });
    var _ols = ols(X, Y, XY, X2), _ols2 = _slicedToArray(_ols, 2), intercept = _ols2[0], slope = _ols2[1], fn = function fn2(x2) {
      return slope * Math.log(x2) / lb + intercept;
    }, out = interpose(xmin, xmax, fn);
    out.a = slope;
    out.b = intercept;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }
  logarithmic2.domain = function(arr) {
    return arguments.length ? (domain = arr, logarithmic2) : domain;
  };
  logarithmic2.x = function(fn) {
    return arguments.length ? (x = fn, logarithmic2) : x;
  };
  logarithmic2.y = function(fn) {
    return arguments.length ? (y = fn, logarithmic2) : y;
  };
  logarithmic2.base = function(n) {
    return arguments.length ? (base = n, logarithmic2) : base;
  };
  return logarithmic2;
}
function quad() {
  var x = function x2(d) {
    return d[0];
  }, y = function y2(d) {
    return d[1];
  }, domain;
  function quadratic(data) {
    var _points = points(data, x, y), _points2 = _slicedToArray(_points, 4), xv = _points2[0], yv = _points2[1], ux = _points2[2], uy = _points2[3], n = xv.length;
    var X2 = 0, X3 = 0, X4 = 0, XY = 0, X2Y = 0, i, dx, dy, x2;
    for (i = 0; i < n; ) {
      dx = xv[i];
      dy = yv[i++];
      x2 = dx * dx;
      X2 += (x2 - X2) / i;
      X3 += (x2 * dx - X3) / i;
      X4 += (x2 * x2 - X4) / i;
      XY += (dx * dy - XY) / i;
      X2Y += (x2 * dy - X2Y) / i;
    }
    var Y = 0, n0 = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function(dx2, dy2) {
      n0++;
      Y += (dy2 - Y) / n0;
      if (!domain) {
        if (dx2 < xmin)
          xmin = dx2;
        if (dx2 > xmax)
          xmax = dx2;
      }
    });
    var X2X2 = X4 - X2 * X2, d = X2 * X2X2 - X3 * X3, a = (X2Y * X2 - XY * X3) / d, b = (XY * X2X2 - X2Y * X3) / d, c = -a * X2, fn = function fn2(x3) {
      x3 = x3 - ux;
      return a * x3 * x3 + b * x3 + c + uy;
    };
    var out = interpose(xmin, xmax, fn);
    out.a = a;
    out.b = b - 2 * a * ux;
    out.c = c - b * ux + a * ux * ux + uy;
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }
  quadratic.domain = function(arr) {
    return arguments.length ? (domain = arr, quadratic) : domain;
  };
  quadratic.x = function(fn) {
    return arguments.length ? (x = fn, quadratic) : x;
  };
  quadratic.y = function(fn) {
    return arguments.length ? (y = fn, quadratic) : y;
  };
  return quadratic;
}
function polynomial() {
  var x = function x2(d) {
    return d[0];
  }, y = function y2(d) {
    return d[1];
  }, order = 3, domain;
  function polynomial2(data) {
    if (order === 1) {
      var o = linear().x(x).y(y).domain(domain)(data);
      o.coefficients = [o.b, o.a];
      delete o.a;
      delete o.b;
      return o;
    }
    if (order === 2) {
      var _o = quad().x(x).y(y).domain(domain)(data);
      _o.coefficients = [_o.c, _o.b, _o.a];
      delete _o.a;
      delete _o.b;
      delete _o.c;
      return _o;
    }
    var _points = points(data, x, y), _points2 = _slicedToArray(_points, 4), xv = _points2[0], yv = _points2[1], ux = _points2[2], uy = _points2[3], n = xv.length, lhs = [], rhs = [], k = order + 1;
    var Y = 0, n0 = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function(dx, dy) {
      ++n0;
      Y += (dy - Y) / n0;
      if (!domain) {
        if (dx < xmin)
          xmin = dx;
        if (dx > xmax)
          xmax = dx;
      }
    });
    var i, j, l, v, c;
    for (i = 0; i < k; ++i) {
      for (l = 0, v = 0; l < n; ++l) {
        v += Math.pow(xv[l], i) * yv[l];
      }
      lhs.push(v);
      c = new Float64Array(k);
      for (j = 0; j < k; ++j) {
        for (l = 0, v = 0; l < n; ++l) {
          v += Math.pow(xv[l], i + j);
        }
        c[j] = v;
      }
      rhs.push(c);
    }
    rhs.push(lhs);
    var coef = gaussianElimination(rhs), fn = function fn2(x2) {
      x2 -= ux;
      var y2 = uy + coef[0] + coef[1] * x2 + coef[2] * x2 * x2;
      for (i = 3; i < k; ++i) {
        y2 += coef[i] * Math.pow(x2, i);
      }
      return y2;
    }, out = interpose(xmin, xmax, fn);
    out.coefficients = uncenter(k, coef, -ux, uy);
    out.predict = fn;
    out.rSquared = determination(data, x, y, Y, fn);
    return out;
  }
  polynomial2.domain = function(arr) {
    return arguments.length ? (domain = arr, polynomial2) : domain;
  };
  polynomial2.x = function(fn) {
    return arguments.length ? (x = fn, polynomial2) : x;
  };
  polynomial2.y = function(fn) {
    return arguments.length ? (y = fn, polynomial2) : y;
  };
  polynomial2.order = function(n) {
    return arguments.length ? (order = n, polynomial2) : order;
  };
  return polynomial2;
}
function uncenter(k, a, x, y) {
  var z = Array(k);
  var i, j, v, c;
  for (i = 0; i < k; ++i) {
    z[i] = 0;
  }
  for (i = k - 1; i >= 0; --i) {
    v = a[i];
    c = 1;
    z[i] += v;
    for (j = 1; j <= i; ++j) {
      c *= (i + 1 - j) / j;
      z[i - j] += v * Math.pow(x, j) * c;
    }
  }
  z[0] += y;
  return z;
}
function gaussianElimination(matrix) {
  var n = matrix.length - 1, coef = [];
  var i, j, k, r, t;
  for (i = 0; i < n; ++i) {
    r = i;
    for (j = i + 1; j < n; ++j) {
      if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][r])) {
        r = j;
      }
    }
    for (k = i; k < n + 1; ++k) {
      t = matrix[k][i];
      matrix[k][i] = matrix[k][r];
      matrix[k][r] = t;
    }
    for (j = i + 1; j < n; ++j) {
      for (k = n; k >= i; k--) {
        matrix[k][j] -= matrix[k][i] * matrix[i][j] / matrix[i][i];
      }
    }
  }
  for (j = n - 1; j >= 0; --j) {
    t = 0;
    for (k = j + 1; k < n; ++k) {
      t += matrix[k][j] * coef[k];
    }
    coef[j] = (matrix[n][j] - t) / matrix[j][j];
  }
  return coef;
}
function power() {
  var x = function x2(d) {
    return d[0];
  }, y = function y2(d) {
    return d[1];
  }, domain;
  function power2(data) {
    var n = 0, X = 0, Y = 0, XY = 0, X2 = 0, YS = 0, xmin = domain ? +domain[0] : Infinity, xmax = domain ? +domain[1] : -Infinity;
    visitPoints(data, x, y, function(dx, dy) {
      var lx = Math.log(dx), ly = Math.log(dy);
      ++n;
      X += (lx - X) / n;
      Y += (ly - Y) / n;
      XY += (lx * ly - XY) / n;
      X2 += (lx * lx - X2) / n;
      YS += (dy - YS) / n;
      if (!domain) {
        if (dx < xmin)
          xmin = dx;
        if (dx > xmax)
          xmax = dx;
      }
    });
    var _ols = ols(X, Y, XY, X2), _ols2 = _slicedToArray(_ols, 2), a = _ols2[0], b = _ols2[1];
    a = Math.exp(a);
    var fn = function fn2(x2) {
      return a * Math.pow(x2, b);
    }, out = interpose(xmin, xmax, fn);
    out.a = a;
    out.b = b;
    out.predict = fn;
    out.rSquared = determination(data, x, y, YS, fn);
    return out;
  }
  power2.domain = function(arr) {
    return arguments.length ? (domain = arr, power2) : domain;
  };
  power2.x = function(fn) {
    return arguments.length ? (x = fn, power2) : x;
  };
  power2.y = function(fn) {
    return arguments.length ? (y = fn, power2) : y;
  };
  return power2;
}
export { loess as a, logarithmic as b, power as c, exponential as e, linear as l, polynomial as p, quad as q };
