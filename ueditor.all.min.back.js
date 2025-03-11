(function () {
  /*
   ueditor
   version: 1.4.3
   build: Thu May 16 2019 11:38:54 GMT+0800 (??????)
   */
  // 调整暂存时的提示时间和位置 把 10565行 10948行 13579行的4E3  改为了 1000
  var versionStr = window.YQ_buildTime ? `?v=${window.YQ_buildTime}` : '';
  var $jscomp = $jscomp || {};
  $jscomp.scope = {};
  $jscomp.findInternal = function (A, C, r) {
    A instanceof String && (A = String(A));
    for (var D = A.length, u = 0; u < D; u++) {
      var I = A[u];
      if (C.call(r, I, u, A)) return {
        i: u,
        v: I
      }
    }
    return {
      i: -1,
      v: void 0
    }
  };
  $jscomp.ASSUME_ES5 = !1;
  $jscomp.ASSUME_NO_NATIVE_MAP = !1;
  $jscomp.ASSUME_NO_NATIVE_SET = !1;
  $jscomp.SIMPLE_FROUND_POLYFILL = !1;
  $jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (A, C, r) {
    A != Array.prototype && A != Object.prototype && (A[C] = r.value)
  };
  $jscomp.getGlobal = function (A) {
    return "undefined" != typeof window && window === A ? A : "undefined" != typeof global && null != global ? global : A
  };
  $jscomp.global = $jscomp.getGlobal(this);
  $jscomp.polyfill = function (A, C, r, D) {
    if (C) {
      r = $jscomp.global;
      A = A.split(".");
      for (D = 0; D < A.length - 1; D++) {
        var u = A[D];
        u in r || (r[u] = {});
        r = r[u]
      }
      A = A[A.length - 1];
      D = r[A];
      C = C(D);
      C != D && null != C && $jscomp.defineProperty(r, A, {
        configurable: !0,
        writable: !0,
        value: C
      })
    }
  };
  $jscomp.polyfill("Array.prototype.find", function (A) {
    return A ? A : function (A, r) {
      return $jscomp.findInternal(this, A, r).v
    }
  }, "es6", "es3");
  $jscomp.checkStringArgs = function (A, C, r) {
    if (null == A) throw new TypeError("The 'this' value for String.prototype." + r + " must not be null or undefined");
    if (C instanceof RegExp) throw new TypeError("First argument to String.prototype." + r + " must not be a regular expression");
    return A + ""
  };
  $jscomp.polyfill("String.prototype.repeat", function (A) {
    return A ? A : function (A) {
      var r = $jscomp.checkStringArgs(this, null, "repeat");
      if (0 > A || 1342177279 < A) throw new RangeError("Invalid count value");
      A |= 0;
      for (var D = ""; A;) if (A & 1 && (D += r), A >>>= 1) r += r;
      return D
    }
  }, "es6", "es3");
  (function () {
    function A(d, b, c) {
      var a;
      b = b.toLowerCase();
      return (a = d.__allListeners || c && (d.__allListeners = {})) && (a[b] || c && (a[b] = []))
    }
    function C(d, b, c, a, g, h) {
      a = a && d[b];
      var e;
      for (!a && (a = d[c]); !a && (e = (e || d).parentNode);) {
        if ("BODY" == e.tagName || h && !h(e)) return null;
        a = e[c]
      }
      return a && g && !g(a) ? C(a, b, c, !1, g) : a
    }
    UEDITOR_CONFIG = window.UEDITOR_CONFIG || {};
    var r = window.baidu || {};
    window.baidu = r;
    window.UE = r.editor = {
      plugins: {},
      commands: {},
      instants: {},
      I18N: {},
      _customizeUI: {},
      version: "1.5.0"
    };
    window.UE.showPopupTitlePic = true;
    window.UE.showPopupPhotoSearch = true;
    window.UE.showPopupJustifycenter = true;
    window.UE.showPopupJustifyright = true;
    window.UE.showPopupJustifyleft = true;
    window.UE.showPopupDefault = true;
    window.UE.showPopupSeamless = true;
    window.UE.showPopupUseOriginal = true;
    window.UE.showPopupImagedetele = true;
    var D = UE.dom = {},
      u = UE.browser =

        function () {
          var d = navigator.userAgent.toLowerCase(),
            b = window.opera,
            c = {
              ie: /(msie\s|trident.*rv:)([\w.]+)/i.test(d),
              opera: !! b && b.version,
              webkit: -1 < d.indexOf(" applewebkit/"),
              mac: -1 < d.indexOf("macintosh"),
              quirks: "BackCompat" == document.compatMode
            };
          c.gecko = "Gecko" == navigator.product && !c.webkit && !c.opera && !c.ie;
          var a = 0;
          if (c.ie) {
            a = d.match(/(?:msie\s([\w.]+))/);
            var g = d.match(/(?:trident.*rv:([\w.]+))/);
            a = a && g && a[1] && g[1] ? Math.max(1 * a[1], 1 * g[1]) : a && a[1] ? 1 * a[1] : g && g[1] ? 1 * g[1] : 0;
            c.ie11Compat = 11 == document.documentMode;
            c.ie9Compat = 9 == document.documentMode;
            c.ie8 = !! document.documentMode;
            c.ie8Compat = 8 == document.documentMode;
            c.ie7Compat = 7 == a && !document.documentMode || 7 == document.documentMode;
            c.ie6Compat = 7 > a || c.quirks;
            c.ie9above = 8 < a;
            c.ie9below = 9 > a;
            c.ie11above = 10 < a;
            c.ie11below = 11 > a
          }
          c.gecko && (g = d.match(/rv:([\d\.]+)/)) && (g = g[1].split("."), a = 1E4 * g[0] + 100 * (g[1] || 0) + 1 * (g[2] || 0));
          /chrome\/(\d+\.\d)/i.test(d) && (c.chrome = +RegExp.$1);
          /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(d) && !/chrome/i.test(d) && (c.safari = +(RegExp.$1 || RegExp.$2));
          c.opera && (a = parseFloat(b.version()));
          c.webkit && (a = parseFloat(d.match(/ applewebkit\/(\d+)/)[1]));
          c.version = a;
          c.isCompatible = !c.mobile && (c.ie && 6 <= a || c.gecko && 10801 <= a || c.opera && 9.5 <= a || c.air && 1 <= a || c.webkit && 522 <= a || !1);
          return c
        }(),
      I = u.ie,
      ja = u.opera,
      p = UE.utils = {
        each: function (d, b, c) {
          if (null != d) if (d.length === +d.length) for (var a = 0, g = d.length; a < g; a++) {
            if (!1 === b.call(c, d[a], a, d)) return !1
          } else for (a in d) if (d.hasOwnProperty(a) && !1 === b.call(c, d[a], a, d)) return !1
        },
        makeInstance: function (d) {
          var b =
            new Function;
          b.prototype = d;
          d = new b;
          b.prototype = null;
          return d
        },
        extend: function (d, b, c) {
          if (b) for (var a in b) c && d.hasOwnProperty(a) || (d[a] = b[a]);
          return d
        },
        extend2: function (d) {
          for (var b = arguments, c = 1; c < b.length; c++) {
            var a = b[c],
              g;
            for (g in a) d.hasOwnProperty(g) || (d[g] = a[g])
          }
          return d
        },
        inherits: function (d, b) {
          var c = d.prototype;
          b = p.makeInstance(b.prototype);
          p.extend(b, c, !0);
          d.prototype = b;
          return b.constructor = d
        },
        bind: function (d, b) {
          return function () {
            return d.apply(b, arguments)
          }
        },
        defer: function (d, b, c) {
          var a;
          return function () {
            c && clearTimeout(a);
            a = setTimeout(d, b)
          }
        },
        indexOf: function (d, b, c) {
          var a = -1;
          c = this.isNumber(c) ? c : 0;
          this.each(d, function (g, d) {
            if (d >= c && g === b) return a = d,
              !1
          });
          return a
        },
        removeItem: function (d, b) {
          for (var c = 0, a = d.length; c < a; c++) d[c] === b && (d.splice(c, 1), c--)
        },
        trim: function (d) {
          return d.replace(/(^[ \t\n\r]+)|([ \t\n\r]+$)/g, "")
        },
        listToMap: function (d) {
          if (!d) return {};
          d = p.isArray(d) ? d : d.split(",");
          for (var b = 0, c, a = {}; c = d[b++];) a[c.toUpperCase()] = a[c] = 1;
          return a
        },
        unhtml: function (d, b) {
          return d ? d.replace(b || /[&<">'](?:(amp|lt|quot|gt|#39|nbsp|ldquo|rdquo|#\d+);)?/g, function (b, a) {
            return a ? b : {
              "<": "&lt;",
              "&": "&amp;",
              '"': "&quot;",
              ">": "&gt;",
              "“": "&ldquo;",
              "”": "&rdquo;",
              "'": "&#39;"
            }[b]
          }) : ""
        },
        html: function (d) {
          return d ? d.replace(/&((g|l|quo)t|amp|#39|nbsp|ldquo|rdquo);/g, function (b) {
            return {
              "&lt;": "<",
              "&amp;": "&",
              "&quot;": '"',
              "&gt;": ">",
              "&#39;": "'",
              "&ldquo;": "“",
              "&rdquo;": "”",
              "&nbsp;": " "
            }[b]
          }) : ""
        },
        cssStyleToDomStyle: function () {
          var d = document.createElement("div").style,
            b = {
              "float": void 0 != d.cssFloat ? "cssFloat" : void 0 != d.styleFloat ? "styleFloat" : "float"
            };
          return function (c) {
            return b[c] || (b[c] = c.toLowerCase().replace(/-./g, function (a) {
              return a.charAt(1).toUpperCase()
            }))
          }
        }(),
        loadFile: function () {
          function d(c, a) {
            try {
              for (var g = 0, d; d = b[g++];) if (d.doc === c && d.url == (a.src || a.href)) return d
            } catch (e) {
              return null
            }
          }
          var b = [];
          return function (c, a, g) {
            var h = d(c, a);
            if (h) h.ready ? g && g() : h.funs.push(g);
            else if (b.push({
              doc: c,
              url: a.src || a.href,
              funs: [g]
            }), !c.body) {
              g = [];
              for (var e in a)"tag" != e && g.push(e + '="' + a[e] + '"');
              c.write("<" + a.tag + " " + g.join(" ") + " ></" + a.tag + ">")
            } else if (!a.id || !c.getElementById(a.id)) {
              var l = c.createElement(a.tag);
              delete a.tag;
              for (e in a) l.setAttribute(e, a[e]);
              l.onload =
                l.onreadystatechange = function () {
                  if (!this.readyState || /loaded|complete/.test(this.readyState)) {
                    h = d(c, a);
                    if (0 < h.funs.length) {
                      h.ready = 1;
                      for (var b; b = h.funs.pop();) b()
                    }
                    l.onload = l.onreadystatechange = null
                  }
                };
              l.onerror = function () {
                throw Error("The load " + (a.href || a.src) + " fails,check the url settings of file ueditor.config.js ");
              };
              c.getElementsByTagName("head")[0].appendChild(l)
            }
          }
        }(),
        isEmptyObject: function (d) {
          if (null == d) return !0;
          if (this.isArray(d) || this.isString(d)) return 0 === d.length;
          for (var b in d) if (d.hasOwnProperty(b)) return !1;
          return !0
        },
        fixColor: function (d, b) {
          if (/color/i.test(d) && /rgba?/.test(b)) {
            d = b.split(",");
            if (3 < d.length) return "";
            b = "#";
            for (var c = 0, a; a = d[c++];) a = parseInt(a.replace(/[^\d]/gi, ""), 10).toString(16),
              b += 1 == a.length ? "0" + a : a;
            b = b.toUpperCase()
          }
          return b
        },
        optCss: function (d) {
          function b(a, b) {
            if (!a) return "";
            var e = a.top,
              c = a.bottom,
              k = a.left,
              g = a.right,
              d = "";
            if (e && k && c && g) d += ";" + b + ":" + (e == c && c == k && k == g ? e : e == c && k == g ? e + " " + k : k == g ? e + " " + k + " " + c : e + " " + g + " " + c + " " + k) + ";";
            else for (var h in a) d += ";" + b + "-" + h + ":" + a[h] + ";";
            return d
          }
          var c, a;
          d = d.replace(/(padding|margin|border)\-([^:]+):([^;]+);?/gi, function (b, d, e, l) {
            if (1 == l.split(" ").length) switch (d) {
              case "padding":
                return !c && (c = {}),
                  c[e] = l,
                  "";
              case "margin":
                return !a && (a = {}),
                  a[e] = l,
                  "";
              case "border":
                return "initial" == l ? "" : b
            }
            return b
          });
          d += b(c, "padding") + b(a, "margin");
          return d.replace(/^[ \n\r\t;]*|[ \n\r\t]*$/, "").replace(/;([ \n\r\t]+)|\1;/g, ";").replace(/(&((l|g)t|quot|#39))?;{2,}/g, function (a, b) {
            return b ? b + ";;" : ";"
          })
        },
        clone: function (d, b) {
          b = b || {};
          for (var c in d) if (d.hasOwnProperty(c)) {
            var a =
              d[c];
            "object" == typeof a ? (b[c] = p.isArray(a) ? [] : {}, p.clone(d[c], b[c])) : b[c] = a
          }
          return b
        },
        transUnitToPx: function (d) {
          if (!/(pt|cm)/.test(d)) return d;
          var b;
          d.replace(/([\d.]+)(\w+)/, function (c, a, g) {
            d = a;
            b = g
          });
          switch (b) {
            case "cm":
              d = 25 * parseFloat(d);
              break;
            case "pt":
              d = Math.round(96 * parseFloat(d) / 72)
          }
          return d + (d ? "px" : "")
        },
        domReady: function () {
          function d(a) {
            for (a.isReady = !0; a = c.pop(); a());
          }
          function b(a, g) {
            g = g || window;
            var h = g.document;
            a && c.push(a);
            "complete" === h.readyState ? d(h) : (h.isReady && d(h), u.ie && 11 != u.version ? (function () {
              if (!h.isReady) {
                try {
                  h.documentElement.doScroll("left")
                } catch (e) {
                  setTimeout(function () {
                    b(a, g)
                  }, 0);
                  return
                }
                d(h)
              }
            }(), g.attachEvent("onload", function () {
              d(h)
            })) : (h.addEventListener("DOMContentLoaded", function () {
              h.removeEventListener("DOMContentLoaded", function () {
                b(a, g)
              }, !1);
              d(h)
            }, !1), g.addEventListener("load", function () {
              d(h)
            }, !1)))
          }
          var c = [];
          return b
        }(),
        cssRule: u.ie && 11 != u.version ?
          function (d, b, c) {
            if (void 0 === b || b && b.nodeType && 9 == b.nodeType) {
              c = b && b.nodeType && 9 == b.nodeType ? b : c || document;
              var a = c.indexList || (c.indexList = {});
              var g = a[d];
              if (void 0 !== g) return c.styleSheets[g].cssText
            } else {
              c = c || document;
              a = c.indexList || (c.indexList = {});
              g = a[d];
              if ("" === b) return void 0 !== g ? (c.styleSheets[g].cssText = "", delete a[d], !0) : !1;
              void 0 !== g ? sheetStyle = c.styleSheets[g] : (sheetStyle = c.createStyleSheet("", g = c.styleSheets.length), a[d] = g);
              sheetStyle.cssText = b
            }
          } : function (d, b, c) {
            var a;
            if (void 0 === b || b && b.nodeType && 9 == b.nodeType) return c = b && b.nodeType && 9 == b.nodeType ? b : c || document,
              (a = c.getElementById(d)) ? a.innerHTML : void 0;
            c = c || document;
            a = c.getElementById(d);
            if ("" === b) return a ? (a.parentNode.removeChild(a), !0) : !1;
            a ? a.innerHTML = b : (a = c.createElement("style"), a.id = d, a.innerHTML = b, c.getElementsByTagName("head")[0].appendChild(a))
          },
        sort: function (d, b) {
          b = b ||
            function (a, b) {
              return a.localeCompare(b)
            };
          for (var c = 0, a = d.length; c < a; c++) for (var g = c, h = d.length; g < h; g++) if (0 < b(d[c], d[g])) {
            var e = d[c];
            d[c] = d[g];
            d[g] = e
          }
          return d
        },
        serializeParam: function (d) {
          var b = [],
            c;
          for (c in d) if ("method" != c && "timeout" != c && "async" != c) if ("function" != (typeof d[c]).toLowerCase() && "object" != (typeof d[c]).toLowerCase()) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d[c]));
          else if (p.isArray(d[c])) for (var a = 0; a < d[c].length; a++) b.push(encodeURIComponent(c) + "[]=" + encodeURIComponent(d[c][a]));
          return b.join("&")
        },
        formatUrl: function (d) {
          d = d.replace(/&&/g, "&");
          d = d.replace(/\?&/g, "?");
          d = d.replace(/&$/g, "");
          d = d.replace(/&#/g, "#");
          return d = d.replace(/&+/g, "&")
        },
        isCrossDomainUrl: function (d) {
          var b = document.createElement("a");
          b.href = d;
          u.ie && (b.href = b.href);
          return !(b.protocol == location.protocol && b.hostname == location.hostname && (b.port == location.port || "80" == b.port && "" == location.port || "" == b.port && "80" == location.port))
        },
        clearEmptyAttrs: function (d) {
          for (var b in d)"" === d[b] && delete d[b];
          return d
        },
        str2json: function (d) {
          return p.isString(d) ? window.JSON ? JSON.parse(d) : (new Function("return " + p.trim(d || "")))() : null
        },
        json2str: function () {
          if (window.JSON) return JSON.stringify;
          var d = function (a) {
              return 10 > a ? "0" + a : a
            },
            b = function (a) {
              /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var b = c[a];
                if (b) return b;
                b = a.charCodeAt();
                return "\\u00" + Math.floor(b / 16).toString(16) + (b % 16).toString(16)
              }));
              return '"' + a + '"'
            },
            c = {
              "\b": "\\b",
              "\t": "\\t",
              "\n": "\\n",
              "\f": "\\f",
              "\r": "\\r",
              '"': '\\"',
              "\\": "\\\\"
            };
          return function (a) {
            switch (typeof a) {
              case "undefined":
                return "undefined";
              case "number":
                return isFinite(a) ? String(a) : "null";
              case "string":
                return b(a);
              case "boolean":
                return String(a);
              default:
                if (null === a) return "null";
                if (p.isArray(a)) {
                  var c = ["["],
                    h = a.length,
                    e;
                  for (e = 0; e < h; e++) {
                    var l = a[e];
                    switch (typeof l) {
                      case "undefined":
                      case "function":
                      case "unknown":
                        break;
                      default:
                        k && c.push(",");
                        c.push(p.json2str(l));
                        var k = 1
                    }
                  }
                  c.push("]");
                  return c.join("")
                }
                if (p.isDate(a)) return '"' + a.getFullYear() + "-" + d(a.getMonth() + 1) + "-" + d(a.getDate()) + "T" + d(a.getHours()) + ":" + d(a.getMinutes()) + ":" + d(a.getSeconds()) + '"';
                k = ["{"];
                e = p.json2str;
                for (h in a) if (Object.prototype.hasOwnProperty.call(a, h)) switch (l = a[h], typeof l) {
                  case "undefined":
                  case "unknown":
                  case "function":
                    break;
                  default:
                    c && k.push(","),
                      c = 1,
                      k.push(e(h) + ":" + e(l))
                }
                k.push("}");
                return k.join("")
            }
          }
        }()
      };
    p.each("String Function Array Number RegExp Object Date".split(" "), function (d) {
      UE.utils["is" + d] = function (b) {
        return Object.prototype.toString.apply(b) == "[object " + d + "]"
      }
    });
    var Y = UE.EventBase = function () {};
    Y.prototype = {
      addListener: function (d, b) {
        d = p.trim(d).split(/\s+/);
        for (var c = 0, a; a = d[c++];) A(this, a, !0).push(b)
      },
      on: function (d, b) {
        return this.addListener(d, b)
      },
      off: function (d, b) {
        return this.removeListener(d, b)
      },
      trigger: function () {
        return this.fireEvent.apply(this, arguments)
      },
      removeListener: function (d, b) {
        d = p.trim(d).split(/\s+/);
        for (var c = 0, a; a = d[c++];) p.removeItem(A(this, a) || [], b)
      },
      fireEvent: function () {
        var d = arguments[0];
        d = p.trim(d).split(" ");
        for (var b = 0, c; c = d[b++];) {
          var a = A(this, c),
            g, h;
          if (a) for (h = a.length; h--;) if (a[h]) {
            var e = a[h].apply(this, arguments);
            if (!0 === e) return e;
            void 0 !== e && (g = e)
          }
          if (e = this["on" + c.toLowerCase()]) g = e.apply(this, arguments)
        }
        return g
      }
    };
    var x = D.dtd = function () {
        function d(a) {
          for (var b in a) a[b.toUpperCase()] = a[b];
          return a
        }
        var b = p.extend2,
          c = d({
            isindex: 1,
            fieldset: 1
          }),
          a = d({
            input: 1,
            button: 1,
            select: 1,
            textarea: 1,
            label: 1
          }),
          g = b(d({
            a: 1
          }), a),
          h = b({
            iframe: 1
          }, g),
          e = d({
            hr: 1,
            ul: 1,
            menu: 1,
            div: 1,
            blockquote: 1,
            noscript: 1,
            table: 1,
            center: 1,
            address: 1,
            dir: 1,
            pre: 1,
            h5: 1,
            dl: 1,
            h4: 1,
            noframes: 1,
            h6: 1,
            ol: 1,
            h1: 1,
            h3: 1,
            h2: 1
          }),
          l = d({
            ins: 1,
            del: 1,
            script: 1,
            style: 1
          }),
          k = b(d({
            mark: 1,
            b: 1,
            acronym: 1,
            bdo: 1,
            "var": 1,
            "#": 1,
            abbr: 1,
            code: 1,
            br: 1,
            i: 1,
            cite: 1,
            kbd: 1,
            u: 1,
            strike: 1,
            s: 1,
            tt: 1,
            strong: 1,
            q: 1,
            samp: 1,
            em: 1,
            dfn: 1,
            span: 1
          }), l),
          n = b(d({
            sub: 1,
            img: 1,
            embed: 1,
            object: 1,
            sup: 1,
            basefont: 1,
            map: 1,
            applet: 1,
            font: 1,
            big: 1,
            small: 1
          }), k),
          m = b(d({
            p: 1
          }), n);
        a = b(d({
          iframe: 1
        }), n, a);
        n = d({
          img: 1,
          embed: 1,
          noscript: 1,
          br: 1,
          kbd: 1,
          center: 1,
          button: 1,
          basefont: 1,
          h5: 1,
          h4: 1,
          samp: 1,
          h6: 1,
          ol: 1,
          h1: 1,
          h3: 1,
          h2: 1,
          form: 1,
          font: 1,
          "#": 1,
          select: 1,
          menu: 1,
          ins: 1,
          abbr: 1,
          label: 1,
          code: 1,
          table: 1,
          script: 1,
          cite: 1,
          input: 1,
          iframe: 1,
          strong: 1,
          textarea: 1,
          noframes: 1,
          big: 1,
          small: 1,
          span: 1,
          hr: 1,
          sub: 1,
          bdo: 1,
          "var": 1,
          div: 1,
          object: 1,
          sup: 1,
          strike: 1,
          dir: 1,
          map: 1,
          dl: 1,
          applet: 1,
          del: 1,
          isindex: 1,
          fieldset: 1,
          ul: 1,
          b: 1,
          acronym: 1,
          a: 1,
          blockquote: 1,
          i: 1,
          u: 1,
          s: 1,
          tt: 1,
          address: 1,
          q: 1,
          pre: 1,
          p: 1,
          em: 1,
          dfn: 1
        });
        var f = b(d({
            a: 0
          }), a),
          t = d({
            tr: 1
          }),
          v = d({
            "#": 1
          }),
          w = b(d({
            param: 1
          }), n),
          y = b(d({
            form: 1
          }), c, h, e, m),
          K = d({
            li: 1,
            ol: 1,
            ul: 1
          }),
          F = d({
            style: 1,
            script: 1
          }),
          Q = d({
            base: 1,
            link: 1,
            meta: 1,
            title: 1
          });
        F = b(Q, F);
        var S = d({
            head: 1,
            body: 1
          }),
          r = d({
            html: 1
          }),
          u = d({
            address: 1,
            blockquote: 1,
            center: 1,
            dir: 1,
            div: 1,
            dl: 1,
            fieldset: 1,
            form: 1,
            h1: 1,
            h2: 1,
            h3: 1,
            h4: 1,
            h5: 1,
            h6: 1,
            hr: 1,
            isindex: 1,
            menu: 1,
            noframes: 1,
            ol: 1,
            p: 1,
            pre: 1,
            table: 1,
            ul: 1
          }),
          M = d({
            area: 1,
            base: 1,
            basefont: 1,
            br: 1,
            col: 1,
            command: 1,
            dialog: 1,
            hr: 1,
            img: 1,
            input: 1,
            isindex: 1,
            keygen: 1,
            link: 1,
            meta: 1,
            param: 1,
            source: 1,
            track: 1,
            wbr: 1
          });
        svg = d({
          text: 1,
          tspan: 1,
          defs: 1,
          clippath: 1,
          use: 1,
          animate: 1,
          animatetransform: 1,
          path: 1,
          polygon: 1,
          polyline: 1,
          line: 1,
          ellipse: 1,
          circle: 1,
          rect: 1,
          stop: 1,
          feblend: 1,
          fecolormatrix: 1,
          fecomponenttransfer: 1,
          fecomposite: 1,
          feconvolvematrix: 1,
          fediffuselighting: 1,
          fedisplacementmap: 1,
          feflood: 1,
          fegaussianblur: 1,
          feimage: 1,
          femerge: 1,
          femorphology: 1,
          feoffset: 1,
          fespecularlighting: 1,
          fetile: 1,
          feturbulence: 1,
          fedistantlight: 1,
          fepointlight: 1,
          fespotlight: 1
        });
        return d({
          $nonBodyContent: b(r, S, Q),
          $block: u,
          $inline: f,
          $inlineWithA: b(d({
            a: 1
          }), f),
          $body: b(d({
            script: 1,
            style: 1
          }), u),
          $cdata: d({
            script: 1,
            style: 1
          }),
          $empty: M,
          $svg: svg,
          $nonChild: d({
            iframe: 1,
            textarea: 1,
            embed: 1
          }),
          $listItem: d({
            dd: 1,
            dt: 1,
            li: 1
          }),
          $list: d({
            ul: 1,
            ol: 1,
            dl: 1
          }),
          // 自动排版-清除空行时，如果空行里有以下元素，则不会被清除
          $isNotEmpty: d({
            table: 1,
            ul: 1,
            ol: 1,
            dl: 1,
            iframe: 1,
            area: 1,
            base: 1,
            col: 1,
            hr: 1,
            img: 1,
            embed: 1,
            input: 1,
            link: 1,
            meta: 1,
            param: 1,
            h1: 1,
            h2: 1,
            h3: 1,
            h4: 1,
            h5: 1,
            h6: 1,
            video: 1,
            audio: 1
          }),
          $removeEmpty: d({
            a: 1,
            abbr: 1,
            acronym: 1,
            address: 1,
            b: 1,
            bdo: 1,
            big: 1,
            cite: 1,
            code: 1,
            del: 1,
            dfn: 1,
            em: 1,
            font: 1,
            i: 1,
            ins: 1,
            label: 1,
            kbd: 1,
            q: 1,
            s: 1,
            samp: 1,
            small: 1,
            span: 1,
            strike: 1,
            strong: 1,
            sub: 1,
            sup: 1,
            tt: 1,
            u: 1,
            "var": 1
          }),
          $removeEmptyBlock: d({
            p: 1,
            div: 1
          }),
          $tableContent: d({
            caption: 1,
            col: 1,
            colgroup: 1,
            tbody: 1,
            td: 1,
            tfoot: 1,
            th: 1,
            thead: 1,
            tr: 1,
            table: 1
          }),
          $notTransContent: d({
            pre: 1,
            script: 1,
            style: 1,
            textarea: 1
          }),
          html: S,
          head: F,
          style: v,
          script: v,
          body: y,
          base: {},
          link: {},
          meta: {},
          title: v,
          col: {},
          tr: d({
            td: 1,
            th: 1
          }),
          img: {},
          embed: {},
          colgroup: d({
            thead: 1,
            col: 1,
            tbody: 1,
            tr: 1,
            tfoot: 1
          }),
          noscript: y,
          td: y,
          br: {},
          th: y,
          center: y,
          kbd: f,
          button: b(m, e),
          basefont: {},
          h5: f,
          h4: f,
          samp: f,
          h6: f,
          ol: K,
          h1: f,
          h3: f,
          option: v,
          h2: f,
          form: b(c, h, e, m),
          select: d({
            optgroup: 1,
            option: 1
          }),
          font: f,
          ins: f,
          menu: K,
          abbr: f,
          label: f,
          table: d({
            thead: 1,
            col: 1,
            tbody: 1,
            tr: 1,
            colgroup: 1,
            caption: 1,
            tfoot: 1
          }),
          code: f,
          tfoot: t,
          cite: f,
          li: y,
          input: {},
          iframe: y,
          strong: f,
          textarea: v,
          noframes: y,
          big: f,
          small: f,
          span: d({
            "#": 1,
            br: 1,
            b: 1,
            strong: 1,
            u: 1,
            i: 1,
            em: 1,
            sub: 1,
            sup: 1,
            strike: 1,
            span: 1
          }),
          hr: f,
          dt: f,
          sub: f,
          optgroup: d({
            option: 1
          }),
          param: {},
          bdo: f,
          "var": f,
          div: y,
          object: w,
          sup: f,
          dd: y,
          strike: f,
          area: {},
          dir: K,
          map: b(d({
            area: 1,
            form: 1,
            p: 1
          }), c, l, e),
          applet: w,
          dl: d({
            dt: 1,
            dd: 1
          }),
          del: f,
          isindex: {},
          fieldset: b(d({
            legend: 1
          }), n),
          thead: t,
          ul: K,
          acronym: f,
          b: f,
          a: b(d({
            a: 1
          }), a),
          blockquote: b(d({
            td: 1,
            tr: 1,
            tbody: 1,
            li: 1
          }), y),
          caption: f,
          i: f,
          u: f,
          tbody: t,
          s: f,
          address: b(h, m),
          tt: f,
          legend: f,
          q: f,
          pre: b(k, g),
          p: b(d({
            a: 1
          }), f),
          em: f,
          dfn: f,
          mark: f
        })
      }(),
      ea = I && 9 > u.version ? {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder"
      } : {
        tabindex: "tabIndex",
        readonly: "readOnly"
      },
      la = p.listToMap("-webkit-box -moz-box block list-item table table-row-group table-header-group table-footer-group table-row table-column-group table-column table-cell table-caption".split(" ")),
      f = D.domUtils = {
        NODE_ELEMENT: 1,
        NODE_DOCUMENT: 9,
        NODE_TEXT: 3,
        NODE_COMMENT: 8,
        NODE_DOCUMENT_FRAGMENT: 11,
        POSITION_IDENTICAL: 0,
        POSITION_DISCONNECTED: 1,
        POSITION_FOLLOWING: 2,
        POSITION_PRECEDING: 4,
        POSITION_IS_CONTAINED: 8,
        POSITION_CONTAINS: 16,
        fillChar: I && "6" == u.version ? "\ufeff" : "\u200b",
        keys: {
          8: 1,
          46: 1,
          16: 1,
          17: 1,
          18: 1,
          37: 1,
          38: 1,
          39: 1,
          40: 1,
          13: 1
        },
        getPosition: function (d, b) {
          if (d === b) return 0;
          var c, a = [d],
            g = [b];
          for (c = d; c = c.parentNode;) {
            if (c === b) return 10;
            a.push(c)
          }
          for (c = b; c = c.parentNode;) {
            if (c === d) return 20;
            g.push(c)
          }
          a.reverse();
          g.reverse();
          if (a[0] !== g[0]) return 1;
          for (b = -1; b++, a[b] === g[b];);
          d = a[b];
          for (b = g[b]; d = d.nextSibling;) if (d === b) return 4;
          return 2
        },
        getNodeIndex: function (d, b) {
          for (var c = 0; d = d.previousSibling;) b && 3 == d.nodeType ? d.nodeType != d.nextSibling.nodeType && c++ : c++;
          return c
        },
        inDoc: function (d, b) {
          return 10 == f.getPosition(d, b)
        },
        findParent: function (d, b, c) {
          if (d && !f.isBody(d)) for (d = c ? d : d.parentNode; d;) {
            if (!b || b(d) || f.isBody(d)) return b && !b(d) && f.isBody(d) ? null : d;
            d = d.parentNode
          }
          return null
        },
        findParentByTagName: function (d, b, c, a) {
          b = p.listToMap(p.isArray(b) ? b : [b]);
          return f.findParent(d, function (c) {
            return b[c.tagName] && !(a && a(c))
          }, c)
        },
        findParents: function (d, b, c, a) {
          for (b = b && (c && c(d) || !c) ? [d] : []; d = f.findParent(d, c);) b.push(d);
          return a ? b : b.reverse()
        },
        insertAfter: function (d, b) {
          return d.nextSibling ? d.parentNode.insertBefore(b, d.nextSibling) : d.parentNode.appendChild(b)
        },
        remove: function (d, b) {
          var c = d.parentNode;
          if (c) {
            if (b && d.hasChildNodes()) for (; b = d.firstChild;) c.insertBefore(b, d);
            c.removeChild(d)
          }
          return d
        },
        getNextDomNode: function (d, b, c, a) {
          return C(d, "firstChild", "nextSibling", b, c, a)
        },
        getPreDomNode: function (d, b, c, a) {
          return C(d, "lastChild", "previousSibling", b, c, a)
        },
        isBookmarkNode: function (d) {
          return 1 == d.nodeType && d.id && /^_baidu_bookmark_/i.test(d.id)
        },
        getWindow: function (d) {
          d = d.ownerDocument || d;
          return d.defaultView || d.parentWindow
        },
        getCommonAncestor: function (d, b) {
          if (d === b) return d;
          for (var c = [d], a = [b], g = d, h = -1; g = g.parentNode;) {
            if (g === b) return g;
            c.push(g)
          }
          for (g = b; g = g.parentNode;) {
            if (g === d) return g;
            a.push(g)
          }
          c.reverse();
          for (a.reverse(); h++, c[h] === a[h];);
          return 0 == h ? null : c[h - 1]
        },
        clearEmptySibling: function (d, b, c) {
          function a(a, b) {
            for (var e; a && !f.isBookmarkNode(a) && (f.isEmptyInlineElement(a) || !(new RegExp("[^\t\n\r" + f.fillChar + "]")).test(a.nodeValue));) e = a[b],
              f.remove(a),
              a = e
          }!b && a(d.nextSibling, "nextSibling");
          !c && a(d.previousSibling, "previousSibling")
        },
        split: function (d, b) {
          var c = d.ownerDocument;
          if (u.ie && b == d.nodeValue.length) return c = c.createTextNode(""),
            f.insertAfter(d, c);
          d = d.splitText(b);
          u.ie8 && (c = c.createTextNode(""), f.insertAfter(d, c), f.remove(c));
          return d
        },
        isWhitespace: function (d) {
          return !(new RegExp("[^ \t\n\r" + f.fillChar + "]")).test(d.nodeValue)
        },
        getXY: function (d) {
          for (var b = 0, c = 0; d.offsetParent;) c += d.offsetTop,
            b += d.offsetLeft,
            d = d.offsetParent;
          return {
            x: b,
            y: c
          }
        },
        on: function (d, b, c) {
          var a = p.isArray(b) ? b : p.trim(b).split(/\s+/),
            g = a.length;
          if (g) for (; g--;) if (b = a[g], d.addEventListener) d.addEventListener(b, c, !1);
          else {
            c._d || (c._d = {
              els: []
            });
            var h = b + c.toString(),
              e = p.indexOf(c._d.els, d);
            c._d[h] && -1 != e || (-1 == e && c._d.els.push(d), c._d[h] || (c._d[h] =

              function (a) {
                return c.call(a.srcElement, a || window.event)
              }), d.attachEvent("on" + b, c._d[h]))
          }
          d = null
        },
        un: function (d, b, c) {
          var a = p.isArray(b) ? b : p.trim(b).split(/\s+/),
            g = a.length;
          if (g) for (; g--;) if (b = a[g], d.removeEventListener) d.removeEventListener(b, c, !1);
          else {
            var h = b + c.toString();
            try {
              d.detachEvent("on" + b, c._d ? c._d[h] : c)
            } catch (e) {}
            c._d && c._d[h] && (b = p.indexOf(c._d.els, d), -1 != b && c._d.els.splice(b, 1), 0 == c._d.els.length && delete c._d[h])
          }
        },
        isSameElement: function (d, b) {
          if (d.tagName != b.tagName) return !1;
          var c = d.attributes,
            a = b.attributes;
          if (!I && c.length != a.length) return !1;
          for (var g, h, e = 0, l = 0, k = 0; g = c[k++];) {
            if ("style" == g.nodeName) if (g.specified && e++, f.isSameStyle(d, b)) continue;
            else return !1;
            if (I) if (g.specified) e++,
              h = a.getNamedItem(g.nodeName);
            else continue;
            else h = b.attributes[g.nodeName];
            if (!h.specified || g.nodeValue != h.nodeValue) return !1
          }
          if (I) {
            for (k = 0; h = a[k++];) h.specified && l++;
            if (e != l) return !1
          }
          return !0
        },
        isSameStyle: function (d, b) {
          var c = d.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":"),
            a = b.style.cssText.replace(/( ?; ?)/g, ";").replace(/( ?: ?)/g, ":");
          if (u.opera) {
            c = d.style;
            a = b.style;
            if (c.length != a.length) return !1;
            for (var g in c) if (!/^(\d+|csstext)$/i.test(g) && c[g] != a[g]) return !1;
            return !0
          }
          if (!c || !a) return c == a;
          c = c.split(";");
          a = a.split(";");
          if (c.length != a.length) return !1;
          for (d = 0; b = c[d++];) if (-1 == p.indexOf(a, b)) return !1;
          return !0
        },
        isBlockElm: function (d) {
          return 1 == d.nodeType && (x.$block[d.tagName] || la[f.getComputedStyle(d, "display")]) && !x.$nonChild[d.tagName]
        },
        isBody: function (d) {
          return d && 1 == d.nodeType && "body" == d.tagName.toLowerCase()
        },
        breakParent: function (d, b) {
          var c = d,
            a = d;
          do {
            c = c.parentNode;
            if (h) {
              var g = c.cloneNode(!1);
              g.appendChild(h);
              var h = g;
              g = c.cloneNode(!1);
              g.appendChild(e);
              var e = g
            } else h = c.cloneNode(!1), e = h.cloneNode(!1);
            for (; g = a.previousSibling;) h.insertBefore(g, h.firstChild);
            for (; g = a.nextSibling;) e.appendChild(g);
            a = c
          } while (b !== c);
          g = b.parentNode;
          g.insertBefore(h, b);
          g.insertBefore(e, b);
          g.insertBefore(d, e);
          f.remove(b);
          return d
        },
        isEmptyInlineElement: function (d) {
          if (1 != d.nodeType || !x.$removeEmpty[d.tagName]) return 0;
          for (d = d.firstChild; d;) {
            if (f.isBookmarkNode(d) || 1 == d.nodeType && !f.isEmptyInlineElement(d) || 3 == d.nodeType && !f.isWhitespace(d)) return 0;
            d = d.nextSibling
          }
          return 1
        },
        trimWhiteTextNode: function (d) {
          function b(b) {
            for (var a;
                 (a = d[b]) && 3 == a.nodeType && f.isWhitespace(a);) d.removeChild(a)
          }
          b("firstChild");
          b("lastChild")
        },
        mergeChild: function (d, b, c) {
          b = f.getElementsByTagName(d, d.tagName.toLowerCase());
          for (var a = 0, g; g = b[a++];) if (g.parentNode && !f.isBookmarkNode(g)) if ("span" == g.tagName.toLowerCase()) {
            if (d === g.parentNode && (f.trimWhiteTextNode(d), 1 == d.childNodes.length)) {
              d.style.cssText =
                g.style.cssText + ";" + d.style.cssText;
              f.remove(g, !0);
              continue
            }
            g.style.cssText = d.style.cssText + ";" + g.style.cssText;
            if (c) {
              var h = c.style;
              if (h) {
                h = h.split(";");
                for (var e = 0, l; l = h[e++];) g.style[p.cssStyleToDomStyle(l.split(":")[0])] = l.split(":")[1]
              }
            }
            f.isSameStyle(g, d) && f.remove(g, !0)
          } else f.isSameElement(d, g) && f.remove(g, !0)
        },
        getElementsByTagName: function (d, b, c) {
          if (c && p.isString(c)) {
            var a = c;
            c = function (b) {
              return f.hasClass(b, a)
            }
          }
          b = p.trim(b).replace(/[ ]{2,}/g, " ").split(" ");
          for (var g = [], h = 0, e; e = b[h++];) {
            e =
              d.getElementsByTagName(e);
            for (var l = 0, k; k = e[l++];) c && !c(k) || g.push(k)
          }
          return g
        },
        mergeToParent: function (d) {
          for (var b = d.parentNode; b && x.$removeEmpty[b.tagName];) {
            if (b.tagName == d.tagName || "A" == b.tagName) {
              f.trimWhiteTextNode(b);
              if ("SPAN" == b.tagName && !f.isSameStyle(b, d) || "A" == b.tagName && "SPAN" == d.tagName) if (1 < b.childNodes.length || b !== d.parentNode) {
                d.style.cssText = b.style.cssText + ";" + d.style.cssText;
                b = b.parentNode;
                continue
              } else b.style.cssText += ";" + d.style.cssText,
              "A" == b.tagName && (b.style.textDecoration = "underline");
              if ("A" != b.tagName) {
                b === d.parentNode && f.remove(d, !0);
                break
              }
            }
            b = b.parentNode
          }
        },
        mergeSibling: function (d, b, c) {
          function a(a, b, e) {
            var c;
            if ((c = e[a]) && !f.isBookmarkNode(c) && 1 == c.nodeType && f.isSameElement(e, c)) {
              for (; c.firstChild;)"firstChild" == b ? e.insertBefore(c.lastChild, e.firstChild) : e.appendChild(c.firstChild);
              f.remove(c)
            }
          }!b && a("previousSibling", "firstChild", d);
          !c && a("nextSibling", "lastChild", d)
        },
        unSelectable: I && u.ie9below || u.opera ?
          function (d) {
            d.onselectstart = function () {
              return !1
            };
            d.onclick =
              d.onkeyup = d.onkeydown = function () {
                return !1
              };
            d.unselectable = "on";
            d.setAttribute("unselectable", "on");
            for (var b = 0, c; c = d.all[b++];) switch (c.tagName.toLowerCase()) {
              case "iframe":
              case "textarea":
              case "input":
              case "select":
                break;
              default:
                c.unselectable = "on",
                  d.setAttribute("unselectable", "on")
            }
          } : function (d) {
            d.style.MozUserSelect = d.style.webkitUserSelect = d.style.msUserSelect = d.style.KhtmlUserSelect = "none"
          },
        removeAttributes: function (d, b) {
          b = p.isArray(b) ? b : p.trim(b).replace(/[ ]{2,}/g, " ").split(" ");
          for (var c =
            0, a; a = b[c++];) {
            a = ea[a] || a;
            switch (a) {
              case "className":
                d[a] = "";
                break;
              case "style":
                d.style.cssText = "";
                var g = d.getAttributeNode("style");
                !u.ie && g && d.removeAttributeNode(g)
            }
            d.removeAttribute(a)
          }
        },
        createElement: function (d, b, c) {
          return f.setAttributes(d.createElement(b), c)
        },
        setAttributes: function (d, b) {
          for (var c in b) if (b.hasOwnProperty(c)) {
            var a = b[c];
            switch (c) {
              case "class":
                d.className = a;
                break;
              case "style":
                d.style.cssText = d.style.cssText + ";" + a;
                break;
              case "innerHTML":
                d[c] = a;
                break;
              case "value":
                d.value = a;
                break;
              case "imageid":
                d.id = a;
                break;
              default:
                d.setAttribute(ea[c] || c, a)
            }
          }
          return d
        },
        getComputedStyle: function (d, b) {
          if (-1 < "width height top left".indexOf(b)) return d["offset" + b.replace(/^\w/, function (a) {
            return a.toUpperCase()
          })] + "px";
          3 == d.nodeType && (d = d.parentNode);
          if (u.ie && 9 > u.version && "font-size" == b && !d.style.fontSize && !x.$empty[d.tagName] && !x.$nonChild[d.tagName]) {
            b = d.ownerDocument.createElement("span");
            b.style.cssText = "padding:0;border:0;font-family:simsun;";
            b.innerHTML = ".";
            d.appendChild(b);
            var c = b.offsetHeight;
            d.removeChild(b);
            b =
              null;
            return c + "px"
          }
          try {
            c = u.webkit && "text-decoration" === b ? f.getWindow(d).getComputedStyle(d).webkitTextDecorationsInEffect : f.getStyle(d, b) || (window.getComputedStyle ? f.getWindow(d).getComputedStyle(d, "").getPropertyValue(b) : (d.currentStyle || d.style)[p.cssStyleToDomStyle(b)])
          } catch (a) {
            return ""
          }
          return p.transUnitToPx(p.fixColor(b, c))
        },
        removeClasses: function (d, b) {
          b = p.isArray(b) ? b : p.trim(b).replace(/[ ]{2,}/g, " ").split(" ");
          for (var c = 0, a, g = d.className; a = b[c++];) g = g.replace(new RegExp("\\b" + a + "\\b"), "");
          (g = p.trim(g).replace(/[ ]{2,}/g, " ")) ? d.className = g : f.removeAttributes(d, ["class"])
        },
        addClass: function (d, b) {
          if (d) {
            b = p.trim(b).replace(/[ ]{2,}/g, " ").split(" ");
            for (var c = 0, a, g = d.className; a = b[c++];)(new RegExp("\\b" + a + "\\b")).test(g) || (g += " " + a);
            d.className = p.trim(g)
          }
        },
        hasClass: function (d, b) {
          if (p.isRegExp(b)) return b.test(d.className);
          b = p.trim(b).replace(/[ ]{2,}/g, " ").split(" ");
          for (var c = 0, a = d.className; d = b[c++];) if (!(new RegExp("\\b" + d + "\\b", "i")).test(a)) return !1;
          return c - 1 == b.length
        },
        preventDefault: function (d) {
          d.preventDefault ? d.preventDefault() : d.returnValue = !1
        },
        removeStyle: function (d, b) {
          u.ie ? ("color" == b && (b = "(^|;)" + b), d.style.cssText = d.style.cssText.replace(new RegExp(b + "[^:]*:[^;]+;?", "ig"), "")) : d.style.removeProperty ? d.style.removeProperty(b) : d.style.removeAttribute(p.cssStyleToDomStyle(b));
          d.style.cssText || f.removeAttributes(d, ["style"])
        },
        getStyle: function (d, b) {
          d = d.style[p.cssStyleToDomStyle(b)];
          return p.fixColor(b, d)
        },
        setStyle: function (d, b, c) {
          d.style[p.cssStyleToDomStyle(b)] = c;
          p.trim(d.style.cssText) || this.removeAttributes(d, "style")
        },
        setStyles: function (d, b) {
          for (var c in b) b.hasOwnProperty(c) && f.setStyle(d, c, b[c])
        },
        removeDirtyAttr: function (d) {
          for (var b = 0, c, a = d.getElementsByTagName("*"); c = a[b++];) c.removeAttribute("_moz_dirty");
          d.removeAttribute("_moz_dirty")
        },
        getChildCount: function (d, b) {
          var c = 0;
          d = d.firstChild;
          for (b = b ||
            function () {
              return 1
            }; d;) b(d) && c++,
            d = d.nextSibling;
          return c
        },
        isEmptyNode: function (d) {
          return !d.firstChild || 0 == f.getChildCount(d, function (b) {
            return !f.isBr(b) && !f.isBookmarkNode(b) && !f.isWhitespace(b)
          })
        },
        clearSelectedArr: function (d) {
          for (var b; b =
            d.pop();) f.removeAttributes(b, ["class"])
        },
        scrollToView: function (d, b, c) {
          var a = function () {
            var a = b.document,
              c = "CSS1Compat" == a.compatMode;
            return {
              width: (c ? a.documentElement.clientWidth : a.body.clientWidth) || 0,
              height: (c ? a.documentElement.clientHeight : a.body.clientHeight) || 0
            }
          }().height;
          c = -1 * a + c + (d.offsetHeight || 0);
          d = f.getXY(d);
          c += d.y;
          d = function (a) {
            if ("pageXOffset" in a) return {
              x: a.pageXOffset || 0,
              y: a.pageYOffset || 0
            };
            a = a.document;
            return {
              x: a.documentElement.scrollLeft || a.body.scrollLeft || 0,
              y: a.documentElement.scrollTop || a.body.scrollTop || 0
            }
          }(b).y;
          (c > d || c < d - a) && b.scrollTo(0, c + (0 > c ? -20 : 20))
        },
        isBr: function (d) {
          return 1 == d.nodeType && "BR" == d.tagName
        },
        isFillChar: function (d, b) {
          if (3 != d.nodeType) return !1;
          d = d.nodeValue;
          return b ? (new RegExp("^" + f.fillChar)).test(d) : !d.replace(new RegExp(f.fillChar, "g"), "").length
        },
        isStartInblock: function (d) {
          d = d.cloneRange();
          var b = 0,
            c = d.startContainer;
          if (1 == c.nodeType && c.childNodes[d.startOffset]) {
            c = c.childNodes[d.startOffset];
            for (var a = c.previousSibling; a && f.isFillChar(a);) c = a,
              a = a.previousSibling
          }
          this.isFillChar(c, !0) && 1 == d.startOffset && (d.setStartBefore(c), c = d.startContainer);
          for (; c && f.isFillChar(c);) {
            var g = c;
            c = c.previousSibling
          }
          g && (d.setStartBefore(g), c = d.startContainer);
          for (1 == c.nodeType && f.isEmptyNode(c) && 1 == d.startOffset && d.setStart(c, 0).collapse(!0); !d.startOffset;) {
            c = d.startContainer;
            if (f.isBlockElm(c) || f.isBody(c)) {
              b = 1;
              break
            }
            a = d.startContainer.previousSibling;
            if (a) {
              for (; a && f.isFillChar(a);) {
                var h = a;
                a = a.previousSibling
              }
              h ? d.setStartBefore(h) : d.setStartBefore(d.startContainer)
            } else d.setStartBefore(d.startContainer)
          }
          return b && !f.isBody(d.startContainer) ? 1 : 0
        },
        isEmptyBlock: function (d, b) {
          if (1 != (d && d.nodeType)) return 0;
          b = b || new RegExp("[ \u00a0\t\r\n" + f.fillChar + "]", "g");
          if (0 < d[u.ie ? "innerText" : "textContent"].replace(b, "").length) return 0;
          for (var c in x.$isNotEmpty) if (d.getElementsByTagName(c).length) return 0;
          return 1
        },
        setViewportOffset: function (d, b) {
          var c = parseInt(d.style.left) | 0,
            a = parseInt(d.style.top) | 0,
            g = d.getBoundingClientRect(),
            h = b.left - g.left;
          b = b.top - g.top;
          h && (d.style.left = c + h + "px");
          b && (d.style.top = a + b + "px")
        },
        fillNode: function (d, b) {
          d = u.ie ? d.createTextNode(f.fillChar) : d.createElement("br");
          b.innerHTML = "";
          b.appendChild(d)
        },
        moveChild: function (d, b, c) {
          for (; d.firstChild;) c && b.firstChild ? b.insertBefore(d.lastChild, b.firstChild) : b.appendChild(d.firstChild)
        },
        hasNoAttributes: function (d) {
          return u.ie ? /^<\w+\s*?>/.test(d.outerHTML) : 0 == d.attributes.length
        },
        isCustomeNode: function (d) {
          return 1 == d.nodeType && d.getAttribute("_ue_custom_node_")
        },
        isTagNode: function (d, b) {
          return 1 == d.nodeType && (new RegExp("\\b" + d.tagName + "\\b", "i")).test(b)
        },
        filterNodeList: function (d, b, c) {
          var a = [];
          if (!p.isFunction(b)) {
            var g = b;
            b = function (a) {
              return a && a.tagName ? -1 != p.indexOf(p.isArray(g) ? g : g.split(" "), a.tagName.toLowerCase()) : !1
            }
          }
          p.each(d, function (c) {
            b(c) && a.push(c)
          });
          return 0 == a.length ? null : 1 != a.length && c ? a : a[0]
        },
        isInNodeEndBoundary: function (d, b) {
          var c = d.startContainer;
          if (3 == c.nodeType && d.startOffset != c.nodeValue.length || 1 == c.nodeType && d.startOffset != c.childNodes.length) return 0;
          for (; c !== b;) {
            if (c.nextSibling) return 0;
            c = c.parentNode
          }
          return 1
        },
        isBoundaryNode: function (d, b) {
          for (var c; !f.isBody(d);) if (c =
            d, d = d.parentNode, c !== d[b]) return !1;
          return !0
        },
        fillHtml: u.ie11below ? "&nbsp;" : "<br/>"
      },
      T = new RegExp(f.fillChar, "g");
    (function () {
      function d(a) {
        return !a.collapsed && 1 == a.startContainer.nodeType && a.startContainer === a.endContainer && 1 == a.endOffset - a.startOffset
      }
      function b(a, b, e, c) {
        1 == b.nodeType && (x.$empty[b.tagName] || x.$nonChild[b.tagName]) && (e = f.getNodeIndex(b) + (a ? 0 : 1), b = b.parentNode);
        a ? (c.startContainer = b, c.startOffset = e, c.endContainer || c.collapse(!0)) : (c.endContainer = b, c.endOffset = e, c.startContainer || c.collapse(!1));
        c.collapsed = c.startContainer && c.endContainer && c.startContainer === c.endContainer && c.startOffset == c.endOffset;
        return c
      }
      function c(a, b) {
        var e = a.startContainer,
          c = a.endContainer,
          k = a.startOffset,
          l = a.endOffset,
          g = a.document,
          d = g.createDocumentFragment(),
          m, h;
        1 == e.nodeType && (e = e.childNodes[k] || (m = e.appendChild(g.createTextNode(""))));
        1 == c.nodeType && (c = c.childNodes[l] || (h = c.appendChild(g.createTextNode(""))));
        if (e === c && 3 == e.nodeType) return d.appendChild(g.createTextNode(e.substringData(k, l - k))),
        b && (e.deleteData(k, l - k), a.collapse(!0)),
          d;
        for (var n, p, r = d, u = f.findParents(e, !0), x = f.findParents(c, !0), H = 0; u[H] == x[H];) H++;
        for (var A = H, B; B = u[A]; A++) {
          n = B.nextSibling;
          B == e ? m || (3 == a.startContainer.nodeType ? (r.appendChild(g.createTextNode(e.nodeValue.slice(k))), b && e.deleteData(k, e.nodeValue.length - k)) : r.appendChild(b ? e : e.cloneNode(!0))) : (p = B.cloneNode(!1), r.appendChild(p));
          for (; n && n !== c && n !== x[A];) B = n.nextSibling,
            r.appendChild(b ? n : n.cloneNode(!0)),
            n = B;
          r = p
        }
        r = d;
        u[H] || (r.appendChild(u[H - 1].cloneNode(!1)), r = r.firstChild);
        for (A =
               H; k = x[A]; A++) {
          n = k.previousSibling;
          k == c ? h || 3 != a.endContainer.nodeType || (r.appendChild(g.createTextNode(c.substringData(0, l))), b && c.deleteData(0, l)) : (p = k.cloneNode(!1), r.appendChild(p));
          if (A != H || !u[H]) for (; n && n !== e;) k = n.previousSibling,
            r.insertBefore(b ? n : n.cloneNode(!0), r.firstChild),
            n = k;
          r = p
        }
        b && a.setStartBefore(x[H] ? u[H] ? x[H] : u[H - 1] : x[H - 1]).collapse(!0);
        m && f.remove(m);
        h && f.remove(h);
        return d
      }
      function a(a, b) {
        try {
          if (l && f.inDoc(l, a)) if (l.nodeValue.replace(T, "").length) l.nodeValue = l.nodeValue.replace(T, "");
          else {
            var e = l.parentNode;
            for (f.remove(l); e && f.isEmptyInlineElement(e) && (u.safari ? !(f.getPosition(e, b) & f.POSITION_CONTAINS) : !e.contains(b));) l = e.parentNode,
              f.remove(e),
              e = l
          }
        } catch (t) {}
      }
      function g(a, b) {
        for (a = a[b]; a && f.isFillChar(a);) {
          var e = a[b];
          f.remove(a);
          a = e
        }
      }
      var h = 0,
        e = f.fillChar,
        l, k = D.Range = function (a) {
          this.startContainer = this.startOffset = this.endContainer = this.endOffset = null;
          this.document = a;
          this.collapsed = !0
        };
      k.prototype = {
        cloneContents: function () {
          return this.collapsed ? null : c(this, 0)
        },
        deleteContents: function () {
          this.collapsed || c(this, 1);
          if (u.webkit) {
            var a = this.startContainer;
            3 != a.nodeType || a.nodeValue.length || (this.setStartBefore(a).collapse(!0), f.remove(a))
          }
          return this
        },
        extractContents: function () {
          return this.collapsed ? null : c(this, 2)
        },
        setStart: function (a, e) {
          return b(!0, a, e, this)
        },
        setEnd: function (a, e) {
          return b(!1, a, e, this)
        },
        setStartAfter: function (a) {
          return this.setStart(a.parentNode, f.getNodeIndex(a) + 1)
        },
        setStartBefore: function (a) {
          return this.setStart(a.parentNode, f.getNodeIndex(a))
        },
        setEndAfter: function (a) {
          return this.setEnd(a.parentNode, f.getNodeIndex(a) + 1)
        },
        setEndBefore: function (a) {
          return this.setEnd(a.parentNode, f.getNodeIndex(a))
        },
        setStartAtFirst: function (a) {
          return this.setStart(a, 0)
        },
        setStartAtLast: function (a) {
          return this.setStart(a, 3 == a.nodeType ? a.nodeValue.length : a.childNodes.length)
        },
        setEndAtFirst: function (a) {
          return this.setEnd(a, 0)
        },
        setEndAtLast: function (a) {
          return this.setEnd(a, 3 == a.nodeType ? a.nodeValue.length : a.childNodes.length)
        },
        selectNode: function (a) {
          return this.setStartBefore(a).setEndAfter(a)
        },
        selectNodeContents: function (a) {
          return this.setStart(a, 0).setEndAtLast(a)
        },
        cloneRange: function () {
          return (new k(this.document)).setStart(this.startContainer, this.startOffset).setEnd(this.endContainer, this.endOffset)
        },
        collapse: function (a) {
          a ? (this.endContainer = this.startContainer, this.endOffset = this.startOffset) : (this.startContainer = this.endContainer, this.startOffset = this.endOffset);
          this.collapsed = !0;
          return this
        },
        shrinkBoundary: function (a) {
          function b(a) {
            return 1 == a.nodeType && !f.isBookmarkNode(a) && !x.$empty[a.tagName] && !x.$nonChild[a.tagName]
          }
          for (var e, c =
            this.collapsed; 1 == this.startContainer.nodeType && (e = this.startContainer.childNodes[this.startOffset]) && b(e);) this.setStart(e, 0);
          if (c) return this.collapse(!0);
          if (!a) for (; 1 == this.endContainer.nodeType && 0 < this.endOffset && (e = this.endContainer.childNodes[this.endOffset - 1]) && b(e);) this.setEnd(e, e.childNodes.length);
          return this
        },
        getCommonAncestor: function (a, b) {
          var e = this.startContainer,
            c = this.endContainer;
          return e === c ? a && d(this) && (e = e.childNodes[this.startOffset], 1 == e.nodeType) ? e : b && 3 == e.nodeType ? e.parentNode : e : f.getCommonAncestor(e, c)
        },
        trimBoundary: function (a) {
          this.txtToElmBoundary();
          var b = this.startContainer,
            e = this.startOffset,
            c = this.collapsed,
            k = this.endContainer;
          if (3 == b.nodeType) {
            if (0 == e) this.setStartBefore(b);
            else if (e >= b.nodeValue.length) this.setStartAfter(b);
            else {
              var l = f.split(b, e);
              b === k ? this.setEnd(l, this.endOffset - e) : b.parentNode === k && (this.endOffset += 1);
              this.setStartBefore(l)
            }
            if (c) return this.collapse(!0)
          }
          a || (e = this.endOffset, k = this.endContainer, 3 == k.nodeType && (0 == e ? this.setEndBefore(k) : (e < k.nodeValue.length && f.split(k, e), this.setEndAfter(k))));
          return this
        },
        txtToElmBoundary: function (a) {
          function b(a, b) {
            var e = a[b + "Container"],
              c = a[b + "Offset"];
            if (3 == e.nodeType) if (!c) a["set" + b.replace(/(\w)/, function (a) {
              return a.toUpperCase()
            }) + "Before"](e);
            else if (c >= e.nodeValue.length) a["set" + b.replace(/(\w)/, function (a) {
              return a.toUpperCase()
            }) + "After"](e)
          }
          if (a || !this.collapsed) b(this, "start"),
            b(this, "end");
          return this
        },
        insertNode: function (a) {
          var b = a,
            e = 1;
          11 == a.nodeType && (b = a.firstChild, e = a.childNodes.length);
          this.trimBoundary(!0);
          var c = this.startContainer,
            k = c.childNodes[this.startOffset];
          k ? c.insertBefore(a, k) : c.appendChild(a);
          b.parentNode === this.endContainer && (this.endOffset += e);
          return this.setStartBefore(b)
        },
        setCursor: function (a, b) {
          return this.collapse(!a).select(b)
        },
        createBookmark: function (a, b) {
          var e = this.document.createElement("span");
          e.style.cssText = "display:none;line-height:0px;";
          e.appendChild(this.document.createTextNode("\u200d"));
          e.id = "_baidu_bookmark_start_" + (b ? "" : h++);
          if (!this.collapsed) {
            var c = e.cloneNode(!0);
            c.id = "_baidu_bookmark_end_" + (b ? "" : h++)
          }
          this.insertNode(e);
          c && this.collapse().insertNode(c).setEndBefore(c);
          this.setStartAfter(e);
          return {
            start: a ? e.id : e,
            end: c ? a ? c.id : c : null,
            id: a
          }
        },
        moveToBookmark: function (a) {
          var b = a.id ? this.document.getElementById(a.start) : a.start;
          a = a.end && a.id ? this.document.getElementById(a.end) : a.end;
          this.setStartBefore(b);
          f.remove(b);
          a ? (this.setEndBefore(a), f.remove(a)) : this.collapse(!0);
          return this
        },
        enlarge: function (a, b) {
          var e = f.isBody,
            c = this.document.createTextNode("");
          if (a) {
            var k = this.startContainer;
            1 == k.nodeType ? k.childNodes[this.startOffset] ? a = k = k.childNodes[this.startOffset] : (k.appendChild(c), a = k = c) : a = k;
            for (;;) {
              if (f.isBlockElm(k)) {
                for (k = a;
                     (a = k.previousSibling) && !f.isBlockElm(a);) k = a;
                this.setStartBefore(k);
                break
              }
              a = k;
              k = k.parentNode
            }
            k = this.endContainer;
            1 == k.nodeType ? ((a = k.childNodes[this.endOffset]) ? k.insertBefore(c, a) : k.appendChild(c), a = k = c) : a = k;
            for (;;) {
              if (f.isBlockElm(k)) {
                for (k = a;
                     (a = k.nextSibling) && !f.isBlockElm(a);) k = a;
                this.setEndAfter(k);
                break
              }
              a = k;
              k = k.parentNode
            }
            c.parentNode === this.endContainer && this.endOffset--;
            f.remove(c)
          }
          if (!this.collapsed) {
            for (; !(0 != this.startOffset || b && b(this.startContainer) || e(this.startContainer));) this.setStartBefore(this.startContainer);
            for (; !(this.endOffset != (1 == this.endContainer.nodeType ? this.endContainer.childNodes.length : this.endContainer.nodeValue.length) || b && b(this.endContainer) || e(this.endContainer));) this.setEndAfter(this.endContainer)
          }
          return this
        },
        enlargeToBlockElm: function (a) {
          for (; !f.isBlockElm(this.startContainer);) this.setStartBefore(this.startContainer);
          if (!a) for (; !f.isBlockElm(this.endContainer);) this.setEndAfter(this.endContainer);
          return this
        },
        adjustmentBoundary: function () {
          if (!this.collapsed) {
            for (; !f.isBody(this.startContainer) && this.startOffset == this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length && this.startContainer[3 == this.startContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setStartAfter(this.startContainer);
            for (; !f.isBody(this.endContainer) && !this.endOffset && this.endContainer[3 == this.endContainer.nodeType ? "nodeValue" : "childNodes"].length;) this.setEndBefore(this.endContainer)
          }
          return this
        },
        applyInlineStyle: function (a, b, e) {
          if (this.collapsed) return this;
          this.trimBoundary().enlarge(!1, function (a) {
            return 1 == a.nodeType && f.isBlockElm(a)
          }).adjustmentBoundary();
          for (var c = this.createBookmark(), k = c.end, l = function (a) {
            return 1 == a.nodeType ? "br" != a.tagName.toLowerCase() : !f.isWhitespace(a)
          }, g = f.getNextDomNode(c.start, !1, l), d, h, m = this.cloneRange(); g && f.getPosition(g, k) & f.POSITION_PRECEDING;) if (3 == g.nodeType || x[a][g.tagName]) {
            m.setStartBefore(g);
            for (d = g; d && (3 == d.nodeType || x[a][d.tagName]) && d !== k;) h = d,
              d = f.getNextDomNode(d, 1 == d.nodeType, null, function (b) {
                return x[a][b.tagName]
              });
            g = m.setEndAfter(h).extractContents();
            var n;
            if (e && 0 < e.length) {
              var q = n = e[0].cloneNode(!1);
              for (var r = 1, u; u = e[r++];) n.appendChild(u.cloneNode(!1)),
                n = n.firstChild
            } else n = m.document.createElement(a);
            b && f.setAttributes(n, b);
            n.appendChild(g);
            "SPAN" == n.tagName && b && b.style && p.each(n.getElementsByTagName("span"), function (a) {
              a.style.cssText = a.style.cssText + ";" + b.style
            });
            m.insertNode(e ? q : n);
            var J;
            "span" == a && b.style && /text\-decoration/.test(b.style) && (J = f.findParentByTagName(n, "a", !0)) ? (f.setAttributes(J, b), f.remove(n, !0), n = J) : (f.mergeSibling(n), f.clearEmptySibling(n));
            f.mergeChild(n, b);
            g = f.getNextDomNode(n, !1, l);
            f.mergeToParent(n);
            if (d === k) break
          } else g = f.getNextDomNode(g, !0, l);
          return this.moveToBookmark(c)
        },
        removeInlineStyle: function (a) {
          if (this.collapsed) return this;
          a = p.isArray(a) ? a : [a];
          this.shrinkBoundary().adjustmentBoundary();
          for (var b = this.startContainer, e = this.endContainer;;) {
            if (1 == b.nodeType) {
              if (-1 < p.indexOf(a, b.tagName.toLowerCase())) break;
              if ("body" == b.tagName.toLowerCase()) {
                b = null;
                break
              }
            }
            b = b.parentNode
          }
          for (;;) {
            if (1 == e.nodeType) {
              if (-1 < p.indexOf(a, e.tagName.toLowerCase())) break;
              if ("body" == e.tagName.toLowerCase()) {
                e = null;
                break
              }
            }
            e = e.parentNode
          }
          var c = this.createBookmark();
          if (b) {
            var k = this.cloneRange().setEndBefore(c.start).setStartBefore(b);
            var l = k.extractContents();
            k.insertNode(l);
            f.clearEmptySibling(b, !0);
            b.parentNode.insertBefore(c.start, b)
          }
          e && (k = this.cloneRange().setStartAfter(c.end).setEndAfter(e), l = k.extractContents(), k.insertNode(l), f.clearEmptySibling(e, !1, !0), e.parentNode.insertBefore(c.end, e.nextSibling));
          for (b = f.getNextDomNode(c.start, !1, function (a) {
            return 1 == a.nodeType
          }); b && b !== c.end;) e = f.getNextDomNode(b, !0, function (a) {
            return 1 == a.nodeType
          }),
          -1 < p.indexOf(a, b.tagName.toLowerCase()) && f.remove(b, !0),
            b = e;
          return this.moveToBookmark(c)
        },
        getClosedNode: function () {
          var a;
          if (!this.collapsed) {
            var b = this.cloneRange().adjustmentBoundary().shrinkBoundary();
            d(b) && (b = b.startContainer.childNodes[b.startOffset]) && 1 == b.nodeType && (x.$empty[b.tagName] || x.$nonChild[b.tagName]) && (a = b)
          }
          return a
        },
        select: u.ie ?
          function (b, c) {
            this.collapsed || this.shrinkBoundary();
            var k = this.getClosedNode();
            if (k && !c) {
              try {
                var d = this.document.body.createControlRange();
                d.addElement(k);
                d.select()
              } catch (w) {}
              return this
            }
            c = this.createBookmark();
            k = c.start;
            d = this.document.body.createTextRange();
            d.moveToElementText(k);
            d.moveStart("character", 1);
            if (!this.collapsed) k = this.document.body.createTextRange(),
              b = c.end,
              k.moveToElementText(b),
              d.setEndPoint("EndToEnd", k);
            else if (!b && 3 != this.startContainer.nodeType) {
              b = this.document.createTextNode(e);
              var h = this.document.createElement("span");
              h.appendChild(this.document.createTextNode(e));
              k.parentNode.insertBefore(h, k);
              k.parentNode.insertBefore(b, k);
              a(this.document, b);
              l = b;
              g(h, "previousSibling");
              g(k, "nextSibling");
              d.moveStart("character", -1);
              d.collapse(!0)
            }
            this.moveToBookmark(c);
            h && f.remove(h);
            try {
              d.select()
            } catch (w) {}
            return this
          } : function (b) {
            function c(a) {
              function b(b, e, k) {
                3 == b.nodeType && b.nodeValue.length < e && (a[k + "Offset"] = b.nodeValue.length)
              }
              b(a.startContainer, a.startOffset, "start");
              b(a.endContainer, a.endOffset, "end")
            }
            var k = f.getWindow(this.document),
              d = k.getSelection();
            u.gecko ? this.document.body.focus() : k.focus();
            if (d) {
              d.removeAllRanges();
              this.collapsed && !b && (b = k = this.startContainer, 1 == k.nodeType && (b = k.childNodes[this.startOffset]), 3 == k.nodeType && this.startOffset || (b ? b.previousSibling && 3 == b.previousSibling.nodeType : k.lastChild && 3 == k.lastChild.nodeType) || (b = this.document.createTextNode(e), this.insertNode(b), a(this.document, b), g(b, "previousSibling"), g(b, "nextSibling"), l = b, this.setStart(b, u.webkit ? 1 : 0).collapse(!0)));
              k = this.document.createRange();
              if (this.collapsed && u.opera && 1 == this.startContainer.nodeType) if (b = this.startContainer.childNodes[this.startOffset]) {
                for (; b && f.isBlockElm(b);) if (1 == b.nodeType && b.childNodes[0]) b = b.childNodes[0];
                else break;
                b && this.setStartBefore(b).collapse(!0)
              } else(b = this.startContainer.lastChild) && f.isBr(b) && this.setStartBefore(b).collapse(!0);
              c(this);
              k.setStart(this.startContainer, this.startOffset);
              k.setEnd(this.endContainer, this.endOffset);
              d.addRange(k)
            }
            return this
          },
        scrollToView: function (a, b) {
          a = a || f.getWindow(this.document);
          var e = this.document.createElement("span");
          e.innerHTML = "&nbsp;";
          this.cloneRange().insertNode(e);
          f.scrollToView(e, a, b);
          f.remove(e);
          return this
        },
        inFillChar: function () {
          var a = this.startContainer;
          return this.collapsed && 3 == a.nodeType && a.nodeValue.replace(new RegExp("^" + f.fillChar), "").length + 1 == a.nodeValue.length ? !0 : !1
        },
        createAddress: function (a, b) {
          function e(a) {
            for (var e =
              a ? c.startContainer : c.endContainer, k = f.findParents(e, !0, function (a) {
              return !f.isBody(a)
            }), l = [], g = 0, d; d = k[g++];) l.push(f.getNodeIndex(d, b));
            k = 0;
            if (b) if (3 == e.nodeType) {
              for (e = e.previousSibling; e && 3 == e.nodeType;) k += e.nodeValue.replace(T, "").length,
                e = e.previousSibling;
              k += a ? c.startOffset : c.endOffset
            } else if (e = e.childNodes[a ? c.startOffset : c.endOffset]) k = f.getNodeIndex(e, b);
            else for (e = a ? c.startContainer : c.endContainer, a = e.firstChild; a;) if (f.isFillChar(a)) a = a.nextSibling;
              else if (k++, 3 == a.nodeType) for (; a && 3 == a.nodeType;) a = a.nextSibling;
              else a = a.nextSibling;
            else k = a ? f.isFillChar(e) ? 0 : c.startOffset : c.endOffset;
            0 > k && (k = 0);
            l.push(k);
            return l
          }
          var k = {},
            c = this;
          k.startAddress = e(!0);
          a || (k.endAddress = c.collapsed ? [].concat(k.startAddress) : e());
          return k
        },
        moveToAddress: function (a, b) {
          function e(a, b) {
            for (var e = k.document.body, c, l, g = 0, d, h = a.length; g < h; g++) if (d = a[g], c = e, e = e.childNodes[d], !e) {
              l = d;
              break
            }
            b ? e ? k.setStartBefore(e) : k.setStart(c, l) : e ? k.setEndBefore(e) : k.setEnd(c, l)
          }
          var k = this;
          e(a.startAddress, !0);
          !b && a.endAddress && e(a.endAddress);
          return k
        },
        equals: function (a) {
          for (var b in this) if (this.hasOwnProperty(b) && this[b] !== a[b]) return !1;
          return !0
        },
        traversal: function (a, b) {
          if (this.collapsed) return this;
          for (var e = this.createBookmark(), k = e.end, c = f.getNextDomNode(e.start, !1, b); c && c !== k && f.getPosition(c, k) & f.POSITION_PRECEDING;) {
            var l = f.getNextDomNode(c, !1, b);
            a(c);
            c = l
          }
          return this.moveToBookmark(e)
        }
      }
    })();
    (function () {
      function d(a, b) {
        var c = f.getNodeIndex;
        a = a.duplicate();
        a.collapse(b);
        b = a.parentElement();
        if (!b.hasChildNodes()) return {
          container: b,
          offset: 0
        };
        for (var e = b.children, l, k = a.duplicate(), g = 0, d = e.length - 1, q = -1; g <= d;) {
          q = Math.floor((g + d) / 2);
          l = e[q];
          k.moveToElementText(l);
          var t = k.compareEndPoints("StartToStart", a);
          if (0 < t) d = q - 1;
          else if (0 > t) g = q + 1;
          else return {
              container: b,
              offset: c(l)
            }
        }
        if (-1 == q) {
          k.moveToElementText(b);
          k.setEndPoint("StartToStart", a);
          a = k.text.replace(/(\r\n|\r)/g, "\n").length;
          e = b.childNodes;
          if (!a) return l = e[e.length - 1],
            {
              container: l,
              offset: l.nodeValue.length
            };
          for (c = e.length; 0 < a;) a -= e[--c].nodeValue.length;
          return {
            container: e[c],
            offset: -a
          }
        }
        k.collapse(0 < t);
        k.setEndPoint(0 < t ? "StartToStart" : "EndToStart", a);
        a = k.text.replace(/(\r\n|\r)/g, "\n").length;
        if (!a) return x.$empty[l.tagName] || x.$nonChild[l.tagName] ? {
          container: b,
          offset: c(l) + (0 < t ? 0 : 1)
        } : {
          container: l,
          offset: 0 < t ? 0 : l.childNodes.length
        };
        for (; 0 < a;) try {
          e = l,
            l = l[0 < t ? "previousSibling" : "nextSibling"],
            a -= l.nodeValue.length
        } catch (v) {
          return {
            container: b,
            offset: c(e)
          }
        }
        return {
          container: l,
          offset: 0 < t ? -a : l.nodeValue.length + a
        }
      }
      function b(a, b) {
        if (a.item) b.selectNode(a.item(0));
        else {
          var c = d(a, !0);
          b.setStart(c.container, c.offset);
          0 != a.compareEndPoints("StartToEnd", a) && (c = d(a, !1), b.setEnd(c.container, c.offset))
        }
        return b
      }
      function c(a) {
        try {
          var b = a.getNative().createRange()
        } catch (e) {
          return null
        }
        var c = b.item ? b.item(0) : b.parentElement();
        return (c.ownerDocument || c) === a.document ? b : null
      }(D.Selection = function (a) {
        var b = this;
        b.document = a;
        u.ie9below && (a = f.getWindow(a).frameElement, f.on(a, "beforedeactivate", function () {
          b._bakIERange = b.getIERange()
        }), f.on(a, "activate", function () {
          try {
            !c(b) && b._bakIERange && b._bakIERange.select()
          } catch (h) {}
          b._bakIERange = null
        }));
        a = a = null
      }).prototype = {
        rangeInBody: function (a, b) {
          a = u.ie9below || b ? a.item ? a.item() : a.parentElement() : a.startContainer;
          return a === this.document.body || f.inDoc(a, this.document)
        },
        getNative: function () {
          var a = this.document;
          try {
            return a ? u.ie9below ? a.selection : f.getWindow(a).getSelection() : null
          } catch (g) {
            return null
          }
        },
        getIERange: function () {
          var a = c(this);
          return !a && this._bakIERange ? this._bakIERange : a
        },
        cache: function () {
          this.clear();
          this._cachedRange = this.getRange();
          this._cachedStartElement = this.getStart();
          this._cachedStartElementPath = this.getStartElementPath()
        },
        getStartElementPath: function () {
          if (this._cachedStartElementPath) return this._cachedStartElementPath;
          var a = this.getStart();
          return a ? f.findParents(a, !0, null, !0) : []
        },
        clear: function () {
          this._cachedStartElementPath = this._cachedRange = this._cachedStartElement = null
        },
        isFocus: function () {
          try {
            if (u.ie9below) {
              var a = c(this);
              return !(!a || !this.rangeInBody(a))
            }
            return !!this.getNative().rangeCount
          } catch (g) {
            return !1
          }
        },
        getRange: function () {
          function a(a) {
            for (var b =
              c.document.body.firstChild, e = a.collapsed; b && b.firstChild;) a.setStart(b, 0),
              b = b.firstChild;
            a.startContainer || a.setStart(c.document.body, 0);
            e && a.collapse(!0)
          }
          var c = this;
          if (null != c._cachedRange) return this._cachedRange;
          var d = new r.editor.dom.Range(c.document);
          if (u.ie9below) {
            var e = c.getIERange();
            if (e) try {
              b(e, d)
            } catch (k) {
              a(d)
            } else a(d)
          } else {
            var l = c.getNative();
            if (l && l.rangeCount) e = l.getRangeAt(0),
              l = l.getRangeAt(l.rangeCount - 1),
              d.setStart(e.startContainer, e.startOffset).setEnd(l.endContainer, l.endOffset),
            d.collapsed && f.isBody(d.startContainer) && !d.startOffset && a(d);
            else {
              if (this._bakRange && f.inDoc(this._bakRange.startContainer, this.document)) return this._bakRange;
              a(d)
            }
          }
          return this._bakRange = d
        },
        getStart: function () {
          if (this._cachedStartElement) return this._cachedStartElement;
          var a = u.ie9below ? this.getIERange() : this.getRange(),
            b;
          if (u.ie9below) {
            if (!a) return this.document.body.firstChild;
            if (a.item) return a.item(0);
            var c = a.duplicate();
            0 < c.text.length && c.moveStart("character", 1);
            c.collapse(1);
            c = c.parentElement();
            for (b = a = a.parentElement(); a = a.parentNode;) if (a == c) {
              c = b;
              break
            }
          } else if (a.shrinkBoundary(), c = a.startContainer, 1 == c.nodeType && c.hasChildNodes() && (c = c.childNodes[Math.min(c.childNodes.length - 1, a.startOffset)]), 3 == c.nodeType) return c.parentNode;
          return c
        },
        getText: function () {
          var a;
          return this.isFocus() && (a = this.getNative()) ? (a = u.ie9below ? a.createRange() : a.getRangeAt(0), u.ie9below ? a.text : a.toString()) : ""
        },
        clearRange: function () {
          this.getNative()[u.ie9below ? "empty" : "removeAllRanges"]()
        }
      }
    })();
    (function () {
      function d(a, b) {
        if (b.textarea) if (p.isString(b.textarea)) for (var e = 0, c, l = f.getElementsByTagName(a, "textarea"); c = l[e++];) {
          if (c.id == "ueditor_textarea_" + b.options.textarea) {
            var d = c;
            break
          }
        } else d = b.textarea;
        d || (a.appendChild(d = f.createElement(document, "textarea", {
          name: b.options.textarea,
          id: "ueditor_textarea_" + b.options.textarea,
          style: "display:none"
        })), b.textarea = d);
        !d.getAttribute("name") && d.setAttribute("name", b.options.textarea);
        d.value = b.hasContents() ? b.options.allHtmlEnabled ? b.getAllHtml() : b.getContent(null, null, !0) : ""
      }
      function b(a) {
        for (var b in a) return b
      }
      function c(a) {
        a.langIsReady = !0;
        a.fireEvent("langReady")
      }
      var a = 0,
        audios = [],
        g, h = UE.Editor = function (e) {
          var l = this;
          l.uid = a++;
          Y.call(l);
          l.commands = {};
          l.options = p.extend(p.clone(e || {}), UEDITOR_CONFIG, !0);
          l.shortcutkeys = {};
          l.currentSelection = {};
          l.inputRules = [];
          l.outputRules = [];
          l.current_active_135item = null;
          l.is_paid_user = !1;
          l.setOpt(h.defaultOptions(l));
          l.loadServerConfig();
          p.isEmptyObject(UE.I18N) ? p.loadFile(document, {
            src: l.options.langPath + l.options.lang + "/" + l.options.lang + ".js",
            tag: "script",
            type: "text/javascript",
            defer: "defer"
          }, function () {
            UE.plugin.load(l);
            c(l)
          }) : (l.options.lang = b(UE.I18N), UE.plugin.load(l), c(l));
          UE.instants["ueditorInstant" + l.uid] = l
        };
      h.prototype = {
        registerCommand: function (a, b) {
          this.commands[a] = b
        },
        ready: function (a) {
          a && (this.isReady ? a.apply(this) : this.addListener("ready", a))
        },
        currentActive135Item: function () {
          return this.current_active_135item
        },
        backuprange: function () {
          var a = this.selection.getRange();
          this.currentSelection = {
            startContainer: a.startContainer,
            startOffset: a.startOffset,
            endContainer: a.endContainer,
            endOffset: a.endOffset
          }
        },
        restorerange: function () {
          var a = this.selection;
          a.clearRange();
          var b = this.document.createRange();
          b.setStart(this.currentSelection.startContainer, this.currentSelection.startOffset);
          b.setEnd(this.currentSelection.endContainer, this.currentSelection.endOffset);
          a.getNative().addRange(b);
          a.getRange().select()
        },
        setOpt: function (a, b) {
          var e = {};
          p.isString(a) ? e[a] = b : e = a;
          p.extend(this.options, e, !0)
        },
        getOpt: function (a) {
          return this.options[a]
        },
        destroy: function () {
          this.fireEvent("destroy");
          if(!this.container) return
          var a = this.container.parentNode,
            b = this.textarea;
       
          b ? b.style.display = "" : (b = document.createElement("textarea"), a.parentNode.insertBefore(b, a));
          b.style.width = this.iframe.offsetWidth + "px";
          b.style.height = this.iframe.offsetHeight + "px";
          b.value = this.getContent();
          b.id = this.key;
          a.innerHTML = "";
          f.remove(a);
          a = this.key;
          for (var c in this) this.hasOwnProperty(c) && delete this[c];
          UE.delEditor(a)
        },
        render: function (a) {
          var b = this,
            e = b.options;
          p.isString(a) && (a = document.getElementById(a));
          if (a) {
            var c = function () {
                jQuery(this).attr("src") != h && 3 > v && (jQuery(this).remove(), a.appendChild(d()), v++)
              },
              d = function () {
                var a = f.createElement(document, "iframe", {
                  id: "ueditor_" + b.uid,
                  width: "100%",
                  height: "100%",
                  frameborder: "0",
                  src: h
                });
                f.on(a, "load", c);
                return a
              };
            e.minFrameWidth = e.initialFrameWidth ? e.initialFrameWidth : e.initialFrameWidth = a.offsetWidth;
            e.initialFrameHeight ? e.minFrameHeight = e.initialFrameHeight : e.initialFrameHeight = e.minFrameHeight = a.offsetHeight;
            a.style.width = /%$/.test(e.initialFrameWidth) ? "100%" : e.initialFrameWidth - parseInt(f.getComputedStyle(a, "padding-left")) - parseInt(f.getComputedStyle(a, "padding-right")) + "px";
            a.style.height = /%$/.test(e.initialFrameHeight) ? "100%" : e.initialFrameHeight - parseInt(f.getComputedStyle(a, "padding-top")) - parseInt(f.getComputedStyle(a, "padding-bottom")) + "px";
            a.style.zIndex = e.zIndex;
            var g = (I && 9 > u.version ? "" : "<!DOCTYPE html>") + "<html lang='en'><head><meta name='referrer' content='never'><meta name='viewport' content='width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no'><style type='text/css'>.view{padding:0;word-wrap:break-word;cursor:text;}\nbody{margin:8px;font-family:sans-serif;font-size:16px;}p{margin:5px 0;}</style>" + (e.iframeCssUrl ? "<link rel='stylesheet' type='text/css' href='" + p.unhtml(e.iframeCssUrl) + "'/>" : "") + (e.initialStyle ? "<style id='initial-style'>" + e.initialStyle + "</style>" : "") + "</head><body class='view' ></body><script type='text/javascript' " + (I ? "defer='defer'" : "") + " id='_initialScript'>setTimeout(function(){editor = window.parent.UE.instants['ueditorInstant" + b.uid + "'];editor._setup(document);},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);\x3c/script>" + (e.iframeJsUrl ? "<script type='text/javascript' src='" + p.unhtml(e.iframeJsUrl) + "'>\x3c/script>" : "") + "</html>",
              h = "javascript:void(function(){document.open();" + (e.customDomain && document.domain != location.hostname ? 'document.domain="' + document.domain + '";' : "") + 'document.write("' + g + '");document.close();}())',
              v = 0;
            a.appendChild(d());
            a.style.overflow = "hidden";
            setTimeout(function () {
              /%$/.test(e.initialFrameWidth) && (e.minFrameWidth = e.initialFrameWidth = a.offsetWidth);
              /%$/.test(e.initialFrameHeight) && (e.minFrameHeight =
                e.initialFrameHeight = a.offsetHeight, a.style.height = e.initialFrameHeight + "px")
            })
          }
        },
        _setup: function (a) {
          var b = this,
            e = b.options;
          I ? (a.body.disabled = !0, a.body.contentEditable = !0, a.body.disabled = !1) : a.body.contentEditable = !0;
          a.body.spellcheck = !1;
          b.document = a;
          b.window = a.defaultView || a.parentWindow;
          b.iframe = b.window.frameElement;
          b.body = a.body;
          b.selection = new D.Selection(a);
          var c;
          u.gecko && (c = this.selection.getNative()) && c.removeAllRanges();
          this._initEvents();
          for (var g = this.iframe.parentNode; !f.isBody(g); g =
            g.parentNode) if ("FORM" == g.tagName) {
            b.form = g;
            if (b.options.autoSyncData) f.on(b.window, "blur", function () {
              d(g, b)
            });
            else f.on(g, "submit", function () {
              d(this, b)
            });
            break
          }
          if (e.initialContent) if (e.autoClearinitialContent) {
            var h = b.execCommand;
            b.execCommand = function () {
              b.fireEvent("firstBeforeExecCommand");
              return h.apply(b, arguments)
            };
            this._setDefaultContent(e.initialContent)
          } else this.setContent(e.initialContent, !1, !0);
          f.isEmptyNode(b.body) && (b.body.innerHTML = "<p>" + (u.ie ? "" : "<br/>") + "</p>");
          e.focus && setTimeout(function () {
            b.focus(b.options.focusInEnd);
            !b.options.autoClearinitialContent && b._selectionChange()
          }, 0);
          b.container || (b.container = this.iframe.parentNode);
          e.fullscreen && b.ui && b.ui.setFullScreen(!0);
          try {
            b.document.execCommand("2D-position", !1, !1)
          } catch (t) {}
          try {
            b.document.execCommand("enableInlineTableEditing", !1, !1)
          } catch (t) {}
          try {
            b.document.execCommand("enableObjectResizing", !1, !1)
          } catch (t) {}
          b._bindshortcutKeys();
          b.isReady = 1;
          b.fireEvent("ready");
          e.onready && e.onready.call(b);
          if (!u.ie9below) f.on(b.window, ["blur", "focus"], function (a) {
            if ("blur" == a.type) {
              b._bakRange = b.selection.getRange();
              try {
                b._bakNativeRange = b.selection.getNative().getRangeAt(0),
                  b.selection.getNative().removeAllRanges()
              } catch (v) {
                b._bakNativeRange = null
              }
            } else try {
              b._bakRange && b._bakRange.select()
            } catch (v) {}
          });
          u.gecko && 10902 >= u.version && (b.body.contentEditable = !1, setTimeout(function () {
            b.body.contentEditable = !0
          }, 100), setInterval(function () {
            b.body.style.height = b.iframe.offsetHeight - 20 + "px"
          }, 100));
          !e.isShow && b.setHide();
          e.readonly && b.setDisabled()
        },
        sync: function (a) {
          a = a ? document.getElementById(a) : f.findParent(this.iframe.parentNode, function (a) {
            return "FORM" == a.tagName
          }, !0);
          console.log("sync form");
          a && d(a, this)
        },
        setHeight: function (a, b) {
          a !== parseInt(this.iframe.parentNode.style.height) && (this.iframe.parentNode.style.height = a + "px");
          !b && (this.options.minFrameHeight = this.options.initialFrameHeight = a);
          this.body.style.height = a + "px";
          !b && this.trigger("setHeight")
        },
        addshortcutkey: function (a, b) {
          var e = {};
          b ? e[a] = b : e = a;
          p.extend(this.shortcutkeys, e)
        },
        _bindshortcutKeys: function () {
          var a = this,
            b = this.shortcutkeys;
          a.addListener("keydown", function (e, c) {
            e = c.keyCode || c.which;
            for (var k in b) for (var d = b[k].split(","), g = 0, l; l = d[g++];) {
              l = l.split(":");
              var h = l[0];
              l = l[1];
              if (/^(ctrl)(\+shift)?\+(\d+)$/.test(h.toLowerCase()) || /^(\d+)$/.test(h)) if ("ctrl" == RegExp.$1 && (c.ctrlKey || c.metaKey) && ("" != RegExp.$2 ? c[RegExp.$2.slice(1) + "Key"] : 1) && e == RegExp.$3 || e == RegExp.$1) - 1 != a.queryCommandState(k, l) && a.execCommand(k, l),
                f.preventDefault(c)
            }
          })
        },

        getContent: function (a, b, c, d, g) {
          a && p.isFunction(a) && (b = a, a = "");
          if (b ? !b() : !this.hasContents()) return "";
          this.fireEvent("beforegetcontent");
          b = UE.htmlparser(this.body.innerHTML, d);
          this.filterOutputRule(b);
          this.fireEvent("aftergetcontent", a, b);
          a = b.toHtml(g);
          this.options.stripFont && (g = jQuery("<div>" + a + " </div>"), jQuery(g).find("*").each(function () {
            this.style.fontFamily && (this.style.fontFamily = this.style.fontFamily.replace(/".+?",?/g, ""))
          }));
          return a
        },
        getAllHtml: function () {
          var a = [];
          this.fireEvent("getAllHtml", a);
          if (u.ie && 8 < u.version) {
            var b = "";
            p.each(this.document.styleSheets, function (a) {
              b += a.href ? '<link rel="stylesheet" type="text/css" href="' + a.href + '" />' : "<style>" + a.cssText + "</style>"
            });
            p.each(this.document.getElementsByTagName("script"), function (a) {
              b += a.outerHTML
            })
          }
          return "<html><head>" + (this.options.charset ? '<meta http-equiv="Content-Type" content="text/html; charset=' + this.options.charset + '"/>' : "") + (b || this.document.getElementsByTagName("head")[0].innerHTML) + a.join("\n") + "</head><body " + (I && 9 > u.version ? 'class="view"' : "") + ">" + this.getContent(null, null, !0) + "</body></html>"
        },
        getPlainTxt: function (deleteAnchor) {
          var a = new RegExp(f.fillChar, "g"),
            b = this.body.innerHTML.replace(/[\n\r]/g, "");
          if (deleteAnchor) {
            b = b.replace(/<a.*?>.*?<\/a>/g, '')
          }
          b = b.replace(/<(p|div)[^>]*>(<br\/?>|&nbsp;)<\/\1>/gi, "\n").replace(/<br\/?>/gi, "\n").replace(/<.*?>/g, "").replace(/(\n)?<\/([^>]+)>/g, function (a, b, e) {
            return x.$block[e] ? "\n" : b ? b : ""
          });
          return b.replace(a, "").replace(/\u00a0/g, " ").replace(/&nbsp;/g, " ")
        },
        getContentTxt: function () {
          return this.body[u.ie ? "innerText" : "textContent"].replace(new RegExp(f.fillChar, "g"), "").replace(/\u00a0/g, " ")
        },
        getContentNTxt: function () {
          return this.body.innerText.replace(new RegExp(f.fillChar, "g"), "").replace(/[\r]/g, "\n");
        },
        setContent: function (a, b, c) {
          this.fireEvent("beforesetcontent", a);
          a = UE.htmlparser(a);
          this.filterInputRule(a);
          a = a.toHtml();
          this.body.innerHTML = (b ? this.body.innerHTML : "") + a;
          if ("p" == this.options.enterTag) if (b = this.body.firstChild, !b || 1 == b.nodeType && (x.$cdata[b.tagName] || "DIV" == b.tagName && b.getAttribute("cdata_tag") || f.isCustomeNode(b)) && b === this.body.lastChild) this.body.innerHTML = "<p>" + (u.ie ? "&nbsp;" : "<br/>") + "</p>" + this.body.innerHTML;
          else for (var e = this.document.createElement("p"); b;) {
              for (; b && (3 == b.nodeType || 1 == b.nodeType && x.p[b.tagName] && !x.$cdata[b.tagName]);) a = b.nextSibling,
                e.appendChild(b),
                b = a;
              if (e.firstChild) if (b) b.parentNode.insertBefore(e, b),
                e = this.document.createElement("p");
              else {
                this.body.appendChild(e);
                break
              }
              b = b.nextSibling
            }
          this.fireEvent("aftersetcontent");
          this.fireEvent("contentchange");
          !c && this._selectionChange();
          this._bakRange = this._bakIERange = this._bakNativeRange = null;
          var k;
          u.gecko && (k = this.selection.getNative()) && k.removeAllRanges();
          this.options.autoSyncData && this.form && d(this.form, this)
        },


        pauseOthers: function (e) {
          [].forEach.call(audios, function (i) {
            // 将audios中其他的audio全部暂停
            i !== e.target && i.pause();
          })
        },

        /**
         * 监听audio的play事件，防止多个audio同时播放
         * @returns {Array}
         */
        audioPause: function() {
          let me = this;
          audios = me.iframe.contentWindow.document.querySelectorAll('video,audio') || [];
          [].forEach.call(audios, function (i) {
            !i.hasEventListener && i.addEventListener("play", me.pauseOthers);
            i.hasEventListener = true
          });
        },

        focus: function (a) {
          try {
            var b = this.selection.getRange();
            if (a) {
              var e = this.body.lastChild;
              e && 1 == e.nodeType && !x.$empty[e.tagName] && (f.isEmptyBlock(e) ? b.setStartAtFirst(e) : b.setStartAtLast(e), b.collapse(!0));
              b.setCursor(!0)
            } else!b.collapsed && f.isBody(b.startContainer) && 0 == b.startOffset && (e = this.body.firstChild) && 1 == e.nodeType && !x.$empty[e.tagName] && b.setStartAtFirst(e).collapse(!0),
              b.select(!0);
            this.fireEvent("focus selectionchange")
          } catch (n) {}
        },
        isFocus: function () {
          return this.selection.isFocus()
        },
        blur: function () {
          var a = this.selection.getNative();
          if (a.empty && u.ie) {
            var b = document.body.createTextRange();
            b.moveToElementText(document.body);
            b.collapse(!0);
            b.select();
            a.empty()
          } else a.removeAllRanges()
        },
        _initEvents: function () {
          var a = this,
            b = a.document,
            c = a.window;
          a._proxyDomEvent = p.bind(a._proxyDomEvent, a);
          f.on(b, "click contextmenu mousedown keydown keyup keypress mouseup mouseover mouseout selectstart".split(" "), a._proxyDomEvent);
          f.on(c, ["focus", "blur"], a._proxyDomEvent);
          f.on(a.body, "drop", function (b) {
            u.gecko && b.stopPropagation && b.stopPropagation();
            a.fireEvent("contentchange")
          });
          f.on(b, ["mouseup", "keydown"], function (b) {
            "keydown" == b.type && (b.ctrlKey || b.metaKey || b.shiftKey || b.altKey) || 2 != b.button && a._selectionChange(250, b)
          })
        },
        _proxyDomEvent: function (a) {
          return !1 === this.fireEvent("before" + a.type.replace(/^on/, "").toLowerCase()) || !1 === this.fireEvent(a.type.replace(/^on/, ""), a) ? !1 : this.fireEvent("after" + a.type.replace(/^on/, "").toLowerCase())
        },
        _selectionChange: function (a, b) {
          var e = this,
            c = !1;
          if (u.ie && 9 > u.version && b && "mouseup" == b.type && !this.selection.getRange().collapsed) {
            c = !0;
            var d = b.clientX;
            var l = b.clientY
          }
          clearTimeout(g);
          g = setTimeout(function () {
            if (e.selection && e.selection.getNative()) {
              if (c && "None" == e.selection.getNative().type) {
                var a = e.document.body.createTextRange();
                try {
                  a.moveToPoint(d, l)
                } catch (w) {
                  a = null
                }
              }
              if (a) {
                var k = e.selection.getIERange;
                e.selection.getIERange = function () {
                  return a
                }
              }
              e.selection.cache();
              k && (e.selection.getIERange = k);
              e.selection._cachedRange && e.selection._cachedStartElement && (e.fireEvent("beforeselectionchange"), e.fireEvent("selectionchange", !! b), e.fireEvent("afterselectionchange"), e.selection.clear())
            }
          }, a || 50)
        },
        _callCmdFn: function (a, b) {
          var e =
            b[0].toLowerCase();
          var c = (e = this.commands[e] || UE.commands[e]) && e[a];
          if (!(e && c || "queryCommandState" != a)) return 0;
          if (c) return c.apply(this, b)
        },
        execCommand: function (a) {
          a = a.toLowerCase();
          var b = this.commands[a] || UE.commands[a];
          if (!b || !b.execCommand) return null;
          if (b.notNeedUndo || this.__hasEnterExecCommand) {
            var e = this._callCmdFn("execCommand", arguments);
            this.__hasEnterExecCommand || b.ignoreContentChange || this._ignoreContentChange || this.fireEvent("contentchange")
          } else this.__hasEnterExecCommand = !0,
          -1 != this.queryCommandState.apply(this, arguments) && (this.fireEvent("saveScene"), this.fireEvent.apply(this, ["beforeexeccommand", a].concat(arguments)), e = this._callCmdFn("execCommand", arguments), this.fireEvent.apply(this, ["afterexeccommand", a].concat(arguments)), this.fireEvent("saveScene")),
            this.__hasEnterExecCommand = !1;
          this.__hasEnterExecCommand || b.ignoreContentChange || this._ignoreContentChange || this._selectionChange();
          return e
        },
        queryCommandState: function (a) {
          return this._callCmdFn("queryCommandState", arguments)
        },
        queryCommandValue: function (a) {
          return this._callCmdFn("queryCommandValue", arguments)
        },
        hasContents: function (a) {
          if (a) for (var b = 0, e; e = a[b++];) if (0 < this.document.getElementsByTagName(e).length) return !0;
          if (!f.isEmptyBlock(this.body)) return !0;
          if ("<p><br></p>" == this.body.innerHTML || '<section data-role="paragraph" class="_135editor"><p><br/></p></section>' == this.body.innerHTML || "<p><br/></p>" == this.body.innerHTML) return !1;
          if (0 < this.document.getElementsByTagName("img").length ||
            0 < this.document.getElementsByTagName("video").length ||
            0 < this.document.getElementsByTagName("audio").length ||
            0 < this.document.getElementsByTagName("section").length) return !0;
          a = ["div"];
          for (b = 0; e = a[b++];) {
            e = f.getElementsByTagName(this.document, e);
            for (var c = 0, d; d = e[c++];) if (f.isCustomeNode(d)) return !0
          }
          return !1
        },
        reset: function () {
          this.fireEvent("reset")
        },
        setEnabled: function () {
          if ("false" == this.body.contentEditable) {
            this.body.contentEditable = !0;
            var a = this.selection.getRange();
            try {
              a.moveToBookmark(this.lastBk),
                delete this.lastBk
            } catch (l) {
              a.setStartAtFirst(this.body).collapse(!0)
            }
            a.select(!0);
            this.bkqueryCommandState && (this.queryCommandState = this.bkqueryCommandState, delete this.bkqueryCommandState);
            this.bkqueryCommandValue && (this.queryCommandValue =
              this.bkqueryCommandValue, delete this.bkqueryCommandValue);
            this.fireEvent("selectionchange")
          }
        },
        enable: function () {
          return this.setEnabled()
        },
        setDisabled: function (a) {
          var b = this;
          a = a ? p.isArray(a) ? a : [a] : [];
          "true" == b.body.contentEditable && (b.lastBk || (b.lastBk = b.selection.getRange().createBookmark(!0)), b.body.contentEditable = !1, b.bkqueryCommandState = b.queryCommandState, b.bkqueryCommandValue = b.queryCommandValue, b.queryCommandState = function (e) {
            return -1 != p.indexOf(a, e) ? b.bkqueryCommandState.apply(b, arguments) : -1
          }, b.queryCommandValue = function (e) {
            return -1 != p.indexOf(a, e) ? b.bkqueryCommandValue.apply(b, arguments) : null
          }, b.fireEvent("selectionchange"))
        },
        disable: function (a) {
          return this.setDisabled(a)
        },
        _setDefaultContent: function () {
          function a() {
            var b = this;
            b.document.getElementById("initContent") && (b.body.innerHTML = '<section class="135editor"><p>' + (I ? "" : "<br/>") + "</p></section>", b.removeListener("firstBeforeExecCommand focus", a), setTimeout(function () {
              b.focus();
              b._selectionChange()
            }, 0))
          }
          return function (b) {
            this.body.innerHTML = '<p id="initContent">' + b + "</p>";
            this.addListener("firstBeforeExecCommand focus", a)
          }
        }(),
        setShow: function () {
          var a = this.selection.getRange();
          if ("none" == this.container.style.display) {
            try {
              a.moveToBookmark(this.lastBk),
                delete this.lastBk
            } catch (l) {
              a.setStartAtFirst(this.body).collapse(!0)
            }
            setTimeout(function () {
              a.select(!0)
            }, 100);
            this.container.style.display = ""
          }
        },
        show: function () {
          return this.setShow()
        },
        setHide: function () {
          this.lastBk || (this.lastBk = this.selection.getRange().createBookmark(!0));
          this.container.style.display = "none"
        },
        hide: function () {
          return this.setHide()
        },
        getLang: function (a) {
          var b = window.UE.I18N[this.options.lang];
          if (!b) throw Error("not import language file");
          a = (a || "").split(".");
          for (var e = 0, c;
               (c = a[e++]) && (b = b[c], b););
          return b
        },
        getContentLength: function (a, b) {
          // if (a) {
          //   b = (b || []).concat(['hr', 'img', 'iframe', 'video', 'audio', 'p', 'span']);

          a = this.getContentTxt().replace(/[\t\r\n\s]+/g, "");
          //   for (var e = 0, c; c = b[e++];) a += this.document.getElementsByTagName(c).length
          // } else a = this.getContent(!1, !1, !0).length;
          // return a
          if(a && b ) {
            return a.replace(b, '').length
          } else {
            return a.length;
          }
          
        },
        getTagLength: function (a) {
          var b =
            0;
          a = this.document.getElementsByTagName(a);
          for (var e = 0; e < a.length; e++) f.hasClass(a[e], "assistant") || b++;
          return b
        },
        addInputRule: function (a) {
          this.inputRules.push(a)
        },
        filterInputRule: function (a) {
          // TODO FIXED
          // for (var b = 0, e; e = this.inputRules[b++];) e.call(this, a)
        },
        addOutputRule: function (a) {
          this.outputRules.push(a)
        },
        filterOutputRule: function (a) {
          // TODO FIXED
          // for (var b = 0, e; e = this.outputRules[b++];) e.call(this, a)
        },
        getActionUrl: function (a) {
          a = this.getOpt(a) || a;
          var b = this.getOpt("imageUrl"),
            e = this.getOpt("serverUrl");
          !e && b && (e = b.replace(/^(.*[\/]).+([\.].+)$/, "$1controller$2"));
          return e ? (e = e + (-1 == e.indexOf("?") ? "?" : "&") + "action=" + (a || ""), p.formatUrl(e)) : ""
        }
      };
      p.inherits(h, Y)
    })();
    UE.Editor.defaultOptions = function (d) {
      d = d.options.UEDITOR_HOME_URL;
      return {
        isShow: !0,
        initialContent: "",
        initialStyle: "",
        autoClearinitialContent: !1,
        iframeCssUrl: "/static/ueditor135/themes/iframe.css" + versionStr,
        textarea: "editorValue",
        focus: !1,
        focusInEnd: !0,
        autoClearEmptyNode: !0,
        fullscreen: !1,
        readonly: !1,
        zIndex: 999,
        imagePopup: !0,
        enterTag: "p",
        customDomain: !1,
        lang: "zh-cn",
        langPath: d + "lang/",
        theme: "default",
        themePath: d + "themes/",
        allHtmlEnabled: !1,
        scaleEnabled: !1,
        tableNativeEditInFF: !1,
        autoSyncData: !0,
        fileNameFormat: "{time}{rand:6}"
      }
    };
    (function () {
      UE.Editor.prototype.loadServerConfig = function () {
        function d(b) {
          console && console.error(b)
        }
        var b = this;
        setTimeout(function () {
          try {
            b.options.imageUrl && b.setOpt("serverUrl", b.options.imageUrl.replace(/^(.*[\/]).+([\.].+)$/, "$1controller$2"));
            var c = b.getOpt("configUrl") ? b.getOpt("configUrl") : b.getActionUrl("config"),
              a = p.isCrossDomainUrl(c);
            b._serverConfigLoaded = !1;
            c && UE.ajax.request(c, {
              method: "GET",
              dataType: a ? "jsonp" : "",
              onsuccess: function (c) {
                try {
                  var g = a ? c : eval("(" + c.responseText + ")");
                  p.extend(b.options, g);
                  b.fireEvent("serverConfigLoaded");
                  b._serverConfigLoaded = !0
                } catch (e) {
                  d(b.getLang("loadconfigFormatError"))
                }
              },
              onerror: function () {
                d(b.getLang("loadconfigHttpError"))
              }
            })
          } catch (g) {
            d(b.getLang("loadconfigError"))
          }
        })
      };
      UE.Editor.prototype.isServerConfigLoaded = function () {
        return this._serverConfigLoaded || !1
      };
      UE.Editor.prototype.afterConfigReady = function (d) {
        if (d && p.isFunction(d)) {
          var b =
              this,
            c = function () {
              d.apply(b, arguments);
              b.removeListener("serverConfigLoaded", c)
            };
          b.isServerConfigLoaded() ? d.call(b, "serverConfigLoaded") : b.addListener("serverConfigLoaded", c)
        }
      }
    })();
    UE.ajax = function () {
      function d(a) {
        var b = [],
          c;
        for (c in a) if ("method" != c && "timeout" != c && "async" != c && "dataType" != c && "callback" != c && void 0 != a[c] && null != a[c]) if ("function" != (typeof a[c]).toLowerCase() && "object" != (typeof a[c]).toLowerCase()) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        else if (p.isArray(a[c])) for (var k =
          0; k < a[c].length; k++) b.push(encodeURIComponent(c) + "[]=" + encodeURIComponent(a[c][k]));
        return b.join("&")
      }
      function b(a, b) {
        var c = g(),
          e = !1,
          h = {
            method: "POST",
            timeout: 5E3,
            async: !0,
            data: {},
            onsuccess: function () {},
            onerror: function () {}
          };
        "object" === typeof a && (b = a, a = b.url);
        if (c && a) {
          var m = b ? p.extend(h, b) : h;
          b = d(m);
          p.isEmptyObject(m.data) || (b += (b ? "&" : "") + d(m.data));
          var f = setTimeout(function () {
            4 != c.readyState && (e = !0, c.abort(), clearTimeout(f))
          }, m.timeout);
          h = m.method.toUpperCase();
          a = a + (-1 == a.indexOf("?") ? "?" : "&") + ("POST" == h ? "" : b + "&noCache=" + +new Date);
          c.open(h, a, m.async);
          c.onreadystatechange = function () {
            if (4 == c.readyState) if (e || 200 != c.status) m.onerror(c);
            else m.onsuccess(c)
          };
          "POST" == h ? (c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), c.send(b)) : c.send(null)
        }
      }
      function c(a, b) {
        function c(a) {
          return function () {
            try {
              if (a) h.onerror && h.onerror();
              else try {
                clearTimeout(w),
                  e.apply(window, arguments)
              } catch (S) {}
            } catch (S) {
              h.onerror && h.onerror.call(window, S)
            } finally {
              h.oncomplete && h.oncomplete.apply(window, arguments);
              g.parentNode && g.parentNode.removeChild(g);
              window[F] = null;
              try {
                delete window[F]
              } catch (S) {}
            }
          }
        }
        var e = b.onsuccess ||
          function () {},
          g = document.createElement("SCRIPT"),
          h = b || {},
          f = h.charset,
          t = h.jsonp || "callback",
          v = h.timeOut || 0,
          w, y = new RegExp("(\\?|&)" + t + "=([^&]*)"),
          K;
        if (p.isFunction(e)) {
          var F = "bd__editor__" + Math.floor(2147483648 * Math.random()).toString(36);
          window[F] = c(0)
        } else if (p.isString(e)) F = e;
        else if (K = y.exec(a)) F = K[2];
        a = a.replace(y, "$1" + t + "=" + F);
        0 > a.search(y) && (a += (0 > a.indexOf("?") ? "?" : "&") + t + "=" + F);
        t = d(b);
        p.isEmptyObject(b.data) || (t += (t ? "&" : "") + d(b.data));
        t && (a = a.replace(/\?/, "?" + t + "&"));
        g.onerror = c(1);
        v && (w = setTimeout(c(1), v));
        (function (a, b, c) {
          a.setAttribute("type", "text/javascript");
          a.setAttribute("defer", "defer");
          c && a.setAttribute("charset", c);
          a.setAttribute("src", b);
          document.getElementsByTagName("head")[0].appendChild(a)
        })(g, a, f)
      }
      var a = "XMLHttpRequest()";
      try {
        new ActiveXObject("Msxml2.XMLHTTP"),
          a = "ActiveXObject('Msxml2.XMLHTTP')"
      } catch (h) {
        try {
          new ActiveXObject("Microsoft.XMLHTTP"),
            a = "ActiveXObject('Microsoft.XMLHTTP')"
        } catch (e) {}
      }
      var g =
        new Function("return new " + a);
      return {
        request: function (a, e) {
          e && "jsonp" == e.dataType ? c(a, e) : b(a, e)
        },
        getJSONP: function (a, b, d) {
          c(a, {
            data: b,
            oncomplete: d
          })
        }
      }
    }();
    UE.filterWord = function () {
      function d(b) {
        return b = b.replace(/[\d.]+\w+/g, function (a) {
          return p.transUnitToPx(a)
        })
      }
      function b(b) {
        return b.replace(/[\t\r\n]+/g, " ").replace(/\x3c!--[\s\S]*?--\x3e/ig, "").replace(/<v:shape [^>]*>[\s\S]*?.<\/v:shape>/gi, function (a) {
          if (u.opera) return "";
          try {
            if (/Bitmap/i.test(a)) return "";
            var b = a.match(/width:([ \d.]*p[tx])/i)[1],
              c = a.match(/height:([ \d.]*p[tx])/i)[1],
              e = a.match(/src=\s*"([^"]*)"/i)[1];
            return '<img width="' + d(b) + '" height="' + d(c) + '" src="' + e + '" />'
          } catch (l) {
            return ""
          }
        }).replace(/<\/?div[^>]*>/g, "").replace(/v:\w+=(["']?)[^'"]+\1/g, "").replace(/<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|xml|meta|link|style|\w+:\w+)(?=[\s\/>]))[^>]*>/gi, "").replace(/<p [^>]*class="?MsoHeading"?[^>]*>(.*?)<\/p>/gi, "<p><strong>$1</strong></p>").replace(/\s+(class|lang|align)\s*=\s*(['"]?)([\w-]+)\2/ig, function (a, b, c, e) {
          return "class" == b && "MsoListParagraph" == e ? a : ""
        }).replace(/<(font|span)[^>]*>(\s*)<\/\1>/gi, function (a, b, c) {
          return c.replace(/[\t\r\n ]+/g, " ")
        }).replace(/(<[a-z][^>]*)\sstyle=(["'])([^\2]*?)\2/gi, function (a, b, c, e) {
          a = [];
          e = e.replace(/^\s+|\s+$/, "").replace(/&#39;/g, "'").replace(/&quot;/gi, "'").replace(/[\d.]+(cm|pt)/g, function (a) {
            return p.transUnitToPx(a)
          }).split(/;\s*/g);
          c = 0;
          for (var g; g = e[c]; c++) {
            var k = g.split(":");
            if (2 == k.length) {
              g = k[0].toLowerCase();
              var h = k[1].toLowerCase();
              if (!(/^(background)\w*/.test(g) && 0 == h.replace(/(initial|\s)/g, "").length || /^(margin)\w*/.test(g) && /^0\w+$/.test(h))) {
                switch (g) {
                  case "mso-padding-alt":
                  case "mso-padding-top-alt":
                  case "mso-padding-right-alt":
                  case "mso-padding-bottom-alt":
                  case "mso-padding-left-alt":
                  case "mso-margin-alt":
                  case "mso-margin-top-alt":
                  case "mso-margin-right-alt":
                  case "mso-margin-bottom-alt":
                  case "mso-margin-left-alt":
                  case "mso-height":
                  case "mso-width":
                  case "mso-vertical-align-alt":
                    /<table/.test(b) || (a[c] = g.replace(/^mso-|-alt$/g, "") + ":" + d(h));
                    continue;
                  case "horiz-align":
                    a[c] = "text-align:" + h;
                    continue;
                  case "vert-align":
                    a[c] = "vertical-align:" + h;
                    continue;
                  case "font-color":
                  case "mso-foreground":
                    a[c] = "color:" + h;
                    continue;
                  case "mso-background":
                  case "mso-highlight":
                    a[c] = "background:" + h;
                    continue;
                  case "mso-default-height":
                    a[c] = "min-height:" + d(h);
                    continue;
                  case "mso-default-width":
                    a[c] = "min-width:" + d(h);
                    continue;
                  case "mso-padding-between-alt":
                    a[c] = "border-collapse:separate;border-spacing:" + d(h);
                    continue;
                  case "text-line-through":
                    if ("single" == h || "double" == h) a[c] = "text-decoration:line-through";
                    continue;
                  case "mso-zero-height":
                    "yes" == h && (a[c] = "display:none");
                    continue;
                  case "margin":
                    if (!/[1-9]/.test(h)) continue
                }
                /^(mso|column|font-emph|lang|layout|line-break|list-image|nav|panose|punct|row|ruby|sep|size|src|tab-|table-border|text-(?:decor|trans)|top-bar|version|vnd|word-break)/.test(g) || /text\-indent|padding|margin/.test(g) && /\-[\d.]+/.test(h) || (a[c] = g + ":" + k[1])
              }
            }
          }
          return b + (a.length ? ' style="' + a.join(";").replace(/;{2,}/g, ";") + '"' : "")
        })
      }
      return function (c) {
        return /(class="?Mso|style="[^"]*\bmso\-|w:WordDocument|<(v|o):|lang=)/ig.test(c) ? b(c) : c
      }
    }();
    (function () {
      function d(a, b, c) {
        a.push("\n");
        return b + (c ? 1 : -1)
      }
      function b(a, b) {
        for (var c = 0; c < b; c++) a.push("    ")
      }
      function c(e, k, g, h) {
        switch (e.type) {
          case "root":
            for (var l = 0, m; m = e.children[l++];) g && "element" == m.type && !x.$inlineWithA[m.tagName] && 1 < l && (d(k, h, !0), b(k, h)),
              c(m, k, g, h);
            break;
          case "text":
            "pre" == e.parentNode.tagName ? k.push(e.data) : k.push(f[e.parentNode.tagName] ? p.html(e.data) : e.data.replace(/[ ]{2}/g, " &nbsp;"));
            break;
          case "element":
            a(e, k, g, h);
            break;
          case "comment":
            k.push("\x3c!--" + e.data + "--\x3e")
        }
        return k
      }
      function a(a, e, g, h) {
        var l = "";
        if (a.attrs) {
          l = [];
          var m = a.attrs,
            f;
          for (f in m) l.push(f + (void 0 !== m[f] ? '="' + (k[f] ? p.html(m[f]).replace(/["]/g, function (a) {
            return "&quot;"
          }) : p.unhtml(m[f])) + '"' : ""));
          l = l.join(" ")
        }
        e.push("<" + a.tagName + (l ? " " + l : "") + (x.$empty[a.tagName] ? "/" : "") + ">");
        g && !x.$inlineWithA[a.tagName] && "pre" != a.tagName && a.children && a.children.length && (h = d(e, h, !0), b(e, h));
        if (a.children && a.children.length) for (l = 0; m = a.children[l++];) g && "element" == m.type && !x.$inlineWithA[m.tagName] && 1 < l && (d(e, h), b(e, h)),
          c(m, e, g, h);
        x.$empty[a.tagName] || (g && !x.$inlineWithA[a.tagName] && "pre" != a.tagName && a.children && a.children.length && (h = d(e, h), b(e, h)), e.push("</" + a.tagName + ">"))
      }
      function g(a, b) {
        var c;
        if ("element" == a.type && a.getAttr("id") == b) return a;
        if (a.children && a.children.length) for (var e = 0; c = a.children[e++];) if (c = g(c, b)) return c
      }
      function h(a, b, c) {
        "element" == a.type && a.tagName == b && c.push(a);
        if (a.children && a.children.length) for (var e = 0, k; k = a.children[e++];) h(k, b, c)
      }
      function e(a, b) {
        if (a.children && a.children.length) for (var c = 0, k; k = a.children[c];) e(k, b),
        k.parentNode && (k.children && k.children.length && b(k), k.parentNode && c++);
        else b(a)
      }
      var l = UE.uNode = function (a) {
          this.type = a.type;
          this.data = a.data;
          this.tagName = a.tagName;
          this.parentNode = a.parentNode;
          this.attrs = a.attrs || {};
          this.children = a.children
        },
        k = {
          href: 1,
          src: 1,
          _src: 1,
          _href: 1,
          cdata_data: 1
        },
        f = {
          style: 1,
          script: 1
        };
      l.createElement = function (a) {
        return /[<>]/.test(a) ? UE.htmlparser(a).children[0] : new l({
          type: "element",
          children: [],
          tagName: a
        })
      };
      l.createText =

        function (a, b) {
          return new UE.uNode({
            type: "text",
            data: b ? a : p.unhtml(a || "")
          })
        };
      l.prototype = {
        toHtml: function (a) {
          var b = [];
          c(this, b, a, 0);
          return b.join("")
        },
        innerHTML: function (a) {
          if ("element" != this.type || x.$empty[this.tagName]) return this;
          if (p.isString(a)) {
            if (this.children) for (var b = 0, c; c = this.children[b++];) c.parentNode = null;
            this.children = [];
            a = UE.htmlparser(a);
            for (b = 0; c = a.children[b++];) this.children.push(c),
              c.parentNode = this;
            return this
          }
          a = new UE.uNode({
            type: "root",
            children: this.children
          });
          return a.toHtml()
        },
        innerText: function (a, b) {
          if ("element" != this.type || x.$empty[this.tagName]) return this;
          if (a) {
            if (this.children) for (var c = 0, e; e = this.children[c++];) e.parentNode = null;
            this.children = [];
            this.appendChild(l.createText(a, b));
            return this
          }
          return this.toHtml().replace(/<[^>]+>/g, "")
        },
        getData: function () {
          return "element" == this.type ? "" : this.data
        },
        firstChild: function () {
          return this.children ? this.children[0] : null
        },
        lastChild: function () {
          return this.children ? this.children[this.children.length - 1] : null
        },
        previousSibling: function () {
          for (var a =
            this.parentNode, b = 0, c; c = a.children[b]; b++) if (c === this) return 0 == b ? null : a.children[b - 1]
        },
        nextSibling: function () {
          for (var a = this.parentNode, b = 0, c; c = a.children[b++];) if (c === this) return a.children[b]
        },
        replaceChild: function (a, b) {
          if (this.children) {
            a.parentNode && a.parentNode.removeChild(a);
            for (var c = 0, e; e = this.children[c]; c++) if (e === b) return this.children.splice(c, 1, a),
              b.parentNode = null,
              a.parentNode = this,
              a
          }
        },
        appendChild: function (a) {
          if ("root" == this.type || "element" == this.type && !x.$empty[this.tagName]) {
            this.children || (this.children = []);
            a.parentNode && a.parentNode.removeChild(a);
            for (var b = 0, c; c = this.children[b]; b++) if (c === a) {
              this.children.splice(b, 1);
              break
            }
            this.children.push(a);
            a.parentNode = this;
            return a
          }
        },
        insertBefore: function (a, b) {
          if (this.children) {
            a.parentNode && a.parentNode.removeChild(a);
            for (var c = 0, e; e = this.children[c]; c++) if (e === b) return this.children.splice(c, 0, a),
              a.parentNode = this,
              a
          }
        },
        insertAfter: function (a, b) {
          if (this.children) {
            a.parentNode && a.parentNode.removeChild(a);
            for (var c = 0, e; e = this.children[c]; c++) if (e === b) return this.children.splice(c + 1, 0, a),
              a.parentNode = this,
              a
          }
        },
        removeChild: function (a, b) {
          if (this.children) for (var c = 0, e; e = this.children[c]; c++) if (e === a) {
            this.children.splice(c, 1);
            e.parentNode = null;
            if (b && e.children && e.children.length) for (a = 0; b = e.children[a]; a++) this.children.splice(c + a, 0, b),
              b.parentNode = this;
            return e
          }
        },
        getAttr: function (a) {
          return this.attrs && this.attrs[a.toLowerCase()]
        },
        setAttr: function (a, b) {
          if (a) if (this.attrs || (this.attrs = {}), p.isObject(a)) for (var c in a) a[c] ? this.attrs[c.toLowerCase()] = a[c] : delete this.attrs[c];
          else b ? this.attrs[a.toLowerCase()] = b : delete this.attrs[a];
          else delete this.attrs
        },
        getIndex: function () {
          for (var a = this.parentNode, b = 0, c; c = a.children[b]; b++) if (c === this) return b;
          return -1
        },
        getNodeById: function (a) {
          var b;
          if (this.children && this.children.length) for (var c = 0; b = this.children[c++];) if (b = g(b, a)) return b
        },
        getNodesByTagName: function (a) {
          a = p.trim(a).replace(/[ ]{2,}/g, " ").split(" ");
          var b = [],
            c = this;
          p.each(a, function (a) {
            if (c.children && c.children.length) for (var e = 0, k; k = c.children[e++];) h(k, a, b)
          });
          return b
        },
        getStyle: function (a) {
          var b = this.getAttr("style");
          return b ? (a = b.match(new RegExp("(^|;)\\s*" + a + ":([^;]+)", "i"))) && a[0] ? a[2] : "" : ""
        },
        setStyle: function (a, b) {
          function c(a, b) {
            e = e.replace(new RegExp("(^|;)\\s*" + a + ":([^;]+;?)", "gi"), "$1");
            b && (e = a + ":" + p.unhtml(b) + ";" + e)
          }
          var e = this.getAttr("style");
          e || (e = "");
          if (p.isObject(a)) for (var k in a) c(k, a[k]);
          else c(a, b);
          this.setAttr("style", p.trim(e))
        },
        traversal: function (a) {
          this.children && this.children.length && e(this, a);
          return this
        }
      }
    })();
    UE.htmlparser =

      function (d, b) {
        function c(a, b) {
          if (m[a.tagName]) {
            var c = k.createElement(m[a.tagName]);
            a.appendChild(c);
            c.appendChild(k.createText(b))
          } else a.appendChild(k.createText(b))
        }
        function a(b, c, e) {
          var d;
          if (d = n[c]) {
            for (var g = b, f;
                 "root" != g.type;) {
              if (p.isArray(d) ? -1 != p.indexOf(d, g.tagName) : d == g.tagName) {
                b = g;
                f = !0;
                break
              }
              g = g.parentNode
            }
            f || (b = a(b, p.isArray(d) ? d[0] : d))
          }
          d = new k({
            parentNode: b,
            type: "element",
            tagName: c.toLowerCase(),
            children: x.$empty[c] ? null : []
          });
          if (e) {
            for (g = {}; f = h.exec(e);) g[f[1].toLowerCase()] = l[f[1].toLowerCase()] ? f[2] || f[3] || f[4] : p.unhtml(f[2] || f[3] || f[4]);
            g.style && (g.style = g.style.replace(/&#39;/g, "&quot;").replace(/'/g, "&quot;").replace(/\\"/g, "&quot;"));
            d.attrs = g
          }
          b.children.push(d);
          return x.$svg[c] ? /.*\//g.test(e) ? b : d : x.$empty[c] ? b : d
        }
        var g = /<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\x3e)|(?:([^\s\/<>]+)\s*((?:(?:"[^"]*")|(?:'[^']*')|[^"'<>])*)\/?>))/g,
          h = /([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,
          e = {
            b: 1,
            code: 1,
            i: 1,
            u: 1,
            strike: 1,
            s: 1,
            tt: 1,
            strong: 1,
            q: 1,
            samp: 1,
            em: 1,
            span: 1,
            sub: 1,
            img: 1,
            sup: 1,
            font: 1,
            big: 1,
            small: 1,
            iframe: 1,
            a: 1,
            br: 1,
            pre: 1
          };
        d = d.replace(new RegExp(f.fillChar, "g"), "");
        b || (d = d.replace(new RegExp("[\\r\\t\\n" + (b ? "" : " ") + "]*</?(\\w+)\\s*(?:[^>]*)>[\\r\\t\\n" + (b ? "" : " ") + "]*", "g"), function (a, c) {
          return c && e[c.toLowerCase()] ? a.replace(/(^[\n\r]+)|([\n\r]+$)/g, "") : a.replace(new RegExp("^[\\r\\n" + (b ? "" : " ") + "]+"), "").replace(new RegExp("[\\r\\n" + (b ? "" : " ") + "]+$"), "")
        }));
        for (var l = {
          href: 1,
          src: 1
        }, k = UE.uNode, n = {
          td: "tr",
          tr: ["tbody", "thead", "tfoot"],
          tbody: "table",
          th: "tr",
          thead: "table",
          tfoot: "table",
          caption: "table",
          li: ["ul", "ol"],
          dt: "dl",
          dd: "dl",
          option: "select"
        }, m = {
          ol: "li",
          ul: "li"
        }, q, t = 0, v = 0, w = new k({
          type: "root",
          children: []
        }), y = w; q = g.exec(d);) {
          t = q.index;
          try {
            if (t > v && c(y, d.slice(v, t)), q[3]) x.$cdata[y.tagName] ? c(y, q[0]) : y = a(y, q[3].toLowerCase(), q[4]);
            else if (q[1]) {
              if ("root" != y.type) if (x.$cdata[y.tagName] && !x.$cdata[q[1]]) c(y, q[0]);
              else {
                for (t = y;
                     "element" == y.type && y.tagName != q[1].toLowerCase();) if (y = y.parentNode, "root" == y.type) throw y = t,
                  "break";
                y = y.parentNode
              }
            } else q[2] && y.children.push(new k({
              type: "comment",
              data: q[2],
              parentNode: y
            }))
          } catch (K) {}
          v = g.lastIndex
        }
        v < d.length && c(y, d.slice(v));
        return w
      };
    UE.filterNode = function () {
      function d(b, c) {
        switch (b.type) {
          case "element":
            var a;
            if (a = c[b.tagName]) if ("-" === a) b.parentNode.removeChild(b);
            else if (p.isFunction(a)) {
              var g = b.parentNode,
                h = b.getIndex();
              a(b);
              if (b.parentNode) {
                if (b.children) for (a = 0; h = b.children[a];) d(h, c),
                h.parentNode && a++
              } else for (a = h; h = g.children[a];) d(h, c),
              h.parentNode && a++
            } else {
              if ((a = a.$) && b.attrs) {
                h = {};
                for (g in a) {
                  var e = b.getAttr(g);
                  if ("style" == g && p.isArray(a[g])) {
                    var l = [];
                    p.each(a[g], function (a) {
                      var c;
                      (c = b.getStyle(a)) && l.push(a + ":" + c)
                    });
                    e = l.join(";")
                  }
                  e && (h[g] = e)
                }
                b.attrs = h
              }
              if (b.children) for (a = 0; h = b.children[a];) d(h, c),
              h.parentNode && a++
            } else if (x.$cdata[b.tagName]) b.parentNode.removeChild(b);
            else for (g = b.parentNode, h = b.getIndex(), b.parentNode.removeChild(b, !0), a = h; h = g.children[a];) d(h, c),
              h.parentNode && a++;
            break;
          case "comment":
            b.parentNode.removeChild(b)
        }
      }
      return function (b, c) {
        if (p.isEmptyObject(c)) return b;
        var a;
        (a = c["-"]) && p.each(a.split(" "), function (a) {
          c[a] = "-"
        });
        a = 0;
        for (var g; g = b.children[a];) d(g, c),
        g.parentNode && a++;
        return b
      }
    }();
    UE.plugin = function () {
      var d = {};
      return {
        register: function (b, c, a, g) {
          a && p.isFunction(a) && (g = a, a = null);
          d[b] = {
            optionName: a || b,
            execFn: c,
            afterDisabled: g
          }
        },
        load: function (b) {
          p.each(d, function (c) {
            var a = c.execFn.call(b);
            !1 !== b.options[c.optionName] ? a && p.each(a, function (a, c) {
              switch (c.toLowerCase()) {
                case "shortcutkey":
                  b.addshortcutkey(a);
                  break;
                case "bindevents":
                  p.each(a, function (a, c) {
                    b.addListener(c, a)
                  });
                  break;
                case "bindmultievents":
                  p.each(p.isArray(a) ? a : [a], function (a) {
                    var c = p.trim(a.type).split(/\s+/);
                    p.each(c, function (c) {
                      b.addListener(c, a.handler)
                    })
                  });
                  break;
                case "commands":
                  p.each(a, function (a, c) {
                    b.commands[c] = a
                  });
                  break;
                case "outputrule":
                  b.addOutputRule(a);
                  break;
                case "inputrule":
                  b.addInputRule(a);
                  break;
                case "defaultoptions":
                  b.setOpt(a)
              }
            }) : c.afterDisabled && c.afterDisabled.call(b)
          });
          p.each(UE.plugins, function (c) {
            c.call(b)
          })
        },
        run: function (b, c) {
          (b = d[b]) && b.exeFn.call(c)
        }
      }
    }();
    var da = UE.keymap = {
        Backspace: 8,
        Tab: 9,
        Enter: 13,
        Shift: 16,
        Control: 17,
        Alt: 18,
        CapsLock: 20,
        Esc: 27,
        Spacebar: 32,
        PageUp: 33,
        PageDown: 34,
        End: 35,
        Home: 36,
        Left: 37,
        Up: 38,
        Right: 39,
        Down: 40,
        Insert: 45,
        Del: 46,
        NumLock: 144,
        Cmd: 91,
        "=": 187,
        "-": 189,
        b: 66,
        i: 73,
        z: 90,
        y: 89,
        v: 86,
        x: 88,
        s: 83,
        n: 78
      },
      P = UE.LocalStorage = function () {
        function d() {
          var a = document.createElement("div");
          a.style.display = "none";
          if (!a.addBehavior) return null;
          a.addBehavior("#default#userdata");
          return {
            getItem: function (b) {
              var d = null;
              try {
                document.body.appendChild(a),
                  a.load(c),
                  d = a.getAttribute(b),
                  document.body.removeChild(a)
              } catch (e) {}
              return d
            },
            setItem: function (b, d) {
              document.body.appendChild(a);
              a.setAttribute(b, d);
              a.save(c);
              document.body.removeChild(a)
            },
            removeItem: function (b) {
              document.body.appendChild(a);
              a.removeAttribute(b);
              a.save(c);
              document.body.removeChild(a)
            }
          }
        }
        var b = window.localStorage || d() || null,
          c = "localStorage";
        return {
          saveLocalData: function (a, c) {
            return b && c ? (b.setItem(a, c), !0) : !1
          },
          getLocalData: function (a) {
            return b ? b.getItem(a) : null
          },
          removeItem: function (a) {
            b && b.removeItem(a)
          }
        }
      }();
    (function () {
      UE.Editor.prototype.setPreferences = function (d, b) {
        var c = {};
        p.isString(d) ? c[d] = b : c = d;
        (d = P.getLocalData("ueditor_preference")) && (d = p.str2json(d)) ? p.extend(d, c) : d = c;
        d && P.saveLocalData("ueditor_preference", p.json2str(d))
      };
      UE.Editor.prototype.getPreferences = function (d) {
        var b = P.getLocalData("ueditor_preference");
        return b && (b = p.str2json(b)) ? d ? b[d] : b : null
      };
      UE.Editor.prototype.removePreferences = function (d) {
        var b = P.getLocalData("ueditor_preference");
        b && (b = p.str2json(b)) && (b[d] = void 0, delete b[d]);
        b && P.saveLocalData("ueditor_preference", p.json2str(b))
      }
    })();
    p.extend(UE.Editor.prototype, {
      setValue: function (d, b) {
        if (b.textarea) if (p.isString(b.textarea)) for (var c = 0, a, g = f.getElementsByTagName(d, "textarea"); a = g[c++];) {
          if (a.id == "ueditor_textarea_" + b.options.textarea) {
            var h = a;
            break
          }
        } else h = b.textarea;
        jQuery(b.selection.document).find("p").each(function () {
          "&nbsp;" == jQuery.trim(jQuery(this).html()) && jQuery(this).html("<br/>");
          "" != jQuery.trim(jQuery(this).text()) || 0 < jQuery(this).find("img").length || (0 < jQuery(this).find("br").length ? jQuery(this).html("<br/>") : "both" != this.style.clear && jQuery(this).remove())
        });
        h || (d.appendChild(h = f.createElement(document, "textarea", {
          name: b.options.textarea,
          id: "ueditor_textarea_" + b.options.textarea,
          style: "display:none"
        })), b.textarea = h);
        !h.getAttribute("name") && h.setAttribute("name", b.options.textarea);
        d = b.hasContents() ? b.options.allHtmlEnabled ? b.getAllHtml() : b.getContent(null, null, !0) : "";
        "" != d && (h.value = d)
      },
      checkBorderImg: function () {
        var d = !1;
        jQuery(this.selection.document).find("*").each(function () {
          if ("SECTION" == this.tagName.toUpperCase()) {
            var b =
              jQuery(this).attr("style");
            b && 0 <= b.indexOf("border-image") && (d = !0)
          }
        });
        return d
      },
      parseWxHtml: function (d) {
        var b = this;
        d = jQuery("<div>" + d + " </div>");
        jQuery(d).find("*").each(function () {
          if ("undefined" != typeof this.tagName) {
            if ("IMG" == this.tagName.toUpperCase() && b.getOpt("parse_wx_image")) {
              var c = null;
              var a = "function" == typeof window.strip_imgthumb_opr ? window.strip_imgthumb_opr(this.src) : this.src;
              var d = /https?:\/\/\w+\.135editor\.com\/cache\/remote\/([^;\\)]+)/i;
              (d = a.match(d)) && d[0] ? c = base64_decode(d[1]) : a && (0 <= a.indexOf(".135editor.com/mmbiz") || 0 <= a.indexOf(".135editor.com/mmocbiz")) ? (c = a.replace("http://mpt.135editor.com", "https://mmbiz.qpic.cn"), c = c.replace("https://mpt.135editor.com", "https://mmbiz.qpic.cn")) : "http://remote.wx135.com/oss/view?d=" == a.substr(0, 35) && (c = decodeURIComponent(a.replace("&free=1", "").substr(35)));
              c && (0 <= c.indexOf("mmbiz.qlogo.cn") || 0 <= c.indexOf("mmbiz.qpic.cn") || 0 <= c.indexOf("mmsns.qpic.cn") || 0 <= c.indexOf("mmsns.qlogo.cn")) && (c = c.replace("http://mmbiz.qpic.cn", "https://mmbiz.qpic.cn"), c = c.replace("https://mmbiz.qlogo.cn", "https://mmbiz.qpic.cn"), b.getOpt("hd_image") && (c = c.replace(/\?wx_fmt=/g, ".")), this.src = c, $(this).attr("_src", c))
            } else if ("IMAGE" == this.tagName.toUpperCase()) c = null,
              jQuery(this).attr("xlink:href"),
              a = "function" == typeof window.strip_imgthumb_opr ? window.strip_imgthumb_opr(jQuery(this).attr("xlink:href")) : jQuery(this).attr("xlink:href"),
              d = /https?:\/\/\w+\.135editor\.com\/cache\/remote\/([^;\\)]+)/i,
            (d = a.match(d)) && d[0] && (c = base64_decode(d[1])),
            "http://remote.wx135.com/oss/view?d=" == a.substr(0, 35) && (c = decodeURIComponent(a.replace("&free=1", "").substr(35))),
            c && (b.getOpt("hd_image") && (c = c.replace(/\?wx_fmt=/g, ".")), c = c.replace("http://mmbiz.qpic.cn", "https://mmbiz.qpic.cn"), c = c.replace("https://mmbiz.qlogo.cn", "https://mmbiz.qpic.cn"), jQuery(this).attr("xlink:href", c));
            else if ("SECTION" == this.tagName.toUpperCase() && (a = jQuery(this).attr("style")) && (0 <= a.indexOf("border-image") || b.getOpt("parse_wx_image"))) if ((a = a.replace("&amp;", "&")) && 0 <= a.indexOf("http://remote.wx135.com/oss/view?d=")) {
              a =
                a.replace("&free=1", "");
              var h = null;
              c = null;
              d = /['|"]\s*(http:\/\/remote\.wx135\.com\/oss\/view\?d=([^;\\)]+?))['|"]/i;
              (d = a.match(d)) && d[0] ? (h = d[1], c = decodeURIComponent(d[2])) : (d = /\(\s*(http:\/\/remote\.wx135\.com\/oss\/view\?d=([^;\\)]+?))\)/i, (d = a.match(d)) && d[0] && (h = d[1], c = decodeURIComponent(d[2])));
              b.getOpt("hd_image") && (c = c.replace(/\?wx_fmt=/g, "."));
              h && c && 0 <= c.indexOf("mmbiz.qlogo.cn") && jQuery(this).attr("style", a.replace(h, c))
            } else a && 0 <= a.indexOf(".135editor.com/cache/remote/") ? (c = h = null, d = /['|"]\s*(https?:\/\/\w+\.135editor\.com\/cache\/remote\/([^;\\)]+?))['|"]/i, (d = a.match(d)) && d[0] ? (h = d[1], c = "function" == typeof window.strip_imgthumb_opr ? base64_decode(window.strip_imgthumb_opr(d[2])) : base64_decode(d[2])) : (d = /\(\s*(http:\/\/\w+\.135editor\.com\/cache\/remote\/([^;\\)]+?))\)/i, (d = a.match(d)) && d[0] && (h = d[1], c = "function" == typeof window.strip_imgthumb_opr ? base64_decode(window.strip_imgthumb_opr(d[2])) : base64_decode(d[2]))), h && c && (0 <= c.indexOf("mmbiz.qlogo.cn") || 0 <= c.indexOf("mmbiz.qpic.cn")) && (c = c.replace("http://mmbiz.qpic.cn", "https://mmbiz.qpic.cn"), c = c.replace("https://mmbiz.qlogo.cn", "https://mmbiz.qpic.cn"), b.getOpt("hd_image") && (c = c.replace(/\?wx_fmt=/g, ".")), jQuery(this).attr("style", a.replace(h, c)))) : a && (0 <= a.indexOf(".135editor.com/mmbiz") || 0 <= a.indexOf(".135editor.com/mmocbiz")) ? (a = a.replace("http://mpt.135editor.com", "https://mmbiz.qpic.cn"), a = a.replace("https://mpt.135editor.com", "https://mmbiz.qpic.cn"), jQuery(this).attr("style", a)) : a && 0 <= a.indexOf(".135editor.com/mmsns") && (a = a.replace("http://mpt.135editor.com", "https://mmsns.qpic.cn"), a = a.replace("https://mpt.135editor.com", "https://mmsns.qpic.cn"), jQuery(this).attr("style", a));
            this.style.fontFamily && (this.style.fontFamily = this.style.fontFamily.replace(/".+?",?/g, ""));
            if (this.style.transform) b.setElementTransform(this, this.style.transform);
            else if (c = jQuery(this).attr("style")) c = c.replace(/'/g, "&quot;").replace(/\\"/g, "&quot;"),
              jQuery(this).attr("style", c)
          }
        });
        d = jQuery.trim(d.html());
        return "" == d ? "" : d
      },
      getWxContent: function (d, b, c, a, g) {
        d = this.getContent(d, b, c, a, g);
        return this.parseWxHtml(d)
      },
      // 将复制的内容插入编辑器前处理复制的内容
      parseInsertPasteSetHtml: function (d) {
        var b =
          this;
        // 这个函数用于去掉多余span，导致复制过来的内容样式出现问题，咨询135编辑器开发人员后决定注释掉此函数。BUG #284451 问题9中的小喇叭错位问题
        // "function" == typeof strip_stack_span && (d = strip_stack_span(d));
        d = jQuery("<div>" + d + "</div>");
        do d.find(".article135:first,[data-role=outer]:first").each(function () {
          jQuery(this).css("background-color") || jQuery(this).css("background-image") ? jQuery(this).removeAttr("class").removeAttr("data-role") : jQuery(this).replaceWith(jQuery(this).html())
        });
        while (0 < d.find(".article135,[data-role=outer]").length);
        d.find("img").removeAttr("crossorigin");
        d.find("img").removeAttr("_width");
        d.find("[donone]").removeAttr("label").removeAttr("id").removeAttr("donone").attr("class", "_135editor");
        d.find(".shifubrush").removeAttr("class");
        d.find("[data-id]").attr("class", "_135editor");
        d.find("[powered-by]").attr("class", "_135editor");
        d.find(".135editor").removeClass("135editor").addClass("_135editor");
        d.find("[powered-by]").each(function () {
          var b = jQuery(this);
          200 > b.text().length && b.find("[powered-by]").removeAttr("class")
        });
        d.find("[powered-by]").removeAttr("powered-by");
        this.isPaidUser();
        d.find("*").each(function () {
          if ("IMG" == this.tagName.toUpperCase()) {
            var c = this.src && "" != this.src ? this.src : jQuery(this).attr("data-src");
            jQuery(this).removeAttr("data-src");
            if ("undefined" == typeof c || "" == c) {
              jQuery(this).remove();
              return
            }
            c = c.replace("&amp;", "&");
            c = c.replace("http://mmbiz.qpic.cn", "https://mmbiz.qpic.cn");
            c = c.replace("https://mmbiz.qlogo.cn", "https://mmbiz.qpic.cn");
            c = c.replace(/&wxfrom=\d+/g, "");
            c = c.replace(/wxfrom=\d+/g, "");
            c = c.replace(/&wx_lazy=\d+/g, "");
            c = c.replace(/wx_lazy=\d+/g, "");
            c = c.replace(/&tp=[a-z]+/g, "");
            c = c.replace(/tp=[a-z]+/g, "");
            c = c.replace(/&fr=[0-9a-z]+/g, "");
            c =
              c.replace(/fr=[0-9a-z]+/g, "");
            c = c.replace(/&rd=[0-9a-zA-Z]+/g, "");
            c = c.replace(/rd=[0-9a-zA-Z]+/g, "");
            c = c.replace(/\?&/g, "?");
            c = c.replace(/\?$/g, "");
            jQuery(this).attr("src", c);
            jQuery(this).attr("_src", c);
            this.style.maxWidth = '100%'
            this.style.height = 'auto'
            // 将宽度设置为auto，对于一些原来就设置有固定宽度值，且此固定宽度值影响到最终效果的元素的样式造成了影响，所以暂时注释掉，看看是否有别的影响。BUG #284451 14（6）
            // this.style.width = 'auto'
          } else if ("TABLE" == this.tagName.toUpperCase()) {
            this.style.width = '100%'
            this.style.borderCollapse = 'collapse'
          }
          this.style.transform && b.setElementTransform(this, this.style.transform);
          // 这个函数是将固定的宽度值转换为百分比的宽度值，但是这个函数是不完善的，所以造成了部分样式问题，暂时先注释掉解决此样式问题，看下是否会造成别的样式问题。BUG #284451 问题9中来自受灾地区的声音部分问题
          // window.percent_width(jQuery(this))
        });
        window.percent_width(d);
        // current_editor.fireEvent('addStyleContent', d.html())
        return d.html()
      },
      isPaidUser: function () {
        return this.is_paid_user
      },
      setPaidUser: function (d) {
        this.is_paid_user = d
      },
      setElementTransform: function (d, b) {
        if ("none" != b) {
          var c = jQuery(d).attr("style") || "";
          c = c.replace(/\s*\-[a-z]+\-transform\s*:[A-Za-z0-9_%,.\-\(\)\s]*;/gim, "");
          c = c.replace(/[;]?\s*transform\s*:[A-Za-z0-9_%,.\-\(\)\s]*;/gim, ";");
          c = (c + ";" + ("transform: " + b + ";-webkit-transform: " + b + ";-moz-transform: " + b + ";-o-transform: " + b + ";")).replace(";;", ";");
          jQuery(d).attr("style", c)
        }
      }
    }, !1);
    window.random_color_step = 1;
    window.current_edit_img = null;
    window.current_editor = null;
    window.current_active_135item = null;
    window.replace_full_color = !1;
    window.replace_clear_interval = null;
    window.block_tags = {
      ADDRESS: 1,
      BLOCKQUOTE: 1,
      CENTER: 1,
      DIR: 1,
      DIV: 1,
      DL: 1,
      FIELDSET: 1,
      FORM: 1,
      H1: 1,
      H2: 1,
      H3: 1,
      H4: 1,
      H5: 1,
      H6: 1,
      HR: 1,
      ISINDEX: 1,
      MENU: 1,
      NOFRAMES: 1,
      OL: 1,
      LI: 1,
      P: 1,
      PRE: 1,
      TABLE: 1,
      UL: 1,
      SECTION: 1,
      HEADER: 1,
      FOOTER: 1,
      ASIDE: 1
    };
    window.percent_width = function (d) {
      function b(a) {
        return a ? parseInt(a.replace("px", "")) : 0
      }
      var c = !1,
        a = b(d.get(0).style.width),
        g = 0,
        h = 0;
      d.children().each(function () {
        jQuery(this).data("width") && "fix" != jQuery(this).data("width") ? (this.style.width = jQuery(this).data("width"), c = !0) : "" == this.style.width || 0 < this.style.width.search("%") || "fix" == jQuery(this).data("width") || 0 < this.style.width.search("em") ? c = !0 : "inline-block" != this.style.display && window.block_tags[this.tagName] ? (h > a && (a = h), g = b(this.style.width), g > a && (a = g), h = g = 0) : h += b(this.style.width)
      });
      h > a && (a = h);
      0 == c && 360 < a && d.children().each(function () {
        this.style.width = 100 * parseInt(this.style.width.replace("px", "")) / a + "%"
      })
    };
    UE.plugins.defaultfilter = function () {
      var d = this;
      d.setOpt({
        allowDivTransToP: !0,
        disabledTableInTable: !0,
        rgb2Hex: !0
      });
      d.addInputRule(function (b) {
        function c(a) {
          for (; a && "element" == a.type;) {
            if ("td" == a.tagName) return !0;
            a = a.parentNode
          }
          return !1
        }
        var a = this.options.allowDivTransToP,
          g;
        b.traversal(function (b) {
          if ("element" == b.type) if (x.$cdata[b.tagName] || !d.options.autoClearEmptyNode || !x.$inline[b.tagName] || x.$empty[b.tagName] || b.attrs && !p.isEmptyObject(b.attrs)) switch (b.tagName) {
            case "style":
            case "script":
              b.setAttr({
                cdata_tag: b.tagName,
                cdata_data: b.innerHTML() || "",
                _ue_custom_node_: "true"
              });
              b.tagName = "div";
              b.innerHTML("");
              break;
            case "a":
              (g = b.getAttr("href")) && b.setAttr("_href", g);
              break;
            case "img":
              if ((g = b.getAttr("src")) && /^data:/.test(g)) {
                b.parentNode.removeChild(b);
                break
              }
              b.setAttr("_src", b.getAttr("src"));
              break;
            case "span":
              u.webkit && (g = b.getStyle("white-space")) && /nowrap|normal/.test(g) && (b.setStyle("white-space", ""), d.options.autoClearEmptyNode && p.isEmptyObject(b.attrs) && b.parentNode.removeChild(b, !0));
              (g = b.getAttr("id")) && /^_baidu_bookmark_/i.test(g) && b.parentNode.removeChild(b);
              break;
            case "p":
              if (g = b.getAttr("align")) b.setAttr("align"),
                b.setStyle("text-align", g);
              p.each(b.children, function (a) {
                if ("element" == a.type && "p" == a.tagName) {
                  var c = a.nextSibling();
                  for (b.parentNode.insertAfter(a, b); c;) {
                    var e = c.nextSibling();
                    b.parentNode.insertAfter(c, a);
                    a = c;
                    c = e
                  }
                  return !1
                }
              });
              b.firstChild() || b.innerHTML(u.ie ? "&nbsp;" : "<br/>");
              break;
            case "div":
              if (b.getAttr("cdata_tag")) break;
              if ((g = b.getAttr("class")) && /^line number\d+/.test(g)) break;
              if (!a) break;
              for (var e, l = UE.uNode.createElement("p"); e = b.firstChild();)"text" != e.type && UE.dom.dtd.$block[e.tagName] ? l.firstChild() ? (b.parentNode.insertBefore(l, b), l = UE.uNode.createElement("p")) : b.parentNode.insertBefore(e, b) : l.appendChild(e);
              l.firstChild() && b.parentNode.insertBefore(l, b);
              b.parentNode.removeChild(b);
              break;
            case "dl":
              b.tagName = "ul";
              break;
            case "dt":
            case "dd":
              b.tagName = "li";
              break;
            case "li":
              (e = b.getAttr("class")) && /list\-/.test(e) || b.setAttr();
              e = b.getNodesByTagName("ol ul");
              UE.utils.each(e, function (a) {
                b.parentNode.insertAfter(a, b)
              });
              break;
            case "td":
            case "th":
            case "caption":
              b.children && b.children.length || b.appendChild(u.ie11below ? UE.uNode.createText(" ") : UE.uNode.createElement("br"));
              break;
            case "table":
              d.options.disabledTableInTable && c(b) && (b.parentNode.insertBefore(UE.uNode.createText(b.innerText()), b), b.parentNode.removeChild(b))
          } else b.firstChild() ? "span" != b.tagName || b.attrs && !p.isEmptyObject(b.attrs) || b.parentNode.removeChild(b, !0) : b.parentNode.removeChild(b)
        })
      });
      d.addOutputRule(function (b) {
        var c;
        b.traversal(function (a) {
          if ("element" == a.type) if (!d.options.autoClearEmptyNode || !x.$inline[a.tagName] || x.$empty[a.tagName] || a.attrs && !p.isEmptyObject(a.attrs)) switch (a.tagName) {
            case "div":
              if (c =
                a.getAttr("cdata_tag")) a.tagName = c,
                a.appendChild(UE.uNode.createText(a.getAttr("cdata_data"))),
                a.setAttr({
                  cdata_tag: "",
                  cdata_data: "",
                  _ue_custom_node_: ""
                });
              break;
            case "a":
              (c = a.getAttr("_href")) && a.setAttr({
                href: p.html(c),
                _href: ""
              });
              break;
            case "span":
              (c = a.getAttr("id")) && /^_baidu_bookmark_/i.test(c) && a.parentNode.removeChild(a);
              if (d.getOpt("rgb2Hex")) {
                var b = a.getAttr("style");
                b && a.setAttr("style", b.replace(/rgba?\(([\d,\s]+)\)/g, function (a, b) {
                  a = b.split(",");
                  if (3 < a.length) return "";
                  b = "#";
                  for (var c = 0, e; e = a[c++];) e = parseInt(e.replace(/[^\d]/gi, ""), 10).toString(16),
                    b += 1 == e.length ? "0" + e : e;
                  return b.toUpperCase()
                }))
              }
              break;
            case "img":
              (c = a.getAttr("_src")) && a.setAttr({
                src: a.getAttr("_src"),
                _src: ""
              })
          } else a.firstChild() ? "span" != a.tagName || a.attrs && !p.isEmptyObject(a.attrs) || a.parentNode.removeChild(a, !0) : a.parentNode.removeChild(a)
        })
      })
    };
    UE.commands.inserthtml = {
      execCommand: function (d, b, c) {
        var a = this;
        this.focus()
        if (b && !0 !== a.fireEvent("beforeinserthtml", b)) {
          var g = a.selection.getRange();
          d = g.document.createElement("div");
          d.style.display = "inline";
          c || (c = UE.htmlparser(b), a.options.filterRules && UE.filterNode(c, a.options.filterRules), a.filterInputRule(c), b = c.toHtml());
          d.innerHTML = p.trim(b);
          if (!g.collapsed && (c = g.startContainer, f.isFillChar(c) && g.setStartBefore(c), c = g.endContainer, f.isFillChar(c) && g.setEndAfter(c), g.txtToElmBoundary(), g.endContainer && 1 == g.endContainer.nodeType && (c = g.endContainer.childNodes[g.endOffset]) && f.isBr(c) && g.setEndAfter(c), 0 == g.startOffset && (c = g.startContainer, f.isBoundaryNode(c, "firstChild") && (c = g.endContainer, g.endOffset == (3 == c.nodeType ? c.nodeValue.length : c.childNodes.length) && f.isBoundaryNode(c, "lastChild") && (a.body.innerHTML = "<p>" + (u.ie ? "" : "<br/>") + "</p>", g.setStart(a.body.firstChild, 0).collapse(!0)))), !g.collapsed && g.deleteContents(), 1 == g.startContainer.nodeType)) {
            var h = g.startContainer.childNodes[g.startOffset],
              e;
            if (h && f.isBlockElm(h) && (e = h.previousSibling) && f.isBlockElm(e)) {
              for (g.setEnd(e, e.childNodes.length).collapse(); h.firstChild;) e.appendChild(h.firstChild);
              f.remove(h)
            }
          }
          var l;
          c = 0;
          g.inFillChar() && (h = g.startContainer, f.isFillChar(h) ? (g.setStartBefore(h).collapse(!0), f.remove(h)) : f.isFillChar(h, !0) && (h.nodeValue = h.nodeValue.replace(T, ""), g.startOffset--, g.collapsed && g.collapse(!0)));
          var k = f.findParentByTagName(g.startContainer, "li", !0);
          if (k) {
            for (var n; h = d.firstChild;) {
              for (; h && (3 == h.nodeType || !f.isBlockElm(h) || "HR" == h.tagName);) {
                var m = h.nextSibling;
                g.insertNode(h).collapse();
                n = h;
                h = m
              }
              if (h) if (/^(ol|ul)$/i.test(h.tagName)) {
                for (; h.firstChild;) n = h.firstChild,
                  f.insertAfter(k, h.firstChild),
                  k = k.nextSibling;
                f.remove(h)
              } else m = h.nextSibling,
                e = a.document.createElement("li"),
                f.insertAfter(k, e),
                e.appendChild(h),
                n = h,
                h = m,
                k = e
            }
            k = f.findParentByTagName(g.startContainer, "li", !0);
            f.isEmptyBlock(k) && f.remove(k);
            n && g.setStartAfter(n).collapse(!0).select(!0)
          } else {
            n = 0;
            (h = f.findParentByTagName(g.startContainer, "section", !0)) && f.hasClass(h, "_135editor") && "paragraph" == h.getAttribute("data-role") && f.isEmptyBlock(h) && 0 < jQuery(d).find("._135editor").length && (n = a.document.createElement("p"), h.parentNode.insertBefore(n, h), f.fillNode(a.document, n), g.setStart(n, 0).setCursor(), n = 1);
            for (; h = d.firstChild;) {
              g.insertNode(h);
              var q = h.nextSibling;
              if (!c && h.nodeType == f.NODE_ELEMENT && f.isBlockElm(h) && (m = f.findParent(h, function (a) {
                return f.isBlockElm(a)
              })) && "body" != m.tagName.toLowerCase() && x[m.tagName] && (!x[m.tagName][h.nodeName] || h.parentNode !== m)) {
                if (x[m.tagName][h.nodeName]) for (l = h.parentNode; l !== m;) e = l,
                  l = l.parentNode;
                else e = m;
                f.breakParent(h, e || l);
                e = h.previousSibling;
                f.trimWhiteTextNode(e);
                e.childNodes.length || f.remove(e);
                c = 1
              }
              m = h.nextSibling;
              if (!d.firstChild && m && f.isBlockElm(m)) {
                g.setStart(m, 0).collapse(!0);
                break
              }
              g.setEndAfter(h).collapse()
            }
            h = g.startContainer;
            q && f.isBr(q) && f.remove(q);
            if (f.isBlockElm(h) && f.isEmptyNode(h)) if (n) {
              if (q = h.nextSibling) g.setStart(q, 0).collapse(!0).shrinkBoundary(),
                f.remove(h)
            } else try {
              h.innerHTML = u.ie ? f.fillChar : "<br/>"
            } catch (t) {
              g.setStartBefore(h),
                f.remove(h)
            }
            try {
              g.select(!0)
            } catch (t) {}
          }
          a.audioPause()
          setTimeout(function () {
            g = a.selection.getRange();
            g.scrollToView(a.autoHeightEnabled, a.autoHeightEnabled ? f.getXY(a.iframe).y : 0);
            a.fireEvent("afterinserthtml", b)
          }, 200)
        }
      }
    };
    //删除图片
    UE.commands['imagedetele'] = {
      execCommand:function (cmd, id){
        let me = this;
        let images = me.iframe.contentWindow.document.images
        let img
        for (let i = 0; i < images.length; i ++) {
          if (images[i].id == id){
            img = images[i]
            break
          }
        }
        // var myImage = getImage(me);
        if (img) {
          if (confirm("是否删除图片？")){
            img.remove()
            // myImage.remove();
          }
        }

      }
    };
    UE.plugins.autotypeset = function () {
      function d(a, b) {
        if (!a || 3 == a.nodeType) return 0;
        if (f.isBr(a)) return 1;
        if (a && a.parentNode && l[a.tagName.toLowerCase()]) return k && k.contains(a) || a.getAttribute("pagebreak") ? 0 : b ? !f.isEmptyBlock(a) : f.isEmptyBlock(a, new RegExp("[\\s" + f.fillChar + "]", "g"))
      }
      function b(a) {
        a.style.cssText || (f.removeAttributes(a, ["style"]), "span" == a.tagName.toLowerCase() && f.hasNoAttributes(a) && f.remove(a, !0))
      }
      function c(a, c) {
        if (c) {
          if (!g.pasteFilter) return;
          a = this.document.createElement("div");
          a.innerHTML = c.html
        } else a = this.document.body;
        for (var l = f.getElementsByTagName(a, "*"), m = 0, n; n = l[m++];) if (!0 !== this.fireEvent("excludeNodeinautotype", n)) {
          g.clearFontSize && n.style.fontSize && (f.removeStyle(n, "font-size"), b(n));
          g.clearFontFamily && n.style.fontFamily && (f.removeStyle(n, "font-family"), b(n));
          if (d(n)) {
            if (g.mergeEmptyline) for (var w = n.nextSibling, y, K = f.isBr(n); d(w);) {
              y = w;
              w = y.nextSibling;
              if (K && (!w || w && !f.isBr(w))) break;
              f.remove(y)
            }
            if (g.removeEmptyline && f.inDoc(n, a) && !e[n.parentNode.tagName.toLowerCase()]) {
              if (f.isBr(n) && (w = n.nextSibling) && !f.isBr(w)) continue;
              f.remove(n);
              continue
            }
          }
          d(n, !0) && "SPAN" != n.tagName && (g.indent && (n.style.textIndent = g.indentValue), g.textAlign && (n.style.textAlign = g.textAlign));
          if (g.removeClass && n.className && !h[n.className.toLowerCase()]) {
            if (k && k.contains(n)) continue;
            f.removeAttributes(n, ["class"])
          }
          if (g.imageBlockLine && "img" == n.tagName.toLowerCase() && !n.getAttribute("emotion")) if (c) switch (K = n, g.imageBlockLine) {
            case "left":
            case "right":
            case "none":
              w =
                K.parentNode;
              for (var F; x.$inline[w.tagName] || "A" == w.tagName;) w = w.parentNode;
              y = w;
              if ("P" == y.tagName && "center" == f.getStyle(y, "text-align") && !f.isBody(y) && 1 == f.getChildCount(y, function (a) {
                return !f.isBr(a) && !f.isWhitespace(a)
              })) if (F = y.previousSibling, w = y.nextSibling, F && w && 1 == F.nodeType && 1 == w.nodeType && F.tagName == w.tagName && f.isBlockElm(F)) {
                for (F.appendChild(y.firstChild); w.firstChild;) F.appendChild(w.firstChild);
                f.remove(y);
                f.remove(w)
              } else f.setStyle(y, "text-align", "");
              f.setStyle(K, "float", g.imageBlockLine);
              break;
            case "center":
              if ("center" != this.queryCommandValue("imagefloat")) {
                w = K.parentNode;
                f.setStyle(K, "float", "none");
                for (y = K; w && 1 == f.getChildCount(w, function (a) {
                  return !f.isBr(a) && !f.isWhitespace(a)
                }) && (x.$inline[w.tagName] || "A" == w.tagName);) y = w,
                  w = w.parentNode;
                w = this.document.createElement("p");
                f.setAttributes(w, {
                  style: "text-align:center"
                });
                y.parentNode.insertBefore(w, y);
                w.appendChild(y);
                f.setStyle(y, "float", "")
              }
          } else this.selection.getRange().selectNode(n).select(),
            this.execCommand("imagefloat", g.imageBlockLine);
          g.removeEmptyNode && g.removeTagNames[n.tagName.toLowerCase()] && f.hasNoAttributes(n) && f.isEmptyBlock(n) && f.remove(n)
        }
        g.tobdc && (l = UE.htmlparser(a.innerHTML), l.traversal(function (a) {
          if ("text" == a.type) {
            var b = a.data;
            b = p.html(b);
            for (var c = "", e = 0; e < b.length; e++) c = 32 == b.charCodeAt(e) ? c + String.fromCharCode(12288) : 127 > b.charCodeAt(e) ? c + String.fromCharCode(b.charCodeAt(e) + 65248) : c + b.charAt(e);
            a.data = c
          }
        }), a.innerHTML = l.toHtml());
        g.bdc2sb && (l = UE.htmlparser(a.innerHTML), l.traversal(function (a) {
          if ("text" == a.type) {
            for (var b =
              a.data, c = "", e = 0; e < b.length; e++) {
              var d = b.charCodeAt(e);
              c = 65281 <= d && 65373 >= d ? c + String.fromCharCode(b.charCodeAt(e) - 65248) : 12288 == d ? c + String.fromCharCode(b.charCodeAt(e) - 12288 + 32) : c + b.charAt(e)
            }
            a.data = c
          }
        }), a.innerHTML = l.toHtml());
        c && (c.html = a.innerHTML)
      }
      this.setOpt({
        autotypeset: {
          mergeEmptyline: !0,
          removeClass: !1,
          removeEmptyline: !1,
          textAlign: "left",
          imageBlockLine: "center",
          pasteFilter: !1,
          clearFontSize: !1,
          clearFontFamily: !1,
          removeEmptyNode: !1,
          removeTagNames: p.extend({
            div: 1
          }, x.$removeEmpty),
          indent: !1,
          indentValue: "2em",
          bdc2sb: !1,
          tobdc: !1
        }
      });
      var a = this,
        g = a.options.autotypeset,
        h = {
          selectTdClass: 1,
          pagebreak: 1,
          anchorclass: 1
        },
        e = {
          li: 1
        },
        l = {
          div: 1,
          p: 1,
          blockquote: 1,
          center: 1,
          h1: 1,
          h2: 1,
          h3: 1,
          h4: 1,
          h5: 1,
          h6: 1,
          span: 1
        },
        k;
      g && (function () {
        var b = a.getPreferences("autotypeset");
        p.extend(a.options.autotypeset, b)
      }(), g.pasteFilter = !1, g.removeEmptyNode = !1, g.pasteFilter && a.addListener("beforepaste", c), a.commands.autotypeset = {
        execCommand: function () {
          a.removeListener("beforepaste", c);
          g.pasteFilter && a.addListener("beforepaste", c);
          c.call(a)
        }
      })
    };
    UE.plugin.register("autosubmit", function () {
      return {
        shortcutkey: {
          autosubmit: "ctrl+13"
        },
        commands: {
          autosubmit: {
            execCommand: function () {
              var d = f.findParentByTagName(this.iframe, "form", !1);
              d && !1 !== this.fireEvent("beforesubmit") && (this.sync(), d.submit())
            }
          }
        }
      }
    });
    UE.plugin.register("background", function () {
      function d(a) {
        var b = {};
        a = a.split(";");
        p.each(a, function (a) {
          var c = a.indexOf(":"),
            e = p.trim(a.substr(0, c)).toLowerCase();
          e && (b[e] = p.trim(a.substr(c + 1) || ""))
        });
        return b
      }
      function b(a) {
        if (a) {
          var b = [],
            e;
          for (e in a) a.hasOwnProperty(e) && b.push(e + ":" + a[e] + "; ");
          p.cssRule("editor_background", b.length ? "body{" + b.join("") + "}" : "", c.document)
        } else p.cssRule("editor_background", "", c.document)
      }
      var c = this,
        a, g = /body[\s]*\{(.+)\}/i,
        h = c.hasContents;
      c.hasContents = function () {
        return c.queryCommandValue("background") ? !0 : h.apply(c, arguments)
      };
      return {
        bindEvents: {
          getAllHtml: function (a, b) {
            a = this.body;
            var e = f.getComputedStyle(a, "background-image");
            var d = 0 < e.indexOf(c.options.imagePath) ? e.substring(e.indexOf(c.options.imagePath), e.length - 1).replace(/"|\(|\)/ig, "") : "none" != e ? e.replace(/url\("?|"?\)/ig, "") : "";
            e = '<style type="text/css">body{';
            a = {
              "background-color": f.getComputedStyle(a, "background-color") || "#ffffff",
              "background-image": d ? "url(" + d + ")" : "",
              "background-repeat": f.getComputedStyle(a, "background-repeat") || "",
              "background-position": u.ie ? f.getComputedStyle(a, "background-position-x") + " " + f.getComputedStyle(a, "background-position-y") : f.getComputedStyle(a, "background-position"),
              height: f.getComputedStyle(a, "height")
            };
            for (var g in a) a.hasOwnProperty(g) && (e += g + ":" + a[g] + "; ");
            b.push(e + "}</style> ")
          },
          aftersetcontent: function () {
            0 == a && b()
          }
        },
        inputRule: function (c) {
          a = !1;
          p.each(c.getNodesByTagName("p"), function (c) {
            var e = c.getAttr("data-background");
            e && (a = !0, b(d(e)), c.parentNode.removeChild(c))
          })
        },
        outputRule: function (a) {
          var b = (p.cssRule("editor_background", this.document) || "").replace(/[\n\r]+/g, "").match(g);
          b && a.appendChild(UE.uNode.createElement('<p style="display:none;" data-background="' + p.trim(b[1].replace(/"/g, "").replace(/[\s]+/g, " ")) + '"><br/></p>'))
        },
        commands: {
          background: {
            execCommand: function (a, c) {
              b(c)
            },
            queryCommandValue: function () {
              var a = (p.cssRule("editor_background", this.document) || "").replace(/[\n\r]+/g, "").match(g);
              return a ? d(a[1]) : null
            },
            notNeedUndo: !0
          }
        }
      }
    });
    UE.commands.imagefloat = {
      execCommand: function (d, b) {
        d = this.selection.getRange();
        if (!d.collapsed) {
          var c = d.getClosedNode();
          if (c && "IMG" == c.tagName) switch (b) {
            case "left":
            case "right":
            case "none":
            case "center":
              for (var a = c.parentNode, g, h; x.$inline[a.tagName] || "A" == a.tagName;) a = a.parentNode;
              g = a;
              // if ("P" == g.tagName && "center" == f.getStyle(g, "text-align")) {
              //   if (!f.isBody(g) && 1 == f.getChildCount(g, function (a) {
              //     return !f.isBr(a) && !f.isWhitespace(a)
              //   })) if (a = g.previousSibling, h = g.nextSibling, a && h && 1 == a.nodeType && 1 == h.nodeType && a.tagName == h.tagName && f.isBlockElm(a)) {
              //     for (a.appendChild(g.firstChild); h.firstChild;) a.appendChild(h.firstChild);
              //     f.remove(g);
              //     f.remove(h)
              //   } else f.setStyle(g, "text-align", "");
              //   d.selectNode(c).select()
              // }
              // f.setStyle(c, "float", "none" == b ? "" : b);
               f.setStyle(g, "text-align", b)
              "none" == b && f.removeAttributes(c, "align");
              break;
            case "center":
              if ("center" != this.queryCommandValue("imagefloat")) {
                a = c.parentNode;
                f.setStyle(c, "float", "");
                f.removeAttributes(c, "align");
                for (g = c; a && 1 == f.getChildCount(a, function (a) {
                  return !f.isBr(a) && !f.isWhitespace(a)
                }) && (x.$inline[a.tagName] || "A" == a.tagName);) g = a,
                  a = a.parentNode;
                d.setStartBefore(g).setCursor(!1);
                a = this.document.createElement("div");
                a.appendChild(g);
                f.setStyle(g, "float", "");
                this.execCommand("insertHtml", '<p id="_img_parent_tmp" style="text-align:center">' + a.innerHTML + "</p>");
                g = this.document.getElementById("_img_parent_tmp");
                g.removeAttribute("id");
                g = g.firstChild;
                d.selectNode(g).select();
                (h = g.parentNode.nextSibling) && f.isEmptyNode(h) && f.remove(h)
              }
          }
        }
      },
      queryCommandValue: function () {
        var d = this.selection.getRange();
        if (d.collapsed) return "none";
        if ((d = d.getClosedNode()) && 1 == d.nodeType && "IMG" == d.tagName) {
          var b = f.getComputedStyle(d, "float") || d.getAttribute("align");
          "none" == b && (b = "center" == f.getComputedStyle(d.parentNode, "text-align") ? "center" : b);
          return {
            left: 1,
            right: 1,
            center: 1
          }[b] ? b : "none"
        }
        return "none"
      },
      queryCommandState: function () {
        var d =
          this.selection.getRange();
        return d.collapsed ? -1 : (d = d.getClosedNode()) && 1 == d.nodeType && "IMG" == d.tagName ? 0 : -1
      }
    };
    UE.commands.imagescenter = {
      execCommand: function (d) {
        var b = this,
          c = b.selection;
        c.clearRange();
        b.undoManger.save();
        jQuery("img", b.document.body).each(function () {
          if (!$(this).hasClass("assistant")) {
            $(this).css("display", "");
            var a = b.document.createRange();
            a.selectNode(this);
            c.getNative().addRange(a);
            b.execCommand("justify", "center");
            c.clearRange()
          }
        });
        b.fireEvent("showmessage", {
          id: "imagescenter",
          content: "\u5168\u6587\u56fe\u7247\u5c45\u4e2d\u6210\u529f",
          type: "success",
          timeout: 3E3
        })
      }
    };
    UE.commands.insertimage = {
      execCommand: function (d, b) {
        b = p.isArray(b) ? b : [b];
        if (b.length) {
          d = this.selection.getRange();
          var c = d.getClosedNode();
          if (!0 !== this.fireEvent("beforeinsertimage", b)) {
            if (!c || !/img/i.test(c.tagName) ||
              "edui-faked-video" == c.className && -1 == c.className.indexOf("edui-upload-video") ||
              c.getAttribute("word_img")) {
              d = [];
              var a = b[0];
              if (1 == b.length) {
                c = '<img src="' + a.src + '" ' +
                  // (a._src ? ' _src="' + a._src + '" ' : "") +
                  (a.width ? 'width="' + a.width + '" ' : "") +
                  (a.height ? ' height="' + a.height + '" ' : "") +
                  'style="max-width:100%;height:auto;"' +
                  (a.aid ? ' aid="' + a.aid + '" ' : "") +
                  (a.imageid ? ' id="' + a.imageid + '" ' : "") +
                  ("left" == a.floatStyle || "right" == a.floatStyle ? ' style="float:' + a.floatStyle + ';"' : "") +
                  (a.title && "" != a.title ? ' title="' + a.title + '"' : "") +
                  (a.border && "0" != a.border ? ' border="' + a.border + '"' : "") +
                  (a.alt && "" != a.alt ? ' alt="' + a.alt + '"' : "") +
                  (a.hspace && "0" != a.hspace ? ' hspace = "' + a.hspace + '"' : "") +
                  (a.vspace && "0" != a.vspace ? ' vspace = "' + a.vspace + '"' : "") + ">",
                "center" == a.floatStyle && (c = '<p style="text-align: center">' + c + "</p>"),
                  d.push(c);
              } else for (var g = 0; a = b[g++];)
                c = "<p " + ("center" == a.floatStyle ? 'style="text-align: center" ' : "") +
                  '><img src="' + a.src + '" ' +
                  (a.width ? 'width="' + a.width + '" ' : "") +
                  // (a._src ? ' _src="' + a._src + '" ' : "") +
                  (a.height ? ' height="' + a.height + '" ' : "") +
                  'style="max-width:100%;height:auto;"' +
                  (a.aid ? ' aid="' + a.aid + '" ' : "") +
                  (a.imageid ? ' id="' + a.imageid + '" ' : "") +
                  (a.floatStyle && "center" != a.floatStyle ? "float:" + a.floatStyle + ";" : "") +
                  (a.border || "") +
                  '" ' + (a.title ? ' title="' + a.title + '"' : "") +
                  " /></p>",
                d.push(c);
              this.execCommand("insertHtml", d.join(""), !0)
            } else a = b.shift(),
              g = a.floatStyle,
              delete a.floatStyle,
              f.setAttributes(c, a),
              this.execCommand("imagefloat", g),
            0 < b.length && (d.setStartAfter(c).setCursor(!1, !0), this.execCommand("insertimage", b));
            this.fireEvent("afterinsertimage", b)
          }
        }
      }
    };
    //删除图片
    UE.commands['imagedelete'] = {
      execCommand:function (cmd, id){
        let me = this;
        let images = me.iframe.contentWindow.document.images
        let img
        for (let i = 0; i < images.length; i ++) {
          if (images[i].id == id){
            img = images[i]
            break
          }
        }
        // var myImage = getImage(me);
        if (img) {
          if (confirm("是否删除图片？")){
            img.remove()
            // myImage.remove();
          }
        }

      }
    };
    //删除视频
    UE.commands['deletevideo'] = {
      execCommand:function (cmd, target){
        r.editor.dom.domUtils.remove(target)
      }
    };
    //删除音频
    UE.commands['deletemusic'] = {
      execCommand:function (cmd, target){
        r.editor.dom.domUtils.remove(target)
      }
    };
    UE.plugins.justify = function () {
      var d = f.isBlockElm,
        b = {
          left: 1,
          right: 1,
          center: 1,
          justify: 1
        },
        c = function (a, b) {
          var c = a.createBookmark(),
            e = function (a) {
              return 1 == a.nodeType ? "br" != a.tagName.toLowerCase() && !f.isBookmarkNode(a) : !f.isWhitespace(a)
            };
          a.enlarge(!0);
          for (var g = a.createBookmark(), k = f.getNextDomNode(g.start, !1, e), n = a.cloneRange(), m; k && !(f.getPosition(k, g.end) & f.POSITION_FOLLOWING);) if (3 != k.nodeType && d(k)) k = f.getNextDomNode(k, !0, e);
          else {
            for (n.setStartBefore(k); k && k !== g.end && !d(k);) m = k,
              k = f.getNextDomNode(k, !1, null, function (a) {
                return !d(a)
              });
            n.setEndAfter(m);
            k = n.getCommonAncestor();
            if (!f.isBody(k) && d(k)) f.setStyles(k, p.isString(b) ? {
              "text-align": b
            } : b);
            else {
              k = a.document.createElement("p");
              f.setStyles(k, p.isString(b) ? {
                "text-align": b
              } : b);
              var q = n.extractContents();
              k.appendChild(q);
              n.insertNode(k)
            }
            k = f.getNextDomNode(k, !1, e)
          }
          return a.moveToBookmark(g).moveToBookmark(c)
        };
      UE.commands.justify = {
        execCommand: function (a, b) {
          a = this.selection.getRange();
          if (a.collapsed) {
            var d = this.document.createTextNode("p");
            a.insertNode(d)
          }
          c(a, b);
          d && (a.setStartBefore(d).collapse(!0), f.remove(d));
          a.select();
          return !0
        },
        queryCommandValue: function () {
          var a = this.selection.getStart();
          a = f.getComputedStyle(a, "text-align");
          return b[a] ? a : "left"
        },
        queryCommandState: function () {
          var a = this.selection.getStart();
          return a && f.findParentByTagName(a, ["td", "th", "caption"], !0) ? -1 : 0
        }
      }
    };
    UE.plugins.font = function () {
      function d(a) {
        for (var b; b = a.parentNode;) if ("SPAN" == b.tagName && 1 == f.getChildCount(b, function (a) {
          return !f.isBookmarkNode(a) && !f.isBr(a)
        })) b.style.cssText += a.style.cssText,
          f.remove(a, !0),
          a = b;
        else break
      }
      function b(a, b, c) {
        if (h[b] && (a.adjustmentBoundary(), !a.collapsed && 1 == a.startContainer.nodeType)) {
          var e = a.startContainer.childNodes[a.startOffset];
          if (e && f.isTagNode(e, "span")) {
            var d = a.createBookmark();
            p.each(f.getElementsByTagName(e, "span"), function (a) {
              !a.parentNode || f.isBookmarkNode(a) || "backcolor" == b && f.getComputedStyle(a, "background-color").toLowerCase() === c || (f.removeStyle(a, h[b]), 0 == a.style.cssText.replace(/^\s+$/, "").length && f.remove(a, !0))
            });
            a.moveToBookmark(d)
          }
        }
      }
      function c(a, c, e) {
        var k = a.collapsed,
          g = a.createBookmark();
        if (k) for (k = g.start.parentNode; x.$inline[k.tagName];) k = k.parentNode;
        else k = f.getCommonAncestor(g.start, g.end);
        p.each(f.getElementsByTagName(k, "span"), function (a) {
          if (a.parentNode && !f.isBookmarkNode(a)) if (/\s*border\s*:\s*none;?\s*/i.test(a.style.cssText)) / ^ \s * border\s * : \s * none; ? \s * $ / .test(a.style.cssText) ? f.remove(a, !0) : f.removeStyle(a, "border");
          else {
            /border/i.test(a.style.cssText) && "SPAN" == a.parentNode.tagName && /border/i.test(a.parentNode.style.cssText) && (a.style.cssText = a.style.cssText.replace(/border[^:]*:[^;]+;?/gi, ""));
            if ("fontborder" != c || "none" != e) for (var b = a.nextSibling; b && 1 == b.nodeType && "SPAN" == b.tagName;) {
              if (f.isBookmarkNode(b) && "fontborder" == c) a.appendChild(b);
              else if (b.style.cssText == a.style.cssText && (f.moveChild(b, a), f.remove(b)), a.nextSibling === b) break;
              b = a.nextSibling
            }
            d(a);
            u.ie && 8 < u.version && (b = f.findParent(a, function (a) {
              return "SPAN" == a.tagName && /background-color/.test(a.style.cssText)
            })) && !/background-color/.test(a.style.cssText) && (a.style.backgroundColor = b.style.backgroundColor)
          }
        });
        a.moveToBookmark(g);
        b(a, c, e)
      }
      var a = {
          forecolor: "color",
          shadowcolor: "text-shadow",
          backcolor: "background-color",
          fontsize: "font-size",
          fontfamily: "font-family",
          underline: "text-decoration",
          strikethrough: "text-decoration",
          fontborder: "border",
          fontcode: "border"
        },
        g = {
          underline: 1,
          strikethrough: 1,
          fontborder: 1,
          fontcode: 1
        },
        h = {
          forecolor: "color",
          shadowcolor: "text-shadow",
          backcolor: "background-color",
          fontsize: "font-size",
          fontfamily: "font-family"
        };
      this.setOpt({
        fontfamily: [
          { label: '', name: 'songti', val: '宋体,SimSun' },
          { label: '', name: 'kaiti', val: '楷体,楷体_GB2312, SimKai'},
          { label: '', name: 'yahei', val: '微软雅黑,Microsoft YaHei'},
          { label: '', name: 'heiti', val: '黑体, SimHei'},
          { label: '', name: 'lishu', val: '隶书, SimLi'},
          { label: '', name: 'andaleMono', val: 'andale mono'},
          { label: '', name: 'arial', val: 'arial, helvetica,sans-serif'},
          { label: '', name: 'arialBlack', val: 'arial black,avant garde'},
          { label: '', name: 'comicSansMs', val: 'comic sans ms'},
          { label: '', name: 'impact', val: 'impact,chicago'},
          { label: '', name: 'timesNewRoman', val: 'times new roman'},
          { label: '', name: 'MSGothic', val: 'MS Gothic,MSGothic' },
          { label: '', name: 'MSPgothic', val: 'MS Pgothic,MSPgothic'},
          { label: '', name: 'Batang', val: 'Batang,Batang' },
          { label: '', name: 'MSMincho', val: 'MS Mincho,MSMincho'},
          { label: '', name: 'MSPmincho', val: 'MSPmincho,MS Pmincho' },
          { label: '', name: 'MSUigothic', val: 'MSUigothic,MS Uigothic'}
        ],
        fontsize: [10, 11, 12, 14, 16, 18, 20, 24, 36]
      });
      this.addInputRule(function (a) {
        p.each(a.getNodesByTagName("u s del font strike"), function (a) {
          if ("font" == a.tagName) {
            var b = [],
              c;
            for (c in a.attrs) switch (c) {
              case "size":
                b.push("font-size:" + ({
                  1: "10",
                  2: "12",
                  3: "16",
                  4: "18",
                  5: "24",
                  6: "32",
                  7: "48"
                }[a.attrs[c]] || a.attrs[c]) + "px");
                break;
              case "color":
                b.push("color:" + a.attrs[c]);
                break;
              case "face":
                b.push("font-family:" + a.attrs[c]);
                break;
              case "style":
                b.push(a.attrs[c])
            }
            a.attrs = {
              style: b.join(";")
            }
          } else b = "u" == a.tagName ? "underline" : "line-through",
            a.attrs = {
              style: (a.getAttr("style") || "") + "text-decoration:" + b + ";"
            };
          a.tagName = "span"
        })
      });
      for (var e in a)(function (a, b) {
        UE.commands[a] = {
          execCommand: function (e, d) {     
            d = d || (this.queryCommandState(e) ? "none" : "underline" == e ? "underline" : "fontborder" == e ? "1px solid #000;" : "fontcode" == e ? "1px solid #ccc;color:#e84e0f;border-radius: 3px;background-color: #f8f8f8;padding: 0 4px;margin:0 2px;" : "line-through");
            var k = this.selection.getRange();
            "none" == d && "fontcode" == e && (this.execCommand("removeFormat", "span,a", b), this.execCommand("removeFormat", "span,a", "border-radius"), this.execCommand("removeFormat", "span,a", "background-color"), this.execCommand("removeFormat", "span,a", "padding"), this.execCommand("removeFormat", "span,a", "margin"));
            if ("default" == d) {
              if (k.collapsed) {
                var l = this.document.createTextNode("font");
                k.insertNode(l).select()
              }
              this.execCommand("removeFormat", "span,a", b);
              l && (k.setStartBefore(l).collapse(!0), f.remove(l));
              c(k, e, d);
              k.select()
            } else if (k.collapsed) {
              var h = f.findParentByTagName(k.startContainer, "span", !0);
              l = this.document.createTextNode("font");
              if (!h || h.children.length || h[u.ie ? "innerText" : "textContent"].replace(T, "").length) {
                k.insertNode(l);
                k.selectNode(l).select();
                h = k.document.createElement("span");
                if (g[a]) {
                  if (f.findParentByTagName(l, "a", !0)) {
                    k.setStartBefore(l).setCursor();
                    f.remove(l);
                    return
                  }
                  this.execCommand("removeFormat", "span,a", b)
                }
                h.style.cssText = b + ":" + d;
                l.parentNode.insertBefore(h, l);
                if (!u.ie || u.ie && 9 == u.version) for (var m = h.parentNode; !f.isBlockElm(m);)"SPAN" == m.tagName && (h.style.cssText = m.style.cssText + ";" + h.style.cssText),
                  m = m.parentNode;
                ja ? setTimeout(function () {
                  k.setStart(h, 0).collapse(!0);
                  c(k, e, d);
                  k.select()
                }) : (k.setStart(h, 0).collapse(!0), c(k, e, d), k.select())
              } else k.insertNode(l),
              g[a] && (k.selectNode(l).select(), this.execCommand("removeFormat", "span,a", b, null), h = f.findParentByTagName(l, "span", !0), k.setStartBefore(l)),
              h && (h.style.cssText += ";" + b + ":" + d),
                k.collapse(!0).select();
              f.remove(l)
            } else if ("underline" == e) {
              // BUG #616922 加了下划线后 图说标记消失
              g[a] && this.queryCommandValue(a),// && this.execCommand("removeFormat", "span,a", b),
              k = this.selection.getRange(),
              k.applyInlineStyle("span", {
                style: b + ":" + d
              }),
              c(k, e, d),
              k.select();
            } else g[a] && this.queryCommandValue(a) && this.execCommand("removeFormat", "span,a", b),
              k = this.selection.getRange(),
              k.applyInlineStyle("span", {
                style: b + ":" + d
              }),
              c(k, e, d),
              k.select();
            return !0
          },
          queryCommandValue: function (a) {
            var c = this.selection.getStart();
            if ("underline" == a || "strikethrough" == a) {
              for (a = c; a && !f.isBlockElm(a) && !f.isBody(a);) {
                if (1 == a.nodeType && (c = f.getComputedStyle(a, b), "none" != c)) return c;
                a = a.parentNode
              }
              return "none"
            }
            if ("fontcode" == a) {
              for (a = c; a && x.$inline[a.tagName];) {
                c = f.getComputedStyle(a, "border");
                var e = f.getComputedStyle(a, "background-color");
                if (c && e && /1px/.test(c) && /solid/.test(c)) return c;
                a = a.parentNode
              }
              return ""
            }
            if ("fontborder" == a) {
              for (a = c; a && x.$inline[a.tagName];) {
                c = f.getComputedStyle(a, "border");
                e = f.getComputedStyle(a, "background-color");
                if (c && !e && /1px/.test(c) && /solid/.test(c)) return c;
                a = a.parentNode
              }
              return ""
            }
            return "FontSize" == a ? (c = f.getComputedStyle(c, b), (a = /^([\d\.]+)(\w+)$/.exec(c)) ? Math.floor(a[1]) + a[2] : c) : f.getComputedStyle(c, b)
          },
          queryCommandState: function (a) {
            if (!g[a]) return 0;
            var b = this.queryCommandValue(a);
            return "fontborder" == a || "fontcode" == a ? /1px/.test(b) && /solid/.test(b) : "underline" == a ? /underline/.test(b) : /line\-through/.test(b)
          }
        }
      })(e, a[e])
    };
    UE.plugins.link = function () {
      function d(b) {
        var c = b.startContainer,
          a = b.endContainer;
        (c = f.findParentByTagName(c, "a", !0)) && b.setStartBefore(c);
        (a = f.findParentByTagName(a, "a", !0)) && b.setEndAfter(a)
      }
      UE.commands.unlink = {
        execCommand: function () {
          var b = this.selection.getRange();
          if (!b.collapsed || f.findParentByTagName(b.startContainer, "a", !0)) {
            var c =
              b.createBookmark();
            d(b);
            b.removeInlineStyle("a").moveToBookmark(c).select()
          }
        },
        queryCommandState: function () {
          return !this.highlight && this.queryCommandValue("link") ? 0 : -1
        }
      };
      UE.commands.link = {
        execCommand: function (b, c) {
          c._href && (c._href = p.unhtml(c._href, /[<">]/g));
          c.href && (c.href = p.unhtml(c.href, /[<">]/g));
          c.textValue && (c.textValue = p.unhtml(c.textValue, /[<">]/g));
          var a = b = this.selection.getRange(),
            g = a.cloneRange(),
            h = this.queryCommandValue("link");
          d(a = a.adjustmentBoundary());
          var e = a.startContainer;
          1 == e.nodeType && h && (e = e.childNodes[a.startOffset]) && 1 == e.nodeType && "A" == e.tagName && /^(?:https?|ftp|file)\s*:\s*\/\//.test(e[u.ie ? "innerText" : "textContent"]) && (e[u.ie ? "innerText" : "textContent"] = p.html(c.textValue || c.href));
          if (!g.collapsed || h) a.removeInlineStyle("a"),
            g = a.cloneRange();
          if (g.collapsed) {
            h = a.document.createElement("a");
            if (c.textValue) {
              var l = p.html(c.textValue);
              delete c.textValue
            } else l = p.html(c.href);
            f.setAttributes(h, c);
            (e = f.findParentByTagName(g.startContainer, "a", !0)) && f.isInNodeEndBoundary(g, e) && a.setStartAfter(e).collapse(!0);
            h[u.ie ? "innerText" : "textContent"] = l;
            a.insertNode(h).selectNode(h)
          } else a.applyInlineStyle("a", c);
          b.collapse().select(!0)
        },
        queryCommandValue: function () {
          var b = this.selection.getRange();
          if (b.collapsed) {
            var c = b.startContainer;
            if ((c = 1 == c.nodeType ? c : c.parentNode) && (c = f.findParentByTagName(c, "a", !0)) && !f.isInNodeEndBoundary(b, c)) return c
          } else {
            b.shrinkBoundary();
            var a = 3 != b.startContainer.nodeType && b.startContainer.childNodes[b.startOffset] ? b.startContainer.childNodes[b.startOffset] : b.startContainer,
              d = 3 == b.endContainer.nodeType || 0 == b.endOffset ? b.endContainer : b.endContainer.childNodes[b.endOffset - 1];
            b = b.getCommonAncestor();
            c = f.findParentByTagName(b, "a", !0);
            if (!c && 1 == b.nodeType) {
              b = b.getElementsByTagName("a");
              for (var h, e, l = 0, k; k = b[l++];) if (h = f.getPosition(k, a), e = f.getPosition(k, d), (h & f.POSITION_FOLLOWING || h & f.POSITION_CONTAINS) && (e & f.POSITION_PRECEDING || e & f.POSITION_CONTAINS)) {
                c = k;
                break
              }
            }
            return c
          }
        },
        queryCommandState: function () {
          var b = this.selection.getRange().getClosedNode();
          return !b || "edui-faked-video" != b.className && -1 == b.className.indexOf("edui-upload-video") ? 0 : -1
        }
      }
    };
    UE.plugins.removeformat = function () {
      this.setOpt({
        removeFormatTags: "b,big,code,del,section,dfn,em,font,i,ins,kbd,q,samp,small,span,strike,strong,sub,sup,tt,u,var",
        removeFormatAttributes: "class,style,lang,width,height,align,hspace,valign"
      });
      this.commands.removeformat = {
        execCommand: function (d, b, c, a, g) {
          function h(a) {
            if (3 == a.nodeType || "span" != a.tagName.toLowerCase()) return 0;
            if (u.ie) {
              var b = a.attributes;
              if (b.length) {
                a = 0;
                for (var c = b.length; a < c; a++) if (b[a].specified) return 0;
                return 1
              }
            }
            return !a.attributes.length
          }
          var e = new RegExp("^(?:" + (b || this.options.removeFormatTags).replace(/,/g, "|") + ")$", "i"),
            l = c ? [] : (a || this.options.removeFormatAttributes).split(",");
          d = new D.Range(this.document);
          var k, n, m = function (a) {
            return 1 == a.nodeType
          };
          d = this.selection.getRange();
          this.execCommand("Paragraph", "p");
          // UE.execCommand("Paragraph", "p")
          // if (d.collapsed) {
          //   var g = this.document.createTextNode("p");
          //   d.insertNode(g);
            
          // }
          (function (a) {
            var b = a.createBookmark();
            a.collapsed && a.enlarge(!0);
            if (!g) {
              var d = f.findParentByTagName(a.startContainer, "a", !0);
              d && a.setStartBefore(d);
              (d = f.findParentByTagName(a.endContainer, "a", !0)) && a.setEndAfter(d)
            }
            k = a.createBookmark();
            for (d = k.start;
                 (n = d.parentNode) && !f.isBlockElm(n);) f.breakParent(d, n),
              f.clearEmptySibling(d);
            if (k.end) {
              for (d = k.end;
                   (n = d.parentNode) && !f.isBlockElm(n);) f.breakParent(d, n),
                f.clearEmptySibling(d);
              d = f.getNextDomNode(k.start, !1, m);
              for (var q; d && d != k.end;) q = f.getNextDomNode(d, !0, m),
              x.$empty[d.tagName.toLowerCase()] || f.isBookmarkNode(d) || (e.test(d.tagName) ? c ? (f.removeStyle(d, c), h(d) && "text-decoration" != c && f.remove(d, !0)) : f.remove(d, !0) : x.$tableContent[d.tagName] || x.$list[d.tagName] || (f.removeAttributes(d, l), h(d) && f.remove(d, !0))),
                d = q
            }
            d = k.start.parentNode;
            !f.isBlockElm(d) || x.$tableContent[d.tagName] || x.$list[d.tagName] || f.removeAttributes(d, l);
            d = k.end.parentNode;
            k.end && f.isBlockElm(d) && !x.$tableContent[d.tagName] && !x.$list[d.tagName] && f.removeAttributes(d, l);
            a.moveToBookmark(k).moveToBookmark(b);
            d = a.startContainer;
            for (q = a.collapsed; 1 == d.nodeType && f.isEmptyNode(d) && x.$removeEmpty[d.tagName];) b = d.parentNode,
              a.setStartBefore(d),
            a.startContainer === a.endContainer && a.endOffset--,
              f.remove(d),
              d = b;
            if (!q) for (d = a.endContainer; 1 == d.nodeType && f.isEmptyNode(d) && x.$removeEmpty[d.tagName];) b = d.parentNode,
              a.setEndBefore(d),
              f.remove(d),
              d = b
          })(d);
          d.select()
        }
      }
    };
    UE.plugins.blockquote = function () {
      this.commands.blockquote = {
        execCommand: function (d, b) {
          d = this.selection.getRange();
          var c = f.filterNodeList(this.selection.getStartElementPath(), "blockquote"),
            a = x.blockquote,
            g = d.createBookmark();
          if (c) {
            b = d.startContainer;
            b = f.isBlockElm(b) ? b : f.findParent(b, function (a) {
              return f.isBlockElm(a)
            });
            a = d.endContainer;
            a = f.isBlockElm(a) ? a : f.findParent(a, function (a) {
              return f.isBlockElm(a)
            });
            b = f.findParentByTagName(b, "li", !0) || b;
            a = f.findParentByTagName(a, "li", !0) || a;
            "LI" == b.tagName || "TD" == b.tagName || b === c || f.isBody(b) ? f.remove(c, !0) : f.breakParent(b, c);
            b !== a && (c = f.findParentByTagName(a, "blockquote")) && ("LI" == a.tagName || "TD" == a.tagName || f.isBody(a) ? c.parentNode && f.remove(c, !0) : f.breakParent(a, c));
            var h = f.getElementsByTagName(this.document, "blockquote");
            c = 0;
            for (var e; e = h[c++];) e.childNodes.length ? f.getPosition(e, b) & f.POSITION_FOLLOWING && f.getPosition(e, a) & f.POSITION_PRECEDING && f.remove(e, !0) : f.remove(e)
          } else {
            c = d.cloneRange();
            e = h = 1 == c.startContainer.nodeType ? c.startContainer : c.startContainer.parentNode;
            for (var l = 1;;) {
              if (f.isBody(h)) {
                e !== h ? d.collapsed ? (c.selectNode(e), l = 0) : c.setStartBefore(e) : c.setStart(h, 0);
                break
              }
              if (!a[h.tagName]) {
                d.collapsed ? c.selectNode(e) : c.setStartBefore(e);
                break
              }
              e = h;
              h = h.parentNode
            }
            if (l) for (e = h = h = 1 == c.endContainer.nodeType ? c.endContainer : c.endContainer.parentNode;;) {
              if (f.isBody(h)) {
                e !== h ? c.setEndAfter(e) : c.setEnd(h, h.childNodes.length);
                break
              }
              if (!a[h.tagName]) {
                c.setEndAfter(e);
                break
              }
              e = h;
              h = h.parentNode
            }
            h = d.document.createElement("blockquote");
            f.setAttributes(h, b);
            h.appendChild(c.extractContents());
            c.insertNode(h);
            b = f.getElementsByTagName(h, "blockquote");
            for (c = 0; a = b[c++];) a.parentNode && f.remove(a, !0)
          }
          d.moveToBookmark(g).select()
        },
        queryCommandState: function () {
          return f.filterNodeList(this.selection.getStartElementPath(), "blockquote") ? 1 : 0
        }
      }
    };
    UE.commands.touppercase = UE.commands.tolowercase = {
      execCommand: function (d) {
        var b = this.selection.getRange();
        if (b.collapsed) return b;
        for (var c = b.createBookmark(), a = c.end, g = function (a) {
          return !f.isBr(a) && !f.isWhitespace(a)
        }, h = f.getNextDomNode(c.start, !1, g); h && f.getPosition(h, a) & f.POSITION_PRECEDING && (3 == h.nodeType && (h.nodeValue = h.nodeValue["touppercase" == d ? "toUpperCase" : "toLowerCase"]()), h = f.getNextDomNode(h, !0, g), h !== a););
        b.moveToBookmark(c).select()
      }
    };
    UE.commands.indent = {
      execCommand: function () {
        var d = this.queryCommandState("indent") ? "0em" : this.options.indentValue || "2em";
        this.execCommand("Paragraph", "p", {
          style: "text-indent:" + d
        })
      },
      queryCommandState: function () {
        var d = f.filterNodeList(this.selection.getStartElementPath(), "p h1 h2 h3 h4 h5 h6");
        return d && d.style.textIndent && parseInt(d.style.textIndent) ? 1 : 0
      }
    };
    UE.commands.print = {
      execCommand: function () {
        this.window.print()
      },
      notNeedUndo: 1
    };
    UE.commands.preview = {
      execCommand: function () {
        var d = window.open("", "_blank", "").document;
        d.open();
        d.write('<!DOCTYPE html><html><head><meta charset="utf-8"/><script src="' + this.options.UEDITOR_HOME_URL + "ueditor.parse.js\">\x3c/script><script>setTimeout(function(){uParse('div',{rootPath: '" + this.options.UEDITOR_HOME_URL + "'})},300)\x3c/script></head><body><div>" + this.getContent(null, null, !0) + "</div></body></html>");
        d.close()
      },
      notNeedUndo: 1
    };
    UE.plugins.selectall = function () {
      this.commands.selectall = {
        execCommand: function () {
          var d = this.body,
            b = this.selection.getRange();
          b.selectNodeContents(d);
          f.isEmptyBlock(d) && (u.opera && d.firstChild && 1 == d.firstChild.nodeType && b.setStartAtFirst(d.firstChild), b.collapse(!0));
          b.select(!0)
        },
        notNeedUndo: 1
      };
      this.addshortcutkey({
        selectAll: "ctrl+65"
      })
    };
    // UE.plugins.comment = function () {
    //   this.commands.comment = {
    //     execCommand: function () {
    //       debugger
    //     },
    //     notNeedUndo: 1
    //   };
    // };
    UE.plugins.paragraph = function () {
      var d = f.isBlockElm,
        b = ["TD", "LI", "PRE"],
        c = function (a, c, h, e) {
          var g = a.createBookmark(),
            k = function (a) {
              return 1 == a.nodeType ? "br" != a.tagName.toLowerCase() && !f.isBookmarkNode(a) : !f.isWhitespace(a)
            };
          a.enlarge(!0);
          var n = a.createBookmark();
          var m = f.getNextDomNode(n.start, !1, k);
          for (var q = a.cloneRange(), t; m && !(f.getPosition(m, n.end) & f.POSITION_FOLLOWING);) if (3 != m.nodeType && d(m)) m = f.getNextDomNode(m, !0, k);
          else {
            for (q.setStartBefore(m); m && m !== n.end && !d(m);) t = m,
              m = f.getNextDomNode(m, !1, null, function (a) {
                return !d(a)
              });
            q.setEndAfter(t);
            m = a.document.createElement(c);
            h && (f.setAttributes(m, h), e && "customstyle" == e && h.style && (m.style.cssText = h.style));
            m.appendChild(q.extractContents());
            f.isEmptyNode(m) && f.fillChar(a.document, m);
            q.insertNode(m);
            var v = m.parentNode;
            d(v) && !f.isBody(m.parentNode) && -1 == p.indexOf(b, v.tagName) && (e && "customstyle" == e || (v.getAttribute("dir") && m.setAttribute("dir", v.getAttribute("dir")), v.style.cssText && (m.style.cssText =
              v.style.cssText + ";" + m.style.cssText), v.style.textAlign && !m.style.textAlign && (m.style.textAlign = v.style.textAlign), v.style.textIndent && !m.style.textIndent && (m.style.textIndent = v.style.textIndent), v.style.padding && !m.style.padding && (m.style.padding = v.style.padding)), h && /h\d/i.test(v.tagName) && !/h\d/i.test(m.tagName) ? (f.setAttributes(v, h), e && "customstyle" == e && h.style && (v.style.cssText = h.style), f.remove(m, !0), m = v) : f.remove(m.parentNode, !0));
            m = -1 != p.indexOf(b, v.tagName) ? v : m;
            m = f.getNextDomNode(m, !1, k)
          }
          return a.moveToBookmark(n).moveToBookmark(g)
        };
      this.setOpt("paragraph", {
        p: "",
        h1: "",
        h2: "",
        h3: "",
        h4: "",
        h5: "",
        h6: ""
      });
      this.commands.paragraph = {
        execCommand: function (a, b, d, e) {
          a = this.selection.getRange();
          if (a.collapsed) {
            var g = this.document.createTextNode("p");
            a.insertNode(g);
            if (u.ie) {
              var k = g.previousSibling;
              k && f.isWhitespace(k) && f.remove(k);
              (k = g.nextSibling) && f.isWhitespace(k) && f.remove(k)
            }
          }
          a = c(a, b, d, e);
          g && (a.setStartBefore(g).collapse(!0), pN = g.parentNode, f.remove(g), f.isBlockElm(pN) && f.isEmptyNode(pN) && f.fillNode(this.document, pN));
          u.gecko && a.collapsed && 1 == a.startContainer.nodeType && (d = a.startContainer.childNodes[a.startOffset]) && 1 == d.nodeType && d.tagName.toLowerCase() == b && a.setStart(d, 0).collapse(!0);
          a.select();
          return !0
        },
        queryCommandValue: function () {
          var a = f.filterNodeList(this.selection.getStartElementPath(), "p h1 h2 h3 h4 h5 h6");
          return a ? a.tagName.toLowerCase() : ""
        }
      }
    };
    (function () {
      var d = f.isBlockElm,
        b = function (a) {
          return f.filterNodeList(a.selection.getStartElementPath(), function (a) {
            return a && 1 == a.nodeType && a.getAttribute("dir")
          })
        },
        c = function (a, c, h) {
          var e = function (a) {
            return 1 == a.nodeType ? !f.isBookmarkNode(a) : !f.isWhitespace(a)
          };
          if ((c = b(c)) && a.collapsed) return c.setAttribute("dir", h),
            a;
          c = a.createBookmark();
          a.enlarge(!0);
          for (var g = a.createBookmark(), k = f.getNextDomNode(g.start, !1, e), n = a.cloneRange(), m; k && !(f.getPosition(k, g.end) & f.POSITION_FOLLOWING);) if (3 != k.nodeType && d(k)) k = f.getNextDomNode(k, !0, e);
          else {
            for (n.setStartBefore(k); k && k !== g.end && !d(k);) m = k,
              k = f.getNextDomNode(k, !1, null, function (a) {
                return !d(a)
              });
            n.setEndAfter(m);
            k = n.getCommonAncestor();
            if (!f.isBody(k) && d(k)) k.setAttribute("dir", h);
            else {
              k = a.document.createElement("p");
              k.setAttribute("dir", h);
              var q = n.extractContents();
              k.appendChild(q);
              n.insertNode(k)
            }
            k = f.getNextDomNode(k, !1, e)
          }
          return a.moveToBookmark(g).moveToBookmark(c)
        };
      UE.commands.directionality = {
        execCommand: function (a, b) {
          a = this.selection.getRange();
          if (a.collapsed) {
            var d = this.document.createTextNode("d");
            a.insertNode(d)
          }
          c(a, this, b);
          d && (a.setStartBefore(d).collapse(!0), f.remove(d));
          a.select();
          return !0
        },
        queryCommandValue: function () {
          var a =
            b(this);
          return a ? a.getAttribute("dir") : "ltr"
        }
      }
    })();
    UE.plugins.horizontal = function () {
      this.commands.horizontal = {
        execCommand: function (d) {
          if (-1 !== this.queryCommandState(d)) {
            this.execCommand("insertHtml", "<hr>");
            d = this.selection.getRange();
            var b = d.startContainer;
            if (1 == b.nodeType && !b.childNodes[d.startOffset]) {
              var c;
              (c = b.childNodes[d.startOffset - 1]) && 1 == c.nodeType && "HR" == c.tagName && ("p" == this.options.enterTag ? (c = this.document.createElement("p"), d.insertNode(c), d.setStart(c, 0).setCursor()) : (c = this.document.createElement("br"), d.insertNode(c), d.setStartBefore(c).setCursor()))
            }
            return !0
          }
        },
        queryCommandState: function () {
          return f.filterNodeList(this.selection.getStartElementPath(), "table") ? -1 : 0
        }
      };
      this.addListener("delkeydown", function (d, b) {
        d = this.selection.getRange();
        d.txtToElmBoundary(!0);
        if (f.isStartInblock(d)) {
          var c = d.startContainer.previousSibling;
          if (c && f.isTagNode(c, "hr")) return f.remove(c),
            d.select(),
            f.preventDefault(b),
            !0
        }
      })
    };
    UE.plugins.rowspacing = function () {
      this.setOpt({
        rowspacingtop: ["5", "10", "15", "20", "25"],
        rowspacingbottom: ["5", "10", "15", "20", "25"]
      });
      this.commands.rowspacing = {
        execCommand: function (d, b, c) {
          this.execCommand("paragraph", "p", {
            style: "margin-" + c + ":" + b + "px"
          });
          return !0
        },
        queryCommandValue: function (d, b) {
          return (d = f.filterNodeList(this.selection.getStartElementPath(), function (b) {
            return f.isBlockElm(b)
          })) ? (b = f.getComputedStyle(d, "margin-" + b).replace(/[^\d]/g, "")) ? b : 0 : 0
        }
      }
    };


    UE.plugins.lineheight = function () {
      this.setOpt({
        lineheight: "1 1.5 1.75 2 3 4 5".split(" ")
      });
      this.commands.lineheight = {
        execCommand: function (d, b) {
          this.execCommand("paragraph", "p", {
            style: "line-height:" + ("1" == b ? "normal" : b + "em")
          });
          return !0
        },
        queryCommandValue: function () {
          var d = f.filterNodeList(this.selection.getStartElementPath(), function (b) {
            return f.isBlockElm(b)
          });
          if (d) {
            var b = f.getComputedStyle(d, "line-height");
            if (0 < b.indexOf("px")) {
              d = f.getComputedStyle(d, "font-size");
              if (0 < d.indexOf("px")) return d == b ? 1 : b = Math.round(100 * parseInt(b) / parseInt(d)) / 100;
              if (0 < d.indexOf("em")) return b = Math.round(100 * parseInt(b) / (16 * parseInt(d))) / 100
            }
            return "normal" == b ? 1 : b.replace(/[^\d.]*/ig, "")
          }
        }
      }
    };
    UE.plugins.letterspacing = function () {
      this.setOpt({
        letterspacing: "0 1.5 1.75 2 3 4 5".split(" ")
      });
      this.commands.letterspacing = {
        execCommand: function (d, b) {
          this.execCommand("paragraph", "p", {
            style: "letter-spacing:" + b + "px"
          });
          return !0
        },
        queryCommandValue: function () {
          var d = f.filterNodeList(this.selection.getStartElementPath(), function (b) {
            return f.isBlockElm(b)
          });
          if (d) return f.getComputedStyle(d, "letter-spacing").replace(/[^\d.]*/ig, "")
        }
      }
    };
    UE.plugins.outpadding = function () {
      var d = this;
      d.setOpt({
        outpadding: "0 5 10 15 20 25 30 35 40 45 50".split(" ")
      });
      d.commands.outpadding = {
        execCommand: function (b, c, a) {
          d.undoManger.save();
          d.selection.getRange();
          if ("" != getSelectionHtml()) return d.execCommand("paragraph", "p", {
            style: "margin-left:" + c + "px;margin-right:" + c + "px"
          }, "outpadding"),
            !0;
          if (1 == a) {
            if (b = d.currentActive135Item()) d.undoManger.save(),
              b.css("padding", "0 " + c + "px")
          } else b = d.getContent(),
            b = jQuery("<div>" + b + " </div>"),
            1 == b.find("> *").length && b.find("> *:first").hasClass("article135") ? jQuery(d.document).find(".article135:first").css("padding", "0 " + c + "px") : (d.backuprange(), jQuery('<section id="article135" class="article135" style="box-sizing: border-box;padding:0 ' + c + 'px;"></section>').appendTo(d.document.body), jQuery(d.document.body).find("> *").each(function (a) {
              "article135" != jQuery(this).attr("id") && jQuery(this).appendTo(jQuery("#article135", d.document.body))
            }), jQuery(".article135", d.document.body).removeAttr("id"), d.restorerange());
          d.undoManger.save();
          return !0
        },
        queryCommandValue: function () {
          return 0 < jQuery(d.document).find(".article135").length ? jQuery(d.document).find(".article135:first").css("padding-left").replace(/[^\d.]*/ig, "") : 0
        }
      }
    };
    UE.commands.cleardoc = {
      execCommand: function (d) {
        var b = this;
        d = b.options.enterTag;
        var c = b.selection.getRange();
        "br" == d ? (b.body.innerHTML = "<br/>", c.setStart(b.body, 0).setCursor()) : (b.body.innerHTML = '<section data-role="paragraph" class="_135editor"><p><br/></p></section>', c.setStart(b.body.firstChild.firstChild, 0).setCursor(!1, !0));
        setTimeout(function () {
          b.fireEvent("clearDoc")
        }, 0)
      }
    };
    UE.plugins.wordcount = function () {
      var d = this;
      d.setOpt("wordCount", !0);
      d.addListener("contentchange", function () {
        d.fireEvent("wordcount")
      });
      var b;
      d.addListener("ready", function () {
        var c = this;
        f.on(c.body, "keyup", function (a) {
          (a.keyCode || a.which) in {
            16: 1,
            18: 1,
            20: 1,
            37: 1,
            38: 1,
            39: 1,
            40: 1
          } || (clearTimeout(b), b = setTimeout(function () {
            c.fireEvent("wordcount")
          }, 200))
        })
      })
    };
    UE.plugins.pagebreak = function () {
      // function d(a) {
      //   if (f.isEmptyBlock(a)) {
      //     for (var b = a.firstChild, e; b && 1 == b.nodeType && f.isEmptyBlock(b);) e = b,
      //       b = b.firstChild;
      // //     !e && (e = a);
      //     f.fillNode(c.document, e)
      //   }
      // }
      // function b(a) {
      //   return a && 1 == a.nodeType && "HR" == a.tagName && "pagebreak" == a.className
      // }
      // var c = this,
      //   a = ["td"];
      // c.setOpt("pageBreakTag", "_ueditor_page_break_tag_");
      // c.ready(function () {
      //   p.cssRule("pagebreak", ".pagebreak{display:block;clear:both !important;cursor:default !important;width: 100% !important;margin:0;}", c.document)
      // });
      // c.addInputRule(function (a) {
      //   a.traversal(function (a) {
      //     if ("text" == a.type && a.data == c.options.pageBreakTag) {
      //       var b = UE.uNode.createElement('<hr class="pagebreak" noshade="noshade" size="5" style="-webkit-user-select: none;">');
      //       a.parentNode.insertBefore(b, a);
      //       a.parentNode.removeChild(a)
      //     }
      //   })
      // });
      // c.addOutputRule(function (a) {
      //   p.each(a.getNodesByTagName("hr"), function (a) {
      //     if ("pagebreak" == a.getAttr("class")) {
      //       var b = UE.uNode.createText(c.options.pageBreakTag);
      //       a.parentNode.insertBefore(b, a);
      //       a.parentNode.removeChild(a)
      //     }
      //   })
      // });
      // c.commands.pagebreak = {
      //   execCommand: function () {
      //     var g = c.selection.getRange(),
      //       h = c.document.createElement("hr");
      //     f.setAttributes(h, {
      //       "class": "pagebreak",
      //       noshade: "noshade",
      //       size: "5"
      //     });
      //     f.unSelectable(h);
      //     var e = f.findParentByTagName(g.startContainer, a, !0);
      //     if (e) switch (e.tagName) {
      //       case "TD":
      //         e = e.parentNode,
      //           e.previousSibling ? (e.parentNode.insertBefore(h, e), g = f.findParents(h)) : (g = f.findParentByTagName(e, "table"), g.parentNode.insertBefore(h, g), g = f.findParents(h, !0)),
      //           e = g[1],
      //         h !== e && f.breakParent(h, e),
      //           c.fireEvent("afteradjusttable", c.document)
      //     } else {
      //       if (!g.collapsed) for (g.deleteContents(), e = g.startContainer; !f.isBody(e) && f.isBlockElm(e) && f.isEmptyNode(e);) g.setStartBefore(e).collapse(!0),
      //         f.remove(e),
      //         e = g.startContainer;
      //       g.insertNode(h);
      //       for (e = h.parentNode; !f.isBody(e);) f.breakParent(h, e),
      //       (e = h.nextSibling) && f.isEmptyBlock(e) && f.remove(e),
      //         e = h.parentNode;
      //       e = h.nextSibling;
      //       var l = h.previousSibling;
      //       b(l) ? f.remove(l) : l && d(l);
      //       e ? (b(e) ? f.remove(e) : d(e), g.setEndAfter(h).collapse(!1)) : (e = c.document.createElement("p"), h.parentNode.appendChild(e), f.fillNode(c.document, e), g.setStart(e, 0).collapse(!0));
      //       g.select(!0)
      //     }
      //   }
      // }
    };
    UE.plugin.register("wordimage", function () {
      var d = this,
        b = [];
      return {
        commands: {
          wordimage: {
            execCommand: function () {
              for (var b = f.getElementsByTagName(d.body, "img"), a = [], g = 0, h; h = b[g++];)(h = h.getAttribute("word_img")) && a.push(h);
              return a
            },
            queryCommandState: function () {
              b = f.getElementsByTagName(d.body, "img");
              for (var c = 0, a; a = b[c++];) if (a.getAttribute("word_img")) return 1;
              return -1
            },
            notNeedUndo: !0
          }
        },
        // 从word粘过来的内容自定义处理，不用此处逻辑
        inputRule: function (b) {
          /*p.each(b.getNodesByTagName("img"), function (a) {
            var b = a.attrs,
              c = 128 > parseInt(b.width) || 43 > parseInt(b.height),
              e = d.options,
              l = e.UEDITOR_HOME_URL + "themes/default/images/spacer.gif";
            b.src && /^(?:(file:\/+))/.test(b.src) && a.setAttr({
              width: b.width,
              height: b.height,
              alt: b.alt,
              word_img: b.src,
              src: l,
              style: "background:url(" + (c ? e.themePath + e.theme + "/images/word.gif" : e.langPath + e.lang + "/images/localimage.png") + ") no-repeat center center;border:1px solid #ddd"
            })
          })*/
        }
      }
    });
    UE.plugins.dragdrop = function () {
      var d = this;
      d.ready(function () {
        f.on(this.body, "dragend", function () {
          var b = d.selection.getRange(),
            c = b.getClosedNode() || d.selection.getStart();
          if (c && "IMG" == c.tagName) {
            for (var a = c.previousSibling, g;
                 (g = c.nextSibling) && 1 == g.nodeType && "SPAN" == g.tagName && !g.firstChild;) f.remove(g);
            (!a || 1 != a.nodeType || f.isEmptyBlock(a)) && a || g && (!g || f.isEmptyBlock(g)) || (a && "P" == a.tagName && !f.isEmptyBlock(a) ? (a.appendChild(c), f.moveChild(g, a), f.remove(g)) : g && "P" == g.tagName && !f.isEmptyBlock(g) && g.insertBefore(c, g.firstChild), a && "P" == a.tagName && f.isEmptyBlock(a) && f.remove(a), g && "P" == g.tagName && f.isEmptyBlock(g) && f.remove(g), b.selectNode(c).select(), d.fireEvent("saveScene"))
          }
        })
      })
    };
    UE.plugins.undo = function () {
      function d(a, b) {
        if (a.length != b.length) return 0;
        for (var c = 0, e = a.length; c < e; c++) if (a[c] != b[c]) return 0;
        return 1
      }
      var b, c = this,
        a = c.options.maxUndoCount || 20,
        g = c.options.maxInputCount || 20,
        h = new RegExp(f.fillChar + "|</hr>", "gi"),
        e = {
          ol: 1,
          ul: 1,
          table: 1,
          tbody: 1,
          tr: 1,
          body: 1
        },
        l = c.options.autoClearEmptyNode;
      c.undoManger = new
      function () {
        this.list = [];
        this.index = 0;
        this.hasRedo = this.hasUndo = !1;
        this.undo = function () {
          if (this.hasUndo) {
            if (this.list[this.index - 1] || 1 != this.list.length) {
              for (; this.list[this.index].content == this.list[this.index - 1].content;) if (this.index--, 0 == this.index) return this.restore(0);
              this.restore(--this.index)
            } else {
              this.reset()
            }
          }
        };
        this.redo = function () {
          if (this.hasRedo) {
            for (; this.list[this.index].content == this.list[this.index + 1].content;) if (this.index++, this.index == this.list.length - 1) return this.restore(this.index);
            this.restore(++this.index)
          }
        };
        this.restore = function () {
          var a = this.editor,
            b = this.list[this.index],
            c = UE.htmlparser(b.content.replace(h, ""));
          a.options.autoClearEmptyNode = !1;
          a.filterInputRule(c);
          a.options.autoClearEmptyNode = l;
          a.document.body.innerHTML = c.toHtml();
          a.fireEvent("afterscencerestore");
          u.ie && p.each(f.getElementsByTagName(a.document, "td th caption p"), function (b) {
            f.isEmptyNode(b) && f.fillNode(a.document, b)
          });
          try {
            var d = (new D.Range(a.document)).moveToAddress(b.address);
            d.select(e[d.startContainer.nodeName.toLowerCase()])
          } catch (K) {}
          this.update();
          this.clearKey();
          a.fireEvent("reset", !0)
        };
        this.getScene = function () {
          var a = this.editor,
            b = a.selection.getRange().createAddress(!1, !0);
          a.fireEvent("beforegetscene");
          var c = UE.htmlparser(a.body.innerHTML);
          a.options.autoClearEmptyNode = !1;
          a.filterOutputRule(c);
          a.options.autoClearEmptyNode = l;
          c = c.toHtml();
          a.fireEvent("aftergetscene");
          return {
            address: b,
            content: c
          }
        };
        this.save = function (e, k) {
          clearTimeout(b);
          k = this.getScene(k);
          var g = this.list[this.index];
          g && g.content != k.content && c.trigger("contentchange");
          var l;
          if (l = g && g.content == k.content) e ? e = 1 : (e = g.address, g = k.address, e = e.collapsed != g.collapsed ? 0 : d(e.startAddress, g.startAddress) && d(e.endAddress, g.endAddress) ? 1 : 0),
            l = e;
          l || (this.list = this.list.slice(0, this.index + 1), this.list.push(k), this.list.length > a && this.list.shift(), this.index = this.list.length - 1, this.clearKey(), this.update())
        };
        this.update = function () {
          this.hasRedo = !! this.list[this.index + 1];
          this.hasUndo = !! this.list[this.index - 1]
        };
        this.reset = function () {
          this.list = [];
          this.index = 0;
          this.hasRedo = this.hasUndo = !1;
          this.clearKey()
        };
        this.clearKey = function () {
          n = 0
        }
      };
      c.undoManger.editor = c;
      c.addListener("saveScene", function () {
        var a = Array.prototype.splice.call(arguments, 1);
        this.undoManger.save.apply(this.undoManger, a)
      });
      c.addListener("reset", function (a, b) {
        b || this.undoManger.reset()
      });
      c.commands.redo = c.commands.undo = {
        execCommand: function (a) {
          this.undoManger[a]()
        },
        queryCommandState: function (a) {
          return this.undoManger["has" + ("undo" == a.toLowerCase() ? "Undo" : "Redo")] ? 0 : -1
        },
        notNeedUndo: 1
      };
      var k = {
          16: 1,
          17: 1,
          18: 1,
          37: 1,
          38: 1,
          39: 1,
          40: 1
        },
        n = 0,
        m = !1;
      c.addListener("ready", function () {
        f.on(this.body, "compositionstart", function () {
          m = !0
        });
        f.on(this.body, "compositionend", function () {
          m = !1
        })
      });
      c.addshortcutkey({
        Undo: "ctrl+90",
        Redo: "ctrl+89"
      });
      var q = !0;
      c.addListener("keydown", function (a, c) {
        var e = this;
        if (!(k[c.keyCode || c.which] || c.ctrlKey || c.metaKey || c.shiftKey || c.altKey)) {
          var d = function (a) {
            a.undoManger.save(!1, !0);
            a.fireEvent("selectionchange")
          };
          m || (e.selection.getRange().collapsed ? (0 == e.undoManger.list.length && e.undoManger.save(!0), clearTimeout(b), b = setTimeout(function () {
            if (m) var a = setInterval(function () {
              m || (d(e), clearInterval(a))
            }, 300);
            else d(e)
          }, 200), n++, n >= g && d(e)) : (e.undoManger.save(!1, !0), q = !1))
        }
      });
      c.addListener("keyup", function (a, b) {
        k[b.keyCode || b.which] || b.ctrlKey || b.metaKey || b.shiftKey || b.altKey || m || q || (this.undoManger.save(!1, !0), q = !0)
      });
      c.stopCmdUndo = function () {
        c.__hasEnterExecCommand = !0
      };
      c.startCmdUndo = function () {
        c.__hasEnterExecCommand = !1
      }
    };
    UE.plugin.register("copy", function () {
      function d() {
        ZeroClipboard.config({
          debug: !1,
          swfPath: b.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.swf"
        });
        var c = b.zeroclipboard = new ZeroClipboard;
        c.on("copy", function (a) {
          a = a.client;
          var c = b.selection.getRange(),
            d = document.createElement("div");
          d.appendChild(c.cloneContents());
          a.setText(d.innerText || d.textContent);
          a.setHtml(d.innerHTML);
          c.select()
        });
        c.on("mouseover mouseout", function (a) {
          var b = a.target;
          b && ("mouseover" == a.type ? f.addClass(b, "edui-state-hover") : "mouseout" == a.type && f.removeClasses(b, "edui-state-hover"))
        });
        c.on("wrongflash noflash", function () {
          ZeroClipboard.destroy()
        });
        b.fireEvent("zeroclipboardready", c)
      }
      var b = this;
      return {
        bindEvents: {
          ready: function () {
            u.ie || (window.ZeroClipboard ? d() : p.loadFile(document, {
              src: b.options.UEDITOR_HOME_URL + "third-party/zeroclipboard/ZeroClipboard.js" + versionStr,
              tag: "script",
              type: "text/javascript",
              defer: "defer"
            }, function () {
              d()
            }))
          }
        },
        commands: {
          copy: {
            execCommand: function (c) {
              b.document.execCommand("copy") || alert(b.getLang("copymsg"))
            }
          }
        }
      }
    });
    UE.plugins.paste = function () {
      //自定义粘贴事件
      function customGetClipboardData(e){
        var clipboardData = e.clipboardData || e.originalEvent && e.originalEvent.clipboardData;
        var pasteText = void 0,
            pasteHtml = void 0;
        if (clipboardData == null) {
            pasteText = window.clipboardData && window.clipboardData.getData('text');
        } else {
            pasteText = clipboardData.getData('text/plain');
            pasteHtml = clipboardData.getData('text/html');
        }
        if (!pasteHtml && pasteText) {
            pasteHtml = '<p>' + replaceHtmlSymbol(pasteText) + '</p>';
        }
        if (!pasteHtml) {
            return '';
        }

        // 过滤word中状态过来的无用字符
        var docSplitHtml = pasteHtml.split('</html>');
        if (docSplitHtml.length === 2) {
            pasteHtml = docSplitHtml[0];
        }

        // 过滤无用标签
        pasteHtml = pasteHtml.replace(/<(meta|script|link).+?>/igm, '');
        // 去掉注释
        pasteHtml = pasteHtml.replace(/<!--.*?-->/mg, '');

        // 保留样式
        pasteHtml = pasteHtml.replace(/\s*class=[\'|\"][^\'|^\"](!picture-illustrating)*[\'|\"]/igm, '');

        if (pasteHtml.indexOf('tooltip fade bottom in') > -1) {
            var pasteStr = $('<div>' + pasteHtml + '</div>');
            pasteStr.find('.tooltip.fade.bottom.in').remove();
            pasteHtml = pasteStr.html();
        }

        return pasteHtml;
    }
      function d(a, e) {
        if (typeof e === 'string') {
          var customClipboardData = e;
        } else {
            var customClipboardData=customGetClipboardData(e);
            if(customClipboardData && customClipboardData.indexOf('<embed')!=-1){
                e.preventDefault();
            }
        }
        var b = this.document;
        if (!b.getElementById("baidu_pastebin")) {
          var c = this.selection.getRange(),
            e = c.createBookmark(),
            d = b.createElement("div");
          d.id = "baidu_pastebin";
          u.webkit && d.appendChild(b.createTextNode(f.fillChar + f.fillChar));
          d.innerHTML = customClipboardData;
          b.body.appendChild(d);
          e.start.style.display = "";
          d.style.cssText = "position:absolute;width:1px;height:1px;overflow:hidden;left:-1000px;white-space:nowrap;top:" + f.getXY(e.start).y + "px";
          c.selectNodeContents(d).select(!0);
          console.log('d1', d.innerHTML);
          var pastebinHTML = d.innerHTML;
          setTimeout(function () {
            d.innerHTML = pastebinHTML;
            console.log('d2', d.innerHTML);
            if (u.webkit) for (var k = 0, g = b.querySelectorAll("#baidu_pastebin"), l; l = g[k++];) if (f.isEmptyNode(l)) f.remove(l);
            else {
              d = l;
              break
            }
            try {
              d.parentNode.removeChild(d)
            } catch (y) {}
            c.moveToBookmark(e).select(!0);
            a(d)
          }, 0)
        }
      }
      function b(a) {
        return a.replace(/<(\/?)([\w\-]+)([^>]*)>/gi, function (a, b, c, e) {
          c = c.toLowerCase();
          if ({
            img: 1
          }[c]) return a;
          e = e.replace(/([\w\-]*?)\s*=\s*(("([^"]*)")|('([^']*)')|([^\s>]+))/gi, function (a, b, c) {
            return {
              src: 1,
              href: 1,
              name: 1
            }[b.toLowerCase()] ? b + "=" + c + " " : ""
          });
          return {
            span: 1,
            div: 1
          }[c] ? "" : "<" + b + c + " " + p.trim(e) + ">"
        })
      }
      function c(c) {

        if (c.firstChild) {
          var d = f.getElementsByTagName(c, "span");
          var l = 0;
          for (var m; m = d[l++];)"_baidu_cut_start" != m.id && "_baidu_cut_end" != m.id || f.remove(m);
          if (u.webkit) {
            m = c.querySelectorAll("div br");
            for (l = 0; d = m[l++];) d = d.parentNode,
            "DIV" == d.tagName && 1 == d.childNodes.length && (d.innerHTML = "<p><br/></p>", f.remove(d));
            d = c.querySelectorAll("#baidu_pastebin");
            for (l = 0; m = d[l++];) {
              var q = a.document.createElement("p");
              for (m.parentNode.insertBefore(q, m); m.firstChild;) q.appendChild(m.firstChild);
              f.remove(m)
            }
            m = c.querySelectorAll("meta");
            for (l = 0; d = m[l++];) f.remove(d);
            m = c.querySelectorAll("br");
            for (l = 0; d = m[l++];) / ^ apple - /i.test(d.className)&&f.remove(d)}if(u.gecko)for(m=c.querySelectorAll("[_moz_dirty]"),l=0;d=m[l++];)d.removeAttribute("_moz_dirty");if(!u.ie)for(m=c.querySelectorAll("span.Apple-style-span"),l=0;d=m[l++];)f.remove(d,!0);l=c.innerHTML;l=UE.filterWord(l);c=UE.htmlparser(l);a.options.filterRules&&UE.filterNode(c,a.options.filterRules);a.filterInputRule(c);
            u.webkit&&((l=c.lastChild())&&"element"==l.type&&
            "br"==l.tagName&&c.removeChild(l)
            // 粘贴修改 清空空div逻辑先去掉
            // ,p.each(a.body.querySelectorAll("div")function(a){f.isEmptyBlock(a)&&f.remove(a,!0)})
          );
            l={html:c.toHtml()};
            a.fireEvent("beforepaste",l,c);          
            l.html&&(c=UE.htmlparser(l.html,!0),1===a.queryCommandState("pasteplain")?a.execCommand("insertHtml",UE.filterNode(c,a.options.filterTxtRules).toHtml(),!0):(UE.filterNode(c,a.options.filterTxtRules),g=c.toHtml(),h=l.html,e=a.selection.getRange().createAddress(!0),a.execCommand("insertHtml",!0===a.getOpt("retainOnlyLabelPasted")?b(h):h,!0)),a.fireEvent("afterpaste",l))}}
            var a=this;a.setOpt({retainOnlyLabelPasted:!1});
      var g,h,e;a.addListener("pasteTransfer",function(c,d){if(e&&g&&h&&g!=h){
        c=a.selection.getRange();c.moveToAddress(e,!0);
        if(!c.collapsed){for(;!f.isBody(c.startContainer);){
          var k=c.startContainer;
          if(1==k.nodeType){k=k.childNodes[c.startOffset];
            if(!k){c.setStartBefore(c.startContainer);
              continue
            }(k=k.previousSibling)&&3==k.nodeType&&(new RegExp("^[\n\r\t "+f.fillChar+"]*$")).test(k.nodeValue)&&c.setStartBefore(k)}
            if(0==c.startOffset)c.setStartBefore(c.startContainer);else break}
            for(;!f.isBody(c.endContainer);){k=c.endContainer;
              if(1==k.nodeType){
                k=k.childNodes[c.endOffset];
                if(!k){c.setEndAfter(c.endContainer);
                  continue}
                  (k=k.nextSibling)&&3==k.nodeType&&(new RegExp("^[\n\r\t"+f.fillChar+"]*$")).test(k.nodeValue)&&c.setEndAfter(k)}
                  if(c.endOffset==c.endContainer[3==c.endContainer.nodeType?"nodeValue":"childNodes"].length)c.setEndAfter(c.endContainer);
                  else break}
                }c.deleteContents();
                c.select(!0);
                a.__hasEnterExecCommand=!0;c=h;2===d?c=b(c):d&&(c=g);            
                a.execCommand("inserthtml",c,!0);a.__hasEnterExecCommand=!1;
                for(d=a.selection.getRange();
                !f.isBody(d.startContainer)&&!d.startOffset&&d.startContainer[3==d.startContainer.nodeType?"nodeValue":"childNodes"].length;)d.setStartBefore(d.startContainer);d=d.createAddress(!0);e.endAddress=d.startAddress}});
                a.addListener("ready",function(){f.on(a.body,"cut",function(){!a.selection.getRange().collapsed&&a.undoManger&&a.undoManger.save()});f.on(a.body,u.ie||u.opera?"keydown":"paste",function(b){(!u.ie&&!u.opera||(b.ctrlKey||b.metaKey)&&"86"==b.keyCode)&&d.call(a,function(a){c(a)},b)})});
      a.commands.paste={ 
        execCommand:function(b){u.ie?(d.call(a,function(a){c(a)},b),a.document.execCommand("paste")):alert(a.getLang("pastemsg"))}}};
        UE.plugins.pasteplain=function(){this.setOpt({pasteplain:!1,filterTxtRules:function(){function b(a){a.tagName="p";a.setStyle()}
      function c(a){a.parentNode.removeChild(a,!0)}return{"-":"script style object iframe embed input select",p:{$:{}},br:{$:{}},div:function(a){for(var b,c=UE.uNode.createElement("p");b=a.firstChild();)"text"!=b.type&&UE.dom.dtd.$block[b.tagName]?
          c.firstChild()?(a.parentNode.insertBefore(c,a),c=UE.uNode.createElement("p")):a.parentNode.insertBefore(b,a):c.appendChild(b);c.firstChild()&&a.parentNode.insertBefore(c,a);a.parentNode.removeChild(a)},ol:c,ul:c,dl:c,dt:c,dd:c,li:c,caption:b,th:b,tr:b,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,td:function(a){a.innerText();
            a.parentNode.removeChild(a,a.innerText())}}}()});var d=this.options.pasteplain;this.commands.pasteplain={queryCommandState:function(){return d?
        1:0},execCommand:function(){d=!d|0},notNeedUndo:1}};UE.plugins.list=function(){function d(a){var b=[],c;for(c in a)b.push(c);return b}function b(a){var b=a.className;return f.hasClass(a,/custom_/ ) ? b.match(/custom_(\w+)/)[1] : f.getStyle(a, "list-style-type")
    }
      function c(c, e) {
        p.each(f.getElementsByTagName(c, "ol ul"), function (d) {
          if (f.inDoc(d, c)) {
            var k = d.parentNode;
            if (k.tagName == d.tagName) {
              var l = b(d) || ("OL" == d.tagName ? "decimal" : "disc"),
                h = b(k) || ("OL" == k.tagName ? "decimal" : "disc");
              l == h && (l = p.indexOf(m[d.tagName], l), l = l + 1 == m[d.tagName].length ? 0 : l + 1, g(d, m[d.tagName][l]))
            }
            var v = 0;
            l = 2;
            f.hasClass(d, /custom_/) ? /[ou]l/i.test(k.tagName) && f.hasClass(k, /custom_/) || (l = 1) : /[ou]l/i.test(k.tagName) && f.hasClass(k, /custom_/) && (l = 3);
            (k = f.getStyle(d, "list-style-type")) && (d.style.cssText = "list-style-type:" + k);
            d.className = p.trim(d.className.replace(/list-paddingleft-\w+/, "")) + " list-paddingleft-" + l;
            p.each(f.getElementsByTagName(d, "li"), function (a) {
              a.style.cssText && (a.style.cssText = "");
              if (!a.firstChild) f.remove(a);
              else if (a.parentNode === d) {
                v++;
                if (f.hasClass(d, /custom_/)) {
                  var c = 1,
                    e = b(d);
                  if ("OL" == d.tagName) {
                    if (e) switch (e) {
                      case "cn":
                      case "cn1":
                      case "cn2":
                        10 < v && (0 == v % 10 || 10 < v && 20 > v) ? c = 2 : 20 < v && (c = 3);
                        break;
                      case "num2":
                        9 < v && (c = 2)
                    }
                    a.className = "list-" + n[e] + v + " list-" + e + "-paddingleft-" + c
                  } else a.className = "list-" + n[e] + " list-" + e + "-paddingleft"
                } else a.className = a.className.replace(/list-[\w\-]+/gi, "");
                c = a.getAttribute("class");
                null === c || c.replace(/\s/g, "") || f.removeAttributes(a, "class")
              }
            });
            !e && a(d, d.tagName.toLowerCase(), b(d) || f.getStyle(d, "list-style-type"), !0)
          }
        })
      }
      function a(a, e, d, k) {
        var g = a.nextSibling;
        g && 1 == g.nodeType && g.tagName.toLowerCase() == e && (b(g) || f.getStyle(g, "list-style-type") || ("ol" == e ? "decimal" : "disc")) == d && (f.moveChild(g, a), 0 == g.childNodes.length && f.remove(g));
        g && f.isFillChar(g) && f.remove(g);
        (g = a.previousSibling) && 1 == g.nodeType && g.tagName.toLowerCase() == e && (b(g) || f.getStyle(g, "list-style-type") || ("ol" == e ? "decimal" : "disc")) == d && f.moveChild(a, g);
        g && f.isFillChar(g) && f.remove(g);
        !k && f.isEmptyBlock(a) && f.remove(a);
        b(a) && c(a.ownerDocument, !0)
      }
      function g(a, b) {
        n[b] && (a.className = "custom_" + b);
        try {
          f.setStyle(a, "list-style-type", b)
        } catch (y) {}
      }
      function h(a) {
        var b = a.previousSibling;
        b && f.isEmptyBlock(b) && f.remove(b);
        (b = a.nextSibling) && f.isEmptyBlock(b) && f.remove(b)
      }
      function e(a) {
        for (; a && !f.isBody(a);) {
          if ("TABLE" == a.nodeName) return null;
          if ("LI" == a.nodeName) return a;
          a = a.parentNode
        }
      }
      var l = this,
        k = {
          TD: 1,
          PRE: 1,
          BLOCKQUOTE: 1
        },
        n = {
          cn: "cn-1-",
          cn1: "cn-2-",
          cn2: "cn-3-",
          num: "num-1-",
          num1: "num-2-",
          num2: "num-3-",
          dash: "dash",
          dot: "dot"
        };
      l.setOpt({
        autoTransWordToList: !1,
        insertorderedlist: {
          num: "",
          num1: "",
          num2: "",
          cn: "",
          cn1: "",
          cn2: "",
          decimal: "",
          "lower-alpha": "",
          "lower-roman": "",
          "upper-alpha": "",
          "upper-roman": ""
        },
        insertunorderedlist: {
          circle: "",
          disc: "",
          square: "",
          dash: "",
          dot: ""
        },
        listDefaultPaddingLeft: "30",
        listiconpath: "http://bs.baidu.com/listicon/",
        maxListLevel: -1,
        disablePInList: !1
      });
      var m = {
          OL: d(l.options.insertorderedlist),
          UL: d(l.options.insertunorderedlist)
        },
        q = l.options.listiconpath,
        t;
      for (t in n) l.options.insertorderedlist.hasOwnProperty(t) || l.options.insertunorderedlist.hasOwnProperty(t) || delete n[t];
      l.ready(function () {
        var a = [],
          b;
        for (b in n) {
          if ("dash" == b || "dot" == b) a.push("li.list-" + n[b] + "{background-image:url(" + q + n[b] + ".gif)}"),
            a.push("ul.custom_" + b + "{list-style:none;}ul.custom_" + b + " li{background-position:0 3px;background-repeat:no-repeat}");
          else {
            for (var c = 0; 99 > c; c++) a.push("li.list-" + n[b] + c + "{background-image:url(" + q + "list-" + n[b] + c + ".gif)}");
            a.push("ol.custom_" + b + "{list-style:none;}ol.custom_" + b + " li{background-position:0 3px;background-repeat:no-repeat}")
          }
          switch (b) {
            case "cn":
              a.push("li.list-" + b + "-paddingleft-1{padding-left:25px}");
              a.push("li.list-" + b + "-paddingleft-2{padding-left:40px}");
              a.push("li.list-" + b + "-paddingleft-3{padding-left:55px}");
              break;
            case "cn1":
              a.push("li.list-" + b + "-paddingleft-1{padding-left:30px}");
              a.push("li.list-" + b + "-paddingleft-2{padding-left:40px}");
              a.push("li.list-" + b + "-paddingleft-3{padding-left:55px}");
              break;
            case "cn2":
              a.push("li.list-" + b + "-paddingleft-1{padding-left:40px}");
              a.push("li.list-" + b + "-paddingleft-2{padding-left:55px}");
              a.push("li.list-" + b + "-paddingleft-3{padding-left:68px}");
              break;
            case "num":
            case "num1":
              a.push("li.list-" + b + "-paddingleft-1{padding-left:25px}");
              break;
            case "num2":
              a.push("li.list-" + b + "-paddingleft-1{padding-left:35px}");
              a.push("li.list-" + b + "-paddingleft-2{padding-left:40px}");
              break;
            case "dash":
              a.push("li.list-" + b + "-paddingleft{padding-left:35px}");
              break;
            case "dot":
              a.push("li.list-" + b + "-paddingleft{padding-left:20px}")
          }
        }
        a.push(".list-paddingleft-1{padding-left:0}");
        a.push(".list-paddingleft-2{padding-left:" + l.options.listDefaultPaddingLeft + "px}");
        a.push(".list-paddingleft-3{padding-left:" + 2 * l.options.listDefaultPaddingLeft + "px}");
        p.cssRule("list", "ol,ul{margin:0;pading:0;" + (u.ie ? "" : "width:95%") + "}" + a.join("\n"), l.document)
      });
      l.ready(function () {
        f.on(l.body, "cut", function () {
          setTimeout(function () {
            var a = l.selection.getRange(),
              b;
            if (!a.collapsed && (b = f.findParentByTagName(a.startContainer, "li", !0)) && !b.nextSibling && f.isEmptyBlock(b)) {
              b = b.parentNode;
              var c;
              (c = b.previousSibling) ? (f.remove(b), a.setStartAtLast(c).collapse(!0)) : (c = b.nextSibling) ? (f.remove(b), a.setStartAtFirst(c).collapse(!0)) : (c = l.document.createElement("p"), f.fillNode(l.document, c), b.parentNode.insertBefore(c, b), f.remove(b), a.setStart(c, 0).collapse(!0));
              a.select(!0)
            }
          })
        })
      });
      l.addListener("beforepaste", function (a, c) {
        var e = this.selection.getRange(),
          d = UE.htmlparser(c.html, !0);
        if (e = f.findParentByTagName(e.startContainer, "li", !0)) {
          var k = e.parentNode;
          p.each(d.getNodesByTagName("OL" == k.tagName ? "ul" : "ol"), function (c) {
            c.tagName = k.tagName;
            c.setAttr();
            if (c.parentNode === d) a = b(k) || ("OL" == k.tagName ? "decimal" : "disc");
            else {
              var e = c.parentNode.getAttr("class");
              (a = e && /custom_/.test(e) ? e.match(/custom_(\w+)/)[1] : c.parentNode.getStyle("list-style-type")) || (a = "OL" == k.tagName ? "decimal" : "disc")
            }
            e = p.indexOf(m[k.tagName], a);
            c.parentNode !== d && (e = e + 1 == m[k.tagName].length ? 0 : e + 1);
            e = m[k.tagName][e];
            n[e] ? c.setAttr("class", "custom_" + e) : c.setStyle("list-style-type", e)
          })
        }
        c.html = d.toHtml()
      });
      !0 === l.getOpt("disablePInList") && l.addOutputRule(function (a) {
        p.each(a.getNodesByTagName("li"), function (a) {
          var b = [],
            c = 0;
          p.each(a.children, function (e) {
            if ("p" == e.tagName) {
              for (var d; d = e.children.pop();) b.splice(c, 0, d),
                d.parentNode = a,
                lastNode = d;
              d = b[b.length - 1];
              d && "element" == d.type && "br" == d.tagName || (e = UE.uNode.createElement("br"), e.parentNode = a, b.push(e));
              c = b.length
            }
          });
          b.length && (a.children = b)
        })
      });
      l.addInputRule(function (a) {
        p.each(a.getNodesByTagName("li"), function (a) {
          for (var b = UE.uNode.createElement("p"), c = 0, e; e = a.children[c];)"text" == e.type || x.p[e.tagName] ? b.appendChild(e) : b.firstChild() ? (a.insertBefore(b, e), b = UE.uNode.createElement("p"), c += 2) : c++;
          (b.firstChild() && !b.parentNode || !a.firstChild()) && a.appendChild(b);
          b.firstChild() || b.innerHTML(u.ie ? "&nbsp;" : "<br/>");
          a = a.firstChild();
          (b = a.lastChild()) && "text" == b.type && /^\s*$/.test(b.data) && a.removeChild(b)
        });
        if (l.options.autoTransWordToList) {
          var b = function (a, b) {
              if ((b = b.firstChild()) && "element" == b.type && "span" == b.tagName && /Wingdings|Symbol/.test(b.getStyle("font-family"))) {
                for (var d in e) if (e[d] == b.data) return d;
                return "disc"
              }
              for (d in c) if (c[d].test(a)) return d
            },
            c = {
              num1: /^\d+\)/,
              decimal: /^\d+\./,
              "lower-alpha": /^[a-z]+\)/,
              "upper-alpha": /^[A-Z]+\./,
              cn: /^[\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+[\u3001]/,
              cn2: /^\([\u4E00\u4E8C\u4E09\u56DB\u516d\u4e94\u4e03\u516b\u4e5d]+\)/
            },
            e = {
              square: "n"
            };
          p.each(a.getNodesByTagName("p"), function (a) {
            if ("MsoListParagraph" == a.getAttr("class")) {
              a.setStyle("margin", "");
              a.setStyle("margin-left", "");
              a.setAttr("class", "");
              var e, d, k = a;
              if ("li" != a.parentNode.tagName && (d = b(a.innerText(), a))) {
                var g = UE.uNode.createElement(l.options.insertorderedlist.hasOwnProperty(d) ? "ol" : "ul");
                for (n[d] ? g.setAttr("class", "custom_" + d) : g.setStyle("list-style-type", d); a && "li" != a.parentNode.tagName && b(a.innerText(), a);) {
                  (e = a.nextSibling()) || a.parentNode.insertBefore(g, a);
                  var h = g,
                    f = d;
                  if ("ol" == h.tagName) if (u.ie) {
                    var m = a.firstChild();
                    "element" == m.type && "span" == m.tagName && c[f].test(m.innerText()) && a.removeChild(m)
                  } else a.innerHTML(a.innerHTML().replace(c[f], ""));
                  else a.removeChild(a.firstChild());
                  f = UE.uNode.createElement("li");
                  f.appendChild(a);
                  h.appendChild(f);
                  a = e
                }!g.parentNode && a && a.parentNode && a.parentNode.insertBefore(g, a)
              }(e = k.firstChild()) && "element" == e.type && "span" == e.tagName && /^\s*(&nbsp;)+\s*$/.test(e.innerText()) && e.parentNode.removeChild(e)
            }
          })
        }
      });
      l.addListener("contentchange", function () {
        c(l.document)
      });
      l.addListener("keydown", function (a, b) {
        function c() {
          b.preventDefault ? b.preventDefault() : b.returnValue = !1;
          l.fireEvent("contentchange");
          l.undoManger && l.undoManger.save()
        }
        function e(a, b) {
          for (; a && !f.isBody(a) && !b(a);) {
            if (1 == a.nodeType && /[ou]l/i.test(a.tagName)) return a;
            a = a.parentNode
          }
          return null
        }
        a = b.keyCode || b.which;
        if (13 == a && !b.shiftKey) {
          var d = l.selection.getRange(),
            k = f.findParent(d.startContainer, function (a) {
              return f.isBlockElm(a)
            }, !0),
            g = f.findParentByTagName(d.startContainer, "li", !0);
          k && "PRE" != k.tagName && !g && (g = k.innerHTML.replace(new RegExp(f.fillChar, "g"), ""), /^\s*1\s*\.[^\d]/.test(g) && (k.innerHTML = g.replace(/^\s*1\s*\./, ""), d.setStartAtLast(k).collapse(!0).select(), l.__hasEnterExecCommand = !0, l.execCommand("insertorderedlist"), l.__hasEnterExecCommand = !1));
          d = l.selection.getRange();
          k = e(d.startContainer, function (a) {
            return "TABLE" == a.tagName
          });
          g = d.collapsed ? k : e(d.endContainer, function (a) {
            return "TABLE" == a.tagName
          });
          if (k && g && k === g) {
            if (!d.collapsed) if (k = f.findParentByTagName(d.startContainer, "li", !0), g = f.findParentByTagName(d.endContainer, "li", !0), k && g && k === g) {
              if (d.deleteContents(), (g = f.findParentByTagName(d.startContainer, "li", !0)) && f.isEmptyBlock(g)) {
                q = g.previousSibling;
                next = g.nextSibling;
                k = l.document.createElement("p");
                f.fillNode(l.document, k);
                n = g.parentNode;
                q && next ? (d.setStart(next, 0).collapse(!0).select(!0), f.remove(g)) : ((q || next) && q ? g.parentNode.parentNode.insertBefore(k, n.nextSibling) : n.parentNode.insertBefore(k, n), f.remove(g), n.firstChild || f.remove(n), d.setStart(k, 0).setCursor());
                c();
                return
              }
            } else {
              k = d.cloneRange();
              var m = k.collapse(!1).createBookmark();
              d.deleteContents();
              k.moveToBookmark(m);
              g = f.findParentByTagName(k.startContainer, "li", !0);
              h(g);
              k.select();
              c();
              return
            }
            if (g = f.findParentByTagName(d.startContainer, "li", !0)) {
              if (f.isEmptyBlock(g)) {
                m = d.createBookmark();
                var n = g.parentNode;
                g !== n.lastChild ? (f.breakParent(g, n), h(g)) : (n.parentNode.insertBefore(g, n.nextSibling), f.isEmptyNode(n) && f.remove(n));
                if (!x.$list[g.parentNode.tagName]) if (f.isBlockElm(g.firstChild)) f.remove(g, !0);
                else {
                  k = l.document.createElement("p");
                  for (g.parentNode.insertBefore(k, g); g.firstChild;) k.appendChild(g.firstChild);
                  f.remove(g)
                }
                d.moveToBookmark(m).select()
              } else {
                k = g.firstChild;
                if (!k || !f.isBlockElm(k)) {
                  k = l.document.createElement("p");
                  for (!g.firstChild && f.fillNode(l.document, k); g.firstChild;) k.appendChild(g.firstChild);
                  g.appendChild(k)
                }
                m = l.document.createElement("span");
                d.insertNode(m);
                f.breakParent(m, g);
                q = m.nextSibling;
                k = q.firstChild;
                k || (k = l.document.createElement("p"), f.fillNode(l.document, k), q.appendChild(k));
                f.isEmptyNode(k) && (k.innerHTML = "", f.fillNode(l.document, k));
                d.setStart(k, 0).collapse(!0).shrinkBoundary().select();
                f.remove(m);
                var q = q.previousSibling;
                q && f.isEmptyBlock(q) && (q.innerHTML = "<p></p>", f.fillNode(l.document, q.firstChild))
              }
              c()
            }
          }
        }
        if (8 == a && (d = l.selection.getRange(), d.collapsed && f.isStartInblock(d) && (k = d.cloneRange().trimBoundary(), (g = f.findParentByTagName(d.startContainer, "li", !0)) && f.isStartInblock(k)))) if ((k = f.findParentByTagName(d.startContainer, "p", !0)) && k !== g.firstChild) n = f.findParentByTagName(k, ["ol", "ul"]),
          f.breakParent(k, n),
          h(k),
          l.fireEvent("contentchange"),
          d.setStart(k, 0).setCursor(!1, !0),
          l.fireEvent("saveScene"),
          f.preventDefault(b);
        else if (g && (q = g.previousSibling)) {
          if (46 != a || !g.childNodes.length) {
            x.$list[q.tagName] && (q = q.lastChild);
            l.undoManger && l.undoManger.save();
            k = g.firstChild;
            if (f.isBlockElm(k)) if (f.isEmptyNode(k)) for (q.appendChild(k), d.setStart(k, 0).setCursor(!1, !0); g.firstChild;) q.appendChild(g.firstChild);
            else m = l.document.createElement("span"),
                d.insertNode(m),
              f.isEmptyBlock(q) && (q.innerHTML = ""),
                f.moveChild(g, q),
                d.setStartBefore(m).collapse(!0).select(!0),
                f.remove(m);
            else if (f.isEmptyNode(g)) k = l.document.createElement("p"),
              q.appendChild(k),
              d.setStart(k, 0).setCursor();
            else for (d.setEnd(q, q.childNodes.length).collapse().select(!0); g.firstChild;) q.appendChild(g.firstChild);
            f.remove(g);
            l.fireEvent("contentchange");
            l.fireEvent("saveScene");
            f.preventDefault(b)
          }
        } else if (g && !g.previousSibling) {
          n = g.parentNode;
          m = d.createBookmark();
          if (f.isTagNode(n.parentNode, "ol ul")) n.parentNode.insertBefore(g, n);
          else {
            for (; g.firstChild;) n.parentNode.insertBefore(g.firstChild, n);
            f.remove(g)
          }
          f.isEmptyNode(n) && f.remove(n);
          d.moveToBookmark(m).setCursor(!1, !0);
          l.fireEvent("contentchange");
          l.fireEvent("saveScene");
          f.preventDefault(b)
        }
      });
      l.addListener("keyup", function (c, e) {
        if (8 == (e.keyCode || e.which)) {
          c = l.selection.getRange();
          var d;
          (d = f.findParentByTagName(c.startContainer, ["ol", "ul"], !0)) && a(d, d.tagName.toLowerCase(), b(d) || f.getComputedStyle(d, "list-style-type"), !0)
        }
      });
      l.addListener("tabkeydown", function () {
        function c(a) {
          if (-1 != l.options.maxListLevel) {
            a = a.parentNode;
            for (var b = 0;
                 /[ou]l/i.test(a.tagName);) b++,
              a = a.parentNode;
            if (b >= l.options.maxListLevel) return !0
          }
        }
        var e = l.selection.getRange(),
          d = f.findParentByTagName(e.startContainer, "li", !0);
        if (d) if (e.collapsed) {
          if (c(d)) return !0;
          var k = d.parentNode,
            h = l.document.createElement(k.tagName),
            n = p.indexOf(m[h.tagName], b(k) || f.getComputedStyle(k, "list-style-type"));
          n = n + 1 == m[h.tagName].length ? 0 : n + 1;
          n = m[h.tagName][n];
          g(h, n);
          if (f.isStartInblock(e)) {
            l.fireEvent("saveScene");
            var q = e.createBookmark();
            k.insertBefore(h, d);
            h.appendChild(d);
            a(h, h.tagName.toLowerCase(), n);
            l.fireEvent("contentchange");
            e.moveToBookmark(q).select(!0);
            return !0
          }
        } else {
          l.fireEvent("saveScene");
          q = e.createBookmark();
          k = 0;
          h = f.findParents(d);
          for (var t; t = h[k++];) if (f.isTagNode(t, "ol ul")) {
            var r = t;
            break
          }
          t = d;
          if (q.end) for (; t && !(f.getPosition(t, q.end) & f.POSITION_FOLLOWING);) if (c(t)) t = f.getNextDomNode(t, !1, null, function (a) {
            return a !== r
          });
          else {
            k = t.parentNode;
            h = l.document.createElement(k.tagName);
            n = p.indexOf(m[h.tagName], b(k) || f.getComputedStyle(k, "list-style-type"));
            n = m[h.tagName][n + 1 == m[h.tagName].length ? 0 : n + 1];
            g(h, n);
            for (k.insertBefore(h, t); t && !(f.getPosition(t, q.end) & f.POSITION_FOLLOWING);) {
              d = t.nextSibling;
              h.appendChild(t);
              if (!d || f.isTagNode(d, "ol ul")) {
                if (d) for (;
                  (d = d.firstChild) && "LI" != d.tagName;);
                else d = f.getNextDomNode(t, !1, null, function (a) {
                  return a !== r
                });
                break
              }
              t = d
            }
            a(h, h.tagName.toLowerCase(), n);
            t = d
          }
          l.fireEvent("contentchange");
          e.moveToBookmark(q).select();
          return !0
        }
      });
      l.commands.insertorderedlist = l.commands.insertunorderedlist = {
        execCommand: function (c, d) {
          d || (d = "insertorderedlist" == c.toLowerCase() ? "decimal" : "disc");
          var l = this.selection.getRange(),
            h = function (a) {
              return 1 == a.nodeType ? "br" != a.tagName.toLowerCase() : !f.isWhitespace(a)
            },
            m = "insertorderedlist" == c.toLowerCase() ? "ol" : "ul",
            n = this.document.createDocumentFragment();
          l.adjustmentBoundary().shrinkBoundary();
          var q = l.createBookmark(!0),
            t = e(this.document.getElementById(q.start)),
            v = 0,
            w = e(this.document.getElementById(q.end)),
            p = 0,
            r, u;
          if (t || w) {
            t && (r = t.parentNode);
            q.end || (w = t);
            w && (u = w.parentNode);
            if (r === u) {
              for (; t !== w;) {
                var B = t;
                t = t.nextSibling;
                if (!f.isBlockElm(B.firstChild)) {
                  for (h = this.document.createElement("p"); B.firstChild;) h.appendChild(B.firstChild);
                  B.appendChild(h)
                }
                n.appendChild(B)
              }
              B = this.document.createElement("span");
              r.insertBefore(B, w);
              if (!f.isBlockElm(w.firstChild)) {
                for (h = this.document.createElement("p"); w.firstChild;) h.appendChild(w.firstChild);
                w.appendChild(h)
              }
              n.appendChild(w);
              f.breakParent(B, r);
              f.isEmptyNode(B.previousSibling) && f.remove(B.previousSibling);
              f.isEmptyNode(B.nextSibling) && f.remove(B.nextSibling);
              h = b(r) || f.getComputedStyle(r, "list-style-type") || ("insertorderedlist" == c.toLowerCase() ? "decimal" : "disc");
              if (r.tagName.toLowerCase() == m && h == d) {
                w = 0;
                for (w = this.document.createDocumentFragment(); h = n.firstChild;) if (f.isTagNode(h, "ol ul")) w.appendChild(h);
                else for (; h.firstChild;) w.appendChild(h.firstChild),
                    f.remove(h);
                B.parentNode.insertBefore(w, B)
              } else {
                var E = this.document.createElement(m);
                g(E, d);
                E.appendChild(n);
                B.parentNode.insertBefore(E, B)
              }
              f.remove(B);
              E && a(E, m, d);
              l.moveToBookmark(q).select();
              return
            }
            if (t) {
              for (; t;) {
                B = t.nextSibling;
                if (f.isTagNode(t, "ol ul")) n.appendChild(t);
                else {
                  E = this.document.createDocumentFragment();
                  for (c = 0; t.firstChild;) f.isBlockElm(t.firstChild) && (c = 1),
                    E.appendChild(t.firstChild);
                  c ? n.appendChild(E) : (c = this.document.createElement("p"), c.appendChild(E), n.appendChild(c));
                  f.remove(t)
                }
                t = B
              }
              r.parentNode.insertBefore(n, r.nextSibling);
              f.isEmptyNode(r) ? (l.setStartBefore(r), f.remove(r)) : l.setStartAfter(r);
              v = 1
            }
            if (w && f.inDoc(u, this.document)) {
              for (t = u.firstChild; t && t !== w;) {
                B = t.nextSibling;
                if (f.isTagNode(t, "ol ul")) n.appendChild(t);
                else {
                  E = this.document.createDocumentFragment();
                  for (c = 0; t.firstChild;) f.isBlockElm(t.firstChild) && (c = 1),
                    E.appendChild(t.firstChild);
                  c ? n.appendChild(E) : (c = this.document.createElement("p"), c.appendChild(E), n.appendChild(c));
                  f.remove(t)
                }
                t = B
              }
              B = f.createElement(this.document, "div", {
                tmpDiv: 1
              });
              f.moveChild(w, B);
              n.appendChild(B);
              f.remove(w);
              u.parentNode.insertBefore(n, u);
              l.setEndBefore(u);
              f.isEmptyNode(u) && f.remove(u);
              p = 1
            }
          }
          v || l.setStartBefore(this.document.getElementById(q.start));
          q.end && !p && l.setEndAfter(this.document.getElementById(q.end));
          l.enlarge(!0, function (a) {
            return k[a.tagName]
          });
          n = this.document.createDocumentFragment();
          w = l.createBookmark();
          r = f.getNextDomNode(w.start, !1, h);
          E = l.cloneRange();
          for (v = f.isBlockElm; r && r !== w.end && f.getPosition(r, w.end) & f.POSITION_PRECEDING;) if (3 == r.nodeType || x.li[r.tagName]) if (1 == r.nodeType && x.$list[r.tagName]) {
            for (; r.firstChild;) n.appendChild(r.firstChild);
            t = f.getNextDomNode(r, !1, h);
            f.remove(r);
            r = t
          } else {
            t = r;
            for (E.setStartBefore(r); r && r !== w.end && (!v(r) || f.isBookmarkNode(r));) t = r,
              r = f.getNextDomNode(r, !1, null, function (a) {
                return !k[a.tagName]
              });
            r && v(r) && (B = f.getNextDomNode(t, !1, h)) && f.isBookmarkNode(B) && (r = f.getNextDomNode(B, !1, h), t = B);
            E.setEndAfter(t);
            r = f.getNextDomNode(t, !1, h);
            B = l.document.createElement("li");
            B.appendChild(E.extractContents());
            if (f.isEmptyNode(B)) {
              for (t = l.document.createElement("p"); B.firstChild;) t.appendChild(B.firstChild);
              B.appendChild(t)
            }
            n.appendChild(B)
          } else r = f.getNextDomNode(r, !0, h);
          l.moveToBookmark(w).collapse(!0);
          E = this.document.createElement(m);
          g(E, d);
          E.appendChild(n);
          l.insertNode(E);
          a(E, m, d);
          w = 0;
          for (d = f.getElementsByTagName(E, "div"); h = d[w++];) h.getAttribute("tmpDiv") && f.remove(h, !0);
          l.moveToBookmark(q).select()
        },
        queryCommandState: function (a) {
          a = "insertorderedlist" == a.toLowerCase() ? "ol" : "ul";
          for (var b = this.selection.getStartElementPath(), c = 0, e;
               (e = b[c++]) && "TABLE" != e.nodeName;) if (a == e.nodeName.toLowerCase()) return 1;
          return 0
        },
        queryCommandValue: function (a) {
          a = "insertorderedlist" == a.toLowerCase() ? "ol" : "ul";
          for (var c =
            this.selection.getStartElementPath(), e, d = 0, k; k = c[d++];) {
            if ("TABLE" == k.nodeName) {
              e = null;
              break
            }
            if (a == k.nodeName.toLowerCase()) {
              e = k;
              break
            }
          }
          return e ? b(e) || f.getComputedStyle(e, "list-style-type") : null
        }
      }
    };
    (function () {
      var d = {
        textarea: function (b, c) {
          var a = c.ownerDocument.createElement("textarea");
          a.style.cssText = "position:absolute;resize:none;width:100%;height:100%;border:0;padding:0;margin:0;overflow-y:auto;";
          u.ie && 8 > u.version && (a.style.width = c.offsetWidth + "px", a.style.height = c.offsetHeight + "px", c.onresize =

            function () {
              a.style.width = c.offsetWidth + "px";
              a.style.height = c.offsetHeight + "px"
            });
          c.appendChild(a);
          return {
            setContent: function (b) {
              a.value = b
            },
            getContent: function () {
              return a.value
            },
            select: function () {
              if (u.ie) {
                var b = a.createTextRange();
                b.collapse(!0);
                b.select()
              } else a.setSelectionRange(0, 0),
                a.focus()
            },
            dispose: function () {
              c.removeChild(a);
              c = a = c.onresize = null
            },
            focus: function () {
              a.focus()
            },
            blur: function () {
              a.blur()
            }
          }
        },
        codemirror: function (b, c) {
          var a = window.CodeMirror(c, {
              mode: "text/html",
              tabMode: "indent",
              lineNumbers: !0,
              lineWrapping: !0
            }),
            d = a.getWrapperElement();
          d.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;font-family:consolas,"Courier new",monospace;font-size:13px;';
          a.getScrollerElement().style.cssText = "position:absolute;left:0;top:0;width:100%;height:100%;";
          a.refresh();
          return {
            getCodeMirror: function () {
              return a
            },
            setContent: function (c) {
              a.setValue(c);
              if (b.current_active_135item) {
                c = a.lineCount();
                for (var e = -1, d = 0, k = 0; k < c; k++) {
                  var g = a.getLine(k);
                  if (0 < g.indexOf("mark-selection")) e = k,
                    d++,
                    a.setLine(k, g.replace('mark-selection=""', ""));
                  else if (0 <= e && (0 <= g.indexOf("<section") && d++, 0 <= g.indexOf("</section>") && d--, 0 == d)) {
                    a.setSelection({
                      line: e,
                      ch: 0
                    }, {
                      line: k,
                      ch: g.length
                    });
                    break
                  }
                }
              }
            },
            getContent: function () {
              return a.getValue()
            },
            select: function () {
              a.focus()
            },
            dispose: function () {
              c.removeChild(d);
              a = d = null
            },
            focus: function () {
              a.focus()
            },
            blur: function () {
              a.setOption("readOnly", !0);
              a.setOption("readOnly", !1)
            }
          }
        }
      };
      UE.plugins.source = function () {
        var b = this,
          c = this.options,
          a = !1,
          g, h, e, l;
        c.sourceEditor = u.ie ? "textarea" : c.sourceEditor || "codemirror";
        b.setOpt({
          sourceEditorFirst: !1
        });
        var k, n, m;
        b.commands.source = {
          execCommand: function () {
            if (a = !a) {
              m = b.selection.getRange().createAddress(!1, !0);
              b.undoManger && b.undoManger.save(!0);
              u.gecko && (b.body.contentEditable = !1);
              k = b.iframe.style.cssText;
              b.iframe.style.cssText += "position:absolute;left:-32768px;top:-32768px;";
              b.current_active_135item && b.current_active_135item.attr("mark-selection", "");
              b.fireEvent("beforegetcontent");
              var q = UE.htmlparser(b.body.innerHTML);
              b.filterOutputRule(q);
              q.traversal(function (a) {
                if ("element" == a.type) switch (a.tagName) {
                  case "td":
                  case "th":
                  case "caption":
                    a.children && 1 == a.children.length && "br" == a.firstChild().tagName && a.removeChild(a.firstChild());
                    break;
                  case "pre":
                    a.innerText(a.innerText().replace(/&nbsp;/g, " "))
                }
              });
              b.fireEvent("aftergetcontent");
              q = q.toHtml(!0);
              g = d["codemirror" == c.sourceEditor && window.CodeMirror ? "codemirror" : "textarea"](b, b.iframe.parentNode);
              g.setContent(q);
              h = b.setContent;
              b.setContent = function (a) {
                a = UE.htmlparser(a);
                b.filterInputRule(a);
                a = a.toHtml();
                g.setContent(a)
              };
              setTimeout(function () {
                g.select();
                b.addListener("fullscreenchanged", function () {
                  try {
                    g.getCodeMirror().refresh()
                  } catch (w) {}
                })
              });
              n = b.getContent;
              b.getContent = function () {
                return g.getContent() || '<section data-role="paragraph" class="_135editor"><p>' + (u.ie ? "" : "<br/>") + "</p></section>"
              };
              e = b.focus;
              l = b.blur;
              b.focus = function () {
                g.focus()
              };
              b.blur = function () {
                l.call(b);
                g.blur()
              }
            } else if (b.iframe.style.cssText = k, q = g.getContent() || '<section data-role="paragraph" class="_135editor"><p>' + (u.ie ? "" : "<br/>") + "</p></section>", q = q.replace(/[\r\t\n ]*<\/?(\w+)\s*(?:[^>]*)>/g, function (a, b) {
              return b && !x.$inlineWithA[b.toLowerCase()] ? a.replace(/(^[\n\r\t ]*)|([\n\r\t ]*$)/g, "") : a.replace(/(^[\n\r\t]*)|([\n\r\t]*$)/g, "")
            }), b.setContent = h, b.setContent(q), g.dispose(), g = null, b.getContent = n, b.focus = e, b.blur = l, q = b.body.firstChild, q || (b.body.innerHTML = '<section data-role="paragraph" class="_135editor"><p>' + (u.ie ? "" : "<br/>") + "</p></section>", q = b.body.firstChild), b.undoManger && b.undoManger.save(!0), u.gecko) {
              var v = document.createElement("input");
              v.style.cssText = "position:absolute;left:0;top:-32768px";
              document.body.appendChild(v);
              b.body.contentEditable = !1;
              setTimeout(function () {
                f.setViewportOffset(v, {
                  left: -32768,
                  top: 0
                });
                v.focus();
                setTimeout(function () {
                  b.body.contentEditable = !0;
                  b.selection.getRange().moveToAddress(m).select(!0);
                  f.remove(v)
                })
              })
            } else try {
              b.selection.getRange().moveToAddress(m).select(!0)
            } catch (w) {}
            this.fireEvent("sourcemodechanged", a)
          },
          queryCommandState: function () {
            return a | 0
          },
          notNeedUndo: 1
        };
        var q = b.queryCommandState;
        b.queryCommandState = function (b) {
          b = b.toLowerCase();
          return a ? b in {
            source: 1,
            fullscreen: 1
          } ? 1 : -1 : q.apply(this, arguments)
        };
        "codemirror" == c.sourceEditor && b.addListener("ready", function () {
          p.loadFile(document, {
            src: c.codeMirrorJsUrl || c.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.js" + versionStr,
            tag: "script",
            type: "text/javascript",
            defer: "defer"
          }, function () {
            c.sourceEditorFirst && setTimeout(function () {
              b.execCommand("source")
            }, 0)
          });
          p.loadFile(document, {
            tag: "link",
            rel: "stylesheet",
            type: "text/css",
            href: c.codeMirrorCssUrl || c.UEDITOR_HOME_URL + "third-party/codemirror/codemirror.css" + versionStr
          })
        })
      }
    })();
    UE.plugins.enterkey = function () {
      var d, b = this,
        c = b.options.enterTag;
      b.addListener("keyup", function (a, c) {
        if (13 == (c.keyCode || c.which)) if (a = b.selection.getRange(), c = a.startContainer, u.ie) b.fireEvent("saveScene", !0, !0);
        else {
          if (/h\d/i.test(d)) {
            if (u.gecko) {
              if (!f.findParentByTagName(c, "h1 h2 h3 h4 h5 h6 blockquote caption table".split(" "), !0)) {
                b.document.execCommand("formatBlock", !1, "<p>");
                var g = 1
              }
            } else if (1 == c.nodeType) {
              c = b.document.createTextNode("");
              var e;
              a.insertNode(c);
              if (e = f.findParentByTagName(c, "div", !0)) {
                for (g = b.document.createElement("p"); e.firstChild;) g.appendChild(e.firstChild);
                e.parentNode.insertBefore(g, e);
                f.remove(e);
                a.setStartBefore(c).setCursor();
                g = 1
              }
              f.remove(c)
            }
            b.undoManger && g && b.undoManger.save()
          }
          u.opera && a.select()
        }
      });
      b.addListener("keydown", function (a, g) {
        if (13 == (g.keyCode || g.which)) if (b.fireEvent("beforeenterkeydown")) f.preventDefault(g);
        else {
          b.fireEvent("saveScene", !0, !0);
          d = "";
          a = b.selection.getRange();
          if (!a.collapsed) {
            var h = a.startContainer,
              e = a.endContainer;
            h = f.findParentByTagName(h, "td", !0);
            e = f.findParentByTagName(e, "td", !0);
            if (h && e && h !== e || !h && e || h && !e) {
              g.preventDefault ? g.preventDefault() : g.returnValue = !1;
              return
            }
          }
          if ("p" == c) u.ie || ((h = f.findParentByTagName(a.startContainer, "ol ul p h1 h2 h3 h4 h5 h6 blockquote caption".split(" "), !0)) || u.opera ? (d = h.tagName, "p" == h.tagName.toLowerCase() && u.gecko && f.removeDirtyAttr(h),("p" == h.tagName.toLowerCase()&&h.getAttribute('seamless')=='true'&&f.getStyle(h, 'line-height')==0&&(f.removeStyle(h, 'line-height'),h.removeAttribute("seamless")))) : (b.document.execCommand("formatBlock", !1, "<p>"), u.gecko && (a = b.selection.getRange(), (h = f.findParentByTagName(a.startContainer, "p", !0)) && f.removeDirtyAttr(h))));
          else if (g.preventDefault ? g.preventDefault() : g.returnValue = !1, a.collapsed) g = a.document.createElement("br"),
            a.insertNode(g),
            g.parentNode.lastChild === g ? (g.parentNode.insertBefore(g.cloneNode(!0), g), a.setStartBefore(g)) : a.setStartAfter(g),
            a.setCursor();
          else if (a.deleteContents(), h = a.startContainer, 1 == h.nodeType && (h = h.childNodes[a.startOffset])) {
            for (; 1 == h.nodeType;) {
              if (x.$empty[h.tagName]) return a.setStartBefore(h).setCursor(),
              b.undoManger && b.undoManger.save(),
                !1;
              if (!h.firstChild) return g = a.document.createElement("br"),
                h.appendChild(g),
                a.setStart(h, 0).setCursor(),
              b.undoManger && b.undoManger.save(),
                !1;
              h = h.firstChild
            }
            h === a.startContainer.childNodes[a.startOffset] ? (g = a.document.createElement("br"), a.insertNode(g).setCursor()) : a.setStart(h, 0).setCursor()
          } else g = a.document.createElement("br"),
            a.insertNode(g).setStartAfter(g).setCursor()
        }
      })
    };
    UE.plugins.keystrokes = function () {
      var d = this,
        b = !0;
      d.addListener("keydown", function (c, a) {
        c = a.keyCode || a.which;
        var g = d.selection.getRange();
        if (!(g.collapsed || a.ctrlKey || a.shiftKey || a.altKey || a.metaKey) && (65 <= c && 90 >= c || 48 <= c && 57 >= c || 96 <= c && 111 >= c || {
          13: 1,
          8: 1,
          46: 1
        }[c])) {
          var h = g.startContainer;
          f.isFillChar(h) && g.setStartBefore(h);
          h = g.endContainer;
          f.isFillChar(h) && g.setEndAfter(h);
          g.txtToElmBoundary();
          g.endContainer && 1 == g.endContainer.nodeType && (h = g.endContainer.childNodes[g.endOffset]) && f.isBr(h) && g.setEndAfter(h);
          if (0 == g.startOffset && (h = g.startContainer, f.isBoundaryNode(h, "firstChild") && (h = g.endContainer, g.endOffset == (3 == h.nodeType ? h.nodeValue.length : h.childNodes.length) && f.isBoundaryNode(h, "lastChild")))) {
            d.fireEvent("saveScene");
            d.body.innerHTML = "<p>" + (u.ie ? "" : "<br/>") + "</p>";
            g.setStart(d.body.firstChild, 0).setCursor(!1, !0);
            d._selectionChange();
            return
          }
        }
        if (c == da.Backspace) {
          g = d.selection.getRange();

          /**
           * 黑马校对高亮特殊处理
           * @type {boolean}
           */
          let articleProofFounderFlag = false
          articleProofFounderFlag = g.startContainer.parentNode.getAttribute("name") === 'article-proof' && g.startContainer.parentNode.className.indexOf('article-proof-founder') > -1 && g.startContainer.parentNode.tagName === 'SPAN' && g.startContainer.data.length === 1
          // 如果是黑马校对生成的高亮节点，删除该高亮元素之前，去掉dom元素的css属性，防止编辑器记住当前css样式自动生成节点
          if (articleProofFounderFlag) {
            UE.dom.domUtils.removeAttributes(g.startContainer.parentNode, ["name", 'class', 'id'])
            UE.dom.domUtils.removeAttributes(g.endContainer.parentNode, ["name", 'class', 'id'])
          }

          b = g.collapsed;
          if (d.fireEvent("delkeydown", a)) return;
          if (g.collapsed && g.inFillChar()) {
            var e = g.startContainer;
            f.isFillChar(e) ? (g.setStartBefore(e).shrinkBoundary(!0).collapse(!0), f.remove(e)) : (e.nodeValue = e.nodeValue.replace(new RegExp("^" + f.fillChar), ""), g.startOffset--, g.collapse(!0).select(!0))
          }
          if (e = g.getClosedNode()) {
            d.fireEvent("saveScene");
            g.setStartBefore(e);
            f.remove(e);
            g.setCursor();
            d.fireEvent("saveScene");
            f.preventDefault(a);
            return
          }
          if (!u.ie) {
            e = f.findParentByTagName(g.startContainer, "table", !0);
            var l = f.findParentByTagName(g.endContainer, "table", !0);
            if (e && !l || !e && l || e !== l) {
              a.preventDefault();
              return
            }
          }
        }
        if (c == da.Tab) {
          var k = {
            ol: 1,
            ul: 1,
            table: 1
          };
          if (d.fireEvent("tabkeydown", a)) {
            f.preventDefault(a);
            return
          }
          g = d.selection.getRange();
          d.fireEvent("saveScene");
          h = 0;
          var n = "";
          e = d.options.tabSize || 4;
          for (l = d.options.tabNode || "&nbsp;"; h < e; h++) n += l;
          h =
            d.document.createElement("span");
          h.innerHTML = n + f.fillChar;
          if (g.collapsed) g.insertNode(h.cloneNode(!0).firstChild).setCursor(!0);
          else if (n = function (a) {
            return f.isBlockElm(a) && !k[a.tagName.toLowerCase()]
          }, e = f.findParent(g.startContainer, n, !0), l = f.findParent(g.endContainer, n, !0), e && l && e === l) g.deleteContents(),
            g.insertNode(h.cloneNode(!0).firstChild).setCursor(!0);
          else {
            e = g.createBookmark();
            g.enlarge(!0);
            l = g.createBookmark();
            for (var m = f.getNextDomNode(l.start, !1, n); m && !(f.getPosition(m, l.end) & f.POSITION_FOLLOWING);) m.insertBefore(h.cloneNode(!0).firstChild, m.firstChild),
              m = f.getNextDomNode(m, !1, n);
            g.moveToBookmark(l).moveToBookmark(e).select()
          }
          f.preventDefault(a)
        }
        if (u.gecko && 46 == c && (g = d.selection.getRange(), g.collapsed && (e = g.startContainer, f.isEmptyBlock(e)))) {
          for (c = e.parentNode; 1 == f.getChildCount(c) && !f.isBody(c);) e = c,
            c = c.parentNode;
          e === c.lastChild && a.preventDefault();
          return
        }
        u.chrome && d.on("keydown", function (a, b) {
          a = b.keyCode || b.which;
          if ((b.metaKey && b.altKey || b.ctrlKey && b.shiftKey) && 73 == a) return !0
        })
      });
      d.addListener("keyup", function (c, a) {
        if ((a.keyCode || a.which) == da.Backspace && !this.fireEvent("delkeyup")) {
          c = this.selection.getRange();
          if (c.collapsed) {
            var d;
            if ((d = f.findParentByTagName(c.startContainer, "h1 h2 h3 h4 h5 h6".split(" "), !0)) && f.isEmptyBlock(d)) {
              if ((a = d.previousSibling) && "TABLE" != a.nodeName) {
                f.remove(d);
                c.setStartAtLast(a).setCursor(!1, !0);
                return
              }
              if ((a = d.nextSibling) && "TABLE" != a.nodeName) {
                f.remove(d);
                c.setStartAtFirst(a).setCursor(!1, !0);
                return
              }
            }
            f.isBody(c.startContainer) && (d = f.createElement(this.document, "p", {
              innerHTML: u.ie ? f.fillChar : "<br/>"
            }), c.insertNode(d).setStart(d, 0).setCursor(!1, !0))
          }!b && (3 == c.startContainer.nodeType || 1 == c.startContainer.nodeType && f.isEmptyBlock(c.startContainer)) && (u.ie ? (d = c.document.createElement("span"), c.insertNode(d).setStartBefore(d).collapse(!0), c.select(), f.remove(d)) : c.select())
        }
      })
    };
    UE.plugins.fiximgclick = function () {
      function d() {
        this.cover = this.resizer = this.editor = null;
        this.doc = document;
        this.prePos = {
          x: 0,
          y: 0
        };
        this.startPos = {
          x: 0,
          y: 0
        }
      }
      var b = !1;
      (function () {
        var c = [
          [0, 0, -1, -1],
          [0, 0, 1, -1],
          [0, 0, -1, 0],
          [0, 0, 1, 0],
          [0, 0, -1, 1],
          [0, 0, 1, 1]
        ];
        d.prototype = {
          init: function (a) {
            var b = this;
            b.editor = a;
            b.startPos = this.prePos = {
              x: 0,
              y: 0
            };
            b.dragId = -1;
            a = [];
            var c = b.cover = document.createElement("div"),
              e = b.resizer = document.createElement("div");
            c.id = b.editor.ui.id + "_imagescale_cover";
            c.style.cssText = "position:absolute;display:none;z-index:" + b.editor.options.zIndex + ";filter:alpha(opacity=0); opacity:0;background:#CCC;";
            f.on(c, "mousedown click", function () {
              b.hide();
              b.editor.selection.clearRange()
            });
            for (i = 0; 6 > i; i++) a.push('<span class="edui-editor-imagescale-hand' + i + '"></span>');
            e.id = b.editor.ui.id + "_imagescale";
            e.className = "edui-editor-imagescale";
            e.innerHTML = a.join("");
            e.style.cssText += ";display:none;border:1px solid #43B548;z-index:" + b.editor.options.zIndex + ";";
            b.editor.ui.getDom().appendChild(c);
            b.editor.ui.getDom().appendChild(e);
            b.initStyle();
            b.initEvents()
          },
          initStyle: function () {
            p.cssRule("imagescale", ".edui-editor-imagescale{display:none;position:absolute;border:1px solid #43B548;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#43B548;}.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}")
          },
          initEvents: function () {
            this.startPos.x = this.startPos.y = 0;
            this.isDraging = !1
          },
          _eventHandler: function (a) {
            switch (a.type) {
              case "mousedown":
                var c = a.target || a.srcElement; - 1 != c.className.indexOf("edui-editor-imagescale-hand") && -1 == this.dragId && (this.dragId = c.className.slice(-1), this.startPos.x = this.prePos.x = a.clientX, this.startPos.y = this.prePos.y = a.clientY, f.on(this.doc, "mousemove", this.proxy(this._eventHandler, this)));
                break;
              case "mousemove":
                if (-1 != this.dragId) {
                  this.updateContainerStyle(this.dragId, {
                    x: a.clientX - this.prePos.x,
                    y: a.clientY - this.prePos.y
                  });
                  this.prePos.x = a.clientX;
                  this.prePos.y = a.clientY;
                  b = !0;
                  this.updateTargetElement();
                  try {
                    (new UE.dom.Selection(this.doc)).getNative().removeAllRanges()
                  } catch (h) {}
                }
                break;
              case "mouseup":
                -1 != this.dragId && (this.updateContainerStyle(this.dragId, {
                  x: a.clientX - this.prePos.x,
                  y: a.clientY - this.prePos.y
                }), this.updateTargetElement(), this.target.parentNode && this.attachTo(this.target), this.dragId = -1),
                  f.un(this.doc, "mousemove", this.proxy(this._eventHandler, this)),
                b && (b = !1, this.editor.fireEvent("contentchange")),
                  this.dragId = -1
            }
          },
          updateTargetElement: function () {
            f.setStyles(this.target, {
              width: this.resizer.style.width,
              height: this.resizer.style.height
            });
            this.target.width = parseInt(this.resizer.style.width);
            this.target.height = parseInt(this.resizer.style.height);
            this.attachTo(this.target)
          },
          updateContainerStyle: function (a, b) {
            var d = this.resizer;
            if (0 != c[a][0]) {
              var e = parseInt(d.style.left) + b.x;
              d.style.left = this._validScaledProp("left", e) + "px"
            }
            0 != c[a][1] && (e = parseInt(d.style.top) + b.y, d.style.top = this._validScaledProp("top", e) + "px");
            0 != c[a][2] && (e = parseInt(d.style.width) + c[a][2] * b.x, 50 < e && (d.style.width = this._validScaledProp("width", e) + "px", 0 != c[a][3] && (e = parseInt(d.style.height) + c[a][3] * b.y, d.style.height = this._validScaledProp("height", e) + "px")))
          },
          _validScaledProp: function (a, b) {
            var c = this.resizer,
              e = document;
            b = isNaN(b) ? 0 : b;
            switch (a) {
              case "left":
                return 0 > b ? 0 : b + c.clientWidth > e.clientWidth ? e.clientWidth - c.clientWidth : b;
              case "top":
                return 0 > b ? 0 : b + c.clientHeight > e.clientHeight ? e.clientHeight - c.clientHeight : b;
              case "width":
                return 0 >= b ? 1 : b + c.offsetLeft > e.clientWidth ? e.clientWidth - c.offsetLeft : b;
              case "height":
                return 0 >= b ? 1 : b + c.offsetTop > e.clientHeight ? e.clientHeight - c.offsetTop : b
            }
          },
          hideCover: function () {
            this.cover.style.display = "none"
          },
          showCover: function () {
            var a = f.getXY(this.editor.ui.getDom()),
              b = f.getXY(this.editor.iframe);
            f.setStyles(this.cover, {
              width: this.editor.iframe.offsetWidth + "px",
              height: this.editor.iframe.offsetHeight + "px",
              top: b.y - a.y + "px",
              left: b.x - a.x + "px",
              position: "absolute",
              display: ""
            })
          },
          show: function (a) {
            this.resizer.style.display = "block";
            a && this.attachTo(a);
            f.on(this.resizer, "mousedown", this.proxy(this._eventHandler, this));
            f.on(this.doc, "mouseup", this.proxy(this._eventHandler, this));
            this.showCover();
            this.editor.fireEvent("afterscaleshow", this);
            this.editor.fireEvent("saveScene")
          },
          hide: function () {
            this.hideCover();
            this.resizer.style.display = "none";
            f.un(this.resizer, "mousedown", this.proxy(this._eventHandler, this));
            f.un(this.doc, "mouseup", this.proxy(this._eventHandler, this));
            this.editor.fireEvent("afterscalehide", this)
          },
          proxy: function (a, b) {
            return function (c) {
              return a.apply(b || this, arguments)
            }
          },
          attachTo: function (a) {
            a = this.target = a;
            var b = this.resizer,
              c = f.getXY(a),
              e = f.getXY(this.editor.iframe),
              d = f.getXY(b.parentNode),
              k = $(this.editor.document).scrollTop();
            var n = 0 + (this._parsePxIntValue(a.style.paddingLeft) + this._parsePxIntValue(a.style.paddingRight));
            n += this._parsePxIntValue(a.style.borderLeftWidth) + this._parsePxIntValue(a.style.borderRightWidth);
            var m = 0 + (this._parsePxIntValue(a.style.paddingTop) + this._parsePxIntValue(a.style.paddingBottom));
            m += this._parsePxIntValue(a.style.borderTopWidth) + this._parsePxIntValue(a.style.borderBottomWidth);
            f.setStyles(b, {
              width: a.width + n + "px",
              height: a.height + m + "px",
              left: e.x + c.x - this.editor.document.body.scrollLeft - d.x - parseInt(b.style.borderLeftWidth) + "px",
              top: e.y + c.y - k - d.y - parseInt(b.style.borderTopWidth) + "px"
            })
          },
          _parsePxIntValue: function (a) {
            var b = 0;
            0 < a.length && (b = parseInt(a.replace("px", "")));
            return b
          }
        }
      })();
      return function () {
        var b = this,
          a;
        b.setOpt("imageScaleEnabled", !0);
        !u.ie && b.options.imageScaleEnabled && b.addListener("click", function (c, h) {
          h = h || window.event;
          c = h.target || h.srcElement;
          h = b.selection.getRange();
          var e = h.getClosedNode();
          if (!1 === h.collapsed && "IMG" == c.tagName && e && "IMG" == e.tagName && "false" != b.body.contentEditable) {
            if (!(-1 != e.className.indexOf("edui-faked-music") || e.getAttribute("anchorname") || f.hasClass(e, "loadingclass") || f.hasClass(e, "loaderrorclass"))) {
              if (!a) {
                a = new d;
                a.init(b);
                b.ui.getDom().appendChild(a.resizer);
                var g = function (c) {
                    a.hide();
                    a.target && b.selection && b.selection.getRange() && b.selection.getRange().selectNode(a.target).select()
                  },
                  k = function (a) {
                    var b = a.target || a.srcElement;
                    !b || void 0 !== b.className && -1 != b.className.indexOf("edui-editor-imagescale") || g(a)
                  },
                  n;
                b.addListener("afterscaleshow", function (a) {
                  b.addListener("beforekeydown", g);
                  b.addListener("beforemousedown", k);
                  f.on(document, "keydown", g);
                  f.on(document, "mousedown", k);
                  b.selection.getNative().removeAllRanges()
                });
                b.addListener("afterscalehide", function (c) {
                  b.removeListener("beforekeydown", g);
                  b.removeListener("beforemousedown", k);
                  f.un(document, "keydown", g);
                  f.un(document, "mousedown", k);
                  c = a.target;
                  c.parentNode && b.selection.getRange().selectNode(c).select()
                });
                f.on(a.resizer, "mousedown", function (c) {
                  b.selection.getNative().removeAllRanges();
                  var e = c.target || c.srcElement;
                  e && -1 == e.className.indexOf("edui-editor-imagescale-hand") && (n = setTimeout(function () {
                    a.hide();
                    a.target && b.selection.getRange().selectNode(e).select()
                  }, 200))
                });
                f.on(a.resizer, "mouseup", function (a) {
                  (a = a.target || a.srcElement) && -1 == a.className.indexOf("edui-editor-imagescale-hand") && clearTimeout(n)
                })
              }
              a.show(e)
            }
          } else a && "none" != a.resizer.style.display && a.hide()
        });
        u.webkit && b.addListener("click", function (a, c) {
          "IMG" == c.target.tagName && "false" != b.body.contentEditable && (new D.Range(b.document)).selectNode(c.target).select()
        })
      }
    }();
    UE.plugin.register("autolink", function () {
      return u.ie ? {} : {
        bindEvents: {
          reset: function () {},
          keydown: function (d, b) {
            d = b.keyCode || b.which;
            if (32 == d || 13 == d) {
              d = this.selection.getNative();
              b = d.getRangeAt(0).cloneRange();
              for (var c, a = b.startContainer; 1 == a.nodeType && 0 < b.startOffset;) {
                a = b.startContainer.childNodes[b.startOffset - 1];
                if (!a) break;
                b.setStart(a, 1 == a.nodeType ? a.childNodes.length : a.nodeValue.length);
                b.collapse(!0);
                a = b.startContainer
              }
              do {
                if (0 == b.startOffset) {
                  for (a = b.startContainer.previousSibling; a && 1 == a.nodeType;) a = a.lastChild;
                  if (!a || f.isFillChar(a)) break;
                  c = a.nodeValue.length
                } else a = b.startContainer, c = b.startOffset;
                b.setStart(a, c - 1);
                c = b.toString().charCodeAt(0)
              } while (160 != c && 32 != c);
              if (b.toString().replace(new RegExp(f.fillChar, "g"), "").match(/(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i)) {
                for (; b.toString().length && !/^(?:https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.)/i.test(b.toString());) try {
                  b.setStart(b.startContainer, b.startOffset + 1)
                } catch (h) {
                  for (a = b.startContainer; !(next = a.nextSibling);) {
                    if (f.isBody(a)) return;
                    a = a.parentNode
                  }
                  b.setStart(next, 0)
                }
                if (!f.findParentByTagName(b.startContainer, "a", !0)) {
                  c = this.document.createElement("a");
                  a = this.document.createTextNode(" ");
                  this.undoManger && this.undoManger.save();
                  c.appendChild(b.extractContents());
                  c.href = c.innerHTML = c.innerHTML.replace(/<[^>]+>/g, "");
                  var g = c.getAttribute("href").replace(new RegExp(f.fillChar, "g"), "");
                  g = /^(?:https?:\/\/)/ig.test(g) ? g : "http://" + g;
                  c.setAttribute("_src", p.html(g));
                  c.href = p.html(g);
                  b.insertNode(c);
                  c.parentNode.insertBefore(a, c.nextSibling);
                  b.setStart(a, 0);
                  b.collapse(!0);
                  d.removeAllRanges();
                  d.addRange(b);
                  this.undoManger && this.undoManger.save()
                }
              }
            }
          }
        }
      }
    }, function () {
      function d(b) {
        if (3 == b.nodeType) return null;
        if ("A" == b.nodeName) return b;
        for (b = b.lastChild; b;) {
          if ("A" == b.nodeName) return b;
          if (3 == b.nodeType) {
            if (f.isWhitespace(b)) {
              b = b.previousSibling;
              continue
            }
            return null
          }
          b = b.lastChild
        }
      }
      var b = {
        37: 1,
        38: 1,
        39: 1,
        40: 1,
        13: 1,
        32: 1
      };
      u.ie && this.addListener("keyup", function (c, a) {
        var g = a.keyCode;
        if (b[g]) if (c = this.selection.getRange(), a = c.startContainer, 13 == g) {
          for (; a && !f.isBody(a) && !f.isBlockElm(a);) a = a.parentNode;
          a && !f.isBody(a) && "P" == a.nodeName && (c = a.previousSibling) && 1 == c.nodeType && (c = d(c)) && !c.getAttribute("_href") && f.remove(c, !0)
        } else 32 == g ? 3 == a.nodeType && /^\s$/.test(a.nodeValue) && (a = a.previousSibling) && "A" == a.nodeName && !a.getAttribute("_href") && f.remove(a, !0) : (a = f.findParentByTagName(a, "a", !0)) && !a.getAttribute("_href") && (g = c.createBookmark(), f.remove(a, !0), c.moveToBookmark(g).select(!0))
      })
    });
    UE.plugins.autoheight = function () {
      function d() {
        var b = this;
        clearTimeout(e);
        l || b.queryCommandState && (!b.queryCommandState || 1 == b.queryCommandState("source")) || (e = setTimeout(function () {
          for (var c = b.body.lastChild; c && 1 != c.nodeType;) c = c.previousSibling;
          c && 1 == c.nodeType && (c.style.clear = "both", h = Math.max(f.getXY(c).y + c.offsetHeight + 25, Math.max(g.minFrameHeight, g.initialFrameHeight)), h != a && (h !== parseInt(b.iframe.parentNode.style.height) && (b.iframe.parentNode.style.height = h + "px"), b.body.style.height = h + "px", a = h), f.removeStyle(c, "clear"))
        }, 50))
      }
      var b = this;
      b.autoHeightEnabled = !1 !== b.options.autoHeightEnabled;
      if (b.autoHeightEnabled) {
        var c, a = 0,
          g = b.options,
          h, e, l;
        b.addListener("fullscreenchanged", function (a, b) {
          l = b
        });
        b.addListener("destroy", function () {
          b.removeListener("contentchange afterinserthtml keyup mouseup", d)
        });
        b.enableAutoHeight = function () {
          var a = this;
          if (a.autoHeightEnabled) {
            var b = a.document;
            a.autoHeightEnabled = !0;
            c = b.body.style.overflowY;
            b.body.style.overflowY = "hidden";
            a.addListener("contentchange afterinserthtml keyup mouseup", d);
            setTimeout(function () {
              d.call(a)
            }, u.gecko ? 100 : 0);
            a.fireEvent("autoheightchanged", a.autoHeightEnabled)
          }
        };
        b.disableAutoHeight = function () {
          b.body.style.overflowY = c || "";
          b.removeListener("contentchange", d);
          b.removeListener("keyup", d);
          b.removeListener("mouseup", d);
          b.autoHeightEnabled = !1;
          b.fireEvent("autoheightchanged", b.autoHeightEnabled)
        };
        b.on("setHeight", function () {
          b.disableAutoHeight()
        });
        b.addListener("ready", function () {
          b.enableAutoHeight();
          var a;
          f.on(u.ie ? b.body : b.document, u.webkit ? "dragover" : "drop", function () {
            clearTimeout(a);
            a = setTimeout(function () {
              d.call(b)
            }, 100)
          });
          var c;
          window.onscroll = function () {
            null === c ? c = this.scrollY : 0 == this.scrollY && 0 != c && (b.window.scrollTo(0, 0), c = null)
          }
        })
      }
    };
    UE.plugins.autofloat = function () {
      function d() {
        var a = document.body.style;
        a.backgroundImage = 'url("about:blank")';
        a.backgroundAttachment = "fixed"
      }
      function b() {
        w = !0;
        m.parentNode && m.parentNode.removeChild(m);
        q.style.cssText = n
      }
      function c() {
        var c =
            v(a.container),
          e = a.options.toolbarTopOffset || 0;
        if (0 > c.top && c.bottom - q.offsetHeight > e) {
          c = f.getXY(q);
          e = f.getComputedStyle(q, "position");
          var d = f.getComputedStyle(q, "left");
          q.style.width = q.offsetWidth + "px";
          q.style.zIndex = 1 * a.options.zIndex + 1;
          q.parentNode.insertBefore(m, q);
          l || k && u.ie ? ("absolute" != q.style.position && (q.style.position = "absolute"), q.style.top = (document.body.scrollTop || document.documentElement.scrollTop) - t + h + "px") : (u.ie7Compat && w && (w = !1, q.style.left = f.getXY(q).x - document.documentElement.getBoundingClientRect().left + 2 + "px"), "fixed" != q.style.position && (q.style.position = "fixed", q.style.top = h + 70 + "px", ("absolute" == e || "relative" == e) && parseFloat(d) && (q.style.left = c.x + "px")))
        } else b()
      }
      var a = this,
        g = a.getLang();
      a.setOpt({
        topOffset: 0
      });
      var h = a.options.topOffset;
      if (!1 !== a.options.autoFloatEnabled) {
        var e = UE.ui.uiUtils,
          l = u.ie && 6 >= u.version,
          k = u.quirks,
          n, m = document.createElement("div"),
          q, t, v, w = !0,
          y = p.defer(function () {
            c()
          }, u.ie ? 200 : 100, !0);
        a.addListener("destroy", function () {
          f.un(window, ["scroll", "resize"], c);
          a.removeListener("keydown", y)
        });
        a.addListener("ready", function () {
          if (UE.ui) var k = 1;
          else alert(g.autofloatMsg),
            k = 0;
          k && a.ui && (v = e.getClientRect, q = a.ui.getDom("toolbarbox"), t = v(q).top, n = q.style.cssText, m.style.height = q.offsetHeight + "px", l && d(), f.on(window, ["scroll", "resize"], c), a.addListener("keydown", y), a.addListener("beforefullscreenchange", function (a, c) {
            c && b()
          }), a.addListener("fullscreenchanged", function (a, b) {
            b || c()
          }), a.addListener("sourcemodechanged", function (a, b) {
            setTimeout(function () {
              c()
            }, 0)
          }), a.addListener("clearDoc", function () {
            setTimeout(function () {
              c()
            }, 0)
          }))
        })
      }
    };
    UE.plugins.video = function () {
      function d(a, b, d, e, l, k, f, title) {
        switch (f) {
          case "image":
            var g = "<img " + (e ? 'id="' + e + '"' : "") +
              ' width="' + b + '" height="' + d + '" _url="' + a + '" ' +
              'class="' + k.replace(/\bvideo-js\b/, "") + '" ' +
              'src="' + c.options.UEDITOR_HOME_URL + 'themes/default/images/spacer.gif" ' +
              'style="background:url(' + c.options.UEDITOR_HOME_URL + "themes/default/images/videologo.gif) no-repeat center center; border:1px solid gray;"
              + (l ? "float:" + l + ";" : "") + '" />';
            break;
          case "embed":
            g = '<embed type="application/x-shockwave-flash" class="' + k +
              '" pluginspage="http://www.macromedia.com/go/getflashplayer" src="' +
              p.html(a) + '" width="' + b + '" height="' + d + '"' + (l ? ' style="float:' + l + '"' : "") +
              ' wmode="transparent" play="true" loop="false" menu="false" ' +
              'allowscriptaccess="never" allowfullscreen="true" >';
            break;
          case "video":
            f = a.substr(a.lastIndexOf(".") + 1),
            "ogv" == f && (f = "ogg"),
              g = "<video" + (e ? ' id="' + e + '"' : "") +
                ' class="' + k + ' video-js" ' + (l ? ' style="float:' + l + '"' : "") +
                ' controls preload="true" width="' + b + '" height="' + d + '" ' +
                'src="' + a + '" data-setup="{}"><source src="' + a + '" type="video/' + f + '" /></video>'
                break;
          //插入音频
          case 'insertaudio':
          //图片与视频切换时使用
          case 'audioimage':
          case 'audio':
            g = '<audio ' + (title ? 'title="' + title+'"' : '') + (e ? 'id="' + e+'"' : '') +
              '  url="'+a+'" urlapp="'+a+'" '+'' +
              'width="'+ b +'" height="' + d + '" style="max-width:100%;'+(b ?'width:'+b+";":";") +
              ( d?'height:'+d:"")+'"' +
              'class="' + k + '" src="'+a+
              '" controls="controls" controlsList="nodownload" preload="true"></audio>'
            ;
            break;
        }
        return g
      }
      function b(a, b) {
        p.each(a.getNodesByTagName(b ? "img" : "embed video"), function (a) {
          var c = a.getAttr("class");
          if (c && -1 != c.indexOf("edui-faked-video")) {
            var g = d(b ? a.getAttr("_url") : a.getAttr("src"), a.getAttr("width"), a.getAttr("height"), null, a.getStyle("float") || "", c, b ? "embed" : "video");
            a.parentNode.replaceChild(UE.uNode.createElement(g), a)
          }
          if ('img' === a.tagName) {
            var g = d(a.getAttr('src'), a.getAttr("width"), a.getAttr("height"), null, a.getStyle("float") || "", c, "img");
            a.parentNode.replaceChild(UE.uNode.createElement(g), a)
          }
          c && -1 != c.indexOf("edui-upload-video") && (g = d(b ? a.getAttr("_url") : a.getAttr("src"), a.getAttr("width"), a.getAttr("height"), null, a.getStyle("float") || "", c, b ? "embed" : "audio"), a.parentNode.replaceChild(UE.uNode.createElement(g), a))
        })
      }
      var c = this;
      c.addOutputRule(function (a) {
        b(a, !0)
      });
      c.addInputRule(function (a) {
        b(a)
      });
      //插入音频
      c.commands["music"] = {
        execCommand: function (cmd, audioObjs, type){
          //所有音频对象
          audioObjs = p.isArray(audioObjs)?audioObjs:[audioObjs];
          var html = [],id = 'tmpAudie', cl;
          for(var i=0,vi,len = audioObjs.length;i<len;i++){
            vi = audioObjs[i];
            cl = (type == 'upload' ? 'edui-upload-audio audio-js audiojs-default-skin':'edui-faked-audio');
            html.push(d( vi.url, vi.width || '300px',  vi.height || '50px', id + i, null, cl, 'insertaudio', vi.aTitle));
          }
          c.execCommand("inserthtml",html.join(""),true);
          var rng = this.selection.getRange();
          for(var i= 0,len=audioObjs.length;i<len;i++){
            var img = this.document.getElementById('tmpAudie'+i);
            f.removeAttributes(img,'id');
            rng.selectNode(img).select();
            c.execCommand('imagefloat',audioObjs[i].align)
          }
        },
        queryCommandState : function(){
          var img = c.selection.getRange().getClosedNode(),
            flag = img && (img.className == "edui-faked-audio" || img.className.indexOf("edui-upload-audio")!=-1);
          return flag ? 1 : 0;
        }
      };
      c.commands.insertvideo = {
        execCommand: function (a, b, h) {
          b = p.isArray(b) ? b : [b];
          if (!0 !== c.fireEvent("beforeinsertvideo", b)) {
            var e = [];
            a = 0;
            for (var g, k = b.length; a < k; a++) {
              g = b[a];
              var n = "upload" == h ? "edui-upload-video video-js vjs-default-skin" : "edui-faked-video";
              e.push(d(g.url, g.width || '420px', g.height || 'auto', "tmpVedio" + a, null, n, "video"))
            }
            c.execCommand("inserthtml", e.join(""), !0);
            h = this.selection.getRange();
            a = 0;
            for (k = b.length; a < k; a++) e = this.document.getElementById("tmpVedio" + a),
              f.removeAttributes(e, "id"),
              h.selectNode(e).select(),
              c.execCommand("imagefloat", b[a].align);
            c.fireEvent("afterinsertvideo", b)
          }
        },
        queryCommandState: function () {
          var a = c.selection.getRange().getClosedNode();
          return !a || "edui-faked-video" != a.className && -1 == a.className.indexOf("edui-upload-video") ? 0 : 1
        }
      }
    };
    (function () {
      var d = UE.UETable = function (b) {
        this.table = b;
        this.indexTable = [];
        this.selectedTds = [];
        this.cellsRange = {};
        this.update(b)
      };
      d.removeSelectedClass = function (b) {
        p.each(b, function (b) {
          f.removeClasses(b, "selectTdClass")
        })
      };
      d.addSelectedClass = function (b) {
        p.each(b, function (b) {
          f.addClass(b, "selectTdClass")
        })
      };
      d.isEmptyBlock = function (b) {
        var c = new RegExp(f.fillChar, "g");
        if (0 < b[u.ie ? "innerText" : "textContent"].replace(/^\s*$/, "").replace(c, "").length) return 0;
        for (var a in x.$isNotEmpty) if (x.$isNotEmpty.hasOwnProperty(a) && b.getElementsByTagName(a).length) return 0;
        return 1
      };
      d.getWidth = function (b) {
        return b ? parseInt(f.getComputedStyle(b, "width"), 10) : 0
      };
      d.getTableCellAlignState = function (b) {
        !p.isArray(b) && (b = [b]);
        var c = {},
          a = ["align", "valign"],
          d = null,
          h = !0;
        p.each(b, function (b) {
          p.each(a, function (a) {
            d = b.getAttribute(a);
            if (!c[a] && d) c[a] = d;
            else if (!c[a] || d !== c[a]) return h = !1
          });
          return h
        });
        return h ? c : null
      };
      d.getTableItemsByRange = function (b) {
        var c = b.selection.getStart();
        c && c.id && 0 === c.id.indexOf("_baidu_bookmark_start_") && c.nextSibling && (c = c.nextSibling);
        var a = (b = c && f.findParentByTagName(c, ["td", "th"], !0)) && b.parentNode;
        c = c && f.findParentByTagName(c, "caption", !0);
        return {
          cell: b,
          tr: a,
          table: c ? c.parentNode : a && a.parentNode.parentNode,
          caption: c
        }
      };
      d.getUETableBySelected = function (b) {
        return (b = d.getTableItemsByRange(b).table) && b.ueTable && b.ueTable.selectedTds.length ? b.ueTable : null
      };
      d.getDefaultValue = function (b, c) {
        var a = {
          thin: "0px",
          medium: "1px",
          thick: "2px"
        };
        if (c) {
          e = c.getElementsByTagName("td")[0];
          var d = f.getComputedStyle(c, "border-left-width");
          b = parseInt(a[d] || d, 10);
          d = f.getComputedStyle(e, "padding-left");
          var h = parseInt(a[d] || d, 10);
          d = f.getComputedStyle(e, "border-left-width");
          a = parseInt(a[d] || d, 10)
        } else {
          c = b.document.createElement("table");
          c.insertRow(0).insertCell(0).innerHTML = "xxx";
          b.body.appendChild(c);
          var e = c.getElementsByTagName("td")[0];
          d = f.getComputedStyle(c, "border-left-width");
          b = parseInt(a[d] || d, 10);
          d = f.getComputedStyle(e, "padding-left");
          h = parseInt(a[d] || d, 10);
          d = f.getComputedStyle(e, "border-left-width");
          a = parseInt(a[d] || d, 10);
          f.remove(c)
        }
        return {
          tableBorder: b,
          tdPadding: h,
          tdBorder: a
        }
      };
      d.getUETable = function (b) {
        var c =
          b.tagName.toLowerCase();
        b = "td" == c || "th" == c || "caption" == c ? f.findParentByTagName(b, "table", !0) : b;
        b.ueTable || (b.ueTable = new d(b));
        return b.ueTable
      };
      d.cloneCell = function (b, c, a) {
        if (!b || p.isString(b)) return this.table.ownerDocument.createElement(b || "td");
        var d = f.hasClass(b, "selectTdClass");
        d && f.removeClasses(b, "selectTdClass");
        var h = b.cloneNode(!0);
        c && (h.rowSpan = h.colSpan = 1);
        !a && f.removeAttributes(h, "width height");
        !a && f.removeAttributes(h, "style");
        h.style.borderLeftStyle = "";
        h.style.borderTopStyle = "";
        h.style.borderLeftColor =
          b.style.borderRightColor;
        h.style.borderLeftWidth = b.style.borderRightWidth;
        h.style.borderTopColor = b.style.borderBottomColor;
        h.style.borderTopWidth = b.style.borderBottomWidth;
        d && f.addClass(b, "selectTdClass");
        return h
      };
      d.prototype = {
        getMaxRows: function () {
          for (var b = this.table.rows, c = 1, a = 0, d; d = b[a]; a++) {
            for (var h = 1, e = 0, l; l = d.cells[e++];) h = Math.max(l.rowSpan || 1, h);
            c = Math.max(h + a, c)
          }
          return c
        },
        getMaxCols: function () {
          for (var b = this.table.rows, c = 0, a = {}, d = 0, h; h = b[d]; d++) {
            for (var e = 0, l = 0, k; k = h.cells[l++];) if (e += k.colSpan || 1, k.rowSpan && 1 < k.rowSpan) for (var f = 1; f < k.rowSpan; f++) a["row_" + (d + f)] ? a["row_" + (d + f)]++ : a["row_" + (d + f)] = k.colSpan || 1;
            e += a["row_" + d] || 0;
            c = Math.max(e, c)
          }
          return c
        },
        getCellColIndex: function (b) {},
        getHSideCell: function (b, c) {
          try {
            var a = this.getCellInfo(b),
              d = this.selectedTds.length,
              h = this.cellsRange;
            if (!c && (d ? !h.beginColIndex : !a.colIndex) || c && (d ? h.endColIndex == this.colsNum - 1 : a.colIndex == this.colsNum - 1)) return null;
            var e = d ? h.beginRowIndex : a.rowIndex;
            var l = c ? d ? h.endColIndex + 1 : a.colIndex + 1 : d ? h.beginColIndex - 1 : 1 > a.colIndex ? 0 : a.colIndex - 1;
            return this.getCell(this.indexTable[e][l].rowIndex, this.indexTable[e][l].cellIndex)
          } catch (k) {}
        },
        getTabNextCell: function (b, c) {
          b = this.getCellInfo(b);
          c = c || b.rowIndex;
          b = b.colIndex + 1 + (b.colSpan - 1);
          try {
            var a = this.getCell(this.indexTable[c][b].rowIndex, this.indexTable[c][b].cellIndex)
          } catch (g) {
            try {
              c = 1 * c + 1,
                b = 0,
                a = this.getCell(this.indexTable[c][b].rowIndex, this.indexTable[c][b].cellIndex)
            } catch (h) {}
          }
          return a
        },
        getVSideCell: function (b, c, a) {
          try {
            var d = this.getCellInfo(b),
              h = this.selectedTds.length && !a,
              e = this.cellsRange;
            if (!c && 0 == d.rowIndex || c && (h ? e.endRowIndex == this.rowsNum - 1 : d.rowIndex + d.rowSpan > this.rowsNum - 1)) return null;
            var l = c ? h ? e.endRowIndex + 1 : d.rowIndex + d.rowSpan : h ? e.beginRowIndex - 1 : d.rowIndex - 1;
            var k = h ? e.beginColIndex : d.colIndex;
            return this.getCell(this.indexTable[l][k].rowIndex, this.indexTable[l][k].cellIndex)
          } catch (n) {}
        },
        getSameEndPosCells: function (b, c) {
          try {
            var a = "x" === c.toLowerCase(),
              d = f.getXY(b)[a ? "x" : "y"] + b["offset" + (a ? "Width" : "Height")],
              h = this.table.rows;
            c = null;
            for (var e = [], l =
              0; l < this.rowsNum; l++) {
              c = h[l].cells;
              for (var k = 0, n; n = c[k++];) {
                var m = f.getXY(n)[a ? "x" : "y"] + n["offset" + (a ? "Width" : "Height")];
                if (m > d && a) break;
                if (b == n || d == m) if (1 == n[a ? "colSpan" : "rowSpan"] && e.push(n), a) break
              }
            }
            return e
          } catch (q) {}
        },
        setCellContent: function (b, c) {
          b.innerHTML = c || (u.ie ? f.fillChar : "<br />")
        },
        cloneCell: d.cloneCell,
        getSameStartPosXCells: function (b) {
          try {
            var c = f.getXY(b).x + b.offsetWidth,
              a = this.table.rows;
            b = [];
            for (var d = 0; d < this.rowsNum; d++) {
              var h = a[d].cells;
              for (var e = 0, l; l = h[e++];) {
                var k = f.getXY(l).x;
                if (k > c) break;
                if (k == c && 1 == l.colSpan) {
                  b.push(l);
                  break
                }
              }
            }
            return b
          } catch (n) {}
        },
        update: function (b) {
          this.table = b || this.table;
          this.selectedTds = [];
          this.cellsRange = {};
          this.indexTable = [];
          b = this.table.rows;
          for (var c = this.getMaxRows(), a = c - b.length, d = this.getMaxCols(); a--;) this.table.insertRow(b.length);
          this.rowsNum = c;
          this.colsNum = d;
          a = 0;
          for (var h = b.length; a < h; a++) this.indexTable[a] = Array(d);
          a = 0;
          for (var e; e = b[a]; a++) {
            h = 0;
            var l;
            for (e = e.cells; l = e[h]; h++) {
              l.rowSpan > c && (l.rowSpan = c);
              var k = h,
                n = l.rowSpan || 1;
              for (l = l.colSpan || 1; this.indexTable[a][k];) k++;
              for (var m = 0; m < n; m++) for (var q = 0; q < l; q++) this.indexTable[a + m][k + q] = {
                rowIndex: a,
                cellIndex: h,
                colIndex: k,
                rowSpan: n,
                colSpan: l
              }
            }
          }
          for (m = 0; m < c; m++) for (q = 0; q < d; q++) void 0 === this.indexTable[m][q] && (e = b[m], l = (l = e.cells[e.cells.length - 1]) ? l.cloneNode(!0) : this.table.ownerDocument.createElement("td"), this.setCellContent(l), 1 !== l.colSpan && (l.colSpan = 1), 1 !== l.rowSpan && (l.rowSpan = 1), e.appendChild(l), this.indexTable[m][q] = {
            rowIndex: m,
            cellIndex: l.cellIndex,
            colIndex: q,
            rowSpan: 1,
            colSpan: 1
          });
          b = f.getElementsByTagName(this.table, "td");
          var t = [];
          p.each(b, function (a) {
            f.hasClass(a, "selectTdClass") && t.push(a)
          });
          t.length && (c = t[t.length - 1], b = this.getCellInfo(t[0]), c = this.getCellInfo(c), this.selectedTds = t, this.cellsRange = {
            beginRowIndex: b.rowIndex,
            beginColIndex: b.colIndex,
            endRowIndex: c.rowIndex + c.rowSpan - 1,
            endColIndex: c.colIndex + c.colSpan - 1
          });
          if (!f.hasClass(this.table.rows[0], "firstRow")) for (f.addClass(this.table.rows[0], "firstRow"), a = 1; a < this.table.rows.length; a++) f.removeClasses(this.table.rows[a], "firstRow")
        },
        getCellInfo: function (b) {
          if (b) {
            var c = b.cellIndex;
            b = b.parentNode.rowIndex;
            for (var a = this.indexTable[b], d = this.colsNum, h = c; h < d; h++) {
              var e = a[h];
              if (e.rowIndex === b && e.cellIndex === c) return e
            }
          }
        },
        getCell: function (b, c) {
          return b < this.rowsNum && this.table.rows[b].cells[c] || null
        },
        deleteCell: function (b, c) {
          c = "number" == typeof c ? c : b.parentNode.rowIndex;
          this.table.rows[c].deleteCell(b.cellIndex)
        },
        getCellsRange: function (b, c) {
          function a(b, c, e, g) {
            var k = b,
              l = c,
              h = e,
              f = g,
              m;
            if (0 < b) for (m = c; m < g; m++) {
              var n = d.indexTable[b][m];
              var p = n.rowIndex;
              p < b && (k = Math.min(p, k))
            }
            if (g < d.colsNum) for (p = b; p < e; p++) n = d.indexTable[p][g],
              m = n.colIndex + n.colSpan - 1,
            m > g && (f = Math.max(m, f));
            if (e < d.rowsNum) for (m = c; m < g; m++) n = d.indexTable[e][m],
              p = n.rowIndex + n.rowSpan - 1,
            p > e && (h = Math.max(p, h));
            if (0 < c) for (p = b; p < e; p++) n = d.indexTable[p][c],
              m = n.colIndex,
            m < c && (l = Math.min(n.colIndex, l));
            return k != b || l != c || h != e || f != g ? a(k, l, h, f) : {
              beginRowIndex: b,
              beginColIndex: c,
              endRowIndex: e,
              endColIndex: g
            }
          }
          try {
            var d = this,
              h = d.getCellInfo(b);
            if (b === c) return {
              beginRowIndex: h.rowIndex,
              beginColIndex: h.colIndex,
              endRowIndex: h.rowIndex + h.rowSpan - 1,
              endColIndex: h.colIndex + h.colSpan - 1
            };
            var e = d.getCellInfo(c);
            return a(Math.min(h.rowIndex, e.rowIndex), Math.min(h.colIndex, e.colIndex), Math.max(h.rowIndex + h.rowSpan - 1, e.rowIndex + e.rowSpan - 1), Math.max(h.colIndex + h.colSpan - 1, e.colIndex + e.colSpan - 1))
          } catch (l) {}
        },
        getCells: function (b) {
          this.clearSelected();
          for (var c = b.beginColIndex, a = b.endRowIndex, d = b.endColIndex, h, e, l = {}, k = [], f = b.beginRowIndex; f <= a; f++) for (var m = c; m <= d; m++) {
            b = this.indexTable[f][m];
            h = b.rowIndex;
            e = b.colIndex;
            var q = h + "|" + e;
            if (!l[q]) {
              l[q] = 1;
              if (h < f || e < m || h + b.rowSpan - 1 > a || e + b.colSpan - 1 > d) return null;
              k.push(this.getCell(h, b.cellIndex))
            }
          }
          return k
        },
        clearSelected: function () {
          d.removeSelectedClass(this.selectedTds);
          this.selectedTds = [];
          this.cellsRange = {}
        },
        setSelected: function (b) {
          var c = this.getCells(b);
          d.addSelectedClass(c);
          this.selectedTds = c;
          this.cellsRange = b
        },
        isFullRow: function () {
          var b = this.cellsRange;
          return b.endColIndex - b.beginColIndex + 1 == this.colsNum
        },
        isFullCol: function () {
          var b = this.cellsRange,
            c = this.table.getElementsByTagName("th");
          b = b.endRowIndex - b.beginRowIndex + 1;
          return c.length ? b == this.rowsNum || b == this.rowsNum - 1 : b == this.rowsNum
        },
        getNextCell: function (b, c, a) {
          try {
            var d = this.getCellInfo(b),
              h = this.selectedTds.length && !a,
              e = this.cellsRange;
            if (!c && 0 == d.rowIndex || c && (h ? e.endRowIndex == this.rowsNum - 1 : d.rowIndex + d.rowSpan > this.rowsNum - 1)) return null;
            var l = c ? h ? e.endRowIndex + 1 : d.rowIndex + d.rowSpan : h ? e.beginRowIndex - 1 : d.rowIndex - 1;
            var k = h ? e.beginColIndex : d.colIndex;
            return this.getCell(this.indexTable[l][k].rowIndex, this.indexTable[l][k].cellIndex)
          } catch (n) {}
        },
        getPreviewCell: function (b, c) {
          try {
            var a = this.getCellInfo(b),
              d = this.selectedTds.length,
              h = this.cellsRange;
            if (!c && (d ? !h.beginColIndex : !a.colIndex) || c && (d ? h.endColIndex == this.colsNum - 1 : a.rowIndex > this.colsNum - 1)) return null;
            var e = c ? d ? h.beginRowIndex : 1 > a.rowIndex ? 0 : a.rowIndex - 1 : d ? h.beginRowIndex : a.rowIndex;
            var l = c ? d ? h.endColIndex + 1 : a.colIndex : d ? h.beginColIndex - 1 : 1 > a.colIndex ? 0 : a.colIndex - 1;
            return this.getCell(this.indexTable[e][l].rowIndex, this.indexTable[e][l].cellIndex)
          } catch (k) {}
        },
        moveContent: function (b, c) {
          if (!d.isEmptyBlock(c)) if (d.isEmptyBlock(b)) b.innerHTML = c.innerHTML;
          else {
            var a = b.lastChild;
            for (3 != a.nodeType && x.$block[a.tagName] || b.appendChild(b.ownerDocument.createElement("br")); a = c.firstChild;) b.appendChild(a)
          }
        },
        mergeRight: function (b) {
          var c = this.getCellInfo(b),
            a = this.indexTable[c.rowIndex][c.colIndex + c.colSpan],
            d = this.getCell(a.rowIndex, a.cellIndex);
          b.colSpan = c.colSpan + a.colSpan;
          b.removeAttribute("width");
          this.moveContent(b, d);
          this.deleteCell(d, a.rowIndex);
          this.update()
        },
        mergeDown: function (b) {
          var c = this.getCellInfo(b),
            a = this.indexTable[c.rowIndex + c.rowSpan][c.colIndex],
            d = this.getCell(a.rowIndex, a.cellIndex);
          b.rowSpan = c.rowSpan + a.rowSpan;
          b.removeAttribute("height");
          this.moveContent(b, d);
          this.deleteCell(d, a.rowIndex);
          this.update()
        },
        mergeRange: function () {
          var b = this.cellsRange,
            c = this.getCell(b.beginRowIndex, this.indexTable[b.beginRowIndex][b.beginColIndex].cellIndex);
          if ("TH" == c.tagName && b.endRowIndex !== b.beginRowIndex) {
            var a = this.indexTable;
            b = this.getCellInfo(c);
            c = this.getCell(1, a[1][b.colIndex].cellIndex);
            b = this.getCellsRange(c, this.getCell(a[this.rowsNum - 1][b.colIndex].rowIndex, a[this.rowsNum - 1][b.colIndex].cellIndex))
          }
          var d = this.getCells(b);
          a = 0;
          for (var h; h = d[a++];) h !== c && (this.moveContent(c, h), this.deleteCell(h));
          c.rowSpan = b.endRowIndex - b.beginRowIndex + 1;
          1 < c.rowSpan && c.removeAttribute("height");
          c.colSpan = b.endColIndex - b.beginColIndex + 1;
          1 < c.colSpan && c.removeAttribute("width");
          c.rowSpan == this.rowsNum && 1 != c.colSpan && (c.colSpan = 1);
          if (c.colSpan == this.colsNum && 1 != c.rowSpan) {
            d =
              c.parentNode.rowIndex;
            if (this.table.deleteRow) for (a = d + 1, d += 1, b = c.rowSpan; a < b; a++) this.table.deleteRow(d);
            else for (a = 0, b = c.rowSpan - 1; a < b; a++) h = this.table.rows[d + 1],
              h.parentNode.removeChild(h);
            c.rowSpan = 1
          }
          this.update()
        },
        insertRow: function (b, c) {
          function a(a, b, c) {
            0 == a ? (a = (c.nextSibling || c.previousSibling).cells[a], "TH" == a.tagName && (a = b.ownerDocument.createElement("th"), a.appendChild(b.firstChild), c.insertBefore(a, b), f.remove(b))) : "TH" == b.tagName && (a = b.ownerDocument.createElement("td"), a.appendChild(b.firstChild), c.insertBefore(a, b), f.remove(b))
          }
          var d = this.colsNum,
            h = this.table.insertRow(b),
            e = "string" == typeof c && "TH" == c.toUpperCase();
          if (0 == b || b == this.rowsNum) for (var l = 0; l < d; l++) {
            var k = this.cloneCell(c, !0);
            this.setCellContent(k);
            k.getAttribute("vAlign") && k.setAttribute("vAlign", k.getAttribute("vAlign"));
            h.appendChild(k);
            e || a(l, k, h)
          } else {
            var n = this.indexTable[b];
            for (l = 0; l < d; l++) {
              var m = n[l];
              m.rowIndex < b ? (k = this.getCell(m.rowIndex, m.cellIndex), k.rowSpan = m.rowSpan + 1) : (k = this.cloneCell(c, !0), this.setCellContent(k), h.appendChild(k));
              e || a(l, k, h)
            }
          }
          this.update();
          return h
        },
        deleteRow: function (b) {
          for (var c = this.table.rows[b], a = this.indexTable[b], d = this.colsNum, h = 0, e = 0; e < d;) {
            var l = a[e],
              k = this.getCell(l.rowIndex, l.cellIndex);
            if (1 < k.rowSpan && l.rowIndex == b) {
              l = k.cloneNode(!0);
              l.rowSpan = k.rowSpan - 1;
              l.innerHTML = "";
              k.rowSpan = 1;
              var n = b + 1,
                m = this.table.rows[n];
              n = this.getPreviewMergedCellsNum(n, e) - h;
              n < e ? (n = e - n - 1, f.insertAfter(m.cells[n], l)) : m.cells.length && m.insertBefore(l, m.cells[0]);
              h += 1
            }
            e += k.colSpan || 1
          }
          b = [];
          h = {};
          for (e = 0; e < d; e++) k = a[e].rowIndex,
            l = a[e].cellIndex,
            m = k + "_" + l,
          h[m] || (h[m] = 1, k = this.getCell(k, l), b.push(k));
          var q = [];
          p.each(b, function (a) {
            1 == a.rowSpan ? a.parentNode.removeChild(a) : q.push(a)
          });
          p.each(q, function (a) {
            a.rowSpan--
          });
          c.parentNode.removeChild(c);
          this.update()
        },
        insertCol: function (b, c, a) {
          function d(a, b, c) {
            0 == a ? (a = b.nextSibling || b.previousSibling, "TH" == a.tagName && (a = b.ownerDocument.createElement("th"), a.appendChild(b.firstChild), c.insertBefore(a, b), f.remove(b))) : "TH" == b.tagName && (a = b.ownerDocument.createElement("td"), a.appendChild(b.firstChild), c.insertBefore(a, b), f.remove(b))
          }
          var h = this.rowsNum,
            e = 0,
            l = parseInt((this.table.offsetWidth - 20 * (this.colsNum + 1) - (this.colsNum + 1)) / (this.colsNum + 1), 10),
            k = "string" == typeof c && "TH" == c.toUpperCase();
          if (0 == b || b == this.colsNum) for (; e < h; e++) {
            var n = this.table.rows[e];
            var m = n.cells[0 == b ? b : n.cells.length];
            var q = this.cloneCell(c, !0);
            this.setCellContent(q);
            q.setAttribute("vAlign", q.getAttribute("vAlign"));
            m && q.setAttribute("width", m.getAttribute("width"));
            b ? f.insertAfter(n.cells[n.cells.length - 1], q) : n.insertBefore(q, n.cells[0]);
            k || d(e, q, n)
          } else for (; e < h; e++) m = this.indexTable[e][b],
            m.colIndex < b ? (q = this.getCell(m.rowIndex, m.cellIndex), q.colSpan = m.colSpan + 1) : (n = this.table.rows[e], m = n.cells[m.cellIndex], q = this.cloneCell(c, !0), this.setCellContent(q), q.setAttribute("vAlign", q.getAttribute("vAlign")), m && q.setAttribute("width", m.getAttribute("width")), m ? n.insertBefore(q, m) : n.appendChild(q)),
          k || d(e, q, n);
          this.update();
          this.updateWidth(l, a || {
            tdPadding: 10,
            tdBorder: 1
          })
        },
        updateWidth: function (b, c) {
          var a =
            this.table;
          c = d.getWidth(a) - 2 * c.tdPadding - c.tdBorder + b;
          c < a.ownerDocument.body.offsetWidth ? a.setAttribute("width", c) : (a = f.getElementsByTagName(this.table, "td th"), p.each(a, function (a) {
            a.setAttribute("width", b)
          }))
        },
        deleteCol: function (b) {
          for (var c = this.indexTable, a = this.table.rows, d = this.table.getAttribute("width"), h = 0, e = this.rowsNum, l = {}, k = 0; k < e;) {
            var f = c[k][b],
              m = f.rowIndex + "_" + f.colIndex;
            l[m] || (l[m] = 1, m = this.getCell(f.rowIndex, f.cellIndex), h || (h = m && parseInt(m.offsetWidth / m.colSpan, 10).toFixed(0)), 1 < m.colSpan ? m.colSpan-- : a[k].deleteCell(f.cellIndex), k += f.rowSpan || 1)
          }
          this.table.setAttribute("width", d - h);
          this.update()
        },
        splitToCells: function (b) {
          var c = this;
          b = this.splitToRows(b);
          p.each(b, function (a) {
            c.splitToCols(a)
          })
        },
        splitToRows: function (b) {
          var c = this.getCellInfo(b),
            a = c.rowIndex,
            d = c.colIndex,
            h = [];
          b.rowSpan = 1;
          h.push(b);
          for (var e = a, l = a + c.rowSpan; e < l; e++) if (e != a) {
            var k = this.table.rows[e].insertCell(d - this.getPreviewMergedCellsNum(e, d));
            k.colSpan = c.colSpan;
            this.setCellContent(k);
            k.setAttribute("vAlign", b.getAttribute("vAlign"));
            k.setAttribute("align", b.getAttribute("align"));
            b.style.cssText && (k.style.cssText = b.style.cssText);
            h.push(k)
          }
          this.update();
          return h
        },
        getPreviewMergedCellsNum: function (b, c) {
          for (var a = this.indexTable[b], d = 0, h = 0; h < c;) {
            var e = a[h].colSpan;
            d += e - (a[h].rowIndex == b ? 1 : 0);
            h += e
          }
          return d
        },
        splitToCols: function (b) {
          var c = (b.offsetWidth / b.colSpan - 22).toFixed(0),
            a = this.getCellInfo(b),
            d = a.rowIndex,
            h = a.colIndex,
            e = [];
          b.colSpan = 1;
          b.setAttribute("width", c);
          e.push(b);
          for (var l = h, k = h + a.colSpan; l < k; l++) if (l != h) {
            var n = this.table.rows[d],
              m = n.insertCell(this.indexTable[d][l].cellIndex + 1);
            m.rowSpan = a.rowSpan;
            this.setCellContent(m);
            m.setAttribute("vAlign", b.getAttribute("vAlign"));
            m.setAttribute("align", b.getAttribute("align"));
            m.setAttribute("width", c);
            b.style.cssText && (m.style.cssText = b.style.cssText);
            if ("TH" == b.tagName) {
              var q = b.ownerDocument.createElement("th");
              q.appendChild(m.firstChild);
              q.setAttribute("vAlign", b.getAttribute("vAlign"));
              q.rowSpan = m.rowSpan;
              n.insertBefore(q, m);
              f.remove(m)
            }
            e.push(m)
          }
          this.update();
          return e
        },
        isLastCell: function (b, c, a) {
          c = c || this.rowsNum;
          a = a || this.colsNum;
          b = this.getCellInfo(b);
          return b.rowIndex + b.rowSpan == c && b.colIndex + b.colSpan == a
        },
        getLastCell: function (b) {
          b = b || this.table.getElementsByTagName("td");
          this.getCellInfo(b[0]);
          var c = this,
            a = b[0],
            d = a.parentNode,
            h = 0,
            e = 0;
          p.each(b, function (a) {
            a.parentNode == d && (e += a.colSpan || 1);
            h += a.rowSpan * a.colSpan || 1
          });
          var l = h / e;
          p.each(b, function (b) {
            if (c.isLastCell(b, l, e)) return a = b,
              !1
          });
          return a
        },
        selectRow: function (b) {
          var c = this.indexTable[b];
          b = this.getCell(c[0].rowIndex, c[0].cellIndex);
          c = this.getCell(c[this.colsNum - 1].rowIndex, c[this.colsNum - 1].cellIndex);
          b = this.getCellsRange(b, c);
          this.setSelected(b)
        },
        selectTable: function () {
          var b = this.table.getElementsByTagName("td");
          b = this.getCellsRange(b[0], b[b.length - 1]);
          this.setSelected(b)
        },
        setBackground: function (b, c) {
          if ("string" === typeof c) p.each(b, function (a) {
            a.style.backgroundColor = c
          });
          else if ("object" === typeof c) {
            c = p.extend({
              repeat: !0,
              colorList: ["#ddd", "#fff"]
            }, c);
            for (var a = this.getCellInfo(b[0]).rowIndex, d = 0, h = c.colorList, e = function (a, b, c) {
              return a[b] ? a[b] : c ? a[b % a.length] : ""
            }, l = 0, k; k = b[l++];) {
              var f = this.getCellInfo(k);
              k.style.backgroundColor = e(h, a + d == f.rowIndex ? d : ++d, c.repeat)
            }
          }
        },
        removeBackground: function (b) {
          p.each(b, function (b) {
            b.style.backgroundColor = ""
          })
        }
      }
    })();
    (function () {
      function d(c, d) {
        var e = f.getElementsByTagName(c, "td th");
        p.each(e, function (a) {
          a.removeAttribute("width")
        });
        c.setAttribute("width", b(d, !0, a.getDefaultValue(d, c)));
        var g = [];
        setTimeout(function () {
          p.each(e, function (a) {
            1 == a.colSpan && g.push(a.offsetWidth)
          });
          p.each(e, function (a, b) {
            1 == a.colSpan && a.setAttribute("width", g[b] + "")
          })
        }, 0)
      }
      function b(a, b, c) {
        var d = a.body;
        return d.offsetWidth - (b ? 2 * parseInt(f.getComputedStyle(d, "margin-left"), 10) : 0) - 2 * c.tableBorder - (a.options.offsetWidth || 0)
      }
      function c(a) {
        if (a = g(a).cell) {
          var b = h(a);
          return b.selectedTds.length ? b.selectedTds : [a]
        }
        return []
      }
      var a = UE.UETable,
        g = function (b) {
          return a.getTableItemsByRange(b)
        },
        h = function (b) {
          return a.getUETable(b)
        };
      UE.commands.inserttable = {
        queryCommandState: function () {
          return g(this).table ? -1 : 0
        },
        execCommand: function (b, c) {
          c || (c = p.extend({}, {
            numCols: this.options.defaultCols,
            numRows: this.options.defaultRows,
            tdvalign: this.options.tdvalign
          }));
          b = this.selection.getRange().startContainer;
          b = f.findParent(b, function (a) {
            return f.isBlockElm(a)
          }, !0) || this.body;
          var d = a.getDefaultValue(this, void 0);
          b = Math.floor(b.offsetWidth / c.numCols - 2 * d.tdPadding - d.tdBorder);
          !c.tdvalign && (c.tdvalign = this.options.tdvalign);
          this.execCommand("inserthtml", function (a, b) {
            for (var c = [], d = a.numRows, e = a.numCols, k = 0; k < d; k++) {
              c.push("<tr" + (0 == k ? ' class="firstRow"' : "") + ">");
              for (var g = 0; g < e; g++) c.push('<td width="' + b + '"  vAlign="' + a.tdvalign + '" >' + (u.ie && 11 > u.version ? f.fillChar : "<br/>") + "</td>");
              c.push("</tr>")
            }
            return '<table class="table table-bordered"><tbody>' + c.join("") + "</tbody></table>"
          }(c, b))
        }
      };
      UE.commands.insertparagraphbeforetable = {
        queryCommandState: function () {
          return g(this).cell ? 0 : -1
        },
        execCommand: function () {
          var a = g(this).table;
          if (a) {
            var b = this.document.createElement("p");
            b.innerHTML = u.ie ? "&nbsp;" : "<br />";
            a.parentNode.insertBefore(b, a);
            this.selection.getRange().setStart(b, 0).setCursor()
          }
        }
      };
      UE.commands.deletetable = {
        queryCommandState: function () {
          var a = this.selection.getRange();
          return f.findParentByTagName(a.startContainer, "table", !0) ? 0 : -1
        },
        execCommand: function (a, b) {
          a = this.selection.getRange();
          if (b = b || f.findParentByTagName(a.startContainer, "table", !0)) {
            var c = b.nextSibling;
            c || (c = f.createElement(this.document, "p", {
              innerHTML: u.ie ? f.fillChar : "<br/>"
            }), b.parentNode.insertBefore(c, b));
            f.remove(b);
            a = this.selection.getRange();
            3 == c.nodeType ? a.setStartBefore(c) : a.setStart(c, 0);
            a.setCursor(!1, !0);
            this.fireEvent("tablehasdeleted")
          }
        }
      };
      UE.commands.cellalign = {
        queryCommandState: function () {
          return c(this).length ? 0 : -1
        },
        execCommand: function (a, b) {
          a = c(this);
          if (a.length) for (var d = 0, e; e = a[d++];) e.setAttribute("align", b)
        }
      };
      UE.commands.cellvalign = {
        queryCommandState: function () {
          return c(this).length ? 0 : -1
        },
        execCommand: function (a, b) {
          a = c(this);
          if (a.length) for (var d = 0, e; e = a[d++];) e.setAttribute("vAlign", b)
        }
      };
      UE.commands.insertcaption = {
        queryCommandState: function () {
          var a =
            g(this).table;
          return a ? 0 == a.getElementsByTagName("caption").length ? 1 : -1 : -1
        },
        execCommand: function () {
          var a = g(this).table;
          if (a) {
            var b = this.document.createElement("caption");
            b.innerHTML = u.ie ? f.fillChar : "<br/>";
            a.insertBefore(b, a.firstChild);
            this.selection.getRange().setStart(b, 0).setCursor()
          }
        }
      };
      UE.commands.deletecaption = {
        queryCommandState: function () {
          var a = this.selection.getRange();
          return (a = f.findParentByTagName(a.startContainer, "table")) ? 0 == a.getElementsByTagName("caption").length ? -1 : 1 : -1
        },
        execCommand: function () {
          var a =
            this.selection.getRange();
          if (a = f.findParentByTagName(a.startContainer, "table")) f.remove(a.getElementsByTagName("caption")[0]),
            this.selection.getRange().setStart(a.rows[0].cells[0], 0).setCursor()
        }
      };
      UE.commands.inserttitle = {
        queryCommandState: function () {
          var a = g(this).table;
          return a ? (a = a.rows[0], "th" != a.cells[a.cells.length - 1].tagName.toLowerCase() ? 0 : -1) : -1
        },
        execCommand: function () {
          var a = g(this).table;
          a && h(a).insertRow(0, "th");
          a = a.getElementsByTagName("th")[0];
          this.selection.getRange().setStart(a, 0).setCursor(!1, !0)
        }
      };
      UE.commands.deletetitle = {
        queryCommandState: function () {
          var a = g(this).table;
          return a ? (a = a.rows[0], "th" == a.cells[a.cells.length - 1].tagName.toLowerCase() ? 0 : -1) : -1
        },
        execCommand: function () {
          var a = g(this).table;
          a && f.remove(a.rows[0]);
          a = a.getElementsByTagName("td")[0];
          this.selection.getRange().setStart(a, 0).setCursor(!1, !0)
        }
      };
      UE.commands.inserttitlecol = {
        queryCommandState: function () {
          var a = g(this).table;
          return a ? a.rows[a.rows.length - 1].getElementsByTagName("th").length ? -1 : 0 : -1
        },
        execCommand: function (a) {
          (a =
            g(this).table) && h(a).insertCol(0, "th");
          d(a, this);
          a = a.getElementsByTagName("th")[0];
          this.selection.getRange().setStart(a, 0).setCursor(!1, !0)
        }
      };
      UE.commands.deletetitlecol = {
        queryCommandState: function () {
          var a = g(this).table;
          return a ? a.rows[a.rows.length - 1].getElementsByTagName("th").length ? 0 : -1 : -1
        },
        execCommand: function () {
          var a = g(this).table;
          if (a) for (var b = 0; b < a.rows.length; b++) f.remove(a.rows[b].children[0]);
          d(a, this);
          a = a.getElementsByTagName("td")[0];
          this.selection.getRange().setStart(a, 0).setCursor(!1, !0)
        }
      };
      UE.commands.mergeright = {
        queryCommandState: function (a) {
          var b = g(this);
          a = b.table;
          b = b.cell;
          if (!a || !b) return -1;
          var c = h(a);
          if (c.selectedTds.length) return -1;
          var d = c.getCellInfo(b),
            e = d.colIndex + d.colSpan;
          if (e >= c.colsNum) return -1;
          c = c.indexTable[d.rowIndex][e];
          return (a = a.rows[c.rowIndex].cells[c.cellIndex]) && b.tagName == a.tagName ? c.rowIndex == d.rowIndex && c.rowSpan == d.rowSpan ? 0 : -1 : -1
        },
        execCommand: function (a) {
          a = this.selection.getRange();
          var b = a.createBookmark(!0),
            c = g(this).cell;
          h(c).mergeRight(c);
          a.moveToBookmark(b).select()
        }
      };
      UE.commands.mergedown = {
        queryCommandState: function (a) {
          var b = g(this);
          a = b.table;
          b = b.cell;
          if (!a || !b) return -1;
          var c = h(a);
          if (c.selectedTds.length) return -1;
          var d = c.getCellInfo(b),
            e = d.rowIndex + d.rowSpan;
          if (e >= c.rowsNum) return -1;
          c = c.indexTable[e][d.colIndex];
          return (a = a.rows[c.rowIndex].cells[c.cellIndex]) && b.tagName == a.tagName ? c.colIndex == d.colIndex && c.colSpan == d.colSpan ? 0 : -1 : -1
        },
        execCommand: function () {
          var a = this.selection.getRange(),
            b = a.createBookmark(!0),
            c = g(this).cell;
          h(c).mergeDown(c);
          a.moveToBookmark(b).select()
        }
      };
      UE.commands.mergecells = {
        queryCommandState: function () {
          return a.getUETableBySelected(this) ? 0 : -1
        },
        execCommand: function () {
          var b = a.getUETableBySelected(this);
          if (b && b.selectedTds.length) {
            var c = b.selectedTds[0];
            b.mergeRange();
            b = this.selection.getRange();
            f.isEmptyBlock(c) ? b.setStart(c, 0).collapse(!0) : b.selectNodeContents(c);
            b.select()
          }
        }
      };
      UE.commands.insertrow = {
        queryCommandState: function () {
          var a = g(this),
            b = a.cell;
          return b && ("TD" == b.tagName || "TH" == b.tagName && a.tr !== a.table.rows[0]) && h(a.table).rowsNum < this.options.maxRowNum ? 0 : -1
        },
        execCommand: function () {
          var a = this.selection.getRange(),
            b = a.createBookmark(!0),
            c = g(this),
            d = c.cell;
          c = c.table;
          var f = h(c),
            q = f.getCellInfo(d);
          if (f.selectedTds.length) {
            q = f.cellsRange;
            for (var t = 0, v = q.endRowIndex - q.beginRowIndex + 1; t < v; t++) f.insertRow(q.beginRowIndex, d)
          } else f.insertRow(q.rowIndex, d);
          a.moveToBookmark(b).select();
          "enabled" === c.getAttribute("interlaced") && this.fireEvent("interlacetable", c)
        }
      };
      UE.commands.insertrownext = {
        queryCommandState: function () {
          var a = g(this),
            b = a.cell;
          return b && "TD" == b.tagName && h(a.table).rowsNum < this.options.maxRowNum ? 0 : -1
        },
        execCommand: function () {
          var a = this.selection.getRange(),
            b = a.createBookmark(!0),
            c = g(this),
            d = c.cell;
          c = c.table;
          var f = h(c),
            q = f.getCellInfo(d);
          if (f.selectedTds.length) {
            q = f.cellsRange;
            for (var t = 0, v = q.endRowIndex - q.beginRowIndex + 1; t < v; t++) f.insertRow(q.endRowIndex + 1, d)
          } else f.insertRow(q.rowIndex + q.rowSpan, d);
          a.moveToBookmark(b).select();
          "enabled" === c.getAttribute("interlaced") && this.fireEvent("interlacetable", c)
        }
      };
      UE.commands.deleterow = {
        queryCommandState: function () {
          return g(this).cell ? 0 : -1
        },
        execCommand: function () {
          var a = g(this).cell,
            b = h(a),
            c = b.cellsRange,
            d = b.getCellInfo(a),
            m = b.getVSideCell(a),
            q = b.getVSideCell(a, !0);
          a = this.selection.getRange();
          if (p.isEmptyObject(c)) b.deleteRow(d.rowIndex);
          else for (var t = c.beginRowIndex; t < c.endRowIndex + 1; t++) b.deleteRow(c.beginRowIndex);
          t = b.table;
          t.getElementsByTagName("td").length ? 1 == d.rowSpan || d.rowSpan == c.endRowIndex - c.beginRowIndex + 1 ? (q || m) && a.selectNodeContents(q || m).setCursor(!1, !0) : (b = b.getCell(d.rowIndex, b.indexTable[d.rowIndex][d.colIndex].cellIndex)) && a.selectNodeContents(b).setCursor(!1, !0) : (b = t.nextSibling, f.remove(t), b && a.setStart(b, 0).setCursor(!1, !0));
          "enabled" === t.getAttribute("interlaced") && this.fireEvent("interlacetable", t)
        }
      };
      UE.commands.insertcol = {
        queryCommandState: function (a) {
          a = g(this);
          var b = a.cell;
          return b && ("TD" == b.tagName || "TH" == b.tagName && b !== a.tr.cells[0]) && h(a.table).colsNum < this.options.maxColNum ? 0 : -1
        },
        execCommand: function (a) {
          var b = this.selection.getRange(),
            c = b.createBookmark(!0);
          if (-1 != this.queryCommandState(a)) {
            a = g(this).cell;
            var d = h(a),
              e = d.getCellInfo(a);
            if (d.selectedTds.length) {
              e = d.cellsRange;
              for (var f = 0, t = e.endColIndex - e.beginColIndex + 1; f < t; f++) d.insertCol(e.beginColIndex, a)
            } else d.insertCol(e.colIndex, a);
            b.moveToBookmark(c).select(!0)
          }
        }
      };
      UE.commands.insertcolnext = {
        queryCommandState: function () {
          var a = g(this);
          return a.cell && h(a.table).colsNum < this.options.maxColNum ? 0 : -1
        },
        execCommand: function () {
          var a = this.selection.getRange(),
            b = a.createBookmark(!0),
            c = g(this).cell,
            d = h(c),
            f = d.getCellInfo(c);
          if (d.selectedTds.length) {
            f = d.cellsRange;
            for (var q = 0, t = f.endColIndex - f.beginColIndex + 1; q < t; q++) d.insertCol(f.endColIndex + 1, c)
          } else d.insertCol(f.colIndex + f.colSpan, c);
          a.moveToBookmark(b).select()
        }
      };
      UE.commands.deletecol = {
        queryCommandState: function () {
          return g(this).cell ? 0 : -1
        },
        execCommand: function () {
          var a = g(this).cell,
            b = h(a),
            c = b.cellsRange,
            d = b.getCellInfo(a),
            m = b.getHSideCell(a),
            q = b.getHSideCell(a, !0);
          if (p.isEmptyObject(c)) b.deleteCol(d.colIndex);
          else for (d = c.beginColIndex; d < c.endColIndex + 1; d++) b.deleteCol(c.beginColIndex);
          b = b.table;
          c = this.selection.getRange();
          b.getElementsByTagName("td").length ? f.inDoc(a, this.document) ? c.setStart(a, 0).setCursor(!1, !0) : q && f.inDoc(q, this.document) ? c.selectNodeContents(q).setCursor(!1, !0) : m && f.inDoc(m, this.document) && c.selectNodeContents(m).setCursor(!0, !0) : (a = b.nextSibling, f.remove(b), a && c.setStart(a, 0).setCursor(!1, !0))
        }
      };
      UE.commands.splittocells = {
        queryCommandState: function () {
          var a = g(this),
            b = a.cell;
          return !b || 0 < h(a.table).selectedTds.length ? -1 : b && (1 < b.colSpan || 1 < b.rowSpan) ? 0 : -1
        },
        execCommand: function () {
          var a = this.selection.getRange(),
            b = a.createBookmark(!0),
            c = g(this).cell;
          h(c).splitToCells(c);
          a.moveToBookmark(b).select()
        }
      };
      UE.commands.splittorows = {
        queryCommandState: function () {
          var a = g(this),
            b = a.cell;
          return !b || 0 < h(a.table).selectedTds.length ? -1 : b && 1 < b.rowSpan ? 0 : -1
        },
        execCommand: function () {
          var a = this.selection.getRange(),
            b = a.createBookmark(!0),
            c = g(this).cell;
          h(c).splitToRows(c);
          a.moveToBookmark(b).select()
        }
      };
      UE.commands.splittocols = {
        queryCommandState: function () {
          var a = g(this),
            b = a.cell;
          return !b || 0 < h(a.table).selectedTds.length ? -1 : b && 1 < b.colSpan ? 0 : -1
        },
        execCommand: function () {
          var a = this.selection.getRange(),
            b = a.createBookmark(!0),
            c = g(this).cell;
          h(c).splitToCols(c);
          a.moveToBookmark(b).select()
        }
      };
      UE.commands.adaptbytext = UE.commands.adaptbywindow = {
        queryCommandState: function () {
          return g(this).table ? 0 : -1
        },
        execCommand: function (a) {
          var b = g(this).table;
          b && ("adaptbywindow" == a ? d(b, this) : (a = f.getElementsByTagName(b, "td th"), p.each(a, function (a) {
            a.removeAttribute("width")
          }), b.removeAttribute("width")))
        }
      };
      UE.commands.averagedistributecol = {
        queryCommandState: function () {
          var b =
            a.getUETableBySelected(this);
          return b ? b.isFullRow() || b.isFullCol() ? 0 : -1 : -1
        },
        execCommand: function (b) {
          function c() {
            var b = g.table,
              c = 0,
              d = 0,
              k = a.getDefaultValue(e, b);
            if (g.isFullRow()) c = b.offsetWidth,
              d = g.colsNum;
            else {
              b = g.cellsRange.endColIndex;
              for (var f, h = g.cellsRange.beginColIndex; h <= b;) f = g.selectedTds[h],
                c += f.offsetWidth,
                h += f.colSpan,
                d += 1
            }
            return Math.ceil(c / d) - 2 * k.tdBorder - 2 * k.tdPadding
          }
          function d(a) {
            p.each(f.getElementsByTagName(g.table, "th"), function (a) {
              a.setAttribute("width", "")
            });
            var b = g.isFullRow() ? f.getElementsByTagName(g.table, "td") : g.selectedTds;
            p.each(b, function (b) {
              1 == b.colSpan && b.setAttribute("width", a)
            })
          }
          var e = this,
            g = a.getUETableBySelected(e);
          g && g.selectedTds.length && d(c())
        }
      };
      UE.commands.averagedistributerow = {
        queryCommandState: function () {
          var b = a.getUETableBySelected(this);
          return !b || b.selectedTds && /th/ig.test(b.selectedTds[0].tagName) ? -1 : b.isFullRow() || b.isFullCol() ? 0 : -1
        },
        execCommand: function (b) {
          function c() {
            var b = 0;
            var c = g.table;
            var d = a.getDefaultValue(e, c),
              k = parseInt(f.getComputedStyle(c.getElementsByTagName("td")[0], "padding-top"));
            if (g.isFullCol()) {
              b = f.getElementsByTagName(c, "caption");
              var h = f.getElementsByTagName(c, "th");
              if (0 < b.length) var l = b[0].offsetHeight;
              if (0 < h.length) var m = h[0].offsetHeight;
              b = c.offsetHeight - (l || 0) - (m || 0);
              c = 0 == h.length ? g.rowsNum : g.rowsNum - 1
            } else {
              m = g.cellsRange.beginRowIndex;
              h = g.cellsRange.endRowIndex;
              l = 0;
              for (c = f.getElementsByTagName(c, "tr"); m <= h; m++) b += c[m].offsetHeight,
                l += 1;
              c = l
            }
            return u.ie && 9 > u.version ? Math.ceil(b / c) : Math.ceil(b / c) - 2 * d.tdBorder - 2 * k
          }
          function d(a) {
            var b = g.isFullCol() ? f.getElementsByTagName(g.table, "td") : g.selectedTds;
            p.each(b, function (b) {
              1 == b.rowSpan && b.setAttribute("height", a)
            })
          }
          var e = this,
            g = a.getUETableBySelected(e);
          g && g.selectedTds.length && d(c())
        }
      };
      UE.commands.cellalignment = {
        queryCommandState: function () {
          return g(this).table ? 0 : -1
        },
        execCommand: function (b, c) {
          (b = a.getUETableBySelected(this)) ? p.each(b.selectedTds, function (a) {
            f.setAttributes(a, c)
          }) : (b = (b = this.selection.getStart()) && f.findParentByTagName(b, ["td", "th", "caption"], !0), /caption/ig.test(b.tagName) ? (b.style.textAlign = c.align, b.style.verticalAlign =
            c.vAlign) : f.setAttributes(b, c), this.selection.getRange().setCursor(!0))
        },
        queryCommandValue: function (a) {
          (a = g(this).cell) || (a = c(this)[0]);
          if (a) {
            var b = UE.UETable.getUETable(a).selectedTds;
            !b.length && (b = a);
            return UE.UETable.getTableCellAlignState(b)
          }
          return null
        }
      };
      UE.commands.tablealignment = {
        queryCommandState: function () {
          return u.ie && 8 > u.version ? -1 : g(this).table ? 0 : -1
        },
        execCommand: function (a, b) {
          (a = (a = this.selection.getStart()) && f.findParentByTagName(a, ["table"], !0)) && a.setAttribute("align", b)
        }
      };
      UE.commands.edittable = {
        queryCommandState: function () {
          return g(this).table ? 0 : -1
        },
        execCommand: function (a, b) {
          a = this.selection.getRange();
          if (a = f.findParentByTagName(a.startContainer, "table")) a = f.getElementsByTagName(a, "td").concat(f.getElementsByTagName(a, "th"), f.getElementsByTagName(a, "caption")),
            p.each(a, function (a) {
              a.style.borderColor = b
            })
        }
      };
      UE.commands.edittd = {
        queryCommandState: function () {
          return g(this).table ? 0 : -1
        },
        execCommand: function (b, c) {
          if (b = a.getUETableBySelected(this)) p.each(b.selectedTds, function (a) {
            a.style.backgroundColor =
              c
          });
          else if (b = (b = this.selection.getStart()) && f.findParentByTagName(b, ["td", "th", "caption"], !0)) b.style.backgroundColor = c
        }
      };
      UE.commands.settablebackground = {
        queryCommandState: function () {
          return 1 < c(this).length ? 0 : -1
        },
        execCommand: function (a, b) {
          a = c(this);
          h(a[0]).setBackground(a, b)
        }
      };
      UE.commands.cleartablebackground = {
        queryCommandState: function () {
          var a = c(this);
          if (!a.length) return -1;
          for (var b = 0, d; d = a[b++];) if ("" !== d.style.backgroundColor) return 0;
          return -1
        },
        execCommand: function () {
          var a = c(this);
          h(a[0]).removeBackground(a)
        }
      };
      UE.commands.interlacetable = UE.commands.uninterlacetable = {
        queryCommandState: function (a) {
          var b = g(this).table;
          if (!b) return -1;
          b = b.getAttribute("interlaced");
          return "interlacetable" == a ? "enabled" === b ? -1 : 0 : b && "disabled" !== b ? 0 : -1
        },
        execCommand: function (a, b) {
          var c = g(this).table;
          "interlacetable" == a ? (c.setAttribute("interlaced", "enabled"), this.fireEvent("interlacetable", c, b)) : (c.setAttribute("interlaced", "disabled"), this.fireEvent("uninterlacetable", c))
        }
      };
      UE.commands.setbordervisible = {
        queryCommandState: function (a) {
          return g(this).table ? 0 : -1
        },
        execCommand: function () {
          var a = g(this).table;
          p.each(f.getElementsByTagName(a, "td"), function (a) {
            a.style.borderWidth = "1px";
            a.style.borderStyle = "solid"
          })
        }
      }
    })();
    UE.plugins.table = function () {
      function d(a, c) {
        b(a, "width", !0);
        b(a, "height", !0)
      }
      function b(a, b, c) {
        a.style[b] && (c && a.setAttribute(b, parseInt(a.style[b], 10)), a.style[b] = "")
      }
      function c(a) {
        if ("TD" == a.tagName || "TH" == a.tagName) return a;
        var b;
        return (b = f.findParentByTagName(a, "td", !0) || f.findParentByTagName(a, "th", !0)) ? b : null
      }
      function a(a) {
        var b = new RegExp(f.fillChar, "g");
        if (0 < a[u.ie ? "innerText" : "textContent"].replace(/^\s*$/, "").replace(b, "").length) return 0;
        for (var c in x.$isNotEmpty) if (a.getElementsByTagName(c).length) return 0;
        return 1
      }
      function g(a) {
        return a.pageX || a.pageY ? {
          x: a.pageX,
          y: a.pageY
        } : {
          x: a.clientX + z.document.body.scrollLeft - z.document.body.clientLeft,
          y: a.clientY + z.document.body.scrollTop - z.document.body.clientTop
        }
      }
      function h(a) {
        if (!M()) try {
          var b = c(a.target || a.srcElement);
          aa && (z.body.style.webkitUserSelect = "none", 10 < Math.abs(I.x - a.clientX) || 10 < Math.abs(I.y - a.clientY)) && (r(), aa = !1, C = 0, Q(a));
          if (V && R) {
            C = 0;
            z.body.style.webkitUserSelect = "none";
            z.selection.getNative()[u.ie9below ? "empty" : "removeAllRanges"]();
            var d = g(a);
            n(z, !0, V, d, b);
            if ("h" == V) {
              var h = U.style;
              b = R;
              var l = O(b);
              if (l) {
                var q = l.getSameEndPosCells(b, "x")[0],
                  t = l.getSameStartPosXCells(b)[0],
                  v = g(a).x,
                  w = (q ? f.getXY(q).x : f.getXY(l.table).x) + 20,
                  y = t ? f.getXY(t).x + t.offsetWidth - 20 : z.body.offsetWidth + 5 || parseInt(f.getComputedStyle(z.body, "width"), 10);
                w += 5;
                y -= 5;
                var p = v < w ? w : v > y ? y : v
              } else p = void 0;
              h.left = p + "px"
            } else if ("v" == V) {
              var K = U.style;
              a: {
                try {
                  var ha = f.getXY(R).y,
                    E = g(a).y;
                  var Z = E < ha ? ha : E;
                  break a
                } catch (ma) {}
                Z = void 0
              }
              K.top = Z + "px"
            }
          } else if (b) {
            if (!0 !== z.fireEvent("excludetable", b)) {
              d = g(a);
              var F = m(b, d),
                B = f.findParentByTagName(b, "table", !0);
              k(B, b, a, !0) ? !0 !== z.fireEvent("excludetable", B) && (z.body.style.cursor = "url(" + z.options.cursorpath + "h.png),pointer") : k(B, b, a) ? !0 !== z.fireEvent("excludetable", B) && (z.body.style.cursor = "url(" + z.options.cursorpath + "v.png),pointer") : (z.body.style.cursor = "text", /\d/.test(F) && (F = F.replace(/\d/, ""), b = O(b).getPreviewCell(b, "v" == F)), n(z, b ? !! F : !1, b ? F : "", d, b))
            }
          } else e(!1, B, z)
        } catch (ma) {}
      }
      function e(a, b, c) {
        a ? l(b, c) : P || setTimeout(function () {
          !P && L && L.parentNode && L.parentNode.removeChild(L)
        }, 2E3)
      }
      function l(a, b) {
        function c(c, d) {
          clearTimeout(k);
          k = setTimeout(function () {
            b.fireEvent("tableClicked", a, d)
          }, 300)
        }
        var d = f.getXY(a),
          e = a.ownerDocument;
        if (L && L.parentNode) return L;
        L = e.createElement("div");
        L.contentEditable = !1;
        L.innerHTML = "";
        L.style.cssText = "width:15px;height:15px;background-image:url(" + b.options.UEDITOR_HOME_URL + "dialogs/table/dragicon.png);position: absolute;cursor:move;top:" + (d.y - 15) + "px;left:" + d.x + "px;";
        f.unSelectable(L);
        L.onmouseover = function (a) {
          P = !0
        };
        L.onmouseout = function (a) {
          P = !1
        };
        f.on(L, "click", function (a, b) {
          c(b, this)
        });
        f.on(L, "dblclick", function (c, d) {
          clearTimeout(k);
          c = O(a);
          d = a.rows[0].cells[0];
          var e = c.getLastCell();
          e = c.getCellsRange(d, e);
          b.selection.getRange().setStart(d, 0).setCursor(!1, !0);
          c.setSelected(e)
        });
        f.on(L, "dragstart", function (a, b) {
          f.preventDefault(b)
        });
        var k;
        e.body.appendChild(L)
      }
      function k(a, b, c, d) {
        c = g(c);
        b = m(b, c);
        return d ? (d = (d = a.getElementsByTagName("caption")[0]) ? d.offsetHeight : 0, "v1" == b && 8 > c.y - f.getXY(a).y - d) : "h1" == b && 8 > c.x - f.getXY(a).x
      }
      function n(a, b, c, d, e) {
        try {
          a.body.style.cursor = "h" == c ? "col-resize" : "v" == c ? "row-resize" : "text",
          u.ie && (!c || X || G.getUETableBySelected(a) ? E(a) : (B(a, a.document), Z(c, e))),
            T = b
        } catch (oa) {}
      }
      function m(a, b) {
        var c = f.getXY(a);
        return c ? 5 > c.x + a.offsetWidth - b.x ? "h" : 5 > b.x - c.x ? "h1" : 5 > c.y + a.offsetHeight - b.y ? "v" : 5 > b.y - c.y ? "v1" : "" : ""
      }
      function q(a, b) {
        if (!M()) if (I = {
          x: b.clientX,
          y: b.clientY
        }, 2 == b.button) {
          a = G.getUETableBySelected(z);
          var c = !1;
          if (a) {
            var d = ia(z, b);
            p.each(a.selectedTds, function (a) {
              a === d && (c = !0)
            });
            c ? (d = a.selectedTds[0], setTimeout(function () {
              z.selection.getRange().setStart(d, 0).setCursor(!1, !0)
            }, 0)) : (G.removeSelectedClass(f.getElementsByTagName(z.body, "th td")), a.clearSelected())
          }
        } else v(b)
      }
      function t(a) {
        C = 0;
        a = a || z.window.event;
        var b = c(a.target || a.srcElement);
        if (b) {
          var d;
          if (d = m(b, g(a))) if (E(z), "h1" == d && (d = "h", k(f.findParentByTagName(b, "table"), b, a) ? z.execCommand("adaptbywindow") : (b = O(b).getPreviewCell(b)) && z.selection.getRange().selectNodeContents(b).setCursor(!0, !0)), "h" == d) {
            a = O(b);
            var e = H(b, a.table, !0);
            e = y(e, "left");
            a.width = a.offsetWidth;
            var h = [],
              l = [];
            p.each(e, function (a) {
              h.push(a.offsetWidth)
            });
            p.each(e, function (a) {
              a.removeAttribute("width")
            });
            window.setTimeout(function () {
              var a = !0;
              p.each(e, function (b, c) {
                b = b.offsetWidth;
                if (b > h[c]) return a = !1;
                l.push(b)
              });
              var b = a ? l : h;
              p.each(e, function (a, c) {
                a.width = b[c] - fa()
              })
            }, 0)
          }
        }
      }
      function v(a) {
        G.removeSelectedClass(f.getElementsByTagName(z.body, "td th"));
        p.each(z.document.getElementsByTagName("table"), function (a) {
          a.ueTable = null
        });
        if (N = ia(z, a)) {
          var b = f.findParentByTagName(N, "table", !0);
          (ut = O(b)) && ut.clearSelected();
          T ? w(a) : (z.document.body.style.webkitUserSelect = "", X = !0, z.addListener("mouseover", A))
        }
      }
      function w(a) {
        u.ie && (a = F(a));
        r();
        aa = !0;
        ba = setTimeout(function () {
          Q(a)
        }, 360)
      }
      function y(a, b) {
        for (var c = [], d, e = 0, k = a.length; e < k; e++)(d = a[e][b]) && c.push(d);
        return c
      }
      function r() {
        ba && clearTimeout(ba);
        ba = null
      }
      function F(a) {
        var b = "pageX pageY clientX clientY srcElement target".split(" "),
          c = {};
        if (a) for (var d = 0, e, k; e = b[d]; d++)(k = a[e]) && (c[e] = k);
        return c
      }
      function Q(a) {
        aa = !1;
        if (N = a.target || a.srcElement) a = m(N, g(a)),
        /\d/.test(a) && (a = a.replace(/\d/, ""), N = O(N).getPreviewCell(N, "v" == a)),
          E(z),
          B(z, z.document),
          z.fireEvent("saveScene"),
          Z(a, N),
          X = !0,
          V = a,
          R = N
      }
      function S(a, b) {
        if (!M()) {
          r();
          aa = !1;
          if (T && (C = ++C % 3, I = {
            x: b.clientX,
            y: b.clientY
          }, setTimeout(function () {
            0 < C && C--
          }, 360), 2 === C)) {
            C = 0;
            t(b);
            return
          }
          if (2 != b.button) {
            a = this.selection.getRange();
            var c = f.findParentByTagName(a.startContainer, "table", !0),
              d =
                f.findParentByTagName(a.endContainer, "table", !0);
            if (c || d) c === d ? (c = f.findParentByTagName(a.startContainer, ["td", "th", "caption"], !0), d = f.findParentByTagName(a.endContainer, ["td", "th", "caption"], !0), c !== d && this.selection.clearRange()) : this.selection.clearRange();
            X = !1;
            this.document.body.style.webkitUserSelect = "";
            if (V && R && (this.selection.getNative()[u.ie9below ? "empty" : "removeAllRanges"](), C = 0, U = this.document.getElementById("ue_tableDragLine"))) {
              b = f.getXY(R);
              a = f.getXY(U);
              switch (V) {
                case "h":
                  ka(R, a.x - b.x - $(R).width());
                  break;
                case "v":
                  J(R, a.y - b.y - R.offsetHeight)
              }
              V = "";
              R = null;
              E(this);
              this.fireEvent("saveScene");
              return
            }
            if (N)(c = (a = O(N)) ? a.selectedTds[0] : null) ? (a = new D.Range(this.document), f.isEmptyBlock(c) ? a.setStart(c, 0).setCursor(!1, !0) : a.selectNodeContents(c).shrinkBoundary().setCursor(!1, !0)) : (a = this.selection.getRange().shrinkBoundary(), a.collapsed || (c = f.findParentByTagName(a.startContainer, ["td", "th"], !0), d = f.findParentByTagName(a.endContainer, ["td", "th"], !0), (c && !d || !c && d || c && d && c !== d) && a.setCursor(!1, !0))),
              N = null,
              this.removeListener("mouseover", A);
            else if ((c = f.findParentByTagName(b.target || b.srcElement, "td", !0)) || (c = f.findParentByTagName(b.target || b.srcElement, "th", !0)), c && ("TD" == c.tagName || "TH" == c.tagName)) {
              if (!0 === this.fireEvent("excludetable", c)) return;
              a = new D.Range(this.document);
              a.setStart(c, 0).setCursor(!1, !0)
            }
            this._selectionChange(250, b)
          }
        }
      }
      function A(a, b) {
        if (!M()) {
          a = b.target || b.srcElement;
          W = f.findParentByTagName(a, "td", !0) || f.findParentByTagName(a, "th", !0);
          if (N && W && ("TD" == N.tagName && "TD" == W.tagName || "TH" == N.tagName && "TH" == W.tagName) && f.findParentByTagName(N, "table") == f.findParentByTagName(W, "table")) if (a = O(W), N != W) {
            this.document.body.style.webkitUserSelect = "none";
            this.selection.getNative()[u.ie9below ? "empty" : "removeAllRanges"]();
            var c = a.getCellsRange(N, W);
            a.setSelected(c)
          } else this.document.body.style.webkitUserSelect = "",
            a.clearSelected();
          b.preventDefault ? b.preventDefault() : b.returnValue = !1
        }
      }
      function ka(a, b) {
        var c = O(a);
        if (c) {
          c = c.table;
          H(a, c);
          $(c).find("tr").each(function (a) {
            0 < a && $(this).find("td,th").removeAttr("width")
          });
          $(c).find("tr:first td,tr:first th").each(function () {
            $(this).attr("width", $(this).width())
          });
          var d = f.getNodeIndex(a);
          a.nextSibling && (a = null, 0 < $(c).find("tr:first").find("td").length ? a = $(c).find("tr:first td:eq(" + d + ")") : 0 < $(c).find("tr:first").find("th").length && (a = $(c).find("tr:first th:eq(" + d + ")")), a && (a.attr("width", parseInt(a.width()) + b), a = a.next(), a.attr("width", parseInt(a.width()) - b)))
        }
      }
      function M() {
        return "false" === z.body.contentEditable
      }
      function J(a, b) {
        if (!(10 > Math.abs(b))) {
          var c = O(a);
          if (c) {
            a =
              c.getSameEndPosCells(a, "y");
            c = a[0] ? a[0].offsetHeight : 0;
            for (var d = 0, e; e = a[d++];) {
              var k = b,
                g = c,
                h = parseInt(f.getComputedStyle(e, "line-height"), 10);
              k = g + k;
              e.style.height && (e.style.height = "");
              1 == e.rowSpan ? e.setAttribute("height", k < h ? h : k) : e.removeAttribute && e.removeAttribute("height")
            }
          }
        }
      }
      function H(a, b, c) {
        b || (b = f.findParentByTagName(a, "table"));
        if (!b) return null;
        f.getNodeIndex(a);
        b = b.rows;
        for (var d = 0; a;) 1 === a.nodeType && (d += a.colSpan || 1),
          a = a.previousSibling;
        a = null;
        var e = [];
        p.each(b, function (a) {
          var b = 0;
          p.each(a.cells, function (a) {
            b += a.colSpan || 1;
            if (b === d) return e.push({
              left: a,
              right: a.nextSibling || null
            }),
              !1;
            if (b > d) return c && e.push({
              left: a
            }),
              !1
          })
        });
        return e
      }
      function fa() {
        if (void 0 === G.tabcellSpace) {
          var a = z.document.createElement("table"),
            b = z.document.createElement("tbody"),
            c = z.document.createElement("tr"),
            d = z.document.createElement("td"),
            e = null;
          d.style.cssText = "border: 0;";
          d.width = 1;
          c.appendChild(d);
          c.appendChild(e = d.cloneNode(!1));
          b.appendChild(c);
          a.appendChild(b);
          a.style.cssText = "visibility: hidden;";
          z.body.appendChild(a);
          G.paddingSpace = d.offsetWidth - 1;
          b = a.offsetWidth;
          d.style.cssText = "";
          e.style.cssText = "";
          G.borderWidth = (a.offsetWidth - b) / 3;
          G.tabcellSpace = G.paddingSpace + G.borderWidth;
          z.body.removeChild(a)
        }
        fa = function () {
          return G.tabcellSpace
        };
        return G.tabcellSpace
      }
      function B(a, b) {
        X || (U = a.document.createElement("div"), f.setAttributes(U, {
          id: "ue_tableDragLine",
          unselectable: "on",
          contenteditable: !1,
          onresizestart: "return false",
          ondragstart: "return false",
          onselectstart: "return false",
          style: "background-color:blue;position:absolute;padding:0;margin:0;background-image:none;border:0px none;opacity:0;filter:alpha(opacity=0)"
        }), a.body.appendChild(U))
      }
      function E(a) {
        if (!X) for (var b; b = a.document.getElementById("ue_tableDragLine");) f.remove(b)
      }
      function Z(a, b) {
        if (b) {
          var c = f.findParentByTagName(b, "table"),
            d = c.getElementsByTagName("caption"),
            e = c.offsetWidth,
            k = c.offsetHeight - (0 < d.length ? d[0].offsetHeight : 0);
          c = f.getXY(c);
          var g = f.getXY(b);
          switch (a) {
            case "h":
              a = "height:" + k + "px;top:" + (c.y + (0 < d.length ? d[0].offsetHeight : 0)) + "px;left:" + (g.x + b.offsetWidth);
              U.style.cssText = a + "px;position: absolute;display:block;background-color:blue;width:1px;border:0; color:blue;opacity:.3;filter:alpha(opacity=30)";
              break;
            case "v":
              a = "width:" + e + "px;left:" + c.x + "px;top:" + (g.y + b.offsetHeight),
                U.style.cssText = a + "px;overflow:hidden;position: absolute;display:block;background-color:blue;height:1px;border:0;color:blue;opacity:.2;filter:alpha(opacity=20)"
          }
        }
      }
      function ca(a, b) {
        a = f.getElementsByTagName(a.body, "table");
        for (var c, d = 0, e; e = a[d++];) c = f.getElementsByTagName(e, "td"),
        c[0] && (b ? (c = c[0].style.borderColor.replace(/\s/g, ""), /(#ffffff)|(rgb\(255,255,255\))/ig.test(c) && f.addClass(e, "noBorderTable")) : f.removeClasses(e, "noBorderTable"))
      }

      function na(a, b, c) {
        var d = a.body;
        return d.offsetWidth - (b ? 2 * parseInt(f.getComputedStyle(d, "margin-left"), 10) : 0) - 2 * c.tableBorder - (a.options.offsetWidth || 0)
      }
      function ia(a, b) {
        var c = f.findParentByTagName(b.target || b.srcElement, ["td", "th"], !0);
        if (!c) return null;
        var d = m(c, g(b));
        if (!c) return null;
        if ("h1" === d && c.previousSibling) {
          d = f.getXY(c);
          var e = c.offsetWidth;
          Math.abs(d.x + e - b.clientX) > e / 3 && (c = c.previousSibling)
        } else "v1" === d && c.parentNode.previousSibling && (d = f.getXY(c), e = c.offsetHeight, Math.abs(d.y + e - b.clientY) > e / 3 && (c = c.parentNode.previousSibling.firstChild));
        return c && !0 !== a.fireEvent("excludetable", c) ? c : null
      }
      var z = this,
        ba = null,
        aa = !1,
        C = 0,
        I = null,
        G = UE.UETable,
        O = function (a) {
          return G.getUETable(a)
        };
      z.ready(function () {
        var a = this,
          b = a.selection.getText;
        a.selection.getText = function () {
          var c = G.getUETableBySelected(a);
          if (c) {
            var d = "";
            p.each(c.selectedTds, function (a) {
              d += a[u.ie ? "innerText" : "textContent"]
            });
            return d
          }
          return b.call(a.selection)
        }
      });
      var N = null,
        W = null,
        V = "",
        T = !1,
        L = null,
        P = !1,
        U = null,
        R = null,
        X = !1;
      z.setOpt({
        maxColNum: 20,
        maxRowNum: 100,
        defaultCols: 5,
        defaultRows: 5,
        tdvalign: "top",
        cursorpath: z.options.UEDITOR_HOME_URL + "themes/default/images/cursor_",
        tableDragable: !1,
        classList: ["ue-table-interlace-color-single", "ue-table-interlace-color-double"]
      });
      z.getUETable = O;
      var Y = {
        deletetable: 1,
        inserttable: 1,
        cellvalign: 1,
        insertcaption: 1,
        deletecaption: 1,
        inserttitle: 1,
        deletetitle: 1,
        mergeright: 1,
        mergedown: 1,
        mergecells: 1,
        insertrow: 1,
        insertrownext: 1,
        deleterow: 1,
        insertcol: 1,
        insertcolnext: 1,
        deletecol: 1,
        splittocells: 1,
        splittorows: 1,
        splittocols: 1,
        adaptbytext: 1,
        adaptbywindow: 1,
        adaptbycustomer: 1,
        insertparagraph: 1,
        insertparagraphbeforetable: 1,
        averagedistributecol: 1,
        averagedistributerow: 1
      };
      z.ready(function () {
        var b, g, l;
        z.addListener("keydown", function (c, d) {
          c = d.keyCode || d.which;
          if (8 == c) {
            var e = G.getUETableBySelected(this);
            e && e.selectedTds.length && (e.isFullCol() ? this.execCommand("deletecol") : e.isFullRow() ? this.execCommand("deleterow") : this.fireEvent("delcells"), f.preventDefault(d));
            var k = f.findParentByTagName(this.selection.getStart(), "caption", !0),
              h = this.selection.getRange();
            h.collapsed && k && a(k) && (this.fireEvent("saveScene"), e = k.parentNode, f.remove(k), e && h.setStart(e.rows[0].cells[0], 0).setCursor(!1, !0), this.fireEvent("saveScene"))
          }
          if (46 == c && (e = G.getUETableBySelected(this))) {
            this.fireEvent("saveScene");
            for (k = 0; h = e.selectedTds[k++];) f.fillNode(this.document, h);
            this.fireEvent("saveScene");
            f.preventDefault(d)
          }
          if (13 == c) {
            c = this.selection.getRange();
            if (k = f.findParentByTagName(c.startContainer, "caption", !0)) {
              e = f.findParentByTagName(k, "table");
              c.collapsed ? k && c.setStart(e.rows[0].cells[0], 0).setCursor(!1, !0) : (c.deleteContents(), this.fireEvent("saveScene"));
              f.preventDefault(d);
              return
            }
            c.collapsed && (e = f.findParentByTagName(c.startContainer, "table")) && (h = e.rows[0].cells[0], k = f.findParentByTagName(this.selection.getStart(), ["td", "th"], !0), e = e.previousSibling, h === k && (!e || 1 == e.nodeType && "TABLE" == e.tagName) && f.isStartInblock(c) && (c = f.findParent(this.selection.getStart(), function (a) {
              return f.isBlockElm(a)
            }, !0)) && (/t(h|d)/i.test(c.tagName) || c === k.firstChild) && (this.execCommand("insertparagraphbeforetable"), f.preventDefault(d)))
          }
          if ((d.ctrlKey || d.metaKey) && "67" == d.keyCode && (b = null, e = G.getUETableBySelected(this))) for (d = e.selectedTds, g = e.isFullCol(), l = e.isFullRow(), b = [
            [e.cloneCell(d[0], null, !0)]
          ], k = 1; h = d[k]; k++) h.parentNode !== d[k - 1].parentNode ? b.push([e.cloneCell(h, null, !0)]) : b[b.length - 1].push(e.cloneCell(h, null, !0))
        });
        z.addListener("tablehasdeleted", function () {
          n(this, !1, "", null);
          L && f.remove(L)
        });
        z.addListener("beforepaste", function (c, e) {
          var k = this;
          c = k.selection.getRange();
          if (f.findParentByTagName(c.startContainer, "caption", !0)) c = k.document.createElement("div"),
            c.innerHTML = e.html,
            e.html = c[u.ie9below ? "innerText" : "textContent"];
          else {
            var h = G.getUETableBySelected(k);
            if (b) {
              k.fireEvent("saveScene");
              c = k.selection.getRange();
              var m = f.findParentByTagName(c.startContainer, ["td", "th"], !0);
              if (m) {
                h = O(m);
                if (l) {
                  var n = h.getCellInfo(m).rowIndex;
                  "TH" == m.tagName && n++;
                  c = 0;
                  for (var q; q = b[c++];) {
                    var t = h.insertRow(n++, "td");
                    for (var v = 0, w; w = q[v]; v++)(m = t.cells[v]) || (m = t.insertCell(v)),
                      m.innerHTML =
                        w.innerHTML,
                    w.getAttribute("width") && m.setAttribute("width", w.getAttribute("width")),
                    w.getAttribute("vAlign") && m.setAttribute("vAlign", w.getAttribute("vAlign")),
                    w.getAttribute("align") && m.setAttribute("align", w.getAttribute("align")),
                    w.style.cssText && (m.style.cssText = w.style.cssText);
                    for (v = 0;
                         (w = t.cells[v]) && q[v]; v++) w.innerHTML = q[v].innerHTML,
                    q[v].getAttribute("width") && w.setAttribute("width", q[v].getAttribute("width")),
                    q[v].getAttribute("vAlign") && w.setAttribute("vAlign", q[v].getAttribute("vAlign")),
                    q[v].getAttribute("align") && w.setAttribute("align", q[v].getAttribute("align")),
                    q[v].style.cssText && (w.style.cssText = q[v].style.cssText)
                  }
                } else {
                  if (g) {
                    n = h.getCellInfo(m);
                    v = m = 0;
                    for (q = b[0]; w = q[v++];) m += w.colSpan || 1;
                    k.__hasEnterExecCommand = !0;
                    for (c = 0; c < m; c++) k.execCommand("insertcol");
                    k.__hasEnterExecCommand = !1;
                    m = h.table.rows[0].cells[n.cellIndex];
                    "TH" == m.tagName && (m = h.table.rows[1].cells[n.cellIndex])
                  }
                  for (c = 0; q = b[c++];) {
                    var y = m;
                    for (v = 0; w = q[v++];) m ? (m.innerHTML = w.innerHTML, w.getAttribute("width") && m.setAttribute("width", w.getAttribute("width")), w.getAttribute("vAlign") && m.setAttribute("vAlign", w.getAttribute("vAlign")), w.getAttribute("align") && m.setAttribute("align", w.getAttribute("align")), w.style.cssText && (m.style.cssText = w.style.cssText), t = m, m = m.nextSibling) : (n = w.cloneNode(!0), f.removeAttributes(n, ["class", "rowSpan", "colSpan"]), t.parentNode.appendChild(n));
                    m = h.getNextCell(y, !0, !0);
                    if (!b[c]) break;
                    m || (n = h.getCellInfo(y), h.table.insertRow(h.table.rows.length), h.update(), m = h.getVSideCell(y, !0))
                  }
                }
                h.update()
              } else {
                h =
                  k.document.createElement("table");
                for (c = 0; q = b[c++];) {
                  t = h.insertRow(h.rows.length);
                  for (v = 0; w = q[v++];) n = G.cloneCell(w, null, !0),
                    f.removeAttributes(n, ["class"]),
                    t.appendChild(n);
                  2 == v && 1 < n.rowSpan && (n.rowSpan = 1)
                }
                c = G.getDefaultValue(k, void 0);
                c = k.body.offsetWidth - 2 * parseInt(f.getComputedStyle(k.body, "margin-left"), 10) - 2 * c.tableBorder - (k.options.offsetWidth || 0);
                k.execCommand("insertHTML", "<table  " + (g && l ? 'width="' + c + '"' : "") + ">" + h.innerHTML.replace(/>\s*</g, "><").replace(/\bth\b/gi, "td") + "</table>")
              }
              k.fireEvent("contentchange");
              k.fireEvent("saveScene");
              e.html = "";
              return !0
            }
            c = k.document.createElement("div");
            c.innerHTML = e.html;
            q = c.getElementsByTagName("table");
            f.findParentByTagName(k.selection.getStart(), "table") ? (p.each(q, function (a) {
              f.remove(a)
            }), f.findParentByTagName(k.selection.getStart(), "caption", !0) && (c.innerHTML = c[u.ie ? "innerText" : "textContent"])) : p.each(q, function (b) {
              d(b, !0);
              f.removeAttributes(b, ["style", "border"]);
              p.each(f.getElementsByTagName(b, "td"), function (b) {
                a(b) && f.fillNode(k.document, b);
                d(b, !0)
              })
            });
            e.html = c.innerHTML
          }
        });
        z.addListener("afterpaste", function () {
          p.each(f.getElementsByTagName(z.body, "table"), function (a) {
            if (a.offsetWidth > z.body.offsetWidth) {
              var b = G.getDefaultValue(z, a);
              a.style.width = z.body.offsetWidth - 2 * parseInt(f.getComputedStyle(z.body, "margin-left"), 10) - 2 * b.tableBorder - (z.options.offsetWidth || 0) + "px"
            }
          })
        });
        z.addListener("blur", function () {
          b = null
        });
        var m;
        z.addListener("keydown", function () {
          clearTimeout(m);
          m = setTimeout(function () {
            var a = z.selection.getRange();
            if (a = f.findParentByTagName(a.startContainer, ["th", "td"], !0)) {
              var b = a.parentNode.parentNode.parentNode;
              b.offsetWidth > b.getAttribute("width") && (a.style.wordBreak = "break-all")
            }
          }, 100)
        });
        z.addListener("selectionchange", function () {
          n(z, !1, "", null)
        });
        z.addListener("contentchange", function () {
          var a = this;
          if (!G.getUETableBySelected(a)) {
            var b = a.selection.getRange().startContainer;
            b = f.findParentByTagName(b, ["td", "th"], !0);
            p.each(f.getElementsByTagName(a.document, "table"), function (b) {
              !0 !== a.fireEvent("excludetable", b) && (b.ueTable = new G(b), b.onmouseover = function () {
                a.fireEvent("tablemouseover", b)
              }, b.onmousemove = function () {
                a.fireEvent("tablemousemove", b);
                a.options.tableDragable && e(!0, this, a);
                p.defer(function () {
                  a.fireEvent("contentchange", 50)
                }, !0)
              }, b.onmouseout = function () {
                a.fireEvent("tablemouseout", b);
                n(a, !1, "", null);
                E(a)
              }, b.onclick = function (b) {
                b = a.window.event || b;
                var d = c(b.target || b.srcElement);
                if (d) {
                  var e = O(d),
                    g = e.table,
                    h = e.getCellInfo(d),
                    f = a.selection.getRange();
                  k(g, d, b, !0) ? (g = e.getCell(e.indexTable[e.rowsNum - 1][h.colIndex].rowIndex, e.indexTable[e.rowsNum - 1][h.colIndex].cellIndex), b.shiftKey && e.selectedTds.length ? e.selectedTds[0] !== g ? (b = e.getCellsRange(e.selectedTds[0], g), e.setSelected(b)) : f && f.selectNodeContents(g).select() : d !== g ? (b = e.getCellsRange(d, g), e.setSelected(b)) : f && f.selectNodeContents(g).select()) : k(g, d, b) && (g = e.getCell(e.indexTable[h.rowIndex][e.colsNum - 1].rowIndex, e.indexTable[h.rowIndex][e.colsNum - 1].cellIndex), b.shiftKey && e.selectedTds.length ? e.selectedTds[0] !== g ? (b = e.getCellsRange(e.selectedTds[0], g), e.setSelected(b)) : f && f.selectNodeContents(g).select() : d !== g ? (b = e.getCellsRange(d, g), e.setSelected(b)) : f && f.selectNodeContents(g).select())
                }
              })
            });
            ca(a, !0)
          }
        });
        f.on(z.document, "mousemove", h);
        f.on(z.document, "mouseout", function (a) {
          "TABLE" == (a.target || a.srcElement).tagName && n(z, !1, "", null)
        });
        z.addListener("interlacetable", function (a, b, c) {
          if (b) {
            a = b.rows;
            b = a.length;
            for (var d = 0; d < b; d++) {
              var e = c || this.options.classList;
              a[d].className = e[d] ? e[d] : e[d % e.length]
            }
          }
        });
        z.addListener("uninterlacetable", function (a, b) {
          if (b) {
            a = b.rows;
            b = this.options.classList;
            for (var c = a.length, d = 0; d < c; d++) f.removeClasses(a[d], b)
          }
        });
        z.addListener("mousedown", q);
        z.addListener("mouseup", S);
        f.on(z.body, "dragstart", function (a) {
          S.call(z, "dragstart", a)
        });
        z.addOutputRule(function (a) {
          p.each(a.getNodesByTagName("div"), function (a) {
            "ue_tableDragLine" == a.getAttr("id") && a.parentNode.removeChild(a)
          })
        });
        var t = 0;
        z.addListener("mousedown", function () {
          t = 0
        });
        z.addListener("tabkeydown", function () {
          var b = this.selection.getRange(),
            c = b.getCommonAncestor(!0, !0),
            d = f.findParentByTagName(c, "table");
          if (d) {
            if (f.findParentByTagName(c, "caption", !0))(c =
              f.getElementsByTagName(d, "th td")) && c.length && b.setStart(c[0], 0).setCursor(!1, !0);
            else {
              c = f.findParentByTagName(c, ["td", "th"], !0);
              var e = O(c);
              t = 1 < c.rowSpan ? t : e.getCellInfo(c).rowIndex;
              (c = e.getTabNextCell(c, t)) ? a(c) ? b.setStart(c, 0).setCursor(!1, !0) : b.selectNodeContents(c).select() : (z.fireEvent("saveScene"), z.__hasEnterExecCommand = !0, this.execCommand("insertrownext"), z.__hasEnterExecCommand = !1, b = this.selection.getRange(), b.setStart(d.rows[d.rows.length - 1].cells[0], 0).setCursor(), z.fireEvent("saveScene"))
            }
            return !0
          }
        });
        u.ie && z.addListener("selectionchange", function () {
          n(this, !1, "", null)
        });
        z.addListener("keydown", function (a, b) {
          a = b.keyCode || b.which;
          8 != a && 46 != a && ((b = !b.ctrlKey && !b.metaKey && !b.shiftKey && !b.altKey) && G.removeSelectedClass(f.getElementsByTagName(this.body, "td")), (a = G.getUETableBySelected(this)) && b && a.clearSelected())
        });
        z.addListener("beforegetcontent", function () {
          ca(this, !1);
          u.ie && p.each(this.document.getElementsByTagName("caption"), function (a) {
            f.isEmptyNode(a) && (a.innerHTML = "&nbsp;")
          })
        });
        z.addListener("aftergetcontent", function () {
          ca(this, !0)
        });
        z.addListener("getAllHtml", function () {
          G.removeSelectedClass(z.document.getElementsByTagName("td"))
        });
        z.addListener("fullscreenchanged", function (a, b) {
          if (!b) {
            var c = this.body.offsetWidth / document.body.offsetWidth;
            a = f.getElementsByTagName(this.body, "table");
            p.each(a, function (a) {
              if (a.offsetWidth < z.body.offsetWidth) return !1;
              var b = f.getElementsByTagName(a, "td"),
                d = [];
              p.each(b, function (a) {
                d.push(a.offsetWidth)
              });
              for (var e = 0, k; k = b[e]; e++) k.setAttribute("width", Math.floor(d[e] * c));
              a.setAttribute("width", Math.floor(na(z, !0, G.getDefaultValue(z, void 0))))
            })
          }
        });
        var v = z.execCommand;
        z.execCommand = function (b, c) {
          b = b.toLowerCase();
          var d = G.getUETableBySelected(this),
            e = new D.Range(this.document),
            k = this.commands[b] || UE.commands[b];
          if (k) {
            if (!d || Y[b] || k.notNeedUndo || this.__hasEnterExecCommand) var g = v.apply(this, arguments);
            else {
              this.__hasEnterExecCommand = !0;
              this.fireEvent("beforeexeccommand", b);
              d = d.selectedTds;
              for (var h = k = -2, l, m, n = 0, q; q = d[n]; n++) if (a(q) ? e.setStart(q, 0).setCursor(!1, !0) : e.selectNode(q).select(!0), m = this.queryCommandState(b), l = this.queryCommandValue(b), -1 != m) {
                if (k !== m || h !== l) this._ignoreContentChange = !0,
                  g = v.apply(this, arguments),
                  this._ignoreContentChange = !1;
                k = this.queryCommandState(b);
                h = this.queryCommandValue(b);
                f.isEmptyBlock(q) && f.fillNode(this.document, q)
              }
              e.setStart(d[0], 0).shrinkBoundary(!0).setCursor(!1, !0);
              this.fireEvent("contentchange");
              this.fireEvent("afterexeccommand", b);
              this.__hasEnterExecCommand = !1;
              this._selectionChange()
            }
            return g
          }
        }
      })
    };
    UE.UETable.prototype.sortTable = function (d, b) {
      var c =
          this.table,
        a = c.rows,
        g = [],
        h = "TH" === a[0].cells[0].tagName,
        e = 0;
      if (this.selectedTds.length) {
        for (var f = this.cellsRange, k = f.endRowIndex + 1, n = f.beginRowIndex; n < k; n++) g[n] = a[n];
        g.splice(0, f.beginRowIndex);
        e = f.endRowIndex + 1 === this.rowsNum ? 0 : f.endRowIndex + 1
      } else for (n = 0, k = a.length; n < k; n++) g[n] = a[n];
      var m = {
        reversecurrent: function (a, b) {
          return 1
        },
        orderbyasc: function (a, b) {
          return (a.innerText || a.textContent).localeCompare(b.innerText || b.textContent)
        },
        reversebyasc: function (a, b) {
          return b.innerHTML.localeCompare(a.innerHTML)
        },
        orderbynum: function (a, b) {
          a = a[u.ie ? "innerText" : "textContent"].match(/\d+/);
          b = b[u.ie ? "innerText" : "textContent"].match(/\d+/);
          a && (a = +a[0]);
          b && (b = +b[0]);
          return (a || 0) - (b || 0)
        },
        reversebynum: function (a, b) {
          a = a[u.ie ? "innerText" : "textContent"].match(/\d+/);
          b = b[u.ie ? "innerText" : "textContent"].match(/\d+/);
          a && (a = +a[0]);
          b && (b = +b[0]);
          return (b || 0) - (a || 0)
        }
      };
      c.setAttribute("data-sort-type", b && "string" === typeof b && m[b] ? b : "");
      h && g.splice(0, 1);
      g = p.sort(g, function (a, c) {
        return b && "function" === typeof b ? b.call(this, a.cells[d], c.cells[d]) : b && "number" === typeof b ? 1 : b && "string" === typeof b && m[b] ? m[b].call(this, a.cells[d], c.cells[d]) : m.orderbyasc.call(this, a.cells[d], c.cells[d])
      });
      h = c.ownerDocument.createDocumentFragment();
      n = 0;
      for (k = g.length; n < k; n++) h.appendChild(g[n]);
      c = c.getElementsByTagName("tbody")[0];
      e ? c.insertBefore(h, a[e - f.endRowIndex + f.beginRowIndex - 1]) : c.appendChild(h)
    };
    UE.plugins.tablesort = function () {
      var d = this,
        b = UE.UETable;
      d.ready(function () {
        p.cssRule("tablesort", "table.sortEnabled tr.firstRow th,table.sortEnabled tr.firstRow td{padding-right:20px;background-repeat: no-repeat;background-position: center right;   background-image:url(" + d.options.themePath + d.options.theme + "/images/sortable.png);}", d.document);
        d.addListener("afterexeccommand", function (b, a) {
          "mergeright" != a && "mergedown" != a && "mergecells" != a || this.execCommand("disablesort")
        })
      });
      UE.commands.sorttable = {
        queryCommandState: function () {
          var c = b.getTableItemsByRange(this);
          if (!c.cell) return -1;
          c = c.table.getElementsByTagName("td");
          for (var a = 0, d; d = c[a++];) if (1 != d.rowSpan || 1 != d.colSpan) return -1;
          return 0
        },
        execCommand: function (c, a) {
          c = this.selection.getRange();
          var d = c.createBookmark(!0),
            h = b.getTableItemsByRange(this),
            e = h.cell;
          h = b.getUETable(h.table);
          e = h.getCellInfo(e);
          h.sortTable(e.cellIndex, a);
          c.moveToBookmark(d);
          try {
            c.select()
          } catch (l) {}
        }
      };
      UE.commands.enablesort = UE.commands.disablesort = {
        queryCommandState: function (c) {
          var a = b.getTableItemsByRange(this).table;
          if (a && "enablesort" == c) for (var d = f.getElementsByTagName(a, "th td"), h = 0; h < d.length; h++) if (1 < d[h].getAttribute("colspan") || 1 < d[h].getAttribute("rowspan")) return -1;
          return a ? "enablesort" == c ^ "sortEnabled" != a.getAttribute("data-sort") ? -1 : 0 : -1
        },
        execCommand: function (c) {
          var a = b.getTableItemsByRange(this).table;
          a.setAttribute("data-sort", "enablesort" == c ? "sortEnabled" : "sortDisabled");
          "enablesort" == c ? f.addClass(a, "sortEnabled") : f.removeClasses(a, "sortEnabled")
        }
      }
    };
    UE.plugins.contextmenu = function () {
      var d = this;
      d.setOpt("enableContextMenu", !0);
      if (!1 !== d.getOpt("enableContextMenu")) {
        var b = d.getLang("contextMenu"),
          c, a = d.options.contextMenu || [{
            label: b.selectall,
            cmdName: "selectall"
          },
            {
              label: b.cleardoc,
              cmdName: "cleardoc",
              exec: function () {
                confirm(b.confirmclear) && this.execCommand("cleardoc")
              }
            },
            "-", {
              label: b.unlink,
              cmdName: "unlink"
            },
            "-", {
              group: b.paragraph,
              icon: "justifyjustify",
              subMenu: [{
                label: b.justifyleft,
                cmdName: "justify",
                value: "left"
              },
                {
                  label: b.justifyright,
                  cmdName: "justify",
                  value: "right"
                },
                {
                  label: b.justifycenter,
                  cmdName: "justify",
                  value: "center"
                },
                {
                  label: b.justifyjustify,
                  cmdName: "justify",
                  value: "justify"
                }]
            },
            /*"-", {
              group: b.table,
              icon: "table",
              subMenu: [{
                label: b.inserttable,
                cmdName: "inserttable"
              },
                {
                  label: b.deletetable,
                  cmdName: "deletetable"
                },
                "-", {
                  label: b.deleterow,
                  cmdName: "deleterow"
                },
                {
                  label: b.deletecol,
                  cmdName: "deletecol"
                },
                {
                  label: b.insertcol,
                  cmdName: "insertcol"
                },
                {
                  label: b.insertcolnext,
                  cmdName: "insertcolnext"
                },
                {
                  label: b.insertrow,
                  cmdName: "insertrow"
                },
                {
                  label: b.insertrownext,
                  cmdName: "insertrownext"
                },
                "-", {
                  label: b.insertcaption,
                  cmdName: "insertcaption"
                },
                {
                  label: b.deletecaption,
                  cmdName: "deletecaption"
                },
                {
                  label: b.inserttitle,
                  cmdName: "inserttitle"
                },
                {
                  label: b.deletetitle,
                  cmdName: "deletetitle"
                },
                {
                  label: b.inserttitlecol,
                  cmdName: "inserttitlecol"
                },
                {
                  label: b.deletetitlecol,
                  cmdName: "deletetitlecol"
                },
                "-", {
                  label: b.mergecells,
                  cmdName: "mergecells"
                },
                {
                  label: b.mergeright,
                  cmdName: "mergeright"
                },
                {
                  label: b.mergedown,
                  cmdName: "mergedown"
                },
                "-", {
                  label: b.splittorows,
                  cmdName: "splittorows"
                },
                {
                  label: b.splittocols,
                  cmdName: "splittocols"
                },
                {
                  label: b.splittocells,
                  cmdName: "splittocells"
                },
                "-", {
                  label: b.averageDiseRow,
                  cmdName: "averagedistributerow"
                },
                {
                  label: b.averageDisCol,
                  cmdName: "averagedistributecol"
                },
                "-", {
                  label: b.edittd,
                  cmdName: "edittd",
                  exec: function () {
                    UE.ui.edittd && new UE.ui.edittd(this);
                    this.getDialog("edittd").open()
                  }
                },
                {
                  label: b.edittable,
                  cmdName: "edittable",
                  exec: function () {
                    UE.ui.edittable && new UE.ui.edittable(this);
                    this.getDialog("edittable").open()
                  }
                },
                {
                  label: b.setbordervisible,
                  cmdName: "setbordervisible"
                }]
            },
            {
              group: b.tablesort,
              icon: "tablesort",
              subMenu: [{
                label: b.enablesort,
                cmdName: "enablesort"
              },
                {
                  label: b.disablesort,
                  cmdName: "disablesort"
                },
                "-", {
                  label: b.reversecurrent,
                  cmdName: "sorttable",
                  value: "reversecurrent"
                },
                {
                  label: b.orderbyasc,
                  cmdName: "sorttable",
                  value: "orderbyasc"
                },
                {
                  label: b.reversebyasc,
                  cmdName: "sorttable",
                  value: "reversebyasc"
                },
                {
                  label: b.orderbynum,
                  cmdName: "sorttable",
                  value: "orderbynum"
                },
                {
                  label: b.reversebynum,
                  cmdName: "sorttable",
                  value: "reversebynum"
                }]
            },
            {
              group: b.borderbk,
              icon: "borderBack",
              subMenu: [{
                label: b.setcolor,
                cmdName: "interlacetable",
                exec: function () {
                  this.execCommand("interlacetable")
                }
              },
                {
                  label: b.unsetcolor,
                  cmdName: "uninterlacetable",
                  exec: function () {
                    this.execCommand("uninterlacetable")
                  }
                },
                {
                  label: b.setbackground,
                  cmdName: "settablebackground",
                  exec: function () {
                    this.execCommand("settablebackground", {
                      repeat: !0,
                      colorList: ["#bbb", "#ccc"]
                    })
                  }
                },
                {
                  label: b.unsetbackground,
                  cmdName: "cleartablebackground",
                  exec: function () {
                    this.execCommand("cleartablebackground")
                  }
                },
                {
                  label: b.redandblue,
                  cmdName: "settablebackground",
                  exec: function () {
                    this.execCommand("settablebackground", {
                      repeat: !0,
                      colorList: ["red", "blue"]
                    })
                  }
                },
                {
                  label: b.threecolorgradient,
                  cmdName: "settablebackground",
                  exec: function () {
                    this.execCommand("settablebackground", {
                      repeat: !0,
                      colorList: ["#aaa", "#bbb", "#ccc"]
                    })
                  }
                }]
            },
            {
              group: b.aligntd,
              icon: "aligntd",
              subMenu: [{
                cmdName: "cellalignment",
                value: {
                  align: "left",
                  vAlign: "top"
                }
              },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "center",
                    vAlign: "top"
                  }
                },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "right",
                    vAlign: "top"
                  }
                },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "left",
                    vAlign: "middle"
                  }
                },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "center",
                    vAlign: "middle"
                  }
                },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "right",
                    vAlign: "middle"
                  }
                },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "left",
                    vAlign: "bottom"
                  }
                },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "center",
                    vAlign: "bottom"
                  }
                },
                {
                  cmdName: "cellalignment",
                  value: {
                    align: "right",
                    vAlign: "bottom"
                  }
                }]
            },*/
            '-',
            {
              label:b.insertparagraphbefore,
              cmdName:'insertparagraph',
              value:true
            },
            {
              label:b.insertparagraphafter,
              cmdName:'insertparagraph'
            },
            {
              label:b['copy'],
              cmdName:'copy'
            },
            {
              label:b['paste'],
              cmdName:'paste'
            },
            {
              group: b.aligntable,
              icon: "aligntable",
              subMenu: [{
                cmdName: "tablealignment",
                className: "left",
                label: b.tableleft,
                value: "left"
              },
                {
                  cmdName: "tablealignment",
                  className: "center",
                  label: b.tablecenter,
                  value: "center"
                },
                {
                  cmdName: "tablealignment",
                  className: "right",
                  label: b.tableright,
                  value: "right"
                }]
            }];
        if (a.length) {
          var g = UE.ui.uiUtils;
          d.addListener("contextmenu", function (h, e) {
            h = g.getViewportOffsetByEvent(e);
            d.fireEvent("beforeselectionchange");
            c && c.destroy();
            for (var l = 0, k, n = []; k = a[l]; l++) {
              var m;
              (function (a) {
                if ("-" == a)(m = n[n.length - 1]) && "-" !== m && n.push("-");
                else if (a.hasOwnProperty("group")) {
                  for (var c = 0, e, k = []; e = a.subMenu[c]; c++)(function (a) {
                    "-" == a ? (m = k[k.length - 1]) && "-" !== m ? k.push("-") : k.splice(k.length - 1) : (d.commands[a.cmdName] || UE.commands[a.cmdName] || a.query) && -1 < (a.query ? a.query() : d.queryCommandState(a.cmdName)) && k.push({
                      label: a.label || d.getLang("contextMenu." + a.cmdName + (a.value || "")) || "",
                      className: "edui-for-" + a.cmdName + (a.className ? " edui-for-" + a.cmdName + "-" + a.className : ""),
                      onclick: a.exec ?
                        function () {
                          a.exec.call(d)
                        } : function () {
                          d.execCommand(a.cmdName, a.value)
                        }
                    })
                  })(e);
                  k.length && n.push({
                    label: function () {
                      switch (a.icon) {
                        case "table":
                          return d.getLang("contextMenu.table");
                        case "justifyjustify":
                          return d.getLang("contextMenu.paragraph");
                        case "aligntd":
                          return d.getLang("contextMenu.aligntd");
                        case "aligntable":
                          return d.getLang("contextMenu.aligntable");
                        case "tablesort":
                          return b.tablesort;
                        case "borderBack":
                          return b.borderbk;
                        default:
                          return ""
                      }
                    }(),
                    className: "edui-for-" + a.icon,
                    subMenu: {
                      items: k,
                      editor: d
                    }
                  })
                } else(d.commands[a.cmdName] || UE.commands[a.cmdName] || a.query) && -1 < (a.query ? a.query.call(d) : d.queryCommandState(a.cmdName)) && n.push({
                  label: a.label || d.getLang("contextMenu." + a.cmdName),
                  className: "edui-for-" + (a.icon ? a.icon : a.cmdName + (a.value || "")),
                  onclick: a.exec ?
                    function () {
                      a.exec.call(d)
                    } : function () {
                      d.execCommand(a.cmdName, a.value)
                    }
                })
              })(k)
            }
            if (e.target.nodeName === 'VIDEO') {
              n.splice(2, 0,
                {label:b['deletevideo'],
                  className:'edui-for-delete',
                  onclick:function () {
                    d.execCommand( 'deletevideo', e.target);
                  }})
            }
            if (e.target.nodeName === 'AUDIO') {
              n.splice(2, 0,
                {label:b['deletemusic'],
                  className:'edui-for-delete',
                  onclick:function () {
                    d.execCommand( 'deletemusic', e.target);
                  }})
            }
            // 如果是图片，则右键显示下载按钮
            if (e.target.nodeName === 'IMG') {
              n.splice(9, 0,
                {label:b['downloadimage'],
                  className:'edui-for-mergedown',
                  onclick:function () {
                    d.fireEvent( 'downloadimage', e.target);
                  }})
            }
            "-" == n[n.length - 1] && n.pop();
            c = new UE.ui.Menu({
              items: n,
              className: "edui-contextmenu",
              editor: d
            });
            c.render();
            c.showAt(h);
            d.fireEvent("aftershowcontextmenu", c);
            f.preventDefault(e);
            // if (u.ie) {
            //   try {
            //     var q =
            //       d.selection.getNative().createRange()
            //   } catch (t) {
            //     return
            //   }
            //   q.item && (new D.Range(d.document)).selectNode(q.item(0)).select(!0, !0)
            // }
          });
          d.addListener("aftershowcontextmenu", function (a, b) {
            if (d.zeroclipboard) {
              a = b.items;
              for (var c in a)"edui-for-copy" == a[c].className && d.zeroclipboard.clip(a[c].getDom())
            }
          })
        }
      }
    };
    UE.plugins.shortcutmenu = function () {
      var d = this,
        b, c = d.options.shortcutMenu.concat() || [];
      c.length && (d.addListener("mousedown", function (a, b) {
        b.shiftKey || b.ctrlKey || b.altKey || d.selection.clearRange()
      }), d.addListener("mouseup", function (a, d) {
        var g = this,
          e = {
            type: a,
            target: d.target || d.srcElement,
            screenX: d.screenX,
            screenY: d.screenY,
            clientX: d.clientX,
            clientY: d.clientY
          };
        setTimeout(function () {
          var k = g.selection.getRange();
          if (!1 === k.collapsed || "contextmenu" == a) k = k.getClosedNode(),
          k && "IMG" == k.tagName || (b || (b = new r.editor.ui.ShortCutMenu({
            editor: g,
            items: c,
            theme: g.options.theme,
            className: "edui-shortcutmenu"
          }), b.render(), g.fireEvent("afterrendershortcutmenu", b)), r.editor.ui.Popup.postHide(d), b.show(e, !! UE.plugins.contextmenu))
        });
        if ("contextmenu" == a && (f.preventDefault(d), u.ie9below)) {
          try {
            var l = g.selection.getNative().createRange()
          } catch (k) {
            return
          }
          l.item && (new D.Range(g.document)).selectNode(l.item(0)).select(!0, !0)
        }
      }), d.addListener("keydown", function (a) {
        "keydown" == a && b && !b.isHidden && b.hide()
      }))
    };
    UE.plugins.basestyle = function () {
      var d = {
          bold: ["strong", "b"],
          italic: ["em", "i"],
          subscript: ["sub"],
          superscript: ["sup"]
        },
        b = function (a, b) {
          return f.filterNodeList(a.selection.getStartElementPath(), b)
        },
        c = this;
      c.addshortcutkey({
        Bold: "ctrl+66",
        Italic: "ctrl+73",
        Underline: "ctrl+85"
      });
      c.addInputRule(function (a) {
        p.each(a.getNodesByTagName("b i"), function (a) {
          switch (a.tagName) {
            case "b":
              a.tagName = "strong";
              break;
            case "i":
              a.tagName = "em"
          }
        })
      });
      for (var a in d)(function (a, d) {
        c.commands[a] = {
          execCommand: function (a) {
            var e = c.selection.getRange(),
              k = b(this, d);
            if (e.collapsed) {
              if (k) a = c.document.createTextNode(""),
                e.insertNode(a).removeInlineStyle(d),
                e.setStartBefore(a),
                f.remove(a);
              else {
                k = e.document.createElement(d[0]);
                if ("superscript" == a || "subscript" == a) a = c.document.createTextNode(""),
                  e.insertNode(a).removeInlineStyle(["sub", "sup"]).setStartBefore(a).collapse(!0);
                e.insertNode(k).setStart(k, 0)
              }
              e.collapse(!0)
            } else {
              if ("superscript" == a || "subscript" == a) k && k.tagName.toLowerCase() == a || e.removeInlineStyle(["sub", "sup"]);
              k ? e.removeInlineStyle(d) : e.applyInlineStyle(d[0])
            }
            e.select()
          },
          queryCommandState: function () {
            return b(this, d) ? 1 : 0
          }
        }
      })(a, d[a])
    };
    UE.plugins.elementpath = function () {
      var d, b, c = this;
      c.setOpt("elementPathEnabled", !0);
      c.options.elementPathEnabled && (c.commands.elementpath = {
        execCommand: function (a, g) {
          a = b[g];
          var f = c.selection.getRange();
          d = 1 * g;
          f.selectNode(a).select()
        },
        queryCommandValue: function () {
          var a = [].concat(this.selection.getStartElementPath()).reverse(),
            c = [];
          b = a;
          for (var f = 0, e; e = a[f]; f++) if (3 != e.nodeType) {
            var l = e.tagName.toLowerCase();
            "img" == l && e.getAttribute("anchorname") && (l = "anchor");
            c[f] = l;
            if (d == f) {
              d = -1;
              break
            }
          }
          return c
        }
      })
    };
    UE.plugins.formatmatch = function () {
      function d(b, d) {
        if (u.webkit) var k = "IMG" == d.target.tagName ? d.target : null;
        c.undoManger && c.undoManger.save();
        b = c.selection.getRange();
        k = k || b.getClosedNode();
        if (g && k && "IMG" == k.tagName) k.style.cssText += ";float:" + (g.style.cssFloat || g.style.styleFloat || "none") + ";display:" + (g.style.display || "inline"),
          g = null;
        else if (!g) {
          if (b.collapsed) return;
          c.__hasEnterExecCommand = !0;
          k = c.options.removeFormatAttributes;
          c.options.removeFormatAttributes = "";
          c.execCommand("removeformat");
          c.options.removeFormatAttributes = k;
          c.__hasEnterExecCommand = !1;
          b = c.selection.getRange();
          a.length && b.applyInlineStyle(a[a.length - 1].tagName, null, a);
          b.select();
          l++;
          e ? c.fireEvent("updatemessage", e, {
            content: "\u5df2\u5237" + l + "\u6b21",
            timeout: 1E3
          }) : (e = "msg_" + (+new Date).toString(36), c.fireEvent("showmessage", {
            content: "\u5df2\u5237" + l + "\u6b21",
            timeout: 1E3,
            id: e
          }))
        }
        c.undoManger && c.undoManger.save()
      }
      function b() {
        k && (a = [], k = 0, c.removeListener("mouseup", d), h && c.fireEvent("hidemessage", h), c.fireEvent("showmessage", {
          content: "\u683c\u5f0f\u5237\u5df2\u5173\u95ed",
          timeout: 1E3
        }))
      }
      var c = this,
        a = [],
        g, h, e, l, k = 0,
        n = {
          justify: 1,
          rowspacing: 1,
          fontborder: 1,
          autotypeset: 1,
          subscript: 1,
          superscript: 1,
          directionality: 1
        };
      c.addListener("reset", function () {
        b()
      });
      for (var m in c.options.toolbars) for (var q in c.options.toolbars[m]) n[c.options.toolbars[m][q].toLowerCase()] = 1;
      n.cleardoc = 0;
      var t = c.queryCommandState;
      c.queryCommandState = function (a) {
        a = a.toLowerCase();
        return k && n[a] ? a in {
          formatmatch: 1,
          undo: 1
        } ? 1 : -1 : t.apply(this, arguments)
      };
      c.commands.formatmatch = {
        execCommand: function (e) {
          if (k) b();
          else if (e = c.selection.getRange(), e.collapsed) c.fireEvent("showmessage", {
            content: "\u8bf7\u5148\u9009\u62e9\u9700\u8981\u4f5c\u4e3a\u683c\u5f0f\u5237\u7684\u6587\u672c",
            timeout: 3E3
          });
          else {
            h = "msg_" + (+new Date).toString(36);
            c.fireEvent("showmessage", {
              content: "\u683c\u5f0f\u5237\u5df2\u5f00\u542f\uff0c\u8bf7\u9009\u62e9\u9700\u8981\u5237\u683c\u5f0f\u7684\u6587\u672c",
              keepshow: !0,
              id: h
            });
            g = e.getClosedNode();
            if (!g || "IMG" != g.tagName) {
              e.collapse(!0).shrinkBoundary();
              e = e.startContainer;
              a = f.findParents(e, !0, function (a) {
                return !f.isBlockElm(a) && 1 == a.nodeType
              });
              for (var m = 0, n; n = a[m]; m++) if ("A" == n.tagName) {
                a.splice(m, 1);
                break
              }
              0 == a.length && e.parentNode && (e = document.defaultView.getComputedStyle(e.parentNode, null), m = document.createElement("SPAN"), m.style.fontSize = e.fontSize, m.style.fontFamily = e.fontFamily, m.style.fontWeight = e.fontWeight, m.style.fontStyle = e.fontStyle, m.style.color = e.color, m.style.textDecoration = e.textDecoration, a.push(m))
            }
            c.addListener("mouseup", d);
            k = 1;
            l = 0
          }
        },
        queryCommandState: function () {
          return k
        },
        notNeedUndo: 1
      }
    };
    UE.plugin.register("searchreplace", function () {
      function d(a) {
        return (3 == a.nodeType ? a.nodeValue : a[u.ie ? "innerText" : "textContent"]).replace(f.fillChar, "")
      }
      function b(a, c, k) {
        var e =
          0;
        a = a.firstChild;
        for (var g; a;) {
          if (3 == a.nodeType) {
            if (g = d(a).replace(/(^[\t\r\n]+)|([\t\r\n]+$)/, "").length, e += g, e >= c) return {
              node: a,
              index: g - (e - c)
            }
          } else if (!x.$empty[a.tagName] && (g = d(a).replace(/(^[\t\r\n]+)|([\t\r\n]+$)/, "").length, e += g, e >= c && (g = b(a, g - (e - c), k)))) return g;
          a = f.getNextDomNode(a)
        }
      }
      function c(c, l) {
        var e = h || c.selection.getRange(),
            n = l.searchStr,
            m = c.document.createElement("span");
        m.innerHTML = "$$ueditor_searchreplace_key$$";
        e.shrinkBoundary(!0);
        if (!e.collapsed) {
          e.select();
          var o = c.selection.getText();
          if (RegExp("^" + l.searchStr + "$", l.casesensitive ? "" : "i").test(o)) {
            if (void 0 != l.replaceStr)
              return n = l.replaceStr,
              n = b.document.createTextNode(n),
              e.deleteContents().insertNode(n),
              e.select(),
              !0;
            e.collapse(-1 == l.dir)
          }
        }
        e.insertNode(m);
        e.enlargeToBlockElm(!0);
        var q = e.startContainer;
        o = d(q).indexOf("$$ueditor_searchreplace_key$$");
        e.setStartBefore(m);
        f.remove(m);
        a: {
          var m = q, z;
          q = l.all || 1 == l.dir ? "getNextDomNode" : "getPreDomNode";
          f.isBody(m) && (m = m.firstChild);
          for (; m;) {
            z = d(m);
            b: {
              var t = l,
              p = o, y = t.searchStr;
              -1 == t.dir && (z = z.split("").reverse().join(""), y = y.split("").reverse().join(""), p = z.length - p);
              for (var y = RegExp(y, "g" + (t.casesensitive ? "" : "i")), u = void 0; u = y.exec(z);)
                if (u.index >= p) {
                  z = -1 == t.dir ? z.length - u.index - t.searchStr.length : u.index; break b
                }
                z = -1
            }
            if (-1 != z) {
              o = {
                node: m,
                index: z
              };
              break a
            }
            for (m = f[q](m); m && g[m.nodeName.toLowerCase()];)
              m = f[q](m, !0); m && (o = -1 == l.dir ? d(m).length : 0)
          }
          o = void 0
        }
        if (o) return m = b(o.node, o.index, n),
          n = b(o.node, o.index + n.length, n),
          e.setStart(m.node, m.index).setEnd(n.node, n.index),
          void 0 !== l.replaceStr && (l = l.replaceStr, l = a.document.createTextNode(l), e.deleteContents().insertNode(l)),
          e.select(),
          !0;
        e.setCursor()
      }
      var a = this,
        g = {
          table: 1,
          tbody: 1,
          tr: 1,
          ol: 1,
          ul: 1
        },
        h = null;
      return {
        commands: {
          searchreplace: {
            execCommand: function (b, d) {
              p.extend(d, {
                all: !1,
                casesensitive: !1,
                dir: 1
              }, !0);
              b = 0;
              if (d.all) {
                h = null;
                var e = a.selection.getRange(),
                  g = a.body.firstChild;
                g && 1 == g.nodeType ? (e.setStart(g, 0), e.shrinkBoundary(!0)) : 3 == g.nodeType && e.setStartBefore(g);
                e.collapse(!0).select(!0);
                for (void 0 !== d.replaceStr && a.fireEvent("saveScene"); c(this, d);) b++,
                  h = a.selection.getRange(),
                  h.collapse(-1 == d.dir)
              } else void 0 !== d.replaceStr && a.fireEvent("saveScene"),
              c(this, d) && (b++, h = a.selection.getRange().scrollToView(a.window, 0), h.collapse(-1 == d.dir));
              b && a.fireEvent("saveScene");
              return b
            },
            notNeedUndo: 1
          }
        },
        bindEvents: {
          clearlastSearchResult: function () {
            h = null
          }
        }
      }
    });
    UE.commands.insertparagraph = {
      execCommand: function (d, b) {
        d = this.selection.getRange();
        for (var c = d.startContainer, a; c && !f.isBody(c);) a = c,
          c = c.parentNode;
        if (a) {
          c = this.document.createElement("section");
          c.setAttribute("class", "_135editor");
          c.setAttribute("data-role", "paragraph");
          var g = this.document.createElement("p");
          g.appendChild(this.document.createElement("br"));
          c.appendChild(g);
          b ? a.parentNode.insertBefore(c, a) : a.parentNode.insertBefore(c, a.nextSibling);
          d.setStart(g, 0).setCursor(!1, !0)
        }
      }
    };
    UE.plugin.register("autoupload", function () {
      function d(b, c) {
        var a = /image\/\w+/i.test(b.type) ? "image" : "file",
          d = "loading_" + (+new Date).toString(36);
        var h = c.getOpt(a + "FieldName");
        var e = c.getOpt(a + "UrlPrefix");
        var l = c.getOpt(a + "MaxSize");
        var k = c.getOpt(a + "AllowFiles");
        var n = c.getActionUrl(c.getOpt(a + "ActionName"));
        var m = function (a) {
          var b = c.document.getElementById(d);
          b && f.remove(b);
          c.fireEvent("showmessage", {
            id: d,
            content: a,
            type: "error",
            timeout: 1000
          })
        };
        if ("image" == a) {
          var q = '<img class="loadingclass" id="' + d + '" src="' + c.options.themePath + c.options.theme + '/images/spacer.gif">';
          var t = function (a) {
            var b = e + a.url,
              k = c.document.getElementById(d);
            k && (f.removeClasses(k, "loadingclass"), k.setAttribute("src", b), k.setAttribute("_src", b), k.setAttribute("alt", a.original || ""), k.removeAttribute("id"), c.trigger("contentchange", k))
          }
        } else q = '<p><img class="loadingclass" id="' + d + '" src="' + c.options.themePath + c.options.theme + '/images/spacer.gif"></p>',
          t = function (a) {
            a = e + a.url;
            var b = c.document.getElementById(d),
              k = c.selection.getRange(),
              g = k.createBookmark();
            k.selectNode(b).select();
            c.execCommand("insertfile", {
              url: a
            });
            k.moveToBookmark(g).select()
          };
        c.execCommand("inserthtml", q);
        c.getOpt(a + "ActionName") ? b.size > l ? m(c.getLang("autoupload.exceedSizeError")) : (l = b.name ? b.name.substr(b.name.lastIndexOf(".")) : "") && "image" != a || k && -1 == (k.join("") + ".").indexOf(l.toLowerCase() + ".") ? m(c.getLang("autoupload.exceedTypeError")) : (k = new XMLHttpRequest, a = new FormData, l = p.serializeParam(c.queryCommandValue("serverparam")) || "", n = p.formatUrl(n + (-1 == n.indexOf("?") ? "?" : "&") + l), a.append(h, b, b.name || "blob." + b.type.substr(6)), a.append("type", "ajax"), b = "appkey=" + c.getOpt("appkey"), b = "object" == typeof c.options.uploadFormData && c.options.uploadFormData.referer && "" != c.options.uploadFormData.referer ? b + ("&referer=" + encodeURIComponent(c.options.uploadFormData.referer)) : b + ("&referer=" + encodeURIComponent(window.location.href)), n = p.formatUrl(n + (-1 == n.indexOf("?") ? "?" : "&") + b), k.open("post", n, !0), k.setRequestHeader("X-Requested-With", "XMLHttpRequest"), k.addEventListener("load", function (a) {
          try {
            var b = (new Function("return " + p.trim(a.target.response)))();
            "SUCCESS" == b.state && b.url ? t(b) : m(b.state)
          } catch (y) {
            m(c.getLang("autoupload.loadError"))
          }
        }), k.send(a)) : m(c.getLang("autoupload.errorLoadConfig"))
      }
      return {
        outputRule: function (b) {
          p.each(b.getNodesByTagName("img"), function (b) {
            /\b(loaderrorclass)|(bloaderrorclass)\b/.test(b.getAttr("class")) && b.parentNode.removeChild(b)
          });
          p.each(b.getNodesByTagName("p"), function (b) {
            /\bloadpara\b/.test(b.getAttr("class")) && b.parentNode.removeChild(b)
          })
        },
        bindEvents: {
          defaultOptions: {
            enableDragUpload: !0,
            enablePasteUpload: !0
          },
          ready: function (b) {
            var c = this;
            if (window.FormData && window.FileReader) {
              b = function (a) {
                var b = !1,
                  f;
                if (f = "paste" == a.type ? a.clipboardData && a.clipboardData.items && 1 == a.clipboardData.items.length && /^image\//.test(a.clipboardData.items[0].type) ? a.clipboardData.items : null : a.dataTransfer && a.dataTransfer.files ? a.dataTransfer.files : null) {
                  for (var e = f.length, l; e--;) l = f[e],
                  l.getAsFile && (l = l.getAsFile()),
                  l && 0 < l.size && (d(l, c), b = !0);
                  b && a.preventDefault()
                }
              };
              if (!1 !== c.getOpt("enablePasteUpload")) f.on(c.body, "paste ", b);
              if (!1 !== c.getOpt("enableDragUpload")) f.on(c.body, "drop", b),
                f.on(c.body, "dragover", function (a) {
                  "Files" == a.dataTransfer.types[0] && a.preventDefault()
                });
              else if (u.gecko) f.on(c.body, "drop", function (a) {
                a.dataTransfer && a.dataTransfer.files && a.dataTransfer.files && a.preventDefault()
              });
              p.cssRule("loading", ".loadingclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-left:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}", this.document)
            }
          }
        }
      }
    });
    UE.plugin.register("autosave", function () {
      function d(d) {
        if (!(20 > new Date - c)) if (d.hasContents()) {
          c = new Date;
          d._saveFlag = null;
          var g = b.body.innerHTML;
          !1 !== d.fireEvent("beforeautosave", {
            content: g
          }) && (b.setPreferences(a, g), d.fireEvent("afterautosave", {
            content: g
          }))
        } else a && b.removePreferences(a)
      }
      var b = this,
        c = new Date,
        a = null;
      return {
        defaultOptions: {
          saveInterval: 500,
          enableAutoSave: !0
        },
        bindEvents: {
          ready: function () {
            var c = b.key ? b.key + "-drafts-data" : (b.container.parentNode.id || "ue-common") + "-drafts-data";
            a = (location.protocol + location.host + location.pathname).replace(/[.:\/]/g, "_") + c
          },
          contentchange: function () {
            b.getOpt("enableAutoSave") && a && (b._saveFlag && window.clearTimeout(b._saveFlag), 0 < b.options.saveInterval ? b._saveFlag = window.setTimeout(function () {
              d(b)
            }, b.options.saveInterval) : d(b))
          }
        },
        commands: {
          clearlocaldata: {
            execCommand: function (c, d) {
              a && b.getPreferences(a) && b.removePreferences(a)
            },
            notNeedUndo: !0,
            ignoreContentChange: !0
          },
          getlocaldata: {
            execCommand: function (c, d) {
              return a ? b.getPreferences(a) || "" : ""
            },
            notNeedUndo: !0,
            ignoreContentChange: !0
          },
          drafts: {
            execCommand: function (c, d) {
              a && (b.body.innerHTML = b.getPreferences(a) || "<p>" + f.fillHtml + "</p>", b.focus(!0))
            },
            queryCommandState: function () {
              return a ? null === b.getPreferences(a) ? -1 : 0 : -1
            },
            notNeedUndo: !0,
            ignoreContentChange: !0
          }
        }
      }
    });
    UE.plugin.register("section", function () {
      function d(a) {
        this.tag = "";
        this.level = -1;
        this.parentSection = this.previousSection = this.nextSection = this.dom = null;
        this.startAddress = [];
        this.endAddress = [];
        this.children = []
      }
      function b(a) {
        var b =
          new d;
        return p.extend(b, a)
      }
      function c(a, b) {
        for (var c = 0; c < a.length; c++) {
          if (!b.childNodes) return null;
          b = b.childNodes[a[c]]
        }
        return b
      }
      var a = this;
      return {
        bindMultiEvents: {
          type: "aftersetcontent afterscencerestore",
          handler: function () {
            a.fireEvent("updateSections")
          }
        },
        bindEvents: {
          ready: function () {
            a.fireEvent("updateSections");
            f.on(a.body, "drop paste", function () {
              a.fireEvent("updateSections")
            })
          },
          afterexeccommand: function (b, c) {
            "paragraph" == c && a.fireEvent("updateSections")
          },
          keyup: function (a, b) {
            1 != this.selection.getRange().collapsed ? this.fireEvent("updateSections") : (a = b.keyCode || b.which, 13 != a && 8 != a && 46 != a || this.fireEvent("updateSections"))
          }
        },
        commands: {
          getsections: {
            execCommand: function (a, c) {
              function d(a, c) {
                var e = null;
                a = a.childNodes;
                for (var h = 0, l = a.length; h < l; h++) {
                  var m = a[h];
                  a: {
                    var n = m;
                    for (var q = 0; q < g.length; q++) if (g[q](n)) {
                      n = q;
                      break a
                    }
                    n = -1
                  }
                  if (0 <= n) {
                    e = k.selection.getRange().selectNode(m).createAddress(!0).startAddress;
                    m = b({
                      tag: m.tagName,
                      title: m.innerText || m.textContent || "",
                      level: n,
                      dom: m,
                      startAddress: p.clone(e, []),
                      endAddress: p.clone(e, []),
                      children: []
                    });
                    f.nextSection = m;
                    for (e = m.previousSection = f; n <= e.level;) e = e.parentSection;
                    m.parentSection = e;
                    e.children.push(m);
                    e = f = m
                  } else 1 === m.nodeType && d(m, c),
                  e && e.endAddress[e.endAddress.length - 1]++
                }
              }
              var g = c || "h1 h2 h3 h4 h5 h6".split(" ");
              for (a = 0; a < g.length; a++)"string" == typeof g[a] ? g[a] = function (a) {
                return function (b) {
                  return b.tagName == a.toUpperCase()
                }
              }(g[a]) : "function" != typeof g[a] && (g[a] = function (a) {
                return null
              });
              var k = this,
                f = a = b({
                  level: -1,
                  title: "root"
                });
              d(k.body, a);
              return a
            },
            notNeedUndo: !0
          },
          movesection: {
            execCommand: function (a, b, d, l) {
              if (b && d && -1 != d.level) {
                d = l ? d.endAddress : d.startAddress;
                a = c(d, this.body);
                var e;
                if (!(e = !d || !a)) {
                  e = b.startAddress;
                  for (var g = !1, h = !1, q = 0; q < e.length && !(q >= d.length); q++) if (d[q] > e[q]) {
                    g = !0;
                    break
                  } else if (d[q] < e[q]) break;
                  for (q = 0; q < b.endAddress.length && !(q >= d.length); q++) if (d[q] < e[q]) {
                    h = !0;
                    break
                  } else if (d[q] > e[q]) break;
                  e = g && h
                }
                if (!e) {
                  d = c(b.startAddress, this.body);
                  b = c(b.endAddress, this.body);
                  if (l) for (l = b; l && !(f.getPosition(d, l) & f.POSITION_FOLLOWING);) {
                    e = l.previousSibling;
                    f.insertAfter(a, l);
                    if (l == d) break;
                    l = e
                  } else for (l = d; l && !(f.getPosition(l, b) & f.POSITION_FOLLOWING);) {
                    e = l.nextSibling;
                    a.parentNode.insertBefore(l, a);
                    if (l == b) break;
                    l = e
                  }
                  this.fireEvent("updateSections")
                }
              }
            }
          },
          deletesection: {
            execCommand: function (a, b, c) {
              function d(a) {
                for (var b = e.body, c = 0; c < a.length; c++) {
                  if (!b.childNodes) return null;
                  b = b.childNodes[a[c]]
                }
                return b
              }
              var e = this;
              if (b) {
                a = d(b.startAddress);
                b = d(b.endAddress);
                if (c) f.remove(a);
                else for (; a && f.inDoc(b, e.document) && !(f.getPosition(a, b) & f.POSITION_FOLLOWING);) c = a.nextSibling,
                  f.remove(a),
                  a = c;
                e.fireEvent("updateSections")
              }
            }
          },
          selectsection: {
            execCommand: function (a, b) {
              if (!b && !b.dom) return !1;
              a = this.selection.getRange();
              b = {
                startAddress: p.clone(b.startAddress, []),
                endAddress: p.clone(b.endAddress, [])
              };
              b.endAddress[b.endAddress.length - 1]++;
              a.moveToAddress(b).select().scrollToView();
              return !0
            },
            notNeedUndo: !0
          },
          scrolltosection: {
            execCommand: function (a, b) {
              if (!b && !b.dom) return !1;
              a = this.selection.getRange();
              b = {
                startAddress: b.startAddress,
                endAddress: b.endAddress
              };
              b.endAddress[b.endAddress.length - 1]++;
              a.moveToAddress(b).scrollToView();
              return !0
            },
            notNeedUndo: !0
          }
        }
      }
    });
    UE.plugin.register("simpleupload", function () {
      function d() {
        var d = a.offsetWidth || 20,
          h = a.offsetHeight || 20,
          e = document.createElement("iframe"),
          l = "display:block;width:" + d + "px;height:" + h + "px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;";
        f.on(e, "load", function () {
          var a = (+new Date).toString(36);
          var g = e.contentDocument || e.contentWindow.document;
          var m = g.body;
          var q = g.createElement("div");
          var t = '<form id="edui_form_' + a + '" target="edui_iframe_' + a + '" method="POST" enctype="multipart/form-data" action="' + b.getOpt("serverUrl") + '" style="' + l + '">',
            v = !1;
          if (b.options.uploadFormData && "object" == typeof b.options.uploadFormData) for (var w in b.options.uploadFormData) {
            if ("referer" == w) if ("" != b.options.uploadFormData[w]) v = !0;
            else continue;
            t += '<input type="hidden" name="' + w + '" value="' + b.options.uploadFormData[w] + '">'
          }
          v || (t += '<input type="hidden" name="referer" value="' + window.location.href + '">');
          t += '<input type="hidden" name="appkey" value="' + b.getOpt("appkey") + '">';
          t = t + '<input type="hidden" name="returnType" value="postmsg"><input id="edui_input_' + a + '" type="file" accept="image/gif,image/jpg,image/jpeg,image/png"  name="' + b.options.imageFieldName + '" style="' + l + '">';
          q.innerHTML = t + '</form><iframe id="edui_iframe_' + a + '" name="edui_iframe_' + a + '" style="display:none;width:0;height:0;border:0;margin:0;padding:0;position:absolute;"></iframe>';
          q.className = "edui-" + b.options.theme;
          q.id = b.ui.id + "_iframeupload";
          m.style.cssText = l;
          m.style.width = d + "px";
          m.style.height = h + "px";
          m.appendChild(q);
          m.parentNode && (m.parentNode.style.width = d + "px", m.parentNode.style.height = d + "px");
          var y = g.getElementById("edui_form_" + a),
            r = g.getElementById("edui_input_" + a);
          g.getElementById("edui_iframe_" + a);
          f.on(r, "change", function () {
            function a(e) {
              try {
                var k = p.str2json(e.data);
                var g = b.options.imageUrlPrefix + k.url;
                if ("SUCCESS" == k.state && k.url) {
                  var h = b.document.getElementById(d);
                  f.removeClasses(h, "loadingclass");
                  h.setAttribute("src", g);
                  h.setAttribute("_src", g);
                  h.setAttribute("alt", k.original || "");
                  k.aid && (h.setAttribute("aid", "attachimg_" + k.aid), h.setAttribute("id", "aimg_" + k.aid));
                  b.options.uploadCallback && "function" == typeof b.options.uploadCallback && b.options.uploadCallback(k);
                  h.removeAttribute("id");
                  b.fireEvent("afterinsertimage", [{
                    src: g
                  }])
                } else c && c(k.state)
              } catch (ca) {
                c && c(b.getLang("simpleupload.loadError"))
              }
              y.reset();
              window.removeEventListener("message", a)
            }
            function c(a) {
              if (d) {
                var c = b.document.getElementById(d);
                c && f.remove(c);
                b.fireEvent("showmessage", {
                  id: d,
                  content: a,
                  type: "error",
                  timeout: 1000
                })
              }
            }
            if (r.value) {
              var d = "loading_" + (+new Date).toString(36),
                e = p.serializeParam(b.queryCommandValue("serverparam")) || "",
                k = b.getActionUrl(b.getOpt("imageActionName")),
                g = b.getOpt("imageAllowFiles");
              b.focus();
              b.execCommand("inserthtml", '<img class="loadingclass" id="' + d + '" src="' + b.options.themePath + b.options.theme + '/images/spacer.gif">');
              if (b.getOpt("imageActionName")) {
                var h = r.value;
                h = h ? h.substr(h.lastIndexOf(".")) : "";
                !h || g && -1 == (g.join("") + ".").indexOf(h.toLowerCase() + ".") ? c(b.getLang("simpleupload.exceedTypeError")) : (g = r.files[0]) && g.size > b.getOpt("imageMaxSize") ? (r.value = "", c(b.getLang("simpleupload.exceedSizeError"))) : (window.addEventListener("message", a, !1), y.action = p.formatUrl(k + (-1 == k.indexOf("?") ? "?domain=1&" : "&domain=1&") + e), y.submit())
              } else errorHandler(b.getLang("autoupload.errorLoadConfig"))
            }
          });
          var u;
          b.addListener("selectionchange", function () {
            clearTimeout(u);
            u = setTimeout(function () {
              -1 == b.queryCommandState("simpleupload") ? r.disabled = "disabled" : r.disabled = !1
            }, 400)
          });
          c = !0
        });
        e.style.cssText = l;
        a.appendChild(e)
      }
      var b = this,
        c = !1,
        a;
      return {
        bindEvents: {
          ready: function () {
            p.cssRule("loading", ".loadingclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}", this.document)
          },
          simpleuploadbtnready: function (c, f) {
            a = f;
            b.afterConfigReady(d)
          }
        },
        outputRule: function (a) {
          p.each(a.getNodesByTagName("img"), function (a) {
            /\b(loaderrorclass)|(bloaderrorclass)\b/.test(a.getAttr("class")) && a.parentNode.removeChild(a)
          })
        },
        commands: {
          simpleupload: {
            queryCommandState: function () {
              return c ? 0 : -1
            }
          }
        }
      }
    });
    UE.plugin.register("serverparam", function () {
      var d = {};
      return {
        commands: {
          serverparam: {
            execCommand: function (b, c, a) {
              void 0 === c || null === c ? d = {} : p.isString(c) ? void 0 === a || null === a ? delete d[c] : d[c] = a : p.isObject(c) ? p.extend(d, c, !1) : p.isFunction(c) && p.extend(d, c(), !1)
            },
            queryCommandValue: function () {
              return d || {}
            }
          }
        }
      }
    });
    UE.plugin.register("uploadword", function () {
      function d() {
        var d = a.offsetWidth || 20,
          k = a.offsetHeight || 20,
          f = document.createElement("iframe"),
          h = "display:block;width:" + d + "px;height:" + k + "px;overflow:hidden;border:0;margin:0;padding:0;position:absolute;top:0;left:0;filter:alpha(opacity=0);-moz-opacity:0;-khtml-opacity: 0;opacity: 0;cursor:pointer;";
        e.on(f, "load", function () {
          function a() {
            x.reset();
            e.un(C, "load", a)
          }
          var l = (+new Date).toString(16),
            m = "//" + b.getOpt("plat_host") + "/uploadfiles/wordToHtml?return=postmsg&appkey=" + b.getOpt("appkey");
          var n = f.contentDocument || f.contentWindow.document;
          var y = n.body;
          var p = n.createElement("div");
          m = '<form id="edui_form_' + l + '" target="edui_iframe_' + l + '" method="POST" enctype="multipart/form-data" action="' + m + '" style="' + h + '">';
          var r = !1;
          if (b.options.uploadFormData && "object" == typeof b.options.uploadFormData) for (var u in b.options.uploadFormData) {
            if ("referer" == u) if ("" != b.options.uploadFormData[u]) r = !0;
            else continue;
            m += '<input type="hidden" name="' + u + '" value="' + b.options.uploadFormData[u] + '">'
          }
          r || (m += '<input type="hidden" name="referer" value="' + window.location.href + '">');
          m += '<input id="edui_input_' + l + '" title="Word\u6587\u6863\u5bfc\u5165" type="file" accept="text/plain,application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/rtf" name="textfile" style="' + h + '"></form><iframe id="edui_iframe_' + l + '" name="edui_iframe_' + l + '" style="display:none;width:0;height:0;border:0;margin:0;padding:0;position:absolute;"></iframe>';
          p.innerHTML = m;
          p.className = "edui-" + b.options.theme;
          p.id = b.ui.id + "_iframeupload";
          y.style.cssText = h;
          y.style.width = d + "px";
          y.style.height = k + "px";
          y.appendChild(p);
          y.parentNode && (y.parentNode.style.width = d + "px", y.parentNode.style.height = d + "px");
          var x = n.getElementById("edui_form_" + l),
            A = n.getElementById("edui_input_" + l),
            C = n.getElementById("edui_iframe_" + l);
          (l = window.localStorage.getItem("upload_word")) && window.postMessage({
            ret: 0,
            action: "wordToHtml",
            type: "refresh",
            msg: l
          }, "*");
          var M, J, H;
          window.addEventListener("message", function (a) {
            if (!("object" !== typeof a.data || 0 > a.origin.indexOf("//" + b.getOpt("plat_host")))) {
              if (M) {
                var c = b.document.getElementById(M);
                c && e.remove(c)
              }
              if ("setContent" == a.data.action) b.execCommand("inserthtml", a.data.msg);
              else if ("wordToHtml" == a.data.action) {
                var d = c = "";
                b.getOpt("open_editor") ? (c = "\u6587\u6863\u4e0a\u4f20\u6210\u529f\uff0c\u8bf7\u7b49\u5f85\u670d\u52a1\u5668\u8f6c\u6362\u5904\u7406\u3002", d = "\u4e0a\u4f20\u6587\u6863\u5df2\u8f6c\u6362\u6210\u529f\uff0c\u662f\u5426\u6e05\u7a7a\u5f53\u524d\u5185\u5bb9\u5e76\u7acb\u5373\u7f16\u8f91\u3002\n\u82e5\u5f53\u524d\u7f16\u8f91\u5185\u5bb9\u6709\u7528\uff0c\u8bf7\u5148\u4fdd\u5b58\u5f53\u524d\u5185\u5bb9\u540e\u518d\u5237\u65b0\u9875\u9762\uff0c\u6839\u636e\u63d0\u793a\u7f6e\u5165\u5185\u5bb9\u3002") : (c = "\u6587\u6863\u4e0a\u4f20\u6210\u529f\uff0c\u8bf7\u7b49\u5f85\u670d\u52a1\u5668\u8f6c\u6362\u5904\u7406\u3002\u670d\u52a1\u5668\u5904\u7406\u5b8c\u6210\u540e\uff0c\u5c06\u4f1a\u81ea\u52a8\u5b58\u5165\u201c\u6211\u7684\u6587\u7ae0\u201d\u3002", d = "\u4e0a\u4f20\u6587\u6863\u5df2\u8f6c\u6362\u6210\u529f\uff0c\u662f\u5426\u653e\u5f03\u5f53\u524d\u5185\u5bb9\u5e76\u7acb\u5373\u7f16\u8f91\u3002\n\u82e5\u4e0d\u7acb\u5373\u5bfc\u5165\uff0c\u4e4b\u540e\u53ef\u5728\u201c\u6211\u7684\u6587\u7ae0\u201d\u4e2d\u67e5\u770b\u3002");
                a.data.type && "refresh" == a.data.type && (c = "\u6b63\u5728\u4e3a\u60a8\u68c0\u67e5\u4e0a\u6b21\u4e0a\u4f20\u7684\u6587\u6863\u662f\u5426\u5904\u7406\u5b8c\u6bd5\uff0c\u82e5\u5904\u7406\u5b8c\u6210\u5219\u81ea\u52a8\u52a0\u8f7d\u5185\u5bb9\u7f16\u8f91\uff0c\u65e0\u9700\u91cd\u590d\u4e0a\u4f20\u3002");
                b.fireEvent("showmessage", {
                  id: M,
                  content: c,
                  type: "success",
                  timeout: 18E3
                });
                var k = a.data.msg;
                window.localStorage.setItem("upload_word", k);
                J = setInterval(function () {
                  var a = k.split("_");
                  jQuery.ajax({
                    type: "get",
                    dataType: "json",
                    url: "//" + b.getOpt("plat_host") + "/uploadfiles/wdresult/" + a[0] + "/" + a[1] + ".json?appkey=" + b.getOpt("appkey"),
                    success: function (c) {
                      1 != c.ret && window.localStorage.removeItem("upload_word");
                      0 == c.ret && (clearTimeout(H), clearInterval(J), "" == b.getContent() || confirm(d)) && (window.current_edit_msg_id =
                        a[1], b.setContent(c.data.WxMsg.content), b.fireEvent("catchRemoteImage"))
                    }
                  })
                }, 6E3);
                H = setTimeout(function () {
                  b.fireEvent("showmessage", {
                    id: M,
                    content: "\u4e0a\u4f20\u6587\u6863\u6682\u672a\u5904\u7406\u5b8c\uff0c\u60a8\u53ef\u4ee5\u7a0d\u5019\u5237\u65b0\u67e5\u770b\u662f\u5426\u5904\u7406\u5b8c\u6bd5\u3002",
                    type: "error",
                    timeout: 6E3
                  });
                  clearInterval(J)
                }, 9E4)
              } else "msg" == a.data.action && b.fireEvent("showmessage", {
                id: "upload-word-error",
                content: a.data.msg,
                type: "error",
                timeout: 8E3
              })
            }
          }, !1);
          e.on(A, "click", function (a) {
            if (!b.getOpt("appkey") && sso && !sso.check_userlogin()) return a.stopPropagation(),
              a.preventDefault(),
              !1
          });
          e.on(A, "change", function () {
            if (A.value) {
              M = "loading_" + (+new Date).toString(16);
              var c = g.serializeParam(b.queryCommandValue("serverparam")) || "",
                d = "//" + b.getOpt("plat_host") + "/uploadfiles/wordToHtml?return=postmsg&appkey=" + b.getOpt("appkey"),
                k = ".doc .docx .ppt .pptx .xls .xlsx .pdf .rtf .txt".split(" "),
                f = A.files[0];
              f && 5 < Math.round(100 * f.size / 1048576) / 100 ? showErrorMessage("\u6587\u6863\u5927\u5c0f\u8d85\u8fc7\u4e865M,\u8bf7\u9009\u62e9\u8f83\u5c0f\u7684\u6587\u6863") : (b.focus(), b.execCommand("inserthtml", '<p id="' + M + '"><img class="loadingclass"  src="' + b.options.themePath + b.options.theme + '/images/spacer.gif" title="' + (b.getLang("simpleupload.loading") || "") + '" >\u6587\u6863\u5904\u7406\u65f6\u95f4\u8f83\u957f\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85...</p>'), b.getOpt("imageActionName") ? (f = (f = A.value) ? f.substr(f.lastIndexOf(".")) : "", !f || k && -1 == (k.join("") + ".").indexOf(f.toLowerCase() + ".") ? (c = b.getLang("simpleupload.exceedTypeError"), M && ((d = b.document.getElementById(M)) && e.remove(d), b.fireEvent("showmessage", {
                id: M,
                content: c,
                type: "error",
                timeout: 6E3
              }))) : (e.on(C, "load", a), x.action = g.formatUrl(d + (-1 == d.indexOf("?") ? "?" : "&") + c), x.submit())) : errorHandler(b.getLang("autoupload.errorLoadConfig")))
            }
          });
          var D;
          b.addListener("selectionchange", function () {
            clearTimeout(D);
            D = setTimeout(function () {
              -1 == b.queryCommandState("uploadword") ? A.disabled = "disabled" : A.disabled = !1
            }, 400)
          });
          c = !0
        });
        f.style.cssText = h;
        a.appendChild(f)
      }
      var b = this,
        c = !1,
        a, g = r.editor.utils,
        f = r.editor.ui,
        e = r.editor.dom.domUtils;
      f.uploadword = function (a) {
        var b = new f.Button({
          className: "edui-for-uploadword",
          title: "\u6587\u6863\u5bfc\u5165",
          onclick: function () {},
          theme: a.options.theme,
          showText: !1
        });
        f.buttons.uploadword = b;
        a.addListener("ready", function () {
          var c = b.getDom("body").children[0];
          a.fireEvent("uploadwordbtnready", c)
        });
        a.addListener("selectionchange", function (c, d, e) {
          c = a.queryCommandState("uploadword"); - 1 == c ? (b.setDisabled(!0), b.setChecked(!1)) : e || (b.setDisabled(!1), b.setChecked(c))
        });
        return b
      };
      return {
        bindEvents: {
          ready: function () {
            g.cssRule("loading", ".loadingclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loading.gif') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}\n.loaderrorclass{display:inline-block;cursor:default;background: url('" + this.options.themePath + this.options.theme + "/images/loaderror.png') no-repeat center center transparent;border:1px solid #cccccc;margin-right:1px;height: 22px;width: 22px;}", this.document)
          },
          uploadwordbtnready: function (c, e) {
            a = e;
            b.afterConfigReady(d)
          }
        },
        outputRule: function (a) {
          g.each(a.getNodesByTagName("img"), function (a) {
            /\b(loaderrorclass)|(bloaderrorclass)\b/.test(a.getAttr("class")) && a.parentNode.removeChild(a)
          })
        },
        commands: {
          uploadword: {
            queryCommandState: function () {
              return c ? 0 : -1
            }
          }
        }
      }
    });
    UE.plugins.catchremoteimage = function () {
      var d = this,
        b = UE.ajax;
      !1 !== d.options.catchRemoteImageEnable && (d.setOpt({
        catchRemoteImageEnable: !1
      }), d.addListener("afterpaste", function () {
        d.fireEvent("catchRemoteImage")
      }), d.addListener("catchRemoteImage", function () {
        function c(a, c) {
          var g = p.serializeParam(d.queryCommandValue("serverparam")) || "";
          g = p.formatUrl(h + (-1 == h.indexOf("?") ? "?" : "&") + g);
          var f = p.isCrossDomainUrl(g),
            m = [];
          m.push(a);
          f = {
            method: "POST",
            dataType: f ? "jsonp" : "",
            timeout: 6E4,
            onsuccess: function (b) {
              try {
                var g = void 0 !== b.state ? b : eval("(" + b.responseText + ")")
              } catch (E) {
                return
              }
              var f = g.list;
              if (f && 0 < f.length) {
                for (g = 0; g < f.length; g++) {
                  var h = f[g];
                  b = c.getAttribute("style");
                  if ((a == h.source || a == h.source.replace("&amp;", "&")) && "SUCCESS" == h.state) {
                    g = e + h.url;
                    c.setAttribute("style", b.replace(a, g));
                    break
                  }
                }
                n++;
                d.getOpt("open_editor") && d.getOpt("show_catch_msg") && d.fireEvent("showmessage", {
                  id: "catchimage-msg",
                  content: "\u6709" + n + "\u5f20\u8fdc\u7a0b\u56fe\u7247\u6210\u529f\u4fdd\u5b58\uff0c\u5171" + k + "\u5f20",
                  type: "success",
                  timeout: 3E3
                })
              }
            },
            onerror: function () {
              d.fireEvent("catchremoteerror")
            }
          };
          f[l] = m;
          f.data = {
            appkey: d.getOpt("appkey")
          };
          b.request(g, f)
        }
        function a(a, c) {
          var e = p.serializeParam(d.queryCommandValue("serverparam")) || "";
          e =
            p.formatUrl(h + (-1 == h.indexOf("?") ? "?" : "&") + e);
          c = {
            method: "POST",
            dataType: p.isCrossDomainUrl(e) ? "jsonp" : "",
            timeout: 6E4,
            onsuccess: c.success,
            onerror: c.error
          };
          c[l] = a;
          c.data = {
            appkey: d.getOpt("appkey")
          };
          b.request(e, c)
        }
        for (var g = d.getOpt("catcherLocalDomain"), h = d.getActionUrl("catchimage"), e = d.getOpt("catcherUrlPrefix"), l = d.getOpt("catcherFieldName"), k = 0, n = 0, m = function (a, b) {
          if (-1 != a.indexOf(location.host) || /(^\.)|(^\/)/.test(a)) return !0;
          if (b) for (var c = 0, d; d = b[c++];) if (-1 !== a.indexOf(d)) return !0;
          return !1
        }, q = f.getElementsByTagName(d.document, "section"), t = 0, v; v = q[t++];) {
          var w = "",
            y = v.getAttribute("style");
          if (y) {
            y = y.replace("&amp;", "&");
            var r = /['|"]\s*(http[s]?:\/\/[^;\)]+?)['|"]/i;
            (r = y.match(r)) && r[0] ? w = r[1] : (r = /\(\s*(http[s]?:\/\/[^;\)\s]+?)\)/i, (r = y.match(r)) && r[0] && (w = r[1]));
            "" != w && /^(https?|ftp):/i.test(w) && !m(w, g) && (k++, c(w, v))
          }
        }
        q = [];
        var u = f.getElementsByTagName(d.document, "img");
        for (t = 0; v = u[t++];) v.getAttribute("word_img") || (v.removeAttribute("data-src"), v = v.getAttribute("_src") || v.src || "", "" != v && /^(https?|ftp):/i.test(v) && !m(v, g) && q.push(v));
        k += q.length;
        if (q.length) for (g = {
          success: function (a) {
            try {
              var b = void 0 !== a.state ? a : eval("(" + a.responseText + ")")
            } catch (H) {
              return
            }
            var c, g = b.list;
            if (g && 0 < g.length) {
              for (a = 0; a < u.length; a++) {
                b = u[a];
                var h = b.getAttribute("_src") || b.src || "";
                for (c = 0; c < g.length; c++) {
                  var l = g[c];
                  if ((h == l.source || h.replace("&amp;", "&") == l.source.replace("&amp;", "&")) && "SUCCESS" == l.state) {
                    c = e + l.url;
                    f.setAttributes(b, {
                      src: c,
                      _src: c
                    });
                    break
                  }
                }
              }
              n++;
              d.getOpt("open_editor") && d.getOpt("show_catch_msg") && d.fireEvent("showmessage", {
                id: "catchimage-msg",
                content: "\u6709" + n + "\u5f20\u8fdc\u7a0b\u56fe\u7247\u6210\u529f\u4fdd\u5b58\uff0c\u5171" + k + "\u5f20",
                type: "success",
                timeout: 3E3
              })
            }
          },
          error: function () {
            d.fireEvent("catchremoteerror")
          }
        }, t = 0; t < q.length; t++) m = [],
          m.push(q[t]),
          a(m, g);
        d.getOpt("open_editor") && d.getOpt("show_catch_msg") && 0 < k && d.fireEvent("showmessage", {
          id: "catchimage-msg",
          content: "\u6709" + k + "\u5f20\u8fdc\u7a0b\u56fe\u7247\u9700\u8981\u4fdd\u5b58",
          type: "success",
          timeout: 3E3
        })
      }))
    };
    r = r || {};
    r.editor =
      r.editor || {};
    UE.ui = r.editor.ui = {};
    (function () {
      function d() {
        var a = document.getElementById("edui_fixedlayer");
        f.setViewportOffset(a, {
          left: 0,
          top: 0
        })
      }
      var b = r.editor.browser,
        c = r.editor.dom.domUtils,
        a = window.$EDITORUI = {},
        g = 0,
        f = r.editor.ui.uiUtils = {
          uid: function (a) {
            return a ? a.ID$EDITORUI || (a.ID$EDITORUI = ++g) : ++g
          },
          hook: function (a, b) {
            if (a && a._callbacks) var c = a;
            else c = function () {
              var b;
              a && (b = a.apply(this, arguments));
              for (var d = c._callbacks, e = d.length; e--;) {
                var k = d[e].apply(this, arguments);
                void 0 === b && (b = k)
              }
              return b
            },
              c._callbacks = [];
            c._callbacks.push(b);
            return c
          },
          createElementByHtml: function (a) {
            var b = document.createElement("div");
            b.innerHTML = a;
            b = b.firstChild;
            b.parentNode.removeChild(b);
            return b
          },
          getViewportElement: function () {
            return b.ie && b.quirks ? document.body : document.documentElement
          },
          getClientRect: function (a) {
            try {
              var b = a.getBoundingClientRect()
            } catch (m) {
              b = {
                left: 0,
                top: 0,
                height: 0,
                width: 0
              }
            }
            for (var d = {
              left: Math.round(b.left),
              top: Math.round(b.top),
              height: Math.round(b.bottom - b.top),
              width: Math.round(b.right - b.left)
            }, e;
                 (e = a.ownerDocument) !== document && (a = c.getWindow(e).frameElement);) b = a.getBoundingClientRect(),
              d.left += b.left,
              d.top += b.top;
            d.bottom = d.top + d.height;
            d.right = d.left + d.width;
            return d
          },
          getViewportRect: function () {
            var a = f.getViewportElement(),
              b = (window.innerWidth || a.clientWidth) | 0;
            a = (window.innerHeight || a.clientHeight) | 0;
            return {
              left: 0,
              top: 0,
              height: a,
              width: b,
              bottom: a,
              right: b
            }
          },
          setViewportOffset: function (a, b) {
            var d = f.getFixedLayer();
            a.parentNode === d ? (a.style.left = b.left + "px", a.style.top = b.top + "px") : c.setViewportOffset(a, b)
          },
          getEventOffset: function (a) {
            var b = f.getClientRect(a.target || a.srcElement);
            a = f.getViewportOffsetByEvent(a);
            return {
              left: a.left - b.left,
              top: a.top - b.top
            }
          },
          getViewportOffsetByEvent: function (a) {
            var b = a.target || a.srcElement,
              d = c.getWindow(b).frameElement;
            a = {
              left: a.clientX,
              top: a.clientY
            };
            d && b.ownerDocument !== document && (b = f.getClientRect(d), a.left += b.left, a.top += b.top);
            return a
          },
          setGlobal: function (b, c) {
            a[b] = c;
            return '$EDITORUI["' + b + '"]'
          },
          unsetGlobal: function (b) {
            delete a[b]
          },
          copyAttributes: function (a, d) {
            for (var e =
              d.attributes, g = e.length; g--;) {
              var f = e[g];
              "style" == f.nodeName || "class" == f.nodeName || b.ie && !f.specified || a.setAttribute(f.nodeName, f.nodeValue)
            }
            d.className && c.addClass(a, d.className);
            d.style.cssText && (a.style.cssText += ";" + d.style.cssText)
          },
          removeStyle: function (a, b) {
            if (a.style.removeProperty) a.style.removeProperty(b);
            else if (a.style.removeAttribute) a.style.removeAttribute(b);
            else throw "";
          },
          contains: function (a, b) {
            return a && b && (a === b ? !1 : a.contains ? a.contains(b) : a.compareDocumentPosition(b) & 16)
          },
          startDrag: function (a, b, c) {
            function d(a) {
              b.ondragmove(a.clientX - e, a.clientY - k, a);
              a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
            }
            c = c || document;
            var e = a.clientX,
              k = a.clientY;
            if (c.addEventListener) {
              var g = function (a) {
                c.removeEventListener("mousemove", d, !0);
                c.removeEventListener("mouseup", g, !0);
                window.removeEventListener("mouseup", g, !0);
                b.ondragstop()
              };
              c.addEventListener("mousemove", d, !0);
              c.addEventListener("mouseup", g, !0);
              window.addEventListener("mouseup", g, !0);
              a.preventDefault()
            } else {
              var f = function () {
                  h.releaseCapture();
                  h.detachEvent("onmousemove", d);
                  h.detachEvent("onmouseup", f);
                  h.detachEvent("onlosecaptrue", f);
                  b.ondragstop()
                },
                h = a.srcElement;
              h.setCapture();
              h.attachEvent("onmousemove", d);
              h.attachEvent("onmouseup", f);
              h.attachEvent("onlosecaptrue", f);
              a.returnValue = !1
            }
            b.ondragstart()
          },
          getFixedLayer: function () {
            var a = document.getElementById("edui_fixedlayer");
            null == a && (a = document.createElement("div"), a.id = "edui_fixedlayer", document.body.appendChild(a), b.ie && 8 >= b.version ? (a.style.position = "absolute", c.on(window, "scroll", d), c.on(window, "resize", r.editor.utils.defer(d, 0, !0)), setTimeout(d)) : a.style.position = "fixed", a.style.left = "0", a.style.top = "0", a.style.width = "0", a.style.height = "0");
            return a
          },
          makeUnselectable: function (a) {
            if (b.opera || b.ie && 9 > b.version) {
              if (a.unselectable = "on", a.hasChildNodes()) for (var c = 0; c < a.childNodes.length; c++) 1 == a.childNodes[c].nodeType && f.makeUnselectable(a.childNodes[c])
            } else void 0 !== a.style.MozUserSelect ? a.style.MozUserSelect = "none" : void 0 !== a.style.WebkitUserSelect ? a.style.WebkitUserSelect = "none" : void 0 !== a.style.KhtmlUserSelect && (a.style.KhtmlUserSelect = "none")
          }
        }
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.uiUtils,
        c = r.editor.EventBase,
        a = r.editor.ui.UIBase = function () {};
      a.prototype = {
        className: "",
        uiName: "",
        initOptions: function (a) {
          for (var c in a) this[c] = a[c];
          this.id = this.id || "edui" + b.uid()
        },
        initUIBase: function () {
          this._globalKey = d.unhtml(b.setGlobal(this.id, this))
        },
        render: function (a) {
          var c = this.renderHtml();
          c = b.createElementByHtml(c);
          for (var d = f.getElementsByTagName(c, "*"), g = "edui-" + (this.theme || this.editor.options.theme), k = document.getElementById("edui_fixedlayer"), n = 0, m; m = d[n++];) f.addClass(m, g);
          f.addClass(c, g);
          k && (k.className = "", f.addClass(k, g));
          d = this.getDom();
          null != d ? (d.parentNode.replaceChild(c, d), b.copyAttributes(c, d)) : ("string" == typeof a && (a = document.getElementById(a)), a = a || b.getFixedLayer(), f.addClass(a, g), a.appendChild(c));
          this.postRender()
        },
        getDom: function (a) {
          return a ? document.getElementById(this.id + "_" + a) : document.getElementById(this.id)
        },
        postRender: function () {
          this.fireEvent("postrender")
        },
        getHtmlTpl: function () {
          return ""
        },
        formatHtml: function (a) {
          var b = "edui-" + this.uiName;
          return a.replace(/##/g, this.id).replace(/%%-/g, this.uiName ? b + "-" : "").replace(/%%/g, (this.uiName ? b : "") + " " + this.className).replace(/\$\$/g, this._globalKey)
        },
        renderHtml: function () {
          return this.formatHtml(this.getHtmlTpl())
        },
        dispose: function () {
          var a = this.getDom();
          a && r.editor.dom.domUtils.remove(a);
          b.unsetGlobal(this.id)
        }
      };
      d.inherits(a, c)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.UIBase,
        c = r.editor.ui.Separator = function (a) {
          this.initOptions(a);
          this.initSeparator()
        };
      c.prototype = {
        uiName: "separator",
        initSeparator: function () {
          this.initUIBase()
        },
        getHtmlTpl: function () {
          return '<div id="##" class="edui-box %%"></div>'
        }
      };
      d.inherits(c, b)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.dom.domUtils,
        c = r.editor.ui.UIBase,
        a = r.editor.ui.uiUtils,
        g = r.editor.ui.Mask = function (a) {
          this.initOptions(a);
          this.initUIBase()
        };
      g.prototype = {
        getHtmlTpl: function () {
          return '<div id="##" class="edui-mask %%" onclick="return $$._onClick(event, this);" onmousedown="return $$._onMouseDown(event, this);"></div>'
        },
        postRender: function () {
          var a = this;
          b.on(window, "resize", function () {
            setTimeout(function () {
              a.isHidden() || a._fill()
            })
          })
        },
        show: function (a) {
          this._fill();
          this.getDom().style.display = "";
          this.getDom().style.zIndex = a
        },
        hide: function () {
          this.getDom().style.display = "none";
          this.getDom().style.zIndex = ""
        },
        isHidden: function () {
          return "none" == this.getDom().style.display
        },
        _onMouseDown: function () {
          return !1
        },
        _onClick: function (a, b) {
          this.fireEvent("click", a, b)
        },
        _fill: function () {
          var b = this.getDom(),
            c = a.getViewportRect();
          b.style.width =
            c.width + "px";
          b.style.height = c.height + "px"
        }
      };
      d.inherits(g, c)
    })();
    (function () {
      function d(a, b) {
        for (var c = 0; c < e.length; c++) {
          var d = e[c];
          if (!d.isHidden() && !1 !== d.queryAutoHide(b)) {
            if (a && /scroll/ig.test(a.type) && "edui-wordpastepop" == d.className) return;
            d.hide()
          }
        }
        e.length && d.editor.fireEvent("afterhidepop")
      }
      var b = r.editor.utils,
        c = r.editor.ui.uiUtils,
        a = r.editor.dom.domUtils,
        g = r.editor.ui.UIBase,
        f = r.editor.ui.Popup = function (a) {
          this.initOptions(a);
          this.initPopup()
        },
        e = [];
      f.postHide = d;
      var l = ["edui-anchor-topleft", "edui-anchor-topright", "edui-anchor-bottomleft", "edui-anchor-bottomright"];
      f.prototype = {
        SHADOW_RADIUS: 5,
        content: null,
        _hidden: !1,
        autoRender: !0,
        canSideLeft: !0,
        canSideUp: !0,
        initPopup: function () {
          this.initUIBase();
          e.push(this)
        },
        getHtmlTpl: function () {
          return '<div id="##" class="edui-popup %%"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">' + this.getContentHtmlTpl() + "  </div> </div></div>"
        },
        getContentHtmlTpl: function () {
          return this.content ? "string" == typeof this.content ? this.content : this.content.renderHtml() : ""
        },
        _UIBase_postRender: g.prototype.postRender,
        postRender: function () {
          this.content instanceof g && this.content.postRender();
          if (this.captureWheel && !this.captured) {
            this.captured = !0;
            var b = (document.documentElement.clientHeight || document.body.clientHeight) - 80,
              d = this.getDom().offsetHeight,
              e = c.getClientRect(this.combox.getDom()).top,
              f = this.getDom("content"),
              h = this.getDom("body").getElementsByTagName("iframe"),
              l = this;
            for (h.length && (h = h[0]); e + d > b;) d -= 30;
            f.style.height = d + "px";
            h && (h.style.height = d + "px");
            if (window.XMLHttpRequest) a.on(f, "onmousewheel" in document.body ? "mousewheel" : "DOMMouseScroll", function (a) {
              a.preventDefault ? a.preventDefault() : a.returnValue = !1;
              f.scrollTop = a.wheelDelta ? f.scrollTop - a.wheelDelta / 120 * 60 : f.scrollTop - a.detail / -3 * 60
            });
            else a.on(this.getDom(), "mousewheel", function (a) {
              a.returnValue = !1;
              l.getDom("content").scrollTop -= a.wheelDelta / 120 * 60
            })
          }
          this.fireEvent("postRenderAfter");
          this.hide(!0);
          this._UIBase_postRender()
        },
        _doAutoRender: function () {
          !this.getDom() && this.autoRender && this.render()
        },
        mesureSize: function () {
          var a = this.getDom("content");
          return c.getClientRect(a)
        },
        fitSize: function () {
          if (this.captureWheel && this.sized) return this.__size;
          this.sized = !0;
          var a = this.getDom("body");
          a.style.width = "";
          a.style.height = "";
          var b = this.mesureSize();
          if (this.captureWheel) {
            a.style.width = -(-20 - b.width) + "px";
            var c = parseInt(this.getDom("content").style.height, 10);
            !window.isNaN(c) && (b.height = c)
          } else a.style.width = b.width + "px";
          a.style.height = b.height + "px";
          this.__size = b;
          this.captureWheel && (this.getDom("content").style.overflow = "auto");
          return b
        },
        showAnchor: function (a, b) {
          this.showAnchorRect(c.getClientRect(a), b)
        },
        showAnchorRect: function (b, d, e) {
          this._doAutoRender();
          var k = c.getViewportRect();
          this.getDom().style.visibility = "hidden";
          this._show();
          e = this.fitSize();
          if (d) {
            d = this.canSideLeft && b.right + e.width > k.right && b.left > e.width;
            k = this.canSideUp && b.top + e.height > k.bottom && b.bottom > e.height;
            var g = d ? b.left - e.width : b.right;
            b = k ? b.bottom - e.height : b.top
          } else d = this.canSideLeft && b.right + e.width > k.right && b.left > e.width,
            k = this.canSideUp && b.top + e.height > k.bottom && b.bottom > e.height,
            g = d ? b.right - e.width : b.left,
            b = k ? b.top - e.height : b.bottom;
          e = this.getDom();
          jQuery(e).hasClass("edui-bubble") && (g = c.getClientRect(this.editor.container).left + 15);
          c.setViewportOffset(e, {
            left: g,
            top: b + 5
          });
          a.removeClasses(e, l);
          e.className += " " + l[2 * (k ? 1 : 0) + (d ? 1 : 0)];
          this.editor && (e.style.zIndex = 1 * this.editor.container.style.zIndex + 10, r.editor.ui.uiUtils.getFixedLayer().style.zIndex = e.style.zIndex - 1);
          this.getDom().style.visibility = "visible"
        },
        showAt: function (a) {
          var b = a.left;
          a = a.top;
          this.showAnchorRect({
            left: b,
            top: a,
            right: b,
            bottom: a,
            height: 0,
            width: 0
          }, !1, !0)
        },
        _show: function () {
          this._hidden && (this.getDom().style.display = "", this._hidden = !1, this.fireEvent("show"))
        },
        isHidden: function () {
          return this._hidden
        },
        show: function () {
          this._doAutoRender();
          this._show()
        },
        hide: function (a) {
          !this._hidden && this.getDom() && (this.getDom().style.display = "none", this._hidden = !0, a || this.fireEvent("hide"))
        },
        queryAutoHide: function (a) {
          return jQuery(a).hasClass("cp-app") || 0 < jQuery(a).parents(".cp-app").length ? !1 : !a || !c.contains(this.getDom(), a)
        }
      };
      b.inherits(f, g);
      a.on(document, "mousedown", function (a) {
        d(a, a.target || a.srcElement)
      });
      a.on(window, "scroll", function (a, b) {
        d(a, b)
      })
    })();
    (function () {
      function d(a, b) {
        var c = {},
          d;
        for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = a[d]);
        for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (c[d] = b[d]);
        return c
      }
      var b = r.editor.utils,
        c = r.editor.ui.UIBase,
        a = r.editor.ui.ColorPicker = function (a) {
          this.initOptions(a);
          this.noColorText = this.noColorText || this.editor.getLang("clearColor");
          this.initUIBase();
          a = this.storekey = "__ue_recentlycolor_" + (a.storekey || "");
          this.recentlyColor = a = (a = this.editor.getPreferences(a)) ? a.split(",").slice(0, g) : ["#000"]
        },
        g = 9;
      a.prototype = {
        getHtmlTpl: function () {
          var a = this.noColorText,
            b = this.editor,
            c = '<div class="edui-colorpicker-container %%"><div id="##_colorpicker_panel" class="edui-colorpicker-panel"><div class="rgb-container"><div class="rgb-item">\bR <input type="number" id="##_rbg-r-input"/></div><div class="rgb-item">\bG <input type="number" id="##_rbg-g-input"/></div><div class="rgb-item">\bB <input type="number" id="##_rbg-b-input"/></div><div class="rgb-item">\bA <input type="number" id="##_rbg-a-input"/></div></div></div><div class="%%"><div id="##" class="edui-colorpicker %%"><div class="ue_colorpicker_hd">' + b.getLang("recentlyColor") + '</div><div class="ue_colorpicker_bd" onclick="return $$._onRecentClick(event, this);" id="##_recently_color" >',
            d = this.recentlyColor;
          if (d && 0 < d.length) for (var g = 0, h = d.length; h > g; g++) {
            var t = d[g].substr(1);
            c += '<span onclick="return false;" title="#' + t + '" data-color="#' + t + '" class="ue_colorpicker_square" style="background-color:#' + t + '"></span>'
          }
          c = c + "</div>" + ('<div class="edui-colorpicker-topbar edui-clearfix"><div unselectable="on" id="##_preview" class="edui-colorpicker-preview"></div><div unselectable="on" class="edui-colorpicker-nocolor" onclick="$$._onPickNoColor(event, this);">' + a + '</div></div><table  class="edui-box" style="border-collapse: collapse;" onmouseover="$$._onTableOver(event, this);" onmouseout="$$._onTableOut(event, this);" onclick="return $$._onTableClick(event, this);" cellspacing="0" cellpadding="0"><tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#8d8d8d;padding-top: 2px"><td colspan="10">' + b.getLang("themeColor") + '</td> </tr><tr class="edui-colorpicker-tablefirstrow" >');
          for (a = 0; a < f.length; a++) a && 0 === a % 10 && (c += "</tr>" + (60 == a ? '<tr style="border-bottom: 1px solid #ddd;font-size: 13px;line-height: 25px;color:#8d8d8d;"><td colspan="10">' + b.getLang("standardColor") + "</td></tr>" : "") + "<tr" + (60 == a ? ' class="edui-colorpicker-tablefirstrow"' : "") + ">"),
            c += 70 > a ? '<td style="padding: 0 2px;"><a hidefocus title="' + f[a] + '" onclick="return false;" href="javascript:" unselectable="on" class="edui-box edui-colorpicker-colorcell" data-color="#' + f[a] + '" style="background-color:#' + f[a] + ";border:solid #ccc;" + (10 > a || 60 <= a ? "border-width:1px;" : 10 <= a && 20 > a ? "border-width:1px 1px 0 1px;" : "border-width:0 1px 0 1px;") + '"></a></td>' : "";
          c = c + "</tr></table></div>" + ('<div class="ue_colorpicker_toolbar"><span class="ue_colorpicker_square" id="##_colorinput_preview" style="background-color:#f00"></span><a href="javascript:void(0);" onclick="return $$._onBtnClick(event, this);" class="btn_ue_colorpicker">' + b.getLang("ok") + '</a><span class="ue_colorpicker_input_box"><span class="ue_colorpicker_input_append">#</span><span class="ue_colorpicker_input_inner"><input id="##_colorinput" value="ff0000" style="width: 60px;border:0 none;font-size:13px" type="text" onkeyup="return $$._onInputKeyup(event, this);" onclick="return $$._onInputClick(event, this);"></span></span></div></div>');
          return c + "</div></div>"
        },
        postRender: function () {
          var a = this;
          this._colorPickerExtend = this.createExtent(this.getDom("colorpicker_panel"), {
            onUpdate: function (b, c) {
              var d = a.getDom("colorinput_preview");
              i = 1 <= c ? a._getColor() : "rgba(" + b[0] + "," + b[1] + "," + b[2] + "," + c + ")";
              d.style.backgroundColor = i ? i : "#fff";
              a.fireEvent("updatecolor", i)
            },
            color: this.color ? this.color : "#e7e7e7"
          });
          this.fireEvent("postrender")
        },
        _onTableClick: function (a) {
          if (a = (a.target || a.srcElement).getAttribute("data-color")) this.updateAllColor(a),
            this._saveColor(a),
            this.fireEvent("pickcolor", a)
        },
        _onRecentClick: function (a) {
          if (a = (a.target || a.srcElement).getAttribute("data-color")) this.updateAllColor(a),
            this.fireEvent("pickcolor", a)
        },
        _onInputKeyup: function (a) {
          var b = this.alpha,
            c = this.rgb,
            d = this.getDom("colorinput_preview");
          b = 1 <= b ? $this._getColor() : "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + b + ")";
          a = a.keyCode || a.which;
          d.style.backgroundColor = b ? b : "#fff";
          b && 13 == a && (this._saveColor(b), this.fireEvent("pickcolor", b))
        },
        _onInputClick: function (a) {
          a.stopPropagation ? (a.stopPropagation(), a.preventDefault()) : a.cancelBubble = !0
        },
        _saveColor: function (a) {
          for (var b = this.recentlyColor || ["#000"], c = [], d = 0, e = b.length; e > d; ++d) {
            var f = b[d];
            f != a && c.push(f)
          }
          c.unshift(a);
          this.recentlyColor = b = c.slice(0, g);
          this.editor.setPreferences(this.storekey, b.join(","));
          html = "";
          d = 0;
          for (e = b.length; e > d; d++) f = b[d].substr(1),
            html += '<span onclick="return false;" title="#' + f + '" data-color="#' + f + '" class="ue_colorpicker_square" style="background-color:#' + f + '"></span>';
          this.getDom("recently_color").innerHTML = html
        },
        _getColor: function () {
          var a =
            this.getDom("colorinput").value || "";
          a = a.toLowerCase();
          var b = a.split(""),
            c = b.length;
          if (3 != c && 6 != c && 8 != c) return !1;
          for (var d = 0; c > d; ++d) {
            var g = b[d];
            if (!("0" <= g && "9" >= g || "a" <= g && "f" >= g)) return !1
          }
          return "#" + a
        },
        _onBtnClick: function (a) {
          var b = this.alpha,
            c = this.rgb;
          b = 1 <= b ? $this._getColor() : "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + b + ")";
          return b && (this._saveColor(b), this.fireEvent("pickcolor", b)),
            a.stopPropagation ? (a.stopPropagation(), a.preventDefault()) : a.cancelBubble = !0,
            !1
        },
        _onTableOver: function (a) {
          if (a = (a.target || a.srcElement).getAttribute("data-color")) this.getDom("preview").style.backgroundColor = a
        },
        _onTableOut: function () {
          this.getDom("preview").style.backgroundColor = ""
        },
        _onPickNoColor: function () {
          this.fireEvent("picknocolor")
        }
      };
      b.inherits(a, c);
      var f = "ffffff 000000 eeece1 1f497d 4f81bd c0504d 9bbb59 8064a2 4bacc6 f79646 f2f2f2 7f7f7f ddd9c3 c6d9f0 dbe5f1 f2dcdb ebf1dd e5e0ec dbeef3 fdeada d8d8d8 595959 c4bd97 8db3e2 b8cce4 e5b9b7 d7e3bc ccc1d9 b7dde8 fbd5b5 bfbfbf 3f3f3f 938953 548dd4 95b3d7 d99694 c3d69b b2a2c7 92cddc fac08f a5a5a5 262626 494429 17365d 366092 953734 76923c 5f497a 31859b e36c09 7f7f7f 0c0c0c 1d1b10 0f243e 244061 632423 4f6128 3f3151 205867 974806 c00000 ff0000 ffc000 ffff00 92d050 00b050 00b0f0 0070c0 002060 7030a0 ".split(" ");
      a.prototype.createExtent = function (a, b) {
        function c() {
          function a(a, b) {
            var c = a.value;
            b ? 0 > c ? a.value = 0 : 255 < c && (a.value = 255) : 0 > c ? a.value = 0 : 1 < c && (a.value = 1);
            return a.value
          }
          $this.rgb[0] = a($this.dom.rinput, !0);
          $this.rgb[1] = a($this.dom.ginput, !0);
          $this.rgb[2] = a($this.dom.binput, !0);
          $this.alpha = a($this.dom.ainput, !1);
          coordinates = $this.getPositionFromRGBColor($this.rgb);
          null != coordinates && ($this.x = coordinates.x, $this.y = coordinates.y, $this.updateColor($this.rgb), $this.updateAll())
        }
        this.options = d({
          color: "#e7e7e7",
          palettes: ["#646fff", "#fffa1d", "#ffa21f", "#ff391d"],
          onUpdate: function () {}
        }, b);
        this.options.palettes.unshift(this.options.color);
        b = this.getHEXAlpha(this.options.color);
        this.hex = b.hex;
        this.rgb = this.HEXtoRGB(this.hex);
        this.hsv = this.RGBtoHSV(this.rgb[0], this.rgb[1], this.rgb[2]);
        this.alpha = b.alpha;
        this.dom = {};
        this.dom.rinput = this.getDom("rbg-r-input");
        this.dom.ginput = this.getDom("rbg-g-input");
        this.dom.binput = this.getDom("rbg-b-input");
        this.dom.ainput = this.getDom("rbg-a-input");
        this.dom.rinput.value = this.rgb[0];
        this.dom.ginput.value = this.rgb[1];
        this.dom.binput.value = this.rgb[2];
        this.dom.ainput.value = this.alpha;
        $this = this;
        this.dom.rinput.addEventListener("keyup", c);
        this.dom.ginput.addEventListener("keyup", c);
        this.dom.binput.addEventListener("keyup", c);
        this.dom.ainput.addEventListener("keyup", c);
        this.dom.container = document.createElement("div");
        this.dom.container.className = "ex-color-picker-container";
        a.insertBefore(this.dom.container, a.children[0]);
        this.initPicker()
      };
      a.prototype.getHEXAlpha = function (a) {
        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a) || /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
        return b ? {
          hex: "#" + b[1] + b[2] + b[3],
          alpha: b[4] ? (parseInt(b[4], 16) / 255).toFixed(2) : 1
        } : (b = /^rgb?\(([\d\s]+),([\d\s]+),([\d\s]+)?\)$/i.exec(a) || /^rgba?\(([\d\s]+),([\d\s]+),([\d\s]+),([\d\s.]+)?\)$/i.exec(a)) ? {
          hex: this.RGBtoHEX(parseInt(b[1]), parseInt(b[2]), parseInt(b[3])),
          alpha: b[4] ? parseFloat(b[4]).toFixed(1) : 1
        } : {
          hex: "#e7e7e7",
          alpha: 1
        }
      };
      a.prototype.initPicker = function () {
        this.dom.picker = {};
        this.dom.picker.container = document.createElement("div");
        this.dom.picker.container.className = "ex-picker-container";
        this.dom.container.appendChild(this.dom.picker.container);
        this.dom.picker.canvas = {};
        this.dom.picker.canvas.container = document.createElement("div");
        this.dom.picker.canvas.container.className = "ex-canvas-container";
        this.dom.picker.container.appendChild(this.dom.picker.canvas.container);
        this.dom.picker.canvas.canvas = document.createElement("canvas");
        this.dom.picker.canvas.canvas.className = "ex-canvas";
        this.dom.picker.canvas.pointer = document.createElement("div");
        this.dom.picker.canvas.pointer.className = "ex-pointer";
        var a = this.dom.picker.canvas.canvas.getContext("2d"),
          b = new Image,
          c = this,
          d = !1;
        this.dom.picker.canvas.canvas.setAttribute("width", 150);
        this.dom.picker.canvas.canvas.setAttribute("height", 150);
        this.dom.picker.canvas.container.appendChild(this.dom.picker.canvas.canvas);
        this.dom.picker.canvas.container.appendChild(this.dom.picker.canvas.pointer);
        b.src = "data:image/png;base64,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";
        b.onload = function () {
          c.updateCanvasBounds();
          a.drawImage(b, 0, 0, 150, 150);
          c.updateCoordinates(c.dom.picker.canvas.canvas.bounds.centerX, c.dom.picker.canvas.canvas.bounds.centerY);
          coordinates = c.getPositionFromColor(c.hex);
          null != coordinates && (c.x = coordinates.x, c.y = coordinates.y, c.updateAll());
          c.options.onUpdate(c.rgb, c.alpha)
        };
        this.dom.picker.canvas.canvas.addEventListener("mousedown", function (b) {
          b.preventDefault();
          d = !0;
          c.updateCoordinates(b.clientX, b.clientY);
          imageData = a.getImageData(c.x, c.y, 1, 1);
          c.updateColor(imageData.data);
          c.hsv[2] = 1;
          c.alpha = 1;
          c.updateAll()
        });
        this.dom.picker.canvas.canvas.addEventListener("mousemove", function (b) {
          d && (c.updateCoordinates(b.pageX, b.pageY), imageData = a.getImageData(c.x, c.y, 1, 1), c.updateColor(imageData.data), c.hsv[2] = 1, c.alpha = 1, c.updateAll())
        });
        document.addEventListener("mouseup", function (a) {
          d = !1
        });
        this.dom.picker.canvas.input = this.getDom("colorinput");
        this.dom.picker.canvas.input.addEventListener("keyup", function () {
          var a = 1 > c.alpha ? c.componentToHex(255 * c.alpha) : "";
          this.value != c.hex && "#" + this.value != c.hex + a && (coordinates = c.getPositionFromColor(this.value), null != coordinates && (c.x = coordinates.x, c.y = coordinates.y, c.updateColor(c.HEXtoRGB(this.value)), c.updateAll()))
        });
        this.initSlider()
      };
      a.prototype.initSlider = function () {
        function a(a) {
          var c = document.createElement("div");
          c.className = "ex-slider-container";
          var d = document.createElement("span");
          d.className = "ex-slider-title";
          d.innerHTML = a;
          a = document.createElement("input");
          a.className = "ex-slider";
          a.type = "range";
          a.max = 100;
          a.min = 0;
          a.step = 1;
          c.appendChild(d);
          c.appendChild(a);
          b.dom.picker.container.appendChild(c);
          return {
            container: c,
            slider: a,
            title: d
          }
        }
        var b = this;
        this.dom.slider = a("\u7070\u5ea6");
        this.dom.slider.slider.oninput = function () {
          total = (this.value / 100).toFixed(2);
          b.updateColor(b.HSVtoRGB(b.hsv[0], b.hsv[1], 1 - total));
          b.updateAll()
        };
        this.dom.aslider = a("\u900f\u660e\u5ea6");
        this.dom.aslider.slider.oninput = function () {
          b.alpha = (this.value / 100).toFixed(2);
          b.updateAll()
        };
        this.updatePointers()
      };
      a.prototype.updateColor = function (a) {
        this.hex = hex = this.RGBtoHEX(a[0], a[1], a[2]);
        this.hsv = this.RGBtoHSV(a[0], a[1], a[2]);
        this.rgb = [a[0], a[1], a[2]];
        this.alpha = a[3] ? (a[3] / 255).toFixed(2) : this.alpha
      };
      a.prototype.updateCoordinates = function (a, b) {
        var c = Math.atan2(b - this.dom.picker.canvas.canvas.bounds.centerY, a - this.dom.picker.canvas.canvas.bounds.centerX);
        radius = Math.sqrt(Math.pow(a - this.dom.picker.canvas.canvas.bounds.centerX, 2) + Math.pow(b - this.dom.picker.canvas.canvas.bounds.centerY, 2));
        radius > this.dom.picker.canvas.canvas.bounds.radius - this.dom.picker.canvas.pointer.bounds.width / 2 && (cos = Math.cos(c), sin = Math.sin(c), a = cos * (this.dom.picker.canvas.canvas.bounds.radius - this.dom.picker.canvas.pointer.bounds.width / 2) + this.dom.picker.canvas.canvas.bounds.centerX, b = sin * (this.dom.picker.canvas.canvas.bounds.radius - this.dom.picker.canvas.pointer.bounds.width / 2) + this.dom.picker.canvas.canvas.bounds.centerY);
        this.x = Math.floor(a - this.dom.picker.canvas.canvas.bounds.left);
        this.y = Math.floor(b - this.dom.picker.canvas.canvas.bounds.top)
      };
      a.prototype.updateAll = function () {
        this.updatePointers();
        this.dom.picker.canvas.input.value = this.hex.replace("#", "") + (1 > this.alpha ? this.componentToHex(255 * this.alpha) : "");
        this.dom.rinput.value = this.rgb[0];
        this.dom.ginput.value = this.rgb[1];
        this.dom.binput.value = this.rgb[2];
        this.dom.ainput.value = this.alpha;
        this.options.onUpdate(this.rgb, this.alpha);
        this.selectedPalette && (this.selectedPalette.style.background = this.hex)
      };
      a.prototype.updateAllColor = function (a) {
        this.getDom("colorinput_preview").style.backgroundColor = a ? a : "#fff";
        var b = this.getDom("colorinput");
        b.value = a ? a.replace("#", "") : "#ffffff";
        coordinates = this.getPositionFromColor(b.value);
        null != coordinates && (this.x = coordinates.x, this.y = coordinates.y, this.updateColor(this.HEXtoRGB(b.value)), this.updatePointers())
      };
      a.prototype.getPositionFromColor = function (a) {
        a = this.HEXtoRGB(a);
        if (null == a) return null;
        this.hsv = this.RGBtoHSV(a[0], a[1], a[2]);
        return this.getSVGPositionFromHS(this.hsv[0], this.hsv[1])
      };
      a.prototype.getPositionFromRGBColor = function (a) {
        if (null == a) return null;
        this.hsv = this.RGBtoHSV(a[0], a[1], a[2]);
        return this.getSVGPositionFromHS(this.hsv[0], this.hsv[1])
      };
      a.prototype.updatePointers = function () {
        function a(a) {
          a *= 100;
          0 > a ? a = 0 : 100 < a && (a = 100);
          return a
        }
        this.dom.picker.canvas.pointer.bounds && (this.dom.picker.canvas.pointer.style.left = this.x - this.dom.picker.canvas.pointer.bounds.width / 2 + "px", this.dom.picker.canvas.pointer.style.top = this.y - this.dom.picker.canvas.pointer.bounds.height / 2 + "px");
        this.dom.slider.slider.value = a(1 - this.hsv[2]);
        this.dom.aslider.slider.value = a(this.alpha)
      };
      a.prototype.updateCanvasBounds =

        function () {
          this.dom.picker.canvas.canvas.bounds = this.dom.picker.canvas.canvas.getBoundingClientRect();
          this.dom.picker.canvas.pointer.bounds = this.dom.picker.canvas.pointer.getBoundingClientRect();
          this.dom.picker.canvas.canvas.bounds.centerX = this.dom.picker.canvas.canvas.bounds.left + this.dom.picker.canvas.canvas.bounds.width / 2;
          this.dom.picker.canvas.canvas.bounds.centerY = this.dom.picker.canvas.canvas.bounds.top + this.dom.picker.canvas.canvas.bounds.height / 2;
          this.dom.picker.canvas.canvas.bounds.radius =
            this.dom.picker.canvas.canvas.bounds.width / 2
        };
      a.prototype.getSVGPositionFromHS = function (a, b) {
        a = this.scientificToArtisticSmooth(360 * a) * (Math.PI / 180);
        return {
          x: Math.cos(a) * this.dom.picker.canvas.canvas.bounds.radius * b + this.dom.picker.canvas.canvas.bounds.radius,
          y: this.dom.picker.canvas.canvas.bounds.radius - Math.sin(a) * this.dom.picker.canvas.canvas.bounds.radius * b
        }
      };
      a.prototype.scientificToArtisticSmooth = function (a) {
        return 35 > a ? 60 / 35 * a : 60 > a ? this.mapRange(a, 35, 60, 60, 122) : 120 > a ? this.mapRange(a, 60, 120, 122, 165) : 180 > a ? this.mapRange(a, 120, 180, 165, 218) : 240 > a ? this.mapRange(a, 180, 240, 218, 275) : 300 > a ? this.mapRange(a, 240, 300, 275, 330) : this.mapRange(a, 300, 360, 330, 360)
      };
      a.prototype.mapRange = function (a, b, c, d, g) {
        return d + (g - d) / (c - b) * (a - b)
      };
      a.prototype.HEXtoRGB = function (a) {
        var b = (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a) || /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) && 4 < a.length ? parseInt(a[4], 16) : 255;
        return a ? [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16), b] : null
      };
      a.prototype.RGBtoHSV =

        function (a, b, c) {
          a /= 255;
          b /= 255;
          c /= 255;
          var d = Math.max(a, b, c),
            e = Math.min(a, b, c),
            g = d - e;
          if (d == e) var k = 0;
          else {
            switch (d) {
              case a:
                k = (b - c) / g + (b < c ? 6 : 0);
                break;
              case b:
                k = (c - a) / g + 2;
                break;
              case c:
                k = (a - b) / g + 4
            }
            k /= 6
          }
          return [k, 0 == d ? 0 : g / d, d]
        };
      a.prototype.HSVtoRGB = function (a, b, c) {
        var d = Math.floor(6 * a),
          e = 6 * a - d;
        a = c * (1 - b);
        var g = c * (1 - e * b);
        b = c * (1 - (1 - e) * b);
        switch (d % 6) {
          case 0:
            var k = c;
            var f = b;
            var h = a;
            break;
          case 1:
            k = g;
            f = c;
            h = a;
            break;
          case 2:
            k = a;
            f = c;
            h = b;
            break;
          case 3:
            k = a;
            f = g;
            h = c;
            break;
          case 4:
            k = b;
            f = a;
            h = c;
            break;
          case 5:
            k = c,
              f = a,
              h = g
        }
        return [Math.round(255 * k), Math.round(255 * f), Math.round(255 * h)]
      };
      a.prototype.RGBtoHEX = function (a, b, c) {
        return "#" + this.componentToHex(a) + this.componentToHex(b) + this.componentToHex(c)
      };
      a.prototype.componentToHex = function (a) {
        a = parseInt(a);
        a = a.toString(16);
        return 1 == a.length ? "0" + a : a
      }
    })();
    (function () {
      var d = r.editor.dom.domUtils,
        b = r.editor.utils,
        c = r.editor.ui.UIBase,
        a = r.editor.ui.RemoteContent = function (a) {
          this.initOptions(a);
          this.initUIBase()
        };
      a.prototype = {
        getHtmlTpl: function () {
          var a = this.editor;
          return '<div id="##" class="edui-remotecontent %%">' + ('<div class="ue_remotecontent_toolbar"><span class="ue_remotecontent_input_box"><span class="ue_remotecontent_input_inner"><input id="##_urlinput" placeholder="\u8bf7\u8f93\u5165\u6587\u7ae0\u5185\u5bb9\u9875\u7f51\u5740\u94fe\u63a5\uff0c\u5305\u542bhttp(s)://" value="" style="border:0 none;" type="text"></span></span><a href="javascript:void(0);" onclick="return $$._onBtnClick(event, this);" class="btn_ue_remotecontent">' + a.getLang("ok") + '</a><a href="javascript:void(0);" onclick="return $$.cancel();" class="btn_ue_remotecontent">' + a.getLang("cancel") + '</a><p style="font-size: 12px;margin:5px 0;">\u4ece\u7f51\u5740\u5bfc\u5165\u6587\u7ae0\u5185\u5bb9\uff0c\u907f\u514d\u590d\u5236\u4e0d\u5168\u6216\u590d\u5236\u591a\u4f59\u90e8\u5206\u9020\u6210\u683c\u5f0f\u6392\u7248\u9519\u4e71\u3002\u76ee\u524d\u5df2\u652f\u6301<strong style="color: #ff793f">\u5fae\u4fe1\u516c\u4f17\u53f7\u3001\u4eca\u65e5\u5934\u6761\u3001\u767e\u5bb6\u53f7\u3001\u77e5\u4e4e\u4e13\u680f\u3001QQ\u770b\u70b9\u3001\u4e00\u70b9\u8d44\u8baf\u3001\u767e\u5bb6\u53f7\u3001\u65b0\u6d6a\u770b\u70b9\u3001\u51e4\u51f0\u535a\u5ba2\u3001\u7f51\u6613\u53f7\u7b49\u5e73\u53f0\u6587\u7ae0\u3002</strong>\u5176\u4ed6\u94fe\u63a5\uff0c\u5982QQ\u7a7a\u95f4\u3001\u5fae\u535a\u94fe\u63a5\u5bfc\u5165\u65e0\u6548\u3002</p></div></div>')
        },
        showErrorMsg: function (a) {
          var b = this.editor,
            c = b.document.getElementById("remotecontent-msg");
          c && d.remove(c);
          b.fireEvent("showmessage", {
            id: "remotecontent-msg",
            content: a,
            type: "error",
            timeout: 6E3
          })
        },
        cancel: function () {
          if (this.oncancel) this.oncancel()
        },
        _onBtnClick: function (a) {
          a = this.getDom("urlinput");
          var b = a.value || "";
          if ("" == b) alert("url\u4e0d\u80fd\u4e3a\u7a7a");
          else {
            var c = this,
              d = this.editor,
              g = "//" + d.options.plat_host + "/downloads/getRemoteContent";
            d.options.appkey && (g += "?appkey=" + d.options.appkey);
            UE.ajax.request(g, {
              method: "POST",
              dataType: "jsonp",
              data: {
                uri: b
              },
              onsuccess: function (b) {
                0 != b.ret ? c.showErrorMsg(b.msg) : (a.value = "", d.execCommand("cleardoc"), d.setContent(b.data.content), d.options.remoteName && setTimeout(function () {
                  b.data.name ? jQuery(d.options.remoteName).attr("data-name", b.data.name).val(b.data.name) : jQuery(d.options.remoteName).val("");
                  b.data.summary ? jQuery(d.options.remoteSummary).val(b.data.summary) : jQuery(d.options.remoteSummary).val("");
                  b.data.coverimg ? jQuery(d.options.remoteCoverimg).val(b.data.coverimg) : jQuery(d.options.remoteCoverimg).val("")
                }, 1E3), d.document && (parser = jQuery(d.document), parser.find("[donone]").removeAttr("label").removeAttr("id").removeAttr("donone").attr("class", "_135editor"), parser.find(".shifubrush").removeAttr("class"), parser.find("[data-id]").attr("class", "_135editor"), parser.find("[powered-by]").attr("class", "_135editor"), parser.find(".135editor").removeClass("135editor").addClass("_135editor"), parser.find("[powered-by]").each(function () {
                  var a = jQuery(this);
                  200 > a.text().length && a.find("[powered-by]").removeAttr("class")
                }), parser.find("[powered-by]").attr("powered-by", "135\u7f16\u8f91\u5668")), d.fireEvent("catchRemoteImage"));
                if (c.ongetremotesuccess) c.ongetremotesuccess()
              },
              onerror: function (a) {
                c.showErrorMsg("\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u91cd\u8bd5\u6216\u68c0\u67e5\u7f51\u7edc")
              }
            })
          }
        }
      };
      b.inherits(a, c)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.uiUtils,
        c = r.editor.ui.UIBase,
        a = r.editor.ui.TablePicker = function (a) {
          this.initOptions(a);
          this.initTablePicker()
        };
      a.prototype = {
        defaultNumRows: 10,
        defaultNumCols: 10,
        maxNumRows: 20,
        maxNumCols: 20,
        numRows: 10,
        numCols: 10,
        lengthOfCellSide: 22,
        initTablePicker: function () {
          this.initUIBase()
        },
        getHtmlTpl: function () {
          return '<div id="##" class="edui-tablepicker %%"><div class="edui-tablepicker-body"><div class="edui-infoarea"><span id="##_label" class="edui-label"></span></div><div class="edui-pickarea" onmousemove="$$._onMouseMove(event, this);" onmouseover="$$._onMouseOver(event, this);" onmouseout="$$._onMouseOut(event, this);" onclick="$$._onClick(event, this);"><div id="##_overlay" class="edui-overlay"></div></div></div></div>'
        },
        _UIBase_render: c.prototype.render,
        render: function (a) {
          this._UIBase_render(a);
          this.getDom("label").innerHTML = "0" + this.editor.getLang("t_row") + " x 0" + this.editor.getLang("t_col")
        },
        _track: function (a, b) {
          var c = this.getDom("overlay").style,
            d = this.lengthOfCellSide;
          c.width = a * d + "px";
          c.height = b * d + "px";
          this.getDom("label").innerHTML = a + this.editor.getLang("t_col") + " x " + b + this.editor.getLang("t_row");
          this.numCols = a;
          this.numRows = b
        },
        _onMouseOver: function (a, c) {
          a = a.relatedTarget || a.fromElement;
          b.contains(c, a) || c === a || (this.getDom("label").innerHTML = "0" + this.editor.getLang("t_col") + " x 0" + this.editor.getLang("t_row"), this.getDom("overlay").style.visibility = "")
        },
        _onMouseOut: function (a, c) {
          a = a.relatedTarget || a.toElement;
          b.contains(c, a) || c === a || (this.getDom("label").innerHTML = "0" + this.editor.getLang("t_col") + " x 0" + this.editor.getLang("t_row"), this.getDom("overlay").style.visibility = "hidden")
        },
        _onMouseMove: function (a, c) {
          this.getDom("overlay");
          a = b.getEventOffset(a);
          c = this.lengthOfCellSide;
          this._track(Math.ceil(a.left / c), Math.ceil(a.top / c))
        },
        _onClick: function () {
          this.fireEvent("picktable", this.numCols, this.numRows)
        }
      };
      d.inherits(a, c)
    })();
    (function () {
      var d = r.editor.dom.domUtils,
        b = r.editor.ui.uiUtils,
        c = 'onmousedown="$$.Stateful_onMouseDown(event, this);" onmouseup="$$.Stateful_onMouseUp(event, this);"' + (r.editor.browser.ie ? ' onmouseenter="$$.Stateful_onMouseEnter(event, this);" onmouseleave="$$.Stateful_onMouseLeave(event, this);"' : ' onmouseover="$$.Stateful_onMouseOver(event, this);" onmouseout="$$.Stateful_onMouseOut(event, this);"');
      r.editor.ui.Stateful = {
        alwalysHoverable: !1,
        target: null,
        Stateful_init: function () {
          this._Stateful_dGetHtmlTpl = this.getHtmlTpl;
          this.getHtmlTpl = this.Stateful_getHtmlTpl
        },
        Stateful_getHtmlTpl: function () {
          return this._Stateful_dGetHtmlTpl().replace(/stateful/g, function () {
            return c
          })
        },
        Stateful_onMouseEnter: function (a, b) {
          this.target = b;
          if (!this.isDisabled() || this.alwalysHoverable) this.addState("hover"),
            this.fireEvent("over")
        },
        Stateful_onMouseLeave: function (a, b) {
          if (!this.isDisabled() || this.alwalysHoverable) this.removeState("hover"),
            this.removeState("active"),
            this.fireEvent("out")
        },
        Stateful_onMouseOver: function (a, c) {
          var d = a.relatedTarget;
          b.contains(c, d) || c === d || this.Stateful_onMouseEnter(a, c)
        },
        Stateful_onMouseOut: function (a, c) {
          var d = a.relatedTarget;
          b.contains(c, d) || c === d || this.Stateful_onMouseLeave(a, c)
        },
        Stateful_onMouseDown: function (a, b) {
          this.isDisabled() || this.addState("active")
        },
        Stateful_onMouseUp: function (a, b) {
          this.isDisabled() || this.removeState("active")
        },
        Stateful_postRender: function () {
          this.disabled && !this.hasState("disabled") && this.addState("disabled")
        },
        hasState: function (a) {
          return d.hasClass(this.getStateDom(), "edui-state-" + a)
        },
        addState: function (a) {
          this.hasState(a) || (this.getStateDom().className += " edui-state-" + a)
        },
        removeState: function (a) {
          this.hasState(a) && d.removeClasses(this.getStateDom(), ["edui-state-" + a])
        },
        getStateDom: function () {
          return this.getDom("state")
        },
        isChecked: function () {
          return this.hasState("checked")
        },
        setChecked: function (a) {
          !this.isDisabled() && a ? this.addState("checked") : this.removeState("checked")
        },
        isDisabled: function () {
          return this.hasState("disabled")
        },
        setDisabled: function (a) {
          a ? (this.removeState("hover"), this.removeState("checked"), this.removeState("active"), this.addState("disabled")) : this.removeState("disabled")
        }
      }
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.UIBase,
        c = r.editor.ui.Stateful,
        a = r.editor.ui.Button = function (a) {
          if (a.name) {
            var b = a.name,
              c = a.cssRules;
            a.className || (a.className = "edui-for-" + b);
            a.cssRules = ".edui-" + (a.theme || "default") + " .edui-toolbar .edui-button.edui-for-" + b + " .edui-icon {" + c + "}"
          }
          this.initOptions(a);
          this.initButton()
        };
      a.prototype = {
        uiName: "button",
        label: "",
        title: "",
        showIcon: !0,
        showText: !0,
        cssRules: "",
        initButton: function () {
          this.initUIBase();
          this.Stateful_init();
          this.cssRules && d.cssRule("edui-customize-" + this.name + "-style", this.cssRules)
        },
        getHtmlTpl: function () {
          return '<div id="##" class="edui-box %%"><div id="##_state" stateful><div class="%%-wrap"><div id="##_body" unselectable="on" ' + (this.title ? 'title="' + this.title + '"' : "") + ' class="%%-body" onmousedown="return $$._onMouseDown(event, this);" onclick="return $$._onClick(event, this);">' + (this.showIcon ? '<div class="edui-box edui-icon"></div>' : "") + (this.showText ? '<div class="edui-box edui-label">' + this.label + "</div>" : "") + "</div></div></div></div>"
        },
        postRender: function () {
          this.Stateful_postRender();
          this.setDisabled(this.disabled)
        },
        _onMouseDown: function (a) {
          a = (a = a.target || a.srcElement) && a.tagName && a.tagName.toLowerCase();
          if ("input" == a || "object" == a || "object" == a) return !1
        },
        _onClick: function () {
          this.isDisabled() || this.fireEvent("click")
        },
        setTitle: function (a) {
          this.getDom("label").innerHTML =
            a
        }
      };
      d.inherits(a, b);
      d.extend(a.prototype, c)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.uiUtils,
        c = r.editor.ui.UIBase,
        a = r.editor.ui.Stateful,
        f = r.editor.ui.SplitButton = function (a) {
          this.initOptions(a);
          this.initSplitButton()
        };
      f.prototype = {
        popup: null,
        uiName: "splitbutton",
        title: "",
        initSplitButton: function () {
          this.initUIBase();
          this.Stateful_init();
          if (null != this.popup) {
            var a = this.popup;
            this.popup = null;
            this.setPopup(a)
          }
        },
        _UIBase_postRender: c.prototype.postRender,
        postRender: function () {
          this.Stateful_postRender();
          this._UIBase_postRender()
        },
        setPopup: function (a) {
          this.popup !== a && (null != this.popup && this.popup.dispose(), a.addListener("show", d.bind(this._onPopupShow, this)), a.addListener("hide", d.bind(this._onPopupHide, this)), a.addListener("postrender", d.bind(function () {
            a.getDom("body").appendChild(b.createElementByHtml('<div id="' + this.popup.id + '_bordereraser" class="edui-bordereraser edui-background" style="width:' + (b.getClientRect(this.getDom()).width + 20) + 'px"></div>'));
            a.getDom().className += " " + this.className
          }, this)), this.popup = a)
        },
        _onPopupShow: function () {
          this.addState("opened")
        },
        _onPopupHide: function () {
          this.removeState("opened")
        },
        getHtmlTpl: function () {
          var a = '<div id="##_button_body" class="edui-box edui-button-body" ' + (this.title ? 'title="' + this.title + '"' : "") + ' onclick="$$._onButtonClick(event, this);">' +  (this.showText ? '<div class="edui-box edui-label">' + this.label + "</div>" : this.label ? ('<div class="edui-box edui-icon"></div><div class="edui-box edui-label">' + this.label + '</div>') : '<div class="edui-box edui-icon"></div>') + '</div>';
          this.useInput && (a = '<div id="##_button_body" class="edui-box edui-button-body"><input id="##_wx_input" class="edui-box edui-wx-input " type="text" ' + (this.title ? 'title="' + this.title + '"' : "") + ' onkeydown="$$._onInputKeydown(event, this);" onclick="$$._onInputClick(event, this);" onblur="$$._onInputBlur(event, this);"></div>');
          return '<div id="##" class="edui-box %%"><div ' + (this.title ? 'data-tooltip="' + this.title + '"' : "") + ' id="##_state" stateful class="js_tooltip"><div class="%%-body">' + a + '<div class="edui-box edui-splitborder"></div><div class="edui-box edui-arrow" onclick="$$._onArrowClick();"></div></div></div></div>'
        },
        showPopup: function () {
          var a = b.getClientRect(this.getDom());
          a.top -= this.popup.SHADOW_RADIUS;
          a.height += this.popup.SHADOW_RADIUS;
          this.popup.showAnchorRect(a)
        },
        _onArrowClick: function (a, b) {
          this.isDisabled() || this.showPopup()
        },
        _onInputClick: function () {
          this.isDisabled() || this.fireEvent("inputclick")
        },
        _onInputBlur: function (a) {
          this.isDisabled() || this.fireEvent("inputblur");
          a.stopPropagation ? (a.stopPropagation(), a.preventDefault()) : a.cancelBubble = !0
        },
        _onInputKeydown: function (a) {
          this.isDisabled() || this.fireEvent("inputkeydown", a)
        },
        _onButtonClick: function () {
          this.isDisabled() || this.fireEvent("buttonclick")
        }
      };
      d.inherits(f, c);
      d.extend(f.prototype, a, !0)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.uiUtils,
        c = r.editor.ui.ColorPicker,
        a = r.editor.ui.Popup,
        f = r.editor.ui.SplitButton,
        h = r.editor.ui.ColorButton = function (a) {
          this.initOptions(a);
          this.initColorButton()
        };
      h.prototype = {
        initColorButton: function () {
          var b = this;
          this.popup = new a({
            content: new c({
              noColorText: b.editor.getLang("clearColor"),
              editor: b.editor,
              onpickcolor: function (a, c) {
                b._onPickColor(c)
              },
              onpicknocolor: function (a, c) {
                b._onPickNoColor(c)
              }
            }),
            editor: b.editor,
            onhide: function () {
              b.popup.dispose()
            }
          });
          this.initSplitButton()
        },
        _SplitButton_postRender: f.prototype.postRender,
        postRender: function () {
          this._SplitButton_postRender();
          this.getDom("button_body").appendChild(b.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>'));
          this.getDom().className += " edui-colorbutton"
        },
        setColor: function (a) {
          this.color = this.getDom("colorlump").style.backgroundColor = a
        },
        _onPickColor: function (a) {
          !1 !== this.fireEvent("pickcolor", a) && (this.setColor(a), this.popup.hide())
        },
        _onPickNoColor: function (a) {
          !1 !== this.fireEvent("picknocolor") && this.popup.hide()
        }
      };
      d.inherits(h, f)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.Popup,
        c = r.editor.ui.TablePicker,
        a = r.editor.ui.SplitButton,
        f = r.editor.ui.TableButton = function (a) {
          this.initOptions(a);
          this.initTableButton()
        };
      f.prototype = {
        initTableButton: function () {
          var a = this;
          this.popup = new b({
            content: new c({
              editor: a.editor,
              onpicktable: function (b, c, d) {
                a._onPickTable(c, d)
              }
            }),
            editor: a.editor
          });
          this.initSplitButton()
        },
        _onPickTable: function (a, b) {
          !1 !== this.fireEvent("picktable", a, b) && this.popup.hide()
        }
      };
      d.inherits(f, a)
    })();
    (function () {
      var d =
          r.editor.utils,
        b = r.editor.ui.UIBase,
        c = r.editor.ui.AutoTypeSetPicker = function (a) {
          this.initOptions(a);
          this.initAutoTypeSetPicker()
        };
      c.prototype = {
        initAutoTypeSetPicker: function () {
          this.initUIBase()
        },
        getHtmlTpl: function () {
          var a = this.editor,
            b = a.options.autotypeset,
            c = a.getLang("autoTypeSet"),
            d = "textAlignValue" + a.uid,
            f = "imageBlockLineValue" + a.uid,
            wv = "wordchangeValue" + a.uid,
            sc = "symbolConver_numValue" + a.uid,
            k = "symbolConverValue" + a.uid,
            brp = "symbolConver_brpValue" + a.uid;
          // return '<div id="##" class="edui-autotypesetpicker %%"><div class="edui-autotypesetpicker-body"><table ><tr><td nowrap><input type="checkbox" name="mergeEmptyline" ' + (b.mergeEmptyline ? "checked" : "") + ">" + c.mergeLine + '</td><td colspan="2"><input type="checkbox" name="removeEmptyline" ' + (b.removeEmptyline ? "checked" : "") + ">" + c.delLine + '</td></tr><tr><td nowrap><input type="checkbox" name="removeClass" ' + (b.removeClass ? "checked" : "") + ">" + c.removeFormat + '</td><td colspan="2"><input type="checkbox" name="indent" ' + (b.indent ? "checked" : "") + ">" + c.indent + '</td></tr><tr><td nowrap><input type="checkbox" name="clearFontSize" ' + (b.clearFontSize ? "checked" : "") + ">" + c.removeFontsize + '</td><td colspan="2"><input type="checkbox" name="clearFontFamily" ' + (b.clearFontFamily ? "checked" : "") + ">" + c.removeFontFamily + '</td></tr><tr><td nowrap><input type="checkbox" name="textAlign" ' + (b.textAlign ? "checked" : "") + ">" + c.alignment + '</td><td colspan="2" id="' + d + '"><input type="radio" name="' + d + '" value="left" ' + (b.textAlign && "left" == b.textAlign ? "checked" : "") + ">" + a.getLang("justifyleft") + '<input type="radio" name="' + d + '" value="center" ' + (b.textAlign && "center" == b.textAlign ? "checked" : "") + ">" + a.getLang("justifycenter") + '<input type="radio" name="' + d + '" value="right" ' + (b.textAlign && "right" == b.textAlign ? "checked" : "") + ">" + a.getLang("justifyright") + '</td></tr><tr><td nowrap><input type="checkbox" name="imageBlockLine" ' + (b.imageBlockLine ? "checked" : "") + ">" + c.imageFloat + '</td><td nowrap id="' + f + '"><input type="radio" name="' + f + '" value="none" ' + (b.imageBlockLine && "none" == b.imageBlockLine ? "checked" : "") + ">" + a.getLang("default") + '<input type="radio" name="' + f + '" value="left" ' + (b.imageBlockLine && "left" == b.imageBlockLine ? "checked" : "") + ">" + a.getLang("justifyleft") + '<input type="radio" name="' + f + '" value="center" ' + (b.imageBlockLine && "center" == b.imageBlockLine ? "checked" : "") + ">" + a.getLang("justifycenter") + '<input type="radio" name="' + f + '" value="right" ' + (b.imageBlockLine && "right" == b.imageBlockLine ? "checked" : "") + ">" + a.getLang("justifyright") + '</td></tr><tr><td nowrap><input type="checkbox" name="symbolConver" ' + (b.bdc2sb || b.tobdc ? "checked" : "") + ">" + c.symbol + '</td><td id="' + k + '"><input type="radio" name="bdc" value="bdc2sb" ' + (b.bdc2sb ? "checked" : "") + ">" + c.bdc2sb + '<input type="radio" name="bdc" value="tobdc" ' + (b.tobdc ? "checked" : "") + ">" + c.tobdc + '</td><td nowrap align="right"><button >' + c.run + "</button></td></tr></table></div></div>"

          return '<div id="##" class="edui-autotypesetpicker %%">' +
            '<div class="edui-autotypesetpicker-body">' +
            '<table >' +
            '<tr>'+
            '<td nowrap><input type="checkbox" name="mergeEmptyline" ' + (b["mergeEmptyline"] ? "checked" : "" ) + '>' + c.mergeLine + '</td>'+
            '<td colspan="2"><input type="checkbox" name="removeEmptyline" ' + (b["removeEmptyline"] ? "checked" : "" ) + '>' + c.delLine + '</td>'+
            '</tr>' +
            '<tr>'+
            '<td><input type="checkbox" name="removeClass" ' + (b["removeClass"] ? "checked" : "" ) + '>' + c.removeFormat + '</td>'+
            '<td><input type="checkbox" name="indent" ' + (b["indent"] ? "checked" : "" ) + '>' + c.indent +
            '<input type="checkbox" name="keepSpaceBetweenPra" ' + (b["keepSpaceBetweenPra"] ? "checked" : "" ) + '>'+ c.keepSpaceBetweenPra +'</td>'+
            //'<td><input type="checkbox" name="keepSpaceBetweenPra" ' + (b["keepSpaceBetweenPra"] ? "checked" : "" ) + '>'+ c.keepSpaceBetweenPra + '</td>'+
            '</tr>' +
            '<tr>' +
            '<td nowrap><input type="checkbox" name="textAlign" ' + (b["textAlign"] ? "checked" : "" ) + '>' + c.alignment + '</td>' +
            '<td colspan="2" id="' + d + '">' +
            '<input type="radio" name="'+ d +'" value="left" ' + ((b["textAlign"] && b["textAlign"] == "left") ? "checked" : "") + '>' + a.getLang("justifyleft") +
            '<input type="radio" name="'+ d +'" value="center" ' + ((b["textAlign"] && b["textAlign"] == "center") ? "checked" : "") + '>' + a.getLang("justifycenter") +
            '<input type="radio" name="'+ d +'" value="right" ' + ((b["textAlign"] && b["textAlign"] == "right") ? "checked" : "") + '>' + a.getLang("justifyright") +
            '<input type="radio" name="'+ d +'" value="justify" ' + ((b["textAlign"] && b["textAlign"] == "justify") ? "checked" : "") + '>' + a.getLang("justifyjustify") +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td nowrap><input type="checkbox" name="imageBlockLine" ' + (b["imageBlockLine"] ? "checked" : "" ) + '>' + c.imageFloat + '</td>' +
            '<td nowrap id="'+ f +'">' +
            '<input type="radio" name="'+ f +'" value="none" ' + ((b["imageBlockLine"] && b["imageBlockLine"] == "none") ? "checked" : "") + '>' + a.getLang("default") +
            '<input type="radio" name="'+ f +'" value="left" ' + ((b["imageBlockLine"] && b["imageBlockLine"] == "left") ? "checked" : "") + '>' + a.getLang("justifyleft") +
            '<input type="radio" name="'+ f +'" value="center" ' + ((b["imageBlockLine"] && b["imageBlockLine"] == "center") ? "checked" : "") + '>' + a.getLang("justifycenter") +
            '<input type="radio" name="'+ f +'" value="right" ' + ((b["imageBlockLine"] && b["imageBlockLine"] == "right") ? "checked" : "") + '>' + a.getLang("justifyright") +
            '</td>' +

            '</tr>' +
            '<tr>'+
            '<td nowrap colspan="3"><input type="checkbox" name="imgeTitle" ' + (b["imageTitle"] ? "checked" : "" ) + '>' + c.imageTitle + '</td>'+
            '</tr>'+
            '<tr>'+
            '<td><input type="checkbox" name="clearFontSize" ' + (b["clearFontSize"] ? "checked" : "" ) + '>' + c.removeFontsize + '</td>'+
            '<td><input type="checkbox" name="clearFontFamily" ' + (b["clearFontFamily"] ? "checked" : "" ) + '>' + c.removeFontFamily + // '</td>'+
            '<input type="checkbox" name="clearTable" ' + (b["clearTable"] ? "checked" : "" ) + '>' + '清除表格' + '</td>'+
            '</tr>' +
            '<tr>'+
            '<td nowrap colspan="3"><input type="checkbox" name="removeEmptyNode" ' + (b["removeEmptyNode"] ? "checked" : "" ) + '>' + c.removeHtml + '</td>'+
            '</tr>' +
            '<tr>'+
            '<td nowrap colspan="3"><input type="checkbox" name="pasteFilter" ' + (b["pasteFilter"] ? "checked" : "" ) + '>' + c.pasteFilter + '</td>'+
            '</tr>' +
            '<tr>' +
            '<td nowrap><input type="checkbox" name="symbolConver" ' + (b["bdc2sb"] || b["tobdc"] ? "checked" : "" ) + '>' + c.symbol + '</td>' +
            '<td id="' + k + '">' +
            '<input type="radio" name="' + k + '" value="bdc2sb" ' + (b["bdc2sb"] ? "checked" : "" ) + '>' + c.bdc2sb +
            '<input type="radio" name="' + k + '" value="tobdc" ' + (b["tobdc"] ? "checked" : "" ) + '>' + c.tobdc + '' +
            '</td>'+
            '</tr>' +
            '<tr>' +       //-----字母全半转换
            '<td nowrap><input type="checkbox" name="wordchange" ' + (b["word_toall"] || b["word_tohalf"] ? "checked" : "" ) + '>' + c.wordchange + '</td>' +
            '<td id="' + wv + '">' +
            '<input type="radio" name="' + wv + '" value="word_tohalf" ' + (b["word_tohalf"] ? "checked" : "" ) + '>' + c.word_tohalf +
            '<input type="radio" name="' + wv + '" value="word_toall" ' + (b["word_toall"] ? "checked" : "" ) + '>' + c.word_toall + '' +
            '</td>'+
            '</tr>' +
            '<tr>' +
            '<td nowrap><input type="checkbox" name="symbolConver_num" ' + (b["bdc2sb_num"] || b["tobdc_num"] ? "checked" : "" ) + '>' + c.symbol_num + '</td>' +
            '<td id="' + sc + '">' +
            '<input type="radio" name="' + sc + '" value="bdc2sb_num" ' + (b["bdc2sb_num"] ? "checked" : "" ) + '>' + c.bdc2sb_num +
            '<input type="radio" name="' + sc+ '" value="tobdc_num" ' + (b["tobdc_num"] ? "checked" : "" ) + '>' + c.tobdc_num + '' +
            '</td>' +

            '</tr>' +
            '<tr>' +
            '<td nowrap><input type="checkbox" name="symbolConver_brp" ' + (b["br2p"] || b["p2br"] ? "checked" : "" ) + '>段落转换</td>' +
            '<td id="' + brp + '">' +
            '<input type="radio" name="' + brp + '" value="br2p" ' + (b["br2p"] ? "checked" : "" ) + '>' + '换行转换段' +
            '<input type="radio" name="' + brp + '" value="p2br" ' + (b["p2br"] ? "checked" : "" ) + '>' + '换段转换行' + '' +
            '</td>' +

            '</tr>' +
            '<tr>' +
            '<td nowrap colspan="3" align="right"><button >' + c.run + '</button></td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '</div>';
        },
        _UIBase_render: b.prototype.render
      };
      d.inherits(c, b)
    })();
    (function () {
      function d(a) {
        for (var c = {}, d = a.getDom(), e = a.editor.uid, g, h = f.getElementsByTagName(d, "input"), t = h.length - 1, v; v = h[t--];) if (g = v.getAttribute("type"), "checkbox" == g) if (g = v.getAttribute("name"), c[g] && delete c[g], v.checked) if (v = document.getElementById(g + "Value" + e)) if (/input/ig.test(v.tagName)) c[g] = v.value;
        else {
          v = v.getElementsByTagName("input");
          for (var w = v.length - 1, p; p = v[w--];) if (p.checked) {
            c[g] = p.value;
            break
          }
        } else c[g] = !0;
        else c[g] = !1;
        else c[v.getAttribute("value")] = v.checked;
        d = f.getElementsByTagName(d, "select");
        for (t = 0; e = d[t++];) h = e.getAttribute("name"),
          c[h] = c[h] ? e.value : "";
        b.extend(a.editor.options.autotypeset, c);
        a.editor.setPreferences("autotypeset", c)
      }
      var b = r.editor.utils,
        c = r.editor.ui.Popup,
        a = r.editor.ui.AutoTypeSetPicker,
        g = r.editor.ui.SplitButton,
        h = r.editor.ui.AutoTypeSetButton = function (a) {
          this.initOptions(a);
          this.initAutoTypeSetButton()
        };
      h.prototype = {
        initAutoTypeSetButton: function () {
          var b = this;
          this.popup = new c({
            content: new a({
              editor: b.editor
            }),
            editor: b.editor,
            hide: function () {
              !this._hidden && this.getDom() && (d(this), this.getDom().style.display = "none", this._hidden = !0, this.fireEvent("hide"))
            }
          });
          var g = 0;
          this.popup.addListener("postRenderAfter", function () {
            var a = this;
            if (!g) {
              var c = this.getDom();
              c.getElementsByTagName("button")[0].onclick = function () {
                d(a);
                b.editor.execCommand("autotypeset");
                a.hide();
                b.editor.fireEvent("showmessage", {
                  content: "\u6267\u884c\u5b8c\u6bd5",
                  type: "success",
                  timeout: 3E3
                })
              };
              f.on(c, "click", function (c) {
                c = c.target || c.srcElement;
                var e = b.editor.uid;
                if (c && "INPUT" == c.tagName) {
                  if ("imageBlockLine" == c.name || "textAlign" == c.name || "symbolConver" == c.name || "wordchange" == c.name|| "symbolConver_num" == c.name || "symbolConver_brp" === c.name) for (var f = c.checked, k = document.getElementById(c.name + "Value" + e).getElementsByTagName("input"), g = {
                    imageBlockLine: "none",
                    textAlign: "left",
                    symbolConver: "tobdc",
                    wordchange: "word_toall",
                    symbolConver_num: "bdc2sb_num",
                    symbolConver_brp: "p2br"
                  }, h = 0; h < k.length; h++) f ? k[h].value == g[c.name] && (k[h].checked = "checked") : k[h].checked = !1;
                  (c.name == "imageBlockLineValue" + e || c.name == "textAlignValue" + e || "symbolConver_numValue" + e == c.name || "symbolConver_brpValue" + e == c.name || c.name == "wordchangeValue" + e || c.name == "symbolConverValue"  + e) && (c = c.parentNode.previousSibling.getElementsByTagName("input")) && (c[0].checked = !0);
                  d(a)
                }
              });
              g = 1
            }
          });
          this.initSplitButton()
        }
      };
      b.inherits(h, g)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.Popup,
        c = r.editor.ui.Stateful,
        a = r.editor.ui.UIBase,
        f = r.editor.ui.CellAlignPicker = function (a) {
          this.initOptions(a);
          this.initSelected();
          this.initCellAlignPicker()
        };
      f.prototype = {
        initSelected: function () {
          var a = {
              top: 0,
              middle: 1,
              bottom: 2
            },
            b = {
              left: 0,
              center: 1,
              right: 2
            };
          this.selected && (this.selectedIndex = 3 * a[this.selected.valign] + b[this.selected.align])
        },
        initCellAlignPicker: function () {
          this.initUIBase();
          this.Stateful_init()
        },
        getHtmlTpl: function () {
          for (var a = ["left", "center", "right"], b, c, d = [], f = 0; 9 > f; f++) b = this.selectedIndex === f ? ' class="edui-cellalign-selected" ' : "",
            c = f % 3,
          0 === c && d.push("<tr>"),
            d.push('<td index="' + f + '" ' + b + ' stateful><div class="edui-icon edui-' + a[c] + '"></div></td>'),
          2 === c && d.push("</tr>");
          return '<div id="##" class="edui-cellalignpicker %%"><div class="edui-cellalignpicker-body"><table onclick="$$._onClick(event);">' + d.join("") + "</table></div></div>"
        },
        getStateDom: function () {
          return this.target
        },
        _onClick: function (a) {
          var c = a.target || a.srcElement;
          /icon/.test(c.className) && (this.items[c.parentNode.getAttribute("index")].onclick(), b.postHide(a))
        },
        _UIBase_render: a.prototype.render
      };
      d.inherits(f, a);
      d.extend(f.prototype, c, !0)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.Stateful,
        c = r.editor.ui.uiUtils,
        a = r.editor.ui.UIBase,
        g = r.editor.ui.PastePicker = function (a) {
          this.initOptions(a);
          this.initPastePicker()
        };
      g.prototype = {
        initPastePicker: function () {
          this.initUIBase();
          this.Stateful_init()
        },
        getHtmlTpl: function () {
          return '<div class="edui-pasteicon" onclick="$$._onClick(this)"></div><div class="edui-pastecontainer"><div class="edui-title">' + this.editor.getLang("pasteOpt") + '</div><div class="edui-button"><div title="' + this.editor.getLang("pasteSourceFormat") + '" onclick="$$.format(false)" stateful><div class="edui-richtxticon"></div></div><div title="' + this.editor.getLang("tagFormat") + '" onclick="$$.format(2)" stateful><div class="edui-tagicon"></div></div><div title="' + this.editor.getLang("pasteTextFormat") + '" onclick="$$.format(true)" stateful><div class="edui-plaintxticon"></div></div></div></div></div>'
        },
        getStateDom: function () {
          return this.target
        },
        format: function (a) {
          this.editor.ui._isTransfer = !0;
          this.editor.fireEvent("pasteTransfer", a)
        },
        _onClick: function (a) {
          var b = f.getNextDomNode(a),
            d = c.getViewportRect().height,
            k = c.getClientRect(b);
          b.style.top = k.top + k.height > d ? -k.height - a.offsetHeight + "px" : "";
          /hidden/ig.test(f.getComputedStyle(b, "visibility")) ? (b.style.visibility = "visible", f.addClass(a, "edui-state-opened")) : (b.style.visibility = "hidden", f.removeClasses(a, "edui-state-opened"))
        },
        _UIBase_render: a.prototype.render
      };
      d.inherits(g, a);
      d.extend(g.prototype, b, !0)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.uiUtils,
        c = r.editor.ui.UIBase,
        a = r.editor.ui.Toolbar = function (a) {
          this.initOptions(a);
          this.initToolbar()
        };
      a.prototype = {
        items: null,
        initToolbar: function () {
          this.items = this.items || [];
          this.initUIBase()
        },
        add: function (a, b) {
          void 0 === b ? this.items.push(a) : this.items.splice(b, 0, a)
        },
        getHtmlTpl: function () {
          for (var a = [], b = 0; b < this.items.length; b++) a[b] = this.items[b].renderHtml();
          return '<div id="##" class="edui-toolbar %%" onselectstart="return false;" onmousedown="return $$._onMouseDown(event, this);">' + a.join("") + "</div>"
        },
        postRender: function () {
          for (var a = this.getDom(), c = 0; c < this.items.length; c++) this.items[c].postRender();
          b.makeUnselectable(a)
        },
        _onMouseDown: function (a) {
          a = (a = a.target || a.srcElement) && a.tagName && a.tagName.toLowerCase();
          if ("input" == a || "object" == a || "object" == a) return !1
        }
      };
      d.inherits(a, c)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.dom.domUtils,
        c = r.editor.ui.uiUtils,
        a = r.editor.ui.UIBase,
        f = r.editor.ui.Popup,
        h = r.editor.ui.Stateful,
        e = r.editor.ui.CellAlignPicker,
        l = r.editor.ui.Menu = function (a) {
          this.initOptions(a);
          this.initMenu()
        },
        k = {
          renderHtml: function () {
            return '<div class="edui-menuitem edui-menuseparator"><div class="edui-menuseparator-inner"></div></div>'
          },
          postRender: function () {},
          queryAutoHide: function () {
            return !0
          }
        };
      l.prototype = {
        items: null,
        uiName: "menu",
        initMenu: function () {
          this.items = this.items || [];
          this.initPopup();
          this.initItems()
        },
        initItems: function () {
          for (var a = 0; a < this.items.length; a++) {
            var b = this.items[a];
            "-" == b ? this.items[a] = this.getSeparator() : b instanceof n || (b.editor = this.editor, b.theme = this.editor.options.theme, this.items[a] = this.createItem(b))
          }
        },
        getSeparator: function () {
          return k
        },
        createItem: function (a) {
          a.menu = this;
          return new n(a)
        },
        _Popup_getContentHtmlTpl: f.prototype.getContentHtmlTpl,
        getContentHtmlTpl: function () {
          if (0 == this.items.length) return this._Popup_getContentHtmlTpl();
          for (var a = [], b = 0; b < this.items.length; b++) a[b] = this.items[b].renderHtml();
          return '<div class="%%-body">' + a.join("") + "</div>"
        },
        _Popup_postRender: f.prototype.postRender,
        postRender: function () {
          for (var a = this, d = 0; d < this.items.length; d++) {
            var e = this.items[d];
            e.ownerMenu = this;
            e.postRender()
          }
          b.on(this.getDom(), "mouseover", function (b) {
            b = b || event;
            b = b.relatedTarget || b.fromElement;
            var d = a.getDom();
            c.contains(d, b) || d === b || a.fireEvent("over")
          });
          this._Popup_postRender()
        },
        queryAutoHide: function (a) {
          if (a) {
            if (c.contains(this.getDom(), a)) return !1;
            for (var b = 0; b < this.items.length; b++) if (!1 === this.items[b].queryAutoHide(a)) return !1
          }
        },
        clearItems: function () {
          for (var a = 0; a < this.items.length; a++) {
            var b = this.items[a];
            clearTimeout(b._showingTimer);
            clearTimeout(b._closingTimer);
            b.subMenu && b.subMenu.destroy()
          }
          this.items = []
        },
        destroy: function () {
          this.getDom() && b.remove(this.getDom());
          this.clearItems()
        },
        dispose: function () {
          this.destroy()
        }
      };
      d.inherits(l, f);
      var n = r.editor.ui.MenuItem = function (a) {
        this.initOptions(a);
        this.initUIBase();
        this.Stateful_init();
        if (this.subMenu && !(this.subMenu instanceof l)) if (a.className && -1 != a.className.indexOf("aligntd")) {
          var c = this;
          this.subMenu.selected = this.editor.queryCommandValue("cellalignment");
          this.subMenu = new f({
            content: new e(this.subMenu),
            parentMenu: c,
            editor: c.editor,
            destroy: function () {
              this.getDom() && b.remove(this.getDom())
            }
          });
          this.subMenu.addListener("postRenderAfter", function () {
            b.on(this.getDom(), "mouseover", function () {
              c.addState("opened")
            })
          })
        } else this.subMenu = new l(this.subMenu)
      };
      n.prototype = {
        label: "",
        subMenu: null,
        ownerMenu: null,
        uiName: "menuitem",
        alwalysHoverable: !0,
        getHtmlTpl: function () {
          return '<div id="##" class="%%" stateful onclick="$$._onClick(event, this);"><div class="%%-body">' + this.renderLabelHtml() + "</div></div>"
        },
        postRender: function () {
          var a = this;
          this.addListener("over", function () {
            a.ownerMenu.fireEvent("submenuover", a);
            a.subMenu && a.delayShowSubMenu()
          });
          this.subMenu && (this.getDom().className += " edui-hassubmenu", this.subMenu.render(), this.addListener("out", function () {
            a.delayHideSubMenu()
          }), this.subMenu.addListener("over", function () {
            clearTimeout(a._closingTimer);
            a._closingTimer = null;
            a.addState("opened")
          }), this.ownerMenu.addListener("hide", function () {
            a.hideSubMenu()
          }), this.ownerMenu.addListener("submenuover", function (b, c) {
            c !== a && a.delayHideSubMenu()
          }), this.subMenu._bakQueryAutoHide = this.subMenu.queryAutoHide, this.subMenu.queryAutoHide = function (b) {
            return b && c.contains(a.getDom(), b) ? !1 : this._bakQueryAutoHide(b)
          });
          this.getDom().style.tabIndex = "-1";
          c.makeUnselectable(this.getDom());
          this.Stateful_postRender()
        },
        delayShowSubMenu: function () {
          var a =
            this;
          a.isDisabled() || (a.addState("opened"), clearTimeout(a._showingTimer), clearTimeout(a._closingTimer), a._closingTimer = null, a._showingTimer = setTimeout(function () {
            a.showSubMenu()
          }, 250))
        },
        delayHideSubMenu: function () {
          var a = this;
          a.isDisabled() || (a.removeState("opened"), clearTimeout(a._showingTimer), a._closingTimer || (a._closingTimer = setTimeout(function () {
            a.hasState("opened") || a.hideSubMenu();
            a._closingTimer = null
          }, 400)))
        },
        renderLabelHtml: function () {
          // return '<div class="edui-arrow"></div><div class="edui-box edui-icon"></div><div class="edui-box edui-label %%-label">' + (this.label || "") + "</div>"
          return '<div class="edui-box edui-icon ' + (this.className || '') +'"></div><div class="edui-box edui-label %%-label">' + (this.label || "") + "</div>"
        },
        getStateDom: function () {
          return this.getDom()
        },
        queryAutoHide: function (a) {
          if (this.subMenu && this.hasState("opened")) return this.subMenu.queryAutoHide(a)
        },
        _onClick: function (a, b) {
          this.hasState("disabled") || !1 !== this.fireEvent("click", a, b) && (this.subMenu ? this.showSubMenu() : f.postHide(a))
        },
        showSubMenu: function () {
          var a = c.getClientRect(this.getDom());
          a.right -= 5;
          a.left += 2;
          a.width -= 7;
          a.top -= 4;
          a.bottom += 4;
          a.height += 8;
          this.subMenu.showAnchorRect(a, !0, !0)
        },
        hideSubMenu: function () {
          this.subMenu.hide()
        }
      };
      d.inherits(n, a);
      d.extend(n.prototype, h, !0)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.uiUtils,
        c = r.editor.ui.Menu,
        a = r.editor.ui.SplitButton,
        f = r.editor.ui.Combox = function (a) {
          this.initOptions(a);
          this.initCombox()
        };
      f.prototype = {
        uiName: "combox",
        onbuttonclick: function () {
          this.showPopup()
        },
        initCombox: function () {
          var a = this;
          this.items = this.items || [];
          for (var b = 0; b < this.items.length; b++) {
            var d = this.items[b];
            d.uiName = "listitem";
            d.index = b;
            "undefined" == typeof d.onclick && (d.onclick = function () {
              a.selectByIndex(this.index)
            })
          }
          this.popup =
            new c({
              items: this.items,
              uiName: "list",
              editor: this.editor,
              captureWheel: !0,
              combox: this
            });
          this.initSplitButton()
        },
        _SplitButton_postRender: a.prototype.postRender,
        postRender: function () {
          this._SplitButton_postRender();
          this.setLabel(this.label || "");
          this.setValue(this.initValue || "")
        },
        showPopup: function () {
          var a = b.getClientRect(this.getDom());
          a.top += 1;
          --a.bottom;
          a.height -= 2;
          this.popup.showAnchorRect(a)
        },
        getValue: function () {
          return this.value
        },
        setValue: function (a) {
          var b = this.indexByValue(a); - 1 != b ? (this.selectedIndex =
            b, this.setLabel(this.items[b].label), this.value = this.items[b].value) : (this.selectedIndex = -1, this.setLabel(this.getLabelForUnknowValue(a)), this.value = a)
        },
        setLabel: function (a) {
          this.useInput ? this.getDom("wx_input").value = a : this.getDom("button_body").innerHTML = a;
          this.label = a
        },
        getLabelForUnknowValue: function (a) {
          return a
        },
        indexByValue: function (a) {
          for (var b = 0; b < this.items.length; b++) if (a == this.items[b].value) return b;
          return -1
        },
        getItem: function (a) {
          return this.items[a]
        },
        selectByIndex: function (a) {
          a < this.items.length && !1 !== this.fireEvent("select", a) && (this.selectedIndex = a, this.value = this.items[a].value, this.setLabel(this.items[a].label))
        }
      };
      d.inherits(f, a)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.dom.domUtils,
        c = r.editor.ui.uiUtils,
        a = r.editor.ui.Mask,
        f = r.editor.ui.UIBase,
        h = r.editor.ui.Button,
        e = r.editor.ui.Dialog = function (a) {
          if (a.name) {
            var b = a.name,
              c = a.cssRules;
            a.className || (a.className = "edui-for-" + b);
            c && (a.cssRules = ".edui-default .edui-for-" + b + " .edui-dialog-content  {" + c + "}")
          }
          this.initOptions(d.extend({
            autoReset: !0,
            draggable: !0,
            onok: function () {},
            oncancel: function () {},
            onclose: function (a, b) {
              return b ? this.onok() : this.oncancel()
            },
            holdScroll: !1
          }, a));
          this.initDialog()
        },
        l, k, n;
      e.prototype = {
        draggable: !1,
        uiName: "dialog",
        initDialog: function () {
          var b = this,
            c = this.editor.options.theme;
          this.cssRules && d.cssRule("edui-customize-" + this.name + "-style", this.cssRules);
          this.initUIBase();
          this.modalMask = l || (l = new a({
            className: "edui-dialog-modalmask",
            theme: c,
            onclick: function () {
              n && n.close(!1)
            }
          }));
          this.dragMask = k || (k = new a({
            className: "edui-dialog-dragmask",
            theme: c
          }));
          this.closeButton = new h({
            className: "edui-dialog-closebutton",
            title: b.closeDialog,
            theme: c,
            onclick: function () {
              b.close(!1)
            }
          });
          this.fullscreen && this.initResizeEvent();
          if (this.buttons) for (c = 0; c < this.buttons.length; c++) this.buttons[c] instanceof h || (this.buttons[c] = new h(d.extend(this.buttons[c], {
            editor: this.editor
          }, !0)))
        },
        initResizeEvent: function () {
          var a = this;
          b.on(window, "resize", function () {
            a._hidden || void 0 === a._hidden || (a.__resizeTimer && window.clearTimeout(a.__resizeTimer), a.__resizeTimer = window.setTimeout(function () {
              a.__resizeTimer =
                null;
              var b = a.getDom(),
                d = a.getDom("content"),
                e = UE.ui.uiUtils.getClientRect(b),
                f = UE.ui.uiUtils.getClientRect(d),
                k = c.getViewportRect();
              d.style.width = k.width - e.width + f.width + "px";
              d.style.height = k.height - e.height + f.height + "px";
              b.style.width = k.width + "px";
              b.style.height = k.height + "px";
              a.fireEvent("resize")
            }, 100))
          })
        },
        fitSize: function () {
          var a = this.getDom("body"),
            b = this.mesureSize();
          a.style.width = b.width + "px";
          a.style.height = b.height + "px";
          return b
        },
        safeSetOffset: function (a) {
          var b = this.getDom(),
            d = c.getViewportRect(),
            e = c.getClientRect(b),
            f = a.left;
          f + e.width > d.right && (f = d.right - e.width);
          a = a.top;
          a + e.height > d.bottom && (a = d.bottom - e.height);
          b.style.left = Math.max(f, 0) + "px";
          b.style.top = Math.max(a, 0) + "px"
        },
        showAtCenter: function () {
          var a = c.getViewportRect();
          if (this.fullscreen) {
            var d = this.getDom(),
              e = this.getDom("content");
            d.style.display = "block";
            var f = UE.ui.uiUtils.getClientRect(d),
              k = UE.ui.uiUtils.getClientRect(e);
            d.style.left = "-100000px";
            e.style.width = a.width - f.width + k.width + "px";
            e.style.height = a.height - f.height + k.height + "px";
            d.style.width = a.width + "px";
            d.style.height = a.height + "px";
            d.style.left = 0;
            this._originalContext = {
              html: {
                overflowX: document.documentElement.style.overflowX,
                overflowY: document.documentElement.style.overflowY
              },
              body: {
                overflowX: document.body.style.overflowX,
                overflowY: document.body.style.overflowY
              }
            };
            document.documentElement.style.overflowX = "hidden";
            document.documentElement.style.overflowY = "hidden";
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden"
          } else this.getDom().style.display = "",
            e = this.fitSize(),
            f = this.getDom("titlebar").offsetHeight | 0,
            d = a.width / 2 - e.width / 2,
            a = a.height / 2 - (e.height - f) / 2 - f,
            e = this.getDom(),
            this.safeSetOffset({
              left: Math.max(d | 0, 0),
              top: Math.max(a | 0, 0)
            }),
          b.hasClass(e, "edui-state-centered") || (e.className += " edui-state-centered");
          this._show()
        },
        getContentHtml: function () {
          var a = "";
          "string" == typeof this.content ? a = this.content : this.iframeUrl && (0 < this.iframeUrl.indexOf("?") ? this.iframeUrl += "&v=" + this.editor.getOpt("version") : this.iframeUrl += "?v=" + this.editor.getOpt("version"), a = '<span id="' + this.id + '_contmask" class="dialogcontmask"></span><iframe id="' + this.id + '_iframe" class="%%-iframe" height="100%" width="100%" frameborder="0" src="' + this.iframeUrl + '"></iframe>');
          return a
        },
        getHtmlTpl: function () {
          var a = "";
          if (this.buttons) {
            a = [];
            for (var b = 0; b < this.buttons.length; b++) a[b] = this.buttons[b].renderHtml();
            a = '<div class="%%-foot"><div id="##_buttons" class="%%-buttons">' + a.join("") + "</div></div>"
          }
          return '<div id="##" class="%%"><div ' + (this.fullscreen ? 'class="%%-wrap edui-dialog-fullscreen-flag"' : 'class="%%"') + '><div id="##_body" class="%%-body"><div class="%%-shadow"></div><div id="##_titlebar" class="%%-titlebar"><div class="%%-draghandle" onmousedown="$$._onTitlebarMouseDown(event, this);"><span class="%%-caption">' + (this.title || "") + "</span></div>" + this.closeButton.renderHtml() + '</div><div id="##_content" class="%%-content">' + (this.autoReset ? "" : this.getContentHtml()) + "</div>" + a + "</div></div></div>"
        },
        postRender: function () {
          this.modalMask.getDom() || (this.modalMask.render(), this.modalMask.hide());
          this.dragMask.getDom() || (this.dragMask.render(), this.dragMask.hide());
          var a = this;
          this.addListener("show", function () {
            a.modalMask.show(this.getDom().style.zIndex - 2)
          });
          this.addListener("hide", function () {
            a.modalMask.hide()
          });
          if (this.buttons) for (var d = 0; d < this.buttons.length; d++) this.buttons[d].postRender();
          b.on(window, "resize", function () {
            setTimeout(function () {
              a.isHidden() || a.safeSetOffset(c.getClientRect(a.getDom()))
            })
          });
          this._hide()
        },
        mesureSize: function () {
          var a = this.getDom("body"),
            b = c.getClientRect(this.getDom("content")).width;
          a.style.width = b;
          return c.getClientRect(a)
        },
        _onTitlebarMouseDown: function (a, d) {
          if (this.draggable) {
            var e;
            c.getViewportRect();
            var f = this;
            c.startDrag(a, {
              ondragstart: function () {
                e = c.getClientRect(f.getDom());
                f.getDom("contmask").style.visibility = "visible";
                f.dragMask.show(f.getDom().style.zIndex - 1)
              },
              ondragmove: function (a, b) {
                f.safeSetOffset({
                  left: e.left + a,
                  top: e.top + b
                })
              },
              ondragstop: function () {
                f.getDom("contmask").style.visibility = "hidden";
                b.removeClasses(f.getDom(), ["edui-state-centered"]);
                f.dragMask.hide()
              }
            })
          }
        },
        reset: function () {
          this.getDom("content").innerHTML = this.getContentHtml();
          this.fireEvent("dialogafterreset")
        },
        _show: function () {
          this._hidden && (this.getDom().style.display = "", this.editor.container.style.zIndex && (this.getDom().style.zIndex = 1 * this.editor.container.style.zIndex + 10), this._hidden = !1, this.fireEvent("show"), r.editor.ui.uiUtils.getFixedLayer().style.zIndex = this.getDom().style.zIndex - 4)
        },
        isHidden: function () {
          return this._hidden
        },
        _hide: function () {
          if (!this._hidden) {
            var a = this.getDom();
            a.style.display = "none";
            a.style.zIndex = "";
            a.style.width = "";
            a.style.height = "";
            this._hidden = !0;
            this.fireEvent("hide")
          }
        },
        open: function () {
          if (this.autoReset) try {
            this.reset()
          } catch (m) {
            this.render(),
              this.open()
          }
          this.showAtCenter();
          if (this.iframeUrl) try {
            this.getDom("iframe").focus()
          } catch (m) {}
          n = this
        },
        _onCloseButtonClick: function (a, b) {
          this.close(!1)
        },
        close: function (a) {
          if (!1 !== this.fireEvent("close", a)) {
            this.fullscreen && (document.documentElement.style.overflowX = this._originalContext.html.overflowX, document.documentElement.style.overflowY =
              this._originalContext.html.overflowY, document.body.style.overflowX = this._originalContext.body.overflowX, document.body.style.overflowY = this._originalContext.body.overflowY, delete this._originalContext);
            this._hide();
            a = this.getDom("content");
            var c = this.getDom("iframe");
            a && c && ((c = c.contentDocument || c.contentWindow.document) && (c.body.innerHTML = ""), b.remove(a))
          }
        }
      };
      d.inherits(e, f)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.Menu,
        c = r.editor.ui.SplitButton,
        a = r.editor.ui.MenuButton = function (a) {
          this.initOptions(a);
          this.initMenuButton()
        };
      a.prototype = {
        initMenuButton: function () {
          var a = this;
          this.uiName = "menubutton";
          this.popup = new b({
            items: a.items,
            className: a.className,
            editor: a.editor
          });
          this.popup.addListener("show", function () {
            for (var b = 0; b < this.items.length; b++) this.items[b].removeState("checked"),
            this.items[b].value == a._value && (this.items[b].addState("checked"), this.value = a._value)
          });
          this.initSplitButton()
        },
        setValue: function (a) {
          this._value = a
        }
      };
      d.inherits(a, c)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.Popup,
        c = r.editor.ui.SplitButton,
        a = r.editor.ui.MultiMenuPop = function (a) {
          this.initOptions(a);
          this.initMultiMenu()
        };
      a.prototype = {
        initMultiMenu: function () {
          var a = this;
          this.popup = new b({
            content: "",
            editor: a.editor,
            iframe_rendered: !1,
            onshow: function () {
              this.iframe_rendered || (this.iframe_rendered = !0, this.getDom("content").innerHTML = '<iframe id="' + a.id + '_iframe" src="' + a.iframeUrl + '" frameborder="0"></iframe>', a.editor.container.style.zIndex && (this.getDom().style.zIndex = 1 * a.editor.container.style.zIndex + 1))
            }
          });
          this.onbuttonclick =

            function () {
              this.showPopup()
            };
          this.initSplitButton()
        }
      };
      d.inherits(a, c)
    })();
    (function () {
      function d(a) {
        if (!h.findParent(a.target || a.srcElement, function (a) {
          return h.hasClass(a, "edui-shortcutmenu") || h.hasClass(a, "edui-popup") || h.hasClass(a, "color-plan")
        }, !0)) {
          a = 0;
          for (var b; b = e[a++];) b.hide()
        }
      }
      var b = r.editor.ui,
        c = b.UIBase,
        a = b.uiUtils,
        f = r.editor.utils,
        h = r.editor.dom.domUtils,
        e = [],
        l = !1,
        k = b.ShortCutMenu = function (a) {
          this.initOptions(a);
          this.initShortCutMenu()
        };
      k.postHide = d;
      k.prototype = {
        isHidden: !0,
        SPACE: 5,
        initShortCutMenu: function () {
          this.items =
            this.items || [];
          this.initUIBase();
          this.initItems();
          this.initEvent();
          e.push(this)
        },
        initEvent: function () {
          var a = this;
          h.on(a.editor.document, "mousemove", function (b) {
            !1 !== a.isHidden || a.getSubMenuMark() || "contextmenu" == a.eventType || a.getDom()
          });
          a.editor.addListener("afterhidepop", function () {
            a.isHidden || (l = !0)
          })
        },
        initItems: function () {
          if (f.isArray(this.items)) for (var a = 0, c = this.items.length; a < c; a++) {
            var d = this.items[a].toLowerCase();
            b[d] && (this.items[a] = new b[d](this.editor), this.items[a].className += " edui-shortcutsubmenu ")
          }
        },
        setOpacity: function (a, b) {
          u.ie && 9 > u.version ? a.style.filter = "alpha(opacity = " + 100 * parseFloat(b) + ");" : a.style.opacity = b
        },
        getSubMenuMark: function () {
          l = !1;
          var b = a.getFixedLayer();
          b = h.getElementsByTagName(b, "div", function (a) {
            return h.hasClass(a, "edui-shortcutsubmenu edui-popup")
          });
          for (var c = 0, d; d = b[c++];)"none" != d.style.display && (l = !0);
          return l
        },
        show: function (b, c) {
          function d(a) {
            0 > a.left && (a.left = 0);
            0 > a.top && (a.top = 0);
            k.style.cssText = "position:absolute;left:" + a.left + "px;top:" + a.top + "px;"
          }
          function e(a) {
            a.tagName || (a = a.getDom());
            f.left = parseInt(a.style.left);
            f.top = parseInt(a.style.top);
            f.top -= k.offsetHeight + 15;
            d(f)
          }
          var f = {},
            k = this.getDom(),
            g = a.getFixedLayer();
          this.eventType = b.type;
          k.style.cssText = "display:block;left:-9999px";
          "contextmenu" == b.type && c ? (c = h.getElementsByTagName(g, "div", "edui-contextmenu")[0]) ? e(c) : this.editor.addListener("aftershowcontextmenu", function (a, b) {
            e(b)
          }) : (f = a.getViewportOffsetByEvent(b), f.top -= k.offsetHeight + this.SPACE + 15, f.left += this.SPACE + 15, f.left > window.document.body.offsetWidth - 320 && (f.left = window.document.body.offsetWidth - 330), 100 > f.top && (f.top += k.offsetHeight + 2 * (this.SPACE + 15)), d(f), this.setOpacity(k, .2));
          this.isHidden = !1;
          this.left = b.screenX + k.offsetWidth / 2 - this.SPACE;
          this.top = b.screenY - k.offsetHeight / 2 - this.SPACE;
          this.editor && (k.style.zIndex = 1 * this.editor.container.style.zIndex + 10, g.style.zIndex = k.style.zIndex - 1)
        },
        hide: function () {
          this.getDom() && (this.getDom().style.display = "none");
          this.isHidden = !0
        },
        postRender: function () {
          if (f.isArray(this.items)) for (var a = 0, b; b = this.items[a++];)"function" == typeof b.renderHtml && b.postRender()
        },
        getHtmlTpl: function () {
          if (f.isArray(this.items)) {
            var a = [];
            for (var b = 0; b < this.items.length; b++) if ("function" == typeof this.items[b].renderHtml) a[b] = this.items[b].renderHtml();
            else if ("|" == this.items[b] || "<br>" == this.items[b]) a[b] = "<br/>";
            a = a.join("")
          } else a = this.items;
          return '<div id="##" class="%% edui-toolbar" data-src="shortcutmenu" onmousedown="return false;" onselectstart="return false;" >' + a + "</div>"
        }
      };
      f.inherits(k, c);
      h.on(document, "mousedown", function (a) {
        d(a)
      });
      h.on(window, "scroll", function (a) {
        d(a)
      })
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.UIBase,
        c = r.editor.ui.Breakline = function (a) {
          this.initOptions(a);
          this.initSeparator()
        };
      c.prototype = {
        uiName: "Breakline",
        initSeparator: function () {
          this.initUIBase()
        },
        getHtmlTpl: function () {
          return "<br/>"
        }
      };
      d.inherits(c, b)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.dom.domUtils,
        c = r.editor.ui.UIBase,
        a = r.editor.ui.Message = function (a) {
          this.initOptions(a);
          this.initMessage()
        };
      a.prototype = {
        initMessage: function () {
          this.initUIBase()
        },
        getHtmlTpl: function () {
          return '<div id="##" class="edui-message %%"> <div id="##_closer" class="edui-message-closer">\u00d7</div> <div id="##_body" class="edui-message-body edui-message-type-info"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="about:blank"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-message-content">  </div> </div></div>'
        },
        reset: function (a) {
          var b = this;
          a.keepshow || (clearTimeout(this.timer), b.timer = setTimeout(function () {
            b.hide()
          }, a.timeout || 1000));
          void 0 !== a.content && b.setContent(a.content);
          void 0 !== a.type && b.setType(a.type);
          b.show()
        },
        postRender: function () {
          var a = this,
            c = this.getDom("closer");
          c && b.on(c, "click", function () {
            a.hide()
          })
        },
        setContent: function (a) {
          this.getDom("content").innerHTML = a
        },
        setType: function (a) {
          a = a || "info";
          var b = this.getDom("body");
          b.className = b.className.replace(/edui-message-type-[\w-]+/, "edui-message-type-" + a)
        },
        getContent: function () {
          return this.getDom("content").innerHTML
          // return getEditorHtml()
        },
        getType: function () {
          var a = this.getDom("body").match(/edui-message-type-([\w-]+)/);
          return a ? a[1] : ""
        },
        show: function () {
          this.getDom().style.display = "block"
        },
        hide: function () {
          var a = this.getDom();
          a && (a.style.display = "none", a.parentNode && a.parentNode.removeChild(a))
        }
      };
      d.inherits(a, c)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui.uiUtils,
        c = r.editor.ui.RemoteContent,
        a = r.editor.ui.Popup,
        f = r.editor.ui.SplitButton,
        h = r.editor.ui.RemoteButton = function (a) {
          this.initOptions(a);
          this.initRemoteButton()
        };
      h.prototype = {
        initRemoteButton: function () {
          var b = this;
          this.popup = new a({
            content: new c({
              editor: b.editor,
              ongetremotesuccess: function (a) {
                b.popup.hide()
              },
              oncancel: function () {
                b.popup.hide()
              }
            }),
            editor: b.editor
          });
          this.initSplitButton()
        },
        _SplitButton_postRender: f.prototype.postRender,
        postRender: function () {
          this._SplitButton_postRender();
          this.getDom("button_body").appendChild(b.createElementByHtml('<div id="' + this.id + '_colorlump" class="edui-colorlump"></div>'));
          this.getDom().className += " edui-remotebutton"
        }
      };
      d.inherits(h, f)
    })();
    (function () {
      var d = r.editor.utils,
        b = r.editor.ui,
        c = b.Dialog;
      b.buttons = {};
      b.Dialog = function (a) {
        var b = new c(a);
        b.addListener("hide", function () {
          if (b.editor) {
            var a = b.editor;
            try {
              if (u.gecko) {
                var c = a.window.scrollY,
                  d = a.window.scrollX;
                a.body.focus();
                a.window.scrollTo(d, c)
              } else a.focus()
            } catch (v) {}
          }
        });
        return b
      };
      for (var a = {
        anchor: "~/dialogs/anchor/anchor.html",
        insertimage: "~/dialogs/image/image.html",
        paragraghstyle: "~/dialogs/135editor/135Paragraph.html",
        imgstyle: "~/dialogs/135editor/imgstyle.html",
        link: "~/dialogs/link/link.html",
        spechars: "~/dialogs/spechars/spechars.html",
        searchreplace: "~/dialogs/searchreplace/searchreplace.html",
        map: "~/dialogs/map/map.html",
        gmap: "~/dialogs/gmap/gmap.html",
        insertvideo: "~/dialogs/video/video.html",
        help: "~/dialogs/help/help.html",
        preview: "~/dialogs/preview/preview.html",
        emotion: "~/dialogs/emotion/emotion.html",
        wordimage: "~/dialogs/wordimage/wordimage.html",
        attachment: "~/dialogs/attachment/attachment.html",
        insertframe: "~/dialogs/insertframe/insertframe.html",
        edittip: "~/dialogs/table/edittip.html",
        edittable: "~/dialogs/table/edittable.html",
        edittd: "~/dialogs/table/edittd.html",
        webapp: "~/dialogs/webapp/webapp.html",
        snapscreen: "~/dialogs/snapscreen/snapscreen.html",
        scrawl: "~/dialogs/scrawl/scrawl.html",
        music: "~/dialogs/music/music.html",
        template: "~/dialogs/template/template.html",
        background: "~/dialogs/background/background.html",
        charts: "~/dialogs/charts/charts.html"
      }, f = "undo redo formatmatch bold italic underline fontborder fontcode touppercase tolowercase strikethrough subscript superscript source indent outdent blockquote pasteplain pagebreak selectall print horizontal removeformat time date unlink insertparagraph insertparagraphbeforetable insertrow insertcol mergeright mergedown deleterow deletecol splittorows splittocols splittocells mergecells deletetable drafts".split(" "), h = 0, e; e = f[h++];) e = e.toLowerCase(),
        b[e] = function (a) {
          return function (c) {
            var d = new b.Button({
              className: "edui-for-" + a,
              title: c.options.labelMap[a] || c.getLang("labelMap." + a) || "",
              onclick: function () {
                c.execCommand(a)
              },
              theme: c.options.theme,
              showText: !1
            });
            b.buttons[a] = d;
            c.addListener("selectionchange", function (b, e, f) {
              b = c.queryCommandState(a); - 1 == b ? (d.setDisabled(!0), d.setChecked(!1)) : f || (d.setDisabled(!1), d.setChecked(b))
            });
            return d
          }
        }(e);
      b.cleardoc = function (a) {
        var c = new b.Button({
          className: "edui-for-cleardoc",
          title: a.options.labelMap.cleardoc || a.getLang("labelMap.cleardoc") || "",
          theme: a.options.theme,
          onclick: function () {
            confirm(a.getLang("confirmClear")) && a.execCommand("cleardoc")
          }
        });
        b.buttons.cleardoc = c;
        a.addListener("selectionchange", function () {
          c.setDisabled(-1 == a.queryCommandState("cleardoc"))
        });
        return c
      };
      f = {
        justify: ["left", "right", "center", "justify"],
        imagefloat: ["none", "left", "center", "right"],
        directionality: ["ltr", "rtl"]
      };
      for (var l in f)(function (a, c) {
        for (var d = 0, e; e = c[d++];)(function (c) {
          b[a.replace("float", "") + c] = function (d) {
            var e = new b.Button({
              className: "edui-for-" + a.replace("float", "") + c,
              title: d.options.labelMap[a.replace("float", "") + c] || d.getLang("labelMap." + a.replace("float", "") + c) || "",
              theme: d.options.theme,
              onclick: function () {
                d.execCommand(a, c)
              }
            });
            b.buttons[a] = e;
            d.addListener("selectionchange", function (b, f, k) {
              e.setDisabled(-1 == d.queryCommandState(a));
              e.setChecked(d.queryCommandValue(a) == c && !k)
            });
            return e
          }
        })(e)
      })(l, f[l]);
      for (h = 0; e = ["backcolor", "forecolor"][h++];) b[e] = function (a) {
        return function (c) {
          var d =
            new b.ColorButton({
              className: "edui-for-" + a,
              color: "default",
              title: c.options.labelMap[a] || c.getLang("labelMap." + a) || "",
              editor: c,
              onpickcolor: function (b, d) {
                c.execCommand(a, d)
              },
              onpicknocolor: function () {
                c.execCommand(a, "default");
                this.setColor("transparent");
                this.color = "default"
              },
              onbuttonclick: function () {
                c.execCommand(a, this.color)
              }
            });
          b.buttons[a] = d;
          c.addListener("selectionchange", function () {
            d.setDisabled(-1 == c.queryCommandState(a))
          });
          return d
        }
      }(e);
      f = {
        noOk: "searchreplace help imgstyle paragraghstyle webapp preview".split(" "),
        ok: "attachment anchor link insertimage map gmap insertframe wordimage insertvideo insertframe edittip edittable edittd scrawl template music background charts".split(" ")
      };
      for (l in f)(function (c, e) {
        for (var f = 0, k; k = e[f++];) u.opera && "searchreplace" === k ||
        function (e) {
          b[e] = function (f, k, g) {
            k = k || (f.options.iframeUrlMap || {})[e] || a[e];
            g = f.options.labelMap[e] || f.getLang("labelMap." + e) || "";
            if (k) {
              var h = new b.Dialog(d.extend({
                iframeUrl: f.ui.mapUrl(k),
                editor: f,
                className: "edui-for-" + e,
                title: g,
                holdScroll: "insertimage" === e,
                fullscreen: /charts/.test(e),
                closeDialog: f.getLang("closeDialog")
              }, "ok" == c ? {
                buttons: [{
                  className: "edui-okbutton",
                  label: f.getLang("ok"),
                  editor: f,
                  onclick: function () {
                    h.close(!0)
                  }
                },
                  {
                    className: "edui-cancelbutton",
                    label: f.getLang("cancel"),
                    editor: f,
                    onclick: function () {
                      h.close(!1)
                    }
                  }]
              } : {}));
              f.ui._dialogs[e + "Dialog"] = h
            }
            var l = new b.Button({
              className: "edui-for-" + e,
              title: g,
              onclick: function () {
                if (h) switch (e) {
                  case "wordimage":
                    var a = f.execCommand("wordimage");
                    a && a.length && (h.render(), h.open());
                    break;
                  case "scrawl":
                    -1 != f.queryCommandState("scrawl") && (h.render(), h.open());
                    break;
                  default:
                    h.render(),
                      h.open()
                }
              },
              theme: f.options.theme,
              disabled: "scrawl" == e && -1 == f.queryCommandState("scrawl") || "charts" == e
            });
            b.buttons[e] = l;
            f.addListener("selectionchange", function () {
              if (!(e in {
                edittable: 1
              })) {
                var a = f.queryCommandState(e);
                l.getDom() && (l.setDisabled(-1 == a), l.setChecked(a))
              }
            });
            return l
          }
        }(k.toLowerCase())
      })(l, f[l]);
      b.snapscreen = function (c, d, e) {
        e = c.options.labelMap.snapscreen || c.getLang("labelMap.snapscreen") || "";
        var f = new b.Button({
          className: "edui-for-snapscreen",
          title: e,
          onclick: function () {
            c.execCommand("snapscreen")
          },
          theme: c.options.theme
        });
        b.buttons.snapscreen = f;
        if (d = d || (c.options.iframeUrlMap || {}).snapscreen || a.snapscreen) {
          var k = new b.Dialog({
            iframeUrl: c.ui.mapUrl(d),
            editor: c,
            className: "edui-for-snapscreen",
            title: e,
            buttons: [{
              className: "edui-okbutton",
              label: c.getLang("ok"),
              editor: c,
              onclick: function () {
                k.close(!0)
              }
            },
              {
                className: "edui-cancelbutton",
                label: c.getLang("cancel"),
                editor: c,
                onclick: function () {
                  k.close(!1)
                }
              }]
          });
          k.render();
          c.ui._dialogs.snapscreenDialog =
            k
        }
        c.addListener("selectionchange", function () {
          f.setDisabled(-1 == c.queryCommandState("snapscreen"))
        });
        return f
      };
      b.insertcode = function (a, c, e) {
        c = a.options.insertcode || [];
        e = a.options.labelMap.insertcode || a.getLang("labelMap.insertcode") || "";
        var f = [];
        d.each(c, function (b, c) {
          f.push({
            label: b,
            value: c,
            theme: a.options.theme,
            renderLabelHtml: function () {
              return '<div class="edui-label %%-label" >' + (this.label || "") + "</div>"
            }
          })
        });
        var k = new b.Combox({
          editor: a,
          items: f,
          onselect: function (b, c) {
            a.execCommand("insertcode", this.items[c].value)
          },
          onbuttonclick: function () {
            this.showPopup()
          },
          title: e,
          initValue: e,
          className: "edui-for-insertcode",
          indexByValue: function (a) {
            if (a) for (var b = 0, c; c = this.items[b]; b++) if (-1 != c.value.indexOf(a)) return b;
            return -1
          }
        });
        b.buttons.insertcode = k;
        a.addListener("selectionchange", function (b, c, d) {
          d || (-1 == a.queryCommandState("insertcode") ? k.setDisabled(!0) : (k.setDisabled(!1), (b = a.queryCommandValue("insertcode")) ? (b && (b = b.replace(/['"]/g, "").split(",")[0]), k.setValue(b)) : k.setValue(e)))
        });
        return k
      };
      b.fontfamily = function (a, c, e) {
 
        c = a.options.fontfamily || [];
        e = a.options.labelMap.fontfamily || a.getLang("labelMap.fontfamily") || "";

        if (c.length) {
          for (var f, k = 0, g, h = []; g = c[k]; k++) {
            var l = a.getLang("fontfamily")[g.name] || "";
            (function (b, c, e, k) {
              k !== f && 0 < k && (h.push({
                value: 1 == k ? "\u514d\u8d39\u5b57\u4f53\uff08\u53ef\u5546\u7528\uff09" : "\u5546\u7528\u5b57\u4f53\uff08\u751f\u6210\u56fe\u7247\u5370\u5237\u9700\u8981\u8d2d\u4e70\u7248\u6743\uff09",
                onclick: function () {},
                theme: a.options.theme,
                renderLabelHtml: function () {
                  return '<div class="edui-label" style="width: 100%; height: 22px; display: flex; align-items:center; justify-content:center; background-color: rgb(245,245,245); font-size: 12px; color: #999"><span style="font-size:12px;letter-spacing: 1px">' + (this.value || "") + "</span></div>"
                }
              }), f = k, 2 == k && h.push({
                value: "mark",
                onclick: function () {},
                onmouseover: function () {},
                theme: a.options.theme,
                renderLabelHtml: function () {
                  return '<div class="edui-label mark-label" style="width: 100%; height: 30px; display: flex; align-items:center; background-color:#fff;letter-spacing: 1px;"><img src="https://bdn.135editor.com/files/201903/sy-icon.png" height="25px" width="25px" class="mark" style="margin-right:4px;display:block"></img><span style="font-size:12px;color:#999;display:block; flex: 1">\u5546\u4e1a\u4f7f\u7528\u8bf7\u6ce8\u610f\u4fb5\u6743\u98ce\u9669</span></div>'
                }
              }));
              h.push({
                label: b,
                value: c,
                theme: a.options.theme,
                renderLabelHtml: function () {
                  return '<div class="edui-label %%-label mark-font-type-' + k + '" style="font-family:' + d.unhtml(this.value) + ';width: 255px; height: 22px; display: flex; align-items:center;" onmouseover=""><div style="flex: 1;display: flex; align-items:center;">' + (0 < e.length ? '<img src="' + e + '" height="18px" width="auto"></img>' : this.label || "") + "</div>" + (2 == k ? '<img src="https://bdn.135editor.com/files/201903/sy-icon.png" width="22px" class="mark"></img>' : "") + "</div>"
                }
              })
            })(g.label || l, g.val, g.img || "", g.type)
          }
          a.options.open_editor || h.push({
            value: "more-fonts",
            onclick: function () {},
            theme: a.options.theme,
            renderLabelHtml: function () {
              return '<div class="edui-label"><a href="http://www.135editor.com/user_settings/setting?type=fonts" target="_blank">\u9009\u62e9\u66f4\u591a\u5b57\u4f53</a></div>'
            }
          });
          var m = new b.Combox({
            editor: a,
            items: h,
            onselect: function (b, c) {
              a.execCommand("FontFamily", this.items[c].value)
            },
            onbuttonclick: function () {
              this.showPopup()
            },
            title: e,
            initValue: e,
            className: "edui-for-fontfamily",
            indexByValue: function (a) {
              if (a) for (var b = 0, c; c = this.items[b]; b++) if (-1 != c.value.indexOf(a)) return b;
              return -1
            }
          });
          b.buttons.fontfamily = m;

          a.addListener("selectionchange", function (b, c, d) {
            // d || (-1 == a.queryCommandState("FontFamily") ? m.setDisabled(!0) : (m.setDisabled(!1), m.setValue(m.queryCommandValue("FontFamily"))))
            d || (-1 == a.queryCommandState("FontFamily") ? m.setDisabled(!0) : (m.setDisabled(!1), (b = a.queryCommandValue("FontFamily")) && (b = b.replace(/['"]/g, "").split(",")[0]), -1 != m.indexByValue(b) ? m.setValue(b) : m.setValue(m.initValue)))
          });
          return m
        }
      };
      b.fontsize = function (a, c, d) {
        d = a.options.labelMap.fontsize || a.getLang("labelMap.fontsize") || "";
        c = c || a.options.fontsize || [];
        if (c.length) {
          for (var e = [], f = 0; f < c.length; f++) {
            var k = c[f] + "px";
            e.push({
              label: k,
              value: k,
              theme: a.options.theme,
              renderLabelHtml: function () {
                return '<div class="edui-label %%-label" style="line-height:1;font-size:' + this.value + '">' + (this.label || "") + "</div>"
              }
            })
          }
          var g = new b.Combox({
            editor: a,
            items: e,
            title: d,
            useInput: u.ie && 9 > u.version ? !1 : !0,
            initValue: d,
            onselect: function (b, c) {
              a.execCommand("FontSize", this.items[c].value)
            },
            onbuttonclick: function () {
              this.showPopup()
            },
            oninputclick: function () {

              var a = this;
              setTimeout(function () {
                var b =
                  a.getDom("wx_input");
                u.ie ? (b.value = "", b.focus()) : (b.focus(), b.select())
              }, 100)
            },
            oninputblur: function () {
             
              var b = this.getDom("wx_input"),
                c = b.value,
                d = parseInt(c),
                e = parseInt(this.value);
              return "" == c ? (b.value = e + "px", !1) : (10 > d && (d = 10), 72 < d && (d = 72), e == d ? !1 : void a.execCommand("FontSize", d + "px"))
            },
            oninputkeydown: function (a, b) {
              a = b.keyCode || b.which;
              var c = this.getDom("wx_input");
              13 == a && (c.blur(), b.stopPropagation ? (b.stopPropagation(), b.preventDefault()) : b.cancelBubble = !0)
            },
            className: "edui-for-fontsize"
          });
          b.buttons.fontsize =
            g;
          a.addListener("selectionchange", function (b, c, d) {
            d || (-1 == a.queryCommandState("FontSize") ? g.setDisabled(!0) : (g.setDisabled(!1), g.setValue(a.queryCommandValue("FontSize"))))
          });
          return g
        }
      };
      b.paragraph = function (a, c, e) {
        e = a.options.labelMap.paragraph || a.getLang("labelMap.paragraph") || "";
        c = a.options.paragraph || [];
        if (!d.isEmptyObject(c)) {
          var f = [],
            k;
          for (k in c) f.push({
            value: k,
            label: c[k] || a.getLang("paragraph")[k],
            theme: a.options.theme,
            renderLabelHtml: function () {
              return '<div class="edui-label %%-label"><span class="edui-for-' + this.value + '">' + (this.label || "") + "</span></div>"
            }
          });
          var g = new b.Combox({
            editor: a,
            items: f,
            title: e,
            initValue: e,
            className: "edui-for-paragraph",
            onselect: function (b, c) {
              a.execCommand("Paragraph", this.items[c].value)
            },
            onbuttonclick: function () {
              this.showPopup()
            }
          });
          b.buttons.paragraph = g;
          a.addListener("selectionchange", function (b, c, d) {
            d || (-1 == a.queryCommandState("Paragraph") ? g.setDisabled(!0) : (g.setDisabled(!1), b = a.queryCommandValue("Paragraph"), -1 != g.indexByValue(b) ? g.setValue(b) : g.setValue(g.initValue)))
          });
          return g
        }
      };
      b.customstyle = function (a) {
        var c = a.options.customstyle || [],
          d = a.options.labelMap.customstyle || a.getLang("labelMap.customstyle") || "";
        if (c.length) {
          for (var e = a.getLang("customstyle"), f = 0, k = [], g; g = c[f++];)(function (b) {
            var c = {};
            c.label = b.label ? b.label : e[b.name];
            c.style = b.style;
            c.className = b.className;
            c.tag = b.tag;
            k.push({
              label: c.label,
              value: c,
              theme: a.options.theme,
              renderLabelHtml: function () {
                return '<div class="edui-label %%-label"><' + c.tag + " " + (c.className ? ' class="' + c.className + '"' : "") + (c.style ? ' style="' + c.style + '"' : "") + ">" + c.label + "</" + c.tag + "></div>"
              }
            })
          })(g);
          var h = new b.Combox({
            editor: a,
            items: k,
            title: d,
            initValue: d,
            className: "edui-for-customstyle",
            onselect: function (b, c) {
              a.execCommand("customstyle", this.items[c].value)
            },
            onbuttonclick: function () {
              this.showPopup()
            },
            indexByValue: function (a) {
              for (var b = 0, c; c = this.items[b++];) if (c.label == a) return b - 1;
              return -1
            }
          });
          b.buttons.customstyle = h;
          a.addListener("selectionchange", function (b, c, d) {
            d || (-1 == a.queryCommandState("customstyle") ? h.setDisabled(!0) : (h.setDisabled(!1), b = a.queryCommandValue("customstyle"), -1 != h.indexByValue(b) ? h.setValue(b) : h.setValue(h.initValue)))
          });
          return h
        }
      };
      b.inserttable = function (a, c, d) {
        d = a.options.labelMap.inserttable || a.getLang("labelMap.inserttable") || "";
        var e = new b.TableButton({
          editor: a,
          title: d,
          className: "edui-for-inserttable",
          onpicktable: function (b, c, d) {
            a.execCommand("InsertTable", {
              numRows: d,
              numCols: c,
              border: 1
            })
          },
          onbuttonclick: function () {
            this.showPopup()
          }
        });
        b.buttons.inserttable = e;
        a.addListener("selectionchange", function () {
          e.setDisabled(-1 == a.queryCommandState("inserttable"))
        });
        return e
      };
      b.lineheight = function (a) {
        var c = a.options.lineheight || [];
        if (c.length) {
          for (var d = 0, e, f = []; e = c[d++];) f.push({
            label: e,
            value: e,
            theme: a.options.theme,
            onclick: function () {
              a.execCommand("lineheight", this.value)
            }
          });
          var k = new b.MenuButton({
            editor: a,
            className: "edui-for-lineheight",
            title: a.options.labelMap.lineheight || a.getLang("labelMap.lineheight") || "",
            items: f,
            onbuttonclick: function () {
              var b = a.queryCommandValue("LineHeight") || this.value;
              a.execCommand("LineHeight", b)
            }
          });
          b.buttons.lineheight = k;
          a.addListener("selectionchange", function () {
            var b = a.queryCommandState("LineHeight");
            if (-1 == b) k.setDisabled(!0);
            else {
              k.setDisabled(!1);
              var c = a.queryCommandValue("LineHeight");
              c && k.setValue((c + "").replace(/cm/, ""));
              k.setChecked(b)
            }
          });
          return k
        }
      };
      b.insertothers = function (a) {
        var c = [{
          code: 'socialcircle',
          title: '社圈'
        } ,{
          code: 'activity',
          title: '活动'
        },{
          code: 'wxprogram',
          title: '小程序'
        },{
          code: 'enclosure',
          title: '稿内附件'
        }];
        if (c.length) {
          for (var d = 0, e, f = []; e = c[d++];) f.push({
            label: e.title,
            value: e,
   
            className: "edui-for-" + e.code,
            onclick: function () {
              a.execCommand("insertothers", this.value.code)
            }
          });
          var k = new b.MenuButton({
            editor: a,
            className: "edui-for-insertothers",
            title: "插入",
            label: "插入",
            items: f,
            showText: !1,
            onbuttonclick: function () {
              this.showPopup()
              // var b = a.queryCommandValue("insertothers") || this.value;
              // a.execCommand("insertothers", b)
            }
          });
          b.buttons.insertothers = k;
          // a.addListener("selectionchange", function () {
          //   // var b = a.queryCommandState("insertothers");
          //   // if (-1 == b) k.setDisabled(!0);
          //   // else {
          //   //   k.setDisabled(!1);
          //   //   var c = a.queryCommandValue("insertothers");
          //   //   c && k.setValue((c + "").replace(/cm/, ""));
          //   //   k.setChecked(b)
          //   // }
          // });
          return k
        }
      };
      b.letterspacing = function (a) {
        var c = a.options.letterspacing || [];
        if (c.length) {
          for (var d = 0, e, f = []; d < c.length; d++) e = "" + c[d],
            f.push({
              label: e,
              value: e,
              theme: a.options.theme,
              onclick: function () {
                a.execCommand("letterspacing", this.value)
              }
            });
          var k =
            new b.MenuButton({
              editor: a,
              className: "edui-for-letterspacing",
              title: a.options.labelMap.letterspacing || a.getLang("labelMap.letterspacing") || "",
              items: f,
              onbuttonclick: function () {
                var b = a.queryCommandValue("LetterSpacing") || this.value;
                a.execCommand("LetterSpacing", b)
              }
            });
          b.buttons.letterspacing = k;
          a.addListener("selectionchange", function () {
            var b = a.queryCommandState("LetterSpacing");
            if (-1 == b) k.setDisabled(!0);
            else {
              k.setDisabled(!1);
              var c = a.queryCommandValue("LetterSpacing");
              c && k.setValue((c + "").replace(/cm/, ""));
              k.setChecked(b)
            }
          });
          return k
        }
      };
      b.outpadding = function (a) {
        var c = a.options.outpadding || [];
        if (c.length) {
          for (var d = 0, e, f = []; d < c.length; d++) e = "" + c[d],
            f.push({
              label: e,
              value: e,
              theme: a.options.theme,
              onclick: function () {
                a.execCommand("outpadding", this.value)
              }
            });
          var k = new b.MenuButton({
            editor: a,
            className: "edui-for-outpadding",
            title: a.options.labelMap.outpadding || a.getLang("labelMap.outpadding") || "",
            items: f,
            onbuttonclick: function () {
              var b = a.queryCommandValue("outpadding") || this.value;
              a.execCommand("outpadding", b)
            }
          });
          b.buttons.outpadding = k;
          a.addListener("selectionchange", function () {
            var b = a.queryCommandState("outpadding");
            if (-1 == b) k.setDisabled(!0);
            else {
              k.setDisabled(!1);
              var c = a.queryCommandValue("outpadding");
              c && k.setValue((c + "").replace(/cm/, ""));
              k.setChecked(b)
            }
          });
          return k
        }
      };
      l = ["top", "bottom"];
      for (f = 0; h = l[f++];)(function (a) {
        b["rowspacing" + a] = function (c) {
          var d = c.options["rowspacing" + a] || [];
          if (!d.length) return null;
          for (var e = 0, f, k = []; f = d[e++];) k.push({
            label: f,
            value: f,
            theme: c.options.theme,
            onclick: function () {
              c.execCommand("rowspacing", this.value, a)
            }
          });
          var g = new b.MenuButton({
            editor: c,
            className: "edui-for-rowspacing" + a,
            title: c.options.labelMap["rowspacing" + a] || c.getLang("labelMap.rowspacing" + a) || "",
            items: k,
            onbuttonclick: function () {
              var b = c.queryCommandValue("rowspacing", a) || this.value;
              c.execCommand("rowspacing", b, a)
            }
          });
          b.buttons[a] = g;
          c.addListener("selectionchange", function () {
            var b = c.queryCommandState("rowspacing", a);
            if (-1 == b) g.setDisabled(!0);
            else {
              g.setDisabled(!1);
              var d = c.queryCommandValue("rowspacing", a);
              d && g.setValue((d + "").replace(/%/, ""));
              g.setChecked(b)
            }
          });
          return g
        }
      })(h);
      l = ["insertorderedlist", "insertunorderedlist"];
      for (f = 0; h = l[f++];)(function (a) {
        b[a] = function (c) {
          var d = c.options[a],
            e = function () {
              c.execCommand(a, this.value)
            },
            f = [],
            k;
          for (k in d) f.push({
            label: d[k] || c.getLang()[a][k] || "",
            value: k,
            theme: c.options.theme,
            onclick: e
          });
          var g = new b.MenuButton({
            editor: c,
            className: "edui-for-" + a,
            title: c.getLang("labelMap." + a) || "",
            items: f,
            onbuttonclick: function () {
              var b = c.queryCommandValue(a) || this.value;
              c.execCommand(a, b)
            }
          });
          b.buttons[a] = g;
          c.addListener("selectionchange", function () {
            var b = c.queryCommandState(a);
            if (-1 == b) g.setDisabled(!0);
            else {
              g.setDisabled(!1);
              var d = c.queryCommandValue(a);
              g.setValue(d);
              g.setChecked(b)
            }
          });
          return g
        }
      })(h);
      b.fullscreen = function (a, c) {
        c = a.options.labelMap.fullscreen || a.getLang("labelMap.fullscreen") || "";
        var d = new b.Button({
          className: "edui-for-fullscreen",
          title: c,
          theme: a.options.theme,
          onclick: function () {
            a.ui && a.ui.setFullScreen(!a.ui.isFullScreen());
            this.setChecked(a.ui.isFullScreen())
          }
        });
        b.buttons.fullscreen = d;
        a.addListener("selectionchange", function () {
          var b = a.queryCommandState("fullscreen");
          d.setDisabled(-1 == b);
          d.setChecked(a.ui.isFullScreen())
        });
        return d
      };
      b.emotion = function (c, d) {
        var e = new b.MultiMenuPop({
          title: c.options.labelMap.emotion || c.getLang("labelMap.emotion") || "",
          editor: c,
          className: "edui-for-emotion",
          iframeUrl: c.ui.mapUrl(d || (c.options.iframeUrlMap || {}).emotion || a.emotion)
        });
        b.buttons.emotion = e;
        c.addListener("selectionchange", function () {
          e.setDisabled(-1 == c.queryCommandState("emotion"))
        });
        return e
      };
      b.spechars = function (c, d) {
        var e =
          new b.MultiMenuPop({
            title: c.options.labelMap.spechars || c.getLang("labelMap.spechars") || "",
            editor: c,
            className: "edui-for-spechars",
            iframeUrl: c.ui.mapUrl(d || (c.options.iframeUrlMap || {}).spechars || a.spechars)
          });
        b.buttons.spechars = e;
        c.addListener("selectionchange", function () {
          e.setDisabled(-1 == c.queryCommandState("spechars"))
        });
        return e
      };
      b.autotypeset = function (a) {
        var c = new b.AutoTypeSetButton({
          editor: a,
          showIcon: !1,
          showText: !0,
          label: a.options.labelMap.autotypeset || a.getLang("labelMap.autotypeset") || "",
          title: a.options.labelMap.autotypeset || a.getLang("labelMap.autotypeset") || "",
          className: "edui-for-autotypeset",
          onbuttonclick: function () {
            a.execCommand("autotypeset")
          }
        });
        b.buttons.autotypeset = c;
        a.addListener("selectionchange", function () {
          c.setDisabled(-1 == a.queryCommandState("autotypeset"))
        });
        return c
      };
      b.simpleupload = function (a) {
        var c = new b.Button({
          className: "edui-for-simpleupload",
          title: a.options.labelMap.simpleupload || a.getLang("labelMap.simpleupload") || "",
          onclick: function () {},
          theme: a.options.theme,
          showText: !1
        });
        b.buttons.simpleupload = c;
        a.addListener("ready", function () {
          var b = c.getDom("body").children[0];
          a.fireEvent("simpleuploadbtnready", b)
        });
        a.addListener("selectionchange", function (b, d, e) {
          b = a.queryCommandState("simpleupload"); - 1 == b ? (c.setDisabled(!0), c.setChecked(!1)) : e || (c.setDisabled(!1), c.setChecked(b))
        });
        return c
      };
      b.imagescenter = function (a) {
        var c = new b.Button({
          className: "edui-for-imagescenter",
          title: a.options.labelMap.imagescenter || a.getLang("labelMap.imagescenter") || "",
          onclick: function () {
            a.execCommand("imagescenter")
          },
          theme: a.options.theme,
          showText: !1
        });
        return b.buttons.imagescenter = c
      }
    })();
    (function () {
      function d(a) {
        this.initOptions(a);
        this.initEditorUI()
      }
      var b = r.editor.utils,
        c = r.editor.ui.uiUtils,
        a = r.editor.ui.UIBase,
        f = r.editor.dom.domUtils,
        h = [];
      d.prototype = {
        uiName: "editor",
        initEditorUI: function () {
          function a(a, b) {
            a.setOpt({
              wordCount: !0,
              maximumWords: 3E4,
              wordCountMsg: a.options.wordCountMsg || a.getLang("wordCountMsg"),
              wordOverFlowMsg: a.options.wordOverFlowMsg || a.getLang("wordOverFlowMsg")
            });
            var c = a.options,
              d = c.maximumWords,
              e = c.wordCountMsg,
              f = c.wordOverFlowMsg;
            b = b.getDom("wordcount");
            c.wordCount && (c = a.getContentLength(!0), c > d ? (b.innerHTML =
              f, a.fireEvent("wordcountoverflow")) : (a = a.getTagLength("img"), f = Math.ceil(c / 180 + a / 12), b.innerHTML = e.replace("{#images}", a).replace("{#minute}", f).replace("{#leave}", d - c).replace("{#count}", c)))
          }
          this.editor.ui = this;
          this._dialogs = {};
          this.initUIBase();
          this._initToolbars();
          var b = this.editor,
            c = this;
          b.addListener("ready", function () {
            // f.on(this.body, "DOMNodeInserted", function (a) {
            //   if (1 == a.target.nodeType) if (a = a.target, "img" == a.tagName.toLowerCase()) {
            //     if (!a.getAttribute("data-ratio")) {
            //       var b = 0 < parseInt(a.width) && 0 < parseInt(a.height) ? parseInt(a.height) / parseInt(a.width) : 1;
            //       // a.setAttribute("data-ratio", b)
            //     }
            //   } else jQuery(a).find("img").each(function () {
            //     if (!this.getAttribute("data-ratio")) {
            //       var a = 0 < parseInt(this.width) && 0 < parseInt(this.height) ? parseInt(this.height) / parseInt(this.width) : 1;
            //       // this.setAttribute("data-ratio", a)
            //     }
            //   })
            // });
            b.getDialog = function (a) {
              return b.ui._dialogs[a + "Dialog"]
            };
            f.on(b.window, "scroll", function (a) {
              r.editor.ui.Popup.postHide(a)
            });
            b.ui._actualFrameWidth = b.options.initialFrameWidth;
            UE.browser.ie && 6 === UE.browser.version && b.container.ownerDocument.execCommand("BackgroundImageCache", !1, !0);
            b.options.elementPathEnabled && (b.ui.getDom("elementpath").innerHTML = '<div class="edui-editor-breadcrumb">' + b.getLang("elementPathTip") + ":</div>");
            if (b.options.wordCount) {
              var d = function () {
                a(b, c);
                f.un(b.document, "click", d)
              };
              f.on(b.document, "click", d);
              b.ui.getDom("wordcount").innerHTML = b.getLang("wordCountTip")
            }
            b.ui._scale();
            b.options.scaleEnabled ? (b.autoHeightEnabled && b.disableAutoHeight(), c.enableScale()) : c.disableScale();
            b.options.elementPathEnabled || b.options.wordCount || b.options.scaleEnabled || (b.ui.getDom("elementpath").style.display = "none", b.ui.getDom("wordcount").style.display = "none", b.ui.getDom("scale").style.display = "none");
            b.selection.isFocus() && b.fireEvent("selectionchange", !1, !0)
          });
          b.addListener("mousedown", function (a, b) {
            r.editor.ui.Popup.postHide(b, b.target || b.srcElement);
            r.editor.ui.ShortCutMenu && r.editor.ui.ShortCutMenu.postHide(b)
          });
          b.addListener("delcells", function () {
            UE.ui.edittip && new UE.ui.edittip(b);
            b.getDialog("edittip").open()
          });
          var d, e = !1,
            g;
          b.addListener("afterpaste", function () {
            b.queryCommandState("pasteplain") || (r.editor.ui.PastePicker && (d = new r.editor.ui.Popup({
              content: new r.editor.ui.PastePicker({
                editor: b
              }),
              editor: b,
              className: "edui-wordpastepop"
            }), d.render()), e = !0)
          });
          b.addListener("afterinserthtml", function () {
            clearTimeout(g);
            g = setTimeout(function () {
              if (d && (e || b.ui._isTransfer)) {
                if (d.isHidden()) {
                  var a = f.createElement(b.document, "span", {
                    style: "line-height:0px;",
                    innerHTML: "\ufeff"
                  });
                  b.selection.getRange().insertNode(a);
                  var c = C(a, "firstChild", "previousSibling");
                  c && d.showAnchor(3 == c.nodeType ? c.parentNode : c);
                  f.remove(a)
                } else d.show();
                delete b.ui._isTransfer;
                e = !1
              }
            }, 200)
          });
          b.addListener("contextmenu", function (a, b) {
            r.editor.ui.Popup.postHide(b)
          });
          b.addListener("keydown", function (a, b) {
            d && d.dispose(b);
            a = b.keyCode || b.which;
            if (b.altKey && 90 == a) UE.ui.buttons.fullscreen.onclick()
          });
          b.addListener("wordcount", function (b) {
            a(this, c)
          });
          b.addListener("selectionchange", function () {
            if (b.options.elementPathEnabled) c[(-1 == b.queryCommandState("elementpath") ? "dis" : "en") + "ableElementPath"]();
            if (b.options.scaleEnabled) c[(-1 == b.queryCommandState("scale") ? "dis" : "en") + "ableScale"]()
          });
          var h = new r.editor.ui.Popup({
            editor: b,
            content: "",
            className: "edui-bubble",
            _onEditButtonClick: function () {
              this.hide();
              b.ui._dialogs.linkDialog.open()
            },
            _onImgEditButtonClick: function (name, src, id) {
              this.hide();
              b.fireEvent('mediacloudevent', name, src, id)

              // jQuery(this.anchorEl).attr("data-op", "change");
              // b.ui._dialogs[a] && b.ui._dialogs[a].open()
            },
            _onImgDelete: function (id) {
              this.hide()
              b.execCommand("imagedelete", id)

              // jQuery(this.anchorEl).attr("data-op", "change");
              // b.ui._dialogs[a] && b.ui._dialogs[a].open()
            },
            _onImgSquareClick: function (a) {
              this.hide();
              b.undoManger.save(!0);
              "IMG" == this.anchorEl.tagName && (a = jQuery(this.anchorEl).parent(), "square" != a.attr("data-role") ? "circle" == a.attr("data-role") || "bgmirror" == a.attr("data-role") ? a.replaceWith('<section data-role="square" style="overflow: hidden;margin: 0 auto;width:100%;padding-bottom:100%;height:0px;background-image:url(' + this.anchorEl.src + ');background-position:50% 50%;background-size: cover;"><img src="' + this.anchorEl.src + '" style="opacity:0;width:100%;"></section>') : $(this.anchorEl).replaceWith('<section data-role="square" style="overflow: hidden;margin: 0 auto;width:100%;padding-bottom:100%;height:0px;background-image:url(' + this.anchorEl.src + ');background-position:50% 50%;background-size: cover;"><img src="' + this.anchorEl.src + '" style="opacity:0;width:100%;"></section>') : (jQuery(this.anchorEl).css({
                opacity: "1"
              }), a.replaceWith($(this.anchorEl))));
              b.undoManger.save(!0)
            },
            _onImgRadiusClick: function (a) {
              this.hide();
              b.undoManger.save(!0);
              "IMG" == this.anchorEl.tagName && (a = jQuery(this.anchorEl).parent(), "circle" != a.attr("data-role") ? "square" == a.attr("data-role") || "bgmirror" == a.attr("data-role") ? a.replaceWith('<section data-role="circle" style="border-radius: 100%;overflow: hidden;margin: 0 auto;width:100%;padding-bottom:100%;height:0px;background-image:url(' + this.anchorEl.src + ');background-position:50% 50%;background-size: cover;"><img src="' + this.anchorEl.src + '" style="opacity:0;width:100%;"></section>') : jQuery(this.anchorEl).replaceWith('<section data-role="circle" style="border-radius: 100%;overflow: hidden;margin: 0 auto;width:100%;padding-bottom:100%;height:0px;background-image:url(' + this.anchorEl.src + ');background-position:50% 50%;background-size: cover;"><img src="' + this.anchorEl.src + '" style="opacity:0;width:100%;"></section>') : (jQuery(this.anchorEl).css({
                opacity: "1"
              }), a.replaceWith($(this.anchorEl))));
              b.undoManger.save(!0)
            },
            _onImgDeleteClick: function (a) {
              this.hide();
              b.undoManger.save(!0);
              f.remove(this.anchorEl);
              b.undoManger.save(!0)
            },
            _onImgCropNewButtonClick: function (a) {
              this.hide();
              a = this.anchorEl;
              // jQuery(a).attr("data-ratio", parseInt(a.height) / parseInt(a.width));
              jQuery(a).attr("data-op", "crop");
              b.ui._dialogs.insertimageDialog && b.ui._dialogs.insertimageDialog.open()
            },
            _onImgCropButtonClick: function (a) {
              this.hide();
              current_edit_img = this.anchorEl;
              "toImage" == current_edit_img.getAttribute("data-type") ? (a = current_edit_img.getAttribute("data-id"), window.ajaxAction && window.ajaxAction("//" + b.options.plat_host + "/html_images/getHtml/" + a, null, null, function (a) {
                a.success && $(current_edit_img).replaceWith(a.data.content)
              })) : "function" == typeof window.top.edit_image ? window.top.edit_image(a) : b.fireEvent("showmessage", {
                content: "Javascript function edit_image not defined.",
                timeout: 3E3
              })
            },
            _onImgSetFloat: function (a) {
              this.hide();
              b.execCommand("imagefloat", a)
            },
            _setIframeAlign: function (a) {
              var b = h.anchorEl,
                c = b.cloneNode(!0);
              switch (a) {
                case -2:
                  c.setAttribute("align", "");
                  break;
                case -1:
                  c.setAttribute("align", "left");
                  break;
                case 1:
                  c.setAttribute("align", "right")
              }
              b.parentNode.insertBefore(c, b);
              f.remove(b);
              h.anchorEl = c;
              h.showAnchor(h.anchorEl)
            },
            _updateIframe: function () {
              var a = b._iframe = h.anchorEl;
              f.hasClass(a, "ueditor_baidumap") ? (b.selection.getRange().selectNode(a).select(), b.ui._dialogs.mapDialog.open()) : b.ui._dialogs.insertframeDialog.open();
              h.hide()
            },
            _onRemoveButtonClick: function (a) {
              b.execCommand(a);
              this.hide()
            },
            queryAutoHide: function (a) {
              return a && a.ownerDocument == b.document && ("img" == a.tagName.toLowerCase() || f.findParentByTagName(a, "a", !0)) ? a !== h.anchorEl : r.editor.ui.Popup.prototype.queryAutoHide.call(this, a)
            }
          });
          h.render();
          b.options.imagePopup && (b.addListener("mouseover", function (a, c) {
            c = c || window.event;
            a = c.target || c.srcElement;
            b.ui._dialogs.insertframeDialog && /iframe/ig.test(a.tagName) && ((c = h.formatHtml("<nobr>" + b.getLang("property") + ': <span onclick=$$._setIframeAlign(-2) class="edui-clickable">' + b.getLang("default") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(-1) class="edui-clickable">' + b.getLang("justifyleft") + '</span>&nbsp;&nbsp;<span onclick=$$._setIframeAlign(1) class="edui-clickable">' + b.getLang("justifyright") + '</span>&nbsp;&nbsp; <span onclick="$$._updateIframe( this);" class="edui-clickable">' + b.getLang("modify") + "</span></nobr>")) ? (h.getDom("content").innerHTML = c, h.anchorEl = a, h.showAnchor(h.anchorEl)) : h.hide())
          }), b.addListener("selectionchange", function (a, c) {
            if (c) {
              a = "";
              var d = b.selection.getRange();
              c = d.getClosedNode();
              var e = b.ui._dialogs;
              if (!1 === d.collapsed && c && "IMG" == c.tagName && !c.parentNode.hasAttribute("yq_nis")) {
                d = "insertimageDialog";
                if (-1 != c.className.indexOf("edui-faked-video") || -1 != c.className.indexOf("edui-upload-video")) d = "insertvideoDialog"; - 1 != c.className.indexOf("edui-faked-webapp") && (d = "webappDialog"); - 1 != c.src.indexOf("http://api.map.baidu.com") && (d = "mapDialog"); - 1 != c.className.indexOf("edui-faked-music") && (d = "musicDialog"); - 1 != c.src.indexOf("http://maps.google.com/maps/api/staticmap") && (d = "gmapDialog");
                c.getAttribute("anchorname") && (d = "anchorDialog", a = h.formatHtml("<nobr>" + b.getLang("property") + ': <span onclick=$$._onImgEditButtonClick("anchorDialog") class="edui-clickable">' + b.getLang("modify") + "</span>&nbsp;&nbsp;<span onclick=$$._onRemoveButtonClick('anchor') class=\"edui-clickable\">" + b.getLang("delete") + "</span></nobr>"));
                if (c.getAttribute("word_img")) {
                  b.word_img = [c.getAttribute("word_img")];
                  return
                }
                if (f.hasClass(c, "loadingclass") || f.hasClass(c, "loaderrorclass")) d = "";
                // if (!e[d]) return;
                // e = c.src;
                let islocalPic = c.hasAttribute("mam") 
                let isInnerImage = c.src.indexOf(window.location.host) === -1
                // 无缝标识
                let ifSeamless = c.parentNode.tagName === 'P' && c.parentNode.hasAttribute("seamless") 
                // 模板使用原图标识
                let ifUseOriginal = c.tagName === 'IMG' && c.hasAttribute("use_original") 

                /**添加自定义属性*/
                /**申明变量,imgcrophtml图片水印，titleImghtml标题图片，localImghtml本地图片*/
                /**seamless 图片无缝/取消无缝  */ 
                e = '<nobr>' +
                  b.getLang("property") + ': '+
                  (window.UE.showPopupDefault ? ('<span onclick=$$._onImgSetFloat("none") class="edui-clickable">' + b.getLang("default") +
                  '</span>&nbsp;') : '') +
                  (window.UE.showPopupJustifyleft ? ('<span onclick=$$._onImgSetFloat("left") class="edui-clickable">' + b.getLang("justifyleft") +
                  '</span>&nbsp;') : '') +
                  (window.UE.showPopupJustifyright ? ('<span onclick=$$._onImgSetFloat("right") class="edui-clickable">' + b.getLang("justifyright") +
                  '</span>&nbsp;') : '') +
                  (window.UE.showPopupJustifycenter ? ('<span onclick=$$._onImgSetFloat("center") class="edui-clickable">' + b.getLang("justifycenter") +
                  '</span>&nbsp;') : '') +
                  (window.UE.showPopupSeamless ? (!ifSeamless
                    ? ('<span onclick=$$._onImgEditButtonClick("seamless","'+ c.src +
                      c.id +'") class="edui-clickable">无缝</span>&nbsp;</nobr>')
                    : ('<span onclick=$$._onImgEditButtonClick("seamless","'+ c.src + 
                      c.id +'") class="edui-clickable">取消无缝</span>&nbsp;</nobr>')) : '') +
                  (window.UE.showPopupReplace?('<span onclick=$$._onImgEditButtonClick("replaceImage","'+ c.src +
                    '","'+c.id +'") class="edui-clickable">' + b.getLang("replaceImage") + '&nbsp;</span></nobr>'): '') +
                  (window.UE.showPopupImagedetele ? ('<span id="imageDetele" onclick=$$._onImgDelete("'+c.id +'") class="edui-clickable" ' +
                  'titie="'+ b.getLang("contextMenu.imagedetele") +'" >'+ b.getLang("contextMenu.imagedetele") +
                  '&nbsp;</span>') : '') +
                  (!islocalPic || !window.UE.showPopupModify ? '' : '<span onclick=$$._onImgEditButtonClick("modify","'+ c.src + '","'+
                    c.id +'") class="edui-clickable">' + b.getLang("modify") + '&nbsp;</span>') +
                  (window.UE.showForComment?'<span onclick=$$._onImgEditButtonClick("setForComment","'+ c.src + '","'+c.id +'") ' + 
                  'class="edui-clickable">' + b.getLang("setForComment") + '</span>&nbsp;' : '') +
                  (window.UE.showPopupTitlePic && c.getAttribute('mam') && c.getAttribute('mam').indexOf('图片存储;') === 0
                    ? ('<span onclick=$$._onImgEditButtonClick("setForTitlePic","'+ c.src + '","'+c.id +'") ' +
                      'class="edui-clickable">' + b.getLang("setForTitlePic") + '</span>&nbsp;</nobr>')
                    : '') +
                  (c.src.indexOf('http') === 0 && isInnerImage && window.UE.localImghtml
                    ? ('<span onclick=$$._onImgEditButtonClick("saveLocalization","'+
                      c.src + '","'+c.id +'") class="edui-clickable">' + b.getLang("saveLocalization") + '</span>&nbsp;</nobr>')
                    : '') +
                  (window.aiOcrUsable
                    ? ('<span onclick=$$._onImgEditButtonClick("charRecognition","'+ c.src + '","'+c.id +'") ' +
                      'class="edui-clickable">' + b.getLang("charRecognition") + '</span>&nbsp;</nobr>')
                    : '') +
                  (window.UE.showPopupPhotoSearch
                    ? ('<span onclick=$$._onImgEditButtonClick("photoSearch","'+ c.src + '","'+c.id +'") ' +
                      'class="edui-clickable">' + b.getLang("photoSearch") + '</span></nobr>')
                    : '') +
                  (window.UE.showPopupUseOriginal ? (!ifUseOriginal
                    ? ('<span onclick=$$._onImgEditButtonClick("useOriginal","'+ c.src +
                      c.id +'") class="edui-clickable">使用原图</span>&nbsp;</nobr>')
                    : ('<span onclick=$$._onImgEditButtonClick("useOriginal","'+ c.src + 
                      c.id +'") class="edui-clickable">取消使用原图</span>&nbsp;</nobr>')) : '') +
                  (window.UE.showPopupImgSearch?'<span onclick=$$._onImgEditButtonClick("showPopupImgSearch","'+ c.src + '","'+c.id +'") ' + 
                      'class="edui-clickable">智能识图</span>&nbsp;' : '');
                !a && (a = h.formatHtml(e))

                /*0 <= e.indexOf("http://remote.wx135.com/oss/view") && (e = e.replace("&free=1", ""), e = decodeURIComponent(e.substr(35)));
                e = '<nobr><span onclick=$$._onImgSetFloat("none") class="img-default edui-clickable">' + b.getLang("default") + '</span>&nbsp;<span onclick=$$._onImgSetFloat("left") class="img-left edui-clickable">' + b.getLang("justifyleft") + '</span>&nbsp;<span onclick=$$._onImgSetFloat("right") class="img-right edui-clickable">' + b.getLang("justifyright") + '</span>&nbsp;<span onclick=$$._onImgSetFloat("center") class="img-center edui-clickable">' + b.getLang("justifycenter") + "</span>&nbsp;<span onclick=\"$$._onImgEditButtonClick('" + d + '\');" class="img-change edui-clickable">' + b.getLang("changeImage") + '</span>&nbsp;<span onclick="$$._onImgCropNewButtonClick();" class="img-edit edui-clickable">' + b.getLang("crop") + "</span>&nbsp;<span onclick=\"$$._onImgCropButtonClick('" + c.src + '\');" class="img-edit edui-clickable">' + b.getLang("edit") + '</span>&nbsp;<a href="' + e + '" rel="noreferrer" target="_blank" class="img-preview edui-clickable">' + b.getLang("labelMap.preview") + '</a><br/><span onclick=$$._onImgDeleteClick() class="img-del edui-clickable">' + b.getLang("delete") + '</span>&nbsp;<span onclick="$$._onImgRadiusClick(this);" class="img-circle edui-clickable">' + b.getLang("radiusCircle") + '</span>&nbsp;<span onclick="$$._onImgSquareClick(this);" class="img-square edui-clickable">' + b.getLang("imgSquare") + '</span>&nbsp;<span onclick="$$._onImgEditButtonClick(\'imgstyleDialog\');" class="img-style edui-clickable">' + b.getLang("labelMap.imgstyle") + "</span>&nbsp;</nobr>";
                !a && (a = h.formatHtml(e))*/
              }
              if (b.ui._dialogs.linkDialog) {
                var g = b.queryCommandValue("link"),
                  k;
                g && (k = g.getAttribute("_href") || g.getAttribute("href", 2)) && (e = k, 30 < k.length && (e = k.substring(0, 20) + "..."), a && (a += '<div style="height:5px;"></div>'), a += h.formatHtml("<nobr>" + b.getLang("anthorMsg") + ': <a target="_blank" href="' + k + '" title="' + k + '" >' + e + '</a> <span class="edui-clickable" onclick="$$._onEditButtonClick();">' + b.getLang("modify") + '</span> <span class="edui-clickable" onclick="$$._onRemoveButtonClick(\'unlink\');"> ' + b.getLang("clear") + "</span></nobr>"), h.showAnchor(g))
              }
              a ? (h.getDom("content").innerHTML =
                a, h.anchorEl = c || g, h.showAnchor(h.anchorEl)) : h.hide()
            }
          }))
        },
        _initToolbars: function () {
          for (var a = this.editor, c = this.toolbars || [], d = [], e = [], f = 0; f < c.length; f++) {
            for (var g = c[f], h = new r.editor.ui.Toolbar({
              theme: a.options.theme
            }), p = 0; p < g.length; p++) {
              var u = g[p],
                K = null;
              if ("string" == typeof u) {
                u = u.toLowerCase();
                "|" == u && (u = "Separator");
                "||" == u && (u = "Breakline");
                var x = r.editor.ui[u];
                if (x) if (b.isFunction(x)) K = new r.editor.ui[u](a);
                else {
                  if (x.id && x.id != a.key) continue;
                  if (u = x.execFn.call(a, a, u)) if (void 0 === x.index) {
                    h.add(u);
                    continue
                  } else e.push({
                    index: x.index,
                    itemUI: u
                  })
                }
              } else K = u;
              K && K.id && h.add(K)
            }
            d[f] = h
          }
          b.each(e, function (a) {
            h.add(a.itemUI, a.index)
          });
          this.toolbars = d
        },
        getHtmlTpl: function () {
          return '<div id="##" class="%%"><div id="##_sidebar" class="%%-sidebar"></div><div id="##_mainbar" class="%%-mainbar"><div id="##_toolbarbox" class="%%-toolbarbox">' + (this.toolbars.length ? '<div id="##_toolbarboxouter" class="%%-toolbarboxouter"><div class="%%-toolbarboxinner">' + this.renderToolbarBoxHtml() + "</div></div>" : "") + '<div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;"><div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">' + this.editor.getLang("clickToUpload") + '</div><div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div><div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div><div style="height:0;overflow:hidden;clear:both;"></div></div><div id="##_message_holder" class="%%-messageholder"></div></div><div id="##_iframeholder" class="%%-iframeholder"></div><div id="##_bottombar" class="%%-bottomContainer"><table><tr><td id="##_elementpath" class="%%-bottombar"></td><td id="##_wordcount" class="%%-wordcount"></td><td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td></tr></table></div><div id="##_scalelayer"></div></div></div>'
        },
        showWordImageDialog: function () {
          this._dialogs.wordimageDialog.open()
        },
        renderToolbarBoxHtml: function () {
          for (var a = [], b = 0; b < this.toolbars.length; b++) a.push(this.toolbars[b].renderHtml());
          return a.join("")
        },
        setFullScreen: function (a) {
          var b = this.editor,
            c = b.container.parentNode.parentNode;
          if (this._fullscreen != a) {
            this._fullscreen = a;
            this.editor.fireEvent("beforefullscreenchange", a);
            if (r.editor.browser.gecko) var d = b.selection.getRange().createBookmark();
            if (a) {
              for ($(c).parents("body").addClass("fullscreen");
                   "BODY" != c.tagName;) {
                var e = r.editor.dom.domUtils.getComputedStyle(c, "position");
                h.push(e);
                c.style.position = "static";
                c = c.parentNode
              }
              this._bakHtmlOverflow = document.documentElement.style.overflow;
              this._bakBodyOverflow = document.body.style.overflow;
              this._bakAutoHeight = this.editor.autoHeightEnabled;
              this._bakScrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
              this._bakEditorContaninerWidth = b.iframe.parentNode.offsetWidth;
              this._bakAutoHeight && (b.autoHeightEnabled = !1, this.editor.disableAutoHeight());
              document.documentElement.style.overflow = "hidden";
              window.scrollTo(0, window.scrollY);
              this._bakCssText = this.getDom().style.cssText;
              this._bakCssText1 = this.getDom("iframeholder").style.cssText;
              b.iframe.parentNode.style.width = "";
              this._updateFullScreen()
            } else {
              for ($(c).parents("body").removeClass("fullscreen");
                   "BODY" != c.tagName;) c.style.position = h.shift(),
                c = c.parentNode;
              this.getDom().style.cssText = this._bakCssText;
              this.getDom("iframeholder").style.cssText = this._bakCssText1;
              this._bakAutoHeight && (b.autoHeightEnabled = !0, this.editor.enableAutoHeight());
              document.documentElement.style.overflow = this._bakHtmlOverflow;
              document.body.style.overflow = this._bakBodyOverflow;
              b.iframe.parentNode.style.width = this._bakEditorContaninerWidth + "px";
              window.scrollTo(0, this._bakScrollTop)
            }
            if (u.gecko && "true" === b.body.contentEditable) {
              var f = document.createElement("input");
              document.body.appendChild(f);
              b.body.contentEditable = !1;
              setTimeout(function () {
                f.focus();
                setTimeout(function () {
                  b.body.contentEditable = !0;
                  b.fireEvent("fullscreenchanged", a);
                  b.selection.getRange().moveToBookmark(d).select(!0);
                  r.editor.dom.domUtils.remove(f);
                  a && window.scroll(0, 0)
                }, 0)
              }, 0)
            }
            "true" === b.body.contentEditable && (this.editor.fireEvent("fullscreenchanged", a), this.triggerLayout())
          }
        },
        _updateFullScreen: function () {
          if (this._fullscreen) {
            var a = c.getViewportRect();
            this.getDom().style.cssText = "border:0;position:absolute;left:0;top:" + (this.editor.options.topOffset || 0) + "px;width:" + a.width + "px;height:" + a.height + "px;z-index:" + (1 * this.getDom().style.zIndex + 100);
            c.setViewportOffset(this.getDom(), {
              left: 0,
              top: this.editor.options.topOffset || 0
            });
            this.editor.setHeight(a.height - this.getDom("toolbarbox").offsetHeight - this.getDom("bottombar").offsetHeight - (this.editor.options.topOffset || 0), !0);
            if (u.gecko) try {
              window.onresize()
            } catch (k) {}
          }
        },
        _updateElementPath: function () {
          var a = this.getDom("elementpath"),
            b;
          if (this.elementPathEnabled && (b = this.editor.queryCommandValue("elementpath"))) {
            for (var c = [], d = 0, e; e = b[d]; d++) c[d] = this.formatHtml('<span unselectable="on" onclick="$$.editor.execCommand(&quot;elementpath&quot;, &quot;' + d + '&quot;);">' + e + "</span>");
            a.innerHTML = '<div class="edui-editor-breadcrumb" onmousedown="return false;">' + this.editor.getLang("elementPathTip") + ": " + c.join(" &gt; ") + "</div>"
          } else a.style.display = "none"
        },
        disableElementPath: function () {
          var a = this.getDom("elementpath");
          a.innerHTML = "";
          a.style.display = "none";
          this.elementPathEnabled = !1
        },
        enableElementPath: function () {
          this.getDom("elementpath").style.display = "";
          this.elementPathEnabled = !0;
          this._updateElementPath()
        },
        _scale: function () {
          function a() {
            D = f.getXY(h);
            I || (I = g.options.minFrameHeight + r.offsetHeight + x.offsetHeight);
            Q.style.cssText = "position:absolute;left:0;display:;top:0;background-color:#41ABFF;opacity:0.4;filter: Alpha(opacity=40);width:" + h.offsetWidth + "px;height:" + h.offsetHeight + "px;z-index:" + (g.options.zIndex + 1);
            f.on(e, "mousemove", b);
            f.on(p, "mouseup", c);
            f.on(e, "mouseup", c)
          }
          function b(a) {
            d();
            a = a || window.event;
            J = a.pageX || e.documentElement.scrollLeft + a.clientX;
            H = a.pageY || e.documentElement.scrollTop + a.clientY;
            P = J - D.x;
            B = H - D.y;
            P >= M && (C = !0, Q.style.width =
              P + "px");
            B >= I && (C = !0, Q.style.height = B + "px")
          }
          function c() {
            C && (C = !1, g.ui._actualFrameWidth = Q.offsetWidth - 2, h.style.width = g.ui._actualFrameWidth + "px", g.setHeight(Q.offsetHeight - x.offsetHeight - r.offsetHeight - 2, !0));
            Q && (Q.style.display = "none");
            d();
            f.un(e, "mousemove", b);
            f.un(p, "mouseup", c);
            f.un(e, "mouseup", c)
          }
          function d() {
            u.ie ? e.selection.clear() : window.getSelection().removeAllRanges()
          }
          var e = document,
            g = this.editor,
            h = g.container,
            p = g.document,
            r = this.getDom("toolbarbox"),
            x = this.getDom("bottombar"),
            A = this.getDom("scale"),
            Q = this.getDom("scalelayer"),
            C = !1,
            D = null,
            I = 0,
            M = g.options.minFrameWidth,
            J = 0,
            H = 0,
            P = 0,
            B = 0,
            E = this;
          this.editor.addListener("fullscreenchanged", function (a, b) {
            b ? E.disableScale() : E.editor.options.scaleEnabled && (E.enableScale(), a = E.editor.document.createElement("span"), E.editor.body.appendChild(a), E.editor.body.style.height = Math.max(f.getXY(a).y, E.editor.iframe.offsetHeight - 20) + "px", f.remove(a))
          });
          this.enableScale = function () {
            1 != g.queryCommandState("source") && (A.style.display = "", this.scaleEnabled = !0, f.on(A, "mousedown", a))
          };
          this.disableScale = function () {
            A.style.display = "none";
            this.scaleEnabled = !1;
            f.un(A, "mousedown", a)
          }
        },
        isFullScreen: function () {
          return this._fullscreen
        },
        postRender: function () {
          a.prototype.postRender.call(this);
          for (var b = 0; b < this.toolbars.length; b++) this.toolbars[b].postRender();
          var c = this,
            d, e = r.editor.dom.domUtils,
            f = function () {
              clearTimeout(d);
              d = setTimeout(function () {
                c._updateFullScreen()
              })
            };
          e.on(window, "resize", f);
          c.addListener("destroy", function () {
            e.un(window, "resize", f);
            clearTimeout(d)
          })
        },
        showToolbarMsg: function (a, b) {
          this.getDom("toolbarmsg_label").innerHTML = a;
          this.getDom("toolbarmsg").style.display = "";
          b || (this.getDom("upload_dialog").style.display = "none")
        },
        hideToolbarMsg: function () {
          this.getDom("toolbarmsg").style.display = "none"
        },
        mapUrl: function (a) {
          return a ? a.replace("~/", this.editor.options.UEDITOR_HOME_URL || "") : ""
        },
        triggerLayout: function () {
          var a = this.getDom();
          a.style.zoom = "1" == a.style.zoom ? "100%" : "1"
        }
      };
      b.inherits(d, r.editor.ui.UIBase);
      var e = {};
      UE.ui.Editor = function (a) {
        var c = new UE.Editor(a);
        c.options.editor = c;
        b.loadFile(document, {
          href: "/static/ueditor135/themes/default/css/ueditor.min.css" + versionStr,// c.options.editorCssUrl || c.options.themePath + c.options.theme + "/css/ueditor.min.css",
          tag: "link",
          type: "text/css",
          rel: "stylesheet"
        });
        var g = c.render;
        c.render = function (a) {
          a.constructor === String && (c.key = a, e[a] = c);
          b.domReady(function () {
            function b() {
              c.setOpt({
                labelMap: c.options.labelMap || c.getLang("labelMap")
              });
              new d(c.options);
              if (a && (a.constructor === String && (a = document.getElementById(a)), a && a.getAttribute("name") && (c.options.textarea = a.getAttribute("name")), a && /script|textarea/ig.test(a.tagName))) {
                var b = document.createElement("div");
                a.parentNode.insertBefore(b, a);
                var e = a.value || a.innerHTML;
                c.options.initialContent = /^[\t\r\n ]*$/.test(e) ? c.options.initialContent : e.replace(/>[\n\r\t]+([ ]{4})+/g, ">").replace(/[\n\r\t]+([ ]{4})+</g, "<").replace(/>[\n\r\t]+</g, "><");
                a.className && (b.className = a.className);
                a.style.cssText && (b.style.cssText = a.style.cssText);
                /textarea/i.test(a.tagName) ? (c.textarea = a, c.textarea.style.display = "none") : a.parentNode.removeChild(a);
                a.id && (b.id = a.id, f.removeAttributes(a, "id"));
                a = b;
                a.innerHTML = ""
              }
              f.addClass(a, "edui-" + c.options.theme);
              c.ui.render(a);
              b = c.options;
              c.container = c.ui.getDom();
              e = f.findParents(a, !0);
              for (var h = [], k = 0, l; l = e[k]; k++) h[k] = l.style.display,
                l.style.display = "block";
              b.initialFrameWidth ? b.minFrameWidth = b.initialFrameWidth : (b.minFrameWidth = b.initialFrameWidth = a.offsetWidth, k = a.style.width, /%$/.test(k) && (b.initialFrameWidth = k));
              b.initialFrameHeight ? b.minFrameHeight = b.initialFrameHeight : b.initialFrameHeight = b.minFrameHeight =
                a.offsetHeight;
              for (k = 0; l = e[k]; k++) l.style.display = h[k];
              a.style.height && (a.style.height = "");
              c.container.style.width = b.initialFrameWidth + (/%$/.test(b.initialFrameWidth) ? "" : "px");
              c.container.style.zIndex = b.zIndex;
              g.call(c, c.ui.getDom("iframeholder"));
              c.fireEvent("afteruiready")
            }
            c.langIsReady ? b() : c.addListener("langReady", b)
          })
        };
        return c
      };
      UE.getEditor = function (a, b) {
        var c = e[a];
        c || (c = e[a] = new UE.ui.Editor(b), c.render(a));
        return c
      };
      UE.delEditor = function (a) {
        var b;
        if (b = e[a]) b.key && b.destroy(),
          delete e[a]
      };
      UE.registerUI = function (a, c, d, e) {
        b.each(a.split(/\s+/), function (a) {
          r.editor.ui[a] = {
            id: e,
            execFn: c,
            index: d
          }
        })
      }
    })();
    UE.plugins.editor135 = function () {
      var d = this,
        b = this,
        c = r.editor.utils,
        a = r.editor.ui,
        f = r.editor.ui.uiUtils,
        h = r.editor.dom.domUtils,
        e = "shadowcolor";
      a[e] = function (b) {
        return function (c) {
          var d = new a.ColorButton({
            className: "edui-for-" + b,
            color: "default",
            title: "\u6587\u5b57\u9634\u5f71\u8272",
            editor: c,
            onpickcolor: function (a, d) {
              c.execCommand(b, d + " 2px 2px 10px")
            },
            onpicknocolor: function () {
              c.execCommand(b, "default");
              this.setColor("transparent");
              this.color = "default"
            },
            onbuttonclick: function () {
              c.execCommand(b, this.color + " 2px 2px 10px")
            }
          });
          a.buttons[b] = d;
          c.addListener("selectionchange", function () {
            d.setDisabled(-1 == c.queryCommandState(b))
          });
          return d
        }
      }(e);
      b.addListener("sourcemodechanged", function (a, c) {
        if (!c) {
          jQuery(b.document).find("#body-css").remove();
          var d = "";
          jQuery("[cdata_tag=style]", b.document).each(function () {
            d += jQuery(this).attr("cdata_data") + ";"
          });
          jQuery('<style id="body-css">').text(d).appendTo(jQuery("head", b.document))
          b.fireEvent('afterSourcemodechanged', {html: b.getContent()})
        }
      });
      setTimeout(function () {
        b.fireEvent("sourcemodechanged", !1)
      }, 3E3);
      e = "remotecontent";
      a[e] = function (b) {
        return function (c) {
          var d = new a.RemoteButton({
            className: "edui-for-" + b,
            color: "default",
            title: "\u5bfc\u5165\u6587\u7ae0\u5185\u5bb9",
            editor: c,
            onbuttonclick: function () {
              this.showPopup()
            }
          });
          a.buttons[b] = d;
          c.addListener("selectionchange", function () {
            d.setDisabled(-1 == c.queryCommandState(b))
          });
          return d
        }
      }(e);
      e = "more";
      a[e] = function (a) {
        return function (b) {
          b.registerCommand(a, {
            execCommand: function () {
              var a =
                b.container;
              jQuery(a).hasClass("show-edui-more") ? (jQuery(a).removeClass("show-edui-more"), d.setPreferences("showmore", !1)) : (jQuery(a).addClass("show-edui-more"), d.setPreferences("showmore", !0));
              a = b.ui.getDom("toolbarbox");
              h.hasClass(a, "show-edui-more") ? h.removeClasses(a, "show-edui-more") : h.addClass(a, "show-edui-more")
            }
          });
          return new UE.ui.Button({
            name: a,
            title: "\u66f4\u591a",
            onclick: function () {
              b.execCommand(a)
            }
          })
        }
      }(e);
      var l = new UE.ui.Dialog({
          iframeUrl: b.options.UEDITOR_HOME_URL + "dialogs/135editor/135BgDialog.html",
          editor: d,
          name: "135BgDialog",
          title: "\u6837\u5f0f\u80cc\u666f\u56fe\u8bbe\u7f6e",
          buttons: [{
            className: "edui-okbutton",
            label: "\u786e\u5b9a",
            onclick: function () {
              l.close(!0)
            }
          },
            {
              className: "edui-cancelbutton",
              label: "\u53d6\u6d88",
              onclick: function () {
                l.close(!1)
              }
            }]
        }),
        k = new UE.ui.Dialog({
          iframeUrl: b.options.UEDITOR_HOME_URL + "dialogs/135editor/135BdBgDialog.html",
          editor: d,
          name: "135BdBgDialog",
          title: "\u8fb9\u6846\u5e95\u7eb9\u8bbe\u7f6e",
          cssRules: "width:800px;height:450px;",
          buttons: [{
            className: "edui-okbutton",
            label: "\u786e\u5b9a",
            onclick: function () {
              k.close(!0)
            }
          },
            {
              className: "edui-cancelbutton",
              label: "\u53d6\u6d88",
              onclick: function () {
                k.close(!1)
              }
            }]
        }),
        paragraphDialog = new UE.ui.Dialog({
          iframeUrl: b.options.UEDITOR_HOME_URL + "dialogs/135editor/135Paragraph.html",
          editor: d,
          name: "135Paragraph",
          title: "\u6bb5\u843d\u8bbe\u7f6e",
          cssRules: "width:600px;height:250px;"
        });
      setTimeout(function () {
        d.ui && d.ui._dialogs && (d.ui._dialogs._135BgDialog = l, d.ui._dialogs._135BdBgDialog = k, d.ui._dialogs._135ParagraphDialog = paragraphDialog)
      }, 2E3);
      "undefined" == typeof window.showSuccessMessage && (window.showSuccessMessage = function (a) {
        var b = d.document.getElementById("editor135_msg");
        b && h.remove(b);
        d.fireEvent("showmessage", {
          content: a,
          timeout: 3E3
        })
      });
      var n = null,
        m = new r.editor.ui.Popup({
          content: "",
          editor: d,
          className: "edui-bubble"
        });
      d.addListener("beforesetcontent", function (a, b, c) {
        b.html = d.parseInsertPasteSetHtml(b.html)
      });
      // 复制前触发此事件
      d.addListener("beforepaste", function (a, b, c) {
        b.html = d.parseInsertPasteSetHtml(b.html)
      });
      d.addListener("beforegetcontent", function (a) {
        jQuery(d.document).find(".135editor").removeClass("135editor").addClass("_135editor");
        "inner" == d.options.style_toolbar && (jQuery(n).find(".tool-border").remove(), jQuery(n).find(".otf-poptools").remove());
        jQuery(d.document).find("._135editor").each(function () {
          jQuery(this).find(".tool-border").remove();
          jQuery(this).removeClass("active")
        })
      });
      d.addListener("contentchange", function () {
        var a = d.getContentTxt(),
          b = d.selection.document;
        "" == a && 0 == jQuery(d.body).find("img").length ? jQuery(b).find("body").addClass("guide") : jQuery(b).find("body").removeClass("guide")
      });
      d.addListener("ready", function (a) {
        n = d.selection.document;
        a = d.getPreferences("editor135");
        (null == a || a && (null == a.showmore || 1 == a.showmore)) && d.execCommand("more");
        (a = h.findParent(d.iframe.parentNode, function (a) {
          return "FORM" == a.tagName
        }, !0)) && jQuery(a).submit(function () {
          d.sync()
        });
        // copycopycopycopy
        jQuery(n).on("copy", function (a) {
          if (a.originalEvent) {
            var b = a.originalEvent.clipboardData,
              c = getSelectionHtml(),
              d = getSelectionText()
            b.setData("text/html", c);
            // b.setData("text/plain", c);
            b.setData("text/plain", d);
            return a.preventDefault()
          }
          if (window.clipboardData) return b = window.clipboardData,
            c = getSelectionHtml(),
            d = getSelectionText(),
            b.setData("text/html", c),
            b.setData("text/plain", d),
            a.preventDefault()
        });
        jQuery(n).keydown(function (a) {
          window.current_editor = d;
          27 == a.keyCode ? (clean_135helper(), m && m.hide()) : (a.ctrlKey || a.metaKey) && 65 == a.keyCode ? (window.replace_full_color = !0, clean_135helper(), "function" == typeof showColorPlan && showColorPlan(), 0 < jQuery("#replace-color-all").length && jQuery("#replace-color-all").prop("checked", !0), clearInterval(replace_clear_interval), replace_clear_interval = setTimeout(function () {
            window.replace_full_color = !1;
            0 < jQuery("#replace-color-all").length && jQuery("#replace-color-all").prop("checked", !1);
            window.showSuccessMessage("\u5168\u6587\u6362\u8272\u6a21\u5f0f\u5df2\u5173\u95ed")
          }, 3E4)) : (a.ctrlKey || a.metaKey) && 67 == a.keyCode && clean_135helper()
        });
        jQuery(document).on("dblclick", ".edui-editor-imagescale", function () {
          jQuery(this).attr("word_img") ? d.ui._dialogs.wordimageDialog && d.ui._dialogs.wordimageDialog.open() : d.ui._dialogs.insertimageDialog && d.ui._dialogs.insertimageDialog.open()
        });
        jQuery(n).on("dblclick", "img", function () {
          console.log("img dblclick");
          jQuery(this).attr("word_img") ? d.ui._dialogs.wordimageDialog && d.ui._dialogs.wordimageDialog.open() : (jQuery(this).attr("data-op", "change"), d.ui._dialogs.insertimageDialog && d.ui._dialogs.insertimageDialog.open())
        });
        jQuery(n).on("dblclick", "area", function () {
          d.ui._dialogs.insertimageDialog && d.ui._dialogs.insertimageDialog.open()
        })
      });
      d.addListener("keyup", function (a, b) {
        r.editor.ui.Popup.postHide(b)
      });
      d.addListener("click", function (a, e) {
        e = e || window.event;
        window.current_editor = d;
        if (!(e.shiftKey || e.ctrlKey || e.altKey)) {
          a = d.selection.getRange();
          var g = e.target || e.srcElement;
          if ("BODY" == g.tagName) {
            if (clean_135helper(), r.editor.ui.Popup.postHide(e), g = a.startContainer, jQuery(g).hasClass("_135editor") || 0 < jQuery(g).parents("._135editor").length) {
              jQuery(g).hasClass("_135editor") || (g = jQuery(g).parents("._135editor:first").get(0));
              var h = jQuery.trim(jQuery(g).text());
              h = h.replace(/\u200B/g, "");
              e.clientY > jQuery(g).offset().top + jQuery(g).height() - jQuery(d.document).scrollTop() && "" != h && d.execCommand("insertparagraph")
            }
          } else if (jQuery(document).trigger("mousedown.colorPicker"), window.current_editor = d, "AREA" == g.tagName) h = jQuery(g).parent("map").attr("id"),
            h = jQuery("img[usemap='#" + h + "']", n).get(0),
            a.selectNode(h),
            a.select();
          else {
            var p = a.getClosedNode();
            "IMG" == g.tagName ? window.current_edit_img = g : "touchstart" != e.type && (p = a.startContainer, 3 == p.nodeType && (p = p.parentNode), g = p);
            if (!(0 < jQuery(g).parents(".otf-poptools").length)) if (jQuery(g).hasClass("_135editor") || 0 < jQuery(g).parents("._135editor").length) {
              jQuery(g).hasClass("_135editor") || (g = jQuery(g).parents("._135editor:first").get(0));
              p = jQuery(g).clone();
              p.find(".tool-border").remove();
              p = null;
              d.current_active_135item && !d.current_active_135item.is(g) && clean_135helper();
              d.current_active_135item = jQuery(g);
              d.current_active_135item.addClass("active");
              "inner" == d.options.style_toolbar ? p = d.current_active_135item.parents("body") : (m.render(), p = jQuery(m.getDom("content")));
              if (0 == p.find(".otf-poptools").length) {
                var q = jQuery('<section class="otf-poptools" contenteditable="false"><section class="colors"></section><i title="\u79fb\u52a8\u5230\u5408\u9002\u7684\u4f4d\u7f6e\u540e\u9501\u5b9a\u64cd\u4f5c\u680f\u4f4d\u7f6e" class="btn-lock fa fa-unlock"></i><section style="white-space: nowrap;"><span class="remove" title="\u5220\u9664\u672c\u6837\u5f0f" stateful>\u5220\u9664</span><span class="_135autonum hidden" title="\u5c06\u6240\u6709\u51fa\u73b0\u7684\u4e0e\u672c\u6837\u5f0f\u76f8\u540c\u7684\u6837\u5f0f\u5e8f\u53f7\u4ece\u5c0f\u5230\u5927\u7f16\u53f7" stateful>\u81ea\u52a8\u7f16\u53f7</span>' + '<span class="_135video hidden" title="\u66f4\u6362\u89c6\u9891\u5730\u5740" stateful>\u89c6\u9891</span><span class="_135bdbg hidden" title="\u8bbe\u7f6e\u8fb9\u6846\u7c7b\u578b" stateful>\u8fb9\u6846</span><span class="_135para" title="\u8bbe\u7f6e\u6bb5\u843d\u5b57\u4f53\u3001\u7f29\u8fdb\u3001\u884c\u9ad8\u3001\u6bb5\u843d\u95f4\u8ddd\u7b49\u3002" stateful>\u6bb5\u843d</span><span class="moveup">\u2191\u4e0a\u79fb</span><span class="movedown">\u2193\u4e0b\u79fb</span></section><section><span class="_135clean hidden" title="\u6e05\u9664\u6837\u5f0f" stateful>\u6e05\u9664\u6837\u5f0f</span><span class="_135convertImage"  title="\u8f6c\u4e3a\u56fe\u7247" stateful>\u8f6c\u4e3a\u56fe\u7247</span><span class="_135saveTemplate"  title="\u4fdd\u5b58\u4e3a\u4e2a\u4eba\u6837\u5f0f" stateful>\u4fdd\u5b58</span><span class="_blank"  title="\u6837\u5f0f\u4e4b\u540e\u63d2\u5165\u7a7a\u884c" stateful>\u540e\u7a7a\u884c</span><span class="_preblank"  title="\u6837\u5f0f\u4e4b\u524d\u63d2\u5165\u7a7a\u884c" stateful>\u524d\u7a7a\u884c</span><section class="_135layout slider"><span style="float:right;z-index: 5;color: #333;line-height: 16px;font-size: 10px;" title="\u8c03\u6574\u5de6\u53f3\u5206\u680f\u5bbd\u5ea6\u6bd4\u4f8b">\u8c03\u6574\u5bbd\u5ea6\u6bd4\u4f8b</span></section><section><input type="text" style="width:30px;float:right;border:0 none;height:16px;line-height:14px;color:#333;font-size:12px;text-align: right;padding:0 2px;" name="rotatez" placeholder="\u8f93\u5165"><section class="_135rotate slider" style="margin-right:35px;"><span style="float:right;z-index: 5;color: #333;line-height: 16px;font-size: 10px;">\u65cb\u8f6c\u89d2\u5ea6\uff08-180~180\uff09</span></section></section><section><input type="text" style="width:30px;float:right;border:0 none;height:16px;line-height:14px;color:#333;font-size:12px;text-align: right;padding:0 2px;" name="opacity" placeholder="\u8f93\u5165"><section class="_135opacity slider" style="margin-right:35px;"><span style="float:right;z-index: 5;color: #333;line-height: 16px;font-size: 10px;">\u900f\u660e\u5ea6\uff080~1\uff09</span></section></section></section></section>');
                p.append(q)
              } else q = p.find(".otf-poptools");
              if (!d.options.hide_style_popup) {
                "inner" == d.options.style_toolbar ? (p = jQuery(d.current_active_135item).offset(), q.css("top", p.top + jQuery(d.current_active_135item).height() + 5)) : (m.anchorEl = g, m.showAnchor(m.anchorEl), jQuery(q).parents(".edui-popup-body").css("width", "auto"), d.fireEvent("aftershowpop"), 0 < jQuery("#edui-editor135-style-popup").length && q.find(".btn-lock").removeClass("fa-unlock").addClass("fa-lock"));
                p = jQuery(d.container).offset().top + e.clientY + jQuery(d.container).find(".edui-editor-toolbarbox").height();
                "function" == typeof showColorPlan && showColorPlan(p);
                q.find("._135clean").unbind("click").click(function (a) {
                  d.current_active_135item.find(".tool-border").remove();
                  window.ajaxAction && window.ajaxAction("//" + b.options.plat_host + "/html_parsers/clean", {
                    html: jQuery(d.current_active_135item).prop("outerHTML")
                  }, null, function (a) {
                    a.success || 0 == a.ret ? (jQuery(d.current_active_135item).replaceWith(a.html), window.showSuccessMessage(a.msg)) : window.showErrorMessage(a.msg)
                  });
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find(".remove").unbind("click").click(function (a) {
                  d.current_active_135item.remove();
                  a.preventDefault();
                  jQuery(this).blur();
                  "inner" == d.options.style_toolbar ? q.remove() : m.hide();
                  return !1
                });
                q.find(".btn-lock").unbind("click").click(function (a) {
                  if ("inner" != d.options.style_toolbar) {
                    if (jQuery(this).hasClass("fa-unlock")) {
                      a = m.id;
                      var b = m.getDom().style.top,
                        e = m.getDom().style.left;
                      c.cssRule("edui-editor135-style-popup", "#" + a + "{position:fixed;top:" + b + " !important;left:" + e + " !important;}");
                      jQuery(this).removeClass("fa-unlock").addClass("fa-lock")
                    } else jQuery("#edui-editor135-style-popup").remove(),
                      jQuery(this).removeClass("fa-lock").addClass("fa-unlock");
                    return !1
                  }
                });
                q.find(".copy").unbind("click").click(function (a) {
                  d.current_active_135item.find(".tool-border").remove();
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135convertImage").unbind("click").click(function (a) {
                  d.current_active_135item.find(".tool-border").remove();
                  window.ajaxAction && window.ajaxAction("//" + b.options.plat_host + "/html_images/save", {
                    html: d.current_active_135item.prop("outerHTML")
                  }, null, function (a) {
                    0 == a.ret || a.success ? (d.current_active_135item.replaceWith(a.html), window.showSuccessMessage(a.msg)) : window.showErrorMessage(a.msg)
                  });
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135saveTemplate").unbind("click").click(function (a) {
                  d.current_active_135item.find(".tool-border").remove();
                  window.save_as_tpl ? window.save_as_tpl(!0) : window.ajaxAction && window.ajaxAction("//" + b.options.plat_host + "/user_styles/saveTemplate", {
                    content: d.current_active_135item.prop("outerHTML")
                  }, null, function (a) {
                    0 == a.ret ? window.showSuccessMessage(a.msg) : window.showErrorMessage(a.msg)
                  });
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find(".select").unbind("click").click(function (a) {
                  d.current_active_135item.find(".tool-border").remove();
                  var b = d.selection.getRange();
                  b.selectNode(g);
                  b.select();
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._blank").unbind("click").click(function (a) {
                  var b = d.selection.getRange(),
                    c = jQuery('<section data-role="paragraph" class="_135editor"><p><br/></p></section>');
                  c.insertAfter(d.current_active_135item);
                  c = c.find("p").get(0);
                  b.setStart(c, 0).setCursor(!1, !0);
                  "inner" == d.options.style_toolbar ? q.remove() : m.hide();
                  d.current_active_135item.removeClass("active").find(".tool-border").remove();
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._preblank").unbind("click").click(function (a) {
                  var b = d.selection.getRange(),
                    c = jQuery('<section data-role="paragraph" class="_135editor"><p><br/></p></section>');
                  c.insertBefore(d.current_active_135item);
                  c = c.find("p").get(0);
                  b.setStart(c, 0).setCursor(!1, !0);
                  "inner" == d.options.style_toolbar ? q.remove() : m.hide();
                  d.current_active_135item.removeClass("active").find(".tool-border").remove();
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find(".moveup").unbind("click").click(function (a) {
                  var b = d.current_active_135item,
                    c = b.prev();
                  if (0 < c.length && "BODY" != c.prop("tagName")) b.insertBefore(c);
                  else {
                    var e = jQuery(b).parent();
                    if ("BODY" != e.prop("tagName") && !e.hasClass("article135")) for (c =
                                                                                         e.prev(); 0 == c.length;) if (e = jQuery(e).parent(), 0 < e.length && "BODY" != e.prop("tagName")) c = e.prev();
                    else break;
                    0 < c.length && "BODY" != c.prop("tagName") ? b.insertBefore(c) : d.fireEvent("showmessage", {
                      content: "\u524d\u9762\u6ca1\u6709\u5185\u5bb9\u4e86\uff0c\u65e0\u6cd5\u518d\u5411\u4e0a\u79fb\u52a8",
                      timeout: 1E3
                    })
                  }
                  "inner" == d.options.style_toolbar && (b = jQuery(d.current_active_135item).offset(), q.css("top", b.top + jQuery(d.current_active_135item).height() + 5));
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find(".movedown").unbind("click").click(function (a) {
                  var b =
                      d.current_active_135item,
                    c = b.next();
                  if (0 < c.length) b.insertAfter(c);
                  else {
                    var e = jQuery(b).parent();
                    if ("BODY" != e.prop("tagName") && !e.hasClass("article135")) for (c = e.next(); 0 == c.length;) if (e = jQuery(e).parent(), 0 < e.length) c = e.next();
                    else break;
                    0 < c.length ? b.insertAfter(c) : d.fireEvent("showmessage", {
                      content: "\u540e\u9762\u6ca1\u6709\u5185\u5bb9\u4e86\uff0c\u65e0\u6cd5\u518d\u5411\u4e0b\u79fb\u52a8",
                      timeout: 1E3
                    })
                  }
                  "inner" == d.options.style_toolbar && (b = jQuery(d.current_active_135item).offset(), q.css("top", b.top + jQuery(d.current_active_135item).height() + 5));
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135colors").unbind("click").click(function (a) {
                  var b = "id",
                    c = jQuery(d.current_active_135item).data("id");
                  "undefined" == typeof c && (b = "role", c = jQuery(d.current_active_135item).data("role"));
                  var e = d.selection.document,
                    f = jQuery(d.current_active_135item).attr("data-color"),
                    g = jQuery("._135editor[data-" + b + "=" + c + "]", e).length - 1;
                  f && jQuery("._135editor[data-" + b + "=" + c + "]", e).each(function () {
                    this != jQuery(d.current_active_135item).get(0) && f != jQuery(this).attr("data-color") && (parseObject(jQuery(this), f, "#FFF"), jQuery(this).attr("data-color", f), jQuery(this).attr("data-custom", f))
                  });
                  var h = [];
                  if (0 < jQuery(d.current_active_135item).find(".layout").length) {
                    var k = jQuery(d.current_active_135item).find(".layout:first").parent();
                    2 >= k.find("> .layout").length && jQuery(d.current_active_135item).find(".layout:first").parents("._135editor:first").get(0) == jQuery(d.current_active_135item).get(0) && (h = k.find("> .layout"))
                  }
                  0 < h.length ? jQuery("._135editor[data-" + b + "=" + c + "]", e).each(function () {
                    if (this != jQuery(d.current_active_135item).get(0)) {
                      var a = jQuery(this).find(".layout:first").parent(),
                        b = a.find("> .layout").length;
                      2 != b && 1 != b || jQuery(this).find(".layout:first").parents("._135editor:first").get(0) != jQuery(this).get(0) || a.find("> .layout").each(function (a) {
                        this.style.width = h.get(a).style.width;
                        jQuery(this).attr("data-width", h.get(a).style.width)
                      })
                    }
                  }) : jQuery(d.current_active_135item).get(0).style.width && jQuery("._135editor[data-" + b + "=" + c + "]", e).each(function () {
                    this != jQuery(d.current_active_135item).get(0) && (this.style.width = jQuery(d.current_active_135item).get(0).style.width, this.style.margin = "0 auto", jQuery(this).attr("data-width", jQuery(d.current_active_135item).get(0).style.width))
                  });
                  0 < g ? (d.undoManger.save(), window.showSuccessMessage("\u4e3a\u60a8\u540c\u6b65\u53d8\u6362\u4e86" + g + "\u4e2a\u6837\u5f0f\u7684\u989c\u8272\uff0c\u8282\u7701\u65f6\u95f4" + 10 * g + "\u79d2")) : window.showErrorMessage("\u672a\u627e\u5230\u4f7f\u7528\u76f8\u540c\u6837\u5f0f\u7684\u5185\u5bb9");
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135autonum").unbind("click").click(function (a) {
                  var b = jQuery(d.current_active_135item).data("id"),
                    c = d.selection.document;
                  if (b) {
                    var e = 0;
                    jQuery("._135editor[data-id=" + b + "]", c).each(function (a) {
                      e++;
                      a = jQuery(this).find(".autonum:first");
                      a.attr("data-num", e);
                      "IMG" == a.get(0).tagName ? a.attr("src", a.data("num" + e)) : a.data("num" + e) ? a.html(a.data("num" + e)) : a.html(e)
                    });
                    window.showSuccessMessage("\u4e3a\u60a8\u81ea\u52a8\u7f16\u53f7\u4e86" + e + "\u4e2a\u6837\u5f0f\uff0c\u8282\u7701\u65f6\u95f4" + 10 * e + "\u79d2");
                    d.undoManger.save()
                  }
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                /*q.find("._135bg").unbind("click").click(function (a) {
                  l.render();
                  l.open();
                  l.anchorEl = d.current_active_135item.get(0);
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });*/
                q.find("._135bdbg").unbind("click").click(function (a) {
                  k.render();
                  k.open();
                  k.anchorEl = d.current_active_135item.get(0);
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135para").unbind("click").click(function (a) {
                  var b = d.ui._dialogs._135ParagraphDialog;
                  b && (b.render(), b.open(), b.anchorEl = d.current_active_135item.get(0));
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135music").unbind("click").click(function (a) {
                  d.ui._dialogs.musicDialog && d.ui._dialogs.musicDialog.open();
                  d.ui._dialogs.musicDialog.anchorEl = d.current_active_135item.get(0);
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135video").unbind("click").click(function (a) {
                  d.ui._dialogs.insertvideoDialog && d.ui._dialogs.insertvideoDialog.open();
                  d.ui._dialogs.insertvideoDialog.anchorEl =
                    d.current_active_135item.get(0);
                  a.preventDefault();
                  jQuery(this).blur();
                  return !1
                });
                q.find("._135clean").removeClass("hidden");
                d.options.open_editor && (q.find("._135convertImage").addClass("hidden"), q.find("._135saveTemplate").addClass("hidden"));
                jQuery(g).find(".autonum").length && q.find("._135autonum").removeClass("hidden");
                jQuery(g).find("audio").length && q.find("._135music").removeClass("hidden");
                jQuery(g).find(".video_iframe").length && q.find("._135video").removeClass("hidden");
                var u = !1;
                jQuery(g).find("*").each(function () {
                  if (jQuery(this).hasClass("_135editor") || 0 < jQuery(this).parents(".tool-border").length) return !0;
                  if (this.style.background || this.style.border || this.style.borderBottom || this.style.borderTop || this.style.borderLeft || this.style.borderRight) u = !0
                });
                u && UE.browser.webkit && q.find("._135bdbg").removeClass("hidden");
                var t = g.style.transform;
                t && -1 < t.toLowerCase().indexOf("rotatez(") ? (t = parseInt(t.toLowerCase().replace("rotatez", "").replace("(", "").replace(")", "")), 180 < t ? t -= 360 : -180 > t && (t += 360)) : t = 0;
                t = 100 * (t + 180) / 360;
                q.find("._135rotate").attr("data-param-init-value", t).on("inited", function (a, b) {
                  a = parseInt(360 * b / 100 - 180);
                  jQuery(this).find(".complete").html(a);
                  q.find("input[name=rotatez]").val(a)
                }).slider({
                  initAll: !1,
                  initValue: t
                }).on("change", function (a, b) {
                  a = parseInt(360 * b / 100 - 180);
                  jQuery(this).find(".complete").html(a);
                  d.setElementTransform(g, "rotatez(" + a + "deg)");
                  q.find("input[name=rotatez]").val(a)
                });
                q.find("input[name=rotatez]").on("keyup", function () {
                  if ("" == this.value || "NaN" == parseInt(this.value)) this.value = 0;
                  var a = parseInt(this.value) % 180;
                  a != parseInt(this.value) && (this.value = a);
                  q.find("._135rotate").find(".complete").html(this.value);
                  a = parseInt(this.value) + 180;
                  a = parseInt(100 * a / 360);
                  q.find("._135rotate").data("slider").val(a);
                  d.setElementTransform(g, "rotatez(" + this.value + "deg)")
                });
                t = 100 * jQuery(g).css("opacity");
                q.find("._135opacity").attr("data-param-init-value", t).on("inited", function (a, b) {
                  a = b / 100;
                  q.find("input[name=opacity]").val(a)
                }).slider({
                  initAll: !1,
                  initValue: t
                }).on("change", function (a, b) {
                  a = b / 100;
                  jQuery(g).css("opacity", a);
                  q.find("input[name=opacity]").val(a)
                });
                q.find("input[name=opacity]").on("keyup", function () {
                  if ("" == this.value || "NaN" == parseInt(this.value)) this.value = 0;
                  jQuery(g).css("opacity", this.value);
                  q.find("._135opacity").find(".complete").html(this.value);
                  var a = 100 * this.value;
                  q.find("._135opacity").data("slider").val(a)
                });
                var x = jQuery(g).find(".layout:first").parent(),
                  A = x.find("> .layout").length;
                if (0 == A) {
                  t = jQuery(g).get(0).style.width;
                  var C = !0;
                  0 <= t.indexOf("%") ? t = t.replace("%", "") : 0 <= t.indexOf("px") ? (C = !1, t = t.replace("px", ""), t = parseInt(100 * t / jQuery(g).width())) : t = 100;
                  q.find("._135layout").attr("data-param-init-value", t).removeClass("hidden").on("inited", function (a, b) {
                    jQuery(this).find(".complete").html(b + "%")
                  }).slider({
                    initAll: !1,
                    initValue: t
                  }).on("change", function (a, b) {
                    C ? (jQuery(this).find(".complete").html(b + "%"), jQuery(g).css("margin", "0 auto").css("width", b + "%").attr("data-width", b + "%")) : (a = parseInt(jQuery(g).width() * b / 100), jQuery(this).find(".complete").html(a + "px"), jQuery(g).css("margin", "0 auto").css("width", a + "px"))
                  })
                }
                2 != A && 1 != A || jQuery(g).find(".layout:first").parents("._135editor:first").get(0) != jQuery(g).get(0) || (t = jQuery(g).find(".layout").get(0).style.width, C = !0, 0 <= t.indexOf("%") ? t = t.replace("%", "") : 0 <= t.indexOf("px") ? (C = !1, t = t.replace("px", ""), t = parseInt(100 * t / jQuery(g).width())) : t = 100, q.find("._135layout").attr("data-param-init-value", t).removeClass("hidden").on("inited", function (a, b) {
                  jQuery(this).find(".complete").html(b + "%")
                }).slider({
                  initAll: !1,
                  initValue: t
                }).on("change", function (a, b) {
                  C ? (jQuery(this).find(".complete").html(b + "%"), x.find("> .layout").eq(0).css("width", b + "%").attr("data-width", b + "%"), 2 == A && x.find("> .layout").eq(1).css("width", 100 - b + "%").attr("data-width", 100 - b + "%")) : (a = parseInt(jQuery(g).width() * b / 100), jQuery(this).find(".complete").html(a + "px"), x.find("> .layout").eq(0).css("width", a + "px"))
                }));
                if ("inner" != d.options.style_toolbar) {
                  t = parseInt(m.getDom().style.top.replace("px", ""));
                  var D = parseInt(jQuery(m.getDom("content")).height()) + 16;
                  if (t + D > jQuery(window).height()) a = jQuery(m.anchorEl).height(),
                    35 < t - a - D ? m.getDom().style.top = t - a - D - 30 + "px" : 150 < jQuery(window).height() - p - D ? m.getDom().style.top = jQuery(window).height() - D - 35 + "px" : m.getDom().style.top = p - D - 150 + "px";
                  else if (p = f.getClientRect(m.anchorEl).top, t < p && t + D + 30 > p && (m.getDom().style.top = p - D - 30 + "px"), e = e.target || e.srcElement, p = a.getClosedNode(), "IMG" == e.tagName || p && "IMG" == p.tagName) m.getDom().style.top = t + 60 + "px";
                  a = f.getClientRect(current_editor.iframe);
                  m.getDom().style.left = a.left + 15 + "px"
                }
                var J = [];
                jQuery(g).find("*").each(function () {
                  for (var a = jQuery(this).attr("style") ? jQuery(this).attr("style") : "", b = a.split(";"), c = 0; c < b.length; c++) {
                    var d = b[c].split(":");
                    if (2 == d.length) {
                      var e = d[1].match(/(rgb[\s+]?\([\s+]?\d+[\s+]?,[\s+]?\d+[\s+]?,[\s+]?\d+[\s+]?\))/gi);
                      if (e && 0 < e.length) for (var f = 0; f < e.length; f++) {
                        var g = e[f],
                          h = rgb2hex(g);
                        h != g && (a = a.replace(g, h), jQuery(this).attr("style", a)); - 1 == jQuery.inArray(h, J) && J.push(h)
                      }
                      if ((e = d[1].match(/(rgba[\s+]?\([\s+]?\d+[\s+]?,[\s+]?\d+[\s+]?,[\s+]?\d+[\s+]?,[\s+]?[\d|\.]+[\s+]?\))/gi)) && 0 < e.length) for (f = 0; f < e.length; f++) g = e[f],
                        h = rgb2hex(g),
                      h != g && (a = a.replace(g, h), jQuery(this).attr("style", a)),
                      -1 == jQuery.inArray(h, J) && J.push(h);
                      if ((e = d[1].match(/#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/gi)) && 0 < e.length) for (f = 0; f < e.length; f++) g = e[f],
                        h = rgb2hex(g),
                      h != g && (a = a.replace(g, h), jQuery(this).attr("style", a)),
                      -1 == jQuery.inArray(h, J) && J.push(h);
                      if ((e = d[1].match(/#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})[\s|,]/gi)) && 0 < e.length) for (f = 0; f < e.length; f++) g = e[f].replace(/[\s|,]/g, ""),
                        h = rgb2hex(g),
                      h != g && (a = a.replace(g, h), jQuery(this).attr("style", a)),
                      -1 == jQuery.inArray(h, J) && J.push(h)
                    }
                  }
                });
                q.find(".colors").empty();
                for (h in J) q.find(".colors").append('<input readonly class="styColorPicker" value="' + J[h] + '" data-curlor="' + J[h] + '" style="background:' + J[h] + ';"/>');
                a = q.find(".styColorPicker");
                q.find(".styColorPicker").click(function () {
                  q.find(".styColorPicker.active").removeClass("active");
                  jQuery(this).addClass("active")
                });
                d.current_active_135item.attr("data-color") && (e = d.current_active_135item.attr("data-color"), jQuery("#custom-color-text").val(e).css("background-color", e));
                jQuery(".cp-app").remove();
                e = [];
                if (window.fav_colors) for (h in window.fav_colors) window.fav_colors[h] = hex2rgb(window.fav_colors[h]),
                  0 <= fav_colors[h].indexOf("rgb(") ? e[e.length] = window.fav_colors[h].replace("rgb(", "rgba(").replace(")", ",1)") : e[e.length] = window.fav_colors[h];
                var H;
                a.hover(function () {
                  var a = jQuery(this).val(),
                    b = "rgba(243,244,24" + Math.floor(10 * Math.random()) + ",0.1" + Math.floor(1E3 * Math.random() + 1) + ")";
                  replaceStyleColor(jQuery(g), a, b);
                  setTimeout(function () {
                    replaceStyleColor(jQuery(g), b, a)
                  }, 300);
                  H = setInterval(function () {
                    replaceStyleColor(jQuery(g), a, b);
                    setTimeout(function () {
                      replaceStyleColor(jQuery(g), b, a)
                    }, 300)
                  }, 1E3)
                }, function () {
                  clearInterval(H)
                });
                $.fn.colorPicker && a.colorPicker({
                  customBG: "#222222",
                  size: 2,
                  multipleInstances: !1,
                  memoryColors: "'" + e.join("','") + "'",
                  appenTo: "body",
                  mode: "hsv-h",
                  actionCallback: function (a, b) {
                    if (-1 != jQuery.inArray(b, "changeXYValue changeZValue changeInputValue shiftColor setSavedColor changeOpacityValue fromMemory".split(" ")) && (a = jQuery(this.input).data("curlor"), b = this.input.value, a != b)) {
                      d.undoManger.save();
                      var c = jQuery(g);
                      "undefined" != typeof window.replace_full_color && window.replace_full_color && (c = jQuery(d.document));
                      replaceStyleColor(c, a, b);
                      jQuery(this.input).data("curlor", b)
                    }
                  },
                  init: function (a, b) {}
                });
                if ("undefined" == typeof ZeroClipboard) q.find(".copy").remove(),
                  q.find(".cut").remove();
                else {
                  var I = new ZeroClipboard(q.find(".copy"));
                  I.on("ready", function (a) {
                    I.on("copy", function (a) {
                      jQuery(d.current_active_135item).find(".tool-border").remove();
                      jQuery(d.current_active_135item).removeClass("active");
                      a.clipboardData.setData("text/html", d.current_active_135item.prop("outerHTML"));
                      window.showSuccessMessage("\u6837\u5f0f\u5df2\u7ecf\u6210\u529f\u590d\u5236\uff0c\u4f7f\u7528 Ctrl+V \u8fdb\u884c\u7c98\u8d34")
                    })
                  }).on("error", function (a) {
                    console.log('ZeroClipboard error of type "' + a.name + '": ' + a.message);
                    jQuery(".otf-poptools .copy").click(function (a) {
                      window.showErrorMessage("\u590d\u5236\u51fa\u9519\uff01\u8bf7\u68c0\u67e5\u662f\u5426\u5b89\u88c5flash\u6216\u8005\u9009\u4e2d\u540e\u5728\u7f16\u8f91\u533a\u7528ctrl+c\u8bd5\u8bd5\u5427\uff01<a href='https://www.135editor.com/books/chapter/1/145' target='_blank'>\u70b9\u51fb\u67e5\u770b\u5e2e\u52a9</a>")
                    })
                  });
                  var B = new ZeroClipboard(q.find(".cut"));
                  B.on("ready", function (a) {
                    B.on("copy", function (a) {
                      jQuery(d.current_active_135item).find(".tool-border").remove();
                      jQuery(d.current_active_135item).removeClass("active");
                      a.clipboardData.setData("text/html", d.current_active_135item.prop("outerHTML"));
                      jQuery(d.current_active_135item).remove();
                      window.showSuccessMessage("\u6837\u5f0f\u5df2\u7ecf\u6210\u529f\u526a\u5207\uff0c\u4f7f\u7528 Ctrl+V \u8fdb\u884c\u7c98\u8d34")
                    })
                  }).on("error", function (a) {
                    console.log('ZeroClipboard error of type "' + a.name + '": ' + a.message);
                    jQuery(".otf-poptools .cut").click(function (a) {
                      window.showErrorMessage("\u526a\u5207\u51fa\u9519\uff01\u8bf7\u68c0\u67e5\u662f\u5426\u5b89\u88c5flash\u3002<a href='https://www.135editor.com/books/chapter/1/145' target='_blank'>\u70b9\u51fb\u67e5\u770b\u5e2e\u52a9</a>")
                    })
                  })
                }
              }
            } else clean_135helper(),
            d.current_active_135item && (d.current_active_135item = null)
          }
        }
      })
    };
    UE.registerUI("135editor", function (d, b) {
      var c = new UE.ui.Dialog({
        iframeUrl: "135editor/135EditorDialogPage.html",
        editor: d,
        name: b,
        title: "135\u7f16\u8f91\u5668"
      });
      c.fullscreen = !0;
      c.draggable = !1;
      return new UE.ui.Button({
        name: "dialogbutton" + b,
        className: "edui-for-135editor",
        title: "135\u7f16\u8f91\u5668",
        onclick: function () {
          c.render();
          c.open()
        }
      })
    });
    UE.plugin.register('message', function () {
      function b() {
        if (a && h.ui) {
          var b = h.ui.getDom("toolbarbox");
          b && (a.style.top = b.offsetHeight + 3 + "px");
          a.style.zIndex = Math.max(h.options.zIndex, h.iframe.style.zIndex) + 1
        }
      }
      var c = r.editor.ui.Message,
        a, f = [],
        h = this;
      return {
        bindEvents: {
          ready: function () {
            a = document.getElementById(h.ui.id + "_message_holder");
            b();
            setTimeout(function () {
              b()
            }, 500)
          },
          showmessage: function (d, g) {
            g = p.isString(g) ? {
              content: g
            } : g;
            d = new c({
              timeout: g.timeout,
              type: g.type,
              content: g.content,
              keepshow: g.keepshow,
              editor: h
            });
            var e = g.id || "msg_" + (+new Date).toString(36);
            d.render(a);
            f[e] = d;
            d.reset(g);
            b();
            return e
          },
          updatemessage: function (b, c, d) {
            d = p.isString(d) ? {
              content: d
            } : d;
            b = f[c];
            b.render(a);
            b && b.reset(d)
          },
          hidemessage: function (a, b) {
            (a = f[b]) && a.hide()
          }
        }
      }
    });
    UE.registerUI("message", function (d) {
      function b() {
        if (a && h.ui) {
          var b = h.ui.getDom("toolbarbox");
          b && (a.style.top = b.offsetHeight + 3 + "px");
          a.style.zIndex = Math.max(h.options.zIndex, h.iframe.style.zIndex) + 1
        }
      }
      var c = r.editor.ui.Message,
        a, f = [],
        h = d;
      h.addListener("ready", function () {
        a = document.getElementById(h.ui.id + "_message_holder");
        b();
        setTimeout(function () {
          b()
        }, 500)
      });
      h.addListener("showmessage", function (d, g) {
        g = p.isString(g) ? {
          content: g
        } : g;
        d = new c({
          timeout: g.timeout,
          type: g.type,
          content: g.content,
          keepshow: g.keepshow,
          editor: h
        });
        var e = g.id || "msg_" + (+new Date).toString(36);
        d.render(a);
        f[e] = d;
        d.reset(g);
        b();
        return e
      });
      h.addListener("updatemessage", function (b, c, d) {
        d = p.isString(d) ? {
          content: d
        } : d;
        b = f[c];
        b.render(a);
        b && b.reset(d)
      });
      h.addListener("hidemessage", function (a, b) {
        (a = f[b]) && a.hide()
      })
    });
    UE.registerUI("autosave", function (d) {
      var b = null,
        c = null;
      d.on("afterautosave", function () {
        clearTimeout(b);
        b = setTimeout(function () {
          c && d.trigger("hidemessage", c);
          c = d.trigger("showmessage", {
            content: d.getLang("autosave.success"),
            timeout: 2E3
          })
        }, 2E3)
      })
    });
   
    let registerUIList = [
      {
        uiName: 'insertimage1',
        className: 'edui-for-insertimage',
        title: '插入图片'
      },{
        uiName: 'insertvideo1',
        className: 'edui-for-insertvideo',
        title: '插入视频'
      },{
        uiName: 'xiumi-connect',
        className: 'edui-for-xiumi-connect',
        title: '秀米'
      },{
        uiName: 'trace',
        className: 'edui-for-trace',
        title: '修改痕迹'
      },{
        uiName: 'searchreplace1',
        className: 'edui-for-searchreplace',
        title: '替换查询'
      },{
        uiName: 'link1',
        className: 'edui-for-link',
        title: '超链接'
      },{
        uiName: 'anchor1',
        className: 'edui-for-anchor',
        title: '锚点'
      },{
        uiName: 'insertframe1',
        className: 'edui-for-insertframe',
        title: '插入Iframe'
      },{
        uiName: 'help1',
        className: 'edui-for-help',
        title: '帮助'
      },{
        uiName: 'spechars1',
        className: 'edui-for-spechars',
        title: '特殊字符'
      }
    ]
    // 自定义ui按钮
    registerUIList.forEach(uiBtn => {
      if(uiBtn.uiName !== 'xiumi-connect')
      UE.registerUI(uiBtn.uiName, function(editor, uiName) {
        //创建一个button
        var btn = new UE.ui.Button({
          //按钮的名字
          name: uiName,
          className: uiBtn.className,
          //提示
          title: uiBtn.title,
          //添加额外样式，指定icon图标，这里默认使用一个重复的icon
          // cssRules: 'background-position: -500px 0;',
          //点击时执行的命令
          onclick: function() {
            //这里可以不用执行命令,做你自己的操作也可
            editor.execCommand(uiName);
          }
        });
        //当点到编辑内容上时，按钮要做的状态反射
        editor.addListener('selectionchange', function() {
          var state = editor.queryCommandState(uiName);
          if (state == -1) {
            btn.setDisabled(true);
            btn.setChecked(false);
          } else {
            btn.setDisabled(false);
            btn.setChecked(state);
          }
        });
        //因为你是添加button,所以需要返回这个button
        return btn;
      });
      else
      UE.registerUI('xiumi-connect', function (editor, uiName) {
        var btn = new UE.ui.Button({
            name   : 'xiumi-connect',
            title  : '秀米',
            onclick: function () {
              
              var dialog = new UE.ui.Dialog({
                  iframeUrl: editor.options.UEDITOR_HOME_URL + "./xiumi-ue-dialog-v5.html",
                  editor   : editor,
                  name     : 'xiumi-connect',
                  title    : "秀米图文消息助手",
                  cssRules : "width: " + (window.innerWidth - 60) + "px;" + "height: " + (window.innerHeight - 60) + "px;",
              });
        //        window.addEventListener('message', function (event) {
        //     // console.log("Received message from xiumi, origin: %o %o", event.origin, xiumi_url);
        //     if (event.origin == "https://xiumi.us") {
        
   
        //   window.UE.inserthtml1(event.data)
         
        //         dialog.close();
        //     }
        // }, false);
              dialog.render();
              dialog.open();
            }
        });

        return btn;
      });
    })
  })();
}).call(this)
//# sourceMappingURL=ueditor.all.min.js.map
