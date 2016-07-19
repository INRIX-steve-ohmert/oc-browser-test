window.Specs = {
	"css-display": {
		"title": "Display and Position Properties",
		"properties": {
			"display": ["table", "inline-table", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group",
						"table-row", "table-row-group", "table-caption"],
			"position": ["static", "relative", "absolute", "fixed"],
			"min-width": ["3.5em", "10%", "max-content", "min-content", "fit-content", "inherit", "initial"],
			"min-height": ["120px", "20em", "25%"],
			"max-width": ["600px", "80em", "75%"],
			"max-height": ["3.5em", "10%", "max-content", "min-content", "fit-content", "inherit", "initial"],
		}
	},

	"css3-background": {
		"title": "Backgrounds and Borders Level 3",
		"properties": {
			"background-repeat": ["space", "round"].concat(["repeat", "space", "round", "no-repeat"].times(2)),
			"background-attachment": "local",
			"background-position": ["bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"background-clip": ["border-box", "padding-box", "content-box"],
			"background-size": ["auto", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"background": [
				"url(foo.png), url(bar.svg)",
				"top left / 50% 60%",
				"border-box",
				"border-box padding-box",
				"url(foo.png) bottom right / cover padding-box content-box"
			],
			"border-radius": ["10px", "50%", "10px / 20px", "2px 4px 8px 16px"],
			"border-image-source": ["none", "url(foo.png)"],
			"border-image-slice": ["10", "30%"].times(1, 4).concat(["fill 30%", "fill 10", "fill 2 4 8% 16%", "30% fill", "10 fill", "2 4 8% 16% fill"]),
			"border-image-width": ["10px", "5%", "28", "auto", "10px 10px", "5% 10px", "28 10px", "auto 10px", "10px 5%", "5% 5%", "28 5%", "auto 5%", "10px 28", "5% 28", "28 28", "auto 28", "10px auto", "5% auto", "28 auto", "auto auto", "10px 10% 10", "5% 10px 20 auto"],
			"border-image-outset": ["10px", "20", "10px 20", "10px 20px", "20 30", "2px 3px 4", "1 2px 3px 4"],
			"border-image-repeat": ["stretch", "repeat", "round", "space"].times(1, 2),
			"border-image": [
				"url(foo.png) 10", "url(foo.png) 10%", "url(foo.png) 10% fill",
				"url(foo.png) 10 round", "url(foo.png) 10 stretch repeat",
				"url(foo.png) 10 / 10px", "url(foo.png) 10 / 10% / 10px",
				"url(foo.png) fill 10 / 10% / 10px", "url(foo.png) fill 10 / 10% / 10px space"
			],
			"box-shadow": [
				"1px 1px", "0 0 black", "1px 2px 3px black", "1px 2px 3px 4px black",
				"inset 1px 1px", "1px 2px 3px 4px black inset"
			],
			"outline": ["1px solid white", "inherit", "initial"]
		}
	},

	"css-backgrounds-4": {
		"title": "Backgrounds and Borders Level 4",
		"properties": {
			"background-position-x": ["right", "center", "50%", "left, left", "left, right", "right, left", "left, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "left, left, left, left, left", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)"],
			"background-position-y": ["bottom", "center", "50%", "top, top", "top, bottom", "bottom, top", "top, 0%", "10%, 20%, 40%", "0px", "30px", "0%, 10%, 20%, 30%", "top, top, top, top, top", "calc(20px)", "calc(20px + 1em)", "calc(20px / 2)", "calc(20px + 50%)", "calc(50% - 10px)", "calc(-20px)", "calc(-50%)", "calc(-20%)"]
		}
	},

	"css3-images": {
		"title": "Image Values and Replaced Content",
		"values": {
			"properties": [
				"background-image",
				"list-style-image",
				"border-image",
				"content"
			],
			"linear-gradient": [
				"linear-gradient(white, black)",
				"linear-gradient(to right, white, black)",
				"linear-gradient(45deg, white, black)",
				"linear-gradient(white 50%, black)",
				"linear-gradient(white 5px, black)",
				"linear-gradient(white, #f06, black)",
				"linear-gradient(currentColor, black)"
			],
			"radial-gradient": [
				"radial-gradient(white, black)",
				"radial-gradient(circle, white, black)",
				"radial-gradient(ellipse, white, black)",
				"radial-gradient(closest-corner, white, black)",
				"radial-gradient(circle closest-corner, white, black)",
				"radial-gradient(farthest-side, white, black)",
				"radial-gradient(circle farthest-side, white, black)",
				"radial-gradient(50%, white, black)",
				"radial-gradient(60% 60%, white, black)"/*,
				"radial-gradient(at 60% 60%, white, black)",
				"radial-gradient(30% 30% at 20% 20%, white, black)",
				"radial-gradient(5em circle at top left, yellow, blue)",
				"radial-gradient(circle farthest-side at top left, white, black)"*/
			],
			"repeating-linear-gradient": "repeating-linear-gradient(white, black)",
			"repeating-radial-gradient": "repeating-radial-gradient(white, black)"
		},
		"properties": {
			"object-fit": ["fill", "contain", "cover", "none", "scale-down"],
			"object-position": ["50% 50%", "center", "top right", "bottom 10px right 20px"],
		}
	},

	"css3-selectors": {
		"title": "Selectors Level 3",
		"selectors": {
			"::before": "::before",
			"::after": "::after",
			"::first-letter": "::first-letter",
			"::first-line": "::first-line",
			"Namespaces": ["*|html", "[*|attr]", "[*|attr=val]", "*|html[*|attr]"],
			":target": ":target",
			":enabled": ":enabled",
			":disabled": ":disabled",
			":checked": ":checked",
			":root": ":root",
			":nth-child": [
				":nth-child(even)", ":nth-child(odd)",
				":nth-child(n)", ":nth-child(-n)", ":nth-child(0n)",
				":nth-child(1)", ":nth-child(-1)", ":nth-child(0)",
				":nth-child(n+1)",":nth-child(3n+1)", ":nth-child(3n + 1)",
				":nth-child(-n+1)", ":nth-child(-n-1)", ":nth-child(3n-1)"
			],
			":nth-last-child": [
				":nth-last-child(even)", ":nth-last-child(odd)",
				":nth-last-child(n)", ":nth-last-child(-n)", ":nth-last-child(0n)",
				":nth-last-child(1)", ":nth-last-child(-1)", ":nth-last-child(0)",
				":nth-last-child(n+1)",":nth-last-child(3n+1)", ":nth-last-child(3n + 1)",
				":nth-last-child(-n+1)", ":nth-last-child(-n-1)", ":nth-last-child(3n-1)"
			],
			":nth-of-type": [
				":nth-of-type(even)", ":nth-of-type(odd)",
				":nth-of-type(n)", ":nth-of-type(-n)", ":nth-of-type(0n)",
				":nth-of-type(1)", ":nth-of-type(-1)", ":nth-of-type(0)",
				":nth-of-type(n+1)",":nth-of-type(3n+1)", ":nth-of-type(3n + 1)",
				":nth-of-type(-n+1)", ":nth-of-type(-n-1)", ":nth-of-type(3n-1)"
			],
			":nth-last-of-type": [
				":nth-last-of-type(even)", ":nth-last-of-type(odd)",
				":nth-last-of-type(n)", ":nth-last-of-type(-n)", ":nth-last-of-type(0n)",
				":nth-last-of-type(1)", ":nth-last-of-type(-1)", ":nth-last-of-type(0)",
				":nth-last-of-type(n+1)",":nth-last-of-type(3n+1)", ":nth-last-of-type(3n + 1)",
				":nth-last-of-type(-n+1)", ":nth-last-of-type(-n-1)", ":nth-last-of-type(3n-1)"
			],
			":last-child": ":last-child",
			":only-child": ":only-child",
			":first-of-type": ":first-of-type",
			":last-of-type": ":last-of-type",
			":only-of-type": ":only-of-type",
			":empty": ":empty",
		}
	},

	"css3-ui": {
		"title": "Basic User Interface",
		"properties": {
			"box-sizing": ["border-box", "content-box"],
			"text-overflow": ["ellipsis"],
		},
		"selectors": {
			":default": ":default",
			":required": ":required",
			":optional": ":optional",
		}
	},

	"css3-transitions": {
		"title": "Transitions",
		"properties": {
			"transition-property": ["none", "all", "width", "width, height"],
			"transition-duration": ["0s", "1s", "100ms"],
			"transition-timing-function": [
				"ease", "linear", "ease-in", "ease-out", "ease-in-out",
				"cubic-bezier(.5, .5, .5, .5)",
				"cubic-bezier(.5, 1.5, .5, -2.5)",
				"step-start", "step-end", "steps(3, start)", "steps(5, end)"
			],
			"transition-delay": ["1s", "-1s"],
			"transition": "1s 2s width linear"
		}
	},

	"css3-animations": {
		"title": "Animations",
		"properties": {
			"animation-name": ["foo", "foo, bar"],
			"animation-duration": ["0s", "1s", "100ms"],
			"animation-timing-function": [
				"ease", "linear", "ease-in", "ease-out", "ease-in-out",
				"cubic-bezier(.5, .5, .5, .5)",
				"cubic-bezier(.5, 1.5, .5, -2.5)",
				"step-start", "step-end", "steps(3, start)", "steps(5, end)"
			],
			"animation-iteration-count": ["infinite", "8", "4.35"],
			"animation-direction": ["normal", "alternate", "reverse", "alternate-reverse"],
			"animation-play-state": ["running", "paused"],
			"animation-delay": ["1s", "-1s"],
			"animation-fill-mode": ["none", "forwards", "backwards", "both"],
			"animation": "foo 1s 2s infinite linear alternate both"
		},
		"@rules": {
			"@keyframes": "@keyframes foo"
		}
	},

	"css3-transforms": {
		"title": "Transforms",
		"properties": {
			"transform": [
				"none",
				"translate(5px)", "translate(5px, 10px)", "translateY(5px)", "translateX(5px)", "translateY(5%)", "translateX(5%)",
				"scale(2)", "scale(2, -1)", "scaleX(2)", "scaleY(2.5)",
				"rotate(45deg)",
				"skew(45deg)", "skew(45deg, 15deg)", "skewX(45deg)", "skewY(45deg)",
				"matrix(1,-.2,0,1,0,0)", "matrix(1,-.2,0,1,10,10)",
				"translate(50px, -24px) rotate(180deg) scale(.5) skew(0, 22.5deg)",
				"translate3d(0, 0, 5px)", "translateZ(5px)",
				"scale3d(1, 0, -1)", "scaleZ(1.5)",
				"rotate3d(1, 1, 1, 45deg)", "rotateX(-45deg)", "rotateY(-45deg)", "rotateZ(-45deg)",
				"matrix3d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)", "matrix3d(0,0,0,0,0,0,0,0,0,0,1,0,10,10,0,1)",
				"translate3d(50px, -24px, 5px) rotate3d(1, 2, 3, 180deg) scale3d(-1, 0, .5)",
				"perspective(600px)"
			],
			"transform-origin": ["10px", "top", "top left", "50% 100%", "left 0%", "left 50% 0"],
			"transform-style": ["flat", "preserve-3d"],
			"perspective": ["none", "600px"],
			"perspective-origin": ["10px", "top", "top left", "50% 100%", "left 0%"],
			"backface-visibility": ["visible", "hidden"],
		}
	},

	"css-text-3": {
		"title": "Text Level 3",
		"properties": {
			"tab-size": ["4", "1em"],
			"word-break": ["normal", "keep-all", "break-all"],
			"word-wrap": ["normal", "break-word"]
		}
	},

	"css-text-decor-3": {
		"title": "Text Decoration",
		"properties": {
			"text-shadow": ["none", "1px 1px", "0 0 black", "1px 2px 3px black"],
			"letter-spacing": ["0.3em", "3px", "normal", "inherit", "initial", "unset"]
		}
	},

	"css3-fonts": {
		"title": "Fonts",
		"properties": {
			"font-kerning": ["auto", "normal", "none"],
			"font-feature-settings": ["normal", "'c2sc'", "'smcp' on", "'liga' off", "'smcp', 'swsh' 2"],
		},
	},

	"css-color-3": {
		"title": "Color Level 3",
		"values": {
			"properties": [
				"color",
				"background-color",
				"border-color",
				"text-decoration-color",
				"column-rule-color"
			],
			"rgba": "rgba(0,0,0,.5)",
			"hsl": "hsl(0,0%,0%)",
			"hsla": "hsla(0,0%,0%,.5)",
			"transparent": "transparent",
			"currentColor": "currentColor"
		},
		"properties": {
			"opacity": ["-5", "0", ".5", "1", "2"]
		}
	},

	"css3-multicol": {
		"title": "Multi-column Layout",
		"properties": {
			"column-width": ["10em", "auto"],
			"column-count": ["2", "auto"],
			"columns": ["100px", "3", "10em 2", "auto 2", "10em auto", "auto auto", "2 10em", "auto 10em", "2 auto"],
			"column-gap": ["1em", "normal"],
			"column-rule-color": "red",
			"column-rule-style": ["none", "solid", "dotted"],
			"column-rule-width": "1px",
			"column-rule": ["transparent", "1px solid black"],
			"column-span": ["none", "all"],
			"column-fill": ["auto", "balance"]
		}
	},

	"css3-values": {
		"title": "Values and Units",
		"values": {
			"properties": [
				"width",
				"padding"
			],
			"rem": "5rem",
			"attr()": ["attr(data-px)", "attr(data-px px)", "attr(data-px px, initial)"],
			"calc()": ["calc(1px + 2px)", "calc(5px*2)", "calc(5px/2)", "calc(100%/3 - 2*1em - 2*1px)", "calc(attr(data-px)*2)", "calc(5px - 10px)", "calc(1vw - 1px)",
			"calc(calc(100%))"],
		}
	},

	"css3-flexbox": {
		"title": "Flexible Box Layout",
		"properties": {
			"align-content": ["flex-start", "flex-end", "space-between", "space-around"],
			"align-items": ["flex-start", "flex-end"],
			"align-self": ["flex-start", "flex-end"],
			"display": ["flex", "inline-flex"],
			"flex": ["none", "5 7 10%"],
			"flex-basis": ["auto", "1px"],
			"flex-direction": ["row","row-reverse","column","column-reverse"],
			"flex-flow": ["row", "row-reverse", "column", "column-reverse", "wrap", "wrap-reverse"],
			"flex-grow": ["0","5"],
			"flex-shrink": ["1","10"],
			"flex-wrap": ["nowrap", "wrap", "wrap-reverse"],
			"justify-content": ["flex-start", "flex-end", "space-between", "space-around"],
			"min-height": ["auto"],
			"min-width": ["auto"],
			"order": ["0", "1"]
		}
	},

	"css-masking": {
		"title": "Masking",
		"properties": {
			"clip-path": ["url('#clip')", "inset(50%)", "circle()", "ellipse()", "polygon(0 10px, 30px 0)", "circle() border-box", "border-box", "padding-box", "content-box", "margin-box", "fill-box", "stroke-box", "view-box", "none"],
			"clip-rule": ["nonzero", "evenodd"],
			"mask-image": ["none", "linear-gradient(black 0%, transparent 100%)", "url(image.png)"],
			"mask-mode": ["alpha", "luminance", "auto"],
			"mask-repeat": ["repeat-x", "repeat-y"].concat(["repeat", "space", "round", "no-repeat"].times(1, 2)),
			"mask-position": ["center", "left 50%", "bottom 10px right 20px", "bottom 10px right", "top right 10px"],
			"mask-clip": ["border-box", "padding-box", "content-box", "margin-box", "fill", "stroke", "view-box", "no-clip"],
			"mask-origin": ["border-box", "padding-box", "content-box", "margin-box", "fill", "stroke", "view-box"],
			"mask-size": ["auto", "10px", "cover", "contain", "10px", "50%", "10px auto", "auto 10%", "50em 50%"],
			"mask-composite": ["add", "subtract", "intersect", "exclude"],
			"mask": ["top", "space", "url(image.png')", "url(image.png') luminance", "url(image.png') luminance top space"],
			"mask-border-source": ["none", "url(image.png)"],
			"mask-border-slice": ["0 fill", "50% fill", "1.1 fill", "0 1 fill", "0 1 2 fill", "0 1 2 3 fill"],
			"mask-border-width": ["auto", "10px", "50%", "1", "1.0", "auto 1", "auto 1 50%", "auto 1 50% 1.1"],
			"mask-border-outset": ["0", "1.1", "0 1", "0 1 2", "0 1 2 3"],
			"mask-border-repeat": ["stretch", "repeat", "round", "space"].times(1,2),
			"mask-border": ["url(image.png)", "url(image.png) 10px", "url(image.png) space", "url(image.png) 1 fill", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px", "url(image.png) 1 fill 10px 2"],
			"mask-type": ["luminance", "alpha"]
		}
	},

	"pointerevents": {
		"title": "Pointer Events",
		"properties": {
			"touch-action": ["auto", "none", "pan-x", "pan-y", "pan-x pan-y", "manipulation"]
		}
	},

	"css-will-change": {
		"title": "Will Change",
		"properties": {
			"will-change": ["scroll-position", "contents", "transform", "top, left"]
		}
	}
};
