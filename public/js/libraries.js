/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/assets/js/jquery-ui/jquery-ui.min.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/jquery-ui/jquery-ui.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(function (k) {
  k.ui = k.ui || {};
  k.ui.version = "1.12.1";
  var n,
      i = 0,
      r = Array.prototype.slice;
  k.cleanData = (n = k.cleanData, function (t) {
    for (var e, i, s = 0; null != (i = t[s]); s++) {
      try {
        (e = k._data(i, "events")) && e.remove && k(i).triggerHandler("remove");
      } catch (t) {}
    }

    n(t);
  }), k.widget = function (t, i, e) {
    var s,
        n,
        o,
        a = {},
        r = t.split(".")[0],
        h = r + "-" + (t = t.split(".")[1]);
    return e || (e = i, i = k.Widget), k.isArray(e) && (e = k.extend.apply(null, [{}].concat(e))), k.expr[":"][h.toLowerCase()] = function (t) {
      return !!k.data(t, h);
    }, k[r] = k[r] || {}, s = k[r][t], n = k[r][t] = function (t, e) {
      if (!this._createWidget) return new n(t, e);
      arguments.length && this._createWidget(t, e);
    }, k.extend(n, s, {
      version: e.version,
      _proto: k.extend({}, e),
      _childConstructors: []
    }), (o = new i()).options = k.widget.extend({}, o.options), k.each(e, function (e, s) {
      function n() {
        return i.prototype[e].apply(this, arguments);
      }

      function o(t) {
        return i.prototype[e].apply(this, t);
      }

      k.isFunction(s) ? a[e] = function () {
        var t,
            e = this._super,
            i = this._superApply;
        return this._super = n, this._superApply = o, t = s.apply(this, arguments), this._super = e, this._superApply = i, t;
      } : a[e] = s;
    }), n.prototype = k.widget.extend(o, {
      widgetEventPrefix: s && o.widgetEventPrefix || t
    }, a, {
      constructor: n,
      namespace: r,
      widgetName: t,
      widgetFullName: h
    }), s ? (k.each(s._childConstructors, function (t, e) {
      var i = e.prototype;
      k.widget(i.namespace + "." + i.widgetName, n, e._proto);
    }), delete s._childConstructors) : i._childConstructors.push(n), k.widget.bridge(t, n), n;
  }, k.widget.extend = function (t) {
    for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; n < o; n++) {
      for (e in s[n]) {
        i = s[n][e], s[n].hasOwnProperty(e) && void 0 !== i && (k.isPlainObject(i) ? t[e] = k.isPlainObject(t[e]) ? k.widget.extend({}, t[e], i) : k.widget.extend({}, i) : t[e] = i);
      }
    }

    return t;
  }, k.widget.bridge = function (o, e) {
    var a = e.prototype.widgetFullName || o;

    k.fn[o] = function (i) {
      var t = "string" == typeof i,
          s = r.call(arguments, 1),
          n = this;
      return t ? this.length || "instance" !== i ? this.each(function () {
        var t,
            e = k.data(this, a);
        return "instance" === i ? (n = e, !1) : e ? k.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, !1) : void 0 : k.error("no such method '" + i + "' for " + o + " widget instance") : k.error("cannot call methods on " + o + " prior to initialization; attempted to call method '" + i + "'");
      }) : n = void 0 : (s.length && (i = k.widget.extend.apply(null, [i].concat(s))), this.each(function () {
        var t = k.data(this, a);
        t ? (t.option(i || {}), t._init && t._init()) : k.data(this, a, new e(i, this));
      })), n;
    };
  }, k.Widget = function () {}, k.Widget._childConstructors = [], k.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      classes: {},
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(t, e) {
      e = k(e || this.defaultElement || this)[0], this.element = k(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = k(), this.hoverable = k(), this.focusable = k(), this.classesElementLookup = {}, e !== this && (k.data(e, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(t) {
          t.target === e && this.destroy();
        }
      }), this.document = k(e.style ? e.ownerDocument : e.document || e), this.window = k(this.document[0].defaultView || this.document[0].parentWindow)), this.options = k.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: function _getCreateOptions() {
      return {};
    },
    _getCreateEventData: k.noop,
    _create: k.noop,
    _init: k.noop,
    destroy: function destroy() {
      var i = this;
      this._destroy(), k.each(this.classesElementLookup, function (t, e) {
        i._removeClass(e, t);
      }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
    },
    _destroy: k.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(t, e) {
      var i,
          s,
          n,
          o = t;
      if (0 === arguments.length) return k.widget.extend({}, this.options);
      if ("string" == typeof t) if (o = {}, t = (i = t.split(".")).shift(), i.length) {
        for (s = o[t] = k.widget.extend({}, this.options[t]), n = 0; n < i.length - 1; n++) {
          s[i[n]] = s[i[n]] || {}, s = s[i[n]];
        }

        if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
        s[t] = e;
      } else {
        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
        o[t] = e;
      }
      return this._setOptions(o), this;
    },
    _setOptions: function _setOptions(t) {
      for (var e in t) {
        this._setOption(e, t[e]);
      }

      return this;
    },
    _setOption: function _setOption(t, e) {
      return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
    },
    _setOptionClasses: function _setOptionClasses(t) {
      var e, i, s;

      for (e in t) {
        s = this.classesElementLookup[e], t[e] !== this.options.classes[e] && s && s.length && (i = k(s.get()), this._removeClass(s, e), i.addClass(this._classes({
          element: i,
          keys: e,
          classes: t,
          add: !0
        })));
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _classes: function _classes(n) {
      var o = [],
          a = this;

      function t(t, e) {
        for (var i, s = 0; s < t.length; s++) {
          i = a.classesElementLookup[t[s]] || k(), i = n.add ? k(k.unique(i.get().concat(n.element.get()))) : k(i.not(n.element).get()), a.classesElementLookup[t[s]] = i, o.push(t[s]), e && n.classes[t[s]] && o.push(n.classes[t[s]]);
        }
      }

      return n = k.extend({
        element: this.element,
        classes: this.options.classes || {}
      }, n), this._on(n.element, {
        remove: "_untrackClassesElement"
      }), n.keys && t(n.keys.match(/\S+/g) || [], !0), n.extra && t(n.extra.match(/\S+/g) || []), o.join(" ");
    },
    _untrackClassesElement: function _untrackClassesElement(i) {
      var s = this;
      k.each(s.classesElementLookup, function (t, e) {
        -1 !== k.inArray(i.target, e) && (s.classesElementLookup[t] = k(e.not(i.target).get()));
      });
    },
    _removeClass: function _removeClass(t, e, i) {
      return this._toggleClass(t, e, i, !1);
    },
    _addClass: function _addClass(t, e, i) {
      return this._toggleClass(t, e, i, !0);
    },
    _toggleClass: function _toggleClass(t, e, i, s) {
      s = "boolean" == typeof s ? s : i;
      var n = "string" == typeof t || null === t,
          t = {
        extra: n ? e : i,
        keys: n ? t : e,
        element: n ? this.element : t,
        add: s
      };
      return t.element.toggleClass(this._classes(t), s), this;
    },
    _on: function _on(n, o, t) {
      var a,
          r = this;
      "boolean" != typeof n && (t = o, o = n, n = !1), t ? (o = a = k(o), this.bindings = this.bindings.add(o)) : (t = o, o = this.element, a = this.widget()), k.each(t, function (t, e) {
        function i() {
          if (n || !0 !== r.options.disabled && !k(this).hasClass("ui-state-disabled")) return ("string" == typeof e ? r[e] : e).apply(r, arguments);
        }

        "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || k.guid++);
        var s = t.match(/^([\w:-]*)\s*(.*)$/),
            t = s[1] + r.eventNamespace,
            s = s[2];
        s ? a.on(t, s, i) : o.on(t, i);
      });
    },
    _off: function _off(t, e) {
      e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = k(this.bindings.not(t).get()), this.focusable = k(this.focusable.not(t).get()), this.hoverable = k(this.hoverable.not(t).get());
    },
    _delay: function _delay(t, e) {
      var i = this;
      return setTimeout(function () {
        return ("string" == typeof t ? i[t] : t).apply(i, arguments);
      }, e || 0);
    },
    _hoverable: function _hoverable(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function mouseenter(t) {
          this._addClass(k(t.currentTarget), null, "ui-state-hover");
        },
        mouseleave: function mouseleave(t) {
          this._removeClass(k(t.currentTarget), null, "ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function focusin(t) {
          this._addClass(k(t.currentTarget), null, "ui-state-focus");
        },
        focusout: function focusout(t) {
          this._removeClass(k(t.currentTarget), null, "ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(t, e, i) {
      var s,
          n,
          o = this.options[t];
      if (i = i || {}, (e = k.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent) for (s in n) {
        s in e || (e[s] = n[s]);
      }
      return this.element.trigger(e, i), !(k.isFunction(o) && !1 === o.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented());
    }
  }, k.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (o, a) {
    k.Widget.prototype["_" + o] = function (e, t, i) {
      var s;
      "string" == typeof t && (t = {
        effect: t
      });
      var n = t ? !0 !== t && "number" != typeof t && t.effect || a : o;
      "number" == typeof (t = t || {}) && (t = {
        duration: t
      }), s = !k.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && k.effects && k.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function (t) {
        k(this)[o](), i && i.call(e[0]), t();
      });
    };
  });
  var s, x, C, o, a, h, l, c, D;
  k.widget;

  function I(t, e, i) {
    return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)];
  }

  function P(t, e) {
    return parseInt(k.css(t, e), 10) || 0;
  }

  x = Math.max, C = Math.abs, o = /left|center|right/, a = /top|center|bottom/, h = /[\+\-]\d+(\.[\d]+)?%?/, l = /^\w+/, c = /%$/, D = k.fn.position, k.position = {
    scrollbarWidth: function scrollbarWidth() {
      if (void 0 !== s) return s;
      var t,
          e = k("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
          i = e.children()[0];
      return k("body").append(e), t = i.offsetWidth, e.css("overflow", "scroll"), t === (i = i.offsetWidth) && (i = e[0].clientWidth), e.remove(), s = t - i;
    },
    getScrollInfo: function getScrollInfo(t) {
      var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
          i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
          e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
      return {
        width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? k.position.scrollbarWidth() : 0,
        height: e ? k.position.scrollbarWidth() : 0
      };
    },
    getWithinInfo: function getWithinInfo(t) {
      var e = k(t || window),
          i = k.isWindow(e[0]),
          s = !!e[0] && 9 === e[0].nodeType;
      return {
        element: e,
        isWindow: i,
        isDocument: s,
        offset: !i && !s ? k(t).offset() : {
          left: 0,
          top: 0
        },
        scrollLeft: e.scrollLeft(),
        scrollTop: e.scrollTop(),
        width: e.outerWidth(),
        height: e.outerHeight()
      };
    }
  }, k.fn.position = function (u) {
    if (!u || !u.of) return D.apply(this, arguments);
    u = k.extend({}, u);

    var d,
        p,
        f,
        g,
        m,
        t,
        _ = k(u.of),
        v = k.position.getWithinInfo(u.within),
        b = k.position.getScrollInfo(v),
        y = (u.collision || "flip").split(" "),
        w = {},
        e = 9 === (t = (e = _)[0]).nodeType ? {
      width: e.width(),
      height: e.height(),
      offset: {
        top: 0,
        left: 0
      }
    } : k.isWindow(t) ? {
      width: e.width(),
      height: e.height(),
      offset: {
        top: e.scrollTop(),
        left: e.scrollLeft()
      }
    } : t.preventDefault ? {
      width: 0,
      height: 0,
      offset: {
        top: t.pageY,
        left: t.pageX
      }
    } : {
      width: e.outerWidth(),
      height: e.outerHeight(),
      offset: e.offset()
    };

    return _[0].preventDefault && (u.at = "left top"), p = e.width, f = e.height, g = e.offset, m = k.extend({}, g), k.each(["my", "at"], function () {
      var t,
          e,
          i = (u[this] || "").split(" ");
      1 === i.length && (i = o.test(i[0]) ? i.concat(["center"]) : a.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = o.test(i[0]) ? i[0] : "center", i[1] = a.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], u[this] = [l.exec(i[0])[0], l.exec(i[1])[0]];
    }), 1 === y.length && (y[1] = y[0]), "right" === u.at[0] ? m.left += p : "center" === u.at[0] && (m.left += p / 2), "bottom" === u.at[1] ? m.top += f : "center" === u.at[1] && (m.top += f / 2), d = I(w.at, p, f), m.left += d[0], m.top += d[1], this.each(function () {
      var i,
          t,
          a = k(this),
          r = a.outerWidth(),
          h = a.outerHeight(),
          e = P(this, "marginLeft"),
          s = P(this, "marginTop"),
          n = r + e + P(this, "marginRight") + b.width,
          o = h + s + P(this, "marginBottom") + b.height,
          l = k.extend({}, m),
          c = I(w.my, a.outerWidth(), a.outerHeight());
      "right" === u.my[0] ? l.left -= r : "center" === u.my[0] && (l.left -= r / 2), "bottom" === u.my[1] ? l.top -= h : "center" === u.my[1] && (l.top -= h / 2), l.left += c[0], l.top += c[1], i = {
        marginLeft: e,
        marginTop: s
      }, k.each(["left", "top"], function (t, e) {
        k.ui.position[y[t]] && k.ui.position[y[t]][e](l, {
          targetWidth: p,
          targetHeight: f,
          elemWidth: r,
          elemHeight: h,
          collisionPosition: i,
          collisionWidth: n,
          collisionHeight: o,
          offset: [d[0] + c[0], d[1] + c[1]],
          my: u.my,
          at: u.at,
          within: v,
          elem: a
        });
      }), u.using && (t = function t(_t) {
        var e = g.left - l.left,
            i = e + p - r,
            s = g.top - l.top,
            n = s + f - h,
            o = {
          target: {
            element: _,
            left: g.left,
            top: g.top,
            width: p,
            height: f
          },
          element: {
            element: a,
            left: l.left,
            top: l.top,
            width: r,
            height: h
          },
          horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
          vertical: n < 0 ? "top" : 0 < s ? "bottom" : "middle"
        };
        p < r && C(e + i) < p && (o.horizontal = "center"), f < h && C(s + n) < f && (o.vertical = "middle"), x(C(e), C(i)) > x(C(s), C(n)) ? o.important = "horizontal" : o.important = "vertical", u.using.call(this, _t, o);
      }), a.offset(k.extend(l, {
        using: t
      }));
    });
  }, k.ui.position = {
    fit: {
      left: function left(t, e) {
        var i = e.within,
            s = i.isWindow ? i.scrollLeft : i.offset.left,
            n = i.width,
            o = t.left - e.collisionPosition.marginLeft,
            a = s - o,
            r = o + e.collisionWidth - n - s;
        e.collisionWidth > n ? 0 < a && r <= 0 ? (i = t.left + a + e.collisionWidth - n - s, t.left += a - i) : t.left = !(0 < r && a <= 0) && r < a ? s + n - e.collisionWidth : s : 0 < a ? t.left += a : 0 < r ? t.left -= r : t.left = x(t.left - o, t.left);
      },
      top: function top(t, e) {
        var i = e.within,
            s = i.isWindow ? i.scrollTop : i.offset.top,
            n = e.within.height,
            o = t.top - e.collisionPosition.marginTop,
            a = s - o,
            r = o + e.collisionHeight - n - s;
        e.collisionHeight > n ? 0 < a && r <= 0 ? (i = t.top + a + e.collisionHeight - n - s, t.top += a - i) : t.top = !(0 < r && a <= 0) && r < a ? s + n - e.collisionHeight : s : 0 < a ? t.top += a : 0 < r ? t.top -= r : t.top = x(t.top - o, t.top);
      }
    },
    flip: {
      left: function left(t, e) {
        var i = e.within,
            s = i.offset.left + i.scrollLeft,
            n = i.width,
            o = i.isWindow ? i.scrollLeft : i.offset.left,
            a = t.left - e.collisionPosition.marginLeft,
            r = a - o,
            h = a + e.collisionWidth - n - o,
            l = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
            i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
            a = -2 * e.offset[0];
        r < 0 ? ((s = t.left + l + i + a + e.collisionWidth - n - s) < 0 || s < C(r)) && (t.left += l + i + a) : 0 < h && (0 < (o = t.left - e.collisionPosition.marginLeft + l + i + a - o) || C(o) < h) && (t.left += l + i + a);
      },
      top: function top(t, e) {
        var i = e.within,
            s = i.offset.top + i.scrollTop,
            n = i.height,
            o = i.isWindow ? i.scrollTop : i.offset.top,
            a = t.top - e.collisionPosition.marginTop,
            r = a - o,
            h = a + e.collisionHeight - n - o,
            l = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
            i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
            a = -2 * e.offset[1];
        r < 0 ? ((s = t.top + l + i + a + e.collisionHeight - n - s) < 0 || s < C(r)) && (t.top += l + i + a) : 0 < h && (0 < (o = t.top - e.collisionPosition.marginTop + l + i + a - o) || C(o) < h) && (t.top += l + i + a);
      }
    },
    flipfit: {
      left: function left() {
        k.ui.position.flip.left.apply(this, arguments), k.ui.position.fit.left.apply(this, arguments);
      },
      top: function top() {
        k.ui.position.flip.top.apply(this, arguments), k.ui.position.fit.top.apply(this, arguments);
      }
    }
  };
  k.ui.position, k.extend(k.expr[":"], {
    data: k.expr.createPseudo ? k.expr.createPseudo(function (e) {
      return function (t) {
        return !!k.data(t, e);
      };
    }) : function (t, e, i) {
      return !!k.data(t, i[3]);
    }
  }), k.fn.extend({
    disableSelection: (t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
      return this.on(t + ".ui-disableSelection", function (t) {
        t.preventDefault();
      });
    }),
    enableSelection: function enableSelection() {
      return this.off(".ui-disableSelection");
    }
  });

  var t,
      u,
      d,
      p,
      f,
      e,
      g,
      m,
      _,
      v,
      b,
      y,
      w,
      T,
      M,
      S,
      H,
      z,
      O,
      A,
      N,
      W = "ui-effects-",
      E = "ui-effects-style",
      F = "ui-effects-animated",
      L = k;

  function R(t, e, i) {
    var s = _[e.type] || {};
    return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : s.max < t ? s.max : t);
  }

  function B(s) {
    var n = g(),
        o = n._rgba = [];
    return s = s.toLowerCase(), b(e, function (t, e) {
      var i = e.re.exec(s),
          i = i && e.parse(i),
          e = e.space || "rgba";
      if (i) return i = n[e](i), n[m[e].cache] = i[m[e].cache], o = n._rgba = i._rgba, !1;
    }), o.length ? ("0,0,0,0" === o.join() && u.extend(o, p.transparent), n) : p[s];
  }

  function Y(t, e, i) {
    return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t;
  }

  function j(t) {
    var e,
        i,
        s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
        n = {};
    if (s && s.length && s[0] && s[s[0]]) for (i = s.length; i--;) {
      "string" == typeof s[e = s[i]] && (n[k.camelCase(e)] = s[e]);
    } else for (e in s) {
      "string" == typeof s[e] && (n[e] = s[e]);
    }
    return n;
  }

  function q(t, e, i, s) {
    return k.isPlainObject(t) && (t = (e = t).effect), t = {
      effect: t
    }, null == e && (e = {}), k.isFunction(e) && (s = e, i = null, e = {}), "number" != typeof e && !k.fx.speeds[e] || (s = i, i = e, e = {}), k.isFunction(i) && (s = i, i = null), e && k.extend(t, e), i = i || e.duration, t.duration = k.fx.off ? 0 : "number" == typeof i ? i : i in k.fx.speeds ? k.fx.speeds[i] : k.fx.speeds._default, t.complete = s || e.complete, t;
  }

  function K(t) {
    return !t || "number" == typeof t || k.fx.speeds[t] || "string" == typeof t && !k.effects.effect[t] || k.isFunction(t) || "object" == _typeof(t) && !t.effect;
  }

  function U(t, e) {
    var i = e.outerWidth(),
        e = e.outerHeight(),
        t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, e, 0];
    return {
      top: parseFloat(t[1]) || 0,
      right: "auto" === t[2] ? i : parseFloat(t[2]),
      bottom: "auto" === t[3] ? e : parseFloat(t[3]),
      left: parseFloat(t[4]) || 0
    };
  }

  k.effects = {
    effect: {}
  }, f = /^([\-+])=\s*(\d+\.?\d*)/, e = [{
    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function parse(t) {
      return [t[1], t[2], t[3], t[4]];
    }
  }, {
    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function parse(t) {
      return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
    }
  }, {
    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
    parse: function parse(t) {
      return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)];
    }
  }, {
    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
    parse: function parse(t) {
      return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)];
    }
  }, {
    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    space: "hsla",
    parse: function parse(t) {
      return [t[1], t[2] / 100, t[3] / 100, t[4]];
    }
  }], g = (u = L).Color = function (t, e, i, s) {
    return new u.Color.fn.parse(t, e, i, s);
  }, m = {
    rgba: {
      props: {
        red: {
          idx: 0,
          type: "byte"
        },
        green: {
          idx: 1,
          type: "byte"
        },
        blue: {
          idx: 2,
          type: "byte"
        }
      }
    },
    hsla: {
      props: {
        hue: {
          idx: 0,
          type: "degrees"
        },
        saturation: {
          idx: 1,
          type: "percent"
        },
        lightness: {
          idx: 2,
          type: "percent"
        }
      }
    }
  }, _ = {
    "byte": {
      floor: !0,
      max: 255
    },
    percent: {
      max: 1
    },
    degrees: {
      mod: 360,
      floor: !0
    }
  }, v = g.support = {}, V = u("<p>")[0], b = u.each, V.style.cssText = "background-color:rgba(1,1,1,.5)", v.rgba = -1 < V.style.backgroundColor.indexOf("rgba"), b(m, function (t, e) {
    e.cache = "_" + t, e.props.alpha = {
      idx: 3,
      type: "percent",
      def: 1
    };
  }), g.fn = u.extend(g.prototype, {
    parse: function parse(n, t, e, i) {
      if (n === d) return this._rgba = [null, null, null, null], this;
      (n.jquery || n.nodeType) && (n = u(n).css(t), t = d);
      var o = this,
          s = u.type(n),
          a = this._rgba = [];
      return t !== d && (n = [n, t, e, i], s = "array"), "string" === s ? this.parse(B(n) || p._default) : "array" === s ? (b(m.rgba.props, function (t, e) {
        a[e.idx] = R(n[e.idx], e);
      }), this) : "object" === s ? (b(m, n instanceof g ? function (t, e) {
        n[e.cache] && (o[e.cache] = n[e.cache].slice());
      } : function (t, i) {
        var s = i.cache;
        b(i.props, function (t, e) {
          if (!o[s] && i.to) {
            if ("alpha" === t || null == n[t]) return;
            o[s] = i.to(o._rgba);
          }

          o[s][e.idx] = R(n[t], e, !0);
        }), o[s] && u.inArray(null, o[s].slice(0, 3)) < 0 && (o[s][3] = 1, i.from && (o._rgba = i.from(o[s])));
      }), this) : void 0;
    },
    is: function is(t) {
      var n = g(t),
          o = !0,
          a = this;
      return b(m, function (t, e) {
        var i,
            s = n[e.cache];
        return s && (i = a[e.cache] || e.to && e.to(a._rgba) || [], b(e.props, function (t, e) {
          if (null != s[e.idx]) return o = s[e.idx] === i[e.idx];
        })), o;
      }), o;
    },
    _space: function _space() {
      var i = [],
          s = this;
      return b(m, function (t, e) {
        s[e.cache] && i.push(t);
      }), i.pop();
    },
    transition: function transition(t, a) {
      var e = (l = g(t))._space(),
          i = m[e],
          t = 0 === this.alpha() ? g("transparent") : this,
          r = t[i.cache] || i.to(t._rgba),
          h = r.slice(),
          l = l[i.cache];

      return b(i.props, function (t, e) {
        var i = e.idx,
            s = r[i],
            n = l[i],
            o = _[e.type] || {};
        null !== n && (null === s ? h[i] = n : (o.mod && (o.mod / 2 < n - s ? s += o.mod : o.mod / 2 < s - n && (s -= o.mod)), h[i] = R((n - s) * a + s, e)));
      }), this[e](h);
    },
    blend: function blend(t) {
      if (1 === this._rgba[3]) return this;

      var e = this._rgba.slice(),
          i = e.pop(),
          s = g(t)._rgba;

      return g(u.map(e, function (t, e) {
        return (1 - i) * s[e] + i * t;
      }));
    },
    toRgbaString: function toRgbaString() {
      var t = "rgba(",
          e = u.map(this._rgba, function (t, e) {
        return null == t ? 2 < e ? 1 : 0 : t;
      });
      return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")";
    },
    toHslaString: function toHslaString() {
      var t = "hsla(",
          e = u.map(this.hsla(), function (t, e) {
        return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t;
      });
      return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")";
    },
    toHexString: function toHexString(t) {
      var e = this._rgba.slice(),
          i = e.pop();

      return t && e.push(~~(255 * i)), "#" + u.map(e, function (t) {
        return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t;
      }).join("");
    },
    toString: function toString() {
      return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
    }
  }), g.fn.parse.prototype = g.fn, m.hsla.to = function (t) {
    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
    var e = t[0] / 255,
        i = t[1] / 255,
        s = t[2] / 255,
        n = t[3],
        o = Math.max(e, i, s),
        a = Math.min(e, i, s),
        r = o - a,
        h = o + a,
        t = .5 * h,
        i = a === o ? 0 : e === o ? 60 * (i - s) / r + 360 : i === o ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240,
        h = 0 == r ? 0 : t <= .5 ? r / h : r / (2 - h);
    return [Math.round(i) % 360, h, t, null == n ? 1 : n];
  }, m.hsla.from = function (t) {
    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
    var e = t[0] / 360,
        i = t[1],
        s = t[2],
        t = t[3],
        i = s <= .5 ? s * (1 + i) : s + i - s * i,
        s = 2 * s - i;
    return [Math.round(255 * Y(s, i, e + 1 / 3)), Math.round(255 * Y(s, i, e)), Math.round(255 * Y(s, i, e - 1 / 3)), t];
  }, b(m, function (h, t) {
    var o = t.props,
        a = t.cache,
        r = t.to,
        l = t.from;
    g.fn[h] = function (t) {
      if (r && !this[a] && (this[a] = r(this._rgba)), t === d) return this[a].slice();
      var e,
          i = u.type(t),
          s = "array" === i || "object" === i ? t : arguments,
          n = this[a].slice();
      return b(o, function (t, e) {
        t = s["object" === i ? t : e.idx];
        null == t && (t = n[e.idx]), n[e.idx] = R(t, e);
      }), l ? ((e = g(l(n)))[a] = n, e) : g(n);
    }, b(o, function (a, r) {
      g.fn[a] || (g.fn[a] = function (t) {
        var e,
            i = u.type(t),
            s = "alpha" === a ? this._hsla ? "hsla" : "rgba" : h,
            n = this[s](),
            o = n[r.idx];
        return "undefined" === i ? o : ("function" === i && (t = t.call(this, o), i = u.type(t)), null == t && r.empty ? this : ("string" === i && (e = f.exec(t)) && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)), n[r.idx] = t, this[s](n)));
      });
    });
  }), g.hook = function (t) {
    t = t.split(" ");
    b(t, function (t, o) {
      u.cssHooks[o] = {
        set: function set(t, e) {
          var i,
              s,
              n = "";

          if ("transparent" !== e && ("string" !== u.type(e) || (i = B(e)))) {
            if (e = g(i || e), !v.rgba && 1 !== e._rgba[3]) {
              for (s = "backgroundColor" === o ? t.parentNode : t; ("" === n || "transparent" === n) && s && s.style;) {
                try {
                  n = u.css(s, "backgroundColor"), s = s.parentNode;
                } catch (t) {}
              }

              e = e.blend(n && "transparent" !== n ? n : "_default");
            }

            e = e.toRgbaString();
          }

          try {
            t.style[o] = e;
          } catch (t) {}
        }
      }, u.fx.step[o] = function (t) {
        t.colorInit || (t.start = g(t.elem, o), t.end = g(t.end), t.colorInit = !0), u.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos));
      };
    });
  }, g.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), u.cssHooks.borderColor = {
    expand: function expand(i) {
      var s = {};
      return b(["Top", "Right", "Bottom", "Left"], function (t, e) {
        s["border" + e + "Color"] = i;
      }), s;
    }
  }, p = u.Color.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00",
    transparent: [null, null, null, 0],
    _default: "#ffffff"
  }, M = ["add", "remove", "toggle"], S = {
    border: 1,
    borderBottom: 1,
    borderColor: 1,
    borderLeft: 1,
    borderRight: 1,
    borderTop: 1,
    borderWidth: 1,
    margin: 1,
    padding: 1
  }, k.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
    k.fx.step[e] = function (t) {
      ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (L.style(t.elem, e, t.end), t.setAttr = !0);
    };
  }), k.fn.addBack || (k.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  }), k.effects.animateClass = function (n, t, e, i) {
    var o = k.speed(t, e, i);
    return this.queue(function () {
      var i = k(this),
          t = i.attr("class") || "",
          e = (e = o.children ? i.find("*").addBack() : i).map(function () {
        return {
          el: k(this),
          start: j(this)
        };
      }),
          s = function s() {
        k.each(M, function (t, e) {
          n[e] && i[e + "Class"](n[e]);
        });
      };

      s(), e = e.map(function () {
        return this.end = j(this.el[0]), this.diff = function (t, e) {
          var i,
              s,
              n = {};

          for (i in e) {
            s = e[i], t[i] !== s && (S[i] || !k.fx.step[i] && isNaN(parseFloat(s)) || (n[i] = s));
          }

          return n;
        }(this.start, this.end), this;
      }), i.attr("class", t), e = e.map(function () {
        var t = this,
            e = k.Deferred(),
            i = k.extend({}, o, {
          queue: !1,
          complete: function complete() {
            e.resolve(t);
          }
        });
        return this.el.animate(this.diff, i), e.promise();
      }), k.when.apply(k, e.get()).done(function () {
        s(), k.each(arguments, function () {
          var e = this.el;
          k.each(this.diff, function (t) {
            e.css(t, "");
          });
        }), o.complete.call(i[0]);
      });
    });
  }, k.fn.extend({
    addClass: (T = k.fn.addClass, function (t, e, i, s) {
      return e ? k.effects.animateClass.call(this, {
        add: t
      }, e, i, s) : T.apply(this, arguments);
    }),
    removeClass: (w = k.fn.removeClass, function (t, e, i, s) {
      return 1 < arguments.length ? k.effects.animateClass.call(this, {
        remove: t
      }, e, i, s) : w.apply(this, arguments);
    }),
    toggleClass: (y = k.fn.toggleClass, function (t, e, i, s, n) {
      return "boolean" == typeof e || void 0 === e ? i ? k.effects.animateClass.call(this, e ? {
        add: t
      } : {
        remove: t
      }, i, s, n) : y.apply(this, arguments) : k.effects.animateClass.call(this, {
        toggle: t
      }, e, i, s);
    }),
    switchClass: function switchClass(t, e, i, s, n) {
      return k.effects.animateClass.call(this, {
        add: e,
        remove: t
      }, i, s, n);
    }
  }), k.expr && k.expr.filters && k.expr.filters.animated && (k.expr.filters.animated = (H = k.expr.filters.animated, function (t) {
    return !!k(t).data(F) || H(t);
  })), !1 !== k.uiBackCompat && k.extend(k.effects, {
    save: function save(t, e) {
      for (var i = 0, s = e.length; i < s; i++) {
        null !== e[i] && t.data(W + e[i], t[0].style[e[i]]);
      }
    },
    restore: function restore(t, e) {
      for (var i, s = 0, n = e.length; s < n; s++) {
        null !== e[s] && (i = t.data(W + e[s]), t.css(e[s], i));
      }
    },
    setMode: function setMode(t, e) {
      return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
    },
    createWrapper: function createWrapper(i) {
      if (i.parent().is(".ui-effects-wrapper")) return i.parent();
      var s = {
        width: i.outerWidth(!0),
        height: i.outerHeight(!0),
        "float": i.css("float")
      },
          t = k("<div></div>").addClass("ui-effects-wrapper").css({
        fontSize: "100%",
        background: "transparent",
        border: "none",
        margin: 0,
        padding: 0
      }),
          e = {
        width: i.width(),
        height: i.height()
      },
          n = document.activeElement;

      try {
        n.id;
      } catch (t) {
        n = document.body;
      }

      return i.wrap(t), i[0] !== n && !k.contains(i[0], n) || k(n).trigger("focus"), t = i.parent(), "static" === i.css("position") ? (t.css({
        position: "relative"
      }), i.css({
        position: "relative"
      })) : (k.extend(s, {
        position: i.css("position"),
        zIndex: i.css("z-index")
      }), k.each(["top", "left", "bottom", "right"], function (t, e) {
        s[e] = i.css(e), isNaN(parseInt(s[e], 10)) && (s[e] = "auto");
      }), i.css({
        position: "relative",
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto"
      })), i.css(e), t.css(s).show();
    },
    removeWrapper: function removeWrapper(t) {
      var e = document.activeElement;
      return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !k.contains(t[0], e) || k(e).trigger("focus")), t;
    }
  }), k.extend(k.effects, {
    version: "1.12.1",
    define: function define(t, e, i) {
      return i || (i = e, e = "effect"), k.effects.effect[t] = i, k.effects.effect[t].mode = e, i;
    },
    scaledDimensions: function scaledDimensions(t, e, i) {
      if (0 === e) return {
        height: 0,
        width: 0,
        outerHeight: 0,
        outerWidth: 0
      };
      var s = "horizontal" !== i ? (e || 100) / 100 : 1,
          e = "vertical" !== i ? (e || 100) / 100 : 1;
      return {
        height: t.height() * e,
        width: t.width() * s,
        outerHeight: t.outerHeight() * e,
        outerWidth: t.outerWidth() * s
      };
    },
    clipToBox: function clipToBox(t) {
      return {
        width: t.clip.right - t.clip.left,
        height: t.clip.bottom - t.clip.top,
        left: t.clip.left,
        top: t.clip.top
      };
    },
    unshift: function unshift(t, e, i) {
      var s = t.queue();
      1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue();
    },
    saveStyle: function saveStyle(t) {
      t.data(E, t[0].style.cssText);
    },
    restoreStyle: function restoreStyle(t) {
      t[0].style.cssText = t.data(E) || "", t.removeData(E);
    },
    mode: function mode(t, e) {
      t = t.is(":hidden");
      return "toggle" === e && (e = t ? "show" : "hide"), (t ? "hide" === e : "show" === e) && (e = "none"), e;
    },
    getBaseline: function getBaseline(t, e) {
      var i, s;

      switch (t[0]) {
        case "top":
          i = 0;
          break;

        case "middle":
          i = .5;
          break;

        case "bottom":
          i = 1;
          break;

        default:
          i = t[0] / e.height;
      }

      switch (t[1]) {
        case "left":
          s = 0;
          break;

        case "center":
          s = .5;
          break;

        case "right":
          s = 1;
          break;

        default:
          s = t[1] / e.width;
      }

      return {
        x: s,
        y: i
      };
    },
    createPlaceholder: function createPlaceholder(t) {
      var e,
          i = t.css("position"),
          s = t.position();
      return t.css({
        marginTop: t.css("marginTop"),
        marginBottom: t.css("marginBottom"),
        marginLeft: t.css("marginLeft"),
        marginRight: t.css("marginRight")
      }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", e = k("<" + t[0].nodeName + ">").insertAfter(t).css({
        display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
        visibility: "hidden",
        marginTop: t.css("marginTop"),
        marginBottom: t.css("marginBottom"),
        marginLeft: t.css("marginLeft"),
        marginRight: t.css("marginRight"),
        "float": t.css("float")
      }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(W + "placeholder", e)), t.css({
        position: i,
        left: s.left,
        top: s.top
      }), e;
    },
    removePlaceholder: function removePlaceholder(t) {
      var e = W + "placeholder",
          i = t.data(e);
      i && (i.remove(), t.removeData(e));
    },
    cleanUp: function cleanUp(t) {
      k.effects.restoreStyle(t), k.effects.removePlaceholder(t);
    },
    setTransition: function setTransition(s, t, n, o) {
      return o = o || {}, k.each(t, function (t, e) {
        var i = s.cssUnit(e);
        0 < i[0] && (o[e] = i[0] * n + i[1]);
      }), o;
    }
  }), k.fn.extend({
    effect: function effect() {
      function t(t) {
        var e = k(this),
            i = k.effects.mode(e, r) || o;
        e.data(F, !0), h.push(i), o && ("show" === i || i === o && "hide" === i) && e.show(), o && "none" === i || k.effects.saveStyle(e), k.isFunction(t) && t();
      }

      var s = q.apply(this, arguments),
          n = k.effects.effect[s.effect],
          o = n.mode,
          e = s.queue,
          i = e || "fx",
          a = s.complete,
          r = s.mode,
          h = [];
      return k.fx.off || !n ? r ? this[r](s.duration, a) : this.each(function () {
        a && a.call(this);
      }) : !1 === e ? this.each(t).each(l) : this.queue(i, t).queue(i, l);

      function l(t) {
        var e = k(this);

        function i() {
          k.isFunction(a) && a.call(e[0]), k.isFunction(t) && t();
        }

        s.mode = h.shift(), !1 === k.uiBackCompat || o ? "none" === s.mode ? (e[r](), i()) : n.call(e[0], s, function () {
          e.removeData(F), k.effects.cleanUp(e), "hide" === s.mode && e.hide(), i();
        }) : (e.is(":hidden") ? "hide" === r : "show" === r) ? (e[r](), i()) : n.call(e[0], s, i);
      }
    },
    show: (A = k.fn.show, function (t) {
      if (K(t)) return A.apply(this, arguments);
      var e = q.apply(this, arguments);
      return e.mode = "show", this.effect.call(this, e);
    }),
    hide: (O = k.fn.hide, function (t) {
      if (K(t)) return O.apply(this, arguments);
      var e = q.apply(this, arguments);
      return e.mode = "hide", this.effect.call(this, e);
    }),
    toggle: (z = k.fn.toggle, function (t) {
      if (K(t) || "boolean" == typeof t) return z.apply(this, arguments);
      var e = q.apply(this, arguments);
      return e.mode = "toggle", this.effect.call(this, e);
    }),
    cssUnit: function cssUnit(t) {
      var i = this.css(t),
          s = [];
      return k.each(["em", "px", "%", "pt"], function (t, e) {
        0 < i.indexOf(e) && (s = [parseFloat(i), e]);
      }), s;
    },
    cssClip: function cssClip(t) {
      return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : U(this.css("clip"), this);
    },
    transfer: function transfer(t, e) {
      var i = k(this),
          s = k(t.to),
          n = "fixed" === s.css("position"),
          o = k("body"),
          a = n ? o.scrollTop() : 0,
          r = n ? o.scrollLeft() : 0,
          o = s.offset(),
          o = {
        top: o.top - a,
        left: o.left - r,
        height: s.innerHeight(),
        width: s.innerWidth()
      },
          s = i.offset(),
          h = k("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
        top: s.top - a,
        left: s.left - r,
        height: i.innerHeight(),
        width: i.innerWidth(),
        position: n ? "fixed" : "absolute"
      }).animate(o, t.duration, t.easing, function () {
        h.remove(), k.isFunction(e) && e();
      });
    }
  }), k.fx.step.clip = function (t) {
    t.clipInit || (t.start = k(t.elem).cssClip(), "string" == typeof t.end && (t.end = U(t.end, t.elem)), t.clipInit = !0), k(t.elem).cssClip({
      top: t.pos * (t.end.top - t.start.top) + t.start.top,
      right: t.pos * (t.end.right - t.start.right) + t.start.right,
      bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
      left: t.pos * (t.end.left - t.start.left) + t.start.left
    });
  }, N = {}, k.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
    N[t] = function (t) {
      return Math.pow(t, e + 2);
    };
  }), k.extend(N, {
    Sine: function Sine(t) {
      return 1 - Math.cos(t * Math.PI / 2);
    },
    Circ: function Circ(t) {
      return 1 - Math.sqrt(1 - t * t);
    },
    Elastic: function Elastic(t) {
      return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15);
    },
    Back: function Back(t) {
      return t * t * (3 * t - 2);
    },
    Bounce: function Bounce(t) {
      for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;) {
        ;
      }

      return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2);
    }
  }), k.each(N, function (t, e) {
    k.easing["easeIn" + t] = e, k.easing["easeOut" + t] = function (t) {
      return 1 - e(1 - t);
    }, k.easing["easeInOut" + t] = function (t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2;
    };
  });
  var V = k.effects;
  k.effects.define("blind", "hide", function (t, e) {
    var i = {
      up: ["bottom", "top"],
      vertical: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      horizontal: ["right", "left"],
      right: ["left", "right"]
    },
        s = k(this),
        n = t.direction || "up",
        o = s.cssClip(),
        a = {
      clip: k.extend({}, o)
    },
        r = k.effects.createPlaceholder(s);
    a.clip[i[n][0]] = a.clip[i[n][1]], "show" === t.mode && (s.cssClip(a.clip), r && r.css(k.effects.clipToBox(a)), a.clip = o), r && r.animate(k.effects.clipToBox(a), t.duration, t.easing), s.animate(a, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    });
  }), k.effects.define("bounce", function (t, e) {
    var i,
        s,
        n = k(this),
        o = t.mode,
        a = "hide" === o,
        r = "show" === o,
        h = t.direction || "up",
        l = t.distance,
        c = t.times || 5,
        o = 2 * c + (r || a ? 1 : 0),
        u = t.duration / o,
        d = t.easing,
        p = "up" === h || "down" === h ? "top" : "left",
        f = "up" === h || "left" === h,
        g = 0,
        t = n.queue().length;

    for (k.effects.createPlaceholder(n), h = n.css(p), l = l || n["top" == p ? "outerHeight" : "outerWidth"]() / 3, r && ((s = {
      opacity: 1
    })[p] = h, n.css("opacity", 0).css(p, f ? 2 * -l : 2 * l).animate(s, u, d)), a && (l /= Math.pow(2, c - 1)), (s = {})[p] = h; g < c; g++) {
      (i = {})[p] = (f ? "-=" : "+=") + l, n.animate(i, u, d).animate(s, u, d), l = a ? 2 * l : l / 2;
    }

    a && ((i = {
      opacity: 0
    })[p] = (f ? "-=" : "+=") + l, n.animate(i, u, d)), n.queue(e), k.effects.unshift(n, t, 1 + o);
  }), k.effects.define("clip", "hide", function (t, e) {
    var i = {},
        s = k(this),
        n = t.direction || "vertical",
        o = "both" === n,
        a = o || "horizontal" === n,
        o = o || "vertical" === n,
        n = s.cssClip();
    i.clip = {
      top: o ? (n.bottom - n.top) / 2 : n.top,
      right: a ? (n.right - n.left) / 2 : n.right,
      bottom: o ? (n.bottom - n.top) / 2 : n.bottom,
      left: a ? (n.right - n.left) / 2 : n.left
    }, k.effects.createPlaceholder(s), "show" === t.mode && (s.cssClip(i.clip), i.clip = n), s.animate(i, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    });
  }), k.effects.define("drop", "hide", function (t, e) {
    var i = k(this),
        s = "show" === t.mode,
        n = t.direction || "left",
        o = "up" === n || "down" === n ? "top" : "left",
        a = "up" === n || "left" === n ? "-=" : "+=",
        r = "+=" == a ? "-=" : "+=",
        h = {
      opacity: 0
    };
    k.effects.createPlaceholder(i), n = t.distance || i["top" == o ? "outerHeight" : "outerWidth"](!0) / 2, h[o] = a + n, s && (i.css(h), h[o] = r + n, h.opacity = 1), i.animate(h, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    });
  }), k.effects.define("explode", "hide", function (t, e) {
    var i,
        s,
        n,
        o,
        a,
        r,
        h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
        l = h,
        c = k(this),
        u = "show" === t.mode,
        d = c.show().css("visibility", "hidden").offset(),
        p = Math.ceil(c.outerWidth() / l),
        f = Math.ceil(c.outerHeight() / h),
        g = [];

    function m() {
      g.push(this), g.length === h * l && (c.css({
        visibility: "visible"
      }), k(g).remove(), e());
    }

    for (i = 0; i < h; i++) {
      for (o = d.top + i * f, r = i - (h - 1) / 2, s = 0; s < l; s++) {
        n = d.left + s * p, a = s - (l - 1) / 2, c.clone().appendTo("body").wrap("<div></div>").css({
          position: "absolute",
          visibility: "visible",
          left: -s * p,
          top: -i * f
        }).parent().addClass("ui-effects-explode").css({
          position: "absolute",
          overflow: "hidden",
          width: p,
          height: f,
          left: n + (u ? a * p : 0),
          top: o + (u ? r * f : 0),
          opacity: u ? 0 : 1
        }).animate({
          left: n + (u ? 0 : a * p),
          top: o + (u ? 0 : r * f),
          opacity: u ? 1 : 0
        }, t.duration || 500, t.easing, m);
      }
    }
  }), k.effects.define("fade", "toggle", function (t, e) {
    var i = "show" === t.mode;
    k(this).css("opacity", i ? 0 : 1).animate({
      opacity: i ? 1 : 0
    }, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    });
  }), k.effects.define("fold", "hide", function (e, t) {
    var i = k(this),
        s = e.mode,
        n = "show" === s,
        o = "hide" === s,
        a = e.size || 15,
        r = /([0-9]+)%/.exec(a),
        h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"],
        l = e.duration / 2,
        c = k.effects.createPlaceholder(i),
        u = i.cssClip(),
        d = {
      clip: k.extend({}, u)
    },
        p = {
      clip: k.extend({}, u)
    },
        f = [u[h[0]], u[h[1]]],
        s = i.queue().length;
    r && (a = parseInt(r[1], 10) / 100 * f[o ? 0 : 1]), d.clip[h[0]] = a, p.clip[h[0]] = a, p.clip[h[1]] = 0, n && (i.cssClip(p.clip), c && c.css(k.effects.clipToBox(p)), p.clip = u), i.queue(function (t) {
      c && c.animate(k.effects.clipToBox(d), l, e.easing).animate(k.effects.clipToBox(p), l, e.easing), t();
    }).animate(d, l, e.easing).animate(p, l, e.easing).queue(t), k.effects.unshift(i, s, 4);
  }), k.effects.define("highlight", "show", function (t, e) {
    var i = k(this),
        s = {
      backgroundColor: i.css("backgroundColor")
    };
    "hide" === t.mode && (s.opacity = 0), k.effects.saveStyle(i), i.css({
      backgroundImage: "none",
      backgroundColor: t.color || "#ffff99"
    }).animate(s, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    });
  }), k.effects.define("size", function (s, e) {
    var n,
        i = k(this),
        t = ["fontSize"],
        o = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        a = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        r = s.mode,
        h = "effect" !== r,
        l = s.scale || "both",
        c = s.origin || ["middle", "center"],
        u = i.css("position"),
        d = i.position(),
        p = k.effects.scaledDimensions(i),
        f = s.from || p,
        g = s.to || k.effects.scaledDimensions(i, 0);
    k.effects.createPlaceholder(i), "show" === r && (r = f, f = g, g = r), n = {
      from: {
        y: f.height / p.height,
        x: f.width / p.width
      },
      to: {
        y: g.height / p.height,
        x: g.width / p.width
      }
    }, "box" !== l && "both" !== l || (n.from.y !== n.to.y && (f = k.effects.setTransition(i, o, n.from.y, f), g = k.effects.setTransition(i, o, n.to.y, g)), n.from.x !== n.to.x && (f = k.effects.setTransition(i, a, n.from.x, f), g = k.effects.setTransition(i, a, n.to.x, g))), "content" !== l && "both" !== l || n.from.y !== n.to.y && (f = k.effects.setTransition(i, t, n.from.y, f), g = k.effects.setTransition(i, t, n.to.y, g)), c && (c = k.effects.getBaseline(c, p), f.top = (p.outerHeight - f.outerHeight) * c.y + d.top, f.left = (p.outerWidth - f.outerWidth) * c.x + d.left, g.top = (p.outerHeight - g.outerHeight) * c.y + d.top, g.left = (p.outerWidth - g.outerWidth) * c.x + d.left), i.css(f), "content" !== l && "both" !== l || (o = o.concat(["marginTop", "marginBottom"]).concat(t), a = a.concat(["marginLeft", "marginRight"]), i.find("*[width]").each(function () {
      var t = k(this),
          e = k.effects.scaledDimensions(t),
          i = {
        height: e.height * n.from.y,
        width: e.width * n.from.x,
        outerHeight: e.outerHeight * n.from.y,
        outerWidth: e.outerWidth * n.from.x
      },
          e = {
        height: e.height * n.to.y,
        width: e.width * n.to.x,
        outerHeight: e.height * n.to.y,
        outerWidth: e.width * n.to.x
      };
      n.from.y !== n.to.y && (i = k.effects.setTransition(t, o, n.from.y, i), e = k.effects.setTransition(t, o, n.to.y, e)), n.from.x !== n.to.x && (i = k.effects.setTransition(t, a, n.from.x, i), e = k.effects.setTransition(t, a, n.to.x, e)), h && k.effects.saveStyle(t), t.css(i), t.animate(e, s.duration, s.easing, function () {
        h && k.effects.restoreStyle(t);
      });
    })), i.animate(g, {
      queue: !1,
      duration: s.duration,
      easing: s.easing,
      complete: function complete() {
        var t = i.offset();
        0 === g.opacity && i.css("opacity", f.opacity), h || (i.css("position", "static" === u ? "relative" : u).offset(t), k.effects.saveStyle(i)), e();
      }
    });
  }), k.effects.define("scale", function (t, e) {
    var i = k(this),
        s = t.mode,
        s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
        s = k.extend(!0, {
      from: k.effects.scaledDimensions(i),
      to: k.effects.scaledDimensions(i, s, t.direction || "both"),
      origin: t.origin || ["middle", "center"]
    }, t);
    t.fade && (s.from.opacity = 1, s.to.opacity = 0), k.effects.effect.size.call(this, s, e);
  }), k.effects.define("puff", "hide", function (t, e) {
    t = k.extend(!0, {}, t, {
      fade: !0,
      percent: parseInt(t.percent, 10) || 150
    });
    k.effects.effect.scale.call(this, t, e);
  }), k.effects.define("pulsate", "show", function (t, e) {
    var i = k(this),
        s = t.mode,
        n = "show" === s,
        s = n || "hide" === s,
        o = 2 * (t.times || 5) + (s ? 1 : 0),
        a = t.duration / o,
        r = 0,
        h = 1,
        s = i.queue().length;

    for (!n && i.is(":visible") || (i.css("opacity", 0).show(), r = 1); h < o; h++) {
      i.animate({
        opacity: r
      }, a, t.easing), r = 1 - r;
    }

    i.animate({
      opacity: r
    }, a, t.easing), i.queue(e), k.effects.unshift(i, s, 1 + o);
  }), k.effects.define("shake", function (t, e) {
    var i = 1,
        s = k(this),
        n = t.direction || "left",
        o = t.distance || 20,
        a = t.times || 3,
        r = 2 * a + 1,
        h = Math.round(t.duration / r),
        l = "up" === n || "down" === n ? "top" : "left",
        c = "up" === n || "left" === n,
        u = {},
        d = {},
        p = {},
        n = s.queue().length;

    for (k.effects.createPlaceholder(s), u[l] = (c ? "-=" : "+=") + o, d[l] = (c ? "+=" : "-=") + 2 * o, p[l] = (c ? "-=" : "+=") + 2 * o, s.animate(u, h, t.easing); i < a; i++) {
      s.animate(d, h, t.easing).animate(p, h, t.easing);
    }

    s.animate(d, h, t.easing).animate(u, h / 2, t.easing).queue(e), k.effects.unshift(s, n, 1 + r);
  }), k.effects.define("slide", "show", function (t, e) {
    var i,
        s,
        n = k(this),
        o = {
      up: ["bottom", "top"],
      down: ["top", "bottom"],
      left: ["right", "left"],
      right: ["left", "right"]
    },
        a = t.mode,
        r = t.direction || "left",
        h = "up" === r || "down" === r ? "top" : "left",
        l = "up" === r || "left" === r,
        c = t.distance || n["top" == h ? "outerHeight" : "outerWidth"](!0),
        u = {};
    k.effects.createPlaceholder(n), i = n.cssClip(), s = n.position()[h], u[h] = (l ? -1 : 1) * c + s, u.clip = n.cssClip(), u.clip[o[r][1]] = u.clip[o[r][0]], "show" === a && (n.cssClip(u.clip), n.css(h, u[h]), u.clip = i, u[h] = s), n.animate(u, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: e
    });
  });
  !1 !== k.uiBackCompat && (V = k.effects.define("transfer", function (t, e) {
    k(this).transfer(t, e);
  }));
  k.ui.focusable = function (t, e) {
    var i,
        s,
        n,
        o,
        a = t.nodeName.toLowerCase();
    return "area" === a ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && 0 < (s = k("img[usemap='#" + s + "']")).length && s.is(":visible")) : (/^(input|select|textarea|button|object)$/.test(a) ? (n = !t.disabled) && (o = k(t).closest("fieldset")[0]) && (n = !o.disabled) : n = "a" === a && t.href || e, n && k(t).is(":visible") && function (t) {
      var e = t.css("visibility");

      for (; "inherit" === e;) {
        t = t.parent(), e = t.css("visibility");
      }

      return "hidden" !== e;
    }(k(t)));
  }, k.extend(k.expr[":"], {
    focusable: function focusable(t) {
      return k.ui.focusable(t, null != k.attr(t, "tabindex"));
    }
  });
  k.ui.focusable, k.fn.form = function () {
    return "string" == typeof this[0].form ? this.closest("form") : k(this[0].form);
  }, k.ui.formResetMixin = {
    _formResetHandler: function _formResetHandler() {
      var e = k(this);
      setTimeout(function () {
        var t = e.data("ui-form-reset-instances");
        k.each(t, function () {
          this.refresh();
        });
      });
    },
    _bindFormResetHandler: function _bindFormResetHandler() {
      var t;
      this.form = this.element.form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t));
    },
    _unbindFormResetHandler: function _unbindFormResetHandler() {
      var t;
      this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(k.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"));
    }
  };
  "1.7" === k.fn.jquery.substring(0, 3) && (k.each(["Width", "Height"], function (t, i) {
    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        s = i.toLowerCase(),
        o = {
      innerWidth: k.fn.innerWidth,
      innerHeight: k.fn.innerHeight,
      outerWidth: k.fn.outerWidth,
      outerHeight: k.fn.outerHeight
    };

    function a(t, e, i, s) {
      return k.each(n, function () {
        e -= parseFloat(k.css(t, "padding" + this)) || 0, i && (e -= parseFloat(k.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(k.css(t, "margin" + this)) || 0);
      }), e;
    }

    k.fn["inner" + i] = function (t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
        k(this).css(s, a(this, t) + "px");
      });
    }, k.fn["outer" + i] = function (t, e) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
        k(this).css(s, a(this, t, !0, e) + "px");
      });
    };
  }), k.fn.addBack = function (t) {
    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
  });
  var $, X;
  k.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, k.ui.escapeSelector = ($ = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function (t) {
    return t.replace($, "\\$1");
  }), k.fn.labels = function () {
    var t, e, i;
    return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"), (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()), t = "label[for='" + k.ui.escapeSelector(t) + "']", e = e.add(i.find(t).addBack(t))), this.pushStack(e));
  }, k.fn.scrollParent = function (t) {
    var e = this.css("position"),
        i = "absolute" === e,
        s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
        t = this.parents().filter(function () {
      var t = k(this);
      return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
    }).eq(0);
    return "fixed" !== e && t.length ? t : k(this[0].ownerDocument || document);
  }, k.extend(k.expr[":"], {
    tabbable: function tabbable(t) {
      var e = k.attr(t, "tabindex"),
          i = null != e;
      return (!i || 0 <= e) && k.ui.focusable(t, i);
    }
  }), k.fn.extend({
    uniqueId: (X = 0, function () {
      return this.each(function () {
        this.id || (this.id = "ui-id-" + ++X);
      });
    }),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && k(this).removeAttr("id");
      });
    }
  }), k.widget("ui.accordion", {
    version: "1.12.1",
    options: {
      active: 0,
      animate: {},
      classes: {
        "ui-accordion-header": "ui-corner-top",
        "ui-accordion-header-collapsed": "ui-corner-all",
        "ui-accordion-content": "ui-corner-bottom"
      },
      collapsible: !1,
      event: "click",
      header: "> li > :first-child, > :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function _create() {
      var t = this.options;
      this.prevShow = this.prevHide = k(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : k()
      };
    },
    _createIcons: function _createIcons() {
      var t,
          e = this.options.icons;
      e && (t = k("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + e.header), t.prependTo(this.headers), t = this.active.children(".ui-accordion-header-icon"), this._removeClass(t, e.header)._addClass(t, null, e.activeHeader)._addClass(this.headers, "ui-accordion-icons"));
    },
    _destroyIcons: function _destroyIcons() {
      this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove();
    },
    _destroy: function _destroy() {
      var t;
      this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "");
    },
    _setOption: function _setOption(t, e) {
      "active" !== t ? ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons())) : this._activate(e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t);
    },
    _keydown: function _keydown(t) {
      if (!t.altKey && !t.ctrlKey) {
        var e = k.ui.keyCode,
            i = this.headers.length,
            s = this.headers.index(t.target),
            n = !1;

        switch (t.keyCode) {
          case e.RIGHT:
          case e.DOWN:
            n = this.headers[(s + 1) % i];
            break;

          case e.LEFT:
          case e.UP:
            n = this.headers[(s - 1 + i) % i];
            break;

          case e.SPACE:
          case e.ENTER:
            this._eventHandler(t);

            break;

          case e.HOME:
            n = this.headers[0];
            break;

          case e.END:
            n = this.headers[i - 1];
        }

        n && (k(t.target).attr("tabIndex", -1), k(n).attr("tabIndex", 0), k(n).trigger("focus"), t.preventDefault());
      }
    },
    _panelKeyDown: function _panelKeyDown(t) {
      t.keyCode === k.ui.keyCode.UP && t.ctrlKey && k(t.currentTarget).prev().trigger("focus");
    },
    refresh: function refresh() {
      var t = this.options;
      this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = k()) : !1 === t.active ? this._activate(0) : this.active.length && !k.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = k()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    },
    _processPanels: function _processPanels() {
      var t = this.headers,
          e = this.panels;
      this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)));
    },
    _refresh: function _refresh() {
      var i,
          t = this.options,
          e = t.heightStyle,
          s = this.element.parent();
      this.active = this._findActive(t.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
        var t = k(this),
            e = t.uniqueId().attr("id"),
            i = t.next(),
            s = i.uniqueId().attr("id");
        t.attr("aria-controls", s), i.attr("aria-labelledby", e);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = s.height(), this.element.siblings(":visible").each(function () {
        var t = k(this),
            e = t.css("position");
        "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
      }), this.headers.each(function () {
        i -= k(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()));
      }).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function () {
        var t = k(this).is(":visible");
        t || k(this).show(), i = Math.max(i, k(this).css("height", "").height()), t || k(this).hide();
      }).height(i));
    },
    _activate: function _activate(t) {
      t = this._findActive(t)[0];
      t !== this.active[0] && (t = t || this.active[0], this._eventHandler({
        target: t,
        currentTarget: t,
        preventDefault: k.noop
      }));
    },
    _findActive: function _findActive(t) {
      return "number" == typeof t ? this.headers.eq(t) : k();
    },
    _setupEvents: function _setupEvents(t) {
      var i = {
        keydown: "_keydown"
      };
      t && k.each(t.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function _eventHandler(t) {
      var e = this.options,
          i = this.active,
          s = k(t.currentTarget),
          n = s[0] === i[0],
          o = n && e.collapsible,
          a = o ? k() : s.next(),
          r = i.next(),
          a = {
        oldHeader: i,
        oldPanel: r,
        newHeader: o ? k() : s,
        newPanel: a
      };
      t.preventDefault(), n && !e.collapsible || !1 === this._trigger("beforeActivate", t, a) || (e.active = !o && this.headers.index(s), this.active = n ? k() : s, this._toggle(a), this._removeClass(i, "ui-accordion-header-active", "ui-state-active"), e.icons && (i = i.children(".ui-accordion-header-icon"), this._removeClass(i, null, e.icons.activeHeader)._addClass(i, null, e.icons.header)), n || (this._removeClass(s, "ui-accordion-header-collapsed")._addClass(s, "ui-accordion-header-active", "ui-state-active"), e.icons && (n = s.children(".ui-accordion-header-icon"), this._removeClass(n, null, e.icons.header)._addClass(n, null, e.icons.activeHeader)), this._addClass(s.next(), "ui-accordion-content-active")));
    },
    _toggle: function _toggle(t) {
      var e = t.newPanel,
          i = this.prevShow.length ? this.prevShow : t.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({
        "aria-hidden": "true"
      }), i.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), e.length && i.length ? i.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : e.length && this.headers.filter(function () {
        return 0 === parseInt(k(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _animate: function _animate(t, i, e) {
      var s,
          n,
          o,
          a = this,
          r = 0,
          h = t.css("box-sizing"),
          l = t.length && (!i.length || t.index() < i.index()),
          c = this.options.animate || {},
          u = l && c.down || c,
          l = function l() {
        a._toggleComplete(e);
      };

      return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, i.length ? t.length ? (s = t.show().outerHeight(), i.animate(this.hideProps, {
        duration: o,
        easing: n,
        step: function step(t, e) {
          e.now = Math.round(t);
        }
      }), void t.hide().animate(this.showProps, {
        duration: o,
        easing: n,
        complete: l,
        step: function step(t, e) {
          e.now = Math.round(t), "height" !== e.prop ? "content-box" === h && (r += e.now) : "content" !== a.options.heightStyle && (e.now = Math.round(s - i.outerHeight() - r), r = 0);
        }
      })) : i.animate(this.hideProps, o, n, l) : t.animate(this.showProps, o, n, l);
    },
    _toggleComplete: function _toggleComplete(t) {
      var e = t.oldPanel,
          i = e.prev();
      this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t);
    }
  }), k.ui.safeActiveElement = function (e) {
    var i;

    try {
      i = e.activeElement;
    } catch (t) {
      i = e.body;
    }

    return (i = i || e.body).nodeName || (i = e.body), i;
  }, k.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-caret-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
        role: this.options.role,
        tabIndex: 0
      }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
        "mousedown .ui-menu-item": function mousedownUiMenuItem(t) {
          t.preventDefault();
        },
        "click .ui-menu-item": function clickUiMenuItem(t) {
          var e = k(t.target),
              i = k(k.ui.safeActiveElement(this.document[0]));
          !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function mouseenterUiMenuItem(t) {
          var e, i;
          this.previousFilter || (e = k(t.target).closest(".ui-menu-item"), i = k(t.currentTarget), e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i)));
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function focus(t, e) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          e || this.focus(t, i);
        },
        blur: function blur(t) {
          this._delay(function () {
            k.contains(this.element[0], k.ui.safeActiveElement(this.document[0])) || this.collapseAll(t);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function click(t) {
          this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function _destroy() {
      var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function () {
        var t = k(this);
        t.data("ui-menu-submenu-caret") && t.remove();
      });
    },
    _keydown: function _keydown(t) {
      var e,
          i,
          s,
          n = !0;

      switch (t.keyCode) {
        case k.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;

        case k.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;

        case k.ui.keyCode.HOME:
          this._move("first", "first", t);

          break;

        case k.ui.keyCode.END:
          this._move("last", "last", t);

          break;

        case k.ui.keyCode.UP:
          this.previous(t);
          break;

        case k.ui.keyCode.DOWN:
          this.next(t);
          break;

        case k.ui.keyCode.LEFT:
          this.collapse(t);
          break;

        case k.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
          break;

        case k.ui.keyCode.ENTER:
        case k.ui.keyCode.SPACE:
          this._activate(t);

          break;

        case k.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;

        default:
          n = !1, e = this.previousFilter || "", s = !1, i = 96 <= t.keyCode && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), i === e ? s = !0 : i = e + i, e = this._filterMenuItems(i), (e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (i = String.fromCharCode(t.keyCode), e = this._filterMenuItems(i)), e.length ? (this.focus(t, e), this.previousFilter = i, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }

      n && t.preventDefault();
    },
    _activate: function _activate(t) {
      this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t));
    },
    refresh: function refresh() {
      var t,
          e,
          s = this,
          n = this.options.icons.submenu,
          i = this.element.find(this.options.menus);
      this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), e = i.filter(":not(.ui-menu)").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var t = k(this),
            e = t.prev(),
            i = k("<span>").data("ui-menu-submenu-caret", !0);
        s._addClass(i, "ui-menu-icon", "ui-icon " + n), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"));
      }), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
        var t = k(this);
        s._isDivider(t) && s._addClass(t, "ui-menu-divider", "ui-widget-content");
      }), i = (e = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), this._addClass(e, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !k.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function _itemRole() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function _setOption(t, e) {
      var i;
      "icons" === t && (i = this.element.find(".ui-menu-icon"), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)), this._super(t, e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    focus: function focus(t, e) {
      var i;
      this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), i = this.active.children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), i = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(i, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
        item: e
      });
    },
    _scrollIntoView: function _scrollIntoView(t) {
      var e, i, s;
      this._hasScroll() && (i = parseFloat(k.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(k.css(this.activeMenu[0], "paddingTop")) || 0, e = t.offset().top - this.activeMenu.offset().top - i - s, i = this.activeMenu.scrollTop(), s = this.activeMenu.height(), t = t.outerHeight(), e < 0 ? this.activeMenu.scrollTop(i + e) : s < e + t && this.activeMenu.scrollTop(i + e - s + t));
    },
    blur: function blur(t, e) {
      e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
        item: this.active
      }), this.active = null);
    },
    _startOpening: function _startOpening(t) {
      clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(t);
      }, this.delay));
    },
    _open: function _open(t) {
      var e = k.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e);
    },
    collapseAll: function collapseAll(e, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var t = i ? this.element : k(e && e.target).closest(this.element.find(".ui-menu"));
        t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t;
      }, this.delay);
    },
    _close: function _close(t) {
      (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
    },
    _closeOnDocumentClick: function _closeOnDocumentClick(t) {
      return !k(t.target).closest(".ui-menu").length;
    },
    _isDivider: function _isDivider(t) {
      return !/[^\-\u2014\u2013\s]/.test(t.text());
    },
    collapse: function collapse(t) {
      var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      e && e.length && (this._close(), this.focus(t, e));
    },
    expand: function expand(t) {
      var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      e && e.length && (this._open(e.parent()), this._delay(function () {
        this.focus(t, e);
      }));
    },
    next: function next(t) {
      this._move("next", "first", t);
    },
    previous: function previous(t) {
      this._move("prev", "last", t);
    },
    isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function _move(t, e, i) {
      var s;
      this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s);
    },
    nextPage: function nextPage(t) {
      var e, i, s;
      this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return (e = k(this)).offset().top - i - s < 0;
      }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(t);
    },
    previousPage: function previousPage(t) {
      var e, i, s;
      this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return 0 < (e = k(this)).offset().top - i + s;
      }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first())) : this.next(t);
    },
    _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function select(t) {
      this.active = this.active || k(t.target).closest(".ui-menu-item");
      var e = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e);
    },
    _filterMenuItems: function _filterMenuItems(t) {
      var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          e = new RegExp("^" + t, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return e.test(k.trim(k(this).children(".ui-menu-item-wrapper").text()));
      });
    }
  });
  k.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function _create() {
      var i,
          s,
          n,
          t = this.element[0].nodeName.toLowerCase(),
          e = "textarea" === t,
          t = "input" === t;
      this.isMultiLine = e || !t && this._isContentEditable(this.element), this.valueMethod = this.element[e || t ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
        keydown: function keydown(t) {
          if (this.element.prop("readOnly")) s = n = i = !0;else {
            s = n = i = !1;
            var e = k.ui.keyCode;

            switch (t.keyCode) {
              case e.PAGE_UP:
                i = !0, this._move("previousPage", t);
                break;

              case e.PAGE_DOWN:
                i = !0, this._move("nextPage", t);
                break;

              case e.UP:
                i = !0, this._keyEvent("previous", t);
                break;

              case e.DOWN:
                i = !0, this._keyEvent("next", t);
                break;

              case e.ENTER:
                this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                break;

              case e.TAB:
                this.menu.active && this.menu.select(t);
                break;

              case e.ESCAPE:
                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                break;

              default:
                s = !0, this._searchTimeout(t);
            }
          }
        },
        keypress: function keypress(t) {
          if (i) return i = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());

          if (!s) {
            var e = k.ui.keyCode;

            switch (t.keyCode) {
              case e.PAGE_UP:
                this._move("previousPage", t);

                break;

              case e.PAGE_DOWN:
                this._move("nextPage", t);

                break;

              case e.UP:
                this._keyEvent("previous", t);

                break;

              case e.DOWN:
                this._keyEvent("next", t);

            }
          }
        },
        input: function input(t) {
          if (n) return n = !1, void t.preventDefault();

          this._searchTimeout(t);
        },
        focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function blur(t) {
          this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), this._change(t));
        }
      }), this._initSource(), this.menu = k("<ul>").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
        mousedown: function mousedown(t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur, this.element[0] !== k.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus");
          });
        },
        menufocus: function menufocus(t, e) {
          var i;
          if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function () {
            k(t.target).trigger(t.originalEvent);
          });
          i = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
            item: i
          }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value), (i = e.item.attr("aria-label") || i.value) && k.trim(i).length && (this.liveRegion.children().hide(), k("<div>").text(i).appendTo(this.liveRegion));
        },
        menuselect: function menuselect(t, e) {
          var i = e.item.data("ui-autocomplete-item"),
              s = this.previous;
          this.element[0] !== k.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
            this.previous = s, this.selectedItem = i;
          })), !1 !== this._trigger("select", t, {
            item: i
          }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i;
        }
      }), this.liveRegion = k("<div>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort();
    },
    _isEventTargetInWidget: function _isEventTargetInWidget(t) {
      var e = this.menu.element[0];
      return t.target === this.element[0] || t.target === e || k.contains(e, t.target);
    },
    _closeOnClickOutside: function _closeOnClickOutside(t) {
      this._isEventTargetInWidget(t) || this.close();
    },
    _appendTo: function _appendTo() {
      var t = this.options.appendTo;
      return (t = t && (t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t;
    },
    _initSource: function _initSource() {
      var i,
          s,
          n = this;
      k.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, e) {
        e(k.ui.autocomplete.filter(i, t.term));
      }) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function (t, e) {
        n.xhr && n.xhr.abort(), n.xhr = k.ajax({
          url: s,
          data: t,
          dataType: "json",
          success: function success(t) {
            e(t);
          },
          error: function error() {
            e([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function _searchTimeout(s) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var t = this.term === this._value(),
            e = this.menu.element.is(":visible"),
            i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;

        t && (!t || e || i) || (this.selectedItem = null, this.search(null, s));
      }, this.options.delay);
    },
    search: function search(t, e) {
      return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0;
    },
    _search: function _search(t) {
      this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: t
      }, this._response());
    },
    _response: function _response() {
      var e = ++this.requestIndex;
      return k.proxy(function (t) {
        e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function __response(t) {
      t = t && this._normalize(t), this._trigger("response", null, {
        content: t
      }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close();
    },
    close: function close(t) {
      this.cancelSearch = !0, this._close(t);
    },
    _close: function _close(t) {
      this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t));
    },
    _change: function _change(t) {
      this.previous !== this._value() && this._trigger("change", t, {
        item: this.selectedItem
      });
    },
    _normalize: function _normalize(t) {
      return t.length && t[0].label && t[0].value ? t : k.map(t, function (t) {
        return "string" == typeof t ? {
          label: t,
          value: t
        } : k.extend({}, t, {
          label: t.label || t.value,
          value: t.value || t.label
        });
      });
    },
    _suggest: function _suggest(t) {
      var e = this.menu.element.empty();
      this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(k.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
        mousedown: "_closeOnClickOutside"
      });
    },
    _resizeMenu: function _resizeMenu() {
      var t = this.menu.element;
      t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function _renderMenu(i, t) {
      var s = this;
      k.each(t, function (t, e) {
        s._renderItemData(i, e);
      });
    },
    _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-autocomplete-item", e);
    },
    _renderItem: function _renderItem(t, e) {
      return k("<li>").append(k("<div>").text(e.label)).appendTo(t);
    },
    _move: function _move(t, e) {
      if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e);
      this.search(null, e);
    },
    widget: function widget() {
      return this.menu.element;
    },
    _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function _keyEvent(t, e) {
      this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault());
    },
    _isContentEditable: function _isContentEditable(t) {
      if (!t.length) return !1;
      var e = t.prop("contentEditable");
      return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e;
    }
  }), k.extend(k.ui.autocomplete, {
    escapeRegex: function escapeRegex(t) {
      return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function filter(t, e) {
      var i = new RegExp(k.ui.autocomplete.escapeRegex(e), "i");
      return k.grep(t, function (t) {
        return i.test(t.label || t.value || t);
      });
    }
  }), k.widget("ui.autocomplete", k.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function results(t) {
          return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function __response(t) {
      var e;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), k("<div>").text(e).appendTo(this.liveRegion));
    }
  });
  k.ui.autocomplete;
  var G = /ui-corner-([a-z]){2,6}/g;
  k.widget("ui.controlgroup", {
    version: "1.12.1",
    defaultElement: "<div>",
    options: {
      direction: "horizontal",
      disabled: null,
      onlyVisible: !0,
      items: {
        button: "input[type=button], input[type=submit], input[type=reset], button, a",
        controlgroupLabel: ".ui-controlgroup-label",
        checkboxradio: "input[type='checkbox'], input[type='radio']",
        selectmenu: "select",
        spinner: ".ui-spinner-input"
      }
    },
    _create: function _create() {
      this._enhance();
    },
    _enhance: function _enhance() {
      this.element.attr("role", "toolbar"), this.refresh();
    },
    _destroy: function _destroy() {
      this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
    },
    _initWidgets: function _initWidgets() {
      var o = this,
          a = [];
      k.each(this.options.items, function (s, t) {
        var e,
            n = {};
        if (t) return "controlgroupLabel" === s ? ((e = o.element.find(t)).each(function () {
          var t = k(this);
          t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
        }), o._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void (a = a.concat(e.get()))) : void (k.fn[s] && (n = o["_" + s + "Options"] ? o["_" + s + "Options"]("middle") : {
          classes: {}
        }, o.element.find(t).each(function () {
          var t = k(this),
              e = t[s]("instance"),
              i = k.widget.extend({}, n);
          "button" === s && t.parent(".ui-spinner").length || ((e = e || t[s]()[s]("instance")) && (i.classes = o._resolveClassesValues(i.classes, e)), t[s](i), i = t[s]("widget"), k.data(i[0], "ui-controlgroup-data", e || t[s]("instance")), a.push(i[0]));
        })));
      }), this.childWidgets = k(k.unique(a)), this._addClass(this.childWidgets, "ui-controlgroup-item");
    },
    _callChildMethod: function _callChildMethod(e) {
      this.childWidgets.each(function () {
        var t = k(this).data("ui-controlgroup-data");
        t && t[e] && t[e]();
      });
    },
    _updateCornerClass: function _updateCornerClass(t, e) {
      e = this._buildSimpleOptions(e, "label").classes.label;
      this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, e);
    },
    _buildSimpleOptions: function _buildSimpleOptions(t, e) {
      var i = "vertical" === this.options.direction,
          s = {
        classes: {}
      };
      return s.classes[e] = {
        middle: "",
        first: "ui-corner-" + (i ? "top" : "left"),
        last: "ui-corner-" + (i ? "bottom" : "right"),
        only: "ui-corner-all"
      }[t], s;
    },
    _spinnerOptions: function _spinnerOptions(t) {
      t = this._buildSimpleOptions(t, "ui-spinner");
      return t.classes["ui-spinner-up"] = "", t.classes["ui-spinner-down"] = "", t;
    },
    _buttonOptions: function _buttonOptions(t) {
      return this._buildSimpleOptions(t, "ui-button");
    },
    _checkboxradioOptions: function _checkboxradioOptions(t) {
      return this._buildSimpleOptions(t, "ui-checkboxradio-label");
    },
    _selectmenuOptions: function _selectmenuOptions(t) {
      var e = "vertical" === this.options.direction;
      return {
        width: e && "auto",
        classes: {
          middle: {
            "ui-selectmenu-button-open": "",
            "ui-selectmenu-button-closed": ""
          },
          first: {
            "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
          },
          last: {
            "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
            "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
          },
          only: {
            "ui-selectmenu-button-open": "ui-corner-top",
            "ui-selectmenu-button-closed": "ui-corner-all"
          }
        }[t]
      };
    },
    _resolveClassesValues: function _resolveClassesValues(i, s) {
      var n = {};
      return k.each(i, function (t) {
        var e = s.options.classes[t] || "",
            e = k.trim(e.replace(G, ""));
        n[t] = (e + " " + i[t]).replace(/\s+/g, " ");
      }), n;
    },
    _setOption: function _setOption(t, e) {
      "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable");
    },
    refresh: function refresh() {
      var n,
          o = this;
      this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), n = this.childWidgets, this.options.onlyVisible && (n = n.filter(":visible")), n.length && (k.each(["first", "last"], function (t, e) {
        var i,
            s = n[e]().data("ui-controlgroup-data");
        s && o["_" + s.widgetName + "Options"] ? ((i = o["_" + s.widgetName + "Options"](1 === n.length ? "only" : e)).classes = o._resolveClassesValues(i.classes, s), s.element[s.widgetName](i)) : o._updateCornerClass(n[e](), e);
      }), this._callChildMethod("refresh"));
    }
  });
  k.widget("ui.checkboxradio", [k.ui.formResetMixin, {
    version: "1.12.1",
    options: {
      disabled: null,
      label: null,
      icon: !0,
      classes: {
        "ui-checkboxradio-label": "ui-corner-all",
        "ui-checkboxradio-icon": "ui-corner-all"
      }
    },
    _getCreateOptions: function _getCreateOptions() {
      var t,
          e = this,
          i = this._super() || {};
      return this._readType(), t = this.element.labels(), this.label = k(t[t.length - 1]), this.label.length || k.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
        e.originalLabel += 3 === this.nodeType ? k(this).text() : this.outerHTML;
      }), this.originalLabel && (i.label = this.originalLabel), null != (t = this.element[0].disabled) && (i.disabled = t), i;
    },
    _create: function _create() {
      var t = this.element[0].checked;
      this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
        change: "_toggleClasses",
        focus: function focus() {
          this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
        },
        blur: function blur() {
          this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
        }
      });
    },
    _readType: function _readType() {
      var t = this.element[0].nodeName.toLowerCase();
      this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || k.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type);
    },
    _enhance: function _enhance() {
      this._updateIcon(this.element[0].checked);
    },
    widget: function widget() {
      return this.label;
    },
    _getRadioGroup: function _getRadioGroup() {
      var t = this.element[0].name,
          e = "input[name='" + k.ui.escapeSelector(t) + "']";
      return t ? (this.form.length ? k(this.form[0].elements).filter(e) : k(e).filter(function () {
        return 0 === k(this).form().length;
      })).not(this.element) : k([]);
    },
    _toggleClasses: function _toggleClasses() {
      var t = this.element[0].checked;
      this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function () {
        var t = k(this).checkboxradio("instance");
        t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active");
      });
    },
    _destroy: function _destroy() {
      this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove());
    },
    _setOption: function _setOption(t, e) {
      if ("label" !== t || e) {
        if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e);
        this.refresh();
      }
    },
    _updateIcon: function _updateIcon(t) {
      var e = "ui-icon ui-icon-background ";
      this.options.icon ? (this.icon || (this.icon = k("<span>"), this.iconSpace = k("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon);
    },
    _updateLabel: function _updateLabel() {
      var t = this.label.contents().not(this.element[0]);
      this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label);
    },
    refresh: function refresh() {
      var t = this.element[0].checked,
          e = this.element[0].disabled;
      this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
        disabled: e
      });
    }
  }]);
  var Q;
  k.ui.checkboxradio;
  k.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
      classes: {
        "ui-button": "ui-corner-all"
      },
      disabled: null,
      icon: null,
      iconPosition: "beginning",
      label: null,
      showLabel: !0
    },
    _getCreateOptions: function _getCreateOptions() {
      var t,
          e = this._super() || {};
      return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e;
    },
    _create: function _create() {
      !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
        keyup: function keyup(t) {
          t.keyCode === k.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"));
        }
      });
    },
    _enhance: function _enhance() {
      this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip());
    },
    _updateTooltip: function _updateTooltip() {
      this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label);
    },
    _updateIcon: function _updateIcon(t, e) {
      var i = "iconPosition" !== t,
          s = i ? this.options.iconPosition : e,
          t = "top" === s || "bottom" === s;
      this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = k("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(s), t ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = k("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s));
    },
    _destroy: function _destroy() {
      this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title");
    },
    _attachIconSpace: function _attachIconSpace(t) {
      this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace);
    },
    _attachIcon: function _attachIcon(t) {
      this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon);
    },
    _setOptions: function _setOptions(t) {
      var e = (void 0 === t.showLabel ? this.options : t).showLabel,
          i = (void 0 === t.icon ? this.options : t).icon;
      e || i || (t.showLabel = !0), this._super(t);
    },
    _setOption: function _setOption(t, e) {
      "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.blur());
    },
    refresh: function refresh() {
      var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOptions({
        disabled: t
      }), this._updateTooltip();
    }
  }), !1 !== k.uiBackCompat && (k.widget("ui.button", k.ui.button, {
    options: {
      text: !0,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function _create() {
      this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super();
    },
    _setOption: function _setOption(t, e) {
      "text" !== t ? ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)) : this._super("showLabel", e);
    }
  }), k.fn.button = (Q = k.fn.button, function () {
    return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? Q.apply(this, arguments) : (k.ui.checkboxradio || k.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
      icon: !1
    }) : this.checkboxradio.apply(this, arguments));
  }), k.fn.buttonset = function () {
    return k.ui.controlgroup || k.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == _typeof(arguments[0]) && arguments[0].items && (arguments[0].items = {
      button: arguments[0].items
    }), this.controlgroup.apply(this, arguments));
  });
  var J;
  k.ui.button;

  function Z() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, k.extend(this._defaults, this.regional[""]), this.regional.en = k.extend(!0, {}, this.regional[""]), this.regional["en-US"] = k.extend(!0, {}, this.regional.en), this.dpDiv = tt(k("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }

  function tt(t) {
    var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t.on("mouseout", e, function () {
      k(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && k(this).removeClass("ui-datepicker-next-hover");
    }).on("mouseover", e, et);
  }

  function et() {
    k.datepicker._isDisabledDatepicker((J.inline ? J.dpDiv.parent() : J.input)[0]) || (k(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), k(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && k(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && k(this).addClass("ui-datepicker-next-hover"));
  }

  function it(t, e) {
    for (var i in k.extend(t, e), e) {
      null == e[i] && (t[i] = e[i]);
    }

    return t;
  }

  k.extend(k.ui, {
    datepicker: {
      version: "1.12.1"
    }
  }), k.extend(Z.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    },
    setDefaults: function setDefaults(t) {
      return it(this._defaults, t || {}), this;
    },
    _attachDatepicker: function _attachDatepicker(t, e) {
      var i,
          s = t.nodeName.toLowerCase(),
          n = "div" === s || "span" === s;
      t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (i = this._newInst(k(t), n)).settings = k.extend({}, e || {}), "input" === s ? this._connectDatepicker(t, i) : n && this._inlineDatepicker(t, i);
    },
    _newInst: function _newInst(t, e) {
      return {
        id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: e,
        dpDiv: e ? tt(k("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      };
    },
    _connectDatepicker: function _connectDatepicker(t, e) {
      var i = k(t);
      e.append = k([]), e.trigger = k([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e), k.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t));
    },
    _attachments: function _attachments(t, e) {
      var i,
          s = this._get(e, "appendText"),
          n = this._get(e, "isRTL");

      e.append && e.append.remove(), s && (e.append = k("<span class='" + this._appendClass + "'>" + s + "</span>"), t[n ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), "focus" !== (i = this._get(e, "showOn")) && "both" !== i || t.on("focus", this._showDatepicker), "button" !== i && "both" !== i || (s = this._get(e, "buttonText"), i = this._get(e, "buttonImage"), e.trigger = k(this._get(e, "buttonImageOnly") ? k("<img/>").addClass(this._triggerClass).attr({
        src: i,
        alt: s,
        title: s
      }) : k("<button type='button'></button>").addClass(this._triggerClass).html(i ? k("<img/>").attr({
        src: i,
        alt: s,
        title: s
      }) : s)), t[n ? "before" : "after"](e.trigger), e.trigger.on("click", function () {
        return k.datepicker._datepickerShowing && k.datepicker._lastInput === t[0] ? k.datepicker._hideDatepicker() : (k.datepicker._datepickerShowing && k.datepicker._lastInput !== t[0] && k.datepicker._hideDatepicker(), k.datepicker._showDatepicker(t[0])), !1;
      }));
    },
    _autoSize: function _autoSize(t) {
      var e, i, s, n, o, a;
      this._get(t, "autoSize") && !t.inline && (o = new Date(2009, 11, 20), (a = this._get(t, "dateFormat")).match(/[DM]/) && (e = function e(t) {
        for (n = s = i = 0; n < t.length; n++) {
          t[n].length > i && (i = t[n].length, s = n);
        }

        return s;
      }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length));
    },
    _inlineDatepicker: function _inlineDatepicker(t, e) {
      var i = k(t);
      i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), k.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function _dialogDatepicker(t, e, i, s, n) {
      var o,
          a = this._dialogInst;
      return a || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = k("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), k("body").append(this._dialogInput), (a = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, k.data(this._dialogInput[0], "datepicker", a)), it(a.settings, s || {}), e = e && e.constructor === Date ? this._formatDate(a, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (o = document.documentElement.clientWidth, s = document.documentElement.clientHeight, e = document.documentElement.scrollLeft || document.body.scrollLeft, n = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [o / 2 - 100 + e, s / 2 - 150 + n]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), a.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), k.blockUI && k.blockUI(this.dpDiv), k.data(this._dialogInput[0], "datepicker", a), this;
    },
    _destroyDatepicker: function _destroyDatepicker(t) {
      var e,
          i = k(t),
          s = k.data(t, "datepicker");
      i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), k.removeData(t, "datepicker"), "input" === e ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(), J === s && (J = null));
    },
    _enableDatepicker: function _enableDatepicker(e) {
      var t,
          i = k(e),
          s = k.data(e, "datepicker");
      i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1, s.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : "div" !== t && "span" !== t || ((i = i.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = k.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }));
    },
    _disableDatepicker: function _disableDatepicker(e) {
      var t,
          i = k(e),
          s = k.data(e, "datepicker");
      i.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0, s.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : "div" !== t && "span" !== t || ((i = i.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = k.map(this._disabledInputs, function (t) {
        return t === e ? null : t;
      }), this._disabledInputs[this._disabledInputs.length] = e);
    },
    _isDisabledDatepicker: function _isDisabledDatepicker(t) {
      if (!t) return !1;

      for (var e = 0; e < this._disabledInputs.length; e++) {
        if (this._disabledInputs[e] === t) return !0;
      }

      return !1;
    },
    _getInst: function _getInst(t) {
      try {
        return k.data(t, "datepicker");
      } catch (t) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function _optionDatepicker(t, e, i) {
      var s,
          n,
          o,
          a,
          r = this._getInst(t);

      if (2 === arguments.length && "string" == typeof e) return "defaults" === e ? k.extend({}, k.datepicker._defaults) : r ? "all" === e ? k.extend({}, r.settings) : this._get(r, e) : null;
      s = e || {}, "string" == typeof e && ((s = {})[e] = i), r && (this._curInst === r && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(r, "min"), a = this._getMinMaxDate(r, "max"), it(r.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (r.settings.minDate = this._formatDate(r, o)), null !== a && void 0 !== s.dateFormat && void 0 === s.maxDate && (r.settings.maxDate = this._formatDate(r, a)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(k(t), r), this._autoSize(r), this._setDate(r, n), this._updateAlternate(r), this._updateDatepicker(r));
    },
    _changeDatepicker: function _changeDatepicker(t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function _refreshDatepicker(t) {
      t = this._getInst(t);
      t && this._updateDatepicker(t);
    },
    _setDateDatepicker: function _setDateDatepicker(t, e) {
      t = this._getInst(t);
      t && (this._setDate(t, e), this._updateDatepicker(t), this._updateAlternate(t));
    },
    _getDateDatepicker: function _getDateDatepicker(t, e) {
      t = this._getInst(t);
      return t && !t.inline && this._setDateFromField(t, e), t ? this._getDate(t) : null;
    },
    _doKeyDown: function _doKeyDown(t) {
      var e,
          i,
          s = k.datepicker._getInst(t.target),
          n = !0,
          o = s.dpDiv.is(".ui-datepicker-rtl");

      if (s._keyEvent = !0, k.datepicker._datepickerShowing) switch (t.keyCode) {
        case 9:
          k.datepicker._hideDatepicker(), n = !1;
          break;

        case 13:
          return (i = k("td." + k.datepicker._dayOverClass + ":not(." + k.datepicker._currentClass + ")", s.dpDiv))[0] && k.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), (e = k.datepicker._get(s, "onSelect")) ? (i = k.datepicker._formatDate(s), e.apply(s.input ? s.input[0] : null, [i, s])) : k.datepicker._hideDatepicker(), !1;

        case 27:
          k.datepicker._hideDatepicker();

          break;

        case 33:
          k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(s, "stepBigMonths") : -k.datepicker._get(s, "stepMonths"), "M");

          break;

        case 34:
          k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(s, "stepBigMonths") : +k.datepicker._get(s, "stepMonths"), "M");

          break;

        case 35:
          (t.ctrlKey || t.metaKey) && k.datepicker._clearDate(t.target), n = t.ctrlKey || t.metaKey;
          break;

        case 36:
          (t.ctrlKey || t.metaKey) && k.datepicker._gotoToday(t.target), n = t.ctrlKey || t.metaKey;
          break;

        case 37:
          (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? -k.datepicker._get(s, "stepBigMonths") : -k.datepicker._get(s, "stepMonths"), "M");
          break;

        case 38:
          (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, -7, "D"), n = t.ctrlKey || t.metaKey;
          break;

        case 39:
          (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && k.datepicker._adjustDate(t.target, t.ctrlKey ? +k.datepicker._get(s, "stepBigMonths") : +k.datepicker._get(s, "stepMonths"), "M");
          break;

        case 40:
          (t.ctrlKey || t.metaKey) && k.datepicker._adjustDate(t.target, 7, "D"), n = t.ctrlKey || t.metaKey;
          break;

        default:
          n = !1;
      } else 36 === t.keyCode && t.ctrlKey ? k.datepicker._showDatepicker(this) : n = !1;
      n && (t.preventDefault(), t.stopPropagation());
    },
    _doKeyPress: function _doKeyPress(t) {
      var e,
          i = k.datepicker._getInst(t.target);

      if (k.datepicker._get(i, "constrainInput")) return e = k.datepicker._possibleChars(k.datepicker._get(i, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i);
    },
    _doKeyUp: function _doKeyUp(t) {
      var e = k.datepicker._getInst(t.target);

      if (e.input.val() !== e.lastVal) try {
        k.datepicker.parseDate(k.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, k.datepicker._getFormatConfig(e)) && (k.datepicker._setDateFromField(e), k.datepicker._updateAlternate(e), k.datepicker._updateDatepicker(e));
      } catch (t) {}
      return !0;
    },
    _showDatepicker: function _showDatepicker(t) {
      var e, i, s, n;
      "input" !== (t = t.target || t).nodeName.toLowerCase() && (t = k("input", t.parentNode)[0]), k.datepicker._isDisabledDatepicker(t) || k.datepicker._lastInput === t || (n = k.datepicker._getInst(t), k.datepicker._curInst && k.datepicker._curInst !== n && (k.datepicker._curInst.dpDiv.stop(!0, !0), n && k.datepicker._datepickerShowing && k.datepicker._hideDatepicker(k.datepicker._curInst.input[0])), !1 !== (i = (s = k.datepicker._get(n, "beforeShow")) ? s.apply(t, [t, n]) : {}) && (it(n.settings, i), n.lastVal = null, k.datepicker._lastInput = t, k.datepicker._setDateFromField(n), k.datepicker._inDialog && (t.value = ""), k.datepicker._pos || (k.datepicker._pos = k.datepicker._findPos(t), k.datepicker._pos[1] += t.offsetHeight), e = !1, k(t).parents().each(function () {
        return !(e |= "fixed" === k(this).css("position"));
      }), s = {
        left: k.datepicker._pos[0],
        top: k.datepicker._pos[1]
      }, k.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
        position: "absolute",
        display: "block",
        top: "-1000px"
      }), k.datepicker._updateDatepicker(n), s = k.datepicker._checkOffset(n, s, e), n.dpDiv.css({
        position: k.datepicker._inDialog && k.blockUI ? "static" : e ? "fixed" : "absolute",
        display: "none",
        left: s.left + "px",
        top: s.top + "px"
      }), n.inline || (i = k.datepicker._get(n, "showAnim"), s = k.datepicker._get(n, "duration"), n.dpDiv.css("z-index", function (t) {
        for (var e, i; t.length && t[0] !== document;) {
          if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
          t = t.parent();
        }

        return 0;
      }(k(t)) + 1), k.datepicker._datepickerShowing = !0, k.effects && k.effects.effect[i] ? n.dpDiv.show(i, k.datepicker._get(n, "showOptions"), s) : n.dpDiv[i || "show"](i ? s : null), k.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), k.datepicker._curInst = n)));
    },
    _updateDatepicker: function _updateDatepicker(t) {
      this.maxRows = 4, (J = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);

      var e,
          i = this._getNumberOfMonths(t),
          s = i[1],
          n = t.dpDiv.find("." + this._dayOverClass + " a");

      0 < n.length && et.apply(n.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < s && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === k.datepicker._curInst && k.datepicker._datepickerShowing && k.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (e = t.yearshtml, setTimeout(function () {
        e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null;
      }, 0));
    },
    _shouldFocusInput: function _shouldFocusInput(t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
    },
    _checkOffset: function _checkOffset(t, e, i) {
      var s = t.dpDiv.outerWidth(),
          n = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          a = t.input ? t.input.outerHeight() : 0,
          r = document.documentElement.clientWidth + (i ? 0 : k(document).scrollLeft()),
          h = document.documentElement.clientHeight + (i ? 0 : k(document).scrollTop());
      return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left === t.input.offset().left ? k(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + a ? k(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > h && n < h ? Math.abs(n + a) : 0), e;
    },
    _findPos: function _findPos(t) {
      for (var e = this._getInst(t), i = this._get(e, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || k.expr.filters.hidden(t));) {
        t = t[i ? "previousSibling" : "nextSibling"];
      }

      return [(e = k(t).offset()).left, e.top];
    },
    _hideDatepicker: function _hideDatepicker(t) {
      var e,
          i,
          s = this._curInst;
      !s || t && s !== k.data(t, "datepicker") || this._datepickerShowing && (e = this._get(s, "showAnim"), i = this._get(s, "duration"), t = function t() {
        k.datepicker._tidyDialog(s);
      }, k.effects && (k.effects.effect[e] || k.effects[e]) ? s.dpDiv.hide(e, k.datepicker._get(s, "showOptions"), i, t) : s.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, t), e || t(), this._datepickerShowing = !1, (t = this._get(s, "onClose")) && t.apply(s.input ? s.input[0] : null, [s.input ? s.input.val() : "", s]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), k.blockUI && (k.unblockUI(), k("body").append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function _tidyDialog(t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
    },
    _checkExternalClick: function _checkExternalClick(t) {
      var e;
      k.datepicker._curInst && (e = k(t.target), t = k.datepicker._getInst(e[0]), (e[0].id === k.datepicker._mainDivId || 0 !== e.parents("#" + k.datepicker._mainDivId).length || e.hasClass(k.datepicker.markerClassName) || e.closest("." + k.datepicker._triggerClass).length || !k.datepicker._datepickerShowing || k.datepicker._inDialog && k.blockUI) && (!e.hasClass(k.datepicker.markerClassName) || k.datepicker._curInst === t) || k.datepicker._hideDatepicker());
    },
    _adjustDate: function _adjustDate(t, e, i) {
      var s = k(t),
          t = this._getInst(s[0]);

      this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(t, e + ("M" === i ? this._get(t, "showCurrentAtPos") : 0), i), this._updateDatepicker(t));
    },
    _gotoToday: function _gotoToday(t) {
      var e = k(t),
          i = this._getInst(e[0]);

      this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (t = new Date(), i.selectedDay = t.getDate(), i.drawMonth = i.selectedMonth = t.getMonth(), i.drawYear = i.selectedYear = t.getFullYear()), this._notifyChange(i), this._adjustDate(e);
    },
    _selectMonthYear: function _selectMonthYear(t, e, i) {
      var s = k(t),
          t = this._getInst(s[0]);

      t["selected" + ("M" === i ? "Month" : "Year")] = t["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(t), this._adjustDate(s);
    },
    _selectDay: function _selectDay(t, e, i, s) {
      var n = k(t);
      k(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]) || ((n = this._getInst(n[0])).selectedDay = n.currentDay = k("a", s).html(), n.selectedMonth = n.currentMonth = e, n.selectedYear = n.currentYear = i, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)));
    },
    _clearDate: function _clearDate(t) {
      t = k(t);

      this._selectDate(t, "");
    },
    _selectDate: function _selectDate(t, e) {
      var i = k(t),
          t = this._getInst(i[0]);

      e = null != e ? e : this._formatDate(t), t.input && t.input.val(e), this._updateAlternate(t), (i = this._get(t, "onSelect")) ? i.apply(t.input ? t.input[0] : null, [e, t]) : t.input && t.input.trigger("change"), t.inline ? this._updateDatepicker(t) : (this._hideDatepicker(), this._lastInput = t.input[0], "object" != _typeof(t.input[0]) && t.input.trigger("focus"), this._lastInput = null);
    },
    _updateAlternate: function _updateAlternate(t) {
      var e,
          i,
          s = this._get(t, "altField");

      s && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), t = this.formatDate(e, i, this._getFormatConfig(t)), k(s).val(t));
    },
    noWeekends: function noWeekends(t) {
      t = t.getDay();
      return [0 < t && t < 6, ""];
    },
    iso8601Week: function iso8601Week(t) {
      var e = new Date(t.getTime());
      return e.setDate(e.getDate() + 4 - (e.getDay() || 7)), t = e.getTime(), e.setMonth(0), e.setDate(1), Math.floor(Math.round((t - e) / 864e5) / 7) + 1;
    },
    parseDate: function parseDate(e, n, t) {
      if (null == e || null == n) throw "Invalid arguments";
      if ("" === (n = "object" == _typeof(n) ? n.toString() : n + "")) return null;

      function o(t) {
        return (t = w + 1 < e.length && e.charAt(w + 1) === t) && w++, t;
      }

      function i(t) {
        var e = o(t),
            e = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            e = new RegExp("^\\d{" + ("y" === t ? e : 1) + "," + e + "}");
        if (!(e = n.substring(c).match(e))) throw "Missing number at position " + c;
        return c += e[0].length, parseInt(e[0], 10);
      }

      function s(t, e, i) {
        var s = -1,
            e = k.map(o(t) ? i : e, function (t, e) {
          return [[e, t]];
        }).sort(function (t, e) {
          return -(t[1].length - e[1].length);
        });
        if (k.each(e, function (t, e) {
          var i = e[1];
          if (n.substr(c, i.length).toLowerCase() === i.toLowerCase()) return s = e[0], c += i.length, !1;
        }), -1 !== s) return s + 1;
        throw "Unknown name at position " + c;
      }

      function a() {
        if (n.charAt(c) !== e.charAt(w)) throw "Unexpected literal at position " + c;
        c++;
      }

      for (var r, h, l, c = 0, u = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof u ? u : new Date().getFullYear() % 100 + parseInt(u, 10), d = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort, p = (t ? t.dayNames : null) || this._defaults.dayNames, f = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort, g = (t ? t.monthNames : null) || this._defaults.monthNames, m = -1, _ = -1, v = -1, b = -1, y = !1, w = 0; w < e.length; w++) {
        if (y) "'" !== e.charAt(w) || o("'") ? a() : y = !1;else switch (e.charAt(w)) {
          case "d":
            v = i("d");
            break;

          case "D":
            s("D", d, p);
            break;

          case "o":
            b = i("o");
            break;

          case "m":
            _ = i("m");
            break;

          case "M":
            _ = s("M", f, g);
            break;

          case "y":
            m = i("y");
            break;

          case "@":
            m = (l = new Date(i("@"))).getFullYear(), _ = l.getMonth() + 1, v = l.getDate();
            break;

          case "!":
            m = (l = new Date((i("!") - this._ticksTo1970) / 1e4)).getFullYear(), _ = l.getMonth() + 1, v = l.getDate();
            break;

          case "'":
            o("'") ? a() : y = !0;
            break;

          default:
            a();
        }
      }

      if (c < n.length && (h = n.substr(c), !/^\s+/.test(h))) throw "Extra/unparsed characters found in date: " + h;
      if (-1 === m ? m = new Date().getFullYear() : m < 100 && (m += new Date().getFullYear() - new Date().getFullYear() % 100 + (m <= u ? 0 : -100)), -1 < b) for (_ = 1, v = b;;) {
        if (v <= (r = this._getDaysInMonth(m, _ - 1))) break;
        _++, v -= r;
      }
      if ((l = this._daylightSavingAdjust(new Date(m, _ - 1, v))).getFullYear() !== m || l.getMonth() + 1 !== _ || l.getDate() !== v) throw "Invalid date";
      return l;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
    formatDate: function formatDate(e, t, i) {
      if (!t) return "";

      function n(t) {
        return (t = a + 1 < e.length && e.charAt(a + 1) === t) && a++, t;
      }

      function s(t, e, i) {
        var s = "" + e;
        if (n(t)) for (; s.length < i;) {
          s = "0" + s;
        }
        return s;
      }

      function o(t, e, i, s) {
        return (n(t) ? s : i)[e];
      }

      var a,
          r = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          h = (i ? i.dayNames : null) || this._defaults.dayNames,
          l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          c = (i ? i.monthNames : null) || this._defaults.monthNames,
          u = "",
          d = !1;
      if (t) for (a = 0; a < e.length; a++) {
        if (d) "'" !== e.charAt(a) || n("'") ? u += e.charAt(a) : d = !1;else switch (e.charAt(a)) {
          case "d":
            u += s("d", t.getDate(), 2);
            break;

          case "D":
            u += o("D", t.getDay(), r, h);
            break;

          case "o":
            u += s("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
            break;

          case "m":
            u += s("m", t.getMonth() + 1, 2);
            break;

          case "M":
            u += o("M", t.getMonth(), l, c);
            break;

          case "y":
            u += n("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
            break;

          case "@":
            u += t.getTime();
            break;

          case "!":
            u += 1e4 * t.getTime() + this._ticksTo1970;
            break;

          case "'":
            n("'") ? u += "'" : d = !0;
            break;

          default:
            u += e.charAt(a);
        }
      }
      return u;
    },
    _possibleChars: function _possibleChars(e) {
      function t(t) {
        return (t = n + 1 < e.length && e.charAt(n + 1) === t) && n++, t;
      }

      for (var i = "", s = !1, n = 0; n < e.length; n++) {
        if (s) "'" !== e.charAt(n) || t("'") ? i += e.charAt(n) : s = !1;else switch (e.charAt(n)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;

          case "D":
          case "M":
            return null;

          case "'":
            t("'") ? i += "'" : s = !0;
            break;

          default:
            i += e.charAt(n);
        }
      }

      return i;
    },
    _get: function _get(t, e) {
      return (void 0 !== t.settings[e] ? t.settings : this._defaults)[e];
    },
    _setDateFromField: function _setDateFromField(t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
            s = t.lastVal = t.input ? t.input.val() : null,
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);

        try {
          o = this.parseDate(i, s, a) || n;
        } catch (t) {
          s = e ? "" : s;
        }

        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function _getDefaultDate(t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
    },
    _determineDate: function _determineDate(r, t, e) {
      var i,
          s,
          t = null == t || "" === t ? e : "string" == typeof t ? function (t) {
        try {
          return k.datepicker.parseDate(k.datepicker._get(r, "dateFormat"), t, k.datepicker._getFormatConfig(r));
        } catch (t) {}

        for (var e = (t.toLowerCase().match(/^c/) ? k.datepicker._getDate(r) : null) || new Date(), i = e.getFullYear(), s = e.getMonth(), n = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = o.exec(t); a;) {
          switch (a[2] || "d") {
            case "d":
            case "D":
              n += parseInt(a[1], 10);
              break;

            case "w":
            case "W":
              n += 7 * parseInt(a[1], 10);
              break;

            case "m":
            case "M":
              s += parseInt(a[1], 10), n = Math.min(n, k.datepicker._getDaysInMonth(i, s));
              break;

            case "y":
            case "Y":
              i += parseInt(a[1], 10), n = Math.min(n, k.datepicker._getDaysInMonth(i, s));
          }

          a = o.exec(t);
        }

        return new Date(i, s, n);
      }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t, (s = new Date()).setDate(s.getDate() + i), s) : new Date(t.getTime());
      return (t = t && "Invalid Date" === t.toString() ? e : t) && (t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0)), this._daylightSavingAdjust(t);
    },
    _daylightSavingAdjust: function _daylightSavingAdjust(t) {
      return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null;
    },
    _setDate: function _setDate(t, e, i) {
      var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          e = this._restrictMinMax(t, this._determineDate(t, e, new Date()));

      t.selectedDay = t.currentDay = e.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = e.getMonth(), t.drawYear = t.selectedYear = t.currentYear = e.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
    },
    _getDate: function _getDate(t) {
      return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
    },
    _attachHandlers: function _attachHandlers(t) {
      var e = this._get(t, "stepMonths"),
          i = "#" + t.id.replace(/\\\\/g, "\\");

      t.dpDiv.find("[data-handler]").map(function () {
        var t = {
          prev: function prev() {
            k.datepicker._adjustDate(i, -e, "M");
          },
          next: function next() {
            k.datepicker._adjustDate(i, +e, "M");
          },
          hide: function hide() {
            k.datepicker._hideDatepicker();
          },
          today: function today() {
            k.datepicker._gotoToday(i);
          },
          selectDay: function selectDay() {
            return k.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          },
          selectMonth: function selectMonth() {
            return k.datepicker._selectMonthYear(i, this, "M"), !1;
          },
          selectYear: function selectYear() {
            return k.datepicker._selectMonthYear(i, this, "Y"), !1;
          }
        };
        k(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function _generateHTML(t) {
      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          _,
          v,
          b,
          y,
          w,
          k,
          x,
          C,
          D,
          I,
          P,
          T,
          M,
          S,
          H,
          z,
          O = new Date(),
          A = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
          N = this._get(t, "isRTL"),
          W = this._get(t, "showButtonPanel"),
          E = this._get(t, "hideIfNoPrevNext"),
          F = this._get(t, "navigationAsDateFormat"),
          L = this._getNumberOfMonths(t),
          R = this._get(t, "showCurrentAtPos"),
          O = this._get(t, "stepMonths"),
          B = 1 !== L[0] || 1 !== L[1],
          Y = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
          j = this._getMinMaxDate(t, "min"),
          q = this._getMinMaxDate(t, "max"),
          K = t.drawMonth - R,
          U = t.drawYear;

      if (K < 0 && (K += 12, U--), q) for (e = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth() - L[0] * L[1] + 1, q.getDate())), e = j && e < j ? j : e; this._daylightSavingAdjust(new Date(U, K, 1)) > e;) {
        --K < 0 && (K = 11, U--);
      }

      for (t.drawMonth = K, t.drawYear = U, R = this._get(t, "prevText"), R = F ? this.formatDate(R, this._daylightSavingAdjust(new Date(U, K - O, 1)), this._getFormatConfig(t)) : R, i = this._canAdjustMonth(t, -1, U, K) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + R + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w") + "'>" + R + "</span></a>" : E ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + R + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w") + "'>" + R + "</span></a>", R = this._get(t, "nextText"), R = F ? this.formatDate(R, this._daylightSavingAdjust(new Date(U, K + O, 1)), this._getFormatConfig(t)) : R, s = this._canAdjustMonth(t, 1, U, K) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + R + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e") + "'>" + R + "</span></a>" : E ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + R + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e") + "'>" + R + "</span></a>", E = this._get(t, "currentText"), R = this._get(t, "gotoCurrent") && t.currentDay ? Y : A, E = F ? this.formatDate(E, R, this._getFormatConfig(t)) : E, F = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", F = W ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (N ? F : "") + (this._isInRange(t, R) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + E + "</button>" : "") + (N ? "" : F) + "</div>" : "", n = parseInt(this._get(t, "firstDay"), 10), n = isNaN(n) ? 0 : n, o = this._get(t, "showWeek"), a = this._get(t, "dayNames"), r = this._get(t, "dayNamesMin"), h = this._get(t, "monthNames"), l = this._get(t, "monthNamesShort"), c = this._get(t, "beforeShowDay"), u = this._get(t, "showOtherMonths"), d = this._get(t, "selectOtherMonths"), p = this._getDefaultDate(t), f = "", m = 0; m < L[0]; m++) {
        for (_ = "", this.maxRows = 4, v = 0; v < L[1]; v++) {
          if (b = this._daylightSavingAdjust(new Date(U, K, t.selectedDay)), y = " ui-corner-all", w = "", B) {
            if (w += "<div class='ui-datepicker-group", 1 < L[1]) switch (v) {
              case 0:
                w += " ui-datepicker-group-first", y = " ui-corner-" + (N ? "right" : "left");
                break;

              case L[1] - 1:
                w += " ui-datepicker-group-last", y = " ui-corner-" + (N ? "left" : "right");
                break;

              default:
                w += " ui-datepicker-group-middle", y = "";
            }
            w += "'>";
          }

          for (w += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + y + "'>" + (/all|left/.test(y) && 0 === m ? N ? s : i : "") + (/all|right/.test(y) && 0 === m ? N ? i : s : "") + this._generateMonthYearHeader(t, K, U, j, q, 0 < m || 0 < v, h, l) + "</div><table class='ui-datepicker-calendar'><thead><tr>", k = o ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", g = 0; g < 7; g++) {
            k += "<th scope='col'" + (5 <= (g + n + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + a[x = (g + n) % 7] + "'>" + r[x] + "</span></th>";
          }

          for (w += k + "</tr></thead><tbody>", D = this._getDaysInMonth(U, K), U === t.selectedYear && K === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, D)), C = (this._getFirstDayOfMonth(U, K) - n + 7) % 7, D = Math.ceil((C + D) / 7), I = B && this.maxRows > D ? this.maxRows : D, this.maxRows = I, P = this._daylightSavingAdjust(new Date(U, K, 1 - C)), T = 0; T < I; T++) {
            for (w += "<tr>", M = o ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(P) + "</td>" : "", g = 0; g < 7; g++) {
              S = c ? c.apply(t.input ? t.input[0] : null, [P]) : [!0, ""], z = (H = P.getMonth() !== K) && !d || !S[0] || j && P < j || q && q < P, M += "<td class='" + (5 <= (g + n + 6) % 7 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (P.getTime() === b.getTime() && K === t.selectedMonth && t._keyEvent || p.getTime() === P.getTime() && p.getTime() === b.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !u ? "" : " " + S[1] + (P.getTime() === Y.getTime() ? " " + this._currentClass : "") + (P.getTime() === A.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !u || !S[2] ? "" : " title='" + S[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (H && !u ? "&#xa0;" : z ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === A.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Y.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
            }

            w += M + "</tr>";
          }

          11 < ++K && (K = 0, U++), _ += w += "</tbody></table>" + (B ? "</div>" + (0 < L[0] && v === L[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
        }

        f += _;
      }

      return f += F, t._keyEvent = !1, f;
    },
    _generateMonthYearHeader: function _generateMonthYearHeader(t, e, i, s, n, o, a, r) {
      var h,
          l,
          c,
          u,
          d,
          p,
          f,
          g = this._get(t, "changeMonth"),
          m = this._get(t, "changeYear"),
          _ = this._get(t, "showMonthAfterYear"),
          v = "<div class='ui-datepicker-title'>",
          b = "";

      if (o || !g) b += "<span class='ui-datepicker-month'>" + a[e] + "</span>";else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, b += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++) {
          (!h || c >= s.getMonth()) && (!l || c <= n.getMonth()) && (b += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
        }

        b += "</select>";
      }
      if (_ || (v += b + (!o && g && m ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !m) v += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = (a = function a(t) {
          t = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
          return isNaN(t) ? d : t;
        })(u[0]), f = Math.max(p, a(u[1] || "")), p = s ? Math.max(p, s.getFullYear()) : p, f = n ? Math.min(f, n.getFullYear()) : f, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p <= f; p++) {
          t.yearshtml += "<option value='" + p + "'" + (p === i ? " selected='selected'" : "") + ">" + p + "</option>";
        }

        t.yearshtml += "</select>", v += t.yearshtml, t.yearshtml = null;
      }
      return v += this._get(t, "yearSuffix"), _ && (v += (!o && g && m ? "" : "&#xa0;") + b), v += "</div>";
    },
    _adjustInstDate: function _adjustInstDate(t, e, i) {
      var s = t.selectedYear + ("Y" === i ? e : 0),
          n = t.selectedMonth + ("M" === i ? e : 0),
          e = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
          e = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, e)));

      t.selectedDay = e.getDate(), t.drawMonth = t.selectedMonth = e.getMonth(), t.drawYear = t.selectedYear = e.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t);
    },
    _restrictMinMax: function _restrictMinMax(t, e) {
      var i = this._getMinMaxDate(t, "min"),
          t = this._getMinMaxDate(t, "max"),
          e = i && e < i ? i : e;

      return t && t < e ? t : e;
    },
    _notifyChange: function _notifyChange(t) {
      var e = this._get(t, "onChangeMonthYear");

      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function _getNumberOfMonths(t) {
      t = this._get(t, "numberOfMonths");
      return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
    },
    _getMinMaxDate: function _getMinMaxDate(t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null);
    },
    _getDaysInMonth: function _getDaysInMonth(t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function _getFirstDayOfMonth(t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function _canAdjustMonth(t, e, i, s) {
      var n = this._getNumberOfMonths(t),
          n = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));

      return e < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(t, n);
    },
    _isInRange: function _isInRange(t, e) {
      var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = null,
          o = null,
          a = this._get(t, "yearRange");

      return a && (t = a.split(":"), a = new Date().getFullYear(), n = parseInt(t[0], 10), o = parseInt(t[1], 10), t[0].match(/[+\-].*/) && (n += a), t[1].match(/[+\-].*/) && (o += a)), (!i || e.getTime() >= i.getTime()) && (!s || e.getTime() <= s.getTime()) && (!n || e.getFullYear() >= n) && (!o || e.getFullYear() <= o);
    },
    _getFormatConfig: function _getFormatConfig(t) {
      var e = this._get(t, "shortYearCutoff");

      return {
        shortYearCutoff: e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10),
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      };
    },
    _formatDate: function _formatDate(t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      e = e ? "object" == _typeof(e) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), e, this._getFormatConfig(t));
    }
  }), k.fn.datepicker = function (t) {
    if (!this.length) return this;
    k.datepicker.initialized || (k(document).on("mousedown", k.datepicker._checkExternalClick), k.datepicker.initialized = !0), 0 === k("#" + k.datepicker._mainDivId).length && k("body").append(k.datepicker.dpDiv);
    var e = Array.prototype.slice.call(arguments, 1);
    return "string" == typeof t && ("isDisabled" === t || "getDate" === t || "widget" === t) || "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this[0]].concat(e)) : this.each(function () {
      "string" == typeof t ? k.datepicker["_" + t + "Datepicker"].apply(k.datepicker, [this].concat(e)) : k.datepicker._attachDatepicker(this, t);
    });
  }, k.datepicker = new Z(), k.datepicker.initialized = !1, k.datepicker.uuid = new Date().getTime(), k.datepicker.version = "1.12.1";
  k.datepicker, k.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
  var st = !1;
  k(document).on("mouseup", function () {
    st = !1;
  });
  k.widget("ui.mouse", {
    version: "1.12.1",
    options: {
      cancel: "input, textarea, button, select, option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var e = this;
      this.element.on("mousedown." + this.widgetName, function (t) {
        return e._mouseDown(t);
      }).on("click." + this.widgetName, function (t) {
        if (!0 === k.data(t.target, e.widgetName + ".preventClickEvent")) return k.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(t) {
      if (!st) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var e = this,
            i = 1 === t.which,
            s = !("string" != typeof this.options.cancel || !t.target.nodeName) && k(t.target).closest(this.options.cancel).length;
        return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          e.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === k.data(t.target, this.widgetName + ".preventClickEvent") && k.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
          return e._mouseMove(t);
        }, this._mouseUpDelegate = function (t) {
          return e._mouseUp(t);
        }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), st = !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(t) {
      if (this._mouseMoved) {
        if (k.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
        if (!t.which) if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(t);
      }

      return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(t) {
      this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && k.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, st = !1, t.preventDefault();
    },
    _mouseDistanceMet: function _mouseDistanceMet(t) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  }), k.ui.plugin = {
    add: function add(t, e, i) {
      var s,
          n = k.ui[t].prototype;

      for (s in i) {
        n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([e, i[s]]);
      }
    },
    call: function call(t, e, i, s) {
      var n,
          o = t.plugins[e];
      if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; n < o.length; n++) {
        t.options[o[n][0]] && o[n][1].apply(t.element, i);
      }
    }
  }, k.ui.safeBlur = function (t) {
    t && "body" !== t.nodeName.toLowerCase() && k(t).trigger("blur");
  };
  k.widget("ui.draggable", k.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function _destroy() {
      (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(), this._mouseDestroy());
    },
    _mouseCapture: function _mouseCapture(t) {
      var e = this.options;
      return !(this.helper || e.disabled || 0 < k(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0));
    },
    _blockFrames: function _blockFrames(t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = k(this);
        return k("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function _blurActiveElement(t) {
      var e = k.ui.safeActiveElement(this.document[0]);
      k(t.target).closest(e).length || k.ui.safeBlur(e);
    },
    _mouseStart: function _mouseStart(t) {
      var e = this.options;
      return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), k.ui.ddmanager && (k.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function () {
        return "fixed" === k(this).css("position");
      }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), k.ui.ddmanager && !e.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), k.ui.ddmanager && k.ui.ddmanager.dragStart(this, t), !0);
    },
    _refreshOffsets: function _refreshOffsets(t) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: t.pageX - this.offset.left,
        top: t.pageY - this.offset.top
      };
    },
    _mouseDrag: function _mouseDrag(t, e) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
        e = this._uiHash();
        if (!1 === this._trigger("drag", t, e)) return this._mouseUp(new k.Event("mouseup", t)), !1;
        this.position = e.position;
      }

      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", k.ui.ddmanager && k.ui.ddmanager.drag(this, t), !1;
    },
    _mouseStop: function _mouseStop(t) {
      var e = this,
          i = !1;
      return k.ui.ddmanager && !this.options.dropBehaviour && (i = k.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || k.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? k(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        !1 !== e._trigger("stop", t) && e._clear();
      }) : !1 !== this._trigger("stop", t) && this._clear(), !1;
    },
    _mouseUp: function _mouseUp(t) {
      return this._unblockFrames(), k.ui.ddmanager && k.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), k.ui.mouse.prototype._mouseUp.call(this, t);
    },
    cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new k.Event("mouseup", {
        target: this.element[0]
      })) : this._clear(), this;
    },
    _getHandle: function _getHandle(t) {
      return !this.options.handle || !!k(t.target).closest(this.element.find(this.options.handle)).length;
    },
    _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle");
    },
    _removeHandleClassName: function _removeHandleClassName() {
      this._removeClass(this.handleElement, "ui-draggable-handle");
    },
    _createHelper: function _createHelper(t) {
      var e = this.options,
          i = k.isFunction(e.helper),
          t = i ? k(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
      return t.parents("body").length || t.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && t[0] === this.element[0] && this._setPositionRelative(), t[0] === this.element[0] || /(fixed|absolute)/.test(t.css("position")) || t.css("position", "absolute"), t;
    },
    _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      "string" == typeof t && (t = t.split(" ")), k.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _isRootNode: function _isRootNode(t) {
      return /(html|body)/i.test(t.tagName) || t === this.document[0];
    },
    _getParentOffset: function _getParentOffset() {
      var t = this.offsetParent.offset(),
          e = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== e && k.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };

      var t = this.element.position(),
          e = this._isRootNode(this.scrollParent[0]);

      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var t,
          e,
          i,
          s = this.options,
          n = this.document[0];
      this.relativeContainer = null, s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode), (i = (e = k(s.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e)) : this.containment = s.containment : this.containment = [0, 0, k(n).width() - this.helperProportions.width - this.margins.left, (k(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [k(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, k(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, k(window).scrollLeft() + k(window).width() - this.helperProportions.width - this.margins.left, k(window).scrollTop() + (k(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null;
    },
    _convertPositionTo: function _convertPositionTo(t, e) {
      e = e || this.position;

      var i = "absolute" === t ? 1 : -1,
          t = this._isRootNode(this.scrollParent[0]);

      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : t ? 0 : this.offset.scroll.top) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : t ? 0 : this.offset.scroll.left) * i
      };
    },
    _generatePosition: function _generatePosition(t, e) {
      var i,
          s = this.options,
          n = this._isRootNode(this.scrollParent[0]),
          o = t.pageX,
          a = t.pageY;

      return n && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), e && (this.containment && (i = this.relativeContainer ? (i = this.relativeContainer.offset(), [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : this.containment, t.pageX - this.offset.click.left < i[0] && (o = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (a = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (o = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (a = i[3] + this.offset.click.top)), s.grid && (t = s.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY, a = !i || t - this.offset.click.top >= i[1] || t - this.offset.click.top > i[3] ? t : t - this.offset.click.top >= i[1] ? t - s.grid[1] : t + s.grid[1], t = s.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX, o = !i || t - this.offset.click.left >= i[0] || t - this.offset.click.left > i[2] ? t : t - this.offset.click.left >= i[0] ? t - s.grid[0] : t + s.grid[0]), "y" === s.axis && (o = this.originalPageX), "x" === s.axis && (a = this.originalPageY)), {
        top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top),
        left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function _clear() {
      this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    },
    _trigger: function _trigger(t, e, i) {
      return i = i || this._uiHash(), k.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), k.Widget.prototype._trigger.call(this, t, e, i);
    },
    plugins: {},
    _uiHash: function _uiHash() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), k.ui.plugin.add("draggable", "connectToSortable", {
    start: function start(e, t, i) {
      var s = k.extend({}, t, {
        item: i.element
      });
      i.sortables = [], k(i.options.connectToSortable).each(function () {
        var t = k(this).sortable("instance");
        t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s));
      });
    },
    stop: function stop(e, t, i) {
      var s = k.extend({}, t, {
        item: i.element
      });
      i.cancelHelperRemoval = !1, k.each(i.sortables, function () {
        var t = this;
        t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
          position: t.placeholder.css("position"),
          top: t.placeholder.css("top"),
          left: t.placeholder.css("left")
        }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s));
      });
    },
    drag: function drag(i, s, n) {
      k.each(n.sortables, function () {
        var t = !1,
            e = this;
        e.positionAbs = n.positionAbs, e.helperProportions = n.helperProportions, e.offset.click = n.offset.click, e._intersectsWith(e.containerCache) && (t = !0, k.each(n.sortables, function () {
          return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== e && this._intersectsWith(this.containerCache) && k.contains(e.element[0], this.element[0]) && (t = !1), t;
        })), t ? (e.isOver || (e.isOver = 1, n._parent = s.helper.parent(), e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function () {
          return s.helper[0];
        }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = n.offset.click.top, e.offset.click.left = n.offset.click.left, e.offset.parent.left -= n.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= n.offset.parent.top - e.offset.parent.top, n._trigger("toSortable", i), n.dropped = e.element, k.each(n.sortables, function () {
          this.refreshPositions();
        }), n.currentItem = n.element, e.fromOutside = n), e.currentItem && (e._mouseDrag(i), s.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), s.helper.appendTo(n._parent), n._refreshOffsets(i), s.position = n._generatePosition(i, !0), n._trigger("fromSortable", i), n.dropped = !1, k.each(n.sortables, function () {
          this.refreshPositions();
        }));
      });
    }
  }), k.ui.plugin.add("draggable", "cursor", {
    start: function start(t, e, i) {
      var s = k("body"),
          i = i.options;
      s.css("cursor") && (i._cursor = s.css("cursor")), s.css("cursor", i.cursor);
    },
    stop: function stop(t, e, i) {
      i = i.options;
      i._cursor && k("body").css("cursor", i._cursor);
    }
  }), k.ui.plugin.add("draggable", "opacity", {
    start: function start(t, e, i) {
      e = k(e.helper), i = i.options;
      e.css("opacity") && (i._opacity = e.css("opacity")), e.css("opacity", i.opacity);
    },
    stop: function stop(t, e, i) {
      i = i.options;
      i._opacity && k(e.helper).css("opacity", i._opacity);
    }
  }), k.ui.plugin.add("draggable", "scroll", {
    start: function start(t, e, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    },
    drag: function drag(t, e, i) {
      var s = i.options,
          n = !1,
          o = i.scrollParentNotHidden[0],
          a = i.document[0];
      o !== a && "HTML" !== o.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity ? o.scrollTop = n = o.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = n = o.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity ? o.scrollLeft = n = o.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - k(a).scrollTop() < s.scrollSensitivity ? n = k(a).scrollTop(k(a).scrollTop() - s.scrollSpeed) : k(window).height() - (t.pageY - k(a).scrollTop()) < s.scrollSensitivity && (n = k(a).scrollTop(k(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - k(a).scrollLeft() < s.scrollSensitivity ? n = k(a).scrollLeft(k(a).scrollLeft() - s.scrollSpeed) : k(window).width() - (t.pageX - k(a).scrollLeft()) < s.scrollSensitivity && (n = k(a).scrollLeft(k(a).scrollLeft() + s.scrollSpeed)))), !1 !== n && k.ui.ddmanager && !s.dropBehaviour && k.ui.ddmanager.prepareOffsets(i, t);
    }
  }), k.ui.plugin.add("draggable", "snap", {
    start: function start(t, e, i) {
      var s = i.options;
      i.snapElements = [], k(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
        var t = k(this),
            e = t.offset();
        this !== i.element[0] && i.snapElements.push({
          item: this,
          width: t.outerWidth(),
          height: t.outerHeight(),
          top: e.top,
          left: e.left
        });
      });
    },
    drag: function drag(t, e, i) {
      for (var s, n, o, a, r, h, l, c, u, d = i.options, p = d.snapTolerance, f = e.offset.left, g = f + i.helperProportions.width, m = e.offset.top, _ = m + i.helperProportions.height, v = i.snapElements.length - 1; 0 <= v; v--) {
        h = (r = i.snapElements[v].left - i.margins.left) + i.snapElements[v].width, c = (l = i.snapElements[v].top - i.margins.top) + i.snapElements[v].height, g < r - p || h + p < f || _ < l - p || c + p < m || !k.contains(i.snapElements[v].item.ownerDocument, i.snapElements[v].item) ? (i.snapElements[v].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, k.extend(i._uiHash(), {
          snapItem: i.snapElements[v].item
        })), i.snapElements[v].snapping = !1) : ("inner" !== d.snapMode && (s = Math.abs(l - _) <= p, n = Math.abs(c - m) <= p, o = Math.abs(r - g) <= p, a = Math.abs(h - f) <= p, s && (e.position.top = i._convertPositionTo("relative", {
          top: l - i.helperProportions.height,
          left: 0
        }).top), n && (e.position.top = i._convertPositionTo("relative", {
          top: c,
          left: 0
        }).top), o && (e.position.left = i._convertPositionTo("relative", {
          top: 0,
          left: r - i.helperProportions.width
        }).left), a && (e.position.left = i._convertPositionTo("relative", {
          top: 0,
          left: h
        }).left)), u = s || n || o || a, "outer" !== d.snapMode && (s = Math.abs(l - m) <= p, n = Math.abs(c - _) <= p, o = Math.abs(r - f) <= p, a = Math.abs(h - g) <= p, s && (e.position.top = i._convertPositionTo("relative", {
          top: l,
          left: 0
        }).top), n && (e.position.top = i._convertPositionTo("relative", {
          top: c - i.helperProportions.height,
          left: 0
        }).top), o && (e.position.left = i._convertPositionTo("relative", {
          top: 0,
          left: r
        }).left), a && (e.position.left = i._convertPositionTo("relative", {
          top: 0,
          left: h - i.helperProportions.width
        }).left)), !i.snapElements[v].snapping && (s || n || o || a || u) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, k.extend(i._uiHash(), {
          snapItem: i.snapElements[v].item
        })), i.snapElements[v].snapping = s || n || o || a || u);
      }
    }
  }), k.ui.plugin.add("draggable", "stack", {
    start: function start(t, e, i) {
      var s,
          i = i.options,
          i = k.makeArray(k(i.stack)).sort(function (t, e) {
        return (parseInt(k(t).css("zIndex"), 10) || 0) - (parseInt(k(e).css("zIndex"), 10) || 0);
      });
      i.length && (s = parseInt(k(i[0]).css("zIndex"), 10) || 0, k(i).each(function (t) {
        k(this).css("zIndex", s + t);
      }), this.css("zIndex", s + i.length));
    }
  }), k.ui.plugin.add("draggable", "zIndex", {
    start: function start(t, e, i) {
      e = k(e.helper), i = i.options;
      e.css("zIndex") && (i._zIndex = e.css("zIndex")), e.css("zIndex", i.zIndex);
    },
    stop: function stop(t, e, i) {
      i = i.options;
      i._zIndex && k(e.helper).css("zIndex", i._zIndex);
    }
  });
  k.ui.draggable;
  k.widget("ui.resizable", k.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      classes: {
        "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
      },
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function _num(t) {
      return parseFloat(t) || 0;
    },
    _isNumber: function _isNumber(t) {
      return !isNaN(parseFloat(t));
    },
    _hasScroll: function _hasScroll(t, e) {
      if ("hidden" === k(t).css("overflow")) return !1;
      var i = e && "left" === e ? "scrollLeft" : "scrollTop",
          e = !1;
      return 0 < t[i] || (t[i] = 1, e = 0 < t[i], t[i] = 0, e);
    },
    _create: function _create() {
      var t,
          e = this.options,
          i = this;
      this._addClass("ui-resizable"), k.extend(this, {
        _aspectRatio: !!e.aspectRatio,
        aspectRatio: e.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(k("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom"),
        marginLeft: this.originalElement.css("marginLeft")
      }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), e.autoHide && k(this.element).on("mouseenter", function () {
        e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show());
      }).on("mouseleave", function () {
        e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide());
      }), this._mouseInit();
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      function t(t) {
        k(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
      }

      var e;
      return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css({
        position: e.css("position"),
        width: e.outerWidth(),
        height: e.outerHeight(),
        top: e.css("top"),
        left: e.css("left")
      }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this;
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "handles" === t && (this._removeHandles(), this._setupHandles());
    },
    _setupHandles: function _setupHandles() {
      var t,
          e,
          i,
          s,
          n,
          o = this.options,
          a = this;
      if (this.handles = o.handles || (k(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se"), this._handles = k(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; e < i.length; e++) {
        s = "ui-resizable-" + (t = k.trim(i[e])), n = k("<div>"), this._addClass(n, "ui-resizable-handle " + s), n.css({
          zIndex: o.zIndex
        }), this.handles[t] = ".ui-resizable-" + t, this.element.append(n);
      }
      this._renderAxis = function (t) {
        var e, i, s;

        for (e in t = t || this.element, this.handles) {
          this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = k(this.handles[e]), this._on(this.handles[e], {
            mousedown: a._mouseDown
          })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = k(this.handles[e], this.element), s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), i = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(i, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e]);
        }
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
        a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se");
      }), o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"));
    },
    _removeHandles: function _removeHandles() {
      this._handles.remove();
    },
    _mouseCapture: function _mouseCapture(t) {
      var e,
          i,
          s = !1;

      for (e in this.handles) {
        (i = k(this.handles[e])[0]) !== t.target && !k.contains(i, t.target) || (s = !0);
      }

      return !this.options.disabled && s;
    },
    _mouseStart: function _mouseStart(t) {
      var e,
          i,
          s = this.options,
          n = this.element;
      return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (e += k(s.containment).scrollLeft() || 0, i += k(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: e,
        top: i
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: n.width(),
        height: n.height()
      }, this.originalSize = this._helper ? {
        width: n.outerWidth(),
        height: n.outerHeight()
      } : {
        width: n.width(),
        height: n.height()
      }, this.sizeDiff = {
        width: n.outerWidth() - n.width(),
        height: n.outerHeight() - n.height()
      }, this.originalPosition = {
        left: e,
        top: i
      }, this.originalMousePosition = {
        left: t.pageX,
        top: t.pageY
      }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = k(".ui-resizable-" + this.axis).css("cursor"), k("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0;
    },
    _mouseDrag: function _mouseDrag(t) {
      var e = this.originalMousePosition,
          i = this.axis,
          s = t.pageX - e.left || 0,
          e = t.pageY - e.top || 0,
          i = this._change[i];
      return this._updatePrevProperties(), i && (e = i.apply(this, [t, s, e]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), e = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), k.isEmptyObject(e) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1;
    },
    _mouseStop: function _mouseStop(t) {
      this.resizing = !1;
      var e,
          i,
          s,
          n = this.options,
          o = this;
      return this._helper && (s = (e = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : o.sizeDiff.height, i = e ? 0 : o.sizeDiff.width, e = {
        width: o.helper.width() - i,
        height: o.helper.height() - s
      }, i = parseFloat(o.element.css("left")) + (o.position.left - o.originalPosition.left) || null, s = parseFloat(o.element.css("top")) + (o.position.top - o.originalPosition.top) || null, n.animate || this.element.css(k.extend(e, {
        top: s,
        left: i
      })), o.helper.height(o.size.height), o.helper.width(o.size.width), this._helper && !n.animate && this._proportionallyResize()), k("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1;
    },
    _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      };
    },
    _applyChanges: function _applyChanges() {
      var t = {};
      return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t;
    },
    _updateVirtualBoundaries: function _updateVirtualBoundaries(t) {
      var e,
          i,
          s = this.options,
          n = {
        minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
        maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
        minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
        maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
      };
      (this._aspectRatio || t) && (e = n.minHeight * this.aspectRatio, i = n.minWidth / this.aspectRatio, s = n.maxHeight * this.aspectRatio, t = n.maxWidth / this.aspectRatio, e > n.minWidth && (n.minWidth = e), i > n.minHeight && (n.minHeight = i), s < n.maxWidth && (n.maxWidth = s), t < n.maxHeight && (n.maxHeight = t)), this._vBoundaries = n;
    },
    _updateCache: function _updateCache(t) {
      this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width);
    },
    _updateRatio: function _updateRatio(t) {
      var e = this.position,
          i = this.size,
          s = this.axis;
      return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t;
    },
    _respectSize: function _respectSize(t) {
      var e = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
          n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
          o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
          a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.originalPosition.top + this.originalSize.height,
          l = /sw|nw|w/.test(i),
          i = /nw|ne|n/.test(i);
      return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && i && (t.top = h - e.minHeight), n && i && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t;
    },
    _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(t) {
      for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) {
        i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
      }

      return {
        height: i[0] + i[2],
        width: i[1] + i[3]
      };
    },
    _proportionallyResize: function _proportionallyResize() {
      if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) {
        t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
          height: i.height() - this.outerDimensions.height || 0,
          width: i.width() - this.outerDimensions.width || 0
        });
      }
    },
    _renderProxy: function _renderProxy() {
      var t = this.element,
          e = this.options;
      this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || k("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++e.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    },
    _change: {
      e: function e(t, _e) {
        return {
          width: this.originalSize.width + _e
        };
      },
      w: function w(t, e) {
        var i = this.originalSize;
        return {
          left: this.originalPosition.left + e,
          width: i.width - e
        };
      },
      n: function n(t, e, i) {
        var s = this.originalSize;
        return {
          top: this.originalPosition.top + i,
          height: s.height - i
        };
      },
      s: function s(t, e, i) {
        return {
          height: this.originalSize.height + i
        };
      },
      se: function se(t, e, i) {
        return k.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]));
      },
      sw: function sw(t, e, i) {
        return k.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]));
      },
      ne: function ne(t, e, i) {
        return k.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]));
      },
      nw: function nw(t, e, i) {
        return k.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]));
      }
    },
    _propagate: function _propagate(t, e) {
      k.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui());
    },
    plugins: {},
    ui: function ui() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), k.ui.plugin.add("resizable", "animate", {
    stop: function stop(e) {
      var i = k(this).resizable("instance"),
          t = i.options,
          s = i._proportionallyResizeElements,
          n = s.length && /textarea/i.test(s[0].nodeName),
          o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
          a = n ? 0 : i.sizeDiff.width,
          n = {
        width: i.size.width - a,
        height: i.size.height - o
      },
          a = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
          o = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(k.extend(n, o && a ? {
        top: o,
        left: a
      } : {}), {
        duration: t.animateDuration,
        easing: t.animateEasing,
        step: function step() {
          var t = {
            width: parseFloat(i.element.css("width")),
            height: parseFloat(i.element.css("height")),
            top: parseFloat(i.element.css("top")),
            left: parseFloat(i.element.css("left"))
          };
          s && s.length && k(s[0]).css({
            width: t.width,
            height: t.height
          }), i._updateCache(t), i._propagate("resize", e);
        }
      });
    }
  }), k.ui.plugin.add("resizable", "containment", {
    start: function start() {
      var i,
          s,
          n = k(this).resizable("instance"),
          t = n.options,
          e = n.element,
          o = t.containment,
          a = o instanceof k ? o.get(0) : /parent/.test(o) ? e.parent().get(0) : o;
      a && (n.containerElement = k(a), /document/.test(o) || o === document ? (n.containerOffset = {
        left: 0,
        top: 0
      }, n.containerPosition = {
        left: 0,
        top: 0
      }, n.parentData = {
        element: k(document),
        left: 0,
        top: 0,
        width: k(document).width(),
        height: k(document).height() || document.body.parentNode.scrollHeight
      }) : (i = k(a), s = [], k(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
        s[t] = n._num(i.css("padding" + e));
      }), n.containerOffset = i.offset(), n.containerPosition = i.position(), n.containerSize = {
        height: i.innerHeight() - s[3],
        width: i.innerWidth() - s[1]
      }, t = n.containerOffset, e = n.containerSize.height, o = n.containerSize.width, o = n._hasScroll(a, "left") ? a.scrollWidth : o, e = n._hasScroll(a) ? a.scrollHeight : e, n.parentData = {
        element: a,
        left: t.left,
        top: t.top,
        width: o,
        height: e
      }));
    },
    resize: function resize(t) {
      var e = k(this).resizable("instance"),
          i = e.options,
          s = e.containerOffset,
          n = e.position,
          o = e._aspectRatio || t.shiftKey,
          a = {
        top: 0,
        left: 0
      },
          r = e.containerElement,
          t = !0;
      r[0] !== document && /static/.test(r.css("position")) && (a = s), n.left < (e._helper ? s.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - s.left : e.position.left - a.left), o && (e.size.height = e.size.width / e.aspectRatio, t = !1), e.position.left = i.helper ? s.left : 0), n.top < (e._helper ? s.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - s.top : e.position.top), o && (e.size.width = e.size.height * e.aspectRatio, t = !1), e.position.top = e._helper ? s.top : 0), i = e.containerElement.get(0) === e.element.parent().get(0), n = /relative|absolute/.test(e.containerElement.css("position")), i && n ? (e.offset.left = e.parentData.left + e.position.left, e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left, e.offset.top = e.element.offset().top), n = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - a.left : e.offset.left - s.left)), s = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - a.top : e.offset.top - s.top)), n + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - n, o && (e.size.height = e.size.width / e.aspectRatio, t = !1)), s + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - s, o && (e.size.width = e.size.height * e.aspectRatio, t = !1)), t || (e.position.left = e.prevPosition.left, e.position.top = e.prevPosition.top, e.size.width = e.prevSize.width, e.size.height = e.prevSize.height);
    },
    stop: function stop() {
      var t = k(this).resizable("instance"),
          e = t.options,
          i = t.containerOffset,
          s = t.containerPosition,
          n = t.containerElement,
          o = k(t.helper),
          a = o.offset(),
          r = o.outerWidth() - t.sizeDiff.width,
          o = o.outerHeight() - t.sizeDiff.height;
      t._helper && !e.animate && /relative/.test(n.css("position")) && k(this).css({
        left: a.left - s.left - i.left,
        width: r,
        height: o
      }), t._helper && !e.animate && /static/.test(n.css("position")) && k(this).css({
        left: a.left - s.left - i.left,
        width: r,
        height: o
      });
    }
  }), k.ui.plugin.add("resizable", "alsoResize", {
    start: function start() {
      var t = k(this).resizable("instance").options;
      k(t.alsoResize).each(function () {
        var t = k(this);
        t.data("ui-resizable-alsoresize", {
          width: parseFloat(t.width()),
          height: parseFloat(t.height()),
          left: parseFloat(t.css("left")),
          top: parseFloat(t.css("top"))
        });
      });
    },
    resize: function resize(t, i) {
      var e = k(this).resizable("instance"),
          s = e.options,
          n = e.originalSize,
          o = e.originalPosition,
          a = {
        height: e.size.height - n.height || 0,
        width: e.size.width - n.width || 0,
        top: e.position.top - o.top || 0,
        left: e.position.left - o.left || 0
      };
      k(s.alsoResize).each(function () {
        var t = k(this),
            s = k(this).data("ui-resizable-alsoresize"),
            n = {},
            e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        k.each(e, function (t, e) {
          var i = (s[e] || 0) + (a[e] || 0);
          i && 0 <= i && (n[e] = i || null);
        }), t.css(n);
      });
    },
    stop: function stop() {
      k(this).removeData("ui-resizable-alsoresize");
    }
  }), k.ui.plugin.add("resizable", "ghost", {
    start: function start() {
      var t = k(this).resizable("instance"),
          e = t.size;
      t.ghost = t.originalElement.clone(), t.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: e.height,
        width: e.width,
        margin: 0,
        left: 0,
        top: 0
      }), t._addClass(t.ghost, "ui-resizable-ghost"), !1 !== k.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper);
    },
    resize: function resize() {
      var t = k(this).resizable("instance");
      t.ghost && t.ghost.css({
        position: "relative",
        height: t.size.height,
        width: t.size.width
      });
    },
    stop: function stop() {
      var t = k(this).resizable("instance");
      t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
    }
  }), k.ui.plugin.add("resizable", "grid", {
    resize: function resize() {
      var t,
          e = k(this).resizable("instance"),
          i = e.options,
          s = e.size,
          n = e.originalSize,
          o = e.originalPosition,
          a = e.axis,
          r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
          h = r[0] || 1,
          l = r[1] || 1,
          c = Math.round((s.width - n.width) / h) * h,
          u = Math.round((s.height - n.height) / l) * l,
          d = n.width + c,
          p = n.height + u,
          f = i.maxWidth && i.maxWidth < d,
          g = i.maxHeight && i.maxHeight < p,
          m = i.minWidth && i.minWidth > d,
          s = i.minHeight && i.minHeight > p;
      i.grid = r, m && (d += h), s && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : ((p - l <= 0 || d - h <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 0 < p - l ? (e.size.height = p, e.position.top = o.top - u) : (p = l - t.height, e.size.height = p, e.position.top = o.top + n.height - p), 0 < d - h ? (e.size.width = d, e.position.left = o.left - c) : (d = h - t.width, e.size.width = d, e.position.left = o.left + n.width - d));
    }
  });
  k.ui.resizable;
  k.widget("ui.dialog", {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      classes: {
        "ui-dialog": "ui-corner-all",
        "ui-dialog-titlebar": "ui-corner-all"
      },
      closeOnEscape: !0,
      closeText: "Close",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function using(t) {
          var e = k(this).css(t).offset().top;
          e < 0 && k(this).css("top", t.top - e);
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    _create: function _create() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && k.fn.draggable && this._makeDraggable(), this.options.resizable && k.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus();
    },
    _init: function _init() {
      this.options.autoOpen && this.open();
    },
    _appendTo: function _appendTo() {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType) ? k(t) : this.document.find(t || "body").eq(0);
    },
    _destroy: function _destroy() {
      var t,
          e = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element);
    },
    widget: function widget() {
      return this.uiDialog;
    },
    disable: k.noop,
    enable: k.noop,
    close: function close(t) {
      var e = this;
      this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || k.ui.safeBlur(k.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
        e._trigger("close", t);
      }));
    },
    isOpen: function isOpen() {
      return this._isOpen;
    },
    moveToTop: function moveToTop() {
      this._moveToTop();
    },
    _moveToTop: function _moveToTop(t, e) {
      var i = !1,
          s = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +k(this).css("z-index");
      }).get(),
          s = Math.max.apply(null, s);
      return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), i = !0), i && !e && this._trigger("focus", t), i;
    },
    open: function open() {
      var t = this;
      this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = k(k.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        t._focusTabbable(), t._trigger("focus");
      }), this._makeFocusTarget(), this._trigger("open"));
    },
    _focusTabbable: function _focusTabbable() {
      var t = this._focusedElement;
      (t = t || this.element.find("[autofocus]")).length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus");
    },
    _keepFocus: function _keepFocus(t) {
      function e() {
        var t = k.ui.safeActiveElement(this.document[0]);
        this.uiDialog[0] === t || k.contains(this.uiDialog[0], t) || this._focusTabbable();
      }

      t.preventDefault(), e.call(this), this._delay(e);
    },
    _createWrapper: function _createWrapper() {
      this.uiDialog = k("<div>").hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
        keydown: function keydown(t) {
          if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === k.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
          var e, i, s;
          t.keyCode !== k.ui.keyCode.TAB || t.isDefaultPrevented() || (e = this.uiDialog.find(":tabbable"), i = e.filter(":first"), s = e.filter(":last"), t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
            s.trigger("focus");
          }), t.preventDefault()) : (this._delay(function () {
            i.trigger("focus");
          }), t.preventDefault()));
        },
        mousedown: function mousedown(t) {
          this._moveToTop(t) && this._focusTabbable();
        }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
        "aria-describedby": this.element.uniqueId().attr("id")
      });
    },
    _createTitlebar: function _createTitlebar() {
      var t;
      this.uiDialogTitlebar = k("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
        mousedown: function mousedown(t) {
          k(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus");
        }
      }), this.uiDialogTitlebarClose = k("<button type='button'></button>").button({
        label: k("<a>").text(this.options.closeText).html(),
        icon: "ui-icon-closethick",
        showLabel: !1
      }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
        click: function click(t) {
          t.preventDefault(), this.close(t);
        }
      }), t = k("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
        "aria-labelledby": t.attr("id")
      });
    },
    _title: function _title(t) {
      this.options.title ? t.text(this.options.title) : t.html("&#160;");
    },
    _createButtonPane: function _createButtonPane() {
      this.uiDialogButtonPane = k("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = k("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons();
    },
    _createButtons: function _createButtons() {
      var s = this,
          t = this.options.buttons;
      this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), k.isEmptyObject(t) || k.isArray(t) && !t.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (k.each(t, function (t, e) {
        var i;
        e = k.isFunction(e) ? {
          click: e,
          text: t
        } : e, e = k.extend({
          type: "button"
        }, e), i = e.click, t = {
          icon: e.icon,
          iconPosition: e.iconPosition,
          showLabel: e.showLabel,
          icons: e.icons,
          text: e.text
        }, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, "boolean" == typeof e.text && delete e.text, k("<button></button>", e).button(t).appendTo(s.uiButtonSet).on("click", function () {
          i.apply(s.element[0], arguments);
        });
      }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog));
    },
    _makeDraggable: function _makeDraggable() {
      var n = this,
          o = this.options;

      function a(t) {
        return {
          position: t.position,
          offset: t.offset
        };
      }

      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function start(t, e) {
          n._addClass(k(this), "ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", t, a(e));
        },
        drag: function drag(t, e) {
          n._trigger("drag", t, a(e));
        },
        stop: function stop(t, e) {
          var i = e.offset.left - n.document.scrollLeft(),
              s = e.offset.top - n.document.scrollTop();
          o.position = {
            my: "left top",
            at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s,
            of: n.window
          }, n._removeClass(k(this), "ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", t, a(e));
        }
      });
    },
    _makeResizable: function _makeResizable() {
      var n = this,
          o = this.options,
          t = o.resizable,
          e = this.uiDialog.css("position"),
          t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";

      function a(t) {
        return {
          originalPosition: t.originalPosition,
          originalSize: t.originalSize,
          position: t.position,
          size: t.size
        };
      }

      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: o.maxWidth,
        maxHeight: o.maxHeight,
        minWidth: o.minWidth,
        minHeight: this._minHeight(),
        handles: t,
        start: function start(t, e) {
          n._addClass(k(this), "ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", t, a(e));
        },
        resize: function resize(t, e) {
          n._trigger("resize", t, a(e));
        },
        stop: function stop(t, e) {
          var i = n.uiDialog.offset(),
              s = i.left - n.document.scrollLeft(),
              i = i.top - n.document.scrollTop();
          o.height = n.uiDialog.height(), o.width = n.uiDialog.width(), o.position = {
            my: "left top",
            at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= i ? "+" : "") + i,
            of: n.window
          }, n._removeClass(k(this), "ui-dialog-resizing"), n._unblockFrames(), n._trigger("resizeStop", t, a(e));
        }
      }).css("position", e);
    },
    _trackFocus: function _trackFocus() {
      this._on(this.widget(), {
        focusin: function focusin(t) {
          this._makeFocusTarget(), this._focusedElement = k(t.target);
        }
      });
    },
    _makeFocusTarget: function _makeFocusTarget() {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function _untrackInstance() {
      var t = this._trackingInstances(),
          e = k.inArray(this, t);

      -1 !== e && t.splice(e, 1);
    },
    _trackingInstances: function _trackingInstances() {
      var t = this.document.data("ui-dialog-instances");
      return t || (t = [], this.document.data("ui-dialog-instances", t)), t;
    },
    _minHeight: function _minHeight() {
      var t = this.options;
      return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height);
    },
    _position: function _position() {
      var t = this.uiDialog.is(":visible");
      t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide();
    },
    _setOptions: function _setOptions(t) {
      var i = this,
          s = !1,
          n = {};
      k.each(t, function (t, e) {
        i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e);
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
    },
    _setOption: function _setOption(t, e) {
      var i,
          s = this.uiDialog;
      "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
        label: k("<a>").text("" + this.options.closeText).html()
      }), "draggable" === t && ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((i = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"), i && "string" == typeof e && s.resizable("option", "handles", e), i || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    },
    _size: function _size() {
      var t,
          e,
          i,
          s = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
        height: "auto",
        width: s.width
      }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
        minHeight: e,
        maxHeight: i,
        height: "auto"
      }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function _blockFrames() {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = k(this);
        return k("<div>").css({
          position: "absolute",
          width: t.outerWidth(),
          height: t.outerHeight()
        }).appendTo(t.parent()).offset(t.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function _allowInteraction(t) {
      return !!k(t.target).closest(".ui-dialog").length || !!k(t.target).closest(".ui-datepicker").length;
    },
    _createOverlay: function _createOverlay() {
      var e;
      this.options.modal && (e = !0, this._delay(function () {
        e = !1;
      }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
        focusin: function focusin(t) {
          e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable());
        }
      }), this.overlay = k("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
        mousedown: "_keepFocus"
      }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1));
    },
    _destroyOverlay: function _destroyOverlay() {
      var t;
      this.options.modal && this.overlay && ((t = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null);
    }
  }), !1 !== k.uiBackCompat && k.widget("ui.dialog", k.ui.dialog, {
    options: {
      dialogClass: ""
    },
    _createWrapper: function _createWrapper() {
      this._super(), this.uiDialog.addClass(this.options.dialogClass);
    },
    _setOption: function _setOption(t, e) {
      "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments);
    }
  });
  k.ui.dialog;
  k.widget("ui.droppable", {
    version: "1.12.1",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      addClasses: !0,
      greedy: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function _create() {
      var t,
          e = this.options,
          i = e.accept;
      this.isover = !1, this.isout = !0, this.accept = k.isFunction(i) ? i : function (t) {
        return t.is(i);
      }, this.proportions = function () {
        if (!arguments.length) return t = t || {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        };
        t = arguments[0];
      }, this._addToManager(e.scope), e.addClasses && this._addClass("ui-droppable");
    },
    _addToManager: function _addToManager(t) {
      k.ui.ddmanager.droppables[t] = k.ui.ddmanager.droppables[t] || [], k.ui.ddmanager.droppables[t].push(this);
    },
    _splice: function _splice(t) {
      for (var e = 0; e < t.length; e++) {
        t[e] === this && t.splice(e, 1);
      }
    },
    _destroy: function _destroy() {
      var t = k.ui.ddmanager.droppables[this.options.scope];

      this._splice(t);
    },
    _setOption: function _setOption(t, e) {
      var i;
      "accept" === t ? this.accept = k.isFunction(e) ? e : function (t) {
        return t.is(e);
      } : "scope" === t && (i = k.ui.ddmanager.droppables[this.options.scope], this._splice(i), this._addToManager(e)), this._super(t, e);
    },
    _activate: function _activate(t) {
      var e = k.ui.ddmanager.current;
      this._addActiveClass(), e && this._trigger("activate", t, this.ui(e));
    },
    _deactivate: function _deactivate(t) {
      var e = k.ui.ddmanager.current;
      this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e));
    },
    _over: function _over(t) {
      var e = k.ui.ddmanager.current;
      e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(e)));
    },
    _out: function _out(t) {
      var e = k.ui.ddmanager.current;
      e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(e)));
    },
    _drop: function _drop(e, t) {
      var i = t || k.ui.ddmanager.current,
          s = !1;
      return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var t = k(this).droppable("instance");
        if (t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && nt(i, k.extend(t, {
          offset: t.element.offset()
        }), t.options.tolerance, e)) return !(s = !0);
      }), !s && !!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element));
    },
    ui: function ui(t) {
      return {
        draggable: t.currentItem || t.element,
        helper: t.helper,
        position: t.position,
        offset: t.positionAbs
      };
    },
    _addHoverClass: function _addHoverClass() {
      this._addClass("ui-droppable-hover");
    },
    _removeHoverClass: function _removeHoverClass() {
      this._removeClass("ui-droppable-hover");
    },
    _addActiveClass: function _addActiveClass() {
      this._addClass("ui-droppable-active");
    },
    _removeActiveClass: function _removeActiveClass() {
      this._removeClass("ui-droppable-active");
    }
  });

  var nt = k.ui.intersect = function (t, e, i, s) {
    if (!e.offset) return !1;
    var n = (t.positionAbs || t.position.absolute).left + t.margins.left,
        o = (t.positionAbs || t.position.absolute).top + t.margins.top,
        a = n + t.helperProportions.width,
        r = o + t.helperProportions.height,
        h = e.offset.left,
        l = e.offset.top,
        c = h + e.proportions().width,
        u = l + e.proportions().height;

    switch (i) {
      case "fit":
        return h <= n && a <= c && l <= o && r <= u;

      case "intersect":
        return h < n + t.helperProportions.width / 2 && a - t.helperProportions.width / 2 < c && l < o + t.helperProportions.height / 2 && r - t.helperProportions.height / 2 < u;

      case "pointer":
        return ot(s.pageY, l, e.proportions().height) && ot(s.pageX, h, e.proportions().width);

      case "touch":
        return (l <= o && o <= u || l <= r && r <= u || o < l && u < r) && (h <= n && n <= c || h <= a && a <= c || n < h && c < a);

      default:
        return !1;
    }
  };

  function ot(t, e, i) {
    return e <= t && t < e + i;
  }

  !(k.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function prepareOffsets(t, e) {
      var i,
          s,
          n = k.ui.ddmanager.droppables[t.options.scope] || [],
          o = e ? e.type : null,
          a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();

      t: for (i = 0; i < n.length; i++) {
        if (!(n[i].options.disabled || t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element))) {
          for (s = 0; s < a.length; s++) {
            if (a[s] === n[i].element[0]) {
              n[i].proportions().height = 0;
              continue t;
            }
          }

          n[i].visible = "none" !== n[i].element.css("display"), n[i].visible && ("mousedown" === o && n[i]._activate.call(n[i], e), n[i].offset = n[i].element.offset(), n[i].proportions({
            width: n[i].element[0].offsetWidth,
            height: n[i].element[0].offsetHeight
          }));
        }
      }
    },
    drop: function drop(t, e) {
      var i = !1;
      return k.each((k.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && nt(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)));
      }), i;
    },
    dragStart: function dragStart(t, e) {
      t.element.parentsUntil("body").on("scroll.droppable", function () {
        t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e);
      });
    },
    drag: function drag(n, o) {
      n.options.refreshPositions && k.ui.ddmanager.prepareOffsets(n, o), k.each(k.ui.ddmanager.droppables[n.options.scope] || [], function () {
        var t, e, i, s;
        this.options.disabled || this.greedyChild || !this.visible || (s = !(i = nt(n, this, this.options.tolerance, o)) && this.isover ? "isout" : i && !this.isover ? "isover" : null) && (this.options.greedy && (e = this.options.scope, (i = this.element.parents(":data(ui-droppable)").filter(function () {
          return k(this).droppable("instance").options.scope === e;
        })).length && ((t = k(i[0]).droppable("instance")).greedyChild = "isover" === s)), t && "isover" === s && (t.isover = !1, t.isout = !0, t._out.call(t, o)), this[s] = !0, this["isout" === s ? "isover" : "isout"] = !1, this["isover" === s ? "_over" : "_out"].call(this, o), t && "isout" === s && (t.isout = !1, t.isover = !0, t._over.call(t, o)));
      });
    },
    dragStop: function dragStop(t, e) {
      t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || k.ui.ddmanager.prepareOffsets(t, e);
    }
  }) !== k.uiBackCompat && k.widget("ui.droppable", k.ui.droppable, {
    options: {
      hoverClass: !1,
      activeClass: !1
    },
    _addActiveClass: function _addActiveClass() {
      this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass);
    },
    _removeActiveClass: function _removeActiveClass() {
      this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass);
    },
    _addHoverClass: function _addHoverClass() {
      this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass);
    },
    _removeHoverClass: function _removeHoverClass() {
      this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
    }
  });
  k.ui.droppable, k.widget("ui.progressbar", {
    version: "1.12.1",
    options: {
      classes: {
        "ui-progressbar": "ui-corner-all",
        "ui-progressbar-value": "ui-corner-left",
        "ui-progressbar-complete": "ui-corner-right"
      },
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function _create() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
        role: "progressbar",
        "aria-valuemin": this.min
      }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = k("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue();
    },
    _destroy: function _destroy() {
      this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove();
    },
    value: function value(t) {
      if (void 0 === t) return this.options.value;
      this.options.value = this._constrainedValue(t), this._refreshValue();
    },
    _constrainedValue: function _constrainedValue(t) {
      return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t));
    },
    _setOptions: function _setOptions(t) {
      var e = t.value;
      delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue();
    },
    _setOption: function _setOption(t, e) {
      "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    _percentage: function _percentage() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    },
    _refreshValue: function _refreshValue() {
      var t = this.options.value,
          e = this._percentage();

      this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = k("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
        "aria-valuemax": this.options.max,
        "aria-valuenow": t
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete");
    }
  }), k.widget("ui.selectable", k.ui.mouse, {
    version: "1.12.1",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function _create() {
      var i = this;
      this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        i.elementPos = k(i.element[0]).offset(), i.selectees = k(i.options.filter, i.element[0]), i._addClass(i.selectees, "ui-selectee"), i.selectees.each(function () {
          var t = k(this),
              e = t.offset(),
              e = {
            left: e.left - i.elementPos.left,
            top: e.top - i.elementPos.top
          };
          k.data(this, "selectable-item", {
            element: this,
            $element: t,
            left: e.left,
            top: e.top,
            right: e.left + t.outerWidth(),
            bottom: e.top + t.outerHeight(),
            startselected: !1,
            selected: t.hasClass("ui-selected"),
            selecting: t.hasClass("ui-selecting"),
            unselecting: t.hasClass("ui-unselecting")
          });
        });
      }, this.refresh(), this._mouseInit(), this.helper = k("<div>"), this._addClass(this.helper, "ui-selectable-helper");
    },
    _destroy: function _destroy() {
      this.selectees.removeData("selectable-item"), this._mouseDestroy();
    },
    _mouseStart: function _mouseStart(i) {
      var s = this,
          t = this.options;
      this.opos = [i.pageX, i.pageY], this.elementPos = k(this.element[0]).offset(), this.options.disabled || (this.selectees = k(t.filter, this.element[0]), this._trigger("start", i), k(t.appendTo).append(this.helper), this.helper.css({
        left: i.pageX,
        top: i.pageY,
        width: 0,
        height: 0
      }), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var t = k.data(this, "selectable-item");
        t.startselected = !0, i.metaKey || i.ctrlKey || (s._removeClass(t.$element, "ui-selected"), t.selected = !1, s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", i, {
          unselecting: t.element
        }));
      }), k(i.target).parents().addBack().each(function () {
        var t,
            e = k.data(this, "selectable-item");
        if (e) return t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, (e.selected = t) ? s._trigger("selecting", i, {
          selecting: e.element
        }) : s._trigger("unselecting", i, {
          unselecting: e.element
        }), !1;
      }));
    },
    _mouseDrag: function _mouseDrag(s) {
      if (this.dragged = !0, !this.options.disabled) {
        var t,
            n = this,
            o = this.options,
            a = this.opos[0],
            r = this.opos[1],
            h = s.pageX,
            l = s.pageY;
        return h < a && (t = h, h = a, a = t), l < r && (t = l, l = r, r = t), this.helper.css({
          left: a,
          top: r,
          width: h - a,
          height: l - r
        }), this.selectees.each(function () {
          var t = k.data(this, "selectable-item"),
              e = !1,
              i = {};
          t && t.element !== n.element[0] && (i.left = t.left + n.elementPos.left, i.right = t.right + n.elementPos.left, i.top = t.top + n.elementPos.top, i.bottom = t.bottom + n.elementPos.top, "touch" === o.tolerance ? e = !(i.left > h || i.right < a || i.top > l || i.bottom < r) : "fit" === o.tolerance && (e = i.left > a && i.right < h && i.top > r && i.bottom < l), e ? (t.selected && (n._removeClass(t.$element, "ui-selected"), t.selected = !1), t.unselecting && (n._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1), t.selecting || (n._addClass(t.$element, "ui-selecting"), t.selecting = !0, n._trigger("selecting", s, {
            selecting: t.element
          }))) : (t.selecting && ((s.metaKey || s.ctrlKey) && t.startselected ? (n._removeClass(t.$element, "ui-selecting"), t.selecting = !1, n._addClass(t.$element, "ui-selected"), t.selected = !0) : (n._removeClass(t.$element, "ui-selecting"), t.selecting = !1, t.startselected && (n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0), n._trigger("unselecting", s, {
            unselecting: t.element
          }))), t.selected && (s.metaKey || s.ctrlKey || t.startselected || (n._removeClass(t.$element, "ui-selected"), t.selected = !1, n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, n._trigger("unselecting", s, {
            unselecting: t.element
          })))));
        }), !1;
      }
    },
    _mouseStop: function _mouseStop(e) {
      var i = this;
      return this.dragged = !1, k(".ui-unselecting", this.element[0]).each(function () {
        var t = k.data(this, "selectable-item");
        i._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1, t.startselected = !1, i._trigger("unselected", e, {
          unselected: t.element
        });
      }), k(".ui-selecting", this.element[0]).each(function () {
        var t = k.data(this, "selectable-item");
        i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e, {
          selected: t.element
        });
      }), this._trigger("stop", e), this.helper.remove(), !1;
    }
  }), k.widget("ui.selectmenu", [k.ui.formResetMixin, {
    version: "1.12.1",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      classes: {
        "ui-selectmenu-button-open": "ui-corner-top",
        "ui-selectmenu-button-closed": "ui-corner-all"
      },
      disabled: null,
      icons: {
        button: "ui-icon-triangle-1-s"
      },
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      width: !1,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function _create() {
      var t = this.element.uniqueId().attr("id");
      this.ids = {
        element: t,
        button: t + "-button",
        menu: t + "-menu"
      }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = k();
    },
    _drawButton: function _drawButton() {
      var t,
          e = this,
          i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);

      this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
        click: function click(t) {
          this.button.focus(), t.preventDefault();
        }
      }), this.element.hide(), this.button = k("<span>", {
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true",
        title: this.element.attr("title")
      }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = k("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        e._rendered || e._refreshMenu();
      });
    },
    _drawMenu: function _drawMenu() {
      var i = this;
      this.menu = k("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      }), this.menuWrap = k("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
        classes: {
          "ui-menu": "ui-corner-bottom"
        },
        role: "listbox",
        select: function select(t, e) {
          t.preventDefault(), i._setSelection(), i._select(e.item.data("ui-selectmenu-item"), t);
        },
        focus: function focus(t, e) {
          e = e.item.data("ui-selectmenu-item");
          null != i.focusIndex && e.index !== i.focusIndex && (i._trigger("focus", t, {
            item: e
          }), i.isOpen || i._select(e, t)), i.focusIndex = e.index, i.button.attr("aria-activedescendant", i.menuItems.eq(e.index).attr("id"));
        }
      }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return !1;
      }, this.menuInstance._isDivider = function () {
        return !1;
      };
    },
    refresh: function refresh() {
      this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton();
    },
    _refreshMenu: function _refreshMenu() {
      var t = this.element.find("option");
      this.menu.empty(), this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, t.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    },
    open: function open(t) {
      this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)));
    },
    _position: function _position() {
      this.menuWrap.position(k.extend({
        of: this.button
      }, this.options.position));
    },
    close: function close(t) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t));
    },
    widget: function widget() {
      return this.button;
    },
    menuWidget: function menuWidget() {
      return this.menu;
    },
    _renderButtonItem: function _renderButtonItem(t) {
      var e = k("<span>");
      return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e;
    },
    _renderMenu: function _renderMenu(s, t) {
      var n = this,
          o = "";
      k.each(t, function (t, e) {
        var i;
        e.optgroup !== o && (i = k("<li>", {
          text: e.optgroup
        }), n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(s), o = e.optgroup), n._renderItemData(s, e);
      });
    },
    _renderItemData: function _renderItemData(t, e) {
      return this._renderItem(t, e).data("ui-selectmenu-item", e);
    },
    _renderItem: function _renderItem(t, e) {
      var i = k("<li>"),
          s = k("<div>", {
        title: e.element.attr("title")
      });
      return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), i.append(s).appendTo(t);
    },
    _setText: function _setText(t, e) {
      e ? t.text(e) : t.html("&#160;");
    },
    _move: function _move(t, e) {
      var i,
          s = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0)).length && this.menuInstance.focus(e, s);
    },
    _getSelectedItem: function _getSelectedItem() {
      return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
    },
    _toggle: function _toggle(t) {
      this[this.isOpen ? "close" : "open"](t);
    },
    _setSelection: function _setSelection() {
      var t;
      this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus());
    },
    _documentClick: {
      mousedown: function mousedown(t) {
        this.isOpen && (k(t.target).closest(".ui-selectmenu-menu, #" + k.ui.escapeSelector(this.ids.button)).length || this.close(t));
      }
    },
    _buttonEvents: {
      mousedown: function mousedown() {
        var t;
        window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange();
      },
      click: function click(t) {
        this._setSelection(), this._toggle(t);
      },
      keydown: function keydown(t) {
        var e = !0;

        switch (t.keyCode) {
          case k.ui.keyCode.TAB:
          case k.ui.keyCode.ESCAPE:
            this.close(t), e = !1;
            break;

          case k.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(t);
            break;

          case k.ui.keyCode.UP:
            t.altKey ? this._toggle(t) : this._move("prev", t);
            break;

          case k.ui.keyCode.DOWN:
            t.altKey ? this._toggle(t) : this._move("next", t);
            break;

          case k.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
            break;

          case k.ui.keyCode.LEFT:
            this._move("prev", t);

            break;

          case k.ui.keyCode.RIGHT:
            this._move("next", t);

            break;

          case k.ui.keyCode.HOME:
          case k.ui.keyCode.PAGE_UP:
            this._move("first", t);

            break;

          case k.ui.keyCode.END:
          case k.ui.keyCode.PAGE_DOWN:
            this._move("last", t);

            break;

          default:
            this.menu.trigger(t), e = !1;
        }

        e && t.preventDefault();
      }
    },
    _selectFocusedItem: function _selectFocusedItem(t) {
      var e = this.menuItems.eq(this.focusIndex).parent("li");
      e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t);
    },
    _select: function _select(t, e) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
        item: t
      }), t.index !== i && this._trigger("change", e, {
        item: t
      }), this.close(e);
    },
    _setAria: function _setAria(t) {
      t = this.menuItems.eq(t.index).attr("id");
      this.button.attr({
        "aria-labelledby": t,
        "aria-activedescendant": t
      }), this.menu.attr("aria-activedescendant", t);
    },
    _setOption: function _setOption(t, e) {
      var i;
      "icons" === t && (i = this.button.find("span.ui-icon"), this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton();
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0);
    },
    _appendTo: function _appendTo() {
      var t = this.options.appendTo;
      return (t = t && (t.jquery || t.nodeType ? k(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t;
    },
    _toggleAttr: function _toggleAttr() {
      this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    },
    _resizeButton: function _resizeButton() {
      var t = this.options.width;
      !1 !== t ? (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)) : this.button.css("width", "");
    },
    _resizeMenu: function _resizeMenu() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    },
    _getCreateOptions: function _getCreateOptions() {
      var t = this._super();

      return t.disabled = this.element.prop("disabled"), t;
    },
    _parseOptions: function _parseOptions(t) {
      var i = this,
          s = [];
      t.each(function (t, e) {
        s.push(i._parseOption(k(e), t));
      }), this.items = s;
    },
    _parseOption: function _parseOption(t, e) {
      var i = t.parent("optgroup");
      return {
        element: t,
        index: e,
        value: t.val(),
        label: t.text(),
        optgroup: i.attr("label") || "",
        disabled: i.prop("disabled") || t.prop("disabled")
      };
    },
    _destroy: function _destroy() {
      this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element);
    }
  }]), k.widget("ui.slider", k.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      classes: {
        "ui-slider": "ui-corner-all",
        "ui-slider-handle": "ui-corner-all",
        "ui-slider-range": "ui-corner-all ui-widget-header"
      },
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1;
    },
    _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function _createHandles() {
      var t,
          e = this.options,
          i = this.element.find(".ui-slider-handle"),
          s = [],
          n = e.values && e.values.length || 1;

      for (i.length > n && (i.slice(n).remove(), i = i.slice(0, n)), t = i.length; t < n; t++) {
        s.push("<span tabindex='0'></span>");
      }

      this.handles = i.add(k(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (t) {
        k(this).data("ui-slider-handle-index", t).attr("tabIndex", 0);
      });
    },
    _createRange: function _createRange() {
      var t = this.options;
      t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : k.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
        left: "",
        bottom: ""
      })) : (this.range = k("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
    },
    _mouseCapture: function _mouseCapture(t) {
      var i,
          s,
          n,
          o,
          e,
          a,
          r = this,
          h = this.options;
      return !h.disabled && (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), a = {
        x: t.pageX,
        y: t.pageY
      }, i = this._normValueFromMouse(a), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
        var e = Math.abs(i - r.values(t));
        (e < s || s === e && (t === r._lastChangedValue || r.values(t) === h.min)) && (s = e, n = k(this), o = t);
      }), !1 !== this._start(t, o) && (this._mouseSliding = !0, this._handleIndex = o, this._addClass(n, null, "ui-state-active"), n.trigger("focus"), e = n.offset(), a = !k(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = a ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - e.left - n.width() / 2,
        top: t.pageY - e.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0));
    },
    _mouseStart: function _mouseStart() {
      return !0;
    },
    _mouseDrag: function _mouseDrag(t) {
      var e = {
        x: t.pageX,
        y: t.pageY
      },
          e = this._normValueFromMouse(e);

      return this._slide(t, this._handleIndex, e), !1;
    },
    _mouseStop: function _mouseStop(t) {
      return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1;
    },
    _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function _normValueFromMouse(t) {
      var e,
          t = "horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
          t = t / e;
      return 1 < t && (t = 1), t < 0 && (t = 0), "vertical" === this.orientation && (t = 1 - t), e = this._valueMax() - this._valueMin(), e = this._valueMin() + t * e, this._trimAlignValue(e);
    },
    _uiHash: function _uiHash(t, e, i) {
      var s = {
        handle: this.handles[t],
        handleIndex: t,
        value: void 0 !== e ? e : this.value()
      };
      return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s;
    },
    _hasMultipleValues: function _hasMultipleValues() {
      return this.options.values && this.options.values.length;
    },
    _start: function _start(t, e) {
      return this._trigger("start", t, this._uiHash(e));
    },
    _slide: function _slide(t, e, i) {
      var s,
          n = this.value(),
          o = this.values();
      this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i));
    },
    _stop: function _stop(t, e) {
      this._trigger("stop", t, this._uiHash(e));
    },
    _change: function _change(t, e) {
      this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
    },
    value: function value(t) {
      return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value();
    },
    values: function values(t, e) {
      var i, s, n;
      if (1 < arguments.length) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
      if (!arguments.length) return this._values();
      if (!k.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();

      for (i = this.options.values, s = t, n = 0; n < i.length; n += 1) {
        i[n] = this._trimAlignValue(s[n]), this._change(null, n);
      }

      this._refreshValue();
    },
    _setOption: function _setOption(t, e) {
      var i,
          s = 0;

      switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), k.isArray(this.options.values) && (s = this.options.values.length), this._super(t, e), t) {
        case "orientation":
          this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) {
            this._change(null, i);
          }

          this._animateOff = !1;
          break;

        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;

        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
    },
    _value: function _value() {
      var t = this.options.value;
      return t = this._trimAlignValue(t);
    },
    _values: function _values(t) {
      var e, i, s;
      if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);

      if (this._hasMultipleValues()) {
        for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) {
          i[s] = this._trimAlignValue(i[s]);
        }

        return i;
      }

      return [];
    },
    _trimAlignValue: function _trimAlignValue(t) {
      if (t <= this._valueMin()) return this._valueMin();
      if (t >= this._valueMax()) return this._valueMax();
      var e = 0 < this.options.step ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          t = t - i;
      return 2 * Math.abs(i) >= e && (t += 0 < i ? e : -e), parseFloat(t.toFixed(5));
    },
    _calculateNewMax: function _calculateNewMax() {
      var t = this.options.max,
          e = this._valueMin(),
          i = this.options.step;

      (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
    },
    _precision: function _precision() {
      var t = this._precisionOf(this.options.step);

      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function _precisionOf(t) {
      var e = t.toString(),
          t = e.indexOf(".");
      return -1 === t ? 0 : e.length - t - 1;
    },
    _valueMin: function _valueMin() {
      return this.options.min;
    },
    _valueMax: function _valueMax() {
      return this.max;
    },
    _refreshRange: function _refreshRange(t) {
      "vertical" === t && this.range.css({
        width: "",
        left: ""
      }), "horizontal" === t && this.range.css({
        height: "",
        bottom: ""
      });
    },
    _refreshValue: function _refreshValue() {
      var e,
          i,
          t,
          s,
          n,
          o = this.options.range,
          a = this.options,
          r = this,
          h = !this._animateOff && a.animate,
          l = {};
      this._hasMultipleValues() ? this.handles.each(function (t) {
        i = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, l["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", k(this).stop(1, 1)[h ? "animate" : "css"](l, a.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === t && r.range.stop(1, 1)[h ? "animate" : "css"]({
          left: i + "%"
        }, a.animate), 1 === t && r.range[h ? "animate" : "css"]({
          width: i - e + "%"
        }, {
          queue: !1,
          duration: a.animate
        })) : (0 === t && r.range.stop(1, 1)[h ? "animate" : "css"]({
          bottom: i + "%"
        }, a.animate), 1 === t && r.range[h ? "animate" : "css"]({
          height: i - e + "%"
        }, {
          queue: !1,
          duration: a.animate
        }))), e = i;
      }) : (t = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? (t - s) / (n - s) * 100 : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](l, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        width: i + "%"
      }, a.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        width: 100 - i + "%"
      }, a.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        height: i + "%"
      }, a.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
        height: 100 - i + "%"
      }, a.animate));
    },
    _handleEvents: {
      keydown: function keydown(t) {
        var e,
            i,
            s,
            n = k(t.target).data("ui-slider-handle-index");

        switch (t.keyCode) {
          case k.ui.keyCode.HOME:
          case k.ui.keyCode.END:
          case k.ui.keyCode.PAGE_UP:
          case k.ui.keyCode.PAGE_DOWN:
          case k.ui.keyCode.UP:
          case k.ui.keyCode.RIGHT:
          case k.ui.keyCode.DOWN:
          case k.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(k(t.target), null, "ui-state-active"), !1 === this._start(t, n))) return;
        }

        switch (s = this.options.step, e = i = this._hasMultipleValues() ? this.values(n) : this.value(), t.keyCode) {
          case k.ui.keyCode.HOME:
            i = this._valueMin();
            break;

          case k.ui.keyCode.END:
            i = this._valueMax();
            break;

          case k.ui.keyCode.PAGE_UP:
            i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case k.ui.keyCode.PAGE_DOWN:
            i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case k.ui.keyCode.UP:
          case k.ui.keyCode.RIGHT:
            if (e === this._valueMax()) return;
            i = this._trimAlignValue(e + s);
            break;

          case k.ui.keyCode.DOWN:
          case k.ui.keyCode.LEFT:
            if (e === this._valueMin()) return;
            i = this._trimAlignValue(e - s);
        }

        this._slide(t, n, i);
      },
      keyup: function keyup(t) {
        var e = k(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), this._removeClass(k(t.target), null, "ui-state-active"));
      }
    }
  }), k.widget("ui.sortable", k.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function _isOverAxis(t, e, i) {
      return e <= t && t < e + i;
    },
    _isFloating: function _isFloating(t) {
      return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"));
    },
    _create: function _create() {
      this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    },
    _setOption: function _setOption(t, e) {
      this._super(t, e), "handle" === t && this._setHandleClassName();
    },
    _setHandleClassName: function _setHandleClassName() {
      var t = this;
      this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), k.each(this.items, function () {
        t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
      });
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      for (var t = this.items.length - 1; 0 <= t; t--) {
        this.items[t].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _mouseCapture: function _mouseCapture(t, e) {
      var i = null,
          s = !1,
          n = this;
      return !this.reverting && !this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), k(t.target).parents().each(function () {
        if (k.data(this, n.widgetName + "-item") === n) return i = k(this), !1;
      }), k.data(t.target, n.widgetName + "-item") === n && (i = k(t.target)), !!i && !(this.options.handle && !e && (k(this.options.handle, i).find("*").addBack().each(function () {
        this === t.target && (s = !0);
      }), !s)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0));
    },
    _mouseStart: function _mouseStart(t, e, i) {
      var s,
          n,
          o = this.options;
      if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, k.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", o.cursor), this.storedStylesheet = k("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (s = this.containers.length - 1; 0 <= s; s--) {
        this.containers[s]._trigger("activate", t, this._uiHash(this));
      }
      return k.ui.ddmanager && (k.ui.ddmanager.current = this), k.ui.ddmanager && !o.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0;
    },
    _mouseDrag: function _mouseDrag(t) {
      var e,
          i,
          s,
          n,
          o = this.options,
          a = !1;

      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), !1 !== a && k.ui.ddmanager && !o.dropBehaviour && k.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; 0 <= e; e--) {
        if (i = this.items[e], s = i.item[0], n = this._intersectsWithPointer(i), n && i.instance === this.currentContainer && !(s === this.currentItem[0] || this.placeholder[1 === n ? "next" : "prev"]()[0] === s || k.contains(this.placeholder[0], s) || "semi-dynamic" === this.options.type && k.contains(this.element[0], s))) {
          if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
          this._rearrange(t, i), this._trigger("change", t, this._uiHash());
          break;
        }
      }

      return this._contactContainers(t), k.ui.ddmanager && k.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function _mouseStop(t, e) {
      var i, s, n, o;
      if (t) return k.ui.ddmanager && !this.options.dropBehaviour && k.ui.ddmanager.drop(this, t), this.options.revert ? (s = (i = this).placeholder.offset(), o = {}, (n = this.options.axis) && "x" !== n || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, k(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
        i._clear(t);
      })) : this._clear(t, e), !1;
    },
    cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp(new k.Event("mouseup", {
          target: null
        })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();

        for (var t = this.containers.length - 1; 0 <= t; t--) {
          this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0);
        }
      }

      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), k.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? k(this.domPosition.prev).after(this.currentItem) : k(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function serialize(e) {
      var t = this._getItemsAsjQuery(e && e.connected),
          i = [];

      return e = e || {}, k(t).each(function () {
        var t = (k(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
        t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]));
      }), !i.length && e.key && i.push(e.key + "="), i.join("&");
    },
    toArray: function toArray(t) {
      var e = this._getItemsAsjQuery(t && t.connected),
          i = [];

      return t = t || {}, e.each(function () {
        i.push(k(t.item || this).attr(t.attribute || "id") || "");
      }), i;
    },
    _intersectsWith: function _intersectsWith(t) {
      var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          l = "x" === this.options.axis || r < s + l && s + l < h,
          c = "y" === this.options.axis || o < e + c && e + c < a,
          c = l && c;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? c : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < h;
    },
    _intersectsWithPointer: function _intersectsWithPointer(t) {
      var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          t = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);

      return !(!e || !t) && (e = this._getDragVerticalDirection(), t = this._getDragHorizontalDirection(), this.floating ? "right" === t || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1));
    },
    _intersectsWithSides: function _intersectsWithSides(t) {
      var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
          s = this._getDragVerticalDirection(),
          t = this._getDragHorizontalDirection();

      return this.floating && t ? "right" === t && i || "left" === t && !i : s && ("down" === s && e || "up" === s && !e);
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var t = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 != t && (0 < t ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var t = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 != t && (0 < t ? "right" : "left");
    },
    refresh: function refresh(t) {
      return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function _connectWith() {
      var t = this.options;
      return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(t) {
      var e,
          i,
          s,
          n,
          o = [],
          a = [],
          r = this._connectWith();

      if (r && t) for (e = r.length - 1; 0 <= e; e--) {
        for (i = (s = k(r[e], this.document[0])).length - 1; 0 <= i; i--) {
          (n = k.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && a.push([k.isFunction(n.options.items) ? n.options.items.call(n.element) : k(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n]);
        }
      }

      function h() {
        o.push(this);
      }

      for (a.push([k.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : k(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), e = a.length - 1; 0 <= e; e--) {
        a[e][0].each(h);
      }

      return k(o);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = k.grep(this.items, function (t) {
        for (var e = 0; e < i.length; e++) {
          if (i[e] === t.item[0]) return !1;
        }

        return !0;
      });
    },
    _refreshItems: function _refreshItems(t) {
      this.items = [], this.containers = [this];

      var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.items,
          c = [[k.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
        item: this.currentItem
      }) : k(this.options.items, this.element), this]],
          u = this._connectWith();

      if (u && this.ready) for (e = u.length - 1; 0 <= e; e--) {
        for (i = (s = k(u[e], this.document[0])).length - 1; 0 <= i; i--) {
          (n = k.data(s[i], this.widgetFullName)) && n !== this && !n.options.disabled && (c.push([k.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, {
            item: this.currentItem
          }) : k(n.options.items, n.element), n]), this.containers.push(n));
        }
      }

      for (e = c.length - 1; 0 <= e; e--) {
        for (o = c[e][1], i = 0, h = (a = c[e][0]).length; i < h; i++) {
          (r = k(a[i])).data(this.widgetName + "-item", o), l.push({
            item: r,
            instance: o,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    refreshPositions: function refreshPositions(t) {
      var e, i, s, n;

      for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), e = this.items.length - 1; 0 <= e; e--) {
        (i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? k(this.options.toleranceElement, i.item) : i.item, t || (i.width = s.outerWidth(), i.height = s.outerHeight()), n = s.offset(), i.left = n.left, i.top = n.top);
      }

      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (e = this.containers.length - 1; 0 <= e; e--) {
        n = this.containers[e].element.offset(), this.containers[e].containerCache.left = n.left, this.containers[e].containerCache.top = n.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
      }
      return this;
    },
    _createPlaceholder: function _createPlaceholder(i) {
      var s,
          n = (i = i || this).options;
      n.placeholder && n.placeholder.constructor !== String || (s = n.placeholder, n.placeholder = {
        element: function element() {
          var t = i.currentItem[0].nodeName.toLowerCase(),
              e = k("<" + t + ">", i.document[0]);
          return i._addClass(e, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), k("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")), s || e.css("visibility", "hidden"), e;
        },
        update: function update(t, e) {
          s && !n.forcePlaceholderSize || (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)));
        }
      }), i.placeholder = k(n.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), n.placeholder.update(i, i.placeholder);
    },
    _createTrPlaceholder: function _createTrPlaceholder(t, e) {
      var i = this;
      t.children().each(function () {
        k("<td>&#160;</td>", i.document[0]).attr("colspan", k(this).attr("colspan") || 1).appendTo(e);
      });
    },
    _contactContainers: function _contactContainers(t) {
      for (var e, i, s, n, o, a, r, h, l, c = null, u = null, d = this.containers.length - 1; 0 <= d; d--) {
        k.contains(this.currentItem[0], this.containers[d].element[0]) || (this._intersectsWith(this.containers[d].containerCache) ? c && k.contains(this.containers[d].element[0], c.element[0]) || (c = this.containers[d], u = d) : this.containers[d].containerCache.over && (this.containers[d]._trigger("out", t, this._uiHash(this)), this.containers[d].containerCache.over = 0));
      }

      if (c) if (1 === this.containers.length) this.containers[u].containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash(this)), this.containers[u].containerCache.over = 1);else {
        for (i = 1e4, s = null, n = (h = c.floating || this._isFloating(this.currentItem)) ? "left" : "top", o = h ? "width" : "height", l = h ? "pageX" : "pageY", e = this.items.length - 1; 0 <= e; e--) {
          k.contains(this.containers[u].element[0], this.items[e].item[0]) && this.items[e].item[0] !== this.currentItem[0] && (a = this.items[e].item.offset()[n], r = !1, t[l] - a > this.items[e][o] / 2 && (r = !0), Math.abs(t[l] - a) < i && (i = Math.abs(t[l] - a), s = this.items[e], this.direction = r ? "up" : "down"));
        }

        (s || this.options.dropOnEmpty) && (this.currentContainer !== this.containers[u] ? (s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[u].element, !0), this._trigger("change", t, this._uiHash()), this.containers[u]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[u], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[u]._trigger("over", t, this._uiHash(this)), this.containers[u].containerCache.over = 1) : this.currentContainer.containerCache.over || (this.containers[u]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
      }
    },
    _createHelper: function _createHelper(t) {
      var e = this.options,
          t = k.isFunction(e.helper) ? k(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
      return t.parents("body").length || k("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(t[0]), t[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), t[0].style.width && !e.forceHelperSize || t.width(this.currentItem.width()), t[0].style.height && !e.forceHelperSize || t.height(this.currentItem.height()), t;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      "string" == typeof t && (t = t.split(" ")), k.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && k.ui.ie) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };
      var t = this.currentItem.position();
      return {
        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var t,
          e,
          i = this.options;
      "parent" === i.containment && (i.containment = this.helper[0].parentNode), "document" !== i.containment && "window" !== i.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === i.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === i.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(i.containment) || (t = k(i.containment)[0], e = k(i.containment).offset(), i = "hidden" !== k(t).css("overflow"), this.containment = [e.left + (parseInt(k(t).css("borderLeftWidth"), 10) || 0) + (parseInt(k(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(k(t).css("borderTopWidth"), 10) || 0) + (parseInt(k(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(k(t).css("borderLeftWidth"), 10) || 0) - (parseInt(k(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(k(t).css("borderTopWidth"), 10) || 0) - (parseInt(k(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function _convertPositionTo(t, e) {
      e = e || this.position;
      var i = "absolute" === t ? 1 : -1,
          s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          t = /(html|body)/i.test(s[0].tagName);
      return {
        top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : t ? 0 : s.scrollTop()) * i,
        left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : t ? 0 : s.scrollLeft()) * i
      };
    },
    _generatePosition: function _generatePosition(t) {
      var e = this.options,
          i = t.pageX,
          s = t.pageY,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && k.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (i = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (i = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), e.grid && (t = this.originalPageY + Math.round((s - this.originalPageY) / e.grid[1]) * e.grid[1], s = !this.containment || t - this.offset.click.top >= this.containment[1] && t - this.offset.click.top <= this.containment[3] ? t : t - this.offset.click.top >= this.containment[1] ? t - e.grid[1] : t + e.grid[1], t = this.originalPageX + Math.round((i - this.originalPageX) / e.grid[0]) * e.grid[0], i = !this.containment || t - this.offset.click.left >= this.containment[0] && t - this.offset.click.left <= this.containment[2] ? t : t - this.offset.click.left >= this.containment[0] ? t - e.grid[0] : t + e.grid[0])), {
        top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()),
        left: i - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft())
      };
    },
    _rearrange: function _rearrange(t, e, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;

      this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function _clear(t, e) {
      this.reverting = !1;
      var i,
          s = [];

      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (i in this._storedCSS) {
          "auto" !== this._storedCSS[i] && "static" !== this._storedCSS[i] || (this._storedCSS[i] = "");
        }

        this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper");
      } else this.currentItem.show();

      function n(e, i, s) {
        return function (t) {
          s._trigger(e, t, i._uiHash(i));
        };
      }

      for (this.fromOutside && !e && s.push(function (t) {
        this._trigger("receive", t, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
        this._trigger("update", t, this._uiHash());
      }), this !== this.currentContainer && (e || (s.push(function (t) {
        this._trigger("remove", t, this._uiHash());
      }), s.push(function (e) {
        return function (t) {
          e._trigger("receive", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), s.push(function (e) {
        return function (t) {
          e._trigger("update", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), i = this.containers.length - 1; 0 <= i; i--) {
        e || s.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (s.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
      }

      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
        for (i = 0; i < s.length; i++) {
          s[i].call(this, t);
        }

        this._trigger("stop", t, this._uiHash());
      }

      return this.fromOutside = !1, !this.cancelHelperRemoval;
    },
    _trigger: function _trigger() {
      !1 === k.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
    },
    _uiHash: function _uiHash(t) {
      var e = t || this;
      return {
        helper: e.helper,
        placeholder: e.placeholder || k([]),
        position: e.position,
        originalPosition: e.originalPosition,
        offset: e.positionAbs,
        item: e.currentItem,
        sender: t ? t.element : null
      };
    }
  });

  function at(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
    };
  }

  k.widget("ui.spinner", {
    version: "1.12.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      classes: {
        "ui-spinner": "ui-corner-all",
        "ui-spinner-down": "ui-corner-br",
        "ui-spinner-up": "ui-corner-tr"
      },
      culture: null,
      icons: {
        down: "ui-icon-triangle-1-s",
        up: "ui-icon-triangle-1-n"
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _getCreateOptions: function _getCreateOptions() {
      var s = this._super(),
          n = this.element;

      return k.each(["min", "max", "step"], function (t, e) {
        var i = n.attr(e);
        null != i && i.length && (s[e] = i);
      }), s;
    },
    _events: {
      keydown: function keydown(t) {
        this._start(t) && this._keydown(t) && t.preventDefault();
      },
      keyup: "_stop",
      focus: function focus() {
        this.previous = this.element.val();
      },
      blur: function blur(t) {
        this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t));
      },
      mousewheel: function mousewheel(t, e) {
        if (e) {
          if (!this.spinning && !this._start(t)) return !1;
          this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(t);
          }, 100), t.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function mousedownUiSpinnerButton(t) {
        var e;

        function i() {
          this.element[0] === k.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = e, this._delay(function () {
            this.previous = e;
          }));
        }

        e = this.element[0] === k.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, i.call(this);
        }), !1 !== this._start(t) && this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function mouseenterUiSpinnerButton(t) {
        if (k(t.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(t) && void this._repeat(null, k(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _enhance: function _enhance() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
    },
    _draw: function _draw() {
      this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
        classes: {
          "ui-button": ""
        }
      }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
        icon: this.options.icons.up,
        showLabel: !1
      }), this.buttons.last().button({
        icon: this.options.icons.down,
        showLabel: !1
      }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height());
    },
    _keydown: function _keydown(t) {
      var e = this.options,
          i = k.ui.keyCode;

      switch (t.keyCode) {
        case i.UP:
          return this._repeat(null, 1, t), !0;

        case i.DOWN:
          return this._repeat(null, -1, t), !0;

        case i.PAGE_UP:
          return this._repeat(null, e.page, t), !0;

        case i.PAGE_DOWN:
          return this._repeat(null, -e.page, t), !0;
      }

      return !1;
    },
    _start: function _start(t) {
      return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0);
    },
    _repeat: function _repeat(t, e, i) {
      t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, e, i);
      }, t), this._spin(e * this.options.step, i);
    },
    _spin: function _spin(t, e) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
        value: i
      }) || (this._value(i), this.counter++);
    },
    _increment: function _increment(t) {
      var e = this.options.incremental;
      return e ? k.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1;
    },
    _precision: function _precision() {
      var t = this._precisionOf(this.options.step);

      return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
    },
    _precisionOf: function _precisionOf(t) {
      var e = t.toString(),
          t = e.indexOf(".");
      return -1 === t ? 0 : e.length - t - 1;
    },
    _adjustValue: function _adjustValue(t) {
      var e = this.options,
          i = null !== e.min ? e.min : 0,
          s = t - i;
      return t = i + Math.round(s / e.step) * e.step, t = parseFloat(t.toFixed(this._precision())), null !== e.max && t > e.max ? e.max : null !== e.min && t < e.min ? e.min : t;
    },
    _stop: function _stop(t) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t));
    },
    _setOption: function _setOption(t, e) {
      var i;
      if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i));
      "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (i = this.buttons.first().find(".ui-icon"), this._removeClass(i, null, this.options.icons.up), this._addClass(i, null, e.up), i = this.buttons.last().find(".ui-icon"), this._removeClass(i, null, this.options.icons.down), this._addClass(i, null, e.down)), this._super(t, e);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable");
    },
    _setOptions: at(function (t) {
      this._super(t);
    }),
    _parse: function _parse(t) {
      return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t;
    },
    _format: function _format(t) {
      return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t;
    },
    _refresh: function _refresh() {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      });
    },
    isValid: function isValid() {
      var t = this.value();
      return null !== t && t === this._adjustValue(t);
    },
    _value: function _value(t, e) {
      var i;
      "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh();
    },
    _destroy: function _destroy() {
      this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    },
    stepUp: at(function (t) {
      this._stepUp(t);
    }),
    _stepUp: function _stepUp(t) {
      this._start() && (this._spin((t || 1) * this.options.step), this._stop());
    },
    stepDown: at(function (t) {
      this._stepDown(t);
    }),
    _stepDown: function _stepDown(t) {
      this._start() && (this._spin((t || 1) * -this.options.step), this._stop());
    },
    pageUp: at(function (t) {
      this._stepUp((t || 1) * this.options.page);
    }),
    pageDown: at(function (t) {
      this._stepDown((t || 1) * this.options.page);
    }),
    value: function value(t) {
      if (!arguments.length) return this._parse(this.element.val());
      at(this._value).call(this, t);
    },
    widget: function widget() {
      return this.uiSpinner;
    }
  }), !1 !== k.uiBackCompat && k.widget("ui.spinner", k.ui.spinner, {
    _enhance: function _enhance() {
      this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
    },
    _uiSpinnerHtml: function _uiSpinnerHtml() {
      return "<span>";
    },
    _buttonHtml: function _buttonHtml() {
      return "<a></a><a></a>";
    }
  });
  var rt;
  k.ui.spinner;
  k.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
      active: null,
      classes: {
        "ui-tabs": "ui-corner-all",
        "ui-tabs-nav": "ui-corner-all",
        "ui-tabs-panel": "ui-corner-bottom",
        "ui-tabs-tab": "ui-corner-top"
      },
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: (rt = /#.*$/, function (t) {
      var e = t.href.replace(rt, ""),
          i = location.href.replace(rt, "");

      try {
        e = decodeURIComponent(e);
      } catch (t) {}

      try {
        i = decodeURIComponent(i);
      } catch (t) {}

      return 1 < t.hash.length && e === i;
    }),
    _create: function _create() {
      var e = this,
          t = this.options;
      this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), k.isArray(t.disabled) && (t.disabled = k.unique(t.disabled.concat(k.map(this.tabs.filter(".ui-state-disabled"), function (t) {
        return e.tabs.index(t);
      }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(t.active) : this.active = k(), this._refresh(), this.active.length && this.load(t.active);
    },
    _initialActive: function _initialActive() {
      var i = this.options.active,
          t = this.options.collapsible,
          s = location.hash.substring(1);
      return null === i && (s && this.tabs.each(function (t, e) {
        if (k(e).attr("aria-controls") === s) return i = t, !1;
      }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== i && -1 !== i || (i = !!this.tabs.length && 0)), !1 !== i && -1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0), !t && !1 === i && this.anchors.length && (i = 0), i;
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : k()
      };
    },
    _tabKeydown: function _tabKeydown(t) {
      var e = k(k.ui.safeActiveElement(this.document[0])).closest("li"),
          i = this.tabs.index(e),
          s = !0;

      if (!this._handlePageNav(t)) {
        switch (t.keyCode) {
          case k.ui.keyCode.RIGHT:
          case k.ui.keyCode.DOWN:
            i++;
            break;

          case k.ui.keyCode.UP:
          case k.ui.keyCode.LEFT:
            s = !1, i--;
            break;

          case k.ui.keyCode.END:
            i = this.anchors.length - 1;
            break;

          case k.ui.keyCode.HOME:
            i = 0;
            break;

          case k.ui.keyCode.SPACE:
            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);

          case k.ui.keyCode.ENTER:
            return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);

          default:
            return;
        }

        t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, s), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", i);
        }, this.delay));
      }
    },
    _panelKeydown: function _panelKeydown(t) {
      this._handlePageNav(t) || t.ctrlKey && t.keyCode === k.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"));
    },
    _handlePageNav: function _handlePageNav(t) {
      return t.altKey && t.keyCode === k.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === k.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    },
    _findNextTab: function _findNextTab(t, e) {
      var i = this.tabs.length - 1;

      for (; -1 !== k.inArray((i < t && (t = 0), t < 0 && (t = i), t), this.options.disabled);) {
        t = e ? t + 1 : t - 1;
      }

      return t;
    },
    _focusNextTab: function _focusNextTab(t, e) {
      return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
    },
    _setOption: function _setOption(t, e) {
      "active" !== t ? (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)) : this._activate(e);
    },
    _sanitizeSelector: function _sanitizeSelector(t) {
      return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function refresh() {
      var t = this.options,
          e = this.tablist.children(":has(a[href])");
      t.disabled = k.map(e.filter(".ui-state-disabled"), function (t) {
        return e.index(t);
      }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !k.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = k()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = k()), this._refresh();
    },
    _refresh: function _refresh() {
      this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function _processTabs() {
      var h = this,
          t = this.tabs,
          e = this.anchors,
          i = this.panels;
      this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
        k(this).is(".ui-state-disabled") && t.preventDefault();
      }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
        k(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
        role: "tab",
        tabIndex: -1
      }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
        return k("a", this)[0];
      }).attr({
        role: "presentation",
        tabIndex: -1
      }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = k(), this.anchors.each(function (t, e) {
        var i,
            s,
            n,
            o = k(e).uniqueId().attr("id"),
            a = k(e).closest("li"),
            r = a.attr("aria-controls");
        h._isLocal(e) ? (n = (i = e.hash).substring(1), s = h.element.find(h._sanitizeSelector(i))) : (i = "#" + (n = a.attr("aria-controls") || k({}).uniqueId()[0].id), (s = h.element.find(i)).length || (s = h._createPanel(n)).insertAfter(h.panels[t - 1] || h.tablist), s.attr("aria-live", "polite")), s.length && (h.panels = h.panels.add(s)), r && a.data("ui-tabs-aria-controls", r), a.attr({
          "aria-controls": n,
          "aria-labelledby": o
        }), s.attr("aria-labelledby", o);
      }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)));
    },
    _getList: function _getList() {
      return this.tablist || this.element.find("ol, ul").eq(0);
    },
    _createPanel: function _createPanel(t) {
      return k("<div>").attr("id", t).data("ui-tabs-destroy", !0);
    },
    _setOptionDisabled: function _setOptionDisabled(t) {
      var e, i;

      for (k.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), i = 0; e = this.tabs[i]; i++) {
        e = k(e), !0 === t || -1 !== k.inArray(i, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
      }

      this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t);
    },
    _setupEvents: function _setupEvents(t) {
      var i = {};
      t && k.each(t.split(" "), function (t, e) {
        i[e] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function click(t) {
          t.preventDefault();
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function _setupHeightStyle(t) {
      var i,
          e = this.element.parent();
      "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var t = k(this),
            e = t.css("position");
        "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= k(this).outerHeight(!0);
      }), this.panels.each(function () {
        k(this).height(Math.max(0, i - k(this).innerHeight() + k(this).height()));
      }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
        i = Math.max(i, k(this).height("").height());
      }).height(i));
    },
    _eventHandler: function _eventHandler(t) {
      var e = this.options,
          i = this.active,
          s = k(t.currentTarget).closest("li"),
          n = s[0] === i[0],
          o = n && e.collapsible,
          a = o ? k() : this._getPanelForTab(s),
          r = i.length ? this._getPanelForTab(i) : k(),
          i = {
        oldTab: i,
        oldPanel: r,
        newTab: o ? k() : s,
        newPanel: a
      };
      t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || n && !e.collapsible || !1 === this._trigger("beforeActivate", t, i) || (e.active = !o && this.tabs.index(s), this.active = n ? k() : s, this.xhr && this.xhr.abort(), r.length || a.length || k.error("jQuery UI Tabs: Mismatching fragment identifier."), a.length && this.load(this.tabs.index(s), t), this._toggle(t, i));
    },
    _toggle: function _toggle(t, e) {
      var i = this,
          s = e.newPanel,
          n = e.oldPanel;

      function o() {
        i.running = !1, i._trigger("activate", t, e);
      }

      function a() {
        i._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), s.length && i.options.show ? i._show(s, i.options.show, o) : (s.show(), o());
      }

      this.running = !0, n.length && this.options.hide ? this._hide(n, this.options.hide, function () {
        i._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a();
      }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n.hide(), a()), n.attr("aria-hidden", "true"), e.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), s.length && n.length ? e.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function () {
        return 0 === k(this).attr("tabIndex");
      }).attr("tabIndex", -1), s.attr("aria-hidden", "false"), e.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _activate: function _activate(t) {
      var t = this._findActive(t);

      t[0] !== this.active[0] && (t.length || (t = this.active), t = t.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: t,
        currentTarget: t,
        preventDefault: k.noop
      }));
    },
    _findActive: function _findActive(t) {
      return !1 === t ? k() : this.tabs.eq(t);
    },
    _getIndex: function _getIndex(t) {
      return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + k.ui.escapeSelector(t) + "']"))), t;
    },
    _destroy: function _destroy() {
      this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
        k.data(this, "ui-tabs-destroy") ? k(this).remove() : k(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
      }), this.tabs.each(function () {
        var t = k(this),
            e = t.data("ui-tabs-aria-controls");
        e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function enable(i) {
      var t = this.options.disabled;
      !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), k.isArray(t) ? k.map(t, function (t) {
        return t !== i ? t : null;
      }) : k.map(this.tabs, function (t, e) {
        return e !== i ? e : null;
      })), this._setOptionDisabled(t));
    },
    disable: function disable(t) {
      var e = this.options.disabled;

      if (!0 !== e) {
        if (void 0 === t) e = !0;else {
          if (t = this._getIndex(t), -1 !== k.inArray(t, e)) return;
          e = k.isArray(e) ? k.merge([t], e).sort() : [t];
        }

        this._setOptionDisabled(e);
      }
    },
    load: function load(t, s) {
      t = this._getIndex(t);

      function n(t, e) {
        "abort" === e && o.panels.stop(!1, !0), o._removeClass(i, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === o.xhr && delete o.xhr;
      }

      var o = this,
          i = this.tabs.eq(t),
          t = i.find(".ui-tabs-anchor"),
          a = this._getPanelForTab(i),
          r = {
        tab: i,
        panel: a
      };

      this._isLocal(t[0]) || (this.xhr = k.ajax(this._ajaxSettings(t, s, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, i) {
        setTimeout(function () {
          a.html(t), o._trigger("load", s, r), n(i, e);
        }, 1);
      }).fail(function (t, e) {
        setTimeout(function () {
          n(t, e);
        }, 1);
      })));
    },
    _ajaxSettings: function _ajaxSettings(t, i, s) {
      var n = this;
      return {
        url: t.attr("href").replace(/#.*$/, ""),
        beforeSend: function beforeSend(t, e) {
          return n._trigger("beforeLoad", i, k.extend({
            jqXHR: t,
            ajaxSettings: e
          }, s));
        }
      };
    },
    _getPanelForTab: function _getPanelForTab(t) {
      t = k(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + t));
    }
  }), !1 !== k.uiBackCompat && k.widget("ui.tabs", k.ui.tabs, {
    _processTabs: function _processTabs() {
      this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
    }
  });
  k.ui.tabs;
});

