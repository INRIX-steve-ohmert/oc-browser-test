

var tests = [

	{
		id:		'semantics',
		name:	'Semantics',
		column:	'left',
		items:	[
					{
						id:		'parsing',
						name:	'Parsing rules',
						status:	'stable',
						items:	[
									{
										// KEEP
										id:		'doctype',
										name: 	'<code>&lt;!DOCTYPE html&gt;</code> triggers standards mode',
										required: true,
										urls:   [
													[ 'w3c', 'http://www.w3.org/TR/html5/syntax.html#the-doctype' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/syntax.html#the-doctype' ]
												]
									}, {
										// KEEP
										id:		'tokenizer',
										name: 	'HTML5 tokenizer',
										required: true,
										value:	3,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/syntax.html#parsing' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/syntax.html#parsing' ],
													[ 'mdn', '/Web/Guide/HTML/HTML5/HTML5_Parser' ]
												]
									}, {
										// KEEP
										id:		'tree',
										name: 	'HTML5 tree building',
										required: true,
										value:	2,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/syntax.html#parsing' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/syntax.html#parsing' ],
													[ 'mdn', '/Web/Guide/HTML/HTML5/HTML5_Parser' ]
												]
									},
									{
										// KEEP
										id:		'svg',
										name: 	'Parsing inline SVG',
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
										// KEEP
										id:		'dataset',
										name: 	'Embedding custom non-visible data',
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
										// KEEP
										id:		'section',
										name:	'Section elements',
										urls:	[
													[ 'mdn', '/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document' ]
												],
										items:	[
													{
														// KEEP
														id:		'section',
														name: 	'<code>section</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-section-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-section-element' ]
																]
													}, {
														// KEEP
														id:		'nav',
														name: 	'<code>nav</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-nav-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-nav-element' ]
																]
													}, {
														// KEEP
														id:		'article',
														name: 	'<code>article</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-article-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-article-element' ]
																]
													}, {
														// KEEP
														id:		'aside',
														name: 	'<code>aside</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-aside-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-aside-element' ]
																]
													}, {
														// KEEP
														id:		'header',
														name: 	'<code>header</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/sections.html#the-header-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-header-element' ]
																]
													}, {
														// KEEP
														id:		'footer',
														name: 	'<code>footer</code> element',
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
														// KEEP
														id:		'main',
														name: 	'<code>main</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/html/wg/drafts/html/master/single-page.html#the-main-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-main-element' ]
																]
													}, {
														// KEEP
														id:		'figure',
														name: 	'<code>figure</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/grouping-content.html#the-figure-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-figure-element' ]
																]
													}, {
														// KEEP
														id:		'figcaption',
														name: 	'<code>figcaption</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/grouping-content.html#the-figcaption-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-figcaption-element' ]
																]
													}, {
														// KEEP
														id:		'ol',
														name: 	'<code>reversed</code> attribute on the <code>ol</code> element',
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
														// KEEP
														id:		'download',
														name: 	'<code>download</code> attribute on the <code>a</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-a-element' ],
																	[ 'whatwg', 'http://developers.whatwg.org/links.html#attr-hyperlink-download' ]
																]
													}, {
														// KEEP
														id:		'mark',
														name: 	'<code>mark</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-mark-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-mark-element' ]
																]
													}, {
														// KEEP
														id:		'time',
														name: 	'<code>time</code> element',
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-time-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-time-element' ]
																]
													}, {
														// KEEP
														id:		'data',
														name: 	'<code>data</code> element',
														required: true,
														value:	1,
														urls:	[
																	[ 'w3c', 'http://www.w3.org/TR/html5/text-level-semantics.html#the-data-element' ],
																	[ 'whatwg', 'https://html.spec.whatwg.org/multipage/semantics.html#the-data-element' ]
																]
													}, {
														// KEEP
														id:		'wbr',
														name: 	'<code>wbr</code> element',
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
														// KEEP
														id:		'dialog',
														name: 	'<code>dialog</code> element',
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
										// KEEP
										id:		'hidden',
										name: 	'<code>hidden</code> attribute',
										required: true,
										value:	1,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/html5/editing.html#the-hidden-attribute' ],
													[ 'whatwg', 'https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute' ]
												]
									},
									{
										id: 	'customEv',
										name: 	'Custom Event',
										required: true,
										value: 	2,
										urls: 	[
													['whatwg', 'https://dom.spec.whatwg.org/#interface-customevent']
												]
									},
									{
										id: 	'text',
										name: 	'Node.textContent',
										required: true,
										value: 	2,
										urls: 	[
													['whatwg', 'https://dom.spec.whatwg.org/#dom-node-textcontent']
												]
									},
									{
										id: 	'eventListener',
										name: 	'addEventListener method',
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-eventtarget-addeventlistener']
												]
									},
									{
										id: 	'matches',
										name: 	'matches method',
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-element-matches']
												]
									},
									{
										id: 	'classList',
										name: 	'classList method',
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-element-classlist']
												]
									},
									{
										id: 	'className',
										name: 	'getElementsByClassName method',
										required: true,
										value: 	2,
										urls: 	[
													['https://dom.spec.whatwg.org/#dom-document-getelementsbyclassname']
												]
									},
									{
										id: 	'rect',
										name: 	'getBoundingClientRect method',
										required: true,
										value: 	2,
										urls: 	[
													['w3c', 'https://www.w3.org/TR/cssom-view-1/#dom-element-getboundingclientrect']
												]
									},
									{
										id:		'dynamic',
										name:	'Dynamic markup insertion',
										items:	[
													{
														// KEEP
														id:		'outerHTML',
														name: 	'<code>outerHTML</code> property',
														required: true,
														value:	1,
														urls:	[
																	[ 'w3c', 'https://dvcs.w3.org/hg/innerhtml/raw-file/tip/index.html#widl-Element-outerHTML' ]
																]
													}, {
														// KEEP
														id:		'insertAdjacentHTML',
														name: 	'<code>insertAdjacentHTML</code> function',
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
										items:	[
													{
														id:			'element',
														name: 		'Minimal element support',
														required: true,
													}, {
														id:			'selection',
														name: 		'Selection Direction',
														required: true,
														value:		2
													}
												]
									}, {
										// KEEP
										id:		'number',
										name:	'<code>input type=number</code>',
										items:	[
													{
														id:			'element',
														name: 		'Minimal element support',
														required: true,
														value:		1,
														url:		'http://www.w3.org/TR/html5/forms.html#number-state-(type=number)'
													}, {
														id:			'ui',
														name: 		'Custom user-interface',
														required: true,
														value:		2
													}, {
														id:			'sanitization',
														name: 		'Value sanitization',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#value-sanitization-algorithm'
													}, {
														id:			'validation',
														name: 		'Field validation',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#the-constraint-validation-api'
													}, {
														id:			'min',
														name: 		'<code>min</code> attribute',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-min'
													}, {
														id:			'max',
														name: 		'<code>max</code> attribute',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-max'
													}, {
														id:			'step',
														name: 		'<code>step</code> attribute',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-step'
													}, {
														id:			'stepDown',
														name: 		'<code>stepDown()</code> method',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-stepdown'
													}, {
														id:			'stepUp',
														name: 		'<code>stepUp()</code> method',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-stepup'
													}, {
														id:			'valueAsNumber',
														name: 		'<code>valueAsNumber()</code> method',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-valueasnumber'
													}
												]
									}, {
										id:		'range',
										name:	'<code>input type=range</code>',
										items:	[
													{
														id:			'element',
														name: 		'Minimal element support',
														required: true,
														value:		1,
														url:		'http://www.w3.org/TR/html5/forms.html#range-state-(type=range)'
													}, {
														id:			'ui',
														name: 		'Custom user-interface',
														required: true,
														value:		2
													}, {
														id:			'sanitization',
														name: 		'Value sanitization',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#value-sanitization-algorithm'
													}, {
														id:			'min',
														name: 		'<code>min</code> attribute',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-min'
													}, {
														id:			'max',
														name: 		'<code>max</code> attribute',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-max'
													}, {
														id:			'step',
														name: 		'<code>step</code> attribute',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#attr-input-step'
													}, {
														id:			'stepDown',
														name: 		'<code>stepDown()</code> method',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-stepdown'
													}, {
														id:			'stepUp',
														name: 		'<code>stepUp()</code> method',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-stepup'
													}, {
														id:			'valueAsNumber',
														name: 		'<code>valueAsNumber()</code> method',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-valueasnumber'
													}
												]
									}, {
										// KEEP
										id:		'file',
										name:	'<code>input type=file</code>',
										items:	[
													{
														id:			'element',
														name: 		'Minimal element support',
														required: true,
														url:		'http://www.w3.org/TR/html5/forms.html#file-upload-state-(type=file)'
													}, {
														id:			'files',
														name: 		'<code>files</code> property',
														required: true,
														value:		1,
														url:		'http://www.w3.org/TR/html5/forms.html#dom-input-files'
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
														// KEEP
														id:			'autofocus',
														name: 		'<code>autofocus</code> attribute',
														url:		'http://www.w3.org/TR/html5/forms.html#attr-fe-autofocus'
													}
												]
									}, {
										id:		'events',
										name:	'Events',
										value:	2,
										items:	[
													{
														id:			'oninput',
														name: 		'<code>oninput</code> event',
														url:		'http://www.w3.org/TR/html5/forms.html#event-input-input'
													}, {
														id:			'onchange',
														name: 		'<code>onchange</code> event',
														url:		'http://www.w3.org/TR/html5/forms.html#event-input-change'
													}, {
														id:			'oninvalid',
														name: 		'<code>oninvalid</code> event',
														url:		'http://www.w3.org/TR/html5/webappapis.html#events'
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
										// KEEP
										id:			'shadowdom',
										name: 		'Shadow DOM',
										status: 	'experimental',
										value:		{ maximum: 4, award: { OLD: 2 } },
										urls:		[
														[ 'w3c', 'http://w3c.github.io/webcomponents/spec/shadow/' ]
													]
									}, {
										// KEEP
										id:			'template',
										name: 		'HTML templates',
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html-templates/' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/scripting.html#the-template-element' ],
														[ 'wp', '/tutorials/webcomponents/htmlimports' ]
													]
									}, {
										// KEEP
										id:			'imports',
										name: 		'HTML imports',
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
		column:	'left',
		items:	[
					{
						id:		'input',
						name:	'Input',
						status:	'proposal',
						items:	[
									{
										// KEEP
										id:			'pointerevents',
										name: 		'Pointer Events',
										value:		{ maximum: 5, award: { PREFIX: 3 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/pointerevents/' ],
														[ 'wp',  '/concepts/Pointer_Events' ]
													]
									},
									{
										id: 		'dispatch',
										name: 		'DispatchEvent',
										required: true,
										value:		1,
										urls: 		[
														['whatwg', 'https://dom.spec.whatwg.org/#dom-eventtarget-dispatchevent']
													]
									},
									{
										id: 		'touch',
										name: 		'Touch event',
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
										required: true,
										value:		1,
										urls: 		[
														['w3c', 'https://w3c.github.io/uievents/#widl-KeyboardEvent-which']
													]
									},
									{
										id: 		'charCode',
										name: 		'KeyboardEvent charCode',
										required: true,
										value:		1,
										urls: 		[
														['w3c', 'https://w3c.github.io/uievents/#widl-KeyboardEvent-charCode']
													]
									},
									{
										id: 		'code',
										name: 		'KeyboardEvent code',
										value:		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/uievents/#widl-KeyboardEvent-code']
													]
									},
									{
										id: 		'location',
										name: 		'KeyboardEvent location',
										value:		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/uievents/#widl-KeyboardEvent-location']
													]
									},
									{
										id: 		'modifier',
										name: 		'KeyboardEvent getModifierState',
										value:		1,
										urls: 		[
														['w3c', 'http://www.w3.org/TR/uievents/#widl-KeyboardEvent-getModifierState']
													]
									},
									{
										id: 		'key',
										name: 		'KeyboardEvent key',
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
		column:	'right',
		items:	[
					{
						id:		'audio',
						name:	'Audio',
						status:	'stable',
						items:	[
									{
										// KEEP
										id:		'preload',
										name: 	'Preload in the background',
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
		column:	'right',
		items:	[
					{
						id:		'responsive',
						status:	'stable',
						name: 	'Responsive images',
						items:	[
									{
										// KEEP
										id:			'srcset',
										name: 		'<code>srcset</code> attribute',
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
										// KEEP
										id:		'context',
										name: 	'Canvas 2D graphics',
										required: true,
										value:	10,
										urls:   [
													[ 'w3c', 'http://www.w3.org/TR/2dcontext/' ],
													[ 'wp',  '/apis/canvas' ],
													[ 'mdn', '/Web/API/Canvas_API' ]
												]
									},

									'<strong>Drawing primitives</strong>',

									{
										// KEEP
										id:		'text',
										name: 	'Text support',
										value:	2,
										urls:	[
													[ 'w3c', 'http://www.w3.org/TR/2dcontext/#drawing-text-to-the-canvas' ],
													[ 'wp',  '/apis/canvas/CanvasRenderingContext2D/fillText' ]
												]
									}, {
										// KEEP
										id:		'blending',
										name: 	'Blending modes',
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
										// KEEP
										id:			'webgl',
										name: 		'WebGL',
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
										// KEEP
										id:			'webanimation',
										name: 		'Web Animations API',
										status:		'experimental',
										value:		3,
										urls:		[
														[ 'w3c', 'https://w3c.github.io/web-animations/' ]
													]
									}, {
										// KEEP
										id:			'requestAnimationFrame',
										name: 		'<code>window.requestAnimationFrame</code>',
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
		column:	'left',
		items:	[
					{
						id:		'communication',
						status:	'stable',
						name: 	'Communication',
						items:	[
									{
										// KEEP
										id:			'fetch',
										name: 		'Fetch',
										status:		'proposal',
										value:		6,
										urls:		[
														[ 'whatwg', 'https://fetch.spec.whatwg.org/' ],
														[ 'mdn', '/Web/API/Fetch_API' ]
													]
									},


									'<strong>XMLHttpRequest Level 2</strong>',

									{
										// KEEP
										id:			'xmlhttprequest2.upload',
										name: 		'Upload files',
										value:		5,
										url:    	'http://www.w3.org/TR/XMLHttpRequest2/#the-upload-attribute'
									}, {
										// KEEP
										id:			'xmlhttprequest2.response',
										name:		'Response type support',
										urls:		[
														[ 'mdn', '/Web/API/XMLHttpRequest' ]
													],
										items:		[
														{
															id:			'text',
															name: 		'Text response type',
															value:		1,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}, {
															id:			'document',
															name: 		'Document response type',
															value:		2,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}, {
															id:			'array',
															name: 		'<code>ArrayBuffer</code> response type',
															value:		2,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}, {
															id:			'blob',
															name: 		'<code>Blob</code> response type',
															value:		2,
															url:    	'http://www.w3.org/TR/XMLHttpRequest2/#dom-xmlhttprequest-responsetype'
														}
													]
									},

									'<strong>WebSocket</strong>',

									{
										// KEEP
										id:			'websocket.basic',
										name: 		'Basic socket communication',
										required: true,
										value:		{ maximum: 10, award: { PREFIX: 7, OLD: 5 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/websockets/' ],
														[ 'mdn', '/Web/API/WebSockets_API' ]
													]
									}, {
										// KEEP
										id:			'websocket.binary',
										name: 		'<code>ArrayBuffer</code> and <code>Blob</code> support',
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
										// KEEP
										id:		'webrtc',
										name: 	'WebRTC 1.0',
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
		column:	'left',
		items:	[
					{
						id:		'interaction',
						status:	'stable',
						name: 	'User interaction',
						items:	[
									'<strong>HTML editing</strong>',

									{
										// KEEP
										id:		'editing.elements',
										name:	'Editing elements',
										urls:	[
													[ 'mdn', '/Web/Guide/HTML/Content_Editable' ]
												],
										items:	[
													{
														id:			'contentEditable',
														name: 		'<code>contentEditable</code> attribute',
														value:		5,
														url:		'http://www.w3.org/TR/html5/editing.html#contenteditable'
													}, {
														id:			'isContentEditable',
														name: 		'<code>isContentEditable</code> property',
														value:		1,
														url:		'http://www.w3.org/TR/html5/editing.html#contenteditable'
													}
												]
									}, {
										// KEEP
										id:		'editing.documents',
										name:	'Editing documents',
										urls:	[
													[ 'mdn', '/Web/Guide/HTML/Content_Editable' ]
												],
										items:	[
													{
														id:			'designMode',
														name: 		'<code>designMode</code> attribute',
														value:		1,
														url:		'http://www.w3.org/TR/html5/editing.html#designMode'
													}
												]
									}, {
										// KEEP
										id:		'editing.selectors',
										name:	'CSS selectors',
										value:	{ maximum: 2, award: { PREFIX: 1 } },
										urls:	[
													[ 'mdn', '/Web/Guide/HTML/Content_Editable' ]
												],
										items:	[
													{
														id:			'read-write',
														name: 		'<code>:read-write</code> selector',
														required: true,
														url:		'http://www.w3.org/TR/html5/links.html#selector-read-write'
													}, {
														id:			'read-only',
														name: 		'<code>:read-only</code> selector',
														required: true,
														url:		'http://www.w3.org/TR/html5/links.html#selector-read-only'
													}
												]
									},
								]
					}, {
						id:		'performance',
						status:	'stable',
						name:	'Performance',
						items:	[
									'<strong>Workers</strong>',

									{
										// KEEP
										id:			'worker',
										name: 		'Web Workers',
										required: true,
										value:		10,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/workers/#dedicated-workers-and-the-worker-interface' ],
														[ 'mdn', '/Web/API/Web_Workers_API/Using_web_workers' ]
													]
									}, {
										// KEEP
										id:			'sharedWorker',
										name: 		'Shared Workers',
										required: true,
										value:		1,
										urls:    	[
														[ 'w3c', 'http://www.w3.org/TR/workers/#shared-workers-and-the-sharedworker-interface' ],
														[ 'mdn', '/Web/API/Web_Workers_API/Using_web_workers' ]
													]
									}
								]
					}, {
						id:		'security',
						status:	'stable',
						name:	'Security',
						items:	[
									{
										// KEEP
										id:			'crypto',
										name: 		'Web Cryptography API',

										status:		'proposal',
										value:		{ maximum: 5, award: { PREFIX: 3 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/WebCryptoAPI/' ]
													]
									}, {
										// KEEP
										id:			'csp10',
										name: 		'Content Security Policy 1',
										required: true,
										value:		3,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/CSP1/' ],
														[ 'mdn', '/Web/Security/CSP' ]
													]
									}, {
										// KEEP
										id:			'csp11',
										name: 		'Content Security Policy 2',
										status:		'proposal',
										value:		2,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/CSP2/' ],
														[ 'mdn', '/Web/Security/CSP' ]
													]
									}, {
										// KEEP
										id:			'cors',
										name: 		'Cross-Origin Resource Sharing',
										required: true,
										value:		4,
										urls:		[
														[ 'mdn', '/Web/HTTP/Access_control_CORS' ]
													]
									}, {
										// KEEP
										id:			'postMessage',
										name: 		'Cross-document messaging',
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
										// KEEP
										id:			'sandbox',
										name: 		'Sandboxed <code>iframe</code>',
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
		column:	'right',
		items:	[
					{
						id:		'offline',
						name: 	'Web applications',
						status:	'stable',
						items:	[
									'<strong>Offline resources</strong>',
									{
										// KEEP
										id:			'serviceWorkers',
										name: 		'Service Workers',
										required: true,
										status:		'proposal',
										value:		10,
										urls:		[
														[ 'w3c', 'https://www.w3.org/TR/service-workers/' ],
														[ 'mdn', '/Web/API/Service_Worker_API' ]
													]
									}, {
										// KEEP
										id:			'pushMessages',
										name: 		'Push Messages',
										status:		'proposal',
										value:		2,
										urls:		[
														[ 'w3c', 'https://w3c.github.io/push-api/' ],
														[ 'mdn', '/Web/API/Push_API' ]
													]
									}
								]
					}, {
						id:		'storage',
						name: 	'Storage',
						status:	'stable',
						items:	[
									'<strong>Key-value storage</strong>',

									{
										// KEEP
										id:			'sessionStorage',
										name: 		'Session Storage',
										required: true,
										value:		5,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/webstorage/#the-sessionstorage-attribute' ],
														[ 'wp',  '/apis/web-storage' ],
														[ 'mdn', '/Web/API/Web_Storage_API' ]
													]
									}, {
										// KEEP
										id:			'localStorage',
										name: 		'Local Storage',
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
										// KEEP
										id:			'sqlDatabase',
										name: 		'Web SQL Database',
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
										// KEEP
										id:			'fileReader',
										name: 		'Basic support for reading files',
										required: true,
										value:		7,
										urls:		[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#filereader-interface' ],
														[ 'wp',  '/apis/file' ],
														[ 'mdn', '/Using_files_from_web_applications' ]
													]
									}, {
										// KEEP
										id:			'fileReader.blob',
										name: 		'Create a <code>Blob</code> from a file',
										required: true,
										value:		2,
										urls:		[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#dfn-Blob' ],
													]
									}, {
										// KEEP
										id:			'fileReader.dataURL',
										name: 		'Create a Data URL from a <code>Blob</code>',
										required: true,
										value:		2,
										urls:    	[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#dfn-readAsDataURL' ],
													]
									}, {
										id:			'fileReader.arraybuffer',
										name: 		'Create an <code>ArrayBuffer</code> from a <code>Blob</code>',
										required: true,
										value:		2,
										urls:    	[
														[ 'w3c', 'http://dev.w3.org/2006/webapi/FileAPI/#dfn-readAsArrayBuffer' ],
													]
									}, {
										id:			'fileReader.objectURL',
										name: 		'Create a Blob URL from a <code>Blob</code>',
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
		column:	'right',
		items:	[
					{
						id:		'scripting',
						name: 	'Scripting',
						status:	'stable',
						items:	[
									'<strong>Script execution</strong>',

									{
										// KEEP
										id:			'async',
										name: 		'Asynchronous script execution',
										required: true,
										value:		3,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/scripting-1.html#attr-script-async' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/scripting.html#attr-script-async' ],
														[ 'mdn', '/Web/HTML/Element/script' ],
														[ 'wp',  '/html/elements/script' ]
													]
									}, {
										// KEEP
										id:			'defer',
										name: 		'Defered script execution',
										required: true,
										value:		1,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/scripting-1.html#attr-script-defer' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/scripting.html#attr-script-defer' ],
														[ 'mdn', '/Web/HTML/Element/script' ],
														[ 'wp',  '/html/elements/script' ]
													]
									}, {
										// KEEP
										id:			'onerror',
										name: 		'Runtime script error reporting',
										required: true,
										value:		1,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/webappapis.html#runtime-script-errors' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/webappapis.html#runtime-script-errors' ],
														[ 'mdn', '/Web/API/GlobalEventHandlers/onerror' ]
													]
									},

									'<strong>ECMAScript 5</strong>',

									{
										// KEEP
										id:			'es5.json',
										name: 		'JSON encoding and decoding',
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
										// KEEP
										id: 		'es6.class',
										name:   	'Classes',
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions' ],
													]
									}, {
										// KEEP
										id: 		'es6.arrow',
										name:   	'Arrow functions',
										value:		1,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions' ],
													]
									}, {
										// KEEP
										id: 		'es6.promises',
										name:   	'Promises',
										value:		3,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects' ],
														[ 'mdn', '/Web/JavaScript/Reference/Global_Objects/Promise' ]
													]
									}, {
										// KEEP
										id:			'es6.datatypes',
										name:		'Typed arrays',
										value:		2,
										status:		'stable',
										urls:		[
														[ 'khronos', 'http://www.khronos.org/registry/typedarray/specs/latest/' ],
														[ 'ecma', 'http://www.ecma-international.org/ecma-262/6.0/#sec-structured-data' ]
													]
									}, {
										// KEEP
										id: 		'es6.i18n',
										name:   	'Internationalization',
										value:		2,
										urls:		[
														[ 'ecma', 'http://www.ecma-international.org/ecma-402/1.0/' ],
														[ 'mdn', '/Web/JavaScript/Reference/Global_Objects/Intl' ]
													]
									},

									'<strong>Other API\'s</strong>',

									{
										// KEEP
										id:			'base64',
										name: 		'Base64 encoding and decoding',
										value:		1,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/webappapis.html#atob' ],
														[ 'whatwg', 'https://html.spec.whatwg.org/multipage/webappapis.html#atob' ],
														[ 'mdn', '/Web/API/WindowBase64/atob' ]
													]
									}, {
										// KEEP
										id: 		'mutationObserver',
										name:   	'Mutation Observer',
										required: true,
										value:		{ maximum: 2, award: { PREFIX: 1 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/dom/#mutation-observers' ],
														[ 'mdn', '/Web/API/MutationObserver' ]
													]
									}, {
										// KEEP
										id: 		'url',
										name:   	'URL API',
										required: true,
										value:		{ maximum: 2, award: { PREFIX: 1 } },
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/url/' ]
													]
									}, {
										// KEEP
										id: 		'encoding',
										name:   	'Encoding API',
										required: true,
										value:		2,
										urls:		[
														[ 'whatwg', 'https://encoding.spec.whatwg.org' ],
														[ 'mdn', '/Web/API/TextDecoder' ]
													]
									}
								]
					}, {
						id:		'other',
						name: 	'Other',
						status:	'stable',
						items:	[
									{
										id:			'history',
										name: 		'Session history',
										required: true,
										value:		4,
										urls:		[
														[ 'w3c', 'http://www.w3.org/TR/html5/browsers.html#the-history-interface' ],
														[ 'wp',  '/dom/History' ],
														[ 'mdn', '/Web/Guide/API/DOM/Manipulating_the_browser_history' ]
													]
									},
									{
										id: 		'hashchange',
										name:		'Hashchange event',
										required: true,
										value: 		4,
										urls: 		[
														['w3c', 'https://dev.w3.org/html5/spec-LC/history.html#event-hashchange']
													]
									},
									{
										id: 		'console',
										name:		'Console logging',
										required: true,
										value: 		4,
										urls: 		[
														['whatwg', 'https://console.spec.whatwg.org/']
													]
									}
								]
					}
				]
	}
]
