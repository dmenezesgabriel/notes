import { r as F1, a as I1, b as qd } from './iframe-BMk1oW9O.js';
import './preload-helper-C1FmrZbK.js';
var h0 = { exports: {} },
  ts = {},
  p0 = { exports: {} },
  m0 = {};
(function (x) {
  /**
   * @license React
   * scheduler.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function () {
    function _e() {
      if (((Ru = !1), gn)) {
        var E = x.unstable_now();
        re = E;
        var _ = !0;
        try {
          e: {
            ((Gn = !1), Xn && ((Xn = !1), Wt(H), (H = -1)), (da = !0));
            var q = se;
            try {
              t: {
                for (zl(E), je = Me(Nt); je !== null && !(je.expirationTime > E && ra()); ) {
                  var le = je.callback;
                  if (typeof le == 'function') {
                    ((je.callback = null), (se = je.priorityLevel));
                    var me = le(je.expirationTime <= E);
                    if (((E = x.unstable_now()), typeof me == 'function')) {
                      ((je.callback = me), zl(E), (_ = !0));
                      break t;
                    }
                    (je === Me(Nt) && $t(Nt), zl(E));
                  } else $t(Nt);
                  je = Me(Nt);
                }
                if (je !== null) _ = !0;
                else {
                  var pa = Me(Kt);
                  (pa !== null && Du(z, pa.startTime - E), (_ = !1));
                }
              }
              break e;
            } finally {
              ((je = null), (se = q), (da = !1));
            }
            _ = void 0;
          }
        } finally {
          _ ? Z() : (gn = !1);
        }
      }
    }
    function pe(E, _) {
      var q = E.length;
      E.push(_);
      e: for (; 0 < q; ) {
        var le = (q - 1) >>> 1,
          me = E[le];
        if (0 < yn(me, _)) ((E[le] = _), (E[q] = me), (q = le));
        else break e;
      }
    }
    function Me(E) {
      return E.length === 0 ? null : E[0];
    }
    function $t(E) {
      if (E.length === 0) return null;
      var _ = E[0],
        q = E.pop();
      if (q !== _) {
        E[0] = q;
        e: for (var le = 0, me = E.length, pa = me >>> 1; le < pa; ) {
          var ma = 2 * (le + 1) - 1,
            Ol = E[ma],
            ye = ma + 1,
            Qn = E[ye];
          if (0 > yn(Ol, q))
            ye < me && 0 > yn(Qn, Ol)
              ? ((E[le] = Qn), (E[ye] = q), (le = ye))
              : ((E[le] = Ol), (E[ma] = q), (le = ma));
          else if (ye < me && 0 > yn(Qn, q)) ((E[le] = Qn), (E[ye] = q), (le = ye));
          else break e;
        }
      }
      return _;
    }
    function yn(E, _) {
      var q = E.sortIndex - _.sortIndex;
      return q !== 0 ? q : E.id - _.id;
    }
    function zl(E) {
      for (var _ = Me(Kt); _ !== null; ) {
        if (_.callback === null) $t(Kt);
        else if (_.startTime <= E) ($t(Kt), (_.sortIndex = _.expirationTime), pe(Nt, _));
        else break;
        _ = Me(Kt);
      }
    }
    function z(E) {
      if (((Xn = !1), zl(E), !Gn))
        if (Me(Nt) !== null) ((Gn = !0), gn || ((gn = !0), Z()));
        else {
          var _ = Me(Kt);
          _ !== null && Du(z, _.startTime - E);
        }
    }
    function ra() {
      return Ru ? !0 : !(x.unstable_now() - re < et);
    }
    function Du(E, _) {
      H = zu(function () {
        E(x.unstable_now());
      }, _);
    }
    if (
      (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == 'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),
      (x.unstable_now = void 0),
      typeof performance == 'object' && typeof performance.now == 'function')
    ) {
      var to = performance;
      x.unstable_now = function () {
        return to.now();
      };
    } else {
      var kt = Date,
        Qe = kt.now();
      x.unstable_now = function () {
        return kt.now() - Qe;
      };
    }
    var Nt = [],
      Kt = [],
      ls = 1,
      je = null,
      se = 3,
      da = !1,
      Gn = !1,
      Xn = !1,
      Ru = !1,
      zu = typeof setTimeout == 'function' ? setTimeout : null,
      Wt = typeof clearTimeout == 'function' ? clearTimeout : null,
      fe = typeof setImmediate < 'u' ? setImmediate : null,
      gn = !1,
      H = -1,
      et = 5,
      re = -1;
    if (typeof fe == 'function')
      var Z = function () {
        fe(_e);
      };
    else if (typeof MessageChannel < 'u') {
      var Ft = new MessageChannel(),
        ha = Ft.port2;
      ((Ft.port1.onmessage = _e),
        (Z = function () {
          ha.postMessage(null);
        }));
    } else
      Z = function () {
        zu(_e, 0);
      };
    ((x.unstable_IdlePriority = 5),
      (x.unstable_ImmediatePriority = 1),
      (x.unstable_LowPriority = 4),
      (x.unstable_NormalPriority = 3),
      (x.unstable_Profiling = null),
      (x.unstable_UserBlockingPriority = 2),
      (x.unstable_cancelCallback = function (E) {
        E.callback = null;
      }),
      (x.unstable_forceFrameRate = function (E) {
        0 > E || 125 < E
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (et = 0 < E ? Math.floor(1e3 / E) : 5);
      }),
      (x.unstable_getCurrentPriorityLevel = function () {
        return se;
      }),
      (x.unstable_next = function (E) {
        switch (se) {
          case 1:
          case 2:
          case 3:
            var _ = 3;
            break;
          default:
            _ = se;
        }
        var q = se;
        se = _;
        try {
          return E();
        } finally {
          se = q;
        }
      }),
      (x.unstable_requestPaint = function () {
        Ru = !0;
      }),
      (x.unstable_runWithPriority = function (E, _) {
        switch (E) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            E = 3;
        }
        var q = se;
        se = E;
        try {
          return _();
        } finally {
          se = q;
        }
      }),
      (x.unstable_scheduleCallback = function (E, _, q) {
        var le = x.unstable_now();
        switch (
          (typeof q == 'object' && q !== null
            ? ((q = q.delay), (q = typeof q == 'number' && 0 < q ? le + q : le))
            : (q = le),
          E)
        ) {
          case 1:
            var me = -1;
            break;
          case 2:
            me = 250;
            break;
          case 5:
            me = 1073741823;
            break;
          case 4:
            me = 1e4;
            break;
          default:
            me = 5e3;
        }
        return (
          (me = q + me),
          (E = {
            id: ls++,
            callback: _,
            priorityLevel: E,
            startTime: q,
            expirationTime: me,
            sortIndex: -1,
          }),
          q > le
            ? ((E.sortIndex = q),
              pe(Kt, E),
              Me(Nt) === null &&
                E === Me(Kt) &&
                (Xn ? (Wt(H), (H = -1)) : (Xn = !0), Du(z, q - le)))
            : ((E.sortIndex = me), pe(Nt, E), Gn || da || ((Gn = !0), gn || ((gn = !0), Z()))),
          E
        );
      }),
      (x.unstable_shouldYield = ra),
      (x.unstable_wrapCallback = function (E) {
        var _ = se;
        return function () {
          var q = se;
          se = _;
          try {
            return E.apply(this, arguments);
          } finally {
            se = q;
          }
        };
      }),
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == 'function' &&
        __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error()));
  })();
})(m0);
p0.exports = m0;
var P1 = p0.exports;
/**
 * @license React
 * react-dom-client.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function () {
  function x(e, t) {
    for (e = e.memoizedState; e !== null && 0 < t; ) ((e = e.next), t--);
    return e;
  }
  function _e(e, t, n, l) {
    if (n >= t.length) return l;
    var a = t[n],
      u = Ne(e) ? e.slice() : V({}, e);
    return ((u[a] = _e(e[a], t, n + 1, l)), u);
  }
  function pe(e, t, n) {
    if (t.length !== n.length) console.warn('copyWithRename() expects paths of the same length');
    else {
      for (var l = 0; l < n.length - 1; l++)
        if (t[l] !== n[l]) {
          console.warn('copyWithRename() expects paths to be the same except for the deepest key');
          return;
        }
      return Me(e, t, n, 0);
    }
  }
  function Me(e, t, n, l) {
    var a = t[l],
      u = Ne(e) ? e.slice() : V({}, e);
    return (
      l + 1 === t.length
        ? ((u[n[l]] = u[a]), Ne(u) ? u.splice(a, 1) : delete u[a])
        : (u[a] = Me(e[a], t, n, l + 1)),
      u
    );
  }
  function $t(e, t, n) {
    var l = t[n],
      a = Ne(e) ? e.slice() : V({}, e);
    return n + 1 === t.length
      ? (Ne(a) ? a.splice(l, 1) : delete a[l], a)
      : ((a[l] = $t(e[l], t, n + 1)), a);
  }
  function yn() {
    return !1;
  }
  function zl() {
    return null;
  }
  function z() {
    console.error(
      'Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks',
    );
  }
  function ra() {
    console.error(
      'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
    );
  }
  function Du() {}
  function to() {}
  function kt(e) {
    var t = [];
    return (
      e.forEach(function (n) {
        t.push(n);
      }),
      t.sort().join(', ')
    );
  }
  function Qe(e, t, n, l) {
    return new X0(e, t, n, l);
  }
  function Nt(e, t) {
    e.context === fl && (sr(e.current, 2, t, e, null, null), _a());
  }
  function Kt(e, t) {
    if (Ot !== null) {
      var n = t.staleFamilies;
      ((t = t.updatedFamilies), li(), Nh(e.current, t, n), _a());
    }
  }
  function ls(e) {
    Ot = e;
  }
  function je(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function se(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function da(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Gn(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null))
        return t.dehydrated;
    }
    return null;
  }
  function Xn(e) {
    if (se(e) !== e) throw Error('Unable to find node on an unmounted component.');
  }
  function Ru(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = se(e)), t === null)) throw Error('Unable to find node on an unmounted component.');
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (((l = a.return), l !== null)) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === n) return (Xn(a), e);
          if (u === l) return (Xn(a), t);
          u = u.sibling;
        }
        throw Error('Unable to find node on an unmounted component.');
      }
      if (n.return !== l.return) ((n = a), (l = u));
      else {
        for (var i = !1, o = a.child; o; ) {
          if (o === n) {
            ((i = !0), (n = a), (l = u));
            break;
          }
          if (o === l) {
            ((i = !0), (l = a), (n = u));
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === n) {
              ((i = !0), (n = u), (l = a));
              break;
            }
            if (o === l) {
              ((i = !0), (l = u), (n = a));
              break;
            }
            o = o.sibling;
          }
          if (!i)
            throw Error(
              'Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.',
            );
        }
      }
      if (n.alternate !== l)
        throw Error(
          "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.",
        );
    }
    if (n.tag !== 3) throw Error('Unable to find node on an unmounted component.');
    return n.stateNode.current === n ? e : t;
  }
  function zu(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = zu(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  function Wt(e) {
    return e === null || typeof e != 'object'
      ? null
      : ((e = (Vy && e[Vy]) || e['@@iterator']), typeof e == 'function' ? e : null);
  }
  function fe(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.$$typeof === sS ? null : e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
      case La:
        return 'Fragment';
      case yr:
        return 'Profiler';
      case cc:
        return 'StrictMode';
      case vr:
        return 'Suspense';
      case br:
        return 'SuspenseList';
      case Sr:
        return 'Activity';
    }
    if (typeof e == 'object')
      switch (
        (typeof e.tag == 'number' &&
          console.error(
            'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
          ),
        e.$$typeof)
      ) {
        case Ya:
          return 'Portal';
        case on:
          return e.displayName || 'Context';
        case gr:
          return (e._context.displayName || 'Context') + '.Consumer';
        case ri:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ''),
              (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
            e
          );
        case sc:
          return ((t = e.displayName || null), t !== null ? t : fe(e.type) || 'Memo');
        case yt:
          ((t = e._payload), (e = e._init));
          try {
            return fe(e(t));
          } catch {}
      }
    return null;
  }
  function gn(e) {
    return typeof e.tag == 'number' ? H(e) : typeof e.name == 'string' ? e.name : null;
  }
  function H(e) {
    var t = e.type;
    switch (e.tag) {
      case 31:
        return 'Activity';
      case 24:
        return 'Cache';
      case 9:
        return (t._context.displayName || 'Context') + '.Consumer';
      case 10:
        return t.displayName || 'Context';
      case 18:
        return 'DehydratedFragment';
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ''),
          t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
        );
      case 7:
        return 'Fragment';
      case 26:
      case 27:
      case 5:
        return t;
      case 4:
        return 'Portal';
      case 3:
        return 'Root';
      case 6:
        return 'Text';
      case 16:
        return fe(t);
      case 8:
        return t === cc ? 'StrictMode' : 'Mode';
      case 22:
        return 'Offscreen';
      case 12:
        return 'Profiler';
      case 21:
        return 'Scope';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 25:
        return 'TracingMarker';
      case 1:
      case 0:
      case 14:
      case 15:
        if (typeof t == 'function') return t.displayName || t.name || null;
        if (typeof t == 'string') return t;
        break;
      case 29:
        if (((t = e._debugInfo), t != null)) {
          for (var n = t.length - 1; 0 <= n; n--)
            if (typeof t[n].name == 'string') return t[n].name;
        }
        if (e.return !== null) return H(e.return);
    }
    return null;
  }
  function et(e) {
    return { current: e };
  }
  function re(e, t) {
    0 > On
      ? console.error('Unexpected pop.')
      : (t !== Er[On] && console.error('Unexpected Fiber popped.'),
        (e.current = Tr[On]),
        (Tr[On] = null),
        (Er[On] = null),
        On--);
  }
  function Z(e, t, n) {
    (On++, (Tr[On] = e.current), (Er[On] = n), (e.current = t));
  }
  function Ft(e) {
    return (
      e === null &&
        console.error(
          'Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.',
        ),
      e
    );
  }
  function ha(e, t) {
    (Z(il, t, e), Z(di, e, e), Z(ul, null, e));
    var n = t.nodeType;
    switch (n) {
      case 9:
      case 11:
        ((n = n === 9 ? '#document' : '#fragment'),
          (t = (t = t.documentElement) && (t = t.namespaceURI) ? cy(t) : Yn));
        break;
      default:
        if (((n = t.tagName), (t = t.namespaceURI))) ((t = cy(t)), (t = sy(t, n)));
        else
          switch (n) {
            case 'svg':
              t = Eu;
              break;
            case 'math':
              t = kc;
              break;
            default:
              t = Yn;
          }
    }
    ((n = n.toLowerCase()),
      (n = dh(null, n)),
      (n = { context: t, ancestorInfo: n }),
      re(ul, e),
      Z(ul, n, e));
  }
  function E(e) {
    (re(ul, e), re(di, e), re(il, e));
  }
  function _() {
    return Ft(ul.current);
  }
  function q(e) {
    e.memoizedState !== null && Z(fc, e, e);
    var t = Ft(ul.current),
      n = e.type,
      l = sy(t.context, n);
    ((n = dh(t.ancestorInfo, n)),
      (l = { context: l, ancestorInfo: n }),
      t !== l && (Z(di, e, e), Z(ul, l, e)));
  }
  function le(e) {
    (di.current === e && (re(ul, e), re(di, e)),
      fc.current === e && (re(fc, e), (Ii._currentValue = fa)));
  }
  function me() {}
  function pa() {
    if (hi === 0) {
      ((Yy = console.log),
        (Ly = console.info),
        (jy = console.warn),
        (Gy = console.error),
        (Xy = console.group),
        (Qy = console.groupCollapsed),
        (Zy = console.groupEnd));
      var e = { configurable: !0, enumerable: !0, value: me, writable: !0 };
      Object.defineProperties(console, {
        info: e,
        log: e,
        warn: e,
        error: e,
        group: e,
        groupCollapsed: e,
        groupEnd: e,
      });
    }
    hi++;
  }
  function ma() {
    if ((hi--, hi === 0)) {
      var e = { configurable: !0, enumerable: !0, writable: !0 };
      Object.defineProperties(console, {
        log: V({}, e, { value: Yy }),
        info: V({}, e, { value: Ly }),
        warn: V({}, e, { value: jy }),
        error: V({}, e, { value: Gy }),
        group: V({}, e, { value: Xy }),
        groupCollapsed: V({}, e, { value: Qy }),
        groupEnd: V({}, e, { value: Zy }),
      });
    }
    0 > hi &&
      console.error('disabledDepth fell below zero. This is a bug in React. Please file an issue.');
  }
  function Ol(e) {
    var t = Error.prepareStackTrace;
    if (
      ((Error.prepareStackTrace = void 0),
      (e = e.stack),
      (Error.prepareStackTrace = t),
      e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)),
      (t = e.indexOf(`
`)),
      t !== -1 && (e = e.slice(t + 1)),
      (t = e.indexOf('react_stack_bottom_frame')),
      t !== -1 &&
        (t = e.lastIndexOf(
          `
`,
          t,
        )),
      t !== -1)
    )
      e = e.slice(0, t);
    else return '';
    return e;
  }
  function ye(e) {
    if (Ar === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ((Ar = (t && t[1]) || ''),
          (Jy =
            -1 <
            n.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < n.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      Ar +
      e +
      Jy
    );
  }
  function Qn(e, t) {
    if (!e || Dr) return '';
    var n = Rr.get(e);
    if (n !== void 0) return n;
    ((Dr = !0), (n = Error.prepareStackTrace), (Error.prepareStackTrace = void 0));
    var l = null;
    ((l = y.H), (y.H = null), pa());
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var h = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(h.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(h, []);
                } catch (D) {
                  var v = D;
                }
                Reflect.construct(e, [], h);
              } else {
                try {
                  h.call();
                } catch (D) {
                  v = D;
                }
                e.call(h.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                v = D;
              }
              (h = e()) && typeof h.catch == 'function' && h.catch(function () {});
            }
          } catch (D) {
            if (D && v && typeof D.stack == 'string') return [D.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name');
      u &&
        u.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var i = a.DetermineComponentFrameRoot(),
        o = i[0],
        c = i[1];
      if (o && c) {
        var s = o.split(`
`),
          p = c.split(`
`);
        for (i = u = 0; u < s.length && !s[u].includes('DetermineComponentFrameRoot'); ) u++;
        for (; i < p.length && !p[i].includes('DetermineComponentFrameRoot'); ) i++;
        if (u === s.length || i === p.length)
          for (u = s.length - 1, i = p.length - 1; 1 <= u && 0 <= i && s[u] !== p[i]; ) i--;
        for (; 1 <= u && 0 <= i; u--, i--)
          if (s[u] !== p[i]) {
            if (u !== 1 || i !== 1)
              do
                if ((u--, i--, 0 > i || s[u] !== p[i])) {
                  var m =
                    `
` + s[u].replace(' at new ', ' at ');
                  return (
                    e.displayName &&
                      m.includes('<anonymous>') &&
                      (m = m.replace('<anonymous>', e.displayName)),
                    typeof e == 'function' && Rr.set(e, m),
                    m
                  );
                }
              while (1 <= u && 0 <= i);
            break;
          }
      }
    } finally {
      ((Dr = !1), (y.H = l), ma(), (Error.prepareStackTrace = n));
    }
    return (
      (s = (s = e ? e.displayName || e.name : '') ? ye(s) : ''),
      typeof e == 'function' && Rr.set(e, s),
      s
    );
  }
  function y0(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ye(e.type);
      case 16:
        return ye('Lazy');
      case 13:
        return e.child !== t && t !== null ? ye('Suspense Fallback') : ye('Suspense');
      case 19:
        return ye('SuspenseList');
      case 0:
      case 15:
        return Qn(e.type, !1);
      case 11:
        return Qn(e.type.render, !1);
      case 1:
        return Qn(e.type, !0);
      case 31:
        return ye('Activity');
      default:
        return '';
    }
  }
  function Nd(e) {
    try {
      var t = '',
        n = null;
      do {
        t += y0(e, n);
        var l = e._debugInfo;
        if (l)
          for (var a = l.length - 1; 0 <= a; a--) {
            var u = l[a];
            if (typeof u.name == 'string') {
              var i = t;
              e: {
                var o = u.name,
                  c = u.env,
                  s = u.debugLocation;
                if (s != null) {
                  var p = Ol(s),
                    m = p.lastIndexOf(`
`),
                    h = m === -1 ? p : p.slice(m + 1);
                  if (h.indexOf(o) !== -1) {
                    var v =
                      `
` + h;
                    break e;
                  }
                }
                v = ye(o + (c ? ' [' + c + ']' : ''));
              }
              t = i + v;
            }
          }
        ((n = e), (e = e.return));
      } while (e);
      return t;
    } catch (D) {
      return (
        `
Error generating stack: ` +
        D.message +
        `
` +
        D.stack
      );
    }
  }
  function Vd(e) {
    return (e = e ? e.displayName || e.name : '') ? ye(e) : '';
  }
  function no() {
    if (gt === null) return null;
    var e = gt._debugOwner;
    return e != null ? gn(e) : null;
  }
  function g0() {
    if (gt === null) return '';
    var e = gt;
    try {
      var t = '';
      switch ((e.tag === 6 && (e = e.return), e.tag)) {
        case 26:
        case 27:
        case 5:
          t += ye(e.type);
          break;
        case 13:
          t += ye('Suspense');
          break;
        case 19:
          t += ye('SuspenseList');
          break;
        case 31:
          t += ye('Activity');
          break;
        case 30:
        case 0:
        case 15:
        case 1:
          e._debugOwner || t !== '' || (t += Vd(e.type));
          break;
        case 11:
          e._debugOwner || t !== '' || (t += Vd(e.type.render));
      }
      for (; e; )
        if (typeof e.tag == 'number') {
          var n = e;
          e = n._debugOwner;
          var l = n._debugStack;
          if (e && l) {
            var a = Ol(l);
            a !== '' &&
              (t +=
                `
` + a);
          }
        } else if (e.debugStack != null) {
          var u = e.debugStack;
          (e = e.owner) &&
            u &&
            (t +=
              `
` + Ol(u));
        } else break;
      var i = t;
    } catch (o) {
      i =
        `
Error generating stack: ` +
        o.message +
        `
` +
        o.stack;
    }
    return i;
  }
  function R(e, t, n, l, a, u, i) {
    var o = gt;
    as(e);
    try {
      return e !== null && e._debugTask
        ? e._debugTask.run(t.bind(null, n, l, a, u, i))
        : t(n, l, a, u, i);
    } finally {
      as(o);
    }
    throw Error('runWithFiberInDEV should never be called in production. This is a bug in React.');
  }
  function as(e) {
    ((y.getCurrentStack = e === null ? null : g0), (cn = !1), (gt = e));
  }
  function lo(e) {
    return (
      (typeof Symbol == 'function' && Symbol.toStringTag && e[Symbol.toStringTag]) ||
      e.constructor.name ||
      'Object'
    );
  }
  function ao(e) {
    try {
      return (Ou(e), !1);
    } catch {
      return !0;
    }
  }
  function Ou(e) {
    return '' + e;
  }
  function ae(e, t) {
    if (ao(e))
      return (
        console.error(
          'The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.',
          t,
          lo(e),
        ),
        Ou(e)
      );
  }
  function us(e, t) {
    if (ao(e))
      return (
        console.error(
          'The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.',
          t,
          lo(e),
        ),
        Ou(e)
      );
  }
  function is(e) {
    if (ao(e))
      return (
        console.error(
          'Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.',
          lo(e),
        ),
        Ou(e)
      );
  }
  function v0(e) {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u') return !1;
    var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (t.isDisabled) return !0;
    if (!t.supportsFiber)
      return (
        console.error(
          'The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools',
        ),
        !0
      );
    try {
      ((Ga = t.inject(e)), (Ge = t));
    } catch (n) {
      console.error('React instrumentation encountered an error: %o.', n);
    }
    return !!t.checkDCE;
  }
  function ce(e) {
    if ((typeof yS == 'function' && gS(e), Ge && typeof Ge.setStrictMode == 'function'))
      try {
        Ge.setStrictMode(Ga, e);
      } catch (t) {
        fn || ((fn = !0), console.error('React instrumentation encountered an error: %o', t));
      }
  }
  function b0(e) {
    A = e;
  }
  function Yd() {
    A !== null && typeof A.markCommitStopped == 'function' && A.markCommitStopped();
  }
  function Cu(e) {
    A !== null &&
      typeof A.markComponentRenderStarted == 'function' &&
      A.markComponentRenderStarted(e);
  }
  function ya() {
    A !== null &&
      typeof A.markComponentRenderStopped == 'function' &&
      A.markComponentRenderStopped();
  }
  function Ld(e) {
    A !== null && typeof A.markRenderStarted == 'function' && A.markRenderStarted(e);
  }
  function jd() {
    A !== null && typeof A.markRenderStopped == 'function' && A.markRenderStopped();
  }
  function Mu(e, t) {
    A !== null &&
      typeof A.markStateUpdateScheduled == 'function' &&
      A.markStateUpdateScheduled(e, t);
  }
  function S0(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((vS(e) / bS) | 0)) | 0);
  }
  function T0(e) {
    if (e & 1) return 'SyncHydrationLane';
    if (e & 2) return 'Sync';
    if (e & 4) return 'InputContinuousHydration';
    if (e & 8) return 'InputContinuous';
    if (e & 16) return 'DefaultHydration';
    if (e & 32) return 'Default';
    if (e & 128) return 'TransitionHydration';
    if (e & 4194048) return 'Transition';
    if (e & 62914560) return 'Retry';
    if (e & 67108864) return 'SelectiveHydration';
    if (e & 134217728) return 'IdleHydration';
    if (e & 268435456) return 'Idle';
    if (e & 536870912) return 'Offscreen';
    if (e & 1073741824) return 'Deferred';
  }
  function Cl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return (console.error('Should have found matching lanes. This is a bug in React.'), e);
    }
  }
  function uo(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0,
      u = e.suspendedLanes,
      i = e.pingedLanes;
    e = e.warmLanes;
    var o = l & 134217727;
    return (
      o !== 0
        ? ((l = o & ~u),
          l !== 0
            ? (a = Cl(l))
            : ((i &= o), i !== 0 ? (a = Cl(i)) : n || ((n = o & ~e), n !== 0 && (a = Cl(n)))))
        : ((o = l & ~u),
          o !== 0
            ? (a = Cl(o))
            : i !== 0
              ? (a = Cl(i))
              : n || ((n = l & ~e), n !== 0 && (a = Cl(n)))),
      a === 0
        ? 0
        : t !== 0 &&
            t !== a &&
            !(t & u) &&
            ((u = a & -a), (n = t & -t), u >= n || (u === 32 && (n & 4194048) !== 0))
          ? t
          : a
    );
  }
  function Uu(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function E0(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return (console.error('Should have found matching lanes. This is a bug in React.'), -1);
    }
  }
  function Gd() {
    var e = rc;
    return ((rc <<= 1), !(rc & 4194048) && (rc = 256), e);
  }
  function Xd() {
    var e = dc;
    return ((dc <<= 1), !(dc & 62914560) && (dc = 4194304), e);
  }
  function os(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Hu(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 && ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function A0(e, t, n, l, a, u) {
    var i = e.pendingLanes;
    ((e.pendingLanes = n),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= n),
      (e.entangledLanes &= n),
      (e.errorRecoveryDisabledLanes &= n),
      (e.shellSuspendCounter = 0));
    var o = e.entanglements,
      c = e.expirationTimes,
      s = e.hiddenUpdates;
    for (n = i & ~n; 0 < n; ) {
      var p = 31 - Je(n),
        m = 1 << p;
      ((o[p] = 0), (c[p] = -1));
      var h = s[p];
      if (h !== null)
        for (s[p] = null, p = 0; p < h.length; p++) {
          var v = h[p];
          v !== null && (v.lane &= -536870913);
        }
      n &= ~m;
    }
    (l !== 0 && Qd(e, l, 0),
      u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t)));
  }
  function Qd(e, t, n) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var l = 31 - Je(t);
    ((e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (n & 4194090)));
  }
  function Zd(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var l = 31 - Je(n),
        a = 1 << l;
      ((a & t) | (e[l] & t) && (e[l] |= t), (n &= ~a));
    }
  }
  function Jd(e, t) {
    var n = t & -t;
    return ((n = n & 42 ? 1 : cs(n)), n & (e.suspendedLanes | t) ? 0 : n);
  }
  function cs(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function $d(e, t, n) {
    if (jt)
      for (e = e.pendingUpdatersLaneMap; 0 < n; ) {
        var l = 31 - Je(n),
          a = 1 << l;
        (e[l].add(t), (n &= ~a));
      }
  }
  function kd(e, t) {
    if (jt)
      for (var n = e.pendingUpdatersLaneMap, l = e.memoizedUpdaters; 0 < t; ) {
        var a = 31 - Je(t);
        ((e = 1 << a),
          (a = n[a]),
          0 < a.size &&
            (a.forEach(function (u) {
              var i = u.alternate;
              (i !== null && l.has(i)) || l.add(u);
            }),
            a.clear()),
          (t &= ~e));
      }
  }
  function ss(e) {
    return ((e &= -e), Rt < e ? (rn < e ? (e & 134217727 ? Mn : hc) : rn) : Rt);
  }
  function Kd() {
    var e = $.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? Mn : Hy(e.type));
  }
  function Wd(e, t) {
    var n = $.p;
    try {
      return (($.p = e), t());
    } finally {
      $.p = n;
    }
  }
  function fs(e) {
    (delete e[Ve], delete e[$e], delete e[Ur], delete e[SS], delete e[TS]);
  }
  function ga(e) {
    var t = e[Ve];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[cl] || n[Ve])) {
        if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
          for (e = gy(e); e !== null; ) {
            if ((n = e[Ve])) return n;
            e = gy(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function Zn(e) {
    if ((e = e[Ve] || e[cl])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
    }
    return null;
  }
  function xu(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error('getNodeFromInstance: Invalid argument.');
  }
  function va(e) {
    var t = e[$y];
    return (t || (t = e[$y] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), t);
  }
  function Ue(e) {
    e[pi] = !0;
  }
  function Ml(e, t) {
    (ba(e, t), ba(e + 'Capture', t));
  }
  function ba(e, t) {
    (Ql[e] &&
      console.error(
        'EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.',
        e,
      ),
      (Ql[e] = t));
    var n = e.toLowerCase();
    for (Hr[n] = e, e === 'onDoubleClick' && (Hr.ondblclick = e), e = 0; e < t.length; e++)
      ky.add(t[e]);
  }
  function Sa(e, t) {
    (ES[t.type] ||
      t.onChange ||
      t.onInput ||
      t.readOnly ||
      t.disabled ||
      t.value == null ||
      console.error(
        e === 'select'
          ? 'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.'
          : 'You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.',
      ),
      t.onChange ||
        t.readOnly ||
        t.disabled ||
        t.checked == null ||
        console.error(
          'You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.',
        ));
  }
  function rs(e) {
    return Cn.call(Wy, e)
      ? !0
      : Cn.call(Ky, e)
        ? !1
        : AS.test(e)
          ? (Wy[e] = !0)
          : ((Ky[e] = !0), console.error('Invalid attribute name: `%s`', e), !1);
  }
  function Fd(e, t, n) {
    if (rs(t)) {
      if (!e.hasAttribute(t)) {
        switch (typeof n) {
          case 'symbol':
          case 'object':
            return n;
          case 'function':
            return n;
          case 'boolean':
            if (n === !1) return n;
        }
        return n === void 0 ? void 0 : null;
      }
      return (
        (e = e.getAttribute(t)),
        e === '' && n === !0 ? !0 : (ae(n, t), e === '' + n ? n : e)
      );
    }
  }
  function io(e, t, n) {
    if (rs(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case 'undefined':
          case 'function':
          case 'symbol':
            e.removeAttribute(t);
            return;
          case 'boolean':
            var l = t.toLowerCase().slice(0, 5);
            if (l !== 'data-' && l !== 'aria-') {
              e.removeAttribute(t);
              return;
            }
        }
        (ae(n, t), e.setAttribute(t, '' + n));
      }
  }
  function oo(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(t);
          return;
      }
      (ae(n, t), e.setAttribute(t, '' + n));
    }
  }
  function vn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          e.removeAttribute(n);
          return;
      }
      (ae(l, n), e.setAttributeNS(t, n, '' + l));
    }
  }
  function Et(e) {
    switch (typeof e) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return e;
      case 'object':
        return (is(e), e);
      default:
        return '';
    }
  }
  function Id(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
  }
  function D0(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var a = l.get,
        u = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return a.call(this);
          },
          set: function (i) {
            (is(i), (n = '' + i), u.call(this, i));
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (i) {
            (is(i), (n = '' + i));
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function ds(e) {
    if (!e._valueTracker) {
      var t = Id(e) ? 'checked' : 'value';
      e._valueTracker = D0(e, t, '' + e[t]);
    }
  }
  function Pd(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      l = '';
    return (
      e && (l = Id(e) ? (e.checked ? 'true' : 'false') : e.value),
      (e = l),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function co(e) {
    if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function At(e) {
    return e.replace(DS, function (t) {
      return '\\' + t.charCodeAt(0).toString(16) + ' ';
    });
  }
  function eh(e, t) {
    (t.checked === void 0 ||
      t.defaultChecked === void 0 ||
      Iy ||
      (console.error(
        '%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components',
        no() || 'A component',
        t.type,
      ),
      (Iy = !0)),
      t.value === void 0 ||
        t.defaultValue === void 0 ||
        Fy ||
        (console.error(
          '%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components',
          no() || 'A component',
          t.type,
        ),
        (Fy = !0)));
  }
  function hs(e, t, n, l, a, u, i, o) {
    ((e.name = ''),
      i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean'
        ? (ae(i, 'type'), (e.type = i))
        : e.removeAttribute('type'),
      t != null
        ? i === 'number'
          ? ((t === 0 && e.value === '') || e.value != t) && (e.value = '' + Et(t))
          : e.value !== '' + Et(t) && (e.value = '' + Et(t))
        : (i !== 'submit' && i !== 'reset') || e.removeAttribute('value'),
      t != null
        ? ps(e, i, Et(t))
        : n != null
          ? ps(e, i, Et(n))
          : l != null && e.removeAttribute('value'),
      a == null && u != null && (e.defaultChecked = !!u),
      a != null && (e.checked = a && typeof a != 'function' && typeof a != 'symbol'),
      o != null && typeof o != 'function' && typeof o != 'symbol' && typeof o != 'boolean'
        ? (ae(o, 'name'), (e.name = '' + Et(o)))
        : e.removeAttribute('name'));
  }
  function th(e, t, n, l, a, u, i, o) {
    if (
      (u != null &&
        typeof u != 'function' &&
        typeof u != 'symbol' &&
        typeof u != 'boolean' &&
        (ae(u, 'type'), (e.type = u)),
      t != null || n != null)
    ) {
      if (!((u !== 'submit' && u !== 'reset') || t != null)) {
        ds(e);
        return;
      }
      ((n = n != null ? '' + Et(n) : ''),
        (t = t != null ? '' + Et(t) : n),
        o || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((l = l ?? a),
      (l = typeof l != 'function' && typeof l != 'symbol' && !!l),
      (e.checked = o ? e.checked : !!l),
      (e.defaultChecked = !!l),
      i != null &&
        typeof i != 'function' &&
        typeof i != 'symbol' &&
        typeof i != 'boolean' &&
        (ae(i, 'name'), (e.name = i)),
      ds(e));
  }
  function ps(e, t, n) {
    (t === 'number' && co(e.ownerDocument) === e) ||
      e.defaultValue === '' + n ||
      (e.defaultValue = '' + n);
  }
  function nh(e, t) {
    (t.value == null &&
      (typeof t.children == 'object' && t.children !== null
        ? mr.Children.forEach(t.children, function (n) {
            n == null ||
              typeof n == 'string' ||
              typeof n == 'number' ||
              typeof n == 'bigint' ||
              eg ||
              ((eg = !0),
              console.error(
                'Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.',
              ));
          })
        : t.dangerouslySetInnerHTML == null ||
          tg ||
          ((tg = !0),
          console.error(
            'Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.',
          ))),
      t.selected == null ||
        Py ||
        (console.error(
          'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.',
        ),
        (Py = !0)));
  }
  function lh() {
    var e = no();
    return e
      ? `

Check the render method of \`` +
          e +
          '`.'
      : '';
  }
  function Ta(e, t, n, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var a = 0; a < n.length; a++) t['$' + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        ((a = t.hasOwnProperty('$' + e[n].value)),
          e[n].selected !== a && (e[n].selected = a),
          a && l && (e[n].defaultSelected = !0));
    } else {
      for (n = '' + Et(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          ((e[a].selected = !0), l && (e[a].defaultSelected = !0));
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ah(e, t) {
    for (e = 0; e < lg.length; e++) {
      var n = lg[e];
      if (t[n] != null) {
        var l = Ne(t[n]);
        t.multiple && !l
          ? console.error(
              'The `%s` prop supplied to <select> must be an array if `multiple` is true.%s',
              n,
              lh(),
            )
          : !t.multiple &&
            l &&
            console.error(
              'The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s',
              n,
              lh(),
            );
      }
    }
    t.value === void 0 ||
      t.defaultValue === void 0 ||
      ng ||
      (console.error(
        'Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components',
      ),
      (ng = !0));
  }
  function uh(e, t) {
    (t.value === void 0 ||
      t.defaultValue === void 0 ||
      ag ||
      (console.error(
        '%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components',
        no() || 'A component',
      ),
      (ag = !0)),
      t.children != null &&
        t.value == null &&
        console.error(
          'Use the `defaultValue` or `value` props instead of setting children on <textarea>.',
        ));
  }
  function ih(e, t, n) {
    if (t != null && ((t = '' + Et(t)), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? '' + Et(n) : '';
  }
  function oh(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null)
          throw Error('If you supply `defaultValue` on a <textarea>, do not pass children.');
        if (Ne(l)) {
          if (1 < l.length) throw Error('<textarea> can only have at most one child.');
          l = l[0];
        }
        n = l;
      }
      (n == null && (n = ''), (t = n));
    }
    ((n = Et(t)),
      (e.defaultValue = n),
      (l = e.textContent),
      l === n && l !== '' && l !== null && (e.value = l),
      ds(e));
  }
  function ch(e, t) {
    return e.serverProps === void 0 &&
      e.serverTail.length === 0 &&
      e.children.length === 1 &&
      3 < e.distanceFromLeaf &&
      e.distanceFromLeaf > 15 - t
      ? ch(e.children[0], t)
      : e;
  }
  function st(e) {
    return '  ' + '  '.repeat(e);
  }
  function Ea(e) {
    return '+ ' + '  '.repeat(e);
  }
  function Ul(e) {
    return '- ' + '  '.repeat(e);
  }
  function sh(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return e.type;
      case 16:
        return 'Lazy';
      case 31:
        return 'Activity';
      case 13:
        return 'Suspense';
      case 19:
        return 'SuspenseList';
      case 0:
      case 15:
        return ((e = e.type), e.displayName || e.name || null);
      case 11:
        return ((e = e.type.render), e.displayName || e.name || null);
      case 1:
        return ((e = e.type), e.displayName || e.name || null);
      default:
        return null;
    }
  }
  function _u(e, t) {
    return ug.test(e)
      ? ((e = JSON.stringify(e)),
        e.length > t - 2 ? (8 > t ? '{"..."}' : '{' + e.slice(0, t - 7) + '..."}') : '{' + e + '}')
      : e.length > t
        ? 5 > t
          ? '{"..."}'
          : e.slice(0, t - 3) + '...'
        : e;
  }
  function so(e, t, n) {
    var l = 120 - 2 * n;
    if (t === null)
      return (
        Ea(n) +
        _u(e, l) +
        `
`
      );
    if (typeof t == 'string') {
      for (var a = 0; a < t.length && a < e.length && t.charCodeAt(a) === e.charCodeAt(a); a++);
      return (
        a > l - 8 && 10 < a && ((e = '...' + e.slice(a - 8)), (t = '...' + t.slice(a - 8))),
        Ea(n) +
          _u(e, l) +
          `
` +
          Ul(n) +
          _u(t, l) +
          `
`
      );
    }
    return (
      st(n) +
      _u(e, l) +
      `
`
    );
  }
  function ms(e) {
    return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function (t, n) {
      return n;
    });
  }
  function wu(e, t) {
    switch (typeof e) {
      case 'string':
        return (
          (e = JSON.stringify(e)),
          e.length > t ? (5 > t ? '"..."' : e.slice(0, t - 4) + '..."') : e
        );
      case 'object':
        if (e === null) return 'null';
        if (Ne(e)) return '[...]';
        if (e.$$typeof === al) return (t = fe(e.type)) ? '<' + t + '>' : '<...>';
        var n = ms(e);
        if (n === 'Object') {
          ((n = ''), (t -= 2));
          for (var l in e)
            if (e.hasOwnProperty(l)) {
              var a = JSON.stringify(l);
              if (
                (a !== '"' + l + '"' && (l = a),
                (t -= l.length - 2),
                (a = wu(e[l], 15 > t ? t : 15)),
                (t -= a.length),
                0 > t)
              ) {
                n += n === '' ? '...' : ', ...';
                break;
              }
              n += (n === '' ? '' : ',') + l + ':' + a;
            }
          return '{' + n + '}';
        }
        return n;
      case 'function':
        return (t = e.displayName || e.name) ? 'function ' + t : 'function';
      default:
        return String(e);
    }
  }
  function Aa(e, t) {
    return typeof e != 'string' || ug.test(e)
      ? '{' + wu(e, t - 2) + '}'
      : e.length > t - 2
        ? 5 > t
          ? '"..."'
          : '"' + e.slice(0, t - 5) + '..."'
        : '"' + e + '"';
  }
  function ys(e, t, n) {
    var l = 120 - n.length - e.length,
      a = [],
      u;
    for (u in t)
      if (t.hasOwnProperty(u) && u !== 'children') {
        var i = Aa(t[u], 120 - n.length - u.length - 1);
        ((l -= u.length + i.length + 2), a.push(u + '=' + i));
      }
    return a.length === 0
      ? n +
          '<' +
          e +
          `>
`
      : 0 < l
        ? n +
          '<' +
          e +
          ' ' +
          a.join(' ') +
          `>
`
        : n +
          '<' +
          e +
          `
` +
          n +
          '  ' +
          a.join(
            `
` +
              n +
              '  ',
          ) +
          `
` +
          n +
          `>
`;
  }
  function R0(e, t, n) {
    var l = '',
      a = V({}, t),
      u;
    for (u in e)
      if (e.hasOwnProperty(u)) {
        delete a[u];
        var i = 120 - 2 * n - u.length - 2,
          o = wu(e[u], i);
        t.hasOwnProperty(u)
          ? ((i = wu(t[u], i)),
            (l +=
              Ea(n) +
              u +
              ': ' +
              o +
              `
`),
            (l +=
              Ul(n) +
              u +
              ': ' +
              i +
              `
`))
          : (l +=
              Ea(n) +
              u +
              ': ' +
              o +
              `
`);
      }
    for (var c in a)
      a.hasOwnProperty(c) &&
        ((e = wu(a[c], 120 - 2 * n - c.length - 2)),
        (l +=
          Ul(n) +
          c +
          ': ' +
          e +
          `
`));
    return l;
  }
  function z0(e, t, n, l) {
    var a = '',
      u = new Map();
    for (s in n) n.hasOwnProperty(s) && u.set(s.toLowerCase(), s);
    if (u.size === 1 && u.has('children')) a += ys(e, t, st(l));
    else {
      for (var i in t)
        if (t.hasOwnProperty(i) && i !== 'children') {
          var o = 120 - 2 * (l + 1) - i.length - 1,
            c = u.get(i.toLowerCase());
          if (c !== void 0) {
            u.delete(i.toLowerCase());
            var s = t[i];
            c = n[c];
            var p = Aa(s, o);
            ((o = Aa(c, o)),
              typeof s == 'object' &&
              s !== null &&
              typeof c == 'object' &&
              c !== null &&
              ms(s) === 'Object' &&
              ms(c) === 'Object' &&
              (2 < Object.keys(s).length ||
                2 < Object.keys(c).length ||
                -1 < p.indexOf('...') ||
                -1 < o.indexOf('...'))
                ? (a +=
                    st(l + 1) +
                    i +
                    `={{
` +
                    R0(s, c, l + 2) +
                    st(l + 1) +
                    `}}
`)
                : ((a +=
                    Ea(l + 1) +
                    i +
                    '=' +
                    p +
                    `
`),
                  (a +=
                    Ul(l + 1) +
                    i +
                    '=' +
                    o +
                    `
`)));
          } else
            a +=
              st(l + 1) +
              i +
              '=' +
              Aa(t[i], o) +
              `
`;
        }
      (u.forEach(function (m) {
        if (m !== 'children') {
          var h = 120 - 2 * (l + 1) - m.length - 1;
          a +=
            Ul(l + 1) +
            m +
            '=' +
            Aa(n[m], h) +
            `
`;
        }
      }),
        (a =
          a === ''
            ? st(l) +
              '<' +
              e +
              `>
`
            : st(l) +
              '<' +
              e +
              `
` +
              a +
              st(l) +
              `>
`));
    }
    return (
      (e = n.children),
      (t = t.children),
      typeof e == 'string' || typeof e == 'number' || typeof e == 'bigint'
        ? ((u = ''),
          (typeof t == 'string' || typeof t == 'number' || typeof t == 'bigint') && (u = '' + t),
          (a += so(u, '' + e, l + 1)))
        : (typeof t == 'string' || typeof t == 'number' || typeof t == 'bigint') &&
          (a = e == null ? a + so('' + t, null, l + 1) : a + so('' + t, void 0, l + 1)),
      a
    );
  }
  function fh(e, t) {
    var n = sh(e);
    if (n === null) {
      for (n = '', e = e.child; e; ) ((n += fh(e, t)), (e = e.sibling));
      return n;
    }
    return (
      st(t) +
      '<' +
      n +
      `>
`
    );
  }
  function gs(e, t) {
    var n = ch(e, t);
    if (n !== e && (e.children.length !== 1 || e.children[0] !== n))
      return (
        st(t) +
        `...
` +
        gs(n, t + 1)
      );
    n = '';
    var l = e.fiber._debugInfo;
    if (l)
      for (var a = 0; a < l.length; a++) {
        var u = l[a].name;
        typeof u == 'string' &&
          ((n +=
            st(t) +
            '<' +
            u +
            `>
`),
          t++);
      }
    if (((l = ''), (a = e.fiber.pendingProps), e.fiber.tag === 6))
      ((l = so(a, e.serverProps, t)), t++);
    else if (((u = sh(e.fiber)), u !== null))
      if (e.serverProps === void 0) {
        l = t;
        var i = 120 - 2 * l - u.length - 2,
          o = '';
        for (s in a)
          if (a.hasOwnProperty(s) && s !== 'children') {
            var c = Aa(a[s], 15);
            if (((i -= s.length + c.length + 2), 0 > i)) {
              o += ' ...';
              break;
            }
            o += ' ' + s + '=' + c;
          }
        ((l =
          st(l) +
          '<' +
          u +
          o +
          `>
`),
          t++);
      } else
        e.serverProps === null
          ? ((l = ys(u, a, Ea(t))), t++)
          : typeof e.serverProps == 'string'
            ? console.error(
                'Should not have matched a non HostText fiber to a Text node. This is a bug in React.',
              )
            : ((l = z0(u, a, e.serverProps, t)), t++);
    var s = '';
    for (a = e.fiber.child, u = 0; a && u < e.children.length; )
      ((i = e.children[u]),
        i.fiber === a ? ((s += gs(i, t)), u++) : (s += fh(a, t)),
        (a = a.sibling));
    for (
      a &&
        0 < e.children.length &&
        (s +=
          st(t) +
          `...
`),
        a = e.serverTail,
        e.serverProps === null && t--,
        e = 0;
      e < a.length;
      e++
    )
      ((u = a[e]),
        (s =
          typeof u == 'string'
            ? s +
              (Ul(t) +
                _u(u, 120 - 2 * t) +
                `
`)
            : s + ys(u.type, u.props, Ul(t))));
    return n + l + s;
  }
  function vs(e) {
    try {
      return (
        `

` + gs(e, 0)
      );
    } catch {
      return '';
    }
  }
  function rh(e, t, n) {
    for (var l = t, a = null, u = 0; l; )
      (l === e && (u = 0),
        (a = {
          fiber: l,
          children: a !== null ? [a] : [],
          serverProps: l === t ? n : l === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: u,
        }),
        u++,
        (l = l.return));
    return a !== null ? vs(a).replaceAll(/^[+-]/gm, '>') : '';
  }
  function dh(e, t) {
    var n = V({}, e || og),
      l = { tag: t };
    return (
      ig.indexOf(t) !== -1 &&
        ((n.aTagInScope = null), (n.buttonTagInScope = null), (n.nobrTagInScope = null)),
      zS.indexOf(t) !== -1 && (n.pTagInButtonScope = null),
      RS.indexOf(t) !== -1 &&
        t !== 'address' &&
        t !== 'div' &&
        t !== 'p' &&
        ((n.listItemTagAutoclosing = null), (n.dlItemTagAutoclosing = null)),
      (n.current = l),
      t === 'form' && (n.formTag = l),
      t === 'a' && (n.aTagInScope = l),
      t === 'button' && (n.buttonTagInScope = l),
      t === 'nobr' && (n.nobrTagInScope = l),
      t === 'p' && (n.pTagInButtonScope = l),
      t === 'li' && (n.listItemTagAutoclosing = l),
      (t === 'dd' || t === 'dt') && (n.dlItemTagAutoclosing = l),
      t === '#document' || t === 'html'
        ? (n.containerTagInScope = null)
        : n.containerTagInScope || (n.containerTagInScope = l),
      e !== null || (t !== '#document' && t !== 'html' && t !== 'body')
        ? n.implicitRootScope === !0 && (n.implicitRootScope = !1)
        : (n.implicitRootScope = !0),
      n
    );
  }
  function hh(e, t, n) {
    switch (t) {
      case 'select':
        return (
          e === 'hr' ||
          e === 'option' ||
          e === 'optgroup' ||
          e === 'script' ||
          e === 'template' ||
          e === '#text'
        );
      case 'optgroup':
        return e === 'option' || e === '#text';
      case 'option':
        return e === '#text';
      case 'tr':
        return e === 'th' || e === 'td' || e === 'style' || e === 'script' || e === 'template';
      case 'tbody':
      case 'thead':
      case 'tfoot':
        return e === 'tr' || e === 'style' || e === 'script' || e === 'template';
      case 'colgroup':
        return e === 'col' || e === 'template';
      case 'table':
        return (
          e === 'caption' ||
          e === 'colgroup' ||
          e === 'tbody' ||
          e === 'tfoot' ||
          e === 'thead' ||
          e === 'style' ||
          e === 'script' ||
          e === 'template'
        );
      case 'head':
        return (
          e === 'base' ||
          e === 'basefont' ||
          e === 'bgsound' ||
          e === 'link' ||
          e === 'meta' ||
          e === 'title' ||
          e === 'noscript' ||
          e === 'noframes' ||
          e === 'style' ||
          e === 'script' ||
          e === 'template'
        );
      case 'html':
        if (n) break;
        return e === 'head' || e === 'body' || e === 'frameset';
      case 'frameset':
        return e === 'frame';
      case '#document':
        if (!n) return e === 'html';
    }
    switch (e) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return t !== 'h1' && t !== 'h2' && t !== 'h3' && t !== 'h4' && t !== 'h5' && t !== 'h6';
      case 'rp':
      case 'rt':
        return OS.indexOf(t) === -1;
      case 'caption':
      case 'col':
      case 'colgroup':
      case 'frameset':
      case 'frame':
      case 'tbody':
      case 'td':
      case 'tfoot':
      case 'th':
      case 'thead':
      case 'tr':
        return t == null;
      case 'head':
        return n || t === null;
      case 'html':
        return (n && t === '#document') || t === null;
      case 'body':
        return (n && (t === '#document' || t === 'html')) || t === null;
    }
    return !0;
  }
  function O0(e, t) {
    switch (e) {
      case 'address':
      case 'article':
      case 'aside':
      case 'blockquote':
      case 'center':
      case 'details':
      case 'dialog':
      case 'dir':
      case 'div':
      case 'dl':
      case 'fieldset':
      case 'figcaption':
      case 'figure':
      case 'footer':
      case 'header':
      case 'hgroup':
      case 'main':
      case 'menu':
      case 'nav':
      case 'ol':
      case 'p':
      case 'section':
      case 'summary':
      case 'ul':
      case 'pre':
      case 'listing':
      case 'table':
      case 'hr':
      case 'xmp':
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return t.pTagInButtonScope;
      case 'form':
        return t.formTag || t.pTagInButtonScope;
      case 'li':
        return t.listItemTagAutoclosing;
      case 'dd':
      case 'dt':
        return t.dlItemTagAutoclosing;
      case 'button':
        return t.buttonTagInScope;
      case 'a':
        return t.aTagInScope;
      case 'nobr':
        return t.nobrTagInScope;
    }
    return null;
  }
  function ph(e, t) {
    for (; e; ) {
      switch (e.tag) {
        case 5:
        case 26:
        case 27:
          if (e.type === t) return e;
      }
      e = e.return;
    }
    return null;
  }
  function bs(e, t) {
    t = t || og;
    var n = t.current;
    if (
      ((t = (n = hh(e, n && n.tag, t.implicitRootScope) ? null : n) ? null : O0(e, t)),
      (t = n || t),
      !t)
    )
      return !0;
    var l = t.tag;
    if (((t = String(!!n) + '|' + e + '|' + l), pc[t])) return !1;
    pc[t] = !0;
    var a = (t = gt) ? ph(t.return, l) : null,
      u = t !== null && a !== null ? rh(a, t, null) : '',
      i = '<' + e + '>';
    return (
      n
        ? ((n = ''),
          l === 'table' &&
            e === 'tr' &&
            (n +=
              ' Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.'),
          console.error(
            `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
            i,
            l,
            n,
            u,
          ))
        : console.error(
            `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
            i,
            l,
            u,
          ),
      t &&
        ((e = t.return),
        a === null ||
          e === null ||
          (a === e && e._debugOwner === t._debugOwner) ||
          R(a, function () {
            console.error(
              `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
              l,
              i,
            );
          })),
      !1
    );
  }
  function fo(e, t, n) {
    if (n || hh('#text', t, !1)) return !0;
    if (((n = '#text|' + t), pc[n])) return !1;
    pc[n] = !0;
    var l = (n = gt) ? ph(n, t) : null;
    return (
      (n = n !== null && l !== null ? rh(l, n, n.tag !== 6 ? { children: null } : null) : ''),
      /\S/.test(e)
        ? console.error(
            `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
            t,
            n,
          )
        : console.error(
            `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
            t,
            n,
          ),
      !1
    );
  }
  function Bu(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  function C0(e) {
    return e.replace(US, function (t, n) {
      return n.toUpperCase();
    });
  }
  function mh(e, t, n) {
    var l = t.indexOf('--') === 0;
    (l ||
      (-1 < t.indexOf('-')
        ? (Xa.hasOwnProperty(t) && Xa[t]) ||
          ((Xa[t] = !0),
          console.error(
            'Unsupported style property %s. Did you mean %s?',
            t,
            C0(t.replace(MS, 'ms-')),
          ))
        : CS.test(t)
          ? (Xa.hasOwnProperty(t) && Xa[t]) ||
            ((Xa[t] = !0),
            console.error(
              'Unsupported vendor-prefixed style property %s. Did you mean %s?',
              t,
              t.charAt(0).toUpperCase() + t.slice(1),
            ))
          : !fg.test(n) ||
            (_r.hasOwnProperty(n) && _r[n]) ||
            ((_r[n] = !0),
            console.error(
              `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
              t,
              n.replace(fg, ''),
            )),
      typeof n == 'number' &&
        (isNaN(n)
          ? rg ||
            ((rg = !0),
            console.error('`NaN` is an invalid value for the `%s` css style property.', t))
          : isFinite(n) ||
            dg ||
            ((dg = !0),
            console.error('`Infinity` is an invalid value for the `%s` css style property.', t)))),
      n == null || typeof n == 'boolean' || n === ''
        ? l
          ? e.setProperty(t, '')
          : t === 'float'
            ? (e.cssFloat = '')
            : (e[t] = '')
        : l
          ? e.setProperty(t, n)
          : typeof n != 'number' || n === 0 || hg.has(t)
            ? t === 'float'
              ? (e.cssFloat = n)
              : (us(n, t), (e[t] = ('' + n).trim()))
            : (e[t] = n + 'px'));
  }
  function yh(e, t, n) {
    if (t != null && typeof t != 'object')
      throw Error(
        "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
      );
    if ((t && Object.freeze(t), (e = e.style), n != null)) {
      if (t) {
        var l = {};
        if (n) {
          for (var a in n)
            if (n.hasOwnProperty(a) && !t.hasOwnProperty(a))
              for (var u = xr[a] || [a], i = 0; i < u.length; i++) l[u[i]] = a;
        }
        for (var o in t)
          if (t.hasOwnProperty(o) && (!n || n[o] !== t[o]))
            for (a = xr[o] || [o], u = 0; u < a.length; u++) l[a[u]] = o;
        o = {};
        for (var c in t) for (a = xr[c] || [c], u = 0; u < a.length; u++) o[a[u]] = c;
        c = {};
        for (var s in l)
          if (((a = l[s]), (u = o[s]) && a !== u && ((i = a + ',' + u), !c[i]))) {
            ((c[i] = !0), (i = console));
            var p = t[a];
            i.error.call(
              i,
              "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
              p == null || typeof p == 'boolean' || p === '' ? 'Removing' : 'Updating',
              a,
              u,
            );
          }
      }
      for (var m in n)
        !n.hasOwnProperty(m) ||
          (t != null && t.hasOwnProperty(m)) ||
          (m.indexOf('--') === 0
            ? e.setProperty(m, '')
            : m === 'float'
              ? (e.cssFloat = '')
              : (e[m] = ''));
      for (var h in t) ((s = t[h]), t.hasOwnProperty(h) && n[h] !== s && mh(e, h, s));
    } else for (l in t) t.hasOwnProperty(l) && mh(e, l, t[l]);
  }
  function qu(e) {
    if (e.indexOf('-') === -1) return !1;
    switch (e) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  function gh(e) {
    return HS.get(e) || e;
  }
  function M0(e, t) {
    if (Cn.call(Za, t) && Za[t]) return !0;
    if (_S.test(t)) {
      if (
        ((e = 'aria-' + t.slice(4).toLowerCase()), (e = pg.hasOwnProperty(e) ? e : null), e == null)
      )
        return (
          console.error(
            'Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.',
            t,
          ),
          (Za[t] = !0)
        );
      if (t !== e)
        return (
          console.error('Invalid ARIA attribute `%s`. Did you mean `%s`?', t, e),
          (Za[t] = !0)
        );
    }
    if (xS.test(t)) {
      if (((e = t.toLowerCase()), (e = pg.hasOwnProperty(e) ? e : null), e == null))
        return ((Za[t] = !0), !1);
      t !== e &&
        (console.error('Unknown ARIA attribute `%s`. Did you mean `%s`?', t, e), (Za[t] = !0));
    }
    return !0;
  }
  function U0(e, t) {
    var n = [],
      l;
    for (l in t) M0(e, l) || n.push(l);
    ((t = n
      .map(function (a) {
        return '`' + a + '`';
      })
      .join(', ')),
      n.length === 1
        ? console.error(
            'Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props',
            t,
            e,
          )
        : 1 < n.length &&
          console.error(
            'Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props',
            t,
            e,
          ));
  }
  function H0(e, t, n, l) {
    if (Cn.call(ke, t) && ke[t]) return !0;
    var a = t.toLowerCase();
    if (a === 'onfocusin' || a === 'onfocusout')
      return (
        console.error(
          'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.',
        ),
        (ke[t] = !0)
      );
    if (
      typeof n == 'function' &&
      ((e === 'form' && t === 'action') ||
        (e === 'input' && t === 'formAction') ||
        (e === 'button' && t === 'formAction'))
    )
      return !0;
    if (l != null) {
      if (((e = l.possibleRegistrationNames), l.registrationNameDependencies.hasOwnProperty(t)))
        return !0;
      if (((l = e.hasOwnProperty(a) ? e[a] : null), l != null))
        return (
          console.error('Invalid event handler property `%s`. Did you mean `%s`?', t, l),
          (ke[t] = !0)
        );
      if (yg.test(t))
        return (
          console.error('Unknown event handler property `%s`. It will be ignored.', t),
          (ke[t] = !0)
        );
    } else if (yg.test(t))
      return (
        wS.test(t) &&
          console.error(
            'Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.',
            t,
          ),
        (ke[t] = !0)
      );
    if (BS.test(t) || qS.test(t)) return !0;
    if (a === 'innerhtml')
      return (
        console.error(
          'Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.',
        ),
        (ke[t] = !0)
      );
    if (a === 'aria')
      return (
        console.error(
          'The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead.',
        ),
        (ke[t] = !0)
      );
    if (a === 'is' && n !== null && n !== void 0 && typeof n != 'string')
      return (
        console.error(
          'Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.',
          typeof n,
        ),
        (ke[t] = !0)
      );
    if (typeof n == 'number' && isNaN(n))
      return (
        console.error(
          'Received NaN for the `%s` attribute. If this is expected, cast the value to a string.',
          t,
        ),
        (ke[t] = !0)
      );
    if (yc.hasOwnProperty(a)) {
      if (((a = yc[a]), a !== t))
        return (console.error('Invalid DOM property `%s`. Did you mean `%s`?', t, a), (ke[t] = !0));
    } else if (t !== a)
      return (
        console.error(
          'React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.',
          t,
          a,
        ),
        (ke[t] = !0)
      );
    switch (t) {
      case 'dangerouslySetInnerHTML':
      case 'children':
      case 'style':
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        return !0;
      case 'innerText':
      case 'textContent':
        return !0;
    }
    switch (typeof n) {
      case 'boolean':
        switch (t) {
          case 'autoFocus':
          case 'checked':
          case 'multiple':
          case 'muted':
          case 'selected':
          case 'contentEditable':
          case 'spellCheck':
          case 'draggable':
          case 'value':
          case 'autoReverse':
          case 'externalResourcesRequired':
          case 'focusable':
          case 'preserveAlpha':
          case 'allowFullScreen':
          case 'async':
          case 'autoPlay':
          case 'controls':
          case 'default':
          case 'defer':
          case 'disabled':
          case 'disablePictureInPicture':
          case 'disableRemotePlayback':
          case 'formNoValidate':
          case 'hidden':
          case 'loop':
          case 'noModule':
          case 'noValidate':
          case 'open':
          case 'playsInline':
          case 'readOnly':
          case 'required':
          case 'reversed':
          case 'scoped':
          case 'seamless':
          case 'itemScope':
          case 'capture':
          case 'download':
          case 'inert':
            return !0;
          default:
            return (
              (a = t.toLowerCase().slice(0, 5)),
              a === 'data-' || a === 'aria-'
                ? !0
                : (n
                    ? console.error(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                        n,
                        t,
                        t,
                        n,
                        t,
                      )
                    : console.error(
                        'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                        n,
                        t,
                        t,
                        n,
                        t,
                        t,
                        t,
                      ),
                  (ke[t] = !0))
            );
        }
      case 'function':
      case 'symbol':
        return ((ke[t] = !0), !1);
      case 'string':
        if (n === 'false' || n === 'true') {
          switch (t) {
            case 'checked':
            case 'selected':
            case 'multiple':
            case 'muted':
            case 'allowFullScreen':
            case 'async':
            case 'autoPlay':
            case 'controls':
            case 'default':
            case 'defer':
            case 'disabled':
            case 'disablePictureInPicture':
            case 'disableRemotePlayback':
            case 'formNoValidate':
            case 'hidden':
            case 'loop':
            case 'noModule':
            case 'noValidate':
            case 'open':
            case 'playsInline':
            case 'readOnly':
            case 'required':
            case 'reversed':
            case 'scoped':
            case 'seamless':
            case 'itemScope':
            case 'inert':
              break;
            default:
              return !0;
          }
          (console.error(
            'Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?',
            n,
            t,
            n === 'false'
              ? 'The browser will interpret it as a truthy value.'
              : 'Although this works, it will not work as expected if you pass the string "false".',
            t,
            n,
          ),
            (ke[t] = !0));
        }
    }
    return !0;
  }
  function x0(e, t, n) {
    var l = [],
      a;
    for (a in t) H0(e, a, t[a], n) || l.push(a);
    ((t = l
      .map(function (u) {
        return '`' + u + '`';
      })
      .join(', ')),
      l.length === 1
        ? console.error(
            'Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ',
            t,
            e,
          )
        : 1 < l.length &&
          console.error(
            'Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ',
            t,
            e,
          ));
  }
  function Nu(e) {
    return NS.test('' + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function bn() {}
  function Ss(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  function vh(e) {
    var t = Zn(e);
    if (t && (e = t.stateNode)) {
      var n = e[$e] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case 'input':
          if (
            (hs(
              e,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (t = n.name),
            n.type === 'radio' && t != null)
          ) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              ae(t, 'name'),
                n = n.querySelectorAll('input[name="' + At('' + t) + '"][type="radio"]'),
                t = 0;
              t < n.length;
              t++
            ) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[$e] || null;
                if (!a)
                  throw Error(
                    'ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.',
                  );
                hs(
                  l,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name,
                );
              }
            }
            for (t = 0; t < n.length; t++) ((l = n[t]), l.form === e.form && Pd(l));
          }
          break e;
        case 'textarea':
          ih(e, n.value, n.defaultValue);
          break e;
        case 'select':
          ((t = n.value), t != null && Ta(e, !!n.multiple, t, !1));
      }
    }
  }
  function bh(e, t, n) {
    if (wr) return e(t, n);
    wr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((wr = !1),
        (Ja !== null || $a !== null) &&
          (_a(), Ja && ((t = Ja), (e = $a), ($a = Ja = null), vh(t), e)))
      )
        for (t = 0; t < e.length; t++) vh(e[t]);
    }
  }
  function Vu(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[$e] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((l = !l.disabled) ||
          ((e = e.type),
          (l = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
          (e = !l));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function')
      throw Error(
        'Expected `' +
          t +
          '` listener to be a function, instead got a value of `' +
          typeof n +
          '` type.',
      );
    return n;
  }
  function Sh() {
    if (gc) return gc;
    var e,
      t = qr,
      n = t.length,
      l,
      a = 'value' in sl ? sl.value : sl.textContent,
      u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++);
    var i = n - e;
    for (l = 1; l <= i && t[n - l] === a[u - l]; l++);
    return (gc = a.slice(e, 1 < l ? 1 - l : void 0));
  }
  function ro(e) {
    var t = e.keyCode;
    return (
      'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function ho() {
    return !0;
  }
  function Th() {
    return !1;
  }
  function tt(e) {
    function t(n, l, a, u, i) {
      ((this._reactName = n),
        (this._targetInst = a),
        (this.type = l),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var o in e) e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(u) : u[o]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? ho
          : Th),
        (this.isPropagationStopped = Th),
        this
      );
    }
    return (
      V(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
            (this.isDefaultPrevented = ho));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
            (this.isPropagationStopped = ho));
        },
        persist: function () {},
        isPersistent: ho,
      }),
      t
    );
  }
  function _0(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = WS[e]) ? !!t[e] : !1;
  }
  function Ts() {
    return _0;
  }
  function Eh(e, t) {
    switch (e) {
      case 'keyup':
        return c1.indexOf(t.keyCode) !== -1;
      case 'keydown':
        return t.keyCode !== Sg;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function Ah(e) {
    return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null);
  }
  function w0(e, t) {
    switch (e) {
      case 'compositionend':
        return Ah(t);
      case 'keypress':
        return t.which !== Eg ? null : ((Dg = !0), Ag);
      case 'textInput':
        return ((e = t.data), e === Ag && Dg ? null : e);
      default:
        return null;
    }
  }
  function B0(e, t) {
    if (ka)
      return e === 'compositionend' || (!Lr && Eh(e, t))
        ? ((e = Sh()), (gc = qr = sl = null), (ka = !1), e)
        : null;
    switch (e) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case 'compositionend':
        return Tg && t.locale !== 'ko' ? null : t.data;
      default:
        return null;
    }
  }
  function Dh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!f1[e.type] : t === 'textarea';
  }
  function q0(e) {
    if (!dn) return !1;
    e = 'on' + e;
    var t = e in document;
    return (
      t ||
        ((t = document.createElement('div')),
        t.setAttribute(e, 'return;'),
        (t = typeof t[e] == 'function')),
      t
    );
  }
  function Rh(e, t, n, l) {
    (Ja ? ($a ? $a.push(l) : ($a = [l])) : (Ja = l),
      (t = Po(t, 'onChange')),
      0 < t.length &&
        ((n = new vc('onChange', 'change', null, n, l)), e.push({ event: n, listeners: t })));
  }
  function N0(e) {
    Im(e, 0);
  }
  function po(e) {
    var t = xu(e);
    if (Pd(t)) return e;
  }
  function zh(e, t) {
    if (e === 'change') return t;
  }
  function Oh() {
    Si && (Si.detachEvent('onpropertychange', Ch), (Ti = Si = null));
  }
  function Ch(e) {
    if (e.propertyName === 'value' && po(Ti)) {
      var t = [];
      (Rh(t, Ti, e, Ss(e)), bh(N0, t));
    }
  }
  function V0(e, t, n) {
    e === 'focusin'
      ? (Oh(), (Si = t), (Ti = n), Si.attachEvent('onpropertychange', Ch))
      : e === 'focusout' && Oh();
  }
  function Y0(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return po(Ti);
  }
  function L0(e, t) {
    if (e === 'click') return po(t);
  }
  function j0(e, t) {
    if (e === 'input' || e === 'change') return po(t);
  }
  function G0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  function Yu(e, t) {
    if (Ke(e, t)) return !0;
    if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
    var n = Object.keys(e),
      l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Cn.call(t, a) || !Ke(e[a], t[a])) return !1;
    }
    return !0;
  }
  function Mh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Uh(e, t) {
    var n = Mh(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (((l = e + n.textContent.length), e <= t && l >= t)) return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Mh(n);
    }
  }
  function Hh(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? Hh(e, t.parentNode)
            : 'contains' in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function xh(e) {
    e =
      e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = co(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == 'string';
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = co(e.document);
    }
    return t;
  }
  function Es(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === 'input' &&
        (e.type === 'text' ||
          e.type === 'search' ||
          e.type === 'tel' ||
          e.type === 'url' ||
          e.type === 'password')) ||
        t === 'textarea' ||
        e.contentEditable === 'true')
    );
  }
  function _h(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gr ||
      Ka == null ||
      Ka !== co(l) ||
      ((l = Ka),
      'selectionStart' in l && Es(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = ((l.ownerDocument && l.ownerDocument.defaultView) || window).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (Ei && Yu(Ei, l)) ||
        ((Ei = l),
        (l = Po(jr, 'onSelect')),
        0 < l.length &&
          ((t = new vc('onSelect', 'select', null, t, n)),
          e.push({ event: t, listeners: l }),
          (t.target = Ka))));
  }
  function Hl(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n['Webkit' + e] = 'webkit' + t),
      (n['Moz' + e] = 'moz' + t),
      n
    );
  }
  function xl(e) {
    if (Xr[e]) return Xr[e];
    if (!Wa[e]) return e;
    var t = Wa[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in zg) return (Xr[e] = t[n]);
    return e;
  }
  function Vt(e, t) {
    (Hg.set(e, t), Ml(t, [e]));
  }
  function mo() {
    for (var e = Fa, t = (Jr = Fa = 0); t < e; ) {
      var n = zt[t];
      zt[t++] = null;
      var l = zt[t];
      zt[t++] = null;
      var a = zt[t];
      zt[t++] = null;
      var u = zt[t];
      if (((zt[t++] = null), l !== null && a !== null)) {
        var i = l.pending;
        (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)), (l.pending = a));
      }
      u !== 0 && wh(n, a, u);
    }
  }
  function yo(e, t, n, l) {
    ((zt[Fa++] = e),
      (zt[Fa++] = t),
      (zt[Fa++] = n),
      (zt[Fa++] = l),
      (Jr |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l));
  }
  function As(e, t, n, l) {
    return (yo(e, t, n, l), go(e));
  }
  function Ze(e, t) {
    return (yo(e, null, null, t), go(e));
  }
  function wh(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, u = e.return; u !== null; )
      ((u.childLanes |= n),
        (l = u.alternate),
        l !== null && (l.childLanes |= n),
        u.tag === 22 && ((e = u.stateNode), e === null || e._visibility & Ai || (a = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        a &&
          t !== null &&
          ((a = 31 - Je(n)),
          (e = u.hiddenUpdates),
          (l = e[a]),
          l === null ? (e[a] = [t]) : l.push(t),
          (t.lane = n | 536870912)),
        u)
      : null;
  }
  function go(e) {
    if (Zi > B1)
      throw (
        (aa = Zi = 0),
        (Ji = Td = null),
        Error(
          'Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.',
        )
      );
    (aa > q1 &&
      ((aa = 0),
      (Ji = null),
      console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.",
      )),
      e.alternate === null && e.flags & 4098 && Zm(e));
    for (var t = e, n = t.return; n !== null; )
      (t.alternate === null && t.flags & 4098 && Zm(e), (t = n), (n = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  function _l(e) {
    if (Ot === null) return e;
    var t = Ot(e);
    return t === void 0 ? e : t.current;
  }
  function Ds(e) {
    if (Ot === null) return e;
    var t = Ot(e);
    return t === void 0
      ? e != null && typeof e.render == 'function' && ((t = _l(e.render)), e.render !== t)
        ? ((t = { $$typeof: ri, render: t }),
          e.displayName !== void 0 && (t.displayName = e.displayName),
          t)
        : e
      : t.current;
  }
  function Bh(e, t) {
    if (Ot === null) return !1;
    var n = e.elementType;
    t = t.type;
    var l = !1,
      a = typeof t == 'object' && t !== null ? t.$$typeof : null;
    switch (e.tag) {
      case 1:
        typeof t == 'function' && (l = !0);
        break;
      case 0:
        (typeof t == 'function' || a === yt) && (l = !0);
        break;
      case 11:
        (a === ri || a === yt) && (l = !0);
        break;
      case 14:
      case 15:
        (a === sc || a === yt) && (l = !0);
        break;
      default:
        return !1;
    }
    return !!(l && ((e = Ot(n)), e !== void 0 && e === Ot(t)));
  }
  function qh(e) {
    Ot !== null && typeof WeakSet == 'function' && (Ia === null && (Ia = new WeakSet()), Ia.add(e));
  }
  function Nh(e, t, n) {
    do {
      var l = e,
        a = l.alternate,
        u = l.child,
        i = l.sibling,
        o = l.tag;
      l = l.type;
      var c = null;
      switch (o) {
        case 0:
        case 15:
        case 1:
          c = l;
          break;
        case 11:
          c = l.render;
      }
      if (Ot === null) throw Error('Expected resolveFamily to be set during hot reload.');
      var s = !1;
      if (
        ((l = !1),
        c !== null &&
          ((c = Ot(c)),
          c !== void 0 && (n.has(c) ? (l = !0) : t.has(c) && (o === 1 ? (l = !0) : (s = !0)))),
        Ia !== null && (Ia.has(e) || (a !== null && Ia.has(a))) && (l = !0),
        l && (e._debugNeedsRemount = !0),
        (l || s) && ((a = Ze(e, 2)), a !== null && de(a, e, 2)),
        u === null || l || Nh(u, t, n),
        i === null)
      )
        break;
      e = i;
    } while (!0);
  }
  function X0(e, t, n, l) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null),
      (this.actualDuration = -0),
      (this.actualStartTime = -1.1),
      (this.treeBaseDuration = this.selfBaseDuration = -0),
      (this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null),
      (this._debugNeedsRemount = !1),
      (this._debugHookTypes = null),
      wg || typeof Object.preventExtensions != 'function' || Object.preventExtensions(this));
  }
  function Rs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Sn(e, t) {
    var n = e.alternate;
    switch (
      (n === null
        ? ((n = Qe(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n._debugOwner = e._debugOwner),
          (n._debugStack = e._debugStack),
          (n._debugTask = e._debugTask),
          (n._debugHookTypes = e._debugHookTypes),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null),
          (n.actualDuration = -0),
          (n.actualStartTime = -1.1)),
      (n.flags = e.flags & 65011712),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null
          ? null
          : {
              lanes: t.lanes,
              firstContext: t.firstContext,
              _debugThenableState: t._debugThenableState,
            }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      (n.refCleanup = e.refCleanup),
      (n.selfBaseDuration = e.selfBaseDuration),
      (n.treeBaseDuration = e.treeBaseDuration),
      (n._debugInfo = e._debugInfo),
      (n._debugNeedsRemount = e._debugNeedsRemount),
      n.tag)
    ) {
      case 0:
      case 15:
        n.type = _l(e.type);
        break;
      case 1:
        n.type = _l(e.type);
        break;
      case 11:
        n.type = Ds(e.type);
    }
    return n;
  }
  function Vh(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return (
      n === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null),
          (e.selfBaseDuration = 0),
          (e.treeBaseDuration = 0))
        : ((e.childLanes = n.childLanes),
          (e.lanes = n.lanes),
          (e.child = n.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = n.memoizedProps),
          (e.memoizedState = n.memoizedState),
          (e.updateQueue = n.updateQueue),
          (e.type = n.type),
          (t = n.dependencies),
          (e.dependencies =
            t === null
              ? null
              : {
                  lanes: t.lanes,
                  firstContext: t.firstContext,
                  _debugThenableState: t._debugThenableState,
                }),
          (e.selfBaseDuration = n.selfBaseDuration),
          (e.treeBaseDuration = n.treeBaseDuration)),
      e
    );
  }
  function zs(e, t, n, l, a, u) {
    var i = 0,
      o = e;
    if (typeof e == 'function') (Rs(e) && (i = 1), (o = _l(o)));
    else if (typeof e == 'string')
      ((i = _()), (i = Kb(e, n, i) ? 26 : e === 'html' || e === 'head' || e === 'body' ? 27 : 5));
    else
      e: switch (e) {
        case Sr:
          return ((t = Qe(31, n, t, a)), (t.elementType = Sr), (t.lanes = u), t);
        case La:
          return wl(n.children, a, u, t);
        case cc:
          ((i = 8), (a |= Xe), (a |= Gt));
          break;
        case yr:
          return (
            (e = n),
            (l = a),
            typeof e.id != 'string' &&
              console.error(
                'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
                typeof e.id,
              ),
            (t = Qe(12, e, t, l | Ee)),
            (t.elementType = yr),
            (t.lanes = u),
            (t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }),
            t
          );
        case vr:
          return ((t = Qe(13, n, t, a)), (t.elementType = vr), (t.lanes = u), t);
        case br:
          return ((t = Qe(19, n, t, a)), (t.elementType = br), (t.lanes = u), t);
        default:
          if (typeof e == 'object' && e !== null)
            switch (e.$$typeof) {
              case on:
                i = 10;
                break e;
              case gr:
                i = 9;
                break e;
              case ri:
                ((i = 11), (o = Ds(o)));
                break e;
              case sc:
                i = 14;
                break e;
              case yt:
                ((i = 16), (o = null));
                break e;
            }
          ((o = ''),
            (e === void 0 || (typeof e == 'object' && e !== null && Object.keys(e).length === 0)) &&
              (o +=
                " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),
            e === null
              ? (n = 'null')
              : Ne(e)
                ? (n = 'array')
                : e !== void 0 && e.$$typeof === al
                  ? ((n = '<' + (fe(e.type) || 'Unknown') + ' />'),
                    (o = ' Did you accidentally export a JSX literal instead of a component?'))
                  : (n = typeof e),
            (i = l ? gn(l) : null) &&
              (o +=
                `

Check the render method of \`` +
                i +
                '`.'),
            (i = 29),
            (n = Error(
              'Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: ' +
                (n + '.' + o),
            )),
            (o = null));
      }
    return (
      (t = Qe(i, n, t, a)),
      (t.elementType = e),
      (t.type = o),
      (t.lanes = u),
      (t._debugOwner = l),
      t
    );
  }
  function vo(e, t, n) {
    return (
      (t = zs(e.type, e.key, e.props, e._owner, t, n)),
      (t._debugOwner = e._owner),
      (t._debugStack = e._debugStack),
      (t._debugTask = e._debugTask),
      t
    );
  }
  function wl(e, t, n, l) {
    return ((e = Qe(7, e, l, t)), (e.lanes = n), e);
  }
  function Os(e, t, n) {
    return ((e = Qe(6, e, null, t)), (e.lanes = n), e);
  }
  function Yh(e) {
    var t = Qe(18, null, null, I);
    return ((t.stateNode = e), t);
  }
  function Cs(e, t, n) {
    return (
      (t = Qe(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function ft(e, t) {
    if (typeof e == 'object' && e !== null) {
      var n = $r.get(e);
      return n !== void 0 ? n : ((t = { value: e, source: t, stack: Nd(t) }), $r.set(e, t), t);
    }
    return { value: e, source: t, stack: Nd(t) };
  }
  function Tn(e, t) {
    (Jn(), (Pa[eu++] = Di), (Pa[eu++] = Sc), (Sc = e), (Di = t));
  }
  function Lh(e, t, n) {
    (Jn(), (Ct[Mt++] = Hn), (Ct[Mt++] = xn), (Ct[Mt++] = Jl), (Jl = e));
    var l = Hn;
    e = xn;
    var a = 32 - Je(l) - 1;
    ((l &= ~(1 << a)), (n += 1));
    var u = 32 - Je(t) + a;
    if (30 < u) {
      var i = a - (a % 5);
      ((u = (l & ((1 << i) - 1)).toString(32)),
        (l >>= i),
        (a -= i),
        (Hn = (1 << (32 - Je(t) + a)) | (n << a) | l),
        (xn = u + e));
    } else ((Hn = (1 << u) | (n << a) | l), (xn = e));
  }
  function Ms(e) {
    (Jn(), e.return !== null && (Tn(e, 1), Lh(e, 1, 0)));
  }
  function Us(e) {
    for (; e === Sc; ) ((Sc = Pa[--eu]), (Pa[eu] = null), (Di = Pa[--eu]), (Pa[eu] = null));
    for (; e === Jl; )
      ((Jl = Ct[--Mt]),
        (Ct[Mt] = null),
        (xn = Ct[--Mt]),
        (Ct[Mt] = null),
        (Hn = Ct[--Mt]),
        (Ct[Mt] = null));
  }
  function jh() {
    return (Jn(), Jl !== null ? { id: Hn, overflow: xn } : null);
  }
  function Gh(e, t) {
    (Jn(),
      (Ct[Mt++] = Hn),
      (Ct[Mt++] = xn),
      (Ct[Mt++] = Jl),
      (Hn = t.id),
      (xn = t.overflow),
      (Jl = e));
  }
  function Jn() {
    j || console.error('Expected to be hydrating. This is a bug in React. Please file an issue.');
  }
  function Bl(e, t) {
    if (e.return === null) {
      if (vt === null)
        vt = { fiber: e, children: [], serverProps: void 0, serverTail: [], distanceFromLeaf: t };
      else {
        if (vt.fiber !== e)
          throw Error('Saw multiple hydration diff roots in a pass. This is a bug in React.');
        vt.distanceFromLeaf > t && (vt.distanceFromLeaf = t);
      }
      return vt;
    }
    var n = Bl(e.return, t + 1).children;
    return 0 < n.length && n[n.length - 1].fiber === e
      ? ((n = n[n.length - 1]), n.distanceFromLeaf > t && (n.distanceFromLeaf = t), n)
      : ((t = { fiber: e, children: [], serverProps: void 0, serverTail: [], distanceFromLeaf: t }),
        n.push(t),
        t);
  }
  function Xh() {
    j &&
      console.error('We should not be hydrating here. This is a bug in React. Please file a bug.');
  }
  function bo(e, t) {
    hn ||
      ((e = Bl(e, 0)), (e.serverProps = null), t !== null && ((t = my(t)), e.serverTail.push(t)));
  }
  function $n(e) {
    var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1,
      n = '',
      l = vt;
    throw (
      l !== null && ((vt = null), (n = vs(l))),
      Lu(
        ft(
          Error(
            'Hydration failed because the server rendered ' +
              (t ? 'text' : 'HTML') +
              ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` +
              n,
          ),
          e,
        ),
      ),
      kr
    );
  }
  function Qh(e) {
    var t = e.stateNode,
      n = e.type,
      l = e.memoizedProps;
    switch (((t[Ve] = e), (t[$e] = l), Wf(n, l), n)) {
      case 'dialog':
        (X('cancel', t), X('close', t));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        X('load', t);
        break;
      case 'video':
      case 'audio':
        for (n = 0; n < $i.length; n++) X($i[n], t);
        break;
      case 'source':
        X('error', t);
        break;
      case 'img':
      case 'image':
      case 'link':
        (X('error', t), X('load', t));
        break;
      case 'details':
        X('toggle', t);
        break;
      case 'input':
        (Sa('input', l),
          X('invalid', t),
          eh(t, l),
          th(t, l.value, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name, !0));
        break;
      case 'option':
        nh(t, l);
        break;
      case 'select':
        (Sa('select', l), X('invalid', t), ah(t, l));
        break;
      case 'textarea':
        (Sa('textarea', l), X('invalid', t), uh(t, l), oh(t, l.value, l.defaultValue, l.children));
    }
    ((n = l.children),
      (typeof n != 'string' && typeof n != 'number' && typeof n != 'bigint') ||
      t.textContent === '' + n ||
      l.suppressHydrationWarning === !0 ||
      ny(t.textContent, n)
        ? (l.popover != null && (X('beforetoggle', t), X('toggle', t)),
          l.onScroll != null && X('scroll', t),
          l.onScrollEnd != null && X('scrollend', t),
          l.onClick != null && (t.onclick = bn),
          (t = !0))
        : (t = !1),
      t || $n(e, !0));
  }
  function Zh(e) {
    for (Ye = e.return; Ye; )
      switch (Ye.tag) {
        case 5:
        case 31:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          Ye = Ye.return;
      }
  }
  function Da(e) {
    if (e !== Ye) return !1;
    if (!j) return (Zh(e), (j = !0), !1);
    var t = e.tag,
      n;
    if (
      ((n = t !== 3 && t !== 27) &&
        ((n = t === 5) &&
          ((n = e.type), (n = !(n !== 'form' && n !== 'button') || tr(e.type, e.memoizedProps))),
        (n = !n)),
      n && ue)
    ) {
      for (n = ue; n; ) {
        var l = Bl(e, 0),
          a = my(n);
        (l.serverTail.push(a), (n = a.type === 'Suspense' ? ur(n) : mt(n.nextSibling)));
      }
      $n(e);
    }
    if ((Zh(e), t === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(
          'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.',
        );
      ue = ur(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(
          'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.',
        );
      ue = ur(e);
    } else
      t === 27
        ? ((t = ue), ll(e.type) ? ((e = _d), (_d = null), (ue = e)) : (ue = t))
        : (ue = Ye ? mt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ql() {
    ((ue = Ye = null), (hn = j = !1));
  }
  function Hs() {
    var e = rl;
    return (e !== null && (Pe === null ? (Pe = e) : Pe.push.apply(Pe, e), (rl = null)), e);
  }
  function Lu(e) {
    rl === null ? (rl = [e]) : rl.push(e);
  }
  function xs() {
    var e = vt;
    if (e !== null) {
      vt = null;
      for (var t = vs(e); 0 < e.children.length; ) e = e.children[0];
      R(e.fiber, function () {
        console.error(
          `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
          'https://react.dev/link/hydration-mismatch',
          t,
        );
      });
    }
  }
  function So() {
    ((tu = Tc = null), (nu = !1));
  }
  function kn(e, t, n) {
    (Z(Kr, t._currentValue, e),
      (t._currentValue = n),
      Z(Wr, t._currentRenderer, e),
      t._currentRenderer !== void 0 &&
        t._currentRenderer !== null &&
        t._currentRenderer !== qg &&
        console.error(
          'Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.',
        ),
      (t._currentRenderer = qg));
  }
  function En(e, t) {
    e._currentValue = Kr.current;
    var n = Wr.current;
    (re(Wr, t), (e._currentRenderer = n), re(Kr, t));
  }
  function _s(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
    e !== n &&
      console.error(
        'Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.',
      );
  }
  function ws(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var i = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var o = u;
          u = a;
          for (var c = 0; c < t.length; c++)
            if (o.context === t[c]) {
              ((u.lanes |= n),
                (o = u.alternate),
                o !== null && (o.lanes |= n),
                _s(u.return, n, e),
                l || (i = null));
              break e;
            }
          u = o.next;
        }
      } else if (a.tag === 18) {
        if (((i = a.return), i === null))
          throw Error(
            'We just came from a parent so we must have had a parent. This is a bug in React.',
          );
        ((i.lanes |= n), (u = i.alternate), u !== null && (u.lanes |= n), _s(i, n, e), (i = null));
      } else i = a.child;
      if (i !== null) i.return = a;
      else
        for (i = a; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (((a = i.sibling), a !== null)) {
            ((a.return = i.return), (i = a));
            break;
          }
          i = i.return;
        }
      a = i;
    }
  }
  function Ra(e, t, n, l) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if (a.flags & 524288) u = !0;
        else if (a.flags & 262144) break;
      }
      if (a.tag === 10) {
        var i = a.alternate;
        if (i === null) throw Error('Should have a current fiber. This is a bug in React.');
        if (((i = i.memoizedProps), i !== null)) {
          var o = a.type;
          Ke(a.pendingProps.value, i.value) || (e !== null ? e.push(o) : (e = [o]));
        }
      } else if (a === fc.current) {
        if (((i = a.alternate), i === null))
          throw Error('Should have a current fiber. This is a bug in React.');
        i.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
          (e !== null ? e.push(Ii) : (e = [Ii]));
      }
      a = a.return;
    }
    (e !== null && ws(t, e, n, l), (t.flags |= 262144));
  }
  function To(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ke(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Nl(e) {
    ((Tc = e), (tu = null), (e = e.dependencies), e !== null && (e.firstContext = null));
  }
  function oe(e) {
    return (
      nu &&
        console.error(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
        ),
      Jh(Tc, e)
    );
  }
  function Eo(e, t) {
    return (Tc === null && Nl(e), Jh(e, t));
  }
  function Jh(e, t) {
    var n = t._currentValue;
    if (((t = { context: t, memoizedValue: n, next: null }), tu === null)) {
      if (e === null)
        throw Error(
          'Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().',
        );
      ((tu = t),
        (e.dependencies = { lanes: 0, firstContext: t, _debugThenableState: null }),
        (e.flags |= 524288));
    } else tu = tu.next = t;
    return n;
  }
  function Bs() {
    return { controller: new b1(), data: new Map(), refCount: 0 };
  }
  function Vl(e) {
    (e.controller.signal.aborted &&
      console.warn(
        'A cache instance was retained after it was already freed. This likely indicates a bug in React.',
      ),
      e.refCount++);
  }
  function ju(e) {
    (e.refCount--,
      0 > e.refCount &&
        console.warn(
          'A cache instance was released after it was already freed. This likely indicates a bug in React.',
        ),
      e.refCount === 0 &&
        S1(T1, function () {
          e.controller.abort();
        }));
  }
  function An() {
    var e = $l;
    return (($l = 0), e);
  }
  function Ao(e) {
    var t = $l;
    return (($l = e), t);
  }
  function Gu(e) {
    var t = $l;
    return (($l += e), t);
  }
  function rt() {
    var e = _n;
    return ((_n = -1.1), e);
  }
  function dt(e) {
    0 <= e && (_n = e);
  }
  function qs(e) {
    ((We = lu()), 0 > e.actualStartTime && (e.actualStartTime = We));
  }
  function Ns(e) {
    if (0 <= We) {
      var t = lu() - We;
      ((e.actualDuration += t), (e.selfBaseDuration = t), (We = -1));
    }
  }
  function $h(e) {
    if (0 <= We) {
      var t = lu() - We;
      ((e.actualDuration += t), (We = -1));
    }
  }
  function It() {
    if (0 <= We) {
      var e = lu() - We;
      ((We = -1), ($l += e));
    }
  }
  function Pt() {
    ((We = lu()), 0 > _n && (_n = We));
  }
  function Xu(e) {
    for (var t = e.child; t; ) ((e.actualDuration += t.actualDuration), (t = t.sibling));
  }
  function Q0(e, t) {
    if (Ri === null) {
      var n = (Ri = []);
      ((Fr = 0),
        (kl = Jf()),
        (au = {
          status: 'pending',
          value: void 0,
          then: function (l) {
            n.push(l);
          },
        }));
    }
    return (Fr++, t.then(kh, kh), t);
  }
  function kh() {
    if (--Fr === 0 && Ri !== null) {
      au !== null && (au.status = 'fulfilled');
      var e = Ri;
      ((Ri = null), (kl = 0), (au = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Z0(e, t) {
    var n = [],
      l = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (a) {
          n.push(a);
        },
      };
    return (
      e.then(
        function () {
          ((l.status = 'fulfilled'), (l.value = t));
          for (var a = 0; a < n.length; a++) (0, n[a])(t);
        },
        function (a) {
          for (l.status = 'rejected', l.reason = a, a = 0; a < n.length; a++) (0, n[a])(void 0);
        },
      ),
      l
    );
  }
  function Vs() {
    var e = Kl.current;
    return e !== null ? e : ee.pooledCache;
  }
  function Do(e, t) {
    t === null ? Z(Kl, Kl.current, e) : Z(Kl, t.pool, e);
  }
  function Kh() {
    var e = Vs();
    return e === null ? null : { parent: Ae._currentValue, pool: e };
  }
  function Wh() {
    return { didWarnAboutUncachedPromise: !1, thenables: [] };
  }
  function Fh(e) {
    return ((e = e.status), e === 'fulfilled' || e === 'rejected');
  }
  function Ih(e, t, n) {
    y.actQueue !== null && (y.didUsePromise = !0);
    var l = e.thenables;
    if (
      ((n = l[n]),
      n === void 0
        ? l.push(t)
        : n !== t &&
          (e.didWarnAboutUncachedPromise ||
            ((e.didWarnAboutUncachedPromise = !0),
            console.error(
              'A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.',
            )),
          t.then(bn, bn),
          (t = n)),
      t._debugInfo === void 0)
    ) {
      ((e = performance.now()), (l = t.displayName));
      var a = { name: typeof l == 'string' ? l : 'Promise', start: e, end: e, value: t };
      ((t._debugInfo = [{ awaited: a }]),
        t.status !== 'fulfilled' &&
          t.status !== 'rejected' &&
          ((e = function () {
            a.end = performance.now();
          }),
          t.then(e, e)));
    }
    switch (t.status) {
      case 'fulfilled':
        return t.value;
      case 'rejected':
        throw ((e = t.reason), ep(e), e);
      default:
        if (typeof t.status == 'string') t.then(bn, bn);
        else {
          if (((e = ee), e !== null && 100 < e.shellSuspendCounter))
            throw Error(
              "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
            );
          ((e = t),
            (e.status = 'pending'),
            e.then(
              function (u) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'fulfilled'), (i.value = u));
                }
              },
              function (u) {
                if (t.status === 'pending') {
                  var i = t;
                  ((i.status = 'rejected'), (i.reason = u));
                }
              },
            ));
        }
        switch (t.status) {
          case 'fulfilled':
            return t.value;
          case 'rejected':
            throw ((e = t.reason), ep(e), e);
        }
        throw ((Fl = t), (xi = !0), uu);
    }
  }
  function Kn(e) {
    try {
      return R1(e);
    } catch (t) {
      throw t !== null && typeof t == 'object' && typeof t.then == 'function'
        ? ((Fl = t), (xi = !0), uu)
        : t;
    }
  }
  function Ph() {
    if (Fl === null)
      throw Error('Expected a suspended thenable. This is a bug in React. Please file an issue.');
    var e = Fl;
    return ((Fl = null), (xi = !1), e);
  }
  function ep(e) {
    if (e === uu || e === zc)
      throw Error(
        "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
      );
  }
  function we(e) {
    var t = N;
    return (e != null && (N = t === null ? e : t.concat(e)), t);
  }
  function Ro(e, t, n) {
    for (var l = Object.keys(e.props), a = 0; a < l.length; a++) {
      var u = l[a];
      if (u !== 'children' && u !== 'key') {
        (t === null && ((t = vo(e, n.mode, 0)), (t._debugInfo = N), (t.return = n)),
          R(
            t,
            function (i) {
              console.error(
                'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                i,
              );
            },
            u,
          ));
        break;
      }
    }
  }
  function zo(e) {
    var t = _i;
    return ((_i += 1), iu === null && (iu = Wh()), Ih(iu, e, t));
  }
  function Qu(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Oo(e, t) {
    throw t.$$typeof === oS
      ? Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`)
      : ((e = Object.prototype.toString.call(t)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e) +
            '). If you meant to render a collection of children, use an array instead.',
        ));
  }
  function Co(e, t) {
    var n = H(e) || 'Component';
    ev[n] ||
      ((ev[n] = !0),
      (t = t.displayName || t.name || 'Component'),
      e.tag === 3
        ? console.error(
            `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
            t,
            t,
            t,
          )
        : console.error(
            `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
            t,
            t,
            n,
            t,
            n,
          ));
  }
  function Mo(e, t) {
    var n = H(e) || 'Component';
    tv[n] ||
      ((tv[n] = !0),
      (t = String(t)),
      e.tag === 3
        ? console.error(
            `Symbols are not valid as a React child.
  root.render(%s)`,
            t,
          )
        : console.error(
            `Symbols are not valid as a React child.
  <%s>%s</%s>`,
            n,
            t,
            n,
          ));
  }
  function tp(e) {
    function t(f, r) {
      if (e) {
        var d = f.deletions;
        d === null ? ((f.deletions = [r]), (f.flags |= 16)) : d.push(r);
      }
    }
    function n(f, r) {
      if (!e) return null;
      for (; r !== null; ) (t(f, r), (r = r.sibling));
      return null;
    }
    function l(f) {
      for (var r = new Map(); f !== null; )
        (f.key !== null ? r.set(f.key, f) : r.set(f.index, f), (f = f.sibling));
      return r;
    }
    function a(f, r) {
      return ((f = Sn(f, r)), (f.index = 0), (f.sibling = null), f);
    }
    function u(f, r, d) {
      return (
        (f.index = d),
        e
          ? ((d = f.alternate),
            d !== null
              ? ((d = d.index), d < r ? ((f.flags |= 67108866), r) : d)
              : ((f.flags |= 67108866), r))
          : ((f.flags |= 1048576), r)
      );
    }
    function i(f) {
      return (e && f.alternate === null && (f.flags |= 67108866), f);
    }
    function o(f, r, d, b) {
      return r === null || r.tag !== 6
        ? ((r = Os(d, f.mode, b)),
          (r.return = f),
          (r._debugOwner = f),
          (r._debugTask = f._debugTask),
          (r._debugInfo = N),
          r)
        : ((r = a(r, d)), (r.return = f), (r._debugInfo = N), r);
    }
    function c(f, r, d, b) {
      var T = d.type;
      return T === La
        ? ((r = p(f, r, d.props.children, b, d.key)), Ro(d, r, f), r)
        : r !== null &&
            (r.elementType === T ||
              Bh(r, d) ||
              (typeof T == 'object' && T !== null && T.$$typeof === yt && Kn(T) === r.type))
          ? ((r = a(r, d.props)),
            Qu(r, d),
            (r.return = f),
            (r._debugOwner = d._owner),
            (r._debugInfo = N),
            r)
          : ((r = vo(d, f.mode, b)), Qu(r, d), (r.return = f), (r._debugInfo = N), r);
    }
    function s(f, r, d, b) {
      return r === null ||
        r.tag !== 4 ||
        r.stateNode.containerInfo !== d.containerInfo ||
        r.stateNode.implementation !== d.implementation
        ? ((r = Cs(d, f.mode, b)), (r.return = f), (r._debugInfo = N), r)
        : ((r = a(r, d.children || [])), (r.return = f), (r._debugInfo = N), r);
    }
    function p(f, r, d, b, T) {
      return r === null || r.tag !== 7
        ? ((r = wl(d, f.mode, b, T)),
          (r.return = f),
          (r._debugOwner = f),
          (r._debugTask = f._debugTask),
          (r._debugInfo = N),
          r)
        : ((r = a(r, d)), (r.return = f), (r._debugInfo = N), r);
    }
    function m(f, r, d) {
      if ((typeof r == 'string' && r !== '') || typeof r == 'number' || typeof r == 'bigint')
        return (
          (r = Os('' + r, f.mode, d)),
          (r.return = f),
          (r._debugOwner = f),
          (r._debugTask = f._debugTask),
          (r._debugInfo = N),
          r
        );
      if (typeof r == 'object' && r !== null) {
        switch (r.$$typeof) {
          case al:
            return (
              (d = vo(r, f.mode, d)),
              Qu(d, r),
              (d.return = f),
              (f = we(r._debugInfo)),
              (d._debugInfo = N),
              (N = f),
              d
            );
          case Ya:
            return ((r = Cs(r, f.mode, d)), (r.return = f), (r._debugInfo = N), r);
          case yt:
            var b = we(r._debugInfo);
            return ((r = Kn(r)), (f = m(f, r, d)), (N = b), f);
        }
        if (Ne(r) || Wt(r))
          return (
            (d = wl(r, f.mode, d, null)),
            (d.return = f),
            (d._debugOwner = f),
            (d._debugTask = f._debugTask),
            (f = we(r._debugInfo)),
            (d._debugInfo = N),
            (N = f),
            d
          );
        if (typeof r.then == 'function')
          return ((b = we(r._debugInfo)), (f = m(f, zo(r), d)), (N = b), f);
        if (r.$$typeof === on) return m(f, Eo(f, r), d);
        Oo(f, r);
      }
      return (typeof r == 'function' && Co(f, r), typeof r == 'symbol' && Mo(f, r), null);
    }
    function h(f, r, d, b) {
      var T = r !== null ? r.key : null;
      if ((typeof d == 'string' && d !== '') || typeof d == 'number' || typeof d == 'bigint')
        return T !== null ? null : o(f, r, '' + d, b);
      if (typeof d == 'object' && d !== null) {
        switch (d.$$typeof) {
          case al:
            return d.key === T ? ((T = we(d._debugInfo)), (f = c(f, r, d, b)), (N = T), f) : null;
          case Ya:
            return d.key === T ? s(f, r, d, b) : null;
          case yt:
            return ((T = we(d._debugInfo)), (d = Kn(d)), (f = h(f, r, d, b)), (N = T), f);
        }
        if (Ne(d) || Wt(d))
          return T !== null
            ? null
            : ((T = we(d._debugInfo)), (f = p(f, r, d, b, null)), (N = T), f);
        if (typeof d.then == 'function')
          return ((T = we(d._debugInfo)), (f = h(f, r, zo(d), b)), (N = T), f);
        if (d.$$typeof === on) return h(f, r, Eo(f, d), b);
        Oo(f, d);
      }
      return (typeof d == 'function' && Co(f, d), typeof d == 'symbol' && Mo(f, d), null);
    }
    function v(f, r, d, b, T) {
      if ((typeof b == 'string' && b !== '') || typeof b == 'number' || typeof b == 'bigint')
        return ((f = f.get(d) || null), o(r, f, '' + b, T));
      if (typeof b == 'object' && b !== null) {
        switch (b.$$typeof) {
          case al:
            return (
              (d = f.get(b.key === null ? d : b.key) || null),
              (f = we(b._debugInfo)),
              (r = c(r, d, b, T)),
              (N = f),
              r
            );
          case Ya:
            return ((f = f.get(b.key === null ? d : b.key) || null), s(r, f, b, T));
          case yt:
            var U = we(b._debugInfo);
            return ((b = Kn(b)), (r = v(f, r, d, b, T)), (N = U), r);
        }
        if (Ne(b) || Wt(b))
          return (
            (d = f.get(d) || null),
            (f = we(b._debugInfo)),
            (r = p(r, d, b, T, null)),
            (N = f),
            r
          );
        if (typeof b.then == 'function')
          return ((U = we(b._debugInfo)), (r = v(f, r, d, zo(b), T)), (N = U), r);
        if (b.$$typeof === on) return v(f, r, d, Eo(r, b), T);
        Oo(r, b);
      }
      return (typeof b == 'function' && Co(r, b), typeof b == 'symbol' && Mo(r, b), null);
    }
    function D(f, r, d, b) {
      if (typeof d != 'object' || d === null) return b;
      switch (d.$$typeof) {
        case al:
        case Ya:
          to(f, r, d);
          var T = d.key;
          if (typeof T != 'string') break;
          if (b === null) {
            ((b = new Set()), b.add(T));
            break;
          }
          if (!b.has(T)) {
            b.add(T);
            break;
          }
          R(r, function () {
            console.error(
              'Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.',
              T,
            );
          });
          break;
        case yt:
          ((d = Kn(d)), D(f, r, d, b));
      }
      return b;
    }
    function M(f, r, d, b) {
      for (
        var T = null, U = null, C = null, O = r, B = (r = 0), ie = null;
        O !== null && B < d.length;
        B++
      ) {
        O.index > B ? ((ie = O), (O = null)) : (ie = O.sibling);
        var Se = h(f, O, d[B], b);
        if (Se === null) {
          O === null && (O = ie);
          break;
        }
        ((T = D(f, Se, d[B], T)),
          e && O && Se.alternate === null && t(f, O),
          (r = u(Se, r, B)),
          C === null ? (U = Se) : (C.sibling = Se),
          (C = Se),
          (O = ie));
      }
      if (B === d.length) return (n(f, O), j && Tn(f, B), U);
      if (O === null) {
        for (; B < d.length; B++)
          ((O = m(f, d[B], b)),
            O !== null &&
              ((T = D(f, O, d[B], T)),
              (r = u(O, r, B)),
              C === null ? (U = O) : (C.sibling = O),
              (C = O)));
        return (j && Tn(f, B), U);
      }
      for (O = l(O); B < d.length; B++)
        ((ie = v(O, f, B, d[B], b)),
          ie !== null &&
            ((T = D(f, ie, d[B], T)),
            e && ie.alternate !== null && O.delete(ie.key === null ? B : ie.key),
            (r = u(ie, r, B)),
            C === null ? (U = ie) : (C.sibling = ie),
            (C = ie)));
      return (
        e &&
          O.forEach(function (jn) {
            return t(f, jn);
          }),
        j && Tn(f, B),
        U
      );
    }
    function ne(f, r, d, b) {
      if (d == null) throw Error('An iterable object provided no iterator.');
      for (
        var T = null, U = null, C = r, O = (r = 0), B = null, ie = null, Se = d.next();
        C !== null && !Se.done;
        O++, Se = d.next()
      ) {
        C.index > O ? ((B = C), (C = null)) : (B = C.sibling);
        var jn = h(f, C, Se.value, b);
        if (jn === null) {
          C === null && (C = B);
          break;
        }
        ((ie = D(f, jn, Se.value, ie)),
          e && C && jn.alternate === null && t(f, C),
          (r = u(jn, r, O)),
          U === null ? (T = jn) : (U.sibling = jn),
          (U = jn),
          (C = B));
      }
      if (Se.done) return (n(f, C), j && Tn(f, O), T);
      if (C === null) {
        for (; !Se.done; O++, Se = d.next())
          ((C = m(f, Se.value, b)),
            C !== null &&
              ((ie = D(f, C, Se.value, ie)),
              (r = u(C, r, O)),
              U === null ? (T = C) : (U.sibling = C),
              (U = C)));
        return (j && Tn(f, O), T);
      }
      for (C = l(C); !Se.done; O++, Se = d.next())
        ((B = v(C, f, O, Se.value, b)),
          B !== null &&
            ((ie = D(f, B, Se.value, ie)),
            e && B.alternate !== null && C.delete(B.key === null ? O : B.key),
            (r = u(B, r, O)),
            U === null ? (T = B) : (U.sibling = B),
            (U = B)));
      return (
        e &&
          C.forEach(function (W1) {
            return t(f, W1);
          }),
        j && Tn(f, O),
        T
      );
    }
    function Q(f, r, d, b) {
      if (
        (typeof d == 'object' &&
          d !== null &&
          d.type === La &&
          d.key === null &&
          (Ro(d, null, f), (d = d.props.children)),
        typeof d == 'object' && d !== null)
      ) {
        switch (d.$$typeof) {
          case al:
            var T = we(d._debugInfo);
            e: {
              for (var U = d.key; r !== null; ) {
                if (r.key === U) {
                  if (((U = d.type), U === La)) {
                    if (r.tag === 7) {
                      (n(f, r.sibling),
                        (b = a(r, d.props.children)),
                        (b.return = f),
                        (b._debugOwner = d._owner),
                        (b._debugInfo = N),
                        Ro(d, b, f),
                        (f = b));
                      break e;
                    }
                  } else if (
                    r.elementType === U ||
                    Bh(r, d) ||
                    (typeof U == 'object' && U !== null && U.$$typeof === yt && Kn(U) === r.type)
                  ) {
                    (n(f, r.sibling),
                      (b = a(r, d.props)),
                      Qu(b, d),
                      (b.return = f),
                      (b._debugOwner = d._owner),
                      (b._debugInfo = N),
                      (f = b));
                    break e;
                  }
                  n(f, r);
                  break;
                } else t(f, r);
                r = r.sibling;
              }
              d.type === La
                ? ((b = wl(d.props.children, f.mode, b, d.key)),
                  (b.return = f),
                  (b._debugOwner = f),
                  (b._debugTask = f._debugTask),
                  (b._debugInfo = N),
                  Ro(d, b, f),
                  (f = b))
                : ((b = vo(d, f.mode, b)), Qu(b, d), (b.return = f), (b._debugInfo = N), (f = b));
            }
            return ((f = i(f)), (N = T), f);
          case Ya:
            e: {
              for (T = d, d = T.key; r !== null; ) {
                if (r.key === d)
                  if (
                    r.tag === 4 &&
                    r.stateNode.containerInfo === T.containerInfo &&
                    r.stateNode.implementation === T.implementation
                  ) {
                    (n(f, r.sibling), (b = a(r, T.children || [])), (b.return = f), (f = b));
                    break e;
                  } else {
                    n(f, r);
                    break;
                  }
                else t(f, r);
                r = r.sibling;
              }
              ((b = Cs(T, f.mode, b)), (b.return = f), (f = b));
            }
            return i(f);
          case yt:
            return ((T = we(d._debugInfo)), (d = Kn(d)), (f = Q(f, r, d, b)), (N = T), f);
        }
        if (Ne(d)) return ((T = we(d._debugInfo)), (f = M(f, r, d, b)), (N = T), f);
        if (Wt(d)) {
          if (((T = we(d._debugInfo)), (U = Wt(d)), typeof U != 'function'))
            throw Error(
              'An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.',
            );
          var C = U.call(d);
          return (
            C === d
              ? (f.tag !== 0 ||
                  Object.prototype.toString.call(f.type) !== '[object GeneratorFunction]' ||
                  Object.prototype.toString.call(C) !== '[object Generator]') &&
                (Ig ||
                  console.error(
                    'Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items.',
                  ),
                (Ig = !0))
              : d.entries !== U ||
                td ||
                (console.error(
                  'Using Maps as children is not supported. Use an array of keyed ReactElements instead.',
                ),
                (td = !0)),
            (f = ne(f, r, C, b)),
            (N = T),
            f
          );
        }
        if (typeof d.then == 'function')
          return ((T = we(d._debugInfo)), (f = Q(f, r, zo(d), b)), (N = T), f);
        if (d.$$typeof === on) return Q(f, r, Eo(f, d), b);
        Oo(f, d);
      }
      return (typeof d == 'string' && d !== '') || typeof d == 'number' || typeof d == 'bigint'
        ? ((T = '' + d),
          r !== null && r.tag === 6
            ? (n(f, r.sibling), (b = a(r, T)), (b.return = f), (f = b))
            : (n(f, r),
              (b = Os(T, f.mode, b)),
              (b.return = f),
              (b._debugOwner = f),
              (b._debugTask = f._debugTask),
              (b._debugInfo = N),
              (f = b)),
          i(f))
        : (typeof d == 'function' && Co(f, d), typeof d == 'symbol' && Mo(f, d), n(f, r));
    }
    return function (f, r, d, b) {
      var T = N;
      N = null;
      try {
        _i = 0;
        var U = Q(f, r, d, b);
        return ((iu = null), U);
      } catch (ie) {
        if (ie === uu || ie === zc) throw ie;
        var C = Qe(29, ie, null, f.mode);
        ((C.lanes = b), (C.return = f));
        var O = (C._debugInfo = N);
        if (((C._debugOwner = f._debugOwner), (C._debugTask = f._debugTask), O != null)) {
          for (var B = O.length - 1; 0 <= B; B--)
            if (typeof O[B].stack == 'string') {
              ((C._debugOwner = O[B]), (C._debugTask = O[B].debugTask));
              break;
            }
        }
        return C;
      } finally {
        N = T;
      }
    };
  }
  function np(e, t) {
    var n = Ne(e);
    return (
      (e = !n && typeof Wt(e) == 'function'),
      n || e
        ? ((n = n ? 'array' : 'iterable'),
          console.error(
            'A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>',
            n,
            t,
            n,
          ),
          !1)
        : !0
    );
  }
  function Ys(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ls(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Wn(e) {
    return { lane: e, tag: lv, payload: null, callback: null, next: null };
  }
  function Fn(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), ld === l && !iv)) {
      var a = H(e);
      (console.error(
        `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
        a,
      ),
        (iv = !0));
    }
    return (k & Ie) !== ot
      ? ((a = l.pending),
        a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
        (l.pending = t),
        (t = go(e)),
        wh(e, null, n),
        t)
      : (yo(e, l, t, n), go(e));
  }
  function Zu(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Zd(e, n));
    }
  }
  function Uo(e, t) {
    var n = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), n === l)) {
      var a = null,
        u = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var i = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null };
          (u === null ? (a = u = i) : (u = u.next = i), (n = n.next));
        } while (n !== null);
        u === null ? (a = u = t) : (u = u.next = t);
      } else a = u = t;
      ((n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function Ju() {
    if (ad) {
      var e = au;
      if (e !== null) throw e;
    }
  }
  function $u(e, t, n, l) {
    ad = !1;
    var a = e.updateQueue;
    ((dl = !1), (ld = a.shared));
    var u = a.firstBaseUpdate,
      i = a.lastBaseUpdate,
      o = a.shared.pending;
    if (o !== null) {
      a.shared.pending = null;
      var c = o,
        s = c.next;
      ((c.next = null), i === null ? (u = s) : (i.next = s), (i = c));
      var p = e.alternate;
      p !== null &&
        ((p = p.updateQueue),
        (o = p.lastBaseUpdate),
        o !== i && (o === null ? (p.firstBaseUpdate = s) : (o.next = s), (p.lastBaseUpdate = c)));
    }
    if (u !== null) {
      var m = a.baseState;
      ((i = 0), (p = s = c = null), (o = u));
      do {
        var h = o.lane & -536870913,
          v = h !== o.lane;
        if (v ? (G & h) === h : (l & h) === h) {
          (h !== 0 && h === kl && (ad = !0),
            p !== null &&
              (p = p.next =
                { lane: 0, tag: o.tag, payload: o.payload, callback: null, next: null }));
          e: {
            h = e;
            var D = o,
              M = t,
              ne = n;
            switch (D.tag) {
              case av:
                if (((D = D.payload), typeof D == 'function')) {
                  nu = !0;
                  var Q = D.call(ne, m, M);
                  if (h.mode & Xe) {
                    ce(!0);
                    try {
                      D.call(ne, m, M);
                    } finally {
                      ce(!1);
                    }
                  }
                  ((nu = !1), (m = Q));
                  break e;
                }
                m = D;
                break e;
              case nd:
                h.flags = (h.flags & -65537) | 128;
              case lv:
                if (((Q = D.payload), typeof Q == 'function')) {
                  if (((nu = !0), (D = Q.call(ne, m, M)), h.mode & Xe)) {
                    ce(!0);
                    try {
                      Q.call(ne, m, M);
                    } finally {
                      ce(!1);
                    }
                  }
                  nu = !1;
                } else D = Q;
                if (D == null) break e;
                m = V({}, m, D);
                break e;
              case uv:
                dl = !0;
            }
          }
          ((h = o.callback),
            h !== null &&
              ((e.flags |= 64),
              v && (e.flags |= 8192),
              (v = a.callbacks),
              v === null ? (a.callbacks = [h]) : v.push(h)));
        } else
          ((v = { lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }),
            p === null ? ((s = p = v), (c = m)) : (p = p.next = v),
            (i |= h));
        if (((o = o.next), o === null)) {
          if (((o = a.shared.pending), o === null)) break;
          ((v = o),
            (o = v.next),
            (v.next = null),
            (a.lastBaseUpdate = v),
            (a.shared.pending = null));
        }
      } while (!0);
      (p === null && (c = m),
        (a.baseState = c),
        (a.firstBaseUpdate = s),
        (a.lastBaseUpdate = p),
        u === null && (a.shared.lanes = 0),
        (pl |= i),
        (e.lanes = i),
        (e.memoizedState = m));
    }
    ld = null;
  }
  function lp(e, t) {
    if (typeof e != 'function')
      throw Error(
        'Invalid argument passed as callback. Expected a function. Instead received: ' + e,
      );
    e.call(t);
  }
  function J0(e, t) {
    var n = e.shared.hiddenCallbacks;
    if (n !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < n.length; e++) lp(n[e], t);
  }
  function ap(e, t) {
    var n = e.callbacks;
    if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) lp(n[e], t);
  }
  function up(e, t) {
    var n = mn;
    (Z(Cc, n, e), Z(ou, t, e), (mn = n | t.baseLanes));
  }
  function js(e) {
    (Z(Cc, mn, e), Z(ou, ou.current, e));
  }
  function Gs(e) {
    ((mn = Cc.current), re(ou, e), re(Cc, e));
  }
  function In(e) {
    var t = e.alternate;
    (Z(ve, ve.current & cu, e),
      Z(bt, e, e),
      Ht === null && (t === null || ou.current !== null || t.memoizedState !== null) && (Ht = e));
  }
  function Xs(e) {
    (Z(ve, ve.current, e), Z(bt, e, e), Ht === null && (Ht = e));
  }
  function ip(e) {
    e.tag === 22 ? (Z(ve, ve.current, e), Z(bt, e, e), Ht === null && (Ht = e)) : Pn(e);
  }
  function Pn(e) {
    (Z(ve, ve.current, e), Z(bt, bt.current, e));
  }
  function ht(e) {
    (re(bt, e), Ht === e && (Ht = null), re(ve, e));
  }
  function Ho(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || lr(n) || ar(n))) return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === 'forwards' ||
          t.memoizedProps.revealOrder === 'backwards' ||
          t.memoizedProps.revealOrder === 'unstable_legacy-backwards' ||
          t.memoizedProps.revealOrder === 'together')
      ) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  function L() {
    var e = g;
    wt === null ? (wt = [e]) : wt.push(e);
  }
  function S() {
    var e = g;
    if (wt !== null && (qn++, wt[qn] !== e)) {
      var t = H(w);
      if (!ov.has(t) && (ov.add(t), wt !== null)) {
        for (var n = '', l = 0; l <= qn; l++) {
          var a = wt[l],
            u = l === qn ? e : a;
          for (a = l + 1 + '. ' + a; 30 > a.length; ) a += ' ';
          ((a +=
            u +
            `
`),
            (n += a));
        }
        console.error(
          `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
          t,
          n,
        );
      }
    }
  }
  function za(e) {
    e == null ||
      Ne(e) ||
      console.error(
        '%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.',
        g,
        typeof e,
      );
  }
  function xo() {
    var e = H(w);
    sv.has(e) ||
      (sv.add(e),
      console.error(
        'ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.',
        e,
      ));
  }
  function ge() {
    throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`);
  }
  function Qs(e, t) {
    if (qi) return !1;
    if (t === null)
      return (
        console.error(
          '%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.',
          g,
        ),
        !1
      );
    e.length !== t.length &&
      console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        g,
        '[' + t.join(', ') + ']',
        '[' + e.join(', ') + ']',
      );
    for (var n = 0; n < t.length && n < e.length; n++) if (!Ke(e[n], t[n])) return !1;
    return !0;
  }
  function Zs(e, t, n, l, a, u) {
    ((wn = u),
      (w = t),
      (wt = e !== null ? e._debugHookTypes : null),
      (qn = -1),
      (qi = e !== null && e.type !== t.type),
      (Object.prototype.toString.call(n) === '[object AsyncFunction]' ||
        Object.prototype.toString.call(n) === '[object AsyncGeneratorFunction]') &&
        ((u = H(w)),
        ud.has(u) ||
          (ud.add(u),
          console.error(
            "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
            u === null ? 'An unknown Component' : '<' + u + '>',
          ))),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (y.H = e !== null && e.memoizedState !== null ? od : wt !== null ? fv : id),
      (Pl = u = (t.mode & Xe) !== I));
    var i = Ir(n, l, a);
    if (((Pl = !1), fu && (i = Js(t, n, l, a)), u)) {
      ce(!0);
      try {
        i = Js(t, n, l, a);
      } finally {
        ce(!1);
      }
    }
    return (op(e, t), i);
  }
  function op(e, t) {
    ((t._debugHookTypes = wt),
      t.dependencies === null
        ? Bn !== null &&
          (t.dependencies = { lanes: 0, firstContext: null, _debugThenableState: Bn })
        : (t.dependencies._debugThenableState = Bn),
      (y.H = Hc));
    var n = P !== null && P.next !== null;
    if (
      ((wn = 0),
      (wt = g = De = P = w = null),
      (qn = -1),
      e !== null &&
        (e.flags & 65011712) !== (t.flags & 65011712) &&
        console.error(
          'Internal React error: Expected static flag was missing. Please notify the React team.',
        ),
      (Mc = !1),
      (Bi = 0),
      (Bn = null),
      n)
    )
      throw Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.',
      );
    (e === null || Re || ((e = e.dependencies), e !== null && To(e) && (Re = !0)),
      xi ? ((xi = !1), (e = !0)) : (e = !1),
      e &&
        ((t = H(t) || 'Unknown'),
        cv.has(t) ||
          ud.has(t) ||
          (cv.add(t),
          console.error(
            '`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.',
          ))));
  }
  function Js(e, t, n, l) {
    w = e;
    var a = 0;
    do {
      if ((fu && (Bn = null), (Bi = 0), (fu = !1), a >= O1))
        throw Error(
          'Too many re-renders. React limits the number of renders to prevent an infinite loop.',
        );
      if (((a += 1), (qi = !1), (De = P = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((qn = -1), (y.H = rv), (u = Ir(t, n, l)));
    } while (fu);
    return u;
  }
  function $0() {
    var e = y.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == 'function' ? ku(t) : t),
      (e = e.useState()[0]),
      (P !== null ? P.memoizedState : null) !== e && (w.flags |= 1024),
      t
    );
  }
  function $s() {
    var e = Uc !== 0;
    return ((Uc = 0), e);
  }
  function ks(e, t, n) {
    ((t.updateQueue = e.updateQueue),
      (t.flags = (t.mode & Gt) !== I ? t.flags & -402655237 : t.flags & -2053),
      (e.lanes &= ~n));
  }
  function Ks(e) {
    if (Mc) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Mc = !1;
    }
    ((wn = 0),
      (wt = De = P = w = null),
      (qn = -1),
      (g = null),
      (fu = !1),
      (Bi = Uc = 0),
      (Bn = null));
  }
  function nt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return (De === null ? (w.memoizedState = De = e) : (De = De.next = e), De);
  }
  function W() {
    if (P === null) {
      var e = w.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = P.next;
    var t = De === null ? w.memoizedState : De.next;
    if (t !== null) ((De = t), (P = e));
    else {
      if (e === null)
        throw w.alternate === null
          ? Error(
              'Update hook called on initial render. This is likely a bug in React. Please file an issue.',
            )
          : Error('Rendered more hooks than during the previous render.');
      ((P = e),
        (e = {
          memoizedState: P.memoizedState,
          baseState: P.baseState,
          baseQueue: P.baseQueue,
          queue: P.queue,
          next: null,
        }),
        De === null ? (w.memoizedState = De = e) : (De = De.next = e));
    }
    return De;
  }
  function Ws() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ku(e) {
    var t = Bi;
    return (
      (Bi += 1),
      Bn === null && (Bn = Wh()),
      (e = Ih(Bn, e, t)),
      (t = w),
      (De === null ? t.memoizedState : De.next) === null &&
        ((t = t.alternate), (y.H = t !== null && t.memoizedState !== null ? od : id)),
      e
    );
  }
  function el(e) {
    if (e !== null && typeof e == 'object') {
      if (typeof e.then == 'function') return ku(e);
      if (e.$$typeof === on) return oe(e);
    }
    throw Error('An unsupported type was passed to use(): ' + String(e));
  }
  function Yl(e) {
    var t = null,
      n = w.updateQueue;
    if ((n !== null && (t = n.memoCache), t == null)) {
      var l = w.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (a) {
                return a.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      n === null && ((n = Ws()), (w.updateQueue = n)),
      (n.memoCache = t),
      (n = t.data[t.index]),
      n === void 0 || qi)
    )
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++) n[l] = cS;
    else
      n.length !== e &&
        console.error(
          'Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.',
          n.length,
          e,
        );
    return (t.index++, n);
  }
  function Yt(e, t) {
    return typeof t == 'function' ? t(e) : t;
  }
  function Fs(e, t, n) {
    var l = nt();
    if (n !== void 0) {
      var a = n(t);
      if (Pl) {
        ce(!0);
        try {
          n(t);
        } finally {
          ce(!1);
        }
      }
    } else a = t;
    return (
      (l.memoizedState = l.baseState = a),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a,
      }),
      (l.queue = e),
      (e = e.dispatch = F0.bind(null, w, e)),
      [l.memoizedState, e]
    );
  }
  function Oa(e) {
    var t = W();
    return Is(t, P, e);
  }
  function Is(e, t, n) {
    var l = e.queue;
    if (l === null)
      throw Error(
        'Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)',
      );
    l.lastRenderedReducer = n;
    var a = e.baseQueue,
      u = l.pending;
    if (u !== null) {
      if (a !== null) {
        var i = a.next;
        ((a.next = u.next), (u.next = i));
      }
      (t.baseQueue !== a &&
        console.error(
          'Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.',
        ),
        (t.baseQueue = a = u),
        (l.pending = null));
    }
    if (((u = e.baseState), a === null)) e.memoizedState = u;
    else {
      t = a.next;
      var o = (i = null),
        c = null,
        s = t,
        p = !1;
      do {
        var m = s.lane & -536870913;
        if (m !== s.lane ? (G & m) === m : (wn & m) === m) {
          var h = s.revertLane;
          if (h === 0)
            (c !== null &&
              (c = c.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                }),
              m === kl && (p = !0));
          else if ((wn & h) === h) {
            ((s = s.next), h === kl && (p = !0));
            continue;
          } else
            ((m = {
              lane: 0,
              revertLane: s.revertLane,
              gesture: null,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
              c === null ? ((o = c = m), (i = u)) : (c = c.next = m),
              (w.lanes |= h),
              (pl |= h));
          ((m = s.action), Pl && n(u, m), (u = s.hasEagerState ? s.eagerState : n(u, m)));
        } else
          ((h = {
            lane: m,
            revertLane: s.revertLane,
            gesture: s.gesture,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null,
          }),
            c === null ? ((o = c = h), (i = u)) : (c = c.next = h),
            (w.lanes |= m),
            (pl |= m));
        s = s.next;
      } while (s !== null && s !== t);
      if (
        (c === null ? (i = u) : (c.next = o),
        !Ke(u, e.memoizedState) && ((Re = !0), p && ((n = au), n !== null)))
      )
        throw n;
      ((e.memoizedState = u), (e.baseState = i), (e.baseQueue = c), (l.lastRenderedState = u));
    }
    return (a === null && (l.lanes = 0), [e.memoizedState, l.dispatch]);
  }
  function Ku(e) {
    var t = W(),
      n = t.queue;
    if (n === null)
      throw Error(
        'Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)',
      );
    n.lastRenderedReducer = e;
    var l = n.dispatch,
      a = n.pending,
      u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var i = (a = a.next);
      do ((u = e(u, i.action)), (i = i.next));
      while (i !== a);
      (Ke(u, t.memoizedState) || (Re = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (n.lastRenderedState = u));
    }
    return [u, l];
  }
  function Ps(e, t, n) {
    var l = w,
      a = nt();
    if (j) {
      if (n === void 0)
        throw Error(
          'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.',
        );
      var u = n();
      su ||
        u === n() ||
        (console.error(
          'The result of getServerSnapshot should be cached to avoid an infinite loop',
        ),
        (su = !0));
    } else {
      if (
        ((u = t()),
        su ||
          ((n = t()),
          Ke(u, n) ||
            (console.error('The result of getSnapshot should be cached to avoid an infinite loop'),
            (su = !0))),
        ee === null)
      )
        throw Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.',
        );
      G & 124 || cp(l, t, u);
    }
    return (
      (a.memoizedState = u),
      (n = { value: u, getSnapshot: t }),
      (a.queue = n),
      qo(fp.bind(null, l, n, e), [e]),
      (l.flags |= 2048),
      Ma(_t | Oe, { destroy: void 0 }, sp.bind(null, l, n, u, t), null),
      u
    );
  }
  function _o(e, t, n) {
    var l = w,
      a = W(),
      u = j;
    if (u) {
      if (n === void 0)
        throw Error(
          'Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.',
        );
      n = n();
    } else if (((n = t()), !su)) {
      var i = t();
      Ke(n, i) ||
        (console.error('The result of getSnapshot should be cached to avoid an infinite loop'),
        (su = !0));
    }
    ((i = !Ke((P || a).memoizedState, n)) && ((a.memoizedState = n), (Re = !0)), (a = a.queue));
    var o = fp.bind(null, l, a, e);
    if (
      (lt(2048, Oe, o, [e]), a.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & _t))
    ) {
      if (
        ((l.flags |= 2048),
        Ma(_t | Oe, { destroy: void 0 }, sp.bind(null, l, a, n, t), null),
        ee === null)
      )
        throw Error(
          'Expected a work-in-progress root. This is a bug in React. Please file an issue.',
        );
      u || wn & 124 || cp(l, t, n);
    }
    return n;
  }
  function cp(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = w.updateQueue),
      t === null
        ? ((t = Ws()), (w.updateQueue = t), (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function sp(e, t, n, l) {
    ((t.value = n), (t.getSnapshot = l), rp(t) && dp(e));
  }
  function fp(e, t, n) {
    return n(function () {
      rp(t) && dp(e);
    });
  }
  function rp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ke(e, n);
    } catch {
      return !0;
    }
  }
  function dp(e) {
    var t = Ze(e, 2);
    t !== null && de(t, e, 2);
  }
  function ef(e) {
    var t = nt();
    if (typeof e == 'function') {
      var n = e;
      if (((e = n()), Pl)) {
        ce(!0);
        try {
          n();
        } finally {
          ce(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: e,
      }),
      t
    );
  }
  function tf(e) {
    e = ef(e);
    var t = e.queue,
      n = Hp.bind(null, w, t);
    return ((t.dispatch = n), [e.memoizedState, n]);
  }
  function nf(e) {
    var t = nt();
    t.memoizedState = t.baseState = e;
    var n = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: null,
      lastRenderedState: null,
    };
    return ((t.queue = n), (t = yf.bind(null, w, !0, n)), (n.dispatch = t), [e, t]);
  }
  function hp(e, t) {
    var n = W();
    return pp(n, P, e, t);
  }
  function pp(e, t, n, l) {
    return ((e.baseState = n), Is(e, P, typeof l == 'function' ? l : Yt));
  }
  function mp(e, t) {
    var n = W();
    return P !== null ? pp(n, P, e, t) : ((n.baseState = e), [e, n.queue.dispatch]);
  }
  function k0(e, t, n, l, a) {
    if (jo(e)) throw Error('Cannot update form state while rendering.');
    if (((e = t.action), e !== null)) {
      var u = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (y.T !== null ? n(!0) : (u.isTransition = !1),
        l(u),
        (n = t.pending),
        n === null
          ? ((u.next = t.pending = u), yp(t, u))
          : ((u.next = n.next), (t.pending = n.next = u)));
    }
  }
  function yp(e, t) {
    var n = t.action,
      l = t.payload,
      a = e.state;
    if (t.isTransition) {
      var u = y.T,
        i = {};
      ((i._updatedFibers = new Set()), (y.T = i));
      try {
        var o = n(a, l),
          c = y.S;
        (c !== null && c(i, o), gp(e, t, o));
      } catch (s) {
        lf(e, t, s);
      } finally {
        (u !== null &&
          i.types !== null &&
          (u.types !== null &&
            u.types !== i.types &&
            console.error(
              'We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.',
            ),
          (u.types = i.types)),
          (y.T = u),
          u === null &&
            i._updatedFibers &&
            ((e = i._updatedFibers.size),
            i._updatedFibers.clear(),
            10 < e &&
              console.warn(
                'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.',
              )));
      }
    } else
      try {
        ((i = n(a, l)), gp(e, t, i));
      } catch (s) {
        lf(e, t, s);
      }
  }
  function gp(e, t, n) {
    n !== null && typeof n == 'object' && typeof n.then == 'function'
      ? (y.asyncTransitions++,
        n.then(Lo, Lo),
        n.then(
          function (l) {
            vp(e, t, l);
          },
          function (l) {
            return lf(e, t, l);
          },
        ),
        t.isTransition ||
          console.error(
            'An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.',
          ))
      : vp(e, t, n);
  }
  function vp(e, t, n) {
    ((t.status = 'fulfilled'),
      (t.value = n),
      bp(t),
      (e.state = n),
      (t = e.pending),
      t !== null &&
        ((n = t.next), n === t ? (e.pending = null) : ((n = n.next), (t.next = n), yp(e, n))));
  }
  function lf(e, t, n) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do ((t.status = 'rejected'), (t.reason = n), bp(t), (t = t.next));
      while (t !== l);
    }
    e.action = null;
  }
  function bp(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Sp(e, t) {
    return t;
  }
  function Ca(e, t) {
    if (j) {
      var n = ee.formState;
      if (n !== null) {
        e: {
          var l = w;
          if (j) {
            if (ue) {
              t: {
                for (var a = ue, u = Ut; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (((a = mt(a.nextSibling)), a === null)) {
                    a = null;
                    break t;
                  }
                }
                ((u = a.data), (a = u === Md || u === Zv ? a : null));
              }
              if (a) {
                ((ue = mt(a.nextSibling)), (l = a.data === Md));
                break e;
              }
            }
            $n(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return (
      (n = nt()),
      (n.memoizedState = n.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Sp,
        lastRenderedState: t,
      }),
      (n.queue = l),
      (n = Hp.bind(null, w, l)),
      (l.dispatch = n),
      (l = ef(!1)),
      (u = yf.bind(null, w, !1, l.queue)),
      (l = nt()),
      (a = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = a),
      (n = k0.bind(null, w, a, u, n)),
      (a.dispatch = n),
      (l.memoizedState = e),
      [t, n, !1]
    );
  }
  function wo(e) {
    var t = W();
    return Tp(t, P, e);
  }
  function Tp(e, t, n) {
    if (
      ((t = Is(e, t, Sp)[0]),
      (e = Oa(Yt)[0]),
      typeof t == 'object' && t !== null && typeof t.then == 'function')
    )
      try {
        var l = ku(t);
      } catch (i) {
        throw i === uu ? zc : i;
      }
    else l = t;
    t = W();
    var a = t.queue,
      u = a.dispatch;
    return (
      n !== t.memoizedState &&
        ((w.flags |= 2048), Ma(_t | Oe, { destroy: void 0 }, K0.bind(null, a, n), null)),
      [l, u, e]
    );
  }
  function K0(e, t) {
    e.action = t;
  }
  function Bo(e) {
    var t = W(),
      n = P;
    if (n !== null) return Tp(t, n, e);
    (W(), (t = t.memoizedState), (n = W()));
    var l = n.queue.dispatch;
    return ((n.memoizedState = e), [t, l, !1]);
  }
  function Ma(e, t, n, l) {
    return (
      (e = { tag: e, create: n, deps: l, inst: t, next: null }),
      (t = w.updateQueue),
      t === null && ((t = Ws()), (w.updateQueue = t)),
      (n = t.lastEffect),
      n === null
        ? (t.lastEffect = e.next = e)
        : ((l = n.next), (n.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function af(e) {
    var t = nt();
    return ((e = { current: e }), (t.memoizedState = e));
  }
  function Ll(e, t, n, l) {
    var a = nt();
    ((w.flags |= e),
      (a.memoizedState = Ma(_t | t, { destroy: void 0 }, n, l === void 0 ? null : l)));
  }
  function lt(e, t, n, l) {
    var a = W();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    P !== null && l !== null && Qs(l, P.memoizedState.deps)
      ? (a.memoizedState = Ma(t, u, n, l))
      : ((w.flags |= e), (a.memoizedState = Ma(_t | t, u, n, l)));
  }
  function qo(e, t) {
    (w.mode & Gt) !== I ? Ll(276826112, Oe, e, t) : Ll(8390656, Oe, e, t);
  }
  function uf(e, t) {
    var n = 4194308;
    return ((w.mode & Gt) !== I && (n |= 134217728), Ll(n, Le, e, t));
  }
  function Ep(e, t) {
    if (typeof t == 'function') {
      e = e();
      var n = t(e);
      return function () {
        typeof n == 'function' ? n() : t(null);
      };
    }
    if (t != null)
      return (
        t.hasOwnProperty('current') ||
          console.error(
            'Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.',
            'an object with keys {' + Object.keys(t).join(', ') + '}',
          ),
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function of(e, t, n) {
    (typeof t != 'function' &&
      console.error(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null',
      ),
      (n = n != null ? n.concat([e]) : null));
    var l = 4194308;
    ((w.mode & Gt) !== I && (l |= 134217728), Ll(l, Le, Ep.bind(null, t, e), n));
  }
  function No(e, t, n) {
    (typeof t != 'function' &&
      console.error(
        'Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.',
        t !== null ? typeof t : 'null',
      ),
      (n = n != null ? n.concat([e]) : null),
      lt(4, Le, Ep.bind(null, t, e), n));
  }
  function cf(e, t) {
    return ((nt().memoizedState = [e, t === void 0 ? null : t]), e);
  }
  function Vo(e, t) {
    var n = W();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Qs(t, l[1]) ? l[0] : ((n.memoizedState = [e, t]), e);
  }
  function sf(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var l = e();
    if (Pl) {
      ce(!0);
      try {
        e();
      } finally {
        ce(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function Yo(e, t) {
    var n = W();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Qs(t, l[1])) return l[0];
    if (((l = e()), Pl)) {
      ce(!0);
      try {
        e();
      } finally {
        ce(!1);
      }
    }
    return ((n.memoizedState = [l, t]), l);
  }
  function ff(e, t) {
    var n = nt();
    return rf(n, e, t);
  }
  function Ap(e, t) {
    var n = W();
    return Rp(n, P.memoizedState, e, t);
  }
  function Dp(e, t) {
    var n = W();
    return P === null ? rf(n, e, t) : Rp(n, P.memoizedState, e, t);
  }
  function rf(e, t, n) {
    return n === void 0 || wn & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = n), (e = Rm()), (w.lanes |= e), (pl |= e), n);
  }
  function Rp(e, t, n, l) {
    return Ke(n, t)
      ? n
      : ou.current !== null
        ? ((e = rf(e, n, l)), Ke(e, t) || (Re = !0), e)
        : !(wn & 42) || wn & 1073741824
          ? ((Re = !0), (e.memoizedState = n))
          : ((e = Rm()), (w.lanes |= e), (pl |= e), t);
  }
  function Lo() {
    y.asyncTransitions--;
  }
  function zp(e, t, n, l, a) {
    var u = $.p;
    $.p = u !== 0 && u < rn ? u : rn;
    var i = y.T,
      o = {};
    ((o._updatedFibers = new Set()), (y.T = o), yf(e, !1, t, n));
    try {
      var c = a(),
        s = y.S;
      if (
        (s !== null && s(o, c), c !== null && typeof c == 'object' && typeof c.then == 'function')
      ) {
        (y.asyncTransitions++, c.then(Lo, Lo));
        var p = Z0(c, l);
        Wu(e, t, p, pt(e));
      } else Wu(e, t, l, pt(e));
    } catch (m) {
      Wu(e, t, { then: function () {}, status: 'rejected', reason: m }, pt(e));
    } finally {
      (($.p = u),
        i !== null &&
          o.types !== null &&
          (i.types !== null &&
            i.types !== o.types &&
            console.error(
              'We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.',
            ),
          (i.types = o.types)),
        (y.T = i),
        i === null &&
          o._updatedFibers &&
          ((e = o._updatedFibers.size),
          o._updatedFibers.clear(),
          10 < e &&
            console.warn(
              'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.',
            )));
    }
  }
  function df(e, t, n, l) {
    if (e.tag !== 5)
      throw Error('Expected the form instance to be a HostComponent. This is a bug in React.');
    var a = Op(e).queue;
    zp(
      e,
      a,
      t,
      fa,
      n === null
        ? Du
        : function () {
            return (Cp(e), n(l));
          },
    );
  }
  function Op(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: fa,
      baseState: fa,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: fa,
      },
      next: null,
    };
    var n = {};
    return (
      (t.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yt,
          lastRenderedState: n,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Cp(e) {
    y.T === null &&
      console.error(
        'requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.',
      );
    var t = Op(e);
    (t.next === null && (t = e.alternate.memoizedState), Wu(e, t.next.queue, {}, pt(e)));
  }
  function hf() {
    var e = ef(!1);
    return ((e = zp.bind(null, w, e.queue, !0, !1)), (nt().memoizedState = e), [!1, e]);
  }
  function Mp() {
    var e = Oa(Yt)[0],
      t = W().memoizedState;
    return [typeof e == 'boolean' ? e : ku(e), t];
  }
  function Up() {
    var e = Ku(Yt)[0],
      t = W().memoizedState;
    return [typeof e == 'boolean' ? e : ku(e), t];
  }
  function jl() {
    return oe(Ii);
  }
  function pf() {
    var e = nt(),
      t = ee.identifierPrefix;
    if (j) {
      var n = xn,
        l = Hn;
      ((n = (l & ~(1 << (32 - Je(l) - 1))).toString(32) + n),
        (t = '_' + t + 'R_' + n),
        (n = Uc++),
        0 < n && (t += 'H' + n.toString(32)),
        (t += '_'));
    } else ((n = z1++), (t = '_' + t + 'r_' + n.toString(32) + '_'));
    return (e.memoizedState = t);
  }
  function mf() {
    return (nt().memoizedState = W0.bind(null, w));
  }
  function W0(e, t) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var l = pt(n);
          e = Wn(l);
          var a = Fn(n, e, l);
          (a !== null && (de(a, n, l), Zu(a, n, l)),
            (n = Bs()),
            t != null &&
              a !== null &&
              console.error('The seed argument is not enabled outside experimental channels.'),
            (e.payload = { cache: n }));
          return;
      }
      n = n.return;
    }
  }
  function F0(e, t, n) {
    var l = arguments;
    (typeof l[3] == 'function' &&
      console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
      ),
      (l = pt(e)));
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    (jo(e) ? xp(t, a) : ((a = As(e, t, a, l)), a !== null && (de(a, e, l), _p(a, t, l))), Mu(e, l));
  }
  function Hp(e, t, n) {
    var l = arguments;
    (typeof l[3] == 'function' &&
      console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().",
      ),
      (l = pt(e)),
      Wu(e, t, n, l),
      Mu(e, l));
  }
  function Wu(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (jo(e)) xp(t, a);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      ) {
        var i = y.H;
        y.H = Qt;
        try {
          var o = t.lastRenderedState,
            c = u(o, n);
          if (((a.hasEagerState = !0), (a.eagerState = c), Ke(c, o)))
            return (yo(e, t, a, 0), ee === null && mo(), !1);
        } catch {
        } finally {
          y.H = i;
        }
      }
      if (((n = As(e, t, a, l)), n !== null)) return (de(n, e, l), _p(n, t, l), !0);
    }
    return !1;
  }
  function yf(e, t, n, l) {
    if (
      (y.T === null &&
        kl === 0 &&
        console.error(
          'An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition.',
        ),
      (l = {
        lane: 2,
        revertLane: Jf(),
        gesture: null,
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      jo(e))
    ) {
      if (t) throw Error('Cannot update optimistic state while rendering.');
      console.error('Cannot call startTransition while rendering.');
    } else ((t = As(e, n, l, 2)), t !== null && de(t, e, 2));
    Mu(e, 2);
  }
  function jo(e) {
    var t = e.alternate;
    return e === w || (t !== null && t === w);
  }
  function xp(e, t) {
    fu = Mc = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t));
  }
  function _p(e, t, n) {
    if (n & 4194048) {
      var l = t.lanes;
      ((l &= e.pendingLanes), (n |= l), (t.lanes = n), Zd(e, n));
    }
  }
  function gf(e) {
    if (e !== null && typeof e != 'function') {
      var t = String(e);
      Ev.has(t) ||
        (Ev.add(t),
        console.error(
          'Expected the last optional `callback` argument to be a function. Instead received: %s.',
          e,
        ));
    }
  }
  function vf(e, t, n, l) {
    var a = e.memoizedState,
      u = n(l, a);
    if (e.mode & Xe) {
      ce(!0);
      try {
        u = n(l, a);
      } finally {
        ce(!1);
      }
    }
    (u === void 0 &&
      ((t = fe(t) || 'Component'),
      vv.has(t) ||
        (vv.add(t),
        console.error(
          '%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.',
          t,
        ))),
      (a = u == null ? a : V({}, a, u)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  function wp(e, t, n, l, a, u, i) {
    var o = e.stateNode;
    if (typeof o.shouldComponentUpdate == 'function') {
      if (((n = o.shouldComponentUpdate(l, u, i)), e.mode & Xe)) {
        ce(!0);
        try {
          n = o.shouldComponentUpdate(l, u, i);
        } finally {
          ce(!1);
        }
      }
      return (
        n === void 0 &&
          console.error(
            '%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.',
            fe(t) || 'Component',
          ),
        n
      );
    }
    return t.prototype && t.prototype.isPureReactComponent ? !Yu(n, l) || !Yu(a, u) : !0;
  }
  function Bp(e, t, n, l) {
    var a = t.state;
    (typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, l),
      typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
        t.UNSAFE_componentWillReceiveProps(n, l),
      t.state !== a &&
        ((e = H(e) || 'Component'),
        hv.has(e) ||
          (hv.add(e),
          console.error(
            "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
            e,
          )),
        cd.enqueueReplaceState(t, t.state, null)));
  }
  function Gl(e, t) {
    var n = t;
    if ('ref' in t) {
      n = {};
      for (var l in t) l !== 'ref' && (n[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      n === t && (n = V({}, n));
      for (var a in e) n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function qp(e) {
    (Zr(e),
      console.warn(
        `%s

%s
`,
        ru
          ? 'An error occurred in the <' + ru + '> component.'
          : 'An error occurred in one of your React components.',
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`,
      ));
  }
  function Np(e) {
    var t = ru
        ? 'The above error occurred in the <' + ru + '> component.'
        : 'The above error occurred in one of your React components.',
      n =
        'React will try to recreate this component tree from scratch using the error boundary you provided, ' +
        ((sd || 'Anonymous') + '.');
    if (typeof e == 'object' && e !== null && typeof e.environmentName == 'string') {
      var l = e.environmentName;
      ((e = [
        `%o

%s

%s
`,
        e,
        t,
        n,
      ].slice(0)),
        typeof e[0] == 'string'
          ? e.splice(0, 1, Pv + ' ' + e[0], e0, Fc + l + Fc, t0)
          : e.splice(0, 0, Pv, e0, Fc + l + Fc, t0),
        e.unshift(console),
        (l = k1.apply(console.error, e)),
        l());
    } else
      console.error(
        `%o

%s

%s
`,
        e,
        t,
        n,
      );
  }
  function Vp(e) {
    Zr(e);
  }
  function Go(e, t) {
    try {
      ((ru = t.source ? H(t.source) : null), (sd = null));
      var n = t.value;
      if (y.actQueue !== null) y.thrownErrors.push(n);
      else {
        var l = e.onUncaughtError;
        l(n, { componentStack: t.stack });
      }
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Yp(e, t, n) {
    try {
      ((ru = n.source ? H(n.source) : null), (sd = H(t)));
      var l = e.onCaughtError;
      l(n.value, { componentStack: n.stack, errorBoundary: t.tag === 1 ? t.stateNode : null });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function bf(e, t, n) {
    return (
      (n = Wn(n)),
      (n.tag = nd),
      (n.payload = { element: null }),
      (n.callback = function () {
        R(t.source, Go, e, t);
      }),
      n
    );
  }
  function Sf(e) {
    return ((e = Wn(e)), (e.tag = nd), e);
  }
  function Tf(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == 'function') {
      var u = l.value;
      ((e.payload = function () {
        return a(u);
      }),
        (e.callback = function () {
          (qh(n), R(l.source, Yp, t, n, l));
        }));
    }
    var i = n.stateNode;
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (e.callback = function () {
        (qh(n),
          R(l.source, Yp, t, n, l),
          typeof a != 'function' && (yl === null ? (yl = new Set([this])) : yl.add(this)),
          E1(this, l),
          typeof a == 'function' ||
            (!(n.lanes & 2) &&
              console.error(
                '%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.',
                H(n) || 'Unknown',
              )));
      });
  }
  function I0(e, t, n, l, a) {
    if (
      ((n.flags |= 32768),
      jt && ai(e, a),
      l !== null && typeof l == 'object' && typeof l.then == 'function')
    ) {
      if (
        ((t = n.alternate),
        t !== null && Ra(t, n, a, !0),
        j && (hn = !0),
        (n = bt.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Ht === null ? Wo() : n.alternate === null && he === Vn && (he = hd),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = a),
              l === Oc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null ? (n.updateQueue = new Set([l])) : t.add(l),
                  Gf(e, l, a)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              l === Oc
                ? (n.flags |= 16384)
                : ((t = n.updateQueue),
                  t === null
                    ? ((t = { transitions: null, markerInstances: null, retryQueue: new Set([l]) }),
                      (n.updateQueue = t))
                    : ((n = t.retryQueue), n === null ? (t.retryQueue = new Set([l])) : n.add(l)),
                  Gf(e, l, a)),
              !1
            );
        }
        throw Error('Unexpected Suspense handler tag (' + n.tag + '). This is a bug in React.');
      }
      return (Gf(e, l, a), Wo(), !1);
    }
    if (j)
      return (
        (hn = !0),
        (t = bt.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = a),
            l !== kr &&
              Lu(
                ft(
                  Error(
                    'There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.',
                    { cause: l },
                  ),
                  n,
                ),
              ))
          : (l !== kr &&
              Lu(
                ft(
                  Error(
                    'There was an error while hydrating but React was able to recover by instead client rendering the entire root.',
                    { cause: l },
                  ),
                  n,
                ),
              ),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (a &= -a),
            (e.lanes |= a),
            (l = ft(l, n)),
            (a = bf(e.stateNode, l, a)),
            Uo(e, a),
            he !== ea && (he = mu)),
        !1
      );
    var u = ft(
      Error(
        'There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.',
        { cause: l },
      ),
      n,
    );
    if ((Xi === null ? (Xi = [u]) : Xi.push(u), he !== ea && (he = mu), t === null)) return !0;
    ((l = ft(l, n)), (n = t));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (e = a & -a),
            (n.lanes |= e),
            (e = bf(n.stateNode, l, e)),
            Uo(n, e),
            !1
          );
        case 1:
          if (
            ((t = n.type),
            (u = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == 'function' ||
                (u !== null &&
                  typeof u.componentDidCatch == 'function' &&
                  (yl === null || !yl.has(u)))))
          )
            return (
              (n.flags |= 65536),
              (a &= -a),
              (n.lanes |= a),
              (a = Sf(a)),
              Tf(a, e, n, l),
              Uo(n, a),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  function Be(e, t, n, l) {
    t.child = e === null ? nv(t, null, n, l) : Il(t, e.child, n, l);
  }
  function Lp(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ('ref' in l) {
      var i = {};
      for (var o in l) o !== 'ref' && (i[o] = l[o]);
    } else i = l;
    return (
      Nl(t),
      Cu(t),
      (l = Zs(e, t, n, i, u, a)),
      (o = $s()),
      ya(),
      e !== null && !Re
        ? (ks(e, t, a), Dn(e, t, a))
        : (j && o && Ms(t), (t.flags |= 1), Be(e, t, l, a), t.child)
    );
  }
  function jp(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == 'function' && !Rs(u) && u.defaultProps === void 0 && n.compare === null
        ? ((n = _l(u)), (t.tag = 15), (t.type = n), Af(t, u), Gp(e, t, n, l, a))
        : ((e = zs(n.type, null, l, t, t.mode, a)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((u = e.child), !Mf(e, a))) {
      var i = u.memoizedProps;
      if (((n = n.compare), (n = n !== null ? n : Yu), n(i, l) && e.ref === t.ref))
        return Dn(e, t, a);
    }
    return ((t.flags |= 1), (e = Sn(u, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  function Gp(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Yu(u, l) && e.ref === t.ref && t.type === e.type)
        if (((Re = !1), (t.pendingProps = l = u), Mf(e, a))) e.flags & 131072 && (Re = !0);
        else return ((t.lanes = e.lanes), Dn(e, t, a));
    }
    return Ef(e, t, n, l, a);
  }
  function Xp(e, t, n, l) {
    var a = l.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: Ai,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      l.mode === 'hidden')
    ) {
      if (t.flags & 128) {
        if (((l = u !== null ? u.baseLanes | n : n), e !== null)) {
          for (a = t.child = e.child, u = 0; a !== null; )
            ((u = u | a.lanes | a.childLanes), (a = a.sibling));
          t.childLanes = u & ~l;
        } else ((t.childLanes = 0), (t.child = null));
        return Qp(e, t, l, n);
      }
      if (n & 536870912)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Do(t, u !== null ? u.cachePool : null),
          u !== null ? up(t, u) : js(t),
          ip(t));
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          Qp(e, t, u !== null ? u.baseLanes | n : n, n)
        );
    } else
      u !== null
        ? (Do(t, u.cachePool), up(t, u), Pn(t), (t.memoizedState = null))
        : (e !== null && Do(t, null), js(t), Pn(t));
    return (Be(e, t, a, n), t.child);
  }
  function Fu(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: Ai,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Qp(e, t, n, l) {
    var a = Vs();
    return (
      (a = a === null ? null : { parent: Ae._currentValue, pool: a }),
      (t.memoizedState = { baseLanes: n, cachePool: a }),
      e !== null && Do(t, null),
      js(t),
      ip(t),
      e !== null && Ra(e, t, l, !0),
      null
    );
  }
  function Xo(e, t) {
    var n = t.hidden;
    return (
      n !== void 0 &&
        console.error(
          `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
          n === !0 ? 'hidden' : n === !1 ? 'hidden={false}' : 'hidden={...}',
          n ? 'mode="hidden"' : 'mode="visible"',
        ),
      (t = Zo({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Zp(e, t, n) {
    return (
      Il(t, e.child, null, n),
      (e = Xo(t, t.pendingProps)),
      (e.flags |= 2),
      ht(t),
      (t.memoizedState = null),
      e
    );
  }
  function P0(e, t, n) {
    var l = t.pendingProps,
      a = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (j) {
        if (l.mode === 'hidden') return ((e = Xo(t, l)), (t.lanes = 536870912), Fu(null, e));
        if ((Xs(t), (e = ue))) {
          if (((n = py(e, Ut)), (n = n !== null && n.data === ia ? n : null), n !== null)) {
            var u = {
              dehydrated: n,
              treeContext: jh(),
              retryLane: 536870912,
              hydrationErrors: null,
            };
            ((t.memoizedState = u),
              (u = Yh(n)),
              (u.return = t),
              (t.child = u),
              (Ye = t),
              (ue = null));
          }
        } else n = null;
        if (n === null) throw (bo(t, e), $n(t));
        return ((t.lanes = 536870912), null);
      }
      return Xo(t, l);
    }
    if (((u = e.memoizedState), u !== null)) {
      var i = u.dehydrated;
      if ((Xs(t), a))
        if (t.flags & 256) ((t.flags &= -257), (t = Zp(e, t, n)));
        else if (t.memoizedState !== null) ((t.child = e.child), (t.flags |= 128), (t = null));
        else
          throw Error('Client rendering an Activity suspended it again. This is a bug in React.');
      else if ((Xh(), Re || Ra(e, t, n, !1), (a = (n & e.childLanes) !== 0), Re || a)) {
        if (((l = ee), l !== null && ((i = Jd(l, n)), i !== 0 && i !== u.retryLane)))
          throw ((u.retryLane = i), Ze(e, i), de(l, e, i), fd);
        (Wo(), (t = Zp(e, t, n)));
      } else
        ((e = u.treeContext),
          (ue = mt(i.nextSibling)),
          (Ye = t),
          (j = !0),
          (rl = null),
          (hn = !1),
          (vt = null),
          (Ut = !1),
          e !== null && Gh(t, e),
          (t = Xo(t, l)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Sn(e.child, { mode: l.mode, children: l.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Qo(e, t) {
    var n = t.ref;
    if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != 'function' && typeof n != 'object')
        throw Error(
          'Expected ref to be a function, an object returned by React.createRef(), or undefined/null.',
        );
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function Ef(e, t, n, l, a) {
    if (n.prototype && typeof n.prototype.render == 'function') {
      var u = fe(n) || 'Unknown';
      Av[u] ||
        (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          u,
          u,
        ),
        (Av[u] = !0));
    }
    return (
      t.mode & Xe && Xt.recordLegacyContextWarning(t, null),
      e === null &&
        (Af(t, t.type),
        n.contextTypes &&
          ((u = fe(n) || 'Unknown'),
          Rv[u] ||
            ((Rv[u] = !0),
            console.error(
              '%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)',
              u,
            )))),
      Nl(t),
      Cu(t),
      (n = Zs(e, t, n, l, void 0, a)),
      (l = $s()),
      ya(),
      e !== null && !Re
        ? (ks(e, t, a), Dn(e, t, a))
        : (j && l && Ms(t), (t.flags |= 1), Be(e, t, n, a), t.child)
    );
  }
  function Jp(e, t, n, l, a, u) {
    return (
      Nl(t),
      Cu(t),
      (qn = -1),
      (qi = e !== null && e.type !== t.type),
      (t.updateQueue = null),
      (n = Js(t, l, n, a)),
      op(e, t),
      (l = $s()),
      ya(),
      e !== null && !Re
        ? (ks(e, t, u), Dn(e, t, u))
        : (j && l && Ms(t), (t.flags |= 1), Be(e, t, n, u), t.child)
    );
  }
  function $p(e, t, n, l, a) {
    switch (zl(t)) {
      case !1:
        var u = t.stateNode,
          i = new t.type(t.memoizedProps, u.context).state;
        u.updater.enqueueSetState(u, i, null);
        break;
      case !0:
        ((t.flags |= 128), (t.flags |= 65536), (u = Error('Simulated error coming from DevTools')));
        var o = a & -a;
        if (((t.lanes |= o), (i = ee), i === null))
          throw Error(
            'Expected a work-in-progress root. This is a bug in React. Please file an issue.',
          );
        ((o = Sf(o)), Tf(o, i, t, ft(u, t)), Uo(t, o));
    }
    if ((Nl(t), t.stateNode === null)) {
      if (
        ((i = fl),
        (u = n.contextType),
        'contextType' in n &&
          u !== null &&
          (u === void 0 || u.$$typeof !== on) &&
          !Tv.has(n) &&
          (Tv.add(n),
          (o =
            u === void 0
              ? ' However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.'
              : typeof u != 'object'
                ? ' However, it is set to a ' + typeof u + '.'
                : u.$$typeof === gr
                  ? ' Did you accidentally pass the Context.Consumer instead?'
                  : ' However, it is set to an object with keys {' +
                    Object.keys(u).join(', ') +
                    '}.'),
          console.error(
            '%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s',
            fe(n) || 'Component',
            o,
          )),
        typeof u == 'object' && u !== null && (i = oe(u)),
        (u = new n(l, i)),
        t.mode & Xe)
      ) {
        ce(!0);
        try {
          u = new n(l, i);
        } finally {
          ce(!1);
        }
      }
      if (
        ((i = t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = cd),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u._reactInternalInstance = dv),
        typeof n.getDerivedStateFromProps == 'function' &&
          i === null &&
          ((i = fe(n) || 'Component'),
          pv.has(i) ||
            (pv.add(i),
            console.error(
              '`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.',
              i,
              u.state === null ? 'null' : 'undefined',
              i,
            ))),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function')
      ) {
        var c = (o = i = null);
        if (
          (typeof u.componentWillMount == 'function' &&
          u.componentWillMount.__suppressDeprecationWarning !== !0
            ? (i = 'componentWillMount')
            : typeof u.UNSAFE_componentWillMount == 'function' && (i = 'UNSAFE_componentWillMount'),
          typeof u.componentWillReceiveProps == 'function' &&
          u.componentWillReceiveProps.__suppressDeprecationWarning !== !0
            ? (o = 'componentWillReceiveProps')
            : typeof u.UNSAFE_componentWillReceiveProps == 'function' &&
              (o = 'UNSAFE_componentWillReceiveProps'),
          typeof u.componentWillUpdate == 'function' &&
          u.componentWillUpdate.__suppressDeprecationWarning !== !0
            ? (c = 'componentWillUpdate')
            : typeof u.UNSAFE_componentWillUpdate == 'function' &&
              (c = 'UNSAFE_componentWillUpdate'),
          i !== null || o !== null || c !== null)
        ) {
          u = fe(n) || 'Component';
          var s =
            typeof n.getDerivedStateFromProps == 'function'
              ? 'getDerivedStateFromProps()'
              : 'getSnapshotBeforeUpdate()';
          yv.has(u) ||
            (yv.add(u),
            console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              u,
              s,
              i !== null
                ? `
  ` + i
                : '',
              o !== null
                ? `
  ` + o
                : '',
              c !== null
                ? `
  ` + c
                : '',
            ));
        }
      }
      ((u = t.stateNode),
        (i = fe(n) || 'Component'),
        u.render ||
          (n.prototype && typeof n.prototype.render == 'function'
            ? console.error(
                'No `render` method found on the %s instance: did you accidentally return an object from the constructor?',
                i,
              )
            : console.error(
                'No `render` method found on the %s instance: you may have forgotten to define `render`.',
                i,
              )),
        !u.getInitialState ||
          u.getInitialState.isReactClassApproved ||
          u.state ||
          console.error(
            'getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?',
            i,
          ),
        u.getDefaultProps &&
          !u.getDefaultProps.isReactClassApproved &&
          console.error(
            'getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.',
            i,
          ),
        u.contextType &&
          console.error(
            'contextType was defined as an instance property on %s. Use a static property to define contextType instead.',
            i,
          ),
        n.childContextTypes &&
          !Sv.has(n) &&
          (Sv.add(n),
          console.error(
            '%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)',
            i,
          )),
        n.contextTypes &&
          !bv.has(n) &&
          (bv.add(n),
          console.error(
            '%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)',
            i,
          )),
        typeof u.componentShouldUpdate == 'function' &&
          console.error(
            '%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.',
            i,
          ),
        n.prototype &&
          n.prototype.isPureReactComponent &&
          typeof u.shouldComponentUpdate < 'u' &&
          console.error(
            '%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.',
            fe(n) || 'A pure component',
          ),
        typeof u.componentDidUnmount == 'function' &&
          console.error(
            '%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?',
            i,
          ),
        typeof u.componentDidReceiveProps == 'function' &&
          console.error(
            '%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().',
            i,
          ),
        typeof u.componentWillRecieveProps == 'function' &&
          console.error(
            '%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
            i,
          ),
        typeof u.UNSAFE_componentWillRecieveProps == 'function' &&
          console.error(
            '%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?',
            i,
          ),
        (o = u.props !== l),
        u.props !== void 0 &&
          o &&
          console.error(
            "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
            i,
          ),
        u.defaultProps &&
          console.error(
            'Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.',
            i,
            i,
          ),
        typeof u.getSnapshotBeforeUpdate != 'function' ||
          typeof u.componentDidUpdate == 'function' ||
          mv.has(n) ||
          (mv.add(n),
          console.error(
            '%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.',
            fe(n),
          )),
        typeof u.getDerivedStateFromProps == 'function' &&
          console.error(
            '%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            i,
          ),
        typeof u.getDerivedStateFromError == 'function' &&
          console.error(
            '%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.',
            i,
          ),
        typeof n.getSnapshotBeforeUpdate == 'function' &&
          console.error(
            '%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.',
            i,
          ),
        (o = u.state) &&
          (typeof o != 'object' || Ne(o)) &&
          console.error('%s.state: must be set to an object or null', i),
        typeof u.getChildContext == 'function' &&
          typeof n.childContextTypes != 'object' &&
          console.error(
            '%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().',
            i,
          ),
        (u = t.stateNode),
        (u.props = l),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Ys(t),
        (i = n.contextType),
        (u.context = typeof i == 'object' && i !== null ? oe(i) : fl),
        u.state === l &&
          ((i = fe(n) || 'Component'),
          gv.has(i) ||
            (gv.add(i),
            console.error(
              "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
              i,
            ))),
        t.mode & Xe && Xt.recordLegacyContextWarning(t, u),
        Xt.recordUnsafeLifecycleWarnings(t, u),
        (u.state = t.memoizedState),
        (i = n.getDerivedStateFromProps),
        typeof i == 'function' && (vf(t, n, i, l), (u.state = t.memoizedState)),
        typeof n.getDerivedStateFromProps == 'function' ||
          typeof u.getSnapshotBeforeUpdate == 'function' ||
          (typeof u.UNSAFE_componentWillMount != 'function' &&
            typeof u.componentWillMount != 'function') ||
          ((i = u.state),
          typeof u.componentWillMount == 'function' && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == 'function' && u.UNSAFE_componentWillMount(),
          i !== u.state &&
            (console.error(
              "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
              H(t) || 'Component',
            ),
            cd.enqueueReplaceState(u, u.state, null)),
          $u(t, l, u, a),
          Ju(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
        (t.mode & Gt) !== I && (t.flags |= 134217728),
        (u = !0));
    } else if (e === null) {
      u = t.stateNode;
      var p = t.memoizedProps;
      ((o = Gl(n, p)), (u.props = o));
      var m = u.context;
      ((c = n.contextType),
        (i = fl),
        typeof c == 'object' && c !== null && (i = oe(c)),
        (s = n.getDerivedStateFromProps),
        (c = typeof s == 'function' || typeof u.getSnapshotBeforeUpdate == 'function'),
        (p = t.pendingProps !== p),
        c ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((p || m !== i) && Bp(t, u, l, i)),
        (dl = !1));
      var h = t.memoizedState;
      ((u.state = h),
        $u(t, l, u, a),
        Ju(),
        (m = t.memoizedState),
        p || h !== m || dl
          ? (typeof s == 'function' && (vf(t, n, s, l), (m = t.memoizedState)),
            (o = dl || wp(t, n, o, l, h, m, i))
              ? (c ||
                  (typeof u.UNSAFE_componentWillMount != 'function' &&
                    typeof u.componentWillMount != 'function') ||
                  (typeof u.componentWillMount == 'function' && u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == 'function' &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.mode & Gt) !== I && (t.flags |= 134217728))
              : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
                (t.mode & Gt) !== I && (t.flags |= 134217728),
                (t.memoizedProps = l),
                (t.memoizedState = m)),
            (u.props = l),
            (u.state = m),
            (u.context = i),
            (u = o))
          : (typeof u.componentDidMount == 'function' && (t.flags |= 4194308),
            (t.mode & Gt) !== I && (t.flags |= 134217728),
            (u = !1)));
    } else {
      ((u = t.stateNode),
        Ls(e, t),
        (i = t.memoizedProps),
        (c = Gl(n, i)),
        (u.props = c),
        (s = t.pendingProps),
        (h = u.context),
        (m = n.contextType),
        (o = fl),
        typeof m == 'object' && m !== null && (o = oe(m)),
        (p = n.getDerivedStateFromProps),
        (m = typeof p == 'function' || typeof u.getSnapshotBeforeUpdate == 'function') ||
          (typeof u.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof u.componentWillReceiveProps != 'function') ||
          ((i !== s || h !== o) && Bp(t, u, l, o)),
        (dl = !1),
        (h = t.memoizedState),
        (u.state = h),
        $u(t, l, u, a),
        Ju());
      var v = t.memoizedState;
      i !== s || h !== v || dl || (e !== null && e.dependencies !== null && To(e.dependencies))
        ? (typeof p == 'function' && (vf(t, n, p, l), (v = t.memoizedState)),
          (c =
            dl ||
            wp(t, n, c, l, h, v, o) ||
            (e !== null && e.dependencies !== null && To(e.dependencies)))
            ? (m ||
                (typeof u.UNSAFE_componentWillUpdate != 'function' &&
                  typeof u.componentWillUpdate != 'function') ||
                (typeof u.componentWillUpdate == 'function' && u.componentWillUpdate(l, v, o),
                typeof u.UNSAFE_componentWillUpdate == 'function' &&
                  u.UNSAFE_componentWillUpdate(l, v, o)),
              typeof u.componentDidUpdate == 'function' && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
            : (typeof u.componentDidUpdate != 'function' ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != 'function' ||
                (i === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = v)),
          (u.props = l),
          (u.state = v),
          (u.context = o),
          (u = c))
        : (typeof u.componentDidUpdate != 'function' ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != 'function' ||
            (i === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    if (((o = u), Qo(e, t), (i = (t.flags & 128) !== 0), o || i)) {
      if (((o = t.stateNode), as(t), i && typeof n.getDerivedStateFromError != 'function'))
        ((n = null), (We = -1));
      else {
        if ((Cu(t), (n = Gg(o)), t.mode & Xe)) {
          ce(!0);
          try {
            Gg(o);
          } finally {
            ce(!1);
          }
        }
        ya();
      }
      ((t.flags |= 1),
        e !== null && i
          ? ((t.child = Il(t, e.child, null, a)), (t.child = Il(t, null, n, a)))
          : Be(e, t, n, a),
        (t.memoizedState = o.state),
        (e = t.child));
    } else e = Dn(e, t, a);
    return (
      (a = t.stateNode),
      u &&
        a.props !== l &&
        (du ||
          console.error(
            'It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.',
            H(t) || 'a component',
          ),
        (du = !0)),
      e
    );
  }
  function kp(e, t, n, l) {
    return (ql(), (t.flags |= 256), Be(e, t, n, l), t.child);
  }
  function Af(e, t) {
    (t &&
      t.childContextTypes &&
      console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || 'Component',
      ),
      typeof t.getDerivedStateFromProps == 'function' &&
        ((e = fe(t) || 'Unknown'),
        zv[e] ||
          (console.error('%s: Function components do not support getDerivedStateFromProps.', e),
          (zv[e] = !0))),
      typeof t.contextType == 'object' &&
        t.contextType !== null &&
        ((t = fe(t) || 'Unknown'),
        Dv[t] ||
          (console.error('%s: Function components do not support contextType.', t), (Dv[t] = !0))));
  }
  function Df(e) {
    return { baseLanes: e, cachePool: Kh() };
  }
  function Rf(e, t, n) {
    return ((e = e !== null ? e.childLanes & ~n : 0), t && (e |= Tt), e);
  }
  function Kp(e, t, n) {
    var l,
      a = t.pendingProps;
    yn(t) && (t.flags |= 128);
    var u = !1,
      i = (t.flags & 128) !== 0;
    if (
      ((l = i) || (l = e !== null && e.memoizedState === null ? !1 : (ve.current & wi) !== 0),
      l && ((u = !0), (t.flags &= -129)),
      (l = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (j) {
        if (
          (u ? In(t) : Pn(t),
          (e = ue)
            ? ((n = py(e, Ut)),
              (n = n !== null && n.data !== ia ? n : null),
              n !== null &&
                ((l = {
                  dehydrated: n,
                  treeContext: jh(),
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t.memoizedState = l),
                (l = Yh(n)),
                (l.return = t),
                (t.child = l),
                (Ye = t),
                (ue = null)))
            : (n = null),
          n === null)
        )
          throw (bo(t, e), $n(t));
        return (ar(n) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var o = a.children;
      if (((a = a.fallback), u)) {
        Pn(t);
        var c = t.mode;
        return (
          (o = Zo({ mode: 'hidden', children: o }, c)),
          (a = wl(a, c, n, null)),
          (o.return = t),
          (a.return = t),
          (o.sibling = a),
          (t.child = o),
          (a = t.child),
          (a.memoizedState = Df(n)),
          (a.childLanes = Rf(e, l, n)),
          (t.memoizedState = rd),
          Fu(null, a)
        );
      }
      return (In(t), zf(t, o));
    }
    var s = e.memoizedState;
    if (s !== null) {
      var p = s.dehydrated;
      if (p !== null) {
        if (i)
          t.flags & 256
            ? (In(t), (t.flags &= -257), (t = Of(e, t, n)))
            : t.memoizedState !== null
              ? (Pn(t), (t.child = e.child), (t.flags |= 128), (t = null))
              : (Pn(t),
                (o = a.fallback),
                (c = t.mode),
                (a = Zo({ mode: 'visible', children: a.children }, c)),
                (o = wl(o, c, n, null)),
                (o.flags |= 2),
                (a.return = t),
                (o.return = t),
                (a.sibling = o),
                (t.child = a),
                Il(t, e.child, null, n),
                (a = t.child),
                (a.memoizedState = Df(n)),
                (a.childLanes = Rf(e, l, n)),
                (t.memoizedState = rd),
                (t = Fu(null, a)));
        else if ((In(t), Xh(), ar(p))) {
          if (((l = p.nextSibling && p.nextSibling.dataset), l)) {
            o = l.dgst;
            var m = l.msg;
            c = l.stck;
            var h = l.cstck;
          }
          ((u = m),
            (l = o),
            (a = c),
            (p = h),
            (o = u),
            (c = p),
            (o = Error(
              o ||
                'The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.',
            )),
            (o.stack = a || ''),
            (o.digest = l),
            (l = c === void 0 ? null : c),
            (a = { value: o, source: null, stack: l }),
            typeof l == 'string' && $r.set(o, a),
            Lu(a),
            (t = Of(e, t, n)));
        } else if ((Re || Ra(e, t, n, !1), (l = (n & e.childLanes) !== 0), Re || l)) {
          if (((l = ee), l !== null && ((a = Jd(l, n)), a !== 0 && a !== s.retryLane)))
            throw ((s.retryLane = a), Ze(e, a), de(l, e, a), fd);
          (lr(p) || Wo(), (t = Of(e, t, n)));
        } else
          lr(p)
            ? ((t.flags |= 192), (t.child = e.child), (t = null))
            : ((e = s.treeContext),
              (ue = mt(p.nextSibling)),
              (Ye = t),
              (j = !0),
              (rl = null),
              (hn = !1),
              (vt = null),
              (Ut = !1),
              e !== null && Gh(t, e),
              (t = zf(t, a.children)),
              (t.flags |= 4096));
        return t;
      }
    }
    return u
      ? (Pn(t),
        (o = a.fallback),
        (c = t.mode),
        (h = e.child),
        (p = h.sibling),
        (a = Sn(h, { mode: 'hidden', children: a.children })),
        (a.subtreeFlags = h.subtreeFlags & 65011712),
        p !== null ? (o = Sn(p, o)) : ((o = wl(o, c, n, null)), (o.flags |= 2)),
        (o.return = t),
        (a.return = t),
        (a.sibling = o),
        (t.child = a),
        Fu(null, a),
        (a = t.child),
        (o = e.child.memoizedState),
        o === null
          ? (o = Df(n))
          : ((c = o.cachePool),
            c !== null
              ? ((h = Ae._currentValue), (c = c.parent !== h ? { parent: h, pool: h } : c))
              : (c = Kh()),
            (o = { baseLanes: o.baseLanes | n, cachePool: c })),
        (a.memoizedState = o),
        (a.childLanes = Rf(e, l, n)),
        (t.memoizedState = rd),
        Fu(e.child, a))
      : (In(t),
        (n = e.child),
        (e = n.sibling),
        (n = Sn(n, { mode: 'visible', children: a.children })),
        (n.return = t),
        (n.sibling = null),
        e !== null &&
          ((l = t.deletions), l === null ? ((t.deletions = [e]), (t.flags |= 16)) : l.push(e)),
        (t.child = n),
        (t.memoizedState = null),
        n);
  }
  function zf(e, t) {
    return ((t = Zo({ mode: 'visible', children: t }, e.mode)), (t.return = e), (e.child = t));
  }
  function Zo(e, t) {
    return ((e = Qe(22, e, null, t)), (e.lanes = 0), e);
  }
  function Of(e, t, n) {
    return (
      Il(t, e.child, null, n),
      (e = zf(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Wp(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    (l !== null && (l.lanes |= t), _s(e.return, t, n));
  }
  function Cf(e, t, n, l, a, u) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: n,
          tailMode: a,
          treeForkCount: u,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = l),
        (i.tail = n),
        (i.tailMode = a),
        (i.treeForkCount = u));
  }
  function Fp(e, t, n) {
    var l = t.pendingProps,
      a = l.revealOrder,
      u = l.tail,
      i = l.children,
      o = ve.current;
    if (
      ((l = (o & wi) !== 0) ? ((o = (o & cu) | wi), (t.flags |= 128)) : (o &= cu),
      Z(ve, o, t),
      (o = a ?? 'null'),
      a !== 'forwards' &&
        a !== 'unstable_legacy-backwards' &&
        a !== 'together' &&
        a !== 'independent' &&
        !Ov[o])
    )
      if (((Ov[o] = !0), a == null))
        console.error(
          'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".',
        );
      else if (a === 'backwards')
        console.error(
          'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.',
        );
      else if (typeof a == 'string')
        switch (a.toLowerCase()) {
          case 'together':
          case 'forwards':
          case 'backwards':
          case 'independent':
            console.error(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
              a,
              a.toLowerCase(),
            );
            break;
          case 'forward':
          case 'backward':
            console.error(
              '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
              a,
              a.toLowerCase(),
            );
            break;
          default:
            console.error(
              '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
              a,
            );
        }
      else
        console.error(
          '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
          a,
        );
    ((o = u ?? 'null'),
      _c[o] ||
        (u == null
          ? (a === 'forwards' || a === 'backwards' || a === 'unstable_legacy-backwards') &&
            ((_c[o] = !0),
            console.error(
              'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".',
            ))
          : u !== 'visible' && u !== 'collapsed' && u !== 'hidden'
            ? ((_c[o] = !0),
              console.error(
                '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
                u,
              ))
            : a !== 'forwards' &&
              a !== 'backwards' &&
              a !== 'unstable_legacy-backwards' &&
              ((_c[o] = !0),
              console.error(
                '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
                u,
              ))));
    e: if (
      (a === 'forwards' || a === 'backwards' || a === 'unstable_legacy-backwards') &&
      i !== void 0 &&
      i !== null &&
      i !== !1
    )
      if (Ne(i)) {
        for (o = 0; o < i.length; o++) if (!np(i[o], o)) break e;
      } else if (((o = Wt(i)), typeof o == 'function')) {
        if ((o = o.call(i)))
          for (var c = o.next(), s = 0; !c.done; c = o.next()) {
            if (!np(c.value, s)) break e;
            s++;
          }
      } else
        console.error(
          'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
          a,
        );
    if ((Be(e, t, i, n), j ? (Jn(), (i = Di)) : (i = 0), !l && e !== null && e.flags & 128))
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Wp(e, n, t);
        else if (e.tag === 19) Wp(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (a) {
      case 'forwards':
        for (n = t.child, a = null; n !== null; )
          ((e = n.alternate), e !== null && Ho(e) === null && (a = n), (n = n.sibling));
        ((n = a),
          n === null ? ((a = t.child), (t.child = null)) : ((a = n.sibling), (n.sibling = null)),
          Cf(t, !1, a, n, u, i));
        break;
      case 'backwards':
      case 'unstable_legacy-backwards':
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && Ho(e) === null)) {
            t.child = a;
            break;
          }
          ((e = a.sibling), (a.sibling = n), (n = a), (a = e));
        }
        Cf(t, !0, n, null, u, i);
        break;
      case 'together':
        Cf(t, !1, null, null, void 0, i);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Dn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (We = -1),
      (pl |= t.lanes),
      !(n & t.childLanes))
    )
      if (e !== null) {
        if ((Ra(e, t, n, !1), (n & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error('Resuming work not yet implemented.');
    if (t.child !== null) {
      for (e = t.child, n = Sn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        ((e = e.sibling), (n = n.sibling = Sn(e, e.pendingProps)), (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function Mf(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && To(e)));
  }
  function eb(e, t, n) {
    switch (t.tag) {
      case 3:
        (ha(t, t.stateNode.containerInfo), kn(t, Ae, e.memoizedState.cache), ql());
        break;
      case 27:
      case 5:
        q(t);
        break;
      case 4:
        ha(t, t.stateNode.containerInfo);
        break;
      case 10:
        kn(t, t.type, t.memoizedProps.value);
        break;
      case 12:
        (n & t.childLanes && (t.flags |= 4), (t.flags |= 2048));
        var l = t.stateNode;
        ((l.effectDuration = -0), (l.passiveEffectDuration = -0));
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Xs(t), null);
        break;
      case 13:
        if (((l = t.memoizedState), l !== null))
          return l.dehydrated !== null
            ? (In(t), (t.flags |= 128), null)
            : n & t.child.childLanes
              ? Kp(e, t, n)
              : (In(t), (e = Dn(e, t, n)), e !== null ? e.sibling : null);
        In(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (
          ((l = (n & t.childLanes) !== 0),
          l || (Ra(e, t, n, !1), (l = (n & t.childLanes) !== 0)),
          a)
        ) {
          if (l) return Fp(e, t, n);
          t.flags |= 128;
        }
        if (
          ((a = t.memoizedState),
          a !== null && ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
          Z(ve, ve.current, t),
          l)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), Xp(e, t, n, t.pendingProps));
      case 24:
        kn(t, Ae, e.memoizedState.cache);
    }
    return Dn(e, t, n);
  }
  function Uf(e, t, n) {
    if (t._debugNeedsRemount && e !== null) {
      ((n = zs(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes)),
        (n._debugStack = t._debugStack),
        (n._debugTask = t._debugTask));
      var l = t.return;
      if (l === null) throw Error('Cannot swap the root fiber.');
      if (
        ((e.alternate = null),
        (t.alternate = null),
        (n.index = t.index),
        (n.sibling = t.sibling),
        (n.return = t.return),
        (n.ref = t.ref),
        (n._debugInfo = t._debugInfo),
        t === l.child)
      )
        l.child = n;
      else {
        var a = l.child;
        if (a === null) throw Error('Expected parent to have a child.');
        for (; a.sibling !== t; )
          if (((a = a.sibling), a === null)) throw Error('Expected to find the previous sibling.');
        a.sibling = n;
      }
      return (
        (t = l.deletions),
        t === null ? ((l.deletions = [e]), (l.flags |= 16)) : t.push(e),
        (n.flags |= 2),
        n
      );
    }
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || t.type !== e.type) Re = !0;
      else {
        if (!Mf(e, n) && !(t.flags & 128)) return ((Re = !1), eb(e, t, n));
        Re = !!(e.flags & 131072);
      }
    else
      ((Re = !1),
        (l = j) && (Jn(), (l = (t.flags & 1048576) !== 0)),
        l && ((l = t.index), Jn(), Lh(t, Di, l)));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: if (
          ((l = t.pendingProps), (e = Kn(t.elementType)), (t.type = e), typeof e == 'function')
        )
          Rs(e)
            ? ((l = Gl(e, l)), (t.tag = 1), (t.type = e = _l(e)), (t = $p(null, t, e, l, n)))
            : ((t.tag = 0), Af(t, e), (t.type = e = _l(e)), (t = Ef(null, t, e, l, n)));
        else {
          if (e != null) {
            if (((a = e.$$typeof), a === ri)) {
              ((t.tag = 11), (t.type = e = Ds(e)), (t = Lp(null, t, e, l, n)));
              break e;
            } else if (a === sc) {
              ((t.tag = 14), (t = jp(null, t, e, l, n)));
              break e;
            }
          }
          throw (
            (t = ''),
            e !== null &&
              typeof e == 'object' &&
              e.$$typeof === yt &&
              (t = ' Did you wrap a component in React.lazy() more than once?'),
            (n = fe(e) || e),
            Error(
              'Element type is invalid. Received a promise that resolves to: ' +
                n +
                '. Lazy element type must resolve to a class or function.' +
                t,
            )
          );
        }
        return t;
      case 0:
        return Ef(e, t, t.type, t.pendingProps, n);
      case 1:
        return ((l = t.type), (a = Gl(l, t.pendingProps)), $p(e, t, l, a, n));
      case 3:
        e: {
          if ((ha(t, t.stateNode.containerInfo), e === null))
            throw Error('Should have a current fiber. This is a bug in React.');
          l = t.pendingProps;
          var u = t.memoizedState;
          ((a = u.element), Ls(e, t), $u(t, l, null, n));
          var i = t.memoizedState;
          if (
            ((l = i.cache),
            kn(t, Ae, l),
            l !== u.cache && ws(t, [Ae], n, !0),
            Ju(),
            (l = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: l, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = kp(e, t, l, n);
              break e;
            } else if (l !== a) {
              ((a = ft(
                Error(
                  'This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.',
                ),
                t,
              )),
                Lu(a),
                (t = kp(e, t, l, n)));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === 'HTML' ? e.ownerDocument.body : e;
              }
              for (
                ue = mt(e.firstChild),
                  Ye = t,
                  j = !0,
                  rl = null,
                  hn = !1,
                  vt = null,
                  Ut = !0,
                  n = nv(t, null, l, n),
                  t.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((ql(), l === a)) {
              t = Dn(e, t, n);
              break e;
            }
            Be(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Qo(e, t),
          e === null
            ? (n = Sy(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = n)
              : j ||
                ((n = t.type),
                (e = t.pendingProps),
                (l = Ft(il.current)),
                (l = ec(l).createElement(n)),
                (l[Ve] = t),
                (l[$e] = e),
                qe(l, n, e),
                Ue(l),
                (t.stateNode = l))
            : (t.memoizedState = Sy(t.type, e.memoizedProps, t.pendingProps, e.memoizedState)),
          null
        );
      case 27:
        return (
          q(t),
          e === null &&
            j &&
            ((l = Ft(il.current)),
            (a = _()),
            (l = t.stateNode = vy(t.type, t.pendingProps, l, a, !1)),
            hn ||
              ((a = oy(l, t.type, t.pendingProps, a)), a !== null && (Bl(t, 0).serverProps = a)),
            (Ye = t),
            (Ut = !0),
            (a = ue),
            ll(t.type) ? ((_d = a), (ue = mt(l.firstChild))) : (ue = a)),
          Be(e, t, t.pendingProps.children, n),
          Qo(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            j &&
            ((u = _()),
            (l = bs(t.type, u.ancestorInfo)),
            (a = ue),
            (i = !a) ||
              ((i = jb(a, t.type, t.pendingProps, Ut)),
              i !== null
                ? ((t.stateNode = i),
                  hn ||
                    ((u = oy(i, t.type, t.pendingProps, u)),
                    u !== null && (Bl(t, 0).serverProps = u)),
                  (Ye = t),
                  (ue = mt(i.firstChild)),
                  (Ut = !1),
                  (u = !0))
                : (u = !1),
              (i = !u)),
            i && (l && bo(t, a), $n(t))),
          q(t),
          (a = t.type),
          (u = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (l = u.children),
          tr(a, u) ? (l = null) : i !== null && tr(a, i) && (t.flags |= 32),
          t.memoizedState !== null && ((a = Zs(e, t, $0, null, null, n)), (Ii._currentValue = a)),
          Qo(e, t),
          Be(e, t, l, n),
          t.child
        );
      case 6:
        return (
          e === null &&
            j &&
            ((n = t.pendingProps),
            (e = _()),
            (l = e.ancestorInfo.current),
            (n = l != null ? fo(n, l.tag, e.ancestorInfo.implicitRootScope) : !0),
            (e = ue),
            (l = !e) ||
              ((l = Gb(e, t.pendingProps, Ut)),
              l !== null ? ((t.stateNode = l), (Ye = t), (ue = null), (l = !0)) : (l = !1),
              (l = !l)),
            l && (n && bo(t, e), $n(t))),
          null
        );
      case 13:
        return Kp(e, t, n);
      case 4:
        return (
          ha(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = Il(t, null, l, n)) : Be(e, t, l, n),
          t.child
        );
      case 11:
        return Lp(e, t, t.type, t.pendingProps, n);
      case 7:
        return (Be(e, t, t.pendingProps, n), t.child);
      case 8:
        return (Be(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (
          (t.flags |= 4),
          (t.flags |= 2048),
          (l = t.stateNode),
          (l.effectDuration = -0),
          (l.passiveEffectDuration = -0),
          Be(e, t, t.pendingProps.children, n),
          t.child
        );
      case 10:
        return (
          (l = t.type),
          (a = t.pendingProps),
          (u = a.value),
          'value' in a ||
            Cv ||
            ((Cv = !0),
            console.error(
              'The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?',
            )),
          kn(t, l, u),
          Be(e, t, a.children, n),
          t.child
        );
      case 9:
        return (
          (a = t.type._context),
          (l = t.pendingProps.children),
          typeof l != 'function' &&
            console.error(
              "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.",
            ),
          Nl(t),
          (a = oe(a)),
          Cu(t),
          (l = Ir(l, a, void 0)),
          ya(),
          (t.flags |= 1),
          Be(e, t, l, n),
          t.child
        );
      case 14:
        return jp(e, t, t.type, t.pendingProps, n);
      case 15:
        return Gp(e, t, t.type, t.pendingProps, n);
      case 19:
        return Fp(e, t, n);
      case 31:
        return P0(e, t, n);
      case 22:
        return Xp(e, t, n, t.pendingProps);
      case 24:
        return (
          Nl(t),
          (l = oe(Ae)),
          e === null
            ? ((a = Vs()),
              a === null &&
                ((a = ee),
                (u = Bs()),
                (a.pooledCache = u),
                Vl(u),
                u !== null && (a.pooledCacheLanes |= n),
                (a = u)),
              (t.memoizedState = { parent: l, cache: a }),
              Ys(t),
              kn(t, Ae, a))
            : (e.lanes & n && (Ls(e, t), $u(t, null, null, n), Ju()),
              (a = e.memoizedState),
              (u = t.memoizedState),
              a.parent !== l
                ? ((a = { parent: l, cache: l }),
                  (t.memoizedState = a),
                  t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a),
                  kn(t, Ae, l))
                : ((l = u.cache), kn(t, Ae, l), l !== a.cache && ws(t, [Ae], n, !0))),
          Be(e, t, t.pendingProps.children, n),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.',
    );
  }
  function Rn(e) {
    e.flags |= 4;
  }
  function Hf(e, t, n, l, a) {
    if (((t = (e.mode & v1) !== I) && (t = !1), t)) {
      if (((e.flags |= 16777216), (a & 335544128) === a))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Mm()) e.flags |= 8192;
        else throw ((Fl = Oc), ed);
    } else e.flags &= -16777217;
  }
  function Ip(e, t) {
    if (t.type !== 'stylesheet' || (t.state.loading & Bt) !== sa) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Ry(t)))
      if (Mm()) e.flags |= 8192;
      else throw ((Fl = Oc), ed);
  }
  function Jo(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 && ((t = e.tag !== 22 ? Xd() : 536870912), (e.lanes |= t), (la |= t)));
  }
  function Iu(e, t) {
    if (!j)
      switch (e.tailMode) {
        case 'hidden':
          t = e.tail;
          for (var n = null; t !== null; ) (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case 'collapsed':
          n = e.tail;
          for (var l = null; n !== null; ) (n.alternate !== null && (l = n), (n = n.sibling));
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function te(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      l = 0;
    if (t)
      if ((e.mode & Ee) !== I) {
        for (var a = e.selfBaseDuration, u = e.child; u !== null; )
          ((n |= u.lanes | u.childLanes),
            (l |= u.subtreeFlags & 65011712),
            (l |= u.flags & 65011712),
            (a += u.treeBaseDuration),
            (u = u.sibling));
        e.treeBaseDuration = a;
      } else
        for (a = e.child; a !== null; )
          ((n |= a.lanes | a.childLanes),
            (l |= a.subtreeFlags & 65011712),
            (l |= a.flags & 65011712),
            (a.return = e),
            (a = a.sibling));
    else if ((e.mode & Ee) !== I) {
      ((a = e.actualDuration), (u = e.selfBaseDuration));
      for (var i = e.child; i !== null; )
        ((n |= i.lanes | i.childLanes),
          (l |= i.subtreeFlags),
          (l |= i.flags),
          (a += i.actualDuration),
          (u += i.treeBaseDuration),
          (i = i.sibling));
      ((e.actualDuration = a), (e.treeBaseDuration = u));
    } else
      for (a = e.child; a !== null; )
        ((n |= a.lanes | a.childLanes),
          (l |= a.subtreeFlags),
          (l |= a.flags),
          (a.return = e),
          (a = a.sibling));
    return ((e.subtreeFlags |= l), (e.childLanes = n), t);
  }
  function tb(e, t, n) {
    var l = t.pendingProps;
    switch ((Us(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (te(t), null);
      case 1:
        return (te(t), null);
      case 3:
        return (
          (n = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          En(Ae, t),
          E(t),
          n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
          (e === null || e.child === null) &&
            (Da(t)
              ? (xs(), Rn(t))
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Hs())),
          te(t),
          null
        );
      case 26:
        var a = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Rn(t), u !== null ? (te(t), Ip(t, u)) : (te(t), Hf(t, a, null, l, n)))
            : u
              ? u !== e.memoizedState
                ? (Rn(t), te(t), Ip(t, u))
                : (te(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps), e !== l && Rn(t), te(t), Hf(t, a, e, l, n)),
          null
        );
      case 27:
        if ((le(t), (n = Ft(il.current)), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Rn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
              );
            return (te(t), null);
          }
          ((e = _()), Da(t) ? Qh(t) : ((e = vy(a, l, n, e, !0)), (t.stateNode = e), Rn(t)));
        }
        return (te(t), null);
      case 5:
        if ((le(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && Rn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(
                'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
              );
            return (te(t), null);
          }
          var i = _();
          if (Da(t)) Qh(t);
          else {
            switch (
              ((u = Ft(il.current)), bs(a, i.ancestorInfo), (i = i.context), (u = ec(u)), i)
            ) {
              case Eu:
                u = u.createElementNS(Qa, a);
                break;
              case kc:
                u = u.createElementNS(mc, a);
                break;
              default:
                switch (a) {
                  case 'svg':
                    u = u.createElementNS(Qa, a);
                    break;
                  case 'math':
                    u = u.createElementNS(mc, a);
                    break;
                  case 'script':
                    ((u = u.createElement('div')),
                      (u.innerHTML = '<script><\/script>'),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case 'select':
                    ((u =
                      typeof l.is == 'string'
                        ? u.createElement('select', { is: l.is })
                        : u.createElement('select')),
                      l.multiple ? (u.multiple = !0) : l.size && (u.size = l.size));
                    break;
                  default:
                    ((u =
                      typeof l.is == 'string'
                        ? u.createElement(a, { is: l.is })
                        : u.createElement(a)),
                      a.indexOf('-') === -1 &&
                        (a !== a.toLowerCase() &&
                          console.error(
                            '<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.',
                            a,
                          ),
                        Object.prototype.toString.call(u) !== '[object HTMLUnknownElement]' ||
                          Cn.call($v, a) ||
                          (($v[a] = !0),
                          console.error(
                            'The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.',
                            a,
                          ))));
                }
            }
            ((u[Ve] = t), (u[$e] = l));
            e: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break e;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break e;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = u;
            e: switch ((qe(u, a, l), a)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                l = !!l.autoFocus;
                break e;
              case 'img':
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Rn(t);
          }
        }
        return (te(t), Hf(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null);
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && Rn(t);
        else {
          if (typeof l != 'string' && t.stateNode === null)
            throw Error(
              'We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.',
            );
          if (((e = Ft(il.current)), (n = _()), Da(t))) {
            if (
              ((e = t.stateNode),
              (n = t.memoizedProps),
              (a = !hn),
              (l = null),
              (u = Ye),
              u !== null)
            )
              switch (u.tag) {
                case 3:
                  a && ((a = yy(e, n, l)), a !== null && (Bl(t, 0).serverProps = a));
                  break;
                case 27:
                case 5:
                  ((l = u.memoizedProps),
                    a && ((a = yy(e, n, l)), a !== null && (Bl(t, 0).serverProps = a)));
              }
            ((e[Ve] = t),
              (e = !!(
                e.nodeValue === n ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                ny(e.nodeValue, n)
              )),
              e || $n(t, !0));
          } else
            ((a = n.ancestorInfo.current),
              a != null && fo(l, a.tag, n.ancestorInfo.implicitRootScope),
              (e = ec(e).createTextNode(l)),
              (e[Ve] = t),
              (t.stateNode = e));
        }
        return (te(t), null);
      case 31:
        if (((n = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((l = Da(t)), n !== null)) {
            if (e === null) {
              if (!l)
                throw Error(
                  'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.',
                );
              if (((e = t.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
                throw Error(
                  'Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.',
                );
              ((e[Ve] = t),
                te(t),
                (t.mode & Ee) !== I &&
                  n !== null &&
                  ((e = t.child), e !== null && (t.treeBaseDuration -= e.treeBaseDuration)));
            } else
              (xs(),
                ql(),
                !(t.flags & 128) && (n = t.memoizedState = null),
                (t.flags |= 4),
                te(t),
                (t.mode & Ee) !== I &&
                  n !== null &&
                  ((e = t.child), e !== null && (t.treeBaseDuration -= e.treeBaseDuration)));
            e = !1;
          } else
            ((n = Hs()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n),
              (e = !0));
          if (!e) return t.flags & 256 ? (ht(t), t) : (ht(t), null);
          if (t.flags & 128)
            throw Error('Client rendering an Activity suspended it again. This is a bug in React.');
        }
        return (te(t), null);
      case 13:
        if (
          ((l = t.memoizedState),
          e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((a = l), (u = Da(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!u)
                throw Error(
                  'A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.',
                );
              if (((u = t.memoizedState), (u = u !== null ? u.dehydrated : null), !u))
                throw Error(
                  'Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.',
                );
              ((u[Ve] = t),
                te(t),
                (t.mode & Ee) !== I &&
                  a !== null &&
                  ((a = t.child), a !== null && (t.treeBaseDuration -= a.treeBaseDuration)));
            } else
              (xs(),
                ql(),
                !(t.flags & 128) && (a = t.memoizedState = null),
                (t.flags |= 4),
                te(t),
                (t.mode & Ee) !== I &&
                  a !== null &&
                  ((a = t.child), a !== null && (t.treeBaseDuration -= a.treeBaseDuration)));
            a = !1;
          } else
            ((a = Hs()),
              e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a),
              (a = !0));
          if (!a) return t.flags & 256 ? (ht(t), t) : (ht(t), null);
        }
        return (
          ht(t),
          t.flags & 128
            ? ((t.lanes = n), (t.mode & Ee) !== I && Xu(t), t)
            : ((n = l !== null),
              (e = e !== null && e.memoizedState !== null),
              n &&
                ((l = t.child),
                (a = null),
                l.alternate !== null &&
                  l.alternate.memoizedState !== null &&
                  l.alternate.memoizedState.cachePool !== null &&
                  (a = l.alternate.memoizedState.cachePool.pool),
                (u = null),
                l.memoizedState !== null &&
                  l.memoizedState.cachePool !== null &&
                  (u = l.memoizedState.cachePool.pool),
                u !== a && (l.flags |= 2048)),
              n !== e && n && (t.child.flags |= 8192),
              Jo(t, t.updateQueue),
              te(t),
              (t.mode & Ee) !== I &&
                n &&
                ((e = t.child), e !== null && (t.treeBaseDuration -= e.treeBaseDuration)),
              null)
        );
      case 4:
        return (E(t), e === null && kf(t.stateNode.containerInfo), te(t), null);
      case 10:
        return (En(t.type, t), te(t), null);
      case 19:
        if ((re(ve, t), (l = t.memoizedState), l === null)) return (te(t), null);
        if (((a = (t.flags & 128) !== 0), (u = l.rendering), u === null))
          if (a) Iu(l, !1);
          else {
            if (he !== Vn || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((u = Ho(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      Iu(l, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Jo(t, e),
                      t.subtreeFlags = 0,
                      e = n,
                      n = t.child;
                    n !== null;
                  )
                    (Vh(n, e), (n = n.sibling));
                  return (Z(ve, (ve.current & cu) | wi, t), j && Tn(t, l.treeForkCount), t.child);
                }
                e = e.sibling;
              }
            l.tail !== null &&
              sn() > qc &&
              ((t.flags |= 128), (a = !0), Iu(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Ho(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Jo(t, e),
                Iu(l, !0),
                l.tail === null && l.tailMode === 'hidden' && !u.alternate && !j)
              )
                return (te(t), null);
            } else
              2 * sn() - l.renderingStartTime > qc &&
                n !== 536870912 &&
                ((t.flags |= 128), (a = !0), Iu(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = l.last), e !== null ? (e.sibling = u) : (t.child = u), (l.last = u));
        }
        return l.tail !== null
          ? ((e = l.tail),
            (l.rendering = e),
            (l.tail = e.sibling),
            (l.renderingStartTime = sn()),
            (e.sibling = null),
            (n = ve.current),
            (n = a ? (n & cu) | wi : n & cu),
            Z(ve, n, t),
            j && Tn(t, l.treeForkCount),
            e)
          : (te(t), null);
      case 22:
      case 23:
        return (
          ht(t),
          Gs(t),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? n & 536870912 && !(t.flags & 128) && (te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : te(t),
          (n = t.updateQueue),
          n !== null && Jo(t, n.retryQueue),
          (n = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (n = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== n && (t.flags |= 2048),
          e !== null && re(Kl, t),
          null
        );
      case 24:
        return (
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          t.memoizedState.cache !== n && (t.flags |= 2048),
          En(Ae, t),
          te(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(
      'Unknown unit of work tag (' +
        t.tag +
        '). This error is likely caused by a bug in React. Please file an issue.',
    );
  }
  function nb(e, t) {
    switch ((Us(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), (t.mode & Ee) !== I && Xu(t), t) : null
        );
      case 3:
        return (
          En(Ae, t),
          E(t),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return (le(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((ht(t), t.alternate === null))
            throw Error(
              'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.',
            );
          ql();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), (t.mode & Ee) !== I && Xu(t), t) : null
        );
      case 13:
        if ((ht(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
          if (t.alternate === null)
            throw Error(
              'Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.',
            );
          ql();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), (t.mode & Ee) !== I && Xu(t), t) : null
        );
      case 19:
        return (re(ve, t), null);
      case 4:
        return (E(t), null);
      case 10:
        return (En(t.type, t), null);
      case 22:
      case 23:
        return (
          ht(t),
          Gs(t),
          e !== null && re(Kl, t),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), (t.mode & Ee) !== I && Xu(t), t) : null
        );
      case 24:
        return (En(Ae, t), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Pp(e, t) {
    switch ((Us(t), t.tag)) {
      case 3:
        (En(Ae, t), E(t));
        break;
      case 26:
      case 27:
      case 5:
        le(t);
        break;
      case 4:
        E(t);
        break;
      case 31:
        t.memoizedState !== null && ht(t);
        break;
      case 13:
        ht(t);
        break;
      case 19:
        re(ve, t);
        break;
      case 10:
        En(t.type, t);
        break;
      case 22:
      case 23:
        (ht(t), Gs(t), e !== null && re(Kl, t));
        break;
      case 24:
        En(Ae, t);
    }
  }
  function en(e) {
    return (e.mode & Ee) !== I;
  }
  function em(e, t) {
    en(e) ? (Pt(), Pu(t, e), It()) : Pu(t, e);
  }
  function xf(e, t, n) {
    en(e) ? (Pt(), Ua(n, e, t), It()) : Ua(n, e, t);
  }
  function Pu(e, t) {
    try {
      var n = t.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if (
            (n.tag & e) === e &&
            ((e & Oe) !== xt
              ? A !== null &&
                typeof A.markComponentPassiveEffectMountStarted == 'function' &&
                A.markComponentPassiveEffectMountStarted(t)
              : (e & Le) !== xt &&
                A !== null &&
                typeof A.markComponentLayoutEffectMountStarted == 'function' &&
                A.markComponentLayoutEffectMountStarted(t),
            (l = void 0),
            (e & Fe) !== xt && (bu = !0),
            (l = R(t, A1, n)),
            (e & Fe) !== xt && (bu = !1),
            (e & Oe) !== xt
              ? A !== null &&
                typeof A.markComponentPassiveEffectMountStopped == 'function' &&
                A.markComponentPassiveEffectMountStopped()
              : (e & Le) !== xt &&
                A !== null &&
                typeof A.markComponentLayoutEffectMountStopped == 'function' &&
                A.markComponentLayoutEffectMountStopped(),
            l !== void 0 && typeof l != 'function')
          ) {
            var u = void 0;
            u = n.tag & Le ? 'useLayoutEffect' : n.tag & Fe ? 'useInsertionEffect' : 'useEffect';
            var i = void 0;
            ((i =
              l === null
                ? ' You returned null. If your effect does not require clean up, return undefined (or nothing).'
                : typeof l.then == 'function'
                  ? `

It looks like you wrote ` +
                    u +
                    `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` +
                    u +
                    `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`
                  : ' You returned: ' + l),
              R(
                t,
                function (o, c) {
                  console.error(
                    '%s must not return anything besides a function, which is used for clean-up.%s',
                    o,
                    c,
                  );
                },
                u,
                i,
              ));
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (o) {
      J(t, t.return, o);
    }
  }
  function Ua(e, t, n) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var i = l.inst,
              o = i.destroy;
            o !== void 0 &&
              ((i.destroy = void 0),
              (e & Oe) !== xt
                ? A !== null &&
                  typeof A.markComponentPassiveEffectUnmountStarted == 'function' &&
                  A.markComponentPassiveEffectUnmountStarted(t)
                : (e & Le) !== xt &&
                  A !== null &&
                  typeof A.markComponentLayoutEffectUnmountStarted == 'function' &&
                  A.markComponentLayoutEffectUnmountStarted(t),
              (e & Fe) !== xt && (bu = !0),
              (a = t),
              R(a, D1, a, n, o),
              (e & Fe) !== xt && (bu = !1),
              (e & Oe) !== xt
                ? A !== null &&
                  typeof A.markComponentPassiveEffectUnmountStopped == 'function' &&
                  A.markComponentPassiveEffectUnmountStopped()
                : (e & Le) !== xt &&
                  A !== null &&
                  typeof A.markComponentLayoutEffectUnmountStopped == 'function' &&
                  A.markComponentLayoutEffectUnmountStopped());
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (c) {
      J(t, t.return, c);
    }
  }
  function tm(e, t) {
    en(e) ? (Pt(), Pu(t, e), It()) : Pu(t, e);
  }
  function _f(e, t, n) {
    en(e) ? (Pt(), Ua(n, e, t), It()) : Ua(n, e, t);
  }
  function nm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      e.type.defaultProps ||
        'ref' in e.memoizedProps ||
        du ||
        (n.props !== e.memoizedProps &&
          console.error(
            'Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
            H(e) || 'instance',
          ),
        n.state !== e.memoizedState &&
          console.error(
            'Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
            H(e) || 'instance',
          ));
      try {
        R(e, ap, t, n);
      } catch (l) {
        J(e, e.return, l);
      }
    }
  }
  function lb(e, t, n) {
    return e.getSnapshotBeforeUpdate(t, n);
  }
  function ab(e, t) {
    var n = t.memoizedProps,
      l = t.memoizedState;
    ((t = e.stateNode),
      e.type.defaultProps ||
        'ref' in e.memoizedProps ||
        du ||
        (t.props !== e.memoizedProps &&
          console.error(
            'Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
            H(e) || 'instance',
          ),
        t.state !== e.memoizedState &&
          console.error(
            'Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
            H(e) || 'instance',
          )));
    try {
      var a = Gl(e.type, n),
        u = R(e, lb, t, a, l);
      ((n = Mv),
        u !== void 0 ||
          n.has(e.type) ||
          (n.add(e.type),
          R(e, function () {
            console.error(
              '%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.',
              H(e),
            );
          })),
        (t.__reactInternalSnapshotBeforeUpdate = u));
    } catch (i) {
      J(e, e.return, i);
    }
  }
  function lm(e, t, n) {
    ((n.props = Gl(e.type, e.memoizedProps)),
      (n.state = e.memoizedState),
      en(e) ? (Pt(), R(e, kg, e, t, n), It()) : R(e, kg, e, t, n));
  }
  function ub(e) {
    var t = e.ref;
    if (t !== null) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          var n = e.stateNode;
          break;
        case 30:
          n = e.stateNode;
          break;
        default:
          n = e.stateNode;
      }
      if (typeof t == 'function')
        if (en(e))
          try {
            (Pt(), (e.refCleanup = t(n)));
          } finally {
            It();
          }
        else e.refCleanup = t(n);
      else
        (typeof t == 'string'
          ? console.error('String refs are no longer supported.')
          : t.hasOwnProperty('current') ||
            console.error(
              'Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().',
              H(e),
            ),
          (t.current = n));
    }
  }
  function ei(e, t) {
    try {
      R(e, ub, e);
    } catch (n) {
      J(e, t, n);
    }
  }
  function tn(e, t) {
    var n = e.ref,
      l = e.refCleanup;
    if (n !== null)
      if (typeof l == 'function')
        try {
          if (en(e))
            try {
              (Pt(), R(e, l));
            } finally {
              It(e);
            }
          else R(e, l);
        } catch (a) {
          J(e, t, a);
        } finally {
          ((e.refCleanup = null), (e = e.alternate), e != null && (e.refCleanup = null));
        }
      else if (typeof n == 'function')
        try {
          if (en(e))
            try {
              (Pt(), R(e, n, null));
            } finally {
              It(e);
            }
          else R(e, n, null);
        } catch (a) {
          J(e, t, a);
        }
      else n.current = null;
  }
  function am(e, t, n, l) {
    var a = e.memoizedProps,
      u = a.id,
      i = a.onCommit;
    ((a = a.onRender),
      (t = t === null ? 'mount' : 'update'),
      Ac && (t = 'nested-update'),
      typeof a == 'function' && a(u, t, e.actualDuration, e.treeBaseDuration, e.actualStartTime, n),
      typeof i == 'function' && i(u, t, l, n));
  }
  function ib(e, t, n, l) {
    var a = e.memoizedProps;
    ((e = a.id),
      (a = a.onPostCommit),
      (t = t === null ? 'mount' : 'update'),
      Ac && (t = 'nested-update'),
      typeof a == 'function' && a(e, t, l, n));
  }
  function um(e) {
    var t = e.type,
      n = e.memoizedProps,
      l = e.stateNode;
    try {
      R(e, Mb, l, t, n, e);
    } catch (a) {
      J(e, e.return, a);
    }
  }
  function wf(e, t, n) {
    try {
      R(e, Hb, e.stateNode, e.type, n, t, e);
    } catch (l) {
      J(e, e.return, l);
    }
  }
  function im(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || (e.tag === 27 && ll(e.type)) || e.tag === 4
    );
  }
  function Bf(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || im(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if ((e.tag === 27 && ll(e.type)) || e.flags & 2 || e.child === null || e.tag === 4)
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function qf(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((e = e.stateNode),
        t
          ? (ry(n),
            (n.nodeType === 9
              ? n.body
              : n.nodeName === 'HTML'
                ? n.ownerDocument.body
                : n
            ).insertBefore(e, t))
          : (ry(n),
            (t = n.nodeType === 9 ? n.body : n.nodeName === 'HTML' ? n.ownerDocument.body : n),
            t.appendChild(e),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = bn)));
    else if (
      l !== 4 &&
      (l === 27 && ll(e.type) && ((n = e.stateNode), (t = null)), (e = e.child), e !== null)
    )
      for (qf(e, t, n), e = e.sibling; e !== null; ) (qf(e, t, n), (e = e.sibling));
  }
  function $o(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6) ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (l !== 4 && (l === 27 && ll(e.type) && (n = e.stateNode), (e = e.child), e !== null))
      for ($o(e, t, n), e = e.sibling; e !== null; ) ($o(e, t, n), (e = e.sibling));
  }
  function ob(e) {
    for (var t, n = e.return; n !== null; ) {
      if (im(n)) {
        t = n;
        break;
      }
      n = n.return;
    }
    if (t == null)
      throw Error(
        'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.',
      );
    switch (t.tag) {
      case 27:
        ((t = t.stateNode), (n = Bf(e)), $o(e, n, t));
        break;
      case 5:
        ((n = t.stateNode), t.flags & 32 && (fy(n), (t.flags &= -33)), (t = Bf(e)), $o(e, t, n));
        break;
      case 3:
      case 4:
        ((t = t.stateNode.containerInfo), (n = Bf(e)), qf(e, n, t));
        break;
      default:
        throw Error(
          'Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.',
        );
    }
  }
  function om(e) {
    var t = e.stateNode,
      n = e.memoizedProps;
    try {
      R(e, $b, e.type, n, t, e);
    } catch (l) {
      J(e, e.return, l);
    }
  }
  function cb(e, t) {
    if (((e = e.containerInfo), (Ud = Ic), (e = xh(e)), Es(e))) {
      if ('selectionStart' in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var a = l.anchorOffset,
              u = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, u.nodeType);
            } catch {
              n = null;
              break e;
            }
            var i = 0,
              o = -1,
              c = -1,
              s = 0,
              p = 0,
              m = e,
              h = null;
            t: for (;;) {
              for (
                var v;
                m !== n || (a !== 0 && m.nodeType !== 3) || (o = i + a),
                  m !== u || (l !== 0 && m.nodeType !== 3) || (c = i + l),
                  m.nodeType === 3 && (i += m.nodeValue.length),
                  (v = m.firstChild) !== null;
              )
                ((h = m), (m = v));
              for (;;) {
                if (m === e) break t;
                if (
                  (h === n && ++s === a && (o = i),
                  h === u && ++p === l && (c = i),
                  (v = m.nextSibling) !== null)
                )
                  break;
                ((m = h), (h = m.parentNode));
              }
              m = v;
            }
            n = o === -1 || c === -1 ? null : { start: o, end: c };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Hd = { focusedElem: e, selectionRange: n }, Ic = !1, xe = t; xe !== null; )
      if (((t = xe), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null))
        ((e.return = t), (xe = e));
      else
        for (; xe !== null; ) {
          switch (((e = t = xe), (n = e.alternate), (a = e.flags), e.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              a & 1024 && n !== null && ab(e, n);
              break;
            case 3:
              if (a & 1024) {
                if (((e = e.stateNode.containerInfo), (n = e.nodeType), n === 9)) nr(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      nr(e);
                      break;
                    default:
                      e.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (a & 1024)
                throw Error(
                  'This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.',
                );
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (xe = e));
            break;
          }
          xe = t.return;
        }
  }
  function cm(e, t, n) {
    var l = rt(),
      a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (nn(e, n), a & 4 && em(n, Le | _t));
        break;
      case 1:
        if ((nn(e, n), a & 4))
          if (((e = n.stateNode), t === null))
            (n.type.defaultProps ||
              'ref' in n.memoizedProps ||
              du ||
              (e.props !== n.memoizedProps &&
                console.error(
                  'Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                  H(n) || 'instance',
                ),
              e.state !== n.memoizedState &&
                console.error(
                  'Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                  H(n) || 'instance',
                )),
              en(n) ? (Pt(), R(n, Pr, n, e), It()) : R(n, Pr, n, e));
          else {
            var u = Gl(n.type, t.memoizedProps);
            ((t = t.memoizedState),
              n.type.defaultProps ||
                'ref' in n.memoizedProps ||
                du ||
                (e.props !== n.memoizedProps &&
                  console.error(
                    'Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.',
                    H(n) || 'instance',
                  ),
                e.state !== n.memoizedState &&
                  console.error(
                    'Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.',
                    H(n) || 'instance',
                  )),
              en(n)
                ? (Pt(), R(n, Zg, n, e, u, t, e.__reactInternalSnapshotBeforeUpdate), It())
                : R(n, Zg, n, e, u, t, e.__reactInternalSnapshotBeforeUpdate));
          }
        (a & 64 && nm(n), a & 512 && ei(n, n.return));
        break;
      case 3:
        if (((t = An()), nn(e, n), a & 64 && ((a = n.updateQueue), a !== null))) {
          if (((u = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                u = n.child.stateNode;
                break;
              case 1:
                u = n.child.stateNode;
            }
          try {
            R(n, ap, a, u);
          } catch (o) {
            J(n, n.return, o);
          }
        }
        e.effectDuration += Ao(t);
        break;
      case 27:
        t === null && a & 4 && om(n);
      case 26:
      case 5:
        if ((nn(e, n), t === null)) {
          if (a & 4) um(n);
          else if (a & 64) {
            ((e = n.type), (t = n.memoizedProps), (u = n.stateNode));
            try {
              R(n, Ub, u, e, t, n);
            } catch (o) {
              J(n, n.return, o);
            }
          }
        }
        a & 512 && ei(n, n.return);
        break;
      case 12:
        if (a & 4) {
          ((a = An()), nn(e, n), (e = n.stateNode), (e.effectDuration += Gu(a)));
          try {
            R(n, am, n, t, Ec, e.effectDuration);
          } catch (o) {
            J(n, n.return, o);
          }
        } else nn(e, n);
        break;
      case 31:
        (nn(e, n), a & 4 && rm(e, n));
        break;
      case 13:
        (nn(e, n),
          a & 4 && dm(e, n),
          a & 64 &&
            ((e = n.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null && ((n = gb.bind(null, n)), Xb(e, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || Nn), !a)) {
          ((t = (t !== null && t.memoizedState !== null) || be), (u = Nn));
          var i = be;
          ((Nn = a),
            (be = t) && !i ? ln(e, n, (n.subtreeFlags & 8772) !== 0) : nn(e, n),
            (Nn = u),
            (be = i));
        }
        break;
      case 30:
        break;
      default:
        nn(e, n);
    }
    dt(l);
  }
  function sm(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), sm(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && fs(t)),
      (e.stateNode = null),
      (e._debugOwner = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function zn(e, t, n) {
    for (n = n.child; n !== null; ) (fm(e, t, n), (n = n.sibling));
  }
  function fm(e, t, n) {
    if (Ge && typeof Ge.onCommitFiberUnmount == 'function')
      try {
        Ge.onCommitFiberUnmount(Ga, n);
      } catch (i) {
        fn || ((fn = !0), console.error('React instrumentation encountered an error: %o', i));
      }
    var l = rt();
    switch (n.tag) {
      case 26:
        (be || tn(n, t),
          zn(e, t, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        be || tn(n, t);
        var a = ze,
          u = it;
        (ll(n.type) && ((ze = n.stateNode), (it = !1)),
          zn(e, t, n),
          R(n, oi, n.stateNode),
          (ze = a),
          (it = u));
        break;
      case 5:
        be || tn(n, t);
      case 6:
        if (((a = ze), (u = it), (ze = null), zn(e, t, n), (ze = a), (it = u), ze !== null))
          if (it)
            try {
              R(n, wb, ze, n.stateNode);
            } catch (i) {
              J(n, t, i);
            }
          else
            try {
              R(n, _b, ze, n.stateNode);
            } catch (i) {
              J(n, t, i);
            }
        break;
      case 18:
        ze !== null &&
          (it
            ? ((e = ze),
              dy(
                e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e,
                n.stateNode,
              ),
              Va(e))
            : dy(ze, n.stateNode));
        break;
      case 4:
        ((a = ze),
          (u = it),
          (ze = n.stateNode.containerInfo),
          (it = !0),
          zn(e, t, n),
          (ze = a),
          (it = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (be || Ua(Fe, n, t), be || xf(n, t, Le), zn(e, t, n));
        break;
      case 1:
        (be ||
          (tn(n, t), (a = n.stateNode), typeof a.componentWillUnmount == 'function' && lm(n, t, a)),
          zn(e, t, n));
        break;
      case 21:
        zn(e, t, n);
        break;
      case 22:
        ((be = (a = be) || n.memoizedState !== null), zn(e, t, n), (be = a));
        break;
      default:
        zn(e, t, n);
    }
    dt(l);
  }
  function rm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        R(t, Zb, e);
      } catch (n) {
        J(t, t.return, n);
      }
    }
  }
  function dm(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null && ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        R(t, Jb, e);
      } catch (n) {
        J(t, t.return, n);
      }
  }
  function sb(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new Uv()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new Uv()),
          t
        );
      default:
        throw Error('Unexpected Suspense handler tag (' + e.tag + '). This is a bug in React.');
    }
  }
  function ko(e, t) {
    var n = sb(e);
    t.forEach(function (l) {
      if (!n.has(l)) {
        if ((n.add(l), jt))
          if (hu !== null && pu !== null) ai(pu, hu);
          else throw Error('Expected finished root and lanes to be set. This is a bug in React.');
        var a = vb.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function at(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = e,
          u = t,
          i = n[l],
          o = rt(),
          c = u;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (ll(c.type)) {
                ((ze = c.stateNode), (it = !1));
                break e;
              }
              break;
            case 5:
              ((ze = c.stateNode), (it = !1));
              break e;
            case 3:
            case 4:
              ((ze = c.stateNode.containerInfo), (it = !0));
              break e;
          }
          c = c.return;
        }
        if (ze === null)
          throw Error(
            'Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.',
          );
        (fm(a, u, i),
          (ze = null),
          (it = !1),
          dt(o),
          (a = i),
          (u = a.alternate),
          u !== null && (u.return = null),
          (a.return = null));
      }
    if (t.subtreeFlags & 13878) for (t = t.child; t !== null; ) (hm(t, e), (t = t.sibling));
  }
  function hm(e, t) {
    var n = rt(),
      l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (at(t, e),
          ut(e),
          a & 4 && (Ua(Fe | _t, e, e.return), Pu(Fe | _t, e), xf(e, e.return, Le | _t)));
        break;
      case 1:
        (at(t, e),
          ut(e),
          a & 512 && (be || l === null || tn(l, l.return)),
          a & 64 &&
            Nn &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a))))));
        break;
      case 26:
        var u = Zt;
        if ((at(t, e), ut(e), a & 512 && (be || l === null || tn(l, l.return)), a & 4)) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  ((a = e.type), (l = e.memoizedProps), (u = u.ownerDocument || u));
                  t: switch (a) {
                    case 'title':
                      ((i = u.getElementsByTagName('title')[0]),
                        (!i ||
                          i[pi] ||
                          i[Ve] ||
                          i.namespaceURI === Qa ||
                          i.hasAttribute('itemprop')) &&
                          ((i = u.createElement(a)),
                          u.head.insertBefore(i, u.querySelector('head > title'))),
                        qe(i, a, l),
                        (i[Ve] = e),
                        Ue(i),
                        (a = i));
                      break e;
                    case 'link':
                      var o = Ay('link', 'href', u).get(a + (l.href || ''));
                      if (o) {
                        for (var c = 0; c < o.length; c++)
                          if (
                            ((i = o[c]),
                            i.getAttribute('href') ===
                              (l.href == null || l.href === '' ? null : l.href) &&
                              i.getAttribute('rel') === (l.rel == null ? null : l.rel) &&
                              i.getAttribute('title') === (l.title == null ? null : l.title) &&
                              i.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            o.splice(c, 1);
                            break t;
                          }
                      }
                      ((i = u.createElement(a)), qe(i, a, l), u.head.appendChild(i));
                      break;
                    case 'meta':
                      if ((o = Ay('meta', 'content', u).get(a + (l.content || '')))) {
                        for (c = 0; c < o.length; c++)
                          if (
                            ((i = o[c]),
                            ae(l.content, 'content'),
                            i.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              i.getAttribute('name') === (l.name == null ? null : l.name) &&
                              i.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute('charset') === (l.charSet == null ? null : l.charSet))
                          ) {
                            o.splice(c, 1);
                            break t;
                          }
                      }
                      ((i = u.createElement(a)), qe(i, a, l), u.head.appendChild(i));
                      break;
                    default:
                      throw Error(
                        'getNodesForType encountered a type it did not expect: "' +
                          a +
                          '". This is a bug in React.',
                      );
                  }
                  ((i[Ve] = e), Ue(i), (a = i));
                }
                e.stateNode = a;
              } else Dy(u, e.type, e.stateNode);
            else e.stateNode = Ey(u, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null ? Dy(u, e.type, e.stateNode) : Ey(u, a, e.memoizedProps))
              : a === null && e.stateNode !== null && wf(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (at(t, e),
          ut(e),
          a & 512 && (be || l === null || tn(l, l.return)),
          l !== null && a & 4 && wf(e, e.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if ((at(t, e), ut(e), a & 512 && (be || l === null || tn(l, l.return)), e.flags & 32)) {
          u = e.stateNode;
          try {
            R(e, fy, u);
          } catch (h) {
            J(e, e.return, h);
          }
        }
        (a & 4 &&
          e.stateNode != null &&
          ((u = e.memoizedProps), wf(e, u, l !== null ? l.memoizedProps : u)),
          a & 1024 &&
            ((dd = !0),
            e.type !== 'form' &&
              console.error(
                'Unexpected host component type. Expected a form. This is a bug in React.',
              )));
        break;
      case 6:
        if ((at(t, e), ut(e), a & 4)) {
          if (e.stateNode === null)
            throw Error(
              'This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.',
            );
          ((a = e.memoizedProps), (l = l !== null ? l.memoizedProps : a), (u = e.stateNode));
          try {
            R(e, xb, u, l, a);
          } catch (h) {
            J(e, e.return, h);
          }
        }
        break;
      case 3:
        if (
          ((u = An()),
          (Kc = null),
          (i = Zt),
          (Zt = tc(t.containerInfo)),
          at(t, e),
          (Zt = i),
          ut(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            R(e, Qb, t.containerInfo);
          } catch (h) {
            J(e, e.return, h);
          }
        (dd && ((dd = !1), pm(e)), (t.effectDuration += Ao(u)));
        break;
      case 4:
        ((a = Zt), (Zt = tc(e.stateNode.containerInfo)), at(t, e), ut(e), (Zt = a));
        break;
      case 12:
        ((a = An()), at(t, e), ut(e), (e.stateNode.effectDuration += Gu(a)));
        break;
      case 31:
        (at(t, e),
          ut(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), ko(e, a))));
        break;
      case 13:
        (at(t, e),
          ut(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) != (l !== null && l.memoizedState !== null) &&
            (vd = sn()),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), ko(e, a))));
        break;
      case 22:
        u = e.memoizedState !== null;
        var s = l !== null && l.memoizedState !== null,
          p = Nn,
          m = be;
        if (((Nn = p || u), (be = m || s), at(t, e), (be = m), (Nn = p), ut(e), a & 8192))
          e: for (
            t = e.stateNode,
              t._visibility = u ? t._visibility & ~Ai : t._visibility | Ai,
              u && (l === null || s || Nn || be || Xl(e)),
              l = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                s = l = t;
                try {
                  ((i = s.stateNode), u ? R(s, qb, i) : R(s, Yb, s.stateNode, s.memoizedProps));
                } catch (h) {
                  J(s, s.return, h);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                s = t;
                try {
                  ((o = s.stateNode), u ? R(s, Nb, o) : R(s, Lb, o, s.memoizedProps));
                } catch (h) {
                  J(s, s.return, h);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                s = t;
                try {
                  ((c = s.stateNode), u ? R(s, Bb, c) : R(s, Vb, s.stateNode));
                } catch (h) {
                  J(s, s.return, h);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) || t.memoizedState === null || t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (l === t && (l = null), (t = t.return));
            }
            (l === t && (l = null), (t.sibling.return = t.return), (t = t.sibling));
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), ko(e, l))));
        break;
      case 19:
        (at(t, e),
          ut(e),
          a & 4 && ((a = e.updateQueue), a !== null && ((e.updateQueue = null), ko(e, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (at(t, e), ut(e));
    }
    dt(n);
  }
  function ut(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        R(e, ob, e);
      } catch (n) {
        J(e, e.return, n);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function pm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (pm(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), (e = e.sibling));
      }
  }
  function nn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (cm(e, t.alternate, t), (t = t.sibling));
  }
  function mm(e) {
    var t = rt();
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (xf(e, e.return, Le), Xl(e));
        break;
      case 1:
        tn(e, e.return);
        var n = e.stateNode;
        (typeof n.componentWillUnmount == 'function' && lm(e, e.return, n), Xl(e));
        break;
      case 27:
        R(e, oi, e.stateNode);
      case 26:
      case 5:
        (tn(e, e.return), Xl(e));
        break;
      case 22:
        e.memoizedState === null && Xl(e);
        break;
      case 30:
        Xl(e);
        break;
      default:
        Xl(e);
    }
    dt(t);
  }
  function Xl(e) {
    for (e = e.child; e !== null; ) (mm(e), (e = e.sibling));
  }
  function ym(e, t, n, l) {
    var a = rt(),
      u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (ln(e, n, l), em(n, Le));
        break;
      case 1:
        if (
          (ln(e, n, l),
          (t = n.stateNode),
          typeof t.componentDidMount == 'function' && R(n, Pr, n, t),
          (t = n.updateQueue),
          t !== null)
        ) {
          e = n.stateNode;
          try {
            R(n, J0, t, e);
          } catch (i) {
            J(n, n.return, i);
          }
        }
        (l && u & 64 && nm(n), ei(n, n.return));
        break;
      case 27:
        om(n);
      case 26:
      case 5:
        (ln(e, n, l), l && t === null && u & 4 && um(n), ei(n, n.return));
        break;
      case 12:
        if (l && u & 4) {
          ((u = An()), ln(e, n, l), (l = n.stateNode), (l.effectDuration += Gu(u)));
          try {
            R(n, am, n, t, Ec, l.effectDuration);
          } catch (i) {
            J(n, n.return, i);
          }
        } else ln(e, n, l);
        break;
      case 31:
        (ln(e, n, l), l && u & 4 && rm(e, n));
        break;
      case 13:
        (ln(e, n, l), l && u & 4 && dm(e, n));
        break;
      case 22:
        (n.memoizedState === null && ln(e, n, l), ei(n, n.return));
        break;
      case 30:
        break;
      default:
        ln(e, n, l);
    }
    dt(a);
  }
  function ln(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
      (ym(e, t.alternate, t, n), (t = t.sibling));
  }
  function Nf(e, t) {
    var n = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (n = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== n && (e != null && Vl(e), n != null && ju(n)));
  }
  function Vf(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (Vl(t), e != null && ju(e)));
  }
  function Lt(e, t, n, l) {
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) (gm(e, t, n, l), (t = t.sibling));
  }
  function gm(e, t, n, l) {
    var a = rt(),
      u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Lt(e, t, n, l), u & 2048 && tm(t, Oe | _t));
        break;
      case 1:
        Lt(e, t, n, l);
        break;
      case 3:
        var i = An();
        (Lt(e, t, n, l),
          u & 2048 &&
            ((n = null),
            t.alternate !== null && (n = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== n && (Vl(t), n != null && ju(n))),
          (e.passiveEffectDuration += Ao(i)));
        break;
      case 12:
        if (u & 2048) {
          ((u = An()), Lt(e, t, n, l), (e = t.stateNode), (e.passiveEffectDuration += Gu(u)));
          try {
            R(t, ib, t, t.alternate, Ec, e.passiveEffectDuration);
          } catch (c) {
            J(t, t.return, c);
          }
        } else Lt(e, t, n, l);
        break;
      case 31:
        Lt(e, t, n, l);
        break;
      case 13:
        Lt(e, t, n, l);
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode;
        var o = t.alternate;
        (t.memoizedState !== null
          ? i._visibility & Un
            ? Lt(e, t, n, l)
            : ti(e, t)
          : i._visibility & Un
            ? Lt(e, t, n, l)
            : ((i._visibility |= Un), Ha(e, t, n, l, (t.subtreeFlags & 10256) !== 0)),
          u & 2048 && Nf(o, t));
        break;
      case 24:
        (Lt(e, t, n, l), u & 2048 && Vf(t.alternate, t));
        break;
      default:
        Lt(e, t, n, l);
    }
    dt(a);
  }
  function Ha(e, t, n, l, a) {
    for (a = a && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; )
      (vm(e, t, n, l, a), (t = t.sibling));
  }
  function vm(e, t, n, l, a) {
    var u = rt(),
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ha(e, t, n, l, a), tm(t, Oe));
        break;
      case 23:
        break;
      case 22:
        var o = t.stateNode;
        (t.memoizedState !== null
          ? o._visibility & Un
            ? Ha(e, t, n, l, a)
            : ti(e, t)
          : ((o._visibility |= Un), Ha(e, t, n, l, a)),
          a && i & 2048 && Nf(t.alternate, t));
        break;
      case 24:
        (Ha(e, t, n, l, a), a && i & 2048 && Vf(t.alternate, t));
        break;
      default:
        Ha(e, t, n, l, a);
    }
    dt(u);
  }
  function ti(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e,
          l = t,
          a = l.flags;
        switch (l.tag) {
          case 22:
            (ti(n, l), a & 2048 && Nf(l.alternate, l));
            break;
          case 24:
            (ti(n, l), a & 2048 && Vf(l.alternate, l));
            break;
          default:
            ti(n, l);
        }
        t = t.sibling;
      }
  }
  function xa(e) {
    if (e.subtreeFlags & Ni) for (e = e.child; e !== null; ) (bm(e), (e = e.sibling));
  }
  function bm(e) {
    switch (e.tag) {
      case 26:
        (xa(e),
          e.flags & Ni && e.memoizedState !== null && Wb(Zt, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        xa(e);
        break;
      case 3:
      case 4:
        var t = Zt;
        ((Zt = tc(e.stateNode.containerInfo)), xa(e), (Zt = t));
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ni), (Ni = 16777216), xa(e), (Ni = t))
            : xa(e));
        break;
      default:
        xa(e);
    }
  }
  function Sm(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function ni(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n],
            a = rt();
          ((xe = l), Am(l, e), dt(a));
        }
      Sm(e);
    }
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) (Tm(e), (e = e.sibling));
  }
  function Tm(e) {
    var t = rt();
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (ni(e), e.flags & 2048 && _f(e, e.return, Oe | _t));
        break;
      case 3:
        var n = An();
        (ni(e), (e.stateNode.passiveEffectDuration += Ao(n)));
        break;
      case 12:
        ((n = An()), ni(e), (e.stateNode.passiveEffectDuration += Gu(n)));
        break;
      case 22:
        ((n = e.stateNode),
          e.memoizedState !== null &&
          n._visibility & Un &&
          (e.return === null || e.return.tag !== 13)
            ? ((n._visibility &= ~Un), Ko(e))
            : ni(e));
        break;
      default:
        ni(e);
    }
    dt(t);
  }
  function Ko(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n],
            a = rt();
          ((xe = l), Am(l, e), dt(a));
        }
      Sm(e);
    }
    for (e = e.child; e !== null; ) (Em(e), (e = e.sibling));
  }
  function Em(e) {
    var t = rt();
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (_f(e, e.return, Oe), Ko(e));
        break;
      case 22:
        var n = e.stateNode;
        n._visibility & Un && ((n._visibility &= ~Un), Ko(e));
        break;
      default:
        Ko(e);
    }
    dt(t);
  }
  function Am(e, t) {
    for (; xe !== null; ) {
      var n = xe,
        l = n,
        a = t,
        u = rt();
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          _f(l, a, Oe);
          break;
        case 23:
        case 22:
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            ((l = l.memoizedState.cachePool.pool), l != null && Vl(l));
          break;
        case 24:
          ju(l.memoizedState.cache);
      }
      if ((dt(u), (u = n.child), u !== null)) ((u.return = n), (xe = u));
      else
        e: for (n = e; xe !== null; ) {
          if (((u = xe), (l = u.sibling), (a = u.return), sm(u), u === n)) {
            xe = null;
            break e;
          }
          if (l !== null) {
            ((l.return = a), (xe = l));
            break e;
          }
          xe = a;
        }
    }
  }
  function fb() {
    M1.forEach(function (e) {
      return e();
    });
  }
  function Dm() {
    var e = typeof IS_REACT_ACT_ENVIRONMENT < 'u' ? IS_REACT_ACT_ENVIRONMENT : void 0;
    return (
      e ||
        y.actQueue === null ||
        console.error('The current testing environment is not configured to support act(...)'),
      e
    );
  }
  function pt(e) {
    if ((k & Ie) !== ot && G !== 0) return G & -G;
    var t = y.T;
    return t !== null
      ? (t._updatedFibers || (t._updatedFibers = new Set()), t._updatedFibers.add(e), Jf())
      : Kd();
  }
  function Rm() {
    Tt === 0 && (Tt = !(G & 536870912) || j ? Gd() : 536870912);
    var e = bt.current;
    return (e !== null && (e.flags |= 32), Tt);
  }
  function de(e, t, n) {
    if (
      (bu && console.error('useInsertionEffect must not schedule updates.'),
      Ed && (Vc = !0),
      ((e === ee && (K === ta || K === na)) || e.cancelPendingCommit !== null) &&
        (wa(e, 0), tl(e, G, Tt, !1)),
      Hu(e, n),
      (k & Ie) !== ot && e === ee)
    ) {
      if (cn)
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ((e = (Y && H(Y)) || 'Unknown'),
              Lv.has(e) ||
                (Lv.add(e),
                (t = H(t) || 'Unknown'),
                console.error(
                  'Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render',
                  t,
                  e,
                  e,
                )));
            break;
          case 1:
            Yv ||
              (console.error(
                'Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.',
              ),
              (Yv = !0));
        }
    } else
      (jt && $d(e, t, n),
        Sb(t),
        e === ee && ((k & Ie) === ot && (ml |= n), he === ea && tl(e, G, Tt, !1)),
        an(e));
  }
  function zm(e, t, n) {
    if ((k & (Ie | Jt)) !== ot) throw Error('Should not already be working.');
    var l = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Uu(e, t),
      a = l ? db(e, t) : Lf(e, t, !0),
      u = l;
    do {
      if (a === Vn) {
        gu && !l && tl(e, t, 0, !1);
        break;
      } else {
        if (((n = e.current.alternate), u && !rb(n))) {
          ((a = Lf(e, t, !1)), (u = !1));
          continue;
        }
        if (a === mu) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = e.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            e: {
              a = e;
              var o = i;
              i = Xi;
              var c = a.current.memoizedState.isDehydrated;
              if ((c && (wa(a, o).flags |= 256), (o = Lf(a, o, !1)), o !== mu)) {
                if (yd && !c) {
                  ((a.errorRecoveryDisabledLanes |= u), (ml |= u), (a = ea));
                  break e;
                }
                ((a = Pe), (Pe = i), a !== null && (Pe === null ? (Pe = a) : Pe.push.apply(Pe, a)));
              }
              a = o;
            }
            if (((u = !1), a !== mu)) continue;
          }
        }
        if (a === Yi) {
          (wa(e, 0), tl(e, t, 0, !0));
          break;
        }
        e: {
          switch (((l = e), a)) {
            case Vn:
            case Yi:
              throw Error('Root did not complete. This is a bug in React.');
            case ea:
              if ((t & 4194048) !== t) break;
            case wc:
              tl(l, t, Tt, !hl);
              break e;
            case mu:
              Pe = null;
              break;
            case hd:
            case Hv:
              break;
            default:
              throw Error('Unknown root exit status.');
          }
          if (y.actQueue !== null) jf(l, n, t, Pe, Qi, Bc, Tt, ml, la);
          else {
            if ((t & 62914560) === t && ((u = vd + _v - sn()), 10 < u)) {
              if ((tl(l, t, Tt, !hl), uo(l, 0, !0) !== 0)) break e;
              l.timeoutHandle = kv(
                Om.bind(null, l, n, Pe, Qi, Bc, t, Tt, ml, la, hl, a, _1, Ng, 0),
                u,
              );
              break e;
            }
            Om(l, n, Pe, Qi, Bc, t, Tt, ml, la, hl, a, H1, Ng, 0);
          }
        }
      }
      break;
    } while (!0);
    an(e);
  }
  function Om(e, t, n, l, a, u, i, o, c, s, p, m, h, v) {
    if (
      ((e.timeoutHandle = ca),
      (m = t.subtreeFlags),
      (m & 8192 || (m & 16785408) === 16785408) &&
        ((Fi = { stylesheets: null, count: 0, unsuspend: bn }), bm(t), (m = Fb()), m !== null))
    ) {
      ((e.cancelPendingCommit = m(jf.bind(null, e, t, u, n, l, a, i, o, c, p, x1, h, v))),
        tl(e, u, i, !s));
      return;
    }
    jf(e, t, u, n, l, a, i, o, c);
  }
  function rb(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        t.flags & 16384 &&
        ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var l = 0; l < n.length; l++) {
          var a = n[l],
            u = a.getSnapshot;
          a = a.value;
          try {
            if (!Ke(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function tl(e, t, n, l) {
    ((t &= ~gd),
      (t &= ~ml),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes));
    for (var a = t; 0 < a; ) {
      var u = 31 - Je(a),
        i = 1 << u;
      ((l[u] = -1), (a &= ~i));
    }
    n !== 0 && Qd(e, n, t);
  }
  function _a() {
    return (k & (Ie | Jt)) === ot ? (ui(0), !1) : !0;
  }
  function Yf() {
    if (Y !== null) {
      if (K === ct) var e = Y.return;
      else ((e = Y), So(), Ks(e), (iu = null), (_i = 0), (e = Y));
      for (; e !== null; ) (Pp(e.alternate, e), (e = e.return));
      Y = null;
    }
  }
  function wa(e, t) {
    var n = e.timeoutHandle;
    (n !== ca && ((e.timeoutHandle = ca), J1(n)),
      (n = e.cancelPendingCommit),
      n !== null && ((e.cancelPendingCommit = null), n()),
      Yf(),
      (ee = e),
      (Y = n = Sn(e.current, null)),
      (G = t),
      (K = ct),
      (St = null),
      (hl = !1),
      (gu = Uu(e, t)),
      (yd = !1),
      (he = Vn),
      (la = Tt = gd = ml = pl = 0),
      (Pe = Xi = null),
      (Bc = !1),
      t & 8 && (t |= t & 32));
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - Je(l),
          u = 1 << a;
        ((t |= e[a]), (l &= ~u));
      }
    return (
      (mn = t),
      mo(),
      (t = _g()),
      1e3 < t - xg && ((y.recentlyCreatedOwnerStacks = 0), (xg = t)),
      Xt.discardPendingWarnings(),
      n
    );
  }
  function Cm(e, t) {
    ((w = null),
      (y.H = Hc),
      (y.getCurrentStack = null),
      (cn = !1),
      (gt = null),
      t === uu || t === zc
        ? ((t = Ph()), (K = ji))
        : t === ed
          ? ((t = Ph()), (K = xv))
          : (K =
              t === fd
                ? md
                : t !== null && typeof t == 'object' && typeof t.then == 'function'
                  ? yu
                  : Li),
      (St = t));
    var n = Y;
    if (n === null) ((he = Yi), Go(e, ft(t, e.current)));
    else
      switch ((n.mode & Ee && Ns(n), ya(), K)) {
        case Li:
          A !== null &&
            typeof A.markComponentErrored == 'function' &&
            A.markComponentErrored(n, t, G);
          break;
        case ta:
        case na:
        case ji:
        case yu:
        case Gi:
          A !== null &&
            typeof A.markComponentSuspended == 'function' &&
            A.markComponentSuspended(n, t, G);
      }
  }
  function Mm() {
    var e = bt.current;
    return e === null
      ? !0
      : (G & 4194048) === G
        ? Ht === null
        : (G & 62914560) === G || G & 536870912
          ? e === Ht
          : !1;
  }
  function Um() {
    var e = y.H;
    return ((y.H = Hc), e === null ? Hc : e);
  }
  function Hm() {
    var e = y.A;
    return ((y.A = C1), e);
  }
  function Wo() {
    ((he = ea),
      hl || ((G & 4194048) !== G && bt.current !== null) || (gu = !0),
      (!(pl & 134217727) && !(ml & 134217727)) || ee === null || tl(ee, G, Tt, !1));
  }
  function Lf(e, t, n) {
    var l = k;
    k |= Ie;
    var a = Um(),
      u = Hm();
    if (ee !== e || G !== t) {
      if (jt) {
        var i = e.memoizedUpdaters;
        (0 < i.size && (ai(e, G), i.clear()), kd(e, t));
      }
      ((Qi = null), wa(e, t));
    }
    (Ld(t), (t = !1), (i = he));
    e: do
      try {
        if (K !== ct && Y !== null) {
          var o = Y,
            c = St;
          switch (K) {
            case md:
              (Yf(), (i = wc));
              break e;
            case ji:
            case ta:
            case na:
            case yu:
              bt.current === null && (t = !0);
              var s = K;
              if (((K = ct), (St = null), Ba(e, o, c, s), n && gu)) {
                i = Vn;
                break e;
              }
              break;
            default:
              ((s = K), (K = ct), (St = null), Ba(e, o, c, s));
          }
        }
        (xm(), (i = he));
        break;
      } catch (p) {
        Cm(e, p);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      So(),
      (k = l),
      (y.H = a),
      (y.A = u),
      jd(),
      Y === null && ((ee = null), (G = 0), mo()),
      i
    );
  }
  function xm() {
    for (; Y !== null; ) _m(Y);
  }
  function db(e, t) {
    var n = k;
    k |= Ie;
    var l = Um(),
      a = Hm();
    if (ee !== e || G !== t) {
      if (jt) {
        var u = e.memoizedUpdaters;
        (0 < u.size && (ai(e, G), u.clear()), kd(e, t));
      }
      ((Qi = null), (qc = sn() + wv), wa(e, t));
    } else gu = Uu(e, t);
    Ld(t);
    e: do
      try {
        if (K !== ct && Y !== null)
          t: switch (((t = Y), (u = St), K)) {
            case Li:
              ((K = ct), (St = null), Ba(e, t, u, Li));
              break;
            case ta:
            case na:
              if (Fh(u)) {
                ((K = ct), (St = null), wm(t));
                break;
              }
              ((t = function () {
                ((K !== ta && K !== na) || ee !== e || (K = Gi), an(e));
              }),
                u.then(t, t));
              break e;
            case ji:
              K = Gi;
              break e;
            case xv:
              K = pd;
              break e;
            case Gi:
              Fh(u) ? ((K = ct), (St = null), wm(t)) : ((K = ct), (St = null), Ba(e, t, u, Gi));
              break;
            case pd:
              var i = null;
              switch (Y.tag) {
                case 26:
                  i = Y.memoizedState;
                case 5:
                case 27:
                  var o = Y;
                  if (i ? Ry(i) : o.stateNode.complete) {
                    ((K = ct), (St = null));
                    var c = o.sibling;
                    if (c !== null) Y = c;
                    else {
                      var s = o.return;
                      s !== null ? ((Y = s), Fo(s)) : (Y = null);
                    }
                    break t;
                  }
                  break;
                default:
                  console.error(
                    'Unexpected type of fiber triggered a suspensey commit. This is a bug in React.',
                  );
              }
              ((K = ct), (St = null), Ba(e, t, u, pd));
              break;
            case yu:
              ((K = ct), (St = null), Ba(e, t, u, yu));
              break;
            case md:
              (Yf(), (he = wc));
              break e;
            default:
              throw Error('Unexpected SuspendedReason. This is a bug in React.');
          }
        y.actQueue !== null ? xm() : hb();
        break;
      } catch (p) {
        Cm(e, p);
      }
    while (!0);
    return (
      So(),
      (y.H = l),
      (y.A = a),
      (k = n),
      Y !== null
        ? (A !== null && typeof A.markRenderYielded == 'function' && A.markRenderYielded(), Vn)
        : (jd(), (ee = null), (G = 0), mo(), he)
    );
  }
  function hb() {
    for (; Y !== null && !dS(); ) _m(Y);
  }
  function _m(e) {
    var t = e.alternate;
    ((e.mode & Ee) !== I ? (qs(e), (t = R(e, Uf, t, e, mn)), Ns(e)) : (t = R(e, Uf, t, e, mn)),
      (e.memoizedProps = e.pendingProps),
      t === null ? Fo(e) : (Y = t));
  }
  function wm(e) {
    var t = R(e, pb, e);
    ((e.memoizedProps = e.pendingProps), t === null ? Fo(e) : (Y = t));
  }
  function pb(e) {
    var t = e.alternate,
      n = (e.mode & Ee) !== I;
    switch ((n && qs(e), e.tag)) {
      case 15:
      case 0:
        t = Jp(t, e, e.pendingProps, e.type, void 0, G);
        break;
      case 11:
        t = Jp(t, e, e.pendingProps, e.type.render, e.ref, G);
        break;
      case 5:
        Ks(e);
      default:
        (Pp(t, e), (e = Y = Vh(e, mn)), (t = Uf(t, e, mn)));
    }
    return (n && Ns(e), t);
  }
  function Ba(e, t, n, l) {
    (So(), Ks(t), (iu = null), (_i = 0));
    var a = t.return;
    try {
      if (I0(e, a, t, n, G)) {
        ((he = Yi), Go(e, ft(n, e.current)), (Y = null));
        return;
      }
    } catch (u) {
      if (a !== null) throw ((Y = a), u);
      ((he = Yi), Go(e, ft(n, e.current)), (Y = null));
      return;
    }
    t.flags & 32768
      ? (j || l === Li
          ? (e = !0)
          : gu || G & 536870912
            ? (e = !1)
            : ((hl = e = !0),
              (l === ta || l === na || l === ji || l === yu) &&
                ((l = bt.current), l !== null && l.tag === 13 && (l.flags |= 16384))),
        Bm(t, e))
      : Fo(t);
  }
  function Fo(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        Bm(t, hl);
        return;
      }
      var n = t.alternate;
      if (
        ((e = t.return), qs(t), (n = R(t, tb, n, t, mn)), (t.mode & Ee) !== I && $h(t), n !== null)
      ) {
        Y = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Y = t;
        return;
      }
      Y = t = e;
    } while (t !== null);
    he === Vn && (he = Hv);
  }
  function Bm(e, t) {
    do {
      var n = nb(e.alternate, e);
      if (n !== null) {
        ((n.flags &= 32767), (Y = n));
        return;
      }
      if ((e.mode & Ee) !== I) {
        ($h(e), (n = e.actualDuration));
        for (var l = e.child; l !== null; ) ((n += l.actualDuration), (l = l.sibling));
        e.actualDuration = n;
      }
      if (
        ((n = e.return),
        n !== null && ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Y = e;
        return;
      }
      Y = e = n;
    } while (e !== null);
    ((he = wc), (Y = null));
  }
  function jf(e, t, n, l, a, u, i, o, c) {
    e.cancelPendingCommit = null;
    do li();
    while (Ce !== gl);
    if (
      (Xt.flushLegacyContextWarning(),
      Xt.flushPendingUnsafeLifecycleWarnings(),
      (k & (Ie | Jt)) !== ot)
    )
      throw Error('Should not already be working.');
    if (
      (A !== null && typeof A.markCommitStarted == 'function' && A.markCommitStarted(n), t === null)
    )
      Yd();
    else {
      if (
        (n === 0 &&
          console.error(
            'finishedLanes should not be empty during a commit. This is a bug in React.',
          ),
        t === e.current)
      )
        throw Error(
          'Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.',
        );
      if (
        ((u = t.lanes | t.childLanes),
        (u |= Jr),
        A0(e, n, u, i, o, c),
        e === ee && ((Y = ee = null), (G = 0)),
        (vu = t),
        (vl = e),
        (bl = n),
        (bd = u),
        (Sd = a),
        (Vv = l),
        t.subtreeFlags & 10256 || t.flags & 10256
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            bb(ja, function () {
              return (Lm(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (Ec = lu()),
        (l = (t.flags & 13878) !== 0),
        t.subtreeFlags & 13878 || l)
      ) {
        ((l = y.T), (y.T = null), (a = $.p), ($.p = Rt), (i = k), (k |= Jt));
        try {
          cb(e, t, n);
        } finally {
          ((k = i), ($.p = a), (y.T = l));
        }
      }
      ((Ce = Bv), qm(), Nm(), Vm());
    }
  }
  function qm() {
    if (Ce === Bv) {
      Ce = gl;
      var e = vl,
        t = vu,
        n = bl,
        l = (t.flags & 13878) !== 0;
      if (t.subtreeFlags & 13878 || l) {
        ((l = y.T), (y.T = null));
        var a = $.p;
        $.p = Rt;
        var u = k;
        k |= Jt;
        try {
          ((hu = n), (pu = e), (_n = -1.1), hm(t, e), (pu = hu = null), (n = Hd));
          var i = xh(e.containerInfo),
            o = n.focusedElem,
            c = n.selectionRange;
          if (i !== o && o && o.ownerDocument && Hh(o.ownerDocument.documentElement, o)) {
            if (c !== null && Es(o)) {
              var s = c.start,
                p = c.end;
              if ((p === void 0 && (p = s), 'selectionStart' in o))
                ((o.selectionStart = s), (o.selectionEnd = Math.min(p, o.value.length)));
              else {
                var m = o.ownerDocument || document,
                  h = (m && m.defaultView) || window;
                if (h.getSelection) {
                  var v = h.getSelection(),
                    D = o.textContent.length,
                    M = Math.min(c.start, D),
                    ne = c.end === void 0 ? M : Math.min(c.end, D);
                  !v.extend && M > ne && ((i = ne), (ne = M), (M = i));
                  var Q = Uh(o, M),
                    f = Uh(o, ne);
                  if (
                    Q &&
                    f &&
                    (v.rangeCount !== 1 ||
                      v.anchorNode !== Q.node ||
                      v.anchorOffset !== Q.offset ||
                      v.focusNode !== f.node ||
                      v.focusOffset !== f.offset)
                  ) {
                    var r = m.createRange();
                    (r.setStart(Q.node, Q.offset),
                      v.removeAllRanges(),
                      M > ne
                        ? (v.addRange(r), v.extend(f.node, f.offset))
                        : (r.setEnd(f.node, f.offset), v.addRange(r)));
                  }
                }
              }
            }
            for (m = [], v = o; (v = v.parentNode); )
              v.nodeType === 1 && m.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
            for (typeof o.focus == 'function' && o.focus(), o = 0; o < m.length; o++) {
              var d = m[o];
              ((d.element.scrollLeft = d.left), (d.element.scrollTop = d.top));
            }
          }
          ((Ic = !!Ud), (Hd = Ud = null));
        } finally {
          ((k = u), ($.p = a), (y.T = l));
        }
      }
      ((e.current = t), (Ce = qv));
    }
  }
  function Nm() {
    if (Ce === qv) {
      Ce = gl;
      var e = vl,
        t = vu,
        n = bl,
        l = (t.flags & 8772) !== 0;
      if (t.subtreeFlags & 8772 || l) {
        ((l = y.T), (y.T = null));
        var a = $.p;
        $.p = Rt;
        var u = k;
        k |= Jt;
        try {
          (A !== null &&
            typeof A.markLayoutEffectsStarted == 'function' &&
            A.markLayoutEffectsStarted(n),
            (hu = n),
            (pu = e),
            (_n = -1.1),
            cm(e, t.alternate, t),
            (pu = hu = null),
            A !== null &&
              typeof A.markLayoutEffectsStopped == 'function' &&
              A.markLayoutEffectsStopped());
        } finally {
          ((k = u), ($.p = a), (y.T = l));
        }
      }
      Ce = Nv;
    }
  }
  function Vm() {
    if (Ce === w1 || Ce === Nv) {
      ((Ce = gl), hS());
      var e = vl,
        t = vu,
        n = bl,
        l = Vv,
        a = (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0;
      a ? (Ce = Nc) : ((Ce = gl), (vu = vl = null), Ym(e, e.pendingLanes), (aa = 0), (Ji = null));
      var u = e.pendingLanes;
      if (
        (u === 0 && (yl = null),
        a || Qm(e),
        (a = ss(n)),
        (t = t.stateNode),
        Ge && typeof Ge.onCommitFiberRoot == 'function')
      )
        try {
          var i = (t.current.flags & 128) === 128;
          switch (a) {
            case Rt:
              var o = Or;
              break;
            case rn:
              o = Cr;
              break;
            case Mn:
              o = ja;
              break;
            case hc:
              o = Mr;
              break;
            default:
              o = ja;
          }
          Ge.onCommitFiberRoot(Ga, t, o, i);
        } catch (m) {
          fn || ((fn = !0), console.error('React instrumentation encountered an error: %o', m));
        }
      if ((jt && e.memoizedUpdaters.clear(), fb(), l !== null)) {
        ((i = y.T), (o = $.p), ($.p = Rt), (y.T = null));
        try {
          var c = e.onRecoverableError;
          for (t = 0; t < l.length; t++) {
            var s = l[t],
              p = mb(s.stack);
            R(s.source, c, s.value, p);
          }
        } finally {
          ((y.T = i), ($.p = o));
        }
      }
      (bl & 3 && li(),
        an(e),
        (u = e.pendingLanes),
        n & 4194090 && u & 42 ? ((Dc = !0), e === Td ? Zi++ : ((Zi = 0), (Td = e))) : (Zi = 0),
        ui(0),
        Yd());
    }
  }
  function mb(e) {
    return (
      (e = { componentStack: e }),
      Object.defineProperty(e, 'digest', {
        get: function () {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.',
          );
        },
      }),
      e
    );
  }
  function Ym(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), ju(t)));
  }
  function li(e) {
    return (qm(), Nm(), Vm(), Lm());
  }
  function Lm() {
    if (Ce !== Nc) return !1;
    var e = vl,
      t = bd;
    bd = 0;
    var n = ss(bl),
      l = Mn > n ? Mn : n;
    n = y.T;
    var a = $.p;
    try {
      (($.p = l), (y.T = null), (l = Sd), (Sd = null));
      var u = vl,
        i = bl;
      if (((Ce = gl), (vu = vl = null), (bl = 0), (k & (Ie | Jt)) !== ot))
        throw Error('Cannot flush passive effects while already rendering.');
      ((Ed = !0),
        (Vc = !1),
        A !== null &&
          typeof A.markPassiveEffectsStarted == 'function' &&
          A.markPassiveEffectsStarted(i));
      var o = k;
      k |= Jt;
      var c = u.current;
      ((_n = -1.1), Tm(c));
      var s = u.current;
      if (
        ((_n = -1.1),
        gm(u, s, i, l),
        A !== null &&
          typeof A.markPassiveEffectsStopped == 'function' &&
          A.markPassiveEffectsStopped(),
        Qm(u),
        (k = o),
        ui(0, !1),
        Vc ? (u === Ji ? aa++ : ((aa = 0), (Ji = u))) : (aa = 0),
        (Vc = Ed = !1),
        Ge && typeof Ge.onPostCommitFiberRoot == 'function')
      )
        try {
          Ge.onPostCommitFiberRoot(Ga, u);
        } catch (m) {
          fn || ((fn = !0), console.error('React instrumentation encountered an error: %o', m));
        }
      var p = u.current.stateNode;
      return ((p.effectDuration = 0), (p.passiveEffectDuration = 0), !0);
    } finally {
      (($.p = a), (y.T = n), Ym(e, t));
    }
  }
  function jm(e, t, n) {
    ((t = ft(n, t)),
      (t = bf(e.stateNode, t, 2)),
      (e = Fn(e, t, 2)),
      e !== null && (Hu(e, 2), an(e)));
  }
  function J(e, t, n) {
    if (((bu = !1), e.tag === 3)) jm(e, e, n);
    else {
      for (; t !== null; ) {
        if (t.tag === 3) {
          jm(t, e, n);
          return;
        }
        if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == 'function' ||
            (typeof l.componentDidCatch == 'function' && (yl === null || !yl.has(l)))
          ) {
            ((e = ft(n, e)),
              (n = Sf(2)),
              (l = Fn(t, n, 2)),
              l !== null && (Tf(n, l, t, e), Hu(l, 2), an(l)));
            return;
          }
        }
        t = t.return;
      }
      console.error(
        `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
        n,
      );
    }
  }
  function Gf(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new U1();
      var a = new Set();
      l.set(t, a);
    } else ((a = l.get(t)), a === void 0 && ((a = new Set()), l.set(t, a)));
    a.has(n) || ((yd = !0), a.add(n), (l = yb.bind(null, e, t, n)), jt && ai(e, n), t.then(l, l));
  }
  function yb(e, t, n) {
    var l = e.pingCache;
    (l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & n),
      (e.warmLanes &= ~n),
      Dm() &&
        y.actQueue === null &&
        console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),
      ee === e &&
        (G & n) === n &&
        (he === ea || (he === hd && (G & 62914560) === G && sn() - vd < _v)
          ? (k & Ie) === ot && wa(e, 0)
          : (gd |= n),
        la === G && (la = 0)),
      an(e));
  }
  function Gm(e, t) {
    (t === 0 && (t = Xd()), (e = Ze(e, t)), e !== null && (Hu(e, t), an(e)));
  }
  function gb(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Gm(e, n));
  }
  function vb(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode,
          a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error('Pinged unknown suspense boundary type. This is probably a bug in React.');
    }
    (l !== null && l.delete(t), Gm(e, n));
  }
  function Xf(e, t, n) {
    if (t.subtreeFlags & 67117056)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          u = a.type === cc;
        ((u = n || u),
          a.tag !== 22
            ? a.flags & 67108864
              ? u && R(a, Xm, l, a)
              : Xf(l, a, u)
            : a.memoizedState === null &&
              (u && a.flags & 8192
                ? R(a, Xm, l, a)
                : a.subtreeFlags & 67108864 && R(a, Xf, l, a, u)),
          (t = t.sibling));
      }
  }
  function Xm(e, t) {
    ce(!0);
    try {
      (mm(t), Em(t), ym(e, t.alternate, t, !1), vm(e, t, 0, null, !1, 0));
    } finally {
      ce(!1);
    }
  }
  function Qm(e) {
    var t = !0;
    (e.current.mode & (Xe | Gt) || (t = !1), Xf(e, e.current, t));
  }
  function Zm(e) {
    if ((k & Ie) === ot) {
      var t = e.tag;
      if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
        if (((t = H(e) || 'ReactComponent'), Yc !== null)) {
          if (Yc.has(t)) return;
          Yc.add(t);
        } else Yc = new Set([t]);
        R(e, function () {
          console.error(
            "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.",
          );
        });
      }
    }
  }
  function ai(e, t) {
    jt &&
      e.memoizedUpdaters.forEach(function (n) {
        $d(e, n, t);
      });
  }
  function bb(e, t) {
    var n = y.actQueue;
    return n !== null ? (n.push(t), N1) : zr(e, t);
  }
  function Sb(e) {
    Dm() &&
      y.actQueue === null &&
      R(e, function () {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          H(e),
        );
      });
  }
  function an(e) {
    (e !== Su && e.next === null && (Su === null ? (Lc = Su = e) : (Su = Su.next = e)),
      (jc = !0),
      y.actQueue !== null ? Dd || ((Dd = !0), Km()) : Ad || ((Ad = !0), Km()));
  }
  function ui(e, t) {
    if (!Rd && jc) {
      Rd = !0;
      do
        for (var n = !1, l = Lc; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var i = l.suspendedLanes,
                o = l.pingedLanes;
              ((u = (1 << (31 - Je(42 | e) + 1)) - 1),
                (u &= a & ~(i & ~o)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((n = !0), km(l, u));
          } else
            ((u = G),
              (u = uo(
                l,
                l === ee ? u : 0,
                l.cancelPendingCommit !== null || l.timeoutHandle !== ca,
              )),
              !(u & 3) || Uu(l, u) || ((n = !0), km(l, u)));
          l = l.next;
        }
      while (n);
      Rd = !1;
    }
  }
  function Tb() {
    Qf();
  }
  function Qf() {
    jc = Dd = Ad = !1;
    var e = 0;
    Sl !== 0 && Ob() && (e = Sl);
    for (var t = sn(), n = null, l = Lc; l !== null; ) {
      var a = l.next,
        u = Jm(l, t);
      (u === 0
        ? ((l.next = null), n === null ? (Lc = a) : (n.next = a), a === null && (Su = n))
        : ((n = l), (e !== 0 || u & 3) && (jc = !0)),
        (l = a));
    }
    ((Ce !== gl && Ce !== Nc) || ui(e), Sl !== 0 && (Sl = 0));
  }
  function Jm(e, t) {
    for (
      var n = e.suspendedLanes,
        l = e.pingedLanes,
        a = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - Je(u),
        o = 1 << i,
        c = a[i];
      (c === -1 ? (!(o & n) || o & l) && (a[i] = E0(o, t)) : c <= t && (e.expiredLanes |= o),
        (u &= ~o));
    }
    if (
      ((t = ee),
      (n = G),
      (n = uo(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== ca)),
      (l = e.callbackNode),
      n === 0 || (e === t && (K === ta || K === na)) || e.cancelPendingCommit !== null)
    )
      return (l !== null && Zf(l), (e.callbackNode = null), (e.callbackPriority = 0));
    if (!(n & 3) || Uu(e, n)) {
      if (((t = n & -n), t !== e.callbackPriority || (y.actQueue !== null && l !== zd))) Zf(l);
      else return t;
      switch (ss(n)) {
        case Rt:
        case rn:
          n = Cr;
          break;
        case Mn:
          n = ja;
          break;
        case hc:
          n = Mr;
          break;
        default:
          n = ja;
      }
      return (
        (l = $m.bind(null, e)),
        y.actQueue !== null ? (y.actQueue.push(l), (n = zd)) : (n = zr(n, l)),
        (e.callbackPriority = t),
        (e.callbackNode = n),
        t
      );
    }
    return (l !== null && Zf(l), (e.callbackPriority = 2), (e.callbackNode = null), 2);
  }
  function $m(e, t) {
    if (((Dc = Ac = !1), Ce !== gl && Ce !== Nc))
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var n = e.callbackNode;
    if (li() && e.callbackNode !== n) return null;
    var l = G;
    return (
      (l = uo(e, e === ee ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== ca)),
      l === 0
        ? null
        : (zm(e, l, t),
          Jm(e, sn()),
          e.callbackNode != null && e.callbackNode === n ? $m.bind(null, e) : null)
    );
  }
  function km(e, t) {
    if (li()) return null;
    ((Ac = Dc), (Dc = !1), zm(e, t, !0));
  }
  function Zf(e) {
    e !== zd && e !== null && rS(e);
  }
  function Km() {
    (y.actQueue !== null &&
      y.actQueue.push(function () {
        return (Qf(), null);
      }),
      $1(function () {
        (k & (Ie | Jt)) !== ot ? zr(Or, Tb) : Qf();
      }));
  }
  function Jf() {
    if (Sl === 0) {
      var e = kl;
      Sl = e !== 0 ? e : Gd();
    }
    return Sl;
  }
  function Wm(e) {
    return e == null || typeof e == 'symbol' || typeof e == 'boolean'
      ? null
      : typeof e == 'function'
        ? e
        : (ae(e, 'action'), Nu('' + e));
  }
  function Fm(e, t) {
    var n = t.ownerDocument.createElement('input');
    return (
      (n.name = t.name),
      (n.value = t.value),
      e.id && n.setAttribute('form', e.id),
      t.parentNode.insertBefore(n, t),
      (e = new FormData(e)),
      n.parentNode.removeChild(n),
      e
    );
  }
  function Eb(e, t, n, l, a) {
    if (t === 'submit' && n && n.stateNode === a) {
      var u = Wm((a[$e] || null).action),
        i = l.submitter;
      i &&
        ((t = (t = i[$e] || null) ? Wm(t.formAction) : i.getAttribute('formAction')),
        t !== null && ((u = t), (i = null)));
      var o = new vc('action', 'action', null, l, a);
      e.push({
        event: o,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (Sl !== 0) {
                  var c = i ? Fm(a, i) : new FormData(a),
                    s = { pending: !0, data: c, method: a.method, action: u };
                  (Object.freeze(s), df(n, s, null, c));
                }
              } else
                typeof u == 'function' &&
                  (o.preventDefault(),
                  (c = i ? Fm(a, i) : new FormData(a)),
                  (s = { pending: !0, data: c, method: a.method, action: u }),
                  Object.freeze(s),
                  df(n, s, u, c));
            },
            currentTarget: a,
          },
        ],
      });
    }
  }
  function Io(e, t, n) {
    e.currentTarget = n;
    try {
      t(e);
    } catch (l) {
      Zr(l);
    }
    e.currentTarget = null;
  }
  function Im(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n];
      e: {
        var a = void 0,
          u = l.event;
        if (((l = l.listeners), t))
          for (var i = l.length - 1; 0 <= i; i--) {
            var o = l[i],
              c = o.instance,
              s = o.currentTarget;
            if (((o = o.listener), c !== a && u.isPropagationStopped())) break e;
            (c !== null ? R(c, Io, u, o, s) : Io(u, o, s), (a = c));
          }
        else
          for (i = 0; i < l.length; i++) {
            if (
              ((o = l[i]),
              (c = o.instance),
              (s = o.currentTarget),
              (o = o.listener),
              c !== a && u.isPropagationStopped())
            )
              break e;
            (c !== null ? R(c, Io, u, o, s) : Io(u, o, s), (a = c));
          }
      }
    }
  }
  function X(e, t) {
    Od.has(e) ||
      console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e,
      );
    var n = t[Ur];
    n === void 0 && (n = t[Ur] = new Set());
    var l = e + '__bubble';
    n.has(l) || (Pm(t, e, 2, !1), n.add(l));
  }
  function $f(e, t, n) {
    Od.has(e) &&
      !t &&
      console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e,
      );
    var l = 0;
    (t && (l |= 4), Pm(n, e, l, t));
  }
  function kf(e) {
    if (!e[Gc]) {
      ((e[Gc] = !0),
        ky.forEach(function (n) {
          n !== 'selectionchange' && (Od.has(n) || $f(n, !1, e), $f(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Gc] || ((t[Gc] = !0), $f('selectionchange', !1, t));
    }
  }
  function Pm(e, t, n, l) {
    switch (Hy(t)) {
      case Rt:
        var a = nS;
        break;
      case rn:
        a = lS;
        break;
      default:
        a = rr;
    }
    ((n = a.bind(null, t, n, e)),
      (a = void 0),
      !Br || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (a = !0),
      l
        ? a !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: a })
          : e.addEventListener(t, n, !0)
        : a !== void 0
          ? e.addEventListener(t, n, { passive: a })
          : e.addEventListener(t, n, !1));
  }
  function Kf(e, t, n, l, a) {
    var u = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var i = l.tag;
        if (i === 3 || i === 4) {
          var o = l.stateNode.containerInfo;
          if (o === a) break;
          if (i === 4)
            for (i = l.return; i !== null; ) {
              var c = i.tag;
              if ((c === 3 || c === 4) && i.stateNode.containerInfo === a) return;
              i = i.return;
            }
          for (; o !== null; ) {
            if (((i = ga(o)), i === null)) return;
            if (((c = i.tag), c === 5 || c === 6 || c === 26 || c === 27)) {
              l = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        l = l.return;
      }
    bh(function () {
      var s = u,
        p = Ss(n),
        m = [];
      e: {
        var h = Hg.get(e);
        if (h !== void 0) {
          var v = vc,
            D = e;
          switch (e) {
            case 'keypress':
              if (ro(n) === 0) break e;
            case 'keydown':
            case 'keyup':
              v = IS;
              break;
            case 'focusin':
              ((D = 'focus'), (v = Yr));
              break;
            case 'focusout':
              ((D = 'blur'), (v = Yr));
              break;
            case 'beforeblur':
            case 'afterblur':
              v = Yr;
              break;
            case 'click':
              if (n.button === 2) break e;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              v = gg;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              v = LS;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              v = t1;
              break;
            case Og:
            case Cg:
            case Mg:
              v = XS;
              break;
            case Ug:
              v = l1;
              break;
            case 'scroll':
            case 'scrollend':
              v = VS;
              break;
            case 'wheel':
              v = u1;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              v = ZS;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              v = bg;
              break;
            case 'toggle':
            case 'beforetoggle':
              v = o1;
          }
          var M = (t & 4) !== 0,
            ne = !M && (e === 'scroll' || e === 'scrollend'),
            Q = M ? (h !== null ? h + 'Capture' : null) : h;
          M = [];
          for (var f = s, r; f !== null; ) {
            var d = f;
            if (
              ((r = d.stateNode),
              (d = d.tag),
              (d !== 5 && d !== 26 && d !== 27) ||
                r === null ||
                Q === null ||
                ((d = Vu(f, Q)), d != null && M.push(ii(f, d, r))),
              ne)
            )
              break;
            f = f.return;
          }
          0 < M.length && ((h = new v(h, D, null, n, p)), m.push({ event: h, listeners: M }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === 'mouseover' || e === 'pointerover'),
            (v = e === 'mouseout' || e === 'pointerout'),
            h && n !== mi && (D = n.relatedTarget || n.fromElement) && (ga(D) || D[cl]))
          )
            break e;
          if (
            (v || h) &&
            ((h =
              p.window === p
                ? p
                : (h = p.ownerDocument)
                  ? h.defaultView || h.parentWindow
                  : window),
            v
              ? ((D = n.relatedTarget || n.toElement),
                (v = s),
                (D = D ? ga(D) : null),
                D !== null &&
                  ((ne = se(D)), (M = D.tag), D !== ne || (M !== 5 && M !== 27 && M !== 6)) &&
                  (D = null))
              : ((v = null), (D = s)),
            v !== D)
          ) {
            if (
              ((M = gg),
              (d = 'onMouseLeave'),
              (Q = 'onMouseEnter'),
              (f = 'mouse'),
              (e === 'pointerout' || e === 'pointerover') &&
                ((M = bg), (d = 'onPointerLeave'), (Q = 'onPointerEnter'), (f = 'pointer')),
              (ne = v == null ? h : xu(v)),
              (r = D == null ? h : xu(D)),
              (h = new M(d, f + 'leave', v, n, p)),
              (h.target = ne),
              (h.relatedTarget = r),
              (d = null),
              ga(p) === s &&
                ((M = new M(Q, f + 'enter', D, n, p)),
                (M.target = r),
                (M.relatedTarget = ne),
                (d = M)),
              (ne = d),
              v && D)
            )
              t: {
                for (M = Ab, Q = v, f = D, r = 0, d = Q; d; d = M(d)) r++;
                d = 0;
                for (var b = f; b; b = M(b)) d++;
                for (; 0 < r - d; ) ((Q = M(Q)), r--);
                for (; 0 < d - r; ) ((f = M(f)), d--);
                for (; r--; ) {
                  if (Q === f || (f !== null && Q === f.alternate)) {
                    M = Q;
                    break t;
                  }
                  ((Q = M(Q)), (f = M(f)));
                }
                M = null;
              }
            else M = null;
            (v !== null && ey(m, h, v, M, !1), D !== null && ne !== null && ey(m, ne, D, M, !0));
          }
        }
        e: {
          if (
            ((h = s ? xu(s) : window),
            (v = h.nodeName && h.nodeName.toLowerCase()),
            v === 'select' || (v === 'input' && h.type === 'file'))
          )
            var T = zh;
          else if (Dh(h))
            if (Rg) T = j0;
            else {
              T = Y0;
              var U = V0;
            }
          else
            ((v = h.nodeName),
              !v || v.toLowerCase() !== 'input' || (h.type !== 'checkbox' && h.type !== 'radio')
                ? s && qu(s.elementType) && (T = zh)
                : (T = L0));
          if (T && (T = T(e, s))) {
            Rh(m, T, n, p);
            break e;
          }
          (U && U(e, h, s),
            e === 'focusout' &&
              s &&
              h.type === 'number' &&
              s.memoizedProps.value != null &&
              ps(h, 'number', h.value));
        }
        switch (((U = s ? xu(s) : window), e)) {
          case 'focusin':
            (Dh(U) || U.contentEditable === 'true') && ((Ka = U), (jr = s), (Ei = null));
            break;
          case 'focusout':
            Ei = jr = Ka = null;
            break;
          case 'mousedown':
            Gr = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Gr = !1), _h(m, n, p));
            break;
          case 'selectionchange':
            if (r1) break;
          case 'keydown':
          case 'keyup':
            _h(m, n, p);
        }
        var C;
        if (Lr)
          e: {
            switch (e) {
              case 'compositionstart':
                var O = 'onCompositionStart';
                break e;
              case 'compositionend':
                O = 'onCompositionEnd';
                break e;
              case 'compositionupdate':
                O = 'onCompositionUpdate';
                break e;
            }
            O = void 0;
          }
        else
          ka
            ? Eh(e, n) && (O = 'onCompositionEnd')
            : e === 'keydown' && n.keyCode === Sg && (O = 'onCompositionStart');
        (O &&
          (Tg &&
            n.locale !== 'ko' &&
            (ka || O !== 'onCompositionStart'
              ? O === 'onCompositionEnd' && ka && (C = Sh())
              : ((sl = p), (qr = 'value' in sl ? sl.value : sl.textContent), (ka = !0))),
          (U = Po(s, O)),
          0 < U.length &&
            ((O = new vg(O, e, null, n, p)),
            m.push({ event: O, listeners: U }),
            C ? (O.data = C) : ((C = Ah(n)), C !== null && (O.data = C)))),
          (C = s1 ? w0(e, n) : B0(e, n)) &&
            ((O = Po(s, 'onBeforeInput')),
            0 < O.length &&
              ((U = new $S('onBeforeInput', 'beforeinput', null, n, p)),
              m.push({ event: U, listeners: O }),
              (U.data = C))),
          Eb(m, e, s, n, p));
      }
      Im(m, t);
    });
  }
  function ii(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Po(e, t) {
    for (var n = t + 'Capture', l = []; e !== null; ) {
      var a = e,
        u = a.stateNode;
      if (
        ((a = a.tag),
        (a !== 5 && a !== 26 && a !== 27) ||
          u === null ||
          ((a = Vu(e, n)),
          a != null && l.unshift(ii(e, a, u)),
          (a = Vu(e, t)),
          a != null && l.push(ii(e, a, u))),
        e.tag === 3)
      )
        return l;
      e = e.return;
    }
    return [];
  }
  function Ab(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ey(e, t, n, l, a) {
    for (var u = t._reactName, i = []; n !== null && n !== l; ) {
      var o = n,
        c = o.alternate,
        s = o.stateNode;
      if (((o = o.tag), c !== null && c === l)) break;
      ((o !== 5 && o !== 26 && o !== 27) ||
        s === null ||
        ((c = s),
        a
          ? ((s = Vu(n, u)), s != null && i.unshift(ii(n, s, c)))
          : a || ((s = Vu(n, u)), s != null && i.push(ii(n, s, c)))),
        (n = n.return));
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  function Wf(e, t) {
    (U0(e, t),
      (e !== 'input' && e !== 'textarea' && e !== 'select') ||
        t == null ||
        t.value !== null ||
        mg ||
        ((mg = !0),
        e === 'select' && t.multiple
          ? console.error(
              '`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.',
              e,
            )
          : console.error(
              '`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.',
              e,
            )));
    var n = { registrationNameDependencies: Ql, possibleRegistrationNames: Hr };
    (qu(e) || typeof t.is == 'string' || x0(e, t, n),
      t.contentEditable &&
        !t.suppressContentEditableWarning &&
        t.children != null &&
        console.error(
          'A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.',
        ));
  }
  function He(e, t, n, l) {
    t !== n && ((n = nl(n)), nl(t) !== n && (l[e] = t));
  }
  function Db(e, t, n) {
    t.forEach(function (l) {
      n[ly(l)] = l === 'style' ? If(e) : e.getAttribute(l);
    });
  }
  function un(e, t) {
    t === !1
      ? console.error(
          'Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
          e,
          e,
          e,
        )
      : console.error(
          'Expected `%s` listener to be a function, instead got a value of `%s` type.',
          e,
          typeof t,
        );
  }
  function ty(e, t) {
    return (
      (e =
        e.namespaceURI === mc || e.namespaceURI === Qa
          ? e.ownerDocument.createElementNS(e.namespaceURI, e.tagName)
          : e.ownerDocument.createElement(e.tagName)),
      (e.innerHTML = t),
      e.innerHTML
    );
  }
  function nl(e) {
    return (
      ao(e) &&
        (console.error(
          'The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.',
          lo(e),
        ),
        Ou(e)),
      (typeof e == 'string' ? e : '' + e)
        .replace(
          V1,
          `
`,
        )
        .replace(Y1, '')
    );
  }
  function ny(e, t) {
    return ((t = nl(t)), nl(e) === t);
  }
  function F(e, t, n, l, a, u) {
    switch (n) {
      case 'children':
        typeof l == 'string'
          ? (fo(l, t, !1), t === 'body' || (t === 'textarea' && l === '') || Bu(e, l))
          : (typeof l == 'number' || typeof l == 'bigint') &&
            (fo('' + l, t, !1), t !== 'body' && Bu(e, '' + l));
        break;
      case 'className':
        oo(e, 'class', l);
        break;
      case 'tabIndex':
        oo(e, 'tabindex', l);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        oo(e, n, l);
        break;
      case 'style':
        yh(e, l, u);
        break;
      case 'data':
        if (t !== 'object') {
          oo(e, 'data', l);
          break;
        }
      case 'src':
      case 'href':
        if (l === '' && (t !== 'a' || n !== 'href')) {
          (console.error(
            n === 'src'
              ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.'
              : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
            n,
            n,
          ),
            e.removeAttribute(n));
          break;
        }
        if (l == null || typeof l == 'function' || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        (ae(l, n), (l = Nu('' + l)), e.setAttribute(n, l));
        break;
      case 'action':
      case 'formAction':
        if (
          (l != null &&
            (t === 'form'
              ? n === 'formAction'
                ? console.error(
                    'You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.',
                  )
                : typeof l == 'function' &&
                  ((a.encType == null && a.method == null) ||
                    Zc ||
                    ((Zc = !0),
                    console.error(
                      'Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.',
                    )),
                  a.target == null ||
                    Qc ||
                    ((Qc = !0),
                    console.error(
                      'Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window.',
                    )))
              : t === 'input' || t === 'button'
                ? n === 'action'
                  ? console.error(
                      'You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.',
                    )
                  : t !== 'input' || a.type === 'submit' || a.type === 'image' || Xc
                    ? t !== 'button' || a.type == null || a.type === 'submit' || Xc
                      ? typeof l == 'function' &&
                        (a.name == null ||
                          Xv ||
                          ((Xv = !0),
                          console.error(
                            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.',
                          )),
                        (a.formEncType == null && a.formMethod == null) ||
                          Zc ||
                          ((Zc = !0),
                          console.error(
                            'Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.',
                          )),
                        a.formTarget == null ||
                          Qc ||
                          ((Qc = !0),
                          console.error(
                            'Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window.',
                          )))
                      : ((Xc = !0),
                        console.error(
                          'A button can only specify a formAction along with type="submit" or no type.',
                        ))
                    : ((Xc = !0),
                      console.error(
                        'An input can only specify a formAction along with type="submit" or type="image".',
                      ))
                : console.error(
                    n === 'action'
                      ? 'You can only pass the action prop to <form>.'
                      : 'You can only pass the formAction prop to <input> or <button>.',
                  )),
          typeof l == 'function')
        ) {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == 'function' &&
            (n === 'formAction'
              ? (t !== 'input' && F(e, t, 'name', a.name, a, null),
                F(e, t, 'formEncType', a.formEncType, a, null),
                F(e, t, 'formMethod', a.formMethod, a, null),
                F(e, t, 'formTarget', a.formTarget, a, null))
              : (F(e, t, 'encType', a.encType, a, null),
                F(e, t, 'method', a.method, a, null),
                F(e, t, 'target', a.target, a, null)));
        if (l == null || typeof l == 'symbol' || typeof l == 'boolean') {
          e.removeAttribute(n);
          break;
        }
        (ae(l, n), (l = Nu('' + l)), e.setAttribute(n, l));
        break;
      case 'onClick':
        l != null && (typeof l != 'function' && un(n, l), (e.onclick = bn));
        break;
      case 'onScroll':
        l != null && (typeof l != 'function' && un(n, l), X('scroll', e));
        break;
      case 'onScrollEnd':
        l != null && (typeof l != 'function' && un(n, l), X('scrollend', e));
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l))
            throw Error(
              '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.',
            );
          if (((n = l.__html), n != null)) {
            if (a.children != null)
              throw Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
            e.innerHTML = n;
          }
        }
        break;
      case 'multiple':
        e.multiple = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'muted':
        e.muted = l && typeof l != 'function' && typeof l != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (l == null || typeof l == 'function' || typeof l == 'boolean' || typeof l == 'symbol') {
          e.removeAttribute('xlink:href');
          break;
        }
        (ae(l, n), (n = Nu('' + l)), e.setAttributeNS(ua, 'xlink:href', n));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        l != null && typeof l != 'function' && typeof l != 'symbol'
          ? (ae(l, n), e.setAttribute(n, '' + l))
          : e.removeAttribute(n);
        break;
      case 'inert':
        l !== '' ||
          Jc[n] ||
          ((Jc[n] = !0),
          console.error(
            'Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.',
            n,
          ));
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        l && typeof l != 'function' && typeof l != 'symbol'
          ? e.setAttribute(n, '')
          : e.removeAttribute(n);
        break;
      case 'capture':
      case 'download':
        l === !0
          ? e.setAttribute(n, '')
          : l !== !1 && l != null && typeof l != 'function' && typeof l != 'symbol'
            ? (ae(l, n), e.setAttribute(n, l))
            : e.removeAttribute(n);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        l != null && typeof l != 'function' && typeof l != 'symbol' && !isNaN(l) && 1 <= l
          ? (ae(l, n), e.setAttribute(n, l))
          : e.removeAttribute(n);
        break;
      case 'rowSpan':
      case 'start':
        l == null || typeof l == 'function' || typeof l == 'symbol' || isNaN(l)
          ? e.removeAttribute(n)
          : (ae(l, n), e.setAttribute(n, l));
        break;
      case 'popover':
        (X('beforetoggle', e), X('toggle', e), io(e, 'popover', l));
        break;
      case 'xlinkActuate':
        vn(e, ua, 'xlink:actuate', l);
        break;
      case 'xlinkArcrole':
        vn(e, ua, 'xlink:arcrole', l);
        break;
      case 'xlinkRole':
        vn(e, ua, 'xlink:role', l);
        break;
      case 'xlinkShow':
        vn(e, ua, 'xlink:show', l);
        break;
      case 'xlinkTitle':
        vn(e, ua, 'xlink:title', l);
        break;
      case 'xlinkType':
        vn(e, ua, 'xlink:type', l);
        break;
      case 'xmlBase':
        vn(e, Cd, 'xml:base', l);
        break;
      case 'xmlLang':
        vn(e, Cd, 'xml:lang', l);
        break;
      case 'xmlSpace':
        vn(e, Cd, 'xml:space', l);
        break;
      case 'is':
        (u != null && console.error('Cannot update the "is" prop after it has been initialized.'),
          io(e, 'is', l));
        break;
      case 'innerText':
      case 'textContent':
        break;
      case 'popoverTarget':
        Qv ||
          l == null ||
          typeof l != 'object' ||
          ((Qv = !0),
          console.error(
            'The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.',
            l,
          ));
      default:
        !(2 < n.length) || (n[0] !== 'o' && n[0] !== 'O') || (n[1] !== 'n' && n[1] !== 'N')
          ? ((n = gh(n)), io(e, n, l))
          : Ql.hasOwnProperty(n) && l != null && typeof l != 'function' && un(n, l);
    }
  }
  function Ff(e, t, n, l, a, u) {
    switch (n) {
      case 'style':
        yh(e, l, u);
        break;
      case 'dangerouslySetInnerHTML':
        if (l != null) {
          if (typeof l != 'object' || !('__html' in l))
            throw Error(
              '`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.',
            );
          if (((n = l.__html), n != null)) {
            if (a.children != null)
              throw Error('Can only set one of `children` or `props.dangerouslySetInnerHTML`.');
            e.innerHTML = n;
          }
        }
        break;
      case 'children':
        typeof l == 'string'
          ? Bu(e, l)
          : (typeof l == 'number' || typeof l == 'bigint') && Bu(e, '' + l);
        break;
      case 'onScroll':
        l != null && (typeof l != 'function' && un(n, l), X('scroll', e));
        break;
      case 'onScrollEnd':
        l != null && (typeof l != 'function' && un(n, l), X('scrollend', e));
        break;
      case 'onClick':
        l != null && (typeof l != 'function' && un(n, l), (e.onclick = bn));
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (Ql.hasOwnProperty(n)) l != null && typeof l != 'function' && un(n, l);
        else
          e: {
            if (
              n[0] === 'o' &&
              n[1] === 'n' &&
              ((a = n.endsWith('Capture')),
              (t = n.slice(2, a ? n.length - 7 : void 0)),
              (u = e[$e] || null),
              (u = u != null ? u[n] : null),
              typeof u == 'function' && e.removeEventListener(t, u, a),
              typeof l == 'function')
            ) {
              (typeof u != 'function' &&
                u !== null &&
                (n in e ? (e[n] = null) : e.hasAttribute(n) && e.removeAttribute(n)),
                e.addEventListener(t, l, a));
              break e;
            }
            n in e ? (e[n] = l) : l === !0 ? e.setAttribute(n, '') : io(e, n, l);
          }
    }
  }
  function qe(e, t, n) {
    switch ((Wf(t, n), t)) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (X('error', e), X('load', e));
        var l = !1,
          a = !1,
          u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var i = n[u];
            if (i != null)
              switch (u) {
                case 'src':
                  l = !0;
                  break;
                case 'srcSet':
                  a = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(
                    t +
                      ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
                  );
                default:
                  F(e, t, u, i, n, null);
              }
          }
        (a && F(e, t, 'srcSet', n.srcSet, n, null), l && F(e, t, 'src', n.src, n, null));
        return;
      case 'input':
        (Sa('input', n), X('invalid', e));
        var o = (u = i = a = null),
          c = null,
          s = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var p = n[l];
            if (p != null)
              switch (l) {
                case 'name':
                  a = p;
                  break;
                case 'type':
                  i = p;
                  break;
                case 'checked':
                  c = p;
                  break;
                case 'defaultChecked':
                  s = p;
                  break;
                case 'value':
                  u = p;
                  break;
                case 'defaultValue':
                  o = p;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (p != null)
                    throw Error(
                      t +
                        ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
                    );
                  break;
                default:
                  F(e, t, l, p, n, null);
              }
          }
        (eh(e, n), th(e, u, o, c, s, i, a, !1));
        return;
      case 'select':
        (Sa('select', n), X('invalid', e), (l = i = u = null));
        for (a in n)
          if (n.hasOwnProperty(a) && ((o = n[a]), o != null))
            switch (a) {
              case 'value':
                u = o;
                break;
              case 'defaultValue':
                i = o;
                break;
              case 'multiple':
                l = o;
              default:
                F(e, t, a, o, n, null);
            }
        (ah(e, n),
          (t = u),
          (n = i),
          (e.multiple = !!l),
          t != null ? Ta(e, !!l, t, !1) : n != null && Ta(e, !!l, n, !0));
        return;
      case 'textarea':
        (Sa('textarea', n), X('invalid', e), (u = a = l = null));
        for (i in n)
          if (n.hasOwnProperty(i) && ((o = n[i]), o != null))
            switch (i) {
              case 'value':
                l = o;
                break;
              case 'defaultValue':
                a = o;
                break;
              case 'children':
                u = o;
                break;
              case 'dangerouslySetInnerHTML':
                if (o != null)
                  throw Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
                break;
              default:
                F(e, t, i, o, n, null);
            }
        (uh(e, n), oh(e, l, a, u));
        return;
      case 'option':
        nh(e, n);
        for (c in n)
          if (n.hasOwnProperty(c) && ((l = n[c]), l != null))
            switch (c) {
              case 'selected':
                e.selected = l && typeof l != 'function' && typeof l != 'symbol';
                break;
              default:
                F(e, t, c, l, n, null);
            }
        return;
      case 'dialog':
        (X('beforetoggle', e), X('toggle', e), X('cancel', e), X('close', e));
        break;
      case 'iframe':
      case 'object':
        X('load', e);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < $i.length; l++) X($i[l], e);
        break;
      case 'image':
        (X('error', e), X('load', e));
        break;
      case 'details':
        X('toggle', e);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (X('error', e), X('load', e));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (s in n)
          if (n.hasOwnProperty(s) && ((l = n[s]), l != null))
            switch (s) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(
                  t +
                    ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
                );
              default:
                F(e, t, s, l, n, null);
            }
        return;
      default:
        if (qu(t)) {
          for (p in n)
            n.hasOwnProperty(p) && ((l = n[p]), l !== void 0 && Ff(e, t, p, l, n, void 0));
          return;
        }
    }
    for (o in n) n.hasOwnProperty(o) && ((l = n[o]), l != null && F(e, t, o, l, n, null));
  }
  function Rb(e, t, n, l) {
    switch ((Wf(t, l), t)) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var a = null,
          u = null,
          i = null,
          o = null,
          c = null,
          s = null,
          p = null;
        for (v in n) {
          var m = n[v];
          if (n.hasOwnProperty(v) && m != null)
            switch (v) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                c = m;
              default:
                l.hasOwnProperty(v) || F(e, t, v, null, l, m);
            }
        }
        for (var h in l) {
          var v = l[h];
          if (((m = n[h]), l.hasOwnProperty(h) && (v != null || m != null)))
            switch (h) {
              case 'type':
                u = v;
                break;
              case 'name':
                a = v;
                break;
              case 'checked':
                s = v;
                break;
              case 'defaultChecked':
                p = v;
                break;
              case 'value':
                i = v;
                break;
              case 'defaultValue':
                o = v;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (v != null)
                  throw Error(
                    t +
                      ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
                  );
                break;
              default:
                v !== m && F(e, t, h, v, l, m);
            }
        }
        ((t = n.type === 'checkbox' || n.type === 'radio' ? n.checked != null : n.value != null),
          (l = l.type === 'checkbox' || l.type === 'radio' ? l.checked != null : l.value != null),
          t ||
            !l ||
            Gv ||
            (console.error(
              'A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components',
            ),
            (Gv = !0)),
          !t ||
            l ||
            jv ||
            (console.error(
              'A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components',
            ),
            (jv = !0)),
          hs(e, i, o, c, s, p, u, a));
        return;
      case 'select':
        v = i = o = h = null;
        for (u in n)
          if (((c = n[u]), n.hasOwnProperty(u) && c != null))
            switch (u) {
              case 'value':
                break;
              case 'multiple':
                v = c;
              default:
                l.hasOwnProperty(u) || F(e, t, u, null, l, c);
            }
        for (a in l)
          if (((u = l[a]), (c = n[a]), l.hasOwnProperty(a) && (u != null || c != null)))
            switch (a) {
              case 'value':
                h = u;
                break;
              case 'defaultValue':
                o = u;
                break;
              case 'multiple':
                i = u;
              default:
                u !== c && F(e, t, a, u, l, c);
            }
        ((l = o),
          (t = i),
          (n = v),
          h != null
            ? Ta(e, !!t, h, !1)
            : !!n != !!t && (l != null ? Ta(e, !!t, l, !0) : Ta(e, !!t, t ? [] : '', !1)));
        return;
      case 'textarea':
        v = h = null;
        for (o in n)
          if (((a = n[o]), n.hasOwnProperty(o) && a != null && !l.hasOwnProperty(o)))
            switch (o) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                F(e, t, o, null, l, a);
            }
        for (i in l)
          if (((a = l[i]), (u = n[i]), l.hasOwnProperty(i) && (a != null || u != null)))
            switch (i) {
              case 'value':
                h = a;
                break;
              case 'defaultValue':
                v = a;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (a != null)
                  throw Error('`dangerouslySetInnerHTML` does not make sense on <textarea>.');
                break;
              default:
                a !== u && F(e, t, i, a, l, u);
            }
        ih(e, h, v);
        return;
      case 'option':
        for (var D in n)
          if (((h = n[D]), n.hasOwnProperty(D) && h != null && !l.hasOwnProperty(D)))
            switch (D) {
              case 'selected':
                e.selected = !1;
                break;
              default:
                F(e, t, D, null, l, h);
            }
        for (c in l)
          if (((h = l[c]), (v = n[c]), l.hasOwnProperty(c) && h !== v && (h != null || v != null)))
            switch (c) {
              case 'selected':
                e.selected = h && typeof h != 'function' && typeof h != 'symbol';
                break;
              default:
                F(e, t, c, h, l, v);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var M in n)
          ((h = n[M]),
            n.hasOwnProperty(M) && h != null && !l.hasOwnProperty(M) && F(e, t, M, null, l, h));
        for (s in l)
          if (((h = l[s]), (v = n[s]), l.hasOwnProperty(s) && h !== v && (h != null || v != null)))
            switch (s) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (h != null)
                  throw Error(
                    t +
                      ' is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.',
                  );
                break;
              default:
                F(e, t, s, h, l, v);
            }
        return;
      default:
        if (qu(t)) {
          for (var ne in n)
            ((h = n[ne]),
              n.hasOwnProperty(ne) &&
                h !== void 0 &&
                !l.hasOwnProperty(ne) &&
                Ff(e, t, ne, void 0, l, h));
          for (p in l)
            ((h = l[p]),
              (v = n[p]),
              !l.hasOwnProperty(p) ||
                h === v ||
                (h === void 0 && v === void 0) ||
                Ff(e, t, p, h, l, v));
          return;
        }
    }
    for (var Q in n)
      ((h = n[Q]),
        n.hasOwnProperty(Q) && h != null && !l.hasOwnProperty(Q) && F(e, t, Q, null, l, h));
    for (m in l)
      ((h = l[m]),
        (v = n[m]),
        !l.hasOwnProperty(m) || h === v || (h == null && v == null) || F(e, t, m, h, l, v));
  }
  function ly(e) {
    switch (e) {
      case 'class':
        return 'className';
      case 'for':
        return 'htmlFor';
      default:
        return e;
    }
  }
  function If(e) {
    var t = {};
    e = e.style;
    for (var n = 0; n < e.length; n++) {
      var l = e[n];
      t[l] = e.getPropertyValue(l);
    }
    return t;
  }
  function ay(e, t, n) {
    if (t != null && typeof t != 'object')
      console.error(
        "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.",
      );
    else {
      var l,
        a = (l = ''),
        u;
      for (u in t)
        if (t.hasOwnProperty(u)) {
          var i = t[u];
          i != null &&
            typeof i != 'boolean' &&
            i !== '' &&
            (u.indexOf('--') === 0
              ? (us(i, u), (l += a + u + ':' + ('' + i).trim()))
              : typeof i != 'number' || i === 0 || hg.has(u)
                ? (us(i, u),
                  (l +=
                    a +
                    u.replace(cg, '-$1').toLowerCase().replace(sg, '-ms-') +
                    ':' +
                    ('' + i).trim()))
                : (l +=
                    a + u.replace(cg, '-$1').toLowerCase().replace(sg, '-ms-') + ':' + i + 'px'),
            (a = ';'));
        }
      ((l = l || null),
        (t = e.getAttribute('style')),
        t !== l && ((l = nl(l)), nl(t) !== l && (n.style = If(e))));
    }
  }
  function Dt(e, t, n, l, a, u) {
    if ((a.delete(n), (e = e.getAttribute(n)), e === null))
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          return;
      }
    else if (l != null)
      switch (typeof l) {
        case 'function':
        case 'symbol':
        case 'boolean':
          break;
        default:
          if ((ae(l, t), e === '' + l)) return;
      }
    He(t, e, l, u);
  }
  function uy(e, t, n, l, a, u) {
    if ((a.delete(n), (e = e.getAttribute(n)), e === null)) {
      switch (typeof l) {
        case 'function':
        case 'symbol':
          return;
      }
      if (!l) return;
    } else
      switch (typeof l) {
        case 'function':
        case 'symbol':
          break;
        default:
          if (l) return;
      }
    He(t, e, l, u);
  }
  function Pf(e, t, n, l, a, u) {
    if ((a.delete(n), (e = e.getAttribute(n)), e === null))
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
          return;
      }
    else if (l != null)
      switch (typeof l) {
        case 'function':
        case 'symbol':
          break;
        default:
          if ((ae(l, n), e === '' + l)) return;
      }
    He(t, e, l, u);
  }
  function iy(e, t, n, l, a, u) {
    if ((a.delete(n), (e = e.getAttribute(n)), e === null))
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          return;
        default:
          if (isNaN(l)) return;
      }
    else if (l != null)
      switch (typeof l) {
        case 'function':
        case 'symbol':
        case 'boolean':
          break;
        default:
          if (!isNaN(l) && (ae(l, t), e === '' + l)) return;
      }
    He(t, e, l, u);
  }
  function er(e, t, n, l, a, u) {
    if ((a.delete(n), (e = e.getAttribute(n)), e === null))
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          return;
      }
    else if (l != null)
      switch (typeof l) {
        case 'function':
        case 'symbol':
        case 'boolean':
          break;
        default:
          if ((ae(l, t), (n = Nu('' + l)), e === n)) return;
      }
    He(t, e, l, u);
  }
  function oy(e, t, n, l) {
    for (var a = {}, u = new Set(), i = e.attributes, o = 0; o < i.length; o++)
      switch (i[o].name.toLowerCase()) {
        case 'value':
          break;
        case 'checked':
          break;
        case 'selected':
          break;
        default:
          u.add(i[o].name);
      }
    if (qu(t)) {
      for (var c in n)
        if (n.hasOwnProperty(c)) {
          var s = n[c];
          if (s != null) {
            if (Ql.hasOwnProperty(c)) typeof s != 'function' && un(c, s);
            else if (n.suppressHydrationWarning !== !0)
              switch (c) {
                case 'children':
                  (typeof s != 'string' && typeof s != 'number') ||
                    He('children', e.textContent, s, a);
                  continue;
                case 'suppressContentEditableWarning':
                case 'suppressHydrationWarning':
                case 'defaultValue':
                case 'defaultChecked':
                case 'innerHTML':
                case 'ref':
                  continue;
                case 'dangerouslySetInnerHTML':
                  ((i = e.innerHTML),
                    (s = s ? s.__html : void 0),
                    s != null && ((s = ty(e, s)), He(c, i, s, a)));
                  continue;
                case 'style':
                  (u.delete(c), ay(e, s, a));
                  continue;
                case 'offsetParent':
                case 'offsetTop':
                case 'offsetLeft':
                case 'offsetWidth':
                case 'offsetHeight':
                case 'isContentEditable':
                case 'outerText':
                case 'outerHTML':
                  (u.delete(c.toLowerCase()),
                    console.error(
                      'Assignment to read-only property will result in a no-op: `%s`',
                      c,
                    ));
                  continue;
                case 'className':
                  (u.delete('class'), (i = Fd(e, 'class', s)), He('className', i, s, a));
                  continue;
                default:
                  (l.context === Yn && t !== 'svg' && t !== 'math'
                    ? u.delete(c.toLowerCase())
                    : u.delete(c),
                    (i = Fd(e, c, s)),
                    He(c, i, s, a));
              }
          }
        }
    } else
      for (s in n)
        if (n.hasOwnProperty(s) && ((c = n[s]), c != null)) {
          if (Ql.hasOwnProperty(s)) typeof c != 'function' && un(s, c);
          else if (n.suppressHydrationWarning !== !0)
            switch (s) {
              case 'children':
                (typeof c != 'string' && typeof c != 'number') ||
                  He('children', e.textContent, c, a);
                continue;
              case 'suppressContentEditableWarning':
              case 'suppressHydrationWarning':
              case 'value':
              case 'checked':
              case 'selected':
              case 'defaultValue':
              case 'defaultChecked':
              case 'innerHTML':
              case 'ref':
                continue;
              case 'dangerouslySetInnerHTML':
                ((i = e.innerHTML),
                  (c = c ? c.__html : void 0),
                  c != null && ((c = ty(e, c)), i !== c && (a[s] = { __html: i })));
                continue;
              case 'className':
                Dt(e, s, 'class', c, u, a);
                continue;
              case 'tabIndex':
                Dt(e, s, 'tabindex', c, u, a);
                continue;
              case 'style':
                (u.delete(s), ay(e, c, a));
                continue;
              case 'multiple':
                (u.delete(s), He(s, e.multiple, c, a));
                continue;
              case 'muted':
                (u.delete(s), He(s, e.muted, c, a));
                continue;
              case 'autoFocus':
                (u.delete('autofocus'), He(s, e.autofocus, c, a));
                continue;
              case 'data':
                if (t !== 'object') {
                  (u.delete(s), (i = e.getAttribute('data')), He(s, i, c, a));
                  continue;
                }
              case 'src':
              case 'href':
                if (
                  !(c !== '' || (t === 'a' && s === 'href') || (t === 'object' && s === 'data'))
                ) {
                  console.error(
                    s === 'src'
                      ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.'
                      : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                    s,
                    s,
                  );
                  continue;
                }
                er(e, s, s, c, u, a);
                continue;
              case 'action':
              case 'formAction':
                if (((i = e.getAttribute(s)), typeof c == 'function')) {
                  (u.delete(s.toLowerCase()),
                    s === 'formAction'
                      ? (u.delete('name'),
                        u.delete('formenctype'),
                        u.delete('formmethod'),
                        u.delete('formtarget'))
                      : (u.delete('enctype'), u.delete('method'), u.delete('target')));
                  continue;
                } else if (i === L1) {
                  (u.delete(s.toLowerCase()), He(s, 'function', c, a));
                  continue;
                }
                er(e, s, s.toLowerCase(), c, u, a);
                continue;
              case 'xlinkHref':
                er(e, s, 'xlink:href', c, u, a);
                continue;
              case 'contentEditable':
                Pf(e, s, 'contenteditable', c, u, a);
                continue;
              case 'spellCheck':
                Pf(e, s, 'spellcheck', c, u, a);
                continue;
              case 'draggable':
              case 'autoReverse':
              case 'externalResourcesRequired':
              case 'focusable':
              case 'preserveAlpha':
                Pf(e, s, s, c, u, a);
                continue;
              case 'allowFullScreen':
              case 'async':
              case 'autoPlay':
              case 'controls':
              case 'default':
              case 'defer':
              case 'disabled':
              case 'disablePictureInPicture':
              case 'disableRemotePlayback':
              case 'formNoValidate':
              case 'hidden':
              case 'loop':
              case 'noModule':
              case 'noValidate':
              case 'open':
              case 'playsInline':
              case 'readOnly':
              case 'required':
              case 'reversed':
              case 'scoped':
              case 'seamless':
              case 'itemScope':
                uy(e, s, s.toLowerCase(), c, u, a);
                continue;
              case 'capture':
              case 'download':
                e: {
                  o = e;
                  var p = (i = s),
                    m = a;
                  if ((u.delete(p), (o = o.getAttribute(p)), o === null))
                    switch (typeof c) {
                      case 'undefined':
                      case 'function':
                      case 'symbol':
                        break e;
                      default:
                        if (c === !1) break e;
                    }
                  else if (c != null)
                    switch (typeof c) {
                      case 'function':
                      case 'symbol':
                        break;
                      case 'boolean':
                        if (c === !0 && o === '') break e;
                        break;
                      default:
                        if ((ae(c, i), o === '' + c)) break e;
                    }
                  He(i, o, c, m);
                }
                continue;
              case 'cols':
              case 'rows':
              case 'size':
              case 'span':
                e: {
                  if (
                    ((o = e),
                    (p = i = s),
                    (m = a),
                    u.delete(p),
                    (o = o.getAttribute(p)),
                    o === null)
                  )
                    switch (typeof c) {
                      case 'undefined':
                      case 'function':
                      case 'symbol':
                      case 'boolean':
                        break e;
                      default:
                        if (isNaN(c) || 1 > c) break e;
                    }
                  else if (c != null)
                    switch (typeof c) {
                      case 'function':
                      case 'symbol':
                      case 'boolean':
                        break;
                      default:
                        if (!(isNaN(c) || 1 > c) && (ae(c, i), o === '' + c)) break e;
                    }
                  He(i, o, c, m);
                }
                continue;
              case 'rowSpan':
                iy(e, s, 'rowspan', c, u, a);
                continue;
              case 'start':
                iy(e, s, s, c, u, a);
                continue;
              case 'xHeight':
                Dt(e, s, 'x-height', c, u, a);
                continue;
              case 'xlinkActuate':
                Dt(e, s, 'xlink:actuate', c, u, a);
                continue;
              case 'xlinkArcrole':
                Dt(e, s, 'xlink:arcrole', c, u, a);
                continue;
              case 'xlinkRole':
                Dt(e, s, 'xlink:role', c, u, a);
                continue;
              case 'xlinkShow':
                Dt(e, s, 'xlink:show', c, u, a);
                continue;
              case 'xlinkTitle':
                Dt(e, s, 'xlink:title', c, u, a);
                continue;
              case 'xlinkType':
                Dt(e, s, 'xlink:type', c, u, a);
                continue;
              case 'xmlBase':
                Dt(e, s, 'xml:base', c, u, a);
                continue;
              case 'xmlLang':
                Dt(e, s, 'xml:lang', c, u, a);
                continue;
              case 'xmlSpace':
                Dt(e, s, 'xml:space', c, u, a);
                continue;
              case 'inert':
                (c !== '' ||
                  Jc[s] ||
                  ((Jc[s] = !0),
                  console.error(
                    'Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.',
                    s,
                  )),
                  uy(e, s, s, c, u, a));
                continue;
              default:
                if (
                  !(2 < s.length) ||
                  (s[0] !== 'o' && s[0] !== 'O') ||
                  (s[1] !== 'n' && s[1] !== 'N')
                ) {
                  ((o = gh(s)),
                    (i = !1),
                    l.context === Yn && t !== 'svg' && t !== 'math'
                      ? u.delete(o.toLowerCase())
                      : ((p = s.toLowerCase()),
                        (p = (yc.hasOwnProperty(p) && yc[p]) || null),
                        p !== null && p !== s && ((i = !0), u.delete(p)),
                        u.delete(o)));
                  e: if (((p = e), (m = o), (o = c), rs(m)))
                    if (p.hasAttribute(m))
                      ((p = p.getAttribute(m)), ae(o, m), (o = p === '' + o ? o : p));
                    else {
                      switch (typeof o) {
                        case 'function':
                        case 'symbol':
                          break e;
                        case 'boolean':
                          if (((p = m.toLowerCase().slice(0, 5)), p !== 'data-' && p !== 'aria-'))
                            break e;
                      }
                      o = o === void 0 ? void 0 : null;
                    }
                  else o = void 0;
                  i || He(s, o, c, a);
                }
            }
        }
    return (
      0 < u.size && n.suppressHydrationWarning !== !0 && Db(e, u, a),
      Object.keys(a).length === 0 ? null : a
    );
  }
  function zb(e, t) {
    switch (e.length) {
      case 0:
        return '';
      case 1:
        return e[0];
      case 2:
        return e[0] + ' ' + t + ' ' + e[1];
      default:
        return e.slice(0, -1).join(', ') + ', ' + t + ' ' + e[e.length - 1];
    }
  }
  function ec(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function cy(e) {
    switch (e) {
      case Qa:
        return Eu;
      case mc:
        return kc;
      default:
        return Yn;
    }
  }
  function sy(e, t) {
    if (e === Yn)
      switch (t) {
        case 'svg':
          return Eu;
        case 'math':
          return kc;
        default:
          return Yn;
      }
    return e === Eu && t === 'foreignObject' ? Yn : e;
  }
  function tr(e, t) {
    return (
      e === 'textarea' ||
      e === 'noscript' ||
      typeof t.children == 'string' ||
      typeof t.children == 'number' ||
      typeof t.children == 'bigint' ||
      (typeof t.dangerouslySetInnerHTML == 'object' &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  function Ob() {
    var e = window.event;
    return e && e.type === 'popstate' ? (e === xd ? !1 : ((xd = e), !0)) : ((xd = null), !1);
  }
  function Cb(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Mb(e, t, n) {
    switch (t) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        n.autoFocus && e.focus();
        break;
      case 'img':
        n.src ? (e.src = n.src) : n.srcSet && (e.srcset = n.srcSet);
    }
  }
  function Ub() {}
  function Hb(e, t, n, l) {
    (Rb(e, t, n, l), (e[$e] = l));
  }
  function fy(e) {
    Bu(e, '');
  }
  function xb(e, t, n) {
    e.nodeValue = n;
  }
  function ry(e) {
    if (!e.__reactWarnedAboutChildrenConflict) {
      var t = e[$e] || null;
      if (t !== null) {
        var n = Zn(e);
        n !== null &&
          (typeof t.children == 'string' || typeof t.children == 'number'
            ? ((e.__reactWarnedAboutChildrenConflict = !0),
              R(n, function () {
                console.error(
                  'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.',
                );
              }))
            : t.dangerouslySetInnerHTML != null &&
              ((e.__reactWarnedAboutChildrenConflict = !0),
              R(n, function () {
                console.error(
                  'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.',
                );
              })));
      }
    }
  }
  function ll(e) {
    return e === 'head';
  }
  function _b(e, t) {
    e.removeChild(t);
  }
  function wb(e, t) {
    (e.nodeType === 9 ? e.body : e.nodeName === 'HTML' ? e.ownerDocument.body : e).removeChild(t);
  }
  function dy(e, t) {
    var n = t,
      l = 0;
    do {
      var a = n.nextSibling;
      if ((e.removeChild(n), a && a.nodeType === 8))
        if (((n = a.data), n === Ki || n === $c)) {
          if (l === 0) {
            (e.removeChild(a), Va(t));
            return;
          }
          l--;
        } else if (n === ki || n === Tl || n === oa || n === Tu || n === ia) l++;
        else if (n === G1) oi(e.ownerDocument.documentElement);
        else if (n === Q1) {
          ((n = e.ownerDocument.head), oi(n));
          for (var u = n.firstChild; u; ) {
            var i = u.nextSibling,
              o = u.nodeName;
            (u[pi] ||
              o === 'SCRIPT' ||
              o === 'STYLE' ||
              (o === 'LINK' && u.rel.toLowerCase() === 'stylesheet') ||
              n.removeChild(u),
              (u = i));
          }
        } else n === X1 && oi(e.ownerDocument.body);
      n = a;
    } while (n);
    Va(t);
  }
  function hy(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (
        (n.nodeType === 1
          ? t
            ? ((n._stashedDisplay = n.style.display), (n.style.display = 'none'))
            : ((n.style.display = n._stashedDisplay || ''),
              n.getAttribute('style') === '' && n.removeAttribute('style'))
          : n.nodeType === 3 &&
            (t
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ''))
              : (n.nodeValue = n._stashedText || '')),
        l && l.nodeType === 8)
      )
        if (((n = l.data), n === Ki)) {
          if (e === 0) break;
          e--;
        } else (n !== ki && n !== Tl && n !== oa && n !== Tu) || e++;
      n = l;
    } while (n);
  }
  function Bb(e) {
    hy(e, !0);
  }
  function qb(e) {
    ((e = e.style),
      typeof e.setProperty == 'function'
        ? e.setProperty('display', 'none', 'important')
        : (e.display = 'none'));
  }
  function Nb(e) {
    e.nodeValue = '';
  }
  function Vb(e) {
    hy(e, !1);
  }
  function Yb(e, t) {
    ((t = t[Z1]),
      (t = t != null && t.hasOwnProperty('display') ? t.display : null),
      (e.style.display = t == null || typeof t == 'boolean' ? '' : ('' + t).trim()));
  }
  function Lb(e, t) {
    e.nodeValue = t;
  }
  function nr(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (((t = t.nextSibling), n.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (nr(n), fs(n));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (n.rel.toLowerCase() === 'stylesheet') continue;
      }
      e.removeChild(n);
    }
  }
  function jb(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break;
      } else if (l) {
        if (!e[pi])
          switch (t) {
            case 'meta':
              if (!e.hasAttribute('itemprop')) break;
              return e;
            case 'link':
              if (
                ((u = e.getAttribute('rel')),
                u === 'stylesheet' && e.hasAttribute('data-precedence'))
              )
                break;
              if (
                u !== a.rel ||
                e.getAttribute('href') !== (a.href == null || a.href === '' ? null : a.href) ||
                e.getAttribute('crossorigin') !== (a.crossOrigin == null ? null : a.crossOrigin) ||
                e.getAttribute('title') !== (a.title == null ? null : a.title)
              )
                break;
              return e;
            case 'style':
              if (e.hasAttribute('data-precedence')) break;
              return e;
            case 'script':
              if (
                ((u = e.getAttribute('src')),
                (u !== (a.src == null ? null : a.src) ||
                  e.getAttribute('type') !== (a.type == null ? null : a.type) ||
                  e.getAttribute('crossorigin') !==
                    (a.crossOrigin == null ? null : a.crossOrigin)) &&
                  u &&
                  e.hasAttribute('async') &&
                  !e.hasAttribute('itemprop'))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === 'input' && e.type === 'hidden') {
        ae(a.name, 'name');
        var u = a.name == null ? null : '' + a.name;
        if (a.type === 'hidden' && e.getAttribute('name') === u) return e;
      } else return e;
      if (((e = mt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Gb(e, t, n) {
    if (t === '') return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') && !n) ||
        ((e = mt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function py(e, t) {
    for (; e.nodeType !== 8; ) if (!t || ((e = mt(e.nextSibling)), e === null)) return null;
    return e;
  }
  function lr(e) {
    return e.data === Tl || e.data === oa;
  }
  function ar(e) {
    return e.data === Tu || (e.data === Tl && e.ownerDocument.readyState !== Jv);
  }
  function Xb(e, t) {
    var n = e.ownerDocument;
    if (e.data === oa) e._reactRetry = t;
    else if (e.data !== Tl || n.readyState !== Jv) t();
    else {
      var l = function () {
        (t(), n.removeEventListener('DOMContentLoaded', l));
      };
      (n.addEventListener('DOMContentLoaded', l), (e._reactRetry = l));
    }
  }
  function mt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === ki || t === Tu || t === Tl || t === oa || t === ia || t === Md || t === Zv)
        )
          break;
        if (t === Ki || t === $c) return null;
      }
    }
    return e;
  }
  function my(e) {
    if (e.nodeType === 1) {
      for (var t = e.nodeName.toLowerCase(), n = {}, l = e.attributes, a = 0; a < l.length; a++) {
        var u = l[a];
        n[ly(u.name)] = u.name.toLowerCase() === 'style' ? If(e) : u.value;
      }
      return { type: t, props: n };
    }
    return e.nodeType === 8
      ? e.data === ia
        ? { type: 'Activity', props: {} }
        : { type: 'Suspense', props: {} }
      : e.nodeValue;
  }
  function yy(e, t, n) {
    return n === null || n[j1] !== !0
      ? (e.nodeValue === t
          ? (e = null)
          : ((t = nl(t)), (e = nl(e.nodeValue) === t ? null : e.nodeValue)),
        e)
      : null;
  }
  function ur(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === Ki || n === $c) {
          if (t === 0) return mt(e.nextSibling);
          t--;
        } else (n !== ki && n !== Tu && n !== Tl && n !== oa && n !== ia) || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function gy(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === ki || n === Tu || n === Tl || n === oa || n === ia) {
          if (t === 0) return e;
          t--;
        } else (n !== Ki && n !== $c) || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Qb(e) {
    Va(e);
  }
  function Zb(e) {
    Va(e);
  }
  function Jb(e) {
    Va(e);
  }
  function vy(e, t, n, l, a) {
    switch ((a && bs(e, l.ancestorInfo), (t = ec(n)), e)) {
      case 'html':
        if (((e = t.documentElement), !e))
          throw Error(
            'React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.',
          );
        return e;
      case 'head':
        if (((e = t.head), !e))
          throw Error(
            'React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.',
          );
        return e;
      case 'body':
        if (((e = t.body), !e))
          throw Error(
            'React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.',
          );
        return e;
      default:
        throw Error(
          'resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.',
        );
    }
  }
  function $b(e, t, n, l) {
    if (!n[cl] && Zn(n)) {
      var a = n.tagName.toLowerCase();
      console.error(
        'You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.',
        a,
        a,
        a,
      );
    }
    switch (e) {
      case 'html':
      case 'head':
      case 'body':
        break;
      default:
        console.error(
          'acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.',
        );
    }
    for (a = n.attributes; a.length; ) n.removeAttributeNode(a[0]);
    (qe(n, e, t), (n[Ve] = l), (n[$e] = t));
  }
  function oi(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    fs(e);
  }
  function tc(e) {
    return typeof e.getRootNode == 'function'
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  function by(e, t, n) {
    var l = Au;
    if (l && typeof t == 'string' && t) {
      var a = At(t);
      ((a = 'link[rel="' + e + '"][href="' + a + '"]'),
        typeof n == 'string' && (a += '[crossorigin="' + n + '"]'),
        Iv.has(a) ||
          (Iv.add(a),
          (e = { rel: e, crossOrigin: n, href: t }),
          l.querySelector(a) === null &&
            ((t = l.createElement('link')), qe(t, 'link', e), Ue(t), l.head.appendChild(t))));
    }
  }
  function Sy(e, t, n, l) {
    var a = (a = il.current) ? tc(a) : null;
    if (!a) throw Error('"resourceRoot" was expected to exist. This is a bug in React.');
    switch (e) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof n.precedence == 'string' && typeof n.href == 'string'
          ? ((n = qa(n.href)),
            (t = va(a).hoistableStyles),
            (l = t.get(n)),
            l || ((l = { type: 'style', instance: null, count: 0, state: null }), t.set(n, l)),
            l)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          n.rel === 'stylesheet' &&
          typeof n.href == 'string' &&
          typeof n.precedence == 'string'
        ) {
          e = qa(n.href);
          var u = va(a).hoistableStyles,
            i = u.get(e);
          if (
            !i &&
            ((a = a.ownerDocument || a),
            (i = {
              type: 'stylesheet',
              instance: null,
              count: 0,
              state: { loading: sa, preload: null },
            }),
            u.set(e, i),
            (u = a.querySelector(ci(e))) &&
              !u._p &&
              ((i.instance = u), (i.state.loading = Wi | Bt)),
            !qt.has(e))
          ) {
            var o = {
              rel: 'preload',
              as: 'style',
              href: n.href,
              crossOrigin: n.crossOrigin,
              integrity: n.integrity,
              media: n.media,
              hrefLang: n.hrefLang,
              referrerPolicy: n.referrerPolicy,
            };
            (qt.set(e, o), u || kb(a, e, o, i.state));
          }
          if (t && l === null)
            throw (
              (n =
                `

  - ` +
                nc(t) +
                `
  + ` +
                nc(n)),
              Error(
                'Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key.' +
                  n,
              )
            );
          return i;
        }
        if (t && l !== null)
          throw (
            (n =
              `

  - ` +
              nc(t) +
              `
  + ` +
              nc(n)),
            Error(
              'Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key.' +
                n,
            )
          );
        return null;
      case 'script':
        return (
          (t = n.async),
          (n = n.src),
          typeof n == 'string' && t && typeof t != 'function' && typeof t != 'symbol'
            ? ((n = Na(n)),
              (t = va(a).hoistableScripts),
              (l = t.get(n)),
              l || ((l = { type: 'script', instance: null, count: 0, state: null }), t.set(n, l)),
              l)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(
          'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.',
        );
    }
  }
  function nc(e) {
    var t = 0,
      n = '<link';
    return (
      typeof e.rel == 'string'
        ? (t++, (n += ' rel="' + e.rel + '"'))
        : Cn.call(e, 'rel') &&
          (t++, (n += ' rel="' + (e.rel === null ? 'null' : 'invalid type ' + typeof e.rel) + '"')),
      typeof e.href == 'string'
        ? (t++, (n += ' href="' + e.href + '"'))
        : Cn.call(e, 'href') &&
          (t++,
          (n += ' href="' + (e.href === null ? 'null' : 'invalid type ' + typeof e.href) + '"')),
      typeof e.precedence == 'string'
        ? (t++, (n += ' precedence="' + e.precedence + '"'))
        : Cn.call(e, 'precedence') &&
          (t++,
          (n +=
            ' precedence={' +
            (e.precedence === null ? 'null' : 'invalid type ' + typeof e.precedence) +
            '}')),
      Object.getOwnPropertyNames(e).length > t && (n += ' ...'),
      n + ' />'
    );
  }
  function qa(e) {
    return 'href="' + At(e) + '"';
  }
  function ci(e) {
    return 'link[rel="stylesheet"][' + e + ']';
  }
  function Ty(e) {
    return V({}, e, { 'data-precedence': e.precedence, precedence: null });
  }
  function kb(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + ']')
      ? (l.loading = Wi)
      : ((t = e.createElement('link')),
        (l.preload = t),
        t.addEventListener('load', function () {
          return (l.loading |= Wi);
        }),
        t.addEventListener('error', function () {
          return (l.loading |= Wv);
        }),
        qe(t, 'link', n),
        Ue(t),
        e.head.appendChild(t));
  }
  function Na(e) {
    return '[src="' + At(e) + '"]';
  }
  function si(e) {
    return 'script[async]' + e;
  }
  function Ey(e, t, n) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case 'style':
          var l = e.querySelector('style[data-href~="' + At(n.href) + '"]');
          if (l) return ((t.instance = l), Ue(l), l);
          var a = V({}, n, {
            'data-href': n.href,
            'data-precedence': n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement('style')),
            Ue(l),
            qe(l, 'style', a),
            lc(l, n.precedence, e),
            (t.instance = l)
          );
        case 'stylesheet':
          a = qa(n.href);
          var u = e.querySelector(ci(a));
          if (u) return ((t.state.loading |= Bt), (t.instance = u), Ue(u), u);
          ((l = Ty(n)),
            (a = qt.get(a)) && ir(l, a),
            (u = (e.ownerDocument || e).createElement('link')),
            Ue(u));
          var i = u;
          return (
            (i._p = new Promise(function (o, c) {
              ((i.onload = o), (i.onerror = c));
            })),
            qe(u, 'link', l),
            (t.state.loading |= Bt),
            lc(u, n.precedence, e),
            (t.instance = u)
          );
        case 'script':
          return (
            (u = Na(n.src)),
            (a = e.querySelector(si(u)))
              ? ((t.instance = a), Ue(a), a)
              : ((l = n),
                (a = qt.get(u)) && ((l = V({}, n)), or(l, a)),
                (e = e.ownerDocument || e),
                (a = e.createElement('script')),
                Ue(a),
                qe(a, 'link', l),
                e.head.appendChild(a),
                (t.instance = a))
          );
        case 'void':
          return null;
        default:
          throw Error(
            'acquireResource encountered a resource type it did not expect: "' +
              t.type +
              '". this is a bug in React.',
          );
      }
    else
      t.type === 'stylesheet' &&
        (t.state.loading & Bt) === sa &&
        ((l = t.instance), (t.state.loading |= Bt), lc(l, n.precedence, e));
    return t.instance;
  }
  function lc(e, t, n) {
    for (
      var l = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),
        a = l.length ? l[l.length - 1] : null,
        u = a,
        i = 0;
      i < l.length;
      i++
    ) {
      var o = l[i];
      if (o.dataset.precedence === t) u = o;
      else if (u !== a) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
  }
  function ir(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function or(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  function Ay(e, t, n) {
    if (Kc === null) {
      var l = new Map(),
        a = (Kc = new Map());
      a.set(n, l);
    } else ((a = Kc), (l = a.get(n)), l || ((l = new Map()), a.set(n, l)));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (
        !(u[pi] || u[Ve] || (e === 'link' && u.getAttribute('rel') === 'stylesheet')) &&
        u.namespaceURI !== Qa
      ) {
        var i = u.getAttribute(t) || '';
        i = e + i;
        var o = l.get(i);
        o ? o.push(u) : l.set(i, [u]);
      }
    }
    return l;
  }
  function Dy(e, t, n) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(n, t === 'title' ? e.querySelector('head > title') : null));
  }
  function Kb(e, t, n) {
    var l = !n.ancestorInfo.containerTagInScope;
    if (n.context === Eu || t.itemProp != null)
      return (
        !l ||
          t.itemProp == null ||
          (e !== 'meta' && e !== 'title' && e !== 'style' && e !== 'link' && e !== 'script') ||
          console.error(
            'Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.',
            e,
            e,
          ),
        !1
      );
    switch (e) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (typeof t.precedence != 'string' || typeof t.href != 'string' || t.href === '') {
          l &&
            console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.',
            );
          break;
        }
        return !0;
      case 'link':
        if (
          typeof t.rel != 'string' ||
          typeof t.href != 'string' ||
          t.href === '' ||
          t.onLoad ||
          t.onError
        ) {
          if (t.rel === 'stylesheet' && typeof t.precedence == 'string') {
            e = t.href;
            var a = t.onError,
              u = t.disabled;
            ((n = []),
              t.onLoad && n.push('`onLoad`'),
              a && n.push('`onError`'),
              u != null && n.push('`disabled`'),
              (a = zb(n, 'and')),
              (a += n.length === 1 ? ' prop' : ' props'),
              (u = n.length === 1 ? 'an ' + a : 'the ' + a),
              n.length &&
                console.error(
                  'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                  e,
                  u,
                  a,
                ));
          }
          l &&
            (typeof t.rel != 'string' || typeof t.href != 'string' || t.href === ''
              ? console.error(
                  'Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag',
                )
              : (t.onError || t.onLoad) &&
                console.error(
                  'Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.',
                ));
          break;
        }
        switch (t.rel) {
          case 'stylesheet':
            return (
              (e = t.precedence),
              (t = t.disabled),
              typeof e != 'string' &&
                l &&
                console.error(
                  'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.',
                ),
              typeof e == 'string' && t == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          ((e = t.async && typeof t.async != 'function' && typeof t.async != 'symbol'),
          !e || t.onLoad || t.onError || !t.src || typeof t.src != 'string')
        ) {
          l &&
            (e
              ? t.onLoad || t.onError
                ? console.error(
                    'Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.',
                  )
                : console.error(
                    'Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>.',
                  )
              : console.error(
                  'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.',
                ));
          break;
        }
        return !0;
      case 'noscript':
      case 'template':
        l &&
          console.error(
            'Cannot render <%s> outside the main document. Try moving it into the root <head> tag.',
            e,
          );
    }
    return !1;
  }
  function Ry(e) {
    return !(e.type === 'stylesheet' && (e.state.loading & Fv) === sa);
  }
  function Wb(e, t, n) {
    if (Fi === null)
      throw Error(
        'Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug.',
      );
    var l = Fi;
    if (
      t.type === 'stylesheet' &&
      (typeof n.media != 'string' || matchMedia(n.media).matches !== !1) &&
      (t.state.loading & Bt) === sa
    ) {
      if (t.instance === null) {
        var a = qa(n.href),
          u = e.querySelector(ci(a));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == 'object' &&
              typeof e.then == 'function' &&
              (l.count++, (l = ac.bind(l)), e.then(l, l)),
            (t.state.loading |= Bt),
            (t.instance = u),
            Ue(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (n = Ty(n)),
          (a = qt.get(a)) && ir(n, a),
          (u = u.createElement('link')),
          Ue(u));
        var i = u;
        ((i._p = new Promise(function (o, c) {
          ((i.onload = o), (i.onerror = c));
        })),
          qe(u, 'link', n),
          (t.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & Fv) === sa &&
          (l.count++,
          (t = ac.bind(l)),
          e.addEventListener('load', t),
          e.addEventListener('error', t)));
    }
  }
  function Fb() {
    if (Fi === null)
      throw Error(
        'Internal React Error: suspendedState null when it was expected to exists. Please report this as a React bug.',
      );
    var e = Fi;
    return (
      e.stylesheets && e.count === 0 && cr(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var n = setTimeout(function () {
              if ((e.stylesheets && cr(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                ((e.unsuspend = null), l());
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                ((e.unsuspend = null), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function ac() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) cr(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  function cr(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++, (Wc = new Map()), t.forEach(Ib, e), (Wc = null), ac.call(e)));
  }
  function Ib(e, t) {
    if (!(t.state.loading & Bt)) {
      var n = Wc.get(e);
      if (n) var l = n.get(wd);
      else {
        ((n = new Map()), Wc.set(e, n));
        for (
          var a = e.querySelectorAll('link[data-precedence],style[data-precedence]'), u = 0;
          u < a.length;
          u++
        ) {
          var i = a[u];
          (i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') &&
            (n.set(i.dataset.precedence, i), (l = i));
        }
        l && n.set(wd, l);
      }
      ((a = t.instance),
        (i = a.getAttribute('data-precedence')),
        (u = n.get(i) || l),
        u === l && n.set(wd, a),
        n.set(i, a),
        this.count++,
        (l = ac.bind(this)),
        a.addEventListener('load', l),
        a.addEventListener('error', l),
        u
          ? u.parentNode.insertBefore(a, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e), e.insertBefore(a, e.firstChild)),
        (t.state.loading |= Bt));
    }
  }
  function Pb(e, t, n, l, a, u, i, o, c) {
    for (
      this.tag = 1,
        this.containerInfo = e,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = ca,
        this.callbackNode =
          this.next =
          this.pendingContext =
          this.context =
          this.cancelPendingCommit =
            null,
        this.callbackPriority = 0,
        this.expirationTimes = os(-1),
        this.entangledLanes =
          this.shellSuspendCounter =
          this.errorRecoveryDisabledLanes =
          this.expiredLanes =
          this.warmLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0,
        this.entanglements = os(0),
        this.hiddenUpdates = os(null),
        this.identifierPrefix = l,
        this.onUncaughtError = a,
        this.onCaughtError = u,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = c,
        this.incompleteTransitions = new Map(),
        this.passiveEffectDuration = this.effectDuration = -0,
        this.memoizedUpdaters = new Set(),
        e = this.pendingUpdatersLaneMap = [],
        t = 0;
      31 > t;
      t++
    )
      e.push(new Set());
    this._debugRootType = n ? 'hydrateRoot()' : 'createRoot()';
  }
  function zy(e, t, n, l, a, u, i, o, c, s, p, m) {
    return (
      (e = new Pb(e, t, n, i, c, s, p, m, o)),
      (t = g1),
      u === !0 && (t |= Xe | Gt),
      jt && (t |= Ee),
      (u = Qe(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Bs()),
      Vl(t),
      (e.pooledCache = t),
      Vl(t),
      (u.memoizedState = { element: l, isDehydrated: n, cache: t }),
      Ys(u),
      e
    );
  }
  function Oy(e) {
    return e ? ((e = fl), e) : fl;
  }
  function sr(e, t, n, l, a, u) {
    if (Ge && typeof Ge.onScheduleFiberRoot == 'function')
      try {
        Ge.onScheduleFiberRoot(Ga, l, n);
      } catch (i) {
        fn || ((fn = !0), console.error('React instrumentation encountered an error: %o', i));
      }
    (A !== null && typeof A.markRenderScheduled == 'function' && A.markRenderScheduled(t),
      (a = Oy(a)),
      l.context === null ? (l.context = a) : (l.pendingContext = a),
      cn &&
        gt !== null &&
        !n0 &&
        ((n0 = !0),
        console.error(
          `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
          H(gt) || 'Unknown',
        )),
      (l = Wn(t)),
      (l.payload = { element: n }),
      (u = u === void 0 ? null : u),
      u !== null &&
        (typeof u != 'function' &&
          console.error(
            'Expected the last optional `callback` argument to be a function. Instead received: %s.',
            u,
          ),
        (l.callback = u)),
      (n = Fn(e, l, t)),
      n !== null && (de(n, e, t), Zu(n, e, t)));
  }
  function Cy(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fr(e, t) {
    (Cy(e, t), (e = e.alternate) && Cy(e, t));
  }
  function My(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ze(e, 67108864);
      (t !== null && de(t, e, 67108864), fr(e, 67108864));
    }
  }
  function Uy(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = pt(e);
      t = cs(t);
      var n = Ze(e, t);
      (n !== null && de(n, e, t), fr(e, t));
    }
  }
  function eS() {
    return gt;
  }
  function tS() {
    for (var e = new Map(), t = 1, n = 0; 31 > n; n++) {
      var l = T0(t);
      (e.set(t, l), (t *= 2));
    }
    return e;
  }
  function nS(e, t, n, l) {
    var a = y.T;
    y.T = null;
    var u = $.p;
    try {
      (($.p = Rt), rr(e, t, n, l));
    } finally {
      (($.p = u), (y.T = a));
    }
  }
  function lS(e, t, n, l) {
    var a = y.T;
    y.T = null;
    var u = $.p;
    try {
      (($.p = rn), rr(e, t, n, l));
    } finally {
      (($.p = u), (y.T = a));
    }
  }
  function rr(e, t, n, l) {
    if (Ic) {
      var a = dr(l);
      if (a === null) (Kf(e, t, l, Pc, n), xy(e, l));
      else if (aS(a, e, t, n, l)) l.stopPropagation();
      else if ((xy(e, l), t & 4 && -1 < K1.indexOf(e))) {
        for (; a !== null; ) {
          var u = Zn(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Cl(u.pendingLanes);
                  if (i !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var c = 1 << (31 - Je(i));
                      ((o.entanglements[1] |= c), (i &= ~c));
                    }
                    (an(u), (k & (Ie | Jt)) === ot && ((qc = sn() + wv), ui(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((o = Ze(u, 2)), o !== null && de(o, u, 2), _a(), fr(u, 2));
            }
          if (((u = dr(l)), u === null && Kf(e, t, l, Pc, n), u === a)) break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else Kf(e, t, l, null, n);
    }
  }
  function dr(e) {
    return ((e = Ss(e)), hr(e));
  }
  function hr(e) {
    if (((Pc = null), (e = ga(e)), e !== null)) {
      var t = se(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (((e = da(t)), e !== null)) return e;
          e = null;
        } else if (n === 31) {
          if (((e = Gn(t)), e !== null)) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((Pc = e), null);
  }
  function Hy(e) {
    switch (e) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return Rt;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return rn;
      case 'message':
        switch (pS()) {
          case Or:
            return Rt;
          case Cr:
            return rn;
          case ja:
          case mS:
            return Mn;
          case Mr:
            return hc;
          default:
            return Mn;
        }
      default:
        return Mn;
    }
  }
  function xy(e, t) {
    switch (e) {
      case 'focusin':
      case 'focusout':
        El = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Al = null;
        break;
      case 'mouseover':
      case 'mouseout':
        Dl = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Pi.delete(t.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        eo.delete(t.pointerId);
    }
  }
  function fi(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: l,
          nativeEvent: u,
          targetContainers: [a],
        }),
        t !== null && ((t = Zn(t)), t !== null && My(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        a !== null && t.indexOf(a) === -1 && t.push(a),
        e);
  }
  function aS(e, t, n, l, a) {
    switch (t) {
      case 'focusin':
        return ((El = fi(El, e, t, n, l, a)), !0);
      case 'dragenter':
        return ((Al = fi(Al, e, t, n, l, a)), !0);
      case 'mouseover':
        return ((Dl = fi(Dl, e, t, n, l, a)), !0);
      case 'pointerover':
        var u = a.pointerId;
        return (Pi.set(u, fi(Pi.get(u) || null, e, t, n, l, a)), !0);
      case 'gotpointercapture':
        return ((u = a.pointerId), eo.set(u, fi(eo.get(u) || null, e, t, n, l, a)), !0);
    }
    return !1;
  }
  function _y(e) {
    var t = ga(e.target);
    if (t !== null) {
      var n = se(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = da(n)), t !== null)) {
            ((e.blockedOn = t),
              Wd(e.priority, function () {
                Uy(n);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Gn(n)), t !== null)) {
            ((e.blockedOn = t),
              Wd(e.priority, function () {
                Uy(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function uc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = dr(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(n.type, n),
          a = l;
        (mi !== null &&
          console.error(
            'Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.',
          ),
          (mi = a),
          n.target.dispatchEvent(l),
          mi === null &&
            console.error(
              'Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.',
            ),
          (mi = null));
      } else return ((t = Zn(n)), t !== null && My(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function wy(e, t, n) {
    uc(e) && n.delete(t);
  }
  function uS() {
    ((Bd = !1),
      El !== null && uc(El) && (El = null),
      Al !== null && uc(Al) && (Al = null),
      Dl !== null && uc(Dl) && (Dl = null),
      Pi.forEach(wy),
      eo.forEach(wy));
  }
  function ic(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Bd || ((Bd = !0), Te.unstable_scheduleCallback(Te.unstable_NormalPriority, uS)));
  }
  function By(e) {
    es !== e &&
      ((es = e),
      Te.unstable_scheduleCallback(Te.unstable_NormalPriority, function () {
        es === e && (es = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t],
            l = e[t + 1],
            a = e[t + 2];
          if (typeof l != 'function') {
            if (hr(l || n) === null) continue;
            break;
          }
          var u = Zn(n);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            (n = { pending: !0, data: a, method: n.method, action: l }),
            Object.freeze(n),
            df(u, n, l, a));
        }
      }));
  }
  function Va(e) {
    function t(c) {
      return ic(c, e);
    }
    (El !== null && ic(El, e),
      Al !== null && ic(Al, e),
      Dl !== null && ic(Dl, e),
      Pi.forEach(t),
      eo.forEach(t));
    for (var n = 0; n < Rl.length; n++) {
      var l = Rl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Rl.length && ((n = Rl[0]), n.blockedOn === null); )
      (_y(n), n.blockedOn === null && Rl.shift());
    if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
      for (l = 0; l < n.length; l += 3) {
        var a = n[l],
          u = n[l + 1],
          i = a[$e] || null;
        if (typeof u == 'function') i || By(n);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute('formAction')) {
            if (((a = u), (i = u[$e] || null))) o = i.formAction;
            else if (hr(a) !== null) continue;
          } else o = i.action;
          (typeof o == 'function' ? (n[l + 1] = o) : (n.splice(l, 3), (l -= 3)), By(n));
        }
      }
  }
  function qy() {
    function e(u) {
      u.canIntercept &&
        u.info === 'react-transition' &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (a = i);
            });
          },
          focusReset: 'manual',
          scroll: 'manual',
        });
    }
    function t() {
      (a !== null && (a(), (a = null)), l || setTimeout(n, 20));
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: 'react-transition',
            history: 'replace',
          });
      }
    }
    if (typeof navigation == 'object') {
      var l = !1,
        a = null;
      return (
        navigation.addEventListener('navigate', e),
        navigation.addEventListener('navigatesuccess', t),
        navigation.addEventListener('navigateerror', t),
        setTimeout(n, 100),
        function () {
          ((l = !0),
            navigation.removeEventListener('navigate', e),
            navigation.removeEventListener('navigatesuccess', t),
            navigation.removeEventListener('navigateerror', t),
            a !== null && (a(), (a = null)));
        }
      );
    }
  }
  function pr(e) {
    this._internalRoot = e;
  }
  function oc(e) {
    this._internalRoot = e;
  }
  function Ny(e) {
    e[cl] &&
      (e._reactRootContainer
        ? console.error(
            'You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.',
          )
        : console.error(
            'You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.',
          ));
  }
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == 'function' &&
    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
  var Te = P1,
    mr = F1(),
    iS = I1(),
    V = Object.assign,
    oS = Symbol.for('react.element'),
    al = Symbol.for('react.transitional.element'),
    Ya = Symbol.for('react.portal'),
    La = Symbol.for('react.fragment'),
    cc = Symbol.for('react.strict_mode'),
    yr = Symbol.for('react.profiler'),
    gr = Symbol.for('react.consumer'),
    on = Symbol.for('react.context'),
    ri = Symbol.for('react.forward_ref'),
    vr = Symbol.for('react.suspense'),
    br = Symbol.for('react.suspense_list'),
    sc = Symbol.for('react.memo'),
    yt = Symbol.for('react.lazy'),
    Sr = Symbol.for('react.activity'),
    cS = Symbol.for('react.memo_cache_sentinel'),
    Vy = Symbol.iterator,
    sS = Symbol.for('react.client.reference'),
    Ne = Array.isArray,
    y = mr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    $ = iS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    fS = Object.freeze({ pending: !1, data: null, method: null, action: null }),
    Tr = [],
    Er = [],
    On = -1,
    ul = et(null),
    di = et(null),
    il = et(null),
    fc = et(null),
    hi = 0,
    Yy,
    Ly,
    jy,
    Gy,
    Xy,
    Qy,
    Zy;
  me.__reactDisabledLog = !0;
  var Ar,
    Jy,
    Dr = !1,
    Rr = new (typeof WeakMap == 'function' ? WeakMap : Map)(),
    gt = null,
    cn = !1,
    Cn = Object.prototype.hasOwnProperty,
    zr = Te.unstable_scheduleCallback,
    rS = Te.unstable_cancelCallback,
    dS = Te.unstable_shouldYield,
    hS = Te.unstable_requestPaint,
    sn = Te.unstable_now,
    pS = Te.unstable_getCurrentPriorityLevel,
    Or = Te.unstable_ImmediatePriority,
    Cr = Te.unstable_UserBlockingPriority,
    ja = Te.unstable_NormalPriority,
    mS = Te.unstable_LowPriority,
    Mr = Te.unstable_IdlePriority,
    yS = Te.log,
    gS = Te.unstable_setDisableYieldValue,
    Ga = null,
    Ge = null,
    A = null,
    fn = !1,
    jt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u',
    Je = Math.clz32 ? Math.clz32 : S0,
    vS = Math.log,
    bS = Math.LN2,
    rc = 256,
    dc = 4194304,
    Rt = 2,
    rn = 8,
    Mn = 32,
    hc = 268435456,
    ol = Math.random().toString(36).slice(2),
    Ve = '__reactFiber$' + ol,
    $e = '__reactProps$' + ol,
    cl = '__reactContainer$' + ol,
    Ur = '__reactEvents$' + ol,
    SS = '__reactListeners$' + ol,
    TS = '__reactHandles$' + ol,
    $y = '__reactResources$' + ol,
    pi = '__reactMarker$' + ol,
    ky = new Set(),
    Ql = {},
    Hr = {},
    ES = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 },
    AS = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    Ky = {},
    Wy = {},
    DS = /[\n"\\]/g,
    Fy = !1,
    Iy = !1,
    Py = !1,
    eg = !1,
    tg = !1,
    ng = !1,
    lg = ['value', 'defaultValue'],
    ag = !1,
    ug = /["'&<>\n\t]|^\s|\s$/,
    RS =
      'address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp'.split(
        ' ',
      ),
    ig = 'applet caption html table td th marquee object template foreignObject desc title'.split(
      ' ',
    ),
    zS = ig.concat(['button']),
    OS = 'dd dt li option optgroup p rp rt'.split(' '),
    og = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1,
    },
    pc = {},
    xr = {
      animation:
        'animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction'.split(
          ' ',
        ),
      background:
        'backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize'.split(
          ' ',
        ),
      backgroundPosition: ['backgroundPositionX', 'backgroundPositionY'],
      border:
        'borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth'.split(
          ' ',
        ),
      borderBlockEnd: ['borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth'],
      borderBlockStart: ['borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth'],
      borderBottom: ['borderBottomColor', 'borderBottomStyle', 'borderBottomWidth'],
      borderColor: ['borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor'],
      borderImage: [
        'borderImageOutset',
        'borderImageRepeat',
        'borderImageSlice',
        'borderImageSource',
        'borderImageWidth',
      ],
      borderInlineEnd: ['borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth'],
      borderInlineStart: [
        'borderInlineStartColor',
        'borderInlineStartStyle',
        'borderInlineStartWidth',
      ],
      borderLeft: ['borderLeftColor', 'borderLeftStyle', 'borderLeftWidth'],
      borderRadius: [
        'borderBottomLeftRadius',
        'borderBottomRightRadius',
        'borderTopLeftRadius',
        'borderTopRightRadius',
      ],
      borderRight: ['borderRightColor', 'borderRightStyle', 'borderRightWidth'],
      borderStyle: ['borderBottomStyle', 'borderLeftStyle', 'borderRightStyle', 'borderTopStyle'],
      borderTop: ['borderTopColor', 'borderTopStyle', 'borderTopWidth'],
      borderWidth: ['borderBottomWidth', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth'],
      columnRule: ['columnRuleColor', 'columnRuleStyle', 'columnRuleWidth'],
      columns: ['columnCount', 'columnWidth'],
      flex: ['flexBasis', 'flexGrow', 'flexShrink'],
      flexFlow: ['flexDirection', 'flexWrap'],
      font: 'fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight'.split(
        ' ',
      ),
      fontVariant:
        'fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition'.split(
          ' ',
        ),
      gap: ['columnGap', 'rowGap'],
      grid: 'gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows'.split(
        ' ',
      ),
      gridArea: ['gridColumnEnd', 'gridColumnStart', 'gridRowEnd', 'gridRowStart'],
      gridColumn: ['gridColumnEnd', 'gridColumnStart'],
      gridColumnGap: ['columnGap'],
      gridGap: ['columnGap', 'rowGap'],
      gridRow: ['gridRowEnd', 'gridRowStart'],
      gridRowGap: ['rowGap'],
      gridTemplate: ['gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows'],
      listStyle: ['listStyleImage', 'listStylePosition', 'listStyleType'],
      margin: ['marginBottom', 'marginLeft', 'marginRight', 'marginTop'],
      marker: ['markerEnd', 'markerMid', 'markerStart'],
      mask: 'maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize'.split(
        ' ',
      ),
      maskPosition: ['maskPositionX', 'maskPositionY'],
      outline: ['outlineColor', 'outlineStyle', 'outlineWidth'],
      overflow: ['overflowX', 'overflowY'],
      padding: ['paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop'],
      placeContent: ['alignContent', 'justifyContent'],
      placeItems: ['alignItems', 'justifyItems'],
      placeSelf: ['alignSelf', 'justifySelf'],
      textDecoration: ['textDecorationColor', 'textDecorationLine', 'textDecorationStyle'],
      textEmphasis: ['textEmphasisColor', 'textEmphasisStyle'],
      transition: [
        'transitionDelay',
        'transitionDuration',
        'transitionProperty',
        'transitionTimingFunction',
      ],
      wordWrap: ['overflowWrap'],
    },
    cg = /([A-Z])/g,
    sg = /^ms-/,
    CS = /^(?:webkit|moz|o)[A-Z]/,
    MS = /^-ms-/,
    US = /-(.)/g,
    fg = /;\s*$/,
    Xa = {},
    _r = {},
    rg = !1,
    dg = !1,
    hg = new Set(
      'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
        ' ',
      ),
    ),
    mc = 'http://www.w3.org/1998/Math/MathML',
    Qa = 'http://www.w3.org/2000/svg',
    HS = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    yc = {
      accept: 'accept',
      acceptcharset: 'acceptCharset',
      'accept-charset': 'acceptCharset',
      accesskey: 'accessKey',
      action: 'action',
      allowfullscreen: 'allowFullScreen',
      alt: 'alt',
      as: 'as',
      async: 'async',
      autocapitalize: 'autoCapitalize',
      autocomplete: 'autoComplete',
      autocorrect: 'autoCorrect',
      autofocus: 'autoFocus',
      autoplay: 'autoPlay',
      autosave: 'autoSave',
      capture: 'capture',
      cellpadding: 'cellPadding',
      cellspacing: 'cellSpacing',
      challenge: 'challenge',
      charset: 'charSet',
      checked: 'checked',
      children: 'children',
      cite: 'cite',
      class: 'className',
      classid: 'classID',
      classname: 'className',
      cols: 'cols',
      colspan: 'colSpan',
      content: 'content',
      contenteditable: 'contentEditable',
      contextmenu: 'contextMenu',
      controls: 'controls',
      controlslist: 'controlsList',
      coords: 'coords',
      crossorigin: 'crossOrigin',
      dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
      data: 'data',
      datetime: 'dateTime',
      default: 'default',
      defaultchecked: 'defaultChecked',
      defaultvalue: 'defaultValue',
      defer: 'defer',
      dir: 'dir',
      disabled: 'disabled',
      disablepictureinpicture: 'disablePictureInPicture',
      disableremoteplayback: 'disableRemotePlayback',
      download: 'download',
      draggable: 'draggable',
      enctype: 'encType',
      enterkeyhint: 'enterKeyHint',
      fetchpriority: 'fetchPriority',
      for: 'htmlFor',
      form: 'form',
      formmethod: 'formMethod',
      formaction: 'formAction',
      formenctype: 'formEncType',
      formnovalidate: 'formNoValidate',
      formtarget: 'formTarget',
      frameborder: 'frameBorder',
      headers: 'headers',
      height: 'height',
      hidden: 'hidden',
      high: 'high',
      href: 'href',
      hreflang: 'hrefLang',
      htmlfor: 'htmlFor',
      httpequiv: 'httpEquiv',
      'http-equiv': 'httpEquiv',
      icon: 'icon',
      id: 'id',
      imagesizes: 'imageSizes',
      imagesrcset: 'imageSrcSet',
      inert: 'inert',
      innerhtml: 'innerHTML',
      inputmode: 'inputMode',
      integrity: 'integrity',
      is: 'is',
      itemid: 'itemID',
      itemprop: 'itemProp',
      itemref: 'itemRef',
      itemscope: 'itemScope',
      itemtype: 'itemType',
      keyparams: 'keyParams',
      keytype: 'keyType',
      kind: 'kind',
      label: 'label',
      lang: 'lang',
      list: 'list',
      loop: 'loop',
      low: 'low',
      manifest: 'manifest',
      marginwidth: 'marginWidth',
      marginheight: 'marginHeight',
      max: 'max',
      maxlength: 'maxLength',
      media: 'media',
      mediagroup: 'mediaGroup',
      method: 'method',
      min: 'min',
      minlength: 'minLength',
      multiple: 'multiple',
      muted: 'muted',
      name: 'name',
      nomodule: 'noModule',
      nonce: 'nonce',
      novalidate: 'noValidate',
      open: 'open',
      optimum: 'optimum',
      pattern: 'pattern',
      placeholder: 'placeholder',
      playsinline: 'playsInline',
      poster: 'poster',
      preload: 'preload',
      profile: 'profile',
      radiogroup: 'radioGroup',
      readonly: 'readOnly',
      referrerpolicy: 'referrerPolicy',
      rel: 'rel',
      required: 'required',
      reversed: 'reversed',
      role: 'role',
      rows: 'rows',
      rowspan: 'rowSpan',
      sandbox: 'sandbox',
      scope: 'scope',
      scoped: 'scoped',
      scrolling: 'scrolling',
      seamless: 'seamless',
      selected: 'selected',
      shape: 'shape',
      size: 'size',
      sizes: 'sizes',
      span: 'span',
      spellcheck: 'spellCheck',
      src: 'src',
      srcdoc: 'srcDoc',
      srclang: 'srcLang',
      srcset: 'srcSet',
      start: 'start',
      step: 'step',
      style: 'style',
      summary: 'summary',
      tabindex: 'tabIndex',
      target: 'target',
      title: 'title',
      type: 'type',
      usemap: 'useMap',
      value: 'value',
      width: 'width',
      wmode: 'wmode',
      wrap: 'wrap',
      about: 'about',
      accentheight: 'accentHeight',
      'accent-height': 'accentHeight',
      accumulate: 'accumulate',
      additive: 'additive',
      alignmentbaseline: 'alignmentBaseline',
      'alignment-baseline': 'alignmentBaseline',
      allowreorder: 'allowReorder',
      alphabetic: 'alphabetic',
      amplitude: 'amplitude',
      arabicform: 'arabicForm',
      'arabic-form': 'arabicForm',
      ascent: 'ascent',
      attributename: 'attributeName',
      attributetype: 'attributeType',
      autoreverse: 'autoReverse',
      azimuth: 'azimuth',
      basefrequency: 'baseFrequency',
      baselineshift: 'baselineShift',
      'baseline-shift': 'baselineShift',
      baseprofile: 'baseProfile',
      bbox: 'bbox',
      begin: 'begin',
      bias: 'bias',
      by: 'by',
      calcmode: 'calcMode',
      capheight: 'capHeight',
      'cap-height': 'capHeight',
      clip: 'clip',
      clippath: 'clipPath',
      'clip-path': 'clipPath',
      clippathunits: 'clipPathUnits',
      cliprule: 'clipRule',
      'clip-rule': 'clipRule',
      color: 'color',
      colorinterpolation: 'colorInterpolation',
      'color-interpolation': 'colorInterpolation',
      colorinterpolationfilters: 'colorInterpolationFilters',
      'color-interpolation-filters': 'colorInterpolationFilters',
      colorprofile: 'colorProfile',
      'color-profile': 'colorProfile',
      colorrendering: 'colorRendering',
      'color-rendering': 'colorRendering',
      contentscripttype: 'contentScriptType',
      contentstyletype: 'contentStyleType',
      cursor: 'cursor',
      cx: 'cx',
      cy: 'cy',
      d: 'd',
      datatype: 'datatype',
      decelerate: 'decelerate',
      descent: 'descent',
      diffuseconstant: 'diffuseConstant',
      direction: 'direction',
      display: 'display',
      divisor: 'divisor',
      dominantbaseline: 'dominantBaseline',
      'dominant-baseline': 'dominantBaseline',
      dur: 'dur',
      dx: 'dx',
      dy: 'dy',
      edgemode: 'edgeMode',
      elevation: 'elevation',
      enablebackground: 'enableBackground',
      'enable-background': 'enableBackground',
      end: 'end',
      exponent: 'exponent',
      externalresourcesrequired: 'externalResourcesRequired',
      fill: 'fill',
      fillopacity: 'fillOpacity',
      'fill-opacity': 'fillOpacity',
      fillrule: 'fillRule',
      'fill-rule': 'fillRule',
      filter: 'filter',
      filterres: 'filterRes',
      filterunits: 'filterUnits',
      floodopacity: 'floodOpacity',
      'flood-opacity': 'floodOpacity',
      floodcolor: 'floodColor',
      'flood-color': 'floodColor',
      focusable: 'focusable',
      fontfamily: 'fontFamily',
      'font-family': 'fontFamily',
      fontsize: 'fontSize',
      'font-size': 'fontSize',
      fontsizeadjust: 'fontSizeAdjust',
      'font-size-adjust': 'fontSizeAdjust',
      fontstretch: 'fontStretch',
      'font-stretch': 'fontStretch',
      fontstyle: 'fontStyle',
      'font-style': 'fontStyle',
      fontvariant: 'fontVariant',
      'font-variant': 'fontVariant',
      fontweight: 'fontWeight',
      'font-weight': 'fontWeight',
      format: 'format',
      from: 'from',
      fx: 'fx',
      fy: 'fy',
      g1: 'g1',
      g2: 'g2',
      glyphname: 'glyphName',
      'glyph-name': 'glyphName',
      glyphorientationhorizontal: 'glyphOrientationHorizontal',
      'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
      glyphorientationvertical: 'glyphOrientationVertical',
      'glyph-orientation-vertical': 'glyphOrientationVertical',
      glyphref: 'glyphRef',
      gradienttransform: 'gradientTransform',
      gradientunits: 'gradientUnits',
      hanging: 'hanging',
      horizadvx: 'horizAdvX',
      'horiz-adv-x': 'horizAdvX',
      horizoriginx: 'horizOriginX',
      'horiz-origin-x': 'horizOriginX',
      ideographic: 'ideographic',
      imagerendering: 'imageRendering',
      'image-rendering': 'imageRendering',
      in2: 'in2',
      in: 'in',
      inlist: 'inlist',
      intercept: 'intercept',
      k1: 'k1',
      k2: 'k2',
      k3: 'k3',
      k4: 'k4',
      k: 'k',
      kernelmatrix: 'kernelMatrix',
      kernelunitlength: 'kernelUnitLength',
      kerning: 'kerning',
      keypoints: 'keyPoints',
      keysplines: 'keySplines',
      keytimes: 'keyTimes',
      lengthadjust: 'lengthAdjust',
      letterspacing: 'letterSpacing',
      'letter-spacing': 'letterSpacing',
      lightingcolor: 'lightingColor',
      'lighting-color': 'lightingColor',
      limitingconeangle: 'limitingConeAngle',
      local: 'local',
      markerend: 'markerEnd',
      'marker-end': 'markerEnd',
      markerheight: 'markerHeight',
      markermid: 'markerMid',
      'marker-mid': 'markerMid',
      markerstart: 'markerStart',
      'marker-start': 'markerStart',
      markerunits: 'markerUnits',
      markerwidth: 'markerWidth',
      mask: 'mask',
      maskcontentunits: 'maskContentUnits',
      maskunits: 'maskUnits',
      mathematical: 'mathematical',
      mode: 'mode',
      numoctaves: 'numOctaves',
      offset: 'offset',
      opacity: 'opacity',
      operator: 'operator',
      order: 'order',
      orient: 'orient',
      orientation: 'orientation',
      origin: 'origin',
      overflow: 'overflow',
      overlineposition: 'overlinePosition',
      'overline-position': 'overlinePosition',
      overlinethickness: 'overlineThickness',
      'overline-thickness': 'overlineThickness',
      paintorder: 'paintOrder',
      'paint-order': 'paintOrder',
      panose1: 'panose1',
      'panose-1': 'panose1',
      pathlength: 'pathLength',
      patterncontentunits: 'patternContentUnits',
      patterntransform: 'patternTransform',
      patternunits: 'patternUnits',
      pointerevents: 'pointerEvents',
      'pointer-events': 'pointerEvents',
      points: 'points',
      pointsatx: 'pointsAtX',
      pointsaty: 'pointsAtY',
      pointsatz: 'pointsAtZ',
      popover: 'popover',
      popovertarget: 'popoverTarget',
      popovertargetaction: 'popoverTargetAction',
      prefix: 'prefix',
      preservealpha: 'preserveAlpha',
      preserveaspectratio: 'preserveAspectRatio',
      primitiveunits: 'primitiveUnits',
      property: 'property',
      r: 'r',
      radius: 'radius',
      refx: 'refX',
      refy: 'refY',
      renderingintent: 'renderingIntent',
      'rendering-intent': 'renderingIntent',
      repeatcount: 'repeatCount',
      repeatdur: 'repeatDur',
      requiredextensions: 'requiredExtensions',
      requiredfeatures: 'requiredFeatures',
      resource: 'resource',
      restart: 'restart',
      result: 'result',
      results: 'results',
      rotate: 'rotate',
      rx: 'rx',
      ry: 'ry',
      scale: 'scale',
      security: 'security',
      seed: 'seed',
      shaperendering: 'shapeRendering',
      'shape-rendering': 'shapeRendering',
      slope: 'slope',
      spacing: 'spacing',
      specularconstant: 'specularConstant',
      specularexponent: 'specularExponent',
      speed: 'speed',
      spreadmethod: 'spreadMethod',
      startoffset: 'startOffset',
      stddeviation: 'stdDeviation',
      stemh: 'stemh',
      stemv: 'stemv',
      stitchtiles: 'stitchTiles',
      stopcolor: 'stopColor',
      'stop-color': 'stopColor',
      stopopacity: 'stopOpacity',
      'stop-opacity': 'stopOpacity',
      strikethroughposition: 'strikethroughPosition',
      'strikethrough-position': 'strikethroughPosition',
      strikethroughthickness: 'strikethroughThickness',
      'strikethrough-thickness': 'strikethroughThickness',
      string: 'string',
      stroke: 'stroke',
      strokedasharray: 'strokeDasharray',
      'stroke-dasharray': 'strokeDasharray',
      strokedashoffset: 'strokeDashoffset',
      'stroke-dashoffset': 'strokeDashoffset',
      strokelinecap: 'strokeLinecap',
      'stroke-linecap': 'strokeLinecap',
      strokelinejoin: 'strokeLinejoin',
      'stroke-linejoin': 'strokeLinejoin',
      strokemiterlimit: 'strokeMiterlimit',
      'stroke-miterlimit': 'strokeMiterlimit',
      strokewidth: 'strokeWidth',
      'stroke-width': 'strokeWidth',
      strokeopacity: 'strokeOpacity',
      'stroke-opacity': 'strokeOpacity',
      suppresscontenteditablewarning: 'suppressContentEditableWarning',
      suppresshydrationwarning: 'suppressHydrationWarning',
      surfacescale: 'surfaceScale',
      systemlanguage: 'systemLanguage',
      tablevalues: 'tableValues',
      targetx: 'targetX',
      targety: 'targetY',
      textanchor: 'textAnchor',
      'text-anchor': 'textAnchor',
      textdecoration: 'textDecoration',
      'text-decoration': 'textDecoration',
      textlength: 'textLength',
      textrendering: 'textRendering',
      'text-rendering': 'textRendering',
      to: 'to',
      transform: 'transform',
      transformorigin: 'transformOrigin',
      'transform-origin': 'transformOrigin',
      typeof: 'typeof',
      u1: 'u1',
      u2: 'u2',
      underlineposition: 'underlinePosition',
      'underline-position': 'underlinePosition',
      underlinethickness: 'underlineThickness',
      'underline-thickness': 'underlineThickness',
      unicode: 'unicode',
      unicodebidi: 'unicodeBidi',
      'unicode-bidi': 'unicodeBidi',
      unicoderange: 'unicodeRange',
      'unicode-range': 'unicodeRange',
      unitsperem: 'unitsPerEm',
      'units-per-em': 'unitsPerEm',
      unselectable: 'unselectable',
      valphabetic: 'vAlphabetic',
      'v-alphabetic': 'vAlphabetic',
      values: 'values',
      vectoreffect: 'vectorEffect',
      'vector-effect': 'vectorEffect',
      version: 'version',
      vertadvy: 'vertAdvY',
      'vert-adv-y': 'vertAdvY',
      vertoriginx: 'vertOriginX',
      'vert-origin-x': 'vertOriginX',
      vertoriginy: 'vertOriginY',
      'vert-origin-y': 'vertOriginY',
      vhanging: 'vHanging',
      'v-hanging': 'vHanging',
      videographic: 'vIdeographic',
      'v-ideographic': 'vIdeographic',
      viewbox: 'viewBox',
      viewtarget: 'viewTarget',
      visibility: 'visibility',
      vmathematical: 'vMathematical',
      'v-mathematical': 'vMathematical',
      vocab: 'vocab',
      widths: 'widths',
      wordspacing: 'wordSpacing',
      'word-spacing': 'wordSpacing',
      writingmode: 'writingMode',
      'writing-mode': 'writingMode',
      x1: 'x1',
      x2: 'x2',
      x: 'x',
      xchannelselector: 'xChannelSelector',
      xheight: 'xHeight',
      'x-height': 'xHeight',
      xlinkactuate: 'xlinkActuate',
      'xlink:actuate': 'xlinkActuate',
      xlinkarcrole: 'xlinkArcrole',
      'xlink:arcrole': 'xlinkArcrole',
      xlinkhref: 'xlinkHref',
      'xlink:href': 'xlinkHref',
      xlinkrole: 'xlinkRole',
      'xlink:role': 'xlinkRole',
      xlinkshow: 'xlinkShow',
      'xlink:show': 'xlinkShow',
      xlinktitle: 'xlinkTitle',
      'xlink:title': 'xlinkTitle',
      xlinktype: 'xlinkType',
      'xlink:type': 'xlinkType',
      xmlbase: 'xmlBase',
      'xml:base': 'xmlBase',
      xmllang: 'xmlLang',
      'xml:lang': 'xmlLang',
      xmlns: 'xmlns',
      'xml:space': 'xmlSpace',
      xmlnsxlink: 'xmlnsXlink',
      'xmlns:xlink': 'xmlnsXlink',
      xmlspace: 'xmlSpace',
      y1: 'y1',
      y2: 'y2',
      y: 'y',
      ychannelselector: 'yChannelSelector',
      z: 'z',
      zoomandpan: 'zoomAndPan',
    },
    pg = {
      'aria-current': 0,
      'aria-description': 0,
      'aria-details': 0,
      'aria-disabled': 0,
      'aria-hidden': 0,
      'aria-invalid': 0,
      'aria-keyshortcuts': 0,
      'aria-label': 0,
      'aria-roledescription': 0,
      'aria-autocomplete': 0,
      'aria-checked': 0,
      'aria-expanded': 0,
      'aria-haspopup': 0,
      'aria-level': 0,
      'aria-modal': 0,
      'aria-multiline': 0,
      'aria-multiselectable': 0,
      'aria-orientation': 0,
      'aria-placeholder': 0,
      'aria-pressed': 0,
      'aria-readonly': 0,
      'aria-required': 0,
      'aria-selected': 0,
      'aria-sort': 0,
      'aria-valuemax': 0,
      'aria-valuemin': 0,
      'aria-valuenow': 0,
      'aria-valuetext': 0,
      'aria-atomic': 0,
      'aria-busy': 0,
      'aria-live': 0,
      'aria-relevant': 0,
      'aria-dropeffect': 0,
      'aria-grabbed': 0,
      'aria-activedescendant': 0,
      'aria-colcount': 0,
      'aria-colindex': 0,
      'aria-colspan': 0,
      'aria-controls': 0,
      'aria-describedby': 0,
      'aria-errormessage': 0,
      'aria-flowto': 0,
      'aria-labelledby': 0,
      'aria-owns': 0,
      'aria-posinset': 0,
      'aria-rowcount': 0,
      'aria-rowindex': 0,
      'aria-rowspan': 0,
      'aria-setsize': 0,
    },
    Za = {},
    xS = RegExp(
      '^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    _S = RegExp(
      '^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    mg = !1,
    ke = {},
    yg = /^on./,
    wS = /^on[^A-Z]/,
    BS = RegExp(
      '^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    qS = RegExp(
      '^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$',
    ),
    NS =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,
    mi = null,
    Ja = null,
    $a = null,
    wr = !1,
    dn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Br = !1;
  if (dn)
    try {
      var yi = {};
      (Object.defineProperty(yi, 'passive', {
        get: function () {
          Br = !0;
        },
      }),
        window.addEventListener('test', yi, yi),
        window.removeEventListener('test', yi, yi));
    } catch {
      Br = !1;
    }
  var sl = null,
    qr = null,
    gc = null,
    Zl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    vc = tt(Zl),
    gi = V({}, Zl, { view: 0, detail: 0 }),
    VS = tt(gi),
    Nr,
    Vr,
    vi,
    bc = V({}, gi, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ts,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return 'movementX' in e
          ? e.movementX
          : (e !== vi &&
              (vi && e.type === 'mousemove'
                ? ((Nr = e.screenX - vi.screenX), (Vr = e.screenY - vi.screenY))
                : (Vr = Nr = 0),
              (vi = e)),
            Nr);
      },
      movementY: function (e) {
        return 'movementY' in e ? e.movementY : Vr;
      },
    }),
    gg = tt(bc),
    YS = V({}, bc, { dataTransfer: 0 }),
    LS = tt(YS),
    jS = V({}, gi, { relatedTarget: 0 }),
    Yr = tt(jS),
    GS = V({}, Zl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    XS = tt(GS),
    QS = V({}, Zl, {
      clipboardData: function (e) {
        return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
      },
    }),
    ZS = tt(QS),
    JS = V({}, Zl, { data: 0 }),
    vg = tt(JS),
    $S = vg,
    kS = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    KS = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    WS = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' },
    FS = V({}, gi, {
      key: function (e) {
        if (e.key) {
          var t = kS[e.key] || e.key;
          if (t !== 'Unidentified') return t;
        }
        return e.type === 'keypress'
          ? ((e = ro(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
          : e.type === 'keydown' || e.type === 'keyup'
            ? KS[e.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ts,
      charCode: function (e) {
        return e.type === 'keypress' ? ro(e) : 0;
      },
      keyCode: function (e) {
        return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === 'keypress'
          ? ro(e)
          : e.type === 'keydown' || e.type === 'keyup'
            ? e.keyCode
            : 0;
      },
    }),
    IS = tt(FS),
    PS = V({}, bc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    bg = tt(PS),
    e1 = V({}, gi, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ts,
    }),
    t1 = tt(e1),
    n1 = V({}, Zl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    l1 = tt(n1),
    a1 = V({}, bc, {
      deltaX: function (e) {
        return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function (e) {
        return 'deltaY' in e
          ? e.deltaY
          : 'wheelDeltaY' in e
            ? -e.wheelDeltaY
            : 'wheelDelta' in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    u1 = tt(a1),
    i1 = V({}, Zl, { newState: 0, oldState: 0 }),
    o1 = tt(i1),
    c1 = [9, 13, 27, 32],
    Sg = 229,
    Lr = dn && 'CompositionEvent' in window,
    bi = null;
  dn && 'documentMode' in document && (bi = document.documentMode);
  var s1 = dn && 'TextEvent' in window && !bi,
    Tg = dn && (!Lr || (bi && 8 < bi && 11 >= bi)),
    Eg = 32,
    Ag = String.fromCharCode(Eg),
    Dg = !1,
    ka = !1,
    f1 = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    },
    Si = null,
    Ti = null,
    Rg = !1;
  dn && (Rg = q0('input') && (!document.documentMode || 9 < document.documentMode));
  var Ke = typeof Object.is == 'function' ? Object.is : G0,
    r1 = dn && 'documentMode' in document && 11 >= document.documentMode,
    Ka = null,
    jr = null,
    Ei = null,
    Gr = !1,
    Wa = {
      animationend: Hl('Animation', 'AnimationEnd'),
      animationiteration: Hl('Animation', 'AnimationIteration'),
      animationstart: Hl('Animation', 'AnimationStart'),
      transitionrun: Hl('Transition', 'TransitionRun'),
      transitionstart: Hl('Transition', 'TransitionStart'),
      transitioncancel: Hl('Transition', 'TransitionCancel'),
      transitionend: Hl('Transition', 'TransitionEnd'),
    },
    Xr = {},
    zg = {};
  dn &&
    ((zg = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Wa.animationend.animation,
      delete Wa.animationiteration.animation,
      delete Wa.animationstart.animation),
    'TransitionEvent' in window || delete Wa.transitionend.transition);
  var Og = xl('animationend'),
    Cg = xl('animationiteration'),
    Mg = xl('animationstart'),
    d1 = xl('transitionrun'),
    h1 = xl('transitionstart'),
    p1 = xl('transitioncancel'),
    Ug = xl('transitionend'),
    Hg = new Map(),
    Qr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' ',
      );
  Qr.push('scrollEnd');
  var xg = 0;
  if (typeof performance == 'object' && typeof performance.now == 'function')
    var m1 = performance,
      _g = function () {
        return m1.now();
      };
  else {
    var y1 = Date;
    _g = function () {
      return y1.now();
    };
  }
  var Zr =
      typeof reportError == 'function'
        ? reportError
        : function (e) {
            if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
              var t = new window.ErrorEvent('error', {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == 'object' && e !== null && typeof e.message == 'string'
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (typeof process == 'object' && typeof process.emit == 'function') {
              process.emit('uncaughtException', e);
              return;
            }
            console.error(e);
          },
    Ai = 1,
    Un = 2,
    zt = [],
    Fa = 0,
    Jr = 0,
    fl = {};
  Object.freeze(fl);
  var Ot = null,
    Ia = null,
    I = 0,
    g1 = 1,
    Ee = 2,
    Xe = 8,
    Gt = 16,
    v1 = 32,
    wg = !1;
  try {
    var Bg = Object.preventExtensions({});
  } catch {
    wg = !0;
  }
  var $r = new WeakMap(),
    Pa = [],
    eu = 0,
    Sc = null,
    Di = 0,
    Ct = [],
    Mt = 0,
    Jl = null,
    Hn = 1,
    xn = '',
    Ye = null,
    ue = null,
    j = !1,
    hn = !1,
    vt = null,
    rl = null,
    Ut = !1,
    kr = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.",
    ),
    Kr = et(null),
    Wr = et(null),
    qg = {},
    Tc = null,
    tu = null,
    nu = !1,
    b1 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (n, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (n) {
                  return n();
                }));
            };
          },
    S1 = Te.unstable_scheduleCallback,
    T1 = Te.unstable_NormalPriority,
    Ae = {
      $$typeof: on,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null,
    },
    lu = Te.unstable_now,
    Ng = -0,
    Ec = -0,
    We = -1.1,
    $l = -0,
    _n = -1.1,
    Ac = !1,
    Dc = !1,
    Ri = null,
    Fr = 0,
    kl = 0,
    au = null,
    Vg = y.S;
  y.S = function (e, t) {
    (typeof t == 'object' && t !== null && typeof t.then == 'function' && Q0(e, t),
      Vg !== null && Vg(e, t));
  };
  var Kl = et(null),
    Xt = {
      recordUnsafeLifecycleWarnings: function () {},
      flushPendingUnsafeLifecycleWarnings: function () {},
      recordLegacyContextWarning: function () {},
      flushLegacyContextWarning: function () {},
      discardPendingWarnings: function () {},
    },
    zi = [],
    Oi = [],
    Ci = [],
    Mi = [],
    Ui = [],
    Hi = [],
    Wl = new Set();
  ((Xt.recordUnsafeLifecycleWarnings = function (e, t) {
    Wl.has(e.type) ||
      (typeof t.componentWillMount == 'function' &&
        t.componentWillMount.__suppressDeprecationWarning !== !0 &&
        zi.push(e),
      e.mode & Xe && typeof t.UNSAFE_componentWillMount == 'function' && Oi.push(e),
      typeof t.componentWillReceiveProps == 'function' &&
        t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 &&
        Ci.push(e),
      e.mode & Xe && typeof t.UNSAFE_componentWillReceiveProps == 'function' && Mi.push(e),
      typeof t.componentWillUpdate == 'function' &&
        t.componentWillUpdate.__suppressDeprecationWarning !== !0 &&
        Ui.push(e),
      e.mode & Xe && typeof t.UNSAFE_componentWillUpdate == 'function' && Hi.push(e));
  }),
    (Xt.flushPendingUnsafeLifecycleWarnings = function () {
      var e = new Set();
      0 < zi.length &&
        (zi.forEach(function (o) {
          (e.add(H(o) || 'Component'), Wl.add(o.type));
        }),
        (zi = []));
      var t = new Set();
      0 < Oi.length &&
        (Oi.forEach(function (o) {
          (t.add(H(o) || 'Component'), Wl.add(o.type));
        }),
        (Oi = []));
      var n = new Set();
      0 < Ci.length &&
        (Ci.forEach(function (o) {
          (n.add(H(o) || 'Component'), Wl.add(o.type));
        }),
        (Ci = []));
      var l = new Set();
      0 < Mi.length &&
        (Mi.forEach(function (o) {
          (l.add(H(o) || 'Component'), Wl.add(o.type));
        }),
        (Mi = []));
      var a = new Set();
      0 < Ui.length &&
        (Ui.forEach(function (o) {
          (a.add(H(o) || 'Component'), Wl.add(o.type));
        }),
        (Ui = []));
      var u = new Set();
      if (
        (0 < Hi.length &&
          (Hi.forEach(function (o) {
            (u.add(H(o) || 'Component'), Wl.add(o.type));
          }),
          (Hi = [])),
        0 < t.size)
      ) {
        var i = kt(t);
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          i,
        );
      }
      (0 < l.size &&
        ((i = kt(l)),
        console.error(
          `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
          i,
        )),
        0 < u.size &&
          ((i = kt(u)),
          console.error(
            `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
            i,
          )),
        0 < e.size &&
          ((i = kt(e)),
          console.warn(
            `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            i,
          )),
        0 < n.size &&
          ((i = kt(n)),
          console.warn(
            `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            i,
          )),
        0 < a.size &&
          ((i = kt(a)),
          console.warn(
            `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
            i,
          )));
    }));
  var Rc = new Map(),
    Yg = new Set();
  ((Xt.recordLegacyContextWarning = function (e, t) {
    for (var n = null, l = e; l !== null; ) (l.mode & Xe && (n = l), (l = l.return));
    n === null
      ? console.error(
          'Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.',
        )
      : !Yg.has(e.type) &&
        ((l = Rc.get(n)),
        e.type.contextTypes != null ||
          e.type.childContextTypes != null ||
          (t !== null && typeof t.getChildContext == 'function')) &&
        (l === void 0 && ((l = []), Rc.set(n, l)), l.push(e));
  }),
    (Xt.flushLegacyContextWarning = function () {
      Rc.forEach(function (e) {
        if (e.length !== 0) {
          var t = e[0],
            n = new Set();
          e.forEach(function (a) {
            (n.add(H(a) || 'Component'), Yg.add(a.type));
          });
          var l = kt(n);
          R(t, function () {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              l,
            );
          });
        }
      });
    }),
    (Xt.discardPendingWarnings = function () {
      ((zi = []), (Oi = []), (Ci = []), (Mi = []), (Ui = []), (Hi = []), (Rc = new Map()));
    }));
  var Lg = {
      react_stack_bottom_frame: function (e, t, n) {
        var l = cn;
        cn = !0;
        try {
          return e(t, n);
        } finally {
          cn = l;
        }
      },
    },
    Ir = Lg.react_stack_bottom_frame.bind(Lg),
    jg = {
      react_stack_bottom_frame: function (e) {
        var t = cn;
        cn = !0;
        try {
          return e.render();
        } finally {
          cn = t;
        }
      },
    },
    Gg = jg.react_stack_bottom_frame.bind(jg),
    Xg = {
      react_stack_bottom_frame: function (e, t) {
        try {
          t.componentDidMount();
        } catch (n) {
          J(e, e.return, n);
        }
      },
    },
    Pr = Xg.react_stack_bottom_frame.bind(Xg),
    Qg = {
      react_stack_bottom_frame: function (e, t, n, l, a) {
        try {
          t.componentDidUpdate(n, l, a);
        } catch (u) {
          J(e, e.return, u);
        }
      },
    },
    Zg = Qg.react_stack_bottom_frame.bind(Qg),
    Jg = {
      react_stack_bottom_frame: function (e, t) {
        var n = t.stack;
        e.componentDidCatch(t.value, { componentStack: n !== null ? n : '' });
      },
    },
    E1 = Jg.react_stack_bottom_frame.bind(Jg),
    $g = {
      react_stack_bottom_frame: function (e, t, n) {
        try {
          n.componentWillUnmount();
        } catch (l) {
          J(e, t, l);
        }
      },
    },
    kg = $g.react_stack_bottom_frame.bind($g),
    Kg = {
      react_stack_bottom_frame: function (e) {
        var t = e.create;
        return ((e = e.inst), (t = t()), (e.destroy = t));
      },
    },
    A1 = Kg.react_stack_bottom_frame.bind(Kg),
    Wg = {
      react_stack_bottom_frame: function (e, t, n) {
        try {
          n();
        } catch (l) {
          J(e, t, l);
        }
      },
    },
    D1 = Wg.react_stack_bottom_frame.bind(Wg),
    Fg = {
      react_stack_bottom_frame: function (e) {
        var t = e._init;
        return t(e._payload);
      },
    },
    R1 = Fg.react_stack_bottom_frame.bind(Fg),
    uu = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`.",
    ),
    ed = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.",
    ),
    zc = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary.",
    ),
    Oc = {
      then: function () {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.',
        );
      },
    },
    Fl = null,
    xi = !1,
    iu = null,
    _i = 0,
    N = null,
    td,
    Ig = (td = !1),
    Pg = {},
    ev = {},
    tv = {};
  to = function (e, t, n) {
    if (
      n !== null &&
      typeof n == 'object' &&
      n._store &&
      ((!n._store.validated && n.key == null) || n._store.validated === 2)
    ) {
      if (typeof n._store != 'object')
        throw Error(
          'React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.',
        );
      n._store.validated = 1;
      var l = H(e),
        a = l || 'null';
      if (!Pg[a]) {
        ((Pg[a] = !0), (n = n._owner), (e = e._debugOwner));
        var u = '';
        (e &&
          typeof e.tag == 'number' &&
          (a = H(e)) &&
          (u =
            `

Check the render method of \`` +
            a +
            '`.'),
          u ||
            (l &&
              (u =
                `

Check the top-level render call using <` +
                l +
                '>.')));
        var i = '';
        (n != null &&
          e !== n &&
          ((l = null),
          typeof n.tag == 'number' ? (l = H(n)) : typeof n.name == 'string' && (l = n.name),
          l && (i = ' It was passed a child from ' + l + '.')),
          R(t, function () {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              u,
              i,
            );
          }));
      }
    }
  };
  var Il = tp(!0),
    nv = tp(!1),
    lv = 0,
    av = 1,
    uv = 2,
    nd = 3,
    dl = !1,
    iv = !1,
    ld = null,
    ad = !1,
    ou = et(null),
    Cc = et(0),
    bt = et(null),
    Ht = null,
    cu = 1,
    wi = 2,
    ve = et(0),
    xt = 0,
    _t = 1,
    Fe = 2,
    Le = 4,
    Oe = 8,
    su,
    ov = new Set(),
    cv = new Set(),
    ud = new Set(),
    sv = new Set(),
    wn = 0,
    w = null,
    P = null,
    De = null,
    Mc = !1,
    fu = !1,
    Pl = !1,
    Uc = 0,
    Bi = 0,
    Bn = null,
    z1 = 0,
    O1 = 25,
    g = null,
    wt = null,
    qn = -1,
    qi = !1,
    Hc = {
      readContext: oe,
      use: el,
      useCallback: ge,
      useContext: ge,
      useEffect: ge,
      useImperativeHandle: ge,
      useLayoutEffect: ge,
      useInsertionEffect: ge,
      useMemo: ge,
      useReducer: ge,
      useRef: ge,
      useState: ge,
      useDebugValue: ge,
      useDeferredValue: ge,
      useTransition: ge,
      useSyncExternalStore: ge,
      useId: ge,
      useHostTransitionStatus: ge,
      useFormState: ge,
      useActionState: ge,
      useOptimistic: ge,
      useMemoCache: ge,
      useCacheRefresh: ge,
    },
    id = null,
    fv = null,
    od = null,
    rv = null,
    pn = null,
    Qt = null,
    xc = null;
  ((id = {
    readContext: function (e) {
      return oe(e);
    },
    use: el,
    useCallback: function (e, t) {
      return ((g = 'useCallback'), L(), za(t), cf(e, t));
    },
    useContext: function (e) {
      return ((g = 'useContext'), L(), oe(e));
    },
    useEffect: function (e, t) {
      return ((g = 'useEffect'), L(), za(t), qo(e, t));
    },
    useImperativeHandle: function (e, t, n) {
      return ((g = 'useImperativeHandle'), L(), za(n), of(e, t, n));
    },
    useInsertionEffect: function (e, t) {
      ((g = 'useInsertionEffect'), L(), za(t), Ll(4, Fe, e, t));
    },
    useLayoutEffect: function (e, t) {
      return ((g = 'useLayoutEffect'), L(), za(t), uf(e, t));
    },
    useMemo: function (e, t) {
      ((g = 'useMemo'), L(), za(t));
      var n = y.H;
      y.H = pn;
      try {
        return sf(e, t);
      } finally {
        y.H = n;
      }
    },
    useReducer: function (e, t, n) {
      ((g = 'useReducer'), L());
      var l = y.H;
      y.H = pn;
      try {
        return Fs(e, t, n);
      } finally {
        y.H = l;
      }
    },
    useRef: function (e) {
      return ((g = 'useRef'), L(), af(e));
    },
    useState: function (e) {
      ((g = 'useState'), L());
      var t = y.H;
      y.H = pn;
      try {
        return tf(e);
      } finally {
        y.H = t;
      }
    },
    useDebugValue: function () {
      ((g = 'useDebugValue'), L());
    },
    useDeferredValue: function (e, t) {
      return ((g = 'useDeferredValue'), L(), ff(e, t));
    },
    useTransition: function () {
      return ((g = 'useTransition'), L(), hf());
    },
    useSyncExternalStore: function (e, t, n) {
      return ((g = 'useSyncExternalStore'), L(), Ps(e, t, n));
    },
    useId: function () {
      return ((g = 'useId'), L(), pf());
    },
    useFormState: function (e, t) {
      return ((g = 'useFormState'), L(), xo(), Ca(e, t));
    },
    useActionState: function (e, t) {
      return ((g = 'useActionState'), L(), Ca(e, t));
    },
    useOptimistic: function (e) {
      return ((g = 'useOptimistic'), L(), nf(e));
    },
    useHostTransitionStatus: jl,
    useMemoCache: Yl,
    useCacheRefresh: function () {
      return ((g = 'useCacheRefresh'), L(), mf());
    },
  }),
    (fv = {
      readContext: function (e) {
        return oe(e);
      },
      use: el,
      useCallback: function (e, t) {
        return ((g = 'useCallback'), S(), cf(e, t));
      },
      useContext: function (e) {
        return ((g = 'useContext'), S(), oe(e));
      },
      useEffect: function (e, t) {
        return ((g = 'useEffect'), S(), qo(e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((g = 'useImperativeHandle'), S(), of(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        ((g = 'useInsertionEffect'), S(), Ll(4, Fe, e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((g = 'useLayoutEffect'), S(), uf(e, t));
      },
      useMemo: function (e, t) {
        ((g = 'useMemo'), S());
        var n = y.H;
        y.H = pn;
        try {
          return sf(e, t);
        } finally {
          y.H = n;
        }
      },
      useReducer: function (e, t, n) {
        ((g = 'useReducer'), S());
        var l = y.H;
        y.H = pn;
        try {
          return Fs(e, t, n);
        } finally {
          y.H = l;
        }
      },
      useRef: function (e) {
        return ((g = 'useRef'), S(), af(e));
      },
      useState: function (e) {
        ((g = 'useState'), S());
        var t = y.H;
        y.H = pn;
        try {
          return tf(e);
        } finally {
          y.H = t;
        }
      },
      useDebugValue: function () {
        ((g = 'useDebugValue'), S());
      },
      useDeferredValue: function (e, t) {
        return ((g = 'useDeferredValue'), S(), ff(e, t));
      },
      useTransition: function () {
        return ((g = 'useTransition'), S(), hf());
      },
      useSyncExternalStore: function (e, t, n) {
        return ((g = 'useSyncExternalStore'), S(), Ps(e, t, n));
      },
      useId: function () {
        return ((g = 'useId'), S(), pf());
      },
      useActionState: function (e, t) {
        return ((g = 'useActionState'), S(), Ca(e, t));
      },
      useFormState: function (e, t) {
        return ((g = 'useFormState'), S(), xo(), Ca(e, t));
      },
      useOptimistic: function (e) {
        return ((g = 'useOptimistic'), S(), nf(e));
      },
      useHostTransitionStatus: jl,
      useMemoCache: Yl,
      useCacheRefresh: function () {
        return ((g = 'useCacheRefresh'), S(), mf());
      },
    }),
    (od = {
      readContext: function (e) {
        return oe(e);
      },
      use: el,
      useCallback: function (e, t) {
        return ((g = 'useCallback'), S(), Vo(e, t));
      },
      useContext: function (e) {
        return ((g = 'useContext'), S(), oe(e));
      },
      useEffect: function (e, t) {
        ((g = 'useEffect'), S(), lt(2048, Oe, e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((g = 'useImperativeHandle'), S(), No(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((g = 'useInsertionEffect'), S(), lt(4, Fe, e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((g = 'useLayoutEffect'), S(), lt(4, Le, e, t));
      },
      useMemo: function (e, t) {
        ((g = 'useMemo'), S());
        var n = y.H;
        y.H = Qt;
        try {
          return Yo(e, t);
        } finally {
          y.H = n;
        }
      },
      useReducer: function (e, t, n) {
        ((g = 'useReducer'), S());
        var l = y.H;
        y.H = Qt;
        try {
          return Oa(e, t, n);
        } finally {
          y.H = l;
        }
      },
      useRef: function () {
        return ((g = 'useRef'), S(), W().memoizedState);
      },
      useState: function () {
        ((g = 'useState'), S());
        var e = y.H;
        y.H = Qt;
        try {
          return Oa(Yt);
        } finally {
          y.H = e;
        }
      },
      useDebugValue: function () {
        ((g = 'useDebugValue'), S());
      },
      useDeferredValue: function (e, t) {
        return ((g = 'useDeferredValue'), S(), Ap(e, t));
      },
      useTransition: function () {
        return ((g = 'useTransition'), S(), Mp());
      },
      useSyncExternalStore: function (e, t, n) {
        return ((g = 'useSyncExternalStore'), S(), _o(e, t, n));
      },
      useId: function () {
        return ((g = 'useId'), S(), W().memoizedState);
      },
      useFormState: function (e) {
        return ((g = 'useFormState'), S(), xo(), wo(e));
      },
      useActionState: function (e) {
        return ((g = 'useActionState'), S(), wo(e));
      },
      useOptimistic: function (e, t) {
        return ((g = 'useOptimistic'), S(), hp(e, t));
      },
      useHostTransitionStatus: jl,
      useMemoCache: Yl,
      useCacheRefresh: function () {
        return ((g = 'useCacheRefresh'), S(), W().memoizedState);
      },
    }),
    (rv = {
      readContext: function (e) {
        return oe(e);
      },
      use: el,
      useCallback: function (e, t) {
        return ((g = 'useCallback'), S(), Vo(e, t));
      },
      useContext: function (e) {
        return ((g = 'useContext'), S(), oe(e));
      },
      useEffect: function (e, t) {
        ((g = 'useEffect'), S(), lt(2048, Oe, e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((g = 'useImperativeHandle'), S(), No(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((g = 'useInsertionEffect'), S(), lt(4, Fe, e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((g = 'useLayoutEffect'), S(), lt(4, Le, e, t));
      },
      useMemo: function (e, t) {
        ((g = 'useMemo'), S());
        var n = y.H;
        y.H = xc;
        try {
          return Yo(e, t);
        } finally {
          y.H = n;
        }
      },
      useReducer: function (e, t, n) {
        ((g = 'useReducer'), S());
        var l = y.H;
        y.H = xc;
        try {
          return Ku(e, t, n);
        } finally {
          y.H = l;
        }
      },
      useRef: function () {
        return ((g = 'useRef'), S(), W().memoizedState);
      },
      useState: function () {
        ((g = 'useState'), S());
        var e = y.H;
        y.H = xc;
        try {
          return Ku(Yt);
        } finally {
          y.H = e;
        }
      },
      useDebugValue: function () {
        ((g = 'useDebugValue'), S());
      },
      useDeferredValue: function (e, t) {
        return ((g = 'useDeferredValue'), S(), Dp(e, t));
      },
      useTransition: function () {
        return ((g = 'useTransition'), S(), Up());
      },
      useSyncExternalStore: function (e, t, n) {
        return ((g = 'useSyncExternalStore'), S(), _o(e, t, n));
      },
      useId: function () {
        return ((g = 'useId'), S(), W().memoizedState);
      },
      useFormState: function (e) {
        return ((g = 'useFormState'), S(), xo(), Bo(e));
      },
      useActionState: function (e) {
        return ((g = 'useActionState'), S(), Bo(e));
      },
      useOptimistic: function (e, t) {
        return ((g = 'useOptimistic'), S(), mp(e, t));
      },
      useHostTransitionStatus: jl,
      useMemoCache: Yl,
      useCacheRefresh: function () {
        return ((g = 'useCacheRefresh'), S(), W().memoizedState);
      },
    }),
    (pn = {
      readContext: function (e) {
        return (ra(), oe(e));
      },
      use: function (e) {
        return (z(), el(e));
      },
      useCallback: function (e, t) {
        return ((g = 'useCallback'), z(), L(), cf(e, t));
      },
      useContext: function (e) {
        return ((g = 'useContext'), z(), L(), oe(e));
      },
      useEffect: function (e, t) {
        return ((g = 'useEffect'), z(), L(), qo(e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((g = 'useImperativeHandle'), z(), L(), of(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        ((g = 'useInsertionEffect'), z(), L(), Ll(4, Fe, e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((g = 'useLayoutEffect'), z(), L(), uf(e, t));
      },
      useMemo: function (e, t) {
        ((g = 'useMemo'), z(), L());
        var n = y.H;
        y.H = pn;
        try {
          return sf(e, t);
        } finally {
          y.H = n;
        }
      },
      useReducer: function (e, t, n) {
        ((g = 'useReducer'), z(), L());
        var l = y.H;
        y.H = pn;
        try {
          return Fs(e, t, n);
        } finally {
          y.H = l;
        }
      },
      useRef: function (e) {
        return ((g = 'useRef'), z(), L(), af(e));
      },
      useState: function (e) {
        ((g = 'useState'), z(), L());
        var t = y.H;
        y.H = pn;
        try {
          return tf(e);
        } finally {
          y.H = t;
        }
      },
      useDebugValue: function () {
        ((g = 'useDebugValue'), z(), L());
      },
      useDeferredValue: function (e, t) {
        return ((g = 'useDeferredValue'), z(), L(), ff(e, t));
      },
      useTransition: function () {
        return ((g = 'useTransition'), z(), L(), hf());
      },
      useSyncExternalStore: function (e, t, n) {
        return ((g = 'useSyncExternalStore'), z(), L(), Ps(e, t, n));
      },
      useId: function () {
        return ((g = 'useId'), z(), L(), pf());
      },
      useFormState: function (e, t) {
        return ((g = 'useFormState'), z(), L(), Ca(e, t));
      },
      useActionState: function (e, t) {
        return ((g = 'useActionState'), z(), L(), Ca(e, t));
      },
      useOptimistic: function (e) {
        return ((g = 'useOptimistic'), z(), L(), nf(e));
      },
      useMemoCache: function (e) {
        return (z(), Yl(e));
      },
      useHostTransitionStatus: jl,
      useCacheRefresh: function () {
        return ((g = 'useCacheRefresh'), L(), mf());
      },
    }),
    (Qt = {
      readContext: function (e) {
        return (ra(), oe(e));
      },
      use: function (e) {
        return (z(), el(e));
      },
      useCallback: function (e, t) {
        return ((g = 'useCallback'), z(), S(), Vo(e, t));
      },
      useContext: function (e) {
        return ((g = 'useContext'), z(), S(), oe(e));
      },
      useEffect: function (e, t) {
        ((g = 'useEffect'), z(), S(), lt(2048, Oe, e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((g = 'useImperativeHandle'), z(), S(), No(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((g = 'useInsertionEffect'), z(), S(), lt(4, Fe, e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((g = 'useLayoutEffect'), z(), S(), lt(4, Le, e, t));
      },
      useMemo: function (e, t) {
        ((g = 'useMemo'), z(), S());
        var n = y.H;
        y.H = Qt;
        try {
          return Yo(e, t);
        } finally {
          y.H = n;
        }
      },
      useReducer: function (e, t, n) {
        ((g = 'useReducer'), z(), S());
        var l = y.H;
        y.H = Qt;
        try {
          return Oa(e, t, n);
        } finally {
          y.H = l;
        }
      },
      useRef: function () {
        return ((g = 'useRef'), z(), S(), W().memoizedState);
      },
      useState: function () {
        ((g = 'useState'), z(), S());
        var e = y.H;
        y.H = Qt;
        try {
          return Oa(Yt);
        } finally {
          y.H = e;
        }
      },
      useDebugValue: function () {
        ((g = 'useDebugValue'), z(), S());
      },
      useDeferredValue: function (e, t) {
        return ((g = 'useDeferredValue'), z(), S(), Ap(e, t));
      },
      useTransition: function () {
        return ((g = 'useTransition'), z(), S(), Mp());
      },
      useSyncExternalStore: function (e, t, n) {
        return ((g = 'useSyncExternalStore'), z(), S(), _o(e, t, n));
      },
      useId: function () {
        return ((g = 'useId'), z(), S(), W().memoizedState);
      },
      useFormState: function (e) {
        return ((g = 'useFormState'), z(), S(), wo(e));
      },
      useActionState: function (e) {
        return ((g = 'useActionState'), z(), S(), wo(e));
      },
      useOptimistic: function (e, t) {
        return ((g = 'useOptimistic'), z(), S(), hp(e, t));
      },
      useMemoCache: function (e) {
        return (z(), Yl(e));
      },
      useHostTransitionStatus: jl,
      useCacheRefresh: function () {
        return ((g = 'useCacheRefresh'), S(), W().memoizedState);
      },
    }),
    (xc = {
      readContext: function (e) {
        return (ra(), oe(e));
      },
      use: function (e) {
        return (z(), el(e));
      },
      useCallback: function (e, t) {
        return ((g = 'useCallback'), z(), S(), Vo(e, t));
      },
      useContext: function (e) {
        return ((g = 'useContext'), z(), S(), oe(e));
      },
      useEffect: function (e, t) {
        ((g = 'useEffect'), z(), S(), lt(2048, Oe, e, t));
      },
      useImperativeHandle: function (e, t, n) {
        return ((g = 'useImperativeHandle'), z(), S(), No(e, t, n));
      },
      useInsertionEffect: function (e, t) {
        return ((g = 'useInsertionEffect'), z(), S(), lt(4, Fe, e, t));
      },
      useLayoutEffect: function (e, t) {
        return ((g = 'useLayoutEffect'), z(), S(), lt(4, Le, e, t));
      },
      useMemo: function (e, t) {
        ((g = 'useMemo'), z(), S());
        var n = y.H;
        y.H = Qt;
        try {
          return Yo(e, t);
        } finally {
          y.H = n;
        }
      },
      useReducer: function (e, t, n) {
        ((g = 'useReducer'), z(), S());
        var l = y.H;
        y.H = Qt;
        try {
          return Ku(e, t, n);
        } finally {
          y.H = l;
        }
      },
      useRef: function () {
        return ((g = 'useRef'), z(), S(), W().memoizedState);
      },
      useState: function () {
        ((g = 'useState'), z(), S());
        var e = y.H;
        y.H = Qt;
        try {
          return Ku(Yt);
        } finally {
          y.H = e;
        }
      },
      useDebugValue: function () {
        ((g = 'useDebugValue'), z(), S());
      },
      useDeferredValue: function (e, t) {
        return ((g = 'useDeferredValue'), z(), S(), Dp(e, t));
      },
      useTransition: function () {
        return ((g = 'useTransition'), z(), S(), Up());
      },
      useSyncExternalStore: function (e, t, n) {
        return ((g = 'useSyncExternalStore'), z(), S(), _o(e, t, n));
      },
      useId: function () {
        return ((g = 'useId'), z(), S(), W().memoizedState);
      },
      useFormState: function (e) {
        return ((g = 'useFormState'), z(), S(), Bo(e));
      },
      useActionState: function (e) {
        return ((g = 'useActionState'), z(), S(), Bo(e));
      },
      useOptimistic: function (e, t) {
        return ((g = 'useOptimistic'), z(), S(), mp(e, t));
      },
      useMemoCache: function (e) {
        return (z(), Yl(e));
      },
      useHostTransitionStatus: jl,
      useCacheRefresh: function () {
        return ((g = 'useCacheRefresh'), S(), W().memoizedState);
      },
    }));
  var dv = {},
    hv = new Set(),
    pv = new Set(),
    mv = new Set(),
    yv = new Set(),
    gv = new Set(),
    vv = new Set(),
    bv = new Set(),
    Sv = new Set(),
    Tv = new Set(),
    Ev = new Set();
  Object.freeze(dv);
  var cd = {
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var l = pt(e),
          a = Wn(l);
        ((a.payload = t),
          n != null && (gf(n), (a.callback = n)),
          (t = Fn(e, a, l)),
          t !== null && (de(t, e, l), Zu(t, e, l)),
          Mu(e, l));
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var l = pt(e),
          a = Wn(l);
        ((a.tag = av),
          (a.payload = t),
          n != null && (gf(n), (a.callback = n)),
          (t = Fn(e, a, l)),
          t !== null && (de(t, e, l), Zu(t, e, l)),
          Mu(e, l));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = pt(e),
          l = Wn(n);
        ((l.tag = uv),
          t != null && (gf(t), (l.callback = t)),
          (t = Fn(e, l, n)),
          t !== null && (de(t, e, n), Zu(t, e, n)),
          A !== null &&
            typeof A.markForceUpdateScheduled == 'function' &&
            A.markForceUpdateScheduled(e, n));
      },
    },
    ru = null,
    sd = null,
    fd = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.",
    ),
    Re = !1,
    Av = {},
    Dv = {},
    Rv = {},
    zv = {},
    du = !1,
    Ov = {},
    _c = {},
    rd = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null },
    Cv = !1,
    Mv = null;
  Mv = new Set();
  var Nn = !1,
    be = !1,
    dd = !1,
    Uv = typeof WeakSet == 'function' ? WeakSet : Set,
    xe = null,
    hu = null,
    pu = null,
    ze = null,
    it = !1,
    Zt = null,
    Ni = 8192,
    C1 = {
      getCacheForType: function (e) {
        var t = oe(Ae),
          n = t.data.get(e);
        return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
      },
      cacheSignal: function () {
        return oe(Ae).controller.signal;
      },
      getOwner: function () {
        return gt;
      },
    };
  if (typeof Symbol == 'function' && Symbol.for) {
    var Vi = Symbol.for;
    (Vi('selector.component'),
      Vi('selector.has_pseudo_class'),
      Vi('selector.role'),
      Vi('selector.test_id'),
      Vi('selector.text'));
  }
  var M1 = [],
    U1 = typeof WeakMap == 'function' ? WeakMap : Map,
    ot = 0,
    Ie = 2,
    Jt = 4,
    Vn = 0,
    Yi = 1,
    mu = 2,
    hd = 3,
    ea = 4,
    wc = 6,
    Hv = 5,
    k = ot,
    ee = null,
    Y = null,
    G = 0,
    ct = 0,
    Li = 1,
    ta = 2,
    ji = 3,
    xv = 4,
    pd = 5,
    yu = 6,
    Gi = 7,
    md = 8,
    na = 9,
    K = ct,
    St = null,
    hl = !1,
    gu = !1,
    yd = !1,
    mn = 0,
    he = Vn,
    pl = 0,
    ml = 0,
    gd = 0,
    Tt = 0,
    la = 0,
    Xi = null,
    Pe = null,
    Bc = !1,
    vd = 0,
    _v = 300,
    qc = 1 / 0,
    wv = 500,
    Qi = null,
    yl = null,
    H1 = 0,
    x1 = 1,
    _1 = 2,
    gl = 0,
    Bv = 1,
    qv = 2,
    Nv = 3,
    w1 = 4,
    Nc = 5,
    Ce = 0,
    vl = null,
    vu = null,
    bl = 0,
    bd = 0,
    Sd = null,
    Vv = null,
    B1 = 50,
    Zi = 0,
    Td = null,
    Ed = !1,
    Vc = !1,
    q1 = 50,
    aa = 0,
    Ji = null,
    bu = !1,
    Yc = null,
    Yv = !1,
    Lv = new Set(),
    N1 = {},
    Lc = null,
    Su = null,
    Ad = !1,
    Dd = !1,
    jc = !1,
    Rd = !1,
    Sl = 0,
    zd = {};
  ((function () {
    for (var e = 0; e < Qr.length; e++) {
      var t = Qr[e],
        n = t.toLowerCase();
      ((t = t[0].toUpperCase() + t.slice(1)), Vt(n, 'on' + t));
    }
    (Vt(Og, 'onAnimationEnd'),
      Vt(Cg, 'onAnimationIteration'),
      Vt(Mg, 'onAnimationStart'),
      Vt('dblclick', 'onDoubleClick'),
      Vt('focusin', 'onFocus'),
      Vt('focusout', 'onBlur'),
      Vt(d1, 'onTransitionRun'),
      Vt(h1, 'onTransitionStart'),
      Vt(p1, 'onTransitionCancel'),
      Vt(Ug, 'onTransitionEnd'));
  })(),
    ba('onMouseEnter', ['mouseout', 'mouseover']),
    ba('onMouseLeave', ['mouseout', 'mouseover']),
    ba('onPointerEnter', ['pointerout', 'pointerover']),
    ba('onPointerLeave', ['pointerout', 'pointerover']),
    Ml('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ml(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' ',
      ),
    ),
    Ml('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ml('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ml(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
    ),
    Ml(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
    ));
  var $i =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Od = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat($i),
    ),
    Gc = '_reactListening' + Math.random().toString(36).slice(2),
    jv = !1,
    Gv = !1,
    Xc = !1,
    Xv = !1,
    Qc = !1,
    Zc = !1,
    Qv = !1,
    Jc = {},
    V1 = /\r\n?/g,
    Y1 = /\u0000|\uFFFD/g,
    ua = 'http://www.w3.org/1999/xlink',
    Cd = 'http://www.w3.org/XML/1998/namespace',
    L1 = "javascript:throw new Error('React form unexpectedly submitted.')",
    j1 = 'suppressHydrationWarning',
    ia = '&',
    $c = '/&',
    ki = '$',
    Ki = '/$',
    Tl = '$?',
    oa = '$~',
    Tu = '$!',
    G1 = 'html',
    X1 = 'body',
    Q1 = 'head',
    Md = 'F!',
    Zv = 'F',
    Jv = 'loading',
    Z1 = 'style',
    Yn = 0,
    Eu = 1,
    kc = 2,
    Ud = null,
    Hd = null,
    $v = { dialog: !0, webview: !0 },
    xd = null,
    kv = typeof setTimeout == 'function' ? setTimeout : void 0,
    J1 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ca = -1,
    Kv = typeof Promise == 'function' ? Promise : void 0,
    $1 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Kv < 'u'
          ? function (e) {
              return Kv.resolve(null).then(e).catch(Cb);
            }
          : kv,
    _d = null,
    sa = 0,
    Wi = 1,
    Wv = 2,
    Fv = 3,
    Bt = 4,
    qt = new Map(),
    Iv = new Set(),
    Ln = $.d;
  $.d = {
    f: function () {
      var e = Ln.f(),
        t = _a();
      return e || t;
    },
    r: function (e) {
      var t = Zn(e);
      t !== null && t.tag === 5 && t.type === 'form' ? Cp(t) : Ln.r(e);
    },
    D: function (e) {
      (Ln.D(e), by('dns-prefetch', e, null));
    },
    C: function (e, t) {
      (Ln.C(e, t), by('preconnect', e, t));
    },
    L: function (e, t, n) {
      Ln.L(e, t, n);
      var l = Au;
      if (l && e && t) {
        var a = 'link[rel="preload"][as="' + At(t) + '"]';
        t === 'image' && n && n.imageSrcSet
          ? ((a += '[imagesrcset="' + At(n.imageSrcSet) + '"]'),
            typeof n.imageSizes == 'string' && (a += '[imagesizes="' + At(n.imageSizes) + '"]'))
          : (a += '[href="' + At(e) + '"]');
        var u = a;
        switch (t) {
          case 'style':
            u = qa(e);
            break;
          case 'script':
            u = Na(e);
        }
        qt.has(u) ||
          ((e = V(
            { rel: 'preload', href: t === 'image' && n && n.imageSrcSet ? void 0 : e, as: t },
            n,
          )),
          qt.set(u, e),
          l.querySelector(a) !== null ||
            (t === 'style' && l.querySelector(ci(u))) ||
            (t === 'script' && l.querySelector(si(u))) ||
            ((t = l.createElement('link')), qe(t, 'link', e), Ue(t), l.head.appendChild(t)));
      }
    },
    m: function (e, t) {
      Ln.m(e, t);
      var n = Au;
      if (n && e) {
        var l = t && typeof t.as == 'string' ? t.as : 'script',
          a = 'link[rel="modulepreload"][as="' + At(l) + '"][href="' + At(e) + '"]',
          u = a;
        switch (l) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            u = Na(e);
        }
        if (
          !qt.has(u) &&
          ((e = V({ rel: 'modulepreload', href: e }, t)), qt.set(u, e), n.querySelector(a) === null)
        ) {
          switch (l) {
            case 'audioworklet':
            case 'paintworklet':
            case 'serviceworker':
            case 'sharedworker':
            case 'worker':
            case 'script':
              if (n.querySelector(si(u))) return;
          }
          ((l = n.createElement('link')), qe(l, 'link', e), Ue(l), n.head.appendChild(l));
        }
      }
    },
    X: function (e, t) {
      Ln.X(e, t);
      var n = Au;
      if (n && e) {
        var l = va(n).hoistableScripts,
          a = Na(e),
          u = l.get(a);
        u ||
          ((u = n.querySelector(si(a))),
          u ||
            ((e = V({ src: e, async: !0 }, t)),
            (t = qt.get(a)) && or(e, t),
            (u = n.createElement('script')),
            Ue(u),
            qe(u, 'link', e),
            n.head.appendChild(u)),
          (u = { type: 'script', instance: u, count: 1, state: null }),
          l.set(a, u));
      }
    },
    S: function (e, t, n) {
      Ln.S(e, t, n);
      var l = Au;
      if (l && e) {
        var a = va(l).hoistableStyles,
          u = qa(e);
        t = t || 'default';
        var i = a.get(u);
        if (!i) {
          var o = { loading: sa, preload: null };
          if ((i = l.querySelector(ci(u)))) o.loading = Wi | Bt;
          else {
            ((e = V({ rel: 'stylesheet', href: e, 'data-precedence': t }, n)),
              (n = qt.get(u)) && ir(e, n));
            var c = (i = l.createElement('link'));
            (Ue(c),
              qe(c, 'link', e),
              (c._p = new Promise(function (s, p) {
                ((c.onload = s), (c.onerror = p));
              })),
              c.addEventListener('load', function () {
                o.loading |= Wi;
              }),
              c.addEventListener('error', function () {
                o.loading |= Wv;
              }),
              (o.loading |= Bt),
              lc(i, t, l));
          }
          ((i = { type: 'stylesheet', instance: i, count: 1, state: o }), a.set(u, i));
        }
      }
    },
    M: function (e, t) {
      Ln.M(e, t);
      var n = Au;
      if (n && e) {
        var l = va(n).hoistableScripts,
          a = Na(e),
          u = l.get(a);
        u ||
          ((u = n.querySelector(si(a))),
          u ||
            ((e = V({ src: e, async: !0, type: 'module' }, t)),
            (t = qt.get(a)) && or(e, t),
            (u = n.createElement('script')),
            Ue(u),
            qe(u, 'link', e),
            n.head.appendChild(u)),
          (u = { type: 'script', instance: u, count: 1, state: null }),
          l.set(a, u));
      }
    },
  };
  var Au = typeof document > 'u' ? null : document,
    Kc = null,
    Fi = null,
    wd = null,
    Wc = null,
    fa = fS,
    Ii = {
      $$typeof: on,
      Provider: null,
      Consumer: null,
      _currentValue: fa,
      _currentValue2: fa,
      _threadCount: 0,
    },
    Pv = '%c%s%c',
    e0 =
      'background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px',
    t0 = '',
    Fc = ' ',
    k1 = Function.prototype.bind,
    n0 = !1,
    l0 = null,
    a0 = null,
    u0 = null,
    i0 = null,
    o0 = null,
    c0 = null,
    s0 = null,
    f0 = null,
    r0 = null;
  ((l0 = function (e, t, n, l) {
    ((t = x(e, t)),
      t !== null &&
        ((n = _e(t.memoizedState, n, 0, l)),
        (t.memoizedState = n),
        (t.baseState = n),
        (e.memoizedProps = V({}, e.memoizedProps)),
        (n = Ze(e, 2)),
        n !== null && de(n, e, 2)));
  }),
    (a0 = function (e, t, n) {
      ((t = x(e, t)),
        t !== null &&
          ((n = $t(t.memoizedState, n, 0)),
          (t.memoizedState = n),
          (t.baseState = n),
          (e.memoizedProps = V({}, e.memoizedProps)),
          (n = Ze(e, 2)),
          n !== null && de(n, e, 2)));
    }),
    (u0 = function (e, t, n, l) {
      ((t = x(e, t)),
        t !== null &&
          ((n = pe(t.memoizedState, n, l)),
          (t.memoizedState = n),
          (t.baseState = n),
          (e.memoizedProps = V({}, e.memoizedProps)),
          (n = Ze(e, 2)),
          n !== null && de(n, e, 2)));
    }),
    (i0 = function (e, t, n) {
      ((e.pendingProps = _e(e.memoizedProps, t, 0, n)),
        e.alternate && (e.alternate.pendingProps = e.pendingProps),
        (t = Ze(e, 2)),
        t !== null && de(t, e, 2));
    }),
    (o0 = function (e, t) {
      ((e.pendingProps = $t(e.memoizedProps, t, 0)),
        e.alternate && (e.alternate.pendingProps = e.pendingProps),
        (t = Ze(e, 2)),
        t !== null && de(t, e, 2));
    }),
    (c0 = function (e, t, n) {
      ((e.pendingProps = pe(e.memoizedProps, t, n)),
        e.alternate && (e.alternate.pendingProps = e.pendingProps),
        (t = Ze(e, 2)),
        t !== null && de(t, e, 2));
    }),
    (s0 = function (e) {
      var t = Ze(e, 2);
      t !== null && de(t, e, 2);
    }),
    (f0 = function (e) {
      zl = e;
    }),
    (r0 = function (e) {
      yn = e;
    }));
  var Ic = !0,
    Pc = null,
    Bd = !1,
    El = null,
    Al = null,
    Dl = null,
    Pi = new Map(),
    eo = new Map(),
    Rl = [],
    K1 =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' ',
      ),
    es = null;
  if (
    ((oc.prototype.render = pr.prototype.render =
      function (e) {
        var t = this._internalRoot;
        if (t === null) throw Error('Cannot update an unmounted root.');
        var n = arguments;
        (typeof n[1] == 'function'
          ? console.error(
              'does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().',
            )
          : je(n[1])
            ? console.error(
                "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.",
              )
            : typeof n[1] < 'u' &&
              console.error(
                'You passed a second argument to root.render(...) but it only accepts one argument.',
              ),
          (n = e));
        var l = t.current,
          a = pt(l);
        sr(l, a, n, t, null, null);
      }),
    (oc.prototype.unmount = pr.prototype.unmount =
      function () {
        var e = arguments;
        if (
          (typeof e[0] == 'function' &&
            console.error(
              'does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().',
            ),
          (e = this._internalRoot),
          e !== null)
        ) {
          this._internalRoot = null;
          var t = e.containerInfo;
          ((k & (Ie | Jt)) !== ot &&
            console.error(
              'Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.',
            ),
            sr(e.current, 2, null, e, null, null),
            _a(),
            (t[cl] = null));
        }
      }),
    (oc.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = Kd();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < Rl.length && t !== 0 && t < Rl[n].priority; n++);
        (Rl.splice(n, 0, e), n === 0 && _y(e));
      }
    }),
    (function () {
      var e = mr.version;
      if (e !== '19.2.0-canary-0bdb9206-20250818')
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` +
            (e +
              `
  - react-dom:  19.2.0-canary-0bdb9206-20250818
Learn more: https://react.dev/warnings/version-mismatch`),
        );
    })(),
    (typeof Map == 'function' &&
      Map.prototype != null &&
      typeof Map.prototype.forEach == 'function' &&
      typeof Set == 'function' &&
      Set.prototype != null &&
      typeof Set.prototype.clear == 'function' &&
      typeof Set.prototype.forEach == 'function') ||
      console.error(
        'React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills',
      ),
    ($.findDOMNode = function (e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == 'function'
          ? Error('Unable to find node on an unmounted component.')
          : ((e = Object.keys(e).join(',')),
            Error('Argument appears to not be a ReactComponent. Keys: ' + e));
      return (
        (e = Ru(t)),
        (e = e !== null ? zu(e) : null),
        (e = e === null ? null : e.stateNode),
        e
      );
    }),
    !(function () {
      var e = {
        bundleType: 1,
        version: '19.2.0-canary-0bdb9206-20250818',
        rendererPackageName: 'react-dom',
        currentDispatcherRef: y,
        reconcilerVersion: '19.2.0-canary-0bdb9206-20250818',
      };
      return (
        (e.overrideHookState = l0),
        (e.overrideHookStateDeletePath = a0),
        (e.overrideHookStateRenamePath = u0),
        (e.overrideProps = i0),
        (e.overridePropsDeletePath = o0),
        (e.overridePropsRenamePath = c0),
        (e.scheduleUpdate = s0),
        (e.setErrorHandler = f0),
        (e.setSuspenseHandler = r0),
        (e.scheduleRefresh = Kt),
        (e.scheduleRoot = Nt),
        (e.setRefreshHandler = ls),
        (e.getCurrentFiber = eS),
        (e.getLaneLabelMap = tS),
        (e.injectProfilingHooks = b0),
        v0(e)
      );
    })() &&
      dn &&
      window.top === window.self &&
      ((-1 < navigator.userAgent.indexOf('Chrome') && navigator.userAgent.indexOf('Edge') === -1) ||
        -1 < navigator.userAgent.indexOf('Firefox')))
  ) {
    var d0 = window.location.protocol;
    /^(https?|file):$/.test(d0) &&
      console.info(
        '%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools' +
          (d0 === 'file:'
            ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`
            : ''),
        'font-weight:bold',
      );
  }
  ((ts.createRoot = function (e, t) {
    if (!je(e)) throw Error('Target container is not a DOM element.');
    Ny(e);
    var n = !1,
      l = '',
      a = qp,
      u = Np,
      i = Vp;
    return (
      t != null &&
        (t.hydrate
          ? console.warn(
              'hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.',
            )
          : typeof t == 'object' &&
            t !== null &&
            t.$$typeof === al &&
            console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),
        t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (a = t.onUncaughtError),
        t.onCaughtError !== void 0 && (u = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = zy(e, 1, !1, null, null, n, l, null, a, u, i, qy)),
      (e[cl] = t.current),
      kf(e),
      new pr(t)
    );
  }),
    (ts.hydrateRoot = function (e, t, n) {
      if (!je(e)) throw Error('Target container is not a DOM element.');
      (Ny(e),
        t === void 0 &&
          console.error(
            'Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)',
          ));
      var l = !1,
        a = '',
        u = qp,
        i = Np,
        o = Vp,
        c = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
          n.onCaughtError !== void 0 && (i = n.onCaughtError),
          n.onRecoverableError !== void 0 && (o = n.onRecoverableError),
          n.formState !== void 0 && (c = n.formState)),
        (t = zy(e, 1, !0, t, n ?? null, l, a, c, u, i, o, qy)),
        (t.context = Oy(null)),
        (n = t.current),
        (l = pt(n)),
        (l = cs(l)),
        (a = Wn(l)),
        (a.callback = null),
        Fn(n, a, l),
        (n = l),
        (t.current.lanes = n),
        Hu(t, n),
        an(t),
        (e[cl] = t.current),
        kf(e),
        new oc(t)
      );
    }),
    (ts.version = '19.2.0-canary-0bdb9206-20250818'),
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u' &&
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == 'function' &&
      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error()));
})();
h0.exports = ts;
var eT = h0.exports,
  ns = new Map();
function tT() {
  return globalThis.IS_REACT_ACT_ENVIRONMENT;
}
var nT = ({ callback: x, children: _e }) => {
  let pe = qd.useRef();
  return (
    qd.useLayoutEffect(() => {
      pe.current !== x && ((pe.current = x), x());
    }, [x]),
    _e
  );
};
typeof Promise.withResolvers > 'u' &&
  (Promise.withResolvers = () => {
    let x = null,
      _e = null;
    return {
      promise: new Promise((pe, Me) => {
        ((x = pe), (_e = Me));
      }),
      resolve: x,
      reject: _e,
    };
  });
var iT = async (x, _e, pe) => {
    let Me = await lT(_e, pe);
    if (tT()) {
      Me.render(x);
      return;
    }
    let { promise: $t, resolve: yn } = Promise.withResolvers();
    return (Me.render(qd.createElement(nT, { callback: yn }, x)), $t);
  },
  oT = (x, _e) => {
    let pe = ns.get(x);
    pe && (pe.unmount(), ns.delete(x));
  },
  lT = async (x, _e) => {
    let pe = ns.get(x);
    return (pe || ((pe = eT.createRoot(x, _e)), ns.set(x, pe)), pe);
  };
export { iT as renderElement, oT as unmountElement };
