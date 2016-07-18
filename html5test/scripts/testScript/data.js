

var tests = [

	{
		id:		'semantics',
		name:	'Semantics',
		items:	[
					{
						id:		'parsing',
						name:	'Parsing rules',
						required: true,
						status:	'stable',
						items:	[
									{
										id:		'doctype',
										name: 	'<code>&lt;!DOCTYPE html&gt;</code> triggers standards mode',
										li: 	3,
										required: true,
										urls:   [
													[ 'w3c', 'http://www.w3.org/TR/html5/syntax.html#the-doctype' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/syntax.html#the-doctype' ]
												]
									}, {
										id:		'tokenizer',
										name: 	'HTML5 tokenizer',
										li: 	3,
										required: true,
										value:	3,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/syntax.html#parsing' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/syntax.html#parsing' ],
													[ 'mdn', '/Web/Guide/HTML/HTML5/HTML5_Parser' ]
												]
									}, {
										id:		'tree',
										name: 	'HTML5 tree building',
										li:		3,
										required: true,
										value:	2,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/syntax.html#parsing' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/syntax.html#parsing' ],
													[ 'mdn', '/Web/Guide/HTML/HTML5/HTML5_Parser' ]
												]
									},
									{
										id:		'svg',
										name: 	'Parsing inline SVG',
										li: 	48,
										required: true,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/embedded-content-0.html#svg' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/embedded-content.html#svg-0' ],
													[ 'mdn', '/Web/SVG' ]
												]

									}
								]
					}, {
						id:		'elements',
						name:	'Elements',
						status:	'stable',
						items:	[
									{
										id:		'dataset',
										name: 	'Embedding custom non-visible data',
										li: 	41,
										required: true,
										value:	2,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes' ],
													[ 'mdn', '/Web/API/HTMLElement/dataset' ]
												]
									},

									'<strong>New or modified elements</strong>',

									{
										id:		'section',
										name:	'Section elements',
										urls:	[
													[ 'mdn', '/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document' ]
												],
										items:	[
													{
														id:		'section',
														name: 	'<code>section</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-section-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-section-element' ]
																]
													}, {
														id:		'nav',
														name: 	'<code>nav</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-nav-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-nav-element' ]
																]
													}, {
														id:		'article',
														name: 	'<code>article</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-article-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-article-element' ]
																]
													}, {
														id:		'aside',
														name: 	'<code>aside</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-aside-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-aside-element' ]
																]
													}, {
														id:		'header',
														name: 	'<code>header</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-header-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-header-element' ]
																]
													}, {
														id:		'footer',
														name: 	'<code>footer</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-footer-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-footer-element' ]
																]
													}
												]

									}, {
										id:		'grouping',
										name:	'Grouping content elements',
										urls:	[
													[ 'mdn', '/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document' ]
												],
										items:	[
													{
														id:		'main',
														name: 	'<code>main</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/html/wg/drafts/html/master/single-page.html#the-main-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-main-element' ]
																]
													}, {
														id:		'figure',
														name: 	'<code>figure</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/grouping-content.html#the-figure-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-figure-element' ]
																]
													}, {
														id:		'figcaption',
														name: 	'<code>figcaption</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/grouping-content.html#the-figcaption-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-figcaption-element' ]
																]
													}, {
														id:		'ol',
														name: 	'<code>reversed</code> attribute on the <code>ol</code> element',
														li:		16,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/grouping-content.html#the-ol-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-ol-element' ]
																]
													}
												]
									}, {
										id:		'semantic',
										name:	'Text-level semantic elements',
										items:	[
													{
														id:		'download',
														name: 	'<code>download</code> attribute on the <code>a</code> element',
														li: 	33,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-a-element' ],
																	[ 'whatwg', 'http://developers.whatwg.org/links.html#attr-hyperlink-download' ]
																]
													}, {
														id:		'mark',
														name: 	'<code>mark</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-mark-element' ]
																]
													}, {
														id:		'time',
														name: 	'<code>time</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-time-element' ]
																]
													}, {
														id:		'data',
														name: 	'<code>data</code> element',
														li:		56,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-data-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-data-element' ]
																]
													}, {
														id:		'wbr',
														name: 	'<code>wbr</code> element',
														li: 	15,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-wbr-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-wbr-element' ]
																]
													}
												]
									}, {
										id:		'interactive',
										name:	'Interactive elements',
										items:	[
													{
														id:		'dialog',
														name: 	'<code>dialog</code> element',
														li: 	338,
														status:	'proposal',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/html/wg/drafts/html/master/single-page.html#the-dialog-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/forms.html#the-dialog-element' ]
																]
													}
												]
									},

									'<strong>Global attributes or methods</strong>',
									{
										id: 	'customEv',
										name: 	'Custom Event',
										li: 289,
										required: true,
										value: 	2,
										urls: 	[
													['whatwg', 'https://dom.spec.whatwg.org/#interface-customevent']
												]
									},
									{
										id: 	'text',
										name: 	'Node.textContent',
										li: 	290,
										required: true,
										value: 	2,
										urls: 	[
													['whatwg', 'https://dom.spec.whatwg.org/#dom-node-textcontent']
												]
									},
									{
										id: 	'eventListener',
										name: 	'addEventListener method',
										li: 	294,
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener']
												]
									},
									{
										id: 	'matches',
										name: 	'matches method',
										li: 	346,
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-element-matches']
												]
									},
									{
										id: 	'classList',
										name: 	'classList method',
										li: 	348,
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-element-classlist']
												]
									},
									{
										id: 	'className',
										name: 	'getElementsByClassName method',
										li: 	350,
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname']
												]
									},
									{
										id: 	'relList',
										name: 	'relList method',
										li: 	339,
										value: 	1,
										urls: 	[
													['whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#dom-a-rellist']
												]
									},
									{
										id: 	'rect',
										name: 	'getBoundingClientRect method',
										li: 	224,
										required: true,
										value: 	2,
										urls: 	[
													['w3c', 'https://www.w3.org/TR/cssom-view-1/#dom-element-getboundingclientrect']
												]
									},
									{
										id:		'dynamic',
										name:	'Dynamic markup insertion',
										required: true,
										items:	[
													{
														id:		'outerHTML',
														name: 	'<code>outerHTML</code> property',
														li: 	324,
														required: true,
														value:	1,
														urls:	[
																	[ 'w3c', 'https://dvcs.w3.org/hg/innerhtml/raw-file/tip/index.html#widl-Element-outerHTML' ]
																]
													}, {
														id:		'insertAdjacentHTML',
														name: 	'<code>insertAdjacentHTML</code> function',
														li:		324,
														required: true,
														value:	1,
														urls:	[
																	[ 'w3c', 'https://dvcs.w3.org/hg/innerhtml/raw-file/tip/index.html#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text' ]
																]
													}
												]
									}
								]
					}, {
						id:		'form',
						name:	'Forms',
						status:	'stable',
						items:	[
									'<strong>Field types</strong>',

									{
										id:		'text',
										name:	'<code>input type=text</code>',
										required: true,
										items:	[
													{
														id:			'element',
														name: 		'Minimal element support',
														li:			3,
														required: true,
													}, {
														id:			'selection',
														name: 		'Selection Direction',
														li: 		3,
														required: true,
														value:		2
													}
												]
									}, {
										id:		'number',
										name:	'<code>input type=number</code>',
										required: true,
										items:	[
													{
														id:			'element',
														name: 		'Minimal element support',
														li:			34,
														required: true,
														value:		1,
														url:		'http://www.w3.org/TR/html5/forms.html#number-state-(type=number)'
													}, {
														id:			'ui',
														name: 		'Custom user-interface',
														li:			34,
														required: true,
														value:		2
													}, {
														id:			'sanitization',
														name: 		'Value sanitization',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#value-sanitization-algorithm'
													}, {
														id:			'validation',
														name: 		'Field validation',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#the-constraint-validation-api'
													}, {
														id:			'min',
														name: 		'<code>min</code> attribute',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-min'
													}, {
														id:			'max',
														name: 		'<code>max</code> attribute',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-max'
													}, {
														id:			'step',
														name: 		'<code>step</code> attribute',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-step'
													}, {
														id:			'stepDown',
														name: 		'<code>stepDown()</code> method',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-stepdown'
													}, {
														id:			'stepUp',
														name: 		'<code>stepUp()</code> method',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-stepup'
													}, {
														id:			'valueAsNumber',
														name: 		'<code>valueAsNumber()</code> method',
														li:			34,
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-valueasnumber'
													}
												]
									},

									'<strong>Fields</strong>',

									{
										id:		'other',
										name:	'Focus attributes',
										value:	2,
										items:	[
													{
														id:			'autofocus',
														name: 		'<code>autofocus</code> attribute',
														li:			27,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-fe-autofocus'
													}
												]
									}
								]
					}, {
						id:		'components',
						status:	'stable',
						name: 	'Web Components',
						items:	[
									{
										id:			'shadowdom',
										name: 		'Shadow DOM',
										li: 		331,
										status: 	'experimental',
										value:		{ maximum: 4, award: { OLD: 2 } },
										urls:		[
														[ 'w3c', 'http://w3c.github.io/webcomponents/spec/shadow/' ]
													]
									}, {
										id:			'template',
										name: 		'HTML templates',
										li:			343,
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html-templates/' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/scripting.html#the-template-element' ],
														[ 'wp', '/tutorials/webcomponents/htmlimports' ]
													]
									}, {
										id:			'imports',
										name: 		'HTML imports',
										li:			328,
										status: 	'rejected',
										urls:		[
														[ 'w3c', 'http://w3c.github.io/webcomponents/spec/imports/' ]
													]
									}
								]
					}
				]
	},


	{
		id:		'deviceaccess',
		name:	'Device Access',
		items:	[
					{
						id:		'input',
						name:	'Input',
						status:	'proposal',
						items:	[
									{
										id:			'pointerevents',
										name: 		'Pointer Events',
										li:			312,
										value:		{ maximum: 5, award: { PREFIX: 3 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/pointerevents/' ],
														[ 'wp',  '/concepts/Pointer_Events' ]
													]
									},
									{
										id: 		'dispatch',
										name: 		'DispatchEvent',
										li:			282,
										required: true,
										value:		1,
										urls: 		[
														['whatwg', 'https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent']
													]
									},
									{
										id: 		'touch',
										name: 		'Touch event',
										li:			314,
										required: true,
										value: 		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/touch-events/']
													]
									},

									'<strong>Keyboard events</strong>',
									{
										id: 		'which',
										name: 		'KeyboardEvent which',
										li:			276,
										required: true,
										value:		1,
										urls: 		[
														['w3c', 'https://w3c.github.io/uievents/#widl-KeyboardEvent-which']
													]
									},
									{
										id: 		'charCode',
										name: 		'KeyboardEvent charCode',
										li:			277,
										required: true,
										value:		1,
										urls: 		[
														['w3c', 'https://w3c.github.io/uievents/#widl-KeyboardEvent-charCode']
													]
									},
									{
										id: 		'code',
										name: 		'KeyboardEvent code',
										li:			278,
										value:		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/uievents/#widl-KeyboardEvent-code']
													]
									},
									{
										id: 		'location',
										name: 		'KeyboardEvent location',
										li:			279,
										value:		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/uievents/#widl-KeyboardEvent-location']
													]
									},
									{
										id: 		'modifier',
										name: 		'KeyboardEvent getModifierState',
										li:			280,
										value:		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/uievents/#widl-KeyboardEvent-getModifierState']
													]
									},
									{
										id: 		'key',
										name: 		'KeyboardEvent key',
										li:			281,
										value:		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/uievents/#widl-KeyboardEvent-key']
													]
									},
								]
					}
				]
	},

	{
		id:		'multimedia',
		name:	'Multimedia',
		items:	[
					{
						id:		'audio',
						name:	'Resource Hints',
						status:	'stable',
						items:	[
									{
										id:		'preload',
										name: 	'Preload in the background',
										li:		268,
										value:	1,
										url:	'http://www.w3.org/TR/html5/embedded-content-0.html#attr-media-preload'
									}
								]
					}
				]
	},

	{
		id:		'graphicseffects',
		name:	'3D, Graphics & Effects',
		items:	[
					{
						id:		'responsive',
						status:	'stable',
						name: 	'Responsive images',
						items:	[
									{
										id:			'srcset',
										name: 		'<code>srcset</code> attribute',
										li:			32,
										value:		5,
										urls:		[
														[ 'ricg', 'http://responsiveimages.org/' ],
														[ 'w3c', 'http://www.w3.org/html/wg/drafts/srcset/w3c-srcset/' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset' ]
													]
									}
								]
					}, {
						id:		'canvas',
						name:	'2D Graphics',
						status:	'stable',
						items:	[
									{
										id:		'context',
										name: 	'Canvas 2D graphics',
										li:		57,
										required: true,
										value:	10,
										urls:   [
													[ 'w3c', 'http://www.w3.org/TR/2dcontext/' ],
													[ 'wp',  '/apis/canvas' ],
													[ 'mdn', '/Web/API/Canvas_API' ]
												]
									},
									{
										id:		'smil',
										name: 	'SVG Animation Support',
										li:		300,
										required: true,
										value:	3,
										urls:   [
													[ 'w3c', 'http://www.w3.org/TR/SVG/animate.html' ],
												]
									},
									{
										id:		'filter',
										name: 	'SVG Filter Support',
										li:		301,
										required: true,
										value:	3,
										urls:   [
													[ 'w3c', 'http://www.w3.org/TR/SVG/filters.html' ],
												]
									},
									{
										id:		'fragment',
										name: 	'SVG Fragment Identifier Support',
										li:		301,
										value:	3,
										urls:   [
													[ 'w3c', 'http://www.w3.org/TR/SVG/linking.html#SVGFragmentIdentifiers' ],
												]
									},
									'<strong>Drawing primitives</strong>',

									{
										id:		'text',
										name: 	'Text support',
										li:		58,
										value:	2,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/2dcontext/#drawing-text-to-the-canvas' ],
													[ 'wp',  '/apis/canvas/CanvasRenderingContext2D/fillText' ]
												]
									}, {
										id:		'blending',
										name: 	'Blending modes',
										li:	 	10,
										status:	'proposal',
										value:	5,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/compositing-1/#canvascompositingandblending' ]
												]
									}
								]
					}, {
						id:		'3d',
						status:	'stable',
						name:	'3D and VR',
						items:	[
									'<strong>3D Graphics</strong>',

									{
										id:			'webgl',
										name: 		'WebGL',
										li:			61,
										required: true,
										value:		{ maximum: 15, award: { PREFIX: 10 } },
										urls:		[
														[ 'khronos', 'https://www.khronos.org/registry/webgl/specs/latest/1.0/' ],
														[ 'wp',  '/webgl' ],
														[ 'mdn', '/Web/API/WebGL_API' ]
													]

									}
								]
					}, {
						id:		'animation',
						status:	'stable',
						name: 	'Animation',
						items:	[
									{
										id:			'webanimation',
										name: 		'Web Animations API',
										li:			329,
										status:		'experimental',
										value:		3,
										urls:		[
														[ 'w3c', 'https://w3c.github.io/web-animations/' ]
													]
									}, {
										id:			'requestAnimationFrame',
										name: 		'<code>window.requestAnimationFrame</code>',
										li:			237,
										value:		{ maximum: 5, award: { PREFIX: 3 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/animation-timing/#requestAnimationFrame' ],
														[ 'wp',  '/dom/Window/requestAnimationFrame' ],
														[ 'mdn', '/Web/API/window/requestAnimationFrame' ]
													]
									}
								]
					}
				]
	},

	{
		id:		'connectivity',
		name:	'Connectivity',
		items:	[
					{
						id:		'communication',
						status:	'stable',
						name: 	'Communication',
						items:	[
									{
										id:			'fetch',
										name: 		'Fetch',
										li:			232,
										status:		'proposal',
										value:		6,
										urls:		[
														[ 'whatwg', 'https://fetch.spec.whatwg.org/' ],
														[ 'mdn', '/Web/API/Fetch_API' ]
													]
									},


									'<strong>XMLHttpRequest Level 2</strong>',

									{
										id:			'xmlhttprequest2.upload',
										name: 		'Upload files',
										li:			347,
										value:		5,
										url:    	'http://www.w3.org/TR/XMLHttpRequest2/#the-upload-attribute'
									}, {
										id:			'xmlhttprequest2.response',
										name:		'Response type support',
										urls:		[
														[ 'mdn', '/Web/API/XMLHttpRequest' ]
													],
										items:		[
														{
															id:			'text',
															name: 		'Text response type',
															li:			347,
															value:		1,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}, {
															id:			'document',
															name: 		'Document response type',
															li:			347,
															value:		2,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}, {
															id:			'array',
															name: 		'<code>ArrayBuffer</code> response type',
															li:			347,
															value:		2,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}, {
															id:			'blob',
															name: 		'<code>Blob</code> response type',
															li:			347,
															value:		2,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}
													]
									},

									'<strong>WebSocket</strong>',

									{
										id:			'websocket.basic',
										name: 		'Basic socket communication',
										li:			241,
										required: true,
										value:		{ maximum: 10, award: { PREFIX: 7, OLD: 5 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/websockets/' ],
														[ 'mdn', '/Web/API/WebSockets_API' ]
													]
									}, {
										id:			'websocket.binary',
										name: 		'<code>ArrayBuffer</code> and <code>Blob</code> support',
										li:			241,
										required: true,
										value:		5,
										urls:		[
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/comms.html#dom-websocket-binarytype' ],
														[ 'mdn', '/Web/API/WebSockets_API' ]
													]
									}
								]
					}, {
						id:		'rtc',
						name:	'Peer To Peer',
						status:	'stable',
						items:	[
									'<strong>Connectivity</strong>',

									{
										id:		'webrtc',
										name: 	'WebRTC 1.0',
										li:		216,
										value:	{ maximum: 15, award: { PREFIX: 10 } },
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/webrtc/' ],
													[ 'wp',  '/apis/webrtc/RTCPeerConnection' ],
													[ 'mdn', '/Web/Guide/API/WebRTC' ]
												]
									}
								]
					}
				]
	},

	{
		id:		'performanceintegration',
		name:	'Performance & Integration',
		items:	[
					{
						id:		'performance',
						status:	'stable',
						name:	'Performance',
						items:	[
									'<strong>Workers</strong>',

									{
										id:			'worker',
										name: 		'Web Workers',
										li: 		245,
										required: true,
										value:		10,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/workers/#dedicated-workers-and-the-worker-interface' ],
														[ 'mdn', '/Web/API/Web_Workers_API/Using_web_workers' ]
													]
									}, {
										id:			'sharedWorker',
										name: 		'Shared Workers',
										li:			246,
										required: true,
										value:		1,
										urls:    	[
														[ 'w3c', 'http://www.w3.org/TR/workers/#shared-workers-and-the-sharedworker-interface' ],
														[ 'mdn', '/Web/API/Web_Workers_API/Using_web_workers' ]
													]
									}, {
										id:			'broadcast',
										name: 		'Broadcast Channel',
										li:			233,
										value:		1,
										urls:    	[
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/comms.html#broadcasting-to-other-browsing-contexts' ]
													]
									}
								]
					}, {
						id:		'security',
						status:	'stable',
						name:	'Security',
						items:	[
									{
										id:			'crypto',
										name: 		'Web Cryptography API',
										li:			202,
										status:		'proposal',
										value:		{ maximum: 5, award: { PREFIX: 3 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/WebCryptoAPI/' ]
													]
									},
									{
										id:			'crypto.rand',
										name: 		'Web Cryptography getRandomValues',
										li:			203,
										status:		'proposal',
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/WebCryptoAPI/#RandomSource-method-getRandomValues' ]
													]
									}, {
										id:			'csp10',
										name: 		'Content Security Policy 1',
										li:			321,
										required: true,
										value:		3,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/CSP1/' ],
														[ 'mdn', '/Web/Security/CSP' ]
													]
									}, {
										id:			'csp11',
										name: 		'Content Security Policy 2',
										li:			322,
										status:		'proposal',
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/CSP2/' ],
														[ 'mdn', '/Web/Security/CSP' ]
													]
									}, {
										id:			'cors',
										name: 		'Cross-Origin Resource Sharing',
										li:			240,
										required: true,
										value:		4,
										urls:		[
														[ 'mdn', '/Web/HTTP/Access_control_CORS' ]
													]
									}, {
										id:			'postMessage',
										name: 		'Cross-document messaging',
										li:			242,
										required: true,
										value:		2,
										urls:    	[
														[ 'w3c', 'http://dev.w3.org/html5/postmsg/' ],
														[ 'wp',  '/apis/web-messaging' ],
														[ 'mdn', '/Web/API/Window/postMessage' ]
													]
									},

									'<strong>Iframes</strong>',

									{
										id:			'sandbox',
										name: 		'Sandboxed <code>iframe</code>',
										li:			35,
										required: true,
										value:		4,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/embedded-content-0.html#attr-iframe-sandbox' ],
														[ 'mdn', '/Web/HTML/Element/iframe' ]
													]
									}
								]
					}
				]
	},

	{
		id:		'offlinestorage',
		name:	'Offline & Storage',
		items:	[
					{
						id:		'storage',
						name: 	'Storage',
						status:	'stable',
						items:	[
									'<strong>Key-value storage</strong>',

									{
										id:			'sessionStorage',
										name: 		'Session Storage',
										li:			244,
										required: true,
										value:		5,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/webstorage/#the-sessionstorage-attribute' ],
														[ 'wp',  '/apis/web-storage' ],
														[ 'mdn', '/Web/API/Web_Storage_API' ]
													]
									}, {
										id:			'localStorage',
										name: 		'Local Storage',
										li:			244,
										required: true,
										value:		5,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/webstorage/#the-localstorage-attribute' ],
														[ 'wp',  '/apis/web-storage' ],
														[ 'mdn', '/Web/API/Web_Storage_API' ]
													]
									},

									'<strong>Database storage</strong>',

									{
										id:			'sqlDatabase',
										name: 		'Web SQL Database',
										li: 		265,
										status:		'rejected',
										value:		{ maximum: 5, conditional: '!storage.indexedDB.basic' },

										url:		'http://www.w3.org/TR/webdatabase/'
									}
								]
					}, {
						id:		'files',
						name:	'Files',
						status:	'stable',
						items:	[
									'<strong>Reading files</strong>',

									{
										id:			'fileReader',
										name: 		'Basic support for reading files',
										li:			210,
										required: true,
										value:		7,
										urls:		[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#filereader-interface' ],
														[ 'wp',  '/apis/file' ],
														[ 'mdn', '/Using_files_from_web_applications' ]
													]
									}, {
										id:			'fileReader.blob',
										name: 		'Create a <code>Blob</code> from a file',
										li:			211,
										required: true,
										value:		2,
										urls:		[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#dfn-Blob' ],
													]
									}, {
										id:			'fileReader.dataURL',
										name: 		'Create a Data URL from a <code>Blob</code>',
										li: 		212,
										required: true,
										value:		2,
										urls:    	[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#dfn-readAsDataURL' ],
													]
									}, {
										id:			'fileReader.objectURL',
										name: 		'Create a Blob URL from a <code>Blob</code>',
										li: 		212,
										required: true,
										value:		2,
										urls:    	[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#dfn-createObjectURL' ],
													]
									}
								]
					}
				]
	},

	{
		id:		'other',
		name:	'Other',
		items:	[
					{
						id:		'scripting',
						name: 	'Scripting',
						status:	'stable',
						items:	[
									'<strong>Script execution</strong>',

									{
										id:			'async',
										name: 		'Asynchronous script execution',
										li: 		344,
										required: true,
										value:		3,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/scripting-1.html#attr-script-async' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/scripting.html#attr-script-async' ],
														[ 'mdn', '/Web/HTML/Element/script' ],
														[ 'wp',  '/html/elements/script' ]
													]
									}, {
										id:			'defer',
										name: 		'Defered script execution',
										li:			345,
										required: true,
										value:		1,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/scripting-1.html#attr-script-defer' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer' ],
														[ 'mdn', '/Web/HTML/Element/script' ],
														[ 'wp',  '/html/elements/script' ]
													]
									},

									'<strong>ECMAScript 5</strong>',

									{
										id:			'es5.json',
										name: 		'JSON encoding and decoding',
										li: 		252,
										required: true,
										value:		2,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-json-object' ],
														[ 'mdn', '/JSON' ],
														[ 'wp',	 '/apis/json' ]
													]
									},

									'<strong>ECMAScript 6</strong>',
									{
										id: 		'es6.proxy',
										name:   	'Proxy Object',
										li:			178,
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-proxy-object-internal-methods-and-internal-slots' ],
													]
									},
									{
										id: 		'es6.number',
										name:   	'Number',
										li:			179,
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-number-objects' ],
													]
									},
									{
										id: 		'es6.const',
										name:   	'Const',
										li:			180,
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations' ],
													]
									},
									{
										id: 		'es6.spread',
										name:   	'Spread',
										li:			181,
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-function-definitions' ],
													]
									},
									{
										id: 		'es6.let',
										name:   	'Let',
										li:			183,
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-let-and-const-declarations' ],
													]
									}, {
										id: 		'es6.arrow',
										name:   	'Arrow functions',
										li:			182,
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions' ],
													]
									}, {
										id: 		'es6.promises',
										name:   	'Promises',
										li:			184,
										value:		3,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects' ],
														[ 'mdn', '/Web/JavaScript/Reference/Global_Objects/Promise' ]
													]
									}, {
										id: 		'es6.i18n',
										name:   	'Internationalization',
										li:			250,
										value:		2,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-402/1.0/' ],
														[ 'mdn', '/Web/JavaScript/Reference/Global_Objects/Intl' ]
													]
									},

									'<strong>Other API\'s</strong>',

									{
										id:			'base64',
										name: 		'Base64 encoding and decoding',
										li: 		235,
										value:		1,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/webappapis.html#atob' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/webappapis.html#atob' ],
														[ 'mdn', '/Web/API/WindowBase64/atob' ]
													]
									}, {
										id: 		'mutationObserver',
										name:   	'Mutation Observer',
										li:			342,
										required: true,
										value:		{ maximum: 2, award: { PREFIX: 1 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/dom/#mutation-observers' ],
														[ 'mdn', '/Web/API/MutationObserver' ]
													]
									}, {
										id: 		'setImmeadiate',
										name:   	'setImmeadiate',
										li:			259,
										value:		1,
										urls:		[
														[ 'w3c', 'http://w3c.github.io/setImmediate/' ]
													]
									}, {
										id: 		'url',
										name:   	'URL API',
										li:			212,
										required: true,
										value:		{ maximum: 2, award: { PREFIX: 1 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/url/' ]
													]
									}, {
										id: 		'encoding',
										name:   	'Encoding API',
										li:			235,
										required: true,
										value:		2,
										urls:		[
														[ 'whatwg', 'https://encoding.spec.whatwg.org' ],
														[ 'mdn', '/Web/API/TextDecoder' ]
													]
									},  {
										id: 		'perfTime',
										name:   	'High Resolution Time',
										li:			194,
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/hr-time/' ]
													]
									}, {
										id: 		'userTime',
										name:   	'User Timing',
										li:			195,
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/user-timing/' ]
													]
									}, {
										id: 		'navTime',
										name:   	'Navigation Timing',
										li:			313,
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/navigation-timing/' ]
													]
									}
								]
					},
					{
							id: "font",
							name: "Font Types",
							status: 'stable',
							items: [
								{
									id: 		'ttf',
									name: 		'TTF Fonts',
									li:			172,
									required: true,
									value: 3,
									urls: 		[
										['apple', 'http://developer.apple.com/fonts/TTRefMan/index.html']
									]
								},
								{
									id: 		'otf',
									name: 		'OTF Fonts',
									li:			172,
									required: true,
									value: 3,
									urls: 		[
										['apple', 'http://developer.apple.com/fonts/TTRefMan/index.html']
									]
								},
								{
									id: 		'woff',
									name: 		'WOFF Fonts',
									li:			315,
									value: 3,
									urls: 		[
										['apple', 'http://developer.apple.com/fonts/TTRefMan/index.html']
									]
								},
							]
					},
					{
						id:		'other',
						name: 	'Other',
						status:	'stable',
						items:	[
									{
										id: 		'hashchange',
										name:		'Hashchange event',
										li:			247,
										required: true,
										value: 		4,
										urls: 		[
														['w3c', 'https://dev.w3.org/html5/spec-LC/history.html#event-hashchange']
													]
									},
									{
										id: 		'console',
										name:		'Console logging',
										li:			231,
										required: true,
										value: 		4,
										urls: 		[
														['whatwg', 'https://console.spec.whatwg.org/']
													]
									},
									{
										id: 		'counters',
										name:		'CSS Counters',
										li: 		78,
										required: true,
										value: 		3,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/CSS21/generate.html#counters']
													]
									},
									{
										id: 		'focus',
										name:		'Focus Events',
										li:			270,
										value: 		1,
										urls: 		[
														['w3c', 'https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusin']
													]
									},
								]
					},
				]
	},
	{
		id:			'css',
		name: 		'CSS',
		colunm: 	'left',
		items: 	[
					{
						id: 	'css-display',
						name:	 "CSS Display",
						status: 'stable',
						items: 	[
									{
										id: 		'display',
										name:		'Display Properties',
										li:			75,
										required: 	true,
										value: 5,
										urls: 		[
														['w3c', 'https://www.w3.org/TR/css-display-3/']
													]

									},
									{
										id: 		'position',
										name:		'Position',
										li:			74,
										required: 	true,
										value: 5,
										urls: 		[
														['w3c', 'https://www.w3.org/TR/css-position-3/']
													]

									},
									{
										id: 		'min-width',
										name:		'Min Width',
										li:			76,
										required: 	true,
										value: 3,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-width']
													]

									},
									{
										id: 		'min-height',
										name:		'Min Height',
										li:			76,
										required: 	true,
										value: 3,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-height']
													]

									},
									{
										id: 		'max-width',
										name:		'Max Width',
										li:			76,
										required: 	true,
										value: 3,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/@viewport/max-width']
													]

									},
									{
										id: 		'max-height',
										name:		'Max Height',
										li:			76,
										required: 	true,
										value: 3,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/max-height']
													]

									}
								]
					},
					{
						id: 	'css3-background',
						name:	 "CSS Background and Borders",
						status: 'stable',
						items: 	[
									{
										id: 		'background-repeat',
										name:		'Background Repeat',
										li:			127,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat']
													]

									},
									{
										id: 		'background-attachment',
										name:		'Background Attachment',
										li:			97,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment']
													]

									},
									{
										id: 		'background-position',
										name:		'Background Position',
										li:			105,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-position']
													]

									},
									{
										id: 		'background-clip',
										name:		'Background Clip',
										li:			118,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip']
													]

									},
									{
										id: 		'background-size',
										name:		'Background Size',
										li:			118,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-size']
													]

									},
									{
										id: 		'background',
										name:		'Background',
										li:			118,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background']
													]

									},
									{
										id: 		'border-radius',
										name:		'Border Radius',
										li:			124,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius']
													]

									},
									{
										id: 		'border-image-source',
										name:		'Border Image Source',
										li:			128,
										required: 	true,
										value: 5,
										urls: 		[
														['w3c', 'https://www.w3.org/TR/css-display-3/']
													]

									},
									{
										id: 		'border-image-slice',
										name:		'Border Image Slice',
										li:			128,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-source']
													]

									},
									{
										id: 		'border-image-width',
										name:		'Border Image Width',
										li:			128,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-width']
													]

									},
									{
										id: 		'border-image-outset',
										name:		'Border Image Outset',
										li:			128,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-outset']
													]

									},
									{
										id: 		'border-image-repeat',
										name:		'Border Image Repeat',
										li:			128,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/border-image-repeat']
													]

									},
									{
										id: 		'border-image',
										name:		'Border Image',
										li:			128,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/search?q=border-image']
													]

									},
									{
										id: 		'box-shadow',
										name:		'Box Shadow',
										li:			130,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow']
													]

									},
									{
										id: 		'outline',
										name:		'Outline',
										li:			79,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/outline']
													]

									},
								]
					},
					{
						id: 	'css-backgrounds-4',
						name:	 "Background and Borders Level 4",
						status: 'stable',
						items: 	[
									{
										id: 		'background-position-x',
										name:		'Background Position X',
										li:			105,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-x']
													]

									},
									{
										id: 		'background-position-y',
										name:		'Background Position Y',
										li:			105,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/background-position-y']
													]

									}
								]
					},
					{
						id: 	'css3-images',
						name:	 "Images",
						status: 'stable',
						items: 	[
									{
										id: 		'linear-gradient',
										name:		'Linear Gradient',
										li:			120,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient']
													]

									},
									{
										id: 		'radial-gradient',
										name:		'Radial Gradient',
										li:			120,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient']
													]

									},
									{
										id: 		'repeating-linear-gradient',
										name:		'Repeating Linear Gradient',
										li:			113,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient']
													]

									},
									{
										id: 		'repeating-radial-gradient',
										name:		'Repeating Radial Gradient',
										li:			113,
										required: 	true,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-radial-gradient']
													]

									},
									{
										id: 		'object-fit',
										name:		'Object Fit',
										li:			116,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit']
													]

									},
									{
										id: 		'object-position',
										name:		'Object Position',
										li:			116,
										value: 5,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/object-position']
													]

									},
								]
					},
					{
						id: 	'css3-selectors',
						name:	 "Selectors",
						status: 'stable',
						items: 	[
									{
										id: 		'::before',
										name:		'::before',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/::before']
													]

									},
									{
										id: 		'::after',
										name:		'::after',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/::after']
													]

									},
									{
										id: 		'::first-letter',
										name:		'::first-letter',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter']
													]

									},
									{
										id: 		'::first-line',
										name:		'::first-line',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line']
													]

									},
									{
										id: 		'Namespaces',
										name:		'Namespaces',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Namespaces']
													]

									},
									{
										id: 		':target',
										name:		':target',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:target']
													]

									},
									{
										id: 		':enabled',
										name:		':enabled',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled']
													]

									},
									{
										id: 		':disabled',
										name:		':disabled',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled']
													]

									},
									{
										id: 		':checked',
										name:		':checked',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked']
													]

									},
									{
										id: 		':root',
										name:		':root',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:root']
													]

									},
									{
										id: 		':nth-child',
										name:		':nth-child',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child']
													]

									},
									{
										id: 		':nth-last-child',
										name:		':nth-last-child',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child']
													]

									},
									{
										id: 		':nth-of-type',
										name:		':nth-of-type',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type']
													]

									},
									{
										id: 		':nth-last-of-type',
										name:		':nth-last-of-type',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type']
													]

									},
									{
										id: 		':last-child',
										name:		':last-child',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child']
													]

									},
									{
										id: 		':only-child',
										name:		':only-child',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child']
													]

									},
									{
										id: 		':first-of-type',
										name:		':first-of-type',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type']
													]

									},
									{
										id: 		':last-of-type',
										name:		':last-of-type',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type']
													]

									},
									{
										id: 		':only-of-type',
										name:		':only-of-type',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type']
													]

									},
									{
										id: 		':empty',
										name:		':empty',
										li:			68,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/:empty']
													]

									},
								]
					},
					{
						id: 	'css3-ui',
						name:	 "User Interface",
						status: 'stable',
						items: 	[
									{
										id: 		'box-sizing',
										name:		'Box Sizing',
										li:			131,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing']
													]

									},
									{
										id: 		'text-overflow',
										name:		'Text Overflow',
										li:			117,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow']
													]

									}
								]
					},
					{
						id: 	'css3-transitions',
						name:	 "CSS Transitions",
						status: 'stable',
						items: 	[
									{
										id: 		'transition-property',
										name:		'Property',
										li:			167,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property']
													]

									},
									{
										id: 		'transition-duration',
										name:		'Duration',
										li:			167,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration']
													]

									},
									{
										id: 		'transition-timing-function',
										name:		'Timing Function',
										li:			167,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function']
													]

									},
									{
										id: 		'transition-delay',
										name:		'Delay',
										li:			167,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay']
													]

									},
									{
										id: 		'transition',
										name:		'Transition',
										li:			167,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transition']
													]

									},
								]
					},
					{
						id: 	'css3-animations',
						name:	 "CSS Animations",
						status: 'stable',
						items: 	[
									{
										id: 		'animation-name',
										name:		'Name',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name']
													]

									},
									{
										id: 		'animation-duration',
										name:		'Duration',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration']
													]

									},
									{
										id: 		'animation-timing-function',
										name:		'Timing Function',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function']
													]

									},
									{
										id: 		'animation-iteration-count',
										name:		'Iteration Count',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count']
													]

									},
									{
										id: 		'animation-direction',
										name:		'Direction',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction']
													]

									},
									{
										id: 		'animation-play-state',
										name:		'Play State',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state']
													]

									},
									{
										id: 		'animation-delay',
										name:		'Delay',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay']
													]

									},
									{
										id: 		'animation-fill-mode',
										name:		'Fill Mode',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode']
													]

									},
									{
										id: 		'animation',
										name:		'Play State',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/animation']
													]

									},
									{
										id: 		'@keyframes',
										name:		'@keyframes',
										li:			168,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes']
													]

									},
								]
					},
					{
						id: 	'css3-transforms',
						name:	 "CSS Transforms",
						status: 'stable',
						items: 	[
									{
										id: 		'transform',
										name:		'Transform',
										li:			165,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform']
													]

									},
									{
										id: 		'transform-origin',
										name:		'Origin',
										li:			165,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin']
													]

									},
									{
										id: 		'transform-style',
										name:		'Style',
										li:			165,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/transform-style']
													]

									},
									{
										id: 		'perspective',
										name:		'Perspective',
										li:			166,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/perspective']
													]

									},
									{
										id: 		'perspective-origin',
										name:		'Perspective Origin',
										li:			166,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/perspective-origin']
													]

									},
									{
										id: 		'backface-visibility',
										name:		'Backface Visibility',
										li:			166,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility']
													]

									},
								]
					},
					{
						id: 	'css-text-3',
						name:	 "CSS Text",
						status: 'stable',
						items: 	[
									{
										id: 		'tab-size',
										name:		'Tab Size',
										li:			155,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/tab-size']
													]

									},
									{
										id: 		'word-break',
										name:		'Word Break',
										li:			159,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/word-break']
													]

									},
									{
										id: 		'word-wrap',
										name:		'Word Wrap',
										li:			161,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap']
													]

									},
								]
					},
					{
						id: 	'css-text-decor-3',
						name:	 "CSS Text Decoration",
						status: 'stable',
						items: 	[
									{
										id: 		'text-shadow',
										name:		'Text Shadow',
										li:			129,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow']
													]

									},
									{
										id: 		'letter-spacing',
										name:		'Letter Spacing',
										li:			85,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing']
													]

									}
								]
					},
					{
						id: 	'css3-fonts',
						name:	 "CSS Text Decoration",
						status: 'stable',
						items: 	[
									{
										id: 		'font-kerning',
										name:		'Font Kerning',
										li:			96,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-kerning']
													]

									},
									{
										id: 		'font-feature-settings',
										name:		'Font Feature Settings',
										li:			119,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings']
													]

									}
								]
					},
					{
						id: 	'css-color-3',
						name:	 "CSS Text Decoration",
						status: 'stable',
						items: 	[
									{
										id: 		'rgba',
										name:		'RGBA',
										li:			67,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color']
													]

									},
									{
										id: 		'hsl',
										name:		'HSL',
										li:			67,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color']
													]

									},
									{
										id: 		'hsla',
										name:		'HSLA',
										li:			67,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color']
													]

									},
									{
										id: 		'transparent',
										name:		'Transparent',
										li:			67,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color']
													]

									},
									{
										id: 		'currentColor',
										name:		'Current Color',
										li:			82,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color']
													]

									},
									{
										id: 		'opacity',
										name:		'Opacity',
										li:			67,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/color']
													]

									},
								]
					},
					{
						id: 	'css3-multicol',
						name:	 "CSS Multicolumn",
						status: 'stable',
						items: 	[
									{
										id: 		'column-width',
										name:		'Width',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-width']
													]

									},
									{
										id: 		'column-count',
										name:		'Count',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-count']
													]

									},
									{
										id: 		'columns',
										name:		'Columns',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/columns']
													]

									},
									{
										id: 		'column-gap',
										name:		'Gap',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap']
													]

									},
									{
										id: 		'column-rule-color',
										name:		'Rule Color',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-color']
													]

									},
									{
										id: 		'column-rule-style',
										name:		'Rule Style',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-style']
													]

									},
									{
										id: 		'column-rule-width',
										name:		'Rule Width',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule-width']
													]

									},
									{
										id: 		'column-rule',
										name:		'Rule',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-rule']
													]

									},
									{
										id: 		'column-span',
										name:		'Span',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-span']
													]

									},
									{
										id: 		'column-fill',
										name:		'Fill',
										li:			132,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/column-fill']
													]

									},
								]
					},
					{
						id: 	'css3-values',
						name:	 "CSS Values",
						status: 'stable',
						items: 	[
									{
										id: 		'rem',
										name:		'rem',
										li:			115,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/Learn/CSS/Styling_text/Fundamentals']
													]

									},
									{
										id: 		'attr()',
										name:		'attr()',
										li:			89,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/attr']
													]

									},
									{
										id: 		'calc()',
										name:		'calc()',
										li: 		122,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/calc']
													]

									}
								]
					},
					{
						id: 	'css3-flexbox',
						name:	 "CSS Flexbox",
						status: 'stable',
						items: 	[
									{
										id: 		'align-content',
										name:		'Align Content',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-content']
													]

									},
									{
										id: 		'align-items',
										name:		'Align Items',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-items']
													]

									},
									{
										id: 		'align-self',
										name:		'Align Self',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/align-self']
													]

									},
									{
										id: 		'display',
										name:		'Diaplay',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/Learn/CSS/CSS_layout/Flexbox']
													]

									},
									{
										id: 		'flex',
										name:		'Flex',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex']
													]

									},
									{
										id: 		'flex-basis',
										name:		'Flex Basis',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis']
													]

									},
									{
										id: 		'flex-direction',
										name:		'Flex Direction',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction']
													]

									},
									{
										id: 		'flex-flow',
										name:		'Flex Flow',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow']
													]

									},
									{
										id: 		'flex-grow',
										name:		'Flex Grow',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow']
													]

									},
									{
										id: 		'flex-shrink',
										name:		'Flex Shrink',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink']
													]

									},
									{
										id: 		'flex-wrap',
										name:		'Flex Wrap',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap']
													]

									},
									{
										id: 		'justify-content',
										name:		'Justify Content',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content']
													]

									},
									{
										id: 		'min-height',
										name:		'min-height',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-height']
													]

									},
									{
										id: 		'min-width',
										name:		'min-width',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/min-width']
													]

									},
									{
										id: 		'order',
										name:		'Order',
										li:			123,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/order']
													]

									},
								]
					},
					{
						id: 	'css-masking',
						name:	 "CSS Masking",
						status: 'stable',
						items: 	[
									{
										id: 		'clip-path',
										name:		'clip-path',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path']
													]

									},
									{
										id: 		'clip-rule',
										name:		'clip-rule',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path']
													]

									},
									{
										id: 		'mask-image',
										name:		'Mask Image',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-image']
													]

									},
									{
										id: 		'mask-mode',
										name:		'Mask Mode',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-mode']
													]

									},
									{
										id: 		'mask-repeat',
										name:		'Mask Repeat',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat']
													]

									},
									{
										id: 		'mask-position',
										name:		'Mask Position',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-position']
													]

									},
									{
										id: 		'mask-clip',
										name:		'Mask Clip',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-clip']
													]

									},
									{
										id: 		'mask-origin',
										name:		'Mask Origin',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-origin']
													]

									},
									{
										id: 		'mask-size',
										name:		'Mask Size',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-size']
													]

									},
									{
										id: 		'mask-composite',
										name:		'Mask Composite',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-composite']
													]

									},
									{
										id: 		'mask',
										name:		'Mask',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask']
													]

									},
									{
										id: 		'mask-border-source',
										name:		'Mask Border Source',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask']
													]

									},
									{
										id: 		'mask-border-slice',
										name:		'Mask Border Slice',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask']
													]

									},
									{
										id: 		'mask-border-width',
										name:		'Mask Border Width',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask']
													]

									},
									{
										id: 		'mask-border-outset',
										name:		'Mask Outset',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask']
													]

									},
									{
										id: 		'mask-border-repeat',
										name:		'Mask Repeat',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-repeat']
													]

									},
									{
										id: 		'mask-border',
										name:		'Mask Border',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask']
													]

									},
									{
										id: 		'mask-type',
										name:		'Mask Type',
										li:			125,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/mask-type']
													]

									},
								]
					},
					{
						id: 	'pointerevents',
						name:	 "Pointer Events",
						status: 'stable',
						items: 	[
									{
										id: 		'touch-action',
										name:		'Touch Action',
										li:			80,
										required: 	true,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action']
													]

									},
								]
					},
					{
						id: 	'css-will-change',
						name:	 "Will Change",
						status: 'stable',
						items: 	[
									{
										id: 		'will-change',
										name:		'Will Change',
										li:			151,
										value: 1,
										urls: 		[
														['mdn', 'https://developer.mozilla.org/en-US/docs/Web/CSS/will-change']
													]

									},
								]
					},

			]
	}
]
