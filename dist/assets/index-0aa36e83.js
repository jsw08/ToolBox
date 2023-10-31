/// main.js
(() => {
  var kt = Object.defineProperty;
  var qt = (e, t, n) =>
    t in e
      ? kt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  var Be = (e, t, n) => (qt(e, typeof t != "symbol" ? t + "" : t, n), n);
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
  function xt(e, t) {
    for (const n in t) e[n] = t[n];
    return e;
  }
  function ht(e) {
    return e();
  }
  function Fe() {
    return Object.create(null);
  }
  function K(e) {
    e.forEach(ht);
  }
  function ve(e) {
    return typeof e == "function";
  }
  function ae(e, t) {
    return e != e
      ? t == t
      : e !== t || (e && typeof e == "object") || typeof e == "function";
  }
  function Mt(e) {
    return Object.keys(e).length === 0;
  }
  function Ct(e, ...t) {
    if (e == null) {
      for (const o of t) o(void 0);
      return P;
    }
    const n = e.subscribe(...t);
    return n.unsubscribe ? () => n.unsubscribe() : n;
  }
  function ne(e, t, n) {
    e.$$.on_destroy.push(Ct(t, n));
  }
  function Ge(e, t, n, o) {
    if (e) {
      const r = gt(e, t, n, o);
      return e[0](r);
    }
  }
  function gt(e, t, n, o) {
    return e[1] && o ? xt(n.ctx.slice(), e[1](o(t))) : n.ctx;
  }
  function Ke(e, t, n, o) {
    if (e[2] && o) {
      const r = e[2](o(n));
      if (t.dirty === void 0) return r;
      if (typeof r == "object") {
        const l = [],
          i = Math.max(t.dirty.length, r.length);
        for (let a = 0; a < i; a += 1) l[a] = t.dirty[a] | r[a];
        return l;
      }
      return t.dirty | r;
    }
    return t.dirty;
  }
  function Je(e, t, n, o, r, l) {
    if (r) {
      const i = gt(t, n, o, l);
      e.p(i, r);
    }
  }
  function Qe(e) {
    if (e.ctx.length > 32) {
      const t = [],
        n = e.ctx.length / 32;
      for (let o = 0; o < n; o++) t[o] = -1;
      return t;
    }
    return -1;
  }
  function ze(e, t, n) {
    return e.set(n), t;
  }
  function Et(e) {
    return e && ve(e.destroy) ? e.destroy : P;
  }
  function w(e, t) {
    e.appendChild(t);
  }
  function _e(e, t, n) {
    const o = $t(e);
    if (!o.getElementById(t)) {
      const r = C("style");
      (r.id = t), (r.textContent = n), At(o, r);
    }
  }
  function $t(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument;
  }
  function At(e, t) {
    return w(e.head || e, t), t.sheet;
  }
  function B(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function $(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function wt(e, t) {
    for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
  }
  function C(e) {
    return document.createElement(e);
  }
  function L(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e);
  }
  function ye(e) {
    return document.createTextNode(e);
  }
  function Y() {
    return ye(" ");
  }
  function Nt() {
    return ye("");
  }
  function A(e, t, n, o) {
    return e.addEventListener(t, n, o), () => e.removeEventListener(t, n, o);
  }
  function c(e, t, n) {
    n == null
      ? e.removeAttribute(t)
      : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function Bt(e) {
    return Array.from(e.childNodes);
  }
  function mt(e, t) {
    (t = "" + t), e.data !== t && (e.data = t);
  }
  function et(e, t) {
    e.value = t ?? "";
  }
  function j(e, t, n, o) {
    n == null
      ? e.style.removeProperty(t)
      : e.style.setProperty(t, n, o ? "important" : "");
  }
  let pe;
  function Lt() {
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
  function St(e, t) {
    getComputedStyle(e).position === "static" &&
      (e.style.position = "relative");
    const o = C("iframe");
    o.setAttribute(
      "style",
      "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"
    ),
      o.setAttribute("aria-hidden", "true"),
      (o.tabIndex = -1);
    const r = Lt();
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
      w(e, o),
      () => {
        (r || (l && o.contentWindow)) && l(), $(o);
      }
    );
  }
  function tt(e, t) {
    return new e(t);
  }
  let We;
  function le(e) {
    We = e;
  }
  const te = [],
    Pe = [];
  let oe = [];
  const nt = [],
    Ht = Promise.resolve();
  let De = !1;
  function Tt() {
    De || ((De = !0), Ht.then(bt));
  }
  function we(e) {
    oe.push(e);
  }
  const Le = new Set();
  let Q = 0;
  function bt() {
    if (Q !== 0) return;
    const e = We;
    do {
      try {
        for (; Q < te.length; ) {
          const t = te[Q];
          Q++, le(t), zt(t.$$);
        }
      } catch (t) {
        throw ((te.length = 0), (Q = 0), t);
      }
      for (le(null), te.length = 0, Q = 0; Pe.length; ) Pe.pop()();
      for (let t = 0; t < oe.length; t += 1) {
        const n = oe[t];
        Le.has(n) || (Le.add(n), n());
      }
      oe.length = 0;
    } while (te.length);
    for (; nt.length; ) nt.pop()();
    (De = !1), Le.clear(), le(e);
  }
  function zt(e) {
    if (e.fragment !== null) {
      e.update(), K(e.before_update);
      const t = e.dirty;
      (e.dirty = [-1]),
        e.fragment && e.fragment.p(e.ctx, t),
        e.after_update.forEach(we);
    }
  }
  function Pt(e) {
    const t = [],
      n = [];
    oe.forEach((o) => (e.indexOf(o) === -1 ? t.push(o) : n.push(o))),
      n.forEach((o) => o()),
      (oe = t);
  }
  const ge = new Set();
  let G;
  function vt() {
    G = { r: 0, c: [], p: G };
  }
  function _t() {
    G.r || K(G.c), (G = G.p);
  }
  function O(e, t) {
    e && e.i && (ge.delete(e), e.i(t));
  }
  function U(e, t, n, o) {
    if (e && e.o) {
      if (ge.has(e)) return;
      ge.add(e),
        G.c.push(() => {
          ge.delete(e), o && (n && e.d(1), o());
        }),
        e.o(t);
    } else o && o();
  }
  function me(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
  }
  function be(e) {
    e && e.c();
  }
  function se(e, t, n) {
    const { fragment: o, after_update: r } = e.$$;
    o && o.m(t, n),
      we(() => {
        const l = e.$$.on_mount.map(ht).filter(ve);
        e.$$.on_destroy ? e.$$.on_destroy.push(...l) : K(l),
          (e.$$.on_mount = []);
      }),
      r.forEach(we);
  }
  function ce(e, t) {
    const n = e.$$;
    n.fragment !== null &&
      (Pt(n.after_update),
      K(n.on_destroy),
      n.fragment && n.fragment.d(t),
      (n.on_destroy = n.fragment = null),
      (n.ctx = []));
  }
  function Dt(e, t) {
    e.$$.dirty[0] === -1 && (te.push(e), Tt(), e.$$.dirty.fill(0)),
      (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
  }
  function ke(e, t, n, o, r, l, i = null, a = [-1]) {
    const s = We;
    le(e);
    const u = (e.$$ = {
      fragment: null,
      ctx: [],
      props: l,
      update: P,
      not_equal: r,
      bound: Fe(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (s ? s.$$.context : [])),
      callbacks: Fe(),
      dirty: a,
      skip_bound: !1,
      root: t.target || s.$$.root,
    });
    i && i(u.root);
    let p = !1;
    if (
      ((u.ctx = n
        ? n(e, t.props || {}, (d, y, ...m) => {
            const b = m.length ? m[0] : y;
            return (
              u.ctx &&
                r(u.ctx[d], (u.ctx[d] = b)) &&
                (!u.skip_bound && u.bound[d] && u.bound[d](b), p && Dt(e, d)),
              y
            );
          })
        : []),
      u.update(),
      (p = !0),
      K(u.before_update),
      (u.fragment = o ? o(u.ctx) : !1),
      t.target)
    ) {
      if (t.hydrate) {
        const d = Bt(t.target);
        u.fragment && u.fragment.l(d), d.forEach($);
      } else u.fragment && u.fragment.c();
      t.intro && O(e.$$.fragment), se(e, t.target, t.anchor), bt();
    }
    le(s);
  }
  class qe {
    constructor() {
      Be(this, "$$");
      Be(this, "$$set");
    }
    $destroy() {
      ce(this, 1), (this.$destroy = P);
    }
    $on(t, n) {
      if (!ve(n)) return P;
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
        !Mt(t) &&
        ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
    }
  }
  const jt = "4";
  typeof window < "u" &&
    (window.__svelte || (window.__svelte = { v: new Set() })).v.add(jt);
  var Se = { dragStart: !0 },
    ot = (e, t, n) => Math.min(Math.max(e, t), n),
    He = (e) => typeof e == "string",
    Ot = ([e, t], n, o) => {
      const r = (l, i) => (i === 0 ? 0 : Math.ceil(l / i) * i);
      return [r(n, e), r(o, t)];
    },
    rt = (e, t) => e.some((n) => t.some((o) => n.contains(o)));
  function Te(e, t) {
    if (e === void 0) return;
    if (je(e)) return e.getBoundingClientRect();
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
    je = (e) => e instanceof HTMLElement,
    Wt = (e, t = {}) => {
      let n,
        o,
        {
          bounds: r,
          axis: l = "both",
          gpuAcceleration: i = !0,
          legacyTranslate: a = !0,
          transform: s,
          applyUserSelectHack: u = !0,
          disabled: p = !1,
          ignoreMultitouch: d = !1,
          recomputeBounds: y = Se,
          grid: m,
          position: b,
          cancel: S,
          handle: x,
          defaultClass: D = "neodrag",
          defaultClassDragging: V = "neodrag-dragging",
          defaultClassDragged: H = "neodrag-dragged",
          defaultPosition: E = { x: 0, y: 0 },
          onDragStart: J,
          onDrag: I,
          onDragEnd: g,
        } = t,
        Z = !1,
        q = 0,
        f = 0,
        _ = 0,
        re = 0,
        xe = 0,
        Me = 0,
        { x: fe, y: de } = b
          ? {
              x: (b == null ? void 0 : b.x) ?? 0,
              y: (b == null ? void 0 : b.y) ?? 0,
            }
          : E;
      $e(fe, de);
      let W,
        F,
        ie,
        Ce,
        Ve,
        Ie = "",
        yt = !!b;
      y = { ...Se, ...y };
      const Ee = document.body.style,
        X = e.classList;
      function $e(h = q, k = f) {
        if (!s) {
          if (a) {
            let N = `${+h}px, ${+k}px`;
            return he(
              e,
              "transform",
              i ? `translate3d(${N}, 0)` : `translate(${N})`
            );
          }
          return he(e, "translate", `${+h}px ${+k}px ${i ? "1px" : ""}`);
        }
        const M = s({ offsetX: h, offsetY: k, rootNode: e });
        He(M) && he(e, "transform", M);
      }
      const Ae = (h, k) => {
          const M = { offsetX: q, offsetY: f, rootNode: e, currentNode: Ve };
          e.dispatchEvent(new CustomEvent(h, { detail: M })), k == null || k(M);
        },
        Ne = addEventListener;
      Ne("pointerdown", Xe, !1),
        Ne("pointerup", Ye, !1),
        Ne("pointermove", Ue, !1),
        he(e, "touch-action", "none");
      const Ze = () => {
        let h = e.offsetWidth / F.width;
        return isNaN(h) && (h = 1), h;
      };
      function Xe(h) {
        if (p || h.button === 2 || (d && !h.isPrimary)) return;
        if ((y.dragStart && (W = Te(r, e)), He(x) && He(S) && x === S))
          throw new Error(
            "`handle` selector can't be same as `cancel` selector"
          );
        if (
          (X.add(D),
          (ie = (function (v, z) {
            if (!v) return [z];
            if (je(v)) return [v];
            if (Array.isArray(v)) return v;
            const R = z.querySelectorAll(v);
            if (R === null)
              throw new Error(
                "Selector passed for `handle` option should be child of the element on which the action is applied"
              );
            return Array.from(R.values());
          })(x, e)),
          (Ce = (function (v, z) {
            if (!v) return [];
            if (je(v)) return [v];
            if (Array.isArray(v)) return v;
            const R = z.querySelectorAll(v);
            if (R === null)
              throw new Error(
                "Selector passed for `cancel` option should be child of the element on which the action is applied"
              );
            return Array.from(R.values());
          })(S, e)),
          (n = /(both|x)/.test(l)),
          (o = /(both|y)/.test(l)),
          rt(Ce, ie))
        )
          throw new Error(
            "Element being dragged can't be a child of the element on which `cancel` is applied"
          );
        const k = h.composedPath()[0];
        if (
          !ie.some((v) => {
            var z;
            return (
              v.contains(k) ||
              ((z = v.shadowRoot) == null ? void 0 : z.contains(k))
            );
          }) ||
          rt(Ce, [k])
        )
          return;
        (Ve = ie.length === 1 ? e : ie.find((v) => v.contains(k))),
          (Z = !0),
          (F = e.getBoundingClientRect()),
          u && ((Ie = Ee.userSelect), (Ee.userSelect = "none")),
          Ae("neodrag:start", J);
        const { clientX: M, clientY: N } = h,
          T = Ze();
        n && (_ = M - fe / T),
          o && (re = N - de / T),
          W && ((xe = M - F.left), (Me = N - F.top));
      }
      function Ye() {
        Z &&
          (y.dragEnd && (W = Te(r, e)),
          X.remove(V),
          X.add(H),
          u && (Ee.userSelect = Ie),
          Ae("neodrag:end", g),
          n && (_ = q),
          o && (re = f),
          (Z = !1));
      }
      function Ue(h) {
        if (!Z) return;
        y.drag && (W = Te(r, e)),
          X.add(V),
          h.preventDefault(),
          (F = e.getBoundingClientRect());
        let k = h.clientX,
          M = h.clientY;
        const N = Ze();
        if (W) {
          const T = {
            left: W.left + xe,
            top: W.top + Me,
            right: W.right + xe - F.width,
            bottom: W.bottom + Me - F.height,
          };
          (k = ot(k, T.left, T.right)), (M = ot(M, T.top, T.bottom));
        }
        if (Array.isArray(m)) {
          let [T, v] = m;
          if (isNaN(+T) || T < 0)
            throw new Error(
              "1st argument of `grid` must be a valid positive number"
            );
          if (isNaN(+v) || v < 0)
            throw new Error(
              "2nd argument of `grid` must be a valid positive number"
            );
          let z = k - _,
            R = M - re;
          ([z, R] = Ot([T / N, v / N], z, R)), (k = _ + z), (M = re + R);
        }
        n && (q = Math.round((k - _) * N)),
          o && (f = Math.round((M - re) * N)),
          (fe = q),
          (de = f),
          Ae("neodrag", I),
          $e();
      }
      return {
        destroy: () => {
          const h = removeEventListener;
          h("pointerdown", Xe, !1),
            h("pointerup", Ye, !1),
            h("pointermove", Ue, !1);
        },
        update: (h) => {
          var M, N;
          (l = h.axis || "both"),
            (p = h.disabled ?? !1),
            (d = h.ignoreMultitouch ?? !1),
            (x = h.handle),
            (r = h.bounds),
            (y = h.recomputeBounds ?? Se),
            (S = h.cancel),
            (u = h.applyUserSelectHack ?? !0),
            (m = h.grid),
            (i = h.gpuAcceleration ?? !0),
            (a = h.legacyTranslate ?? !0),
            (s = h.transform);
          const k = X.contains(H);
          X.remove(D, H),
            (D = h.defaultClass ?? "neodrag"),
            (V = h.defaultClassDragging ?? "neodrag-dragging"),
            (H = h.defaultClassDragged ?? "neodrag-dragged"),
            X.add(D),
            k && X.add(H),
            yt &&
              ((fe = q = ((M = h.position) == null ? void 0 : M.x) ?? q),
              (de = f = ((N = h.position) == null ? void 0 : N.y) ?? f),
              $e());
        },
      };
    };
  const ee = [];
  function Re(e, t = P) {
    let n;
    const o = new Set();
    function r(a) {
      if (ae(e, a) && ((e = a), n)) {
        const s = !ee.length;
        for (const u of o) u[1](), ee.push(u, e);
        if (s) {
          for (let u = 0; u < ee.length; u += 2) ee[u][0](ee[u + 1]);
          ee.length = 0;
        }
      }
    }
    function l(a) {
      r(a(e));
    }
    function i(a, s = P) {
      const u = [a, s];
      return (
        o.add(u),
        o.size === 1 && (n = t(r, l) || P),
        a(e),
        () => {
          o.delete(u), o.size === 0 && n && (n(), (n = null));
        }
      );
    }
    return { set: r, update: l, subscribe: i };
  }
  const ue = Re([]),
    Oe = Re(),
    it = Re();
  function Rt(e) {
    _e(
      e,
      "svelte-ic2n8u",
      ".svelte-ic2n8u.svelte-ic2n8u:not(path, g){all:unset}.window.svelte-ic2n8u.svelte-ic2n8u{position:absolute;display:flex;flex-direction:column;overflow:auto;resize:both;border:1px solid black;background-color:white;pointer-events:all;min-width:54px;min-height:54px}.titlebar.svelte-ic2n8u.svelte-ic2n8u{height:24px;flex:none;display:flex;flex-direction:row;justify-content:space-between;padding:2px;background-color:#f1f5f9}.titlebarTitle.svelte-ic2n8u.svelte-ic2n8u{flex-grow:1;place-items:center;display:flex;flex-direction:row;overflow:hidden}.titlebarTitle.svelte-ic2n8u p.svelte-ic2n8u{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.titlebarButtons.svelte-ic2n8u.svelte-ic2n8u{display:flex;flex:none;flex-direction:row;gap:2px;cursor:pointer;margin-top:-4px;padding-top:3px}.titlebarButtons.svelte-ic2n8u button.svelte-ic2n8u{width:24px;height:24px}.titlebarButtons.svelte-ic2n8u svg.svelte-ic2n8u{shape-rendering:crispEdges}#closeBtn.svelte-ic2n8u:hover path.svelte-ic2n8u{fill:#fca5a5}.windowContent.svelte-ic2n8u.svelte-ic2n8u{flex-grow:1;padding:2px}"
    );
  }
  const Vt = (e) => ({}),
    lt = (e) => ({});
  function It(e) {
    let t, n, o, r;
    return {
      c() {
        (t = L("svg")),
          (n = L("g")),
          (o = L("path")),
          (r = L("path")),
          c(
            o,
            "d",
            "M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
          ),
          c(o, "class", "svelte-ic2n8u"),
          c(r, "d", "M12 8h4v4m0-4l-5 5"),
          c(r, "class", "svelte-ic2n8u"),
          c(n, "fill", "white"),
          c(n, "stroke", "currentColor"),
          c(n, "stroke-linecap", "round"),
          c(n, "stroke-linejoin", "round"),
          c(n, "stroke-width", "2"),
          c(n, "class", "svelte-ic2n8u"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "width", "24"),
          c(t, "height", "24"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-ic2n8u");
      },
      m(l, i) {
        B(l, t, i), w(t, n), w(n, o), w(n, r);
      },
      d(l) {
        l && $(t);
      },
    };
  }
  function Zt(e) {
    let t, n, o, r;
    return {
      c() {
        (t = L("svg")),
          (n = L("g")),
          (o = L("path")),
          (r = L("path")),
          c(
            o,
            "d",
            "M3 17a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm1-5V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
          ),
          c(o, "class", "svelte-ic2n8u"),
          c(r, "d", "M15 13h-4V9m0 4l5-5"),
          c(r, "class", "svelte-ic2n8u"),
          c(n, "fill", "white"),
          c(n, "stroke", "currentColor"),
          c(n, "stroke-linecap", "round"),
          c(n, "stroke-linejoin", "round"),
          c(n, "stroke-width", "2"),
          c(n, "class", "svelte-ic2n8u"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "width", "24"),
          c(t, "height", "24"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-ic2n8u");
      },
      m(l, i) {
        B(l, t, i), w(t, n), w(n, o), w(n, r);
      },
      d(l) {
        l && $(t);
      },
    };
  }
  function Xt(e) {
    let t, n, o, r, l, i, a, s, u, p, d, y, m, b, S, x, D, V;
    const H = e[12].icon,
      E = Ge(H, e, e[11], lt);
    function J(f, _) {
      return f[4] ? Zt : It;
    }
    let I = J(e),
      g = I(e);
    const Z = e[12].default,
      q = Ge(Z, e, e[11], null);
    return {
      c() {
        (t = C("div")),
          (n = C("div")),
          (o = C("div")),
          E && E.c(),
          (r = Y()),
          (l = C("p")),
          (i = ye(e[0])),
          (a = Y()),
          (s = C("div")),
          (u = C("button")),
          g.c(),
          (p = Y()),
          (d = C("button")),
          (d.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="svelte-ic2n8u"><path fill="white" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5zm6 4l6 6m0-6l-6 6" class="svelte-ic2n8u"></path></svg>'),
          (y = Y()),
          (m = C("div")),
          q && q.c(),
          c(l, "title", e[0]),
          c(l, "class", "svelte-ic2n8u"),
          c(o, "class", "titlebarTitle svelte-ic2n8u"),
          c(u, "class", "svelte-ic2n8u"),
          c(d, "id", "closeBtn"),
          c(d, "class", "svelte-ic2n8u"),
          c(s, "class", "titlebarButtons svelte-ic2n8u"),
          c(n, "class", "titlebar svelte-ic2n8u"),
          j(n, "cursor", e[6] ? "grabbing" : e[4] ? "not-allowed" : "grab"),
          c(m, "class", "windowContent svelte-ic2n8u"),
          c(t, "class", "window svelte-ic2n8u"),
          we(() => e[15].call(t)),
          j(t, "border-radius", e[4] ? "0px" : "8px"),
          j(t, "width", e[4] ? "100vw" : `${e[3].w}px`),
          j(t, "height", e[4] ? "100vh" : `${e[3].h}px`),
          j(t, "z-index", e[6] ? "3" : e[7] === e[1] ? "2" : "initial");
      },
      m(f, _) {
        B(f, t, _),
          w(t, n),
          w(n, o),
          E && E.m(o, null),
          w(o, r),
          w(o, l),
          w(l, i),
          w(n, a),
          w(n, s),
          w(s, u),
          g.m(u, null),
          w(s, p),
          w(s, d),
          w(t, y),
          w(t, m),
          q && q.m(m, null),
          (b = St(t, e[15].bind(t))),
          (x = !0),
          D ||
            ((V = [
              A(u, "click", e[10]),
              A(d, "click", e[9]),
              A(n, "mousemove", e[13]),
              A(t, "pointerenter", e[14]),
              Et(
                (S = Wt.call(null, t, {
                  position: e[2],
                  handle: ".titlebar",
                  disabled: e[4],
                  bounds: e[8],
                }))
              ),
              A(t, "neodrag", e[16]),
              A(t, "neodrag:start", e[17]),
              A(t, "neodrag:end", e[18]),
            ]),
            (D = !0));
      },
      p(f, [_]) {
        E &&
          E.p &&
          (!x || _ & 2048) &&
          Je(E, H, f, f[11], x ? Ke(H, f[11], _, Vt) : Qe(f[11]), lt),
          (!x || _ & 1) && mt(i, f[0]),
          (!x || _ & 1) && c(l, "title", f[0]),
          I !== (I = J(f)) && (g.d(1), (g = I(f)), g && (g.c(), g.m(u, null))),
          _ & 80 &&
            j(n, "cursor", f[6] ? "grabbing" : f[4] ? "not-allowed" : "grab"),
          q &&
            q.p &&
            (!x || _ & 2048) &&
            Je(q, Z, f, f[11], x ? Ke(Z, f[11], _, null) : Qe(f[11]), null),
          S &&
            ve(S.update) &&
            _ & 276 &&
            S.update.call(null, {
              position: f[2],
              handle: ".titlebar",
              disabled: f[4],
              bounds: f[8],
            }),
          _ & 16 && j(t, "border-radius", f[4] ? "0px" : "8px"),
          _ & 24 && j(t, "width", f[4] ? "100vw" : `${f[3].w}px`),
          _ & 24 && j(t, "height", f[4] ? "100vh" : `${f[3].h}px`),
          _ & 194 &&
            j(t, "z-index", f[6] ? "3" : f[7] === f[1] ? "2" : "initial");
      },
      i(f) {
        x || (O(E, f), O(q, f), (x = !0));
      },
      o(f) {
        U(E, f), U(q, f), (x = !1);
      },
      d(f) {
        f && $(t), E && E.d(f), g.d(), q && q.d(f), b(), (D = !1), K(V);
      },
    };
  }
  function Yt(e, t, n) {
    let o, r, l;
    ne(e, ue, (g) => n(19, (o = g))),
      ne(e, it, (g) => n(7, (r = g))),
      ne(e, Oe, (g) => n(8, (l = g)));
    let { $$slots: i = {}, $$scope: a } = t,
      { title: s = "Application" } = t,
      { id: u } = t;
    if (u === void 0) throw new TypeError("Id property must be set.");
    let p = { x: window.innerWidth / 6, y: window.innerHeight / 6 },
      d = { w: (window.innerWidth / 3) * 2, h: (window.innerHeight / 3) * 2 },
      y = !1,
      m,
      b = !1;
    const S = () => {
        ze(ue, (o = o.filter((g) => g.id != u)), o);
      },
      x = () => {
        y
          ? (n(4, (y = !1)),
            n(2, (p = { x: window.innerWidth / 6, y: window.innerHeight / 6 })),
            n(
              3,
              (d = {
                w: (window.innerWidth / 3) * 2,
                h: (window.innerHeight / 3) * 2,
              })
            ))
          : (n(2, (p = { x: 0, y: 0 })), n(4, (y = !0)));
      },
      D = (g) => n(5, (m = g)),
      V = () => ze(it, (r = u), r);
    function H() {
      (d.w = this.clientWidth), (d.h = this.clientHeight), n(3, d);
    }
    const E = (g) => n(2, (p = { x: g.offsetX, y: g.offsetY })),
      J = (g) => n(6, (b = !0)),
      I = (g) => n(6, (b = !1));
    return (
      (e.$$set = (g) => {
        "title" in g && n(0, (s = g.title)),
          "id" in g && n(1, (u = g.id)),
          "$$scope" in g && n(11, (a = g.$$scope));
      }),
      [s, u, p, d, y, m, b, r, l, S, x, a, i, D, V, H, E, J, I]
    );
  }
  class Ut extends qe {
    constructor(t) {
      super(), ke(this, t, Yt, Xt, ae, { title: 0, id: 1 }, Rt);
    }
  }
  function Ft(e) {
    _e(
      e,
      "svelte-v14p05",
      "textarea.svelte-v14p05{all:unset;width:100%;height:100%;white-space:pre}"
    );
  }
  function Gt(e) {
    let t, n, o;
    return {
      c() {
        (t = C("textarea")),
          c(t, "name", "Notepad"),
          c(t, "class", "svelte-v14p05");
      },
      m(r, l) {
        B(r, t, l),
          et(t, e[1]),
          n || ((o = [A(t, "keydown", e[2]), A(t, "input", e[3])]), (n = !0));
      },
      p(r, l) {
        l & 2 && et(t, r[1]);
      },
      d(r) {
        r && $(t), (n = !1), K(o);
      },
    };
  }
  function Kt(e) {
    let t, n;
    return (
      (t = new Ut({
        props: {
          id: e[0],
          title: "Notepad",
          $$slots: { default: [Gt] },
          $$scope: { ctx: e },
        },
      })),
      {
        c() {
          be(t.$$.fragment);
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
          n || (O(t.$$.fragment, o), (n = !0));
        },
        o(o) {
          U(t.$$.fragment, o), (n = !1);
        },
        d(o) {
          ce(t, o);
        },
      }
    );
  }
  function Jt(e, t, n) {
    let { id: o } = t,
      r = "Type away in this textarea!";
    const l = (a) => {
      a.key === "Tab" && (a.preventDefault(), n(1, (r += "	")));
    };
    function i() {
      (r = this.value), n(1, r);
    }
    return (
      (e.$$set = (a) => {
        "id" in a && n(0, (o = a.id));
      }),
      [o, r, l, i]
    );
  }
  class Qt extends qe {
    constructor(t) {
      super(), ke(this, t, Jt, Kt, ae, { id: 0 }, Ft);
    }
  }
  const st = {
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
          { type: "a", title: "Notepad", component: Qt },
        ],
      },
    ],
  };
  function en(e) {
    _e(
      e,
      "svelte-b8wdkq",
      ".svelte-b8wdkq.svelte-b8wdkq.svelte-b8wdkq:not(path){all:unset;pointer-events:all}#toggleBtn.svelte-b8wdkq.svelte-b8wdkq.svelte-b8wdkq{position:fixed;right:0;bottom:0;height:24px;aspect-ratio:1/1;color:white;background-color:black;text-align:center;user-select:none;cursor:pointer}.appMenu.svelte-b8wdkq.svelte-b8wdkq.svelte-b8wdkq{position:fixed;bottom:26px;right:0px;background-color:white;width:120px;display:flex;flex-direction:column}.appMenu.svelte-b8wdkq>button.svelte-b8wdkq.svelte-b8wdkq{border:1px solid black;height:40px;display:flex;flex-direction:row;justify-content:center;place-items:center;gap:4px;padding:0px 4px}.appMenu.svelte-b8wdkq>button.svelte-b8wdkq>p.svelte-b8wdkq{white-space:normal;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-grow:1}.appMenu.svelte-b8wdkq>button.svelte-b8wdkq>svg.svelte-b8wdkq{width:1.2rem;height:1.2rem;flex:none}"
    );
  }
  function ct(e, t, n) {
    const o = e.slice();
    return (o[8] = t[n]), o;
  }
  function ut(e) {
    let t,
      n,
      o = me(e[0][e[1]].items),
      r = [];
    for (let i = 0; i < o.length; i += 1) r[i] = at(ct(e, o, i));
    let l = e[1] > 0 && ft(e);
    return {
      c() {
        t = C("div");
        for (let i = 0; i < r.length; i += 1) r[i].c();
        (n = Y()), l && l.c(), c(t, "class", "appMenu svelte-b8wdkq");
      },
      m(i, a) {
        B(i, t, a);
        for (let s = 0; s < r.length; s += 1) r[s] && r[s].m(t, null);
        w(t, n), l && l.m(t, null);
      },
      p(i, a) {
        if (a & 19) {
          o = me(i[0][i[1]].items);
          let s;
          for (s = 0; s < o.length; s += 1) {
            const u = ct(i, o, s);
            r[s] ? r[s].p(u, a) : ((r[s] = at(u)), r[s].c(), r[s].m(t, n));
          }
          for (; s < r.length; s += 1) r[s].d(1);
          r.length = o.length;
        }
        i[1] > 0
          ? l
            ? l.p(i, a)
            : ((l = ft(i)), l.c(), l.m(t, null))
          : l && (l.d(1), (l = null));
      },
      d(i) {
        i && $(t), wt(r, i), l && l.d();
      },
    };
  }
  function tn(e) {
    let t, n;
    return {
      c() {
        (t = L("svg")),
          (n = L("path")),
          c(n, "fill", "currentColor"),
          c(
            n,
            "d",
            "M7.1 11.35q.35-.7.725-1.35t.825-1.3l-1.4-.275l-2.1 2.1l1.95.825Zm12.05-6.875q-1.75.05-3.737 1.025T11.8 8.1q-1.05 1.05-1.875 2.25T8.7 12.6l2.85 2.825q1.05-.4 2.25-1.225t2.25-1.875q1.625-1.625 2.6-3.6T19.675 5q0-.1-.038-.2t-.112-.175q-.075-.075-.175-.112t-.2-.038Zm-5.5 6q-.575-.575-.575-1.412t.575-1.413q.575-.575 1.425-.575t1.425.575q.575.575.575 1.413t-.575 1.412q-.575.575-1.425.575t-1.425-.575Zm-.85 6.55L13.625 19l2.1-2.1l-.275-1.4q-.65.45-1.3.813t-1.35.712Zm8.775-13.35q.2 2.75-.9 5.363T17.2 14.025l.5 2.475q.1.5-.05.975t-.5.825L14 21.45q-.375.375-.9.288t-.725-.588l-1.525-3.575L6.575 13.3L3 11.775q-.5-.2-.6-.725t.275-.9L5.825 7q.35-.35.837-.5t.988-.05l2.475.5q2.375-2.375 4.988-3.475t5.362-.9q.2.025.4.113t.35.237q.15.15.238.35t.112.4Zm-17.65 12.3q.875-.875 2.138-.887t2.137.862q.875.875.863 2.138t-.888 2.137q-.625.625-2.087 1.075t-4.038.8q.35-2.575.8-4.038t1.075-2.087Zm1.425 1.4q-.25.25-.5.913t-.35 1.337q.675-.1 1.338-.338t.912-.487q.3-.3.325-.725T6.8 17.35q-.3-.3-.725-.288t-.725.313Z"
          ),
          c(n, "class", "svelte-b8wdkq"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-b8wdkq");
      },
      m(o, r) {
        B(o, t, r), w(t, n);
      },
      d(o) {
        o && $(t);
      },
    };
  }
  function nn(e) {
    let t, n;
    return {
      c() {
        (t = L("svg")),
          (n = L("path")),
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
          c(n, "class", "svelte-b8wdkq"),
          c(t, "xmlns", "http://www.w3.org/2000/svg"),
          c(t, "viewBox", "0 0 24 24"),
          c(t, "class", "svelte-b8wdkq");
      },
      m(o, r) {
        B(o, t, r), w(t, n);
      },
      d(o) {
        o && $(t);
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
      a,
      s;
    function u(m, b) {
      return m[8].type === "d" ? nn : tn;
    }
    let p = u(e),
      d = p(e);
    function y(...m) {
      return e[5](e[8], ...m);
    }
    return {
      c() {
        (t = C("button")),
          d.c(),
          (n = Y()),
          (o = C("p")),
          (l = ye(r)),
          c(o, "title", (i = e[8].title)),
          c(o, "class", "svelte-b8wdkq"),
          c(t, "class", "svelte-b8wdkq");
      },
      m(m, b) {
        B(m, t, b),
          d.m(t, null),
          w(t, n),
          w(t, o),
          w(o, l),
          a || ((s = A(t, "click", y)), (a = !0));
      },
      p(m, b) {
        (e = m),
          p !== (p = u(e)) && (d.d(1), (d = p(e)), d && (d.c(), d.m(t, n))),
          b & 3 && r !== (r = e[8].title + "") && mt(l, r),
          b & 3 && i !== (i = e[8].title) && c(o, "title", i);
      },
      d(m) {
        m && $(t), d.d(), (a = !1), s();
      },
    };
  }
  function ft(e) {
    let t, n, o;
    return {
      c() {
        (t = C("button")),
          (t.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-b8wdkq"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.803 20h1.99c.433 0 .649 0 .83-.074c.161-.066.302-.172.41-.308c.12-.155.18-.362.299-.778l1.086-3.8c.198-.693.296-1.04.218-1.313a1 1 0 0 0-.435-.577c-.228-.141-.561-.15-1.2-.15m-3.198 7H6.197m11.606 0c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874C21 18.48 21 17.92 21 16.8V13M6.197 20H5.12c-.72 0-1.08 0-1.322-.15a1 1 0 0 1-.436-.577a.71.71 0 0 1-.025-.16m2.86.887c-1.118 0-1.678 0-2.105-.218a1.999 1.999 0 0 1-.754-.67M21 13H5l-1.417 4.96l-.002.007c-.16.56-.255.893-.243 1.145M21 13V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6 18.92 6 17.8 6H12M3.338 19.112a1.998 1.998 0 0 1-.12-.204C3 18.48 3 17.92 3 16.8V6m0 0h9M3 6a2 2 0 0 1 2-2h3.675c.489 0 .734 0 .964.055c.204.05.399.13.578.24c.202.124.375.297.72.643L12 6" class="svelte-b8wdkq"></path></svg> <p class="svelte-b8wdkq">Back</p>'),
          c(t, "class", "svelte-b8wdkq");
      },
      m(r, l) {
        B(r, t, l), n || ((o = A(t, "click", e[3])), (n = !0));
      },
      p: P,
      d(r) {
        r && $(t), (n = !1), o();
      },
    };
  }
  function on(e) {
    let t,
      n,
      o,
      r,
      l = e[2] && ut(e);
    return {
      c() {
        l && l.c(),
          (t = Y()),
          (n = C("button")),
          (n.textContent = "+"),
          c(n, "id", "toggleBtn"),
          c(n, "class", "svelte-b8wdkq");
      },
      m(i, a) {
        l && l.m(i, a),
          B(i, t, a),
          B(i, n, a),
          o || ((r = A(n, "click", e[6])), (o = !0));
      },
      p(i, [a]) {
        i[2]
          ? l
            ? l.p(i, a)
            : ((l = ut(i)), l.c(), l.m(t.parentNode, t))
          : l && (l.d(1), (l = null));
      },
      i: P,
      o: P,
      d(i) {
        i && ($(t), $(n)), l && l.d(i), (o = !1), r();
      },
    };
  }
  function rn(e, t, n) {
    let o;
    ne(e, ue, (d) => n(7, (o = d)));
    let r = [st],
      l = 0,
      i = !1;
    const a = () => {
        r.length === 1 || r.pop(), n(1, (l = r.length - 1));
      },
      s = (d) => {
        d.type === "a"
          ? (ze(
              ue,
              (o = [...o, { app: d.component, id: performance.now() }]),
              o
            ),
            n(0, (r = [st])),
            n(1, (l = 0)),
            n(2, (i = !1)))
          : (r.push(d), n(1, (l = r.length - 1)));
      };
    return [r, l, i, a, s, (d, y) => s(d), (d) => n(2, (i = !i))];
  }
  class ln extends qe {
    constructor(t) {
      super(), ke(this, t, rn, on, ae, {}, en);
    }
  }
  function sn(e) {
    _e(
      e,
      "svelte-eqxmmw",
      "div.svelte-eqxmmw{all:unset;position:fixed;left:0;top:0;z-index:1000;pointer-events:none;width:100vw;height:100vh}"
    );
  }
  function dt(e, t, n) {
    const o = e.slice();
    return (o[4] = t[n]), o;
  }
  function pt(e) {
    let t, n, o;
    var r = e[4].app;
    function l(i, a) {
      return { props: { id: i[4].id } };
    }
    return (
      r && (t = tt(r, l(e))),
      {
        c() {
          t && be(t.$$.fragment), (n = Nt());
        },
        m(i, a) {
          t && se(t, i, a), B(i, n, a), (o = !0);
        },
        p(i, a) {
          if (a & 2 && r !== (r = i[4].app)) {
            if (t) {
              vt();
              const s = t;
              U(s.$$.fragment, 1, 0, () => {
                ce(s, 1);
              }),
                _t();
            }
            r
              ? ((t = tt(r, l(i))),
                be(t.$$.fragment),
                O(t.$$.fragment, 1),
                se(t, n.parentNode, n))
              : (t = null);
          } else if (r) {
            const s = {};
            a & 2 && (s.id = i[4].id), t.$set(s);
          }
        },
        i(i) {
          o || (t && O(t.$$.fragment, i), (o = !0));
        },
        o(i) {
          t && U(t.$$.fragment, i), (o = !1);
        },
        d(i) {
          i && $(n), t && ce(t, i);
        },
      }
    );
  }
  function cn(e) {
    let t,
      n,
      o,
      r,
      l = me(e[1]),
      i = [];
    for (let s = 0; s < l.length; s += 1) i[s] = pt(dt(e, l, s));
    const a = (s) =>
      U(i[s], 1, 1, () => {
        i[s] = null;
      });
    return (
      (o = new ln({})),
      {
        c() {
          t = C("div");
          for (let s = 0; s < i.length; s += 1) i[s].c();
          (n = Y()), be(o.$$.fragment), c(t, "class", "svelte-eqxmmw");
        },
        m(s, u) {
          B(s, t, u);
          for (let p = 0; p < i.length; p += 1) i[p] && i[p].m(t, null);
          w(t, n), se(o, t, null), e[2](t), (r = !0);
        },
        p(s, [u]) {
          if (u & 2) {
            l = me(s[1]);
            let p;
            for (p = 0; p < l.length; p += 1) {
              const d = dt(s, l, p);
              i[p]
                ? (i[p].p(d, u), O(i[p], 1))
                : ((i[p] = pt(d)), i[p].c(), O(i[p], 1), i[p].m(t, n));
            }
            for (vt(), p = l.length; p < i.length; p += 1) a(p);
            _t();
          }
        },
        i(s) {
          if (!r) {
            for (let u = 0; u < l.length; u += 1) O(i[u]);
            O(o.$$.fragment, s), (r = !0);
          }
        },
        o(s) {
          i = i.filter(Boolean);
          for (let u = 0; u < i.length; u += 1) U(i[u]);
          U(o.$$.fragment, s), (r = !1);
        },
        d(s) {
          s && $(t), wt(i, s), ce(o), e[2](null);
        },
      }
    );
  }
  function un(e, t, n) {
    let o, r;
    ne(e, Oe, (i) => n(0, (o = i))), ne(e, ue, (i) => n(1, (r = i)));
    function l(i) {
      Pe[i ? "unshift" : "push"](() => {
        (o = i), Oe.set(o);
      });
    }
    return [o, r, l];
  }
  class an extends qe {
    constructor(t) {
      super(), ke(this, t, un, cn, ae, {}, sn);
    }
  }
  new an({ target: document.body });
})();
