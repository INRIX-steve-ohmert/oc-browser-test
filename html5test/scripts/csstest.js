var TestCss = function (tests, spec, title) {
	this.tests = tests;
	this.id = spec;
	this.title = title;

	// Perform tests
	for(var id in TestCss.groups) {
		this.group(id, TestCss.groups[id], spec);
	}
}

TestCss.prototype = {
	group: function(what, testCallback, specId) {
		var thisSection, theseTests = this.tests[what];

		for(var feature in theseTests) {
			console.log(`${specId}.${feature}`);
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

			console.log(passed);
		}
	}
}

TestCss.groups = {
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

onload = function() {
	var specs = [];

	for(var spec in Specs) {
		specs.push(spec);
	}

	(function() {
		if(specs.length) {
			// Get spec id
			var spec = specs.shift();

			// Run tests
			var test = new TestCss(Specs[spec], spec, Specs[spec].title);

			// Schedule next test
			setTimeout(arguments.callee, 50)
		}
		else {
			// Done!
		}
	})();
}
