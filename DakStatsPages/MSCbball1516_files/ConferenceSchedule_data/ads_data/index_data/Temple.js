var __extends = this.__extends || function(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() {
        this.constructor = d;
    }
    __.prototype = b.prototype;
    d.prototype = new __();
};

"function" != typeof Object.assign && !function() {
    Object.assign = function(n) {
        "use strict";
        if (void 0 === n || null === n) throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(n), r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            if (void 0 !== e && null !== e) for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
        }
        return t;
    };
}();

window.$ = window.jQuery || function(e, t, l) {
    try {
        var n = {
            "#": "getElementById",
            ".": "getElementsByClassName",
            "@": "getElementsByName",
            "=": "getElementsByTagName",
            "*": "querySelectorAll"
        }[e[0]], m = (t === l ? document : t)[n](e.slice(1));
        !m.length ? m[0] = m : null;
        return !m.length ? m : m.length < 2 ? m[0] : [].slice.call(m);
    } catch (er) {
        return document.querySelectorAll(e);
    }
};

if ("document" in self) {
    if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {
        (function(t) {
            "use strict";
            if (!("Element" in t)) return;
            var e = "classList", i = "prototype", n = t.Element[i], s = Object, r = String[i].trim || function() {
                return this.replace(/^\s+|\s+$/g, "");
            }, a = Array[i].indexOf || function(t) {
                var e = 0, i = this.length;
                for (;e < i; e++) {
                    if (e in this && this[e] === t) {
                        return e;
                    }
                }
                return -1;
            }, o = function(t, e) {
                this.name = t;
                this.code = DOMException[t];
                this.message = e;
            }, l = function(t, e) {
                if (e === "") {
                    throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
                }
                if (/\s/.test(e)) {
                    throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
                }
                return a.call(t, e);
            }, c = function(t) {
                var e = r.call(t.getAttribute("class") || ""), i = e ? e.split(/\s+/) : [], n = 0, s = i.length;
                for (;n < s; n++) {
                    this.push(i[n]);
                }
                this._updateClassName = function() {
                    t.setAttribute("class", this.toString());
                };
            }, u = c[i] = [], f = function() {
                return new c(this);
            };
            o[i] = Error[i];
            u.item = function(t) {
                return this[t] || null;
            };
            u.contains = function(t) {
                t += "";
                return l(this, t) !== -1;
            };
            u.add = function() {
                var t = arguments, e = 0, i = t.length, n, s = false;
                do {
                    n = t[e] + "";
                    if (l(this, n) === -1) {
                        this.push(n);
                        s = true;
                    }
                } while (++e < i);
                if (s) {
                    this._updateClassName();
                }
            };
            u.remove = function() {
                var t = arguments, e = 0, i = t.length, n, s = false, r;
                do {
                    n = t[e] + "";
                    r = l(this, n);
                    while (r !== -1) {
                        this.splice(r, 1);
                        s = true;
                        r = l(this, n);
                    }
                } while (++e < i);
                if (s) {
                    this._updateClassName();
                }
            };
            u.toggle = function(t, e) {
                t += "";
                var i = this.contains(t), n = i ? e !== true && "remove" : e !== false && "add";
                if (n) {
                    this[n](t);
                }
                if (e === true || e === false) {
                    return e;
                } else {
                    return !i;
                }
            };
            u.toString = function() {
                return this.join(" ");
            };
            if (s.defineProperty) {
                var h = {
                    get: f,
                    enumerable: true,
                    configurable: true
                };
                try {
                    s.defineProperty(n, e, h);
                } catch (d) {
                    if (d.number === -2146823252) {
                        h.enumerable = false;
                        s.defineProperty(n, e, h);
                    }
                }
            } else if (s[i].__defineGetter__) {
                n.__defineGetter__(e, f);
            }
        })(self);
    } else {
        (function() {
            "use strict";
            var t = document.createElement("_");
            t.classList.add("c1", "c2");
            if (!t.classList.contains("c2")) {
                var e = function(t) {
                    var e = DOMTokenList.prototype[t];
                    DOMTokenList.prototype[t] = function(t) {
                        var i, n = arguments.length;
                        for (i = 0; i < n; i++) {
                            t = arguments[i];
                            e.call(this, t);
                        }
                    };
                };
                e("add");
                e("remove");
            }
            t.classList.toggle("c3", false);
            if (t.classList.contains("c3")) {
                var i = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function(t, e) {
                    if (1 in arguments && !this.contains(t) === !e) {
                        return e;
                    } else {
                        return i.call(this, t);
                    }
                };
            }
            t = null;
        })();
    }
}

Element.prototype.hide = function() {
    this.classList.add("hide");
};

Element.prototype.show = function() {
    this.classList.remove("hide");
};

Element.prototype.addEvent = function(event, callback) {
    this.addEventListener(event, callback.bind(temple.banner));
};

Element.prototype.find = function(selector) {
    return $(selector, this);
};

NodeList.prototype.each = Array.prototype.forEach;

Object.defineProperty(Array.prototype, "shuffle", {
    enumerable: false,
    value: function() {
        var i = this.length;
        while (i) {
            var j = Math.floor(Math.random() * i);
            var t = this[--i];
            this[i] = this[j];
            this[j] = t;
        }
        return this;
    }
});

