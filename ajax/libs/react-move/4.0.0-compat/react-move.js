(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = global || self, factory(global.ReactMove = {}, global.React));
}(this, function (exports, React) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var printWarning = function() {};

  {
    var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};

    printWarning = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error(
                (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
                'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
              );
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning(
              (componentName || 'React class') + ': type specification of ' +
              location + ' `' + typeSpecName + '` is invalid; the type checker ' +
              'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
              'You may have forgotten to pass an argument to the type checker ' +
              'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
              'shape all require an argument).'
            );

          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            printWarning(
              'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
            );
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  var printWarning$1 = function() {};

  {
    printWarning$1 = function(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }

  function emptyFunctionThatReturnsNull() {
    return null;
  }

  var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),

      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker,
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;

    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;

        if (secret !== ReactPropTypesSecret_1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
              'Use `PropTypes.checkPropTypes()` to call them. ' +
              'Read more at http://fb.me/use-check-prop-types'
            );
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (
              !manualPropTypeCallCache[cacheKey] &&
              // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3
            ) {
              printWarning$1(
                'You are manually calling a React.PropTypes validation ' +
                'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
                'and will throw in the standalone `prop-types` package. ' +
                'You may be seeing this warning due to a third-party PropTypes ' +
                'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
              );
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }

      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);

      return chainedCheckType;
    }

    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);

          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }

    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        printWarning$1('Invalid argument supplied to oneOf, expected an instance of array.');
        return emptyFunctionThatReturnsNull;
      }

      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }

        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.');
        return emptyFunctionThatReturnsNull;
      }

      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning$1(
            'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
            'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
          );
          return emptyFunctionThatReturnsNull;
        }
      }

      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
            return null;
          }
        }

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }

    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }

    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError(
              'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
              '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
              '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
            );
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error) {
            return error;
          }
        }
        return null;
      }

      return createChainableTypeChecker(validate);
    }

    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }

          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }

          return true;
        default:
          return false;
      }
    }

    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }

      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }

    ReactPropTypes.checkPropTypes = checkPropTypes_1;
    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
      0xeac7;

    var isValidElement = function(object) {
      return typeof object === 'object' &&
        object !== null &&
        object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
  }
  });

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
      this.setState(state);
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
        prevProps,
        prevState
      );
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }

  // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.
  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;

  function polyfill(Component) {
    var prototype = Component.prototype;

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components');
    }

    if (
      typeof Component.getDerivedStateFromProps !== 'function' &&
      typeof prototype.getSnapshotBeforeUpdate !== 'function'
    ) {
      return Component;
    }

    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (
      foundWillMountName !== null ||
      foundWillReceivePropsName !== null ||
      foundWillUpdateName !== null
    ) {
      var componentName = Component.displayName || Component.name;
      var newApiName =
        typeof Component.getDerivedStateFromProps === 'function'
          ? 'getDerivedStateFromProps()'
          : 'getSnapshotBeforeUpdate()';

      throw Error(
        'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
          componentName +
          ' uses ' +
          newApiName +
          ' but also contains the following legacy lifecycles:' +
          (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
          (foundWillReceivePropsName !== null
            ? '\n  ' + foundWillReceivePropsName
            : '') +
          (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
          '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
          'https://fb.me/react-async-component-lifecycle-hooks'
      );
    }

    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }

    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error(
          'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
        );
      }

      prototype.componentWillUpdate = componentWillUpdate;

      var componentDidUpdate = prototype.componentDidUpdate;

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(
        prevProps,
        prevState,
        maybeSnapshot
      ) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag
          ? this.__reactInternalSnapshot
          : maybeSnapshot;

        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }

    return Component;
  }

  var frame = 0, // is an animation frame pending?
      timeout = 0, // is a timeout pending?
      interval = 0, // are any timers active?
      pokeDelay = 1000, // how frequently we check for clock skew
      taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = typeof performance === "object" && performance.now ? performance : Date,
      setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

  function now() {
    return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
  }

  function clearNow() {
    clockNow = 0;
  }

  function Timer() {
    this._call =
    this._time =
    this._next = null;
  }

  Timer.prototype = timer.prototype = {
    constructor: Timer,
    restart: function(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;
        else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };

  function timer(callback, delay, time) {
    var t = new Timer;
    t.restart(callback, delay, time);
    return t;
  }

  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead, e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
      t = t._next;
    }
    --frame;
  }

  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }

  function poke() {
    var now = clock.now(), delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }

  function nap() {
    var t0, t1 = taskHead, t2, time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
        t0 = t1, t1 = t1._next;
      } else {
        t2 = t1._next, t1._next = null;
        t1 = t0 ? t0._next = t2 : taskHead = t2;
      }
    }
    taskTail = t0;
    sleep(time);
  }

  function sleep(time) {
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout) timeout = clearTimeout(timeout);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }

  function timeout$1(callback, delay, time) {
    var t = new Timer;
    delay = delay == null ? 0 : +delay;
    t.restart(function(elapsed) {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }

  function interval$1(callback, delay, time) {
    var t = new Timer, total = delay;
    if (delay == null) return t.restart(callback, delay, time), t;
    delay = +delay, time = time == null ? now() : +time;
    t.restart(function tick(elapsed) {
      elapsed += total;
      t.restart(tick, total += delay, time);
      callback(elapsed);
    }, delay, time);
    return t;
  }

  var transitionId = 0;
  function getTransitionId() {
    return ++transitionId;
  }
  function extend(obj, props) {
    for (var i in props) {
      obj[i] = props[i];
    }
  }
  function once(func) {
    var called = false;
    return function transitionEvent() {
      if (!called) {
        called = true;
        func.call(this);
      }
    };
  }

  var linear = function linear(t) {
    return +t;
  };

  var timingDefaults = {
    delay: 0,
    duration: 250,
    ease: linear
  };

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  var Events = function Events(config) {
    var _this = this;

    _classCallCheck(this, Events);

    this.start = null;
    this.interrupt = null;
    this.end = null;

    if (config.events) {
      Object.keys(config.events).forEach(function (d) {
        if (typeof config.events[d] !== 'function') {
          throw new Error('Event handlers must be a function');
        } else {
          _this[d] = once(config.events[d]);
        }
      });
    }
  };

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } return target; }

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var BaseNode =
  /*#__PURE__*/
  function () {
    function BaseNode(state) {
      _classCallCheck$1(this, BaseNode);

      this.state = state || {};
    }

    _createClass(BaseNode, [{
      key: "transition",
      value: function transition(config) {
        if (Array.isArray(config)) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var item = _step.value;
              this.parse(item);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        } else {
          this.parse(config);
        }
      }
    }, {
      key: "isTransitioning",
      value: function isTransitioning() {
        return !!this.transitionData;
      }
    }, {
      key: "stopTransitions",
      value: function stopTransitions() {
        var transitions = this.transitionData;

        if (transitions) {
          Object.keys(transitions).forEach(function (t) {
            transitions[t].timer.stop();
          });
        }
      }
    }, {
      key: "setState",
      value: function setState(update) {
        if (typeof update === 'function') {
          extend(this.state, update(this.state));
        } else {
          extend(this.state, update);
        }
      }
    }, {
      key: "getInterpolator",
      value: function getInterpolator(begValue, endValue, attr, nameSpace) {
        throw new Error('You must implement getInterpolator.');
      }
    }, {
      key: "parse",
      value: function parse(config) {
        var _this = this;

        var clone = _objectSpread({}, config);

        var events = new Events(clone);

        if (clone.events) {
          delete clone.events;
        }

        var timing = _objectSpread({}, timingDefaults, {}, clone.timing || {}, {
          time: now()
        });

        if (clone.timing) {
          delete clone.timing;
        }

        Object.keys(clone).forEach(function (stateKey) {
          var tweens = [];
          var next = clone[stateKey];

          if (_typeof(next) === 'object' && Array.isArray(next) === false) {
            Object.keys(next).forEach(function (attr) {
              var val = next[attr];

              if (Array.isArray(val)) {
                if (val.length === 1) {
                  tweens.push(_this.getTween(attr, val[0], stateKey));
                } else {
                  _this.setState(function (state) {
                    var _objectSpread2, _ref;

                    return _ref = {}, _ref[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread2 = {}, _objectSpread2[attr] = val[0], _objectSpread2)), _ref;
                  });

                  tweens.push(_this.getTween(attr, val[1], stateKey));
                }
              } else if (typeof val === 'function') {
                var getNameSpacedCustomTween = function getNameSpacedCustomTween() {
                  var kapellmeisterNamespacedTween = function kapellmeisterNamespacedTween(t) {
                    _this.setState(function (state) {
                      var _objectSpread3, _ref2;

                      return _ref2 = {}, _ref2[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread3 = {}, _objectSpread3[attr] = val(t), _objectSpread3)), _ref2;
                    });
                  };

                  return kapellmeisterNamespacedTween;
                };

                tweens.push(getNameSpacedCustomTween);
              } else {
                _this.setState(function (state) {
                  var _objectSpread4, _ref3;

                  return _ref3 = {}, _ref3[stateKey] = _objectSpread({}, state[stateKey], (_objectSpread4 = {}, _objectSpread4[attr] = val, _objectSpread4)), _ref3;
                });

                tweens.push(_this.getTween(attr, val, stateKey));
              }
            });
          } else {
            if (Array.isArray(next)) {
              if (next.length === 1) {
                tweens.push(_this.getTween(stateKey, next[0], null));
              } else {
                var _this$setState;

                _this.setState((_this$setState = {}, _this$setState[stateKey] = next[0], _this$setState));

                tweens.push(_this.getTween(stateKey, next[1], null));
              }
            } else if (typeof next === 'function') {
              var getCustomTween = function getCustomTween() {
                var kapellmeisterTween = function kapellmeisterTween(t) {
                  var _this$setState2;

                  _this.setState((_this$setState2 = {}, _this$setState2[stateKey] = next(t), _this$setState2));
                };

                return kapellmeisterTween;
              };

              tweens.push(getCustomTween);
            } else {
              var _this$setState3;

              _this.setState((_this$setState3 = {}, _this$setState3[stateKey] = next, _this$setState3));

              tweens.push(_this.getTween(stateKey, next, null));
            }
          }

          _this.update({
            stateKey: stateKey,
            timing: timing,
            tweens: tweens,
            events: events,
            status: 0
          });
        });
      }
    }, {
      key: "getTween",
      value: function getTween(attr, endValue, nameSpace) {
        var _this2 = this;

        return function () {
          var begValue = nameSpace ? _this2.state[nameSpace][attr] : _this2.state[attr];

          if (begValue === endValue) {
            return null;
          }

          var i = _this2.getInterpolator(begValue, endValue, attr, nameSpace);

          var stateTween;

          if (nameSpace === null) {
            stateTween = function stateTween(t) {
              var _this2$setState;

              _this2.setState((_this2$setState = {}, _this2$setState[attr] = i(t), _this2$setState));
            };
          } else {
            stateTween = function stateTween(t) {
              _this2.setState(function (state) {
                var _objectSpread5, _ref4;

                return _ref4 = {}, _ref4[nameSpace] = _objectSpread({}, state[nameSpace], (_objectSpread5 = {}, _objectSpread5[attr] = i(t), _objectSpread5)), _ref4;
              });
            };
          }

          return stateTween;
        };
      }
    }, {
      key: "update",
      value: function update(transition) {
        if (!this.transitionData) {
          this.transitionData = {};
        }

        this.init(getTransitionId(), transition);
      }
    }, {
      key: "init",
      value: function init(id, transition) {
        var _this3 = this;

        var n = transition.tweens.length;
        var tweens = new Array(n);

        var queue = function queue(elapsed) {
          transition.status = 1;
          transition.timer.restart(start, transition.timing.delay, transition.timing.time);

          if (transition.timing.delay <= elapsed) {
            start(elapsed - transition.timing.delay);
          }
        };

        this.transitionData[id] = transition;
        transition.timer = timer(queue, 0, transition.timing.time);

        var start = function start(elapsed) {
          if (transition.status !== 1) return stop();

          for (var tid in _this3.transitionData) {
            var t = _this3.transitionData[tid];

            if (t.stateKey !== transition.stateKey) {
              continue;
            }

            if (t.status === 3) {
              return timeout$1(start);
            }

            if (t.status === 4) {
              t.status = 6;
              t.timer.stop();

              if (t.events.interrupt) {
                t.events.interrupt.call(_this3);
              }

              delete _this3.transitionData[tid];
            } else if (+tid < id) {
              t.status = 6;
              t.timer.stop();
              delete _this3.transitionData[tid];
            }
          }

          timeout$1(function () {
            if (transition.status === 3) {
              transition.status = 4;
              transition.timer.restart(tick, transition.timing.delay, transition.timing.time);
              tick(elapsed);
            }
          });
          transition.status = 2;

          if (transition.events.start) {
            transition.events.start.call(_this3);
          }

          if (transition.status !== 2) {
            return;
          }

          transition.status = 3;
          var j = -1;

          for (var i = 0; i < n; ++i) {
            var res = transition.tweens[i]();

            if (res) {
              tweens[++j] = res;
            }
          }

          tweens.length = j + 1;
        };

        var tick = function tick(elapsed) {
          var t = 1;

          if (elapsed < transition.timing.duration) {
            t = transition.timing.ease(elapsed / transition.timing.duration);
          } else {
            transition.timer.restart(stop);
            transition.status = 5;
          }

          var i = -1;

          while (++i < tweens.length) {
            tweens[i](t);
          }

          if (transition.status === 5) {
            if (transition.events.end) {
              transition.events.end.call(_this3);
            }

            stop();
          }
        };

        var stop = function stop() {
          transition.status = 6;
          transition.timer.stop();
          delete _this3.transitionData[id];

          for (var i in _this3.transitionData) {
            return;
          }

          delete _this3.transitionData;
        };
      }
    }]);

    return BaseNode;
  }();

  /* based on react-motion's mergeDiff (https://github.com/chenglou/react-motion) */
  function mergeKeys(currNodeKeys, currKeyIndex, nextNodeKeys, nextKeyIndex) {
    const allKeys = [];

    for (let i = 0; i < nextNodeKeys.length; i++) {
      allKeys[i] = nextNodeKeys[i];
    }

    for (let i = 0; i < currNodeKeys.length; i++) {
      if (nextKeyIndex[currNodeKeys[i]] === undefined) {
        allKeys.push(currNodeKeys[i]);
      }
    }

    return allKeys.sort((a, b) => {
      const nextOrderA = nextKeyIndex[a];
      const nextOrderB = nextKeyIndex[b];
      const currOrderA = currKeyIndex[a];
      const currOrderB = currKeyIndex[b];

      if (nextOrderA != null && nextOrderB != null) {
        return nextKeyIndex[a] - nextKeyIndex[b];
      } else if (currOrderA != null && currOrderB != null) {
        return currKeyIndex[a] - currKeyIndex[b];
      } else if (nextOrderA != null) {
        for (let i = 0; i < nextNodeKeys.length; i++) {
          const pivot = nextNodeKeys[i];

          if (!currKeyIndex[pivot]) {
            continue;
          }

          if (nextOrderA < nextKeyIndex[pivot] && currOrderB > currKeyIndex[pivot]) {
            return -1;
          } else if (nextOrderA > nextKeyIndex[pivot] && currOrderB < currKeyIndex[pivot]) {
            return 1;
          }
        }

        return 1;
      }

      for (let i = 0; i < nextNodeKeys.length; i++) {
        const pivot = nextNodeKeys[i];

        if (!currKeyIndex[pivot]) {
          continue;
        }

        if (nextOrderB < nextKeyIndex[pivot] && currOrderA > currKeyIndex[pivot]) {
          return 1;
        } else if (nextOrderB > nextKeyIndex[pivot] && currOrderA < currKeyIndex[pivot]) {
          return -1;
        }
      }

      return -1;
    });
  }

  const ENTER = 'ENTER';
  const UPDATE = 'UPDATE';
  const LEAVE = 'LEAVE';

  function createNodeGroup(getInterpolater, displayName = 'NodeGroup') {
    if (!getInterpolater || typeof getInterpolater !== 'function') {
      throw new Error('[react-move] getInterpolator function is required.');
    }

    class Node extends BaseNode {
      constructor(...args) {
        super(...args);

        defineProperty(this, "getInterpolator", getInterpolater);
      }

    }

    class NodeGroup extends React.Component {
      constructor(...args) {
        super(...args);

        defineProperty(this, "state", {
          nodeKeys: [],
          nodeHash: {},
          nodes: [],
          data: null
        });

        defineProperty(this, "animate", () => {
          const {
            nodeKeys,
            nodeHash
          } = this.state;

          if (this.unmounting) {
            return;
          }

          let pending = false;
          const nextNodeKeys = [];
          const length = nodeKeys.length;

          for (let i = 0; i < length; i++) {
            const k = nodeKeys[i];
            const n = nodeHash[k];
            const isTransitioning = n.isTransitioning();

            if (isTransitioning) {
              pending = true;
            }

            if (n.type === LEAVE && !isTransitioning) {
              delete nodeHash[k];
            } else {
              nextNodeKeys.push(k);
            }
          }

          if (!pending) {
            this.interval.stop();
          }

          this.setState(() => ({
            nodeKeys: nextNodeKeys,
            nodes: nextNodeKeys.map(key => {
              return nodeHash[key];
            })
          }));
        });

        defineProperty(this, "interval", null);

        defineProperty(this, "unmounting", false);
      }

      static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.data) {
          const {
            data,
            keyAccessor,
            start,
            enter,
            update,
            leave
          } = nextProps;
          const {
            nodeKeys,
            nodeHash
          } = prevState;
          const keyIndex = {};

          for (let i = 0; i < nodeKeys.length; i++) {
            keyIndex[nodeKeys[i]] = i;
          }

          const nextKeyIndex = {};
          const nextNodeKeys = [];

          for (let i = 0; i < data.length; i++) {
            const d = data[i];
            const k = keyAccessor(d, i);
            nextKeyIndex[k] = i;
            nextNodeKeys.push(k);

            if (keyIndex[k] === undefined) {
              const node = new Node();
              node.key = k;
              node.data = d;
              node.type = ENTER;
              nodeHash[k] = node;
            }
          }

          for (let i = 0; i < nodeKeys.length; i++) {
            const k = nodeKeys[i];
            const n = nodeHash[k];

            if (nextKeyIndex[k] !== undefined) {
              n.data = data[nextKeyIndex[k]];
              n.type = UPDATE;
            } else {
              n.type = LEAVE;
            }
          }

          const mergedNodeKeys = mergeKeys(nodeKeys, keyIndex, nextNodeKeys, nextKeyIndex);

          for (let i = 0; i < mergedNodeKeys.length; i++) {
            const k = mergedNodeKeys[i];
            const n = nodeHash[k];
            const d = n.data;

            if (n.type === ENTER) {
              n.setState(start(d, nextKeyIndex[k]));
              n.transition(enter(d, nextKeyIndex[k]));
            } else if (n.type === LEAVE) {
              n.transition(leave(d, keyIndex[k]));
            } else {
              n.transition(update(d, nextKeyIndex[k]));
            }
          }

          return {
            data,
            nodes: mergedNodeKeys.map(key => {
              return nodeHash[key];
            }),
            nodeHash,
            nodeKeys: mergedNodeKeys
          };
        }

        return null;
      }

      componentDidMount() {
        this.startInterval();
      }

      componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data && !this.unmounting) {
          this.startInterval();
        }
      }

      startInterval() {
        if (!this.interval) {
          this.interval = interval$1(this.animate);
        } else {
          this.interval.restart(this.animate);
        }
      }

      componentWillUnmount() {
        const {
          nodeKeys,
          nodeHash
        } = this.state;
        this.unmounting = true;

        if (this.interval) {
          this.interval.stop();
        }

        nodeKeys.forEach(key => {
          nodeHash[key].stopTransitions();
        });
      }

      render() {
        const renderedChildren = this.props.children(this.state.nodes);
        return renderedChildren && React__default.Children.only(renderedChildren);
      }

    }

    defineProperty(NodeGroup, "displayName", displayName);

    defineProperty(NodeGroup, "defaultProps", {
      enter: () => {},
      update: () => {},
      leave: () => {}
    });

    NodeGroup.propTypes = {
      data: propTypes.array.isRequired,
      keyAccessor: propTypes.func.isRequired,
      start: propTypes.func.isRequired,
      enter: propTypes.func,
      update: propTypes.func,
      leave: propTypes.func,
      children: propTypes.func.isRequired
    };
    polyfill(NodeGroup);
    return NodeGroup;
  }

  const keyAccessor = () => '$$key$$';

  function createAnimate(getInterpolater, displayName = 'Animate') {
    var _class, _temp;

    const NodeGroup = createNodeGroup(getInterpolater, `${displayName}(NodeGroup)`);
    return _temp = _class = class Animate extends React.Component {
      render() {
        const {
          show,
          start,
          enter,
          update,
          leave,
          children
        } = this.props;
        const data = typeof start === 'function' ? start() : start;
        return React__default.createElement(NodeGroup, {
          data: show ? [data] : [],
          start: () => data,
          keyAccessor: keyAccessor,
          enter: typeof enter === 'function' ? enter : () => enter,
          update: typeof update === 'function' ? update : () => update,
          leave: typeof leave === 'function' ? leave : () => leave
        }, nodes => {
          if (!nodes[0]) {
            return null;
          }

          const renderedChildren = children(nodes[0].state);
          return renderedChildren && React__default.Children.only(renderedChildren);
        });
      }

    }, defineProperty(_class, "displayName", displayName), defineProperty(_class, "propTypes", {
      show: propTypes.bool.isRequired,
      start: propTypes.oneOfType([propTypes.func, propTypes.object]).isRequired,
      enter: propTypes.oneOfType([propTypes.func, propTypes.array, propTypes.object]),
      update: propTypes.oneOfType([propTypes.func, propTypes.array, propTypes.object]),
      leave: propTypes.oneOfType([propTypes.func, propTypes.array, propTypes.object]),
      children: propTypes.func.isRequired
    }), defineProperty(_class, "defaultProps", {
      show: true
    }), _temp;
  }

  exports.createAnimate = createAnimate;
  exports.createNodeGroup = createNodeGroup;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
