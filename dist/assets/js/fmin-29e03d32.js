function bisect(f, a, b, parameters) {
  parameters = parameters || {};
  var maxIterations = parameters.maxIterations || 100, tolerance = parameters.tolerance || 1e-10, fA = f(a), fB = f(b), delta = b - a;
  if (fA * fB > 0) {
    throw "Initial bisect points must have opposite signs";
  }
  if (fA === 0)
    return a;
  if (fB === 0)
    return b;
  for (var i = 0; i < maxIterations; ++i) {
    delta /= 2;
    var mid = a + delta, fMid = f(mid);
    if (fMid * fA >= 0) {
      a = mid;
    }
    if (Math.abs(delta) < tolerance || fMid === 0) {
      return mid;
    }
  }
  return a + delta;
}
function zeros(x) {
  var r = new Array(x);
  for (var i = 0; i < x; ++i) {
    r[i] = 0;
  }
  return r;
}
function zerosM(x, y) {
  return zeros(x).map(function() {
    return zeros(y);
  });
}
function dot(a, b) {
  var ret = 0;
  for (var i = 0; i < a.length; ++i) {
    ret += a[i] * b[i];
  }
  return ret;
}
function norm2(a) {
  return Math.sqrt(dot(a, a));
}
function scale(ret, value, c) {
  for (var i = 0; i < value.length; ++i) {
    ret[i] = value[i] * c;
  }
}
function weightedSum(ret, w1, v1, w2, v2) {
  for (var j = 0; j < ret.length; ++j) {
    ret[j] = w1 * v1[j] + w2 * v2[j];
  }
}
function nelderMead(f, x0, parameters) {
  parameters = parameters || {};
  var maxIterations = parameters.maxIterations || x0.length * 200, nonZeroDelta = parameters.nonZeroDelta || 1.05, zeroDelta = parameters.zeroDelta || 1e-3, minErrorDelta = parameters.minErrorDelta || 1e-6, minTolerance = parameters.minErrorDelta || 1e-5, rho = parameters.rho !== void 0 ? parameters.rho : 1, chi = parameters.chi !== void 0 ? parameters.chi : 2, psi = parameters.psi !== void 0 ? parameters.psi : -0.5, sigma = parameters.sigma !== void 0 ? parameters.sigma : 0.5, maxDiff;
  var N = x0.length, simplex = new Array(N + 1);
  simplex[0] = x0;
  simplex[0].fx = f(x0);
  simplex[0].id = 0;
  for (var i = 0; i < N; ++i) {
    var point = x0.slice();
    point[i] = point[i] ? point[i] * nonZeroDelta : zeroDelta;
    simplex[i + 1] = point;
    simplex[i + 1].fx = f(point);
    simplex[i + 1].id = i + 1;
  }
  function updateSimplex(value) {
    for (var i2 = 0; i2 < value.length; i2++) {
      simplex[N][i2] = value[i2];
    }
    simplex[N].fx = value.fx;
  }
  var sortOrder = function(a, b) {
    return a.fx - b.fx;
  };
  var centroid = x0.slice(), reflected = x0.slice(), contracted = x0.slice(), expanded = x0.slice();
  for (var iteration = 0; iteration < maxIterations; ++iteration) {
    simplex.sort(sortOrder);
    if (parameters.history) {
      var sortedSimplex = simplex.map(function(x) {
        var state = x.slice();
        state.fx = x.fx;
        state.id = x.id;
        return state;
      });
      sortedSimplex.sort(function(a, b) {
        return a.id - b.id;
      });
      parameters.history.push({
        x: simplex[0].slice(),
        fx: simplex[0].fx,
        simplex: sortedSimplex
      });
    }
    maxDiff = 0;
    for (i = 0; i < N; ++i) {
      maxDiff = Math.max(maxDiff, Math.abs(simplex[0][i] - simplex[1][i]));
    }
    if (Math.abs(simplex[0].fx - simplex[N].fx) < minErrorDelta && maxDiff < minTolerance) {
      break;
    }
    for (i = 0; i < N; ++i) {
      centroid[i] = 0;
      for (var j = 0; j < N; ++j) {
        centroid[i] += simplex[j][i];
      }
      centroid[i] /= N;
    }
    var worst = simplex[N];
    weightedSum(reflected, 1 + rho, centroid, -rho, worst);
    reflected.fx = f(reflected);
    if (reflected.fx < simplex[0].fx) {
      weightedSum(expanded, 1 + chi, centroid, -chi, worst);
      expanded.fx = f(expanded);
      if (expanded.fx < reflected.fx) {
        updateSimplex(expanded);
      } else {
        updateSimplex(reflected);
      }
    } else if (reflected.fx >= simplex[N - 1].fx) {
      var shouldReduce = false;
      if (reflected.fx > worst.fx) {
        weightedSum(contracted, 1 + psi, centroid, -psi, worst);
        contracted.fx = f(contracted);
        if (contracted.fx < worst.fx) {
          updateSimplex(contracted);
        } else {
          shouldReduce = true;
        }
      } else {
        weightedSum(contracted, 1 - psi * rho, centroid, psi * rho, worst);
        contracted.fx = f(contracted);
        if (contracted.fx < reflected.fx) {
          updateSimplex(contracted);
        } else {
          shouldReduce = true;
        }
      }
      if (shouldReduce) {
        if (sigma >= 1)
          break;
        for (i = 1; i < simplex.length; ++i) {
          weightedSum(simplex[i], 1 - sigma, simplex[0], sigma, simplex[i]);
          simplex[i].fx = f(simplex[i]);
        }
      }
    } else {
      updateSimplex(reflected);
    }
  }
  simplex.sort(sortOrder);
  return {
    fx: simplex[0].fx,
    x: simplex[0]
  };
}
function wolfeLineSearch(f, pk, current, next, a, c1, c2) {
  var phi0 = current.fx, phiPrime0 = dot(current.fxprime, pk), phi = phi0, phi_old = phi0, phiPrime = phiPrime0, a0 = 0;
  a = a || 1;
  c1 = c1 || 1e-6;
  c2 = c2 || 0.1;
  function zoom(a_lo, a_high, phi_lo) {
    for (var iteration2 = 0; iteration2 < 16; ++iteration2) {
      a = (a_lo + a_high) / 2;
      weightedSum(next.x, 1, current.x, a, pk);
      phi = next.fx = f(next.x, next.fxprime);
      phiPrime = dot(next.fxprime, pk);
      if (phi > phi0 + c1 * a * phiPrime0 || phi >= phi_lo) {
        a_high = a;
      } else {
        if (Math.abs(phiPrime) <= -c2 * phiPrime0) {
          return a;
        }
        if (phiPrime * (a_high - a_lo) >= 0) {
          a_high = a_lo;
        }
        a_lo = a;
        phi_lo = phi;
      }
    }
    return 0;
  }
  for (var iteration = 0; iteration < 10; ++iteration) {
    weightedSum(next.x, 1, current.x, a, pk);
    phi = next.fx = f(next.x, next.fxprime);
    phiPrime = dot(next.fxprime, pk);
    if (phi > phi0 + c1 * a * phiPrime0 || iteration && phi >= phi_old) {
      return zoom(a0, a, phi_old);
    }
    if (Math.abs(phiPrime) <= -c2 * phiPrime0) {
      return a;
    }
    if (phiPrime >= 0) {
      return zoom(a, a0, phi);
    }
    phi_old = phi;
    a0 = a;
    a *= 2;
  }
  return a;
}
function conjugateGradient(f, initial, params) {
  var current = { x: initial.slice(), fx: 0, fxprime: initial.slice() }, next = { x: initial.slice(), fx: 0, fxprime: initial.slice() }, yk = initial.slice(), pk, temp, a = 1, maxIterations;
  params = params || {};
  maxIterations = params.maxIterations || initial.length * 20;
  current.fx = f(current.x, current.fxprime);
  pk = current.fxprime.slice();
  scale(pk, current.fxprime, -1);
  for (var i = 0; i < maxIterations; ++i) {
    a = wolfeLineSearch(f, pk, current, next, a);
    if (params.history) {
      params.history.push({
        x: current.x.slice(),
        fx: current.fx,
        fxprime: current.fxprime.slice(),
        alpha: a
      });
    }
    if (!a) {
      scale(pk, current.fxprime, -1);
    } else {
      weightedSum(yk, 1, next.fxprime, -1, current.fxprime);
      var delta_k = dot(current.fxprime, current.fxprime), beta_k = Math.max(0, dot(yk, next.fxprime) / delta_k);
      weightedSum(pk, beta_k, pk, -1, next.fxprime);
      temp = current;
      current = next;
      next = temp;
    }
    if (norm2(current.fxprime) <= 1e-5) {
      break;
    }
  }
  if (params.history) {
    params.history.push({
      x: current.x.slice(),
      fx: current.fx,
      fxprime: current.fxprime.slice(),
      alpha: a
    });
  }
  return current;
}
export { norm2 as a, bisect as b, conjugateGradient as c, zerosM as d, nelderMead as n, scale as s, zeros as z };
