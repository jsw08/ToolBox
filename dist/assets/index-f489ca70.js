(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(
        document.createTextNode(
          ".svelte-fpg72o.svelte-fpg72o:not(svg|*){all:unset}.svelte-fpg72o.svelte-fpg72o{pointer-events:all}.window.svelte-fpg72o.svelte-fpg72o{display:flex;flex-direction:column;overflow:auto;resize:both;border:1px solid black;border-radius:8px;background-color:#fff}.titlebar.svelte-fpg72o.svelte-fpg72o{height:24px;flex:none;display:flex;flex-direction:row;border-bottom:1px solid black;padding:0 2px;justify-content:space-between}.titlebarTitle.svelte-fpg72o.svelte-fpg72o{flex-grow:1;place-items:center;display:flex;flex-direction:row;overflow:hidden}.titlebarTitle.svelte-fpg72o p.svelte-fpg72o{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;all:unset}.titlebarButtons.svelte-fpg72o.svelte-fpg72o{display:flex;flex:none;flex-direction:row;cursor:pointer}.titlebarButtons.svelte-fpg72o button.svelte-fpg72o{width:24px;height:24px;all:unset}.windowContent.svelte-fpg72o.svelte-fpg72o{display:flex;flex-grow:1}.windowContent.svelte-fpg72o>.svelte-fpg72o{flex-grow:1}.svelte-1cny9dt{all:unset}textarea.svelte-1cny9dt{flex-grow:1;white-space:pre}div.svelte-wp9gfo{all:unset;position:fixed;left:0;top:0;z-index:1000;pointer-events:none;width:100vw;height:100vh;background-color:#000}"
        )
      ),
        document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
var ft = Object.defineProperty;
var at = (e, t, n) =>
  t in e
    ? ft(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ae = (e, t, n) => (at(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === "childList")
        for (const i of s.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
function I() {}
function dt(e, t) {
  for (const n in t) e[n] = t[n];
  return e;
}
function ot(e) {
  return e();
}
function qe() {
  return Object.create(null);
}
function F(e) {
  e.forEach(ot);
}
function he(e) {
  return typeof e == "function";
}
function ge(e, t) {
  return e != e
    ? t == t
    : e !== t || (e && typeof e == "object") || typeof e == "function";
}
function pt(e) {
  return Object.keys(e).length === 0;
}
function ht(e, ...t) {
  if (e == null) {
    for (const o of t) o(void 0);
    return I;
  }
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function rt(e, t, n) {
  e.$$.on_destroy.push(ht(t, n));
}
function Ie(e, t, n, o) {
  if (e) {
    const r = it(e, t, n, o);
    return e[0](r);
  }
}
function it(e, t, n, o) {
  return e[1] && o ? dt(n.ctx.slice(), e[1](o(t))) : n.ctx;
}
function Ve(e, t, n, o) {
  if (e[2] && o) {
    const r = e[2](o(n));
    if (t.dirty === void 0) return r;
    if (typeof r == "object") {
      const s = [],
        i = Math.max(t.dirty.length, r.length);
      for (let l = 0; l < i; l += 1) s[l] = t.dirty[l] | r[l];
      return s;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function Xe(e, t, n, o, r, s) {
  if (r) {
    const i = it(t, n, o, s);
    e.p(i, r);
  }
}
function Ye(e) {
  if (e.ctx.length > 32) {
    const t = [],
      n = e.ctx.length / 32;
    for (let o = 0; o < n; o++) t[o] = -1;
    return t;
  }
  return -1;
}
function gt(e, t, n) {
  return e.set(n), t;
}
function mt(e) {
  return e && he(e.destroy) ? e.destroy : I;
}
function $(e, t) {
  e.appendChild(t);
}
function te(e, t, n) {
  e.insertBefore(t, n || null);
}
function V(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function _t(e, t) {
  for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
}
function z(e) {
  return document.createElement(e);
}
function q(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function ze(e) {
  return document.createTextNode(e);
}
function le() {
  return ze(" ");
}
function wt() {
  return ze("");
}
function H(e, t, n, o) {
  return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
}
function f(e, t, n) {
  n == null
    ? e.removeAttribute(t)
    : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function bt(e) {
  return Array.from(e.childNodes);
}
function yt(e, t) {
  (t = "" + t), e.data !== t && (e.data = t);
}
function Ue(e, t) {
  e.value = t ?? "";
}
function G(e, t, n, o) {
  n == null
    ? e.style.removeProperty(t)
    : e.style.setProperty(t, n, o ? "important" : "");
}
let ue;
function vt() {
  if (ue === void 0) {
    ue = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      ue = !0;
    }
  }
  return ue;
}
function $t(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const o = z("iframe");
  o.setAttribute(
    "style",
    "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
  ),
    o.setAttribute("aria-hidden", "true"),
    (o.tabIndex = -1);
  const r = vt();
  let s;
  return (
    r
      ? ((o.src =
          "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
        (s = H(window, "message", (i) => {
          i.source === o.contentWindow && t();
        })))
      : ((o.src = "about:blank"),
        (o.onload = () => {
          (s = H(o.contentWindow, "resize", t)), t();
        })),
    $(e, o),
    () => {
      (r || (s && o.contentWindow)) && s(), V(o);
    }
  );
}
function Fe(e, t) {
  return new e(t);
}
let Le;
function re(e) {
  Le = e;
}
const Z = [],
  Ke = [];
let ee = [];
const Ge = [],
  At = Promise.resolve();
let Ce = !1;
function Et() {
  Ce || ((Ce = !0), At.then(st));
}
function ae(e) {
  ee.push(e);
}
const Ee = new Set();
let J = 0;
function st() {
  if (J !== 0) return;
  const e = Le;
  do {
    try {
      for (; J < Z.length; ) {
        const t = Z[J];
        J++, re(t), Nt(t.$$);
      }
    } catch (t) {
      throw ((Z.length = 0), (J = 0), t);
    }
    for (re(null), Z.length = 0, J = 0; Ke.length; ) Ke.pop()();
    for (let t = 0; t < ee.length; t += 1) {
      const n = ee[t];
      Ee.has(n) || (Ee.add(n), n());
    }
    ee.length = 0;
  } while (Z.length);
  for (; Ge.length; ) Ge.pop()();
  (Ce = !1), Ee.clear(), re(e);
}
function Nt(e) {
  if (e.fragment !== null) {
    e.update(), F(e.before_update);
    const t = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, t),
      e.after_update.forEach(ae);
  }
}
function St(e) {
  const t = [],
    n = [];
  ee.forEach((o) => (e.indexOf(o) === -1 ? t.push(o) : n.push(o))),
    n.forEach((o) => o()),
    (ee = t);
}
const fe = new Set();
let Y;
function lt() {
  Y = { r: 0, c: [], p: Y };
}
function ut() {
  Y.r || F(Y.c), (Y = Y.p);
}
function T(e, t) {
  e && e.i && (fe.delete(e), e.i(t));
}
function U(e, t, n, o) {
  if (e && e.o) {
    if (fe.has(e)) return;
    fe.add(e),
      Y.c.push(() => {
        fe.delete(e), o && (n && e.d(1), o());
      }),
      e.o(t);
  } else o && o();
}
function Je(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Me(e) {
  e && e.c();
}
function de(e, t, n) {
  const { fragment: o, after_update: r } = e.$$;
  o && o.m(t, n),
    ae(() => {
      const s = e.$$.on_mount.map(ot).filter(he);
      e.$$.on_destroy ? e.$$.on_destroy.push(...s) : F(s), (e.$$.on_mount = []);
    }),
    r.forEach(ae);
}
function pe(e, t) {
  const n = e.$$;
  n.fragment !== null &&
    (St(n.after_update),
    F(n.on_destroy),
    n.fragment && n.fragment.d(t),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function kt(e, t) {
  e.$$.dirty[0] === -1 && (Z.push(e), Et(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
}
function Pe(e, t, n, o, r, s, i = null, l = [-1]) {
  const u = Le;
  re(e);
  const c = (e.$$ = {
    fragment: null,
    ctx: [],
    props: s,
    update: I,
    not_equal: r,
    bound: qe(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (u ? u.$$.context : [])),
    callbacks: qe(),
    dirty: l,
    skip_bound: !1,
    root: t.target || u.$$.root,
  });
  i && i(c.root);
  let N = !1;
  if (
    ((c.ctx = n
      ? n(e, t.props || {}, (g, _, ...S) => {
          const w = S.length ? S[0] : _;
          return (
            c.ctx &&
              r(c.ctx[g], (c.ctx[g] = w)) &&
              (!c.skip_bound && c.bound[g] && c.bound[g](w), N && kt(e, g)),
            _
          );
        })
      : []),
    c.update(),
    (N = !0),
    F(c.before_update),
    (c.fragment = o ? o(c.ctx) : !1),
    t.target)
  ) {
    if (t.hydrate) {
      const g = bt(t.target);
      c.fragment && c.fragment.l(g), g.forEach(V);
    } else c.fragment && c.fragment.c();
    t.intro && T(e.$$.fragment), de(e, t.target, t.anchor), st();
  }
  re(u);
}
class He {
  constructor() {
    Ae(this, "$$");
    Ae(this, "$$set");
  }
  $destroy() {
    pe(this, 1), (this.$destroy = I);
  }
  $on(t, n) {
    if (!he(n)) return I;
    const o = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return (
      o.push(n),
      () => {
        const r = o.indexOf(n);
        r !== -1 && o.splice(r, 1);
      }
    );
  }
  $set(t) {
    this.$$set &&
      !pt(t) &&
      ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
  }
}
const Ct = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Ct);
const Q = [];
function Mt(e, t = I) {
  let n;
  const o = new Set();
  function r(l) {
    if (ge(e, l) && ((e = l), n)) {
      const u = !Q.length;
      for (const c of o) c[1](), Q.push(c, e);
      if (u) {
        for (let c = 0; c < Q.length; c += 2) Q[c][0](Q[c + 1]);
        Q.length = 0;
      }
    }
  }
  function s(l) {
    r(l(e));
  }
  function i(l, u = I) {
    const c = [l, u];
    return (
      o.add(c),
      o.size === 1 && (n = t(r, s) || I),
      l(e),
      () => {
        o.delete(c), o.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: r, update: s, subscribe: i };
}
var Ne = { dragStart: !0 },
  Qe = (e, t, n) => Math.min(Math.max(e, t), n),
  Se = (e) => typeof e == "string",
  xt = ([e, t], n, o) => {
    const r = (s, i) => (i === 0 ? 0 : Math.ceil(s / i) * i);
    return [r(n, e), r(o, t)];
  },
  Ze = (e, t) => e.some((n) => t.some((o) => n.contains(o)));
function ke(e, t) {
  if (e === void 0) return;
  if (xe(e)) return e.getBoundingClientRect();
  if (typeof e == "object") {
    const { top: o = 0, left: r = 0, right: s = 0, bottom: i = 0 } = e;
    return {
      top: o,
      right: window.innerWidth - s,
      bottom: window.innerHeight - i,
      left: r,
    };
  }
  if (e === "parent") return t.parentNode.getBoundingClientRect();
  const n = document.querySelector(e);
  if (n === null)
    throw new Error(
      "The selector provided for bound doesn't exists in the document."
    );
  return n.getBoundingClientRect();
}
var ce = (e, t, n) => e.style.setProperty(t, n),
  xe = (e) => e instanceof HTMLElement,
  Bt = (e, t = {}) => {
    let n,
      o,
      {
        bounds: r,
        axis: s = "both",
        gpuAcceleration: i = !0,
        legacyTranslate: l = !0,
        transform: u,
        applyUserSelectHack: c = !0,
        disabled: N = !1,
        ignoreMultitouch: g = !1,
        recomputeBounds: _ = Ne,
        grid: S,
        position: w,
        cancel: C,
        handle: b,
        defaultClass: L = "neodrag",
        defaultClassDragging: W = "neodrag-dragging",
        defaultClassDragged: M = "neodrag-dragged",
        defaultPosition: E = { x: 0, y: 0 },
        onDragStart: K,
        onDrag: p,
        onDragEnd: P,
      } = t,
      j = !1,
      y = 0,
      a = 0,
      v = 0,
      ne = 0,
      me = 0,
      _e = 0,
      { x: ie, y: se } = w
        ? {
            x: (w == null ? void 0 : w.x) ?? 0,
            y: (w == null ? void 0 : w.y) ?? 0,
          }
        : E;
    ye(ie, se);
    let O,
      X,
      oe,
      we,
      Oe,
      De = "",
      ct = !!w;
    _ = { ...Ne, ..._ };
    const be = document.body.style,
      R = e.classList;
    function ye(d = y, m = a) {
      if (!u) {
        if (l) {
          let k = `${+d}px, ${+m}px`;
          return ce(
            e,
            "transform",
            i ? `translate3d(${k}, 0)` : `translate(${k})`
          );
        }
        return ce(e, "translate", `${+d}px ${+m}px ${i ? "1px" : ""}`);
      }
      const A = u({ offsetX: d, offsetY: m, rootNode: e });
      Se(A) && ce(e, "transform", A);
    }
    const ve = (d, m) => {
        const A = { offsetX: y, offsetY: a, rootNode: e, currentNode: Oe };
        e.dispatchEvent(new CustomEvent(d, { detail: A })), m == null || m(A);
      },
      $e = addEventListener;
    $e("pointerdown", We, !1),
      $e("pointerup", je, !1),
      $e("pointermove", Re, !1),
      ce(e, "touch-action", "none");
    const Te = () => {
      let d = e.offsetWidth / X.width;
      return isNaN(d) && (d = 1), d;
    };
    function We(d) {
      if (N || d.button === 2 || (g && !d.isPrimary)) return;
      if ((_.dragStart && (O = ke(r, e)), Se(b) && Se(C) && b === C))
        throw new Error("`handle` selector can't be same as `cancel` selector");
      if (
        (R.add(L),
        (oe = (function (h, B) {
          if (!h) return [B];
          if (xe(h)) return [h];
          if (Array.isArray(h)) return h;
          const D = B.querySelectorAll(h);
          if (D === null)
            throw new Error(
              "Selector passed for `handle` option should be child of the element on which the action is applied"
            );
          return Array.from(D.values());
        })(b, e)),
        (we = (function (h, B) {
          if (!h) return [];
          if (xe(h)) return [h];
          if (Array.isArray(h)) return h;
          const D = B.querySelectorAll(h);
          if (D === null)
            throw new Error(
              "Selector passed for `cancel` option should be child of the element on which the action is applied"
            );
          return Array.from(D.values());
        })(C, e)),
        (n = /(both|x)/.test(s)),
        (o = /(both|y)/.test(s)),
        Ze(we, oe))
      )
        throw new Error(
          "Element being dragged can't be a child of the element on which `cancel` is applied"
        );
      const m = d.composedPath()[0];
      if (
        !oe.some((h) => {
          var B;
          return (
            h.contains(m) ||
            ((B = h.shadowRoot) == null ? void 0 : B.contains(m))
          );
        }) ||
        Ze(we, [m])
      )
        return;
      (Oe = oe.length === 1 ? e : oe.find((h) => h.contains(m))),
        (j = !0),
        (X = e.getBoundingClientRect()),
        c && ((De = be.userSelect), (be.userSelect = "none")),
        ve("neodrag:start", K);
      const { clientX: A, clientY: k } = d,
        x = Te();
      n && (v = A - ie / x),
        o && (ne = k - se / x),
        O && ((me = A - X.left), (_e = k - X.top));
    }
    function je() {
      j &&
        (_.dragEnd && (O = ke(r, e)),
        R.remove(W),
        R.add(M),
        c && (be.userSelect = De),
        ve("neodrag:end", P),
        n && (v = y),
        o && (ne = a),
        (j = !1));
    }
    function Re(d) {
      if (!j) return;
      _.drag && (O = ke(r, e)),
        R.add(W),
        d.preventDefault(),
        (X = e.getBoundingClientRect());
      let m = d.clientX,
        A = d.clientY;
      const k = Te();
      if (O) {
        const x = {
          left: O.left + me,
          top: O.top + _e,
          right: O.right + me - X.width,
          bottom: O.bottom + _e - X.height,
        };
        (m = Qe(m, x.left, x.right)), (A = Qe(A, x.top, x.bottom));
      }
      if (Array.isArray(S)) {
        let [x, h] = S;
        if (isNaN(+x) || x < 0)
          throw new Error(
            "1st argument of `grid` must be a valid positive number"
          );
        if (isNaN(+h) || h < 0)
          throw new Error(
            "2nd argument of `grid` must be a valid positive number"
          );
        let B = m - v,
          D = A - ne;
        ([B, D] = xt([x / k, h / k], B, D)), (m = v + B), (A = ne + D);
      }
      n && (y = Math.round((m - v) * k)),
        o && (a = Math.round((A - ne) * k)),
        (ie = y),
        (se = a),
        ve("neodrag", p),
        ye();
    }
    return {
      destroy: () => {
        const d = removeEventListener;
        d("pointerdown", We, !1),
          d("pointerup", je, !1),
          d("pointermove", Re, !1);
      },
      update: (d) => {
        var A, k;
        (s = d.axis || "both"),
          (N = d.disabled ?? !1),
          (g = d.ignoreMultitouch ?? !1),
          (b = d.handle),
          (r = d.bounds),
          (_ = d.recomputeBounds ?? Ne),
          (C = d.cancel),
          (c = d.applyUserSelectHack ?? !0),
          (S = d.grid),
          (i = d.gpuAcceleration ?? !0),
          (l = d.legacyTranslate ?? !0),
          (u = d.transform);
        const m = R.contains(M);
        R.remove(L, M),
          (L = d.defaultClass ?? "neodrag"),
          (W = d.defaultClassDragging ?? "neodrag-dragging"),
          (M = d.defaultClassDragged ?? "neodrag-dragged"),
          R.add(L),
          m && R.add(M),
          ct &&
            ((ie = y = ((A = d.position) == null ? void 0 : A.x) ?? y),
            (se = a = ((k = d.position) == null ? void 0 : k.y) ?? a),
            ye());
      },
    };
  };
const zt = (e) => ({}),
  et = (e) => ({});
function Lt(e) {
  let t, n, o, r;
  return {
    c() {
      (t = q("svg")),
        (n = q("g")),
        (o = q("path")),
        (r = q("path")),
        f(
          o,
          "d",
          "M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
        ),
        f(o, "class", "svelte-fpg72o"),
        f(r, "d", "M12 8h4v4m0-4l-5 5"),
        f(r, "class", "svelte-fpg72o"),
        f(n, "fill", "none"),
        f(n, "stroke", "currentColor"),
        f(n, "stroke-linecap", "round"),
        f(n, "stroke-linejoin", "round"),
        f(n, "stroke-width", "2"),
        f(n, "class", "svelte-fpg72o"),
        f(t, "xmlns", "http://www.w3.org/2000/svg"),
        f(t, "width", "24"),
        f(t, "height", "24"),
        f(t, "viewBox", "0 0 24 24"),
        f(t, "class", "svelte-fpg72o");
    },
    m(s, i) {
      te(s, t, i), $(t, n), $(n, o), $(n, r);
    },
    d(s) {
      s && V(t);
    },
  };
}
function Pt(e) {
  let t, n, o, r;
  return {
    c() {
      (t = q("svg")),
        (n = q("g")),
        (o = q("path")),
        (r = q("path")),
        f(
          o,
          "d",
          "M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
        ),
        f(o, "class", "svelte-fpg72o"),
        f(r, "d", "M15 13h-4V9m0 4l5-5"),
        f(r, "class", "svelte-fpg72o"),
        f(n, "fill", "none"),
        f(n, "stroke", "currentColor"),
        f(n, "stroke-linecap", "round"),
        f(n, "stroke-linejoin", "round"),
        f(n, "stroke-width", "2"),
        f(n, "class", "svelte-fpg72o"),
        f(t, "xmlns", "http://www.w3.org/2000/svg"),
        f(t, "width", "24"),
        f(t, "height", "24"),
        f(t, "viewBox", "0 0 24 24"),
        f(t, "class", "svelte-fpg72o");
    },
    m(s, i) {
      te(s, t, i), $(t, n), $(n, o), $(n, r);
    },
    d(s) {
      s && V(t);
    },
  };
}
function Ht(e) {
  let t, n, o, r, s, i, l, u, c, N, g, _, S, w, C, b, L, W;
  const M = e[10].icon,
    E = Ie(M, e, e[9], et);
  function K(a, v) {
    return a[3] ? Pt : Lt;
  }
  let p = K(e),
    P = p(e);
  const j = e[10].default,
    y = Ie(j, e, e[9], null);
  return {
    c() {
      (t = z("div")),
        (n = z("div")),
        (o = z("div")),
        E && E.c(),
        (r = le()),
        (s = z("p")),
        (i = ze(e[0])),
        (l = le()),
        (u = z("div")),
        (c = z("button")),
        P.c(),
        (N = le()),
        (g = z("button")),
        (g.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-fpg72o"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 4l6 6m0-6l-6 6" class="svelte-fpg72o"></path></svg>'),
        (_ = le()),
        (S = z("div")),
        y && y.c(),
        f(s, "title", e[0]),
        f(s, "class", "svelte-fpg72o"),
        f(o, "class", "titlebarTitle svelte-fpg72o"),
        f(c, "class", "svelte-fpg72o"),
        f(g, "class", "svelte-fpg72o"),
        f(u, "class", "titlebarButtons svelte-fpg72o"),
        f(n, "class", "titlebar svelte-fpg72o"),
        G(n, "cursor", e[5] ? "grabbing" : e[3] ? "not-allowed" : "grab"),
        f(S, "class", "windowContent svelte-fpg72o"),
        f(t, "class", "window svelte-fpg72o"),
        ae(() => e[12].call(t)),
        G(t, "width", e[3] ? "100vw" : `${e[2].w}px`),
        G(t, "height", e[3] ? "100vh" : `${e[2].h}px`);
    },
    m(a, v) {
      te(a, t, v),
        $(t, n),
        $(n, o),
        E && E.m(o, null),
        $(o, r),
        $(o, s),
        $(s, i),
        $(n, l),
        $(n, u),
        $(u, c),
        P.m(c, null),
        $(u, N),
        $(u, g),
        $(t, _),
        $(t, S),
        y && y.m(S, null),
        (w = $t(t, e[12].bind(t))),
        (b = !0),
        L ||
          ((W = [
            H(c, "click", e[7]),
            H(g, "click", e[6]),
            H(n, "mousemove", e[11]),
            mt(
              (C = Bt.call(null, t, {
                position: e[1],
                handle: ".titlebar",
                disabled: e[3],
              }))
            ),
            H(t, "neodrag", e[13]),
            H(t, "neodrag:start", e[14]),
            H(t, "neodrag:end", e[15]),
          ]),
          (L = !0));
    },
    p(a, [v]) {
      E &&
        E.p &&
        (!b || v & 512) &&
        Xe(E, M, a, a[9], b ? Ve(M, a[9], v, zt) : Ye(a[9]), et),
        (!b || v & 1) && yt(i, a[0]),
        (!b || v & 1) && f(s, "title", a[0]),
        p !== (p = K(a)) && (P.d(1), (P = p(a)), P && (P.c(), P.m(c, null))),
        v & 40 &&
          G(n, "cursor", a[5] ? "grabbing" : a[3] ? "not-allowed" : "grab"),
        y &&
          y.p &&
          (!b || v & 512) &&
          Xe(y, j, a, a[9], b ? Ve(j, a[9], v, null) : Ye(a[9]), null),
        C &&
          he(C.update) &&
          v & 10 &&
          C.update.call(null, {
            position: a[1],
            handle: ".titlebar",
            disabled: a[3],
          }),
        v & 12 && G(t, "width", a[3] ? "100vw" : `${a[2].w}px`),
        v & 12 && G(t, "height", a[3] ? "100vh" : `${a[2].h}px`);
    },
    i(a) {
      b || (T(E, a), T(y, a), (b = !0));
    },
    o(a) {
      U(E, a), U(y, a), (b = !1);
    },
    d(a) {
      a && V(t), E && E.d(a), P.d(), y && y.d(a), w(), (L = !1), F(W);
    },
  };
}
function Ot(e, t, n) {
  let o;
  rt(e, Be, (p) => n(18, (o = p)));
  let { $$slots: r = {}, $$scope: s } = t,
    { title: i = "Application" } = t,
    { id: l } = t;
  if (l === void 0) throw new TypeError("Id property must be set.");
  const u = () => {
      gt(Be, (o = o.filter((p) => p.id != l)), o);
    },
    c = () => {
      w
        ? (n(3, (w = !1)), n(1, (N = g)), n(2, (_ = S)))
        : ((g = N), (S = { ..._ }), n(1, (N = { x: 0, y: 0 })), n(3, (w = !0)));
    };
  let N = { x: window.innerWidth / 6, y: window.innerHeight / 6 },
    g,
    _ = { w: (window.innerWidth / 3) * 2, h: (window.innerHeight / 3) * 2 },
    S,
    w = !1,
    C,
    b = !1;
  const L = (p) => n(4, (C = p));
  function W() {
    (_.w = this.clientWidth), (_.h = this.clientHeight), n(2, _);
  }
  const M = (p) => n(1, (N = { x: p.offsetX, y: p.offsetY })),
    E = (p) => n(5, (b = !0)),
    K = (p) => n(5, (b = !1));
  return (
    (e.$$set = (p) => {
      "title" in p && n(0, (i = p.title)),
        "id" in p && n(8, (l = p.id)),
        "$$scope" in p && n(9, (s = p.$$scope));
    }),
    [i, N, _, w, C, b, u, c, l, s, r, L, W, M, E, K]
  );
}
class Dt extends He {
  constructor(t) {
    super(), Pe(this, t, Ot, Ht, ge, { title: 0, id: 8 });
  }
}
function Tt(e) {
  let t, n, o;
  return {
    c() {
      (t = z("textarea")),
        f(t, "name", "Notepad"),
        f(t, "class", "svelte-1cny9dt");
    },
    m(r, s) {
      te(r, t, s),
        Ue(t, e[1]),
        n || ((o = [H(t, "keydown", e[2]), H(t, "input", e[3])]), (n = !0));
    },
    p(r, s) {
      s & 2 && Ue(t, r[1]);
    },
    d(r) {
      r && V(t), (n = !1), F(o);
    },
  };
}
function Wt(e) {
  let t, n;
  return (
    (t = new Dt({
      props: {
        id: e[0],
        title: "Notepad",
        $$slots: { default: [Tt] },
        $$scope: { ctx: e },
      },
    })),
    {
      c() {
        Me(t.$$.fragment);
      },
      m(o, r) {
        de(t, o, r), (n = !0);
      },
      p(o, [r]) {
        const s = {};
        r & 1 && (s.id = o[0]),
          r & 18 && (s.$$scope = { dirty: r, ctx: o }),
          t.$set(s);
      },
      i(o) {
        n || (T(t.$$.fragment, o), (n = !0));
      },
      o(o) {
        U(t.$$.fragment, o), (n = !1);
      },
      d(o) {
        pe(t, o);
      },
    }
  );
}
function jt(e, t, n) {
  let { id: o } = t,
    r = "Type away in this textarea!";
  const s = (l) => {
    l.key === "Tab" && (l.preventDefault(), n(1, (r += "	")));
  };
  function i() {
    (r = this.value), n(1, r);
  }
  return (
    (e.$$set = (l) => {
      "id" in l && n(0, (o = l.id));
    }),
    [o, r, s, i]
  );
}
class Rt extends He {
  constructor(t) {
    super(), Pe(this, t, jt, Wt, ge, { id: 0 });
  }
}
const Be = Mt([{ app: Rt, id: "CustomID" }]);
function tt(e, t, n) {
  const o = e.slice();
  return (o[1] = t[n]), o;
}
function nt(e) {
  let t, n, o;
  var r = e[1].app;
  function s(i, l) {
    return { props: { id: i[1].id } };
  }
  return (
    r && (t = Fe(r, s(e))),
    {
      c() {
        t && Me(t.$$.fragment), (n = wt());
      },
      m(i, l) {
        t && de(t, i, l), te(i, n, l), (o = !0);
      },
      p(i, l) {
        if (l & 1 && r !== (r = i[1].app)) {
          if (t) {
            lt();
            const u = t;
            U(u.$$.fragment, 1, 0, () => {
              pe(u, 1);
            }),
              ut();
          }
          r
            ? ((t = Fe(r, s(i))),
              Me(t.$$.fragment),
              T(t.$$.fragment, 1),
              de(t, n.parentNode, n))
            : (t = null);
        } else if (r) {
          const u = {};
          l & 1 && (u.id = i[1].id), t.$set(u);
        }
      },
      i(i) {
        o || (t && T(t.$$.fragment, i), (o = !0));
      },
      o(i) {
        t && U(t.$$.fragment, i), (o = !1);
      },
      d(i) {
        i && V(n), t && pe(t, i);
      },
    }
  );
}
function qt(e) {
  let t,
    n,
    o = Je(e[0]),
    r = [];
  for (let i = 0; i < o.length; i += 1) r[i] = nt(tt(e, o, i));
  const s = (i) =>
    U(r[i], 1, 1, () => {
      r[i] = null;
    });
  return {
    c() {
      t = z("div");
      for (let i = 0; i < r.length; i += 1) r[i].c();
      f(t, "class", "svelte-wp9gfo");
    },
    m(i, l) {
      te(i, t, l);
      for (let u = 0; u < r.length; u += 1) r[u] && r[u].m(t, null);
      n = !0;
    },
    p(i, [l]) {
      if (l & 1) {
        o = Je(i[0]);
        let u;
        for (u = 0; u < o.length; u += 1) {
          const c = tt(i, o, u);
          r[u]
            ? (r[u].p(c, l), T(r[u], 1))
            : ((r[u] = nt(c)), r[u].c(), T(r[u], 1), r[u].m(t, null));
        }
        for (lt(), u = o.length; u < r.length; u += 1) s(u);
        ut();
      }
    },
    i(i) {
      if (!n) {
        for (let l = 0; l < o.length; l += 1) T(r[l]);
        n = !0;
      }
    },
    o(i) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1) U(r[l]);
      n = !1;
    },
    d(i) {
      i && V(t), _t(r, i);
    },
  };
}
function It(e, t, n) {
  let o;
  return rt(e, Be, (r) => n(0, (o = r))), [o];
}
class Vt extends He {
  constructor(t) {
    super(), Pe(this, t, It, qt, ge, {});
  }
}
new Vt({ target: document.body });
