import { r as i } from './iframe-BMk1oW9O.js';
function f(t, s) {
  for (var o = 0; o < s.length; o++) {
    const e = s[o];
    if (typeof e != 'string' && !Array.isArray(e)) {
      for (const r in e)
        if (r !== 'default' && !(r in t)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(t, r, a.get ? a : { enumerable: !0, get: () => e[r] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }));
}
var c = {};
/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var u = i(),
  n = !1,
  l = (c.act = function (t) {
    return (
      n === !1 &&
        ((n = !0),
        console.error(
          '`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.',
        )),
      u.act(t)
    );
  });
const p = f({ __proto__: null, act: l, default: c }, [c]);
export { p as r };
