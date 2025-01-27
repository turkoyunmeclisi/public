/*
 iframemanager v1.0
 Author Orest Bida
 Released under the MIT License
*/
(function() {
    var e = {
        o: {},
        S: [],
        T: [],
        u: null,
        i: null,
        v: null,
        l: null,
        W: function(a) { return { D: a.dataset.id, I: a.dataset.title, m: a.dataset.thumbnail, ba: a.dataset.params, K: a.hasAttribute("data-thumbnailpreload"), j: a, J: null, s: !1, R: !1, A: !0 } },
        X: function(a, b) {
            var c = this.o[a];
            a = c.length;
            if ("IntersectionObserver" in window)
                for (var d = new IntersectionObserver(function(g) { g.forEach(function(k) { k.isIntersecting && (e.O(b, c[k.target.dataset.index]), d.unobserve(k.target)) }) }), f = 0; f < a; f++) d.observe(c[f].j);
            else
                for (f = 0; f < a; f++) e.O(b,
                    c[f])
        },
        acceptService: function(a) {
            function b(f, g) { e.F(g.cookie.name) || e.Z(g.cookie);
                e.N(f, g) } if ("all" === a)
                for (var c = this.l.length, d = 0; d < c; d++) a = this.l[d], b(a, this.v[a]);
            else -1 < this.l.indexOf(a) && b(a, this.v[a]) },
        rejectService: function(a) {
            function b(f, g) { e.F(g.cookie.name) && e.U(g.cookie);
                e.$(f, g) } if ("all" === a) { this.u = null; for (var c = this.l.length, d = 0; d < c; d++) a = this.l[d], b(a, this.v[a]) } else -1 < this.l.indexOf(a) && b(a, this.v[a]) },
        O: function(a, b) {
            function c(d) {
                b.J.style.backgroundImage = "url('" + d + "')";
                var f =
                    new Image;
                f.onload = function() { b.J.classList.add("loaded") };
                f.src = d
            }
            "string" === typeof b.m ? (b.K && this.H(b.m), "" !== b.m && c(b.m)) : "function" === typeof a ? a(b.D, function(d) { e.P(d);
                b.K && this.H(d);
                c(d) }) : "string" === typeof a && (a = a.replace("{data-id}", b.D), this.P(a), b.K && this.H(a), c(a))
        },
        B: function(a, b) {
            if (!a.s) {
                a.h = this.g("iframe");
                var c = a.ba || b.iframe && b.iframe.params,
                    d = b.embedUrl.replace("{data-id}", a.D);
                a.h.loading = "lazy";
                a.I && (a.h.title = a.I);
                b.iframe && b.iframe.allow && (a.h.allow = b.iframe.allow);
                c && (d = "ap:" ===
                    c.substring(0, 3) ? d + c.substring(3) : d + ("?" + c));
                a.h.src = encodeURI(d);
                a.h.onload = function() { a.j.classList.add("c-h-b");
                    a.h.onload = void 0;
                    b.iframe && "function" === typeof b.iframe.onload && b.iframe.onload(a.D, this) };
                a.s = !0;
                a.j.appendChild(a.h)
            }
        },
        Y: function(a) { a.h.parentNode.removeChild(a.h);
            a.s = !1 },
        C: function(a) { a.A && (a.j.classList.add("c-h-n"), a.A = !1) },
        aa: function(a) { a.A || (a.j.classList.remove("c-h-n", "c-h-b"), a.A = !0) },
        F: function(a) {
            return (a = document.cookie.match("(^|;)\\s*" + a + "\\s*=\\s*([^;]+)")) ? a.pop() :
                ""
        },
        Z: function(a) { var b = new Date,
                c = a.path || "/",
                d = a.sameSite || "Lax",
                f = a.domain || location.hostname;
            b.setTime(b.getTime() + 864E5 * (a.expiration || 182));
            a = a.name + "=1; expires=" + b.toUTCString() + "; Path=" + c + ";";
            a += " SameSite=" + d + ";"; - 1 < f.indexOf(".") && (a += " Domain=" + f + ";"); "https:" === location.protocol && (a += " Secure;");
            document.cookie = a },
        U: function(a) { document.cookie = a.name + "=; Path=" + (a.path || "/") + "; Domain=" + (a.domain || location.hostname) + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;" },
        G: function(a) {
            if ("object" ===
                typeof a) { var b = [],
                    c = 0; for (b[c++] in a); return b }
        },
        P: function(a) { a = a.split("://"); var b = a[0]; if (("http" == b || "https" == b) && (a = a[1] && a[1].split("/")[0] || !1) && a !== location.hostname && -1 === this.S.indexOf(a)) { var c = this.g("link");
                c.rel = "preconnect";
                c.href = b + "://" + a;
                document.head.appendChild(c);
                this.S.push(a) } },
        H: function(a) { if (a && -1 === this.T.indexOf(a)) { var b = this.g("link");
                b.rel = "preload";
                b.as = "image";
                b.href = a;
                document.head.appendChild(b);
                this.T.push(a) } },
        g: function(a) { return document.createElement(a) },
        L: function(a, b, c) {
            for (var d = this.o[a], f = d.length, g = 0; g < f; g++)(function(k) {
                var h = d[k];
                if (!h.R) {
                    k = b.languages[e.i].loadBtn;
                    var C = b.languages[e.i].notice,
                        D = b.languages[e.i].loadAllBtn,
                        p = document.createDocumentFragment(),
                        q = e.g("div"),
                        u = e.g("span"),
                        v = e.g("p"),
                        l = e.g("button"),
                        m = e.g("button"),
                        n = e.g("span"),
                        w = e.g("div"),
                        z = e.g("div"),
                        x = e.g("div"),
                        r = e.g("div"),
                        t = e.g("div");
                    l.type = m.type = "button";
                    n.className = "cc-text";
                    l.type = m.type = "button";
                    n.className = "cc-text";
                    x.className = "c-bg-i";
                    h.J = x;
                    z.className = "c-ld";
                    if ("string" !== typeof h.m || "" !== h.m) w.className = "c-bg";
                    var A = h.I,
                        B = document.createDocumentFragment();
                    if (A) { var y = e.g("span");
                        y.className = "c-tl";
                        y.insertAdjacentHTML("beforeend", A);
                        B.appendChild(y) }
                    l.textContent = k;
                    m.textContent = D;
                    n.appendChild(B);
                    q && n.insertAdjacentHTML("beforeend", C || "");
                    u.appendChild(n);
                    r.className = "c-t-cn";
                    u.className = "c-n-t";
                    v.className = "c-n-c";
                    q.className = "c-nt";
                    t.className = "c-n-a";
                    l.className = "c-l-b";
                    m.className = "c-la-b";
                    t.appendChild(l);
                    t.appendChild(m);
                    r.appendChild(u);
                    r.appendChild(t);
                    v.appendChild(r);
                    q.appendChild(v);
                    l.addEventListener("click", function() { e.C(h);
                        e.B(h, b) });
                    m.addEventListener("click", function() { e.C(h);
                        e.B(h, b);
                        e.acceptService(a) });
                    w.appendChild(x);
                    p.appendChild(q);
                    (b.thumbnailUrl || h.m) && p.appendChild(w);
                    p.appendChild(z);
                    c && h.j.classList.add("c-h-n");
                    h.j.appendChild(p);
                    h.R = !0
                }
            })(g)
        },
        N: function(a, b) {
            var c = this.o[a];
            a = c.length;
            if ("IntersectionObserver" in window) {
                this.u = new IntersectionObserver(function(f) {
                    for (var g = 0; g < f.length && null !== e.u; ++g) f[g].isIntersecting &&
                        function(k) { setTimeout(function() { var h = f[k].target.dataset.index;
                                e.B(c[h], b);
                                e.C(c[h]) }, 50 * k);
                            e.u.unobserve(f[k].target) }(g)
                });
                for (var d = 0; d < a; d++) c[d].s || this.u.observe(c[d].j)
            } else
                for (d = 0; d < a; d++)(function(f) { e.B(c[d], b);
                    e.C(c[f]) })(d)
        },
        $: function(a) { a = this.o[a]; for (var b = a.length, c = 0; c < b; c++) { var d = c;
                a[c].A || (a[c].s && e.Y(a[c]), e.aa(a[d])) } },
        M: function(a, b) { if (b.hasOwnProperty(a)) return a; if (0 < this.G(b).length) return b.hasOwnProperty(this.i) ? this.i : this.G(b)[0] },
        V: function() {
            var a = navigator.language ||
                navigator.browserLanguage;
            2 < a.length && (a = a[0] + a[1]);
            return a.toLowerCase()
        },
        run: function(a) {
            var b = a.services;
            this.v = b;
            var c = this.G(b);
            this.l = c;
            var d = c.length;
            if (0 !== d) {
                this.i = a.currLang;
                var f = b[c[0]].languages;
                !0 === a.autoLang ? this.i = this.M(this.V(), f) : "string" === typeof a.currLang && (this.i = this.M(a.currLang, f));
                for (a = 0; a < d; a++) {
                    f = c[a];
                    this.o[f] = [];
                    var g = document.querySelectorAll('div[data-service="' + f + '"]'),
                        k = g.length;
                    if (0 !== k) {
                        for (var h = 0; h < k; h++) g[h].dataset.index = h, this.o[f].push(this.W(g[h]));
                        g = b[f];
                        this.F(g.cookie.name) ? (this.L(f, g, !0), this.N(f, g)) : this.L(f, g, !1);
                        this.X(f, g.thumbnailUrl)
                    }
                }
            }
        }
    };
    window.iframemanager = function() { window.iframemanager = void 0; return e }
})();