(() => {
  'use strict';
  var e = {},
    t = {};
  function r(a) {
    var c = t[a];
    if (void 0 !== c) return c.exports;
    var d = (t[a] = { exports: {} }),
      o = !0;
    try {
      (e[a].call(d.exports, d, d.exports, r), (o = !1));
    } finally {
      o && delete t[a];
    }
    return d.exports;
  }
  ((r.m = e),
    (() => {
      var e = [];
      r.O = (t, a, c, d) => {
        if (a) {
          d = d || 0;
          for (var o = e.length; o > 0 && e[o - 1][2] > d; o--) e[o] = e[o - 1];
          e[o] = [a, c, d];
          return;
        }
        for (var f = 1 / 0, o = 0; o < e.length; o++) {
          for (var [a, c, d] = e[o], n = !0, b = 0; b < a.length; b++)
            (!1 & d || f >= d) && Object.keys(r.O).every((e) => r.O[e](a[b]))
              ? a.splice(b--, 1)
              : ((n = !1), d < f && (f = d));
          if (n) {
            e.splice(o--, 1);
            var i = c();
            void 0 !== i && (t = i);
          }
        }
        return t;
      };
    })(),
    (r.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return (r.d(t, { a: t }), t);
    }),
    (() => {
      var e,
        t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__;
      r.t = function (a, c) {
        if (
          (1 & c && (a = this(a)),
          8 & c ||
            ('object' == typeof a &&
              a &&
              ((4 & c && a.__esModule) || (16 & c && 'function' == typeof a.then))))
        )
          return a;
        var d = Object.create(null);
        r.r(d);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var f = 2 & c && a; 'object' == typeof f && !~e.indexOf(f); f = t(f))
          Object.getOwnPropertyNames(f).forEach((e) => (o[e] = () => a[e]));
        return ((o.default = () => a), r.d(d, o), d);
      };
    })(),
    (r.d = (e, t) => {
      for (var a in t)
        r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (r.f = {}),
    (r.e = (e) => Promise.all(Object.keys(r.f).reduce((t, a) => (r.f[a](e, t), t), []))),
    (r.u = (e) =>
      'static/chunks/' +
      ({ 541: '5254b8d6', 3791: 'b834d393', 7613: '6c10039d', 8651: 'c2d89cdc', 9297: 'd7838f2b' }[
        e
      ] || e) +
      '.' +
      {
        11: 'b5dd403770f88327',
        165: 'c97f805f3eb87556',
        541: '190487846daf271a',
        590: '6f026e26abb74c72',
        623: '242903f50df6e1f3',
        1268: '0812757cc467a397',
        1533: '8d294d9235ed2327',
        1547: 'e0226b397ca704ef',
        1674: '7c6d733e0902464d',
        1893: '696b36ba42b140b3',
        1908: 'dd5533c88a0ce45b',
        2430: 'c266eb025267f6be',
        2492: '97b3682065bdada5',
        2582: 'fce14cdaf3969e39',
        2799: 'b82a315136d86c99',
        2805: 'd365fe580a9a6ffd',
        3329: '252c96cedf361ec4',
        3374: '7a4a6ce55ea93134',
        3454: 'dbfa3e1e7bb6a1f7',
        3670: 'bd230be0e6d97c95',
        3729: 'cbc66ab363bd8ab3',
        3791: '940583b02e0b62e1',
        3838: 'd9badb07622eca5d',
        4051: 'f086e9aa8ad2acd1',
        4222: '47d8ce3614f92e10',
        4689: '8a4c6f163ccd9cf2',
        4725: '724d38dec6ed7c99',
        4780: '67c48700d6bf1468',
        5036: 'bd7a8f5e23a71ab9',
        5114: '3e14a95aee18c915',
        5194: '93b57d23d4b079b1',
        5606: '567c2984af1b4a79',
        5631: '962390539fa94c05',
        5723: '4cc1901803251b8a',
        6036: '00b0a3e6934b99cc',
        6235: '1bef4a772565f460',
        6532: '72b8509bc0829bc3',
        7613: 'ba9225fe08df69af',
        8007: '1acd59a95d3d8092',
        8126: '034cea65c0e957c8',
        8400: '3919791b20e33c9a',
        8493: '8369d7284b0cb699',
        8651: '0990dc360b834888',
        8995: '4edcf8e63c425e56',
        9200: '0a9a949ea03671b4',
        9297: 'f47d85c02ad03534',
        9427: '2b7f06d9112eb6e6',
        9574: 'f030c3aacc5658e1',
        9610: '1d3fba098b668f3b',
        9614: '8a54f4253202bdc2',
        9845: '8a353acc6793d231',
        9948: '1c72ee707a2b93b4',
      }[e] +
      '.js'),
    (r.miniCssF = (e) => {}),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e = {},
        t = '_N_E:';
      r.l = (a, c, d, o) => {
        if (e[a]) return void e[a].push(c);
        if (void 0 !== d)
          for (var f, n, b = document.getElementsByTagName('script'), i = 0; i < b.length; i++) {
            var u = b[i];
            if (u.getAttribute('src') == a || u.getAttribute('data-webpack') == t + d) {
              f = u;
              break;
            }
          }
        (f ||
          ((n = !0),
          ((f = document.createElement('script')).charset = 'utf-8'),
          (f.timeout = 120),
          r.nc && f.setAttribute('nonce', r.nc),
          f.setAttribute('data-webpack', t + d),
          (f.src = r.tu(a))),
          (e[a] = [c]));
        var l = (t, r) => {
            ((f.onerror = f.onload = null), clearTimeout(s));
            var c = e[a];
            if (
              (delete e[a],
              f.parentNode && f.parentNode.removeChild(f),
              c && c.forEach((e) => e(r)),
              t)
            )
              return t(r);
          },
          s = setTimeout(l.bind(null, void 0, { type: 'timeout', target: f }), 12e4);
        ((f.onerror = l.bind(null, f.onerror)),
          (f.onload = l.bind(null, f.onload)),
          n && document.head.appendChild(f));
      };
    })(),
    (r.r = (e) => {
      ('undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 }));
    }),
    (() => {
      var e;
      r.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          'undefined' != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy('nextjs#bundler', e))),
        e
      );
    })(),
    (r.tu = (e) => r.tt().createScriptURL(e)),
    (r.p = '/notes/_next/'),
    (() => {
      var e = { 8068: 0, 4733: 0 };
      ((r.f.j = (t, a) => {
        var c = r.o(e, t) ? e[t] : void 0;
        if (0 !== c)
          if (c) a.push(c[2]);
          else if (/^(4733|8068)$/.test(t)) e[t] = 0;
          else {
            var d = new Promise((r, a) => (c = e[t] = [r, a]));
            a.push((c[2] = d));
            var o = r.p + r.u(t),
              f = Error();
            r.l(
              o,
              (a) => {
                if (r.o(e, t) && (0 !== (c = e[t]) && (e[t] = void 0), c)) {
                  var d = a && ('load' === a.type ? 'missing' : a.type),
                    o = a && a.target && a.target.src;
                  ((f.message = 'Loading chunk ' + t + ' failed.\n(' + d + ': ' + o + ')'),
                    (f.name = 'ChunkLoadError'),
                    (f.type = d),
                    (f.request = o),
                    c[1](f));
                }
              },
              'chunk-' + t,
              t,
            );
          }
      }),
        (r.O.j = (t) => 0 === e[t]));
      var t = (t, a) => {
          var c,
            d,
            [o, f, n] = a,
            b = 0;
          if (o.some((t) => 0 !== e[t])) {
            for (c in f) r.o(f, c) && (r.m[c] = f[c]);
            if (n) var i = n(r);
          }
          for (t && t(a); b < o.length; b++)
            ((d = o[b]), r.o(e, d) && e[d] && e[d][0](), (e[d] = 0));
          return r.O(i);
        },
        a = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      (a.forEach(t.bind(null, 0)), (a.push = t.bind(null, a.push.bind(a))));
    })());
})();
