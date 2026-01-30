import * as React$1 from "react";
import React, { Children, createContext, forwardRef, isValidElement, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState, version } from "react";
import * as ReactDOM$1 from "react-dom";
import ReactDOM from "react-dom";
import { jsx } from "react/jsx-runtime";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __commonJSMin = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), __copyProps = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = __getOwnPropNames(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !__hasOwnProp.call(e, s) && s !== n && __defProp(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = __getOwnPropDesc(t, s)) || r.enumerable
	});
	return e;
}, __toESM = (e, t, n) => (n = e == null ? {} : __create(__getProtoOf(e)), __copyProps(t || !e || !e.__esModule ? __defProp(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), require_classnames = /* @__PURE__ */ __commonJSMin(((e, t) => {
	(function() {
		var e = {}.hasOwnProperty;
		function n() {
			for (var e = "", t = 0; t < arguments.length; t++) {
				var n = arguments[t];
				n && (e = i(e, r(n)));
			}
			return e;
		}
		function r(t) {
			if (typeof t == "string" || typeof t == "number") return t;
			if (typeof t != "object") return "";
			if (Array.isArray(t)) return n.apply(null, t);
			if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) return t.toString();
			var r = "";
			for (var a in t) e.call(t, a) && t[a] && (r = i(r, a));
			return r;
		}
		function i(e, t) {
			return t ? e ? e + " " + t : e + t : e;
		}
		t !== void 0 && t.exports ? (n.default = n, t.exports = n) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return n;
		}) : window.classNames = n;
	})();
}));
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, _extends.apply(null, arguments);
}
function _typeof(e) {
	"@babel/helpers - typeof";
	return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, _typeof(e);
}
var REACT_ELEMENT_TYPE_18 = Symbol.for("react.element"), REACT_ELEMENT_TYPE_19 = Symbol.for("react.transitional.element"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function isFragment$1(e) {
	return e && _typeof(e) === "object" && (e.$$typeof === REACT_ELEMENT_TYPE_18 || e.$$typeof === REACT_ELEMENT_TYPE_19) && e.type === REACT_FRAGMENT_TYPE;
}
var warned = {}, preWarningFns = [], preMessage = function(e) {
	preWarningFns.push(e);
};
function warning$2(e, t) {
	if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
		var n = preWarningFns.reduce(function(e, t) {
			return t(e ?? "", "warning");
		}, t);
		n && console.error(`Warning: ${n}`);
	}
}
function note(e, t) {
	if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
		var n = preWarningFns.reduce(function(e, t) {
			return t(e ?? "", "note");
		}, t);
		n && console.warn(`Note: ${n}`);
	}
}
function resetWarned$1() {
	warned = {};
}
function call(e, t, n) {
	!t && !warned[n] && (e(!1, n), warned[n] = !0);
}
function warningOnce(e, t) {
	call(warning$2, e, t);
}
function noteOnce(e, t) {
	call(note, e, t);
}
warningOnce.preMessage = preMessage, warningOnce.resetWarned = resetWarned$1, warningOnce.noteOnce = noteOnce;
var warning_default$1 = warningOnce;
function toPrimitive(e, t) {
	if (_typeof(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (_typeof(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function toPropertyKey(e) {
	var t = toPrimitive(e, "string");
	return _typeof(t) == "symbol" ? t : t + "";
}
function _defineProperty(e, t, n) {
	return (t = toPropertyKey(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function ownKeys(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function _objectSpread2(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? ownKeys(Object(n), !0).forEach(function(t) {
			_defineProperty(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function isDOM(e) {
	return e instanceof HTMLElement || e instanceof SVGElement;
}
function getDOM(e) {
	return e && _typeof(e) === "object" && isDOM(e.nativeElement) ? e.nativeElement : isDOM(e) ? e : null;
}
function findDOMNode(e) {
	return getDOM(e) || (e instanceof React.Component ? ReactDOM.findDOMNode?.call(ReactDOM, e) : null);
}
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((e) => {
	var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy");
	function m(e) {
		if (typeof e == "object" && e) {
			var m = e.$$typeof;
			switch (m) {
				case t: switch (e = e.type, e) {
					case r:
					case a:
					case i:
					case u:
					case d: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case s:
						case l:
						case p:
						case f:
						case o: return e;
						default: return m;
					}
				}
				case n: return m;
			}
		}
	}
	e.ForwardRef = l, e.isMemo = function(e) {
		return m(e) === f;
	};
})), require_react_is_development = /* @__PURE__ */ __commonJSMin(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = !1, g = !1, _ = !1, v = !1, y = !1, b = Symbol.for("react.module.reference");
		function x(e) {
			return !!(typeof e == "string" || typeof e == "function" || e === r || e === a || y || e === i || e === u || e === d || v || e === m || h || g || _ || typeof e == "object" && e && (e.$$typeof === p || e.$$typeof === f || e.$$typeof === o || e.$$typeof === s || e.$$typeof === l || e.$$typeof === b || e.getModuleId !== void 0));
		}
		function S(e) {
			if (typeof e == "object" && e) {
				var m = e.$$typeof;
				switch (m) {
					case t:
						var h = e.type;
						switch (h) {
							case r:
							case a:
							case i:
							case u:
							case d: return h;
							default:
								var g = h && h.$$typeof;
								switch (g) {
									case c:
									case s:
									case l:
									case p:
									case f:
									case o: return g;
									default: return m;
								}
						}
					case n: return m;
				}
			}
		}
		var C = s, w = o, T = t, E = l, D = r, O = p, k = f, A = n, j = a, M = i, N = u, P = d, F = !1, I = !1;
		function L(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
		}
		function R(e) {
			return I || (I = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
		}
		function z(e) {
			return S(e) === s;
		}
		function B(e) {
			return S(e) === o;
		}
		function V(e) {
			return typeof e == "object" && !!e && e.$$typeof === t;
		}
		function H(e) {
			return S(e) === l;
		}
		function U(e) {
			return S(e) === r;
		}
		function ee(e) {
			return S(e) === p;
		}
		function W(e) {
			return S(e) === f;
		}
		function G(e) {
			return S(e) === n;
		}
		function K(e) {
			return S(e) === a;
		}
		function q(e) {
			return S(e) === i;
		}
		function J(e) {
			return S(e) === u;
		}
		function te(e) {
			return S(e) === d;
		}
		e.ContextConsumer = C, e.ContextProvider = w, e.Element = T, e.ForwardRef = E, e.Fragment = D, e.Lazy = O, e.Memo = k, e.Portal = A, e.Profiler = j, e.StrictMode = M, e.Suspense = N, e.SuspenseList = P, e.isAsyncMode = L, e.isConcurrentMode = R, e.isContextConsumer = z, e.isContextProvider = B, e.isElement = V, e.isForwardRef = H, e.isFragment = U, e.isLazy = ee, e.isMemo = W, e.isPortal = G, e.isProfiler = K, e.isStrictMode = q, e.isSuspense = J, e.isSuspenseList = te, e.isValidElementType = x, e.typeOf = S;
	})();
})), require_react_is = /* @__PURE__ */ __commonJSMin(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = require_react_is_production_min() : t.exports = require_react_is_development();
}));
function useMemo$1(t, n, r) {
	var i = React$1.useRef({});
	return (!("value" in i.current) || r(i.current.condition, n)) && (i.current.value = t(), i.current.condition = n), i.current.value;
}
var import_react_is = require_react_is(), ReactMajorVersion = Number(version.split(".")[0]), fillRef = function(e, t) {
	typeof e == "function" ? e(t) : _typeof(e) === "object" && e && "current" in e && (e.current = t);
}, composeRef = function() {
	var e = [...arguments], t = e.filter(Boolean);
	return t.length <= 1 ? t[0] : function(t) {
		e.forEach(function(e) {
			fillRef(e, t);
		});
	};
}, useComposeRef = function() {
	var e = [...arguments];
	return useMemo$1(function() {
		return composeRef.apply(void 0, e);
	}, e, function(e, t) {
		return e.length !== t.length || e.every(function(e, n) {
			return e !== t[n];
		});
	});
}, supportRef = function(e) {
	var t, n;
	if (!e) return !1;
	if (isReactElement(e) && ReactMajorVersion >= 19) return !0;
	var r = (0, import_react_is.isMemo)(e) ? e.type.type : e.type;
	return !(typeof r == "function" && !((t = r.prototype) != null && t.render) && r.$$typeof !== import_react_is.ForwardRef || typeof e == "function" && !((n = e.prototype) != null && n.render) && e.$$typeof !== import_react_is.ForwardRef);
};
function isReactElement(e) {
	return /* @__PURE__ */ isValidElement(e) && !isFragment$1(e);
}
var getNodeRef = function(e) {
	if (e && isReactElement(e)) {
		var t = e;
		return t.props.propertyIsEnumerable("ref") ? t.props.ref : t.ref;
	}
	return null;
};
function _classCallCheck(e, t) {
	if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
}
function _defineProperties(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, toPropertyKey(r.key), r);
	}
}
function _createClass(e, t, n) {
	return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _setPrototypeOf(e, t) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
		return e.__proto__ = t, e;
	}, _setPrototypeOf(e, t);
}
function _inherits(e, t) {
	if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function");
	e.prototype = Object.create(t && t.prototype, { constructor: {
		value: e,
		writable: !0,
		configurable: !0
	} }), Object.defineProperty(e, "prototype", { writable: !1 }), t && _setPrototypeOf(e, t);
}
function _getPrototypeOf(e) {
	return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
		return e.__proto__ || Object.getPrototypeOf(e);
	}, _getPrototypeOf(e);
}
function _isNativeReflectConstruct() {
	try {
		var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch {}
	return (_isNativeReflectConstruct = function() {
		return !!e;
	})();
}
function _assertThisInitialized(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
function _possibleConstructorReturn(e, t) {
	if (t && (_typeof(t) == "object" || typeof t == "function")) return t;
	if (t !== void 0) throw TypeError("Derived constructors may only return object or undefined");
	return _assertThisInitialized(e);
}
function _createSuper(e) {
	var t = _isNativeReflectConstruct();
	return function() {
		var n, r = _getPrototypeOf(e);
		if (t) {
			var i = _getPrototypeOf(this).constructor;
			n = Reflect.construct(r, arguments, i);
		} else n = r.apply(this, arguments);
		return _possibleConstructorReturn(this, n);
	};
}
function _arrayLikeToArray(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function _arrayWithoutHoles(e) {
	if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _iterableToArray(e) {
	if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _unsupportedIterableToArray(e, t) {
	if (e) {
		if (typeof e == "string") return _arrayLikeToArray(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(e, t) : void 0;
	}
}
function _nonIterableSpread() {
	throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(e) {
	return _arrayWithoutHoles(e) || _iterableToArray(e) || _unsupportedIterableToArray(e) || _nonIterableSpread();
}
var raf = function(e) {
	return +setTimeout(e, 16);
}, caf = function(e) {
	return clearTimeout(e);
};
typeof window < "u" && "requestAnimationFrame" in window && (raf = function(e) {
	return window.requestAnimationFrame(e);
}, caf = function(e) {
	return window.cancelAnimationFrame(e);
});
var rafUUID = 0, rafIds = /* @__PURE__ */ new Map();
function cleanup(e) {
	rafIds.delete(e);
}
var wrapperRaf = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
	rafUUID += 1;
	var n = rafUUID;
	function r(t) {
		if (t === 0) cleanup(n), e();
		else {
			var i = raf(function() {
				r(t - 1);
			});
			rafIds.set(n, i);
		}
	}
	return r(t), n;
};
wrapperRaf.cancel = function(e) {
	var t = rafIds.get(e);
	return cleanup(e), caf(t);
}, process.env.NODE_ENV !== "production" && (wrapperRaf.ids = function() {
	return rafIds;
});
var raf_default = wrapperRaf;
function _arrayWithHoles(e) {
	if (Array.isArray(e)) return e;
}
function _iterableToArrayLimit(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t === 0) {
				if (Object(n) !== n) return;
				c = !1;
			} else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function _nonIterableRest() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(e, t) {
	return _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _unsupportedIterableToArray(e, t) || _nonIterableRest();
}
function murmur2(e) {
	for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4) n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, t = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	switch (i) {
		case 3: t ^= (e.charCodeAt(r + 2) & 255) << 16;
		case 2: t ^= (e.charCodeAt(r + 1) & 255) << 8;
		case 1: t ^= e.charCodeAt(r) & 255, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
	}
	return t ^= t >>> 13, t = (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var hash_browser_esm_default = murmur2;
function canUseDom() {
	return !!(typeof window < "u" && window.document && window.document.createElement);
}
function contains(e, t) {
	if (!e) return !1;
	if (e.contains) return e.contains(t);
	for (var n = t; n;) {
		if (n === e) return !0;
		n = n.parentNode;
	}
	return !1;
}
var APPEND_ORDER = "data-rc-order", APPEND_PRIORITY = "data-rc-priority", MARK_KEY = "rc-util-key", containerCache = /* @__PURE__ */ new Map();
function getMark() {
	var e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).mark;
	return e ? e.startsWith("data-") ? e : `data-${e}` : MARK_KEY;
}
function getContainer(e) {
	return e.attachTo ? e.attachTo : document.querySelector("head") || document.body;
}
function getOrder(e) {
	return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function findStyles(e) {
	return Array.from((containerCache.get(e) || e).children).filter(function(e) {
		return e.tagName === "STYLE";
	});
}
function injectCSS(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	if (!canUseDom()) return null;
	var n = t.csp, r = t.prepend, i = t.priority, a = i === void 0 ? 0 : i, o = getOrder(r), s = o === "prependQueue", c = document.createElement("style");
	c.setAttribute(APPEND_ORDER, o), s && a && c.setAttribute(APPEND_PRIORITY, `${a}`), n != null && n.nonce && (c.nonce = n?.nonce), c.innerHTML = e;
	var l = getContainer(t), u = l.firstChild;
	if (r) {
		if (s) {
			var d = (t.styles || findStyles(l)).filter(function(e) {
				return ["prepend", "prependQueue"].includes(e.getAttribute(APPEND_ORDER)) ? a >= Number(e.getAttribute(APPEND_PRIORITY) || 0) : !1;
			});
			if (d.length) return l.insertBefore(c, d[d.length - 1].nextSibling), c;
		}
		l.insertBefore(c, u);
	} else l.appendChild(c);
	return c;
}
function findExistNode(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = getContainer(t);
	return (t.styles || findStyles(n)).find(function(n) {
		return n.getAttribute(getMark(t)) === e;
	});
}
function removeCSS(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = findExistNode(e, t);
	n && getContainer(t).removeChild(n);
}
function syncRealContainer(e, t) {
	var n = containerCache.get(e);
	if (!n || !contains(document, n)) {
		var r = injectCSS("", t), i = r.parentNode;
		containerCache.set(e, i), e.removeChild(r);
	}
}
function updateCSS(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = getContainer(n), i = findStyles(r), a = _objectSpread2(_objectSpread2({}, n), {}, { styles: i });
	syncRealContainer(r, a);
	var o = findExistNode(t, a);
	if (o) {
		var s;
		return (s = a.csp) != null && s.nonce && o.nonce !== a.csp?.nonce && (o.nonce = a.csp?.nonce), o.innerHTML !== e && (o.innerHTML = e), o;
	}
	var c = injectCSS(e, a);
	return c.setAttribute(getMark(a), t), c;
}
function _objectWithoutPropertiesLoose(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function _objectWithoutProperties(e, t) {
	if (e == null) return {};
	var n, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
var SPLIT = "%";
function pathKey(e) {
	return e.join(SPLIT);
}
var Cache_default = /* @__PURE__ */ function() {
	function e(t) {
		_classCallCheck(this, e), _defineProperty(this, "instanceId", void 0), _defineProperty(this, "cache", /* @__PURE__ */ new Map()), _defineProperty(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
	}
	return _createClass(e, [
		{
			key: "get",
			value: function(e) {
				return this.opGet(pathKey(e));
			}
		},
		{
			key: "opGet",
			value: function(e) {
				return this.cache.get(e) || null;
			}
		},
		{
			key: "update",
			value: function(e, t) {
				return this.opUpdate(pathKey(e), t);
			}
		},
		{
			key: "opUpdate",
			value: function(e, t) {
				var n = t(this.cache.get(e));
				n === null ? this.cache.delete(e) : this.cache.set(e, n);
			}
		}
	]), e;
}(), ATTR_TOKEN = "data-token-hash", ATTR_MARK = "data-css-hash", ATTR_CACHE_PATH = "data-cache-path", CSS_IN_JS_INSTANCE = "__cssinjs_instance__";
function createCache() {
	var e = Math.random().toString(12).slice(2);
	if (typeof document < "u" && document.head && document.body) {
		var t = document.body.querySelectorAll("style[data-css-hash]") || [], n = document.head.firstChild;
		Array.from(t).forEach(function(t) {
			t[CSS_IN_JS_INSTANCE] = t.__cssinjs_instance__ || e, t.__cssinjs_instance__ === e && document.head.insertBefore(t, n);
		});
		var r = {};
		Array.from(document.querySelectorAll(`style[${ATTR_MARK}]`)).forEach(function(t) {
			var n = t.getAttribute(ATTR_MARK);
			if (r[n]) {
				if (t.__cssinjs_instance__ === e) {
					var i;
					(i = t.parentNode) == null || i.removeChild(t);
				}
			} else r[n] = !0;
		});
	}
	return new Cache_default(e);
}
var StyleContext_default = /* @__PURE__ */ React$1.createContext({
	hashPriority: "low",
	cache: createCache(),
	defaultCache: !0
});
function sameDerivativeOption(e, t) {
	if (e.length !== t.length) return !1;
	for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
var ThemeCache = /* @__PURE__ */ function() {
	function e() {
		_classCallCheck(this, e), _defineProperty(this, "cache", void 0), _defineProperty(this, "keys", void 0), _defineProperty(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
	}
	return _createClass(e, [
		{
			key: "size",
			value: function() {
				return this.keys.length;
			}
		},
		{
			key: "internalGet",
			value: function(e) {
				var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = { map: this.cache };
				return e.forEach(function(e) {
					if (!r) r = void 0;
					else {
						var t;
						r = (t = r) == null || (t = t.map) == null ? void 0 : t.get(e);
					}
				}), (t = r) != null && t.value && n && (r.value[1] = this.cacheCallTimes++), r?.value;
			}
		},
		{
			key: "get",
			value: function(e) {
				return this.internalGet(e, !0)?.[0];
			}
		},
		{
			key: "has",
			value: function(e) {
				return !!this.internalGet(e);
			}
		},
		{
			key: "set",
			value: function(t, n) {
				var r = this;
				if (!this.has(t)) {
					if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
						var i = _slicedToArray(this.keys.reduce(function(e, t) {
							var n = _slicedToArray(e, 2)[1];
							return r.internalGet(t)[1] < n ? [t, r.internalGet(t)[1]] : e;
						}, [this.keys[0], this.cacheCallTimes]), 1)[0];
						this.delete(i);
					}
					this.keys.push(t);
				}
				var a = this.cache;
				t.forEach(function(e, i) {
					if (i === t.length - 1) a.set(e, { value: [n, r.cacheCallTimes++] });
					else {
						var o = a.get(e);
						o ? o.map ||= /* @__PURE__ */ new Map() : a.set(e, { map: /* @__PURE__ */ new Map() }), a = a.get(e).map;
					}
				});
			}
		},
		{
			key: "deleteByPath",
			value: function(e, t) {
				var n = e.get(t[0]);
				if (t.length === 1) return n.map ? e.set(t[0], { map: n.map }) : e.delete(t[0]), n.value?.[0];
				var r = this.deleteByPath(n.map, t.slice(1));
				return (!n.map || n.map.size === 0) && !n.value && e.delete(t[0]), r;
			}
		},
		{
			key: "delete",
			value: function(e) {
				if (this.has(e)) return this.keys = this.keys.filter(function(t) {
					return !sameDerivativeOption(t, e);
				}), this.deleteByPath(this.cache, e);
			}
		}
	]), e;
}();
_defineProperty(ThemeCache, "MAX_CACHE_SIZE", 20), _defineProperty(ThemeCache, "MAX_CACHE_OFFSET", 5);
var uuid = 0, Theme = /* @__PURE__ */ function() {
	function e(t) {
		_classCallCheck(this, e), _defineProperty(this, "derivatives", void 0), _defineProperty(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = uuid, t.length === 0 && warning$2(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), uuid += 1;
	}
	return _createClass(e, [{
		key: "getDerivativeToken",
		value: function(e) {
			return this.derivatives.reduce(function(t, n) {
				return n(e, t);
			}, void 0);
		}
	}]), e;
}(), cacheThemes = new ThemeCache();
function createTheme(e) {
	var t = Array.isArray(e) ? e : [e];
	return cacheThemes.has(t) || cacheThemes.set(t, new Theme(t)), cacheThemes.get(t);
}
var resultCache = /* @__PURE__ */ new WeakMap(), RESULT_VALUE = {};
function memoResult(e, t) {
	for (var n = resultCache, r = 0; r < t.length; r += 1) {
		var i = t[r];
		n.has(i) || n.set(i, /* @__PURE__ */ new WeakMap()), n = n.get(i);
	}
	return n.has(RESULT_VALUE) || n.set(RESULT_VALUE, e()), n.get(RESULT_VALUE);
}
var flattenTokenCache = /* @__PURE__ */ new WeakMap();
function flattenToken(e) {
	var t = flattenTokenCache.get(e) || "";
	return t || (Object.keys(e).forEach(function(n) {
		var r = e[n];
		t += n, r instanceof Theme ? t += r.id : r && _typeof(r) === "object" ? t += flattenToken(r) : t += r;
	}), t = hash_browser_esm_default(t), flattenTokenCache.set(e, t)), t;
}
function token2key(e, t) {
	return hash_browser_esm_default(`${t}_${flattenToken(e)}`);
}
`random-${Date.now()}-${Math.random()}`.replace(/\./g, "");
var isClientSide = canUseDom();
function unit$1(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function toStyleStr(e, t, n) {
	var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
	if (arguments.length > 4 && arguments[4] !== void 0 && arguments[4]) return e;
	var i = _objectSpread2(_objectSpread2({}, r), {}, _defineProperty(_defineProperty({}, ATTR_TOKEN, t), ATTR_MARK, n));
	return `<style ${Object.keys(i).map(function(e) {
		var t = i[e];
		return t ? `${e}="${t}"` : null;
	}).filter(function(e) {
		return e;
	}).join(" ")}>${e}</style>`;
}
var token2CSSVar = function(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
	return `--${t ? `${t}-` : ""}${e}`.replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, serializeCSSVar = function(e, t, n) {
	return Object.keys(e).length ? `.${t}${n != null && n.scope ? `.${n.scope}` : ""}{${Object.entries(e).map(function(e) {
		var t = _slicedToArray(e, 2);
		return `${t[0]}:${t[1]};`;
	}).join("")}}` : "";
}, transformToken = function(e, t, n) {
	var r = {}, i = {};
	return Object.entries(e).forEach(function(e) {
		var t, a, o = _slicedToArray(e, 2), s = o[0], c = o[1];
		if (n != null && (t = n.preserve) != null && t[s]) i[s] = c;
		else if ((typeof c == "string" || typeof c == "number") && !(n != null && (a = n.ignore) != null && a[s])) {
			var l, u = token2CSSVar(s, n?.prefix);
			r[u] = typeof c == "number" && !(n != null && (l = n.unitless) != null && l[s]) ? `${c}px` : String(c), i[s] = `var(${u})`;
		}
	}), [i, serializeCSSVar(r, t, { scope: n?.scope })];
}, useInternalLayoutEffect = process.env.NODE_ENV !== "test" && canUseDom() ? React$1.useLayoutEffect : React$1.useEffect, useLayoutEffect$1 = function(t, n) {
	var r = React$1.useRef(!0);
	useInternalLayoutEffect(function() {
		return t(r.current);
	}, n), useInternalLayoutEffect(function() {
		return r.current = !1, function() {
			r.current = !0;
		};
	}, []);
}, useLayoutUpdateEffect = function(e, t) {
	useLayoutEffect$1(function(t) {
		if (!t) return e();
	}, t);
}, useLayoutEffect_default = useLayoutEffect$1, useInsertionEffect = _objectSpread2({}, React$1).useInsertionEffect, useCompatibleInsertionEffect_default = useInsertionEffect ? function(e, t, n) {
	return useInsertionEffect(function() {
		return e(), t();
	}, n);
} : function(t, n, r) {
	React$1.useMemo(t, r), useLayoutEffect_default(function() {
		return n(!0);
	}, r);
}, useEffectCleanupRegister_default = _objectSpread2({}, React$1).useInsertionEffect === void 0 ? function() {
	return function(e) {
		e();
	};
} : function(t) {
	var n = [], r = !1;
	function i(e) {
		if (r) {
			process.env.NODE_ENV !== "production" && warning$2(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
			return;
		}
		n.push(e);
	}
	return React$1.useEffect(function() {
		return r = !1, function() {
			r = !0, n.length && n.forEach(function(e) {
				return e();
			});
		};
	}, t), i;
};
function useProdHMR() {
	return !1;
}
var webpackHMR = !1;
function useDevHMR() {
	return webpackHMR;
}
var useHMR_default = process.env.NODE_ENV === "production" ? useProdHMR : useDevHMR;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
	var win = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
	if (win && typeof win.webpackHotUpdate == "function") {
		var originWebpackHotUpdate = win.webpackHotUpdate;
		win.webpackHotUpdate = function() {
			return webpackHMR = !0, setTimeout(function() {
				webpackHMR = !1;
			}, 0), originWebpackHotUpdate.apply(void 0, arguments);
		};
	}
}
function useGlobalCache(t, n, r, i, a) {
	var o = React$1.useContext(StyleContext_default).cache, s = pathKey([t].concat(_toConsumableArray(n))), c = useEffectCleanupRegister_default([s]), l = useHMR_default(), u = function(e) {
		o.opUpdate(s, function(t) {
			var n = _slicedToArray(t || [void 0, void 0], 2), a = n[0], o = a === void 0 ? 0 : a, s = n[1], c = s;
			process.env.NODE_ENV !== "production" && s && l && (i?.(c, l), c = null);
			var u = [o, c || r()];
			return e ? e(u) : u;
		});
	};
	React$1.useMemo(function() {
		u();
	}, [s]);
	var d = o.opGet(s);
	process.env.NODE_ENV !== "production" && !d && (u(), d = o.opGet(s));
	var f = d[1];
	return useCompatibleInsertionEffect_default(function() {
		a?.(f);
	}, function(e) {
		return u(function(t) {
			var n = _slicedToArray(t, 2), r = n[0], i = n[1];
			return e && r === 0 && a?.(f), [r + 1, i];
		}), function() {
			o.opUpdate(s, function(t) {
				var n = _slicedToArray(t || [], 2), r = n[0], a = r === void 0 ? 0 : r, l = n[1];
				return a - 1 == 0 ? (c(function() {
					(e || !o.opGet(s)) && i?.(l, !1);
				}), null) : [a - 1, l];
			});
		};
	}, [s]), f;
}
var EMPTY_OVERRIDE = {}, hashPrefix = process.env.NODE_ENV === "production" ? "css" : "css-dev-only-do-not-override", tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(e) {
	tokenKeys.set(e, (tokenKeys.get(e) || 0) + 1);
}
function removeStyleTags(e, t) {
	typeof document < "u" && document.querySelectorAll(`style[${ATTR_TOKEN}="${e}"]`).forEach(function(e) {
		if (e.__cssinjs_instance__ === t) {
			var n;
			(n = e.parentNode) == null || n.removeChild(e);
		}
	});
}
var TOKEN_THRESHOLD = 0;
function cleanTokenStyle(e, t) {
	tokenKeys.set(e, (tokenKeys.get(e) || 0) - 1);
	var n = /* @__PURE__ */ new Set();
	tokenKeys.forEach(function(e, t) {
		e <= 0 && n.add(t);
	}), tokenKeys.size - n.size > TOKEN_THRESHOLD && n.forEach(function(e) {
		removeStyleTags(e, t), tokenKeys.delete(e);
	});
}
var getComputedToken$1 = function(e, t, n, r) {
	var i = _objectSpread2(_objectSpread2({}, n.getDerivativeToken(e)), t);
	return r && (i = r(i)), i;
}, TOKEN_PREFIX = "token";
function useCacheToken(e, t) {
	var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = useContext(StyleContext_default), i = r.cache.instanceId, a = r.container, s = n.salt, c = s === void 0 ? "" : s, l = n.override, u = l === void 0 ? EMPTY_OVERRIDE : l, d = n.formatToken, f = n.getComputedToken, p = n.cssVar, m = memoResult(function() {
		return Object.assign.apply(Object, [{}].concat(_toConsumableArray(t)));
	}, t), h = flattenToken(m), g = flattenToken(u), _ = p ? flattenToken(p) : "";
	return useGlobalCache(TOKEN_PREFIX, [
		c,
		e.id,
		h,
		g,
		_
	], function() {
		var t = f ? f(m, u, e) : getComputedToken$1(m, u, e, d), n = _objectSpread2({}, t), r = "";
		if (p) {
			var i = _slicedToArray(transformToken(t, p.key, {
				prefix: p.prefix,
				ignore: p.ignore,
				unitless: p.unitless,
				preserve: p.preserve
			}), 2);
			t = i[0], r = i[1];
		}
		var a = token2key(t, c);
		t._tokenKey = a, n._tokenKey = token2key(n, c);
		var o = p?.key ?? a;
		t._themeKey = o, recordCleanToken(o);
		var s = `${hashPrefix}-${hash_browser_esm_default(a)}`;
		return t._hashId = s, [
			t,
			s,
			n,
			r,
			p?.key || ""
		];
	}, function(e) {
		cleanTokenStyle(e[0]._themeKey, i);
	}, function(e) {
		var t = _slicedToArray(e, 4), n = t[0], r = t[3];
		if (p && r) {
			var o = updateCSS(r, hash_browser_esm_default(`css-variables-${n._themeKey}`), {
				mark: ATTR_MARK,
				prepend: "queue",
				attachTo: a,
				priority: -999
			});
			o[CSS_IN_JS_INSTANCE] = i, o.setAttribute(ATTR_TOKEN, n._themeKey);
		}
	});
}
var extract$2 = function(e, t, n) {
	var r = _slicedToArray(e, 5), i = r[2], a = r[3], o = r[4], s = (n || {}).plain;
	if (!a) return null;
	var c = i._tokenKey, l = -999;
	return [
		l,
		c,
		toStyleStr(a, o, c, {
			"data-rc-order": "prependQueue",
			"data-rc-priority": `${l}`
		}, s)
	];
}, unitless_browser_esm_default = {
	animationIterationCount: 1,
	borderImageOutset: 1,
	borderImageSlice: 1,
	borderImageWidth: 1,
	boxFlex: 1,
	boxFlexGroup: 1,
	boxOrdinalGroup: 1,
	columnCount: 1,
	columns: 1,
	flex: 1,
	flexGrow: 1,
	flexPositive: 1,
	flexShrink: 1,
	flexNegative: 1,
	flexOrder: 1,
	gridRow: 1,
	gridRowEnd: 1,
	gridRowSpan: 1,
	gridRowStart: 1,
	gridColumn: 1,
	gridColumnEnd: 1,
	gridColumnSpan: 1,
	gridColumnStart: 1,
	msGridRow: 1,
	msGridRowSpan: 1,
	msGridColumn: 1,
	msGridColumnSpan: 1,
	fontWeight: 1,
	lineHeight: 1,
	opacity: 1,
	order: 1,
	orphans: 1,
	tabSize: 1,
	widows: 1,
	zIndex: 1,
	zoom: 1,
	WebkitLineClamp: 1,
	fillOpacity: 1,
	floodOpacity: 1,
	stopOpacity: 1,
	strokeDasharray: 1,
	strokeDashoffset: 1,
	strokeMiterlimit: 1,
	strokeOpacity: 1,
	strokeWidth: 1
}, COMMENT = "comm", RULESET = "rule", DECLARATION = "decl", IMPORT = "@import", NAMESPACE = "@namespace", KEYFRAMES = "@keyframes", LAYER = "@layer", abs = Math.abs, from = String.fromCharCode;
function trim(e) {
	return e.trim();
}
function replace(e, t, n) {
	return e.replace(t, n);
}
function indexof(e, t, n) {
	return e.indexOf(t, n);
}
function charat(e, t) {
	return e.charCodeAt(t) | 0;
}
function substr(e, t, n) {
	return e.slice(t, n);
}
function strlen(e) {
	return e.length;
}
function sizeof(e) {
	return e.length;
}
function append(e, t) {
	return t.push(e), e;
}
var line = 1, column = 1, length = 0, position = 0, character = 0, characters = "";
function node(e, t, n, r, i, a, o, s) {
	return {
		value: e,
		root: t,
		parent: n,
		type: r,
		props: i,
		children: a,
		line,
		column,
		length: o,
		return: "",
		siblings: s
	};
}
function char() {
	return character;
}
function prev() {
	return character = position > 0 ? charat(characters, --position) : 0, column--, character === 10 && (column = 1, line--), character;
}
function next() {
	return character = position < length ? charat(characters, position++) : 0, column++, character === 10 && (column = 1, line++), character;
}
function peek() {
	return charat(characters, position);
}
function caret() {
	return position;
}
function slice(e, t) {
	return substr(characters, e, t);
}
function token(e) {
	switch (e) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
function alloc(e) {
	return line = column = 1, length = strlen(characters = e), position = 0, [];
}
function dealloc(e) {
	return characters = "", e;
}
function delimit(e) {
	return trim(slice(position - 1, delimiter(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function whitespace(e) {
	for (; (character = peek()) && character < 33;) next();
	return token(e) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(e, t) {
	for (; --t && next() && !(character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97););
	return slice(e, caret() + (t < 6 && peek() == 32 && next() == 32));
}
function delimiter(e) {
	for (; next();) switch (character) {
		case e: return position;
		case 34:
		case 39:
			e !== 34 && e !== 39 && delimiter(character);
			break;
		case 40:
			e === 41 && delimiter(e);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
function commenter(e, t) {
	for (; next() && e + character !== 57 && !(e + character === 84 && peek() === 47););
	return "/*" + slice(t, position - 1) + "*" + from(e === 47 ? e : next());
}
function identifier(e) {
	for (; !token(peek());) next();
	return slice(e, position);
}
function compile(e) {
	return dealloc(parse("", null, null, null, [""], e = alloc(e), 0, [0], e));
}
function parse(e, t, n, r, i, a, o, s, c) {
	for (var l = 0, u = 0, d = o, f = 0, p = 0, m = 0, h = 1, g = 1, _ = 1, v = 0, y = "", b = i, x = a, S = r, C = y; g;) switch (m = v, v = next()) {
		case 40: if (m != 108 && charat(C, d - 1) == 58) {
			indexof(C += replace(delimit(v), "&", "&\f"), "&\f", abs(l ? s[l - 1] : 0)) != -1 && (_ = -1);
			break;
		}
		case 34:
		case 39:
		case 91:
			C += delimit(v);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			C += whitespace(m);
			break;
		case 92:
			C += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), t, n, c), c), (token(m || 1) == 5 || token(peek() || 1) == 5) && strlen(C) && substr(C, -1, void 0) !== " " && (C += " ");
					break;
				default: C += "/";
			}
			break;
		case 123 * h: s[l++] = strlen(C) * _;
		case 125 * h:
		case 59:
		case 0:
			switch (v) {
				case 0:
				case 125: g = 0;
				case 59 + u:
					_ == -1 && (C = replace(C, /\f/g, "")), p > 0 && (strlen(C) - d || h === 0 && m === 47) && append(p > 32 ? declaration(C + ";", r, n, d - 1, c) : declaration(replace(C, " ", "") + ";", r, n, d - 2, c), c);
					break;
				case 59: C += ";";
				default: if (append(S = ruleset(C, t, n, l, u, i, s, y, b = [], x = [], d, a), a), v === 123) if (u === 0) parse(C, t, S, S, b, a, d, s, x);
				else {
					switch (f) {
						case 99: if (charat(C, 3) === 110) break;
						case 108: if (charat(C, 2) === 97) break;
						default: u = 0;
						case 100:
						case 109:
						case 115:
					}
					u ? parse(e, S, S, r && append(ruleset(e, S, S, 0, 0, i, s, y, i, b = [], d, x), x), i, x, d, s, r ? b : x) : parse(C, S, S, S, [""], x, 0, s, x);
				}
			}
			l = u = p = 0, h = _ = 1, y = C = "", d = o;
			break;
		case 58: d = 1 + strlen(C), p = m;
		default:
			if (h < 1) {
				if (v == 123) --h;
				else if (v == 125 && h++ == 0 && prev() == 125) continue;
			}
			switch (C += from(v), v * h) {
				case 38:
					_ = u > 0 ? 1 : (C += "\f", -1);
					break;
				case 44:
					s[l++] = (strlen(C) - 1) * _, _ = 1;
					break;
				case 64:
					peek() === 45 && (C += delimit(next())), f = peek(), u = d = strlen(y = C += identifier(caret())), v++;
					break;
				case 45: m === 45 && strlen(C) == 2 && (h = 0);
			}
	}
	return a;
}
function ruleset(e, t, n, r, i, a, o, s, c, l, u, d) {
	for (var f = i - 1, p = i === 0 ? a : [""], m = sizeof(p), h = 0, g = 0, _ = 0; h < r; ++h) for (var v = 0, y = substr(e, f + 1, f = abs(g = o[h])), b = e; v < m; ++v) (b = trim(g > 0 ? p[v] + " " + y : replace(y, /&\f/g, p[v]))) && (c[_++] = b);
	return node(e, t, n, i === 0 ? RULESET : s, c, l, u, d);
}
function comment(e, t, n, r) {
	return node(e, t, n, COMMENT, from(char()), substr(e, 2, -2), 0, r);
}
function declaration(e, t, n, r, i) {
	return node(e, t, n, DECLARATION, substr(e, 0, r), substr(e, r + 1, -1), r, i);
}
function serialize(e, t) {
	for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
	return n;
}
function stringify(e, t, n, r) {
	switch (e.type) {
		case LAYER: if (e.children.length) break;
		case IMPORT:
		case NAMESPACE:
		case DECLARATION: return e.return = e.return || e.value;
		case COMMENT: return "";
		case KEYFRAMES: return e.return = e.value + "{" + serialize(e.children, r) + "}";
		case RULESET: if (!strlen(e.value = e.props.join(","))) return "";
	}
	return strlen(n = serialize(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function lintWarning(e, t) {
	var n = t.path, r = t.parentSelectors;
	warning_default$1(!1, `[Ant Design CSS-in-JS] ${n ? `Error in ${n}: ` : ""}${e}${r.length ? ` Selector: ${r.join(" | ")}` : ""}`);
}
var contentQuotesLinter_default = function(e, t, n) {
	e === "content" && (typeof t != "string" || [
		"normal",
		"none",
		"initial",
		"inherit",
		"unset"
	].indexOf(t) === -1 && !/(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== "\"" && t.charAt(0) !== "'")) && lintWarning(`You seem to be using a value for 'content' without quotes, try replacing it with \`content: '"${t}"'\`.`, n);
}, hashedAnimationLinter_default = function(e, t, n) {
	e === "animation" && n.hashId && t !== "none" && lintWarning(`You seem to be using hashed animation '${t}', in which case 'animationName' with Keyframe as value is recommended.`, n);
}, ATTR_CACHE_MAP = "data-ant-cssinjs-cache-path", CSS_FILE_STYLE = "_FILE_STYLE__", cachePathMap, fromCSSFile = !0;
function prepare() {
	if (!cachePathMap && (cachePathMap = {}, canUseDom())) {
		var e = document.createElement("div");
		e.className = ATTR_CACHE_MAP, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
		var t = getComputedStyle(e).content || "";
		t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(e) {
			var t = _slicedToArray(e.split(":"), 2), n = t[0], r = t[1];
			cachePathMap[n] = r;
		});
		var n = document.querySelector(`style[${ATTR_CACHE_MAP}]`);
		if (n) {
			var r;
			fromCSSFile = !1, (r = n.parentNode) == null || r.removeChild(n);
		}
		document.body.removeChild(e);
	}
}
function existPath(e) {
	return prepare(), !!cachePathMap[e];
}
function getStyleAndHash(e) {
	var t = cachePathMap[e], n = null;
	if (t && canUseDom()) if (fromCSSFile) n = CSS_FILE_STYLE;
	else {
		var r = document.querySelector(`style[${ATTR_MARK}="${cachePathMap[e]}"]`);
		r ? n = r.innerHTML : delete cachePathMap[e];
	}
	return [n, t];
}
var SKIP_CHECK = "_skip_check_", MULTI_VALUE = "_multi_value_";
function normalizeStyle(e) {
	return serialize(compile(e), stringify).replace(/\{%%%\:[^;];}/g, ";");
}
function isCompoundCSSProperty(e) {
	return _typeof(e) === "object" && e && (SKIP_CHECK in e || MULTI_VALUE in e);
}
function injectSelectorHash(e, t, n) {
	if (!t) return e;
	var r = `.${t}`, i = n === "low" ? `:where(${r})` : r;
	return e.split(",").map(function(e) {
		var t = e.trim().split(/\s+/), n = t[0] || "", r = n.match(/^\w+/)?.[0] || "";
		return n = `${r}${i}${n.slice(r.length)}`, [n].concat(_toConsumableArray(t.slice(1))).join(" ");
	}).join(",");
}
var parseStyle = function e(t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
		root: !0,
		parentSelectors: []
	}, i = r.root, a = r.injectHash, o = r.parentSelectors, s = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, p = n.linters, m = p === void 0 ? [] : p, h = "", g = {};
	function _(t) {
		var r = t.getName(s);
		if (!g[r]) {
			var i = _slicedToArray(e(t.style, n, {
				root: !1,
				parentSelectors: o
			}), 1)[0];
			g[r] = `@keyframes ${t.getName(s)}${i}`;
		}
	}
	function v(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
		return e.forEach(function(e) {
			Array.isArray(e) ? v(e, t) : e && t.push(e);
		}), t;
	}
	return v(Array.isArray(t) ? t : [t]).forEach(function(t) {
		var r = typeof t == "string" && !i ? {} : t;
		if (typeof r == "string") h += `${r}
`;
		else if (r._keyframe) _(r);
		else {
			var c = f.reduce(function(e, t) {
				var n;
				return (t == null || (n = t.visit) == null ? void 0 : n.call(t, e)) || e;
			}, r);
			Object.keys(c).forEach(function(t) {
				var r = c[t];
				if (_typeof(r) === "object" && r && (t !== "animationName" || !r._keyframe) && !isCompoundCSSProperty(r)) {
					var d = !1, f = t.trim(), p = !1;
					(i || a) && s ? f.startsWith("@") ? d = !0 : f = injectSelectorHash(f === "&" ? "" : t, s, u) : i && !s && (f === "&" || f === "") && (f = "", p = !0);
					var v = _slicedToArray(e(r, n, {
						root: p,
						injectHash: d,
						parentSelectors: [].concat(_toConsumableArray(o), [f])
					}), 2), y = v[0], b = v[1];
					g = _objectSpread2(_objectSpread2({}, g), b), h += `${f}${y}`;
				} else {
					function e(e, t) {
						process.env.NODE_ENV !== "production" && (_typeof(r) !== "object" || !(r != null && r[SKIP_CHECK])) && [contentQuotesLinter_default, hashedAnimationLinter_default].concat(_toConsumableArray(m)).forEach(function(n) {
							return n(e, t, {
								path: l,
								hashId: s,
								parentSelectors: o
							});
						});
						var n = e.replace(/[A-Z]/g, function(e) {
							return `-${e.toLowerCase()}`;
						}), i = t;
						!unitless_browser_esm_default[e] && typeof i == "number" && i !== 0 && (i = `${i}px`), e === "animationName" && t != null && t._keyframe && (_(t), i = t.getName(s)), h += `${n}:${i};`;
					}
					var x = r?.value ?? r;
					_typeof(r) === "object" && r != null && r[MULTI_VALUE] && Array.isArray(x) ? x.forEach(function(n) {
						e(t, n);
					}) : e(t, x);
				}
			});
		}
	}), i ? c && (h &&= `@layer ${c.name} {${h}}`, c.dependencies && (g[`@layer ${c.name}`] = c.dependencies.map(function(e) {
		return `@layer ${e}, ${c.name};`;
	}).join("\n"))) : h = `{${h}}`, [h, g];
};
function uniqueHash(e, t) {
	return hash_browser_esm_default(`${e.join("%")}${t}`);
}
function Empty() {
	return null;
}
var STYLE_PREFIX = "style";
function useStyleRegister(t, n) {
	var r = t.token, i = t.path, a = t.hashId, o = t.layer, s = t.nonce, c = t.clientOnly, l = t.order, u = l === void 0 ? 0 : l, d = React$1.useContext(StyleContext_default), f = d.autoClear, p = d.mock, m = d.defaultCache, h = d.hashPriority, g = d.container, _ = d.ssrInline, v = d.transformers, y = d.linters, b = d.cache, x = d.layer, S = r._tokenKey, C = [S];
	x && C.push("layer"), C.push.apply(C, _toConsumableArray(i));
	var w = isClientSide;
	process.env.NODE_ENV !== "production" && p !== void 0 && (w = p === "client");
	var T = _slicedToArray(useGlobalCache(STYLE_PREFIX, C, function() {
		var e = C.join("|");
		if (existPath(e)) {
			var t = _slicedToArray(getStyleAndHash(e), 2), r = t[0], s = t[1];
			if (r) return [
				r,
				S,
				s,
				{},
				c,
				u
			];
		}
		var l = _slicedToArray(parseStyle(n(), {
			hashId: a,
			hashPriority: h,
			layer: x ? o : void 0,
			path: i.join("-"),
			transformers: v,
			linters: y
		}), 2), d = l[0], f = l[1], p = normalizeStyle(d);
		return [
			p,
			S,
			uniqueHash(C, p),
			f,
			c,
			u
		];
	}, function(e, t) {
		var n = _slicedToArray(e, 3)[2];
		(t || f) && isClientSide && removeCSS(n, {
			mark: ATTR_MARK,
			attachTo: g
		});
	}, function(e) {
		var t = _slicedToArray(e, 4), n = t[0];
		t[1];
		var r = t[2], i = t[3];
		if (w && n !== "_FILE_STYLE__") {
			var a = {
				mark: ATTR_MARK,
				prepend: x ? !1 : "queue",
				attachTo: g,
				priority: u
			}, o = typeof s == "function" ? s() : s;
			o && (a.csp = { nonce: o });
			var c = [], l = [];
			Object.keys(i).forEach(function(e) {
				e.startsWith("@layer") ? c.push(e) : l.push(e);
			}), c.forEach(function(e) {
				updateCSS(normalizeStyle(i[e]), `_layer-${e}`, _objectSpread2(_objectSpread2({}, a), {}, { prepend: !0 }));
			});
			var d = updateCSS(n, r, a);
			d[CSS_IN_JS_INSTANCE] = b.instanceId, d.setAttribute(ATTR_TOKEN, S), process.env.NODE_ENV !== "production" && d.setAttribute(ATTR_CACHE_PATH, C.join("|")), l.forEach(function(e) {
				updateCSS(normalizeStyle(i[e]), `_effect-${e}`, a);
			});
		}
	}), 3), D = T[0], O = T[1], k = T[2];
	return function(t) {
		var n = !_ || w || !m ? /* @__PURE__ */ React$1.createElement(Empty, null) : /* @__PURE__ */ React$1.createElement("style", _extends({}, _defineProperty(_defineProperty({}, ATTR_TOKEN, O), ATTR_MARK, k), { dangerouslySetInnerHTML: { __html: D } }));
		return /* @__PURE__ */ React$1.createElement(React$1.Fragment, null, n, t);
	};
}
var extract$1 = function(e, t, n) {
	var r = _slicedToArray(e, 6), i = r[0], a = r[1], o = r[2], s = r[3], c = r[4], l = r[5], u = (n || {}).plain;
	if (c) return null;
	var d = i, f = {
		"data-rc-order": "prependQueue",
		"data-rc-priority": `${l}`
	};
	return d = toStyleStr(i, a, o, f, u), s && Object.keys(s).forEach(function(e) {
		if (!t[e]) {
			t[e] = !0;
			var n = toStyleStr(normalizeStyle(s[e]), a, `_effect-${e}`, f, u);
			e.startsWith("@layer") ? d = n + d : d += n;
		}
	}), [
		l,
		o,
		d
	];
}, CSS_VAR_PREFIX = "cssVar", useCSSVarRegister = function(e, t) {
	var n = e.key, r = e.prefix, i = e.unitless, a = e.ignore, s = e.token, c = e.scope, l = c === void 0 ? "" : c, u = useContext(StyleContext_default), d = u.cache.instanceId, f = u.container, p = s._tokenKey, m = [].concat(_toConsumableArray(e.path), [
		n,
		l,
		p
	]);
	return useGlobalCache(CSS_VAR_PREFIX, m, function() {
		var e = _slicedToArray(transformToken(t(), n, {
			prefix: r,
			unitless: i,
			ignore: a,
			scope: l
		}), 2), o = e[0], s = e[1];
		return [
			o,
			s,
			uniqueHash(m, s),
			n
		];
	}, function(e) {
		var t = _slicedToArray(e, 3)[2];
		isClientSide && removeCSS(t, {
			mark: ATTR_MARK,
			attachTo: f
		});
	}, function(e) {
		var t = _slicedToArray(e, 3), r = t[1], i = t[2];
		if (r) {
			var a = updateCSS(r, i, {
				mark: ATTR_MARK,
				prepend: "queue",
				attachTo: f,
				priority: -999
			});
			a[CSS_IN_JS_INSTANCE] = d, a.setAttribute(ATTR_TOKEN, n);
		}
	});
}, extract = function(e, t, n) {
	var r = _slicedToArray(e, 4), i = r[1], a = r[2], o = r[3], s = (n || {}).plain;
	if (!i) return null;
	var c = -999;
	return [
		c,
		a,
		toStyleStr(i, o, a, {
			"data-rc-order": "prependQueue",
			"data-rc-priority": `${c}`
		}, s)
	];
}, useCSSVarRegister_default = useCSSVarRegister;
_defineProperty(_defineProperty(_defineProperty({}, STYLE_PREFIX, extract$1), TOKEN_PREFIX, extract$2), CSS_VAR_PREFIX, extract);
function noSplit(e) {
	return e.notSplit = !0, e;
}
noSplit(["borderTop", "borderBottom"]), noSplit(["borderTop"]), noSplit(["borderBottom"]), noSplit(["borderLeft", "borderRight"]), noSplit(["borderLeft"]), noSplit(["borderRight"]);
var Context_default = /* @__PURE__ */ createContext({});
function noop$1() {}
var deprecatedWarnList = null;
function resetWarned() {
	deprecatedWarnList = null, resetWarned$1();
}
var _warning = noop$1;
process.env.NODE_ENV !== "production" && (_warning = (e, t, n) => {
	warning_default$1(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && resetWarned();
});
var warning$1 = _warning;
const WarningContext = /* @__PURE__ */ React$1.createContext({}), devUseWarning = process.env.NODE_ENV === "production" ? () => {
	let e = () => {};
	return e.deprecated = noop$1, e;
} : (t) => {
	let { strict: n } = React$1.useContext(WarningContext), r = (e, r, i) => {
		if (!e) if (n === !1 && r === "deprecated") {
			let e = deprecatedWarnList;
			deprecatedWarnList ||= {}, deprecatedWarnList[t] = deprecatedWarnList[t] || [], deprecatedWarnList[t].includes(i || "") || deprecatedWarnList[t].push(i || ""), e || console.warn("[antd] There exists deprecated usage in your code:", deprecatedWarnList);
		} else process.env.NODE_ENV !== "production" && warning$1(e, t, i);
	};
	return r.deprecated = (e, t, n, i) => {
		r(e, "deprecated", `\`${t}\` is deprecated. Please use \`${n}\` instead.${i ? ` ${i}` : ""}`);
	}, r;
};
var warning_default = warning$1;
const defaultPresetColors = {
	blue: "#1677FF",
	purple: "#722ED1",
	cyan: "#13C2C2",
	green: "#52C41A",
	magenta: "#EB2F96",
	pink: "#EB2F96",
	red: "#F5222D",
	orange: "#FA8C16",
	yellow: "#FADB14",
	volcano: "#FA541C",
	geekblue: "#2F54EB",
	gold: "#FAAD14",
	lime: "#A0D911"
};
var seed_default = Object.assign(Object.assign({}, defaultPresetColors), {
	colorPrimary: "#1677ff",
	colorSuccess: "#52c41a",
	colorWarning: "#faad14",
	colorError: "#ff4d4f",
	colorInfo: "#1677ff",
	colorLink: "",
	colorTextBase: "",
	colorBgBase: "",
	fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
	fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
	fontSize: 14,
	lineWidth: 1,
	lineType: "solid",
	motionUnit: .1,
	motionBase: 0,
	motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
	motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
	motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
	motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
	motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
	motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
	motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
	motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
	borderRadius: 6,
	sizeUnit: 4,
	sizeStep: 4,
	sizePopupArrow: 16,
	controlHeight: 32,
	zIndexBase: 0,
	zIndexPopupBase: 1e3,
	opacityImage: 1,
	wireframe: !1,
	motion: !0
}), round = Math.round;
function splitColorStr(e, t) {
	let n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((e) => parseFloat(e));
	for (let e = 0; e < 3; e += 1) r[e] = t(r[e] || 0, n[e] || "", e);
	return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
var parseHSVorHSL = (e, t, n) => n === 0 ? e : e / 100;
function limitRange(e, t) {
	let n = t || 255;
	return e > n ? n : e < 0 ? 0 : e;
}
var FastColor = class e {
	constructor(t) {
		_defineProperty(this, "isValid", !0), _defineProperty(this, "r", 0), _defineProperty(this, "g", 0), _defineProperty(this, "b", 0), _defineProperty(this, "a", 1), _defineProperty(this, "_h", void 0), _defineProperty(this, "_s", void 0), _defineProperty(this, "_l", void 0), _defineProperty(this, "_v", void 0), _defineProperty(this, "_max", void 0), _defineProperty(this, "_min", void 0), _defineProperty(this, "_brightness", void 0);
		function n(e) {
			return e[0] in t && e[1] in t && e[2] in t;
		}
		if (t) if (typeof t == "string") {
			let e = t.trim();
			function n(t) {
				return e.startsWith(t);
			}
			/^#?[A-F\d]{3,8}$/i.test(e) ? this.fromHexString(e) : n("rgb") ? this.fromRgbString(e) : n("hsl") ? this.fromHslString(e) : (n("hsv") || n("hsb")) && this.fromHsvString(e);
		} else if (t instanceof e) this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
		else if (n("rgb")) this.r = limitRange(t.r), this.g = limitRange(t.g), this.b = limitRange(t.b), this.a = typeof t.a == "number" ? limitRange(t.a, 1) : 1;
		else if (n("hsl")) this.fromHsl(t);
		else if (n("hsv")) this.fromHsv(t);
		else throw Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
	}
	setR(e) {
		return this._sc("r", e);
	}
	setG(e) {
		return this._sc("g", e);
	}
	setB(e) {
		return this._sc("b", e);
	}
	setA(e) {
		return this._sc("a", e, 1);
	}
	setHue(e) {
		let t = this.toHsv();
		return t.h = e, this._c(t);
	}
	getLuminance() {
		function e(e) {
			let t = e / 255;
			return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
		}
		let t = e(this.r), n = e(this.g), r = e(this.b);
		return .2126 * t + .7152 * n + .0722 * r;
	}
	getHue() {
		if (this._h === void 0) {
			let e = this.getMax() - this.getMin();
			e === 0 ? this._h = 0 : this._h = round(60 * (this.r === this.getMax() ? (this.g - this.b) / e + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / e + 2 : (this.r - this.g) / e + 4));
		}
		return this._h;
	}
	getSaturation() {
		if (this._s === void 0) {
			let e = this.getMax() - this.getMin();
			e === 0 ? this._s = 0 : this._s = e / this.getMax();
		}
		return this._s;
	}
	getLightness() {
		return this._l === void 0 && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
	}
	getValue() {
		return this._v === void 0 && (this._v = this.getMax() / 255), this._v;
	}
	getBrightness() {
		return this._brightness === void 0 && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
	}
	darken(e = 10) {
		let t = this.getHue(), n = this.getSaturation(), r = this.getLightness() - e / 100;
		return r < 0 && (r = 0), this._c({
			h: t,
			s: n,
			l: r,
			a: this.a
		});
	}
	lighten(e = 10) {
		let t = this.getHue(), n = this.getSaturation(), r = this.getLightness() + e / 100;
		return r > 1 && (r = 1), this._c({
			h: t,
			s: n,
			l: r,
			a: this.a
		});
	}
	mix(e, t = 50) {
		let n = this._c(e), r = t / 100, i = (e) => (n[e] - this[e]) * r + this[e], a = {
			r: round(i("r")),
			g: round(i("g")),
			b: round(i("b")),
			a: round(i("a") * 100) / 100
		};
		return this._c(a);
	}
	tint(e = 10) {
		return this.mix({
			r: 255,
			g: 255,
			b: 255,
			a: 1
		}, e);
	}
	shade(e = 10) {
		return this.mix({
			r: 0,
			g: 0,
			b: 0,
			a: 1
		}, e);
	}
	onBackground(e) {
		let t = this._c(e), n = this.a + t.a * (1 - this.a), r = (e) => round((this[e] * this.a + t[e] * t.a * (1 - this.a)) / n);
		return this._c({
			r: r("r"),
			g: r("g"),
			b: r("b"),
			a: n
		});
	}
	isDark() {
		return this.getBrightness() < 128;
	}
	isLight() {
		return this.getBrightness() >= 128;
	}
	equals(e) {
		return this.r === e.r && this.g === e.g && this.b === e.b && this.a === e.a;
	}
	clone() {
		return this._c(this);
	}
	toHexString() {
		let e = "#", t = (this.r || 0).toString(16);
		e += t.length === 2 ? t : "0" + t;
		let n = (this.g || 0).toString(16);
		e += n.length === 2 ? n : "0" + n;
		let r = (this.b || 0).toString(16);
		if (e += r.length === 2 ? r : "0" + r, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
			let t = round(this.a * 255).toString(16);
			e += t.length === 2 ? t : "0" + t;
		}
		return e;
	}
	toHsl() {
		return {
			h: this.getHue(),
			s: this.getSaturation(),
			l: this.getLightness(),
			a: this.a
		};
	}
	toHslString() {
		let e = this.getHue(), t = round(this.getSaturation() * 100), n = round(this.getLightness() * 100);
		return this.a === 1 ? `hsl(${e},${t}%,${n}%)` : `hsla(${e},${t}%,${n}%,${this.a})`;
	}
	toHsv() {
		return {
			h: this.getHue(),
			s: this.getSaturation(),
			v: this.getValue(),
			a: this.a
		};
	}
	toRgb() {
		return {
			r: this.r,
			g: this.g,
			b: this.b,
			a: this.a
		};
	}
	toRgbString() {
		return this.a === 1 ? `rgb(${this.r},${this.g},${this.b})` : `rgba(${this.r},${this.g},${this.b},${this.a})`;
	}
	toString() {
		return this.toRgbString();
	}
	_sc(e, t, n) {
		let r = this.clone();
		return r[e] = limitRange(t, n), r;
	}
	_c(e) {
		return new this.constructor(e);
	}
	getMax() {
		return this._max === void 0 && (this._max = Math.max(this.r, this.g, this.b)), this._max;
	}
	getMin() {
		return this._min === void 0 && (this._min = Math.min(this.r, this.g, this.b)), this._min;
	}
	fromHexString(e) {
		let t = e.replace("#", "");
		function n(e, n) {
			return parseInt(t[e] + t[n || e], 16);
		}
		t.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = t[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = t[6] ? n(6, 7) / 255 : 1);
	}
	fromHsl({ h: e, s: t, l: n, a: r }) {
		if (this._h = e % 360, this._s = t, this._l = n, this.a = typeof r == "number" ? r : 1, t <= 0) {
			let e = round(n * 255);
			this.r = e, this.g = e, this.b = e;
		}
		let i = 0, a = 0, o = 0, s = e / 60, c = (1 - Math.abs(2 * n - 1)) * t, l = c * (1 - Math.abs(s % 2 - 1));
		s >= 0 && s < 1 ? (i = c, a = l) : s >= 1 && s < 2 ? (i = l, a = c) : s >= 2 && s < 3 ? (a = c, o = l) : s >= 3 && s < 4 ? (a = l, o = c) : s >= 4 && s < 5 ? (i = l, o = c) : s >= 5 && s < 6 && (i = c, o = l);
		let u = n - c / 2;
		this.r = round((i + u) * 255), this.g = round((a + u) * 255), this.b = round((o + u) * 255);
	}
	fromHsv({ h: e, s: t, v: n, a: r }) {
		this._h = e % 360, this._s = t, this._v = n, this.a = typeof r == "number" ? r : 1;
		let i = round(n * 255);
		if (this.r = i, this.g = i, this.b = i, t <= 0) return;
		let a = e / 60, o = Math.floor(a), s = a - o, c = round(n * (1 - t) * 255), l = round(n * (1 - t * s) * 255), u = round(n * (1 - t * (1 - s)) * 255);
		switch (o) {
			case 0:
				this.g = u, this.b = c;
				break;
			case 1:
				this.r = l, this.b = c;
				break;
			case 2:
				this.r = c, this.b = u;
				break;
			case 3:
				this.r = c, this.g = l;
				break;
			case 4:
				this.r = u, this.g = c;
				break;
			default:
				this.g = c, this.b = l;
				break;
		}
	}
	fromHsvString(e) {
		let t = splitColorStr(e, parseHSVorHSL);
		this.fromHsv({
			h: t[0],
			s: t[1],
			v: t[2],
			a: t[3]
		});
	}
	fromHslString(e) {
		let t = splitColorStr(e, parseHSVorHSL);
		this.fromHsl({
			h: t[0],
			s: t[1],
			l: t[2],
			a: t[3]
		});
	}
	fromRgbString(e) {
		let t = splitColorStr(e, (e, t) => t.includes("%") ? round(e / 100 * 255) : e);
		this.r = t[0], this.g = t[1], this.b = t[2], this.a = t[3];
	}
}, hueStep = 2, saturationStep = .16, saturationStep2 = .05, brightnessStep1 = .05, brightnessStep2 = .15, lightColorCount = 5, darkColorCount = 4, darkColorMap = [
	{
		index: 7,
		amount: 15
	},
	{
		index: 6,
		amount: 25
	},
	{
		index: 5,
		amount: 30
	},
	{
		index: 5,
		amount: 45
	},
	{
		index: 5,
		amount: 65
	},
	{
		index: 5,
		amount: 85
	},
	{
		index: 4,
		amount: 90
	},
	{
		index: 3,
		amount: 95
	},
	{
		index: 2,
		amount: 97
	},
	{
		index: 1,
		amount: 98
	}
];
function getHue(e, t, n) {
	var r = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n ? Math.round(e.h) - hueStep * t : Math.round(e.h) + hueStep * t : n ? Math.round(e.h) + hueStep * t : Math.round(e.h) - hueStep * t;
	return r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function getSaturation(e, t, n) {
	if (e.h === 0 && e.s === 0) return e.s;
	var r = n ? e.s - saturationStep * t : t === darkColorCount ? e.s + saturationStep : e.s + saturationStep2 * t;
	return r > 1 && (r = 1), n && t === lightColorCount && r > .1 && (r = .1), r < .06 && (r = .06), Math.round(r * 100) / 100;
}
function getValue(e, t, n) {
	var r = n ? e.v + brightnessStep1 * t : e.v - brightnessStep2 * t;
	return r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function generate$1(e) {
	for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new FastColor(e), i = r.toHsv(), a = lightColorCount; a > 0; --a) {
		var o = new FastColor({
			h: getHue(i, a, !0),
			s: getSaturation(i, a, !0),
			v: getValue(i, a, !0)
		});
		n.push(o);
	}
	n.push(r);
	for (var s = 1; s <= darkColorCount; s += 1) {
		var c = new FastColor({
			h: getHue(i, s),
			s: getSaturation(i, s),
			v: getValue(i, s)
		});
		n.push(c);
	}
	return t.theme === "dark" ? darkColorMap.map(function(e) {
		var r = e.index, i = e.amount;
		return new FastColor(t.backgroundColor || "#141414").mix(n[r], i).toHexString();
	}) : n.map(function(e) {
		return e.toHexString();
	});
}
var presetPrimaryColors = {
	red: "#F5222D",
	volcano: "#FA541C",
	orange: "#FA8C16",
	gold: "#FAAD14",
	yellow: "#FADB14",
	lime: "#A0D911",
	green: "#52C41A",
	cyan: "#13C2C2",
	blue: "#1677FF",
	geekblue: "#2F54EB",
	purple: "#722ED1",
	magenta: "#EB2F96",
	grey: "#666666"
}, red = [
	"#fff1f0",
	"#ffccc7",
	"#ffa39e",
	"#ff7875",
	"#ff4d4f",
	"#f5222d",
	"#cf1322",
	"#a8071a",
	"#820014",
	"#5c0011"
];
red.primary = red[5];
var volcano = [
	"#fff2e8",
	"#ffd8bf",
	"#ffbb96",
	"#ff9c6e",
	"#ff7a45",
	"#fa541c",
	"#d4380d",
	"#ad2102",
	"#871400",
	"#610b00"
];
volcano.primary = volcano[5];
var orange = [
	"#fff7e6",
	"#ffe7ba",
	"#ffd591",
	"#ffc069",
	"#ffa940",
	"#fa8c16",
	"#d46b08",
	"#ad4e00",
	"#873800",
	"#612500"
];
orange.primary = orange[5];
var gold = [
	"#fffbe6",
	"#fff1b8",
	"#ffe58f",
	"#ffd666",
	"#ffc53d",
	"#faad14",
	"#d48806",
	"#ad6800",
	"#874d00",
	"#613400"
];
gold.primary = gold[5];
var yellow = [
	"#feffe6",
	"#ffffb8",
	"#fffb8f",
	"#fff566",
	"#ffec3d",
	"#fadb14",
	"#d4b106",
	"#ad8b00",
	"#876800",
	"#614700"
];
yellow.primary = yellow[5];
var lime = [
	"#fcffe6",
	"#f4ffb8",
	"#eaff8f",
	"#d3f261",
	"#bae637",
	"#a0d911",
	"#7cb305",
	"#5b8c00",
	"#3f6600",
	"#254000"
];
lime.primary = lime[5];
var green = [
	"#f6ffed",
	"#d9f7be",
	"#b7eb8f",
	"#95de64",
	"#73d13d",
	"#52c41a",
	"#389e0d",
	"#237804",
	"#135200",
	"#092b00"
];
green.primary = green[5];
var cyan = [
	"#e6fffb",
	"#b5f5ec",
	"#87e8de",
	"#5cdbd3",
	"#36cfc9",
	"#13c2c2",
	"#08979c",
	"#006d75",
	"#00474f",
	"#002329"
];
cyan.primary = cyan[5];
var blue = [
	"#e6f4ff",
	"#bae0ff",
	"#91caff",
	"#69b1ff",
	"#4096ff",
	"#1677ff",
	"#0958d9",
	"#003eb3",
	"#002c8c",
	"#001d66"
];
blue.primary = blue[5];
var geekblue = [
	"#f0f5ff",
	"#d6e4ff",
	"#adc6ff",
	"#85a5ff",
	"#597ef7",
	"#2f54eb",
	"#1d39c4",
	"#10239e",
	"#061178",
	"#030852"
];
geekblue.primary = geekblue[5];
var purple = [
	"#f9f0ff",
	"#efdbff",
	"#d3adf7",
	"#b37feb",
	"#9254de",
	"#722ed1",
	"#531dab",
	"#391085",
	"#22075e",
	"#120338"
];
purple.primary = purple[5];
var magenta = [
	"#fff0f6",
	"#ffd6e7",
	"#ffadd2",
	"#ff85c0",
	"#f759ab",
	"#eb2f96",
	"#c41d7f",
	"#9e1068",
	"#780650",
	"#520339"
];
magenta.primary = magenta[5];
var grey = [
	"#a6a6a6",
	"#999999",
	"#8c8c8c",
	"#808080",
	"#737373",
	"#666666",
	"#404040",
	"#1a1a1a",
	"#000000",
	"#000000"
];
grey.primary = grey[5];
var presetPalettes = {
	red,
	volcano,
	orange,
	gold,
	yellow,
	lime,
	green,
	cyan,
	blue,
	geekblue,
	purple,
	magenta,
	grey
}, redDark = [
	"#2a1215",
	"#431418",
	"#58181c",
	"#791a1f",
	"#a61d24",
	"#d32029",
	"#e84749",
	"#f37370",
	"#f89f9a",
	"#fac8c3"
];
redDark.primary = redDark[5];
var volcanoDark = [
	"#2b1611",
	"#441d12",
	"#592716",
	"#7c3118",
	"#aa3e19",
	"#d84a1b",
	"#e87040",
	"#f3956a",
	"#f8b692",
	"#fad4bc"
];
volcanoDark.primary = volcanoDark[5];
var orangeDark = [
	"#2b1d11",
	"#442a11",
	"#593815",
	"#7c4a15",
	"#aa6215",
	"#d87a16",
	"#e89a3c",
	"#f3b765",
	"#f8cf8d",
	"#fae3b7"
];
orangeDark.primary = orangeDark[5];
var goldDark = [
	"#2b2111",
	"#443111",
	"#594214",
	"#7c5914",
	"#aa7714",
	"#d89614",
	"#e8b339",
	"#f3cc62",
	"#f8df8b",
	"#faedb5"
];
goldDark.primary = goldDark[5];
var yellowDark = [
	"#2b2611",
	"#443b11",
	"#595014",
	"#7c6e14",
	"#aa9514",
	"#d8bd14",
	"#e8d639",
	"#f3ea62",
	"#f8f48b",
	"#fafab5"
];
yellowDark.primary = yellowDark[5];
var limeDark = [
	"#1f2611",
	"#2e3c10",
	"#3e4f13",
	"#536d13",
	"#6f9412",
	"#8bbb11",
	"#a9d134",
	"#c9e75d",
	"#e4f88b",
	"#f0fab5"
];
limeDark.primary = limeDark[5];
var greenDark = [
	"#162312",
	"#1d3712",
	"#274916",
	"#306317",
	"#3c8618",
	"#49aa19",
	"#6abe39",
	"#8fd460",
	"#b2e58b",
	"#d5f2bb"
];
greenDark.primary = greenDark[5];
var cyanDark = [
	"#112123",
	"#113536",
	"#144848",
	"#146262",
	"#138585",
	"#13a8a8",
	"#33bcb7",
	"#58d1c9",
	"#84e2d8",
	"#b2f1e8"
];
cyanDark.primary = cyanDark[5];
var blueDark = [
	"#111a2c",
	"#112545",
	"#15325b",
	"#15417e",
	"#1554ad",
	"#1668dc",
	"#3c89e8",
	"#65a9f3",
	"#8dc5f8",
	"#b7dcfa"
];
blueDark.primary = blueDark[5];
var geekblueDark = [
	"#131629",
	"#161d40",
	"#1c2755",
	"#203175",
	"#263ea0",
	"#2b4acb",
	"#5273e0",
	"#7f9ef3",
	"#a8c1f8",
	"#d2e0fa"
];
geekblueDark.primary = geekblueDark[5];
var purpleDark = [
	"#1a1325",
	"#24163a",
	"#301c4d",
	"#3e2069",
	"#51258f",
	"#642ab5",
	"#854eca",
	"#ab7ae0",
	"#cda8f0",
	"#ebd7fa"
];
purpleDark.primary = purpleDark[5];
var magentaDark = [
	"#291321",
	"#40162f",
	"#551c3b",
	"#75204f",
	"#a02669",
	"#cb2b83",
	"#e0529c",
	"#f37fb7",
	"#f8a8cc",
	"#fad2e3"
];
magentaDark.primary = magentaDark[5];
var greyDark = [
	"#151515",
	"#1f1f1f",
	"#2d2d2d",
	"#393939",
	"#494949",
	"#5a5a5a",
	"#6a6a6a",
	"#7b7b7b",
	"#888888",
	"#969696"
];
greyDark.primary = greyDark[5];
function genColorMapToken(e, { generateColorPalettes: t, generateNeutralColorPalettes: n }) {
	let { colorSuccess: r, colorWarning: i, colorError: a, colorInfo: o, colorPrimary: s, colorBgBase: c, colorTextBase: l } = e, u = t(s), d = t(r), f = t(i), p = t(a), m = t(o), h = n(c, l), g = t(e.colorLink || e.colorInfo), _ = new FastColor(p[1]).mix(new FastColor(p[3]), 50).toHexString();
	return Object.assign(Object.assign({}, h), {
		colorPrimaryBg: u[1],
		colorPrimaryBgHover: u[2],
		colorPrimaryBorder: u[3],
		colorPrimaryBorderHover: u[4],
		colorPrimaryHover: u[5],
		colorPrimary: u[6],
		colorPrimaryActive: u[7],
		colorPrimaryTextHover: u[8],
		colorPrimaryText: u[9],
		colorPrimaryTextActive: u[10],
		colorSuccessBg: d[1],
		colorSuccessBgHover: d[2],
		colorSuccessBorder: d[3],
		colorSuccessBorderHover: d[4],
		colorSuccessHover: d[4],
		colorSuccess: d[6],
		colorSuccessActive: d[7],
		colorSuccessTextHover: d[8],
		colorSuccessText: d[9],
		colorSuccessTextActive: d[10],
		colorErrorBg: p[1],
		colorErrorBgHover: p[2],
		colorErrorBgFilledHover: _,
		colorErrorBgActive: p[3],
		colorErrorBorder: p[3],
		colorErrorBorderHover: p[4],
		colorErrorHover: p[5],
		colorError: p[6],
		colorErrorActive: p[7],
		colorErrorTextHover: p[8],
		colorErrorText: p[9],
		colorErrorTextActive: p[10],
		colorWarningBg: f[1],
		colorWarningBgHover: f[2],
		colorWarningBorder: f[3],
		colorWarningBorderHover: f[4],
		colorWarningHover: f[4],
		colorWarning: f[6],
		colorWarningActive: f[7],
		colorWarningTextHover: f[8],
		colorWarningText: f[9],
		colorWarningTextActive: f[10],
		colorInfoBg: m[1],
		colorInfoBgHover: m[2],
		colorInfoBorder: m[3],
		colorInfoBorderHover: m[4],
		colorInfoHover: m[4],
		colorInfo: m[6],
		colorInfoActive: m[7],
		colorInfoTextHover: m[8],
		colorInfoText: m[9],
		colorInfoTextActive: m[10],
		colorLinkHover: g[4],
		colorLink: g[6],
		colorLinkActive: g[7],
		colorBgMask: new FastColor("#000").setA(.45).toRgbString(),
		colorWhite: "#fff"
	});
}
var genRadius_default = (e) => {
	let t = e, n = e, r = e, i = e;
	return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? i = 4 : e >= 8 && (i = 6), {
		borderRadius: e,
		borderRadiusXS: r,
		borderRadiusSM: n,
		borderRadiusLG: t,
		borderRadiusOuter: i
	};
};
function genCommonMapToken(e) {
	let { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e;
	return Object.assign({
		motionDurationFast: `${(n + t).toFixed(1)}s`,
		motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
		motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
		lineWidthBold: i + 1
	}, genRadius_default(r));
}
var genControlHeight_default = (e) => {
	let { controlHeight: t } = e;
	return {
		controlHeightSM: t * .75,
		controlHeightXS: t * .5,
		controlHeightLG: t * 1.25
	};
};
function getLineHeight(e) {
	return (e + 8) / e;
}
function getFontSizes(e) {
	let t = Array.from({ length: 10 }).map((t, n) => {
		let r = n - 1, i = e * Math.E ** (r / 5), a = n > 1 ? Math.floor(i) : Math.ceil(i);
		return Math.floor(a / 2) * 2;
	});
	return t[1] = e, t.map((e) => ({
		size: e,
		lineHeight: getLineHeight(e)
	}));
}
var genFontMapToken_default = (e) => {
	let t = getFontSizes(e), n = t.map((e) => e.size), r = t.map((e) => e.lineHeight), i = n[1], a = n[0], o = n[2], s = r[1], c = r[0], l = r[2];
	return {
		fontSizeSM: a,
		fontSize: i,
		fontSizeLG: o,
		fontSizeXL: n[3],
		fontSizeHeading1: n[6],
		fontSizeHeading2: n[5],
		fontSizeHeading3: n[4],
		fontSizeHeading4: n[3],
		fontSizeHeading5: n[2],
		lineHeight: s,
		lineHeightLG: l,
		lineHeightSM: c,
		fontHeight: Math.round(s * i),
		fontHeightLG: Math.round(l * o),
		fontHeightSM: Math.round(c * a),
		lineHeightHeading1: r[6],
		lineHeightHeading2: r[5],
		lineHeightHeading3: r[4],
		lineHeightHeading4: r[3],
		lineHeightHeading5: r[2]
	};
};
function genSizeMapToken(e) {
	let { sizeUnit: t, sizeStep: n } = e;
	return {
		sizeXXL: t * (n + 8),
		sizeXL: t * (n + 4),
		sizeLG: t * (n + 2),
		sizeMD: t * (n + 1),
		sizeMS: t * n,
		size: t * n,
		sizeSM: t * (n - 1),
		sizeXS: t * (n - 2),
		sizeXXS: t * (n - 3)
	};
}
const getAlphaColor$1 = (e, t) => new FastColor(e).setA(t).toRgbString(), getSolidColor = (e, t) => new FastColor(e).darken(t).toHexString(), generateColorPalettes = (e) => {
	let t = generate$1(e);
	return {
		1: t[0],
		2: t[1],
		3: t[2],
		4: t[3],
		5: t[4],
		6: t[5],
		7: t[6],
		8: t[4],
		9: t[5],
		10: t[6]
	};
}, generateNeutralColorPalettes = (e, t) => {
	let n = e || "#fff", r = t || "#000";
	return {
		colorBgBase: n,
		colorTextBase: r,
		colorText: getAlphaColor$1(r, .88),
		colorTextSecondary: getAlphaColor$1(r, .65),
		colorTextTertiary: getAlphaColor$1(r, .45),
		colorTextQuaternary: getAlphaColor$1(r, .25),
		colorFill: getAlphaColor$1(r, .15),
		colorFillSecondary: getAlphaColor$1(r, .06),
		colorFillTertiary: getAlphaColor$1(r, .04),
		colorFillQuaternary: getAlphaColor$1(r, .02),
		colorBgSolid: getAlphaColor$1(r, 1),
		colorBgSolidHover: getAlphaColor$1(r, .75),
		colorBgSolidActive: getAlphaColor$1(r, .95),
		colorBgLayout: getSolidColor(n, 4),
		colorBgContainer: getSolidColor(n, 0),
		colorBgElevated: getSolidColor(n, 0),
		colorBgSpotlight: getAlphaColor$1(r, .85),
		colorBgBlur: "transparent",
		colorBorder: getSolidColor(n, 15),
		colorBorderSecondary: getSolidColor(n, 6)
	};
};
function derivative(e) {
	presetPrimaryColors.pink = presetPrimaryColors.magenta, presetPalettes.pink = presetPalettes.magenta;
	let t = Object.keys(defaultPresetColors).map((t) => {
		let n = e[t] === presetPrimaryColors[t] ? presetPalettes[t] : generate$1(e[t]);
		return Array.from({ length: 10 }, () => 1).reduce((e, r, i) => (e[`${t}-${i + 1}`] = n[i], e[`${t}${i + 1}`] = n[i], e), {});
	}).reduce((e, t) => (e = Object.assign(Object.assign({}, e), t), e), {});
	return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), genColorMapToken(e, {
		generateColorPalettes,
		generateNeutralColorPalettes
	})), genFontMapToken_default(e.fontSize)), genSizeMapToken(e)), genControlHeight_default(e)), genCommonMapToken(e));
}
var theme_default = createTheme(derivative);
const defaultConfig = {
	token: seed_default,
	override: { override: seed_default },
	hashed: !0
}, DesignTokenContext = /* @__PURE__ */ React.createContext(defaultConfig), defaultIconPrefixCls = "anticon", ConfigContext = /* @__PURE__ */ React$1.createContext({
	getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
	iconPrefixCls: defaultIconPrefixCls
}), { Consumer: ConfigConsumer } = ConfigContext;
var EMPTY_OBJECT = {};
function useComponentConfig(t) {
	let n = React$1.useContext(ConfigContext), { getPrefixCls: r, direction: i, getPopupContainer: a } = n, o = n[t];
	return Object.assign(Object.assign({
		classNames: EMPTY_OBJECT,
		styles: EMPTY_OBJECT
	}, o), {
		getPrefixCls: r,
		direction: i,
		getPopupContainer: a
	});
}
var DisabledContext_default = /* @__PURE__ */ React$1.createContext(!1), SizeContext_default = /* @__PURE__ */ React$1.createContext(void 0), calculator_default = /* @__PURE__ */ _createClass(function e() {
	_classCallCheck(this, e);
}), CALC_UNIT = "CALC_UNIT", regexp = new RegExp(CALC_UNIT, "g");
function unit(e) {
	return typeof e == "number" ? `${e}${CALC_UNIT}` : e;
}
var CSSCalculator = /* @__PURE__ */ function(e) {
	_inherits(n, e);
	var t = _createSuper(n);
	function n(e, r) {
		var i;
		_classCallCheck(this, n), i = t.call(this), _defineProperty(_assertThisInitialized(i), "result", ""), _defineProperty(_assertThisInitialized(i), "unitlessCssVar", void 0), _defineProperty(_assertThisInitialized(i), "lowPriority", void 0);
		var a = _typeof(e);
		return i.unitlessCssVar = r, e instanceof n ? i.result = `(${e.result})` : a === "number" ? i.result = unit(e) : a === "string" && (i.result = e), i;
	}
	return _createClass(n, [
		{
			key: "add",
			value: function(e) {
				return e instanceof n ? this.result = `${this.result} + ${e.getResult()}` : (typeof e == "number" || typeof e == "string") && (this.result = `${this.result} + ${unit(e)}`), this.lowPriority = !0, this;
			}
		},
		{
			key: "sub",
			value: function(e) {
				return e instanceof n ? this.result = `${this.result} - ${e.getResult()}` : (typeof e == "number" || typeof e == "string") && (this.result = `${this.result} - ${unit(e)}`), this.lowPriority = !0, this;
			}
		},
		{
			key: "mul",
			value: function(e) {
				return this.lowPriority && (this.result = `(${this.result})`), e instanceof n ? this.result = `${this.result} * ${e.getResult(!0)}` : (typeof e == "number" || typeof e == "string") && (this.result = `${this.result} * ${e}`), this.lowPriority = !1, this;
			}
		},
		{
			key: "div",
			value: function(e) {
				return this.lowPriority && (this.result = `(${this.result})`), e instanceof n ? this.result = `${this.result} / ${e.getResult(!0)}` : (typeof e == "number" || typeof e == "string") && (this.result = `${this.result} / ${e}`), this.lowPriority = !1, this;
			}
		},
		{
			key: "getResult",
			value: function(e) {
				return this.lowPriority || e ? `(${this.result})` : this.result;
			}
		},
		{
			key: "equal",
			value: function(e) {
				var t = this, n = (e || {}).unit, r = !0;
				return typeof n == "boolean" ? r = n : Array.from(this.unitlessCssVar).some(function(e) {
					return t.result.includes(e);
				}) && (r = !1), this.result = this.result.replace(regexp, r ? "px" : ""), this.lowPriority === void 0 ? this.result : `calc(${this.result})`;
			}
		}
	]), n;
}(calculator_default), NumCalculator_default = /* @__PURE__ */ function(e) {
	_inherits(n, e);
	var t = _createSuper(n);
	function n(e) {
		var r;
		return _classCallCheck(this, n), r = t.call(this), _defineProperty(_assertThisInitialized(r), "result", 0), e instanceof n ? r.result = e.result : typeof e == "number" && (r.result = e), r;
	}
	return _createClass(n, [
		{
			key: "add",
			value: function(e) {
				return e instanceof n ? this.result += e.result : typeof e == "number" && (this.result += e), this;
			}
		},
		{
			key: "sub",
			value: function(e) {
				return e instanceof n ? this.result -= e.result : typeof e == "number" && (this.result -= e), this;
			}
		},
		{
			key: "mul",
			value: function(e) {
				return e instanceof n ? this.result *= e.result : typeof e == "number" && (this.result *= e), this;
			}
		},
		{
			key: "div",
			value: function(e) {
				return e instanceof n ? this.result /= e.result : typeof e == "number" && (this.result /= e), this;
			}
		},
		{
			key: "equal",
			value: function() {
				return this.result;
			}
		}
	]), n;
}(calculator_default), calc_default = function(e, t) {
	var n = e === "css" ? CSSCalculator : NumCalculator_default;
	return function(e) {
		return new n(e, t);
	};
}, getCompVarPrefix_default = function(e, t) {
	return `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
};
function useEvent(t) {
	var n = React$1.useRef();
	return n.current = t, React$1.useCallback(function() {
		var e, t = [...arguments];
		return (e = n.current)?.call.apply(e, [n].concat(t));
	}, []);
}
function useSafeState(t) {
	var n = React$1.useRef(!1), r = _slicedToArray(React$1.useState(t), 2), i = r[0], a = r[1];
	React$1.useEffect(function() {
		return n.current = !1, function() {
			n.current = !0;
		};
	}, []);
	function o(e, t) {
		t && n.current || a(e);
	}
	return [i, o];
}
function hasValue(e) {
	return e !== void 0;
}
function useMergedState(e, t) {
	var n = t || {}, r = n.defaultValue, i = n.value, a = n.onChange, o = n.postState, s = _slicedToArray(useSafeState(function() {
		return hasValue(i) ? i : hasValue(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
	}), 2), c = s[0], l = s[1], u = i === void 0 ? c : i, d = o ? o(u) : u, f = useEvent(a), p = _slicedToArray(useSafeState([u]), 2), m = p[0], h = p[1];
	return useLayoutUpdateEffect(function() {
		var e = m[0];
		c !== e && f(c, e);
	}, [m]), useLayoutUpdateEffect(function() {
		hasValue(i) || l(i);
	}, [i]), [d, useEvent(function(e, t) {
		l(e, t), h([u], t);
	})];
}
function getComponentToken(e, t, n, r) {
	var i = _objectSpread2({}, t[e]);
	r != null && r.deprecatedTokens && r.deprecatedTokens.forEach(function(t) {
		var n = _slicedToArray(t, 2), r = n[0], a = n[1];
		process.env.NODE_ENV !== "production" && warning_default$1(!(i != null && i[r]), `Component Token \`${String(r)}\` of ${String(e)} is deprecated. Please use \`${String(a)}\` instead.`), (i != null && i[r] || i != null && i[a]) && (i[a] ?? (i[a] = i?.[r]));
	});
	var a = _objectSpread2(_objectSpread2({}, n), i);
	return Object.keys(a).forEach(function(e) {
		a[e] === t[e] && delete a[e];
	}), a;
}
var getComponentToken_default = getComponentToken, enableStatistic = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", recording = !0;
function merge() {
	var e = [...arguments];
	/* istanbul ignore next */
	if (!enableStatistic) return Object.assign.apply(Object, [{}].concat(e));
	recording = !1;
	var t = {};
	return e.forEach(function(e) {
		_typeof(e) === "object" && Object.keys(e).forEach(function(n) {
			Object.defineProperty(t, n, {
				configurable: !0,
				enumerable: !0,
				get: function() {
					return e[n];
				}
			});
		});
	}), recording = !0, t;
}
var statistic = {};
/* istanbul ignore next */
function noop() {}
var statistic_default = function(e) {
	var t, n = e, r = noop;
	return enableStatistic && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), n = new Proxy(e, { get: function(e, n) {
		if (recording) {
			var r;
			(r = t) == null || r.add(n);
		}
		return e[n];
	} }), r = function(e, n) {
		statistic[e] = {
			global: Array.from(t),
			component: _objectSpread2(_objectSpread2({}, statistic[e]?.component), n)
		};
	}), {
		token: n,
		keys: t,
		flush: r
	};
};
function getDefaultComponentToken(e, t, n) {
	return typeof n == "function" ? n(merge(t, t[e] ?? {})) : n ?? {};
}
var getDefaultComponentToken_default = getDefaultComponentToken;
function genMaxMin(e) {
	return e === "js" ? {
		max: Math.max,
		min: Math.min
	} : {
		max: function() {
			return `max(${[...arguments].map(function(e) {
				return unit$1(e);
			}).join(",")})`;
		},
		min: function() {
			return `min(${[...arguments].map(function(e) {
				return unit$1(e);
			}).join(",")})`;
		}
	};
}
var maxmin_default = genMaxMin, BEAT_LIMIT = 1e3 * 60 * 10, uniqueMap = new (/* @__PURE__ */ function() {
	function e() {
		_classCallCheck(this, e), _defineProperty(this, "map", /* @__PURE__ */ new Map()), _defineProperty(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), _defineProperty(this, "nextID", 0), _defineProperty(this, "lastAccessBeat", /* @__PURE__ */ new Map()), _defineProperty(this, "accessBeat", 0);
	}
	return _createClass(e, [
		{
			key: "set",
			value: function(e, t) {
				this.clear();
				var n = this.getCompositeKey(e);
				this.map.set(n, t), this.lastAccessBeat.set(n, Date.now());
			}
		},
		{
			key: "get",
			value: function(e) {
				var t = this.getCompositeKey(e), n = this.map.get(t);
				return this.lastAccessBeat.set(t, Date.now()), this.accessBeat += 1, n;
			}
		},
		{
			key: "getCompositeKey",
			value: function(e) {
				var t = this;
				return e.map(function(e) {
					return e && _typeof(e) === "object" ? `obj_${t.getObjectID(e)}` : `${_typeof(e)}_${e}`;
				}).join("|");
			}
		},
		{
			key: "getObjectID",
			value: function(e) {
				if (this.objectIDMap.has(e)) return this.objectIDMap.get(e);
				var t = this.nextID;
				return this.objectIDMap.set(e, t), this.nextID += 1, t;
			}
		},
		{
			key: "clear",
			value: function() {
				var e = this;
				if (this.accessBeat > 1e4) {
					var t = Date.now();
					this.lastAccessBeat.forEach(function(n, r) {
						t - n > BEAT_LIMIT && (e.map.delete(r), e.lastAccessBeat.delete(r));
					}), this.accessBeat = 0;
				}
			}
		}
	]), e;
}())();
function useUniqueMemo(e, n) {
	return React.useMemo(function() {
		var t = uniqueMap.get(n);
		if (t) return t;
		var r = e();
		return uniqueMap.set(n, r), r;
	}, n);
}
var useUniqueMemo_default = useUniqueMemo, useCSP_default = function() {
	return {};
};
function genStyleUtils(e) {
	var n = e.useCSP, r = n === void 0 ? useCSP_default : n, i = e.useToken, a = e.usePrefix, o = e.getResetStyles, s = e.getCommonStyle, c = e.getCompUnitless;
	function l(e, t, n, r) {
		var i = Array.isArray(e) ? e[0] : e;
		function a(e) {
			return `${String(i)}${e.slice(0, 1).toUpperCase()}${e.slice(1)}`;
		}
		var o = r?.unitless || {}, s = _objectSpread2(_objectSpread2({}, typeof c == "function" ? c(e) : {}), {}, _defineProperty({}, a("zIndexPopup"), !0));
		Object.keys(o).forEach(function(e) {
			s[a(e)] = o[e];
		});
		var l = _objectSpread2(_objectSpread2({}, r), {}, {
			unitless: s,
			prefixToken: a
		}), f = d(e, t, n, l), p = u(i, n, l);
		return function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, n = _slicedToArray(f(e, t), 2)[1], r = _slicedToArray(p(t), 2);
			return [
				r[0],
				n,
				r[1]
			];
		};
	}
	function u(e, n, r) {
		var a = r.unitless, o = r.injectStyle, s = o === void 0 ? !0 : o, c = r.prefixToken, l = r.ignore, u = function(t) {
			var o = t.rootCls, s = t.cssVar, u = s === void 0 ? {} : s, d = i().realToken;
			return useCSSVarRegister_default({
				path: [e],
				prefix: u.prefix,
				key: u.key,
				unitless: a,
				ignore: l,
				token: d,
				scope: o
			}, function() {
				var t = getDefaultComponentToken_default(e, d, n), i = getComponentToken_default(e, d, t, { deprecatedTokens: r?.deprecatedTokens });
				return Object.keys(t).forEach(function(e) {
					i[c(e)] = i[e], delete i[e];
				}), i;
			}), null;
		};
		return function(n) {
			var r = i().cssVar;
			return [function(i) {
				return s && r ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(u, {
					rootCls: n,
					cssVar: r,
					component: e
				}), i) : i;
			}, r?.key];
		};
	}
	function d(t, n, c) {
		var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, u = Array.isArray(t) ? t : [t, t], d = _slicedToArray(u, 1)[0], f = u.join("-"), p = e.layer || { name: "antd" };
		return function(e) {
			var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, u = i(), m = u.theme, h = u.realToken, g = u.hashId, _ = u.token, v = u.cssVar, y = a(), b = y.rootPrefixCls, x = y.iconPrefixCls, S = r(), C = v ? "css" : "js", w = useUniqueMemo_default(function() {
				var e = /* @__PURE__ */ new Set();
				return v && Object.keys(l.unitless || {}).forEach(function(t) {
					e.add(token2CSSVar(t, v.prefix)), e.add(token2CSSVar(t, getCompVarPrefix_default(d, v.prefix)));
				}), calc_default(C, e);
			}, [
				C,
				d,
				v?.prefix
			]), T = maxmin_default(C), E = T.max, O = T.min, k = {
				theme: m,
				token: _,
				hashId: g,
				nonce: function() {
					return S.nonce;
				},
				clientOnly: l.clientOnly,
				layer: p,
				order: l.order || -999
			};
			return typeof o == "function" && useStyleRegister(_objectSpread2(_objectSpread2({}, k), {}, {
				clientOnly: !1,
				path: ["Shared", b]
			}), function() {
				return o(_, {
					prefix: {
						rootPrefixCls: b,
						iconPrefixCls: x
					},
					csp: S
				});
			}), [useStyleRegister(_objectSpread2(_objectSpread2({}, k), {}, { path: [
				f,
				e,
				x
			] }), function() {
				if (l.injectStyle === !1) return [];
				var r = statistic_default(_), i = r.token, a = r.flush, o = getDefaultComponentToken_default(d, h, c), u = `.${e}`, f = getComponentToken_default(d, h, o, { deprecatedTokens: l.deprecatedTokens });
				v && o && _typeof(o) === "object" && Object.keys(o).forEach(function(e) {
					o[e] = `var(${token2CSSVar(e, getCompVarPrefix_default(d, v.prefix))})`;
				});
				var p = merge(i, {
					componentCls: u,
					prefixCls: e,
					iconCls: `.${x}`,
					antCls: `.${b}`,
					calc: w,
					max: E,
					min: O
				}, v ? o : f), m = n(p, {
					hashId: g,
					prefixCls: e,
					rootPrefixCls: b,
					iconPrefixCls: x
				});
				a(d, f);
				var y = typeof s == "function" ? s(p, e, t, l.resetFont) : null;
				return [l.resetStyle === !1 ? null : y, m];
			}), g];
		};
	}
	function f(e, t, n) {
		var r = d(e, t, n, _objectSpread2({
			resetStyle: !1,
			order: -998
		}, arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {})), i = function(e) {
			var t = e.prefixCls, n = e.rootCls;
			return r(t, n === void 0 ? t : n), null;
		};
		return process.env.NODE_ENV !== "production" && (i.displayName = `SubStyle_${String(Array.isArray(e) ? e.join(".") : e)}`), i;
	}
	return {
		genStyleHooks: l,
		genSubStyleComponent: f,
		genComponentStyleHook: d
	};
}
var genStyleUtils_default = genStyleUtils;
const PresetColors = [
	"blue",
	"purple",
	"cyan",
	"green",
	"magenta",
	"pink",
	"red",
	"orange",
	"yellow",
	"volcano",
	"geekblue",
	"lime",
	"gold"
];
var version_default = "5.29.3";
function isStableColor(e) {
	return e >= 0 && e <= 255;
}
function getAlphaColor(e, t) {
	let { r: n, g: r, b: i, a } = new FastColor(e).toRgb();
	if (a < 1) return e;
	let { r: o, g: s, b: c } = new FastColor(t).toRgb();
	for (let e = .01; e <= 1; e += .01) {
		let t = Math.round((n - o * (1 - e)) / e), a = Math.round((r - s * (1 - e)) / e), l = Math.round((i - c * (1 - e)) / e);
		if (isStableColor(t) && isStableColor(a) && isStableColor(l)) return new FastColor({
			r: t,
			g: a,
			b: l,
			a: Math.round(e * 100) / 100
		}).toRgbString();
	}
	/* istanbul ignore next */
	return new FastColor({
		r: n,
		g: r,
		b: i,
		a: 1
	}).toRgbString();
}
var getAlphaColor_default = getAlphaColor, __rest$4 = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
};
function formatToken(e) {
	let { override: t } = e, n = __rest$4(e, ["override"]), r = Object.assign({}, t);
	Object.keys(seed_default).forEach((e) => {
		delete r[e];
	});
	let i = Object.assign(Object.assign({}, n), r), a = 1200, o = 1600;
	return i.motion === !1 && (i.motionDurationFast = "0s", i.motionDurationMid = "0s", i.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, i), {
		colorFillContent: i.colorFillSecondary,
		colorFillContentHover: i.colorFill,
		colorFillAlter: i.colorFillQuaternary,
		colorBgContainerDisabled: i.colorFillTertiary,
		colorBorderBg: i.colorBgContainer,
		colorSplit: getAlphaColor_default(i.colorBorderSecondary, i.colorBgContainer),
		colorTextPlaceholder: i.colorTextQuaternary,
		colorTextDisabled: i.colorTextQuaternary,
		colorTextHeading: i.colorText,
		colorTextLabel: i.colorTextSecondary,
		colorTextDescription: i.colorTextTertiary,
		colorTextLightSolid: i.colorWhite,
		colorHighlight: i.colorError,
		colorBgTextHover: i.colorFillSecondary,
		colorBgTextActive: i.colorFill,
		colorIcon: i.colorTextTertiary,
		colorIconHover: i.colorText,
		colorErrorOutline: getAlphaColor_default(i.colorErrorBg, i.colorBgContainer),
		colorWarningOutline: getAlphaColor_default(i.colorWarningBg, i.colorBgContainer),
		fontSizeIcon: i.fontSizeSM,
		lineWidthFocus: i.lineWidth * 3,
		lineWidth: i.lineWidth,
		controlOutlineWidth: i.lineWidth * 2,
		controlInteractiveSize: i.controlHeight / 2,
		controlItemBgHover: i.colorFillTertiary,
		controlItemBgActive: i.colorPrimaryBg,
		controlItemBgActiveHover: i.colorPrimaryBgHover,
		controlItemBgActiveDisabled: i.colorFill,
		controlTmpOutline: i.colorFillQuaternary,
		controlOutline: getAlphaColor_default(i.colorPrimaryBg, i.colorBgContainer),
		lineType: i.lineType,
		borderRadius: i.borderRadius,
		borderRadiusXS: i.borderRadiusXS,
		borderRadiusSM: i.borderRadiusSM,
		borderRadiusLG: i.borderRadiusLG,
		fontWeightStrong: 600,
		opacityLoading: .65,
		linkDecoration: "none",
		linkHoverDecoration: "none",
		linkFocusDecoration: "none",
		controlPaddingHorizontal: 12,
		controlPaddingHorizontalSM: 8,
		paddingXXS: i.sizeXXS,
		paddingXS: i.sizeXS,
		paddingSM: i.sizeSM,
		padding: i.size,
		paddingMD: i.sizeMD,
		paddingLG: i.sizeLG,
		paddingXL: i.sizeXL,
		paddingContentHorizontalLG: i.sizeLG,
		paddingContentVerticalLG: i.sizeMS,
		paddingContentHorizontal: i.sizeMS,
		paddingContentVertical: i.sizeSM,
		paddingContentHorizontalSM: i.size,
		paddingContentVerticalSM: i.sizeXS,
		marginXXS: i.sizeXXS,
		marginXS: i.sizeXS,
		marginSM: i.sizeSM,
		margin: i.size,
		marginMD: i.sizeMD,
		marginLG: i.sizeLG,
		marginXL: i.sizeXL,
		marginXXL: i.sizeXXL,
		boxShadow: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowTertiary: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
		screenXS: 480,
		screenXSMin: 480,
		screenXSMax: 575,
		screenSM: 576,
		screenSMMin: 576,
		screenSMMax: 767,
		screenMD: 768,
		screenMDMin: 768,
		screenMDMax: 991,
		screenLG: 992,
		screenLGMin: 992,
		screenLGMax: a - 1,
		screenXL: a,
		screenXLMin: a,
		screenXLMax: o - 1,
		screenXXL: o,
		screenXXLMin: o,
		boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
		boxShadowCard: `
      0 1px 2px -2px ${new FastColor("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new FastColor("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new FastColor("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
		boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
		boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
		boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
		boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
		boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
	}), r);
}
var __rest$3 = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
};
const unitless = {
	lineHeight: !0,
	lineHeightSM: !0,
	lineHeightLG: !0,
	lineHeightHeading1: !0,
	lineHeightHeading2: !0,
	lineHeightHeading3: !0,
	lineHeightHeading4: !0,
	lineHeightHeading5: !0,
	opacityLoading: !0,
	fontWeightStrong: !0,
	zIndexPopupBase: !0,
	zIndexBase: !0,
	opacityImage: !0
}, ignore = {
	motionBase: !0,
	motionUnit: !0
};
var preserve = {
	screenXS: !0,
	screenXSMin: !0,
	screenXSMax: !0,
	screenSM: !0,
	screenSMMin: !0,
	screenSMMax: !0,
	screenMD: !0,
	screenMDMin: !0,
	screenMDMax: !0,
	screenLG: !0,
	screenLGMin: !0,
	screenLGMax: !0,
	screenXL: !0,
	screenXLMin: !0,
	screenXLMax: !0,
	screenXXL: !0,
	screenXXLMin: !0
};
const getComputedToken = (e, t, n) => {
	let r = n.getDerivativeToken(e), { override: i } = t, a = __rest$3(t, ["override"]), o = Object.assign(Object.assign({}, r), { override: i });
	return o = formatToken(o), a && Object.entries(a).forEach(([e, t]) => {
		let { theme: n } = t, r = __rest$3(t, ["theme"]), i = r;
		n && (i = getComputedToken(Object.assign(Object.assign({}, o), r), { override: r }, n)), o[e] = i;
	}), o;
};
function useToken() {
	let { token: e, hashed: n, theme: r, override: i, cssVar: a } = React.useContext(DesignTokenContext), o = `${version_default}-${n || ""}`, s = r || theme_default, [c, l, u] = useCacheToken(s, [seed_default, e], {
		salt: o,
		override: i,
		getComputedToken,
		formatToken,
		cssVar: a && {
			prefix: a.prefix,
			key: a.key,
			unitless,
			ignore,
			preserve
		}
	});
	return [
		s,
		u,
		n ? l : "",
		c,
		a
	];
}
const resetIcon = () => ({
	display: "inline-flex",
	alignItems: "center",
	color: "inherit",
	fontStyle: "normal",
	lineHeight: 0,
	textAlign: "center",
	textTransform: "none",
	verticalAlign: "-0.125em",
	textRendering: "optimizeLegibility",
	"-webkit-font-smoothing": "antialiased",
	"-moz-osx-font-smoothing": "grayscale",
	"> *": { lineHeight: 1 },
	svg: { display: "inline-block" }
}), genLinkStyle$1 = (e) => ({ a: {
	color: e.colorLink,
	textDecoration: e.linkDecoration,
	backgroundColor: "transparent",
	outline: "none",
	cursor: "pointer",
	transition: `color ${e.motionDurationSlow}`,
	"-webkit-text-decoration-skip": "objects",
	"&:hover": { color: e.colorLinkHover },
	"&:active": { color: e.colorLinkActive },
	"&:active, &:hover": {
		textDecoration: e.linkHoverDecoration,
		outline: 0
	},
	"&:focus": {
		textDecoration: e.linkFocusDecoration,
		outline: 0
	},
	"&[disabled]": {
		color: e.colorTextDisabled,
		cursor: "not-allowed"
	}
} }), genCommonStyle = (e, t, n, r) => {
	let i = `[class^="${t}"], [class*=" ${t}"]`, a = n ? `.${n}` : i, o = {
		boxSizing: "border-box",
		"&::before, &::after": { boxSizing: "border-box" }
	}, s = {};
	return r !== !1 && (s = {
		fontFamily: e.fontFamily,
		fontSize: e.fontSize
	}), { [a]: Object.assign(Object.assign(Object.assign({}, s), o), { [i]: o }) };
}, genFocusOutline = (e, t) => ({
	outline: `${unit$1(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
	outlineOffset: t ?? 1,
	transition: "outline-offset 0s, outline 0s"
}), genFocusStyle = (e, t) => ({ "&:focus-visible": genFocusOutline(e, t) }), genIconStyle = (e) => ({ [`.${e}`]: Object.assign(Object.assign({}, resetIcon()), { [`.${e} .${e}-icon`]: { display: "block" } }) }), { genStyleHooks, genComponentStyleHook, genSubStyleComponent } = genStyleUtils_default({
	usePrefix: () => {
		let { getPrefixCls: e, iconPrefixCls: t } = useContext(ConfigContext);
		return {
			rootPrefixCls: e(),
			iconPrefixCls: t
		};
	},
	useToken: () => {
		let [e, t, n, r, i] = useToken();
		return {
			theme: e,
			realToken: t,
			hashId: n,
			token: r,
			cssVar: i
		};
	},
	useCSP: () => {
		let { csp: e } = useContext(ConfigContext);
		return e ?? {};
	},
	getResetStyles: (e, t) => {
		let n = genLinkStyle$1(e);
		return [
			n,
			{ "&": n },
			genIconStyle(t?.prefix.iconPrefixCls ?? defaultIconPrefixCls)
		];
	},
	getCommonStyle: genCommonStyle,
	getCompUnitless: () => unitless
});
var Context = /* @__PURE__ */ React$1.createContext({}), DomWrapper_default = /* @__PURE__ */ function(e) {
	_inherits(n, e);
	var t = _createSuper(n);
	function n() {
		return _classCallCheck(this, n), t.apply(this, arguments);
	}
	return _createClass(n, [{
		key: "render",
		value: function() {
			return this.props.children;
		}
	}]), n;
}(React$1.Component);
function useSyncState(t) {
	var n = _slicedToArray(React$1.useReducer(function(e) {
		return e + 1;
	}, 0), 2)[1], r = React$1.useRef(t);
	return [useEvent(function() {
		return r.current;
	}), useEvent(function(e) {
		r.current = typeof e == "function" ? e(r.current) : e, n();
	})];
}
var STATUS_NONE = "none", STATUS_APPEAR = "appear", STATUS_ENTER = "enter", STATUS_LEAVE = "leave", STEP_NONE = "none", STEP_PREPARE = "prepare", STEP_START = "start", STEP_ACTIVE = "active", STEP_PREPARED = "prepared";
function makePrefixMap(e, t) {
	var n = {};
	return n[e.toLowerCase()] = t.toLowerCase(), n[`Webkit${e}`] = `webkit${t}`, n[`Moz${e}`] = `moz${t}`, n[`ms${e}`] = `MS${t}`, n[`O${e}`] = `o${t.toLowerCase()}`, n;
}
function getVendorPrefixes(e, t) {
	var n = {
		animationend: makePrefixMap("Animation", "AnimationEnd"),
		transitionend: makePrefixMap("Transition", "TransitionEnd")
	};
	return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window < "u" ? window : {}), style = {};
canUseDom() && (style = document.createElement("div").style);
var prefixedEventNames = {};
function getVendorPrefixedEventName(e) {
	if (prefixedEventNames[e]) return prefixedEventNames[e];
	var t = vendorPrefixes[e];
	if (t) for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
		var a = n[i];
		if (Object.prototype.hasOwnProperty.call(t, a) && a in style) return prefixedEventNames[e] = t[a], prefixedEventNames[e];
	}
	return "";
}
var internalAnimationEndName = getVendorPrefixedEventName("animationend"), internalTransitionEndName = getVendorPrefixedEventName("transitionend"), supportTransition = !!(internalAnimationEndName && internalTransitionEndName), animationEndName = internalAnimationEndName || "animationend", transitionEndName = internalTransitionEndName || "transitionend";
function getTransitionName(e, t) {
	return e ? _typeof(e) === "object" ? e[t.replace(/-\w/g, function(e) {
		return e[1].toUpperCase();
	})] : `${e}-${t}` : null;
}
var useDomMotionEvents_default = (function(t) {
	var n = useRef();
	function r(e) {
		e && (e.removeEventListener(transitionEndName, t), e.removeEventListener(animationEndName, t));
	}
	function i(e) {
		n.current && n.current !== e && r(n.current), e && e !== n.current && (e.addEventListener(transitionEndName, t), e.addEventListener(animationEndName, t), n.current = e);
	}
	return React$1.useEffect(function() {
		return function() {
			r(n.current);
		};
	}, []), [i, r];
}), useIsomorphicLayoutEffect_default = canUseDom() ? useLayoutEffect : useEffect, useNextFrame_default = (function() {
	var t = React$1.useRef(null);
	function n() {
		raf_default.cancel(t.current);
	}
	function r(e) {
		var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
		n();
		var a = raf_default(function() {
			i <= 1 ? e({ isCanceled: function() {
				return a !== t.current;
			} }) : r(e, i - 1);
		});
		t.current = a;
	}
	return React$1.useEffect(function() {
		return function() {
			n();
		};
	}, []), [r, n];
}), FULL_STEP_QUEUE = [
	STEP_PREPARE,
	STEP_START,
	STEP_ACTIVE,
	"end"
], SIMPLE_STEP_QUEUE = [STEP_PREPARE, STEP_PREPARED];
function isActive(e) {
	return e === "active" || e === "end";
}
var useStepQueue_default = (function(t, n, r) {
	var i = _slicedToArray(useSafeState(STEP_NONE), 2), a = i[0], o = i[1], s = _slicedToArray(useNextFrame_default(), 2), c = s[0], l = s[1];
	function u() {
		o(STEP_PREPARE, !0);
	}
	var d = n ? SIMPLE_STEP_QUEUE : FULL_STEP_QUEUE;
	return useIsomorphicLayoutEffect_default(function() {
		if (a !== "none" && a !== "end") {
			var e = d[d.indexOf(a) + 1], t = r(a);
			t === !1 ? o(e, !0) : e && c(function(n) {
				function r() {
					n.isCanceled() || o(e, !0);
				}
				t === !0 ? r() : Promise.resolve(t).then(r);
			});
		}
	}, [t, a]), React$1.useEffect(function() {
		return function() {
			l();
		};
	}, []), [u, a];
});
function useStatus(t, n, r, i) {
	var a = i.motionEnter, o = a === void 0 ? !0 : a, c = i.motionAppear, l = c === void 0 ? !0 : c, d = i.motionLeave, f = d === void 0 ? !0 : d, p = i.motionDeadline, m = i.motionLeaveImmediately, h = i.onAppearPrepare, g = i.onEnterPrepare, _ = i.onLeavePrepare, v = i.onAppearStart, y = i.onEnterStart, b = i.onLeaveStart, x = i.onAppearActive, S = i.onEnterActive, C = i.onLeaveActive, w = i.onAppearEnd, T = i.onEnterEnd, E = i.onLeaveEnd, D = i.onVisibleChanged, O = _slicedToArray(useSafeState(), 2), k = O[0], A = O[1], j = _slicedToArray(useSyncState(STATUS_NONE), 2), M = j[0], N = j[1], P = _slicedToArray(useSafeState(null), 2), F = P[0], I = P[1], L = M(), R = useRef(!1), z = useRef(null);
	function B() {
		return r();
	}
	var V = useRef(!1);
	function H() {
		N(STATUS_NONE), I(null, !0);
	}
	var U = useEvent(function(e) {
		var t = M();
		if (t !== "none") {
			var n = B();
			if (!(e && !e.deadline && e.target !== n)) {
				var r = V.current, i;
				t === "appear" && r ? i = w?.(n, e) : t === "enter" && r ? i = T?.(n, e) : t === "leave" && r && (i = E?.(n, e)), r && i !== !1 && H();
			}
		}
	}), W = _slicedToArray(useDomMotionEvents_default(U), 1)[0], K = function(e) {
		switch (e) {
			case STATUS_APPEAR: return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, h), STEP_START, v), STEP_ACTIVE, x);
			case STATUS_ENTER: return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, g), STEP_START, y), STEP_ACTIVE, S);
			case STATUS_LEAVE: return _defineProperty(_defineProperty(_defineProperty({}, STEP_PREPARE, _), STEP_START, b), STEP_ACTIVE, C);
			default: return {};
		}
	}, q = React$1.useMemo(function() {
		return K(L);
	}, [L]), J = _slicedToArray(useStepQueue_default(L, !t, function(e) {
		if (e === "prepare") {
			var t = q[STEP_PREPARE];
			return t ? t(B()) : !1;
		}
		return Y in q && I(q[Y]?.call(q, B(), null) || null), Y === "active" && L !== "none" && (W(B()), p > 0 && (clearTimeout(z.current), z.current = setTimeout(function() {
			U({ deadline: !0 });
		}, p))), Y === "prepared" && H(), !0;
	}), 2), te = J[0], Y = J[1];
	V.current = isActive(Y);
	var ne = useRef(null);
	useIsomorphicLayoutEffect_default(function() {
		if (!(R.current && ne.current === n)) {
			A(n);
			var e = R.current;
			R.current = !0;
			var r;
			!e && n && l && (r = STATUS_APPEAR), e && n && o && (r = STATUS_ENTER), (e && !n && f || !e && m && !n && f) && (r = STATUS_LEAVE);
			var i = K(r);
			r && (t || i.prepare) ? (N(r), te()) : N(STATUS_NONE), ne.current = n;
		}
	}, [n]), useEffect(function() {
		(L === "appear" && !l || L === "enter" && !o || L === "leave" && !f) && N(STATUS_NONE);
	}, [
		l,
		o,
		f
	]), useEffect(function() {
		return function() {
			R.current = !1, clearTimeout(z.current);
		};
	}, []);
	var X = React$1.useRef(!1);
	useEffect(function() {
		k && (X.current = !0), k !== void 0 && L === "none" && ((X.current || k) && D?.(k), X.current = !0);
	}, [k, L]);
	var Z = F;
	return q.prepare && Y === "start" && (Z = _objectSpread2({ transition: "none" }, Z)), [
		L,
		Y,
		Z,
		k ?? n
	];
}
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
function genCSSMotion(t) {
	var n = t;
	_typeof(t) === "object" && (n = t.transitionSupport);
	function r(e, t) {
		return !!(e.motionName && n && t !== !1);
	}
	var i = /* @__PURE__ */ React$1.forwardRef(function(t, n) {
		var i = t.visible, a = i === void 0 ? !0 : i, o = t.removeOnLeave, s = o === void 0 ? !0 : o, c = t.forceRender, l = t.children, d = t.motionName, f = t.leavedClassName, p = t.eventProps, m = React$1.useContext(Context).motion, h = r(t, m), g = useRef(), _ = useRef();
		function v() {
			try {
				return g.current instanceof HTMLElement ? g.current : findDOMNode(_.current);
			} catch {
				return null;
			}
		}
		var y = _slicedToArray(useStatus(h, a, v, t), 4), b = y[0], x = y[1], S = y[2], C = y[3], w = React$1.useRef(C);
		C && (w.current = !0);
		var T = React$1.useCallback(function(e) {
			g.current = e, fillRef(n, e);
		}, [n]), E, D = _objectSpread2(_objectSpread2({}, p), {}, { visible: a });
		if (!l) E = null;
		else if (b === "none") E = C ? l(_objectSpread2({}, D), T) : !s && w.current && f ? l(_objectSpread2(_objectSpread2({}, D), {}, { className: f }), T) : c || !s && !f ? l(_objectSpread2(_objectSpread2({}, D), {}, { style: { display: "none" } }), T) : null;
		else {
			var O;
			x === "prepare" ? O = "prepare" : isActive(x) ? O = "active" : x === "start" && (O = "start");
			var k = getTransitionName(d, `${b}-${O}`);
			E = l(_objectSpread2(_objectSpread2({}, D), {}, {
				className: (0, import_classnames.default)(getTransitionName(d, b), _defineProperty(_defineProperty({}, k, k && O), d, typeof d == "string")),
				style: S
			}), T);
		}
		return /* @__PURE__ */ React$1.isValidElement(E) && supportRef(E) && (getNodeRef(E) || (E = /* @__PURE__ */ React$1.cloneElement(E, { ref: T }))), /* @__PURE__ */ React$1.createElement(DomWrapper_default, { ref: _ }, E);
	});
	return i.displayName = "CSSMotion", i;
}
var CSSMotion_default = genCSSMotion(supportTransition), STATUS_KEEP = "keep", STATUS_REMOVE = "remove", STATUS_REMOVED = "removed";
function wrapKeyToObject(e) {
	var t = e && _typeof(e) === "object" && "key" in e ? e : { key: e };
	return _objectSpread2(_objectSpread2({}, t), {}, { key: String(t.key) });
}
function parseKeys() {
	return (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []).map(wrapKeyToObject);
}
function diffKeys() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, i = t.length, a = parseKeys(e), o = parseKeys(t);
	a.forEach(function(e) {
		for (var t = !1, a = r; a < i; a += 1) {
			var s = o[a];
			if (s.key === e.key) {
				r < a && (n = n.concat(o.slice(r, a).map(function(e) {
					return _objectSpread2(_objectSpread2({}, e), {}, { status: "add" });
				})), r = a), n.push(_objectSpread2(_objectSpread2({}, s), {}, { status: STATUS_KEEP })), r += 1, t = !0;
				break;
			}
		}
		t || n.push(_objectSpread2(_objectSpread2({}, e), {}, { status: STATUS_REMOVE }));
	}), r < i && (n = n.concat(o.slice(r).map(function(e) {
		return _objectSpread2(_objectSpread2({}, e), {}, { status: "add" });
	})));
	var s = {};
	return n.forEach(function(e) {
		var t = e.key;
		s[t] = (s[t] || 0) + 1;
	}), Object.keys(s).filter(function(e) {
		return s[e] > 1;
	}).forEach(function(e) {
		n = n.filter(function(t) {
			var n = t.key, r = t.status;
			return n !== e || r !== "remove";
		}), n.forEach(function(t) {
			t.key === e && (t.status = STATUS_KEEP);
		});
	}), n;
}
var _excluded$3 = [
	"component",
	"children",
	"onVisibleChanged",
	"onAllRemoved"
], _excluded2$1 = ["status"], MOTION_PROP_NAMES = [
	"eventProps",
	"visible",
	"children",
	"motionName",
	"motionAppear",
	"motionEnter",
	"motionLeave",
	"motionLeaveImmediately",
	"motionDeadline",
	"removeOnLeave",
	"leavedClassName",
	"onAppearPrepare",
	"onAppearStart",
	"onAppearActive",
	"onAppearEnd",
	"onEnterStart",
	"onEnterActive",
	"onEnterEnd",
	"onLeaveStart",
	"onLeaveActive",
	"onLeaveEnd"
];
function genCSSMotionList(t) {
	var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion_default, r = /* @__PURE__ */ function(t) {
		_inherits(i, t);
		var r = _createSuper(i);
		function i() {
			var e;
			_classCallCheck(this, i);
			var t = [...arguments];
			return e = r.call.apply(r, [this].concat(t)), _defineProperty(_assertThisInitialized(e), "state", { keyEntities: [] }), _defineProperty(_assertThisInitialized(e), "removeKey", function(t) {
				e.setState(function(e) {
					return { keyEntities: e.keyEntities.map(function(e) {
						return e.key === t ? _objectSpread2(_objectSpread2({}, e), {}, { status: STATUS_REMOVED }) : e;
					}) };
				}, function() {
					e.state.keyEntities.filter(function(e) {
						return e.status !== "removed";
					}).length === 0 && e.props.onAllRemoved && e.props.onAllRemoved();
				});
			}), e;
		}
		return _createClass(i, [{
			key: "render",
			value: function() {
				var t = this, r = this.state.keyEntities, i = this.props, a = i.component, o = i.children, s = i.onVisibleChanged;
				i.onAllRemoved;
				var c = _objectWithoutProperties(i, _excluded$3), l = a || React$1.Fragment, u = {};
				return MOTION_PROP_NAMES.forEach(function(e) {
					u[e] = c[e], delete c[e];
				}), delete c.keys, /* @__PURE__ */ React$1.createElement(l, c, r.map(function(r, i) {
					var a = r.status, c = _objectWithoutProperties(r, _excluded2$1), l = a === "add" || a === "keep";
					return /* @__PURE__ */ React$1.createElement(n, _extends({}, u, {
						key: c.key,
						visible: l,
						eventProps: c,
						onVisibleChanged: function(e) {
							s?.(e, { key: c.key }), e || t.removeKey(c.key);
						}
					}), function(e, t) {
						return o(_objectSpread2(_objectSpread2({}, e), {}, { index: i }), t);
					});
				}));
			}
		}], [{
			key: "getDerivedStateFromProps",
			value: function(e, t) {
				var n = e.keys, r = t.keyEntities;
				return { keyEntities: diffKeys(r, parseKeys(n)).filter(function(e) {
					var t = r.find(function(t) {
						var n = t.key;
						return e.key === n;
					});
					return !(t && t.status === "removed" && e.status === "remove");
				}) };
			}
		}]), i;
	}(React$1.Component);
	return _defineProperty(r, "defaultProps", { component: "div" }), r;
}
genCSSMotionList(supportTransition);
var es_default = CSSMotion_default;
function getRoot(e) {
	var t;
	return e == null || (t = e.getRootNode) == null ? void 0 : t.call(e);
}
function inShadow(e) {
	return getRoot(e) instanceof ShadowRoot;
}
function getShadowRoot(e) {
	return inShadow(e) ? getRoot(e) : null;
}
function camelCase(e) {
	return e.replace(/-(.)/g, function(e, t) {
		return t.toUpperCase();
	});
}
function warning(e, t) {
	warning_default$1(e, `[@ant-design/icons] ${t}`);
}
function isIconDefinition(e) {
	return _typeof(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (_typeof(e.icon) === "object" || typeof e.icon == "function");
}
function normalizeAttrs() {
	var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
	return Object.keys(e).reduce(function(t, n) {
		var r = e[n];
		switch (n) {
			case "class":
				t.className = r, delete t.class;
				break;
			default: delete t[n], t[camelCase(n)] = r;
		}
		return t;
	}, {});
}
function generate(e, n, r) {
	return r ? /* @__PURE__ */ React.createElement(e.tag, _objectSpread2(_objectSpread2({ key: n }, normalizeAttrs(e.attrs)), r), (e.children || []).map(function(t, r) {
		return generate(t, `${n}-${e.tag}-${r}`);
	})) : /* @__PURE__ */ React.createElement(e.tag, _objectSpread2({ key: n }, normalizeAttrs(e.attrs)), (e.children || []).map(function(t, r) {
		return generate(t, `${n}-${e.tag}-${r}`);
	}));
}
function getSecondaryColor(e) {
	return generate$1(e)[0];
}
function normalizeTwoToneColors(e) {
	return e ? Array.isArray(e) ? e : [e] : [];
}
var iconStyles = "\n.anticon {\n  display: inline-flex;\n  align-items: center;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n", useInsertStyles = function(e) {
	var t = useContext(Context_default), n = t.csp, r = t.prefixCls, i = t.layer, a = iconStyles;
	r && (a = a.replace(/anticon/g, r)), i && (a = `@layer ${i} {
${a}
}`), useEffect(function() {
		var t = e.current, r = getShadowRoot(t);
		updateCSS(a, "@ant-design-icons", {
			prepend: !i,
			csp: n,
			attachTo: r
		});
	}, []);
}, _excluded$2 = [
	"icon",
	"className",
	"onClick",
	"style",
	"primaryColor",
	"secondaryColor"
], twoToneColorPalette = {
	primaryColor: "#333",
	secondaryColor: "#E6E6E6",
	calculated: !1
};
function setTwoToneColors(e) {
	var t = e.primaryColor, n = e.secondaryColor;
	twoToneColorPalette.primaryColor = t, twoToneColorPalette.secondaryColor = n || getSecondaryColor(t), twoToneColorPalette.calculated = !!n;
}
function getTwoToneColors() {
	return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function(t) {
	var n = t.icon, r = t.className, i = t.onClick, a = t.style, o = t.primaryColor, s = t.secondaryColor, c = _objectWithoutProperties(t, _excluded$2), l = React$1.useRef(), u = twoToneColorPalette;
	if (o && (u = {
		primaryColor: o,
		secondaryColor: s || getSecondaryColor(o)
	}), useInsertStyles(l), warning(isIconDefinition(n), `icon should be icon definiton, but got ${n}`), !isIconDefinition(n)) return null;
	var d = n;
	return d && typeof d.icon == "function" && (d = _objectSpread2(_objectSpread2({}, d), {}, { icon: d.icon(u.primaryColor, u.secondaryColor) })), generate(d.icon, `svg-${d.name}`, _objectSpread2(_objectSpread2({
		className: r,
		onClick: i,
		style: a,
		"data-icon": d.name,
		width: "1em",
		height: "1em",
		fill: "currentColor",
		"aria-hidden": "true"
	}, c), {}, { ref: l }));
};
IconBase.displayName = "IconReact", IconBase.getTwoToneColors = getTwoToneColors, IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;
function setTwoToneColor(e) {
	var t = _slicedToArray(normalizeTwoToneColors(e), 2), n = t[0], r = t[1];
	return IconBase_default.setTwoToneColors({
		primaryColor: n,
		secondaryColor: r
	});
}
function getTwoToneColor() {
	var e = IconBase_default.getTwoToneColors();
	return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var _excluded$1 = [
	"className",
	"icon",
	"spin",
	"rotate",
	"tabIndex",
	"onClick",
	"twoToneColor"
];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React$1.forwardRef(function(t, n) {
	var r = t.className, i = t.icon, a = t.spin, o = t.rotate, s = t.tabIndex, c = t.onClick, l = t.twoToneColor, u = _objectWithoutProperties(t, _excluded$1), d = React$1.useContext(Context_default), f = d.prefixCls, p = f === void 0 ? "anticon" : f, m = d.rootClassName, h = (0, import_classnames.default)(m, p, _defineProperty(_defineProperty({}, `${p}-${i.name}`, !!i.name), `${p}-spin`, !!a || i.name === "loading"), r), g = s;
	g === void 0 && c && (g = -1);
	var _ = o ? {
		msTransform: `rotate(${o}deg)`,
		transform: `rotate(${o}deg)`
	} : void 0, v = _slicedToArray(normalizeTwoToneColors(l), 2), y = v[0], b = v[1];
	return /* @__PURE__ */ React$1.createElement("span", _extends({
		role: "img",
		"aria-label": i.name
	}, u, {
		ref: n,
		tabIndex: g,
		onClick: c,
		className: h
	}), /* @__PURE__ */ React$1.createElement(IconBase_default, {
		icon: i,
		primaryColor: y,
		secondaryColor: b,
		style: _
	}));
});
Icon.displayName = "AntdIcon", Icon.getTwoToneColor = getTwoToneColor, Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;
function isFragment(e) {
	return e && /* @__PURE__ */ React.isValidElement(e) && e.type === React.Fragment;
}
const replaceElement = (e, n, r) => /* @__PURE__ */ React.isValidElement(e) ? /* @__PURE__ */ React.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : n;
function cloneElement(e, t) {
	return replaceElement(e, e, t);
}
var LoadingOutlined_default$1 = {
	icon: {
		tag: "svg",
		attrs: {
			viewBox: "0 0 1024 1024",
			focusable: "false"
		},
		children: [{
			tag: "path",
			attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" }
		}]
	},
	name: "loading",
	theme: "outlined"
}, RefIcon = /* @__PURE__ */ React$1.forwardRef(function(t, n) {
	return /* @__PURE__ */ React$1.createElement(AntdIcon_default, _extends({}, t, {
		ref: n,
		icon: LoadingOutlined_default$1
	}));
});
process.env.NODE_ENV !== "production" && (RefIcon.displayName = "LoadingOutlined");
var LoadingOutlined_default = RefIcon;
function _OverloadYield(e, t) {
	this.v = e, this.k = t;
}
function _regeneratorDefine(e, t, n, r) {
	var i = Object.defineProperty;
	try {
		i({}, "", {});
	} catch {
		i = 0;
	}
	_regeneratorDefine = function(e, t, n, r) {
		function a(t, n) {
			_regeneratorDefine(e, t, function(e) {
				return this._invoke(t, n, e);
			});
		}
		t ? i ? i(e, t, {
			value: n,
			enumerable: !r,
			configurable: !r,
			writable: !r
		}) : e[t] = n : (a("next", 0), a("throw", 1), a("return", 2));
	}, _regeneratorDefine(e, t, n, r);
}
function _regenerator() {
	var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", i = n.toStringTag || "@@toStringTag";
	function a(n, r, i, a) {
		var c = r && r.prototype instanceof s ? r : s, l = Object.create(c.prototype);
		return _regeneratorDefine(l, "_invoke", function(n, r, i) {
			var a, s, c, l = 0, u = i || [], d = !1, f = {
				p: 0,
				n: 0,
				v: e,
				a: p,
				f: p.bind(e, 4),
				d: function(t, n) {
					return a = t, s = 0, c = e, f.n = n, o;
				}
			};
			function p(n, r) {
				for (s = n, c = r, t = 0; !d && l && !i && t < u.length; t++) {
					var i, a = u[t], p = f.p, m = a[2];
					n > 3 ? (i = m === r) && (c = a[(s = a[4]) ? 5 : (s = 3, 3)], a[4] = a[5] = e) : a[0] <= p && ((i = n < 2 && p < a[1]) ? (s = 0, f.v = r, f.n = a[1]) : p < m && (i = n < 3 || a[0] > r || r > m) && (a[4] = n, a[5] = r, f.n = m, s = 0));
				}
				if (i || n > 1) return o;
				throw d = !0, r;
			}
			return function(i, u, m) {
				if (l > 1) throw TypeError("Generator is already running");
				for (d && u === 1 && p(u, m), s = u, c = m; (t = s < 2 ? e : c) || !d;) {
					a || (s ? s < 3 ? (s > 1 && (f.n = -1), p(s, c)) : f.n = c : f.v = c);
					try {
						if (l = 2, a) {
							if (s || (i = "next"), t = a[i]) {
								if (!(t = t.call(a, c))) throw TypeError("iterator result is not an object");
								if (!t.done) return t;
								c = t.value, s < 2 && (s = 0);
							} else s === 1 && (t = a.return) && t.call(a), s < 2 && (c = TypeError("The iterator does not provide a '" + i + "' method"), s = 1);
							a = e;
						} else if ((t = (d = f.n < 0) ? c : n.call(r, f)) !== o) break;
					} catch (t) {
						a = e, s = 1, c = t;
					} finally {
						l = 1;
					}
				}
				return {
					value: t,
					done: d
				};
			};
		}(n, i, a), !0), l;
	}
	var o = {};
	function s() {}
	function c() {}
	function l() {}
	t = Object.getPrototypeOf;
	var u = [][r] ? t(t([][r]())) : (_regeneratorDefine(t = {}, r, function() {
		return this;
	}), t), d = l.prototype = s.prototype = Object.create(u);
	function f(e) {
		return Object.setPrototypeOf ? Object.setPrototypeOf(e, l) : (e.__proto__ = l, _regeneratorDefine(e, i, "GeneratorFunction")), e.prototype = Object.create(d), e;
	}
	return c.prototype = l, _regeneratorDefine(d, "constructor", l), _regeneratorDefine(l, "constructor", c), c.displayName = "GeneratorFunction", _regeneratorDefine(l, i, "GeneratorFunction"), _regeneratorDefine(d), _regeneratorDefine(d, i, "Generator"), _regeneratorDefine(d, r, function() {
		return this;
	}), _regeneratorDefine(d, "toString", function() {
		return "[object Generator]";
	}), (_regenerator = function() {
		return {
			w: a,
			m: f
		};
	})();
}
function AsyncIterator(e, t) {
	function n(r, i, a, o) {
		try {
			var s = e[r](i), c = s.value;
			return c instanceof _OverloadYield ? t.resolve(c.v).then(function(e) {
				n("next", e, a, o);
			}, function(e) {
				n("throw", e, a, o);
			}) : t.resolve(c).then(function(e) {
				s.value = e, a(s);
			}, function(e) {
				return n("throw", e, a, o);
			});
		} catch (e) {
			o(e);
		}
	}
	var r;
	this.next || (_regeneratorDefine(AsyncIterator.prototype), _regeneratorDefine(AsyncIterator.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
		return this;
	})), _regeneratorDefine(this, "_invoke", function(e, i, a) {
		function o() {
			return new t(function(t, r) {
				n(e, a, t, r);
			});
		}
		return r = r ? r.then(o, o) : o();
	}, !0);
}
function _regeneratorAsyncGen(e, t, n, r, i) {
	return new AsyncIterator(_regenerator().w(e, t, n, r), i || Promise);
}
function _regeneratorAsync(e, t, n, r, i) {
	var a = _regeneratorAsyncGen(e, t, n, r, i);
	return a.next().then(function(e) {
		return e.done ? e.value : a.next();
	});
}
function _regeneratorKeys(e) {
	var t = Object(e), n = [];
	for (var r in t) n.unshift(r);
	return function e() {
		for (; n.length;) if ((r = n.pop()) in t) return e.value = r, e.done = !1, e;
		return e.done = !0, e;
	};
}
function _regeneratorValues(e) {
	if (e != null) {
		var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
		if (t) return t.call(e);
		if (typeof e.next == "function") return e;
		if (!isNaN(e.length)) return { next: function() {
			return e && n >= e.length && (e = void 0), {
				value: e && e[n++],
				done: !e
			};
		} };
	}
	throw TypeError(_typeof(e) + " is not iterable");
}
function _regeneratorRuntime() {
	var e = _regenerator(), t = e.m(_regeneratorRuntime), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
	function r(e) {
		var t = typeof e == "function" && e.constructor;
		return !!t && (t === n || (t.displayName || t.name) === "GeneratorFunction");
	}
	var i = {
		throw: 1,
		return: 2,
		break: 3,
		continue: 3
	};
	function a(e) {
		var t, n;
		return function(r) {
			t || (t = {
				stop: function() {
					return n(r.a, 2);
				},
				catch: function() {
					return r.v;
				},
				abrupt: function(e, t) {
					return n(r.a, i[e], t);
				},
				delegateYield: function(e, i, a) {
					return t.resultName = i, n(r.d, _regeneratorValues(e), a);
				},
				finish: function(e) {
					return n(r.f, e);
				}
			}, n = function(e, n, i) {
				r.p = t.prev, r.n = t.next;
				try {
					return e(n, i);
				} finally {
					t.next = r.n;
				}
			}), t.resultName && (t[t.resultName] = r.v, t.resultName = void 0), t.sent = r.v, t.next = r.n;
			try {
				return e.call(this, t);
			} finally {
				r.p = t.prev, r.n = t.next;
			}
		};
	}
	return (_regeneratorRuntime = function() {
		return {
			wrap: function(t, n, r, i) {
				return e.w(a(t), n, r, i && i.reverse());
			},
			isGeneratorFunction: r,
			mark: e.m,
			awrap: function(e, t) {
				return new _OverloadYield(e, t);
			},
			AsyncIterator,
			async: function(e, t, n, i, o) {
				return (r(t) ? _regeneratorAsyncGen : _regeneratorAsync)(a(e), t, n, i, o);
			},
			keys: _regeneratorKeys,
			values: _regeneratorValues
		};
	})();
}
function asyncGeneratorStep(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function _asyncToGenerator(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				asyncGeneratorStep(a, r, i, o, s, "next", e);
			}
			function s(e) {
				asyncGeneratorStep(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
var fullClone = _objectSpread2({}, ReactDOM$1), version$1 = fullClone.version, reactRender = fullClone.render, unmountComponentAtNode = fullClone.unmountComponentAtNode, createRoot;
try {
	Number((version$1 || "").split(".")[0]) >= 18 && (createRoot = fullClone.createRoot);
} catch {}
function toggleWarning(e) {
	var t = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
	t && _typeof(t) === "object" && (t.usingClientEntryPoint = e);
}
var MARK = "__rc_react_root__";
function modernRender(e, t) {
	toggleWarning(!0);
	var n = t[MARK] || createRoot(t);
	toggleWarning(!1), n.render(e), t[MARK] = n;
}
function legacyRender(e, t) {
	reactRender?.(e, t);
}
function render(e, t) {
	if (createRoot) {
		modernRender(e, t);
		return;
	}
	legacyRender(e, t);
}
function modernUnmount(e) {
	return _modernUnmount.apply(this, arguments);
}
function _modernUnmount() {
	return _modernUnmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function e(t) {
		return _regeneratorRuntime().wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0: return e.abrupt("return", Promise.resolve().then(function() {
					var e;
					(e = t[MARK]) == null || e.unmount(), delete t[MARK];
				}));
				case 1:
				case "end": return e.stop();
			}
		}, e);
	})), _modernUnmount.apply(this, arguments);
}
function legacyUnmount(e) {
	unmountComponentAtNode(e);
}
function unmount(e) {
	return _unmount.apply(this, arguments);
}
function _unmount() {
	return _unmount = _asyncToGenerator(/* @__PURE__ */ _regeneratorRuntime().mark(function e(t) {
		return _regeneratorRuntime().wrap(function(e) {
			for (;;) switch (e.prev = e.next) {
				case 0:
					if (createRoot === void 0) {
						e.next = 2;
						break;
					}
					return e.abrupt("return", modernUnmount(t));
				case 2: legacyUnmount(t);
				case 3:
				case "end": return e.stop();
			}
		}, e);
	})), _unmount.apply(this, arguments);
}
var unstableRender = (t, n) => {
	if (process.env.NODE_ENV !== "production") {
		let t = Number.parseInt(React$1.version.split(".")[0], 10), n = Object.keys(ReactDOM$1);
		process.env.NODE_ENV !== "production" && warning_default(t < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
	}
	return render(t, n), () => unmount(n);
};
function unstableSetRender(e) {
	return e && (unstableRender = e), unstableRender;
}
function omit(e, t) {
	var n = Object.assign({}, e);
	return Array.isArray(t) && t.forEach(function(e) {
		delete n[e];
	}), n;
}
var isVisible_default = (function(e) {
	if (!e) return !1;
	if (e instanceof Element) {
		if (e.offsetParent) return !0;
		if (e.getBBox) {
			var t = e.getBBox(), n = t.width, r = t.height;
			if (n || r) return !0;
		}
		if (e.getBoundingClientRect) {
			var i = e.getBoundingClientRect(), a = i.width, o = i.height;
			if (a || o) return !0;
		}
	}
	return !1;
}), style_default$1 = genComponentStyleHook("Wave", (e) => {
	let { componentCls: t, colorPrimary: n } = e;
	return { [t]: {
		position: "absolute",
		background: "transparent",
		pointerEvents: "none",
		boxSizing: "border-box",
		color: `var(--wave-color, ${n})`,
		boxShadow: "0 0 0 0 currentcolor",
		opacity: .2,
		"&.wave-motion-appear": {
			transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
			"&-active": {
				boxShadow: "0 0 0 6px currentcolor",
				opacity: 0
			},
			"&.wave-quick": { transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",") }
		}
	} };
});
const TARGET_CLS = "ant-wave-target";
function isValidWaveColor(e) {
	return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && e !== "transparent" && e !== "canvastext";
}
function getTargetWaveColor(e) {
	let { borderTopColor: t, borderColor: n, backgroundColor: r } = getComputedStyle(e);
	return [
		t,
		n,
		r
	].find(isValidWaveColor) ?? null;
}
function validateNum(e) {
	return Number.isNaN(e) ? 0 : e;
}
var WaveEffect = (t) => {
	let { className: n, target: r, component: i, registerUnmount: a } = t, o = React$1.useRef(null), s = React$1.useRef(null);
	React$1.useEffect(() => {
		s.current = a();
	}, []);
	let [c, l] = React$1.useState(null), [u, d] = React$1.useState([]), [f, p] = React$1.useState(0), [m, h] = React$1.useState(0), [g, _] = React$1.useState(0), [v, y] = React$1.useState(0), [b, x] = React$1.useState(!1), S = {
		left: f,
		top: m,
		width: g,
		height: v,
		borderRadius: u.map((e) => `${e}px`).join(" ")
	};
	c && (S["--wave-color"] = c);
	function C() {
		let e = getComputedStyle(r);
		l(getTargetWaveColor(r));
		let t = e.position === "static", { borderLeftWidth: n, borderTopWidth: i } = e;
		p(t ? r.offsetLeft : validateNum(-Number.parseFloat(n))), h(t ? r.offsetTop : validateNum(-Number.parseFloat(i))), _(r.offsetWidth), y(r.offsetHeight);
		let { borderTopLeftRadius: a, borderTopRightRadius: o, borderBottomLeftRadius: s, borderBottomRightRadius: c } = e;
		d([
			a,
			o,
			c,
			s
		].map((e) => validateNum(Number.parseFloat(e))));
	}
	if (React$1.useEffect(() => {
		if (r) {
			let e = raf_default(() => {
				C(), x(!0);
			}), t;
			return typeof ResizeObserver < "u" && (t = new ResizeObserver(C), t.observe(r)), () => {
				raf_default.cancel(e), t?.disconnect();
			};
		}
	}, [r]), !b) return null;
	let w = (i === "Checkbox" || i === "Radio") && r?.classList.contains(TARGET_CLS);
	return /* @__PURE__ */ React$1.createElement(es_default, {
		visible: !0,
		motionAppear: !0,
		motionName: "wave-motion",
		motionDeadline: 5e3,
		onAppearEnd: (e, t) => {
			var n;
			if (t.deadline || t.propertyName === "opacity") {
				let e = o.current?.parentElement;
				(n = s.current) == null || n.call(s).then(() => {
					e?.remove();
				});
			}
			return !1;
		}
	}, ({ className: t }, r) => /* @__PURE__ */ React$1.createElement("div", {
		ref: composeRef(o, r),
		className: (0, import_classnames.default)(n, t, { "wave-quick": w }),
		style: S
	}));
}, WaveEffect_default = (t, n) => {
	let { component: r } = n;
	if (r === "Checkbox" && !t.querySelector("input")?.checked) return;
	let i = document.createElement("div");
	i.style.position = "absolute", i.style.left = "0px", i.style.top = "0px", t?.insertBefore(i, t?.firstChild);
	let a = unstableSetRender(), o = null;
	function s() {
		return o;
	}
	o = a(/* @__PURE__ */ React$1.createElement(WaveEffect, Object.assign({}, n, {
		target: t,
		registerUnmount: s
	})), i);
}, useWave_default = (t, n, r) => {
	let { wave: i } = React$1.useContext(ConfigContext), [, a, o] = useToken(), s = useEvent((e) => {
		let s = t.current;
		if (i?.disabled || !s) return;
		let c = s.querySelector(`.${TARGET_CLS}`) || s, { showEffect: l } = i || {};
		(l || WaveEffect_default)(c, {
			className: n,
			token: a,
			component: r,
			event: e,
			hashId: o
		});
	}), c = React$1.useRef(null);
	return (e) => {
		raf_default.cancel(c.current), c.current = raf_default(() => {
			s(e);
		});
	};
}, Wave = (e) => {
	let { children: n, disabled: r, component: i } = e, { getPrefixCls: a } = useContext(ConfigContext), s = useRef(null), c = a("wave"), [, l] = style_default$1(c), d = useWave_default(s, (0, import_classnames.default)(c, l), i);
	return React.useEffect(() => {
		let e = s.current;
		if (!e || e.nodeType !== window.Node.ELEMENT_NODE || r) return;
		let t = (t) => {
			!isVisible_default(t.target) || !e.getAttribute || e.getAttribute("disabled") || e.disabled || e.className.includes("disabled") && !e.className.includes("disabled:") || e.getAttribute("aria-disabled") === "true" || e.className.includes("-leave") || d(t);
		};
		return e.addEventListener("click", t, !0), () => {
			e.removeEventListener("click", t, !0);
		};
	}, [r]), /* @__PURE__ */ React.isValidElement(n) ? cloneElement(n, { ref: supportRef(n) ? composeRef(getNodeRef(n), s) : s }) : n ?? null;
};
process.env.NODE_ENV !== "production" && (Wave.displayName = "Wave");
var wave_default = Wave, useSize_default = (e) => {
	let n = React.useContext(SizeContext_default);
	return React.useMemo(() => e ? typeof e == "string" ? e ?? n : typeof e == "function" ? e(n) : n : n, [e, n]);
};
const SpaceCompactItemContext = /* @__PURE__ */ React$1.createContext(null), useCompactItemContext = (t, n) => {
	let r = React$1.useContext(SpaceCompactItemContext), i = React$1.useMemo(() => {
		if (!r) return "";
		let { compactDirection: e, isFirstItem: i, isLastItem: a } = r, o = e === "vertical" ? "-vertical-" : "-";
		return (0, import_classnames.default)(`${t}-compact${o}item`, {
			[`${t}-compact${o}first-item`]: i,
			[`${t}-compact${o}last-item`]: a,
			[`${t}-compact${o}item-rtl`]: n === "rtl"
		});
	}, [
		t,
		n,
		r
	]);
	return {
		compactSize: r?.compactSize,
		compactDirection: r?.compactDirection,
		compactItemClassnames: i
	};
};
var __rest$1 = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
};
const GroupSizeContext = /* @__PURE__ */ React$1.createContext(void 0);
var button_group_default = (t) => {
	let { getPrefixCls: n, direction: r } = React$1.useContext(ConfigContext), { prefixCls: i, size: a, className: o } = t, s = __rest$1(t, [
		"prefixCls",
		"size",
		"className"
	]), c = n("btn-group", i), [, , l] = useToken(), u = React$1.useMemo(() => {
		switch (a) {
			case "large": return "lg";
			case "small": return "sm";
			default: return "";
		}
	}, [a]);
	if (process.env.NODE_ENV !== "production") {
		let e = devUseWarning("Button.Group");
		e.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && e(!a || [
			"large",
			"small",
			"middle"
		].includes(a), "usage", "Invalid prop `size`.");
	}
	let d = (0, import_classnames.default)(c, {
		[`${c}-${u}`]: u,
		[`${c}-rtl`]: r === "rtl"
	}, o, l);
	return /* @__PURE__ */ React$1.createElement(GroupSizeContext.Provider, { value: a }, /* @__PURE__ */ React$1.createElement("div", Object.assign({}, s, { className: d })));
}, rxTwoCNChar = /^[\u4E00-\u9FA5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(e) {
	return typeof e == "string";
}
function isUnBorderedButtonVariant(e) {
	return e === "text" || e === "link";
}
function splitCNCharsBySpace(e, n) {
	if (e == null) return;
	let r = n ? " " : "";
	return typeof e != "string" && typeof e != "number" && isString(e.type) && isTwoCNChar(e.props.children) ? cloneElement(e, { children: e.props.children.split("").join(r) }) : isString(e) ? isTwoCNChar(e) ? /* @__PURE__ */ React.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ React.createElement("span", null, e) : isFragment(e) ? /* @__PURE__ */ React.createElement("span", null, e) : e;
}
function spaceChildren(e, n) {
	let r = !1, i = [];
	return React.Children.forEach(e, (e) => {
		let t = typeof e, n = t === "string" || t === "number";
		if (r && n) {
			let t = i.length - 1;
			i[t] = `${i[t]}${e}`;
		} else i.push(e);
		r = n;
	}), React.Children.map(i, (e) => splitCNCharsBySpace(e, n));
}
[
	"default",
	"primary",
	"danger"
].concat(_toConsumableArray(PresetColors));
var IconWrapper_default = /* @__PURE__ */ forwardRef((e, n) => {
	let { className: r, style: i, children: a, prefixCls: o } = e, s = (0, import_classnames.default)(`${o}-icon`, r);
	return /* @__PURE__ */ React.createElement("span", {
		ref: n,
		className: s,
		style: i
	}, a);
}), InnerLoadingIcon = /* @__PURE__ */ forwardRef((e, n) => {
	let { prefixCls: r, className: i, style: a, iconClassName: o } = e, s = (0, import_classnames.default)(`${r}-loading-icon`, i);
	return /* @__PURE__ */ React.createElement(IconWrapper_default, {
		prefixCls: r,
		className: s,
		style: a,
		ref: n
	}, /* @__PURE__ */ React.createElement(LoadingOutlined_default, { className: o }));
}), getCollapsedWidth = () => ({
	width: 0,
	opacity: 0,
	transform: "scale(0)"
}), getRealWidth = (e) => ({
	width: e.scrollWidth,
	opacity: 1,
	transform: "scale(1)"
}), DefaultLoadingIcon_default = (e) => {
	let { prefixCls: n, loading: r, existIcon: i, className: a, style: o, mount: s } = e, c = !!r;
	return i ? /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
		prefixCls: n,
		className: a,
		style: o
	}) : /* @__PURE__ */ React.createElement(es_default, {
		visible: c,
		motionName: `${n}-loading-icon-motion`,
		motionAppear: !s,
		motionEnter: !s,
		motionLeave: !s,
		removeOnLeave: !0,
		onAppearStart: getCollapsedWidth,
		onAppearActive: getRealWidth,
		onEnterStart: getCollapsedWidth,
		onEnterActive: getRealWidth,
		onLeaveStart: getRealWidth,
		onLeaveActive: getCollapsedWidth
	}, ({ className: e, style: r }, i) => {
		let s = Object.assign(Object.assign({}, o), r);
		return /* @__PURE__ */ React.createElement(InnerLoadingIcon, {
			prefixCls: n,
			className: (0, import_classnames.default)(a, e),
			style: s,
			ref: i
		});
	});
}, genButtonBorderStyle = (e, t) => ({ [`> span, > ${e}`]: {
	"&:not(:last-child)": { [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineEndColor: t } } },
	"&:not(:first-child)": { [`&, & > ${e}`]: { "&:not(:disabled)": { borderInlineStartColor: t } } }
} }), group_default = (e) => {
	let { componentCls: t, fontSize: n, lineWidth: r, groupBorderColor: i, colorErrorHover: a } = e;
	return { [`${t}-group`]: [
		{
			position: "relative",
			display: "inline-flex",
			[`> span, > ${t}`]: {
				"&:not(:last-child)": { [`&, & > ${t}`]: {
					borderStartEndRadius: 0,
					borderEndEndRadius: 0
				} },
				"&:not(:first-child)": {
					marginInlineStart: e.calc(r).mul(-1).equal(),
					[`&, & > ${t}`]: {
						borderStartStartRadius: 0,
						borderEndStartRadius: 0
					}
				}
			},
			[t]: {
				position: "relative",
				zIndex: 1,
				"&:hover, &:focus, &:active": { zIndex: 2 },
				"&[disabled]": { zIndex: 0 }
			},
			[`${t}-icon-only`]: { fontSize: n }
		},
		genButtonBorderStyle(`${t}-primary`, i),
		genButtonBorderStyle(`${t}-danger`, a)
	] };
}, _excluded = ["b"], _excluded2 = ["v"], getRoundNumber = function(e) {
	return Math.round(Number(e || 0));
}, convertHsb2Hsv = function(e) {
	if (e instanceof FastColor) return e;
	if (e && _typeof(e) === "object" && "h" in e && "b" in e) {
		var t = e, n = t.b;
		return _objectSpread2(_objectSpread2({}, _objectWithoutProperties(t, _excluded)), {}, { v: n });
	}
	return typeof e == "string" && /hsb/.test(e) ? e.replace(/hsb/, "hsv") : e;
}, Color = /* @__PURE__ */ function(e) {
	_inherits(n, e);
	var t = _createSuper(n);
	function n(e) {
		return _classCallCheck(this, n), t.call(this, convertHsb2Hsv(e));
	}
	return _createClass(n, [{
		key: "toHsbString",
		value: function() {
			var e = this.toHsb(), t = getRoundNumber(e.s * 100), n = getRoundNumber(e.b * 100), r = getRoundNumber(e.h), i = e.a, a = `hsb(${r}, ${t}%, ${n}%)`, o = `hsba(${r}, ${t}%, ${n}%, ${i.toFixed(i === 0 ? 0 : 2)})`;
			return i === 1 ? a : o;
		}
	}, {
		key: "toHsb",
		value: function() {
			var e = this.toHsv(), t = e.v;
			return _objectSpread2(_objectSpread2({}, _objectWithoutProperties(e, _excluded2)), {}, {
				b: t,
				a: this.a
			});
		}
	}]), n;
}(FastColor), ColorPickerPrefixCls = "rc-color-picker", generateColor = function(e) {
	return e instanceof Color ? e : new Color(e);
}, defaultColor = generateColor("#1677ff"), calculateColor = function(e) {
	var t = e.offset, n = e.targetRef, r = e.containerRef, i = e.color, a = e.type, o = r.current.getBoundingClientRect(), s = o.width, c = o.height, l = n.current.getBoundingClientRect(), u = l.width, d = l.height, f = u / 2, p = d / 2, m = (t.x + f) / s, h = 1 - (t.y + p) / c, g = i.toHsb(), _ = m, v = (t.x + f) / s * 360;
	if (a) switch (a) {
		case "hue": return generateColor(_objectSpread2(_objectSpread2({}, g), {}, { h: v <= 0 ? 0 : v }));
		case "alpha": return generateColor(_objectSpread2(_objectSpread2({}, g), {}, { a: _ <= 0 ? 0 : _ }));
	}
	return generateColor({
		h: g.h,
		s: m <= 0 ? 0 : m,
		b: h >= 1 ? 1 : h,
		a: g.a
	});
}, calcOffset = function(e, t) {
	var n = e.toHsb();
	switch (t) {
		case "hue": return {
			x: n.h / 360 * 100,
			y: 50
		};
		case "alpha": return {
			x: e.a * 100,
			y: 50
		};
		default: return {
			x: n.s * 100,
			y: (1 - n.b) * 100
		};
	}
}, ColorBlock_default = function(e) {
	var n = e.color, r = e.prefixCls, i = e.className, a = e.style, o = e.onClick, s = `${r}-color-block`;
	return /* @__PURE__ */ React.createElement("div", {
		className: (0, import_classnames.default)(s, i),
		style: a,
		onClick: o
	}, /* @__PURE__ */ React.createElement("div", {
		className: `${s}-inner`,
		style: { background: n }
	}));
};
function getPosition(e) {
	var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
	return {
		pageX: t.pageX - n,
		pageY: t.pageY - r
	};
}
function useColorDrag(e) {
	var t = e.targetRef, n = e.containerRef, r = e.direction, i = e.onDragChange, a = e.onDragChangeComplete, o = e.calculate, c = e.color, l = e.disabledDrag, f = _slicedToArray(useState({
		x: 0,
		y: 0
	}), 2), p = f[0], m = f[1], h = useRef(null), g = useRef(null);
	useEffect(function() {
		m(o());
	}, [c]), useEffect(function() {
		return function() {
			document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", g.current), h.current = null, g.current = null;
		};
	}, []);
	var _ = function(e) {
		var a = getPosition(e), o = a.pageX, s = a.pageY, c = n.current.getBoundingClientRect(), l = c.x, u = c.y, d = c.width, f = c.height, m = t.current.getBoundingClientRect(), h = m.width, g = m.height, _ = h / 2, v = g / 2, y = Math.max(0, Math.min(o - l, d)) - _, b = Math.max(0, Math.min(s - u, f)) - v, x = {
			x: y,
			y: r === "x" ? p.y : b
		};
		if (h === 0 && g === 0 || h !== g) return !1;
		i?.(x);
	}, v = function(e) {
		e.preventDefault(), _(e);
	}, y = function(e) {
		e.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", g.current), h.current = null, g.current = null, a?.();
	};
	return [p, function(e) {
		document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), !l && (_(e), document.addEventListener("mousemove", v), document.addEventListener("mouseup", y), document.addEventListener("touchmove", v), document.addEventListener("touchend", y), h.current = v, g.current = y);
	}];
}
var useColorDrag_default = useColorDrag, Handler_default = function(e) {
	var n = e.size, r = n === void 0 ? "default" : n, i = e.color, a = e.prefixCls;
	return /* @__PURE__ */ React.createElement("div", {
		className: (0, import_classnames.default)(`${a}-handler`, _defineProperty({}, `${a}-handler-sm`, r === "small")),
		style: { backgroundColor: i }
	});
}, Palette_default = function(e) {
	var n = e.children, r = e.style, i = e.prefixCls;
	return /* @__PURE__ */ React.createElement("div", {
		className: `${i}-palette`,
		style: _objectSpread2({ position: "relative" }, r)
	}, n);
}, Transform_default = /* @__PURE__ */ forwardRef(function(e, n) {
	var r = e.children, i = e.x, a = e.y;
	return /* @__PURE__ */ React.createElement("div", {
		ref: n,
		style: {
			position: "absolute",
			left: `${i}%`,
			top: `${a}%`,
			zIndex: 1,
			transform: "translate(-50%, -50%)"
		}
	}, r);
}), Picker_default = function(e) {
	var n = e.color, r = e.onChange, i = e.prefixCls, a = e.onChangeComplete, o = e.disabled, s = useRef(), c = useRef(), l = useRef(n), d = _slicedToArray(useColorDrag_default({
		color: n,
		containerRef: s,
		targetRef: c,
		calculate: function() {
			return calcOffset(n);
		},
		onDragChange: useEvent(function(e) {
			var t = calculateColor({
				offset: e,
				targetRef: c,
				containerRef: s,
				color: n
			});
			l.current = t, r(t);
		}),
		onDragChangeComplete: function() {
			return a?.(l.current);
		},
		disabledDrag: o
	}), 2), f = d[0], p = d[1];
	return /* @__PURE__ */ React.createElement("div", {
		ref: s,
		className: `${i}-select`,
		onMouseDown: p,
		onTouchStart: p
	}, /* @__PURE__ */ React.createElement(Palette_default, { prefixCls: i }, /* @__PURE__ */ React.createElement(Transform_default, {
		x: f.x,
		y: f.y,
		ref: c
	}, /* @__PURE__ */ React.createElement(Handler_default, {
		color: n.toRgbString(),
		prefixCls: i
	})), /* @__PURE__ */ React.createElement("div", {
		className: `${i}-saturation`,
		style: {
			backgroundColor: `hsl(${n.toHsb().h},100%, 50%)`,
			backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
		}
	})));
}, useColorState_default = function(e, t) {
	var n = _slicedToArray(useMergedState(e, { value: t }), 2), r = n[0], i = n[1];
	return [useMemo(function() {
		return generateColor(r);
	}, [r]), i];
}, Gradient_default = function(e) {
	var n = e.colors, r = e.children, i = e.direction, a = i === void 0 ? "to right" : i, o = e.type, s = e.prefixCls, c = useMemo(function() {
		return n.map(function(e, t) {
			var r = generateColor(e);
			return o === "alpha" && t === n.length - 1 && (r = new Color(r.setA(1))), r.toRgbString();
		}).join(",");
	}, [n, o]);
	return /* @__PURE__ */ React.createElement("div", {
		className: `${s}-gradient`,
		style: {
			position: "absolute",
			inset: 0,
			background: `linear-gradient(${a}, ${c})`
		}
	}, r);
}, Slider_default = function(e) {
	var n = e.prefixCls, r = e.colors, i = e.disabled, a = e.onChange, o = e.onChangeComplete, s = e.color, c = e.type, l = useRef(), d = useRef(), f = useRef(s), p = function(e) {
		return c === "hue" ? e.getHue() : e.a * 100;
	}, m = _slicedToArray(useColorDrag_default({
		color: s,
		targetRef: d,
		containerRef: l,
		calculate: function() {
			return calcOffset(s, c);
		},
		onDragChange: useEvent(function(e) {
			var t = calculateColor({
				offset: e,
				targetRef: d,
				containerRef: l,
				color: s,
				type: c
			});
			f.current = t, a(p(t));
		}),
		onDragChangeComplete: function() {
			o(p(f.current));
		},
		direction: "x",
		disabledDrag: i
	}), 2), h = m[0], g = m[1], _ = React.useMemo(function() {
		if (c === "hue") {
			var e = s.toHsb();
			return e.s = 1, e.b = 1, e.a = 1, new Color(e);
		}
		return s;
	}, [s, c]), v = React.useMemo(function() {
		return r.map(function(e) {
			return `${e.color} ${e.percent}%`;
		});
	}, [r]);
	return /* @__PURE__ */ React.createElement("div", {
		ref: l,
		className: (0, import_classnames.default)(`${n}-slider`, `${n}-slider-${c}`),
		onMouseDown: g,
		onTouchStart: g
	}, /* @__PURE__ */ React.createElement(Palette_default, { prefixCls: n }, /* @__PURE__ */ React.createElement(Transform_default, {
		x: h.x,
		y: h.y,
		ref: d
	}, /* @__PURE__ */ React.createElement(Handler_default, {
		size: "small",
		color: _.toHexString(),
		prefixCls: n
	})), /* @__PURE__ */ React.createElement(Gradient_default, {
		colors: v,
		type: c,
		prefixCls: n
	})));
};
function useComponent(t) {
	return React$1.useMemo(function() {
		return [(t || {}).slider || Slider_default];
	}, [t]);
}
var HUE_COLORS = [
	{
		color: "rgb(255, 0, 0)",
		percent: 0
	},
	{
		color: "rgb(255, 255, 0)",
		percent: 17
	},
	{
		color: "rgb(0, 255, 0)",
		percent: 33
	},
	{
		color: "rgb(0, 255, 255)",
		percent: 50
	},
	{
		color: "rgb(0, 0, 255)",
		percent: 67
	},
	{
		color: "rgb(255, 0, 255)",
		percent: 83
	},
	{
		color: "rgb(255, 0, 0)",
		percent: 100
	}
], ColorPicker = /* @__PURE__ */ forwardRef(function(e, n) {
	var r = e.value, i = e.defaultValue, a = e.prefixCls, o = a === void 0 ? ColorPickerPrefixCls : a, s = e.onChange, c = e.onChangeComplete, u = e.className, d = e.style, f = e.panelRender, p = e.disabledAlpha, m = p === void 0 ? !1 : p, h = e.disabled, g = h === void 0 ? !1 : h, _ = e.components, v = _slicedToArray(useComponent(_), 1)[0], y = _slicedToArray(useColorState_default(i || defaultColor, r), 2), b = y[0], x = y[1], S = useMemo(function() {
		return b.setA(1).toRgbString();
	}, [b]), C = function(e, t) {
		r || x(e), s?.(e, t);
	}, w = function(e) {
		return new Color(b.setHue(e));
	}, T = function(e) {
		return new Color(b.setA(e / 100));
	}, D = function(e) {
		C(w(e), {
			type: "hue",
			value: e
		});
	}, O = function(e) {
		C(T(e), {
			type: "alpha",
			value: e
		});
	}, k = function(e) {
		c && c(w(e));
	}, A = function(e) {
		c && c(T(e));
	}, j = (0, import_classnames.default)(`${o}-panel`, u, _defineProperty({}, `${o}-panel-disabled`, g)), M = {
		prefixCls: o,
		disabled: g,
		color: b
	}, N = /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Picker_default, _extends({ onChange: C }, M, { onChangeComplete: c })), /* @__PURE__ */ React.createElement("div", { className: `${o}-slider-container` }, /* @__PURE__ */ React.createElement("div", { className: (0, import_classnames.default)(`${o}-slider-group`, _defineProperty({}, `${o}-slider-group-disabled-alpha`, m)) }, /* @__PURE__ */ React.createElement(v, _extends({}, M, {
		type: "hue",
		colors: HUE_COLORS,
		min: 0,
		max: 359,
		value: b.getHue(),
		onChange: D,
		onChangeComplete: k
	})), !m && /* @__PURE__ */ React.createElement(v, _extends({}, M, {
		type: "alpha",
		colors: [{
			percent: 0,
			color: "rgba(255, 0, 4, 0)"
		}, {
			percent: 100,
			color: S
		}],
		min: 0,
		max: 100,
		value: b.a * 100,
		onChange: O,
		onChangeComplete: A
	}))), /* @__PURE__ */ React.createElement(ColorBlock_default, {
		color: b.toRgbString(),
		prefixCls: o
	})));
	return /* @__PURE__ */ React.createElement("div", {
		className: j,
		style: d,
		ref: n
	}, typeof f == "function" ? f(N) : N);
});
process.env.NODE_ENV !== "production" && (ColorPicker.displayName = "ColorPicker");
const toHexFormat = (e, t) => e?.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6) || "", getHex = (e, t) => e ? toHexFormat(e, t) : "";
let AggregationColor = /* @__PURE__ */ function() {
	function e(t) {
		if (_classCallCheck(this, e), this.cleared = !1, t instanceof e) {
			this.metaColor = t.metaColor.clone(), this.colors = t.colors?.map((t) => ({
				color: new e(t.color),
				percent: t.percent
			})), this.cleared = t.cleared;
			return;
		}
		let n = Array.isArray(t);
		n && t.length ? (this.colors = t.map(({ color: t, percent: n }) => ({
			color: new e(t),
			percent: n
		})), this.metaColor = new Color(this.colors[0].color.metaColor)) : this.metaColor = new Color(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
	}
	return _createClass(e, [
		{
			key: "toHsb",
			value: function() {
				return this.metaColor.toHsb();
			}
		},
		{
			key: "toHsbString",
			value: function() {
				return this.metaColor.toHsbString();
			}
		},
		{
			key: "toHex",
			value: function() {
				return getHex(this.toHexString(), this.metaColor.a < 1);
			}
		},
		{
			key: "toHexString",
			value: function() {
				return this.metaColor.toHexString();
			}
		},
		{
			key: "toRgb",
			value: function() {
				return this.metaColor.toRgb();
			}
		},
		{
			key: "toRgbString",
			value: function() {
				return this.metaColor.toRgbString();
			}
		},
		{
			key: "isGradient",
			value: function() {
				return !!this.colors && !this.cleared;
			}
		},
		{
			key: "getColors",
			value: function() {
				return this.colors || [{
					color: this,
					percent: 0
				}];
			}
		},
		{
			key: "toCssString",
			value: function() {
				let { colors: e } = this;
				return e ? `linear-gradient(90deg, ${e.map((e) => `${e.color.toRgbString()} ${e.percent}%`).join(", ")})` : this.metaColor.toRgbString();
			}
		},
		{
			key: "equals",
			value: function(e) {
				return !e || this.isGradient() !== e.isGradient() ? !1 : this.isGradient() ? this.colors.length === e.colors.length && this.colors.every((t, n) => {
					let r = e.colors[n];
					return t.percent === r.percent && t.color.equals(r.color);
				}) : this.toHexString() === e.toHexString();
			}
		}
	]);
}();
const isBright = (e, t) => {
	let { r: n, g: r, b: i, a } = e.toRgb(), o = new Color(e.toRgbString()).onBackground(t).toHsv();
	return a <= .5 ? o.v > .5 : n * .299 + r * .587 + i * .114 > 192;
}, prepareToken = (e) => {
	let { paddingInline: t, onlyIconSize: n } = e;
	return merge(e, {
		buttonPaddingHorizontal: t,
		buttonPaddingVertical: 0,
		buttonIconOnlyFontSize: n
	});
}, prepareComponentToken = (e) => {
	let t = e.contentFontSize ?? e.fontSize, n = e.contentFontSizeSM ?? e.fontSize, r = e.contentFontSizeLG ?? e.fontSizeLG, i = e.contentLineHeight ?? getLineHeight(t), a = e.contentLineHeightSM ?? getLineHeight(n), o = e.contentLineHeightLG ?? getLineHeight(r), s = isBright(new AggregationColor(e.colorBgSolid), "#fff") ? "#000" : "#fff", c = PresetColors.reduce((t, n) => Object.assign(Object.assign({}, t), { [`${n}ShadowColor`]: `0 ${unit$1(e.controlOutlineWidth)} 0 ${getAlphaColor_default(e[`${n}1`], e.colorBgContainer)}` }), {});
	return Object.assign(Object.assign({}, c), {
		fontWeight: 400,
		iconGap: e.marginXS,
		defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
		primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
		dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
		primaryColor: e.colorTextLightSolid,
		dangerColor: e.colorTextLightSolid,
		borderColorDisabled: e.colorBorder,
		defaultGhostColor: e.colorBgContainer,
		ghostBg: "transparent",
		defaultGhostBorderColor: e.colorBgContainer,
		paddingInline: e.paddingContentHorizontal - e.lineWidth,
		paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
		paddingInlineSM: 8 - e.lineWidth,
		onlyIconSize: "inherit",
		onlyIconSizeSM: "inherit",
		onlyIconSizeLG: "inherit",
		groupBorderColor: e.colorPrimaryHover,
		linkHoverBg: "transparent",
		textTextColor: e.colorText,
		textTextHoverColor: e.colorText,
		textTextActiveColor: e.colorText,
		textHoverBg: e.colorFillTertiary,
		defaultColor: e.colorText,
		defaultBg: e.colorBgContainer,
		defaultBorderColor: e.colorBorder,
		defaultBorderColorDisabled: e.colorBorder,
		defaultHoverBg: e.colorBgContainer,
		defaultHoverColor: e.colorPrimaryHover,
		defaultHoverBorderColor: e.colorPrimaryHover,
		defaultActiveBg: e.colorBgContainer,
		defaultActiveColor: e.colorPrimaryActive,
		defaultActiveBorderColor: e.colorPrimaryActive,
		solidTextColor: s,
		contentFontSize: t,
		contentFontSizeSM: n,
		contentFontSizeLG: r,
		contentLineHeight: i,
		contentLineHeightSM: a,
		contentLineHeightLG: o,
		paddingBlock: Math.max((e.controlHeight - t * i) / 2 - e.lineWidth, 0),
		paddingBlockSM: Math.max((e.controlHeightSM - n * a) / 2 - e.lineWidth, 0),
		paddingBlockLG: Math.max((e.controlHeightLG - r * o) / 2 - e.lineWidth, 0)
	});
};
var genSharedButtonStyle = (e) => {
	let { componentCls: t, iconCls: n, fontWeight: r, opacityLoading: i, motionDurationSlow: a, motionEaseInOut: o, iconGap: s, calc: c } = e;
	return { [t]: {
		outline: "none",
		position: "relative",
		display: "inline-flex",
		gap: s,
		alignItems: "center",
		justifyContent: "center",
		fontWeight: r,
		whiteSpace: "nowrap",
		textAlign: "center",
		backgroundImage: "none",
		background: "transparent",
		border: `${unit$1(e.lineWidth)} ${e.lineType} transparent`,
		cursor: "pointer",
		transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
		userSelect: "none",
		touchAction: "manipulation",
		color: e.colorText,
		"&:disabled > *": { pointerEvents: "none" },
		[`${t}-icon > svg`]: resetIcon(),
		"> a": { color: "currentColor" },
		"&:not(:disabled)": genFocusStyle(e),
		[`&${t}-two-chinese-chars::first-letter`]: { letterSpacing: "0.34em" },
		[`&${t}-two-chinese-chars > *:not(${n})`]: {
			marginInlineEnd: "-0.34em",
			letterSpacing: "0.34em"
		},
		[`&${t}-icon-only`]: {
			paddingInline: 0,
			[`&${t}-compact-item`]: { flex: "none" }
		},
		[`&${t}-loading`]: {
			opacity: i,
			cursor: "default"
		},
		[`${t}-loading-icon`]: { transition: [
			"width",
			"opacity",
			"margin"
		].map((e) => `${e} ${a} ${o}`).join(",") },
		[`&:not(${t}-icon-end)`]: { [`${t}-loading-icon-motion`]: {
			"&-appear-start, &-enter-start": { marginInlineEnd: c(s).mul(-1).equal() },
			"&-appear-active, &-enter-active": { marginInlineEnd: 0 },
			"&-leave-start": { marginInlineEnd: 0 },
			"&-leave-active": { marginInlineEnd: c(s).mul(-1).equal() }
		} },
		"&-icon-end": {
			flexDirection: "row-reverse",
			[`${t}-loading-icon-motion`]: {
				"&-appear-start, &-enter-start": { marginInlineStart: c(s).mul(-1).equal() },
				"&-appear-active, &-enter-active": { marginInlineStart: 0 },
				"&-leave-start": { marginInlineStart: 0 },
				"&-leave-active": { marginInlineStart: c(s).mul(-1).equal() }
			}
		}
	} };
}, genHoverActiveButtonStyle = (e, t, n) => ({ [`&:not(:disabled):not(${e}-disabled)`]: {
	"&:hover": t,
	"&:active": n
} }), genCircleButtonStyle = (e) => ({
	minWidth: e.controlHeight,
	paddingInline: 0,
	borderRadius: "50%"
}), genDisabledStyle = (e) => ({
	cursor: "not-allowed",
	borderColor: e.borderColorDisabled,
	color: e.colorTextDisabled,
	background: e.colorBgContainerDisabled,
	boxShadow: "none"
}), genGhostButtonStyle = (e, t, n, r, i, a, o, s) => ({ [`&${e}-background-ghost`]: Object.assign(Object.assign({
	color: n || void 0,
	background: t,
	borderColor: r || void 0,
	boxShadow: "none"
}, genHoverActiveButtonStyle(e, Object.assign({ background: t }, o), Object.assign({ background: t }, s))), { "&:disabled": {
	cursor: "not-allowed",
	color: i || void 0,
	borderColor: a || void 0
} }) }), genSolidDisabledButtonStyle = (e) => ({ [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, genDisabledStyle(e)) }), genPureDisabledButtonStyle = (e) => ({ [`&:disabled, &${e.componentCls}-disabled`]: {
	cursor: "not-allowed",
	color: e.colorTextDisabled
} }), genVariantButtonStyle = (e, t, n, r) => {
	let i = r && ["link", "text"].includes(r) ? genPureDisabledButtonStyle : genSolidDisabledButtonStyle;
	return Object.assign(Object.assign({}, i(e)), genHoverActiveButtonStyle(e.componentCls, t, n));
}, genSolidButtonStyle = (e, t, n, r, i) => ({ [`&${e.componentCls}-variant-solid`]: Object.assign({
	color: t,
	background: n
}, genVariantButtonStyle(e, r, i)) }), genOutlinedDashedButtonStyle = (e, t, n, r, i) => ({ [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
	borderColor: t,
	background: n
}, genVariantButtonStyle(e, r, i)) }), genDashedButtonStyle = (e) => ({ [`&${e.componentCls}-variant-dashed`]: { borderStyle: "dashed" } }), genFilledButtonStyle = (e, t, n, r) => ({ [`&${e.componentCls}-variant-filled`]: Object.assign({
	boxShadow: "none",
	background: t
}, genVariantButtonStyle(e, n, r)) }), genTextLinkButtonStyle = (e, t, n, r, i) => ({ [`&${e.componentCls}-variant-${n}`]: Object.assign({
	color: t,
	boxShadow: "none"
}, genVariantButtonStyle(e, r, i, n)) }), genPresetColorStyle = (e) => {
	let { componentCls: t } = e;
	return PresetColors.reduce((n, r) => {
		let i = e[`${r}6`], a = e[`${r}1`], o = e[`${r}5`], s = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
		return Object.assign(Object.assign({}, n), { [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
			color: i,
			boxShadow: e[`${r}ShadowColor`]
		}, genSolidButtonStyle(e, e.colorTextLightSolid, i, { background: o }, { background: l })), genOutlinedDashedButtonStyle(e, i, e.colorBgContainer, {
			color: o,
			borderColor: o,
			background: e.colorBgContainer
		}, {
			color: l,
			borderColor: l,
			background: e.colorBgContainer
		})), genDashedButtonStyle(e)), genFilledButtonStyle(e, a, {
			color: i,
			background: s
		}, {
			color: i,
			background: c
		})), genTextLinkButtonStyle(e, i, "link", { color: o }, { color: l })), genTextLinkButtonStyle(e, i, "text", {
			color: o,
			background: a
		}, {
			color: l,
			background: c
		})) });
	}, {});
}, genDefaultButtonStyle = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
	color: e.defaultColor,
	boxShadow: e.defaultShadow
}, genSolidButtonStyle(e, e.solidTextColor, e.colorBgSolid, {
	color: e.solidTextColor,
	background: e.colorBgSolidHover
}, {
	color: e.solidTextColor,
	background: e.colorBgSolidActive
})), genDashedButtonStyle(e)), genFilledButtonStyle(e, e.colorFillTertiary, {
	color: e.defaultColor,
	background: e.colorFillSecondary
}, {
	color: e.defaultColor,
	background: e.colorFill
})), genGhostButtonStyle(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), genTextLinkButtonStyle(e, e.textTextColor, "link", {
	color: e.colorLinkHover,
	background: e.linkHoverBg
}, { color: e.colorLinkActive })), genPrimaryButtonStyle = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
	color: e.colorPrimary,
	boxShadow: e.primaryShadow
}, genOutlinedDashedButtonStyle(e, e.colorPrimary, e.colorBgContainer, {
	color: e.colorPrimaryTextHover,
	borderColor: e.colorPrimaryHover,
	background: e.colorBgContainer
}, {
	color: e.colorPrimaryTextActive,
	borderColor: e.colorPrimaryActive,
	background: e.colorBgContainer
})), genDashedButtonStyle(e)), genFilledButtonStyle(e, e.colorPrimaryBg, {
	color: e.colorPrimary,
	background: e.colorPrimaryBgHover
}, {
	color: e.colorPrimary,
	background: e.colorPrimaryBorder
})), genTextLinkButtonStyle(e, e.colorPrimaryText, "text", {
	color: e.colorPrimaryTextHover,
	background: e.colorPrimaryBg
}, {
	color: e.colorPrimaryTextActive,
	background: e.colorPrimaryBorder
})), genTextLinkButtonStyle(e, e.colorPrimaryText, "link", {
	color: e.colorPrimaryTextHover,
	background: e.linkHoverBg
}, { color: e.colorPrimaryTextActive })), genGhostButtonStyle(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
	color: e.colorPrimaryHover,
	borderColor: e.colorPrimaryHover
}, {
	color: e.colorPrimaryActive,
	borderColor: e.colorPrimaryActive
})), genDangerousStyle = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
	color: e.colorError,
	boxShadow: e.dangerShadow
}, genSolidButtonStyle(e, e.dangerColor, e.colorError, { background: e.colorErrorHover }, { background: e.colorErrorActive })), genOutlinedDashedButtonStyle(e, e.colorError, e.colorBgContainer, {
	color: e.colorErrorHover,
	borderColor: e.colorErrorBorderHover
}, {
	color: e.colorErrorActive,
	borderColor: e.colorErrorActive
})), genDashedButtonStyle(e)), genFilledButtonStyle(e, e.colorErrorBg, {
	color: e.colorError,
	background: e.colorErrorBgFilledHover
}, {
	color: e.colorError,
	background: e.colorErrorBgActive
})), genTextLinkButtonStyle(e, e.colorError, "text", {
	color: e.colorErrorHover,
	background: e.colorErrorBg
}, {
	color: e.colorErrorHover,
	background: e.colorErrorBgActive
})), genTextLinkButtonStyle(e, e.colorError, "link", { color: e.colorErrorHover }, { color: e.colorErrorActive })), genGhostButtonStyle(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
	color: e.colorErrorHover,
	borderColor: e.colorErrorHover
}, {
	color: e.colorErrorActive,
	borderColor: e.colorErrorActive
})), genLinkStyle = (e) => Object.assign(Object.assign({}, genTextLinkButtonStyle(e, e.colorLink, "link", { color: e.colorLinkHover }, { color: e.colorLinkActive })), genGhostButtonStyle(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
	color: e.colorInfoHover,
	borderColor: e.colorInfoHover
}, {
	color: e.colorInfoActive,
	borderColor: e.colorInfoActive
})), genColorButtonStyle = (e) => {
	let { componentCls: t } = e;
	return Object.assign({
		[`${t}-color-default`]: genDefaultButtonStyle(e),
		[`${t}-color-primary`]: genPrimaryButtonStyle(e),
		[`${t}-color-dangerous`]: genDangerousStyle(e),
		[`${t}-color-link`]: genLinkStyle(e)
	}, genPresetColorStyle(e));
}, genCompatibleButtonStyle = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, genOutlinedDashedButtonStyle(e, e.defaultBorderColor, e.defaultBg, {
	color: e.defaultHoverColor,
	borderColor: e.defaultHoverBorderColor,
	background: e.defaultHoverBg
}, {
	color: e.defaultActiveColor,
	borderColor: e.defaultActiveBorderColor,
	background: e.defaultActiveBg
})), genTextLinkButtonStyle(e, e.textTextColor, "text", {
	color: e.textTextHoverColor,
	background: e.textHoverBg
}, {
	color: e.textTextActiveColor,
	background: e.colorBgTextActive
})), genSolidButtonStyle(e, e.primaryColor, e.colorPrimary, {
	background: e.colorPrimaryHover,
	color: e.primaryColor
}, {
	background: e.colorPrimaryActive,
	color: e.primaryColor
})), genTextLinkButtonStyle(e, e.colorLink, "link", {
	color: e.colorLinkHover,
	background: e.linkHoverBg
}, { color: e.colorLinkActive })), genButtonStyle = (e, t = "") => {
	let { componentCls: n, controlHeight: r, fontSize: i, borderRadius: a, buttonPaddingHorizontal: o, iconCls: s, buttonPaddingVertical: c, buttonIconOnlyFontSize: l } = e;
	return [
		{ [t]: {
			fontSize: i,
			height: r,
			padding: `${unit$1(c)} ${unit$1(o)}`,
			borderRadius: a,
			[`&${n}-icon-only`]: {
				width: r,
				[s]: { fontSize: l }
			}
		} },
		{ [`${n}${n}-circle${t}`]: genCircleButtonStyle(e) },
		{ [`${n}${n}-round${t}`]: {
			borderRadius: e.controlHeight,
			[`&:not(${n}-icon-only)`]: { paddingInline: e.buttonPaddingHorizontal }
		} }
	];
}, genSizeBaseButtonStyle = (e) => genButtonStyle(merge(e, { fontSize: e.contentFontSize }), e.componentCls), genSizeSmallButtonStyle = (e) => genButtonStyle(merge(e, {
	controlHeight: e.controlHeightSM,
	fontSize: e.contentFontSizeSM,
	padding: e.paddingXS,
	buttonPaddingHorizontal: e.paddingInlineSM,
	buttonPaddingVertical: 0,
	borderRadius: e.borderRadiusSM,
	buttonIconOnlyFontSize: e.onlyIconSizeSM
}), `${e.componentCls}-sm`), genSizeLargeButtonStyle = (e) => genButtonStyle(merge(e, {
	controlHeight: e.controlHeightLG,
	fontSize: e.contentFontSizeLG,
	buttonPaddingHorizontal: e.paddingInlineLG,
	buttonPaddingVertical: 0,
	borderRadius: e.borderRadiusLG,
	buttonIconOnlyFontSize: e.onlyIconSizeLG
}), `${e.componentCls}-lg`), genBlockButtonStyle = (e) => {
	let { componentCls: t } = e;
	return { [t]: { [`&${t}-block`]: { width: "100%" } } };
}, style_default = genStyleHooks("Button", (e) => {
	let t = prepareToken(e);
	return [
		genSharedButtonStyle(t),
		genSizeBaseButtonStyle(t),
		genSizeSmallButtonStyle(t),
		genSizeLargeButtonStyle(t),
		genBlockButtonStyle(t),
		genColorButtonStyle(t),
		genCompatibleButtonStyle(t),
		group_default(t)
	];
}, prepareComponentToken, { unitless: {
	fontWeight: !0,
	contentLineHeight: !0,
	contentLineHeightSM: !0,
	contentLineHeightLG: !0
} });
function compactItemBorder(e, t, n, r) {
	let { focusElCls: i, focus: a, borderElCls: o } = n, s = o ? "> *" : "", c = [
		"hover",
		a ? "focus" : null,
		"active"
	].filter(Boolean).map((e) => `&:${e} ${s}`).join(",");
	return {
		[`&-item:not(${t}-last-item)`]: { marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal() },
		[`&-item:not(${r}-status-success)`]: { zIndex: 2 },
		"&-item": Object.assign(Object.assign({ [c]: { zIndex: 3 } }, i ? { [`&${i}`]: { zIndex: 3 } } : {}), { [`&[disabled] ${s}`]: { zIndex: 0 } })
	};
}
function compactItemBorderRadius(e, t, n) {
	let { borderElCls: r } = n, i = r ? `> ${r}` : "";
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item) ${i}`]: { borderRadius: 0 },
		[`&-item:not(${t}-last-item)${t}-first-item`]: { [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
			borderStartEndRadius: 0,
			borderEndEndRadius: 0
		} },
		[`&-item:not(${t}-first-item)${t}-last-item`]: { [`& ${i}, &${e}-sm ${i}, &${e}-lg ${i}`]: {
			borderStartStartRadius: 0,
			borderEndStartRadius: 0
		} }
	};
}
function genCompactItemStyle(e, t = { focus: !0 }) {
	let { componentCls: n } = e, { componentCls: r } = t, i = r || n, a = `${i}-compact`;
	return { [a]: Object.assign(Object.assign({}, compactItemBorder(e, a, t, i)), compactItemBorderRadius(i, a, t)) };
}
function compactItemVerticalBorder(e, t, n) {
	return {
		[`&-item:not(${t}-last-item)`]: { marginBottom: e.calc(e.lineWidth).mul(-1).equal() },
		[`&-item:not(${n}-status-success)`]: { zIndex: 2 },
		"&-item": {
			"&:hover,&:focus,&:active": { zIndex: 3 },
			"&[disabled]": { zIndex: 0 }
		}
	};
}
function compactItemBorderVerticalRadius(e, t) {
	return {
		[`&-item:not(${t}-first-item):not(${t}-last-item)`]: { borderRadius: 0 },
		[`&-item${t}-first-item:not(${t}-last-item)`]: { [`&, &${e}-sm, &${e}-lg`]: {
			borderEndEndRadius: 0,
			borderEndStartRadius: 0
		} },
		[`&-item${t}-last-item:not(${t}-first-item)`]: { [`&, &${e}-sm, &${e}-lg`]: {
			borderStartStartRadius: 0,
			borderStartEndRadius: 0
		} }
	};
}
function genCompactItemVerticalStyle(e) {
	let t = `${e.componentCls}-compact-vertical`;
	return { [t]: Object.assign(Object.assign({}, compactItemVerticalBorder(e, t, e.componentCls)), compactItemBorderVerticalRadius(e.componentCls, t)) };
}
var genButtonCompactStyle = (e) => {
	let { componentCls: t, colorPrimaryHover: n, lineWidth: r, calc: i } = e, a = i(r).mul(-1).equal(), o = (e) => {
		let i = `${t}-compact${e ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
		return { [`${i} + ${i}::before`]: {
			position: "absolute",
			top: e ? a : 0,
			insetInlineStart: e ? 0 : a,
			backgroundColor: n,
			content: "\"\"",
			width: e ? "100%" : r,
			height: e ? r : "100%"
		} };
	};
	return Object.assign(Object.assign({}, o()), o(!0));
}, compact_default = genSubStyleComponent(["Button", "compact"], (e) => {
	let t = prepareToken(e);
	return [
		genCompactItemStyle(t),
		genCompactItemVerticalStyle(t),
		genButtonCompactStyle(t)
	];
}, prepareComponentToken), __rest = function(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
};
function getLoadingConfig(e) {
	if (typeof e == "object" && e) {
		let t = e?.delay;
		return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
			loading: t <= 0,
			delay: t
		};
	}
	return {
		loading: !!e,
		delay: 0
	};
}
var ButtonTypeMap = {
	default: ["default", "outlined"],
	primary: ["primary", "solid"],
	dashed: ["default", "dashed"],
	link: ["link", "link"],
	text: ["default", "text"]
}, Button = /* @__PURE__ */ React.forwardRef((e, r) => {
	let { loading: i = !1, prefixCls: a, color: c, variant: f, type: p, danger: m = !1, shape: h, size: g, styles: _, disabled: v, className: y, rootClassName: b, children: x, icon: S, iconPosition: C = "start", ghost: w = !1, block: T = !1, htmlType: E = "button", classNames: D, style: O = {}, autoInsertSpace: k, autoFocus: A } = e, j = __rest(e, [
		"loading",
		"prefixCls",
		"color",
		"variant",
		"type",
		"danger",
		"shape",
		"size",
		"styles",
		"disabled",
		"className",
		"rootClassName",
		"children",
		"icon",
		"iconPosition",
		"ghost",
		"block",
		"htmlType",
		"classNames",
		"style",
		"autoInsertSpace",
		"autoFocus"
	]), M = p || "default", { button: N } = React.useContext(ConfigContext), P = h || N?.shape || "default", [F, I] = useMemo(() => {
		if (c && f) return [c, f];
		if (p || m) {
			let e = ButtonTypeMap[M] || [];
			return m ? ["danger", e[1]] : e;
		}
		return N?.color && N?.variant ? [N.color, N.variant] : ["default", "outlined"];
	}, [
		c,
		f,
		p,
		m,
		N?.color,
		N?.variant,
		M
	]), L = F === "danger" ? "dangerous" : F, { getPrefixCls: R, direction: z, autoInsertSpace: B, className: V, style: H, classNames: U, styles: ee } = useComponentConfig("button"), W = k ?? B ?? !0, G = R("btn", a), [K, q, J] = style_default(G), te = useContext(DisabledContext_default), Y = v ?? te, ne = useContext(GroupSizeContext), X = useMemo(() => getLoadingConfig(i), [i]), [Z, re] = useState(X.loading), [Q, ie] = useState(!1), $ = useRef(null), ae = useComposeRef(r, $), oe = Children.count(x) === 1 && !S && !isUnBorderedButtonVariant(I), se = useRef(!0);
	React.useEffect(() => (se.current = !1, () => {
		se.current = !0;
	}), []), useLayoutEffect_default(() => {
		let e = null;
		X.delay > 0 ? e = setTimeout(() => {
			e = null, re(!0);
		}, X.delay) : re(X.loading);
		function t() {
			e &&= (clearTimeout(e), null);
		}
		return t;
	}, [X.delay, X.loading]), useEffect(() => {
		if (!$.current || !W) return;
		let e = $.current.textContent || "";
		oe && isTwoCNChar(e) ? Q || ie(!0) : Q && ie(!1);
	}), useEffect(() => {
		A && $.current && $.current.focus();
	}, []);
	let ce = React.useCallback((t) => {
		var n;
		if (Z || Y) {
			t.preventDefault();
			return;
		}
		(n = e.onClick) == null || n.call(e, ("href" in e, t));
	}, [
		e.onClick,
		Z,
		Y
	]);
	if (process.env.NODE_ENV !== "production") {
		let e = devUseWarning("Button");
		process.env.NODE_ENV !== "production" && e(!(typeof S == "string" && S.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${S}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && e(!(w && isUnBorderedButtonVariant(I)), "usage", "`link` or `text` button can't be a `ghost` button.");
	}
	let { compactSize: le, compactItemClassnames: ue } = useCompactItemContext(G, z), de = {
		large: "lg",
		small: "sm",
		middle: void 0
	}, fe = useSize_default((e) => g ?? le ?? ne ?? e), pe = fe ? de[fe] ?? "" : "", me = Z ? "loading" : S, he = omit(j, ["navigate"]), ge = (0, import_classnames.default)(G, q, J, {
		[`${G}-${P}`]: P !== "default" && P,
		[`${G}-${M}`]: M,
		[`${G}-dangerous`]: m,
		[`${G}-color-${L}`]: L,
		[`${G}-variant-${I}`]: I,
		[`${G}-${pe}`]: pe,
		[`${G}-icon-only`]: !x && x !== 0 && !!me,
		[`${G}-background-ghost`]: w && !isUnBorderedButtonVariant(I),
		[`${G}-loading`]: Z,
		[`${G}-two-chinese-chars`]: Q && W && !Z,
		[`${G}-block`]: T,
		[`${G}-rtl`]: z === "rtl",
		[`${G}-icon-end`]: C === "end"
	}, ue, y, b, V), _e = Object.assign(Object.assign({}, H), O), ve = (0, import_classnames.default)(D?.icon, U.icon), ye = Object.assign(Object.assign({}, _?.icon || {}), ee.icon || {}), be = (e) => /* @__PURE__ */ React.createElement(IconWrapper_default, {
		prefixCls: G,
		className: ve,
		style: ye
	}, e), xe = () => /* @__PURE__ */ React.createElement(DefaultLoadingIcon_default, {
		existIcon: !!S,
		prefixCls: G,
		loading: Z,
		mount: se.current
	}), Se;
	Se = S && !Z ? be(S) : i && typeof i == "object" && i.icon ? be(i.icon) : xe();
	let Ce = x || x === 0 ? spaceChildren(x, oe && W) : null;
	if (he.href !== void 0) return K(/* @__PURE__ */ React.createElement("a", Object.assign({}, he, {
		className: (0, import_classnames.default)(ge, { [`${G}-disabled`]: Y }),
		href: Y ? void 0 : he.href,
		style: _e,
		onClick: ce,
		ref: ae,
		tabIndex: Y ? -1 : 0,
		"aria-disabled": Y
	}), Se, Ce));
	let we = /* @__PURE__ */ React.createElement("button", Object.assign({}, j, {
		type: E,
		className: ge,
		style: _e,
		onClick: ce,
		disabled: Y,
		ref: ae
	}), Se, Ce, ue && /* @__PURE__ */ React.createElement(compact_default, { prefixCls: G }));
	return isUnBorderedButtonVariant(I) || (we = /* @__PURE__ */ React.createElement(wave_default, {
		component: "Button",
		disabled: Z
	}, we)), K(we);
});
Button.Group = button_group_default, Button.__ANT_BUTTON = !0, process.env.NODE_ENV !== "production" && (Button.displayName = "Button");
var button_default = Button;
const CustomButton = ({ label: e, ...t }) => /* @__PURE__ */ jsx(button_default, {
	...t,
	children: e
});
export { CustomButton };