String.prototype.timeFormat = function() {
    var sn = parseInt(this, 10);
    var h = Math.floor(sn / 3600);
    var m = Math.floor((sn - h * 3600) / 60);
    var s = sn - h * 3600 - m * 60;
    if (m < 10) {
        m = m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    var t = (m || 0) + ":" + (s || "00");
    return t;
};

String.prototype.ucfirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

Function.prototype.delay = function(a) {
    var b = [].slice.call(arguments, 1), c = this;
    return setTimeout(function() {
        c.apply(void 0, b);
    }, 1e3 * a);
};

var temple = new Temple(typeof temple != "undefined" ? temple.config : null);

window.addEventListener("load", temple.create.bind(temple));

function Temple(config) {
    this.type = "Standalone";
    this.version = "2.0.7", this.color = "#ff0088", this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), 
    this.isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent), this.isiOS9up = this.isiOS && navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1] > 9, 
    this.isiPad = /iPad/.test(navigator.userAgent), this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), 
    this.core = {}, this.config = config, this.platforms = {}, this.templates = {}, 
    this.modules = {};
    this.isLive = function() {
        if (!this.config) return window.location.hostname != "localhost";
        if (!this.config.localhost) return window.location.hostname != "localhost";
        var live = window.location.hostname != "localhost";
        for (var i = 0; i < this.config.localhost.length; i++) {
            if (window.location.hostname == this.config.localhost[i]) {
                return false;
            }
        }
        return live;
    }();
    this.isAutoplayAvailable = function() {
        if (!this.isMobile) return true;
        if (!this.isiOS) {
            return true;
        } else if (this.isSafari) {
            if (this.isiPad) var os = Number(navigator.userAgent.split("iPad")[1].split(" ")[3].replace("_", ".")); else var os = navigator.userAgent.split("iPhone OS ")[1].split(" ")[0].split("_")[0];
            if (os >= 10) return true; else return false;
        } else {
            return false;
        }
    };
    this.utils = function() {
        var tracker = function(t) {
            temple.utils.debug("Tracker: " + t, "green");
        };
        var getQueryVar = function(v) {
            var q = window.location.search.substring(1);
            var vs = q.split("&");
            for (var i = 0; i < vs.length; i++) {
                var p = vs[i].split("=");
                if (p[0] == v) {
                    return p[1];
                }
            }
            return false;
        };
        var loadScript = function(u, c, e) {
            if (typeof u == "string") u = [ u ];
            t = 0;
            if (!u.length) {
                c();
                return;
            }
            var loader = function(sc) {
                var s = document.createElement("script");
                s.async = true;
                s.type = "text/javascript", s.readyState ? s.onreadystatechange = function() {
                    ("loaded" == s.readyState || "complete" == s.readyState) && (s.onreadystatechange = null, 
                    c && c());
                } : (s.onload = function(e) {
                    t++;
                    t == u.length ? c && c(e) : loader(u[t]);
                }, s.onerror = function() {
                    temple.utils.debug('ERROR LOADING SCRIPT "' + u + '"'), e && e();
                }), s.src = sc, document.body.appendChild(s);
            };
            loader(u[0]);
        };
        var loadJSON = function(u, c, e, nt) {
            if (typeof u == "string") u = [ u ];
            var t = 0;
            var comp = c;
            var obs = [];
            c = function(o) {
                t++;
                obs.push(o);
                if (t == u.length) {
                    if (obs.length == 1) obs = obs[0];
                    comp.call(temple.banner, obs);
                }
            };
            var xobj = [];
            for (var i = 0; i < u.length; i++) {
                xobj[i] = new XMLHttpRequest();
                xobj[i].overrideMimeType("application/json");
                xobj[i].open("GET", u[i], !0);
                xobj[i].onreadystatechange = function(e) {
                    x = e.currentTarget;
                    4 == x.readyState && "404" == x.status && (temple.utils.debug("No json found", "#ff0000"), 
                    e && e.call(temple.banner)), 4 == x.readyState && "200" == x.status && c && c(nt === true ? x.responseText : JSON.parse(x.responseText));
                }, xobj[i].send(null);
            }
            if (!u.length) comp.call(temple.banner);
        };
        var loadImage = function(u, c, e) {
            if (typeof u == "string") u = [ u ];
            var t = 0;
            var imgs = [];
            for (var i = 0; i < u.length; i++) {
                var im = new Image();
                im.onload = function(e) {
                    imgs.push(this);
                    t++;
                    if (t == u.length) c && c(imgs, e);
                };
                im.onerror = e;
                im.src = u[i];
            }
        };
        var createStyle = function(n, r) {
            n = n != "banner" ? "#banner " + n : n;
            if (!temple.stylesheet) {
                temple.stylesheet = document.createElement("style"), temple.stylesheet.type = "text/css";
                var head = document.getElementsByTagName("head")[0];
                head.insertBefore(temple.stylesheet, head.firstChild);
            }
            (temple.stylesheet.sheet || {}).insertRule ? temple.stylesheet.sheet.insertRule(n + "{" + r + "}", 0) : (temple.stylesheet.styleSheet || temple.stylesheet.sheet).addRule(n, r);
        };
        var debug = function(e, c, v) {
            if (console.debug && (!temple.isLive || temple.config.debug === true)) {
                console.debug("%c[" + temple.type + "]%s", "font-weight:bold;color:" + (typeof c == "string" ? c : temple.color) + ";", " " + (v || temple.version), ":", e || "", typeof c != "string" && typeof c != "undefined" ? c : "");
            }
        };
        var fitText = function(t) {
            TweenMax.set(t, {
                clearProps: "fontSize, lineHeight"
            });
            var p = t.parentElement;
            var s = Number(window.getComputedStyle(p, null).getPropertyValue("font-size").replace("px", ""));
            if (t.offsetHeight > p.offsetHeight || t.offsetWidth > p.offsetWidth) {
                while (t.offsetHeight > p.offsetHeight || t.offsetWidth > p.offsetWidth) {
                    s -= .2;
                    t.style.fontSize = s + "px";
                    t.style.lineHeight = s + 1 + "px";
                }
            }
        };
        var findElements = function(e, styles) {
            if (styles) {
                var obj = {};
                obj.all = [];
                findElement(e, styles);
            } else {
                var obj = [];
                findElement(e);
            }
            function findElement(e, styles) {
                if (e && e.childNodes && e.childNodes.length > 0) {
                    for (var i = 0; i < e.childNodes.length; i++) {
                        var child = e.childNodes[i];
                        if (child.type == "image/svg+xml" || [ "DIV", "SPAN", "IMG", "CANVAS", "SVG", "CIRCLE", "PATH" ].indexOf(child.nodeName.toUpperCase()) != -1) {
                            if (child.id || child.className) {
                                if (styles) {
                                    styles = typeof styles == "string" ? [ styles ] : styles;
                                    for (var j = 0; j < styles.length; j++) {
                                        if (!obj[styles[j]]) {
                                            obj[styles[j]] = [];
                                        }
                                        if (child.id && obj[styles[j]].indexOf(child) == -1) {
                                            var val = getStyleRuleValue("." + styles[j], "#" + child.id);
                                            if (val) {
                                                obj[styles[j]].push(child);
                                            }
                                        }
                                        var c = typeof child.className == "object" ? String(child.className.baseVal).split(" ") : String(child.className).split(" ");
                                        for (var k = 0; k < c.length; k++) {
                                            if (c[k] && obj[styles[j]].indexOf(child) == -1) {
                                                var val = getStyleRuleValue("." + styles[j], "." + c[k]);
                                                if (val) {
                                                    obj[styles[j]].push(child);
                                                }
                                            }
                                        }
                                    }
                                    obj.all.push(child);
                                    findElement(child, styles);
                                } else {
                                    obj.push(child);
                                    findElement(child);
                                }
                            }
                        }
                    }
                }
            }
            function getStyleRuleValue(style, selector, sheet) {
                var sheets = [];
                for (var k in document.styleSheets) {
                    if (document.styleSheets[k].href && document.styleSheets[k].href.indexOf(sheet) != -1) {
                        sheets.push(document.styleSheets[k]);
                    }
                }
                if (sheets.length < 1) {
                    for (var j in document.styleSheets) {
                        if (document.styleSheets[j].href && document.styleSheets[j].href.indexOf("style.css") != -1) {
                            sheets.push(document.styleSheets[j]);
                        }
                    }
                }
                var ar = [];
                for (var i = 0, l = sheets.length; i < l; i++) {
                    var sheet = sheets[i];
                    if (!sheet.cssRules) continue;
                    for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
                        var rule = sheet.cssRules[j];
                        if (rule.selectorText) {
                            if (rule.selectorText.indexOf(selector) != -1 && rule.selectorText.indexOf(style) != -1) {
                                var all = rule.selectorText.substring(0, rule.selectorText.indexOf(style)).split(".");
                                var node = all[all.length - 1];
                                return node;
                            }
                        }
                    }
                }
                return;
            }
            return obj;
        };
        return {
            tracker: function(v, e) {
                return tracker(v, e);
            },
            getQueryVar: function(v) {
                return getQueryVar(v);
            },
            loadScript: function(u, c, e) {
                loadScript(u, c, e);
            },
            loadJSON: function(u, c, e, nt) {
                loadJSON(u, c, e, nt);
            },
            loadImage: function(u, c, e) {
                loadImage(u, c, e);
            },
            debug: function(e, c, v) {
                debug(e, c, v);
            },
            createStyle: function(n, r) {
                createStyle(n, r);
            },
            fitText: function(t) {
                fitText(t);
            },
            findElements: function(e, styles) {
                return findElements(e, styles);
            }
        };
    }();
    this.create = function() {
        var config = document.body.getAttribute("data-config") || "config.json";
        config = config.replace(".json", "");
        config = temple.utils.getQueryVar("c") && !this.isLive ? config + "_" + temple.utils.getQueryVar("c").replace("config_", "") + ".json" : config + ".json";
        if (temple.config) config = [];
        temple.utils.loadJSON(config, function(json) {
            this.config = json || temple.config;
            this.config.platform = this.config.platform || "";
            var scripts = [];
            var templePath = document.querySelector("[temple]");
            if (templePath) {
                templePath = templePath.getAttribute("src");
                if (templePath.indexOf("../") > -1) {
                    this.config.scriptPath = templePath.replace("/Temple.js", "/");
                }
            }
            this.config.scriptPath = this.config.scriptPath || "https://s3-us-west-1.amazonaws.com/templeframework/temple_" + temple.version + "/";
            if (this.config.platform.length) {
                if (this.config.platform.indexOf(".js") > -1) {
                    scripts.push(this.config.platform);
                } else {
                    scripts.push(this.config.scriptPath + "platforms/" + this.config.platform + "/Platform.js");
                }
            }
            if (!this.config.build_md5) {
                var template = this.config.scriptPath + "templates/StandardBanner.js";
                if (this.config.template) {
                    if (this.config.template.length) {
                        template = this.config.template;
                    }
                }
                scripts.push(template);
            }
            var m = this.config.modules || [];
            if (m.length) {
                for (var i = 0; i < m.length; i++) {
                    if (m[i].indexOf(".js") == -1) m[i] = this.config.scriptPath + "modules/" + m[i] + ".js";
                    scripts.push(m[i]);
                }
            }
            if (this.config.require) {
                scripts = scripts.concat(this.config.require);
            }
            if (!this.config.build_md5) {
                try {
                    var main = document.querySelector("meta[name='main']").getAttribute("content");
                    if (main.length) scripts.push(main);
                } catch (e) {
                    scripts.push("./js/main.js");
                }
            }
            temple.utils.loadScript(scripts, function(e) {
                if (temple.Banner) temple.banner = new temple.Banner();
            }.bind(this));
        }.bind(this));
    };
    this.events = {
        READY: "ready",
        SHOW: "show",
        CORE_READY: "core_ready",
        MODULE_READY: "module_ready",
        EXIT: "exit"
    };
}