/***/ }),

/***/ "./resources/assets/js/jquery/jquery-3.4.1.min.js":
/*!********************************************************!*\
  !*** ./resources/assets/js/jquery/jquery-3.4.1.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (e, t) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";

  var t = [],
      E = C.document,
      r = Object.getPrototypeOf,
      s = t.slice,
      g = t.concat,
      u = t.push,
      i = t.indexOf,
      n = {},
      o = n.toString,
      v = n.hasOwnProperty,
      a = v.toString,
      l = a.call(Object),
      y = {},
      m = function m(e) {
    return "function" == typeof e && "number" != typeof e.nodeType;
  },
      x = function x(e) {
    return null != e && e === e.window;
  },
      c = {
    type: !0,
    src: !0,
    nonce: !0,
    noModule: !0
  };

  function b(e, t, n) {
    var r,
        i,
        o = (n = n || E).createElement("script");
    if (o.text = e, t) for (r in c) {
      (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
    }
    n.head.appendChild(o).parentNode.removeChild(o);
  }

  function w(e) {
    return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[o.call(e)] || "object" : _typeof(e);
  }

  var f = "3.4.1",
      k = function k(e, t) {
    return new k.fn.init(e, t);
  },
      p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  function d(e) {
    var t = !!e && "length" in e && e.length,
        n = w(e);
    return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e);
  }

  k.fn = k.prototype = {
    jquery: f,
    constructor: k,
    length: 0,
    toArray: function toArray() {
      return s.call(this);
    },
    get: function get(e) {
      return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function pushStack(e) {
      var t = k.merge(this.constructor(), e);
      return t.prevObject = this, t;
    },
    each: function each(e) {
      return k.each(this, e);
    },
    map: function map(n) {
      return this.pushStack(k.map(this, function (e, t) {
        return n.call(e, t, e);
      }));
    },
    slice: function slice() {
      return this.pushStack(s.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(e) {
      var t = this.length,
          n = +e + (e < 0 ? t : 0);
      return this.pushStack(0 <= n && n < t ? [this[n]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: u,
    sort: t.sort,
    splice: t.splice
  }, k.extend = k.fn.extend = function () {
    var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;

    for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == _typeof(a) || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) {
      if (null != (e = arguments[s])) for (t in e) {
        r = e[t], "__proto__" !== t && a !== r && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || k.isPlainObject(n) ? n : {}, i = !1, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
      }
    }

    return a;
  }, k.extend({
    expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(e) {
      throw new Error(e);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(e) {
      var t, n;
      return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l);
    },
    isEmptyObject: function isEmptyObject(e) {
      var t;

      for (t in e) {
        return !1;
      }

      return !0;
    },
    globalEval: function globalEval(e, t) {
      b(e, {
        nonce: t && t.nonce
      });
    },
    each: function each(e, t) {
      var n,
          r = 0;

      if (d(e)) {
        for (n = e.length; r < n; r++) {
          if (!1 === t.call(e[r], r, e[r])) break;
        }
      } else for (r in e) {
        if (!1 === t.call(e[r], r, e[r])) break;
      }

      return e;
    },
    trim: function trim(e) {
      return null == e ? "" : (e + "").replace(p, "");
    },
    makeArray: function makeArray(e, t) {
      var n = t || [];
      return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
    },
    inArray: function inArray(e, t, n) {
      return null == t ? -1 : i.call(t, e, n);
    },
    merge: function merge(e, t) {
      for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
        e[i++] = t[r];
      }

      return e.length = i, e;
    },
    grep: function grep(e, t, n) {
      for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
        !t(e[i], i) !== a && r.push(e[i]);
      }

      return r;
    },
    map: function map(e, t, n) {
      var r,
          i,
          o = 0,
          a = [];
      if (d(e)) for (r = e.length; o < r; o++) {
        null != (i = t(e[o], o, n)) && a.push(i);
      } else for (o in e) {
        null != (i = t(e[o], o, n)) && a.push(i);
      }
      return g.apply([], a);
    },
    guid: 1,
    support: y
  }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
    n["[object " + t + "]"] = t.toLowerCase();
  });

  var h = function (n) {
    var e,
        d,
        b,
        o,
        i,
        h,
        f,
        g,
        w,
        u,
        l,
        T,
        C,
        a,
        E,
        v,
        s,
        c,
        y,
        k = "sizzle" + 1 * new Date(),
        m = n.document,
        S = 0,
        r = 0,
        p = ue(),
        x = ue(),
        N = ue(),
        A = ue(),
        D = function D(e, t) {
      return e === t && (l = !0), 0;
    },
        j = {}.hasOwnProperty,
        t = [],
        q = t.pop,
        L = t.push,
        H = t.push,
        O = t.slice,
        P = function P(e, t) {
      for (var n = 0, r = e.length; n < r; n++) {
        if (e[n] === t) return n;
      }

      return -1;
    },
        R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
        $ = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
        F = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        _ = new RegExp("^" + M + "*," + M + "*"),
        z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        U = new RegExp(M + "|>"),
        X = new RegExp($),
        V = new RegExp("^" + I + "$"),
        G = {
      ID: new RegExp("^#(" + I + ")"),
      CLASS: new RegExp("^\\.(" + I + ")"),
      TAG: new RegExp("^(" + I + "|[*])"),
      ATTR: new RegExp("^" + W),
      PSEUDO: new RegExp("^" + $),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + R + ")$", "i"),
      needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
    },
        Y = /HTML$/i,
        Q = /^(?:input|select|textarea|button)$/i,
        J = /^h\d$/i,
        K = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ee = /[+~]/,
        te = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ne = function ne(e, t, n) {
      var r = "0x" + t - 65536;
      return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    },
        re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ie = function ie(e, t) {
      return t ? "\0" === e ? "\uFFFD" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    },
        oe = function oe() {
      T();
    },
        ae = be(function (e) {
      return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      H.apply(t = O.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length ? function (e, t) {
          L.apply(e, O.call(t));
        } : function (e, t) {
          var n = e.length,
              r = 0;

          while (e[n++] = t[r++]) {
            ;
          }

          e.length = n - 1;
        }
      };
    }

    function se(t, e, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = e && e.ownerDocument,
          p = e ? e.nodeType : 9;
      if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;

      if (!r && ((e ? e.ownerDocument || e : m) !== C && T(e), e = e || C, E)) {
        if (11 !== p && (u = Z.exec(t))) if (i = u[1]) {
          if (9 === p) {
            if (!(a = e.getElementById(i))) return n;
            if (a.id === i) return n.push(a), n;
          } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
        } else {
          if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
          if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
        }

        if (d.qsa && !A[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
          if (c = t, f = e, 1 === p && U.test(t)) {
            (s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = k), o = (l = h(t)).length;

            while (o--) {
              l[o] = "#" + s + " " + xe(l[o]);
            }

            c = l.join(","), f = ee.test(t) && ye(e.parentNode) || e;
          }

          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            A(t, !0);
          } finally {
            s === k && e.removeAttribute("id");
          }
        }
      }

      return g(t.replace(B, "$1"), e, n, r);
    }

    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n;
      };
    }

    function le(e) {
      return e[k] = !0, e;
    }

    function ce(e) {
      var t = C.createElement("fieldset");

      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }

    function fe(e, t) {
      var n = e.split("|"),
          r = n.length;

      while (r--) {
        b.attrHandle[n[r]] = t;
      }
    }

    function pe(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while (n = n.nextSibling) {
        if (n === t) return -1;
      }
      return e ? 1 : -1;
    }

    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }

    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }

    function ge(t) {
      return function (e) {
        return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t;
      };
    }

    function ve(a) {
      return le(function (o) {
        return o = +o, le(function (e, t) {
          var n,
              r = a([], e.length, o),
              i = r.length;

          while (i--) {
            e[n = r[i]] && (e[n] = !(t[n] = e[n]));
          }
        });
      });
    }

    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }

    for (e in d = se.support = {}, i = se.isXML = function (e) {
      var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
      return !Y.test(t || n && n.nodeName || "HTML");
    }, T = se.setDocument = function (e) {
      var t,
          n,
          r = e ? e.ownerDocument || e : m;
      return r !== C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.attributes = ce(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), d.getElementsByTagName = ce(function (e) {
        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
      }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function (e) {
        return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
      }), d.getById ? (b.filter.ID = function (e) {
        var t = e.replace(te, ne);
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n = t.getElementById(e);
          return n ? [n] : [];
        }
      }) : (b.filter.ID = function (e) {
        var n = e.replace(te, ne);
        return function (e) {
          var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
          return t && t.value === n;
        };
      }, b.find.ID = function (e, t) {
        if ("undefined" != typeof t.getElementById && E) {
          var n,
              r,
              i,
              o = t.getElementById(e);

          if (o) {
            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            i = t.getElementsByName(e), r = 0;

            while (o = i[r++]) {
              if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
            }
          }

          return [];
        }
      }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);

        if ("*" === e) {
          while (n = o[i++]) {
            1 === n.nodeType && r.push(n);
          }

          return r;
        }

        return o;
      }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
        if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
      }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function (e) {
        a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + k + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || v.push(".#.+[+~]");
      }), ce(function (e) {
        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var t = C.createElement("input");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
      })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function (e) {
        d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", $);
      }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) while (t = t.parentNode) {
          if (t === e) return !0;
        }
        return !1;
      }, D = t ? function (e, t) {
        if (e === t) return l = !0, 0;
        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
        return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && y(m, e) ? -1 : t === C || t.ownerDocument === m && y(m, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1);
      } : function (e, t) {
        if (e === t) return l = !0, 0;
        var n,
            r = 0,
            i = e.parentNode,
            o = t.parentNode,
            a = [e],
            s = [t];
        if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
        if (i === o) return pe(e, t);
        n = e;

        while (n = n.parentNode) {
          a.unshift(n);
        }

        n = t;

        while (n = n.parentNode) {
          s.unshift(n);
        }

        while (a[r] === s[r]) {
          r++;
        }

        return r ? pe(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0;
      }), C;
    }, se.matches = function (e, t) {
      return se(e, null, null, t);
    }, se.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== C && T(e), d.matchesSelector && E && !A[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
        var n = c.call(e, t);
        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
      } catch (e) {
        A(t, !0);
      }
      return 0 < se(t, C, null, [e]).length;
    }, se.contains = function (e, t) {
      return (e.ownerDocument || e) !== C && T(e), y(e, t);
    }, se.attr = function (e, t) {
      (e.ownerDocument || e) !== C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
          r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, se.escape = function (e) {
      return (e + "").replace(re, ie);
    }, se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, se.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;

      if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(D), l) {
        while (t = e[i++]) {
          t === e[i] && (r = n.push(i));
        }

        while (r--) {
          e.splice(n[r], 1);
        }
      }

      return u = null, e;
    }, o = se.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;

      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;

          for (e = e.firstChild; e; e = e.nextSibling) {
            n += o(e);
          }
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else while (t = e[r++]) {
        n += o(t);
      }

      return n;
    }, (b = se.selectors = {
      cacheLength: 50,
      createPseudo: le,
      match: G,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(e) {
          return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD: function CHILD(e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e;
        },
        PSEUDO: function PSEUDO(e) {
          var t,
              n = !e[6] && e[2];
          return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(e) {
          var t = e.replace(te, ne).toLowerCase();
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function CLASS(e) {
          var t = p[e + " "];
          return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(n, r, i) {
          return function (e) {
            var t = se.attr(e, n);
            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(F, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function CHILD(h, e, t, g, v) {
          var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
          return 1 === g && 0 === v ? function (e) {
            return !!e.parentNode;
          } : function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u,
                l = y !== m ? "nextSibling" : "previousSibling",
                c = e.parentNode,
                f = x && e.nodeName.toLowerCase(),
                p = !n && !x,
                d = !1;

            if (c) {
              if (y) {
                while (l) {
                  a = e;

                  while (a = a[l]) {
                    if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                  }

                  u = l = "only" === h && !u && "nextSibling";
                }

                return !0;
              }

              if (u = [m ? c.firstChild : c.lastChild], m && p) {
                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];

                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                  if (1 === a.nodeType && ++d && a === e) {
                    i[h] = [S, s, d];
                    break;
                  }
                }
              } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) {
                if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
              }

              return (d -= v) === g || d % g == 0 && 0 <= d / g;
            }
          };
        },
        PSEUDO: function PSEUDO(e, o) {
          var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
          return a[k] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, t) {
            var n,
                r = a(e, o),
                i = r.length;

            while (i--) {
              e[n = P(e, r[i])] = !(t[n] = r[i]);
            }
          }) : function (e) {
            return a(e, 0, t);
          }) : a;
        }
      },
      pseudos: {
        not: le(function (e) {
          var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
          return s[k] ? le(function (e, t, n, r) {
            var i,
                o = s(e, null, r, []),
                a = e.length;

            while (a--) {
              (i = o[a]) && (e[a] = !(t[a] = i));
            }
          }) : function (e, t, n) {
            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
          };
        }),
        has: le(function (t) {
          return function (e) {
            return 0 < se(t, e).length;
          };
        }),
        contains: le(function (t) {
          return t = t.replace(te, ne), function (e) {
            return -1 < (e.textContent || o(e)).indexOf(t);
          };
        }),
        lang: le(function (n) {
          return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(), function (e) {
            var t;

            do {
              if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
            } while ((e = e.parentNode) && 1 === e.nodeType);

            return !1;
          };
        }),
        target: function target(e) {
          var t = n.location && n.location.hash;
          return t && t.slice(1) === e.id;
        },
        root: function root(e) {
          return e === a;
        },
        focus: function focus(e) {
          return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: ge(!1),
        disabled: ge(!0),
        checked: function checked(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function selected(e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        },
        empty: function empty(e) {
          for (e = e.firstChild; e; e = e.nextSibling) {
            if (e.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(e) {
          return !b.pseudos.empty(e);
        },
        header: function header(e) {
          return J.test(e.nodeName);
        },
        input: function input(e) {
          return Q.test(e.nodeName);
        },
        button: function button(e) {
          var t = e.nodeName.toLowerCase();
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function text(e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        },
        first: ve(function () {
          return [0];
        }),
        last: ve(function (e, t) {
          return [t - 1];
        }),
        eq: ve(function (e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: ve(function (e, t) {
          for (var n = 0; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        odd: ve(function (e, t) {
          for (var n = 1; n < t; n += 2) {
            e.push(n);
          }

          return e;
        }),
        lt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) {
            e.push(r);
          }

          return e;
        }),
        gt: ve(function (e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t;) {
            e.push(r);
          }

          return e;
        })
      }
    }).pseudos.nth = b.pseudos.eq, {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      b.pseudos[e] = de(e);
    }

    for (e in {
      submit: !0,
      reset: !0
    }) {
      b.pseudos[e] = he(e);
    }

    function me() {}

    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) {
        r += e[t].value;
      }

      return r;
    }

    function be(s, e, t) {
      var u = e.dir,
          l = e.next,
          c = l || u,
          f = t && "parentNode" === c,
          p = r++;
      return e.first ? function (e, t, n) {
        while (e = e[u]) {
          if (1 === e.nodeType || f) return s(e, t, n);
        }

        return !1;
      } : function (e, t, n) {
        var r,
            i,
            o,
            a = [S, p];

        if (n) {
          while (e = e[u]) {
            if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
          }
        } else while (e = e[u]) {
          if (1 === e.nodeType || f) if (i = (o = e[k] || (e[k] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;else {
            if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
            if ((i[c] = a)[2] = s(e, t, n)) return !0;
          }
        }

        return !1;
      };
    }

    function we(i) {
      return 1 < i.length ? function (e, t, n) {
        var r = i.length;

        while (r--) {
          if (!i[r](e, t, n)) return !1;
        }

        return !0;
      } : i[0];
    }

    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
        (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
      }

      return a;
    }

    function Ce(d, h, g, v, y, e) {
      return v && !v[k] && (v = Ce(v)), y && !y[k] && (y = Ce(y, e)), le(function (e, t, n, r) {
        var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || function (e, t, n) {
          for (var r = 0, i = t.length; r < i; r++) {
            se(e, t[r], n);
          }

          return n;
        }(h || "*", n.nodeType ? [n] : n, []),
            f = !d || !e && h ? c : Te(c, s, d, n, r),
            p = g ? y || (e ? d : l || v) ? [] : t : f;

        if (g && g(f, p, n, r), v) {
          i = Te(p, u), v(i, [], n, r), o = i.length;

          while (o--) {
            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
        }

        if (e) {
          if (y || d) {
            if (y) {
              i = [], o = p.length;

              while (o--) {
                (a = p[o]) && i.push(f[o] = a);
              }

              y(null, p = [], i, r);
            }

            o = p.length;

            while (o--) {
              (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          }
        } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p);
      });
    }

    function Ee(e) {
      for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function (e) {
        return e === i;
      }, a, !0), l = be(function (e) {
        return -1 < P(i, e);
      }, a, !0), c = [function (e, t, n) {
        var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
        return i = null, r;
      }]; s < r; s++) {
        if (t = b.relative[e[s].type]) c = [be(we(c), t)];else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
            for (n = ++s; n < r; n++) {
              if (b.relative[e[n].type]) break;
            }

            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
              value: " " === e[s - 2].type ? "*" : ""
            })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e));
          }

          c.push(t);
        }
      }

      return we(c);
    }

    return me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = se.tokenize = function (e, t) {
      var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      a = e, s = [], u = b.preFilter;

      while (a) {
        for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
          value: n,
          type: r[0].replace(B, " ")
        }), a = a.slice(n.length)), b.filter) {
          !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
            value: n,
            type: o,
            matches: r
          }), a = a.slice(n.length));
        }

        if (!n) break;
      }

      return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
    }, f = se.compile = function (e, t) {
      var n,
          v,
          y,
          m,
          x,
          r,
          i = [],
          o = [],
          a = N[e + " "];

      if (!a) {
        t || (t = h(e)), n = t.length;

        while (n--) {
          (a = Ee(t[n]))[k] ? i.push(a) : o.push(a);
        }

        (a = N(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function r(e, t, n, _r, i) {
          var o,
              a,
              s,
              u = 0,
              l = "0",
              c = e && [],
              f = [],
              p = w,
              d = e || x && b.find.TAG("*", i),
              h = S += null == p ? 1 : Math.random() || .1,
              g = d.length;

          for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
            if (x && o) {
              a = 0, t || o.ownerDocument === C || (T(o), n = !E);

              while (s = v[a++]) {
                if (s(o, t || C, n)) {
                  _r.push(o);

                  break;
                }
              }

              i && (S = h);
            }

            m && ((o = !s && o) && u--, e && c.push(o));
          }

          if (u += l, m && l !== u) {
            a = 0;

            while (s = y[a++]) {
              s(c, f, t, n);
            }

            if (e) {
              if (0 < u) while (l--) {
                c[l] || f[l] || (f[l] = q.call(_r));
              }
              f = Te(f);
            }

            H.apply(_r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(_r);
          }

          return i && (S = h, w = p), c;
        }, m ? le(r) : r))).selector = e;
      }

      return a;
    }, g = se.select = function (e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && h(e = l.selector || e);

      if (n = n || [], 1 === c.length) {
        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
          if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
          l && (t = t.parentNode), e = e.slice(o.shift().value.length);
        }

        i = G.needsContext.test(e) ? 0 : o.length;

        while (i--) {
          if (a = o[i], b.relative[s = a.type]) break;

          if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
            if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
            break;
          }
        }
      }

      return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n;
    }, d.sortStable = k.split("").sort(D).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function (e) {
      return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
    }), ce(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || fe("type|href|height|width", function (e, t, n) {
      if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), d.attributes && ce(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || fe("value", function (e, t, n) {
      if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
    }), ce(function (e) {
      return null == e.getAttribute("disabled");
    }) || fe(R, function (e, t, n) {
      var r;
      if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), se;
  }(C);

  k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;

  var T = function T(e, t, n) {
    var r = [],
        i = void 0 !== n;

    while ((e = e[t]) && 9 !== e.nodeType) {
      if (1 === e.nodeType) {
        if (i && k(e).is(n)) break;
        r.push(e);
      }
    }

    return r;
  },
      S = function S(e, t) {
    for (var n = []; e; e = e.nextSibling) {
      1 === e.nodeType && e !== t && n.push(e);
    }

    return n;
  },
      N = k.expr.match.needsContext;

  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }

  var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

  function j(e, n, r) {
    return m(n) ? k.grep(e, function (e, t) {
      return !!n.call(e, t, e) !== r;
    }) : n.nodeType ? k.grep(e, function (e) {
      return e === n !== r;
    }) : "string" != typeof n ? k.grep(e, function (e) {
      return -1 < i.call(n, e) !== r;
    }) : k.filter(n, e, r);
  }

  k.filter = function (e, t, n) {
    var r = t[0];
    return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, k.fn.extend({
    find: function find(e) {
      var t,
          n,
          r = this.length,
          i = this;
      if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
        for (t = 0; t < r; t++) {
          if (k.contains(i[t], this)) return !0;
        }
      }));

      for (n = this.pushStack([]), t = 0; t < r; t++) {
        k.find(e, i[t], n);
      }

      return 1 < r ? k.uniqueSort(n) : n;
    },
    filter: function filter(e) {
      return this.pushStack(j(this, e || [], !1));
    },
    not: function not(e) {
      return this.pushStack(j(this, e || [], !0));
    },
    is: function is(e) {
      return !!j(this, "string" == typeof e && N.test(e) ? k(e) : e || [], !1).length;
    }
  });
  var q,
      L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (k.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;

    if (n = n || q, "string" == typeof e) {
      if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);

      if (r[1]) {
        if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), D.test(r[1]) && k.isPlainObject(t)) for (r in t) {
          m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        }
        return this;
      }

      return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this;
    }

    return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
  }).prototype = k.fn, q = k(E);
  var H = /^(?:parents|prev(?:Until|All))/,
      O = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };

  function P(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType) {
      ;
    }

    return e;
  }

  k.fn.extend({
    has: function has(e) {
      var t = k(e, this),
          n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) {
          if (k.contains(this, t[e])) return !0;
        }
      });
    },
    closest: function closest(e, t) {
      var n,
          r = 0,
          i = this.length,
          o = [],
          a = "string" != typeof e && k(e);
      if (!N.test(e)) for (; r < i; r++) {
        for (n = this[r]; n && n !== t; n = n.parentNode) {
          if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
            o.push(n);
            break;
          }
        }
      }
      return this.pushStack(1 < o.length ? k.uniqueSort(o) : o);
    },
    index: function index(e) {
      return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(e, t) {
      return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
    },
    addBack: function addBack(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), k.each({
    parent: function parent(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function parents(e) {
      return T(e, "parentNode");
    },
    parentsUntil: function parentsUntil(e, t, n) {
      return T(e, "parentNode", n);
    },
    next: function next(e) {
      return P(e, "nextSibling");
    },
    prev: function prev(e) {
      return P(e, "previousSibling");
    },
    nextAll: function nextAll(e) {
      return T(e, "nextSibling");
    },
    prevAll: function prevAll(e) {
      return T(e, "previousSibling");
    },
    nextUntil: function nextUntil(e, t, n) {
      return T(e, "nextSibling", n);
    },
    prevUntil: function prevUntil(e, t, n) {
      return T(e, "previousSibling", n);
    },
    siblings: function siblings(e) {
      return S((e.parentNode || {}).firstChild, e);
    },
    children: function children(e) {
      return S(e.firstChild);
    },
    contents: function contents(e) {
      return "undefined" != typeof e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), k.merge([], e.childNodes));
    }
  }, function (r, i) {
    k.fn[r] = function (e, t) {
      var n = k.map(this, i, e);
      return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 1 < this.length && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
    };
  });
  var R = /[^\x20\t\r\n\f]+/g;

  function M(e) {
    return e;
  }

  function I(e) {
    throw e;
  }

  function W(e, t, n, r) {
    var i;

    try {
      e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }

  k.Callbacks = function (r) {
    var e, n;
    r = "string" == typeof r ? (e = r, n = {}, k.each(e.match(R) || [], function (e, t) {
      n[t] = !0;
    }), n) : k.extend({}, r);

    var i,
        t,
        o,
        a,
        s = [],
        u = [],
        l = -1,
        c = function c() {
      for (a = a || r.once, o = i = !0; u.length; l = -1) {
        t = u.shift();

        while (++l < s.length) {
          !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1);
        }
      }

      r.memory || (t = !1), i = !1, a && (s = t ? [] : "");
    },
        f = {
      add: function add() {
        return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
          k.each(e, function (e, t) {
            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t);
          });
        }(arguments), t && !i && c()), this;
      },
      remove: function remove() {
        return k.each(arguments, function (e, t) {
          var n;

          while (-1 < (n = k.inArray(t, s, n))) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      },
      has: function has(e) {
        return e ? -1 < k.inArray(e, s) : 0 < s.length;
      },
      empty: function empty() {
        return s && (s = []), this;
      },
      disable: function disable() {
        return a = u = [], s = t = "", this;
      },
      disabled: function disabled() {
        return !s;
      },
      lock: function lock() {
        return a = u = [], t || i || (s = t = ""), this;
      },
      locked: function locked() {
        return !!a;
      },
      fireWith: function fireWith(e, t) {
        return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this;
      },
      fire: function fire() {
        return f.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!o;
      }
    };

    return f;
  }, k.extend({
    Deferred: function Deferred(e) {
      var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
          i = "pending",
          a = {
        state: function state() {
          return i;
        },
        always: function always() {
          return s.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(e) {
          return a.then(null, e);
        },
        pipe: function pipe() {
          var i = arguments;
          return k.Deferred(function (r) {
            k.each(o, function (e, t) {
              var n = m(i[t[4]]) && i[t[4]];
              s[t[1]](function () {
                var e = n && n.apply(this, arguments);
                e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments);
              });
            }), i = null;
          }).promise();
        },
        then: function then(t, n, r) {
          var u = 0;

          function l(i, o, a, s) {
            return function () {
              var n = this,
                  r = arguments,
                  e = function e() {
                var e, t;

                if (!(i < u)) {
                  if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                  t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, M, s), l(u, o, I, s)) : (u++, t.call(e, l(u, o, M, s), l(u, o, I, s), l(u, o, M, o.notifyWith))) : (a !== M && (n = void 0, r = [e]), (s || o.resolveWith)(n, r));
                }
              },
                  t = s ? e : function () {
                try {
                  e();
                } catch (e) {
                  k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== I && (n = void 0, r = [e]), o.rejectWith(n, r));
                }
              };

              i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t));
            };
          }

          return k.Deferred(function (e) {
            o[0][3].add(l(0, e, m(r) ? r : M, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : M)), o[2][3].add(l(0, e, m(n) ? n : I));
          }).promise();
        },
        promise: function promise(e) {
          return null != e ? k.extend(e, a) : a;
        }
      },
          s = {};
      return k.each(o, function (e, t) {
        var n = t[2],
            r = t[5];
        a[t[1]] = n.add, r && n.add(function () {
          i = r;
        }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
          return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
        }, s[t[0] + "With"] = n.fireWith;
      }), a.promise(s), e && e.call(s, s), s;
    },
    when: function when(e) {
      var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = k.Deferred(),
          a = function a(t) {
        return function (e) {
          r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i);
        };
      };

      if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();

      while (t--) {
        W(i[t], a(t), o.reject);
      }

      return o.promise();
    }
  });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  k.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }, k.readyException = function (e) {
    C.setTimeout(function () {
      throw e;
    });
  };
  var F = k.Deferred();

  function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), k.ready();
  }

  k.fn.ready = function (e) {
    return F.then(e)["catch"](function (e) {
      k.readyException(e);
    }), this;
  }, k.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(e) {
      (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0) !== e && 0 < --k.readyWait || F.resolveWith(E, [k]);
    }
  }), k.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));

  var _ = function _(e, t, n, r, i, o, a) {
    var s = 0,
        u = e.length,
        l = null == n;
    if ("object" === w(n)) for (s in i = !0, n) {
      _(e, t, s, n[s], !0, o, a);
    } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
      return l.call(k(e), n);
    })), t)) for (; s < u; s++) {
      t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
    }
    return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
  },
      z = /^-ms-/,
      U = /-([a-z])/g;

  function X(e, t) {
    return t.toUpperCase();
  }

  function V(e) {
    return e.replace(z, "ms-").replace(U, X);
  }

  var G = function G(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };

  function Y() {
    this.expando = k.expando + Y.uid++;
  }

  Y.uid = 1, Y.prototype = {
    cache: function cache(e) {
      var t = e[this.expando];
      return t || (t = {}, G(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
        value: t,
        configurable: !0
      }))), t;
    },
    set: function set(e, t, n) {
      var r,
          i = this.cache(e);
      if ("string" == typeof t) i[V(t)] = n;else for (r in t) {
        i[V(r)] = t[r];
      }
      return i;
    },
    get: function get(e, t) {
      return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
    },
    access: function access(e, t, n) {
      return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
    },
    remove: function remove(e, t) {
      var n,
          r = e[this.expando];

      if (void 0 !== r) {
        if (void 0 !== t) {
          n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(R) || []).length;

          while (n--) {
            delete r[t[n]];
          }
        }

        (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
      }
    },
    hasData: function hasData(e) {
      var t = e[this.expando];
      return void 0 !== t && !k.isEmptyObject(t);
    }
  };
  var Q = new Y(),
      J = new Y(),
      K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(Z, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i);
      } catch (e) {}

      J.set(e, t, n);
    } else n = void 0;
    return n;
  }

  k.extend({
    hasData: function hasData(e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function data(e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function removeData(e, t) {
      J.remove(e, t);
    },
    _data: function _data(e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function _removeData(e, t) {
      Q.remove(e, t);
    }
  }), k.fn.extend({
    data: function data(n, e) {
      var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;

      if (void 0 === n) {
        if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
          t = a.length;

          while (t--) {
            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = V(r.slice(5)), ee(o, r, i[r]));
          }

          Q.set(o, "hasDataAttrs", !0);
        }

        return i;
      }

      return "object" == _typeof(n) ? this.each(function () {
        J.set(this, n);
      }) : _(this, function (e) {
        var t;
        if (o && void 0 === e) return void 0 !== (t = J.get(o, n)) ? t : void 0 !== (t = ee(o, n)) ? t : void 0;
        this.each(function () {
          J.set(this, n, e);
        });
      }, null, e, 1 < arguments.length, null, !0);
    },
    removeData: function removeData(e) {
      return this.each(function () {
        J.remove(this, e);
      });
    }
  }), k.extend({
    queue: function queue(e, t, n) {
      var r;
      if (e) return t = (t || "fx") + "queue", r = Q.get(e, t), n && (!r || Array.isArray(n) ? r = Q.access(e, t, k.makeArray(n)) : r.push(n)), r || [];
    },
    dequeue: function dequeue(e, t) {
      t = t || "fx";

      var n = k.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = k._queueHooks(e, t);

      "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        k.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function _queueHooks(e, t) {
      var n = t + "queueHooks";
      return Q.get(e, n) || Q.access(e, n, {
        empty: k.Callbacks("once memory").add(function () {
          Q.remove(e, [t + "queue", n]);
        })
      });
    }
  }), k.fn.extend({
    queue: function queue(t, n) {
      var e = 2;
      return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
        var e = k.queue(this, t, n);
        k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
      });
    },
    dequeue: function dequeue(e) {
      return this.each(function () {
        k.dequeue(this, e);
      });
    },
    clearQueue: function clearQueue(e) {
      return this.queue(e || "fx", []);
    },
    promise: function promise(e, t) {
      var n,
          r = 1,
          i = k.Deferred(),
          o = this,
          a = this.length,
          s = function s() {
        --r || i.resolveWith(o, [o]);
      };

      "string" != typeof e && (t = e, e = void 0), e = e || "fx";

      while (a--) {
        (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
      }

      return s(), i.promise(t);
    }
  });

  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
      re = ["Top", "Right", "Bottom", "Left"],
      ie = E.documentElement,
      oe = function oe(e) {
    return k.contains(e.ownerDocument, e);
  },
      ae = {
    composed: !0
  };

  ie.getRootNode && (oe = function oe(e) {
    return k.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
  });

  var se = function se(e, t) {
    return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === k.css(e, "display");
  },
      ue = function ue(e, t, n, r) {
    var i,
        o,
        a = {};

    for (o in t) {
      a[o] = e.style[o], e.style[o] = t[o];
    }

    for (o in i = n.apply(e, r || []), t) {
      e.style[o] = a[o];
    }

    return i;
  };

  function le(e, t, n, r) {
    var i,
        o,
        a = 20,
        s = r ? function () {
      return r.cur();
    } : function () {
      return k.css(e, t, "");
    },
        u = s(),
        l = n && n[3] || (k.cssNumber[t] ? "" : "px"),
        c = e.nodeType && (k.cssNumber[t] || "px" !== l && +u) && ne.exec(k.css(e, t));

    if (c && c[3] !== l) {
      u /= 2, l = l || c[3], c = +u || 1;

      while (a--) {
        k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
      }

      c *= 2, k.style(e, t, c + l), n = n || [];
    }

    return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i;
  }

  var ce = {};

  function fe(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++) {
      (r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Q.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && se(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ce[s]) || (o = a.body.appendChild(a.createElement(s)), u = k.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ce[s] = u)))) : "none" !== n && (l[c] = "none", Q.set(r, "display", n)));
    }

    for (c = 0; c < f; c++) {
      null != l[c] && (e[c].style.display = l[c]);
    }

    return e;
  }

  k.fn.extend({
    show: function show() {
      return fe(this, !0);
    },
    hide: function hide() {
      return fe(this);
    },
    toggle: function toggle(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        se(this) ? k(this).show() : k(this).hide();
      });
    }
  });
  var pe = /^(?:checkbox|radio)$/i,
      de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      he = /^$|^module$|\/(?:java|ecma)script/i,
      ge = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };

  function ve(e, t) {
    var n;
    return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? k.merge([e], n) : n;
  }

  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) {
      Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
  }

  ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
  var me,
      xe,
      be = /<|&#?\w+;/;

  function we(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) {
      if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o);else if (be.test(o)) {
        a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];

        while (c--) {
          a = a.lastChild;
        }

        k.merge(p, a.childNodes), (a = f.firstChild).textContent = "";
      } else p.push(t.createTextNode(o));
    }

    f.textContent = "", d = 0;

    while (o = p[d++]) {
      if (r && -1 < k.inArray(o, r)) i && i.push(o);else if (l = oe(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
        c = 0;

        while (o = a[c++]) {
          he.test(o.type || "") && n.push(o);
        }
      }
    }

    return f;
  }

  me = E.createDocumentFragment().appendChild(E.createElement("div")), (xe = E.createElement("input")).setAttribute("type", "radio"), xe.setAttribute("checked", "checked"), xe.setAttribute("name", "t"), me.appendChild(xe), y.checkClone = me.cloneNode(!0).cloneNode(!0).lastChild.checked, me.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!me.cloneNode(!0).lastChild.defaultValue;
  var Te = /^key/,
      Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ee = /^([^.]*)(?:\.(.+)|)/;

  function ke() {
    return !0;
  }

  function Se() {
    return !1;
  }

  function Ne(e, t) {
    return e === function () {
      try {
        return E.activeElement;
      } catch (e) {}
    }() == ("focus" === t);
  }

  function Ae(e, t, n, r, i, o) {
    var a, s;

    if ("object" == _typeof(t)) {
      for (s in "string" != typeof n && (r = r || n, n = void 0), t) {
        Ae(e, s, n, r, t[s], o);
      }

      return e;
    }

    if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Se;else if (!i) return e;
    return 1 === o && (a = i, (i = function i(e) {
      return k().off(e), a.apply(this, arguments);
    }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
      k.event.add(this, t, i, r, n);
    });
  }

  function De(e, i, o) {
    o ? (Q.set(e, i, !1), k.event.add(e, i, {
      namespace: !1,
      handler: function handler(e) {
        var t,
            n,
            r = Q.get(this, i);

        if (1 & e.isTrigger && this[i]) {
          if (r.length) (k.event.special[i] || {}).delegateType && e.stopPropagation();else if (r = s.call(arguments), Q.set(this, i, r), t = o(this, i), this[i](), r !== (n = Q.get(this, i)) || t ? Q.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value;
        } else r.length && (Q.set(this, i, {
          value: k.event.trigger(k.extend(r[0], k.Event.prototype), r.slice(1), this)
        }), e.stopImmediatePropagation());
      }
    })) : void 0 === Q.get(e, i) && k.event.add(e, i, ke);
  }

  k.event = {
    global: {},
    add: function add(t, e, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.get(t);

      if (v) {
        n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(ie, i), n.guid || (n.guid = k.guid++), (u = v.events) || (u = v.events = {}), (a = v.handle) || (a = v.handle = function (e) {
          return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
        }), l = (e = (e || "").match(R) || [""]).length;

        while (l--) {
          d = g = (s = Ee.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
            type: d,
            origType: g,
            data: r,
            handler: n,
            guid: n.guid,
            selector: i,
            needsContext: i && k.expr.match.needsContext.test(i),
            namespace: h.join(".")
          }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0);
        }
      }
    },
    remove: function remove(e, t, n, r, i) {
      var o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h,
          g,
          v = Q.hasData(e) && Q.get(e);

      if (v && (u = v.events)) {
        l = (t = (t || "").match(R) || [""]).length;

        while (l--) {
          if (d = g = (s = Ee.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
            f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;

            while (o--) {
              c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            }

            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || k.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) {
            k.event.remove(e, d + t[l], n, r, !0);
          }
        }

        k.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function dispatch(e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s = k.event.fix(e),
          u = new Array(arguments.length),
          l = (Q.get(this, "events") || {})[s.type] || [],
          c = k.event.special[s.type] || {};

      for (u[0] = s, t = 1; t < arguments.length; t++) {
        u[t] = arguments[t];
      }

      if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
        a = k.event.handlers.call(this, s, l), t = 0;

        while ((i = a[t++]) && !s.isPropagationStopped()) {
          s.currentTarget = i.elem, n = 0;

          while ((o = i.handlers[n++]) && !s.isImmediatePropagationStopped()) {
            s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((k.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
          }
        }

        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function handlers(e, t) {
      var n,
          r,
          i,
          o,
          a,
          s = [],
          u = t.delegateCount,
          l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button)) for (; l !== this; l = l.parentNode || this) {
        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
          for (o = [], a = {}, n = 0; n < u; n++) {
            void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < k(i, this).index(l) : k.find(i, this, null, [l]).length), a[i] && o.push(r);
          }

          o.length && s.push({
            elem: l,
            handlers: o
          });
        }
      }
      return l = this, u < t.length && s.push({
        elem: l,
        handlers: t.slice(u)
      }), s;
    },
    addProp: function addProp(t, e) {
      Object.defineProperty(k.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e) ? function () {
          if (this.originalEvent) return e(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[t];
        },
        set: function set(e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e
          });
        }
      });
    },
    fix: function fix(e) {
      return e[k.expando] ? e : new k.Event(e);
    },
    special: {
      load: {
        noBubble: !0
      },
      click: {
        setup: function setup(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click", ke), !1;
        },
        trigger: function trigger(e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, "input") && De(t, "click"), !0;
        },
        _default: function _default(e) {
          var t = e.target;
          return pe.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }, k.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n);
  }, k.Event = function (e, t) {
    if (!(this instanceof k.Event)) return new k.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0;
  }, k.Event.prototype = {
    constructor: k.Event,
    isDefaultPrevented: Se,
    isPropagationStopped: Se,
    isImmediatePropagationStopped: Se,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = ke, e && !this.isSimulated && e.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = ke, e && !this.isSimulated && e.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = ke, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
    }
  }, k.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    code: !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(e) {
      var t = e.button;
      return null == e.which && Te.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ce.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
    }
  }, k.event.addProp), k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (e, t) {
    k.event.special[e] = {
      setup: function setup() {
        return De(this, e, Ne), !1;
      },
      trigger: function trigger() {
        return De(this, e), !0;
      },
      delegateType: t
    };
  }), k.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (e, i) {
    k.event.special[e] = {
      delegateType: i,
      bindType: i,
      handle: function handle(e) {
        var t,
            n = e.relatedTarget,
            r = e.handleObj;
        return n && (n === this || k.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t;
      }
    };
  }), k.fn.extend({
    on: function on(e, t, n, r) {
      return Ae(this, e, t, n, r);
    },
    one: function one(e, t, n, r) {
      return Ae(this, e, t, n, r, 1);
    },
    off: function off(e, t, n) {
      var r, i;
      if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;

      if ("object" == _typeof(e)) {
        for (i in e) {
          this.off(i, t, e[i]);
        }

        return this;
      }

      return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function () {
        k.event.remove(this, e, n, t);
      });
    }
  });
  var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      qe = /<script|<style|<link/i,
      Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Oe(e, t) {
    return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && k(e).children("tbody")[0] || e;
  }

  function Pe(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }

  function Re(e) {
    return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
  }

  function Me(e, t) {
    var n, r, i, o, a, s, u, l;

    if (1 === t.nodeType) {
      if (Q.hasData(e) && (o = Q.access(e), a = Q.set(t, o), l = o.events)) for (i in delete a.handle, a.events = {}, l) {
        for (n = 0, r = l[i].length; n < r; n++) {
          k.event.add(t, i, l[i][n]);
        }
      }
      J.hasData(e) && (s = J.access(e), u = k.extend({}, s), J.set(t, u));
    }
  }

  function Ie(n, r, i, o) {
    r = g.apply([], r);
    var e,
        t,
        a,
        s,
        u,
        l,
        c = 0,
        f = n.length,
        p = f - 1,
        d = r[0],
        h = m(d);
    if (h || 1 < f && "string" == typeof d && !y.checkClone && Le.test(d)) return n.each(function (e) {
      var t = n.eq(e);
      h && (r[0] = d.call(this, e, t.html())), Ie(t, r, i, o);
    });

    if (f && (t = (e = we(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = k.map(ve(e, "script"), Pe)).length; c < f; c++) {
        u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ve(u, "script"))), i.call(n[c], u, c);
      }

      if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Re), c = 0; c < s; c++) {
        u = a[c], he.test(u.type || "") && !Q.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && !u.noModule && k._evalUrl(u.src, {
          nonce: u.nonce || u.getAttribute("nonce")
        }) : b(u.textContent.replace(He, ""), u, l));
      }
    }

    return n;
  }

  function We(e, t, n) {
    for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) {
      n || 1 !== r.nodeType || k.cleanData(ve(r)), r.parentNode && (n && oe(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    }

    return e;
  }

  k.extend({
    htmlPrefilter: function htmlPrefilter(e) {
      return e.replace(je, "<$1></$2>");
    },
    clone: function clone(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c = e.cloneNode(!0),
          f = oe(e);
      if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) {
        s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
      }
      if (t) if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) {
        Me(o[r], a[r]);
      } else Me(e, c);
      return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c;
    },
    cleanData: function cleanData(e) {
      for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) {
        if (G(n)) {
          if (t = n[Q.expando]) {
            if (t.events) for (r in t.events) {
              i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
            }
            n[Q.expando] = void 0;
          }

          n[J.expando] && (n[J.expando] = void 0);
        }
      }
    }
  }), k.fn.extend({
    detach: function detach(e) {
      return We(this, e, !0);
    },
    remove: function remove(e) {
      return We(this, e);
    },
    text: function text(e) {
      return _(this, function (e) {
        return void 0 === e ? k.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
        });
      }, null, e, arguments.length);
    },
    append: function append() {
      return Ie(this, arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e);
      });
    },
    prepend: function prepend() {
      return Ie(this, arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = Oe(this, e);
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function before() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function after() {
      return Ie(this, arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var e, t = 0; null != (e = this[t]); t++) {
        1 === e.nodeType && (k.cleanData(ve(e, !1)), e.textContent = "");
      }

      return this;
    },
    clone: function clone(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return k.clone(this, e, t);
      });
    },
    html: function html(e) {
      return _(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

        if ("string" == typeof e && !qe.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = k.htmlPrefilter(e);

          try {
            for (; n < r; n++) {
              1 === (t = this[n] || {}).nodeType && (k.cleanData(ve(t, !1)), t.innerHTML = e);
            }

            t = 0;
          } catch (e) {}
        }

        t && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function replaceWith() {
      var n = [];
      return Ie(this, arguments, function (e) {
        var t = this.parentNode;
        k.inArray(this, n) < 0 && (k.cleanData(ve(this)), t && t.replaceChild(e, this));
      }, n);
    }
  }), k.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, a) {
    k.fn[e] = function (e) {
      for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) {
        t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
      }

      return this.pushStack(n);
    };
  });

  var $e = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
      Fe = function Fe(e) {
    var t = e.ownerDocument.defaultView;
    return t && t.opener || (t = C), t.getComputedStyle(e);
  },
      Be = new RegExp(re.join("|"), "i");

  function _e(e, t, n) {
    var r,
        i,
        o,
        a,
        s = e.style;
    return (n = n || Fe(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || oe(e) || (a = k.style(e, t)), !y.pixelBoxStyles() && $e.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
  }

  function ze(e, t) {
    return {
      get: function get() {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }

  !function () {
    function e() {
      if (u) {
        s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(s).appendChild(u);
        var e = C.getComputedStyle(u);
        n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 12 === t(u.offsetWidth / 3), ie.removeChild(s), u = null;
      }
    }

    function t(e) {
      return Math.round(parseFloat(e));
    }

    var n,
        r,
        i,
        o,
        a,
        s = E.createElement("div"),
        u = E.createElement("div");
    u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(y, {
      boxSizingReliable: function boxSizingReliable() {
        return e(), r;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        return e(), o;
      },
      pixelPosition: function pixelPosition() {
        return e(), n;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return e(), a;
      },
      scrollboxSize: function scrollboxSize() {
        return e(), i;
      }
    }));
  }();
  var Ue = ["Webkit", "Moz", "ms"],
      Xe = E.createElement("div").style,
      Ve = {};

  function Ge(e) {
    var t = k.cssProps[e] || Ve[e];
    return t || (e in Xe ? e : Ve[e] = function (e) {
      var t = e[0].toUpperCase() + e.slice(1),
          n = Ue.length;

      while (n--) {
        if ((e = Ue[n] + t) in Xe) return e;
      }
    }(e) || e);
  }

  var Ye = /^(none|table(?!-c[ea]).+)/,
      Qe = /^--/,
      Je = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ke = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function Ze(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }

  function et(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
        s = 0,
        u = 0;
    if (n === (r ? "border" : "content")) return 0;

    for (; a < 4; a += 2) {
      "margin" === n && (u += k.css(e, n + re[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + re[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + re[a] + "Width", !0, i))) : (u += k.css(e, "padding" + re[a], !0, i), "padding" !== n ? u += k.css(e, "border" + re[a] + "Width", !0, i) : s += k.css(e, "border" + re[a] + "Width", !0, i));
    }

    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u;
  }

  function tt(e, t, n) {
    var r = Fe(e),
        i = (!y.boxSizingReliable() || n) && "border-box" === k.css(e, "boxSizing", !1, r),
        o = i,
        a = _e(e, t, r),
        s = "offset" + t[0].toUpperCase() + t.slice(1);

    if ($e.test(a)) {
      if (!n) return a;
      a = "auto";
    }

    return (!y.boxSizingReliable() && i || "auto" === a || !parseFloat(a) && "inline" === k.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === k.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + et(e, t, n || (i ? "border" : "content"), o, r, a) + "px";
  }

  function nt(e, t, n, r, i) {
    return new nt.prototype.init(e, t, n, r, i);
  }

  k.extend({
    cssHooks: {
      opacity: {
        get: function get(e, t) {
          if (t) {
            var n = _e(e, "opacity");

            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function style(e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
            o,
            a,
            s = V(t),
            u = Qe.test(t),
            l = e.style;
        if (u || (t = Ge(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = le(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n));
      }
    },
    css: function css(e, t, n, r) {
      var i,
          o,
          a,
          s = V(t);
      return Qe.test(t) || (t = Ge(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = _e(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i;
    }
  }), k.each(["height", "width"], function (e, u) {
    k.cssHooks[u] = {
      get: function get(e, t, n) {
        if (t) return !Ye.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? tt(e, u, n) : ue(e, Je, function () {
          return tt(e, u, n);
        });
      },
      set: function set(e, t, n) {
        var r,
            i = Fe(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === k.css(e, "boxSizing", !1, i),
            s = n ? et(e, u, n, a, i) : 0;
        return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - et(e, u, "border", !1, i) - .5)), s && (r = ne.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = k.css(e, u)), Ze(0, t, s);
      }
    };
  }), k.cssHooks.marginLeft = ze(y.reliableMarginLeft, function (e, t) {
    if (t) return (parseFloat(_e(e, "marginLeft")) || e.getBoundingClientRect().left - ue(e, {
      marginLeft: 0
    }, function () {
      return e.getBoundingClientRect().left;
    })) + "px";
  }), k.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (i, o) {
    k.cssHooks[i + o] = {
      expand: function expand(e) {
        for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) {
          n[i + re[t] + o] = r[t] || r[t - 2] || r[0];
        }

        return n;
      }
    }, "margin" !== i && (k.cssHooks[i + o].set = Ze);
  }), k.fn.extend({
    css: function css(e, t) {
      return _(this, function (e, t, n) {
        var r,
            i,
            o = {},
            a = 0;

        if (Array.isArray(t)) {
          for (r = Fe(e), i = t.length; a < i; a++) {
            o[t[a]] = k.css(e, t[a], !1, r);
          }

          return o;
        }

        return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
      }, e, t, 1 < arguments.length);
    }
  }), ((k.Tween = nt).prototype = {
    constructor: nt,
    init: function init(e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
    },
    cur: function cur() {
      var e = nt.propHooks[this.prop];
      return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
    },
    run: function run(e) {
      var t,
          n = nt.propHooks[this.prop];
      return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : nt.propHooks._default.set(this), this;
    }
  }).init.prototype = nt.prototype, (nt.propHooks = {
    _default: {
      get: function get(e) {
        var t;
        return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
      },
      set: function set(e) {
        k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !k.cssHooks[e.prop] && null == e.elem.style[Ge(e.prop)] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
      }
    }
  }).scrollTop = nt.propHooks.scrollLeft = {
    set: function set(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    }
  }, k.easing = {
    linear: function linear(e) {
      return e;
    },
    swing: function swing(e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    },
    _default: "swing"
  }, k.fx = nt.prototype.init, k.fx.step = {};
  var rt,
      it,
      ot,
      at,
      st = /^(?:toggle|show|hide)$/,
      ut = /queueHooks$/;

  function lt() {
    it && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(lt) : C.setTimeout(lt, k.fx.interval), k.fx.tick());
  }

  function ct() {
    return C.setTimeout(function () {
      rt = void 0;
    }), rt = Date.now();
  }

  function ft(e, t) {
    var n,
        r = 0,
        i = {
      height: e
    };

    for (t = t ? 1 : 0; r < 4; r += 2 - t) {
      i["margin" + (n = re[r])] = i["padding" + n] = e;
    }

    return t && (i.opacity = i.width = e), i;
  }

  function pt(e, t, n) {
    for (var r, i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]), o = 0, a = i.length; o < a; o++) {
      if (r = i[o].call(n, t, e)) return r;
    }
  }

  function dt(o, e, t) {
    var n,
        a,
        r = 0,
        i = dt.prefilters.length,
        s = k.Deferred().always(function () {
      delete u.elem;
    }),
        u = function u() {
      if (a) return !1;

      for (var e = rt || ct(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) {
        l.tweens[r].run(n);
      }

      return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
    },
        l = s.promise({
      elem: o,
      props: k.extend({}, e),
      opts: k.extend(!0, {
        specialEasing: {},
        easing: k.easing._default
      }, t),
      originalProperties: e,
      originalOptions: t,
      startTime: rt || ct(),
      duration: t.duration,
      tweens: [],
      createTween: function createTween(e, t) {
        var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
        return l.tweens.push(n), n;
      },
      stop: function stop(e) {
        var t = 0,
            n = e ? l.tweens.length : 0;
        if (a) return this;

        for (a = !0; t < n; t++) {
          l.tweens[t].run(1);
        }

        return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
      }
    }),
        c = l.props;

    for (!function (e, t) {
      var n, r, i, o, a;

      for (n in e) {
        if (i = t[r = V(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
          (n in e) || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
      }
    }(c, l.opts.specialEasing); r < i; r++) {
      if (n = dt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    }

    return k.map(c, pt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
      elem: o,
      anim: l,
      queue: l.opts.queue
    })), l;
  }

  k.Animation = k.extend(dt, {
    tweeners: {
      "*": [function (e, t) {
        var n = this.createTween(e, t);
        return le(n.elem, e, ne.exec(t), n), n;
      }]
    },
    tweener: function tweener(e, t) {
      m(e) ? (t = e, e = ["*"]) : e = e.match(R);

      for (var n, r = 0, i = e.length; r < i; r++) {
        n = e[r], dt.tweeners[n] = dt.tweeners[n] || [], dt.tweeners[n].unshift(t);
      }
    },
    prefilters: [function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && se(e),
          v = Q.get(e, "fxshow");

      for (r in n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
        a.unqueued || s();
      }), a.unqueued++, p.always(function () {
        p.always(function () {
          a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
        });
      })), t) {
        if (i = t[r], st.test(i)) {
          if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
            if ("show" !== i || !v || void 0 === v[r]) continue;
            g = !0;
          }

          d[r] = v && v[r] || k.style(e, r);
        }
      }

      if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Q.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
        h.display = l;
      }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
      })), u = !1, d) {
        u || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(e, "fxshow", {
          display: l
        }), o && (v.hidden = !g), g && fe([e], !0), p.done(function () {
          for (r in g || fe([e]), Q.remove(e, "fxshow"), d) {
            k.style(e, r, d[r]);
          }
        })), u = pt(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0));
      }
    }],
    prefilter: function prefilter(e, t) {
      t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
    }
  }), k.speed = function (e, t, n) {
    var r = e && "object" == _typeof(e) ? k.extend({}, e) : {
      complete: n || !n && t || m(e) && e,
      duration: e,
      easing: n && t || t && !m(t) && t
    };
    return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
    }, r;
  }, k.fn.extend({
    fadeTo: function fadeTo(e, t, n, r) {
      return this.filter(se).css("opacity", 0).show().end().animate({
        opacity: t
      }, e, n, r);
    },
    animate: function animate(t, e, n, r) {
      var i = k.isEmptyObject(t),
          o = k.speed(e, n, r),
          a = function a() {
        var e = dt(this, k.extend({}, t), o);
        (i || Q.get(this, "finish")) && e.stop(!0);
      };

      return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function stop(i, e, o) {
      var a = function a(e) {
        var t = e.stop;
        delete e.stop, t(o);
      };

      return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
        var e = !0,
            t = null != i && i + "queueHooks",
            n = k.timers,
            r = Q.get(this);
        if (t) r[t] && r[t].stop && a(r[t]);else for (t in r) {
          r[t] && r[t].stop && ut.test(t) && a(r[t]);
        }

        for (t = n.length; t--;) {
          n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
        }

        !e && o || k.dequeue(this, i);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var e,
            t = Q.get(this),
            n = t[a + "queue"],
            r = t[a + "queueHooks"],
            i = k.timers,
            o = n ? n.length : 0;

        for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) {
          i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
        }

        for (e = 0; e < o; e++) {
          n[e] && n[e].finish && n[e].finish.call(this);
        }

        delete t.finish;
      });
    }
  }), k.each(["toggle", "show", "hide"], function (e, r) {
    var i = k.fn[r];

    k.fn[r] = function (e, t, n) {
      return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ft(r, !0), e, t, n);
    };
  }), k.each({
    slideDown: ft("show"),
    slideUp: ft("hide"),
    slideToggle: ft("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (e, r) {
    k.fn[e] = function (e, t, n) {
      return this.animate(r, e, t, n);
    };
  }), k.timers = [], k.fx.tick = function () {
    var e,
        t = 0,
        n = k.timers;

    for (rt = Date.now(); t < n.length; t++) {
      (e = n[t])() || n[t] !== e || n.splice(t--, 1);
    }

    n.length || k.fx.stop(), rt = void 0;
  }, k.fx.timer = function (e) {
    k.timers.push(e), k.fx.start();
  }, k.fx.interval = 13, k.fx.start = function () {
    it || (it = !0, lt());
  }, k.fx.stop = function () {
    it = null;
  }, k.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, k.fn.delay = function (r, e) {
    return r = k.fx && k.fx.speeds[r] || r, e = e || "fx", this.queue(e, function (e, t) {
      var n = C.setTimeout(e, r);

      t.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ot = E.createElement("input"), at = E.createElement("select").appendChild(E.createElement("option")), ot.type = "checkbox", y.checkOn = "" !== ot.value, y.optSelected = at.selected, (ot = E.createElement("input")).value = "t", ot.type = "radio", y.radioValue = "t" === ot.value;
  var ht,
      gt = k.expr.attrHandle;
  k.fn.extend({
    attr: function attr(e, t) {
      return _(this, k.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function removeAttr(e) {
      return this.each(function () {
        k.removeAttr(this, e);
      });
    }
  }), k.extend({
    attr: function attr(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ht : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r);
    },
    attrHooks: {
      type: {
        set: function set(e, t) {
          if (!y.radioValue && "radio" === t && A(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t;
          }
        }
      }
    },
    removeAttr: function removeAttr(e, t) {
      var n,
          r = 0,
          i = t && t.match(R);
      if (i && 1 === e.nodeType) while (n = i[r++]) {
        e.removeAttribute(n);
      }
    }
  }), ht = {
    set: function set(e, t, n) {
      return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
    }
  }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var a = gt[t] || k.find.attr;

    gt[t] = function (e, t, n) {
      var r,
          i,
          o = t.toLowerCase();
      return n || (i = gt[o], gt[o] = r, r = null != a(e, t, n) ? o : null, gt[o] = i), r;
    };
  });
  var vt = /^(?:input|select|textarea|button)$/i,
      yt = /^(?:a|area)$/i;

  function mt(e) {
    return (e.match(R) || []).join(" ");
  }

  function xt(e) {
    return e.getAttribute && e.getAttribute("class") || "";
  }

  function bt(e) {
    return Array.isArray(e) ? e : "string" == typeof e && e.match(R) || [];
  }

  k.fn.extend({
    prop: function prop(e, t) {
      return _(this, k.prop, e, t, 1 < arguments.length);
    },
    removeProp: function removeProp(e) {
      return this.each(function () {
        delete this[k.propFix[e] || e];
      });
    }
  }), k.extend({
    prop: function prop(e, t, n) {
      var r,
          i,
          o = e.nodeType;
      if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
    },
    propHooks: {
      tabIndex: {
        get: function get(e) {
          var t = k.find.attr(e, "tabindex");
          return t ? parseInt(t, 10) : vt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), y.optSelected || (k.propHooks.selected = {
    get: function get(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null;
    },
    set: function set(e) {
      var t = e.parentNode;
      t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
    }
  }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    k.propFix[this.toLowerCase()] = this;
  }), k.fn.extend({
    addClass: function addClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).addClass(t.call(this, e, xt(this)));
      });
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    removeClass: function removeClass(t) {
      var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
      if (m(t)) return this.each(function (e) {
        k(this).removeClass(t.call(this, e, xt(this)));
      });
      if (!arguments.length) return this.attr("class", "");
      if ((e = bt(t)).length) while (n = this[u++]) {
        if (i = xt(n), r = 1 === n.nodeType && " " + mt(i) + " ") {
          a = 0;

          while (o = e[a++]) {
            while (-1 < r.indexOf(" " + o + " ")) {
              r = r.replace(" " + o + " ", " ");
            }
          }

          i !== (s = mt(r)) && n.setAttribute("class", s);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(i, t) {
      var o = _typeof(i),
          a = "string" === o || Array.isArray(i);

      return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
        k(this).toggleClass(i.call(this, e, xt(this), t), t);
      }) : this.each(function () {
        var e, t, n, r;

        if (a) {
          t = 0, n = k(this), r = bt(i);

          while (e = r[t++]) {
            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
          }
        } else void 0 !== i && "boolean" !== o || ((e = xt(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Q.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(e) {
      var t,
          n,
          r = 0;
      t = " " + e + " ";

      while (n = this[r++]) {
        if (1 === n.nodeType && -1 < (" " + mt(xt(n)) + " ").indexOf(t)) return !0;
      }

      return !1;
    }
  });
  var wt = /\r/g;
  k.fn.extend({
    val: function val(n) {
      var r,
          e,
          i,
          t = this[0];
      return arguments.length ? (i = m(n), this.each(function (e) {
        var t;
        1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
          return null == e ? "" : e + "";
        })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
      })) : t ? (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(wt, "") : null == e ? "" : e : void 0;
    }
  }), k.extend({
    valHooks: {
      option: {
        get: function get(e) {
          var t = k.find.attr(e, "value");
          return null != t ? t : mt(k.text(e));
        }
      },
      select: {
        get: function get(e) {
          var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;

          for (r = o < 0 ? u : a ? o : 0; r < u; r++) {
            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (t = k(n).val(), a) return t;
              s.push(t);
            }
          }

          return s;
        },
        set: function set(e, t) {
          var n,
              r,
              i = e.options,
              o = k.makeArray(t),
              a = i.length;

          while (a--) {
            ((r = i[a]).selected = -1 < k.inArray(k.valHooks.option.get(r), o)) && (n = !0);
          }

          return n || (e.selectedIndex = -1), o;
        }
      }
    }
  }), k.each(["radio", "checkbox"], function () {
    k.valHooks[this] = {
      set: function set(e, t) {
        if (Array.isArray(t)) return e.checked = -1 < k.inArray(k(e).val(), t);
      }
    }, y.checkOn || (k.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), y.focusin = "onfocusin" in C;

  var Tt = /^(?:focusinfocus|focusoutblur)$/,
      Ct = function Ct(e) {
    e.stopPropagation();
  };

  k.extend(k.event, {
    trigger: function trigger(e, t, n, r) {
      var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p = [n || E],
          d = v.call(e, "type") ? e.type : e,
          h = v.call(e, "namespace") ? e.namespace.split(".") : [];

      if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(d + k.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[k.expando] ? e : new k.Event(d, "object" == _typeof(e) && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, Tt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) {
            p.push(o), a = o;
          }

          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }

        i = 0;

        while ((o = p[i++]) && !e.isPropagationStopped()) {
          f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && G(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
        }

        return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !G(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Ct), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Ct), k.event.triggered = void 0, a && (n[u] = a)), e.result;
      }
    },
    simulate: function simulate(e, t, n) {
      var r = k.extend(new k.Event(), n, {
        type: e,
        isSimulated: !0
      });
      k.event.trigger(r, null, t);
    }
  }), k.fn.extend({
    trigger: function trigger(e, t) {
      return this.each(function () {
        k.event.trigger(e, t, this);
      });
    },
    triggerHandler: function triggerHandler(e, t) {
      var n = this[0];
      if (n) return k.event.trigger(e, t, n, !0);
    }
  }), y.focusin || k.each({
    focus: "focusin",
    blur: "focusout"
  }, function (n, r) {
    var i = function i(e) {
      k.event.simulate(r, e.target, k.event.fix(e));
    };

    k.event.special[r] = {
      setup: function setup() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r);
        t || e.addEventListener(n, i, !0), Q.access(e, r, (t || 0) + 1);
      },
      teardown: function teardown() {
        var e = this.ownerDocument || this,
            t = Q.access(e, r) - 1;
        t ? Q.access(e, r, t) : (e.removeEventListener(n, i, !0), Q.remove(e, r));
      }
    };
  });
  var Et = C.location,
      kt = Date.now(),
      St = /\?/;

  k.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;

    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }

    return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t;
  };

  var Nt = /\[\]$/,
      At = /\r?\n/g,
      Dt = /^(?:submit|button|image|reset|file)$/i,
      jt = /^(?:input|select|textarea|keygen)/i;

  function qt(n, e, r, i) {
    var t;
    if (Array.isArray(e)) k.each(e, function (e, t) {
      r || Nt.test(n) ? i(n, t) : qt(n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, r, i);
    });else if (r || "object" !== w(e)) i(n, e);else for (t in e) {
      qt(n + "[" + t + "]", e[t], r, i);
    }
  }

  k.param = function (e, t) {
    var n,
        r = [],
        i = function i(e, t) {
      var n = m(t) ? t() : t;
      r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
    };

    if (null == e) return "";
    if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
      i(this.name, this.value);
    });else for (n in e) {
      qt(n, e[n], t, i);
    }
    return r.join("&");
  }, k.fn.extend({
    serialize: function serialize() {
      return k.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var e = k.prop(this, "elements");
        return e ? k.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;
        return this.name && !k(this).is(":disabled") && jt.test(this.nodeName) && !Dt.test(e) && (this.checked || !pe.test(e));
      }).map(function (e, t) {
        var n = k(this).val();
        return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
          return {
            name: t.name,
            value: e.replace(At, "\r\n")
          };
        }) : {
          name: t.name,
          value: n.replace(At, "\r\n")
        };
      }).get();
    }
  });
  var Lt = /%20/g,
      Ht = /#.*$/,
      Ot = /([?&])_=[^&]*/,
      Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Rt = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      It = {},
      Wt = {},
      $t = "*/".concat("*"),
      Ft = E.createElement("a");

  function Bt(o) {
    return function (e, t) {
      "string" != typeof e && (t = e, e = "*");
      var n,
          r = 0,
          i = e.toLowerCase().match(R) || [];
      if (m(t)) while (n = i[r++]) {
        "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
      }
    };
  }

  function _t(t, i, o, a) {
    var s = {},
        u = t === Wt;

    function l(e) {
      var r;
      return s[e] = !0, k.each(t[e] || [], function (e, t) {
        var n = t(i, o, a);
        return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1);
      }), r;
    }

    return l(i.dataTypes[0]) || !s["*"] && l("*");
  }

  function zt(e, t) {
    var n,
        r,
        i = k.ajaxSettings.flatOptions || {};

    for (n in t) {
      void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    }

    return r && k.extend(!0, e, r), e;
  }

  Ft.href = Et.href, k.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Et.href,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": $t,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": k.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(e, t) {
      return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e);
    },
    ajaxPrefilter: Bt(It),
    ajaxTransport: Bt(Wt),
    ajax: function ajax(e, t) {
      "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
      var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = k.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? k(y) : k.event,
          x = k.Deferred(),
          b = k.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(e) {
          var t;

          if (h) {
            if (!n) {
              n = {};

              while (t = Pt.exec(p)) {
                n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
            }

            t = n[e.toLowerCase() + " "];
          }

          return null == t ? null : t.join(", ");
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return h ? p : null;
        },
        setRequestHeader: function setRequestHeader(e, t) {
          return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this;
        },
        overrideMimeType: function overrideMimeType(e) {
          return null == h && (v.mimeType = e), this;
        },
        statusCode: function statusCode(e) {
          var t;
          if (e) if (h) T.always(e[T.status]);else for (t in e) {
            w[t] = [w[t], e[t]];
          }
          return this;
        },
        abort: function abort(e) {
          var t = e || u;
          return c && c.abort(t), l(0, t), this;
        }
      };

      if (x.promise(T), v.url = ((e || v.url || Et.href) + "").replace(Mt, Et.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(R) || [""], null == v.crossDomain) {
        r = E.createElement("a");

        try {
          r.href = v.url, r.href = r.href, v.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
        } catch (e) {
          v.crossDomain = !0;
        }
      }

      if (v.data && v.processData && "string" != typeof v.data && (v.data = k.param(v.data, v.traditional)), _t(It, v, t, T), h) return T;

      for (i in (g = k.event && v.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Rt.test(v.type), f = v.url.replace(Ht, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Lt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (St.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Ot, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + kt++ + o), v.url = f + o), v.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : v.accepts["*"]), v.headers) {
        T.setRequestHeader(i, v.headers[i]);
      }

      if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();

      if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = _t(Wt, v, t, T)) {
        if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
        v.async && 0 < v.timeout && (d = C.setTimeout(function () {
          T.abort("timeout");
        }, v.timeout));

        try {
          h = !1, c.send(a, l);
        } catch (e) {
          if (h) throw e;
          l(-1, e);
        }
      } else l(-1, "No Transport");

      function l(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = t;
        h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function (e, t, n) {
          var r,
              i,
              o,
              a,
              s = e.contents,
              u = e.dataTypes;

          while ("*" === u[0]) {
            u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
          }

          if (r) for (i in s) {
            if (s[i] && s[i].test(r)) {
              u.unshift(i);
              break;
            }
          }
          if (u[0] in n) o = u[0];else {
            for (i in n) {
              if (!u[0] || e.converters[i + " " + u[0]]) {
                o = i;
                break;
              }

              a || (a = i);
            }

            o = o || a;
          }
          if (o) return o !== u[0] && u.unshift(o), n[o];
        }(v, T, n)), s = function (e, t, n, r) {
          var i,
              o,
              a,
              s,
              u,
              l = {},
              c = e.dataTypes.slice();
          if (c[1]) for (a in e.converters) {
            l[a.toLowerCase()] = e.converters[a];
          }
          o = c.shift();

          while (o) {
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
              if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) {
                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                  !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                  break;
                }
              }
              if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
            }
          }

          return {
            state: "success",
            data: t
          };
        }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --k.active || k.event.trigger("ajaxStop")));
      }

      return T;
    },
    getJSON: function getJSON(e, t, n) {
      return k.get(e, t, n, "json");
    },
    getScript: function getScript(e, t) {
      return k.get(e, void 0, t, "script");
    }
  }), k.each(["get", "post"], function (e, i) {
    k[i] = function (e, t, n, r) {
      return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
        url: e,
        type: i,
        dataType: r,
        data: t,
        success: n
      }, k.isPlainObject(e) && e));
    };
  }), k._evalUrl = function (e, t) {
    return k.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(e) {
        k.globalEval(e, t);
      }
    });
  }, k.fn.extend({
    wrapAll: function wrapAll(e) {
      var t;
      return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        var e = this;

        while (e.firstElementChild) {
          e = e.firstElementChild;
        }

        return e;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(n) {
      return m(n) ? this.each(function (e) {
        k(this).wrapInner(n.call(this, e));
      }) : this.each(function () {
        var e = k(this),
            t = e.contents();
        t.length ? t.wrapAll(n) : e.append(n);
      });
    },
    wrap: function wrap(t) {
      var n = m(t);
      return this.each(function (e) {
        k(this).wrapAll(n ? t.call(this, e) : t);
      });
    },
    unwrap: function unwrap(e) {
      return this.parent(e).not("body").each(function () {
        k(this).replaceWith(this.childNodes);
      }), this;
    }
  }), k.expr.pseudos.hidden = function (e) {
    return !k.expr.pseudos.visible(e);
  }, k.expr.pseudos.visible = function (e) {
    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
  }, k.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (e) {}
  };
  var Ut = {
    0: 200,
    1223: 204
  },
      Xt = k.ajaxSettings.xhr();
  y.cors = !!Xt && "withCredentials" in Xt, y.ajax = Xt = !!Xt, k.ajaxTransport(function (i) {
    var _o, a;

    if (y.cors || Xt && !i.crossDomain) return {
      send: function send(e, t) {
        var n,
            r = i.xhr();
        if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) {
          r[n] = i.xhrFields[n];
        }

        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) {
          r.setRequestHeader(n, e[n]);
        }

        _o = function o(e) {
          return function () {
            _o && (_o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Ut[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
              binary: r.response
            } : {
              text: r.responseText
            }, r.getAllResponseHeaders()));
          };
        }, r.onload = _o(), a = r.onerror = r.ontimeout = _o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
          4 === r.readyState && C.setTimeout(function () {
            _o && a();
          });
        }, _o = _o("abort");

        try {
          r.send(i.hasContent && i.data || null);
        } catch (e) {
          if (_o) throw e;
        }
      },
      abort: function abort() {
        _o && _o();
      }
    };
  }), k.ajaxPrefilter(function (e) {
    e.crossDomain && (e.contents.script = !1);
  }), k.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(e) {
        return k.globalEval(e), e;
      }
    }
  }), k.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), k.ajaxTransport("script", function (n) {
    var r, _i;

    if (n.crossDomain || n.scriptAttrs) return {
      send: function send(e, t) {
        r = k("<script>").attr(n.scriptAttrs || {}).prop({
          charset: n.scriptCharset,
          src: n.url
        }).on("load error", _i = function i(e) {
          r.remove(), _i = null, e && t("error" === e.type ? 404 : 200, e.type);
        }), E.head.appendChild(r[0]);
      },
      abort: function abort() {
        _i && _i();
      }
    };
  });
  var Vt,
      Gt = [],
      Yt = /(=)\?(?=&|$)|\?\?/;
  k.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var e = Gt.pop() || k.expando + "_" + kt++;
      return this[e] = !0, e;
    }
  }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
    var r,
        i,
        o,
        a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
    if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
      return o || k.error(r + " was not called"), o[0];
    }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
      o = arguments;
    }, n.always(function () {
      void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), o && m(i) && i(o[0]), o = i = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Vt = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Vt.childNodes.length), k.parseHTML = function (e, t, n) {
    return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = D.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes)));
    var r, i, o;
  }, k.fn.load = function (e, t, n) {
    var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
    return -1 < s && (r = mt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < a.length && k.ajax({
      url: e,
      type: i || "GET",
      dataType: "html",
      data: t
    }).done(function (e) {
      o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
    }).always(n && function (e, t) {
      a.each(function () {
        n.apply(this, o || [e.responseText, t, e]);
      });
    }), this;
  }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    k.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), k.expr.pseudos.animated = function (t) {
    return k.grep(k.timers, function (e) {
      return t === e.elem;
    }).length;
  }, k.offset = {
    setOffset: function setOffset(e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          u,
          l = k.css(e, "position"),
          c = k(e),
          f = {};
      "static" === l && (e.style.position = "relative"), s = c.offset(), o = k.css(e, "top"), u = k.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
    }
  }, k.fn.extend({
    offset: function offset(t) {
      if (arguments.length) return void 0 === t ? this : this.each(function (e) {
        k.offset.setOffset(this, t, e);
      });
      var e,
          n,
          r = this[0];
      return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
        top: e.top + n.pageYOffset,
        left: e.left + n.pageXOffset
      }) : {
        top: 0,
        left: 0
      } : void 0;
    },
    position: function position() {
      if (this[0]) {
        var e,
            t,
            n,
            r = this[0],
            i = {
          top: 0,
          left: 0
        };
        if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect();else {
          t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;

          while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) {
            e = e.parentNode;
          }

          e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0));
        }
        return {
          top: t.top - i.top - k.css(r, "marginTop", !0),
          left: t.left - i.left - k.css(r, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var e = this.offsetParent;

        while (e && "static" === k.css(e, "position")) {
          e = e.offsetParent;
        }

        return e || ie;
      });
    }
  }), k.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (t, i) {
    var o = "pageYOffset" === i;

    k.fn[t] = function (e) {
      return _(this, function (e, t, n) {
        var r;
        if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n;
      }, t, e, arguments.length);
    };
  }), k.each(["top", "left"], function (e, n) {
    k.cssHooks[n] = ze(y.pixelPosition, function (e, t) {
      if (t) return t = _e(e, n), $e.test(t) ? k(e).position()[n] + "px" : t;
    });
  }), k.each({
    Height: "height",
    Width: "width"
  }, function (a, s) {
    k.each({
      padding: "inner" + a,
      content: s,
      "": "outer" + a
    }, function (r, o) {
      k.fn[o] = function (e, t) {
        var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
        return _(this, function (e, t, n) {
          var r;
          return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
        }, s, n ? e : void 0, n);
      };
    });
  }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
    k.fn[n] = function (e, t) {
      return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
    };
  }), k.fn.extend({
    hover: function hover(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  }), k.fn.extend({
    bind: function bind(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function unbind(e, t) {
      return this.off(e, null, t);
    },
    delegate: function delegate(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function undelegate(e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  }), k.proxy = function (e, t) {
    var n, r, i;
    if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function i() {
      return e.apply(t || this, r.concat(s.call(arguments)));
    }).guid = e.guid = e.guid || k.guid++, i;
  }, k.holdReady = function (e) {
    e ? k.readyWait++ : k.ready(!0);
  }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = A, k.isFunction = m, k.isWindow = x, k.camelCase = V, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
    var t = k.type(e);
    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return k;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Qt = C.jQuery,
      Jt = C.$;
  return k.noConflict = function (e) {
    return C.$ === k && (C.$ = Jt), e && C.jQuery === k && (C.jQuery = Qt), k;
  }, e || (C.jQuery = C.$ = k), k;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ 0:
/*!***************************************************************************************************************!*\
  !*** multi ./resources/assets/js/jquery/jquery-3.4.1.min.js ./resources/assets/js/jquery-ui/jquery-ui.min.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\edupowerpublishing\resources\assets\js\jquery\jquery-3.4.1.min.js */"./resources/assets/js/jquery/jquery-3.4.1.min.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\edupowerpublishing\resources\assets\js\jquery-ui\jquery-ui.min.js */"./resources/assets/js/jquery-ui/jquery-ui.min.js");


/***/ })

/******/ });