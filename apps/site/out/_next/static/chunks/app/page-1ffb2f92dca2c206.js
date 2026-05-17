(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    48512: (e, r, t) => {
      'use strict';
      t.d(r, { O: () => l, Z: () => s });
      let a = '/notes';
      function n(e) {
        let r = e.trim(),
          t = '',
          a = '',
          n = r.indexOf('#');
        -1 !== n && ((t = r.slice(n)), (r = r.slice(0, n)));
        let i = r.indexOf('?');
        return (
          -1 !== i && ((a = r.slice(i)), (r = r.slice(0, i))),
          r.startsWith('/') || (r = '/'.concat(r)),
          { pathname: r || '/', search: a, hash: t }
        );
      }
      function i(e) {
        return e === a || e === ''.concat(a, '/')
          ? '/'
          : e.startsWith(''.concat(a, '/'))
            ? e.slice(a.length) || '/'
            : e || '/';
      }
      function o(e) {
        return '/' === e ? '/' : e.endsWith('/') ? e : ''.concat(e, '/');
      }
      function s(e) {
        let { pathname: r, search: t, hash: s } = n(e),
          l = i(r),
          d = o('/' === l ? a : ''.concat(a).concat(l));
        return ''.concat(d).concat(t).concat(s);
      }
      function l(e) {
        let { pathname: r, search: t, hash: a } = n(e),
          s = o(i(r));
        return ''.concat(s).concat(t).concat(a);
      }
    },
    55132: (e, r, t) => {
      'use strict';
      t.d(r, { SiteSearch: () => l });
      var a = t(65603),
        n = t(90952),
        i = t(48963),
        o = t(48512);
      function s() {
        var e;
        let r = (0, n.useRouter)(),
          t = (0, n.useSearchParams)(),
          s = (0, i.useRef)(null),
          l = null != (e = t.get('q')) ? e : '';
        (0, i.useEffect)(() => {
          let e = s.current;
          e && (e.value = l);
        }, [l]);
        let d = (0, i.useCallback)(
          (e) => {
            let t = e.detail.query.trim();
            t ? r.push((0, o.O)('/?q='.concat(encodeURIComponent(t)))) : r.push((0, o.O)('/'));
          },
          [r],
        );
        return (
          (0, i.useEffect)(() => {
            let e = s.current;
            if (e)
              return (
                e.addEventListener('garden-search', d),
                () => e.removeEventListener('garden-search', d)
              );
          }, [d]),
          (0, a.jsx)('garden-search', {
            ref: s,
            placeholder: 'Search notes…',
            kbd: '⌘K',
            'data-testid': 'site-search',
          })
        );
      }
      function l() {
        return (0, a.jsx)(i.Suspense, { fallback: null, children: (0, a.jsx)(s, {}) });
      }
    },
    71841: (e, r, t) => {
      'use strict';
      t.d(r, { HomePageContent: () => g });
      var a = t(65603),
        n = t(79767),
        i = t.n(n),
        o = t(90952),
        s = t(48963),
        l = t(48512);
      let d = {
        books: 'Books',
        swe: 'Software Engineering',
        devops: 'DevOps',
        'data-engineer': 'Data Engineering',
        'data-science': 'Data Science',
        'as-code': 'As Code',
        design: 'Design',
        productivity: 'Productivity',
        'game-dev': 'Game Dev',
        hobbies: 'Hobbies',
        daily: 'Daily Journal',
        childhood: 'Childhood',
        'digital-garden': 'Digital Garden',
        log: 'Log',
        root: 'General',
      };
      function c(e) {
        var r;
        return null != (r = d[e]) ? r : e.charAt(0).toUpperCase() + e.slice(1);
      }
      function p(e) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 200,
          t = e
            .replace(/---[\s\S]*?---/, '')
            .replace(/^#+\s+/gm, '')
            .replace(/\[([^\]]*)]\([^)]*\)/g, '$1')
            .replace(
              /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,
              (e, r, t) => t || r.split('.').at(-1) || r,
            )
            .replace(/^[-*+]\s+/gm, '')
            .replace(/^\d+\.\s+/gm, '')
            .replace(/https?:\/\/\S+/g, '')
            .replace(/[`*_|\\]/g, '')
            .replace(/\s+/g, ' ')
            .trim();
        return t.length <= r ? t : t.slice(0, r).replace(/\s+\S*$/, '') + '…';
      }
      let u = ['books', 'swe', 'devops', 'productivity', 'design', 'as-code'];
      function g(e) {
        var r;
        let { notes: t } = e,
          n = (null != (r = (0, o.useSearchParams)().get('q')) ? r : '').trim(),
          d = (0, s.useMemo)(
            () =>
              n
                ? (function (e, r) {
                    let t = e.toLowerCase();
                    return r.filter(
                      (e) =>
                        e.title.toLowerCase().includes(t) ||
                        e.excerpt.toLowerCase().includes(t) ||
                        e.id.toLowerCase().includes(t),
                    );
                  })(n, t)
                : [],
            [t, n],
          ),
          g = (0, s.useMemo)(
            () =>
              (function (e) {
                let r = {};
                for (let a of e) {
                  var t;
                  let e = a.id.includes('.') ? a.id.split('.')[0] : 'root';
                  (null != (t = r[e]) ? t : (r[e] = [])).push(a);
                }
                return r;
              })(t),
            [t],
          ),
          f = (0, s.useMemo)(
            () =>
              Object.keys(g).sort((e, r) => {
                let t = u.indexOf(e),
                  a = u.indexOf(r);
                return -1 !== t && -1 !== a
                  ? t - a
                  : -1 !== t
                    ? -1
                    : -1 !== a
                      ? 1
                      : e.localeCompare(r);
              }),
            [g],
          );
        return n
          ? (0, a.jsxs)('div', {
              className: 'page-wrap',
              style: {
                paddingTop: 'var(--space-7)',
                paddingBottom: 'var(--space-7)',
                marginTop: 24,
              },
              children: [
                (0, a.jsxs)('div', {
                  style: {
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    letterSpacing: '0.08em',
                    color: 'var(--zine-paper)',
                    marginBottom: 'var(--space-5)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                  },
                  children: [
                    (0, a.jsx)('span', { style: { color: 'var(--zine-red)' }, children: '//' }),
                    'RESULTS FOR “',
                    n,
                    '”',
                    (0, a.jsx)('span', {
                      style: {
                        fontFamily: 'var(--font-stamp)',
                        fontSize: 11,
                        background: 'var(--zine-yellow)',
                        color: 'var(--zine-ink)',
                        padding: '2px 8px',
                        border: '2px solid var(--zine-ink)',
                        letterSpacing: '0.06em',
                      },
                      children: d.length,
                    }),
                    (0, a.jsx)(i(), {
                      href: (0, l.O)('/'),
                      style: {
                        fontFamily: 'var(--font-stamp)',
                        fontSize: 11,
                        color: 'var(--zine-paper)',
                        textDecoration: 'none',
                        marginLeft: 'auto',
                        border: '2px solid rgba(242,237,215,0.3)',
                        padding: '3px 10px',
                        letterSpacing: '0.06em',
                      },
                      children: '✕ CLEAR',
                    }),
                  ],
                }),
                0 === d.length
                  ? (0, a.jsxs)('div', {
                      style: {
                        background: 'var(--zine-paper)',
                        border: 'var(--zine-border)',
                        borderRight: '5px solid var(--zine-ink)',
                        borderBottom: '5px solid var(--zine-ink)',
                        padding: '1.5rem',
                        fontFamily: 'var(--font-body)',
                        fontSize: 15,
                        color: 'var(--zine-ink-faded)',
                      },
                      children: [
                        'No notes found for ',
                        (0, a.jsx)('strong', { children: n }),
                        '. Try a different search term.',
                      ],
                    })
                  : (0, a.jsx)('div', {
                      style: {
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                        gap: 'var(--space-4)',
                      },
                      children: d.map((e, r) =>
                        (0, a.jsx)(
                          'garden-card',
                          {
                            suppressHydrationWarning: !0,
                            headline: e.title,
                            excerpt: p(e.excerpt, 120),
                            href: (0, l.Z)(e.slug),
                            style: { '--card-rotate': r % 2 == 0 ? '-0.6deg' : '0.7deg' },
                          },
                          e.id,
                        ),
                      ),
                    }),
              ],
            })
          : (0, a.jsx)('div', {
              className: 'page-wrap',
              style: { paddingTop: 48, paddingBottom: 'var(--space-8)' },
              children: f.map((e) => {
                var r;
                let t = null != (r = g[e]) ? r : [],
                  n = t.slice(0, 6),
                  o = t.length > 6;
                return (0, a.jsxs)(
                  'section',
                  {
                    'aria-labelledby': 'cat-'.concat(e),
                    style: {
                      marginBottom: 'var(--space-7)',
                      background: 'var(--zine-paper)',
                      border: 'var(--zine-border)',
                      borderRight: '5px solid var(--zine-ink)',
                      borderBottom: '5px solid var(--zine-ink)',
                      padding: '1.5rem',
                      position: 'relative',
                      boxShadow: 'var(--zine-shadow-lg)',
                    },
                    children: [
                      (0, a.jsx)('div', {
                        'aria-hidden': 'true',
                        style: {
                          position: 'absolute',
                          top: -10,
                          left: 24,
                          width: 18,
                          height: 18,
                          background: 'var(--zine-red)',
                          border: '2px solid var(--zine-red-dark)',
                          borderRadius: '50%',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                          zIndex: 10,
                        },
                      }),
                      (0, a.jsxs)('div', {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          marginBottom: 'var(--space-4)',
                        },
                        children: [
                          (0, a.jsxs)('div', {
                            style: { display: 'flex', alignItems: 'center', gap: 10, flex: 1 },
                            children: [
                              (0, a.jsx)('span', {
                                style: {
                                  color: 'var(--zine-red)',
                                  fontFamily: 'var(--font-display)',
                                  fontSize: 22,
                                },
                                children: '//',
                              }),
                              (0, a.jsx)('h2', {
                                id: 'cat-'.concat(e),
                                style: {
                                  fontFamily: 'var(--font-display)',
                                  fontSize: 22,
                                  letterSpacing: '0.08em',
                                  color: 'var(--zine-ink)',
                                  margin: 0,
                                },
                                children: c(e).toUpperCase(),
                              }),
                              (0, a.jsx)('span', {
                                style: {
                                  fontFamily: 'var(--font-stamp)',
                                  fontSize: 10,
                                  background: 'var(--zine-paper)',
                                  border: '2px solid var(--zine-ink)',
                                  color: 'var(--zine-ink)',
                                  padding: '2px 7px',
                                  letterSpacing: '0.05em',
                                },
                                children: t.length,
                              }),
                              (0, a.jsx)('div', {
                                style: {
                                  flex: 1,
                                  height: 3,
                                  background: 'var(--zine-ink)',
                                  marginLeft: 8,
                                },
                              }),
                            ],
                          }),
                          o &&
                            (0, a.jsx)(i(), {
                              href: (0, l.O)('/'.concat(e)),
                              style: {
                                fontFamily: 'var(--font-stamp)',
                                fontSize: 11,
                                color: 'var(--zine-ink)',
                                textDecoration: 'none',
                                letterSpacing: '0.06em',
                                border: '2px solid var(--zine-ink)',
                                padding: '3px 10px',
                                flexShrink: 0,
                                marginLeft: 12,
                              },
                              'aria-label': 'View all '.concat(c(e), ' notes'),
                              children: 'VIEW ALL →',
                            }),
                        ],
                      }),
                      (0, a.jsx)('div', {
                        style: {
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                          gap: 'var(--space-4)',
                          paddingBottom: 'var(--space-2)',
                        },
                        children: n.map((e, r) =>
                          (0, a.jsx)(
                            'garden-card',
                            {
                              suppressHydrationWarning: !0,
                              headline: e.title,
                              excerpt: p(e.excerpt, 120),
                              href: (0, l.Z)(e.slug),
                              style: { '--card-rotate': r % 2 == 0 ? '-0.6deg' : '0.7deg' },
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  },
                  e,
                );
              }),
            });
      }
    },
    80182: (e, r, t) => {
      (Promise.resolve().then(t.bind(t, 71841)), Promise.resolve().then(t.bind(t, 55132)));
    },
    90952: (e, r, t) => {
      'use strict';
      var a = t(31416);
      (t.o(a, 'usePathname') &&
        t.d(r, {
          usePathname: function () {
            return a.usePathname;
          },
        }),
        t.o(a, 'useRouter') &&
          t.d(r, {
            useRouter: function () {
              return a.useRouter;
            },
          }),
        t.o(a, 'useSearchParams') &&
          t.d(r, {
            useSearchParams: function () {
              return a.useSearchParams;
            },
          }));
    },
  },
  (e) => {
    (e.O(0, [9767, 6635, 9873, 7358], () => e((e.s = 80182))), (_N_E = e.O()));
  },
]);
