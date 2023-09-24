/*! For license information please see codemirror.js.LICENSE.txt */
(() => {
	var t,
		e = {
			152: function (t) {
				var e;
				(e = function () {
					return (function () {
						var t = {
								686: function (t, e, i) {
									"use strict";
									i.d(e, {
										default: function () {
											return v;
										}
									});
									var n = i(279),
										r = i.n(n),
										s = i(370),
										o = i.n(s),
										a = i(817),
										l = i.n(a);
									function h(t) {
										try {
											return document.execCommand(t);
										} catch (t) {
											return !1;
										}
									}
									var c = function (t) {
											var e = l()(t);
											return h("cut"), e;
										},
										O = function (t, e) {
											var i = (function (t) {
												var e =
														"rtl" ===
														document.documentElement.getAttribute("dir"),
													i = document.createElement("textarea");
												(i.style.fontSize = "12pt"),
													(i.style.border = "0"),
													(i.style.padding = "0"),
													(i.style.margin = "0"),
													(i.style.position = "absolute"),
													(i.style[e ? "right" : "left"] = "-9999px");
												var n =
													window.pageYOffset ||
													document.documentElement.scrollTop;
												return (
													(i.style.top = "".concat(n, "px")),
													i.setAttribute("readonly", ""),
													(i.value = t),
													i
												);
											})(t);
											e.container.appendChild(i);
											var n = l()(i);
											return h("copy"), i.remove(), n;
										},
										u = function (t) {
											var e =
													arguments.length > 1 && void 0 !== arguments[1]
														? arguments[1]
														: { container: document.body },
												i = "";
											return (
												"string" == typeof t
													? (i = O(t, e))
													: t instanceof HTMLInputElement &&
													  ![
															"text",
															"search",
															"url",
															"tel",
															"password"
													  ].includes(null == t ? void 0 : t.type)
													? (i = O(t.value, e))
													: ((i = l()(t)), h("copy")),
												i
											);
										};
									function f(t) {
										return (
											(f =
												"function" == typeof Symbol &&
												"symbol" == typeof Symbol.iterator
													? function (t) {
															return typeof t;
													  }
													: function (t) {
															return t &&
																"function" == typeof Symbol &&
																t.constructor === Symbol &&
																t !== Symbol.prototype
																? "symbol"
																: typeof t;
													  }),
											f(t)
										);
									}
									function d(t) {
										return (
											(d =
												"function" == typeof Symbol &&
												"symbol" == typeof Symbol.iterator
													? function (t) {
															return typeof t;
													  }
													: function (t) {
															return t &&
																"function" == typeof Symbol &&
																t.constructor === Symbol &&
																t !== Symbol.prototype
																? "symbol"
																: typeof t;
													  }),
											d(t)
										);
									}
									function p(t, e) {
										for (var i = 0; i < e.length; i++) {
											var n = e[i];
											(n.enumerable = n.enumerable || !1),
												(n.configurable = !0),
												"value" in n && (n.writable = !0),
												Object.defineProperty(t, n.key, n);
										}
									}
									function g(t, e) {
										return (
											(g =
												Object.setPrototypeOf ||
												function (t, e) {
													return (t.__proto__ = e), t;
												}),
											g(t, e)
										);
									}
									function m(t) {
										return (
											(m = Object.setPrototypeOf
												? Object.getPrototypeOf
												: function (t) {
														return t.__proto__ || Object.getPrototypeOf(t);
												  }),
											m(t)
										);
									}
									function S(t, e) {
										var i = "data-clipboard-".concat(t);
										if (e.hasAttribute(i)) return e.getAttribute(i);
									}
									var Q = (function (t) {
											!(function (t, e) {
												if ("function" != typeof e && null !== e)
													throw new TypeError(
														"Super expression must either be null or a function"
													);
												(t.prototype = Object.create(e && e.prototype, {
													constructor: {
														value: t,
														writable: !0,
														configurable: !0
													}
												})),
													e && g(t, e);
											})(l, t);
											var e,
												i,
												n,
												r,
												s,
												a =
													((r = l),
													(s = (function () {
														if (
															"undefined" == typeof Reflect ||
															!Reflect.construct
														)
															return !1;
														if (Reflect.construct.sham) return !1;
														if ("function" == typeof Proxy) return !0;
														try {
															return (
																Date.prototype.toString.call(
																	Reflect.construct(Date, [], function () {})
																),
																!0
															);
														} catch (t) {
															return !1;
														}
													})()),
													function () {
														var t,
															e = m(r);
														if (s) {
															var i = m(this).constructor;
															t = Reflect.construct(e, arguments, i);
														} else t = e.apply(this, arguments);
														return (function (t, e) {
															return !e ||
																("object" !== d(e) && "function" != typeof e)
																? (function (t) {
																		if (void 0 === t)
																			throw new ReferenceError(
																				"this hasn't been initialised - super() hasn't been called"
																			);
																		return t;
																  })(t)
																: e;
														})(this, t);
													});
											function l(t, e) {
												var i;
												return (
													(function (t, e) {
														if (!(t instanceof e))
															throw new TypeError(
																"Cannot call a class as a function"
															);
													})(this, l),
													(i = a.call(this)).resolveOptions(e),
													i.listenClick(t),
													i
												);
											}
											return (
												(e = l),
												(i = [
													{
														key: "resolveOptions",
														value: function () {
															var t =
																arguments.length > 0 && void 0 !== arguments[0]
																	? arguments[0]
																	: {};
															(this.action =
																"function" == typeof t.action
																	? t.action
																	: this.defaultAction),
																(this.target =
																	"function" == typeof t.target
																		? t.target
																		: this.defaultTarget),
																(this.text =
																	"function" == typeof t.text
																		? t.text
																		: this.defaultText),
																(this.container =
																	"object" === d(t.container)
																		? t.container
																		: document.body);
														}
													},
													{
														key: "listenClick",
														value: function (t) {
															var e = this;
															this.listener = o()(t, "click", function (t) {
																return e.onClick(t);
															});
														}
													},
													{
														key: "onClick",
														value: function (t) {
															var e = t.delegateTarget || t.currentTarget,
																i = this.action(e) || "copy",
																n = (function () {
																	var t =
																			arguments.length > 0 &&
																			void 0 !== arguments[0]
																				? arguments[0]
																				: {},
																		e = t.action,
																		i = void 0 === e ? "copy" : e,
																		n = t.container,
																		r = t.target,
																		s = t.text;
																	if ("copy" !== i && "cut" !== i)
																		throw new Error(
																			'Invalid "action" value, use either "copy" or "cut"'
																		);
																	if (void 0 !== r) {
																		if (
																			!r ||
																			"object" !== f(r) ||
																			1 !== r.nodeType
																		)
																			throw new Error(
																				'Invalid "target" value, use a valid Element'
																			);
																		if (
																			"copy" === i &&
																			r.hasAttribute("disabled")
																		)
																			throw new Error(
																				'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
																			);
																		if (
																			"cut" === i &&
																			(r.hasAttribute("readonly") ||
																				r.hasAttribute("disabled"))
																		)
																			throw new Error(
																				'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
																			);
																	}
																	return s
																		? u(s, { container: n })
																		: r
																		? "cut" === i
																			? c(r)
																			: u(r, { container: n })
																		: void 0;
																})({
																	action: i,
																	container: this.container,
																	target: this.target(e),
																	text: this.text(e)
																});
															this.emit(n ? "success" : "error", {
																action: i,
																text: n,
																trigger: e,
																clearSelection: function () {
																	e && e.focus(),
																		window.getSelection().removeAllRanges();
																}
															});
														}
													},
													{
														key: "defaultAction",
														value: function (t) {
															return S("action", t);
														}
													},
													{
														key: "defaultTarget",
														value: function (t) {
															var e = S("target", t);
															if (e) return document.querySelector(e);
														}
													},
													{
														key: "defaultText",
														value: function (t) {
															return S("text", t);
														}
													},
													{
														key: "destroy",
														value: function () {
															this.listener.destroy();
														}
													}
												]),
												(n = [
													{
														key: "copy",
														value: function (t) {
															var e =
																arguments.length > 1 && void 0 !== arguments[1]
																	? arguments[1]
																	: { container: document.body };
															return u(t, e);
														}
													},
													{
														key: "cut",
														value: function (t) {
															return c(t);
														}
													},
													{
														key: "isSupported",
														value: function () {
															var t =
																	arguments.length > 0 &&
																	void 0 !== arguments[0]
																		? arguments[0]
																		: ["copy", "cut"],
																e = "string" == typeof t ? [t] : t,
																i = !!document.queryCommandSupported;
															return (
																e.forEach(function (t) {
																	i = i && !!document.queryCommandSupported(t);
																}),
																i
															);
														}
													}
												]),
												i && p(e.prototype, i),
												n && p(e, n),
												l
											);
										})(r()),
										v = Q;
								},
								828: function (t) {
									if (
										"undefined" != typeof Element &&
										!Element.prototype.matches
									) {
										var e = Element.prototype;
										e.matches =
											e.matchesSelector ||
											e.mozMatchesSelector ||
											e.msMatchesSelector ||
											e.oMatchesSelector ||
											e.webkitMatchesSelector;
									}
									t.exports = function (t, e) {
										for (; t && 9 !== t.nodeType; ) {
											if ("function" == typeof t.matches && t.matches(e))
												return t;
											t = t.parentNode;
										}
									};
								},
								438: function (t, e, i) {
									var n = i(828);
									function r(t, e, i, n, r) {
										var o = s.apply(this, arguments);
										return (
											t.addEventListener(i, o, r),
											{
												destroy: function () {
													t.removeEventListener(i, o, r);
												}
											}
										);
									}
									function s(t, e, i, r) {
										return function (i) {
											(i.delegateTarget = n(i.target, e)),
												i.delegateTarget && r.call(t, i);
										};
									}
									t.exports = function (t, e, i, n, s) {
										return "function" == typeof t.addEventListener
											? r.apply(null, arguments)
											: "function" == typeof i
											? r.bind(null, document).apply(null, arguments)
											: ("string" == typeof t &&
													(t = document.querySelectorAll(t)),
											  Array.prototype.map.call(t, function (t) {
													return r(t, e, i, n, s);
											  }));
									};
								},
								879: function (t, e) {
									(e.node = function (t) {
										return (
											void 0 !== t &&
											t instanceof HTMLElement &&
											1 === t.nodeType
										);
									}),
										(e.nodeList = function (t) {
											var i = Object.prototype.toString.call(t);
											return (
												void 0 !== t &&
												("[object NodeList]" === i ||
													"[object HTMLCollection]" === i) &&
												"length" in t &&
												(0 === t.length || e.node(t[0]))
											);
										}),
										(e.string = function (t) {
											return "string" == typeof t || t instanceof String;
										}),
										(e.fn = function (t) {
											return (
												"[object Function]" ===
												Object.prototype.toString.call(t)
											);
										});
								},
								370: function (t, e, i) {
									var n = i(879),
										r = i(438);
									t.exports = function (t, e, i) {
										if (!t && !e && !i)
											throw new Error("Missing required arguments");
										if (!n.string(e))
											throw new TypeError("Second argument must be a String");
										if (!n.fn(i))
											throw new TypeError("Third argument must be a Function");
										if (n.node(t))
											return (function (t, e, i) {
												return (
													t.addEventListener(e, i),
													{
														destroy: function () {
															t.removeEventListener(e, i);
														}
													}
												);
											})(t, e, i);
										if (n.nodeList(t))
											return (function (t, e, i) {
												return (
													Array.prototype.forEach.call(t, function (t) {
														t.addEventListener(e, i);
													}),
													{
														destroy: function () {
															Array.prototype.forEach.call(t, function (t) {
																t.removeEventListener(e, i);
															});
														}
													}
												);
											})(t, e, i);
										if (n.string(t))
											return (function (t, e, i) {
												return r(document.body, t, e, i);
											})(t, e, i);
										throw new TypeError(
											"First argument must be a String, HTMLElement, HTMLCollection, or NodeList"
										);
									};
								},
								817: function (t) {
									t.exports = function (t) {
										var e;
										if ("SELECT" === t.nodeName) t.focus(), (e = t.value);
										else if (
											"INPUT" === t.nodeName ||
											"TEXTAREA" === t.nodeName
										) {
											var i = t.hasAttribute("readonly");
											i || t.setAttribute("readonly", ""),
												t.select(),
												t.setSelectionRange(0, t.value.length),
												i || t.removeAttribute("readonly"),
												(e = t.value);
										} else {
											t.hasAttribute("contenteditable") && t.focus();
											var n = window.getSelection(),
												r = document.createRange();
											r.selectNodeContents(t),
												n.removeAllRanges(),
												n.addRange(r),
												(e = n.toString());
										}
										return e;
									};
								},
								279: function (t) {
									function e() {}
									(e.prototype = {
										on: function (t, e, i) {
											var n = this.e || (this.e = {});
											return (
												(n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this
											);
										},
										once: function (t, e, i) {
											var n = this;
											function r() {
												n.off(t, r), e.apply(i, arguments);
											}
											return (r._ = e), this.on(t, r, i);
										},
										emit: function (t) {
											for (
												var e = [].slice.call(arguments, 1),
													i = ((this.e || (this.e = {}))[t] || []).slice(),
													n = 0,
													r = i.length;
												n < r;
												n++
											)
												i[n].fn.apply(i[n].ctx, e);
											return this;
										},
										off: function (t, e) {
											var i = this.e || (this.e = {}),
												n = i[t],
												r = [];
											if (n && e)
												for (var s = 0, o = n.length; s < o; s++)
													n[s].fn !== e && n[s].fn._ !== e && r.push(n[s]);
											return r.length ? (i[t] = r) : delete i[t], this;
										}
									}),
										(t.exports = e),
										(t.exports.TinyEmitter = e);
								}
							},
							e = {};
						function i(n) {
							if (e[n]) return e[n].exports;
							var r = (e[n] = { exports: {} });
							return t[n](r, r.exports, i), r.exports;
						}
						return (
							(i.n = function (t) {
								var e =
									t && t.__esModule
										? function () {
												return t.default;
										  }
										: function () {
												return t;
										  };
								return i.d(e, { a: e }), e;
							}),
							(i.d = function (t, e) {
								for (var n in e)
									i.o(e, n) &&
										!i.o(t, n) &&
										Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
							}),
							(i.o = function (t, e) {
								return Object.prototype.hasOwnProperty.call(t, e);
							}),
							i(686)
						);
					})().default;
				}),
					(t.exports = e());
			},
			853: (t, e, i) => {
				"use strict";
				i.d(e, { u: () => s, y: () => o });
				var n = i(935),
					r = i(152);
				function s() {
					new r(".copy", {
						target: function (t) {
							const e = t.dataset.clipboardTarget;
							return e
								? document.querySelector(e)
								: n.ju(t).getElementsByTagName("code")[0];
						}
					}).on("success", (t) => {
						const e = document.getElementById("user-message");
						e.classList.add("show"),
							e.setAttribute("aria-hidden", !1),
							(function (t, e) {
								const i = t.trigger,
									n = i.offsetParent.offsetTop + i.clientHeight + 10 + "px",
									r = i.offsetLeft + "px";
								(e.style.top = n), (e.style.left = r);
							})(t, e),
							window.setTimeout(() => {
								e.classList.remove("show"), e.setAttribute("aria-hidden", !0);
							}, 1e3),
							t.clearSelection();
					});
				}
				function o(t) {
					const e = t.querySelector(".copy"),
						i = document.querySelectorAll(".copy");
					for (let t = 0, e = i.length; t < e; t++)
						i[t].classList.add("hidden"), i[t].setAttribute("aria-hidden", !0);
					e.classList.remove("hidden"), e.setAttribute("aria-hidden", !1);
				}
			},
			117: (t, e, i) => {
				"use strict";
				i.d(e, {
					kt: () => qf,
					Q_: () => Mf,
					n8: () => Yf,
					LV: () => _f,
					si: () => Wf,
					tc: () => Rf
				});
				class n {
					constructor() {}
					lineAt(t) {
						if (t < 0 || t > this.length)
							throw new RangeError(
								`Invalid position ${t} in document of length ${this.length}`
							);
						return this.lineInner(t, !1, 1, 0);
					}
					line(t) {
						if (t < 1 || t > this.lines)
							throw new RangeError(
								`Invalid line number ${t} in ${this.lines}-line document`
							);
						return this.lineInner(t, !0, 1, 0);
					}
					replace(t, e, i) {
						let n = [];
						return (
							this.decompose(0, t, n, 2),
							i.length && i.decompose(0, i.length, n, 3),
							this.decompose(e, this.length, n, 1),
							s.from(n, this.length - (e - t) + i.length)
						);
					}
					append(t) {
						return this.replace(this.length, this.length, t);
					}
					slice(t, e = this.length) {
						let i = [];
						return this.decompose(t, e, i, 0), s.from(i, e - t);
					}
					eq(t) {
						if (t == this) return !0;
						if (t.length != this.length || t.lines != this.lines) return !1;
						let e = this.scanIdentical(t, 1),
							i = this.length - this.scanIdentical(t, -1),
							n = new l(this),
							r = new l(t);
						for (let t = e, s = e; ; ) {
							if (
								(n.next(t),
								r.next(t),
								(t = 0),
								n.lineBreak != r.lineBreak ||
									n.done != r.done ||
									n.value != r.value)
							)
								return !1;
							if (((s += n.value.length), n.done || s >= i)) return !0;
						}
					}
					iter(t = 1) {
						return new l(this, t);
					}
					iterRange(t, e = this.length) {
						return new h(this, t, e);
					}
					iterLines(t, e) {
						let i;
						if (null == t) i = this.iter();
						else {
							null == e && (e = this.lines + 1);
							let n = this.line(t).from;
							i = this.iterRange(
								n,
								Math.max(
									n,
									e == this.lines + 1
										? this.length
										: e <= 1
										? 0
										: this.line(e - 1).to
								)
							);
						}
						return new c(i);
					}
					toString() {
						return this.sliceString(0);
					}
					toJSON() {
						let t = [];
						return this.flatten(t), t;
					}
					static of(t) {
						if (0 == t.length)
							throw new RangeError("A document must have at least one line");
						return 1 != t.length || t[0]
							? t.length <= 32
								? new r(t)
								: s.from(r.split(t, []))
							: n.empty;
					}
				}
				class r extends n {
					constructor(
						t,
						e = (function (t) {
							let e = -1;
							for (let i of t) e += i.length + 1;
							return e;
						})(t)
					) {
						super(), (this.text = t), (this.length = e);
					}
					get lines() {
						return this.text.length;
					}
					get children() {
						return null;
					}
					lineInner(t, e, i, n) {
						for (let r = 0; ; r++) {
							let s = this.text[r],
								o = n + s.length;
							if ((e ? i : o) >= t) return new O(n, o, i, s);
							(n = o + 1), i++;
						}
					}
					decompose(t, e, i, n) {
						let s =
							t <= 0 && e >= this.length
								? this
								: new r(
										a(this.text, t, e),
										Math.min(e, this.length) - Math.max(0, t)
								  );
						if (1 & n) {
							let t = i.pop(),
								e = o(s.text, t.text.slice(), 0, s.length);
							if (e.length <= 32) i.push(new r(e, t.length + s.length));
							else {
								let t = e.length >> 1;
								i.push(new r(e.slice(0, t)), new r(e.slice(t)));
							}
						} else i.push(s);
					}
					replace(t, e, i) {
						if (!(i instanceof r)) return super.replace(t, e, i);
						let n = o(this.text, o(i.text, a(this.text, 0, t)), e),
							l = this.length + i.length - (e - t);
						return n.length <= 32 ? new r(n, l) : s.from(r.split(n, []), l);
					}
					sliceString(t, e = this.length, i = "\n") {
						let n = "";
						for (let r = 0, s = 0; r <= e && s < this.text.length; s++) {
							let o = this.text[s],
								a = r + o.length;
							r > t && s && (n += i),
								t < a && e > r && (n += o.slice(Math.max(0, t - r), e - r)),
								(r = a + 1);
						}
						return n;
					}
					flatten(t) {
						for (let e of this.text) t.push(e);
					}
					scanIdentical() {
						return 0;
					}
					static split(t, e) {
						let i = [],
							n = -1;
						for (let s of t)
							i.push(s),
								(n += s.length + 1),
								32 == i.length && (e.push(new r(i, n)), (i = []), (n = -1));
						return n > -1 && e.push(new r(i, n)), e;
					}
				}
				class s extends n {
					constructor(t, e) {
						super(), (this.children = t), (this.length = e), (this.lines = 0);
						for (let e of t) this.lines += e.lines;
					}
					lineInner(t, e, i, n) {
						for (let r = 0; ; r++) {
							let s = this.children[r],
								o = n + s.length,
								a = i + s.lines - 1;
							if ((e ? a : o) >= t) return s.lineInner(t, e, i, n);
							(n = o + 1), (i = a + 1);
						}
					}
					decompose(t, e, i, n) {
						for (let r = 0, s = 0; s <= e && r < this.children.length; r++) {
							let o = this.children[r],
								a = s + o.length;
							if (t <= a && e >= s) {
								let r = n & ((s <= t ? 1 : 0) | (a >= e ? 2 : 0));
								s >= t && a <= e && !r
									? i.push(o)
									: o.decompose(t - s, e - s, i, r);
							}
							s = a + 1;
						}
					}
					replace(t, e, i) {
						if (i.lines < this.lines)
							for (let n = 0, r = 0; n < this.children.length; n++) {
								let o = this.children[n],
									a = r + o.length;
								if (t >= r && e <= a) {
									let l = o.replace(t - r, e - r, i),
										h = this.lines - o.lines + l.lines;
									if (l.lines < h >> 4 && l.lines > h >> 6) {
										let r = this.children.slice();
										return (
											(r[n] = l), new s(r, this.length - (e - t) + i.length)
										);
									}
									return super.replace(r, a, l);
								}
								r = a + 1;
							}
						return super.replace(t, e, i);
					}
					sliceString(t, e = this.length, i = "\n") {
						let n = "";
						for (let r = 0, s = 0; r < this.children.length && s <= e; r++) {
							let o = this.children[r],
								a = s + o.length;
							s > t && r && (n += i),
								t < a && e > s && (n += o.sliceString(t - s, e - s, i)),
								(s = a + 1);
						}
						return n;
					}
					flatten(t) {
						for (let e of this.children) e.flatten(t);
					}
					scanIdentical(t, e) {
						if (!(t instanceof s)) return 0;
						let i = 0,
							[n, r, o, a] =
								e > 0
									? [0, 0, this.children.length, t.children.length]
									: [this.children.length - 1, t.children.length - 1, -1, -1];
						for (; ; n += e, r += e) {
							if (n == o || r == a) return i;
							let s = this.children[n],
								l = t.children[r];
							if (s != l) return i + s.scanIdentical(l, e);
							i += s.length + 1;
						}
					}
					static from(t, e = t.reduce((t, e) => t + e.length + 1, -1)) {
						let i = 0;
						for (let e of t) i += e.lines;
						if (i < 32) {
							let i = [];
							for (let e of t) e.flatten(i);
							return new r(i, e);
						}
						let n = Math.max(32, i >> 5),
							o = n << 1,
							a = n >> 1,
							l = [],
							h = 0,
							c = -1,
							O = [];
						function u(t) {
							let e;
							if (t.lines > o && t instanceof s) for (let e of t.children) u(e);
							else
								t.lines > a && (h > a || !h)
									? (f(), l.push(t))
									: t instanceof r &&
									  h &&
									  (e = O[O.length - 1]) instanceof r &&
									  t.lines + e.lines <= 32
									? ((h += t.lines),
									  (c += t.length + 1),
									  (O[O.length - 1] = new r(
											e.text.concat(t.text),
											e.length + 1 + t.length
									  )))
									: (h + t.lines > n && f(),
									  (h += t.lines),
									  (c += t.length + 1),
									  O.push(t));
						}
						function f() {
							0 != h &&
								(l.push(1 == O.length ? O[0] : s.from(O, c)),
								(c = -1),
								(h = O.length = 0));
						}
						for (let e of t) u(e);
						return f(), 1 == l.length ? l[0] : new s(l, e);
					}
				}
				function o(t, e, i = 0, n = 1e9) {
					for (let r = 0, s = 0, o = !0; s < t.length && r <= n; s++) {
						let a = t[s],
							l = r + a.length;
						l >= i &&
							(l > n && (a = a.slice(0, n - r)),
							r < i && (a = a.slice(i - r)),
							o ? ((e[e.length - 1] += a), (o = !1)) : e.push(a)),
							(r = l + 1);
					}
					return e;
				}
				function a(t, e, i) {
					return o(t, [""], e, i);
				}
				n.empty = new r([""], 0);
				class l {
					constructor(t, e = 1) {
						(this.dir = e),
							(this.done = !1),
							(this.lineBreak = !1),
							(this.value = ""),
							(this.nodes = [t]),
							(this.offsets = [
								e > 0
									? 1
									: (t instanceof r ? t.text.length : t.children.length) << 1
							]);
					}
					nextInner(t, e) {
						for (this.done = this.lineBreak = !1; ; ) {
							let i = this.nodes.length - 1,
								n = this.nodes[i],
								s = this.offsets[i],
								o = s >> 1,
								a = n instanceof r ? n.text.length : n.children.length;
							if (o == (e > 0 ? a : 0)) {
								if (0 == i) return (this.done = !0), (this.value = ""), this;
								e > 0 && this.offsets[i - 1]++,
									this.nodes.pop(),
									this.offsets.pop();
							} else if ((1 & s) == (e > 0 ? 0 : 1)) {
								if (((this.offsets[i] += e), 0 == t))
									return (this.lineBreak = !0), (this.value = "\n"), this;
								t--;
							} else if (n instanceof r) {
								let r = n.text[o + (e < 0 ? -1 : 0)];
								if (((this.offsets[i] += e), r.length > Math.max(0, t)))
									return (
										(this.value =
											0 == t
												? r
												: e > 0
												? r.slice(t)
												: r.slice(0, r.length - t)),
										this
									);
								t -= r.length;
							} else {
								let s = n.children[o + (e < 0 ? -1 : 0)];
								t > s.length
									? ((t -= s.length), (this.offsets[i] += e))
									: (e < 0 && this.offsets[i]--,
									  this.nodes.push(s),
									  this.offsets.push(
											e > 0
												? 1
												: (s instanceof r
														? s.text.length
														: s.children.length) << 1
									  ));
							}
						}
					}
					next(t = 0) {
						return (
							t < 0 && (this.nextInner(-t, -this.dir), (t = this.value.length)),
							this.nextInner(t, this.dir)
						);
					}
				}
				class h {
					constructor(t, e, i) {
						(this.value = ""),
							(this.done = !1),
							(this.cursor = new l(t, e > i ? -1 : 1)),
							(this.pos = e > i ? t.length : 0),
							(this.from = Math.min(e, i)),
							(this.to = Math.max(e, i));
					}
					nextInner(t, e) {
						if (e < 0 ? this.pos <= this.from : this.pos >= this.to)
							return (this.value = ""), (this.done = !0), this;
						t += Math.max(0, e < 0 ? this.pos - this.to : this.from - this.pos);
						let i = e < 0 ? this.pos - this.from : this.to - this.pos;
						t > i && (t = i), (i -= t);
						let { value: n } = this.cursor.next(t);
						return (
							(this.pos += (n.length + t) * e),
							(this.value =
								n.length <= i
									? n
									: e < 0
									? n.slice(n.length - i)
									: n.slice(0, i)),
							(this.done = !this.value),
							this
						);
					}
					next(t = 0) {
						return (
							t < 0
								? (t = Math.max(t, this.from - this.pos))
								: t > 0 && (t = Math.min(t, this.to - this.pos)),
							this.nextInner(t, this.cursor.dir)
						);
					}
					get lineBreak() {
						return this.cursor.lineBreak && "" != this.value;
					}
				}
				class c {
					constructor(t) {
						(this.inner = t),
							(this.afterBreak = !0),
							(this.value = ""),
							(this.done = !1);
					}
					next(t = 0) {
						let { done: e, lineBreak: i, value: n } = this.inner.next(t);
						return (
							e
								? ((this.done = !0), (this.value = ""))
								: i
								? this.afterBreak
									? (this.value = "")
									: ((this.afterBreak = !0), this.next())
								: ((this.value = n), (this.afterBreak = !1)),
							this
						);
					}
					get lineBreak() {
						return !1;
					}
				}
				"undefined" != typeof Symbol &&
					((n.prototype[Symbol.iterator] = function () {
						return this.iter();
					}),
					(l.prototype[Symbol.iterator] =
						h.prototype[Symbol.iterator] =
						c.prototype[Symbol.iterator] =
							function () {
								return this;
							}));
				class O {
					constructor(t, e, i, n) {
						(this.from = t), (this.to = e), (this.number = i), (this.text = n);
					}
					get length() {
						return this.to - this.from;
					}
				}
				let u =
					"lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o"
						.split(",")
						.map((t) => (t ? parseInt(t, 36) : 1));
				for (let t = 1; t < u.length; t++) u[t] += u[t - 1];
				function f(t) {
					for (let e = 1; e < u.length; e += 2)
						if (u[e] > t) return u[e - 1] <= t;
					return !1;
				}
				function d(t) {
					return t >= 127462 && t <= 127487;
				}
				const p = 8205;
				function g(t, e, i = !0, n = !0) {
					return (i ? m : S)(t, e, n);
				}
				function m(t, e, i) {
					if (e == t.length) return e;
					e && Q(t.charCodeAt(e)) && v(t.charCodeAt(e - 1)) && e--;
					let n = y(t, e);
					for (e += b(n); e < t.length; ) {
						let r = y(t, e);
						if (n == p || r == p || (i && f(r))) (e += b(r)), (n = r);
						else {
							if (!d(r)) break;
							{
								let i = 0,
									n = e - 2;
								for (; n >= 0 && d(y(t, n)); ) i++, (n -= 2);
								if (i % 2 == 0) break;
								e += 2;
							}
						}
					}
					return e;
				}
				function S(t, e, i) {
					for (; e > 0; ) {
						let n = m(t, e - 2, i);
						if (n < e) return n;
						e--;
					}
					return 0;
				}
				function Q(t) {
					return t >= 56320 && t < 57344;
				}
				function v(t) {
					return t >= 55296 && t < 56320;
				}
				function y(t, e) {
					let i = t.charCodeAt(e);
					if (!v(i) || e + 1 == t.length) return i;
					let n = t.charCodeAt(e + 1);
					return Q(n) ? n - 56320 + ((i - 55296) << 10) + 65536 : i;
				}
				function b(t) {
					return t < 65536 ? 1 : 2;
				}
				const w = /\r\n?|\n/;
				var x = (function (t) {
					return (
						(t[(t.Simple = 0)] = "Simple"),
						(t[(t.TrackDel = 1)] = "TrackDel"),
						(t[(t.TrackBefore = 2)] = "TrackBefore"),
						(t[(t.TrackAfter = 3)] = "TrackAfter"),
						t
					);
				})(x || (x = {}));
				class $ {
					constructor(t) {
						this.sections = t;
					}
					get length() {
						let t = 0;
						for (let e = 0; e < this.sections.length; e += 2)
							t += this.sections[e];
						return t;
					}
					get newLength() {
						let t = 0;
						for (let e = 0; e < this.sections.length; e += 2) {
							let i = this.sections[e + 1];
							t += i < 0 ? this.sections[e] : i;
						}
						return t;
					}
					get empty() {
						return (
							0 == this.sections.length ||
							(2 == this.sections.length && this.sections[1] < 0)
						);
					}
					iterGaps(t) {
						for (let e = 0, i = 0, n = 0; e < this.sections.length; ) {
							let r = this.sections[e++],
								s = this.sections[e++];
							s < 0 ? (t(i, n, r), (n += r)) : (n += s), (i += r);
						}
					}
					iterChangedRanges(t, e = !1) {
						Z(this, t, e);
					}
					get invertedDesc() {
						let t = [];
						for (let e = 0; e < this.sections.length; ) {
							let i = this.sections[e++],
								n = this.sections[e++];
							n < 0 ? t.push(i, n) : t.push(n, i);
						}
						return new $(t);
					}
					composeDesc(t) {
						return this.empty ? t : t.empty ? this : C(this, t);
					}
					mapDesc(t, e = !1) {
						return t.empty ? this : T(this, t, e);
					}
					mapPos(t, e = -1, i = x.Simple) {
						let n = 0,
							r = 0;
						for (let s = 0; s < this.sections.length; ) {
							let o = this.sections[s++],
								a = this.sections[s++],
								l = n + o;
							if (a < 0) {
								if (l > t) return r + (t - n);
								r += o;
							} else {
								if (
									i != x.Simple &&
									l >= t &&
									((i == x.TrackDel && n < t && l > t) ||
										(i == x.TrackBefore && n < t) ||
										(i == x.TrackAfter && l > t))
								)
									return null;
								if (l > t || (l == t && e < 0 && !o))
									return t == n || e < 0 ? r : r + a;
								r += a;
							}
							n = l;
						}
						if (t > n)
							throw new RangeError(
								`Position ${t} is out of range for changeset of length ${n}`
							);
						return r;
					}
					touchesRange(t, e = t) {
						for (let i = 0, n = 0; i < this.sections.length && n <= e; ) {
							let r = n + this.sections[i++];
							if (this.sections[i++] >= 0 && n <= e && r >= t)
								return !(n < t && r > e) || "cover";
							n = r;
						}
						return !1;
					}
					toString() {
						let t = "";
						for (let e = 0; e < this.sections.length; ) {
							let i = this.sections[e++],
								n = this.sections[e++];
							t += (t ? " " : "") + i + (n >= 0 ? ":" + n : "");
						}
						return t;
					}
					toJSON() {
						return this.sections;
					}
					static fromJSON(t) {
						if (
							!Array.isArray(t) ||
							t.length % 2 ||
							t.some((t) => "number" != typeof t)
						)
							throw new RangeError("Invalid JSON representation of ChangeDesc");
						return new $(t);
					}
					static create(t) {
						return new $(t);
					}
				}
				class P extends $ {
					constructor(t, e) {
						super(t), (this.inserted = e);
					}
					apply(t) {
						if (this.length != t.length)
							throw new RangeError(
								"Applying change set to a document with the wrong length"
							);
						return (
							Z(
								this,
								(e, i, n, r, s) => (t = t.replace(n, n + (i - e), s)),
								!1
							),
							t
						);
					}
					mapDesc(t, e = !1) {
						return T(this, t, e, !0);
					}
					invert(t) {
						let e = this.sections.slice(),
							i = [];
						for (let r = 0, s = 0; r < e.length; r += 2) {
							let o = e[r],
								a = e[r + 1];
							if (a >= 0) {
								(e[r] = a), (e[r + 1] = o);
								let l = r >> 1;
								for (; i.length < l; ) i.push(n.empty);
								i.push(o ? t.slice(s, s + o) : n.empty);
							}
							s += o;
						}
						return new P(e, i);
					}
					compose(t) {
						return this.empty ? t : t.empty ? this : C(this, t, !0);
					}
					map(t, e = !1) {
						return t.empty ? this : T(this, t, e, !0);
					}
					iterChanges(t, e = !1) {
						Z(this, t, e);
					}
					get desc() {
						return $.create(this.sections);
					}
					filter(t) {
						let e = [],
							i = [],
							n = [],
							r = new A(this);
						t: for (let s = 0, o = 0; ; ) {
							let a = s == t.length ? 1e9 : t[s++];
							for (; o < a || (o == a && 0 == r.len); ) {
								if (r.done) break t;
								let t = Math.min(r.len, a - o);
								k(n, t, -1);
								let s = -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0;
								k(e, t, s), s > 0 && X(i, e, r.text), r.forward(t), (o += t);
							}
							let l = t[s++];
							for (; o < l; ) {
								if (r.done) break t;
								let t = Math.min(r.len, l - o);
								k(e, t, -1),
									k(n, t, -1 == r.ins ? -1 : 0 == r.off ? r.ins : 0),
									r.forward(t),
									(o += t);
							}
						}
						return { changes: new P(e, i), filtered: $.create(n) };
					}
					toJSON() {
						let t = [];
						for (let e = 0; e < this.sections.length; e += 2) {
							let i = this.sections[e],
								n = this.sections[e + 1];
							n < 0
								? t.push(i)
								: 0 == n
								? t.push([i])
								: t.push([i].concat(this.inserted[e >> 1].toJSON()));
						}
						return t;
					}
					static of(t, e, i) {
						let r = [],
							s = [],
							o = 0,
							a = null;
						function l(t = !1) {
							if (!t && !r.length) return;
							o < e && k(r, e - o, -1);
							let i = new P(r, s);
							(a = a ? a.compose(i.map(a)) : i), (r = []), (s = []), (o = 0);
						}
						return (
							(function t(h) {
								if (Array.isArray(h)) for (let e of h) t(e);
								else if (h instanceof P) {
									if (h.length != e)
										throw new RangeError(
											`Mismatched change set length (got ${h.length}, expected ${e})`
										);
									l(), (a = a ? a.compose(h.map(a)) : h);
								} else {
									let { from: t, to: a = t, insert: c } = h;
									if (t > a || t < 0 || a > e)
										throw new RangeError(
											`Invalid change range ${t} to ${a} (in doc of length ${e})`
										);
									let O = c
											? "string" == typeof c
												? n.of(c.split(i || w))
												: c
											: n.empty,
										u = O.length;
									if (t == a && 0 == u) return;
									t < o && l(),
										t > o && k(r, t - o, -1),
										k(r, a - t, u),
										X(s, r, O),
										(o = a);
								}
							})(t),
							l(!a),
							a
						);
					}
					static empty(t) {
						return new P(t ? [t, -1] : [], []);
					}
					static fromJSON(t) {
						if (!Array.isArray(t))
							throw new RangeError("Invalid JSON representation of ChangeSet");
						let e = [],
							i = [];
						for (let r = 0; r < t.length; r++) {
							let s = t[r];
							if ("number" == typeof s) e.push(s, -1);
							else {
								if (
									!Array.isArray(s) ||
									"number" != typeof s[0] ||
									s.some((t, e) => e && "string" != typeof t)
								)
									throw new RangeError(
										"Invalid JSON representation of ChangeSet"
									);
								if (1 == s.length) e.push(s[0], 0);
								else {
									for (; i.length < r; ) i.push(n.empty);
									(i[r] = n.of(s.slice(1))), e.push(s[0], i[r].length);
								}
							}
						}
						return new P(e, i);
					}
					static createSet(t, e) {
						return new P(t, e);
					}
				}
				function k(t, e, i, n = !1) {
					if (0 == e && i <= 0) return;
					let r = t.length - 2;
					r >= 0 && i <= 0 && i == t[r + 1]
						? (t[r] += e)
						: 0 == e && 0 == t[r]
						? (t[r + 1] += i)
						: n
						? ((t[r] += e), (t[r + 1] += i))
						: t.push(e, i);
				}
				function X(t, e, i) {
					if (0 == i.length) return;
					let r = (e.length - 2) >> 1;
					if (r < t.length) t[t.length - 1] = t[t.length - 1].append(i);
					else {
						for (; t.length < r; ) t.push(n.empty);
						t.push(i);
					}
				}
				function Z(t, e, i) {
					let r = t.inserted;
					for (let s = 0, o = 0, a = 0; a < t.sections.length; ) {
						let l = t.sections[a++],
							h = t.sections[a++];
						if (h < 0) (s += l), (o += l);
						else {
							let c = s,
								O = o,
								u = n.empty;
							for (
								;
								(c += l),
									(O += h),
									h && r && (u = u.append(r[(a - 2) >> 1])),
									!(i || a == t.sections.length || t.sections[a + 1] < 0);

							)
								(l = t.sections[a++]), (h = t.sections[a++]);
							e(s, c, o, O, u), (s = c), (o = O);
						}
					}
				}
				function T(t, e, i, n = !1) {
					let r = [],
						s = n ? [] : null,
						o = new A(t),
						a = new A(e);
					for (let t = -1; ; )
						if (-1 == o.ins && -1 == a.ins) {
							let t = Math.min(o.len, a.len);
							k(r, t, -1), o.forward(t), a.forward(t);
						} else if (
							a.ins >= 0 &&
							(o.ins < 0 ||
								t == o.i ||
								(0 == o.off && (a.len < o.len || (a.len == o.len && !i))))
						) {
							let e = a.len;
							for (k(r, a.ins, -1); e; ) {
								let i = Math.min(o.len, e);
								o.ins >= 0 &&
									t < o.i &&
									o.len <= i &&
									(k(r, 0, o.ins), s && X(s, r, o.text), (t = o.i)),
									o.forward(i),
									(e -= i);
							}
							a.next();
						} else {
							if (!(o.ins >= 0)) {
								if (o.done && a.done)
									return s ? P.createSet(r, s) : $.create(r);
								throw new Error("Mismatched change set lengths");
							}
							{
								let e = 0,
									i = o.len;
								for (; i; )
									if (-1 == a.ins) {
										let t = Math.min(i, a.len);
										(e += t), (i -= t), a.forward(t);
									} else {
										if (!(0 == a.ins && a.len < i)) break;
										(i -= a.len), a.next();
									}
								k(r, e, t < o.i ? o.ins : 0),
									s && t < o.i && X(s, r, o.text),
									(t = o.i),
									o.forward(o.len - i);
							}
						}
				}
				function C(t, e, i = !1) {
					let n = [],
						r = i ? [] : null,
						s = new A(t),
						o = new A(e);
					for (let t = !1; ; ) {
						if (s.done && o.done) return r ? P.createSet(n, r) : $.create(n);
						if (0 == s.ins) k(n, s.len, 0, t), s.next();
						else if (0 != o.len || o.done) {
							if (s.done || o.done)
								throw new Error("Mismatched change set lengths");
							{
								let e = Math.min(s.len2, o.len),
									i = n.length;
								if (-1 == s.ins) {
									let i = -1 == o.ins ? -1 : o.off ? 0 : o.ins;
									k(n, e, i, t), r && i && X(r, n, o.text);
								} else
									-1 == o.ins
										? (k(n, s.off ? 0 : s.len, e, t),
										  r && X(r, n, s.textBit(e)))
										: (k(n, s.off ? 0 : s.len, o.off ? 0 : o.ins, t),
										  r && !o.off && X(r, n, o.text));
								(t =
									(s.ins > e || (o.ins >= 0 && o.len > e)) &&
									(t || n.length > i)),
									s.forward2(e),
									o.forward(e);
							}
						} else k(n, 0, o.ins, t), r && X(r, n, o.text), o.next();
					}
				}
				class A {
					constructor(t) {
						(this.set = t), (this.i = 0), this.next();
					}
					next() {
						let { sections: t } = this.set;
						this.i < t.length
							? ((this.len = t[this.i++]), (this.ins = t[this.i++]))
							: ((this.len = 0), (this.ins = -2)),
							(this.off = 0);
					}
					get done() {
						return -2 == this.ins;
					}
					get len2() {
						return this.ins < 0 ? this.len : this.ins;
					}
					get text() {
						let { inserted: t } = this.set,
							e = (this.i - 2) >> 1;
						return e >= t.length ? n.empty : t[e];
					}
					textBit(t) {
						let { inserted: e } = this.set,
							i = (this.i - 2) >> 1;
						return i >= e.length && !t
							? n.empty
							: e[i].slice(this.off, null == t ? void 0 : this.off + t);
					}
					forward(t) {
						t == this.len ? this.next() : ((this.len -= t), (this.off += t));
					}
					forward2(t) {
						-1 == this.ins
							? this.forward(t)
							: t == this.ins
							? this.next()
							: ((this.ins -= t), (this.off += t));
					}
				}
				class V {
					constructor(t, e, i) {
						(this.from = t), (this.to = e), (this.flags = i);
					}
					get anchor() {
						return 16 & this.flags ? this.to : this.from;
					}
					get head() {
						return 16 & this.flags ? this.from : this.to;
					}
					get empty() {
						return this.from == this.to;
					}
					get assoc() {
						return 4 & this.flags ? -1 : 8 & this.flags ? 1 : 0;
					}
					get bidiLevel() {
						let t = 3 & this.flags;
						return 3 == t ? null : t;
					}
					get goalColumn() {
						let t = this.flags >> 5;
						return 33554431 == t ? void 0 : t;
					}
					map(t, e = -1) {
						let i, n;
						return (
							this.empty
								? (i = n = t.mapPos(this.from, e))
								: ((i = t.mapPos(this.from, 1)), (n = t.mapPos(this.to, -1))),
							i == this.from && n == this.to ? this : new V(i, n, this.flags)
						);
					}
					extend(t, e = t) {
						if (t <= this.anchor && e >= this.anchor) return W.range(t, e);
						let i =
							Math.abs(t - this.anchor) > Math.abs(e - this.anchor) ? t : e;
						return W.range(this.anchor, i);
					}
					eq(t) {
						return this.anchor == t.anchor && this.head == t.head;
					}
					toJSON() {
						return { anchor: this.anchor, head: this.head };
					}
					static fromJSON(t) {
						if (!t || "number" != typeof t.anchor || "number" != typeof t.head)
							throw new RangeError(
								"Invalid JSON representation for SelectionRange"
							);
						return W.range(t.anchor, t.head);
					}
					static create(t, e, i) {
						return new V(t, e, i);
					}
				}
				class W {
					constructor(t, e) {
						(this.ranges = t), (this.mainIndex = e);
					}
					map(t, e = -1) {
						return t.empty
							? this
							: W.create(
									this.ranges.map((i) => i.map(t, e)),
									this.mainIndex
							  );
					}
					eq(t) {
						if (
							this.ranges.length != t.ranges.length ||
							this.mainIndex != t.mainIndex
						)
							return !1;
						for (let e = 0; e < this.ranges.length; e++)
							if (!this.ranges[e].eq(t.ranges[e])) return !1;
						return !0;
					}
					get main() {
						return this.ranges[this.mainIndex];
					}
					asSingle() {
						return 1 == this.ranges.length ? this : new W([this.main], 0);
					}
					addRange(t, e = !0) {
						return W.create(
							[t].concat(this.ranges),
							e ? 0 : this.mainIndex + 1
						);
					}
					replaceRange(t, e = this.mainIndex) {
						let i = this.ranges.slice();
						return (i[e] = t), W.create(i, this.mainIndex);
					}
					toJSON() {
						return {
							ranges: this.ranges.map((t) => t.toJSON()),
							main: this.mainIndex
						};
					}
					static fromJSON(t) {
						if (
							!t ||
							!Array.isArray(t.ranges) ||
							"number" != typeof t.main ||
							t.main >= t.ranges.length
						)
							throw new RangeError(
								"Invalid JSON representation for EditorSelection"
							);
						return new W(
							t.ranges.map((t) => V.fromJSON(t)),
							t.main
						);
					}
					static single(t, e = t) {
						return new W([W.range(t, e)], 0);
					}
					static create(t, e = 0) {
						if (0 == t.length)
							throw new RangeError("A selection needs at least one range");
						for (let i = 0, n = 0; n < t.length; n++) {
							let r = t[n];
							if (r.empty ? r.from <= i : r.from < i)
								return W.normalized(t.slice(), e);
							i = r.to;
						}
						return new W(t, e);
					}
					static cursor(t, e = 0, i, n) {
						return V.create(
							t,
							t,
							(0 == e ? 0 : e < 0 ? 4 : 8) |
								(null == i ? 3 : Math.min(2, i)) |
								((null != n ? n : 33554431) << 5)
						);
					}
					static range(t, e, i, n) {
						let r =
							((null != i ? i : 33554431) << 5) |
							(null == n ? 3 : Math.min(2, n));
						return e < t
							? V.create(e, t, 24 | r)
							: V.create(t, e, (e > t ? 4 : 0) | r);
					}
					static normalized(t, e = 0) {
						let i = t[e];
						t.sort((t, e) => t.from - e.from), (e = t.indexOf(i));
						for (let i = 1; i < t.length; i++) {
							let n = t[i],
								r = t[i - 1];
							if (n.empty ? n.from <= r.to : n.from < r.to) {
								let s = r.from,
									o = Math.max(n.to, r.to);
								i <= e && e--,
									t.splice(
										--i,
										2,
										n.anchor > n.head ? W.range(o, s) : W.range(s, o)
									);
							}
						}
						return new W(t, e);
					}
				}
				function Y(t, e) {
					for (let i of t.ranges)
						if (i.to > e)
							throw new RangeError("Selection points outside of document");
				}
				let R = 0;
				class _ {
					constructor(t, e, i, n, r) {
						(this.combine = t),
							(this.compareInput = e),
							(this.compare = i),
							(this.isStatic = n),
							(this.id = R++),
							(this.default = t([])),
							(this.extensions = "function" == typeof r ? r(this) : r);
					}
					static define(t = {}) {
						return new _(
							t.combine || ((t) => t),
							t.compareInput || ((t, e) => t === e),
							t.compare || (t.combine ? (t, e) => t === e : M),
							!!t.static,
							t.enables
						);
					}
					of(t) {
						return new q([], this, 0, t);
					}
					compute(t, e) {
						if (this.isStatic) throw new Error("Can't compute a static facet");
						return new q(t, this, 1, e);
					}
					computeN(t, e) {
						if (this.isStatic) throw new Error("Can't compute a static facet");
						return new q(t, this, 2, e);
					}
					from(t, e) {
						return e || (e = (t) => t), this.compute([t], (i) => e(i.field(t)));
					}
				}
				function M(t, e) {
					return (
						t == e || (t.length == e.length && t.every((t, i) => t === e[i]))
					);
				}
				class q {
					constructor(t, e, i, n) {
						(this.dependencies = t),
							(this.facet = e),
							(this.type = i),
							(this.value = n),
							(this.id = R++);
					}
					dynamicSlot(t) {
						var e;
						let i = this.value,
							n = this.facet.compareInput,
							r = this.id,
							s = t[r] >> 1,
							o = 2 == this.type,
							a = !1,
							l = !1,
							h = [];
						for (let i of this.dependencies)
							"doc" == i
								? (a = !0)
								: "selection" == i
								? (l = !0)
								: 0 == (1 & (null !== (e = t[i.id]) && void 0 !== e ? e : 1)) &&
								  h.push(t[i.id]);
						return {
							create: (t) => ((t.values[s] = i(t)), 1),
							update(t, e) {
								if (
									(a && e.docChanged) ||
									(l && (e.docChanged || e.selection)) ||
									j(t, h)
								) {
									let e = i(t);
									if (o ? !U(e, t.values[s], n) : !n(e, t.values[s]))
										return (t.values[s] = e), 1;
								}
								return 0;
							},
							reconfigure: (t, e) => {
								let a,
									l = e.config.address[r];
								if (null != l) {
									let r = J(e, l);
									if (
										this.dependencies.every((i) =>
											i instanceof _
												? e.facet(i) === t.facet(i)
												: !(i instanceof G) || e.field(i, !1) == t.field(i, !1)
										) ||
										(o ? U((a = i(t)), r, n) : n((a = i(t)), r))
									)
										return (t.values[s] = r), 0;
								} else a = i(t);
								return (t.values[s] = a), 1;
							}
						};
					}
				}
				function U(t, e, i) {
					if (t.length != e.length) return !1;
					for (let n = 0; n < t.length; n++) if (!i(t[n], e[n])) return !1;
					return !0;
				}
				function j(t, e) {
					let i = !1;
					for (let n of e) 1 & F(t, n) && (i = !0);
					return i;
				}
				function D(t, e, i) {
					let n = i.map((e) => t[e.id]),
						r = i.map((t) => t.type),
						s = n.filter((t) => !(1 & t)),
						o = t[e.id] >> 1;
					function a(t) {
						let i = [];
						for (let e = 0; e < n.length; e++) {
							let s = J(t, n[e]);
							if (2 == r[e]) for (let t of s) i.push(t);
							else i.push(s);
						}
						return e.combine(i);
					}
					return {
						create(t) {
							for (let e of n) F(t, e);
							return (t.values[o] = a(t)), 1;
						},
						update(t, i) {
							if (!j(t, s)) return 0;
							let n = a(t);
							return e.compare(n, t.values[o]) ? 0 : ((t.values[o] = n), 1);
						},
						reconfigure(t, r) {
							let s = j(t, n),
								l = r.config.facets[e.id],
								h = r.facet(e);
							if (l && !s && M(i, l)) return (t.values[o] = h), 0;
							let c = a(t);
							return e.compare(c, h)
								? ((t.values[o] = h), 0)
								: ((t.values[o] = c), 1);
						}
					};
				}
				const E = _.define({ static: !0 });
				class G {
					constructor(t, e, i, n, r) {
						(this.id = t),
							(this.createF = e),
							(this.updateF = i),
							(this.compareF = n),
							(this.spec = r),
							(this.provides = void 0);
					}
					static define(t) {
						let e = new G(
							R++,
							t.create,
							t.update,
							t.compare || ((t, e) => t === e),
							t
						);
						return t.provide && (e.provides = t.provide(e)), e;
					}
					create(t) {
						let e = t.facet(E).find((t) => t.field == this);
						return ((null == e ? void 0 : e.create) || this.createF)(t);
					}
					slot(t) {
						let e = t[this.id] >> 1;
						return {
							create: (t) => ((t.values[e] = this.create(t)), 1),
							update: (t, i) => {
								let n = t.values[e],
									r = this.updateF(n, i);
								return this.compareF(n, r) ? 0 : ((t.values[e] = r), 1);
							},
							reconfigure: (t, i) =>
								null != i.config.address[this.id]
									? ((t.values[e] = i.field(this)), 0)
									: ((t.values[e] = this.create(t)), 1)
						};
					}
					init(t) {
						return [this, E.of({ field: this, create: t })];
					}
					get extension() {
						return this;
					}
				}
				function I(t) {
					return (e) => new B(e, t);
				}
				const z = {
					highest: I(0),
					high: I(1),
					default: I(2),
					low: I(3),
					lowest: I(4)
				};
				class B {
					constructor(t, e) {
						(this.inner = t), (this.prec = e);
					}
				}
				class N {
					of(t) {
						return new L(this, t);
					}
					reconfigure(t) {
						return N.reconfigure.of({ compartment: this, extension: t });
					}
					get(t) {
						return t.config.compartments.get(this);
					}
				}
				class L {
					constructor(t, e) {
						(this.compartment = t), (this.inner = e);
					}
				}
				class H {
					constructor(t, e, i, n, r, s) {
						for (
							this.base = t,
								this.compartments = e,
								this.dynamicSlots = i,
								this.address = n,
								this.staticValues = r,
								this.facets = s,
								this.statusTemplate = [];
							this.statusTemplate.length < i.length;

						)
							this.statusTemplate.push(0);
					}
					staticFacet(t) {
						let e = this.address[t.id];
						return null == e ? t.default : this.staticValues[e >> 1];
					}
					static resolve(t, e, i) {
						let n = [],
							r = Object.create(null),
							s = new Map();
						for (let i of (function (t, e, i) {
							let n = [[], [], [], [], []],
								r = new Map();
							return (
								(function t(s, o) {
									let a = r.get(s);
									if (null != a) {
										if (a <= o) return;
										let t = n[a].indexOf(s);
										t > -1 && n[a].splice(t, 1),
											s instanceof L && i.delete(s.compartment);
									}
									if ((r.set(s, o), Array.isArray(s))) for (let e of s) t(e, o);
									else if (s instanceof L) {
										if (i.has(s.compartment))
											throw new RangeError(
												"Duplicate use of compartment in extensions"
											);
										let n = e.get(s.compartment) || s.inner;
										i.set(s.compartment, n), t(n, o);
									} else if (s instanceof B) t(s.inner, s.prec);
									else if (s instanceof G)
										n[o].push(s), s.provides && t(s.provides, o);
									else if (s instanceof q)
										n[o].push(s),
											s.facet.extensions && t(s.facet.extensions, 2);
									else {
										let e = s.extension;
										if (!e)
											throw new Error(
												`Unrecognized extension value in extension set (${s}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`
											);
										t(e, o);
									}
								})(t, 2),
								n.reduce((t, e) => t.concat(e))
							);
						})(t, e, s))
							i instanceof G
								? n.push(i)
								: (r[i.facet.id] || (r[i.facet.id] = [])).push(i);
						let o = Object.create(null),
							a = [],
							l = [];
						for (let t of n)
							(o[t.id] = l.length << 1), l.push((e) => t.slot(e));
						let h = null == i ? void 0 : i.config.facets;
						for (let t in r) {
							let e = r[t],
								n = e[0].facet,
								s = (h && h[t]) || [];
							if (e.every((t) => 0 == t.type))
								if (((o[n.id] = (a.length << 1) | 1), M(s, e)))
									a.push(i.facet(n));
								else {
									let t = n.combine(e.map((t) => t.value));
									a.push(i && n.compare(t, i.facet(n)) ? i.facet(n) : t);
								}
							else {
								for (let t of e)
									0 == t.type
										? ((o[t.id] = (a.length << 1) | 1), a.push(t.value))
										: ((o[t.id] = l.length << 1),
										  l.push((e) => t.dynamicSlot(e)));
								(o[n.id] = l.length << 1), l.push((t) => D(t, n, e));
							}
						}
						let c = l.map((t) => t(o));
						return new H(t, s, c, o, a, r);
					}
				}
				function F(t, e) {
					if (1 & e) return 2;
					let i = e >> 1,
						n = t.status[i];
					if (4 == n)
						throw new Error("Cyclic dependency between fields and/or facets");
					if (2 & n) return n;
					t.status[i] = 4;
					let r = t.computeSlot(t, t.config.dynamicSlots[i]);
					return (t.status[i] = 2 | r);
				}
				function J(t, e) {
					return 1 & e ? t.config.staticValues[e >> 1] : t.values[e >> 1];
				}
				const K = _.define(),
					tt = _.define({ combine: (t) => t.some((t) => t), static: !0 }),
					et = _.define({
						combine: (t) => (t.length ? t[0] : void 0),
						static: !0
					}),
					it = _.define(),
					nt = _.define(),
					rt = _.define(),
					st = _.define({ combine: (t) => !!t.length && t[0] });
				class ot {
					constructor(t, e) {
						(this.type = t), (this.value = e);
					}
					static define() {
						return new at();
					}
				}
				class at {
					of(t) {
						return new ot(this, t);
					}
				}
				class lt {
					constructor(t) {
						this.map = t;
					}
					of(t) {
						return new ht(this, t);
					}
				}
				class ht {
					constructor(t, e) {
						(this.type = t), (this.value = e);
					}
					map(t) {
						let e = this.type.map(this.value, t);
						return void 0 === e
							? void 0
							: e == this.value
							? this
							: new ht(this.type, e);
					}
					is(t) {
						return this.type == t;
					}
					static define(t = {}) {
						return new lt(t.map || ((t) => t));
					}
					static mapEffects(t, e) {
						if (!t.length) return t;
						let i = [];
						for (let n of t) {
							let t = n.map(e);
							t && i.push(t);
						}
						return i;
					}
				}
				(ht.reconfigure = ht.define()), (ht.appendConfig = ht.define());
				class ct {
					constructor(t, e, i, n, r, s) {
						(this.startState = t),
							(this.changes = e),
							(this.selection = i),
							(this.effects = n),
							(this.annotations = r),
							(this.scrollIntoView = s),
							(this._doc = null),
							(this._state = null),
							i && Y(i, e.newLength),
							r.some((t) => t.type == ct.time) ||
								(this.annotations = r.concat(ct.time.of(Date.now())));
					}
					static create(t, e, i, n, r, s) {
						return new ct(t, e, i, n, r, s);
					}
					get newDoc() {
						return (
							this._doc || (this._doc = this.changes.apply(this.startState.doc))
						);
					}
					get newSelection() {
						return (
							this.selection || this.startState.selection.map(this.changes)
						);
					}
					get state() {
						return (
							this._state || this.startState.applyTransaction(this), this._state
						);
					}
					annotation(t) {
						for (let e of this.annotations) if (e.type == t) return e.value;
					}
					get docChanged() {
						return !this.changes.empty;
					}
					get reconfigured() {
						return this.startState.config != this.state.config;
					}
					isUserEvent(t) {
						let e = this.annotation(ct.userEvent);
						return !(
							!e ||
							!(
								e == t ||
								(e.length > t.length &&
									e.slice(0, t.length) == t &&
									"." == e[t.length])
							)
						);
					}
				}
				function Ot(t, e) {
					let i = [];
					for (let n = 0, r = 0; ; ) {
						let s, o;
						if (n < t.length && (r == e.length || e[r] >= t[n]))
							(s = t[n++]), (o = t[n++]);
						else {
							if (!(r < e.length)) return i;
							(s = e[r++]), (o = e[r++]);
						}
						!i.length || i[i.length - 1] < s
							? i.push(s, o)
							: i[i.length - 1] < o && (i[i.length - 1] = o);
					}
				}
				function ut(t, e, i) {
					var n;
					let r, s, o;
					return (
						i
							? ((r = e.changes),
							  (s = P.empty(e.changes.length)),
							  (o = t.changes.compose(e.changes)))
							: ((r = e.changes.map(t.changes)),
							  (s = t.changes.mapDesc(e.changes, !0)),
							  (o = t.changes.compose(r))),
						{
							changes: o,
							selection: e.selection
								? e.selection.map(s)
								: null === (n = t.selection) || void 0 === n
								? void 0
								: n.map(r),
							effects: ht
								.mapEffects(t.effects, r)
								.concat(ht.mapEffects(e.effects, s)),
							annotations: t.annotations.length
								? t.annotations.concat(e.annotations)
								: e.annotations,
							scrollIntoView: t.scrollIntoView || e.scrollIntoView
						}
					);
				}
				function ft(t, e, i) {
					let n = e.selection,
						r = gt(e.annotations);
					return (
						e.userEvent && (r = r.concat(ct.userEvent.of(e.userEvent))),
						{
							changes:
								e.changes instanceof P
									? e.changes
									: P.of(e.changes || [], i, t.facet(et)),
							selection: n && (n instanceof W ? n : W.single(n.anchor, n.head)),
							effects: gt(e.effects),
							annotations: r,
							scrollIntoView: !!e.scrollIntoView
						}
					);
				}
				function dt(t, e, i) {
					let n = ft(t, e.length ? e[0] : {}, t.doc.length);
					e.length && !1 === e[0].filter && (i = !1);
					for (let r = 1; r < e.length; r++) {
						!1 === e[r].filter && (i = !1);
						let s = !!e[r].sequential;
						n = ut(n, ft(t, e[r], s ? n.changes.newLength : t.doc.length), s);
					}
					let r = ct.create(
						t,
						n.changes,
						n.selection,
						n.effects,
						n.annotations,
						n.scrollIntoView
					);
					return (function (t) {
						let e = t.startState,
							i = e.facet(rt),
							n = t;
						for (let r = i.length - 1; r >= 0; r--) {
							let s = i[r](t);
							s &&
								Object.keys(s).length &&
								(n = ut(n, ft(e, s, t.changes.newLength), !0));
						}
						return n == t
							? t
							: ct.create(
									e,
									t.changes,
									t.selection,
									n.effects,
									n.annotations,
									n.scrollIntoView
							  );
					})(
						i
							? (function (t) {
									let e = t.startState,
										i = !0;
									for (let n of e.facet(it)) {
										let e = n(t);
										if (!1 === e) {
											i = !1;
											break;
										}
										Array.isArray(e) && (i = !0 === i ? e : Ot(i, e));
									}
									if (!0 !== i) {
										let n, r;
										if (!1 === i)
											(r = t.changes.invertedDesc), (n = P.empty(e.doc.length));
										else {
											let e = t.changes.filter(i);
											(n = e.changes),
												(r = e.filtered.mapDesc(e.changes).invertedDesc);
										}
										t = ct.create(
											e,
											n,
											t.selection && t.selection.map(r),
											ht.mapEffects(t.effects, r),
											t.annotations,
											t.scrollIntoView
										);
									}
									let n = e.facet(nt);
									for (let i = n.length - 1; i >= 0; i--) {
										let r = n[i](t);
										t =
											r instanceof ct
												? r
												: Array.isArray(r) &&
												  1 == r.length &&
												  r[0] instanceof ct
												? r[0]
												: dt(e, gt(r), !1);
									}
									return t;
							  })(r)
							: r
					);
				}
				(ct.time = ot.define()),
					(ct.userEvent = ot.define()),
					(ct.addToHistory = ot.define()),
					(ct.remote = ot.define());
				const pt = [];
				function gt(t) {
					return null == t ? pt : Array.isArray(t) ? t : [t];
				}
				var mt = (function (t) {
					return (
						(t[(t.Word = 0)] = "Word"),
						(t[(t.Space = 1)] = "Space"),
						(t[(t.Other = 2)] = "Other"),
						t
					);
				})(mt || (mt = {}));
				const St =
					/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
				let Qt;
				try {
					Qt = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u");
				} catch (t) {}
				class vt {
					constructor(t, e, i, n, r, s) {
						(this.config = t),
							(this.doc = e),
							(this.selection = i),
							(this.values = n),
							(this.status = t.statusTemplate.slice()),
							(this.computeSlot = r),
							s && (s._state = this);
						for (let t = 0; t < this.config.dynamicSlots.length; t++)
							F(this, t << 1);
						this.computeSlot = null;
					}
					field(t, e = !0) {
						let i = this.config.address[t.id];
						if (null != i) return F(this, i), J(this, i);
						if (e) throw new RangeError("Field is not present in this state");
					}
					update(...t) {
						return dt(this, t, !0);
					}
					applyTransaction(t) {
						let e,
							i = this.config,
							{ base: n, compartments: r } = i;
						for (let e of t.effects)
							e.is(N.reconfigure)
								? (i &&
										((r = new Map()),
										i.compartments.forEach((t, e) => r.set(e, t)),
										(i = null)),
								  r.set(e.value.compartment, e.value.extension))
								: e.is(ht.reconfigure)
								? ((i = null), (n = e.value))
								: e.is(ht.appendConfig) &&
								  ((i = null), (n = gt(n).concat(e.value)));
						i
							? (e = t.startState.values.slice())
							: ((i = H.resolve(n, r, this)),
							  (e = new vt(
									i,
									this.doc,
									this.selection,
									i.dynamicSlots.map(() => null),
									(t, e) => e.reconfigure(t, this),
									null
							  ).values)),
							new vt(
								i,
								t.newDoc,
								t.newSelection,
								e,
								(e, i) => i.update(e, t),
								t
							);
					}
					replaceSelection(t) {
						return (
							"string" == typeof t && (t = this.toText(t)),
							this.changeByRange((e) => ({
								changes: { from: e.from, to: e.to, insert: t },
								range: W.cursor(e.from + t.length)
							}))
						);
					}
					changeByRange(t) {
						let e = this.selection,
							i = t(e.ranges[0]),
							n = this.changes(i.changes),
							r = [i.range],
							s = gt(i.effects);
						for (let i = 1; i < e.ranges.length; i++) {
							let o = t(e.ranges[i]),
								a = this.changes(o.changes),
								l = a.map(n);
							for (let t = 0; t < i; t++) r[t] = r[t].map(l);
							let h = n.mapDesc(a, !0);
							r.push(o.range.map(h)),
								(n = n.compose(l)),
								(s = ht
									.mapEffects(s, l)
									.concat(ht.mapEffects(gt(o.effects), h)));
						}
						return {
							changes: n,
							selection: W.create(r, e.mainIndex),
							effects: s
						};
					}
					changes(t = []) {
						return t instanceof P
							? t
							: P.of(t, this.doc.length, this.facet(vt.lineSeparator));
					}
					toText(t) {
						return n.of(t.split(this.facet(vt.lineSeparator) || w));
					}
					sliceDoc(t = 0, e = this.doc.length) {
						return this.doc.sliceString(t, e, this.lineBreak);
					}
					facet(t) {
						let e = this.config.address[t.id];
						return null == e ? t.default : (F(this, e), J(this, e));
					}
					toJSON(t) {
						let e = {
							doc: this.sliceDoc(),
							selection: this.selection.toJSON()
						};
						if (t)
							for (let i in t) {
								let n = t[i];
								n instanceof G &&
									null != this.config.address[n.id] &&
									(e[i] = n.spec.toJSON(this.field(t[i]), this));
							}
						return e;
					}
					static fromJSON(t, e = {}, i) {
						if (!t || "string" != typeof t.doc)
							throw new RangeError(
								"Invalid JSON representation for EditorState"
							);
						let n = [];
						if (i)
							for (let e in i)
								if (Object.prototype.hasOwnProperty.call(t, e)) {
									let r = i[e],
										s = t[e];
									n.push(r.init((t) => r.spec.fromJSON(s, t)));
								}
						return vt.create({
							doc: t.doc,
							selection: W.fromJSON(t.selection),
							extensions: e.extensions ? n.concat([e.extensions]) : n
						});
					}
					static create(t = {}) {
						let e = H.resolve(t.extensions || [], new Map()),
							i =
								t.doc instanceof n
									? t.doc
									: n.of(
											(t.doc || "").split(e.staticFacet(vt.lineSeparator) || w)
									  ),
							r = t.selection
								? t.selection instanceof W
									? t.selection
									: W.single(t.selection.anchor, t.selection.head)
								: W.single(0);
						return (
							Y(r, i.length),
							e.staticFacet(tt) || (r = r.asSingle()),
							new vt(
								e,
								i,
								r,
								e.dynamicSlots.map(() => null),
								(t, e) => e.create(t),
								null
							)
						);
					}
					get tabSize() {
						return this.facet(vt.tabSize);
					}
					get lineBreak() {
						return this.facet(vt.lineSeparator) || "\n";
					}
					get readOnly() {
						return this.facet(st);
					}
					phrase(t, ...e) {
						for (let e of this.facet(vt.phrases))
							if (Object.prototype.hasOwnProperty.call(e, t)) {
								t = e[t];
								break;
							}
						return (
							e.length &&
								(t = t.replace(/\$(\$|\d*)/g, (t, i) => {
									if ("$" == i) return "$";
									let n = +(i || 1);
									return !n || n > e.length ? t : e[n - 1];
								})),
							t
						);
					}
					languageDataAt(t, e, i = -1) {
						let n = [];
						for (let r of this.facet(K))
							for (let s of r(this, e, i))
								Object.prototype.hasOwnProperty.call(s, t) && n.push(s[t]);
						return n;
					}
					charCategorizer(t) {
						return (
							(e = this.languageDataAt("wordChars", t).join("")),
							(t) => {
								if (!/\S/.test(t)) return mt.Space;
								if (
									(function (t) {
										if (Qt) return Qt.test(t);
										for (let e = 0; e < t.length; e++) {
											let i = t[e];
											if (
												/\w/.test(i) ||
												(i > "" &&
													(i.toUpperCase() != i.toLowerCase() || St.test(i)))
											)
												return !0;
										}
										return !1;
									})(t)
								)
									return mt.Word;
								for (let i = 0; i < e.length; i++)
									if (t.indexOf(e[i]) > -1) return mt.Word;
								return mt.Other;
							}
						);
						var e;
					}
					wordAt(t) {
						let { text: e, from: i, length: n } = this.doc.lineAt(t),
							r = this.charCategorizer(t),
							s = t - i,
							o = t - i;
						for (; s > 0; ) {
							let t = g(e, s, !1);
							if (r(e.slice(t, s)) != mt.Word) break;
							s = t;
						}
						for (; o < n; ) {
							let t = g(e, o);
							if (r(e.slice(o, t)) != mt.Word) break;
							o = t;
						}
						return s == o ? null : W.range(s + i, o + i);
					}
				}
				function yt(t, e, i = {}) {
					let n = {};
					for (let e of t)
						for (let t of Object.keys(e)) {
							let r = e[t],
								s = n[t];
							if (void 0 === s) n[t] = r;
							else if (s === r || void 0 === r);
							else {
								if (!Object.hasOwnProperty.call(i, t))
									throw new Error("Config merge conflict for field " + t);
								n[t] = i[t](s, r);
							}
						}
					for (let t in e) void 0 === n[t] && (n[t] = e[t]);
					return n;
				}
				(vt.allowMultipleSelections = tt),
					(vt.tabSize = _.define({ combine: (t) => (t.length ? t[0] : 4) })),
					(vt.lineSeparator = et),
					(vt.readOnly = st),
					(vt.phrases = _.define({
						compare(t, e) {
							let i = Object.keys(t),
								n = Object.keys(e);
							return i.length == n.length && i.every((i) => t[i] == e[i]);
						}
					})),
					(vt.languageData = K),
					(vt.changeFilter = it),
					(vt.transactionFilter = nt),
					(vt.transactionExtender = rt),
					(N.reconfigure = ht.define());
				class bt {
					eq(t) {
						return this == t;
					}
					range(t, e = t) {
						return wt.create(t, e, this);
					}
				}
				(bt.prototype.startSide = bt.prototype.endSide = 0),
					(bt.prototype.point = !1),
					(bt.prototype.mapMode = x.TrackDel);
				class wt {
					constructor(t, e, i) {
						(this.from = t), (this.to = e), (this.value = i);
					}
					static create(t, e, i) {
						return new wt(t, e, i);
					}
				}
				function xt(t, e) {
					return t.from - e.from || t.value.startSide - e.value.startSide;
				}
				class $t {
					constructor(t, e, i, n) {
						(this.from = t),
							(this.to = e),
							(this.value = i),
							(this.maxPoint = n);
					}
					get length() {
						return this.to[this.to.length - 1];
					}
					findIndex(t, e, i, n = 0) {
						let r = i ? this.to : this.from;
						for (let s = n, o = r.length; ; ) {
							if (s == o) return s;
							let n = (s + o) >> 1,
								a =
									r[n] - t ||
									(i ? this.value[n].endSide : this.value[n].startSide) - e;
							if (n == s) return a >= 0 ? s : o;
							a >= 0 ? (o = n) : (s = n + 1);
						}
					}
					between(t, e, i, n) {
						for (
							let r = this.findIndex(e, -1e9, !0),
								s = this.findIndex(i, 1e9, !1, r);
							r < s;
							r++
						)
							if (!1 === n(this.from[r] + t, this.to[r] + t, this.value[r]))
								return !1;
					}
					map(t, e) {
						let i = [],
							n = [],
							r = [],
							s = -1,
							o = -1;
						for (let a = 0; a < this.value.length; a++) {
							let l,
								h,
								c = this.value[a],
								O = this.from[a] + t,
								u = this.to[a] + t;
							if (O == u) {
								let t = e.mapPos(O, c.startSide, c.mapMode);
								if (null == t) continue;
								if (
									((l = h = t),
									c.startSide != c.endSide &&
										((h = e.mapPos(O, c.endSide)), h < l))
								)
									continue;
							} else if (
								((l = e.mapPos(O, c.startSide)),
								(h = e.mapPos(u, c.endSide)),
								l > h || (l == h && c.startSide > 0 && c.endSide <= 0))
							)
								continue;
							(h - l || c.endSide - c.startSide) < 0 ||
								(s < 0 && (s = l),
								c.point && (o = Math.max(o, h - l)),
								i.push(c),
								n.push(l - s),
								r.push(h - s));
						}
						return { mapped: i.length ? new $t(n, r, i, o) : null, pos: s };
					}
				}
				class Pt {
					constructor(t, e, i, n) {
						(this.chunkPos = t),
							(this.chunk = e),
							(this.nextLayer = i),
							(this.maxPoint = n);
					}
					static create(t, e, i, n) {
						return new Pt(t, e, i, n);
					}
					get length() {
						let t = this.chunk.length - 1;
						return t < 0
							? 0
							: Math.max(this.chunkEnd(t), this.nextLayer.length);
					}
					get size() {
						if (this.isEmpty) return 0;
						let t = this.nextLayer.size;
						for (let e of this.chunk) t += e.value.length;
						return t;
					}
					chunkEnd(t) {
						return this.chunkPos[t] + this.chunk[t].length;
					}
					update(t) {
						let {
								add: e = [],
								sort: i = !1,
								filterFrom: n = 0,
								filterTo: r = this.length
							} = t,
							s = t.filter;
						if (0 == e.length && !s) return this;
						if ((i && (e = e.slice().sort(xt)), this.isEmpty))
							return e.length ? Pt.of(e) : this;
						let o = new Zt(this, null, -1).goto(0),
							a = 0,
							l = [],
							h = new kt();
						for (; o.value || a < e.length; )
							if (
								a < e.length &&
								(o.from - e[a].from || o.startSide - e[a].value.startSide) >= 0
							) {
								let t = e[a++];
								h.addInner(t.from, t.to, t.value) || l.push(t);
							} else
								1 == o.rangeIndex &&
								o.chunkIndex < this.chunk.length &&
								(a == e.length || this.chunkEnd(o.chunkIndex) < e[a].from) &&
								(!s ||
									n > this.chunkEnd(o.chunkIndex) ||
									r < this.chunkPos[o.chunkIndex]) &&
								h.addChunk(
									this.chunkPos[o.chunkIndex],
									this.chunk[o.chunkIndex]
								)
									? o.nextChunk()
									: ((!s ||
											n > o.to ||
											r < o.from ||
											s(o.from, o.to, o.value)) &&
											(h.addInner(o.from, o.to, o.value) ||
												l.push(wt.create(o.from, o.to, o.value))),
									  o.next());
						return h.finishInner(
							this.nextLayer.isEmpty && !l.length
								? Pt.empty
								: this.nextLayer.update({
										add: l,
										filter: s,
										filterFrom: n,
										filterTo: r
								  })
						);
					}
					map(t) {
						if (t.empty || this.isEmpty) return this;
						let e = [],
							i = [],
							n = -1;
						for (let r = 0; r < this.chunk.length; r++) {
							let s = this.chunkPos[r],
								o = this.chunk[r],
								a = t.touchesRange(s, s + o.length);
							if (!1 === a)
								(n = Math.max(n, o.maxPoint)), e.push(o), i.push(t.mapPos(s));
							else if (!0 === a) {
								let { mapped: r, pos: a } = o.map(s, t);
								r && ((n = Math.max(n, r.maxPoint)), e.push(r), i.push(a));
							}
						}
						let r = this.nextLayer.map(t);
						return 0 == e.length ? r : new Pt(i, e, r || Pt.empty, n);
					}
					between(t, e, i) {
						if (!this.isEmpty) {
							for (let n = 0; n < this.chunk.length; n++) {
								let r = this.chunkPos[n],
									s = this.chunk[n];
								if (
									e >= r &&
									t <= r + s.length &&
									!1 === s.between(r, t - r, e - r, i)
								)
									return;
							}
							this.nextLayer.between(t, e, i);
						}
					}
					iter(t = 0) {
						return Tt.from([this]).goto(t);
					}
					get isEmpty() {
						return this.nextLayer == this;
					}
					static iter(t, e = 0) {
						return Tt.from(t).goto(e);
					}
					static compare(t, e, i, n, r = -1) {
						let s = t.filter(
								(t) => t.maxPoint > 0 || (!t.isEmpty && t.maxPoint >= r)
							),
							o = e.filter(
								(t) => t.maxPoint > 0 || (!t.isEmpty && t.maxPoint >= r)
							),
							a = Xt(s, o, i),
							l = new At(s, a, r),
							h = new At(o, a, r);
						i.iterGaps((t, e, i) => Vt(l, t, h, e, i, n)),
							i.empty && 0 == i.length && Vt(l, 0, h, 0, 0, n);
					}
					static eq(t, e, i = 0, n) {
						null == n && (n = 999999999);
						let r = t.filter((t) => !t.isEmpty && e.indexOf(t) < 0),
							s = e.filter((e) => !e.isEmpty && t.indexOf(e) < 0);
						if (r.length != s.length) return !1;
						if (!r.length) return !0;
						let o = Xt(r, s),
							a = new At(r, o, 0).goto(i),
							l = new At(s, o, 0).goto(i);
						for (;;) {
							if (
								a.to != l.to ||
								!Wt(a.active, l.active) ||
								(a.point && (!l.point || !a.point.eq(l.point)))
							)
								return !1;
							if (a.to > n) return !0;
							a.next(), l.next();
						}
					}
					static spans(t, e, i, n, r = -1) {
						let s = new At(t, null, r).goto(e),
							o = e,
							a = s.openStart;
						for (;;) {
							let t = Math.min(s.to, i);
							if (s.point) {
								let i = s.activeForPoint(s.to),
									r = s.pointFrom < e ? i.length + 1 : Math.min(i.length, a);
								n.point(o, t, s.point, i, r, s.pointRank),
									(a = Math.min(s.openEnd(t), i.length));
							} else t > o && (n.span(o, t, s.active, a), (a = s.openEnd(t)));
							if (s.to > i) return a + (s.point && s.to > i ? 1 : 0);
							(o = s.to), s.next();
						}
					}
					static of(t, e = !1) {
						let i = new kt();
						for (let n of t instanceof wt
							? [t]
							: e
							? (function (t) {
									if (t.length > 1)
										for (let e = t[0], i = 1; i < t.length; i++) {
											let n = t[i];
											if (xt(e, n) > 0) return t.slice().sort(xt);
											e = n;
										}
									return t;
							  })(t)
							: t)
							i.add(n.from, n.to, n.value);
						return i.finish();
					}
				}
				(Pt.empty = new Pt([], [], null, -1)), (Pt.empty.nextLayer = Pt.empty);
				class kt {
					constructor() {
						(this.chunks = []),
							(this.chunkPos = []),
							(this.chunkStart = -1),
							(this.last = null),
							(this.lastFrom = -1e9),
							(this.lastTo = -1e9),
							(this.from = []),
							(this.to = []),
							(this.value = []),
							(this.maxPoint = -1),
							(this.setMaxPoint = -1),
							(this.nextLayer = null);
					}
					finishChunk(t) {
						this.chunks.push(
							new $t(this.from, this.to, this.value, this.maxPoint)
						),
							this.chunkPos.push(this.chunkStart),
							(this.chunkStart = -1),
							(this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint)),
							(this.maxPoint = -1),
							t && ((this.from = []), (this.to = []), (this.value = []));
					}
					add(t, e, i) {
						this.addInner(t, e, i) ||
							(this.nextLayer || (this.nextLayer = new kt())).add(t, e, i);
					}
					addInner(t, e, i) {
						let n = t - this.lastTo || i.startSide - this.last.endSide;
						if (
							n <= 0 &&
							(t - this.lastFrom || i.startSide - this.last.startSide) < 0
						)
							throw new Error(
								"Ranges must be added sorted by `from` position and `startSide`"
							);
						return !(
							n < 0 ||
							(250 == this.from.length && this.finishChunk(!0),
							this.chunkStart < 0 && (this.chunkStart = t),
							this.from.push(t - this.chunkStart),
							this.to.push(e - this.chunkStart),
							(this.last = i),
							(this.lastFrom = t),
							(this.lastTo = e),
							this.value.push(i),
							i.point && (this.maxPoint = Math.max(this.maxPoint, e - t)),
							0)
						);
					}
					addChunk(t, e) {
						if (
							(t - this.lastTo || e.value[0].startSide - this.last.endSide) < 0
						)
							return !1;
						this.from.length && this.finishChunk(!0),
							(this.setMaxPoint = Math.max(this.setMaxPoint, e.maxPoint)),
							this.chunks.push(e),
							this.chunkPos.push(t);
						let i = e.value.length - 1;
						return (
							(this.last = e.value[i]),
							(this.lastFrom = e.from[i] + t),
							(this.lastTo = e.to[i] + t),
							!0
						);
					}
					finish() {
						return this.finishInner(Pt.empty);
					}
					finishInner(t) {
						if (
							(this.from.length && this.finishChunk(!1),
							0 == this.chunks.length)
						)
							return t;
						let e = Pt.create(
							this.chunkPos,
							this.chunks,
							this.nextLayer ? this.nextLayer.finishInner(t) : t,
							this.setMaxPoint
						);
						return (this.from = null), e;
					}
				}
				function Xt(t, e, i) {
					let n = new Map();
					for (let e of t)
						for (let t = 0; t < e.chunk.length; t++)
							e.chunk[t].maxPoint <= 0 && n.set(e.chunk[t], e.chunkPos[t]);
					let r = new Set();
					for (let t of e)
						for (let e = 0; e < t.chunk.length; e++) {
							let s = n.get(t.chunk[e]);
							null == s ||
								(i ? i.mapPos(s) : s) != t.chunkPos[e] ||
								(null == i
									? void 0
									: i.touchesRange(s, s + t.chunk[e].length)) ||
								r.add(t.chunk[e]);
						}
					return r;
				}
				class Zt {
					constructor(t, e, i, n = 0) {
						(this.layer = t),
							(this.skip = e),
							(this.minPoint = i),
							(this.rank = n);
					}
					get startSide() {
						return this.value ? this.value.startSide : 0;
					}
					get endSide() {
						return this.value ? this.value.endSide : 0;
					}
					goto(t, e = -1e9) {
						return (
							(this.chunkIndex = this.rangeIndex = 0),
							this.gotoInner(t, e, !1),
							this
						);
					}
					gotoInner(t, e, i) {
						for (; this.chunkIndex < this.layer.chunk.length; ) {
							let e = this.layer.chunk[this.chunkIndex];
							if (
								!(
									(this.skip && this.skip.has(e)) ||
									this.layer.chunkEnd(this.chunkIndex) < t ||
									e.maxPoint < this.minPoint
								)
							)
								break;
							this.chunkIndex++, (i = !1);
						}
						if (this.chunkIndex < this.layer.chunk.length) {
							let n = this.layer.chunk[this.chunkIndex].findIndex(
								t - this.layer.chunkPos[this.chunkIndex],
								e,
								!0
							);
							(!i || this.rangeIndex < n) && this.setRangeIndex(n);
						}
						this.next();
					}
					forward(t, e) {
						(this.to - t || this.endSide - e) < 0 && this.gotoInner(t, e, !0);
					}
					next() {
						for (;;) {
							if (this.chunkIndex == this.layer.chunk.length) {
								(this.from = this.to = 1e9), (this.value = null);
								break;
							}
							{
								let t = this.layer.chunkPos[this.chunkIndex],
									e = this.layer.chunk[this.chunkIndex],
									i = t + e.from[this.rangeIndex];
								if (
									((this.from = i),
									(this.to = t + e.to[this.rangeIndex]),
									(this.value = e.value[this.rangeIndex]),
									this.setRangeIndex(this.rangeIndex + 1),
									this.minPoint < 0 ||
										(this.value.point && this.to - this.from >= this.minPoint))
								)
									break;
							}
						}
					}
					setRangeIndex(t) {
						if (t == this.layer.chunk[this.chunkIndex].value.length) {
							if ((this.chunkIndex++, this.skip))
								for (
									;
									this.chunkIndex < this.layer.chunk.length &&
									this.skip.has(this.layer.chunk[this.chunkIndex]);

								)
									this.chunkIndex++;
							this.rangeIndex = 0;
						} else this.rangeIndex = t;
					}
					nextChunk() {
						this.chunkIndex++, (this.rangeIndex = 0), this.next();
					}
					compare(t) {
						return (
							this.from - t.from ||
							this.startSide - t.startSide ||
							this.rank - t.rank ||
							this.to - t.to ||
							this.endSide - t.endSide
						);
					}
				}
				class Tt {
					constructor(t) {
						this.heap = t;
					}
					static from(t, e = null, i = -1) {
						let n = [];
						for (let r = 0; r < t.length; r++)
							for (let s = t[r]; !s.isEmpty; s = s.nextLayer)
								s.maxPoint >= i && n.push(new Zt(s, e, i, r));
						return 1 == n.length ? n[0] : new Tt(n);
					}
					get startSide() {
						return this.value ? this.value.startSide : 0;
					}
					goto(t, e = -1e9) {
						for (let i of this.heap) i.goto(t, e);
						for (let t = this.heap.length >> 1; t >= 0; t--) Ct(this.heap, t);
						return this.next(), this;
					}
					forward(t, e) {
						for (let i of this.heap) i.forward(t, e);
						for (let t = this.heap.length >> 1; t >= 0; t--) Ct(this.heap, t);
						(this.to - t || this.value.endSide - e) < 0 && this.next();
					}
					next() {
						if (0 == this.heap.length)
							(this.from = this.to = 1e9),
								(this.value = null),
								(this.rank = -1);
						else {
							let t = this.heap[0];
							(this.from = t.from),
								(this.to = t.to),
								(this.value = t.value),
								(this.rank = t.rank),
								t.value && t.next(),
								Ct(this.heap, 0);
						}
					}
				}
				function Ct(t, e) {
					for (let i = t[e]; ; ) {
						let n = 1 + (e << 1);
						if (n >= t.length) break;
						let r = t[n];
						if (
							(n + 1 < t.length &&
								r.compare(t[n + 1]) >= 0 &&
								((r = t[n + 1]), n++),
							i.compare(r) < 0)
						)
							break;
						(t[n] = i), (t[e] = r), (e = n);
					}
				}
				class At {
					constructor(t, e, i) {
						(this.minPoint = i),
							(this.active = []),
							(this.activeTo = []),
							(this.activeRank = []),
							(this.minActive = -1),
							(this.point = null),
							(this.pointFrom = 0),
							(this.pointRank = 0),
							(this.to = -1e9),
							(this.endSide = 0),
							(this.openStart = -1),
							(this.cursor = Tt.from(t, e, i));
					}
					goto(t, e = -1e9) {
						return (
							this.cursor.goto(t, e),
							(this.active.length =
								this.activeTo.length =
								this.activeRank.length =
									0),
							(this.minActive = -1),
							(this.to = t),
							(this.endSide = e),
							(this.openStart = -1),
							this.next(),
							this
						);
					}
					forward(t, e) {
						for (
							;
							this.minActive > -1 &&
							(this.activeTo[this.minActive] - t ||
								this.active[this.minActive].endSide - e) < 0;

						)
							this.removeActive(this.minActive);
						this.cursor.forward(t, e);
					}
					removeActive(t) {
						Yt(this.active, t),
							Yt(this.activeTo, t),
							Yt(this.activeRank, t),
							(this.minActive = _t(this.active, this.activeTo));
					}
					addActive(t) {
						let e = 0,
							{ value: i, to: n, rank: r } = this.cursor;
						for (; e < this.activeRank.length && this.activeRank[e] <= r; ) e++;
						Rt(this.active, e, i),
							Rt(this.activeTo, e, n),
							Rt(this.activeRank, e, r),
							t && Rt(t, e, this.cursor.from),
							(this.minActive = _t(this.active, this.activeTo));
					}
					next() {
						let t = this.to,
							e = this.point;
						this.point = null;
						let i = this.openStart < 0 ? [] : null;
						for (;;) {
							let n = this.minActive;
							if (
								n > -1 &&
								(this.activeTo[n] - this.cursor.from ||
									this.active[n].endSide - this.cursor.startSide) < 0
							) {
								if (this.activeTo[n] > t) {
									(this.to = this.activeTo[n]),
										(this.endSide = this.active[n].endSide);
									break;
								}
								this.removeActive(n), i && Yt(i, n);
							} else {
								if (!this.cursor.value) {
									this.to = this.endSide = 1e9;
									break;
								}
								if (this.cursor.from > t) {
									(this.to = this.cursor.from),
										(this.endSide = this.cursor.startSide);
									break;
								}
								{
									let t = this.cursor.value;
									if (t.point) {
										if (
											!(
												e &&
												this.cursor.to == this.to &&
												this.cursor.from < this.cursor.to
											)
										) {
											(this.point = t),
												(this.pointFrom = this.cursor.from),
												(this.pointRank = this.cursor.rank),
												(this.to = this.cursor.to),
												(this.endSide = t.endSide),
												this.cursor.next(),
												this.forward(this.to, this.endSide);
											break;
										}
										this.cursor.next();
									} else this.addActive(i), this.cursor.next();
								}
							}
						}
						if (i) {
							this.openStart = 0;
							for (let e = i.length - 1; e >= 0 && i[e] < t; e--)
								this.openStart++;
						}
					}
					activeForPoint(t) {
						if (!this.active.length) return this.active;
						let e = [];
						for (
							let i = this.active.length - 1;
							i >= 0 && !(this.activeRank[i] < this.pointRank);
							i--
						)
							(this.activeTo[i] > t ||
								(this.activeTo[i] == t &&
									this.active[i].endSide >= this.point.endSide)) &&
								e.push(this.active[i]);
						return e.reverse();
					}
					openEnd(t) {
						let e = 0;
						for (
							let i = this.activeTo.length - 1;
							i >= 0 && this.activeTo[i] > t;
							i--
						)
							e++;
						return e;
					}
				}
				function Vt(t, e, i, n, r, s) {
					t.goto(e), i.goto(n);
					let o = n + r,
						a = n,
						l = n - e;
					for (;;) {
						let e = t.to + l - i.to || t.endSide - i.endSide,
							n = e < 0 ? t.to + l : i.to,
							r = Math.min(n, o);
						if (
							(t.point || i.point
								? (t.point &&
										i.point &&
										(t.point == i.point || t.point.eq(i.point)) &&
										Wt(t.activeForPoint(t.to + l), i.activeForPoint(i.to))) ||
								  s.comparePoint(a, r, t.point, i.point)
								: r > a &&
								  !Wt(t.active, i.active) &&
								  s.compareRange(a, r, t.active, i.active),
							n > o)
						)
							break;
						(a = n), e <= 0 && t.next(), e >= 0 && i.next();
					}
				}
				function Wt(t, e) {
					if (t.length != e.length) return !1;
					for (let i = 0; i < t.length; i++)
						if (t[i] != e[i] && !t[i].eq(e[i])) return !1;
					return !0;
				}
				function Yt(t, e) {
					for (let i = e, n = t.length - 1; i < n; i++) t[i] = t[i + 1];
					t.pop();
				}
				function Rt(t, e, i) {
					for (let i = t.length - 1; i >= e; i--) t[i + 1] = t[i];
					t[e] = i;
				}
				function _t(t, e) {
					let i = -1,
						n = 1e9;
					for (let r = 0; r < e.length; r++)
						(e[r] - n || t[r].endSide - t[i].endSide) < 0 &&
							((i = r), (n = e[r]));
					return i;
				}
				function Mt(t, e, i = t.length) {
					let n = 0;
					for (let r = 0; r < i; )
						9 == t.charCodeAt(r)
							? ((n += e - (n % e)), r++)
							: (n++, (r = g(t, r)));
					return n;
				}
				function qt(t, e, i, n) {
					for (let n = 0, r = 0; ; ) {
						if (r >= e) return n;
						if (n == t.length) break;
						(r += 9 == t.charCodeAt(n) ? i - (r % i) : 1), (n = g(t, n));
					}
					return !0 === n ? -1 : t.length;
				}
				const Ut = "undefined" == typeof Symbol ? "__ͼ" : Symbol.for("ͼ"),
					jt =
						"undefined" == typeof Symbol
							? "__styleSet" + Math.floor(1e8 * Math.random())
							: Symbol("styleSet"),
					Dt =
						"undefined" != typeof globalThis
							? globalThis
							: "undefined" != typeof window
							? window
							: {};
				class Et {
					constructor(t, e) {
						this.rules = [];
						let { finish: i } = e || {};
						function n(t) {
							return /^@/.test(t) ? [t] : t.split(/,\s*/);
						}
						function r(t, e, s, o) {
							let a = [],
								l = /^@(\w+)\b/.exec(t[0]),
								h = l && "keyframes" == l[1];
							if (l && null == e) return s.push(t[0] + ";");
							for (let i in e) {
								let o = e[i];
								if (/&/.test(i))
									r(
										i
											.split(/,\s*/)
											.map((e) => t.map((t) => e.replace(/&/, t)))
											.reduce((t, e) => t.concat(e)),
										o,
										s
									);
								else if (o && "object" == typeof o) {
									if (!l)
										throw new RangeError(
											"The value of a property (" +
												i +
												") should be a primitive value."
										);
									r(n(i), o, a, h);
								} else
									null != o &&
										a.push(
											i
												.replace(/_.*/, "")
												.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase()) +
												": " +
												o +
												";"
										);
							}
							(a.length || h) &&
								s.push(
									(!i || l || o ? t : t.map(i)).join(", ") +
										" {" +
										a.join(" ") +
										"}"
								);
						}
						for (let e in t) r(n(e), t[e], this.rules);
					}
					getRules() {
						return this.rules.join("\n");
					}
					static newName() {
						let t = Dt[Ut] || 1;
						return (Dt[Ut] = t + 1), "ͼ" + t.toString(36);
					}
					static mount(t, e) {
						(t[jt] || new It(t)).mount(Array.isArray(e) ? e : [e]);
					}
				}
				let Gt = null;
				class It {
					constructor(t) {
						if (
							!t.head &&
							t.adoptedStyleSheets &&
							"undefined" != typeof CSSStyleSheet
						) {
							if (Gt)
								return (
									(t.adoptedStyleSheets = [Gt.sheet].concat(
										t.adoptedStyleSheets
									)),
									(t[jt] = Gt)
								);
							(this.sheet = new CSSStyleSheet()),
								(t.adoptedStyleSheets = [this.sheet].concat(
									t.adoptedStyleSheets
								)),
								(Gt = this);
						} else {
							this.styleTag = (t.ownerDocument || t).createElement("style");
							let e = t.head || t;
							e.insertBefore(this.styleTag, e.firstChild);
						}
						(this.modules = []), (t[jt] = this);
					}
					mount(t) {
						let e = this.sheet,
							i = 0,
							n = 0;
						for (let r = 0; r < t.length; r++) {
							let s = t[r],
								o = this.modules.indexOf(s);
							if (
								(o < n && o > -1 && (this.modules.splice(o, 1), n--, (o = -1)),
								-1 == o)
							) {
								if ((this.modules.splice(n++, 0, s), e))
									for (let t = 0; t < s.rules.length; t++)
										e.insertRule(s.rules[t], i++);
							} else {
								for (; n < o; ) i += this.modules[n++].rules.length;
								(i += s.rules.length), n++;
							}
						}
						if (!e) {
							let t = "";
							for (let e = 0; e < this.modules.length; e++)
								t += this.modules[e].getRules() + "\n";
							this.styleTag.textContent = t;
						}
					}
				}
				for (
					var zt = {
							8: "Backspace",
							9: "Tab",
							10: "Enter",
							12: "NumLock",
							13: "Enter",
							16: "Shift",
							17: "Control",
							18: "Alt",
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
							44: "PrintScreen",
							45: "Insert",
							46: "Delete",
							59: ";",
							61: "=",
							91: "Meta",
							92: "Meta",
							106: "*",
							107: "+",
							108: ",",
							109: "-",
							110: ".",
							111: "/",
							144: "NumLock",
							145: "ScrollLock",
							160: "Shift",
							161: "Shift",
							162: "Control",
							163: "Control",
							164: "Alt",
							165: "Alt",
							173: "-",
							186: ";",
							187: "=",
							188: ",",
							189: "-",
							190: ".",
							191: "/",
							192: "`",
							219: "[",
							220: "\\",
							221: "]",
							222: "'"
						},
						Bt = {
							48: ")",
							49: "!",
							50: "@",
							51: "#",
							52: "$",
							53: "%",
							54: "^",
							55: "&",
							56: "*",
							57: "(",
							59: ":",
							61: "+",
							173: "_",
							186: ":",
							187: "+",
							188: "<",
							189: "_",
							190: ">",
							191: "?",
							192: "~",
							219: "{",
							220: "|",
							221: "}",
							222: '"'
						},
						Nt =
							"undefined" != typeof navigator &&
							/Chrome\/(\d+)/.exec(navigator.userAgent),
						Lt =
							("undefined" != typeof navigator &&
								/Gecko\/\d+/.test(navigator.userAgent),
							"undefined" != typeof navigator &&
								/Mac/.test(navigator.platform)),
						Ht =
							"undefined" != typeof navigator &&
							/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(
								navigator.userAgent
							),
						Ft = Lt || (Nt && +Nt[1] < 57),
						Jt = 0;
					Jt < 10;
					Jt++
				)
					zt[48 + Jt] = zt[96 + Jt] = String(Jt);
				for (Jt = 1; Jt <= 24; Jt++) zt[Jt + 111] = "F" + Jt;
				for (Jt = 65; Jt <= 90; Jt++)
					(zt[Jt] = String.fromCharCode(Jt + 32)),
						(Bt[Jt] = String.fromCharCode(Jt));
				for (var Kt in zt) Bt.hasOwnProperty(Kt) || (Bt[Kt] = zt[Kt]);
				function te(t) {
					let e;
					return (
						(e = 11 == t.nodeType ? (t.getSelection ? t : t.ownerDocument) : t),
						e.getSelection()
					);
				}
				function ee(t, e) {
					return (
						!!e && (t == e || t.contains(1 != e.nodeType ? e.parentNode : e))
					);
				}
				function ie(t, e) {
					if (!e.anchorNode) return !1;
					try {
						return ee(t, e.anchorNode);
					} catch (t) {
						return !1;
					}
				}
				function ne(t) {
					return 3 == t.nodeType
						? pe(t, 0, t.nodeValue.length).getClientRects()
						: 1 == t.nodeType
						? t.getClientRects()
						: [];
				}
				function re(t, e, i, n) {
					return !!i && (oe(t, e, i, n, -1) || oe(t, e, i, n, 1));
				}
				function se(t) {
					for (var e = 0; ; e++) if (!(t = t.previousSibling)) return e;
				}
				function oe(t, e, i, n, r) {
					for (;;) {
						if (t == i && e == n) return !0;
						if (e == (r < 0 ? 0 : ae(t))) {
							if ("DIV" == t.nodeName) return !1;
							let i = t.parentNode;
							if (!i || 1 != i.nodeType) return !1;
							(e = se(t) + (r < 0 ? 0 : 1)), (t = i);
						} else {
							if (1 != t.nodeType) return !1;
							if (
								1 == (t = t.childNodes[e + (r < 0 ? -1 : 0)]).nodeType &&
								"false" == t.contentEditable
							)
								return !1;
							e = r < 0 ? ae(t) : 0;
						}
					}
				}
				function ae(t) {
					return 3 == t.nodeType ? t.nodeValue.length : t.childNodes.length;
				}
				const le = { left: 0, right: 0, top: 0, bottom: 0 };
				function he(t, e) {
					let i = e ? t.left : t.right;
					return { left: i, right: i, top: t.top, bottom: t.bottom };
				}
				function ce(t) {
					return {
						left: 0,
						right: t.innerWidth,
						top: 0,
						bottom: t.innerHeight
					};
				}
				class Oe {
					constructor() {
						(this.anchorNode = null),
							(this.anchorOffset = 0),
							(this.focusNode = null),
							(this.focusOffset = 0);
					}
					eq(t) {
						return (
							this.anchorNode == t.anchorNode &&
							this.anchorOffset == t.anchorOffset &&
							this.focusNode == t.focusNode &&
							this.focusOffset == t.focusOffset
						);
					}
					setRange(t) {
						this.set(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset);
					}
					set(t, e, i, n) {
						(this.anchorNode = t),
							(this.anchorOffset = e),
							(this.focusNode = i),
							(this.focusOffset = n);
					}
				}
				let ue,
					fe = null;
				function de(t) {
					if (t.setActive) return t.setActive();
					if (fe) return t.focus(fe);
					let e = [];
					for (
						let i = t;
						i && (e.push(i, i.scrollTop, i.scrollLeft), i != i.ownerDocument);
						i = i.parentNode
					);
					if (
						(t.focus(
							null == fe
								? {
										get preventScroll() {
											return (fe = { preventScroll: !0 }), !0;
										}
								  }
								: void 0
						),
						!fe)
					) {
						fe = !1;
						for (let t = 0; t < e.length; ) {
							let i = e[t++],
								n = e[t++],
								r = e[t++];
							i.scrollTop != n && (i.scrollTop = n),
								i.scrollLeft != r && (i.scrollLeft = r);
						}
					}
				}
				function pe(t, e, i = e) {
					let n = ue || (ue = document.createRange());
					return n.setEnd(t, i), n.setStart(t, e), n;
				}
				function ge(t, e, i) {
					let n = { key: e, code: e, keyCode: i, which: i, cancelable: !0 },
						r = new KeyboardEvent("keydown", n);
					(r.synthetic = !0), t.dispatchEvent(r);
					let s = new KeyboardEvent("keyup", n);
					return (
						(s.synthetic = !0),
						t.dispatchEvent(s),
						r.defaultPrevented || s.defaultPrevented
					);
				}
				function me(t) {
					for (; t.attributes.length; ) t.removeAttributeNode(t.attributes[0]);
				}
				class Se {
					constructor(t, e, i = !0) {
						(this.node = t), (this.offset = e), (this.precise = i);
					}
					static before(t, e) {
						return new Se(t.parentNode, se(t), e);
					}
					static after(t, e) {
						return new Se(t.parentNode, se(t) + 1, e);
					}
				}
				const Qe = [];
				class ve {
					constructor() {
						(this.parent = null), (this.dom = null), (this.dirty = 2);
					}
					get overrideDOMText() {
						return null;
					}
					get posAtStart() {
						return this.parent ? this.parent.posBefore(this) : 0;
					}
					get posAtEnd() {
						return this.posAtStart + this.length;
					}
					posBefore(t) {
						let e = this.posAtStart;
						for (let i of this.children) {
							if (i == t) return e;
							e += i.length + i.breakAfter;
						}
						throw new RangeError("Invalid child in posBefore");
					}
					posAfter(t) {
						return this.posBefore(t) + t.length;
					}
					coordsAt(t, e) {
						return null;
					}
					sync(t, e) {
						if (2 & this.dirty) {
							let i,
								n = this.dom,
								r = null;
							for (let s of this.children) {
								if (s.dirty) {
									if (!s.dom && (i = r ? r.nextSibling : n.firstChild)) {
										let t = ve.get(i);
										(!t || (!t.parent && t.canReuseDOM(s))) && s.reuseDOM(i);
									}
									s.sync(t, e), (s.dirty = 0);
								}
								if (
									((i = r ? r.nextSibling : n.firstChild),
									e &&
										!e.written &&
										e.node == n &&
										i != s.dom &&
										(e.written = !0),
									s.dom.parentNode == n)
								)
									for (; i && i != s.dom; ) i = ye(i);
								else n.insertBefore(s.dom, i);
								r = s.dom;
							}
							for (
								i = r ? r.nextSibling : n.firstChild,
									i && e && e.node == n && (e.written = !0);
								i;

							)
								i = ye(i);
						} else if (1 & this.dirty)
							for (let i of this.children)
								i.dirty && (i.sync(t, e), (i.dirty = 0));
					}
					reuseDOM(t) {}
					localPosFromDOM(t, e) {
						let i;
						if (t == this.dom) i = this.dom.childNodes[e];
						else {
							let n = 0 == ae(t) ? 0 : 0 == e ? -1 : 1;
							for (;;) {
								let e = t.parentNode;
								if (e == this.dom) break;
								0 == n &&
									e.firstChild != e.lastChild &&
									(n = t == e.firstChild ? -1 : 1),
									(t = e);
							}
							i = n < 0 ? t : t.nextSibling;
						}
						if (i == this.dom.firstChild) return 0;
						for (; i && !ve.get(i); ) i = i.nextSibling;
						if (!i) return this.length;
						for (let t = 0, e = 0; ; t++) {
							let n = this.children[t];
							if (n.dom == i) return e;
							e += n.length + n.breakAfter;
						}
					}
					domBoundsAround(t, e, i = 0) {
						let n = -1,
							r = -1,
							s = -1,
							o = -1;
						for (let a = 0, l = i, h = i; a < this.children.length; a++) {
							let i = this.children[a],
								c = l + i.length;
							if (l < t && c > e) return i.domBoundsAround(t, e, l);
							if (
								(c >= t && -1 == n && ((n = a), (r = l)),
								l > e && i.dom.parentNode == this.dom)
							) {
								(s = a), (o = h);
								break;
							}
							(h = c), (l = c + i.breakAfter);
						}
						return {
							from: r,
							to: o < 0 ? i + this.length : o,
							startDOM:
								(n ? this.children[n - 1].dom.nextSibling : null) ||
								this.dom.firstChild,
							endDOM:
								s < this.children.length && s >= 0 ? this.children[s].dom : null
						};
					}
					markDirty(t = !1) {
						(this.dirty |= 2), this.markParentsDirty(t);
					}
					markParentsDirty(t) {
						for (let e = this.parent; e; e = e.parent) {
							if ((t && (e.dirty |= 2), 1 & e.dirty)) return;
							(e.dirty |= 1), (t = !1);
						}
					}
					setParent(t) {
						this.parent != t &&
							((this.parent = t), this.dirty && this.markParentsDirty(!0));
					}
					setDOM(t) {
						this.dom && (this.dom.cmView = null),
							(this.dom = t),
							(t.cmView = this);
					}
					get rootView() {
						for (let t = this; ; ) {
							let e = t.parent;
							if (!e) return t;
							t = e;
						}
					}
					replaceChildren(t, e, i = Qe) {
						this.markDirty();
						for (let i = t; i < e; i++) {
							let t = this.children[i];
							t.parent == this && t.destroy();
						}
						this.children.splice(t, e - t, ...i);
						for (let t = 0; t < i.length; t++) i[t].setParent(this);
					}
					ignoreMutation(t) {
						return !1;
					}
					ignoreEvent(t) {
						return !1;
					}
					childCursor(t = this.length) {
						return new be(this.children, t, this.children.length);
					}
					childPos(t, e = 1) {
						return this.childCursor().findPos(t, e);
					}
					toString() {
						let t = this.constructor.name.replace("View", "");
						return (
							t +
							(this.children.length
								? "(" + this.children.join() + ")"
								: this.length
								? "[" + ("Text" == t ? this.text : this.length) + "]"
								: "") +
							(this.breakAfter ? "#" : "")
						);
					}
					static get(t) {
						return t.cmView;
					}
					get isEditable() {
						return !0;
					}
					get isWidget() {
						return !1;
					}
					merge(t, e, i, n, r, s) {
						return !1;
					}
					become(t) {
						return !1;
					}
					canReuseDOM(t) {
						return t.constructor == this.constructor;
					}
					getSide() {
						return 0;
					}
					destroy() {
						this.parent = null;
					}
				}
				function ye(t) {
					let e = t.nextSibling;
					return t.parentNode.removeChild(t), e;
				}
				ve.prototype.breakAfter = 0;
				class be {
					constructor(t, e, i) {
						(this.children = t), (this.pos = e), (this.i = i), (this.off = 0);
					}
					findPos(t, e = 1) {
						for (;;) {
							if (
								t > this.pos ||
								(t == this.pos &&
									(e > 0 ||
										0 == this.i ||
										this.children[this.i - 1].breakAfter))
							)
								return (this.off = t - this.pos), this;
							let i = this.children[--this.i];
							this.pos -= i.length + i.breakAfter;
						}
					}
				}
				function we(t, e, i, n, r, s, o, a, l) {
					let { children: h } = t,
						c = h.length ? h[e] : null,
						O = s.length ? s[s.length - 1] : null,
						u = O ? O.breakAfter : o;
					if (
						!(
							e == n &&
							c &&
							!o &&
							!u &&
							s.length < 2 &&
							c.merge(i, r, s.length ? O : null, 0 == i, a, l)
						)
					) {
						if (n < h.length) {
							let t = h[n];
							t && r < t.length
								? (e == n && ((t = t.split(r)), (r = 0)),
								  !u && O && t.merge(0, r, O, !0, 0, l)
										? (s[s.length - 1] = t)
										: (r && t.merge(0, r, null, !1, 0, l), s.push(t)))
								: (null == t ? void 0 : t.breakAfter) &&
								  (O ? (O.breakAfter = 1) : (o = 1)),
								n++;
						}
						for (
							c &&
							((c.breakAfter = o),
							i > 0 &&
								(!o && s.length && c.merge(i, c.length, s[0], !1, a, 0)
									? (c.breakAfter = s.shift().breakAfter)
									: (i < c.length ||
											(c.children.length &&
												0 == c.children[c.children.length - 1].length)) &&
									  c.merge(i, c.length, null, !1, a, 0),
								e++));
							e < n && s.length;

						)
							if (h[n - 1].become(s[s.length - 1]))
								n--, s.pop(), (l = s.length ? 0 : a);
							else {
								if (!h[e].become(s[0])) break;
								e++, s.shift(), (a = s.length ? 0 : l);
							}
						!s.length &&
							e &&
							n < h.length &&
							!h[e - 1].breakAfter &&
							h[n].merge(0, 0, h[e - 1], !1, a, l) &&
							e--,
							(e < n || s.length) && t.replaceChildren(e, n, s);
					}
				}
				function xe(t, e, i, n, r, s) {
					let o = t.childCursor(),
						{ i: a, off: l } = o.findPos(i, 1),
						{ i: h, off: c } = o.findPos(e, -1),
						O = e - i;
					for (let t of n) O += t.length;
					(t.length += O), we(t, h, c, a, l, n, 0, r, s);
				}
				let $e =
						"undefined" != typeof navigator
							? navigator
							: { userAgent: "", vendor: "", platform: "" },
					Pe =
						"undefined" != typeof document
							? document
							: { documentElement: { style: {} } };
				const ke = /Edge\/(\d+)/.exec($e.userAgent),
					Xe = /MSIE \d/.test($e.userAgent),
					Ze = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec($e.userAgent),
					Te = !!(Xe || Ze || ke),
					Ce = !Te && /gecko\/(\d+)/i.test($e.userAgent),
					Ae = !Te && /Chrome\/(\d+)/.exec($e.userAgent),
					Ve = "webkitFontSmoothing" in Pe.documentElement.style,
					We = !Te && /Apple Computer/.test($e.vendor),
					Ye =
						We && (/Mobile\/\w+/.test($e.userAgent) || $e.maxTouchPoints > 2);
				var Re = {
					mac: Ye || /Mac/.test($e.platform),
					windows: /Win/.test($e.platform),
					linux: /Linux|X11/.test($e.platform),
					ie: Te,
					ie_version: Xe ? Pe.documentMode || 6 : Ze ? +Ze[1] : ke ? +ke[1] : 0,
					gecko: Ce,
					gecko_version: Ce
						? +(/Firefox\/(\d+)/.exec($e.userAgent) || [0, 0])[1]
						: 0,
					chrome: !!Ae,
					chrome_version: Ae ? +Ae[1] : 0,
					ios: Ye,
					android: /Android\b/.test($e.userAgent),
					webkit: Ve,
					safari: We,
					webkit_version: Ve
						? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1]
						: 0,
					tabSize:
						null != Pe.documentElement.style.tabSize
							? "tab-size"
							: "-moz-tab-size"
				};
				class _e extends ve {
					constructor(t) {
						super(), (this.text = t);
					}
					get length() {
						return this.text.length;
					}
					createDOM(t) {
						this.setDOM(t || document.createTextNode(this.text));
					}
					sync(t, e) {
						this.dom || this.createDOM(),
							this.dom.nodeValue != this.text &&
								(e && e.node == this.dom && (e.written = !0),
								(this.dom.nodeValue = this.text));
					}
					reuseDOM(t) {
						3 == t.nodeType && this.createDOM(t);
					}
					merge(t, e, i) {
						return (
							(!i ||
								(i instanceof _e &&
									!(this.length - (e - t) + i.length > 256))) &&
							((this.text =
								this.text.slice(0, t) + (i ? i.text : "") + this.text.slice(e)),
							this.markDirty(),
							!0)
						);
					}
					split(t) {
						let e = new _e(this.text.slice(t));
						return (this.text = this.text.slice(0, t)), this.markDirty(), e;
					}
					localPosFromDOM(t, e) {
						return t == this.dom ? e : e ? this.text.length : 0;
					}
					domAtPos(t) {
						return new Se(this.dom, t);
					}
					domBoundsAround(t, e, i) {
						return {
							from: i,
							to: i + this.length,
							startDOM: this.dom,
							endDOM: this.dom.nextSibling
						};
					}
					coordsAt(t, e) {
						return qe(this.dom, t, e);
					}
				}
				class Me extends ve {
					constructor(t, e = [], i = 0) {
						super(), (this.mark = t), (this.children = e), (this.length = i);
						for (let t of e) t.setParent(this);
					}
					setAttrs(t) {
						if (
							(me(t),
							this.mark.class && (t.className = this.mark.class),
							this.mark.attrs)
						)
							for (let e in this.mark.attrs)
								t.setAttribute(e, this.mark.attrs[e]);
						return t;
					}
					reuseDOM(t) {
						t.nodeName == this.mark.tagName.toUpperCase() &&
							(this.setDOM(t), (this.dirty |= 6));
					}
					sync(t, e) {
						this.dom
							? 4 & this.dirty && this.setAttrs(this.dom)
							: this.setDOM(
									this.setAttrs(document.createElement(this.mark.tagName))
							  ),
							super.sync(t, e);
					}
					merge(t, e, i, n, r, s) {
						return !(
							(i &&
								(!(i instanceof Me && i.mark.eq(this.mark)) ||
									(t && r <= 0) ||
									(e < this.length && s <= 0))) ||
							(xe(this, t, e, i ? i.children : [], r - 1, s - 1),
							this.markDirty(),
							0)
						);
					}
					split(t) {
						let e = [],
							i = 0,
							n = -1,
							r = 0;
						for (let s of this.children) {
							let o = i + s.length;
							o > t && e.push(i < t ? s.split(t - i) : s),
								n < 0 && i >= t && (n = r),
								(i = o),
								r++;
						}
						let s = this.length - t;
						return (
							(this.length = t),
							n > -1 && ((this.children.length = n), this.markDirty()),
							new Me(this.mark, e, s)
						);
					}
					domAtPos(t) {
						return Ie(this, t);
					}
					coordsAt(t, e) {
						return Be(this, t, e);
					}
				}
				function qe(t, e, i) {
					let n = t.nodeValue.length;
					e > n && (e = n);
					let r = e,
						s = e,
						o = 0;
					(0 == e && i < 0) || (e == n && i >= 0)
						? Re.chrome ||
						  Re.gecko ||
						  (e ? (r--, (o = 1)) : s < n && (s++, (o = -1)))
						: i < 0
						? r--
						: s < n && s++;
					let a = pe(t, r, s).getClientRects();
					if (!a.length) return le;
					let l = a[(o ? o < 0 : i >= 0) ? 0 : a.length - 1];
					return (
						Re.safari &&
							!o &&
							0 == l.width &&
							(l = Array.prototype.find.call(a, (t) => t.width) || l),
						o ? he(l, o < 0) : l || null
					);
				}
				class Ue extends ve {
					constructor(t, e, i) {
						super(),
							(this.widget = t),
							(this.length = e),
							(this.side = i),
							(this.prevWidget = null);
					}
					static create(t, e, i) {
						return new (t.customView || Ue)(t, e, i);
					}
					split(t) {
						let e = Ue.create(this.widget, this.length - t, this.side);
						return (this.length -= t), e;
					}
					sync(t) {
						(this.dom && this.widget.updateDOM(this.dom, t)) ||
							(this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
							(this.prevWidget = null),
							this.setDOM(this.widget.toDOM(t)),
							(this.dom.contentEditable = "false"));
					}
					getSide() {
						return this.side;
					}
					merge(t, e, i, n, r, s) {
						return !(
							(i &&
								(!(i instanceof Ue && this.widget.compare(i.widget)) ||
									(t > 0 && r <= 0) ||
									(e < this.length && s <= 0))) ||
							((this.length = t + (i ? i.length : 0) + (this.length - e)), 0)
						);
					}
					become(t) {
						return (
							t.length == this.length &&
							t instanceof Ue &&
							t.side == this.side &&
							this.widget.constructor == t.widget.constructor &&
							(this.widget.eq(t.widget) || this.markDirty(!0),
							this.dom && !this.prevWidget && (this.prevWidget = this.widget),
							(this.widget = t.widget),
							!0)
						);
					}
					ignoreMutation() {
						return !0;
					}
					ignoreEvent(t) {
						return this.widget.ignoreEvent(t);
					}
					get overrideDOMText() {
						if (0 == this.length) return n.empty;
						let t = this;
						for (; t.parent; ) t = t.parent;
						let { view: e } = t,
							i = e && e.state.doc,
							r = this.posAtStart;
						return i ? i.slice(r, r + this.length) : n.empty;
					}
					domAtPos(t) {
						return 0 == t
							? Se.before(this.dom)
							: Se.after(this.dom, t == this.length);
					}
					domBoundsAround() {
						return null;
					}
					coordsAt(t, e) {
						let i = this.dom.getClientRects(),
							n = null;
						if (!i.length) return le;
						for (
							let e = t > 0 ? i.length - 1 : 0;
							(n = i[e]),
								!(t > 0 ? 0 == e : e == i.length - 1 || n.top < n.bottom);
							e += t > 0 ? -1 : 1
						);
						return this.length ? n : he(n, this.side > 0);
					}
					get isEditable() {
						return !1;
					}
					get isWidget() {
						return !0;
					}
					destroy() {
						super.destroy(), this.dom && this.widget.destroy(this.dom);
					}
				}
				class je extends Ue {
					domAtPos(t) {
						let { topView: e, text: i } = this.widget;
						return e
							? De(
									t,
									0,
									e,
									i,
									(t, e) => t.domAtPos(e),
									(t) => new Se(i, Math.min(t, i.nodeValue.length))
							  )
							: new Se(i, Math.min(t, i.nodeValue.length));
					}
					sync() {
						this.setDOM(this.widget.toDOM());
					}
					localPosFromDOM(t, e) {
						let { topView: i, text: n } = this.widget;
						return i ? Ee(t, e, i, n) : Math.min(e, this.length);
					}
					ignoreMutation() {
						return !1;
					}
					get overrideDOMText() {
						return null;
					}
					coordsAt(t, e) {
						let { topView: i, text: n } = this.widget;
						return i
							? De(
									t,
									e,
									i,
									n,
									(t, e, i) => t.coordsAt(e, i),
									(t, e) => qe(n, t, e)
							  )
							: qe(n, t, e);
					}
					destroy() {
						var t;
						super.destroy(),
							null === (t = this.widget.topView) || void 0 === t || t.destroy();
					}
					get isEditable() {
						return !0;
					}
					canReuseDOM() {
						return !0;
					}
				}
				function De(t, e, i, n, r, s) {
					if (i instanceof Me) {
						for (let o = i.dom.firstChild; o; o = o.nextSibling) {
							let i = ve.get(o);
							if (!i) return s(t, e);
							let a = ee(o, n),
								l = i.length + (a ? n.nodeValue.length : 0);
							if (t < l || (t == l && i.getSide() <= 0))
								return a ? De(t, e, i, n, r, s) : r(i, t, e);
							t -= l;
						}
						return r(i, i.length, -1);
					}
					return i.dom == n ? s(t, e) : r(i, t, e);
				}
				function Ee(t, e, i, n) {
					if (i instanceof Me)
						for (let r of i.children) {
							let i = 0,
								s = ee(r.dom, n);
							if (ee(r.dom, t))
								return i + (s ? Ee(t, e, r, n) : r.localPosFromDOM(t, e));
							i += s ? n.nodeValue.length : r.length;
						}
					else if (i.dom == n) return Math.min(e, n.nodeValue.length);
					return i.localPosFromDOM(t, e);
				}
				class Ge extends ve {
					constructor(t) {
						super(), (this.side = t);
					}
					get length() {
						return 0;
					}
					merge() {
						return !1;
					}
					become(t) {
						return t instanceof Ge && t.side == this.side;
					}
					split() {
						return new Ge(this.side);
					}
					sync() {
						if (!this.dom) {
							let t = document.createElement("img");
							(t.className = "cm-widgetBuffer"),
								t.setAttribute("aria-hidden", "true"),
								this.setDOM(t);
						}
					}
					getSide() {
						return this.side;
					}
					domAtPos(t) {
						return Se.before(this.dom);
					}
					localPosFromDOM() {
						return 0;
					}
					domBoundsAround() {
						return null;
					}
					coordsAt(t) {
						let e = this.dom.getBoundingClientRect(),
							i = (function (t, e) {
								let i = t.parent,
									n = i ? i.children.indexOf(t) : -1;
								for (; i && n >= 0; )
									if (e < 0 ? n > 0 : n < i.children.length) {
										let t = i.children[n + e];
										if (t instanceof _e) {
											let i = t.coordsAt(e < 0 ? t.length : 0, e);
											if (i) return i;
										}
										n += e;
									} else {
										if (!(i instanceof Me && i.parent)) {
											let t = i.dom.lastChild;
											if (t && "BR" == t.nodeName) return t.getClientRects()[0];
											break;
										}
										(n = i.parent.children.indexOf(i) + (e < 0 ? 0 : 1)),
											(i = i.parent);
									}
							})(this, this.side > 0 ? -1 : 1);
						return i && i.top < e.bottom && i.bottom > e.top
							? { left: e.left, right: e.right, top: i.top, bottom: i.bottom }
							: e;
					}
					get overrideDOMText() {
						return n.empty;
					}
				}
				function Ie(t, e) {
					let i = t.dom,
						{ children: n } = t,
						r = 0;
					for (let t = 0; r < n.length; r++) {
						let s = n[r],
							o = t + s.length;
						if (!(o == t && s.getSide() <= 0)) {
							if (e > t && e < o && s.dom.parentNode == i)
								return s.domAtPos(e - t);
							if (e <= t) break;
							t = o;
						}
					}
					for (let t = r; t > 0; t--) {
						let e = n[t - 1];
						if (e.dom.parentNode == i) return e.domAtPos(e.length);
					}
					for (let t = r; t < n.length; t++) {
						let e = n[t];
						if (e.dom.parentNode == i) return e.domAtPos(0);
					}
					return new Se(i, 0);
				}
				function ze(t, e, i) {
					let n,
						{ children: r } = t;
					i > 0 &&
					e instanceof Me &&
					r.length &&
					(n = r[r.length - 1]) instanceof Me &&
					n.mark.eq(e.mark)
						? ze(n, e.children[0], i - 1)
						: (r.push(e), e.setParent(t)),
						(t.length += e.length);
				}
				function Be(t, e, i) {
					let n = null,
						r = -1,
						s = null,
						o = -1;
					!(function t(e, i) {
						for (let a = 0, l = 0; a < e.children.length && l <= i; a++) {
							let h = e.children[a],
								c = l + h.length;
							c >= i &&
								(h.children.length
									? t(h, i - l)
									: !s && (c > i || (l == c && h.getSide() > 0))
									? ((s = h), (o = i - l))
									: (l < i || (l == c && h.getSide() < 0)) &&
									  ((n = h), (r = i - l))),
								(l = c);
						}
					})(t, e);
					let a = (i < 0 ? n : s) || n || s;
					return a
						? a.coordsAt(Math.max(0, a == n ? r : o), i)
						: (function (t) {
								let e = t.dom.lastChild;
								if (!e) return t.dom.getBoundingClientRect();
								let i = ne(e);
								return i[i.length - 1] || null;
						  })(t);
				}
				function Ne(t, e) {
					for (let i in t)
						"class" == i && e.class
							? (e.class += " " + t.class)
							: "style" == i && e.style
							? (e.style += ";" + t.style)
							: (e[i] = t[i]);
					return e;
				}
				function Le(t, e) {
					if (t == e) return !0;
					if (!t || !e) return !1;
					let i = Object.keys(t),
						n = Object.keys(e);
					if (i.length != n.length) return !1;
					for (let r of i) if (-1 == n.indexOf(r) || t[r] !== e[r]) return !1;
					return !0;
				}
				function He(t, e, i) {
					let n = null;
					if (e) for (let r in e) (i && r in i) || t.removeAttribute((n = r));
					if (i)
						for (let r in i)
							(e && e[r] == i[r]) || t.setAttribute((n = r), i[r]);
					return !!n;
				}
				_e.prototype.children =
					Ue.prototype.children =
					Ge.prototype.children =
						Qe;
				class Fe {
					eq(t) {
						return !1;
					}
					updateDOM(t, e) {
						return !1;
					}
					compare(t) {
						return (
							this == t || (this.constructor == t.constructor && this.eq(t))
						);
					}
					get estimatedHeight() {
						return -1;
					}
					ignoreEvent(t) {
						return !0;
					}
					get customView() {
						return null;
					}
					destroy(t) {}
				}
				var Je = (function (t) {
					return (
						(t[(t.Text = 0)] = "Text"),
						(t[(t.WidgetBefore = 1)] = "WidgetBefore"),
						(t[(t.WidgetAfter = 2)] = "WidgetAfter"),
						(t[(t.WidgetRange = 3)] = "WidgetRange"),
						t
					);
				})(Je || (Je = {}));
				class Ke extends bt {
					constructor(t, e, i, n) {
						super(),
							(this.startSide = t),
							(this.endSide = e),
							(this.widget = i),
							(this.spec = n);
					}
					get heightRelevant() {
						return !1;
					}
					static mark(t) {
						return new ti(t);
					}
					static widget(t) {
						let e = t.side || 0,
							i = !!t.block;
						return (
							(e += i ? (e > 0 ? 3e8 : -4e8) : e > 0 ? 1e8 : -1e8),
							new ii(t, e, e, i, t.widget || null, !1)
						);
					}
					static replace(t) {
						let e,
							i,
							n = !!t.block;
						if (t.isBlockGap) (e = -5e8), (i = 4e8);
						else {
							let { start: r, end: s } = ni(t, n);
							(e = (r ? (n ? -3e8 : -1) : 5e8) - 1),
								(i = 1 + (s ? (n ? 2e8 : 1) : -6e8));
						}
						return new ii(t, e, i, n, t.widget || null, !0);
					}
					static line(t) {
						return new ei(t);
					}
					static set(t, e = !1) {
						return Pt.of(t, e);
					}
					hasHeight() {
						return !!this.widget && this.widget.estimatedHeight > -1;
					}
				}
				Ke.none = Pt.empty;
				class ti extends Ke {
					constructor(t) {
						let { start: e, end: i } = ni(t);
						super(e ? -1 : 5e8, i ? 1 : -6e8, null, t),
							(this.tagName = t.tagName || "span"),
							(this.class = t.class || ""),
							(this.attrs = t.attributes || null);
					}
					eq(t) {
						return (
							this == t ||
							(t instanceof ti &&
								this.tagName == t.tagName &&
								this.class == t.class &&
								Le(this.attrs, t.attrs))
						);
					}
					range(t, e = t) {
						if (t >= e)
							throw new RangeError("Mark decorations may not be empty");
						return super.range(t, e);
					}
				}
				ti.prototype.point = !1;
				class ei extends Ke {
					constructor(t) {
						super(-2e8, -2e8, null, t);
					}
					eq(t) {
						return (
							t instanceof ei &&
							this.spec.class == t.spec.class &&
							Le(this.spec.attributes, t.spec.attributes)
						);
					}
					range(t, e = t) {
						if (e != t)
							throw new RangeError(
								"Line decoration ranges must be zero-length"
							);
						return super.range(t, e);
					}
				}
				(ei.prototype.mapMode = x.TrackBefore), (ei.prototype.point = !0);
				class ii extends Ke {
					constructor(t, e, i, n, r, s) {
						super(e, i, r, t),
							(this.block = n),
							(this.isReplace = s),
							(this.mapMode = n
								? e <= 0
									? x.TrackBefore
									: x.TrackAfter
								: x.TrackDel);
					}
					get type() {
						return this.startSide < this.endSide
							? Je.WidgetRange
							: this.startSide <= 0
							? Je.WidgetBefore
							: Je.WidgetAfter;
					}
					get heightRelevant() {
						return (
							this.block || (!!this.widget && this.widget.estimatedHeight >= 5)
						);
					}
					eq(t) {
						return (
							t instanceof ii &&
							((e = this.widget) == (i = t.widget) ||
								!!(e && i && e.compare(i))) &&
							this.block == t.block &&
							this.startSide == t.startSide &&
							this.endSide == t.endSide
						);
						var e, i;
					}
					range(t, e = t) {
						if (
							this.isReplace &&
							(t > e || (t == e && this.startSide > 0 && this.endSide <= 0))
						)
							throw new RangeError("Invalid range for replacement decoration");
						if (!this.isReplace && e != t)
							throw new RangeError(
								"Widget decorations can only have zero-length ranges"
							);
						return super.range(t, e);
					}
				}
				function ni(t, e = !1) {
					let { inclusiveStart: i, inclusiveEnd: n } = t;
					return (
						null == i && (i = t.inclusive),
						null == n && (n = t.inclusive),
						{ start: null != i ? i : e, end: null != n ? n : e }
					);
				}
				function ri(t, e, i, n = 0) {
					let r = i.length - 1;
					r >= 0 && i[r] + n >= t ? (i[r] = Math.max(i[r], e)) : i.push(t, e);
				}
				ii.prototype.point = !0;
				class si extends ve {
					constructor() {
						super(...arguments),
							(this.children = []),
							(this.length = 0),
							(this.prevAttrs = void 0),
							(this.attrs = null),
							(this.breakAfter = 0);
					}
					merge(t, e, i, n, r, s) {
						if (i) {
							if (!(i instanceof si)) return !1;
							this.dom || i.transferDOM(this);
						}
						return (
							n && this.setDeco(i ? i.attrs : null),
							xe(this, t, e, i ? i.children : [], r, s),
							!0
						);
					}
					split(t) {
						let e = new si();
						if (((e.breakAfter = this.breakAfter), 0 == this.length)) return e;
						let { i, off: n } = this.childPos(t);
						n &&
							(e.append(this.children[i].split(n), 0),
							this.children[i].merge(
								n,
								this.children[i].length,
								null,
								!1,
								0,
								0
							),
							i++);
						for (let t = i; t < this.children.length; t++)
							e.append(this.children[t], 0);
						for (; i > 0 && 0 == this.children[i - 1].length; )
							this.children[--i].destroy();
						return (
							(this.children.length = i), this.markDirty(), (this.length = t), e
						);
					}
					transferDOM(t) {
						this.dom &&
							(this.markDirty(),
							t.setDOM(this.dom),
							(t.prevAttrs =
								void 0 === this.prevAttrs ? this.attrs : this.prevAttrs),
							(this.prevAttrs = void 0),
							(this.dom = null));
					}
					setDeco(t) {
						Le(this.attrs, t) ||
							(this.dom && ((this.prevAttrs = this.attrs), this.markDirty()),
							(this.attrs = t));
					}
					append(t, e) {
						ze(this, t, e);
					}
					addLineDeco(t) {
						let e = t.spec.attributes,
							i = t.spec.class;
						e && (this.attrs = Ne(e, this.attrs || {})),
							i && (this.attrs = Ne({ class: i }, this.attrs || {}));
					}
					domAtPos(t) {
						return Ie(this, t);
					}
					reuseDOM(t) {
						"DIV" == t.nodeName && (this.setDOM(t), (this.dirty |= 6));
					}
					sync(t, e) {
						var i;
						this.dom
							? 4 & this.dirty &&
							  (me(this.dom),
							  (this.dom.className = "cm-line"),
							  (this.prevAttrs = this.attrs ? null : void 0))
							: (this.setDOM(document.createElement("div")),
							  (this.dom.className = "cm-line"),
							  (this.prevAttrs = this.attrs ? null : void 0)),
							void 0 !== this.prevAttrs &&
								(He(this.dom, this.prevAttrs, this.attrs),
								this.dom.classList.add("cm-line"),
								(this.prevAttrs = void 0)),
							super.sync(t, e);
						let n = this.dom.lastChild;
						for (; n && ve.get(n) instanceof Me; ) n = n.lastChild;
						if (
							!(
								n &&
								this.length &&
								("BR" == n.nodeName ||
									0 !=
										(null === (i = ve.get(n)) || void 0 === i
											? void 0
											: i.isEditable) ||
									(Re.ios && this.children.some((t) => t instanceof _e)))
							)
						) {
							let t = document.createElement("BR");
							(t.cmIgnore = !0), this.dom.appendChild(t);
						}
					}
					measureTextSize() {
						if (0 == this.children.length || this.length > 20) return null;
						let t = 0;
						for (let e of this.children) {
							if (!(e instanceof _e) || /[^ -~]/.test(e.text)) return null;
							let i = ne(e.dom);
							if (1 != i.length) return null;
							t += i[0].width;
						}
						return t
							? {
									lineHeight: this.dom.getBoundingClientRect().height,
									charWidth: t / this.length
							  }
							: null;
					}
					coordsAt(t, e) {
						return Be(this, t, e);
					}
					become(t) {
						return !1;
					}
					get type() {
						return Je.Text;
					}
					static find(t, e) {
						for (let i = 0, n = 0; i < t.children.length; i++) {
							let r = t.children[i],
								s = n + r.length;
							if (s >= e) {
								if (r instanceof si) return r;
								if (s > e) break;
							}
							n = s + r.breakAfter;
						}
						return null;
					}
				}
				class oi extends ve {
					constructor(t, e, i) {
						super(),
							(this.widget = t),
							(this.length = e),
							(this.type = i),
							(this.breakAfter = 0),
							(this.prevWidget = null);
					}
					merge(t, e, i, n, r, s) {
						return !(
							(i &&
								(!(i instanceof oi && this.widget.compare(i.widget)) ||
									(t > 0 && r <= 0) ||
									(e < this.length && s <= 0))) ||
							((this.length = t + (i ? i.length : 0) + (this.length - e)), 0)
						);
					}
					domAtPos(t) {
						return 0 == t
							? Se.before(this.dom)
							: Se.after(this.dom, t == this.length);
					}
					split(t) {
						let e = this.length - t;
						this.length = t;
						let i = new oi(this.widget, e, this.type);
						return (i.breakAfter = this.breakAfter), i;
					}
					get children() {
						return Qe;
					}
					sync(t) {
						(this.dom && this.widget.updateDOM(this.dom, t)) ||
							(this.dom && this.prevWidget && this.prevWidget.destroy(this.dom),
							(this.prevWidget = null),
							this.setDOM(this.widget.toDOM(t)),
							(this.dom.contentEditable = "false"));
					}
					get overrideDOMText() {
						return this.parent
							? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd)
							: n.empty;
					}
					domBoundsAround() {
						return null;
					}
					become(t) {
						return (
							t instanceof oi &&
							t.type == this.type &&
							t.widget.constructor == this.widget.constructor &&
							(t.widget.eq(this.widget) || this.markDirty(!0),
							this.dom && !this.prevWidget && (this.prevWidget = this.widget),
							(this.widget = t.widget),
							(this.length = t.length),
							(this.breakAfter = t.breakAfter),
							!0)
						);
					}
					ignoreMutation() {
						return !0;
					}
					ignoreEvent(t) {
						return this.widget.ignoreEvent(t);
					}
					get isEditable() {
						return !1;
					}
					get isWidget() {
						return !0;
					}
					destroy() {
						super.destroy(), this.dom && this.widget.destroy(this.dom);
					}
				}
				class ai {
					constructor(t, e, i, n) {
						(this.doc = t),
							(this.pos = e),
							(this.end = i),
							(this.disallowBlockEffectsFor = n),
							(this.content = []),
							(this.curLine = null),
							(this.breakAtStart = 0),
							(this.pendingBuffer = 0),
							(this.bufferMarks = []),
							(this.atCursorPos = !0),
							(this.openStart = -1),
							(this.openEnd = -1),
							(this.text = ""),
							(this.textOff = 0),
							(this.cursor = t.iter()),
							(this.skip = e);
					}
					posCovered() {
						if (0 == this.content.length)
							return (
								!this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos
							);
						let t = this.content[this.content.length - 1];
						return !(
							t.breakAfter ||
							(t instanceof oi && t.type == Je.WidgetBefore)
						);
					}
					getLine() {
						return (
							this.curLine ||
								(this.content.push((this.curLine = new si())),
								(this.atCursorPos = !0)),
							this.curLine
						);
					}
					flushBuffer(t = this.bufferMarks) {
						this.pendingBuffer &&
							(this.curLine.append(li(new Ge(-1), t), t.length),
							(this.pendingBuffer = 0));
					}
					addBlockWidget(t) {
						this.flushBuffer(), (this.curLine = null), this.content.push(t);
					}
					finish(t) {
						this.pendingBuffer && t <= this.bufferMarks.length
							? this.flushBuffer()
							: (this.pendingBuffer = 0),
							this.posCovered() || this.getLine();
					}
					buildText(t, e, i) {
						for (; t > 0; ) {
							if (this.textOff == this.text.length) {
								let {
									value: e,
									lineBreak: i,
									done: n
								} = this.cursor.next(this.skip);
								if (((this.skip = 0), n))
									throw new Error(
										"Ran out of text content when drawing inline views"
									);
								if (i) {
									this.posCovered() || this.getLine(),
										this.content.length
											? (this.content[this.content.length - 1].breakAfter = 1)
											: (this.breakAtStart = 1),
										this.flushBuffer(),
										(this.curLine = null),
										(this.atCursorPos = !0),
										t--;
									continue;
								}
								(this.text = e), (this.textOff = 0);
							}
							let n = Math.min(this.text.length - this.textOff, t, 512);
							this.flushBuffer(e.slice(e.length - i)),
								this.getLine().append(
									li(
										new _e(this.text.slice(this.textOff, this.textOff + n)),
										e
									),
									i
								),
								(this.atCursorPos = !0),
								(this.textOff += n),
								(t -= n),
								(i = 0);
						}
					}
					span(t, e, i, n) {
						this.buildText(e - t, i, n),
							(this.pos = e),
							this.openStart < 0 && (this.openStart = n);
					}
					point(t, e, i, n, r, s) {
						if (this.disallowBlockEffectsFor[s] && i instanceof ii) {
							if (i.block)
								throw new RangeError(
									"Block decorations may not be specified via plugins"
								);
							if (e > this.doc.lineAt(this.pos).to)
								throw new RangeError(
									"Decorations that replace line breaks may not be specified via plugins"
								);
						}
						let o = e - t;
						if (i instanceof ii)
							if (i.block) {
								let { type: t } = i;
								t != Je.WidgetAfter || this.posCovered() || this.getLine(),
									this.addBlockWidget(new oi(i.widget || new hi("div"), o, t));
							} else {
								let s = Ue.create(
										i.widget || new hi("span"),
										o,
										o ? 0 : i.startSide
									),
									a =
										this.atCursorPos &&
										!s.isEditable &&
										r <= n.length &&
										(t < e || i.startSide > 0),
									l =
										!s.isEditable &&
										(t < e || r > n.length || i.startSide <= 0),
									h = this.getLine();
								2 != this.pendingBuffer || a || (this.pendingBuffer = 0),
									this.flushBuffer(n),
									a &&
										(h.append(li(new Ge(1), n), r),
										(r = n.length + Math.max(0, r - n.length))),
									h.append(li(s, n), r),
									(this.atCursorPos = l),
									(this.pendingBuffer = l
										? t < e || r > n.length
											? 1
											: 2
										: 0),
									this.pendingBuffer && (this.bufferMarks = n.slice());
							}
						else
							this.doc.lineAt(this.pos).from == this.pos &&
								this.getLine().addLineDeco(i);
						o &&
							(this.textOff + o <= this.text.length
								? (this.textOff += o)
								: ((this.skip += o - (this.text.length - this.textOff)),
								  (this.text = ""),
								  (this.textOff = 0)),
							(this.pos = e)),
							this.openStart < 0 && (this.openStart = r);
					}
					static build(t, e, i, n, r) {
						let s = new ai(t, e, i, r);
						return (
							(s.openEnd = Pt.spans(n, e, i, s)),
							s.openStart < 0 && (s.openStart = s.openEnd),
							s.finish(s.openEnd),
							s
						);
					}
				}
				function li(t, e) {
					for (let i of e) t = new Me(i, [t], t.length);
					return t;
				}
				class hi extends Fe {
					constructor(t) {
						super(), (this.tag = t);
					}
					eq(t) {
						return t.tag == this.tag;
					}
					toDOM() {
						return document.createElement(this.tag);
					}
					updateDOM(t) {
						return t.nodeName.toLowerCase() == this.tag;
					}
				}
				const ci = _.define(),
					Oi = _.define(),
					ui = _.define(),
					fi = _.define(),
					di = _.define(),
					pi = _.define(),
					gi = _.define(),
					mi = _.define({ combine: (t) => t.some((t) => t) }),
					Si = _.define({ combine: (t) => t.some((t) => t) });
				class Qi {
					constructor(t, e = "nearest", i = "nearest", n = 5, r = 5) {
						(this.range = t),
							(this.y = e),
							(this.x = i),
							(this.yMargin = n),
							(this.xMargin = r);
					}
					map(t) {
						return t.empty
							? this
							: new Qi(
									this.range.map(t),
									this.y,
									this.x,
									this.yMargin,
									this.xMargin
							  );
					}
				}
				const vi = ht.define({ map: (t, e) => t.map(e) });
				function yi(t, e, i) {
					let n = t.facet(fi);
					n.length
						? n[0](e)
						: window.onerror
						? window.onerror(String(e), i, void 0, void 0, e)
						: i
						? console.error(i + ":", e)
						: console.error(e);
				}
				const bi = _.define({ combine: (t) => !t.length || t[0] });
				let wi = 0;
				const xi = _.define();
				class $i {
					constructor(t, e, i, n) {
						(this.id = t),
							(this.create = e),
							(this.domEventHandlers = i),
							(this.extension = n(this));
					}
					static define(t, e) {
						const { eventHandlers: i, provide: n, decorations: r } = e || {};
						return new $i(wi++, t, i, (t) => {
							let e = [xi.of(t)];
							return (
								r &&
									e.push(
										Zi.of((e) => {
											let i = e.plugin(t);
											return i ? r(i) : Ke.none;
										})
									),
								n && e.push(n(t)),
								e
							);
						});
					}
					static fromClass(t, e) {
						return $i.define((e) => new t(e), e);
					}
				}
				class Pi {
					constructor(t) {
						(this.spec = t), (this.mustUpdate = null), (this.value = null);
					}
					update(t) {
						if (this.value) {
							if (this.mustUpdate) {
								let t = this.mustUpdate;
								if (((this.mustUpdate = null), this.value.update))
									try {
										this.value.update(t);
									} catch (e) {
										if (
											(yi(t.state, e, "CodeMirror plugin crashed"),
											this.value.destroy)
										)
											try {
												this.value.destroy();
											} catch (t) {}
										this.deactivate();
									}
							}
						} else if (this.spec)
							try {
								this.value = this.spec.create(t);
							} catch (e) {
								yi(t.state, e, "CodeMirror plugin crashed"), this.deactivate();
							}
						return this;
					}
					destroy(t) {
						var e;
						if (null === (e = this.value) || void 0 === e ? void 0 : e.destroy)
							try {
								this.value.destroy();
							} catch (e) {
								yi(t.state, e, "CodeMirror plugin crashed");
							}
					}
					deactivate() {
						this.spec = this.value = null;
					}
				}
				const ki = _.define(),
					Xi = _.define(),
					Zi = _.define(),
					Ti = _.define(),
					Ci = _.define(),
					Ai = _.define();
				class Vi {
					constructor(t, e, i, n) {
						(this.fromA = t), (this.toA = e), (this.fromB = i), (this.toB = n);
					}
					join(t) {
						return new Vi(
							Math.min(this.fromA, t.fromA),
							Math.max(this.toA, t.toA),
							Math.min(this.fromB, t.fromB),
							Math.max(this.toB, t.toB)
						);
					}
					addToSet(t) {
						let e = t.length,
							i = this;
						for (; e > 0; e--) {
							let n = t[e - 1];
							if (!(n.fromA > i.toA)) {
								if (n.toA < i.fromA) break;
								(i = i.join(n)), t.splice(e - 1, 1);
							}
						}
						return t.splice(e, 0, i), t;
					}
					static extendWithRanges(t, e) {
						if (0 == e.length) return t;
						let i = [];
						for (let n = 0, r = 0, s = 0, o = 0; ; n++) {
							let a = n == t.length ? null : t[n],
								l = s - o,
								h = a ? a.fromB : 1e9;
							for (; r < e.length && e[r] < h; ) {
								let t = e[r],
									n = e[r + 1],
									s = Math.max(o, t),
									a = Math.min(h, n);
								if ((s <= a && new Vi(s + l, a + l, s, a).addToSet(i), n > h))
									break;
								r += 2;
							}
							if (!a) return i;
							new Vi(a.fromA, a.toA, a.fromB, a.toB).addToSet(i),
								(s = a.toA),
								(o = a.toB);
						}
					}
				}
				class Wi {
					constructor(t, e, i) {
						(this.view = t),
							(this.state = e),
							(this.transactions = i),
							(this.flags = 0),
							(this.startState = t.state),
							(this.changes = P.empty(this.startState.doc.length));
						for (let t of i) this.changes = this.changes.compose(t.changes);
						let n = [];
						this.changes.iterChangedRanges((t, e, i, r) =>
							n.push(new Vi(t, e, i, r))
						),
							(this.changedRanges = n);
					}
					static create(t, e, i) {
						return new Wi(t, e, i);
					}
					get viewportChanged() {
						return (4 & this.flags) > 0;
					}
					get heightChanged() {
						return (2 & this.flags) > 0;
					}
					get geometryChanged() {
						return this.docChanged || (10 & this.flags) > 0;
					}
					get focusChanged() {
						return (1 & this.flags) > 0;
					}
					get docChanged() {
						return !this.changes.empty;
					}
					get selectionSet() {
						return this.transactions.some((t) => t.selection);
					}
					get empty() {
						return 0 == this.flags && 0 == this.transactions.length;
					}
				}
				var Yi = (function (t) {
					return (t[(t.LTR = 0)] = "LTR"), (t[(t.RTL = 1)] = "RTL"), t;
				})(Yi || (Yi = {}));
				const Ri = Yi.LTR,
					_i = Yi.RTL;
				function Mi(t) {
					let e = [];
					for (let i = 0; i < t.length; i++) e.push(1 << +t[i]);
					return e;
				}
				const qi = Mi(
						"88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008"
					),
					Ui = Mi(
						"4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333"
					),
					ji = Object.create(null),
					Di = [];
				for (let t of ["()", "[]", "{}"]) {
					let e = t.charCodeAt(0),
						i = t.charCodeAt(1);
					(ji[e] = i), (ji[i] = -e);
				}
				const Ei = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/;
				class Gi {
					constructor(t, e, i) {
						(this.from = t), (this.to = e), (this.level = i);
					}
					get dir() {
						return this.level % 2 ? _i : Ri;
					}
					side(t, e) {
						return (this.dir == e) == t ? this.to : this.from;
					}
					static find(t, e, i, n) {
						let r = -1;
						for (let s = 0; s < t.length; s++) {
							let o = t[s];
							if (o.from <= e && o.to >= e) {
								if (o.level == i) return s;
								(r < 0 ||
									(0 != n
										? n < 0
											? o.from < e
											: o.to > e
										: t[r].level > o.level)) &&
									(r = s);
							}
						}
						if (r < 0) throw new RangeError("Index out of range");
						return r;
					}
				}
				const Ii = [];
				function zi(t) {
					return [new Gi(0, t, 0)];
				}
				let Bi = "";
				function Ni(t, e, i, n, r) {
					var s;
					let o = n.head - t.from,
						a = -1;
					if (0 == o) {
						if (!r || !t.length) return null;
						e[0].level != i && ((o = e[0].side(!1, i)), (a = 0));
					} else if (o == t.length) {
						if (r) return null;
						let t = e[e.length - 1];
						t.level != i && ((o = t.side(!0, i)), (a = e.length - 1));
					}
					a < 0 &&
						(a = Gi.find(
							e,
							o,
							null !== (s = n.bidiLevel) && void 0 !== s ? s : -1,
							n.assoc
						));
					let l = e[a];
					o == l.side(r, i) &&
						((l = e[(a += r ? 1 : -1)]), (o = l.side(!r, i)));
					let h = r == (l.dir == i),
						c = g(t.text, o, h);
					if (
						((Bi = t.text.slice(Math.min(o, c), Math.max(o, c))),
						c != l.side(r, i))
					)
						return W.cursor(c + t.from, h ? -1 : 1, l.level);
					let O = a == (r ? e.length - 1 : 0) ? null : e[a + (r ? 1 : -1)];
					return O || l.level == i
						? O && O.level < l.level
							? W.cursor(O.side(!r, i) + t.from, r ? 1 : -1, O.level)
							: W.cursor(c + t.from, r ? -1 : 1, l.level)
						: W.cursor(r ? t.to : t.from, r ? -1 : 1, i);
				}
				const Li = "￿";
				class Hi {
					constructor(t, e) {
						(this.points = t),
							(this.text = ""),
							(this.lineSeparator = e.facet(vt.lineSeparator));
					}
					append(t) {
						this.text += t;
					}
					lineBreak() {
						this.text += Li;
					}
					readRange(t, e) {
						if (!t) return this;
						let i = t.parentNode;
						for (let n = t; ; ) {
							this.findPointBefore(i, n), this.readNode(n);
							let t = n.nextSibling;
							if (t == e) break;
							let r = ve.get(n),
								s = ve.get(t);
							(r && s
								? r.breakAfter
								: (r ? r.breakAfter : Fi(n)) ||
								  (Fi(t) && ("BR" != n.nodeName || n.cmIgnore))) &&
								this.lineBreak(),
								(n = t);
						}
						return this.findPointBefore(i, e), this;
					}
					readTextNode(t) {
						let e = t.nodeValue;
						for (let i of this.points)
							i.node == t &&
								(i.pos = this.text.length + Math.min(i.offset, e.length));
						for (let i = 0, n = this.lineSeparator ? null : /\r\n?|\n/g; ; ) {
							let r,
								s = -1,
								o = 1;
							if (
								(this.lineSeparator
									? ((s = e.indexOf(this.lineSeparator, i)),
									  (o = this.lineSeparator.length))
									: (r = n.exec(e)) && ((s = r.index), (o = r[0].length)),
								this.append(e.slice(i, s < 0 ? e.length : s)),
								s < 0)
							)
								break;
							if ((this.lineBreak(), o > 1))
								for (let e of this.points)
									e.node == t && e.pos > this.text.length && (e.pos -= o - 1);
							i = s + o;
						}
					}
					readNode(t) {
						if (t.cmIgnore) return;
						let e = ve.get(t),
							i = e && e.overrideDOMText;
						if (null != i) {
							this.findPointInside(t, i.length);
							for (let t = i.iter(); !t.next().done; )
								t.lineBreak ? this.lineBreak() : this.append(t.value);
						} else
							3 == t.nodeType
								? this.readTextNode(t)
								: "BR" == t.nodeName
								? t.nextSibling && this.lineBreak()
								: 1 == t.nodeType && this.readRange(t.firstChild, null);
					}
					findPointBefore(t, e) {
						for (let i of this.points)
							i.node == t &&
								t.childNodes[i.offset] == e &&
								(i.pos = this.text.length);
					}
					findPointInside(t, e) {
						for (let i of this.points)
							(3 == t.nodeType ? i.node == t : t.contains(i.node)) &&
								(i.pos = this.text.length + Math.min(e, i.offset));
					}
				}
				function Fi(t) {
					return (
						1 == t.nodeType &&
						/^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(
							t.nodeName
						)
					);
				}
				class Ji {
					constructor(t, e) {
						(this.node = t), (this.offset = e), (this.pos = -1);
					}
				}
				class Ki extends ve {
					constructor(t) {
						super(),
							(this.view = t),
							(this.compositionDeco = Ke.none),
							(this.decorations = []),
							(this.dynamicDecorationMap = []),
							(this.minWidth = 0),
							(this.minWidthFrom = 0),
							(this.minWidthTo = 0),
							(this.impreciseAnchor = null),
							(this.impreciseHead = null),
							(this.forceSelection = !1),
							(this.lastUpdate = Date.now()),
							this.setDOM(t.contentDOM),
							(this.children = [new si()]),
							this.children[0].setParent(this),
							this.updateDeco(),
							this.updateInner([new Vi(0, 0, 0, t.state.doc.length)], 0);
					}
					get length() {
						return this.view.state.doc.length;
					}
					update(t) {
						let e = t.changedRanges;
						this.minWidth > 0 &&
							e.length &&
							(e.every(
								({ fromA: t, toA: e }) =>
									e < this.minWidthFrom || t > this.minWidthTo
							)
								? ((this.minWidthFrom = t.changes.mapPos(this.minWidthFrom, 1)),
								  (this.minWidthTo = t.changes.mapPos(this.minWidthTo, 1)))
								: (this.minWidth = this.minWidthFrom = this.minWidthTo = 0)),
							this.view.inputState.composing < 0
								? (this.compositionDeco = Ke.none)
								: (t.transactions.length || this.dirty) &&
								  (this.compositionDeco = (function (t, e) {
										let i = en(t);
										if (!i) return Ke.none;
										let { from: n, to: r, node: s, text: o } = i,
											a = e.mapPos(n, 1),
											l = Math.max(a, e.mapPos(r, -1)),
											{ state: h } = t,
											c =
												3 == s.nodeType
													? s.nodeValue
													: new Hi([], h).readRange(s.firstChild, null).text;
										if (l - a < c.length)
											if (
												h.doc.sliceString(
													a,
													Math.min(h.doc.length, a + c.length),
													Li
												) == c
											)
												l = a + c.length;
											else {
												if (
													h.doc.sliceString(Math.max(0, l - c.length), l, Li) !=
													c
												)
													return Ke.none;
												a = l - c.length;
											}
										else if (h.doc.sliceString(a, l, Li) != c) return Ke.none;
										let O = ve.get(s);
										return (
											O instanceof je
												? (O = O.widget.topView)
												: O && (O.parent = null),
											Ke.set(
												Ke.replace({
													widget: new nn(s, o, O),
													inclusive: !0
												}).range(a, l)
											)
										);
								  })(this.view, t.changes)),
							(Re.ie || Re.chrome) &&
								!this.compositionDeco.size &&
								t &&
								t.state.doc.lines != t.startState.doc.lines &&
								(this.forceSelection = !0);
						let i = (function (t, e, i) {
							let n = new sn();
							return Pt.compare(t, e, i, n), n.changes;
						})(this.decorations, this.updateDeco(), t.changes);
						return (
							(e = Vi.extendWithRanges(e, i)),
							(0 != this.dirty || 0 != e.length) &&
								(this.updateInner(e, t.startState.doc.length),
								t.transactions.length && (this.lastUpdate = Date.now()),
								!0)
						);
					}
					updateInner(t, e) {
						(this.view.viewState.mustMeasureContent = !0),
							this.updateChildren(t, e);
						let { observer: i } = this.view;
						i.ignore(() => {
							(this.dom.style.height =
								this.view.viewState.contentHeight + "px"),
								(this.dom.style.flexBasis = this.minWidth
									? this.minWidth + "px"
									: "");
							let t =
								Re.chrome || Re.ios
									? { node: i.selectionRange.focusNode, written: !1 }
									: void 0;
							this.sync(this.view, t),
								(this.dirty = 0),
								t &&
									(t.written || i.selectionRange.focusNode != t.node) &&
									(this.forceSelection = !0),
								(this.dom.style.height = "");
						});
						let n = [];
						if (
							this.view.viewport.from ||
							this.view.viewport.to < this.view.state.doc.length
						)
							for (let t of this.children)
								t instanceof oi && t.widget instanceof tn && n.push(t.dom);
						i.updateGaps(n);
					}
					updateChildren(t, e) {
						let i = this.childCursor(e);
						for (let e = t.length - 1; ; e--) {
							let n = e >= 0 ? t[e] : null;
							if (!n) break;
							let { fromA: r, toA: s, fromB: o, toB: a } = n,
								{
									content: l,
									breakAtStart: h,
									openStart: c,
									openEnd: O
								} = ai.build(
									this.view.state.doc,
									o,
									a,
									this.decorations,
									this.dynamicDecorationMap
								),
								{ i: u, off: f } = i.findPos(s, 1),
								{ i: d, off: p } = i.findPos(r, -1);
							we(this, d, p, u, f, l, h, c, O);
						}
					}
					updateSelection(t = !1, e = !1) {
						if (
							((!t && this.view.observer.selectionRange.focusNode) ||
								this.view.observer.readSelectionRange(),
							!e && !this.mayControlSelection())
						)
							return;
						let i = this.forceSelection;
						this.forceSelection = !1;
						let n = this.view.state.selection.main,
							r = this.domAtPos(n.anchor),
							s = n.empty ? r : this.domAtPos(n.head);
						if (
							Re.gecko &&
							n.empty &&
							1 == (o = r).node.nodeType &&
							o.node.firstChild &&
							(0 == o.offset ||
								"false" == o.node.childNodes[o.offset - 1].contentEditable) &&
							(o.offset == o.node.childNodes.length ||
								"false" == o.node.childNodes[o.offset].contentEditable)
						) {
							let t = document.createTextNode("");
							this.view.observer.ignore(() =>
								r.node.insertBefore(t, r.node.childNodes[r.offset] || null)
							),
								(r = s = new Se(t, 0)),
								(i = !0);
						}
						var o;
						let a = this.view.observer.selectionRange;
						(!i &&
							a.focusNode &&
							re(r.node, r.offset, a.anchorNode, a.anchorOffset) &&
							re(s.node, s.offset, a.focusNode, a.focusOffset)) ||
							(this.view.observer.ignore(() => {
								Re.android &&
									Re.chrome &&
									this.dom.contains(a.focusNode) &&
									(function (t, e) {
										for (
											let i = t;
											i && i != e;
											i = i.assignedSlot || i.parentNode
										)
											if (1 == i.nodeType && "false" == i.contentEditable)
												return !0;
										return !1;
									})(a.focusNode, this.dom) &&
									(this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
								let t = te(this.view.root);
								if (t)
									if (n.empty) {
										if (Re.gecko) {
											let t =
												((e = r.node),
												(i = r.offset),
												1 != e.nodeType
													? 0
													: (i && "false" == e.childNodes[i - 1].contentEditable
															? 1
															: 0) |
													  (i < e.childNodes.length &&
													  "false" == e.childNodes[i].contentEditable
															? 2
															: 0));
											if (t && 3 != t) {
												let e = rn(r.node, r.offset, 1 == t ? 1 : -1);
												e && (r = new Se(e, 1 == t ? 0 : e.nodeValue.length));
											}
										}
										t.collapse(r.node, r.offset),
											null != n.bidiLevel &&
												null != a.cursorBidiLevel &&
												(a.cursorBidiLevel = n.bidiLevel);
									} else if (t.extend) {
										t.collapse(r.node, r.offset);
										try {
											t.extend(s.node, s.offset);
										} catch (t) {}
									} else {
										let e = document.createRange();
										n.anchor > n.head && ([r, s] = [s, r]),
											e.setEnd(s.node, s.offset),
											e.setStart(r.node, r.offset),
											t.removeAllRanges(),
											t.addRange(e);
									}
								var e, i;
							}),
							this.view.observer.setSelectionRange(r, s)),
							(this.impreciseAnchor = r.precise
								? null
								: new Se(a.anchorNode, a.anchorOffset)),
							(this.impreciseHead = s.precise
								? null
								: new Se(a.focusNode, a.focusOffset));
					}
					enforceCursorAssoc() {
						if (this.compositionDeco.size) return;
						let { view: t } = this,
							e = t.state.selection.main,
							i = te(t.root),
							{ anchorNode: n, anchorOffset: r } = t.observer.selectionRange;
						if (!(i && e.empty && e.assoc && i.modify)) return;
						let s = si.find(this, e.head);
						if (!s) return;
						let o = s.posAtStart;
						if (e.head == o || e.head == o + s.length) return;
						let a = this.coordsAt(e.head, -1),
							l = this.coordsAt(e.head, 1);
						if (!a || !l || a.bottom > l.top) return;
						let h = this.domAtPos(e.head + e.assoc);
						i.collapse(h.node, h.offset),
							i.modify(
								"move",
								e.assoc < 0 ? "forward" : "backward",
								"lineboundary"
							),
							t.observer.readSelectionRange();
						let c = t.observer.selectionRange;
						t.docView.posFromDOM(c.anchorNode, c.anchorOffset) != e.from &&
							i.collapse(n, r);
					}
					mayControlSelection() {
						let t = this.view.root.activeElement;
						return (
							t == this.dom ||
							(ie(this.dom, this.view.observer.selectionRange) &&
								!(t && this.dom.contains(t)))
						);
					}
					nearest(t) {
						for (let e = t; e; ) {
							let t = ve.get(e);
							if (t && t.rootView == this) return t;
							e = e.parentNode;
						}
						return null;
					}
					posFromDOM(t, e) {
						let i = this.nearest(t);
						if (!i)
							throw new RangeError(
								"Trying to find position for a DOM position outside of the document"
							);
						return i.localPosFromDOM(t, e) + i.posAtStart;
					}
					domAtPos(t) {
						let { i: e, off: i } = this.childCursor().findPos(t, -1);
						for (; e < this.children.length - 1; ) {
							let t = this.children[e];
							if (i < t.length || t instanceof si) break;
							e++, (i = 0);
						}
						return this.children[e].domAtPos(i);
					}
					coordsAt(t, e) {
						for (let i = this.length, n = this.children.length - 1; ; n--) {
							let r = this.children[n],
								s = i - r.breakAfter - r.length;
							if (
								t > s ||
								(t == s &&
									r.type != Je.WidgetBefore &&
									r.type != Je.WidgetAfter &&
									(!n ||
										2 == e ||
										this.children[n - 1].breakAfter ||
										(this.children[n - 1].type == Je.WidgetBefore && e > -2)))
							)
								return r.coordsAt(t - s, e);
							i = s;
						}
					}
					measureVisibleLineHeights(t) {
						let e = [],
							{ from: i, to: n } = t,
							r = this.view.contentDOM.clientWidth,
							s =
								r >
								Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1,
							o = -1,
							a = this.view.textDirection == Yi.LTR;
						for (let t = 0, l = 0; l < this.children.length; l++) {
							let h = this.children[l],
								c = t + h.length;
							if (c > n) break;
							if (t >= i) {
								let i = h.dom.getBoundingClientRect();
								if ((e.push(i.height), s)) {
									let e = h.dom.lastChild,
										n = e ? ne(e) : [];
									if (n.length) {
										let e = n[n.length - 1],
											s = a ? e.right - i.left : i.right - e.left;
										s > o &&
											((o = s),
											(this.minWidth = r),
											(this.minWidthFrom = t),
											(this.minWidthTo = c));
									}
								}
							}
							t = c + h.breakAfter;
						}
						return e;
					}
					textDirectionAt(t) {
						let { i: e } = this.childPos(t, 1);
						return "rtl" == getComputedStyle(this.children[e].dom).direction
							? Yi.RTL
							: Yi.LTR;
					}
					measureTextSize() {
						for (let t of this.children)
							if (t instanceof si) {
								let e = t.measureTextSize();
								if (e) return e;
							}
						let t,
							e,
							i = document.createElement("div");
						return (
							(i.className = "cm-line"),
							(i.style.width = "99999px"),
							(i.textContent = "abc def ghi jkl mno pqr stu"),
							this.view.observer.ignore(() => {
								this.dom.appendChild(i);
								let n = ne(i.firstChild)[0];
								(t = i.getBoundingClientRect().height),
									(e = n ? n.width / 27 : 7),
									i.remove();
							}),
							{ lineHeight: t, charWidth: e }
						);
					}
					childCursor(t = this.length) {
						let e = this.children.length;
						return (
							e && (t -= this.children[--e].length), new be(this.children, t, e)
						);
					}
					computeBlockGapDeco() {
						let t = [],
							e = this.view.viewState;
						for (let i = 0, n = 0; ; n++) {
							let r = n == e.viewports.length ? null : e.viewports[n],
								s = r ? r.from - 1 : this.length;
							if (s > i) {
								let n = e.lineBlockAt(s).bottom - e.lineBlockAt(i).top;
								t.push(
									Ke.replace({
										widget: new tn(n),
										block: !0,
										inclusive: !0,
										isBlockGap: !0
									}).range(i, s)
								);
							}
							if (!r) break;
							i = r.to + 1;
						}
						return Ke.set(t);
					}
					updateDeco() {
						let t = this.view.state
							.facet(Zi)
							.map((t, e) =>
								(this.dynamicDecorationMap[e] = "function" == typeof t)
									? t(this.view)
									: t
							);
						for (let e = t.length; e < t.length + 3; e++)
							this.dynamicDecorationMap[e] = !1;
						return (this.decorations = [
							...t,
							this.compositionDeco,
							this.computeBlockGapDeco(),
							this.view.viewState.lineGapDeco
						]);
					}
					scrollIntoView(t) {
						let e,
							{ range: i } = t,
							n = this.coordsAt(
								i.head,
								i.empty ? i.assoc : i.head > i.anchor ? -1 : 1
							);
						if (!n) return;
						!i.empty &&
							(e = this.coordsAt(i.anchor, i.anchor > i.head ? -1 : 1)) &&
							(n = {
								left: Math.min(n.left, e.left),
								top: Math.min(n.top, e.top),
								right: Math.max(n.right, e.right),
								bottom: Math.max(n.bottom, e.bottom)
							});
						let r = 0,
							s = 0,
							o = 0,
							a = 0;
						for (let t of this.view.state.facet(Ci).map((t) => t(this.view)))
							if (t) {
								let { left: e, right: i, top: n, bottom: l } = t;
								null != e && (r = Math.max(r, e)),
									null != i && (s = Math.max(s, i)),
									null != n && (o = Math.max(o, n)),
									null != l && (a = Math.max(a, l));
							}
						let l = {
							left: n.left - r,
							top: n.top - o,
							right: n.right + s,
							bottom: n.bottom + a
						};
						!(function (t, e, i, n, r, s, o, a) {
							let l = t.ownerDocument,
								h = l.defaultView || window;
							for (let c = t; c; )
								if (1 == c.nodeType) {
									let t,
										O = c == l.body;
									if (O) t = ce(h);
									else {
										if (
											c.scrollHeight <= c.clientHeight &&
											c.scrollWidth <= c.clientWidth
										) {
											c = c.assignedSlot || c.parentNode;
											continue;
										}
										let e = c.getBoundingClientRect();
										t = {
											left: e.left,
											right: e.left + c.clientWidth,
											top: e.top,
											bottom: e.top + c.clientHeight
										};
									}
									let u = 0,
										f = 0;
									if ("nearest" == r)
										e.top < t.top
											? ((f = -(t.top - e.top + o)),
											  i > 0 &&
													e.bottom > t.bottom + f &&
													(f = e.bottom - t.bottom + f + o))
											: e.bottom > t.bottom &&
											  ((f = e.bottom - t.bottom + o),
											  i < 0 &&
													e.top - f < t.top &&
													(f = -(t.top + f - e.top + o)));
									else {
										let n = e.bottom - e.top,
											s = t.bottom - t.top;
										f =
											("center" == r && n <= s
												? e.top + n / 2 - s / 2
												: "start" == r || ("center" == r && i < 0)
												? e.top - o
												: e.bottom - s + o) - t.top;
									}
									if (
										("nearest" == n
											? e.left < t.left
												? ((u = -(t.left - e.left + s)),
												  i > 0 &&
														e.right > t.right + u &&
														(u = e.right - t.right + u + s))
												: e.right > t.right &&
												  ((u = e.right - t.right + s),
												  i < 0 &&
														e.left < t.left + u &&
														(u = -(t.left + u - e.left + s)))
											: (u =
													("center" == n
														? e.left +
														  (e.right - e.left) / 2 -
														  (t.right - t.left) / 2
														: ("start" == n) == a
														? e.left - s
														: e.right - (t.right - t.left) + s) - t.left),
										u || f)
									)
										if (O) h.scrollBy(u, f);
										else {
											let t = 0,
												i = 0;
											if (f) {
												let t = c.scrollTop;
												(c.scrollTop += f), (i = c.scrollTop - t);
											}
											if (u) {
												let e = c.scrollLeft;
												(c.scrollLeft += u), (t = c.scrollLeft - e);
											}
											(e = {
												left: e.left - t,
												top: e.top - i,
												right: e.right - t,
												bottom: e.bottom - i
											}),
												t && Math.abs(t - u) < 1 && (n = "nearest"),
												i && Math.abs(i - f) < 1 && (r = "nearest");
										}
									if (O) break;
									c = c.assignedSlot || c.parentNode;
								} else {
									if (11 != c.nodeType) break;
									c = c.host;
								}
						})(
							this.view.scrollDOM,
							l,
							i.head < i.anchor ? -1 : 1,
							t.x,
							t.y,
							t.xMargin,
							t.yMargin,
							this.view.textDirection == Yi.LTR
						);
					}
				}
				class tn extends Fe {
					constructor(t) {
						super(), (this.height = t);
					}
					toDOM() {
						let t = document.createElement("div");
						return this.updateDOM(t), t;
					}
					eq(t) {
						return t.height == this.height;
					}
					updateDOM(t) {
						return (t.style.height = this.height + "px"), !0;
					}
					get estimatedHeight() {
						return this.height;
					}
				}
				function en(t) {
					let e = t.observer.selectionRange,
						i = e.focusNode && rn(e.focusNode, e.focusOffset, 0);
					if (!i) return null;
					let n = t.docView.nearest(i);
					if (!n) return null;
					if (n instanceof si) {
						let t = i;
						for (; t.parentNode != n.dom; ) t = t.parentNode;
						let e = t.previousSibling;
						for (; e && !ve.get(e); ) e = e.previousSibling;
						let r = e ? ve.get(e).posAtEnd : n.posAtStart;
						return { from: r, to: r, node: t, text: i };
					}
					{
						for (;;) {
							let { parent: t } = n;
							if (!t) return null;
							if (t instanceof si) break;
							n = t;
						}
						let t = n.posAtStart;
						return { from: t, to: t + n.length, node: n.dom, text: i };
					}
				}
				class nn extends Fe {
					constructor(t, e, i) {
						super(), (this.top = t), (this.text = e), (this.topView = i);
					}
					eq(t) {
						return this.top == t.top && this.text == t.text;
					}
					toDOM() {
						return this.top;
					}
					ignoreEvent() {
						return !1;
					}
					get customView() {
						return je;
					}
				}
				function rn(t, e, i) {
					for (;;) {
						if (3 == t.nodeType) return t;
						if (1 == t.nodeType && e > 0 && i <= 0)
							e = ae((t = t.childNodes[e - 1]));
						else {
							if (!(1 == t.nodeType && e < t.childNodes.length && i >= 0))
								return null;
							(t = t.childNodes[e]), (e = 0);
						}
					}
				}
				class sn {
					constructor() {
						this.changes = [];
					}
					compareRange(t, e) {
						ri(t, e, this.changes);
					}
					comparePoint(t, e) {
						ri(t, e, this.changes);
					}
				}
				function on(t, e) {
					return e.left > t ? e.left - t : Math.max(0, t - e.right);
				}
				function an(t, e) {
					return e.top > t ? e.top - t : Math.max(0, t - e.bottom);
				}
				function ln(t, e) {
					return t.top < e.bottom - 1 && t.bottom > e.top + 1;
				}
				function hn(t, e) {
					return e < t.top
						? { top: e, left: t.left, right: t.right, bottom: t.bottom }
						: t;
				}
				function cn(t, e) {
					return e > t.bottom
						? { top: t.top, left: t.left, right: t.right, bottom: e }
						: t;
				}
				function On(t, e, i) {
					let n,
						r,
						s,
						o,
						a,
						l,
						h,
						c,
						O = !1;
					for (let u = t.firstChild; u; u = u.nextSibling) {
						let t = ne(u);
						for (let f = 0; f < t.length; f++) {
							let d = t[f];
							r && ln(r, d) && (d = hn(cn(d, r.bottom), r.top));
							let p = on(e, d),
								g = an(i, d);
							if (0 == p && 0 == g)
								return 3 == u.nodeType ? un(u, e, i) : On(u, e, i);
							if (!n || o > g || (o == g && s > p)) {
								(n = u), (r = d), (s = p), (o = g);
								let a = g
									? i < d.top
										? -1
										: 1
									: p
									? e < d.left
										? -1
										: 1
									: 0;
								O = !a || (a > 0 ? f < t.length - 1 : f > 0);
							}
							0 == p
								? i > d.bottom && (!h || h.bottom < d.bottom)
									? ((a = u), (h = d))
									: i < d.top && (!c || c.top > d.top) && ((l = u), (c = d))
								: h && ln(h, d)
								? (h = cn(h, d.bottom))
								: c && ln(c, d) && (c = hn(c, d.top));
						}
					}
					if (
						(h && h.bottom >= i
							? ((n = a), (r = h))
							: c && c.top <= i && ((n = l), (r = c)),
						!n)
					)
						return { node: t, offset: 0 };
					let u = Math.max(r.left, Math.min(r.right, e));
					return 3 == n.nodeType
						? un(n, u, i)
						: O && "false" != n.contentEditable
						? On(n, u, i)
						: {
								node: t,
								offset:
									Array.prototype.indexOf.call(t.childNodes, n) +
									(e >= (r.left + r.right) / 2 ? 1 : 0)
						  };
				}
				function un(t, e, i) {
					let n = t.nodeValue.length,
						r = -1,
						s = 1e9,
						o = 0;
					for (let a = 0; a < n; a++) {
						let n = pe(t, a, a + 1).getClientRects();
						for (let l = 0; l < n.length; l++) {
							let h = n[l];
							if (h.top == h.bottom) continue;
							o || (o = e - h.left);
							let c = (h.top > i ? h.top - i : i - h.bottom) - 1;
							if (h.left - 1 <= e && h.right + 1 >= e && c < s) {
								let i = e >= (h.left + h.right) / 2,
									n = i;
								if (
									((Re.chrome || Re.gecko) &&
										pe(t, a).getBoundingClientRect().left == h.right &&
										(n = !i),
									c <= 0)
								)
									return { node: t, offset: a + (n ? 1 : 0) };
								(r = a + (n ? 1 : 0)), (s = c);
							}
						}
					}
					return {
						node: t,
						offset: r > -1 ? r : o > 0 ? t.nodeValue.length : 0
					};
				}
				function fn(t, e, i, n = -1) {
					var r;
					let s,
						o = t.contentDOM.getBoundingClientRect(),
						a = o.top + t.viewState.paddingTop,
						{ docHeight: l } = t.viewState,
						{ x: h, y: c } = e,
						O = c - a;
					if (O < 0) return 0;
					if (O > l) return t.state.doc.length;
					for (
						let e = t.defaultLineHeight / 2, r = !1;
						(s = t.elementAtHeight(O)), s.type != Je.Text;

					)
						for (
							;
							(O = n > 0 ? s.bottom + e : s.top - e), !(O >= 0 && O <= l);

						) {
							if (r) return i ? null : 0;
							(r = !0), (n = -n);
						}
					c = a + O;
					let u = s.from;
					if (u < t.viewport.from)
						return 0 == t.viewport.from ? 0 : i ? null : dn(t, o, s, h, c);
					if (u > t.viewport.to)
						return t.viewport.to == t.state.doc.length
							? t.state.doc.length
							: i
							? null
							: dn(t, o, s, h, c);
					let f = t.dom.ownerDocument,
						d = t.root.elementFromPoint ? t.root : f,
						p = d.elementFromPoint(h, c);
					p && !t.contentDOM.contains(p) && (p = null),
						p ||
							((h = Math.max(o.left + 1, Math.min(o.right - 1, h))),
							(p = d.elementFromPoint(h, c)),
							p && !t.contentDOM.contains(p) && (p = null));
					let g,
						m = -1;
					if (
						p &&
						0 !=
							(null === (r = t.docView.nearest(p)) || void 0 === r
								? void 0
								: r.isEditable)
					)
						if (f.caretPositionFromPoint) {
							let t = f.caretPositionFromPoint(h, c);
							t && ({ offsetNode: g, offset: m } = t);
						} else if (f.caretRangeFromPoint) {
							let e = f.caretRangeFromPoint(h, c);
							e &&
								(({ startContainer: g, startOffset: m } = e),
								(!t.contentDOM.contains(g) ||
									(Re.safari &&
										(function (t, e, i) {
											let n;
											if (3 != t.nodeType || e != (n = t.nodeValue.length))
												return !1;
											for (let e = t.nextSibling; e; e = e.nextSibling)
												if (1 != e.nodeType || "BR" != e.nodeName) return !1;
											return pe(t, n - 1, n).getBoundingClientRect().left > i;
										})(g, m, h)) ||
									(Re.chrome &&
										(function (t, e, i) {
											if (0 != e) return !1;
											for (let e = t; ; ) {
												let t = e.parentNode;
												if (!t || 1 != t.nodeType || t.firstChild != e)
													return !1;
												if (t.classList.contains("cm-line")) break;
												e = t;
											}
											return (
												i -
													(1 == t.nodeType
														? t.getBoundingClientRect()
														: pe(
																t,
																0,
																Math.max(t.nodeValue.length, 1)
														  ).getBoundingClientRect()
													).left >
												5
											);
										})(g, m, h))) &&
									(g = void 0));
						}
					if (!g || !t.docView.dom.contains(g)) {
						let e = si.find(t.docView, u);
						if (!e) return O > s.top + s.height / 2 ? s.to : s.from;
						({ node: g, offset: m } = On(e.dom, h, c));
					}
					let S = t.docView.nearest(g);
					if (!S) return null;
					if (S.isWidget) {
						let t = S.dom.getBoundingClientRect();
						return e.y < t.top ||
							(e.y <= t.bottom && e.x <= (t.left + t.right) / 2)
							? S.posAtStart
							: S.posAtEnd;
					}
					return S.localPosFromDOM(g, m) + S.posAtStart;
				}
				function dn(t, e, i, n, r) {
					let s = Math.round((n - e.left) * t.defaultCharacterWidth);
					t.lineWrapping &&
						i.height > 1.5 * t.defaultLineHeight &&
						(s +=
							Math.floor((r - i.top) / t.defaultLineHeight) *
							t.viewState.heightOracle.lineLength);
					let o = t.state.sliceDoc(i.from, i.to);
					return i.from + qt(o, s, t.state.tabSize);
				}
				function pn(t, e, i, n) {
					let r = t.state.doc.lineAt(e.head),
						s = t.bidiSpans(r),
						o = t.textDirectionAt(r.from);
					for (let a = e, l = null; ; ) {
						let e = Ni(r, s, o, a, i),
							h = Bi;
						if (!e) {
							if (r.number == (i ? t.state.doc.lines : 1)) return a;
							(h = "\n"),
								(r = t.state.doc.line(r.number + (i ? 1 : -1))),
								(s = t.bidiSpans(r)),
								(e = W.cursor(i ? r.from : r.to));
						}
						if (l) {
							if (!l(h)) return a;
						} else {
							if (!n) return e;
							l = n(h);
						}
						a = e;
					}
				}
				function gn(t, e, i) {
					let n = t.state.facet(Ti).map((e) => e(t));
					for (;;) {
						let t = !1;
						for (let r of n)
							r.between(i.from - 1, i.from + 1, (n, r, s) => {
								i.from > n &&
									i.from < r &&
									((i = e.head > i.from ? W.cursor(n, 1) : W.cursor(r, -1)),
									(t = !0));
							});
						if (!t) return i;
					}
				}
				class mn {
					constructor(t) {
						(this.lastKeyCode = 0),
							(this.lastKeyTime = 0),
							(this.lastTouchTime = 0),
							(this.lastFocusTime = 0),
							(this.lastScrollTop = 0),
							(this.lastScrollLeft = 0),
							(this.chromeScrollHack = -1),
							(this.pendingIOSKey = void 0),
							(this.lastSelectionOrigin = null),
							(this.lastSelectionTime = 0),
							(this.lastEscPress = 0),
							(this.lastContextMenu = 0),
							(this.scrollHandlers = []),
							(this.registeredEvents = []),
							(this.customHandlers = []),
							(this.composing = -1),
							(this.compositionFirstChange = null),
							(this.compositionEndedAt = 0),
							(this.mouseSelection = null);
						let e = (e, i) => {
							this.ignoreDuringComposition(i) ||
								("keydown" == i.type && this.keydown(t, i)) ||
								(this.mustFlushObserver(i) && t.observer.forceFlush(),
								this.runCustomHandlers(i.type, t, i)
									? i.preventDefault()
									: e(t, i));
						};
						for (let i in xn) {
							let n = xn[i];
							t.contentDOM.addEventListener(
								i,
								(i) => {
									wn(t, i) && e(n, i);
								},
								$n[i]
							),
								this.registeredEvents.push(i);
						}
						t.scrollDOM.addEventListener("mousedown", (i) => {
							i.target == t.scrollDOM &&
								i.clientY > t.contentDOM.getBoundingClientRect().bottom &&
								e(xn.mousedown, i);
						}),
							Re.chrome &&
								102 == Re.chrome_version &&
								t.scrollDOM.addEventListener(
									"wheel",
									() => {
										this.chromeScrollHack < 0
											? (t.contentDOM.style.pointerEvents = "none")
											: window.clearTimeout(this.chromeScrollHack),
											(this.chromeScrollHack = setTimeout(() => {
												(this.chromeScrollHack = -1),
													(t.contentDOM.style.pointerEvents = "");
											}, 100));
									},
									{ passive: !0 }
								),
							(this.notifiedFocused = t.hasFocus),
							Re.safari && t.contentDOM.addEventListener("input", () => null);
					}
					setSelectionOrigin(t) {
						(this.lastSelectionOrigin = t),
							(this.lastSelectionTime = Date.now());
					}
					ensureHandlers(t, e) {
						var i;
						let n;
						this.customHandlers = [];
						for (let r of e)
							if (
								(n =
									null === (i = r.update(t).spec) || void 0 === i
										? void 0
										: i.domEventHandlers)
							) {
								this.customHandlers.push({ plugin: r.value, handlers: n });
								for (let e in n)
									this.registeredEvents.indexOf(e) < 0 &&
										"scroll" != e &&
										(this.registeredEvents.push(e),
										t.contentDOM.addEventListener(e, (i) => {
											wn(t, i) &&
												this.runCustomHandlers(e, t, i) &&
												i.preventDefault();
										}));
							}
					}
					runCustomHandlers(t, e, i) {
						for (let n of this.customHandlers) {
							let r = n.handlers[t];
							if (r)
								try {
									if (r.call(n.plugin, i, e) || i.defaultPrevented) return !0;
								} catch (t) {
									yi(e.state, t);
								}
						}
						return !1;
					}
					runScrollHandlers(t, e) {
						(this.lastScrollTop = t.scrollDOM.scrollTop),
							(this.lastScrollLeft = t.scrollDOM.scrollLeft);
						for (let i of this.customHandlers) {
							let n = i.handlers.scroll;
							if (n)
								try {
									n.call(i.plugin, e, t);
								} catch (e) {
									yi(t.state, e);
								}
						}
					}
					keydown(t, e) {
						if (
							((this.lastKeyCode = e.keyCode),
							(this.lastKeyTime = Date.now()),
							9 == e.keyCode && Date.now() < this.lastEscPress + 2e3)
						)
							return !0;
						if (
							Re.android &&
							Re.chrome &&
							!e.synthetic &&
							(13 == e.keyCode || 8 == e.keyCode)
						)
							return t.observer.delayAndroidKey(e.key, e.keyCode), !0;
						let i;
						return !(
							!Re.ios ||
							e.synthetic ||
							e.altKey ||
							e.metaKey ||
							!(
								((i = Sn.find((t) => t.keyCode == e.keyCode)) && !e.ctrlKey) ||
								(Qn.indexOf(e.key) > -1 && e.ctrlKey && !e.shiftKey)
							) ||
							((this.pendingIOSKey = i || e),
							setTimeout(() => this.flushIOSKey(t), 250),
							0)
						);
					}
					flushIOSKey(t) {
						let e = this.pendingIOSKey;
						return (
							!!e &&
							((this.pendingIOSKey = void 0),
							ge(t.contentDOM, e.key, e.keyCode))
						);
					}
					ignoreDuringComposition(t) {
						return (
							!!/^key/.test(t.type) &&
							(this.composing > 0 ||
								(!!(
									Re.safari &&
									!Re.ios &&
									Date.now() - this.compositionEndedAt < 100
								) &&
									((this.compositionEndedAt = 0), !0)))
						);
					}
					mustFlushObserver(t) {
						return "keydown" == t.type && 229 != t.keyCode;
					}
					startMouseSelection(t) {
						this.mouseSelection && this.mouseSelection.destroy(),
							(this.mouseSelection = t);
					}
					update(t) {
						this.mouseSelection && this.mouseSelection.update(t),
							t.transactions.length &&
								(this.lastKeyCode = this.lastSelectionTime = 0);
					}
					destroy() {
						this.mouseSelection && this.mouseSelection.destroy();
					}
				}
				const Sn = [
						{
							key: "Backspace",
							keyCode: 8,
							inputType: "deleteContentBackward"
						},
						{ key: "Enter", keyCode: 13, inputType: "insertParagraph" },
						{ key: "Delete", keyCode: 46, inputType: "deleteContentForward" }
					],
					Qn = "dthko",
					vn = [16, 17, 18, 20, 91, 92, 224, 225];
				function yn(t) {
					return 0.7 * t + 8;
				}
				class bn {
					constructor(t, e, i, n) {
						(this.view = t),
							(this.style = i),
							(this.mustSelect = n),
							(this.scrollSpeed = { x: 0, y: 0 }),
							(this.scrolling = -1),
							(this.lastEvent = e),
							(this.scrollParent = (function (t) {
								let e = t.ownerDocument;
								for (let i = t.parentNode; i && i != e.body; )
									if (1 == i.nodeType) {
										if (
											i.scrollHeight > i.clientHeight ||
											i.scrollWidth > i.clientWidth
										)
											return i;
										i = i.assignedSlot || i.parentNode;
									} else {
										if (11 != i.nodeType) break;
										i = i.host;
									}
								return null;
							})(t.contentDOM));
						let r = t.contentDOM.ownerDocument;
						r.addEventListener("mousemove", (this.move = this.move.bind(this))),
							r.addEventListener("mouseup", (this.up = this.up.bind(this))),
							(this.extend = e.shiftKey),
							(this.multiple =
								t.state.facet(vt.allowMultipleSelections) &&
								(function (t, e) {
									let i = t.state.facet(ci);
									return i.length ? i[0](e) : Re.mac ? e.metaKey : e.ctrlKey;
								})(t, e)),
							(this.dragMove = (function (t, e) {
								let i = t.state.facet(Oi);
								return i.length ? i[0](e) : Re.mac ? !e.altKey : !e.ctrlKey;
							})(t, e)),
							(this.dragging =
								!(
									!(function (t, e) {
										let { main: i } = t.state.selection;
										if (i.empty) return !1;
										let n = te(t.root);
										if (!n || 0 == n.rangeCount) return !0;
										let r = n.getRangeAt(0).getClientRects();
										for (let t = 0; t < r.length; t++) {
											let i = r[t];
											if (
												i.left <= e.clientX &&
												i.right >= e.clientX &&
												i.top <= e.clientY &&
												i.bottom >= e.clientY
											)
												return !0;
										}
										return !1;
									})(t, e) || 1 != _n(e)
								) && null);
					}
					start(t) {
						!1 === this.dragging && (t.preventDefault(), this.select(t));
					}
					move(t) {
						var e;
						if (0 == t.buttons) return this.destroy();
						if (!1 !== this.dragging) return;
						this.select((this.lastEvent = t));
						let i = 0,
							n = 0,
							r = (null === (e = this.scrollParent) || void 0 === e
								? void 0
								: e.getBoundingClientRect()) || {
								left: 0,
								top: 0,
								right: this.view.win.innerWidth,
								bottom: this.view.win.innerHeight
							};
						t.clientX <= r.left
							? (i = -yn(r.left - t.clientX))
							: t.clientX >= r.right && (i = yn(t.clientX - r.right)),
							t.clientY <= r.top
								? (n = -yn(r.top - t.clientY))
								: t.clientY >= r.bottom && (n = yn(t.clientY - r.bottom)),
							this.setScrollSpeed(i, n);
					}
					up(t) {
						null == this.dragging && this.select(this.lastEvent),
							this.dragging || t.preventDefault(),
							this.destroy();
					}
					destroy() {
						this.setScrollSpeed(0, 0);
						let t = this.view.contentDOM.ownerDocument;
						t.removeEventListener("mousemove", this.move),
							t.removeEventListener("mouseup", this.up),
							(this.view.inputState.mouseSelection = null);
					}
					setScrollSpeed(t, e) {
						(this.scrollSpeed = { x: t, y: e }),
							t || e
								? this.scrolling < 0 &&
								  (this.scrolling = setInterval(() => this.scroll(), 50))
								: this.scrolling > -1 &&
								  (clearInterval(this.scrolling), (this.scrolling = -1));
					}
					scroll() {
						this.scrollParent
							? ((this.scrollParent.scrollLeft += this.scrollSpeed.x),
							  (this.scrollParent.scrollTop += this.scrollSpeed.y))
							: this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y),
							!1 === this.dragging && this.select(this.lastEvent);
					}
					select(t) {
						let e = this.style.get(t, this.extend, this.multiple);
						(!this.mustSelect &&
							e.eq(this.view.state.selection) &&
							e.main.assoc == this.view.state.selection.main.assoc) ||
							this.view.dispatch({ selection: e, userEvent: "select.pointer" }),
							(this.mustSelect = !1);
					}
					update(t) {
						t.docChanged &&
							this.dragging &&
							(this.dragging = this.dragging.map(t.changes)),
							this.style.update(t) &&
								setTimeout(() => this.select(this.lastEvent), 20);
					}
				}
				function wn(t, e) {
					if (!e.bubbles) return !0;
					if (e.defaultPrevented) return !1;
					for (let i, n = e.target; n != t.contentDOM; n = n.parentNode)
						if (!n || 11 == n.nodeType || ((i = ve.get(n)) && i.ignoreEvent(e)))
							return !1;
					return !0;
				}
				const xn = Object.create(null),
					$n = Object.create(null),
					Pn =
						(Re.ie && Re.ie_version < 15) ||
						(Re.ios && Re.webkit_version < 604);
				function kn(t, e) {
					let i,
						{ state: n } = t,
						r = 1,
						s = n.toText(e),
						o = s.lines == n.selection.ranges.length;
					if (
						null != qn &&
						n.selection.ranges.every((t) => t.empty) &&
						qn == s.toString()
					) {
						let t = -1;
						i = n.changeByRange((i) => {
							let a = n.doc.lineAt(i.from);
							if (a.from == t) return { range: i };
							t = a.from;
							let l = n.toText((o ? s.line(r++).text : e) + n.lineBreak);
							return {
								changes: { from: a.from, insert: l },
								range: W.cursor(i.from + l.length)
							};
						});
					} else
						i = o
							? n.changeByRange((t) => {
									let e = s.line(r++);
									return {
										changes: { from: t.from, to: t.to, insert: e.text },
										range: W.cursor(t.from + e.length)
									};
							  })
							: n.replaceSelection(s);
					t.dispatch(i, { userEvent: "input.paste", scrollIntoView: !0 });
				}
				function Xn(t, e, i, n) {
					if (1 == n) return W.cursor(e, i);
					if (2 == n)
						return (function (t, e, i = 1) {
							let n = t.charCategorizer(e),
								r = t.doc.lineAt(e),
								s = e - r.from;
							if (0 == r.length) return W.cursor(e);
							0 == s ? (i = 1) : s == r.length && (i = -1);
							let o = s,
								a = s;
							i < 0 ? (o = g(r.text, s, !1)) : (a = g(r.text, s));
							let l = n(r.text.slice(o, a));
							for (; o > 0; ) {
								let t = g(r.text, o, !1);
								if (n(r.text.slice(t, o)) != l) break;
								o = t;
							}
							for (; a < r.length; ) {
								let t = g(r.text, a);
								if (n(r.text.slice(a, t)) != l) break;
								a = t;
							}
							return W.range(o + r.from, a + r.from);
						})(t.state, e, i);
					{
						let i = si.find(t.docView, e),
							n = t.state.doc.lineAt(i ? i.posAtEnd : e),
							r = i ? i.posAtStart : n.from,
							s = i ? i.posAtEnd : n.to;
						return s < t.state.doc.length && s == n.to && s++, W.range(r, s);
					}
				}
				(xn.keydown = (t, e) => {
					t.inputState.setSelectionOrigin("select"),
						27 == e.keyCode
							? (t.inputState.lastEscPress = Date.now())
							: vn.indexOf(e.keyCode) < 0 && (t.inputState.lastEscPress = 0);
				}),
					(xn.touchstart = (t, e) => {
						(t.inputState.lastTouchTime = Date.now()),
							t.inputState.setSelectionOrigin("select.pointer");
					}),
					(xn.touchmove = (t) => {
						t.inputState.setSelectionOrigin("select.pointer");
					}),
					($n.touchstart = $n.touchmove = { passive: !0 }),
					(xn.mousedown = (t, e) => {
						if (
							(t.observer.flush(),
							t.inputState.lastTouchTime > Date.now() - 2e3)
						)
							return;
						let i = null;
						for (let n of t.state.facet(ui)) if (((i = n(t, e)), i)) break;
						if (
							(i ||
								0 != e.button ||
								(i = (function (t, e) {
									let i = An(t, e),
										n = _n(e),
										r = t.state.selection;
									return {
										update(t) {
											t.docChanged &&
												((i.pos = t.changes.mapPos(i.pos)),
												(r = r.map(t.changes)));
										},
										get(e, s, o) {
											let a = An(t, e),
												l = Xn(t, a.pos, a.bias, n);
											if (i.pos != a.pos && !s) {
												let e = Xn(t, i.pos, i.bias, n),
													r = Math.min(e.from, l.from),
													s = Math.max(e.to, l.to);
												l = r < l.from ? W.range(r, s) : W.range(s, r);
											}
											return s
												? r.replaceRange(r.main.extend(l.from, l.to))
												: o &&
												  r.ranges.length > 1 &&
												  r.ranges.some((t) => t.eq(l))
												? (function (t, e) {
														for (let i = 0; ; i++)
															if (t.ranges[i].eq(e))
																return W.create(
																	t.ranges
																		.slice(0, i)
																		.concat(t.ranges.slice(i + 1)),
																	t.mainIndex == i
																		? 0
																		: t.mainIndex - (t.mainIndex > i ? 1 : 0)
																);
												  })(r, l)
												: o
												? r.addRange(l)
												: W.create([l]);
										}
									};
								})(t, e)),
							i)
						) {
							let n = t.root.activeElement != t.contentDOM;
							t.inputState.startMouseSelection(new bn(t, e, i, n)),
								n && t.observer.ignore(() => de(t.contentDOM)),
								t.inputState.mouseSelection &&
									t.inputState.mouseSelection.start(e);
						}
					});
				let Zn = (t, e) => t >= e.top && t <= e.bottom,
					Tn = (t, e, i) => Zn(e, i) && t >= i.left && t <= i.right;
				function Cn(t, e, i, n) {
					let r = si.find(t.docView, e);
					if (!r) return 1;
					let s = e - r.posAtStart;
					if (0 == s) return 1;
					if (s == r.length) return -1;
					let o = r.coordsAt(s, -1);
					if (o && Tn(i, n, o)) return -1;
					let a = r.coordsAt(s, 1);
					return a && Tn(i, n, a) ? 1 : o && Zn(n, o) ? -1 : 1;
				}
				function An(t, e) {
					let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
					return { pos: i, bias: Cn(t, i, e.clientX, e.clientY) };
				}
				const Vn = Re.ie && Re.ie_version <= 11;
				let Wn = null,
					Yn = 0,
					Rn = 0;
				function _n(t) {
					if (!Vn) return t.detail;
					let e = Wn,
						i = Rn;
					return (
						(Wn = t),
						(Rn = Date.now()),
						(Yn =
							!e ||
							(i > Date.now() - 400 &&
								Math.abs(e.clientX - t.clientX) < 2 &&
								Math.abs(e.clientY - t.clientY) < 2)
								? (Yn + 1) % 3
								: 1)
					);
				}
				function Mn(t, e, i, n) {
					if (!i) return;
					let r = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1);
					e.preventDefault();
					let { mouseSelection: s } = t.inputState,
						o =
							n && s && s.dragging && s.dragMove
								? { from: s.dragging.from, to: s.dragging.to }
								: null,
						a = { from: r, insert: i },
						l = t.state.changes(o ? [o, a] : a);
					t.focus(),
						t.dispatch({
							changes: l,
							selection: { anchor: l.mapPos(r, -1), head: l.mapPos(r, 1) },
							userEvent: o ? "move.drop" : "input.drop"
						});
				}
				(xn.dragstart = (t, e) => {
					let {
							selection: { main: i }
						} = t.state,
						{ mouseSelection: n } = t.inputState;
					n && (n.dragging = i),
						e.dataTransfer &&
							(e.dataTransfer.setData("Text", t.state.sliceDoc(i.from, i.to)),
							(e.dataTransfer.effectAllowed = "copyMove"));
				}),
					(xn.drop = (t, e) => {
						if (!e.dataTransfer) return;
						if (t.state.readOnly) return e.preventDefault();
						let i = e.dataTransfer.files;
						if (i && i.length) {
							e.preventDefault();
							let n = Array(i.length),
								r = 0,
								s = () => {
									++r == i.length &&
										Mn(
											t,
											e,
											n.filter((t) => null != t).join(t.state.lineBreak),
											!1
										);
								};
							for (let t = 0; t < i.length; t++) {
								let e = new FileReader();
								(e.onerror = s),
									(e.onload = () => {
										/[\x00-\x08\x0e-\x1f]{2}/.test(e.result) ||
											(n[t] = e.result),
											s();
									}),
									e.readAsText(i[t]);
							}
						} else Mn(t, e, e.dataTransfer.getData("Text"), !0);
					}),
					(xn.paste = (t, e) => {
						if (t.state.readOnly) return e.preventDefault();
						t.observer.flush();
						let i = Pn ? null : e.clipboardData;
						i
							? (kn(t, i.getData("text/plain")), e.preventDefault())
							: (function (t) {
									let e = t.dom.parentNode;
									if (!e) return;
									let i = e.appendChild(document.createElement("textarea"));
									(i.style.cssText =
										"position: fixed; left: -10000px; top: 10px"),
										i.focus(),
										setTimeout(() => {
											t.focus(), i.remove(), kn(t, i.value);
										}, 50);
							  })(t);
					});
				let qn = null;
				xn.copy = xn.cut = (t, e) => {
					let {
						text: i,
						ranges: n,
						linewise: r
					} = (function (t) {
						let e = [],
							i = [],
							n = !1;
						for (let n of t.selection.ranges)
							n.empty || (e.push(t.sliceDoc(n.from, n.to)), i.push(n));
						if (!e.length) {
							let r = -1;
							for (let { from: n } of t.selection.ranges) {
								let s = t.doc.lineAt(n);
								s.number > r &&
									(e.push(s.text),
									i.push({
										from: s.from,
										to: Math.min(t.doc.length, s.to + 1)
									})),
									(r = s.number);
							}
							n = !0;
						}
						return { text: e.join(t.lineBreak), ranges: i, linewise: n };
					})(t.state);
					if (!i && !r) return;
					qn = r ? i : null;
					let s = Pn ? null : e.clipboardData;
					s
						? (e.preventDefault(), s.clearData(), s.setData("text/plain", i))
						: (function (t, e) {
								let i = t.dom.parentNode;
								if (!i) return;
								let n = i.appendChild(document.createElement("textarea"));
								(n.style.cssText =
									"position: fixed; left: -10000px; top: 10px"),
									(n.value = e),
									n.focus(),
									(n.selectionEnd = e.length),
									(n.selectionStart = 0),
									setTimeout(() => {
										n.remove(), t.focus();
									}, 50);
						  })(t, i),
						"cut" != e.type ||
							t.state.readOnly ||
							t.dispatch({
								changes: n,
								scrollIntoView: !0,
								userEvent: "delete.cut"
							});
				};
				const Un = ot.define();
				function jn(t, e) {
					let i = [];
					for (let n of t.facet(gi)) {
						let r = n(t, e);
						r && i.push(r);
					}
					return i ? t.update({ effects: i, annotations: Un.of(!0) }) : null;
				}
				function Dn(t) {
					setTimeout(() => {
						let e = t.hasFocus;
						if (e != t.inputState.notifiedFocused) {
							let i = jn(t.state, e);
							i ? t.dispatch(i) : t.update([]);
						}
					}, 10);
				}
				(xn.focus = (t) => {
					(t.inputState.lastFocusTime = Date.now()),
						t.scrollDOM.scrollTop ||
							(!t.inputState.lastScrollTop && !t.inputState.lastScrollLeft) ||
							((t.scrollDOM.scrollTop = t.inputState.lastScrollTop),
							(t.scrollDOM.scrollLeft = t.inputState.lastScrollLeft)),
						Dn(t);
				}),
					(xn.blur = (t) => {
						t.observer.clearSelectionRange(), Dn(t);
					}),
					(xn.compositionstart = xn.compositionupdate =
						(t) => {
							null == t.inputState.compositionFirstChange &&
								(t.inputState.compositionFirstChange = !0),
								t.inputState.composing < 0 && (t.inputState.composing = 0);
						}),
					(xn.compositionend = (t) => {
						(t.inputState.composing = -1),
							(t.inputState.compositionEndedAt = Date.now()),
							(t.inputState.compositionFirstChange = null),
							Re.chrome && Re.android && t.observer.flushSoon(),
							setTimeout(() => {
								t.inputState.composing < 0 &&
									t.docView.compositionDeco.size &&
									t.update([]);
							}, 50);
					}),
					(xn.contextmenu = (t) => {
						t.inputState.lastContextMenu = Date.now();
					}),
					(xn.beforeinput = (t, e) => {
						var i;
						let n;
						if (
							Re.chrome &&
							Re.android &&
							(n = Sn.find((t) => t.inputType == e.inputType)) &&
							(t.observer.delayAndroidKey(n.key, n.keyCode),
							"Backspace" == n.key || "Delete" == n.key)
						) {
							let e =
								(null === (i = window.visualViewport) || void 0 === i
									? void 0
									: i.height) || 0;
							setTimeout(() => {
								var i;
								((null === (i = window.visualViewport) || void 0 === i
									? void 0
									: i.height) || 0) >
									e + 10 &&
									t.hasFocus &&
									(t.contentDOM.blur(), t.focus());
							}, 100);
						}
					});
				const En = ["pre-wrap", "normal", "pre-line", "break-spaces"];
				class Gn {
					constructor(t) {
						(this.lineWrapping = t),
							(this.doc = n.empty),
							(this.heightSamples = {}),
							(this.lineHeight = 14),
							(this.charWidth = 7),
							(this.lineLength = 30),
							(this.heightChanged = !1);
					}
					heightForGap(t, e) {
						let i = this.doc.lineAt(e).number - this.doc.lineAt(t).number + 1;
						return (
							this.lineWrapping &&
								(i += Math.max(
									0,
									Math.ceil(
										(e - t - i * this.lineLength * 0.5) / this.lineLength
									)
								)),
							this.lineHeight * i
						);
					}
					heightForLine(t) {
						return this.lineWrapping
							? (1 +
									Math.max(
										0,
										Math.ceil((t - this.lineLength) / (this.lineLength - 5))
									)) *
									this.lineHeight
							: this.lineHeight;
					}
					setDoc(t) {
						return (this.doc = t), this;
					}
					mustRefreshForWrapping(t) {
						return En.indexOf(t) > -1 != this.lineWrapping;
					}
					mustRefreshForHeights(t) {
						let e = !1;
						for (let i = 0; i < t.length; i++) {
							let n = t[i];
							n < 0
								? i++
								: this.heightSamples[Math.floor(10 * n)] ||
								  ((e = !0), (this.heightSamples[Math.floor(10 * n)] = !0));
						}
						return e;
					}
					refresh(t, e, i, n, r) {
						let s = En.indexOf(t) > -1,
							o =
								Math.round(e) != Math.round(this.lineHeight) ||
								this.lineWrapping != s;
						if (
							((this.lineWrapping = s),
							(this.lineHeight = e),
							(this.charWidth = i),
							(this.lineLength = n),
							o)
						) {
							this.heightSamples = {};
							for (let t = 0; t < r.length; t++) {
								let e = r[t];
								e < 0 ? t++ : (this.heightSamples[Math.floor(10 * e)] = !0);
							}
						}
						return o;
					}
				}
				class In {
					constructor(t, e) {
						(this.from = t), (this.heights = e), (this.index = 0);
					}
					get more() {
						return this.index < this.heights.length;
					}
				}
				class zn {
					constructor(t, e, i, n, r) {
						(this.from = t),
							(this.length = e),
							(this.top = i),
							(this.height = n),
							(this.type = r);
					}
					get to() {
						return this.from + this.length;
					}
					get bottom() {
						return this.top + this.height;
					}
					join(t) {
						let e = (Array.isArray(this.type) ? this.type : [this]).concat(
							Array.isArray(t.type) ? t.type : [t]
						);
						return new zn(
							this.from,
							this.length + t.length,
							this.top,
							this.height + t.height,
							e
						);
					}
				}
				var Bn = (function (t) {
					return (
						(t[(t.ByPos = 0)] = "ByPos"),
						(t[(t.ByHeight = 1)] = "ByHeight"),
						(t[(t.ByPosNoHeight = 2)] = "ByPosNoHeight"),
						t
					);
				})(Bn || (Bn = {}));
				const Nn = 0.001;
				class Ln {
					constructor(t, e, i = 2) {
						(this.length = t), (this.height = e), (this.flags = i);
					}
					get outdated() {
						return (2 & this.flags) > 0;
					}
					set outdated(t) {
						this.flags = (t ? 2 : 0) | (-3 & this.flags);
					}
					setHeight(t, e) {
						this.height != e &&
							(Math.abs(this.height - e) > Nn && (t.heightChanged = !0),
							(this.height = e));
					}
					replace(t, e, i) {
						return Ln.of(i);
					}
					decomposeLeft(t, e) {
						e.push(this);
					}
					decomposeRight(t, e) {
						e.push(this);
					}
					applyChanges(t, e, i, n) {
						let r = this,
							s = i.doc;
						for (let o = n.length - 1; o >= 0; o--) {
							let { fromA: a, toA: l, fromB: h, toB: c } = n[o],
								O = r.lineAt(a, Bn.ByPosNoHeight, i.setDoc(e), 0, 0),
								u = O.to >= l ? O : r.lineAt(l, Bn.ByPosNoHeight, i, 0, 0);
							for (c += u.to - l, l = u.to; o > 0 && O.from <= n[o - 1].toA; )
								(a = n[o - 1].fromA),
									(h = n[o - 1].fromB),
									o--,
									a < O.from && (O = r.lineAt(a, Bn.ByPosNoHeight, i, 0, 0));
							(h += O.from - a), (a = O.from);
							let f = er.build(i.setDoc(s), t, h, c);
							r = r.replace(a, l, f);
						}
						return r.updateHeight(i, 0);
					}
					static empty() {
						return new Fn(0, 0);
					}
					static of(t) {
						if (1 == t.length) return t[0];
						let e = 0,
							i = t.length,
							n = 0,
							r = 0;
						for (;;)
							if (e == i)
								if (n > 2 * r) {
									let r = t[e - 1];
									r.break
										? t.splice(--e, 1, r.left, null, r.right)
										: t.splice(--e, 1, r.left, r.right),
										(i += 1 + r.break),
										(n -= r.size);
								} else {
									if (!(r > 2 * n)) break;
									{
										let e = t[i];
										e.break
											? t.splice(i, 1, e.left, null, e.right)
											: t.splice(i, 1, e.left, e.right),
											(i += 2 + e.break),
											(r -= e.size);
									}
								}
							else if (n < r) {
								let i = t[e++];
								i && (n += i.size);
							} else {
								let e = t[--i];
								e && (r += e.size);
							}
						let s = 0;
						return (
							null == t[e - 1]
								? ((s = 1), e--)
								: null == t[e] && ((s = 1), i++),
							new Kn(Ln.of(t.slice(0, e)), s, Ln.of(t.slice(i)))
						);
					}
				}
				Ln.prototype.size = 1;
				class Hn extends Ln {
					constructor(t, e, i) {
						super(t, e), (this.type = i);
					}
					blockAt(t, e, i, n) {
						return new zn(n, this.length, i, this.height, this.type);
					}
					lineAt(t, e, i, n, r) {
						return this.blockAt(0, i, n, r);
					}
					forEachLine(t, e, i, n, r, s) {
						t <= r + this.length && e >= r && s(this.blockAt(0, i, n, r));
					}
					updateHeight(t, e = 0, i = !1, n) {
						return (
							n &&
								n.from <= e &&
								n.more &&
								this.setHeight(t, n.heights[n.index++]),
							(this.outdated = !1),
							this
						);
					}
					toString() {
						return `block(${this.length})`;
					}
				}
				class Fn extends Hn {
					constructor(t, e) {
						super(t, e, Je.Text), (this.collapsed = 0), (this.widgetHeight = 0);
					}
					replace(t, e, i) {
						let n = i[0];
						return 1 == i.length &&
							(n instanceof Fn || (n instanceof Jn && 4 & n.flags)) &&
							Math.abs(this.length - n.length) < 10
							? (n instanceof Jn
									? (n = new Fn(n.length, this.height))
									: (n.height = this.height),
							  this.outdated || (n.outdated = !1),
							  n)
							: Ln.of(i);
					}
					updateHeight(t, e = 0, i = !1, n) {
						return (
							n && n.from <= e && n.more
								? this.setHeight(t, n.heights[n.index++])
								: (i || this.outdated) &&
								  this.setHeight(
										t,
										Math.max(
											this.widgetHeight,
											t.heightForLine(this.length - this.collapsed)
										)
								  ),
							(this.outdated = !1),
							this
						);
					}
					toString() {
						return `line(${this.length}${
							this.collapsed ? -this.collapsed : ""
						}${this.widgetHeight ? ":" + this.widgetHeight : ""})`;
					}
				}
				class Jn extends Ln {
					constructor(t) {
						super(t, 0);
					}
					heightMetrics(t, e) {
						let i,
							n = t.doc.lineAt(e).number,
							r = t.doc.lineAt(e + this.length).number,
							s = r - n + 1,
							o = 0;
						if (t.lineWrapping) {
							let e = Math.min(this.height, t.lineHeight * s);
							(i = e / s), (o = (this.height - e) / (this.length - s - 1));
						} else i = this.height / s;
						return { firstLine: n, lastLine: r, perLine: i, perChar: o };
					}
					blockAt(t, e, i, n) {
						let {
							firstLine: r,
							lastLine: s,
							perLine: o,
							perChar: a
						} = this.heightMetrics(e, n);
						if (e.lineWrapping) {
							let r =
									n +
									Math.round(
										Math.max(0, Math.min(1, (t - i) / this.height)) *
											this.length
									),
								s = e.doc.lineAt(r),
								l = o + s.length * a,
								h = Math.max(i, t - l / 2);
							return new zn(s.from, s.length, h, l, Je.Text);
						}
						{
							let n = Math.max(0, Math.min(s - r, Math.floor((t - i) / o))),
								{ from: a, length: l } = e.doc.line(r + n);
							return new zn(a, l, i + o * n, o, Je.Text);
						}
					}
					lineAt(t, e, i, n, r) {
						if (e == Bn.ByHeight) return this.blockAt(t, i, n, r);
						if (e == Bn.ByPosNoHeight) {
							let { from: e, to: n } = i.doc.lineAt(t);
							return new zn(e, n - e, 0, 0, Je.Text);
						}
						let {
								firstLine: s,
								perLine: o,
								perChar: a
							} = this.heightMetrics(i, r),
							l = i.doc.lineAt(t),
							h = o + l.length * a,
							c = l.number - s,
							O = n + o * c + a * (l.from - r - c);
						return new zn(
							l.from,
							l.length,
							Math.max(n, Math.min(O, n + this.height - h)),
							h,
							Je.Text
						);
					}
					forEachLine(t, e, i, n, r, s) {
						(t = Math.max(t, r)), (e = Math.min(e, r + this.length));
						let {
							firstLine: o,
							perLine: a,
							perChar: l
						} = this.heightMetrics(i, r);
						for (let h = t, c = n; h <= e; ) {
							let e = i.doc.lineAt(h);
							if (h == t) {
								let i = e.number - o;
								c += a * i + l * (t - r - i);
							}
							let n = a + l * e.length;
							s(new zn(e.from, e.length, c, n, Je.Text)),
								(c += n),
								(h = e.to + 1);
						}
					}
					replace(t, e, i) {
						let n = this.length - e;
						if (n > 0) {
							let t = i[i.length - 1];
							t instanceof Jn
								? (i[i.length - 1] = new Jn(t.length + n))
								: i.push(null, new Jn(n - 1));
						}
						if (t > 0) {
							let e = i[0];
							e instanceof Jn
								? (i[0] = new Jn(t + e.length))
								: i.unshift(new Jn(t - 1), null);
						}
						return Ln.of(i);
					}
					decomposeLeft(t, e) {
						e.push(new Jn(t - 1), null);
					}
					decomposeRight(t, e) {
						e.push(null, new Jn(this.length - t - 1));
					}
					updateHeight(t, e = 0, i = !1, n) {
						let r = e + this.length;
						if (n && n.from <= e + this.length && n.more) {
							let i = [],
								s = Math.max(e, n.from),
								o = -1;
							for (
								n.from > e && i.push(new Jn(n.from - e - 1).updateHeight(t, e));
								s <= r && n.more;

							) {
								let e = t.doc.lineAt(s).length;
								i.length && i.push(null);
								let r = n.heights[n.index++];
								-1 == o ? (o = r) : Math.abs(r - o) >= Nn && (o = -2);
								let a = new Fn(e, r);
								(a.outdated = !1), i.push(a), (s += e + 1);
							}
							s <= r && i.push(null, new Jn(r - s).updateHeight(t, s));
							let a = Ln.of(i);
							return (
								(o < 0 ||
									Math.abs(a.height - this.height) >= Nn ||
									Math.abs(o - this.heightMetrics(t, e).perLine) >= Nn) &&
									(t.heightChanged = !0),
								a
							);
						}
						return (
							(i || this.outdated) &&
								(this.setHeight(t, t.heightForGap(e, e + this.length)),
								(this.outdated = !1)),
							this
						);
					}
					toString() {
						return `gap(${this.length})`;
					}
				}
				class Kn extends Ln {
					constructor(t, e, i) {
						super(
							t.length + e + i.length,
							t.height + i.height,
							e | (t.outdated || i.outdated ? 2 : 0)
						),
							(this.left = t),
							(this.right = i),
							(this.size = t.size + i.size);
					}
					get break() {
						return 1 & this.flags;
					}
					blockAt(t, e, i, n) {
						let r = i + this.left.height;
						return t < r
							? this.left.blockAt(t, e, i, n)
							: this.right.blockAt(t, e, r, n + this.left.length + this.break);
					}
					lineAt(t, e, i, n, r) {
						let s = n + this.left.height,
							o = r + this.left.length + this.break,
							a = e == Bn.ByHeight ? t < s : t < o,
							l = a
								? this.left.lineAt(t, e, i, n, r)
								: this.right.lineAt(t, e, i, s, o);
						if (this.break || (a ? l.to < o : l.from > o)) return l;
						let h = e == Bn.ByPosNoHeight ? Bn.ByPosNoHeight : Bn.ByPos;
						return a
							? l.join(this.right.lineAt(o, h, i, s, o))
							: this.left.lineAt(o, h, i, n, r).join(l);
					}
					forEachLine(t, e, i, n, r, s) {
						let o = n + this.left.height,
							a = r + this.left.length + this.break;
						if (this.break)
							t < a && this.left.forEachLine(t, e, i, n, r, s),
								e >= a && this.right.forEachLine(t, e, i, o, a, s);
						else {
							let l = this.lineAt(a, Bn.ByPos, i, n, r);
							t < l.from && this.left.forEachLine(t, l.from - 1, i, n, r, s),
								l.to >= t && l.from <= e && s(l),
								e > l.to && this.right.forEachLine(l.to + 1, e, i, o, a, s);
						}
					}
					replace(t, e, i) {
						let n = this.left.length + this.break;
						if (e < n)
							return this.balanced(this.left.replace(t, e, i), this.right);
						if (t > this.left.length)
							return this.balanced(
								this.left,
								this.right.replace(t - n, e - n, i)
							);
						let r = [];
						t > 0 && this.decomposeLeft(t, r);
						let s = r.length;
						for (let t of i) r.push(t);
						if ((t > 0 && tr(r, s - 1), e < this.length)) {
							let t = r.length;
							this.decomposeRight(e, r), tr(r, t);
						}
						return Ln.of(r);
					}
					decomposeLeft(t, e) {
						let i = this.left.length;
						if (t <= i) return this.left.decomposeLeft(t, e);
						e.push(this.left),
							this.break && (i++, t >= i && e.push(null)),
							t > i && this.right.decomposeLeft(t - i, e);
					}
					decomposeRight(t, e) {
						let i = this.left.length,
							n = i + this.break;
						if (t >= n) return this.right.decomposeRight(t - n, e);
						t < i && this.left.decomposeRight(t, e),
							this.break && t < n && e.push(null),
							e.push(this.right);
					}
					balanced(t, e) {
						return t.size > 2 * e.size || e.size > 2 * t.size
							? Ln.of(this.break ? [t, null, e] : [t, e])
							: ((this.left = t),
							  (this.right = e),
							  (this.height = t.height + e.height),
							  (this.outdated = t.outdated || e.outdated),
							  (this.size = t.size + e.size),
							  (this.length = t.length + this.break + e.length),
							  this);
					}
					updateHeight(t, e = 0, i = !1, n) {
						let { left: r, right: s } = this,
							o = e + r.length + this.break,
							a = null;
						return (
							n && n.from <= e + r.length && n.more
								? (a = r = r.updateHeight(t, e, i, n))
								: r.updateHeight(t, e, i),
							n && n.from <= o + s.length && n.more
								? (a = s = s.updateHeight(t, o, i, n))
								: s.updateHeight(t, o, i),
							a
								? this.balanced(r, s)
								: ((this.height = this.left.height + this.right.height),
								  (this.outdated = !1),
								  this)
						);
					}
					toString() {
						return this.left + (this.break ? " " : "-") + this.right;
					}
				}
				function tr(t, e) {
					let i, n;
					null == t[e] &&
						(i = t[e - 1]) instanceof Jn &&
						(n = t[e + 1]) instanceof Jn &&
						t.splice(e - 1, 3, new Jn(i.length + 1 + n.length));
				}
				class er {
					constructor(t, e) {
						(this.pos = t),
							(this.oracle = e),
							(this.nodes = []),
							(this.lineStart = -1),
							(this.lineEnd = -1),
							(this.covering = null),
							(this.writtenTo = t);
					}
					get isCovered() {
						return (
							this.covering &&
							this.nodes[this.nodes.length - 1] == this.covering
						);
					}
					span(t, e) {
						if (this.lineStart > -1) {
							let t = Math.min(e, this.lineEnd),
								i = this.nodes[this.nodes.length - 1];
							i instanceof Fn
								? (i.length += t - this.pos)
								: (t > this.pos || !this.isCovered) &&
								  this.nodes.push(new Fn(t - this.pos, -1)),
								(this.writtenTo = t),
								e > t &&
									(this.nodes.push(null),
									this.writtenTo++,
									(this.lineStart = -1));
						}
						this.pos = e;
					}
					point(t, e, i) {
						if (t < e || i.heightRelevant) {
							let n = i.widget ? i.widget.estimatedHeight : 0;
							n < 0 && (n = this.oracle.lineHeight);
							let r = e - t;
							i.block
								? this.addBlock(new Hn(r, n, i.type))
								: (r || n >= 5) && this.addLineDeco(n, r);
						} else e > t && this.span(t, e);
						this.lineEnd > -1 &&
							this.lineEnd < this.pos &&
							(this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
					}
					enterLine() {
						if (this.lineStart > -1) return;
						let { from: t, to: e } = this.oracle.doc.lineAt(this.pos);
						(this.lineStart = t),
							(this.lineEnd = e),
							this.writtenTo < t &&
								((this.writtenTo < t - 1 ||
									null == this.nodes[this.nodes.length - 1]) &&
									this.nodes.push(this.blankContent(this.writtenTo, t - 1)),
								this.nodes.push(null)),
							this.pos > t && this.nodes.push(new Fn(this.pos - t, -1)),
							(this.writtenTo = this.pos);
					}
					blankContent(t, e) {
						let i = new Jn(e - t);
						return this.oracle.doc.lineAt(t).to == e && (i.flags |= 4), i;
					}
					ensureLine() {
						this.enterLine();
						let t = this.nodes.length
							? this.nodes[this.nodes.length - 1]
							: null;
						if (t instanceof Fn) return t;
						let e = new Fn(0, -1);
						return this.nodes.push(e), e;
					}
					addBlock(t) {
						this.enterLine(),
							t.type != Je.WidgetAfter || this.isCovered || this.ensureLine(),
							this.nodes.push(t),
							(this.writtenTo = this.pos = this.pos + t.length),
							t.type != Je.WidgetBefore && (this.covering = t);
					}
					addLineDeco(t, e) {
						let i = this.ensureLine();
						(i.length += e),
							(i.collapsed += e),
							(i.widgetHeight = Math.max(i.widgetHeight, t)),
							(this.writtenTo = this.pos = this.pos + e);
					}
					finish(t) {
						let e =
							0 == this.nodes.length ? null : this.nodes[this.nodes.length - 1];
						!(this.lineStart > -1) || e instanceof Fn || this.isCovered
							? (this.writtenTo < this.pos || null == e) &&
							  this.nodes.push(this.blankContent(this.writtenTo, this.pos))
							: this.nodes.push(new Fn(0, -1));
						let i = t;
						for (let t of this.nodes)
							t instanceof Fn && t.updateHeight(this.oracle, i),
								(i += t ? t.length : 1);
						return this.nodes;
					}
					static build(t, e, i, n) {
						let r = new er(i, t);
						return Pt.spans(e, i, n, r, 0), r.finish(i);
					}
				}
				class ir {
					constructor() {
						this.changes = [];
					}
					compareRange() {}
					comparePoint(t, e, i, n) {
						(t < e || (i && i.heightRelevant) || (n && n.heightRelevant)) &&
							ri(t, e, this.changes, 5);
					}
				}
				function nr(t, e) {
					let i = t.getBoundingClientRect(),
						n = t.ownerDocument,
						r = n.defaultView || window,
						s = Math.max(0, i.left),
						o = Math.min(r.innerWidth, i.right),
						a = Math.max(0, i.top),
						l = Math.min(r.innerHeight, i.bottom);
					for (let e = t.parentNode; e && e != n.body; )
						if (1 == e.nodeType) {
							let i = e,
								n = window.getComputedStyle(i);
							if (
								(i.scrollHeight > i.clientHeight ||
									i.scrollWidth > i.clientWidth) &&
								"visible" != n.overflow
							) {
								let n = i.getBoundingClientRect();
								(s = Math.max(s, n.left)),
									(o = Math.min(o, n.right)),
									(a = Math.max(a, n.top)),
									(l = e == t.parentNode ? n.bottom : Math.min(l, n.bottom));
							}
							e =
								"absolute" == n.position || "fixed" == n.position
									? i.offsetParent
									: i.parentNode;
						} else {
							if (11 != e.nodeType) break;
							e = e.host;
						}
					return {
						left: s - i.left,
						right: Math.max(s, o) - i.left,
						top: a - (i.top + e),
						bottom: Math.max(a, l) - (i.top + e)
					};
				}
				function rr(t, e) {
					let i = t.getBoundingClientRect();
					return {
						left: 0,
						right: i.right - i.left,
						top: e,
						bottom: i.bottom - (i.top + e)
					};
				}
				class sr {
					constructor(t, e, i) {
						(this.from = t), (this.to = e), (this.size = i);
					}
					static same(t, e) {
						if (t.length != e.length) return !1;
						for (let i = 0; i < t.length; i++) {
							let n = t[i],
								r = e[i];
							if (n.from != r.from || n.to != r.to || n.size != r.size)
								return !1;
						}
						return !0;
					}
					draw(t) {
						return Ke.replace({ widget: new or(this.size, t) }).range(
							this.from,
							this.to
						);
					}
				}
				class or extends Fe {
					constructor(t, e) {
						super(), (this.size = t), (this.vertical = e);
					}
					eq(t) {
						return t.size == this.size && t.vertical == this.vertical;
					}
					toDOM() {
						let t = document.createElement("div");
						return (
							this.vertical
								? (t.style.height = this.size + "px")
								: ((t.style.width = this.size + "px"),
								  (t.style.height = "2px"),
								  (t.style.display = "inline-block")),
							t
						);
					}
					get estimatedHeight() {
						return this.vertical ? this.size : -1;
					}
				}
				class ar {
					constructor(t) {
						(this.state = t),
							(this.pixelViewport = {
								left: 0,
								right: window.innerWidth,
								top: 0,
								bottom: 0
							}),
							(this.inView = !0),
							(this.paddingTop = 0),
							(this.paddingBottom = 0),
							(this.contentDOMWidth = 0),
							(this.contentDOMHeight = 0),
							(this.editorHeight = 0),
							(this.editorWidth = 0),
							(this.scaler = ur),
							(this.scrollTarget = null),
							(this.printing = !1),
							(this.mustMeasureContent = !0),
							(this.defaultTextDirection = Yi.LTR),
							(this.visibleRanges = []),
							(this.mustEnforceCursorAssoc = !1);
						let e = t
							.facet(Xi)
							.some(
								(t) => "function" != typeof t && "cm-lineWrapping" == t.class
							);
						(this.heightOracle = new Gn(e)),
							(this.stateDeco = t
								.facet(Zi)
								.filter((t) => "function" != typeof t)),
							(this.heightMap = Ln.empty().applyChanges(
								this.stateDeco,
								n.empty,
								this.heightOracle.setDoc(t.doc),
								[new Vi(0, 0, 0, t.doc.length)]
							)),
							(this.viewport = this.getViewport(0, null)),
							this.updateViewportLines(),
							this.updateForViewport(),
							(this.lineGaps = this.ensureLineGaps([])),
							(this.lineGapDeco = Ke.set(this.lineGaps.map((t) => t.draw(!1)))),
							this.computeVisibleRanges();
					}
					updateForViewport() {
						let t = [this.viewport],
							{ main: e } = this.state.selection;
						for (let i = 0; i <= 1; i++) {
							let n = i ? e.head : e.anchor;
							if (!t.some(({ from: t, to: e }) => n >= t && n <= e)) {
								let { from: e, to: i } = this.lineBlockAt(n);
								t.push(new lr(e, i));
							}
						}
						(this.viewports = t.sort((t, e) => t.from - e.from)),
							(this.scaler =
								this.heightMap.height <= 7e6
									? ur
									: new fr(this.heightOracle, this.heightMap, this.viewports));
					}
					updateViewportLines() {
						(this.viewportLines = []),
							this.heightMap.forEachLine(
								this.viewport.from,
								this.viewport.to,
								this.heightOracle.setDoc(this.state.doc),
								0,
								0,
								(t) => {
									this.viewportLines.push(
										1 == this.scaler.scale ? t : dr(t, this.scaler)
									);
								}
							);
					}
					update(t, e = null) {
						this.state = t.state;
						let i = this.stateDeco;
						this.stateDeco = this.state
							.facet(Zi)
							.filter((t) => "function" != typeof t);
						let n = t.changedRanges,
							r = Vi.extendWithRanges(
								n,
								(function (t, e, i) {
									let n = new ir();
									return Pt.compare(t, e, i, n, 0), n.changes;
								})(
									i,
									this.stateDeco,
									t ? t.changes : P.empty(this.state.doc.length)
								)
							),
							s = this.heightMap.height;
						(this.heightMap = this.heightMap.applyChanges(
							this.stateDeco,
							t.startState.doc,
							this.heightOracle.setDoc(this.state.doc),
							r
						)),
							this.heightMap.height != s && (t.flags |= 2);
						let o = r.length
							? this.mapViewport(this.viewport, t.changes)
							: this.viewport;
						((e && (e.range.head < o.from || e.range.head > o.to)) ||
							!this.viewportIsAppropriate(o)) &&
							(o = this.getViewport(0, e));
						let a =
							!t.changes.empty ||
							2 & t.flags ||
							o.from != this.viewport.from ||
							o.to != this.viewport.to;
						(this.viewport = o),
							this.updateForViewport(),
							a && this.updateViewportLines(),
							(this.lineGaps.length ||
								this.viewport.to - this.viewport.from > 4e3) &&
								this.updateLineGaps(
									this.ensureLineGaps(
										this.mapLineGaps(this.lineGaps, t.changes)
									)
								),
							(t.flags |= this.computeVisibleRanges()),
							e && (this.scrollTarget = e),
							!this.mustEnforceCursorAssoc &&
								t.selectionSet &&
								t.view.lineWrapping &&
								t.state.selection.main.empty &&
								t.state.selection.main.assoc &&
								!t.state.facet(Si) &&
								(this.mustEnforceCursorAssoc = !0);
					}
					measure(t) {
						let e = t.contentDOM,
							i = window.getComputedStyle(e),
							r = this.heightOracle,
							s = i.whiteSpace;
						this.defaultTextDirection = "rtl" == i.direction ? Yi.RTL : Yi.LTR;
						let o = this.heightOracle.mustRefreshForWrapping(s),
							a = e.getBoundingClientRect(),
							l =
								o ||
								this.mustMeasureContent ||
								this.contentDOMHeight != a.height;
						(this.contentDOMHeight = a.height), (this.mustMeasureContent = !1);
						let h = 0,
							c = 0,
							O = parseInt(i.paddingTop) || 0,
							u = parseInt(i.paddingBottom) || 0;
						(this.paddingTop == O && this.paddingBottom == u) ||
							((this.paddingTop = O), (this.paddingBottom = u), (h |= 10)),
							this.editorWidth != t.scrollDOM.clientWidth &&
								(r.lineWrapping && (l = !0),
								(this.editorWidth = t.scrollDOM.clientWidth),
								(h |= 8));
						let f = (this.printing ? rr : nr)(e, this.paddingTop),
							d = f.top - this.pixelViewport.top,
							p = f.bottom - this.pixelViewport.bottom;
						this.pixelViewport = f;
						let g =
							this.pixelViewport.bottom > this.pixelViewport.top &&
							this.pixelViewport.right > this.pixelViewport.left;
						if (
							(g != this.inView && ((this.inView = g), g && (l = !0)),
							!this.inView && !this.scrollTarget)
						)
							return 0;
						let m = a.width;
						if (
							((this.contentDOMWidth == m &&
								this.editorHeight == t.scrollDOM.clientHeight) ||
								((this.contentDOMWidth = a.width),
								(this.editorHeight = t.scrollDOM.clientHeight),
								(h |= 8)),
							l)
						) {
							let e = t.docView.measureVisibleLineHeights(this.viewport);
							if (
								(r.mustRefreshForHeights(e) && (o = !0),
								o ||
									(r.lineWrapping &&
										Math.abs(m - this.contentDOMWidth) > r.charWidth))
							) {
								let { lineHeight: i, charWidth: n } =
									t.docView.measureTextSize();
								(o = i > 0 && r.refresh(s, i, n, m / n, e)),
									o && ((t.docView.minWidth = 0), (h |= 8));
							}
							d > 0 && p > 0
								? (c = Math.max(d, p))
								: d < 0 && p < 0 && (c = Math.min(d, p)),
								(r.heightChanged = !1);
							for (let i of this.viewports) {
								let s =
									i.from == this.viewport.from
										? e
										: t.docView.measureVisibleLineHeights(i);
								this.heightMap = (
									o
										? Ln.empty().applyChanges(
												this.stateDeco,
												n.empty,
												this.heightOracle,
												[new Vi(0, 0, 0, t.state.doc.length)]
										  )
										: this.heightMap
								).updateHeight(r, 0, o, new In(i.from, s));
							}
							r.heightChanged && (h |= 2);
						}
						let S =
							!this.viewportIsAppropriate(this.viewport, c) ||
							(this.scrollTarget &&
								(this.scrollTarget.range.head < this.viewport.from ||
									this.scrollTarget.range.head > this.viewport.to));
						return (
							S && (this.viewport = this.getViewport(c, this.scrollTarget)),
							this.updateForViewport(),
							(2 & h || S) && this.updateViewportLines(),
							(this.lineGaps.length ||
								this.viewport.to - this.viewport.from > 4e3) &&
								this.updateLineGaps(
									this.ensureLineGaps(o ? [] : this.lineGaps, t)
								),
							(h |= this.computeVisibleRanges()),
							this.mustEnforceCursorAssoc &&
								((this.mustEnforceCursorAssoc = !1),
								t.docView.enforceCursorAssoc()),
							h
						);
					}
					get visibleTop() {
						return this.scaler.fromDOM(this.pixelViewport.top);
					}
					get visibleBottom() {
						return this.scaler.fromDOM(this.pixelViewport.bottom);
					}
					getViewport(t, e) {
						let i = 0.5 - Math.max(-0.5, Math.min(0.5, t / 1e3 / 2)),
							n = this.heightMap,
							r = this.heightOracle,
							{ visibleTop: s, visibleBottom: o } = this,
							a = new lr(
								n.lineAt(s - 1e3 * i, Bn.ByHeight, r, 0, 0).from,
								n.lineAt(o + 1e3 * (1 - i), Bn.ByHeight, r, 0, 0).to
							);
						if (e) {
							let { head: t } = e.range;
							if (t < a.from || t > a.to) {
								let i,
									s = Math.min(
										this.editorHeight,
										this.pixelViewport.bottom - this.pixelViewport.top
									),
									o = n.lineAt(t, Bn.ByPos, r, 0, 0);
								(i =
									"center" == e.y
										? (o.top + o.bottom) / 2 - s / 2
										: "start" == e.y || ("nearest" == e.y && t < a.from)
										? o.top
										: o.bottom - s),
									(a = new lr(
										n.lineAt(i - 500, Bn.ByHeight, r, 0, 0).from,
										n.lineAt(i + s + 500, Bn.ByHeight, r, 0, 0).to
									));
							}
						}
						return a;
					}
					mapViewport(t, e) {
						let i = e.mapPos(t.from, -1),
							n = e.mapPos(t.to, 1);
						return new lr(
							this.heightMap.lineAt(i, Bn.ByPos, this.heightOracle, 0, 0).from,
							this.heightMap.lineAt(n, Bn.ByPos, this.heightOracle, 0, 0).to
						);
					}
					viewportIsAppropriate({ from: t, to: e }, i = 0) {
						if (!this.inView) return !0;
						let { top: n } = this.heightMap.lineAt(
								t,
								Bn.ByPos,
								this.heightOracle,
								0,
								0
							),
							{ bottom: r } = this.heightMap.lineAt(
								e,
								Bn.ByPos,
								this.heightOracle,
								0,
								0
							),
							{ visibleTop: s, visibleBottom: o } = this;
						return (
							(0 == t || n <= s - Math.max(10, Math.min(-i, 250))) &&
							(e == this.state.doc.length ||
								r >= o + Math.max(10, Math.min(i, 250))) &&
							n > s - 2e3 &&
							r < o + 2e3
						);
					}
					mapLineGaps(t, e) {
						if (!t.length || e.empty) return t;
						let i = [];
						for (let n of t)
							e.touchesRange(n.from, n.to) ||
								i.push(new sr(e.mapPos(n.from), e.mapPos(n.to), n.size));
						return i;
					}
					ensureLineGaps(t, e) {
						let i = this.heightOracle.lineWrapping,
							n = i ? 1e4 : 2e3,
							r = n >> 1,
							s = n << 1;
						if (this.defaultTextDirection != Yi.LTR && !i) return [];
						let o = [],
							a = (n, s, l, h) => {
								if (s - n < r) return;
								let c = this.state.selection.main,
									O = [c.from];
								c.empty || O.push(c.to);
								for (let t of O)
									if (t > n && t < s)
										return a(n, t - 10, l, h), void a(t + 10, s, l, h);
								let u = (function (t, e) {
									for (let i of t) if (e(i)) return i;
								})(
									t,
									(t) =>
										t.from >= l.from &&
										t.to <= l.to &&
										Math.abs(t.from - n) < r &&
										Math.abs(t.to - s) < r &&
										!O.some((e) => t.from < e && t.to > e)
								);
								if (!u) {
									if (
										s < l.to &&
										e &&
										i &&
										e.visibleRanges.some((t) => t.from <= s && t.to >= s)
									) {
										let t = e.moveToLineBoundary(W.cursor(s), !1, !0).head;
										t > n && (s = t);
									}
									u = new sr(n, s, this.gapSize(l, n, s, h));
								}
								o.push(u);
							};
						for (let t of this.viewportLines) {
							if (t.length < s) continue;
							let e = hr(t.from, t.to, this.stateDeco);
							if (e.total < s) continue;
							let r,
								o,
								l = this.scrollTarget ? this.scrollTarget.range.head : null;
							if (i) {
								let i,
									s,
									a =
										(n / this.heightOracle.lineLength) *
										this.heightOracle.lineHeight;
								if (null != l) {
									let n = Or(e, l),
										r =
											((this.visibleBottom - this.visibleTop) / 2 + a) /
											t.height;
									(i = n - r), (s = n + r);
								} else
									(i = (this.visibleTop - t.top - a) / t.height),
										(s = (this.visibleBottom - t.top + a) / t.height);
								(r = cr(e, i)), (o = cr(e, s));
							} else {
								let t,
									i,
									s = e.total * this.heightOracle.charWidth,
									a = n * this.heightOracle.charWidth;
								if (null != l) {
									let n = Or(e, l),
										r =
											((this.pixelViewport.right - this.pixelViewport.left) /
												2 +
												a) /
											s;
									(t = n - r), (i = n + r);
								} else
									(t = (this.pixelViewport.left - a) / s),
										(i = (this.pixelViewport.right + a) / s);
								(r = cr(e, t)), (o = cr(e, i));
							}
							r > t.from && a(t.from, r, t, e), o < t.to && a(o, t.to, t, e);
						}
						return o;
					}
					gapSize(t, e, i, n) {
						let r = Or(n, i) - Or(n, e);
						return this.heightOracle.lineWrapping
							? t.height * r
							: n.total * this.heightOracle.charWidth * r;
					}
					updateLineGaps(t) {
						sr.same(t, this.lineGaps) ||
							((this.lineGaps = t),
							(this.lineGapDeco = Ke.set(
								t.map((t) => t.draw(this.heightOracle.lineWrapping))
							)));
					}
					computeVisibleRanges() {
						let t = this.stateDeco;
						this.lineGaps.length && (t = t.concat(this.lineGapDeco));
						let e = [];
						Pt.spans(
							t,
							this.viewport.from,
							this.viewport.to,
							{
								span(t, i) {
									e.push({ from: t, to: i });
								},
								point() {}
							},
							20
						);
						let i =
							e.length != this.visibleRanges.length ||
							this.visibleRanges.some(
								(t, i) => t.from != e[i].from || t.to != e[i].to
							);
						return (this.visibleRanges = e), i ? 4 : 0;
					}
					lineBlockAt(t) {
						return (
							(t >= this.viewport.from &&
								t <= this.viewport.to &&
								this.viewportLines.find((e) => e.from <= t && e.to >= t)) ||
							dr(
								this.heightMap.lineAt(t, Bn.ByPos, this.heightOracle, 0, 0),
								this.scaler
							)
						);
					}
					lineBlockAtHeight(t) {
						return dr(
							this.heightMap.lineAt(
								this.scaler.fromDOM(t),
								Bn.ByHeight,
								this.heightOracle,
								0,
								0
							),
							this.scaler
						);
					}
					elementAtHeight(t) {
						return dr(
							this.heightMap.blockAt(
								this.scaler.fromDOM(t),
								this.heightOracle,
								0,
								0
							),
							this.scaler
						);
					}
					get docHeight() {
						return this.scaler.toDOM(this.heightMap.height);
					}
					get contentHeight() {
						return this.docHeight + this.paddingTop + this.paddingBottom;
					}
				}
				class lr {
					constructor(t, e) {
						(this.from = t), (this.to = e);
					}
				}
				function hr(t, e, i) {
					let n = [],
						r = t,
						s = 0;
					return (
						Pt.spans(
							i,
							t,
							e,
							{
								span() {},
								point(t, e) {
									t > r && (n.push({ from: r, to: t }), (s += t - r)), (r = e);
								}
							},
							20
						),
						r < e && (n.push({ from: r, to: e }), (s += e - r)),
						{ total: s, ranges: n }
					);
				}
				function cr({ total: t, ranges: e }, i) {
					if (i <= 0) return e[0].from;
					if (i >= 1) return e[e.length - 1].to;
					let n = Math.floor(t * i);
					for (let t = 0; ; t++) {
						let { from: i, to: r } = e[t],
							s = r - i;
						if (n <= s) return i + n;
						n -= s;
					}
				}
				function Or(t, e) {
					let i = 0;
					for (let { from: n, to: r } of t.ranges) {
						if (e <= r) {
							i += e - n;
							break;
						}
						i += r - n;
					}
					return i / t.total;
				}
				const ur = { toDOM: (t) => t, fromDOM: (t) => t, scale: 1 };
				class fr {
					constructor(t, e, i) {
						let n = 0,
							r = 0,
							s = 0;
						(this.viewports = i.map(({ from: i, to: r }) => {
							let s = e.lineAt(i, Bn.ByPos, t, 0, 0).top,
								o = e.lineAt(r, Bn.ByPos, t, 0, 0).bottom;
							return (
								(n += o - s),
								{ from: i, to: r, top: s, bottom: o, domTop: 0, domBottom: 0 }
							);
						})),
							(this.scale = (7e6 - n) / (e.height - n));
						for (let t of this.viewports)
							(t.domTop = s + (t.top - r) * this.scale),
								(s = t.domBottom = t.domTop + (t.bottom - t.top)),
								(r = t.bottom);
					}
					toDOM(t) {
						for (let e = 0, i = 0, n = 0; ; e++) {
							let r = e < this.viewports.length ? this.viewports[e] : null;
							if (!r || t < r.top) return n + (t - i) * this.scale;
							if (t <= r.bottom) return r.domTop + (t - r.top);
							(i = r.bottom), (n = r.domBottom);
						}
					}
					fromDOM(t) {
						for (let e = 0, i = 0, n = 0; ; e++) {
							let r = e < this.viewports.length ? this.viewports[e] : null;
							if (!r || t < r.domTop) return i + (t - n) / this.scale;
							if (t <= r.domBottom) return r.top + (t - r.domTop);
							(i = r.bottom), (n = r.domBottom);
						}
					}
				}
				function dr(t, e) {
					if (1 == e.scale) return t;
					let i = e.toDOM(t.top),
						n = e.toDOM(t.bottom);
					return new zn(
						t.from,
						t.length,
						i,
						n - i,
						Array.isArray(t.type) ? t.type.map((t) => dr(t, e)) : t.type
					);
				}
				const pr = _.define({ combine: (t) => t.join(" ") }),
					gr = _.define({ combine: (t) => t.indexOf(!0) > -1 }),
					mr = Et.newName(),
					Sr = Et.newName(),
					Qr = Et.newName(),
					vr = { "&light": "." + Sr, "&dark": "." + Qr };
				function yr(t, e, i) {
					return new Et(e, {
						finish: (e) =>
							/&/.test(e)
								? e.replace(/&\w*/, (e) => {
										if ("&" == e) return t;
										if (!i || !i[e])
											throw new RangeError(`Unsupported selector: ${e}`);
										return i[e];
								  })
								: t + " " + e
					});
				}
				const br = yr(
					"." + mr,
					{
						"&": {
							position: "relative !important",
							boxSizing: "border-box",
							"&.cm-focused": { outline: "1px dotted #212121" },
							display: "flex !important",
							flexDirection: "column"
						},
						".cm-scroller": {
							display: "flex !important",
							alignItems: "flex-start !important",
							fontFamily: "monospace",
							lineHeight: 1.4,
							height: "100%",
							overflowX: "auto",
							position: "relative",
							zIndex: 0
						},
						".cm-content": {
							margin: 0,
							flexGrow: 2,
							flexShrink: 0,
							display: "block",
							whiteSpace: "pre",
							wordWrap: "normal",
							boxSizing: "border-box",
							padding: "4px 0",
							outline: "none",
							"&[contenteditable=true]": {
								WebkitUserModify: "read-write-plaintext-only"
							}
						},
						".cm-lineWrapping": {
							whiteSpace_fallback: "pre-wrap",
							whiteSpace: "break-spaces",
							wordBreak: "break-word",
							overflowWrap: "anywhere",
							flexShrink: 1
						},
						"&light .cm-content": { caretColor: "black" },
						"&dark .cm-content": { caretColor: "white" },
						".cm-line": { display: "block", padding: "0 2px 0 6px" },
						".cm-layer": {
							contain: "size style",
							"& > *": { position: "absolute" }
						},
						"&light .cm-selectionBackground": { background: "#d9d9d9" },
						"&dark .cm-selectionBackground": { background: "#222" },
						"&light.cm-focused .cm-selectionBackground": {
							background: "#d7d4f0"
						},
						"&dark.cm-focused .cm-selectionBackground": { background: "#233" },
						".cm-cursorLayer": { pointerEvents: "none" },
						"&.cm-focused .cm-cursorLayer": {
							animation: "steps(1) cm-blink 1.2s infinite"
						},
						"@keyframes cm-blink": {
							"0%": {},
							"50%": { opacity: 0 },
							"100%": {}
						},
						"@keyframes cm-blink2": {
							"0%": {},
							"50%": { opacity: 0 },
							"100%": {}
						},
						".cm-cursor, .cm-dropCursor": {
							borderLeft: "1.2px solid black",
							marginLeft: "-0.6px",
							pointerEvents: "none"
						},
						".cm-cursor": { display: "none" },
						"&dark .cm-cursor": { borderLeftColor: "#444" },
						".cm-dropCursor": { position: "absolute" },
						"&.cm-focused .cm-cursor": { display: "block" },
						"&light .cm-activeLine": { backgroundColor: "#cceeff44" },
						"&dark .cm-activeLine": { backgroundColor: "#99eeff33" },
						"&light .cm-specialChar": { color: "red" },
						"&dark .cm-specialChar": { color: "#f78" },
						".cm-gutters": {
							flexShrink: 0,
							display: "flex",
							height: "100%",
							boxSizing: "border-box",
							left: 0,
							zIndex: 200
						},
						"&light .cm-gutters": {
							backgroundColor: "#f5f5f5",
							color: "#6c6c6c",
							borderRight: "1px solid #ddd"
						},
						"&dark .cm-gutters": { backgroundColor: "#333338", color: "#ccc" },
						".cm-gutter": {
							display: "flex !important",
							flexDirection: "column",
							flexShrink: 0,
							boxSizing: "border-box",
							minHeight: "100%",
							overflow: "hidden"
						},
						".cm-gutterElement": { boxSizing: "border-box" },
						".cm-lineNumbers .cm-gutterElement": {
							padding: "0 3px 0 5px",
							minWidth: "20px",
							textAlign: "right",
							whiteSpace: "nowrap"
						},
						"&light .cm-activeLineGutter": { backgroundColor: "#e2f2ff" },
						"&dark .cm-activeLineGutter": { backgroundColor: "#222227" },
						".cm-panels": {
							boxSizing: "border-box",
							position: "sticky",
							left: 0,
							right: 0
						},
						"&light .cm-panels": { backgroundColor: "#f5f5f5", color: "black" },
						"&light .cm-panels-top": { borderBottom: "1px solid #ddd" },
						"&light .cm-panels-bottom": { borderTop: "1px solid #ddd" },
						"&dark .cm-panels": { backgroundColor: "#333338", color: "white" },
						".cm-tab": {
							display: "inline-block",
							overflow: "hidden",
							verticalAlign: "bottom"
						},
						".cm-widgetBuffer": {
							verticalAlign: "text-top",
							height: "1em",
							width: 0,
							display: "inline"
						},
						".cm-placeholder": {
							color: "#888",
							display: "inline-block",
							verticalAlign: "top"
						},
						".cm-highlightSpace:before": {
							content: "attr(data-display)",
							position: "absolute",
							pointerEvents: "none",
							color: "#888"
						},
						".cm-highlightTab": {
							backgroundImage:
								'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>\')',
							backgroundSize: "auto 100%",
							backgroundPosition: "right 90%",
							backgroundRepeat: "no-repeat"
						},
						".cm-trailingSpace": { backgroundColor: "#ff332255" },
						".cm-button": {
							verticalAlign: "middle",
							color: "inherit",
							fontSize: "70%",
							padding: ".2em 1em",
							borderRadius: "1px"
						},
						"&light .cm-button": {
							backgroundImage: "linear-gradient(#eff1f5, #d9d9df)",
							border: "1px solid #888",
							"&:active": {
								backgroundImage: "linear-gradient(#b4b4b4, #d0d3d6)"
							}
						},
						"&dark .cm-button": {
							backgroundImage: "linear-gradient(#393939, #111)",
							border: "1px solid #888",
							"&:active": { backgroundImage: "linear-gradient(#111, #333)" }
						},
						".cm-textfield": {
							verticalAlign: "middle",
							color: "inherit",
							fontSize: "70%",
							border: "1px solid silver",
							padding: ".2em .5em"
						},
						"&light .cm-textfield": { backgroundColor: "white" },
						"&dark .cm-textfield": {
							border: "1px solid #555",
							backgroundColor: "inherit"
						}
					},
					vr
				);
				class wr {
					constructor(t, e, i, n) {
						(this.typeOver = n), (this.bounds = null), (this.text = "");
						let { impreciseHead: r, impreciseAnchor: s } = t.docView;
						if (t.state.readOnly && e > -1) this.newSel = null;
						else if (
							e > -1 &&
							(this.bounds = t.docView.domBoundsAround(e, i, 0))
						) {
							let e =
									r || s
										? []
										: (function (t) {
												let e = [];
												if (t.root.activeElement != t.contentDOM) return e;
												let {
													anchorNode: i,
													anchorOffset: n,
													focusNode: r,
													focusOffset: s
												} = t.observer.selectionRange;
												return (
													i &&
														(e.push(new Ji(i, n)),
														(r == i && s == n) || e.push(new Ji(r, s))),
													e
												);
										  })(t),
								i = new Hi(e, t.state);
							i.readRange(this.bounds.startDOM, this.bounds.endDOM),
								(this.text = i.text),
								(this.newSel = (function (t, e) {
									if (0 == t.length) return null;
									let i = t[0].pos,
										n = 2 == t.length ? t[1].pos : i;
									return i > -1 && n > -1 ? W.single(i + e, n + e) : null;
								})(e, this.bounds.from));
						} else {
							let e = t.observer.selectionRange,
								i =
									(r && r.node == e.focusNode && r.offset == e.focusOffset) ||
									!ee(t.contentDOM, e.focusNode)
										? t.state.selection.main.head
										: t.docView.posFromDOM(e.focusNode, e.focusOffset),
								n =
									(s && s.node == e.anchorNode && s.offset == e.anchorOffset) ||
									!ee(t.contentDOM, e.anchorNode)
										? t.state.selection.main.anchor
										: t.docView.posFromDOM(e.anchorNode, e.anchorOffset);
							this.newSel = W.single(n, i);
						}
					}
				}
				function xr(t, e) {
					let i,
						{ newSel: r } = e,
						s = t.state.selection.main;
					if (e.bounds) {
						let { from: r, to: o } = e.bounds,
							a = s.from,
							l = null;
						((8 === t.inputState.lastKeyCode &&
							t.inputState.lastKeyTime > Date.now() - 100) ||
							(Re.android && e.text.length < o - r)) &&
							((a = s.to), (l = "end"));
						let h = (function (t, e, i, n) {
							let r = Math.min(t.length, e.length),
								s = 0;
							for (; s < r && t.charCodeAt(s) == e.charCodeAt(s); ) s++;
							if (s == r && t.length == e.length) return null;
							let o = t.length,
								a = e.length;
							for (
								;
								o > 0 && a > 0 && t.charCodeAt(o - 1) == e.charCodeAt(a - 1);

							)
								o--, a--;
							return (
								"end" == n && (i -= o + Math.max(0, s - Math.min(o, a)) - s),
								o < s && t.length < e.length
									? ((s -= i <= s && i >= o ? s - i : 0),
									  (a = s + (a - o)),
									  (o = s))
									: a < s &&
									  ((s -= i <= s && i >= a ? s - i : 0),
									  (o = s + (o - a)),
									  (a = s)),
								{ from: s, toA: o, toB: a }
							);
						})(t.state.doc.sliceString(r, o, Li), e.text, a - r, l);
						h &&
							(Re.chrome &&
								13 == t.inputState.lastKeyCode &&
								h.toB == h.from + 2 &&
								e.text.slice(h.from, h.toB) == Li + Li &&
								h.toB--,
							(i = {
								from: r + h.from,
								to: r + h.toA,
								insert: n.of(e.text.slice(h.from, h.toB).split(Li))
							}));
					} else
						r &&
							((!t.hasFocus && t.state.facet(bi)) || r.main.eq(s)) &&
							(r = null);
					if (!i && !r) return !1;
					if (
						(!i && e.typeOver && !s.empty && r && r.main.empty
							? (i = {
									from: s.from,
									to: s.to,
									insert: t.state.doc.slice(s.from, s.to)
							  })
							: i &&
							  i.from >= s.from &&
							  i.to <= s.to &&
							  (i.from != s.from || i.to != s.to) &&
							  s.to - s.from - (i.to - i.from) <= 4
							? (i = {
									from: s.from,
									to: s.to,
									insert: t.state.doc
										.slice(s.from, i.from)
										.append(i.insert)
										.append(t.state.doc.slice(i.to, s.to))
							  })
							: (Re.mac || Re.android) &&
							  i &&
							  i.from == i.to &&
							  i.from == s.head - 1 &&
							  /^\. ?$/.test(i.insert.toString()) &&
							  "off" == t.contentDOM.getAttribute("autocorrect")
							? (r &&
									2 == i.insert.length &&
									(r = W.single(r.main.anchor - 1, r.main.head - 1)),
							  (i = { from: s.from, to: s.to, insert: n.of([" "]) }))
							: Re.chrome &&
							  i &&
							  i.from == i.to &&
							  i.from == s.head &&
							  "\n " == i.insert.toString() &&
							  t.lineWrapping &&
							  (r && (r = W.single(r.main.anchor - 1, r.main.head - 1)),
							  (i = { from: s.from, to: s.to, insert: n.of([" "]) })),
						i)
					) {
						let e = t.state;
						if (Re.ios && t.inputState.flushIOSKey(t)) return !0;
						if (
							Re.android &&
							((i.from == s.from &&
								i.to == s.to &&
								1 == i.insert.length &&
								2 == i.insert.lines &&
								ge(t.contentDOM, "Enter", 13)) ||
								(i.from == s.from - 1 &&
									i.to == s.to &&
									0 == i.insert.length &&
									ge(t.contentDOM, "Backspace", 8)) ||
								(i.from == s.from &&
									i.to == s.to + 1 &&
									0 == i.insert.length &&
									ge(t.contentDOM, "Delete", 46)))
						)
							return !0;
						let n,
							o = i.insert.toString();
						if (t.state.facet(pi).some((e) => e(t, i.from, i.to, o))) return !0;
						if (
							(t.inputState.composing >= 0 && t.inputState.composing++,
							i.from >= s.from &&
								i.to <= s.to &&
								i.to - i.from >= (s.to - s.from) / 3 &&
								(!r ||
									(r.main.empty && r.main.from == i.from + i.insert.length)) &&
								t.inputState.composing < 0)
						) {
							let r = s.from < i.from ? e.sliceDoc(s.from, i.from) : "",
								o = s.to > i.to ? e.sliceDoc(i.to, s.to) : "";
							n = e.replaceSelection(
								t.state.toText(
									r + i.insert.sliceString(0, void 0, t.state.lineBreak) + o
								)
							);
						} else {
							let o = e.changes(i),
								a =
									r && !e.selection.main.eq(r.main) && r.main.to <= o.newLength
										? r.main
										: void 0;
							if (
								e.selection.ranges.length > 1 &&
								t.inputState.composing >= 0 &&
								i.to <= s.to &&
								i.to >= s.to - 10
							) {
								let r = t.state.sliceDoc(i.from, i.to),
									l = en(t) || t.state.doc.lineAt(s.head),
									h = s.to - i.to,
									c = s.to - s.from;
								n = e.changeByRange((n) => {
									if (n.from == s.from && n.to == s.to)
										return { changes: o, range: a || n.map(o) };
									let O = n.to - h,
										u = O - r.length;
									if (
										n.to - n.from != c ||
										t.state.sliceDoc(u, O) != r ||
										(l && n.to >= l.from && n.from <= l.to)
									)
										return { range: n };
									let f = e.changes({ from: u, to: O, insert: i.insert }),
										d = n.to - s.to;
									return {
										changes: f,
										range: a
											? W.range(
													Math.max(0, a.anchor + d),
													Math.max(0, a.head + d)
											  )
											: n.map(f)
									};
								});
							} else
								n = { changes: o, selection: a && e.selection.replaceRange(a) };
						}
						let a = "input.type";
						return (
							t.composing &&
								((a += ".compose"),
								t.inputState.compositionFirstChange &&
									((a += ".start"),
									(t.inputState.compositionFirstChange = !1))),
							t.dispatch(n, { scrollIntoView: !0, userEvent: a }),
							!0
						);
					}
					if (r && !r.main.eq(s)) {
						let e = !1,
							i = "select";
						return (
							t.inputState.lastSelectionTime > Date.now() - 50 &&
								("select" == t.inputState.lastSelectionOrigin && (e = !0),
								(i = t.inputState.lastSelectionOrigin)),
							t.dispatch({ selection: r, scrollIntoView: e, userEvent: i }),
							!0
						);
					}
					return !1;
				}
				const $r = {
						childList: !0,
						characterData: !0,
						subtree: !0,
						attributes: !0,
						characterDataOldValue: !0
					},
					Pr = Re.ie && Re.ie_version <= 11;
				class kr {
					constructor(t) {
						(this.view = t),
							(this.active = !1),
							(this.selectionRange = new Oe()),
							(this.selectionChanged = !1),
							(this.delayedFlush = -1),
							(this.resizeTimeout = -1),
							(this.queue = []),
							(this.delayedAndroidKey = null),
							(this.flushingAndroidKey = -1),
							(this.lastChange = 0),
							(this.scrollTargets = []),
							(this.intersection = null),
							(this.resizeScroll = null),
							(this.resizeContent = null),
							(this.intersecting = !1),
							(this.gapIntersection = null),
							(this.gaps = []),
							(this.parentCheck = -1),
							(this.dom = t.contentDOM),
							(this.observer = new MutationObserver((e) => {
								for (let t of e) this.queue.push(t);
								((Re.ie && Re.ie_version <= 11) || (Re.ios && t.composing)) &&
								e.some(
									(t) =>
										("childList" == t.type && t.removedNodes.length) ||
										("characterData" == t.type &&
											t.oldValue.length > t.target.nodeValue.length)
								)
									? this.flushSoon()
									: this.flush();
							})),
							Pr &&
								(this.onCharData = (t) => {
									this.queue.push({
										target: t.target,
										type: "characterData",
										oldValue: t.prevValue
									}),
										this.flushSoon();
								}),
							(this.onSelectionChange = this.onSelectionChange.bind(this)),
							(this.onResize = this.onResize.bind(this)),
							(this.onPrint = this.onPrint.bind(this)),
							(this.onScroll = this.onScroll.bind(this)),
							"function" == typeof ResizeObserver &&
								((this.resizeScroll = new ResizeObserver(() => {
									var t;
									(null === (t = this.view.docView) || void 0 === t
										? void 0
										: t.lastUpdate) <
										Date.now() - 75 && this.onResize();
								})),
								this.resizeScroll.observe(t.scrollDOM),
								(this.resizeContent = new ResizeObserver(() =>
									this.view.requestMeasure()
								)),
								this.resizeContent.observe(t.contentDOM)),
							this.addWindowListeners((this.win = t.win)),
							this.start(),
							"function" == typeof IntersectionObserver &&
								((this.intersection = new IntersectionObserver((t) => {
									this.parentCheck < 0 &&
										(this.parentCheck = setTimeout(
											this.listenForScroll.bind(this),
											1e3
										)),
										t.length > 0 &&
											t[t.length - 1].intersectionRatio > 0 !=
												this.intersecting &&
											((this.intersecting = !this.intersecting),
											this.intersecting != this.view.inView &&
												this.onScrollChanged(document.createEvent("Event")));
								}, {})),
								this.intersection.observe(this.dom),
								(this.gapIntersection = new IntersectionObserver((t) => {
									t.length > 0 &&
										t[t.length - 1].intersectionRatio > 0 &&
										this.onScrollChanged(document.createEvent("Event"));
								}, {}))),
							this.listenForScroll(),
							this.readSelectionRange();
					}
					onScrollChanged(t) {
						this.view.inputState.runScrollHandlers(this.view, t),
							this.intersecting && this.view.measure();
					}
					onScroll(t) {
						this.intersecting && this.flush(!1), this.onScrollChanged(t);
					}
					onResize() {
						this.resizeTimeout < 0 &&
							(this.resizeTimeout = setTimeout(() => {
								(this.resizeTimeout = -1), this.view.requestMeasure();
							}, 50));
					}
					onPrint() {
						(this.view.viewState.printing = !0),
							this.view.measure(),
							setTimeout(() => {
								(this.view.viewState.printing = !1), this.view.requestMeasure();
							}, 500);
					}
					updateGaps(t) {
						if (
							this.gapIntersection &&
							(t.length != this.gaps.length ||
								this.gaps.some((e, i) => e != t[i]))
						) {
							this.gapIntersection.disconnect();
							for (let e of t) this.gapIntersection.observe(e);
							this.gaps = t;
						}
					}
					onSelectionChange(t) {
						let e = this.selectionChanged;
						if (!this.readSelectionRange() || this.delayedAndroidKey) return;
						let { view: i } = this,
							n = this.selectionRange;
						if (
							i.state.facet(bi)
								? i.root.activeElement != this.dom
								: !ie(i.dom, n)
						)
							return;
						let r = n.anchorNode && i.docView.nearest(n.anchorNode);
						r && r.ignoreEvent(t)
							? e || (this.selectionChanged = !1)
							: ((Re.ie && Re.ie_version <= 11) || (Re.android && Re.chrome)) &&
							  !i.state.selection.main.empty &&
							  n.focusNode &&
							  re(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset)
							? this.flushSoon()
							: this.flush(!1);
					}
					readSelectionRange() {
						let { view: t } = this,
							e =
								(Re.safari &&
									11 == t.root.nodeType &&
									(function (t) {
										let e = t.activeElement;
										for (; e && e.shadowRoot; ) e = e.shadowRoot.activeElement;
										return e;
									})(this.dom.ownerDocument) == this.dom &&
									(function (t) {
										let e = null;
										function i(t) {
											t.preventDefault(),
												t.stopImmediatePropagation(),
												(e = t.getTargetRanges()[0]);
										}
										if (
											(t.contentDOM.addEventListener("beforeinput", i, !0),
											t.dom.ownerDocument.execCommand("indent"),
											t.contentDOM.removeEventListener("beforeinput", i, !0),
											!e)
										)
											return null;
										let n = e.startContainer,
											r = e.startOffset,
											s = e.endContainer,
											o = e.endOffset,
											a = t.docView.domAtPos(t.state.selection.main.anchor);
										return (
											re(a.node, a.offset, s, o) &&
												([n, r, s, o] = [s, o, n, r]),
											{
												anchorNode: n,
												anchorOffset: r,
												focusNode: s,
												focusOffset: o
											}
										);
									})(this.view)) ||
								te(t.root);
						if (!e || this.selectionRange.eq(e)) return !1;
						let i = ie(this.dom, e);
						return i &&
							!this.selectionChanged &&
							t.inputState.lastFocusTime > Date.now() - 200 &&
							t.inputState.lastTouchTime < Date.now() - 300 &&
							(function (t, e) {
								let i = e.focusNode,
									n = e.focusOffset;
								if (!i || e.anchorNode != i || e.anchorOffset != n) return !1;
								for (;;)
									if (n) {
										if (1 != i.nodeType) return !1;
										let t = i.childNodes[n - 1];
										"false" == t.contentEditable ? n-- : ((i = t), (n = ae(i)));
									} else {
										if (i == t) return !0;
										(n = se(i)), (i = i.parentNode);
									}
							})(this.dom, e)
							? ((this.view.inputState.lastFocusTime = 0),
							  t.docView.updateSelection(),
							  !1)
							: (this.selectionRange.setRange(e),
							  i && (this.selectionChanged = !0),
							  !0);
					}
					setSelectionRange(t, e) {
						this.selectionRange.set(t.node, t.offset, e.node, e.offset),
							(this.selectionChanged = !1);
					}
					clearSelectionRange() {
						this.selectionRange.set(null, 0, null, 0);
					}
					listenForScroll() {
						this.parentCheck = -1;
						let t = 0,
							e = null;
						for (let i = this.dom; i; )
							if (1 == i.nodeType)
								!e &&
								t < this.scrollTargets.length &&
								this.scrollTargets[t] == i
									? t++
									: e || (e = this.scrollTargets.slice(0, t)),
									e && e.push(i),
									(i = i.assignedSlot || i.parentNode);
							else {
								if (11 != i.nodeType) break;
								i = i.host;
							}
						if (
							(t < this.scrollTargets.length &&
								!e &&
								(e = this.scrollTargets.slice(0, t)),
							e)
						) {
							for (let t of this.scrollTargets)
								t.removeEventListener("scroll", this.onScroll);
							for (let t of (this.scrollTargets = e))
								t.addEventListener("scroll", this.onScroll);
						}
					}
					ignore(t) {
						if (!this.active) return t();
						try {
							return this.stop(), t();
						} finally {
							this.start(), this.clear();
						}
					}
					start() {
						this.active ||
							(this.observer.observe(this.dom, $r),
							Pr &&
								this.dom.addEventListener(
									"DOMCharacterDataModified",
									this.onCharData
								),
							(this.active = !0));
					}
					stop() {
						this.active &&
							((this.active = !1),
							this.observer.disconnect(),
							Pr &&
								this.dom.removeEventListener(
									"DOMCharacterDataModified",
									this.onCharData
								));
					}
					clear() {
						this.processRecords(),
							(this.queue.length = 0),
							(this.selectionChanged = !1);
					}
					delayAndroidKey(t, e) {
						var i;
						if (!this.delayedAndroidKey) {
							let t = () => {
								let t = this.delayedAndroidKey;
								t &&
									(this.clearDelayedAndroidKey(),
									!this.flush() && t.force && ge(this.dom, t.key, t.keyCode));
							};
							this.flushingAndroidKey = this.view.win.requestAnimationFrame(t);
						}
						(this.delayedAndroidKey && "Enter" != t) ||
							(this.delayedAndroidKey = {
								key: t,
								keyCode: e,
								force:
									this.lastChange < Date.now() - 50 ||
									!!(null === (i = this.delayedAndroidKey) || void 0 === i
										? void 0
										: i.force)
							});
					}
					clearDelayedAndroidKey() {
						this.win.cancelAnimationFrame(this.flushingAndroidKey),
							(this.delayedAndroidKey = null),
							(this.flushingAndroidKey = -1);
					}
					flushSoon() {
						this.delayedFlush < 0 &&
							(this.delayedFlush = this.view.win.requestAnimationFrame(() => {
								(this.delayedFlush = -1), this.flush();
							}));
					}
					forceFlush() {
						this.delayedFlush >= 0 &&
							(this.view.win.cancelAnimationFrame(this.delayedFlush),
							(this.delayedFlush = -1)),
							this.flush();
					}
					processRecords() {
						let t = this.queue;
						for (let e of this.observer.takeRecords()) t.push(e);
						t.length && (this.queue = []);
						let e = -1,
							i = -1,
							n = !1;
						for (let r of t) {
							let t = this.readMutation(r);
							t &&
								(t.typeOver && (n = !0),
								-1 == e
									? ({ from: e, to: i } = t)
									: ((e = Math.min(t.from, e)), (i = Math.max(t.to, i))));
						}
						return { from: e, to: i, typeOver: n };
					}
					readChange() {
						let { from: t, to: e, typeOver: i } = this.processRecords(),
							n = this.selectionChanged && ie(this.dom, this.selectionRange);
						return t < 0 && !n
							? null
							: (t > -1 && (this.lastChange = Date.now()),
							  (this.view.inputState.lastFocusTime = 0),
							  (this.selectionChanged = !1),
							  new wr(this.view, t, e, i));
					}
					flush(t = !0) {
						if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
						t && this.readSelectionRange();
						let e = this.readChange();
						if (!e) return !1;
						let i = this.view.state,
							n = xr(this.view, e);
						return this.view.state == i && this.view.update([]), n;
					}
					readMutation(t) {
						let e = this.view.docView.nearest(t.target);
						if (!e || e.ignoreMutation(t)) return null;
						if (
							(e.markDirty("attributes" == t.type),
							"attributes" == t.type && (e.dirty |= 4),
							"childList" == t.type)
						) {
							let i = Xr(e, t.previousSibling || t.target.previousSibling, -1),
								n = Xr(e, t.nextSibling || t.target.nextSibling, 1);
							return {
								from: i ? e.posAfter(i) : e.posAtStart,
								to: n ? e.posBefore(n) : e.posAtEnd,
								typeOver: !1
							};
						}
						return "characterData" == t.type
							? {
									from: e.posAtStart,
									to: e.posAtEnd,
									typeOver: t.target.nodeValue == t.oldValue
							  }
							: null;
					}
					setWindow(t) {
						t != this.win &&
							(this.removeWindowListeners(this.win),
							(this.win = t),
							this.addWindowListeners(this.win));
					}
					addWindowListeners(t) {
						t.addEventListener("resize", this.onResize),
							t.addEventListener("beforeprint", this.onPrint),
							t.addEventListener("scroll", this.onScroll),
							t.document.addEventListener(
								"selectionchange",
								this.onSelectionChange
							);
					}
					removeWindowListeners(t) {
						t.removeEventListener("scroll", this.onScroll),
							t.removeEventListener("resize", this.onResize),
							t.removeEventListener("beforeprint", this.onPrint),
							t.document.removeEventListener(
								"selectionchange",
								this.onSelectionChange
							);
					}
					destroy() {
						var t, e, i, n;
						this.stop(),
							null === (t = this.intersection) ||
								void 0 === t ||
								t.disconnect(),
							null === (e = this.gapIntersection) ||
								void 0 === e ||
								e.disconnect(),
							null === (i = this.resizeScroll) ||
								void 0 === i ||
								i.disconnect(),
							null === (n = this.resizeContent) ||
								void 0 === n ||
								n.disconnect();
						for (let t of this.scrollTargets)
							t.removeEventListener("scroll", this.onScroll);
						this.removeWindowListeners(this.win),
							clearTimeout(this.parentCheck),
							clearTimeout(this.resizeTimeout),
							this.win.cancelAnimationFrame(this.delayedFlush),
							this.win.cancelAnimationFrame(this.flushingAndroidKey);
					}
				}
				function Xr(t, e, i) {
					for (; e; ) {
						let n = ve.get(e);
						if (n && n.parent == t) return n;
						let r = e.parentNode;
						e = r != t.dom ? r : i > 0 ? e.nextSibling : e.previousSibling;
					}
					return null;
				}
				class Zr {
					constructor(t = {}) {
						(this.plugins = []),
							(this.pluginMap = new Map()),
							(this.editorAttrs = {}),
							(this.contentAttrs = {}),
							(this.bidiCache = []),
							(this.destroyed = !1),
							(this.updateState = 2),
							(this.measureScheduled = -1),
							(this.measureRequests = []),
							(this.contentDOM = document.createElement("div")),
							(this.scrollDOM = document.createElement("div")),
							(this.scrollDOM.tabIndex = -1),
							(this.scrollDOM.className = "cm-scroller"),
							this.scrollDOM.appendChild(this.contentDOM),
							(this.announceDOM = document.createElement("div")),
							(this.announceDOM.style.cssText =
								"position: fixed; top: -10000px"),
							this.announceDOM.setAttribute("aria-live", "polite"),
							(this.dom = document.createElement("div")),
							this.dom.appendChild(this.announceDOM),
							this.dom.appendChild(this.scrollDOM),
							(this._dispatch = t.dispatch || ((t) => this.update([t]))),
							(this.dispatch = this.dispatch.bind(this)),
							(this._root =
								t.root ||
								(function (t) {
									for (; t; ) {
										if (t && (9 == t.nodeType || (11 == t.nodeType && t.host)))
											return t;
										t = t.assignedSlot || t.parentNode;
									}
									return null;
								})(t.parent) ||
								document),
							(this.viewState = new ar(t.state || vt.create(t))),
							(this.plugins = this.state.facet(xi).map((t) => new Pi(t)));
						for (let t of this.plugins) t.update(this);
						(this.observer = new kr(this)),
							(this.inputState = new mn(this)),
							this.inputState.ensureHandlers(this, this.plugins),
							(this.docView = new Ki(this)),
							this.mountStyles(),
							this.updateAttrs(),
							(this.updateState = 0),
							this.requestMeasure(),
							t.parent && t.parent.appendChild(this.dom);
					}
					get state() {
						return this.viewState.state;
					}
					get viewport() {
						return this.viewState.viewport;
					}
					get visibleRanges() {
						return this.viewState.visibleRanges;
					}
					get inView() {
						return this.viewState.inView;
					}
					get composing() {
						return this.inputState.composing > 0;
					}
					get compositionStarted() {
						return this.inputState.composing >= 0;
					}
					get root() {
						return this._root;
					}
					get win() {
						return this.dom.ownerDocument.defaultView || window;
					}
					dispatch(...t) {
						this._dispatch(
							1 == t.length && t[0] instanceof ct
								? t[0]
								: this.state.update(...t)
						);
					}
					update(t) {
						if (0 != this.updateState)
							throw new Error(
								"Calls to EditorView.update are not allowed while an update is in progress"
							);
						let e,
							i = !1,
							n = !1,
							r = this.state;
						for (let e of t) {
							if (e.startState != r)
								throw new RangeError(
									"Trying to update state with a transaction that doesn't start from the previous state."
								);
							r = e.state;
						}
						if (this.destroyed) return void (this.viewState.state = r);
						let s = this.hasFocus,
							o = 0,
							a = null;
						t.some((t) => t.annotation(Un))
							? ((this.inputState.notifiedFocused = s), (o = 1))
							: s != this.inputState.notifiedFocused &&
							  ((this.inputState.notifiedFocused = s),
							  (a = jn(r, s)),
							  a || (o = 1));
						let l = this.observer.delayedAndroidKey,
							h = null;
						if (
							(l
								? (this.observer.clearDelayedAndroidKey(),
								  (h = this.observer.readChange()),
								  ((h && !this.state.doc.eq(r.doc)) ||
										!this.state.selection.eq(r.selection)) &&
										(h = null))
								: this.observer.clear(),
							r.facet(vt.phrases) != this.state.facet(vt.phrases))
						)
							return this.setState(r);
						(e = Wi.create(this, r, t)), (e.flags |= o);
						let c = this.viewState.scrollTarget;
						try {
							this.updateState = 2;
							for (let e of t) {
								if ((c && (c = c.map(e.changes)), e.scrollIntoView)) {
									let { main: t } = e.state.selection;
									c = new Qi(
										t.empty ? t : W.cursor(t.head, t.head > t.anchor ? -1 : 1)
									);
								}
								for (let t of e.effects) t.is(vi) && (c = t.value);
							}
							this.viewState.update(e, c),
								(this.bidiCache = Ar.update(this.bidiCache, e.changes)),
								e.empty || (this.updatePlugins(e), this.inputState.update(e)),
								(i = this.docView.update(e)),
								this.state.facet(Ai) != this.styleModules && this.mountStyles(),
								(n = this.updateAttrs()),
								this.showAnnouncements(t),
								this.docView.updateSelection(
									i,
									t.some((t) => t.isUserEvent("select.pointer"))
								);
						} finally {
							this.updateState = 0;
						}
						if (
							(e.startState.facet(pr) != e.state.facet(pr) &&
								(this.viewState.mustMeasureContent = !0),
							(i ||
								n ||
								c ||
								this.viewState.mustEnforceCursorAssoc ||
								this.viewState.mustMeasureContent) &&
								this.requestMeasure(),
							!e.empty)
						)
							for (let t of this.state.facet(di)) t(e);
						(a || h) &&
							Promise.resolve().then(() => {
								a && this.state == a.startState && this.dispatch(a),
									h &&
										!xr(this, h) &&
										l.force &&
										ge(this.contentDOM, l.key, l.keyCode);
							});
					}
					setState(t) {
						if (0 != this.updateState)
							throw new Error(
								"Calls to EditorView.setState are not allowed while an update is in progress"
							);
						if (this.destroyed) return void (this.viewState.state = t);
						this.updateState = 2;
						let e = this.hasFocus;
						try {
							for (let t of this.plugins) t.destroy(this);
							(this.viewState = new ar(t)),
								(this.plugins = t.facet(xi).map((t) => new Pi(t))),
								this.pluginMap.clear();
							for (let t of this.plugins) t.update(this);
							(this.docView = new Ki(this)),
								this.inputState.ensureHandlers(this, this.plugins),
								this.mountStyles(),
								this.updateAttrs(),
								(this.bidiCache = []);
						} finally {
							this.updateState = 0;
						}
						e && this.focus(), this.requestMeasure();
					}
					updatePlugins(t) {
						let e = t.startState.facet(xi),
							i = t.state.facet(xi);
						if (e != i) {
							let n = [];
							for (let r of i) {
								let i = e.indexOf(r);
								if (i < 0) n.push(new Pi(r));
								else {
									let e = this.plugins[i];
									(e.mustUpdate = t), n.push(e);
								}
							}
							for (let e of this.plugins) e.mustUpdate != t && e.destroy(this);
							(this.plugins = n),
								this.pluginMap.clear(),
								this.inputState.ensureHandlers(this, this.plugins);
						} else for (let e of this.plugins) e.mustUpdate = t;
						for (let t = 0; t < this.plugins.length; t++)
							this.plugins[t].update(this);
					}
					measure(t = !0) {
						if (this.destroyed) return;
						this.measureScheduled > -1 &&
							cancelAnimationFrame(this.measureScheduled),
							(this.measureScheduled = 0),
							t && this.observer.forceFlush();
						let e = null,
							{
								scrollHeight: i,
								scrollTop: n,
								clientHeight: r
							} = this.scrollDOM,
							s = n > i - r - 4 ? i : n;
						try {
							for (let t = 0; ; t++) {
								this.updateState = 1;
								let i = this.viewport,
									n = this.viewState.lineBlockAtHeight(s),
									r = this.viewState.measure(this);
								if (
									!r &&
									!this.measureRequests.length &&
									null == this.viewState.scrollTarget
								)
									break;
								if (t > 5) {
									console.warn(
										this.measureRequests.length
											? "Measure loop restarted more than 5 times"
											: "Viewport failed to stabilize"
									);
									break;
								}
								let o = [];
								4 & r ||
									([this.measureRequests, o] = [o, this.measureRequests]);
								let a = o.map((t) => {
										try {
											return t.read(this);
										} catch (t) {
											return yi(this.state, t), Cr;
										}
									}),
									l = Wi.create(this, this.state, []),
									h = !1,
									c = !1;
								(l.flags |= r),
									e ? (e.flags |= r) : (e = l),
									(this.updateState = 2),
									l.empty ||
										(this.updatePlugins(l),
										this.inputState.update(l),
										this.updateAttrs(),
										(h = this.docView.update(l)));
								for (let t = 0; t < o.length; t++)
									if (a[t] != Cr)
										try {
											let e = o[t];
											e.write && e.write(a[t], this);
										} catch (t) {
											yi(this.state, t);
										}
								if (this.viewState.editorHeight)
									if (this.viewState.scrollTarget)
										this.docView.scrollIntoView(this.viewState.scrollTarget),
											(this.viewState.scrollTarget = null),
											(c = !0);
									else {
										let t = this.viewState.lineBlockAt(n.from).top - n.top;
										(t > 1 || t < -1) &&
											((this.scrollDOM.scrollTop += t), (c = !0));
									}
								if (
									(h && this.docView.updateSelection(!0),
									this.viewport.from == i.from &&
										this.viewport.to == i.to &&
										!c &&
										0 == this.measureRequests.length)
								)
									break;
							}
						} finally {
							(this.updateState = 0), (this.measureScheduled = -1);
						}
						if (e && !e.empty) for (let t of this.state.facet(di)) t(e);
					}
					get themeClasses() {
						return (
							mr +
							" " +
							(this.state.facet(gr) ? Qr : Sr) +
							" " +
							this.state.facet(pr)
						);
					}
					updateAttrs() {
						let t = Vr(this, ki, {
								class:
									"cm-editor" +
									(this.hasFocus ? " cm-focused " : " ") +
									this.themeClasses
							}),
							e = {
								spellcheck: "false",
								autocorrect: "off",
								autocapitalize: "off",
								translate: "no",
								contenteditable: this.state.facet(bi) ? "true" : "false",
								class: "cm-content",
								style: `${Re.tabSize}: ${this.state.tabSize}`,
								role: "textbox",
								"aria-multiline": "true"
							};
						this.state.readOnly && (e["aria-readonly"] = "true"),
							Vr(this, Xi, e);
						let i = this.observer.ignore(() => {
							let i = He(this.contentDOM, this.contentAttrs, e),
								n = He(this.dom, this.editorAttrs, t);
							return i || n;
						});
						return (this.editorAttrs = t), (this.contentAttrs = e), i;
					}
					showAnnouncements(t) {
						let e = !0;
						for (let i of t)
							for (let t of i.effects)
								t.is(Zr.announce) &&
									(e && (this.announceDOM.textContent = ""),
									(e = !1),
									(this.announceDOM.appendChild(
										document.createElement("div")
									).textContent = t.value));
					}
					mountStyles() {
						(this.styleModules = this.state.facet(Ai)),
							Et.mount(this.root, this.styleModules.concat(br).reverse());
					}
					readMeasured() {
						if (2 == this.updateState)
							throw new Error(
								"Reading the editor layout isn't allowed during an update"
							);
						0 == this.updateState &&
							this.measureScheduled > -1 &&
							this.measure(!1);
					}
					requestMeasure(t) {
						if (
							(this.measureScheduled < 0 &&
								(this.measureScheduled = this.win.requestAnimationFrame(() =>
									this.measure()
								)),
							t)
						) {
							if (this.measureRequests.indexOf(t) > -1) return;
							if (null != t.key)
								for (let e = 0; e < this.measureRequests.length; e++)
									if (this.measureRequests[e].key === t.key)
										return void (this.measureRequests[e] = t);
							this.measureRequests.push(t);
						}
					}
					plugin(t) {
						let e = this.pluginMap.get(t);
						return (
							(void 0 === e || (e && e.spec != t)) &&
								this.pluginMap.set(
									t,
									(e = this.plugins.find((e) => e.spec == t) || null)
								),
							e && e.update(this).value
						);
					}
					get documentTop() {
						return (
							this.contentDOM.getBoundingClientRect().top +
							this.viewState.paddingTop
						);
					}
					get documentPadding() {
						return {
							top: this.viewState.paddingTop,
							bottom: this.viewState.paddingBottom
						};
					}
					elementAtHeight(t) {
						return this.readMeasured(), this.viewState.elementAtHeight(t);
					}
					lineBlockAtHeight(t) {
						return this.readMeasured(), this.viewState.lineBlockAtHeight(t);
					}
					get viewportLineBlocks() {
						return this.viewState.viewportLines;
					}
					lineBlockAt(t) {
						return this.viewState.lineBlockAt(t);
					}
					get contentHeight() {
						return this.viewState.contentHeight;
					}
					moveByChar(t, e, i) {
						return gn(this, t, pn(this, t, e, i));
					}
					moveByGroup(t, e) {
						return gn(
							this,
							t,
							pn(this, t, e, (e) =>
								(function (t, e, i) {
									let n = t.state.charCategorizer(e),
										r = n(i);
									return (t) => {
										let e = n(t);
										return r == mt.Space && (r = e), r == e;
									};
								})(this, t.head, e)
							)
						);
					}
					moveToLineBoundary(t, e, i = !0) {
						return (function (t, e, i, n) {
							let r = t.state.doc.lineAt(e.head),
								s =
									n && t.lineWrapping
										? t.coordsAtPos(
												e.assoc < 0 && e.head > r.from ? e.head - 1 : e.head
										  )
										: null;
							if (s) {
								let e = t.dom.getBoundingClientRect(),
									n = t.textDirectionAt(r.from),
									o = t.posAtCoords({
										x: i == (n == Yi.LTR) ? e.right - 1 : e.left + 1,
										y: (s.top + s.bottom) / 2
									});
								if (null != o) return W.cursor(o, i ? -1 : 1);
							}
							let o = si.find(t.docView, e.head),
								a = o ? (i ? o.posAtEnd : o.posAtStart) : i ? r.to : r.from;
							return W.cursor(a, i ? -1 : 1);
						})(this, t, e, i);
					}
					moveVertically(t, e, i) {
						return gn(
							this,
							t,
							(function (t, e, i, n) {
								let r = e.head,
									s = i ? 1 : -1;
								if (r == (i ? t.state.doc.length : 0))
									return W.cursor(r, e.assoc);
								let o,
									a = e.goalColumn,
									l = t.contentDOM.getBoundingClientRect(),
									h = t.coordsAtPos(r),
									c = t.documentTop;
								if (h)
									null == a && (a = h.left - l.left),
										(o = s < 0 ? h.top : h.bottom);
								else {
									let e = t.viewState.lineBlockAt(r);
									null == a &&
										(a = Math.min(
											l.right - l.left,
											t.defaultCharacterWidth * (r - e.from)
										)),
										(o = (s < 0 ? e.top : e.bottom) + c);
								}
								let O = l.left + a,
									u = null != n ? n : t.defaultLineHeight >> 1;
								for (let i = 0; ; i += 10) {
									let n = o + (u + i) * s,
										h = fn(t, { x: O, y: n }, !1, s);
									if (n < l.top || n > l.bottom || (s < 0 ? h < r : h > r))
										return W.cursor(h, e.assoc, void 0, a);
								}
							})(this, t, e, i)
						);
					}
					domAtPos(t) {
						return this.docView.domAtPos(t);
					}
					posAtDOM(t, e = 0) {
						return this.docView.posFromDOM(t, e);
					}
					posAtCoords(t, e = !0) {
						return this.readMeasured(), fn(this, t, e);
					}
					coordsAtPos(t, e = 1) {
						this.readMeasured();
						let i = this.docView.coordsAt(t, e);
						if (!i || i.left == i.right) return i;
						let n = this.state.doc.lineAt(t),
							r = this.bidiSpans(n);
						return he(
							i,
							(r[Gi.find(r, t - n.from, -1, e)].dir == Yi.LTR) == e > 0
						);
					}
					get defaultCharacterWidth() {
						return this.viewState.heightOracle.charWidth;
					}
					get defaultLineHeight() {
						return this.viewState.heightOracle.lineHeight;
					}
					get textDirection() {
						return this.viewState.defaultTextDirection;
					}
					textDirectionAt(t) {
						return !this.state.facet(mi) ||
							t < this.viewport.from ||
							t > this.viewport.to
							? this.textDirection
							: (this.readMeasured(), this.docView.textDirectionAt(t));
					}
					get lineWrapping() {
						return this.viewState.heightOracle.lineWrapping;
					}
					bidiSpans(t) {
						if (t.length > Tr) return zi(t.length);
						let e = this.textDirectionAt(t.from);
						for (let i of this.bidiCache)
							if (i.from == t.from && i.dir == e) return i.order;
						let i = (function (t, e) {
							let i = t.length,
								n = e == Ri ? 1 : 2,
								r = e == Ri ? 2 : 1;
							if (!t || (1 == n && !Ei.test(t))) return zi(i);
							for (let e = 0, r = n, o = n; e < i; e++) {
								let i =
									(s = t.charCodeAt(e)) <= 247
										? qi[s]
										: 1424 <= s && s <= 1524
										? 2
										: 1536 <= s && s <= 1785
										? Ui[s - 1536]
										: 1774 <= s && s <= 2220
										? 4
										: 8192 <= s && s <= 8203
										? 256
										: 64336 <= s && s <= 65023
										? 4
										: 8204 == s
										? 256
										: 1;
								512 == i ? (i = r) : 8 == i && 4 == o && (i = 16),
									(Ii[e] = 4 == i ? 2 : i),
									7 & i && (o = i),
									(r = i);
							}
							var s;
							for (let t = 0, e = n, r = n; t < i; t++) {
								let n = Ii[t];
								if (128 == n)
									t < i - 1 && e == Ii[t + 1] && 24 & e
										? (n = Ii[t] = e)
										: (Ii[t] = 256);
								else if (64 == n) {
									let n = t + 1;
									for (; n < i && 64 == Ii[n]; ) n++;
									let s =
										(t && 8 == e) || (n < i && 8 == Ii[n])
											? 1 == r
												? 1
												: 8
											: 256;
									for (let e = t; e < n; e++) Ii[e] = s;
									t = n - 1;
								} else 8 == n && 1 == r && (Ii[t] = 1);
								(e = n), 7 & n && (r = n);
							}
							for (let e, s, o, a = 0, l = 0, h = 0; a < i; a++)
								if ((s = ji[(e = t.charCodeAt(a))]))
									if (s < 0) {
										for (let t = l - 3; t >= 0; t -= 3)
											if (Di[t + 1] == -s) {
												let e = Di[t + 2],
													i = 2 & e ? n : 4 & e ? (1 & e ? r : n) : 0;
												i && (Ii[a] = Ii[Di[t]] = i), (l = t);
												break;
											}
									} else {
										if (189 == Di.length) break;
										(Di[l++] = a), (Di[l++] = e), (Di[l++] = h);
									}
								else if (2 == (o = Ii[a]) || 1 == o) {
									let t = o == n;
									h = t ? 0 : 1;
									for (let e = l - 3; e >= 0; e -= 3) {
										let i = Di[e + 2];
										if (2 & i) break;
										if (t) Di[e + 2] |= 2;
										else {
											if (4 & i) break;
											Di[e + 2] |= 4;
										}
									}
								}
							for (let t = 0; t < i; t++)
								if (256 == Ii[t]) {
									let e = t + 1;
									for (; e < i && 256 == Ii[e]; ) e++;
									let r = 1 == (t ? Ii[t - 1] : n),
										s = r == (1 == (e < i ? Ii[e] : n)) ? (r ? 1 : 2) : n;
									for (let i = t; i < e; i++) Ii[i] = s;
									t = e - 1;
								}
							let o = [];
							if (1 == n)
								for (let t = 0; t < i; ) {
									let e = t,
										n = 1 != Ii[t++];
									for (; t < i && n == (1 != Ii[t]); ) t++;
									if (n)
										for (let i = t; i > e; ) {
											let t = i,
												n = 2 != Ii[--i];
											for (; i > e && n == (2 != Ii[i - 1]); ) i--;
											o.push(new Gi(i, t, n ? 2 : 1));
										}
									else o.push(new Gi(e, t, 0));
								}
							else
								for (let t = 0; t < i; ) {
									let e = t,
										n = 2 == Ii[t++];
									for (; t < i && n == (2 == Ii[t]); ) t++;
									o.push(new Gi(e, t, n ? 1 : 2));
								}
							return o;
						})(t.text, e);
						return this.bidiCache.push(new Ar(t.from, t.to, e, i)), i;
					}
					get hasFocus() {
						var t;
						return (
							(this.dom.ownerDocument.hasFocus() ||
								(Re.safari &&
									(null === (t = this.inputState) || void 0 === t
										? void 0
										: t.lastContextMenu) >
										Date.now() - 3e4)) &&
							this.root.activeElement == this.contentDOM
						);
					}
					focus() {
						this.observer.ignore(() => {
							de(this.contentDOM), this.docView.updateSelection();
						});
					}
					setRoot(t) {
						this._root != t &&
							((this._root = t),
							this.observer.setWindow(
								(9 == t.nodeType ? t : t.ownerDocument).defaultView || window
							),
							this.mountStyles());
					}
					destroy() {
						for (let t of this.plugins) t.destroy(this);
						(this.plugins = []),
							this.inputState.destroy(),
							this.dom.remove(),
							this.observer.destroy(),
							this.measureScheduled > -1 &&
								cancelAnimationFrame(this.measureScheduled),
							(this.destroyed = !0);
					}
					static scrollIntoView(t, e = {}) {
						return vi.of(
							new Qi(
								"number" == typeof t ? W.cursor(t) : t,
								e.y,
								e.x,
								e.yMargin,
								e.xMargin
							)
						);
					}
					static domEventHandlers(t) {
						return $i.define(() => ({}), { eventHandlers: t });
					}
					static theme(t, e) {
						let i = Et.newName(),
							n = [pr.of(i), Ai.of(yr(`.${i}`, t))];
						return e && e.dark && n.push(gr.of(!0)), n;
					}
					static baseTheme(t) {
						return z.lowest(Ai.of(yr("." + mr, t, vr)));
					}
					static findFromDOM(t) {
						var e;
						let i = t.querySelector(".cm-content"),
							n = (i && ve.get(i)) || ve.get(t);
						return (
							(null === (e = null == n ? void 0 : n.rootView) || void 0 === e
								? void 0
								: e.view) || null
						);
					}
				}
				(Zr.styleModule = Ai),
					(Zr.inputHandler = pi),
					(Zr.focusChangeEffect = gi),
					(Zr.perLineTextDirection = mi),
					(Zr.exceptionSink = fi),
					(Zr.updateListener = di),
					(Zr.editable = bi),
					(Zr.mouseSelectionStyle = ui),
					(Zr.dragMovesSelection = Oi),
					(Zr.clickAddsSelectionRange = ci),
					(Zr.decorations = Zi),
					(Zr.atomicRanges = Ti),
					(Zr.scrollMargins = Ci),
					(Zr.darkTheme = gr),
					(Zr.contentAttributes = Xi),
					(Zr.editorAttributes = ki),
					(Zr.lineWrapping = Zr.contentAttributes.of({
						class: "cm-lineWrapping"
					})),
					(Zr.announce = ht.define());
				const Tr = 4096,
					Cr = {};
				class Ar {
					constructor(t, e, i, n) {
						(this.from = t), (this.to = e), (this.dir = i), (this.order = n);
					}
					static update(t, e) {
						if (e.empty) return t;
						let i = [],
							n = t.length ? t[t.length - 1].dir : Yi.LTR;
						for (let r = Math.max(0, t.length - 10); r < t.length; r++) {
							let s = t[r];
							s.dir != n ||
								e.touchesRange(s.from, s.to) ||
								i.push(
									new Ar(
										e.mapPos(s.from, 1),
										e.mapPos(s.to, -1),
										s.dir,
										s.order
									)
								);
						}
						return i;
					}
				}
				function Vr(t, e, i) {
					for (let n = t.state.facet(e), r = n.length - 1; r >= 0; r--) {
						let e = n[r],
							s = "function" == typeof e ? e(t) : e;
						s && Ne(s, i);
					}
					return i;
				}
				const Wr = Re.mac
					? "mac"
					: Re.windows
					? "win"
					: Re.linux
					? "linux"
					: "key";
				function Yr(t, e, i) {
					return (
						e.altKey && (t = "Alt-" + t),
						e.ctrlKey && (t = "Ctrl-" + t),
						e.metaKey && (t = "Meta-" + t),
						!1 !== i && e.shiftKey && (t = "Shift-" + t),
						t
					);
				}
				const Rr = z.default(
						Zr.domEventHandlers({
							keydown: (t, e) =>
								(function (t, e, i, n) {
									let r = (function (t) {
											var e =
												(!(
													(Ft && (t.ctrlKey || t.altKey || t.metaKey)) ||
													(Ht && t.shiftKey && t.key && 1 == t.key.length) ||
													"Unidentified" == t.key
												) &&
													t.key) ||
												(t.shiftKey ? Bt : zt)[t.keyCode] ||
												t.key ||
												"Unidentified";
											return (
												"Esc" == e && (e = "Escape"),
												"Del" == e && (e = "Delete"),
												"Left" == e && (e = "ArrowLeft"),
												"Up" == e && (e = "ArrowUp"),
												"Right" == e && (e = "ArrowRight"),
												"Down" == e && (e = "ArrowDown"),
												e
											);
										})(e),
										s = b(y(r, 0)) == r.length && " " != r,
										o = "",
										a = !1;
									qr &&
										qr.view == i &&
										qr.scope == n &&
										((o = qr.prefix + " "),
										(a = vn.indexOf(e.keyCode) < 0) && (qr = null));
									let l,
										h,
										c = new Set(),
										O = (t) => {
											if (t) {
												for (let n of t.run)
													if (!c.has(n) && (c.add(n), n(i, e))) return !0;
												t.preventDefault && (a = !0);
											}
											return !1;
										},
										u = t[n];
									if (u) {
										if (O(u[o + Yr(r, e, !s)])) return !0;
										if (
											s &&
											(e.altKey || e.metaKey || e.ctrlKey) &&
											!(Re.windows && e.ctrlKey && e.altKey) &&
											(l = zt[e.keyCode]) &&
											l != r
										) {
											if (O(u[o + Yr(l, e, !0)])) return !0;
											if (
												e.shiftKey &&
												(h = Bt[e.keyCode]) != r &&
												h != l &&
												O(u[o + Yr(h, e, !1)])
											)
												return !0;
										} else if (s && e.shiftKey && O(u[o + Yr(r, e, !0)]))
											return !0;
										if (O(u._any)) return !0;
									}
									return a;
								})(
									(function (t) {
										let e = t.facet(_r),
											i = Mr.get(e);
										return (
											i ||
												Mr.set(
													e,
													(i = (function (t, e = Wr) {
														let i = Object.create(null),
															n = Object.create(null),
															r = (t, e) => {
																let i = n[t];
																if (null == i) n[t] = e;
																else if (i != e)
																	throw new Error(
																		"Key binding " +
																			t +
																			" is used both as a regular binding and as a multi-stroke prefix"
																	);
															},
															s = (t, n, s, o) => {
																var a, l;
																let h = i[t] || (i[t] = Object.create(null)),
																	c = n.split(/ (?!$)/).map((t) =>
																		(function (t, e) {
																			const i = t.split(/-(?!$)/);
																			let n,
																				r,
																				s,
																				o,
																				a = i[i.length - 1];
																			"Space" == a && (a = " ");
																			for (let t = 0; t < i.length - 1; ++t) {
																				const a = i[t];
																				if (/^(cmd|meta|m)$/i.test(a)) o = !0;
																				else if (/^a(lt)?$/i.test(a)) n = !0;
																				else if (/^(c|ctrl|control)$/i.test(a))
																					r = !0;
																				else if (/^s(hift)?$/i.test(a)) s = !0;
																				else {
																					if (!/^mod$/i.test(a))
																						throw new Error(
																							"Unrecognized modifier name: " + a
																						);
																					"mac" == e ? (o = !0) : (r = !0);
																				}
																			}
																			return (
																				n && (a = "Alt-" + a),
																				r && (a = "Ctrl-" + a),
																				o && (a = "Meta-" + a),
																				s && (a = "Shift-" + a),
																				a
																			);
																		})(t, e)
																	);
																for (let e = 1; e < c.length; e++) {
																	let i = c.slice(0, e).join(" ");
																	r(i, !0),
																		h[i] ||
																			(h[i] = {
																				preventDefault: !0,
																				run: [
																					(e) => {
																						let n = (qr = {
																							view: e,
																							prefix: i,
																							scope: t
																						});
																						return (
																							setTimeout(() => {
																								qr == n && (qr = null);
																							}, Ur),
																							!0
																						);
																					}
																				]
																			});
																}
																let O = c.join(" ");
																r(O, !1);
																let u =
																	h[O] ||
																	(h[O] = {
																		preventDefault: !1,
																		run:
																			(null ===
																				(l =
																					null === (a = h._any) || void 0 === a
																						? void 0
																						: a.run) || void 0 === l
																				? void 0
																				: l.slice()) || []
																	});
																s && u.run.push(s),
																	o && (u.preventDefault = !0);
															};
														for (let n of t) {
															let t = n.scope ? n.scope.split(" ") : ["editor"];
															if (n.any)
																for (let e of t) {
																	let t = i[e] || (i[e] = Object.create(null));
																	t._any ||
																		(t._any = { preventDefault: !1, run: [] });
																	for (let e in t) t[e].run.push(n.any);
																}
															let r = n[e] || n.key;
															if (r)
																for (let e of t)
																	s(e, r, n.run, n.preventDefault),
																		n.shift &&
																			s(
																				e,
																				"Shift-" + r,
																				n.shift,
																				n.preventDefault
																			);
														}
														return i;
													})(e.reduce((t, e) => t.concat(e), [])))
												),
											i
										);
									})(e.state),
									t,
									e,
									"editor"
								)
						})
					),
					_r = _.define({ enables: Rr }),
					Mr = new WeakMap();
				let qr = null;
				const Ur = 4e3;
				class jr {
					constructor(t, e, i, n, r) {
						(this.className = t),
							(this.left = e),
							(this.top = i),
							(this.width = n),
							(this.height = r);
					}
					draw() {
						let t = document.createElement("div");
						return (t.className = this.className), this.adjust(t), t;
					}
					update(t, e) {
						return e.className == this.className && (this.adjust(t), !0);
					}
					adjust(t) {
						(t.style.left = this.left + "px"),
							(t.style.top = this.top + "px"),
							null != this.width && (t.style.width = this.width + "px"),
							(t.style.height = this.height + "px");
					}
					eq(t) {
						return (
							this.left == t.left &&
							this.top == t.top &&
							this.width == t.width &&
							this.height == t.height &&
							this.className == t.className
						);
					}
					static forRange(t, e, i) {
						if (i.empty) {
							let n = t.coordsAtPos(i.head, i.assoc || 1);
							if (!n) return [];
							let r = Dr(t);
							return [
								new jr(
									e,
									n.left - r.left,
									n.top - r.top,
									null,
									n.bottom - n.top
								)
							];
						}
						return (function (t, e, i) {
							if (i.to <= t.viewport.from || i.from >= t.viewport.to) return [];
							let n = Math.max(i.from, t.viewport.from),
								r = Math.min(i.to, t.viewport.to),
								s = t.textDirection == Yi.LTR,
								o = t.contentDOM,
								a = o.getBoundingClientRect(),
								l = Dr(t),
								h = window.getComputedStyle(o.firstChild),
								c =
									a.left +
									parseInt(h.paddingLeft) +
									Math.min(0, parseInt(h.textIndent)),
								O = a.right - parseInt(h.paddingRight),
								u = Gr(t, n),
								f = Gr(t, r),
								d = u.type == Je.Text ? u : null,
								p = f.type == Je.Text ? f : null;
							if (
								(t.lineWrapping &&
									(d && (d = Er(t, n, d)), p && (p = Er(t, r, p))),
								d && p && d.from == p.from)
							)
								return m(S(i.from, i.to, d));
							{
								let e = d ? S(i.from, null, d) : Q(u, !1),
									n = p ? S(null, i.to, p) : Q(f, !0),
									r = [];
								return (
									(d || u).to < (p || f).from - 1
										? r.push(g(c, e.bottom, O, n.top))
										: e.bottom < n.top &&
										  t.elementAtHeight((e.bottom + n.top) / 2).type ==
												Je.Text &&
										  (e.bottom = n.top = (e.bottom + n.top) / 2),
									m(e).concat(r).concat(m(n))
								);
							}
							function g(t, i, n, r) {
								return new jr(
									e,
									t - l.left,
									i - l.top - 0.01,
									n - t,
									r - i + 0.01
								);
							}
							function m({ top: t, bottom: e, horizontal: i }) {
								let n = [];
								for (let r = 0; r < i.length; r += 2)
									n.push(g(i[r], t, i[r + 1], e));
								return n;
							}
							function S(e, i, n) {
								let r = 1e9,
									o = -1e9,
									a = [];
								function l(e, i, l, h, u) {
									let f = t.coordsAtPos(e, e == n.to ? -2 : 2),
										d = t.coordsAtPos(l, l == n.from ? 2 : -2);
									(r = Math.min(f.top, d.top, r)),
										(o = Math.max(f.bottom, d.bottom, o)),
										u == Yi.LTR
											? a.push(s && i ? c : f.left, s && h ? O : d.right)
											: a.push(!s && h ? c : d.left, !s && i ? O : f.right);
								}
								let h = null != e ? e : n.from,
									u = null != i ? i : n.to;
								for (let n of t.visibleRanges)
									if (n.to > h && n.from < u)
										for (
											let r = Math.max(n.from, h), s = Math.min(n.to, u);
											;

										) {
											let n = t.state.doc.lineAt(r);
											for (let o of t.bidiSpans(n)) {
												let t = o.from + n.from,
													a = o.to + n.from;
												if (t >= s) break;
												a > r &&
													l(
														Math.max(t, r),
														null == e && t <= h,
														Math.min(a, s),
														null == i && a >= u,
														o.dir
													);
											}
											if (((r = n.to + 1), r >= s)) break;
										}
								return (
									0 == a.length &&
										l(h, null == e, u, null == i, t.textDirection),
									{ top: r, bottom: o, horizontal: a }
								);
							}
							function Q(t, e) {
								let i = a.top + (e ? t.top : t.bottom);
								return { top: i, bottom: i, horizontal: [] };
							}
						})(t, e, i);
					}
				}
				function Dr(t) {
					let e = t.scrollDOM.getBoundingClientRect();
					return {
						left:
							(t.textDirection == Yi.LTR
								? e.left
								: e.right - t.scrollDOM.clientWidth) - t.scrollDOM.scrollLeft,
						top: e.top - t.scrollDOM.scrollTop
					};
				}
				function Er(t, e, i) {
					let n = W.cursor(e);
					return {
						from: Math.max(i.from, t.moveToLineBoundary(n, !1, !0).from),
						to: Math.min(i.to, t.moveToLineBoundary(n, !0, !0).from),
						type: Je.Text
					};
				}
				function Gr(t, e) {
					let i = t.lineBlockAt(e);
					if (Array.isArray(i.type))
						for (let t of i.type)
							if (
								t.to > e ||
								(t.to == e && (t.to == i.to || t.type == Je.Text))
							)
								return t;
					return i;
				}
				class Ir {
					constructor(t, e) {
						(this.view = t),
							(this.layer = e),
							(this.drawn = []),
							(this.measureReq = {
								read: this.measure.bind(this),
								write: this.draw.bind(this)
							}),
							(this.dom = t.scrollDOM.appendChild(
								document.createElement("div")
							)),
							this.dom.classList.add("cm-layer"),
							e.above && this.dom.classList.add("cm-layer-above"),
							e.class && this.dom.classList.add(e.class),
							this.dom.setAttribute("aria-hidden", "true"),
							this.setOrder(t.state),
							t.requestMeasure(this.measureReq),
							e.mount && e.mount(this.dom, t);
					}
					update(t) {
						t.startState.facet(zr) != t.state.facet(zr) &&
							this.setOrder(t.state),
							(this.layer.update(t, this.dom) || t.geometryChanged) &&
								t.view.requestMeasure(this.measureReq);
					}
					setOrder(t) {
						let e = 0,
							i = t.facet(zr);
						for (; e < i.length && i[e] != this.layer; ) e++;
						this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - e);
					}
					measure() {
						return this.layer.markers(this.view);
					}
					draw(t) {
						if (
							t.length != this.drawn.length ||
							t.some((t, e) => {
								return (
									(i = t),
									(n = this.drawn[e]),
									!(i.constructor == n.constructor && i.eq(n))
								);
								var i, n;
							})
						) {
							let e = this.dom.firstChild,
								i = 0;
							for (let n of t)
								n.update &&
								e &&
								n.constructor &&
								this.drawn[i].constructor &&
								n.update(e, this.drawn[i])
									? ((e = e.nextSibling), i++)
									: this.dom.insertBefore(n.draw(), e);
							for (; e; ) {
								let t = e.nextSibling;
								e.remove(), (e = t);
							}
							this.drawn = t;
						}
					}
					destroy() {
						this.layer.destroy && this.layer.destroy(this.dom, this.view),
							this.dom.remove();
					}
				}
				const zr = _.define();
				function Br(t) {
					return [$i.define((e) => new Ir(e, t)), zr.of(t)];
				}
				const Nr = !Re.ios,
					Lr = _.define({
						combine: (t) =>
							yt(
								t,
								{ cursorBlinkRate: 1200, drawRangeCursor: !0 },
								{
									cursorBlinkRate: (t, e) => Math.min(t, e),
									drawRangeCursor: (t, e) => t || e
								}
							)
					});
				function Hr(t) {
					return t.startState.facet(Lr) != t.state.facet(Lr);
				}
				const Fr = Br({
					above: !0,
					markers(t) {
						let { state: e } = t,
							i = e.facet(Lr),
							n = [];
						for (let r of e.selection.ranges) {
							let s = r == e.selection.main;
							if (r.empty ? !s || Nr : i.drawRangeCursor) {
								let e = s
										? "cm-cursor cm-cursor-primary"
										: "cm-cursor cm-cursor-secondary",
									i = r.empty
										? r
										: W.cursor(r.head, r.head > r.anchor ? -1 : 1);
								for (let r of jr.forRange(t, e, i)) n.push(r);
							}
						}
						return n;
					},
					update(t, e) {
						t.transactions.some((t) => t.selection) &&
							(e.style.animationName =
								"cm-blink" == e.style.animationName ? "cm-blink2" : "cm-blink");
						let i = Hr(t);
						return i && Jr(t.state, e), t.docChanged || t.selectionSet || i;
					},
					mount(t, e) {
						Jr(e.state, t);
					},
					class: "cm-cursorLayer"
				});
				function Jr(t, e) {
					e.style.animationDuration = t.facet(Lr).cursorBlinkRate + "ms";
				}
				const Kr = Br({
						above: !1,
						markers: (t) =>
							t.state.selection.ranges
								.map((e) =>
									e.empty ? [] : jr.forRange(t, "cm-selectionBackground", e)
								)
								.reduce((t, e) => t.concat(e)),
						update: (t, e) =>
							t.docChanged || t.selectionSet || t.viewportChanged || Hr(t),
						class: "cm-selectionLayer"
					}),
					ts = {
						".cm-line": {
							"& ::selection": { backgroundColor: "transparent !important" },
							"&::selection": { backgroundColor: "transparent !important" }
						}
					};
				Nr && (ts[".cm-line"].caretColor = "transparent !important");
				const es = z.highest(Zr.theme(ts)),
					is = ht.define({ map: (t, e) => (null == t ? null : e.mapPos(t)) }),
					ns = G.define({
						create: () => null,
						update: (t, e) => (
							null != t && (t = e.changes.mapPos(t)),
							e.effects.reduce((t, e) => (e.is(is) ? e.value : t), t)
						)
					}),
					rs = $i.fromClass(
						class {
							constructor(t) {
								(this.view = t),
									(this.cursor = null),
									(this.measureReq = {
										read: this.readPos.bind(this),
										write: this.drawCursor.bind(this)
									});
							}
							update(t) {
								var e;
								let i = t.state.field(ns);
								null == i
									? null != this.cursor &&
									  (null === (e = this.cursor) || void 0 === e || e.remove(),
									  (this.cursor = null))
									: (this.cursor ||
											((this.cursor = this.view.scrollDOM.appendChild(
												document.createElement("div")
											)),
											(this.cursor.className = "cm-dropCursor")),
									  (t.startState.field(ns) != i ||
											t.docChanged ||
											t.geometryChanged) &&
											this.view.requestMeasure(this.measureReq));
							}
							readPos() {
								let t = this.view.state.field(ns),
									e = null != t && this.view.coordsAtPos(t);
								if (!e) return null;
								let i = this.view.scrollDOM.getBoundingClientRect();
								return {
									left: e.left - i.left + this.view.scrollDOM.scrollLeft,
									top: e.top - i.top + this.view.scrollDOM.scrollTop,
									height: e.bottom - e.top
								};
							}
							drawCursor(t) {
								this.cursor &&
									(t
										? ((this.cursor.style.left = t.left + "px"),
										  (this.cursor.style.top = t.top + "px"),
										  (this.cursor.style.height = t.height + "px"))
										: (this.cursor.style.left = "-100000px"));
							}
							destroy() {
								this.cursor && this.cursor.remove();
							}
							setDropPos(t) {
								this.view.state.field(ns) != t &&
									this.view.dispatch({ effects: is.of(t) });
							}
						},
						{
							eventHandlers: {
								dragover(t) {
									this.setDropPos(
										this.view.posAtCoords({ x: t.clientX, y: t.clientY })
									);
								},
								dragleave(t) {
									(t.target != this.view.contentDOM &&
										this.view.contentDOM.contains(t.relatedTarget)) ||
										this.setDropPos(null);
								},
								dragend() {
									this.setDropPos(null);
								},
								drop() {
									this.setDropPos(null);
								}
							}
						}
					);
				function ss(t, e, i, n, r) {
					e.lastIndex = 0;
					for (
						let s, o = t.iterRange(i, n), a = i;
						!o.next().done;
						a += o.value.length
					)
						if (!o.lineBreak) for (; (s = e.exec(o.value)); ) r(a + s.index, s);
				}
				class os {
					constructor(t) {
						const {
							regexp: e,
							decoration: i,
							decorate: n,
							boundary: r,
							maxLength: s = 1e3
						} = t;
						if (!e.global)
							throw new RangeError(
								"The regular expression given to MatchDecorator should have its 'g' flag set"
							);
						if (((this.regexp = e), n))
							this.addMatch = (t, e, i, r) => n(r, i, i + t[0].length, t, e);
						else if ("function" == typeof i)
							this.addMatch = (t, e, n, r) => {
								let s = i(t, e, n);
								s && r(n, n + t[0].length, s);
							};
						else {
							if (!i)
								throw new RangeError(
									"Either 'decorate' or 'decoration' should be provided to MatchDecorator"
								);
							this.addMatch = (t, e, n, r) => r(n, n + t[0].length, i);
						}
						(this.boundary = r), (this.maxLength = s);
					}
					createDeco(t) {
						let e = new kt(),
							i = e.add.bind(e);
						for (let { from: e, to: n } of (function (t, e) {
							let i = t.visibleRanges;
							if (
								1 == i.length &&
								i[0].from == t.viewport.from &&
								i[0].to == t.viewport.to
							)
								return i;
							let n = [];
							for (let { from: r, to: s } of i)
								(r = Math.max(t.state.doc.lineAt(r).from, r - e)),
									(s = Math.min(t.state.doc.lineAt(s).to, s + e)),
									n.length && n[n.length - 1].to >= r
										? (n[n.length - 1].to = s)
										: n.push({ from: r, to: s });
							return n;
						})(t, this.maxLength))
							ss(t.state.doc, this.regexp, e, n, (e, n) =>
								this.addMatch(n, t, e, i)
							);
						return e.finish();
					}
					updateDeco(t, e) {
						let i = 1e9,
							n = -1;
						return (
							t.docChanged &&
								t.changes.iterChanges((e, r, s, o) => {
									o > t.view.viewport.from &&
										s < t.view.viewport.to &&
										((i = Math.min(s, i)), (n = Math.max(o, n)));
								}),
							t.viewportChanged || n - i > 1e3
								? this.createDeco(t.view)
								: n > -1
								? this.updateRange(t.view, e.map(t.changes), i, n)
								: e
						);
					}
					updateRange(t, e, i, n) {
						for (let r of t.visibleRanges) {
							let s = Math.max(r.from, i),
								o = Math.min(r.to, n);
							if (o > s) {
								let i = t.state.doc.lineAt(s),
									n = i.to < o ? t.state.doc.lineAt(o) : i,
									a = Math.max(r.from, i.from),
									l = Math.min(r.to, n.to);
								if (this.boundary) {
									for (; s > i.from; s--)
										if (this.boundary.test(i.text[s - 1 - i.from])) {
											a = s;
											break;
										}
									for (; o < n.to; o++)
										if (this.boundary.test(n.text[o - n.from])) {
											l = o;
											break;
										}
								}
								let h,
									c = [],
									O = (t, e, i) => c.push(i.range(t, e));
								if (i == n)
									for (
										this.regexp.lastIndex = a - i.from;
										(h = this.regexp.exec(i.text)) && h.index < l - i.from;

									)
										this.addMatch(h, t, h.index + i.from, O);
								else
									ss(t.state.doc, this.regexp, a, l, (e, i) =>
										this.addMatch(i, t, e, O)
									);
								e = e.update({
									filterFrom: a,
									filterTo: l,
									filter: (t, e) => t < a || e > l,
									add: c
								});
							}
						}
						return e;
					}
				}
				const as = null != /x/.unicode ? "gu" : "g",
					ls = new RegExp("[\0-\b\n--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩\ufeff￹-￼]", as),
					hs = {
						0: "null",
						7: "bell",
						8: "backspace",
						10: "newline",
						11: "vertical tab",
						13: "carriage return",
						27: "escape",
						8203: "zero width space",
						8204: "zero width non-joiner",
						8205: "zero width joiner",
						8206: "left-to-right mark",
						8207: "right-to-left mark",
						8232: "line separator",
						8237: "left-to-right override",
						8238: "right-to-left override",
						8294: "left-to-right isolate",
						8295: "right-to-left isolate",
						8297: "pop directional isolate",
						8233: "paragraph separator",
						65279: "zero width no-break space",
						65532: "object replacement"
					};
				let cs = null;
				const Os = _.define({
					combine(t) {
						let e = yt(t, {
							render: null,
							specialChars: ls,
							addSpecialChars: null
						});
						return (
							(e.replaceTabs = !(function () {
								var t;
								if (
									null == cs &&
									"undefined" != typeof document &&
									document.body
								) {
									let e = document.body.style;
									cs =
										null !=
										(null !== (t = e.tabSize) && void 0 !== t
											? t
											: e.MozTabSize);
								}
								return cs || !1;
							})()) &&
								(e.specialChars = new RegExp(
									"\t|" + e.specialChars.source,
									as
								)),
							e.addSpecialChars &&
								(e.specialChars = new RegExp(
									e.specialChars.source + "|" + e.addSpecialChars.source,
									as
								)),
							e
						);
					}
				});
				let us = null;
				class fs extends Fe {
					constructor(t, e) {
						super(), (this.options = t), (this.code = e);
					}
					eq(t) {
						return t.code == this.code;
					}
					toDOM(t) {
						let e = (function (t) {
								return t >= 32
									? "•"
									: 10 == t
									? "␤"
									: String.fromCharCode(9216 + t);
							})(this.code),
							i =
								t.state.phrase("Control character") +
								" " +
								(hs[this.code] || "0x" + this.code.toString(16)),
							n = this.options.render && this.options.render(this.code, i, e);
						if (n) return n;
						let r = document.createElement("span");
						return (
							(r.textContent = e),
							(r.title = i),
							r.setAttribute("aria-label", i),
							(r.className = "cm-specialChar"),
							r
						);
					}
					ignoreEvent() {
						return !1;
					}
				}
				class ds extends Fe {
					constructor(t) {
						super(), (this.width = t);
					}
					eq(t) {
						return t.width == this.width;
					}
					toDOM() {
						let t = document.createElement("span");
						return (
							(t.textContent = "\t"),
							(t.className = "cm-tab"),
							(t.style.width = this.width + "px"),
							t
						);
					}
					ignoreEvent() {
						return !1;
					}
				}
				const ps = 2e3;
				function gs(t, e) {
					let i = t.posAtCoords({ x: e.clientX, y: e.clientY }, !1),
						n = t.state.doc.lineAt(i),
						r = i - n.from,
						s =
							r > ps
								? -1
								: r == n.length
								? (function (t, e) {
										let i = t.coordsAtPos(t.viewport.from);
										return i
											? Math.round(
													Math.abs((i.left - e) / t.defaultCharacterWidth)
											  )
											: -1;
								  })(t, e.clientX)
								: Mt(n.text, t.state.tabSize, i - n.from);
					return { line: n.number, col: s, off: r };
				}
				const ms = {
						Alt: [18, (t) => t.altKey],
						Control: [17, (t) => t.ctrlKey],
						Shift: [16, (t) => t.shiftKey],
						Meta: [91, (t) => t.metaKey]
					},
					Ss = { style: "cursor: crosshair" },
					Qs = "-10000px";
				class vs {
					constructor(t, e, i) {
						(this.facet = e),
							(this.createTooltipView = i),
							(this.input = t.state.facet(e)),
							(this.tooltips = this.input.filter((t) => t)),
							(this.tooltipViews = this.tooltips.map(i));
					}
					update(t) {
						var e;
						let i = t.state.facet(this.facet),
							n = i.filter((t) => t);
						if (i === this.input) {
							for (let e of this.tooltipViews) e.update && e.update(t);
							return !1;
						}
						let r = [];
						for (let e = 0; e < n.length; e++) {
							let i = n[e],
								s = -1;
							if (i) {
								for (let t = 0; t < this.tooltips.length; t++) {
									let e = this.tooltips[t];
									e && e.create == i.create && (s = t);
								}
								if (s < 0) r[e] = this.createTooltipView(i);
								else {
									let i = (r[e] = this.tooltipViews[s]);
									i.update && i.update(t);
								}
							}
						}
						for (let t of this.tooltipViews)
							r.indexOf(t) < 0 &&
								(t.dom.remove(),
								null === (e = t.destroy) || void 0 === e || e.call(t));
						return (
							(this.input = i), (this.tooltips = n), (this.tooltipViews = r), !0
						);
					}
				}
				function ys(t) {
					let { win: e } = t;
					return {
						top: 0,
						left: 0,
						bottom: e.innerHeight,
						right: e.innerWidth
					};
				}
				const bs = _.define({
						combine: (t) => {
							var e, i, n;
							return {
								position: Re.ios
									? "absolute"
									: (null === (e = t.find((t) => t.position)) || void 0 === e
											? void 0
											: e.position) || "fixed",
								parent:
									(null === (i = t.find((t) => t.parent)) || void 0 === i
										? void 0
										: i.parent) || null,
								tooltipSpace:
									(null === (n = t.find((t) => t.tooltipSpace)) || void 0 === n
										? void 0
										: n.tooltipSpace) || ys
							};
						}
					}),
					ws = new WeakMap(),
					xs = $i.fromClass(
						class {
							constructor(t) {
								(this.view = t),
									(this.inView = !0),
									(this.lastTransaction = 0),
									(this.measureTimeout = -1);
								let e = t.state.facet(bs);
								(this.position = e.position),
									(this.parent = e.parent),
									(this.classes = t.themeClasses),
									this.createContainer(),
									(this.measureReq = {
										read: this.readMeasure.bind(this),
										write: this.writeMeasure.bind(this),
										key: this
									}),
									(this.manager = new vs(t, ks, (t) => this.createTooltip(t))),
									(this.intersectionObserver =
										"function" == typeof IntersectionObserver
											? new IntersectionObserver(
													(t) => {
														Date.now() > this.lastTransaction - 50 &&
															t.length > 0 &&
															t[t.length - 1].intersectionRatio < 1 &&
															this.measureSoon();
													},
													{ threshold: [1] }
											  )
											: null),
									this.observeIntersection(),
									t.win.addEventListener(
										"resize",
										(this.measureSoon = this.measureSoon.bind(this))
									),
									this.maybeMeasure();
							}
							createContainer() {
								this.parent
									? ((this.container = document.createElement("div")),
									  (this.container.style.position = "relative"),
									  (this.container.className = this.view.themeClasses),
									  this.parent.appendChild(this.container))
									: (this.container = this.view.dom);
							}
							observeIntersection() {
								if (this.intersectionObserver) {
									this.intersectionObserver.disconnect();
									for (let t of this.manager.tooltipViews)
										this.intersectionObserver.observe(t.dom);
								}
							}
							measureSoon() {
								this.measureTimeout < 0 &&
									(this.measureTimeout = setTimeout(() => {
										(this.measureTimeout = -1), this.maybeMeasure();
									}, 50));
							}
							update(t) {
								t.transactions.length && (this.lastTransaction = Date.now());
								let e = this.manager.update(t);
								e && this.observeIntersection();
								let i = e || t.geometryChanged,
									n = t.state.facet(bs);
								if (n.position != this.position) {
									this.position = n.position;
									for (let t of this.manager.tooltipViews)
										t.dom.style.position = this.position;
									i = !0;
								}
								if (n.parent != this.parent) {
									this.parent && this.container.remove(),
										(this.parent = n.parent),
										this.createContainer();
									for (let t of this.manager.tooltipViews)
										this.container.appendChild(t.dom);
									i = !0;
								} else
									this.parent &&
										this.view.themeClasses != this.classes &&
										(this.classes = this.container.className =
											this.view.themeClasses);
								i && this.maybeMeasure();
							}
							createTooltip(t) {
								let e = t.create(this.view);
								if (
									(e.dom.classList.add("cm-tooltip"),
									t.arrow &&
										!e.dom.querySelector(".cm-tooltip > .cm-tooltip-arrow"))
								) {
									let t = document.createElement("div");
									(t.className = "cm-tooltip-arrow"), e.dom.appendChild(t);
								}
								return (
									(e.dom.style.position = this.position),
									(e.dom.style.top = Qs),
									this.container.appendChild(e.dom),
									e.mount && e.mount(this.view),
									e
								);
							}
							destroy() {
								var t, e;
								this.view.win.removeEventListener("resize", this.measureSoon);
								for (let e of this.manager.tooltipViews)
									e.dom.remove(),
										null === (t = e.destroy) || void 0 === t || t.call(e);
								null === (e = this.intersectionObserver) ||
									void 0 === e ||
									e.disconnect(),
									clearTimeout(this.measureTimeout);
							}
							readMeasure() {
								let t = this.view.dom.getBoundingClientRect();
								return {
									editor: t,
									parent: this.parent
										? this.container.getBoundingClientRect()
										: t,
									pos: this.manager.tooltips.map((t, e) => {
										let i = this.manager.tooltipViews[e];
										return i.getCoords
											? i.getCoords(t.pos)
											: this.view.coordsAtPos(t.pos);
									}),
									size: this.manager.tooltipViews.map(({ dom: t }) =>
										t.getBoundingClientRect()
									),
									space: this.view.state.facet(bs).tooltipSpace(this.view)
								};
							}
							writeMeasure(t) {
								var e;
								let { editor: i, space: n } = t,
									r = [];
								for (let s = 0; s < this.manager.tooltips.length; s++) {
									let o = this.manager.tooltips[s],
										a = this.manager.tooltipViews[s],
										{ dom: l } = a,
										h = t.pos[s],
										c = t.size[s];
									if (
										!h ||
										h.bottom <= Math.max(i.top, n.top) ||
										h.top >= Math.min(i.bottom, n.bottom) ||
										h.right < Math.max(i.left, n.left) - 0.1 ||
										h.left > Math.min(i.right, n.right) + 0.1
									) {
										l.style.top = Qs;
										continue;
									}
									let O = o.arrow
											? a.dom.querySelector(".cm-tooltip-arrow")
											: null,
										u = O ? 7 : 0,
										f = c.right - c.left,
										d =
											null !== (e = ws.get(a)) && void 0 !== e
												? e
												: c.bottom - c.top,
										p = a.offset || Ps,
										g = this.view.textDirection == Yi.LTR,
										m =
											c.width > n.right - n.left
												? g
													? n.left
													: n.right - c.width
												: g
												? Math.min(h.left - (O ? 14 : 0) + p.x, n.right - f)
												: Math.max(n.left, h.left - f + (O ? 14 : 0) - p.x),
										S = !!o.above;
									!o.strictSide &&
										(S
											? h.top - (c.bottom - c.top) - p.y < n.top
											: h.bottom + (c.bottom - c.top) + p.y > n.bottom) &&
										S == n.bottom - h.bottom > h.top - n.top &&
										(S = !S);
									let Q = (S ? h.top - n.top : n.bottom - h.bottom) - u;
									if (Q < d && !1 !== a.resize) {
										if (Q < this.view.defaultLineHeight) {
											l.style.top = Qs;
											continue;
										}
										ws.set(a, d), (l.style.height = (d = Q) + "px");
									} else l.style.height && (l.style.height = "");
									let v = S ? h.top - d - u - p.y : h.bottom + u + p.y,
										y = m + f;
									if (!0 !== a.overlap)
										for (let t of r)
											t.left < y &&
												t.right > m &&
												t.top < v + d &&
												t.bottom > v &&
												(v = S ? t.top - d - 2 - u : t.bottom + u + 2);
									"absolute" == this.position
										? ((l.style.top = v - t.parent.top + "px"),
										  (l.style.left = m - t.parent.left + "px"))
										: ((l.style.top = v + "px"), (l.style.left = m + "px")),
										O &&
											(O.style.left =
												h.left + (g ? p.x : -p.x) - (m + 14 - 7) + "px"),
										!0 !== a.overlap &&
											r.push({ left: m, top: v, right: y, bottom: v + d }),
										l.classList.toggle("cm-tooltip-above", S),
										l.classList.toggle("cm-tooltip-below", !S),
										a.positioned && a.positioned(t.space);
								}
							}
							maybeMeasure() {
								if (
									this.manager.tooltips.length &&
									(this.view.inView &&
										this.view.requestMeasure(this.measureReq),
									this.inView != this.view.inView &&
										((this.inView = this.view.inView), !this.inView))
								)
									for (let t of this.manager.tooltipViews) t.dom.style.top = Qs;
							}
						},
						{
							eventHandlers: {
								scroll() {
									this.maybeMeasure();
								}
							}
						}
					),
					$s = Zr.baseTheme({
						".cm-tooltip": { zIndex: 100, boxSizing: "border-box" },
						"&light .cm-tooltip": {
							border: "1px solid #bbb",
							backgroundColor: "#f5f5f5"
						},
						"&light .cm-tooltip-section:not(:first-child)": {
							borderTop: "1px solid #bbb"
						},
						"&dark .cm-tooltip": { backgroundColor: "#333338", color: "white" },
						".cm-tooltip-arrow": {
							height: "7px",
							width: "14px",
							position: "absolute",
							zIndex: -1,
							overflow: "hidden",
							"&:before, &:after": {
								content: "''",
								position: "absolute",
								width: 0,
								height: 0,
								borderLeft: "7px solid transparent",
								borderRight: "7px solid transparent"
							},
							".cm-tooltip-above &": {
								bottom: "-7px",
								"&:before": { borderTop: "7px solid #bbb" },
								"&:after": { borderTop: "7px solid #f5f5f5", bottom: "1px" }
							},
							".cm-tooltip-below &": {
								top: "-7px",
								"&:before": { borderBottom: "7px solid #bbb" },
								"&:after": { borderBottom: "7px solid #f5f5f5", top: "1px" }
							}
						},
						"&dark .cm-tooltip .cm-tooltip-arrow": {
							"&:before": {
								borderTopColor: "#333338",
								borderBottomColor: "#333338"
							},
							"&:after": {
								borderTopColor: "transparent",
								borderBottomColor: "transparent"
							}
						}
					}),
					Ps = { x: 0, y: 0 },
					ks = _.define({ enables: [xs, $s] }),
					Xs = _.define();
				class Zs {
					constructor(t) {
						(this.view = t),
							(this.mounted = !1),
							(this.dom = document.createElement("div")),
							this.dom.classList.add("cm-tooltip-hover"),
							(this.manager = new vs(t, Xs, (t) => this.createHostedView(t)));
					}
					static create(t) {
						return new Zs(t);
					}
					createHostedView(t) {
						let e = t.create(this.view);
						return (
							e.dom.classList.add("cm-tooltip-section"),
							this.dom.appendChild(e.dom),
							this.mounted && e.mount && e.mount(this.view),
							e
						);
					}
					mount(t) {
						for (let e of this.manager.tooltipViews) e.mount && e.mount(t);
						this.mounted = !0;
					}
					positioned(t) {
						for (let e of this.manager.tooltipViews)
							e.positioned && e.positioned(t);
					}
					update(t) {
						this.manager.update(t);
					}
				}
				const Ts = ks.compute([Xs], (t) => {
					let e = t.facet(Xs).filter((t) => t);
					return 0 === e.length
						? null
						: {
								pos: Math.min(...e.map((t) => t.pos)),
								end: Math.max(
									...e.filter((t) => null != t.end).map((t) => t.end)
								),
								create: Zs.create,
								above: e[0].above,
								arrow: e.some((t) => t.arrow)
						  };
				});
				class Cs {
					constructor(t, e, i, n, r) {
						(this.view = t),
							(this.source = e),
							(this.field = i),
							(this.setHover = n),
							(this.hoverTime = r),
							(this.hoverTimeout = -1),
							(this.restartTimeout = -1),
							(this.pending = null),
							(this.lastMove = { x: 0, y: 0, target: t.dom, time: 0 }),
							(this.checkHover = this.checkHover.bind(this)),
							t.dom.addEventListener(
								"mouseleave",
								(this.mouseleave = this.mouseleave.bind(this))
							),
							t.dom.addEventListener(
								"mousemove",
								(this.mousemove = this.mousemove.bind(this))
							);
					}
					update() {
						this.pending &&
							((this.pending = null),
							clearTimeout(this.restartTimeout),
							(this.restartTimeout = setTimeout(() => this.startHover(), 20)));
					}
					get active() {
						return this.view.state.field(this.field);
					}
					checkHover() {
						if (((this.hoverTimeout = -1), this.active)) return;
						let t = Date.now() - this.lastMove.time;
						t < this.hoverTime
							? (this.hoverTimeout = setTimeout(
									this.checkHover,
									this.hoverTime - t
							  ))
							: this.startHover();
					}
					startHover() {
						clearTimeout(this.restartTimeout);
						let { lastMove: t } = this,
							e = this.view.contentDOM.contains(t.target)
								? this.view.posAtCoords(t)
								: null;
						if (null == e) return;
						let i = this.view.coordsAtPos(e);
						if (
							null == i ||
							t.y < i.top ||
							t.y > i.bottom ||
							t.x < i.left - this.view.defaultCharacterWidth ||
							t.x > i.right + this.view.defaultCharacterWidth
						)
							return;
						let n = this.view
								.bidiSpans(this.view.state.doc.lineAt(e))
								.find((t) => t.from <= e && t.to >= e),
							r = n && n.dir == Yi.RTL ? -1 : 1,
							s = this.source(this.view, e, t.x < i.left ? -r : r);
						if (null == s ? void 0 : s.then) {
							let t = (this.pending = { pos: e });
							s.then(
								(e) => {
									this.pending == t &&
										((this.pending = null),
										e && this.view.dispatch({ effects: this.setHover.of(e) }));
								},
								(t) => yi(this.view.state, t, "hover tooltip")
							);
						} else s && this.view.dispatch({ effects: this.setHover.of(s) });
					}
					mousemove(t) {
						var e;
						(this.lastMove = {
							x: t.clientX,
							y: t.clientY,
							target: t.target,
							time: Date.now()
						}),
							this.hoverTimeout < 0 &&
								(this.hoverTimeout = setTimeout(
									this.checkHover,
									this.hoverTime
								));
						let i = this.active;
						if ((i && !As(this.lastMove.target)) || this.pending) {
							let { pos: n } = i || this.pending,
								r =
									null !== (e = null == i ? void 0 : i.end) && void 0 !== e
										? e
										: n;
							(n == r
								? this.view.posAtCoords(this.lastMove) == n
								: (function (t, e, i, n, r, s) {
										let o = document.createRange(),
											a = t.domAtPos(e),
											l = t.domAtPos(i);
										o.setEnd(l.node, l.offset), o.setStart(a.node, a.offset);
										let h = o.getClientRects();
										o.detach();
										for (let t = 0; t < h.length; t++) {
											let e = h[t];
											if (
												Math.max(
													e.top - r,
													r - e.bottom,
													e.left - n,
													n - e.right
												) <= 6
											)
												return !0;
										}
										return !1;
								  })(this.view, n, r, t.clientX, t.clientY)) ||
								(this.view.dispatch({ effects: this.setHover.of(null) }),
								(this.pending = null));
						}
					}
					mouseleave(t) {
						clearTimeout(this.hoverTimeout),
							(this.hoverTimeout = -1),
							this.active &&
								!As(t.relatedTarget) &&
								this.view.dispatch({ effects: this.setHover.of(null) });
					}
					destroy() {
						clearTimeout(this.hoverTimeout),
							this.view.dom.removeEventListener("mouseleave", this.mouseleave),
							this.view.dom.removeEventListener("mousemove", this.mousemove);
					}
				}
				function As(t) {
					for (let e = t; e; e = e.parentNode)
						if (1 == e.nodeType && e.classList.contains("cm-tooltip"))
							return !0;
					return !1;
				}
				function Vs(t, e = {}) {
					let i = ht.define(),
						n = G.define({
							create: () => null,
							update(t, n) {
								if (
									t &&
									((e.hideOnChange && (n.docChanged || n.selection)) ||
										(e.hideOn && e.hideOn(n, t)))
								)
									return null;
								if (t && n.docChanged) {
									let e = n.changes.mapPos(t.pos, -1, x.TrackDel);
									if (null == e) return null;
									let i = Object.assign(Object.create(null), t);
									(i.pos = e),
										null != t.end && (i.end = n.changes.mapPos(t.end)),
										(t = i);
								}
								for (let e of n.effects)
									e.is(i) && (t = e.value), e.is(Ws) && (t = null);
								return t;
							},
							provide: (t) => Xs.from(t)
						});
					return [
						n,
						$i.define((r) => new Cs(r, t, n, i, e.hoverTime || 300)),
						Ts
					];
				}
				const Ws = ht.define(),
					Ys = _.define({
						combine(t) {
							let e, i;
							for (let n of t)
								(e = e || n.topContainer), (i = i || n.bottomContainer);
							return { topContainer: e, bottomContainer: i };
						}
					}),
					Rs = $i.fromClass(
						class {
							constructor(t) {
								(this.input = t.state.facet(qs)),
									(this.specs = this.input.filter((t) => t)),
									(this.panels = this.specs.map((e) => e(t)));
								let e = t.state.facet(Ys);
								(this.top = new _s(t, !0, e.topContainer)),
									(this.bottom = new _s(t, !1, e.bottomContainer)),
									this.top.sync(this.panels.filter((t) => t.top)),
									this.bottom.sync(this.panels.filter((t) => !t.top));
								for (let t of this.panels)
									t.dom.classList.add("cm-panel"), t.mount && t.mount();
							}
							update(t) {
								let e = t.state.facet(Ys);
								this.top.container != e.topContainer &&
									(this.top.sync([]),
									(this.top = new _s(t.view, !0, e.topContainer))),
									this.bottom.container != e.bottomContainer &&
										(this.bottom.sync([]),
										(this.bottom = new _s(t.view, !1, e.bottomContainer))),
									this.top.syncClasses(),
									this.bottom.syncClasses();
								let i = t.state.facet(qs);
								if (i != this.input) {
									let e = i.filter((t) => t),
										n = [],
										r = [],
										s = [],
										o = [];
									for (let i of e) {
										let e,
											a = this.specs.indexOf(i);
										a < 0
											? ((e = i(t.view)), o.push(e))
											: ((e = this.panels[a]), e.update && e.update(t)),
											n.push(e),
											(e.top ? r : s).push(e);
									}
									(this.specs = e),
										(this.panels = n),
										this.top.sync(r),
										this.bottom.sync(s);
									for (let t of o)
										t.dom.classList.add("cm-panel"), t.mount && t.mount();
								} else for (let e of this.panels) e.update && e.update(t);
							}
							destroy() {
								this.top.sync([]), this.bottom.sync([]);
							}
						},
						{
							provide: (t) =>
								Zr.scrollMargins.of((e) => {
									let i = e.plugin(t);
									return (
										i && {
											top: i.top.scrollMargin(),
											bottom: i.bottom.scrollMargin()
										}
									);
								})
						}
					);
				class _s {
					constructor(t, e, i) {
						(this.view = t),
							(this.top = e),
							(this.container = i),
							(this.dom = void 0),
							(this.classes = ""),
							(this.panels = []),
							this.syncClasses();
					}
					sync(t) {
						for (let e of this.panels)
							e.destroy && t.indexOf(e) < 0 && e.destroy();
						(this.panels = t), this.syncDOM();
					}
					syncDOM() {
						if (0 == this.panels.length)
							return void (
								this.dom && (this.dom.remove(), (this.dom = void 0))
							);
						if (!this.dom) {
							(this.dom = document.createElement("div")),
								(this.dom.className = this.top
									? "cm-panels cm-panels-top"
									: "cm-panels cm-panels-bottom"),
								(this.dom.style[this.top ? "top" : "bottom"] = "0");
							let t = this.container || this.view.dom;
							t.insertBefore(this.dom, this.top ? t.firstChild : null);
						}
						let t = this.dom.firstChild;
						for (let e of this.panels)
							if (e.dom.parentNode == this.dom) {
								for (; t != e.dom; ) t = Ms(t);
								t = t.nextSibling;
							} else this.dom.insertBefore(e.dom, t);
						for (; t; ) t = Ms(t);
					}
					scrollMargin() {
						return !this.dom || this.container
							? 0
							: Math.max(
									0,
									this.top
										? this.dom.getBoundingClientRect().bottom -
												Math.max(
													0,
													this.view.scrollDOM.getBoundingClientRect().top
												)
										: Math.min(
												innerHeight,
												this.view.scrollDOM.getBoundingClientRect().bottom
										  ) - this.dom.getBoundingClientRect().top
							  );
					}
					syncClasses() {
						if (this.container && this.classes != this.view.themeClasses) {
							for (let t of this.classes.split(" "))
								t && this.container.classList.remove(t);
							for (let t of (this.classes = this.view.themeClasses).split(" "))
								t && this.container.classList.add(t);
						}
					}
				}
				function Ms(t) {
					let e = t.nextSibling;
					return t.remove(), e;
				}
				const qs = _.define({ enables: Rs });
				class Us extends bt {
					compare(t) {
						return (
							this == t || (this.constructor == t.constructor && this.eq(t))
						);
					}
					eq(t) {
						return !1;
					}
					destroy(t) {}
				}
				(Us.prototype.elementClass = ""),
					(Us.prototype.toDOM = void 0),
					(Us.prototype.mapMode = x.TrackBefore),
					(Us.prototype.startSide = Us.prototype.endSide = -1),
					(Us.prototype.point = !0);
				const js = _.define(),
					Ds = {
						class: "",
						renderEmptyElements: !1,
						elementStyle: "",
						markers: () => Pt.empty,
						lineMarker: () => null,
						lineMarkerChange: null,
						initialSpacer: null,
						updateSpacer: null,
						domEventHandlers: {}
					},
					Es = _.define();
				const Gs = _.define({ combine: (t) => t.some((t) => t) });
				function Is(t) {
					let e = [zs];
					return t && !1 === t.fixed && e.push(Gs.of(!0)), e;
				}
				const zs = $i.fromClass(
					class {
						constructor(t) {
							(this.view = t),
								(this.prevViewport = t.viewport),
								(this.dom = document.createElement("div")),
								(this.dom.className = "cm-gutters"),
								this.dom.setAttribute("aria-hidden", "true"),
								(this.dom.style.minHeight = this.view.contentHeight + "px"),
								(this.gutters = t.state.facet(Es).map((e) => new Hs(t, e)));
							for (let t of this.gutters) this.dom.appendChild(t.dom);
							(this.fixed = !t.state.facet(Gs)),
								this.fixed && (this.dom.style.position = "sticky"),
								this.syncGutters(!1),
								t.scrollDOM.insertBefore(this.dom, t.contentDOM);
						}
						update(t) {
							if (this.updateGutters(t)) {
								let e = this.prevViewport,
									i = t.view.viewport,
									n = Math.min(e.to, i.to) - Math.max(e.from, i.from);
								this.syncGutters(n < 0.8 * (i.to - i.from));
							}
							t.geometryChanged &&
								(this.dom.style.minHeight = this.view.contentHeight + "px"),
								this.view.state.facet(Gs) != !this.fixed &&
									((this.fixed = !this.fixed),
									(this.dom.style.position = this.fixed ? "sticky" : "")),
								(this.prevViewport = t.view.viewport);
						}
						syncGutters(t) {
							let e = this.dom.nextSibling;
							t && this.dom.remove();
							let i = Pt.iter(
									this.view.state.facet(js),
									this.view.viewport.from
								),
								n = [],
								r = this.gutters.map(
									(t) =>
										new Ls(
											t,
											this.view.viewport,
											-this.view.documentPadding.top
										)
								);
							for (let t of this.view.viewportLineBlocks) {
								let e;
								if (Array.isArray(t.type)) {
									for (let i of t.type)
										if (i.type == Je.Text) {
											e = i;
											break;
										}
								} else e = t.type == Je.Text ? t : void 0;
								if (e) {
									n.length && (n = []), Ns(i, n, t.from);
									for (let t of r) t.line(this.view, e, n);
								}
							}
							for (let t of r) t.finish();
							t && this.view.scrollDOM.insertBefore(this.dom, e);
						}
						updateGutters(t) {
							let e = t.startState.facet(Es),
								i = t.state.facet(Es),
								n =
									t.docChanged ||
									t.heightChanged ||
									t.viewportChanged ||
									!Pt.eq(
										t.startState.facet(js),
										t.state.facet(js),
										t.view.viewport.from,
										t.view.viewport.to
									);
							if (e == i) for (let e of this.gutters) e.update(t) && (n = !0);
							else {
								n = !0;
								let r = [];
								for (let n of i) {
									let i = e.indexOf(n);
									i < 0
										? r.push(new Hs(this.view, n))
										: (this.gutters[i].update(t), r.push(this.gutters[i]));
								}
								for (let t of this.gutters)
									t.dom.remove(), r.indexOf(t) < 0 && t.destroy();
								for (let t of r) this.dom.appendChild(t.dom);
								this.gutters = r;
							}
							return n;
						}
						destroy() {
							for (let t of this.gutters) t.destroy();
							this.dom.remove();
						}
					},
					{
						provide: (t) =>
							Zr.scrollMargins.of((e) => {
								let i = e.plugin(t);
								return i && 0 != i.gutters.length && i.fixed
									? e.textDirection == Yi.LTR
										? { left: i.dom.offsetWidth }
										: { right: i.dom.offsetWidth }
									: null;
							})
					}
				);
				function Bs(t) {
					return Array.isArray(t) ? t : [t];
				}
				function Ns(t, e, i) {
					for (; t.value && t.from <= i; )
						t.from == i && e.push(t.value), t.next();
				}
				class Ls {
					constructor(t, e, i) {
						(this.gutter = t),
							(this.height = i),
							(this.i = 0),
							(this.cursor = Pt.iter(t.markers, e.from));
					}
					line(t, e, i) {
						let n = [];
						Ns(this.cursor, n, e.from), i.length && (n = n.concat(i));
						let r = this.gutter.config.lineMarker(t, e, n);
						r && n.unshift(r);
						let s = this.gutter;
						if (0 == n.length && !s.config.renderEmptyElements) return;
						let o = e.top - this.height;
						if (this.i == s.elements.length) {
							let i = new Fs(t, e.height, o, n);
							s.elements.push(i), s.dom.appendChild(i.dom);
						} else s.elements[this.i].update(t, e.height, o, n);
						(this.height = e.bottom), this.i++;
					}
					finish() {
						let t = this.gutter;
						for (; t.elements.length > this.i; ) {
							let e = t.elements.pop();
							t.dom.removeChild(e.dom), e.destroy();
						}
					}
				}
				class Hs {
					constructor(t, e) {
						(this.view = t),
							(this.config = e),
							(this.elements = []),
							(this.spacer = null),
							(this.dom = document.createElement("div")),
							(this.dom.className =
								"cm-gutter" +
								(this.config.class ? " " + this.config.class : ""));
						for (let i in e.domEventHandlers)
							this.dom.addEventListener(i, (n) => {
								let r,
									s = n.target;
								if (s != this.dom && this.dom.contains(s)) {
									for (; s.parentNode != this.dom; ) s = s.parentNode;
									let t = s.getBoundingClientRect();
									r = (t.top + t.bottom) / 2;
								} else r = n.clientY;
								let o = t.lineBlockAtHeight(r - t.documentTop);
								e.domEventHandlers[i](t, o, n) && n.preventDefault();
							});
						(this.markers = Bs(e.markers(t))),
							e.initialSpacer &&
								((this.spacer = new Fs(t, 0, 0, [e.initialSpacer(t)])),
								this.dom.appendChild(this.spacer.dom),
								(this.spacer.dom.style.cssText +=
									"visibility: hidden; pointer-events: none"));
					}
					update(t) {
						let e = this.markers;
						if (
							((this.markers = Bs(this.config.markers(t.view))),
							this.spacer && this.config.updateSpacer)
						) {
							let e = this.config.updateSpacer(this.spacer.markers[0], t);
							e != this.spacer.markers[0] &&
								this.spacer.update(t.view, 0, 0, [e]);
						}
						let i = t.view.viewport;
						return (
							!Pt.eq(this.markers, e, i.from, i.to) ||
							(!!this.config.lineMarkerChange &&
								this.config.lineMarkerChange(t))
						);
					}
					destroy() {
						for (let t of this.elements) t.destroy();
					}
				}
				class Fs {
					constructor(t, e, i, n) {
						(this.height = -1),
							(this.above = 0),
							(this.markers = []),
							(this.dom = document.createElement("div")),
							(this.dom.className = "cm-gutterElement"),
							this.update(t, e, i, n);
					}
					update(t, e, i, n) {
						this.height != e &&
							(this.dom.style.height = (this.height = e) + "px"),
							this.above != i &&
								(this.dom.style.marginTop = (this.above = i) ? i + "px" : ""),
							(function (t, e) {
								if (t.length != e.length) return !1;
								for (let i = 0; i < t.length; i++)
									if (!t[i].compare(e[i])) return !1;
								return !0;
							})(this.markers, n) || this.setMarkers(t, n);
					}
					setMarkers(t, e) {
						let i = "cm-gutterElement",
							n = this.dom.firstChild;
						for (let r = 0, s = 0; ; ) {
							let o = s,
								a = r < e.length ? e[r++] : null,
								l = !1;
							if (a) {
								let t = a.elementClass;
								t && (i += " " + t);
								for (let t = s; t < this.markers.length; t++)
									if (this.markers[t].compare(a)) {
										(o = t), (l = !0);
										break;
									}
							} else o = this.markers.length;
							for (; s < o; ) {
								let t = this.markers[s++];
								if (t.toDOM) {
									t.destroy(n);
									let e = n.nextSibling;
									n.remove(), (n = e);
								}
							}
							if (!a) break;
							a.toDOM &&
								(l
									? (n = n.nextSibling)
									: this.dom.insertBefore(a.toDOM(t), n)),
								l && s++;
						}
						(this.dom.className = i), (this.markers = e);
					}
					destroy() {
						this.setMarkers(null, []);
					}
				}
				const Js = _.define(),
					Ks = _.define({
						combine: (t) =>
							yt(
								t,
								{ formatNumber: String, domEventHandlers: {} },
								{
									domEventHandlers(t, e) {
										let i = Object.assign({}, t);
										for (let t in e) {
											let n = i[t],
												r = e[t];
											i[t] = n ? (t, e, i) => n(t, e, i) || r(t, e, i) : r;
										}
										return i;
									}
								}
							)
					});
				class to extends Us {
					constructor(t) {
						super(), (this.number = t);
					}
					eq(t) {
						return this.number == t.number;
					}
					toDOM() {
						return document.createTextNode(this.number);
					}
				}
				function eo(t, e) {
					return t.state.facet(Ks).formatNumber(e, t.state);
				}
				const io = Es.compute([Ks], (t) => ({
					class: "cm-lineNumbers",
					renderEmptyElements: !1,
					markers: (t) => t.state.facet(Js),
					lineMarker: (t, e, i) =>
						i.some((t) => t.toDOM)
							? null
							: new to(eo(t, t.state.doc.lineAt(e.from).number)),
					lineMarkerChange: (t) => t.startState.facet(Ks) != t.state.facet(Ks),
					initialSpacer: (t) => new to(eo(t, no(t.state.doc.lines))),
					updateSpacer(t, e) {
						let i = eo(e.view, no(e.view.state.doc.lines));
						return i == t.number ? t : new to(i);
					},
					domEventHandlers: t.facet(Ks).domEventHandlers
				}));
				function no(t) {
					let e = 9;
					for (; e < t; ) e = 10 * e + 9;
					return e;
				}
				const ro = 1024;
				let so = 0;
				class oo {
					constructor(t, e) {
						(this.from = t), (this.to = e);
					}
				}
				class ao {
					constructor(t = {}) {
						(this.id = so++),
							(this.perNode = !!t.perNode),
							(this.deserialize =
								t.deserialize ||
								(() => {
									throw new Error(
										"This node type doesn't define a deserialize function"
									);
								}));
					}
					add(t) {
						if (this.perNode)
							throw new RangeError("Can't add per-node props to node types");
						return (
							"function" != typeof t && (t = co.match(t)),
							(e) => {
								let i = t(e);
								return void 0 === i ? null : [this, i];
							}
						);
					}
				}
				(ao.closedBy = new ao({ deserialize: (t) => t.split(" ") })),
					(ao.openedBy = new ao({ deserialize: (t) => t.split(" ") })),
					(ao.group = new ao({ deserialize: (t) => t.split(" ") })),
					(ao.contextHash = new ao({ perNode: !0 })),
					(ao.lookAhead = new ao({ perNode: !0 })),
					(ao.mounted = new ao({ perNode: !0 }));
				class lo {
					constructor(t, e, i) {
						(this.tree = t), (this.overlay = e), (this.parser = i);
					}
				}
				const ho = Object.create(null);
				class co {
					constructor(t, e, i, n = 0) {
						(this.name = t), (this.props = e), (this.id = i), (this.flags = n);
					}
					static define(t) {
						let e = t.props && t.props.length ? Object.create(null) : ho,
							i =
								(t.top ? 1 : 0) |
								(t.skipped ? 2 : 0) |
								(t.error ? 4 : 0) |
								(null == t.name ? 8 : 0),
							n = new co(t.name || "", e, t.id, i);
						if (t.props)
							for (let i of t.props)
								if ((Array.isArray(i) || (i = i(n)), i)) {
									if (i[0].perNode)
										throw new RangeError(
											"Can't store a per-node prop on a node type"
										);
									e[i[0].id] = i[1];
								}
						return n;
					}
					prop(t) {
						return this.props[t.id];
					}
					get isTop() {
						return (1 & this.flags) > 0;
					}
					get isSkipped() {
						return (2 & this.flags) > 0;
					}
					get isError() {
						return (4 & this.flags) > 0;
					}
					get isAnonymous() {
						return (8 & this.flags) > 0;
					}
					is(t) {
						if ("string" == typeof t) {
							if (this.name == t) return !0;
							let e = this.prop(ao.group);
							return !!e && e.indexOf(t) > -1;
						}
						return this.id == t;
					}
					static match(t) {
						let e = Object.create(null);
						for (let i in t) for (let n of i.split(" ")) e[n] = t[i];
						return (t) => {
							for (
								let i = t.prop(ao.group), n = -1;
								n < (i ? i.length : 0);
								n++
							) {
								let r = e[n < 0 ? t.name : i[n]];
								if (r) return r;
							}
						};
					}
				}
				co.none = new co("", Object.create(null), 0, 8);
				class Oo {
					constructor(t) {
						this.types = t;
						for (let e = 0; e < t.length; e++)
							if (t[e].id != e)
								throw new RangeError(
									"Node type ids should correspond to array positions when creating a node set"
								);
					}
					extend(...t) {
						let e = [];
						for (let i of this.types) {
							let n = null;
							for (let e of t) {
								let t = e(i);
								t &&
									(n || (n = Object.assign({}, i.props)), (n[t[0].id] = t[1]));
							}
							e.push(n ? new co(i.name, n, i.id, i.flags) : i);
						}
						return new Oo(e);
					}
				}
				const uo = new WeakMap(),
					fo = new WeakMap();
				var po;
				!(function (t) {
					(t[(t.ExcludeBuffers = 1)] = "ExcludeBuffers"),
						(t[(t.IncludeAnonymous = 2)] = "IncludeAnonymous"),
						(t[(t.IgnoreMounts = 4)] = "IgnoreMounts"),
						(t[(t.IgnoreOverlays = 8)] = "IgnoreOverlays");
				})(po || (po = {}));
				class go {
					constructor(t, e, i, n, r) {
						if (
							((this.type = t),
							(this.children = e),
							(this.positions = i),
							(this.length = n),
							(this.props = null),
							r && r.length)
						) {
							this.props = Object.create(null);
							for (let [t, e] of r)
								this.props["number" == typeof t ? t : t.id] = e;
						}
					}
					toString() {
						let t = this.prop(ao.mounted);
						if (t && !t.overlay) return t.tree.toString();
						let e = "";
						for (let t of this.children) {
							let i = t.toString();
							i && (e && (e += ","), (e += i));
						}
						return this.type.name
							? (/\W/.test(this.type.name) && !this.type.isError
									? JSON.stringify(this.type.name)
									: this.type.name) + (e.length ? "(" + e + ")" : "")
							: e;
					}
					cursor(t = 0) {
						return new ko(this.topNode, t);
					}
					cursorAt(t, e = 0, i = 0) {
						let n = uo.get(this) || this.topNode,
							r = new ko(n);
						return r.moveTo(t, e), uo.set(this, r._tree), r;
					}
					get topNode() {
						return new bo(this, 0, 0, null);
					}
					resolve(t, e = 0) {
						let i = yo(uo.get(this) || this.topNode, t, e, !1);
						return uo.set(this, i), i;
					}
					resolveInner(t, e = 0) {
						let i = yo(fo.get(this) || this.topNode, t, e, !0);
						return fo.set(this, i), i;
					}
					iterate(t) {
						let { enter: e, leave: i, from: n = 0, to: r = this.length } = t;
						for (let s = this.cursor((t.mode || 0) | po.IncludeAnonymous); ; ) {
							let t = !1;
							if (
								s.from <= r &&
								s.to >= n &&
								(s.type.isAnonymous || !1 !== e(s))
							) {
								if (s.firstChild()) continue;
								t = !0;
							}
							for (
								;
								t && i && !s.type.isAnonymous && i(s), !s.nextSibling();

							) {
								if (!s.parent()) return;
								t = !0;
							}
						}
					}
					prop(t) {
						return t.perNode
							? this.props
								? this.props[t.id]
								: void 0
							: this.type.prop(t);
					}
					get propValues() {
						let t = [];
						if (this.props)
							for (let e in this.props) t.push([+e, this.props[e]]);
						return t;
					}
					balance(t = {}) {
						return this.children.length <= 8
							? this
							: Co(
									co.none,
									this.children,
									this.positions,
									0,
									this.children.length,
									0,
									this.length,
									(t, e, i) => new go(this.type, t, e, i, this.propValues),
									t.makeTree || ((t, e, i) => new go(co.none, t, e, i))
							  );
					}
					static build(t) {
						return (function (t) {
							var e;
							let {
									buffer: i,
									nodeSet: n,
									maxBufferLength: r = ro,
									reused: s = [],
									minRepeatType: o = n.types.length
								} = t,
								a = Array.isArray(i) ? new mo(i, i.length) : i,
								l = n.types,
								h = 0,
								c = 0;
							function O(t, e, i, p, g) {
								let { id: m, start: S, end: Q, size: v } = a,
									y = c;
								for (; v < 0; ) {
									if ((a.next(), -1 == v)) {
										let e = s[m];
										return i.push(e), void p.push(S - t);
									}
									if (-3 == v) return void (h = m);
									if (-4 == v) return void (c = m);
									throw new RangeError(`Unrecognized record size: ${v}`);
								}
								let b,
									w,
									x = l[m],
									$ = S - t;
								if (
									Q - S <= r &&
									(w = (function (t, e) {
										let i = a.fork(),
											n = 0,
											s = 0,
											l = 0,
											h = i.end - r,
											c = { size: 0, start: 0, skip: 0 };
										t: for (let r = i.pos - t; i.pos > r; ) {
											let t = i.size;
											if (i.id == e && t >= 0) {
												(c.size = n),
													(c.start = s),
													(c.skip = l),
													(l += 4),
													(n += 4),
													i.next();
												continue;
											}
											let a = i.pos - t;
											if (t < 0 || a < r || i.start < h) break;
											let O = i.id >= o ? 4 : 0,
												u = i.start;
											for (i.next(); i.pos > a; ) {
												if (i.size < 0) {
													if (-3 != i.size) break t;
													O += 4;
												} else i.id >= o && (O += 4);
												i.next();
											}
											(s = u), (n += t), (l += O);
										}
										return (
											(e < 0 || n == t) &&
												((c.size = n), (c.start = s), (c.skip = l)),
											c.size > 4 ? c : void 0
										);
									})(a.pos - e, g))
								) {
									let e = new Uint16Array(w.size - w.skip),
										i = a.pos - w.size,
										r = e.length;
									for (; a.pos > i; ) r = d(w.start, e, r);
									(b = new So(e, Q - w.start, n)), ($ = w.start - t);
								} else {
									let t = a.pos - v;
									a.next();
									let e = [],
										i = [],
										n = m >= o ? m : -1,
										s = 0,
										l = Q;
									for (; a.pos > t; )
										n >= 0 && a.id == n && a.size >= 0
											? (a.end <= l - r &&
													(u(e, i, S, s, a.end, l, n, y),
													(s = e.length),
													(l = a.end)),
											  a.next())
											: O(S, t, e, i, n);
									if (
										(n >= 0 &&
											s > 0 &&
											s < e.length &&
											u(e, i, S, s, S, l, n, y),
										e.reverse(),
										i.reverse(),
										n > -1 && s > 0)
									) {
										let t = (function (t) {
											return (e, i, n) => {
												let r,
													s,
													o = 0,
													a = e.length - 1;
												if (a >= 0 && (r = e[a]) instanceof go) {
													if (!a && r.type == t && r.length == n) return r;
													(s = r.prop(ao.lookAhead)) &&
														(o = i[a] + r.length + s);
												}
												return f(t, e, i, n, o);
											};
										})(x);
										b = Co(x, e, i, 0, e.length, 0, Q - S, t, t);
									} else b = f(x, e, i, Q - S, y - Q);
								}
								i.push(b), p.push($);
							}
							function u(t, e, i, r, s, o, a, l) {
								let h = [],
									c = [];
								for (; t.length > r; ) h.push(t.pop()), c.push(e.pop() + i - s);
								t.push(f(n.types[a], h, c, o - s, l - o)), e.push(s - i);
							}
							function f(t, e, i, n, r = 0, s) {
								if (h) {
									let t = [ao.contextHash, h];
									s = s ? [t].concat(s) : [t];
								}
								if (r > 25) {
									let t = [ao.lookAhead, r];
									s = s ? [t].concat(s) : [t];
								}
								return new go(t, e, i, n, s);
							}
							function d(t, e, i) {
								let { id: n, start: r, end: s, size: l } = a;
								if ((a.next(), l >= 0 && n < o)) {
									let o = i;
									if (l > 4) {
										let n = a.pos - (l - 4);
										for (; a.pos > n; ) i = d(t, e, i);
									}
									(e[--i] = o),
										(e[--i] = s - t),
										(e[--i] = r - t),
										(e[--i] = n);
								} else -3 == l ? (h = n) : -4 == l && (c = n);
								return i;
							}
							let p = [],
								g = [];
							for (; a.pos > 0; ) O(t.start || 0, t.bufferStart || 0, p, g, -1);
							let m =
								null !== (e = t.length) && void 0 !== e
									? e
									: p.length
									? g[0] + p[0].length
									: 0;
							return new go(l[t.topID], p.reverse(), g.reverse(), m);
						})(t);
					}
				}
				go.empty = new go(co.none, [], [], 0);
				class mo {
					constructor(t, e) {
						(this.buffer = t), (this.index = e);
					}
					get id() {
						return this.buffer[this.index - 4];
					}
					get start() {
						return this.buffer[this.index - 3];
					}
					get end() {
						return this.buffer[this.index - 2];
					}
					get size() {
						return this.buffer[this.index - 1];
					}
					get pos() {
						return this.index;
					}
					next() {
						this.index -= 4;
					}
					fork() {
						return new mo(this.buffer, this.index);
					}
				}
				class So {
					constructor(t, e, i) {
						(this.buffer = t), (this.length = e), (this.set = i);
					}
					get type() {
						return co.none;
					}
					toString() {
						let t = [];
						for (let e = 0; e < this.buffer.length; )
							t.push(this.childString(e)), (e = this.buffer[e + 3]);
						return t.join(",");
					}
					childString(t) {
						let e = this.buffer[t],
							i = this.buffer[t + 3],
							n = this.set.types[e],
							r = n.name;
						if (
							(/\W/.test(r) && !n.isError && (r = JSON.stringify(r)),
							i == (t += 4))
						)
							return r;
						let s = [];
						for (; t < i; )
							s.push(this.childString(t)), (t = this.buffer[t + 3]);
						return r + "(" + s.join(",") + ")";
					}
					findChild(t, e, i, n, r) {
						let { buffer: s } = this,
							o = -1;
						for (
							let a = t;
							a != e && !(Qo(r, n, s[a + 1], s[a + 2]) && ((o = a), i > 0));
							a = s[a + 3]
						);
						return o;
					}
					slice(t, e, i) {
						let n = this.buffer,
							r = new Uint16Array(e - t),
							s = 0;
						for (let o = t, a = 0; o < e; ) {
							(r[a++] = n[o++]), (r[a++] = n[o++] - i);
							let e = (r[a++] = n[o++] - i);
							(r[a++] = n[o++] - t), (s = Math.max(s, e));
						}
						return new So(r, s, this.set);
					}
				}
				function Qo(t, e, i, n) {
					switch (t) {
						case -2:
							return i < e;
						case -1:
							return n >= e && i < e;
						case 0:
							return i < e && n > e;
						case 1:
							return i <= e && n > e;
						case 2:
							return n > e;
						case 4:
							return !0;
					}
				}
				function vo(t, e) {
					let i = t.childBefore(e);
					for (; i; ) {
						let e = i.lastChild;
						if (!e || e.to != i.to) break;
						e.type.isError && e.from == e.to
							? ((t = i), (i = e.prevSibling))
							: (i = e);
					}
					return t;
				}
				function yo(t, e, i, n) {
					for (
						var r;
						t.from == t.to ||
						(i < 1 ? t.from >= e : t.from > e) ||
						(i > -1 ? t.to <= e : t.to < e);

					) {
						let e = !n && t instanceof bo && t.index < 0 ? null : t.parent;
						if (!e) return t;
						t = e;
					}
					let s = n ? 0 : po.IgnoreOverlays;
					if (n)
						for (let n = t, o = n.parent; o; n = o, o = n.parent)
							n instanceof bo &&
								n.index < 0 &&
								(null === (r = o.enter(e, i, s)) || void 0 === r
									? void 0
									: r.from) != n.from &&
								(t = o);
					for (;;) {
						let n = t.enter(e, i, s);
						if (!n) return t;
						t = n;
					}
				}
				class bo {
					constructor(t, e, i, n) {
						(this._tree = t),
							(this.from = e),
							(this.index = i),
							(this._parent = n);
					}
					get type() {
						return this._tree.type;
					}
					get name() {
						return this._tree.type.name;
					}
					get to() {
						return this.from + this._tree.length;
					}
					nextChild(t, e, i, n, r = 0) {
						for (let s = this; ; ) {
							for (
								let { children: o, positions: a } = s._tree,
									l = e > 0 ? o.length : -1;
								t != l;
								t += e
							) {
								let l = o[t],
									h = a[t] + s.from;
								if (Qo(n, i, h, h + l.length))
									if (l instanceof So) {
										if (r & po.ExcludeBuffers) continue;
										let o = l.findChild(0, l.buffer.length, e, i - h, n);
										if (o > -1) return new Po(new $o(s, l, t, h), null, o);
									} else if (
										r & po.IncludeAnonymous ||
										!l.type.isAnonymous ||
										Xo(l)
									) {
										let o;
										if (
											!(r & po.IgnoreMounts) &&
											l.props &&
											(o = l.prop(ao.mounted)) &&
											!o.overlay
										)
											return new bo(o.tree, h, t, s);
										let a = new bo(l, h, t, s);
										return r & po.IncludeAnonymous || !a.type.isAnonymous
											? a
											: a.nextChild(e < 0 ? l.children.length - 1 : 0, e, i, n);
									}
							}
							if (r & po.IncludeAnonymous || !s.type.isAnonymous) return null;
							if (
								((t =
									s.index >= 0
										? s.index + e
										: e < 0
										? -1
										: s._parent._tree.children.length),
								(s = s._parent),
								!s)
							)
								return null;
						}
					}
					get firstChild() {
						return this.nextChild(0, 1, 0, 4);
					}
					get lastChild() {
						return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
					}
					childAfter(t) {
						return this.nextChild(0, 1, t, 2);
					}
					childBefore(t) {
						return this.nextChild(this._tree.children.length - 1, -1, t, -2);
					}
					enter(t, e, i = 0) {
						let n;
						if (
							!(i & po.IgnoreOverlays) &&
							(n = this._tree.prop(ao.mounted)) &&
							n.overlay
						) {
							let i = t - this.from;
							for (let { from: t, to: r } of n.overlay)
								if ((e > 0 ? t <= i : t < i) && (e < 0 ? r >= i : r > i))
									return new bo(
										n.tree,
										n.overlay[0].from + this.from,
										-1,
										this
									);
						}
						return this.nextChild(0, 1, t, e, i);
					}
					nextSignificantParent() {
						let t = this;
						for (; t.type.isAnonymous && t._parent; ) t = t._parent;
						return t;
					}
					get parent() {
						return this._parent ? this._parent.nextSignificantParent() : null;
					}
					get nextSibling() {
						return this._parent && this.index >= 0
							? this._parent.nextChild(this.index + 1, 1, 0, 4)
							: null;
					}
					get prevSibling() {
						return this._parent && this.index >= 0
							? this._parent.nextChild(this.index - 1, -1, 0, 4)
							: null;
					}
					cursor(t = 0) {
						return new ko(this, t);
					}
					get tree() {
						return this._tree;
					}
					toTree() {
						return this._tree;
					}
					resolve(t, e = 0) {
						return yo(this, t, e, !1);
					}
					resolveInner(t, e = 0) {
						return yo(this, t, e, !0);
					}
					enterUnfinishedNodesBefore(t) {
						return vo(this, t);
					}
					getChild(t, e = null, i = null) {
						let n = wo(this, t, e, i);
						return n.length ? n[0] : null;
					}
					getChildren(t, e = null, i = null) {
						return wo(this, t, e, i);
					}
					toString() {
						return this._tree.toString();
					}
					get node() {
						return this;
					}
					matchContext(t) {
						return xo(this, t);
					}
				}
				function wo(t, e, i, n) {
					let r = t.cursor(),
						s = [];
					if (!r.firstChild()) return s;
					if (null != i) for (; !r.type.is(i); ) if (!r.nextSibling()) return s;
					for (;;) {
						if (null != n && r.type.is(n)) return s;
						if ((r.type.is(e) && s.push(r.node), !r.nextSibling()))
							return null == n ? s : [];
					}
				}
				function xo(t, e, i = e.length - 1) {
					for (let n = t.parent; i >= 0; n = n.parent) {
						if (!n) return !1;
						if (!n.type.isAnonymous) {
							if (e[i] && e[i] != n.name) return !1;
							i--;
						}
					}
					return !0;
				}
				class $o {
					constructor(t, e, i, n) {
						(this.parent = t),
							(this.buffer = e),
							(this.index = i),
							(this.start = n);
					}
				}
				class Po {
					get name() {
						return this.type.name;
					}
					get from() {
						return (
							this.context.start + this.context.buffer.buffer[this.index + 1]
						);
					}
					get to() {
						return (
							this.context.start + this.context.buffer.buffer[this.index + 2]
						);
					}
					constructor(t, e, i) {
						(this.context = t),
							(this._parent = e),
							(this.index = i),
							(this.type = t.buffer.set.types[t.buffer.buffer[i]]);
					}
					child(t, e, i) {
						let { buffer: n } = this.context,
							r = n.findChild(
								this.index + 4,
								n.buffer[this.index + 3],
								t,
								e - this.context.start,
								i
							);
						return r < 0 ? null : new Po(this.context, this, r);
					}
					get firstChild() {
						return this.child(1, 0, 4);
					}
					get lastChild() {
						return this.child(-1, 0, 4);
					}
					childAfter(t) {
						return this.child(1, t, 2);
					}
					childBefore(t) {
						return this.child(-1, t, -2);
					}
					enter(t, e, i = 0) {
						if (i & po.ExcludeBuffers) return null;
						let { buffer: n } = this.context,
							r = n.findChild(
								this.index + 4,
								n.buffer[this.index + 3],
								e > 0 ? 1 : -1,
								t - this.context.start,
								e
							);
						return r < 0 ? null : new Po(this.context, this, r);
					}
					get parent() {
						return this._parent || this.context.parent.nextSignificantParent();
					}
					externalSibling(t) {
						return this._parent
							? null
							: this.context.parent.nextChild(this.context.index + t, t, 0, 4);
					}
					get nextSibling() {
						let { buffer: t } = this.context,
							e = t.buffer[this.index + 3];
						return e <
							(this._parent
								? t.buffer[this._parent.index + 3]
								: t.buffer.length)
							? new Po(this.context, this._parent, e)
							: this.externalSibling(1);
					}
					get prevSibling() {
						let { buffer: t } = this.context,
							e = this._parent ? this._parent.index + 4 : 0;
						return this.index == e
							? this.externalSibling(-1)
							: new Po(
									this.context,
									this._parent,
									t.findChild(e, this.index, -1, 0, 4)
							  );
					}
					cursor(t = 0) {
						return new ko(this, t);
					}
					get tree() {
						return null;
					}
					toTree() {
						let t = [],
							e = [],
							{ buffer: i } = this.context,
							n = this.index + 4,
							r = i.buffer[this.index + 3];
						if (r > n) {
							let s = i.buffer[this.index + 1];
							t.push(i.slice(n, r, s)), e.push(0);
						}
						return new go(this.type, t, e, this.to - this.from);
					}
					resolve(t, e = 0) {
						return yo(this, t, e, !1);
					}
					resolveInner(t, e = 0) {
						return yo(this, t, e, !0);
					}
					enterUnfinishedNodesBefore(t) {
						return vo(this, t);
					}
					toString() {
						return this.context.buffer.childString(this.index);
					}
					getChild(t, e = null, i = null) {
						let n = wo(this, t, e, i);
						return n.length ? n[0] : null;
					}
					getChildren(t, e = null, i = null) {
						return wo(this, t, e, i);
					}
					get node() {
						return this;
					}
					matchContext(t) {
						return xo(this, t);
					}
				}
				class ko {
					get name() {
						return this.type.name;
					}
					constructor(t, e = 0) {
						if (
							((this.mode = e),
							(this.buffer = null),
							(this.stack = []),
							(this.index = 0),
							(this.bufferNode = null),
							t instanceof bo)
						)
							this.yieldNode(t);
						else {
							(this._tree = t.context.parent), (this.buffer = t.context);
							for (let e = t._parent; e; e = e._parent)
								this.stack.unshift(e.index);
							(this.bufferNode = t), this.yieldBuf(t.index);
						}
					}
					yieldNode(t) {
						return (
							!!t &&
							((this._tree = t),
							(this.type = t.type),
							(this.from = t.from),
							(this.to = t.to),
							!0)
						);
					}
					yieldBuf(t, e) {
						this.index = t;
						let { start: i, buffer: n } = this.buffer;
						return (
							(this.type = e || n.set.types[n.buffer[t]]),
							(this.from = i + n.buffer[t + 1]),
							(this.to = i + n.buffer[t + 2]),
							!0
						);
					}
					yield(t) {
						return (
							!!t &&
							(t instanceof bo
								? ((this.buffer = null), this.yieldNode(t))
								: ((this.buffer = t.context), this.yieldBuf(t.index, t.type)))
						);
					}
					toString() {
						return this.buffer
							? this.buffer.buffer.childString(this.index)
							: this._tree.toString();
					}
					enterChild(t, e, i) {
						if (!this.buffer)
							return this.yield(
								this._tree.nextChild(
									t < 0 ? this._tree._tree.children.length - 1 : 0,
									t,
									e,
									i,
									this.mode
								)
							);
						let { buffer: n } = this.buffer,
							r = n.findChild(
								this.index + 4,
								n.buffer[this.index + 3],
								t,
								e - this.buffer.start,
								i
							);
						return !(r < 0) && (this.stack.push(this.index), this.yieldBuf(r));
					}
					firstChild() {
						return this.enterChild(1, 0, 4);
					}
					lastChild() {
						return this.enterChild(-1, 0, 4);
					}
					childAfter(t) {
						return this.enterChild(1, t, 2);
					}
					childBefore(t) {
						return this.enterChild(-1, t, -2);
					}
					enter(t, e, i = this.mode) {
						return this.buffer
							? !(i & po.ExcludeBuffers) && this.enterChild(1, t, e)
							: this.yield(this._tree.enter(t, e, i));
					}
					parent() {
						if (!this.buffer)
							return this.yieldNode(
								this.mode & po.IncludeAnonymous
									? this._tree._parent
									: this._tree.parent
							);
						if (this.stack.length) return this.yieldBuf(this.stack.pop());
						let t =
							this.mode & po.IncludeAnonymous
								? this.buffer.parent
								: this.buffer.parent.nextSignificantParent();
						return (this.buffer = null), this.yieldNode(t);
					}
					sibling(t) {
						if (!this.buffer)
							return (
								!!this._tree._parent &&
								this.yield(
									this._tree.index < 0
										? null
										: this._tree._parent.nextChild(
												this._tree.index + t,
												t,
												0,
												4,
												this.mode
										  )
								)
							);
						let { buffer: e } = this.buffer,
							i = this.stack.length - 1;
						if (t < 0) {
							let t = i < 0 ? 0 : this.stack[i] + 4;
							if (this.index != t)
								return this.yieldBuf(e.findChild(t, this.index, -1, 0, 4));
						} else {
							let t = e.buffer[this.index + 3];
							if (t < (i < 0 ? e.buffer.length : e.buffer[this.stack[i] + 3]))
								return this.yieldBuf(t);
						}
						return (
							i < 0 &&
							this.yield(
								this.buffer.parent.nextChild(
									this.buffer.index + t,
									t,
									0,
									4,
									this.mode
								)
							)
						);
					}
					nextSibling() {
						return this.sibling(1);
					}
					prevSibling() {
						return this.sibling(-1);
					}
					atLastNode(t) {
						let e,
							i,
							{ buffer: n } = this;
						if (n) {
							if (t > 0) {
								if (this.index < n.buffer.buffer.length) return !1;
							} else
								for (let t = 0; t < this.index; t++)
									if (n.buffer.buffer[t + 3] < this.index) return !1;
							({ index: e, parent: i } = n);
						} else ({ index: e, _parent: i } = this._tree);
						for (; i; { index: e, _parent: i } = i)
							if (e > -1)
								for (
									let n = e + t, r = t < 0 ? -1 : i._tree.children.length;
									n != r;
									n += t
								) {
									let t = i._tree.children[n];
									if (
										this.mode & po.IncludeAnonymous ||
										t instanceof So ||
										!t.type.isAnonymous ||
										Xo(t)
									)
										return !1;
								}
						return !0;
					}
					move(t, e) {
						if (e && this.enterChild(t, 0, 4)) return !0;
						for (;;) {
							if (this.sibling(t)) return !0;
							if (this.atLastNode(t) || !this.parent()) return !1;
						}
					}
					next(t = !0) {
						return this.move(1, t);
					}
					prev(t = !0) {
						return this.move(-1, t);
					}
					moveTo(t, e = 0) {
						for (
							;
							(this.from == this.to ||
								(e < 1 ? this.from >= t : this.from > t) ||
								(e > -1 ? this.to <= t : this.to < t)) &&
							this.parent();

						);
						for (; this.enterChild(1, t, e); );
						return this;
					}
					get node() {
						if (!this.buffer) return this._tree;
						let t = this.bufferNode,
							e = null,
							i = 0;
						if (t && t.context == this.buffer)
							t: for (let n = this.index, r = this.stack.length; r >= 0; ) {
								for (let s = t; s; s = s._parent)
									if (s.index == n) {
										if (n == this.index) return s;
										(e = s), (i = r + 1);
										break t;
									}
								n = this.stack[--r];
							}
						for (let t = i; t < this.stack.length; t++)
							e = new Po(this.buffer, e, this.stack[t]);
						return (this.bufferNode = new Po(this.buffer, e, this.index));
					}
					get tree() {
						return this.buffer ? null : this._tree._tree;
					}
					iterate(t, e) {
						for (let i = 0; ; ) {
							let n = !1;
							if (this.type.isAnonymous || !1 !== t(this)) {
								if (this.firstChild()) {
									i++;
									continue;
								}
								this.type.isAnonymous || (n = !0);
							}
							for (
								;
								n && e && e(this),
									(n = this.type.isAnonymous),
									!this.nextSibling();

							) {
								if (!i) return;
								this.parent(), i--, (n = !0);
							}
						}
					}
					matchContext(t) {
						if (!this.buffer) return xo(this.node, t);
						let { buffer: e } = this.buffer,
							{ types: i } = e.set;
						for (let n = t.length - 1, r = this.stack.length - 1; n >= 0; r--) {
							if (r < 0) return xo(this.node, t, n);
							let s = i[e.buffer[this.stack[r]]];
							if (!s.isAnonymous) {
								if (t[n] && t[n] != s.name) return !1;
								n--;
							}
						}
						return !0;
					}
				}
				function Xo(t) {
					return t.children.some(
						(t) => t instanceof So || !t.type.isAnonymous || Xo(t)
					);
				}
				const Zo = new WeakMap();
				function To(t, e) {
					if (!t.isAnonymous || e instanceof So || e.type != t) return 1;
					let i = Zo.get(e);
					if (null == i) {
						i = 1;
						for (let n of e.children) {
							if (n.type != t || !(n instanceof go)) {
								i = 1;
								break;
							}
							i += To(t, n);
						}
						Zo.set(e, i);
					}
					return i;
				}
				function Co(t, e, i, n, r, s, o, a, l) {
					let h = 0;
					for (let i = n; i < r; i++) h += To(t, e[i]);
					let c = Math.ceil((1.5 * h) / 8),
						O = [],
						u = [];
					return (
						(function e(i, n, r, o, a) {
							for (let h = r; h < o; ) {
								let r = h,
									f = n[h],
									d = To(t, i[h]);
								for (h++; h < o; h++) {
									let e = To(t, i[h]);
									if (d + e >= c) break;
									d += e;
								}
								if (h == r + 1) {
									if (d > c) {
										let t = i[r];
										e(t.children, t.positions, 0, t.children.length, n[r] + a);
										continue;
									}
									O.push(i[r]);
								} else {
									let e = n[h - 1] + i[h - 1].length - f;
									O.push(Co(t, i, n, r, h, f, e, null, l));
								}
								u.push(f + a - s);
							}
						})(e, i, n, r, 0),
						(a || l)(O, u, o)
					);
				}
				class Ao {
					constructor() {
						this.map = new WeakMap();
					}
					setBuffer(t, e, i) {
						let n = this.map.get(t);
						n || this.map.set(t, (n = new Map())), n.set(e, i);
					}
					getBuffer(t, e) {
						let i = this.map.get(t);
						return i && i.get(e);
					}
					set(t, e) {
						t instanceof Po
							? this.setBuffer(t.context.buffer, t.index, e)
							: t instanceof bo && this.map.set(t.tree, e);
					}
					get(t) {
						return t instanceof Po
							? this.getBuffer(t.context.buffer, t.index)
							: t instanceof bo
							? this.map.get(t.tree)
							: void 0;
					}
					cursorSet(t, e) {
						t.buffer
							? this.setBuffer(t.buffer.buffer, t.index, e)
							: this.map.set(t.tree, e);
					}
					cursorGet(t) {
						return t.buffer
							? this.getBuffer(t.buffer.buffer, t.index)
							: this.map.get(t.tree);
					}
				}
				class Vo {
					constructor(t, e, i, n, r = !1, s = !1) {
						(this.from = t),
							(this.to = e),
							(this.tree = i),
							(this.offset = n),
							(this.open = (r ? 1 : 0) | (s ? 2 : 0));
					}
					get openStart() {
						return (1 & this.open) > 0;
					}
					get openEnd() {
						return (2 & this.open) > 0;
					}
					static addTree(t, e = [], i = !1) {
						let n = [new Vo(0, t.length, t, 0, !1, i)];
						for (let i of e) i.to > t.length && n.push(i);
						return n;
					}
					static applyChanges(t, e, i = 128) {
						if (!e.length) return t;
						let n = [],
							r = 1,
							s = t.length ? t[0] : null;
						for (let o = 0, a = 0, l = 0; ; o++) {
							let h = o < e.length ? e[o] : null,
								c = h ? h.fromA : 1e9;
							if (c - a >= i)
								for (; s && s.from < c; ) {
									let e = s;
									if (a >= e.from || c <= e.to || l) {
										let t = Math.max(e.from, a) - l,
											i = Math.min(e.to, c) - l;
										e =
											t >= i
												? null
												: new Vo(t, i, e.tree, e.offset + l, o > 0, !!h);
									}
									if ((e && n.push(e), s.to > c)) break;
									s = r < t.length ? t[r++] : null;
								}
							if (!h) break;
							(a = h.toA), (l = h.toA - h.toB);
						}
						return n;
					}
				}
				class Wo {
					startParse(t, e, i) {
						return (
							"string" == typeof t && (t = new Yo(t)),
							(i = i
								? i.length
									? i.map((t) => new oo(t.from, t.to))
									: [new oo(0, 0)]
								: [new oo(0, t.length)]),
							this.createParse(t, e || [], i)
						);
					}
					parse(t, e, i) {
						let n = this.startParse(t, e, i);
						for (;;) {
							let t = n.advance();
							if (t) return t;
						}
					}
				}
				class Yo {
					constructor(t) {
						this.string = t;
					}
					get length() {
						return this.string.length;
					}
					chunk(t) {
						return this.string.slice(t);
					}
					get lineChunks() {
						return !1;
					}
					read(t, e) {
						return this.string.slice(t, e);
					}
				}
				class Ro {
					constructor(t, e, i, n, r) {
						(this.parser = t),
							(this.parse = e),
							(this.overlay = i),
							(this.target = n),
							(this.ranges = r);
					}
				}
				class _o {
					constructor(t, e, i, n, r, s, o) {
						(this.parser = t),
							(this.predicate = e),
							(this.mounts = i),
							(this.index = n),
							(this.start = r),
							(this.target = s),
							(this.prev = o),
							(this.depth = 0),
							(this.ranges = []);
					}
				}
				const Mo = new ao({ perNode: !0 });
				class qo {
					constructor(t, e, i, n, r) {
						(this.nest = e),
							(this.input = i),
							(this.fragments = n),
							(this.ranges = r),
							(this.inner = []),
							(this.innerDone = 0),
							(this.baseTree = null),
							(this.stoppedAt = null),
							(this.baseParse = t);
					}
					advance() {
						if (this.baseParse) {
							let t = this.baseParse.advance();
							if (!t) return null;
							if (
								((this.baseParse = null),
								(this.baseTree = t),
								this.startInner(),
								null != this.stoppedAt)
							)
								for (let t of this.inner) t.parse.stopAt(this.stoppedAt);
						}
						if (this.innerDone == this.inner.length) {
							let t = this.baseTree;
							return (
								null != this.stoppedAt &&
									(t = new go(
										t.type,
										t.children,
										t.positions,
										t.length,
										t.propValues.concat([[Mo, this.stoppedAt]])
									)),
								t
							);
						}
						let t = this.inner[this.innerDone],
							e = t.parse.advance();
						if (e) {
							this.innerDone++;
							let i = Object.assign(Object.create(null), t.target.props);
							(i[ao.mounted.id] = new lo(e, t.overlay, t.parser)),
								(t.target.props = i);
						}
						return null;
					}
					get parsedPos() {
						if (this.baseParse) return 0;
						let t = this.input.length;
						for (let e = this.innerDone; e < this.inner.length; e++)
							this.inner[e].ranges[0].from < t &&
								(t = Math.min(t, this.inner[e].parse.parsedPos));
						return t;
					}
					stopAt(t) {
						if (((this.stoppedAt = t), this.baseParse))
							this.baseParse.stopAt(t);
						else
							for (let e = this.innerDone; e < this.inner.length; e++)
								this.inner[e].parse.stopAt(t);
					}
					startInner() {
						let t = new Go(this.fragments),
							e = null,
							i = null,
							n = new ko(
								new bo(this.baseTree, this.ranges[0].from, 0, null),
								po.IncludeAnonymous | po.IgnoreMounts
							);
						t: for (
							let r, s;
							null == this.stoppedAt || n.from < this.stoppedAt;

						) {
							let o,
								a = !0;
							if (t.hasNode(n)) {
								if (e) {
									let t = e.mounts.find(
										(t) =>
											t.frag.from <= n.from &&
											t.frag.to >= n.to &&
											t.mount.overlay
									);
									if (t)
										for (let i of t.mount.overlay) {
											let r = i.from + t.pos,
												s = i.to + t.pos;
											r >= n.from &&
												s <= n.to &&
												!e.ranges.some((t) => t.from < s && t.to > r) &&
												e.ranges.push({ from: r, to: s });
										}
								}
								a = !1;
							} else if (i && (s = Uo(i.ranges, n.from, n.to))) a = 2 != s;
							else if (
								!n.type.isAnonymous &&
								n.from < n.to &&
								(r = this.nest(n, this.input))
							) {
								n.tree || Do(n);
								let s = t.findMounts(n.from, r.parser);
								if ("function" == typeof r.overlay)
									e = new _o(
										r.parser,
										r.overlay,
										s,
										this.inner.length,
										n.from,
										n.tree,
										e
									);
								else {
									let t = Io(this.ranges, r.overlay || [new oo(n.from, n.to)]);
									t.length &&
										this.inner.push(
											new Ro(
												r.parser,
												r.parser.startParse(this.input, Bo(s, t), t),
												r.overlay
													? r.overlay.map(
															(t) => new oo(t.from - n.from, t.to - n.from)
													  )
													: null,
												n.tree,
												t
											)
										),
										r.overlay
											? t.length && (i = { ranges: t, depth: 0, prev: i })
											: (a = !1);
								}
							} else
								e &&
									(o = e.predicate(n)) &&
									(!0 === o && (o = new oo(n.from, n.to)),
									o.from < o.to && e.ranges.push(o));
							if (a && n.firstChild()) e && e.depth++, i && i.depth++;
							else
								for (; !n.nextSibling(); ) {
									if (!n.parent()) break t;
									if (e && !--e.depth) {
										let t = Io(this.ranges, e.ranges);
										t.length &&
											this.inner.splice(
												e.index,
												0,
												new Ro(
													e.parser,
													e.parser.startParse(this.input, Bo(e.mounts, t), t),
													e.ranges.map(
														(t) => new oo(t.from - e.start, t.to - e.start)
													),
													e.target,
													t
												)
											),
											(e = e.prev);
									}
									i && !--i.depth && (i = i.prev);
								}
						}
					}
				}
				function Uo(t, e, i) {
					for (let n of t) {
						if (n.from >= i) break;
						if (n.to > e) return n.from <= e && n.to >= i ? 2 : 1;
					}
					return 0;
				}
				function jo(t, e, i, n, r, s) {
					if (e < i) {
						let o = t.buffer[e + 1];
						n.push(t.slice(e, i, o)), r.push(o - s);
					}
				}
				function Do(t) {
					let { node: e } = t,
						i = 0;
					do {
						t.parent(), i++;
					} while (!t.tree);
					let n = 0,
						r = t.tree,
						s = 0;
					for (
						;
						(s = r.positions[n] + t.from),
							!(s <= e.from && s + r.children[n].length >= e.to);
						n++
					);
					let o = r.children[n],
						a = o.buffer;
					r.children[n] = (function t(i, n, r, l, h) {
						let c = i;
						for (; a[c + 2] + s <= e.from; ) c = a[c + 3];
						let O = [],
							u = [];
						jo(o, i, c, O, u, l);
						let f = a[c + 1],
							d = a[c + 2],
							p = f + s == e.from && d + s == e.to && a[c] == e.type.id;
						return (
							O.push(
								p ? e.toTree() : t(c + 4, a[c + 3], o.set.types[a[c]], f, d - f)
							),
							u.push(f - l),
							jo(o, a[c + 3], n, O, u, l),
							new go(r, O, u, h)
						);
					})(0, a.length, co.none, 0, o.length);
					for (let n = 0; n <= i; n++) t.childAfter(e.from);
				}
				class Eo {
					constructor(t, e) {
						(this.offset = e),
							(this.done = !1),
							(this.cursor = t.cursor(po.IncludeAnonymous | po.IgnoreMounts));
					}
					moveTo(t) {
						let { cursor: e } = this,
							i = t - this.offset;
						for (; !this.done && e.from < i; )
							(e.to >= t &&
								e.enter(i, 1, po.IgnoreOverlays | po.ExcludeBuffers)) ||
								e.next(!1) ||
								(this.done = !0);
					}
					hasNode(t) {
						if (
							(this.moveTo(t.from),
							!this.done &&
								this.cursor.from + this.offset == t.from &&
								this.cursor.tree)
						)
							for (let e = this.cursor.tree; ; ) {
								if (e == t.tree) return !0;
								if (
									!(
										e.children.length &&
										0 == e.positions[0] &&
										e.children[0] instanceof go
									)
								)
									break;
								e = e.children[0];
							}
						return !1;
					}
				}
				class Go {
					constructor(t) {
						var e;
						if (
							((this.fragments = t),
							(this.curTo = 0),
							(this.fragI = 0),
							t.length)
						) {
							let i = (this.curFrag = t[0]);
							(this.curTo =
								null !== (e = i.tree.prop(Mo)) && void 0 !== e ? e : i.to),
								(this.inner = new Eo(i.tree, -i.offset));
						} else this.curFrag = this.inner = null;
					}
					hasNode(t) {
						for (; this.curFrag && t.from >= this.curTo; ) this.nextFrag();
						return (
							this.curFrag &&
							this.curFrag.from <= t.from &&
							this.curTo >= t.to &&
							this.inner.hasNode(t)
						);
					}
					nextFrag() {
						var t;
						if ((this.fragI++, this.fragI == this.fragments.length))
							this.curFrag = this.inner = null;
						else {
							let e = (this.curFrag = this.fragments[this.fragI]);
							(this.curTo =
								null !== (t = e.tree.prop(Mo)) && void 0 !== t ? t : e.to),
								(this.inner = new Eo(e.tree, -e.offset));
						}
					}
					findMounts(t, e) {
						var i;
						let n = [];
						if (this.inner) {
							this.inner.cursor.moveTo(t, 1);
							for (let t = this.inner.cursor.node; t; t = t.parent) {
								let r =
									null === (i = t.tree) || void 0 === i
										? void 0
										: i.prop(ao.mounted);
								if (r && r.parser == e)
									for (let e = this.fragI; e < this.fragments.length; e++) {
										let i = this.fragments[e];
										if (i.from >= t.to) break;
										i.tree == this.curFrag.tree &&
											n.push({ frag: i, pos: t.from - i.offset, mount: r });
									}
							}
						}
						return n;
					}
				}
				function Io(t, e) {
					let i = null,
						n = e;
					for (let r = 1, s = 0; r < t.length; r++) {
						let o = t[r - 1].to,
							a = t[r].from;
						for (; s < n.length; s++) {
							let t = n[s];
							if (t.from >= a) break;
							t.to <= o ||
								(i || (n = i = e.slice()),
								t.from < o
									? ((i[s] = new oo(t.from, o)),
									  t.to > a && i.splice(s + 1, 0, new oo(a, t.to)))
									: t.to > a
									? (i[s--] = new oo(a, t.to))
									: i.splice(s--, 1));
						}
					}
					return n;
				}
				function zo(t, e, i, n) {
					let r = 0,
						s = 0,
						o = !1,
						a = !1,
						l = -1e9,
						h = [];
					for (;;) {
						let c = r == t.length ? 1e9 : o ? t[r].to : t[r].from,
							O = s == e.length ? 1e9 : a ? e[s].to : e[s].from;
						if (o != a) {
							let t = Math.max(l, i),
								e = Math.min(c, O, n);
							t < e && h.push(new oo(t, e));
						}
						if (((l = Math.min(c, O)), 1e9 == l)) break;
						c == l && (o ? ((o = !1), r++) : (o = !0)),
							O == l && (a ? ((a = !1), s++) : (a = !0));
					}
					return h;
				}
				function Bo(t, e) {
					let i = [];
					for (let { pos: n, mount: r, frag: s } of t) {
						let t = n + (r.overlay ? r.overlay[0].from : 0),
							o = t + r.tree.length,
							a = Math.max(s.from, t),
							l = Math.min(s.to, o);
						if (r.overlay) {
							let o = zo(
								e,
								r.overlay.map((t) => new oo(t.from + n, t.to + n)),
								a,
								l
							);
							for (let e = 0, n = a; ; e++) {
								let a = e == o.length,
									h = a ? l : o[e].from;
								if (
									(h > n &&
										i.push(
											new Vo(
												n,
												h,
												r.tree,
												-t,
												s.from >= n || s.openStart,
												s.to <= h || s.openEnd
											)
										),
									a)
								)
									break;
								n = o[e].to;
							}
						} else
							i.push(
								new Vo(
									a,
									l,
									r.tree,
									-t,
									s.from >= t || s.openStart,
									s.to <= o || s.openEnd
								)
							);
					}
					return i;
				}
				let No = 0;
				class Lo {
					constructor(t, e, i) {
						(this.set = t),
							(this.base = e),
							(this.modified = i),
							(this.id = No++);
					}
					static define(t) {
						if (null == t ? void 0 : t.base)
							throw new Error("Can not derive from a modified tag");
						let e = new Lo([], null, []);
						if ((e.set.push(e), t)) for (let i of t.set) e.set.push(i);
						return e;
					}
					static defineModifier() {
						let t = new Fo();
						return (e) =>
							e.modified.indexOf(t) > -1
								? e
								: Fo.get(
										e.base || e,
										e.modified.concat(t).sort((t, e) => t.id - e.id)
								  );
					}
				}
				let Ho = 0;
				class Fo {
					constructor() {
						(this.instances = []), (this.id = Ho++);
					}
					static get(t, e) {
						if (!e.length) return t;
						let i = e[0].instances.find((i) => {
							return (
								i.base == t &&
								((n = e),
								(r = i.modified),
								n.length == r.length && n.every((t, e) => t == r[e]))
							);
							var n, r;
						});
						if (i) return i;
						let n = [],
							r = new Lo(n, t, e);
						for (let t of e) t.instances.push(r);
						let s = (function (t) {
							let e = [[]];
							for (let i = 0; i < t.length; i++)
								for (let n = 0, r = e.length; n < r; n++)
									e.push(e[n].concat(t[i]));
							return e.sort((t, e) => e.length - t.length);
						})(e);
						for (let e of t.set)
							if (!e.modified.length) for (let t of s) n.push(Fo.get(e, t));
						return r;
					}
				}
				function Jo(t) {
					let e = Object.create(null);
					for (let i in t) {
						let n = t[i];
						Array.isArray(n) || (n = [n]);
						for (let t of i.split(" "))
							if (t) {
								let i = [],
									r = 2,
									s = t;
								for (let e = 0; ; ) {
									if ("..." == s && e > 0 && e + 3 == t.length) {
										r = 1;
										break;
									}
									let n = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);
									if (!n) throw new RangeError("Invalid path: " + t);
									if (
										(i.push(
											"*" == n[0]
												? ""
												: '"' == n[0][0]
												? JSON.parse(n[0])
												: n[0]
										),
										(e += n[0].length),
										e == t.length)
									)
										break;
									let o = t[e++];
									if (e == t.length && "!" == o) {
										r = 0;
										break;
									}
									if ("/" != o) throw new RangeError("Invalid path: " + t);
									s = t.slice(e);
								}
								let o = i.length - 1,
									a = i[o];
								if (!a) throw new RangeError("Invalid path: " + t);
								let l = new ta(n, r, o > 0 ? i.slice(0, o) : null);
								e[a] = l.sort(e[a]);
							}
					}
					return Ko.add(e);
				}
				const Ko = new ao();
				class ta {
					constructor(t, e, i, n) {
						(this.tags = t),
							(this.mode = e),
							(this.context = i),
							(this.next = n);
					}
					get opaque() {
						return 0 == this.mode;
					}
					get inherit() {
						return 1 == this.mode;
					}
					sort(t) {
						return !t || t.depth < this.depth
							? ((this.next = t), this)
							: ((t.next = this.sort(t.next)), t);
					}
					get depth() {
						return this.context ? this.context.length : 0;
					}
				}
				function ea(t, e) {
					let i = Object.create(null);
					for (let e of t)
						if (Array.isArray(e.tag)) for (let t of e.tag) i[t.id] = e.class;
						else i[e.tag.id] = e.class;
					let { scope: n, all: r = null } = e || {};
					return {
						style: (t) => {
							let e = r;
							for (let n of t)
								for (let t of n.set) {
									let n = i[t.id];
									if (n) {
										e = e ? e + " " + n : n;
										break;
									}
								}
							return e;
						},
						scope: n
					};
				}
				function ia(t, e, i, n = 0, r = t.length) {
					let s = new na(n, Array.isArray(e) ? e : [e], i);
					s.highlightRange(t.cursor(), n, r, "", s.highlighters), s.flush(r);
				}
				ta.empty = new ta([], 2, null);
				class na {
					constructor(t, e, i) {
						(this.at = t),
							(this.highlighters = e),
							(this.span = i),
							(this.class = "");
					}
					startSpan(t, e) {
						e != this.class &&
							(this.flush(t), t > this.at && (this.at = t), (this.class = e));
					}
					flush(t) {
						t > this.at && this.class && this.span(this.at, t, this.class);
					}
					highlightRange(t, e, i, n, r) {
						let { type: s, from: o, to: a } = t;
						if (o >= i || a <= e) return;
						s.isTop &&
							(r = this.highlighters.filter((t) => !t.scope || t.scope(s)));
						let l = n,
							h =
								(function (t) {
									let e = t.type.prop(Ko);
									for (; e && e.context && !t.matchContext(e.context); )
										e = e.next;
									return e || null;
								})(t) || ta.empty,
							c = (function (t, e) {
								let i = null;
								for (let n of t) {
									let t = n.style(e);
									t && (i = i ? i + " " + t : t);
								}
								return i;
							})(r, h.tags);
						if (
							(c &&
								(l && (l += " "),
								(l += c),
								1 == h.mode && (n += (n ? " " : "") + c)),
							this.startSpan(t.from, l),
							h.opaque)
						)
							return;
						let O = t.tree && t.tree.prop(ao.mounted);
						if (O && O.overlay) {
							let s = t.node.enter(O.overlay[0].from + o, 1),
								h = this.highlighters.filter(
									(t) => !t.scope || t.scope(O.tree.type)
								),
								c = t.firstChild();
							for (let u = 0, f = o; ; u++) {
								let d = u < O.overlay.length ? O.overlay[u] : null,
									p = d ? d.from + o : a,
									g = Math.max(e, f),
									m = Math.min(i, p);
								if (g < m && c)
									for (
										;
										t.from < m &&
										(this.highlightRange(t, g, m, n, r),
										this.startSpan(Math.min(m, t.to), l),
										!(t.to >= p) && t.nextSibling());

									);
								if (!d || p > i) break;
								(f = d.to + o),
									f > e &&
										(this.highlightRange(
											s.cursor(),
											Math.max(e, d.from + o),
											Math.min(i, f),
											n,
											h
										),
										this.startSpan(f, l));
							}
							c && t.parent();
						} else if (t.firstChild()) {
							do {
								if (!(t.to <= e)) {
									if (t.from >= i) break;
									this.highlightRange(t, e, i, n, r),
										this.startSpan(Math.min(i, t.to), l);
								}
							} while (t.nextSibling());
							t.parent();
						}
					}
				}
				const ra = Lo.define,
					sa = ra(),
					oa = ra(),
					aa = ra(oa),
					la = ra(oa),
					ha = ra(),
					ca = ra(ha),
					Oa = ra(ha),
					ua = ra(),
					fa = ra(ua),
					da = ra(),
					pa = ra(),
					ga = ra(),
					ma = ra(ga),
					Sa = ra(),
					Qa = {
						comment: sa,
						lineComment: ra(sa),
						blockComment: ra(sa),
						docComment: ra(sa),
						name: oa,
						variableName: ra(oa),
						typeName: aa,
						tagName: ra(aa),
						propertyName: la,
						attributeName: ra(la),
						className: ra(oa),
						labelName: ra(oa),
						namespace: ra(oa),
						macroName: ra(oa),
						literal: ha,
						string: ca,
						docString: ra(ca),
						character: ra(ca),
						attributeValue: ra(ca),
						number: Oa,
						integer: ra(Oa),
						float: ra(Oa),
						bool: ra(ha),
						regexp: ra(ha),
						escape: ra(ha),
						color: ra(ha),
						url: ra(ha),
						keyword: da,
						self: ra(da),
						null: ra(da),
						atom: ra(da),
						unit: ra(da),
						modifier: ra(da),
						operatorKeyword: ra(da),
						controlKeyword: ra(da),
						definitionKeyword: ra(da),
						moduleKeyword: ra(da),
						operator: pa,
						derefOperator: ra(pa),
						arithmeticOperator: ra(pa),
						logicOperator: ra(pa),
						bitwiseOperator: ra(pa),
						compareOperator: ra(pa),
						updateOperator: ra(pa),
						definitionOperator: ra(pa),
						typeOperator: ra(pa),
						controlOperator: ra(pa),
						punctuation: ga,
						separator: ra(ga),
						bracket: ma,
						angleBracket: ra(ma),
						squareBracket: ra(ma),
						paren: ra(ma),
						brace: ra(ma),
						content: ua,
						heading: fa,
						heading1: ra(fa),
						heading2: ra(fa),
						heading3: ra(fa),
						heading4: ra(fa),
						heading5: ra(fa),
						heading6: ra(fa),
						contentSeparator: ra(ua),
						list: ra(ua),
						quote: ra(ua),
						emphasis: ra(ua),
						strong: ra(ua),
						link: ra(ua),
						monospace: ra(ua),
						strikethrough: ra(ua),
						inserted: ra(),
						deleted: ra(),
						changed: ra(),
						invalid: ra(),
						meta: Sa,
						documentMeta: ra(Sa),
						annotation: ra(Sa),
						processingInstruction: ra(Sa),
						definition: Lo.defineModifier(),
						constant: Lo.defineModifier(),
						function: Lo.defineModifier(),
						standard: Lo.defineModifier(),
						local: Lo.defineModifier(),
						special: Lo.defineModifier()
					};
				var va;
				ea([
					{ tag: Qa.link, class: "tok-link" },
					{ tag: Qa.heading, class: "tok-heading" },
					{ tag: Qa.emphasis, class: "tok-emphasis" },
					{ tag: Qa.strong, class: "tok-strong" },
					{ tag: Qa.keyword, class: "tok-keyword" },
					{ tag: Qa.atom, class: "tok-atom" },
					{ tag: Qa.bool, class: "tok-bool" },
					{ tag: Qa.url, class: "tok-url" },
					{ tag: Qa.labelName, class: "tok-labelName" },
					{ tag: Qa.inserted, class: "tok-inserted" },
					{ tag: Qa.deleted, class: "tok-deleted" },
					{ tag: Qa.literal, class: "tok-literal" },
					{ tag: Qa.string, class: "tok-string" },
					{ tag: Qa.number, class: "tok-number" },
					{
						tag: [Qa.regexp, Qa.escape, Qa.special(Qa.string)],
						class: "tok-string2"
					},
					{ tag: Qa.variableName, class: "tok-variableName" },
					{
						tag: Qa.local(Qa.variableName),
						class: "tok-variableName tok-local"
					},
					{
						tag: Qa.definition(Qa.variableName),
						class: "tok-variableName tok-definition"
					},
					{ tag: Qa.special(Qa.variableName), class: "tok-variableName2" },
					{
						tag: Qa.definition(Qa.propertyName),
						class: "tok-propertyName tok-definition"
					},
					{ tag: Qa.typeName, class: "tok-typeName" },
					{ tag: Qa.namespace, class: "tok-namespace" },
					{ tag: Qa.className, class: "tok-className" },
					{ tag: Qa.macroName, class: "tok-macroName" },
					{ tag: Qa.propertyName, class: "tok-propertyName" },
					{ tag: Qa.operator, class: "tok-operator" },
					{ tag: Qa.comment, class: "tok-comment" },
					{ tag: Qa.meta, class: "tok-meta" },
					{ tag: Qa.invalid, class: "tok-invalid" },
					{ tag: Qa.punctuation, class: "tok-punctuation" }
				]);
				const ya = new ao();
				function ba(t) {
					return _.define({ combine: t ? (e) => e.concat(t) : void 0 });
				}
				const wa = new ao();
				class xa {
					constructor(t, e, i = [], n = "") {
						(this.data = t),
							(this.name = n),
							vt.prototype.hasOwnProperty("tree") ||
								Object.defineProperty(vt.prototype, "tree", {
									get() {
										return ka(this);
									}
								}),
							(this.parser = e),
							(this.extension = [
								Ra.of(this),
								vt.languageData.of((t, e, i) => {
									let n = $a(t, e, i),
										r = n.type.prop(ya);
									if (!r) return [];
									let s = t.facet(r),
										o = n.type.prop(wa);
									if (o) {
										let r = n.resolve(e - n.from, i);
										for (let e of o)
											if (e.test(r, t)) {
												let i = t.facet(e.facet);
												return "replace" == e.type ? i : i.concat(s);
											}
									}
									return s;
								})
							].concat(i));
					}
					isActiveAt(t, e, i = -1) {
						return $a(t, e, i).type.prop(ya) == this.data;
					}
					findRegions(t) {
						let e = t.facet(Ra);
						if ((null == e ? void 0 : e.data) == this.data)
							return [{ from: 0, to: t.doc.length }];
						if (!e || !e.allowsNesting) return [];
						let i = [],
							n = (t, e) => {
								if (t.prop(ya) == this.data)
									return void i.push({ from: e, to: e + t.length });
								let r = t.prop(ao.mounted);
								if (r) {
									if (r.tree.prop(ya) == this.data) {
										if (r.overlay)
											for (let t of r.overlay)
												i.push({ from: t.from + e, to: t.to + e });
										else i.push({ from: e, to: e + t.length });
										return;
									}
									if (r.overlay) {
										let t = i.length;
										if ((n(r.tree, r.overlay[0].from + e), i.length > t))
											return;
									}
								}
								for (let i = 0; i < t.children.length; i++) {
									let r = t.children[i];
									r instanceof go && n(r, t.positions[i] + e);
								}
							};
						return n(ka(t), 0), i;
					}
					get allowsNesting() {
						return !0;
					}
				}
				function $a(t, e, i) {
					let n = t.facet(Ra),
						r = ka(t).topNode;
					if (!n || n.allowsNesting)
						for (let t = r; t; t = t.enter(e, i, po.ExcludeBuffers))
							t.type.isTop && (r = t);
					return r;
				}
				xa.setState = ht.define();
				class Pa extends xa {
					constructor(t, e, i) {
						super(t, e, [], i), (this.parser = e);
					}
					static define(t) {
						let e = ba(t.languageData);
						return new Pa(
							e,
							t.parser.configure({
								props: [ya.add((t) => (t.isTop ? e : void 0))]
							}),
							t.name
						);
					}
					configure(t, e) {
						return new Pa(this.data, this.parser.configure(t), e || this.name);
					}
					get allowsNesting() {
						return this.parser.hasWrappers();
					}
				}
				function ka(t) {
					let e = t.field(xa.state, !1);
					return e ? e.tree : go.empty;
				}
				class Xa {
					constructor(t) {
						(this.doc = t),
							(this.cursorPos = 0),
							(this.string = ""),
							(this.cursor = t.iter());
					}
					get length() {
						return this.doc.length;
					}
					syncTo(t) {
						return (
							(this.string = this.cursor.next(t - this.cursorPos).value),
							(this.cursorPos = t + this.string.length),
							this.cursorPos - this.string.length
						);
					}
					chunk(t) {
						return this.syncTo(t), this.string;
					}
					get lineChunks() {
						return !0;
					}
					read(t, e) {
						let i = this.cursorPos - this.string.length;
						return t < i || e >= this.cursorPos
							? this.doc.sliceString(t, e)
							: this.string.slice(t - i, e - i);
					}
				}
				let Za = null;
				class Ta {
					constructor(t, e, i = [], n, r, s, o, a) {
						(this.parser = t),
							(this.state = e),
							(this.fragments = i),
							(this.tree = n),
							(this.treeLen = r),
							(this.viewport = s),
							(this.skipped = o),
							(this.scheduleOn = a),
							(this.parse = null),
							(this.tempSkipped = []);
					}
					static create(t, e, i) {
						return new Ta(t, e, [], go.empty, 0, i, [], null);
					}
					startParse() {
						return this.parser.startParse(
							new Xa(this.state.doc),
							this.fragments
						);
					}
					work(t, e) {
						return (
							null != e && e >= this.state.doc.length && (e = void 0),
							this.tree != go.empty &&
							this.isDone(null != e ? e : this.state.doc.length)
								? (this.takeTree(), !0)
								: this.withContext(() => {
										var i;
										if ("number" == typeof t) {
											let e = Date.now() + t;
											t = () => Date.now() > e;
										}
										for (
											this.parse || (this.parse = this.startParse()),
												null != e &&
													(null == this.parse.stoppedAt ||
														this.parse.stoppedAt > e) &&
													e < this.state.doc.length &&
													this.parse.stopAt(e);
											;

										) {
											let n = this.parse.advance();
											if (n) {
												if (
													((this.fragments = this.withoutTempSkipped(
														Vo.addTree(
															n,
															this.fragments,
															null != this.parse.stoppedAt
														)
													)),
													(this.treeLen =
														null !== (i = this.parse.stoppedAt) && void 0 !== i
															? i
															: this.state.doc.length),
													(this.tree = n),
													(this.parse = null),
													!(
														this.treeLen <
														(null != e ? e : this.state.doc.length)
													))
												)
													return !0;
												this.parse = this.startParse();
											}
											if (t()) return !1;
										}
								  })
						);
					}
					takeTree() {
						let t, e;
						this.parse &&
							(t = this.parse.parsedPos) >= this.treeLen &&
							((null == this.parse.stoppedAt || this.parse.stoppedAt > t) &&
								this.parse.stopAt(t),
							this.withContext(() => {
								for (; !(e = this.parse.advance()); );
							}),
							(this.treeLen = t),
							(this.tree = e),
							(this.fragments = this.withoutTempSkipped(
								Vo.addTree(this.tree, this.fragments, !0)
							)),
							(this.parse = null));
					}
					withContext(t) {
						let e = Za;
						Za = this;
						try {
							return t();
						} finally {
							Za = e;
						}
					}
					withoutTempSkipped(t) {
						for (let e; (e = this.tempSkipped.pop()); ) t = Ca(t, e.from, e.to);
						return t;
					}
					changes(t, e) {
						let {
							fragments: i,
							tree: n,
							treeLen: r,
							viewport: s,
							skipped: o
						} = this;
						if ((this.takeTree(), !t.empty)) {
							let e = [];
							if (
								(t.iterChangedRanges((t, i, n, r) =>
									e.push({ fromA: t, toA: i, fromB: n, toB: r })
								),
								(i = Vo.applyChanges(i, e)),
								(n = go.empty),
								(r = 0),
								(s = { from: t.mapPos(s.from, -1), to: t.mapPos(s.to, 1) }),
								this.skipped.length)
							) {
								o = [];
								for (let e of this.skipped) {
									let i = t.mapPos(e.from, 1),
										n = t.mapPos(e.to, -1);
									i < n && o.push({ from: i, to: n });
								}
							}
						}
						return new Ta(this.parser, e, i, n, r, s, o, this.scheduleOn);
					}
					updateViewport(t) {
						if (this.viewport.from == t.from && this.viewport.to == t.to)
							return !1;
						this.viewport = t;
						let e = this.skipped.length;
						for (let e = 0; e < this.skipped.length; e++) {
							let { from: i, to: n } = this.skipped[e];
							i < t.to &&
								n > t.from &&
								((this.fragments = Ca(this.fragments, i, n)),
								this.skipped.splice(e--, 1));
						}
						return !(this.skipped.length >= e || (this.reset(), 0));
					}
					reset() {
						this.parse && (this.takeTree(), (this.parse = null));
					}
					skipUntilInView(t, e) {
						this.skipped.push({ from: t, to: e });
					}
					static getSkippingParser(t) {
						return new (class extends Wo {
							createParse(e, i, n) {
								let r = n[0].from,
									s = n[n.length - 1].to;
								return {
									parsedPos: r,
									advance() {
										let e = Za;
										if (e) {
											for (let t of n) e.tempSkipped.push(t);
											t &&
												(e.scheduleOn = e.scheduleOn
													? Promise.all([e.scheduleOn, t])
													: t);
										}
										return (this.parsedPos = s), new go(co.none, [], [], s - r);
									},
									stoppedAt: null,
									stopAt() {}
								};
							}
						})();
					}
					isDone(t) {
						t = Math.min(t, this.state.doc.length);
						let e = this.fragments;
						return (
							this.treeLen >= t && e.length && 0 == e[0].from && e[0].to >= t
						);
					}
					static get() {
						return Za;
					}
				}
				function Ca(t, e, i) {
					return Vo.applyChanges(t, [{ fromA: e, toA: i, fromB: e, toB: i }]);
				}
				class Aa {
					constructor(t) {
						(this.context = t), (this.tree = t.tree);
					}
					apply(t) {
						if (!t.docChanged && this.tree == this.context.tree) return this;
						let e = this.context.changes(t.changes, t.state),
							i =
								this.context.treeLen == t.startState.doc.length
									? void 0
									: Math.max(
											t.changes.mapPos(this.context.treeLen),
											e.viewport.to
									  );
						return e.work(20, i) || e.takeTree(), new Aa(e);
					}
					static init(t) {
						let e = Math.min(3e3, t.doc.length),
							i = Ta.create(t.facet(Ra).parser, t, { from: 0, to: e });
						return i.work(20, e) || i.takeTree(), new Aa(i);
					}
				}
				xa.state = G.define({
					create: Aa.init,
					update(t, e) {
						for (let t of e.effects) if (t.is(xa.setState)) return t.value;
						return e.startState.facet(Ra) != e.state.facet(Ra)
							? Aa.init(e.state)
							: t.apply(e);
					}
				});
				let Va = (t) => {
					let e = setTimeout(() => t(), 500);
					return () => clearTimeout(e);
				};
				"undefined" != typeof requestIdleCallback &&
					(Va = (t) => {
						let e = -1,
							i = setTimeout(() => {
								e = requestIdleCallback(t, { timeout: 400 });
							}, 100);
						return () => (e < 0 ? clearTimeout(i) : cancelIdleCallback(e));
					});
				const Wa =
						"undefined" != typeof navigator &&
						(null === (va = navigator.scheduling) || void 0 === va
							? void 0
							: va.isInputPending)
							? () => navigator.scheduling.isInputPending()
							: null,
					Ya = $i.fromClass(
						class {
							constructor(t) {
								(this.view = t),
									(this.working = null),
									(this.workScheduled = 0),
									(this.chunkEnd = -1),
									(this.chunkBudget = -1),
									(this.work = this.work.bind(this)),
									this.scheduleWork();
							}
							update(t) {
								let e = this.view.state.field(xa.state).context;
								(e.updateViewport(t.view.viewport) ||
									this.view.viewport.to > e.treeLen) &&
									this.scheduleWork(),
									t.docChanged &&
										(this.view.hasFocus && (this.chunkBudget += 50),
										this.scheduleWork()),
									this.checkAsyncSchedule(e);
							}
							scheduleWork() {
								if (this.working) return;
								let { state: t } = this.view,
									e = t.field(xa.state);
								(e.tree == e.context.tree && e.context.isDone(t.doc.length)) ||
									(this.working = Va(this.work));
							}
							work(t) {
								this.working = null;
								let e = Date.now();
								if (
									(this.chunkEnd < e &&
										(this.chunkEnd < 0 || this.view.hasFocus) &&
										((this.chunkEnd = e + 3e4), (this.chunkBudget = 3e3)),
									this.chunkBudget <= 0)
								)
									return;
								let {
										state: i,
										viewport: { to: n }
									} = this.view,
									r = i.field(xa.state);
								if (r.tree == r.context.tree && r.context.isDone(n + 1e5))
									return;
								let s =
										Date.now() +
										Math.min(
											this.chunkBudget,
											100,
											t && !Wa ? Math.max(25, t.timeRemaining() - 5) : 1e9
										),
									o = r.context.treeLen < n && i.doc.length > n + 1e3,
									a = r.context.work(
										() => (Wa && Wa()) || Date.now() > s,
										n + (o ? 0 : 1e5)
									);
								(this.chunkBudget -= Date.now() - e),
									(a || this.chunkBudget <= 0) &&
										(r.context.takeTree(),
										this.view.dispatch({
											effects: xa.setState.of(new Aa(r.context))
										})),
									this.chunkBudget > 0 && (!a || o) && this.scheduleWork(),
									this.checkAsyncSchedule(r.context);
							}
							checkAsyncSchedule(t) {
								t.scheduleOn &&
									(this.workScheduled++,
									t.scheduleOn
										.then(() => this.scheduleWork())
										.catch((t) => yi(this.view.state, t))
										.then(() => this.workScheduled--),
									(t.scheduleOn = null));
							}
							destroy() {
								this.working && this.working();
							}
							isWorking() {
								return !!(this.working || this.workScheduled > 0);
							}
						},
						{
							eventHandlers: {
								focus() {
									this.scheduleWork();
								}
							}
						}
					),
					Ra = _.define({
						combine: (t) => (t.length ? t[0] : null),
						enables: (t) => [
							xa.state,
							Ya,
							Zr.contentAttributes.compute([t], (e) => {
								let i = e.facet(t);
								return i && i.name ? { "data-language": i.name } : {};
							})
						]
					});
				class _a {
					constructor(t, e = []) {
						(this.language = t), (this.support = e), (this.extension = [t, e]);
					}
				}
				const Ma = _.define(),
					qa = _.define({
						combine: (t) => {
							if (!t.length) return "  ";
							let e = t[0];
							if (!e || /\S/.test(e) || Array.from(e).some((t) => t != e[0]))
								throw new Error("Invalid indent unit: " + JSON.stringify(t[0]));
							return e;
						}
					});
				function Ua(t) {
					let e = t.facet(qa);
					return 9 == e.charCodeAt(0) ? t.tabSize * e.length : e.length;
				}
				function ja(t, e) {
					let i = "",
						n = t.tabSize,
						r = t.facet(qa)[0];
					if ("\t" == r) {
						for (; e >= n; ) (i += "\t"), (e -= n);
						r = " ";
					}
					for (let t = 0; t < e; t++) i += r;
					return i;
				}
				function Da(t, e) {
					t instanceof vt && (t = new Ea(t));
					for (let i of t.state.facet(Ma)) {
						let n = i(t, e);
						if (void 0 !== n) return n;
					}
					let i = ka(t.state);
					return i
						? (function (t, e, i) {
								return za(
									e.resolveInner(i).enterUnfinishedNodesBefore(i),
									i,
									t
								);
						  })(t, i, e)
						: null;
				}
				class Ea {
					constructor(t, e = {}) {
						(this.state = t), (this.options = e), (this.unit = Ua(t));
					}
					lineAt(t, e = 1) {
						let i = this.state.doc.lineAt(t),
							{ simulateBreak: n, simulateDoubleBreak: r } = this.options;
						return null != n && n >= i.from && n <= i.to
							? r && n == t
								? { text: "", from: t }
								: (e < 0 ? n < t : n <= t)
								? { text: i.text.slice(n - i.from), from: n }
								: { text: i.text.slice(0, n - i.from), from: i.from }
							: i;
					}
					textAfterPos(t, e = 1) {
						if (
							this.options.simulateDoubleBreak &&
							t == this.options.simulateBreak
						)
							return "";
						let { text: i, from: n } = this.lineAt(t, e);
						return i.slice(t - n, Math.min(i.length, t + 100 - n));
					}
					column(t, e = 1) {
						let { text: i, from: n } = this.lineAt(t, e),
							r = this.countColumn(i, t - n),
							s = this.options.overrideIndentation
								? this.options.overrideIndentation(n)
								: -1;
						return (
							s > -1 && (r += s - this.countColumn(i, i.search(/\S|$/))), r
						);
					}
					countColumn(t, e = t.length) {
						return Mt(t, this.state.tabSize, e);
					}
					lineIndent(t, e = 1) {
						let { text: i, from: n } = this.lineAt(t, e),
							r = this.options.overrideIndentation;
						if (r) {
							let t = r(n);
							if (t > -1) return t;
						}
						return this.countColumn(i, i.search(/\S|$/));
					}
					get simulatedBreak() {
						return this.options.simulateBreak || null;
					}
				}
				const Ga = new ao();
				function Ia(t) {
					let e = t.type.prop(Ga);
					if (e) return e;
					let i,
						n = t.firstChild;
					if (n && (i = n.type.prop(ao.closedBy))) {
						let e = t.lastChild,
							n = e && i.indexOf(e.name) > -1;
						return (t) =>
							Fa(
								t,
								!0,
								1,
								void 0,
								n &&
									!(function (t) {
										return (
											t.pos == t.options.simulateBreak &&
											t.options.simulateDoubleBreak
										);
									})(t)
									? e.from
									: void 0
							);
					}
					return null == t.parent ? Ba : null;
				}
				function za(t, e, i) {
					for (; t; t = t.parent) {
						let n = Ia(t);
						if (n) return n(Na.create(i, e, t));
					}
					return null;
				}
				function Ba() {
					return 0;
				}
				class Na extends Ea {
					constructor(t, e, i) {
						super(t.state, t.options),
							(this.base = t),
							(this.pos = e),
							(this.node = i);
					}
					static create(t, e, i) {
						return new Na(t, e, i);
					}
					get textAfter() {
						return this.textAfterPos(this.pos);
					}
					get baseIndent() {
						let t = this.state.doc.lineAt(this.node.from);
						for (;;) {
							let e = this.node.resolve(t.from);
							for (; e.parent && e.parent.from == e.from; ) e = e.parent;
							if (La(e, this.node)) break;
							t = this.state.doc.lineAt(e.from);
						}
						return this.lineIndent(t.from);
					}
					continue() {
						let t = this.node.parent;
						return t ? za(t, this.pos, this.base) : 0;
					}
				}
				function La(t, e) {
					for (let i = e; i; i = i.parent) if (t == i) return !0;
					return !1;
				}
				function Ha({ closing: t, align: e = !0, units: i = 1 }) {
					return (n) => Fa(n, e, i, t);
				}
				function Fa(t, e, i, n, r) {
					let s = t.textAfter,
						o = s.match(/^\s*/)[0].length,
						a = (n && s.slice(o, o + n.length) == n) || r == t.pos + o,
						l = e
							? (function (t) {
									let e = t.node,
										i = e.childAfter(e.from),
										n = e.lastChild;
									if (!i) return null;
									let r = t.options.simulateBreak,
										s = t.state.doc.lineAt(i.from),
										o = null == r || r <= s.from ? s.to : Math.min(s.to, r);
									for (let t = i.to; ; ) {
										let r = e.childAfter(t);
										if (!r || r == n) return null;
										if (!r.type.isSkipped) return r.from < o ? i : null;
										t = r.to;
									}
							  })(t)
							: null;
					return l
						? a
							? t.column(l.from)
							: t.column(l.to)
						: t.baseIndent + (a ? 0 : t.unit * i);
				}
				function Ja({ except: t, units: e = 1 } = {}) {
					return (i) => {
						let n = t && t.test(i.textAfter);
						return i.baseIndent + (n ? 0 : e * i.unit);
					};
				}
				const Ka = _.define(),
					tl = new ao();
				function el(t) {
					let e = t.firstChild,
						i = t.lastChild;
					return e && e.to < i.from
						? { from: e.to, to: i.type.isError ? t.to : i.from }
						: null;
				}
				function il(t) {
					let e = t.lastChild;
					return e && e.to == t.to && e.type.isError;
				}
				function nl(t, e, i) {
					for (let n of t.facet(Ka)) {
						let r = n(t, e, i);
						if (r) return r;
					}
					return (function (t, e, i) {
						let n = ka(t);
						if (n.length < i) return null;
						let r = null;
						for (let s = n.resolveInner(i, 1); s; s = s.parent) {
							if (s.to <= i || s.from > i) continue;
							if (r && s.from < e) break;
							let o = s.type.prop(tl);
							if (
								o &&
								(s.to < n.length - 50 || n.length == t.doc.length || !il(s))
							) {
								let n = o(s, t);
								n && n.from <= i && n.from >= e && n.to > i && (r = n);
							}
						}
						return r;
					})(t, e, i);
				}
				function rl(t, e) {
					let i = e.mapPos(t.from, 1),
						n = e.mapPos(t.to, -1);
					return i >= n ? void 0 : { from: i, to: n };
				}
				const sl = ht.define({ map: rl }),
					ol = ht.define({ map: rl });
				function al(t) {
					let e = [];
					for (let { head: i } of t.state.selection.ranges)
						e.some((t) => t.from <= i && t.to >= i) || e.push(t.lineBlockAt(i));
					return e;
				}
				const ll = G.define({
					create: () => Ke.none,
					update(t, e) {
						t = t.map(e.changes);
						for (let i of e.effects)
							i.is(sl) && !cl(t, i.value.from, i.value.to)
								? (t = t.update({ add: [gl.range(i.value.from, i.value.to)] }))
								: i.is(ol) &&
								  (t = t.update({
										filter: (t, e) => i.value.from != t || i.value.to != e,
										filterFrom: i.value.from,
										filterTo: i.value.to
								  }));
						if (e.selection) {
							let i = !1,
								{ head: n } = e.selection.main;
							t.between(n, n, (t, e) => {
								t < n && e > n && (i = !0);
							}),
								i &&
									(t = t.update({
										filterFrom: n,
										filterTo: n,
										filter: (t, e) => e <= n || t >= n
									}));
						}
						return t;
					},
					provide: (t) => Zr.decorations.from(t),
					toJSON(t, e) {
						let i = [];
						return (
							t.between(0, e.doc.length, (t, e) => {
								i.push(t, e);
							}),
							i
						);
					},
					fromJSON(t) {
						if (!Array.isArray(t) || t.length % 2)
							throw new RangeError("Invalid JSON for fold state");
						let e = [];
						for (let i = 0; i < t.length; ) {
							let n = t[i++],
								r = t[i++];
							if ("number" != typeof n || "number" != typeof r)
								throw new RangeError("Invalid JSON for fold state");
							e.push(gl.range(n, r));
						}
						return Ke.set(e, !0);
					}
				});
				function hl(t, e, i) {
					var n;
					let r = null;
					return (
						null === (n = t.field(ll, !1)) ||
							void 0 === n ||
							n.between(e, i, (t, e) => {
								(!r || r.from > t) && (r = { from: t, to: e });
							}),
						r
					);
				}
				function cl(t, e, i) {
					let n = !1;
					return (
						t.between(e, e, (t, r) => {
							t == e && r == i && (n = !0);
						}),
						n
					);
				}
				function Ol(t, e) {
					return t.field(ll, !1)
						? e
						: e.concat(
								ht.appendConfig.of(
									(function (t) {
										let e = [ll, ml];
										return t && e.push(pl.of(t)), e;
									})()
								)
						  );
				}
				function ul(t, e, i = !0) {
					let n = t.state.doc.lineAt(e.from).number,
						r = t.state.doc.lineAt(e.to).number;
					return Zr.announce.of(
						`${t.state.phrase(
							i ? "Folded lines" : "Unfolded lines"
						)} ${n} ${t.state.phrase("to")} ${r}.`
					);
				}
				const fl = [
						{
							key: "Ctrl-Shift-[",
							mac: "Cmd-Alt-[",
							run: (t) => {
								for (let e of al(t)) {
									let i = nl(t.state, e.from, e.to);
									if (i)
										return (
											t.dispatch({
												effects: Ol(t.state, [sl.of(i), ul(t, i)])
											}),
											!0
										);
								}
								return !1;
							}
						},
						{
							key: "Ctrl-Shift-]",
							mac: "Cmd-Alt-]",
							run: (t) => {
								if (!t.state.field(ll, !1)) return !1;
								let e = [];
								for (let i of al(t)) {
									let n = hl(t.state, i.from, i.to);
									n && e.push(ol.of(n), ul(t, n, !1));
								}
								return e.length && t.dispatch({ effects: e }), e.length > 0;
							}
						},
						{
							key: "Ctrl-Alt-[",
							run: (t) => {
								let { state: e } = t,
									i = [];
								for (let n = 0; n < e.doc.length; ) {
									let r = t.lineBlockAt(n),
										s = nl(e, r.from, r.to);
									s && i.push(sl.of(s)),
										(n = (s ? t.lineBlockAt(s.to) : r).to + 1);
								}
								return (
									i.length && t.dispatch({ effects: Ol(t.state, i) }),
									!!i.length
								);
							}
						},
						{
							key: "Ctrl-Alt-]",
							run: (t) => {
								let e = t.state.field(ll, !1);
								if (!e || !e.size) return !1;
								let i = [];
								return (
									e.between(0, t.state.doc.length, (t, e) => {
										i.push(ol.of({ from: t, to: e }));
									}),
									t.dispatch({ effects: i }),
									!0
								);
							}
						}
					],
					dl = { placeholderDOM: null, placeholderText: "…" },
					pl = _.define({ combine: (t) => yt(t, dl) });
				const gl = Ke.replace({
						widget: new (class extends Fe {
							toDOM(t) {
								let { state: e } = t,
									i = e.facet(pl),
									n = (e) => {
										let i = t.lineBlockAt(t.posAtDOM(e.target)),
											n = hl(t.state, i.from, i.to);
										n && t.dispatch({ effects: ol.of(n) }), e.preventDefault();
									};
								if (i.placeholderDOM) return i.placeholderDOM(t, n);
								let r = document.createElement("span");
								return (
									(r.textContent = i.placeholderText),
									r.setAttribute("aria-label", e.phrase("folded code")),
									(r.title = e.phrase("unfold")),
									(r.className = "cm-foldPlaceholder"),
									(r.onclick = n),
									r
								);
							}
						})()
					}),
					ml = Zr.baseTheme({
						".cm-foldPlaceholder": {
							backgroundColor: "#eee",
							border: "1px solid #ddd",
							color: "#888",
							borderRadius: ".2em",
							margin: "0 1px",
							padding: "0 1px",
							cursor: "pointer"
						},
						".cm-foldGutter span": { padding: "0 1px", cursor: "pointer" }
					});
				class Sl {
					constructor(t, e) {
						let i;
						function n(t) {
							let e = Et.newName();
							return ((i || (i = Object.create(null)))["." + e] = t), e;
						}
						this.specs = t;
						const r =
								"string" == typeof e.all ? e.all : e.all ? n(e.all) : void 0,
							s = e.scope;
						(this.scope =
							s instanceof xa
								? (t) => t.prop(ya) == s.data
								: s
								? (t) => t == s
								: void 0),
							(this.style = ea(
								t.map((t) => ({
									tag: t.tag,
									class: t.class || n(Object.assign({}, t, { tag: null }))
								})),
								{ all: r }
							).style),
							(this.module = i ? new Et(i) : null),
							(this.themeType = e.themeType);
					}
					static define(t, e) {
						return new Sl(t, e || {});
					}
				}
				const Ql = _.define(),
					vl = _.define({ combine: (t) => (t.length ? [t[0]] : null) });
				function yl(t) {
					let e = t.facet(Ql);
					return e.length ? e : t.facet(vl);
				}
				function bl(t, e) {
					let i,
						n = [xl];
					return (
						t instanceof Sl &&
							(t.module && n.push(Zr.styleModule.of(t.module)),
							(i = t.themeType)),
						(null == e ? void 0 : e.fallback)
							? n.push(vl.of(t))
							: i
							? n.push(
									Ql.computeN([Zr.darkTheme], (e) =>
										e.facet(Zr.darkTheme) == ("dark" == i) ? [t] : []
									)
							  )
							: n.push(Ql.of(t)),
						n
					);
				}
				class wl {
					constructor(t) {
						(this.markCache = Object.create(null)),
							(this.tree = ka(t.state)),
							(this.decorations = this.buildDeco(t, yl(t.state)));
					}
					update(t) {
						let e = ka(t.state),
							i = yl(t.state),
							n = i != yl(t.startState);
						e.length < t.view.viewport.to && !n && e.type == this.tree.type
							? (this.decorations = this.decorations.map(t.changes))
							: (e != this.tree || t.viewportChanged || n) &&
							  ((this.tree = e),
							  (this.decorations = this.buildDeco(t.view, i)));
					}
					buildDeco(t, e) {
						if (!e || !this.tree.length) return Ke.none;
						let i = new kt();
						for (let { from: n, to: r } of t.visibleRanges)
							ia(
								this.tree,
								e,
								(t, e, n) => {
									i.add(
										t,
										e,
										this.markCache[n] ||
											(this.markCache[n] = Ke.mark({ class: n }))
									);
								},
								n,
								r
							);
						return i.finish();
					}
				}
				const xl = z.high(
						$i.fromClass(wl, { decorations: (t) => t.decorations })
					),
					$l =
						(Qa.meta,
						Qa.link,
						Qa.heading,
						Qa.emphasis,
						Qa.strong,
						Qa.strikethrough,
						Qa.keyword,
						Qa.atom,
						Qa.bool,
						Qa.url,
						Qa.contentSeparator,
						Qa.labelName,
						Qa.literal,
						Qa.inserted,
						Qa.string,
						Qa.deleted,
						Qa.regexp,
						Qa.escape,
						Qa.string,
						Qa.variableName,
						Qa.variableName,
						Qa.typeName,
						Qa.namespace,
						Qa.className,
						Qa.variableName,
						Qa.macroName,
						Qa.propertyName,
						Qa.comment,
						Qa.invalid,
						Zr.baseTheme({
							"&.cm-focused .cm-matchingBracket": {
								backgroundColor: "#328c8252"
							},
							"&.cm-focused .cm-nonmatchingBracket": {
								backgroundColor: "#bb555544"
							}
						})),
					Pl = 1e4,
					kl = "()[]{}",
					Xl = _.define({
						combine: (t) =>
							yt(t, {
								afterCursor: !0,
								brackets: kl,
								maxScanDistance: Pl,
								renderMatch: Cl
							})
					}),
					Zl = Ke.mark({ class: "cm-matchingBracket" }),
					Tl = Ke.mark({ class: "cm-nonmatchingBracket" });
				function Cl(t) {
					let e = [],
						i = t.matched ? Zl : Tl;
					return (
						e.push(i.range(t.start.from, t.start.to)),
						t.end && e.push(i.range(t.end.from, t.end.to)),
						e
					);
				}
				const Al = G.define({
						create: () => Ke.none,
						update(t, e) {
							if (!e.docChanged && !e.selection) return t;
							let i = [],
								n = e.state.facet(Xl);
							for (let t of e.state.selection.ranges) {
								if (!t.empty) continue;
								let r =
									_l(e.state, t.head, -1, n) ||
									(t.head > 0 && _l(e.state, t.head - 1, 1, n)) ||
									(n.afterCursor &&
										(_l(e.state, t.head, 1, n) ||
											(t.head < e.state.doc.length &&
												_l(e.state, t.head + 1, -1, n))));
								r && (i = i.concat(n.renderMatch(r, e.state)));
							}
							return Ke.set(i, !0);
						},
						provide: (t) => Zr.decorations.from(t)
					}),
					Vl = [Al, $l],
					Wl = new ao();
				function Yl(t, e, i) {
					let n = t.prop(e < 0 ? ao.openedBy : ao.closedBy);
					if (n) return n;
					if (1 == t.name.length) {
						let n = i.indexOf(t.name);
						if (n > -1 && n % 2 == (e < 0 ? 1 : 0)) return [i[n + e]];
					}
					return null;
				}
				function Rl(t) {
					let e = t.type.prop(Wl);
					return e ? e(t.node) : t;
				}
				function _l(t, e, i, n = {}) {
					let r = n.maxScanDistance || Pl,
						s = n.brackets || kl,
						o = ka(t),
						a = o.resolveInner(e, i);
					for (let t = a; t; t = t.parent) {
						let n = Yl(t.type, i, s);
						if (n && t.from < t.to) {
							let r = Rl(t);
							if (
								r &&
								(i > 0 ? e >= r.from && e < r.to : e > r.from && e <= r.to)
							)
								return Ml(0, 0, i, t, r, n, s);
						}
					}
					return (function (t, e, i, n, r, s, o) {
						let a = i < 0 ? t.sliceDoc(e - 1, e) : t.sliceDoc(e, e + 1),
							l = o.indexOf(a);
						if (l < 0 || (l % 2 == 0) != i > 0) return null;
						let h = { from: i < 0 ? e - 1 : e, to: i > 0 ? e + 1 : e },
							c = t.doc.iterRange(e, i > 0 ? t.doc.length : 0),
							O = 0;
						for (let t = 0; !c.next().done && t <= s; ) {
							let s = c.value;
							i < 0 && (t += s.length);
							let a = e + t * i;
							for (
								let t = i > 0 ? 0 : s.length - 1, e = i > 0 ? s.length : -1;
								t != e;
								t += i
							) {
								let e = o.indexOf(s[t]);
								if (!(e < 0 || n.resolveInner(a + t, 1).type != r))
									if ((e % 2 == 0) == i > 0) O++;
									else {
										if (1 == O)
											return {
												start: h,
												end: { from: a + t, to: a + t + 1 },
												matched: e >> 1 == l >> 1
											};
										O--;
									}
							}
							i > 0 && (t += s.length);
						}
						return c.done ? { start: h, matched: !1 } : null;
					})(t, e, i, o, a.type, r, s);
				}
				function Ml(t, e, i, n, r, s, o) {
					let a = n.parent,
						l = { from: r.from, to: r.to },
						h = 0,
						c = null == a ? void 0 : a.cursor();
					if (c && (i < 0 ? c.childBefore(n.from) : c.childAfter(n.to)))
						do {
							if (i < 0 ? c.to <= n.from : c.from >= n.to) {
								if (0 == h && s.indexOf(c.type.name) > -1 && c.from < c.to) {
									let t = Rl(c);
									return {
										start: l,
										end: t ? { from: t.from, to: t.to } : void 0,
										matched: !0
									};
								}
								if (Yl(c.type, i, o)) h++;
								else if (Yl(c.type, -i, o)) {
									if (0 == h) {
										let t = Rl(c);
										return {
											start: l,
											end:
												t && t.from < t.to
													? { from: t.from, to: t.to }
													: void 0,
											matched: !1
										};
									}
									h--;
								}
							}
						} while (i < 0 ? c.prevSibling() : c.nextSibling());
					return { start: l, matched: !1 };
				}
				const ql = Object.create(null),
					Ul = [co.none],
					jl = [],
					Dl = Object.create(null);
				for (let [t, e] of [
					["variable", "variableName"],
					["variable-2", "variableName.special"],
					["string-2", "string.special"],
					["def", "variableName.definition"],
					["tag", "tagName"],
					["attribute", "attributeName"],
					["type", "typeName"],
					["builtin", "variableName.standard"],
					["qualifier", "modifier"],
					["error", "invalid"],
					["header", "heading"],
					["property", "propertyName"]
				])
					Dl[t] = Gl(ql, e);
				function El(t, e) {
					jl.indexOf(t) > -1 || (jl.push(t), console.warn(e));
				}
				function Gl(t, e) {
					let i = null;
					for (let n of e.split(".")) {
						let e = t[n] || Qa[n];
						e
							? "function" == typeof e
								? i
									? (i = e(i))
									: El(n, `Modifier ${n} used at start of tag`)
								: i
								? El(n, `Tag ${n} used as modifier`)
								: (i = e)
							: El(n, `Unknown highlighting tag ${n}`);
					}
					if (!i) return 0;
					let n = e.replace(/ /g, "_"),
						r = co.define({ id: Ul.length, name: n, props: [Jo({ [n]: i })] });
					return Ul.push(r), r.id;
				}
				function Il(t, e) {
					return ({ state: i, dispatch: n }) => {
						if (i.readOnly) return !1;
						let r = t(e, i);
						return !!r && (n(i.update(r)), !0);
					};
				}
				const zl = Il(Jl, 0),
					Bl = Il(Fl, 0),
					Nl = Il(
						(t, e) =>
							Fl(
								t,
								e,
								(function (t) {
									let e = [];
									for (let i of t.selection.ranges) {
										let n = t.doc.lineAt(i.from),
											r = i.to <= n.to ? n : t.doc.lineAt(i.to),
											s = e.length - 1;
										s >= 0 && e[s].to > n.from
											? (e[s].to = r.to)
											: e.push({ from: n.from, to: r.to });
									}
									return e;
								})(e)
							),
						0
					);
				function Ll(t, e) {
					let i = t.languageDataAt("commentTokens", e);
					return i.length ? i[0] : {};
				}
				const Hl = 50;
				function Fl(t, e, i = e.selection.ranges) {
					let n = i.map((t) => Ll(e, t.from).block);
					if (!n.every((t) => t)) return null;
					let r = i.map((t, i) =>
						(function (t, { open: e, close: i }, n, r) {
							let s,
								o,
								a = t.sliceDoc(n - Hl, n),
								l = t.sliceDoc(r, r + Hl),
								h = /\s*$/.exec(a)[0].length,
								c = /^\s*/.exec(l)[0].length,
								O = a.length - h;
							if (
								a.slice(O - e.length, O) == e &&
								l.slice(c, c + i.length) == i
							)
								return {
									open: { pos: n - h, margin: h && 1 },
									close: { pos: r + c, margin: c && 1 }
								};
							r - n <= 2 * Hl
								? (s = o = t.sliceDoc(n, r))
								: ((s = t.sliceDoc(n, n + Hl)), (o = t.sliceDoc(r - Hl, r)));
							let u = /^\s*/.exec(s)[0].length,
								f = /\s*$/.exec(o)[0].length,
								d = o.length - f - i.length;
							return s.slice(u, u + e.length) == e &&
								o.slice(d, d + i.length) == i
								? {
										open: {
											pos: n + u + e.length,
											margin: /\s/.test(s.charAt(u + e.length)) ? 1 : 0
										},
										close: {
											pos: r - f - i.length,
											margin: /\s/.test(o.charAt(d - 1)) ? 1 : 0
										}
								  }
								: null;
						})(e, n[i], t.from, t.to)
					);
					if (2 != t && !r.every((t) => t))
						return {
							changes: e.changes(
								i.map((t, e) =>
									r[e]
										? []
										: [
												{ from: t.from, insert: n[e].open + " " },
												{ from: t.to, insert: " " + n[e].close }
										  ]
								)
							)
						};
					if (1 != t && r.some((t) => t)) {
						let t = [];
						for (let e, i = 0; i < r.length; i++)
							if ((e = r[i])) {
								let r = n[i],
									{ open: s, close: o } = e;
								t.push(
									{ from: s.pos - r.open.length, to: s.pos + s.margin },
									{ from: o.pos - o.margin, to: o.pos + r.close.length }
								);
							}
						return { changes: t };
					}
					return null;
				}
				function Jl(t, e, i = e.selection.ranges) {
					let n = [],
						r = -1;
					for (let { from: t, to: s } of i) {
						let i = n.length,
							o = 1e9;
						for (let i = t; i <= s; ) {
							let a = e.doc.lineAt(i);
							if (a.from > r && (t == s || s > a.from)) {
								r = a.from;
								let t = Ll(e, a.from).line;
								if (!t) continue;
								let i = /^\s*/.exec(a.text)[0].length,
									s = i == a.length,
									l = a.text.slice(i, i + t.length) == t ? i : -1;
								i < a.text.length && i < o && (o = i),
									n.push({
										line: a,
										comment: l,
										token: t,
										indent: i,
										empty: s,
										single: !1
									});
							}
							i = a.to + 1;
						}
						if (o < 1e9)
							for (let t = i; t < n.length; t++)
								n[t].indent < n[t].line.text.length && (n[t].indent = o);
						n.length == i + 1 && (n[i].single = !0);
					}
					if (
						2 != t &&
						n.some((t) => t.comment < 0 && (!t.empty || t.single))
					) {
						let t = [];
						for (let { line: e, token: i, indent: r, empty: s, single: o } of n)
							(!o && s) || t.push({ from: e.from + r, insert: i + " " });
						let i = e.changes(t);
						return { changes: i, selection: e.selection.map(i, 1) };
					}
					if (1 != t && n.some((t) => t.comment >= 0)) {
						let t = [];
						for (let { line: e, comment: i, token: r } of n)
							if (i >= 0) {
								let n = e.from + i,
									s = n + r.length;
								" " == e.text[s - e.from] && s++, t.push({ from: n, to: s });
							}
						return { changes: t };
					}
					return null;
				}
				const Kl = ot.define(),
					th = ot.define(),
					eh = _.define(),
					ih = _.define({
						combine: (t) =>
							yt(
								t,
								{ minDepth: 100, newGroupDelay: 500, joinToEvent: (t, e) => e },
								{
									minDepth: Math.max,
									newGroupDelay: Math.min,
									joinToEvent: (t, e) => (i, n) => t(i, n) || e(i, n)
								}
							)
					}),
					nh = G.define({
						create: () => Qh.empty,
						update(t, e) {
							let i = e.state.facet(ih),
								n = e.annotation(Kl);
							if (n) {
								let r = e.docChanged
										? W.single(
												(function (t) {
													let e = 0;
													return t.iterChangedRanges((t, i) => (e = i)), e;
												})(e.changes)
										  )
										: void 0,
									s = hh.fromTransaction(e, r),
									o = n.side,
									a = 0 == o ? t.undone : t.done;
								return (
									(a = s
										? ch(a, a.length, i.minDepth, s)
										: dh(a, e.startState.selection)),
									new Qh(0 == o ? n.rest : a, 0 == o ? a : n.rest)
								);
							}
							let r = e.annotation(th);
							if (
								(("full" != r && "before" != r) || (t = t.isolate()),
								!1 === e.annotation(ct.addToHistory))
							)
								return e.changes.empty ? t : t.addMapping(e.changes.desc);
							let s = hh.fromTransaction(e),
								o = e.annotation(ct.time),
								a = e.annotation(ct.userEvent);
							return (
								s
									? (t = t.addChanges(s, o, a, i, e))
									: e.selection &&
									  (t = t.addSelection(
											e.startState.selection,
											o,
											a,
											i.newGroupDelay
									  )),
								("full" != r && "after" != r) || (t = t.isolate()),
								t
							);
						},
						toJSON: (t) => ({
							done: t.done.map((t) => t.toJSON()),
							undone: t.undone.map((t) => t.toJSON())
						}),
						fromJSON: (t) =>
							new Qh(t.done.map(hh.fromJSON), t.undone.map(hh.fromJSON))
					});
				function rh(t, e) {
					return function ({ state: i, dispatch: n }) {
						if (!e && i.readOnly) return !1;
						let r = i.field(nh, !1);
						if (!r) return !1;
						let s = r.pop(t, i, e);
						return !!s && (n(s), !0);
					};
				}
				const sh = rh(0, !1),
					oh = rh(1, !1),
					ah = rh(0, !0),
					lh = rh(1, !0);
				class hh {
					constructor(t, e, i, n, r) {
						(this.changes = t),
							(this.effects = e),
							(this.mapped = i),
							(this.startSelection = n),
							(this.selectionsAfter = r);
					}
					setSelAfter(t) {
						return new hh(
							this.changes,
							this.effects,
							this.mapped,
							this.startSelection,
							t
						);
					}
					toJSON() {
						var t, e, i;
						return {
							changes:
								null === (t = this.changes) || void 0 === t
									? void 0
									: t.toJSON(),
							mapped:
								null === (e = this.mapped) || void 0 === e
									? void 0
									: e.toJSON(),
							startSelection:
								null === (i = this.startSelection) || void 0 === i
									? void 0
									: i.toJSON(),
							selectionsAfter: this.selectionsAfter.map((t) => t.toJSON())
						};
					}
					static fromJSON(t) {
						return new hh(
							t.changes && P.fromJSON(t.changes),
							[],
							t.mapped && $.fromJSON(t.mapped),
							t.startSelection && W.fromJSON(t.startSelection),
							t.selectionsAfter.map(W.fromJSON)
						);
					}
					static fromTransaction(t, e) {
						let i = uh;
						for (let e of t.startState.facet(eh)) {
							let n = e(t);
							n.length && (i = i.concat(n));
						}
						return !i.length && t.changes.empty
							? null
							: new hh(
									t.changes.invert(t.startState.doc),
									i,
									void 0,
									e || t.startState.selection,
									uh
							  );
					}
					static selection(t) {
						return new hh(void 0, uh, void 0, void 0, t);
					}
				}
				function ch(t, e, i, n) {
					let r = e + 1 > i + 20 ? e - i - 1 : 0,
						s = t.slice(r, e);
					return s.push(n), s;
				}
				function Oh(t, e) {
					return t.length ? (e.length ? t.concat(e) : t) : e;
				}
				const uh = [],
					fh = 200;
				function dh(t, e) {
					if (t.length) {
						let i = t[t.length - 1],
							n = i.selectionsAfter.slice(
								Math.max(0, i.selectionsAfter.length - fh)
							);
						return n.length && n[n.length - 1].eq(e)
							? t
							: (n.push(e), ch(t, t.length - 1, 1e9, i.setSelAfter(n)));
					}
					return [hh.selection([e])];
				}
				function ph(t) {
					let e = t[t.length - 1],
						i = t.slice();
					return (
						(i[t.length - 1] = e.setSelAfter(
							e.selectionsAfter.slice(0, e.selectionsAfter.length - 1)
						)),
						i
					);
				}
				function gh(t, e) {
					if (!t.length) return t;
					let i = t.length,
						n = uh;
					for (; i; ) {
						let r = mh(t[i - 1], e, n);
						if ((r.changes && !r.changes.empty) || r.effects.length) {
							let e = t.slice(0, i);
							return (e[i - 1] = r), e;
						}
						(e = r.mapped), i--, (n = r.selectionsAfter);
					}
					return n.length ? [hh.selection(n)] : uh;
				}
				function mh(t, e, i) {
					let n = Oh(
						t.selectionsAfter.length
							? t.selectionsAfter.map((t) => t.map(e))
							: uh,
						i
					);
					if (!t.changes) return hh.selection(n);
					let r = t.changes.map(e),
						s = e.mapDesc(t.changes, !0),
						o = t.mapped ? t.mapped.composeDesc(s) : s;
					return new hh(
						r,
						ht.mapEffects(t.effects, e),
						o,
						t.startSelection.map(s),
						n
					);
				}
				const Sh = /^(input\.type|delete)($|\.)/;
				class Qh {
					constructor(t, e, i = 0, n = void 0) {
						(this.done = t),
							(this.undone = e),
							(this.prevTime = i),
							(this.prevUserEvent = n);
					}
					isolate() {
						return this.prevTime ? new Qh(this.done, this.undone) : this;
					}
					addChanges(t, e, i, n, r) {
						let s = this.done,
							o = s[s.length - 1];
						return (
							(s =
								o &&
								o.changes &&
								!o.changes.empty &&
								t.changes &&
								(!i || Sh.test(i)) &&
								((!o.selectionsAfter.length &&
									e - this.prevTime < n.newGroupDelay &&
									n.joinToEvent(
										r,
										(function (t, e) {
											let i = [],
												n = !1;
											return (
												t.iterChangedRanges((t, e) => i.push(t, e)),
												e.iterChangedRanges((t, e, r, s) => {
													for (let t = 0; t < i.length; ) {
														let e = i[t++],
															o = i[t++];
														s >= e && r <= o && (n = !0);
													}
												}),
												n
											);
										})(o.changes, t.changes)
									)) ||
									"input.type.compose" == i)
									? ch(
											s,
											s.length - 1,
											n.minDepth,
											new hh(
												t.changes.compose(o.changes),
												Oh(t.effects, o.effects),
												o.mapped,
												o.startSelection,
												uh
											)
									  )
									: ch(s, s.length, n.minDepth, t)),
							new Qh(s, uh, e, i)
						);
					}
					addSelection(t, e, i, n) {
						let r = this.done.length
							? this.done[this.done.length - 1].selectionsAfter
							: uh;
						return r.length > 0 &&
							e - this.prevTime < n &&
							i == this.prevUserEvent &&
							i &&
							/^select($|\.)/.test(i) &&
							((s = r[r.length - 1]),
							(o = t),
							s.ranges.length == o.ranges.length &&
								0 ===
									s.ranges.filter((t, e) => t.empty != o.ranges[e].empty)
										.length)
							? this
							: new Qh(dh(this.done, t), this.undone, e, i);
						var s, o;
					}
					addMapping(t) {
						return new Qh(
							gh(this.done, t),
							gh(this.undone, t),
							this.prevTime,
							this.prevUserEvent
						);
					}
					pop(t, e, i) {
						let n = 0 == t ? this.done : this.undone;
						if (0 == n.length) return null;
						let r = n[n.length - 1];
						if (i && r.selectionsAfter.length)
							return e.update({
								selection: r.selectionsAfter[r.selectionsAfter.length - 1],
								annotations: Kl.of({ side: t, rest: ph(n) }),
								userEvent: 0 == t ? "select.undo" : "select.redo",
								scrollIntoView: !0
							});
						if (r.changes) {
							let i = 1 == n.length ? uh : n.slice(0, n.length - 1);
							return (
								r.mapped && (i = gh(i, r.mapped)),
								e.update({
									changes: r.changes,
									selection: r.startSelection,
									effects: r.effects,
									annotations: Kl.of({ side: t, rest: i }),
									filter: !1,
									userEvent: 0 == t ? "undo" : "redo",
									scrollIntoView: !0
								})
							);
						}
						return null;
					}
				}
				Qh.empty = new Qh(uh, uh);
				const vh = [
					{ key: "Mod-z", run: sh, preventDefault: !0 },
					{ key: "Mod-y", mac: "Mod-Shift-z", run: oh, preventDefault: !0 },
					{ linux: "Ctrl-Shift-z", run: oh, preventDefault: !0 },
					{ key: "Mod-u", run: ah, preventDefault: !0 },
					{ key: "Alt-u", mac: "Mod-Shift-u", run: lh, preventDefault: !0 }
				];
				function yh(t, e) {
					return W.create(t.ranges.map(e), t.mainIndex);
				}
				function bh(t, e) {
					return t.update({
						selection: e,
						scrollIntoView: !0,
						userEvent: "select"
					});
				}
				function wh({ state: t, dispatch: e }, i) {
					let n = yh(t.selection, i);
					return !n.eq(t.selection) && (e(bh(t, n)), !0);
				}
				function xh(t, e) {
					return W.cursor(e ? t.to : t.from);
				}
				function $h(t, e) {
					return wh(t, (i) => (i.empty ? t.moveByChar(i, e) : xh(i, e)));
				}
				function Ph(t) {
					return t.textDirectionAt(t.state.selection.main.head) == Yi.LTR;
				}
				const kh = (t) => $h(t, !Ph(t)),
					Xh = (t) => $h(t, Ph(t));
				function Zh(t, e) {
					return wh(t, (i) => (i.empty ? t.moveByGroup(i, e) : xh(i, e)));
				}
				function Th(t, e, i) {
					if (e.type.prop(i)) return !0;
					let n = e.to - e.from;
					return (
						(n && (n > 2 || /[^\s,.;:]/.test(t.sliceDoc(e.from, e.to)))) ||
						e.firstChild
					);
				}
				function Ch(t, e, i) {
					let n,
						r,
						s = ka(t).resolveInner(e.head),
						o = i ? ao.closedBy : ao.openedBy;
					for (let n = e.head; ; ) {
						let e = i ? s.childAfter(n) : s.childBefore(n);
						if (!e) break;
						Th(t, e, o) ? (s = e) : (n = i ? e.to : e.from);
					}
					return (
						(r =
							s.type.prop(o) &&
							(n = i ? _l(t, s.from, 1) : _l(t, s.to, -1)) &&
							n.matched
								? i
									? n.end.to
									: n.end.from
								: i
								? s.to
								: s.from),
						W.cursor(r, i ? -1 : 1)
					);
				}
				function Ah(t, e) {
					return wh(t, (i) => {
						if (!i.empty) return xh(i, e);
						let n = t.moveVertically(i, e);
						return n.head != i.head ? n : t.moveToLineBoundary(i, e);
					});
				}
				const Vh = (t) => Ah(t, !1),
					Wh = (t) => Ah(t, !0);
				function Yh(t) {
					let e,
						i = t.scrollDOM.clientHeight < t.scrollDOM.scrollHeight - 2,
						n = 0,
						r = 0;
					if (i) {
						for (let e of t.state.facet(Zr.scrollMargins)) {
							let i = e(t);
							(null == i ? void 0 : i.top) &&
								(n = Math.max(null == i ? void 0 : i.top, n)),
								(null == i ? void 0 : i.bottom) &&
									(r = Math.max(null == i ? void 0 : i.bottom, r));
						}
						e = t.scrollDOM.clientHeight - n - r;
					} else e = (t.dom.ownerDocument.defaultView || window).innerHeight;
					return {
						marginTop: n,
						marginBottom: r,
						selfScroll: i,
						height: Math.max(t.defaultLineHeight, e - 5)
					};
				}
				function Rh(t, e) {
					let i,
						n = Yh(t),
						{ state: r } = t,
						s = yh(r.selection, (i) =>
							i.empty ? t.moveVertically(i, e, n.height) : xh(i, e)
						);
					if (s.eq(r.selection)) return !1;
					if (n.selfScroll) {
						let e = t.coordsAtPos(r.selection.main.head),
							o = t.scrollDOM.getBoundingClientRect(),
							a = o.top + n.marginTop,
							l = o.bottom - n.marginBottom;
						e &&
							e.top > a &&
							e.bottom < l &&
							(i = Zr.scrollIntoView(s.main.head, {
								y: "start",
								yMargin: e.top - a
							}));
					}
					return t.dispatch(bh(r, s), { effects: i }), !0;
				}
				const _h = (t) => Rh(t, !1),
					Mh = (t) => Rh(t, !0);
				function qh(t, e, i) {
					let n = t.lineBlockAt(e.head),
						r = t.moveToLineBoundary(e, i);
					if (
						(r.head == e.head &&
							r.head != (i ? n.to : n.from) &&
							(r = t.moveToLineBoundary(e, i, !1)),
						!i && r.head == n.from && n.length)
					) {
						let i = /^\s*/.exec(
							t.state.sliceDoc(n.from, Math.min(n.from + 100, n.to))
						)[0].length;
						i && e.head != n.from + i && (r = W.cursor(n.from + i));
					}
					return r;
				}
				function Uh(t, e) {
					let i = yh(t.state.selection, (t) => {
						let i = e(t);
						return W.range(
							t.anchor,
							i.head,
							i.goalColumn,
							i.bidiLevel || void 0
						);
					});
					return !i.eq(t.state.selection) && (t.dispatch(bh(t.state, i)), !0);
				}
				function jh(t, e) {
					return Uh(t, (i) => t.moveByChar(i, e));
				}
				const Dh = (t) => jh(t, !Ph(t)),
					Eh = (t) => jh(t, Ph(t));
				function Gh(t, e) {
					return Uh(t, (i) => t.moveByGroup(i, e));
				}
				function Ih(t, e) {
					return Uh(t, (i) => t.moveVertically(i, e));
				}
				const zh = (t) => Ih(t, !1),
					Bh = (t) => Ih(t, !0);
				function Nh(t, e) {
					return Uh(t, (i) => t.moveVertically(i, e, Yh(t).height));
				}
				const Lh = (t) => Nh(t, !1),
					Hh = (t) => Nh(t, !0),
					Fh = ({ state: t, dispatch: e }) => (e(bh(t, { anchor: 0 })), !0),
					Jh = ({ state: t, dispatch: e }) => (
						e(bh(t, { anchor: t.doc.length })), !0
					),
					Kh = ({ state: t, dispatch: e }) => (
						e(bh(t, { anchor: t.selection.main.anchor, head: 0 })), !0
					),
					tc = ({ state: t, dispatch: e }) => (
						e(bh(t, { anchor: t.selection.main.anchor, head: t.doc.length })),
						!0
					);
				function ec(t, e) {
					if (t.state.readOnly) return !1;
					let i = "delete.selection",
						{ state: n } = t,
						r = n.changeByRange((n) => {
							let { from: r, to: s } = n;
							if (r == s) {
								let n = e(r);
								n < r
									? ((i = "delete.backward"), (n = ic(t, n, !1)))
									: n > r && ((i = "delete.forward"), (n = ic(t, n, !0))),
									(r = Math.min(r, n)),
									(s = Math.max(s, n));
							} else (r = ic(t, r, !1)), (s = ic(t, s, !0));
							return r == s
								? { range: n }
								: { changes: { from: r, to: s }, range: W.cursor(r) };
						});
					return (
						!r.changes.empty &&
						(t.dispatch(
							n.update(r, {
								scrollIntoView: !0,
								userEvent: i,
								effects:
									"delete.selection" == i
										? Zr.announce.of(n.phrase("Selection deleted"))
										: void 0
							})
						),
						!0)
					);
				}
				function ic(t, e, i) {
					if (t instanceof Zr)
						for (let n of t.state.facet(Zr.atomicRanges).map((e) => e(t)))
							n.between(e, e, (t, n) => {
								t < e && n > e && (e = i ? n : t);
							});
					return e;
				}
				const nc = (t, e) =>
						ec(t, (i) => {
							let n,
								r,
								{ state: s } = t,
								o = s.doc.lineAt(i);
							if (
								!e &&
								i > o.from &&
								i < o.from + 200 &&
								!/[^ \t]/.test((n = o.text.slice(0, i - o.from)))
							) {
								if ("\t" == n[n.length - 1]) return i - 1;
								let t = Mt(n, s.tabSize) % Ua(s) || Ua(s);
								for (let e = 0; e < t && " " == n[n.length - 1 - e]; e++) i--;
								r = i;
							} else
								(r = g(o.text, i - o.from, e, e) + o.from),
									r == i &&
										o.number != (e ? s.doc.lines : 1) &&
										(r += e ? 1 : -1);
							return r;
						}),
					rc = (t) => nc(t, !1),
					sc = (t) => nc(t, !0),
					oc = (t, e) =>
						ec(t, (i) => {
							let n = i,
								{ state: r } = t,
								s = r.doc.lineAt(n),
								o = r.charCategorizer(n);
							for (let t = null; ; ) {
								if (n == (e ? s.to : s.from)) {
									n == i &&
										s.number != (e ? r.doc.lines : 1) &&
										(n += e ? 1 : -1);
									break;
								}
								let a = g(s.text, n - s.from, e) + s.from,
									l = s.text.slice(
										Math.min(n, a) - s.from,
										Math.max(n, a) - s.from
									),
									h = o(l);
								if (null != t && h != t) break;
								(" " == l && n == i) || (t = h), (n = a);
							}
							return n;
						}),
					ac = (t) => oc(t, !1),
					lc = (t) =>
						ec(t, (e) => {
							let i = t.lineBlockAt(e).to;
							return e < i ? i : Math.min(t.state.doc.length, e + 1);
						});
				function hc(t) {
					let e = [],
						i = -1;
					for (let n of t.selection.ranges) {
						let r = t.doc.lineAt(n.from),
							s = t.doc.lineAt(n.to);
						if (
							(n.empty || n.to != s.from || (s = t.doc.lineAt(n.to - 1)),
							i >= r.number)
						) {
							let t = e[e.length - 1];
							(t.to = s.to), t.ranges.push(n);
						} else e.push({ from: r.from, to: s.to, ranges: [n] });
						i = s.number + 1;
					}
					return e;
				}
				function cc(t, e, i) {
					if (t.readOnly) return !1;
					let n = [],
						r = [];
					for (let e of hc(t)) {
						if (i ? e.to == t.doc.length : 0 == e.from) continue;
						let s = t.doc.lineAt(i ? e.to + 1 : e.from - 1),
							o = s.length + 1;
						if (i) {
							n.push(
								{ from: e.to, to: s.to },
								{ from: e.from, insert: s.text + t.lineBreak }
							);
							for (let i of e.ranges)
								r.push(
									W.range(
										Math.min(t.doc.length, i.anchor + o),
										Math.min(t.doc.length, i.head + o)
									)
								);
						} else {
							n.push(
								{ from: s.from, to: e.from },
								{ from: e.to, insert: t.lineBreak + s.text }
							);
							for (let t of e.ranges) r.push(W.range(t.anchor - o, t.head - o));
						}
					}
					return (
						!!n.length &&
						(e(
							t.update({
								changes: n,
								scrollIntoView: !0,
								selection: W.create(r, t.selection.mainIndex),
								userEvent: "move.line"
							})
						),
						!0)
					);
				}
				function Oc(t, e, i) {
					if (t.readOnly) return !1;
					let n = [];
					for (let e of hc(t))
						i
							? n.push({
									from: e.from,
									insert: t.doc.slice(e.from, e.to) + t.lineBreak
							  })
							: n.push({
									from: e.to,
									insert: t.lineBreak + t.doc.slice(e.from, e.to)
							  });
					return (
						e(
							t.update({
								changes: n,
								scrollIntoView: !0,
								userEvent: "input.copyline"
							})
						),
						!0
					);
				}
				const uc = fc(!1);
				function fc(t) {
					return ({ state: e, dispatch: i }) => {
						if (e.readOnly) return !1;
						let r = e.changeByRange((i) => {
							let { from: r, to: s } = i,
								o = e.doc.lineAt(r),
								a =
									!t &&
									r == s &&
									(function (t, e) {
										if (/\(\)|\[\]|\{\}/.test(t.sliceDoc(e - 1, e + 1)))
											return { from: e, to: e };
										let i,
											n = ka(t).resolveInner(e),
											r = n.childBefore(e),
											s = n.childAfter(e);
										return r &&
											s &&
											r.to <= e &&
											s.from >= e &&
											(i = r.type.prop(ao.closedBy)) &&
											i.indexOf(s.name) > -1 &&
											t.doc.lineAt(r.to).from == t.doc.lineAt(s.from).from
											? { from: r.to, to: s.from }
											: null;
									})(e, r);
							t && (r = s = (s <= o.to ? o : e.doc.lineAt(s)).to);
							let l = new Ea(e, { simulateBreak: r, simulateDoubleBreak: !!a }),
								h = Da(l, r);
							for (
								null == h && (h = /^\s*/.exec(e.doc.lineAt(r).text)[0].length);
								s < o.to && /\s/.test(o.text[s - o.from]);

							)
								s++;
							a
								? ({ from: r, to: s } = a)
								: r > o.from &&
								  r < o.from + 100 &&
								  !/\S/.test(o.text.slice(0, r)) &&
								  (r = o.from);
							let c = ["", ja(e, h)];
							return (
								a && c.push(ja(e, l.lineIndent(o.from, -1))),
								{
									changes: { from: r, to: s, insert: n.of(c) },
									range: W.cursor(r + 1 + c[1].length)
								}
							);
						});
						return (
							i(e.update(r, { scrollIntoView: !0, userEvent: "input" })), !0
						);
					};
				}
				function dc(t, e) {
					let i = -1;
					return t.changeByRange((n) => {
						let r = [];
						for (let s = n.from; s <= n.to; ) {
							let o = t.doc.lineAt(s);
							o.number > i &&
								(n.empty || n.to > o.from) &&
								(e(o, r, n), (i = o.number)),
								(s = o.to + 1);
						}
						let s = t.changes(r);
						return {
							changes: r,
							range: W.range(s.mapPos(n.anchor, 1), s.mapPos(n.head, 1))
						};
					});
				}
				const pc = ({ state: t, dispatch: e }) =>
						!t.readOnly &&
						(e(
							t.update(
								dc(t, (e, i) => {
									i.push({ from: e.from, insert: t.facet(qa) });
								}),
								{ userEvent: "input.indent" }
							)
						),
						!0),
					gc = ({ state: t, dispatch: e }) =>
						!t.readOnly &&
						(e(
							t.update(
								dc(t, (e, i) => {
									let n = /^\s*/.exec(e.text)[0];
									if (!n) return;
									let r = Mt(n, t.tabSize),
										s = 0,
										o = ja(t, Math.max(0, r - Ua(t)));
									for (
										;
										s < n.length &&
										s < o.length &&
										n.charCodeAt(s) == o.charCodeAt(s);

									)
										s++;
									i.push({
										from: e.from + s,
										to: e.from + n.length,
										insert: o.slice(s)
									});
								}),
								{ userEvent: "delete.dedent" }
							)
						),
						!0),
					mc = [
						{
							key: "Alt-ArrowLeft",
							mac: "Ctrl-ArrowLeft",
							run: (t) => wh(t, (e) => Ch(t.state, e, !Ph(t))),
							shift: (t) => Uh(t, (e) => Ch(t.state, e, !Ph(t)))
						},
						{
							key: "Alt-ArrowRight",
							mac: "Ctrl-ArrowRight",
							run: (t) => wh(t, (e) => Ch(t.state, e, Ph(t))),
							shift: (t) => Uh(t, (e) => Ch(t.state, e, Ph(t)))
						},
						{
							key: "Alt-ArrowUp",
							run: ({ state: t, dispatch: e }) => cc(t, e, !1)
						},
						{
							key: "Shift-Alt-ArrowUp",
							run: ({ state: t, dispatch: e }) => Oc(t, e, !1)
						},
						{
							key: "Alt-ArrowDown",
							run: ({ state: t, dispatch: e }) => cc(t, e, !0)
						},
						{
							key: "Shift-Alt-ArrowDown",
							run: ({ state: t, dispatch: e }) => Oc(t, e, !0)
						},
						{
							key: "Escape",
							run: ({ state: t, dispatch: e }) => {
								let i = t.selection,
									n = null;
								return (
									i.ranges.length > 1
										? (n = W.create([i.main]))
										: i.main.empty || (n = W.create([W.cursor(i.main.head)])),
									!!n && (e(bh(t, n)), !0)
								);
							}
						},
						{ key: "Mod-Enter", run: fc(!0) },
						{
							key: "Alt-l",
							mac: "Ctrl-l",
							run: ({ state: t, dispatch: e }) => {
								let i = hc(t).map(({ from: e, to: i }) =>
									W.range(e, Math.min(i + 1, t.doc.length))
								);
								return (
									e(t.update({ selection: W.create(i), userEvent: "select" })),
									!0
								);
							}
						},
						{
							key: "Mod-i",
							run: ({ state: t, dispatch: e }) => {
								let i = yh(t.selection, (e) => {
									var i;
									let n = ka(t).resolveInner(e.head, 1);
									for (
										;
										!(
											(n.from < e.from && n.to >= e.to) ||
											(n.to > e.to && n.from <= e.from)
										) &&
										(null === (i = n.parent) || void 0 === i
											? void 0
											: i.parent);

									)
										n = n.parent;
									return W.range(n.to, n.from);
								});
								return e(bh(t, i)), !0;
							},
							preventDefault: !0
						},
						{ key: "Mod-[", run: gc },
						{ key: "Mod-]", run: pc },
						{
							key: "Mod-Alt-\\",
							run: ({ state: t, dispatch: e }) => {
								if (t.readOnly) return !1;
								let i = Object.create(null),
									n = new Ea(t, {
										overrideIndentation: (t) => {
											let e = i[t];
											return null == e ? -1 : e;
										}
									}),
									r = dc(t, (e, r, s) => {
										let o = Da(n, e.from);
										if (null == o) return;
										/\S/.test(e.text) || (o = 0);
										let a = /^\s*/.exec(e.text)[0],
											l = ja(t, o);
										(a != l || s.from < e.from + a.length) &&
											((i[e.from] = o),
											r.push({
												from: e.from,
												to: e.from + a.length,
												insert: l
											}));
									});
								return (
									r.changes.empty || e(t.update(r, { userEvent: "indent" })), !0
								);
							}
						},
						{
							key: "Shift-Mod-k",
							run: (t) => {
								if (t.state.readOnly) return !1;
								let { state: e } = t,
									i = e.changes(
										hc(e).map(
											({ from: t, to: i }) => (
												t > 0 ? t-- : i < e.doc.length && i++,
												{ from: t, to: i }
											)
										)
									),
									n = yh(e.selection, (e) => t.moveVertically(e, !0)).map(i);
								return (
									t.dispatch({
										changes: i,
										selection: n,
										scrollIntoView: !0,
										userEvent: "delete.line"
									}),
									!0
								);
							}
						},
						{
							key: "Shift-Mod-\\",
							run: ({ state: t, dispatch: e }) =>
								(function (t, e, i) {
									let n = !1,
										r = yh(t.selection, (e) => {
											let r =
												_l(t, e.head, -1) ||
												_l(t, e.head, 1) ||
												(e.head > 0 && _l(t, e.head - 1, 1)) ||
												(e.head < t.doc.length && _l(t, e.head + 1, -1));
											if (!r || !r.end) return e;
											n = !0;
											let s = r.start.from == e.head ? r.end.to : r.end.from;
											return i ? W.range(e.anchor, s) : W.cursor(s);
										});
									return !!n && (e(bh(t, r)), !0);
								})(t, e, !1)
						},
						{
							key: "Mod-/",
							run: (t) => {
								let { state: e } = t,
									i = e.doc.lineAt(e.selection.main.head),
									n = Ll(t.state, i.from);
								return n.line ? zl(t) : !!n.block && Nl(t);
							}
						},
						{ key: "Alt-A", run: Bl }
					].concat(
						[
							{ key: "ArrowLeft", run: kh, shift: Dh, preventDefault: !0 },
							{
								key: "Mod-ArrowLeft",
								mac: "Alt-ArrowLeft",
								run: (t) => Zh(t, !Ph(t)),
								shift: (t) => Gh(t, !Ph(t)),
								preventDefault: !0
							},
							{
								mac: "Cmd-ArrowLeft",
								run: (t) => wh(t, (e) => qh(t, e, !Ph(t))),
								shift: (t) => Uh(t, (e) => qh(t, e, !Ph(t))),
								preventDefault: !0
							},
							{ key: "ArrowRight", run: Xh, shift: Eh, preventDefault: !0 },
							{
								key: "Mod-ArrowRight",
								mac: "Alt-ArrowRight",
								run: (t) => Zh(t, Ph(t)),
								shift: (t) => Gh(t, Ph(t)),
								preventDefault: !0
							},
							{
								mac: "Cmd-ArrowRight",
								run: (t) => wh(t, (e) => qh(t, e, Ph(t))),
								shift: (t) => Uh(t, (e) => qh(t, e, Ph(t))),
								preventDefault: !0
							},
							{ key: "ArrowUp", run: Vh, shift: zh, preventDefault: !0 },
							{ mac: "Cmd-ArrowUp", run: Fh, shift: Kh },
							{ mac: "Ctrl-ArrowUp", run: _h, shift: Lh },
							{ key: "ArrowDown", run: Wh, shift: Bh, preventDefault: !0 },
							{ mac: "Cmd-ArrowDown", run: Jh, shift: tc },
							{ mac: "Ctrl-ArrowDown", run: Mh, shift: Hh },
							{ key: "PageUp", run: _h, shift: Lh },
							{ key: "PageDown", run: Mh, shift: Hh },
							{
								key: "Home",
								run: (t) => wh(t, (e) => qh(t, e, !1)),
								shift: (t) => Uh(t, (e) => qh(t, e, !1)),
								preventDefault: !0
							},
							{ key: "Mod-Home", run: Fh, shift: Kh },
							{
								key: "End",
								run: (t) => wh(t, (e) => qh(t, e, !0)),
								shift: (t) => Uh(t, (e) => qh(t, e, !0)),
								preventDefault: !0
							},
							{ key: "Mod-End", run: Jh, shift: tc },
							{ key: "Enter", run: uc },
							{
								key: "Mod-a",
								run: ({ state: t, dispatch: e }) => (
									e(
										t.update({
											selection: { anchor: 0, head: t.doc.length },
											userEvent: "select"
										})
									),
									!0
								)
							},
							{ key: "Backspace", run: rc, shift: rc },
							{ key: "Delete", run: sc },
							{ key: "Mod-Backspace", mac: "Alt-Backspace", run: ac },
							{ key: "Mod-Delete", mac: "Alt-Delete", run: (t) => oc(t, !0) },
							{
								mac: "Mod-Backspace",
								run: (t) =>
									ec(t, (e) => {
										let i = t.lineBlockAt(e).from;
										return e > i ? i : Math.max(0, e - 1);
									})
							},
							{ mac: "Mod-Delete", run: lc }
						].concat(
							[
								{ key: "Ctrl-b", run: kh, shift: Dh, preventDefault: !0 },
								{ key: "Ctrl-f", run: Xh, shift: Eh },
								{ key: "Ctrl-p", run: Vh, shift: zh },
								{ key: "Ctrl-n", run: Wh, shift: Bh },
								{
									key: "Ctrl-a",
									run: (t) =>
										wh(t, (e) => W.cursor(t.lineBlockAt(e.head).from, 1)),
									shift: (t) =>
										Uh(t, (e) => W.cursor(t.lineBlockAt(e.head).from))
								},
								{
									key: "Ctrl-e",
									run: (t) =>
										wh(t, (e) => W.cursor(t.lineBlockAt(e.head).to, -1)),
									shift: (t) => Uh(t, (e) => W.cursor(t.lineBlockAt(e.head).to))
								},
								{ key: "Ctrl-d", run: sc },
								{ key: "Ctrl-h", run: rc },
								{ key: "Ctrl-k", run: lc },
								{ key: "Ctrl-Alt-h", run: ac },
								{
									key: "Ctrl-o",
									run: ({ state: t, dispatch: e }) => {
										if (t.readOnly) return !1;
										let i = t.changeByRange((t) => ({
											changes: {
												from: t.from,
												to: t.to,
												insert: n.of(["", ""])
											},
											range: W.cursor(t.from)
										}));
										return (
											e(
												t.update(i, { scrollIntoView: !0, userEvent: "input" })
											),
											!0
										);
									}
								},
								{
									key: "Ctrl-t",
									run: ({ state: t, dispatch: e }) => {
										if (t.readOnly) return !1;
										let i = t.changeByRange((e) => {
											if (!e.empty || 0 == e.from || e.from == t.doc.length)
												return { range: e };
											let i = e.from,
												n = t.doc.lineAt(i),
												r =
													i == n.from
														? i - 1
														: g(n.text, i - n.from, !1) + n.from,
												s =
													i == n.to
														? i + 1
														: g(n.text, i - n.from, !0) + n.from;
											return {
												changes: {
													from: r,
													to: s,
													insert: t.doc.slice(i, s).append(t.doc.slice(r, i))
												},
												range: W.cursor(s)
											};
										});
										return (
											!i.changes.empty &&
											(e(
												t.update(i, {
													scrollIntoView: !0,
													userEvent: "move.character"
												})
											),
											!0)
										);
									}
								},
								{ key: "Ctrl-v", run: Mh }
							].map((t) => ({ mac: t.key, run: t.run, shift: t.shift }))
						)
					);
				function Sc(t) {
					let e = Object.keys(t).join(""),
						i = /\w/.test(e);
					return (
						i && (e = e.replace(/\w/g, "")),
						`[${i ? "\\w" : ""}${e.replace(/[^\w\s]/g, "\\$&")}]`
					);
				}
				function Qc(t) {
					let e = t.map((t) => ("string" == typeof t ? { label: t } : t)),
						[i, n] = e.every((t) => /^\w+$/.test(t.label))
							? [/\w*$/, /\w+$/]
							: (function (t) {
									let e = Object.create(null),
										i = Object.create(null);
									for (let { label: n } of t) {
										e[n[0]] = !0;
										for (let t = 1; t < n.length; t++) i[n[t]] = !0;
									}
									let n = Sc(e) + Sc(i) + "*$";
									return [new RegExp("^" + n), new RegExp(n)];
							  })(e);
					return (t) => {
						let r = t.matchBefore(n);
						return r || t.explicit
							? { from: r ? r.from : t.pos, options: e, validFor: i }
							: null;
					};
				}
				const vc = ot.define(),
					yc = Zr.baseTheme({
						".cm-tooltip.cm-tooltip-autocomplete": {
							"& > ul": {
								fontFamily: "monospace",
								whiteSpace: "nowrap",
								overflow: "hidden auto",
								maxWidth_fallback: "700px",
								maxWidth: "min(700px, 95vw)",
								minWidth: "250px",
								maxHeight: "10em",
								height: "100%",
								listStyle: "none",
								margin: 0,
								padding: 0,
								"& > li": {
									overflowX: "hidden",
									textOverflow: "ellipsis",
									cursor: "pointer",
									padding: "1px 3px",
									lineHeight: 1.2
								}
							}
						},
						"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
							background: "#17c",
							color: "white"
						},
						"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
							background: "#777"
						},
						"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
							background: "#347",
							color: "white"
						},
						"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
							background: "#444"
						},
						".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after":
							{
								content: '"···"',
								opacity: 0.5,
								display: "block",
								textAlign: "center"
							},
						".cm-tooltip.cm-completionInfo": {
							position: "absolute",
							padding: "3px 9px",
							width: "max-content",
							maxWidth: "400px",
							boxSizing: "border-box"
						},
						".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
						".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
						".cm-completionInfo.cm-completionInfo-left-narrow": {
							right: "30px"
						},
						".cm-completionInfo.cm-completionInfo-right-narrow": {
							left: "30px"
						},
						"&light .cm-snippetField": { backgroundColor: "#00000022" },
						"&dark .cm-snippetField": { backgroundColor: "#ffffff22" },
						".cm-snippetFieldPosition": {
							verticalAlign: "text-top",
							width: 0,
							height: "1.15em",
							display: "inline-block",
							margin: "0 -0.7px -.7em",
							borderLeft: "1.4px dotted #888"
						},
						".cm-completionMatchedText": { textDecoration: "underline" },
						".cm-completionDetail": {
							marginLeft: "0.5em",
							fontStyle: "italic"
						},
						".cm-completionIcon": {
							fontSize: "90%",
							width: ".8em",
							display: "inline-block",
							textAlign: "center",
							paddingRight: ".6em",
							opacity: "0.6",
							boxSizing: "content-box"
						},
						".cm-completionIcon-function, .cm-completionIcon-method": {
							"&:after": { content: "'ƒ'" }
						},
						".cm-completionIcon-class": { "&:after": { content: "'○'" } },
						".cm-completionIcon-interface": { "&:after": { content: "'◌'" } },
						".cm-completionIcon-variable": { "&:after": { content: "'𝑥'" } },
						".cm-completionIcon-constant": { "&:after": { content: "'𝐶'" } },
						".cm-completionIcon-type": { "&:after": { content: "'𝑡'" } },
						".cm-completionIcon-enum": { "&:after": { content: "'∪'" } },
						".cm-completionIcon-property": { "&:after": { content: "'□'" } },
						".cm-completionIcon-keyword": { "&:after": { content: "'🔑︎'" } },
						".cm-completionIcon-namespace": { "&:after": { content: "'▢'" } },
						".cm-completionIcon-text": {
							"&:after": {
								content: "'abc'",
								fontSize: "50%",
								verticalAlign: "middle"
							}
						}
					});
				class bc {
					constructor(t, e, i, n) {
						(this.field = t), (this.line = e), (this.from = i), (this.to = n);
					}
				}
				class wc {
					constructor(t, e, i) {
						(this.field = t), (this.from = e), (this.to = i);
					}
					map(t) {
						let e = t.mapPos(this.from, -1, x.TrackDel),
							i = t.mapPos(this.to, 1, x.TrackDel);
						return null == e || null == i ? null : new wc(this.field, e, i);
					}
				}
				class xc {
					constructor(t, e) {
						(this.lines = t), (this.fieldPositions = e);
					}
					instantiate(t, e) {
						let i = [],
							n = [e],
							r = t.doc.lineAt(e),
							s = /^\s*/.exec(r.text)[0];
						for (let r of this.lines) {
							if (i.length) {
								let i = s,
									o = /^\t*/.exec(r)[0].length;
								for (let e = 0; e < o; e++) i += t.facet(qa);
								n.push(e + i.length - o), (r = i + r.slice(o));
							}
							i.push(r), (e += r.length + 1);
						}
						let o = this.fieldPositions.map(
							(t) => new wc(t.field, n[t.line] + t.from, n[t.line] + t.to)
						);
						return { text: i, ranges: o };
					}
					static parse(t) {
						let e,
							i = [],
							n = [],
							r = [];
						for (let s of t.split(/\r\n?|\n/)) {
							for (; (e = /[#$]\{(?:(\d+)(?::([^}]*))?|([^}]*))\}/.exec(s)); ) {
								let t = e[1] ? +e[1] : null,
									o = e[2] || e[3] || "",
									a = -1;
								for (let e = 0; e < i.length; e++)
									(null != t ? i[e].seq == t : o && i[e].name == o) && (a = e);
								if (a < 0) {
									let e = 0;
									for (
										;
										e < i.length &&
										(null == t || (null != i[e].seq && i[e].seq < t));

									)
										e++;
									i.splice(e, 0, { seq: t, name: o }), (a = e);
									for (let t of r) t.field >= a && t.field++;
								}
								r.push(new bc(a, n.length, e.index, e.index + o.length)),
									(s =
										s.slice(0, e.index) + o + s.slice(e.index + e[0].length));
							}
							for (let t; (t = /\\([{}])/.exec(s)); ) {
								s = s.slice(0, t.index) + t[1] + s.slice(t.index + t[0].length);
								for (let e of r)
									e.line == n.length && e.from > t.index && (e.from--, e.to--);
							}
							n.push(s);
						}
						return new xc(n, r);
					}
				}
				let $c = Ke.widget({
						widget: new (class extends Fe {
							toDOM() {
								let t = document.createElement("span");
								return (t.className = "cm-snippetFieldPosition"), t;
							}
							ignoreEvent() {
								return !1;
							}
						})()
					}),
					Pc = Ke.mark({ class: "cm-snippetField" });
				class kc {
					constructor(t, e) {
						(this.ranges = t),
							(this.active = e),
							(this.deco = Ke.set(
								t.map((t) => (t.from == t.to ? $c : Pc).range(t.from, t.to))
							));
					}
					map(t) {
						let e = [];
						for (let i of this.ranges) {
							let n = i.map(t);
							if (!n) return null;
							e.push(n);
						}
						return new kc(e, this.active);
					}
					selectionInsideField(t) {
						return t.ranges.every((t) =>
							this.ranges.some(
								(e) =>
									e.field == this.active && e.from <= t.from && e.to >= t.to
							)
						);
					}
				}
				const Xc = ht.define({ map: (t, e) => t && t.map(e) }),
					Zc = ht.define(),
					Tc = G.define({
						create: () => null,
						update(t, e) {
							for (let i of e.effects) {
								if (i.is(Xc)) return i.value;
								if (i.is(Zc) && t) return new kc(t.ranges, i.value);
							}
							return (
								t && e.docChanged && (t = t.map(e.changes)),
								t &&
									e.selection &&
									!t.selectionInsideField(e.selection) &&
									(t = null),
								t
							);
						},
						provide: (t) =>
							Zr.decorations.from(t, (t) => (t ? t.deco : Ke.none))
					});
				function Cc(t, e) {
					return W.create(
						t.filter((t) => t.field == e).map((t) => W.range(t.from, t.to))
					);
				}
				function Ac(t) {
					let e = xc.parse(t);
					return (t, i, r, s) => {
						let { text: o, ranges: a } = e.instantiate(t.state, r),
							l = {
								changes: { from: r, to: s, insert: n.of(o) },
								scrollIntoView: !0,
								annotations: vc.of(i)
							};
						if ((a.length && (l.selection = Cc(a, 0)), a.length > 1)) {
							let e = new kc(a, 0),
								i = (l.effects = [Xc.of(e)]);
							void 0 === t.state.field(Tc, !1) &&
								i.push(ht.appendConfig.of([Tc, Rc, Mc, yc]));
						}
						t.dispatch(t.state.update(l));
					};
				}
				function Vc(t) {
					return ({ state: e, dispatch: i }) => {
						let n = e.field(Tc, !1);
						if (!n || (t < 0 && 0 == n.active)) return !1;
						let r = n.active + t,
							s = t > 0 && !n.ranges.some((e) => e.field == r + t);
						return (
							i(
								e.update({
									selection: Cc(n.ranges, r),
									effects: Xc.of(s ? null : new kc(n.ranges, r))
								})
							),
							!0
						);
					};
				}
				const Wc = [
						{ key: "Tab", run: Vc(1), shift: Vc(-1) },
						{
							key: "Escape",
							run: ({ state: t, dispatch: e }) =>
								!!t.field(Tc, !1) && (e(t.update({ effects: Xc.of(null) })), !0)
						}
					],
					Yc = _.define({ combine: (t) => (t.length ? t[0] : Wc) }),
					Rc = z.highest(_r.compute([Yc], (t) => t.facet(Yc)));
				function _c(t, e) {
					return Object.assign(Object.assign({}, e), { apply: Ac(t) });
				}
				const Mc = Zr.domEventHandlers({
						mousedown(t, e) {
							let i,
								n = e.state.field(Tc, !1);
							if (
								!n ||
								null == (i = e.posAtCoords({ x: t.clientX, y: t.clientY }))
							)
								return !1;
							let r = n.ranges.find((t) => t.from <= i && t.to >= i);
							return !(
								!r ||
								r.field == n.active ||
								(e.dispatch({
									selection: Cc(n.ranges, r.field),
									effects: Xc.of(
										n.ranges.some((t) => t.field > r.field)
											? new kc(n.ranges, r.field)
											: null
									)
								}),
								0)
							);
						}
					}),
					qc = {
						brackets: ["(", "[", "{", "'", '"'],
						before: ")]}:;>",
						stringPrefixes: []
					},
					Uc = ht.define({
						map(t, e) {
							let i = e.mapPos(t, -1, x.TrackAfter);
							return null == i ? void 0 : i;
						}
					}),
					jc = ht.define({ map: (t, e) => e.mapPos(t) }),
					Dc = new (class extends bt {})();
				(Dc.startSide = 1), (Dc.endSide = -1);
				const Ec = G.define({
						create: () => Pt.empty,
						update(t, e) {
							if (e.selection) {
								let i = e.state.doc.lineAt(e.selection.main.head).from,
									n = e.startState.doc.lineAt(
										e.startState.selection.main.head
									).from;
								i != e.changes.mapPos(n, -1) && (t = Pt.empty);
							}
							t = t.map(e.changes);
							for (let i of e.effects)
								i.is(Uc)
									? (t = t.update({ add: [Dc.range(i.value, i.value + 1)] }))
									: i.is(jc) && (t = t.update({ filter: (t) => t != i.value }));
							return t;
						}
					}),
					Gc = "()[]{}<>";
				function Ic(t) {
					for (let e = 0; e < 8; e += 2)
						if (Gc.charCodeAt(e) == t) return Gc.charAt(e + 1);
					return (function (t) {
						return t <= 65535
							? String.fromCharCode(t)
							: ((t -= 65536),
							  String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
					})(t < 128 ? t : t + 1);
				}
				function zc(t, e) {
					return t.languageDataAt("closeBrackets", e)[0] || qc;
				}
				const Bc =
						"object" == typeof navigator &&
						/Android\b/.test(navigator.userAgent),
					Nc = Zr.inputHandler.of((t, e, i, n) => {
						if ((Bc ? t.composing : t.compositionStarted) || t.state.readOnly)
							return !1;
						let r = t.state.selection.main;
						if (
							n.length > 2 ||
							(2 == n.length && 1 == b(y(n, 0))) ||
							e != r.from ||
							i != r.to
						)
							return !1;
						let s = (function (t, e) {
							let i = zc(t, t.selection.main.head),
								n = i.brackets || qc.brackets;
							for (let r of n) {
								let s = Ic(y(r, 0));
								if (e == r)
									return s == r
										? tO(t, r, n.indexOf(r + r + r) > -1, i)
										: Jc(t, r, s, i.before || qc.before);
								if (e == s && Hc(t, t.selection.main.from)) return Kc(t, 0, s);
							}
							return null;
						})(t.state, n);
						return !!s && (t.dispatch(s), !0);
					}),
					Lc = [
						{
							key: "Backspace",
							run: ({ state: t, dispatch: e }) => {
								if (t.readOnly) return !1;
								let i = zc(t, t.selection.main.head).brackets || qc.brackets,
									n = null,
									r = t.changeByRange((e) => {
										if (e.empty) {
											let n = (function (t, e) {
												let i = t.sliceString(e - 2, e);
												return b(y(i, 0)) == i.length ? i : i.slice(1);
											})(t.doc, e.head);
											for (let r of i)
												if (r == n && Fc(t.doc, e.head) == Ic(y(r, 0)))
													return {
														changes: {
															from: e.head - r.length,
															to: e.head + r.length
														},
														range: W.cursor(e.head - r.length)
													};
										}
										return { range: (n = e) };
									});
								return (
									n ||
										e(
											t.update(r, {
												scrollIntoView: !0,
												userEvent: "delete.backward"
											})
										),
									!n
								);
							}
						}
					];
				function Hc(t, e) {
					let i = !1;
					return (
						t.field(Ec).between(0, t.doc.length, (t) => {
							t == e && (i = !0);
						}),
						i
					);
				}
				function Fc(t, e) {
					let i = t.sliceString(e, e + 2);
					return i.slice(0, b(y(i, 0)));
				}
				function Jc(t, e, i, n) {
					let r = null,
						s = t.changeByRange((s) => {
							if (!s.empty)
								return {
									changes: [
										{ insert: e, from: s.from },
										{ insert: i, from: s.to }
									],
									effects: Uc.of(s.to + e.length),
									range: W.range(s.anchor + e.length, s.head + e.length)
								};
							let o = Fc(t.doc, s.head);
							return !o || /\s/.test(o) || n.indexOf(o) > -1
								? {
										changes: { insert: e + i, from: s.head },
										effects: Uc.of(s.head + e.length),
										range: W.cursor(s.head + e.length)
								  }
								: { range: (r = s) };
						});
					return r
						? null
						: t.update(s, { scrollIntoView: !0, userEvent: "input.type" });
				}
				function Kc(t, e, i) {
					let n = null,
						r = t.selection.ranges.map((e) =>
							e.empty && Fc(t.doc, e.head) == i
								? W.cursor(e.head + i.length)
								: (n = e)
						);
					return n
						? null
						: t.update({
								selection: W.create(r, t.selection.mainIndex),
								scrollIntoView: !0,
								effects: t.selection.ranges.map(({ from: t }) => jc.of(t))
						  });
				}
				function tO(t, e, i, n) {
					let r = n.stringPrefixes || qc.stringPrefixes,
						s = null,
						o = t.changeByRange((n) => {
							if (!n.empty)
								return {
									changes: [
										{ insert: e, from: n.from },
										{ insert: e, from: n.to }
									],
									effects: Uc.of(n.to + e.length),
									range: W.range(n.anchor + e.length, n.head + e.length)
								};
							let o,
								a = n.head,
								l = Fc(t.doc, a);
							if (l == e) {
								if (eO(t, a))
									return {
										changes: { insert: e + e, from: a },
										effects: Uc.of(a + e.length),
										range: W.cursor(a + e.length)
									};
								if (Hc(t, a)) {
									let n = i && t.sliceDoc(a, a + 3 * e.length) == e + e + e;
									return {
										range: W.cursor(a + e.length * (n ? 3 : 1)),
										effects: jc.of(a)
									};
								}
							} else {
								if (
									i &&
									t.sliceDoc(a - 2 * e.length, a) == e + e &&
									(o = iO(t, a - 2 * e.length, r)) > -1 &&
									eO(t, o)
								)
									return {
										changes: { insert: e + e + e + e, from: a },
										effects: Uc.of(a + e.length),
										range: W.cursor(a + e.length)
									};
								if (
									t.charCategorizer(a)(l) != mt.Word &&
									iO(t, a, r) > -1 &&
									!(function (t, e, i, n) {
										let r = ka(t).resolveInner(e, -1),
											s = n.reduce((t, e) => Math.max(t, e.length), 0);
										for (let o = 0; o < 5; o++) {
											let o = t.sliceDoc(
													r.from,
													Math.min(r.to, r.from + i.length + s)
												),
												a = o.indexOf(i);
											if (!a || (a > -1 && n.indexOf(o.slice(0, a)) > -1)) {
												let e = r.firstChild;
												for (
													;
													e && e.from == r.from && e.to - e.from > i.length + a;

												) {
													if (t.sliceDoc(e.to - i.length, e.to) == i) return !1;
													e = e.firstChild;
												}
												return !0;
											}
											let l = r.to == e && r.parent;
											if (!l) break;
											r = l;
										}
										return !1;
									})(t, a, e, r)
								)
									return {
										changes: { insert: e + e, from: a },
										effects: Uc.of(a + e.length),
										range: W.cursor(a + e.length)
									};
							}
							return { range: (s = n) };
						});
					return s
						? null
						: t.update(o, { scrollIntoView: !0, userEvent: "input.type" });
				}
				function eO(t, e) {
					let i = ka(t).resolveInner(e + 1);
					return i.parent && i.from == e;
				}
				function iO(t, e, i) {
					let n = t.charCategorizer(e);
					if (n(t.sliceDoc(e - 1, e)) != mt.Word) return e;
					for (let r of i) {
						let i = e - r.length;
						if (t.sliceDoc(i, e) == r && n(t.sliceDoc(i - 1, i)) != mt.Word)
							return i;
					}
					return -1;
				}
				function nO() {
					var t = arguments[0];
					"string" == typeof t && (t = document.createElement(t));
					var e = 1,
						i = arguments[1];
					if (
						i &&
						"object" == typeof i &&
						null == i.nodeType &&
						!Array.isArray(i)
					) {
						for (var n in i)
							if (Object.prototype.hasOwnProperty.call(i, n)) {
								var r = i[n];
								"string" == typeof r
									? t.setAttribute(n, r)
									: null != r && (t[n] = r);
							}
						e++;
					}
					for (; e < arguments.length; e++) rO(t, arguments[e]);
					return t;
				}
				function rO(t, e) {
					if ("string" == typeof e) t.appendChild(document.createTextNode(e));
					else if (null == e);
					else if (null != e.nodeType) t.appendChild(e);
					else {
						if (!Array.isArray(e))
							throw new RangeError("Unsupported child node: " + e);
						for (var i = 0; i < e.length; i++) rO(t, e[i]);
					}
				}
				class sO {
					constructor(t, e, i) {
						(this.from = t), (this.to = e), (this.diagnostic = i);
					}
				}
				class oO {
					constructor(t, e, i) {
						(this.diagnostics = t), (this.panel = e), (this.selected = i);
					}
					static init(t, e, i) {
						let n = t,
							r = i.facet(vO).markerFilter;
						r && (n = r(n));
						let s = Ke.set(
							n.map((t) =>
								t.from == t.to ||
								(t.from == t.to - 1 && i.doc.lineAt(t.from).to == t.from)
									? Ke.widget({ widget: new wO(t), diagnostic: t }).range(
											t.from
									  )
									: Ke.mark({
											attributes: {
												class: "cm-lintRange cm-lintRange-" + t.severity
											},
											diagnostic: t
									  }).range(t.from, t.to)
							),
							!0
						);
						return new oO(s, e, aO(s));
					}
				}
				function aO(t, e = null, i = 0) {
					let n = null;
					return (
						t.between(i, 1e9, (t, i, { spec: r }) => {
							if (!e || r.diagnostic == e)
								return (n = new sO(t, i, r.diagnostic)), !1;
						}),
						n
					);
				}
				function lO(t, e) {
					return !(
						!t.effects.some((t) => t.is(cO)) && !t.changes.touchesRange(e.pos)
					);
				}
				function hO(t, e) {
					return t.field(fO, !1)
						? e
						: e.concat(
								ht.appendConfig.of([
									fO,
									Zr.decorations.compute([fO], (t) => {
										let { selected: e, panel: i } = t.field(fO);
										return e && i && e.from != e.to
											? Ke.set([dO.range(e.from, e.to)])
											: Ke.none;
									}),
									Vs(pO, { hideOn: lO }),
									kO
								])
						  );
				}
				const cO = ht.define(),
					OO = ht.define(),
					uO = ht.define(),
					fO = G.define({
						create: () => new oO(Ke.none, null, null),
						update(t, e) {
							if (e.docChanged) {
								let i = t.diagnostics.map(e.changes),
									n = null;
								if (t.selected) {
									let r = e.changes.mapPos(t.selected.from, 1);
									n = aO(i, t.selected.diagnostic, r) || aO(i, null, r);
								}
								t = new oO(i, t.panel, n);
							}
							for (let i of e.effects)
								i.is(cO)
									? (t = oO.init(i.value, t.panel, e.state))
									: i.is(OO)
									? (t = new oO(
											t.diagnostics,
											i.value ? $O.open : null,
											t.selected
									  ))
									: i.is(uO) && (t = new oO(t.diagnostics, t.panel, i.value));
							return t;
						},
						provide: (t) => [
							qs.from(t, (t) => t.panel),
							Zr.decorations.from(t, (t) => t.diagnostics)
						]
					}),
					dO = Ke.mark({ class: "cm-lintRange cm-lintRange-active" });
				function pO(t, e, i) {
					let { diagnostics: n } = t.state.field(fO),
						r = [],
						s = 2e8,
						o = 0;
					n.between(
						e - (i < 0 ? 1 : 0),
						e + (i > 0 ? 1 : 0),
						(t, n, { spec: a }) => {
							e >= t &&
								e <= n &&
								(t == n || ((e > t || i > 0) && (e < n || i < 0))) &&
								(r.push(a.diagnostic),
								(s = Math.min(t, s)),
								(o = Math.max(n, o)));
						}
					);
					let a = t.state.facet(vO).tooltipFilter;
					return (
						a && (r = a(r)),
						r.length
							? {
									pos: s,
									end: o,
									above: t.state.doc.lineAt(s).to < o,
									create: () => ({ dom: gO(t, r) })
							  }
							: null
					);
				}
				function gO(t, e) {
					return nO(
						"ul",
						{ class: "cm-tooltip-lint" },
						e.map((e) => bO(t, e, !1))
					);
				}
				const mO = (t) => {
						let e = t.state.field(fO, !1);
						return !(!e || !e.panel || (t.dispatch({ effects: OO.of(!1) }), 0));
					},
					SO = [
						{
							key: "Mod-Shift-m",
							run: (t) => {
								let e = t.state.field(fO, !1);
								(e && e.panel) ||
									t.dispatch({ effects: hO(t.state, [OO.of(!0)]) });
								let i = (function (t, e) {
									let i = t.plugin(Rs),
										n = i ? i.specs.indexOf(e) : -1;
									return n > -1 ? i.panels[n] : null;
								})(t, $O.open);
								return (
									i && i.dom.querySelector(".cm-panel-lint ul").focus(), !0
								);
							},
							preventDefault: !0
						},
						{
							key: "F8",
							run: (t) => {
								let e = t.state.field(fO, !1);
								if (!e) return !1;
								let i = t.state.selection.main,
									n = e.diagnostics.iter(i.to + 1);
								return !(
									(!n.value &&
										((n = e.diagnostics.iter(0)),
										!n.value || (n.from == i.from && n.to == i.to))) ||
									(t.dispatch({
										selection: { anchor: n.from, head: n.to },
										scrollIntoView: !0
									}),
									0)
								);
							}
						}
					],
					QO = $i.fromClass(
						class {
							constructor(t) {
								(this.view = t), (this.timeout = -1), (this.set = !0);
								let { delay: e } = t.state.facet(vO);
								(this.lintTime = Date.now() + e),
									(this.run = this.run.bind(this)),
									(this.timeout = setTimeout(this.run, e));
							}
							run() {
								let t = Date.now();
								if (t < this.lintTime - 10)
									setTimeout(this.run, this.lintTime - t);
								else {
									this.set = !1;
									let { state: t } = this.view,
										{ sources: e } = t.facet(vO);
									Promise.all(e.map((t) => Promise.resolve(t(this.view)))).then(
										(e) => {
											let i = e.reduce((t, e) => t.concat(e));
											this.view.state.doc == t.doc &&
												this.view.dispatch(
													(function (t, e) {
														return { effects: hO(t, [cO.of(e)]) };
													})(this.view.state, i)
												);
										},
										(t) => {
											yi(this.view.state, t);
										}
									);
								}
							}
							update(t) {
								let e = t.state.facet(vO);
								(t.docChanged || e != t.startState.facet(vO)) &&
									((this.lintTime = Date.now() + e.delay),
									this.set ||
										((this.set = !0),
										(this.timeout = setTimeout(this.run, e.delay))));
							}
							force() {
								this.set && ((this.lintTime = Date.now()), this.run());
							}
							destroy() {
								clearTimeout(this.timeout);
							}
						}
					),
					vO = _.define({
						combine: (t) =>
							Object.assign(
								{ sources: t.map((t) => t.source) },
								yt(
									t.map((t) => t.config),
									{ delay: 750, markerFilter: null, tooltipFilter: null }
								)
							),
						enables: QO
					});
				function yO(t) {
					let e = [];
					if (t)
						t: for (let { name: i } of t) {
							for (let t = 0; t < i.length; t++) {
								let n = i[t];
								if (
									/[a-zA-Z]/.test(n) &&
									!e.some((t) => t.toLowerCase() == n.toLowerCase())
								) {
									e.push(n);
									continue t;
								}
							}
							e.push("");
						}
					return e;
				}
				function bO(t, e, i) {
					var n;
					let r = i ? yO(e.actions) : [];
					return nO(
						"li",
						{ class: "cm-diagnostic cm-diagnostic-" + e.severity },
						nO(
							"span",
							{ class: "cm-diagnosticText" },
							e.renderMessage ? e.renderMessage() : e.message
						),
						null === (n = e.actions) || void 0 === n
							? void 0
							: n.map((i, n) => {
									let s = !1,
										o = (n) => {
											if ((n.preventDefault(), s)) return;
											s = !0;
											let r = aO(t.state.field(fO).diagnostics, e);
											r && i.apply(t, r.from, r.to);
										},
										{ name: a } = i,
										l = r[n] ? a.indexOf(r[n]) : -1,
										h =
											l < 0
												? a
												: [
														a.slice(0, l),
														nO("u", a.slice(l, l + 1)),
														a.slice(l + 1)
												  ];
									return nO(
										"button",
										{
											type: "button",
											class: "cm-diagnosticAction",
											onclick: o,
											onmousedown: o,
											"aria-label": ` Action: ${a}${
												l < 0 ? "" : ` (access key "${r[n]})"`
											}.`
										},
										h
									);
							  }),
						e.source && nO("div", { class: "cm-diagnosticSource" }, e.source)
					);
				}
				class wO extends Fe {
					constructor(t) {
						super(), (this.diagnostic = t);
					}
					eq(t) {
						return t.diagnostic == this.diagnostic;
					}
					toDOM() {
						return nO("span", {
							class: "cm-lintPoint cm-lintPoint-" + this.diagnostic.severity
						});
					}
				}
				class xO {
					constructor(t, e) {
						(this.diagnostic = e),
							(this.id =
								"item_" + Math.floor(4294967295 * Math.random()).toString(16)),
							(this.dom = bO(t, e, !0)),
							(this.dom.id = this.id),
							this.dom.setAttribute("role", "option");
					}
				}
				class $O {
					constructor(t) {
						(this.view = t),
							(this.items = []),
							(this.list = nO("ul", {
								tabIndex: 0,
								role: "listbox",
								"aria-label": this.view.state.phrase("Diagnostics"),
								onkeydown: (e) => {
									if (27 == e.keyCode) mO(this.view), this.view.focus();
									else if (38 == e.keyCode || 33 == e.keyCode)
										this.moveSelection(
											(this.selectedIndex - 1 + this.items.length) %
												this.items.length
										);
									else if (40 == e.keyCode || 34 == e.keyCode)
										this.moveSelection(
											(this.selectedIndex + 1) % this.items.length
										);
									else if (36 == e.keyCode) this.moveSelection(0);
									else if (35 == e.keyCode)
										this.moveSelection(this.items.length - 1);
									else if (13 == e.keyCode) this.view.focus();
									else {
										if (
											!(
												e.keyCode >= 65 &&
												e.keyCode <= 90 &&
												this.selectedIndex >= 0
											)
										)
											return;
										{
											let { diagnostic: i } = this.items[this.selectedIndex],
												n = yO(i.actions);
											for (let r = 0; r < n.length; r++)
												if (n[r].toUpperCase().charCodeAt(0) == e.keyCode) {
													let e = aO(this.view.state.field(fO).diagnostics, i);
													e && i.actions[r].apply(t, e.from, e.to);
												}
										}
									}
									e.preventDefault();
								},
								onclick: (t) => {
									for (let e = 0; e < this.items.length; e++)
										this.items[e].dom.contains(t.target) &&
											this.moveSelection(e);
								}
							})),
							(this.dom = nO(
								"div",
								{ class: "cm-panel-lint" },
								this.list,
								nO(
									"button",
									{
										type: "button",
										name: "close",
										"aria-label": this.view.state.phrase("close"),
										onclick: () => mO(this.view)
									},
									"×"
								)
							)),
							this.update();
					}
					get selectedIndex() {
						let t = this.view.state.field(fO).selected;
						if (!t) return -1;
						for (let e = 0; e < this.items.length; e++)
							if (this.items[e].diagnostic == t.diagnostic) return e;
						return -1;
					}
					update() {
						let { diagnostics: t, selected: e } = this.view.state.field(fO),
							i = 0,
							n = !1,
							r = null;
						for (
							t.between(0, this.view.state.doc.length, (t, s, { spec: o }) => {
								let a,
									l = -1;
								for (let t = i; t < this.items.length; t++)
									if (this.items[t].diagnostic == o.diagnostic) {
										l = t;
										break;
									}
								l < 0
									? ((a = new xO(this.view, o.diagnostic)),
									  this.items.splice(i, 0, a),
									  (n = !0))
									: ((a = this.items[l]),
									  l > i && (this.items.splice(i, l - i), (n = !0))),
									e && a.diagnostic == e.diagnostic
										? a.dom.hasAttribute("aria-selected") ||
										  (a.dom.setAttribute("aria-selected", "true"), (r = a))
										: a.dom.hasAttribute("aria-selected") &&
										  a.dom.removeAttribute("aria-selected"),
									i++;
							});
							i < this.items.length &&
							!(1 == this.items.length && this.items[0].diagnostic.from < 0);

						)
							(n = !0), this.items.pop();
						0 == this.items.length &&
							(this.items.push(
								new xO(this.view, {
									from: -1,
									to: -1,
									severity: "info",
									message: this.view.state.phrase("No diagnostics")
								})
							),
							(n = !0)),
							r
								? (this.list.setAttribute("aria-activedescendant", r.id),
								  this.view.requestMeasure({
										key: this,
										read: () => ({
											sel: r.dom.getBoundingClientRect(),
											panel: this.list.getBoundingClientRect()
										}),
										write: ({ sel: t, panel: e }) => {
											t.top < e.top
												? (this.list.scrollTop -= e.top - t.top)
												: t.bottom > e.bottom &&
												  (this.list.scrollTop += t.bottom - e.bottom);
										}
								  }))
								: this.selectedIndex < 0 &&
								  this.list.removeAttribute("aria-activedescendant"),
							n && this.sync();
					}
					sync() {
						let t = this.list.firstChild;
						function e() {
							let e = t;
							(t = e.nextSibling), e.remove();
						}
						for (let i of this.items)
							if (i.dom.parentNode == this.list) {
								for (; t != i.dom; ) e();
								t = i.dom.nextSibling;
							} else this.list.insertBefore(i.dom, t);
						for (; t; ) e();
					}
					moveSelection(t) {
						if (this.selectedIndex < 0) return;
						let e = aO(
							this.view.state.field(fO).diagnostics,
							this.items[t].diagnostic
						);
						e &&
							this.view.dispatch({
								selection: { anchor: e.from, head: e.to },
								scrollIntoView: !0,
								effects: uO.of(e)
							});
					}
					static open(t) {
						return new $O(t);
					}
				}
				function PO(t) {
					return (function (t, e = 'viewBox="0 0 40 40"') {
						return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${e}>${encodeURIComponent(
							t
						)}</svg>')`;
					})(
						`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${t}" fill="none" stroke-width=".7"/>`,
						'width="6" height="3"'
					);
				}
				const kO = Zr.baseTheme({
					".cm-diagnostic": {
						padding: "3px 6px 3px 8px",
						marginLeft: "-1px",
						display: "block",
						whiteSpace: "pre-wrap"
					},
					".cm-diagnostic-error": { borderLeft: "5px solid #d11" },
					".cm-diagnostic-warning": { borderLeft: "5px solid orange" },
					".cm-diagnostic-info": { borderLeft: "5px solid #999" },
					".cm-diagnosticAction": {
						font: "inherit",
						border: "none",
						padding: "2px 4px",
						backgroundColor: "#444",
						color: "white",
						borderRadius: "3px",
						marginLeft: "8px",
						cursor: "pointer"
					},
					".cm-diagnosticSource": { fontSize: "70%", opacity: 0.7 },
					".cm-lintRange": {
						backgroundPosition: "left bottom",
						backgroundRepeat: "repeat-x",
						paddingBottom: "0.7px"
					},
					".cm-lintRange-error": { backgroundImage: PO("#d11") },
					".cm-lintRange-warning": { backgroundImage: PO("orange") },
					".cm-lintRange-info": { backgroundImage: PO("#999") },
					".cm-lintRange-active": { backgroundColor: "#ffdd9980" },
					".cm-tooltip-lint": { padding: 0, margin: 0 },
					".cm-lintPoint": {
						position: "relative",
						"&:after": {
							content: '""',
							position: "absolute",
							bottom: 0,
							left: "-2px",
							borderLeft: "3px solid transparent",
							borderRight: "3px solid transparent",
							borderBottom: "4px solid #d11"
						}
					},
					".cm-lintPoint-warning": {
						"&:after": { borderBottomColor: "orange" }
					},
					".cm-lintPoint-info": { "&:after": { borderBottomColor: "#999" } },
					".cm-panel.cm-panel-lint": {
						position: "relative",
						"& ul": {
							maxHeight: "100px",
							overflowY: "auto",
							"& [aria-selected]": {
								backgroundColor: "#ddd",
								"& u": { textDecoration: "underline" }
							},
							"&:focus [aria-selected]": {
								background_fallback: "#bdf",
								backgroundColor: "Highlight",
								color_fallback: "white",
								color: "HighlightText"
							},
							"& u": { textDecoration: "none" },
							padding: 0,
							margin: 0
						},
						"& [name=close]": {
							position: "absolute",
							top: "0",
							right: "2px",
							background: "inherit",
							border: "none",
							font: "inherit",
							padding: 0,
							margin: 0
						}
					}
				});
				class XO {
					constructor(t, e, i, n, r, s, o, a, l, h = 0, c) {
						(this.p = t),
							(this.stack = e),
							(this.state = i),
							(this.reducePos = n),
							(this.pos = r),
							(this.score = s),
							(this.buffer = o),
							(this.bufferBase = a),
							(this.curContext = l),
							(this.lookAhead = h),
							(this.parent = c);
					}
					toString() {
						return `[${this.stack
							.filter((t, e) => e % 3 == 0)
							.concat(this.state)}]@${this.pos}${
							this.score ? "!" + this.score : ""
						}`;
					}
					static start(t, e, i = 0) {
						let n = t.parser.context;
						return new XO(
							t,
							[],
							e,
							i,
							i,
							0,
							[],
							0,
							n ? new ZO(n, n.start) : null,
							0,
							null
						);
					}
					get context() {
						return this.curContext ? this.curContext.context : null;
					}
					pushState(t, e) {
						this.stack.push(
							this.state,
							e,
							this.bufferBase + this.buffer.length
						),
							(this.state = t);
					}
					reduce(t) {
						var e;
						let i = t >> 19,
							n = 65535 & t,
							{ parser: r } = this.p,
							s = r.dynamicPrecedence(n);
						if ((s && (this.score += s), 0 == i))
							return (
								this.pushState(r.getGoto(this.state, n, !0), this.reducePos),
								n < r.minRepeatTerm &&
									this.storeNode(n, this.reducePos, this.reducePos, 4, !0),
								void this.reduceContext(n, this.reducePos)
							);
						let o = this.stack.length - 3 * (i - 1) - (262144 & t ? 6 : 0),
							a = o ? this.stack[o - 2] : this.p.ranges[0].from,
							l = this.reducePos - a;
						l >= 2e3 &&
							!(null === (e = this.p.parser.nodeSet.types[n]) || void 0 === e
								? void 0
								: e.isAnonymous) &&
							(a == this.p.lastBigReductionStart
								? (this.p.bigReductionCount++,
								  (this.p.lastBigReductionSize = l))
								: this.p.lastBigReductionSize < l &&
								  ((this.p.bigReductionCount = 1),
								  (this.p.lastBigReductionStart = a),
								  (this.p.lastBigReductionSize = l)));
						let h = o ? this.stack[o - 1] : 0,
							c = this.bufferBase + this.buffer.length - h;
						if (n < r.minRepeatTerm || 131072 & t) {
							let t = r.stateFlag(this.state, 1) ? this.pos : this.reducePos;
							this.storeNode(n, a, t, c + 4, !0);
						}
						if (262144 & t) this.state = this.stack[o];
						else {
							let t = this.stack[o - 3];
							this.state = r.getGoto(t, n, !0);
						}
						for (; this.stack.length > o; ) this.stack.pop();
						this.reduceContext(n, a);
					}
					storeNode(t, e, i, n = 4, r = !1) {
						if (
							0 == t &&
							(!this.stack.length ||
								this.stack[this.stack.length - 1] <
									this.buffer.length + this.bufferBase)
						) {
							let t = this,
								n = this.buffer.length;
							if (
								(0 == n &&
									t.parent &&
									((n = t.bufferBase - t.parent.bufferBase), (t = t.parent)),
								n > 0 && 0 == t.buffer[n - 4] && t.buffer[n - 1] > -1)
							) {
								if (e == i) return;
								if (t.buffer[n - 2] >= e) return void (t.buffer[n - 2] = i);
							}
						}
						if (r && this.pos != i) {
							let r = this.buffer.length;
							if (r > 0 && 0 != this.buffer[r - 4])
								for (; r > 0 && this.buffer[r - 2] > i; )
									(this.buffer[r] = this.buffer[r - 4]),
										(this.buffer[r + 1] = this.buffer[r - 3]),
										(this.buffer[r + 2] = this.buffer[r - 2]),
										(this.buffer[r + 3] = this.buffer[r - 1]),
										(r -= 4),
										n > 4 && (n -= 4);
							(this.buffer[r] = t),
								(this.buffer[r + 1] = e),
								(this.buffer[r + 2] = i),
								(this.buffer[r + 3] = n);
						} else this.buffer.push(t, e, i, n);
					}
					shift(t, e, i) {
						let n = this.pos;
						if (131072 & t) this.pushState(65535 & t, this.pos);
						else if (0 == (262144 & t)) {
							let r = t,
								{ parser: s } = this.p;
							(i > this.pos || e <= s.maxNode) &&
								((this.pos = i), s.stateFlag(r, 1) || (this.reducePos = i)),
								this.pushState(r, n),
								this.shiftContext(e, n),
								e <= s.maxNode && this.buffer.push(e, n, i, 4);
						} else
							(this.pos = i),
								this.shiftContext(e, n),
								e <= this.p.parser.maxNode && this.buffer.push(e, n, i, 4);
					}
					apply(t, e, i) {
						65536 & t ? this.reduce(t) : this.shift(t, e, i);
					}
					useNode(t, e) {
						let i = this.p.reused.length - 1;
						(i < 0 || this.p.reused[i] != t) && (this.p.reused.push(t), i++);
						let n = this.pos;
						(this.reducePos = this.pos = n + t.length),
							this.pushState(e, n),
							this.buffer.push(i, n, this.reducePos, -1),
							this.curContext &&
								this.updateContext(
									this.curContext.tracker.reuse(
										this.curContext.context,
										t,
										this,
										this.p.stream.reset(this.pos - t.length)
									)
								);
					}
					split() {
						let t = this,
							e = t.buffer.length;
						for (; e > 0 && t.buffer[e - 2] > t.reducePos; ) e -= 4;
						let i = t.buffer.slice(e),
							n = t.bufferBase + e;
						for (; t && n == t.bufferBase; ) t = t.parent;
						return new XO(
							this.p,
							this.stack.slice(),
							this.state,
							this.reducePos,
							this.pos,
							this.score,
							i,
							n,
							this.curContext,
							this.lookAhead,
							t
						);
					}
					recoverByDelete(t, e) {
						let i = t <= this.p.parser.maxNode;
						i && this.storeNode(t, this.pos, e, 4),
							this.storeNode(0, this.pos, e, i ? 8 : 4),
							(this.pos = this.reducePos = e),
							(this.score -= 190);
					}
					canShift(t) {
						for (let e = new CO(this); ; ) {
							let i =
								this.p.parser.stateSlot(e.state, 4) ||
								this.p.parser.hasAction(e.state, t);
							if (0 == i) return !1;
							if (0 == (65536 & i)) return !0;
							e.reduce(i);
						}
					}
					recoverByInsert(t) {
						if (this.stack.length >= 300) return [];
						let e = this.p.parser.nextStates(this.state);
						if (e.length > 8 || this.stack.length >= 120) {
							let i = [];
							for (let n, r = 0; r < e.length; r += 2)
								(n = e[r + 1]) != this.state &&
									this.p.parser.hasAction(n, t) &&
									i.push(e[r], n);
							if (this.stack.length < 120)
								for (let t = 0; i.length < 8 && t < e.length; t += 2) {
									let n = e[t + 1];
									i.some((t, e) => 1 & e && t == n) || i.push(e[t], n);
								}
							e = i;
						}
						let i = [];
						for (let t = 0; t < e.length && i.length < 4; t += 2) {
							let n = e[t + 1];
							if (n == this.state) continue;
							let r = this.split();
							r.pushState(n, this.pos),
								r.storeNode(0, r.pos, r.pos, 4, !0),
								r.shiftContext(e[t], this.pos),
								(r.score -= 200),
								i.push(r);
						}
						return i;
					}
					forceReduce() {
						let t = this.p.parser.stateSlot(this.state, 5);
						if (0 == (65536 & t)) return !1;
						let { parser: e } = this.p;
						if (!e.validAction(this.state, t)) {
							let i = t >> 19,
								n = 65535 & t,
								r = this.stack.length - 3 * i;
							if (r < 0 || e.getGoto(this.stack[r], n, !1) < 0) return !1;
							this.storeNode(0, this.reducePos, this.reducePos, 4, !0),
								(this.score -= 100);
						}
						return (this.reducePos = this.pos), this.reduce(t), !0;
					}
					forceAll() {
						for (; !this.p.parser.stateFlag(this.state, 2); )
							if (!this.forceReduce()) {
								this.storeNode(0, this.pos, this.pos, 4, !0);
								break;
							}
						return this;
					}
					get deadEnd() {
						if (3 != this.stack.length) return !1;
						let { parser: t } = this.p;
						return (
							65535 == t.data[t.stateSlot(this.state, 1)] &&
							!t.stateSlot(this.state, 4)
						);
					}
					restart() {
						(this.state = this.stack[0]), (this.stack.length = 0);
					}
					sameState(t) {
						if (this.state != t.state || this.stack.length != t.stack.length)
							return !1;
						for (let e = 0; e < this.stack.length; e += 3)
							if (this.stack[e] != t.stack[e]) return !1;
						return !0;
					}
					get parser() {
						return this.p.parser;
					}
					dialectEnabled(t) {
						return this.p.parser.dialect.flags[t];
					}
					shiftContext(t, e) {
						this.curContext &&
							this.updateContext(
								this.curContext.tracker.shift(
									this.curContext.context,
									t,
									this,
									this.p.stream.reset(e)
								)
							);
					}
					reduceContext(t, e) {
						this.curContext &&
							this.updateContext(
								this.curContext.tracker.reduce(
									this.curContext.context,
									t,
									this,
									this.p.stream.reset(e)
								)
							);
					}
					emitContext() {
						let t = this.buffer.length - 1;
						(t < 0 || -3 != this.buffer[t]) &&
							this.buffer.push(
								this.curContext.hash,
								this.reducePos,
								this.reducePos,
								-3
							);
					}
					emitLookAhead() {
						let t = this.buffer.length - 1;
						(t < 0 || -4 != this.buffer[t]) &&
							this.buffer.push(
								this.lookAhead,
								this.reducePos,
								this.reducePos,
								-4
							);
					}
					updateContext(t) {
						if (t != this.curContext.context) {
							let e = new ZO(this.curContext.tracker, t);
							e.hash != this.curContext.hash && this.emitContext(),
								(this.curContext = e);
						}
					}
					setLookAhead(t) {
						t > this.lookAhead && (this.emitLookAhead(), (this.lookAhead = t));
					}
					close() {
						this.curContext &&
							this.curContext.tracker.strict &&
							this.emitContext(),
							this.lookAhead > 0 && this.emitLookAhead();
					}
				}
				class ZO {
					constructor(t, e) {
						(this.tracker = t),
							(this.context = e),
							(this.hash = t.strict ? t.hash(e) : 0);
					}
				}
				var TO;
				!(function (t) {
					(t[(t.Insert = 200)] = "Insert"),
						(t[(t.Delete = 190)] = "Delete"),
						(t[(t.Reduce = 100)] = "Reduce"),
						(t[(t.MaxNext = 4)] = "MaxNext"),
						(t[(t.MaxInsertStackDepth = 300)] = "MaxInsertStackDepth"),
						(t[(t.DampenInsertStackDepth = 120)] = "DampenInsertStackDepth"),
						(t[(t.MinBigReduction = 2e3)] = "MinBigReduction");
				})(TO || (TO = {}));
				class CO {
					constructor(t) {
						(this.start = t),
							(this.state = t.state),
							(this.stack = t.stack),
							(this.base = this.stack.length);
					}
					reduce(t) {
						let e = 65535 & t,
							i = t >> 19;
						0 == i
							? (this.stack == this.start.stack &&
									(this.stack = this.stack.slice()),
							  this.stack.push(this.state, 0, 0),
							  (this.base += 3))
							: (this.base -= 3 * (i - 1));
						let n = this.start.p.parser.getGoto(
							this.stack[this.base - 3],
							e,
							!0
						);
						this.state = n;
					}
				}
				class AO {
					constructor(t, e, i) {
						(this.stack = t),
							(this.pos = e),
							(this.index = i),
							(this.buffer = t.buffer),
							0 == this.index && this.maybeNext();
					}
					static create(t, e = t.bufferBase + t.buffer.length) {
						return new AO(t, e, e - t.bufferBase);
					}
					maybeNext() {
						let t = this.stack.parent;
						null != t &&
							((this.index = this.stack.bufferBase - t.bufferBase),
							(this.stack = t),
							(this.buffer = t.buffer));
					}
					get id() {
						return this.buffer[this.index - 4];
					}
					get start() {
						return this.buffer[this.index - 3];
					}
					get end() {
						return this.buffer[this.index - 2];
					}
					get size() {
						return this.buffer[this.index - 1];
					}
					next() {
						(this.index -= 4),
							(this.pos -= 4),
							0 == this.index && this.maybeNext();
					}
					fork() {
						return new AO(this.stack, this.pos, this.index);
					}
				}
				function VO(t, e = Uint16Array) {
					if ("string" != typeof t) return t;
					let i = null;
					for (let n = 0, r = 0; n < t.length; ) {
						let s = 0;
						for (;;) {
							let e = t.charCodeAt(n++),
								i = !1;
							if (126 == e) {
								s = 65535;
								break;
							}
							e >= 92 && e--, e >= 34 && e--;
							let r = e - 32;
							if ((r >= 46 && ((r -= 46), (i = !0)), (s += r), i)) break;
							s *= 46;
						}
						i ? (i[r++] = s) : (i = new e(s));
					}
					return i;
				}
				class WO {
					constructor() {
						(this.start = -1),
							(this.value = -1),
							(this.end = -1),
							(this.extended = -1),
							(this.lookAhead = 0),
							(this.mask = 0),
							(this.context = 0);
					}
				}
				const YO = new WO();
				class RO {
					constructor(t, e) {
						(this.input = t),
							(this.ranges = e),
							(this.chunk = ""),
							(this.chunkOff = 0),
							(this.chunk2 = ""),
							(this.chunk2Pos = 0),
							(this.next = -1),
							(this.token = YO),
							(this.rangeIndex = 0),
							(this.pos = this.chunkPos = e[0].from),
							(this.range = e[0]),
							(this.end = e[e.length - 1].to),
							this.readNext();
					}
					resolveOffset(t, e) {
						let i = this.range,
							n = this.rangeIndex,
							r = this.pos + t;
						for (; r < i.from; ) {
							if (!n) return null;
							let t = this.ranges[--n];
							(r -= i.from - t.to), (i = t);
						}
						for (; e < 0 ? r > i.to : r >= i.to; ) {
							if (n == this.ranges.length - 1) return null;
							let t = this.ranges[++n];
							(r += t.from - i.to), (i = t);
						}
						return r;
					}
					clipPos(t) {
						if (t >= this.range.from && t < this.range.to) return t;
						for (let e of this.ranges) if (e.to > t) return Math.max(t, e.from);
						return this.end;
					}
					peek(t) {
						let e,
							i,
							n = this.chunkOff + t;
						if (n >= 0 && n < this.chunk.length)
							(e = this.pos + t), (i = this.chunk.charCodeAt(n));
						else {
							let n = this.resolveOffset(t, 1);
							if (null == n) return -1;
							if (
								((e = n),
								e >= this.chunk2Pos && e < this.chunk2Pos + this.chunk2.length)
							)
								i = this.chunk2.charCodeAt(e - this.chunk2Pos);
							else {
								let t = this.rangeIndex,
									n = this.range;
								for (; n.to <= e; ) n = this.ranges[++t];
								(this.chunk2 = this.input.chunk((this.chunk2Pos = e))),
									e + this.chunk2.length > n.to &&
										(this.chunk2 = this.chunk2.slice(0, n.to - e)),
									(i = this.chunk2.charCodeAt(0));
							}
						}
						return (
							e >= this.token.lookAhead && (this.token.lookAhead = e + 1), i
						);
					}
					acceptToken(t, e = 0) {
						let i = e ? this.resolveOffset(e, -1) : this.pos;
						if (null == i || i < this.token.start)
							throw new RangeError("Token end out of bounds");
						(this.token.value = t), (this.token.end = i);
					}
					getChunk() {
						if (
							this.pos >= this.chunk2Pos &&
							this.pos < this.chunk2Pos + this.chunk2.length
						) {
							let { chunk: t, chunkPos: e } = this;
							(this.chunk = this.chunk2),
								(this.chunkPos = this.chunk2Pos),
								(this.chunk2 = t),
								(this.chunk2Pos = e),
								(this.chunkOff = this.pos - this.chunkPos);
						} else {
							(this.chunk2 = this.chunk), (this.chunk2Pos = this.chunkPos);
							let t = this.input.chunk(this.pos),
								e = this.pos + t.length;
							(this.chunk =
								e > this.range.to ? t.slice(0, this.range.to - this.pos) : t),
								(this.chunkPos = this.pos),
								(this.chunkOff = 0);
						}
					}
					readNext() {
						return this.chunkOff >= this.chunk.length &&
							(this.getChunk(), this.chunkOff == this.chunk.length)
							? (this.next = -1)
							: (this.next = this.chunk.charCodeAt(this.chunkOff));
					}
					advance(t = 1) {
						for (this.chunkOff += t; this.pos + t >= this.range.to; ) {
							if (this.rangeIndex == this.ranges.length - 1)
								return this.setDone();
							(t -= this.range.to - this.pos),
								(this.range = this.ranges[++this.rangeIndex]),
								(this.pos = this.range.from);
						}
						return (
							(this.pos += t),
							this.pos >= this.token.lookAhead &&
								(this.token.lookAhead = this.pos + 1),
							this.readNext()
						);
					}
					setDone() {
						return (
							(this.pos = this.chunkPos = this.end),
							(this.range =
								this.ranges[(this.rangeIndex = this.ranges.length - 1)]),
							(this.chunk = ""),
							(this.next = -1)
						);
					}
					reset(t, e) {
						if (
							(e
								? ((this.token = e),
								  (e.start = t),
								  (e.lookAhead = t + 1),
								  (e.value = e.extended = -1))
								: (this.token = YO),
							this.pos != t)
						) {
							if (((this.pos = t), t == this.end)) return this.setDone(), this;
							for (; t < this.range.from; )
								this.range = this.ranges[--this.rangeIndex];
							for (; t >= this.range.to; )
								this.range = this.ranges[++this.rangeIndex];
							t >= this.chunkPos && t < this.chunkPos + this.chunk.length
								? (this.chunkOff = t - this.chunkPos)
								: ((this.chunk = ""), (this.chunkOff = 0)),
								this.readNext();
						}
						return this;
					}
					read(t, e) {
						if (t >= this.chunkPos && e <= this.chunkPos + this.chunk.length)
							return this.chunk.slice(t - this.chunkPos, e - this.chunkPos);
						if (t >= this.chunk2Pos && e <= this.chunk2Pos + this.chunk2.length)
							return this.chunk2.slice(t - this.chunk2Pos, e - this.chunk2Pos);
						if (t >= this.range.from && e <= this.range.to)
							return this.input.read(t, e);
						let i = "";
						for (let n of this.ranges) {
							if (n.from >= e) break;
							n.to > t &&
								(i += this.input.read(Math.max(n.from, t), Math.min(n.to, e)));
						}
						return i;
					}
				}
				class _O {
					constructor(t, e) {
						(this.data = t), (this.id = e);
					}
					token(t, e) {
						let { parser: i } = e.p;
						UO(this.data, t, e, this.id, i.data, i.tokenPrecTable);
					}
				}
				_O.prototype.contextual =
					_O.prototype.fallback =
					_O.prototype.extend =
						!1;
				class MO {
					constructor(t, e, i) {
						(this.precTable = e),
							(this.elseToken = i),
							(this.data = "string" == typeof t ? VO(t) : t);
					}
					token(t, e) {
						let i,
							n = t.pos;
						for (
							;
							(i = t.pos),
								UO(this.data, t, e, 0, this.data, this.precTable),
								!(t.token.value > -1);

						) {
							if (null == this.elseToken) return;
							if (t.next < 0) break;
							t.advance(), t.reset(i + 1, t.token);
						}
						i > n &&
							(t.reset(n, t.token), t.acceptToken(this.elseToken, i - n));
					}
				}
				MO.prototype.contextual =
					_O.prototype.fallback =
					_O.prototype.extend =
						!1;
				class qO {
					constructor(t, e = {}) {
						(this.token = t),
							(this.contextual = !!e.contextual),
							(this.fallback = !!e.fallback),
							(this.extend = !!e.extend);
					}
				}
				function UO(t, e, i, n, r, s) {
					let o = 0,
						a = 1 << n,
						{ dialect: l } = i.p.parser;
					t: for (; 0 != (a & t[o]); ) {
						let i = t[o + 1];
						for (let n = o + 3; n < i; n += 2)
							if ((t[n + 1] & a) > 0) {
								let i = t[n];
								if (
									l.allows(i) &&
									(-1 == e.token.value ||
										e.token.value == i ||
										DO(i, e.token.value, r, s))
								) {
									e.acceptToken(i);
									break;
								}
							}
						let n = e.next,
							h = 0,
							c = t[o + 2];
						if (
							!(
								e.next < 0 &&
								c > h &&
								65535 == t[i + 3 * c - 3] &&
								65535 == t[i + 3 * c - 3]
							)
						) {
							for (; h < c; ) {
								let r = (h + c) >> 1,
									s = i + r + (r << 1),
									a = t[s],
									l = t[s + 1] || 65536;
								if (n < a) c = r;
								else {
									if (!(n >= l)) {
										(o = t[s + 2]), e.advance();
										continue t;
									}
									h = r + 1;
								}
							}
							break;
						}
						o = t[i + 3 * c - 1];
					}
				}
				function jO(t, e, i) {
					for (let n, r = e; 65535 != (n = t[r]); r++) if (n == i) return r - e;
					return -1;
				}
				function DO(t, e, i, n) {
					let r = jO(i, n, e);
					return r < 0 || jO(i, n, t) < r;
				}
				const EO =
					"undefined" != typeof process &&
					process.env &&
					/\bparse\b/.test(process.env.LOG);
				let GO = null;
				var IO, zO;
				function BO(t, e, i) {
					let n = t.cursor(po.IncludeAnonymous);
					for (n.moveTo(e); ; )
						if (!(i < 0 ? n.childBefore(e) : n.childAfter(e)))
							for (;;) {
								if ((i < 0 ? n.to < e : n.from > e) && !n.type.isError)
									return i < 0
										? Math.max(0, Math.min(n.to - 1, e - 25))
										: Math.min(t.length, Math.max(n.from + 1, e + 25));
								if (i < 0 ? n.prevSibling() : n.nextSibling()) break;
								if (!n.parent()) return i < 0 ? 0 : t.length;
							}
				}
				!(function (t) {
					t[(t.Margin = 25)] = "Margin";
				})(IO || (IO = {}));
				class NO {
					constructor(t, e) {
						(this.fragments = t),
							(this.nodeSet = e),
							(this.i = 0),
							(this.fragment = null),
							(this.safeFrom = -1),
							(this.safeTo = -1),
							(this.trees = []),
							(this.start = []),
							(this.index = []),
							this.nextFragment();
					}
					nextFragment() {
						let t = (this.fragment =
							this.i == this.fragments.length
								? null
								: this.fragments[this.i++]);
						if (t) {
							for (
								this.safeFrom = t.openStart
									? BO(t.tree, t.from + t.offset, 1) - t.offset
									: t.from,
									this.safeTo = t.openEnd
										? BO(t.tree, t.to + t.offset, -1) - t.offset
										: t.to;
								this.trees.length;

							)
								this.trees.pop(), this.start.pop(), this.index.pop();
							this.trees.push(t.tree),
								this.start.push(-t.offset),
								this.index.push(0),
								(this.nextStart = this.safeFrom);
						} else this.nextStart = 1e9;
					}
					nodeAt(t) {
						if (t < this.nextStart) return null;
						for (; this.fragment && this.safeTo <= t; ) this.nextFragment();
						if (!this.fragment) return null;
						for (;;) {
							let e = this.trees.length - 1;
							if (e < 0) return this.nextFragment(), null;
							let i = this.trees[e],
								n = this.index[e];
							if (n == i.children.length) {
								this.trees.pop(), this.start.pop(), this.index.pop();
								continue;
							}
							let r = i.children[n],
								s = this.start[e] + i.positions[n];
							if (s > t) return (this.nextStart = s), null;
							if (r instanceof go) {
								if (s == t) {
									if (s < this.safeFrom) return null;
									let t = s + r.length;
									if (t <= this.safeTo) {
										let e = r.prop(ao.lookAhead);
										if (!e || t + e < this.fragment.to) return r;
									}
								}
								this.index[e]++,
									s + r.length >= Math.max(this.safeFrom, t) &&
										(this.trees.push(r),
										this.start.push(s),
										this.index.push(0));
							} else this.index[e]++, (this.nextStart = s + r.length);
						}
					}
				}
				class LO {
					constructor(t, e) {
						(this.stream = e),
							(this.tokens = []),
							(this.mainToken = null),
							(this.actions = []),
							(this.tokens = t.tokenizers.map((t) => new WO()));
					}
					getActions(t) {
						let e = 0,
							i = null,
							{ parser: n } = t.p,
							{ tokenizers: r } = n,
							s = n.stateSlot(t.state, 3),
							o = t.curContext ? t.curContext.hash : 0,
							a = 0;
						for (let n = 0; n < r.length; n++) {
							if (0 == ((1 << n) & s)) continue;
							let l = r[n],
								h = this.tokens[n];
							if (
								(!i || l.fallback) &&
								((l.contextual ||
									h.start != t.pos ||
									h.mask != s ||
									h.context != o) &&
									(this.updateCachedToken(h, l, t),
									(h.mask = s),
									(h.context = o)),
								h.lookAhead > h.end + 25 && (a = Math.max(h.lookAhead, a)),
								0 != h.value)
							) {
								let n = e;
								if (
									(h.extended > -1 &&
										(e = this.addActions(t, h.extended, h.end, e)),
									(e = this.addActions(t, h.value, h.end, e)),
									!l.extend && ((i = h), e > n))
								)
									break;
							}
						}
						for (; this.actions.length > e; ) this.actions.pop();
						return (
							a && t.setLookAhead(a),
							i ||
								t.pos != this.stream.end ||
								((i = new WO()),
								(i.value = t.p.parser.eofTerm),
								(i.start = i.end = t.pos),
								(e = this.addActions(t, i.value, i.end, e))),
							(this.mainToken = i),
							this.actions
						);
					}
					getMainToken(t) {
						if (this.mainToken) return this.mainToken;
						let e = new WO(),
							{ pos: i, p: n } = t;
						return (
							(e.start = i),
							(e.end = Math.min(i + 1, n.stream.end)),
							(e.value = i == n.stream.end ? n.parser.eofTerm : 0),
							e
						);
					}
					updateCachedToken(t, e, i) {
						let n = this.stream.clipPos(i.pos);
						if ((e.token(this.stream.reset(n, t), i), t.value > -1)) {
							let { parser: e } = i.p;
							for (let n = 0; n < e.specialized.length; n++)
								if (e.specialized[n] == t.value) {
									let r = e.specializers[n](
										this.stream.read(t.start, t.end),
										i
									);
									if (r >= 0 && i.p.parser.dialect.allows(r >> 1)) {
										0 == (1 & r) ? (t.value = r >> 1) : (t.extended = r >> 1);
										break;
									}
								}
						} else (t.value = 0), (t.end = this.stream.clipPos(n + 1));
					}
					putAction(t, e, i, n) {
						for (let e = 0; e < n; e += 3) if (this.actions[e] == t) return n;
						return (
							(this.actions[n++] = t),
							(this.actions[n++] = e),
							(this.actions[n++] = i),
							n
						);
					}
					addActions(t, e, i, n) {
						let { state: r } = t,
							{ parser: s } = t.p,
							{ data: o } = s;
						for (let t = 0; t < 2; t++)
							for (let a = s.stateSlot(r, t ? 2 : 1); ; a += 3) {
								if (65535 == o[a]) {
									if (1 != o[a + 1]) {
										0 == n &&
											2 == o[a + 1] &&
											(n = this.putAction(iu(o, a + 2), e, i, n));
										break;
									}
									a = iu(o, a + 2);
								}
								o[a] == e && (n = this.putAction(iu(o, a + 1), e, i, n));
							}
						return n;
					}
				}
				!(function (t) {
					(t[(t.Distance = 5)] = "Distance"),
						(t[(t.MaxRemainingPerStep = 3)] = "MaxRemainingPerStep"),
						(t[(t.MinBufferLengthPrune = 500)] = "MinBufferLengthPrune"),
						(t[(t.ForceReduceLimit = 10)] = "ForceReduceLimit"),
						(t[(t.CutDepth = 15e3)] = "CutDepth"),
						(t[(t.CutTo = 9e3)] = "CutTo"),
						(t[(t.MaxLeftAssociativeReductionCount = 300)] =
							"MaxLeftAssociativeReductionCount"),
						(t[(t.MaxStackCount = 12)] = "MaxStackCount");
				})(zO || (zO = {}));
				class HO {
					constructor(t, e, i, n) {
						(this.parser = t),
							(this.input = e),
							(this.ranges = n),
							(this.recovering = 0),
							(this.nextStackID = 9812),
							(this.minStackPos = 0),
							(this.reused = []),
							(this.stoppedAt = null),
							(this.lastBigReductionStart = -1),
							(this.lastBigReductionSize = 0),
							(this.bigReductionCount = 0),
							(this.stream = new RO(e, n)),
							(this.tokens = new LO(t, this.stream)),
							(this.topTerm = t.top[1]);
						let { from: r } = n[0];
						(this.stacks = [XO.start(this, t.top[0], r)]),
							(this.fragments =
								i.length && this.stream.end - r > 4 * t.bufferLength
									? new NO(i, t.nodeSet)
									: null);
					}
					get parsedPos() {
						return this.minStackPos;
					}
					advance() {
						let t,
							e,
							i = this.stacks,
							n = this.minStackPos,
							r = (this.stacks = []);
						if (this.bigReductionCount > 300 && 1 == i.length) {
							let [t] = i;
							for (
								;
								t.forceReduce() &&
								t.stack.length &&
								t.stack[t.stack.length - 2] >= this.lastBigReductionStart;

							);
							this.bigReductionCount = this.lastBigReductionSize = 0;
						}
						for (let s = 0; s < i.length; s++) {
							let o = i[s];
							for (;;) {
								if (((this.tokens.mainToken = null), o.pos > n)) r.push(o);
								else {
									if (this.advanceStack(o, r, i)) continue;
									{
										t || ((t = []), (e = [])), t.push(o);
										let i = this.tokens.getMainToken(o);
										e.push(i.value, i.end);
									}
								}
								break;
							}
						}
						if (!r.length) {
							let e =
								t &&
								(function (t) {
									let e = null;
									for (let i of t) {
										let t = i.p.stoppedAt;
										(i.pos == i.p.stream.end || (null != t && i.pos > t)) &&
											i.p.parser.stateFlag(i.state, 2) &&
											(!e || e.score < i.score) &&
											(e = i);
									}
									return e;
								})(t);
							if (e) return this.stackToTree(e);
							if (this.parser.strict)
								throw (
									(EO &&
										t &&
										console.log(
											"Stuck with token " +
												(this.tokens.mainToken
													? this.parser.getName(this.tokens.mainToken.value)
													: "none")
										),
									new SyntaxError("No parse at " + n))
								);
							this.recovering || (this.recovering = 5);
						}
						if (this.recovering && t) {
							let i =
								null != this.stoppedAt && t[0].pos > this.stoppedAt
									? t[0]
									: this.runRecovery(t, e, r);
							if (i) return this.stackToTree(i.forceAll());
						}
						if (this.recovering) {
							let t = 1 == this.recovering ? 1 : 3 * this.recovering;
							if (r.length > t)
								for (r.sort((t, e) => e.score - t.score); r.length > t; )
									r.pop();
							r.some((t) => t.reducePos > n) && this.recovering--;
						} else if (r.length > 1) {
							t: for (let t = 0; t < r.length - 1; t++) {
								let e = r[t];
								for (let i = t + 1; i < r.length; i++) {
									let n = r[i];
									if (
										e.sameState(n) ||
										(e.buffer.length > 500 && n.buffer.length > 500)
									) {
										if (
											!(
												(e.score - n.score ||
													e.buffer.length - n.buffer.length) > 0
											)
										) {
											r.splice(t--, 1);
											continue t;
										}
										r.splice(i--, 1);
									}
								}
							}
							r.length > 12 && r.splice(12, r.length - 12);
						}
						this.minStackPos = r[0].pos;
						for (let t = 1; t < r.length; t++)
							r[t].pos < this.minStackPos && (this.minStackPos = r[t].pos);
						return null;
					}
					stopAt(t) {
						if (null != this.stoppedAt && this.stoppedAt < t)
							throw new RangeError("Can't move stoppedAt forward");
						this.stoppedAt = t;
					}
					advanceStack(t, e, i) {
						let n = t.pos,
							{ parser: r } = this,
							s = EO ? this.stackID(t) + " -> " : "";
						if (null != this.stoppedAt && n > this.stoppedAt)
							return t.forceReduce() ? t : null;
						if (this.fragments) {
							let e = t.curContext && t.curContext.tracker.strict,
								i = e ? t.curContext.hash : 0;
							for (let o = this.fragments.nodeAt(n); o; ) {
								let n =
									this.parser.nodeSet.types[o.type.id] == o.type
										? r.getGoto(t.state, o.type.id)
										: -1;
								if (
									n > -1 &&
									o.length &&
									(!e || (o.prop(ao.contextHash) || 0) == i)
								)
									return (
										t.useNode(o, n),
										EO &&
											console.log(
												s +
													this.stackID(t) +
													` (via reuse of ${r.getName(o.type.id)})`
											),
										!0
									);
								if (
									!(o instanceof go) ||
									0 == o.children.length ||
									o.positions[0] > 0
								)
									break;
								let a = o.children[0];
								if (!(a instanceof go && 0 == o.positions[0])) break;
								o = a;
							}
						}
						let o = r.stateSlot(t.state, 4);
						if (o > 0)
							return (
								t.reduce(o),
								EO &&
									console.log(
										s +
											this.stackID(t) +
											` (via always-reduce ${r.getName(65535 & o)})`
									),
								!0
							);
						if (t.stack.length >= 15e3)
							for (; t.stack.length > 9e3 && t.forceReduce(); );
						let a = this.tokens.getActions(t);
						for (let o = 0; o < a.length; ) {
							let l = a[o++],
								h = a[o++],
								c = a[o++],
								O = o == a.length || !i,
								u = O ? t : t.split();
							if (
								(u.apply(l, h, c),
								EO &&
									console.log(
										s +
											this.stackID(u) +
											` (via ${
												0 == (65536 & l)
													? "shift"
													: `reduce of ${r.getName(65535 & l)}`
											} for ${r.getName(h)} @ ${n}${u == t ? "" : ", split"})`
									),
								O)
							)
								return !0;
							u.pos > n ? e.push(u) : i.push(u);
						}
						return !1;
					}
					advanceFully(t, e) {
						let i = t.pos;
						for (;;) {
							if (!this.advanceStack(t, null, null)) return !1;
							if (t.pos > i) return FO(t, e), !0;
						}
					}
					runRecovery(t, e, i) {
						let n = null,
							r = !1;
						for (let s = 0; s < t.length; s++) {
							let o = t[s],
								a = e[s << 1],
								l = e[1 + (s << 1)],
								h = EO ? this.stackID(o) + " -> " : "";
							if (o.deadEnd) {
								if (r) continue;
								if (
									((r = !0),
									o.restart(),
									EO && console.log(h + this.stackID(o) + " (restarted)"),
									this.advanceFully(o, i))
								)
									continue;
							}
							let c = o.split(),
								O = h;
							for (
								let t = 0;
								c.forceReduce() &&
								t < 10 &&
								(EO && console.log(O + this.stackID(c) + " (via force-reduce)"),
								!this.advanceFully(c, i));
								t++
							)
								EO && (O = this.stackID(c) + " -> ");
							for (let t of o.recoverByInsert(a))
								EO &&
									console.log(h + this.stackID(t) + " (via recover-insert)"),
									this.advanceFully(t, i);
							this.stream.end > o.pos
								? (l == o.pos && (l++, (a = 0)),
								  o.recoverByDelete(a, l),
								  EO &&
										console.log(
											h +
												this.stackID(o) +
												` (via recover-delete ${this.parser.getName(a)})`
										),
								  FO(o, i))
								: (!n || n.score < o.score) && (n = o);
						}
						return n;
					}
					stackToTree(t) {
						return (
							t.close(),
							go.build({
								buffer: AO.create(t),
								nodeSet: this.parser.nodeSet,
								topID: this.topTerm,
								maxBufferLength: this.parser.bufferLength,
								reused: this.reused,
								start: this.ranges[0].from,
								length: t.pos - this.ranges[0].from,
								minRepeatType: this.parser.minRepeatTerm
							})
						);
					}
					stackID(t) {
						let e = (GO || (GO = new WeakMap())).get(t);
						return (
							e || GO.set(t, (e = String.fromCodePoint(this.nextStackID++))),
							e + t
						);
					}
				}
				function FO(t, e) {
					for (let i = 0; i < e.length; i++) {
						let n = e[i];
						if (n.pos == t.pos && n.sameState(t))
							return void (e[i].score < t.score && (e[i] = t));
					}
					e.push(t);
				}
				class JO {
					constructor(t, e, i) {
						(this.source = t), (this.flags = e), (this.disabled = i);
					}
					allows(t) {
						return !this.disabled || 0 == this.disabled[t];
					}
				}
				const KO = (t) => t;
				class tu {
					constructor(t) {
						(this.start = t.start),
							(this.shift = t.shift || KO),
							(this.reduce = t.reduce || KO),
							(this.reuse = t.reuse || KO),
							(this.hash = t.hash || (() => 0)),
							(this.strict = !1 !== t.strict);
					}
				}
				class eu extends Wo {
					constructor(t) {
						if ((super(), (this.wrappers = []), 14 != t.version))
							throw new RangeError(
								`Parser version (${t.version}) doesn't match runtime version (14)`
							);
						let e = t.nodeNames.split(" ");
						this.minRepeatTerm = e.length;
						for (let i = 0; i < t.repeatNodeCount; i++) e.push("");
						let i = Object.keys(t.topRules).map((e) => t.topRules[e][1]),
							n = [];
						for (let t = 0; t < e.length; t++) n.push([]);
						function r(t, e, i) {
							n[t].push([e, e.deserialize(String(i))]);
						}
						if (t.nodeProps)
							for (let e of t.nodeProps) {
								let t = e[0];
								"string" == typeof t && (t = ao[t]);
								for (let i = 1; i < e.length; ) {
									let n = e[i++];
									if (n >= 0) r(n, t, e[i++]);
									else {
										let s = e[i + -n];
										for (let o = -n; o > 0; o--) r(e[i++], t, s);
										i++;
									}
								}
							}
						(this.nodeSet = new Oo(
							e.map((e, r) =>
								co.define({
									name: r >= this.minRepeatTerm ? void 0 : e,
									id: r,
									props: n[r],
									top: i.indexOf(r) > -1,
									error: 0 == r,
									skipped: t.skippedNodes && t.skippedNodes.indexOf(r) > -1
								})
							)
						)),
							t.propSources &&
								(this.nodeSet = this.nodeSet.extend(...t.propSources)),
							(this.strict = !1),
							(this.bufferLength = ro);
						let s = VO(t.tokenData);
						(this.context = t.context),
							(this.specializerSpecs = t.specialized || []),
							(this.specialized = new Uint16Array(
								this.specializerSpecs.length
							));
						for (let t = 0; t < this.specializerSpecs.length; t++)
							this.specialized[t] = this.specializerSpecs[t].term;
						(this.specializers = this.specializerSpecs.map(nu)),
							(this.states = VO(t.states, Uint32Array)),
							(this.data = VO(t.stateData)),
							(this.goto = VO(t.goto)),
							(this.maxTerm = t.maxTerm),
							(this.tokenizers = t.tokenizers.map((t) =>
								"number" == typeof t ? new _O(s, t) : t
							)),
							(this.topRules = t.topRules),
							(this.dialects = t.dialects || {}),
							(this.dynamicPrecedences = t.dynamicPrecedences || null),
							(this.tokenPrecTable = t.tokenPrec),
							(this.termNames = t.termNames || null),
							(this.maxNode = this.nodeSet.types.length - 1),
							(this.dialect = this.parseDialect()),
							(this.top = this.topRules[Object.keys(this.topRules)[0]]);
					}
					createParse(t, e, i) {
						let n = new HO(this, t, e, i);
						for (let r of this.wrappers) n = r(n, t, e, i);
						return n;
					}
					getGoto(t, e, i = !1) {
						let n = this.goto;
						if (e >= n[0]) return -1;
						for (let r = n[e + 1]; ; ) {
							let e = n[r++],
								s = 1 & e,
								o = n[r++];
							if (s && i) return o;
							for (let i = r + (e >> 1); r < i; r++) if (n[r] == t) return o;
							if (s) return -1;
						}
					}
					hasAction(t, e) {
						let i = this.data;
						for (let n = 0; n < 2; n++)
							for (let r, s = this.stateSlot(t, n ? 2 : 1); ; s += 3) {
								if (65535 == (r = i[s])) {
									if (1 != i[s + 1]) {
										if (2 == i[s + 1]) return iu(i, s + 2);
										break;
									}
									r = i[(s = iu(i, s + 2))];
								}
								if (r == e || 0 == r) return iu(i, s + 1);
							}
						return 0;
					}
					stateSlot(t, e) {
						return this.states[6 * t + e];
					}
					stateFlag(t, e) {
						return (this.stateSlot(t, 0) & e) > 0;
					}
					validAction(t, e) {
						if (e == this.stateSlot(t, 4)) return !0;
						for (let i = this.stateSlot(t, 1); ; i += 3) {
							if (65535 == this.data[i]) {
								if (1 != this.data[i + 1]) return !1;
								i = iu(this.data, i + 2);
							}
							if (e == iu(this.data, i + 1)) return !0;
						}
					}
					nextStates(t) {
						let e = [];
						for (let i = this.stateSlot(t, 1); ; i += 3) {
							if (65535 == this.data[i]) {
								if (1 != this.data[i + 1]) break;
								i = iu(this.data, i + 2);
							}
							if (0 == (1 & this.data[i + 2])) {
								let t = this.data[i + 1];
								e.some((e, i) => 1 & i && e == t) || e.push(this.data[i], t);
							}
						}
						return e;
					}
					configure(t) {
						let e = Object.assign(Object.create(eu.prototype), this);
						if (
							(t.props && (e.nodeSet = this.nodeSet.extend(...t.props)), t.top)
						) {
							let i = this.topRules[t.top];
							if (!i) throw new RangeError(`Invalid top rule name ${t.top}`);
							e.top = i;
						}
						return (
							t.tokenizers &&
								(e.tokenizers = this.tokenizers.map((e) => {
									let i = t.tokenizers.find((t) => t.from == e);
									return i ? i.to : e;
								})),
							t.specializers &&
								((e.specializers = this.specializers.slice()),
								(e.specializerSpecs = this.specializerSpecs.map((i, n) => {
									let r = t.specializers.find((t) => t.from == i.external);
									if (!r) return i;
									let s = Object.assign(Object.assign({}, i), {
										external: r.to
									});
									return (e.specializers[n] = nu(s)), s;
								}))),
							t.contextTracker && (e.context = t.contextTracker),
							t.dialect && (e.dialect = this.parseDialect(t.dialect)),
							null != t.strict && (e.strict = t.strict),
							t.wrap && (e.wrappers = e.wrappers.concat(t.wrap)),
							null != t.bufferLength && (e.bufferLength = t.bufferLength),
							e
						);
					}
					hasWrappers() {
						return this.wrappers.length > 0;
					}
					getName(t) {
						return this.termNames
							? this.termNames[t]
							: String((t <= this.maxNode && this.nodeSet.types[t].name) || t);
					}
					get eofTerm() {
						return this.maxNode + 1;
					}
					get topNode() {
						return this.nodeSet.types[this.top[1]];
					}
					dynamicPrecedence(t) {
						let e = this.dynamicPrecedences;
						return null == e ? 0 : e[t] || 0;
					}
					parseDialect(t) {
						let e = Object.keys(this.dialects),
							i = e.map(() => !1);
						if (t)
							for (let n of t.split(" ")) {
								let t = e.indexOf(n);
								t >= 0 && (i[t] = !0);
							}
						let n = null;
						for (let t = 0; t < e.length; t++)
							if (!i[t])
								for (
									let i, r = this.dialects[e[t]];
									65535 != (i = this.data[r++]);

								)
									(n || (n = new Uint8Array(this.maxTerm + 1)))[i] = 1;
						return new JO(t, i, n);
					}
					static deserialize(t) {
						return new eu(t);
					}
				}
				function iu(t, e) {
					return t[e] | (t[e + 1] << 16);
				}
				function nu(t) {
					if (t.external) {
						let e = t.extend ? 1 : 0;
						return (i, n) => (t.external(i, n) << 1) | e;
					}
					return t.get;
				}
				const ru = [
						9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196,
						8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288
					],
					su = new tu({
						start: !1,
						shift: (t, e) => (3 == e || 4 == e || 304 == e ? t : 305 == e),
						strict: !1
					}),
					ou = new qO(
						(t, e) => {
							let { next: i } = t;
							(125 == i || -1 == i || e.context) &&
								e.canShift(302) &&
								t.acceptToken(302);
						},
						{ contextual: !0, fallback: !0 }
					),
					au = new qO(
						(t, e) => {
							let i,
								{ next: n } = t;
							ru.indexOf(n) > -1 ||
								((47 != n || (47 != (i = t.peek(1)) && 42 != i)) &&
									125 != n &&
									59 != n &&
									-1 != n &&
									!e.context &&
									e.canShift(301) &&
									t.acceptToken(301));
						},
						{ contextual: !0 }
					),
					lu = new qO(
						(t, e) => {
							let { next: i } = t;
							if ((43 == i || 45 == i) && (t.advance(), i == t.next)) {
								t.advance();
								let i = !e.context && e.canShift(1);
								t.acceptToken(i ? 1 : 2);
							}
						},
						{ contextual: !0 }
					),
					hu = Jo({
						"get set async static": Qa.modifier,
						"for while do if else switch try catch finally return throw break continue default case":
							Qa.controlKeyword,
						"in of await yield void typeof delete instanceof":
							Qa.operatorKeyword,
						"let var const function class extends": Qa.definitionKeyword,
						"import export from": Qa.moduleKeyword,
						"with debugger as new": Qa.keyword,
						TemplateString: Qa.special(Qa.string),
						super: Qa.atom,
						BooleanLiteral: Qa.bool,
						this: Qa.self,
						null: Qa.null,
						Star: Qa.modifier,
						VariableName: Qa.variableName,
						"CallExpression/VariableName TaggedTemplateExpression/VariableName":
							Qa.function(Qa.variableName),
						VariableDefinition: Qa.definition(Qa.variableName),
						Label: Qa.labelName,
						PropertyName: Qa.propertyName,
						PrivatePropertyName: Qa.special(Qa.propertyName),
						"CallExpression/MemberExpression/PropertyName": Qa.function(
							Qa.propertyName
						),
						"FunctionDeclaration/VariableDefinition": Qa.function(
							Qa.definition(Qa.variableName)
						),
						"ClassDeclaration/VariableDefinition": Qa.definition(Qa.className),
						PropertyDefinition: Qa.definition(Qa.propertyName),
						PrivatePropertyDefinition: Qa.definition(
							Qa.special(Qa.propertyName)
						),
						UpdateOp: Qa.updateOperator,
						LineComment: Qa.lineComment,
						BlockComment: Qa.blockComment,
						Number: Qa.number,
						String: Qa.string,
						Escape: Qa.escape,
						ArithOp: Qa.arithmeticOperator,
						LogicOp: Qa.logicOperator,
						BitOp: Qa.bitwiseOperator,
						CompareOp: Qa.compareOperator,
						RegExp: Qa.regexp,
						Equals: Qa.definitionOperator,
						Arrow: Qa.function(Qa.punctuation),
						": Spread": Qa.punctuation,
						"( )": Qa.paren,
						"[ ]": Qa.squareBracket,
						"{ }": Qa.brace,
						"InterpolationStart InterpolationEnd": Qa.special(Qa.brace),
						".": Qa.derefOperator,
						", ;": Qa.separator,
						"@": Qa.meta,
						TypeName: Qa.typeName,
						TypeDefinition: Qa.definition(Qa.typeName),
						"type enum interface implements namespace module declare":
							Qa.definitionKeyword,
						"abstract global Privacy readonly override": Qa.modifier,
						"is keyof unique infer": Qa.operatorKeyword,
						JSXAttributeValue: Qa.attributeValue,
						JSXText: Qa.content,
						"JSXStartTag JSXStartCloseTag JSXSelfCloseEndTag JSXEndTag":
							Qa.angleBracket,
						"JSXIdentifier JSXNameSpacedName": Qa.tagName,
						"JSXAttribute/JSXIdentifier JSXAttribute/JSXNameSpacedName":
							Qa.attributeName,
						"JSXBuiltin/JSXIdentifier": Qa.standard(Qa.tagName)
					}),
					cu = {
						__proto__: null,
						export: 14,
						as: 19,
						from: 27,
						default: 30,
						async: 35,
						function: 36,
						extends: 46,
						this: 50,
						true: 58,
						false: 58,
						null: 70,
						void: 74,
						typeof: 78,
						super: 96,
						new: 130,
						delete: 146,
						yield: 155,
						await: 159,
						class: 164,
						public: 219,
						private: 219,
						protected: 219,
						readonly: 221,
						instanceof: 240,
						satisfies: 243,
						in: 244,
						const: 246,
						import: 278,
						keyof: 333,
						unique: 337,
						infer: 343,
						is: 379,
						abstract: 399,
						implements: 401,
						type: 403,
						let: 406,
						var: 408,
						interface: 415,
						enum: 419,
						namespace: 425,
						module: 427,
						declare: 431,
						global: 435,
						for: 456,
						of: 465,
						while: 468,
						with: 472,
						do: 476,
						if: 480,
						else: 482,
						switch: 486,
						case: 492,
						try: 498,
						catch: 502,
						finally: 506,
						return: 510,
						throw: 514,
						break: 518,
						continue: 522,
						debugger: 526
					},
					Ou = {
						__proto__: null,
						async: 117,
						get: 119,
						set: 121,
						public: 181,
						private: 181,
						protected: 181,
						static: 183,
						abstract: 185,
						override: 187,
						readonly: 193,
						accessor: 195,
						new: 383
					},
					uu = { __proto__: null, "<": 137 },
					fu = eu.deserialize({
						version: 14,
						states:
							"$BhO`QUOOO%QQUOOO'TQWOOP(_OSOOO*mQ(CjO'#CfO*tOpO'#CgO+SO!bO'#CgO+bO07`O'#DZO-sQUO'#DaO.TQUO'#DlO%QQUO'#DvO0[QUO'#EOOOQ(CY'#EW'#EWO0rQSO'#ETOOQO'#I_'#I_O0zQSO'#GjOOQO'#Eh'#EhO1VQSO'#EgO1[QSO'#EgO3^Q(CjO'#JbO5}Q(CjO'#JcO6kQSO'#FVO6pQ#tO'#FnOOQ(CY'#F_'#F_O6{O&jO'#F_O7ZQ,UO'#FuO8qQSO'#FtOOQ(CY'#Jc'#JcOOQ(CW'#Jb'#JbOOQQ'#J|'#J|O8vQSO'#IOO8{Q(C[O'#IPOOQQ'#JO'#JOOOQQ'#IT'#ITQ`QUOOO%QQUO'#DnO9TQUO'#DzO%QQUO'#D|O9[QSO'#GjO9aQ,UO'#ClO9oQSO'#EfO9zQSO'#EqO:PQ,UO'#F^O:nQSO'#GjO:sQSO'#GnO;OQSO'#GnO;^QSO'#GqO;^QSO'#GrO;^QSO'#GtO9[QSO'#GwO;}QSO'#GzO=`QSO'#CbO=pQSO'#HXO=xQSO'#H_O=xQSO'#HaO`QUO'#HcO=xQSO'#HeO=xQSO'#HhO=}QSO'#HnO>SQ(C]O'#HtO%QQUO'#HvO>_Q(C]O'#HxO>jQ(C]O'#HzO8{Q(C[O'#H|O>uQ(CjO'#CfO?wQWO'#DfQOQSOOO@_QSO'#EPO9aQ,UO'#EfO@jQSO'#EfO@uQ`O'#F^OOQQ'#Cd'#CdOOQ(CW'#Dk'#DkOOQ(CW'#Jf'#JfO%QQUO'#JfOBOQWO'#E_OOQ(CW'#E^'#E^OBYQ(C`O'#E_OBtQWO'#ESOOQO'#Ji'#JiOCYQWO'#ESOCgQWO'#E_OC}QWO'#EeODQQWO'#E_O@}QWO'#E_OBtQWO'#E_PDkO?MpO'#C`POOO)CDm)CDmOOOO'#IU'#IUODvOpO,59ROOQ(CY,59R,59ROOOO'#IV'#IVOEUO!bO,59RO%QQUO'#D]OOOO'#IX'#IXOEdO07`O,59uOOQ(CY,59u,59uOErQUO'#IYOFVQSO'#JdOHXQbO'#JdO+pQUO'#JdOH`QSO,59{OHvQSO'#EhOITQSO'#JqOI`QSO'#JpOI`QSO'#JpOIhQSO,5;UOImQSO'#JoOOQ(CY,5:W,5:WOItQUO,5:WOKuQ(CjO,5:bOLfQSO,5:jOLkQSO'#JmOMeQ(C[O'#JnO:sQSO'#JmOMlQSO'#JmOMtQSO,5;TOMyQSO'#JmOOQ(CY'#Cf'#CfO%QQUO'#EOONmQ`O,5:oOOQO'#Jj'#JjOOQO-E<]-E<]O9[QSO,5=UO! TQSO,5=UO! YQUO,5;RO!#]Q,UO'#EcO!$pQSO,5;RO!&YQ,UO'#DpO!&aQUO'#DuO!&kQWO,5;[O!&sQWO,5;[O%QQUO,5;[OOQQ'#E}'#E}OOQQ'#FP'#FPO%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]O%QQUO,5;]OOQQ'#FT'#FTO!'RQUO,5;nOOQ(CY,5;s,5;sOOQ(CY,5;t,5;tO!)UQSO,5;tOOQ(CY,5;u,5;uO%QQUO'#IeO!)^Q(C[O,5<bO!#]Q,UO,5;]O!){Q,UO,5;]O%QQUO,5;qO!*SQ#tO'#FdO!+PQ#tO'#JuO!*kQ#tO'#JuO!+WQ#tO'#JuOOQO'#Ju'#JuO!+lQ#tO,5;|OOOO,5<Y,5<YO!+}QUO'#FpOOOO'#Id'#IdO6{O&jO,5;yO!,UQ#tO'#FrOOQ(CY,5;y,5;yO!,uQ7[O'#CrOOQ(CY'#Cv'#CvO!-YQSO'#CvO!-_O07`O'#CzO!-{Q,UO,5<_O!.SQSO,5<aO!/iQMhO'#GPO!/vQSO'#GQO!/{QSO'#GQO!0QQMhO'#GUO!1PQWO'#GYO!1rQ7[O'#J]OOQ(CY'#J]'#J]O!1|QSO'#J[O!2[QSO'#JZO!2dQSO'#CqOOQ(CY'#Ct'#CtOOQ(CY'#DO'#DOOOQ(CY'#DQ'#DQO0uQSO'#DSO!$uQ,UO'#FwO!$uQ,UO'#FyO!2lQSO'#F{O!2qQSO'#F|O!/{QSO'#GSO!$uQ,UO'#GXO!2vQSO'#EiO!3bQSO,5<`O`QUO,5>jOOQQ'#JW'#JWOOQQ,5>k,5>kOOQQ-E<R-E<RO!5aQ(CjO,5:YO!7}Q(CjO,5:fO%QQUO,5:fO!:hQ(CjO,5:hOOQ(CW'#Co'#CoO!;XQ,UO,5=UO!;gQ(C[O'#JXO8qQSO'#JXO=}QSO,59WO!;xQWO,59WO!<QQ,UO,59WO9aQ,UO,59WO!<]QSO,5;RO!<eQSO'#HWO!<vQSO'#KQO%QQUO,5;vO!=OQWO,5;xO!=TQSO,5=qO!=YQSO,5=qO!=_QSO,5=qO8{Q(C[O,5=qO!=mQSO'#EjO!>gQWO'#EkOOQ(CW'#Jo'#JoO!>nQ(C[O'#J}O8{Q(C[O,5=YO;^QSO,5=`OOQO'#Cr'#CrO!>yQWO,5=]O!?RQ,UO,5=^O!?^QSO,5=`O!?cQ`O,5=cO=}QSO'#G|O9[QSO'#HOO!?kQSO'#HOO9aQ,UO'#HRO!?pQSO'#HROOQQ,5=f,5=fO!?uQSO'#HSO!?}QSO'#ClO!@SQSO,58|O!@^QSO,58|O!BfQUO,58|OOQQ,58|,58|O!BsQ(C[O,58|O%QQUO,58|O!COQUO'#HZOOQQ'#H['#H[OOQQ'#H]'#H]O`QUO,5=sO!C`QSO,5=sO`QUO,5=yO`QUO,5={O!CeQSO,5=}O`QUO,5>PO!CjQSO,5>SO!CoQUO,5>YOOQQ,5>`,5>`O%QQUO,5>`O8{Q(C[O,5>bOOQQ,5>d,5>dO!GvQSO,5>dOOQQ,5>f,5>fO!GvQSO,5>fOOQQ,5>h,5>hO!G{QWO'#DXO%QQUO'#JfO!HjQWO'#JfO!IXQWO'#DgO!IjQWO'#DgO!K{QUO'#DgO!LSQSO'#JeO!L[QSO,5:QO!LaQSO'#ElO!LoQSO'#JrO!LwQSO,5;VO!L|QWO'#DgO!MZQWO'#EROOQ(CY,5:k,5:kO%QQUO,5:kO!MbQSO,5:kO=}QSO,5;QO!;xQWO,5;QO!<QQ,UO,5;QO9aQ,UO,5;QO!MjQSO,5@QO!MoQ!LQO,5:oO!NrQ(C`O,5:yOBtQWO,5:nO# ^QWO,5:nO# kQWO,5:yO#!RQWO,5:yO#!lQWO,5:yOBtQWO,5:yO=}QSO,5:nOOQ(CW'#Eb'#EbOOQO,5:y,5:yO%QQUO,5:yO##]Q(C[O,5:yO##hQ(C[O,5:yO!;xQWO,5:nOOQO,5;P,5;PO##vQ(C[O,5:yPOOO'#IS'#ISP#$[O?MpO,58zPOOO,58z,58zOOOO-E<S-E<SOOQ(CY1G.m1G.mOOOO-E<T-E<TO#$gQ`O,59wOOOO-E<V-E<VOOQ(CY1G/a1G/aO#$lQbO,5>tO+pQUO,5>tOOQO,5>z,5>zO#$vQUO'#IYOOQO-E<W-E<WO#%TQSO,5@OO#%]QbO,5@OO#%dQSO,5@[OOQ(CY1G/g1G/gO%QQUO,5@]O#%lQSO'#I`OOQO-E<^-E<^O#%dQSO,5@[OOQ(CW1G0p1G0pOOQ(CY1G/r1G/rOOQ(CY1G0U1G0UO#&QQSO,5@XO:sQSO,5@XO#&YQSO,5@XO%QQUO,5@YO#&hQ(C[O,5@YO#&yQ(C[O,5@YO#'QQSO'#IbO#&QQSO,5@XOOQ(CW1G0o1G0oO!&kQWO,5:qO!&vQWO,5:qOOQO,5:s,5:sO#'oQSO,5:sO#'wQ,UO1G2pO9[QSO1G2pOOQ(CY1G0m1G0mO#(VQ(CjO1G0mO#)[Q(ChO,5:}OOQ(CY'#GO'#GOO#)xQ(CjO'#J]O! YQUO1G0mO#,QQ,UO'#JgO#,[QSO,5:[O#,aQbO'#JhO%QQUO'#JhO#,kQSO,5:aOOQ(CY'#DX'#DXOOQ(CY1G0v1G0vO%QQUO1G0vOOQ(CY1G1`1G1`O#,pQSO1G0vO#/XQ(CjO1G0wO#/`Q(CjO1G0wO#1yQ(CjO1G0wO#2QQ(CjO1G0wO#4[Q(CjO1G0wO#4rQ(CjO1G0wO#7lQ(CjO1G0wO#7sQ(CjO1G0wO#:^Q(CjO1G0wO#:eQ(CjO1G0wO#<]Q(CjO1G0wO#?]Q$IUO'#CfO#AZQ$IUO1G1YO#CXQ$IUO'#JcO!)XQSO1G1`O#ClQ(CjO,5?POOQ(CW-E<c-E<cO#D`Q(CjO1G0wOOQ(CY1G0w1G0wO#FkQ(CjO1G1]O#G_Q#tO,5<QO#GgQ#tO,5<RO#GoQ#tO'#FiO#HWQSO'#FhOOQO'#Jv'#JvOOQO'#Ic'#IcO#H]Q#tO1G1hOOQ(CY1G1h1G1hOOOO1G1s1G1sO#HnQ$IUO'#JbO#HxQSO,5<[O!'RQUO,5<[OOOO-E<b-E<bOOQ(CY1G1e1G1eO#H}QWO'#JuOOQ(CY,5<^,5<^O#IVQWO,5<^OOQ(CY,59b,59bO!#]Q,UO'#C|OOOO'#IW'#IWO#I[O07`O,59fOOQ(CY,59f,59fO%QQUO1G1yO!2qQSO'#IgO#IgQSO,5<rOOQ(CY,5<o,5<oOOQO'#Ge'#GeO!$uQ,UO,5=OOOQO'#Gg'#GgO!$uQ,UO,5=QO!#]Q,UO,5=SOOQO1G1{1G1{O#IuQ`O'#CoO#JYQ`O,5<kO#JaQSO'#JyO9[QSO'#JyO#JoQSO,5<mO!$uQ,UO,5<lO#JtQSO'#GRO#KPQSO,5<lO#KUQ`O'#GOO#KcQ`O'#JzO#KmQSO'#JzO!#]Q,UO'#JzO#KrQSO,5<pO#KwQWO'#GZO!0zQWO'#GZO#LYQSO'#G]O#L_QSO'#G_O!/{QSO'#GbO#LdQ(C[O'#IiO#LoQWO,5<tOOQ(CY,5<t,5<tO#LvQWO'#GZO#MUQWO'#G[O#M^QWO'#G[OOQ(CY,5=T,5=TO!$uQ,UO,5?vO!$uQ,UO,5?vO#McQSO'#IjO#MnQSO,5?uO#MvQSO,59]O#NgQ,UO,59nOOQ(CY,59n,59nO$ YQ,UO,5<cO$ {Q,UO,5<eO?oQSO,5<gOOQ(CY,5<h,5<hO$!VQSO,5<nO$![Q,UO,5<sO! YQUO1G1zO$!lQSO1G1zOOQQ1G4U1G4UOOQ(CY1G/t1G/tO!)UQSO1G/tO$$kQ(CjO1G0QOOQQ1G2p1G2pO!#]Q,UO1G2pO%QQUO1G2pO$%[QSO1G2pO$%gQ,UO'#EcOOQ(CW,5?s,5?sO$%qQ(C[O,5?sOOQQ1G.r1G.rO=}QSO1G.rO!;xQWO1G.rO!<QQ,UO1G.rO$&SQSO1G0mO$&XQSO'#CfO$&dQSO'#KRO$&lQSO,5=rO$&qQSO'#KRO$&vQSO'#KRO$'RQSO'#IrO$'aQSO,5@lO$'iQbO1G1bOOQ(CY1G1d1G1dO9[QSO1G3]O?oQSO1G3]O$'pQSO1G3]O$'uQSO1G3]OOQQ1G3]1G3]O:sQSO'#JpO:sQSO'#ElO%QQUO'#ElO:sQSO'#IlO$'zQ(C[O,5@iOOQQ1G2t1G2tO!?^QSO1G2zO!#]Q,UO1G2wO$(VQSO1G2wOOQQ1G2x1G2xO!#]Q,UO1G2xO$([QSO1G2xO$(dQWO'#GvOOQQ1G2z1G2zO!0zQWO'#InO!?cQ`O1G2}OOQQ1G2}1G2}OOQQ,5=h,5=hO$(lQ,UO,5=jO9[QSO,5=jO#L_QSO,5=mO8qQSO,5=mO!;xQWO,5=mO!<QQ,UO,5=mO9aQ,UO,5=mO$(zQSO'#KPO$)VQSO,5=nOOQQ1G.h1G.hO$)[Q(C[O1G.hO?oQSO1G.hO$)gQSO1G.hO8{Q(C[O1G.hO$)rQbO,5@nO$*VQSO,5@nO$*bQUO,5=uO$*iQSO,5=uO:sQSO,5@nOOQQ1G3_1G3_O`QUO1G3_OOQQ1G3e1G3eOOQQ1G3g1G3gO=xQSO1G3iO$*nQUO1G3kO$.oQUO'#HjOOQQ1G3n1G3nO$.|QSO'#HpO=}QSO'#HrOOQQ1G3t1G3tO$/UQUO1G3tO8{Q(C[O1G3zOOQQ1G3|1G3|OOQ(CW'#GV'#GVO8{Q(C[O1G4OO8{Q(C[O1G4QO$3YQSO,5@QO!'RQUO,5;WO:sQSO,5;WO=}QSO,5:RO!'RQUO,5:RO!;xQWO,5:RO$3_Q$IUO,5:ROOQO,5;W,5;WO$3iQWO'#IZO$4PQSO,5@POOQ(CY1G/l1G/lO$4XQWO'#IaO$4cQSO,5@^OOQ(CW1G0q1G0qO!IjQWO,5:ROOQO'#I^'#I^O$4kQWO,5:mOOQ(CY,5:m,5:mO!MeQSO1G0VOOQ(CY1G0V1G0VO%QQUO1G0VOOQ(CY1G0l1G0lO=}QSO1G0lO!;xQWO1G0lO!<QQ,UO1G0lOOQ(CW1G5l1G5lO=}QSO1G0YOOQO1G0e1G0eO%QQUO1G0eO$4rQ(C[O1G0eO$4}Q(C[O1G0eO!;xQWO1G0YOBtQWO1G0YO$5]Q(C`O1G0eO$5wQWO1G0YOBtQWO1G0eO$6UQWO1G0eO$6lQWO1G0eO$7VQ(C[O1G0eOOQO1G0Y1G0YO$7kQ(CjO1G0ePOOO-E<Q-E<QPOOO1G.f1G.fOOOO1G/c1G/cO$7uQ`O,5<bO$7}QbO1G4`OOQO1G4f1G4fO%QQUO,5>tO$8XQSO1G5jO$8aQSO1G5vO$8iQbO1G5wO:sQSO,5>zO$8sQSO1G5sO$8sQSO1G5sO:sQSO1G5sO$8{Q(CjO1G5tO%QQUO1G5tO$9]Q(C[O1G5tO$9nQSO,5>|O:sQSO,5>|OOQO,5>|,5>|O$:SQSO,5>|OOQO-E<`-E<`OOQO1G0]1G0]OOQO1G0_1G0_O!)XQSO1G0_OOQQ7+([7+([O!#]Q,UO7+([O%QQUO7+([O$:bQSO7+([O$:mQ,UO7+([O$:{Q(CjO,59nO$=TQ(CjO,5<cO$?`Q(CjO,5<eO$AkQ(CjO,5<sOOQ(CY7+&X7+&XO$C|Q(CjO7+&XO$DpQ,UO'#I[O$DzQSO,5@ROOQ(CY1G/v1G/vO$ESQUO'#I]O$EaQSO,5@SO$EiQbO,5@SOOQ(CY1G/{1G/{O$EsQSO7+&bOOQ(CY7+&b7+&bO$ExQ$IUO,5:bO%QQUO7+&tO$FSQ$IUO,5:YO$FaQ$IUO,5:fO$FkQ$IUO,5:hOOQ(CY7+&z7+&zOOQO1G1l1G1lOOQO1G1m1G1mO$FuQ#tO,5<TO!'RQUO,5<SOOQO-E<a-E<aOOQ(CY7+'S7+'SOOOO7+'_7+'_OOOO1G1v1G1vO$GQQSO1G1vOOQ(CY1G1x1G1xO$GVQ`O,59hOOOO-E<U-E<UOOQ(CY1G/Q1G/QO$G^Q(CjO7+'eOOQ(CY,5?R,5?RO$HQQSO,5?ROOQ(CY1G2^1G2^P$HVQSO'#IgPOQ(CY-E<e-E<eO$HyQ,UO1G2jO$IlQ,UO1G2lO$IvQ`O1G2nOOQ(CY1G2V1G2VO$I}QSO'#IfO$J]QSO,5@eO$J]QSO,5@eO$JeQSO,5@eO$JpQSO,5@eOOQO1G2X1G2XO$KOQ,UO1G2WO!$uQ,UO1G2WO$K`QMhO'#IhO$KpQSO,5@fO!#]Q,UO,5@fO$KxQ`O,5@fOOQ(CY1G2[1G2[OOQ(CW,5<u,5<uOOQ(CW,5<v,5<vO$LSQSO,5<vOBoQSO,5<vO!;xQWO,5<uOOQO'#G^'#G^O$LXQSO,5<wOOQ(CW,5<y,5<yO$LSQSO,5<|OOQO,5?T,5?TOOQO-E<g-E<gOOQ(CY1G2`1G2`O!0zQWO,5<uO$LaQSO,5<vO#LYQSO,5<wO!0zQWO,5<vO$LlQ,UO1G5bO$LvQ,UO1G5bOOQO,5?U,5?UOOQO-E<h-E<hOOQO1G.w1G.wO!=OQWO,59pO%QQUO,59pO$MTQSO1G2RO!$uQ,UO1G2YO$MYQ(CjO7+'fOOQ(CY7+'f7+'fO! YQUO7+'fOOQ(CY7+%`7+%`O$M|Q`O'#J{O!MeQSO7+([O$NWQbO7+([O$:eQSO7+([O$N_Q(ChO'#CfO$NrQ(ChO,5<zO% dQSO,5<zOOQ(CW1G5_1G5_OOQQ7+$^7+$^O=}QSO7+$^O!;xQWO7+$^O! YQUO7+&XO% iQSO'#IqO% }QSO,5@mOOQO1G3^1G3^O9[QSO,5@mO% }QSO,5@mO%!VQSO,5@mOOQO,5?^,5?^OOQO-E<p-E<pOOQ(CY7+&|7+&|O%![QSO7+(wO8{Q(C[O7+(wO9[QSO7+(wO?oQSO7+(wO%!aQSO,5;WOOQ(CW,5?W,5?WOOQ(CW-E<j-E<jOOQQ7+(f7+(fO%!fQ(ChO7+(cO!#]Q,UO7+(cO%!pQ`O7+(dOOQQ7+(d7+(dO!#]Q,UO7+(dO%!wQSO'#KOO%#SQSO,5=bOOQO,5?Y,5?YOOQO-E<l-E<lOOQQ7+(i7+(iO%$`QWO'#HPOOQQ1G3U1G3UO!#]Q,UO1G3UO%QQUO1G3UO%$gQSO1G3UO%$rQ,UO1G3UO8{Q(C[O1G3XO#L_QSO1G3XO8qQSO1G3XO!;xQWO1G3XO!<QQ,UO1G3XO%%QQSO'#IpO%%]QSO,5@kO%%eQWO,5@kOOQ(CW1G3Y1G3YOOQQ7+$S7+$SO?oQSO7+$SO8{Q(C[O7+$SO%%pQSO7+$SO%QQUO1G6YO%QQUO1G6ZO%%uQUO1G3aO%%|QSO1G3aO%&RQUO1G3aO%&YQ(C[O1G6YOOQQ7+(y7+(yO8{Q(C[O7+)TO`QUO7+)VOOQQ'#KU'#KUOOQQ'#Is'#IsO%&dQUO,5>UOOQQ,5>U,5>UO%QQUO'#HkO%&qQSO'#HmOOQQ,5>[,5>[O:sQSO,5>[OOQQ,5>^,5>^OOQQ7+)`7+)`OOQQ7+)f7+)fOOQQ7+)j7+)jOOQQ7+)l7+)lO%&vQWO1G5lO%'[Q$IUO1G0rO%'fQSO1G0rOOQO1G/m1G/mO%'qQ$IUO1G/mO=}QSO1G/mO!'RQUO'#DgOOQO,5>u,5>uOOQO-E<X-E<XOOQO,5>{,5>{OOQO-E<_-E<_O!;xQWO1G/mOOQO-E<[-E<[OOQ(CY1G0X1G0XOOQ(CY7+%q7+%qO!MeQSO7+%qOOQ(CY7+&W7+&WO=}QSO7+&WO!;xQWO7+&WOOQO7+%t7+%tO$7kQ(CjO7+&POOQO7+&P7+&PO%QQUO7+&PO%'{Q(C[O7+&PO=}QSO7+%tO!;xQWO7+%tO%(WQ(C[O7+&POBtQWO7+%tO%(fQ(C[O7+&PO%(zQ(C`O7+&PO%)UQWO7+%tOBtQWO7+&PO%)cQWO7+&PO%)yQSO7++_O%)yQSO7++_O%*RQ(CjO7++`O%QQUO7++`OOQO1G4h1G4hO:sQSO1G4hO%*cQSO1G4hOOQO7+%y7+%yO!MeQSO<<KvO$NWQbO<<KvO%*qQSO<<KvOOQQ<<Kv<<KvO!#]Q,UO<<KvO%QQUO<<KvO%*yQSO<<KvO%+UQ(CjO1G2jO%-aQ(CjO1G2lO%/lQ(CjO1G2WO%1}Q,UO,5>vOOQO-E<Y-E<YO%2XQbO,5>wO%QQUO,5>wOOQO-E<Z-E<ZO%2cQSO1G5nOOQ(CY<<I|<<I|O%2kQ$IUO1G0mO%4uQ$IUO1G0wO%4|Q$IUO1G0wO%7QQ$IUO1G0wO%7XQ$IUO1G0wO%8|Q$IUO1G0wO%9dQ$IUO1G0wO%;wQ$IUO1G0wO%<OQ$IUO1G0wO%>SQ$IUO1G0wO%>ZQ$IUO1G0wO%@RQ$IUO1G0wO%@fQ(CjO<<J`O%AkQ$IUO1G0wO%CaQ$IUO'#J]O%EdQ$IUO1G1]O%EqQ$IUO1G0QO!'RQUO'#FkOOQO'#Jw'#JwOOQO1G1o1G1oO%E{QSO1G1nO%FQQ$IUO,5?POOOO7+'b7+'bOOOO1G/S1G/SOOQ(CY1G4m1G4mO!$uQ,UO7+(YO%F[QSO,5?QO9[QSO,5?QOOQO-E<d-E<dO%FjQSO1G6PO%FjQSO1G6PO%FrQSO1G6PO%F}Q,UO7+'rO%G_Q`O,5?SO%GiQSO,5?SO!#]Q,UO,5?SOOQO-E<f-E<fO%GnQ`O1G6QO%GxQSO1G6QOOQ(CW1G2b1G2bO$LSQSO1G2bOOQ(CW1G2a1G2aO%HQQSO1G2cO!#]Q,UO1G2cOOQ(CW1G2h1G2hO!;xQWO1G2aOBoQSO1G2bO%HVQSO1G2cO%H_QSO1G2bO!$uQ,UO7+*|OOQ(CY1G/[1G/[O%HjQSO1G/[OOQ(CY7+'m7+'mO%HoQ,UO7+'tO%IPQ(CjO<<KQOOQ(CY<<KQ<<KQO!#]Q,UO'#IkO%IsQSO,5@gO!#]Q,UO1G2fOOQQ<<Gx<<GxO=}QSO<<GxO%I{Q(CjO<<IsOOQ(CY<<Is<<IsOOQO,5?],5?]O%JoQSO,5?]O$&vQSO,5?]OOQO-E<o-E<oO%JtQSO1G6XO%JtQSO1G6XO9[QSO1G6XO?oQSO<<LcOOQQ<<Lc<<LcO%J|QSO<<LcO8{Q(C[O<<LcO%KRQSO1G0rOOQQ<<K}<<K}O%!fQ(ChO<<K}OOQQ<<LO<<LOO%!pQ`O<<LOO%KWQWO'#ImO%KcQSO,5@jO!'RQUO,5@jOOQQ1G2|1G2|O%KkQ(C`O'#JfO%LVQUO'#JfO%L^QWO'#E_O%LwQ(C[O'#E_OBYQ(C`O'#E_O(VQWO'#HQOOQO'#Io'#IoO8{Q(C[O'#IoO%M]QWO,5=kOOQQ,5=k,5=kO%MuQWO'#E_O%LmQWO'#E_O%M|QWO'#E_O%NgQWO'#E_O& WQWO'#HQO& iQSO7+(pO& nQSO7+(pOOQQ7+(p7+(pO!#]Q,UO7+(pO%QQUO7+(pO& vQSO7+(pOOQQ7+(s7+(sO8{Q(C[O7+(sO#L_QSO7+(sO8qQSO7+(sO!;xQWO7+(sO&!RQSO,5?[OOQO-E<n-E<nOOQO'#HT'#HTO&!^QSO1G6VO8{Q(C[O<<GnOOQQ<<Gn<<GnO?oQSO<<GnO&!fQSO7++tO&!kQSO7++uOOQQ7+({7+({O&!pQSO7+({O&!uQUO7+({O&!|QSO7+({O%QQUO7++tO%QQUO7++uOOQQ<<Lo<<LoOOQQ<<Lq<<LqOOQQ-E<q-E<qOOQQ1G3p1G3pO&#RQSO,5>VOOQQ,5>X,5>XO&#WQSO1G3vO:sQSO7+&^O!'RQUO7+&^OOQO7+%X7+%XO&#]Q$IUO1G5wO=}QSO7+%XOOQ(CY<<I]<<I]OOQ(CY<<Ir<<IrO=}QSO<<IrOOQO<<Ik<<IkO$7kQ(CjO<<IkO%QQUO<<IkOOQO<<I`<<I`O=}QSO<<I`O&#gQ(C[O<<IkO!;xQWO<<I`O&#rQ(C[O<<IkOBtQWO<<I`O&$QQ(C[O<<IkO&$fQ(C`O<<IkO&$pQWO<<I`OBtQWO<<IkO&$}QSO<<NyO&%VQ(CjO<<NzOOQO7+*S7+*SO:sQSO7+*SOOQQANAbANAbO&%gQSOANAbO!#]Q,UOANAbO!MeQSOANAbO$NWQbOANAbO%QQUOANAbO&%oQ(CjO7+'rO&(QQ(CjO7+'tO&*cQbO1G4cO&*mQ$IUO7+&XO&*zQ$IUO,59nO&,}Q$IUO,5<cO&/QQ$IUO,5<eO&1TQ$IUO,5<sO&2yQ$IUO7+'eO&3WQ$IUO7+'fO&3eQSO,5<VOOQO7+'Y7+'YO&3jQ,UO<<KtOOQO1G4l1G4lO&3qQSO1G4lO&3|QSO1G4lO&4[QSO7++kO&4[QSO7++kO!#]Q,UO1G4nO&4dQ`O1G4nO&4nQSO7++lOOQ(CW7+'|7+'|O$LSQSO7+'}O&4vQ`O7+'}OOQ(CW7+'{7+'{O$LSQSO7+'|O&4}QSO7+'}O!#]Q,UO7+'}OBoQSO7+'|O&5SQ,UO<<NhOOQ(CY7+$v7+$vO&5^Q`O,5?VOOQO-E<i-E<iO&5hQ(ChO7+(QOOQQAN=dAN=dO9[QSO1G4wOOQO1G4w1G4wO&5xQSO1G4wO&5}QSO7++sO&5}QSO7++sO8{Q(C[OANA}O?oQSOANA}OOQQANA}ANA}OOQQANAiANAiOOQQANAjANAjO&6VQSO,5?XOOQO-E<k-E<kO&6bQ$IUO1G6UO#L_QSO,5=lO8qQSO,5=lO&8rQbO'#CfO&8|QWO,5:yO&9WQWO,5:yO&9eQWO,5:yO!;xQWO,5=lOOQO,5?Z,5?ZOOQO-E<m-E<mOOQQ1G3V1G3VO%LVQUO,5<wO%KkQ(C`O,5=lO!NrQ(C`O,5:yO(VQWO,5=lO&9xQWO,5=lO&:ZQWO,5:yOOQQ<<L[<<L[O!#]Q,UO<<L[O& iQSO<<L[O&:tQSO<<L[O%QQUO<<L[OOQQ<<L_<<L_O8{Q(C[O<<L_O#L_QSO<<L_O8qQSO<<L_O&:|QWO1G4vO&;XQSO7++qOOQQAN=YAN=YO8{Q(C[OAN=YOOQQ<= `<= `OOQQ<= a<= aOOQQ<<Lg<<LgO&;aQSO<<LgO&;fQUO<<LgO&;mQSO<= `O&;rQSO<= aOOQQ1G3q1G3qO=}QSO7+)bO&;wQSO<<IxO&<SQ$IUO<<IxOOQO<<Hs<<HsOOQ(CYAN?^AN?^OOQOAN?VAN?VO$7kQ(CjOAN?VOOQOAN>zAN>zO%QQUOAN?VO=}QSOAN>zO&<^Q(C[OAN?VO!;xQWOAN>zO&<iQ(C[OAN?VOBtQWOAN>zO&<wQ(C[OAN?VOOQO<<Mn<<MnOOQQG26|G26|O!#]Q,UOG26|O!MeQSOG26|O&=]QSOG26|O$NWQbOG26|O&=eQ$IUO<<J`O&=rQ$IUO1G2WO&?hQ$IUO1G2jO&AkQ$IUO1G2lO&CnQ$IUO<<KQO&C{Q$IUO<<IsOOQO1G1q1G1qO!$uQ,UOANA`OOQO7+*W7+*WO&DYQSO7+*WO&DeQSO<= VO&DmQ`O7+*YOOQ(CW<<Ki<<KiO$LSQSO<<KiOOQ(CW<<Kh<<KhO&DwQ`O<<KiO$LSQSO<<KhOOQO7+*c7+*cO9[QSO7+*cO&EOQSO<= _OOQQG27iG27iO8{Q(C[OG27iO!'RQUO1G4sO&EWQSO7++pO8{Q(C[O1G3WO#L_QSO1G3WO&E`QWO1G0eO&EjQWO1G0eO8qQSO1G3WO!;xQWO1G3WO(VQWO1G3WO%KkQ(C`O1G3WO$5]Q(C`O1G0eO&EwQWO1G3WO& iQSOANAvOOQQANAvANAvO!#]Q,UOANAvO&FYQSOANAvOOQQANAyANAyO8{Q(C[OANAyO#L_QSOANAyOOQO'#HU'#HUOOQO7+*b7+*bOOQQG22tG22tOOQQANBRANBRO&FbQSOANBROOQQANDzANDzOOQQAND{AND{OOQQ<<L|<<L|O!'RQUOAN?dOOQOG24qG24qO$7kQ(CjOG24qOOQOG24fG24fO%QQUOG24qO=}QSOG24fO&FgQ(C[OG24qO!;xQWOG24fO&FrQ(C[OG24qO!MeQSOLD,hOOQQLD,hLD,hO!#]Q,UOLD,hO&GQQSOLD,hO&GYQ$IUO7+'rO&IOQ$IUO7+'tO&JtQ,UOG26zOOQO<<Mr<<MrOOQ(CWANATANATO$LSQSOANATOOQ(CWANASANASOOQO<<M}<<M}OOQQLD-TLD-TO&KUQ$IUO7+*_OOQO7+(r7+(rO8{Q(C[O7+(rO&K`QWO7+&PO#L_QSO7+(rO8qQSO7+(rO!;xQWO7+(rO(VQWO7+(rOOQQG27bG27bO& iQSOG27bO!#]Q,UOG27bOOQQG27eG27eO8{Q(C[OG27eOOQQG27mG27mO&KjQ$IUOG25OOOQOLD*]LD*]O$7kQ(CjOLD*]OOQOLD*QLD*QO%QQUOLD*]O=}QSOLD*QO&KtQ(C[OLD*]OOQQ!$(!S!$(!SO!MeQSO!$(!SO!#]Q,UO!$(!SO&LPQ(CjOG26zOOQ(CWG26oG26oOOQO<<L^<<L^O8{Q(C[O<<L^O#L_QSO<<L^O8qQSO<<L^O!;xQWO<<L^OOQQLD,|LD,|O& iQSOLD,|OOQQLD-PLD-POOQO!$'Mw!$'MwO$7kQ(CjO!$'MwOOQO!$'Ml!$'MlO%QQUO!$'MwOOQQ!)9En!)9EnO!MeQSO!)9EnOOQOANAxANAxO8{Q(C[OANAxO#L_QSOANAxO8qQSOANAxOOQQ!$(!h!$(!hOOQO!)9Cc!)9CcO$7kQ(CjO!)9CcOOQQ!.K;Y!.K;YO&NbQ$IUOG26zOOQOG27dG27dO8{Q(C[OG27dO#L_QSOG27dOOQO!.K8}!.K8}OOQOLD-OLD-OO8{Q(C[OLD-OOOQO!$(!j!$(!jO!'RQUO'#DvO0rQSO'#ETO'!WQbO'#JbO!'RQUO'#DnO'!_QUO'#DzO!'RQUO'#D|O'!fQbO'#CfO'$|QbO'#CfO'%^QUO,5;RO!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO,5;]O!'RQUO'#IeO''aQSO,5<bO''iQ,UO,5;]O'(|Q,UO,5;]O!'RQUO,5;qO0uQSO'#DSO0uQSO'#DSO!#]Q,UO'#FwO''iQ,UO'#FwO!#]Q,UO'#FyO''iQ,UO'#FyO!#]Q,UO'#GXO''iQ,UO'#GXO!'RQUO,5:fO!'RQUO,5@]O'%^QUO1G0mO')TQ$IUO'#CfO!'RQUO1G1yO!#]Q,UO,5=OO''iQ,UO,5=OO!#]Q,UO,5=QO''iQ,UO,5=QO!#]Q,UO,5<lO''iQ,UO,5<lO'%^QUO1G1zO!'RQUO7+&tO!#]Q,UO1G2WO''iQ,UO1G2WO!#]Q,UO1G2YO''iQ,UO1G2YO'%^QUO7+'fO'%^QUO7+&XO!#]Q,UOANA`O''iQ,UOANA`O')_QSO'#EgO')dQSO'#EgO')lQSO'#FVO')qQSO'#EqO')vQSO'#JqO'*RQSO'#JoO'*^QSO,5;RO'*cQ,UO,5<_O'*jQSO'#GQO'*oQSO'#GQO'*tQSO,5<`O'*|QSO,5;RO'+UQ$IUO1G1YO'+]QSO,5<lO'+bQSO,5<lO'+gQSO,5<nO'+lQSO,5<nO'+qQSO1G1zO'+vQSO1G0mO'+{Q,UO<<KtO',SQ,UO<<KtO7ZQ,UO'#FuO8qQSO'#FtO@jQSO'#EfO!'RQUO,5;nO!/{QSO'#GQO!/{QSO'#GQO!/{QSO'#GSO!/{QSO'#GSO!$uQ,UO7+(YO!$uQ,UO7+(YO$IvQ`O1G2nO$IvQ`O1G2nO!#]Q,UO,5=SO!#]Q,UO,5=S",
						stateData:
							"'-[~O'lOS'mOSROS'nRQ~OPYOQYOV!TO^pOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O#o}O$PzO$TfO%_{O%a!OO%c|O%d|O%g!PO%i!QO%l!RO%m!RO%o!SO%|!UO&S!VO&U!WO&W!XO&Y!YO&]!ZO&c![O&i!]O&k!^O&m!_O&o!`O&q!aO'sSO'uTO'xUO(QVO(_[O(liO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's!bO'uTO'xUO(QVO(_[O(liO~O^!qOl!kO|!lO![!rO!]!pO!^!pO!x;oO!|!vO!}!tO#O!uO#P!sO#S!wO#T!wO't!iO'uTO'xUO(T!jO(_!nO~O'n!xO~OPYXXYX^YXkYXyYXzYX|YX!VYX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX'jYX(QYX(`YX(gYX(hYX~O!a$yX~P(dO[!zO'u!|O'v!zO'w!|O~O[!}O'w!|O'x!|O'y!}O~Oq#PO!O#QO(R#QO(S#SO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's;tO'uTO'xUO(QVO(_[O(liO~O!U#WO!V#TO!S(WP!S(dP~P+pO!W#`O~P`OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!X!cO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO'uTO'xUO(QVO(_[O(liO~O!U#fO!x]O#a#iO#b#fO's;uO!g(aP~P.[O!h#kO's#jO~O!t#oO!x]O%_#pO~O#c#qO~O!a#rO#c#qO~OP$YOX$aOk#}Oy#vOz#wO|#xO!V$^O!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O^(UX'j(UX'h(UX!g(UX!S(UX!X(UX%`(UX!a(UX~P1dO#W$bO#z$bOP(VXX(VXk(VXy(VXz(VX|(VX!V(VX!e(VX!h(VX!l(VX#f(VX#g(VX#h(VX#i(VX#j(VX#k(VX#l(VX#m(VX#n(VX#p(VX#r(VX#t(VX#u(VX(Q(VX(`(VX(g(VX(h(VX!X(VX%`(VX~O^(VX!f(VX'j(VX'h(VX!S(VX!g(VXo(VX!a(VX~P3zO#W$bO~O$V$dO$X$cO$`$iO~O!X$jO$TfO$c$kO$e$mO~Oi%POk$qOl$pOm$pOs%QOu%ROw%SO|$xO!X$yO!c%XO!h$uO#b%YO$P%VO$l%TO$n%UO$q%WO's$oO'uTO'xUO'|%OO(Q$rOd'}P~O!h%ZO~O!a%]O~O^%^O'j%^O~O't!iO~P%QO's%eO~O!h%ZO's%eO't!iO'|%OO~Ob%lO!h%ZO's%eO~O#n$PO~Oy%qO!X%nO!h%pO%a%tO's%eO't!iO'uTO'xUO](tP~O!t#oO~O|%vO!X%wO's%eO~O|%vO!X%wO%i%{O's%eO~O's%|O~O#o}O%a!OO%c|O%d|O%g!PO%i!QO%l!RO%m!RO~Oa&VOb&UO!t&SO%_&TO%q&RO~P;cOa&YObwO!X&XO!tvO!x]O#o}O%_{O%c|O%d|O%g!PO%i!QO%l!RO%m!RO%o!SO~O_&]O#W&`O%a&ZO't!iO~P<bO!h&aO!q&eO~O!h#kO~O!XXO~O^%^O'i&mO'j%^O~O^%^O'i&pO'j%^O~O^%^O'i&rO'j%^O~O'hYX!SYXoYX!gYX&QYX!XYX%`YX!aYX~P(dO!['PO!]&xO!^&xO't!iO'uTO'xUO~Ol&vO|&uO!U&yO(T&tO!W(XP!W(fP~P?cOg'SO!X'QO's%eO~Ob'XO!h%ZO's%eO~Oy%qO!h%pO~Ol!kO|!lO!['^O!]']O!^']O!}'`O#O'`O#P'_O#S'bO#T'bO't!iO'uTO'xUO(T!jO(_!nO~O!x;oO!|'aO~P@}O^%^O!a#rO!h%ZO!l'hO#W'fO'j%^O'|%OO(`'dO~Ol!kO|!lO'uTO'xUO(T!jO(_!nO~O!]']O!^']O't!iO~PBtO!['^O!]']O!^']O#S'bO#T'bO't!iO~PBtO!XXO!['^O!]']O!^']O#P'_O#S'bO#T'bO't!iO~PBtO'o'lO'p'lO'q'nO~O[!zO'u'pO'v!zO'w'pO~O[!}O'w'pO'x'pO'y!}O~Oq#PO!O#QO(R#QO(S'tO~O!U'vO!S&|X!S'SX!V&|X!V'SX~P+pO!V'xO!S(WX~OP$YOX$aOk#}Oy#vOz#wO|#xO!V'xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O!S(WX~PF_O!S'}O~O!S(cX!V(cX!a(cX!g(cX(`(cX~O#W(cX#c#[X!W(cX~PHeO#W(OO!S(eX!V(eX~O!V(PO!S(dX~O!S(SO~O#W$bO~PHeO!W(TO~P`Oy#vOz#wO|#xO!f#tO!h#uO(QVOP!jaX!jak!ja!V!ja!e!ja!l!ja#f!ja#g!ja#h!ja#i!ja#j!ja#k!ja#l!ja#m!ja#n!ja#p!ja#r!ja#t!ja#u!ja(`!ja(g!ja(h!ja~O^!ja'j!ja'h!ja!S!ja!g!jao!ja!X!ja%`!ja!a!ja~PI{O!g(UO~O|%vO!X%wO!x]O#a(XO#b(WO's%eO~O!a#rO#W(YO(`'dO!V(bX^(bX'j(bX~O!g(bX~PMPO!V(]O!g(aX~O!g(_O~O|%vO!X%wO#b(WO's%eO~Oy(`Oz(aO!f#tO!h#uO!x!wa|!wa~O!t!wa%_!wa!X!wa#a!wa#b!wa's!wa~PNXO!t(eO~OPYOQYOa!gOb!fOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!XXO!csO!hZO!kYO!lYO!mYO!otO!quO!t!eO$P!hO$TfO's!bO'uTO'xUO(QVO(_[O(liO~Oi%POk$qOl$pOm$pOs%QOu%ROw<XO|$xO!X$yO!c=cO!h$uO#b<_O$P%VO$l<ZO$n<]O$q%WO's(iO'uTO'xUO'|%OO(Q$rO~O#c(kO~Oi%POk$qOl$pOm$pOs%QOu%ROw%SO|$xO!X$yO!c%XO!h$uO#b%YO$P%VO$l%TO$n%UO$q%WO's(iO'uTO'xUO'|%OO(Q$rO~Od(ZP~P!$uO!U(oO!g([P~P%QO(T(qO(_[O~O|(sO!h#uO(T(qO(_[O~OP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!X!cO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO's)RO'uTO'xUO(QVO(_[O(l=]O~Oz)UO!h#uO~O!V$^O^$ja'j$ja'h$ja!g$ja!S$ja!X$ja%`$ja!a$ja~O#o)YO~P!#]Oy)]O!a)[O!X$WX$S$WX$V$WX$X$WX$`$WX~O!a)[O!X(iX$S(iX$V(iX$X(iX$`(iX~Oy)]O~P!*kOy)]O!X(iX$S(iX$V(iX$X(iX$`(iX~O!X)_O$S)cO$V)^O$X)^O$`)dO~O!U)gO~P!'RO$V$dO$X$cO$`)kO~Og$rXy$rX|$rX!f$rX(g$rX(h$rX~OdfXd$rXgfX!VfX#WfX~P!,aOl)mO~Oq)nO(R)oO(S)qO~Og)zOy)sO|)tO(g)vO(h)xO~Od)rO~P!-jOd){O~Oi%POk$qOl$pOm$pOs%QOu%ROw<XO|$xO!X$yO!c=cO!h$uO#b<_O$P%VO$l<ZO$n<]O$q%WO'uTO'xUO'|%OO(Q$rO~O!U*PO's)|O!g(mP~P!.XO#c*RO~O!h*SO~O!U*XO's*UO!S(nP~P!.XOk*eO|*]O![*cO!]*[O!^*[O!h*SO#S*dO%V*_O't!iO(T!jO~O!W*bO~P!0_O!f#tOg(PXy(PX|(PX(g(PX(h(PX!V(PX#W(PX~Od(PX#x(PX~P!1WOg*hO#W*gOd(OX!V(OX~O!V*iOd'}X~O's%|Od'}P~O!h*pO~O's(iO~O|%vO!U#fO!X%wO!x]O#a#iO#b#fO's%eO!g(aP~O!a#rO#c*tO~OP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO#u$VO(QVO(`$WO(g#yO(h#zO~O^!ba!V!ba'j!ba'h!ba!S!ba!g!bao!ba!X!ba%`!ba!a!ba~P!3jOy#vOz#wO|#xO!f#tO!h#uO(QVOP!naX!nak!na!V!na!e!na!l!na#f!na#g!na#h!na#i!na#j!na#k!na#l!na#m!na#n!na#p!na#r!na#t!na#u!na(`!na(g!na(h!na~O^!na'j!na'h!na!S!na!g!nao!na!X!na%`!na!a!na~P!6TOy#vOz#wO|#xO!f#tO!h#uO(QVOP!paX!pak!pa!V!pa!e!pa!l!pa#f!pa#g!pa#h!pa#i!pa#j!pa#k!pa#l!pa#m!pa#n!pa#p!pa#r!pa#t!pa#u!pa(`!pa(g!pa(h!pa~O^!pa'j!pa'h!pa!S!pa!g!pao!pa!X!pa%`!pa!a!pa~P!8nOg*|O!X'QO%`*{O'|%OO~O!a+OO!X'{X^'{X!V'{X'j'{X~O!h%ZO'|%OO~O!h%ZO's%eO'|%OO~O!a#rO#c(kO~O%a+[O's+WO'uTO'xUO!W(uP~O!V+]O](tX~O(T(qO~OX+aO~O]+bO~O!X%nO's%eO't!iO](tP~O|%vO!U+fO!V(PO!X%wO's%eO!S(dP~Ol&|O|+hO!U+gO'uTO'xUO(T(qO~O!W(fP~P!>RO!V+iO^(qX'j(qX~O#W+mO'|%OO~Og+pO!X$yO'|%OO~O!X+rO~Oy+tO!XXO~O!t+yO~Ob,OO~O's#jO!W(sP~Ob%lO~O%a!OO's%|O~P<bOX,UO],TO~OPYOQYOaxObwOikOkYOlkOmkOskOuYOwYO|WO!QkO!RkO!csO!hZO!kYO!lYO!mYO!otO!quO!tvO!x]O$TfO%_{O'uTO'xUO(QVO(_[O(liO~O!X!cO$P!hO's!bO~P!@fO],TO^%^O'j%^O~O^,YO#o,[O%c,[O%d,[O~P%QO!h&aO~O&S,aO~O!X,cO~O&e,eO&g,fOP&baQ&baV&ba^&baa&bab&bai&bak&bal&bam&bas&bau&baw&ba|&ba!Q&ba!R&ba!X&ba!c&ba!h&ba!k&ba!l&ba!m&ba!o&ba!q&ba!t&ba!x&ba#o&ba$P&ba$T&ba%_&ba%a&ba%c&ba%d&ba%g&ba%i&ba%l&ba%m&ba%o&ba%|&ba&S&ba&U&ba&W&ba&Y&ba&]&ba&c&ba&i&ba&k&ba&m&ba&o&ba&q&ba'h&ba's&ba'u&ba'x&ba(Q&ba(_&ba(l&ba!W&ba&Z&ba_&ba&`&ba~O's,kO~O!V{X!V!_X!W{X!W!_X!a{X!a!_X!h!_X#W{X'|!_X~O!a,pO#W,oO!V#`X!V(YX!W#`X!W(YX!a(YX!h(YX'|(YX~O!a,rO!h%ZO'|%OO!V!ZX!W!ZX~Ol!kO|!lO'uTO'xUO(T!jO~OP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!X!cO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO'uTO'xUO(QVO(_[O(l=]O~O's<dO~P!I{O!V,vO!W(XX~O!W,xO~O!a,pO#W,oO!V#`X!W#`X~O!V,yO!W(fX~O!W,{O~O!],|O!^,|O't!iO~P!IjO!W-PO~P'TOg-SO!X'QO~O!S-XO~Ol!wa![!wa!]!wa!^!wa!|!wa!}!wa#O!wa#P!wa#S!wa#T!wa't!wa'u!wa'x!wa(T!wa(_!wa~PNXO^%^O!a#rO!h%ZO!l-^O#W-[O'j%^O'|%OO(`'dO~O!]-`O!^-`O't!iO~PBtO![-bO!]-`O!^-`O#S-cO#T-cO't!iO~PBtO![-bO!]-`O!^-`O#P-dO#S-cO#T-cO't!iO~PBtO![-bO!]-`O!^-`O!}-eO#O-eO#P-dO#S-cO#T-cO't!iO~PBtO^%^O#W-[O'j%^O~O^%^O!a#rO#W-[O'j%^O~O^%^O!a#rO!l-^O#W-[O'j%^O(`'dO~O'o'lO'p'lO'q-jO~Oo-kO~O!S&|a!V&|a~P!3jO!U-oO!S&|X!V&|X~P%QO!V'xO!S(Wa~O!S(Wa~PF_O!V(PO!S(da~O|%vO!U-sO!X%wO's%eO!S'SX!V'SX~O!V(]O!g(aa~O|%vO!X%wO#b-vO's%eO~O#W-xO!V(ba!g(ba^(ba'j(ba~O!a#rO~P#&hO|%vO!U-{O!X%wO!x]O#a-}O#b-{O's%eO!V'UX!g'UX~Oz.RO!h#uO~Og.UO!X'QO%`.TO'|%OO~O^#Zi!V#Zi'j#Zi'h#Zi!S#Zi!g#Zio#Zi!X#Zi%`#Zi!a#Zi~P!3jOg=iOy)sO|)tO(g)vO(h)xO~O#c#Va^#Va#W#Va'j#Va!V#Va!g#Va!X#Va!S#Va~P#(yO#c(PXP(PXX(PX^(PXk(PXz(PX!e(PX!h(PX!l(PX#f(PX#g(PX#h(PX#i(PX#j(PX#k(PX#l(PX#m(PX#n(PX#p(PX#r(PX#t(PX#u(PX'j(PX(Q(PX(`(PX!g(PX!S(PX'h(PXo(PX!X(PX%`(PX!a(PX~P!1WO!V._Od(ZX~P!-jOd.aO~O!V.bO!g([X~P!3jO!g.eO~O!S.gO~OP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO(QVOX#ei^#eik#ei!V#ei!e#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O#f#ei~P#,uO#f#{O~P#,uOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O(QVOX#ei^#ei!V#ei!e#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~Ok#ei~P#/gOk#}O~P#/gOP$YOk#}Oy#vOz#wO|#xO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO(QVO^#ei!V#ei#p#ei#r#ei#t#ei#u#ei'j#ei(`#ei(g#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~OX#ei!e#ei#k#ei#l#ei#m#ei#n#ei~P#2XOX$aO!e$PO#k$PO#l$PO#m$`O#n$PO~P#2XOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO(QVO^#ei!V#ei#r#ei#t#ei#u#ei'j#ei(`#ei(h#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O(g#ei~P#5YO(g#yO~P#5YOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO(QVO(g#yO^#ei!V#ei#t#ei#u#ei'j#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~O(h#ei~P#7zO(h#zO~P#7zOP$YOX$aOk#}Oy#vOz#wO|#xO!e$PO!f#tO!h#uO!l$YO#f#{O#g#|O#h#|O#i#|O#j$OO#k$PO#l$PO#m$`O#n$PO#p$QO#r$SO#t$UO(QVO(g#yO(h#zO~O^#ei!V#ei#u#ei'j#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~P#:lOPYXXYXkYXyYXzYX|YX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX!VYX!WYX~O#xYX~P#=VOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO#t<QO#u<RO(QVO(`$WO(g#yO(h#zO~O#x.iO~P#?dOP(VXX(VXk(VXy(VXz(VX|(VX!e(VX!f(VX!h(VX!l(VX#f(VX#g(VX#h(VX#i(VX#j(VX#k(VX#l(VX#m(VX#p(VX#r(VX#t(VX#u(VX(Q(VX(`(VX(g(VX(h(VX!V(VX~O#W<WO#z<WO#n(VX#x(VX!W(VX~P#AbO^'Xa!V'Xa'j'Xa'h'Xa!g'Xa!S'Xao'Xa!X'Xa%`'Xa!a'Xa~P!3jOP#eiX#ei^#eik#eiz#ei!V#ei!e#ei!f#ei!h#ei!l#ei#f#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei'j#ei(Q#ei(`#ei'h#ei!S#ei!g#eio#ei!X#ei%`#ei!a#ei~P#(yO^#yi!V#yi'j#yi'h#yi!S#yi!g#yio#yi!X#yi%`#yi!a#yi~P!3jO$V.nO$X.nO~O$V.oO$X.oO~O!a)[O#W.pO!X$]X$S$]X$V$]X$X$]X$`$]X~O!U.qO~O!X)_O$S.sO$V)^O$X)^O$`.tO~O!V<SO!W(UX~P#?dO!W.uO~O!a)[O$`(iX~O$`.wO~Oq)nO(R)oO(S.zO~Ol.}O!S/OO'uTO'xUO~O!VcX!acX!gcX!g$rX(`cX~P!,aO!g/UO~P#(yO!V/VO!a#rO(`'dO!g(mX~O!g/[O~O!U*PO's%eO!g(mP~O#c/^O~O!S$rX!V$rX!a$yX~P!,aO!V/_O!S(nX~P#(yO!a/aO~O!S/cO~Ok/gO!a#rO!h%ZO'|%OO(`'dO~O's/iO~O!a+OO~O^%^O!V/mO'j%^O~O!W/oO~P!0_O!]/pO!^/pO't!iO(T!jO~O|/rO(T!jO~O#S/sO~O's%|Od'^X!V'^X~O!V*iOd'}a~Od/xO~Oy/yOz/yO|/zOgva(gva(hva!Vva#Wva~Odva#xva~P#M{Oy)sO|)tOg$ka(g$ka(h$ka!V$ka#W$ka~Od$ka#x$ka~P#NqOy)sO|)tOg$ma(g$ma(h$ma!V$ma#W$ma~Od$ma#x$ma~P$ dO#c/|O~Od${a!V${a#W${a#x${a~P!-jO#c0PO~Oy#vOz#wO|#xO!f#tO!h#uO(QVOP!niX!nik!ni!V!ni!e!ni!l!ni#f!ni#g!ni#h!ni#i!ni#j!ni#k!ni#l!ni#m!ni#n!ni#p!ni#r!ni#t!ni#u!ni(`!ni(g!ni(h!ni~O^!ni'j!ni'h!ni!S!ni!g!nio!ni!X!ni%`!ni!a!ni~P$!qOg.UO!X'QO%`.TO~Oi0WO's0VO~P!.[O!a+OO!X'{a^'{a!V'{a'j'{a~O#c0^O~OXYX!VcX!WcX~O!V0_O!W(uX~O!W0aO~OX0bO~O's+WO'uTO'xUO~O!X%nO's%eO]'fX!V'fX~O!V+]O](ta~O!g0gO~P!3jOX0jO~O]0kO~O!V+iO^(qa'j(qa~O#W0qO~Og0tO!X$yO~O(T(qO!W(rP~Og0}O!X0zO%`0|O'|%OO~OX1XO!V1VO!W(sX~O!W1YO~O]1[O^%^O'j%^O~O's#jO'uTO'xUO~O#W$bO#n1_O#z$bO&Q1`O^(VX~P#AbO#W$bO#n1_O&Q1`O~O^1aO~P%QO^1cO~O&Z1gOP&XiQ&XiV&Xi^&Xia&Xib&Xii&Xik&Xil&Xim&Xis&Xiu&Xiw&Xi|&Xi!Q&Xi!R&Xi!X&Xi!c&Xi!h&Xi!k&Xi!l&Xi!m&Xi!o&Xi!q&Xi!t&Xi!x&Xi#o&Xi$P&Xi$T&Xi%_&Xi%a&Xi%c&Xi%d&Xi%g&Xi%i&Xi%l&Xi%m&Xi%o&Xi%|&Xi&S&Xi&U&Xi&W&Xi&Y&Xi&]&Xi&c&Xi&i&Xi&k&Xi&m&Xi&o&Xi&q&Xi'h&Xi's&Xi'u&Xi'x&Xi(Q&Xi(_&Xi(l&Xi!W&Xi_&Xi&`&Xi~O_1mO!W1kO&`1lO~P`O!XXO!h1oO~O&g,fOP&biQ&biV&bi^&bia&bib&bii&bik&bil&bim&bis&biu&biw&bi|&bi!Q&bi!R&bi!X&bi!c&bi!h&bi!k&bi!l&bi!m&bi!o&bi!q&bi!t&bi!x&bi#o&bi$P&bi$T&bi%_&bi%a&bi%c&bi%d&bi%g&bi%i&bi%l&bi%m&bi%o&bi%|&bi&S&bi&U&bi&W&bi&Y&bi&]&bi&c&bi&i&bi&k&bi&m&bi&o&bi&q&bi'h&bi's&bi'u&bi'x&bi(Q&bi(_&bi(l&bi!W&bi&Z&bi_&bi&`&bi~O!S1uO~O!V!Za!W!Za~P#?dOl!kO|!lO!U1{O(T!jO!V&}X!W&}X~P?cO!V,vO!W(Xa~O!V'TX!W'TX~P!>RO!V,yO!W(fa~O!W2SO~P'TO^%^O#W2]O'j%^O~O^%^O!a#rO#W2]O'j%^O~O^%^O!a#rO!h%ZO!l2aO#W2]O'j%^O'|%OO(`'dO~O!]2bO!^2bO't!iO~PBtO![2eO!]2bO!^2bO#S2fO#T2fO't!iO~PBtO![2eO!]2bO!^2bO#P2gO#S2fO#T2fO't!iO~PBtO^%^O!a#rO!l2aO#W2]O'j%^O(`'dO~O^%^O'j%^O~P!3jO!V$^Oo$ja~O!S&|i!V&|i~P!3jO!V'xO!S(Wi~O!V(PO!S(di~O!S(ei!V(ei~P!3jO!V(]O!g(ai~O!V(bi!g(bi^(bi'j(bi~P!3jO#W2kO!V(bi!g(bi^(bi'j(bi~O|%vO!X%wO!x]O#a2nO#b2mO's%eO~O|%vO!X%wO#b2mO's%eO~Og2uO!X'QO%`2tO~Og2uO!X'QO%`2tO'|%OO~O#cvaPvaXva^vakva!eva!fva!hva!lva#fva#gva#hva#iva#jva#kva#lva#mva#nva#pva#rva#tva#uva'jva(Qva(`va!gva!Sva'hvaova!Xva%`va!ava~P#M{O#c$kaP$kaX$ka^$kak$kaz$ka!e$ka!f$ka!h$ka!l$ka#f$ka#g$ka#h$ka#i$ka#j$ka#k$ka#l$ka#m$ka#n$ka#p$ka#r$ka#t$ka#u$ka'j$ka(Q$ka(`$ka!g$ka!S$ka'h$kao$ka!X$ka%`$ka!a$ka~P#NqO#c$maP$maX$ma^$mak$maz$ma!e$ma!f$ma!h$ma!l$ma#f$ma#g$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#p$ma#r$ma#t$ma#u$ma'j$ma(Q$ma(`$ma!g$ma!S$ma'h$mao$ma!X$ma%`$ma!a$ma~P$ dO#c${aP${aX${a^${ak${az${a!V${a!e${a!f${a!h${a!l${a#f${a#g${a#h${a#i${a#j${a#k${a#l${a#m${a#n${a#p${a#r${a#t${a#u${a'j${a(Q${a(`${a!g${a!S${a'h${a#W${ao${a!X${a%`${a!a${a~P#(yO^#Zq!V#Zq'j#Zq'h#Zq!S#Zq!g#Zqo#Zq!X#Zq%`#Zq!a#Zq~P!3jOd'OX!V'OX~P!$uO!V._Od(Za~O!U2}O!V'PX!g'PX~P%QO!V.bO!g([a~O!V.bO!g([a~P!3jO!S3QO~O#x!ja!W!ja~PI{O#x!ba!V!ba!W!ba~P#?dO#x!na!W!na~P!6TO#x!pa!W!pa~P!8nO!X3dO$TfO$^3eO~O!W3iO~Oo3jO~P#(yO^$gq!V$gq'j$gq'h$gq!S$gq!g$gqo$gq!X$gq%`$gq!a$gq~P!3jO!S3kO~Ol.}O'uTO'xUO~Oy)sO|)tO(h)xOg%Wi(g%Wi!V%Wi#W%Wi~Od%Wi#x%Wi~P$HbOy)sO|)tOg%Yi(g%Yi(h%Yi!V%Yi#W%Yi~Od%Yi#x%Yi~P$ITO(`$WO~P#(yO!U3nO's%eO!V'YX!g'YX~O!V/VO!g(ma~O!V/VO!a#rO!g(ma~O!V/VO!a#rO(`'dO!g(ma~Od$ti!V$ti#W$ti#x$ti~P!-jO!U3vO's*UO!S'[X!V'[X~P!.XO!V/_O!S(na~O!V/_O!S(na~P#(yO!a#rO~O!a#rO#n4OO~Ok4RO!a#rO(`'dO~Od(Oi!V(Oi~P!-jO#W4UOd(Oi!V(Oi~P!-jO!g4XO~O^$hq!V$hq'j$hq'h$hq!S$hq!g$hqo$hq!X$hq%`$hq!a$hq~P!3jO!V4]O!X(oX~P#(yO!f#tO~P3zO!X$rX%TYX^$rX!V$rX'j$rX~P!,aO%T4_OghXyhX|hX!XhX(ghX(hhX^hX!VhX'jhX~O%T4_O~O%a4fO's+WO'uTO'xUO!V'eX!W'eX~O!V0_O!W(ua~OX4jO~O]4kO~O!S4oO~O^%^O'j%^O~P#(yO!X$yO~P#(yO!V4tO#W4vO!W(rX~O!W4wO~Ol!kO|4yO![5WO!]4}O!^4}O!x;oO!|5VO!}5UO#O5UO#P5TO#S5SO#T!wO't!iO'uTO'xUO(T!jO(_!nO~O!W5RO~P%#XOg5]O!X0zO%`5[O~Og5]O!X0zO%`5[O'|%OO~O's#jO!V'dX!W'dX~O!V1VO!W(sa~O'uTO'xUO(T5fO~O]5jO~O!g5mO~P%QO^5oO~O^5oO~P%QO#n5qO&Q5rO~PMPO_1mO!W5vO&`1lO~P`O!a5xO~O!a5zO!V(Yi!W(Yi!a(Yi!h(Yi'|(Yi~O!V#`i!W#`i~P#?dO#W5{O!V#`i!W#`i~O!V!Zi!W!Zi~P#?dO^%^O#W6UO'j%^O~O^%^O!a#rO#W6UO'j%^O~O^%^O!a#rO!l6ZO#W6UO'j%^O(`'dO~O!h%ZO'|%OO~P%(fO!]6[O!^6[O't!iO~PBtO![6_O!]6[O!^6[O#S6`O#T6`O't!iO~PBtO!V(]O!g(aq~O!V(bq!g(bq^(bq'j(bq~P!3jO|%vO!X%wO#b6dO's%eO~O!X'QO%`6gO~Og6jO!X'QO%`6gO~O#c%WiP%WiX%Wi^%Wik%Wiz%Wi!e%Wi!f%Wi!h%Wi!l%Wi#f%Wi#g%Wi#h%Wi#i%Wi#j%Wi#k%Wi#l%Wi#m%Wi#n%Wi#p%Wi#r%Wi#t%Wi#u%Wi'j%Wi(Q%Wi(`%Wi!g%Wi!S%Wi'h%Wio%Wi!X%Wi%`%Wi!a%Wi~P$HbO#c%YiP%YiX%Yi^%Yik%Yiz%Yi!e%Yi!f%Yi!h%Yi!l%Yi#f%Yi#g%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#p%Yi#r%Yi#t%Yi#u%Yi'j%Yi(Q%Yi(`%Yi!g%Yi!S%Yi'h%Yio%Yi!X%Yi%`%Yi!a%Yi~P$ITO#c$tiP$tiX$ti^$tik$tiz$ti!V$ti!e$ti!f$ti!h$ti!l$ti#f$ti#g$ti#h$ti#i$ti#j$ti#k$ti#l$ti#m$ti#n$ti#p$ti#r$ti#t$ti#u$ti'j$ti(Q$ti(`$ti!g$ti!S$ti'h$ti#W$tio$ti!X$ti%`$ti!a$ti~P#(yOd'Oa!V'Oa~P!-jO!V'Pa!g'Pa~P!3jO!V.bO!g([i~O#x#Zi!V#Zi!W#Zi~P#?dOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO(QVOX#eik#ei!e#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~O#f#ei~P%2xO#f;wO~P%2xOP$YOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO(QVOX#ei!e#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~Ok#ei~P%5TOk;yO~P%5TOP$YOk;yOy#vOz#wO|#xO!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO(QVO#p#ei#r#ei#t#ei#u#ei#x#ei(`#ei(g#ei(h#ei!V#ei!W#ei~OX#ei!e#ei#k#ei#l#ei#m#ei#n#ei~P%7`OX<VO!e;{O#k;{O#l;{O#m<UO#n;{O~P%7`OP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O(QVO#r#ei#t#ei#u#ei#x#ei(`#ei(h#ei!V#ei!W#ei~O(g#ei~P%9zO(g#yO~P%9zOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO(QVO(g#yO#t#ei#u#ei#x#ei(`#ei!V#ei!W#ei~O(h#ei~P%<VO(h#zO~P%<VOP$YOX<VOk;yOy#vOz#wO|#xO!e;{O!f#tO!h#uO!l$YO#f;wO#g;xO#h;xO#i;xO#j;zO#k;{O#l;{O#m<UO#n;{O#p;|O#r<OO#t<QO(QVO(g#yO(h#zO~O#u#ei#x#ei(`#ei!V#ei!W#ei~P%>bO^#vy!V#vy'j#vy'h#vy!S#vy!g#vyo#vy!X#vy%`#vy!a#vy~P!3jOg=jOy)sO|)tO(g)vO(h)xO~OP#eiX#eik#eiz#ei!e#ei!f#ei!h#ei!l#ei#f#ei#g#ei#h#ei#i#ei#j#ei#k#ei#l#ei#m#ei#n#ei#p#ei#r#ei#t#ei#u#ei#x#ei(Q#ei(`#ei!V#ei!W#ei~P%AYO!f#tOP(PXX(PXg(PXk(PXy(PXz(PX|(PX!e(PX!h(PX!l(PX#f(PX#g(PX#h(PX#i(PX#j(PX#k(PX#l(PX#m(PX#n(PX#p(PX#r(PX#t(PX#u(PX#x(PX(Q(PX(`(PX(g(PX(h(PX!V(PX!W(PX~O#x#yi!V#yi!W#yi~P#?dO#x!ni!W!ni~P$!qO!W6vO~O!V'Xa!W'Xa~P#?dO!a#rO(`'dO!V'Ya!g'Ya~O!V/VO!g(mi~O!V/VO!a#rO!g(mi~Od$tq!V$tq#W$tq#x$tq~P!-jO!S'[a!V'[a~P#(yO!a6}O~O!V/_O!S(ni~P#(yO!V/_O!S(ni~O!S7RO~O!a#rO#n7WO~Ok7XO!a#rO(`'dO~O!S7ZO~Od$vq!V$vq#W$vq#x$vq~P!-jO^$hy!V$hy'j$hy'h$hy!S$hy!g$hyo$hy!X$hy%`$hy!a$hy~P!3jO!V4]O!X(oa~O^#Zy!V#Zy'j#Zy'h#Zy!S#Zy!g#Zyo#Zy!X#Zy%`#Zy!a#Zy~P!3jOX7`O~O!V0_O!W(ui~O]7fO~O!a5zO~O(T(qO!V'aX!W'aX~O!V4tO!W(ra~O!h%ZO'|%OO^(YX!a(YX!l(YX#W(YX'j(YX(`(YX~O's7oO~P.[O!x;oO!|7rO!}7qO#O7qO#P7pO#S'bO#T'bO~PBtO^%^O!a#rO!l'hO#W'fO'j%^O(`'dO~O!W7vO~P%#XOl!kO'uTO'xUO(T!jO(_!nO~O|7wO~P%MdO![7{O!]7zO!^7zO#P7pO#S'bO#T'bO't!iO~PBtO![7{O!]7zO!^7zO!}7|O#O7|O#P7pO#S'bO#T'bO't!iO~PBtO!]7zO!^7zO't!iO(T!jO(_!nO~O!X0zO~O!X0zO%`8OO~Og8RO!X0zO%`8OO~OX8WO!V'da!W'da~O!V1VO!W(si~O!g8[O~O!g8]O~O!g8^O~O!g8^O~P%QO^8`O~O!a8cO~O!g8dO~O!V(ei!W(ei~P#?dO^%^O#W8lO'j%^O~O^%^O!a#rO#W8lO'j%^O~O^%^O!a#rO!l8pO#W8lO'j%^O(`'dO~O!h%ZO'|%OO~P&$QO!]8qO!^8qO't!iO~PBtO!V(]O!g(ay~O!V(by!g(by^(by'j(by~P!3jO!X'QO%`8uO~O#c$tqP$tqX$tq^$tqk$tqz$tq!V$tq!e$tq!f$tq!h$tq!l$tq#f$tq#g$tq#h$tq#i$tq#j$tq#k$tq#l$tq#m$tq#n$tq#p$tq#r$tq#t$tq#u$tq'j$tq(Q$tq(`$tq!g$tq!S$tq'h$tq#W$tqo$tq!X$tq%`$tq!a$tq~P#(yO#c$vqP$vqX$vq^$vqk$vqz$vq!V$vq!e$vq!f$vq!h$vq!l$vq#f$vq#g$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#p$vq#r$vq#t$vq#u$vq'j$vq(Q$vq(`$vq!g$vq!S$vq'h$vq#W$vqo$vq!X$vq%`$vq!a$vq~P#(yO!V'Pi!g'Pi~P!3jO#x#Zq!V#Zq!W#Zq~P#?dOy/yOz/yO|/zOPvaXvagvakva!eva!fva!hva!lva#fva#gva#hva#iva#jva#kva#lva#mva#nva#pva#rva#tva#uva#xva(Qva(`va(gva(hva!Vva!Wva~Oy)sO|)tOP$kaX$kag$kak$kaz$ka!e$ka!f$ka!h$ka!l$ka#f$ka#g$ka#h$ka#i$ka#j$ka#k$ka#l$ka#m$ka#n$ka#p$ka#r$ka#t$ka#u$ka#x$ka(Q$ka(`$ka(g$ka(h$ka!V$ka!W$ka~Oy)sO|)tOP$maX$mag$mak$maz$ma!e$ma!f$ma!h$ma!l$ma#f$ma#g$ma#h$ma#i$ma#j$ma#k$ma#l$ma#m$ma#n$ma#p$ma#r$ma#t$ma#u$ma#x$ma(Q$ma(`$ma(g$ma(h$ma!V$ma!W$ma~OP${aX${ak${az${a!e${a!f${a!h${a!l${a#f${a#g${a#h${a#i${a#j${a#k${a#l${a#m${a#n${a#p${a#r${a#t${a#u${a#x${a(Q${a(`${a!V${a!W${a~P%AYO#x$gq!V$gq!W$gq~P#?dO#x$hq!V$hq!W$hq~P#?dO!W9PO~O#x9QO~P!-jO!a#rO!V'Yi!g'Yi~O!a#rO(`'dO!V'Yi!g'Yi~O!V/VO!g(mq~O!S'[i!V'[i~P#(yO!V/_O!S(nq~O!S9WO~P#(yO!S9WO~Od(Oy!V(Oy~P!-jO!V'_a!X'_a~P#(yO!X%Sq^%Sq!V%Sq'j%Sq~P#(yOX9]O~O!V0_O!W(uq~O#W9aO!V'aa!W'aa~O!V4tO!W(ri~P#?dOPYXXYXkYXyYXzYX|YX!SYX!VYX!eYX!fYX!hYX!lYX#WYX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX~O!a%QX#n%QX~P&6lO#S-cO#T-cO~PBtO#P9eO#S-cO#T-cO~PBtO!}9fO#O9fO#P9eO#S-cO#T-cO~PBtO!]9iO!^9iO't!iO(T!jO(_!nO~O![9lO!]9iO!^9iO#P9eO#S-cO#T-cO't!iO~PBtO!X0zO%`9oO~O'uTO'xUO(T9tO~O!V1VO!W(sq~O!g9wO~O!g9wO~P%QO!g9yO~O!g9zO~O#W9|O!V#`y!W#`y~O!V#`y!W#`y~P#?dO^%^O#W:QO'j%^O~O^%^O!a#rO#W:QO'j%^O~O^%^O!a#rO!l:UO#W:QO'j%^O(`'dO~O!X'QO%`:XO~O#x#vy!V#vy!W#vy~P#?dOP$tiX$tik$tiz$ti!e$ti!f$ti!h$ti!l$ti#f$ti#g$ti#h$ti#i$ti#j$ti#k$ti#l$ti#m$ti#n$ti#p$ti#r$ti#t$ti#u$ti#x$ti(Q$ti(`$ti!V$ti!W$ti~P%AYOy)sO|)tO(h)xOP%WiX%Wig%Wik%Wiz%Wi!e%Wi!f%Wi!h%Wi!l%Wi#f%Wi#g%Wi#h%Wi#i%Wi#j%Wi#k%Wi#l%Wi#m%Wi#n%Wi#p%Wi#r%Wi#t%Wi#u%Wi#x%Wi(Q%Wi(`%Wi(g%Wi!V%Wi!W%Wi~Oy)sO|)tOP%YiX%Yig%Yik%Yiz%Yi!e%Yi!f%Yi!h%Yi!l%Yi#f%Yi#g%Yi#h%Yi#i%Yi#j%Yi#k%Yi#l%Yi#m%Yi#n%Yi#p%Yi#r%Yi#t%Yi#u%Yi#x%Yi(Q%Yi(`%Yi(g%Yi(h%Yi!V%Yi!W%Yi~O#x$hy!V$hy!W$hy~P#?dO#x#Zy!V#Zy!W#Zy~P#?dO!a#rO!V'Yq!g'Yq~O!V/VO!g(my~O!S'[q!V'[q~P#(yO!S:`O~P#(yO!V0_O!W(uy~O!V4tO!W(rq~O#S2fO#T2fO~PBtO#P:gO#S2fO#T2fO~PBtO!]:kO!^:kO't!iO(T!jO(_!nO~O!X0zO%`:nO~O!g:qO~O^%^O#W:vO'j%^O~O^%^O!a#rO#W:vO'j%^O~O!X'QO%`:{O~OP$tqX$tqk$tqz$tq!e$tq!f$tq!h$tq!l$tq#f$tq#g$tq#h$tq#i$tq#j$tq#k$tq#l$tq#m$tq#n$tq#p$tq#r$tq#t$tq#u$tq#x$tq(Q$tq(`$tq!V$tq!W$tq~P%AYOP$vqX$vqk$vqz$vq!e$vq!f$vq!h$vq!l$vq#f$vq#g$vq#h$vq#i$vq#j$vq#k$vq#l$vq#m$vq#n$vq#p$vq#r$vq#t$vq#u$vq#x$vq(Q$vq(`$vq!V$vq!W$vq~P%AYOd%[!Z!V%[!Z#W%[!Z#x%[!Z~P!-jO!V'aq!W'aq~P#?dO#S6`O#T6`O~PBtO!V#`!Z!W#`!Z~P#?dO^%^O#W;ZO'j%^O~O#c%[!ZP%[!ZX%[!Z^%[!Zk%[!Zz%[!Z!V%[!Z!e%[!Z!f%[!Z!h%[!Z!l%[!Z#f%[!Z#g%[!Z#h%[!Z#i%[!Z#j%[!Z#k%[!Z#l%[!Z#m%[!Z#n%[!Z#p%[!Z#r%[!Z#t%[!Z#u%[!Z'j%[!Z(Q%[!Z(`%[!Z!g%[!Z!S%[!Z'h%[!Z#W%[!Zo%[!Z!X%[!Z%`%[!Z!a%[!Z~P#(yOP%[!ZX%[!Zk%[!Zz%[!Z!e%[!Z!f%[!Z!h%[!Z!l%[!Z#f%[!Z#g%[!Z#h%[!Z#i%[!Z#j%[!Z#k%[!Z#l%[!Z#m%[!Z#n%[!Z#p%[!Z#r%[!Z#t%[!Z#u%[!Z#x%[!Z(Q%[!Z(`%[!Z!V%[!Z!W%[!Z~P%AYOo(UX~P1dO't!iO~P!'RO!ScX!VcX#WcX~P&6lOPYXXYXkYXyYXzYX|YX!VYX!VcX!eYX!fYX!hYX!lYX#WYX#WcX#ccX#fYX#gYX#hYX#iYX#jYX#kYX#lYX#mYX#nYX#pYX#rYX#tYX#uYX#zYX(QYX(`YX(gYX(hYX~O!acX!gYX!gcX(`cX~P'!sOP;nOQ;nOa=_Ob!fOikOk;nOlkOmkOskOu;nOw;nO|WO!QkO!RkO!XXO!c;qO!hZO!k;nO!l;nO!m;nO!o;rO!q;sO!t!eO$P!hO$TfO's)RO'uTO'xUO(QVO(_[O(l=]O~O!V<SO!W$ja~Oi%POk$qOl$pOm$pOs%QOu%ROw<YO|$xO!X$yO!c=dO!h$uO#b<`O$P%VO$l<[O$n<^O$q%WO's(iO'uTO'xUO'|%OO(Q$rO~O#o)YO~P''iO!WYX!WcX~P'!sO#c;vO~O!a#rO#c;vO~O#W<WO~O#n;{O~O#W<bO!V(eX!W(eX~O#W<WO!V(cX!W(cX~O#c<cO~Od<eO~P!-jO#c<jO~O#c<kO~O!a#rO#c<lO~O!a#rO#c<cO~O#x<mO~P#?dO#c<nO~O#c<oO~O#c<pO~O#c<qO~O#c<rO~O#c<sO~O#x<tO~P!-jO#x<uO~P!-jO$T~!f!|#O#P#S#a#b#m(l$l$n$q%T%_%`%a%g%i%l%m%o%q~'nR$T(l#g!R'l't#hl#f#iky'm(T'm's$V$X$V~",
						goto: "$/X(yPPPP(zP(}P)_P+a/fPPPP6iPP7OP<|@mPAQPAQPPPAQPBpPAQPAQPAQPBtPPByPCdPH`PPPHdPPPPHdKfPPPKlMlPHdP!!SPPPP!$eHdPPPHdPHdP!&vHdP!*]!+_!+dP!,U!,Y!,UPPPP!/f!1kPP!1t!3OP!+_HdHd!6b!9m!>v!>v!BnPPP!BuHdPPPPPPPPPPP!FTP!GiPPHd!HyPHdPHdHdHdHdPHd!J`PP!MiP#!nP#!r#!|##Q##QP!MfP##U##UP#&ZP#&_HdHd#&e#)iAQPAQPAQAQP#*sAQAQ#,mAQ#.zAQ#0nAQAQ#1[#3W#3W#3[#3d#3W#3lP#3WPAQ#4hAQ#5pAQAQ6iPPP#6{PP#7e#7eP#7eP#7z#7ePP#8QP#7wP#7w#8d!1p#7w#9O#9U6f(}#9X(}P#9`#9`#9`P(}P(}P(}P(}PP(}P#9f#9iP#9i(}P#9mP#9pP(}P(}P(}P(}P(}P(}(}PP#9v#9|#:W#:^#:d#:j#:p#;O#;U#;[#;f#;l#<h#<w#<}#=a#=g#=m#={#>b#?r#@Q#@W#@^#@d#@j#@t#@z#AQ#A[#An#AtPPPPPPPPPP#AzPPPPPPP#Bn#FYP#Gu#G|#HUPPPP#L`$ U$'t$'w$'z$)w$)z$)}$*UPP$*[$*`$+X$,X$,]$,qPP$,u$,{$-PP$-S$-W$-Z$.P$.g$.l$.o$.r$.x$.{$/P$/TR!yRmpOXr!X#a%]&d&f&g&i,^,c1g1jU!pQ'Q-OQ%ctQ%kwQ%rzQ&[!TS&x!c,vQ'W!f[']!m!r!s!t!u!vS*[$y*aQ+U%lQ+c%tQ+}&UQ,|'PQ-W'XW-`'^'_'`'aQ/p*cQ1U,OU2b-b-d-eS4}0z5QS6[2e2gU7z5U5V5WQ8q6_S9i7{7|Q:k9lR<a;r%QdOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t+h,Y,^,c-S-[-o-x.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2}4y5]5o5q5r6U7w8R8`8l:Q:v;ZS#m];o!r)T$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q*l%SQ+Z%nQ,P&XQ,W&aQ.X<XQ0T*|Q0X+OQ0d+[Q1^,UQ2q.UQ4e0_Q5d1VQ6i2uQ6o<YQ7b4fR8x6j'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`#S!kQ!m!p!r!s!t!u!v!w&x'P'Q']'^'_'`'a'b,v,|-O-`-b-c-d-e0z2b2e2f2g4z5Q5S5T5U5V6[6_6`7p7q7r7|8q9e9f:g$Y$pi#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jQ%uzQ&v!cS&|%w,yQ+Z%nS.})t/PQ/{*pQ0d+[Q0i+bQ1],TQ1^,UQ4e0_Q4n0kQ5g1XQ5h1[Q7b4fQ7e4kQ8Z5jQ9`7fR9u8WpmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jR,R&]&x`OPXYrstux!X!^!g!l#P#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u'S'f'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=_=`[#YWZ#T#W&y'vQ%fvQ%jwS%oz%t!U%x|}#d#f#i%Z%v(P(W(X(]+f+g+i,[,p-s-v-z-{-}1o2m2n5z6dQ&Q!RQ'T!eQ'V!fQ(d#oS*O$u*SS+T%k%lQ+X%nQ+x&SQ+|&US-V'W'XQ.W(eQ/Z*PQ0]+UQ0c+[Q0e+]Q0h+aQ1P+yS1T+},OQ2X-WQ3m/VQ4d0_Q4h0bQ4m0jQ5c1UQ6z3nQ7a4fQ7d4jQ9[7`R:b9]v$wi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!`%hw!f!o%j%k%l&w'V'W'X'['i*Z+T+U,s-V-W-_-a/h0]2Q2X2`2d4Q6Y6^8o:TQ*}%fQ+n%}Q+q&OQ+{&UQ.V(dQ1O+xU1S+|+},OQ2v.WQ5^1PS5b1T1US7n4x4|Q8V5cU9g7s7x7yU:i9h9j9kQ;R:jQ;a;S!z=a#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jg=b<U<V<[<^<`<g<i<k<o<q<uW$|i%O*i=]S%}!O&ZQ&O!PQ&P!QR+l%{$Z${i#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jT)o$r)pV*m%S<X<YU&|!c%w,yS(r#v#wQ+`%qS.P(`(aQ0u+rQ4V/yR7j4t'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`$o$]c#V#b%a%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.j.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=ST#QV#R'PkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q&z!cR1|,v!z!kQ!c!m!p!r!s!t!u!v!w&x'P'Q']'^'_'`'a'b,v,|-O-`-b-c-d-e2b2e2f2g4z5S5T6[6_6`7p7q7r8q9e9f:gS*Z$y*aS/h*[*cQ/q*dQ0w+tQ4Q/pQ4T/sS4x0z5QS7s4}5WS7x5U5VS9h7z7{Q9j7|S:j9i9lR;S:klpOXr!X#a%]&d&f&g&i,^,c1g1jQ&k![Q'j!tS(f#q;vQ+R%iQ+v&QQ+w&RQ-T'UQ-g'cS.](k<cS0O*t<lQ0Z+SQ0y+uQ1n,eQ1p,fQ1x,qQ2V-UQ2Y-YS4[0P<rQ4`0[S4c0^<sQ5|1zQ6Q2WQ6V2_Q7_4aQ8g6OQ8h6RQ8k6WQ9{8dQ:P8mQ:u:RR;Y:w$j$[c#V#b%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=SS(c#l'ZU*f$z(j3aS*x%a.jQ2r0TQ6f2qQ8w6iR:Y8x$j$Zc#V#b%b%d'u'{(g(n(v(w(x(y(z({(|(})O)P)Q)S)V)Z)e*y+_,t-h-m-r-w.^.d.h.k.l.{/}1v1y2Z2j2|3R3S3T3U3V3W3X3Y3Z3[3]3^3_3b3c3h4Z4b5}6T6b6m6n6s6t7l8f8j8y8}9O:O:d:r:t;X;d;p=SS(b#l'ZS(t#w$[S*w%a.jS.Q(a(cQ.m)UQ0Q*xR2o.R'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`S#m];oQ&f!VQ&g!WQ&i!YQ&j!ZR1f,aQ'R!eQ*z%fQ-R'TS.S(d*}Q2T-QW2s.V.W0S0UQ6P2UU6e2p2r2vS8t6f6hS:W8v8wS:y:V:YQ;[:zR;e;]V!qQ'Q-O!_^OQXZ_r!T!X!m#a#d%Z%]&Z&]&d&f&g&i'Q(],^,c-O-z0z1g1j4z5QT#m];o%[yOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZS(r#v#wS.P(`(a!s<y$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`U!oQ'Q-OY'[!m!s!t!u!vS'i!p!rW'k!w4z5S5TS-_']'^U-a'_'`'aW-f'b7p7q7rS2`-`-bU2c-c9e9fS2d-d-eS4|0z5QS6Y2b2eS6]2f:gQ6^2gS7s4}5WS7y5U5VS8o6[6_Q8r6`S9h7z7{Q9k7|Q:T8qS:j9i9lR;S:kU!qQ'Q-OT5O0z5QU'h!o4{4|S([#e1dU-^'['k7yQ/Y*OQ/f*ZU2a-a-f9kQ3r/ZS3{/g/qS6Z2c2dQ6y3mS7U4R4TS8p6]6^Q9S6zQ9Z7XR:U8rQ#sbU'g!o4{4|S(Z#e1dQ*u%[Q+P%gQ+V%mW-]'['h'k7yQ-y([Q/X*OQ/e*ZQ/k*^Q0Y+QQ1Q+zW2^-^-a-f9kS3q/Y/ZS3z/f/qQ3}/jQ4P/lQ5`1RU6X2a2c2dQ6x3mQ6|3rS7Q3{4TQ7V4SQ8T5aU8n6Z6]6^S9R6y6zQ9V7RQ9X7UQ9c7mQ9r8US:S8p8rQ:^9SQ:_9WQ:a9ZQ:f9dQ:p9sQ:x:UQ:}:`Q;P:hQ;_;QQ;h;`Q;l;iQ<|<wQ=X=QR=Y=R%[aOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZS#sx!g!r<v$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`R<|=_%[bOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZQ%[j!`%gw!f!o%j%k%l&w'V'W'X'['i*Z+T+U,s-V-W-_-a/h0]2Q2X2`2d4Q6Y6^8o:TS%mx!gQ+Q%hQ+z&UW1R+{+|+},OU5a1S1T1US7m4x4|S8U5b5cW9d7n7s7x7yQ9s8VW:h9g9h9j9kS;Q:i:jS;`;R;SQ;i;a!r<w$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q=Q=^R=R=_%OeOPXYrstu!X!^!l#P#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;ZY#_WZ#T#W'v!U%x|}#d#f#i%Z%v(P(W(X(]+f+g+i,[,p-s-v-z-{-}1o2m2n5z6dQ,X&a!p<x$X$j)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`R<{&yS&}!c%wR2O,y%QdOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t+h,Y,^,c-S-[-o-x.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2}4y5]5o5q5r6U7w8R8`8l:Q:v;Z!r)T$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`Q,W&aQ0T*|Q2q.UQ6i2uR8x6j!l$Rc#V%a'u'{(g(n(})O)P)Q)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;p!T;})S)e,t.j1v1y3R3Z3[3]3^3b3h5}6n6s6t7l8f8y8}9O:d:r=S!h$Tc#V%a'u'{(g(n)P)Q)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;p!P<P)S)e,t.j1v1y3R3]3^3b3h5}6n6s6t7l8f8y8}9O:d:r=S!d$Xc#V%a'u'{(g(n)V)Z+_-h-m-r-w.^.d.{/}2Z2j2|3_4Z4b6T6b6m8j:O:t;X;d;pQ3l/Tz=`)S)e,t.j1v1y3R3b3h5}6n6s6t7l8f8y8}9O:d:r=SQ=e=gR=f=h'OkOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`S$kh$lR3e.p'VgOPWXYZhrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j$l%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.p.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`T$gf$mQ$efS)^$h)bR)j$mT$ff$mT)`$h)b'VhOPWXYZhrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$X$^$b$j$l%]%c%p&]&`&a&d&f&g&i&m&u&y'S'f'v'x(O(Y(k(o(s)g)r*t*|+h,Y,^,c,o,r-S-[-o-x.U.b.i.p.q/z0P0^0}1_1`1a1c1g1j1l1{2]2k2u2}3d4v4y5]5o5q5r5{6U6j7w8R8`8l9a9|:Q:v;Z;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`T$kh$lQ$nhR)i$l%[jOPWXYZrstu!X!^!l#P#T#W#a#k#q#u#x#{#|#}$O$P$Q$R$S$T$U$V$^$b%]%c%p&]&`&a&d&f&g&i&m&u'S'f'v'x(O(Y(k(o(s)r*t*|+h,Y,^,c-S-[-o-x.U.b.i/z0P0^0}1_1`1a1c1g1j1l2]2k2u2}4y5]5o5q5r6U6j7w8R8`8l:Q:v;Z!s=^$X$j&y)g,o,r.q1{3d4v5{9a9|;n;q;r;s;v;w;x;y;z;{;|;}<O<P<Q<R<S<W<a<b<c<e<l<m<r<s=`#alOPXZr!X!^!l#P#a#k#x$j%]&]&`&a&d&f&g&i&m&u'S(s)g*|+h,Y,^,c-S.U.q/z0}1_1`1a1c1g1j1l2u3d4y5]5o5q5r6j7w8R8`v$zi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!z(j#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jQ*q%WQ.|)sg3a<U<V<[<^<`<g<i<k<o<q<uv$vi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=fQ*T$wS*^$y*aQ*r%XQ/l*_!z=O#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jf=P<U<V<[<^<`<g<i<k<o<q<uQ=T=aQ=U=bQ=V=cR=W=dv$zi#t%T%U%Y)w)y*R*g*h._/^/|3l4U9Q=]=e=f!z(j#r$`$a$u$x)n)z*X*{+O+m+p.T/_/a0q0t0|2t3v4O4]4_5[6g6}7W8O8u9o:X:n:{<Z<]<_<f<h<j<n<p<t=i=jg3a<U<V<[<^<`<g<i<k<o<q<ulnOXr!X#a%]&d&f&g&i,^,c1g1jQ*W$xQ,l&pQ,m&rR3u/_$Y${i#r#t$`$a$u$x%T%U%Y)n)w)y)z*R*X*g*h*{+O+m+p.T._/^/_/a/|0q0t0|2t3l3v4O4U4]4_5[6g6}7W8O8u9Q9o:X:n:{<U<V<Z<[<]<^<_<`<f<g<h<i<j<k<n<o<p<q<t<u=]=e=f=i=jQ+o&OQ0s+qQ4r0rR7i4sT*`$y*aS*`$y*aT5P0z5QS/j*]4yT4S/r7wQ+P%gQ/k*^Q0Y+QQ1Q+zQ5`1RQ8T5aQ9c7mQ9r8UQ:f9dQ:p9sQ;P:hQ;_;QQ;h;`R;l;in)w$s(l*s/]/t/u2z3s4Y6w7Y:]<}=Z=[!W<f(h)X)}*V.[.x/T/b0R0p0r2y3t3x4q4s6k6l7O7S7[7^9U9Y:|=g=h]<g3`6r8z:Z:[;fp)y$s(l*s/R/]/t/u2z3s4Y6w7Y:]<}=Z=[!Y<h(h)X)}*V.[.x/T/b0R0p0r2w2y3t3x4q4s6k6l7O7S7[7^9U9Y:|=g=h_<i3`6r8z8{:Z:[;fpmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jQ&W!SR,Y&apmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jR&W!SQ+s&PR0o+lqmOXr!T!X#a%]&Z&d&f&g&i,^,c1g1jQ0{+xS5Z1O1PU7}5X5Y5^S9n8P8QS:l9m9pQ;T:mR;b;UQ&_!TR,S&ZR5g1XS%oz%tR0e+]Q&d!UR,^&eR,d&jT1h,c1jR,h&kQ,g&kR1q,hQ'm!xR-i'mQrOQ#aXT%`r#aQ!{TR'o!{Q#OUR'q#OQ)p$rR.y)pQ#RVR's#RQ#UWU'y#U'z-pQ'z#VR-p'{Q,w&zR1},wQ.`(lR2{.`Q.c(nS3O.c3PR3P.dQ-O'QR2R-Or_OXr!T!X#a%]&Z&]&d&f&g&i,^,c1g1jU!mQ'Q-OS#dZ%ZY#n_!m#d-z4zQ-z(]T4z0z5QS#[W%vU(Q#[(R-qQ(R#]R-q'|Q,z&}R2P,zQ(^#gQ-t(VW.O(^-t2h6aQ2h-uR6a2iQ)b$hR.r)bQ$lhR)h$lQ$_cU)W$_-l<TQ-l;pR<T)eQ/W*OW3o/W3p6{9TU3p/X/Y/ZS6{3q3rR9T6|#m)u$s(h(l)X)}*V*n*o*s.Y.Z.[.x/R/S/T/]/b/t/u0R0p0r2w2x2y2z3`3s3t3x4Y4q4s6k6l6p6q6r6w7O7S7Y7[7^8z8{8|9U9Y:Z:[:]:|;f<}=Z=[=g=hQ/`*VU3w/`3y7PQ3y/bR7P3xQ*a$yR/n*aQ*j$}R/w*jQ4^0RR7]4^Q+j%yR0n+jQ4u0uS7k4u9bR9b7lQ+u&QR0x+uQ5Q0zR7u5QQ1W,PS5e1W8XR8X5gQ0`+XW4g0`4i7c9^Q4i0cQ7c4hR9^7dQ+^%oR0f+^Q1j,cR5u1jWqOXr#aQ&h!XQ*v%]Q,]&dQ,_&fQ,`&gQ,b&iQ1e,^S1h,c1jR5t1gQ%_oQ&l!]Q&o!_Q&q!`Q&s!aU'e!o4{4|Q+e%uQ+k%zQ,R&_Q,j&nY-Z'['g'h'k7yQ/m*`S1Z,S,VQ1r,iQ1s,lQ1t,m[2[-]-^-a-f-h9kQ4l0iQ4p0pQ5_1QQ5i1]Q5s1fY6S2Z2^2a2c2dQ7g4nQ7h4qQ7t5PQ8S5`Q8Y5hY8i6T6X6Z6]6^Q9_7eQ9q8TQ9v8ZW9}8j8n8p8rQ:c9`Q:e9cQ:o9rU:s:O:S:UQ;O:fQ;V:pS;W:t:xQ;^;PQ;c;XQ;g;_Q;j;dQ;k;hR;m;lQ%iwQ'U!fQ'c!oU+S%j%k%lQ,q&wU-U'V'W'XS-Y'['iQ/d*ZS0[+T+UQ1z,sS2W-V-WS2_-_-aQ3|/hQ4a0]Q6O2QQ6R2XS6W2`2dQ7T4QS8m6Y6^Q:R8oR:w:TS$ti=]R*k%OU$}i%O=]R/v*iQ$siS(h#r+OQ(l#tS)X$`$aQ)}$uQ*V$xQ*n%TQ*o%UQ*s%YQ.Y<ZQ.Z<]Q.[<_Q.x)nQ/R)wQ/S)yQ/T)zQ/]*RQ/b*XQ/t*gQ/u*hh0R*{.T0|2t5[6g8O8u9o:X:n:{Q0p+mQ0r+pQ2w<fQ2x<hQ2y<jQ2z._S3`<U<VQ3s/^Q3t/_Q3x/aQ4Y/|Q4q0qQ4s0tQ6k<nQ6l<pQ6p<[Q6q<^Q6r<`Q6w3lQ7O3vQ7S4OQ7Y4UQ7[4]Q7^4_Q8z<kQ8{<gQ8|<iQ9U6}Q9Y7WQ:Z<oQ:[<qQ:]9QQ:|<tQ;f<uQ<}=]Q=Z=eQ=[=fQ=g=iR=h=jloOXr!X#a%]&d&f&g&i,^,c1g1jQ!dPS#cZ#kQ&n!^U'Y!l4y7wQ'r#PQ(u#xQ)f$jS,V&]&`Q,Z&aQ,i&mQ,n&uQ-Q'SQ.f(sQ.v)gQ0U*|Q0l+hQ1b,YQ2U-SQ2r.UQ3g.qQ4W/zQ5Y0}Q5k1_Q5l1`Q5n1aQ5p1cQ5w1lQ6f2uQ6u3dQ8Q5]Q8_5oQ8a5qQ8b5rQ8w6jQ9p8RR9x8`#UcOPXZr!X!^!l#a#k#x%]&]&`&a&d&f&g&i&m&u'S(s*|+h,Y,^,c-S.U/z0}1_1`1a1c1g1j1l2u4y5]5o5q5r6j7w8R8`Q#VWQ#bYQ%asQ%btQ%duS'u#T'xQ'{#WQ(g#qQ(n#uQ(v#{Q(w#|Q(x#}Q(y$OQ(z$PQ({$QQ(|$RQ(}$SQ)O$TQ)P$UQ)Q$VQ)S$XQ)V$^Q)Z$bW)e$j)g.q3dQ*y%cQ+_%pS,t&y1{Q-h'fS-m'v-oQ-r(OQ-w(YQ.^(kQ.d(oQ.h;nQ.j;qQ.k;rQ.l;sQ.{)rQ/}*tQ1v,oQ1y,rQ2Z-[Q2j-xQ2|.bQ3R;vQ3S;wQ3T;xQ3U;yQ3V;zQ3W;{Q3X;|Q3Y;}Q3Z<OQ3[<PQ3]<QQ3^<RQ3_.iQ3b<WQ3c<aQ3h<SQ4Z0PQ4b0^Q5}<bQ6T2]Q6b2kQ6m2}Q6n<cQ6s<eQ6t<lQ7l4vQ8f5{Q8j6UQ8y<mQ8}<rQ9O<sQ:O8lQ:d9aQ:r9|Q:t:QQ;X:vQ;d;ZQ;p#PR=S=`R#XWR&{!cU!oQ'Q-OS&w!c,vY'[!m!s!t!u!vS'i!p!r['k!w4z5S5T5U5VS,s&x'PS-_']'^U-a'_'`'aY-f'b7p7q7r7|Q2Q,|S2`-`-bU2c-c9e9fS2d-d-eS4{0z5QS6Y2b2eS6]2f:gQ6^2gS8o6[6_Q8r6`R:T8qR(m#tR(p#uQ!dQT,}'Q-OQ#l]R'Z;oT#hZ%ZS#gZ%ZU%y|},[U(V#d#f#iS-u(W(XQ-|(]Q0m+iQ2i-vU2l-z-{-}S6c2m2nR8s6d`#ZW#T#W%v'v(P+f-st#eZ|}#d#f#i%Z(W(X(]+i-v-z-{-}2m2n6dQ1d,[Q1w,pQ5y1oQ8e5zT<z&y+gT#^W%vS#]W%vS'w#T(PS'|#W+fS,u&y+gT-n'v-sT'O!c%wQ$hfR)l$mT)a$h)bR3f.pT*Q$u*SR*Y$xQ0S*{Q2p.TQ5X0|Q6h2tQ8P5[Q8v6gQ9m8OQ:V8uQ:m9oQ:z:XQ;U:nR;]:{lpOXr!X#a%]&d&f&g&i,^,c1g1jQ&^!TR,R&ZV%z|},[R0v+rR,Q&XQ%szR+d%tR+Y%nT&b!U&eT&c!U&eT1i,c1j",
						nodeNames:
							"⚠ ArithOp ArithOp LineComment BlockComment Script ExportDeclaration export Star as VariableName String Escape from ; default FunctionDeclaration async function VariableDefinition > TypeParamList TypeDefinition extends ThisType this LiteralType ArithOp Number BooleanLiteral TemplateType InterpolationEnd Interpolation InterpolationStart NullType null VoidType void TypeofType typeof MemberExpression . ?. PropertyName [ TemplateString Escape Interpolation super RegExp ] ArrayExpression Spread , } { ObjectExpression Property async get set PropertyDefinition Block : NewExpression new TypeArgList CompareOp < ) ( ArgList UnaryExpression delete LogicOp BitOp YieldExpression yield AwaitExpression await ParenthesizedExpression ClassExpression class ClassBody MethodDeclaration Decorator @ MemberExpression PrivatePropertyName CallExpression Privacy static abstract override PrivatePropertyDefinition PropertyDeclaration readonly accessor Optional TypeAnnotation Equals StaticBlock FunctionExpression ArrowFunction ParamList ParamList ArrayPattern ObjectPattern PatternProperty Privacy readonly Arrow MemberExpression BinaryExpression ArithOp ArithOp ArithOp ArithOp BitOp CompareOp instanceof satisfies in const CompareOp BitOp BitOp BitOp LogicOp LogicOp ConditionalExpression LogicOp LogicOp AssignmentExpression UpdateOp PostfixExpression CallExpression TaggedTemplateExpression DynamicImport import ImportMeta JSXElement JSXSelfCloseEndTag JSXStartTag JSXSelfClosingTag JSXIdentifier JSXBuiltin JSXIdentifier JSXNamespacedName JSXMemberExpression JSXSpreadAttribute JSXAttribute JSXAttributeValue JSXEscape JSXEndTag JSXOpenTag JSXFragmentTag JSXText JSXEscape JSXStartCloseTag JSXCloseTag PrefixCast ArrowFunction TypeParamList SequenceExpression KeyofType keyof UniqueType unique ImportType InferredType infer TypeName ParenthesizedType FunctionSignature ParamList NewSignature IndexedType TupleType Label ArrayType ReadonlyType ObjectType MethodType PropertyType IndexSignature PropertyDefinition CallSignature TypePredicate is NewSignature new UnionType LogicOp IntersectionType LogicOp ConditionalType ParameterizedType ClassDeclaration abstract implements type VariableDeclaration let var TypeAliasDeclaration InterfaceDeclaration interface EnumDeclaration enum EnumBody NamespaceDeclaration namespace module AmbientDeclaration declare GlobalDeclaration global ClassDeclaration ClassBody MethodDeclaration AmbientFunctionDeclaration ExportGroup VariableName VariableName ImportDeclaration ImportGroup ForStatement for ForSpec ForInSpec ForOfSpec of WhileStatement while WithStatement with DoStatement do IfStatement if else SwitchStatement switch SwitchBody CaseLabel case DefaultLabel TryStatement try CatchClause catch FinallyClause finally ReturnStatement return ThrowStatement throw BreakStatement break ContinueStatement continue DebuggerStatement debugger LabeledStatement ExpressionStatement SingleExpression SingleClassItem",
						maxTerm: 362,
						context: su,
						nodeProps: [
							[
								"group",
								-26,
								6,
								14,
								16,
								62,
								198,
								202,
								205,
								206,
								208,
								211,
								214,
								225,
								227,
								233,
								235,
								237,
								239,
								242,
								248,
								254,
								256,
								258,
								260,
								262,
								264,
								265,
								"Statement",
								-32,
								10,
								11,
								25,
								28,
								29,
								35,
								45,
								48,
								49,
								51,
								56,
								64,
								72,
								76,
								78,
								80,
								81,
								102,
								103,
								112,
								113,
								130,
								133,
								135,
								136,
								137,
								138,
								140,
								141,
								161,
								162,
								164,
								"Expression",
								-23,
								24,
								26,
								30,
								34,
								36,
								38,
								165,
								167,
								169,
								170,
								172,
								173,
								174,
								176,
								177,
								178,
								180,
								181,
								182,
								192,
								194,
								196,
								197,
								"Type",
								-3,
								84,
								95,
								101,
								"ClassItem"
							],
							[
								"openedBy",
								31,
								"InterpolationStart",
								50,
								"[",
								54,
								"{",
								69,
								"(",
								142,
								"JSXStartTag",
								154,
								"JSXStartTag JSXStartCloseTag"
							],
							[
								"closedBy",
								33,
								"InterpolationEnd",
								44,
								"]",
								55,
								"}",
								70,
								")",
								143,
								"JSXSelfCloseEndTag JSXEndTag",
								159,
								"JSXEndTag"
							]
						],
						propSources: [hu],
						skippedNodes: [0, 3, 4, 268],
						repeatNodeCount: 32,
						tokenData:
							"$>y(CSR!bOX%ZXY+gYZ-yZ[+g[]%Z]^.c^p%Zpq+gqr/mrs3cst:_tu>PuvBavwDxwxGgxyMvyz! Qz{!![{|!%O|}!&]}!O!%O!O!P!'g!P!Q!1w!Q!R#0t!R![#3T![!]#@T!]!^#Aa!^!_#Bk!_!`#GS!`!a#In!a!b#N{!b!c$$z!c!}>P!}#O$&U#O#P$'`#P#Q$,w#Q#R$.R#R#S>P#S#T$/`#T#o$0j#o#p$4z#p#q$5p#q#r$7Q#r#s$8^#s$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$I|>P$I|$I}$<s$I}$JO$<s$JO$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(n%d_$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&j&hT$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c&j&zP;=`<%l&c'|'U]$c&j'y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!b(SU'y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}!b(iP;=`<%l'}'|(oP;=`<%l&}'[(y]$c&j'vpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rp)wU'vpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)rp*^P;=`<%l)r'[*dP;=`<%l(r#S*nX'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g#S+^P;=`<%l*g(n+dP;=`<%l%Z(CS+rq$c&j'vp'y!b'l(;dOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p$f%Z$f$g+g$g#BY%Z#BY#BZ+g#BZ$IS%Z$IS$I_+g$I_$JT%Z$JT$JU+g$JU$KV%Z$KV$KW+g$KW&FU%Z&FU&FV+g&FV;'S%Z;'S;=`+a<%l?HT%Z?HT?HU+g?HUO%Z(CS.ST'w#S$c&j'm(;dO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c(CS.n_$c&j'vp'y!b'm(;dOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#`/x`$c&j!l$Ip'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S1V`#p$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`2X!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S2d_#p$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2b3l_'u$(n$c&j'y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k*r4r_$c&j'y!bOY4kYZ5qZr4krs7nsw4kwx5qx!^4k!^!_8p!_#O4k#O#P5q#P#o4k#o#p8p#p;'S4k;'S;=`:X<%lO4k)`5vX$c&jOr5qrs6cs!^5q!^!_6y!_#o5q#o#p6y#p;'S5q;'S;=`7h<%lO5q)`6jT$^#t$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#t6|TOr6yrs7]s;'S6y;'S;=`7b<%lO6y#t7bO$^#t#t7eP;=`<%l6y)`7kP;=`<%l5q*r7w]$^#t$c&j'y!bOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}%W8uZ'y!bOY8pYZ6yZr8prs9hsw8pwx6yx#O8p#O#P6y#P;'S8p;'S;=`:R<%lO8p%W9oU$^#t'y!bOY'}Zw'}x#O'}#P;'S'};'S;=`(f<%lO'}%W:UP;=`<%l8p*r:[P;=`<%l4k#%|:hg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|<[i$c&j(_!L^'vp'y!bOY%ZYZ&cZr%Zrs&}st%Ztu<Puw%Zwx(rx!Q%Z!Q![<P![!^%Z!^!_*g!_!c%Z!c!}<P!}#O%Z#O#P&c#P#R%Z#R#S<P#S#T%Z#T#o<P#o#p*g#p$g%Z$g;'S<P;'S;=`=y<%lO<P#%|=|P;=`<%l<P(CS>`k$c&j'vp'y!b(T!LY's&;d$V#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P+d@`k$c&j'vp'y!b$V#tOY%ZYZ&cZr%Zrs&}st%Ztu@Tuw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![@T![!^%Z!^!_*g!_!c%Z!c!}@T!}#O%Z#O#P&c#P#R%Z#R#S@T#S#T%Z#T#o@T#o#p*g#p$g%Z$g;'S@T;'S;=`BT<%lO@T+dBWP;=`<%l@T(CSB^P;=`<%l>P%#SBl`$c&j'vp'y!b#h$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SCy_$c&j#z$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%DfETa(h%<v$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sv%ZvwFYwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#SFe`$c&j#t$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$2bGp_'x$)`$c&j'vpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo*QHv_$c&j'vpOYHoYZIuZrHorsIuswHowxKVx!^Ho!^!_LX!_#OHo#O#PIu#P#oHo#o#pLX#p;'SHo;'S;=`Mp<%lOHo)`IzX$c&jOwIuwx6cx!^Iu!^!_Jg!_#oIu#o#pJg#p;'SIu;'S;=`KP<%lOIu#tJjTOwJgwx7]x;'SJg;'S;=`Jy<%lOJg#tJ|P;=`<%lJg)`KSP;=`<%lIu*QK`]$^#t$c&j'vpOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(r$fL^Z'vpOYLXYZJgZrLXrsJgswLXwxMPx#OLX#O#PJg#P;'SLX;'S;=`Mj<%lOLX$fMWU$^#t'vpOY)rZr)rs#O)r#P;'S)r;'S;=`*Z<%lO)r$fMmP;=`<%lLX*QMsP;=`<%lHo(*QNR_!h(!b$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'l! ]_!gM|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h!!ib$c&j'vp'y!b't#)d#i$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rxz%Zz{!#q{!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S!#|`$c&j'vp'y!b#f$IdOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&-O!%Z`$c&j'vp'y!bk&%`OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&C[!&h_!V&;l$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!'rc$c&j'vp'y!by'<nOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!(}!P!Q%Z!Q![!+g![!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!)Wa$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!*]!P!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z!'d!*h_!UMt$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!+rg$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!+g![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S!+g#S#X%Z#X#Y!-Z#Y#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!-dg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx{%Z{|!.{|}%Z}!O!.{!O!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!/Uc$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l!0lc$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![!0a![!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S!0a#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS!2Sf$c&j'vp'y!b#g$IdOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}xz!3hz{#$s{!P!3h!P!Q#&Y!Q!^!3h!^!_!Mh!_!`#-x!`!a#/_!a!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(r!3sb$c&j'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(Q!5U`$c&j'y!b!RSOY!4{YZ&cZw!4{wx!6Wx!P!4{!P!Q!=o!Q!^!4{!^!_!?g!_!}!4{!}#O!Bn#O#P!<w#P#o!4{#o#p!?g#p;'S!4{;'S;=`!Cw<%lO!4{&n!6_^$c&j!RSOY!6WYZ&cZ!P!6W!P!Q!7Z!Q!^!6W!^!_!8g!_!}!6W!}#O!;U#O#P!<w#P#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!7ba$c&j!RSO!^&c!_#Z&c#Z#[!7Z#[#]&c#]#^!7Z#^#a&c#a#b!7Z#b#g&c#g#h!7Z#h#i&c#i#j!7Z#j#m&c#m#n!7Z#n#o&c#p;'S&c;'S;=`&w<%lO&cS!8lX!RSOY!8gZ!P!8g!P!Q!9X!Q!}!8g!}#O!9p#O#P!:o#P;'S!8g;'S;=`!;O<%lO!8gS!9^U!RS#Z#[!9X#]#^!9X#a#b!9X#g#h!9X#i#j!9X#m#n!9XS!9sVOY!9pZ#O!9p#O#P!:Y#P#Q!8g#Q;'S!9p;'S;=`!:i<%lO!9pS!:]SOY!9pZ;'S!9p;'S;=`!:i<%lO!9pS!:lP;=`<%l!9pS!:rSOY!8gZ;'S!8g;'S;=`!;O<%lO!8gS!;RP;=`<%l!8g&n!;Z[$c&jOY!;UYZ&cZ!^!;U!^!_!9p!_#O!;U#O#P!<P#P#Q!6W#Q#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<UX$c&jOY!;UYZ&cZ!^!;U!^!_!9p!_#o!;U#o#p!9p#p;'S!;U;'S;=`!<q<%lO!;U&n!<tP;=`<%l!;U&n!<|X$c&jOY!6WYZ&cZ!^!6W!^!_!8g!_#o!6W#o#p!8g#p;'S!6W;'S;=`!=i<%lO!6W&n!=lP;=`<%l!6W(Q!=xi$c&j'y!b!RSOY&}YZ&cZw&}wx&cx!^&}!^!_'}!_#O&}#O#P&c#P#Z&}#Z#[!=o#[#]&}#]#^!=o#^#a&}#a#b!=o#b#g&}#g#h!=o#h#i&}#i#j!=o#j#m&}#m#n!=o#n#o&}#o#p'}#p;'S&};'S;=`(l<%lO&}!f!?nZ'y!b!RSOY!?gZw!?gwx!8gx!P!?g!P!Q!@a!Q!}!?g!}#O!Ap#O#P!:o#P;'S!?g;'S;=`!Bh<%lO!?g!f!@hb'y!b!RSOY'}Zw'}x#O'}#P#Z'}#Z#[!@a#[#]'}#]#^!@a#^#a'}#a#b!@a#b#g'}#g#h!@a#h#i'}#i#j!@a#j#m'}#m#n!@a#n;'S'};'S;=`(f<%lO'}!f!AuX'y!bOY!ApZw!Apwx!9px#O!Ap#O#P!:Y#P#Q!?g#Q;'S!Ap;'S;=`!Bb<%lO!Ap!f!BeP;=`<%l!Ap!f!BkP;=`<%l!?g(Q!Bu^$c&j'y!bOY!BnYZ&cZw!Bnwx!;Ux!^!Bn!^!_!Ap!_#O!Bn#O#P!<P#P#Q!4{#Q#o!Bn#o#p!Ap#p;'S!Bn;'S;=`!Cq<%lO!Bn(Q!CtP;=`<%l!Bn(Q!CzP;=`<%l!4{'`!DW`$c&j'vp!RSOY!C}YZ&cZr!C}rs!6Ws!P!C}!P!Q!EY!Q!^!C}!^!_!GQ!_!}!C}!}#O!JX#O#P!<w#P#o!C}#o#p!GQ#p;'S!C};'S;=`!Kb<%lO!C}'`!Eci$c&j'vp!RSOY(rYZ&cZr(rrs&cs!^(r!^!_)r!_#O(r#O#P&c#P#Z(r#Z#[!EY#[#](r#]#^!EY#^#a(r#a#b!EY#b#g(r#g#h!EY#h#i(r#i#j!EY#j#m(r#m#n!EY#n#o(r#o#p)r#p;'S(r;'S;=`*a<%lO(rt!GXZ'vp!RSOY!GQZr!GQrs!8gs!P!GQ!P!Q!Gz!Q!}!GQ!}#O!IZ#O#P!:o#P;'S!GQ;'S;=`!JR<%lO!GQt!HRb'vp!RSOY)rZr)rs#O)r#P#Z)r#Z#[!Gz#[#])r#]#^!Gz#^#a)r#a#b!Gz#b#g)r#g#h!Gz#h#i)r#i#j!Gz#j#m)r#m#n!Gz#n;'S)r;'S;=`*Z<%lO)rt!I`X'vpOY!IZZr!IZrs!9ps#O!IZ#O#P!:Y#P#Q!GQ#Q;'S!IZ;'S;=`!I{<%lO!IZt!JOP;=`<%l!IZt!JUP;=`<%l!GQ'`!J`^$c&j'vpOY!JXYZ&cZr!JXrs!;Us!^!JX!^!_!IZ!_#O!JX#O#P!<P#P#Q!C}#Q#o!JX#o#p!IZ#p;'S!JX;'S;=`!K[<%lO!JX'`!K_P;=`<%l!JX'`!KeP;=`<%l!C}(r!Ksk$c&j'vp'y!b!RSOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#Z%Z#Z#[!Kh#[#]%Z#]#^!Kh#^#a%Z#a#b!Kh#b#g%Z#g#h!Kh#h#i%Z#i#j!Kh#j#m%Z#m#n!Kh#n#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#W!Mq]'vp'y!b!RSOY!MhZr!Mhrs!?gsw!Mhwx!GQx!P!Mh!P!Q!Nj!Q!}!Mh!}#O#!U#O#P!:o#P;'S!Mh;'S;=`##U<%lO!Mh#W!Nse'vp'y!b!RSOY*gZr*grs'}sw*gwx)rx#O*g#P#Z*g#Z#[!Nj#[#]*g#]#^!Nj#^#a*g#a#b!Nj#b#g*g#g#h!Nj#h#i*g#i#j!Nj#j#m*g#m#n!Nj#n;'S*g;'S;=`+Z<%lO*g#W#!]Z'vp'y!bOY#!UZr#!Urs!Apsw#!Uwx!IZx#O#!U#O#P!:Y#P#Q!Mh#Q;'S#!U;'S;=`##O<%lO#!U#W##RP;=`<%l#!U#W##XP;=`<%l!Mh(r##e`$c&j'vp'y!bOY##[YZ&cZr##[rs!Bnsw##[wx!JXx!^##[!^!_#!U!_#O##[#O#P!<P#P#Q!3h#Q#o##[#o#p#!U#p;'S##[;'S;=`#$g<%lO##[(r#$jP;=`<%l##[(r#$pP;=`<%l!3h(CS#%Qb$c&j'vp'y!b'n(;d!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h(CS#&e_$c&j'vp'y!bR(;dOY#&YYZ&cZr#&Yrs#'dsw#&Ywx#*tx!^#&Y!^!_#,s!_#O#&Y#O#P#(f#P#o#&Y#o#p#,s#p;'S#&Y;'S;=`#-r<%lO#&Y(Bb#'m]$c&j'y!bR(;dOY#'dYZ&cZw#'dwx#(fx!^#'d!^!_#)w!_#O#'d#O#P#(f#P#o#'d#o#p#)w#p;'S#'d;'S;=`#*n<%lO#'d(AO#(mX$c&jR(;dOY#(fYZ&cZ!^#(f!^!_#)Y!_#o#(f#o#p#)Y#p;'S#(f;'S;=`#)q<%lO#(f(;d#)_SR(;dOY#)YZ;'S#)Y;'S;=`#)k<%lO#)Y(;d#)nP;=`<%l#)Y(AO#)tP;=`<%l#(f(<v#*OW'y!bR(;dOY#)wZw#)wwx#)Yx#O#)w#O#P#)Y#P;'S#)w;'S;=`#*h<%lO#)w(<v#*kP;=`<%l#)w(Bb#*qP;=`<%l#'d(Ap#*}]$c&j'vpR(;dOY#*tYZ&cZr#*trs#(fs!^#*t!^!_#+v!_#O#*t#O#P#(f#P#o#*t#o#p#+v#p;'S#*t;'S;=`#,m<%lO#*t(<U#+}W'vpR(;dOY#+vZr#+vrs#)Ys#O#+v#O#P#)Y#P;'S#+v;'S;=`#,g<%lO#+v(<U#,jP;=`<%l#+v(Ap#,pP;=`<%l#*t(=h#,|Y'vp'y!bR(;dOY#,sZr#,srs#)wsw#,swx#+vx#O#,s#O#P#)Y#P;'S#,s;'S;=`#-l<%lO#,s(=h#-oP;=`<%l#,s(CS#-uP;=`<%l#&Y%#W#.Vb$c&j#z$Id'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h+h#/lb$S#t$c&j'vp'y!b!RSOY!3hYZ&cZr!3hrs!4{sw!3hwx!C}x!P!3h!P!Q!Kh!Q!^!3h!^!_!Mh!_!}!3h!}#O##[#O#P!<w#P#o!3h#o#p!Mh#p;'S!3h;'S;=`#$m<%lO!3h$/l#1Pp$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#U%Z#U#V#6_#V#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#d#9g#d#l%Z#l#m#<i#m#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#3`k$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P!+g!P!Q%Z!Q![#3T![!^%Z!^!_*g!_!g%Z!g!h!-Z!h#O%Z#O#P&c#P#R%Z#R#S#3T#S#X%Z#X#Y!-Z#Y#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#5`_$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#6hd$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#8Rf$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!R#7v!R!S#7v!S!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#7v#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#9pc$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#;We$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q!Y#:{!Y!^%Z!^!_*g!_#O%Z#O#P&c#P#R%Z#R#S#:{#S#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#<rg$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z$/l#>fi$c&j'vp'y!bl$'|OY%ZYZ&cZr%Zrs&}sw%Zwx(rx!Q%Z!Q![#>Z![!^%Z!^!_*g!_!c%Z!c!i#>Z!i#O%Z#O#P&c#P#R%Z#R#S#>Z#S#T%Z#T#Z#>Z#Z#b%Z#b#c#5T#c#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#@b_!a$b$c&j#x%<f'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z)[#Al_^l$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS#Bz^'|!*v!e'.r'vp'y!b$T)d(lSOY*gZr*grs'}sw*gwx)rx!P*g!P!Q#Cv!Q!^*g!^!_#Dl!_!`#F^!`#O*g#P;'S*g;'S;=`+Z<%lO*g(n#DPX$e&j'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#DuZ#j$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx!_*g!_!`#Eh!`#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#EqX#z$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g$Kh#FgX#k$Id'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Gh#G_a#W%?x$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`0z!`!a#Hd!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#W#Ho_#c$Ih$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%Gh#I}adBf#k$Id$`#|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`#KS!`!a#L^!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#K__#k$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#Lia#j$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`!a#Mn!a#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S#My`#j$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+h$ Wc(`$Ip$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!O%Z!O!P$!c!P!^%Z!^!_*g!_!a%Z!a!b$#m!b#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z'+`$!n_z'#p$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$#x`$c&j#u$Id'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z#&^$%V_!x!Ln$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(@^$&a_|(8n$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(n$'eZ$c&jO!^$(W!^!_$(n!_#i$(W#i#j$(s#j#l$(W#l#m$*f#m#o$(W#o#p$(n#p;'S$(W;'S;=`$,q<%lO$(W(n$(_T[#S$c&jO!^&c!_#o&c#p;'S&c;'S;=`&w<%lO&c#S$(sO[#S(n$(x[$c&jO!Q&c!Q![$)n![!^&c!_!c&c!c!i$)n!i#T&c#T#Z$)n#Z#o&c#o#p$,U#p;'S&c;'S;=`&w<%lO&c(n$)sZ$c&jO!Q&c!Q![$*f![!^&c!_!c&c!c!i$*f!i#T&c#T#Z$*f#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$*kZ$c&jO!Q&c!Q![$+^![!^&c!_!c&c!c!i$+^!i#T&c#T#Z$+^#Z#o&c#p;'S&c;'S;=`&w<%lO&c(n$+cZ$c&jO!Q&c!Q![$(W![!^&c!_!c&c!c!i$(W!i#T&c#T#Z$(W#Z#o&c#p;'S&c;'S;=`&w<%lO&c#S$,XR!Q![$,b!c!i$,b#T#Z$,b#S$,eS!Q![$,b!c!i$,b#T#Z$,b#q#r$(n(n$,tP;=`<%l$(W!'l$-S_!SM|$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z%#S$.^`#r$Id$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z&,v$/k_$c&j'vp'y!b(Q&%WOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$0yk$c&j'vp'y!b(T!LY's&;d$X#tOY%ZYZ&cZr%Zrs&}st%Ztu$0juw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$0j![!^%Z!^!_*g!_!c%Z!c!}$0j!}#O%Z#O#P&c#P#R%Z#R#S$0j#S#T%Z#T#o$0j#o#p*g#p$g%Z$g;'S$0j;'S;=`$4t<%lO$0j+d$2yk$c&j'vp'y!b$X#tOY%ZYZ&cZr%Zrs&}st%Ztu$2nuw%Zwx(rx}%Z}!O$2n!O!Q%Z!Q![$2n![!^%Z!^!_*g!_!c%Z!c!}$2n!}#O%Z#O#P&c#P#R%Z#R#S$2n#S#T%Z#T#o$2n#o#p*g#p$g%Z$g;'S$2n;'S;=`$4n<%lO$2n+d$4qP;=`<%l$2n(CS$4wP;=`<%l$0j!5p$5TX!X!3l'vp'y!bOY*gZr*grs'}sw*gwx)rx#O*g#P;'S*g;'S;=`+Z<%lO*g%Df$5{a(g%<v$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_!`Cn!`#O%Z#O#P&c#P#o%Z#o#p*g#p#q$#m#q;'S%Z;'S;=`+a<%lO%Z%#`$7__!W$I`o`$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(r$8i_!mS$c&j'vp'y!bOY%ZYZ&cZr%Zrs&}sw%Zwx(rx!^%Z!^!_*g!_#O%Z#O#P&c#P#o%Z#o#p*g#p;'S%Z;'S;=`+a<%lO%Z(CS$9y|$c&j'vp'y!b'l(;d(T!LY's&;d$V#tOX%ZXY+gYZ&cZ[+g[p%Zpq+gqr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$f%Z$f$g+g$g#BY>P#BY#BZ$9h#BZ$IS>P$IS$I_$9h$I_$JT>P$JT$JU$9h$JU$KV>P$KV$KW$9h$KW&FU>P&FU&FV$9h&FV;'S>P;'S;=`BZ<%l?HT>P?HT?HU$9h?HUO>P(CS$=Uk$c&j'vp'y!b'm(;d(T!LY's&;d$V#tOY%ZYZ&cZr%Zrs&}st%Ztu>Puw%Zwx(rx}%Z}!O@T!O!Q%Z!Q![>P![!^%Z!^!_*g!_!c%Z!c!}>P!}#O%Z#O#P&c#P#R%Z#R#S>P#S#T%Z#T#o>P#o#p*g#p$g%Z$g;'S>P;'S;=`BZ<%lO>P",
						tokenizers: [
							au,
							lu,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9,
							10,
							11,
							12,
							13,
							ou,
							new MO(
								"$S~RRtu[#O#Pg#S#T#|~_P#o#pb~gOq~~jVO#i!P#i#j!U#j#l!P#l#m!q#m;'S!P;'S;=`#v<%lO!P~!UO!O~~!XS!Q![!e!c!i!e#T#Z!e#o#p#Z~!hR!Q![!q!c!i!q#T#Z!q~!tR!Q![!}!c!i!}#T#Z!}~#QR!Q![!P!c!i!P#T#Z!P~#^R!Q![#g!c!i#g#T#Z#g~#jS!Q![#g!c!i#g#T#Z#g#q#r!P~#yP;=`<%l!P~$RO(S~~",
								141,
								325
							),
							new MO("j~RQYZXz{^~^O'p~~aP!P!Qd~iO'q~~", 25, 307)
						],
						topRules: {
							Script: [0, 5],
							SingleExpression: [1, 266],
							SingleClassItem: [2, 267]
						},
						dialects: { jsx: 13213, ts: 13215 },
						dynamicPrecedences: { 76: 1, 78: 1, 162: 1, 190: 1 },
						specialized: [
							{ term: 311, get: (t) => cu[t] || -1 },
							{ term: 327, get: (t) => Ou[t] || -1 },
							{ term: 67, get: (t) => uu[t] || -1 }
						],
						tokenPrec: 13238
					}),
					du = [
						_c("function ${name}(${params}) {\n\t${}\n}", {
							label: "function",
							detail: "definition",
							type: "keyword"
						}),
						_c(
							"for (let ${index} = 0; ${index} < ${bound}; ${index}++) {\n\t${}\n}",
							{ label: "for", detail: "loop", type: "keyword" }
						),
						_c("for (let ${name} of ${collection}) {\n\t${}\n}", {
							label: "for",
							detail: "of loop",
							type: "keyword"
						}),
						_c("do {\n\t${}\n} while (${})", {
							label: "do",
							detail: "loop",
							type: "keyword"
						}),
						_c("while (${}) {\n\t${}\n}", {
							label: "while",
							detail: "loop",
							type: "keyword"
						}),
						_c("try {\n\t${}\n} catch (${error}) {\n\t${}\n}", {
							label: "try",
							detail: "/ catch block",
							type: "keyword"
						}),
						_c("if (${}) {\n\t${}\n}", {
							label: "if",
							detail: "block",
							type: "keyword"
						}),
						_c("if (${}) {\n\t${}\n} else {\n\t${}\n}", {
							label: "if",
							detail: "/ else block",
							type: "keyword"
						}),
						_c("class ${name} {\n\tconstructor(${params}) {\n\t\t${}\n\t}\n}", {
							label: "class",
							detail: "definition",
							type: "keyword"
						}),
						_c('import {${names}} from "${module}"\n${}', {
							label: "import",
							detail: "named",
							type: "keyword"
						}),
						_c('import ${name} from "${module}"\n${}', {
							label: "import",
							detail: "default",
							type: "keyword"
						})
					],
					pu = new Ao(),
					gu = new Set([
						"Script",
						"Block",
						"FunctionExpression",
						"FunctionDeclaration",
						"ArrowFunction",
						"MethodDeclaration",
						"ForStatement"
					]);
				function mu(t) {
					return (e, i) => {
						let n = e.node.getChild("VariableDefinition");
						return n && i(n, t), !0;
					};
				}
				const Su = ["FunctionDeclaration"],
					Qu = {
						FunctionDeclaration: mu("function"),
						ClassDeclaration: mu("class"),
						ClassExpression: () => !0,
						EnumDeclaration: mu("constant"),
						TypeAliasDeclaration: mu("type"),
						NamespaceDeclaration: mu("namespace"),
						VariableDefinition(t, e) {
							t.matchContext(Su) || e(t, "variable");
						},
						TypeDefinition(t, e) {
							e(t, "type");
						},
						__proto__: null
					};
				function vu(t, e) {
					let i = pu.get(e);
					if (i) return i;
					let n = [],
						r = !0;
					function s(e, i) {
						let r = t.sliceString(e.from, e.to);
						n.push({ label: r, type: i });
					}
					return (
						e.cursor(po.IncludeAnonymous).iterate((e) => {
							if (r) r = !1;
							else if (e.name) {
								let t = Qu[e.name];
								if ((t && t(e, s)) || gu.has(e.name)) return !1;
							} else if (e.to - e.from > 8192) {
								for (let i of vu(t, e.node)) n.push(i);
								return !1;
							}
						}),
						pu.set(e, n),
						n
					);
				}
				const yu = /^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,
					bu = [
						"TemplateString",
						"String",
						"RegExp",
						"LineComment",
						"BlockComment",
						"VariableDefinition",
						"TypeDefinition",
						"Label",
						"PropertyDefinition",
						"PropertyName",
						"PrivatePropertyDefinition",
						"PrivatePropertyName"
					];
				function wu(t) {
					let e = ka(t.state).resolveInner(t.pos, -1);
					if (bu.indexOf(e.name) > -1) return null;
					let i =
						"VariableName" == e.name ||
						(e.to - e.from < 20 && yu.test(t.state.sliceDoc(e.from, e.to)));
					if (!i && !t.explicit) return null;
					let n = [];
					for (let i = e; i; i = i.parent)
						gu.has(i.name) && (n = n.concat(vu(t.state.doc, i)));
					return { options: n, from: i ? e.from : t.pos, validFor: yu };
				}
				const xu = Pa.define({
						name: "javascript",
						parser: fu.configure({
							props: [
								Ga.add({
									IfStatement: Ja({ except: /^\s*({|else\b)/ }),
									TryStatement: Ja({ except: /^\s*({|catch\b|finally\b)/ }),
									LabeledStatement: (t) => t.baseIndent,
									SwitchBody: (t) => {
										let e = t.textAfter,
											i = /^\s*\}/.test(e),
											n = /^\s*(case|default)\b/.test(e);
										return t.baseIndent + (i ? 0 : n ? 1 : 2) * t.unit;
									},
									Block: Ha({ closing: "}" }),
									ArrowFunction: (t) => t.baseIndent + t.unit,
									"TemplateString BlockComment": () => null,
									"Statement Property": Ja({ except: /^{/ }),
									JSXElement(t) {
										let e = /^\s*<\//.test(t.textAfter);
										return t.lineIndent(t.node.from) + (e ? 0 : t.unit);
									},
									JSXEscape(t) {
										let e = /\s*\}/.test(t.textAfter);
										return t.lineIndent(t.node.from) + (e ? 0 : t.unit);
									},
									"JSXOpenTag JSXSelfClosingTag": (t) =>
										t.column(t.node.from) + t.unit
								}),
								tl.add({
									"Block ClassBody SwitchBody EnumBody ObjectExpression ArrayExpression":
										el,
									BlockComment: (t) => ({ from: t.from + 2, to: t.to - 2 })
								})
							]
						}),
						languageData: {
							closeBrackets: { brackets: ["(", "[", "{", "'", '"', "`"] },
							commentTokens: { line: "//", block: { open: "/*", close: "*/" } },
							indentOnInput: /^\s*(?:case |default:|\{|\}|<\/)$/,
							wordChars: "$"
						}
					}),
					$u = {
						test: (t) => /^JSX/.test(t.name),
						facet: ba({
							commentTokens: { block: { open: "{/*", close: "*/}" } }
						})
					},
					Pu = xu.configure({ dialect: "ts" }, "typescript"),
					ku = xu.configure({
						dialect: "jsx",
						props: [wa.add((t) => (t.isTop ? [$u] : void 0))]
					}),
					Xu = xu.configure(
						{
							dialect: "jsx ts",
							props: [wa.add((t) => (t.isTop ? [$u] : void 0))]
						},
						"typescript"
					),
					Zu =
						"break case const continue default delete export extends false finally in instanceof let new return static super switch this throw true typeof var yield"
							.split(" ")
							.map((t) => ({ label: t, type: "keyword" }));
				function Tu(t = {}) {
					let e = t.jsx ? (t.typescript ? Xu : ku) : t.typescript ? Pu : xu;
					return new _a(e, [
						xu.data.of({
							autocomplete:
								((i = bu),
								(n = Qc(du.concat(Zu))),
								(t) => {
									for (
										let e = ka(t.state).resolveInner(t.pos, -1);
										e;
										e = e.parent
									) {
										if (i.indexOf(e.name) > -1) return null;
										if (e.type.isTop) break;
									}
									return n(t);
								})
						}),
						xu.data.of({ autocomplete: wu }),
						t.jsx ? Vu : []
					]);
					var i, n;
				}
				function Cu(t, e, i = t.length) {
					for (let n = null == e ? void 0 : e.firstChild; n; n = n.nextSibling)
						if (
							"JSXIdentifier" == n.name ||
							"JSXBuiltin" == n.name ||
							"JSXNamespacedName" == n.name ||
							"JSXMemberExpression" == n.name
						)
							return t.sliceString(n.from, Math.min(n.to, i));
					return "";
				}
				const Au =
						"object" == typeof navigator &&
						/Android\b/.test(navigator.userAgent),
					Vu = Zr.inputHandler.of((t, e, i, n) => {
						if (
							(Au ? t.composing : t.compositionStarted) ||
							t.state.readOnly ||
							e != i ||
							(">" != n && "/" != n) ||
							!xu.isActiveAt(t.state, e, -1)
						)
							return !1;
						let { state: r } = t,
							s = r.changeByRange((t) => {
								var e, i;
								let s,
									{ head: o } = t,
									a = ka(r).resolveInner(o, -1);
								if (
									("JSXStartTag" == a.name && (a = a.parent),
									">" == n && "JSXFragmentTag" == a.name)
								)
									return {
										range: W.cursor(o + 1),
										changes: { from: o, insert: "></>" }
									};
								if ("/" == n && "JSXFragmentTag" == a.name) {
									let t = a.parent,
										i = null == t ? void 0 : t.parent;
									if (
										t.from == o - 1 &&
										"JSXEndTag" !=
											(null === (e = i.lastChild) || void 0 === e
												? void 0
												: e.name) &&
										(s = Cu(r.doc, null == i ? void 0 : i.firstChild, o))
									) {
										let t = `/${s}>`;
										return {
											range: W.cursor(o + t.length),
											changes: { from: o, insert: t }
										};
									}
								} else if (">" == n) {
									let t = (function (t) {
										for (;;) {
											if (
												"JSXOpenTag" == t.name ||
												"JSXSelfClosingTag" == t.name ||
												"JSXFragmentTag" == t.name
											)
												return t;
											if (!t.parent) return null;
											t = t.parent;
										}
									})(a);
									if (
										t &&
										"JSXEndTag" !=
											(null === (i = t.lastChild) || void 0 === i
												? void 0
												: i.name) &&
										"</" != r.sliceDoc(o, o + 2) &&
										(s = Cu(r.doc, t, o))
									)
										return {
											range: W.cursor(o + 1),
											changes: { from: o, insert: `></${s}>` }
										};
								}
								return { range: t };
							});
						return (
							!s.changes.empty &&
							(t.dispatch(s, { userEvent: "input.type", scrollIntoView: !0 }),
							!0)
						);
					}),
					Wu = {
						__proto__: null,
						anyref: 34,
						dataref: 34,
						eqref: 34,
						externref: 34,
						i31ref: 34,
						funcref: 34,
						i8: 34,
						i16: 34,
						i32: 34,
						i64: 34,
						f32: 34,
						f64: 34
					},
					Yu = eu.deserialize({
						version: 14,
						states:
							"!^Q]QPOOOqQPO'#CbOOQO'#Cd'#CdOOQO'#Cl'#ClOOQO'#Ch'#ChQ]QPOOOOQO,58|,58|OxQPO,58|OOQO-E6f-E6fOOQO1G.h1G.h",
						stateData: "!P~O_OSPOSQOS~OTPOVROXROYROZROaQO~OSUO~P]OSXO~P]O",
						goto: "xaPPPPPPbPbPPPhPPPrXROPTVQTOQVPTWTVXSOPTV",
						nodeNames:
							"⚠ LineComment BlockComment Module ) ( App Identifier Type Keyword Number String",
						maxTerm: 17,
						nodeProps: [
							["openedBy", 4, "("],
							["closedBy", 5, ")"],
							["group", -6, 6, 7, 8, 9, 10, 11, "Expression"]
						],
						skippedNodes: [0, 1, 2],
						repeatNodeCount: 1,
						tokenData:
							"/Q~R^XY}YZ}]^}pq}rs!Stu!qxy&Vyz'S{|'X}!O'X!Q!R'b!R![)_!]!^,{#T#o-^~!SO_~~!VTOr!Srs!fs#O!S#O#P!k#P~!S~!kOZ~~!nPO~!S~!tiqr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~$hiV~qr$cst$ctu$cuv$cvw$cwx$cz{$c{|$c}!O$c!O!P$c!P!Q$c!Q![$c![!]$c!^!_$c!_!`$c!`!a$c!a!b$c!b!c$c!c!}$c#Q#R$c#R#S$c#S#T$c#T#o$c#p#q$c#r#s$c~&[PT~!]!^&_~&bRO!]&_!]!^&k!^~&_~&nTOy&_yz&}z!]&_!]!^&k!^~&_~'SOQ~~'XOS~~'[Q!Q!R'b!R![)_~'gUY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j#l#m)y~(ORY~!Q![(X!g!h(j#X#Y(j~(^SY~!Q![(X!g!h(j#R#S)X#X#Y(j~(mR{|(v}!O(v!Q![(|~(yP!Q![(|~)RQY~!Q![(|#R#S(v~)[P!Q![(X~)dTY~!O!P'y!Q![)_!g!h(j#R#S)s#X#Y(j~)vP!Q![)_~)|R!Q![*V!c!i*V#T#Z*V~*[VY~!O!P*q!Q![*V!c!i*V!r!s+n#R#S)y#T#Z*V#d#e+n~*vTY~!Q![+V!c!i+V!r!s+n#T#Z+V#d#e+n~+[UY~!Q![+V!c!i+V!r!s+n#R#S,o#T#Z+V#d#e+n~+qT{|,Q}!O,Q!Q![,^!c!i,^#T#Z,^~,TR!Q![,^!c!i,^#T#Z,^~,cSY~!Q![,^!c!i,^#R#S,Q#T#Z,^~,rR!Q![+V!c!i+V#T#Z+V~-OP!]!^-R~-WQP~OY-RZ~-R~-ciX~qr-^st-^tu-^uv-^vw-^wx-^z{-^{|-^}!O-^!O!P-^!P!Q-^!Q![-^![!]-^!^!_-^!_!`-^!`!a-^!a!b-^!b!c-^!c!}-^#Q#R-^#R#S-^#S#T-^#T#o-^#p#q-^#r#s-^",
						tokenizers: [0],
						topRules: { Module: [0, 3] },
						specialized: [{ term: 9, get: (t) => Wu[t] || -1 }],
						tokenPrec: 0
					}),
					Ru = Pa.define({
						name: "wast",
						parser: Yu.configure({
							props: [
								Ga.add({ App: Ha({ closing: ")", align: !1 }) }),
								tl.add({
									App: el,
									BlockComment: (t) => ({ from: t.from + 2, to: t.to - 2 })
								}),
								Jo({
									Keyword: Qa.keyword,
									Type: Qa.typeName,
									Number: Qa.number,
									String: Qa.string,
									Identifier: Qa.variableName,
									LineComment: Qa.lineComment,
									BlockComment: Qa.blockComment,
									"( )": Qa.paren
								})
							]
						}),
						languageData: {
							commentTokens: { line: ";;", block: { open: "(;", close: ";)" } },
							closeBrackets: { brackets: ["(", '"'] }
						}
					}),
					_u = [
						9, 10, 11, 12, 13, 32, 133, 160, 5760, 8192, 8193, 8194, 8195, 8196,
						8197, 8198, 8199, 8200, 8201, 8202, 8232, 8233, 8239, 8287, 12288
					];
				function Mu(t) {
					return (t >= 65 && t <= 90) || (t >= 97 && t <= 122) || t >= 161;
				}
				const qu = new qO((t, e) => {
						for (let n = !1, r = 0, s = 0; ; s++) {
							let { next: o } = t;
							if (
								!(
									Mu(o) ||
									45 == o ||
									95 == o ||
									(n && ((i = o), i >= 48 && i <= 57))
								)
							) {
								n &&
									t.acceptToken(
										40 == o ? 95 : 2 == r && e.canShift(2) ? 2 : 96
									);
								break;
							}
							!n && (45 != o || s > 0) && (n = !0),
								r === s && 45 == o && r++,
								t.advance();
						}
						var i;
					}),
					Uu = new qO((t) => {
						if (_u.includes(t.peek(-1))) {
							let { next: e } = t;
							(Mu(e) ||
								95 == e ||
								35 == e ||
								46 == e ||
								91 == e ||
								58 == e ||
								45 == e) &&
								t.acceptToken(94);
						}
					}),
					ju = new qO((t) => {
						if (!_u.includes(t.peek(-1))) {
							let { next: e } = t;
							if ((37 == e && (t.advance(), t.acceptToken(1)), Mu(e))) {
								do {
									t.advance();
								} while (Mu(t.next));
								t.acceptToken(1);
							}
						}
					}),
					Du = Jo({
						"AtKeyword import charset namespace keyframes media supports":
							Qa.definitionKeyword,
						"from to selector": Qa.keyword,
						NamespaceName: Qa.namespace,
						KeyframeName: Qa.labelName,
						TagName: Qa.tagName,
						ClassName: Qa.className,
						PseudoClassName: Qa.constant(Qa.className),
						IdName: Qa.labelName,
						"FeatureName PropertyName": Qa.propertyName,
						AttributeName: Qa.attributeName,
						NumberLiteral: Qa.number,
						KeywordQuery: Qa.keyword,
						UnaryQueryOp: Qa.operatorKeyword,
						"CallTag ValueName": Qa.atom,
						VariableName: Qa.variableName,
						Callee: Qa.operatorKeyword,
						Unit: Qa.unit,
						"UniversalSelector NestingSelector": Qa.definitionOperator,
						MatchOp: Qa.compareOperator,
						"ChildOp SiblingOp, LogicOp": Qa.logicOperator,
						BinOp: Qa.arithmeticOperator,
						Important: Qa.modifier,
						Comment: Qa.blockComment,
						ParenthesizedContent: Qa.special(Qa.name),
						ColorLiteral: Qa.color,
						StringLiteral: Qa.string,
						":": Qa.punctuation,
						"PseudoOp #": Qa.derefOperator,
						"; ,": Qa.separator,
						"( )": Qa.paren,
						"[ ]": Qa.squareBracket,
						"{ }": Qa.brace
					}),
					Eu = {
						__proto__: null,
						lang: 32,
						"nth-child": 32,
						"nth-last-child": 32,
						"nth-of-type": 32,
						"nth-last-of-type": 32,
						dir: 32,
						"host-context": 32,
						url: 60,
						"url-prefix": 60,
						domain: 60,
						regexp: 60,
						selector: 134
					},
					Gu = {
						__proto__: null,
						"@import": 114,
						"@media": 138,
						"@charset": 142,
						"@namespace": 146,
						"@keyframes": 152,
						"@supports": 164
					},
					Iu = { __proto__: null, not: 128, only: 128, from: 158, to: 160 },
					zu = eu.deserialize({
						version: 14,
						states:
							"7WQYQ[OOO#_Q[OOOOQP'#Cd'#CdOOQP'#Cc'#CcO#fQ[O'#CfO$YQXO'#CaO$aQ[O'#ChO$lQ[O'#DPO$qQ[O'#DTOOQP'#Ed'#EdO$vQdO'#DeO%bQ[O'#DrO$vQdO'#DtO%sQ[O'#DvO&OQ[O'#DyO&TQ[O'#EPO&cQ[O'#EROOQS'#Ec'#EcOOQS'#ET'#ETQYQ[OOO&jQXO'#CdO'_QWO'#DaO'dQWO'#EjO'oQ[O'#EjQOQWOOOOQP'#Cg'#CgOOQP,59Q,59QO#fQ[O,59QO'yQ[O'#EWO(eQWO,58{O(mQ[O,59SO$lQ[O,59kO$qQ[O,59oO'yQ[O,59sO'yQ[O,59uO'yQ[O,59vO(xQ[O'#D`OOQS,58{,58{OOQP'#Ck'#CkOOQO'#C}'#C}OOQP,59S,59SO)PQWO,59SO)UQWO,59SOOQP'#DR'#DROOQP,59k,59kOOQO'#DV'#DVO)ZQ`O,59oOOQS'#Cp'#CpO$vQdO'#CqO)cQvO'#CsO*pQtO,5:POOQO'#Cx'#CxO)UQWO'#CwO+UQWO'#CyOOQS'#Eg'#EgOOQO'#Dh'#DhO+ZQ[O'#DoO+iQWO'#EkO&TQ[O'#DmO+wQWO'#DpOOQO'#El'#ElO(hQWO,5:^O+|QpO,5:`OOQS'#Dx'#DxO,UQWO,5:bO,ZQ[O,5:bOOQO'#D{'#D{O,cQWO,5:eO,hQWO,5:kO,pQWO,5:mOOQS-E8R-E8RO$vQdO,59{O,xQ[O'#EYO-VQWO,5;UO-VQWO,5;UOOQP1G.l1G.lO-|QXO,5:rOOQO-E8U-E8UOOQS1G.g1G.gOOQP1G.n1G.nO)PQWO1G.nO)UQWO1G.nOOQP1G/V1G/VO.ZQ`O1G/ZO.tQXO1G/_O/[QXO1G/aO/rQXO1G/bO0YQWO,59zO0_Q[O'#DOO0fQdO'#CoOOQP1G/Z1G/ZO$vQdO1G/ZO0mQpO,59]OOQS,59_,59_O$vQdO,59aO0uQWO1G/kOOQS,59c,59cO0zQ!bO,59eO1SQWO'#DhO1_QWO,5:TO1dQWO,5:ZO&TQ[O,5:VO&TQ[O'#EZO1lQWO,5;VO1wQWO,5:XO'yQ[O,5:[OOQS1G/x1G/xOOQS1G/z1G/zOOQS1G/|1G/|O2YQWO1G/|O2_QdO'#D|OOQS1G0P1G0POOQS1G0V1G0VOOQS1G0X1G0XO2mQtO1G/gOOQO,5:t,5:tO3TQ[O,5:tOOQO-E8W-E8WO3bQWO1G0pOOQP7+$Y7+$YOOQP7+$u7+$uO$vQdO7+$uOOQS1G/f1G/fO3mQXO'#EiO3tQWO,59jO3yQtO'#EUO4nQdO'#EfO4xQWO,59ZO4}QpO7+$uOOQS1G.w1G.wOOQS1G.{1G.{OOQS7+%V7+%VO5VQWO1G/PO$vQdO1G/oOOQO1G/u1G/uOOQO1G/q1G/qO5[QWO,5:uOOQO-E8X-E8XO5jQXO1G/vOOQS7+%h7+%hO5qQYO'#CsO(hQWO'#E[O5yQdO,5:hOOQS,5:h,5:hO6XQtO'#EXO$vQdO'#EXO7VQdO7+%ROOQO7+%R7+%ROOQO1G0`1G0`O7jQpO<<HaO7rQWO,5;TOOQP1G/U1G/UOOQS-E8S-E8SO$vQdO'#EVO7zQWO,5;QOOQT1G.u1G.uOOQP<<Ha<<HaOOQS7+$k7+$kO8SQdO7+%ZOOQO7+%b7+%bOOQS,5:v,5:vOOQS-E8Y-E8YOOQS1G0S1G0SO8ZQtO,5:sOOQS-E8V-E8VOOQO<<Hm<<HmOOQPAN={AN={O9XQdO,5:qOOQO-E8T-E8TOOQO<<Hu<<Hu",
						stateData:
							"9i~O#UOSROS~OUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SQO#XSO~OQeOUXOXXO]UO^UOtVOxWO!Y`O!ZYO!gZO!i[O!k]O!n^O!t_O#SdO#XSO~O#P#^P~P!ZO#SiO~O]nO^nOplOtoOxpO|qO!PsO#QrO#XkO~O!RtO~P#kO`zO#RwO#SvO~O#S{O~O#S}O~OQ!WOb!QOf!WOh!WOn!VO#R!TO#S!PO#[!RO~Ob!YO!b![O!e!]O#S!XO!R#_P~Oh!bOn!VO#S!aO~O#S!dO~Ob!YO!b![O!e!]O#S!XO~O!W#_P~P%bO]WX]!UX^WXpWXtWXxWX|WX!PWX!RWX#QWX#XWX~O]!iO~O!W!jO#P#^X!Q#^X~O#P#^X!Q#^X~P!ZOUXOXXO]UO^UOtVOxWO#SQO#XSO~OplO!RtO~O`!sO#RwO#SvO~O!Q#^P~P!ZOb!zO~Ob!{O~Ov!|Oz!}O~OP#PObgXjgX!WgX!bgX!egX#SgXagXQgXfgXhgXngXpgX!VgX#PgX#RgX#[gXvgX!QgX~Ob!YOj#QO!b![O!e!]O#S!XO!W#_P~Ob#TO~Ob!YO!b![O!e!]O#S#UO~Op#YO!`#XO!R#_X!W#_X~Ob#]O~Oj#QO!W#_O~O!W#`O~Oh#aOn!VO~O!R#bO~O!RtO!`#XO~O!RtO!W#eO~O!W!|X#P!|X!Q!|X~P!ZO!W!jO#P#^a!Q#^a~O]nO^nOtoOxpO|qO!PsO#QrO#XkO~Op!za!R!zaa!za~P-bOv#lOz#mO~O]nO^nOtoOxpO#XkO~Op{i|{i!P{i!R{i#Q{ia{i~P.cOp}i|}i!P}i!R}i#Q}ia}i~P.cOp!Oi|!Oi!P!Oi!R!Oi#Q!Oia!Oi~P.cO!Q#nO~Oa#]P~P'yOa#YP~P$vOa#uOj#QO~O!W#wO~Oh#xOo#xO~O]!^Xa![X!`![X~O]#yO~Oa#zO!`#XO~Op#YO!R#_a!W#_a~O!`#XOp!aa!R!aa!W!aaa!aa~O!W$PO~O!Q$TO!q$RO!r$RO#[$QO~Oj#QOp$VO!V$XO!W!Ti#P!Ti!Q!Ti~P$vO!W!|a#P!|a!Q!|a~P!ZO!W!jO#P#^i!Q#^i~Oa#]X~P#kOa$]O~Oj#QOQ!xXa!xXb!xXf!xXh!xXn!xXp!xX#R!xX#S!xX#[!xX~Op$_Oa#YX~P$vOa$aO~Oj#QOv$bO~Oa$cO~O!`#XOp!}a!R!}a!W!}a~Oa$eO~P-bOP#PO!RgX~O!Q$hO!q$RO!r$RO#[$QO~Oj#QOQ!{Xb!{Xf!{Xh!{Xn!{Xp!{X!V!{X!W!{X#P!{X#R!{X#S!{X#[!{X!Q!{X~Op$VO!V$kO!W!Tq#P!Tq!Q!Tq~P$vOj#QOv$lO~OplOa#]a~Op$_Oa#Ya~Oa$oO~P$vOj#QOQ!{ab!{af!{ah!{an!{ap!{a!V!{a!W!{a#P!{a#R!{a#S!{a#[!{a!Q!{a~Oa!yap!ya~P$vOo#[j!Pj~",
						goto: ",`#aPPPPP#bP#k#zP#k$Z#kPP$aPPP$g$p$pP%SP$pP$p%j%|PPP&f&l#kP&rP#kP&xP#kP#k#kPPP'O'b'oPP#bPP'v'v(Q'vP'vP'v'vP#bP#bP#bP(T#bP(W(ZPP#bP#bP(^(m({)R)])c)m)sPPPPPP)y*SP*o*rP+h+k+q+z_aOPcgt!j#hkXOPcglqrst!j!z#]#hkROPcglqrst!j!z#]#hQjSR!mkQxUR!qnQ!qzQ#S!UR#k!sq!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mT$R#b$Sq!UY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mp!WY[!Q!i!{!}#Q#f#m#r#y$V$W$_$d$mQ!b]R#a!cQyUR!rnQ!qyR#k!rQ|VR!toQ!OWR!upQuTQ!pmQ#^!_Q#d!fQ#e!gR$f$RSfPtQ!lgQ#g!jR$Y#hZePgt!j#ha!^Z_`!S!Y![#X#YR#V!YR!c]R!e^R#c!eQcOSgPtU!hcg#hR#h!jQ#r!{U$^#r$d$mQ$d#yR$m$_Q$`#rR$n$`QmTS!om$[R$[#oQ$W#fR$j$WQ!kfS#i!k#jR#j!lQ#Z!ZR#}#ZQ$S#bR$g$S_bOPcgt!j#h^TOPcgt!j#hQ!nlQ!vqQ!wrQ!xsQ#o!zR$O#]R#s!{Q!SYQ!`[Q#O!QQ#f!i[#q!{#r#y$_$d$mQ#t!}Q#v#QS$U#f$WQ$Z#mR$i$VR#p!zQhPR!ytQ!_ZQ!g`R#R!SU!ZZ`!SQ!f_Q#W!YQ#[![Q#{#XR#|#Y",
						nodeNames:
							"⚠ Unit VariableName Comment StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector ClassSelector ClassName PseudoClassSelector : :: PseudoClassName PseudoClassName ) ( ArgList ValueName ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp CallExpression Callee CallLiteral CallTag ParenthesizedContent , PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp } { Block Declaration PropertyName Important ; ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery LogicOp UnaryQuery UnaryQueryOp ParenthesizedQuery SelectorQuery selector MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList from to SupportsStatement supports AtRule Styles",
						maxTerm: 108,
						nodeProps: [
							["openedBy", 17, "(", 48, "{"],
							["closedBy", 18, ")", 49, "}"]
						],
						propSources: [Du],
						skippedNodes: [0, 3],
						repeatNodeCount: 8,
						tokenData:
							"Lq~R!^OX$}X^%u^p$}pq%uqr)Xrs.Rst/utu6duv$}vw7^wx7oxy9^yz9oz{9t{|:_|}?Q}!O?c!O!P@Q!P!Q@i!Q![Cu![!]Dp!]!^El!^!_$}!_!`E}!`!aF`!a!b$}!b!cG[!c!}$}!}#OHt#O#P$}#P#QIV#Q#R6d#R#T$}#T#UIh#U#c$}#c#dJy#d#o$}#o#pK`#p#q6d#q#rKq#r#sLS#s#y$}#y#z%u#z$f$}$f$g%u$g#BY$}#BY#BZ%u#BZ$IS$}$IS$I_%u$I_$I|$}$I|$JO%u$JO$JT$}$JT$JU%u$JU$KV$}$KV$KW%u$KW&FU$}&FU&FV%u&FV;'S$};'S;=`Lk<%lO$}W%QSOy%^z;'S%^;'S;=`%o<%lO%^W%cSoWOy%^z;'S%^;'S;=`%o<%lO%^W%rP;=`<%l%^~%zh#U~OX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^~'mh#U~oWOX%^X^'f^p%^pq'fqy%^z#y%^#y#z'f#z$f%^$f$g'f$g#BY%^#BY#BZ'f#BZ$IS%^$IS$I_'f$I_$I|%^$I|$JO'f$JO$JT%^$JT$JU'f$JU$KV%^$KV$KW'f$KW&FU%^&FU&FV'f&FV;'S%^;'S;=`%o<%lO%^^)[UOy%^z#]%^#]#^)n#^;'S%^;'S;=`%o<%lO%^^)sUoWOy%^z#a%^#a#b*V#b;'S%^;'S;=`%o<%lO%^^*[UoWOy%^z#d%^#d#e*n#e;'S%^;'S;=`%o<%lO%^^*sUoWOy%^z#c%^#c#d+V#d;'S%^;'S;=`%o<%lO%^^+[UoWOy%^z#f%^#f#g+n#g;'S%^;'S;=`%o<%lO%^^+sUoWOy%^z#h%^#h#i,V#i;'S%^;'S;=`%o<%lO%^^,[UoWOy%^z#T%^#T#U,n#U;'S%^;'S;=`%o<%lO%^^,sUoWOy%^z#b%^#b#c-V#c;'S%^;'S;=`%o<%lO%^^-[UoWOy%^z#h%^#h#i-n#i;'S%^;'S;=`%o<%lO%^^-uS!VUoWOy%^z;'S%^;'S;=`%o<%lO%^~.UWOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o<%lO.R~.sOh~~.vRO;'S.R;'S;=`/P;=`O.R~/SXOY.RZr.Rrs.ns#O.R#O#P.s#P;'S.R;'S;=`/o;=`<%l.R<%lO.R~/rP;=`<%l.R_/zYtPOy%^z!Q%^!Q![0j![!c%^!c!i0j!i#T%^#T#Z0j#Z;'S%^;'S;=`%o<%lO%^^0oYoWOy%^z!Q%^!Q![1_![!c%^!c!i1_!i#T%^#T#Z1_#Z;'S%^;'S;=`%o<%lO%^^1dYoWOy%^z!Q%^!Q![2S![!c%^!c!i2S!i#T%^#T#Z2S#Z;'S%^;'S;=`%o<%lO%^^2ZYfUoWOy%^z!Q%^!Q![2y![!c%^!c!i2y!i#T%^#T#Z2y#Z;'S%^;'S;=`%o<%lO%^^3QYfUoWOy%^z!Q%^!Q![3p![!c%^!c!i3p!i#T%^#T#Z3p#Z;'S%^;'S;=`%o<%lO%^^3uYoWOy%^z!Q%^!Q![4e![!c%^!c!i4e!i#T%^#T#Z4e#Z;'S%^;'S;=`%o<%lO%^^4lYfUoWOy%^z!Q%^!Q![5[![!c%^!c!i5[!i#T%^#T#Z5[#Z;'S%^;'S;=`%o<%lO%^^5aYoWOy%^z!Q%^!Q![6P![!c%^!c!i6P!i#T%^#T#Z6P#Z;'S%^;'S;=`%o<%lO%^^6WSfUoWOy%^z;'S%^;'S;=`%o<%lO%^Y6gUOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^Y7QSzQoWOy%^z;'S%^;'S;=`%o<%lO%^X7cSXPOy%^z;'S%^;'S;=`%o<%lO%^~7rWOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W<%lO7o~8_RO;'S7o;'S;=`8h;=`O7o~8kXOY7oZw7owx.nx#O7o#O#P8[#P;'S7o;'S;=`9W;=`<%l7o<%lO7o~9ZP;=`<%l7o_9cSbVOy%^z;'S%^;'S;=`%o<%lO%^~9tOa~_9{UUPjSOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^_:fWjS!PPOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^^;TUoWOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^^;nYoW#[UOy%^z!Q%^!Q![;g![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^^<cYoWOy%^z{%^{|=R|}%^}!O=R!O!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=WUoWOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^=qUoW#[UOy%^z!Q%^!Q![=j![;'S%^;'S;=`%o<%lO%^^>[[oW#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^_?VSpVOy%^z;'S%^;'S;=`%o<%lO%^^?hWjSOy%^z!O%^!O!P;O!P!Q%^!Q![>T![;'S%^;'S;=`%o<%lO%^_@VU#XPOy%^z!Q%^!Q![;g![;'S%^;'S;=`%o<%lO%^~@nTjSOy%^z{@}{;'S%^;'S;=`%o<%lO%^~ASUoWOy@}yzAfz{Bm{;'S@};'S;=`Co<%lO@}~AiTOzAfz{Ax{;'SAf;'S;=`Bg<%lOAf~A{VOzAfz{Ax{!PAf!P!QBb!Q;'SAf;'S;=`Bg<%lOAf~BgOR~~BjP;=`<%lAf~BrWoWOy@}yzAfz{Bm{!P@}!P!QC[!Q;'S@};'S;=`Co<%lO@}~CcSoWR~Oy%^z;'S%^;'S;=`%o<%lO%^~CrP;=`<%l@}^Cz[#[UOy%^z!O%^!O!P;g!P!Q%^!Q![>T![!g%^!g!h<^!h#X%^#X#Y<^#Y;'S%^;'S;=`%o<%lO%^XDuU]POy%^z![%^![!]EX!];'S%^;'S;=`%o<%lO%^XE`S^PoWOy%^z;'S%^;'S;=`%o<%lO%^_EqS!WVOy%^z;'S%^;'S;=`%o<%lO%^YFSSzQOy%^z;'S%^;'S;=`%o<%lO%^XFeU|POy%^z!`%^!`!aFw!a;'S%^;'S;=`%o<%lO%^XGOS|PoWOy%^z;'S%^;'S;=`%o<%lO%^XG_WOy%^z!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHO[!YPoWOy%^z}%^}!OGw!O!Q%^!Q![Gw![!c%^!c!}Gw!}#T%^#T#oGw#o;'S%^;'S;=`%o<%lO%^XHySxPOy%^z;'S%^;'S;=`%o<%lO%^^I[SvUOy%^z;'S%^;'S;=`%o<%lO%^XIkUOy%^z#b%^#b#cI}#c;'S%^;'S;=`%o<%lO%^XJSUoWOy%^z#W%^#W#XJf#X;'S%^;'S;=`%o<%lO%^XJmS!`PoWOy%^z;'S%^;'S;=`%o<%lO%^XJ|UOy%^z#f%^#f#gJf#g;'S%^;'S;=`%o<%lO%^XKeS!RPOy%^z;'S%^;'S;=`%o<%lO%^_KvS!QVOy%^z;'S%^;'S;=`%o<%lO%^ZLXU!PPOy%^z!_%^!_!`6y!`;'S%^;'S;=`%o<%lO%^WLnP;=`<%l$}",
						tokenizers: [Uu, ju, qu, 0, 1, 2, 3],
						topRules: { StyleSheet: [0, 4], Styles: [1, 84] },
						specialized: [
							{ term: 95, get: (t) => Eu[t] || -1 },
							{ term: 56, get: (t) => Gu[t] || -1 },
							{ term: 96, get: (t) => Iu[t] || -1 }
						],
						tokenPrec: 1123
					});
				let Bu = null;
				function Nu() {
					if (!Bu && "object" == typeof document && document.body) {
						let { style: t } = document.body,
							e = [],
							i = new Set();
						for (let n in t)
							"cssText" != n &&
								"cssFloat" != n &&
								"string" == typeof t[n] &&
								(/[A-Z]/.test(n) &&
									(n = n.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase())),
								i.has(n) || (e.push(n), i.add(n)));
						Bu = e.sort().map((t) => ({ type: "property", label: t }));
					}
					return Bu || [];
				}
				const Lu = [
						"active",
						"after",
						"any-link",
						"autofill",
						"backdrop",
						"before",
						"checked",
						"cue",
						"default",
						"defined",
						"disabled",
						"empty",
						"enabled",
						"file-selector-button",
						"first",
						"first-child",
						"first-letter",
						"first-line",
						"first-of-type",
						"focus",
						"focus-visible",
						"focus-within",
						"fullscreen",
						"has",
						"host",
						"host-context",
						"hover",
						"in-range",
						"indeterminate",
						"invalid",
						"is",
						"lang",
						"last-child",
						"last-of-type",
						"left",
						"link",
						"marker",
						"modal",
						"not",
						"nth-child",
						"nth-last-child",
						"nth-last-of-type",
						"nth-of-type",
						"only-child",
						"only-of-type",
						"optional",
						"out-of-range",
						"part",
						"placeholder",
						"placeholder-shown",
						"read-only",
						"read-write",
						"required",
						"right",
						"root",
						"scope",
						"selection",
						"slotted",
						"target",
						"target-text",
						"valid",
						"visited",
						"where"
					].map((t) => ({ type: "class", label: t })),
					Hu = [
						"above",
						"absolute",
						"activeborder",
						"additive",
						"activecaption",
						"after-white-space",
						"ahead",
						"alias",
						"all",
						"all-scroll",
						"alphabetic",
						"alternate",
						"always",
						"antialiased",
						"appworkspace",
						"asterisks",
						"attr",
						"auto",
						"auto-flow",
						"avoid",
						"avoid-column",
						"avoid-page",
						"avoid-region",
						"axis-pan",
						"background",
						"backwards",
						"baseline",
						"below",
						"bidi-override",
						"blink",
						"block",
						"block-axis",
						"bold",
						"bolder",
						"border",
						"border-box",
						"both",
						"bottom",
						"break",
						"break-all",
						"break-word",
						"bullets",
						"button",
						"button-bevel",
						"buttonface",
						"buttonhighlight",
						"buttonshadow",
						"buttontext",
						"calc",
						"capitalize",
						"caps-lock-indicator",
						"caption",
						"captiontext",
						"caret",
						"cell",
						"center",
						"checkbox",
						"circle",
						"cjk-decimal",
						"clear",
						"clip",
						"close-quote",
						"col-resize",
						"collapse",
						"color",
						"color-burn",
						"color-dodge",
						"column",
						"column-reverse",
						"compact",
						"condensed",
						"contain",
						"content",
						"contents",
						"content-box",
						"context-menu",
						"continuous",
						"copy",
						"counter",
						"counters",
						"cover",
						"crop",
						"cross",
						"crosshair",
						"currentcolor",
						"cursive",
						"cyclic",
						"darken",
						"dashed",
						"decimal",
						"decimal-leading-zero",
						"default",
						"default-button",
						"dense",
						"destination-atop",
						"destination-in",
						"destination-out",
						"destination-over",
						"difference",
						"disc",
						"discard",
						"disclosure-closed",
						"disclosure-open",
						"document",
						"dot-dash",
						"dot-dot-dash",
						"dotted",
						"double",
						"down",
						"e-resize",
						"ease",
						"ease-in",
						"ease-in-out",
						"ease-out",
						"element",
						"ellipse",
						"ellipsis",
						"embed",
						"end",
						"ethiopic-abegede-gez",
						"ethiopic-halehame-aa-er",
						"ethiopic-halehame-gez",
						"ew-resize",
						"exclusion",
						"expanded",
						"extends",
						"extra-condensed",
						"extra-expanded",
						"fantasy",
						"fast",
						"fill",
						"fill-box",
						"fixed",
						"flat",
						"flex",
						"flex-end",
						"flex-start",
						"footnotes",
						"forwards",
						"from",
						"geometricPrecision",
						"graytext",
						"grid",
						"groove",
						"hand",
						"hard-light",
						"help",
						"hidden",
						"hide",
						"higher",
						"highlight",
						"highlighttext",
						"horizontal",
						"hsl",
						"hsla",
						"hue",
						"icon",
						"ignore",
						"inactiveborder",
						"inactivecaption",
						"inactivecaptiontext",
						"infinite",
						"infobackground",
						"infotext",
						"inherit",
						"initial",
						"inline",
						"inline-axis",
						"inline-block",
						"inline-flex",
						"inline-grid",
						"inline-table",
						"inset",
						"inside",
						"intrinsic",
						"invert",
						"italic",
						"justify",
						"keep-all",
						"landscape",
						"large",
						"larger",
						"left",
						"level",
						"lighter",
						"lighten",
						"line-through",
						"linear",
						"linear-gradient",
						"lines",
						"list-item",
						"listbox",
						"listitem",
						"local",
						"logical",
						"loud",
						"lower",
						"lower-hexadecimal",
						"lower-latin",
						"lower-norwegian",
						"lowercase",
						"ltr",
						"luminosity",
						"manipulation",
						"match",
						"matrix",
						"matrix3d",
						"medium",
						"menu",
						"menutext",
						"message-box",
						"middle",
						"min-intrinsic",
						"mix",
						"monospace",
						"move",
						"multiple",
						"multiple_mask_images",
						"multiply",
						"n-resize",
						"narrower",
						"ne-resize",
						"nesw-resize",
						"no-close-quote",
						"no-drop",
						"no-open-quote",
						"no-repeat",
						"none",
						"normal",
						"not-allowed",
						"nowrap",
						"ns-resize",
						"numbers",
						"numeric",
						"nw-resize",
						"nwse-resize",
						"oblique",
						"opacity",
						"open-quote",
						"optimizeLegibility",
						"optimizeSpeed",
						"outset",
						"outside",
						"outside-shape",
						"overlay",
						"overline",
						"padding",
						"padding-box",
						"painted",
						"page",
						"paused",
						"perspective",
						"pinch-zoom",
						"plus-darker",
						"plus-lighter",
						"pointer",
						"polygon",
						"portrait",
						"pre",
						"pre-line",
						"pre-wrap",
						"preserve-3d",
						"progress",
						"push-button",
						"radial-gradient",
						"radio",
						"read-only",
						"read-write",
						"read-write-plaintext-only",
						"rectangle",
						"region",
						"relative",
						"repeat",
						"repeating-linear-gradient",
						"repeating-radial-gradient",
						"repeat-x",
						"repeat-y",
						"reset",
						"reverse",
						"rgb",
						"rgba",
						"ridge",
						"right",
						"rotate",
						"rotate3d",
						"rotateX",
						"rotateY",
						"rotateZ",
						"round",
						"row",
						"row-resize",
						"row-reverse",
						"rtl",
						"run-in",
						"running",
						"s-resize",
						"sans-serif",
						"saturation",
						"scale",
						"scale3d",
						"scaleX",
						"scaleY",
						"scaleZ",
						"screen",
						"scroll",
						"scrollbar",
						"scroll-position",
						"se-resize",
						"self-start",
						"self-end",
						"semi-condensed",
						"semi-expanded",
						"separate",
						"serif",
						"show",
						"single",
						"skew",
						"skewX",
						"skewY",
						"skip-white-space",
						"slide",
						"slider-horizontal",
						"slider-vertical",
						"sliderthumb-horizontal",
						"sliderthumb-vertical",
						"slow",
						"small",
						"small-caps",
						"small-caption",
						"smaller",
						"soft-light",
						"solid",
						"source-atop",
						"source-in",
						"source-out",
						"source-over",
						"space",
						"space-around",
						"space-between",
						"space-evenly",
						"spell-out",
						"square",
						"start",
						"static",
						"status-bar",
						"stretch",
						"stroke",
						"stroke-box",
						"sub",
						"subpixel-antialiased",
						"svg_masks",
						"super",
						"sw-resize",
						"symbolic",
						"symbols",
						"system-ui",
						"table",
						"table-caption",
						"table-cell",
						"table-column",
						"table-column-group",
						"table-footer-group",
						"table-header-group",
						"table-row",
						"table-row-group",
						"text",
						"text-bottom",
						"text-top",
						"textarea",
						"textfield",
						"thick",
						"thin",
						"threeddarkshadow",
						"threedface",
						"threedhighlight",
						"threedlightshadow",
						"threedshadow",
						"to",
						"top",
						"transform",
						"translate",
						"translate3d",
						"translateX",
						"translateY",
						"translateZ",
						"transparent",
						"ultra-condensed",
						"ultra-expanded",
						"underline",
						"unidirectional-pan",
						"unset",
						"up",
						"upper-latin",
						"uppercase",
						"url",
						"var",
						"vertical",
						"vertical-text",
						"view-box",
						"visible",
						"visibleFill",
						"visiblePainted",
						"visibleStroke",
						"visual",
						"w-resize",
						"wait",
						"wave",
						"wider",
						"window",
						"windowframe",
						"windowtext",
						"words",
						"wrap",
						"wrap-reverse",
						"x-large",
						"x-small",
						"xor",
						"xx-large",
						"xx-small"
					]
						.map((t) => ({ type: "keyword", label: t }))
						.concat(
							[
								"aliceblue",
								"antiquewhite",
								"aqua",
								"aquamarine",
								"azure",
								"beige",
								"bisque",
								"black",
								"blanchedalmond",
								"blue",
								"blueviolet",
								"brown",
								"burlywood",
								"cadetblue",
								"chartreuse",
								"chocolate",
								"coral",
								"cornflowerblue",
								"cornsilk",
								"crimson",
								"cyan",
								"darkblue",
								"darkcyan",
								"darkgoldenrod",
								"darkgray",
								"darkgreen",
								"darkkhaki",
								"darkmagenta",
								"darkolivegreen",
								"darkorange",
								"darkorchid",
								"darkred",
								"darksalmon",
								"darkseagreen",
								"darkslateblue",
								"darkslategray",
								"darkturquoise",
								"darkviolet",
								"deeppink",
								"deepskyblue",
								"dimgray",
								"dodgerblue",
								"firebrick",
								"floralwhite",
								"forestgreen",
								"fuchsia",
								"gainsboro",
								"ghostwhite",
								"gold",
								"goldenrod",
								"gray",
								"grey",
								"green",
								"greenyellow",
								"honeydew",
								"hotpink",
								"indianred",
								"indigo",
								"ivory",
								"khaki",
								"lavender",
								"lavenderblush",
								"lawngreen",
								"lemonchiffon",
								"lightblue",
								"lightcoral",
								"lightcyan",
								"lightgoldenrodyellow",
								"lightgray",
								"lightgreen",
								"lightpink",
								"lightsalmon",
								"lightseagreen",
								"lightskyblue",
								"lightslategray",
								"lightsteelblue",
								"lightyellow",
								"lime",
								"limegreen",
								"linen",
								"magenta",
								"maroon",
								"mediumaquamarine",
								"mediumblue",
								"mediumorchid",
								"mediumpurple",
								"mediumseagreen",
								"mediumslateblue",
								"mediumspringgreen",
								"mediumturquoise",
								"mediumvioletred",
								"midnightblue",
								"mintcream",
								"mistyrose",
								"moccasin",
								"navajowhite",
								"navy",
								"oldlace",
								"olive",
								"olivedrab",
								"orange",
								"orangered",
								"orchid",
								"palegoldenrod",
								"palegreen",
								"paleturquoise",
								"palevioletred",
								"papayawhip",
								"peachpuff",
								"peru",
								"pink",
								"plum",
								"powderblue",
								"purple",
								"rebeccapurple",
								"red",
								"rosybrown",
								"royalblue",
								"saddlebrown",
								"salmon",
								"sandybrown",
								"seagreen",
								"seashell",
								"sienna",
								"silver",
								"skyblue",
								"slateblue",
								"slategray",
								"snow",
								"springgreen",
								"steelblue",
								"tan",
								"teal",
								"thistle",
								"tomato",
								"turquoise",
								"violet",
								"wheat",
								"white",
								"whitesmoke",
								"yellow",
								"yellowgreen"
							].map((t) => ({ type: "constant", label: t }))
						),
					Fu = [
						"a",
						"abbr",
						"address",
						"article",
						"aside",
						"b",
						"bdi",
						"bdo",
						"blockquote",
						"body",
						"br",
						"button",
						"canvas",
						"caption",
						"cite",
						"code",
						"col",
						"colgroup",
						"dd",
						"del",
						"details",
						"dfn",
						"dialog",
						"div",
						"dl",
						"dt",
						"em",
						"figcaption",
						"figure",
						"footer",
						"form",
						"header",
						"hgroup",
						"h1",
						"h2",
						"h3",
						"h4",
						"h5",
						"h6",
						"hr",
						"html",
						"i",
						"iframe",
						"img",
						"input",
						"ins",
						"kbd",
						"label",
						"legend",
						"li",
						"main",
						"meter",
						"nav",
						"ol",
						"output",
						"p",
						"pre",
						"ruby",
						"section",
						"select",
						"small",
						"source",
						"span",
						"strong",
						"sub",
						"summary",
						"sup",
						"table",
						"tbody",
						"td",
						"template",
						"textarea",
						"tfoot",
						"th",
						"thead",
						"tr",
						"u",
						"ul"
					].map((t) => ({ type: "type", label: t })),
					Ju = /^[\w-]*/,
					Ku = (t) => {
						let { state: e, pos: i } = t,
							n = ka(e).resolveInner(i, -1);
						if ("PropertyName" == n.name)
							return { from: n.from, options: Nu(), validFor: Ju };
						if ("ValueName" == n.name)
							return { from: n.from, options: Hu, validFor: Ju };
						if ("PseudoClassName" == n.name)
							return { from: n.from, options: Lu, validFor: Ju };
						if ("TagName" == n.name) {
							for (let { parent: t } = n; t; t = t.parent)
								if ("Block" == t.name)
									return { from: n.from, options: Nu(), validFor: Ju };
							return { from: n.from, options: Fu, validFor: Ju };
						}
						if (!t.explicit) return null;
						let r = n.resolve(i),
							s = r.childBefore(i);
						return s && ":" == s.name && "PseudoClassSelector" == r.name
							? { from: i, options: Lu, validFor: Ju }
							: (s && ":" == s.name && "Declaration" == r.name) ||
							  "ArgList" == r.name
							? { from: i, options: Hu, validFor: Ju }
							: "Block" == r.name
							? { from: i, options: Nu(), validFor: Ju }
							: null;
					},
					tf = Pa.define({
						name: "css",
						parser: zu.configure({
							props: [Ga.add({ Declaration: Ja() }), tl.add({ Block: el })]
						}),
						languageData: {
							commentTokens: { block: { open: "/*", close: "*/" } },
							indentOnInput: /^\s*\}$/,
							wordChars: "-"
						}
					}),
					ef = {
						area: !0,
						base: !0,
						br: !0,
						col: !0,
						command: !0,
						embed: !0,
						frame: !0,
						hr: !0,
						img: !0,
						input: !0,
						keygen: !0,
						link: !0,
						meta: !0,
						param: !0,
						source: !0,
						track: !0,
						wbr: !0,
						menuitem: !0
					},
					nf = {
						dd: !0,
						li: !0,
						optgroup: !0,
						option: !0,
						p: !0,
						rp: !0,
						rt: !0,
						tbody: !0,
						td: !0,
						tfoot: !0,
						th: !0,
						tr: !0
					},
					rf = {
						dd: { dd: !0, dt: !0 },
						dt: { dd: !0, dt: !0 },
						li: { li: !0 },
						option: { option: !0, optgroup: !0 },
						optgroup: { optgroup: !0 },
						p: {
							address: !0,
							article: !0,
							aside: !0,
							blockquote: !0,
							dir: !0,
							div: !0,
							dl: !0,
							fieldset: !0,
							footer: !0,
							form: !0,
							h1: !0,
							h2: !0,
							h3: !0,
							h4: !0,
							h5: !0,
							h6: !0,
							header: !0,
							hgroup: !0,
							hr: !0,
							menu: !0,
							nav: !0,
							ol: !0,
							p: !0,
							pre: !0,
							section: !0,
							table: !0,
							ul: !0
						},
						rp: { rp: !0, rt: !0 },
						rt: { rp: !0, rt: !0 },
						tbody: { tbody: !0, tfoot: !0 },
						td: { td: !0, th: !0 },
						tfoot: { tbody: !0 },
						th: { td: !0, th: !0 },
						thead: { tbody: !0, tfoot: !0 },
						tr: { tr: !0 }
					};
				function sf(t) {
					return 9 == t || 10 == t || 13 == t || 32 == t;
				}
				let of = null,
					af = null,
					lf = 0;
				function hf(t, e) {
					let i = t.pos + e;
					if (lf == i && af == t) return of;
					let n = t.peek(e);
					for (; sf(n); ) n = t.peek(++e);
					let r = "";
					for (
						;
						45 == (s = n) ||
						46 == s ||
						58 == s ||
						(s >= 65 && s <= 90) ||
						95 == s ||
						(s >= 97 && s <= 122) ||
						s >= 161;

					)
						(r += String.fromCharCode(n)), (n = t.peek(++e));
					var s;
					return (
						(af = t),
						(lf = i),
						(of = r ? r.toLowerCase() : n == cf || n == Of ? void 0 : null)
					);
				}
				const cf = 63,
					Of = 33;
				function uf(t, e) {
					(this.name = t), (this.parent = e), (this.hash = e ? e.hash : 0);
					for (let e = 0; e < t.length; e++)
						this.hash +=
							(this.hash << 4) + t.charCodeAt(e) + (t.charCodeAt(e) << 8);
				}
				const ff = [6, 10, 7, 8, 9],
					df = new tu({
						start: null,
						shift: (t, e, i, n) =>
							ff.indexOf(e) > -1 ? new uf(hf(n, 1) || "", t) : t,
						reduce: (t, e) => (20 == e && t ? t.parent : t),
						reuse(t, e, i, n) {
							let r = e.type.id;
							return 6 == r || 36 == r ? new uf(hf(n, 1) || "", t) : t;
						},
						hash: (t) => (t ? t.hash : 0),
						strict: !1
					}),
					pf = new qO(
						(t, e) => {
							if (60 != t.next)
								return void (t.next < 0 && e.context && t.acceptToken(57));
							t.advance();
							let i = 47 == t.next;
							i && t.advance();
							let n = hf(t, 0);
							if (void 0 === n) return;
							if (!n) return t.acceptToken(i ? 14 : 6);
							let r = e.context ? e.context.name : null;
							if (i) {
								if (n == r) return t.acceptToken(11);
								if (r && nf[r]) return t.acceptToken(57, -2);
								if (e.dialectEnabled(0)) return t.acceptToken(12);
								for (let t = e.context; t; t = t.parent)
									if (t.name == n) return;
								t.acceptToken(13);
							} else {
								if ("script" == n) return t.acceptToken(7);
								if ("style" == n) return t.acceptToken(8);
								if ("textarea" == n) return t.acceptToken(9);
								if (ef.hasOwnProperty(n)) return t.acceptToken(10);
								r && rf[r] && rf[r][n]
									? t.acceptToken(57, -1)
									: t.acceptToken(6);
							}
						},
						{ contextual: !0 }
					),
					gf = new qO((t) => {
						for (let e = 0, i = 0; ; i++) {
							if (t.next < 0) {
								i && t.acceptToken(58);
								break;
							}
							if (45 == t.next) e++;
							else {
								if (62 == t.next && e >= 2) {
									i > 3 && t.acceptToken(58, -2);
									break;
								}
								e = 0;
							}
							t.advance();
						}
					}),
					mf = new qO((t, e) => {
						if (47 == t.next && 62 == t.peek(1)) {
							let i =
								e.dialectEnabled(1) ||
								(function (t) {
									for (; t; t = t.parent)
										if ("svg" == t.name || "math" == t.name) return !0;
									return !1;
								})(e.context);
							t.acceptToken(i ? 5 : 4, 2);
						} else 62 == t.next && t.acceptToken(4, 1);
					});
				function Sf(t, e, i) {
					let n = 2 + t.length;
					return new qO((r) => {
						for (let s = 0, o = 0, a = 0; ; a++) {
							if (r.next < 0) {
								a && r.acceptToken(e);
								break;
							}
							if (
								(0 == s && 60 == r.next) ||
								(1 == s && 47 == r.next) ||
								(s >= 2 && s < n && r.next == t.charCodeAt(s - 2))
							)
								s++, o++;
							else if ((2 != s && s != n) || !sf(r.next)) {
								if (s == n && 62 == r.next) {
									a > o ? r.acceptToken(e, -o) : r.acceptToken(i, -(o - 2));
									break;
								}
								if ((10 == r.next || 13 == r.next) && a) {
									r.acceptToken(e, 1);
									break;
								}
								s = o = 0;
							} else o++;
							r.advance();
						}
					});
				}
				const Qf = Sf("script", 54, 1),
					vf = Sf("style", 55, 2),
					yf = Sf("textarea", 56, 3),
					bf = Jo({
						"Text RawText": Qa.content,
						"StartTag StartCloseTag SelfClosingEndTag EndTag": Qa.angleBracket,
						TagName: Qa.tagName,
						"MismatchedCloseTag/TagName": [Qa.tagName, Qa.invalid],
						AttributeName: Qa.attributeName,
						"AttributeValue UnquotedAttributeValue": Qa.attributeValue,
						Is: Qa.definitionOperator,
						"EntityReference CharacterReference": Qa.character,
						Comment: Qa.blockComment,
						ProcessingInst: Qa.processingInstruction,
						DoctypeDecl: Qa.documentMeta
					}),
					wf = eu.deserialize({
						version: 14,
						states:
							",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%WQ&rO,59fO%`Q&rO,59iO%hQ&rO,59lO%sQ&rO,59nOOOa'#D^'#D^O%{OaO'#CxO&WOaO,59[OOOb'#D_'#D_O&`ObO'#C{O&kObO,59[OOOd'#D`'#D`O&sOdO'#DOO'OOdO,59[OOO`'#Da'#DaO'WO!rO,59[O'_Q#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'dO$fO,59oOOO`,59o,59oO'lQ#|O,59qO'qQ#|O,59rOOO`-E7W-E7WO'vQ&rO'#CsOOQW'#DZ'#DZO(UQ&rO1G.wOOOa1G.w1G.wO(^Q&rO1G/QOOOb1G/Q1G/QO(fQ&rO1G/TOOOd1G/T1G/TO(nQ&rO1G/WOOO`1G/W1G/WOOO`1G/Y1G/YO(yQ&rO1G/YOOOa-E7[-E7[O)RQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)WQ#tO'#C|OOOd-E7^-E7^O)]Q#tO'#DPOOO`-E7_-E7_O)bQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O)gQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rOOO`7+$t7+$tO)rQ#|O,59eO)wQ#|O,59hO)|Q#|O,59kOOO`1G/X1G/XO*RO7[O'#CvO*dOMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O*uO7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+WOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
						stateData:
							"+s~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OhyO~OS!OOhyO~OS!QOhyO~OS!SOT!TOhyO~OS!TOhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXhgXTgX~OS!fOhyO~OS!gOhyO~OS!hOhyO~OS!iOT!jOhyO~OS!jOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
						goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{}!P!R!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ}bQ!PcQ!RdQ!UeZ!e{}!P!R!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
						nodeNames:
							"⚠ StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
						maxTerm: 67,
						context: df,
						nodeProps: [
							[
								"closedBy",
								-10,
								1,
								2,
								3,
								7,
								8,
								9,
								10,
								11,
								12,
								13,
								"EndTag",
								6,
								"EndTag SelfClosingEndTag",
								-4,
								21,
								30,
								33,
								36,
								"CloseTag"
							],
							[
								"openedBy",
								4,
								"StartTag StartCloseTag",
								5,
								"StartTag",
								-4,
								29,
								32,
								35,
								37,
								"OpenTag"
							],
							[
								"group",
								-9,
								14,
								17,
								18,
								19,
								20,
								39,
								40,
								41,
								42,
								"Entity",
								16,
								"Entity TextContent",
								-3,
								28,
								31,
								34,
								"TextContent Entity"
							]
						],
						propSources: [bf],
						skippedNodes: [0],
						repeatNodeCount: 9,
						tokenData:
							"#%g!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs4ysv-_vw5iwxJ^x}-_}!OKP!O!P-_!P!Q$q!Q![-_![!]!!O!]!^-_!^!_!&W!_!`#$o!`!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U-_4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/echSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0uXhSqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0pS1eP;=`<%l0p[1kP;=`<%l/^!U1wbhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!U3SP;=`<%l1n!V3bchS`P!a`!cpOq&Xqr3Vrs&}sv3Vvw0pwx(tx!P3V!P!Q&X!Q!^3V!^!_1n!_!a&X!a#s3V#s$f&X$f;'S3V;'S;=`4m<%l?Ah3V?Ah?BY&X?BY?Mn3V?MnO&X!V4pP;=`<%l3V!_4vP;=`<%l-_!Z5SV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_5rjhSkWc!ROX7dXZ8qZ[7d[^8q^p7dqr:crs8qst@Ttw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^/^!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!Z7ibkWOX7dXZ8qZ[7d[^8q^p7dqr7drs8qst+Ptw7dwx8qx!]7d!]!^9f!^!a8q!a#S7d#S#T8q#T;'S7d;'S;=`:]<%lO7d!R8tVOp8qqs8qt!]8q!]!^9Z!^;'S8q;'S;=`9`<%lO8q!R9`Oa!R!R9cP;=`<%l8q!Z9mYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z:`P;=`<%l7d!_:jjhSkWOX7dXZ8qZ[7d[^8q^p7dqr:crs8qst/^tw:cwx8qx!P:c!P!Q7d!Q!]:c!]!^<[!^!_=p!_!a8q!a#S:c#S#T=p#T#s:c#s$f7d$f;'S:c;'S;=`?}<%l?Ah:c?Ah?BY7d?BY?Mn:c?MnO7d!_<echSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V=udhSOp8qqr=prs8qst0ptw=pwx8qx!P=p!P!Q8q!Q!]=p!]!^?T!^!_=p!_!a8q!a#s=p#s$f8q$f;'S=p;'S;=`?w<%l?Ah=p?Ah?BY8q?BY?Mn=p?MnO8q!V?[XhSa!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!V?zP;=`<%l=p!_@QP;=`<%l:c!_@[ihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^/^!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!ZBOakWOXAyXZCTZ[Ay[^CT^pAyqrAyrsCTswAywxCTx!]Ay!]!^Cu!^!aCT!a#SAy#S#TCT#T;'SAy;'S;=`Dl<%lOAy!RCWUOpCTq!]CT!]!^Cj!^;'SCT;'S;=`Co<%lOCT!RCoOb!R!RCrP;=`<%lCT!ZC|YkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZDoP;=`<%lAy!_DyihSkWOXAyXZCTZ[Ay[^CT^pAyqrDrrsCTswDrwxCTx!PDr!P!QAy!Q!]Dr!]!^Fh!^!_G|!_!aCT!a#SDr#S#TG|#T#sDr#s$fAy$f;'SDr;'S;=`JW<%l?AhDr?Ah?BYAy?BY?MnDr?MnOAy!_FqchSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!^!_0p!a#S/^#S#T0p#T#s/^#s$f+P$f;'S/^;'S;=`1h<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VHRchSOpCTqrG|rsCTswG|wxCTx!PG|!P!QCT!Q!]G|!]!^I^!^!_G|!_!aCT!a#sG|#s$fCT$f;'SG|;'S;=`JQ<%l?AhG|?Ah?BYCT?BY?MnG|?MnOCT!VIeXhSb!Rqr0psw0px!P0p!Q!_0p!a#s0p$f;'S0p;'S;=`1b<%l?Ah0p?BY?Mn0p!VJTP;=`<%lG|!_JZP;=`<%lDr!ZJgW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aK^lhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMU!O!P-_!P!Q$q!Q!^-_!^!_1n!_!a&X!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aMckhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_1n!_!`&X!`!a! W!a#S-_#S#T3V#T#s-_#s$f$q$f;'S-_;'S;=`4s<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!T! cX`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!a!!_!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!O!!O!O!P!!O!P!Q$q!Q![!!O![!]!!O!]!^-_!^!_1n!_!a&X!a!c-_!c!}!!O!}#R-_#R#S!!O#S#T3V#T#o!!O#o#s-_#s$f$q$f$}-_$}%O!!O%O%W-_%W%o!!O%o%p-_%p&a!!O&a&b-_&b1p!!O1p4U!!O4U4d!!O4d4e-_4e$IS!!O$IS$I`-_$I`$Ib!!O$Ib$Je-_$Je$Jg!!O$Jg$Kh-_$Kh%#t!!O%#t&/x-_&/x&Et!!O&Et&FV-_&FV;'S!!O;'S;:j!&Q;:j;=`4s<%l?&r-_?&r?Ah!!O?Ah?BY$q?BY?Mn!!O?MnO$q!a!&TP;=`<%l!!O!V!&achS!a`!cpOq*Vqr!'lrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!b!Ey!b#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!'uhhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!)a!O!P1n!P!Q*V!Q!_1n!_!a*V!a!f1n!f!g!,]!g#W1n#W#X!<y#X#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!)jdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex}1n}!O!*x!O!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!+TbhS!a`!cp!dPOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!,fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!q1n!q!r!-t!r#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!-}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!e1n!e!f!/]!f#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!/fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!v1n!v!w!0t!w#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!0}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!{1n!{!|!2]!|#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!2fdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!r1n!r!s!3t!s#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!3}dhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a!g1n!g!h!5]!h#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!5fchS!a`!cpOq!6qqr!5]rs!7hsv!5]vw!;`wx!9[x!P!5]!P!Q!6q!Q!_!5]!_!`!6q!`!a!:j!a#s!5]#s$f!6q$f;'S!5];'S;=`!<s<%l?Ah!5]?Ah?BY!6q?BY?Mn!5]?MnO!6q!R!6xY!a`!cpOr!6qrs!7hsv!6qvw!8Swx!9[x!`!6q!`!a!:j!a;'S!6q;'S;=`!;Y<%lO!6qq!7mV!cpOv!7hvx!8Sx!`!7h!`!a!8q!a;'S!7h;'S;=`!9U<%lO!7hP!8VTO!`!8S!`!a!8f!a;'S!8S;'S;=`!8k<%lO!8SP!8kO{PP!8nP;=`<%l!8Sq!8xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!9XP;=`<%l!7ha!9aX!a`Or!9[rs!8Ssv!9[vw!8Sw!`!9[!`!a!9|!a;'S!9[;'S;=`!:d<%lO!9[a!:TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!:gP;=`<%l!9[!R!:sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;]P;=`<%l!6qT!;ebhSOq!8Sqr!;`rs!8Ssw!;`wx!8Sx!P!;`!P!Q!8S!Q!_!;`!_!`!8S!`!a!8f!a#s!;`#s$f!8S$f;'S!;`;'S;=`!<m<%l?Ah!;`?Ah?BY!8S?BY?Mn!;`?MnO!8ST!<pP;=`<%l!;`!V!<vP;=`<%l!5]!V!=SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#c1n#c#d!>b#d#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!>kdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#V1n#V#W!?y#W#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!@SdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#h1n#h#i!Ab#i#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!AkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#m1n#m#n!By#n#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!CSdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#d1n#d#e!Db#e#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!DkdhS!a`!cpOq*Vqr1nrs(Vsv1nvw0pwx)ex!P1n!P!Q*V!Q!_1n!_!a*V!a#X1n#X#Y!5]#Y#s1n#s$f*V$f;'S1n;'S;=`3P<%l?Ah1n?Ah?BY*V?BY?Mn1n?MnO*V!V!FSchS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!a!G_!a!b##T!b#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!R!GfY!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!a!G_!a!b!Lv!b;'S!G_;'S;=`!N]<%lO!G_q!HZV!cpOv!HUvx!Hpx!a!HU!a!b!Iq!b;'S!HU;'S;=`!Jp<%lO!HUP!HsTO!a!Hp!a!b!IS!b;'S!Hp;'S;=`!Ik<%lO!HpP!IVTO!`!Hp!`!a!If!a;'S!Hp;'S;=`!Ik<%lO!HpP!IkOxPP!InP;=`<%l!Hpq!IvV!cpOv!HUvx!Hpx!`!HU!`!a!J]!a;'S!HU;'S;=`!Jp<%lO!HUq!JdS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!JsP;=`<%l!HUa!J{X!a`Or!Jvrs!Hpsv!Jvvw!Hpw!a!Jv!a!b!Kh!b;'S!Jv;'S;=`!Lp<%lO!Jva!KmX!a`Or!Jvrs!Hpsv!Jvvw!Hpw!`!Jv!`!a!LY!a;'S!Jv;'S;=`!Lp<%lO!Jva!LaT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!LsP;=`<%l!Jv!R!L}Y!a`!cpOr!G_rs!HUsv!G_vw!Hpwx!Jvx!`!G_!`!a!Mm!a;'S!G_;'S;=`!N]<%lO!G_!R!MvV!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!N`P;=`<%l!G_T!NhbhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!a!Hp!a!b# p!b#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT# ubhSOq!Hpqr!Ncrs!Hpsw!Ncwx!Hpx!P!Nc!P!Q!Hp!Q!_!Nc!_!`!Hp!`!a!If!a#s!Nc#s$f!Hp$f;'S!Nc;'S;=`#!}<%l?Ah!Nc?Ah?BY!Hp?BY?Mn!Nc?MnO!HpT##QP;=`<%l!Nc!V##^chS!a`!cpOq!G_qr!Eyrs!HUsv!Eyvw!Ncwx!Jvx!P!Ey!P!Q!G_!Q!_!Ey!_!`!G_!`!a!Mm!a#s!Ey#s$f!G_$f;'S!Ey;'S;=`#$i<%l?Ah!Ey?Ah?BY!G_?BY?Mn!Ey?MnO!G_!V#$lP;=`<%l!Ey!V#$zXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
						tokenizers: [Qf, vf, yf, mf, pf, gf, 0, 1, 2, 3, 4, 5],
						topRules: { Document: [0, 15] },
						dialects: { noMatch: 0, selfClosing: 485 },
						tokenPrec: 487
					});
				var xf = i(494);
				const $f = {
						key: "Tab",
						run: ({ state: t, dispatch: e }) =>
							t.selection.ranges.some((t) => !t.empty)
								? pc({ state: t, dispatch: e })
								: (e(
										t.update(t.replaceSelection("\t"), {
											scrollIntoView: !0,
											userEvent: "input"
										})
								  ),
								  !0),
						shift: gc
					},
					Pf = [
						{ tag: Qa.definitionKeyword, class: "cm-at-rule" },
						{ tag: Qa.controlKeyword, class: "cm-at-rule" },
						{ tag: Qa.namespace, class: "cm-tag" },
						{ tag: Qa.tagName, class: "cm-tag" },
						{ tag: Qa.className, class: "cm-class-selector" },
						{ tag: [Qa.constant(Qa.className)], class: "cm-pseudo-class" },
						{ tag: Qa.labelName, class: "cm-string-2" },
						{ tag: Qa.propertyName, class: "cm-property" },
						{ tag: Qa.attributeName, class: "cm-tag" },
						{ tag: Qa.number, class: "cm-number" },
						{ tag: Qa.operatorKeyword, class: "cm-keyword" },
						{ tag: Qa.atom, class: "cm-keyword" },
						{ tag: Qa.variableName, class: "cm-variable-2" },
						{ tag: Qa.unit, class: "cm-number" },
						{ tag: Qa.definitionOperator, class: "" },
						{ tag: Qa.keyword, class: "cm-keyword" },
						{ tag: Qa.compareOperator, class: "" },
						{ tag: Qa.logicOperator, class: "cm-keyword" },
						{ tag: Qa.arithmeticOperator, class: "" },
						{ tag: Qa.modifier, class: "cm-property" },
						{ tag: Qa.blockComment, class: "cm-comment" },
						{ tag: Qa.string, class: "cm-string" },
						{ tag: Qa.derefOperator, class: "cm-string-2" },
						{ tag: Qa.separator, class: "" },
						{ tag: Qa.paren, class: "" },
						{ tag: Qa.squareBracket, class: "" },
						{ tag: Qa.brace, class: "" },
						{ tag: Qa.color, class: "cm-atom" }
					],
					kf = [
						{ tag: Qa.content, class: "" },
						{ tag: Qa.angleBracket, class: "cm-bracket" },
						{ tag: Qa.tagName, class: "cm-tag" },
						{ tag: Qa.invalid, class: "tag_invalid" },
						{ tag: Qa.attributeName, class: "cm-attribute" },
						{ tag: Qa.attributeValue, class: "cm-string" },
						{ tag: Qa.definitionOperator, class: "" },
						{ tag: Qa.character, class: "cm-atom" },
						{ tag: Qa.blockComment, class: "cm-comment" },
						{ tag: Qa.processingInstruction, class: "cm-meta" },
						{ tag: Qa.documentMeta, class: "cm-meta" }
					],
					Xf = [
						{ tag: Qa.comment, class: "cm-comment" },
						{ tag: Qa.name, class: "cm-string" },
						{ tag: Qa.tagName, class: "cm-tag" },
						{ tag: Qa.propertyName, class: "cm-property" },
						{ tag: Qa.attributeName, class: "cm-attribute" },
						{ tag: Qa.literal, class: "cm-atom" },
						{ tag: Qa.string, class: "cm-string" },
						{ tag: Qa.number, class: "cm-number" },
						{ tag: Qa.keyword, class: "cm-keyword" },
						{ tag: Qa.operator, class: "cm-operator" },
						{ tag: Qa.angleBracket, class: "cm-bracket" },
						{ tag: Qa.unit, class: "cm-number" },
						{ tag: Qa.atom, class: "cm-keyword" },
						{ tag: Qa.className, class: "" },
						{ tag: Qa.null, class: "cm-atom" },
						{ tag: Qa.variableName, class: "" },
						{ tag: Qa.modifier, class: "cm-property" },
						{ tag: [Qa.special(Qa.string)], class: "cm-string-2" },
						{ tag: Qa.labelName, class: "" }
					],
					Zf = [
						{ tag: Qa.keyword, class: "cm-keyword" },
						{ tag: Qa.typeName, class: "cm-string" },
						{ tag: Qa.number, class: "cm-number" },
						{ tag: Qa.string, class: "cm-string" },
						{ tag: Qa.variableName, class: "cm-variable-2" },
						{ tag: Qa.lineComment, class: "cm-comment" },
						{ tag: Qa.blockComment, class: "cm-comment" },
						{ tag: Qa.paren, class: "" }
					];
				function Tf(t) {
					return bl(Sl.define(t), { fallback: !1 });
				}
				function Cf(t, e, i = void 0) {
					const n = Sl.define(t, { scope: e });
					return i && (n.scope = (t) => t.name === i), bl(n, { fallback: !1 });
				}
				function Af(t) {
					let e;
					return () => (void 0 === e ? ((e = t()), e) : e);
				}
				const Vf = [
						(function (t = {}) {
							return [
								Os.of(t),
								us ||
									(us = $i.fromClass(
										class {
											constructor(t) {
												(this.view = t),
													(this.decorations = Ke.none),
													(this.decorationCache = Object.create(null)),
													(this.decorator = this.makeDecorator(
														t.state.facet(Os)
													)),
													(this.decorations = this.decorator.createDeco(t));
											}
											makeDecorator(t) {
												return new os({
													regexp: t.specialChars,
													decoration: (e, i, n) => {
														let { doc: r } = i.state,
															s = y(e[0], 0);
														if (9 == s) {
															let t = r.lineAt(n),
																e = i.state.tabSize,
																s = Mt(t.text, e, n - t.from);
															return Ke.replace({
																widget: new ds(
																	(e - (s % e)) *
																		this.view.defaultCharacterWidth
																)
															});
														}
														return (
															this.decorationCache[s] ||
															(this.decorationCache[s] = Ke.replace({
																widget: new fs(t, s)
															}))
														);
													},
													boundary: t.replaceTabs ? void 0 : /[^]/
												});
											}
											update(t) {
												let e = t.state.facet(Os);
												t.startState.facet(Os) != e
													? ((this.decorator = this.makeDecorator(e)),
													  (this.decorations = this.decorator.createDeco(
															t.view
													  )))
													: (this.decorations = this.decorator.updateDeco(
															t,
															this.decorations
													  ));
											}
										},
										{ decorations: (t) => t.decorations }
									))
							];
						})(),
						(function (t = {}) {
							return [
								nh,
								ih.of(t),
								Zr.domEventHandlers({
									beforeinput(t, e) {
										let i =
											"historyUndo" == t.inputType
												? sh
												: "historyRedo" == t.inputType
												? oh
												: null;
										return !!i && (t.preventDefault(), i(e));
									}
								})
							];
						})(),
						(function (t = {}) {
							return [Lr.of(t), Fr, Kr, es, Si.of(!0)];
						})(),
						[ns, rs],
						vt.allowMultipleSelections.of(!0),
						vt.transactionFilter.of((t) => {
							if (
								!t.docChanged ||
								(!t.isUserEvent("input.type") &&
									!t.isUserEvent("input.complete"))
							)
								return t;
							let e = t.startState.languageDataAt(
								"indentOnInput",
								t.startState.selection.main.head
							);
							if (!e.length) return t;
							let i = t.newDoc,
								{ head: n } = t.newSelection.main,
								r = i.lineAt(n);
							if (n > r.from + 200) return t;
							let s = i.sliceString(r.from, n);
							if (!e.some((t) => t.test(s))) return t;
							let { state: o } = t,
								a = -1,
								l = [];
							for (let { head: t } of o.selection.ranges) {
								let e = o.doc.lineAt(t);
								if (e.from == a) continue;
								a = e.from;
								let i = Da(o, e.from);
								if (null == i) continue;
								let n = /^\s*/.exec(e.text)[0],
									r = ja(o, i);
								n != r &&
									l.push({ from: e.from, to: e.from + n.length, insert: r });
							}
							return l.length ? [t, { changes: l, sequential: !0 }] : t;
						}),
						(function (t = {}) {
							return [Xl.of(t), Vl];
						})(),
						[Nc, Ec],
						(function (t) {
							let e = (t) => t.altKey && 0 == t.button;
							return Zr.mouseSelectionStyle.of((t, i) =>
								e(i)
									? (function (t, e) {
											let i = gs(t, e),
												n = t.state.selection;
											return i
												? {
														update(t) {
															if (t.docChanged) {
																let e = t.changes.mapPos(
																		t.startState.doc.line(i.line).from
																	),
																	r = t.state.doc.lineAt(e);
																(i = {
																	line: r.number,
																	col: i.col,
																	off: Math.min(i.off, r.length)
																}),
																	(n = n.map(t.changes));
															}
														},
														get(e, r, s) {
															let o = gs(t, e);
															if (!o) return n;
															let a = (function (t, e, i) {
																let n = Math.min(e.line, i.line),
																	r = Math.max(e.line, i.line),
																	s = [];
																if (
																	e.off > ps ||
																	i.off > ps ||
																	e.col < 0 ||
																	i.col < 0
																) {
																	let o = Math.min(e.off, i.off),
																		a = Math.max(e.off, i.off);
																	for (let e = n; e <= r; e++) {
																		let i = t.doc.line(e);
																		i.length <= a &&
																			s.push(W.range(i.from + o, i.to + a));
																	}
																} else {
																	let o = Math.min(e.col, i.col),
																		a = Math.max(e.col, i.col);
																	for (let e = n; e <= r; e++) {
																		let i = t.doc.line(e),
																			n = qt(i.text, o, t.tabSize, !0);
																		if (n < 0) s.push(W.cursor(i.to));
																		else {
																			let e = qt(i.text, a, t.tabSize);
																			s.push(W.range(i.from + n, i.from + e));
																		}
																	}
																}
																return s;
															})(t.state, i, o);
															return a.length
																? s
																	? W.create(a.concat(n.ranges))
																	: W.create(a)
																: n;
														}
												  }
												: null;
									  })(t, i)
									: null
							);
						})(),
						(function (t = {}) {
							let [e, i] = ms[t.key || "Alt"],
								n = $i.fromClass(
									class {
										constructor(t) {
											(this.view = t), (this.isDown = !1);
										}
										set(t) {
											this.isDown != t &&
												((this.isDown = t), this.view.update([]));
										}
									},
									{
										eventHandlers: {
											keydown(t) {
												this.set(t.keyCode == e || i(t));
											},
											keyup(t) {
												(t.keyCode != e && i(t)) || this.set(!1);
											},
											mousemove(t) {
												this.set(i(t));
											}
										}
									}
								);
							return [
								n,
								Zr.contentAttributes.of((t) => {
									var e;
									return (
										null === (e = t.plugin(n)) || void 0 === e
											? void 0
											: e.isDown
									)
										? Ss
										: null;
								})
							];
						})(),
						_r.of([...Lc, ...mc, ...vh, ...fl, ...SO, $f]),
						Zr.domEventHandlers({ input: () => (0, xf.j)("input", !0) })
					],
					Wf = Af(() => ({ extensions: [Tu(), Tf(Xf)] })),
					Yf = Af(() => ({
						extensions: [new _a(tf, tf.data.of({ autocomplete: Ku })), Tf(Pf)]
					})),
					Rf = Af(() => ({
						extensions: [new _a(Ru), Zr.lineWrapping, Tf(Zf)]
					})),
					_f = Af(() => {
						const t = (function () {
							const t = wf.configure({
								wrap:
									((e = (t) =>
										"ScriptText" == t.name
											? { parser: fu }
											: "StyleText" == t.name
											? { parser: zu }
											: null),
									(t, i, n, r) => new qo(t, e, i, n, r))
							});
							var e;
							return Pa.define({ parser: t });
						})();
						return {
							extensions: [
								t,
								Zr.lineWrapping,
								Cf(Pf, tf, "StyleSheet"),
								Cf(Xf, xu, "Script"),
								Cf(kf, t)
							]
						};
					});
				function Mf(t, e, i, n = { lineNumbers: !0 }) {
					const r = [...Vf, ...i.extensions];
					return (
						n.lineNumbers &&
							r.push(
								(function (t = {}) {
									return [Ks.of(t), Is(), io];
								})(),
								(function (t) {
									return [Is(), Es.of(Object.assign(Object.assign({}, Ds), t))];
								})()
							),
						new Zr({ doc: e, extensions: r, parent: t })
					);
				}
				function qf(t) {
					return t.state.doc.toString();
				}
			},
			337: (t, e, i) => {
				"use strict";
				let n;
				function r(t, e, i, r) {
					const s = i || document.getElementById("example-element"),
						a = o(s, (t = t.replace(/(\/\*)[\s\S]+(\*\/)/g, "")));
					function l() {
						a ? e.classList.remove("invalid") : e.classList.add("invalid");
					}
					(s.style.cssText = t),
						clearTimeout(n),
						r ? l() : (n = setTimeout(l, 500));
				}
				function s(t) {
					const e = document.createElement("div");
					return t.some(o.bind(null, e));
				}
				function o(t, e) {
					const i = /^-(?:webkit|moz|ms|o)-/,
						n = t.style,
						r = e
							.split(";")
							.map((t) => t.trim())
							.filter((t) => t.length > 0);
					function s(t) {
						return i.test(t);
					}
					function o(t) {
						const e = i.exec(t),
							n = null === e ? "" : e[0];
						return (null === n ? t : t.slice(n.length)).split(/[\s:]/)[0];
					}
					n.cssText = "";
					const a = new Set(),
						l = new Set();
					for (let t of r) {
						const e = n.cssText;
						n.cssText += t + ";";
						const i = n.cssText !== e,
							r = s(t),
							h = o(t);
						i && r ? a.add(h) : i || r || l.add(h);
					}
					if (0 !== l.size) {
						for (const t of a) l.delete(t);
						if (0 !== l.size) return !1;
					}
					return !0;
				}
				function a(t) {
					for (const e of t)
						r(e.querySelector(".cm-content").textContent, e, void 0, !0);
				}
				function l(t) {
					t.classList.add("selected"),
						r(t.querySelector(".cm-content").textContent, t);
				}
				function h() {
					const t = document.getElementById("default-example"),
						e = document.getElementById("output");
					if (t.classList.contains("hidden")) {
						const i = e.querySelectorAll("section");
						for (let t = 0, e = i.length; t < e; t++)
							i[t].classList.add("hidden"),
								i[t].setAttribute("aria-hidden", !0);
						t.classList.remove("hidden"), t.setAttribute("aria-hidden", !1);
					}
					!(function () {
						const t = document
							.getElementById("example-choice-list")
							.querySelectorAll(".example-choice");
						for (let e = 0, i = t.length; e < i; e++)
							t[e].classList.remove("selected");
					})();
				}
				i.d(e, {
					EA: () => s,
					RN: () => l,
					fZ: () => r,
					vU: () => h,
					xY: () => a
				});
			},
			557: (t, e, i) => {
				"use strict";
				i.d(e, { LT: () => O, fe: () => h, oB: () => a, z2: () => u });
				var n = i(853),
					r = i(337),
					s = i(494),
					o = i(566);
				function a(t) {
					t.addEventListener("keyup", (t) => {
						const e = t.target.parentElement;
						r.fZ(e.textContent, e.closest(".example-choice"));
					});
					const e = t.querySelectorAll(".example-choice");
					Array.from(e).forEach((t) => {
						t.addEventListener("click", c);
					});
				}
				function l() {
					h("height", { height: document.body.scrollHeight });
				}
				function h(t, e) {
					parent?.postMessage(
						{ type: t, url: window.location.href, ...e },
						"*"
					);
				}
				function c() {
					O(this);
				}
				function O(t) {
					document.querySelector(".selected") &&
						!t.classList.contains("selected") &&
						r.vU(),
						r.RN(t),
						n.y(t);
				}
				function u() {
					window.addEventListener(
						"message",
						(t) => {
							if (void 0 !== t.data.theme) {
								const e = document.querySelector("body");
								for (let t = e.classList.length - 1; t >= 0; t--) {
									const i = e.classList[t];
									i.startsWith("theme-") && e.classList.remove(i);
								}
								e.classList.add("theme-" + t.data.theme),
									(0, o.H)("theme", t.data.theme);
							}
						},
						!1
					),
						"loading" !== document.readyState
							? l()
							: document.addEventListener("DOMContentLoaded", l),
						(0, s.u)();
				}
				document.addEventListener("DOMContentLoaded", () => {
					const t = (0, o.q)("theme");
					null !== t &&
						document.querySelector("body").classList.add("theme-" + t);
				});
			},
			935: (t, e, i) => {
				"use strict";
				function n(t) {
					let e = t.parentElement,
						i = e.classList;
					for (; e && !i.contains("example-choice"); )
						(e = e.parentElement), (i = e.classList);
					return e;
				}
				function r(t) {
					t.forEach((t) => {
						t.addEventListener("click", (e) => {
							e.preventDefault(), window.open(t.href);
						});
					});
				}
				function s(t, e, i) {
					i.forEach((i) => {
						i.addEventListener("click", (n) => {
							n.preventDefault();
							let r = e.querySelector(i.hash);
							r && (r.scrollIntoView(), (t.location.hash = i.hash));
						});
					});
				}
				i.d(e, { ju: () => n, mc: () => s, n5: () => r });
			},
			494: (t, e, i) => {
				"use strict";
				i.d(e, { j: () => l, u: () => h });
				var n = i(557),
					r = i(566);
				const s = "action-counts";
				let o = {},
					a = null;
				function l(t, e = !1) {
					if (e && t === a) return;
					var i;
					(a = t),
						(o[t] = (o[t] ?? 0) + 1),
						(i = o),
						(0, r.H)(
							s,
							JSON.stringify({ href: window.location.href, counts: i })
						);
					const l = `${t} -> ${o[t]}`;
					(0, n.fe)("action", { source: l });
				}
				function h() {
					(o = (function () {
						const t = (0, r.q)(s);
						if (!t) return {};
						const e = JSON.parse(t);
						return e && e.href === window.location.href && e.counts
							? e.counts
							: {};
					})()),
						(a = null),
						document.addEventListener("DOMContentLoaded", () => {
							window.addEventListener("focus", () => l("focus")),
								window.addEventListener("copy", () => l("copy")),
								window.addEventListener("cut", () => l("cut")),
								window.addEventListener("paste", () => l("paste")),
								window.addEventListener("click", (t) => {
									const e = t.target.id;
									e && l(`click@${e}`);
								});
						});
				}
			},
			566: (t, e, i) => {
				"use strict";
				function n(t, e) {
					try {
						localStorage.setItem(t, e);
					} catch (e) {
						console.warn(`Unable to write ${t} to localStorage`, e);
					}
				}
				function r(t) {
					try {
						return localStorage.getItem(t);
					} catch (e) {
						return (
							console.warn(`Unable to read ${t} from localStorage`, e), null
						);
					}
				}
				i.d(e, { H: () => n, q: () => r });
			}
		},
		i = {};
	function n(t) {
		var r = i[t];
		if (void 0 !== r) return r.exports;
		var s = (i[t] = { exports: {} });
		return e[t].call(s.exports, s, s.exports, n), s.exports;
	}
	(n.m = e),
		(t = []),
		(n.O = (e, i, r, s) => {
			if (!i) {
				var o = 1 / 0;
				for (c = 0; c < t.length; c++) {
					for (var [i, r, s] = t[c], a = !0, l = 0; l < i.length; l++)
						(!1 & s || o >= s) && Object.keys(n.O).every((t) => n.O[t](i[l]))
							? i.splice(l--, 1)
							: ((a = !1), s < o && (o = s));
					if (a) {
						t.splice(c--, 1);
						var h = r();
						void 0 !== h && (e = h);
					}
				}
				return e;
			}
			s = s || 0;
			for (var c = t.length; c > 0 && t[c - 1][2] > s; c--) t[c] = t[c - 1];
			t[c] = [i, r, s];
		}),
		(n.d = (t, e) => {
			for (var i in e)
				n.o(e, i) &&
					!n.o(t, i) &&
					Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
		}),
		(n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
		(() => {
			var t = { 528: 0 };
			n.O.j = (e) => 0 === t[e];
			var e = (e, i) => {
					var r,
						s,
						[o, a, l] = i,
						h = 0;
					if (o.some((e) => 0 !== t[e])) {
						for (r in a) n.o(a, r) && (n.m[r] = a[r]);
						if (l) var c = l(n);
					}
					for (e && e(i); h < o.length; h++)
						(s = o[h]), n.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
					return n.O(c);
				},
				i = (self.webpackChunkinteractive_examples =
					self.webpackChunkinteractive_examples || []);
			i.forEach(e.bind(null, 0)), (i.push = e.bind(null, i.push.bind(i)));
		})();
	var r = n(117);
	r = n.O(r);
})();
