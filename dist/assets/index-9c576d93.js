/// main.js
addEventListener("DOMContentLoaded", () => {
  var xt = Object.defineProperty;
  var Mt = (e, t, n) =>
    t in e
      ? xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  var Se = (e, t, n) => (Mt(e, typeof t != "symbol" ? t + "" : t, n), n);
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
      o(r);
    new MutationObserver((r) => {
      for (const l of r)
        if (l.type === "childList")
          for (const i of l.addedNodes)
            i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(r) {
      const l = {};
      return (
        r.integrity && (l.integrity = r.integrity),
        r.referrerPolicy && (l.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials"
          ? (l.credentials = "include")
          : r.crossOrigin === "anonymous"
          ? (l.credentials = "omit")
          : (l.credentials = "same-origin"),
        l
      );
    }
    function o(r) {
      if (r.ep) return;
      r.ep = !0;
      const l = n(r);
      fetch(r.href, l);
    }
  })();
  function P() {}
  function qt(e, t) {
    for (const n in t) e[n] = t[n];
    return e;
  }
  function gt(e) {
    return e();
  }
  function Ge() {
    return Object.create(null);
  }
  function J(e) {
    e.forEach(gt);
  }
  function _e(e) {
    return typeof e == "function";
  }
  function ue(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function Ct(e) {
    return Object.keys(e).length === 0;
  }
  function Et(e, ...t) {
    if (e == null) {
      for (const o of t) o(void 0);
      return P;
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n;
  }
  function Y(e, t, n) {
    e.$$.on_destroy.push(Et(t, n));
  }
  function Ke(e, t, n, o) {
    if (e) {
      const r = mt(e, t, n, o);
      return e[0](r);
    }
  }
  function mt(e, t, n, o) {
    return e[1] && o ? qt(n.ctx.slice(), e[1](o(t))) : n.ctx;
  }
  function Je(e, t, n, o) {
    if (e[2] && o) {
      const r = e[2](o(n));
      if (t.dirty === void 0) return r;
      if (typeof r == "object") {
        const l = [],
          i = Math.max(t.dirty.length, r.length);
        for (let f = 0; f < i; f += 1) l[f] = t.dirty[f] | r[f];
        return l;
      }
      return t.dirty | r;
    }
    return t.dirty;
  }
  function Qe(e, t, n, o, r, l) {
    if (r) {
      const i = mt(t, n, o, l);
      e.p(i, r);
    }
  }
  function et(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let o = 0; o < n; o++) t[o] = -1;
      return t;
    }
    return -1;
  }
  function ge(e, t, n) {
    return e.set(n), t;
  }
  function At(e) {
    return e && _e(e.destroy) ? e.destroy : P;
  }
  function m(e, t) {
    e.appendChild(t);
  }
  function ye(e, t, n) {
    const o = Nt(e);
    if (!o.getElementById(t)) {
      const r = q("style");
      (r.id = t), (r.textContent = n), Bt(o, r);
    }
  }
  function Nt(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument;
  }
  function Bt(e, t) {
    return m(e.head || e, t), t.sheet;
  }
  function B(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function E(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function vt(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function q(e) {
    return document.createElement(e);
  }
  function H(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }
  function ke(e) {
    return document.createTextNode(e);
  }
  function U() {
    return ke(" ");
  }
  function $t() {
    return ke("");
  }
  function A(e, t, n, o) {
    return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
  }
  function c(e, t, n) {
    n == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function Lt(e) {
    return Array.from(e.childNodes);
  }
  function bt(e, t) {
    (t = "" + t), e.data !== t && (e.data = t);
  }
  function tt(e, t) {
    e.value = t ?? "";
  }
  function S(e, t, n, o) {
    n == null
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, o ? "important" : "");
  }
  let pe;
  function St() {
    if (pe === void 0) {
      pe = !1;
      try {
        typeof window < "u" && window.parent && window.parent.document;
      } catch {
        pe = !0;
      }
    }
    return pe;
  }
  function Ht(e, t) {
    getComputedStyle(e).position === "static" &&
      (e.style.position = "relative");
    const o = q("iframe");
    o.setAttribute(
      "style",
      "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
    ),
      o.setAttribute("aria-hidden", "true"),
      (o.tabIndex = -1);
    const r = St();
    let l;
    return (
      r
        ? ((o.src =
            "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>"),
          (l = A(window, "message", (i) => {
            i.source === o.contentWindow && t();
          })))
        : ((o.src = "about:blank"),
          (o.onload = () => {
            (l = A(o.contentWindow, "resize", t)), t();
          })),
      m(e, o),
      () => {
        (r || (l && o.contentWindow)) && l(), E(o);
      }
    );
  }
  function nt(e, t) {
    return new e(t);
  }
  let Ve;
  function ie(e) {
    Ve = e;
  }
  const ne = [],
    Pe = [];
  let oe = [];
  const ot = [],
    Tt = Promise.resolve();
  let je = !1;
  function zt() {
    je || ((je = !0), Tt.then(wt));
  }
  function ve(e) {
    oe.push(e);
  }
  const He = new Set();
  let ee = 0;
  function wt() {
    if (ee !== 0) return;
    const e = Ve;
    do {
      try {
        for (; ee < ne.length; ) {
          const t = ne[ee];
          ee++, ie(t), Dt(t.$$);
        }
      } catch (t) {
        throw ((ne.length = 0), (ee = 0), t);
      }
      for (ie(null), ne.length = 0, ee = 0; Pe.length; ) Pe.pop()();
      for (let t = 0; t < oe.length; t += 1) {
        const n = oe[t];
        He.has(n) || (He.add(n), n());
      }
      oe.length = 0;
    } while (ne.length);
    for (; ot.length; ) ot.pop()();
    (je = !1), He.clear(), ie(e);
  }
  function Dt(e) {
    if (e.fragment !== null) {
      e.update(), J(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(ve);
    }
  }
  function Pt(e) {
    const t = [],
      n = [];
    oe.forEach((o) => (e.indexOf(o) === -1 ? t.push(o) : n.push(o))),
      n.forEach((o) => o()),
      (oe = t);
  }
  const me = new Set();
  let K;
  function _t() {
    K = { r: 0, c: [], p: K };
  }
  function yt() {
    K.r || J(K.c), (K = K.p);
  }
  function W(e, t) {
    e && e.i && (me.delete(e), e.i(t));
  }
  function F(e, t, n, o) {
    if (e && e.o) {
      if (me.has(e)) return;
      me.add(e),
        K.c.push(() => {
          me.delete(e), o && (n && e.d(1), o());
        }),
        e.o(t);
    } else o && o();
  }
  function be(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
  }
  function we(e) {
    e && e.c();
  }
  function se(e, t, n) {
    const { fragment: o, after_update: r } = e.$$;
    o && o.m(t, n),
      ve(() => {
        const l = e.$$.on_mount.map(gt).filter(_e);
        e.$$.on_destroy ? e.$$.on_destroy.push(...l) : J(l),
          (e.$$.on_mount = []);
      }),
      r.forEach(ve);
  }
  function ce(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (Pt(n.after_update),
      J(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function jt(e, t) {
    e.$$.dirty[0] === -1 && (ne.push(e), zt(), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function xe(e, t, n, o, r, l, i = null, f = [-1]) {
    const s = Ve;
    ie(e);
    const u = (e.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: P,
      not_equal: r,
      bound: Ge(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (s ? s.$$.context : [])),
      callbacks: Ge(),
      dirty: f,
      skip_bound: !1,
      root: t.target || s.$$.root,
    });
    i && i(u.root);
    let h = !1;
    if (
      ((u.ctx = n
        ? n(e, t.props || {}, (p, _, ...v) => {
            const b = v.length ? v[0] : _;
            return (
              u.ctx &&
                r(u.ctx[p], (u.ctx[p] = b)) &&
                (!u.skip_bound && u.bound[p] && u.bound[p](b), h && jt(e, p)),
              _
            );
          })
        : []),
      u.update(),
      (h = !0),
      J(u.before_update),
      (u.fragment = o ? o(u.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const p = Lt(t.target);
        u.fragment && u.fragment.l(p), p.forEach(E);
      } else u.fragment && u.fragment.c();
      t.intro && W(e.$$.fragment), se(e, t.target, t.anchor), wt();
    }
    ie(s);
  }
  class Me {
    constructor() {
      Se(this, "$$");
      Se(this, "$$set");
    }
    $destroy() {
      ce(this, 1), (this.$destroy = P);
    }
    $on(t, n) {
      if (!_e(n)) return P;
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
        !Ct(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const Ot = "4";
  typeof window < "u" &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add(Ot);
  var Te = { dragStart: !0 },
    rt = (e, t, n) => Math.min(Math.max(e, t), n),
    ze = (e) => typeof e == "string",
    Wt = ([e, t], n, o) => {
      const r = (l, i) => (i === 0 ? 0 : Math.ceil(l / i) * i);
      return [r(n, e), r(o, t)];
    },
    lt = (e, t) => e.some((n) => t.some((o) => n.contains(o)));
  function De(e, t) {
    if (e === void 0) return;
    if (Oe(e)) return e.getBoundingClientRect();
    if (typeof e == "object") {
      const { top: o = 0, left: r = 0, right: l = 0, bottom: i = 0 } = e;
      return {
        top: o,
        right: window.innerWidth - l,
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
  var he = (e, t, n) => e.style.setProperty(t, n),
    Oe = (e) => e instanceof HTMLElement,
    Rt = (e, t = {}) => {
      let n,
        o,
        {
          bounds: r,
          axis: l = "both",
          gpuAcceleration: i = !0,
          legacyTranslate: f = !0,
          transform: s,
          applyUserSelectHack: u = !0,
          disabled: h = !1,
          ignoreMultitouch: p = !1,
          recomputeBounds: _ = Te,
          grid: v,
          position: b,
          cancel: $,
          handle: x,
          defaultClass: j = "neodrag",
          defaultClassDragging: I = "neodrag-dragging",
          defaultClassDragged: T = "neodrag-dragged",
          defaultPosition: C = { x: 0, y: 0 },
          onDragStart: Q,
          onDrag: Z,
          onDragEnd: L,
        } = t,
        O = !1,
        d = 0,
        a = 0,
        y = 0,
        re = 0,
        Ce = 0,
        Ee = 0,
        { x: ae, y: de } = b
          ? {
              x: (b == null ? void 0 : b.x) ?? 0,
              y: (b == null ? void 0 : b.y) ?? 0,
            }
          : C;
      Be(ae, de);
      let R,
        G,
        le,
        Ae,
        Ie,
        Ze = "",
        kt = !!b;
      _ = { ...Te, ..._ };
      const Ne = document.body.style,
        X = e.classList;
      function Be(g = d, k = a) {
        if (!s) {
          if (f) {
            let N = `${+g}px, ${+k}px`;
            return he(
              e,
              "transform",
              i ? `translate3d(${N}, 0)` : `translate(${N})`
            );
          }
          return he(e, "translate", `${+g}px ${+k}px ${i ? "1px" : ""}`);
        }
        const M = s({ offsetX: g, offsetY: k, rootNode: e });
        ze(M) && he(e, "transform", M);
      }
      const $e = (g, k) => {
          const M = { offsetX: d, offsetY: a, rootNode: e, currentNode: Ie };
          e.dispatchEvent(new CustomEvent(g, { detail: M })), k == null || k(M);
        },
        Le = addEventListener;
      Le("pointerdown", Ye, !1),
        Le("pointerup", Ue, !1),
        Le("pointermove", Fe, !1),
        he(e, "touch-action", "none");
      const Xe = () => {
        let g = e.offsetWidth / G.width;
        return isNaN(g) && (g = 1), g;
      };
      function Ye(g) {
        if (h || g.button === 2 || (p && !g.isPrimary)) return;
        if ((_.dragStart && (R = De(r, e)), ze(x) && ze($) && x === $))
          throw new Error(
            "`handle` selector can't be same as `cancel` selector"
          );
        if (
          (X.add(j),
          (le = (function (w, D) {
            if (!w) return [D];
            if (Oe(w)) return [w];
            if (Array.isArray(w)) return w;
            const V = D.querySelectorAll(w);
            if (V === null)
              throw new Error(
                "Selector passed for `handle` option should be child of the element on which the action is applied"
              );
            return Array.from(V.values());
          })(x, e)),
          (Ae = (function (w, D) {
            if (!w) return [];
            if (Oe(w)) return [w];
            if (Array.isArray(w)) return w;
            const V = D.querySelectorAll(w);
            if (V === null)
              throw new Error(
                "Selector passed for `cancel` option should be child of the element on which the action is applied"
              );
            return Array.from(V.values());
          })($, e)),
          (n = /(both|x)/.test(l)),
          (o = /(both|y)/.test(l)),
          lt(Ae, le))
        )
          throw new Error(
            "Element being dragged can't be a child of the element on which `cancel` is applied"
          );
        const k = g.composedPath()[0];
        if (
          !le.some((w) => {
            var D;
            return (
              w.contains(k) ||
              ((D = w.shadowRoot) == null ? void 0 : D.contains(k))
            );
          }) ||
          lt(Ae, [k])
        )
          return;
        (Ie = le.length === 1 ? e : le.find((w) => w.contains(k))),
          (O = !0),
          (G = e.getBoundingClientRect()),
          u && ((Ze = Ne.userSelect), (Ne.userSelect = "none")),
          $e("neodrag:start", Q);
        const { clientX: M, clientY: N } = g,
          z = Xe();
        n && (y = M - ae / z),
          o && (re = N - de / z),
          R && ((Ce = M - G.left), (Ee = N - G.top));
      }
      function Ue() {
        O &&
          (_.dragEnd && (R = De(r, e)),
          X.remove(I),
          X.add(T),
          u && (Ne.userSelect = Ze),
          $e("neodrag:end", L),
          n && (y = d),
          o && (re = a),
          (O = !1));
      }
      function Fe(g) {
        if (!O) return;
        _.drag && (R = De(r, e)),
          X.add(I),
          g.preventDefault(),
          (G = e.getBoundingClientRect());
        let k = g.clientX,
          M = g.clientY;
        const N = Xe();
        if (R) {
          const z = {
            left: R.left + Ce,
            top: R.top + Ee,
            right: R.right + Ce - G.width,
            bottom: R.bottom + Ee - G.height,
          };
          (k = rt(k, z.left, z.right)), (M = rt(M, z.top, z.bottom));
        }
        if (Array.isArray(v)) {
          let [z, w] = v;
          if (isNaN(+z) || z < 0)
            throw new Error(
              "1st argument of `grid` must be a valid positive number"
            );
          if (isNaN(+w) || w < 0)
            throw new Error(
              "2nd argument of `grid` must be a valid positive number"
            );
          let D = k - y,
            V = M - re;
          ([D, V] = Wt([z / N, w / N], D, V)), (k = y + D), (M = re + V);
        }
        n && (d = Math.round((k - y) * N)),
          o && (a = Math.round((M - re) * N)),
          (ae = d),
          (de = a),
          $e("neodrag", Z),
          Be();
      }
      return {
        destroy: () => {
          const g = removeEventListener;
          g("pointerdown", Ye, !1),
            g("pointerup", Ue, !1),
            g("pointermove", Fe, !1);
        },
        update: (g) => {
          var M, N;
          (l = g.axis || "both"),
            (h = g.disabled ?? !1),
            (p = g.ignoreMultitouch ?? !1),
            (x = g.handle),
            (r = g.bounds),
            (_ = g.recomputeBounds ?? Te),
            ($ = g.cancel),
            (u = g.applyUserSelectHack ?? !0),
            (v = g.grid),
            (i = g.gpuAcceleration ?? !0),
            (f = g.legacyTranslate ?? !0),
            (s = g.transform);
          const k = X.contains(T);
          X.remove(j, T),
            (j = g.defaultClass ?? "neodrag"),
            (I = g.defaultClassDragging ?? "neodrag-dragging"),
            (T = g.defaultClassDragged ?? "neodrag-dragged"),
            X.add(j),
            k && X.add(T),
            kt &&
              ((ae = d = ((M = g.position) == null ? void 0 : M.x) ?? d),
              (de = a = ((N = g.position) == null ? void 0 : N.y) ?? a),
              Be());
        },
      };
    };
  const te = [];
  function qe(e, t = P) {
    let n;
    const o = new Set();
    function r(f) {
      if (ue(e, f) && ((e = f), n)) {
        const s = !te.length;
        for (const u of o) u[1](), te.push(u, e);
        if (s) {
          for (let u = 0; u < te.length; u += 2) te[u][0](te[u + 1]);
          te.length = 0;
        }
      }
    }
    function l(f) {
      r(f(e));
    }
    function i(f, s = P) {
      const u = [f, s];
      return (
        o.add(u),
        o.size === 1 && (n = t(r, l) || P),
        f(e),
        () => {
          o.delete(u), o.size === 0 && n && (n(), (n = null));
        }
      );
    }
    return { set: r, update: l, subscribe: i };
  }
  const fe = qe([]),
    We = qe(),
    it = qe(),
    Re = qe(!1);
  function Vt(e) {
    ye(
      e,
      "svelte-nmgb63",
      ".svelte-nmgb63.svelte-nmgb63:not(path, g){all:unset}.window.svelte-nmgb63.svelte-nmgb63{position:absolute;display:flex;flex-direction:column;overflow:auto;resize:both;border:1px solid black;background-color:white;pointer-events:all;min-width:54px;min-height:54px}.titlebar.svelte-nmgb63.svelte-nmgb63{height:24px;flex:none;display:flex;flex-direction:row;justify-content:space-between;padding:2px;background-color:#f1f5f9}.titlebarTitle.svelte-nmgb63.svelte-nmgb63{flex-grow:1;place-items:center;display:flex;flex-direction:row;overflow:hidden}.titlebarTitle.svelte-nmgb63 p.svelte-nmgb63{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.titlebarButtons.svelte-nmgb63.svelte-nmgb63{display:flex;flex:none;flex-direction:row;gap:2px;cursor:pointer;margin-top:-4px;padding-top:3px}.titlebarButtons.svelte-nmgb63 button.svelte-nmgb63{width:24px;height:24px}#closeBtn.svelte-nmgb63:hover path.svelte-nmgb63{fill:#fca5a5}.windowContent.svelte-nmgb63.svelte-nmgb63{flex-grow:1;padding:2px;overflow:hidden}@media(prefers-color-scheme: dark){.window.svelte-nmgb63.svelte-nmgb63{background-color:black;color:white}.windowContent.svelte-nmgb63.svelte-nmgb63{filter:invert(0%)}.titlebar.svelte-nmgb63.svelte-nmgb63{background-color:#0f172a}path.svelte-nmgb63.svelte-nmgb63{stroke:white;fill:black}#closeBtn.svelte-nmgb63:hover path.svelte-nmgb63{fill:#991b1b}}"
    );
  }
  const It = (e) => ({}),
    st = (e) => ({});
  function Zt(e) {
    let t, n, o, r;
    return {
      c() {
        (t = H("svg")),
          (n = H("g")),
          (o = H("path")),
          (r = H("path")),
          c(
            o,
            "d",
            "M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
          ),
          c(o, "class", "svelte-nmgb63"),
          c(r, "d", "M12 8h4v4m0-4l-5 5"),
          c(r, "class", "svelte-nmgb63"),
          c(n, "fill", "white"),
          c(n, "stroke", "currentColor"),
          c(n, "stroke-linecap", "round"),
          c(n, "stroke-linejoin", "round"),
          c(n, "stroke-width", "2"),
          c(n, "class", "svelte-nmgb63"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "width", "24"),
          c(t, "height", "24"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-nmgb63");
      },
      m(l, i) {
        B(l, t, i), m(t, n), m(n, o), m(n, r);
      },
      d(l) {
        l && E(t);
      },
    };
  }
  function Xt(e) {
    let t, n, o, r;
    return {
      c() {
        (t = H("svg")),
          (n = H("g")),
          (o = H("path")),
          (r = H("path")),
          c(
            o,
            "d",
            "M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
          ),
          c(o, "class", "svelte-nmgb63"),
          c(r, "d", "M15 13h-4V9m0 4l5-5"),
          c(r, "class", "svelte-nmgb63"),
          c(n, "fill", "white"),
          c(n, "stroke", "currentColor"),
          c(n, "stroke-linecap", "round"),
          c(n, "stroke-linejoin", "round"),
          c(n, "stroke-width", "2"),
          c(n, "class", "svelte-nmgb63"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "width", "24"),
          c(t, "height", "24"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-nmgb63");
      },
      m(l, i) {
        B(l, t, i), m(t, n), m(n, o), m(n, r);
      },
      d(l) {
        l && E(t);
      },
    };
  }
  function Yt(e) {
    let t, n, o, r, l, i, f, s, u, h, p, _, v, b, $, x, j, I;
    const T = e[13].icon,
      C = Ke(T, e, e[12], st);
    function Q(a, y) {
      return a[4] ? Xt : Zt;
    }
    let Z = Q(e),
      L = Z(e);
    const O = e[13].default,
      d = Ke(O, e, e[12], null);
    return {
      c() {
        (t = q("div")),
          (n = q("div")),
          (o = q("div")),
          C && C.c(),
          (r = U()),
          (l = q("p")),
          (i = ke(e[0])),
          (f = U()),
          (s = q("div")),
          (u = q("button")),
          L.c(),
          (h = U()),
          (p = q("button")),
          (p.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-nmgb63"><path fill="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 4l6 6m0-6l-6 6" class="svelte-nmgb63"></path></svg>'),
          (_ = U()),
          (v = q("div")),
          d && d.c(),
          c(l, "title", e[0]),
          c(l, "class", "svelte-nmgb63"),
          c(o, "class", "titlebarTitle svelte-nmgb63"),
          c(u, "class", "svelte-nmgb63"),
          c(p, "id", "closeBtn"),
          c(p, "class", "svelte-nmgb63"),
          c(s, "class", "titlebarButtons svelte-nmgb63"),
          c(n, "class", "titlebar svelte-nmgb63"),
          S(n, "cursor", e[6] ? "grabbing" : e[4] ? "not-allowed" : "grab"),
          c(v, "class", "windowContent svelte-nmgb63"),
          c(t, "class", "window svelte-nmgb63"),
          ve(() => e[16].call(t)),
          S(t, "border-radius", e[4] ? "0px" : "8px"),
          S(t, "width", e[4] ? "100vw" : `${e[3].w}px`),
          S(t, "height", e[4] ? "100vh" : `${e[3].h}px`),
          S(t, "z-index", e[6] ? "3" : e[7] === e[1] ? "2" : "initial");
      },
      m(a, y) {
        B(a, t, y),
          m(t, n),
          m(n, o),
          C && C.m(o, null),
          m(o, r),
          m(o, l),
          m(l, i),
          m(n, f),
          m(n, s),
          m(s, u),
          L.m(u, null),
          m(s, h),
          m(s, p),
          m(t, _),
          m(t, v),
          d && d.m(v, null),
          (b = Ht(t, e[16].bind(t))),
          (x = !0),
          j ||
            ((I = [
              A(u, "click", e[11]),
              A(p, "click", e[10]),
              A(n, "mousemove", e[14]),
              A(t, "pointerenter", e[15]),
              At(
                ($ = Rt.call(null, t, {
                  position: e[2],
                  handle: ".titlebar",
                  disabled: e[4],
                  bounds: e[8],
                }))
              ),
              A(t, "neodrag", e[17]),
              A(t, "neodrag:start", e[18]),
              A(t, "neodrag:end", e[19]),
            ]),
            (j = !0));
      },
      p(a, [y]) {
        C &&
          C.p &&
          (!x || y & 4096) &&
          Qe(C, T, a, a[12], x ? Je(T, a[12], y, It) : et(a[12]), st),
          (!x || y & 1) && bt(i, a[0]),
          (!x || y & 1) && c(l, "title", a[0]),
          Z !== (Z = Q(a)) && (L.d(1), (L = Z(a)), L && (L.c(), L.m(u, null))),
          y & 80 &&
            S(n, "cursor", a[6] ? "grabbing" : a[4] ? "not-allowed" : "grab"),
          d &&
            d.p &&
            (!x || y & 4096) &&
            Qe(d, O, a, a[12], x ? Je(O, a[12], y, null) : et(a[12]), null),
          $ &&
            _e($.update) &&
            y & 276 &&
            $.update.call(null, {
              position: a[2],
              handle: ".titlebar",
              disabled: a[4],
              bounds: a[8],
            }),
          y & 16 && S(t, "border-radius", a[4] ? "0px" : "8px"),
          y & 24 && S(t, "width", a[4] ? "100vw" : `${a[3].w}px`),
          y & 24 && S(t, "height", a[4] ? "100vh" : `${a[3].h}px`),
          y & 194 &&
            S(t, "z-index", a[6] ? "3" : a[7] === a[1] ? "2" : "initial");
      },
      i(a) {
        x || (W(C, a), W(d, a), (x = !0));
      },
      o(a) {
        F(C, a), F(d, a), (x = !1);
      },
      d(a) {
        a && E(t), C && C.d(a), L.d(), d && d.d(a), b(), (j = !1), J(I);
      },
    };
  }
  function Ut(e, t, n) {
    let o, r, l, i;
    Y(e, fe, (d) => n(20, (o = d))),
      Y(e, Re, (d) => n(21, (r = d))),
      Y(e, it, (d) => n(7, (l = d))),
      Y(e, We, (d) => n(8, (i = d)));
    let { $$slots: f = {}, $$scope: s } = t,
      { title: u = "Application" } = t,
      { id: h } = t;
    if (h === void 0) throw new TypeError("Id property must be set.");
    let p = { x: window.innerWidth / 6, y: window.innerHeight / 6 },
      _ = { w: (window.innerWidth / 3) * 2, h: (window.innerHeight / 3) * 2 },
      v = !1,
      b,
      $ = !1;
    const x = (d) => {
        n(6, ($ = d)), ge(Re, (r = d), r);
      },
      j = () => {
        ge(fe, (o = o.filter((d) => d.id != h)), o);
      },
      I = () => {
        if (!v) {
          n(2, (p = { x: 0, y: 0 })), n(4, (v = !0));
          return;
        }
        n(4, (v = !1)),
          n(2, (p = { x: window.innerWidth / 6, y: window.innerHeight / 6 })),
          n(
            3,
            (_ = {
              w: (window.innerWidth / 3) * 2,
              h: (window.innerHeight / 3) * 2,
            })
          );
      },
      T = (d) => n(5, (b = d)),
      C = () => ge(it, (l = h), l);
    function Q() {
      (_.w = this.clientWidth), (_.h = this.clientHeight), n(3, _);
    }
    const Z = (d) => n(2, (p = { x: d.offsetX, y: d.offsetY })),
      L = (d) => x(!0),
      O = (d) => x(!1);
    return (
      (e.$$set = (d) => {
        "title" in d && n(0, (u = d.title)),
          "id" in d && n(1, (h = d.id)),
          "$$scope" in d && n(12, (s = d.$$scope));
      }),
      [u, h, p, _, v, b, $, l, i, x, j, I, s, f, T, C, Q, Z, L, O]
    );
  }
  class Ft extends Me {
    constructor(t) {
      super(), xe(this, t, Ut, Yt, ue, { title: 0, id: 1 }, Vt);
    }
  }
  function Gt(e) {
    ye(
      e,
      "svelte-v14p05",
      "textarea.svelte-v14p05{all:unset;width:100%;height:100%;white-space:pre}"
    );
  }
  function Kt(e) {
    let t, n, o;
    return {
      c() {
        (t = q("textarea")),
          c(t, "name", "Notepad"),
          c(t, "class", "svelte-v14p05");
      },
      m(r, l) {
        B(r, t, l),
          tt(t, e[1]),
          n || ((o = [A(t, "keydown", e[2]), A(t, "input", e[3])]), (n = !0));
      },
      p(r, l) {
        l & 2 && tt(t, r[1]);
      },
      d(r) {
        r && E(t), (n = !1), J(o);
      },
    };
  }
  function Jt(e) {
    let t, n;
    return (
      (t = new Ft({
        props: {
          id: e[0],
          title: "Notepad",
          $$slots: { default: [Kt] },
          $$scope: { ctx: e },
        },
      })),
      {
        c() {
          we(t.$$.fragment);
        },
        m(o, r) {
          se(t, o, r), (n = !0);
        },
        p(o, [r]) {
          const l = {};
          r & 1 && (l.id = o[0]),
            r & 18 && (l.$$scope = { dirty: r, ctx: o }),
            t.$set(l);
        },
        i(o) {
          n || (W(t.$$.fragment, o), (n = !0));
        },
        o(o) {
          F(t.$$.fragment, o), (n = !1);
        },
        d(o) {
          ce(t, o);
        },
      }
    );
  }
  function Qt(e, t, n) {
    let { id: o } = t,
      r = "Type away in this textarea!";
    const l = (f) => {
      f.key === "Tab" && (f.preventDefault(), n(1, (r += "	")));
    };
    function i() {
      (r = this.value), n(1, r);
    }
    return (
      (e.$$set = (f) => {
        "id" in f && n(0, (o = f.id));
      }),
      [o, r, l, i]
    );
  }
  class en extends Me {
    constructor(t) {
      super(), xe(this, t, Qt, Jt, ue, { id: 0 }, Gt);
    }
  }
  const ct = {
    title: "The root dir.",
    type: "d",
    items: [
      { title: "Puzzles", type: "d", items: [] },
      { title: "Games", type: "d", items: [] },
      {
        title: "Tools",
        type: "d",
        items: [
          { type: "d", title: "Programming", items: [] },
          { type: "a", title: "Notepad", component: en },
        ],
      },
    ],
  };
  function tn(e) {
    ye(
      e,
      "svelte-1ykvf9m",
      ".svelte-1ykvf9m.svelte-1ykvf9m.svelte-1ykvf9m:not(path){all:unset;pointer-events:all}#toggleBtn.svelte-1ykvf9m.svelte-1ykvf9m.svelte-1ykvf9m{position:fixed;right:0;bottom:0;height:24px;aspect-ratio:1/1;color:white;background-color:black;text-align:center;user-select:none;cursor:pointer}.appMenu.svelte-1ykvf9m.svelte-1ykvf9m.svelte-1ykvf9m{position:fixed;bottom:26px;right:0px;background-color:white;width:120px;display:flex;flex-direction:column;border:1px black solid}.appMenu.svelte-1ykvf9m>button.svelte-1ykvf9m.svelte-1ykvf9m{border:1px solid black;height:40px;display:flex;flex-direction:row;justify-content:center;place-items:center;gap:4px;padding:0px 4px}.appMenu.svelte-1ykvf9m>button.svelte-1ykvf9m.svelte-1ykvf9m:not(:last-child){border-bottom:0}.appMenu.svelte-1ykvf9m>button.svelte-1ykvf9m>p.svelte-1ykvf9m{white-space:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}.appMenu.svelte-1ykvf9m>button.svelte-1ykvf9m>svg.svelte-1ykvf9m{width:1.2rem;height:1.2rem;flex:none}@media(prefers-color-scheme: dark){.appMenu.svelte-1ykvf9m.svelte-1ykvf9m.svelte-1ykvf9m{filter:invert(100%)}}"
    );
  }
  function ft(e, t, n) {
    const o = e.slice();
    return (o[8] = t[n]), o;
  }
  function ut(e) {
    let t,
      n,
      o = be(e[0][e[1]].items),
      r = [];
    for (let i = 0; i < o.length; i += 1) r[i] = at(ft(e, o, i));
    let l = e[1] > 0 && dt(e);
    return {
      c() {
        t = q("div");
        for (let i = 0; i < r.length; i += 1) r[i].c();
        (n = U()), l && l.c(), c(t, "class", "appMenu svelte-1ykvf9m");
      },
      m(i, f) {
        B(i, t, f);
        for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(t, null);
        m(t, n), l && l.m(t, null);
      },
      p(i, f) {
        if (f & 19) {
          o = be(i[0][i[1]].items);
          let s;
          for (s = 0; s < o.length; s += 1) {
            const u = ft(i, o, s);
            r[s] ? r[s].p(u, f) : ((r[s] = at(u)), r[s].c(), r[s].m(t, n));
          }
          for (; s < r.length; s += 1) r[s].d(1);
          r.length = o.length;
        }
        i[1] > 0
          ? l
            ? l.p(i, f)
            : ((l = dt(i)), l.c(), l.m(t, null))
          : l && (l.d(1), (l = null));
      },
      d(i) {
        i && E(t), vt(r, i), l && l.d();
      },
    };
  }
  function nn(e) {
    let t, n;
    return {
      c() {
        (t = H("svg")),
          (n = H("path")),
          c(n, "fill", "currentColor"),
          c(
            n,
            "d",
            "M7.1 11.35q.35-.7.725-1.35t.825-1.3l-1.4-.275l-2.1 2.1l1.95.825Zm12.05-6.875q-1.75.05-3.737 1.025T11.8 8.1q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225t2.25-1.875q1.625-1.625 2.6-3.6T19.675 5q0-.1-.038-.2t-.112-.175q-.075-.075-.175-.112t-.2-.038Zm-5.5 6q-.575-.575-.575-1.412t.575-1.413q.575-.575 1.425-.575t1.425.575q.575.575.575 1.413t-.575 1.412q-.575.575-1.425.575t-1.425-.575Zm-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.813t-1.35.712Zm8.775-13.35q.2 2.75-.9 5.363T17.2 14.025l.5 2.475q.1.5-.05.975t-.5.825L14 21.45q-.375.375-.9.288t-.725-.588l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725t.275-.9L5.825 7q.35-.35.837-.5t.988-.05l2.475.5q2.375-2.375 4.988-3.475t5.362-.9q.2.025.4.113t.35.237q.15.15.238.35t.112.4Zm-17.65 12.3q.875-.875 2.138-.887t2.137.862q.875.875.863 2.138t-.888 2.137q-.625.625-2.087 1.075t-4.038.8q.35-2.575.8-4.038t1.075-2.087Zm1.425 1.4q-.25.25-.5.913t-.35 1.337q.675-.1 1.338-.338t.912-.487q.3-.3.325-.725T6.8 17.35q-.3-.3-.725-.288t-.725.313Z"
          ),
          c(n, "class", "svelte-1ykvf9m"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-1ykvf9m");
      },
      m(o, r) {
        B(o, t, r), m(t, n);
      },
      d(o) {
        o && E(t);
      },
    };
  }
  function on(e) {
    let t, n;
    return {
      c() {
        (t = H("svg")),
          (n = H("path")),
          c(n, "fill", "none"),
          c(n, "stroke", "currentColor"),
          c(n, "stroke-linecap", "round"),
          c(n, "stroke-linejoin", "round"),
          c(n, "stroke-width", "2"),
          c(
            n,
            "d",
            "M3 6v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3 6h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055c.204.05.399.13.578.24c.202.124.375.297.72.643L12 6"
          ),
          c(n, "class", "svelte-1ykvf9m"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-1ykvf9m");
      },
      m(o, r) {
        B(o, t, r), m(t, n);
      },
      d(o) {
        o && E(t);
      },
    };
  }
  function at(e) {
    let t,
      n,
      o,
      r = e[8].title + "",
      l,
      i,
      f,
      s;
    function u(v, b) {
      return v[8].type === "d" ? on : nn;
    }
    let h = u(e),
      p = h(e);
    function _(...v) {
      return e[5](e[8], ...v);
    }
    return {
      c() {
        (t = q("button")),
          p.c(),
          (n = U()),
          (o = q("p")),
          (l = ke(r)),
          c(o, "title", (i = e[8].title)),
          c(o, "class", "svelte-1ykvf9m"),
          c(t, "class", "svelte-1ykvf9m");
      },
      m(v, b) {
        B(v, t, b),
          p.m(t, null),
          m(t, n),
          m(t, o),
          m(o, l),
          f || ((s = A(t, "click", _)), (f = !0));
      },
      p(v, b) {
        (e = v),
          h !== (h = u(e)) && (p.d(1), (p = h(e)), p && (p.c(), p.m(t, n))),
          b & 3 && r !== (r = e[8].title + "") && bt(l, r),
          b & 3 && i !== (i = e[8].title) && c(o, "title", i);
      },
      d(v) {
        v && E(t), p.d(), (f = !1), s();
      },
    };
  }
  function dt(e) {
    let t, n, o;
    return {
      c() {
        (t = q("button")),
          (t.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1ykvf9m"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.803 20h1.99c.433 0 .649 0 .83-.074c.161-.066.302-.172.41-.308c.12-.155.18-.362.299-.778l1.086-3.8c.198-.693.296-1.04.218-1.313a1 1 0 0 0-.435-.577c-.228-.141-.561-.15-1.2-.15m-3.198 7H6.197m11.606 0c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V13M6.197 20H5.12c-.72 0-1.08 0-1.322-.15a1 1 0 0 1-.436-.577a.71.71 0 0 1-.025-.16m2.86.887c-1.118 0-1.678 0-2.105-.218a1.999 1.999 0 0 1-.754-.67M21 13H5l-1.417 4.96l-.002.007c-.16.56-.255.893-.243 1.145M21 13V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3.338 19.112a1.998 1.998 0 0 1-.12-.204C3 18.48 3 17.92 3 16.8V6m0 0h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055c.204.05.399.13.578.24c.202.124.375.297.72.643L12 6" class="svelte-1ykvf9m"></path></svg> <p class="svelte-1ykvf9m">Back</p>'),
          c(t, "class", "svelte-1ykvf9m");
      },
      m(r, l) {
        B(r, t, l), n || ((o = A(t, "click", e[3])), (n = !0));
      },
      p: P,
      d(r) {
        r && E(t), (n = !1), o();
      },
    };
  }
  function rn(e) {
    let t,
      n,
      o,
      r,
      l = e[2] && ut(e);
    return {
      c() {
        l && l.c(),
          (t = U()),
          (n = q("button")),
          (n.textContent = "+"),
          c(n, "id", "toggleBtn"),
          c(n, "class", "svelte-1ykvf9m");
      },
      m(i, f) {
        l && l.m(i, f),
          B(i, t, f),
          B(i, n, f),
          o || ((r = A(n, "click", e[6])), (o = !0));
      },
      p(i, [f]) {
        i[2]
          ? l
            ? l.p(i, f)
            : ((l = ut(i)), l.c(), l.m(t.parentNode, t))
          : l && (l.d(1), (l = null));
      },
      i: P,
      o: P,
      d(i) {
        i && (E(t), E(n)), l && l.d(i), (o = !1), r();
      },
    };
  }
  function ln(e, t, n) {
    let o;
    Y(e, fe, (p) => n(7, (o = p)));
    let r = [ct],
      l = 0,
      i = !1;
    const f = () => {
        r.length === 1 || r.pop(), n(1, (l = r.length - 1));
      },
      s = (p) => {
        p.type === "a"
          ? (ge(
              fe,
              (o = [...o, { app: p.component, id: performance.now() }]),
              o
            ),
            n(0, (r = [ct])),
            n(1, (l = 0)),
            n(2, (i = !1)))
          : (r.push(p), n(1, (l = r.length - 1)));
      };
    return [r, l, i, f, s, (p, _) => s(p), (p) => n(2, (i = !i))];
  }
  class sn extends Me {
    constructor(t) {
      super(), xe(this, t, ln, rn, ue, {}, tn);
    }
  }
  function cn(e) {
    ye(
      e,
      "svelte-rg7a0h",
      "div.svelte-rg7a0h{all:unset;position:fixed;left:0;top:0;z-index:2147483647;pointer-events:none;width:100vw;height:100vh}"
    );
  }
  function pt(e, t, n) {
    const o = e.slice();
    return (o[4] = t[n]), o;
  }
  function ht(e) {
    let t, n, o;
    var r = e[4].app;
    function l(i, f) {
      return { props: { id: i[4].id } };
    }
    return (
      r && (t = nt(r, l(e))),
      {
        c() {
          t && we(t.$$.fragment), (n = $t());
        },
        m(i, f) {
          t && se(t, i, f), B(i, n, f), (o = !0);
        },
        p(i, f) {
          if (f & 4 && r !== (r = i[4].app)) {
            if (t) {
              _t();
              const s = t;
              F(s.$$.fragment, 1, 0, () => {
                ce(s, 1);
              }),
                yt();
            }
            r
              ? ((t = nt(r, l(i))),
                we(t.$$.fragment),
                W(t.$$.fragment, 1),
                se(t, n.parentNode, n))
              : (t = null);
          } else if (r) {
            const s = {};
            f & 4 && (s.id = i[4].id), t.$set(s);
          }
        },
        i(i) {
          o || (t && W(t.$$.fragment, i), (o = !0));
        },
        o(i) {
          t && F(t.$$.fragment, i), (o = !1);
        },
        d(i) {
          i && E(n), t && ce(t, i);
        },
      }
    );
  }
  function fn(e) {
    let t,
      n,
      o,
      r,
      l = be(e[2]),
      i = [];
    for (let s = 0; s < l.length; s += 1) i[s] = ht(pt(e, l, s));
    const f = (s) =>
      F(i[s], 1, 1, () => {
        i[s] = null;
      });
    return (
      (o = new sn({})),
      {
        c() {
          t = q("div");
          for (let s = 0; s < i.length; s += 1) i[s].c();
          (n = U()),
            we(o.$$.fragment),
            c(t, "class", "svelte-rg7a0h"),
            S(t, "pointer-events", e[0] ? "all" : "none");
        },
        m(s, u) {
          B(s, t, u);
          for (let h = 0; h < i.length; h += 1) i[h] && i[h].m(t, null);
          m(t, n), se(o, t, null), e[3](t), (r = !0);
        },
        p(s, [u]) {
          if (u & 4) {
            l = be(s[2]);
            let h;
            for (h = 0; h < l.length; h += 1) {
              const p = pt(s, l, h);
              i[h]
                ? (i[h].p(p, u), W(i[h], 1))
                : ((i[h] = ht(p)), i[h].c(), W(i[h], 1), i[h].m(t, n));
            }
            for (_t(), h = l.length; h < i.length; h += 1) f(h);
            yt();
          }
          u & 1 && S(t, "pointer-events", s[0] ? "all" : "none");
        },
        i(s) {
          if (!r) {
            for (let u = 0; u < l.length; u += 1) W(i[u]);
            W(o.$$.fragment, s), (r = !0);
          }
        },
        o(s) {
          i = i.filter(Boolean);
          for (let u = 0; u < i.length; u += 1) F(i[u]);
          F(o.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && E(t), vt(i, s), ce(o), e[3](null);
        },
      }
    );
  }
  function un(e, t, n) {
    let o, r, l;
    Y(e, Re, (f) => n(0, (o = f))),
      Y(e, We, (f) => n(1, (r = f))),
      Y(e, fe, (f) => n(2, (l = f)));
    function i(f) {
      Pe[f ? "unshift" : "push"](() => {
        (r = f), We.set(r);
      });
    }
    return [o, r, l, i];
  }
  class an extends Me {
    constructor(t) {
      super(), xe(this, t, un, fn, ue, {}, cn);
    }
  }
  new an({ target: document.body });
});