temple.core.EventDispatcher = function() {
    function EventDispatcher() {}
    EventDispatcher.prototype.dispatchEvent = function(event, args) {
        if (!arguments[1]) arguments[1] = this;
        this._events = this._events || [];
        if (this._events[event]) {
            var listeners = this._events[event], len = listeners.length;
            while (len--) {
                temple.utils.debug("Event <" + event + "> " + (arguments[1].target ? arguments[1].target.constructor.name : arguments[1].constructor.name), "black");
                if (!args) args = {};
                if (!args.target) args.target = this;
                if (!listeners[len]._one) {
                    var f = listeners.splice(len, 1);
                    f[0](args);
                } else {
                    listeners[len](args);
                }
            }
            return true;
        }
        return false;
    };
    EventDispatcher.prototype.addEventListener = function(event, callback, _one) {
        callback._one = _one != undefined ? _one : true;
        this._events = this._events || [];
        this._events[event] = this._events[event] || [];
        if (this._events[event]) {
            this._events[event].push(callback);
        }
    };
    EventDispatcher.prototype.removeEventListener = function(event) {
        if (this._events[event]) {
            delete this._events[event];
        }
    };
    return EventDispatcher;
}();

temple.core.Module = function(_super) {
    __extends(Module, _super);
    function Module() {}
    Module.prototype._moduleReady = function() {
        temple.utils.debug("Module << " + this.constructor.name + " >>", this.color || "Tomato");
        this.dispatchEvent(temple.events.MODULE_READY);
    };
    Module.prototype.done = function() {
        setTimeout(this._moduleReady.bind(this), 50);
    };
    return Module;
}(temple.core.EventDispatcher);

