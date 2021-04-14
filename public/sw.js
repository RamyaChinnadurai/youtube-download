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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "X2Wk");
/******/ })
/************************************************************************/
/******/ ({

/***/ "2KUI":
/***/ (function(module, exports, __webpack_require__) {

  "use strict";

  // @ts-ignore
  try {
      self['workbox:expiration:6.1.0'] && _();
  }
  catch (e) { }
  
  
  /***/ }),
  
  /***/ "5tLK":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // @ts-ignore
  try {
      self['workbox:routing:6.1.0'] && _();
  }
  catch (e) { }
  
  
  /***/ }),
  
  /***/ "Bxln":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // @ts-ignore
  try {
      self['workbox:core:6.1.0'] && _();
  }
  catch (e) { }
  
  
  /***/ }),
  
  /***/ "X2Wk":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  // ESM COMPAT FLAG
  __webpack_require__.r(__webpack_exports__);
  
  // EXTERNAL MODULE: ./node_modules/workbox-core/_version.js
  var _version = __webpack_require__("Bxln");
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/logger.js
  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  const logger = ( true ? null : undefined);
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messages.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  const messages = {
      'invalid-value': ({ paramName, validValueDescription, value }) => {
          if (!paramName || !validValueDescription) {
              throw new Error(`Unexpected input to 'invalid-value' error.`);
          }
          return `The '${paramName}' parameter was given a value with an ` +
              `unexpected value. ${validValueDescription} Received a value of ` +
              `${JSON.stringify(value)}.`;
      },
      'not-an-array': ({ moduleName, className, funcName, paramName }) => {
          if (!moduleName || !className || !funcName || !paramName) {
              throw new Error(`Unexpected input to 'not-an-array' error.`);
          }
          return `The parameter '${paramName}' passed into ` +
              `'${moduleName}.${className}.${funcName}()' must be an array.`;
      },
      'incorrect-type': ({ expectedType, paramName, moduleName, className, funcName }) => {
          if (!expectedType || !paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-type' error.`);
          }
          return `The parameter '${paramName}' passed into ` +
              `'${moduleName}.${className ? (className + '.') : ''}` +
              `${funcName}()' must be of type ${expectedType}.`;
      },
      'incorrect-class': ({ expectedClass, paramName, moduleName, className, funcName, isReturnValueProblem }) => {
          if (!expectedClass || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'incorrect-class' error.`);
          }
          if (isReturnValueProblem) {
              return `The return value from ` +
                  `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
                  `must be an instance of class ${expectedClass.name}.`;
          }
          return `The parameter '${paramName}' passed into ` +
              `'${moduleName}.${className ? (className + '.') : ''}${funcName}()' ` +
              `must be an instance of class ${expectedClass.name}.`;
      },
      'missing-a-method': ({ expectedMethod, paramName, moduleName, className, funcName }) => {
          if (!expectedMethod || !paramName || !moduleName || !className
              || !funcName) {
              throw new Error(`Unexpected input to 'missing-a-method' error.`);
          }
          return `${moduleName}.${className}.${funcName}() expected the ` +
              `'${paramName}' parameter to expose a '${expectedMethod}' method.`;
      },
      'add-to-cache-list-unexpected-type': ({ entry }) => {
          return `An unexpected entry was passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' The entry ` +
              `'${JSON.stringify(entry)}' isn't supported. You must supply an array of ` +
              `strings with one or more characters, objects with a url property or ` +
              `Request objects.`;
      },
      'add-to-cache-list-conflicting-entries': ({ firstEntry, secondEntry }) => {
          if (!firstEntry || !secondEntry) {
              throw new Error(`Unexpected input to ` +
                  `'add-to-cache-list-duplicate-entries' error.`);
          }
          return `Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${firstEntry._entryId} but different revision details. Workbox is ` +
              `unable to cache and version the asset correctly. Please remove one ` +
              `of the entries.`;
      },
      'plugin-error-request-will-fetch': ({ thrownError }) => {
          if (!thrownError) {
              throw new Error(`Unexpected input to ` +
                  `'plugin-error-request-will-fetch', error.`);
          }
          return `An error was thrown by a plugins 'requestWillFetch()' method. ` +
              `The thrown error message was: '${thrownError.message}'.`;
      },
      'invalid-cache-name': ({ cacheNameId, value }) => {
          if (!cacheNameId) {
              throw new Error(`Expected a 'cacheNameId' for error 'invalid-cache-name'`);
          }
          return `You must provide a name containing at least one character for ` +
              `setCacheDetails({${cacheNameId}: '...'}). Received a value of ` +
              `'${JSON.stringify(value)}'`;
      },
      'unregister-route-but-not-found-with-method': ({ method }) => {
          if (!method) {
              throw new Error(`Unexpected input to ` +
                  `'unregister-route-but-not-found-with-method' error.`);
          }
          return `The route you're trying to unregister was not  previously ` +
              `registered for the method type '${method}'.`;
      },
      'unregister-route-route-not-registered': () => {
          return `The route you're trying to unregister was not previously ` +
              `registered.`;
      },
      'queue-replay-failed': ({ name }) => {
          return `Replaying the background sync queue '${name}' failed.`;
      },
      'duplicate-queue-name': ({ name }) => {
          return `The Queue name '${name}' is already being used. ` +
              `All instances of backgroundSync.Queue must be given unique names.`;
      },
      'expired-test-without-max-age': ({ methodName, paramName }) => {
          return `The '${methodName}()' method can only be used when the ` +
              `'${paramName}' is used in the constructor.`;
      },
      'unsupported-route-type': ({ moduleName, className, funcName, paramName }) => {
          return `The supplied '${paramName}' parameter was an unsupported type. ` +
              `Please check the docs for ${moduleName}.${className}.${funcName} for ` +
              `valid input types.`;
      },
      'not-array-of-class': ({ value, expectedClass, moduleName, className, funcName, paramName }) => {
          return `The supplied '${paramName}' parameter must be an array of ` +
              `'${expectedClass}' objects. Received '${JSON.stringify(value)},'. ` +
              `Please check the call to ${moduleName}.${className}.${funcName}() ` +
              `to fix the issue.`;
      },
      'max-entries-or-age-required': ({ moduleName, className, funcName }) => {
          return `You must define either config.maxEntries or config.maxAgeSeconds` +
              `in ${moduleName}.${className}.${funcName}`;
      },
      'statuses-or-headers-required': ({ moduleName, className, funcName }) => {
          return `You must define either config.statuses or config.headers` +
              `in ${moduleName}.${className}.${funcName}`;
      },
      'invalid-string': ({ moduleName, funcName, paramName }) => {
          if (!paramName || !moduleName || !funcName) {
              throw new Error(`Unexpected input to 'invalid-string' error.`);
          }
          return `When using strings, the '${paramName}' parameter must start with ` +
              `'http' (for cross-origin matches) or '/' (for same-origin matches). ` +
              `Please see the docs for ${moduleName}.${funcName}() for ` +
              `more info.`;
      },
      'channel-name-required': () => {
          return `You must provide a channelName to construct a ` +
              `BroadcastCacheUpdate instance.`;
      },
      'invalid-responses-are-same-args': () => {
          return `The arguments passed into responsesAreSame() appear to be ` +
              `invalid. Please ensure valid Responses are used.`;
      },
      'expire-custom-caches-only': () => {
          return `You must provide a 'cacheName' property when using the ` +
              `expiration plugin with a runtime caching strategy.`;
      },
      'unit-must-be-bytes': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'unit-must-be-bytes' error.`);
          }
          return `The 'unit' portion of the Range header must be set to 'bytes'. ` +
              `The Range header provided was "${normalizedRangeHeader}"`;
      },
      'single-range-only': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'single-range-only' error.`);
          }
          return `Multiple ranges are not supported. Please use a  single start ` +
              `value, and optional end value. The Range header provided was ` +
              `"${normalizedRangeHeader}"`;
      },
      'invalid-range-values': ({ normalizedRangeHeader }) => {
          if (!normalizedRangeHeader) {
              throw new Error(`Unexpected input to 'invalid-range-values' error.`);
          }
          return `The Range header is missing both start and end values. At least ` +
              `one of those values is needed. The Range header provided was ` +
              `"${normalizedRangeHeader}"`;
      },
      'no-range-header': () => {
          return `No Range header was found in the Request provided.`;
      },
      'range-not-satisfiable': ({ size, start, end }) => {
          return `The start (${start}) and end (${end}) values in the Range are ` +
              `not satisfiable by the cached response, which is ${size} bytes.`;
      },
      'attempt-to-cache-non-get-request': ({ url, method }) => {
          return `Unable to cache '${url}' because it is a '${method}' request and ` +
              `only 'GET' requests can be cached.`;
      },
      'cache-put-with-no-response': ({ url }) => {
          return `There was an attempt to cache '${url}' but the response was not ` +
              `defined.`;
      },
      'no-response': ({ url, error }) => {
          let message = `The strategy could not generate a response for '${url}'.`;
          if (error) {
              message += ` The underlying error is ${error}.`;
          }
          return message;
      },
      'bad-precaching-response': ({ url, status }) => {
          return `The precaching request for '${url}' failed` +
              (status ? ` with an HTTP status of ${status}.` : `.`);
      },
      'non-precached-url': ({ url }) => {
          return `createHandlerBoundToURL('${url}') was called, but that URL is ` +
              `not precached. Please pass in a URL that is precached instead.`;
      },
      'add-to-cache-list-conflicting-integrities': ({ url }) => {
          return `Two of the entries passed to ` +
              `'workbox-precaching.PrecacheController.addToCacheList()' had the URL ` +
              `${url} with different integrity values. Please remove one of them.`;
      },
      'missing-precache-entry': ({ cacheName, url }) => {
          return `Unable to find a precached response in ${cacheName} for ${url}.`;
      },
      'cross-origin-copy-response': ({ origin }) => {
          return `workbox-core.copyResponse() can only be used with same-origin ` +
              `responses. It was passed a response with origin ${origin}.`;
      },
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/models/messages/messageGenerator.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  const fallback = (code, ...args) => {
      let msg = code;
      if (args.length > 0) {
          msg += ` :: ${JSON.stringify(args)}`;
      }
      return msg;
  };
  const generatorFunction = (code, details = {}) => {
      const message = messages[code];
      if (!message) {
          throw new Error(`Unable to find message for code '${code}'.`);
      }
      return message(details);
  };
  const messageGenerator = ( true) ?
      fallback : undefined;
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/WorkboxError.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Workbox errors should be thrown with this class.
   * This allows use to ensure the type easily in tests,
   * helps developers identify errors from workbox
   * easily and allows use to optimise error
   * messages correctly.
   *
   * @private
   */
  class WorkboxError_WorkboxError extends Error {
      /**
       *
       * @param {string} errorCode The error code that
       * identifies this particular error.
       * @param {Object=} details Any relevant arguments
       * that will help developers identify issues should
       * be added as a key on the context object.
       */
      constructor(errorCode, details) {
          const message = messageGenerator(errorCode, details);
          super(message);
          this.name = errorCode;
          this.details = details;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/assert.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /*
   * This method throws if the supplied value is not an array.
   * The destructed values are required to produce a meaningful error for users.
   * The destructed and restructured object is so it's clear what is
   * needed.
   */
  const isArray = (value, details) => {
      if (!Array.isArray(value)) {
          throw new WorkboxError_WorkboxError('not-an-array', details);
      }
  };
  const hasMethod = (object, expectedMethod, details) => {
      const type = typeof object[expectedMethod];
      if (type !== 'function') {
          details['expectedMethod'] = expectedMethod;
          throw new WorkboxError_WorkboxError('missing-a-method', details);
      }
  };
  const isType = (object, expectedType, details) => {
      if (typeof object !== expectedType) {
          details['expectedType'] = expectedType;
          throw new WorkboxError_WorkboxError('incorrect-type', details);
      }
  };
  const isInstance = (object, expectedClass, details) => {
      if (!(object instanceof expectedClass)) {
          details['expectedClass'] = expectedClass;
          throw new WorkboxError_WorkboxError('incorrect-class', details);
      }
  };
  const isOneOf = (value, validValues, details) => {
      if (!validValues.includes(value)) {
          details['validValueDescription'] =
              `Valid values are ${JSON.stringify(validValues)}.`;
          throw new WorkboxError_WorkboxError('invalid-value', details);
      }
  };
  const isArrayOfClass = (value, expectedClass, details) => {
      const error = new WorkboxError_WorkboxError('not-array-of-class', details);
      if (!Array.isArray(value)) {
          throw error;
      }
      for (const item of value) {
          if (!(item instanceof expectedClass)) {
              throw error;
          }
      }
  };
  const finalAssertExports =  true ? null : undefined;
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/models/quotaErrorCallbacks.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  // Callbacks to be executed whenever there's a quota error.
  const quotaErrorCallbacks = new Set();
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/registerQuotaErrorCallback.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  /**
   * Adds a function to the set of quotaErrorCallbacks that will be executed if
   * there's a quota error.
   *
   * @param {Function} callback
   * @memberof module:workbox-core
   */
  function registerQuotaErrorCallback(callback) {
      if (false) {}
      quotaErrorCallbacks.add(callback);
      if (false) {}
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/cacheNames.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  const _cacheNameDetails = {
      googleAnalytics: 'googleAnalytics',
      precache: 'precache-v2',
      prefix: 'workbox',
      runtime: 'runtime',
      suffix: typeof registration !== 'undefined' ? registration.scope : '',
  };
  const _createCacheName = (cacheName) => {
      return [_cacheNameDetails.prefix, cacheName, _cacheNameDetails.suffix]
          .filter((value) => value && value.length > 0)
          .join('-');
  };
  const eachCacheNameDetail = (fn) => {
      for (const key of Object.keys(_cacheNameDetails)) {
          fn(key);
      }
  };
  const cacheNames = {
      updateDetails: (details) => {
          eachCacheNameDetail((key) => {
              if (typeof details[key] === 'string') {
                  _cacheNameDetails[key] = details[key];
              }
          });
      },
      getGoogleAnalyticsName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.googleAnalytics);
      },
      getPrecacheName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.precache);
      },
      getPrefix: () => {
          return _cacheNameDetails.prefix;
      },
      getRuntimeName: (userCacheName) => {
          return userCacheName || _createCacheName(_cacheNameDetails.runtime);
      },
      getSuffix: () => {
          return _cacheNameDetails.suffix;
      },
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
  /*
    Copyright 2020 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  function stripParams(fullURL, ignoreParams) {
      const strippedURL = new URL(fullURL);
      for (const param of ignoreParams) {
          strippedURL.searchParams.delete(param);
      }
      return strippedURL.href;
  }
  /**
   * Matches an item in the cache, ignoring specific URL params. This is similar
   * to the `ignoreSearch` option, but it allows you to ignore just specific
   * params (while continuing to match on the others).
   *
   * @private
   * @param {Cache} cache
   * @param {Request} request
   * @param {Object} matchOptions
   * @param {Array<string>} ignoreParams
   * @return {Promise<Response|undefined>}
   */
  async function cacheMatchIgnoreParams(cache, request, ignoreParams, matchOptions) {
      const strippedRequestURL = stripParams(request.url, ignoreParams);
      // If the request doesn't include any ignored params, match as normal.
      if (request.url === strippedRequestURL) {
          return cache.match(request, matchOptions);
      }
      // Otherwise, match by comparing keys
      const keysOptions = { ...matchOptions, ignoreSearch: true };
      const cacheKeys = await cache.keys(request, keysOptions);
      for (const cacheKey of cacheKeys) {
          const strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);
          if (strippedRequestURL === strippedCacheKeyURL) {
              return cache.match(cacheKey, matchOptions);
          }
      }
      return;
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructReadableStream.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  let supportStatus;
  /**
   * A utility function that determines whether the current browser supports
   * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
   * object.
   *
   * @return {boolean} `true`, if the current browser can successfully
   *     construct a `ReadableStream`, `false` otherwise.
   *
   * @private
   */
  function canConstructReadableStream() {
      if (supportStatus === undefined) {
          // See https://github.com/GoogleChrome/workbox/issues/1473
          try {
              new ReadableStream({ start() { } });
              supportStatus = true;
          }
          catch (error) {
              supportStatus = false;
          }
      }
      return supportStatus;
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  let canConstructResponseFromBodyStream_supportStatus;
  /**
   * A utility function that determines whether the current browser supports
   * constructing a new `Response` from a `response.body` stream.
   *
   * @return {boolean} `true`, if the current browser can successfully
   *     construct a `Response` from a `response.body` stream, `false` otherwise.
   *
   * @private
   */
  function canConstructResponseFromBodyStream() {
      if (canConstructResponseFromBodyStream_supportStatus === undefined) {
          const testResponse = new Response('');
          if ('body' in testResponse) {
              try {
                  new Response(testResponse.body);
                  canConstructResponseFromBodyStream_supportStatus = true;
              }
              catch (error) {
                  canConstructResponseFromBodyStream_supportStatus = false;
              }
          }
          canConstructResponseFromBodyStream_supportStatus = false;
      }
      return canConstructResponseFromBodyStream_supportStatus;
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/dontWaitFor.js
  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * A helper function that prevents a promise from being flagged as unused.
   *
   * @private
   **/
  function dontWaitFor(promise) {
      // Effective no-op.
      promise.then(() => { });
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/DBWrapper.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * A class that wraps common IndexedDB functionality in a promise-based API.
   * It exposes all the underlying power and functionality of IndexedDB, but
   * wraps the most commonly used features in a way that's much simpler to use.
   *
   * @private
   */
  class DBWrapper {
      /**
       * @param {string} name
       * @param {number} version
       * @param {Object=} [callback]
       * @param {!Function} [callbacks.onupgradeneeded]
       * @param {!Function} [callbacks.onversionchange] Defaults to
       *     DBWrapper.prototype._onversionchange when not specified.
       * @private
       */
      constructor(name, version, { onupgradeneeded, onversionchange, } = {}) {
          this._db = null;
          this._name = name;
          this._version = version;
          this._onupgradeneeded = onupgradeneeded;
          this._onversionchange = onversionchange || (() => this.close());
      }
      /**
       * Returns the IDBDatabase instance (not normally needed).
       * @return {IDBDatabase|undefined}
       *
       * @private
       */
      get db() {
          return this._db;
      }
      /**
       * Opens a connected to an IDBDatabase, invokes any onupgradedneeded
       * callback, and added an onversionchange callback to the database.
       *
       * @return {IDBDatabase}
       * @private
       */
      async open() {
          if (this._db)
              return;
          this._db = await new Promise((resolve, reject) => {
              // This flag is flipped to true if the timeout callback runs prior
              // to the request failing or succeeding. Note: we use a timeout instead
              // of an onblocked handler since there are cases where onblocked will
              // never never run. A timeout better handles all possible scenarios:
              // https://github.com/w3c/IndexedDB/issues/223
              let openRequestTimedOut = false;
              setTimeout(() => {
                  openRequestTimedOut = true;
                  reject(new Error('The open request was blocked and timed out'));
              }, this.OPEN_TIMEOUT);
              const openRequest = indexedDB.open(this._name, this._version);
              openRequest.onerror = () => reject(openRequest.error);
              openRequest.onupgradeneeded = (evt) => {
                  if (openRequestTimedOut) {
                      openRequest.transaction.abort();
                      openRequest.result.close();
                  }
                  else if (typeof this._onupgradeneeded === 'function') {
                      this._onupgradeneeded(evt);
                  }
              };
              openRequest.onsuccess = () => {
                  const db = openRequest.result;
                  if (openRequestTimedOut) {
                      db.close();
                  }
                  else {
                      db.onversionchange = this._onversionchange.bind(this);
                      resolve(db);
                  }
              };
          });
          return this;
      }
      /**
       * Polyfills the native `getKey()` method. Note, this is overridden at
       * runtime if the browser supports the native method.
       *
       * @param {string} storeName
       * @param {*} query
       * @return {Array}
       * @private
       */
      async getKey(storeName, query) {
          return (await this.getAllKeys(storeName, query, 1))[0];
      }
      /**
       * Polyfills the native `getAll()` method. Note, this is overridden at
       * runtime if the browser supports the native method.
       *
       * @param {string} storeName
       * @param {*} query
       * @param {number} count
       * @return {Array}
       * @private
       */
      async getAll(storeName, query, count) {
          return await this.getAllMatching(storeName, { query, count });
      }
      /**
       * Polyfills the native `getAllKeys()` method. Note, this is overridden at
       * runtime if the browser supports the native method.
       *
       * @param {string} storeName
       * @param {*} query
       * @param {number} count
       * @return {Array}
       * @private
       */
      async getAllKeys(storeName, query, count) {
          const entries = await this.getAllMatching(storeName, { query, count, includeKeys: true });
          return entries.map((entry) => entry.key);
      }
      /**
       * Supports flexible lookup in an object store by specifying an index,
       * query, direction, and count. This method returns an array of objects
       * with the signature .
       *
       * @param {string} storeName
       * @param {Object} [opts]
       * @param {string} [opts.index] The index to use (if specified).
       * @param {*} [opts.query]
       * @param {IDBCursorDirection} [opts.direction]
       * @param {number} [opts.count] The max number of results to return.
       * @param {boolean} [opts.includeKeys] When true, the structure of the
       *     returned objects is changed from an array of values to an array of
       *     objects in the form {key, primaryKey, value}.
       * @return {Array}
       * @private
       */
      async getAllMatching(storeName, { index, query = null, // IE/Edge errors if query === `undefined`.
      direction = 'next', count, includeKeys = false, } = {}) {
          return await this.transaction([storeName], 'readonly', (txn, done) => {
              const store = txn.objectStore(storeName);
              const target = index ? store.index(index) : store;
              const results = [];
              const request = target.openCursor(query, direction);
              request.onsuccess = () => {
                  const cursor = request.result;
                  if (cursor) {
                      results.push(includeKeys ? cursor : cursor.value);
                      if (count && results.length >= count) {
                          done(results);
                      }
                      else {
                          cursor.continue();
                      }
                  }
                  else {
                      done(results);
                  }
              };
          });
      }
      /**
       * Accepts a list of stores, a transaction type, and a callback and
       * performs a transaction. A promise is returned that resolves to whatever
       * value the callback chooses. The callback holds all the transaction logic
       * and is invoked with two arguments:
       *   1. The IDBTransaction object
       *   2. A `done` function, that's used to resolve the promise when
       *      when the transaction is done, if passed a value, the promise is
       *      resolved to that value.
       *
       * @param {Array<string>} storeNames An array of object store names
       *     involved in the transaction.
       * @param {string} type Can be `readonly` or `readwrite`.
       * @param {!Function} callback
       * @return {*} The result of the transaction ran by the callback.
       * @private
       */
      async transaction(storeNames, type, callback) {
          await this.open();
          return await new Promise((resolve, reject) => {
              const txn = this._db.transaction(storeNames, type);
              txn.onabort = () => reject(txn.error);
              txn.oncomplete = () => resolve();
              callback(txn, (value) => resolve(value));
          });
      }
      /**
       * Delegates async to a native IDBObjectStore method.
       *
       * @param {string} method The method name.
       * @param {string} storeName The object store name.
       * @param {string} type Can be `readonly` or `readwrite`.
       * @param {...*} args The list of args to pass to the native method.
       * @return {*} The result of the transaction.
       * @private
       */
      async _call(method, storeName, type, ...args) {
          const callback = (txn, done) => {
              const objStore = txn.objectStore(storeName);
              // TODO(philipwalton): Fix this underlying TS2684 error.
              // @ts-ignore
              const request = objStore[method].apply(objStore, args);
              request.onsuccess = () => done(request.result);
          };
          return await this.transaction([storeName], type, callback);
      }
      /**
       * Closes the connection opened by `DBWrapper.open()`. Generally this method
       * doesn't need to be called since:
       *   1. It's usually better to keep a connection open since opening
       *      a new connection is somewhat slow.
       *   2. Connections are automatically closed when the reference is
       *      garbage collected.
       * The primary use case for needing to close a connection is when another
       * reference (typically in another tab) needs to upgrade it and would be
       * blocked by the current, open connection.
       *
       * @private
       */
      close() {
          if (this._db) {
              this._db.close();
              this._db = null;
          }
      }
  }
  // Exposed on the prototype to let users modify the default timeout on a
  // per-instance or global basis.
  DBWrapper.prototype.OPEN_TIMEOUT = 2000;
  // Wrap native IDBObjectStore methods according to their mode.
  const methodsToWrap = {
      readonly: ['get', 'count', 'getKey', 'getAll', 'getAllKeys'],
      readwrite: ['add', 'put', 'clear', 'delete'],
  };
  for (const [mode, methods] of Object.entries(methodsToWrap)) {
      for (const method of methods) {
          if (method in IDBObjectStore.prototype) {
              // Don't use arrow functions here since we're outside of the class.
              DBWrapper.prototype[method] =
                  async function (storeName, ...args) {
                      return await this._call(method, storeName, mode, ...args);
                  };
          }
      }
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/Deferred.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * The Deferred class composes Promises in a way that allows for them to be
   * resolved or rejected from outside the constructor. In most cases promises
   * should be used directly, but Deferreds can be necessary when the logic to
   * resolve a promise must be separate.
   *
   * @private
   */
  class Deferred {
      /**
       * Creates a promise and exposes its resolve and reject functions as methods.
       */
      constructor() {
          this.promise = new Promise((resolve, reject) => {
              this.resolve = resolve;
              this.reject = reject;
          });
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/deleteDatabase.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * Deletes the database.
   * Note: this is exported separately from the DBWrapper module because most
   * usages of IndexedDB in workbox dont need deleting, and this way it can be
   * reused in tests to delete databases without creating DBWrapper instances.
   *
   * @param {string} name The database name.
   * @private
   */
  const deleteDatabase = async (name) => {
      await new Promise((resolve, reject) => {
          const request = indexedDB.deleteDatabase(name);
          request.onerror = () => {
              reject(request.error);
          };
          request.onblocked = () => {
              reject(new Error('Delete blocked'));
          };
          request.onsuccess = () => {
              resolve();
          };
      });
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  /**
   * Runs all of the callback functions, one at a time sequentially, in the order
   * in which they were registered.
   *
   * @memberof module:workbox-core
   * @private
   */
  async function executeQuotaErrorCallbacks() {
      if (false) {}
      for (const callback of quotaErrorCallbacks) {
          await callback();
          if (false) {}
      }
      if (false) {}
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  const getFriendlyURL = (url) => {
      const urlObj = new URL(String(url), location.href);
      // See https://github.com/GoogleChrome/workbox/issues/2323
      // We want to include everything, except for the origin if it's same-origin.
      return urlObj.href.replace(new RegExp(`^${location.origin}`), '');
  };
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/timeout.js
  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * Returns a promise that resolves and the passed number of milliseconds.
   * This utility is an async/await-friendly version of `setTimeout`.
   *
   * @param {number} ms
   * @return {Promise}
   * @private
   */
  function timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/resultingClientExists.js
  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  const MAX_RETRY_TIME = 2000;
  /**
   * Returns a promise that resolves to a window client matching the passed
   * `resultingClientId`. For browsers that don't support `resultingClientId`
   * or if waiting for the resulting client to apper takes too long, resolve to
   * `undefined`.
   *
   * @param {string} [resultingClientId]
   * @return {Promise<Client|undefined>}
   * @private
   */
  async function resultingClientExists(resultingClientId) {
      if (!resultingClientId) {
          return;
      }
      let existingWindows = await self.clients.matchAll({ type: 'window' });
      const existingWindowIds = new Set(existingWindows.map((w) => w.id));
      let resultingWindow;
      const startTime = performance.now();
      // Only wait up to `MAX_RETRY_TIME` to find a matching client.
      while (performance.now() - startTime < MAX_RETRY_TIME) {
          existingWindows = await self.clients.matchAll({ type: 'window' });
          resultingWindow = existingWindows.find((w) => {
              if (resultingClientId) {
                  // If we have a `resultingClientId`, we can match on that.
                  return w.id === resultingClientId;
              }
              else {
                  // Otherwise match on finding a window not in `existingWindowIds`.
                  return !existingWindowIds.has(w.id);
              }
          });
          if (resultingWindow) {
              break;
          }
          // Sleep for 100ms and retry.
          await timeout(100);
      }
      return resultingWindow;
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private/waitUntil.js
  /*
    Copyright 2020 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * A utility method that makes it easier to use `event.waitUntil` with
   * async functions and return the result.
   *
   * @param {ExtendableEvent} event
   * @param {Function} asyncFn
   * @return {Function}
   * @private
   */
  function waitUntil(event, asyncFn) {
      const returnPromise = asyncFn();
      event.waitUntil(returnPromise);
      return returnPromise;
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/_private.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  // We either expose defaults or we expose every named export.
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/cacheNames.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Get the current cache names and prefix/suffix used by Workbox.
   *
   * `cacheNames.precache` is used for precached assets,
   * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
   * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
   *
   * `cacheNames.prefix` can be used to retrieve just the current prefix value.
   * `cacheNames.suffix` can be used to retrieve just the current suffix value.
   *
   * @return {Object} An object with `precache`, `runtime`, `prefix`, and
   *     `googleAnalytics` properties.
   *
   * @memberof module:workbox-core
   */
  const cacheNames_cacheNames = {
      get googleAnalytics() {
          return cacheNames.getGoogleAnalyticsName();
      },
      get precache() {
          return cacheNames.getPrecacheName();
      },
      get prefix() {
          return cacheNames.getPrefix();
      },
      get runtime() {
          return cacheNames.getRuntimeName();
      },
      get suffix() {
          return cacheNames.getSuffix();
      },
  };
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/copyResponse.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  /**
   * Allows developers to copy a response and modify its `headers`, `status`,
   * or `statusText` values (the values settable via a
   * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
   * object in the constructor).
   * To modify these values, pass a function as the second argument. That
   * function will be invoked with a single object with the response properties
   * `{headers, status, statusText}`. The return value of this function will
   * be used as the `ResponseInit` for the new `Response`. To change the values
   * either modify the passed parameter(s) and return it, or return a totally
   * new object.
   *
   * This method is intentionally limited to same-origin responses, regardless of
   * whether CORS was used or not.
   *
   * @param {Response} response
   * @param {Function} modifier
   * @memberof module:workbox-core
   */
  async function copyResponse(response, modifier) {
      let origin = null;
      // If response.url isn't set, assume it's cross-origin and keep origin null.
      if (response.url) {
          const responseURL = new URL(response.url);
          origin = responseURL.origin;
      }
      if (origin !== self.location.origin) {
          throw new WorkboxError_WorkboxError('cross-origin-copy-response', { origin });
      }
      const clonedResponse = response.clone();
      // Create a fresh `ResponseInit` object by cloning the headers.
      const responseInit = {
          headers: new Headers(clonedResponse.headers),
          status: clonedResponse.status,
          statusText: clonedResponse.statusText,
      };
      // Apply any user modifications.
      const modifiedResponseInit = modifier ? modifier(responseInit) : responseInit;
      // Create the new response from the body stream and `ResponseInit`
      // modifications. Note: not all browsers support the Response.body stream,
      // so fall back to reading the entire body into memory as a blob.
      const body = canConstructResponseFromBodyStream() ?
          clonedResponse.body : await clonedResponse.blob();
      return new Response(body, modifiedResponseInit);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/clientsClaim.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * Claim any currently available clients once the service worker
   * becomes active. This is normally used in conjunction with `skipWaiting()`.
   *
   * @memberof module:workbox-core
   */
  function clientsClaim() {
      self.addEventListener('activate', () => self.clients.claim());
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/setCacheNameDetails.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  /**
   * Modifies the default cache names used by the Workbox packages.
   * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
   *
   * @param {Object} details
   * @param {Object} [details.prefix] The string to add to the beginning of
   *     the precache and runtime cache names.
   * @param {Object} [details.suffix] The string to add to the end of
   *     the precache and runtime cache names.
   * @param {Object} [details.precache] The cache name to use for precache
   *     caching.
   * @param {Object} [details.runtime] The cache name to use for runtime caching.
   * @param {Object} [details.googleAnalytics] The cache name to use for
   *     `workbox-google-analytics` caching.
   *
   * @memberof module:workbox-core
   */
  function setCacheNameDetails(details) {
      if (false) {}
      cacheNames.updateDetails(details);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/skipWaiting.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * This method is deprecated, and will be removed in Workbox v7.
   *
   * Calling self.skipWaiting() is equivalent, and should be used instead.
   *
   * @memberof module:workbox-core
   */
  function skipWaiting() {
      // Just call self.skipWaiting() directly.
      // See https://github.com/GoogleChrome/workbox/issues/2525
      if (false) {}
      self.skipWaiting();
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/types.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/index.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  
  /**
   * All of the Workbox service worker libraries use workbox-core for shared
   * code as well as setting default values that need to be shared (like cache
   * names).
   *
   * @module workbox-core
   */
  
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-core/index.mjs
  
  // EXTERNAL MODULE: ./node_modules/workbox-expiration/_version.js
  var workbox_expiration_version = __webpack_require__("2KUI");
  
  // CONCATENATED MODULE: ./node_modules/workbox-expiration/models/CacheTimestampsModel.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  const DB_NAME = 'workbox-expiration';
  const OBJECT_STORE_NAME = 'cache-entries';
  const normalizeURL = (unNormalizedUrl) => {
      const url = new URL(unNormalizedUrl, location.href);
      url.hash = '';
      return url.href;
  };
  /**
   * Returns the timestamp model.
   *
   * @private
   */
  class CacheTimestampsModel_CacheTimestampsModel {
      /**
       *
       * @param {string} cacheName
       *
       * @private
       */
      constructor(cacheName) {
          this._cacheName = cacheName;
          this._db = new DBWrapper(DB_NAME, 1, {
              onupgradeneeded: (event) => this._handleUpgrade(event),
          });
      }
      /**
       * Should perform an upgrade of indexedDB.
       *
       * @param {Event} event
       *
       * @private
       */
      _handleUpgrade(event) {
          const db = event.target.result;
          // TODO(philipwalton): EdgeHTML doesn't support arrays as a keyPath, so we
          // have to use the `id` keyPath here and create our own values (a
          // concatenation of `url + cacheName`) instead of simply using
          // `keyPath: ['url', 'cacheName']`, which is supported in other browsers.
          const objStore = db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
          // TODO(philipwalton): once we don't have to support EdgeHTML, we can
          // create a single index with the keyPath `['cacheName', 'timestamp']`
          // instead of doing both these indexes.
          objStore.createIndex('cacheName', 'cacheName', { unique: false });
          objStore.createIndex('timestamp', 'timestamp', { unique: false });
          // Previous versions of `workbox-expiration` used `this._cacheName`
          // as the IDBDatabase name.
          deleteDatabase(this._cacheName);
      }
      /**
       * @param {string} url
       * @param {number} timestamp
       *
       * @private
       */
      async setTimestamp(url, timestamp) {
          url = normalizeURL(url);
          const entry = {
              url,
              timestamp,
              cacheName: this._cacheName,
              // Creating an ID from the URL and cache name won't be necessary once
              // Edge switches to Chromium and all browsers we support work with
              // array keyPaths.
              id: this._getId(url),
          };
          await this._db.put(OBJECT_STORE_NAME, entry);
      }
      /**
       * Returns the timestamp stored for a given URL.
       *
       * @param {string} url
       * @return {number}
       *
       * @private
       */
      async getTimestamp(url) {
          const entry = await this._db.get(OBJECT_STORE_NAME, this._getId(url));
          return entry.timestamp;
      }
      /**
       * Iterates through all the entries in the object store (from newest to
       * oldest) and removes entries once either `maxCount` is reached or the
       * entry's timestamp is less than `minTimestamp`.
       *
       * @param {number} minTimestamp
       * @param {number} maxCount
       * @return {Array<string>}
       *
       * @private
       */
      async expireEntries(minTimestamp, maxCount) {
          const entriesToDelete = await this._db.transaction(OBJECT_STORE_NAME, 'readwrite', (txn, done) => {
              const store = txn.objectStore(OBJECT_STORE_NAME);
              const request = store.index('timestamp').openCursor(null, 'prev');
              const entriesToDelete = [];
              let entriesNotDeletedCount = 0;
              request.onsuccess = () => {
                  const cursor = request.result;
                  if (cursor) {
                      const result = cursor.value;
                      // TODO(philipwalton): once we can use a multi-key index, we
                      // won't have to check `cacheName` here.
                      if (result.cacheName === this._cacheName) {
                          // Delete an entry if it's older than the max age or
                          // if we already have the max number allowed.
                          if ((minTimestamp && result.timestamp < minTimestamp) ||
                              (maxCount && entriesNotDeletedCount >= maxCount)) {
                              // TODO(philipwalton): we should be able to delete the
                              // entry right here, but doing so causes an iteration
                              // bug in Safari stable (fixed in TP). Instead we can
                              // store the keys of the entries to delete, and then
                              // delete the separate transactions.
                              // https://github.com/GoogleChrome/workbox/issues/1978
                              // cursor.delete();
                              // We only need to return the URL, not the whole entry.
                              entriesToDelete.push(cursor.value);
                          }
                          else {
                              entriesNotDeletedCount++;
                          }
                      }
                      cursor.continue();
                  }
                  else {
                      done(entriesToDelete);
                  }
              };
          });
          // TODO(philipwalton): once the Safari bug in the following issue is fixed,
          // we should be able to remove this loop and do the entry deletion in the
          // cursor loop above:
          // https://github.com/GoogleChrome/workbox/issues/1978
          const urlsDeleted = [];
          for (const entry of entriesToDelete) {
              await this._db.delete(OBJECT_STORE_NAME, entry.id);
              urlsDeleted.push(entry.url);
          }
          return urlsDeleted;
      }
      /**
       * Takes a URL and returns an ID that will be unique in the object store.
       *
       * @param {string} url
       * @return {string}
       *
       * @private
       */
      _getId(url) {
          // Creating an ID from the URL and cache name won't be necessary once
          // Edge switches to Chromium and all browsers we support work with
          // array keyPaths.
          return this._cacheName + '|' + normalizeURL(url);
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-expiration/CacheExpiration.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  /**
   * The `CacheExpiration` class allows you define an expiration and / or
   * limit on the number of responses stored in a
   * [`Cache`](https://developer.mozilla.org/en-US/docs/Web/API/Cache).
   *
   * @memberof module:workbox-expiration
   */
  class CacheExpiration_CacheExpiration {
      /**
       * To construct a new CacheExpiration instance you must provide at least
       * one of the `config` properties.
       *
       * @param {string} cacheName Name of the cache to apply restrictions to.
       * @param {Object} config
       * @param {number} [config.maxEntries] The maximum number of entries to cache.
       * Entries used the least will be removed as the maximum is reached.
       * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
       * it's treated as stale and removed.
       * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
       * that will be used when calling `delete()` on the cache.
       */
      constructor(cacheName, config = {}) {
          this._isRunning = false;
          this._rerunRequested = false;
          if (false) {}
          this._maxEntries = config.maxEntries;
          this._maxAgeSeconds = config.maxAgeSeconds;
          this._matchOptions = config.matchOptions;
          this._cacheName = cacheName;
          this._timestampModel = new CacheTimestampsModel_CacheTimestampsModel(cacheName);
      }
      /**
       * Expires entries for the given cache and given criteria.
       */
      async expireEntries() {
          if (this._isRunning) {
              this._rerunRequested = true;
              return;
          }
          this._isRunning = true;
          const minTimestamp = this._maxAgeSeconds ?
              Date.now() - (this._maxAgeSeconds * 1000) : 0;
          const urlsExpired = await this._timestampModel.expireEntries(minTimestamp, this._maxEntries);
          // Delete URLs from the cache
          const cache = await self.caches.open(this._cacheName);
          for (const url of urlsExpired) {
              await cache.delete(url, this._matchOptions);
          }
          if (false) {}
          this._isRunning = false;
          if (this._rerunRequested) {
              this._rerunRequested = false;
              dontWaitFor(this.expireEntries());
          }
      }
      /**
       * Update the timestamp for the given URL. This ensures the when
       * removing entries based on maximum entries, most recently used
       * is accurate or when expiring, the timestamp is up-to-date.
       *
       * @param {string} url
       */
      async updateTimestamp(url) {
          if (false) {}
          await this._timestampModel.setTimestamp(url, Date.now());
      }
      /**
       * Can be used to check if a URL has expired or not before it's used.
       *
       * This requires a look up from IndexedDB, so can be slow.
       *
       * Note: This method will not remove the cached entry, call
       * `expireEntries()` to remove indexedDB and Cache entries.
       *
       * @param {string} url
       * @return {boolean}
       */
      async isURLExpired(url) {
          if (!this._maxAgeSeconds) {
              if (false) {}
              return false;
          }
          else {
              const timestamp = await this._timestampModel.getTimestamp(url);
              const expireOlderThan = Date.now() - (this._maxAgeSeconds * 1000);
              return (timestamp < expireOlderThan);
          }
      }
      /**
       * Removes the IndexedDB object store used to keep track of cache expiration
       * metadata.
       */
      async delete() {
          // Make sure we don't attempt another rerun if we're called in the middle of
          // a cache expiration.
          this._rerunRequested = false;
          await this._timestampModel.expireEntries(Infinity); // Expires all.
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-expiration/ExpirationPlugin.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  
  
  /**
   * This plugin can be used in a `workbox-strategy` to regularly enforce a
   * limit on the age and / or the number of cached requests.
   *
   * It can only be used with `workbox-strategy` instances that have a
   * [custom `cacheName` property set](/web/tools/workbox/guides/configure-workbox#custom_cache_names_in_strategies).
   * In other words, it can't be used to expire entries in strategy that uses the
   * default runtime cache name.
   *
   * Whenever a cached request is used or updated, this plugin will look
   * at the associated cache and remove any old or extra requests.
   *
   * When using `maxAgeSeconds`, requests may be used *once* after expiring
   * because the expiration clean up will not have occurred until *after* the
   * cached request has been used. If the request has a "Date" header, then
   * a light weight expiration check is performed and the request will not be
   * used immediately.
   *
   * When using `maxEntries`, the entry least-recently requested will be removed
   * from the cache first.
   *
   * @memberof module:workbox-expiration
   */
  class ExpirationPlugin_ExpirationPlugin {
      /**
       * @param {Object} config
       * @param {number} [config.maxEntries] The maximum number of entries to cache.
       * Entries used the least will be removed as the maximum is reached.
       * @param {number} [config.maxAgeSeconds] The maximum age of an entry before
       * it's treated as stale and removed.
       * @param {Object} [config.matchOptions] The [`CacheQueryOptions`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete#Parameters)
       * that will be used when calling `delete()` on the cache.
       * @param {boolean} [config.purgeOnQuotaError] Whether to opt this cache in to
       * automatic deletion if the available storage quota has been exceeded.
       */
      constructor(config = {}) {
          /**
           * A "lifecycle" callback that will be triggered automatically by the
           * `workbox-strategies` handlers when a `Response` is about to be returned
           * from a [Cache](https://developer.mozilla.org/en-US/docs/Web/API/Cache) to
           * the handler. It allows the `Response` to be inspected for freshness and
           * prevents it from being used if the `Response`'s `Date` header value is
           * older than the configured `maxAgeSeconds`.
           *
           * @param {Object} options
           * @param {string} options.cacheName Name of the cache the response is in.
           * @param {Response} options.cachedResponse The `Response` object that's been
           *     read from a cache and whose freshness should be checked.
           * @return {Response} Either the `cachedResponse`, if it's
           *     fresh, or `null` if the `Response` is older than `maxAgeSeconds`.
           *
           * @private
           */
          this.cachedResponseWillBeUsed = async ({ event, request, cacheName, cachedResponse }) => {
              if (!cachedResponse) {
                  return null;
              }
              const isFresh = this._isResponseDateFresh(cachedResponse);
              // Expire entries to ensure that even if the expiration date has
              // expired, it'll only be used once.
              const cacheExpiration = this._getCacheExpiration(cacheName);
              dontWaitFor(cacheExpiration.expireEntries());
              // Update the metadata for the request URL to the current timestamp,
              // but don't `await` it as we don't want to block the response.
              const updateTimestampDone = cacheExpiration.updateTimestamp(request.url);
              if (event) {
                  try {
                      event.waitUntil(updateTimestampDone);
                  }
                  catch (error) {
                      if (false) {}
                  }
              }
              return isFresh ? cachedResponse : null;
          };
          /**
           * A "lifecycle" callback that will be triggered automatically by the
           * `workbox-strategies` handlers when an entry is added to a cache.
           *
           * @param {Object} options
           * @param {string} options.cacheName Name of the cache that was updated.
           * @param {string} options.request The Request for the cached entry.
           *
           * @private
           */
          this.cacheDidUpdate = async ({ cacheName, request }) => {
              if (false) {}
              const cacheExpiration = this._getCacheExpiration(cacheName);
              await cacheExpiration.updateTimestamp(request.url);
              await cacheExpiration.expireEntries();
          };
          if (false) {}
          this._config = config;
          this._maxAgeSeconds = config.maxAgeSeconds;
          this._cacheExpirations = new Map();
          if (config.purgeOnQuotaError) {
              registerQuotaErrorCallback(() => this.deleteCacheAndMetadata());
          }
      }
      /**
       * A simple helper method to return a CacheExpiration instance for a given
       * cache name.
       *
       * @param {string} cacheName
       * @return {CacheExpiration}
       *
       * @private
       */
      _getCacheExpiration(cacheName) {
          if (cacheName === cacheNames.getRuntimeName()) {
              throw new WorkboxError_WorkboxError('expire-custom-caches-only');
          }
          let cacheExpiration = this._cacheExpirations.get(cacheName);
          if (!cacheExpiration) {
              cacheExpiration = new CacheExpiration_CacheExpiration(cacheName, this._config);
              this._cacheExpirations.set(cacheName, cacheExpiration);
          }
          return cacheExpiration;
      }
      /**
       * @param {Response} cachedResponse
       * @return {boolean}
       *
       * @private
       */
      _isResponseDateFresh(cachedResponse) {
          if (!this._maxAgeSeconds) {
              // We aren't expiring by age, so return true, it's fresh
              return true;
          }
          // Check if the 'date' header will suffice a quick expiration check.
          // See https://github.com/GoogleChromeLabs/sw-toolbox/issues/164 for
          // discussion.
          const dateHeaderTimestamp = this._getDateHeaderTimestamp(cachedResponse);
          if (dateHeaderTimestamp === null) {
              // Unable to parse date, so assume it's fresh.
              return true;
          }
          // If we have a valid headerTime, then our response is fresh iff the
          // headerTime plus maxAgeSeconds is greater than the current time.
          const now = Date.now();
          return dateHeaderTimestamp >= now - (this._maxAgeSeconds * 1000);
      }
      /**
       * This method will extract the data header and parse it into a useful
       * value.
       *
       * @param {Response} cachedResponse
       * @return {number|null}
       *
       * @private
       */
      _getDateHeaderTimestamp(cachedResponse) {
          if (!cachedResponse.headers.has('date')) {
              return null;
          }
          const dateHeader = cachedResponse.headers.get('date');
          const parsedDate = new Date(dateHeader);
          const headerTime = parsedDate.getTime();
          // If the Date header was invalid for some reason, parsedDate.getTime()
          // will return NaN.
          if (isNaN(headerTime)) {
              return null;
          }
          return headerTime;
      }
      /**
       * This is a helper method that performs two operations:
       *
       * - Deletes *all* the underlying Cache instances associated with this plugin
       * instance, by calling caches.delete() on your behalf.
       * - Deletes the metadata from IndexedDB used to keep track of expiration
       * details for each Cache instance.
       *
       * When using cache expiration, calling this method is preferable to calling
       * `caches.delete()` directly, since this will ensure that the IndexedDB
       * metadata is also cleanly removed and open IndexedDB instances are deleted.
       *
       * Note that if you're *not* using cache expiration for a given cache, calling
       * `caches.delete()` and passing in the cache's name should be sufficient.
       * There is no Workbox-specific method needed for cleanup in that case.
       */
      async deleteCacheAndMetadata() {
          // Do this one at a time instead of all at once via `Promise.all()` to
          // reduce the chance of inconsistency if a promise rejects.
          for (const [cacheName, cacheExpiration] of this._cacheExpirations) {
              await self.caches.delete(cacheName);
              await cacheExpiration.delete();
          }
          // Reset this._cacheExpirations to its initial state.
          this._cacheExpirations = new Map();
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-expiration/index.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  /**
   * @module workbox-expiration
   */
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-expiration/index.mjs
  
  // EXTERNAL MODULE: ./node_modules/workbox-strategies/_version.js
  var workbox_strategies_version = __webpack_require__("aqiC");
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/StrategyHandler.js
  /*
    Copyright 2020 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  
  
  function toRequest(input) {
      return (typeof input === 'string') ? new Request(input) : input;
  }
  /**
   * A class created every time a Strategy instance instance calls
   * [handle()]{@link module:workbox-strategies.Strategy~handle} or
   * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
   * cache actions around plugin callbacks and keeps track of when the strategy
   * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
   *
   * @memberof module:workbox-strategies
   */
  class StrategyHandler_StrategyHandler {
      /**
       * Creates a new instance associated with the passed strategy and event
       * that's handling the request.
       *
       * The constructor also initializes the state that will be passed to each of
       * the plugins handling this request.
       *
       * @param {module:workbox-strategies.Strategy} strategy
       * @param {Object} options
       * @param {Request|string} options.request A request to run this strategy for.
       * @param {ExtendableEvent} options.event The event associated with the
       *     request.
       * @param {URL} [options.url]
       * @param {*} [options.params]
       *     [match callback]{@link module:workbox-routing~matchCallback},
       *     (if applicable).
       */
      constructor(strategy, options) {
          this._cacheKeys = {};
          /**
           * The request the strategy is performing (passed to the strategy's
           * `handle()` or `handleAll()` method).
           * @name request
           * @instance
           * @type {Request}
           * @memberof module:workbox-strategies.StrategyHandler
           */
          /**
           * The event associated with this request.
           * @name event
           * @instance
           * @type {ExtendableEvent}
           * @memberof module:workbox-strategies.StrategyHandler
           */
          /**
           * A `URL` instance of `request.url` (if passed to the strategy's
           * `handle()` or `handleAll()` method).
           * Note: the `url` param will be present if the strategy was invoked
           * from a workbox `Route` object.
           * @name url
           * @instance
           * @type {URL|undefined}
           * @memberof module:workbox-strategies.StrategyHandler
           */
          /**
           * A `param` value (if passed to the strategy's
           * `handle()` or `handleAll()` method).
           * Note: the `param` param will be present if the strategy was invoked
           * from a workbox `Route` object and the
           * [match callback]{@link module:workbox-routing~matchCallback} returned
           * a truthy value (it will be that value).
           * @name params
           * @instance
           * @type {*|undefined}
           * @memberof module:workbox-strategies.StrategyHandler
           */
          if (false) {}
          Object.assign(this, options);
          this.event = options.event;
          this._strategy = strategy;
          this._handlerDeferred = new Deferred();
          this._extendLifetimePromises = [];
          // Copy the plugins list (since it's mutable on the strategy),
          // so any mutations don't affect this handler instance.
          this._plugins = [...strategy.plugins];
          this._pluginStateMap = new Map();
          for (const plugin of this._plugins) {
              this._pluginStateMap.set(plugin, {});
          }
          this.event.waitUntil(this._handlerDeferred.promise);
      }
      /**
       * Fetches a given request (and invokes any applicable plugin callback
       * methods) using the `fetchOptions` and `plugins` defined on the strategy
       * object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - `requestWillFetch()`
       * - `fetchDidSucceed()`
       * - `fetchDidFail()`
       *
       * @param {Request|string} input The URL or request to fetch.
       * @return {Promise<Response>}
       */
      fetch(input) {
          return this.waitUntil((async () => {
              const { event } = this;
              let request = toRequest(input);
              if (request.mode === 'navigate' &&
                  event instanceof FetchEvent &&
                  event.preloadResponse) {
                  const possiblePreloadResponse = await event.preloadResponse;
                  if (possiblePreloadResponse) {
                      if (false) {}
                      return possiblePreloadResponse;
                  }
              }
              // If there is a fetchDidFail plugin, we need to save a clone of the
              // original request before it's either modified by a requestWillFetch
              // plugin or before the original request's body is consumed via fetch().
              const originalRequest = this.hasCallback('fetchDidFail') ?
                  request.clone() : null;
              try {
                  for (const cb of this.iterateCallbacks('requestWillFetch')) {
                      request = await cb({ request: request.clone(), event });
                  }
              }
              catch (err) {
                  throw new WorkboxError_WorkboxError('plugin-error-request-will-fetch', {
                      thrownError: err,
                  });
              }
              // The request can be altered by plugins with `requestWillFetch` making
              // the original request (most likely from a `fetch` event) different
              // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
              const pluginFilteredRequest = request.clone();
              try {
                  let fetchResponse;
                  // See https://github.com/GoogleChrome/workbox/issues/1796
                  fetchResponse = await fetch(request, request.mode === 'navigate' ?
                      undefined : this._strategy.fetchOptions);
                  if (false) {}
                  for (const callback of this.iterateCallbacks('fetchDidSucceed')) {
                      fetchResponse = await callback({
                          event,
                          request: pluginFilteredRequest,
                          response: fetchResponse,
                      });
                  }
                  return fetchResponse;
              }
              catch (error) {
                  if (false) {}
                  // `originalRequest` will only exist if a `fetchDidFail` callback
                  // is being used (see above).
                  if (originalRequest) {
                      await this.runCallbacks('fetchDidFail', {
                          error,
                          event,
                          originalRequest: originalRequest.clone(),
                          request: pluginFilteredRequest.clone(),
                      });
                  }
                  throw error;
              }
          })());
      }
      /**
       * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
       * the response generated by `this.fetch()`.
       *
       * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
       * so you do not have to manually call `waitUntil()` on the event.
       *
       * @param {Request|string} input The request or URL to fetch and cache.
       * @return {Promise<Response>}
       */
      async fetchAndCachePut(input) {
          const response = await this.fetch(input);
          const responseClone = response.clone();
          this.waitUntil(this.cachePut(input, responseClone));
          return response;
      }
      /**
       * Matches a request from the cache (and invokes any applicable plugin
       * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
       * defined on the strategy object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - cacheKeyWillByUsed()
       * - cachedResponseWillByUsed()
       *
       * @param {Request|string} key The Request or URL to use as the cache key.
       * @return {Promise<Response|undefined>} A matching response, if found.
       */
      cacheMatch(key) {
          return this.waitUntil((async () => {
              const request = toRequest(key);
              let cachedResponse;
              const { cacheName, matchOptions } = this._strategy;
              const effectiveRequest = await this.getCacheKey(request, 'read');
              const multiMatchOptions = { ...matchOptions, ...{ cacheName } };
              cachedResponse = await caches.match(effectiveRequest, multiMatchOptions);
              if (false) {}
              for (const callback of this.iterateCallbacks('cachedResponseWillBeUsed')) {
                  cachedResponse = (await callback({
                      cacheName,
                      matchOptions,
                      cachedResponse,
                      request: effectiveRequest,
                      event: this.event,
                  })) || undefined;
              }
              return cachedResponse;
          })());
      }
      /**
       * Puts a request/response pair in the cache (and invokes any applicable
       * plugin callback methods) using the `cacheName` and `plugins` defined on
       * the strategy object.
       *
       * The following plugin lifecycle methods are invoked when using this method:
       * - cacheKeyWillByUsed()
       * - cacheWillUpdate()
       * - cacheDidUpdate()
       *
       * @param {Request|string} key The request or URL to use as the cache key.
       * @param {Response} response The response to cache.
       * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
       * not be cached, and `true` otherwise.
       */
      async cachePut(key, response) {
          const request = toRequest(key);
          // Run in the next task to avoid blocking other cache reads.
          // https://github.com/w3c/ServiceWorker/issues/1397
          await timeout(0);
          const effectiveRequest = await this.getCacheKey(request, 'write');
          if (false) {}
          if (!response) {
              if (false) {}
              throw new WorkboxError_WorkboxError('cache-put-with-no-response', {
                  url: getFriendlyURL(effectiveRequest.url),
              });
          }
          const responseToCache = await this._ensureResponseSafeToCache(response);
          if (!responseToCache) {
              if (false) {}
              return false;
          }
          const { cacheName, matchOptions } = this._strategy;
          const cache = await self.caches.open(cacheName);
          const hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');
          const oldResponse = hasCacheUpdateCallback ? await cacheMatchIgnoreParams(
          // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
          // feature. Consider into ways to only add this behavior if using
          // precaching.
          cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions) :
              null;
          if (false) {}
          try {
              await cache.put(effectiveRequest, hasCacheUpdateCallback ?
                  responseToCache.clone() : responseToCache);
          }
          catch (error) {
              // See https://developer.mozilla.org/en-US/docs/Web/API/DOMException#exception-QuotaExceededError
              if (error.name === 'QuotaExceededError') {
                  await executeQuotaErrorCallbacks();
              }
              throw error;
          }
          for (const callback of this.iterateCallbacks('cacheDidUpdate')) {
              await callback({
                  cacheName,
                  oldResponse,
                  newResponse: responseToCache.clone(),
                  request: effectiveRequest,
                  event: this.event,
              });
          }
          return true;
      }
      /**
       * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
       * executes any of those callbacks found in sequence. The final `Request`
       * object returned by the last plugin is treated as the cache key for cache
       * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
       * been registered, the passed request is returned unmodified
       *
       * @param {Request} request
       * @param {string} mode
       * @return {Promise<Request>}
       */
      async getCacheKey(request, mode) {
          if (!this._cacheKeys[mode]) {
              let effectiveRequest = request;
              for (const callback of this.iterateCallbacks('cacheKeyWillBeUsed')) {
                  effectiveRequest = toRequest(await callback({
                      mode,
                      request: effectiveRequest,
                      event: this.event,
                      params: this.params,
                  }));
              }
              this._cacheKeys[mode] = effectiveRequest;
          }
          return this._cacheKeys[mode];
      }
      /**
       * Returns true if the strategy has at least one plugin with the given
       * callback.
       *
       * @param {string} name The name of the callback to check for.
       * @return {boolean}
       */
      hasCallback(name) {
          for (const plugin of this._strategy.plugins) {
              if (name in plugin) {
                  return true;
              }
          }
          return false;
      }
      /**
       * Runs all plugin callbacks matching the given name, in order, passing the
       * given param object (merged ith the current plugin state) as the only
       * argument.
       *
       * Note: since this method runs all plugins, it's not suitable for cases
       * where the return value of a callback needs to be applied prior to calling
       * the next callback. See
       * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
       * below for how to handle that case.
       *
       * @param {string} name The name of the callback to run within each plugin.
       * @param {Object} param The object to pass as the first (and only) param
       *     when executing each callback. This object will be merged with the
       *     current plugin state prior to callback execution.
       */
      async runCallbacks(name, param) {
          for (const callback of this.iterateCallbacks(name)) {
              // TODO(philipwalton): not sure why `any` is needed. It seems like
              // this should work with `as WorkboxPluginCallbackParam[C]`.
              await callback(param);
          }
      }
      /**
       * Accepts a callback and returns an iterable of matching plugin callbacks,
       * where each callback is wrapped with the current handler state (i.e. when
       * you call each callback, whatever object parameter you pass it will
       * be merged with the plugin's current state).
       *
       * @param {string} name The name fo the callback to run
       * @return {Array<Function>}
       */
      *iterateCallbacks(name) {
          for (const plugin of this._strategy.plugins) {
              if (typeof plugin[name] === 'function') {
                  const state = this._pluginStateMap.get(plugin);
                  const statefulCallback = (param) => {
                      const statefulParam = { ...param, state };
                      // TODO(philipwalton): not sure why `any` is needed. It seems like
                      // this should work with `as WorkboxPluginCallbackParam[C]`.
                      return plugin[name](statefulParam);
                  };
                  yield statefulCallback;
              }
          }
      }
      /**
       * Adds a promise to the
       * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
       * of the event event associated with the request being handled (usually a
       * `FetchEvent`).
       *
       * Note: you can await
       * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
       * to know when all added promises have settled.
       *
       * @param {Promise} promise A promise to add to the extend lifetime promises
       *     of the event that triggered the request.
       */
      waitUntil(promise) {
          this._extendLifetimePromises.push(promise);
          return promise;
      }
      /**
       * Returns a promise that resolves once all promises passed to
       * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
       * have settled.
       *
       * Note: any work done after `doneWaiting()` settles should be manually
       * passed to an event's `waitUntil()` method (not this handler's
       * `waitUntil()` method), otherwise the service worker thread my be killed
       * prior to your work completing.
       */
      async doneWaiting() {
          let promise;
          while (promise = this._extendLifetimePromises.shift()) {
              await promise;
          }
      }
      /**
       * Stops running the strategy and immediately resolves any pending
       * `waitUntil()` promises.
       */
      destroy() {
          this._handlerDeferred.resolve();
      }
      /**
       * This method will call cacheWillUpdate on the available plugins (or use
       * status === 200) to determine if the Response is safe and valid to cache.
       *
       * @param {Request} options.request
       * @param {Response} options.response
       * @return {Promise<Response|undefined>}
       *
       * @private
       */
      async _ensureResponseSafeToCache(response) {
          let responseToCache = response;
          let pluginsUsed = false;
          for (const callback of this.iterateCallbacks('cacheWillUpdate')) {
              responseToCache = (await callback({
                  request: this.request,
                  response: responseToCache,
                  event: this.event,
              })) || undefined;
              pluginsUsed = true;
              if (!responseToCache) {
                  break;
              }
          }
          if (!pluginsUsed) {
              if (responseToCache && responseToCache.status !== 200) {
                  responseToCache = undefined;
              }
              if (false) {}
          }
          return responseToCache;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/Strategy.js
  /*
    Copyright 2020 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  /**
   * An abstract base class that all other strategy classes must extend from:
   *
   * @memberof module:workbox-strategies
   */
  class Strategy_Strategy {
      /**
       * Creates a new instance of the strategy and sets all documented option
       * properties as public instance properties.
       *
       * Note: if a custom strategy class extends the base Strategy class and does
       * not need more than these properties, it does not need to define its own
       * constructor.
       *
       * @param {Object} [options]
       * @param {string} [options.cacheName] Cache name to store and retrieve
       * requests. Defaults to the cache names provided by
       * [workbox-core]{@link module:workbox-core.cacheNames}.
       * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} [options.fetchOptions] Values passed along to the
       * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
       * of all fetch() requests made by this strategy.
       * @param {Object} [options.matchOptions] The
       * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
       * for any `cache.match()` or `cache.put()` calls made by this strategy.
       */
      constructor(options = {}) {
          /**
           * Cache name to store and retrieve
           * requests. Defaults to the cache names provided by
           * [workbox-core]{@link module:workbox-core.cacheNames}.
           *
           * @type {string}
           */
          this.cacheName = cacheNames.getRuntimeName(options.cacheName);
          /**
           * The list
           * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
           * used by this strategy.
           *
           * @type {Array<Object>}
           */
          this.plugins = options.plugins || [];
          /**
           * Values passed along to the
           * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
           * of all fetch() requests made by this strategy.
           *
           * @type {Object}
           */
          this.fetchOptions = options.fetchOptions;
          /**
           * The
           * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
           * for any `cache.match()` or `cache.put()` calls made by this strategy.
           *
           * @type {Object}
           */
          this.matchOptions = options.matchOptions;
      }
      /**
       * Perform a request strategy and returns a `Promise` that will resolve with
       * a `Response`, invoking all relevant plugin callbacks.
       *
       * When a strategy instance is registered with a Workbox
       * [route]{@link module:workbox-routing.Route}, this method is automatically
       * called when the route matches.
       *
       * Alternatively, this method can be used in a standalone `FetchEvent`
       * listener by passing it to `event.respondWith()`.
       *
       * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
       *     properties listed below.
       * @param {Request|string} options.request A request to run this strategy for.
       * @param {ExtendableEvent} options.event The event associated with the
       *     request.
       * @param {URL} [options.url]
       * @param {*} [options.params]
       */
      handle(options) {
          const [responseDone] = this.handleAll(options);
          return responseDone;
      }
      /**
       * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
       * instead of just returning a `Promise` that resolves to a `Response` it
       * it will return an tuple of [response, done] promises, where the former
       * (`response`) is equivalent to what `handle()` returns, and the latter is a
       * Promise that will resolve once any promises that were added to
       * `event.waitUntil()` as part of performing the strategy have completed.
       *
       * You can await the `done` promise to ensure any extra work performed by
       * the strategy (usually caching responses) completes successfully.
       *
       * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
       *     properties listed below.
       * @param {Request|string} options.request A request to run this strategy for.
       * @param {ExtendableEvent} options.event The event associated with the
       *     request.
       * @param {URL} [options.url]
       * @param {*} [options.params]
       * @return {Array<Promise>} A tuple of [response, done]
       *     promises that can be used to determine when the response resolves as
       *     well as when the handler has completed all its work.
       */
      handleAll(options) {
          // Allow for flexible options to be passed.
          if (options instanceof FetchEvent) {
              options = {
                  event: options,
                  request: options.request,
              };
          }
          const event = options.event;
          const request = typeof options.request === 'string' ?
              new Request(options.request) :
              options.request;
          const params = 'params' in options ? options.params : undefined;
          const handler = new StrategyHandler_StrategyHandler(this, { event, request, params });
          const responseDone = this._getResponse(handler, request, event);
          const handlerDone = this._awaitComplete(responseDone, handler, request, event);
          // Return an array of promises, suitable for use with Promise.all().
          return [responseDone, handlerDone];
      }
      async _getResponse(handler, request, event) {
          await handler.runCallbacks('handlerWillStart', { event, request });
          let response = undefined;
          try {
              response = await this._handle(request, handler);
              // The "official" Strategy subclasses all throw this error automatically,
              // but in case a third-party Strategy doesn't, ensure that we have a
              // consistent failure when there's no response or an error response.
              if (!response || response.type === 'error') {
                  throw new WorkboxError_WorkboxError('no-response', { url: request.url });
              }
          }
          catch (error) {
              for (const callback of handler.iterateCallbacks('handlerDidError')) {
                  response = await callback({ error, event, request });
                  if (response) {
                      break;
                  }
              }
              if (!response) {
                  throw error;
              }
              else if (false) {}
          }
          for (const callback of handler.iterateCallbacks('handlerWillRespond')) {
              response = await callback({ event, request, response });
          }
          return response;
      }
      async _awaitComplete(responseDone, handler, request, event) {
          let response;
          let error;
          try {
              response = await responseDone;
          }
          catch (error) {
              // Ignore errors, as response errors should be caught via the `response`
              // promise above. The `done` promise will only throw for errors in
              // promises passed to `handler.waitUntil()`.
          }
          try {
              await handler.runCallbacks('handlerDidRespond', {
                  event,
                  request,
                  response,
              });
              await handler.doneWaiting();
          }
          catch (waitUntilError) {
              error = waitUntilError;
          }
          await handler.runCallbacks('handlerDidComplete', {
              event,
              request,
              response,
              error,
          });
          handler.destroy();
          if (error) {
              throw error;
          }
      }
  }
  
  /**
   * Classes extending the `Strategy` based class should implement this method,
   * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
   * arg to perform all fetching and cache logic, which will ensure all relevant
   * cache, cache options, fetch options and plugins are used (per the current
   * strategy instance).
   *
   * @name _handle
   * @instance
   * @abstract
   * @function
   * @param {Request} request
   * @param {module:workbox-strategies.StrategyHandler} handler
   * @return {Promise<Response>}
   *
   * @memberof module:workbox-strategies.Strategy
   */
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/utils/messages.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  const messages_messages = {
      strategyStart: (strategyName, request) => `Using ${strategyName} to respond to '${getFriendlyURL(request.url)}'`,
      printFinalResponse: (response) => {
          if (response) {
              logger.groupCollapsed(`View the final response here.`);
              logger.log(response || '[No response returned]');
              logger.groupEnd();
          }
      },
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheFirst.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  /**
   * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
   * request strategy.
   *
   * A cache first strategy is useful for assets that have been revisioned,
   * such as URLs like `/styles/example.a8f5f1.css`, since they
   * can be cached for long periods of time.
   *
   * If the network request fails, and there is no cache match, this will throw
   * a `WorkboxError` exception.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-strategies
   */
  class CacheFirst_CacheFirst extends Strategy_Strategy {
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {module:workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          const logs = [];
          if (false) {}
          let response = await handler.cacheMatch(request);
          let error;
          if (!response) {
              if (false) {}
              try {
                  response = await handler.fetchAndCachePut(request);
              }
              catch (err) {
                  error = err;
              }
              if (false) {}
          }
          else {
              if (false) {}
          }
          if (false) {}
          if (!response) {
              throw new WorkboxError_WorkboxError('no-response', { url: request.url, error });
          }
          return response;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheOnly.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  /**
   * An implementation of a
   * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
   * request strategy.
   *
   * This class is useful if you want to take advantage of any
   * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
   *
   * If there is no cache match, this will throw a `WorkboxError` exception.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-strategies
   */
  class CacheOnly_CacheOnly extends Strategy_Strategy {
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {module:workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          if (false) {}
          const response = await handler.cacheMatch(request);
          if (false) {}
          if (!response) {
              throw new WorkboxError_WorkboxError('no-response', { url: request.url });
          }
          return response;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  const cacheOkAndOpaquePlugin = {
      /**
       * Returns a valid response (to allow caching) if the status is 200 (OK) or
       * 0 (opaque).
       *
       * @param {Object} options
       * @param {Response} options.response
       * @return {Response|null}
       *
       * @private
       */
      cacheWillUpdate: async ({ response }) => {
          if (response.status === 200 || response.status === 0) {
              return response;
          }
          return null;
      },
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkFirst.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  /**
   * An implementation of a
   * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
   * request strategy.
   *
   * By default, this strategy will cache responses with a 200 status code as
   * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
   * Opaque responses are are cross-origin requests where the response doesn't
   * support [CORS]{@link https://enable-cors.org/}.
   *
   * If the network request fails, and there is no cache match, this will throw
   * a `WorkboxError` exception.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-strategies
   */
  class NetworkFirst_NetworkFirst extends Strategy_Strategy {
      /**
       * @param {Object} [options]
       * @param {string} [options.cacheName Cache name to store and retrieve
       * requests. Defaults to cache names provided by
       * [workbox-core]{@link module:workbox-core.cacheNames}.
       * @param {Array<Object>} [options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} [options.fetchOptions Values passed along to the
       * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
       * of all fetch() requests made by this strategy.
       * @param {Object} [options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
       * @param {number} [options.networkTimeoutSeconds] If set, any network requests
       * that fail to respond within the timeout will fallback to the cache.
       *
       * This option can be used to combat
       * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
       * scenarios.
       */
      constructor(options = {}) {
          super(options);
          // If this instance contains no plugins with a 'cacheWillUpdate' callback,
          // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
          if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
              this.plugins.unshift(cacheOkAndOpaquePlugin);
          }
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
          if (false) {}
      }
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {module:workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          const logs = [];
          if (false) {}
          const promises = [];
          let timeoutId;
          if (this._networkTimeoutSeconds) {
              const { id, promise } = this._getTimeoutPromise({ request, logs, handler });
              timeoutId = id;
              promises.push(promise);
          }
          const networkPromise = this._getNetworkPromise({ timeoutId, request, logs, handler });
          promises.push(networkPromise);
          for (const promise of promises) {
              handler.waitUntil(promise);
          }
          // Promise.race() will resolve as soon as the first promise resolves.
          let response = await Promise.race(promises);
          // If Promise.race() resolved with null, it might be due to a network
          // timeout + a cache miss. If that were to happen, we'd rather wait until
          // the networkPromise resolves instead of returning null.
          // Note that it's fine to await an already-resolved promise, so we don't
          // have to check to see if it's still "in flight".
          if (!response) {
              response = await networkPromise;
          }
          if (false) {}
          if (!response) {
              throw new WorkboxError_WorkboxError('no-response', { url: request.url });
          }
          return response;
      }
      /**
       * @param {Object} options
       * @param {Request} options.request
       * @param {Array} options.logs A reference to the logs array
       * @param {Event} options.event
       * @return {Promise<Response>}
       *
       * @private
       */
      _getTimeoutPromise({ request, logs, handler }) {
          let timeoutId;
          const timeoutPromise = new Promise((resolve) => {
              const onNetworkTimeout = async () => {
                  if (false) {}
                  resolve(await handler.cacheMatch(request));
              };
              timeoutId = setTimeout(onNetworkTimeout, this._networkTimeoutSeconds * 1000);
          });
          return {
              promise: timeoutPromise,
              id: timeoutId,
          };
      }
      /**
       * @param {Object} options
       * @param {number|undefined} options.timeoutId
       * @param {Request} options.request
       * @param {Array} options.logs A reference to the logs Array.
       * @param {Event} options.event
       * @return {Promise<Response>}
       *
       * @private
       */
      async _getNetworkPromise({ timeoutId, request, logs, handler }) {
          let error;
          let response;
          try {
              response = await handler.fetchAndCachePut(request);
          }
          catch (fetchError) {
              error = fetchError;
          }
          if (timeoutId) {
              clearTimeout(timeoutId);
          }
          if (false) {}
          if (error || !response) {
              response = await handler.cacheMatch(request);
              if (false) {}
          }
          return response;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkOnly.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  /**
   * An implementation of a
   * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
   * request strategy.
   *
   * This class is useful if you want to take advantage of any
   * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
   *
   * If the network request fails, this will throw a `WorkboxError` exception.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-strategies
   */
  class NetworkOnly_NetworkOnly extends Strategy_Strategy {
      /**
       * @param {Object} [options]
       * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} [options.fetchOptions] Values passed along to the
       * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
       * of all fetch() requests made by this strategy.
       * @param {number} [options.networkTimeoutSeconds] If set, any network requests
       * that fail to respond within the timeout will result in a network error.
       */
      constructor(options = {}) {
          super(options);
          this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
      }
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {module:workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          if (false) {}
          let error = undefined;
          let response;
          try {
              const promises = [handler.fetch(request)];
              if (this._networkTimeoutSeconds) {
                  const timeoutPromise = timeout(this._networkTimeoutSeconds * 1000);
                  promises.push(timeoutPromise);
              }
              response = await Promise.race(promises);
              if (!response) {
                  throw new Error(`Timed out the network response after ` +
                      `${this._networkTimeoutSeconds} seconds.`);
              }
          }
          catch (err) {
              error = err;
          }
          if (false) {}
          if (!response) {
              throw new WorkboxError_WorkboxError('no-response', { url: request.url, error });
          }
          return response;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/StaleWhileRevalidate.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  /**
   * An implementation of a
   * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
   * request strategy.
   *
   * Resources are requested from both the cache and the network in parallel.
   * The strategy will respond with the cached version if available, otherwise
   * wait for the network response. The cache is updated with the network response
   * with each successful request.
   *
   * By default, this strategy will cache responses with a 200 status code as
   * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
   * Opaque responses are cross-origin requests where the response doesn't
   * support [CORS]{@link https://enable-cors.org/}.
   *
   * If the network request fails, and there is no cache match, this will throw
   * a `WorkboxError` exception.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-strategies
   */
  class StaleWhileRevalidate_StaleWhileRevalidate extends Strategy_Strategy {
      /**
       * @param {Object} options
       * @param {string} options.cacheName Cache name to store and retrieve
       * requests. Defaults to cache names provided by
       * [workbox-core]{@link module:workbox-core.cacheNames}.
       * @param {Array<Object>} options.plugins [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} options.fetchOptions Values passed along to the
       * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
       * of all fetch() requests made by this strategy.
       * @param {Object} options.matchOptions [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
       */
      constructor(options) {
          super(options);
          // If this instance contains no plugins with a 'cacheWillUpdate' callback,
          // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.
          if (!this.plugins.some((p) => 'cacheWillUpdate' in p)) {
              this.plugins.unshift(cacheOkAndOpaquePlugin);
          }
      }
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {module:workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          const logs = [];
          if (false) {}
          const fetchAndCachePromise = handler
              .fetchAndCachePut(request)
              .catch(() => {
              // Swallow this error because a 'no-response' error will be thrown in
              // main handler return flow. This will be in the `waitUntil()` flow.
          });
          let response = await handler.cacheMatch(request);
          let error;
          if (response) {
              if (false) {}
          }
          else {
              if (false) {}
              try {
                  // NOTE(philipwalton): Really annoying that we have to type cast here.
                  // https://github.com/microsoft/TypeScript/issues/20006
                  response = await fetchAndCachePromise;
              }
              catch (err) {
                  error = err;
              }
          }
          if (false) {}
          if (!response) {
              throw new WorkboxError_WorkboxError('no-response', { url: request.url, error });
          }
          return response;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/index.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  
  /**
   * There are common caching strategies that most service workers will need
   * and use. This module provides simple implementations of these strategies.
   *
   * @module workbox-strategies
   */
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-strategies/index.mjs
  
  // EXTERNAL MODULE: ./node_modules/workbox-routing/_version.js
  var workbox_routing_version = __webpack_require__("5tLK");
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/utils/constants.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * The default HTTP method, 'GET', used when there's no specific method
   * configured for a route.
   *
   * @type {string}
   *
   * @private
   */
  const defaultMethod = 'GET';
  /**
   * The list of valid HTTP methods associated with requests that could be routed.
   *
   * @type {Array<string>}
   *
   * @private
   */
  const validMethods = [
      'DELETE',
      'GET',
      'HEAD',
      'PATCH',
      'POST',
      'PUT',
  ];
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/utils/normalizeHandler.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * @param {function()|Object} handler Either a function, or an object with a
   * 'handle' method.
   * @return {Object} An object with a handle method.
   *
   * @private
   */
  const normalizeHandler = (handler) => {
      if (handler && typeof handler === 'object') {
          if (false) {}
          return handler;
      }
      else {
          if (false) {}
          return { handle: handler };
      }
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/Route.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  /**
   * A `Route` consists of a pair of callback functions, "match" and "handler".
   * The "match" callback determine if a route should be used to "handle" a
   * request by returning a non-falsy value if it can. The "handler" callback
   * is called when there is a match and should return a Promise that resolves
   * to a `Response`.
   *
   * @memberof module:workbox-routing
   */
  class Route_Route {
      /**
       * Constructor for Route class.
       *
       * @param {module:workbox-routing~matchCallback} match
       * A callback function that determines whether the route matches a given
       * `fetch` event by returning a non-falsy value.
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resolving to a Response.
       * @param {string} [method='GET'] The HTTP method to match the Route
       * against.
       */
      constructor(match, handler, method = defaultMethod) {
          if (false) {}
          // These values are referenced directly by Router so cannot be
          // altered by minificaton.
          this.handler = normalizeHandler(handler);
          this.match = match;
          this.method = method;
      }
      /**
       *
       * @param {module:workbox-routing-handlerCallback} handler A callback
       * function that returns a Promise resolving to a Response
       */
      setCatchHandler(handler) {
          this.catchHandler = normalizeHandler(handler);
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/NavigationRoute.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  /**
   * NavigationRoute makes it easy to create a
   * [Route]{@link module:workbox-routing.Route} that matches for browser
   * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
   *
   * It will only match incoming Requests whose
   * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
   * is set to `navigate`.
   *
   * You can optionally only apply this route to a subset of navigation requests
   * by using one or both of the `denylist` and `allowlist` parameters.
   *
   * @memberof module:workbox-routing
   * @extends module:workbox-routing.Route
   */
  class NavigationRoute_NavigationRoute extends Route_Route {
      /**
       * If both `denylist` and `allowlist` are provided, the `denylist` will
       * take precedence and the request will not match this route.
       *
       * The regular expressions in `allowlist` and `denylist`
       * are matched against the concatenated
       * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
       * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
       * portions of the requested URL.
       *
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       * @param {Object} options
       * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
       * the route will not handle the request (even if a allowlist RegExp matches).
       * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
       * match the URL's pathname and search parameter, the route will handle the
       * request (assuming the denylist doesn't match).
       */
      constructor(handler, { allowlist = [/./], denylist = [] } = {}) {
          if (false) {}
          super((options) => this._match(options), handler);
          this._allowlist = allowlist;
          this._denylist = denylist;
      }
      /**
       * Routes match handler.
       *
       * @param {Object} options
       * @param {URL} options.url
       * @param {Request} options.request
       * @return {boolean}
       *
       * @private
       */
      _match({ url, request }) {
          if (request && request.mode !== 'navigate') {
              return false;
          }
          const pathnameAndSearch = url.pathname + url.search;
          for (const regExp of this._denylist) {
              if (regExp.test(pathnameAndSearch)) {
                  if (false) {}
                  return false;
              }
          }
          if (this._allowlist.some((regExp) => regExp.test(pathnameAndSearch))) {
              if (false) {}
              return true;
          }
          if (false) {}
          return false;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/RegExpRoute.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  /**
   * RegExpRoute makes it easy to create a regular expression based
   * [Route]{@link module:workbox-routing.Route}.
   *
   * For same-origin requests the RegExp only needs to match part of the URL. For
   * requests against third-party servers, you must define a RegExp that matches
   * the start of the URL.
   *
   * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
   *
   * @memberof module:workbox-routing
   * @extends module:workbox-routing.Route
   */
  class RegExpRoute_RegExpRoute extends Route_Route {
      /**
       * If the regular expression contains
       * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
       * the captured values will be passed to the
       * [handler's]{@link module:workbox-routing~handlerCallback} `params`
       * argument.
       *
       * @param {RegExp} regExp The regular expression to match against URLs.
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       * @param {string} [method='GET'] The HTTP method to match the Route
       * against.
       */
      constructor(regExp, handler, method) {
          if (false) {}
          const match = ({ url }) => {
              const result = regExp.exec(url.href);
              // Return immediately if there's no match.
              if (!result) {
                  return;
              }
              // Require that the match start at the first character in the URL string
              // if it's a cross-origin request.
              // See https://github.com/GoogleChrome/workbox/issues/281 for the context
              // behind this behavior.
              if ((url.origin !== location.origin) && (result.index !== 0)) {
                  if (false) {}
                  return;
              }
              // If the route matches, but there aren't any capture groups defined, then
              // this will return [], which is truthy and therefore sufficient to
              // indicate a match.
              // If there are capture groups, then it will return their values.
              return result.slice(1);
          };
          super(match, handler, method);
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/Router.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  /**
   * The Router can be used to process a FetchEvent through one or more
   * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
   * a matching route exists.
   *
   * If no route matches a given a request, the Router will use a "default"
   * handler if one is defined.
   *
   * Should the matching Route throw an error, the Router will use a "catch"
   * handler if one is defined to gracefully deal with issues and respond with a
   * Request.
   *
   * If a request matches multiple routes, the **earliest** registered route will
   * be used to respond to the request.
   *
   * @memberof module:workbox-routing
   */
  class Router_Router {
      /**
       * Initializes a new Router.
       */
      constructor() {
          this._routes = new Map();
          this._defaultHandlerMap = new Map();
      }
      /**
       * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
       * method name ('GET', etc.) to an array of all the corresponding `Route`
       * instances that are registered.
       */
      get routes() {
          return this._routes;
      }
      /**
       * Adds a fetch event listener to respond to events when a route matches
       * the event's request.
       */
      addFetchListener() {
          // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
          self.addEventListener('fetch', ((event) => {
              const { request } = event;
              const responsePromise = this.handleRequest({ request, event });
              if (responsePromise) {
                  event.respondWith(responsePromise);
              }
          }));
      }
      /**
       * Adds a message event listener for URLs to cache from the window.
       * This is useful to cache resources loaded on the page prior to when the
       * service worker started controlling it.
       *
       * The format of the message data sent from the window should be as follows.
       * Where the `urlsToCache` array may consist of URL strings or an array of
       * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
       *
       * ```
       * {
       *   type: 'CACHE_URLS',
       *   payload: {
       *     urlsToCache: [
       *       './script1.js',
       *       './script2.js',
       *       ['./script3.js', {mode: 'no-cors'}],
       *     ],
       *   },
       * }
       * ```
       */
      addCacheListener() {
          // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
          self.addEventListener('message', ((event) => {
              if (event.data && event.data.type === 'CACHE_URLS') {
                  const { payload } = event.data;
                  if (false) {}
                  const requestPromises = Promise.all(payload.urlsToCache.map((entry) => {
                      if (typeof entry === 'string') {
                          entry = [entry];
                      }
                      const request = new Request(...entry);
                      return this.handleRequest({ request, event });
                      // TODO(philipwalton): TypeScript errors without this typecast for
                      // some reason (probably a bug). The real type here should work but
                      // doesn't: `Array<Promise<Response> | undefined>`.
                  })); // TypeScript
                  event.waitUntil(requestPromises);
                  // If a MessageChannel was used, reply to the message on success.
                  if (event.ports && event.ports[0]) {
                      requestPromises.then(() => event.ports[0].postMessage(true));
                  }
              }
          }));
      }
      /**
       * Apply the routing rules to a FetchEvent object to get a Response from an
       * appropriate Route's handler.
       *
       * @param {Object} options
       * @param {Request} options.request The request to handle.
       * @param {ExtendableEvent} options.event The event that triggered the
       *     request.
       * @return {Promise<Response>|undefined} A promise is returned if a
       *     registered route can handle the request. If there is no matching
       *     route and there's no `defaultHandler`, `undefined` is returned.
       */
      handleRequest({ request, event }) {
          if (false) {}
          const url = new URL(request.url, location.href);
          if (!url.protocol.startsWith('http')) {
              if (false) {}
              return;
          }
          const sameOrigin = url.origin === location.origin;
          const { params, route } = this.findMatchingRoute({
              event,
              request,
              sameOrigin,
              url,
          });
          let handler = route && route.handler;
          const debugMessages = [];
          if (false) {}
          // If we don't have a handler because there was no matching route, then
          // fall back to defaultHandler if that's defined.
          const method = request.method;
          if (!handler && this._defaultHandlerMap.has(method)) {
              if (false) {}
              handler = this._defaultHandlerMap.get(method);
          }
          if (!handler) {
              if (false) {}
              return;
          }
          if (false) {}
          // Wrap in try and catch in case the handle method throws a synchronous
          // error. It should still callback to the catch handler.
          let responsePromise;
          try {
              responsePromise = handler.handle({ url, request, event, params });
          }
          catch (err) {
              responsePromise = Promise.reject(err);
          }
          // Get route's catch handler, if it exists
          const catchHandler = route && route.catchHandler;
          if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
              responsePromise = responsePromise.catch(async (err) => {
                  // If there's a route catch handler, process that first
                  if (catchHandler) {
                      if (false) {}
                      try {
                          return await catchHandler.handle({ url, request, event, params });
                      }
                      catch (catchErr) {
                          err = catchErr;
                      }
                  }
                  if (this._catchHandler) {
                      if (false) {}
                      return this._catchHandler.handle({ url, request, event });
                  }
                  throw err;
              });
          }
          return responsePromise;
      }
      /**
       * Checks a request and URL (and optionally an event) against the list of
       * registered routes, and if there's a match, returns the corresponding
       * route along with any params generated by the match.
       *
       * @param {Object} options
       * @param {URL} options.url
       * @param {Request} options.request The request to match.
       * @param {Event} options.event The corresponding event.
       * @return {Object} An object with `route` and `params` properties.
       *     They are populated if a matching route was found or `undefined`
       *     otherwise.
       */
      findMatchingRoute({ url, sameOrigin, request, event }) {
          const routes = this._routes.get(request.method) || [];
          for (const route of routes) {
              let params;
              const matchResult = route.match({ url, sameOrigin, request, event });
              if (matchResult) {
                  if (false) {}
                  // See https://github.com/GoogleChrome/workbox/issues/2079
                  params = matchResult;
                  if (Array.isArray(matchResult) && matchResult.length === 0) {
                      // Instead of passing an empty array in as params, use undefined.
                      params = undefined;
                  }
                  else if ((matchResult.constructor === Object &&
                      Object.keys(matchResult).length === 0)) {
                      // Instead of passing an empty object in as params, use undefined.
                      params = undefined;
                  }
                  else if (typeof matchResult === 'boolean') {
                      // For the boolean value true (rather than just something truth-y),
                      // don't set params.
                      // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
                      params = undefined;
                  }
                  // Return early if have a match.
                  return { route, params };
              }
          }
          // If no match was found above, return and empty object.
          return {};
      }
      /**
       * Define a default `handler` that's called when no routes explicitly
       * match the incoming request.
       *
       * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
       *
       * Without a default handler, unmatched requests will go against the
       * network as if there were no service worker present.
       *
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       * @param {string} [method='GET'] The HTTP method to associate with this
       * default handler. Each method has its own default.
       */
      setDefaultHandler(handler, method = defaultMethod) {
          this._defaultHandlerMap.set(method, normalizeHandler(handler));
      }
      /**
       * If a Route throws an error while handling a request, this `handler`
       * will be called and given a chance to provide a response.
       *
       * @param {module:workbox-routing~handlerCallback} handler A callback
       * function that returns a Promise resulting in a Response.
       */
      setCatchHandler(handler) {
          this._catchHandler = normalizeHandler(handler);
      }
      /**
       * Registers a route with the router.
       *
       * @param {module:workbox-routing.Route} route The route to register.
       */
      registerRoute(route) {
          if (false) {}
          if (!this._routes.has(route.method)) {
              this._routes.set(route.method, []);
          }
          // Give precedence to all of the earlier routes by adding this additional
          // route to the end of the array.
          this._routes.get(route.method).push(route);
      }
      /**
       * Unregisters a route with the router.
       *
       * @param {module:workbox-routing.Route} route The route to unregister.
       */
      unregisterRoute(route) {
          if (!this._routes.has(route.method)) {
              throw new WorkboxError_WorkboxError('unregister-route-but-not-found-with-method', {
                  method: route.method,
              });
          }
          const routeIndex = this._routes.get(route.method).indexOf(route);
          if (routeIndex > -1) {
              this._routes.get(route.method).splice(routeIndex, 1);
          }
          else {
              throw new WorkboxError_WorkboxError('unregister-route-route-not-registered');
          }
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  let getOrCreateDefaultRouter_defaultRouter;
  /**
   * Creates a new, singleton Router instance if one does not exist. If one
   * does already exist, that instance is returned.
   *
   * @private
   * @return {Router}
   */
  const getOrCreateDefaultRouter = () => {
      if (!getOrCreateDefaultRouter_defaultRouter) {
          getOrCreateDefaultRouter_defaultRouter = new Router_Router();
          // The helpers that use the default Router assume these listeners exist.
          getOrCreateDefaultRouter_defaultRouter.addFetchListener();
          getOrCreateDefaultRouter_defaultRouter.addCacheListener();
      }
      return getOrCreateDefaultRouter_defaultRouter;
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/registerRoute.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  /**
   * Easily register a RegExp, string, or function with a caching
   * strategy to a singleton Router instance.
   *
   * This method will generate a Route for you if needed and
   * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
   *
   * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
   * If the capture param is a `Route`, all other arguments will be ignored.
   * @param {module:workbox-routing~handlerCallback} [handler] A callback
   * function that returns a Promise resulting in a Response. This parameter
   * is required if `capture` is not a `Route` object.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   * @return {module:workbox-routing.Route} The generated `Route`(Useful for
   * unregistering).
   *
   * @memberof module:workbox-routing
   */
  function registerRoute(capture, handler, method) {
      let route;
      if (typeof capture === 'string') {
          const captureUrl = new URL(capture, location.href);
          if (false) {}
          const matchCallback = ({ url }) => {
              if (false) {}
              return url.href === captureUrl.href;
          };
          // If `capture` is a string then `handler` and `method` must be present.
          route = new Route_Route(matchCallback, handler, method);
      }
      else if (capture instanceof RegExp) {
          // If `capture` is a `RegExp` then `handler` and `method` must be present.
          route = new RegExpRoute_RegExpRoute(capture, handler, method);
      }
      else if (typeof capture === 'function') {
          // If `capture` is a function then `handler` and `method` must be present.
          route = new Route_Route(capture, handler, method);
      }
      else if (capture instanceof Route_Route) {
          route = capture;
      }
      else {
          throw new WorkboxError_WorkboxError('unsupported-route-type', {
              moduleName: 'workbox-routing',
              funcName: 'registerRoute',
              paramName: 'capture',
          });
      }
      const defaultRouter = getOrCreateDefaultRouter();
      defaultRouter.registerRoute(route);
      return route;
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/setCatchHandler.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * If a Route throws an error while handling a request, this `handler`
   * will be called and given a chance to provide a response.
   *
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   *
   * @memberof module:workbox-routing
   */
  function setCatchHandler(handler) {
      const defaultRouter = getOrCreateDefaultRouter();
      defaultRouter.setCatchHandler(handler);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/setDefaultHandler.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Define a default `handler` that's called when no routes explicitly
   * match the incoming request.
   *
   * Without a default handler, unmatched requests will go against the
   * network as if there were no service worker present.
   *
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   *
   * @memberof module:workbox-routing
   */
  function setDefaultHandler(handler) {
      const defaultRouter = getOrCreateDefaultRouter();
      defaultRouter.setDefaultHandler(handler);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/index.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  
  /**
   * @module workbox-routing
   */
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-routing/index.mjs
  
  // EXTERNAL MODULE: ./node_modules/workbox-precaching/_version.js
  var workbox_precaching_version = __webpack_require__("xwD5");
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/createCacheKey.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  // Name of the search parameter used to store revision info.
  const REVISION_SEARCH_PARAM = '__WB_REVISION__';
  /**
   * Converts a manifest entry into a versioned URL suitable for precaching.
   *
   * @param {Object|string} entry
   * @return {string} A URL with versioning info.
   *
   * @private
   * @memberof module:workbox-precaching
   */
  function createCacheKey(entry) {
      if (!entry) {
          throw new WorkboxError_WorkboxError('add-to-cache-list-unexpected-type', { entry });
      }
      // If a precache manifest entry is a string, it's assumed to be a versioned
      // URL, like '/app.abcd1234.js'. Return as-is.
      if (typeof entry === 'string') {
          const urlObject = new URL(entry, location.href);
          return {
              cacheKey: urlObject.href,
              url: urlObject.href,
          };
      }
      const { revision, url } = entry;
      if (!url) {
          throw new WorkboxError_WorkboxError('add-to-cache-list-unexpected-type', { entry });
      }
      // If there's just a URL and no revision, then it's also assumed to be a
      // versioned URL.
      if (!revision) {
          const urlObject = new URL(url, location.href);
          return {
              cacheKey: urlObject.href,
              url: urlObject.href,
          };
      }
      // Otherwise, construct a properly versioned URL using the custom Workbox
      // search parameter along with the revision info.
      const cacheKeyURL = new URL(url, location.href);
      const originalURL = new URL(url, location.href);
      cacheKeyURL.searchParams.set(REVISION_SEARCH_PARAM, revision);
      return {
          cacheKey: cacheKeyURL.href,
          url: originalURL.href,
      };
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheInstallReportPlugin.js
  /*
    Copyright 2020 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * A plugin, designed to be used with PrecacheController, to determine the
   * of assets that were updated (or not updated) during the install event.
   *
   * @private
   */
  class PrecacheInstallReportPlugin {
      constructor() {
          this.updatedURLs = [];
          this.notUpdatedURLs = [];
          this.handlerWillStart = async ({ request, state, }) => {
              // TODO: `state` should never be undefined...
              if (state) {
                  state.originalRequest = request;
              }
          };
          this.cachedResponseWillBeUsed = async ({ event, state, cachedResponse, }) => {
              if (event.type === 'install') {
                  // TODO: `state` should never be undefined...
                  const url = state.originalRequest.url;
                  if (cachedResponse) {
                      this.notUpdatedURLs.push(url);
                  }
                  else {
                      this.updatedURLs.push(url);
                  }
              }
              return cachedResponse;
          };
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/PrecacheCacheKeyPlugin.js
  /*
    Copyright 2020 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * A plugin, designed to be used with PrecacheController, to translate URLs into
   * the corresponding cache key, based on the current revision info.
   *
   * @private
   */
  class PrecacheCacheKeyPlugin {
      constructor({ precacheController }) {
          this.cacheKeyWillBeUsed = async ({ request, params, }) => {
              const cacheKey = params && params.cacheKey ||
                  this._precacheController.getCacheKeyForURL(request.url);
              return cacheKey ? new Request(cacheKey) : request;
          };
          this._precacheController = precacheController;
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printCleanupDetails.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * @param {string} groupTitle
   * @param {Array<string>} deletedURLs
   *
   * @private
   */
  const logGroup = (groupTitle, deletedURLs) => {
      logger.groupCollapsed(groupTitle);
      for (const url of deletedURLs) {
          logger.log(url);
      }
      logger.groupEnd();
  };
  /**
   * @param {Array<string>} deletedURLs
   *
   * @private
   * @memberof module:workbox-precaching
   */
  function printCleanupDetails(deletedURLs) {
      const deletionCount = deletedURLs.length;
      if (deletionCount > 0) {
          logger.groupCollapsed(`During precaching cleanup, ` +
              `${deletionCount} cached ` +
              `request${deletionCount === 1 ? ' was' : 's were'} deleted.`);
          logGroup('Deleted Cache Requests', deletedURLs);
          logger.groupEnd();
      }
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/printInstallDetails.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * @param {string} groupTitle
   * @param {Array<string>} urls
   *
   * @private
   */
  function _nestedGroup(groupTitle, urls) {
      if (urls.length === 0) {
          return;
      }
      logger.groupCollapsed(groupTitle);
      for (const url of urls) {
          logger.log(url);
      }
      logger.groupEnd();
  }
  /**
   * @param {Array<string>} urlsToPrecache
   * @param {Array<string>} urlsAlreadyPrecached
   *
   * @private
   * @memberof module:workbox-precaching
   */
  function printInstallDetails(urlsToPrecache, urlsAlreadyPrecached) {
      const precachedCount = urlsToPrecache.length;
      const alreadyPrecachedCount = urlsAlreadyPrecached.length;
      if (precachedCount || alreadyPrecachedCount) {
          let message = `Precaching ${precachedCount} file${precachedCount === 1 ? '' : 's'}.`;
          if (alreadyPrecachedCount > 0) {
              message += ` ${alreadyPrecachedCount} ` +
                  `file${alreadyPrecachedCount === 1 ? ' is' : 's are'} already cached.`;
          }
          logger.groupCollapsed(message);
          _nestedGroup(`View newly precached URLs.`, urlsToPrecache);
          _nestedGroup(`View previously precached URLs.`, urlsAlreadyPrecached);
          logger.groupEnd();
      }
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheStrategy.js
  /*
    Copyright 2020 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  /**
   * A [Strategy]{@link module:workbox-strategies.Strategy} implementation
   * specifically designed to work with
   * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
   * to both cache and fetch precached assets.
   *
   * Note: an instance of this class is created automatically when creating a
   * `PrecacheController`; it's generally not necessary to create this yourself.
   *
   * @extends module:workbox-strategies.Strategy
   * @memberof module:workbox-precaching
   */
  class PrecacheStrategy_PrecacheStrategy extends Strategy_Strategy {
      /**
       *
       * @param {Object} [options]
       * @param {string} [options.cacheName] Cache name to store and retrieve
       * requests. Defaults to the cache names provided by
       * [workbox-core]{@link module:workbox-core.cacheNames}.
       * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
       * to use in conjunction with this caching strategy.
       * @param {Object} [options.fetchOptions] Values passed along to the
       * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
       * of all fetch() requests made by this strategy.
       * @param {Object} [options.matchOptions] The
       * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
       * for any `cache.match()` or `cache.put()` calls made by this strategy.
       * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
       * get the response from the network if there's a precache miss.
       */
      constructor(options = {}) {
          options.cacheName = cacheNames.getPrecacheName(options.cacheName);
          super(options);
          this._fallbackToNetwork = options.fallbackToNetwork === false ? false : true;
          // Redirected responses cannot be used to satisfy a navigation request, so
          // any redirected response must be "copied" rather than cloned, so the new
          // response doesn't contain the `redirected` flag. See:
          // https://bugs.chromium.org/p/chromium/issues/detail?id=669363&desc=2#c1
          this.plugins.push(PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin);
      }
      /**
       * @private
       * @param {Request|string} request A request to run this strategy for.
       * @param {module:workbox-strategies.StrategyHandler} handler The event that
       *     triggered the request.
       * @return {Promise<Response>}
       */
      async _handle(request, handler) {
          const response = await handler.cacheMatch(request);
          if (!response) {
              // If this is an `install` event then populate the cache. If this is a
              // `fetch` event (or any other event) then respond with the cached
              // response.
              if (handler.event && handler.event.type === 'install') {
                  return await this._handleInstall(request, handler);
              }
              return await this._handleFetch(request, handler);
          }
          return response;
      }
      async _handleFetch(request, handler) {
          let response;
          // Fall back to the network if we don't have a cached response
          // (perhaps due to manual cache cleanup).
          if (this._fallbackToNetwork) {
              if (false) {}
              response = await handler.fetch(request);
          }
          else {
              // This shouldn't normally happen, but there are edge cases:
              // https://github.com/GoogleChrome/workbox/issues/1441
              throw new WorkboxError_WorkboxError('missing-precache-entry', {
                  cacheName: this.cacheName,
                  url: request.url,
              });
          }
          if (false) {}
          return response;
      }
      async _handleInstall(request, handler) {
          this._useDefaultCacheabilityPluginIfNeeded();
          const response = await handler.fetch(request);
          // Make sure we defer cachePut() until after we know the response
          // should be cached; see https://github.com/GoogleChrome/workbox/issues/2737
          const wasCached = await handler.cachePut(request, response.clone());
          if (!wasCached) {
              // Throwing here will lead to the `install` handler failing, which
              // we want to do if *any* of the responses aren't safe to cache.
              throw new WorkboxError_WorkboxError('bad-precaching-response', {
                  url: request.url,
                  status: response.status,
              });
          }
          return response;
      }
      /**
       * This method is complex, as there a number of things to account for:
       *
       * The `plugins` array can be set at construction, and/or it might be added to
       * to at any time before the strategy is used.
       *
       * At the time the strategy is used (i.e. during an `install` event), there
       * needs to be at least one plugin that implements `cacheWillUpdate` in the
       * array, other than `copyRedirectedCacheableResponsesPlugin`.
       *
       * - If this method is called and there are no suitable `cacheWillUpdate`
       * plugins, we need to add `defaultPrecacheCacheabilityPlugin`.
       *
       * - If this method is called and there is exactly one `cacheWillUpdate`, then
       * we don't have to do anything (this might be a previously added
       * `defaultPrecacheCacheabilityPlugin`, or it might be a custom plugin).
       *
       * - If this method is called and there is more than one `cacheWillUpdate`,
       * then we need to check if one is `defaultPrecacheCacheabilityPlugin`. If so,
       * we need to remove it. (This situation is unlikely, but it could happen if
       * the strategy is used multiple times, the first without a `cacheWillUpdate`,
       * and then later on after manually adding a custom `cacheWillUpdate`.)
       *
       * See https://github.com/GoogleChrome/workbox/issues/2737 for more context.
       *
       * @private
       */
      _useDefaultCacheabilityPluginIfNeeded() {
          let defaultPluginIndex = null;
          let cacheWillUpdatePluginCount = 0;
          for (const [index, plugin] of this.plugins.entries()) {
              // Ignore the copy redirected plugin when determining what to do.
              if (plugin === PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin) {
                  continue;
              }
              // Save the default plugin's index, in case it needs to be removed.
              if (plugin === PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin) {
                  defaultPluginIndex = index;
              }
              if (plugin.cacheWillUpdate) {
                  cacheWillUpdatePluginCount++;
              }
          }
          if (cacheWillUpdatePluginCount === 0) {
              this.plugins.push(PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin);
          }
          else if (cacheWillUpdatePluginCount > 1 && defaultPluginIndex !== null) {
              // Only remove the default plugin; multiple custom plugins are allowed.
              this.plugins.splice(defaultPluginIndex, 1);
          }
          // Nothing needs to be done if cacheWillUpdatePluginCount is 1
      }
  }
  PrecacheStrategy_PrecacheStrategy.defaultPrecacheCacheabilityPlugin = {
      async cacheWillUpdate({ response }) {
          if (!response || response.status >= 400) {
              return null;
          }
          return response;
      }
  };
  PrecacheStrategy_PrecacheStrategy.copyRedirectedCacheableResponsesPlugin = {
      async cacheWillUpdate({ response }) {
          return response.redirected ? await copyResponse(response) : response;
      }
  };
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheController.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  
  
  
  
  
  /**
   * Performs efficient precaching of assets.
   *
   * @memberof module:workbox-precaching
   */
  class PrecacheController_PrecacheController {
      /**
       * Create a new PrecacheController.
       *
       * @param {Object} [options]
       * @param {string} [options.cacheName] The cache to use for precaching.
       * @param {string} [options.plugins] Plugins to use when precaching as well
       * as responding to fetch events for precached assets.
       * @param {boolean} [options.fallbackToNetwork=true] Whether to attempt to
       * get the response from the network if there's a precache miss.
       */
      constructor({ cacheName, plugins = [], fallbackToNetwork = true } = {}) {
          this._urlsToCacheKeys = new Map();
          this._urlsToCacheModes = new Map();
          this._cacheKeysToIntegrities = new Map();
          this._strategy = new PrecacheStrategy_PrecacheStrategy({
              cacheName: cacheNames.getPrecacheName(cacheName),
              plugins: [
                  ...plugins,
                  new PrecacheCacheKeyPlugin({ precacheController: this }),
              ],
              fallbackToNetwork,
          });
          // Bind the install and activate methods to the instance.
          this.install = this.install.bind(this);
          this.activate = this.activate.bind(this);
      }
      /**
       * @type {module:workbox-precaching.PrecacheStrategy} The strategy created by this controller and
       * used to cache assets and respond to fetch events.
       */
      get strategy() {
          return this._strategy;
      }
      /**
       * Adds items to the precache list, removing any duplicates and
       * stores the files in the
       * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
       * worker installs.
       *
       * This method can be called multiple times.
       *
       * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
       */
      precache(entries) {
          this.addToCacheList(entries);
          if (!this._installAndActiveListenersAdded) {
              self.addEventListener('install', this.install);
              self.addEventListener('activate', this.activate);
              this._installAndActiveListenersAdded = true;
          }
      }
      /**
       * This method will add items to the precache list, removing duplicates
       * and ensuring the information is valid.
       *
       * @param {Array<module:workbox-precaching.PrecacheController.PrecacheEntry|string>} entries
       *     Array of entries to precache.
       */
      addToCacheList(entries) {
          if (false) {}
          const urlsToWarnAbout = [];
          for (const entry of entries) {
              // See https://github.com/GoogleChrome/workbox/issues/2259
              if (typeof entry === 'string') {
                  urlsToWarnAbout.push(entry);
              }
              else if (entry && entry.revision === undefined) {
                  urlsToWarnAbout.push(entry.url);
              }
              const { cacheKey, url } = createCacheKey(entry);
              const cacheMode = (typeof entry !== 'string' && entry.revision) ?
                  'reload' : 'default';
              if (this._urlsToCacheKeys.has(url) &&
                  this._urlsToCacheKeys.get(url) !== cacheKey) {
                  throw new WorkboxError_WorkboxError('add-to-cache-list-conflicting-entries', {
                      firstEntry: this._urlsToCacheKeys.get(url),
                      secondEntry: cacheKey,
                  });
              }
              if (typeof entry !== 'string' && entry.integrity) {
                  if (this._cacheKeysToIntegrities.has(cacheKey) &&
                      this._cacheKeysToIntegrities.get(cacheKey) !== entry.integrity) {
                      throw new WorkboxError_WorkboxError('add-to-cache-list-conflicting-integrities', {
                          url,
                      });
                  }
                  this._cacheKeysToIntegrities.set(cacheKey, entry.integrity);
              }
              this._urlsToCacheKeys.set(url, cacheKey);
              this._urlsToCacheModes.set(url, cacheMode);
              if (urlsToWarnAbout.length > 0) {
                  const warningMessage = `Workbox is precaching URLs without revision ` +
                      `info: ${urlsToWarnAbout.join(', ')}\nThis is generally NOT safe. ` +
                      `Learn more at https://bit.ly/wb-precache`;
                  if (true) {
                      // Use console directly to display this warning without bloating
                      // bundle sizes by pulling in all of the logger codebase in prod.
                      console.warn(warningMessage);
                  }
                  else {}
              }
          }
      }
      /**
       * Precaches new and updated assets. Call this method from the service worker
       * install event.
       *
       * Note: this method calls `event.waitUntil()` for you, so you do not need
       * to call it yourself in your event handlers.
       *
       * @param {Object} options
       * @param {Event} options.event The install event.
       * @return {Promise<module:workbox-precaching.InstallResult>}
       */
      install(event) {
          return waitUntil(event, async () => {
              const installReportPlugin = new PrecacheInstallReportPlugin();
              this.strategy.plugins.push(installReportPlugin);
              // Cache entries one at a time.
              // See https://github.com/GoogleChrome/workbox/issues/2528
              for (const [url, cacheKey] of this._urlsToCacheKeys) {
                  const integrity = this._cacheKeysToIntegrities.get(cacheKey);
                  const cacheMode = this._urlsToCacheModes.get(url);
                  const request = new Request(url, {
                      integrity,
                      cache: cacheMode,
                      credentials: 'same-origin',
                  });
                  await Promise.all(this.strategy.handleAll({
                      params: { cacheKey },
                      request,
                      event,
                  }));
              }
              const { updatedURLs, notUpdatedURLs } = installReportPlugin;
              if (false) {}
              return { updatedURLs, notUpdatedURLs };
          });
      }
      /**
       * Deletes assets that are no longer present in the current precache manifest.
       * Call this method from the service worker activate event.
       *
       * Note: this method calls `event.waitUntil()` for you, so you do not need
       * to call it yourself in your event handlers.
       *
       * @param {ExtendableEvent}
       * @return {Promise<module:workbox-precaching.CleanupResult>}
       */
      activate(event) {
          return waitUntil(event, async () => {
              const cache = await self.caches.open(this.strategy.cacheName);
              const currentlyCachedRequests = await cache.keys();
              const expectedCacheKeys = new Set(this._urlsToCacheKeys.values());
              const deletedURLs = [];
              for (const request of currentlyCachedRequests) {
                  if (!expectedCacheKeys.has(request.url)) {
                      await cache.delete(request);
                      deletedURLs.push(request.url);
                  }
              }
              if (false) {}
              return { deletedURLs };
          });
      }
      /**
       * Returns a mapping of a precached URL to the corresponding cache key, taking
       * into account the revision information for the URL.
       *
       * @return {Map<string, string>} A URL to cache key mapping.
       */
      getURLsToCacheKeys() {
          return this._urlsToCacheKeys;
      }
      /**
       * Returns a list of all the URLs that have been precached by the current
       * service worker.
       *
       * @return {Array<string>} The precached URLs.
       */
      getCachedURLs() {
          return [...this._urlsToCacheKeys.keys()];
      }
      /**
       * Returns the cache key used for storing a given URL. If that URL is
       * unversioned, like `/index.html', then the cache key will be the original
       * URL with a search parameter appended to it.
       *
       * @param {string} url A URL whose cache key you want to look up.
       * @return {string} The versioned URL that corresponds to a cache key
       * for the original URL, or undefined if that URL isn't precached.
       */
      getCacheKeyForURL(url) {
          const urlObject = new URL(url, location.href);
          return this._urlsToCacheKeys.get(urlObject.href);
      }
      /**
       * This acts as a drop-in replacement for
       * [`cache.match()`](https://developer.mozilla.org/en-US/docs/Web/API/Cache/match)
       * with the following differences:
       *
       * - It knows what the name of the precache is, and only checks in that cache.
       * - It allows you to pass in an "original" URL without versioning parameters,
       * and it will automatically look up the correct cache key for the currently
       * active revision of that URL.
       *
       * E.g., `matchPrecache('index.html')` will find the correct precached
       * response for the currently active service worker, even if the actual cache
       * key is `'/index.html?__WB_REVISION__=1234abcd'`.
       *
       * @param {string|Request} request The key (without revisioning parameters)
       * to look up in the precache.
       * @return {Promise<Response|undefined>}
       */
      async matchPrecache(request) {
          const url = request instanceof Request ? request.url : request;
          const cacheKey = this.getCacheKeyForURL(url);
          if (cacheKey) {
              const cache = await self.caches.open(this.strategy.cacheName);
              return cache.match(cacheKey);
          }
          return undefined;
      }
      /**
       * Returns a function that looks up `url` in the precache (taking into
       * account revision information), and returns the corresponding `Response`.
       *
       * @param {string} url The precached URL which will be used to lookup the
       * `Response`.
       * @return {module:workbox-routing~handlerCallback}
       */
      createHandlerBoundToURL(url) {
          const cacheKey = this.getCacheKeyForURL(url);
          if (!cacheKey) {
              throw new WorkboxError_WorkboxError('non-precached-url', { url });
          }
          return (options) => {
              options.request = new Request(url);
              options.params = { cacheKey, ...options.params };
              return this.strategy.handle(options);
          };
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/getOrCreatePrecacheController.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  let getOrCreatePrecacheController_precacheController;
  /**
   * @return {PrecacheController}
   * @private
   */
  const getOrCreatePrecacheController = () => {
      if (!getOrCreatePrecacheController_precacheController) {
          getOrCreatePrecacheController_precacheController = new PrecacheController_PrecacheController();
      }
      return getOrCreatePrecacheController_precacheController;
  };
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/addPlugins.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Adds plugins to the precaching strategy.
   *
   * @param {Array<Object>} plugins
   *
   * @memberof module:workbox-precaching
   */
  function addPlugins(plugins) {
      const precacheController = getOrCreatePrecacheController();
      precacheController.strategy.plugins.push(...plugins);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/removeIgnoredSearchParams.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  /**
   * Removes any URL search parameters that should be ignored.
   *
   * @param {URL} urlObject The original URL.
   * @param {Array<RegExp>} ignoreURLParametersMatching RegExps to test against
   * each search parameter name. Matches mean that the search parameter should be
   * ignored.
   * @return {URL} The URL with any ignored search parameters removed.
   *
   * @private
   * @memberof module:workbox-precaching
   */
  function removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching = []) {
      // Convert the iterable into an array at the start of the loop to make sure
      // deletion doesn't mess up iteration.
      for (const paramName of [...urlObject.searchParams.keys()]) {
          if (ignoreURLParametersMatching.some((regExp) => regExp.test(paramName))) {
              urlObject.searchParams.delete(paramName);
          }
      }
      return urlObject;
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/generateURLVariations.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Generator function that yields possible variations on the original URL to
   * check, one at a time.
   *
   * @param {string} url
   * @param {Object} options
   *
   * @private
   * @memberof module:workbox-precaching
   */
  function* generateURLVariations(url, { ignoreURLParametersMatching = [/^utm_/, /^fbclid$/], directoryIndex = 'index.html', cleanURLs = true, urlManipulation, } = {}) {
      const urlObject = new URL(url, location.href);
      urlObject.hash = '';
      yield urlObject.href;
      const urlWithoutIgnoredParams = removeIgnoredSearchParams(urlObject, ignoreURLParametersMatching);
      yield urlWithoutIgnoredParams.href;
      if (directoryIndex && urlWithoutIgnoredParams.pathname.endsWith('/')) {
          const directoryURL = new URL(urlWithoutIgnoredParams.href);
          directoryURL.pathname += directoryIndex;
          yield directoryURL.href;
      }
      if (cleanURLs) {
          const cleanURL = new URL(urlWithoutIgnoredParams.href);
          cleanURL.pathname += '.html';
          yield cleanURL.href;
      }
      if (urlManipulation) {
          const additionalURLs = urlManipulation({ url: urlObject });
          for (const urlToAttempt of additionalURLs) {
              yield urlToAttempt.href;
          }
      }
  }
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheRoute.js
  /*
    Copyright 2020 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  /**
   * A subclass of [Route]{@link module:workbox-routing.Route} that takes a
   * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
   * instance and uses it to match incoming requests and handle fetching
   * responses from the precache.
   *
   * @memberof module:workbox-precaching
   * @extends module:workbox-routing.Route
   */
  class PrecacheRoute_PrecacheRoute extends Route_Route {
      /**
       * @param {PrecacheController} precacheController A `PrecacheController`
       * instance used to both match requests and respond to fetch events.
       * @param {Object} [options] Options to control how requests are matched
       * against the list of precached URLs.
       * @param {string} [options.directoryIndex=index.html] The `directoryIndex` will
       * check cache entries for a URLs ending with '/' to see if there is a hit when
       * appending the `directoryIndex` value.
       * @param {Array<RegExp>} [options.ignoreURLParametersMatching=[/^utm_/, /^fbclid$/]] An
       * array of regex's to remove search params when looking for a cache match.
       * @param {boolean} [options.cleanURLs=true] The `cleanURLs` option will
       * check the cache for the URL with a `.html` added to the end of the end.
       * @param {module:workbox-precaching~urlManipulation} [options.urlManipulation]
       * This is a function that should take a URL and return an array of
       * alternative URLs that should be checked for precache matches.
       */
      constructor(precacheController, options) {
          const match = ({ request }) => {
              const urlsToCacheKeys = precacheController.getURLsToCacheKeys();
              for (const possibleURL of generateURLVariations(request.url, options)) {
                  const cacheKey = urlsToCacheKeys.get(possibleURL);
                  if (cacheKey) {
                      return { cacheKey };
                  }
              }
              if (false) {}
              return;
          };
          super(match, precacheController.strategy);
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/addRoute.js
  /*
    Copyright 2019 Google LLC
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  /**
   * Add a `fetch` listener to the service worker that will
   * respond to
   * [network requests]{@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers#Custom_responses_to_requests}
   * with precached assets.
   *
   * Requests for assets that aren't precached, the `FetchEvent` will not be
   * responded to, allowing the event to fall through to other `fetch` event
   * listeners.
   *
   * @param {Object} [options] See
   * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
   *
   * @memberof module:workbox-precaching
   */
  function addRoute(options) {
      const precacheController = getOrCreatePrecacheController();
      const precacheRoute = new PrecacheRoute_PrecacheRoute(precacheController, options);
      registerRoute(precacheRoute);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/utils/deleteOutdatedCaches.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  const SUBSTRING_TO_FIND = '-precache-';
  /**
   * Cleans up incompatible precaches that were created by older versions of
   * Workbox, by a service worker registered under the current scope.
   *
   * This is meant to be called as part of the `activate` event.
   *
   * This should be safe to use as long as you don't include `substringToFind`
   * (defaulting to `-precache-`) in your non-precache cache names.
   *
   * @param {string} currentPrecacheName The cache name currently in use for
   * precaching. This cache won't be deleted.
   * @param {string} [substringToFind='-precache-'] Cache names which include this
   * substring will be deleted (excluding `currentPrecacheName`).
   * @return {Array<string>} A list of all the cache names that were deleted.
   *
   * @private
   * @memberof module:workbox-precaching
   */
  const deleteOutdatedCaches = async (currentPrecacheName, substringToFind = SUBSTRING_TO_FIND) => {
      const cacheNames = await self.caches.keys();
      const cacheNamesToDelete = cacheNames.filter((cacheName) => {
          return cacheName.includes(substringToFind) &&
              cacheName.includes(self.registration.scope) &&
              cacheName !== currentPrecacheName;
      });
      await Promise.all(cacheNamesToDelete.map((cacheName) => self.caches.delete(cacheName)));
      return cacheNamesToDelete;
  };
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/cleanupOutdatedCaches.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  /**
   * Adds an `activate` event listener which will clean up incompatible
   * precaches that were created by older versions of Workbox.
   *
   * @memberof module:workbox-precaching
   */
  function cleanupOutdatedCaches() {
      // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
      self.addEventListener('activate', ((event) => {
          const cacheName = cacheNames.getPrecacheName();
          event.waitUntil(deleteOutdatedCaches(cacheName).then((cachesDeleted) => {
              if (false) {}
          }));
      }));
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/createHandlerBoundToURL.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Helper function that calls
   * {@link PrecacheController#createHandlerBoundToURL} on the default
   * {@link PrecacheController} instance.
   *
   * If you are creating your own {@link PrecacheController}, then call the
   * {@link PrecacheController#createHandlerBoundToURL} on that instance,
   * instead of using this function.
   *
   * @param {string} url The precached URL which will be used to lookup the
   * `Response`.
   * @param {boolean} [fallbackToNetwork=true] Whether to attempt to get the
   * response from the network if there's a precache miss.
   * @return {module:workbox-routing~handlerCallback}
   *
   * @memberof module:workbox-precaching
   */
  function createHandlerBoundToURL(url) {
      const precacheController = getOrCreatePrecacheController();
      return precacheController.createHandlerBoundToURL(url);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/getCacheKeyForURL.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Takes in a URL, and returns the corresponding URL that could be used to
   * lookup the entry in the precache.
   *
   * If a relative URL is provided, the location of the service worker file will
   * be used as the base.
   *
   * For precached entries without revision information, the cache key will be the
   * same as the original URL.
   *
   * For precached entries with revision information, the cache key will be the
   * original URL with the addition of a query parameter used for keeping track of
   * the revision info.
   *
   * @param {string} url The URL whose cache key to look up.
   * @return {string} The cache key that corresponds to that URL.
   *
   * @memberof module:workbox-precaching
   */
  function getCacheKeyForURL(url) {
      const precacheController = getOrCreatePrecacheController();
      return precacheController.getCacheKeyForURL(url);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/matchPrecache.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Helper function that calls
   * {@link PrecacheController#matchPrecache} on the default
   * {@link PrecacheController} instance.
   *
   * If you are creating your own {@link PrecacheController}, then call
   * {@link PrecacheController#matchPrecache} on that instance,
   * instead of using this function.
   *
   * @param {string|Request} request The key (without revisioning parameters)
   * to look up in the precache.
   * @return {Promise<Response|undefined>}
   *
   * @memberof module:workbox-precaching
   */
  function matchPrecache(request) {
      const precacheController = getOrCreatePrecacheController();
      return precacheController.matchPrecache(request);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/precache.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * Adds items to the precache list, removing any duplicates and
   * stores the files in the
   * ["precache cache"]{@link module:workbox-core.cacheNames} when the service
   * worker installs.
   *
   * This method can be called multiple times.
   *
   * Please note: This method **will not** serve any of the cached files for you.
   * It only precaches files. To respond to a network request you call
   * [addRoute()]{@link module:workbox-precaching.addRoute}.
   *
   * If you have a single array of files to precache, you can just call
   * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}.
   *
   * @param {Array<Object|string>} [entries=[]] Array of entries to precache.
   *
   * @memberof module:workbox-precaching
   */
  function precache(entries) {
      const precacheController = getOrCreatePrecacheController();
      precacheController.precache(entries);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/precacheAndRoute.js
  /*
    Copyright 2019 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  /**
   * This method will add entries to the precache list and add a route to
   * respond to fetch events.
   *
   * This is a convenience method that will call
   * [precache()]{@link module:workbox-precaching.precache} and
   * [addRoute()]{@link module:workbox-precaching.addRoute} in a single call.
   *
   * @param {Array<Object|string>} entries Array of entries to precache.
   * @param {Object} [options] See
   * [PrecacheRoute options]{@link module:workbox-precaching.PrecacheRoute}.
   *
   * @memberof module:workbox-precaching
   */
  function precacheAndRoute(entries, options) {
      precache(entries);
      addRoute(options);
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/PrecacheFallbackPlugin.js
  /*
    Copyright 2020 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  /**
   * `PrecacheFallbackPlugin` allows you to specify an "offline fallback"
   * response to be used when a given strategy is unable to generate a response.
   *
   * It does this by intercepting the `handlerDidError` plugin callback
   * and returning a precached response, taking the expected revision parameter
   * into account automatically.
   *
   * Unless you explicitly pass in a `PrecacheController` instance to the
   * constructor, the default instance will be used. Generally speaking, most
   * developers will end up using the default.
   *
   * @memberof module:workbox-precaching
   */
  class PrecacheFallbackPlugin_PrecacheFallbackPlugin {
      /**
       * Constructs a new PrecacheFallbackPlugin with the associated fallbackURL.
       *
       * @param {Object} config
       * @param {string} config.fallbackURL A precached URL to use as the fallback
       *     if the associated strategy can't generate a response.
       * @param {PrecacheController} [config.precacheController] An optional
       *     PrecacheController instance. If not provided, the default
       *     PrecacheController will be used.
       */
      constructor({ fallbackURL, precacheController }) {
          /**
           * @return {Promise<Response>} The precache response for the fallback URL.
           *
           * @private
           */
          this.handlerDidError = () => this._precacheController.matchPrecache(this._fallbackURL);
          this._fallbackURL = fallbackURL;
          this._precacheController = precacheController ||
              getOrCreatePrecacheController();
      }
  }
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/index.js
  /*
    Copyright 2018 Google LLC
  
    Use of this source code is governed by an MIT-style
    license that can be found in the LICENSE file or at
    https://opensource.org/licenses/MIT.
  */
  
  
  
  
  
  
  
  
  
  
  
  
  
  /**
   * Most consumers of this module will want to use the
   * [precacheAndRoute()]{@link module:workbox-precaching.precacheAndRoute}
   * method to add assets to the cache and respond to network requests with these
   * cached assets.
   *
   * If you require more control over caching and routing, you can use the
   * [PrecacheController]{@link module:workbox-precaching.PrecacheController}
   * interface.
   *
   * @module workbox-precaching
   */
  
  
  // CONCATENATED MODULE: ./node_modules/workbox-precaching/index.mjs
  
  // CONCATENATED MODULE: ./service-worker.js
  
  
  
  
  
  skipWaiting();
  clientsClaim(); // must include following lines when using inject manifest module from workbox
  // https://developers.google.com/web/tools/workbox/guides/precache-files/workbox-build#add_an_injection_point
  
  var WB_MANIFEST = [{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/4361e7c88df647c8e5b63c9ca2d0a00f01d4f466.d4f57090bd55662b89aa.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/c3e90ca6be9a08f0f03b075a7b753d43038e291c.e24d3794cd552d26d90f.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/main-9080369034e11d1c9bbf.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/pages/%5Bid%5D-ca412e38a97bf79303d8.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/pages/_app-5f86dc42269766cfa8cd.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/pages/_error-2157553d569a4a4e7bf2.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/pages/fallback-7cf060079f7a9c2e4ed9.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/pages/index-5f67ee54b199c0095ea4.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/polyfills-250f16924c392849df26.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/css/9e556c7b5ad95f54eae0.css'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/xRyks8WPdc_7Fqxd3HUJr/_buildManifest.js'},{'revision':'xRyks8WPdc_7Fqxd3HUJr','url':'/_next/static/xRyks8WPdc_7Fqxd3HUJr/_ssgManifest.js'},{'revision':'21b739d43fcb9bbb83d8541fe4fe88fa','url':'/favicon.ico'},{'revision':'1715680c81be4002ee18c3458a98ba78','url':'/icon-512x512.png'},{'revision':'7b0bd67f4124b377026ad0522fa7649d','url':'/icon.png'},{'revision':'9e2c4b474834b64a273a5947e2954c8f','url':'/manifest.json'},{'revision':'4b4f1876502eb6721764637fe5c41702','url':'/vercel.svg'}]; // Precache fallback route and image
  
  WB_MANIFEST.push({
    url: "/fallback",
    revision: "1234567890"
  });
  precacheAndRoute(WB_MANIFEST);
  cleanupOutdatedCaches();
  registerRoute("/", new NetworkFirst_NetworkFirst({
    cacheName: "start-url",
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 1,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: !0
    })]
  }), "GET");
  registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i, new CacheFirst_CacheFirst({
    cacheName: "google-fonts",
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 4,
      maxAgeSeconds: 31536e3,
      purgeOnQuotaError: !0
    })]
  }), "GET");
  registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new StaleWhileRevalidate_StaleWhileRevalidate({
    cacheName: "static-font-assets",
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 4,
      maxAgeSeconds: 604800,
      purgeOnQuotaError: !0
    })]
  }), "GET"); // disable image cache, so we could observe the placeholder image when offline
  
  registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new NetworkOnly_NetworkOnly({
    cacheName: "static-image-assets",
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 64,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: !0
    })]
  }), "GET");
  registerRoute(/\.(?:js)$/i, new StaleWhileRevalidate_StaleWhileRevalidate({
    cacheName: "static-js-assets",
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: !0
    })]
  }), "GET");
  registerRoute(/\.(?:css|less)$/i, new StaleWhileRevalidate_StaleWhileRevalidate({
    cacheName: "static-style-assets",
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: !0
    })]
  }), "GET");
  registerRoute(/\.(?:json|xml|csv)$/i, new NetworkFirst_NetworkFirst({
    cacheName: "static-data-assets",
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: !0
    })]
  }), "GET");
  registerRoute(/\/api\/.*$/i, new NetworkFirst_NetworkFirst({
    cacheName: "apis",
    networkTimeoutSeconds: 10,
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 16,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: !0
    })]
  }), "GET");
  registerRoute(/.*/i, new NetworkFirst_NetworkFirst({
    cacheName: "others",
    networkTimeoutSeconds: 10,
    plugins: [new ExpirationPlugin_ExpirationPlugin({
      maxEntries: 32,
      maxAgeSeconds: 86400,
      purgeOnQuotaError: !0
    })]
  }), "GET"); // following lines gives you control of the offline fallback strategies
  // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#comprehensive_fallbacks
  // Use a stale-while-revalidate strategy for all other requests.
  
  setDefaultHandler(new StaleWhileRevalidate_StaleWhileRevalidate()); // This "catch" handler is triggered when any of the other routes fail to
  // generate a response.
  
  setCatchHandler(function (_ref) {
    var event = _ref.event;
  
    // The FALLBACK_URL entries must be added to the cache ahead of time, either
    // via runtime or precaching. If they are precached, then call
    // `matchPrecache(FALLBACK_URL)` (from the `workbox-precaching` package)
    // to get the response from the correct cache.
    //
    // Use event, request, and url to figure out how to respond.
    // One approach would be to use request.destination, see
    // https://medium.com/dev-channel/service-worker-caching-strategies-based-on-request-types-57411dd7652c
    switch (event.request.destination) {
      case "document":
        // If using precached URLs:
        return matchPrecache("/fallback"); // return caches.match('/fallback')
  
        break;
  
      case "image":
        // If using precached URLs:
        return matchPrecache("/icon.png"); // return caches.match('/static/images/fallback.png')
  
        break;
  
      case "font": // If using precached URLs:
      // return matchPrecache(FALLBACK_FONT_URL);
      //return caches.match('/static/fonts/fallback.otf')
      //break
  
      default:
        // If we don't have a fallback, just return an error response.
        return Response.error();
    }
  });
  
  /***/ }),
  
  /***/ "aqiC":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // @ts-ignore
  try {
      self['workbox:strategies:6.1.0'] && _();
  }
  catch (e) { }
  
  
  /***/ }),
  
  /***/ "xwD5":
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  // @ts-ignore
  try {
      self['workbox:precaching:6.1.0'] && _();
  }
  catch (e) { }
  
  
  /***/ })
  
  /******/ });