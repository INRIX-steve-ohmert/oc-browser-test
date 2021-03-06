Test =
(function () {

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
            var passed, ev;

            try {
                ev = new CustomEvent('event');
                if (ev instanceof CustomEvent) passed = true;
            } catch (e) {
                passed = false;
            }

            results.addItem({
                key: 'elements.customEv',
                passed: passed
            })
        },

        /* TextContent */

        function(results) {
            var el = document.createElement('div'),
                passed;

            try {
                el.textContent = 'some text';
                if (el.innerText == 'some text') passed = true;
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'elements.text',
                passed: passed
            });
        },

        /* addEventListener */

        function(results) {
            var el = document.createElement('div'),
                passed = true;

            try {
                el.addEventListener("click", function(){});
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'elements.eventListener',
                passed: passed
            })
        },

        /* Matches */

        function(results) {
            var el = document.createElement('div'),
                passed = true;
            el.className = 'match-me';

            try {
                el.matches('.match-me');
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'elements.matches',
                passed: passed
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
            var el = document.createElement('div'),
                passed = true;
            el.className = 'class-me';

            try {
                document.getElementsByClassName('class-me');
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'elements.className',
                passed: passed
            })
        },

        /* relList */

        function(results) {
            var el = document.createElement('link'),
                passed = true;

            try {
                el.relList;
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'elements.relList',
                passed: passed
            });
        },

        /* getBoundingClientRect method */

        function(results) {
            var element = document.createElement('div'),
                passed;

            try {
                var obj = element.getBoundingClientRect();
                if (typeof obj == 'object') passed = true;
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'elements.rect',
                passed: passed
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
            try {
                var ev = new KeyboardEvent('keyup');
            } catch (e) {
                var ev = {}; 
            };

            results.addItem({
                key: 'input.which',
                passed: typeof ev.which == 'number'
            });
        },

        /* KeyboardEvent charCode */

        function(results) {
            try {
                var ev = new KeyboardEvent('keyup');
            } catch (e) {
                var ev = {}; 
            };

            results.addItem({
                key: 'input.charCode',
                passed: typeof ev.charCode == 'number'
            });
        },

        /* KeyboardEvent code */

        function(results) {
            try {
                var ev = new KeyboardEvent('keyup');
            } catch (e) {
                var ev = {}; 
            };

            results.addItem({
                key: 'input.code',
                passed: typeof ev.code == 'string'
            });
        },

        /* KeyboardEvent location */

        function(results) {
            try {
                var ev = new KeyboardEvent('keyup');
            } catch (e) {
                var ev = {}; 
            };

            results.addItem({
                key: 'input.location',
                passed: typeof ev.location == 'number'
            });
        },

        /* KeyboardEvent getModifierState */

        function(results) {

            try {
                var ev = new KeyboardEvent('keyup');
            } catch (e) {
                var ev = {}; 
            };

            results.addItem({
                key: 'input.modifier',
                passed: typeof ev.getModifierState == 'function'
            });
        },

        /* KeyboardEvent key */

        function(results) {
            try {
                var ev = new KeyboardEvent('keyup');
            } catch (e) {
                var ev = {}; 
            };

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
                xhr.open("GET", "../../assets/detect.html?" + Math.random().toString(36).substr(2, 5));
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
                xhr.open("GET", "../../assets/detect.html?" + Math.random().toString(36).substr(2, 5));
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
                xhr.open("GET", "../../assets/detect.html?" + Math.random().toString(36).substr(2, 5));
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
                xhr.open("GET", "../../assets/detect.html?" + Math.random().toString(36).substr(2, 5));
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

        /* crypto getRandomValues */

        function (results) {
            var array = new Uint32Array(10),
                passed = true;

            try {
                window.crypto.getRandomValues(array);
                array.forEach(function(n) {
                    if (n == 0) passed = false;
                })
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'security.crypto.rand',
                passed: passed
            })
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
            iframe.src = '../../assets/csp.html';
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

        /* TTF Fonts */

        function(results) {
            var css = "@font-face { font-family: 'League'; src: url('../../fonts/leaguegothic-condensed-italic-webfont.ttf')}",
                head = document.head,
                style = document.createElement('style'),
                passed = true;

            try {
                style.type = 'text/css';
                if (style.styleSheet){
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'font.ttf',
                passed: passed
            });
        },

        /* OTF Fonts */

        function(results) {
            var css = "@font-face { font-family: 'League'; src: url('../../fonts/leaguegothic-condensed-italic-webfont.otf')}",
                head = document.head,
                style = document.createElement('style'),
                passed = true;

            try {
                style.type = 'text/css';
                if (style.styleSheet){
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'font.otf',
                passed: passed
            });
        },

        /* WOFF Fonts */

        function(results) {
            var css = "@font-face { font-family: 'League'; src: url('../../fonts/leaguegothic-condensed-italic-webfont.woff')}",
                head = document.head,
                style = document.createElement('style'),
                passed = true;

            try {
                style.type = 'text/css';
                if (style.styleSheet){
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'font.woff',
                passed: passed
            });
        },


        /* hashchange */

        function(results) {
            results.addItem({
                key: 'other.hashchange',
                passed: typeof window.location.hash == 'string'
            });
        },

        /* console logging */

        function(results) {
            results.addItem({
                key: 'other.console',
                passed: !!(window.console)
            });
        },

        /* CSS Counters */

        function(results) {
            var css = "body { counter-reset: section; content: 'Section ' counter(section) ': ';}",
                head = document.head,
                style = document.createElement('style'),
                passed = true;

            try {
                style.type = 'text/css';
                if (style.styleSheet){
                  style.styleSheet.cssText = css;
                } else {
                  style.appendChild(document.createTextNode(css));
                }
                head.appendChild(style);
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'other.counters',
                passed: passed
            })
        },

        /* focus events */

        function(results) {
            var foc;
            try {
                foc = new FocusEvent('focus');
            } catch(e) {
                foc = 'just a string'
            }

            results.addItem({
                key: 'other.focus',
                passed: typeof foc == 'object'
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

        /* svg smil */

        function(results) {
            var svgs = ["SVGAnimateColorElement", "SVGAnimateElement", "SVGAnimateMotionElement", "SVGAnimateTransformElement"],
                passed = true;

            svgs.forEach(function(s) {
                if (window.s == "undefined") passed = false;
            })


            results.addItem({
                key: 'canvas.smil',
                passed: passed
            });
        },

        /* svg filters */

        function(results) {
            results.addItem({
                key: 'canvas.filter',
                passed: typeof window.SVGFilterElement != 'undefined'
            });
        },

        /* svg fragment */

        function(results) {
            results.addItem({
                key: 'canvas.fragment',
                passed: typeof window.SVGViewSpec && typeof window.SVGViewElement != 'undefined'
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


        /* BroadcastChannel */

        function(results) {
            var passed, bc;

            try {
                if (window.BroadcastChannel) {
                    bc = new BroadcastChannel('testing');
                    passed = true;
                } else {
                    passed = false;
                }
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'performance.broadcast',
                passed: passed
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

        /* setImmeadiate */

        function(results) {
            results.addItem({
                key: 'scripting.setImmeadiate',
                passed: typeof window.setImmeadiate == 'function'
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

        /* Proxy Object */

        function(results) {
            var prox, passed, i = {i:0};

            try {
                prox = new Proxy(i, function(){})
                passed = true;
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'scripting.es6.proxy',
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


        /* High res time */

        function(results) {
            var t, passed;

            try {
                t = performance.now();
                passed = true;
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'scripting.perfTime',
                passed: passed
            });
        },

        /* User Timing */

        function(results) {
            var t, passed;

            try {
                t = performance.mark('marking');
                passed = true;
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'scripting.userTime',
                passed: passed
            })
        },

        /* Navigation Timing */

        function(results) {
            var t, passed;

            try {
                t = performance.timing.navigationStart;
                passed = true;
            } catch(e) {
                passed = false;
            }

            results.addItem({
                key: 'scripting.navTime',
                passed: passed
            });
        }
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

    var TestRuntime = function (tests, spec, title, testList) {
    	this.tests = tests;
    	this.id = spec;
    	this.title = title;

    	// Perform tests
    	for(var id in TestRuntime.groups) {
    		this.group(id, TestRuntime.groups[id], spec, testList);
    	}
    }

    TestRuntime.prototype = {
    	group: function(what, testCallback, specId, testList) {
    		var thisSection, theseTests = this.tests[what];
            var key, passed = true;

    		for(var feature in theseTests) {
                key = specId + '.' + feature;
    			if(feature === 'properties') {
    				continue;
    			}

    			var passed = 0, tests = theseTests[feature];

    			tests = tests instanceof Array? tests : [tests];

    			for(var i=0, test; test = tests[i++];) {
    				var results = testCallback(test, feature, theseTests),
    				    success, note;

    				if(typeof results === 'object') {
    					success = results.success;
    					note = results.note;
    				}
    				else { success = +!!results }

    				passed += +success;
    			}

                passed = ((tests.length % passed) != 0) ? false : true;

    			testList.addItem({
                    key: key,
                    passed: passed
                });
    		}
    	}
    }

    TestRuntime.groups = {
    	'values': function(test, label, tests) {
    		var properties = tests.properties,
    			failed = [];

    		for(var j=0, property; property = properties[j++];) {
    			if(!Supports.property(property)) {
    				properties.splice(--j, 1);
    				continue;
    			}

    			if(!Supports.value(property, test)) {
    				failed.push(property);
    			}
    		}

    		success = 1 - failed.length / properties.length;

    		return {
    			success: success,
    			note: success > 0 && success < 1? 'Failed in: ' + failed.join(', ') : ''
    		}
    	},

    	'properties': function(value, property) {
    		return Supports.value(property, value);
    	},

    	'descriptors': function(value, descriptor) {
    		return Supports.descriptorvalue(descriptor, value);
    	},

    	'selectors': function(test) {
    		return Supports.selector(test);
    	},

    	'@rules': function(test) {
    		return Supports.atrule(test);
    	},

    	'Media queries': function(test) {
    		var matches = matchMedia(test);

    		return matches.media !== 'invalid' && matches.matches;
    	}
    };

    function passclass(info) {
    	var success;

    	if('passed' in info) {
    		success = info.passed / info.total;
    	}
    	else if('failed' in info) {
    		success = 1 - info.failed / info.total;
    	}

    	var classes = [
    	  'epic-fail',
    		'fail',
    		'very-buggy',
    		'buggy',
    		'slightly-buggy',
    		'almost-pass',
    		'pass'
    	];

    	var index = Math.round(success * (classes.length - 1));

    	return classes[index];
    }

    Array.prototype.and = function(arr2, separator) {
    	separator = separator || ' ';

    	var ret = [],
    		map = function(val) {
    			return val + separator + arr2[j]
    		};

    	for(var j=0; j<arr2.length; j++) {
    		ret = ret.concat(this.map(map));
    	}

    	return ret;
    };

    // [ x or y or z ]{min, max}
    Array.prototype.times = function(min, max, separator) {
    	separator = separator || ' ';

    	max = max || min;

    	var ret = [];


    	if(min === max) {
    		if(min === 1) {
    			ret = this.slice(); // clone
    		}
    		else {
    			ret = this.and(this, separator);

    			for(var i=2; i<min; i++) {
    				ret = this.and(ret, separator);
    			}
    		}
    	}
    	else if(min < max) {
    		for(var i=min; i<=max; i++) {
    			ret = ret.concat(this.times(i, i, separator));
    		}
    	}

    	return ret;
    };


    function List(parent) { this.initialize(parent); }
    List.prototype = {
        initialize: function (parent) {
            this.parent = parent;
            this.items = [];
        },

        addItem: function (data) {
            var i = new Item(this, data)
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
        },

        update: function (data) {
            for (var key in data) {
                this.data[key] = data[key];
            }

            if (typeof this.data.passed == 'undefined') this.data.passed = false;
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
            try {
                this.backgroundTasks = [];
                this.backgroundIds = {};
                this.backgroundId = 0;

                this.callback = callback;

                this.list = new List(this);

                for (var s = 0; s < testsuite.length; s++) {
                    testsuite[s](this.list);
                }

            	var specs = [];

            	for(var spec in Specs) {
            		specs.push(spec);
            	}

            	(function() {
            		if(specs.length) {
            			// Get spec id
            			var spec = specs.shift();

            			// Run tests
            			var test = new TestRuntime(Specs[spec], spec, Specs[spec].title, this.list);

            			// Schedule next test
            			setTimeout(arguments.callee.bind(this), 50)
            		}
            		else {
            			// Done!
            		}
            	}).bind(this)();

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
            }, 1500);
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
                uniqueid: uniqueid,
                results: this.list.toString()
            });
        }
    };

    return Runner;
})();