temple.core.Core = function(_super) {
    __extends(Core, _super);
    function Core() {
        this._initCore();
    }
    Core.prototype.exit = function(url) {
        window.open(url || this.defaultExitURL, "_blank");
        this.dispatchEvent(temple.events.EXIT);
    };
    Core.prototype.chain = function(e) {
        try {
            e.prototype;
        } catch (err) {
            console.error("Module not loaded. Please add it to your config.");
            console.error("Available modules > ", temple.modules);
            return;
        }
        if (!this._chained) {
            this._chained = [];
            this._chained.push({
                m: e,
                a: arguments[1],
                c: arguments[2]
            });
            setTimeout(this._runChain.bind(this), 1);
        } else {
            this._chained.push({
                m: e,
                a: arguments[1],
                c: arguments[2]
            });
        }
        return this;
    };
    Core.prototype._politeLoads = function(c) {
        var loads = document.querySelectorAll("[multilingual], [polite]"), svgs = document.querySelectorAll("[svg]"), t = 0, t2 = 0, _s = [];
        function onload(e, img) {
            if (loads[t].nodeName == "DIV") {
                loads[t].style.backgroundImage = "url('" + loads[t].ml + loads[t].getAttribute("data-src") + "')";
                loads[t].style.width = img.width + "px";
                loads[t].style.height = img.height + "px";
            }
            t++;
            if (t + t2 == loads.length + svgs.length) if (c) setTimeout(c.call(this), 10);
        }
        for (var i = 0; i < loads.length; i++) {
            loads[i].ml = loads[i].hasAttribute("multilingual") || "";
            if (loads[i].ml === true) loads[i].ml = "img/" + this.config.language + "/";
            if (loads[i].nodeName == "DIV") {
                temple.utils.loadImage(loads[i].ml + loads[i].getAttribute("data-src"), onload.bind(this));
            } else {
                loads[i].onload = onload.bind(this, loads[i]);
                loads[i].src = loads[i].ml + loads[i].getAttribute("data-src");
            }
        }
        for (i = 0; i < svgs.length; i++) {
            _s[i] = {
                xhr: new XMLHttpRequest(),
                el: svgs[i]
            };
            _s[i].xhr.id = i;
            _s[i].xhr.onload = function(e) {
                var r = e.currentTarget.responseXML.documentElement;
                r.setAttribute("class", _s[e.currentTarget.id].el.getAttribute("class"));
                var id = _s[e.currentTarget.id].el.getAttribute("id");
                r.setAttribute("id", id);
                _s[e.currentTarget.id].el.parentNode.replaceChild(r, _s[e.currentTarget.id].el);
                window[id] = r;
                t2++;
                if (t + t2 == loads.length + svgs.length) if (c) setTimeout(c.call(this), 10);
            }.bind(this);
            _s[i].xhr.open("GET", svgs[i].getAttribute("data-src"), !0);
            _s[i].xhr.overrideMimeType("image/svg+xml");
            _s[i].xhr.send("");
        }
        if (!loads.length && !svgs.length) if (c) setTimeout(c.call(this), 10);
    };
    Core.prototype._initCore = function() {
        this.config = temple.config;
        temple.utils.debug(temple.type + " Platform");
        this._pageReady();
    };
    Core.prototype._pageReady = function() {
        this._bannerInit();
    };
    Core.prototype._bannerInit = function() {
        temple.utils.createStyle("#banner", "position:relative;overflow:hidden;background-color:#000;color:#fff;width:" + (temple.config.size.width ? temple.config.size.width + "px;height:" : "auto;height:") + (temple.config.size.height ? temple.config.size.height + "px;" : "auto;"));
        temple.utils.createStyle(".bannerClick", "position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;background:url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);");
        this.dispatchEvent(temple.events.CORE_READY);
    };
    Core.prototype._chainLoaded = function(e) {
        if (this._chained[0].c) this._chained[0].c.call(this);
        this._chained.splice(0, 1);
        this._runChain();
    };
    Core.prototype.async = function() {
        arguments.callee.caller.async = true;
        return function() {
            this._chainLoaded();
        }.bind(this);
    };
    Core.prototype._runChain = function(e) {
        if (!this._chained[0]) return;
        if (this._chained[0].m.prototype.__proto__.constructor != temple.core.Module) {
            this._chained[0].m.call(this, this._chained[0].a);
            if (!this._chained[0].m.async) this._chainLoaded();
            return;
        }
        var name = this._chained[0].m.name || this._chained[0].m.toString().match(/^function\s*([^\s(]+)/)[1];
        var moduleName = name.charAt(0).toLowerCase() + name.slice(1);
        var listName = moduleName;
        this[listName + "List"] = this[listName + "List"] || [];
        if (this[moduleName]) {
            var t = 2;
            var tempName = moduleName;
            tempName = moduleName + t;
            while (this[tempName]) {
                t++;
                tempName = moduleName + t;
            }
            moduleName = tempName;
        }
        this[moduleName] = new this._chained[0].m(this._chained[0].a || this, this, t || 0);
        this[moduleName].addEventListener(temple.events.MODULE_READY, this._chainLoaded.bind(this));
        this[listName + "List"].push(this[moduleName]);
    };
    return Core;
}(temple.core.EventDispatcher);

temple.platforms.doubleclick = {};

temple.platforms.doubleclick.Platform = function(_super) {
    __extends(Platform, _super);
    function Platform() {
        this.version = "1.0.3";
        this.defaultExitURL = "";
        this.exitURLs = [ "" ];
        temple.color = "#338e43";
        temple.type = "DoubleClick";
        temple.utils.tracker = this._tracker;
        this._platform = {
            _closeOverlay: function() {
                Enabler.close();
            }
        };
        if (typeof Enabler == "undefined") {
            temple.utils.loadScript("https://s0.2mdn.net/ads/studio/Enabler.js", this._initCore.bind(this));
        } else {
            this._initCore();
        }
    }
    Platform.prototype.setVideoTracking = function(player) {
        if (!studio.video) {
            Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
                this.setVideoTracking(player);
            }.bind(this));
            return;
        }
        if (player.playHistory) {
            studio.video.Reporter.detach(player.playHistory[player.playHistory.length - 1].id);
            studio.video.Reporter.attach(player.currentVideo.id, player._video);
        } else {
            studio.video.Reporter.attach(player.currentVideo.id, player._video);
        }
    };
    Platform.prototype.exit = function(url) {
        this.dispatchEvent(temple.events.EXIT, url || this.defaultExitURL);
        Enabler.exit("Default Exit", url || this.defaultExitURL);
    };
    Platform.prototype._pageReady = function() {
        temple.isLive = Enabler.isServingInLiveEnvironment();
        if (typeof Enabler != "undefined") {
            if (Enabler.isInitialized()) this._pageLoaded(); else Enabler.addEventListener(studio.events.StudioEvent.INIT, this._pageLoaded.bind(this));
        } else {
            setTimeout(this.init.bind(this), 50);
        }
    };
    Platform.prototype._pageLoaded = function() {
        if (Enabler.isPageLoaded()) this._bannerInit(); else Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, this._bannerInit.bind(this));
    };
    Platform.prototype._tracker = function(title, repeat) {
        if (studio.video) return;
        if (repeat == undefined) repeat = true;
        this._trackedEvents = this._trackedEvents || [];
        if (this._trackedEvents.length > 19) return;
        if (repeat === false && this._trackedEvents.indexOf(title) >= 0) return;
        if (this._trackedEvents.indexOf(title) == -1) {
            this._trackedEvents.push(title);
        }
        Enabler.counter(title, repeat);
        temple.utils.debug("Tracked Event: " + (this._trackedEvents.indexOf(title) + 1) + " - " + title, "green");
    };
    Platform.prototype._addExitEvents = function() {
        Enabler.addEventListener(studio.events.StudioEvent.EXIT, this.onExit.bind(this));
    };
    return Platform;
}(temple.core.Core);

