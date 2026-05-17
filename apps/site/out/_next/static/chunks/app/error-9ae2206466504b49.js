(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8039],
  {
    18867: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 39891));
    },
    39891: (e, t, n) => {
      'use strict';
      (n.r(t), n.d(t, { default: () => o }));
      var r = n(65603),
        c = n(79767),
        a = n.n(c),
        i = n(48512);
      function o(e) {
        let { error: t, reset: n } = e;
        return (0, r.jsxs)('main', {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            padding: 'var(--space-7) var(--space-5)',
            textAlign: 'center',
          },
          children: [
            (0, r.jsx)('garden-badge', {
              variant: 'muted',
              style: { marginBottom: 'var(--space-3)', display: 'block' },
              children: 'error',
            }),
            (0, r.jsx)('h1', {
              style: {
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(24px, 4vw, 36px)',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                color: 'var(--ds-ink)',
                margin: '0 0 0.75rem',
              },
              children: 'Something went wrong',
            }),
            (0, r.jsx)('p', {
              style: {
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                color: 'var(--ds-muted)',
                maxWidth: 360,
                lineHeight: 1.7,
                margin: '0 0 var(--space-5)',
              },
              children: t.message || 'An unexpected error occurred.',
            }),
            (0, r.jsxs)('div', {
              style: {
                display: 'flex',
                gap: 'var(--space-3)',
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
              children: [
                (0, r.jsx)('garden-button', {
                  variant: 'primary',
                  onClick: n,
                  children: 'Try again',
                }),
                (0, r.jsx)(a(), {
                  href: (0, i.O)('/'),
                  style: { textDecoration: 'none' },
                  children: (0, r.jsx)('garden-button', { children: 'Back to home' }),
                }),
              ],
            }),
          ],
        });
      }
    },
    48512: (e, t, n) => {
      'use strict';
      n.d(t, { O: () => s, Z: () => o });
      let r = '/notes';
      function c(e) {
        let t = e.trim(),
          n = '',
          r = '',
          c = t.indexOf('#');
        -1 !== c && ((n = t.slice(c)), (t = t.slice(0, c)));
        let a = t.indexOf('?');
        return (
          -1 !== a && ((r = t.slice(a)), (t = t.slice(0, a))),
          t.startsWith('/') || (t = '/'.concat(t)),
          { pathname: t || '/', search: r, hash: n }
        );
      }
      function a(e) {
        return e === r || e === ''.concat(r, '/')
          ? '/'
          : e.startsWith(''.concat(r, '/'))
            ? e.slice(r.length) || '/'
            : e || '/';
      }
      function i(e) {
        return '/' === e ? '/' : e.endsWith('/') ? e : ''.concat(e, '/');
      }
      function o(e) {
        let { pathname: t, search: n, hash: o } = c(e),
          s = a(t),
          l = i('/' === s ? r : ''.concat(r).concat(s));
        return ''.concat(l).concat(n).concat(o);
      }
      function s(e) {
        let { pathname: t, search: n, hash: r } = c(e),
          o = i(a(t));
        return ''.concat(o).concat(n).concat(r);
      }
    },
  },
  (e) => {
    (e.O(0, [9767, 6635, 9873, 7358], () => e((e.s = 18867))), (_N_E = e.O()));
  },
]);
