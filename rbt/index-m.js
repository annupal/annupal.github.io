var Ac = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n)
};
var C = (e, t, n) => (Ac(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    Q = (e, t, n) => {
        if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
        t instanceof WeakSet ? t.add(e) : t.set(e, n)
    },
    $ = (e, t, n, r) => (Ac(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var na = (e, t, n, r) => ({
        set _(i) {
            $(e, t, i, n)
        },
        get _() {
            return C(e, t, r)
        }
    }),
    le = (e, t, n) => (Ac(e, t, "access private method"), n);

function $y(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const i in r)
                if (i !== "default" && !(i in e)) {
                    const o = Object.getOwnPropertyDescriptor(r, i);
                    o && Object.defineProperty(e, i, o.get ? o : {
                        enumerable: !0,
                        get: () => r[i]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
    new MutationObserver(i => {
        for (const o of i)
            if (o.type === "childList")
                for (const s of o.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(i) {
        const o = {};
        return i.integrity && (o.integrity = i.integrity), i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? o.credentials = "include" : i.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o
    }

    function r(i) {
        if (i.ep) return;
        i.ep = !0;
        const o = n(i);
        fetch(i.href, o)
    }
})();

function $i(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Uy = {
        exports: {}
    },
    Vu = {},
    By = {
        exports: {}
    },
    ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ll = Symbol.for("react.element"),
    nx = Symbol.for("react.portal"),
    rx = Symbol.for("react.fragment"),
    ix = Symbol.for("react.strict_mode"),
    ox = Symbol.for("react.profiler"),
    sx = Symbol.for("react.provider"),
    lx = Symbol.for("react.context"),
    ax = Symbol.for("react.forward_ref"),
    ux = Symbol.for("react.suspense"),
    cx = Symbol.for("react.memo"),
    fx = Symbol.for("react.lazy"),
    qp = Symbol.iterator;

function dx(e) {
    return e === null || typeof e != "object" ? null : (e = qp && e[qp] || e["@@iterator"], typeof e == "function" ? e : null)
}
var zy = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Hy = Object.assign,
    Wy = {};

function Yo(e, t, n) {
    this.props = e, this.context = t, this.refs = Wy, this.updater = n || zy
}
Yo.prototype.isReactComponent = {};
Yo.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Yo.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Vy() {}
Vy.prototype = Yo.prototype;

function Th(e, t, n) {
    this.props = e, this.context = t, this.refs = Wy, this.updater = n || zy
}
var Rh = Th.prototype = new Vy;
Rh.constructor = Th;
Hy(Rh, Yo.prototype);
Rh.isPureReactComponent = !0;
var Qp = Array.isArray,
    qy = Object.prototype.hasOwnProperty,
    _h = {
        current: null
    },
    Qy = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Ky(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    if (t != null)
        for (r in t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (o = "" + t.key), t) qy.call(t, r) && !Qy.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1) i.children = n;
    else if (1 < l) {
        for (var a = Array(l), c = 0; c < l; c++) a[c] = arguments[c + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps, l) i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: Ll,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: _h.current
    }
}

function hx(e, t) {
    return {
        $$typeof: Ll,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Ph(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ll
}

function px(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Kp = /\/+/g;

function Mc(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? px("" + e.key) : t.toString(36)
}

function La(e, t, n, r, i) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else switch (o) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Ll:
                case nx:
                    s = !0
            }
    }
    if (s) return s = e, i = i(s), e = r === "" ? "." + Mc(s, 0) : r, Qp(i) ? (n = "", e != null && (n = e.replace(Kp, "$&/") + "/"), La(i, t, n, "", function(c) {
        return c
    })) : i != null && (Ph(i) && (i = hx(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Kp, "$&/") + "/") + e)), t.push(i)), 1;
    if (s = 0, r = r === "" ? "." : r + ":", Qp(e))
        for (var l = 0; l < e.length; l++) {
            o = e[l];
            var a = r + Mc(o, l);
            s += La(o, t, n, a, i)
        } else if (a = dx(e), typeof a == "function")
            for (e = a.call(e), l = 0; !(o = e.next()).done;) o = o.value, a = r + Mc(o, l++), s += La(o, t, n, a, i);
        else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return s
}

function ra(e, t, n) {
    if (e == null) return e;
    var r = [],
        i = 0;
    return La(e, r, "", "", function(o) {
        return t.call(n, o, i++)
    }), r
}

function mx(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Pt = {
        current: null
    },
    ja = {
        transition: null
    },
    gx = {
        ReactCurrentDispatcher: Pt,
        ReactCurrentBatchConfig: ja,
        ReactCurrentOwner: _h
    };
ue.Children = {
    map: ra,
    forEach: function(e, t, n) {
        ra(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ra(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ra(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Ph(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
ue.Component = Yo;
ue.Fragment = rx;
ue.Profiler = ox;
ue.PureComponent = Th;
ue.StrictMode = ix;
ue.Suspense = ux;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gx;
ue.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Hy({}, e.props),
        i = e.key,
        o = e.ref,
        s = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref, s = _h.current), t.key !== void 0 && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
        for (a in t) qy.call(t, a) && !Qy.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var c = 0; c < a; c++) l[c] = arguments[c + 2];
        r.children = l
    }
    return {
        $$typeof: Ll,
        type: e.type,
        key: i,
        ref: o,
        props: r,
        _owner: s
    }
};
ue.createContext = function(e) {
    return e = {
        $$typeof: lx,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: sx,
        _context: e
    }, e.Consumer = e
};
ue.createElement = Ky;
ue.createFactory = function(e) {
    var t = Ky.bind(null, e);
    return t.type = e, t
};
ue.createRef = function() {
    return {
        current: null
    }
};
ue.forwardRef = function(e) {
    return {
        $$typeof: ax,
        render: e
    }
};
ue.isValidElement = Ph;
ue.lazy = function(e) {
    return {
        $$typeof: fx,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: mx
    }
};
ue.memo = function(e, t) {
    return {
        $$typeof: cx,
        type: e,
        compare: t === void 0 ? null : t
    }
};
ue.startTransition = function(e) {
    var t = ja.transition;
    ja.transition = {};
    try {
        e()
    } finally {
        ja.transition = t
    }
};
ue.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
ue.useCallback = function(e, t) {
    return Pt.current.useCallback(e, t)
};
ue.useContext = function(e) {
    return Pt.current.useContext(e)
};
ue.useDebugValue = function() {};
ue.useDeferredValue = function(e) {
    return Pt.current.useDeferredValue(e)
};
ue.useEffect = function(e, t) {
    return Pt.current.useEffect(e, t)
};
ue.useId = function() {
    return Pt.current.useId()
};
ue.useImperativeHandle = function(e, t, n) {
    return Pt.current.useImperativeHandle(e, t, n)
};
ue.useInsertionEffect = function(e, t) {
    return Pt.current.useInsertionEffect(e, t)
};
ue.useLayoutEffect = function(e, t) {
    return Pt.current.useLayoutEffect(e, t)
};
ue.useMemo = function(e, t) {
    return Pt.current.useMemo(e, t)
};
ue.useReducer = function(e, t, n) {
    return Pt.current.useReducer(e, t, n)
};
ue.useRef = function(e) {
    return Pt.current.useRef(e)
};
ue.useState = function(e) {
    return Pt.current.useState(e)
};
ue.useSyncExternalStore = function(e, t, n) {
    return Pt.current.useSyncExternalStore(e, t, n)
};
ue.useTransition = function() {
    return Pt.current.useTransition()
};
ue.version = "18.2.0";
By.exports = ue;
var g = By.exports;
const L = $i(g),
    Fo = $y({
        __proto__: null,
        default: L
    }, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yx = g,
    vx = Symbol.for("react.element"),
    wx = Symbol.for("react.fragment"),
    xx = Object.prototype.hasOwnProperty,
    Ex = yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Sx = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Gy(e, t, n) {
    var r, i = {},
        o = null,
        s = null;
    n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) xx.call(t, r) && !Sx.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: vx,
        type: e,
        key: o,
        ref: s,
        props: i,
        _owner: Ex.current
    }
}
Vu.Fragment = wx;
Vu.jsx = Gy;
Vu.jsxs = Gy;
Uy.exports = Vu;
var d = Uy.exports,
    If = {},
    Yy = {
        exports: {}
    },
    Qt = {},
    Xy = {
        exports: {}
    },
    Jy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(F, U) {
        var Y = F.length;
        F.push(U);
        e: for (; 0 < Y;) {
            var q = Y - 1 >>> 1,
                ye = F[q];
            if (0 < i(ye, U)) F[q] = U, F[Y] = ye, Y = q;
            else break e
        }
    }

    function n(F) {
        return F.length === 0 ? null : F[0]
    }

    function r(F) {
        if (F.length === 0) return null;
        var U = F[0],
            Y = F.pop();
        if (Y !== U) {
            F[0] = Y;
            e: for (var q = 0, ye = F.length, ee = ye >>> 1; q < ee;) {
                var _e = 2 * (q + 1) - 1,
                    at = F[_e],
                    Qe = _e + 1,
                    bt = F[Qe];
                if (0 > i(at, Y)) Qe < ye && 0 > i(bt, at) ? (F[q] = bt, F[Qe] = Y, q = Qe) : (F[q] = at, F[_e] = Y, q = _e);
                else if (Qe < ye && 0 > i(bt, Y)) F[q] = bt, F[Qe] = Y, q = Qe;
                else break e
            }
        }
        return U
    }

    function i(F, U) {
        var Y = F.sortIndex - U.sortIndex;
        return Y !== 0 ? Y : F.id - U.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var s = Date,
            l = s.now();
        e.unstable_now = function() {
            return s.now() - l
        }
    }
    var a = [],
        c = [],
        u = 1,
        f = null,
        h = 3,
        x = !1,
        y = !1,
        w = !1,
        E = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function v(F) {
        for (var U = n(c); U !== null;) {
            if (U.callback === null) r(c);
            else if (U.startTime <= F) r(c), U.sortIndex = U.expirationTime, t(a, U);
            else break;
            U = n(c)
        }
    }

    function R(F) {
        if (w = !1, v(F), !y)
            if (n(a) !== null) y = !0, St(P);
            else {
                var U = n(c);
                U !== null && ce(R, U.startTime - F)
            }
    }

    function P(F, U) {
        y = !1, w && (w = !1, m(D), D = -1), x = !0;
        var Y = h;
        try {
            for (v(U), f = n(a); f !== null && (!(f.expirationTime > U) || F && !te());) {
                var q = f.callback;
                if (typeof q == "function") {
                    f.callback = null, h = f.priorityLevel;
                    var ye = q(f.expirationTime <= U);
                    U = e.unstable_now(), typeof ye == "function" ? f.callback = ye : f === n(a) && r(a), v(U)
                } else r(a);
                f = n(a)
            }
            if (f !== null) var ee = !0;
            else {
                var _e = n(c);
                _e !== null && ce(R, _e.startTime - U), ee = !1
            }
            return ee
        } finally {
            f = null, h = Y, x = !1
        }
    }
    var S = !1,
        N = null,
        D = -1,
        M = 5,
        B = -1;

    function te() {
        return !(e.unstable_now() - B < M)
    }

    function ge() {
        if (N !== null) {
            var F = e.unstable_now();
            B = F;
            var U = !0;
            try {
                U = N(!0, F)
            } finally {
                U ? pe() : (S = !1, N = null)
            }
        } else S = !1
    }
    var pe;
    if (typeof p == "function") pe = function() {
        p(ge)
    };
    else if (typeof MessageChannel < "u") {
        var et = new MessageChannel,
            $t = et.port2;
        et.port1.onmessage = ge, pe = function() {
            $t.postMessage(null)
        }
    } else pe = function() {
        E(ge, 0)
    };

    function St(F) {
        N = F, S || (S = !0, pe())
    }

    function ce(F, U) {
        D = E(function() {
            F(e.unstable_now())
        }, U)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
        F.callback = null
    }, e.unstable_continueExecution = function() {
        y || x || (y = !0, St(P))
    }, e.unstable_forceFrameRate = function(F) {
        0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < F ? Math.floor(1e3 / F) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return h
    }, e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }, e.unstable_next = function(F) {
        switch (h) {
            case 1:
            case 2:
            case 3:
                var U = 3;
                break;
            default:
                U = h
        }
        var Y = h;
        h = U;
        try {
            return F()
        } finally {
            h = Y
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(F, U) {
        switch (F) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                F = 3
        }
        var Y = h;
        h = F;
        try {
            return U()
        } finally {
            h = Y
        }
    }, e.unstable_scheduleCallback = function(F, U, Y) {
        var q = e.unstable_now();
        switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? q + Y : q) : Y = q, F) {
            case 1:
                var ye = -1;
                break;
            case 2:
                ye = 250;
                break;
            case 5:
                ye = 1073741823;
                break;
            case 4:
                ye = 1e4;
                break;
            default:
                ye = 5e3
        }
        return ye = Y + ye, F = {
            id: u++,
            callback: U,
            priorityLevel: F,
            startTime: Y,
            expirationTime: ye,
            sortIndex: -1
        }, Y > q ? (F.sortIndex = Y, t(c, F), n(a) === null && F === n(c) && (w ? (m(D), D = -1) : w = !0, ce(R, Y - q))) : (F.sortIndex = ye, t(a, F), y || x || (y = !0, St(P))), F
    }, e.unstable_shouldYield = te, e.unstable_wrapCallback = function(F) {
        var U = h;
        return function() {
            var Y = h;
            h = U;
            try {
                return F.apply(this, arguments)
            } finally {
                h = Y
            }
        }
    }
})(Jy);
Xy.exports = Jy;
var bx = Xy.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zy = g,
    qt = bx;

function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ev = new Set,
    Js = {};

function Ui(e, t) {
    $o(e, t), $o(e + "Capture", t)
}

function $o(e, t) {
    for (Js[e] = t, e = 0; e < t.length; e++) ev.add(t[e])
}
var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Ff = Object.prototype.hasOwnProperty,
    Cx = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Gp = {},
    Yp = {};

function Tx(e) {
    return Ff.call(Yp, e) ? !0 : Ff.call(Gp, e) ? !1 : Cx.test(e) ? Yp[e] = !0 : (Gp[e] = !0, !1)
}

function Rx(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function _x(e, t, n, r) {
    if (t === null || typeof t > "u" || Rx(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Nt(e, t, n, r, i, o, s) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = s
}
var ht = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    ht[e] = new Nt(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    ht[t] = new Nt(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    ht[e] = new Nt(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    ht[e] = new Nt(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    ht[e] = new Nt(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    ht[e] = new Nt(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    ht[e] = new Nt(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    ht[e] = new Nt(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    ht[e] = new Nt(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Nh = /[\-:]([a-z])/g;

function Oh(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Nh, Oh);
    ht[t] = new Nt(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Nh, Oh);
    ht[t] = new Nt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Nh, Oh);
    ht[t] = new Nt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    ht[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
ht.xlinkHref = new Nt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    ht[e] = new Nt(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function kh(e, t, n, r) {
    var i = ht.hasOwnProperty(t) ? ht[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_x(t, n, i, r) && (n = null), r || i === null ? Tx(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(t) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var hr = Zy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ia = Symbol.for("react.element"),
    eo = Symbol.for("react.portal"),
    to = Symbol.for("react.fragment"),
    Dh = Symbol.for("react.strict_mode"),
    $f = Symbol.for("react.profiler"),
    tv = Symbol.for("react.provider"),
    nv = Symbol.for("react.context"),
    Lh = Symbol.for("react.forward_ref"),
    Uf = Symbol.for("react.suspense"),
    Bf = Symbol.for("react.suspense_list"),
    jh = Symbol.for("react.memo"),
    _r = Symbol.for("react.lazy"),
    rv = Symbol.for("react.offscreen"),
    Xp = Symbol.iterator;

function cs(e) {
    return e === null || typeof e != "object" ? null : (e = Xp && e[Xp] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Ae = Object.assign,
    Ic;

function Ds(e) {
    if (Ic === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ic = t && t[1] || ""
    }
    return `
` + Ic + e
}
var Fc = !1;

function $c(e, t) {
    if (!e || Fc) return "";
    Fc = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), o = r.stack.split(`
`), s = i.length - 1, l = o.length - 1; 1 <= s && 0 <= l && i[s] !== o[l];) l--;
            for (; 1 <= s && 0 <= l; s--, l--)
                if (i[s] !== o[l]) {
                    if (s !== 1 || l !== 1)
                        do
                            if (s--, l--, 0 > l || i[s] !== o[l]) {
                                var a = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a
                            } while (1 <= s && 0 <= l);
                    break
                }
        }
    } finally {
        Fc = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Ds(e) : ""
}

function Px(e) {
    switch (e.tag) {
        case 5:
            return Ds(e.type);
        case 16:
            return Ds("Lazy");
        case 13:
            return Ds("Suspense");
        case 19:
            return Ds("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = $c(e.type, !1), e;
        case 11:
            return e = $c(e.type.render, !1), e;
        case 1:
            return e = $c(e.type, !0), e;
        default:
            return ""
    }
}

function zf(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case to:
            return "Fragment";
        case eo:
            return "Portal";
        case $f:
            return "Profiler";
        case Dh:
            return "StrictMode";
        case Uf:
            return "Suspense";
        case Bf:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case nv:
            return (e.displayName || "Context") + ".Consumer";
        case tv:
            return (e._context.displayName || "Context") + ".Provider";
        case Lh:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case jh:
            return t = e.displayName || null, t !== null ? t : zf(e.type) || "Memo";
        case _r:
            t = e._payload, e = e._init;
            try {
                return zf(e(t))
            } catch {}
    }
    return null
}

function Nx(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return zf(t);
        case 8:
            return t === Dh ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function ei(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function iv(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function Ox(e) {
    var t = iv(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get,
            o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(s) {
                r = "" + s, o.call(this, s)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(s) {
                r = "" + s
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function oa(e) {
    e._valueTracker || (e._valueTracker = Ox(e))
}

function ov(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = iv(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function su(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function Hf(e, t) {
    var n = t.checked;
    return Ae({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Jp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = ei(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function sv(e, t) {
    t = t.checked, t != null && kh(e, "checked", t, !1)
}

function Wf(e, t) {
    sv(e, t);
    var n = ei(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Vf(e, t.type, n) : t.hasOwnProperty("defaultValue") && Vf(e, t.type, ei(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Zp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function Vf(e, t, n) {
    (t !== "number" || su(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Ls = Array.isArray;

function go(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + ei(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0, r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}

function qf(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
    return Ae({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function em(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(j(92));
            if (Ls(n)) {
                if (1 < n.length) throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: ei(n)
    }
}

function lv(e, t) {
    var n = ei(t.value),
        r = ei(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function tm(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function av(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function Qf(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? av(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var sa, uv = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (sa = sa || document.createElement("div"), sa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = sa.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Zs(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Us = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    kx = ["Webkit", "ms", "Moz", "O"];
Object.keys(Us).forEach(function(e) {
    kx.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), Us[t] = Us[e]
    })
});

function cv(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Us.hasOwnProperty(e) && Us[e] ? ("" + t).trim() : t + "px"
}

function fv(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                i = cv(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
        }
}
var Dx = Ae({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function Kf(e, t) {
    if (t) {
        if (Dx[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(j(62))
    }
}

function Gf(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var Yf = null;

function Ah(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var Xf = null,
    yo = null,
    vo = null;

function nm(e) {
    if (e = Ml(e)) {
        if (typeof Xf != "function") throw Error(j(280));
        var t = e.stateNode;
        t && (t = Yu(t), Xf(e.stateNode, e.type, t))
    }
}

function dv(e) {
    yo ? vo ? vo.push(e) : vo = [e] : yo = e
}

function hv() {
    if (yo) {
        var e = yo,
            t = vo;
        if (vo = yo = null, nm(e), t)
            for (e = 0; e < t.length; e++) nm(t[e])
    }
}

function pv(e, t) {
    return e(t)
}

function mv() {}
var Uc = !1;

function gv(e, t, n) {
    if (Uc) return e(t, n);
    Uc = !0;
    try {
        return pv(e, t, n)
    } finally {
        Uc = !1, (yo !== null || vo !== null) && (mv(), hv())
    }
}

function el(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Yu(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
    return n
}
var Jf = !1;
if (sr) try {
    var fs = {};
    Object.defineProperty(fs, "passive", {
        get: function() {
            Jf = !0
        }
    }), window.addEventListener("test", fs, fs), window.removeEventListener("test", fs, fs)
} catch {
    Jf = !1
}

function Lx(e, t, n, r, i, o, s, l, a) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (u) {
        this.onError(u)
    }
}
var Bs = !1,
    lu = null,
    au = !1,
    Zf = null,
    jx = {
        onError: function(e) {
            Bs = !0, lu = e
        }
    };

function Ax(e, t, n, r, i, o, s, l, a) {
    Bs = !1, lu = null, Lx.apply(jx, arguments)
}

function Mx(e, t, n, r, i, o, s, l, a) {
    if (Ax.apply(this, arguments), Bs) {
        if (Bs) {
            var c = lu;
            Bs = !1, lu = null
        } else throw Error(j(198));
        au || (au = !0, Zf = c)
    }
}

function Bi(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function yv(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function rm(e) {
    if (Bi(e) !== e) throw Error(j(188))
}

function Ix(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Bi(e), t === null) throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var i = n.return;
        if (i === null) break;
        var o = i.alternate;
        if (o === null) {
            if (r = i.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === o.child) {
            for (o = i.child; o;) {
                if (o === n) return rm(i), e;
                if (o === r) return rm(i), t;
                o = o.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return) n = i, r = o;
        else {
            for (var s = !1, l = i.child; l;) {
                if (l === n) {
                    s = !0, n = i, r = o;
                    break
                }
                if (l === r) {
                    s = !0, r = i, n = o;
                    break
                }
                l = l.sibling
            }
            if (!s) {
                for (l = o.child; l;) {
                    if (l === n) {
                        s = !0, n = o, r = i;
                        break
                    }
                    if (l === r) {
                        s = !0, r = o, n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!s) throw Error(j(189))
            }
        }
        if (n.alternate !== r) throw Error(j(190))
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t
}

function vv(e) {
    return e = Ix(e), e !== null ? wv(e) : null
}

function wv(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = wv(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var xv = qt.unstable_scheduleCallback,
    im = qt.unstable_cancelCallback,
    Fx = qt.unstable_shouldYield,
    $x = qt.unstable_requestPaint,
    qe = qt.unstable_now,
    Ux = qt.unstable_getCurrentPriorityLevel,
    Mh = qt.unstable_ImmediatePriority,
    Ev = qt.unstable_UserBlockingPriority,
    uu = qt.unstable_NormalPriority,
    Bx = qt.unstable_LowPriority,
    Sv = qt.unstable_IdlePriority,
    qu = null,
    Un = null;

function zx(e) {
    if (Un && typeof Un.onCommitFiberRoot == "function") try {
        Un.onCommitFiberRoot(qu, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var En = Math.clz32 ? Math.clz32 : Vx,
    Hx = Math.log,
    Wx = Math.LN2;

function Vx(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Hx(e) / Wx | 0) | 0
}
var la = 64,
    aa = 4194304;

function js(e) {
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
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function cu(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        i = e.suspendedLanes,
        o = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var l = s & ~i;
        l !== 0 ? r = js(l) : (o &= s, o !== 0 && (r = js(o)))
    } else s = n & ~i, s !== 0 ? r = js(s) : o !== 0 && (r = js(o));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r, o = t & -t, i >= o || i === 16 && (o & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - En(t), i = 1 << n, r |= e[n], t &= ~i;
    return r
}

function qx(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
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
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Qx(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
        var s = 31 - En(o),
            l = 1 << s,
            a = i[s];
        a === -1 ? (!(l & n) || l & r) && (i[s] = qx(l, t)) : a <= t && (e.expiredLanes |= l), o &= ~l
    }
}

function ed(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function bv() {
    var e = la;
    return la <<= 1, !(la & 4194240) && (la = 64), e
}

function Bc(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function jl(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - En(t), e[t] = n
}

function Kx(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var i = 31 - En(n),
            o = 1 << i;
        t[i] = 0, r[i] = -1, e[i] = -1, n &= ~o
    }
}

function Ih(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - En(n),
            i = 1 << r;
        i & t | e[r] & t && (e[r] |= t), n &= ~i
    }
}
var Ee = 0;

function Cv(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Tv, Fh, Rv, _v, Pv, td = !1,
    ua = [],
    Hr = null,
    Wr = null,
    Vr = null,
    tl = new Map,
    nl = new Map,
    Nr = [],
    Gx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function om(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Hr = null;
            break;
        case "dragenter":
        case "dragleave":
            Wr = null;
            break;
        case "mouseover":
        case "mouseout":
            Vr = null;
            break;
        case "pointerover":
        case "pointerout":
            tl.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            nl.delete(t.pointerId)
    }
}

function ds(e, t, n, r, i, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i]
    }, t !== null && (t = Ml(t), t !== null && Fh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e)
}

function Yx(e, t, n, r, i) {
    switch (t) {
        case "focusin":
            return Hr = ds(Hr, e, t, n, r, i), !0;
        case "dragenter":
            return Wr = ds(Wr, e, t, n, r, i), !0;
        case "mouseover":
            return Vr = ds(Vr, e, t, n, r, i), !0;
        case "pointerover":
            var o = i.pointerId;
            return tl.set(o, ds(tl.get(o) || null, e, t, n, r, i)), !0;
        case "gotpointercapture":
            return o = i.pointerId, nl.set(o, ds(nl.get(o) || null, e, t, n, r, i)), !0
    }
    return !1
}

function Nv(e) {
    var t = mi(e.target);
    if (t !== null) {
        var n = Bi(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = yv(n), t !== null) {
                    e.blockedOn = t, Pv(e.priority, function() {
                        Rv(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Aa(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = nd(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            Yf = r, n.target.dispatchEvent(r), Yf = null
        } else return t = Ml(n), t !== null && Fh(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function sm(e, t, n) {
    Aa(e) && n.delete(t)
}

function Xx() {
    td = !1, Hr !== null && Aa(Hr) && (Hr = null), Wr !== null && Aa(Wr) && (Wr = null), Vr !== null && Aa(Vr) && (Vr = null), tl.forEach(sm), nl.forEach(sm)
}

function hs(e, t) {
    e.blockedOn === t && (e.blockedOn = null, td || (td = !0, qt.unstable_scheduleCallback(qt.unstable_NormalPriority, Xx)))
}

function rl(e) {
    function t(i) {
        return hs(i, e)
    }
    if (0 < ua.length) {
        hs(ua[0], e);
        for (var n = 1; n < ua.length; n++) {
            var r = ua[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Hr !== null && hs(Hr, e), Wr !== null && hs(Wr, e), Vr !== null && hs(Vr, e), tl.forEach(t), nl.forEach(t), n = 0; n < Nr.length; n++) r = Nr[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Nr.length && (n = Nr[0], n.blockedOn === null);) Nv(n), n.blockedOn === null && Nr.shift()
}
var wo = hr.ReactCurrentBatchConfig,
    fu = !0;

function Jx(e, t, n, r) {
    var i = Ee,
        o = wo.transition;
    wo.transition = null;
    try {
        Ee = 1, $h(e, t, n, r)
    } finally {
        Ee = i, wo.transition = o
    }
}

function Zx(e, t, n, r) {
    var i = Ee,
        o = wo.transition;
    wo.transition = null;
    try {
        Ee = 4, $h(e, t, n, r)
    } finally {
        Ee = i, wo.transition = o
    }
}

function $h(e, t, n, r) {
    if (fu) {
        var i = nd(e, t, n, r);
        if (i === null) Xc(e, t, r, du, n), om(e, r);
        else if (Yx(i, e, t, n, r)) r.stopPropagation();
        else if (om(e, r), t & 4 && -1 < Gx.indexOf(e)) {
            for (; i !== null;) {
                var o = Ml(i);
                if (o !== null && Tv(o), o = nd(e, t, n, r), o === null && Xc(e, t, r, du, n), o === i) break;
                i = o
            }
            i !== null && r.stopPropagation()
        } else Xc(e, t, r, null, n)
    }
}
var du = null;

function nd(e, t, n, r) {
    if (du = null, e = Ah(r), e = mi(e), e !== null)
        if (t = Bi(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = yv(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return du = e, null
}

function Ov(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ux()) {
                case Mh:
                    return 1;
                case Ev:
                    return 4;
                case uu:
                case Bx:
                    return 16;
                case Sv:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var $r = null,
    Uh = null,
    Ma = null;

function kv() {
    if (Ma) return Ma;
    var e, t = Uh,
        n = t.length,
        r, i = "value" in $r ? $r.value : $r.textContent,
        o = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
    return Ma = i.slice(e, 1 < r ? 1 - r : void 0)
}

function Ia(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function ca() {
    return !0
}

function lm() {
    return !1
}

function Kt(e) {
    function t(n, r, i, o, s) {
        this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = o, this.target = s, this.currentTarget = null;
        for (var l in e) e.hasOwnProperty(l) && (n = e[l], this[l] = n ? n(o) : o[l]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? ca : lm, this.isPropagationStopped = lm, this
    }
    return Ae(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ca)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ca)
        },
        persist: function() {},
        isPersistent: ca
    }), t
}
var Xo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    Bh = Kt(Xo),
    Al = Ae({}, Xo, {
        view: 0,
        detail: 0
    }),
    eE = Kt(Al),
    zc, Hc, ps, Qu = Ae({}, Al, {
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
        getModifierState: zh,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== ps && (ps && e.type === "mousemove" ? (zc = e.screenX - ps.screenX, Hc = e.screenY - ps.screenY) : Hc = zc = 0, ps = e), zc)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Hc
        }
    }),
    am = Kt(Qu),
    tE = Ae({}, Qu, {
        dataTransfer: 0
    }),
    nE = Kt(tE),
    rE = Ae({}, Al, {
        relatedTarget: 0
    }),
    Wc = Kt(rE),
    iE = Ae({}, Xo, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    oE = Kt(iE),
    sE = Ae({}, Xo, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    lE = Kt(sE),
    aE = Ae({}, Xo, {
        data: 0
    }),
    um = Kt(aE),
    uE = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    cE = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    fE = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function dE(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = fE[e]) ? !!t[e] : !1
}

function zh() {
    return dE
}
var hE = Ae({}, Al, {
        key: function(e) {
            if (e.key) {
                var t = uE[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = Ia(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? cE[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: zh,
        charCode: function(e) {
            return e.type === "keypress" ? Ia(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? Ia(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    pE = Kt(hE),
    mE = Ae({}, Qu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    cm = Kt(mE),
    gE = Ae({}, Al, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: zh
    }),
    yE = Kt(gE),
    vE = Ae({}, Xo, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    wE = Kt(vE),
    xE = Ae({}, Qu, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    EE = Kt(xE),
    SE = [9, 13, 27, 32],
    Hh = sr && "CompositionEvent" in window,
    zs = null;
sr && "documentMode" in document && (zs = document.documentMode);
var bE = sr && "TextEvent" in window && !zs,
    Dv = sr && (!Hh || zs && 8 < zs && 11 >= zs),
    fm = String.fromCharCode(32),
    dm = !1;

function Lv(e, t) {
    switch (e) {
        case "keyup":
            return SE.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function jv(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var no = !1;

function CE(e, t) {
    switch (e) {
        case "compositionend":
            return jv(t);
        case "keypress":
            return t.which !== 32 ? null : (dm = !0, fm);
        case "textInput":
            return e = t.data, e === fm && dm ? null : e;
        default:
            return null
    }
}

function TE(e, t) {
    if (no) return e === "compositionend" || !Hh && Lv(e, t) ? (e = kv(), Ma = Uh = $r = null, no = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Dv && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var RE = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
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
    week: !0
};

function hm(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!RE[e.type] : t === "textarea"
}

function Av(e, t, n, r) {
    dv(r), t = hu(t, "onChange"), 0 < t.length && (n = new Bh("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var Hs = null,
    il = null;

function _E(e) {
    qv(e, 0)
}

function Ku(e) {
    var t = oo(e);
    if (ov(t)) return e
}

function PE(e, t) {
    if (e === "change") return t
}
var Mv = !1;
if (sr) {
    var Vc;
    if (sr) {
        var qc = "oninput" in document;
        if (!qc) {
            var pm = document.createElement("div");
            pm.setAttribute("oninput", "return;"), qc = typeof pm.oninput == "function"
        }
        Vc = qc
    } else Vc = !1;
    Mv = Vc && (!document.documentMode || 9 < document.documentMode)
}

function mm() {
    Hs && (Hs.detachEvent("onpropertychange", Iv), il = Hs = null)
}

function Iv(e) {
    if (e.propertyName === "value" && Ku(il)) {
        var t = [];
        Av(t, il, e, Ah(e)), gv(_E, t)
    }
}

function NE(e, t, n) {
    e === "focusin" ? (mm(), Hs = t, il = n, Hs.attachEvent("onpropertychange", Iv)) : e === "focusout" && mm()
}

function OE(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ku(il)
}

function kE(e, t) {
    if (e === "click") return Ku(t)
}

function DE(e, t) {
    if (e === "input" || e === "change") return Ku(t)
}

function LE(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var bn = typeof Object.is == "function" ? Object.is : LE;

function ol(e, t) {
    if (bn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ff.call(t, i) || !bn(e[i], t[i])) return !1
    }
    return !0
}

function gm(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function ym(e, t) {
    var n = gm(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = gm(n)
    }
}

function Fv(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Fv(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function $v() {
    for (var e = window, t = su(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = su(e.document)
    }
    return t
}

function Wh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function jE(e) {
    var t = $v(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Fv(n.ownerDocument.documentElement, n)) {
        if (r !== null && Wh(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = r.end === void 0 ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = ym(n, o);
                var s = ym(n, r);
                i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (t = t.createRange(), t.setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var AE = sr && "documentMode" in document && 11 >= document.documentMode,
    ro = null,
    rd = null,
    Ws = null,
    id = !1;

function vm(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    id || ro == null || ro !== su(r) || (r = ro, "selectionStart" in r && Wh(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Ws && ol(Ws, r) || (Ws = r, r = hu(rd, "onSelect"), 0 < r.length && (t = new Bh("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = ro)))
}

function fa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var io = {
        animationend: fa("Animation", "AnimationEnd"),
        animationiteration: fa("Animation", "AnimationIteration"),
        animationstart: fa("Animation", "AnimationStart"),
        transitionend: fa("Transition", "TransitionEnd")
    },
    Qc = {},
    Uv = {};
sr && (Uv = document.createElement("div").style, "AnimationEvent" in window || (delete io.animationend.animation, delete io.animationiteration.animation, delete io.animationstart.animation), "TransitionEvent" in window || delete io.transitionend.transition);

function Gu(e) {
    if (Qc[e]) return Qc[e];
    if (!io[e]) return e;
    var t = io[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Uv) return Qc[e] = t[n];
    return e
}
var Bv = Gu("animationend"),
    zv = Gu("animationiteration"),
    Hv = Gu("animationstart"),
    Wv = Gu("transitionend"),
    Vv = new Map,
    wm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function ri(e, t) {
    Vv.set(e, t), Ui(t, [e])
}
for (var Kc = 0; Kc < wm.length; Kc++) {
    var Gc = wm[Kc],
        ME = Gc.toLowerCase(),
        IE = Gc[0].toUpperCase() + Gc.slice(1);
    ri(ME, "on" + IE)
}
ri(Bv, "onAnimationEnd");
ri(zv, "onAnimationIteration");
ri(Hv, "onAnimationStart");
ri("dblclick", "onDoubleClick");
ri("focusin", "onFocus");
ri("focusout", "onBlur");
ri(Wv, "onTransitionEnd");
$o("onMouseEnter", ["mouseout", "mouseover"]);
$o("onMouseLeave", ["mouseout", "mouseover"]);
$o("onPointerEnter", ["pointerout", "pointerover"]);
$o("onPointerLeave", ["pointerout", "pointerover"]);
Ui("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ui("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ui("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ui("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ui("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ui("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var As = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    FE = new Set("cancel close invalid load scroll toggle".split(" ").concat(As));

function xm(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Mx(r, t, void 0, e), e.currentTarget = null
}

function qv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var l = r[s],
                        a = l.instance,
                        c = l.currentTarget;
                    if (l = l.listener, a !== o && i.isPropagationStopped()) break e;
                    xm(i, l, c), o = a
                } else
                    for (s = 0; s < r.length; s++) {
                        if (l = r[s], a = l.instance, c = l.currentTarget, l = l.listener, a !== o && i.isPropagationStopped()) break e;
                        xm(i, l, c), o = a
                    }
        }
    }
    if (au) throw e = Zf, au = !1, Zf = null, e
}

function Pe(e, t) {
    var n = t[ud];
    n === void 0 && (n = t[ud] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Qv(t, e, 2, !1), n.add(r))
}

function Yc(e, t, n) {
    var r = 0;
    t && (r |= 4), Qv(n, e, r, t)
}
var da = "_reactListening" + Math.random().toString(36).slice(2);

function sl(e) {
    if (!e[da]) {
        e[da] = !0, ev.forEach(function(n) {
            n !== "selectionchange" && (FE.has(n) || Yc(n, !1, e), Yc(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[da] || (t[da] = !0, Yc("selectionchange", !1, t))
    }
}

function Qv(e, t, n, r) {
    switch (Ov(t)) {
        case 1:
            var i = Jx;
            break;
        case 4:
            i = Zx;
            break;
        default:
            i = $h
    }
    n = i.bind(null, t, n, e), i = void 0, !Jf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}

function Xc(e, t, n, r, i) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var l = r.stateNode.containerInfo;
            if (l === i || l.nodeType === 8 && l.parentNode === i) break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var a = s.tag;
                    if ((a === 3 || a === 4) && (a = s.stateNode.containerInfo, a === i || a.nodeType === 8 && a.parentNode === i)) return;
                    s = s.return
                }
            for (; l !== null;) {
                if (s = mi(l), s === null) return;
                if (a = s.tag, a === 5 || a === 6) {
                    r = o = s;
                    continue e
                }
                l = l.parentNode
            }
        }
        r = r.return
    }
    gv(function() {
        var c = o,
            u = Ah(n),
            f = [];
        e: {
            var h = Vv.get(e);
            if (h !== void 0) {
                var x = Bh,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Ia(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        x = pE;
                        break;
                    case "focusin":
                        y = "focus", x = Wc;
                        break;
                    case "focusout":
                        y = "blur", x = Wc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        x = Wc;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        x = am;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        x = nE;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        x = yE;
                        break;
                    case Bv:
                    case zv:
                    case Hv:
                        x = oE;
                        break;
                    case Wv:
                        x = wE;
                        break;
                    case "scroll":
                        x = eE;
                        break;
                    case "wheel":
                        x = EE;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        x = lE;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        x = cm
                }
                var w = (t & 4) !== 0,
                    E = !w && e === "scroll",
                    m = w ? h !== null ? h + "Capture" : null : h;
                w = [];
                for (var p = c, v; p !== null;) {
                    v = p;
                    var R = v.stateNode;
                    if (v.tag === 5 && R !== null && (v = R, m !== null && (R = el(p, m), R != null && w.push(ll(p, R, v)))), E) break;
                    p = p.return
                }
                0 < w.length && (h = new x(h, y, null, n, u), f.push({
                    event: h,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (h = e === "mouseover" || e === "pointerover", x = e === "mouseout" || e === "pointerout", h && n !== Yf && (y = n.relatedTarget || n.fromElement) && (mi(y) || y[lr])) break e;
                if ((x || h) && (h = u.window === u ? u : (h = u.ownerDocument) ? h.defaultView || h.parentWindow : window, x ? (y = n.relatedTarget || n.toElement, x = c, y = y ? mi(y) : null, y !== null && (E = Bi(y), y !== E || y.tag !== 5 && y.tag !== 6) && (y = null)) : (x = null, y = c), x !== y)) {
                    if (w = am, R = "onMouseLeave", m = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (w = cm, R = "onPointerLeave", m = "onPointerEnter", p = "pointer"), E = x == null ? h : oo(x), v = y == null ? h : oo(y), h = new w(R, p + "leave", x, n, u), h.target = E, h.relatedTarget = v, R = null, mi(u) === c && (w = new w(m, p + "enter", y, n, u), w.target = v, w.relatedTarget = E, R = w), E = R, x && y) t: {
                        for (w = x, m = y, p = 0, v = w; v; v = Ki(v)) p++;
                        for (v = 0, R = m; R; R = Ki(R)) v++;
                        for (; 0 < p - v;) w = Ki(w),
                        p--;
                        for (; 0 < v - p;) m = Ki(m),
                        v--;
                        for (; p--;) {
                            if (w === m || m !== null && w === m.alternate) break t;
                            w = Ki(w), m = Ki(m)
                        }
                        w = null
                    }
                    else w = null;
                    x !== null && Em(f, h, x, w, !1), y !== null && E !== null && Em(f, E, y, w, !0)
                }
            }
            e: {
                if (h = c ? oo(c) : window, x = h.nodeName && h.nodeName.toLowerCase(), x === "select" || x === "input" && h.type === "file") var P = PE;
                else if (hm(h))
                    if (Mv) P = DE;
                    else {
                        P = OE;
                        var S = NE
                    }
                else(x = h.nodeName) && x.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (P = kE);
                if (P && (P = P(e, c))) {
                    Av(f, P, n, u);
                    break e
                }
                S && S(e, h, c),
                e === "focusout" && (S = h._wrapperState) && S.controlled && h.type === "number" && Vf(h, "number", h.value)
            }
            switch (S = c ? oo(c) : window, e) {
                case "focusin":
                    (hm(S) || S.contentEditable === "true") && (ro = S, rd = c, Ws = null);
                    break;
                case "focusout":
                    Ws = rd = ro = null;
                    break;
                case "mousedown":
                    id = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    id = !1, vm(f, n, u);
                    break;
                case "selectionchange":
                    if (AE) break;
                case "keydown":
                case "keyup":
                    vm(f, n, u)
            }
            var N;
            if (Hh) e: {
                switch (e) {
                    case "compositionstart":
                        var D = "onCompositionStart";
                        break e;
                    case "compositionend":
                        D = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        D = "onCompositionUpdate";
                        break e
                }
                D = void 0
            }
            else no ? Lv(e, n) && (D = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");D && (Dv && n.locale !== "ko" && (no || D !== "onCompositionStart" ? D === "onCompositionEnd" && no && (N = kv()) : ($r = u, Uh = "value" in $r ? $r.value : $r.textContent, no = !0)), S = hu(c, D), 0 < S.length && (D = new um(D, e, null, n, u), f.push({
                event: D,
                listeners: S
            }), N ? D.data = N : (N = jv(n), N !== null && (D.data = N)))),
            (N = bE ? CE(e, n) : TE(e, n)) && (c = hu(c, "onBeforeInput"), 0 < c.length && (u = new um("onBeforeInput", "beforeinput", null, n, u), f.push({
                event: u,
                listeners: c
            }), u.data = N))
        }
        qv(f, t)
    })
}

function ll(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function hu(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var i = e,
            o = i.stateNode;
        i.tag === 5 && o !== null && (i = o, o = el(e, n), o != null && r.unshift(ll(e, o, i)), o = el(e, t), o != null && r.push(ll(e, o, i))), e = e.return
    }
    return r
}

function Ki(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Em(e, t, n, r, i) {
    for (var o = t._reactName, s = []; n !== null && n !== r;) {
        var l = n,
            a = l.alternate,
            c = l.stateNode;
        if (a !== null && a === r) break;
        l.tag === 5 && c !== null && (l = c, i ? (a = el(n, o), a != null && s.unshift(ll(n, a, l))) : i || (a = el(n, o), a != null && s.push(ll(n, a, l)))), n = n.return
    }
    s.length !== 0 && e.push({
        event: t,
        listeners: s
    })
}
var $E = /\r\n?/g,
    UE = /\u0000|\uFFFD/g;

function Sm(e) {
    return (typeof e == "string" ? e : "" + e).replace($E, `
`).replace(UE, "")
}

function ha(e, t, n) {
    if (t = Sm(t), Sm(e) !== t && n) throw Error(j(425))
}

function pu() {}
var od = null,
    sd = null;

function ld(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ad = typeof setTimeout == "function" ? setTimeout : void 0,
    BE = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bm = typeof Promise == "function" ? Promise : void 0,
    zE = typeof queueMicrotask == "function" ? queueMicrotask : typeof bm < "u" ? function(e) {
        return bm.resolve(null).then(e).catch(HE)
    } : ad;

function HE(e) {
    setTimeout(function() {
        throw e
    })
}

function Jc(e, t) {
    var n = t,
        r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n), i && i.nodeType === 8)
            if (n = i.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(i), rl(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    rl(t)
}

function qr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Cm(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Jo = Math.random().toString(36).slice(2),
    Fn = "__reactFiber$" + Jo,
    al = "__reactProps$" + Jo,
    lr = "__reactContainer$" + Jo,
    ud = "__reactEvents$" + Jo,
    WE = "__reactListeners$" + Jo,
    VE = "__reactHandles$" + Jo;

function mi(e) {
    var t = e[Fn];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[lr] || n[Fn]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Cm(e); e !== null;) {
                    if (n = e[Fn]) return n;
                    e = Cm(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Ml(e) {
    return e = e[Fn] || e[lr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function oo(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33))
}

function Yu(e) {
    return e[al] || null
}
var cd = [],
    so = -1;

function ii(e) {
    return {
        current: e
    }
}

function Ne(e) {
    0 > so || (e.current = cd[so], cd[so] = null, so--)
}

function Te(e, t) {
    so++, cd[so] = e.current, e.current = t
}
var ti = {},
    xt = ii(ti),
    Mt = ii(!1),
    Di = ti;

function Uo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ti;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
        o;
    for (o in n) i[o] = t[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
}

function It(e) {
    return e = e.childContextTypes, e != null
}

function mu() {
    Ne(Mt), Ne(xt)
}

function Tm(e, t, n) {
    if (xt.current !== ti) throw Error(j(168));
    Te(xt, t), Te(Mt, n)
}

function Kv(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t)) throw Error(j(108, Nx(e) || "Unknown", i));
    return Ae({}, n, r)
}

function gu(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ti, Di = xt.current, Te(xt, e), Te(Mt, Mt.current), !0
}

function Rm(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(j(169));
    n ? (e = Kv(e, t, Di), r.__reactInternalMemoizedMergedChildContext = e, Ne(Mt), Ne(xt), Te(xt, e)) : Ne(Mt), Te(Mt, n)
}
var Jn = null,
    Xu = !1,
    Zc = !1;

function Gv(e) {
    Jn === null ? Jn = [e] : Jn.push(e)
}

function qE(e) {
    Xu = !0, Gv(e)
}

function oi() {
    if (!Zc && Jn !== null) {
        Zc = !0;
        var e = 0,
            t = Ee;
        try {
            var n = Jn;
            for (Ee = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Jn = null, Xu = !1
        } catch (i) {
            throw Jn !== null && (Jn = Jn.slice(e + 1)), xv(Mh, oi), i
        } finally {
            Ee = t, Zc = !1
        }
    }
    return null
}
var lo = [],
    ao = 0,
    yu = null,
    vu = 0,
    rn = [],
    on = 0,
    Li = null,
    er = 1,
    tr = "";

function hi(e, t) {
    lo[ao++] = vu, lo[ao++] = yu, yu = e, vu = t
}

function Yv(e, t, n) {
    rn[on++] = er, rn[on++] = tr, rn[on++] = Li, Li = e;
    var r = er;
    e = tr;
    var i = 32 - En(r) - 1;
    r &= ~(1 << i), n += 1;
    var o = 32 - En(t) + i;
    if (30 < o) {
        var s = i - i % 5;
        o = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, er = 1 << 32 - En(t) + i | n << i | r, tr = o + e
    } else er = 1 << o | n << i | r, tr = e
}

function Vh(e) {
    e.return !== null && (hi(e, 1), Yv(e, 1, 0))
}

function qh(e) {
    for (; e === yu;) yu = lo[--ao], lo[ao] = null, vu = lo[--ao], lo[ao] = null;
    for (; e === Li;) Li = rn[--on], rn[on] = null, tr = rn[--on], rn[on] = null, er = rn[--on], rn[on] = null
}
var Vt = null,
    Wt = null,
    Oe = !1,
    wn = null;

function Xv(e, t) {
    var n = sn(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function _m(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Vt = e, Wt = qr(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Vt = e, Wt = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Li !== null ? {
                id: er,
                overflow: tr
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = sn(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Vt = e, Wt = null, !0) : !1;
        default:
            return !1
    }
}

function fd(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function dd(e) {
    if (Oe) {
        var t = Wt;
        if (t) {
            var n = t;
            if (!_m(e, t)) {
                if (fd(e)) throw Error(j(418));
                t = qr(n.nextSibling);
                var r = Vt;
                t && _m(e, t) ? Xv(r, n) : (e.flags = e.flags & -4097 | 2, Oe = !1, Vt = e)
            }
        } else {
            if (fd(e)) throw Error(j(418));
            e.flags = e.flags & -4097 | 2, Oe = !1, Vt = e
        }
    }
}

function Pm(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Vt = e
}

function pa(e) {
    if (e !== Vt) return !1;
    if (!Oe) return Pm(e), Oe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ld(e.type, e.memoizedProps)), t && (t = Wt)) {
        if (fd(e)) throw Jv(), Error(j(418));
        for (; t;) Xv(e, t), t = qr(t.nextSibling)
    }
    if (Pm(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(j(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Wt = qr(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Wt = null
        }
    } else Wt = Vt ? qr(e.stateNode.nextSibling) : null;
    return !0
}

function Jv() {
    for (var e = Wt; e;) e = qr(e.nextSibling)
}

function Bo() {
    Wt = Vt = null, Oe = !1
}

function Qh(e) {
    wn === null ? wn = [e] : wn.push(e)
}
var QE = hr.ReactCurrentBatchConfig;

function mn(e, t) {
    if (e && e.defaultProps) {
        t = Ae({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var wu = ii(null),
    xu = null,
    uo = null,
    Kh = null;

function Gh() {
    Kh = uo = xu = null
}

function Yh(e) {
    var t = wu.current;
    Ne(wu), e._currentValue = t
}

function hd(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function xo(e, t) {
    xu = e, Kh = uo = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (At = !0), e.firstContext = null)
}

function un(e) {
    var t = e._currentValue;
    if (Kh !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, uo === null) {
            if (xu === null) throw Error(j(308));
            uo = e, xu.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else uo = uo.next = e;
    return t
}
var gi = null;

function Xh(e) {
    gi === null ? gi = [e] : gi.push(e)
}

function Zv(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n, Xh(t)) : (n.next = i.next, i.next = n), t.interleaved = n, ar(e, r)
}

function ar(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Pr = !1;

function Jh(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function e0(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function nr(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function Qr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, me & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, ar(e, n)
    }
    return i = r.interleaved, i === null ? (t.next = t, Xh(r)) : (t.next = i.next, i.next = t), r.interleaved = t, ar(e, n)
}

function Fa(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ih(e, n)
    }
}

function Nm(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var i = null,
            o = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? i = o = s : o = o.next = s, n = n.next
            } while (n !== null);
            o === null ? i = o = t : o = o.next = t
        } else i = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Eu(e, t, n, r) {
    var i = e.updateQueue;
    Pr = !1;
    var o = i.firstBaseUpdate,
        s = i.lastBaseUpdate,
        l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l,
            c = a.next;
        a.next = null, s === null ? o = c : s.next = c, s = a;
        var u = e.alternate;
        u !== null && (u = u.updateQueue, l = u.lastBaseUpdate, l !== s && (l === null ? u.firstBaseUpdate = c : l.next = c, u.lastBaseUpdate = a))
    }
    if (o !== null) {
        var f = i.baseState;
        s = 0, u = c = a = null, l = o;
        do {
            var h = l.lane,
                x = l.eventTime;
            if ((r & h) === h) {
                u !== null && (u = u.next = {
                    eventTime: x,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var y = e,
                        w = l;
                    switch (h = t, x = n, w.tag) {
                        case 1:
                            if (y = w.payload, typeof y == "function") {
                                f = y.call(x, f, h);
                                break e
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = y.flags & -65537 | 128;
                        case 0:
                            if (y = w.payload, h = typeof y == "function" ? y.call(x, f, h) : y, h == null) break e;
                            f = Ae({}, f, h);
                            break e;
                        case 2:
                            Pr = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64, h = i.effects, h === null ? i.effects = [l] : h.push(l))
            } else x = {
                eventTime: x,
                lane: h,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null
            }, u === null ? (c = u = x, a = f) : u = u.next = x, s |= h;
            if (l = l.next, l === null) {
                if (l = i.shared.pending, l === null) break;
                h = l, l = h.next, h.next = null, i.lastBaseUpdate = h, i.shared.pending = null
            }
        } while (1);
        if (u === null && (a = f), i.baseState = a, i.firstBaseUpdate = c, i.lastBaseUpdate = u, t = i.shared.interleaved, t !== null) {
            i = t;
            do s |= i.lane, i = i.next; while (i !== t)
        } else o === null && (i.shared.lanes = 0);
        Ai |= s, e.lanes = s, e.memoizedState = f
    }
}

function Om(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback;
            if (i !== null) {
                if (r.callback = null, r = n, typeof i != "function") throw Error(j(191, i));
                i.call(r)
            }
        }
}
var t0 = new Zy.Component().refs;

function pd(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : Ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Ju = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Bi(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Rt(),
            i = Gr(e),
            o = nr(r, i);
        o.payload = t, n != null && (o.callback = n), t = Qr(e, o, i), t !== null && (Sn(t, e, i, r), Fa(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Rt(),
            i = Gr(e),
            o = nr(r, i);
        o.tag = 1, o.payload = t, n != null && (o.callback = n), t = Qr(e, o, i), t !== null && (Sn(t, e, i, r), Fa(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Rt(),
            r = Gr(e),
            i = nr(n, r);
        i.tag = 2, t != null && (i.callback = t), t = Qr(e, i, r), t !== null && (Sn(t, e, r, n), Fa(t, e, r))
    }
};

function km(e, t, n, r, i, o, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, s) : t.prototype && t.prototype.isPureReactComponent ? !ol(n, r) || !ol(i, o) : !0
}

function n0(e, t, n) {
    var r = !1,
        i = ti,
        o = t.contextType;
    return typeof o == "object" && o !== null ? o = un(o) : (i = It(t) ? Di : xt.current, r = t.contextTypes, o = (r = r != null) ? Uo(e, i) : ti), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ju, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
}

function Dm(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ju.enqueueReplaceState(t, t.state, null)
}

function md(e, t, n, r) {
    var i = e.stateNode;
    i.props = n, i.state = e.memoizedState, i.refs = t0, Jh(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? i.context = un(o) : (o = It(t) ? Di : xt.current, i.context = Uo(e, o)), i.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (pd(e, t, o, n), i.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), t !== i.state && Ju.enqueueReplaceState(i, i.state, null), Eu(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}

function ms(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(j(309));
                var r = n.stateNode
            }
            if (!r) throw Error(j(147, e));
            var i = r,
                o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(s) {
                var l = i.refs;
                l === t0 && (l = i.refs = {}), s === null ? delete l[o] : l[o] = s
            }, t._stringRef = o, t)
        }
        if (typeof e != "string") throw Error(j(284));
        if (!n._owner) throw Error(j(290, e))
    }
    return e
}

function ma(e, t) {
    throw e = Object.prototype.toString.call(t), Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Lm(e) {
    var t = e._init;
    return t(e._payload)
}

function r0(e) {
    function t(m, p) {
        if (e) {
            var v = m.deletions;
            v === null ? (m.deletions = [p], m.flags |= 16) : v.push(p)
        }
    }

    function n(m, p) {
        if (!e) return null;
        for (; p !== null;) t(m, p), p = p.sibling;
        return null
    }

    function r(m, p) {
        for (m = new Map; p !== null;) p.key !== null ? m.set(p.key, p) : m.set(p.index, p), p = p.sibling;
        return m
    }

    function i(m, p) {
        return m = Yr(m, p), m.index = 0, m.sibling = null, m
    }

    function o(m, p, v) {
        return m.index = v, e ? (v = m.alternate, v !== null ? (v = v.index, v < p ? (m.flags |= 2, p) : v) : (m.flags |= 2, p)) : (m.flags |= 1048576, p)
    }

    function s(m) {
        return e && m.alternate === null && (m.flags |= 2), m
    }

    function l(m, p, v, R) {
        return p === null || p.tag !== 6 ? (p = lf(v, m.mode, R), p.return = m, p) : (p = i(p, v), p.return = m, p)
    }

    function a(m, p, v, R) {
        var P = v.type;
        return P === to ? u(m, p, v.props.children, R, v.key) : p !== null && (p.elementType === P || typeof P == "object" && P !== null && P.$$typeof === _r && Lm(P) === p.type) ? (R = i(p, v.props), R.ref = ms(m, p, v), R.return = m, R) : (R = Wa(v.type, v.key, v.props, null, m.mode, R), R.ref = ms(m, p, v), R.return = m, R)
    }

    function c(m, p, v, R) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = af(v, m.mode, R), p.return = m, p) : (p = i(p, v.children || []), p.return = m, p)
    }

    function u(m, p, v, R, P) {
        return p === null || p.tag !== 7 ? (p = ki(v, m.mode, R, P), p.return = m, p) : (p = i(p, v), p.return = m, p)
    }

    function f(m, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number") return p = lf("" + p, m.mode, v), p.return = m, p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ia:
                    return v = Wa(p.type, p.key, p.props, null, m.mode, v), v.ref = ms(m, null, p), v.return = m, v;
                case eo:
                    return p = af(p, m.mode, v), p.return = m, p;
                case _r:
                    var R = p._init;
                    return f(m, R(p._payload), v)
            }
            if (Ls(p) || cs(p)) return p = ki(p, m.mode, v, null), p.return = m, p;
            ma(m, p)
        }
        return null
    }

    function h(m, p, v, R) {
        var P = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number") return P !== null ? null : l(m, p, "" + v, R);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ia:
                    return v.key === P ? a(m, p, v, R) : null;
                case eo:
                    return v.key === P ? c(m, p, v, R) : null;
                case _r:
                    return P = v._init, h(m, p, P(v._payload), R)
            }
            if (Ls(v) || cs(v)) return P !== null ? null : u(m, p, v, R, null);
            ma(m, v)
        }
        return null
    }

    function x(m, p, v, R, P) {
        if (typeof R == "string" && R !== "" || typeof R == "number") return m = m.get(v) || null, l(p, m, "" + R, P);
        if (typeof R == "object" && R !== null) {
            switch (R.$$typeof) {
                case ia:
                    return m = m.get(R.key === null ? v : R.key) || null, a(p, m, R, P);
                case eo:
                    return m = m.get(R.key === null ? v : R.key) || null, c(p, m, R, P);
                case _r:
                    var S = R._init;
                    return x(m, p, v, S(R._payload), P)
            }
            if (Ls(R) || cs(R)) return m = m.get(v) || null, u(p, m, R, P, null);
            ma(p, R)
        }
        return null
    }

    function y(m, p, v, R) {
        for (var P = null, S = null, N = p, D = p = 0, M = null; N !== null && D < v.length; D++) {
            N.index > D ? (M = N, N = null) : M = N.sibling;
            var B = h(m, N, v[D], R);
            if (B === null) {
                N === null && (N = M);
                break
            }
            e && N && B.alternate === null && t(m, N), p = o(B, p, D), S === null ? P = B : S.sibling = B, S = B, N = M
        }
        if (D === v.length) return n(m, N), Oe && hi(m, D), P;
        if (N === null) {
            for (; D < v.length; D++) N = f(m, v[D], R), N !== null && (p = o(N, p, D), S === null ? P = N : S.sibling = N, S = N);
            return Oe && hi(m, D), P
        }
        for (N = r(m, N); D < v.length; D++) M = x(N, m, D, v[D], R), M !== null && (e && M.alternate !== null && N.delete(M.key === null ? D : M.key), p = o(M, p, D), S === null ? P = M : S.sibling = M, S = M);
        return e && N.forEach(function(te) {
            return t(m, te)
        }), Oe && hi(m, D), P
    }

    function w(m, p, v, R) {
        var P = cs(v);
        if (typeof P != "function") throw Error(j(150));
        if (v = P.call(v), v == null) throw Error(j(151));
        for (var S = P = null, N = p, D = p = 0, M = null, B = v.next(); N !== null && !B.done; D++, B = v.next()) {
            N.index > D ? (M = N, N = null) : M = N.sibling;
            var te = h(m, N, B.value, R);
            if (te === null) {
                N === null && (N = M);
                break
            }
            e && N && te.alternate === null && t(m, N), p = o(te, p, D), S === null ? P = te : S.sibling = te, S = te, N = M
        }
        if (B.done) return n(m, N), Oe && hi(m, D), P;
        if (N === null) {
            for (; !B.done; D++, B = v.next()) B = f(m, B.value, R), B !== null && (p = o(B, p, D), S === null ? P = B : S.sibling = B, S = B);
            return Oe && hi(m, D), P
        }
        for (N = r(m, N); !B.done; D++, B = v.next()) B = x(N, m, D, B.value, R), B !== null && (e && B.alternate !== null && N.delete(B.key === null ? D : B.key), p = o(B, p, D), S === null ? P = B : S.sibling = B, S = B);
        return e && N.forEach(function(ge) {
            return t(m, ge)
        }), Oe && hi(m, D), P
    }

    function E(m, p, v, R) {
        if (typeof v == "object" && v !== null && v.type === to && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ia:
                    e: {
                        for (var P = v.key, S = p; S !== null;) {
                            if (S.key === P) {
                                if (P = v.type, P === to) {
                                    if (S.tag === 7) {
                                        n(m, S.sibling), p = i(S, v.props.children), p.return = m, m = p;
                                        break e
                                    }
                                } else if (S.elementType === P || typeof P == "object" && P !== null && P.$$typeof === _r && Lm(P) === S.type) {
                                    n(m, S.sibling), p = i(S, v.props), p.ref = ms(m, S, v), p.return = m, m = p;
                                    break e
                                }
                                n(m, S);
                                break
                            } else t(m, S);
                            S = S.sibling
                        }
                        v.type === to ? (p = ki(v.props.children, m.mode, R, v.key), p.return = m, m = p) : (R = Wa(v.type, v.key, v.props, null, m.mode, R), R.ref = ms(m, p, v), R.return = m, m = R)
                    }
                    return s(m);
                case eo:
                    e: {
                        for (S = v.key; p !== null;) {
                            if (p.key === S)
                                if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                    n(m, p.sibling), p = i(p, v.children || []), p.return = m, m = p;
                                    break e
                                } else {
                                    n(m, p);
                                    break
                                }
                            else t(m, p);
                            p = p.sibling
                        }
                        p = af(v, m.mode, R),
                        p.return = m,
                        m = p
                    }
                    return s(m);
                case _r:
                    return S = v._init, E(m, p, S(v._payload), R)
            }
            if (Ls(v)) return y(m, p, v, R);
            if (cs(v)) return w(m, p, v, R);
            ma(m, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(m, p.sibling), p = i(p, v), p.return = m, m = p) : (n(m, p), p = lf(v, m.mode, R), p.return = m, m = p), s(m)) : n(m, p)
    }
    return E
}
var zo = r0(!0),
    i0 = r0(!1),
    Il = {},
    Bn = ii(Il),
    ul = ii(Il),
    cl = ii(Il);

function yi(e) {
    if (e === Il) throw Error(j(174));
    return e
}

function Zh(e, t) {
    switch (Te(cl, t), Te(ul, e), Te(Bn, Il), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Qf(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qf(t, e)
    }
    Ne(Bn), Te(Bn, t)
}

function Ho() {
    Ne(Bn), Ne(ul), Ne(cl)
}

function o0(e) {
    yi(cl.current);
    var t = yi(Bn.current),
        n = Qf(t, e.type);
    t !== n && (Te(ul, e), Te(Bn, n))
}

function ep(e) {
    ul.current === e && (Ne(Bn), Ne(ul))
}
var Le = ii(0);

function Su(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var ef = [];

function tp() {
    for (var e = 0; e < ef.length; e++) ef[e]._workInProgressVersionPrimary = null;
    ef.length = 0
}
var $a = hr.ReactCurrentDispatcher,
    tf = hr.ReactCurrentBatchConfig,
    ji = 0,
    je = null,
    Je = null,
    it = null,
    bu = !1,
    Vs = !1,
    fl = 0,
    KE = 0;

function gt() {
    throw Error(j(321))
}

function np(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!bn(e[n], t[n])) return !1;
    return !0
}

function rp(e, t, n, r, i, o) {
    if (ji = o, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $a.current = e === null || e.memoizedState === null ? JE : ZE, e = n(r, i), Vs) {
        o = 0;
        do {
            if (Vs = !1, fl = 0, 25 <= o) throw Error(j(301));
            o += 1, it = Je = null, t.updateQueue = null, $a.current = eS, e = n(r, i)
        } while (Vs)
    }
    if ($a.current = Cu, t = Je !== null && Je.next !== null, ji = 0, it = Je = je = null, bu = !1, t) throw Error(j(300));
    return e
}

function ip() {
    var e = fl !== 0;
    return fl = 0, e
}

function Ln() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return it === null ? je.memoizedState = it = e : it = it.next = e, it
}

function cn() {
    if (Je === null) {
        var e = je.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = Je.next;
    var t = it === null ? je.memoizedState : it.next;
    if (t !== null) it = t, Je = e;
    else {
        if (e === null) throw Error(j(310));
        Je = e, e = {
            memoizedState: Je.memoizedState,
            baseState: Je.baseState,
            baseQueue: Je.baseQueue,
            queue: Je.queue,
            next: null
        }, it === null ? je.memoizedState = it = e : it = it.next = e
    }
    return it
}

function dl(e, t) {
    return typeof t == "function" ? t(e) : t
}

function nf(e) {
    var t = cn(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Je,
        i = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (i !== null) {
            var s = i.next;
            i.next = o.next, o.next = s
        }
        r.baseQueue = i = o, n.pending = null
    }
    if (i !== null) {
        o = i.next, r = r.baseState;
        var l = s = null,
            a = null,
            c = o;
        do {
            var u = c.lane;
            if ((ji & u) === u) a !== null && (a = a.next = {
                lane: 0,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null
            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var f = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                a === null ? (l = a = f, s = r) : a = a.next = f, je.lanes |= u, Ai |= u
            }
            c = c.next
        } while (c !== null && c !== o);
        a === null ? s = r : a.next = l, bn(r, t.memoizedState) || (At = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = a, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        i = e;
        do o = i.lane, je.lanes |= o, Ai |= o, i = i.next; while (i !== e)
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function rf(e) {
    var t = cn(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        i = n.pending,
        o = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var s = i = i.next;
        do o = e(o, s.action), s = s.next; while (s !== i);
        bn(o, t.memoizedState) || (At = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o
    }
    return [o, r]
}

function s0() {}

function l0(e, t) {
    var n = je,
        r = cn(),
        i = t(),
        o = !bn(r.memoizedState, i);
    if (o && (r.memoizedState = i, At = !0), r = r.queue, op(c0.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || it !== null && it.memoizedState.tag & 1) {
        if (n.flags |= 2048, hl(9, u0.bind(null, n, r, i, t), void 0, null), st === null) throw Error(j(349));
        ji & 30 || a0(n, t, i)
    }
    return i
}

function a0(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = je.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function u0(e, t, n, r) {
    t.value = n, t.getSnapshot = r, f0(t) && d0(e)
}

function c0(e, t, n) {
    return n(function() {
        f0(t) && d0(e)
    })
}

function f0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !bn(e, n)
    } catch {
        return !0
    }
}

function d0(e) {
    var t = ar(e, 1);
    t !== null && Sn(t, e, 1, -1)
}

function jm(e) {
    var t = Ln();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dl,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = XE.bind(null, je, e), [t.memoizedState, e]
}

function hl(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = je.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, je.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function h0() {
    return cn().memoizedState
}

function Ua(e, t, n, r) {
    var i = Ln();
    je.flags |= e, i.memoizedState = hl(1 | t, n, void 0, r === void 0 ? null : r)
}

function Zu(e, t, n, r) {
    var i = cn();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (Je !== null) {
        var s = Je.memoizedState;
        if (o = s.destroy, r !== null && np(r, s.deps)) {
            i.memoizedState = hl(t, n, o, r);
            return
        }
    }
    je.flags |= e, i.memoizedState = hl(1 | t, n, o, r)
}

function Am(e, t) {
    return Ua(8390656, 8, e, t)
}

function op(e, t) {
    return Zu(2048, 8, e, t)
}

function p0(e, t) {
    return Zu(4, 2, e, t)
}

function m0(e, t) {
    return Zu(4, 4, e, t)
}

function g0(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function y0(e, t, n) {
    return n = n != null ? n.concat([e]) : null, Zu(4, 4, g0.bind(null, t, e), n)
}

function sp() {}

function v0(e, t) {
    var n = cn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && np(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function w0(e, t) {
    var n = cn();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && np(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function x0(e, t, n) {
    return ji & 21 ? (bn(n, t) || (n = bv(), je.lanes |= n, Ai |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, At = !0), e.memoizedState = n)
}

function GE(e, t) {
    var n = Ee;
    Ee = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = tf.transition;
    tf.transition = {};
    try {
        e(!1), t()
    } finally {
        Ee = n, tf.transition = r
    }
}

function E0() {
    return cn().memoizedState
}

function YE(e, t, n) {
    var r = Gr(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, S0(e)) b0(t, n);
    else if (n = Zv(e, t, n, r), n !== null) {
        var i = Rt();
        Sn(n, e, r, i), C0(n, t, r)
    }
}

function XE(e, t, n) {
    var r = Gr(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (S0(e)) b0(t, i);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
            var s = t.lastRenderedState,
                l = o(s, n);
            if (i.hasEagerState = !0, i.eagerState = l, bn(l, s)) {
                var a = t.interleaved;
                a === null ? (i.next = i, Xh(t)) : (i.next = a.next, a.next = i), t.interleaved = i;
                return
            }
        } catch {} finally {}
        n = Zv(e, t, i, r), n !== null && (i = Rt(), Sn(n, e, r, i), C0(n, t, r))
    }
}

function S0(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je
}

function b0(e, t) {
    Vs = bu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function C0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, Ih(e, n)
    }
}
var Cu = {
        readContext: un,
        useCallback: gt,
        useContext: gt,
        useEffect: gt,
        useImperativeHandle: gt,
        useInsertionEffect: gt,
        useLayoutEffect: gt,
        useMemo: gt,
        useReducer: gt,
        useRef: gt,
        useState: gt,
        useDebugValue: gt,
        useDeferredValue: gt,
        useTransition: gt,
        useMutableSource: gt,
        useSyncExternalStore: gt,
        useId: gt,
        unstable_isNewReconciler: !1
    },
    JE = {
        readContext: un,
        useCallback: function(e, t) {
            return Ln().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: un,
        useEffect: Am,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Ua(4194308, 4, g0.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Ua(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ua(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ln();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Ln();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = YE.bind(null, je, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ln();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: jm,
        useDebugValue: sp,
        useDeferredValue: function(e) {
            return Ln().memoizedState = e
        },
        useTransition: function() {
            var e = jm(!1),
                t = e[0];
            return e = GE.bind(null, e[1]), Ln().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = je,
                i = Ln();
            if (Oe) {
                if (n === void 0) throw Error(j(407));
                n = n()
            } else {
                if (n = t(), st === null) throw Error(j(349));
                ji & 30 || a0(r, t, n)
            }
            i.memoizedState = n;
            var o = {
                value: n,
                getSnapshot: t
            };
            return i.queue = o, Am(c0.bind(null, r, o, e), [e]), r.flags |= 2048, hl(9, u0.bind(null, r, o, n, t), void 0, null), n
        },
        useId: function() {
            var e = Ln(),
                t = st.identifierPrefix;
            if (Oe) {
                var n = tr,
                    r = er;
                n = (r & ~(1 << 32 - En(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fl++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = KE++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    ZE = {
        readContext: un,
        useCallback: v0,
        useContext: un,
        useEffect: op,
        useImperativeHandle: y0,
        useInsertionEffect: p0,
        useLayoutEffect: m0,
        useMemo: w0,
        useReducer: nf,
        useRef: h0,
        useState: function() {
            return nf(dl)
        },
        useDebugValue: sp,
        useDeferredValue: function(e) {
            var t = cn();
            return x0(t, Je.memoizedState, e)
        },
        useTransition: function() {
            var e = nf(dl)[0],
                t = cn().memoizedState;
            return [e, t]
        },
        useMutableSource: s0,
        useSyncExternalStore: l0,
        useId: E0,
        unstable_isNewReconciler: !1
    },
    eS = {
        readContext: un,
        useCallback: v0,
        useContext: un,
        useEffect: op,
        useImperativeHandle: y0,
        useInsertionEffect: p0,
        useLayoutEffect: m0,
        useMemo: w0,
        useReducer: rf,
        useRef: h0,
        useState: function() {
            return rf(dl)
        },
        useDebugValue: sp,
        useDeferredValue: function(e) {
            var t = cn();
            return Je === null ? t.memoizedState = e : x0(t, Je.memoizedState, e)
        },
        useTransition: function() {
            var e = rf(dl)[0],
                t = cn().memoizedState;
            return [e, t]
        },
        useMutableSource: s0,
        useSyncExternalStore: l0,
        useId: E0,
        unstable_isNewReconciler: !1
    };

function Wo(e, t) {
    try {
        var n = "",
            r = t;
        do n += Px(r), r = r.return; while (r);
        var i = n
    } catch (o) {
        i = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}

function of(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function gd(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var tS = typeof WeakMap == "function" ? WeakMap : Map;

function T0(e, t, n) {
    n = nr(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        Ru || (Ru = !0, Rd = r), gd(e, t)
    }, n
}

function R0(e, t, n) {
    n = nr(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }, n.callback = function() {
            gd(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        gd(e, t), typeof r != "function" && (Kr === null ? Kr = new Set([this]) : Kr.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: s !== null ? s : ""
        })
    }), n
}

function Mm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new tS;
        var i = new Set;
        r.set(t, i)
    } else i = r.get(t), i === void 0 && (i = new Set, r.set(t, i));
    i.has(n) || (i.add(n), e = mS.bind(null, e, t, n), t.then(e, e))
}

function Im(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Fm(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = nr(-1, 1), t.tag = 2, Qr(n, t, 1))), n.lanes |= 1), e)
}
var nS = hr.ReactCurrentOwner,
    At = !1;

function Tt(e, t, n, r) {
    t.child = e === null ? i0(t, null, n, r) : zo(t, e.child, n, r)
}

function $m(e, t, n, r, i) {
    n = n.render;
    var o = t.ref;
    return xo(t, i), r = rp(e, t, n, r, o, i), n = ip(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ur(e, t, i)) : (Oe && n && Vh(t), t.flags |= 1, Tt(e, t, r, i), t.child)
}

function Um(e, t, n, r, i) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !pp(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, _0(e, t, o, r, i)) : (e = Wa(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (o = e.child, !(e.lanes & i)) {
        var s = o.memoizedProps;
        if (n = n.compare, n = n !== null ? n : ol, n(s, r) && e.ref === t.ref) return ur(e, t, i)
    }
    return t.flags |= 1, e = Yr(o, r), e.ref = t.ref, e.return = t, t.child = e
}

function _0(e, t, n, r, i) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (ol(o, r) && e.ref === t.ref)
            if (At = !1, t.pendingProps = r = o, (e.lanes & i) !== 0) e.flags & 131072 && (At = !0);
            else return t.lanes = e.lanes, ur(e, t, i)
    }
    return yd(e, t, n, r, i)
}

function P0(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, Te(fo, Ht), Ht |= n;
        else {
            if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, Te(fo, Ht), Ht |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = o !== null ? o.baseLanes : n, Te(fo, Ht), Ht |= r
        }
    else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, Te(fo, Ht), Ht |= r;
    return Tt(e, t, i, n), t.child
}

function N0(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function yd(e, t, n, r, i) {
    var o = It(n) ? Di : xt.current;
    return o = Uo(t, o), xo(t, i), n = rp(e, t, n, r, o, i), r = ip(), e !== null && !At ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~i, ur(e, t, i)) : (Oe && r && Vh(t), t.flags |= 1, Tt(e, t, n, i), t.child)
}

function Bm(e, t, n, r, i) {
    if (It(n)) {
        var o = !0;
        gu(t)
    } else o = !1;
    if (xo(t, i), t.stateNode === null) Ba(e, t), n0(t, n, r), md(t, n, r, i), r = !0;
    else if (e === null) {
        var s = t.stateNode,
            l = t.memoizedProps;
        s.props = l;
        var a = s.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? c = un(c) : (c = It(n) ? Di : xt.current, c = Uo(t, c));
        var u = n.getDerivedStateFromProps,
            f = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        f || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== r || a !== c) && Dm(t, s, r, c), Pr = !1;
        var h = t.memoizedState;
        s.state = h, Eu(t, r, s, i), a = t.memoizedState, l !== r || h !== a || Mt.current || Pr ? (typeof u == "function" && (pd(t, n, u, r), a = t.memoizedState), (l = Pr || km(t, n, l, r, h, a, c)) ? (f || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), s.props = r, s.state = a, s.context = c, r = l) : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        s = t.stateNode, e0(e, t), l = t.memoizedProps, c = t.type === t.elementType ? l : mn(t.type, l), s.props = c, f = t.pendingProps, h = s.context, a = n.contextType, typeof a == "object" && a !== null ? a = un(a) : (a = It(n) ? Di : xt.current, a = Uo(t, a));
        var x = n.getDerivedStateFromProps;
        (u = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (l !== f || h !== a) && Dm(t, s, r, a), Pr = !1, h = t.memoizedState, s.state = h, Eu(t, r, s, i);
        var y = t.memoizedState;
        l !== f || h !== y || Mt.current || Pr ? (typeof x == "function" && (pd(t, n, x, r), y = t.memoizedState), (c = Pr || km(t, n, c, r, h, y, a) || !1) ? (u || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, y, a), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, y, a)), typeof s.componentDidUpdate == "function" && (t.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), s.props = r, s.state = y, s.context = a, r = c) : (typeof s.componentDidUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && h === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return vd(e, t, n, r, o, i)
}

function vd(e, t, n, r, i, o) {
    N0(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return i && Rm(t, n, !1), ur(e, t, o);
    r = t.stateNode, nS.current = t;
    var l = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && s ? (t.child = zo(t, e.child, null, o), t.child = zo(t, null, l, o)) : Tt(e, t, l, o), t.memoizedState = r.state, i && Rm(t, n, !0), t.child
}

function O0(e) {
    var t = e.stateNode;
    t.pendingContext ? Tm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tm(e, t.context, !1), Zh(e, t.containerInfo)
}

function zm(e, t, n, r, i) {
    return Bo(), Qh(i), t.flags |= 256, Tt(e, t, n, r), t.child
}
var wd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function xd(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function k0(e, t, n) {
    var r = t.pendingProps,
        i = Le.current,
        o = !1,
        s = (t.flags & 128) !== 0,
        l;
    if ((l = s) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), l ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), Te(Le, i & 1), e === null) return dd(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (s = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, s = {
        mode: "hidden",
        children: s
    }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = s) : o = nc(s, r, 0, null), e = ki(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = xd(n), t.memoizedState = wd, e) : lp(t, s));
    if (i = e.memoizedState, i !== null && (l = i.dehydrated, l !== null)) return rS(e, t, s, r, l, i, n);
    if (o) {
        o = r.fallback, s = t.mode, i = e.child, l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(s & 1) && t.child !== i ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = Yr(i, a), r.subtreeFlags = i.subtreeFlags & 14680064), l !== null ? o = Yr(l, o) : (o = ki(o, s, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, s = e.child.memoizedState, s = s === null ? xd(n) : {
            baseLanes: s.baseLanes | n,
            cachePool: null,
            transitions: s.transitions
        }, o.memoizedState = s, o.childLanes = e.childLanes & ~n, t.memoizedState = wd, r
    }
    return o = e.child, e = o.sibling, r = Yr(o, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function lp(e, t) {
    return t = nc({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ga(e, t, n, r) {
    return r !== null && Qh(r), zo(t, e.child, null, n), e = lp(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function rS(e, t, n, r, i, o, s) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = of(Error(j(422))), ga(e, t, s, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, i = t.mode, r = nc({
        mode: "visible",
        children: r.children
    }, i, 0, null), o = ki(o, i, s, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && zo(t, e.child, null, s), t.child.memoizedState = xd(s), t.memoizedState = wd, o);
    if (!(t.mode & 1)) return ga(e, t, s, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset, r) var l = r.dgst;
        return r = l, o = Error(j(419)), r = of(o, r, void 0), ga(e, t, s, r)
    }
    if (l = (s & e.childLanes) !== 0, At || l) {
        if (r = st, r !== null) {
            switch (s & -s) {
                case 4:
                    i = 2;
                    break;
                case 16:
                    i = 8;
                    break;
                case 64:
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
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    i = 32;
                    break;
                case 536870912:
                    i = 268435456;
                    break;
                default:
                    i = 0
            }
            i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== o.retryLane && (o.retryLane = i, ar(e, i), Sn(r, e, i, -1))
        }
        return hp(), r = of(Error(j(421))), ga(e, t, s, r)
    }
    return i.data === "$?" ? (t.flags |= 128, t.child = e.child, t = gS.bind(null, e), i._reactRetry = t, null) : (e = o.treeContext, Wt = qr(i.nextSibling), Vt = t, Oe = !0, wn = null, e !== null && (rn[on++] = er, rn[on++] = tr, rn[on++] = Li, er = e.id, tr = e.overflow, Li = t), t = lp(t, r.children), t.flags |= 4096, t)
}

function Hm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), hd(e.return, t, n)
}

function sf(e, t, n, r, i) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i)
}

function D0(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        o = r.tail;
    if (Tt(e, t, r.children, n), r = Le.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Hm(e, n, t);
            else if (e.tag === 19) Hm(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (Te(Le, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (i) {
        case "forwards":
            for (n = t.child, i = null; n !== null;) e = n.alternate, e !== null && Su(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), sf(t, !1, i, n, o);
            break;
        case "backwards":
            for (n = null, i = t.child, t.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Su(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling, i.sibling = n, n = i, i = e
            }
            sf(t, !0, n, null, o);
            break;
        case "together":
            sf(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Ba(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function ur(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ai |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child, n = Yr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Yr(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function iS(e, t, n) {
    switch (t.tag) {
        case 3:
            O0(t), Bo();
            break;
        case 5:
            o0(t);
            break;
        case 1:
            It(t.type) && gu(t);
            break;
        case 4:
            Zh(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value;
            Te(wu, r._currentValue), r._currentValue = i;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (Te(Le, Le.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? k0(e, t, n) : (Te(Le, Le.current & 1), e = ur(e, t, n), e !== null ? e.sibling : null);
            Te(Le, Le.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return D0(e, t, n);
                t.flags |= 128
            }
            if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), Te(Le, Le.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, P0(e, t, n)
    }
    return ur(e, t, n)
}
var L0, Ed, j0, A0;
L0 = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ed = function() {};
j0 = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode, yi(Bn.current);
        var o = null;
        switch (n) {
            case "input":
                i = Hf(e, i), r = Hf(e, r), o = [];
                break;
            case "select":
                i = Ae({}, i, {
                    value: void 0
                }), r = Ae({}, r, {
                    value: void 0
                }), o = [];
                break;
            case "textarea":
                i = qf(e, i), r = qf(e, r), o = [];
                break;
            default:
                typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = pu)
        }
        Kf(n, r);
        var s;
        n = null;
        for (c in i)
            if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
                if (c === "style") {
                    var l = i[c];
                    for (s in l) l.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Js.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var a = r[c];
            if (l = i != null ? i[c] : void 0, r.hasOwnProperty(c) && a !== l && (a != null || l != null))
                if (c === "style")
                    if (l) {
                        for (s in l) !l.hasOwnProperty(s) || a && a.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                        for (s in a) a.hasOwnProperty(s) && l[s] !== a[s] && (n || (n = {}), n[s] = a[s])
                    } else n || (o || (o = []), o.push(c, n)), n = a;
            else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, l = l ? l.__html : void 0, a != null && l !== a && (o = o || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (o = o || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Js.hasOwnProperty(c) ? (a != null && c === "onScroll" && Pe("scroll", e), o || l === a || (o = [])) : (o = o || []).push(c, a))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
};
A0 = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function gs(e, t) {
    if (!Oe) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function yt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
    else
        for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function oS(e, t, n) {
    var r = t.pendingProps;
    switch (qh(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return yt(t), null;
        case 1:
            return It(t.type) && mu(), yt(t), null;
        case 3:
            return r = t.stateNode, Ho(), Ne(Mt), Ne(xt), tp(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (pa(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, wn !== null && (Nd(wn), wn = null))), Ed(e, t), yt(t), null;
        case 5:
            ep(t);
            var i = yi(cl.current);
            if (n = t.type, e !== null && t.stateNode != null) j0(e, t, n, r, i), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(j(166));
                    return yt(t), null
                }
                if (e = yi(Bn.current), pa(t)) {
                    r = t.stateNode, n = t.type;
                    var o = t.memoizedProps;
                    switch (r[Fn] = t, r[al] = o, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            Pe("cancel", r), Pe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Pe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < As.length; i++) Pe(As[i], r);
                            break;
                        case "source":
                            Pe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Pe("error", r), Pe("load", r);
                            break;
                        case "details":
                            Pe("toggle", r);
                            break;
                        case "input":
                            Jp(r, o), Pe("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!o.multiple
                            }, Pe("invalid", r);
                            break;
                        case "textarea":
                            em(r, o), Pe("invalid", r)
                    }
                    Kf(n, o), i = null;
                    for (var s in o)
                        if (o.hasOwnProperty(s)) {
                            var l = o[s];
                            s === "children" ? typeof l == "string" ? r.textContent !== l && (o.suppressHydrationWarning !== !0 && ha(r.textContent, l, e), i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (o.suppressHydrationWarning !== !0 && ha(r.textContent, l, e), i = ["children", "" + l]) : Js.hasOwnProperty(s) && l != null && s === "onScroll" && Pe("scroll", r)
                        } switch (n) {
                        case "input":
                            oa(r), Zp(r, o, !0);
                            break;
                        case "textarea":
                            oa(r), tm(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof o.onClick == "function" && (r.onclick = pu)
                    }
                    r = i, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = av(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, {
                        is: r.is
                    }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[Fn] = t, e[al] = r, L0(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (s = Gf(n, r), n) {
                            case "dialog":
                                Pe("cancel", e), Pe("close", e), i = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Pe("load", e), i = r;
                                break;
                            case "video":
                            case "audio":
                                for (i = 0; i < As.length; i++) Pe(As[i], e);
                                i = r;
                                break;
                            case "source":
                                Pe("error", e), i = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Pe("error", e), Pe("load", e), i = r;
                                break;
                            case "details":
                                Pe("toggle", e), i = r;
                                break;
                            case "input":
                                Jp(e, r), i = Hf(e, r), Pe("invalid", e);
                                break;
                            case "option":
                                i = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, i = Ae({}, r, {
                                    value: void 0
                                }), Pe("invalid", e);
                                break;
                            case "textarea":
                                em(e, r), i = qf(e, r), Pe("invalid", e);
                                break;
                            default:
                                i = r
                        }
                        Kf(n, i),
                        l = i;
                        for (o in l)
                            if (l.hasOwnProperty(o)) {
                                var a = l[o];
                                o === "style" ? fv(e, a) : o === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && uv(e, a)) : o === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Zs(e, a) : typeof a == "number" && Zs(e, "" + a) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Js.hasOwnProperty(o) ? a != null && o === "onScroll" && Pe("scroll", e) : a != null && kh(e, o, a, s))
                            } switch (n) {
                            case "input":
                                oa(e), Zp(e, r, !1);
                                break;
                            case "textarea":
                                oa(e), tm(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + ei(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, o = r.value, o != null ? go(e, !!r.multiple, o, !1) : r.defaultValue != null && go(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof i.onClick == "function" && (e.onclick = pu)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return yt(t), null;
        case 6:
            if (e && t.stateNode != null) A0(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
                if (n = yi(cl.current), yi(Bn.current), pa(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Fn] = t, (o = r.nodeValue !== n) && (e = Vt, e !== null)) switch (e.tag) {
                        case 3:
                            ha(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && ha(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    o && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Fn] = t, t.stateNode = r
            }
            return yt(t), null;
        case 13:
            if (Ne(Le), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Oe && Wt !== null && t.mode & 1 && !(t.flags & 128)) Jv(), Bo(), t.flags |= 98560, o = !1;
                else if (o = pa(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!o) throw Error(j(318));
                        if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(j(317));
                        o[Fn] = t
                    } else Bo(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    yt(t), o = !1
                } else wn !== null && (Nd(wn), wn = null), o = !0;
                if (!o) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Le.current & 1 ? Ze === 0 && (Ze = 3) : hp())), t.updateQueue !== null && (t.flags |= 4), yt(t), null);
        case 4:
            return Ho(), Ed(e, t), e === null && sl(t.stateNode.containerInfo), yt(t), null;
        case 10:
            return Yh(t.type._context), yt(t), null;
        case 17:
            return It(t.type) && mu(), yt(t), null;
        case 19:
            if (Ne(Le), o = t.memoizedState, o === null) return yt(t), null;
            if (r = (t.flags & 128) !== 0, s = o.rendering, s === null)
                if (r) gs(o, !1);
                else {
                    if (Ze !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (s = Su(e), s !== null) {
                                for (t.flags |= 128, gs(o, !1), r = s.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) o = n, e = r, o.flags &= 14680066, s = o.alternate, s === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = s.childLanes, o.lanes = s.lanes, o.child = s.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = s.memoizedProps, o.memoizedState = s.memoizedState, o.updateQueue = s.updateQueue, o.type = s.type, e = s.dependencies, o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return Te(Le, Le.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    o.tail !== null && qe() > Vo && (t.flags |= 128, r = !0, gs(o, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Su(s), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), gs(o, !0), o.tail === null && o.tailMode === "hidden" && !s.alternate && !Oe) return yt(t), null
                    } else 2 * qe() - o.renderingStartTime > Vo && n !== 1073741824 && (t.flags |= 128, r = !0, gs(o, !1), t.lanes = 4194304);
                o.isBackwards ? (s.sibling = t.child, t.child = s) : (n = o.last, n !== null ? n.sibling = s : t.child = s, o.last = s)
            }
            return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = qe(), t.sibling = null, n = Le.current, Te(Le, r ? n & 1 | 2 : n & 1), t) : (yt(t), null);
        case 22:
        case 23:
            return dp(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ht & 1073741824 && (yt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yt(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(j(156, t.tag))
}

function sS(e, t) {
    switch (qh(t), t.tag) {
        case 1:
            return It(t.type) && mu(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Ho(), Ne(Mt), Ne(xt), tp(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return ep(t), null;
        case 13:
            if (Ne(Le), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(j(340));
                Bo()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Ne(Le), null;
        case 4:
            return Ho(), null;
        case 10:
            return Yh(t.type._context), null;
        case 22:
        case 23:
            return dp(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var ya = !1,
    wt = !1,
    lS = typeof WeakSet == "function" ? WeakSet : Set,
    z = null;

function co(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            Fe(e, t, r)
        } else n.current = null
}

function Sd(e, t, n) {
    try {
        n()
    } catch (r) {
        Fe(e, t, r)
    }
}
var Wm = !1;

function aS(e, t) {
    if (od = fu, e = $v(), Wh(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset,
                    o = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, o.nodeType
                } catch {
                    n = null;
                    break e
                }
                var s = 0,
                    l = -1,
                    a = -1,
                    c = 0,
                    u = 0,
                    f = e,
                    h = null;
                t: for (;;) {
                    for (var x; f !== n || i !== 0 && f.nodeType !== 3 || (l = s + i), f !== o || r !== 0 && f.nodeType !== 3 || (a = s + r), f.nodeType === 3 && (s += f.nodeValue.length), (x = f.firstChild) !== null;) h = f, f = x;
                    for (;;) {
                        if (f === e) break t;
                        if (h === n && ++c === i && (l = s), h === o && ++u === r && (a = s), (x = f.nextSibling) !== null) break;
                        f = h, h = f.parentNode
                    }
                    f = x
                }
                n = l === -1 || a === -1 ? null : {
                    start: l,
                    end: a
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (sd = {
            focusedElem: e,
            selectionRange: n
        }, fu = !1, z = t; z !== null;)
        if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
        else
            for (; z !== null;) {
                t = z;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var w = y.memoizedProps,
                                    E = y.memoizedState,
                                    m = t.stateNode,
                                    p = m.getSnapshotBeforeUpdate(t.elementType === t.type ? w : mn(t.type, w), E);
                                m.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                    }
                } catch (R) {
                    Fe(t, t.return, R)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, z = e;
                    break
                }
                z = t.return
            }
    return y = Wm, Wm = !1, y
}

function qs(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var o = i.destroy;
                i.destroy = void 0, o !== void 0 && Sd(t, n, o)
            }
            i = i.next
        } while (i !== r)
    }
}

function ec(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function bd(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function M0(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, M0(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Fn], delete t[al], delete t[ud], delete t[WE], delete t[VE])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function I0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Vm(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || I0(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Cd(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = pu));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Cd(e, t, n), e = e.sibling; e !== null;) Cd(e, t, n), e = e.sibling
}

function Td(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Td(e, t, n), e = e.sibling; e !== null;) Td(e, t, n), e = e.sibling
}
var ut = null,
    yn = !1;

function Sr(e, t, n) {
    for (n = n.child; n !== null;) F0(e, t, n), n = n.sibling
}

function F0(e, t, n) {
    if (Un && typeof Un.onCommitFiberUnmount == "function") try {
        Un.onCommitFiberUnmount(qu, n)
    } catch {}
    switch (n.tag) {
        case 5:
            wt || co(n, t);
        case 6:
            var r = ut,
                i = yn;
            ut = null, Sr(e, t, n), ut = r, yn = i, ut !== null && (yn ? (e = ut, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ut.removeChild(n.stateNode));
            break;
        case 18:
            ut !== null && (yn ? (e = ut, n = n.stateNode, e.nodeType === 8 ? Jc(e.parentNode, n) : e.nodeType === 1 && Jc(e, n), rl(e)) : Jc(ut, n.stateNode));
            break;
        case 4:
            r = ut, i = yn, ut = n.stateNode.containerInfo, yn = !0, Sr(e, t, n), ut = r, yn = i;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!wt && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                i = r = r.next;
                do {
                    var o = i,
                        s = o.destroy;
                    o = o.tag, s !== void 0 && (o & 2 || o & 4) && Sd(n, t, s), i = i.next
                } while (i !== r)
            }
            Sr(e, t, n);
            break;
        case 1:
            if (!wt && (co(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (l) {
                Fe(n, t, l)
            }
            Sr(e, t, n);
            break;
        case 21:
            Sr(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (wt = (r = wt) || n.memoizedState !== null, Sr(e, t, n), wt = r) : Sr(e, t, n);
            break;
        default:
            Sr(e, t, n)
    }
}

function qm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new lS), t.forEach(function(r) {
            var i = yS.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(i, i))
        })
    }
}

function pn(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var o = e,
                    s = t,
                    l = s;
                e: for (; l !== null;) {
                    switch (l.tag) {
                        case 5:
                            ut = l.stateNode, yn = !1;
                            break e;
                        case 3:
                            ut = l.stateNode.containerInfo, yn = !0;
                            break e;
                        case 4:
                            ut = l.stateNode.containerInfo, yn = !0;
                            break e
                    }
                    l = l.return
                }
                if (ut === null) throw Error(j(160));
                F0(o, s, i), ut = null, yn = !1;
                var a = i.alternate;
                a !== null && (a.return = null), i.return = null
            } catch (c) {
                Fe(i, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) $0(t, e), t = t.sibling
}

function $0(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (pn(t, e), Dn(e), r & 4) {
                try {
                    qs(3, e, e.return), ec(3, e)
                } catch (w) {
                    Fe(e, e.return, w)
                }
                try {
                    qs(5, e, e.return)
                } catch (w) {
                    Fe(e, e.return, w)
                }
            }
            break;
        case 1:
            pn(t, e), Dn(e), r & 512 && n !== null && co(n, n.return);
            break;
        case 5:
            if (pn(t, e), Dn(e), r & 512 && n !== null && co(n, n.return), e.flags & 32) {
                var i = e.stateNode;
                try {
                    Zs(i, "")
                } catch (w) {
                    Fe(e, e.return, w)
                }
            }
            if (r & 4 && (i = e.stateNode, i != null)) {
                var o = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : o,
                    l = e.type,
                    a = e.updateQueue;
                if (e.updateQueue = null, a !== null) try {
                    l === "input" && o.type === "radio" && o.name != null && sv(i, o), Gf(l, s);
                    var c = Gf(l, o);
                    for (s = 0; s < a.length; s += 2) {
                        var u = a[s],
                            f = a[s + 1];
                        u === "style" ? fv(i, f) : u === "dangerouslySetInnerHTML" ? uv(i, f) : u === "children" ? Zs(i, f) : kh(i, u, f, c)
                    }
                    switch (l) {
                        case "input":
                            Wf(i, o);
                            break;
                        case "textarea":
                            lv(i, o);
                            break;
                        case "select":
                            var h = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!o.multiple;
                            var x = o.value;
                            x != null ? go(i, !!o.multiple, x, !1) : h !== !!o.multiple && (o.defaultValue != null ? go(i, !!o.multiple, o.defaultValue, !0) : go(i, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    i[al] = o
                } catch (w) {
                    Fe(e, e.return, w)
                }
            }
            break;
        case 6:
            if (pn(t, e), Dn(e), r & 4) {
                if (e.stateNode === null) throw Error(j(162));
                i = e.stateNode, o = e.memoizedProps;
                try {
                    i.nodeValue = o
                } catch (w) {
                    Fe(e, e.return, w)
                }
            }
            break;
        case 3:
            if (pn(t, e), Dn(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                rl(t.containerInfo)
            } catch (w) {
                Fe(e, e.return, w)
            }
            break;
        case 4:
            pn(t, e), Dn(e);
            break;
        case 13:
            pn(t, e), Dn(e), i = e.child, i.flags & 8192 && (o = i.memoizedState !== null, i.stateNode.isHidden = o, !o || i.alternate !== null && i.alternate.memoizedState !== null || (cp = qe())), r & 4 && qm(e);
            break;
        case 22:
            if (u = n !== null && n.memoizedState !== null, e.mode & 1 ? (wt = (c = wt) || u, pn(t, e), wt = c) : pn(t, e), Dn(e), r & 8192) {
                if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !u && e.mode & 1)
                    for (z = e, u = e.child; u !== null;) {
                        for (f = z = u; z !== null;) {
                            switch (h = z, x = h.child, h.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    qs(4, h, h.return);
                                    break;
                                case 1:
                                    co(h, h.return);
                                    var y = h.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        r = h, n = h.return;
                                        try {
                                            t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount()
                                        } catch (w) {
                                            Fe(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    co(h, h.return);
                                    break;
                                case 22:
                                    if (h.memoizedState !== null) {
                                        Km(f);
                                        continue
                                    }
                            }
                            x !== null ? (x.return = h, z = x) : Km(f)
                        }
                        u = u.sibling
                    }
                e: for (u = null, f = e;;) {
                    if (f.tag === 5) {
                        if (u === null) {
                            u = f;
                            try {
                                i = f.stateNode, c ? (o = i.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (l = f.stateNode, a = f.memoizedProps.style, s = a != null && a.hasOwnProperty("display") ? a.display : null, l.style.display = cv("display", s))
                            } catch (w) {
                                Fe(e, e.return, w)
                            }
                        }
                    } else if (f.tag === 6) {
                        if (u === null) try {
                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                        } catch (w) {
                            Fe(e, e.return, w)
                        }
                    } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                        f.child.return = f, f = f.child;
                        continue
                    }
                    if (f === e) break e;
                    for (; f.sibling === null;) {
                        if (f.return === null || f.return === e) break e;
                        u === f && (u = null), f = f.return
                    }
                    u === f && (u = null), f.sibling.return = f.return, f = f.sibling
                }
            }
            break;
        case 19:
            pn(t, e), Dn(e), r & 4 && qm(e);
            break;
        case 21:
            break;
        default:
            pn(t, e), Dn(e)
    }
}

function Dn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (I0(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode;
                    r.flags & 32 && (Zs(i, ""), r.flags &= -33);
                    var o = Vm(e);
                    Td(e, o, i);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        l = Vm(e);
                    Cd(e, l, s);
                    break;
                default:
                    throw Error(j(161))
            }
        }
        catch (a) {
            Fe(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function uS(e, t, n) {
    z = e, U0(e)
}

function U0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null;) {
        var i = z,
            o = i.child;
        if (i.tag === 22 && r) {
            var s = i.memoizedState !== null || ya;
            if (!s) {
                var l = i.alternate,
                    a = l !== null && l.memoizedState !== null || wt;
                l = ya;
                var c = wt;
                if (ya = s, (wt = a) && !c)
                    for (z = i; z !== null;) s = z, a = s.child, s.tag === 22 && s.memoizedState !== null ? Gm(i) : a !== null ? (a.return = s, z = a) : Gm(i);
                for (; o !== null;) z = o, U0(o), o = o.sibling;
                z = i, ya = l, wt = c
            }
            Qm(e)
        } else i.subtreeFlags & 8772 && o !== null ? (o.return = i, z = o) : Qm(e)
    }
}

function Qm(e) {
    for (; z !== null;) {
        var t = z;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        wt || ec(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !wt)
                            if (n === null) r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : mn(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            } var o = t.updateQueue;
                        o !== null && Om(t, o, r);
                        break;
                    case 3:
                        var s = t.updateQueue;
                        if (s !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Om(t, s, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a.autoFocus && n.focus();
                                    break;
                                case "img":
                                    a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var u = c.memoizedState;
                                if (u !== null) {
                                    var f = u.dehydrated;
                                    f !== null && rl(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                }
                wt || t.flags & 512 && bd(t)
            } catch (h) {
                Fe(t, t.return, h)
            }
        }
        if (t === e) {
            z = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function Km(e) {
    for (; z !== null;) {
        var t = z;
        if (t === e) {
            z = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, z = n;
            break
        }
        z = t.return
    }
}

function Gm(e) {
    for (; z !== null;) {
        var t = z;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ec(4, t)
                    } catch (a) {
                        Fe(t, n, a)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var i = t.return;
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            Fe(t, i, a)
                        }
                    }
                    var o = t.return;
                    try {
                        bd(t)
                    } catch (a) {
                        Fe(t, o, a)
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        bd(t)
                    } catch (a) {
                        Fe(t, s, a)
                    }
            }
        } catch (a) {
            Fe(t, t.return, a)
        }
        if (t === e) {
            z = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return, z = l;
            break
        }
        z = t.return
    }
}
var cS = Math.ceil,
    Tu = hr.ReactCurrentDispatcher,
    ap = hr.ReactCurrentOwner,
    ln = hr.ReactCurrentBatchConfig,
    me = 0,
    st = null,
    Ke = null,
    dt = 0,
    Ht = 0,
    fo = ii(0),
    Ze = 0,
    pl = null,
    Ai = 0,
    tc = 0,
    up = 0,
    Qs = null,
    jt = null,
    cp = 0,
    Vo = 1 / 0,
    Xn = null,
    Ru = !1,
    Rd = null,
    Kr = null,
    va = !1,
    Ur = null,
    _u = 0,
    Ks = 0,
    _d = null,
    za = -1,
    Ha = 0;

function Rt() {
    return me & 6 ? qe() : za !== -1 ? za : za = qe()
}

function Gr(e) {
    return e.mode & 1 ? me & 2 && dt !== 0 ? dt & -dt : QE.transition !== null ? (Ha === 0 && (Ha = bv()), Ha) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Ov(e.type)), e) : 1
}

function Sn(e, t, n, r) {
    if (50 < Ks) throw Ks = 0, _d = null, Error(j(185));
    jl(e, n, r), (!(me & 2) || e !== st) && (e === st && (!(me & 2) && (tc |= n), Ze === 4 && Or(e, dt)), Ft(e, r), n === 1 && me === 0 && !(t.mode & 1) && (Vo = qe() + 500, Xu && oi()))
}

function Ft(e, t) {
    var n = e.callbackNode;
    Qx(e, t);
    var r = cu(e, e === st ? dt : 0);
    if (r === 0) n !== null && im(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && im(n), t === 1) e.tag === 0 ? qE(Ym.bind(null, e)) : Gv(Ym.bind(null, e)), zE(function() {
            !(me & 6) && oi()
        }), n = null;
        else {
            switch (Cv(r)) {
                case 1:
                    n = Mh;
                    break;
                case 4:
                    n = Ev;
                    break;
                case 16:
                    n = uu;
                    break;
                case 536870912:
                    n = Sv;
                    break;
                default:
                    n = uu
            }
            n = K0(n, B0.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function B0(e, t) {
    if (za = -1, Ha = 0, me & 6) throw Error(j(327));
    var n = e.callbackNode;
    if (Eo() && e.callbackNode !== n) return null;
    var r = cu(e, e === st ? dt : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Pu(e, r);
    else {
        t = r;
        var i = me;
        me |= 2;
        var o = H0();
        (st !== e || dt !== t) && (Xn = null, Vo = qe() + 500, Oi(e, t));
        do try {
            hS();
            break
        } catch (l) {
            z0(e, l)
        }
        while (1);
        Gh(), Tu.current = o, me = i, Ke !== null ? t = 0 : (st = null, dt = 0, t = Ze)
    }
    if (t !== 0) {
        if (t === 2 && (i = ed(e), i !== 0 && (r = i, t = Pd(e, i))), t === 1) throw n = pl, Oi(e, 0), Or(e, r), Ft(e, qe()), n;
        if (t === 6) Or(e, r);
        else {
            if (i = e.current.alternate, !(r & 30) && !fS(i) && (t = Pu(e, r), t === 2 && (o = ed(e), o !== 0 && (r = o, t = Pd(e, o))), t === 1)) throw n = pl, Oi(e, 0), Or(e, r), Ft(e, qe()), n;
            switch (e.finishedWork = i, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(j(345));
                case 2:
                    pi(e, jt, Xn);
                    break;
                case 3:
                    if (Or(e, r), (r & 130023424) === r && (t = cp + 500 - qe(), 10 < t)) {
                        if (cu(e, 0) !== 0) break;
                        if (i = e.suspendedLanes, (i & r) !== r) {
                            Rt(), e.pingedLanes |= e.suspendedLanes & i;
                            break
                        }
                        e.timeoutHandle = ad(pi.bind(null, e, jt, Xn), t);
                        break
                    }
                    pi(e, jt, Xn);
                    break;
                case 4:
                    if (Or(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, i = -1; 0 < r;) {
                        var s = 31 - En(r);
                        o = 1 << s, s = t[s], s > i && (i = s), r &= ~o
                    }
                    if (r = i, r = qe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * cS(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = ad(pi.bind(null, e, jt, Xn), r);
                        break
                    }
                    pi(e, jt, Xn);
                    break;
                case 5:
                    pi(e, jt, Xn);
                    break;
                default:
                    throw Error(j(329))
            }
        }
    }
    return Ft(e, qe()), e.callbackNode === n ? B0.bind(null, e) : null
}

function Pd(e, t) {
    var n = Qs;
    return e.current.memoizedState.isDehydrated && (Oi(e, t).flags |= 256), e = Pu(e, t), e !== 2 && (t = jt, jt = n, t !== null && Nd(t)), e
}

function Nd(e) {
    jt === null ? jt = e : jt.push.apply(jt, e)
}

function fS(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        o = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!bn(o(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Or(e, t) {
    for (t &= ~up, t &= ~tc, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - En(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ym(e) {
    if (me & 6) throw Error(j(327));
    Eo();
    var t = cu(e, 0);
    if (!(t & 1)) return Ft(e, qe()), null;
    var n = Pu(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ed(e);
        r !== 0 && (t = r, n = Pd(e, r))
    }
    if (n === 1) throw n = pl, Oi(e, 0), Or(e, t), Ft(e, qe()), n;
    if (n === 6) throw Error(j(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, pi(e, jt, Xn), Ft(e, qe()), null
}

function fp(e, t) {
    var n = me;
    me |= 1;
    try {
        return e(t)
    } finally {
        me = n, me === 0 && (Vo = qe() + 500, Xu && oi())
    }
}

function Mi(e) {
    Ur !== null && Ur.tag === 0 && !(me & 6) && Eo();
    var t = me;
    me |= 1;
    var n = ln.transition,
        r = Ee;
    try {
        if (ln.transition = null, Ee = 1, e) return e()
    } finally {
        Ee = r, ln.transition = n, me = t, !(me & 6) && oi()
    }
}

function dp() {
    Ht = fo.current, Ne(fo)
}

function Oi(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, BE(n)), Ke !== null)
        for (n = Ke.return; n !== null;) {
            var r = n;
            switch (qh(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && mu();
                    break;
                case 3:
                    Ho(), Ne(Mt), Ne(xt), tp();
                    break;
                case 5:
                    ep(r);
                    break;
                case 4:
                    Ho();
                    break;
                case 13:
                    Ne(Le);
                    break;
                case 19:
                    Ne(Le);
                    break;
                case 10:
                    Yh(r.type._context);
                    break;
                case 22:
                case 23:
                    dp()
            }
            n = n.return
        }
    if (st = e, Ke = e = Yr(e.current, null), dt = Ht = t, Ze = 0, pl = null, up = tc = Ai = 0, jt = Qs = null, gi !== null) {
        for (t = 0; t < gi.length; t++)
            if (n = gi[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var i = r.next,
                    o = n.pending;
                if (o !== null) {
                    var s = o.next;
                    o.next = i, r.next = s
                }
                n.pending = r
            } gi = null
    }
    return e
}

function z0(e, t) {
    do {
        var n = Ke;
        try {
            if (Gh(), $a.current = Cu, bu) {
                for (var r = je.memoizedState; r !== null;) {
                    var i = r.queue;
                    i !== null && (i.pending = null), r = r.next
                }
                bu = !1
            }
            if (ji = 0, it = Je = je = null, Vs = !1, fl = 0, ap.current = null, n === null || n.return === null) {
                Ze = 1, pl = t, Ke = null;
                break
            }
            e: {
                var o = e,
                    s = n.return,
                    l = n,
                    a = t;
                if (t = dt, l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                    var c = a,
                        u = l,
                        f = u.tag;
                    if (!(u.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var h = u.alternate;
                        h ? (u.updateQueue = h.updateQueue, u.memoizedState = h.memoizedState, u.lanes = h.lanes) : (u.updateQueue = null, u.memoizedState = null)
                    }
                    var x = Im(s);
                    if (x !== null) {
                        x.flags &= -257, Fm(x, s, l, o, t), x.mode & 1 && Mm(o, c, t), t = x, a = c;
                        var y = t.updateQueue;
                        if (y === null) {
                            var w = new Set;
                            w.add(a), t.updateQueue = w
                        } else y.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Mm(o, c, t), hp();
                            break e
                        }
                        a = Error(j(426))
                    }
                } else if (Oe && l.mode & 1) {
                    var E = Im(s);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256), Fm(E, s, l, o, t), Qh(Wo(a, l));
                        break e
                    }
                }
                o = a = Wo(a, l),
                Ze !== 4 && (Ze = 2),
                Qs === null ? Qs = [o] : Qs.push(o),
                o = s;do {
                    switch (o.tag) {
                        case 3:
                            o.flags |= 65536, t &= -t, o.lanes |= t;
                            var m = T0(o, a, t);
                            Nm(o, m);
                            break e;
                        case 1:
                            l = a;
                            var p = o.type,
                                v = o.stateNode;
                            if (!(o.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Kr === null || !Kr.has(v)))) {
                                o.flags |= 65536, t &= -t, o.lanes |= t;
                                var R = R0(o, l, t);
                                Nm(o, R);
                                break e
                            }
                    }
                    o = o.return
                } while (o !== null)
            }
            V0(n)
        } catch (P) {
            t = P, Ke === n && n !== null && (Ke = n = n.return);
            continue
        }
        break
    } while (1)
}

function H0() {
    var e = Tu.current;
    return Tu.current = Cu, e === null ? Cu : e
}

function hp() {
    (Ze === 0 || Ze === 3 || Ze === 2) && (Ze = 4), st === null || !(Ai & 268435455) && !(tc & 268435455) || Or(st, dt)
}

function Pu(e, t) {
    var n = me;
    me |= 2;
    var r = H0();
    (st !== e || dt !== t) && (Xn = null, Oi(e, t));
    do try {
        dS();
        break
    } catch (i) {
        z0(e, i)
    }
    while (1);
    if (Gh(), me = n, Tu.current = r, Ke !== null) throw Error(j(261));
    return st = null, dt = 0, Ze
}

function dS() {
    for (; Ke !== null;) W0(Ke)
}

function hS() {
    for (; Ke !== null && !Fx();) W0(Ke)
}

function W0(e) {
    var t = Q0(e.alternate, e, Ht);
    e.memoizedProps = e.pendingProps, t === null ? V0(e) : Ke = t, ap.current = null
}

function V0(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = sS(n, t), n !== null) {
                n.flags &= 32767, Ke = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Ze = 6, Ke = null;
                return
            }
        } else if (n = oS(n, t, Ht), n !== null) {
            Ke = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Ke = t;
            return
        }
        Ke = t = e
    } while (t !== null);
    Ze === 0 && (Ze = 5)
}

function pi(e, t, n) {
    var r = Ee,
        i = ln.transition;
    try {
        ln.transition = null, Ee = 1, pS(e, t, n, r)
    } finally {
        ln.transition = i, Ee = r
    }
    return null
}

function pS(e, t, n, r) {
    do Eo(); while (Ur !== null);
    if (me & 6) throw Error(j(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(j(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (Kx(e, o), e === st && (Ke = st = null, dt = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || va || (va = !0, K0(uu, function() {
            return Eo(), null
        })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
        o = ln.transition, ln.transition = null;
        var s = Ee;
        Ee = 1;
        var l = me;
        me |= 4, ap.current = null, aS(e, n), $0(n, e), jE(sd), fu = !!od, sd = od = null, e.current = n, uS(n), $x(), me = l, Ee = s, ln.transition = o
    } else e.current = n;
    if (va && (va = !1, Ur = e, _u = i), o = e.pendingLanes, o === 0 && (Kr = null), zx(n.stateNode), Ft(e, qe()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) i = t[n], r(i.value, {
            componentStack: i.stack,
            digest: i.digest
        });
    if (Ru) throw Ru = !1, e = Rd, Rd = null, e;
    return _u & 1 && e.tag !== 0 && Eo(), o = e.pendingLanes, o & 1 ? e === _d ? Ks++ : (Ks = 0, _d = e) : Ks = 0, oi(), null
}

function Eo() {
    if (Ur !== null) {
        var e = Cv(_u),
            t = ln.transition,
            n = Ee;
        try {
            if (ln.transition = null, Ee = 16 > e ? 16 : e, Ur === null) var r = !1;
            else {
                if (e = Ur, Ur = null, _u = 0, me & 6) throw Error(j(331));
                var i = me;
                for (me |= 4, z = e.current; z !== null;) {
                    var o = z,
                        s = o.child;
                    if (z.flags & 16) {
                        var l = o.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var c = l[a];
                                for (z = c; z !== null;) {
                                    var u = z;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            qs(8, u, o)
                                    }
                                    var f = u.child;
                                    if (f !== null) f.return = u, z = f;
                                    else
                                        for (; z !== null;) {
                                            u = z;
                                            var h = u.sibling,
                                                x = u.return;
                                            if (M0(u), u === c) {
                                                z = null;
                                                break
                                            }
                                            if (h !== null) {
                                                h.return = x, z = h;
                                                break
                                            }
                                            z = x
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var w = y.child;
                                if (w !== null) {
                                    y.child = null;
                                    do {
                                        var E = w.sibling;
                                        w.sibling = null, w = E
                                    } while (w !== null)
                                }
                            }
                            z = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && s !== null) s.return = o, z = s;
                    else e: for (; z !== null;) {
                        if (o = z, o.flags & 2048) switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                                qs(9, o, o.return)
                        }
                        var m = o.sibling;
                        if (m !== null) {
                            m.return = o.return, z = m;
                            break e
                        }
                        z = o.return
                    }
                }
                var p = e.current;
                for (z = p; z !== null;) {
                    s = z;
                    var v = s.child;
                    if (s.subtreeFlags & 2064 && v !== null) v.return = s, z = v;
                    else e: for (s = p; z !== null;) {
                        if (l = z, l.flags & 2048) try {
                            switch (l.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ec(9, l)
                            }
                        } catch (P) {
                            Fe(l, l.return, P)
                        }
                        if (l === s) {
                            z = null;
                            break e
                        }
                        var R = l.sibling;
                        if (R !== null) {
                            R.return = l.return, z = R;
                            break e
                        }
                        z = l.return
                    }
                }
                if (me = i, oi(), Un && typeof Un.onPostCommitFiberRoot == "function") try {
                    Un.onPostCommitFiberRoot(qu, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            Ee = n, ln.transition = t
        }
    }
    return !1
}

function Xm(e, t, n) {
    t = Wo(n, t), t = T0(e, t, 1), e = Qr(e, t, 1), t = Rt(), e !== null && (jl(e, 1, t), Ft(e, t))
}

function Fe(e, t, n) {
    if (e.tag === 3) Xm(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Xm(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kr === null || !Kr.has(r))) {
                    e = Wo(n, e), e = R0(t, e, 1), t = Qr(t, e, 1), e = Rt(), t !== null && (jl(t, 1, e), Ft(t, e));
                    break
                }
            }
            t = t.return
        }
}

function mS(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Rt(), e.pingedLanes |= e.suspendedLanes & n, st === e && (dt & n) === n && (Ze === 4 || Ze === 3 && (dt & 130023424) === dt && 500 > qe() - cp ? Oi(e, 0) : up |= n), Ft(e, t)
}

function q0(e, t) {
    t === 0 && (e.mode & 1 ? (t = aa, aa <<= 1, !(aa & 130023424) && (aa = 4194304)) : t = 1);
    var n = Rt();
    e = ar(e, t), e !== null && (jl(e, t, n), Ft(e, n))
}

function gS(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), q0(e, n)
}

function yS(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState;
            i !== null && (n = i.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(j(314))
    }
    r !== null && r.delete(t), q0(e, n)
}
var Q0;
Q0 = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Mt.current) At = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return At = !1, iS(e, t, n);
            At = !!(e.flags & 131072)
        }
    else At = !1, Oe && t.flags & 1048576 && Yv(t, vu, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Ba(e, t), e = t.pendingProps;
            var i = Uo(t, xt.current);
            xo(t, n), i = rp(null, t, r, e, i, n);
            var o = ip();
            return t.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, It(r) ? (o = !0, gu(t)) : o = !1, t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, Jh(t), i.updater = Ju, t.stateNode = i, i._reactInternals = t, md(t, r, e, n), t = vd(null, t, r, !0, o, n)) : (t.tag = 0, Oe && o && Vh(t), Tt(null, t, i, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Ba(e, t), e = t.pendingProps, i = r._init, r = i(r._payload), t.type = r, i = t.tag = wS(r), e = mn(r, e), i) {
                    case 0:
                        t = yd(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Bm(null, t, r, e, n);
                        break e;
                    case 11:
                        t = $m(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Um(null, t, r, mn(r.type, e), n);
                        break e
                }
                throw Error(j(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mn(r, i), yd(e, t, r, i, n);
        case 1:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mn(r, i), Bm(e, t, r, i, n);
        case 3:
            e: {
                if (O0(t), e === null) throw Error(j(387));r = t.pendingProps,
                o = t.memoizedState,
                i = o.element,
                e0(e, t),
                Eu(t, r, null, n);
                var s = t.memoizedState;
                if (r = s.element, o.isDehydrated)
                    if (o = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions
                        }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
                        i = Wo(Error(j(423)), t), t = zm(e, t, r, n, i);
                        break e
                    } else if (r !== i) {
                    i = Wo(Error(j(424)), t), t = zm(e, t, r, n, i);
                    break e
                } else
                    for (Wt = qr(t.stateNode.containerInfo.firstChild), Vt = t, Oe = !0, wn = null, n = i0(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (Bo(), r === i) {
                        t = ur(e, t, n);
                        break e
                    }
                    Tt(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return o0(t), e === null && dd(t), r = t.type, i = t.pendingProps, o = e !== null ? e.memoizedProps : null, s = i.children, ld(r, i) ? s = null : o !== null && ld(r, o) && (t.flags |= 32), N0(e, t), Tt(e, t, s, n), t.child;
        case 6:
            return e === null && dd(t), null;
        case 13:
            return k0(e, t, n);
        case 4:
            return Zh(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = zo(t, null, r, n) : Tt(e, t, r, n), t.child;
        case 11:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mn(r, i), $m(e, t, r, i, n);
        case 7:
            return Tt(e, t, t.pendingProps, n), t.child;
        case 8:
            return Tt(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Tt(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, i = t.pendingProps, o = t.memoizedProps, s = i.value, Te(wu, r._currentValue), r._currentValue = s, o !== null)
                    if (bn(o.value, s)) {
                        if (o.children === i.children && !Mt.current) {
                            t = ur(e, t, n);
                            break e
                        }
                    } else
                        for (o = t.child, o !== null && (o.return = t); o !== null;) {
                            var l = o.dependencies;
                            if (l !== null) {
                                s = o.child;
                                for (var a = l.firstContext; a !== null;) {
                                    if (a.context === r) {
                                        if (o.tag === 1) {
                                            a = nr(-1, n & -n), a.tag = 2;
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var u = c.pending;
                                                u === null ? a.next = a : (a.next = u.next, u.next = a), c.pending = a
                                            }
                                        }
                                        o.lanes |= n, a = o.alternate, a !== null && (a.lanes |= n), hd(o.return, n, t), l.lanes |= n;
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (s = o.return, s === null) throw Error(j(341));
                                s.lanes |= n, l = s.alternate, l !== null && (l.lanes |= n), hd(s, n, t), s = o.sibling
                            } else s = o.child;
                            if (s !== null) s.return = o;
                            else
                                for (s = o; s !== null;) {
                                    if (s === t) {
                                        s = null;
                                        break
                                    }
                                    if (o = s.sibling, o !== null) {
                                        o.return = s.return, s = o;
                                        break
                                    }
                                    s = s.return
                                }
                            o = s
                        }
                Tt(e, t, i.children, n),
                t = t.child
            }
            return t;
        case 9:
            return i = t.type, r = t.pendingProps.children, xo(t, n), i = un(i), r = r(i), t.flags |= 1, Tt(e, t, r, n), t.child;
        case 14:
            return r = t.type, i = mn(r, t.pendingProps), i = mn(r.type, i), Um(e, t, r, i, n);
        case 15:
            return _0(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : mn(r, i), Ba(e, t), t.tag = 1, It(r) ? (e = !0, gu(t)) : e = !1, xo(t, n), n0(t, r, i), md(t, r, i, n), vd(null, t, r, !0, e, n);
        case 19:
            return D0(e, t, n);
        case 22:
            return P0(e, t, n)
    }
    throw Error(j(156, t.tag))
};

function K0(e, t) {
    return xv(e, t)
}

function vS(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function sn(e, t, n, r) {
    return new vS(e, t, n, r)
}

function pp(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function wS(e) {
    if (typeof e == "function") return pp(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === Lh) return 11;
        if (e === jh) return 14
    }
    return 2
}

function Yr(e, t) {
    var n = e.alternate;
    return n === null ? (n = sn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Wa(e, t, n, r, i, o) {
    var s = 2;
    if (r = e, typeof e == "function") pp(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else e: switch (e) {
        case to:
            return ki(n.children, i, o, t);
        case Dh:
            s = 8, i |= 8;
            break;
        case $f:
            return e = sn(12, n, t, i | 2), e.elementType = $f, e.lanes = o, e;
        case Uf:
            return e = sn(13, n, t, i), e.elementType = Uf, e.lanes = o, e;
        case Bf:
            return e = sn(19, n, t, i), e.elementType = Bf, e.lanes = o, e;
        case rv:
            return nc(n, i, o, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case tv:
                    s = 10;
                    break e;
                case nv:
                    s = 9;
                    break e;
                case Lh:
                    s = 11;
                    break e;
                case jh:
                    s = 14;
                    break e;
                case _r:
                    s = 16, r = null;
                    break e
            }
            throw Error(j(130, e == null ? e : typeof e, ""))
    }
    return t = sn(s, n, t, i), t.elementType = e, t.type = r, t.lanes = o, t
}

function ki(e, t, n, r) {
    return e = sn(7, e, r, t), e.lanes = n, e
}

function nc(e, t, n, r) {
    return e = sn(22, e, r, t), e.elementType = rv, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function lf(e, t, n) {
    return e = sn(6, e, null, t), e.lanes = n, e
}

function af(e, t, n) {
    return t = sn(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function xS(e, t, n, r, i) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bc(0), this.expirationTimes = Bc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bc(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null
}

function mp(e, t, n, r, i, o, s, l, a) {
    return e = new xS(e, t, n, l, a), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = sn(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Jh(o), e
}

function ES(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: eo,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function G0(e) {
    if (!e) return ti;
    e = e._reactInternals;
    e: {
        if (Bi(e) !== e || e.tag !== 1) throw Error(j(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (It(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (It(n)) return Kv(e, n, t)
    }
    return t
}

function Y0(e, t, n, r, i, o, s, l, a) {
    return e = mp(n, r, !0, e, i, o, s, l, a), e.context = G0(null), n = e.current, r = Rt(), i = Gr(n), o = nr(r, i), o.callback = t ?? null, Qr(n, o, i), e.current.lanes = i, jl(e, i, r), Ft(e, r), e
}

function rc(e, t, n, r) {
    var i = t.current,
        o = Rt(),
        s = Gr(i);
    return n = G0(n), t.context === null ? t.context = n : t.pendingContext = n, t = nr(o, s), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qr(i, t, s), e !== null && (Sn(e, i, s, o), Fa(e, i, s)), s
}

function Nu(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Jm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function gp(e, t) {
    Jm(e, t), (e = e.alternate) && Jm(e, t)
}

function SS() {
    return null
}
var X0 = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function yp(e) {
    this._internalRoot = e
}
ic.prototype.render = yp.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(j(409));
    rc(e, t, null, null)
};
ic.prototype.unmount = yp.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Mi(function() {
            rc(null, e, null, null)
        }), t[lr] = null
    }
};

function ic(e) {
    this._internalRoot = e
}
ic.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = _v();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Nr.length && t !== 0 && t < Nr[n].priority; n++);
        Nr.splice(n, 0, e), n === 0 && Nv(e)
    }
};

function vp(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function oc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Zm() {}

function bS(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = Nu(s);
                o.call(c)
            }
        }
        var s = Y0(t, r, e, 0, null, !1, !1, "", Zm);
        return e._reactRootContainer = s, e[lr] = s.current, sl(e.nodeType === 8 ? e.parentNode : e), Mi(), s
    }
    for (; i = e.lastChild;) e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var c = Nu(a);
            l.call(c)
        }
    }
    var a = mp(e, 0, !1, null, null, !1, !1, "", Zm);
    return e._reactRootContainer = a, e[lr] = a.current, sl(e.nodeType === 8 ? e.parentNode : e), Mi(function() {
        rc(t, a, n, r)
    }), a
}

function sc(e, t, n, r, i) {
    var o = n._reactRootContainer;
    if (o) {
        var s = o;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = Nu(s);
                l.call(a)
            }
        }
        rc(t, s, e, i)
    } else s = bS(n, t, e, i, r);
    return Nu(s)
}
Tv = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = js(t.pendingLanes);
                n !== 0 && (Ih(t, n | 1), Ft(t, qe()), !(me & 6) && (Vo = qe() + 500, oi()))
            }
            break;
        case 13:
            Mi(function() {
                var r = ar(e, 1);
                if (r !== null) {
                    var i = Rt();
                    Sn(r, e, 1, i)
                }
            }), gp(e, 1)
    }
};
Fh = function(e) {
    if (e.tag === 13) {
        var t = ar(e, 134217728);
        if (t !== null) {
            var n = Rt();
            Sn(t, e, 134217728, n)
        }
        gp(e, 134217728)
    }
};
Rv = function(e) {
    if (e.tag === 13) {
        var t = Gr(e),
            n = ar(e, t);
        if (n !== null) {
            var r = Rt();
            Sn(n, e, t, r)
        }
        gp(e, t)
    }
};
_v = function() {
    return Ee
};
Pv = function(e, t) {
    var n = Ee;
    try {
        return Ee = e, t()
    } finally {
        Ee = n
    }
};
Xf = function(e, t, n) {
    switch (t) {
        case "input":
            if (Wf(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var i = Yu(r);
                        if (!i) throw Error(j(90));
                        ov(r), Wf(r, i)
                    }
                }
            }
            break;
        case "textarea":
            lv(e, n);
            break;
        case "select":
            t = n.value, t != null && go(e, !!n.multiple, t, !1)
    }
};
pv = fp;
mv = Mi;
var CS = {
        usingClientEntryPoint: !1,
        Events: [Ml, oo, Yu, dv, hv, fp]
    },
    ys = {
        findFiberByHostInstance: mi,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    TS = {
        bundleType: ys.bundleType,
        version: ys.version,
        rendererPackageName: ys.rendererPackageName,
        rendererConfig: ys.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: hr.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = vv(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ys.findFiberByHostInstance || SS,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wa.isDisabled && wa.supportsFiber) try {
        qu = wa.inject(TS), Un = wa
    } catch {}
}
Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = CS;
Qt.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!vp(t)) throw Error(j(200));
    return ES(e, t, null, n)
};
Qt.createRoot = function(e, t) {
    if (!vp(e)) throw Error(j(299));
    var n = !1,
        r = "",
        i = X0;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = mp(e, 1, !1, null, null, n, !1, r, i), e[lr] = t.current, sl(e.nodeType === 8 ? e.parentNode : e), new yp(t)
};
Qt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","), Error(j(268, e)));
    return e = vv(t), e = e === null ? null : e.stateNode, e
};
Qt.flushSync = function(e) {
    return Mi(e)
};
Qt.hydrate = function(e, t, n) {
    if (!oc(t)) throw Error(j(200));
    return sc(null, e, t, !0, n)
};
Qt.hydrateRoot = function(e, t, n) {
    if (!vp(e)) throw Error(j(405));
    var r = n != null && n.hydratedSources || null,
        i = !1,
        o = "",
        s = X0;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), t = Y0(t, null, e, 1, n ?? null, i, !1, o, s), e[lr] = t.current, sl(e), r)
        for (e = 0; e < r.length; e++) n = r[e], i = n._getVersion, i = i(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new ic(t)
};
Qt.render = function(e, t, n) {
    if (!oc(t)) throw Error(j(200));
    return sc(null, e, t, !1, n)
};
Qt.unmountComponentAtNode = function(e) {
    if (!oc(e)) throw Error(j(40));
    return e._reactRootContainer ? (Mi(function() {
        sc(null, null, e, !1, function() {
            e._reactRootContainer = null, e[lr] = null
        })
    }), !0) : !1
};
Qt.unstable_batchedUpdates = fp;
Qt.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!oc(n)) throw Error(j(200));
    if (e == null || e._reactInternals === void 0) throw Error(j(38));
    return sc(e, t, n, !1, r)
};
Qt.version = "18.2.0-next-9e3b772b8-20220608";

function J0() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(J0)
    } catch (e) {
        console.error(e)
    }
}
J0(), Yy.exports = Qt;
var lc = Yy.exports;
const RS = $i(lc),
    _S = $y({
        __proto__: null,
        default: RS
    }, [lc]);
var eg = lc;
If.createRoot = eg.createRoot, If.hydrateRoot = eg.hydrateRoot;
/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function $e() {
    return $e = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, $e.apply(this, arguments)
}
var Ve;
(function(e) {
    e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
})(Ve || (Ve = {}));
const tg = "popstate";

function PS(e) {
    e === void 0 && (e = {});

    function t(r, i) {
        let {
            pathname: o,
            search: s,
            hash: l
        } = r.location;
        return ml("", {
            pathname: o,
            search: s,
            hash: l
        }, i.state && i.state.usr || null, i.state && i.state.key || "default")
    }

    function n(r, i) {
        return typeof i == "string" ? i : ni(i)
    }
    return OS(t, n, null, e)
}

function Z(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t)
}

function Ii(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t)
        } catch {}
    }
}

function NS() {
    return Math.random().toString(36).substr(2, 8)
}

function ng(e, t) {
    return {
        usr: e.state,
        key: e.key,
        idx: t
    }
}

function ml(e, t, n, r) {
    return n === void 0 && (n = null), $e({
        pathname: typeof e == "string" ? e : e.pathname,
        search: "",
        hash: ""
    }, typeof t == "string" ? pr(t) : t, {
        state: n,
        key: t && t.key || r || NS()
    })
}

function ni(e) {
    let {
        pathname: t = "/",
        search: n = "",
        hash: r = ""
    } = e;
    return n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r), t
}

function pr(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
        let r = e.indexOf("?");
        r >= 0 && (t.search = e.substr(r), e = e.substr(0, r)), e && (t.pathname = e)
    }
    return t
}

function OS(e, t, n, r) {
    r === void 0 && (r = {});
    let {
        window: i = document.defaultView,
        v5Compat: o = !1
    } = r, s = i.history, l = Ve.Pop, a = null, c = u();
    c == null && (c = 0, s.replaceState($e({}, s.state, {
        idx: c
    }), ""));

    function u() {
        return (s.state || {
            idx: null
        }).idx
    }

    function f() {
        l = Ve.Pop;
        let E = u(),
            m = E == null ? null : E - c;
        c = E, a && a({
            action: l,
            location: w.location,
            delta: m
        })
    }

    function h(E, m) {
        l = Ve.Push;
        let p = ml(w.location, E, m);
        n && n(p, E), c = u() + 1;
        let v = ng(p, c),
            R = w.createHref(p);
        try {
            s.pushState(v, "", R)
        } catch (P) {
            if (P instanceof DOMException && P.name === "DataCloneError") throw P;
            i.location.assign(R)
        }
        o && a && a({
            action: l,
            location: w.location,
            delta: 1
        })
    }

    function x(E, m) {
        l = Ve.Replace;
        let p = ml(w.location, E, m);
        n && n(p, E), c = u();
        let v = ng(p, c),
            R = w.createHref(p);
        s.replaceState(v, "", R), o && a && a({
            action: l,
            location: w.location,
            delta: 0
        })
    }

    function y(E) {
        let m = i.location.origin !== "null" ? i.location.origin : i.location.href,
            p = typeof E == "string" ? E : ni(E);
        return Z(m, "No window.location.(origin|href) available to create URL for href: " + p), new URL(p, m)
    }
    let w = {
        get action() {
            return l
        },
        get location() {
            return e(i, s)
        },
        listen(E) {
            if (a) throw new Error("A history only accepts one active listener");
            return i.addEventListener(tg, f), a = E, () => {
                i.removeEventListener(tg, f), a = null
            }
        },
        createHref(E) {
            return t(i, E)
        },
        createURL: y,
        encodeLocation(E) {
            let m = y(E);
            return {
                pathname: m.pathname,
                search: m.search,
                hash: m.hash
            }
        },
        push: h,
        replace: x,
        go(E) {
            return s.go(E)
        }
    };
    return w
}
var Ie;
(function(e) {
    e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
})(Ie || (Ie = {}));
const kS = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

function DS(e) {
    return e.index === !0
}

function Od(e, t, n, r) {
    return n === void 0 && (n = []), r === void 0 && (r = {}), e.map((i, o) => {
        let s = [...n, o],
            l = typeof i.id == "string" ? i.id : s.join("-");
        if (Z(i.index !== !0 || !i.children, "Cannot specify children on an index route"), Z(!r[l], 'Found a route id collision on id "' + l + `".  Route id's must be globally unique within Data Router usages`), DS(i)) {
            let a = $e({}, i, t(i), {
                id: l
            });
            return r[l] = a, a
        } else {
            let a = $e({}, i, t(i), {
                id: l,
                children: void 0
            });
            return r[l] = a, i.children && (a.children = Od(i.children, t, s, r)), a
        }
    })
}

function ho(e, t, n) {
    n === void 0 && (n = "/");


    let r = typeof t == "string" ? pr(t) : t,
        i = Cn(r.pathname || "/", n);
    if (i == null) return null;
    let o = ew(e);
    LS(o);
    let s = null;
    for (let l = 0; s == null && l < o.length; ++l) s = zS(o[l], WS(i));
    return s
}

function Z0(e, t) {
    let {
        route: n,
        pathname: r,
        params: i
    } = e;
    return {
        id: n.id,
        pathname: r,
        params: i,
        data: t[n.id],
        handle: n.handle
    }
}

function ew(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let i = (o, s, l) => {
        let a = {
            relativePath: l === void 0 ? o.path || "" : l,
            caseSensitive: o.caseSensitive === !0,
            childrenIndex: s,
            route: o
        };
        a.relativePath.startsWith("/") && (Z(a.relativePath.startsWith(r), 'Absolute route path "' + a.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), a.relativePath = a.relativePath.slice(r.length));
        let c = zn([r, a.relativePath]),
            u = n.concat(a);
        o.children && o.children.length > 0 && (Z(o.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), ew(o.children, t, u, c)), !(o.path == null && !o.index) && t.push({
            path: c,
            score: US(c, o.index),
            routesMeta: u
        })
    };
    return e.forEach((o, s) => {
        var l;
        if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
        else
            for (let a of tw(o.path)) i(o, s, a)
    }), t
}

function tw(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t, i = n.endsWith("?"), o = n.replace(/\?$/, "");
    if (r.length === 0) return i ? [o, ""] : [o];
    let s = tw(r.join("/")),
        l = [];
    return l.push(...s.map(a => a === "" ? o : [o, a].join("/"))), i && l.push(...s), l.map(a => e.startsWith("/") && a === "" ? "/" : a)
}

function LS(e) {
    e.sort((t, n) => t.score !== n.score ? n.score - t.score : BS(t.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex)))
}
const jS = /^:\w+$/,
    AS = 3,
    MS = 2,
    IS = 1,
    FS = 10,
    $S = -2,
    rg = e => e === "*";

function US(e, t) {
    let n = e.split("/"),
        r = n.length;
    return n.some(rg) && (r += $S), t && (r += MS), n.filter(i => !rg(i)).reduce((i, o) => i + (jS.test(o) ? AS : o === "" ? IS : FS), r)
}

function BS(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i]) ? e[e.length - 1] - t[t.length - 1] : 0
}

function zS(e, t) {
    let {
        routesMeta: n
    } = e, r = {}, i = "/", o = [];
    for (let s = 0; s < n.length; ++s) {
        let l = n[s],
            a = s === n.length - 1,
            c = i === "/" ? t : t.slice(i.length) || "/",
            u = kd({
                path: l.relativePath,
                caseSensitive: l.caseSensitive,
                end: a
            }, c);
        if (!u) return null;
        Object.assign(r, u.params);
        let f = l.route;
        o.push({
            params: r,
            pathname: zn([i, u.pathname]),
            pathnameBase: KS(zn([i, u.pathnameBase])),
            route: f
        }), u.pathnameBase !== "/" && (i = zn([i, u.pathnameBase]))
    }
    return o
}

function kd(e, t) {
    typeof e == "string" && (e = {
        path: e,
        caseSensitive: !1,
        end: !0
    });
    let [n, r] = HS(e.path, e.caseSensitive, e.end), i = t.match(n);
    if (!i) return null;
    let o = i[0],
        s = o.replace(/(.)\/+$/, "$1"),
        l = i.slice(1);
    return {
        params: r.reduce((c, u, f) => {
            let {
                paramName: h,
                isOptional: x
            } = u;
            if (h === "*") {
                let w = l[f] || "";
                s = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1")
            }
            const y = l[f];
            return x && !y ? c[h] = void 0 : c[h] = VS(y || "", h), c
        }, {}),
        pathname: o,
        pathnameBase: s,
        pattern: e
    }
}

function HS(e, t, n) {
    t === void 0 && (t = !1), n === void 0 && (n = !0), Ii(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
    let r = [],
        i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:(\w+)(\?)?/g, (s, l, a) => (r.push({
            paramName: l,
            isOptional: a != null
        }), a ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return e.endsWith("*") ? (r.push({
        paramName: "*"
    }), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, t ? void 0 : "i"), r]
}

function WS(e) {
    try {
        return decodeURI(e)
    } catch (t) {
        return Ii(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e
    }
}

function VS(e, t) {
    try {
        return decodeURIComponent(e)
    } catch (n) {
        return Ii(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e
    }
}

function Cn(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/"
}

function qS(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: n,
        search: r = "",
        hash: i = ""
    } = typeof e == "string" ? pr(e) : e;
    return {
        pathname: n ? n.startsWith("/") ? n : QS(n, t) : t,
        search: GS(r),
        hash: YS(i)
    }
}

function QS(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return e.split("/").forEach(i => {
        i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i)
    }), n.length > 1 ? n.join("/") : "/"
}

function uf(e, t, n, r) {
    return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}

function nw(e) {
    return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0)
}

function wp(e, t) {
    let n = nw(e);
    return t ? n.map((r, i) => i === e.length - 1 ? r.pathname : r.pathnameBase) : n.map(r => r.pathnameBase)
}

function xp(e, t, n, r) {
    r === void 0 && (r = !1);
    let i;
    typeof e == "string" ? i = pr(e) : (i = $e({}, e), Z(!i.pathname || !i.pathname.includes("?"), uf("?", "pathname", "search", i)), Z(!i.pathname || !i.pathname.includes("#"), uf("#", "pathname", "hash", i)), Z(!i.search || !i.search.includes("#"), uf("#", "search", "hash", i)));
    let o = e === "" || i.pathname === "",
        s = o ? "/" : i.pathname,
        l;
    if (s == null) l = n;
    else {
        let f = t.length - 1;
        if (!r && s.startsWith("..")) {
            let h = s.split("/");
            for (; h[0] === "..";) h.shift(), f -= 1;
            i.pathname = h.join("/")
        }
        l = f >= 0 ? t[f] : "/"
    }
    let a = qS(i, l),
        c = s && s !== "/" && s.endsWith("/"),
        u = (o || s === ".") && n.endsWith("/");
    return !a.pathname.endsWith("/") && (c || u) && (a.pathname += "/"), a
}
const zn = e => e.join("/").replace(/\/\/+/g, "/"),
    KS = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    GS = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e,
    YS = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class Ep {
    constructor(t, n, r, i) {
        i === void 0 && (i = !1), this.status = t, this.statusText = n || "", this.internal = i, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r
    }
}

function rw(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e
}
const iw = ["post", "put", "patch", "delete"],
    XS = new Set(iw),
    JS = ["get", ...iw],
    ZS = new Set(JS),
    eb = new Set([301, 302, 303, 307, 308]),
    tb = new Set([307, 308]),
    cf = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    nb = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    },
    vs = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    },
    ow = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    rb = e => ({
        hasErrorBoundary: !!e.hasErrorBoundary
    }),
    sw = "remix-router-transitions";

function ib(e) {
    const t = e.window ? e.window : typeof window < "u" ? window : void 0,
        n = typeof t < "u" && typeof t.document < "u" && typeof t.document.createElement < "u",
        r = !n;
    Z(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
    let i;
    if (e.mapRouteProperties) i = e.mapRouteProperties;
    else if (e.detectErrorBoundary) {
        let T = e.detectErrorBoundary;
        i = _ => ({
            hasErrorBoundary: T(_)
        })
    } else i = rb;
    let o = {},
        s = Od(e.routes, i, void 0, o),
        l, a = e.basename || "/",
        c = $e({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1
        }, e.future),
        u = null,
        f = new Set,
        h = null,
        x = null,
        y = null,
        w = e.hydrationData != null,
        E = ho(s, e.history.location, a),
        m = null;
    if (E == null) {
        let T = tn(404, {
                pathname: e.history.location.pathname
            }),
            {
                matches: _,
                route: O
            } = fg(s);
        E = _, m = {
            [O.id]: T
        }
    }
    let p, v = E.some(T => T.route.lazy),
        R = E.some(T => T.route.loader);
    if (v) p = !1;
    else if (!R) p = !0;
    else if (c.v7_partialHydration) {
        let T = e.hydrationData ? e.hydrationData.loaderData : null,
            _ = e.hydrationData ? e.hydrationData.errors : null;
        p = E.every(O => O.route.loader && O.route.loader.hydrate !== !0 && (T && T[O.route.id] !== void 0 || _ && _[O.route.id] !== void 0))
    } else p = e.hydrationData != null;
    let P, S = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: E,
            initialized: p,
            navigation: cf,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: e.hydrationData && e.hydrationData.loaderData || {},
            actionData: e.hydrationData && e.hydrationData.actionData || null,
            errors: e.hydrationData && e.hydrationData.errors || m,
            fetchers: new Map,
            blockers: new Map
        },
        N = Ve.Pop,
        D = !1,
        M, B = !1,
        te = new Map,
        ge = null,
        pe = !1,
        et = !1,
        $t = [],
        St = [],
        ce = new Map,
        F = 0,
        U = -1,
        Y = new Map,
        q = new Set,
        ye = new Map,
        ee = new Map,
        _e = new Set,
        at = new Map,
        Qe = new Map,
        bt = !1;

    function zi() {
        if (u = e.history.listen(T => {
                let {
                    action: _,
                    location: O,
                    delta: I
                } = T;
                if (bt) {
                    bt = !1;
                    return
                }
                Ii(Qe.size === 0 || I != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let W = kn({
                    currentLocation: S.location,
                    nextLocation: O,
                    historyAction: _
                });
                if (W && I != null) {
                    bt = !0, e.history.go(I * -1), qi(W, {
                        state: "blocked",
                        location: O,
                        proceed() {
                            qi(W, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: O
                            }), e.history.go(I)
                        },
                        reset() {
                            let ne = new Map(S.blockers);
                            ne.set(W, vs), de({
                                blockers: ne
                            })
                        }
                    });
                    return
                }
                return Gt(_, O)
            }), n) {
            mb(t, te);
            let T = () => gb(t, te);
            t.addEventListener("pagehide", T), ge = () => t.removeEventListener("pagehide", T)
        }
        return S.initialized || Gt(Ve.Pop, S.location, {
            initialHydration: !0
        }), P
    }

    function Me() {
        u && u(), ge && ge(), f.clear(), M && M.abort(), S.fetchers.forEach((T, _) => wr(_)), S.blockers.forEach((T, _) => Vi(_))
    }

    function tt(T) {
        return f.add(T), () => f.delete(T)
    }

    function de(T, _) {
        _ === void 0 && (_ = {}), S = $e({}, S, T);
        let O = [],
            I = [];
        c.v7_fetcherPersist && S.fetchers.forEach((W, ne) => {
            W.state === "idle" && (_e.has(ne) ? I.push(ne) : O.push(ne))
        }), [...f].forEach(W => W(S, {
            deletedFetchers: I,
            unstable_viewTransitionOpts: _.viewTransitionOpts,
            unstable_flushSync: _.flushSync === !0
        })), c.v7_fetcherPersist && (O.forEach(W => S.fetchers.delete(W)), I.forEach(W => wr(W)))
    }

    function Dt(T, _, O) {
        var I, W;
        let {
            flushSync: ne
        } = O === void 0 ? {} : O, J = S.actionData != null && S.navigation.formMethod != null && vn(S.navigation.formMethod) && S.navigation.state === "loading" && ((I = T.state) == null ? void 0 : I._isRedirect) !== !0, G;
        _.actionData ? Object.keys(_.actionData).length > 0 ? G = _.actionData : G = null : J ? G = S.actionData : G = null;
        let K = _.loaderData ? cg(S.loaderData, _.loaderData, _.matches || [], _.errors) : S.loaderData,
            se = S.blockers;
        se.size > 0 && (se = new Map(se), se.forEach((xe, be) => se.set(be, vs)));
        let Be = D === !0 || S.navigation.formMethod != null && vn(S.navigation.formMethod) && ((W = T.state) == null ? void 0 : W._isRedirect) !== !0;
        l && (s = l, l = void 0), pe || N === Ve.Pop || (N === Ve.Push ? e.history.push(T, T.state) : N === Ve.Replace && e.history.replace(T, T.state));
        let re;
        if (N === Ve.Pop) {
            let xe = te.get(S.location.pathname);
            xe && xe.has(T.pathname) ? re = {
                currentLocation: S.location,
                nextLocation: T
            } : te.has(T.pathname) && (re = {
                currentLocation: T,
                nextLocation: S.location
            })
        } else if (B) {
            let xe = te.get(S.location.pathname);
            xe ? xe.add(T.pathname) : (xe = new Set([T.pathname]), te.set(S.location.pathname, xe)), re = {
                currentLocation: S.location,
                nextLocation: T
            }
        }
        de($e({}, _, {
            actionData: G,
            loaderData: K,
            historyAction: N,
            location: T,
            initialized: !0,
            navigation: cf,
            revalidation: "idle",
            restoreScrollPosition: Zl(T, _.matches || S.matches),
            preventScrollReset: Be,
            blockers: se
        }), {
            viewTransitionOpts: re,
            flushSync: ne === !0
        }), N = Ve.Pop, D = !1, B = !1, pe = !1, et = !1, $t = [], St = []
    }
    async function Hi(T, _) {
        if (typeof T == "number") {
            e.history.go(T);
            return
        }
        let O = Dd(S.location, S.matches, a, c.v7_prependBasename, T, c.v7_relativeSplatPath, _ == null ? void 0 : _.fromRouteId, _ == null ? void 0 : _.relative),
            {
                path: I,
                submission: W,
                error: ne
            } = ig(c.v7_normalizeFormMethod, !1, O, _),
            J = S.location,
            G = ml(S.location, I, _ && _.state);
        G = $e({}, G, e.history.encodeLocation(G));
        let K = _ && _.replace != null ? _.replace : void 0,
            se = Ve.Push;
        K === !0 ? se = Ve.Replace : K === !1 || W != null && vn(W.formMethod) && W.formAction === S.location.pathname + S.location.search && (se = Ve.Replace);
        let Be = _ && "preventScrollReset" in _ ? _.preventScrollReset === !0 : void 0,
            re = (_ && _.unstable_flushSync) === !0,
            xe = kn({
                currentLocation: J,
                nextLocation: G,
                historyAction: se
            });
        if (xe) {
            qi(xe, {
                state: "blocked",
                location: G,
                proceed() {
                    qi(xe, {
                        state: "proceeding",
                        proceed: void 0,
                        reset: void 0,
                        location: G
                    }), Hi(T, _)
                },
                reset() {
                    let be = new Map(S.blockers);
                    be.set(xe, vs), de({
                        blockers: be
                    })
                }
            });
            return
        }
        return await Gt(se, G, {
            submission: W,
            pendingError: ne,
            preventScrollReset: Be,
            replace: _ && _.replace,
            enableViewTransition: _ && _.unstable_viewTransition,
            flushSync: re
        })
    }

    function yr() {
        if (On(), de({
                revalidation: "loading"
            }), S.navigation.state !== "submitting") {
            if (S.navigation.state === "idle") {
                Gt(S.historyAction, S.location, {
                    startUninterruptedRevalidation: !0
                });
                return
            }
            Gt(N || S.historyAction, S.navigation.location, {
                overrideNavigation: S.navigation
            })
        }
    }
    async function Gt(T, _, O) {
        M && M.abort(), M = null, N = T, pe = (O && O.startUninterruptedRevalidation) === !0, xr(S.location, S.matches), D = (O && O.preventScrollReset) === !0, B = (O && O.enableViewTransition) === !0;
        let I = l || s,
            W = O && O.overrideNavigation,
            ne = ho(I, _, a),
            J = (O && O.flushSync) === !0;
        if (!ne) {
            let be = tn(404, {
                    pathname: _.pathname
                }),
                {
                    matches: Ct,
                    route: ze
                } = fg(I);
            us(), Dt(_, {
                matches: Ct,
                loaderData: {},
                errors: {
                    [ze.id]: be
                }
            }, {
                flushSync: J
            });
            return
        }
        if (S.initialized && !et && ub(S.location, _) && !(O && O.submission && vn(O.submission.formMethod))) {
            Dt(_, {
                matches: ne
            }, {
                flushSync: J
            });
            return
        }
        M = new AbortController;
        let G = xs(e.history, _, M.signal, O && O.submission),
            K, se;
        if (O && O.pendingError) se = {
            [Gs(ne).route.id]: O.pendingError
        };
        else if (O && O.submission && vn(O.submission.formMethod)) {
            let be = await Wi(G, _, O.submission, ne, {
                replace: O.replace,
                flushSync: J
            });
            if (be.shortCircuited) return;
            K = be.pendingActionData, se = be.pendingActionError, W = ff(_, O.submission), J = !1, G = new Request(G.url, {
                signal: G.signal
            })
        }
        let {
            shortCircuited: Be,
            loaderData: re,
            errors: xe
        } = await Yl(G, _, ne, W, O && O.submission, O && O.fetcherSubmission, O && O.replace, O && O.initialHydration === !0, J, K, se);
        Be || (M = null, Dt(_, $e({
            matches: ne
        }, K ? {
            actionData: K
        } : {}, {
            loaderData: re,
            errors: xe
        })))
    }
    async function Wi(T, _, O, I, W) {
        W === void 0 && (W = {}), On();
        let ne = hb(_, O);
        de({
            navigation: ne
        }, {
            flushSync: W.flushSync === !0
        });
        let J, G = jd(I, _);
        if (!G.route.action && !G.route.lazy) J = {
            type: Ie.error,
            error: tn(405, {
                method: T.method,
                pathname: _.pathname,
                routeId: G.route.id
            })
        };
        else if (J = await ws("action", T, G, I, o, i, a, c.v7_relativeSplatPath), T.signal.aborted) return {
            shortCircuited: !0
        };
        if (wi(J)) {
            let K;
            return W && W.replace != null ? K = W.replace : K = J.location === S.location.pathname + S.location.search, await dn(S, J, {
                submission: O,
                replace: K
            }), {
                shortCircuited: !0
            }
        }
        if (po(J)) {
            let K = Gs(I, G.route.id);
            return (W && W.replace) !== !0 && (N = Ve.Push), {
                pendingActionData: {},
                pendingActionError: {
                    [K.route.id]: J.error
                }
            }
        }
        if (vi(J)) throw tn(400, {
            type: "defer-action"
        });
        return {
            pendingActionData: {
                [G.route.id]: J.data
            }
        }
    }
    async function Yl(T, _, O, I, W, ne, J, G, K, se, Be) {
        let re = I || ff(_, W),
            xe = W || ne || pg(re),
            be = l || s,
            [Ct, ze] = og(e.history, S, O, xe, _, c.v7_partialHydration && G === !0, et, $t, St, _e, ye, q, be, a, se, Be);
        if (us(ie => !(O && O.some(ve => ve.route.id === ie)) || Ct && Ct.some(ve => ve.route.id === ie)), U = ++F, Ct.length === 0 && ze.length === 0) {
            let ie = Yt();
            return Dt(_, $e({
                matches: O,
                loaderData: {},
                errors: Be || null
            }, se ? {
                actionData: se
            } : {}, ie ? {
                fetchers: new Map(S.fetchers)
            } : {}), {
                flushSync: K
            }), {
                shortCircuited: !0
            }
        }
        if (!pe && (!c.v7_partialHydration || !G)) {
            ze.forEach(ve => {
                let mt = S.fetchers.get(ve.key),
                    Ye = Es(void 0, mt ? mt.data : void 0);
                S.fetchers.set(ve.key, Ye)
            });
            let ie = se || S.actionData;
            de($e({
                navigation: re
            }, ie ? Object.keys(ie).length === 0 ? {
                actionData: null
            } : {
                actionData: ie
            } : {}, ze.length > 0 ? {
                fetchers: new Map(S.fetchers)
            } : {}), {
                flushSync: K
            })
        }
        ze.forEach(ie => {
            ce.has(ie.key) && Ut(ie.key), ie.controller && ce.set(ie.key, ie.controller)
        });
        let Gn = () => ze.forEach(ie => Ut(ie.key));
        M && M.signal.addEventListener("abort", Gn);
        let {
            results: Qi,
            loaderResults: Er,
            fetcherResults: H
        } = await Qn(S.matches, O, Ct, ze, T);
        if (T.signal.aborted) return {
            shortCircuited: !0
        };
        M && M.signal.removeEventListener("abort", Gn), ze.forEach(ie => ce.delete(ie.key));
        let b = dg(Qi);
        if (b) {
            if (b.idx >= Ct.length) {
                let ie = ze[b.idx - Ct.length].key;
                q.add(ie)
            }
            return await dn(S, b.result, {
                replace: J
            }), {
                shortCircuited: !0
            }
        }
        let {
            loaderData: A,
            errors: V
        } = ug(S, O, Ct, Er, Be, ze, H, at);
        at.forEach((ie, ve) => {
            ie.subscribe(mt => {
                (mt || ie.done) && at.delete(ve)
            })
        });
        let we = Yt(),
            ke = Kn(U),
            He = we || ke || ze.length > 0;
        return $e({
            loaderData: A,
            errors: V
        }, He ? {
            fetchers: new Map(S.fetchers)
        } : {})
    }

    function Xl(T, _, O, I) {
        if (r) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
        ce.has(T) && Ut(T);
        let W = (I && I.unstable_flushSync) === !0,
            ne = l || s,
            J = Dd(S.location, S.matches, a, c.v7_prependBasename, O, c.v7_relativeSplatPath, _, I == null ? void 0 : I.relative),
            G = ho(ne, J, a);
        if (!G) {
            vr(T, _, tn(404, {
                pathname: J
            }), {
                flushSync: W
            });
            return
        }
        let {
            path: K,
            submission: se,
            error: Be
        } = ig(c.v7_normalizeFormMethod, !0, J, I);
        if (Be) {
            vr(T, _, Be, {
                flushSync: W
            });
            return
        }
        let re = jd(G, K);
        if (D = (I && I.preventScrollReset) === !0, se && vn(se.formMethod)) {
            Lc(T, _, K, re, G, W, se);
            return
        }
        ye.set(T, {
            routeId: _,
            path: K
        }), ss(T, _, K, re, G, W, se)
    }
    async function Lc(T, _, O, I, W, ne, J) {
        if (On(), ye.delete(T), !I.route.action && !I.route.lazy) {
            let ve = tn(405, {
                method: J.formMethod,
                pathname: O,
                routeId: _
            });
            vr(T, _, ve, {
                flushSync: ne
            });
            return
        }
        let G = S.fetchers.get(T);
        hn(T, pb(J, G), {
            flushSync: ne
        });
        let K = new AbortController,
            se = xs(e.history, O, K.signal, J);
        ce.set(T, K);
        let Be = F,
            re = await ws("action", se, I, W, o, i, a, c.v7_relativeSplatPath);
        if (se.signal.aborted) {
            ce.get(T) === K && ce.delete(T);
            return
        }
        if (c.v7_fetcherPersist && _e.has(T)) {
            if (wi(re) || po(re)) {
                hn(T, Tr(void 0));
                return
            }
        } else {
            if (wi(re))
                if (ce.delete(T), U > Be) {
                    hn(T, Tr(void 0));
                    return
                } else return q.add(T), hn(T, Es(J)), dn(S, re, {
                    fetcherSubmission: J
                });
            if (po(re)) {
                vr(T, _, re.error);
                return
            }
        }
        if (vi(re)) throw tn(400, {
            type: "defer-action"
        });
        let xe = S.navigation.location || S.location,
            be = xs(e.history, xe, K.signal),
            Ct = l || s,
            ze = S.navigation.state !== "idle" ? ho(Ct, S.navigation.location, a) : S.matches;
        Z(ze, "Didn't find any matches after fetcher action");
        let Gn = ++F;
        Y.set(T, Gn);
        let Qi = Es(J, re.data);
        S.fetchers.set(T, Qi);
        let [Er, H] = og(e.history, S, ze, J, xe, !1, et, $t, St, _e, ye, q, Ct, a, {
            [I.route.id]: re.data
        }, void 0);
        H.filter(ve => ve.key !== T).forEach(ve => {
            let mt = ve.key,
                Ye = S.fetchers.get(mt),
                ta = Es(void 0, Ye ? Ye.data : void 0);
            S.fetchers.set(mt, ta), ce.has(mt) && Ut(mt), ve.controller && ce.set(mt, ve.controller)
        }), de({
            fetchers: new Map(S.fetchers)
        });
        let b = () => H.forEach(ve => Ut(ve.key));
        K.signal.addEventListener("abort", b);
        let {
            results: A,
            loaderResults: V,
            fetcherResults: we
        } = await Qn(S.matches, ze, Er, H, be);
        if (K.signal.aborted) return;
        K.signal.removeEventListener("abort", b), Y.delete(T), ce.delete(T), H.forEach(ve => ce.delete(ve.key));
        let ke = dg(A);
        if (ke) {
            if (ke.idx >= Er.length) {
                let ve = H[ke.idx - Er.length].key;
                q.add(ve)
            }
            return dn(S, ke.result)
        }
        let {
            loaderData: He,
            errors: ie
        } = ug(S, S.matches, Er, V, void 0, H, we, at);
        if (S.fetchers.has(T)) {
            let ve = Tr(re.data);
            S.fetchers.set(T, ve)
        }
        Kn(Gn), S.navigation.state === "loading" && Gn > U ? (Z(N, "Expected pending action"), M && M.abort(), Dt(S.navigation.location, {
            matches: ze,
            loaderData: He,
            errors: ie,
            fetchers: new Map(S.fetchers)
        })) : (de({
            errors: ie,
            loaderData: cg(S.loaderData, He, ze, ie),
            fetchers: new Map(S.fetchers)
        }), et = !1)
    }
    async function ss(T, _, O, I, W, ne, J) {
        let G = S.fetchers.get(T);
        hn(T, Es(J, G ? G.data : void 0), {
            flushSync: ne
        });
        let K = new AbortController,
            se = xs(e.history, O, K.signal);
        ce.set(T, K);
        let Be = F,
            re = await ws("loader", se, I, W, o, i, a, c.v7_relativeSplatPath);
        if (vi(re) && (re = await uw(re, se.signal, !0) || re), ce.get(T) === K && ce.delete(T), !se.signal.aborted) {
            if (_e.has(T)) {
                hn(T, Tr(void 0));
                return
            }
            if (wi(re))
                if (U > Be) {
                    hn(T, Tr(void 0));
                    return
                } else {
                    q.add(T), await dn(S, re);
                    return
                } if (po(re)) {
                vr(T, _, re.error);
                return
            }
            Z(!vi(re), "Unhandled fetcher deferred data"), hn(T, Tr(re.data))
        }
    }
    async function dn(T, _, O) {
        let {
            submission: I,
            fetcherSubmission: W,
            replace: ne
        } = O === void 0 ? {} : O;
        _.revalidate && (et = !0);
        let J = ml(T.location, _.location, {
            _isRedirect: !0
        });
        if (Z(J, "Expected a location on the redirect navigation"), n) {
            let xe = !1;
            if (_.reloadDocument) xe = !0;
            else if (ow.test(_.location)) {
                const be = e.history.createURL(_.location);
                xe = be.origin !== t.location.origin || Cn(be.pathname, a) == null
            }
            if (xe) {
                ne ? t.location.replace(_.location) : t.location.assign(_.location);
                return
            }
        }
        M = null;
        let G = ne === !0 ? Ve.Replace : Ve.Push,
            {
                formMethod: K,
                formAction: se,
                formEncType: Be
            } = T.navigation;
        !I && !W && K && se && Be && (I = pg(T.navigation));
        let re = I || W;
        if (tb.has(_.status) && re && vn(re.formMethod)) await Gt(G, J, {
            submission: $e({}, re, {
                formAction: _.location
            }),
            preventScrollReset: D
        });
        else {
            let xe = ff(J, I);
            await Gt(G, J, {
                overrideNavigation: xe,
                fetcherSubmission: W,
                preventScrollReset: D
            })
        }
    }
    async function Qn(T, _, O, I, W) {
        let ne = await Promise.all([...O.map(K => ws("loader", W, K, _, o, i, a, c.v7_relativeSplatPath)), ...I.map(K => K.matches && K.match && K.controller ? ws("loader", xs(e.history, K.path, K.controller.signal), K.match, K.matches, o, i, a, c.v7_relativeSplatPath) : {
                type: Ie.error,
                error: tn(404, {
                    pathname: K.path
                })
            })]),
            J = ne.slice(0, O.length),
            G = ne.slice(O.length);
        return await Promise.all([hg(T, O, J, J.map(() => W.signal), !1, S.loaderData), hg(T, I.map(K => K.match), G, I.map(K => K.controller ? K.controller.signal : null), !0)]), {
            results: ne,
            loaderResults: J,
            fetcherResults: G
        }
    }

    function On() {
        et = !0, $t.push(...us()), ye.forEach((T, _) => {
            ce.has(_) && (St.push(_), Ut(_))
        })
    }

    function hn(T, _, O) {
        O === void 0 && (O = {}), S.fetchers.set(T, _), de({
            fetchers: new Map(S.fetchers)
        }, {
            flushSync: (O && O.flushSync) === !0
        })
    }

    function vr(T, _, O, I) {
        I === void 0 && (I = {});
        let W = Gs(S.matches, _);
        wr(T), de({
            errors: {
                [W.route.id]: O
            },
            fetchers: new Map(S.fetchers)
        }, {
            flushSync: (I && I.flushSync) === !0
        })
    }

    function ls(T) {
        return c.v7_fetcherPersist && (ee.set(T, (ee.get(T) || 0) + 1), _e.has(T) && _e.delete(T)), S.fetchers.get(T) || nb
    }

    function wr(T) {
        let _ = S.fetchers.get(T);
        ce.has(T) && !(_ && _.state === "loading" && Y.has(T)) && Ut(T), ye.delete(T), Y.delete(T), q.delete(T), _e.delete(T), S.fetchers.delete(T)
    }

    function Jl(T) {
        if (c.v7_fetcherPersist) {
            let _ = (ee.get(T) || 0) - 1;
            _ <= 0 ? (ee.delete(T), _e.add(T)) : ee.set(T, _)
        } else wr(T);
        de({
            fetchers: new Map(S.fetchers)
        })
    }

    function Ut(T) {
        let _ = ce.get(T);
        Z(_, "Expected fetch controller: " + T), _.abort(), ce.delete(T)
    }

    function ci(T) {
        for (let _ of T) {
            let O = ls(_),
                I = Tr(O.data);
            S.fetchers.set(_, I)
        }
    }

    function Yt() {
        let T = [],
            _ = !1;
        for (let O of q) {
            let I = S.fetchers.get(O);
            Z(I, "Expected fetcher: " + O), I.state === "loading" && (q.delete(O), T.push(O), _ = !0)
        }
        return ci(T), _
    }

    function Kn(T) {
        let _ = [];
        for (let [O, I] of Y)
            if (I < T) {
                let W = S.fetchers.get(O);
                Z(W, "Expected fetcher: " + O), W.state === "loading" && (Ut(O), Y.delete(O), _.push(O))
            } return ci(_), _.length > 0
    }

    function as(T, _) {
        let O = S.blockers.get(T) || vs;
        return Qe.get(T) !== _ && Qe.set(T, _), O
    }

    function Vi(T) {
        S.blockers.delete(T), Qe.delete(T)
    }

    function qi(T, _) {
        let O = S.blockers.get(T) || vs;
        Z(O.state === "unblocked" && _.state === "blocked" || O.state === "blocked" && _.state === "blocked" || O.state === "blocked" && _.state === "proceeding" || O.state === "blocked" && _.state === "unblocked" || O.state === "proceeding" && _.state === "unblocked", "Invalid blocker state transition: " + O.state + " -> " + _.state);
        let I = new Map(S.blockers);
        I.set(T, _), de({
            blockers: I
        })
    }

    function kn(T) {
        let {
            currentLocation: _,
            nextLocation: O,
            historyAction: I
        } = T;
        if (Qe.size === 0) return;
        Qe.size > 1 && Ii(!1, "A router only supports one blocker at a time");
        let W = Array.from(Qe.entries()),
            [ne, J] = W[W.length - 1],
            G = S.blockers.get(ne);
        if (!(G && G.state === "proceeding") && J({
                currentLocation: _,
                nextLocation: O,
                historyAction: I
            })) return ne
    }

    function us(T) {
        let _ = [];
        return at.forEach((O, I) => {
            (!T || T(I)) && (O.cancel(), _.push(I), at.delete(I))
        }), _
    }

    function jc(T, _, O) {
        if (h = T, y = _, x = O || null, !w && S.navigation === cf) {
            w = !0;
            let I = Zl(S.location, S.matches);
            I != null && de({
                restoreScrollPosition: I
            })
        }
        return () => {
            h = null, y = null, x = null
        }
    }

    function Ue(T, _) {
        return x && x(T, _.map(I => Z0(I, S.loaderData))) || T.key
    }

    function xr(T, _) {
        if (h && y) {
            let O = Ue(T, _);
            h[O] = y()
        }
    }

    function Zl(T, _) {
        if (h) {
            let O = Ue(T, _),
                I = h[O];
            if (typeof I == "number") return I
        }
        return null
    }

    function ea(T) {
        o = {}, l = Od(T, i, void 0, o)
    }
    return P = {
        get basename() {
            return a
        },
        get future() {
            return c
        },
        get state() {
            return S
        },
        get routes() {
            return s
        },
        get window() {
            return t
        },
        initialize: zi,
        subscribe: tt,
        enableScrollRestoration: jc,
        navigate: Hi,
        fetch: Xl,
        revalidate: yr,
        createHref: T => e.history.createHref(T),
        encodeLocation: T => e.history.encodeLocation(T),
        getFetcher: ls,
        deleteFetcher: Jl,
        dispose: Me,
        getBlocker: as,
        deleteBlocker: Vi,
        _internalFetchControllers: ce,
        _internalActiveDeferreds: at,
        _internalSetRoutes: ea
    }, P
}

function ob(e) {
    return e != null && ("formData" in e && e.formData != null || "body" in e && e.body !== void 0)
}

function Dd(e, t, n, r, i, o, s, l) {
    let a, c;
    if (s) {
        a = [];
        for (let f of t)
            if (a.push(f), f.route.id === s) {
                c = f;
                break
            }
    } else a = t, c = t[t.length - 1];
    let u = xp(i || ".", wp(a, o), Cn(e.pathname, n) || e.pathname, l === "path");
    return i == null && (u.search = e.search, u.hash = e.hash), (i == null || i === "" || i === ".") && c && c.route.index && !Sp(u.search) && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), r && n !== "/" && (u.pathname = u.pathname === "/" ? n : zn([n, u.pathname])), ni(u)
}

function ig(e, t, n, r) {
    if (!r || !ob(r)) return {
        path: n
    };
    if (r.formMethod && !db(r.formMethod)) return {
        path: n,
        error: tn(405, {
            method: r.formMethod
        })
    };
    let i = () => ({
            path: n,
            error: tn(400, {
                type: "invalid-body"
            })
        }),
        o = r.formMethod || "get",
        s = e ? o.toUpperCase() : o.toLowerCase(),
        l = aw(n);
    if (r.body !== void 0) {
        if (r.formEncType === "text/plain") {
            if (!vn(s)) return i();
            let h = typeof r.body == "string" ? r.body : r.body instanceof FormData || r.body instanceof URLSearchParams ? Array.from(r.body.entries()).reduce((x, y) => {
                let [w, E] = y;
                return "" + x + w + "=" + E + `
`
            }, "") : String(r.body);
            return {
                path: n,
                submission: {
                    formMethod: s,
                    formAction: l,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: h
                }
            }
        } else if (r.formEncType === "application/json") {
            if (!vn(s)) return i();
            try {
                let h = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
                return {
                    path: n,
                    submission: {
                        formMethod: s,
                        formAction: l,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: h,
                        text: void 0
                    }
                }
            } catch {
                return i()
            }
        }
    }
    Z(typeof FormData == "function", "FormData is not available in this environment");
    let a, c;
    if (r.formData) a = Ld(r.formData), c = r.formData;
    else if (r.body instanceof FormData) a = Ld(r.body), c = r.body;
    else if (r.body instanceof URLSearchParams) a = r.body, c = ag(a);
    else if (r.body == null) a = new URLSearchParams, c = new FormData;
    else try {
        a = new URLSearchParams(r.body), c = ag(a)
    } catch {
        return i()
    }
    let u = {
        formMethod: s,
        formAction: l,
        formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
        formData: c,
        json: void 0,
        text: void 0
    };
    if (vn(u.formMethod)) return {
        path: n,
        submission: u
    };
    let f = pr(n);
    return t && f.search && Sp(f.search) && a.append("index", ""), f.search = "?" + a, {
        path: ni(f),
        submission: u
    }
}

function sb(e, t) {
    let n = e;
    if (t) {
        let r = e.findIndex(i => i.route.id === t);
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}

function og(e, t, n, r, i, o, s, l, a, c, u, f, h, x, y, w) {
    let E = w ? Object.values(w)[0] : y ? Object.values(y)[0] : void 0,
        m = e.createURL(t.location),
        p = e.createURL(i),
        v = w ? Object.keys(w)[0] : void 0,
        P = sb(n, v).filter((N, D) => {
            let {
                route: M
            } = N;
            if (M.lazy) return !0;
            if (M.loader == null) return !1;
            if (o) return M.loader.hydrate ? !0 : t.loaderData[M.id] === void 0 && (!t.errors || t.errors[M.id] === void 0);
            if (lb(t.loaderData, t.matches[D], N) || l.some(ge => ge === N.route.id)) return !0;
            let B = t.matches[D],
                te = N;
            return sg(N, $e({
                currentUrl: m,
                currentParams: B.params,
                nextUrl: p,
                nextParams: te.params
            }, r, {
                actionResult: E,
                defaultShouldRevalidate: s || m.pathname + m.search === p.pathname + p.search || m.search !== p.search || lw(B, te)
            }))
        }),
        S = [];
    return u.forEach((N, D) => {
        if (o || !n.some(pe => pe.route.id === N.routeId) || c.has(D)) return;
        let M = ho(h, N.path, x);
        if (!M) {
            S.push({
                key: D,
                routeId: N.routeId,
                path: N.path,
                matches: null,
                match: null,
                controller: null
            });
            return
        }
        let B = t.fetchers.get(D),
            te = jd(M, N.path),
            ge = !1;
        f.has(D) ? ge = !1 : a.includes(D) ? ge = !0 : B && B.state !== "idle" && B.data === void 0 ? ge = s : ge = sg(te, $e({
            currentUrl: m,
            currentParams: t.matches[t.matches.length - 1].params,
            nextUrl: p,
            nextParams: n[n.length - 1].params
        }, r, {
            actionResult: E,
            defaultShouldRevalidate: s
        })), ge && S.push({
            key: D,
            routeId: N.routeId,
            path: N.path,
            matches: M,
            match: te,
            controller: new AbortController
        })
    }), [P, S]
}

function lb(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = e[n.route.id] === void 0;
    return r || i
}

function lw(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || n != null && n.endsWith("*") && e.params["*"] !== t.params["*"]
}

function sg(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if (typeof n == "boolean") return n
    }
    return t.defaultShouldRevalidate
}
async function lg(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let i = n[e.id];
    Z(i, "No route found in manifest");
    let o = {};
    for (let s in r) {
        let a = i[s] !== void 0 && s !== "hasErrorBoundary";
        Ii(!a, 'Route "' + i.id + '" has a static property "' + s + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + s + '" will be ignored.')), !a && !kS.has(s) && (o[s] = r[s])
    }
    Object.assign(i, o), Object.assign(i, $e({}, t(i), {
        lazy: void 0
    }))
}
async function ws(e, t, n, r, i, o, s, l, a) {
    a === void 0 && (a = {});
    let c, u, f, h = w => {
        let E, m = new Promise((p, v) => E = v);
        return f = () => E(), t.signal.addEventListener("abort", f), Promise.race([w({
            request: t,
            params: n.params,
            context: a.requestContext
        }), m])
    };
    try {
        let w = n.route[e];
        if (n.route.lazy)
            if (w) {
                let E, m = await Promise.all([h(w).catch(p => {
                    E = p
                }), lg(n.route, o, i)]);
                if (E) throw E;
                u = m[0]
            } else if (await lg(n.route, o, i), w = n.route[e], w) u = await h(w);
        else if (e === "action") {
            let E = new URL(t.url),
                m = E.pathname + E.search;
            throw tn(405, {
                method: t.method,
                pathname: m,
                routeId: n.route.id
            })
        } else return {
            type: Ie.data,
            data: void 0
        };
        else if (w) u = await h(w);
        else {
            let E = new URL(t.url),
                m = E.pathname + E.search;
            throw tn(404, {
                pathname: m
            })
        }
        Z(u !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + n.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.")
    } catch (w) {
        c = Ie.error, u = w
    } finally {
        f && t.signal.removeEventListener("abort", f)
    }
    if (fb(u)) {
        let w = u.status;
        if (eb.has(w)) {
            let m = u.headers.get("Location");
            if (Z(m, "Redirects returned/thrown from loaders/actions must have a Location header"), !ow.test(m)) m = Dd(new URL(t.url), r.slice(0, r.indexOf(n) + 1), s, !0, m, l);
            else if (!a.isStaticRequest) {
                let p = new URL(t.url),
                    v = m.startsWith("//") ? new URL(p.protocol + m) : new URL(m),
                    R = Cn(v.pathname, s) != null;
                v.origin === p.origin && R && (m = v.pathname + v.search + v.hash)
            }
            if (a.isStaticRequest) throw u.headers.set("Location", m), u;
            return {
                type: Ie.redirect,
                status: w,
                location: m,
                revalidate: u.headers.get("X-Remix-Revalidate") !== null,
                reloadDocument: u.headers.get("X-Remix-Reload-Document") !== null
            }
        }
        if (a.isRouteRequest) throw {
            type: c === Ie.error ? Ie.error : Ie.data,
            response: u
        };
        let E;
        try {
            let m = u.headers.get("Content-Type");
            m && /\bapplication\/json\b/.test(m) ? E = await u.json() : E = await u.text()
        } catch (m) {
            return {
                type: Ie.error,
                error: m
            }
        }
        return c === Ie.error ? {
            type: c,
            error: new Ep(w, u.statusText, E),
            headers: u.headers
        } : {
            type: Ie.data,
            data: E,
            statusCode: u.status,
            headers: u.headers
        }
    }
    if (c === Ie.error) return {
        type: c,
        error: u
    };
    if (cb(u)) {
        var x, y;
        return {
            type: Ie.deferred,
            deferredData: u,
            statusCode: (x = u.init) == null ? void 0 : x.status,
            headers: ((y = u.init) == null ? void 0 : y.headers) && new Headers(u.init.headers)
        }
    }
    return {
        type: Ie.data,
        data: u
    }
}

function xs(e, t, n, r) {
    let i = e.createURL(aw(t)).toString(),
        o = {
            signal: n
        };
    if (r && vn(r.formMethod)) {
        let {
            formMethod: s,
            formEncType: l
        } = r;
        o.method = s.toUpperCase(), l === "application/json" ? (o.headers = new Headers({
            "Content-Type": l
        }), o.body = JSON.stringify(r.json)) : l === "text/plain" ? o.body = r.text : l === "application/x-www-form-urlencoded" && r.formData ? o.body = Ld(r.formData) : o.body = r.formData
    }
    return new Request(i, o)
}

function Ld(e) {
    let t = new URLSearchParams;
    for (let [n, r] of e.entries()) t.append(n, typeof r == "string" ? r : r.name);
    return t
}

function ag(e) {
    let t = new FormData;
    for (let [n, r] of e.entries()) t.append(n, r);
    return t
}

function ab(e, t, n, r, i) {
    let o = {},
        s = null,
        l, a = !1,
        c = {};
    return n.forEach((u, f) => {
        let h = t[f].route.id;
        if (Z(!wi(u), "Cannot handle redirect results in processLoaderData"), po(u)) {
            let x = Gs(e, h),
                y = u.error;
            r && (y = Object.values(r)[0], r = void 0), s = s || {}, s[x.route.id] == null && (s[x.route.id] = y), o[h] = void 0, a || (a = !0, l = rw(u.error) ? u.error.status : 500), u.headers && (c[h] = u.headers)
        } else vi(u) ? (i.set(h, u.deferredData), o[h] = u.deferredData.data) : o[h] = u.data, u.statusCode != null && u.statusCode !== 200 && !a && (l = u.statusCode), u.headers && (c[h] = u.headers)
    }), r && (s = r, o[Object.keys(r)[0]] = void 0), {
        loaderData: o,
        errors: s,
        statusCode: l || 200,
        loaderHeaders: c
    }
}

function ug(e, t, n, r, i, o, s, l) {
    let {
        loaderData: a,
        errors: c
    } = ab(t, n, r, i, l);
    for (let u = 0; u < o.length; u++) {
        let {
            key: f,
            match: h,
            controller: x
        } = o[u];
        Z(s !== void 0 && s[u] !== void 0, "Did not find corresponding fetcher result");
        let y = s[u];
        if (!(x && x.signal.aborted))
            if (po(y)) {
                let w = Gs(e.matches, h == null ? void 0 : h.route.id);
                c && c[w.route.id] || (c = $e({}, c, {
                    [w.route.id]: y.error
                })), e.fetchers.delete(f)
            } else if (wi(y)) Z(!1, "Unhandled fetcher revalidation redirect");
        else if (vi(y)) Z(!1, "Unhandled fetcher deferred data");
        else {
            let w = Tr(y.data);
            e.fetchers.set(f, w)
        }
    }
    return {
        loaderData: a,
        errors: c
    }
}

function cg(e, t, n, r) {
    let i = $e({}, t);
    for (let o of n) {
        let s = o.route.id;
        if (t.hasOwnProperty(s) ? t[s] !== void 0 && (i[s] = t[s]) : e[s] !== void 0 && o.route.loader && (i[s] = e[s]), r && r.hasOwnProperty(s)) break
    }
    return i
}

function Gs(e, t) {
    return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0]
}

function fg(e) {
    let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === "/") || {
        id: "__shim-error-route__"
    };
    return {
        matches: [{
            params: {},
            pathname: "",
            pathnameBase: "",
            route: t
        }],
        route: t
    }
}

function tn(e, t) {
    let {
        pathname: n,
        routeId: r,
        method: i,
        type: o
    } = t === void 0 ? {} : t, s = "Unknown Server Error", l = "Unknown @remix-run/router error";
    return e === 400 ? (s = "Bad Request", i && n && r ? l = "You made a " + i + ' request to "' + n + '" but ' + ('did not provide a `loader` for route "' + r + '", ') + "so there is no way to handle the request." : o === "defer-action" ? l = "defer() is not supported in actions" : o === "invalid-body" && (l = "Unable to encode submission body")) : e === 403 ? (s = "Forbidden", l = 'Route "' + r + '" does not match URL "' + n + '"') : e === 404 ? (s = "Not Found", l = 'No route matches URL "' + n + '"') : e === 405 && (s = "Method Not Allowed", i && n && r ? l = "You made a " + i.toUpperCase() + ' request to "' + n + '" but ' + ('did not provide an `action` for route "' + r + '", ') + "so there is no way to handle the request." : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')), new Ep(e || 500, s, new Error(l), !0)
}

function dg(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t];
        if (wi(n)) return {
            result: n,
            idx: t
        }
    }
}

function aw(e) {
    let t = typeof e == "string" ? pr(e) : e;
    return ni($e({}, t, {
        hash: ""
    }))
}

function ub(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === "" ? t.hash !== "" : e.hash === t.hash ? !0 : t.hash !== ""
}

function vi(e) {
    return e.type === Ie.deferred
}

function po(e) {
    return e.type === Ie.error
}

function wi(e) {
    return (e && e.type) === Ie.redirect
}

function cb(e) {
    let t = e;
    return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function"
}

function fb(e) {
    return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u"
}

function db(e) {
    return ZS.has(e.toLowerCase())
}


function vn(e) {
    return XS.has(e.toLowerCase())
}
async function hg(e, t, n, r, i, o) {
    for (let s = 0; s < n.length; s++) {
        let l = n[s],
            a = t[s];
        if (!a) continue;
        let c = e.find(f => f.route.id === a.route.id),
            u = c != null && !lw(c, a) && (o && o[a.route.id]) !== void 0;
        if (vi(l) && (i || u)) {
            let f = r[s];
            Z(f, "Expected an AbortSignal for revalidating fetcher deferred result"), await uw(l, f, i).then(h => {
                h && (n[s] = h || n[s])
            })
        }
    }
}
async function uw(e, t, n) {
    if (n === void 0 && (n = !1), !await e.deferredData.resolveData(t)) {
        if (n) try {
            return {
                type: Ie.data,
                data: e.deferredData.unwrappedData
            }
        } catch (i) {
            return {
                type: Ie.error,
                error: i
            }
        }
        return {
            type: Ie.data,
            data: e.deferredData.data
        }
    }
}

function Sp(e) {
    return new URLSearchParams(e).getAll("index").some(t => t === "")
}

function jd(e, t) {
    let n = typeof t == "string" ? pr(t).search : t.search;
    if (e[e.length - 1].route.index && Sp(n || "")) return e[e.length - 1];
    let r = nw(e);
    return r[r.length - 1]
}

function pg(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: i,
        formData: o,
        json: s
    } = e;
    if (!(!t || !n || !r)) {
        if (i != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: void 0,
            text: i
        };
        if (o != null) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: o,
            json: void 0,
            text: void 0
        };
        if (s !== void 0) return {
            formMethod: t,
            formAction: n,
            formEncType: r,
            formData: void 0,
            json: s,
            text: void 0
        }
    }
}

function ff(e, t) {
    return t ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    } : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }
}

function hb(e, t) {
    return {
        state: "submitting",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text
    }
}

function Es(e, t) {
    return e ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t
    } : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t
    }
}

function pb(e, t) {
    return {
        state: "submitting",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0
    }
}

function Tr(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e
    }
}

function mb(e, t) {
    try {
        let n = e.sessionStorage.getItem(sw);
        if (n) {
            let r = JSON.parse(n);
            for (let [i, o] of Object.entries(r || {})) o && Array.isArray(o) && t.set(i, new Set(o || []))
        }
    } catch {}
}

function gb(e, t) {
    if (t.size > 0) {
        let n = {};
        for (let [r, i] of t) n[r] = [...i];
        try {
            e.sessionStorage.setItem(sw, JSON.stringify(n))
        } catch (r) {
            Ii(!1, "Failed to save applied view transitions in sessionStorage (" + r + ").")
        }
    }
}
/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gl() {
    return gl = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, gl.apply(this, arguments)
}
const Fl = g.createContext(null),
    ac = g.createContext(null),
    Pn = g.createContext(null),
    uc = g.createContext(null),
    Wn = g.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }),
    cw = g.createContext(null);

function yb(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t;
    $l() || Z(!1);
    let {
        basename: r,
        navigator: i
    } = g.useContext(Pn), {
        hash: o,
        pathname: s,
        search: l
    } = Ul(e, {
        relative: n
    }), a = s;
    return r !== "/" && (a = s === "/" ? r : zn([r, s])), i.createHref({
        pathname: a,
        search: l,
        hash: o
    })
}

function $l() {
    return g.useContext(uc) != null
}

function si() {
    return $l() || Z(!1), g.useContext(uc).location
}

function fw(e) {
    g.useContext(Pn).static || g.useLayoutEffect(e)
}

function dw() {
    let {
        isDataRoute: e
    } = g.useContext(Wn);
    return e ? jb() : vb()
}

function vb() {
    $l() || Z(!1);
    let e = g.useContext(Fl),
        {
            basename: t,
            future: n,
            navigator: r
        } = g.useContext(Pn),
        {
            matches: i
        } = g.useContext(Wn),
        {
            pathname: o
        } = si(),
        s = JSON.stringify(wp(i, n.v7_relativeSplatPath)),
        l = g.useRef(!1);
    return fw(() => {
        l.current = !0
    }), g.useCallback(function(c, u) {
        if (u === void 0 && (u = {}), !l.current) return;
        if (typeof c == "number") {
            r.go(c);
            return
        }
        let f = xp(c, JSON.parse(s), o, u.relative === "path");
        e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : zn([t, f.pathname])), (u.replace ? r.replace : r.push)(f, u.state, u)
    }, [t, r, s, o, e])
}
const wb = g.createContext(null);

function xb(e) {
    let t = g.useContext(Wn).outlet;
    return t && g.createElement(wb.Provider, {
        value: e
    }, t)
}

function Eb() {
    let {
        matches: e
    } = g.useContext(Wn), t = e[e.length - 1];
    return t ? t.params : {}
}

function Ul(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        future: r
    } = g.useContext(Pn), {
        matches: i
    } = g.useContext(Wn), {
        pathname: o
    } = si(), s = JSON.stringify(wp(i, r.v7_relativeSplatPath));
    return g.useMemo(() => xp(e, JSON.parse(s), o, n === "path"), [e, s, o, n])
}

function Sb(e, t, n, r) {
    $l() || Z(!1);
    let {
        navigator: i
    } = g.useContext(Pn), {
        matches: o
    } = g.useContext(Wn), s = o[o.length - 1], l = s ? s.params : {};
    s && s.pathname;
    let a = s ? s.pathnameBase : "/";
    s && s.route;
    let c = si(),
        u;
    if (t) {
        var f;
        let E = typeof t == "string" ? pr(t) : t;
        a === "/" || (f = E.pathname) != null && f.startsWith(a) || Z(!1), u = E
    } else u = c;
    let h = u.pathname || "/",
        x = a === "/" ? h : h.slice(a.length) || "/",
        y = ho(e, {
            pathname: x
        }),
        w = _b(y && y.map(E => Object.assign({}, E, {
            params: Object.assign({}, l, E.params),
            pathname: zn([a, i.encodeLocation ? i.encodeLocation(E.pathname).pathname : E.pathname]),
            pathnameBase: E.pathnameBase === "/" ? a : zn([a, i.encodeLocation ? i.encodeLocation(E.pathnameBase).pathname : E.pathnameBase])
        })), o, n, r);
    return t && w ? g.createElement(uc.Provider, {
        value: {
            location: gl({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, u),
            navigationType: Ve.Pop
        }
    }, w) : w
}

function bb() {
    let e = Lb(),
        t = rw(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        },
        o = null;
    return g.createElement(g.Fragment, null, g.createElement("h2", null, "Unexpected Application Error!"), g.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, t), n ? g.createElement("pre", {
        style: i
    }, n) : null, o)
}
const Cb = g.createElement(bb, null);
class Tb extends g.Component {
    constructor(t) {
        super(t), this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error
        }
    }
    static getDerivedStateFromError(t) {
        return {
            error: t
        }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || n.revalidation !== "idle" && t.revalidation === "idle" ? {
            error: t.error,
            location: t.location,
            revalidation: t.revalidation
        } : {
            error: t.error !== void 0 ? t.error : n.error,
            location: n.location,
            revalidation: t.revalidation || n.revalidation
        }
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n)
    }
    render() {
        return this.state.error !== void 0 ? g.createElement(Wn.Provider, {
            value: this.props.routeContext
        }, g.createElement(cw.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}

function Rb(e) {
    let {
        routeContext: t,
        match: n,
        children: r
    } = e, i = g.useContext(Fl);
    return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), g.createElement(Wn.Provider, {
        value: t
    }, r)
}

function _b(e, t, n, r) {
    var i;
    if (t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null) {
        var o;
        if ((o = n) != null && o.errors) e = n.matches;
        else return null
    }
    let s = e,
        l = (i = n) == null ? void 0 : i.errors;
    if (l != null) {
        let u = s.findIndex(f => f.route.id && (l == null ? void 0 : l[f.route.id]));
        u >= 0 || Z(!1), s = s.slice(0, Math.min(s.length, u + 1))
    }
    let a = !1,
        c = -1;
    if (n && r && r.v7_partialHydration)
        for (let u = 0; u < s.length; u++) {
            let f = s[u];
            if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (c = u), f.route.id) {
                let {
                    loaderData: h,
                    errors: x
                } = n, y = f.route.loader && h[f.route.id] === void 0 && (!x || x[f.route.id] === void 0);
                if (f.route.lazy || y) {
                    a = !0, c >= 0 ? s = s.slice(0, c + 1) : s = [s[0]];
                    break
                }
            }
        }
    return s.reduceRight((u, f, h) => {
        let x, y = !1,
            w = null,
            E = null;
        n && (x = l && f.route.id ? l[f.route.id] : void 0, w = f.route.errorElement || Cb, a && (c < 0 && h === 0 ? (Ab("route-fallback", !1), y = !0, E = null) : c === h && (y = !0, E = f.route.hydrateFallbackElement || null)));
        let m = t.concat(s.slice(0, h + 1)),
            p = () => {
                let v;
                return x ? v = w : y ? v = E : f.route.Component ? v = g.createElement(f.route.Component, null) : f.route.element ? v = f.route.element : v = u, g.createElement(Rb, {
                    match: f,
                    routeContext: {
                        outlet: u,
                        matches: m,
                        isDataRoute: n != null
                    },
                    children: v
                })
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || h === 0) ? g.createElement(Tb, {
            location: n.location,
            revalidation: n.revalidation,
            component: w,
            error: x,
            children: p(),
            routeContext: {
                outlet: null,
                matches: m,
                isDataRoute: !0
            }
        }) : p()
    }, null)
}
var hw = function(e) {
        return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
    }(hw || {}),
    Fi = function(e) {
        return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
    }(Fi || {});

function Pb(e) {
    let t = g.useContext(Fl);
    return t || Z(!1), t
}

function bp(e) {
    let t = g.useContext(ac);
    return t || Z(!1), t
}

function Nb(e) {
    let t = g.useContext(Wn);
    return t || Z(!1), t
}

function Cp(e) {
    let t = Nb(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Z(!1), n.route.id
}

function Ob() {
    return Cp(Fi.UseRouteId)
}

function kb() {
    return bp(Fi.UseNavigation).navigation
}

function Db() {
    let {
        matches: e,
        loaderData: t
    } = bp(Fi.UseMatches);
    return g.useMemo(() => e.map(n => Z0(n, t)), [e, t])
}

function Lb() {
    var e;
    let t = g.useContext(cw),
        n = bp(Fi.UseRouteError),
        r = Cp(Fi.UseRouteError);
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}

function jb() {
    let {
        router: e
    } = Pb(hw.UseNavigateStable), t = Cp(Fi.UseNavigateStable), n = g.useRef(!1);
    return fw(() => {
        n.current = !0
    }), g.useCallback(function(i, o) {
        o === void 0 && (o = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, gl({
            fromRouteId: t
        }, o)))
    }, [e, t])
}
const mg = {};

function Ab(e, t, n) {
    !t && !mg[e] && (mg[e] = !0)
}

function Mb(e) {
    return xb(e.context)
}

function Ms(e) {
    Z(!1)
}

function Ib(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: i = Ve.Pop,
        navigator: o,
        static: s = !1,
        future: l
    } = e;
    $l() && Z(!1);
    let a = t.replace(/^\/*/, "/"),
        c = g.useMemo(() => ({
            basename: a,
            navigator: o,
            static: s,
            future: gl({
                v7_relativeSplatPath: !1
            }, l)
        }), [a, l, o, s]);
    typeof r == "string" && (r = pr(r));
    let {
        pathname: u = "/",
        search: f = "",
        hash: h = "",
        state: x = null,
        key: y = "default"
    } = r, w = g.useMemo(() => {
        let E = Cn(u, a);
        return E == null ? null : {
            location: {
                pathname: E,
                search: f,
                hash: h,
                state: x,
                key: y
            },
            navigationType: i
        }
    }, [a, u, f, h, x, y, i]);
    return w == null ? null : g.createElement(Pn.Provider, {
        value: c
    }, g.createElement(uc.Provider, {
        children: n,
        value: w
    }))
}
new Promise(() => {});

function Ad(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return g.Children.forEach(e, (r, i) => {
        if (!g.isValidElement(r)) return;
        let o = [...t, i];
        if (r.type === g.Fragment) {
            n.push.apply(n, Ad(r.props.children, o));
            return
        }
        r.type !== Ms && Z(!1), !r.props.index || !r.props.children || Z(!1);
        let s = {
            id: r.props.id || o.join("-"),
            caseSensitive: r.props.caseSensitive,
            element: r.props.element,
            Component: r.props.Component,
            index: r.props.index,
            path: r.props.path,
            loader: r.props.loader,
            action: r.props.action,
            errorElement: r.props.errorElement,
            ErrorBoundary: r.props.ErrorBoundary,
            hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
            shouldRevalidate: r.props.shouldRevalidate,
            handle: r.props.handle,
            lazy: r.props.lazy
        };
        r.props.children && (s.children = Ad(r.props.children, o)), n.push(s)
    }), n
}

function Fb(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null
    };
    return e.Component && Object.assign(t, {
        element: g.createElement(e.Component),
        Component: void 0
    }), e.HydrateFallback && Object.assign(t, {
        hydrateFallbackElement: g.createElement(e.HydrateFallback),
        HydrateFallback: void 0
    }), e.ErrorBoundary && Object.assign(t, {
        errorElement: g.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0
    }), t
}
/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function cr() {
    return cr = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, cr.apply(this, arguments)
}

function Tp(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}
const Va = "get",
    df = "application/x-www-form-urlencoded";

function cc(e) {
    return e != null && typeof e.tagName == "string"
}

function $b(e) {
    return cc(e) && e.tagName.toLowerCase() === "button"
}

function Ub(e) {
    return cc(e) && e.tagName.toLowerCase() === "form"
}

function Bb(e) {
    return cc(e) && e.tagName.toLowerCase() === "input"
}

function zb(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function Hb(e, t) {
    return e.button === 0 && (!t || t === "_self") && !zb(e)
}

function Md(e) {
    return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((t, n) => {
        let r = e[n];
        return t.concat(Array.isArray(r) ? r.map(i => [n, i]) : [
            [n, r]
        ])
    }, []))
}

function Wb(e, t) {
    let n = Md(e);
    return t && t.forEach((r, i) => {
        n.has(i) || t.getAll(i).forEach(o => {
            n.append(i, o)
        })
    }), n
}
let xa = null;

function Vb() {
    if (xa === null) try {
        new FormData(document.createElement("form"), 0), xa = !1
    } catch {
        xa = !0
    }
    return xa
}
const qb = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

function hf(e) {
    return e != null && !qb.has(e) ? null : e
}

function Qb(e, t) {
    let n, r, i, o, s;
    if (Ub(e)) {
        let l = e.getAttribute("action");
        r = l ? Cn(l, t) : null, n = e.getAttribute("method") || Va, i = hf(e.getAttribute("enctype")) || df, o = new FormData(e)
    } else if ($b(e) || Bb(e) && (e.type === "submit" || e.type === "image")) {
        let l = e.form;
        if (l == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
        let a = e.getAttribute("formaction") || l.getAttribute("action");
        if (r = a ? Cn(a, t) : null, n = e.getAttribute("formmethod") || l.getAttribute("method") || Va, i = hf(e.getAttribute("formenctype")) || hf(l.getAttribute("enctype")) || df, o = new FormData(l, e), !Vb()) {
            let {
                name: c,
                type: u,
                value: f
            } = e;
            if (u === "image") {
                let h = c ? c + "." : "";
                o.append(h + "x", "0"), o.append(h + "y", "0")
            } else c && o.append(c, f)
        }
    } else {
        if (cc(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
        n = Va, r = null, i = df, s = e
    }
    return o && i === "text/plain" && (s = o, o = void 0), {
        action: r,
        method: n.toLowerCase(),
        encType: i,
        formData: o,
        body: s
    }
}
const Kb = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"],
    Gb = ["aria-current", "caseSensitive", "className", "end", "style", "to", "unstable_viewTransition", "children"],
    Yb = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "unstable_viewTransition"];

function Xb(e, t) {
    return ib({
        basename: t == null ? void 0 : t.basename,
        future: cr({}, t == null ? void 0 : t.future, {
            v7_prependBasename: !0
        }),
        history: PS({
            window: t == null ? void 0 : t.window
        }),
        hydrationData: (t == null ? void 0 : t.hydrationData) || Jb(),
        routes: e,
        mapRouteProperties: Fb,
        window: t == null ? void 0 : t.window
    }).initialize()
}

function Jb() {
    var e;
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
    return t && t.errors && (t = cr({}, t, {
        errors: Zb(t.errors)
    })), t
}

function Zb(e) {
    if (!e) return null;
    let t = Object.entries(e),
        n = {};
    for (let [r, i] of t)
        if (i && i.__type === "RouteErrorResponse") n[r] = new Ep(i.status, i.statusText, i.data, i.internal === !0);
        else if (i && i.__type === "Error") {
        if (i.__subType) {
            let o = window[i.__subType];
            if (typeof o == "function") try {
                let s = new o(i.message);
                s.stack = "", n[r] = s
            } catch {}
        }
        if (n[r] == null) {
            let o = new Error(i.message);
            o.stack = "", n[r] = o
        }
    } else n[r] = i;
    return n
}
const pw = g.createContext({
        isTransitioning: !1
    }),
    eC = g.createContext(new Map),
    tC = "startTransition",
    gg = Fo[tC],
    nC = "flushSync",
    yg = _S[nC];

function rC(e) {
    gg ? gg(e) : e()
}

function Ss(e) {
    yg ? yg(e) : e()
}
class iC {
    constructor() {
        this.status = "pending", this.promise = new Promise((t, n) => {
            this.resolve = r => {
                this.status === "pending" && (this.status = "resolved", t(r))
            }, this.reject = r => {
                this.status === "pending" && (this.status = "rejected", n(r))
            }
        })
    }
}

function oC(e) {
    let {
        fallbackElement: t,
        router: n,
        future: r
    } = e, [i, o] = g.useState(n.state), [s, l] = g.useState(), [a, c] = g.useState({
        isTransitioning: !1
    }), [u, f] = g.useState(), [h, x] = g.useState(), [y, w] = g.useState(), E = g.useRef(new Map), {
        v7_startTransition: m
    } = r || {}, p = g.useCallback(N => {
        m ? rC(N) : N()
    }, [m]), v = g.useCallback((N, D) => {
        let {
            deletedFetchers: M,
            unstable_flushSync: B,
            unstable_viewTransitionOpts: te
        } = D;
        M.forEach(pe => E.current.delete(pe)), N.fetchers.forEach((pe, et) => {
            pe.data !== void 0 && E.current.set(et, pe.data)
        });
        let ge = n.window == null || typeof n.window.document.startViewTransition != "function";
        if (!te || ge) {
            B ? Ss(() => o(N)) : p(() => o(N));
            return
        }
        if (B) {
            Ss(() => {
                h && (u && u.resolve(), h.skipTransition()), c({
                    isTransitioning: !0,
                    flushSync: !0,
                    currentLocation: te.currentLocation,
                    nextLocation: te.nextLocation
                })
            });
            let pe = n.window.document.startViewTransition(() => {
                Ss(() => o(N))
            });
            pe.finished.finally(() => {
                Ss(() => {
                    f(void 0), x(void 0), l(void 0), c({
                        isTransitioning: !1
                    })
                })
            }), Ss(() => x(pe));
            return
        }
        h ? (u && u.resolve(), h.skipTransition(), w({
            state: N,
            currentLocation: te.currentLocation,
            nextLocation: te.nextLocation
        })) : (l(N), c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: te.currentLocation,
            nextLocation: te.nextLocation
        }))
    }, [n.window, h, u, E, p]);
    g.useLayoutEffect(() => n.subscribe(v), [n, v]), g.useEffect(() => {
        a.isTransitioning && !a.flushSync && f(new iC)
    }, [a]), g.useEffect(() => {
        if (u && s && n.window) {
            let N = s,
                D = u.promise,
                M = n.window.document.startViewTransition(async () => {
                    p(() => o(N)), await D
                });
            M.finished.finally(() => {
                f(void 0), x(void 0), l(void 0), c({
                    isTransitioning: !1
                })
            }), x(M)
        }
    }, [p, s, u, n.window]), g.useEffect(() => {
        u && s && i.location.key === s.location.key && u.resolve()
    }, [u, h, i.location, s]), g.useEffect(() => {
        !a.isTransitioning && y && (l(y.state), c({
            isTransitioning: !0,
            flushSync: !1,
            currentLocation: y.currentLocation,
            nextLocation: y.nextLocation
        }), w(void 0))
    }, [a.isTransitioning, y]), g.useEffect(() => {}, []);
    let R = g.useMemo(() => ({
            createHref: n.createHref,
            encodeLocation: n.encodeLocation,
            go: N => n.navigate(N),
            push: (N, D, M) => n.navigate(N, {
                state: D,
                preventScrollReset: M == null ? void 0 : M.preventScrollReset
            }),
            replace: (N, D, M) => n.navigate(N, {
                replace: !0,
                state: D,
                preventScrollReset: M == null ? void 0 : M.preventScrollReset
            })
        }), [n]),
        P = n.basename || "/",
        S = g.useMemo(() => ({
            router: n,
            navigator: R,
            static: !1,
            basename: P
        }), [n, R, P]);
    return g.createElement(g.Fragment, null, g.createElement(Fl.Provider, {
        value: S
    }, g.createElement(ac.Provider, {
        value: i
    }, g.createElement(eC.Provider, {
        value: E.current
    }, g.createElement(pw.Provider, {
        value: a
    }, g.createElement(Ib, {
        basename: P,
        location: i.location,
        navigationType: i.historyAction,
        navigator: R,
        future: {
            v7_relativeSplatPath: n.future.v7_relativeSplatPath
        }
    }, i.initialized || n.future.v7_partialHydration ? g.createElement(sC, {
        routes: n.routes,
        future: n.future,
        state: i
    }) : t))))), null)
}

function sC(e) {
    let {
        routes: t,
        future: n,
        state: r
    } = e;
    return Sb(t, void 0, r, n)
}
const lC = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    aC = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Ot = g.forwardRef(function(t, n) {
        let {
            onClick: r,
            relative: i,
            reloadDocument: o,
            replace: s,
            state: l,
            target: a,
            to: c,
            preventScrollReset: u,
            unstable_viewTransition: f
        } = t, h = Tp(t, Kb), {
            basename: x
        } = g.useContext(Pn), y, w = !1;
        if (typeof c == "string" && aC.test(c) && (y = c, lC)) try {
            let v = new URL(window.location.href),
                R = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
                P = Cn(R.pathname, x);
            R.origin === v.origin && P != null ? c = P + R.search + R.hash : w = !0
        } catch {}
        let E = yb(c, {
                relative: i
            }),
            m = hC(c, {
                replace: s,
                state: l,
                target: a,
                preventScrollReset: u,
                relative: i,
                unstable_viewTransition: f
            });

        function p(v) {
            r && r(v), v.defaultPrevented || m(v)
        }
        return g.createElement("a", cr({}, h, {
            href: y || E,
            onClick: w || o ? r : p,
            ref: n,
            target: a
        }))
    }),
    uC = g.forwardRef(function(t, n) {
        let {
            "aria-current": r = "page",
            caseSensitive: i = !1,
            className: o = "",
            end: s = !1,
            style: l,
            to: a,
            unstable_viewTransition: c,
            children: u
        } = t, f = Tp(t, Gb), h = Ul(a, {
            relative: f.relative
        }), x = si(), y = g.useContext(ac), {
            navigator: w
        } = g.useContext(Pn), E = y != null && EC(h) && c === !0, m = w.encodeLocation ? w.encodeLocation(h).pathname : h.pathname, p = x.pathname, v = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
        i || (p = p.toLowerCase(), v = v ? v.toLowerCase() : null, m = m.toLowerCase());
        const R = m !== "/" && m.endsWith("/") ? m.length - 1 : m.length;
        let P = p === m || !s && p.startsWith(m) && p.charAt(R) === "/",
            S = v != null && (v === m || !s && v.startsWith(m) && v.charAt(m.length) === "/"),
            N = {
                isActive: P,
                isPending: S,
                isTransitioning: E
            },
            D = P ? r : void 0,
            M;
        typeof o == "function" ? M = o(N) : M = [o, P ? "active" : null, S ? "pending" : null, E ? "transitioning" : null].filter(Boolean).join(" ");
        let B = typeof l == "function" ? l(N) : l;
        return g.createElement(Ot, cr({}, f, {
            "aria-current": D,
            className: M,
            ref: n,
            style: B,
            to: a,
            unstable_viewTransition: c
        }), typeof u == "function" ? u(N) : u)
    }),
    cC = g.forwardRef((e, t) => {
        let {
            fetcherKey: n,
            navigate: r,
            reloadDocument: i,
            replace: o,
            state: s,
            method: l = Va,
            action: a,
            onSubmit: c,
            relative: u,
            preventScrollReset: f,
            unstable_viewTransition: h
        } = e, x = Tp(e, Yb), y = yC(), w = vC(a, {
            relative: u
        }), E = l.toLowerCase() === "get" ? "get" : "post", m = p => {
            if (c && c(p), p.defaultPrevented) return;
            p.preventDefault();
            let v = p.nativeEvent.submitter,
                R = (v == null ? void 0 : v.getAttribute("formmethod")) || l;
            y(v || p.currentTarget, {
                fetcherKey: n,
                method: R,
                navigate: r,
                replace: o,
                state: s,
                relative: u,
                preventScrollReset: f,
                unstable_viewTransition: h
            })
        };
        return g.createElement("form", cr({
            ref: t,
            method: E,
            action: w,
            onSubmit: i ? c : m
        }, x))
    });

function fC(e) {
    let {
        getKey: t,
        storageKey: n
    } = e;
    return wC({
        getKey: t,
        storageKey: n
    }), null
}
var yl;
(function(e) {
    e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
})(yl || (yl = {}));
var Id;
(function(e) {
    e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
})(Id || (Id = {}));

function Rp(e) {
    let t = g.useContext(Fl);
    return t || Z(!1), t
}

function dC(e) {
    let t = g.useContext(ac);
    return t || Z(!1), t
}

function hC(e, t) {
    let {
        target: n,
        replace: r,
        state: i,
        preventScrollReset: o,
        relative: s,
        unstable_viewTransition: l
    } = t === void 0 ? {} : t, a = dw(), c = si(), u = Ul(e, {
        relative: s
    });
    return g.useCallback(f => {
        if (Hb(f, n)) {
            f.preventDefault();
            let h = r !== void 0 ? r : ni(c) === ni(u);
            a(e, {
                replace: h,
                state: i,
                preventScrollReset: o,
                relative: s,
                unstable_viewTransition: l
            })
        }
    }, [c, a, u, r, i, n, e, o, s, l])
}

function mw(e) {
    let t = g.useRef(Md(e)),
        n = g.useRef(!1),
        r = si(),
        i = g.useMemo(() => Wb(r.search, n.current ? null : t.current), [r.search]),
        o = dw(),
        s = g.useCallback((l, a) => {
            const c = Md(typeof l == "function" ? l(i) : l);
            n.current = !0, o("?" + c, a)
        }, [o, i]);
    return [i, s]
}

function pC() {
    if (typeof document > "u") throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.")
}
let mC = 0,
    gC = () => "__" + String(++mC) + "__";

function yC() {
    let {
        router: e
    } = Rp(yl.UseSubmit), {
        basename: t
    } = g.useContext(Pn), n = Ob();
    return g.useCallback(function(r, i) {
        i === void 0 && (i = {}), pC();
        let {
            action: o,
            method: s,
            encType: l,
            formData: a,
            body: c
        } = Qb(r, t);
        if (i.navigate === !1) {
            let u = i.fetcherKey || gC();
            e.fetch(u, n, i.action || o, {
                preventScrollReset: i.preventScrollReset,
                formData: a,
                body: c,
                formMethod: i.method || s,
                formEncType: i.encType || l,
                unstable_flushSync: i.unstable_flushSync
            })
        } else e.navigate(i.action || o, {
            preventScrollReset: i.preventScrollReset,
            formData: a,
            body: c,
            formMethod: i.method || s,
            formEncType: i.encType || l,
            replace: i.replace,
            state: i.state,
            fromRouteId: n,
            unstable_flushSync: i.unstable_flushSync,
            unstable_viewTransition: i.unstable_viewTransition
        })
    }, [e, t, n])
}

function vC(e, t) {
    let {
        relative: n
    } = t === void 0 ? {} : t, {
        basename: r
    } = g.useContext(Pn), i = g.useContext(Wn);
    i || Z(!1);
    let [o] = i.matches.slice(-1), s = cr({}, Ul(e || ".", {
        relative: n
    })), l = si();
    if (e == null) {
        s.search = l.search;
        let a = new URLSearchParams(s.search);
        a.has("index") && a.get("index") === "" && (a.delete("index"), s.search = a.toString() ? "?" + a.toString() : "")
    }
    return (!e || e === ".") && o.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (s.pathname = s.pathname === "/" ? r : zn([r, s.pathname])), ni(s)
}
const vg = "react-router-scroll-positions";
let Ea = {};

function wC(e) {
    let {
        getKey: t,
        storageKey: n
    } = e === void 0 ? {} : e, {
        router: r
    } = Rp(yl.UseScrollRestoration), {
        restoreScrollPosition: i,
        preventScrollReset: o
    } = dC(Id.UseScrollRestoration), {
        basename: s
    } = g.useContext(Pn), l = si(), a = Db(), c = kb();
    g.useEffect(() => (window.history.scrollRestoration = "manual", () => {
        window.history.scrollRestoration = "auto"
    }), []), xC(g.useCallback(() => {
        if (c.state === "idle") {
            let u = (t ? t(l, a) : null) || l.key;
            Ea[u] = window.scrollY
        }
        try {
            sessionStorage.setItem(n || vg, JSON.stringify(Ea))
        } catch {}
        window.history.scrollRestoration = "auto"
    }, [n, t, c.state, l, a])), typeof document < "u" && (g.useLayoutEffect(() => {
        try {
            let u = sessionStorage.getItem(n || vg);
            u && (Ea = JSON.parse(u))
        } catch {}
    }, [n]), g.useLayoutEffect(() => {
        let u = t && s !== "/" ? (h, x) => t(cr({}, h, {
                pathname: Cn(h.pathname, s) || h.pathname
            }), x) : t,
            f = r == null ? void 0 : r.enableScrollRestoration(Ea, () => window.scrollY, u);
        return () => f && f()
    }, [r, s, t]), g.useLayoutEffect(() => {
        if (i !== !1) {
            if (typeof i == "number") {
                window.scrollTo(0, i);
                return
            }
            if (l.hash) {
                let u = document.getElementById(decodeURIComponent(l.hash.slice(1)));
                if (u) {
                    u.scrollIntoView();
                    return
                }
            }
            o !== !0 && window.scrollTo(0, 0)
        }
    }, [l, i, o]))
}

function xC(e, t) {
    let {
        capture: n
    } = t || {};
    g.useEffect(() => {
        let r = n != null ? {
            capture: n
        } : void 0;
        return window.addEventListener("pagehide", e, r), () => {
            window.removeEventListener("pagehide", e, r)
        }
    }, [e, n])
}

function EC(e, t) {
    t === void 0 && (t = {});
    let n = g.useContext(pw);
    n == null && Z(!1);
    let {
        basename: r
    } = Rp(yl.useViewTransitionState), i = Ul(e, {
        relative: t.relative
    });
    if (!n.isTransitioning) return !1;
    let o = Cn(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        s = Cn(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return kd(i.pathname, s) != null || kd(i.pathname, o) != null
}
var gw = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0
    },
    Fd = L.createContext && L.createContext(gw),
    Xr = globalThis && globalThis.__assign || function() {
        return Xr = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }
            return e
        }, Xr.apply(this, arguments)
    },
    SC = globalThis && globalThis.__rest || function(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    };

function yw(e) {
    return e && e.map(function(t, n) {
        return L.createElement(t.tag, Xr({
            key: n
        }, t.attr), yw(t.child))
    })
}

function Bl(e) {
    return function(t) {
        return L.createElement(bC, Xr({
            attr: Xr({}, e.attr)
        }, t), yw(e.child))
    }
}

function bC(e) {
    var t = function(n) {
        var r = e.attr,
            i = e.size,
            o = e.title,
            s = SC(e, ["attr", "size", "title"]),
            l = i || n.size || "1em",
            a;
        return n.className && (a = n.className), e.className && (a = (a ? a + " " : "") + e.className), L.createElement("svg", Xr({
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0"
        }, n.attr, r, s, {
            className: a,
            style: Xr(Xr({
                color: e.color || n.color
            }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg"
        }), o && L.createElement("title", null, o), e.children)
    };
    return Fd !== void 0 ? L.createElement(Fd.Consumer, null, function(n) {
        return t(n)
    }) : t(gw)
}
var zl = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    qo = typeof window > "u" || "Deno" in window;

function nn() {}

function CC(e, t) {
    return typeof e == "function" ? e(t) : e
}

function $d(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0
}

function vw(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0)
}

function wg(e, t) {
    const {
        type: n = "all",
        exact: r,
        fetchStatus: i,
        predicate: o,
        queryKey: s,
        stale: l
    } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== _p(s, t.options)) return !1
        } else if (!wl(t.queryKey, s)) return !1
    }
    if (n !== "all") {
        const a = t.isActive();
        if (n === "active" && !a || n === "inactive" && a) return !1
    }
    return !(typeof l == "boolean" && t.isStale() !== l || typeof i < "u" && i !== t.state.fetchStatus || o && !o(t))
}

function xg(e, t) {
    const {
        exact: n,
        status: r,
        predicate: i,
        mutationKey: o
    } = e;
    if (o) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (vl(t.options.mutationKey) !== vl(o)) return !1
        } else if (!wl(t.options.mutationKey, o)) return !1
    }
    return !(r && t.state.status !== r || i && !i(t))
}

function _p(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || vl)(e)
}

function vl(e) {
    return JSON.stringify(e, (t, n) => Bd(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n)
}

function wl(e, t) {
    return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some(n => !wl(e[n], t[n])) : !1
}

function ww(e, t) {
    if (e === t) return e;
    const n = Eg(e) && Eg(t);
    if (n || Bd(e) && Bd(t)) {
        const r = n ? e.length : Object.keys(e).length,
            i = n ? t : Object.keys(t),
            o = i.length,
            s = n ? [] : {};
        let l = 0;
        for (let a = 0; a < o; a++) {
            const c = n ? a : i[a];
            s[c] = ww(e[c], t[c]), s[c] === e[c] && l++
        }
        return r === o && l === r ? e : s
    }
    return t
}

function Ud(e, t) {
    if (e && !t || t && !e) return !1;
    for (const n in e)
        if (e[n] !== t[n]) return !1;
    return !0
}

function Eg(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length
}

function Bd(e) {
    if (!Sg(e)) return !1;
    const t = e.constructor;
    if (typeof t > "u") return !0;
    const n = t.prototype;
    return !(!Sg(n) || !n.hasOwnProperty("isPrototypeOf"))
}

function Sg(e) {
    return Object.prototype.toString.call(e) === "[object Object]"
}

function xw(e) {
    return new Promise(t => {
        setTimeout(t, e)
    })
}

function bg(e) {
    xw(0).then(e)
}

function zd(e, t, n) {
    return typeof n.structuralSharing == "function" ? n.structuralSharing(e, t) : n.structuralSharing !== !1 ? ww(e, t) : t
}

function TC(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r
}

function RC(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r
}
var Ei, Dr, bo, Oy, _C = (Oy = class extends zl {
        constructor() {
            super();
            Q(this, Ei, void 0);
            Q(this, Dr, void 0);
            Q(this, bo, void 0);
            $(this, bo, t => {
                if (!qo && window.addEventListener) {
                    const n = () => t();
                    return window.addEventListener("visibilitychange", n, !1), () => {
                        window.removeEventListener("visibilitychange", n)
                    }
                }
            })
        }
        onSubscribe() {
            C(this, Dr) || this.setEventListener(C(this, bo))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = C(this, Dr)) == null || t.call(this), $(this, Dr, void 0))
        }
        setEventListener(t) {
            var n;
            $(this, bo, t), (n = C(this, Dr)) == null || n.call(this), $(this, Dr, t(r => {
                typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
            }))
        }
        setFocused(t) {
            C(this, Ei) !== t && ($(this, Ei, t), this.onFocus())
        }
        onFocus() {
            this.listeners.forEach(t => {
                t()
            })
        }
        isFocused() {
            var t;
            return typeof C(this, Ei) == "boolean" ? C(this, Ei) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden"
        }
    }, Ei = new WeakMap, Dr = new WeakMap, bo = new WeakMap, Oy),
    Ou = new _C,
    Co, Lr, To, ky, PC = (ky = class extends zl {
        constructor() {
            super();
            Q(this, Co, !0);
            Q(this, Lr, void 0);
            Q(this, To, void 0);
            $(this, To, t => {
                if (!qo && window.addEventListener) {
                    const n = () => t(!0),
                        r = () => t(!1);
                    return window.addEventListener("online", n, !1), window.addEventListener("offline", r, !1), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", r)
                    }
                }
            })
        }
        onSubscribe() {
            C(this, Lr) || this.setEventListener(C(this, To))
        }
        onUnsubscribe() {
            var t;
            this.hasListeners() || ((t = C(this, Lr)) == null || t.call(this), $(this, Lr, void 0))
        }
        setEventListener(t) {
            var n;

            $(this, To, t), (n = C(this, Lr)) == null || n.call(this), $(this, Lr, t(this.setOnline.bind(this)))
        }
        setOnline(t) {
            C(this, Co) !== t && ($(this, Co, t), this.listeners.forEach(r => {
                r(t)
            }))
        }
        isOnline() {
            return C(this, Co)
        }
    }, Co = new WeakMap, Lr = new WeakMap, To = new WeakMap, ky),
    ku = new PC;

function NC(e) {
    return Math.min(1e3 * 2 ** e, 3e4)
}

function fc(e) {
    return (e ?? "online") === "online" ? ku.isOnline() : !0
}
var Ew = class {
    constructor(e) {
        this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent
    }
};

function pf(e) {
    return e instanceof Ew
}

function Sw(e) {
    let t = !1,
        n = 0,
        r = !1,
        i, o, s;
    const l = new Promise((E, m) => {
            o = E, s = m
        }),
        a = E => {
            var m;
            r || (x(new Ew(E)), (m = e.abort) == null || m.call(e))
        },
        c = () => {
            t = !0
        },
        u = () => {
            t = !1
        },
        f = () => !Ou.isFocused() || e.networkMode !== "always" && !ku.isOnline(),
        h = E => {
            var m;
            r || (r = !0, (m = e.onSuccess) == null || m.call(e, E), i == null || i(), o(E))
        },
        x = E => {
            var m;
            r || (r = !0, (m = e.onError) == null || m.call(e, E), i == null || i(), s(E))
        },
        y = () => new Promise(E => {
            var m;
            i = p => {
                const v = r || !f();
                return v && E(p), v
            }, (m = e.onPause) == null || m.call(e)
        }).then(() => {
            var E;
            i = void 0, r || (E = e.onContinue) == null || E.call(e)
        }),
        w = () => {
            if (r) return;
            let E;
            try {
                E = e.fn()
            } catch (m) {
                E = Promise.reject(m)
            }
            Promise.resolve(E).then(h).catch(m => {
                var S;
                if (r) return;
                const p = e.retry ?? (qo ? 0 : 3),
                    v = e.retryDelay ?? NC,
                    R = typeof v == "function" ? v(n, m) : v,
                    P = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, m);
                if (t || !P) {
                    x(m);
                    return
                }
                n++, (S = e.onFail) == null || S.call(e, n, m), xw(R).then(() => {
                    if (f()) return y()
                }).then(() => {
                    t ? x(m) : w()
                })
            })
        };
    return fc(e.networkMode) ? w() : y().then(w), {
        promise: l,
        cancel: a,
        continue: () => (i == null ? void 0 : i()) ? l : Promise.resolve(),
        cancelRetry: c,
        continueRetry: u
    }
}

function OC() {
    let e = [],
        t = 0,
        n = u => {
            u()
        },
        r = u => {
            u()
        };
    const i = u => {
            let f;
            t++;
            try {
                f = u()
            } finally {
                t--, t || l()
            }
            return f
        },
        o = u => {
            t ? e.push(u) : bg(() => {
                n(u)
            })
        },
        s = u => (...f) => {
            o(() => {
                u(...f)
            })
        },
        l = () => {
            const u = e;
            e = [], u.length && bg(() => {
                r(() => {
                    u.forEach(f => {
                        n(f)
                    })
                })
            })
        };
    return {
        batch: i,
        batchCalls: s,
        schedule: o,
        setNotifyFunction: u => {
            n = u
        },
        setBatchNotifyFunction: u => {
            r = u
        }
    }
}

var ct = OC(),
    Si, Dy, bw = (Dy = class {
        constructor() {
            Q(this, Si, void 0)
        }
        destroy() {
            this.clearGcTimeout()
        }
        scheduleGc() {
            this.clearGcTimeout(), $d(this.gcTime) && $(this, Si, setTimeout(() => {
                this.optionalRemove()
            }, this.gcTime))
        }
        updateGcTime(e) {
            this.gcTime = Math.max(this.gcTime || 0, e ?? (qo ? 1 / 0 : 5 * 60 * 1e3))
        }
        clearGcTimeout() {
            C(this, Si) && (clearTimeout(C(this, Si)), $(this, Si, void 0))
        }
    }, Si = new WeakMap, Dy),
    Ro, _o, Jt, jr, Zt, nt, Sl, bi, Po, qa, gn, Yn, Ly, kC = (Ly = class extends bw {
        constructor(t) {
            super();
            Q(this, Po);
            Q(this, gn);
            Q(this, Ro, void 0);
            Q(this, _o, void 0);
            Q(this, Jt, void 0);
            Q(this, jr, void 0);
            Q(this, Zt, void 0);
            Q(this, nt, void 0);
            Q(this, Sl, void 0);
            Q(this, bi, void 0);
            $(this, bi, !1), $(this, Sl, t.defaultOptions), le(this, Po, qa).call(this, t.options), $(this, nt, []), $(this, Jt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, $(this, Ro, t.state || DC(this.options)), this.state = C(this, Ro), this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        optionalRemove() {
            !C(this, nt).length && this.state.fetchStatus === "idle" && C(this, Jt).remove(this)
        }
        setData(t, n) {
            const r = zd(this.state.data, t, this.options);
            return le(this, gn, Yn).call(this, {
                data: r,
                type: "success",
                dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                manual: n == null ? void 0 : n.manual
            }), r
        }
        setState(t, n) {
            le(this, gn, Yn).call(this, {
                type: "setState",
                state: t,
                setStateOptions: n
            })
        }
        cancel(t) {
            var r;
            const n = C(this, jr);
            return (r = C(this, Zt)) == null || r.cancel(t), n ? n.then(nn).catch(nn) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        reset() {
            this.destroy(), this.setState(C(this, Ro))
        }
        isActive() {
            return C(this, nt).some(t => t.options.enabled !== !1)
        }
        isDisabled() {
            return this.getObserversCount() > 0 && !this.isActive()
        }
        isStale() {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || C(this, nt).some(t => t.getCurrentResult().isStale)
        }
        isStaleByTime(t = 0) {
            return this.state.isInvalidated || !this.state.dataUpdatedAt || !vw(this.state.dataUpdatedAt, t)
        }
        onFocus() {
            var n;
            const t = C(this, nt).find(r => r.shouldFetchOnWindowFocus());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = C(this, Zt)) == null || n.continue()
        }
        onOnline() {
            var n;
            const t = C(this, nt).find(r => r.shouldFetchOnReconnect());
            t == null || t.refetch({
                cancelRefetch: !1
            }), (n = C(this, Zt)) == null || n.continue()
        }
        addObserver(t) {
            C(this, nt).includes(t) || (C(this, nt).push(t), this.clearGcTimeout(), C(this, Jt).notify({
                type: "observerAdded",
                query: this,
                observer: t
            }))
        }
        removeObserver(t) {
            C(this, nt).includes(t) && ($(this, nt, C(this, nt).filter(n => n !== t)), C(this, nt).length || (C(this, Zt) && (C(this, bi) ? C(this, Zt).cancel({
                revert: !0
            }) : C(this, Zt).cancelRetry()), this.scheduleGc()), C(this, Jt).notify({
                type: "observerRemoved",
                query: this,
                observer: t
            }))
        }
        getObserversCount() {
            return C(this, nt).length
        }
        invalidate() {
            this.state.isInvalidated || le(this, gn, Yn).call(this, {
                type: "invalidate"
            })
        }
        fetch(t, n) {
            var c, u, f, h;
            if (this.state.fetchStatus !== "idle") {
                if (this.state.dataUpdatedAt && (n != null && n.cancelRefetch)) this.cancel({
                    silent: !0
                });
                else if (C(this, jr)) return (c = C(this, Zt)) == null || c.continueRetry(), C(this, jr)
            }
            if (t && le(this, Po, qa).call(this, t), !this.options.queryFn) {
                const x = C(this, nt).find(y => y.options.queryFn);
                x && le(this, Po, qa).call(this, x.options)
            }
            const r = new AbortController,
                i = {
                    queryKey: this.queryKey,
                    meta: this.meta
                },
                o = x => {
                    Object.defineProperty(x, "signal", {
                        enumerable: !0,
                        get: () => ($(this, bi, !0), r.signal)
                    })
                };
            o(i);
            const s = () => this.options.queryFn ? ($(this, bi, !1), this.options.persister ? this.options.persister(this.options.queryFn, i, this) : this.options.queryFn(i)) : Promise.reject(new Error(`Missing queryFn: '${this.options.queryHash}'`)),
                l = {
                    fetchOptions: n,
                    options: this.options,
                    queryKey: this.queryKey,
                    state: this.state,
                    fetchFn: s
                };
            o(l), (u = this.options.behavior) == null || u.onFetch(l, this), $(this, _o, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((f = l.fetchOptions) == null ? void 0 : f.meta)) && le(this, gn, Yn).call(this, {
                type: "fetch",
                meta: (h = l.fetchOptions) == null ? void 0 : h.meta
            });
            const a = x => {
                var y, w, E, m;
                pf(x) && x.silent || le(this, gn, Yn).call(this, {
                    type: "error",
                    error: x
                }), pf(x) || ((w = (y = C(this, Jt).config).onError) == null || w.call(y, x, this), (m = (E = C(this, Jt).config).onSettled) == null || m.call(E, this.state.data, x, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
            };
            return $(this, Zt, Sw({
                fn: l.fetchFn,
                abort: r.abort.bind(r),
                onSuccess: x => {
                    var y, w, E, m;
                    if (typeof x > "u") {
                        a(new Error(`${this.queryHash} data is undefined`));
                        return
                    }
                    this.setData(x), (w = (y = C(this, Jt).config).onSuccess) == null || w.call(y, x, this), (m = (E = C(this, Jt).config).onSettled) == null || m.call(E, x, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                },
                onError: a,
                onFail: (x, y) => {
                    le(this, gn, Yn).call(this, {
                        type: "failed",
                        failureCount: x,
                        error: y
                    })
                },
                onPause: () => {
                    le(this, gn, Yn).call(this, {
                        type: "pause"
                    })
                },
                onContinue: () => {
                    le(this, gn, Yn).call(this, {
                        type: "continue"
                    })
                },
                retry: l.options.retry,
                retryDelay: l.options.retryDelay,
                networkMode: l.options.networkMode
            })), $(this, jr, C(this, Zt).promise), C(this, jr)
        }
    }, Ro = new WeakMap, _o = new WeakMap, Jt = new WeakMap, jr = new WeakMap, Zt = new WeakMap, nt = new WeakMap, Sl = new WeakMap, bi = new WeakMap, Po = new WeakSet, qa = function(t) {
        this.options = {
            ...C(this, Sl),
            ...t
        }, this.updateGcTime(this.options.gcTime)
    }, gn = new WeakSet, Yn = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return {
                        ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
                    };
                case "pause":
                    return {
                        ...r, fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...r, fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...r, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: t.meta ?? null, fetchStatus: fc(this.options.networkMode) ? "fetching" : "paused", ...!r.dataUpdatedAt && {
                            error: null,
                            status: "pending"
                        }
                    };
                case "success":
                    return {
                        ...r, data: t.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: t.dataUpdatedAt ?? Date.now(), error: null, isInvalidated: !1, status: "success", ...!t.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const i = t.error;
                    return pf(i) && i.revert && C(this, _o) ? {
                        ...C(this, _o),
                        fetchStatus: "idle"
                    } : {
                        ...r,
                        error: i,
                        errorUpdateCount: r.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: r.fetchFailureCount + 1,
                        fetchFailureReason: i,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...r, isInvalidated: !0
                    };
                case "setState":
                    return {
                        ...r, ...t.state
                    }
            }
        };
        this.state = n(this.state), ct.batch(() => {
            C(this, nt).forEach(r => {
                r.onQueryUpdate()
            }), C(this, Jt).notify({
                query: this,
                type: "updated",
                action: t
            })
        })
    }, Ly);

function DC(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = typeof t < "u",
        r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? r ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var jn, jy, LC = (jy = class extends zl {
        constructor(t = {}) {
            super();
            Q(this, jn, void 0);
            this.config = t, $(this, jn, new Map)
        }
        build(t, n, r) {
            const i = n.queryKey,
                o = n.queryHash ?? _p(i, n);
            let s = this.get(o);
            return s || (s = new kC({
                cache: this,
                queryKey: i,
                queryHash: o,
                options: t.defaultQueryOptions(n),
                state: r,
                defaultOptions: t.getQueryDefaults(i)
            }), this.add(s)), s
        }
        add(t) {
            C(this, jn).has(t.queryHash) || (C(this, jn).set(t.queryHash, t), this.notify({
                type: "added",
                query: t
            }))
        }
        remove(t) {
            const n = C(this, jn).get(t.queryHash);
            n && (t.destroy(), n === t && C(this, jn).delete(t.queryHash), this.notify({
                type: "removed",
                query: t
            }))
        }
        clear() {
            ct.batch(() => {
                this.getAll().forEach(t => {
                    this.remove(t)
                })
            })
        }
        get(t) {
            return C(this, jn).get(t)
        }
        getAll() {
            return [...C(this, jn).values()]
        }
        find(t) {
            const n = {
                exact: !0,
                ...t
            };
            return this.getAll().find(r => wg(n, r))
        }
        findAll(t = {}) {
            const n = this.getAll();
            return Object.keys(t).length > 0 ? n.filter(r => wg(t, r)) : n
        }
        notify(t) {
            ct.batch(() => {
                this.listeners.forEach(n => {
                    n(t)
                })
            })
        }
        onFocus() {
            ct.batch(() => {
                this.getAll().forEach(t => {
                    t.onFocus()
                })
            })
        }
        onOnline() {
            ct.batch(() => {
                this.getAll().forEach(t => {
                    t.onOnline()
                })
            })
        }
    }, jn = new WeakMap, jy),
    An, bl, zt, No, Mn, Rr, Ay, jC = (Ay = class extends bw {
        constructor(t) {
            super();
            Q(this, Mn);
            Q(this, An, void 0);
            Q(this, bl, void 0);
            Q(this, zt, void 0);
            Q(this, No, void 0);
            this.mutationId = t.mutationId, $(this, bl, t.defaultOptions), $(this, zt, t.mutationCache), $(this, An, []), this.state = t.state || AC(), this.setOptions(t.options), this.scheduleGc()
        }
        setOptions(t) {
            this.options = {
                ...C(this, bl),
                ...t
            }, this.updateGcTime(this.options.gcTime)
        }
        get meta() {
            return this.options.meta
        }
        addObserver(t) {
            C(this, An).includes(t) || (C(this, An).push(t), this.clearGcTimeout(), C(this, zt).notify({
                type: "observerAdded",
                mutation: this,
                observer: t
            }))
        }
        removeObserver(t) {
            $(this, An, C(this, An).filter(n => n !== t)), this.scheduleGc(), C(this, zt).notify({
                type: "observerRemoved",
                mutation: this,
                observer: t
            })
        }
        optionalRemove() {
            C(this, An).length || (this.state.status === "pending" ? this.scheduleGc() : C(this, zt).remove(this))
        }
        continue () {
            var t;
            return ((t = C(this, No)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables)
        }
        async execute(t) {
            var i, o, s, l, a, c, u, f, h, x, y, w, E, m, p, v, R, P, S, N;
            const n = () => ($(this, No, Sw({
                    fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
                    onFail: (D, M) => {
                        le(this, Mn, Rr).call(this, {
                            type: "failed",
                            failureCount: D,
                            error: M
                        })
                    },
                    onPause: () => {
                        le(this, Mn, Rr).call(this, {
                            type: "pause"
                        })
                    },
                    onContinue: () => {
                        le(this, Mn, Rr).call(this, {
                            type: "continue"
                        })
                    },
                    retry: this.options.retry ?? 0,
                    retryDelay: this.options.retryDelay,
                    networkMode: this.options.networkMode
                })), C(this, No).promise),
                r = this.state.status === "pending";
            try {
                if (!r) {
                    le(this, Mn, Rr).call(this, {
                        type: "pending",
                        variables: t
                    }), await ((o = (i = C(this, zt).config).onMutate) == null ? void 0 : o.call(i, t, this));
                    const M = await ((l = (s = this.options).onMutate) == null ? void 0 : l.call(s, t));
                    M !== this.state.context && le(this, Mn, Rr).call(this, {
                        type: "pending",
                        context: M,
                        variables: t
                    })
                }
                const D = await n();
                return await ((c = (a = C(this, zt).config).onSuccess) == null ? void 0 : c.call(a, D, t, this.state.context, this)), await ((f = (u = this.options).onSuccess) == null ? void 0 : f.call(u, D, t, this.state.context)), await ((x = (h = C(this, zt).config).onSettled) == null ? void 0 : x.call(h, D, null, this.state.variables, this.state.context, this)), await ((w = (y = this.options).onSettled) == null ? void 0 : w.call(y, D, null, t, this.state.context)), le(this, Mn, Rr).call(this, {
                    type: "success",
                    data: D
                }), D
            } catch (D) {
                try {
                    throw await ((m = (E = C(this, zt).config).onError) == null ? void 0 : m.call(E, D, t, this.state.context, this)), await ((v = (p = this.options).onError) == null ? void 0 : v.call(p, D, t, this.state.context)), await ((P = (R = C(this, zt).config).onSettled) == null ? void 0 : P.call(R, void 0, D, this.state.variables, this.state.context, this)), await ((N = (S = this.options).onSettled) == null ? void 0 : N.call(S, void 0, D, t, this.state.context)), D
                } finally {
                    le(this, Mn, Rr).call(this, {
                        type: "error",
                        error: D
                    })
                }
            }
        }
    }, An = new WeakMap, bl = new WeakMap, zt = new WeakMap, No = new WeakMap, Mn = new WeakSet, Rr = function(t) {
        const n = r => {
            switch (t.type) {
                case "failed":
                    return {
                        ...r, failureCount: t.failureCount, failureReason: t.error
                    };
                case "pause":
                    return {
                        ...r, isPaused: !0
                    };
                case "continue":
                    return {
                        ...r, isPaused: !1
                    };
                case "pending":
                    return {
                        ...r, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: !fc(this.options.networkMode), status: "pending", variables: t.variables, submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...r, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                    };
                case "error":
                    return {
                        ...r, data: void 0, error: t.error, failureCount: r.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
                    }
            }
        };
        this.state = n(this.state), ct.batch(() => {
            C(this, An).forEach(r => {
                r.onMutationUpdate(t)
            }), C(this, zt).notify({
                mutation: this,
                type: "updated",
                action: t
            })
        })
    }, Ay);

function AC() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var en, Cl, Ci, My, MC = (My = class extends zl {
    constructor(t = {}) {
        super();
        Q(this, en, void 0);
        Q(this, Cl, void 0);
        Q(this, Ci, void 0);
        this.config = t, $(this, en, []), $(this, Cl, 0)
    }
    build(t, n, r) {
        const i = new jC({
            mutationCache: this,
            mutationId: ++na(this, Cl)._,
            options: t.defaultMutationOptions(n),
            state: r
        });
        return this.add(i), i
    }
    add(t) {
        C(this, en).push(t), this.notify({
            type: "added",
            mutation: t
        })
    }
    remove(t) {
        $(this, en, C(this, en).filter(n => n !== t)), this.notify({
            type: "removed",
            mutation: t
        })
    }
    clear() {
        ct.batch(() => {
            C(this, en).forEach(t => {
                this.remove(t)
            })
        })
    }
    getAll() {
        return C(this, en)
    }
    find(t) {
        const n = {
            exact: !0,
            ...t
        };
        return C(this, en).find(r => xg(n, r))
    }
    findAll(t = {}) {
        return C(this, en).filter(n => xg(t, n))
    }
    notify(t) {
        ct.batch(() => {
            this.listeners.forEach(n => {
                n(t)
            })
        })
    }
    resumePausedMutations() {
        return $(this, Ci, (C(this, Ci) ?? Promise.resolve()).then(() => {
            const t = C(this, en).filter(n => n.state.isPaused);
            return ct.batch(() => t.reduce((n, r) => n.then(() => r.continue().catch(nn)), Promise.resolve()))
        }).then(() => {
            $(this, Ci, void 0)
        })), C(this, Ci)
    }
}, en = new WeakMap, Cl = new WeakMap, Ci = new WeakMap, My);

function Hd(e) {
    return {
        onFetch: (t, n) => {
            const r = async () => {
                var y, w, E, m, p;
                const i = t.options,
                    o = (E = (w = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : w.fetchMore) == null ? void 0 : E.direction,
                    s = ((m = t.state.data) == null ? void 0 : m.pages) || [],
                    l = ((p = t.state.data) == null ? void 0 : p.pageParams) || [],
                    a = {
                        pages: [],
                        pageParams: []
                    };
                let c = !1;
                const u = v => {
                        Object.defineProperty(v, "signal", {
                            enumerable: !0,
                            get: () => (t.signal.aborted ? c = !0 : t.signal.addEventListener("abort", () => {
                                c = !0
                            }), t.signal)
                        })
                    },
                    f = t.options.queryFn || (() => Promise.reject(new Error(`Missing queryFn: '${t.options.queryHash}'`))),
                    h = async (v, R, P) => {
                        if (c) return Promise.reject();
                        if (R == null && v.pages.length) return Promise.resolve(v);
                        const S = {
                            queryKey: t.queryKey,
                            pageParam: R,
                            direction: P ? "backward" : "forward",
                            meta: t.options.meta
                        };
                        u(S);
                        const N = await f(S),
                            {
                                maxPages: D
                            } = t.options,
                            M = P ? RC : TC;
                        return {
                            pages: M(v.pages, N, D),
                            pageParams: M(v.pageParams, R, D)
                        }
                    };
                let x;
                if (o && s.length) {
                    const v = o === "backward",
                        R = v ? Cw : Wd,
                        P = {
                            pages: s,
                            pageParams: l
                        },
                        S = R(i, P);
                    x = await h(P, S, v)
                } else {
                    x = await h(a, l[0] ?? i.initialPageParam);
                    const v = e ?? s.length;
                    for (let R = 1; R < v; R++) {
                        const P = Wd(i, x);
                        x = await h(x, P)
                    }
                }
                return x
            };
            t.options.persister ? t.fetchFn = () => {
                var i, o;
                return (o = (i = t.options).persister) == null ? void 0 : o.call(i, r, {
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal
                }, n)
            } : t.fetchFn = r
        }
    }
}

function Wd(e, {
    pages: t,
    pageParams: n
}) {
    const r = t.length - 1;
    return e.getNextPageParam(t[r], t, n[r], n)
}

function Cw(e, {
    pages: t,
    pageParams: n
}) {
    var r;
    return (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)
}

function IC(e, t) {
    return t ? Wd(e, t) != null : !1
}

function FC(e, t) {
    return !t || !e.getPreviousPageParam ? !1 : Cw(e, t) != null
}
var Xe, Ar, Mr, Oo, ko, Ir, Do, Lo, Iy, $C = (Iy = class {
        constructor(e = {}) {
            Q(this, Xe, void 0);
            Q(this, Ar, void 0);
            Q(this, Mr, void 0);
            Q(this, Oo, void 0);
            Q(this, ko, void 0);
            Q(this, Ir, void 0);
            Q(this, Do, void 0);
            Q(this, Lo, void 0);
            $(this, Xe, e.queryCache || new LC), $(this, Ar, e.mutationCache || new MC), $(this, Mr, e.defaultOptions || {}), $(this, Oo, new Map), $(this, ko, new Map), $(this, Ir, 0)
        }
        mount() {
            na(this, Ir)._++, C(this, Ir) === 1 && ($(this, Do, Ou.subscribe(() => {
                Ou.isFocused() && (this.resumePausedMutations(), C(this, Xe).onFocus())
            })), $(this, Lo, ku.subscribe(() => {
                ku.isOnline() && (this.resumePausedMutations(), C(this, Xe).onOnline())
            })))
        }
        unmount() {
            var e, t;
            na(this, Ir)._--, C(this, Ir) === 0 && ((e = C(this, Do)) == null || e.call(this), $(this, Do, void 0), (t = C(this, Lo)) == null || t.call(this), $(this, Lo, void 0))
        }
        isFetching(e) {
            return C(this, Xe).findAll({
                ...e,
                fetchStatus: "fetching"
            }).length
        }
        isMutating(e) {
            return C(this, Ar).findAll({
                ...e,
                status: "pending"
            }).length
        }
        getQueryData(e) {
            var t;
            return (t = C(this, Xe).find({
                queryKey: e
            })) == null ? void 0 : t.state.data
        }
        ensureQueryData(e) {
            const t = this.getQueryData(e.queryKey);
            return t ? Promise.resolve(t) : this.fetchQuery(e)
        }
        getQueriesData(e) {
            return this.getQueryCache().findAll(e).map(({
                queryKey: t,
                state: n
            }) => {
                const r = n.data;
                return [t, r]
            })
        }
        setQueryData(e, t, n) {
            const r = C(this, Xe).find({
                    queryKey: e
                }),
                i = r == null ? void 0 : r.state.data,
                o = CC(t, i);
            if (typeof o > "u") return;
            const s = this.defaultQueryOptions({
                queryKey: e
            });
            return C(this, Xe).build(this, s).setData(o, {
                ...n,
                manual: !0
            })
        }
        setQueriesData(e, t, n) {
            return ct.batch(() => this.getQueryCache().findAll(e).map(({
                queryKey: r
            }) => [r, this.setQueryData(r, t, n)]))
        }
        getQueryState(e) {
            var t;
            return (t = C(this, Xe).find({
                queryKey: e
            })) == null ? void 0 : t.state
        }
        removeQueries(e) {
            const t = C(this, Xe);
            ct.batch(() => {
                t.findAll(e).forEach(n => {
                    t.remove(n)
                })
            })
        }
        resetQueries(e, t) {
            const n = C(this, Xe),
                r = {
                    type: "active",
                    ...e
                };
            return ct.batch(() => (n.findAll(e).forEach(i => {
                i.reset()
            }), this.refetchQueries(r, t)))
        }
        cancelQueries(e = {}, t = {}) {
            const n = {
                    revert: !0,
                    ...t
                },
                r = ct.batch(() => C(this, Xe).findAll(e).map(i => i.cancel(n)));
            return Promise.all(r).then(nn).catch(nn)
        }
        invalidateQueries(e = {}, t = {}) {
            return ct.batch(() => {
                if (C(this, Xe).findAll(e).forEach(r => {
                        r.invalidate()
                    }), e.refetchType === "none") return Promise.resolve();
                const n = {
                    ...e,
                    type: e.refetchType ?? e.type ?? "active"
                };
                return this.refetchQueries(n, t)
            })
        }
        refetchQueries(e = {}, t) {
            const n = {
                    ...t,
                    cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
                },
                r = ct.batch(() => C(this, Xe).findAll(e).filter(i => !i.isDisabled()).map(i => {
                    let o = i.fetch(void 0, n);
                    return n.throwOnError || (o = o.catch(nn)), i.state.fetchStatus === "paused" ? Promise.resolve() : o
                }));
            return Promise.all(r).then(nn)
        }
        fetchQuery(e) {
            const t = this.defaultQueryOptions(e);
            typeof t.retry > "u" && (t.retry = !1);
            const n = C(this, Xe).build(this, t);
            return n.isStaleByTime(t.staleTime) ? n.fetch(t) : Promise.resolve(n.state.data)
        }
        prefetchQuery(e) {
            return this.fetchQuery(e).then(nn).catch(nn)
        }
        fetchInfiniteQuery(e) {
            return e.behavior = Hd(e.pages), this.fetchQuery(e)
        }
        prefetchInfiniteQuery(e) {
            return this.fetchInfiniteQuery(e).then(nn).catch(nn)
        }
        resumePausedMutations() {
            return C(this, Ar).resumePausedMutations()
        }
        getQueryCache() {
            return C(this, Xe)
        }
        getMutationCache() {
            return C(this, Ar)
        }
        getDefaultOptions() {
            return C(this, Mr)
        }
        setDefaultOptions(e) {
            $(this, Mr, e)
        }
        setQueryDefaults(e, t) {
            C(this, Oo).set(vl(e), {
                queryKey: e,
                defaultOptions: t
            })
        }
        getQueryDefaults(e) {
            const t = [...C(this, Oo).values()];
            let n = {};
            return t.forEach(r => {
                wl(e, r.queryKey) && (n = {
                    ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        setMutationDefaults(e, t) {
            C(this, ko).set(vl(e), {
                mutationKey: e,
                defaultOptions: t
            })
        }
        getMutationDefaults(e) {
            const t = [...C(this, ko).values()];
            let n = {};
            return t.forEach(r => {
                wl(e, r.mutationKey) && (n = {
                    ...n,
                    ...r.defaultOptions
                })
            }), n
        }
        defaultQueryOptions(e) {
            if (e != null && e._defaulted) return e;
            const t = {
                ...C(this, Mr).queries,
                ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
                ...e,
                _defaulted: !0
            };
            return t.queryHash || (t.queryHash = _p(t.queryKey, t)), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t
        }
        defaultMutationOptions(e) {
            return e != null && e._defaulted ? e : {
                ...C(this, Mr).mutations,
                ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
                ...e,
                _defaulted: !0
            }
        }
        clear() {
            C(this, Xe).clear(), C(this, Ar).clear()
        }
    }, Xe = new WeakMap, Ar = new WeakMap, Mr = new WeakMap, Oo = new WeakMap, ko = new WeakMap, Ir = new WeakMap, Do = new WeakMap, Lo = new WeakMap, Iy),
    Lt, Ce, jo, vt, Ti, Ao, In, Tl, Mo, Io, Ri, _i, Fr, Pi, Ni, Is, Rl, Vd, _l, qd, Pl, Qd, Nl, Kd, Ol, Gd, kl, Yd, Dl, Xd, Wu, Rw, Fy, Tw = (Fy = class extends zl {
        constructor(t, n) {
            super();
            Q(this, Ni);
            Q(this, Rl);
            Q(this, _l);
            Q(this, Pl);
            Q(this, Nl);
            Q(this, Ol);
            Q(this, kl);
            Q(this, Dl);
            Q(this, Wu);
            Q(this, Lt, void 0);
            Q(this, Ce, void 0);
            Q(this, jo, void 0);
            Q(this, vt, void 0);
            Q(this, Ti, void 0);
            Q(this, Ao, void 0);
            Q(this, In, void 0);
            Q(this, Tl, void 0);
            Q(this, Mo, void 0);
            Q(this, Io, void 0);
            Q(this, Ri, void 0);
            Q(this, _i, void 0);
            Q(this, Fr, void 0);
            Q(this, Pi, void 0);
            $(this, Ce, void 0), $(this, jo, void 0), $(this, vt, void 0), $(this, Pi, new Set), $(this, Lt, t), this.options = n, $(this, In, null), this.bindMethods(), this.setOptions(n)
        }
        bindMethods() {
            this.refetch = this.refetch.bind(this)
        }
        onSubscribe() {
            this.listeners.size === 1 && (C(this, Ce).addObserver(this), Cg(C(this, Ce), this.options) && le(this, Ni, Is).call(this), le(this, Nl, Kd).call(this))
        }
        onUnsubscribe() {
            this.hasListeners() || this.destroy()
        }
        shouldFetchOnReconnect() {
            return Jd(C(this, Ce), this.options, this.options.refetchOnReconnect)
        }
        shouldFetchOnWindowFocus() {
            return Jd(C(this, Ce), this.options, this.options.refetchOnWindowFocus)
        }
        destroy() {
            this.listeners = new Set, le(this, Ol, Gd).call(this), le(this, kl, Yd).call(this), C(this, Ce).removeObserver(this)
        }
        setOptions(t, n) {
            const r = this.options,
                i = C(this, Ce);
            if (this.options = C(this, Lt).defaultQueryOptions(t), Ud(r, this.options) || C(this, Lt).getQueryCache().notify({
                    type: "observerOptionsUpdated",
                    query: C(this, Ce),
                    observer: this
                }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean") throw new Error("Expected enabled to be a boolean");
            this.options.queryKey || (this.options.queryKey = r.queryKey), le(this, Dl, Xd).call(this);
            const o = this.hasListeners();
            o && Tg(C(this, Ce), i, this.options, r) && le(this, Ni, Is).call(this), this.updateResult(n), o && (C(this, Ce) !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && le(this, Rl, Vd).call(this);
            const s = le(this, _l, qd).call(this);
            o && (C(this, Ce) !== i || this.options.enabled !== r.enabled || s !== C(this, Fr)) && le(this, Pl, Qd).call(this, s)
        }
        getOptimisticResult(t) {
            const n = C(this, Lt).getQueryCache().build(C(this, Lt), t),
                r = this.createResult(n, t);
            return BC(this, r) && ($(this, vt, r), $(this, Ao, this.options), $(this, Ti, C(this, Ce).state)), r
        }
        getCurrentResult() {
            return C(this, vt)
        }
        trackResult(t) {
            const n = {};
            return Object.keys(t).forEach(r => {
                Object.defineProperty(n, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: () => (C(this, Pi).add(r), t[r])
                })
            }), n
        }
        getCurrentQuery() {
            return C(this, Ce)
        }
        refetch({
            ...t
        } = {}) {
            return this.fetch({
                ...t
            })
        }
        fetchOptimistic(t) {
            const n = C(this, Lt).defaultQueryOptions(t),
                r = C(this, Lt).getQueryCache().build(C(this, Lt), n);
            return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n))
        }
        fetch(t) {
            return le(this, Ni, Is).call(this, {
                ...t,
                cancelRefetch: t.cancelRefetch ?? !0
            }).then(() => (this.updateResult(), C(this, vt)))
        }
        createResult(t, n) {
            var S;
            const r = C(this, Ce),
                i = this.options,
                o = C(this, vt),
                s = C(this, Ti),
                l = C(this, Ao),
                c = t !== r ? t.state : C(this, jo),
                {
                    state: u
                } = t;
            let {
                error: f,
                errorUpdatedAt: h,
                fetchStatus: x,
                status: y
            } = u, w = !1, E;
            if (n._optimisticResults) {
                const N = this.hasListeners(),
                    D = !N && Cg(t, n),
                    M = N && Tg(t, r, n, i);
                (D || M) && (x = fc(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (y = "pending")), n._optimisticResults === "isRestoring" && (x = "idle")
            }
            if (n.select && typeof u.data < "u")
                if (o && u.data === (s == null ? void 0 : s.data) && n.select === C(this, Tl)) E = C(this, Mo);
                else try {
                    $(this, Tl, n.select), E = n.select(u.data), E = zd(o == null ? void 0 : o.data, E, n), $(this, Mo, E), $(this, In, null)
                } catch (N) {
                    $(this, In, N)
                } else E = u.data;
            if (typeof n.placeholderData < "u" && typeof E > "u" && y === "pending") {
                let N;
                if (o != null && o.isPlaceholderData && n.placeholderData === (l == null ? void 0 : l.placeholderData)) N = o.data;
                else if (N = typeof n.placeholderData == "function" ? n.placeholderData((S = C(this, Io)) == null ? void 0 : S.state.data, C(this, Io)) : n.placeholderData, n.select && typeof N < "u") try {
                    N = n.select(N), $(this, In, null)
                } catch (D) {
                    $(this, In, D)
                }
                typeof N < "u" && (y = "success", E = zd(o == null ? void 0 : o.data, N, n), w = !0)
            }
            C(this, In) && (f = C(this, In), E = C(this, Mo), h = Date.now(), y = "error");
            const m = x === "fetching",
                p = y === "pending",
                v = y === "error",
                R = p && m;
            return {
                status: y,
                fetchStatus: x,
                isPending: p,
                isSuccess: y === "success",
                isError: v,
                isInitialLoading: R,
                isLoading: R,
                data: E,
                dataUpdatedAt: u.dataUpdatedAt,
                error: f,
                errorUpdatedAt: h,
                failureCount: u.fetchFailureCount,
                failureReason: u.fetchFailureReason,
                errorUpdateCount: u.errorUpdateCount,
                isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
                isFetchedAfterMount: u.dataUpdateCount > c.dataUpdateCount || u.errorUpdateCount > c.errorUpdateCount,
                isFetching: m,
                isRefetching: m && !p,
                isLoadingError: v && u.dataUpdatedAt === 0,
                isPaused: x === "paused",
                isPlaceholderData: w,
                isRefetchError: v && u.dataUpdatedAt !== 0,
                isStale: Pp(t, n),
                refetch: this.refetch
            }
        }
        updateResult(t) {
            const n = C(this, vt),
                r = this.createResult(C(this, Ce), this.options);
            if ($(this, Ti, C(this, Ce).state), $(this, Ao, this.options), Ud(r, n)) return;
            C(this, Ti).data !== void 0 && $(this, Io, C(this, Ce)), $(this, vt, r);
            const i = {},
                o = () => {
                    if (!n) return !0;
                    const {
                        notifyOnChangeProps: s
                    } = this.options, l = typeof s == "function" ? s() : s;
                    if (l === "all" || !l && !C(this, Pi).size) return !0;
                    const a = new Set(l ?? C(this, Pi));
                    return this.options.throwOnError && a.add("error"), Object.keys(C(this, vt)).some(c => {
                        const u = c;
                        return C(this, vt)[u] !== n[u] && a.has(u)
                    })
                };
            (t == null ? void 0 : t.listeners) !== !1 && o() && (i.listeners = !0), le(this, Wu, Rw).call(this, {
                ...i,
                ...t
            })
        }
        onQueryUpdate() {
            this.updateResult(), this.hasListeners() && le(this, Nl, Kd).call(this)
        }
    }, Lt = new WeakMap, Ce = new WeakMap, jo = new WeakMap, vt = new WeakMap, Ti = new WeakMap, Ao = new WeakMap, In = new WeakMap, Tl = new WeakMap, Mo = new WeakMap, Io = new WeakMap, Ri = new WeakMap, _i = new WeakMap, Fr = new WeakMap, Pi = new WeakMap, Ni = new WeakSet, Is = function(t) {
        le(this, Dl, Xd).call(this);
        let n = C(this, Ce).fetch(this.options, t);
        return t != null && t.throwOnError || (n = n.catch(nn)), n
    }, Rl = new WeakSet, Vd = function() {
        if (le(this, Ol, Gd).call(this), qo || C(this, vt).isStale || !$d(this.options.staleTime)) return;
        const n = vw(C(this, vt).dataUpdatedAt, this.options.staleTime) + 1;
        $(this, Ri, setTimeout(() => {
            C(this, vt).isStale || this.updateResult()
        }, n))
    }, _l = new WeakSet, qd = function() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(C(this, Ce)) : this.options.refetchInterval) ?? !1
    }, Pl = new WeakSet, Qd = function(t) {
        le(this, kl, Yd).call(this), $(this, Fr, t), !(qo || this.options.enabled === !1 || !$d(C(this, Fr)) || C(this, Fr) === 0) && $(this, _i, setInterval(() => {
            (this.options.refetchIntervalInBackground || Ou.isFocused()) && le(this, Ni, Is).call(this)
        }, C(this, Fr)))
    }, Nl = new WeakSet, Kd = function() {
        le(this, Rl, Vd).call(this), le(this, Pl, Qd).call(this, le(this, _l, qd).call(this))
    }, Ol = new WeakSet, Gd = function() {
        C(this, Ri) && (clearTimeout(C(this, Ri)), $(this, Ri, void 0))
    }, kl = new WeakSet, Yd = function() {
        C(this, _i) && (clearInterval(C(this, _i)), $(this, _i, void 0))
    }, Dl = new WeakSet, Xd = function() {
        const t = C(this, Lt).getQueryCache().build(C(this, Lt), this.options);
        if (t === C(this, Ce)) return;
        const n = C(this, Ce);
        $(this, Ce, t), $(this, jo, t.state), this.hasListeners() && (n == null || n.removeObserver(this), t.addObserver(this))
    }, Wu = new WeakSet, Rw = function(t) {
        ct.batch(() => {
            t.listeners && this.listeners.forEach(n => {
                n(C(this, vt))
            }), C(this, Lt).getQueryCache().notify({
                query: C(this, Ce),
                type: "observerResultsUpdated"
            })
        })
    }, Fy);

function UC(e, t) {
    return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1)
}

function Cg(e, t) {
    return UC(e, t) || e.state.dataUpdatedAt > 0 && Jd(e, t, t.refetchOnMount)
}

function Jd(e, t, n) {
    if (t.enabled !== !1) {
        const r = typeof n == "function" ? n(e) : n;
        return r === "always" || r !== !1 && Pp(e, t)
    }
    return !1
}

function Tg(e, t, n, r) {
    return n.enabled !== !1 && (e !== t || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Pp(e, n)
}

function Pp(e, t) {
    return e.isStaleByTime(t.staleTime)
}

function BC(e, t) {
    return !Ud(e.getCurrentResult(), t)
}
var zC = class extends Tw {
        constructor(e, t) {
            super(e, t)
        }
        bindMethods() {
            super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
        }
        setOptions(e, t) {
            super.setOptions({
                ...e,
                behavior: Hd()
            }, t)
        }
        getOptimisticResult(e) {
            return e.behavior = Hd(), super.getOptimisticResult(e)
        }
        fetchNextPage(e) {
            return this.fetch({
                ...e,
                meta: {
                    fetchMore: {
                        direction: "forward"
                    }
                }
            })
        }
        fetchPreviousPage(e) {
            return this.fetch({
                ...e,
                meta: {
                    fetchMore: {
                        direction: "backward"
                    }
                }
            })
        }
        createResult(e, t) {
            var a, c, u, f;
            const {
                state: n
            } = e, r = super.createResult(e, t), {
                isFetching: i,
                isRefetching: o
            } = r, s = i && ((c = (a = n.fetchMeta) == null ? void 0 : a.fetchMore) == null ? void 0 : c.direction) === "forward", l = i && ((f = (u = n.fetchMeta) == null ? void 0 : u.fetchMore) == null ? void 0 : f.direction) === "backward";
            return {
                ...r,
                fetchNextPage: this.fetchNextPage,
                fetchPreviousPage: this.fetchPreviousPage,
                hasNextPage: IC(t, n.data),
                hasPreviousPage: FC(t, n.data),
                isFetchingNextPage: s,
                isFetchingPreviousPage: l,
                isRefetching: o && !s && !l
            }
        }
    },
    _w = g.createContext(void 0),
    HC = e => {
        const t = g.useContext(_w);
        if (e) return e;
        if (!t) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return t
    },
    WC = ({
        client: e,
        children: t
    }) => (g.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), g.createElement(_w.Provider, {
        value: e
    }, t)),
    Pw = g.createContext(!1),
    VC = () => g.useContext(Pw);
Pw.Provider;

function qC() {
    let e = !1;
    return {
        clearReset: () => {
            e = !1
        },
        reset: () => {
            e = !0
        },
        isReset: () => e
    }
}
var QC = g.createContext(qC()),
    KC = () => g.useContext(QC);

function GC(e, t) {
    return typeof e == "function" ? e(...t) : !!e
}
var YC = (e, t) => {
        (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1))
    },
    XC = e => {
        g.useEffect(() => {
            e.clearReset()
        }, [e])
    },
    JC = ({
        result: e,
        errorResetBoundary: t,
        throwOnError: n,
        query: r
    }) => e.isError && !t.isReset() && !e.isFetching && GC(n, [e.error, r]),
    ZC = e => {
        e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3)
    },
    eT = (e, t) => e.isLoading && e.isFetching && !t,
    tT = (e, t, n) => (e == null ? void 0 : e.suspense) && eT(t, n),
    nT = (e, t, n) => t.fetchOptimistic(e).catch(() => {
        n.clearReset()
    });

function Nw(e, t, n) {
    const r = HC(n),
        i = VC(),
        o = KC(),
        s = r.defaultQueryOptions(e);
    s._optimisticResults = i ? "isRestoring" : "optimistic", ZC(s), YC(s, o), XC(o);
    const [l] = g.useState(() => new t(r, s)), a = l.getOptimisticResult(s);
    if (g.useSyncExternalStore(g.useCallback(c => {
            const u = i ? () => {} : l.subscribe(ct.batchCalls(c));
            return l.updateResult(), u
        }, [l, i]), () => l.getCurrentResult(), () => l.getCurrentResult()), g.useEffect(() => {
            l.setOptions(s, {
                listeners: !1
            })
        }, [s, l]), tT(s, a, i)) throw nT(s, l, o);
    if (JC({
            result: a,
            errorResetBoundary: o,
            throwOnError: s.throwOnError,
            query: l.getCurrentQuery()
        })) throw a.error;
    return s.notifyOnChangeProps ? a : l.trackResult(a)
}

function li(e, t) {
    return Nw(e, Tw, t)
}

function rT(e, t) {
    return Nw(e, zC, t)
}

function Ow(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++) e[t] && (n = Ow(e[t])) && (r && (r += " "), r += n);
        else
            for (t in e) e[t] && (r && (r += " "), r += t);
    return r
}

function Re() {
    for (var e, t, n = 0, r = ""; n < arguments.length;)(e = arguments[n++]) && (t = Ow(e)) && (r && (r += " "), r += t);
    return r
}
const iT = L.forwardRef(function({
        className: e,
        children: t
    }, n) {
        return d.jsx("div", {
            ref: n,
            className: Re("container mx-auto max-w-5xl", e),
            children: t
        })
    }),
    Tn = L.memo(iT);

function oT({
    name: e,
    children: t,
    className: n,
    type: r = "button",
    url: i,
    icon: o,
    onClick: s,
    iconAlign: l = "start"
}) {
    const a = g.useMemo(() => Re("c-button", "", n), [n]);

    function c() {
        return o ? d.jsxs("div", {
            className: "flex items-center gap-2",
            children: [l === "start" && d.jsx("div", {
                children: o
            }), d.jsx("div", {
                className: "flex-1",
                children: t
            }), l === "end" && d.jsx("div", {
                children: o
            })]
        }) : t
    }
    return i != null && i.includes("http") ? d.jsx("a", {
        href: i,
        className: a,
        children: c()
    }) : i ? d.jsx(Ot, {
        to: i,
        className: a,
        children: c()
    }) : d.jsx("button", {
        onClick: s,
        name: e,
        type: r,
        className: a,
        children: c()
    })
}
const Du = L.memo(oT),
    Rg = e => {
        let t;
        const n = new Set,
            r = (a, c) => {
                const u = typeof a == "function" ? a(t) : a;
                if (!Object.is(u, t)) {
                    const f = t;
                    t = c ?? typeof u != "object" ? u : Object.assign({}, t, u), n.forEach(h => h(t, f))
                }
            },
            i = () => t,
            l = {
                setState: r,
                getState: i,
                subscribe: a => (n.add(a), () => n.delete(a)),
                destroy: () => {
                    n.clear()
                }
            };
        return t = e(r, i, l), l
    },
    sT = e => e ? Rg(e) : Rg,
    fi = {
        app: {
            name: "rbt",
            author: "annuplay@proton.me",
            github: "https://github.com/"
        },
        blogger: {
            apiUrl: "https://www.googleapis.com/blogger/v3"
        }
    },
    Zo = {
        blog: e => `${fi.blogger.apiUrl}/blogs/${e}`,
        posts: e => `${fi.blogger.apiUrl}/blogs/${e}/posts`,
        post: (e, t) => `${fi.blogger.apiUrl}/blogs/${t}/posts/${e}`,
        searchPosts: e => `${fi.blogger.apiUrl}/blogs/${e}/posts/search`,
        pages: e => `${fi.blogger.apiUrl}/blogs/${e}/pages`,
        users: e => `${fi.blogger.apiUrl}/blogs/${e}/users`,
        comments: (e, t) => `${fi.blogger.apiUrl}/blogs/${e}/posts/${t}/comments`
    };

function kw(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: lT
} = Object.prototype, {
    getPrototypeOf: Np
} = Object, dc = (e => t => {
    const n = lT.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
})(Object.create(null)), Vn = e => (e = e.toLowerCase(), t => dc(t) === e), hc = e => t => typeof t === e, {
    isArray: es
} = Array, xl = hc("undefined");

function aT(e) {
    return e !== null && !xl(e) && e.constructor !== null && !xl(e.constructor) && an(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Dw = Vn("ArrayBuffer");

function uT(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Dw(e.buffer), t
}
const cT = hc("string"),
    an = hc("function"),
    Lw = hc("number"),
    pc = e => e !== null && typeof e == "object",
    fT = e => e === !0 || e === !1,
    Qa = e => {
        if (dc(e) !== "object") return !1;
        const t = Np(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    dT = Vn("Date"),
    hT = Vn("File"),
    pT = Vn("Blob"),
    mT = Vn("FileList"),
    gT = e => pc(e) && an(e.pipe),
    yT = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || an(e.append) && ((t = dc(e)) === "formdata" || t === "object" && an(e.toString) && e.toString() === "[object FormData]"))
    },
    vT = Vn("URLSearchParams"),
    wT = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function Hl(e, t, {
    allOwnKeys: n = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let r, i;
    if (typeof e != "object" && (e = [e]), es(e))
        for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            s = o.length;
        let l;
        for (r = 0; r < s; r++) l = o[r], t.call(null, e[l], l, e)
    }
}

function jw(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        i;
    for (; r-- > 0;)
        if (i = n[r], t === i.toLowerCase()) return i;
    return null
}
const Aw = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Mw = e => !xl(e) && e !== Aw;

function Zd() {
    const {
        caseless: e
    } = Mw(this) && this || {}, t = {}, n = (r, i) => {
        const o = e && jw(t, i) || i;
        Qa(t[o]) && Qa(r) ? t[o] = Zd(t[o], r) : Qa(r) ? t[o] = Zd({}, r) : es(r) ? t[o] = r.slice() : t[o] = r
    };
    for (let r = 0, i = arguments.length; r < i; r++) arguments[r] && Hl(arguments[r], n);
    return t
}
const xT = (e, t, n, {
        allOwnKeys: r
    } = {}) => (Hl(t, (i, o) => {
        n && an(i) ? e[o] = kw(i, n) : e[o] = i
    }, {
        allOwnKeys: r
    }), e),
    ET = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    ST = (e, t, n, r) => {
        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), n && Object.assign(e.prototype, n)
    },
    bT = (e, t, n, r) => {
        let i, o, s;
        const l = {};
        if (t = t || {}, e == null) return t;
        do {
            for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) s = i[o], (!r || r(s, e, t)) && !l[s] && (t[s] = e[s], l[s] = !0);
            e = n !== !1 && Np(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t
    },
    CT = (e, t, n) => {
        e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
        const r = e.indexOf(t, n);
        return r !== -1 && r === n
    },
    TT = e => {
        if (!e) return null;
        if (es(e)) return e;
        let t = e.length;
        if (!Lw(t)) return null;
        const n = new Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n
    },
    RT = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Np(Uint8Array)),
    _T = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let i;
        for (;
            (i = r.next()) && !i.done;) {
            const o = i.value;
            t.call(e, o[0], o[1])
        }
    },
    PT = (e, t) => {
        let n;
        const r = [];
        for (;
            (n = e.exec(t)) !== null;) r.push(n);
        return r
    },
    NT = Vn("HTMLFormElement"),
    OT = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(n, r, i) {
        return r.toUpperCase() + i
    }),
    _g = (({
        hasOwnProperty: e
    }) => (t, n) => e.call(t, n))(Object.prototype),
    kT = Vn("RegExp"),
    Iw = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        Hl(n, (i, o) => {
            let s;
            (s = t(i, o, e)) !== !1 && (r[o] = s || i)
        }), Object.defineProperties(e, r)
    },
    DT = e => {
        Iw(e, (t, n) => {
            if (an(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1) return !1;
            const r = e[n];
            if (an(r)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + n + "'")
                })
            }
        })
    },
    LT = (e, t) => {
        const n = {},
            r = i => {
                i.forEach(o => {
                    n[o] = !0
                })
            };
        return es(e) ? r(e) : r(String(e).split(t)), n
    },
    jT = () => {},
    AT = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    mf = "abcdefghijklmnopqrstuvwxyz",
    Pg = "0123456789",
    Fw = {
        DIGIT: Pg,
        ALPHA: mf,
        ALPHA_DIGIT: mf + mf.toUpperCase() + Pg
    },
    MT = (e = 16, t = Fw.ALPHA_DIGIT) => {
        let n = "";
        const {
            length: r
        } = t;
        for (; e--;) n += t[Math.random() * r | 0];
        return n
    };

function IT(e) {
    return !!(e && an(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const FT = e => {
        const t = new Array(10),
            n = (r, i) => {
                if (pc(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!("toJSON" in r)) {
                        t[i] = r;
                        const o = es(r) ? [] : {};
                        return Hl(r, (s, l) => {
                            const a = n(s, i + 1);
                            !xl(a) && (o[l] = a)
                        }), t[i] = void 0, o
                    }
                }
                return r
            };
        return n(e, 0)
    },
    $T = Vn("AsyncFunction"),
    UT = e => e && (pc(e) || an(e)) && an(e.then) && an(e.catch),
    k = {
        isArray: es,
        isArrayBuffer: Dw,
        isBuffer: aT,
        isFormData: yT,
        isArrayBufferView: uT,
        isString: cT,
        isNumber: Lw,
        isBoolean: fT,
        isObject: pc,
        isPlainObject: Qa,
        isUndefined: xl,
        isDate: dT,
        isFile: hT,
        isBlob: pT,
        isRegExp: kT,
        isFunction: an,
        isStream: gT,
        isURLSearchParams: vT,
        isTypedArray: RT,
        isFileList: mT,
        forEach: Hl,
        merge: Zd,
        extend: xT,
        trim: wT,
        stripBOM: ET,
        inherits: ST,
        toFlatObject: bT,
        kindOf: dc,
        kindOfTest: Vn,
        endsWith: CT,
        toArray: TT,
        forEachEntry: _T,
        matchAll: PT,
        isHTMLForm: NT,
        hasOwnProperty: _g,
        hasOwnProp: _g,
        reduceDescriptors: Iw,
        freezeMethods: DT,
        toObjectSet: LT,
        toCamelCase: OT,
        noop: jT,
        toFiniteNumber: AT,
        findKey: jw,
        global: Aw,
        isContextDefined: Mw,
        ALPHABET: Fw,
        generateString: MT,
        isSpecCompliantForm: IT,
        toJSONObject: FT,
        isAsyncFn: $T,
        isThenable: UT
    };

function he(e, t, n, r, i) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
}
k.inherits(he, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: k.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const $w = he.prototype,
    Uw = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    Uw[e] = {
        value: e
    }
});
Object.defineProperties(he, Uw);
Object.defineProperty($w, "isAxiosError", {
    value: !0
});
he.from = (e, t, n, r, i, o) => {
    const s = Object.create($w);
    return k.toFlatObject(e, s, function(a) {
        return a !== Error.prototype
    }, l => l !== "isAxiosError"), he.call(s, e.message, t, n, r, i), s.cause = e, s.name = e.name, o && Object.assign(s, o), s
};
const BT = null;

function eh(e) {
    return k.isPlainObject(e) || k.isArray(e)
}

function Bw(e) {
    return k.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function Ng(e, t, n) {
    return e ? e.concat(t).map(function(i, o) {
        return i = Bw(i), !n && o ? "[" + i + "]" : i
    }).join(n ? "." : "") : t
}

function zT(e) {
    return k.isArray(e) && !e.some(eh)
}
const HT = k.toFlatObject(k, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function mc(e, t, n) {
    if (!k.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, n = k.toFlatObject(n, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(w, E) {
        return !k.isUndefined(E[w])
    });
    const r = n.metaTokens,
        i = n.visitor || u,
        o = n.dots,
        s = n.indexes,
        a = (n.Blob || typeof Blob < "u" && Blob) && k.isSpecCompliantForm(t);
    if (!k.isFunction(i)) throw new TypeError("visitor must be a function");

    function c(y) {
        if (y === null) return "";
        if (k.isDate(y)) return y.toISOString();
        if (!a && k.isBlob(y)) throw new he("Blob is not supported. Use a Buffer instead.");
        return k.isArrayBuffer(y) || k.isTypedArray(y) ? a && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y
    }

    function u(y, w, E) {
        let m = y;
        if (y && !E && typeof y == "object") {
            if (k.endsWith(w, "{}")) w = r ? w : w.slice(0, -2), y = JSON.stringify(y);
            else if (k.isArray(y) && zT(y) || (k.isFileList(y) || k.endsWith(w, "[]")) && (m = k.toArray(y))) return w = Bw(w), m.forEach(function(v, R) {
                !(k.isUndefined(v) || v === null) && t.append(s === !0 ? Ng([w], R, o) : s === null ? w : w + "[]", c(v))
            }), !1
        }
        return eh(y) ? !0 : (t.append(Ng(E, w, o), c(y)), !1)
    }
    const f = [],
        h = Object.assign(HT, {
            defaultVisitor: u,
            convertValue: c,
            isVisitable: eh
        });

    function x(y, w) {
        if (!k.isUndefined(y)) {
            if (f.indexOf(y) !== -1) throw Error("Circular reference detected in " + w.join("."));
            f.push(y), k.forEach(y, function(m, p) {
                (!(k.isUndefined(m) || m === null) && i.call(t, m, k.isString(p) ? p.trim() : p, w, h)) === !0 && x(m, w ? w.concat(p) : [p])
            }), f.pop()
        }
    }
    if (!k.isObject(e)) throw new TypeError("data must be an object");
    return x(e), t
}

function Og(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
        return t[r]
    })
}

function Op(e, t) {
    this._pairs = [], e && mc(e, this, t)
}
const zw = Op.prototype;
zw.append = function(t, n) {
    this._pairs.push([t, n])
};
zw.toString = function(t) {
    const n = t ? function(r) {
        return t.call(this, r, Og)
    } : Og;
    return this._pairs.map(function(i) {
        return n(i[0]) + "=" + n(i[1])
    }, "").join("&")
};

function WT(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function Hw(e, t, n) {
    if (!t) return e;
    const r = n && n.encode || WT,
        i = n && n.serialize;
    let o;
    if (i ? o = i(t, n) : o = k.isURLSearchParams(t) ? t.toString() : new Op(t, n).toString(r), o) {
        const s = e.indexOf("#");
        s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + o
    }
    return e
}
class VT {
    constructor() {
        this.handlers = []
    }
    use(t, n, r) {
        return this.handlers.push({
            fulfilled: t,
            rejected: n,
            synchronous: r ? r.synchronous : !1,
            runWhen: r ? r.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        k.forEach(this.handlers, function(r) {
            r !== null && t(r)
        })
    }
}
const kg = VT,
    Ww = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    qT = typeof URLSearchParams < "u" ? URLSearchParams : Op,
    QT = typeof FormData < "u" ? FormData : null,
    KT = typeof Blob < "u" ? Blob : null,
    GT = (() => {
        let e;
        return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"
    })(),
    YT = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    $n = {
        isBrowser: !0,
        classes: {
            URLSearchParams: qT,
            FormData: QT,
            Blob: KT
        },
        isStandardBrowserEnv: GT,
        isStandardBrowserWebWorkerEnv: YT,
        protocols: ["http", "https", "file", "blob", "url", "data"]
    };

function XT(e, t) {
    return mc(e, new $n.classes.URLSearchParams, Object.assign({
        visitor: function(n, r, i, o) {
            return $n.isNode && k.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function JT(e) {
    return k.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function ZT(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const i = n.length;
    let o;
    for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
    return t
}

function Vw(e) {
    function t(n, r, i, o) {
        let s = n[o++];
        const l = Number.isFinite(+s),
            a = o >= n.length;
        return s = !s && k.isArray(i) ? i.length : s, a ? (k.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !l) : ((!i[s] || !k.isObject(i[s])) && (i[s] = []), t(n, r, i[s], o) && k.isArray(i[s]) && (i[s] = ZT(i[s])), !l)
    }
    if (k.isFormData(e) && k.isFunction(e.entries)) {
        const n = {};
        return k.forEachEntry(e, (r, i) => {
            t(JT(r), i, n, 0)
        }), n
    }
    return null
}

function eR(e, t, n) {
    if (k.isString(e)) try {
        return (t || JSON.parse)(e), k.trim(e)
    } catch (r) {
        if (r.name !== "SyntaxError") throw r
    }
    return (n || JSON.stringify)(e)
}
const kp = {
    transitional: Ww,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, n) {
        const r = n.getContentType() || "",
            i = r.indexOf("application/json") > -1,
            o = k.isObject(t);
        if (o && k.isHTMLForm(t) && (t = new FormData(t)), k.isFormData(t)) return i && i ? JSON.stringify(Vw(t)) : t;
        if (k.isArrayBuffer(t) || k.isBuffer(t) || k.isStream(t) || k.isFile(t) || k.isBlob(t)) return t;
        if (k.isArrayBufferView(t)) return t.buffer;
        if (k.isURLSearchParams(t)) return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let l;
        if (o) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1) return XT(t, this.formSerializer).toString();
            if ((l = k.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
                const a = this.env && this.env.FormData;
                return mc(l ? {
                    "files[]": t
                } : t, a && new a, this.formSerializer)
            }
        }
        return o || i ? (n.setContentType("application/json", !1), eR(t)) : t
    }],
    transformResponse: [function(t) {
        const n = this.transitional || kp.transitional,
            r = n && n.forcedJSONParsing,
            i = this.responseType === "json";
        if (t && k.isString(t) && (r && !this.responseType || i)) {
            const s = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(t)
            } catch (l) {
                if (s) throw l.name === "SyntaxError" ? he.from(l, he.ERR_BAD_RESPONSE, this, null, this.response) : l
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: $n.classes.FormData,
        Blob: $n.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
k.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    kp.headers[e] = {}
});
const Dp = kp,
    tR = k.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    nR = e => {
        const t = {};
        let n, r, i;
        return e && e.split(`
`).forEach(function(s) {
            i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || t[n] && tR[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
        }), t
    },
    Dg = Symbol("internals");

function bs(e) {
    return e && String(e).trim().toLowerCase()
}

function Ka(e) {
    return e === !1 || e == null ? e : k.isArray(e) ? e.map(Ka) : String(e)
}

function rR(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; r = n.exec(e);) t[r[1]] = r[2];
    return t
}
const iR = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function gf(e, t, n, r, i) {
    if (k.isFunction(r)) return r.call(this, t, n);
    if (i && (t = n), !!k.isString(t)) {
        if (k.isString(r)) return t.indexOf(r) !== -1;
        if (k.isRegExp(r)) return r.test(t)
    }
}

function oR(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r)
}

function sR(e, t) {
    const n = k.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(r => {
        Object.defineProperty(e, r + n, {
            value: function(i, o, s) {
                return this[r].call(this, t, i, o, s)
            },
            configurable: !0
        })
    })
}
class gc {
    constructor(t) {
        t && this.set(t)
    }
    set(t, n, r) {
        const i = this;

        function o(l, a, c) {
            const u = bs(a);
            if (!u) throw new Error("header name must be a non-empty string");
            const f = k.findKey(i, u);
            (!f || i[f] === void 0 || c === !0 || c === void 0 && i[f] !== !1) && (i[f || a] = Ka(l))
        }
        const s = (l, a) => k.forEach(l, (c, u) => o(c, u, a));
        return k.isPlainObject(t) || t instanceof this.constructor ? s(t, n) : k.isString(t) && (t = t.trim()) && !iR(t) ? s(nR(t), n) : t != null && o(n, t, r), this
    }
    get(t, n) {
        if (t = bs(t), t) {
            const r = k.findKey(this, t);
            if (r) {
                const i = this[r];
                if (!n) return i;
                if (n === !0) return rR(i);
                if (k.isFunction(n)) return n.call(this, i, r);
                if (k.isRegExp(n)) return n.exec(i);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, n) {
        if (t = bs(t), t) {
            const r = k.findKey(this, t);
            return !!(r && this[r] !== void 0 && (!n || gf(this, this[r], r, n)))
        }
        return !1
    }
    delete(t, n) {
        const r = this;
        let i = !1;

        function o(s) {
            if (s = bs(s), s) {
                const l = k.findKey(r, s);
                l && (!n || gf(r, r[l], l, n)) && (delete r[l], i = !0)
            }
        }
        return k.isArray(t) ? t.forEach(o) : o(t), i
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            i = !1;
        for (; r--;) {
            const o = n[r];
            (!t || gf(this, this[o], o, t, !0)) && (delete this[o], i = !0)
        }
        return i
    }
    normalize(t) {
        const n = this,
            r = {};
        return k.forEach(this, (i, o) => {
            const s = k.findKey(r, o);
            if (s) {
                n[s] = Ka(i), delete n[o];
                return
            }
            const l = t ? oR(o) : String(o).trim();
            l !== o && delete n[o], n[l] = Ka(i), r[l] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const n = Object.create(null);
        return k.forEach(this, (r, i) => {
            r != null && r !== !1 && (n[i] = t && k.isArray(r) ? r.join(", ") : r)
        }), n
    } [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach(i => r.set(i)), r
    }
    static accessor(t) {
        const r = (this[Dg] = this[Dg] = {
                accessors: {}
            }).accessors,
            i = this.prototype;

        function o(s) {
            const l = bs(s);
            r[l] || (sR(i, s), r[l] = !0)
        }
        return k.isArray(t) ? t.forEach(o) : o(t), this
    }
}
gc.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
k.reduceDescriptors(gc.prototype, ({
    value: e
}, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r
        }
    }
});
k.freezeMethods(gc);
const rr = gc;

function yf(e, t) {
    const n = this || Dp,
        r = t || n,
        i = rr.from(r.headers);
    let o = r.data;
    return k.forEach(e, function(l) {
        o = l.call(n, o, i.normalize(), t ? t.status : void 0)
    }), i.normalize(), o
}

function qw(e) {
    return !!(e && e.__CANCEL__)
}

function Wl(e, t, n) {
    he.call(this, e ?? "canceled", he.ERR_CANCELED, t, n), this.name = "CanceledError"
}
k.inherits(Wl, he, {
    __CANCEL__: !0
});

function lR(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status) ? e(n) : t(new he("Request failed with status code " + n.status, [he.ERR_BAD_REQUEST, he.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
}
const aR = $n.isStandardBrowserEnv ? function() {
    return {
        write: function(n, r, i, o, s, l) {
            const a = [];
            a.push(n + "=" + encodeURIComponent(r)), k.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), k.isString(o) && a.push("path=" + o), k.isString(s) && a.push("domain=" + s), l === !0 && a.push("secure"), document.cookie = a.join("; ")
        },
        read: function(n) {
            const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)"));
            return r ? decodeURIComponent(r[3]) : null
        },
        remove: function(n) {
            this.write(n, "", Date.now() - 864e5)
        }
    }
}() : function() {
    return {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}();

function uR(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function cR(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Qw(e, t) {
    return e && !uR(t) ? cR(e, t) : t
}
const fR = $n.isStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
    let r;

    function i(o) {
        let s = o;
        return t && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
        }
    }
    return r = i(window.location.href),
        function(s) {
            const l = k.isString(s) ? i(s) : s;
            return l.protocol === r.protocol && l.host === r.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function dR(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function hR(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let i = 0,
        o = 0,
        s;
    return t = t !== void 0 ? t : 1e3,
        function(a) {
            const c = Date.now(),
                u = r[o];
            s || (s = c), n[i] = a, r[i] = c;
            let f = o,
                h = 0;
            for (; f !== i;) h += n[f++], f = f % e;
            if (i = (i + 1) % e, i === o && (o = (o + 1) % e), c - s < t) return;
            const x = u && c - u;
            return x ? Math.round(h * 1e3 / x) : void 0
        }
}

function Lg(e, t) {
    let n = 0;
    const r = hR(50, 250);
    return i => {
        const o = i.loaded,
            s = i.lengthComputable ? i.total : void 0,
            l = o - n,
            a = r(l),
            c = o <= s;
        n = o;
        const u = {
            loaded: o,
            total: s,
            progress: s ? o / s : void 0,
            bytes: l,
            rate: a || void 0,
            estimated: a && s && c ? (s - o) / a : void 0,
            event: i
        };
        u[t ? "download" : "upload"] = !0, e(u)
    }
}
const pR = typeof XMLHttpRequest < "u",
    mR = pR && function(e) {
        return new Promise(function(n, r) {
            let i = e.data;
            const o = rr.from(e.headers).normalize(),
                s = e.responseType;
            let l;

            function a() {
                e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l)
            }
            let c;
            k.isFormData(i) && ($n.isStandardBrowserEnv || $n.isStandardBrowserWebWorkerEnv ? o.setContentType(!1) : o.getContentType(/^\s*multipart\/form-data/) ? k.isString(c = o.getContentType()) && o.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : o.setContentType("multipart/form-data"));
            let u = new XMLHttpRequest;
            if (e.auth) {
                const y = e.auth.username || "",
                    w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                o.set("Authorization", "Basic " + btoa(y + ":" + w))
            }
            const f = Qw(e.baseURL, e.url);
            u.open(e.method.toUpperCase(), Hw(f, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;

            function h() {
                if (!u) return;
                const y = rr.from("getAllResponseHeaders" in u && u.getAllResponseHeaders()),
                    E = {
                        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
                        status: u.status,
                        statusText: u.statusText,
                        headers: y,
                        config: e,
                        request: u
                    };
                lR(function(p) {
                    n(p), a()
                }, function(p) {
                    r(p), a()
                }, E), u = null
            }
            if ("onloadend" in u ? u.onloadend = h : u.onreadystatechange = function() {
                    !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(h)
                }, u.onabort = function() {
                    u && (r(new he("Request aborted", he.ECONNABORTED, e, u)), u = null)
                }, u.onerror = function() {
                    r(new he("Network Error", he.ERR_NETWORK, e, u)), u = null
                }, u.ontimeout = function() {
                    let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const E = e.transitional || Ww;
                    e.timeoutErrorMessage && (w = e.timeoutErrorMessage), r(new he(w, E.clarifyTimeoutError ? he.ETIMEDOUT : he.ECONNABORTED, e, u)), u = null
                }, $n.isStandardBrowserEnv) {
                const y = (e.withCredentials || fR(f)) && e.xsrfCookieName && aR.read(e.xsrfCookieName);
                y && o.set(e.xsrfHeaderName, y)
            }
            i === void 0 && o.setContentType(null), "setRequestHeader" in u && k.forEach(o.toJSON(), function(w, E) {
                u.setRequestHeader(E, w)
            }), k.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), s && s !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", Lg(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Lg(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = y => {
                u && (r(!y || y.type ? new Wl(null, e, u) : y), u.abort(), u = null)
            }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
            const x = dR(f);
            if (x && $n.protocols.indexOf(x) === -1) {
                r(new he("Unsupported protocol " + x + ":", he.ERR_BAD_REQUEST, e));
                return
            }
            u.send(i || null)
        })
    },
    th = {
        http: BT,
        xhr: mR
    };
k.forEach(th, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const jg = e => `- ${e}`,
    gR = e => k.isFunction(e) || e === null || e === !1,
    Kw = {
        getAdapter: e => {
            e = k.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let n, r;
            const i = {};
            for (let o = 0; o < t; o++) {
                n = e[o];
                let s;
                if (r = n, !gR(n) && (r = th[(s = String(n)).toLowerCase()], r === void 0)) throw new he(`Unknown adapter '${s}'`);
                if (r) break;
                i[s || "#" + o] = r
            }
            if (!r) {
                const o = Object.entries(i).map(([l, a]) => `adapter ${l} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build"));
                let s = t ? o.length > 1 ? `since :
` + o.map(jg).join(`
`) : " " + jg(o[0]) : "as no adapter specified";
                throw new he("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT")
            }
            return r
        },
        adapters: th
    };

function vf(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Wl(null, e)
}

function Ag(e) {
    return vf(e), e.headers = rr.from(e.headers), e.data = yf.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Kw.getAdapter(e.adapter || Dp.adapter)(e).then(function(r) {
        return vf(e), r.data = yf.call(e, e.transformResponse, r), r.headers = rr.from(r.headers), r
    }, function(r) {
        return qw(r) || (vf(e), r && r.response && (r.response.data = yf.call(e, e.transformResponse, r.response), r.response.headers = rr.from(r.response.headers))), Promise.reject(r)
    })
}
const Mg = e => e instanceof rr ? e.toJSON() : e;

function Qo(e, t) {
    t = t || {};
    const n = {};

    function r(c, u, f) {
        return k.isPlainObject(c) && k.isPlainObject(u) ? k.merge.call({
            caseless: f
        }, c, u) : k.isPlainObject(u) ? k.merge({}, u) : k.isArray(u) ? u.slice() : u
    }

    function i(c, u, f) {
        if (k.isUndefined(u)) {
            if (!k.isUndefined(c)) return r(void 0, c, f)
        } else return r(c, u, f)
    }

    function o(c, u) {
        if (!k.isUndefined(u)) return r(void 0, u)
    }

    function s(c, u) {
        if (k.isUndefined(u)) {
            if (!k.isUndefined(c)) return r(void 0, c)
        } else return r(void 0, u)
    }

    function l(c, u, f) {
        if (f in t) return r(c, u);
        if (f in e) return r(void 0, c)
    }
    const a = {
        url: o,
        method: o,
        data: o,
        baseURL: s,
        transformRequest: s,
        transformResponse: s,
        paramsSerializer: s,
        timeout: s,
        timeoutMessage: s,
        withCredentials: s,
        adapter: s,
        responseType: s,
        xsrfCookieName: s,
        xsrfHeaderName: s,
        onUploadProgress: s,
        onDownloadProgress: s,
        decompress: s,
        maxContentLength: s,
        maxBodyLength: s,
        beforeRedirect: s,
        transport: s,
        httpAgent: s,
        httpsAgent: s,
        cancelToken: s,
        socketPath: s,
        responseEncoding: s,
        validateStatus: l,
        headers: (c, u) => i(Mg(c), Mg(u), !0)
    };
    return k.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
        const f = a[u] || i,
            h = f(e[u], t[u], u);
        k.isUndefined(h) && f !== l || (n[u] = h)
    }), n
}
const Gw = "1.5.1",
    Lp = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Lp[e] = function(r) {
        return typeof r === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const Ig = {};
Lp.transitional = function(t, n, r) {
    function i(o, s) {
        return "[Axios v" + Gw + "] Transitional option '" + o + "'" + s + (r ? ". " + r : "")
    }
    return (o, s, l) => {
        if (t === !1) throw new he(i(s, " has been removed" + (n ? " in " + n : "")), he.ERR_DEPRECATED);
        return n && !Ig[s] && (Ig[s] = !0, console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))), t ? t(o, s, l) : !0
    }
};

function yR(e, t, n) {
    if (typeof e != "object") throw new he("options must be an object", he.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let i = r.length;
    for (; i-- > 0;) {
        const o = r[i],
            s = t[o];
        if (s) {
            const l = e[o],
                a = l === void 0 || s(l, o, e);
            if (a !== !0) throw new he("option " + o + " must be " + a, he.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (n !== !0) throw new he("Unknown option " + o, he.ERR_BAD_OPTION)
    }
}
const nh = {
        assertOptions: yR,
        validators: Lp
    },
    br = nh.validators;
class Lu {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new kg,
            response: new kg
        }
    }
    request(t, n) {
        typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Qo(this.defaults, n);
        const {
            transitional: r,
            paramsSerializer: i,
            headers: o
        } = n;
        r !== void 0 && nh.assertOptions(r, {
            silentJSONParsing: br.transitional(br.boolean),
            forcedJSONParsing: br.transitional(br.boolean),
            clarifyTimeoutError: br.transitional(br.boolean)
        }, !1), i != null && (k.isFunction(i) ? n.paramsSerializer = {
            serialize: i
        } : nh.assertOptions(i, {
            encode: br.function,
            serialize: br.function
        }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
        let s = o && k.merge(o.common, o[n.method]);
        o && k.forEach(["delete", "get", "head", "post", "put", "patch", "common"], y => {
            delete o[y]
        }), n.headers = rr.concat(s, o);
        const l = [];
        let a = !0;
        this.interceptors.request.forEach(function(w) {
            typeof w.runWhen == "function" && w.runWhen(n) === !1 || (a = a && w.synchronous, l.unshift(w.fulfilled, w.rejected))
        });
        const c = [];
        this.interceptors.response.forEach(function(w) {
            c.push(w.fulfilled, w.rejected)
        });
        let u, f = 0,
            h;
        if (!a) {
            const y = [Ag.bind(this), void 0];
            for (y.unshift.apply(y, l), y.push.apply(y, c), h = y.length, u = Promise.resolve(n); f < h;) u = u.then(y[f++], y[f++]);
            return u
        }
        h = l.length;
        let x = n;
        for (f = 0; f < h;) {
            const y = l[f++],
                w = l[f++];
            try {
                x = y(x)
            } catch (E) {
                w.call(this, E);
                break
            }
        }
        try {
            u = Ag.call(this, x)
        } catch (y) {
            return Promise.reject(y)
        }
        for (f = 0, h = c.length; f < h;) u = u.then(c[f++], c[f++]);
        return u
    }
    getUri(t) {
        t = Qo(this.defaults, t);
        const n = Qw(t.baseURL, t.url);
        return Hw(n, t.params, t.paramsSerializer)
    }
}
k.forEach(["delete", "get", "head", "options"], function(t) {
    Lu.prototype[t] = function(n, r) {
        return this.request(Qo(r || {}, {
            method: t,
            url: n,
            data: (r || {}).data
        }))
    }
});
k.forEach(["post", "put", "patch"], function(t) {
    function n(r) {
        return function(o, s, l) {
            return this.request(Qo(l || {}, {
                method: t,
                headers: r ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: o,
                data: s
            }))
        }
    }
    Lu.prototype[t] = n(), Lu.prototype[t + "Form"] = n(!0)
});
const Ga = Lu;
class jp {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let n;
        this.promise = new Promise(function(o) {
            n = o
        });
        const r = this;
        this.promise.then(i => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0;) r._listeners[o](i);
            r._listeners = null
        }), this.promise.then = i => {
            let o;
            const s = new Promise(l => {
                r.subscribe(l), o = l
            }).then(i);
            return s.cancel = function() {
                r.unsubscribe(o)
            }, s
        }, t(function(o, s, l) {
            r.reason || (r.reason = new Wl(o, s, l), n(r.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1)
    }
    static source() {
        let t;
        return {
            token: new jp(function(i) {
                t = i
            }),
            cancel: t
        }
    }
}
const vR = jp;

function wR(e) {
    return function(n) {
        return e.apply(null, n)
    }
}

function xR(e) {
    return k.isObject(e) && e.isAxiosError === !0
}
const rh = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(rh).forEach(([e, t]) => {
    rh[t] = e
});
const ER = rh;

function Yw(e) {
    const t = new Ga(e),
        n = kw(Ga.prototype.request, t);
    return k.extend(n, Ga.prototype, t, {
        allOwnKeys: !0
    }), k.extend(n, t, null, {
        allOwnKeys: !0
    }), n.create = function(i) {
        return Yw(Qo(e, i))
    }, n
}
const Ge = Yw(Dp);
Ge.Axios = Ga;
Ge.CanceledError = Wl;
Ge.CancelToken = vR;
Ge.isCancel = qw;
Ge.VERSION = Gw;
Ge.toFormData = mc;
Ge.AxiosError = he;
Ge.Cancel = Ge.CanceledError;
Ge.all = function(t) {
    return Promise.all(t)
};
Ge.spread = wR;
Ge.isAxiosError = xR;
Ge.mergeConfig = Qo;
Ge.AxiosHeaders = rr;
Ge.formToJSON = e => Vw(k.isHTMLForm(e) ? new FormData(e) : e);
Ge.getAdapter = Kw.getAdapter;
Ge.HttpStatusCode = ER;
Ge.default = Ge;
const SR = Ge,
    mr = SR.create({
        timeout: 6e4
    });
mr.interceptors.request.use(e => e, e => Promise.reject(e));
mr.interceptors.response.use(e => e, e => Promise.reject(e));
const bR = new $C;
var Xw = {
        exports: {}
    },
    Jw = {},
    Zw = {
        exports: {}
    },
    e1 = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ko = g;

function CR(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var TR = typeof Object.is == "function" ? Object.is : CR,
    RR = Ko.useState,
    _R = Ko.useEffect,
    PR = Ko.useLayoutEffect,
    NR = Ko.useDebugValue;

function OR(e, t) {
    var n = t(),
        r = RR({
            inst: {
                value: n,
                getSnapshot: t
            }
        }),
        i = r[0].inst,
        o = r[1];
    return PR(function() {
        i.value = n, i.getSnapshot = t, wf(i) && o({
            inst: i
        })
    }, [e, n, t]), _R(function() {
        return wf(i) && o({
            inst: i
        }), e(function() {
            wf(i) && o({
                inst: i
            })
        })
    }, [e]), NR(n), n
}

function wf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !TR(e, n)
    } catch {
        return !0
    }
}

function kR(e, t) {
    return t()
}
var DR = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? kR : OR;
e1.useSyncExternalStore = Ko.useSyncExternalStore !== void 0 ? Ko.useSyncExternalStore : DR;
Zw.exports = e1;
var LR = Zw.exports;
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yc = g,
    jR = LR;

function AR(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var MR = typeof Object.is == "function" ? Object.is : AR,
    IR = jR.useSyncExternalStore,
    FR = yc.useRef,
    $R = yc.useEffect,
    UR = yc.useMemo,
    BR = yc.useDebugValue;
Jw.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
    var o = FR(null);
    if (o.current === null) {
        var s = {
            hasValue: !1,
            value: null
        };
        o.current = s
    } else s = o.current;
    o = UR(function() {
        function a(x) {
            if (!c) {
                if (c = !0, u = x, x = r(x), i !== void 0 && s.hasValue) {
                    var y = s.value;
                    if (i(y, x)) return f = y
                }
                return f = x
            }
            if (y = f, MR(u, x)) return y;
            var w = r(x);
            return i !== void 0 && i(y, w) ? y : (u = x, f = w)
        }
        var c = !1,
            u, f, h = n === void 0 ? null : n;
        return [function() {
            return a(t())
        }, h === null ? void 0 : function() {
            return a(h())
        }]
    }, [t, n, r, i]);
    var l = IR(e, o[0], o[1]);
    return $R(function() {
        s.hasValue = !0, s.value = l
    }, [l]), BR(l), l
};
Xw.exports = Jw;
var zR = Xw.exports;
const HR = $i(zR),
    {
        useSyncExternalStoreWithSelector: WR
    } = HR;

function VR(e, t = e.getState, n) {
    const r = WR(e.subscribe, e.getState, e.getServerState || e.getState, t, n);
    return g.useDebugValue(r), r
}
const qR = e => (t, n) => VR(e, t, n),
    t1 = sT(e => ({
        appConfig: null,
        setAppConfig: t => e({
            appConfig: t
        })
    })),
    QR = qR(t1),
    n1 = {
        configStore: t1,
        useConfigStore: QR
    };

function Ap() {
    const e = window;
    return e == null ? void 0 : e.__REACT_TEMPLATE_BLOGGER__
}

function r1(e, t, n) {
    let r = e.replace(/<[^>]*>|[\r\n]/g, " ");
    return t && r.length > t && (r = r.substring(0, t), r = r.replace(/\s\w*$/, "")), r = r.trim(), n && r.length < e.length && (r += ` ${n}`), r
}

function Fg(e, t = !1) {
    const n = /https?:\/\/(www\d?\.)?([^/]+)(\/[^?#]*)?/i,
        r = e.replace(n, (i, o, s, l) => !l || l === "/" ? o ? "" : s : l);
    return t ? r.replace(/\.html$/i, "") : r
}

function ts(e, t) {
    const n = new Date(e),
        r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        i = n.getDate(),
        o = r[n.getMonth()],
        s = n.getFullYear();
    return t = t.replace("DD", i < 10 ? `0${i}` : `${i}`), t = t.replace("MMM", o), t = t.replace("YYYY", `${s}`), t = t.replace("MM", (n.getMonth() + 1).toString().padStart(2, "0")), t
}

function ns(e) {
    var t, n, r, i, o, s, l;
    return {
        title: ((t = e == null ? void 0 : e.detail) == null ? void 0 : t.name) || (e == null ? void 0 : e.displayName),
        subtitle: ((n = e == null ? void 0 : e.detail) == null ? void 0 : n.title) || ((r = e.detail) == null ? void 0 : r.nickname) || ((i = e.detail) == null ? void 0 : i.username) || ((o = e == null ? void 0 : e.detail) == null ? void 0 : o.email),
        image: ((s = e == null ? void 0 : e.detail) == null ? void 0 : s.profilePic) || ((l = e == null ? void 0 : e.image) == null ? void 0 : l.url)
    }
}

function KR(e) {
    return e && e.length > 0 && (e = e.map(t => ({
        title: t,
        url: `/search?labels=${encodeURIComponent(t)}`
    }))), e
}

function GR(e) {
    return Ap().isBlogger ? `${Fg(e,!1)}` : `${Fg(e,!0)}`
}

function i1(e, t) {
    const n = t.filter(r => r.id === e.id)[0];
    return n && (e = {
        ...e,
        detail: n
    }), e
}

function YR(e) {
    const t = {};
    return e.forEach(i => {
        i.labels && i.labels.forEach(o => {
            const s = o;
            t[s] ? t[s].count++ : t[s] = {
                id: `tags-${s}`,
                title: s,
                count: 1,
                url: `/search?labels=${encodeURIComponent(s)}`
            }
        })
    }), Object.values(t)
}

function o1(e, t) {
    return e.author && (e.author = i1(e.author, t)), e.labels && (e.labels = KR(e.labels)), e.url && (e.to = GR(e.url)), e.content && (e.summary = r1(e.content, 250, "[...]")), e
}

function XR(e, t) {
    return e.author && (e.author = i1(e.author, t)), e
}

function El(e, t) {
    var n;
    return ((n = e == null ? void 0 : e.items) == null ? void 0 : n.length) > 0 && (e.items = e.items.map(r => o1(r, t))), e
}

function JR(e, t) {
    var n;
    return ((n = e == null ? void 0 : e.items) == null ? void 0 : n.length) > 0 && (e.items = e.items.map(r => XR(r, t))), e
}

function ZR() {
    const e = Ap().configUrl;
    return e ? mr.get(e) : Promise.reject(new Error("config url not found, please read documentation!"))
}
const e_ = {
    getConfig: ZR
};
async function t_() {
    const e = await e_.getConfig();
    return n1.configStore.setState({
        appConfig: e.data
    }), e.data
}
const n_ = {
    getConfig: t_
};

function r_() {
    var o, s, l, a, c, u, f;
    const e = n1.configStore.getState(),
        t = (s = (o = e.appConfig) == null ? void 0 : o.blogger) == null ? void 0 : s.blogId,
        n = (a = (l = e.appConfig) == null ? void 0 : l.google) == null ? void 0 : a.apiKey,
        r = (u = (c = e.appConfig) == null ? void 0 : c.blogger) == null ? void 0 : u.blogUrl,
        i = ((f = e.appConfig) == null ? void 0 : f.author) || [];
    return {
        blogId: t,
        apiKey: n,
        blogUrl: r,
        authors: i
    }
}
const ai = {
    getBloggerCredential: r_
};

function i_(e, t) {
    return mr.get(Zo.blog(e), {
        params: {
            key: t
        }
    })
}

function o_(e, t, n) {
    return mr.get(Zo.posts(e), {
        params: {
            ...n,
            key: t
        }
    })
}

function s_(e, t, n, r) {
    return mr.get(Zo.post(e, t), {
        params: {
            ...r,
            key: n
        }
    })
}

function l_(e, t, n) {
    return mr.get(Zo.pages(e), {
        params: {
            ...n,
            key: t
        }
    })
}

function a_(e, t, n) {
    return mr.get(Zo.searchPosts(e), {
        params: {
            ...n,
            key: t
        }
    })
}

function u_(e, t, n, r) {
    return mr.get(Zo.comments(e, t), {
        params: {
            ...r,
            key: n
        }
    })
}
const fr = {
    blogInfo: i_,
    getPost: s_,
    getPosts: o_,
    getPages: l_,
    searchPosts: a_,
    getComments: u_
};
async function c_() {
    const {
        blogId: e,
        apiKey: t
    } = ai.getBloggerCredential();
    if (!t || !e) throw new Error("invalid credential");
    const n = await fr.blogInfo(e, t);
    return console.log("bloggerUseCase / getInfo ==>", n), n.data
}
async function f_() {
    const {
        blogId: e,
        apiKey: t,
        authors: n
    } = ai.getBloggerCredential();
    if (!t || !e) throw new Error("invalid credential");
    const r = await fr.getPosts(e, t, {
        maxResults: 1,
        fetchBodies: !0,
        fetchImages: !0,
        orderBy: "updated",
        fields: "items,nextPageToken"
    });
    return r.data = El(r.data, n), console.log("bloggerUseCase / getFeaturedPosts ==>", r), r.data
}
async function d_(e, t) {
    const {
        blogId: n,
        apiKey: r,
        authors: i
    } = ai.getBloggerCredential();
    if (!r || !n) throw new Error("invalid credential");
    const o = typeof e != "string" && e.length > 0 ? e.map((l, a) => a != e.length - 1 ? `${l},` : l) : e,
        s = await fr.getPosts(n, r, {
            maxResults: 8,
            fetchBodies: !1,
            fetchImages: !0,
            orderBy: "updated",
            labels: o,
            ...t
        });
    return s.data = El(s.data, i), console.log("bloggerUseCase / getPostsByLabel ==>", s), s.data
}
async function h_(e) {
    const {
        blogId: t,
        apiKey: n,
        authors: r
    } = ai.getBloggerCredential();
    if (!n || !t) throw new Error("invalid credential");
    const i = await fr.getPosts(t, n, {
        maxResults: 10,
        fetchBodies: !0,
        fetchImages: !0,
        orderBy: "published",
        ...e
    });
    return i.data = El(i.data, r), console.log("bloggerUseCase / getLatestPosts ==>", i), i.data
}
async function p_() {
    const {
        blogId: e,
        apiKey: t
    } = ai.getBloggerCredential();
    if (!t || !e) throw new Error("invalid credential");
    const n = await fr.getPosts(e, t, {
            maxResults: 500,
            fetchBodies: !0,
            fetchImages: !0,
            orderBy: "published",
            fields: "items.labels"
        }),
        r = n.data.items.length > 0 ? YR(n.data.items) : [];
    return console.log("bloggerUseCase / getAllLabels ==>", r), r
}
async function s1(e, t) {
    const {
        blogId: n,
        apiKey: r,
        authors: i
    } = ai.getBloggerCredential();
    if (!r || !n) throw new Error("invalid credential");
    const o = await fr.getPost(e, n, r, {
        maxResults: 1,
        fetchBodies: !0,
        fetchImages: !0,
        orderBy: "updated",
        ...t
    });
    return o.data = o1(o.data, i), console.log("bloggerUseCase / getPostDetail ==>", o), o.data
}
async function m_(e) {
    return await s1("bypath", {
        path: e
    })
}
async function g_(e, t) {
    var a, c;
    const {
        blogId: n,
        apiKey: r,
        authors: i
    } = ai.getBloggerCredential();
    if (!r || !n) throw new Error("invalid credential");
    const o = !!t;
    if (o && !!!e) {
        const u = await fr.getPosts(n, r, {
            maxResults: 10,
            fetchBodies: !0,
            fetchImages: !0,
            orderBy: "published",
            labels: t
        });
        return u.data = El(u.data, i), console.log("bloggerUseCase / searchPostsByQueryAndLabels ==>", u), u.data
    }
    const l = await fr.searchPosts(n, r, {
        orderBy: "published",
        q: e
    });
    return l.data = El(l.data, i), o && ((c = (a = l.data) == null ? void 0 : a.items) == null ? void 0 : c.length) > 0 && (l.data.items = l.data.items.filter(u => {
        var f;
        return (f = u.labels) == null ? void 0 : f.some(h => t.includes(",") ? t.split(",").some(x => x.toLowerCase().includes(h.title.toLowerCase())) : h.title.toLowerCase().includes(t.toLowerCase()))
    })), console.log("bloggerUseCase / searchPostsByQueryAndLabels ==>", l), l.data
}
async function y_(e, t) {
    const {
        blogId: n,
        apiKey: r,
        authors: i
    } = ai.getBloggerCredential();
    if (!r || !n) throw new Error("invalid credential");
    const o = await fr.getComments(n, e, r, {
        maxResults: 100,
        fetchBodies: !0,
        fetchImages: !0,
        ...t
    });
    return o.data = JR(o.data, i), console.log("bloggerUseCase / getPostComments ==>", o), o.data
}
const dr = {
    getInfo: c_,
    getFeaturedPosts: f_,
    getPostsByLabel: d_,
    getLatestPosts: h_,
    getAllLabels: p_,
    getPostDetail: s1,
    getPostDetailByPath: m_,
    getPostComments: y_,
    searchPostsByQueryAndLabels: g_
};

function Nn() {
    var o, s, l, a, c;
    const e = vc(),
        t = li({
            queryKey: ["blog", e.blogId, e.apiKey],
            queryFn: dr.getInfo,
            enabled: e.isEnableQueries
        }),
        n = ((s = (o = e == null ? void 0 : e.data) == null ? void 0 : o.app) == null ? void 0 : s.logo) || "",
        r = ((a = (l = e == null ? void 0 : e.data) == null ? void 0 : l.menu) == null ? void 0 : a.header) || [],
        i = ((c = t == null ? void 0 : t.data) == null ? void 0 : c.name) || "";
    return {
        ...t,
        config: e,
        headerLinks: r,
        logo: n,
        title: i
    }
}

function vc() {
    var o, s, l, a, c, u;
    const e = li({
            queryKey: ["appConfig"],
            queryFn: n_.getConfig
        }),
        t = (s = (o = e.data) == null ? void 0 : o.google) == null ? void 0 : s.apiKey,
        n = (a = (l = e.data) == null ? void 0 : l.blogger) == null ? void 0 : a.blogId,
        r = (u = (c = e.data) == null ? void 0 : c.blogger) == null ? void 0 : u.blogUrl;
    return {
        ...e,
        apiKey: t,
        blogId: n,
        blogUrl: r,
        isEnableQueries: !!n && !!t
    }
}
const v_ = {
    enabled: !0
};

function l1(e) {
    var o;
    const t = g.useMemo(() => ({
            ...v_,
            ...e
        }), [e]),
        {
            config: n
        } = Nn(),
        r = li({
            queryKey: ["featuredPosts", n.apiKey, n.blogId],
            queryFn: dr.getFeaturedPosts,
            enabled: t.enabled && n.isEnableQueries
        }),
        i = ((o = r.data) == null ? void 0 : o.items) || [];
    return {
        ...r,
        items: i
    }
}

function a1({
    label: e,
    showBody: t,
    showImage: n = !0,
    excludes: r = [],
    enabled: i
}) {
    var c;
    const o = typeof i > "u" ? !0 : i,
        {
            config: s
        } = Nn(),
        l = li({
            queryKey: ["labeledPosts", s.apiKey, s.blogId, e],
            queryFn: () => dr.getPostsByLabel(e, {
                fetchBodies: t,
                fetchImages: n
            }),
            enabled: o && s.isEnableQueries && !!e
        });
    let a = ((c = l.data) == null ? void 0 : c.items) || [];
    return r && r.length > 0 && (a = a.filter(u => !r.includes(u.id))), {
        ...l,
        items: a
    }
}
const w_ = {
    enabled: !0
};

function x_(e) {
    var l, a;
    const t = g.useMemo(() => ({
            ...w_,
            ...e
        }), [e]),
        {
            config: n
        } = Nn(),
        r = l1({
            enabled: t.enabled
        }),
        i = rT({
            queryKey: ["latestPosts", n.apiKey, n.blogId],
            queryFn: ({
                pageParam: c
            }) => dr.getLatestPosts({
                ...c && {
                    pageToken: c
                }
            }),
            enabled: t.enabled && n.isEnableQueries,
            getNextPageParam: c => c.nextPageToken,
            initialPageParam: ""
        });
    (l = i.data) == null || l.pages;
    const o = ((a = i.data) == null ? void 0 : a.pages) || [];
    let s = [];
    if (o.forEach(c => c.items.forEach(u => s.push(u))), r.items.length > 0) {
        const c = r.items.map(u => u.id);
        s = s.filter(u => !c.includes(u.id))
    }
    return {
        ...i,
        items: s
    }
}
const E_ = {
    enabled: !0
};

function u1(e) {
    const t = g.useMemo(() => ({
            ...E_,
            ...e
        }), [e]),
        {
            config: n
        } = Nn(),
        r = li({
            queryKey: ["label-list", n.apiKey, n.blogId],
            queryFn: dr.getAllLabels,
            enabled: t.enabled && n.isEnableQueries
        }),
        i = r.data || [];
    return {
        ...r,
        items: i
    }
}

function wc(e) {
    var c, u;
    const {
        config: t
    } = Nn(), n = li({
        queryKey: ["post", t.apiKey, t.blogId, e.id],
        queryFn: e.byPath ? () => dr.getPostDetailByPath(e.id) : () => dr.getPostDetail(e.id),
        enabled: t.isEnableQueries && !!e.id
    }), r = n.data, i = g.useMemo(() => (r == null ? void 0 : r.labels) || [], [r == null ? void 0 : r.labels]), o = (r == null ? void 0 : r.title) || "", s = g.useMemo(() => {
        const f = i[0] || "",
            h = [];
        return f && h.push({
            id: 1,
            title: f.title,
            url: f.url
        }), o && h.push({
            id: 2,
            title: o,
            url: "#"
        }), h
    }, [i, o]), l = (c = n.data) != null && c.published ? `Published on ${ts(n.data.published,"MMM DD, YYYY")}` : "", a = (u = n.data) != null && u.author ? {
        ...ns(n.data.author),
        subtitle: l
    } : {
        title: "Anonim",
        subtitle: l,
        image: ""
    };
    return {
        ...n,
        author: a,
        breadCrumb: s
    }
}

function S_({
    q: e,
    labels: t
}) {
    var s;
    const {
        config: n
    } = Nn(), r = li({
        queryKey: ["searchPosts", n.apiKey, n.blogId, e, t],
        queryFn: () => dr.searchPostsByQueryAndLabels(e, t),
        enabled: n.isEnableQueries
    }), i = ((s = r.data) == null ? void 0 : s.items) || [], o = i.length === 0;
    return {
        ...r,
        items: i,
        isEmpty: o
    }
}

function b_(e) {
    const t = o => typeof window < "u" ? window.matchMedia(o).matches : !1,
        [n, r] = g.useState(t(e));

    function i() {
        r(t(e))
    }
    return g.useEffect(() => {
        const o = window.matchMedia(e);
        return i(), o.addListener ? o.addListener(i) : o.addEventListener("change", i), () => {
            o.removeListener ? o.removeListener(i) : o.removeEventListener("change", i)
        }
    }, [e]), n
}

function $g(e, t) {
    const [n, r] = g.useState(e);
    return g.useEffect(() => {
        const i = setTimeout(() => r(e), t || 500);
        return () => {
            clearTimeout(i)
        }
    }, [e, t]), n
}

function xc() {
    const e = Eb(),
        t = e.year,
        n = e.month,
        r = e.title,
        i = Ap().isBlogger;
    return g.useMemo(() => {
        const s = t && n && r ? `/${t}/${n}/${r}${i?"":".html"}` : "",
            l = window.location.origin + s;
        return {
            id: s,
            url: l
        }
    }, [t, n, r, i])
}
const C_ = {
    postId: "",
    enabled: !0
};

function T_(e) {
    const t = g.useMemo(() => ({
            ...C_,
            ...e
        }), [e]),
        {
            config: n
        } = Nn();
    return {
        ...li({
            queryKey: ["comments", n.apiKey, n.blogId, e.postId],
            queryFn: () => dr.getPostComments(e.postId),
            enabled: t.enabled && n.isEnableQueries && !!e.postId
        })
    }
}
var ih = new Map,
    Sa = new WeakMap,
    Ug = 0,
    R_ = void 0;

function __(e) {
    return e ? (Sa.has(e) || (Ug += 1, Sa.set(e, Ug.toString())), Sa.get(e)) : "0"
}

function P_(e) {
    return Object.keys(e).sort().filter(t => e[t] !== void 0).map(t => `${t}_${t==="root"?__(e.root):e[t]}`).toString()
}

function N_(e) {
    let t = P_(e),
        n = ih.get(t);
    if (!n) {
        const r = new Map;
        let i;
        const o = new IntersectionObserver(s => {
            s.forEach(l => {
                var a;
                const c = l.isIntersecting && i.some(u => l.intersectionRatio >= u);
                e.trackVisibility && typeof l.isVisible > "u" && (l.isVisible = c), (a = r.get(l.target)) == null || a.forEach(u => {
                    u(c, l)
                })
            })
        }, e);
        i = o.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), n = {
            id: t,
            observer: o,
            elements: r
        }, ih.set(t, n)
    }
    return n
}

function O_(e, t, n = {}, r = R_) {
    if (typeof window.IntersectionObserver > "u" && r !== void 0) {
        const a = e.getBoundingClientRect();
        return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: typeof n.threshold == "number" ? n.threshold : 0,
            time: 0,
            boundingClientRect: a,
            intersectionRect: a,
            rootBounds: a
        }), () => {}
    }
    const {
        id: i,
        observer: o,
        elements: s
    } = N_(n);
    let l = s.get(e) || [];
    return s.has(e) || s.set(e, l), l.push(t), o.observe(e),
        function() {
            l.splice(l.indexOf(t), 1), l.length === 0 && (s.delete(e), o.unobserve(e)), s.size === 0 && (o.disconnect(), ih.delete(i))
        }
}

function k_({
    threshold: e,
    delay: t,
    trackVisibility: n,
    rootMargin: r,
    root: i,
    triggerOnce: o,
    skip: s,
    initialInView: l,
    fallbackInView: a,
    onChange: c
} = {}) {
    var u;
    const [f, h] = g.useState(null), x = g.useRef(), [y, w] = g.useState({
        inView: !!l,
        entry: void 0
    });
    x.current = c, g.useEffect(() => {
        if (s || !f) return;
        let v;
        return v = O_(f, (R, P) => {
            w({
                inView: R,
                entry: P
            }), x.current && x.current(R, P), P.isIntersecting && o && v && (v(), v = void 0)
        }, {
            root: i,
            rootMargin: r,
            threshold: e,
            trackVisibility: n,
            delay: t
        }, a), () => {
            v && v()
        }
    }, [Array.isArray(e) ? e.toString() : e, f, i, r, o, s, n, a, t]);
    const E = (u = y.entry) == null ? void 0 : u.target,
        m = g.useRef();
    !f && E && !o && !s && m.current !== E && (m.current = E, w({
        inView: !!l,
        entry: void 0
    }));
    const p = [h, y.inView, y.entry];
    return p.ref = p[0], p.inView = p[1], p.entry = p[2], p
}
const Bg = {
    triggerOnce: !0,
    delay: 1e3,
    initialInView: !1,
    threshold: [0, .25, .5, .75, 1]
};

function rs(e) {
    const t = g.useMemo(() => e ? {
        ...Bg,
        ...e
    } : Bg, [e]);
    return k_(t)
}

function D_({
    src: e,
    title: t,
    alt: n,
    className: r,
    imageClassName: i,
    loading: o
}) {
    var h, x;
    const {
        config: s
    } = Nn(), {
        ref: l,
        inView: a
    } = rs(), c = g.useMemo(() => Re("c-image", "relative bg-slate-300", r), [r]), u = g.useMemo(() => Re("c-image-img", "absolute h-full w-full max-w-full object-cover object-center", i), [i]), f = g.useMemo(() => {
        var y, w;
        return e || ((w = (y = s.data) == null ? void 0 : y.app) == null ? void 0 : w.defaultImage)
    }, [e, (x = (h = s.data) == null ? void 0 : h.app) == null ? void 0 : x.defaultImage]);
    return d.jsx("div", {
        ref: l,
        className: c,
        children: a && !o ? d.jsx("img", {
            src: f,
            loading: "lazy",
            className: u,
            title: t,
            alt: n
        }) : null
    })
}
const Hn = L.memo(D_);

function L_() {
    return d.jsx("div", {
        className: "bg-slate-300 inline-block w-16 h-3 mr-2 mb-1 rounded-full"
    })
}
const j_ = L.memo(L_);

function A_({
    title: e,
    url: t,
    className: n,
    loading: r
}) {
    const i = !!t,
        o = i && (t == null ? void 0 : t.includes("http")),
        s = i && !o,
        l = g.useMemo(() => Re("c-hastag", "mb-1 mr-2 inline-block text-xs font-semibold text-slate-700", n), [n]);
    return r ? d.jsx(j_, {}) : o ? d.jsx("a", {
        href: t,
        title: e,
        className: l,
        children: `#${e}`
    }) : s ? d.jsx(Ot, {
        to: t || "",
        title: e,
        className: l,
        children: `#${e}`
    }) : d.jsx("span", {
        className: l
    })
}
const Ec = L.memo(A_);

function M_({
    title: e
}) {
    return d.jsxs("div", {
        className: "relative mb-4 px-6 sm:px-0",
        children: [d.jsx("h2", {
            className: "text-md relative z-10 inline-block border border-slate-300 bg-white px-3 py-1 font-bold text-slate-700",
            children: e
        }), d.jsx("div", {
            className: "absolute right-0 top-1/2 w-full translate-y-1/2 border-b border-slate-300"
        })]
    })
}
const Vl = L.memo(M_);

function zg({
    title: e,
    url: t,
    id: n
}) {
    return d.jsx("li", {
        className: "inline-block text-sm text-slate-700",
        children: d.jsx(Ot, {
            to: t,
            title: e,
            children: e
        })
    }, n)
}

function Hg() {
    return d.jsx("li", {
        className: "mx-2 inline-block text-sm text-slate-700",
        children: "/"
    })
}

function I_({
    items: e,
    loading: t
}) {
    return t ? d.jsxs("div", {
        children: [d.jsx("div", {
            className: "mb-2 mr-2 inline-block h-4 w-24 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-2 mr-2 inline-block h-4 w-32 rounded-full bg-slate-300"
        })]
    }) : d.jsxs("ul", {
        className: "mb-2 overflow-hidden text-ellipsis whitespace-nowrap",
        children: [d.jsx(zg, {
            id: 1,
            title: "Home",
            url: "/"
        }), d.jsx(Hg, {}), e.map(({
            title: n,
            url: r,
            id: i
        }, o) => d.jsxs(L.Fragment, {
            children: [d.jsx(zg, {
                id: i,
                title: n,
                url: r
            }), o !== e.length - 1 && d.jsx(Hg, {})]
        }, i))]
    })
}
const F_ = L.memo(I_); /*! @license DOMPurify 3.0.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.6/LICENSE */
const {
    entries: c1,
    setPrototypeOf: Wg,
    isFrozen: $_,
    getPrototypeOf: U_,
    getOwnPropertyDescriptor: f1
} = Object;
let {
    freeze: _t,
    seal: Rn,
    create: d1
} = Object, {
    apply: oh,
    construct: sh
} = typeof Reflect < "u" && Reflect;
_t || (_t = function(t) {
    return t
});
Rn || (Rn = function(t) {
    return t
});
oh || (oh = function(t, n, r) {
    return t.apply(n, r)
});
sh || (sh = function(t, n) {
    return new t(...n)
});
const ba = fn(Array.prototype.forEach),
    Vg = fn(Array.prototype.pop),
    Cs = fn(Array.prototype.push),
    Ya = fn(String.prototype.toLowerCase),
    xf = fn(String.prototype.toString),
    B_ = fn(String.prototype.match),
    Ts = fn(String.prototype.replace),
    z_ = fn(String.prototype.indexOf),
    H_ = fn(String.prototype.trim),
    Bt = fn(RegExp.prototype.test),
    Rs = W_(TypeError);

function fn(e) {
    return function(t) {
        for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return oh(e, t, r)
    }
}

function W_(e) {
    return function() {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
        return sh(e, n)
    }
}

function oe(e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ya;
    Wg && Wg(e, null);
    let r = t.length;
    for (; r--;) {
        let i = t[r];
        if (typeof i == "string") {
            const o = n(i);
            o !== i && ($_(t) || (t[r] = o), i = o)
        }
        e[i] = !0
    }
    return e
}

function Gi(e) {
    const t = d1(null);
    for (const [n, r] of c1(e)) f1(e, n) !== void 0 && (t[n] = r);
    return t
}

function Ca(e, t) {
    for (; e !== null;) {
        const r = f1(e, t);
        if (r) {
            if (r.get) return fn(r.get);
            if (typeof r.value == "function") return fn(r.value)
        }
        e = U_(e)
    }

    function n(r) {
        return console.warn("fallback value for", r), null
    }
    return n
}
const qg = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
    Ef = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
    Sf = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
    V_ = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
    bf = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
    q_ = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
    Qg = _t(["#text"]),
    Kg = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
    Cf = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
    Gg = _t(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
    Ta = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
    Q_ = Rn(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
    K_ = Rn(/<%[\w\W]*|[\w\W]*%>/gm),
    G_ = Rn(/\${[\w\W]*}/gm),
    Y_ = Rn(/^data-[\-\w.\u00B7-\uFFFF]/),
    X_ = Rn(/^aria-[\-\w]+$/),
    h1 = Rn(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
    J_ = Rn(/^(?:\w+script|data):/i),
    Z_ = Rn(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
    p1 = Rn(/^html$/i);
var Yg = Object.freeze({
    __proto__: null,
    MUSTACHE_EXPR: Q_,
    ERB_EXPR: K_,
    TMPLIT_EXPR: G_,
    DATA_ATTR: Y_,
    ARIA_ATTR: X_,
    IS_ALLOWED_URI: h1,
    IS_SCRIPT_OR_DATA: J_,
    ATTR_WHITESPACE: Z_,
    DOCTYPE_NAME: p1
});
const eP = function() {
        return typeof window > "u" ? null : window
    },
    tP = function(t, n) {
        if (typeof t != "object" || typeof t.createPolicy != "function") return null;
        let r = null;
        const i = "data-tt-policy-suffix";
        n && n.hasAttribute(i) && (r = n.getAttribute(i));
        const o = "dompurify" + (r ? "#" + r : "");
        try {
            return t.createPolicy(o, {
                createHTML(s) {
                    return s
                },
                createScriptURL(s) {
                    return s
                }
            })
        } catch {
            return console.warn("TrustedTypes policy " + o + " could not be created."), null
        }
    };

function m1() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : eP();
    const t = H => m1(H);
    if (t.version = "3.0.6", t.removed = [], !e || !e.document || e.document.nodeType !== 9) return t.isSupported = !1, t;
    let {
        document: n
    } = e;
    const r = n,
        i = r.currentScript,
        {
            DocumentFragment: o,
            HTMLTemplateElement: s,
            Node: l,
            Element: a,
            NodeFilter: c,
            NamedNodeMap: u = e.NamedNodeMap || e.MozNamedAttrMap,
            HTMLFormElement: f,
            DOMParser: h,
            trustedTypes: x
        } = e,
        y = a.prototype,
        w = Ca(y, "cloneNode"),
        E = Ca(y, "nextSibling"),
        m = Ca(y, "childNodes"),
        p = Ca(y, "parentNode");
    if (typeof s == "function") {
        const H = n.createElement("template");
        H.content && H.content.ownerDocument && (n = H.content.ownerDocument)
    }
    let v, R = "";
    const {
        implementation: P,
        createNodeIterator: S,
        createDocumentFragment: N,
        getElementsByTagName: D
    } = n, {
        importNode: M
    } = r;
    let B = {};
    t.isSupported = typeof c1 == "function" && typeof p == "function" && P && P.createHTMLDocument !== void 0;
    const {
        MUSTACHE_EXPR: te,
        ERB_EXPR: ge,
        TMPLIT_EXPR: pe,
        DATA_ATTR: et,
        ARIA_ATTR: $t,
        IS_SCRIPT_OR_DATA: St,
        ATTR_WHITESPACE: ce
    } = Yg;
    let {
        IS_ALLOWED_URI: F
    } = Yg, U = null;
    const Y = oe({}, [...qg, ...Ef, ...Sf, ...bf, ...Qg]);
    let q = null;
    const ye = oe({}, [...Kg, ...Cf, ...Gg, ...Ta]);
    let ee = Object.seal(d1(null, {
            tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
            },
            allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
            }
        })),
        _e = null,
        at = null,
        Qe = !0,
        bt = !0,
        zi = !1,
        Me = !0,
        tt = !1,
        de = !1,
        Dt = !1,
        Hi = !1,
        yr = !1,
        Gt = !1,
        Wi = !1,
        Yl = !0,
        Xl = !1;
    const Lc = "user-content-";
    let ss = !0,
        dn = !1,
        Qn = {},
        On = null;
    const hn = oe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    let vr = null;
    const ls = oe({}, ["audio", "video", "img", "source", "image", "track"]);
    let wr = null;
    const Jl = oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
        Ut = "http://www.w3.org/1998/Math/MathML",
        ci = "http://www.w3.org/2000/svg",
        Yt = "http://www.w3.org/1999/xhtml";
    let Kn = Yt,
        as = !1,
        Vi = null;
    const qi = oe({}, [Ut, ci, Yt], xf);
    let kn = null;
    const us = ["application/xhtml+xml", "text/html"],
        jc = "text/html";
    let Ue = null,
        xr = null;
    const Zl = n.createElement("form"),
        ea = function(b) {
            return b instanceof RegExp || b instanceof Function
        },
        T = function() {
            let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            if (!(xr && xr === b)) {
                if ((!b || typeof b != "object") && (b = {}), b = Gi(b), kn = us.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? kn = jc : kn = b.PARSER_MEDIA_TYPE, Ue = kn === "application/xhtml+xml" ? xf : Ya, U = "ALLOWED_TAGS" in b ? oe({}, b.ALLOWED_TAGS, Ue) : Y, q = "ALLOWED_ATTR" in b ? oe({}, b.ALLOWED_ATTR, Ue) : ye, Vi = "ALLOWED_NAMESPACES" in b ? oe({}, b.ALLOWED_NAMESPACES, xf) : qi, wr = "ADD_URI_SAFE_ATTR" in b ? oe(Gi(Jl), b.ADD_URI_SAFE_ATTR, Ue) : Jl, vr = "ADD_DATA_URI_TAGS" in b ? oe(Gi(ls), b.ADD_DATA_URI_TAGS, Ue) : ls, On = "FORBID_CONTENTS" in b ? oe({}, b.FORBID_CONTENTS, Ue) : hn, _e = "FORBID_TAGS" in b ? oe({}, b.FORBID_TAGS, Ue) : {}, at = "FORBID_ATTR" in b ? oe({}, b.FORBID_ATTR, Ue) : {}, Qn = "USE_PROFILES" in b ? b.USE_PROFILES : !1, Qe = b.ALLOW_ARIA_ATTR !== !1, bt = b.ALLOW_DATA_ATTR !== !1, zi = b.ALLOW_UNKNOWN_PROTOCOLS || !1, Me = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, tt = b.SAFE_FOR_TEMPLATES || !1, de = b.WHOLE_DOCUMENT || !1, yr = b.RETURN_DOM || !1, Gt = b.RETURN_DOM_FRAGMENT || !1, Wi = b.RETURN_TRUSTED_TYPE || !1, Hi = b.FORCE_BODY || !1, Yl = b.SANITIZE_DOM !== !1, Xl = b.SANITIZE_NAMED_PROPS || !1, ss = b.KEEP_CONTENT !== !1, dn = b.IN_PLACE || !1, F = b.ALLOWED_URI_REGEXP || h1, Kn = b.NAMESPACE || Yt, ee = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && ea(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ee.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && ea(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ee.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (ee.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), tt && (bt = !1), Gt && (yr = !0), Qn && (U = oe({}, [...Qg]), q = [], Qn.html === !0 && (oe(U, qg), oe(q, Kg)), Qn.svg === !0 && (oe(U, Ef), oe(q, Cf), oe(q, Ta)), Qn.svgFilters === !0 && (oe(U, Sf), oe(q, Cf), oe(q, Ta)), Qn.mathMl === !0 && (oe(U, bf), oe(q, Gg), oe(q, Ta))), b.ADD_TAGS && (U === Y && (U = Gi(U)), oe(U, b.ADD_TAGS, Ue)), b.ADD_ATTR && (q === ye && (q = Gi(q)), oe(q, b.ADD_ATTR, Ue)), b.ADD_URI_SAFE_ATTR && oe(wr, b.ADD_URI_SAFE_ATTR, Ue), b.FORBID_CONTENTS && (On === hn && (On = Gi(On)), oe(On, b.FORBID_CONTENTS, Ue)), ss && (U["#text"] = !0), de && oe(U, ["html", "head", "body"]), U.table && (oe(U, ["tbody"]), delete _e.tbody), b.TRUSTED_TYPES_POLICY) {
                    if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function") throw Rs('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                    if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Rs('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                    v = b.TRUSTED_TYPES_POLICY, R = v.createHTML("")
                } else v === void 0 && (v = tP(x, i)), v !== null && typeof R == "string" && (R = v.createHTML(""));
                _t && _t(b), xr = b
            }
        },
        _ = oe({}, ["mi", "mo", "mn", "ms", "mtext"]),
        O = oe({}, ["foreignobject", "desc", "title", "annotation-xml"]),
        I = oe({}, ["title", "style", "font", "a", "script"]),
        W = oe({}, Ef);
    oe(W, Sf), oe(W, V_);
    const ne = oe({}, bf);
    oe(ne, q_);
    const J = function(b) {
            let A = p(b);
            (!A || !A.tagName) && (A = {
                namespaceURI: Kn,
                tagName: "template"
            });
            const V = Ya(b.tagName),
                we = Ya(A.tagName);
            return Vi[b.namespaceURI] ? b.namespaceURI === ci ? A.namespaceURI === Yt ? V === "svg" : A.namespaceURI === Ut ? V === "svg" && (we === "annotation-xml" || _[we]) : !!W[V] : b.namespaceURI === Ut ? A.namespaceURI === Yt ? V === "math" : A.namespaceURI === ci ? V === "math" && O[we] : !!ne[V] : b.namespaceURI === Yt ? A.namespaceURI === ci && !O[we] || A.namespaceURI === Ut && !_[we] ? !1 : !ne[V] && (I[V] || !W[V]) : !!(kn === "application/xhtml+xml" && Vi[b.namespaceURI]) : !1
        },
        G = function(b) {
            Cs(t.removed, {
                element: b
            });
            try {
                b.parentNode.removeChild(b)
            } catch {
                b.remove()
            }
        },
        K = function(b, A) {
            try {
                Cs(t.removed, {
                    attribute: A.getAttributeNode(b),
                    from: A
                })
            } catch {
                Cs(t.removed, {
                    attribute: null,
                    from: A
                })
            }
            if (A.removeAttribute(b), b === "is" && !q[b])
                if (yr || Gt) try {
                    G(A)
                } catch {} else try {
                    A.setAttribute(b, "")
                } catch {}
        },
        se = function(b) {
            let A = null,
                V = null;
            if (Hi) b = "<remove></remove>" + b;
            else {
                const He = B_(b, /^[\r\n\t ]+/);
                V = He && He[0]
            }
            kn === "application/xhtml+xml" && Kn === Yt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
            const we = v ? v.createHTML(b) : b;
            if (Kn === Yt) try {
                A = new h().parseFromString(we, kn)
            } catch {}
            if (!A || !A.documentElement) {
                A = P.createDocument(Kn, "template", null);
                try {
                    A.documentElement.innerHTML = as ? R : we
                } catch {}
            }
            const ke = A.body || A.documentElement;
            return b && V && ke.insertBefore(n.createTextNode(V), ke.childNodes[0] || null), Kn === Yt ? D.call(A, de ? "html" : "body")[0] : de ? A.documentElement : ke
        },
        Be = function(b) {
            return S.call(b.ownerDocument || b, b, c.SHOW_ELEMENT | c.SHOW_COMMENT | c.SHOW_TEXT, null)
        },
        re = function(b) {
            return b instanceof f && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof u) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function")
        },
        xe = function(b) {
            return typeof l == "function" && b instanceof l
        },
        be = function(b, A, V) {
            B[b] && ba(B[b], we => {
                we.call(t, A, V, xr)
            })
        },
        Ct = function(b) {
            let A = null;
            if (be("beforeSanitizeElements", b, null), re(b)) return G(b), !0;
            const V = Ue(b.nodeName);
            if (be("uponSanitizeElement", b, {
                    tagName: V,
                    allowedTags: U
                }), b.hasChildNodes() && !xe(b.firstElementChild) && Bt(/<[/\w]/g, b.innerHTML) && Bt(/<[/\w]/g, b.textContent)) return G(b), !0;
            if (!U[V] || _e[V]) {
                if (!_e[V] && Gn(V) && (ee.tagNameCheck instanceof RegExp && Bt(ee.tagNameCheck, V) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(V))) return !1;
                if (ss && !On[V]) {
                    const we = p(b) || b.parentNode,
                        ke = m(b) || b.childNodes;
                    if (ke && we) {
                        const He = ke.length;
                        for (let ie = He - 1; ie >= 0; --ie) we.insertBefore(w(ke[ie], !0), E(b))
                    }
                }
                return G(b), !0
            }
            return b instanceof a && !J(b) || (V === "noscript" || V === "noembed" || V === "noframes") && Bt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (G(b), !0) : (tt && b.nodeType === 3 && (A = b.textContent, ba([te, ge, pe], we => {
                A = Ts(A, we, " ")
            }), b.textContent !== A && (Cs(t.removed, {
                element: b.cloneNode()
            }), b.textContent = A)), be("afterSanitizeElements", b, null), !1)
        },
        ze = function(b, A, V) {
            if (Yl && (A === "id" || A === "name") && (V in n || V in Zl)) return !1;
            if (!(bt && !at[A] && Bt(et, A))) {
                if (!(Qe && Bt($t, A))) {
                    if (!q[A] || at[A]) {
                        if (!(Gn(b) && (ee.tagNameCheck instanceof RegExp && Bt(ee.tagNameCheck, b) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(b)) && (ee.attributeNameCheck instanceof RegExp && Bt(ee.attributeNameCheck, A) || ee.attributeNameCheck instanceof Function && ee.attributeNameCheck(A)) || A === "is" && ee.allowCustomizedBuiltInElements && (ee.tagNameCheck instanceof RegExp && Bt(ee.tagNameCheck, V) || ee.tagNameCheck instanceof Function && ee.tagNameCheck(V)))) return !1
                    } else if (!wr[A]) {
                        if (!Bt(F, Ts(V, ce, ""))) {
                            if (!((A === "src" || A === "xlink:href" || A === "href") && b !== "script" && z_(V, "data:") === 0 && vr[b])) {
                                if (!(zi && !Bt(St, Ts(V, ce, "")))) {
                                    if (V) return !1
                                }
                            }
                        }
                    }
                }
            }
            return !0
        },
        Gn = function(b) {
            return b.indexOf("-") > 0
        },
        Qi = function(b) {
            be("beforeSanitizeAttributes", b, null);
            const {
                attributes: A
            } = b;
            if (!A) return;
            const V = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: q
            };
            let we = A.length;
            for (; we--;) {
                const ke = A[we],
                    {
                        name: He,
                        namespaceURI: ie,
                        value: ve
                    } = ke,
                    mt = Ue(He);
                let Ye = He === "value" ? ve : H_(ve);
                if (V.attrName = mt, V.attrValue = Ye, V.keepAttr = !0, V.forceKeepAttr = void 0, be("uponSanitizeAttribute", b, V), Ye = V.attrValue, V.forceKeepAttr || (K(He, b), !V.keepAttr)) continue;
                if (!Me && Bt(/\/>/i, Ye)) {
                    K(He, b);
                    continue
                }
                tt && ba([te, ge, pe], Vp => {
                    Ye = Ts(Ye, Vp, " ")
                });
                const ta = Ue(b.nodeName);
                if (ze(ta, mt, Ye)) {
                    if (Xl && (mt === "id" || mt === "name") && (K(He, b), Ye = Lc + Ye), v && typeof x == "object" && typeof x.getAttributeType == "function" && !ie) switch (x.getAttributeType(ta, mt)) {
                        case "TrustedHTML": {
                            Ye = v.createHTML(Ye);
                            break
                        }
                        case "TrustedScriptURL": {
                            Ye = v.createScriptURL(Ye);
                            break
                        }
                    }
                    try {
                        ie ? b.setAttributeNS(ie, He, Ye) : b.setAttribute(He, Ye), Vg(t.removed)
                    } catch {}
                }
            }
            be("afterSanitizeAttributes", b, null)
        },
        Er = function H(b) {
            let A = null;
            const V = Be(b);
            for (be("beforeSanitizeShadowDOM", b, null); A = V.nextNode();) be("uponSanitizeShadowNode", A, null), !Ct(A) && (A.content instanceof o && H(A.content), Qi(A));
            be("afterSanitizeShadowDOM", b, null)
        };
    return t.sanitize = function(H) {
        let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            A = null,
            V = null,
            we = null,
            ke = null;
        if (as = !H, as && (H = "<!-->"), typeof H != "string" && !xe(H))
            if (typeof H.toString == "function") {
                if (H = H.toString(), typeof H != "string") throw Rs("dirty is not a string, aborting")
            } else throw Rs("toString is not a function");
        if (!t.isSupported) return H;
        if (Dt || T(b), t.removed = [], typeof H == "string" && (dn = !1), dn) {
            if (H.nodeName) {
                const ve = Ue(H.nodeName);
                if (!U[ve] || _e[ve]) throw Rs("root node is forbidden and cannot be sanitized in-place")
            }
        } else if (H instanceof l) A = se("<!---->"), V = A.ownerDocument.importNode(H, !0), V.nodeType === 1 && V.nodeName === "BODY" || V.nodeName === "HTML" ? A = V : A.appendChild(V);
        else {
            if (!yr && !tt && !de && H.indexOf("<") === -1) return v && Wi ? v.createHTML(H) : H;
            if (A = se(H), !A) return yr ? null : Wi ? R : ""
        }
        A && Hi && G(A.firstChild);
        const He = Be(dn ? H : A);
        for (; we = He.nextNode();) Ct(we) || (we.content instanceof o && Er(we.content), Qi(we));
        if (dn) return H;
        if (yr) {
            if (Gt)
                for (ke = N.call(A.ownerDocument); A.firstChild;) ke.appendChild(A.firstChild);
            else ke = A;
            return (q.shadowroot || q.shadowrootmode) && (ke = M.call(r, ke, !0)), ke
        }
        let ie = de ? A.outerHTML : A.innerHTML;
        return de && U["!doctype"] && A.ownerDocument && A.ownerDocument.doctype && A.ownerDocument.doctype.name && Bt(p1, A.ownerDocument.doctype.name) && (ie = "<!DOCTYPE " + A.ownerDocument.doctype.name + `>
` + ie), tt && ba([te, ge, pe], ve => {
            ie = Ts(ie, ve, " ")
        }), v && Wi ? v.createHTML(ie) : ie
    }, t.setConfig = function() {
        let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        T(H), Dt = !0
    }, t.clearConfig = function() {
        xr = null, Dt = !1
    }, t.isValidAttribute = function(H, b, A) {
        xr || T({});
        const V = Ue(H),
            we = Ue(b);
        return ze(V, we, A)
    }, t.addHook = function(H, b) {
        typeof b == "function" && (B[H] = B[H] || [], Cs(B[H], b))
    }, t.removeHook = function(H) {
        if (B[H]) return Vg(B[H])
    }, t.removeHooks = function(H) {
        B[H] && (B[H] = [])
    }, t.removeAllHooks = function() {
        B = {}
    }, t
}
var g1 = m1();

function nP({
    author: e,
    title: t,
    loading: n,
    breadcrumb: r
}) {
    function i() {
        return n ? d.jsxs("div", {
            children: [d.jsx("div", {
                className: "mb-2 h-6 w-4/5 rounded-full bg-slate-300"
            }), d.jsx("div", {
                className: "mb-6 h-6 w-3/5 rounded-full bg-slate-300"
            })]
        }) : d.jsx("h1", {
            className: "mb-4 text-2xl font-bold text-slate-700",
            children: t
        })
    }
    return d.jsxs("div", {
        className: "c-content-header",
        children: [d.jsx(F_, {
            loading: n,
            items: r
        }), d.jsxs("div", {
            className: "",
            children: [i(), d.jsx(ui, {
                loading: n,
                title: e == null ? void 0 : e.title,
                subtitle: e == null ? void 0 : e.subtitle,
                image: e == null ? void 0 : e.image
            }), d.jsx("div", {
                className: "mb-4"
            }), d.jsx("div", {
                className: "mb-8 border-b border-slate-300"
            })]
        })]
    })
}
const rP = L.memo(nP);

function iP({
    title: e,
    author: t,
    breadcrumb: n,
    loading: r,
    content: i
}) {
    return d.jsx("div", {
        className: "c-content",
        children: d.jsxs(Tn, {
            className: "px-6",
            children: [d.jsx(rP, {
                loading: r,
                breadcrumb: n,
                title: e,
                author: t
            }), r ? d.jsxs("div", {
                children: [d.jsx("div", {
                    className: "mb-6 h-0 w-full rounded-2xl bg-slate-300 pb-[62.5%]"
                }), d.jsx("div", {
                    className: "mb-4 h-6 w-8/12 rounded-full bg-slate-300"
                }), d.jsx("div", {
                    className: "mb-4 h-4 w-full rounded-full bg-slate-300"
                }), d.jsx("div", {
                    className: "mb-4 h-4 w-9/12 rounded-full bg-slate-300"
                })]
            }) : d.jsx("div", {
                className: "c-content-body inner-html mb-14",
                dangerouslySetInnerHTML: {
                    __html: g1.sanitize(i)
                }
            })]
        })
    })
}
const oP = L.memo(iP);

function sP({
    title: e,
    subtitle: t,
    image: n,
    url: r,
    className: i,
    loading: o
}) {
    const s = L.useMemo(() => Re("c-list-item", "mb-2 block border border-slate-300 px-2 py-2 text-slate-700 duration-150 hover:bg-slate-700 hover:text-white", i), [i]);

    function l() {
        return d.jsxs("div", {
            className: "flex gap-2",
            children: [n && d.jsx(Hn, {
                src: n,
                alt: e,
                className: "h-10 w-10 overflow-hidden rounded-md"
            }), d.jsxs("div", {
                className: "flex-1",
                children: [e && d.jsx("h3", {
                    className: "text-xs font-semibold",
                    children: e
                }), t && d.jsx("p", {
                    className: "text-xs",
                    children: t
                })]
            })]
        })
    }
    return o ? d.jsxs("div", {
        className: "mb-4",
        children: [d.jsx("div", {
            className: "mb-2 h-4 w-full rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "h-4 w-8/12 rounded-full bg-slate-300"
        })]
    }) : r ? d.jsx(Ot, {
        to: r,
        className: s,
        children: l()
    }) : d.jsx("div", {
        className: s,
        children: l()
    })
}
const Xg = L.memo(sP);
var Br = (e => (e.search = "search", e.menu = "menu", e.link = "link", e.reply = "reply", e))(Br || {});

function lP({
    id: e,
    author: t,
    content: n,
    date: r,
    replies: i,
    reply: o
}) {
    const s = g.useMemo(() => Re("c-comment", "group/comment mb-6 border border-slate-300 p-4", o ? "border-0" : ""), [o]),
        l = () => !i || i.length === 0 ? null : d.jsx("div", {
            className: "c-comment-replies",
            children: i == null ? void 0 : i.map(a => {
                const c = ns(a.author);
                return d.jsx(y1, {
                    reply: !0,
                    id: a.id,
                    author: {
                        name: c.title,
                        image: c.image
                    },
                    content: a.content,
                    date: ts(a.published, "Commented on MMM DD, YYYY"),
                    replies: a.replies
                }, a.id)
            })
        });
    return d.jsxs("div", {
        id: e,
        className: s,
        children: [d.jsxs("div", {
            className: "c-comment-header mb-4 flex justify-between",
            children: [d.jsx("div", {
                className: "c-comment-author",
                children: d.jsx(ui, {
                    title: t.name,
                    image: t.image,
                    subtitle: r,
                    anchor: e
                })
            }), d.jsx("div", {
                className: "c-comment-header-action ",
                children: d.jsx("div", {
                    className: "",
                    children: d.jsx(TO, {
                        items: [{
                            id: 1,
                            title: "Report",
                            onClick: () => {}
                        }, {
                            id: 2,
                            title: "Copy Link",
                            url: "#"
                        }],
                        children: d.jsx(Iu, {
                            name: Br.menu,
                            className: "!text-slate-700"
                        })
                    })
                })
            })]
        }), d.jsx("div", {
            className: "c-comment-body pb-6",
            children: n && d.jsx("div", {
                className: "c-comment-item-content inner-html small-text",
                dangerouslySetInnerHTML: {
                    __html: g1.sanitize(n)
                }
            })
        }), d.jsx("div", {
            className: "c-comment-footer",
            children: d.jsx(Du, {
                className: "group/cta text-xs text-slate-700 hover:text-sky-600",
                icon: d.jsx(Iu, {
                    name: Br.reply,
                    className: "text-sm !text-slate-700 group-hover/cta:!text-sky-600"
                }),
                children: "Reply"
            })
        }), l()]
    })
}
const y1 = L.memo(lP);
var aP = Object.defineProperty,
    uP = (e, t, n) => t in e ? aP(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Tf = (e, t, n) => (uP(e, typeof t != "symbol" ? t + "" : t, n), n);
let cP = class {
        constructor() {
            Tf(this, "current", this.detect()), Tf(this, "handoffState", "pending"), Tf(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    ir = new cP,
    lt = (e, t) => {
        ir.isServer ? g.useEffect(e, t) : g.useLayoutEffect(e, t)
    };

function or(e) {
    let t = g.useRef(e);
    return lt(() => {
        t.current = e
    }, [e]), t
}

function Sc(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function _n() {
    let e = [],
        t = {
            addEventListener(n, r, i, o) {
                return n.addEventListener(r, i, o), t.add(() => n.removeEventListener(r, i, o))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return Sc(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, i) {
                let o = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: i
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: o
                    })
                })
            },
            group(n) {
                let r = _n();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let i of e.splice(r, 1)) i()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}

function ql() {
    let [e] = g.useState(_n);
    return g.useEffect(() => () => e.dispose(), [e]), e
}
let ae = function(e) {
    let t = or(e);
    return L.useCallback((...n) => t.current(...n), [t])
};

function fP() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in Fo ? (t => t.useSyncExternalStore)(Fo)(() => () => {}, () => !1, () => !e) : !1
}

function is() {
    let e = fP(),
        [t, n] = g.useState(ir.isHandoffComplete);
    return t && ir.isHandoffComplete === !1 && n(!1), g.useEffect(() => {
        t !== !0 && n(!0)
    }, [t]), g.useEffect(() => ir.handoff(), []), e ? !1 : t
}
var Jg;
let gr = (Jg = L.useId) != null ? Jg : function() {
    let e = is(),
        [t, n] = L.useState(e ? () => ir.nextId() : null);
    return lt(() => {
        t === null && n(ir.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function ot(e, t, ...n) {
    if (e in t) {
        let i = t[e];
        return typeof i == "function" ? i(...n) : i
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ot), r
}

function bc(e) {
    return ir.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let lh = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var Zn = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(Zn || {}),
    v1 = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(v1 || {}),
    dP = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(dP || {});

function w1(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(lh)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var Mp = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Mp || {});

function Ip(e, t = 0) {
    var n;
    return e === ((n = bc(e)) == null ? void 0 : n.body) ? !1 : ot(t, {
        0() {
            return e.matches(lh)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(lh)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}

function x1(e) {
    let t = bc(e);
    _n().nextFrame(() => {
        t && !Ip(t.activeElement, 0) && Jr(e)
    })
}
var hP = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(hP || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function Jr(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let pP = ["textarea", "input"].join(",");

function mP(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, pP)) != null ? n : !1
}

function E1(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let i = t(n),
            o = t(r);
        if (i === null || o === null) return 0;
        let s = i.compareDocumentPosition(o);
        return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function gP(e, t) {
    return Ys(w1(), t, {
        relativeTo: e
    })
}

function Ys(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: i = []
} = {}) {
    let o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        s = Array.isArray(e) ? n ? E1(e) : e : w1(e);
    i.length > 0 && s.length > 1 && (s = s.filter(x => !i.includes(x))), r = r ?? o.activeElement;
    let l = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),

        a = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, s.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, s.indexOf(r)) + 1;
            if (t & 8) return s.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        c = t & 32 ? {
            preventScroll: !0
        } : {},
        u = 0,
        f = s.length,
        h;
    do {
        if (u >= f || u + f <= 0) return 0;
        let x = a + u;
        if (t & 16) x = (x + f) % f;
        else {
            if (x < 0) return 3;
            if (x >= f) return 1
        }
        h = s[x], h == null || h.focus(c), u += l
    } while (h !== o.activeElement);
    return t & 6 && mP(h) && h.select(), 2
}

function Ra(e, t, n) {
    let r = or(t);
    g.useEffect(() => {
        function i(o) {
            r.current(o)
        }
        return document.addEventListener(e, i, n), () => document.removeEventListener(e, i, n)
    }, [e, n])
}

function S1(e, t, n) {
    let r = or(t);
    g.useEffect(() => {
        function i(o) {
            r.current(o)
        }
        return window.addEventListener(e, i, n), () => window.removeEventListener(e, i, n)
    }, [e, n])
}

function b1(e, t, n = !0) {
    let r = g.useRef(!1);
    g.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function i(s, l) {
        if (!r.current || s.defaultPrevented) return;
        let a = l(s);
        if (a === null || !a.getRootNode().contains(a) || !a.isConnected) return;
        let c = function u(f) {
            return typeof f == "function" ? u(f()) : Array.isArray(f) || f instanceof Set ? f : [f]
        }(e);
        for (let u of c) {
            if (u === null) continue;
            let f = u instanceof HTMLElement ? u : u.current;
            if (f != null && f.contains(a) || s.composed && s.composedPath().includes(f)) return
        }
        return !Ip(a, Mp.Loose) && a.tabIndex !== -1 && s.preventDefault(), t(s, a)
    }
    let o = g.useRef(null);
    Ra("pointerdown", s => {
        var l, a;
        r.current && (o.current = ((a = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : a[0]) || s.target)
    }, !0), Ra("mousedown", s => {
        var l, a;
        r.current && (o.current = ((a = (l = s.composedPath) == null ? void 0 : l.call(s)) == null ? void 0 : a[0]) || s.target)
    }, !0), Ra("click", s => {
        o.current && (i(s, () => o.current), o.current = null)
    }, !0), Ra("touchend", s => i(s, () => s.target instanceof HTMLElement ? s.target : null), !0), S1("blur", s => i(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function Zg(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function yP(e, t) {
    let [n, r] = g.useState(() => Zg(e));
    return lt(() => {
        r(Zg(e))
    }, [e.type, e.as]), lt(() => {
        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
    }, [n, t]), n
}
let C1 = Symbol();

function vP(e, t = !0) {
    return Object.assign(e, {
        [C1]: t
    })
}

function kt(...e) {
    let t = g.useRef(e);
    g.useEffect(() => {
        t.current = e
    }, [e]);
    let n = ae(r => {
        for (let i of t.current) i != null && (typeof i == "function" ? i(r) : i.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[C1])) ? void 0 : n
}

function wP({
    container: e,
    accept: t,
    walk: n,
    enabled: r = !0
}) {
    let i = g.useRef(t),
        o = g.useRef(n);
    g.useEffect(() => {
        i.current = t, o.current = n
    }, [t, n]), lt(() => {
        if (!e || !r) return;
        let s = bc(e);
        if (!s) return;
        let l = i.current,
            a = o.current,
            c = Object.assign(f => l(f), {
                acceptNode: l
            }),
            u = s.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, c, !1);
        for (; u.nextNode();) a(u.currentNode)
    }, [e, r, i, o])
}

function xP(e) {
    throw new Error("Unexpected object: " + e)
}
var xn = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(xn || {});

function EP(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0) return null;
    let r = t.resolveActiveIndex(),
        i = r ?? -1,
        o = (() => {
            switch (e.focus) {
                case 0:
                    return n.findIndex(s => !t.resolveDisabled(s));
                case 1: {
                    let s = n.slice().reverse().findIndex((l, a, c) => i !== -1 && c.length - a - 1 >= i ? !1 : !t.resolveDisabled(l));
                    return s === -1 ? s : n.length - 1 - s
                }
                case 2:
                    return n.findIndex((s, l) => l <= i ? !1 : !t.resolveDisabled(s));
                case 3: {
                    let s = n.slice().reverse().findIndex(l => !t.resolveDisabled(l));
                    return s === -1 ? s : n.length - 1 - s
                }
                case 4:
                    return n.findIndex(s => t.resolveId(s) === e.id);
                case 5:
                    return null;
                default:
                    xP(e)
            }
        })();
    return o === -1 ? r : o
}

function ju(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var Go = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Go || {}),
    zr = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(zr || {});

function Et({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: i,
    visible: o = !0,
    name: s
}) {
    let l = T1(t, e);
    if (o) return _a(l, n, r, s);
    let a = i ?? 0;
    if (a & 2) {
        let {
            static: c = !1,
            ...u
        } = l;
        if (c) return _a(u, n, r, s)
    }
    if (a & 1) {
        let {
            unmount: c = !0,
            ...u
        } = l;
        return ot(c ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return _a({
                    ...u,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, s)
            }
        })
    }
    return _a(l, n, r, s)
}

function _a(e, t = {}, n, r) {
    let {
        as: i = n,
        children: o,
        refName: s = "ref",
        ...l
    } = Rf(e, ["unmount", "static"]), a = e.ref !== void 0 ? {
        [s]: e.ref
    } : {}, c = typeof o == "function" ? o(t) : o;
    "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(t));
    let u = {};
    if (t) {
        let f = !1,
            h = [];
        for (let [x, y] of Object.entries(t)) typeof y == "boolean" && (f = !0), y === !0 && h.push(x);
        f && (u["data-headlessui-state"] = h.join(" "))
    }
    if (i === g.Fragment && Object.keys(ey(l)).length > 0) {
        if (!g.isValidElement(c) || Array.isArray(c) && c.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map(y => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(y => `  - ${y}`).join(`
`)].join(`
`));
        let f = c.props,
            h = typeof(f == null ? void 0 : f.className) == "function" ? (...y) => ju(f == null ? void 0 : f.className(...y), l.className) : ju(f == null ? void 0 : f.className, l.className),
            x = h ? {
                className: h
            } : {};
        return g.cloneElement(c, Object.assign({}, T1(c.props, ey(Rf(l, ["ref"]))), u, a, SP(c.ref, a.ref), x))
    }
    return g.createElement(i, Object.assign({}, Rf(l, ["ref"]), i !== g.Fragment && a, i !== g.Fragment && u), c)
}

function SP(...e) {
    return {
        ref: e.every(t => t == null) ? void 0 : t => {
            for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
        }
    }
}

function T1(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let i in r) i.startsWith("on") && typeof r[i] == "function" ? (n[i] != null || (n[i] = []), n[i].push(r[i])) : t[i] = r[i];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](i, ...o) {
            let s = n[r];
            for (let l of s) {
                if ((i instanceof Event || (i == null ? void 0 : i.nativeEvent) instanceof Event) && i.defaultPrevented) return;
                l(i, ...o)
            }
        }
    });
    return t
}

function pt(e) {
    var t;
    return Object.assign(g.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function ey(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function Rf(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}

function R1(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && bP(n) ? !1 : r
}

function bP(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}
let CP = "div";
var Au = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Au || {});

function TP(e, t) {
    let {
        features: n = 1,
        ...r
    } = e, i = {
        ref: t,
        "aria-hidden": (n & 2) === 2 ? !0 : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(n & 4) === 4 && (n & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return Et({
        ourProps: i,
        theirProps: r,
        slot: {},
        defaultTag: CP,
        name: "Hidden"
    })
}
let ah = pt(TP),
    Fp = g.createContext(null);
Fp.displayName = "OpenClosedContext";
var ft = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ft || {});

function Cc() {
    return g.useContext(Fp)
}

function _1({
    value: e,
    children: t
}) {
    return L.createElement(Fp.Provider, {
        value: e
    }, t)
}
var rt = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(rt || {});

function $p(e, t) {
    let n = g.useRef([]),
        r = ae(e);
    g.useEffect(() => {
        let i = [...n.current];
        for (let [o, s] of t.entries())
            if (n.current[o] !== s) {
                let l = r(t, i);
                return n.current = t, l
            }
    }, [r, ...t])
}

function ty(e) {
    return [e.screenX, e.screenY]
}

function RP() {
    let e = g.useRef([-1, -1]);
    return {
        wasMoved(t) {
            let n = ty(t);
            return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0)
        },
        update(t) {
            e.current = ty(t)
        }
    }
}

function _P() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function os(...e) {
    return g.useMemo(() => bc(...e), [...e])
}
var Fs = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Fs || {});

function PP() {
    let e = g.useRef(0);
    return S1("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function Ql() {
    let e = g.useRef(!1);
    return lt(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function P1(e, t, n, r) {
    let i = or(n);
    g.useEffect(() => {
        e = e ?? window;

        function o(s) {
            i.current(s)
        }
        return e.addEventListener(t, o, r), () => e.removeEventListener(t, o, r)
    }, [e, t, r])
}

function NP(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}

function N1(e) {
    let t = ae(e),
        n = g.useRef(!1);
    g.useEffect(() => (n.current = !1, () => {
        n.current = !0, Sc(() => {
            n.current && t()
        })
    }), [t])
}

function O1(e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let OP = "div";
var k1 = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(k1 || {});

function kP(e, t) {
    let n = g.useRef(null),
        r = kt(n, t),
        {
            initialFocus: i,
            containers: o,
            features: s = 30,
            ...l
        } = e;
    is() || (s = 1);
    let a = os(n);
    jP({
        ownerDocument: a
    }, !!(s & 16));
    let c = AP({
        ownerDocument: a,
        container: n,
        initialFocus: i
    }, !!(s & 2));
    MP({
        ownerDocument: a,
        container: n,
        containers: o,
        previousActiveElement: c
    }, !!(s & 8));
    let u = PP(),
        f = ae(w => {
            let E = n.current;
            E && (m => m())(() => {
                ot(u.current, {
                    [Fs.Forwards]: () => {
                        Ys(E, Zn.First, {
                            skipElements: [w.relatedTarget]
                        })
                    },
                    [Fs.Backwards]: () => {
                        Ys(E, Zn.Last, {
                            skipElements: [w.relatedTarget]
                        })
                    }
                })
            })
        }),
        h = ql(),
        x = g.useRef(!1),
        y = {
            ref: r,
            onKeyDown(w) {
                w.key == "Tab" && (x.current = !0, h.requestAnimationFrame(() => {
                    x.current = !1
                }))
            },
            onBlur(w) {
                let E = O1(o);
                n.current instanceof HTMLElement && E.add(n.current);
                let m = w.relatedTarget;
                m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (D1(E, m) || (x.current ? Ys(n.current, ot(u.current, {
                    [Fs.Forwards]: () => Zn.Next,
                    [Fs.Backwards]: () => Zn.Previous
                }) | Zn.WrapAround, {
                    relativeTo: w.target
                }) : w.target instanceof HTMLElement && Jr(w.target)))
            }
        };
    return L.createElement(L.Fragment, null, !!(s & 4) && L.createElement(ah, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: Au.Focusable
    }), Et({
        ourProps: y,
        theirProps: l,
        defaultTag: OP,
        name: "FocusTrap"
    }), !!(s & 4) && L.createElement(ah, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: f,
        features: Au.Focusable
    }))
}
let DP = pt(kP),
    _s = Object.assign(DP, {
        features: k1
    }),
    kr = [];
NP(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && kr[0] !== t.target && (kr.unshift(t.target), kr = kr.filter(n => n != null && n.isConnected), kr.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function LP(e = !0) {
    let t = g.useRef(kr.slice());
    return $p(([n], [r]) => {
        r === !0 && n === !1 && Sc(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = kr.slice())
    }, [e, kr, t]), ae(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function jP({
    ownerDocument: e
}, t) {
    let n = LP(t);
    $p(() => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Jr(n())
    }, [t]), N1(() => {
        t && Jr(n())
    })
}

function AP({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let i = g.useRef(null),
        o = Ql();
    return $p(() => {
        if (!r) return;
        let s = t.current;
        s && Sc(() => {
            if (!o.current) return;
            let l = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === l) {
                    i.current = l;
                    return
                }
            } else if (s.contains(l)) {
                i.current = l;
                return
            }
            n != null && n.current ? Jr(n.current) : Ys(s, Zn.First) === v1.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = e == null ? void 0 : e.activeElement
        })
    }, [r]), i
}

function MP({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, i) {
    let o = Ql();
    P1(e == null ? void 0 : e.defaultView, "focus", s => {
        if (!i || !o.current) return;
        let l = O1(n);
        t.current instanceof HTMLElement && l.add(t.current);
        let a = r.current;
        if (!a) return;
        let c = s.target;
        c && c instanceof HTMLElement ? D1(l, c) ? (r.current = c, Jr(c)) : (s.preventDefault(), s.stopPropagation(), Jr(a)) : Jr(r.current)
    }, !0)
}

function D1(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let L1 = g.createContext(!1);

function IP() {
    return g.useContext(L1)
}

function uh(e) {
    return L.createElement(L1.Provider, {
        value: e.force
    }, e.children)
}

function FP(e) {
    let t = IP(),
        n = g.useContext(j1),
        r = os(e),
        [i, o] = g.useState(() => {
            if (!t && n !== null || ir.isServer) return null;
            let s = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (s) return s;
            if (r === null) return null;
            let l = r.createElement("div");
            return l.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(l)
        });
    return g.useEffect(() => {
        i !== null && (r != null && r.body.contains(i) || r == null || r.body.appendChild(i))
    }, [i, r]), g.useEffect(() => {
        t || n !== null && o(n.current)
    }, [n, o, t]), i
}
let $P = g.Fragment;

function UP(e, t) {
    let n = e,
        r = g.useRef(null),
        i = kt(vP(u => {
            r.current = u
        }), t),
        o = os(r),
        s = FP(r),
        [l] = g.useState(() => {
            var u;
            return ir.isServer ? null : (u = o == null ? void 0 : o.createElement("div")) != null ? u : null
        }),
        a = g.useContext(ch),
        c = is();
    return lt(() => {
        !s || !l || s.contains(l) || (l.setAttribute("data-headlessui-portal", ""), s.appendChild(l))
    }, [s, l]), lt(() => {
        if (l && a) return a.register(l)
    }, [a, l]), N1(() => {
        var u;
        !s || !l || (l instanceof Node && s.contains(l) && s.removeChild(l), s.childNodes.length <= 0 && ((u = s.parentElement) == null || u.removeChild(s)))
    }), c ? !s || !l ? null : lc.createPortal(Et({
        ourProps: {
            ref: i
        },
        theirProps: n,
        defaultTag: $P,
        name: "Portal"
    }), l) : null
}
let BP = g.Fragment,
    j1 = g.createContext(null);

function zP(e, t) {
    let {
        target: n,
        ...r
    } = e, i = {
        ref: kt(t)
    };
    return L.createElement(j1.Provider, {
        value: n
    }, Et({
        ourProps: i,
        theirProps: r,
        defaultTag: BP,
        name: "Popover.Group"
    }))
}
let ch = g.createContext(null);

function HP() {
    let e = g.useContext(ch),
        t = g.useRef([]),
        n = ae(o => (t.current.push(o), e && e.register(o), () => r(o))),
        r = ae(o => {
            let s = t.current.indexOf(o);
            s !== -1 && t.current.splice(s, 1), e && e.unregister(o)
        }),
        i = g.useMemo(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, g.useMemo(() => function({
        children: o
    }) {
        return L.createElement(ch.Provider, {
            value: i
        }, o)
    }, [i])]
}
let WP = pt(UP),
    VP = pt(zP),
    fh = Object.assign(WP, {
        Group: VP
    }),
    A1 = g.createContext(null);

function M1() {
    let e = g.useContext(A1);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, M1), t
    }
    return e
}

function qP() {
    let [e, t] = g.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, g.useMemo(() => function(n) {
        let r = ae(o => (t(s => [...s, o]), () => t(s => {
                let l = s.slice(),
                    a = l.indexOf(o);
                return a !== -1 && l.splice(a, 1), l
            }))),
            i = g.useMemo(() => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props
            }), [r, n.slot, n.name, n.props]);
        return L.createElement(A1.Provider, {
            value: i
        }, n.children)
    }, [t])]
}
let QP = "p";

function KP(e, t) {
    let n = gr(),
        {
            id: r = `headlessui-description-${n}`,
            ...i
        } = e,
        o = M1(),
        s = kt(t);
    lt(() => o.register(r), [r, o.register]);
    let l = {
        ref: s,
        ...o.props,
        id: r
    };
    return Et({
        ourProps: l,
        theirProps: i,
        slot: o.slot || {},
        defaultTag: QP,
        name: o.name || "Description"
    })
}
let GP = pt(KP),
    YP = Object.assign(GP, {}),
    Up = g.createContext(() => {});
Up.displayName = "StackContext";
var dh = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(dh || {});

function XP() {
    return g.useContext(Up)
}

function JP({
    children: e,
    onUpdate: t,
    type: n,
    element: r,
    enabled: i
}) {
    let o = XP(),
        s = ae((...l) => {
            t == null || t(...l), o(...l)
        });
    return lt(() => {
        let l = i === void 0 || i === !0;
        return l && s(0, n, r), () => {
            l && s(1, n, r)
        }
    }, [s, n, r, i]), L.createElement(Up.Provider, {
        value: s
    }, e)
}

function ZP(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const eN = typeof Object.is == "function" ? Object.is : ZP,
    {
        useState: tN,
        useEffect: nN,
        useLayoutEffect: rN,
        useDebugValue: iN
    } = Fo;

function oN(e, t, n) {
    const r = t(),
        [{
            inst: i
        }, o] = tN({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return rN(() => {
        i.value = r, i.getSnapshot = t, _f(i) && o({
            inst: i
        })
    }, [e, r, t]), nN(() => (_f(i) && o({
        inst: i
    }), e(() => {
        _f(i) && o({
            inst: i
        })
    })), [e]), iN(r), r
}

function _f(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !eN(n, r)
    } catch {
        return !0
    }
}

function sN(e, t, n) {
    return t()
}
const lN = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    aN = !lN,
    uN = aN ? sN : oN,
    cN = "useSyncExternalStore" in Fo ? (e => e.useSyncExternalStore)(Fo) : uN;

function fN(e) {
    return cN(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function dN(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(i) {
            return r.add(i), () => r.delete(i)
        },
        dispatch(i, ...o) {
            let s = t[i].call(n, ...o);
            s && (n = s, r.forEach(l => l()))
        }
    }
}

function hN() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                i = r.clientWidth - r.offsetWidth,
                o = e - i;
            n.style(r, "paddingRight", `${o}px`)
        }
    }
}

function pN() {
    if (!_P()) return {};
    let e;
    return {
        before() {
            e = window.pageYOffset
        },
        after({
            doc: t,
            d: n,
            meta: r
        }) {
            function i(o) {
                return r.containers.flatMap(s => s()).some(s => s.contains(o))
            }
            n.microTask(() => {
                if (window.getComputedStyle(t.documentElement).scrollBehavior !== "auto") {
                    let s = _n();
                    s.style(t.documentElement, "scroll-behavior", "auto"), n.add(() => n.microTask(() => s.dispose()))
                }
                n.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
                let o = null;
                n.addEventListener(t, "click", s => {
                    if (s.target instanceof HTMLElement) try {
                        let l = s.target.closest("a");
                        if (!l) return;
                        let {
                            hash: a

                        } = new URL(l.href), c = t.querySelector(a);
                        c && !i(c) && (o = c)
                    } catch {}
                }, !0), n.addEventListener(t, "touchmove", s => {
                    s.target instanceof HTMLElement && !i(s.target) && s.preventDefault()
                }, {
                    passive: !1
                }), n.add(() => {
                    window.scrollTo(0, window.pageYOffset + e), o && o.isConnected && (o.scrollIntoView({
                        block: "nearest"
                    }), o = null)
                })
            })
        }
    }
}

function mN() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function gN(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let xi = dN(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: _n(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: gN(n)
            },
            i = [pN(), hN(), mN()];
        i.forEach(({
            before: o
        }) => o == null ? void 0 : o(r)), i.forEach(({
            after: o
        }) => o == null ? void 0 : o(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
xi.subscribe(() => {
    let e = xi.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            i = n.count !== 0;
        (i && !r || !i && r) && xi.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && xi.dispatch("TEARDOWN", n)
    }
});

function yN(e, t, n) {
    let r = fN(xi),
        i = e ? r.get(e) : void 0,
        o = i ? i.count > 0 : !1;
    return lt(() => {
        if (!(!e || !t)) return xi.dispatch("PUSH", e, n), () => xi.dispatch("POP", e, n)
    }, [t, e]), o
}
let Pf = new Map,
    Ps = new Map;

function ny(e, t = !0) {
    lt(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;

        function i() {
            var s;
            if (!r) return;
            let l = (s = Ps.get(r)) != null ? s : 1;
            if (l === 1 ? Ps.delete(r) : Ps.set(r, l - 1), l !== 1) return;
            let a = Pf.get(r);
            a && (a["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", a["aria-hidden"]), r.inert = a.inert, Pf.delete(r))
        }
        let o = (n = Ps.get(r)) != null ? n : 0;
        return Ps.set(r, o + 1), o !== 0 || (Pf.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }), r.setAttribute("aria-hidden", "true"), r.inert = !0), i
    }, [e, t])
}

function vN({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n
} = {}) {
    var r;
    let i = g.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
        o = os(i),
        s = ae(() => {
            var l;
            let a = [];
            for (let c of e) c !== null && (c instanceof HTMLElement ? a.push(c) : "current" in c && c.current instanceof HTMLElement && a.push(c.current));
            if (t != null && t.current)
                for (let c of t.current) a.push(c);
            for (let c of (l = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? l : []) c !== document.body && c !== document.head && c instanceof HTMLElement && c.id !== "headlessui-portal-root" && (c.contains(i.current) || a.some(u => c.contains(u)) || a.push(c));
            return a
        });
    return {
        resolveContainers: s,
        contains: ae(l => s().some(a => a.contains(l))),
        mainTreeNodeRef: i,
        MainTreeNode: g.useMemo(() => function() {
            return n != null ? null : L.createElement(ah, {
                features: Au.Hidden,
                ref: i
            })
        }, [i, n])
    }
}
var wN = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(wN || {}),
    xN = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(xN || {});
let EN = {
        0(e, t) {
            return e.titleId === t.id ? e : {
                ...e,
                titleId: t.id
            }
        }
    },
    Mu = g.createContext(null);
Mu.displayName = "DialogContext";

function Kl(e) {
    let t = g.useContext(Mu);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Kl), n
    }
    return t
}

function SN(e, t, n = () => [document.body]) {
    yN(e, t, r => {
        var i;
        return {
            containers: [...(i = r.containers) != null ? i : [], n]
        }
    })
}

function bN(e, t) {
    return ot(t.type, EN, e, t)
}
let CN = "div",
    TN = Go.RenderStrategy | Go.Static;

function RN(e, t) {
    var n;
    let r = gr(),
        {
            id: i = `headlessui-dialog-${r}`,
            open: o,
            onClose: s,
            initialFocus: l,
            __demoMode: a = !1,
            ...c
        } = e,
        [u, f] = g.useState(0),
        h = Cc();
    o === void 0 && h !== null && (o = (h & ft.Open) === ft.Open);
    let x = g.useRef(null),
        y = kt(x, t),
        w = os(x),
        E = e.hasOwnProperty("open") || h !== null,
        m = e.hasOwnProperty("onClose");
    if (!E && !m) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!E) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!m) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof o != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
    if (typeof s != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${s}`);
    let p = o ? 0 : 1,
        [v, R] = g.useReducer(bN, {
            titleId: null,
            descriptionId: null,
            panelRef: g.createRef()
        }),
        P = ae(() => s(!1)),
        S = ae(Me => R({
            type: 0,
            id: Me
        })),
        N = is() ? a ? !1 : p === 0 : !1,
        D = u > 1,
        M = g.useContext(Mu) !== null,
        [B, te] = HP(),
        {
            resolveContainers: ge,
            mainTreeNodeRef: pe,
            MainTreeNode: et
        } = vN({
            portals: B,
            defaultContainers: [(n = v.panelRef.current) != null ? n : x.current]
        }),
        $t = D ? "parent" : "leaf",
        St = h !== null ? (h & ft.Closing) === ft.Closing : !1,
        ce = (() => M || St ? !1 : N)(),
        F = g.useCallback(() => {
            var Me, tt;
            return (tt = Array.from((Me = w == null ? void 0 : w.querySelectorAll("body > *")) != null ? Me : []).find(de => de.id === "headlessui-portal-root" ? !1 : de.contains(pe.current) && de instanceof HTMLElement)) != null ? tt : null
        }, [pe]);
    ny(F, ce);
    let U = (() => D ? !0 : N)(),
        Y = g.useCallback(() => {
            var Me, tt;
            return (tt = Array.from((Me = w == null ? void 0 : w.querySelectorAll("[data-headlessui-portal]")) != null ? Me : []).find(de => de.contains(pe.current) && de instanceof HTMLElement)) != null ? tt : null
        }, [pe]);
    ny(Y, U);
    let q = (() => !(!N || D))();
    b1(ge, P, q);
    let ye = (() => !(D || p !== 0))();
    P1(w == null ? void 0 : w.defaultView, "keydown", Me => {
        ye && (Me.defaultPrevented || Me.key === rt.Escape && (Me.preventDefault(), Me.stopPropagation(), P()))
    });
    let ee = (() => !(St || p !== 0 || M))();
    SN(w, ee, ge), g.useEffect(() => {
        if (p !== 0 || !x.current) return;
        let Me = new ResizeObserver(tt => {
            for (let de of tt) {
                let Dt = de.target.getBoundingClientRect();
                Dt.x === 0 && Dt.y === 0 && Dt.width === 0 && Dt.height === 0 && P()
            }
        });
        return Me.observe(x.current), () => Me.disconnect()
    }, [p, x, P]);
    let [_e, at] = qP(), Qe = g.useMemo(() => [{
        dialogState: p,
        close: P,
        setTitleId: S
    }, v], [p, v, P, S]), bt = g.useMemo(() => ({
        open: p === 0
    }), [p]), zi = {
        ref: y,
        id: i,
        role: "dialog",
        "aria-modal": p === 0 ? !0 : void 0,
        "aria-labelledby": v.titleId,
        "aria-describedby": _e
    };
    return L.createElement(JP, {
        type: "Dialog",
        enabled: p === 0,
        element: x,
        onUpdate: ae((Me, tt) => {
            tt === "Dialog" && ot(Me, {
                [dh.Add]: () => f(de => de + 1),
                [dh.Remove]: () => f(de => de - 1)
            })
        })
    }, L.createElement(uh, {
        force: !0
    }, L.createElement(fh, null, L.createElement(Mu.Provider, {
        value: Qe
    }, L.createElement(fh.Group, {
        target: x
    }, L.createElement(uh, {
        force: !1
    }, L.createElement(at, {
        slot: bt,
        name: "Dialog.Description"
    }, L.createElement(_s, {
        initialFocus: l,
        containers: ge,
        features: N ? ot($t, {
            parent: _s.features.RestoreFocus,
            leaf: _s.features.All & ~_s.features.FocusLock
        }) : _s.features.None
    }, L.createElement(te, null, Et({
        ourProps: zi,
        theirProps: c,
        slot: bt,
        defaultTag: CN,
        features: TN,
        visible: p === 0,
        name: "Dialog"
    }))))))))), L.createElement(et, null))
}
let _N = "div";

function PN(e, t) {
    let n = gr(),
        {
            id: r = `headlessui-dialog-overlay-${n}`,
            ...i
        } = e,
        [{
            dialogState: o,
            close: s
        }] = Kl("Dialog.Overlay"),
        l = kt(t),
        a = ae(u => {
            if (u.target === u.currentTarget) {
                if (R1(u.currentTarget)) return u.preventDefault();
                u.preventDefault(), u.stopPropagation(), s()
            }
        }),
        c = g.useMemo(() => ({
            open: o === 0
        }), [o]);
    return Et({
        ourProps: {
            ref: l,
            id: r,
            "aria-hidden": !0,
            onClick: a
        },
        theirProps: i,
        slot: c,
        defaultTag: _N,
        name: "Dialog.Overlay"
    })
}
let NN = "div";

function ON(e, t) {
    let n = gr(),
        {
            id: r = `headlessui-dialog-backdrop-${n}`,
            ...i
        } = e,
        [{
            dialogState: o
        }, s] = Kl("Dialog.Backdrop"),
        l = kt(t);
    g.useEffect(() => {
        if (s.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [s.panelRef]);
    let a = g.useMemo(() => ({
        open: o === 0
    }), [o]);
    return L.createElement(uh, {
        force: !0
    }, L.createElement(fh, null, Et({
        ourProps: {
            ref: l,
            id: r,
            "aria-hidden": !0
        },
        theirProps: i,
        slot: a,
        defaultTag: NN,
        name: "Dialog.Backdrop"
    })))
}
let kN = "div";

function DN(e, t) {

    let n = gr(),
        {
            id: r = `headlessui-dialog-panel-${n}`,
            ...i
        } = e,
        [{
            dialogState: o
        }, s] = Kl("Dialog.Panel"),
        l = kt(t, s.panelRef),
        a = g.useMemo(() => ({
            open: o === 0
        }), [o]),
        c = ae(u => {
            u.stopPropagation()
        });
    return Et({
        ourProps: {
            ref: l,
            id: r,
            onClick: c
        },
        theirProps: i,
        slot: a,
        defaultTag: kN,
        name: "Dialog.Panel"
    })
}
let LN = "h2";

function jN(e, t) {
    let n = gr(),
        {
            id: r = `headlessui-dialog-title-${n}`,
            ...i
        } = e,
        [{
            dialogState: o,
            setTitleId: s
        }] = Kl("Dialog.Title"),
        l = kt(t);
    g.useEffect(() => (s(r), () => s(null)), [r, s]);
    let a = g.useMemo(() => ({
        open: o === 0
    }), [o]);
    return Et({
        ourProps: {
            ref: l,
            id: r
        },
        theirProps: i,
        slot: a,
        defaultTag: LN,
        name: "Dialog.Title"
    })
}
let AN = pt(RN),
    MN = pt(ON),
    IN = pt(DN),
    FN = pt(PN),
    $N = pt(jN),
    Nf = Object.assign(AN, {
        Backdrop: MN,
        Panel: IN,
        Overlay: FN,
        Title: $N,
        Description: YP
    }),
    ry = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function iy(e) {
    var t, n;
    let r = (t = e.innerText) != null ? t : "",
        i = e.cloneNode(!0);
    if (!(i instanceof HTMLElement)) return r;
    let o = !1;
    for (let l of i.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) l.remove(), o = !0;
    let s = o ? (n = i.innerText) != null ? n : "" : r;
    return ry.test(s) && (s = s.replace(ry, "")), s
}

function UN(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string") return t.trim();
    let n = e.getAttribute("aria-labelledby");
    if (n) {
        let r = n.split(" ").map(i => {
            let o = document.getElementById(i);
            if (o) {
                let s = o.getAttribute("aria-label");
                return typeof s == "string" ? s.trim() : iy(o).trim()
            }
            return null
        }).filter(Boolean);
        if (r.length > 0) return r.join(", ")
    }
    return iy(e).trim()
}

function BN(e) {
    let t = g.useRef(""),
        n = g.useRef("");
    return ae(() => {
        let r = e.current;
        if (!r) return "";
        let i = r.innerText;
        if (t.current === i) return n.current;
        let o = UN(r).trim().toLowerCase();
        return t.current = i, n.current = o, o
    })
}
var zN = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(zN || {}),
    HN = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(HN || {}),
    WN = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(WN || {});

function Of(e, t = n => n) {
    let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
        r = E1(t(e.items.slice()), o => o.dataRef.current.domRef.current),
        i = n ? r.indexOf(n) : null;
    return i === -1 && (i = null), {
        items: r,
        activeItemIndex: i
    }
}
let VN = {
        1(e) {
            return e.menuState === 1 ? e : {
                ...e,
                activeItemIndex: null,
                menuState: 1
            }
        },
        0(e) {
            return e.menuState === 0 ? e : {
                ...e,
                __demoMode: !1,
                menuState: 0
            }
        },
        2: (e, t) => {
            var n;
            let r = Of(e),
                i = EP(t, {
                    resolveItems: () => r.items,
                    resolveActiveIndex: () => r.activeItemIndex,
                    resolveId: o => o.id,
                    resolveDisabled: o => o.dataRef.current.disabled
                });
            return {
                ...e,
                ...r,
                searchQuery: "",
                activeItemIndex: i,
                activationTrigger: (n = t.trigger) != null ? n : 1
            }
        },
        3: (e, t) => {
            let n = e.searchQuery !== "" ? 0 : 1,
                r = e.searchQuery + t.value.toLowerCase(),
                i = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(s => {
                    var l;
                    return ((l = s.dataRef.current.textValue) == null ? void 0 : l.startsWith(r)) && !s.dataRef.current.disabled
                }),
                o = i ? e.items.indexOf(i) : -1;
            return o === -1 || o === e.activeItemIndex ? {
                ...e,
                searchQuery: r
            } : {
                ...e,
                searchQuery: r,
                activeItemIndex: o,
                activationTrigger: 1
            }
        },
        4(e) {
            return e.searchQuery === "" ? e : {
                ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            }
        },
        5: (e, t) => {
            let n = Of(e, r => [...r, {
                id: t.id,
                dataRef: t.dataRef
            }]);
            return {
                ...e,
                ...n
            }
        },
        6: (e, t) => {
            let n = Of(e, r => {
                let i = r.findIndex(o => o.id === t.id);
                return i !== -1 && r.splice(i, 1), r
            });
            return {
                ...e,
                ...n,
                activationTrigger: 1
            }
        }
    },
    Bp = g.createContext(null);
Bp.displayName = "MenuContext";

function Tc(e) {
    let t = g.useContext(Bp);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Tc), n
    }
    return t
}

function qN(e, t) {
    return ot(t.type, VN, e, t)
}
let QN = g.Fragment;

function KN(e, t) {
    let {
        __demoMode: n = !1,
        ...r
    } = e, i = g.useReducer(qN, {
        __demoMode: n,
        menuState: n ? 0 : 1,
        buttonRef: g.createRef(),
        itemsRef: g.createRef(),
        items: [],
        searchQuery: "",
        activeItemIndex: null,
        activationTrigger: 1
    }), [{
        menuState: o,
        itemsRef: s,
        buttonRef: l
    }, a] = i, c = kt(t);
    b1([l, s], (x, y) => {
        var w;
        a({
            type: 1
        }), Ip(y, Mp.Loose) || (x.preventDefault(), (w = l.current) == null || w.focus())
    }, o === 0);
    let u = ae(() => {
            a({
                type: 1
            })
        }),
        f = g.useMemo(() => ({
            open: o === 0,
            close: u
        }), [o, u]),
        h = {
            ref: c
        };
    return L.createElement(Bp.Provider, {
        value: i
    }, L.createElement(_1, {
        value: ot(o, {
            0: ft.Open,
            1: ft.Closed
        })
    }, Et({
        ourProps: h,
        theirProps: r,
        slot: f,
        defaultTag: QN,
        name: "Menu"
    })))
}
let GN = "button";

function YN(e, t) {
    var n;
    let r = gr(),
        {
            id: i = `headlessui-menu-button-${r}`,
            ...o
        } = e,
        [s, l] = Tc("Menu.Button"),
        a = kt(s.buttonRef, t),
        c = ql(),
        u = ae(w => {
            switch (w.key) {
                case rt.Space:
                case rt.Enter:
                case rt.ArrowDown:
                    w.preventDefault(), w.stopPropagation(), l({
                        type: 0
                    }), c.nextFrame(() => l({
                        type: 2,
                        focus: xn.First
                    }));
                    break;
                case rt.ArrowUp:
                    w.preventDefault(), w.stopPropagation(), l({
                        type: 0
                    }), c.nextFrame(() => l({
                        type: 2,
                        focus: xn.Last
                    }));
                    break
            }
        }),
        f = ae(w => {
            switch (w.key) {
                case rt.Space:
                    w.preventDefault();
                    break
            }
        }),
        h = ae(w => {
            if (R1(w.currentTarget)) return w.preventDefault();
            e.disabled || (s.menuState === 0 ? (l({
                type: 1
            }), c.nextFrame(() => {
                var E;
                return (E = s.buttonRef.current) == null ? void 0 : E.focus({
                    preventScroll: !0
                })
            })) : (w.preventDefault(), l({
                type: 0
            })))
        }),
        x = g.useMemo(() => ({
            open: s.menuState === 0
        }), [s]),
        y = {
            ref: a,
            id: i,
            type: yP(e, s.buttonRef),
            "aria-haspopup": "menu",
            "aria-controls": (n = s.itemsRef.current) == null ? void 0 : n.id,
            "aria-expanded": s.menuState === 0,
            onKeyDown: u,
            onKeyUp: f,
            onClick: h
        };
    return Et({
        ourProps: y,
        theirProps: o,
        slot: x,
        defaultTag: GN,
        name: "Menu.Button"
    })
}
let XN = "div",
    JN = Go.RenderStrategy | Go.Static;

function ZN(e, t) {
    var n, r;
    let i = gr(),
        {
            id: o = `headlessui-menu-items-${i}`,
            ...s
        } = e,
        [l, a] = Tc("Menu.Items"),
        c = kt(l.itemsRef, t),
        u = os(l.itemsRef),
        f = ql(),
        h = Cc(),
        x = (() => h !== null ? (h & ft.Open) === ft.Open : l.menuState === 0)();
    g.useEffect(() => {
        let p = l.itemsRef.current;
        p && l.menuState === 0 && p !== (u == null ? void 0 : u.activeElement) && p.focus({
            preventScroll: !0
        })
    }, [l.menuState, l.itemsRef, u]), wP({
        container: l.itemsRef.current,
        enabled: l.menuState === 0,
        accept(p) {
            return p.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(p) {
            p.setAttribute("role", "none")
        }
    });
    let y = ae(p => {
            var v, R;
            switch (f.dispose(), p.key) {
                case rt.Space:
                    if (l.searchQuery !== "") return p.preventDefault(), p.stopPropagation(), a({
                        type: 3,
                        value: p.key
                    });
                case rt.Enter:
                    if (p.preventDefault(), p.stopPropagation(), a({
                            type: 1
                        }), l.activeItemIndex !== null) {
                        let {
                            dataRef: P
                        } = l.items[l.activeItemIndex];
                        (R = (v = P.current) == null ? void 0 : v.domRef.current) == null || R.click()
                    }
                    x1(l.buttonRef.current);
                    break;
                case rt.ArrowDown:
                    return p.preventDefault(), p.stopPropagation(), a({
                        type: 2,
                        focus: xn.Next
                    });
                case rt.ArrowUp:
                    return p.preventDefault(), p.stopPropagation(), a({
                        type: 2,
                        focus: xn.Previous
                    });
                case rt.Home:
                case rt.PageUp:
                    return p.preventDefault(), p.stopPropagation(), a({
                        type: 2,
                        focus: xn.First
                    });
                case rt.End:
                case rt.PageDown:
                    return p.preventDefault(), p.stopPropagation(), a({
                        type: 2,
                        focus: xn.Last
                    });
                case rt.Escape:
                    p.preventDefault(), p.stopPropagation(), a({
                        type: 1
                    }), _n().nextFrame(() => {
                        var P;
                        return (P = l.buttonRef.current) == null ? void 0 : P.focus({
                            preventScroll: !0
                        })
                    });
                    break;
                case rt.Tab:
                    p.preventDefault(), p.stopPropagation(), a({
                        type: 1
                    }), _n().nextFrame(() => {
                        gP(l.buttonRef.current, p.shiftKey ? Zn.Previous : Zn.Next)
                    });
                    break;
                default:
                    p.key.length === 1 && (a({
                        type: 3,
                        value: p.key
                    }), f.setTimeout(() => a({
                        type: 4
                    }), 350));
                    break
            }
        }),
        w = ae(p => {
            switch (p.key) {
                case rt.Space:
                    p.preventDefault();
                    break
            }
        }),
        E = g.useMemo(() => ({
            open: l.menuState === 0
        }), [l]),
        m = {
            "aria-activedescendant": l.activeItemIndex === null || (n = l.items[l.activeItemIndex]) == null ? void 0 : n.id,
            "aria-labelledby": (r = l.buttonRef.current) == null ? void 0 : r.id,
            id: o,
            onKeyDown: y,
            onKeyUp: w,
            role: "menu",
            tabIndex: 0,
            ref: c
        };
    return Et({
        ourProps: m,
        theirProps: s,
        slot: E,
        defaultTag: XN,
        features: JN,
        visible: x,
        name: "Menu.Items"
    })
}
let eO = g.Fragment;

function tO(e, t) {
    let n = gr(),
        {
            id: r = `headlessui-menu-item-${n}`,
            disabled: i = !1,
            ...o
        } = e,
        [s, l] = Tc("Menu.Item"),
        a = s.activeItemIndex !== null ? s.items[s.activeItemIndex].id === r : !1,
        c = g.useRef(null),
        u = kt(t, c);
    lt(() => {
        if (s.__demoMode || s.menuState !== 0 || !a || s.activationTrigger === 0) return;
        let P = _n();
        return P.requestAnimationFrame(() => {
            var S, N;
            (N = (S = c.current) == null ? void 0 : S.scrollIntoView) == null || N.call(S, {
                block: "nearest"
            })
        }), P.dispose
    }, [s.__demoMode, c, a, s.menuState, s.activationTrigger, s.activeItemIndex]);
    let f = BN(c),
        h = g.useRef({
            disabled: i,
            domRef: c,
            get textValue() {
                return f()
            }
        });
    lt(() => {
        h.current.disabled = i
    }, [h, i]), lt(() => (l({
        type: 5,
        id: r,
        dataRef: h
    }), () => l({
        type: 6,
        id: r
    })), [h, r]);
    let x = ae(() => {
            l({
                type: 1
            })
        }),
        y = ae(P => {
            if (i) return P.preventDefault();
            l({
                type: 1
            }), x1(s.buttonRef.current)
        }),
        w = ae(() => {
            if (i) return l({
                type: 2,
                focus: xn.Nothing
            });
            l({
                type: 2,
                focus: xn.Specific,
                id: r
            })
        }),
        E = RP(),
        m = ae(P => E.update(P)),
        p = ae(P => {
            E.wasMoved(P) && (i || a || l({
                type: 2,
                focus: xn.Specific,
                id: r,
                trigger: 0
            }))
        }),
        v = ae(P => {
            E.wasMoved(P) && (i || a && l({
                type: 2,
                focus: xn.Nothing
            }))
        }),
        R = g.useMemo(() => ({
            active: a,
            disabled: i,
            close: x
        }), [a, i, x]);
    return Et({
        ourProps: {
            id: r,
            ref: u,
            role: "menuitem",
            tabIndex: i === !0 ? void 0 : -1,
            "aria-disabled": i === !0 ? !0 : void 0,
            disabled: void 0,
            onClick: y,
            onFocus: w,
            onPointerEnter: m,
            onMouseEnter: m,
            onPointerMove: p,
            onMouseMove: p,
            onPointerLeave: v,
            onMouseLeave: v
        },
        theirProps: o,
        slot: R,
        defaultTag: eO,
        name: "Menu.Item"
    })
}
let nO = pt(KN),
    rO = pt(YN),
    iO = pt(ZN),
    oO = pt(tO),
    Pa = Object.assign(nO, {
        Button: rO,
        Items: iO,
        Item: oO
    });

function sO(e = 0) {
    let [t, n] = g.useState(e), r = Ql(), i = g.useCallback(a => {
        r.current && n(c => c | a)
    }, [t, r]), o = g.useCallback(a => !!(t & a), [t]), s = g.useCallback(a => {
        r.current && n(c => c & ~a)
    }, [n, r]), l = g.useCallback(a => {
        r.current && n(c => c ^ a)
    }, [n]);
    return {
        flags: t,
        addFlag: i,
        hasFlag: o,
        removeFlag: s,
        toggleFlag: l
    }
}

function lO(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function kf(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function Df(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function aO(e, t) {
    let n = _n();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: i
    } = getComputedStyle(e), [o, s] = [r, i].map(a => {
        let [c = 0] = a.split(",").filter(Boolean).map(u => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, f) => f - u);
        return c
    }), l = o + s;
    if (l !== 0) {
        n.group(c => {
            c.setTimeout(() => {
                t(), c.dispose()
            }, l), c.addEventListener(e, "transitionrun", u => {
                u.target === u.currentTarget && c.dispose()
            })
        });
        let a = n.addEventListener(e, "transitionend", c => {
            c.target === c.currentTarget && (t(), a())
        })
    } else t();
    return n.add(() => t()), n.dispose
}

function uO(e, t, n, r) {
    let i = n ? "enter" : "leave",
        o = _n(),
        s = r !== void 0 ? lO(r) : () => {};
    i === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let l = ot(i, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        a = ot(i, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        c = ot(i, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return Df(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), kf(e, ...t.base, ...l, ...c), o.nextFrame(() => {
        Df(e, ...t.base, ...l, ...c), kf(e, ...t.base, ...l, ...a), aO(e, () => (Df(e, ...t.base, ...l), kf(e, ...t.base, ...t.entered), s()))
    }), o.dispose
}

function cO({
    immediate: e,
    container: t,
    direction: n,
    classes: r,
    onStart: i,
    onStop: o
}) {
    let s = Ql(),
        l = ql(),
        a = or(n);
    lt(() => {
        e && (a.current = "enter")
    }, [e]), lt(() => {
        let c = _n();
        l.add(c.dispose);
        let u = t.current;
        if (u && a.current !== "idle" && s.current) return c.dispose(), i.current(a.current), c.add(uO(u, r.current, a.current === "enter", () => {
            c.dispose(), o.current(a.current)
        })), c.dispose
    }, [n])
}

function Cr(e = "") {
    return e.split(" ").filter(t => t.trim().length > 1)
}
let Rc = g.createContext(null);
Rc.displayName = "TransitionContext";
var fO = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(fO || {});

function dO() {
    let e = g.useContext(Rc);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function hO() {
    let e = g.useContext(_c);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let _c = g.createContext(null);
_c.displayName = "NestingContext";

function Pc(e) {
    return "children" in e ? Pc(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function I1(e, t) {
    let n = or(e),
        r = g.useRef([]),
        i = Ql(),
        o = ql(),
        s = ae((x, y = zr.Hidden) => {
            let w = r.current.findIndex(({
                el: E
            }) => E === x);
            w !== -1 && (ot(y, {
                [zr.Unmount]() {
                    r.current.splice(w, 1)
                },
                [zr.Hidden]() {
                    r.current[w].state = "hidden"
                }
            }), o.microTask(() => {
                var E;
                !Pc(r) && i.current && ((E = n.current) == null || E.call(n))
            }))
        }),
        l = ae(x => {
            let y = r.current.find(({
                el: w
            }) => w === x);
            return y ? y.state !== "visible" && (y.state = "visible") : r.current.push({
                el: x,
                state: "visible"
            }), () => s(x, zr.Unmount)
        }),
        a = g.useRef([]),
        c = g.useRef(Promise.resolve()),
        u = g.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        f = ae((x, y, w) => {
            a.current.splice(0), t && (t.chains.current[y] = t.chains.current[y].filter(([E]) => E !== x)), t == null || t.chains.current[y].push([x, new Promise(E => {
                a.current.push(E)
            })]), t == null || t.chains.current[y].push([x, new Promise(E => {
                Promise.all(u.current[y].map(([m, p]) => p)).then(() => E())
            })]), y === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => w(y)) : w(y)
        }),
        h = ae((x, y, w) => {
            Promise.all(u.current[y].splice(0).map(([E, m]) => m)).then(() => {
                var E;
                (E = a.current.shift()) == null || E()
            }).then(() => w(y))
        });
    return g.useMemo(() => ({
        children: r,
        register: l,
        unregister: s,
        onStart: f,
        onStop: h,
        wait: c,
        chains: u
    }), [l, s, r, f, h, u, c])
}

function pO() {}
let mO = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function oy(e) {
    var t;
    let n = {};
    for (let r of mO) n[r] = (t = e[r]) != null ? t : pO;
    return n
}

function gO(e) {
    let t = g.useRef(oy(e));
    return g.useEffect(() => {
        t.current = oy(e)
    }, [e]), t
}
let yO = "div",
    F1 = Go.RenderStrategy;

function vO(e, t) {
    var n, r;
    let {
        beforeEnter: i,
        afterEnter: o,
        beforeLeave: s,
        afterLeave: l,
        enter: a,
        enterFrom: c,
        enterTo: u,
        entered: f,
        leave: h,
        leaveFrom: x,
        leaveTo: y,
        ...w
    } = e, E = g.useRef(null), m = kt(E, t), p = (n = w.unmount) == null || n ? zr.Unmount : zr.Hidden, {
        show: v,
        appear: R,
        initial: P
    } = dO(), [S, N] = g.useState(v ? "visible" : "hidden"), D = hO(), {
        register: M,
        unregister: B
    } = D;
    g.useEffect(() => M(E), [M, E]), g.useEffect(() => {
        if (p === zr.Hidden && E.current) {
            if (v && S !== "visible") {
                N("visible");
                return
            }
            return ot(S, {
                hidden: () => B(E),
                visible: () => M(E)
            })
        }
    }, [S, E, M, B, v, p]);
    let te = or({
            base: Cr(w.className),
            enter: Cr(a),
            enterFrom: Cr(c),
            enterTo: Cr(u),
            entered: Cr(f),
            leave: Cr(h),
            leaveFrom: Cr(x),
            leaveTo: Cr(y)
        }),
        ge = gO({
            beforeEnter: i,
            afterEnter: o,
            beforeLeave: s,
            afterLeave: l
        }),
        pe = is();
    g.useEffect(() => {
        if (pe && S === "visible" && E.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [E, S, pe]);
    let et = P && !R,
        $t = R && v && P,
        St = (() => !pe || et ? "idle" : v ? "enter" : "leave")(),
        ce = sO(0),
        F = ae(ee => ot(ee, {
            enter: () => {
                ce.addFlag(ft.Opening), ge.current.beforeEnter()
            },
            leave: () => {
                ce.addFlag(ft.Closing), ge.current.beforeLeave()
            },
            idle: () => {}
        })),
        U = ae(ee => ot(ee, {
            enter: () => {
                ce.removeFlag(ft.Opening), ge.current.afterEnter()
            },
            leave: () => {
                ce.removeFlag(ft.Closing), ge.current.afterLeave()
            },
            idle: () => {}
        })),
        Y = I1(() => {
            N("hidden"), B(E)
        }, D);
    cO({
        immediate: $t,
        container: E,
        classes: te,
        direction: St,
        onStart: or(ee => {
            Y.onStart(E, ee, F)
        }),
        onStop: or(ee => {
            Y.onStop(E, ee, U), ee === "leave" && !Pc(Y) && (N("hidden"), B(E))
        })
    });
    let q = w,
        ye = {
            ref: m
        };
    return $t ? q = {
        ...q,
        className: ju(w.className, ...te.current.enter, ...te.current.enterFrom)
    } : (q.className = ju(w.className, (r = E.current) == null ? void 0 : r.className), q.className === "" && delete q.className), L.createElement(_c.Provider, {
        value: Y
    }, L.createElement(_1, {
        value: ot(S, {
            visible: ft.Open,
            hidden: ft.Closed
        }) | ce.flags
    }, Et({
        ourProps: ye,
        theirProps: q,
        defaultTag: yO,
        features: F1,
        visible: S === "visible",
        name: "Transition.Child"
    })))
}

function wO(e, t) {
    let {
        show: n,
        appear: r = !1,
        unmount: i = !0,
        ...o
    } = e, s = g.useRef(null), l = kt(s, t);
    is();
    let a = Cc();
    if (n === void 0 && a !== null && (n = (a & ft.Open) === ft.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [c, u] = g.useState(n ? "visible" : "hidden"), f = I1(() => {
        u("hidden")
    }), [h, x] = g.useState(!0), y = g.useRef([n]);
    lt(() => {
        h !== !1 && y.current[y.current.length - 1] !== n && (y.current.push(n), x(!1))
    }, [y, n]);
    let w = g.useMemo(() => ({
        show: n,
        appear: r,
        initial: h
    }), [n, r, h]);
    g.useEffect(() => {
        if (n) u("visible");
        else if (!Pc(f)) u("hidden");
        else {
            let v = s.current;
            if (!v) return;
            let R = v.getBoundingClientRect();
            R.x === 0 && R.y === 0 && R.width === 0 && R.height === 0 && u("hidden")
        }
    }, [n, f]);
    let E = {
            unmount: i
        },
        m = ae(() => {
            var v;
            h && x(!1), (v = e.beforeEnter) == null || v.call(e)
        }),
        p = ae(() => {
            var v;
            h && x(!1), (v = e.beforeLeave) == null || v.call(e)
        });
    return L.createElement(_c.Provider, {
        value: f
    }, L.createElement(Rc.Provider, {
        value: w
    }, Et({
        ourProps: {
            ...E,
            as: g.Fragment,
            children: L.createElement($1, {
                ref: l,
                ...E,
                ...o,
                beforeEnter: m,
                beforeLeave: p
            })
        },
        theirProps: {},
        defaultTag: g.Fragment,
        features: F1,
        visible: c === "visible",
        name: "Transition"
    })))
}

function xO(e, t) {
    let n = g.useContext(Rc) !== null,
        r = Cc() !== null;
    return L.createElement(L.Fragment, null, !n && r ? L.createElement(hh, {
        ref: t,
        ...e
    }) : L.createElement($1, {
        ref: t,
        ...e
    }))
}
let hh = pt(wO),
    $1 = pt(vO),
    EO = pt(xO),
    Xa = Object.assign(hh, {
        Child: EO,
        Root: hh
    });

function SO({
    title: e,
    subtitle: t,
    icon: n,
    url: r,
    children: i,
    onClick: o
}) {
    const s = g.useMemo(() => Re("c-menu-item", "block whitespace-pre break-normal px-4 py-2 text-left"), []),
        l = g.useMemo(() => Re("c-menu-item-title", "text-sm text-slate-700", {
            "mb-1": t
        }), [t]),
        a = g.useMemo(() => Re("c-menu-item-subtitle", "text-xs text-slate-400"), []),
        c = g.useMemo(() => Re("c-menu-item-icon", "text-[20px] !text-slate-700"), []);

    function u() {
        return d.jsx("p", {
            className: l,
            children: e
        })
    }

    function f() {
        return d.jsx("p", {
            className: a,
            children: t
        })
    }

    function h() {
        return n ? d.jsx(Iu, {
            name: n,
            className: c
        }) : null
    }

    function x() {
        return i || (n ? d.jsxs("div", {
            className: "c-menu-item-row flex gap-2",
            children: [d.jsx("div", {
                className: "c-menu-item-icon",
                children: h()
            }), d.jsxs("div", {
                className: "c-menu-item-text",
                children: [u(), f()]
            })]
        }) : d.jsxs(d.Fragment, {
            children: [u(), f()]
        }))
    }

    function y() {
        return d.jsx(Ot, {
            to: r || "",
            className: s,
            children: x()
        })
    }

    function w() {
        return d.jsx("button", {
            onClick: o,
            type: "button",
            className: s,
            children: x()
        })
    }
    return d.jsx("li", {
        className: "relative hover:bg-slate-100",
        children: r ? y() : w()
    })
}
const bO = L.memo(SO);

function CO({
    items: e = [],
    children: t,
    className: n
}) {
    const r = g.useMemo(() => Re("c-menu-button", n), [n]);
    return d.jsxs(Pa, {
        as: "div",
        className: "relative",
        children: [d.jsx(Pa.Button, {
            className: r,
            children: t
        }), d.jsx(Xa, {
            as: g.Fragment,
            enter: "transition ease-out duration-100",
            enterFrom: "transform opacity-0 scale-95",
            enterTo: "transform opacity-100 scale-100",
            leave: "transition ease-in duration-75",
            leaveFrom: "transform opacity-100 scale-100",
            leaveTo: "transform opacity-0 scale-95",
            children: d.jsx(Pa.Items, {
                as: "ul",
                className: "absolute right-0 z-10 divide-y divide-slate-300 border border-slate-300 bg-white",
                children: e.map((i, o) => d.jsx(Pa.Item, {
                    as: L.Fragment,

                    children: () => d.jsx(bO, {
                        onClick: i.onClick,
                        title: i.title,
                        subtitle: i.subtitle,
                        url: i.url,
                        icon: i.icon,
                        children: i.component
                    })
                }, o))
            })
        })]
    })
}
const TO = L.memo(CO);

function RO(e) {
    return Bl({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "5",
                y1: "12",
                x2: "19",
                y2: "12"
            }
        }, {
            tag: "polyline",
            attr: {
                points: "12 5 19 12 12 19"
            }
        }]
    })(e)
}

function _O(e) {
    return Bl({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "polyline",
            attr: {
                points: "15 10 20 15 15 20"
            }
        }, {
            tag: "path",
            attr: {
                d: "M4 4v7a4 4 0 0 0 4 4h12"
            }
        }]
    })(e)
}

function PO(e) {
    return Bl({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "path",
            attr: {
                d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
            }
        }, {
            tag: "path",
            attr: {
                d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
            }
        }]
    })(e)
}

function NO(e) {
    return Bl({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "line",
            attr: {
                x1: "3",
                y1: "12",
                x2: "21",
                y2: "12"
            }
        }, {
            tag: "line",
            attr: {
                x1: "3",
                y1: "6",
                x2: "21",
                y2: "6"
            }
        }, {
            tag: "line",
            attr: {
                x1: "3",
                y1: "18",
                x2: "21",
                y2: "18"
            }
        }]
    })(e)
}

function OO(e) {
    return Bl({
        tag: "svg",
        attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        },
        child: [{
            tag: "circle",
            attr: {
                cx: "11",
                cy: "11",
                r: "8"
            }
        }, {
            tag: "line",
            attr: {
                x1: "21",
                y1: "21",
                x2: "16.65",
                y2: "16.65"
            }
        }]
    })(e)
}
const kO = [{
    name: Br.search,
    icon: OO,
    type: "component"
}, {
    name: Br.menu,
    icon: NO,
    type: "component"
}, {
    name: Br.link,
    icon: PO,
    type: "component"
}, {
    name: Br.reply,
    icon: _O,
    type: "component"
}];

function DO({
    name: e,
    className: t
}) {
    const n = g.useMemo(() => Re("c-icon", t), [t]);

    function r() {
        const i = kO.filter(o => o.name === e)[0];
        if (!i || !i.icon) return null;
        if (i.type === "component" && typeof i.icon != "string" && i.icon) {
            const o = i.icon;
            return d.jsx(o, {
                className: n
            })
        }
        return d.jsx("img", {
            src: i.icon,
            alt: "",
            className: n
        })
    }
    return r()
}
const Iu = L.memo(DO);

function LO() {
    return d.jsx("div", {
        className: "c-comment-form mb-8"
    })
}
L.memo(LO);

function jO({
    title: e,
    visible: t = !1,
    onClose: n = () => {}
}) {
    return d.jsx(d.Fragment, {
        children: d.jsx(Xa, {
            appear: !0,
            show: t,
            as: g.Fragment,
            children: d.jsxs(Nf, {
                as: "div",
                className: "relative z-10",
                onClose: n,
                children: [d.jsx(Xa.Child, {
                    as: g.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: d.jsx("div", {
                        className: "fixed inset-0 bg-black/25"
                    })
                }), d.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: d.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: d.jsx(Xa.Child, {
                            as: g.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: d.jsxs(Nf.Panel, {
                                className: "w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [d.jsx(Nf.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-900",
                                    children: e
                                }), d.jsx("div", {
                                    className: "mt-2",
                                    children: d.jsx("p", {
                                        className: "text-sm text-gray-500",
                                        children: "Your payment has been successfully submitted. We've sent you an email with all of the details of your order."
                                    })
                                }), d.jsx("div", {
                                    className: "mt-4",
                                    children: d.jsx("button", {
                                        type: "button",
                                        className: "inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",
                                        onClick: n,
                                        children: "Got it, thanks!"
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}
g.memo(jO);

function AO() {
    return d.jsxs("div", {
        className: "c-base-editor",
        children: [d.jsx("div", {
            className: "c-base-editor-header"
        }), d.jsx("div", {
            className: "c-base-editor-body"
        }), d.jsx("div", {
            className: "c-base-editor-footer"
        })]
    })
}
L.memo(AO);

function MO({
    loading: e,
    logo: t,
    title: n
}) {
    return d.jsx("div", {
        className: "c-base-header-brand",
        children: d.jsx(Ot, {
            to: "/",
            children: d.jsxs("div", {
                className: "flex items-center",
                children: [d.jsx(Hn, {
                    loading: e,
                    src: t,
                    alt: n,
                    className: "mr-2 h-10 w-10 overflow-hidden rounded-full"
                }), e ? d.jsx("div", {
                    className: "h-6 w-24 rounded-full bg-slate-300"
                }) : d.jsx("h2", {
                    className: "text-xl font-bold text-slate-700",
                    children: n
                })]
            })
        })
    })
}
const IO = L.memo(MO),
    FO = [1, 2];

function $O({
    loading: e,
    items: t
}) {
    function n() {
        return e ? FO.map(r => d.jsx("li", {
            className: "my-2 h-6 w-32 rounded-full bg-slate-300"
        }, r)) : d.jsx(d.Fragment, {
            children: t.map(r => d.jsx("li", {
                className: "flex items-center",
                children: d.jsx(uC, {
                    className: "text-slate-700",
                    to: r.url,
                    title: r.title,
                    children: r.title
                })
            }, `nav-${r.id}`))
        })
    }
    return d.jsx("ul", {
        className: "c-base-header-nav hidden gap-8 md:flex",
        children: n()
    })
}
const UO = L.memo($O);

function BO() {
    return d.jsx("div", {
        className: "c-base-header-search flex items-center",
        children: d.jsx(Ot, {
            to: "/search",
            className: "flex h-6 w-6 items-center justify-center",
            children: d.jsx(Iu, {
                name: Br.search,
                className: "text-lg !text-slate-600"
            })
        })
    })
}
const zO = L.memo(BO);

function HO({
    loading: e,
    logo: t,
    title: n,
    menus: r
}) {
    return d.jsx("div", {
        className: "c-base-header fixed top-0 z-20 w-full border border-b-slate-300 bg-white py-2",
        children: d.jsx(Tn, {
            className: "c-base-header-container px-6",
            children: d.jsxs("div", {
                className: "flex justify-between",
                children: [d.jsx("div", {
                    children: d.jsx(IO, {
                        loading: e,
                        title: n,
                        logo: t
                    })
                }), d.jsxs("div", {
                    className: "flex gap-8",
                    children: [d.jsx(UO, {
                        loading: e,
                        items: r
                    }), !e && d.jsx(zO, {})]
                })]
            })
        })
    })
}
const WO = g.memo(HO),
    VO = [{
        id: 1,
        title: "About",
        url: "/about"
    }, {
        id: 2,
        title: "Disclaimer",
        url: "/disclaimer"
    }, {
        id: 3,
        title: "Github",
        url: "https://github.com/"
    }, {
        id: 4,
        title: "References",
        url: "/references"
    }];

function qO() {
    var t, n, r;
    const e = Nn();
    return d.jsxs(d.Fragment, {
        children: [d.jsx("div", {
            className: "border-t border-slate-300 bg-white",
            children: d.jsxs(Tn, {
                className: "block sm:flex",
                children: [d.jsx("div", {
                    className: "basis-8/12 border-b border-slate-300 px-6 pb-14 pt-14 sm:border-b-0 sm:pb-6",
                    children: d.jsxs("div", {
                        className: "flex max-w-[375px] gap-4",
                        children: [d.jsx("div", {
                            className: "",
                            children: d.jsx(Hn, {
                                src: (t = e.config.data) == null ? void 0 : t.app.logo,
                                loading: e.isLoading,
                                className: "h-[72px] w-[72px] overflow-hidden rounded-full"
                            })
                        }), d.jsxs("div", {
                            className: "",
                            children: [d.jsx("h2", {
                                className: "mb-1 text-2xl font-semibold text-slate-700",
                                children: (n = e.data) == null ? void 0 : n.name
                            }), d.jsx("p", {
                                className: "text-sm text-slate-700",
                                children: (r = e.data) == null ? void 0 : r.description
                            })]
                        })]
                    })
                }), d.jsx("div", {
                    className: "basis-4/12 p-6 pb-14 pt-14 sm:pb-6",
                    children: d.jsx("ul", {
                        children: VO.map(i => d.jsx("li", {
                            children: d.jsx(Ot, {
                                className: "text-sm font-semibold text-slate-700",
                                to: i.url,
                                children: i.title
                            })
                        }, i.id))
                    })
                })]
            })
        }), d.jsx("div", {
            className: "border-t border-slate-300 bg-white",
            children: d.jsx(Tn, {
                className: "px-6",
                children: d.jsx("div", {
                    className: "py-4 text-center",
                    children: d.jsx("p", {
                        className: "text-sm text-slate-700",
                        children: "Made with Love by Ito"
                    })
                })
            })
        })]
    })
}
const QO = L.memo(qO);

function KO({
    image: e,
    alt: t,
    title: n,
    url: r,
    loading: i
}) {
    const o = g.useMemo(() => Re("c-featured-card-thumbnail", "hidden basis-6/12 pr-6 md:block"), []);
    return r && r.includes("http") ? d.jsx("a", {
        href: r,
        title: n,
        className: o,
        children: d.jsx(Hn, {
            loading: i,
            src: e,
            alt: t,
            title: n,
            className: "h-full w-full"
        })
    }) : r ? d.jsx(Ot, {
        className: o,
        to: r,
        title: n,
        children: d.jsx(Hn, {
            loading: i,
            src: e,
            alt: t,
            title: n,
            className: "h-full w-full"
        })
    }) : d.jsx("div", {
        className: o,
        children: d.jsx(Hn, {
            loading: i,
            src: e,
            alt: t,
            title: n,
            className: "h-full w-full"
        })
    })
}
const GO = L.memo(KO);

function YO() {
    return d.jsxs("div", {
        className: "flex flex-1 flex-col",
        children: [d.jsx("div", {
            className: "pt-0 md:pt-2",
            children: [1, 2, 3].map(e => d.jsx(Ec, {
                loading: !0
            }, e))
        }), d.jsxs("div", {
            className: "pb-4",
            children: [d.jsx("div", {
                className: "mb-2 h-5 w-[80%] rounded-full bg-slate-300"
            }), d.jsx("div", {
                className: "h-5 w-[60%] rounded-full bg-slate-300"
            })]
        }), d.jsx("div", {
            className: "pb-4",
            children: d.jsx("div", {
                className: "h-3 w-[40%] rounded-full bg-slate-300"
            })
        }), d.jsxs("div", {
            className: "flex-1 pb-6",
            children: [d.jsx("div", {
                className: "mb-2 h-4 w-[85%] rounded-full bg-slate-300"
            }), d.jsx("div", {
                className: "mb-2 h-4 w-[90%] rounded-full bg-slate-300"
            }), d.jsx("div", {
                className: "mb-2 h-4 w-[80%] rounded-full bg-slate-300"
            })]
        }), d.jsxs("div", {
            className: "flex flex-wrap justify-between sm:flex-nowrap",
            children: [d.jsx("div", {
                className: "mb-6 w-full sm:mb-0 sm:w-auto",
                children: d.jsx(ui, {
                    loading: !0
                })
            }), d.jsx("div", {
                className: "h-8 w-[150px] rounded-full bg-slate-300"
            })]
        })]
    })
}
const XO = L.memo(YO);

function JO({
    title: e,
    description: t,
    url: n,
    labels: r = [],
    date: i,
    author: o,
    loading: s
}) {
    return s ? d.jsx(XO, {}) : d.jsxs("div", {
        className: "flex flex-1 flex-col",
        children: [d.jsx("div", {
            className: "pt-0 md:pt-2",
            children: r.map(l => d.jsx(Ec, {
                title: l.title,
                url: l.url
            }, l.title))
        }), d.jsx("div", {
            className: "pb-0 md:pb-2",
            children: d.jsx(Ot, {
                to: n || "",
                children: d.jsx("h2", {
                    className: "text-xl font-bold text-slate-700",
                    children: e
                })
            })
        }), d.jsx("div", {
            className: "pb-4",
            children: d.jsx("p", {
                className: "text-xs text-slate-700",
                children: i && `Published on ${i}`
            })
        }), d.jsx("div", {
            className: "flex-1 pb-6",
            children: d.jsx("p", {
                className: "text-sm text-slate-700",
                children: t
            })
        }), d.jsxs("div", {
            className: "flex flex-wrap justify-between sm:flex-nowrap",
            children: [d.jsx("div", {
                className: "mb-6 w-full sm:mb-0 sm:w-auto",
                children: d.jsx(ui, {
                    ...o
                })
            }), d.jsx(Du, {
                url: n,
                iconAlign: "end",
                className: "bg-sky-600 px-4 py-2 text-sm font-bold text-white",
                icon: d.jsx(RO, {
                    className: "text-lg !text-white"
                }),
                children: "Read More"
            })]
        })]
    })
}
const ZO = L.memo(JO);

function ek({
    title: e,
    description: t,
    image: n,
    url: r,
    loading: i,
    labels: o,
    date: s,
    author: l
}) {
    return d.jsx("div", {
        className: "c-featured-card relative overflow-hidden sm:border sm:border-slate-300 sm:bg-white",
        children: d.jsxs("div", {
            className: "flex sm:p-6",
            children: [d.jsx(GO, {
                title: e,
                alt: e,
                image: n,
                url: r,
                loading: i
            }), d.jsx(ZO, {
                title: e,
                description: t,
                url: r,
                loading: i,
                labels: o,
                date: s,
                author: l
            })]
        })
    })
}
const sy = L.memo(ek);

function tk({
    title: e,
    subtitle: t,
    loading: n,
    withAnchor: r,
    anchor: i
}) {
    return n ? d.jsxs("div", {
        className: "flex flex-col justify-center",
        children: [d.jsx("div", {
            className: "mb-1 h-4 w-[100px] rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "h-3 w-[80px] rounded-full bg-slate-300"
        })]
    }) : d.jsxs("div", {
        className: "flex flex-col justify-center",
        children: [d.jsxs("h4", {
            className: "flex  whitespace-nowrap align-middle text-sm font-bold text-slate-700",
            children: [e, r && d.jsx(Ot, {
                className: "ml-2 inline",
                to: i ? `#${i}` : "",
                children: d.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    strokeWidth: 1.5,
                    stroke: "currentColor",
                    className: "h-4 w-4",
                    children: d.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                    })
                })
            })]
        }), t && d.jsx("p", {
            className: "text-xs",
            children: t
        })]
    })
}
const nk = L.memo(tk);

function rk({
    title: e,
    subtitle: t,
    image: n,
    loading: r,
    withAnchor: i,
    anchor: o
}) {
    return d.jsx("div", {
        className: "c-author-card",
        children: d.jsxs("div", {
            className: "flex gap-2",
            children: [d.jsx(Hn, {
                src: n,
                alt: e,
                title: e,
                loading: r,
                className: "test h-9 w-9 overflow-hidden rounded-full"
            }), d.jsx(nk, {
                anchor: o,
                withAnchor: i,
                title: e,
                subtitle: t,
                loading: r
            })]
        })
    })
}
const ui = L.memo(rk);

function ik({
    image: e,
    alt: t,
    title: n,
    url: r,
    loading: i
}) {
    const o = g.useMemo(() => Re("c-post-card-thumbnail", "mb-3 hidden sm:block"), []);
    return r && r.includes("http") ? d.jsx("a", {
        href: r,
        title: n,
        className: o,
        children: d.jsx(Hn, {
            loading: i,
            src: e,
            alt: t,
            title: n,
            className: "h-0 w-full pb-[62.5%]"
        })
    }) : r ? d.jsx(Ot, {
        className: o,
        to: r,
        title: n,
        children: d.jsx(Hn, {
            loading: i,
            src: e,
            alt: t,
            title: n,
            className: "h-0 w-full pb-[62.5%]"
        })
    }) : d.jsx("div", {
        className: o,
        children: d.jsx(Hn, {
            loading: i,
            src: e,
            alt: t,
            title: n,
            className: "h-0 w-full pb-[62.5%]"
        })
    })
}
const ok = L.memo(ik);

function sk() {
    return d.jsxs("div", {
        className: "flex flex-1 flex-col",
        children: [d.jsxs("div", {
            className: "pb-4",
            children: [d.jsx("div", {
                className: "mb-2 h-3 w-[80%] rounded-full bg-slate-300"
            }), d.jsx("div", {
                className: "h-3 w-[60%] rounded-full bg-slate-300"
            })]
        }), d.jsx("div", {
            className: "pb-4",
            children: d.jsx("div", {
                className: "h-3 w-[40%] rounded-full bg-slate-300"
            })
        }), d.jsx("div", {
            className: "flex flex-wrap justify-between sm:flex-nowrap",
            children: d.jsx("div", {
                className: "mb-6 w-full sm:mb-0 sm:w-auto",
                children: d.jsx(ui, {
                    loading: !0
                })
            })
        })]
    })
}
const lk = L.memo(sk);

function ak({
    title: e,
    url: t,
    date: n,
    author: r,
    loading: i
}) {
    return i ? d.jsx(lk, {}) : d.jsxs("div", {
        className: "",
        children: [d.jsx("div", {
            className: "pb-0 md:pb-2",
            children: d.jsx(Ot, {
                to: t || "",
                className: "inline-block",
                children: d.jsx("h2", {
                    className: "w-full whitespace-normal text-lg font-bold text-slate-700 sm:text-base",
                    children: e
                })
            })
        }), d.jsx("div", {
            className: "pb-4",
            children: d.jsx("p", {
                className: "text-xs text-slate-700",
                children: n && `Published on ${n}`
            })
        }), d.jsx("div", {
            className: "flex flex-wrap justify-between sm:flex-nowrap",
            children: d.jsx("div", {
                className: "w-full sm:mb-0 sm:w-auto",
                children: d.jsx(ui, {
                    ...r
                })
            })
        })]
    })
}
const uk = L.memo(ak);

function ck({
    title: e,
    image: t,
    url: n,
    loading: r,
    labels: i,
    date: o,
    author: s,
    wrapperClassName: l
}) {
    const a = g.useMemo(() => Re("c-post-card relative overflow-hidden border-slate-300 bg-white p-0 sm:border sm:p-6", l), [l]);
    return d.jsxs("div", {
        className: a,
        children: [d.jsx(ok, {
            title: e,
            alt: e,
            image: t,
            url: n,
            loading: r
        }), d.jsx(uk, {
            title: e,
            url: n,
            loading: r,
            labels: i,
            date: o,
            author: s
        })]
    })
}
const ly = L.memo(ck);

function fk() {
    return d.jsxs("div", {
        className: "flex flex-1 flex-col",
        children: [d.jsxs("div", {
            className: "pb-4",
            children: [d.jsx("div", {
                className: "mb-2 h-3 w-[80%] rounded-full bg-slate-300"
            }), d.jsx("div", {
                className: "h-3 w-[60%] rounded-full bg-slate-300"
            })]
        }), d.jsx("div", {
            className: "pb-4",
            children: d.jsx("div", {
                className: "h-3 w-[40%] rounded-full bg-slate-300"
            })
        }), d.jsx("div", {
            className: "flex flex-wrap justify-between sm:flex-nowrap",
            children: d.jsx("div", {
                className: "mb-6 w-full sm:mb-0 sm:w-auto",
                children: d.jsx(ui, {
                    loading: !0
                })
            })
        })]
    })
}
const dk = L.memo(fk);

function hk({
    title: e,
    url: t,
    date: n,
    author: r,
    loading: i,
    labels: o,
    description: s
}) {
    return i ? d.jsx(dk, {}) : d.jsxs("div", {
        className: "",
        children: [d.jsx("div", {
            className: "pt-0",
            children: o == null ? void 0 : o.map(l => d.jsx(Ec, {
                title: l.title,
                url: l.url
            }, l.title))
        }), d.jsx("div", {
            className: "pb-0 md:pb-2",
            children: d.jsx(Ot, {
                to: t || "",
                className: "inline-block",
                children: d.jsx("h2", {
                    className: "w-full whitespace-normal text-lg font-bold text-slate-700 sm:text-base",
                    children: e
                })
            })
        }), d.jsx("div", {
            className: "pb-4",
            children: d.jsx("p", {
                className: "text-xs text-slate-700",
                children: n && `Published on ${n}`
            })
        }), d.jsx("div", {
            className: "flex-1 pb-6",
            children: d.jsx("p", {
                className: "text-sm text-slate-700",
                children: s
            })
        }), d.jsx("div", {
            className: "flex flex-wrap justify-between sm:flex-nowrap",
            children: d.jsx("div", {
                className: "w-full sm:mb-0 sm:w-auto",
                children: d.jsx(ui, {
                    ...r
                })
            })
        })]
    })
}
const pk = L.memo(hk);

function mk({
    title: e,
    description: t,
    url: n,
    loading: r,
    labels: i,
    date: o,
    author: s,
    border: l = !0,
    wrapperClassName: a
}) {
    const c = g.useMemo(() => Re("c-post-card relative overflow-hidden border-slate-300 bg-white p-0 sm:border sm:p-6", a, {
        "sm:border": l
    }), [a, l]);
    return d.jsx("div", {
        className: c,
        children: d.jsx(pk, {
            title: e,
            url: n,
            loading: r,
            labels: i,
            date: o,
            author: s,
            description: t
        })
    })
}
const ay = L.memo(mk);

function gk({
    value: e,
    type: t,
    className: n,
    wrapperClassName: r,
    placeholder: i,
    name: o,
    defaultValue: s,
    onBlur: l,
    onChange: a
}) {
    const c = Re("c-text-field-input", "w-full border-b border-slate-300 px-0 pb-2 pt-2 text-slate-700 outline-none placeholder:text-slate-500 focus:hover:border-slate-700", n),
        u = Re("c-text-field", r);
    return d.jsx("div", {
        className: u,
        children: d.jsx("input", {
            name: o,
            placeholder: i,
            "aria-label": i,
            type: t,
            value: e,
            className: c,
            defaultValue: s,
            onBlur: l,
            onChange: a
        })
    })
}
const yk = L.memo(gk);

function vk({
    options: e = [],
    type: t = "submit",
    name: n,
    loading: r,
    onChange: i,
    value: o
}) {
    const [s, l] = g.useState(o || []), a = g.useMemo(() => Re("c-multi-select"), []);

    function c(u) {
        let f = [...s];
        f.some(h => h.value === u.value) ? f = f.filter(h => h.value !== u.value) : f.push(u), l(f), i && i(f)
    }
    return r ? d.jsxs("div", {
        children: [d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"
        })]
    }) : d.jsx("div", {
        className: a,
        children: e.map(u => {
            const f = s.some(h => h.value === u.value);
            return d.jsx("button", {
                className: Re("c-multi-select", "mb-2 mr-2 inline-block border border-slate-300 px-2 py-1 text-xs text-slate-700 duration-150 hover:border-slate-700 hover:bg-slate-700 hover:text-white", f ? "border-slate-700 bg-slate-700 font-semibold text-white" : ""),
                name: n,
                type: t,
                value: u.value,
                onClick: () => c(u),
                children: f ? `#${u.text}` : u.text
            }, u.id)
        })
    })
}
const wk = L.memo(vk);

function xk(e) {
    return e.map(t => ({
        id: t.id,
        text: t.title,
        value: t.title
    }))
}

function Ek() {
    const e = u1(),
        [t, n] = mw(),
        r = t.get("labels") || "",
        i = t.get("q") || "",
        o = Object.fromEntries(t.entries()),
        s = r ? r.split(",").map((f, h) => ({
            id: h + 1,
            value: f,
            text: f
        })) : [],
        l = xk(e.items);

    function a(f) {
        const h = f.map(x => x.value).join();
        n(x => ({
            ...x,
            ...o,
            labels: h
        }))
    }

    function c(f) {
        const {
            value: h
        } = f.target;
        n(x => ({
            ...x,
            ...o,
            q: h
        }))
    }

    function u(f) {
        var h;
        (h = f == null ? void 0 : f.preventDefault) == null || h.call(f), n(x => ({
            ...x,
            ...o
        }))
    }
    return d.jsxs(cC, {
        onSubmit: u,
        className: "c-search-filter border-b border-slate-300 px-6 pb-6 md:border md:p-6",
        children: [d.jsx("div", {
            className: "c-form-group mb-6",
            children: d.jsx(yk, {
                name: "q",
                type: "search",
                placeholder: "Type anything to search...",
                defaultValue: i || "",
                onChange: c
            })
        }), d.jsx("div", {
            className: "c-form-group",
            children: d.jsx(wk, {
                loading: e.isLoading,
                name: "labels",
                type: "button",
                value: s,
                options: l,
                onChange: a
            })
        })]
    })
}
const Sk = L.memo(Ek),
    uy = [1, 2, 3, 4];

function bk({
    title: e,
    loading: t,
    items: n,
    empty: r
}) {
    const i = () => t ? d.jsx(d.Fragment, {
            children: uy.map((s, l) => d.jsx("div", {
                className: Re("mb-6 inline-block w-full border-b border-slate-300 px-6 pb-6 sm:mb-0 sm:border-none sm:px-0", l === uy.length - 1 ? "!mb-0 !border-b-0 sm:!pb-0" : ""),
                children: d.jsx(ay, {
                    loading: t
                })
            }, s))
        }) : r ? d.jsx("div", {
            className: "w-full border border-slate-300 p-6 text-center text-slate-700",
            children: d.jsx("p", {
                children: "Result not found"
            })
        }) : d.jsx("div", {
            className: "block sm:pb-6",
            children: n.map((s, l) => {
                var a;
                return d.jsx("div", {
                    className: Re("mb-6 inline-block w-full border-b border-slate-300 px-6 pb-6 sm:mb-0 sm:border-none sm:px-0", l === n.length - 1 ? "!mb-0 !border-b-0 sm:!pb-0" : ""),
                    children: d.jsx(ay, {
                        loading: t,
                        image: (a = s.images) == null ? void 0 : a[0].url,
                        title: s.title,
                        labels: s.labels,
                        url: s.to,
                        description: s.summary,
                        date: ts(s.published, "MMM DD, YYYY"),
                        author: ns(s.author)
                    })
                }, `simple-post-${s.id}`)
            })
        }),
        o = () => d.jsx("div", {
            className: "block",
            children: i()
        });
    return d.jsx("div", {
        className: "c-base-post-list",
        children: d.jsxs(Tn, {
            className: "px-0 sm:px-6",
            children: [d.jsx(Vl, {
                title: e || "Post List"
            }), d.jsx("div", {
                className: "sm:px-0",
                children: o()
            })]
        })
    })
}
const U1 = L.memo(bk);

function Ck({
    title: e,
    items: t,
    loading: n
}) {
    function r() {
        return n ? d.jsx("div", {
            className: "sm:px-0",
            children: [1, 2, 3].map(i => d.jsx(Xg, {
                loading: !0
            }, i))
        }) : d.jsx("div", {
            className: "px-6 sm:px-0",
            children: t.map(i => d.jsx(Xg, {
                title: i.title,
                url: i.to
            }, i.id))
        })
    }
    return d.jsx("div", {
        className: "c-simple-post-list mb-6",
        children: d.jsxs(Tn, {
            className: "px-0 sm:px-6",
            children: [d.jsx(Vl, {
                title: e || "Post List"
            }), r()]
        })
    })
}
const Tk = L.memo(Ck);

function Rk() {
    const {
        title: e,
        logo: t,
        isLoading: n,
        headerLinks: r
    } = Nn();
    return d.jsx(WO, {
        title: e,
        logo: t,
        loading: n,
        menus: r
    })
}
const _k = L.memo(Rk);

function Pk({
    type: e,
    show: t,
    title: n,
    data: r
}) {
    if (!t) return null;
    switch (e) {
        case "featured-post":
            return d.jsx(Ok, {
                title: n
            });
        case "labeled-post":
            return d.jsx(Dk, {
                title: n,
                label: r.label || ""
            });
        case "label-list":
            return d.jsx(jk, {
                title: n
            });
        case "latest-post":
            return d.jsx(Mk, {
                title: n
            });
        case "related-post":
            return d.jsx(Fk, {
                title: n,
                ...r
            });
        case "blogger-comment":
            return d.jsx(Uk, {});
        case "blogger-post-detail":
            return d.jsx(zk, {});
        case "disqus-comment":
            return d.jsx(QD, {});
        default:
            return null
    }
}
const Xs = L.memo(Pk);

function Nk({
    title: e
}) {
    const t = l1(),
        n = () => t.isLoading ? d.jsx(sy, {
            loading: t.isLoading
        }) : d.jsx(d.Fragment, {
            children: t.items.map(r => {
                var i;
                return d.jsx(sy, {
                    loading: t.isLoading,
                    image: (i = r.images) == null ? void 0 : i[0].url,
                    title: r.title,
                    labels: r.labels,
                    url: r.to,
                    description: r.summary,
                    date: ts(r.published, "MMM DD, YYYY"),
                    author: ns(r.author)
                }, `featured-post-${r.id}`)
            })
        });
    return d.jsxs(Tn, {
        className: "px-0 sm:px-6",
        children: [d.jsx(Vl, {
            title: e || "Featured Post"
        }), d.jsx("div", {
            className: "px-6 sm:px-0",
            children: n()
        }), d.jsx("div", {
            className: "mb-6 w-full border-b border-slate-300 pb-6 sm:mb-0 sm:border-0"
        })]
    })
}
const Ok = L.memo(Nk),
    cy = [1, 2, 3, 4];

function kk({
    label: e,
    title: t
}) {
    const {
        ref: n,
        inView: r
    } = rs(), i = a1({
        label: e,
        enabled: r
    }), o = b_("(min-width: 640px)"), s = () => i.isLoading || !r ? d.jsx(d.Fragment, {
        children: cy.map((a, c) => d.jsx("div", {
            className: Re("inline-block w-full border-b p-6 sm:w-72 sm:border-none sm:p-0", {
                "sm:mr-6": c !== cy.length - 1
            }),
            children: d.jsx(ly, {
                loading: !0
            })
        }, a))
    }) : d.jsx(d.Fragment, {
        children: i.items.map((a, c) => {
            var u;
            return d.jsx("div", {
                className: Re("inline-block w-full border-b p-6 sm:w-72 sm:border-none sm:p-0", {
                    "sm:mr-6": c !== i.items.length - 1
                }),
                children: d.jsx(ly, {
                    loading: i.isLoading,
                    image: (u = a.images) == null ? void 0 : u[0].url,
                    title: o ? r1(a.title, 45, "...") : a.title,
                    labels: a.labels,
                    url: a.to,
                    date: ts(a.published, "MMM DD, YYYY"),
                    author: ns(a.author)
                })
            }, `labeled-post-${a.id}`)
        })
    }), l = () => d.jsx("div", {
        className: "block flex-nowrap sm:overflow-x-auto sm:whitespace-nowrap sm:pb-8",
        children: s()
    });
    return d.jsxs(Tn, {
        ref: n,
        className: "px-0 sm:px-6",
        children: [d.jsx(Vl, {
            title: t || String(e) || "Post by Category"
        }), d.jsx("div", {
            className: "sm:px-0",
            children: l()
        }), d.jsx("div", {
            className: "mb-6 w-full border-b border-slate-300 sm:mb-0 sm:border-0"
        })]
    })
}
const Dk = L.memo(kk);

function Lk({
    title: e
}) {
    const {
        ref: t,
        inView: n
    } = rs(), r = u1(), i = () => r.isLoading || !n ? d.jsxs("div", {
        children: [d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-16 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-14 rounded-full bg-slate-300"
        }), d.jsx("div", {
            className: "mb-1 mr-2 inline-block h-6 w-24 rounded-full bg-slate-300"
        })]
    }) : d.jsx("div", {
        className: "block sm:pb-8",
        children: r.items.map(s => d.jsx(Ec, {
            title: `${s.title} (${s.count})`,
            url: s.url,
            className: "mb-2 border border-slate-300 px-2 py-1 text-sm transition-colors duration-150 hover:border-slate-700 hover:bg-slate-700 hover:text-white"
        }, s.id))
    }), o = () => d.jsx("div", {
        className: "block sm:pb-8",
        children: i()
    });
    return d.jsxs(Tn, {
        ref: t,
        className: "px-0 sm:px-6",
        children: [d.jsx(Vl, {
            title: e || "Label List"
        }), d.jsx("div", {
            className: "px-6 sm:px-0",
            children: o()
        })]
    })
}
const jk = L.memo(Lk);

function Ak({
    title: e
}) {
    const {
        ref: t,
        inView: n
    } = rs(), r = x_({
        enabled: n
    }), i = () => d.jsx(Tn, {
        className: "px-6",
        children: d.jsx("div", {
            className: "pb-6 text-center",
            children: r.isFetchingNextPage ? d.jsx(Du, {
                onClick: () => r.fetchNextPage(),
                className: "",
                children: "Loading..."
            }) : r.hasNextPage ? d.jsx(Du, {
                onClick: () => r.fetchNextPage(),
                className: "",
                children: "See More"
            }) : null
        })
    });
    return d.jsxs("div", {
        ref: t,
        className: "latest-post",
        children: [d.jsx(U1, {
            title: e,
            loading: r.isLoading || !n,
            items: r.items
        }), i()]
    })
}
const Mk = L.memo(Ak);

function Ik({
    title: e
}) {
    var i, o, s, l;
    const {
        id: t
    } = xc(), n = wc({
        id: t,
        byPath: !0
    }), r = a1({
        label: (o = (i = n == null ? void 0 : n.breadCrumb) == null ? void 0 : i[0]) == null ? void 0 : o.title,
        showImage: !1,
        excludes: (s = n.data) != null && s.id ? [(l = n.data) == null ? void 0 : l.id] : []
    });
    return d.jsx(Tk, {
        title: e || "Related Post",
        loading: n.isLoading || r.isLoading,
        items: r.items
    })
}
const Fk = L.memo(Ik);

function $k() {
    var u, f, h, x;
    const {
        ref: e,
        inView: t
    } = rs(), {
        id: n
    } = xc(), r = wc({
        id: n,
        byPath: !0
    }), i = T_({
        postId: (u = r.data) == null ? void 0 : u.id,
        enabled: t
    }), o = ((f = i.data) == null ? void 0 : f.items) || [], s = ((x = (h = r.data) == null ? void 0 : h.replies) == null ? void 0 : x.totalItems) || 0;

    function l() {
        return d.jsx("div", {
            className: "mb-4",
            children: d.jsx("p", {
                className: "text-lg font-bold text-slate-700",
                children: s ? s === 1 ? "1 Comment" : `${s} Comments` : "No Comment"
            })
        })
    }

    function a() {
        return i.isLoading || !t ? null : d.jsx(d.Fragment, {
            children: o.map(y => {
                const w = ns(y.author);
                return d.jsx(y1, {
                    id: y.id,
                    author: {
                        name: w.title,
                        image: w.image
                    },
                    content: y.content,
                    date: ts(y.published, "Commented on MMM DD, YYYY"),
                    replies: y.replies
                }, y.id)
            })
        })
    }

    function c() {
        return null
    }
    return d.jsxs("div", {
        ref: e,
        className: "px-6 pb-6",
        children: [l(), a(), c()]
    })
}
const Uk = L.memo($k);


function Bk() {
    var n, r;
    const {
        id: e
    } = xc(), t = wc({
        id: e,
        byPath: !0
    });
    return d.jsx(oP, {
        loading: t.isLoading,
        title: ((n = t.data) == null ? void 0 : n.title) || "",
        author: t.author,
        breadcrumb: t.breadCrumb,
        content: ((r = t.data) == null ? void 0 : r.content) || ""
    })
}
const zk = L.memo(Bk);
var B1 = {},
    Nc = {},
    z1 = {
        exports: {}
    },
    Hk = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
    Wk = Hk,
    Vk = Wk;

function H1() {}

function W1() {}
W1.resetWarningCache = H1;
var qk = function() {
    function e(r, i, o, s, l, a) {
        if (a !== Vk) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation", c
        }
    }
    e.isRequired = e;

    function t() {
        return e
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: W1,
        resetWarningCache: H1
    };
    return n.PropTypes = n, n
};
z1.exports = qk();
var Gl = z1.exports;
const fe = $i(Gl);
var qn = {};
Object.defineProperty(qn, "__esModule", {
    value: !0
});
qn.insertScript = Yk;
qn.removeScript = Xk;
qn.removeResources = Jk;
qn.debounce = Zk;
qn.isReactElement = V1;
qn.shallowComparison = q1;
var fy = Qk(g);

function Qk(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Ja(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ja = function(n) {
        return typeof n
    } : Ja = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Ja(e)
}

function Kk(e) {
    if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
        if (Array.isArray(e) || (e = Gk(e))) {
            var t = 0,
                n = function() {};
            return {
                s: n,
                n: function() {
                    return t >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[t++]
                    }
                },
                e: function(a) {
                    throw a
                },
                f: n
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var r, i = !0,
        o = !1,
        s;
    return {
        s: function() {
            r = e[Symbol.iterator]()
        },
        n: function() {
            var a = r.next();
            return i = a.done, a
        },
        e: function(a) {
            o = !0, s = a
        },
        f: function() {
            try {
                !i && r.return != null && r.return()
            } finally {
                if (o) throw s
            }
        }
    }
}

function Gk(e, t) {
    if (e) {
        if (typeof e == "string") return dy(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dy(e, t)
    }
}

function dy(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r
}

function Yk(e, t, n) {
    var r = window.document.createElement("script");
    return r.async = !0, r.src = e, r.id = t, n.appendChild(r), r
}

function Xk(e, t) {
    var n = window.document.getElementById(e);
    n && t.removeChild(n)
}

function Jk() {
    var e = window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]');
    e.forEach(function(t) {
        return t.remove()
    })
}

function Zk(e, t, n) {
    var r;
    return function() {
        var i = this,
            o = arguments,
            s = function() {
                r = null, n || e.apply(i, o)
            },
            l = n && !r;
        window.clearTimeout(r), r = setTimeout(s, t), l && e.apply(i, o)
    }
}

function V1(e) {
    return fy.default.isValidElement(e) ? !0 : Array.isArray(e) ? e.some(function(t) {
        return fy.default.isValidElement(t)
    }) : !1
}

function q1(e, t) {
    var n = new Set(Object.keys(e), Object.keys(t)),
        r = Kk(n),
        i;
    try {
        for (r.s(); !(i = r.n()).done;) {
            var o = i.value;
            if (Ja(e[o]) === "object") {
                if (q1(e[o], t[o])) return !0
            } else if (e[o] !== t[o] && !V1(e[o])) return !0
        }
    } catch (s) {
        r.e(s)
    } finally {
        r.f()
    }
    return !1
}
var De = {};
Object.defineProperty(De, "__esModule", {
    value: !0
});
De.CALLBACKS = De.RECOMMENDATIONS_SCRIPT_ID = De.RECOMMENDATIONS_ID = De.COMMENT_EMBED_HEIGHT = De.COMMENT_EMBED_WIDTH = De.COMMENT_COUNT_SCRIPT_ID = De.COMMENT_COUNT_CLASS = De.EMBED_SCRIPT_ID = De.THREAD_ID = void 0;
var eD = "disqus_thread";
De.THREAD_ID = eD;
var tD = "dsq-embed-scr";
De.EMBED_SCRIPT_ID = tD;
var nD = "disqus-comment-count";
De.COMMENT_COUNT_CLASS = nD;
var rD = "dsq-count-scr";
De.COMMENT_COUNT_SCRIPT_ID = rD;
var iD = 420;
De.COMMENT_EMBED_WIDTH = iD;
var oD = 320;
De.COMMENT_EMBED_HEIGHT = oD;
var sD = "disqus_recommendations";
De.RECOMMENDATIONS_ID = sD;
var lD = "dsq-recs-scr";
De.RECOMMENDATIONS_SCRIPT_ID = lD;
var aD = ["preData", "preInit", "onInit", "onReady", "afterRender", "preReset", "onIdentify", "beforeComment", "onNewComment", "onPaginate"];
De.CALLBACKS = aD;
Object.defineProperty(Nc, "__esModule", {
    value: !0
});
Nc.CommentCount = void 0;
var hy = Q1(g),
    di = Q1(Gl),
    $s = qn,
    Na = De;

function Q1(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function Za(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Za = function(n) {
        return typeof n
    } : Za = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Za(e)
}

function ph() {
    return ph = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, ph.apply(this, arguments)
}

function uD(e, t) {
    if (e == null) return {};
    var n = cD(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function cD(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function fD(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function py(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function dD(e, t, n) {
    return t && py(e.prototype, t), n && py(e, n), e
}

function hD(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && mh(e, t)
}

function mh(e, t) {
    return mh = Object.setPrototypeOf || function(r, i) {
        return r.__proto__ = i, r
    }, mh(e, t)
}

function pD(e) {
    var t = yD();
    return function() {
        var n = Fu(e),
            r;
        if (t) {
            var i = Fu(this).constructor;
            r = Reflect.construct(n, arguments, i)
        } else r = n.apply(this, arguments);
        return mD(this, r)
    }
}

function mD(e, t) {
    return t && (Za(t) === "object" || typeof t == "function") ? t : gD(e)
}

function gD(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function yD() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
    } catch {
        return !1
    }
}

function Fu(e) {
    return Fu = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Fu(e)
}
var vD = (0, $s.debounce)(function() {
        window.DISQUSWIDGETS && window.DISQUSWIDGETS.getCount({
            reset: !0
        })
    }, 300, !1),
    K1 = function(e) {
        hD(n, e);
        var t = pD(n);

        function n() {
            return fD(this, n), t.apply(this, arguments)
        }
        return dD(n, [{
            key: "componentDidMount",
            value: function() {
                this.loadInstance()
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(i) {
                return this.props === i ? !1 : (0, $s.shallowComparison)(this.props, i)
            }
        }, {
            key: "componentDidUpdate",
            value: function(i) {
                this.props.shortname !== i.shortname && this.cleanInstance(), this.loadInstance()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.cleanInstance()
            }
        }, {
            key: "loadInstance",
            value: function() {
                var i = window.document;
                i.getElementById(Na.COMMENT_COUNT_SCRIPT_ID) ? vD() : (0, $s.insertScript)("https://".concat(this.props.shortname, ".disqus.com/count.js"), Na.COMMENT_COUNT_SCRIPT_ID, i.body)
            }
        }, {
            key: "cleanInstance",
            value: function() {
                var i = window.document;
                (0, $s.removeScript)(Na.COMMENT_COUNT_SCRIPT_ID, i.body), window.DISQUSWIDGETS = void 0, (0, $s.removeResources)()
            }
        }, {
            key: "render",
            value: function() {
                var i = this.props;
                i.shortname;
                var o = i.config,
                    s = i.children,
                    l = i.className,
                    a = uD(i, ["shortname", "config", "children", "className"]),
                    c = l ? " ".concat(l) : "";
                return hy.default.createElement("span", ph({}, a, {
                    className: "".concat(Na.COMMENT_COUNT_CLASS).concat(c),
                    "data-disqus-identifier": o.identifier,
                    "data-disqus-url": o.url
                }), s)
            }
        }]), n
    }(hy.default.Component);
Nc.CommentCount = K1;
K1.propTypes = {
    shortname: di.default.string.isRequired,
    config: di.default.shape({
        identifier: di.default.string,
        url: di.default.string,
        title: di.default.string
    }).isRequired,
    className: di.default.string,
    children: di.default.node
};
var Oc = {};
Object.defineProperty(Oc, "__esModule", {
    value: !0
});
Oc.CommentEmbed = void 0;
var my = G1(g),
    Yi = G1(Gl),
    gy = De;

function G1(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function eu(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? eu = function(n) {
        return typeof n
    } : eu = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, eu(e)
}

function gh() {
    return gh = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, gh.apply(this, arguments)
}

function wD(e, t) {
    if (e == null) return {};
    var n = xD(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function xD(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function ED(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function yy(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function SD(e, t, n) {
    return t && yy(e.prototype, t), n && yy(e, n), e
}

function bD(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && yh(e, t)
}

function yh(e, t) {
    return yh = Object.setPrototypeOf || function(r, i) {
        return r.__proto__ = i, r
    }, yh(e, t)
}

function CD(e) {
    var t = _D();
    return function() {
        var n = $u(e),
            r;
        if (t) {
            var i = $u(this).constructor;
            r = Reflect.construct(n, arguments, i)
        } else r = n.apply(this, arguments);
        return TD(this, r)
    }
}

function TD(e, t) {
    return t && (eu(t) === "object" || typeof t == "function") ? t : RD(e)
}

function RD(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function _D() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
    } catch {
        return !1
    }
}

function $u(e) {
    return $u = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, $u(e)
}
var zp = function(e) {
    bD(n, e);
    var t = CD(n);

    function n() {
        return ED(this, n), t.apply(this, arguments)
    }
    return SD(n, [{
        key: "getSrc",
        value: function() {
            var i = 36,
                o = Number(this.props.commentId).toString(i),
                s = this.props.showParentComment ? "1" : "0",
                l = this.props.showMedia ? "1" : "0";
            return "https://embed.disqus.com/p/".concat(o, "?p=").concat(s, "&m=").concat(l)
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props,
                o = i.width,
                s = i.height;
            i.commentId, i.showMedia, i.showParentComment;
            var l = wD(i, ["width", "height", "commentId", "showMedia", "showParentComment"]);
            return my.default.createElement("iframe", gh({}, l, {
                src: this.getSrc(),
                width: o,
                height: s,
                seamless: "seamless",
                scrolling: "no",
                frameBorder: "0"
            }))
        }
    }]), n
}(my.default.Component);
Oc.CommentEmbed = zp;
zp.defaultProps = {
    showMedia: !0,
    showParentComment: !0,
    width: gy.COMMENT_EMBED_WIDTH,
    height: gy.COMMENT_EMBED_HEIGHT
};
zp.propTypes = {
    commentId: Yi.default.string.isRequired,
    showMedia: Yi.default.bool,
    showParentComment: Yi.default.bool,
    width: Yi.default.number,
    height: Yi.default.number,
    className: Yi.default.string
};
var kc = {};
Object.defineProperty(kc, "__esModule", {
    value: !0
});
kc.DiscussionEmbed = void 0;
var vy = Y1(g),
    Se = Y1(Gl),
    Oa = qn,
    Xi = De;

function Y1(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function tu(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? tu = function(n) {
        return typeof n
    } : tu = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, tu(e)
}

function vh() {
    return vh = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, vh.apply(this, arguments)
}

function PD(e, t) {
    if (e == null) return {};
    var n = ND(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function ND(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function OD(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function wy(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function kD(e, t, n) {
    return t && wy(e.prototype, t), n && wy(e, n), e
}

function DD(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && wh(e, t)
}

function wh(e, t) {
    return wh = Object.setPrototypeOf || function(r, i) {
        return r.__proto__ = i, r
    }, wh(e, t)
}

function LD(e) {
    var t = MD();
    return function() {
        var n = Uu(e),
            r;
        if (t) {
            var i = Uu(this).constructor;
            r = Reflect.construct(n, arguments, i)
        } else r = n.apply(this, arguments);
        return jD(this, r)
    }
}

function jD(e, t) {
    return t && (tu(t) === "object" || typeof t == "function") ? t : AD(e)
}

function AD(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function MD() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
    } catch {
        return !1
    }
}

function Uu(e) {
    return Uu = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Uu(e)
}
var X1 = function(e) {
    DD(n, e);
    var t = LD(n);

    function n() {
        return OD(this, n), t.apply(this, arguments)
    }
    return kD(n, [{
        key: "componentDidMount",
        value: function() {
            typeof window < "u" && window.disqus_shortname && window.disqus_shortname !== this.props.shortname && this.cleanInstance(), this.loadInstance()
        }
    }, {
        key: "shouldComponentUpdate",
        value: function(i) {
            return this.props === i ? !1 : (0, Oa.shallowComparison)(this.props, i)
        }
    }, {
        key: "componentDidUpdate",
        value: function(i) {
            this.props.shortname !== i.shortname && this.cleanInstance(), this.loadInstance()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.cleanInstance()
        }
    }, {
        key: "loadInstance",
        value: function() {
            var i = window.document;
            window && window.DISQUS && i.getElementById(Xi.EMBED_SCRIPT_ID) ? window.DISQUS.reset({
                reload: !0,
                config: this.getDisqusConfig(this.props.config)
            }) : (window.disqus_config = this.getDisqusConfig(this.props.config), window.disqus_shortname = this.props.shortname, (0, Oa.insertScript)("https://".concat(this.props.shortname, ".disqus.com/embed.js"), Xi.EMBED_SCRIPT_ID, i.body))
        }
    }, {
        key: "cleanInstance",
        value: function() {
            var i = window.document;
            (0, Oa.removeScript)(Xi.EMBED_SCRIPT_ID, i.body), window && window.DISQUS && window.DISQUS.reset({});
            try {
                delete window.DISQUS
            } catch {
                window.DISQUS = void 0
            }
            var o = i.getElementById(Xi.THREAD_ID);
            if (o)
                for (; o.hasChildNodes();) o.removeChild(o.firstChild);
            (0, Oa.removeResources)()
        }
    }, {
        key: "getDisqusConfig",
        value: function(i) {
            return function() {
                var o = this;
                this.page.identifier = i.identifier, this.page.url = i.url, this.page.title = i.title, this.page.category_id = i.categoryID, this.page.remote_auth_s3 = i.remoteAuthS3, this.page.api_key = i.apiKey, i.sso && (this.sso = i.sso), i.language && (this.language = i.language), Xi.CALLBACKS.forEach(function(s) {
                    o.callbacks[s] = [i[s]]
                })
            }
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props;
            i.shortname, i.config;
            var o = PD(i, ["shortname", "config"]);
            return vy.default.createElement("div", vh({}, o, {
                id: Xi.THREAD_ID
            }))
        }
    }]), n
}(vy.default.Component);
kc.DiscussionEmbed = X1;
X1.propTypes = {
    shortname: Se.default.string.isRequired,
    config: Se.default.shape({
        identifier: Se.default.string,
        url: Se.default.string,
        title: Se.default.string,
        language: Se.default.string,
        categoryID: Se.default.string,
        remoteAuthS3: Se.default.string,
        apiKey: Se.default.string,
        preData: Se.default.func,
        preInit: Se.default.func,
        onInit: Se.default.func,
        onReady: Se.default.func,
        afterRender: Se.default.func,
        preReset: Se.default.func,
        onIdentify: Se.default.func,
        beforeComment: Se.default.func,
        onNewComment: Se.default.func,
        onPaginate: Se.default.func,
        sso: Se.default.shape({
            name: Se.default.string,
            button: Se.default.string,
            icon: Se.default.string,
            url: Se.default.string,
            logout: Se.default.string,
            profile_url: Se.default.string,
            width: Se.default.string,
            height: Se.default.string
        })
    }).isRequired
};
var Dc = {};
Object.defineProperty(Dc, "__esModule", {
    value: !0
});
Dc.Recommendations = void 0;
var xy = J1(g),
    Ji = J1(Gl),
    ka = qn,
    Ns = De;

function J1(e) {
    return e && e.__esModule ? e : {
        default: e
    }
}

function nu(e) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? nu = function(n) {
        return typeof n
    } : nu = function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, nu(e)
}

function xh() {
    return xh = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, xh.apply(this, arguments)
}

function ID(e, t) {
    if (e == null) return {};
    var n = FD(e, t),
        r, i;
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (i = 0; i < o.length; i++) r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
    }
    return n
}

function FD(e, t) {
    if (e == null) return {};
    var n = {},
        r = Object.keys(e),
        i, o;
    for (o = 0; o < r.length; o++) i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n
}

function $D(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function Ey(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
    }
}

function UD(e, t, n) {
    return t && Ey(e.prototype, t), n && Ey(e, n), e
}

function BD(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), t && Eh(e, t)
}

function Eh(e, t) {
    return Eh = Object.setPrototypeOf || function(r, i) {
        return r.__proto__ = i, r
    }, Eh(e, t)
}

function zD(e) {
    var t = VD();
    return function() {
        var n = Bu(e),
            r;
        if (t) {
            var i = Bu(this).constructor;
            r = Reflect.construct(n, arguments, i)
        } else r = n.apply(this, arguments);
        return HD(this, r)
    }
}

function HD(e, t) {
    return t && (nu(t) === "object" || typeof t == "function") ? t : WD(e)
}

function WD(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function VD() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
    if (typeof Proxy == "function") return !0;
    try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
    } catch {
        return !1
    }
}

function Bu(e) {
    return Bu = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
        return n.__proto__ || Object.getPrototypeOf(n)
    }, Bu(e)
}
var Z1 = function(e) {
    BD(n, e);
    var t = zD(n);

    function n() {
        return $D(this, n), t.apply(this, arguments)
    }
    return UD(n, [{
        key: "componentDidMount",
        value: function() {
            this.loadInstance()
        }
    }, {
        key: "shouldComponentUpdate",
        value: function(i) {
            return this.props === i ? !1 : (0, ka.shallowComparison)(this.props, i)
        }
    }, {
        key: "componentDidUpdate",
        value: function() {
            this.loadInstance()
        }
    }, {
        key: "componentWillUnmount",
        value: function() {
            this.cleanInstance()
        }
    }, {
        key: "getDisqusConfig",
        value: function(i) {
            return function() {
                this.page.identifier = i.identifier, this.page.url = i.url, this.page.title = i.title, this.language = i.language
            }
        }
    }, {
        key: "loadInstance",
        value: function() {
            typeof window < "u" && window.document && (window.disqus_config = this.getDisqusConfig(this.props.config), window.document.getElementById(Ns.RECOMMENDATIONS_SCRIPT_ID) ? this.reloadInstance() : (0, ka.insertScript)("https://".concat(this.props.shortname, ".disqus.com/recommendations.js"), Ns.RECOMMENDATIONS_SCRIPT_ID, window.document.body))
        }
    }, {
        key: "reloadInstance",
        value: function() {
            window && window.DISQUS_RECOMMENDATIONS && window.DISQUS_RECOMMENDATIONS.reset({
                reload: !0
            })
        }
    }, {
        key: "cleanInstance",
        value: function() {
            (0, ka.removeScript)(Ns.RECOMMENDATIONS_SCRIPT_ID, window.document.body);
            try {
                delete window.DISQUS_RECOMMENDATIONS
            } catch {
                window.DISQUS_RECOMMENDATIONS = void 0
            }
            var i = window.document.getElementById(Ns.RECOMMENDATIONS_ID);
            if (i)
                for (; i.hasChildNodes();) i.removeChild(i.firstChild);
            (0, ka.removeResources)()
        }
    }, {
        key: "render",
        value: function() {
            var i = this.props;
            i.shortname, i.config;
            var o = ID(i, ["shortname", "config"]);
            return xy.default.createElement("div", xh({}, o, {
                id: Ns.RECOMMENDATIONS_ID
            }))
        }
    }]), n
}(xy.default.Component);
Dc.Recommendations = Z1;
Z1.propTypes = {
    shortname: Ji.default.string.isRequired,
    config: Ji.default.shape({
        identifier: Ji.default.string,
        url: Ji.default.string,
        title: Ji.default.string,
        language: Ji.default.string
    })
};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), Object.defineProperty(e, "CommentCount", {
        enumerable: !0,
        get: function() {
            return t.CommentCount
        }
    }), Object.defineProperty(e, "CommentEmbed", {
        enumerable: !0,
        get: function() {
            return n.CommentEmbed
        }
    }), Object.defineProperty(e, "DiscussionEmbed", {
        enumerable: !0,
        get: function() {
            return r.DiscussionEmbed
        }
    }), Object.defineProperty(e, "Recommendations", {
        enumerable: !0,
        get: function() {
            return i.Recommendations
        }
    }), e.default = void 0;
    var t = Nc,
        n = Oc,
        r = kc,
        i = Dc,
        o = {
            CommentCount: t.CommentCount,
            CommentEmbed: n.CommentEmbed,
            DiscussionEmbed: r.DiscussionEmbed,
            Recommendations: i.Recommendations
        },
        s = o;
    e.default = s
})(B1);

function qD() {
    var c, u, f, h, x;
    const {
        ref: e,
        inView: t
    } = rs(), {
        url: n,
        id: r
    } = xc(), i = wc({
        id: r,
        byPath: !0
    }), o = vc(), s = ((u = (c = o.data) == null ? void 0 : c.disqus) == null ? void 0 : u.username) || "", l = {
        url: n,
        identifier: (f = i.data) == null ? void 0 : f.id,
        title: (h = i.data) == null ? void 0 : h.title
    };
    console.log("config", l);
    const a = !t || o.isLoading || i.isLoading || !((x = i.data) != null && x.id);
    return d.jsx("div", {
        ref: e,
        className: "px-6 pb-6",
        children: !a && d.jsx(B1.DiscussionEmbed, {
            shortname: s,
            config: l
        })
    })
}
const QD = g.memo(qD);

function KD({
    header: e,
    children: t,
    footer: n
}) {
    return d.jsxs("div", {
        className: "c-base-layout",
        children: [e, d.jsx("div", {
            className: "c-base-layout-main pt-20",
            children: t
        }), n]
    })
}

function GD({
    top: e,
    main: t,
    side: n,
    stickySide: r,
    bottom: i,
    sideAlign: o = "end"
}) {
    const s = g.useMemo(() => Re("mb-6 sm:px-0 md:top-20", r && "md:sticky"), [r]),
        l = () => d.jsx("aside", {
            className: "c-content-layout-side relative w-full md:w-4/12",
            children: d.jsx("div", {
                className: s,
                children: n
            })
        });
    return d.jsxs("div", {
        className: "c-content-layout",
        children: [e, d.jsx(Tn, {
            children: d.jsxs("div", {
                className: "relative flex flex-wrap",
                children: [o === "start" && l(), d.jsx("div", {
                    className: "c-content-layout-main w-full md:w-8/12",
                    children: t
                }), o === "end" && l()]
            })
        }), i]
    })
}
const Hp = L.memo(GD);
var YD = typeof Element < "u",
    XD = typeof Map == "function",
    JD = typeof Set == "function",
    ZD = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;

function ru(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
        if (e.constructor !== t.constructor) return !1;
        var n, r, i;
        if (Array.isArray(e)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (!ru(e[r], t[r])) return !1;
            return !0
        }
        var o;
        if (XD && e instanceof Map && t instanceof Map) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!t.has(r.value[0])) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!ru(r.value[1], t.get(r.value[0]))) return !1;
            return !0
        }
        if (JD && e instanceof Set && t instanceof Set) {
            if (e.size !== t.size) return !1;
            for (o = e.entries(); !(r = o.next()).done;)
                if (!t.has(r.value[0])) return !1;
            return !0
        }
        if (ZD && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
            if (n = e.length, n != t.length) return !1;
            for (r = n; r-- !== 0;)
                if (e[r] !== t[r]) return !1;
            return !0
        }
        if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
        if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
        if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
        if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length) return !1;
        for (r = n; r-- !== 0;)
            if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
        if (YD && e instanceof Element) return !1;
        for (r = n; r-- !== 0;)
            if (!((i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") && e.$$typeof) && !ru(e[i[r]], t[i[r]])) return !1;
        return !0
    }
    return e !== e && t !== t
}
var eL = function(t, n) {
    try {
        return ru(t, n)
    } catch (r) {
        if ((r.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
        throw r
    }
};
const tL = $i(eL);
var nL = function(e, t, n, r, i, o, s, l) {
        if (!e) {
            var a;
            if (t === void 0) a = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var c = [n, r, i, o, s, l],
                    u = 0;
                a = new Error(t.replace(/%s/g, function() {
                    return c[u++]
                })), a.name = "Invariant Violation"
            }
            throw a.framesToPop = 1, a
        }
    },
    rL = nL;
const Sy = $i(rL);
var iL = function(t, n, r, i) {
    var o = r ? r.call(i, t, n) : void 0;
    if (o !== void 0) return !!o;
    if (t === n) return !0;
    if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
    var s = Object.keys(t),
        l = Object.keys(n);
    if (s.length !== l.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(n), c = 0; c < s.length; c++) {
        var u = s[c];
        if (!a(u)) return !1;
        var f = t[u],
            h = n[u];
        if (o = r ? r.call(i, f, h, u) : void 0, o === !1 || o === void 0 && f !== h) return !1
    }
    return !0
};
const oL = $i(iL);

function We() {
    return We = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }, We.apply(this, arguments)
}

function Wp(e, t) {
    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Sh(e, t)
}

function Sh(e, t) {
    return Sh = Object.setPrototypeOf || function(n, r) {
        return n.__proto__ = r, n
    }, Sh(e, t)
}

function by(e, t) {
    if (e == null) return {};
    var n, r, i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (i[n] = e[n]);
    return i
}
var X = {
        BASE: "base",
        BODY: "body",
        HEAD: "head",
        HTML: "html",
        LINK: "link",
        META: "meta",
        NOSCRIPT: "noscript",
        SCRIPT: "script",
        STYLE: "style",
        TITLE: "title",
        FRAGMENT: "Symbol(react.fragment)"
    },
    sL = {
        rel: ["amphtml", "canonical", "alternate"]
    },
    lL = {
        type: ["application/ld+json"]
    },
    aL = {
        charset: "",
        name: ["robots", "description"],
        property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
    },
    Cy = Object.keys(X).map(function(e) {
        return X[e]
    }),
    zu = {
        accesskey: "accessKey",
        charset: "charSet",
        class: "className",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        "http-equiv": "httpEquiv",
        itemprop: "itemProp",
        tabindex: "tabIndex"
    },
    uL = Object.keys(zu).reduce(function(e, t) {
        return e[zu[t]] = t, e
    }, {}),
    So = function(e, t) {
        for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t]
        }
        return null
    },
    cL = function(e) {
        var t = So(e, X.TITLE),
            n = So(e, "titleTemplate");
        if (Array.isArray(t) && (t = t.join("")), n && t) return n.replace(/%s/g, function() {
            return t
        });
        var r = So(e, "defaultTitle");
        return t || r || void 0
    },
    fL = function(e) {
        return So(e, "onChangeClientState") || function() {}
    },
    Lf = function(e, t) {
        return t.filter(function(n) {
            return n[e] !== void 0
        }).map(function(n) {
            return n[e]
        }).reduce(function(n, r) {
            return We({}, n, r)
        }, {})
    },
    dL = function(e, t) {
        return t.filter(function(n) {
            return n[X.BASE] !== void 0
        }).map(function(n) {
            return n[X.BASE]
        }).reverse().reduce(function(n, r) {
            if (!n.length)
                for (var i = Object.keys(r), o = 0; o < i.length; o += 1) {
                    var s = i[o].toLowerCase();
                    if (e.indexOf(s) !== -1 && r[s]) return n.concat(r)
                }
            return n
        }, [])
    },
    Os = function(e, t, n) {
        var r = {};
        return n.filter(function(i) {
            return !!Array.isArray(i[e]) || (i[e] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + e + ' should be of type "Array". Instead found type "' + typeof i[e] + '"'), !1)
        }).map(function(i) {
            return i[e]
        }).reverse().reduce(function(i, o) {
            var s = {};
            o.filter(function(f) {
                for (var h, x = Object.keys(f), y = 0; y < x.length; y += 1) {
                    var w = x[y],
                        E = w.toLowerCase();
                    t.indexOf(E) === -1 || h === "rel" && f[h].toLowerCase() === "canonical" || E === "rel" && f[E].toLowerCase() === "stylesheet" || (h = E), t.indexOf(w) === -1 || w !== "innerHTML" && w !== "cssText" && w !== "itemprop" || (h = w)
                }
                if (!h || !f[h]) return !1;
                var m = f[h].toLowerCase();
                return r[h] || (r[h] = {}), s[h] || (s[h] = {}), !r[h][m] && (s[h][m] = !0, !0)
            }).reverse().forEach(function(f) {
                return i.push(f)
            });
            for (var l = Object.keys(s), a = 0; a < l.length; a += 1) {
                var c = l[a],
                    u = We({}, r[c], s[c]);
                r[c] = u
            }
            return i
        }, []).reverse()
    },
    hL = function(e, t) {
        if (Array.isArray(e) && e.length) {
            for (var n = 0; n < e.length; n += 1)
                if (e[n][t]) return !0
        }
        return !1
    },
    ex = function(e) {
        return Array.isArray(e) ? e.join("") : e
    },
    jf = function(e, t) {
        return Array.isArray(e) ? e.reduce(function(n, r) {
            return function(i, o) {
                for (var s = Object.keys(i), l = 0; l < s.length; l += 1)
                    if (o[s[l]] && o[s[l]].includes(i[s[l]])) return !0;
                return !1
            }(r, t) ? n.priority.push(r) : n.default.push(r), n
        }, {
            priority: [],
            default: []
        }) : {
            default: e
        }
    },
    Ty = function(e, t) {
        var n;
        return We({}, e, ((n = {})[t] = void 0, n))
    },
    pL = [X.NOSCRIPT, X.SCRIPT, X.STYLE],
    Af = function(e, t) {
        return t === void 0 && (t = !0), t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
    },
    Ry = function(e) {
        return Object.keys(e).reduce(function(t, n) {
            var r = e[n] !== void 0 ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r
        }, "")
    },
    _y = function(e, t) {
        return t === void 0 && (t = {}), Object.keys(e).reduce(function(n, r) {
            return n[zu[r] || r] = e[r], n
        }, t)
    },
    iu = function(e, t) {
        return t.map(function(n, r) {
            var i, o = ((i = {
                key: r
            })["data-rh"] = !0, i);
            return Object.keys(n).forEach(function(s) {
                var l = zu[s] || s;
                l === "innerHTML" || l === "cssText" ? o.dangerouslySetInnerHTML = {
                    __html: n.innerHTML || n.cssText
                } : o[l] = n[s]
            }), L.createElement(e, o)
        })
    },
    Xt = function(e, t, n) {
        switch (e) {
            case X.TITLE:
                return {
                    toComponent: function() {
                        return i = t.titleAttributes, (o = {
                            key: r = t.title
                        })["data-rh"] = !0, s = _y(i, o), [L.createElement(X.TITLE, s, r)];
                        var r, i, o, s
                    }, toString: function() {
                        return function(r, i, o, s) {
                            var l = Ry(o),
                                a = ex(i);
                            return l ? "<" + r + ' data-rh="true" ' + l + ">" + Af(a, s) + "</" + r + ">" : "<" + r + ' data-rh="true">' + Af(a, s) + "</" + r + ">"
                        }(e, t.title, t.titleAttributes, n)
                    }
                };
            case "bodyAttributes":
            case "htmlAttributes":
                return {
                    toComponent: function() {
                        return _y(t)
                    }, toString: function() {
                        return Ry(t)
                    }
                };
            default:
                return {
                    toComponent: function() {
                        return iu(e, t)
                    }, toString: function() {
                        return function(r, i, o) {
                            return i.reduce(function(s, l) {
                                var a = Object.keys(l).filter(function(f) {
                                        return !(f === "innerHTML" || f === "cssText")
                                    }).reduce(function(f, h) {
                                        var x = l[h] === void 0 ? h : h + '="' + Af(l[h], o) + '"';
                                        return f ? f + " " + x : x
                                    }, ""),
                                    c = l.innerHTML || l.cssText || "",
                                    u = pL.indexOf(r) === -1;
                                return s + "<" + r + ' data-rh="true" ' + a + (u ? "/>" : ">" + c + "</" + r + ">")
                            }, "")
                        }(e, t, n)
                    }
                }
        }
    },
    bh = function(e) {
        var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            i = e.htmlAttributes,
            o = e.noscriptTags,
            s = e.styleTags,
            l = e.title,
            a = l === void 0 ? "" : l,
            c = e.titleAttributes,
            u = e.linkTags,
            f = e.metaTags,
            h = e.scriptTags,
            x = {
                toComponent: function() {},
                toString: function() {
                    return ""
                }
            };
        if (e.prioritizeSeoTags) {
            var y = function(w) {
                var E = w.linkTags,
                    m = w.scriptTags,
                    p = w.encode,
                    v = jf(w.metaTags, aL),
                    R = jf(E, sL),
                    P = jf(m, lL);
                return {
                    priorityMethods: {
                        toComponent: function() {
                            return [].concat(iu(X.META, v.priority), iu(X.LINK, R.priority), iu(X.SCRIPT, P.priority))
                        },
                        toString: function() {
                            return Xt(X.META, v.priority, p) + " " + Xt(X.LINK, R.priority, p) + " " + Xt(X.SCRIPT, P.priority, p)
                        }
                    },
                    metaTags: v.default,
                    linkTags: R.default,
                    scriptTags: P.default
                }
            }(e);
            x = y.priorityMethods, u = y.linkTags, f = y.metaTags, h = y.scriptTags
        }
        return {
            priority: x,
            base: Xt(X.BASE, t, r),
            bodyAttributes: Xt("bodyAttributes", n, r),
            htmlAttributes: Xt("htmlAttributes", i, r),
            link: Xt(X.LINK, u, r),
            meta: Xt(X.META, f, r),
            noscript: Xt(X.NOSCRIPT, o, r),
            script: Xt(X.SCRIPT, h, r),
            style: Xt(X.STYLE, s, r),
            title: Xt(X.TITLE, {
                title: a,
                titleAttributes: c
            }, r)
        }
    },
    Da = [],
    Ch = function(e, t) {
        var n = this;
        t === void 0 && (t = typeof document < "u"), this.instances = [], this.value = {
            setHelmet: function(r) {
                n.context.helmet = r
            },
            helmetInstances: {
                get: function() {
                    return n.canUseDOM ? Da : n.instances
                },
                add: function(r) {
                    (n.canUseDOM ? Da : n.instances).push(r)
                },
                remove: function(r) {
                    var i = (n.canUseDOM ? Da : n.instances).indexOf(r);
                    (n.canUseDOM ? Da : n.instances).splice(i, 1)
                }
            }
        }, this.context = e, this.canUseDOM = t, t || (e.helmet = bh({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {}
        }))
    },
    tx = L.createContext({}),
    mL = fe.shape({
        setHelmet: fe.func,
        helmetInstances: fe.shape({
            get: fe.func,
            add: fe.func,
            remove: fe.func
        })
    }),
    gL = typeof document < "u",
    mo = function(e) {
        function t(n) {
            var r;
            return (r = e.call(this, n) || this).helmetData = new Ch(r.props.context, t.canUseDOM), r
        }
        return Wp(t, e), t.prototype.render = function() {
            return L.createElement(tx.Provider, {
                value: this.helmetData.value
            }, this.props.children)
        }, t
    }(g.Component);
mo.canUseDOM = gL, mo.propTypes = {
    context: fe.shape({
        helmet: fe.shape()
    }),
    children: fe.node.isRequired
}, mo.defaultProps = {
    context: {}
}, mo.displayName = "HelmetProvider";
var Zi = function(e, t) {
        var n, r = document.head || document.querySelector(X.HEAD),
            i = r.querySelectorAll(e + "[data-rh]"),
            o = [].slice.call(i),
            s = [];
        return t && t.length && t.forEach(function(l) {
            var a = document.createElement(e);
            for (var c in l) Object.prototype.hasOwnProperty.call(l, c) && (c === "innerHTML" ? a.innerHTML = l.innerHTML : c === "cssText" ? a.styleSheet ? a.styleSheet.cssText = l.cssText : a.appendChild(document.createTextNode(l.cssText)) : a.setAttribute(c, l[c] === void 0 ? "" : l[c]));
            a.setAttribute("data-rh", "true"), o.some(function(u, f) {
                return n = f, a.isEqualNode(u)
            }) ? o.splice(n, 1) : s.push(a)
        }), o.forEach(function(l) {
            return l.parentNode.removeChild(l)
        }), s.forEach(function(l) {
            return r.appendChild(l)
        }), {
            oldTags: o,
            newTags: s
        }
    },
    Mf = function(e, t) {
        var n = document.getElementsByTagName(e)[0];
        if (n) {
            for (var r = n.getAttribute("data-rh"), i = r ? r.split(",") : [], o = [].concat(i), s = Object.keys(t), l = 0; l < s.length; l += 1) {
                var a = s[l],
                    c = t[a] || "";
                n.getAttribute(a) !== c && n.setAttribute(a, c), i.indexOf(a) === -1 && i.push(a);
                var u = o.indexOf(a);
                u !== -1 && o.splice(u, 1)
            }
            for (var f = o.length - 1; f >= 0; f -= 1) n.removeAttribute(o[f]);
            i.length === o.length ? n.removeAttribute("data-rh") : n.getAttribute("data-rh") !== s.join(",") && n.setAttribute("data-rh", s.join(","))
        }
    },
    Py = function(e, t) {
        var n = e.baseTag,
            r = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            s = e.noscriptTags,
            l = e.onChangeClientState,
            a = e.scriptTags,
            c = e.styleTags,
            u = e.title,
            f = e.titleAttributes;
        Mf(X.BODY, e.bodyAttributes), Mf(X.HTML, r),
            function(w, E) {
                w !== void 0 && document.title !== w && (document.title = ex(w)), Mf(X.TITLE, E)
            }(u, f);
        var h = {
                baseTag: Zi(X.BASE, n),
                linkTags: Zi(X.LINK, i),
                metaTags: Zi(X.META, o),
                noscriptTags: Zi(X.NOSCRIPT, s),
                scriptTags: Zi(X.SCRIPT, a),
                styleTags: Zi(X.STYLE, c)
            },
            x = {},
            y = {};
        Object.keys(h).forEach(function(w) {
            var E = h[w],
                m = E.newTags,
                p = E.oldTags;
            m.length && (x[w] = m), p.length && (y[w] = h[w].oldTags)
        }), t && t(), l(e, x, y)
    },
    ks = null,
    Hu = function(e) {
        function t() {
            for (var r, i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
            return (r = e.call.apply(e, [this].concat(o)) || this).rendered = !1, r
        }
        Wp(t, e);
        var n = t.prototype;
        return n.shouldComponentUpdate = function(r) {
            return !oL(r, this.props)
        }, n.componentDidUpdate = function() {
            this.emitChange()
        }, n.componentWillUnmount = function() {
            this.props.context.helmetInstances.remove(this), this.emitChange()
        }, n.emitChange = function() {
            var r, i, o = this.props.context,
                s = o.setHelmet,
                l = null,
                a = (r = o.helmetInstances.get().map(function(c) {
                    var u = We({}, c.props);
                    return delete u.context, u
                }), {
                    baseTag: dL(["href"], r),
                    bodyAttributes: Lf("bodyAttributes", r),
                    defer: So(r, "defer"),
                    encode: So(r, "encodeSpecialCharacters"),
                    htmlAttributes: Lf("htmlAttributes", r),
                    linkTags: Os(X.LINK, ["rel", "href"], r),
                    metaTags: Os(X.META, ["name", "charset", "http-equiv", "property", "itemprop"], r),
                    noscriptTags: Os(X.NOSCRIPT, ["innerHTML"], r),
                    onChangeClientState: fL(r),
                    scriptTags: Os(X.SCRIPT, ["src", "innerHTML"], r),
                    styleTags: Os(X.STYLE, ["cssText"], r),
                    title: cL(r),
                    titleAttributes: Lf("titleAttributes", r),
                    prioritizeSeoTags: hL(r, "prioritizeSeoTags")
                });
            mo.canUseDOM ? (i = a, ks && cancelAnimationFrame(ks), i.defer ? ks = requestAnimationFrame(function() {
                Py(i, function() {
                    ks = null
                })
            }) : (Py(i), ks = null)) : bh && (l = bh(a)), s(l)
        }, n.init = function() {
            this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange())
        }, n.render = function() {
            return this.init(), null
        }, t
    }(g.Component);
Hu.propTypes = {
    context: mL.isRequired
}, Hu.displayName = "HelmetDispatcher";
var yL = ["children"],
    vL = ["children"],
    ou = function(e) {
        function t() {
            return e.apply(this, arguments) || this
        }
        Wp(t, e);
        var n = t.prototype;
        return n.shouldComponentUpdate = function(r) {
            return !tL(Ty(this.props, "helmetData"), Ty(r, "helmetData"))
        }, n.mapNestedChildrenToProps = function(r, i) {
            if (!i) return null;
            switch (r.type) {
                case X.SCRIPT:
                case X.NOSCRIPT:
                    return {
                        innerHTML: i
                    };
                case X.STYLE:
                    return {
                        cssText: i
                    };
                default:
                    throw new Error("<" + r.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.")
            }
        }, n.flattenArrayTypeChildren = function(r) {
            var i, o = r.child,
                s = r.arrayTypeChildren;
            return We({}, s, ((i = {})[o.type] = [].concat(s[o.type] || [], [We({}, r.newChildProps, this.mapNestedChildrenToProps(o, r.nestedChildren))]), i))
        }, n.mapObjectTypeChildren = function(r) {
            var i, o, s = r.child,
                l = r.newProps,
                a = r.newChildProps,
                c = r.nestedChildren;
            switch (s.type) {
                case X.TITLE:
                    return We({}, l, ((i = {})[s.type] = c, i.titleAttributes = We({}, a), i));
                case X.BODY:
                    return We({}, l, {
                        bodyAttributes: We({}, a)
                    });
                case X.HTML:
                    return We({}, l, {
                        htmlAttributes: We({}, a)
                    });
                default:
                    return We({}, l, ((o = {})[s.type] = We({}, a), o))
            }
        }, n.mapArrayTypeChildrenToProps = function(r, i) {
            var o = We({}, i);
            return Object.keys(r).forEach(function(s) {
                var l;
                o = We({}, o, ((l = {})[s] = r[s], l))
            }), o
        }, n.warnOnInvalidChildren = function(r, i) {
            return Sy(Cy.some(function(o) {
                return r.type === o
            }), typeof r.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + Cy.join(", ") + " are allowed. Helmet does not support rendering <" + r.type + "> elements. Refer to our API for more information."), Sy(!i || typeof i == "string" || Array.isArray(i) && !i.some(function(o) {
                return typeof o != "string"
            }), "Helmet expects a string as a child of <" + r.type + ">. Did you forget to wrap your children in braces? ( <" + r.type + ">{``}</" + r.type + "> ) Refer to our API for more information."), !0
        }, n.mapChildrenToProps = function(r, i) {
            var o = this,
                s = {};
            return L.Children.forEach(r, function(l) {
                if (l && l.props) {
                    var a = l.props,
                        c = a.children,
                        u = by(a, yL),
                        f = Object.keys(u).reduce(function(x, y) {
                            return x[uL[y] || y] = u[y], x
                        }, {}),
                        h = l.type;
                    switch (typeof h == "symbol" ? h = h.toString() : o.warnOnInvalidChildren(l, c), h) {
                        case X.FRAGMENT:
                            i = o.mapChildrenToProps(c, i);
                            break;
                        case X.LINK:
                        case X.META:
                        case X.NOSCRIPT:
                        case X.SCRIPT:
                        case X.STYLE:
                            s = o.flattenArrayTypeChildren({
                                child: l,
                                arrayTypeChildren: s,
                                newChildProps: f,
                                nestedChildren: c
                            });
                            break;
                        default:
                            i = o.mapObjectTypeChildren({
                                child: l,
                                newProps: i,
                                newChildProps: f,
                                nestedChildren: c
                            })
                    }
                }
            }), this.mapArrayTypeChildrenToProps(s, i)
        }, n.render = function() {
            var r = this.props,
                i = r.children,
                o = by(r, vL),
                s = We({}, o),
                l = o.helmetData;
            return i && (s = this.mapChildrenToProps(i, s)), !l || l instanceof Ch || (l = new Ch(l.context, l.instances)), l ? L.createElement(Hu, We({}, s, {
                context: l.value,
                helmetData: void 0
            })) : L.createElement(tx.Consumer, null, function(a) {
                return L.createElement(Hu, We({}, s, {
                    context: a
                }))
            })
        }, t
    }(g.Component);
ou.propTypes = {
    base: fe.object,
    bodyAttributes: fe.object,
    children: fe.oneOfType([fe.arrayOf(fe.node), fe.node]),
    defaultTitle: fe.string,
    defer: fe.bool,
    encodeSpecialCharacters: fe.bool,
    htmlAttributes: fe.object,
    link: fe.arrayOf(fe.object),
    meta: fe.arrayOf(fe.object),
    noscript: fe.arrayOf(fe.object),
    onChangeClientState: fe.func,
    script: fe.arrayOf(fe.object),
    style: fe.arrayOf(fe.object),
    title: fe.string,
    titleAttributes: fe.object,
    titleTemplate: fe.string,
    prioritizeSeoTags: fe.bool,
    helmetData: fe.object
}, ou.defaultProps = {
    defer: !0,
    encodeSpecialCharacters: !0,
    prioritizeSeoTags: !1
}, ou.displayName = "Helmet";

function wL() {
    var t;
    const e = Nn();
    return d.jsxs(d.Fragment, {
        children: [d.jsxs(ou, {
            children: [d.jsx("title", {
                children: e.title
            }), d.jsx("link", {
                rel: "canonical",
                href: (t = e.data) == null ? void 0 : t.url
            })]
        }), d.jsx(KD, {
            header: d.jsx(_k, {}),
            footer: d.jsxs(d.Fragment, {
                children: [d.jsx(QO, {}), d.jsx(fC, {})]
            }),
            children: d.jsx(Mb, {})
        })]
    })
}

function xL() {
    var o, s;
    const t = (s = (o = vc().data) == null ? void 0 : o.sectionConfig) == null ? void 0 : s.homepage,
        n = (t == null ? void 0 : t.top) || [],
        r = (t == null ? void 0 : t.main) || [],
        i = (t == null ? void 0 : t.side) || [];
    return d.jsx(Hp, {
        top: d.jsx(d.Fragment, {
            children: n.map(l => d.jsx(Xs, {
                ...l
            }, l.id))
        }),
        main: d.jsx(d.Fragment, {
            children: r.map(l => d.jsx(Xs, {
                ...l
            }, l.id))
        }),
        side: d.jsx(d.Fragment, {
            children: i.map(l => d.jsx(Xs, {
                ...l
            }, l.id))
        }),
        stickySide: !0
    })
}

function EL() {
    const [e] = mw(), t = e.get("labels") || "", n = e.get("q") || "", r = $g(n, 500), i = $g(t, 500), o = S_({
        q: r,
        labels: i
    });
    return d.jsx(Hp, {
        main: d.jsx(U1, {
            title: "Search Result",
            loading: o.isLoading,
            items: o.items,
            empty: o.isEmpty
        }),
        side: d.jsx("div", {
            className: "md:px-6",
            children: d.jsx(Sk, {})
        }),
        stickySide: !0,
        sideAlign: "start"
    })
}

function SL() {
    var i, o;
    const t = (o = (i = vc().data) == null ? void 0 : i.sectionConfig) == null ? void 0 : o.postDetail,
        n = (t == null ? void 0 : t.side) || [],
        r = (t == null ? void 0 : t.main) || [];
    return d.jsx(Hp, {
        main: d.jsx(d.Fragment, {
            children: r.map(s => d.jsx(Xs, {
                ...s
            }, s.id))
        }),
        side: d.jsx(d.Fragment, {
            children: n.map(s => d.jsx(Xs, {
                ...s
            }, s.id))
        }),
        stickySide: !0
    })
}
const bL = Xb(Ad(d.jsxs(Ms, {
    path: "/",
    element: d.jsx(wL, {}),
    children: [d.jsx(Ms, {
        path: "/search",
        element: d.jsx(EL, {})
    }), d.jsx(Ms, {
        path: "/:year/:month/:title",
        element: d.jsx(SL, {})
    }), d.jsx(Ms, {
        path: "/",
        element: d.jsx(xL, {}),
        errorElement: d.jsx("div", {
            children: "Test Error"
        })
    })]
})));

function CL() {
    return d.jsx(L.StrictMode, {
        children: d.jsx(WC, {
            client: bR,
            children: d.jsx(mo, {
                children: d.jsx(Fd.Provider, {
                    value: {
                        color: "#ddd",
                        className: "a-icon"
                    },
                    children: d.jsx(oC, {
                        router: bL
                    })
                })
            })
        })
    })
}
const Zr = document.getElementById("root"),
    Ny = Zr == null ? void 0 : Zr.getAttribute("data-config-url"),
    TL = (Zr == null ? void 0 : Zr.getAttribute("data-is-blogger")) === "true";
if (Zr && Ny) {
    const e = window;
    e.__REACT_TEMPLATE_BLOGGER__ = {
        configUrl: Ny,
        isBlogger: TL
    }, If.createRoot(Zr).render(d.jsx(CL, {}))
}
