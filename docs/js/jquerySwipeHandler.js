var jquerySwipeHandler = (function (e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var u = (t[o] = { i: o, l: !1, exports: {} });
        return e[o].call(u.exports, u, u.exports, n), (u.l = !0), u.exports;
    }
    return (
        (n.m = e),
        (n.c = t),
        (n.d = function (e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var u in e)
                    n.d(
                        o,
                        u,
                        function (t) {
                            return e[t];
                        }.bind(null, u)
                    );
            return o;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 0))
    );
})([
    function (e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "SWIPE_LEFT", function () {
                return o;
            }),
            n.d(t, "SWIPE_RIGHT", function () {
                return u;
            }),
            n.d(t, "SWIPE_UP", function () {
                return r;
            }),
            n.d(t, "SWIPE_DOWN", function () {
                return c;
            }),
            n.d(t, "handleSwipe", function () {
                return l;
            });
        const o = "SWIPE_LEFT",
            u = "SWIPE_RIGHT",
            r = "SWIPE_UP",
            c = "SWIPE_DOWN",
            i = "",
            f = 50,
            d = 700,
            a = 1;
        function l(e, t, n) {
            let l = void 0,
                s = void 0,
                p = !1;
            const h = () => {
                p = !0;
            };
            function y(e) {
                return e.touches && e.touches[0] ? { x: e.touches[0].pageX, y: e.touches[0].pageY } : e.changedTouches && e.changedTouches[0] ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY } : { x: e.pageX, y: e.pageY };
            }
            $(e).bind("mousedown touchstart", (e) => {
                (l = Date.now()), (s = y(e)), "touchstart" === e.type && (t.includes(r) || t.includes(c)) && e.preventDefault(), (p = !1), $(window).bind("scroll", h);
            }),
                $(e).bind("mouseup touchend", (b) => {
                    if (("mouseup" !== b.type || b.which === a) && l && Date.now() - l < d) {
                        const d = y(b),
                            a = (function (e, t) {
                                const n = t.x - e.x,
                                    i = t.y - e.y,
                                    d = [];
                                n > f ? d.push(u) : n < -f && d.push(o);
                                i > f ? d.push(c) : i < -f && d.push(r);
                                return d;
                            })(s, d);
                        let h = !1,
                            g = !1;
                        for (let e of a) t.includes(e) && (n(e), (h = !0));
                        a.length || p || (n(i, d.x - $(e).offset().left, d.y - $(e).offset().top), (g = !0)), (h || g) && (b.cancelable && "touchend" === b.type && b.preventDefault(), b.stopPropagation()), (l = void 0);
                    }
                    $(window).unbind("scroll", h);
                });
        }
    },
]);
