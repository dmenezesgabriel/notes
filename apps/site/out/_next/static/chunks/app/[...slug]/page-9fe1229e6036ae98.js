(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3048],
  {
    23191: (e, t, r) => {
      'use strict';
      r.d(t, { SiteBreadcrumb: () => u });
      var s = r(65603),
        n = r(48963);
      function u(e) {
        let { items: t } = e,
          r = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            r.current && (r.current.items = t);
          }, [t]),
          (0, s.jsx)('garden-breadcrumb', { ref: r, 'data-testid': 'site-breadcrumb' })
        );
      }
    },
    70459: (e, t, r) => {
      (Promise.resolve().then(r.bind(r, 23191)), Promise.resolve().then(r.bind(r, 75658)));
    },
    75658: (e, t, r) => {
      'use strict';
      r.d(t, { SiteToc: () => u });
      var s = r(65603),
        n = r(48963);
      function u(e) {
        let { items: t, heading: r = 'On this page' } = e,
          u = (0, n.useRef)(null);
        return (
          (0, n.useEffect)(() => {
            u.current && (u.current.items = t);
          }, [t]),
          (0, s.jsx)('garden-toc', { ref: u, heading: r, 'data-testid': 'site-toc' })
        );
      }
    },
  },
  (e) => {
    (e.O(0, [6635, 9873, 7358], () => e((e.s = 70459))), (_N_E = e.O()));
  },
]);