temple.platforms.Platform = temple.platforms.doubleclick.Platform;

temple.templates.StandardBanner = function(_super) {
    __extends(StandardBanner, _super);
    function StandardBanner() {
        _super.call(this, arguments[0]);
        temple.utils.debug("Template <" + arguments.callee.name + ">");
    }
    StandardBanner.prototype.show = function(autoplay) {
        if (this.config.video) if (this.config.video.autoplay && !autoplay) {
            this.dispatchEvent(temple.events.VideoEvents.AUTOPLAY);
            this.videoController.getSource(0).addEventListener(temple.events.VideoEvents.COMPLETE, this.startAnimation.bind(this), false);
            this.videoController.getSource(0).addEventListener(temple.events.VideoEvents.CLOSE, this.startAnimation.bind(this), false);
            return;
        }
        if (document.body.classList.contains("phantom-backup")) {
            this.onBackupImage();
        }
        this.banner.classList.remove("hide");
        if (this.config.video) if (!this.config.video.autoplay) this.startAnimation();
        if (!this.config.video) this.startAnimation();
        this.dispatchEvent(temple.events.SHOW);
        if (document.body.classList.contains("phantom-backup")) {
            alert('{"phantom":"phantom-backup"}');
        }
        if (this.config.ytmh) {
            temple.utils.createStyle("#ytClose", "z-index: 20;");
            if (this.config.ytmh.impression.length) {
                this.Impression_Pixel_URL = this.Impression_Pixel_URL || this.config.ytmh.impression;
            }
            if (this.config.ytmh.retargeting.length) {
                this.Click_Pixel_URL = this.Click_Pixel_URL || this.config.ytmh.retargeting;
            }
            if (this.Impression_Pixel_URL.length) {
                temple.utils.debug("Impression Pixel tracked | " + this.Impression_Pixel_URL, "blue");
                temple.utils.loadImage(this.Impression_Pixel_URL);
            }
            if (this.Click_Pixel_URL.length) {
                this.addEventListener(temple.events.EXIT, function() {
                    temple.utils.debug("Retargeting Pixel tracked | " + this.Click_Pixel_URL, "blue");
                    temple.utils.loadImage(this.Click_Pixel_URL);
                }.bind(this));
            }
        }
    };
    StandardBanner.prototype.onBannerClick = function() {
        this.exit();
    };
    StandardBanner.prototype.startAnimation = function() {};
    StandardBanner.prototype.onTabChange = function() {};
    StandardBanner.prototype.onBackupImage = function() {};
    StandardBanner.prototype.onExit = function() {};
    StandardBanner.prototype.onOver = function(e) {};
    StandardBanner.prototype.onOut = function(e) {};
    StandardBanner.prototype.init = function(e) {};
    StandardBanner.prototype._bannerInit = function() {
        _super.prototype._bannerInit(this);
        this._ready();
    };
    StandardBanner.prototype._ready = function() {
        this.banner = document.getElementById("banner");
        this.bannerClick = document.querySelectorAll(".bannerClick");
        if (document.body.classList.contains("phantom-backup")) {
            this.isBackup = true;
        }
        for (i = 0; i < this.bannerClick.length; i++) {
            this.bannerClick[i].addEventListener("click", this.onBannerClick.bind(this));
            this.bannerClick[i].addEventListener("mouseover", this.onOver.bind(this));
            this.bannerClick[i].addEventListener("mouseleave", this.onOut.bind(this));
        }
        this._addTabEvents();
        if (this._addExitEvents) this._addExitEvents(); else this.addEventListener(temple.events.EXIT, this.onExit.bind(this));
        this._politeLoads(function() {
            if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && !window.innerHeight) {
                window.onresize = function() {
                    if (!temple.isVisible) {
                        temple.isVisible = true;
                        window.onresize = null;
                        this.dispatchEvent(temple.events.READY);
                        this.init();
                    }
                }.bind(this);
                if (!temple.isVisible) return;
            }
            this.dispatchEvent(temple.events.READY);
            this.init();
        });
    };
    StandardBanner.prototype._addTabEvents = function() {
        this._isHidden = false;
        if ("hidden" in document) {
            document.addEventListener("visibilitychange", this.onTabChange.bind(this));
        } else if ((this._isHidden = "mozHidden") in document) {
            document.addEventListener("mozvisibilitychange", this.onTabChange.bind(this));
        } else if ((this._isHidden = "webkitHidden") in document) {
            document.addEventListener("webkitvisibilitychange", this.onTabChange.bind(this));
        } else if ((this._isHidden = "msHidden") in document) {
            document.addEventListener("msvisibilitychange", this.onTabChange.bind(this));
        } else if ("onfocusin" in document) {
            document.onfocusin = document.onfocusout = this.onTabChange.bind(this);
        } else {
            window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.onTabChange.bind(this);
        }
    };
    return StandardBanner;
}(temple.platforms.Platform || temple.core.Core);

