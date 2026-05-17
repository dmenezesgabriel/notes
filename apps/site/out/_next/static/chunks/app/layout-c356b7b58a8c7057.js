(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7177],
  {
    9191: (n, e, t) => {
      'use strict';
      t.d(e, { default: () => nX });
      var r = t(57623),
        a = t(82359),
        o = t(32703);
      function i() {
        let n = (0, r._)([
          "\n  :host {\n    box-sizing: border-box;\n    font-family: var(--font-body, 'Special Elite', serif);\n    color: var(--zine-ink, #0e0c07);\n    -webkit-font-smoothing: antialiased;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n",
        ]);
        return (
          (i = function () {
            return n;
          }),
          n
        );
      }
      let l = (0, a.AH)(i());
      function s() {
        let n = (0, r._)([
          '\n                <aside class="backlinks" aria-label="Notes that link here">\n                  <h2 class="backlinks-heading" part="backlinks-heading">Linked from</h2>\n                  <ul class="backlinks-list" part="backlinks-list">\n                    <slot name="backlinks"></slot>\n                  </ul>\n                </aside>\n              ',
        ]);
        return (
          (s = function () {
            return n;
          }),
          n
        );
      }
      function c() {
        let n = (0, r._)([
          '\n      <div class="breadcrumb">\n        <slot name="breadcrumb"></slot>\n      </div>\n\n      <div class="layout">\n        \x3c!-- ── Article column ──────────────────────────────────────── --\x3e\n        <article class="article" aria-labelledby="garden-article-title">\n          <div class="meta-row">\n            <slot name="meta"></slot>\n          </div>\n\n          <h1 id="garden-article-title" part="title">',
          '</h1>\n\n          <div class="content">\n            <slot name="content"></slot>\n          </div>\n\n          ',
          '\n        </article>\n\n        \x3c!-- ── Sidebar column ─────────────────────────────────────── --\x3e\n        <aside class="sidebar" aria-label="Table of contents">\n          <slot name="sidebar"></slot>\n        </aside>\n      </div>\n    ',
        ]);
        return (
          (c = function () {
            return n;
          }),
          n
        );
      }
      function p() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n      }\n\n      /* ── Breadcrumb row ─────────────────────────────────────────────── */\n      .breadcrumb {\n        margin-bottom: var(--space-4, 16px);\n      }\n\n      /* ── Two-column layout ──────────────────────────────────────────── */\n      .layout {\n        display: grid;\n        grid-template-columns: 1fr;\n        gap: var(--space-6, 32px);\n        align-items: start;\n        margin-top: var(--space-4, 16px);\n      }\n\n      :host([has-sidebar]) .layout {\n        grid-template-columns: 1fr minmax(180px, 210px);\n      }\n\n      /* ── Article column ─────────────────────────────────────────────── */\n      .article {\n        min-width: 0; /* prevent grid blowout */\n      }\n\n      /* Meta tags row */\n      .meta-row {\n        display: flex;\n        flex-wrap: wrap;\n        gap: var(--space-3, 12px);\n        align-items: center;\n        margin-bottom: var(--space-3, 12px);\n      }\n\n      /* Note title */\n      h1 {\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: clamp(28px, 4vw, 48px);\n        letter-spacing: 0.03em;\n        line-height: 1.1;\n        /* Always use the primary ink colour — the previous code used\n           --zine-paper which was invisible on a light background. */\n        color: var(--zine-ink, #0e0c07);\n        margin: 0 0 1.5rem;\n        overflow-wrap: break-word;\n        word-break: break-word;\n      }\n\n      /* Prose slot wrapper (the actual .prose div is in the light DOM so\n         globals.css styles apply to its children without any special tricks) */\n      .content {\n        display: block;\n      }\n\n      /* ── Backlinks section ──────────────────────────────────────────── */\n      .backlinks {\n        margin-top: var(--space-7, 48px);\n        padding-top: var(--space-5, 24px);\n        border-top: 3px solid var(--ds-border, rgba(14, 12, 7, 0.2));\n      }\n\n      .backlinks-heading {\n        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);\n        font-size: 11px;\n        text-transform: uppercase;\n        letter-spacing: 0.1em;\n        color: var(--zine-muted, #6b6050);\n        margin: 0 0 var(--space-3, 12px);\n      }\n\n      .backlinks-list {\n        display: flex;\n        flex-wrap: wrap;\n        gap: var(--space-2, 8px);\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      /* ── Sidebar column ─────────────────────────────────────────────── */\n      .sidebar {\n        position: sticky;\n        top: 72px; /* below the sticky nav */\n      }\n\n      :host(:not([has-sidebar])) .sidebar {\n        display: none;\n      }\n    ",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      var d = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let f = class extends a.WF {
        render() {
          return (0, a.qy)(c(), this.title, this.hasBacklinks ? (0, a.qy)(s()) : a.s6);
        }
        constructor() {
          (super(...arguments),
            (this.title = ''),
            (this.hasSidebar = !1),
            (this.hasBacklinks = !1));
        }
      };
      function u() {
        let n = (0, r._)([
          '\n      <span part="base" class=',
          '>\n        <slot></slot>\n      </span>\n    ',
        ]);
        return (
          (u = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, r._)([
          "\n      :host {\n        display: inline-block;\n      }\n\n      [part='base'] {\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        font-size: 11px;\n        letter-spacing: 0.15em;\n        text-transform: uppercase;\n        color: var(--zine-red, #d42b2b);\n        display: inline-flex;\n        align-items: center;\n        gap: 8px;\n      }\n\n      [part='base']::before {\n        content: '///';\n        color: var(--zine-muted, #6b6050);\n        font-size: 10px;\n      }\n\n      [part='base'].sage {\n        color: var(--zine-green, #1d6b2e);\n      }\n\n      [part='base'].muted {\n        color: var(--zine-muted, #6b6050);\n      }\n\n      [part='base'].yellow {\n        color: var(--zine-yellow, #f5c800);\n      }\n\n      [part='base'].blue {\n        color: var(--zine-blue, #1a3c8f);\n      }\n    ",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      ((f.styles = [l, (0, a.AH)(p())]),
        d([(0, o.MZ)()], f.prototype, 'title', void 0),
        d(
          [(0, o.MZ)({ type: Boolean, reflect: !0, attribute: 'has-sidebar' })],
          f.prototype,
          'hasSidebar',
          void 0,
        ),
        d(
          [(0, o.MZ)({ type: Boolean, reflect: !0, attribute: 'has-backlinks' })],
          f.prototype,
          'hasBacklinks',
          void 0,
        ),
        (f = d([(0, o.EM)('garden-article')], f)));
      var h = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let v = class extends a.WF {
        render() {
          var n;
          let e =
            null !=
            (n = { accent: '', sage: 'sage', muted: 'muted', yellow: 'yellow', blue: 'blue' }[
              this.variant
            ])
              ? n
              : '';
          return (0, a.qy)(u(), e);
        }
        constructor() {
          (super(...arguments), (this.variant = 'accent'));
        }
      };
      function g() {
        let n = (0, r._)([
          '\n      <div part="wrapper" data-text=',
          '>\n        <div part="text">',
          '</div>\n      </div>\n    ',
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        overflow: hidden;\n      }\n\n      [part='wrapper'] {\n        background: var(--zine-red, #d42b2b);\n        padding: 10px 1.5rem;\n        position: relative;\n        overflow: hidden;\n        border-top: 3px solid var(--zine-ink, #0e0c07);\n        border-bottom: 3px solid var(--zine-ink, #0e0c07);\n      }\n\n      [part='wrapper']::before {\n        content: attr(data-text);\n        position: absolute;\n        left: 3px;\n        top: 3px;\n        color: var(--zine-blue, #1a3c8f);\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: 15px;\n        letter-spacing: 0.25em;\n        opacity: 0.5;\n        white-space: nowrap;\n        pointer-events: none;\n      }\n\n      [part='text'] {\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: 15px;\n        letter-spacing: 0.25em;\n        color: var(--zine-yellow, #f5c800);\n        text-transform: uppercase;\n        white-space: nowrap;\n        position: relative;\n        z-index: 1;\n        animation: marquee 18s linear infinite;\n      }\n\n      @keyframes marquee {\n        from {\n          transform: translateX(100vw);\n        }\n        to {\n          transform: translateX(-100%);\n        }\n      }\n    ",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      ((v.styles = [l, (0, a.AH)(b())]),
        h([(0, o.MZ)({ reflect: !0 })], v.prototype, 'variant', void 0),
        (v = h([(0, o.EM)('garden-badge')], v)));
      var y = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let x = class extends a.WF {
        render() {
          return (0, a.qy)(g(), this.text, this.text);
        }
        constructor() {
          (super(...arguments), (this.text = 'BANNER'));
        }
      };
      function k() {
        let n = (0, r._)(['<cite part="cite">', '</cite>']);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function z() {
        let n = (0, r._)([
          '\n      <blockquote part="base">\n        <slot></slot>\n        ',
          '\n      </blockquote>\n    ',
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        margin: 1rem 0;\n      }\n\n      blockquote {\n        border-left: 5px solid var(--zine-ink, #0e0c07);\n        padding: 0.6rem 0 0.6rem 1rem;\n        font-family: var(--font-body, 'Special Elite', serif);\n        font-size: 14px;\n        font-style: italic;\n        color: var(--zine-muted, #6b6050);\n        margin: 0;\n        background: rgba(14, 12, 7, 0.04);\n        position: relative;\n      }\n\n      blockquote::before {\n        content: '\"';\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: 48px;\n        color: var(--zine-red, #d42b2b);\n        position: absolute;\n        top: -10px;\n        left: -12px;\n        line-height: 1;\n        opacity: 0.5;\n      }\n\n      [part='cite'] {\n        display: block;\n        margin-top: 0.5rem;\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        font-size: 11px;\n        font-style: normal;\n        color: var(--zine-muted, #6b6050);\n        letter-spacing: 0.05em;\n      }\n\n      [part='cite']::before {\n        content: '— ';\n      }\n    ",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      ((x.styles = [l, (0, a.AH)(m())]),
        y([(0, o.MZ)()], x.prototype, 'text', void 0),
        (x = y([(0, o.EM)('garden-banner')], x)));
      var _ = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let M = class extends a.WF {
        render() {
          return (0, a.qy)(z(), this.cite ? (0, a.qy)(k(), this.cite) : '');
        }
        constructor() {
          (super(...arguments), (this.variant = 'default'), (this.cite = ''));
        }
      };
      function O() {
        let n = (0, r._)(['<span aria-current="page">', '</span>']);
        return (
          (O = function () {
            return n;
          }),
          n
        );
      }
      function j() {
        let n = (0, r._)(['<a href=', '>', '</a>']);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function R() {
        let n = (0, r._)(['<span>', '</span>']);
        return (
          (R = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, r._)([
          '\n              <li>\n                ',
          '\n              </li>\n            ',
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function q() {
        let n = (0, r._)([
          '\n      <nav aria-label="Breadcrumb">\n        <ol>\n          ',
          '\n        </ol>\n      </nav>\n    ',
        ]);
        return (
          (q = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n      }\n\n      nav {\n        display: inline-block;\n      }\n\n      ol {\n        list-style: none;\n        display: flex;\n        flex-wrap: wrap;\n        gap: 0;\n        align-items: center;\n        padding: 5px 10px;\n        margin: 0;\n        background: #fff;\n        border: 2px solid var(--zine-ink, #0e0c07);\n        border-right: 3px solid var(--zine-ink, #0e0c07);\n        border-bottom: 3px solid var(--zine-ink, #0e0c07);\n      }\n\n      li {\n        display: flex;\n        align-items: center;\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        font-size: 11px;\n        color: var(--zine-muted, #6b6050);\n      }\n\n      li + li::before {\n        content: '/';\n        color: var(--zine-red, #d42b2b);\n        font-weight: bold;\n        padding: 0 6px;\n      }\n\n      a {\n        color: inherit;\n        text-decoration: none;\n      }\n\n      a:hover {\n        color: var(--zine-ink, #0e0c07);\n      }\n\n      li:last-child span,\n      li:last-child a {\n        color: var(--zine-ink, #0e0c07);\n        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);\n        font-size: 11px;\n      }\n\n      a:focus-visible {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 2px;\n      }\n    ",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      ((M.styles = [l, (0, a.AH)(w())]),
        _([(0, o.MZ)({ reflect: !0 })], M.prototype, 'variant', void 0),
        _([(0, o.MZ)()], M.prototype, 'cite', void 0),
        (M = _([(0, o.EM)('garden-blockquote')], M)));
      var Z = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let A = class extends a.WF {
        render() {
          return (0, a.qy)(
            q(),
            this.items.map((n, e) => {
              let t = e === this.items.length - 1;
              return (0, a.qy)(
                E(),
                t
                  ? (0, a.qy)(O(), n.label)
                  : n.href
                    ? (0, a.qy)(j(), n.href, n.label)
                    : (0, a.qy)(R(), n.label),
              );
            }),
          );
        }
        constructor() {
          (super(...arguments), (this.items = []));
        }
      };
      function B() {
        let n = (0, r._)([
          '\n      <button part="button" class=',
          ' type=',
          ' ?disabled=',
          '>\n        <slot name="icon-left"></slot>\n        <slot></slot>\n      </button>\n    ',
        ]);
        return (
          (B = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        let n = (0, r._)([
          "\n      :host {\n        display: inline-block;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        opacity: 0.45;\n      }\n\n      button {\n        display: inline-flex;\n        align-items: center;\n        gap: 6px;\n        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);\n        font-size: 12px;\n        letter-spacing: 0.06em;\n        line-height: 1;\n        padding: 9px 18px;\n        /* Thick neubrutalist offset border */\n        border: 3px solid var(--zine-ink, #0e0c07);\n        border-right: 5px solid var(--zine-ink, #0e0c07);\n        border-bottom: 5px solid var(--zine-ink, #0e0c07);\n        cursor: pointer;\n        background: var(--zine-paper, #f2edd7);\n        color: var(--zine-ink, #0e0c07);\n        white-space: nowrap;\n        position: relative;\n        transition:\n          transform 0.1s,\n          border-width 0.1s;\n      }\n\n      button:hover {\n        transform: translate(-1px, -1px);\n      }\n\n      button:active {\n        transform: translate(3px, 3px);\n        border-right-width: 3px;\n        border-bottom-width: 3px;\n      }\n\n      button:focus-visible {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 2px;\n      }\n\n      /* Primary — red */\n      button.primary {\n        background: var(--zine-red, #d42b2b);\n        color: #fff;\n        border-color: var(--zine-red-dark, #8a0000);\n      }\n\n      button.primary:hover {\n        background: var(--zine-red-dark, #8a0000);\n      }\n\n      /* Yellow */\n      button.yellow {\n        background: var(--zine-yellow, #f5c800);\n        color: var(--zine-ink, #0e0c07);\n        border-color: var(--zine-ink, #0e0c07);\n      }\n\n      /* Blue */\n      button.blue {\n        background: var(--zine-blue, #1a3c8f);\n        color: #fff;\n        border-color: var(--zine-ink, #0e0c07);\n      }\n\n      /* Ghost */\n      button.ghost {\n        border-color: var(--zine-muted, #6b6050);\n        border-right-color: var(--zine-muted, #6b6050);\n        border-bottom-color: var(--zine-muted, #6b6050);\n        color: var(--zine-muted, #6b6050);\n        background: transparent;\n      }\n\n      button.ghost:hover {\n        border-color: var(--zine-ink, #0e0c07);\n        color: var(--zine-ink, #0e0c07);\n      }\n    ",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      ((A.styles = [l, (0, a.AH)(P())]),
        Z([(0, o.MZ)({ type: Array })], A.prototype, 'items', void 0),
        (A = Z([(0, o.EM)('garden-breadcrumb')], A)));
      var D = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let H = class extends a.WF {
        render() {
          var n;
          let e =
            null !=
            (n = {
              default: '',
              primary: 'primary',
              ghost: 'ghost',
              yellow: 'yellow',
              blue: 'blue',
            }[this.variant])
              ? n
              : '';
          return (0, a.qy)(B(), e, this.type, this.disabled);
        }
        constructor() {
          (super(...arguments),
            (this.variant = 'default'),
            (this.disabled = !1),
            (this.type = 'button'));
        }
      };
      function S() {
        let n = (0, r._)(['<span part="heading">', '</span>']);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function W() {
        let n = (0, r._)([
          '\n      <div part="base" class=',
          ' role="note">\n        ',
          '\n        <slot></slot>\n      </div>\n    ',
        ]);
        return (
          (W = function () {
            return n;
          }),
          n
        );
      }
      function F() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n      }\n\n      [part='base'] {\n        border: 3px solid var(--zine-ink, #0e0c07);\n        border-right: 4px solid var(--zine-ink, #0e0c07);\n        border-bottom: 4px solid var(--zine-ink, #0e0c07);\n        padding: 0.75rem 1rem;\n        font-family: var(--font-body, 'Special Elite', serif);\n        font-size: 13px;\n        color: var(--zine-ink-faded, #2c2820);\n        position: relative;\n        background: var(--zine-yellow-lt, #fdf0a0);\n        line-height: 1.7;\n      }\n\n      [part='base'].info {\n        background: #eaf0ff;\n        border-color: var(--zine-blue, #1a3c8f);\n        border-right-color: var(--zine-blue, #1a3c8f);\n        border-bottom-color: var(--zine-blue, #1a3c8f);\n      }\n\n      [part='base'].warning {\n        background: #fff3cc;\n        border-color: var(--zine-orange, #e85d1a);\n        border-right-color: var(--zine-orange, #e85d1a);\n        border-bottom-color: var(--zine-orange, #e85d1a);\n      }\n\n      [part='base'].tip {\n        background: var(--zine-green-lt, #a8d8a0);\n        border-color: var(--zine-green, #1d6b2e);\n        border-right-color: var(--zine-green, #1d6b2e);\n        border-bottom-color: var(--zine-green, #1d6b2e);\n      }\n\n      [part='heading'] {\n        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);\n        font-size: 10px;\n        color: var(--zine-red, #d42b2b);\n        letter-spacing: 0.1em;\n        margin-bottom: 4px;\n        display: block;\n        text-transform: uppercase;\n      }\n\n      [part='base'].info [part='heading'] {\n        color: var(--zine-blue, #1a3c8f);\n      }\n\n      [part='base'].warning [part='heading'] {\n        color: var(--zine-orange, #e85d1a);\n      }\n\n      [part='base'].tip [part='heading'] {\n        color: var(--zine-green, #1d6b2e);\n      }\n    ",
        ]);
        return (
          (F = function () {
            return n;
          }),
          n
        );
      }
      ((H.styles = [l, (0, a.AH)(C())]),
        D([(0, o.MZ)({ reflect: !0 })], H.prototype, 'variant', void 0),
        D([(0, o.MZ)({ type: Boolean, reflect: !0 })], H.prototype, 'disabled', void 0),
        D([(0, o.MZ)()], H.prototype, 'type', void 0),
        (H = D([(0, o.EM)('garden-button')], H)));
      var N = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let T = class extends a.WF {
        render() {
          var n;
          let e =
            null != (n = { note: '', tip: 'tip', warning: 'warning', info: 'info' }[this.variant])
              ? n
              : '';
          return (0, a.qy)(W(), e, this.heading ? (0, a.qy)(S(), this.heading) : '');
        }
        constructor() {
          (super(...arguments), (this.variant = 'note'), (this.heading = ''));
        }
      };
      function L() {
        let n = (0, r._)([
          '\n      <slot name="thumb">\n        <div class="wiki-thumb" aria-hidden="true">\n          <span class="wiki-thumb-text">',
          '</span>\n        </div>\n      </slot>\n    ',
        ]);
        return (
          (L = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        let n = (0, r._)(['<a part="headline" href=', '>', '</a>']);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function U() {
        let n = (0, r._)(['<span part="headline">', '</span>']);
        return (
          (U = function () {
            return n;
          }),
          n
        );
      }
      function G() {
        let n = (0, r._)(['<span part="meta">', '</span>']);
        return (
          (G = function () {
            return n;
          }),
          n
        );
      }
      function V() {
        let n = (0, r._)(['<p part="excerpt">', '</p>']);
        return (
          (V = function () {
            return n;
          }),
          n
        );
      }
      function X() {
        let n = (0, r._)([
          '\n      <article part="article" class=',
          '>\n        ',
          '\n        ',
          '\n        ',
          '\n        ',
          '\n        <div part="footer"><slot name="footer"></slot></div>\n        <slot></slot>\n      </article>\n    ',
        ]);
        return (
          (X = function () {
            return n;
          }),
          n
        );
      }
      function K() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        /* Use CSS custom property so grid containers can set alternating rotations */\n        transform: rotate(var(--card-rotate, -0.5deg));\n        transition: transform 0.15s ease;\n      }\n\n      :host(:hover) {\n        transform: rotate(0deg) scale(1.01) !important;\n        z-index: 10;\n        position: relative;\n      }\n\n      article {\n        position: relative;\n        background: var(--zine-paper, #f2edd7);\n        border: 3px solid var(--zine-ink, #0e0c07);\n        border-right: 5px solid var(--zine-ink, #0e0c07);\n        border-bottom: 5px solid var(--zine-ink, #0e0c07);\n        padding: 1rem;\n        height: 100%;\n      }\n\n      /* Featured — yellow tint + red top border */\n      article.featured {\n        background: var(--zine-yellow-lt, #fdf0a0);\n        border-top: 5px solid var(--zine-red, #d42b2b);\n      }\n\n      article.featured::after {\n        content: '★ FEATURED';\n        position: absolute;\n        top: -16px;\n        right: 10px;\n        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);\n        font-size: 10px;\n        background: var(--zine-red, #d42b2b);\n        color: #fff;\n        padding: 2px 8px;\n        letter-spacing: 0.08em;\n        z-index: 5;\n        border: 2px solid var(--zine-ink, #0e0c07);\n      }\n\n      /* Wiki variant */\n      article.wiki {\n        overflow: hidden;\n        padding-top: 0;\n      }\n\n      /* Wiki thumb */\n      .wiki-thumb {\n        height: 80px;\n        background: var(--zine-blue, #1a3c8f);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-bottom: 3px solid var(--zine-ink, #0e0c07);\n        position: relative;\n        overflow: hidden;\n      }\n\n      .wiki-thumb::after {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background-image: repeating-linear-gradient(\n          45deg,\n          transparent,\n          transparent 4px,\n          rgba(14, 12, 7, 0.08) 4px,\n          rgba(14, 12, 7, 0.08) 5px\n        );\n      }\n\n      .wiki-thumb-text {\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: 28px;\n        color: var(--zine-paper, #f2edd7);\n        letter-spacing: 0.04em;\n        z-index: 1;\n        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);\n      }\n\n      /* Headline */\n      [part='headline'] {\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: 18px;\n        color: var(--zine-ink, #0e0c07);\n        letter-spacing: 0.03em;\n        margin-bottom: 5px;\n        line-height: 1.2;\n        display: block;\n        text-decoration: none;\n      }\n\n      /* Scribble underline */\n      [part='headline']::after {\n        content: '';\n        display: block;\n        height: 3px;\n        width: 60%;\n        background: var(--zine-red, #d42b2b);\n        margin-top: 3px;\n        transform: rotate(-0.5deg);\n      }\n\n      /* Stretched link */\n      a[part='headline']::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        z-index: 1;\n      }\n\n      a[part='headline']:focus-visible::before {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 3px;\n      }\n\n      [part='meta'] {\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        font-size: 10px;\n        color: var(--zine-muted, #6b6050);\n        margin-bottom: 8px;\n        display: block;\n        letter-spacing: 0.05em;\n      }\n\n      [part='excerpt'] {\n        font-family: var(--font-body, 'Special Elite', serif);\n        font-size: 13px;\n        color: var(--zine-ink-faded, #2c2820);\n        line-height: 1.65;\n        display: block;\n        margin: 0;\n      }\n\n      [part='footer'] {\n        position: relative;\n        z-index: 2;\n        display: flex;\n        flex-wrap: wrap;\n        gap: 5px;\n        margin-top: 10px;\n      }\n    ",
        ]);
        return (
          (K = function () {
            return n;
          }),
          n
        );
      }
      ((T.styles = [l, (0, a.AH)(F())]),
        N([(0, o.MZ)({ reflect: !0 })], T.prototype, 'variant', void 0),
        N([(0, o.MZ)()], T.prototype, 'heading', void 0),
        (T = N([(0, o.EM)('garden-callout')], T)));
      var Y = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let J = class extends a.WF {
        _renderThumb() {
          if ('wiki' !== this.variant) return a.s6;
          let n = this.headline
            ? this.headline
                .split(/\s+/)
                .slice(0, 2)
                .map((n) => n[0])
                .join('')
                .toUpperCase()
            : 'WK';
          return (0, a.qy)(L(), n);
        }
        render() {
          let n = 'default' !== this.variant ? this.variant : '';
          return (0, a.qy)(
            X(),
            n,
            this._renderThumb(),
            this.headline
              ? this.href
                ? (0, a.qy)(I(), this.href, this.headline)
                : (0, a.qy)(U(), this.headline)
              : a.s6,
            this.meta ? (0, a.qy)(G(), this.meta) : a.s6,
            this.excerpt ? (0, a.qy)(V(), this.excerpt) : a.s6,
          );
        }
        constructor() {
          (super(...arguments),
            (this.variant = 'default'),
            (this.headline = ''),
            (this.meta = ''),
            (this.excerpt = ''),
            (this.href = ''));
        }
      };
      function Q() {
        let n = (0, r._)(['<hr part="base" class=', ' />']);
        return (
          (Q = function () {
            return n;
          }),
          n
        );
      }
      function $() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        margin: 1.5rem 0;\n      }\n\n      [part='base'] {\n        height: 4px;\n        background: repeating-linear-gradient(\n          90deg,\n          var(--zine-ink, #0e0c07) 0px,\n          var(--zine-ink, #0e0c07) 8px,\n          transparent 8px,\n          transparent 12px\n        );\n        opacity: 0.4;\n        border: none;\n      }\n\n      [part='base'].solid {\n        background: var(--zine-ink, #0e0c07);\n        height: 3px;\n        opacity: 1;\n      }\n\n      [part='base'].red {\n        background: var(--zine-red, #d42b2b);\n        height: 3px;\n        opacity: 1;\n      }\n    ",
        ]);
        return (
          ($ = function () {
            return n;
          }),
          n
        );
      }
      ((J.styles = [l, (0, a.AH)(K())]),
        Y([(0, o.MZ)({ reflect: !0 })], J.prototype, 'variant', void 0),
        Y([(0, o.MZ)()], J.prototype, 'headline', void 0),
        Y([(0, o.MZ)()], J.prototype, 'meta', void 0),
        Y([(0, o.MZ)()], J.prototype, 'excerpt', void 0),
        Y([(0, o.MZ)()], J.prototype, 'href', void 0),
        (J = Y([(0, o.EM)('garden-card')], J)));
      var nn = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let ne = class extends a.WF {
        render() {
          return (0, a.qy)(Q(), 'dashed' === this.variant ? '' : this.variant);
        }
        constructor() {
          (super(...arguments), (this.variant = 'dashed'));
        }
      };
      function nt() {
        let n = (0, r._)(['<span part="base" class=', '><slot></slot></span>']);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        let n = (0, r._)([
          "\n      :host {\n        display: inline;\n      }\n\n      [part='base'] {\n        background: var(--zine-yellow, #f5c800);\n        padding: 0 3px;\n        display: inline;\n        box-decoration-break: clone;\n      }\n\n      [part='base'].blue {\n        background: var(--zine-blue-lt, #4a80d4);\n        color: #fff;\n      }\n\n      [part='base'].red {\n        background: var(--zine-red, #d42b2b);\n        color: #fff;\n      }\n\n      [part='base'].green {\n        background: var(--zine-green-lt, #a8d8a0);\n      }\n    ",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      ((ne.styles = [l, (0, a.AH)($())]),
        nn([(0, o.MZ)({ reflect: !0 })], ne.prototype, 'variant', void 0),
        (ne = nn([(0, o.EM)('garden-divider')], ne)));
      var na = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let no = class extends a.WF {
        render() {
          var n;
          let e =
            null != (n = { default: '', blue: 'blue', red: 'red', green: 'green' }[this.variant])
              ? n
              : '';
          return (0, a.qy)(nt(), e);
        }
        constructor() {
          (super(...arguments), (this.variant = 'default'));
        }
      };
      ((no.styles = [l, (0, a.AH)(nr())]),
        na([(0, o.MZ)({ reflect: !0 })], no.prototype, 'variant', void 0),
        (no = na([(0, o.EM)('garden-highlight')], no)));
      var ni = t(5815);
      function nl() {
        let n = (0, r._)([
          '<p class="status" role="status" aria-live="polite">Loading diagram…</p>',
        ]);
        return (
          (nl = function () {
            return n;
          }),
          n
        );
      }
      function ns() {
        let n = (0, r._)(['<pre class="error-block" role="alert">', '</pre>']);
        return (
          (ns = function () {
            return n;
          }),
          n
        );
      }
      function nc() {
        let n = (0, r._)(['<div class="wrap" aria-label="Diagram">', '</div>']);
        return (
          (nc = function () {
            return n;
          }),
          n
        );
      }
      function np() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        margin: 1.25rem 0;\n      }\n\n      .wrap {\n        overflow-x: auto;\n        display: flex;\n        justify-content: center;\n        border: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));\n        border-radius: var(--radius-md, 8px);\n        padding: var(--space-5, 24px) var(--space-4, 16px);\n        background: var(--ds-surface, #ffffff);\n      }\n\n      .wrap svg {\n        max-width: 100%;\n        height: auto;\n      }\n\n      .status {\n        font-family: var(--font-ui, system-ui, sans-serif);\n        font-size: 13px;\n        color: var(--ds-muted, #6b6860);\n        padding: var(--space-4, 16px);\n        text-align: center;\n      }\n\n      .error-block {\n        background: #fef2f2;\n        border: 1px solid #fecaca;\n        border-radius: var(--radius-sm, 4px);\n        padding: var(--space-4, 16px);\n        font-family: var(--font-mono, 'DM Mono', monospace);\n        font-size: 12px;\n        color: #b91c1c;\n        white-space: pre-wrap;\n        overflow-x: auto;\n      }\n    ",
        ]);
        return (
          (np = function () {
            return n;
          }),
          n
        );
      }
      var nd = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nf = 0,
        nu = class extends a.WF {
          connectedCallback() {
            (super.connectedCallback(), this._renderDiagram(), this._observeTheme());
          }
          disconnectedCallback() {
            var n;
            (super.disconnectedCallback(),
              null == (n = this._themeObserver) || n.disconnect(),
              (this._themeObserver = null));
          }
          updated(n) {
            n.has('diagram') && this._renderDiagram();
          }
          _observeTheme() {
            'undefined' != typeof MutationObserver &&
              ((this._themeObserver = new MutationObserver(() => {
                this.diagram && this._renderDiagram();
              })),
              this._themeObserver.observe(document.documentElement, {
                attributes: !0,
                attributeFilter: ['data-theme'],
              }));
          }
          async _renderDiagram() {
            if (this.diagram) {
              ((this._loading = !0), (this._error = ''));
              try {
                var n, e;
                let { default: r } = await Promise.all([t.e(541), t.e(3791), t.e(2805)]).then(
                    t.bind(t, 22807),
                  ),
                  a = 'dark' === document.documentElement.dataset.theme;
                r.initialize({
                  startOnLoad: !1,
                  theme: a ? 'dark' : 'default',
                  securityLevel: 'loose',
                  fontFamily: 'var(--font-ui, system-ui, sans-serif)',
                });
                let o = 'garden-mermaid-'.concat(++nf),
                  { svg: i } = await r.render(o, this.diagram);
                (null == (n = document.getElementById(o)) || n.remove(),
                  null == (e = document.getElementById('d'.concat(o))) || e.remove(),
                  (this._svg = i));
              } catch (n) {
                this._error = n instanceof Error ? n.message : String(n);
              } finally {
                this._loading = !1;
              }
            }
          }
          render() {
            return this._loading && !this._svg
              ? (0, a.qy)(nl())
              : this._error
                ? (0, a.qy)(ns(), this._error)
                : this._svg
                  ? (0, a.qy)(nc(), (0, ni._)(this._svg))
                  : a.s6;
          }
          constructor() {
            (super(...arguments),
              (this.diagram = ''),
              (this._svg = ''),
              (this._error = ''),
              (this._loading = !1),
              (this._themeObserver = null));
          }
        };
      function nb() {
        let n = (0, r._)([
          '\n                <a part="link" href=',
          ' aria-current=',
          '>\n                  ',
          '\n                </a>\n              ',
        ]);
        return (
          (nb = function () {
            return n;
          }),
          n
        );
      }
      function nh() {
        let n = (0, r._)([
          '\n      <header>\n        <a part="brand" href="/" data-brand=',
          '>\n          <slot name="brand-icon">',
          '</slot>\n        </a>\n\n        <div class="right">\n          <nav part="links" aria-label="Main navigation">\n            ',
          '\n          </nav>\n\n          <slot name="actions"></slot>\n\n          <div class="theme-toggle" role="group" aria-label="Theme">\n            <button\n              part="theme-light"\n              class=',
          '\n              aria-pressed=',
          '\n              aria-label="Light theme"\n              @click=',
          '\n            >\n              ☀\n            </button>\n            <button\n              part="theme-dark"\n              class=',
          '\n              aria-pressed=',
          '\n              aria-label="Dark theme"\n              @click=',
          '\n            >\n              ☽\n            </button>\n          </div>\n        </div>\n      </header>\n    ',
        ]);
        return (
          (nh = function () {
            return n;
          }),
          n
        );
      }
      function nv() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        position: sticky;\n        top: 0;\n        z-index: 100;\n      }\n\n      /* ── The thick black bar ─────────────────────────────────────────── */\n      header {\n        background: var(--zine-ink, #0e0c07);\n        border: 3px solid var(--zine-ink, #0e0c07);\n        border-bottom: 5px solid var(--zine-ink, #0e0c07);\n        padding: 0 1.25rem;\n        height: 56px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        position: relative;\n        overflow: visible;\n      }\n\n      /* Misregistered red shadow (xerox artifact) */\n      header::before {\n        content: '';\n        position: absolute;\n        inset: 0;\n        background: var(--zine-red, #d42b2b);\n        transform: translate(3px, 3px);\n        z-index: -1;\n      }\n\n      /* ── Brand ────────────────────────────────────────────────────────── */\n      [part='brand'] {\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: 28px;\n        color: var(--zine-yellow, #f5c800);\n        letter-spacing: 0.04em;\n        line-height: 1;\n        position: relative;\n        text-decoration: none;\n        cursor: pointer;\n      }\n\n      /* Blue ghost text behind brand (misregistration) */\n      [part='brand']::after {\n        content: attr(data-brand);\n        position: absolute;\n        left: 2px;\n        top: 2px;\n        color: var(--zine-blue-lt, #4a80d4);\n        z-index: -1;\n        opacity: 0.6;\n        pointer-events: none;\n      }\n\n      [part='brand']:focus-visible {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 4px;\n      }\n\n      /* ── Right side ───────────────────────────────────────────────────── */\n      .right {\n        display: flex;\n        align-items: center;\n        gap: 4px;\n      }\n\n      /* ── Nav links ────────────────────────────────────────────────────── */\n      [part='links'] {\n        display: flex;\n        gap: 2px;\n        align-items: center;\n      }\n\n      [part='link'] {\n        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);\n        font-size: 12px;\n        letter-spacing: 0.05em;\n        color: #ccc;\n        padding: 5px 12px;\n        border: 2px solid transparent;\n        cursor: pointer;\n        text-decoration: none;\n        background: none;\n        line-height: 1;\n      }\n\n      [part='link']:hover {\n        border-color: var(--zine-yellow, #f5c800);\n        color: var(--zine-yellow, #f5c800);\n      }\n\n      [part='link'][aria-current='page'] {\n        background: var(--zine-yellow, #f5c800);\n        color: var(--zine-ink, #0e0c07);\n        border-color: var(--zine-yellow, #f5c800);\n      }\n\n      [part='link']:focus-visible {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 2px;\n      }\n\n      /* ── Theme toggle ─────────────────────────────────────────────────── */\n      .theme-toggle {\n        display: flex;\n        align-items: center;\n        gap: 2px;\n        margin-left: 8px;\n        border: 2px solid rgba(255, 255, 255, 0.15);\n        padding: 2px;\n      }\n\n      .theme-btn {\n        width: 26px;\n        height: 22px;\n        border: none;\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: transparent;\n        color: rgba(255, 255, 255, 0.4);\n        font-size: 12px;\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        letter-spacing: 0;\n      }\n\n      .theme-btn.active {\n        background: var(--zine-yellow, #f5c800);\n        color: var(--zine-ink, #0e0c07);\n      }\n\n      .theme-btn:focus-visible {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 2px;\n      }\n    ",
        ]);
        return (
          (nv = function () {
            return n;
          }),
          n
        );
      }
      ((nu.styles = [l, (0, a.AH)(np())]),
        nd([(0, o.MZ)()], nu.prototype, 'diagram', void 0),
        nd([(0, o.wk)()], nu.prototype, '_svg', void 0),
        nd([(0, o.wk)()], nu.prototype, '_error', void 0),
        nd([(0, o.wk)()], nu.prototype, '_loading', void 0),
        (nu = nd([(0, o.EM)('garden-mermaid')], nu)));
      var ng = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nm = class extends a.WF {
        connectedCallback() {
          super.connectedCallback();
          let n = document.documentElement.getAttribute('data-theme');
          ('dark' === n || 'light' === n) && (this._theme = n);
        }
        _setTheme(n) {
          ((this._theme = n),
            this.dispatchEvent(
              new CustomEvent('garden-theme-change', {
                detail: { theme: n },
                bubbles: !0,
                composed: !0,
              }),
            ));
        }
        setTheme(n) {
          this._theme = n;
        }
        render() {
          return (0, a.qy)(
            nh(),
            this.brand,
            this.brand,
            this.links.map((n) =>
              (0, a.qy)(nb(), n.href, n.active ? 'page' : a.s6, n.label.toUpperCase()),
            ),
            'theme-btn' + ('light' === this._theme ? ' active' : ''),
            'light' === this._theme,
            () => this._setTheme('light'),
            'theme-btn' + ('dark' === this._theme ? ' active' : ''),
            'dark' === this._theme,
            () => this._setTheme('dark'),
          );
        }
        constructor() {
          (super(...arguments),
            (this.brand = 'GARDEN.DEV'),
            (this.links = []),
            (this._theme = 'light'));
        }
      };
      function ny() {
        let n = (0, r._)(['<kbd part="kbd">', '</kbd>']);
        return (
          (ny = function () {
            return n;
          }),
          n
        );
      }
      function nx() {
        let n = (0, r._)([
          '\n      <div role="search" part="wrapper">\n        <span class="icon" aria-hidden="true">\n          <svg\n            width="18"\n            height="18"\n            viewBox="0 0 18 18"\n            fill="none"\n            stroke="currentColor"\n            stroke-width="2.5"\n          >\n            <circle cx="8" cy="8" r="5" />\n            <path d="m12 12 4 4" />\n          </svg>\n        </span>\n        <input\n          part="input"\n          type="search"\n          .value=',
          '\n          placeholder=',
          '\n          aria-label=',
          '\n          @input=',
          '\n        />\n        ',
          '\n      </div>\n    ',
        ]);
        return (
          (nx = function () {
            return n;
          }),
          n
        );
      }
      function nk() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        width: 100%;\n      }\n\n      [role='search'] {\n        background: #fff;\n        border: 3px solid var(--zine-ink, #0e0c07);\n        border-right: 5px solid var(--zine-ink, #0e0c07);\n        border-bottom: 5px solid var(--zine-ink, #0e0c07);\n        padding: 10px 14px;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n        width: 100%;\n        transition: transform 0.1s;\n      }\n\n      [role='search']:focus-within {\n        transform: translate(-1px, -1px);\n      }\n\n      .icon {\n        color: var(--zine-ink, #0e0c07);\n        flex-shrink: 0;\n        display: flex;\n        align-items: center;\n      }\n\n      input {\n        flex: 1;\n        border: none;\n        outline: none;\n        background: transparent;\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        font-size: 14px;\n        color: var(--zine-muted, #6b6050);\n        min-width: 0;\n      }\n\n      input::placeholder {\n        color: var(--zine-muted, #6b6050);\n      }\n\n      input:focus::placeholder {\n        opacity: 0.5;\n      }\n\n      kbd {\n        flex-shrink: 0;\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        font-size: 11px;\n        background: var(--zine-ink, #0e0c07);\n        color: var(--zine-yellow, #f5c800);\n        padding: 2px 7px;\n        letter-spacing: 0.05em;\n        border: none;\n      }\n    ",
        ]);
        return (
          (nk = function () {
            return n;
          }),
          n
        );
      }
      ((nm.styles = [l, (0, a.AH)(nv())]),
        ng([(0, o.MZ)()], nm.prototype, 'brand', void 0),
        ng([(0, o.MZ)({ type: Array })], nm.prototype, 'links', void 0),
        ng([(0, o.wk)()], nm.prototype, '_theme', void 0),
        (nm = ng([(0, o.EM)('garden-nav')], nm)));
      var nz = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nw = class extends a.WF {
        _onInput(n) {
          let e = n.target;
          ((this.value = e.value),
            this.dispatchEvent(
              new CustomEvent('garden-search', {
                detail: { query: this.value },
                bubbles: !0,
                composed: !0,
              }),
            ));
        }
        render() {
          return (0, a.qy)(
            nx(),
            this.value,
            this.placeholder,
            this.placeholder,
            this._onInput,
            this.kbd ? (0, a.qy)(ny(), this.kbd) : '',
          );
        }
        constructor() {
          (super(...arguments),
            (this.placeholder = 'Search notes, wiki, projects…'),
            (this.kbd = ''),
            (this.value = ''));
        }
      };
      function n_() {
        let n = (0, r._)(['<span class="slash">//</span>']);
        return (
          (n_ = function () {
            return n;
          }),
          n
        );
      }
      function nM() {
        let n = (0, r._)(['<div part="heading">', ' ', '</div>']);
        return (
          (nM = function () {
            return n;
          }),
          n
        );
      }
      function nO() {
        let n = (0, r._)([
          '\n      <div part="wrapper" class=',
          '>\n        <div part="pin">●</div>\n        ',
          '\n        <slot></slot>\n      </div>\n    ',
        ]);
        return (
          (nO = function () {
            return n;
          }),
          n
        );
      }
      function nj() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n        margin-top: 2.5rem;\n      }\n\n      [part='wrapper'] {\n        background: var(--zine-paper, #f2edd7);\n        border: var(--zine-border, 3px solid #0e0c07);\n        border-right: 5px solid var(--zine-ink, #0e0c07);\n        border-bottom: 5px solid var(--zine-ink, #0e0c07);\n        padding: 1.5rem;\n        position: relative;\n        box-shadow: var(--zine-shadow-lg, 6px 6px 0 #0e0c07);\n      }\n\n      [part='pin'] {\n        position: absolute;\n        top: -10px;\n        left: 24px;\n        width: 18px;\n        height: 18px;\n        background: var(--pin-bg, var(--zine-red, #d42b2b));\n        border: 2px solid var(--pin-border, var(--zine-red-dark, #8a0000));\n        border-radius: 50%;\n        color: var(--pin-border, var(--zine-red-dark, #8a0000));\n        font-size: 6px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        z-index: 10;\n        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n      }\n\n      [part='wrapper'].pin-yellow {\n        --pin-bg: var(--zine-yellow, #f5c800);\n        --pin-border: #a08800;\n      }\n\n      [part='wrapper'].pin-blue {\n        --pin-bg: var(--zine-blue-lt, #4a80d4);\n        --pin-border: var(--zine-blue, #1a3c8f);\n      }\n\n      [part='wrapper'].pin-green {\n        --pin-bg: var(--zine-green-lt, #a8d8a0);\n        --pin-border: var(--zine-green, #1d6b2e);\n      }\n\n      [part='heading'] {\n        font-family: var(--font-display, 'Bebas Neue', sans-serif);\n        font-size: 22px;\n        color: var(--zine-ink, #0e0c07);\n        letter-spacing: 0.08em;\n        margin-bottom: 1.25rem;\n        display: flex;\n        align-items: center;\n        gap: 10px;\n      }\n\n      [part='heading'] .slash {\n        color: var(--zine-red, #d42b2b);\n      }\n\n      [part='heading']::after {\n        content: '';\n        flex: 1;\n        height: 3px;\n        background: var(--zine-ink, #0e0c07);\n        margin-left: 8px;\n      }\n    ",
        ]);
        return (
          (nj = function () {
            return n;
          }),
          n
        );
      }
      ((nw.styles = [l, (0, a.AH)(nk())]),
        nz([(0, o.MZ)()], nw.prototype, 'placeholder', void 0),
        nz([(0, o.MZ)()], nw.prototype, 'kbd', void 0),
        nz([(0, o.MZ)()], nw.prototype, 'value', void 0),
        (nw = nz([(0, o.EM)('garden-search')], nw)));
      var nR = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nE = class extends a.WF {
        render() {
          let n = 'red' !== this.pinColor ? 'pin-'.concat(this.pinColor) : '',
            e = this.heading ? (0, a.qy)(n_()) : '';
          return (0, a.qy)(nO(), n, this.heading ? (0, a.qy)(nM(), e, this.heading) : '');
        }
        constructor() {
          (super(...arguments), (this.pinColor = 'red'), (this.heading = ''));
        }
      };
      function nq() {
        let n = (0, r._)(['<a part="base" class=', ' href=', '><slot></slot></a>']);
        return (
          (nq = function () {
            return n;
          }),
          n
        );
      }
      function nP() {
        let n = (0, r._)(['<span part="base" class=', '><slot></slot></span>']);
        return (
          (nP = function () {
            return n;
          }),
          n
        );
      }
      function nZ() {
        let n = (0, r._)([
          "\n      :host {\n        display: inline-block;\n      }\n\n      [part='base'] {\n        display: inline-flex;\n        align-items: center;\n        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);\n        font-size: 11px;\n        letter-spacing: 0.06em;\n        line-height: 1;\n        padding: 4px 10px;\n        border: 2px solid var(--zine-ink, #0e0c07);\n        background: var(--zine-paper, #f2edd7);\n        color: var(--zine-ink, #0e0c07);\n        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);\n        white-space: nowrap;\n        text-decoration: none;\n        cursor: default;\n        position: relative;\n        transition: transform 0.1s;\n      }\n\n      /* Subtle rotation for handmade feel */\n      :host(:nth-child(odd)) [part='base'] {\n        transform: rotate(-0.6deg);\n      }\n      :host(:nth-child(even)) [part='base'] {\n        transform: rotate(0.5deg);\n      }\n\n      a[part='base'] {\n        cursor: pointer;\n      }\n      a[part='base']:hover {\n        transform: rotate(0) translate(-1px, -1px);\n      }\n\n      a[part='base']:focus-visible {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 2px;\n      }\n\n      /* Variants */\n      [part='base'].accent {\n        background: var(--zine-red, #d42b2b);\n        color: #fff;\n        border-color: var(--zine-ink, #0e0c07);\n        box-shadow: 2px 2px 0 var(--zine-red-dark, #8a0000);\n      }\n\n      [part='base'].sage,\n      [part='base'].green {\n        background: var(--zine-green, #1d6b2e);\n        color: #fff;\n        border-color: var(--zine-ink, #0e0c07);\n        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);\n      }\n\n      [part='base'].yellow {\n        background: var(--zine-yellow, #f5c800);\n        color: var(--zine-ink, #0e0c07);\n        border-color: var(--zine-ink, #0e0c07);\n        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);\n      }\n\n      [part='base'].blue {\n        background: var(--zine-blue, #1a3c8f);\n        color: #fff;\n        border-color: var(--zine-ink, #0e0c07);\n        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);\n      }\n    ",
        ]);
        return (
          (nZ = function () {
            return n;
          }),
          n
        );
      }
      ((nE.styles = [l, (0, a.AH)(nj())]),
        nR([(0, o.MZ)({ reflect: !0 })], nE.prototype, 'pinColor', void 0),
        nR([(0, o.MZ)()], nE.prototype, 'heading', void 0),
        (nE = nR([(0, o.EM)('garden-sheet')], nE)));
      var nA = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nB = class extends a.WF {
        render() {
          var n;
          let e =
            null !=
            (n = {
              default: '',
              accent: 'accent',
              sage: 'sage',
              yellow: 'yellow',
              blue: 'blue',
              green: 'green',
            }[this.variant])
              ? n
              : '';
          return this.href ? (0, a.qy)(nq(), e, this.href) : (0, a.qy)(nP(), e);
        }
        constructor() {
          (super(...arguments), (this.variant = 'default'));
        }
      };
      function nC() {
        let n = (0, r._)([
          '\n      <span part="base" class=',
          ' style="--tape-rotation: ',
          'deg">\n        <slot>',
          '</slot>\n      </span>\n    ',
        ]);
        return (
          (nC = function () {
            return n;
          }),
          n
        );
      }
      function nD() {
        let n = (0, r._)([
          "\n      :host {\n        display: inline-block;\n      }\n\n      [part='base'] {\n        display: inline-block;\n        background: rgba(245, 200, 0, 0.75);\n        padding: 3px 18px;\n        font-size: 10px;\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n        letter-spacing: 0.08em;\n        color: var(--zine-ink, #0e0c07);\n        transform: rotate(var(--tape-rotation, -1.5deg));\n        position: absolute;\n        z-index: 20;\n        border: 1px solid rgba(0, 0, 0, 0.15);\n        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);\n      }\n\n      [part='base'].red {\n        background: rgba(212, 43, 43, 0.8);\n        color: #fff;\n      }\n\n      [part='base'].blue {\n        background: rgba(26, 60, 143, 0.85);\n        color: #fff;\n      }\n\n      [part='base'].white {\n        background: rgba(255, 255, 255, 0.85);\n      }\n    ",
        ]);
        return (
          (nD = function () {
            return n;
          }),
          n
        );
      }
      ((nB.styles = [l, (0, a.AH)(nZ())]),
        nA([(0, o.MZ)({ reflect: !0 })], nB.prototype, 'variant', void 0),
        nA([(0, o.MZ)()], nB.prototype, 'href', void 0),
        (nB = nA([(0, o.EM)('garden-tag')], nB)));
      var nH = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nS = class extends a.WF {
        render() {
          var n;
          let e =
            null != (n = { default: '', red: 'red', blue: 'blue', white: 'white' }[this.variant])
              ? n
              : '';
          return (0, a.qy)(nC(), e, this.rotation, this.text);
        }
        constructor() {
          (super(...arguments),
            (this.variant = 'default'),
            (this.text = ''),
            (this.rotation = -1.5));
        }
      };
      function nW() {
        let n = (0, r._)([
          '\n                <li part="item" class=',
          '>\n                  <a href=',
          ' aria-current=',
          '>\n                    <span class="toc-box" aria-hidden="true"></span>\n                    ',
          '\n                  </a>\n                </li>\n              ',
        ]);
        return (
          (nW = function () {
            return n;
          }),
          n
        );
      }
      function nF() {
        let n = (0, r._)([
          '\n      <nav aria-label="Table of contents">\n        <div part="wrapper">\n          <span part="title">',
          '</span>\n          <ol part="list" role="list">\n            ',
          '\n          </ol>\n        </div>\n      </nav>\n    ',
        ]);
        return (
          (nF = function () {
            return n;
          }),
          n
        );
      }
      function nN() {
        let n = (0, r._)([
          "\n      :host {\n        display: block;\n      }\n\n      [part='wrapper'] {\n        background: var(--zine-paper-alt, #ede5c8);\n        border: 3px solid var(--zine-ink, #0e0c07);\n        border-right: 5px solid var(--zine-ink, #0e0c07);\n        border-bottom: 5px solid var(--zine-ink, #0e0c07);\n        padding: 1rem;\n        transform: rotate(0.7deg);\n      }\n\n      [part='title'] {\n        font-family: var(--font-marker, 'Permanent Marker', cursive);\n        font-size: 15px;\n        color: var(--zine-ink, #0e0c07);\n        display: block;\n        margin-bottom: 0.8rem;\n        border-bottom: 3px solid var(--zine-ink, #0e0c07);\n        padding-bottom: 6px;\n      }\n\n      [part='list'] {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        display: flex;\n        flex-direction: column;\n        gap: 1px;\n      }\n\n      [part='item'] {\n        display: flex;\n        align-items: flex-start;\n        gap: 6px;\n      }\n\n      [part='item'].depth-2 {\n        padding-left: 16px;\n      }\n\n      [part='item'] a {\n        font-family: var(--font-body, 'Special Elite', serif);\n        font-size: 12px;\n        color: var(--zine-ink-faded, #2c2820);\n        text-decoration: none;\n        padding: 4px 0;\n        display: flex;\n        align-items: flex-start;\n        gap: 6px;\n        line-height: 1.4;\n        width: 100%;\n        border-bottom: 1px dashed rgba(14, 12, 7, 0.2);\n        transition: color 0.1s;\n      }\n\n      [part='item']:last-child a {\n        border-bottom: none;\n      }\n\n      [part='item'].depth-2 a {\n        font-size: 11px;\n      }\n\n      [part='item'] a:hover {\n        color: var(--zine-red, #d42b2b);\n      }\n\n      [part='item'] a[aria-current='true'] {\n        color: var(--zine-red, #d42b2b);\n        font-family: var(--font-marker, 'Permanent Marker', cursive);\n      }\n\n      [part='item'] a:focus-visible {\n        outline: 2px solid var(--zine-yellow, #f5c800);\n        outline-offset: 2px;\n      }\n\n      /* Checkbox / tick box */\n      .toc-box {\n        width: 10px;\n        height: 10px;\n        border: 2px solid currentColor;\n        flex-shrink: 0;\n        margin-top: 3px;\n        display: inline-block;\n        position: relative;\n      }\n\n      a[aria-current='true'] .toc-box {\n        background: var(--zine-red, #d42b2b);\n        border-color: var(--zine-red, #d42b2b);\n      }\n\n      a[aria-current='true'] .toc-box::after {\n        content: '✕';\n        position: absolute;\n        top: -4px;\n        left: 0px;\n        font-size: 12px;\n        color: #fff;\n        line-height: 1;\n        font-family: var(--font-mono, 'Cutive Mono', monospace);\n      }\n    ",
        ]);
        return (
          (nN = function () {
            return n;
          }),
          n
        );
      }
      ((nS.styles = [l, (0, a.AH)(nD())]),
        nH([(0, o.MZ)({ reflect: !0 })], nS.prototype, 'variant', void 0),
        nH([(0, o.MZ)()], nS.prototype, 'text', void 0),
        nH([(0, o.MZ)()], nS.prototype, 'rotation', void 0),
        (nS = nH([(0, o.EM)('garden-tape')], nS)));
      var nT = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nL = class extends a.WF {
        render() {
          return (0, a.qy)(
            nF(),
            this.heading,
            this.items.map((n) =>
              (0, a.qy)(
                nW(),
                2 === n.depth ? 'depth-2' : '',
                '#'.concat(n.id),
                n.active ? 'true' : a.s6,
                n.label,
              ),
            ),
          );
        }
        constructor() {
          (super(...arguments), (this.items = []), (this.heading = 'On this page'));
        }
      };
      function nI() {
        let n = (0, r._)(['<h1>', '</h1>']);
        return (
          (nI = function () {
            return n;
          }),
          n
        );
      }
      function nU() {
        let n = (0, r._)(['\n    h1 {\n      font-size: 1.4rem;\n      margin: 0;\n    }\n  ']);
        return (
          (nU = function () {
            return n;
          }),
          n
        );
      }
      ((nL.styles = [l, (0, a.AH)(nN())]),
        nT([(0, o.MZ)({ type: Array })], nL.prototype, 'items', void 0),
        nT([(0, o.MZ)()], nL.prototype, 'heading', void 0),
        (nL = nT([(0, o.EM)('garden-toc')], nL)));
      var nG = function (n, e, t, r) {
        var a,
          o = arguments.length,
          i = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, t)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
          i = Reflect.decorate(n, e, t, r);
        else
          for (var l = n.length - 1; l >= 0; l--)
            (a = n[l]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, t, i) : a(e, t)) || i);
        return (o > 3 && i && Object.defineProperty(e, t, i), i);
      };
      let nV = class extends a.WF {
        render() {
          return (0, a.qy)(nI(), this.text);
        }
        constructor() {
          (super(...arguments), (this.text = 'Hello'));
        }
      };
      function nX() {
        return null;
      }
      ((nV.styles = (0, a.AH)(nU())),
        nG([(0, o.MZ)({ type: String })], nV.prototype, 'text', void 0),
        (nV = nG([(0, o.EM)('my-heading')], nV)));
    },
    24003: (n, e, t) => {
      (Promise.resolve().then(t.bind(t, 9191)),
        Promise.resolve().then(t.bind(t, 91771)),
        Promise.resolve().then(t.t.bind(t, 68620, 23)));
    },
    48512: (n, e, t) => {
      'use strict';
      t.d(e, { O: () => s, Z: () => l });
      let r = '/notes';
      function a(n) {
        let e = n.trim(),
          t = '',
          r = '',
          a = e.indexOf('#');
        -1 !== a && ((t = e.slice(a)), (e = e.slice(0, a)));
        let o = e.indexOf('?');
        return (
          -1 !== o && ((r = e.slice(o)), (e = e.slice(0, o))),
          e.startsWith('/') || (e = '/'.concat(e)),
          { pathname: e || '/', search: r, hash: t }
        );
      }
      function o(n) {
        return n === r || n === ''.concat(r, '/')
          ? '/'
          : n.startsWith(''.concat(r, '/'))
            ? n.slice(r.length) || '/'
            : n || '/';
      }
      function i(n) {
        return '/' === n ? '/' : n.endsWith('/') ? n : ''.concat(n, '/');
      }
      function l(n) {
        let { pathname: e, search: t, hash: l } = a(n),
          s = o(e),
          c = i('/' === s ? r : ''.concat(r).concat(s));
        return ''.concat(c).concat(t).concat(l);
      }
      function s(n) {
        let { pathname: e, search: t, hash: r } = a(n),
          l = i(o(e));
        return ''.concat(l).concat(t).concat(r);
      }
    },
    68620: () => {},
    91771: (n, e, t) => {
      'use strict';
      t.d(e, { SiteNav: () => s });
      var r = t(65603),
        a = t(90952),
        o = t(48963),
        i = t(48512);
      let l = [
        { label: 'notes', href: (0, i.Z)('/') },
        { label: 'books', href: (0, i.Z)('/books') },
        { label: 'about', href: (0, i.Z)('/about') },
      ];
      function s() {
        let n = (0, a.usePathname)(),
          e = (0, o.useRef)(null);
        return (
          (0, o.useEffect)(() => {
            let n = e.current;
            if (!n) return;
            let t = document.documentElement.getAttribute('data-theme');
            if ('dark' === t || 'light' === t) {
              var r;
              null == (r = n.setTheme) || r.call(n, t);
            }
            n.homeHref = (0, i.Z)('/');
            let a = (n) => {
              let e = n.detail.theme;
              document.documentElement.setAttribute('data-theme', e);
              try {
                localStorage.setItem('theme', e);
              } catch (n) {}
            };
            return (
              n.addEventListener('garden-theme-change', a),
              () => n.removeEventListener('garden-theme-change', a)
            );
          }, []),
          (0, o.useEffect)(() => {
            let n = e.current;
            if (!n) return;
            let t = window.location.pathname;
            n.links = l.map((n) => ({
              ...n,
              active:
                n.href === (0, i.Z)('/') ? t === (0, i.Z)('/') || '/' === t : t.startsWith(n.href),
            }));
          }, [n]),
          (0, r.jsx)('garden-nav', { ref: e, brand: 'garden.dev', 'data-testid': 'site-nav' })
        );
      }
    },
  },
  (n) => {
    (n.O(0, [4733, 1874, 6635, 9873, 7358], () => n((n.s = 24003))), (_N_E = n.O()));
  },
]);
