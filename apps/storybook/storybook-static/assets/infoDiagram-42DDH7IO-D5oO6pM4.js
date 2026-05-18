import { _ as a, l as o, L as n, e as i } from './mermaid.core-ORyKTq4A.js';
import { p } from './wardley-RL74JXVD-DbzsJyh7.js';
import './preload-helper-C1FmrZbK.js';
import './iframe-BMk1oW9O.js';
import './min-CfRc-Ebv.js';
import './_baseUniq-BzDR6x7P.js';
var g = {
    parse: a(async (r) => {
      const e = await p('info', r);
      o.debug(e);
    }, 'parse'),
  },
  v = { version: '11.14.0' },
  d = a(() => v.version, 'getVersion'),
  m = { getVersion: d },
  c = a((r, e, s) => {
    o.debug(
      `rendering info diagram
` + r,
    );
    const t = n(e);
    (i(t, 100, 400, !0),
      t
        .append('g')
        .append('text')
        .attr('x', 100)
        .attr('y', 40)
        .attr('class', 'version')
        .attr('font-size', 32)
        .style('text-anchor', 'middle')
        .text(`v${s}`));
  }, 'draw'),
  l = { draw: c },
  S = { parser: g, db: m, renderer: l };
export { S as diagram };
