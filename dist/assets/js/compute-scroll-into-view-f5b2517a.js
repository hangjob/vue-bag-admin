function t(t2) {
  return typeof t2 == "object" && t2 != null && t2.nodeType === 1;
}
function e(t2, e2) {
  return (!e2 || t2 !== "hidden") && t2 !== "visible" && t2 !== "clip";
}
function n(t2, n2) {
  if (t2.clientHeight < t2.scrollHeight || t2.clientWidth < t2.scrollWidth) {
    var r2 = getComputedStyle(t2, null);
    return e(r2.overflowY, n2) || e(r2.overflowX, n2) || function(t3) {
      var e2 = function(t4) {
        if (!t4.ownerDocument || !t4.ownerDocument.defaultView)
          return null;
        try {
          return t4.ownerDocument.defaultView.frameElement;
        } catch (t5) {
          return null;
        }
      }(t3);
      return !!e2 && (e2.clientHeight < t3.scrollHeight || e2.clientWidth < t3.scrollWidth);
    }(t2);
  }
  return false;
}
function r(t2, e2, n2, r2, i, o, l, d) {
  return o < t2 && l > e2 || o > t2 && l < e2 ? 0 : o <= t2 && d <= n2 || l >= e2 && d >= n2 ? o - t2 - r2 : l > e2 && d < n2 || o < t2 && d > n2 ? l - e2 + i : 0;
}
function compute(e2, i) {
  var o = window, l = i.scrollMode, d = i.block, u = i.inline, h = i.boundary, a = i.skipOverflowHiddenElements, c = typeof h == "function" ? h : function(t2) {
    return t2 !== h;
  };
  if (!t(e2))
    throw new TypeError("Invalid target");
  for (var f = document.scrollingElement || document.documentElement, s = [], p = e2; t(p) && c(p); ) {
    if ((p = p.parentElement) === f) {
      s.push(p);
      break;
    }
    p != null && p === document.body && n(p) && !n(document.documentElement) || p != null && n(p, a) && s.push(p);
  }
  for (var m = o.visualViewport ? o.visualViewport.width : innerWidth, g = o.visualViewport ? o.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, v = window.scrollY || pageYOffset, W = e2.getBoundingClientRect(), b = W.height, H = W.width, y = W.top, E = W.right, M = W.bottom, V = W.left, x = d === "start" || d === "nearest" ? y : d === "end" ? M : y + b / 2, I = u === "center" ? V + H / 2 : u === "end" ? E : V, C = [], T = 0; T < s.length; T++) {
    var k = s[T], B = k.getBoundingClientRect(), D = B.height, O = B.width, R = B.top, X = B.right, Y = B.bottom, L = B.left;
    if (l === "if-needed" && y >= 0 && V >= 0 && M <= g && E <= m && y >= R && M <= Y && V >= L && E <= X)
      return C;
    var S = getComputedStyle(k), j = parseInt(S.borderLeftWidth, 10), q = parseInt(S.borderTopWidth, 10), z = parseInt(S.borderRightWidth, 10), A = parseInt(S.borderBottomWidth, 10), F = 0, G = 0, J = "offsetWidth" in k ? k.offsetWidth - k.clientWidth - j - z : 0, K = "offsetHeight" in k ? k.offsetHeight - k.clientHeight - q - A : 0;
    if (f === k)
      F = d === "start" ? x : d === "end" ? x - g : d === "nearest" ? r(v, v + g, g, q, A, v + x, v + x + b, b) : x - g / 2, G = u === "start" ? I : u === "center" ? I - m / 2 : u === "end" ? I - m : r(w, w + m, m, j, z, w + I, w + I + H, H), F = Math.max(0, F + v), G = Math.max(0, G + w);
    else {
      F = d === "start" ? x - R - q : d === "end" ? x - Y + A + K : d === "nearest" ? r(R, Y, D, q, A + K, x, x + b, b) : x - (R + D / 2) + K / 2, G = u === "start" ? I - L - j : u === "center" ? I - (L + O / 2) + J / 2 : u === "end" ? I - X + z + J : r(L, X, O, j, z + J, I, I + H, H);
      var N = k.scrollLeft, P = k.scrollTop;
      x += P - (F = Math.max(0, Math.min(P + F, k.scrollHeight - D + K))), I += N - (G = Math.max(0, Math.min(N + G, k.scrollWidth - O + J)));
    }
    C.push({ el: k, top: F, left: G });
  }
  return C;
}
export { compute as c };
