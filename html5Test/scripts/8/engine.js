
Test =
Test8 = (function () {

    var release = 8;

    var NO = 0,
        YES = 1,
        OLD = 2,
        BUGGY = 4,
        PREFIX = 8,
        BLOCKED = 16,
        DISABLED = 32,
        UNCONFIRMED = 64,
        UNKNOWN = 128,
        EXPERIMENTAL = 256;

    var blacklists = [];


    var testsuite = [

        /* doctype */

        function (results) {
            results.addItem({
                key: 'parsing.doctype',
                passed: document.compatMode == 'CSS1Compat'
            });
        },


        /* tokenizer */

        function (results) {
            var result = true;
            var e = document.createElement('div');

            try {
                e.innerHTML = "<div<div>";
                result &= e.firstChild && e.firstChild.nodeName == "DIV<DIV";

                e.innerHTML = "<div foo<bar=''>";
                result &= e.firstChild.attributes[0].nodeName == "foo<bar" || e.firstChild.attributes[0].name == "foo<bar";

                e.innerHTML = "<div foo=`bar`>";
                result &= e.firstChild.getAttribute("foo") == "`bar`";

                e.innerHTML = "<div \"foo=''>";
                result &= e.firstChild && (e.firstChild.attributes[0].nodeName == "\"foo" || e.firstChild.attributes[0].name == "\"foo");

                e.innerHTML = "<a href='\nbar'></a>";
                result &= e.firstChild && e.firstChild.getAttribute("href") == "\nbar";

                e.innerHTML = "<!DOCTYPE html>";
                result &= e.firstChild == null;

                e.innerHTML = "\u000D";
                result &= e.firstChild && e.firstChild.nodeValue == "\u000A";

                e.innerHTML = "&lang;&rang;";
                result &= e.firstChild.nodeValue == "\u27E8\u27E9";

                e.innerHTML = "&apos;";
                result &= e.firstChild.nodeValue == "'";

                e.innerHTML = "&ImaginaryI;";
                result &= e.firstChild.nodeValue == "\u2148";

                e.innerHTML = "&Kopf;";
                result &= e.firstChild.nodeValue == "\uD835\uDD42";

                e.innerHTML = "&notinva;";
                result &= e.firstChild.nodeValue == "\u2209";

                e.innerHTML = '<?import namespace="foo" implementation="#bar">';
                result &= e.firstChild && e.firstChild.nodeType == 8 && e.firstChild.nodeValue == '?import namespace="foo" implementation="#bar"';

                e.innerHTML = '<!--foo--bar-->';
                result &= e.firstChild && e.firstChild.nodeType == 8 && e.firstChild.nodeValue == 'foo--bar';

                e.innerHTML = '<![CDATA[x]]>';
                result &= e.firstChild && e.firstChild.nodeType == 8 && e.firstChild.nodeValue == '[CDATA[x]]';

                e.innerHTML = "<textarea><!--</textarea>--></textarea>";
                result &= e.firstChild && e.firstChild.firstChild && e.firstChild.firstChild.nodeValue == "<!--";

                e.innerHTML = "<textarea><!--</textarea>-->";
                result &= e.firstChild && e.firstChild.firstChild && e.firstChild.firstChild.nodeValue == "<!--";

                e.innerHTML = "<style><!--</style>--></style>";
                result &= e.firstChild && e.firstChild.firstChild && e.firstChild.firstChild.nodeValue == "<!--";

                e.innerHTML = "<style><!--</style>-->";
                result &= e.firstChild && e.firstChild.firstChild && e.firstChild.firstChild.nodeValue == "<!--";
            } catch (e) {
                result = false;
            }

            results.addItem({
                key: 'parsing.tokenizer',
                passed: result
            });
        },


        /* tree builder */

        function (results) {
            var result = true;
            var e = document.createElement('div');

            try {
                var h = document.createElement("html");
                h.innerHTML = "";
                result &= h.firstChild && h.firstChild.nodeName == "HEAD" && h.lastChild.nodeName == "BODY" && h.firstChild.nextSibling == h.lastChild;
            } catch (e) {
                result = false;
            }

            try {
                var t = document.createElement("table");
                t.innerHTML = "<col>";
                result &= t.firstChild && t.firstChild.nodeName == "COLGROUP";
            } catch (e) {
                result = false;
            }

            e.innerHTML = "<ul><li>A </li> <li>B</li></ul>";
            result &= e.firstChild && e.firstChild.firstChild && e.firstChild.firstChild.firstChild && e.firstChild.firstChild.firstChild.nodeValue == "A ";

            e.innerHTML = "<table><form><input type=hidden><input></form><div></div></table>";
            result &= e.firstChild &&
                e.firstChild.nodeName == "INPUT" &&
                e.firstChild.nextSibling &&
                e.firstChild.nextSibling.nodeName == "DIV" &&
                e.lastChild.nodeName == "TABLE" &&
                e.firstChild.nextSibling.nextSibling == e.lastChild &&
                e.lastChild.firstChild &&
                e.lastChild.firstChild.nodeName == "FORM" &&
                e.lastChild.firstChild.firstChild == null &&
                e.lastChild.lastChild.nodeName == "INPUT" &&
                e.lastChild.firstChild.nextSibling == e.lastChild.lastChild;

            e.innerHTML = "<i>A<b>B<p></i>C</b>D";
            result &= e.firstChild &&
                e.childNodes.length == 3 &&
                e.childNodes[0].nodeName == "I" &&
                e.childNodes[0].childNodes.length == 2 &&
                e.childNodes[0].childNodes[0].nodeValue == "A" &&
                e.childNodes[0].childNodes[1].nodeName == "B" &&
                e.childNodes[0].childNodes[1].childNodes.length == 1 &&
                e.childNodes[0].childNodes[1].childNodes[0].nodeValue == "B" &&
                e.childNodes[1].nodeName == "B" &&
                e.childNodes[1].firstChild == null &&
                e.childNodes[2].nodeName == "P" &&
                e.childNodes[2].childNodes.length == 2 &&
                e.childNodes[2].childNodes[0].nodeName == "B" &&
                e.childNodes[2].childNodes[0].childNodes.length == 2 &&
                e.childNodes[2].childNodes[0].childNodes[0].nodeName == "I" &&
                e.childNodes[2].childNodes[0].childNodes[0].firstChild == null &&
                e.childNodes[2].childNodes[0].childNodes[1].nodeValue == "C" &&
                e.childNodes[2].childNodes[1].nodeValue == "D";

            e.innerHTML = "<div></div>";
            result &= e.firstChild && "namespaceURI" in e.firstChild && e.firstChild.namespaceURI == "http://www.w3.org/1999/xhtml";

            results.addItem({
                key: 'parsing.tree',
                passed: result
            });
        },


        /* svg in html */

        function (results) {
            var e = document.createElement('div');
            e.innerHTML = '<svg></svg>';
            var passed = e.firstChild && "namespaceURI" in e.firstChild && e.firstChild.namespaceURI == 'http://www.w3.org/2000/svg';

            results.addItem({
                key: 'parsing.svg',
                passed: passed
            });
        },

        /* dataset */

        function (results) {
            var element = document.createElement('div');
            element.setAttribute('data-test', 'test');

            results.addItem({
                key: 'elements.dataset',
                passed: 'dataset' in element
            });
        },

        /* CustomEvent */

        function(results) {
            results.addItem({
                key: 'elements.customEv',
                passed: typeof CustomEvent == 'function'
            })
        },

        /* TextContent */

        function(results) {
            var el = document.createElement('div');
            el.textContent = 'some text';

            results.addItem({
                key: 'elements.text',
                passed: el.innerText == 'some text'
            });
        },

        /* addEventListener */

        function(results) {
            results.addItem({
                key: 'elements.eventListener',
                passed: typeof addEventListener == 'function'
            })
        },

        /* Matches */

        function(results) {
            results.addItem({
                key: 'elements.matches',
                passed: typeof Element.prototype.matches == 'function'
            })
        },

        /* ClassList */

        function(results) {
            var el = document.createElement('div');

            results.addItem({
                key: 'elements.classList',
                passed: typeof el.classList == 'object'
            })
        },

        /* getElementsByClassname */

        function(results) {
            results.addItem({
                key: 'elements.className',
                passed: typeof document.getElementsByClassName == 'function'
            })
        },

        /* getBoundingClientRect method */

        function(results) {
            var element = document.createElement('div');

            results.addItem({
                key: 'elements.rect',
                passed: typeof element.getBoundingClientRect == 'function'
            })
        },


        /* section, nav, article, header and footer */

        function (results) {
            var elements = 'section nav article aside header footer'.split(' ');

            for (var e = 0; e < elements.length; e++) {
                var passed = false;

                try {
                    var element = document.createElement(elements[e]);
                    document.body.appendChild(element);

                    try {
                        passed = element instanceof HTMLElement && !(element instanceof HTMLUnknownElement) && isBlock(element) && closesImplicitly(elements[e]);
                    } catch (error) {
                    }

                    document.body.removeChild(element);
                } catch (error) {
                }

                results.addItem({
                    key: 'elements.section.' + elements[e],
                    passed: passed,
                    value: 1
                });
            }

        },


        /* main, figure and figcaption */

        function (results) {
            var elements = 'main figure figcaption'.split(' ');

            for (var e = 0; e < elements.length; e++) {
                var passed = false;

                try {
                    var element = document.createElement(elements[e]);
                    document.body.appendChild(element);

                    try {
                        passed = element instanceof HTMLElement && !(element instanceof HTMLUnknownElement) && isBlock(element) && (elements[e] != 'figure' || closesImplicitly(elements[e]));
                    } catch (error) {
                    }

                    document.body.removeChild(element);
                } catch (error) {
                }

                results.addItem({
                    key: 'elements.grouping.' + elements[e],
                    passed: passed
                });
            }

        },


        /* ol grouping */

        function (results) {
            results.addItem({
                key: 'elements.grouping.ol',
                passed: 'reversed' in document.createElement('ol')
            });

        },


        /* a download */

        function (results) {
            results.addItem({
                key: 'elements.semantic.download',
                passed: 'download' in document.createElement('a')
            });
        },


        /* mark element */

        function (results) {
            var passed = false;

            try {
                var element = document.createElement('mark');
                document.body.appendChild(element);

                try {
                    passed = element instanceof HTMLElement && !(element instanceof HTMLUnknownElement) && (color = getStyle(element, 'background-color')) && (color != 'transparent');
                } catch (error) {
                }

                document.body.removeChild(element);
            } catch (error) {
            }

            results.addItem({
                key: 'elements.semantic.mark',
                passed: passed
            });
        },


        /* time element */

        function (results) {
            var passed = false;

            try {
                var element = document.createElement('time');

                try {
                    passed = typeof HTMLTimeElement != 'undefined' && element instanceof HTMLTimeElement;
                } catch (error) {
                }
            } catch (error) {
            }

            results.addItem({
                key: 'elements.semantic.time',
                passed: passed
            });
        },


        /* data element */

        function (results) {
            var passed = false;

            try {
                var element = document.createElement('data');

                try {
                    passed = typeof HTMLDataElement != 'undefined' && element instanceof HTMLDataElement;
                } catch (error) {
                }
            } catch (error) {
            }

            results.addItem({
                key: 'elements.semantic.data',
                passed: passed
            });
        },


        /* wbr element */

        function (results) {
            var passed = false;

            try {
                var element = document.createElement('wbr');

                try {
                    passed = element instanceof HTMLElement && !(element instanceof HTMLUnknownElement);
                } catch (error) {
                }
            } catch (error) {
            }

            results.addItem({
                key: 'elements.semantic.wbr',
                passed: passed
            });
        },


        /* dialog element */

        function (results) {
            var passed = false;

            try {
                var element = document.createElement('dialog');

                try {
                    passed = typeof HTMLDialogElement != 'undefined' && element instanceof HTMLDialogElement;
                } catch (error) {
                }
            } catch (error) {
            }

            results.addItem({
                key: 'elements.interactive.dialog',
                passed: passed
            });
        },


        /* hidden attribute */

        function (results) {
            results.addItem({
                key: 'elements.hidden',
                passed: 'hidden' in document.createElement('div')
            });
        },


        /* outerHTML property */

        function (results) {
            results.addItem({
                key: 'elements.dynamic.outerHTML',
                passed: 'outerHTML' in document.createElement('div')
            });
        },


        /* insertAdjacentHTML property */

        function (results) {
            results.addItem({
                key: 'elements.dynamic.insertAdjacentHTML',
                passed: 'insertAdjacentHTML' in document.createElement('div')
            });
        },


        /* input type=text */

        function (results) {
            var element = createInput('text');

            results.addItem({
                key: 'form.text.element',
                passed: element.type == 'text'
            });

            results.addItem({
                key: 'form.text.selection',
                passed: 'selectionDirection' in element
            });
        },


        /* input type=number, range */

        function (results) {
            var types = ['number', 'range'];
            for (var t = 0; t < types.length; t++) {
                var element = createInput(types[t]);

                element.value = "foobar";
                var sanitization = element.value != 'foobar';

                var validation = false;
                if ('validity' in element) {
                    validation = true;

                    element.min = 40;
                    element.max = 50;
                    element.value = 100;
                    validation &= !element.validity.valid

                    element.value = 42;
                    validation &= element.validity.valid
                }

                var minimal = element.type == types[t];

                results.addItem({
                    key: 'form.' + types[t] + '.element',
                    passed: minimal
                });

                results.addItem({
                    key: 'form.' + types[t] + '.ui',
                    passed: minimal && sanitization		// Testing UI reliably is not possible, so we assume if sanitization is support we also have a UI and use the blacklist to make corrections
                });

                results.addItem({
                    key: 'form.' + types[t] + '.sanitization',
                    passed: minimal && sanitization
                });

                if (types[t] != 'range') {
                    results.addItem({
                        key: 'form.' + types[t] + '.validation',
                        passed: minimal && validation
                    });
                }

                results.addItem({
                    key: 'form.' + types[t] + '.min',
                    passed: minimal && 'min' in element
                });

                results.addItem({
                    key: 'form.' + types[t] + '.max',
                    passed: minimal && 'max' in element
                });

                results.addItem({
                    key: 'form.' + types[t] + '.step',
                    passed: minimal && 'step' in element
                });

                results.addItem({
                    key: 'form.' + types[t] + '.stepDown',
                    passed: minimal && 'stepDown' in element
                });

                results.addItem({
                    key: 'form.' + types[t] + '.stepUp',
                    passed: minimal && 'stepUp' in element
                });

                results.addItem({
                    key: 'form.' + types[t] + '.valueAsNumber',
                    passed: minimal && 'valueAsNumber' in element
                });
            }
        },


        /* input type=file */

        function (results) {
            var element = createInput('file');

            results.addItem({
                key: 'form.file.element',
                passed: element.type == 'file'
            });

            results.addItem({
                key: 'form.file.files',
                passed: element.files && element.files instanceof FileList
            });

        },


        /* autofocus */

        function (results) {
            var element = document.createElement('input');

            results.addItem({
                key: 'form.other.autofocus',
                passed: !!('autofocus' in element)
            });
        },


        /* autocomplete, placeholder, multiple and dirName properties */

        function (results) {
            var element = document.createElement('input');

            var props = 'autocomplete placeholder multiple dirName'.split(' ');

            for (var p = 0; p < props.length; p++) {
                var prop = props[p].toLowerCase();
                results.addItem({
                    key: 'form.other.' + prop,
                    passed: !!(props[p] in element)
                });
            }
        },


        /* oninput, onchange and oninvalid events */

        function (results) {
            var inputItem = results.addItem({
                key: 'form.events.oninput',
                passed: isEventSupported('input')
            });

            var changeItem = results.addItem({
                key: 'form.events.onchange',
                passed: isEventSupported('change')
            });

            var invalidItem = results.addItem({
                key: 'form.events.oninvalid',
                passed: isEventSupported('invalid')
            });

            try {
                inputItem.startBackground();
                changeItem.startBackground();

                var event = document.createEvent("KeyboardEvent");
                if (event.initKeyEvent) {
                    event.initKeyEvent("keypress", false, true, null, false, false, false, false, null, 65);

                    var input = document.createElement('input');
                    input.style.position = 'fixed';
                    input.style.left = '-500px';
                    input.style.top = '0px';

                    document.body.appendChild(input);
                    input.addEventListener('input', function () {
                        inputItem.update({
                            'passed': true
                        });

                        inputItem.stopBackground();
                    }, true);

                    input.addEventListener('change', function () {
                        changeItem.update({
                            'passed': true
                        });

                        changeItem.stopBackground();
                    }, true);

                    input.focus();
                    input.dispatchEvent(event);
                    input.blur();

                    window.setTimeout(function () {
                        document.body.removeChild(input);

                        inputItem.stopBackground();
                        changeItem.stopBackground();
                    }, 1000);
                } else {
                    inputItem.stopBackground();
                    changeItem.stopBackground();
                }
            } catch (e) {
                inputItem.stopBackground();
                changeItem.stopBackground();
            }
        },


        /* microdata */

        function (results) {
            var container = document.createElement('div');
            container.innerHTML = '<div id="microdataItem" itemscope itemtype="http://example.net/user"><p>My name is <span id="microdataProperty" itemprop="name">Elizabeth</span>.</p></div>';
            document.body.appendChild(container);

            var item = document.getElementById('microdataItem');
            var property = document.getElementById('microdataProperty');
            var passed = true;

            // Check the element that contains the property
            passed = passed && !!('itemValue' in property) && property.itemValue == 'Elizabeth';

            // Check the element that is the item
            passed = passed && !!('properties' in item) && item.properties['name'][0].itemValue == 'Elizabeth';

            // Check the getItems method
            if (!!document.getItems) {
                var user = document.getItems('http://example.net/user')[0];
                passed = passed && user.properties['name'][0].itemValue == 'Elizabeth';
            }

            document.body.removeChild(container);

            results.addItem({
                key: 'microdata',
                passed: passed
            });
        },


        /* pointerevents */

        function (results) {
            results.addItem({
                key: 'input.pointerevents',
                passed: !!window.PointerEvent ? YES : !!window.webkitPointerEvent || !!window.mozPointerEvent || !!window.msPointerEvent || !!window.oPointerEvent ? YES | PREFIX : NO
            });
        },

        /* KeyboardEvents which */

        function(results) {
            var ev = new KeyboardEvent('keyup');

            results.addItem({
                key: 'input.which',
                passed: typeof ev.which == 'number'
            });
        },

        /* KeyboardEvent charCode */

        function(results) {
            var ev = new KeyboardEvent('keyup');

            results.addItem({
                key: 'input.charCode',
                passed: typeof ev.charCode == 'number'
            });
        },

        /* KeyboardEvent code */

        function(results) {
            var ev = new KeyboardEvent('keyup');

            results.addItem({
                key: 'input.code',
                passed: typeof ev.code == 'string'
            });
        },

        /* KeyboardEvent location */

        function(results) {
            var ev = new KeyboardEvent('keyup');

            results.addItem({
                key: 'input.location',
                passed: typeof ev.location == 'number'
            });
        },

        /* KeyboardEvent getModifierState */

        function(results) {
            var ev = new KeyboardEvent('keyup');

            results.addItem({
                key: 'input.modifier',
                passed: typeof ev.getModifierState == 'function'
            });
        },

        /* KeyboardEvent key */

        function(results) {
            var ev = new KeyboardEvent('keyup');

            results.addItem({
                key: 'input.key',
                passed: typeof ev.key == 'string'
            });
        },

        /* DispatchEvent */

        function(results) {
            var element = document.createElement('div');

            results.addItem({
                key: 'input.dispatch',
                passed: typeof element.dispatchEvent == 'function'
            })
        },

        /* TouchEvent */

        function(results) {
            results.addItem({
                key: 'input.touch',
                passed: typeof TouchEvent == 'function'
            })
        },


        /* fetch */

        function (results) {
            results.addItem({
                key: 'communication.fetch',
                passed: 'Promise' in window && typeof window.fetch === 'function' && window.fetch('') instanceof Promise
            });
        },


        /* xmlhttprequest upload */

        function (results) {
            results.addItem({
                key: 'communication.xmlhttprequest2.upload',
                passed: window.XMLHttpRequest && 'upload' in new XMLHttpRequest()
            });
        },


        /* xmlhttprequest response text */

        function (results) {
            var item = results.addItem({
                key: 'communication.xmlhttprequest2.response.text',
                passed: false
            });

            if (!window.XMLHttpRequest) return;

            var xhr = new window.XMLHttpRequest();

            if (typeof xhr.responseType == 'undefined') return;

            var done = false;

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && !done) {
                    done = true;
                    passed = false;

                    try {
                        passed = !!(this.responseText); // && this.responseText == '<title>&amp;&<</title>');
                    } catch (e) {
                    }

                    item.stopBackground();
                    item.update({
                        'passed': passed
                    });
                }
            }

            try {
                item.startBackground();
                xhr.open("GET", "/assets/detect.html?" + Math.random().toString(36).substr(2, 5));
                xhr.responseType = "text";
                xhr.send();
            } catch (e) {
                item.stopBackground();
            }
        },


        /* xmlhttprequest response document */

        function (results) {
            var item = results.addItem({
                key: 'communication.xmlhttprequest2.response.document',
                passed: false
            });

            if (!window.XMLHttpRequest) return;

            var xhr = new window.XMLHttpRequest();

            if (typeof xhr.responseType == 'undefined') return;

            var done = false;

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && !done) {
                    done = true;
                    passed = false;

                    try {
                        passed = !!(this.responseXML && this.responseXML.title && this.responseXML.title == "&&<");
                    } catch (e) {
                    }

                    item.stopBackground();
                    item.update({
                        'passed': passed
                    });
                }
            }

            try {
                item.startBackground();
                xhr.open("GET", "/assets/detect.html?" + Math.random().toString(36).substr(2, 5));
                xhr.responseType = "document";
                xhr.send();
            } catch (e) {
                item.stopBackground();
            }
        },


        /* xmlhttprequest response array */

        function (results) {
            var item = results.addItem({
                key: 'communication.xmlhttprequest2.response.array',
                passed: false
            });

            if (!window.XMLHttpRequest || !window.ArrayBuffer) return;

            var xhr = new window.XMLHttpRequest();

            if (typeof xhr.responseType == 'undefined') return;

            var done = false;

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && !done) {
                    done = true;
                    passed = false;

                    try {
                        passed = !!(this.response && this.response instanceof ArrayBuffer);
                    } catch (e) {
                    }

                    item.stopBackground();
                    item.update({
                        'passed': passed
                    });
                }
            }

            try {
                item.startBackground();
                xhr.open("GET", "/assets/detect.html?" + Math.random().toString(36).substr(2, 5));
                xhr.responseType = "arraybuffer";
                xhr.send();
            } catch (e) {
                item.stopBackground();
            }
        },


        /* xmlhttprequest response blob */

        function (results) {
            var item = results.addItem({
                key: 'communication.xmlhttprequest2.response.blob',
                passed: false
            });

            if (!window.XMLHttpRequest || !window.Blob) return;

            var xhr = new window.XMLHttpRequest();

            if (typeof xhr.responseType == 'undefined') return;

            var done = false;

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && !done) {
                    done = true;
                    passed = false;

                    try {
                        passed = !!(this.response && this.response instanceof Blob);
                    } catch (e) {
                    }

                    item.stopBackground();
                    item.update({
                        'passed': passed
                    });
                }
            }

            try {
                item.startBackground();
                xhr.open("GET", "/assets/detect.html?" + Math.random().toString(36).substr(2, 5));
                xhr.responseType = "blob";
                xhr.send();
            } catch (e) {
                item.stopBackground();
            }
        },


        /* websockets */

        function (results) {
            var websocket = window.WebSocket || window.MozWebSocket;
            var passed = 'WebSocket' in window ? YES : 'MozWebSocket' in window ? YES | PREFIX : NO;
            if (websocket && websocket.CLOSING !== 2) passed |= OLD;

            results.addItem({
                key: 'communication.websocket.basic',
                passed: passed
            });
        },


        /* binary websockets */

        function (results) {
            var passed = false;
            var protocol = 'https:' == location.protocol ? 'wss' : 'ws';

            if ("WebSocket" in window) {
                if ("binaryType" in WebSocket.prototype) {
                    passed = true;
                }
                else {
                    try {
                        passed = !!(new WebSocket(protocol + '://.').binaryType);
                    } catch (e) {
                    }
                }
            }

            results.addItem({
                key: 'communication.websocket.binary',
                passed: passed
            });
        },


        /* WebRTC */

        function (results) {
            results.addItem({
                key: 'rtc.webrtc',
                passed: !!window.RTCPeerConnection ? YES : !!window.webkitRTCPeerConnection || !!window.mozRTCPeerConnection || !!window.msRTCPeerConnection || !!window.oRTCPeerConnection ? YES | PREFIX : NO
            });
        },


        /* contentEditable */

        function (results) {
            results.addItem({
                key: 'interaction.editing.elements.contentEditable',
                passed: 'contentEditable' in document.createElement('div')
            });
        },


        /* isContentEditable */

        function (results) {
            results.addItem({
                key: 'interaction.editing.elements.isContentEditable',
                passed: 'isContentEditable' in document.createElement('div')
            });
        },


        /* designMode */

        function (results) {
            results.addItem({
                key: 'interaction.editing.documents.designMode',
                passed: 'designMode' in document
            });
        },


        /* read-write and read-only selectors */

        function (results) {
            var selectors = "read-write read-only".split(" ");
            var passed = [NO | UNKNOWN, NO | UNKNOWN];

            if ('querySelector' in document) {
                var element = document.createElement('div');
                element.id = 'testDivElement';
                element.contentEditable = true;
                document.body.appendChild(element);

                var nested = document.createElement('div');
                nested.id = 'testDivNested';
                nested.contentEditable = false;
                element.appendChild(nested);

                try {
                    passed[0] = document.querySelector("#testDivElement:read-write") == element;
                } catch (e) {
                    passed[0] = NO;

                    try {
                        passed[0] = document.querySelector("#testDivElement:-moz-read-write") == element ? YES | PREFIX : NO;
                    } catch (e) {
                    }
                }

                try {
                    passed[1] = document.querySelector("#testDivNested:read-only") == nested;
                } catch (e) {
                    passed[1] = NO;

                    try {
                        passed[1] = document.querySelector("#testDivNested:-moz-read-only") == nested ? YES | PREFIX : NO;
                    } catch (e) {
                    }
                }

                document.body.removeChild(element);
            }

            for (var i = 0; i < selectors.length; i++) {
                results.addItem({
                    key: 'interaction.editing.selectors.' + selectors[i],
                    passed: passed[i]
                });
            }
        },


        /* webworker */

        function (results) {
            results.addItem({
                key: 'performance.worker',
                passed: !!window.Worker
            });
        },


        /* sharedworker */

        function (results) {
            results.addItem({
                key: 'performance.sharedWorker',
                passed: !!window.SharedWorker
            });
        },


        /* crypto */

        function (results) {
            var passed = NO;
            try {
                var crypto = window.crypto || window.webkitCrypto || window.mozCrypto || window.msCrypto || window.oCrypto;
                var available = window.crypto ? YES : window.mozCrypto || window.msCrypto || window.oCrypto ? YES | PREFIX : NO;
                passed = !!crypto && 'subtle' in crypto ? available : !!crypto && 'webkitSubtle' in crypto ? YES | PREFIX : NO;
            } catch (e) {
            }

            results.addItem({
                key: 'security.crypto',
                passed: passed
            });
        },


        /* csp 1.0 */

        function (results) {
            var passed = false;

            if (navigator.webdriver && Browsers.isBrowser('Firefox', '>', 22)) {
                passed = YES | DISABLED;
            }

            var item = results.addItem({
                key: 'security.csp10',
                passed: passed
            });

            window.addEventListener('message', function(e) {
                if (e.data === 'csp10:passed') {
                    item.update({
                        passed: true
                    });

                    item.stopBackground();
                }

                if (e.data === 'csp10:failed') {
                    item.stopBackground();
                }
            }, false);

            item.startBackground();

            var iframe = document.createElement('iframe');
            iframe.src = '/assets/csp.html';
            iframe.style.visibility = 'hidden';
            document.body.appendChild(iframe);

            window.setTimeout(function () {
                item.stopBackground();
                document.body.removeChild(iframe);
            }, 1000);
        },


        /* csp 1.1 */

        function (results) {
            results.addItem({
                key: 'security.csp11',
                passed: 'SecurityPolicyViolationEvent' in window
            });
        },


        /* cors */

        function (results) {
            results.addItem({
                key: 'security.cors',
                passed: window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()
            });
        },


        /* postMessage */

        function (results) {
            results.addItem({
                key: 'security.postMessage',
                passed: !!window.postMessage
            });
        },


        /* sandboxed iframe */

        function (results) {
            results.addItem({
                key: 'security.sandbox',
                passed: 'sandbox' in document.createElement('iframe')
            });
        },


        /* history */

        function (results) {
            results.addItem({
                key: 'other.history',
                passed: !!(window.history && history.pushState)
            });
        },

        /* hashchange */

        function(results) {
            results.addItem({
                key: 'other.hashchange',
                passed: !!(window.location.hash)
            });
        },

        /* console logging */

        function(results) {
            results.addItem({
                key: 'other.console',
                passed: !!(window.console)
            });
        },


        /* audio element */

        function (results) {
            var element = document.createElement('audio');

            /* preload property */

            results.addItem({
                key: 'audio.preload',
                passed: 'preload' in element
            });
        },


        /* srcset attribute */

        function (results) {
            results.addItem({
                key: 'responsive.srcset',
                passed: 'srcset' in document.createElement('img')
            });
        },


        /* canvas element and 2d context */

        function (results) {
            var canvas = document.createElement('canvas');

            results.addItem({
                key: 'canvas.context',
                passed: !!(canvas.getContext && typeof CanvasRenderingContext2D != 'undefined' && canvas.getContext('2d') instanceof CanvasRenderingContext2D)
            });
        },


        /* canvas drawing functions */

        function (results) {
            var canvas = document.createElement('canvas');

            /* text support */

            var passed = false;
            if (canvas.getContext) {
                try {
                    passed = typeof canvas.getContext('2d').fillText == 'function';
                }
                catch (e) {
                }
            }

            results.addItem({
                key: 'canvas.text',
                passed: passed
            });
        },


        /* blending support */

        function (results) {
            var canvas = document.createElement('canvas');

            var passed = false;

            if (canvas.getContext) {
                canvas.width = 1;
                canvas.height = 1;

                try {
                    var ctx = canvas.getContext('2d');
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(0, 0, 1, 1);
                    ctx.globalCompositeOperation = 'screen';
                    ctx.fillStyle = '#000';
                    ctx.fillRect(0, 0, 1, 1);

                    var data = ctx.getImageData(0, 0, 1, 1);

                    passed = ctx.globalCompositeOperation == 'screen' && data.data[0] == 255;
                }
                catch (e) {
                }
            }

            results.addItem({
                key: 'canvas.blending',
                passed: passed
            });
        },


        /* webgl */

        function (results) {
            var element = document.createElement('canvas');

            var passed = 'WebGLRenderingContext' in window;

            var contexts = ['webgl', 'experimental-webgl', 'ms-webgl', 'moz-webgl', 'opera-3d', 'webkit-3d', 'ms-3d', '3d'];
            var context = '';
            var enabled = false;

            for (var b = -1, len = contexts.length; ++b < len;) {
                try {
                    if (element.getContext(contexts[b])) {
                        context = contexts[b];
                        enabled = true;
                        break;
                    };
                } catch (e) { }
            }

            results.addItem({
                key: '3d.webgl',
                passed: enabled ? (context == 'webgl' ? YES : (context == 'experimental-webgl' ? YES | EXPERIMENTAL : YES | PREFIX)) : (passed ? YES | DISABLED : NO)
            });
        },


        /* animation api */

        function (results) {
            results.addItem({
                key: 'animation.webanimation',
                passed: 'animate' in document.createElement('div')
            });
        },


        /* requestAnimationFrame */

        function (results) {
            results.addItem({
                key: 'animation.requestAnimationFrame',
                passed: !!window.requestAnimationFrame ? YES : !!window.webkitRequestAnimationFrame || !!window.mozRequestAnimationFrame || !!window.msRequestAnimationFrame || !!window.oRequestAnimationFrame ? YES | PREFIX : NO
            });
        },


        /* serviceWorker */

        function (results) {
            results.addItem({
                key: 'offline.serviceWorkers',
                passed: !!window.navigator.serviceWorker
            });
        },


        /* serviceWorker */

        function (results) {
            results.addItem({
                key: 'offline.pushMessages',
                passed: 'PushManager' in window && 'PushSubscription' in window
            });
        },


        /* session storage */

        function (results) {
            results.addItem({
                key: 'storage.sessionStorage',
                passed: 'sessionStorage' in window && window.sessionStorage != null
            });

        },


        /* local storage */

        function (results) {
            var passed = false;
            try {
                passed = 'localStorage' in window && window.localStorage != null
            } catch (e) {
                /* If we get a security exception we know the feature exists, but cookies are disabled */
                if (e.name == 'NS_ERROR_DOM_SECURITY_ERR' || e.name == 'SecurityError') {
                    passed = YES | DISABLED;
                }
            }

            results.addItem({
                key: 'storage.localStorage',
                passed: passed
            });
        },


        /* websql */

        function (results) {
            results.addItem({
                key: 'storage.sqlDatabase',
                passed: !!window.openDatabase
            });
        },


        /* file reader */

        function (results) {
            results.addItem({
                key: 'files.fileReader',
                passed: 'FileReader' in window
            });

            /* file reader as blob */

            results.addItem({
                key: 'files.fileReader.blob',
                passed: 'Blob' in window
            });

            /* file reader as data url */

            results.addItem({
                key: 'files.fileReader.dataURL',
                passed: 'FileReader' in window && 'readAsDataURL' in (new FileReader())
            });

            /* file reader as array buffer */

            results.addItem({
                key: 'files.fileReader.arraybuffer',
                passed: 'FileReader' in window && 'readAsArrayBuffer' in (new FileReader())
            });

            /* file reader as object url */

            results.addItem({
                key: 'files.fileReader.objectURL',
                passed: 'URL' in window && 'createObjectURL' in URL
            });
        },


        /* shadow dom */

        function (results) {
            results.addItem({
                key: 'components.shadowdom',
                passed: 'attachShadow' in document.createElement('div') ? YES : 'createShadowRoot' in document.createElement('div') || 'webkitCreateShadowRoot' in document.createElement('div') ? YES | OLD : NO
            });
        },


        /* templates */

        function (results) {
            var passed = false;

            try {
                passed = 'content' in document.createElement('template');
            } catch (error) {
            }

            results.addItem({
                key: 'components.template',
                passed: passed
            });
        },


        /* html imports */

        function (results) {
            results.addItem({
                key: 'components.imports',
                passed: 'import' in document.createElement('link')
            });
        },


        /* async scripts */

        function (results) {
            results.addItem({
                key: 'scripting.async',
                passed: 'async' in document.createElement('script')
            });
        },


        /* deferred scripts */

        function (results) {
            results.addItem({
                key: 'scripting.defer',
                passed: 'defer' in document.createElement('script')
            });
        },


        /* script error reporting */

        function (results) {
            results.addItem({
                key: 'scripting.onerror',
                passed: isEventSupported('error')
            });
        },


        /* base64 encoding and decoding */

        function (results) {
            results.addItem({
                key: 'scripting.base64',
                passed: 'btoa' in window && 'atob' in window
            });
        },


        /* mutation observer */

        function (results) {
            results.addItem({
                key: 'scripting.mutationObserver',
                passed: 'MutationObserver' in window ? YES : 'WebKitMutationObserver' in window || 'MozMutationObserver' in window || 'oMutationObserver' in window || 'msMutationObserver' in window ? YES | PREFIX : NO
            });
        },


        /* url api */

        function (results) {
            results.addItem({
                key: 'scripting.url',
                passed: 'URL' in window ? YES : 'WebKitURL' in window || 'MozURL' in window || 'oURL' in window || 'msURL' in window ? YES | PREFIX : NO
            });
        },


        /* text encoding api */

        function (results) {
            results.addItem({
                key: 'scripting.encoding',
                passed: 'TextEncoder' in window && 'TextDecoder' in window ? YES : NO
            });
        },


        /* json encoding and decoding */

        function (results) {
            results.addItem({
                key: 'scripting.es5.json',
                passed: 'JSON' in window && 'parse' in JSON
            });
        },


        /* array functions */

        function (results) {
            var passed = !!(Array.prototype &&
                Array.prototype.every &&
                Array.prototype.filter &&
                Array.prototype.forEach &&
                Array.prototype.indexOf &&
                Array.prototype.lastIndexOf &&
                Array.prototype.map &&
                Array.prototype.some &&
                Array.prototype.reduce &&
                Array.prototype.reduceRight &&
                Array.isArray)

            results.addItem({
                key: 'scripting.es5.array',
                passed: passed ? YES : NO
            });
        },


        /* date functions */

        function (results) {
            var canParseISODate = false;

            try {
                canParseISODate = !!Date.parse('2013-04-12T06:06:37.307Z');
            } catch (e) {
            }

            var passed = !!(Date.now &&
                Date.prototype &&
                Date.prototype.toISOString &&
                Date.prototype.toJSON &&
                canParseISODate);

            results.addItem({
                key: 'scripting.es5.date',
                passed: passed ? YES : NO
            });
        },


        /* function functions */

        function (results) {
            var passed = !!(Function.prototype && Function.prototype.bind);

            results.addItem({
                key: 'scripting.es5.function',
                passed: passed ? YES : NO
            });
        },


        /* object functions */

        function (results) {
            var passed = !!(Object.keys &&
                Object.create &&
                Object.getPrototypeOf &&
                Object.getOwnPropertyNames &&
                Object.isSealed &&
                Object.isFrozen &&
                Object.isExtensible &&
                Object.getOwnPropertyDescriptor &&
                Object.defineProperty &&
                Object.defineProperties &&
                Object.seal &&
                Object.freeze &&
                Object.preventExtensions);

            results.addItem({
                key: 'scripting.es5.object',
                passed: passed ? YES : NO
            });
        },


        /* strict */

        function (results) {
            var passed = (function() {'use strict'; return !this; })()

            results.addItem({
                key: 'scripting.es5.strict',
                passed: passed ? YES : NO
            });
        },


        /* string functions */

        function (results) {
            var passed = !!(String.prototype && String.prototype.trim)

            results.addItem({
                key: 'scripting.es5.string',
                passed: passed ? YES : NO
            });
        },


        /* internationalisation api */

        function (results) {
            results.addItem({
                key: 'scripting.es6.i18n',
                passed: 'Intl' in window ? YES : NO
            });
        },


        /* promises */

        function (results) {
            var passed = 'Promise' in window ? YES | OLD : NO;

            if ('Promise' in window &&
                'resolve' in window.Promise &&
                'reject' in window.Promise &&
                'all' in window.Promise &&
                'race' in window.Promise &&
                (function () {
                    var resolve;
                    new window.Promise(function (r) { resolve = r; });
                    return typeof resolve === 'function';
                } ())) {
                passed = YES;
            }

            results.addItem({
                key: 'scripting.es6.promises',
                passed: passed
            });
        },


        /* const */

        function (results) {
            var passed = YES;

            try {
                eval('const a = 1');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.const',
                passed: passed
            });
        },


        /* let */

        function (results) {
            var passed = YES;

            try {
                eval('let a = 1');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.let',
                passed: passed
            });
        },


        /* arrow functions */

        function (results) {
            var passed = YES;

            try {
                eval('()=>{}');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.arrow',
                passed: passed
            });
        },


        /* classes */

        function (results) {
            var passed = YES;

            try {
                eval('class Something {}');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.class',
                passed: passed
            });
        },


        /* generators */

        function (results) {
            var passed = YES;

            try {
                eval('function* test() {}');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.generators',
                passed: passed
            });
        },


        /* template strings */

        function (results) {
            var passed = YES;

            try {
                eval('var a = `a`');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.template',
                passed: passed
            });
        },


        /* destructuring */

        function (results) {
            var passed = YES;

            try {
                eval('var { first: f, last: l } = { first: "Jane", last: "Doe" }');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.destructuring',
                passed: passed
            });
        },


        /* spread */

        function (results) {
            var passed = YES;

            try {
                eval('Math.max(...[ 5, 10 ])');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.spread',
                passed: passed
            });
        },


        /* default params */

        function (results) {
            var passed = YES;

            try {
                eval('function test (one = 1) {}');
            } catch (e) {
                passed = NO;
            }

            results.addItem({
                key: 'scripting.es6.defaultparams',
                passed: passed
            });
        },


        /* symbols */

        function (results) {
            results.addItem({
                key: 'scripting.es6.symbol',
                passed: typeof Symbol !== 'undefined' ? YES : NO
            });
        },


        /* collections */

        function (results) {
            var passed = typeof Map !== 'undefined' &&
                typeof WeakMap !== 'undefined' &&
                typeof Set !== 'undefined' &&
                typeof WeakSet !== 'undefined';

            results.addItem({
                key: 'scripting.es6.collections',
                passed: passed ? YES : NO
            });
        },


        /* array functions */

        function (results) {
            var passed = typeof Array.prototype.find !== 'undefined' &&
                typeof Array.prototype.findIndex !== 'undefined' &&
                typeof Array.from !== 'undefined' &&
                typeof Array.of !== 'undefined' &&
                typeof Array.prototype.entries !== 'undefined' &&
                typeof Array.prototype.keys !== 'undefined' &&
                typeof Array.prototype.copyWithin !== 'undefined' &&
                typeof Array.prototype.fill !== 'undefined';

            results.addItem({
                key: 'scripting.es6.array',
                passed: passed ? YES : NO
            });
        },


        /* string functions */

        function (results) {
            var passed = typeof String.fromCodePoint !== 'undefined' &&
                typeof String.raw !== 'undefined' &&
                typeof String.prototype.codePointAt !== 'undefined' &&
                typeof String.prototype.repeat !== 'undefined' &&
                typeof String.prototype.startsWith !== 'undefined' &&
                typeof String.prototype.endsWith !== 'undefined' &&
                typeof String.prototype.includes !== 'undefined';

            results.addItem({
                key: 'scripting.es6.string',
                passed: passed ? YES : NO
            });
        },


        /* number functions */

        function (results) {
            var passed = !!(Number.isFinite &&
                Number.isInteger &&
                Number.isSafeInteger &&
                Number.isNaN &&
                Number.parseInt &&
                Number.parseFloat &&
                Number.isInteger(Number.MAX_SAFE_INTEGER) &&
                Number.isInteger(Number.MIN_SAFE_INTEGER) &&
                Number.isFinite(Number.EPSILON));

            results.addItem({
                key: 'scripting.es6.number',
                passed: passed ? YES : NO
            });
        },


        /* object functions */

        function (results) {
            var passed = !!(Object.assign &&
                Object.is &&
                Object.setPrototypeOf);

            results.addItem({
                key: 'scripting.es6.object',
                passed: passed ? YES : NO
            });
        },


        /* math functions */

        function (results) {
            var passed = !!(Math &&
                Math.clz32 &&
                Math.cbrt &&
                Math.imul &&
                Math.sign &&
                Math.log10 &&
                Math.log2 &&
                Math.log1p &&
                Math.expm1 &&
                Math.cosh &&
                Math.sinh &&
                Math.tanh &&
                Math.acosh &&
                Math.asinh &&
                Math.atanh &&
                Math.hypot &&
                Math.trunc &&
                Math.fround);

            results.addItem({
                key: 'scripting.es6.math',
                passed: passed ? YES : NO
            });
        },


        /* datatypes */

        function (results) {
            results.addItem({
                key: 'scripting.es6.datatypes.ArrayBuffer',
                passed: typeof ArrayBuffer != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Int8Array',
                passed: typeof Int8Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Uint8Array',
                passed: typeof Uint8Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Uint8ClampedArray',
                passed: typeof Uint8ClampedArray != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Int16Array',
                passed: typeof Int16Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Uint16Array',
                passed: typeof Uint16Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Int32Array',
                passed: typeof Int32Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Uint32Array',
                passed: typeof Uint32Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Float32Array',
                passed: typeof Float32Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.Float64Array',
                passed: typeof Float64Array != 'undefined'
            });

            results.addItem({
                key: 'scripting.es6.datatypes.DataView',
                passed: typeof DataView != 'undefined'
            });


            var passed = typeof ArrayBuffer != 'undefined' &&
                typeof Int8Array != 'undefined' &&
                typeof Uint8Array != 'undefined' &&
                typeof Uint8ClampedArray != 'undefined' &&
                typeof Int16Array != 'undefined' &&
                typeof Uint16Array != 'undefined' &&
                typeof Int32Array != 'undefined' &&
                typeof Uint32Array != 'undefined' &&
                typeof Float32Array != 'undefined' &&
                typeof Float64Array != 'undefined' &&
                typeof DataView != 'undefined';

            results.addItem({
                key: 'scripting.es6.datatypes',
                passed: passed ? YES : NO
            });
        },
    ];




    /* Helper functions */

    var isEventSupported = (function () {
        var TAGNAMES = {
            'select': 'input', 'change': 'input', 'input': 'input',
            'submit': 'form', 'reset': 'form', 'forminput': 'form', 'formchange': 'form',
            'error': 'img', 'load': 'img', 'abort': 'img'
        }

        function isEventSupported(eventName, element) {
            element = element || document.createElement(TAGNAMES[eventName] || 'div');
            eventName = 'on' + eventName;

            var isSupported = (eventName in element);

            if (!isSupported) {
                if (!element.setAttribute) {
                    element = document.createElement('div');
                }
                if (element.setAttribute && element.removeAttribute) {
                    element.setAttribute(eventName, '');
                    isSupported = typeof element[eventName] == 'function';

                    if (typeof element[eventName] != 'undefined') {
                        element[eventName] = void 0;
                    }
                    element.removeAttribute(eventName);
                }
            }

            element = null;
            return isSupported;
        }

        return isEventSupported;
    })();

    var log = function () {
        if (typeof console != 'undefined') {
            console.log.apply(console, arguments);
        }
    };

    var createInput = function (type) {
        var field = document.createElement('input');

        try {
            field.setAttribute('type', type);
        } catch (e) {
        }

        return field;
    };

    var canPlayType = function (element, type) {
		/*
			There is a bug in iOS 4.1 or earlier where probably and maybe are switched around.
			This bug was reported and fixed in iOS 4.2
		*/

        if (Browsers.isOs('iOS', '<', '4.2'))
            return element.canPlayType(type) == 'probably' || element.canPlayType(type) == 'maybe';
        else
            return element.canPlayType(type) == 'probably';
    };

    var closesImplicitly = function (name) {
        var foo = document.createElement('div');
        foo.innerHTML = '<p><' + name + '></' + name + '>';
        return foo.childNodes.length == 2;
    };

    var getStyle = function (element, name) {
        function camelCase(str) {
            return str.replace(/-\D/g, function (match) {
                return match.charAt(1).toUpperCase()
            })
        }

        if (element.style[name]) {
            return element.style[name];
        } else if (element.currentStyle) {
            return element.currentStyle[camelCase(name)];
        }
        else if (document.defaultView && document.defaultView.getComputedStyle) {
            s = document.defaultView.getComputedStyle(element, "");
            return s && s.getPropertyValue(name);
        } else {
            return null;
        }
    };

    var isBlock = function (element) {
        return getStyle(element, 'display') == 'block';
    };

    var isHidden = function (element) {
        return getStyle(element, 'display') == 'none';
    };




    /* Classes */

    function List(parent) { this.initialize(parent); }
    List.prototype = {
        initialize: function (parent) {
            this.parent = parent;
            this.items = [];
        },

        addItem: function (data) {
            var i = new Item(this, data);
            this.items.push(i);
            return i;
        },

        toString: function () {
            var value = [];

            for (var i = 0; i < this.items.length; i++) {
                if (typeof this.items[i].data.passed != 'undefined') value.push(this.items[i].data.key + '=' + (+this.items[i].data.passed));
            }

            return value.join(',');
        }
    };

    function Item(list, data) { this.initialize(list, data); }
    Item.prototype = {
        initialize: function (list, data) {
            this.list = list;
            this.data = data;

            if (typeof this.data.passed == 'undefined') this.data.passed = false;

            if (this.data.passed) {
                var blacklist = this.isOnBlacklist();
                if (blacklist) {
                    this.data.passed = blacklist;
                }
            }
        },

        update: function (data) {
            for (var key in data) {
                this.data[key] = data[key];
            }

            if (typeof this.data.passed == 'undefined') this.data.passed = false;

            if (this.data.passed) {
                var blacklist = this.isOnBlacklist();
                if (blacklist) {
                    this.data.passed = blacklist;
                }
            }
        },

        isOnBlacklist: function () {
            var part = '';
            var parts = this.data.key.replace(/\-/g, '.').split('.');

            for (var i = 0; i < parts.length; i++) {
                part += (i == 0 ? '' : '.') + parts[i];

                for (var k = 0; k < blacklists.length; k++) {
                    if (typeof blacklists[k][1][part] != 'undefined') {
                        if (blacklists[k][1][part]) {
                            log('BLOCKED: ' + part + ' is on the blacklist for this browser!');
                            return blacklists[k][0];
                        }
                    }
                }
            }

            return false;
        },

        startBackground: function () {
            this.list.parent.startBackground(this.data.key);
        },

        stopBackground: function () {
            this.list.parent.stopBackground(this.data.key);
        },

        getGlobalCallback: function(callback) {
            var uniqueid = (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1);

            var that = this;
            window['callback_' + uniqueid] = function() {
                callback.apply(that, arguments);
            };

            return 'callback_' + uniqueid;
        }
    };

    function Runner(callback, error) { this.initialize(callback, error); }
    Runner.prototype = {
        initialize: function (callback, error) {
            blacklists = [
                [
                    BLOCKED,
                    {
                        'form.file': Browsers.isDevice('Xbox 360') || Browsers.isDevice('Xbox One') || Browsers.isDevice('Playstation 4') || Browsers.isOs('Windows Phone', '<', '8.1') || Browsers.isOs('iOS', '<', '6') || Browsers.isOs('Android', '<', '2.2'),
                        'form.date.ui': Browsers.isBrowser('Sogou Explorer') || Browsers.isBrowser('Maxthon', '<', '4.0.5') || (Browsers.isBrowser('UC Browser', '<', '8.6') && Browsers.isType('mobile', 'tablet')),
                        'form.month.ui': Browsers.isBrowser('Sogou Explorer') || Browsers.isBrowser('Maxthon', '<', '4.0.5') || (Browsers.isBrowser('UC Browser', '<', '8.6') && Browsers.isType('mobile', 'tablet')),
                        'form.week.ui': Browsers.isBrowser('Sogou Explorer') || Browsers.isBrowser('Maxthon', '<', '4.0.5') || (Browsers.isBrowser('UC Browser', '<', '8.6') && Browsers.isType('mobile', 'tablet')),
                        'form.time.ui': Browsers.isBrowser('Sogou Explorer') || Browsers.isBrowser('Maxthon', '<', '4.0.5') || (Browsers.isBrowser('UC Browser', '<', '8.6') && Browsers.isType('mobile', 'tablet')),
                        'form.datetime-local.ui': Browsers.isBrowser('Sogou Explorer') || Browsers.isBrowser('Maxthon', '<', '4.0.5') || (Browsers.isBrowser('UC Browser', '<', '8.6') && Browsers.isType('mobile', 'tablet')),
                        'form.color.ui': Browsers.isBrowser('Sogou Explorer') || (Browsers.isBrowser('UC Browser', '<', '9.8') && Browsers.isType('mobile', 'tablet')),
                        'form.range.ui': (Browsers.isBrowser('UC Browser', '<', '9.8') && Browsers.isType('mobile', 'tablet')),
                        'form.progress.element': Browsers.isBrowser('Baidu Browser'),
                        'files.fileSystem': Browsers.isOs('BlackBerry Tablet OS'),
                        'input.getUserMedia': Browsers.isDevice('webOS TV') || Browsers.isBrowser('Baidu Browser') || Browsers.isBrowser('Sogou Explorer') || (Browsers.isBrowser('UC Browser', '<', '9.8') && Browsers.isType('mobile', 'tablet')) || Browsers.isBrowser('Dolphin') || Browsers.isBrowser('Safari', '=', '9'),
                        'input.getGamepads': Browsers.isDevice('webOS TV') || Browsers.isDevice('Playstation 4') || Browsers.isDevice('Wii U'),
                        'location.geolocation': Browsers.isDevice('webOS TV') || Browsers.isDevice('Xbox One') || Browsers.isBrowser('Baidu Browser') || Browsers.isOs('Google TV'),
                        'location.orientation': Browsers.isBrowser('Baidu Browser'),
                        'output.notifications': Browsers.isBrowser('Opera', '=', '18') || Browsers.isBrowser('Baidu Browser') || Browsers.isBrowser('Sogou Explorer'),
                        'output.requestFullScreen': Browsers.isBrowser('Sogou Explorer') || Browsers.isOs('BlackBerry Tablet OS') || Browsers.isOs('BlackBerry OS'),
                        'video.subtitle': Browsers.isBrowser('Baidu Browser') || Browsers.isBrowser('Sogou Explorer'),
                        '3d.webgl': Browsers.isBrowser('Baidu Browser')
                    }
                ],

                [
                    DISABLED,
                    {
                        'elements.semantic.ping': Browsers.isBrowser('Firefox') || Browsers.isBrowser('Firefox Mobile')
                    }
                ],

                [
                    UNCONFIRMED,
                    {
                        'interaction.dragdrop': !(Browsers.isType('desktop') ||
                            Browsers.isType('mobile', 'tablet', 'media') && (
                                Browsers.isBrowser('Opera') && Browsers.isEngine('Presto')
                            ) ||
                            Browsers.isType('television') && (
                                Browsers.isDevice('webOS TV')
                            )
                        ),

                        'interaction.editing': !(Browsers.isType('desktop') ||
                            Browsers.isType('mobile', 'tablet', 'media') && (
                                Browsers.isOs('iOS', '>=', '5') ||
                                Browsers.isOs('Android', '>=', '4') ||
                                Browsers.isOs('Windows Phone', '>=', '7.5') ||
                                Browsers.isOs('BlackBerry') ||
                                Browsers.isOs('BlackBerry OS') ||
                                Browsers.isOs('BlackBerry Tablet OS') ||
                                Browsers.isOs('Meego') ||
                                Browsers.isOs('Tizen') ||
                                Browsers.isEngine('Gecko') ||
                                Browsers.isEngine('Presto') ||
                                Browsers.isBrowser('Chrome') ||
                                Browsers.isBrowser('Polaris', '>=', '8')
                            ) ||
                            Browsers.isType('television') && (
                                Browsers.isOs('Tizen') ||
                                Browsers.isDevice('webOS TV') ||
                                Browsers.isBrowser('Espial') ||
                                Browsers.isBrowser('MachBlue XT') ||
                                Browsers.isEngine('Presto', '>=', '2.9')
                            ) ||
                            Browsers.isType('gaming') && (
                                Browsers.isDevice('Xbox 360') ||
                                Browsers.isDevice('Xbox One') ||
                                Browsers.isDevice('Playstation 4')
                            )
                        )
                    }
                ]
            ];

            try {
                this.backgroundTasks = [];
                this.backgroundIds = {};
                this.backgroundId = 0;

                this.callback = callback;

                this.list = new List(this);

                for (var s = 0; s < testsuite.length; s++) {
                    testsuite[s](this.list);
                }

                this.waitForBackground();
            }
            catch (e) {
                error(e);
            }
        },

        waitForBackground: function () {
            var that = this;

            window.setTimeout(function () {
                that.checkForBackground.call(that);
            }, 300);
        },

        checkForBackground: function () {
            var running = 0;
            for (var task = 0; task < this.backgroundTasks.length; task++) { running += this.backgroundTasks[task] }

            if (running) {
                this.waitForBackground();
            } else {
                this.finished();
            }
        },

        startBackground: function (id) {
            var i = this.backgroundId++;
            this.backgroundIds[id] = i;
            this.backgroundTasks[i] = 1;
        },

        stopBackground: function (id) {
            this.backgroundTasks[this.backgroundIds[id]] = 0;
        },

        finished: function () {
            var uniqueid = (((1 + Math.random()) * 0x1000000) | 0).toString(16).substring(1) + ("0000000000" + (new Date().getTime() - new Date(2010, 0, 1).getTime()).toString(16)).slice(-10);

            this.callback({
                release: release,
                uniqueid: uniqueid,
                results: this.list.toString()
            });
        }
    };

    return Runner;
})();