temple.Template = temple.templates.StandardBanner;

temple.Banner = function(_super) {
    __extends(banner, _super);
    function banner() {
        _super.call(this, arguments[0]);
    }
    banner.prototype.init = function() {
        this.chain(temple.modules.CtaModule, {
            element: $(".cta"),
            color: [ "#FFF", "#000" ]
        }).chain(this.setupBanner).chain(this.setupListeners).chain(this.setupTL).chain(this.show);
    };
    banner.prototype.setupBanner = function() {
        this.ctaText = "START YOUR WEBSITE";
        this.ctaModule.setText(this.ctaText, 7);
        this.boldCopySvg = $(".copy").getElementById("boldCopy").childNodes;
        this.newCopySvg = $(".copy").getElementById("newCopy").childNodes;
        this.thinCopySvg = $(".copy").getElementById("thinCopy").childNodes;
        this.lineSvg = $(".copy").getElementById("line");
        this.copyCtaSvg = $(".copy").getElementById("copyCta");
        this.boldCopy0 = "There are ";
        this.boldCopy0Length = 0;
        this.boldCopy0Svg = [];
        this.boldCopyChars = 0;
        for (var i = 0; i < this.boldCopy0.length; i++) {
            if (this.boldCopy0[i] == " ") {
                var div = document.createElement("div");
                this.boldCopy0Svg.push(div);
            } else {
                this.boldCopy0Svg.push(this.boldCopySvg[this.boldCopyChars]);
                this.boldCopyChars++;
            }
        }
        this.boldCopy1_0 = "11,499";
        this.boldCopy1_0Length = 0;
        this.boldCopy1_0Svg = [];
        for (var i = 0; i < this.boldCopy1_0.length; i++) {
            if (this.boldCopy1_0[i] == " ") {
                var div = document.createElement("div");
                this.boldCopy1_0Svg.push(div);
            } else {
                this.boldCopy1_0Svg.push(this.boldCopySvg[this.boldCopyChars]);
                this.boldCopyChars++;
            }
        }
        this.boldCopy1_1 = "11,4";
        this.boldCopy1_2 = "11,";
        this.boldCopy1_3 = "11,500";
        this.newCopy1_3Length = 0;
        this.boldCopy1_4 = "- -";
        this.boldCopy2 = " caterers";
        this.boldCopy3 = " preparing";
        this.boldCopy4 = " holiday meals.";
        this.boldCopy2Length = 0;
        this.boldCopy2Svg = [];
        for (var i = 0; i < this.boldCopy2.length; i++) {
            if (this.boldCopy2[i] == " ") {
                var div = document.createElement("div");
                this.boldCopy2Svg.push(div);
            } else {
                this.boldCopy2Svg.push(this.boldCopySvg[this.boldCopyChars]);
                this.boldCopyChars++;
            }
        }
        this.boldCopy3Length = 0;
        this.boldCopy3Svg = [];
        for (var i = 0; i < this.boldCopy3.length; i++) {
            if (this.boldCopy3[i] == " ") {
                var div = document.createElement("div");
                this.boldCopy3Svg.push(div);
            } else {
                this.boldCopy3Svg.push(this.boldCopySvg[this.boldCopyChars]);
                this.boldCopyChars++;
            }
        }
        this.boldCopy4Length = 0;
        this.boldCopy4Svg = [];
        for (var i = 0; i < this.boldCopy4.length; i++) {
            if (this.boldCopy4[i] == " ") {
                var div = document.createElement("div");
                this.boldCopy4Svg.push(div);
            } else {
                this.boldCopy4Svg.push(this.boldCopySvg[this.boldCopyChars]);
                this.boldCopyChars++;
            }
        }
        this.defaultExitURL = "https://www.squarespace.com/";
        TweenMax.set(".laptop", {
            scale: .5
        });
    };
    banner.prototype.setupListeners = function() {
        $(".cta").addEventListener("mouseover", this.ctaOverHandler.bind(this));
        $(".cta").addEventListener("mouseout", this.ctaOutHandler.bind(this));
        $(".cta").addEventListener("click", this.ctaClickHandler.bind(this));
    };
    banner.prototype.setupTL = function() {
        this.masterTL = new TimelineMax({
            paused: true,
            onComplete: this.masterTLComplete.bind(this)
        });
        this.ctaTLOver = new TimelineMax({
            paused: true
        });
        this.masterTL.addLabel("start", 0).addLabel("boldCopy", "start").to("#boldCopySpan0", 1, {
            text: this.boldCopy0,
            onUpdate: function() {
                if ($("#boldCopySpan0").innerHTML.length > this.boldCopy0Length) {
                    this.masterTL.set(this.boldCopy0Svg[this.boldCopy0Length], {
                        display: "block"
                    }, this.masterTL.time() - .01);
                    this.boldCopy0Length++;
                }
            }.bind(this)
        }, "boldCopy");
        this.masterTL.to("#boldCopySpace", .01, {
            display: "inline-block"
        }, "boldCopy+=0.75");
        this.masterTL.to("#boldCopySpan1", .4, {
            text: this.boldCopy1_0,
            onUpdate: function() {
                if ($("#boldCopySpan1").innerHTML.length > this.boldCopy1_0Length) {
                    this.masterTL.set(this.boldCopy1_0Svg[this.boldCopy1_0Length], {
                        display: "block"
                    }, this.masterTL.time() - .01);
                    this.boldCopy1_0Length++;
                }
            }.bind(this)
        }, "boldCopy+=0.75");
        this.masterTL.to("#boldCopySpan1", .4, {
            text: this.boldCopy1_1,
            onUpdate: function() {
                if ($("#boldCopySpan1").innerHTML.length < this.boldCopy1_0Length) {
                    this.boldCopy1_0Length--;
                    this.masterTL.set(this.boldCopy1_0Svg[this.boldCopy1_0Length], {
                        display: "none"
                    }, this.masterTL.time() - .01);
                }
            }.bind(this)
        }, "boldCopy+=1.15");
        this.masterTL.to("#boldCopySpan1", .4, {
            text: this.boldCopy1_2,
            onUpdate: function() {
                if ($("#boldCopySpan1").innerHTML.length < this.boldCopy1_0Length) {
                    this.boldCopy1_0Length--;
                    this.masterTL.set(this.boldCopy1_0Svg[this.boldCopy1_0Length], {
                        display: "none"
                    }, this.masterTL.time() - .01);
                }
            }.bind(this)
        }, "boldCopy+=1.45");
        this.masterTL.to("#boldCopySpan1", .4, {
            text: this.boldCopy1_3,
            onUpdate: function() {
                if ($("#boldCopySpan1").innerHTML.length > this.boldCopy1_0Length) {
                    this.masterTL.set(this.newCopySvg[this.newCopy1_3Length], {
                        display: "block"
                    }, this.masterTL.time() - .01);
                    this.newCopy1_3Length++;
                    this.boldCopy1_0Length++;
                }
            }.bind(this)
        }, "boldCopy+=1.85");
        this.masterTL.set(this.lineSvg, {
            display: "block"
        });
        this.masterTL.to("#boldCopySpan2", 1.6, {
            text: this.boldCopy2,
            onUpdate: function() {
                if ($("#boldCopySpan2").innerHTML.length > this.boldCopy2Length) {
                    this.masterTL.set(this.boldCopy2Svg[this.boldCopy2Length], {
                        display: "block"
                    }, this.masterTL.time() - .01);
                    this.boldCopy2Length++;
                }
            }.bind(this)
        }, "boldCopy+=2.15");
        this.masterTL.to("#boldCopySpan3", 1.1, {
            text: this.boldCopy3,
            display: "inline-block",
            onUpdate: function() {
                if ($("#boldCopySpan3").innerHTML.length > this.boldCopy3Length) {
                    this.masterTL.set(this.boldCopy3Svg[this.boldCopy3Length], {
                        display: "block"
                    }, this.masterTL.time() - .01);
                    this.boldCopy3Length++;
                }
            }.bind(this)
        }, "boldCopy+=3.6");
        this.masterTL.to("#boldCopySpan4", 2.2, {
            text: this.boldCopy4,
            display: "inline-block",
            onUpdate: function() {
                if ($("#boldCopySpan4").innerHTML.length > this.boldCopy4Length) {
                    this.masterTL.set(this.boldCopy4Svg[this.boldCopy4Length], {
                        display: "block"
                    }, this.masterTL.time() - .01);
                    this.boldCopy4Length++;
                }
            }.bind(this)
        }, "boldCopy+=4.8").fromTo("#cursorContainer", .001, {
            opacity: 0,
            immediateRender: false
        }, {
            opacity: 1,
            repeat: 22,
            yoyo: true,
            repeatDelay: .5
        }, "boldCopy+=4").addLabel("scaleDown", 6.8).from(".laptop", 2.2, {
            scale: 5,
            x: -740,
            y: 2030,
            ease: Power4.easeOut,
            force3D: false
        }, "scaleDown").to(".background", 5, {
            y: 19,
            x: 4,
            transformOrigin: "50% 50%",
            scale: .5,
            ease: Power4.easeInOut
        }, "scaleDown-=2").from(".screenCopy", 1, {
            opacity: 0,
            ease: Power0.easeNone
        }, "scaleDown+=1.8").set("#banner", {
            backgroundColor: "#000"
        }, "scaleDown+=4").addLabel("thinCopy", "scaleDown+=2").staggerFrom(this.thinCopySvg, .7, {
            y: 10,
            opacity: 0,
            ease: Power2.easeOut
        }, -.3, "thinCopy");
        var animTimeCTA = .1;
        this.ctaTLOver.to(".cta", animTimeCTA, {
            opacity: .8,
            ease: Power4.easeIn,
            force3D: false
        }, "start").add("end");
    };
    banner.prototype.ctaOverHandler = function() {
        this.ctaTLOver.play();
    };
    banner.prototype.ctaOutHandler = function() {
        this.ctaTLOver.reverse();
    };
    banner.prototype.ctaClickHandler = function() {
        this.onBannerClick();
    };
    banner.prototype.startAnimation = function() {
        this.masterTL.play();
    };
    banner.prototype.masterTLComplete = function() {};
    banner.prototype.exit = function() {
        window.open(window.clickTag);
    };
    return banner;
}(temple.Template);