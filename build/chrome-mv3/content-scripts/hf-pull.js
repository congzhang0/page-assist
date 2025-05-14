var _hf_pull = (function () {
  'use strict';

  function defineContentScript(definition) {
    return definition;
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var browserPolyfill = {exports: {}};

  (function (module, exports) {
  	(function (global, factory) {
  	  {
  	    factory(module);
  	  }
  	})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : commonjsGlobal, function (module) {

  	  if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id)) {
  	    throw new Error("This script should only be loaded in a browser extension.");
  	  }
  	  if (!(globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)) {
  	    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";

  	    // Wrapping the bulk of this polyfill in a one-time-use function is a minor
  	    // optimization for Firefox. Since Spidermonkey does not fully parse the
  	    // contents of a function until the first time it's called, and since it will
  	    // never actually need to be called, this allows the polyfill to be included
  	    // in Firefox nearly for free.
  	    const wrapAPIs = extensionAPIs => {
  	      // NOTE: apiMetadata is associated to the content of the api-metadata.json file
  	      // at build time by replacing the following "include" with the content of the
  	      // JSON file.
  	      const apiMetadata = {
  	        "alarms": {
  	          "clear": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "clearAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "get": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "getAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          }
  	        },
  	        "bookmarks": {
  	          "create": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "get": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getChildren": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getRecent": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getSubTree": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getTree": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "move": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          },
  	          "remove": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeTree": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "search": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "update": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          }
  	        },
  	        "browserAction": {
  	          "disable": {
  	            "minArgs": 0,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "enable": {
  	            "minArgs": 0,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "getBadgeBackgroundColor": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getBadgeText": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getPopup": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getTitle": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "openPopup": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "setBadgeBackgroundColor": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "setBadgeText": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "setIcon": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "setPopup": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "setTitle": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          }
  	        },
  	        "browsingData": {
  	          "remove": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          },
  	          "removeCache": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeCookies": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeDownloads": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeFormData": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeHistory": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeLocalStorage": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removePasswords": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removePluginData": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "settings": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          }
  	        },
  	        "commands": {
  	          "getAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          }
  	        },
  	        "contextMenus": {
  	          "remove": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "update": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          }
  	        },
  	        "cookies": {
  	          "get": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getAll": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getAllCookieStores": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "remove": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "set": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          }
  	        },
  	        "devtools": {
  	          "inspectedWindow": {
  	            "eval": {
  	              "minArgs": 1,
  	              "maxArgs": 2,
  	              "singleCallbackArg": false
  	            }
  	          },
  	          "panels": {
  	            "create": {
  	              "minArgs": 3,
  	              "maxArgs": 3,
  	              "singleCallbackArg": true
  	            },
  	            "elements": {
  	              "createSidebarPane": {
  	                "minArgs": 1,
  	                "maxArgs": 1
  	              }
  	            }
  	          }
  	        },
  	        "downloads": {
  	          "cancel": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "download": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "erase": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getFileIcon": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "open": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "pause": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeFile": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "resume": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "search": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "show": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          }
  	        },
  	        "extension": {
  	          "isAllowedFileSchemeAccess": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "isAllowedIncognitoAccess": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          }
  	        },
  	        "history": {
  	          "addUrl": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "deleteAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "deleteRange": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "deleteUrl": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getVisits": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "search": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          }
  	        },
  	        "i18n": {
  	          "detectLanguage": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getAcceptLanguages": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          }
  	        },
  	        "identity": {
  	          "launchWebAuthFlow": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          }
  	        },
  	        "idle": {
  	          "queryState": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          }
  	        },
  	        "management": {
  	          "get": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "getSelf": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "setEnabled": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          },
  	          "uninstallSelf": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          }
  	        },
  	        "notifications": {
  	          "clear": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "create": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "getAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "getPermissionLevel": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "update": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          }
  	        },
  	        "pageAction": {
  	          "getPopup": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getTitle": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "hide": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "setIcon": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "setPopup": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "setTitle": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          },
  	          "show": {
  	            "minArgs": 1,
  	            "maxArgs": 1,
  	            "fallbackToNoCallback": true
  	          }
  	        },
  	        "permissions": {
  	          "contains": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getAll": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "remove": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "request": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          }
  	        },
  	        "runtime": {
  	          "getBackgroundPage": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "getPlatformInfo": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "openOptionsPage": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "requestUpdateCheck": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "sendMessage": {
  	            "minArgs": 1,
  	            "maxArgs": 3
  	          },
  	          "sendNativeMessage": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          },
  	          "setUninstallURL": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          }
  	        },
  	        "sessions": {
  	          "getDevices": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "getRecentlyClosed": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "restore": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          }
  	        },
  	        "storage": {
  	          "local": {
  	            "clear": {
  	              "minArgs": 0,
  	              "maxArgs": 0
  	            },
  	            "get": {
  	              "minArgs": 0,
  	              "maxArgs": 1
  	            },
  	            "getBytesInUse": {
  	              "minArgs": 0,
  	              "maxArgs": 1
  	            },
  	            "remove": {
  	              "minArgs": 1,
  	              "maxArgs": 1
  	            },
  	            "set": {
  	              "minArgs": 1,
  	              "maxArgs": 1
  	            }
  	          },
  	          "managed": {
  	            "get": {
  	              "minArgs": 0,
  	              "maxArgs": 1
  	            },
  	            "getBytesInUse": {
  	              "minArgs": 0,
  	              "maxArgs": 1
  	            }
  	          },
  	          "sync": {
  	            "clear": {
  	              "minArgs": 0,
  	              "maxArgs": 0
  	            },
  	            "get": {
  	              "minArgs": 0,
  	              "maxArgs": 1
  	            },
  	            "getBytesInUse": {
  	              "minArgs": 0,
  	              "maxArgs": 1
  	            },
  	            "remove": {
  	              "minArgs": 1,
  	              "maxArgs": 1
  	            },
  	            "set": {
  	              "minArgs": 1,
  	              "maxArgs": 1
  	            }
  	          }
  	        },
  	        "tabs": {
  	          "captureVisibleTab": {
  	            "minArgs": 0,
  	            "maxArgs": 2
  	          },
  	          "create": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "detectLanguage": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "discard": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "duplicate": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "executeScript": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "get": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getCurrent": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          },
  	          "getZoom": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "getZoomSettings": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "goBack": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "goForward": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "highlight": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "insertCSS": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "move": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          },
  	          "query": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "reload": {
  	            "minArgs": 0,
  	            "maxArgs": 2
  	          },
  	          "remove": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "removeCSS": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "sendMessage": {
  	            "minArgs": 2,
  	            "maxArgs": 3
  	          },
  	          "setZoom": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "setZoomSettings": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "update": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          }
  	        },
  	        "topSites": {
  	          "get": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          }
  	        },
  	        "webNavigation": {
  	          "getAllFrames": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "getFrame": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          }
  	        },
  	        "webRequest": {
  	          "handlerBehaviorChanged": {
  	            "minArgs": 0,
  	            "maxArgs": 0
  	          }
  	        },
  	        "windows": {
  	          "create": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "get": {
  	            "minArgs": 1,
  	            "maxArgs": 2
  	          },
  	          "getAll": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "getCurrent": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "getLastFocused": {
  	            "minArgs": 0,
  	            "maxArgs": 1
  	          },
  	          "remove": {
  	            "minArgs": 1,
  	            "maxArgs": 1
  	          },
  	          "update": {
  	            "minArgs": 2,
  	            "maxArgs": 2
  	          }
  	        }
  	      };
  	      if (Object.keys(apiMetadata).length === 0) {
  	        throw new Error("api-metadata.json has not been included in browser-polyfill");
  	      }

  	      /**
  	       * A WeakMap subclass which creates and stores a value for any key which does
  	       * not exist when accessed, but behaves exactly as an ordinary WeakMap
  	       * otherwise.
  	       *
  	       * @param {function} createItem
  	       *        A function which will be called in order to create the value for any
  	       *        key which does not exist, the first time it is accessed. The
  	       *        function receives, as its only argument, the key being created.
  	       */
  	      class DefaultWeakMap extends WeakMap {
  	        constructor(createItem, items = undefined) {
  	          super(items);
  	          this.createItem = createItem;
  	        }
  	        get(key) {
  	          if (!this.has(key)) {
  	            this.set(key, this.createItem(key));
  	          }
  	          return super.get(key);
  	        }
  	      }

  	      /**
  	       * Returns true if the given object is an object with a `then` method, and can
  	       * therefore be assumed to behave as a Promise.
  	       *
  	       * @param {*} value The value to test.
  	       * @returns {boolean} True if the value is thenable.
  	       */
  	      const isThenable = value => {
  	        return value && typeof value === "object" && typeof value.then === "function";
  	      };

  	      /**
  	       * Creates and returns a function which, when called, will resolve or reject
  	       * the given promise based on how it is called:
  	       *
  	       * - If, when called, `chrome.runtime.lastError` contains a non-null object,
  	       *   the promise is rejected with that value.
  	       * - If the function is called with exactly one argument, the promise is
  	       *   resolved to that value.
  	       * - Otherwise, the promise is resolved to an array containing all of the
  	       *   function's arguments.
  	       *
  	       * @param {object} promise
  	       *        An object containing the resolution and rejection functions of a
  	       *        promise.
  	       * @param {function} promise.resolve
  	       *        The promise's resolution function.
  	       * @param {function} promise.reject
  	       *        The promise's rejection function.
  	       * @param {object} metadata
  	       *        Metadata about the wrapped method which has created the callback.
  	       * @param {boolean} metadata.singleCallbackArg
  	       *        Whether or not the promise is resolved with only the first
  	       *        argument of the callback, alternatively an array of all the
  	       *        callback arguments is resolved. By default, if the callback
  	       *        function is invoked with only a single argument, that will be
  	       *        resolved to the promise, while all arguments will be resolved as
  	       *        an array if multiple are given.
  	       *
  	       * @returns {function}
  	       *        The generated callback function.
  	       */
  	      const makeCallback = (promise, metadata) => {
  	        return (...callbackArgs) => {
  	          if (extensionAPIs.runtime.lastError) {
  	            promise.reject(new Error(extensionAPIs.runtime.lastError.message));
  	          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
  	            promise.resolve(callbackArgs[0]);
  	          } else {
  	            promise.resolve(callbackArgs);
  	          }
  	        };
  	      };
  	      const pluralizeArguments = numArgs => numArgs == 1 ? "argument" : "arguments";

  	      /**
  	       * Creates a wrapper function for a method with the given name and metadata.
  	       *
  	       * @param {string} name
  	       *        The name of the method which is being wrapped.
  	       * @param {object} metadata
  	       *        Metadata about the method being wrapped.
  	       * @param {integer} metadata.minArgs
  	       *        The minimum number of arguments which must be passed to the
  	       *        function. If called with fewer than this number of arguments, the
  	       *        wrapper will raise an exception.
  	       * @param {integer} metadata.maxArgs
  	       *        The maximum number of arguments which may be passed to the
  	       *        function. If called with more than this number of arguments, the
  	       *        wrapper will raise an exception.
  	       * @param {boolean} metadata.singleCallbackArg
  	       *        Whether or not the promise is resolved with only the first
  	       *        argument of the callback, alternatively an array of all the
  	       *        callback arguments is resolved. By default, if the callback
  	       *        function is invoked with only a single argument, that will be
  	       *        resolved to the promise, while all arguments will be resolved as
  	       *        an array if multiple are given.
  	       *
  	       * @returns {function(object, ...*)}
  	       *       The generated wrapper function.
  	       */
  	      const wrapAsyncFunction = (name, metadata) => {
  	        return function asyncFunctionWrapper(target, ...args) {
  	          if (args.length < metadata.minArgs) {
  	            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
  	          }
  	          if (args.length > metadata.maxArgs) {
  	            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
  	          }
  	          return new Promise((resolve, reject) => {
  	            if (metadata.fallbackToNoCallback) {
  	              // This API method has currently no callback on Chrome, but it return a promise on Firefox,
  	              // and so the polyfill will try to call it with a callback first, and it will fallback
  	              // to not passing the callback if the first call fails.
  	              try {
  	                target[name](...args, makeCallback({
  	                  resolve,
  	                  reject
  	                }, metadata));
  	              } catch (cbError) {
  	                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + "falling back to call it without a callback: ", cbError);
  	                target[name](...args);

  	                // Update the API method metadata, so that the next API calls will not try to
  	                // use the unsupported callback anymore.
  	                metadata.fallbackToNoCallback = false;
  	                metadata.noCallback = true;
  	                resolve();
  	              }
  	            } else if (metadata.noCallback) {
  	              target[name](...args);
  	              resolve();
  	            } else {
  	              target[name](...args, makeCallback({
  	                resolve,
  	                reject
  	              }, metadata));
  	            }
  	          });
  	        };
  	      };

  	      /**
  	       * Wraps an existing method of the target object, so that calls to it are
  	       * intercepted by the given wrapper function. The wrapper function receives,
  	       * as its first argument, the original `target` object, followed by each of
  	       * the arguments passed to the original method.
  	       *
  	       * @param {object} target
  	       *        The original target object that the wrapped method belongs to.
  	       * @param {function} method
  	       *        The method being wrapped. This is used as the target of the Proxy
  	       *        object which is created to wrap the method.
  	       * @param {function} wrapper
  	       *        The wrapper function which is called in place of a direct invocation
  	       *        of the wrapped method.
  	       *
  	       * @returns {Proxy<function>}
  	       *        A Proxy object for the given method, which invokes the given wrapper
  	       *        method in its place.
  	       */
  	      const wrapMethod = (target, method, wrapper) => {
  	        return new Proxy(method, {
  	          apply(targetMethod, thisObj, args) {
  	            return wrapper.call(thisObj, target, ...args);
  	          }
  	        });
  	      };
  	      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);

  	      /**
  	       * Wraps an object in a Proxy which intercepts and wraps certain methods
  	       * based on the given `wrappers` and `metadata` objects.
  	       *
  	       * @param {object} target
  	       *        The target object to wrap.
  	       *
  	       * @param {object} [wrappers = {}]
  	       *        An object tree containing wrapper functions for special cases. Any
  	       *        function present in this object tree is called in place of the
  	       *        method in the same location in the `target` object tree. These
  	       *        wrapper methods are invoked as described in {@see wrapMethod}.
  	       *
  	       * @param {object} [metadata = {}]
  	       *        An object tree containing metadata used to automatically generate
  	       *        Promise-based wrapper functions for asynchronous. Any function in
  	       *        the `target` object tree which has a corresponding metadata object
  	       *        in the same location in the `metadata` tree is replaced with an
  	       *        automatically-generated wrapper function, as described in
  	       *        {@see wrapAsyncFunction}
  	       *
  	       * @returns {Proxy<object>}
  	       */
  	      const wrapObject = (target, wrappers = {}, metadata = {}) => {
  	        let cache = Object.create(null);
  	        let handlers = {
  	          has(proxyTarget, prop) {
  	            return prop in target || prop in cache;
  	          },
  	          get(proxyTarget, prop, receiver) {
  	            if (prop in cache) {
  	              return cache[prop];
  	            }
  	            if (!(prop in target)) {
  	              return undefined;
  	            }
  	            let value = target[prop];
  	            if (typeof value === "function") {
  	              // This is a method on the underlying object. Check if we need to do
  	              // any wrapping.

  	              if (typeof wrappers[prop] === "function") {
  	                // We have a special-case wrapper for this method.
  	                value = wrapMethod(target, target[prop], wrappers[prop]);
  	              } else if (hasOwnProperty(metadata, prop)) {
  	                // This is an async method that we have metadata for. Create a
  	                // Promise wrapper for it.
  	                let wrapper = wrapAsyncFunction(prop, metadata[prop]);
  	                value = wrapMethod(target, target[prop], wrapper);
  	              } else {
  	                // This is a method that we don't know or care about. Return the
  	                // original method, bound to the underlying object.
  	                value = value.bind(target);
  	              }
  	            } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
  	              // This is an object that we need to do some wrapping for the children
  	              // of. Create a sub-object wrapper for it with the appropriate child
  	              // metadata.
  	              value = wrapObject(value, wrappers[prop], metadata[prop]);
  	            } else if (hasOwnProperty(metadata, "*")) {
  	              // Wrap all properties in * namespace.
  	              value = wrapObject(value, wrappers[prop], metadata["*"]);
  	            } else {
  	              // We don't need to do any wrapping for this property,
  	              // so just forward all access to the underlying object.
  	              Object.defineProperty(cache, prop, {
  	                configurable: true,
  	                enumerable: true,
  	                get() {
  	                  return target[prop];
  	                },
  	                set(value) {
  	                  target[prop] = value;
  	                }
  	              });
  	              return value;
  	            }
  	            cache[prop] = value;
  	            return value;
  	          },
  	          set(proxyTarget, prop, value, receiver) {
  	            if (prop in cache) {
  	              cache[prop] = value;
  	            } else {
  	              target[prop] = value;
  	            }
  	            return true;
  	          },
  	          defineProperty(proxyTarget, prop, desc) {
  	            return Reflect.defineProperty(cache, prop, desc);
  	          },
  	          deleteProperty(proxyTarget, prop) {
  	            return Reflect.deleteProperty(cache, prop);
  	          }
  	        };

  	        // Per contract of the Proxy API, the "get" proxy handler must return the
  	        // original value of the target if that value is declared read-only and
  	        // non-configurable. For this reason, we create an object with the
  	        // prototype set to `target` instead of using `target` directly.
  	        // Otherwise we cannot return a custom object for APIs that
  	        // are declared read-only and non-configurable, such as `chrome.devtools`.
  	        //
  	        // The proxy handlers themselves will still use the original `target`
  	        // instead of the `proxyTarget`, so that the methods and properties are
  	        // dereferenced via the original targets.
  	        let proxyTarget = Object.create(target);
  	        return new Proxy(proxyTarget, handlers);
  	      };

  	      /**
  	       * Creates a set of wrapper functions for an event object, which handles
  	       * wrapping of listener functions that those messages are passed.
  	       *
  	       * A single wrapper is created for each listener function, and stored in a
  	       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`
  	       * retrieve the original wrapper, so that  attempts to remove a
  	       * previously-added listener work as expected.
  	       *
  	       * @param {DefaultWeakMap<function, function>} wrapperMap
  	       *        A DefaultWeakMap object which will create the appropriate wrapper
  	       *        for a given listener function when one does not exist, and retrieve
  	       *        an existing one when it does.
  	       *
  	       * @returns {object}
  	       */
  	      const wrapEvent = wrapperMap => ({
  	        addListener(target, listener, ...args) {
  	          target.addListener(wrapperMap.get(listener), ...args);
  	        },
  	        hasListener(target, listener) {
  	          return target.hasListener(wrapperMap.get(listener));
  	        },
  	        removeListener(target, listener) {
  	          target.removeListener(wrapperMap.get(listener));
  	        }
  	      });
  	      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {
  	        if (typeof listener !== "function") {
  	          return listener;
  	        }

  	        /**
  	         * Wraps an onRequestFinished listener function so that it will return a
  	         * `getContent()` property which returns a `Promise` rather than using a
  	         * callback API.
  	         *
  	         * @param {object} req
  	         *        The HAR entry object representing the network request.
  	         */
  	        return function onRequestFinished(req) {
  	          const wrappedReq = wrapObject(req, {} /* wrappers */, {
  	            getContent: {
  	              minArgs: 0,
  	              maxArgs: 0
  	            }
  	          });
  	          listener(wrappedReq);
  	        };
  	      });
  	      const onMessageWrappers = new DefaultWeakMap(listener => {
  	        if (typeof listener !== "function") {
  	          return listener;
  	        }

  	        /**
  	         * Wraps a message listener function so that it may send responses based on
  	         * its return value, rather than by returning a sentinel value and calling a
  	         * callback. If the listener function returns a Promise, the response is
  	         * sent when the promise either resolves or rejects.
  	         *
  	         * @param {*} message
  	         *        The message sent by the other end of the channel.
  	         * @param {object} sender
  	         *        Details about the sender of the message.
  	         * @param {function(*)} sendResponse
  	         *        A callback which, when called with an arbitrary argument, sends
  	         *        that value as a response.
  	         * @returns {boolean}
  	         *        True if the wrapped listener returned a Promise, which will later
  	         *        yield a response. False otherwise.
  	         */
  	        return function onMessage(message, sender, sendResponse) {
  	          let didCallSendResponse = false;
  	          let wrappedSendResponse;
  	          let sendResponsePromise = new Promise(resolve => {
  	            wrappedSendResponse = function (response) {
  	              didCallSendResponse = true;
  	              resolve(response);
  	            };
  	          });
  	          let result;
  	          try {
  	            result = listener(message, sender, wrappedSendResponse);
  	          } catch (err) {
  	            result = Promise.reject(err);
  	          }
  	          const isResultThenable = result !== true && isThenable(result);

  	          // If the listener didn't returned true or a Promise, or called
  	          // wrappedSendResponse synchronously, we can exit earlier
  	          // because there will be no response sent from this listener.
  	          if (result !== true && !isResultThenable && !didCallSendResponse) {
  	            return false;
  	          }

  	          // A small helper to send the message if the promise resolves
  	          // and an error if the promise rejects (a wrapped sendMessage has
  	          // to translate the message into a resolved promise or a rejected
  	          // promise).
  	          const sendPromisedResult = promise => {
  	            promise.then(msg => {
  	              // send the message value.
  	              sendResponse(msg);
  	            }, error => {
  	              // Send a JSON representation of the error if the rejected value
  	              // is an instance of error, or the object itself otherwise.
  	              let message;
  	              if (error && (error instanceof Error || typeof error.message === "string")) {
  	                message = error.message;
  	              } else {
  	                message = "An unexpected error occurred";
  	              }
  	              sendResponse({
  	                __mozWebExtensionPolyfillReject__: true,
  	                message
  	              });
  	            }).catch(err => {
  	              // Print an error on the console if unable to send the response.
  	              console.error("Failed to send onMessage rejected reply", err);
  	            });
  	          };

  	          // If the listener returned a Promise, send the resolved value as a
  	          // result, otherwise wait the promise related to the wrappedSendResponse
  	          // callback to resolve and send it as a response.
  	          if (isResultThenable) {
  	            sendPromisedResult(result);
  	          } else {
  	            sendPromisedResult(sendResponsePromise);
  	          }

  	          // Let Chrome know that the listener is replying.
  	          return true;
  	        };
  	      });
  	      const wrappedSendMessageCallback = ({
  	        reject,
  	        resolve
  	      }, reply) => {
  	        if (extensionAPIs.runtime.lastError) {
  	          // Detect when none of the listeners replied to the sendMessage call and resolve
  	          // the promise to undefined as in Firefox.
  	          // See https://github.com/mozilla/webextension-polyfill/issues/130
  	          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
  	            resolve();
  	          } else {
  	            reject(new Error(extensionAPIs.runtime.lastError.message));
  	          }
  	        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
  	          // Convert back the JSON representation of the error into
  	          // an Error instance.
  	          reject(new Error(reply.message));
  	        } else {
  	          resolve(reply);
  	        }
  	      };
  	      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
  	        if (args.length < metadata.minArgs) {
  	          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
  	        }
  	        if (args.length > metadata.maxArgs) {
  	          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
  	        }
  	        return new Promise((resolve, reject) => {
  	          const wrappedCb = wrappedSendMessageCallback.bind(null, {
  	            resolve,
  	            reject
  	          });
  	          args.push(wrappedCb);
  	          apiNamespaceObj.sendMessage(...args);
  	        });
  	      };
  	      const staticWrappers = {
  	        devtools: {
  	          network: {
  	            onRequestFinished: wrapEvent(onRequestFinishedWrappers)
  	          }
  	        },
  	        runtime: {
  	          onMessage: wrapEvent(onMessageWrappers),
  	          onMessageExternal: wrapEvent(onMessageWrappers),
  	          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
  	            minArgs: 1,
  	            maxArgs: 3
  	          })
  	        },
  	        tabs: {
  	          sendMessage: wrappedSendMessage.bind(null, "sendMessage", {
  	            minArgs: 2,
  	            maxArgs: 3
  	          })
  	        }
  	      };
  	      const settingMetadata = {
  	        clear: {
  	          minArgs: 1,
  	          maxArgs: 1
  	        },
  	        get: {
  	          minArgs: 1,
  	          maxArgs: 1
  	        },
  	        set: {
  	          minArgs: 1,
  	          maxArgs: 1
  	        }
  	      };
  	      apiMetadata.privacy = {
  	        network: {
  	          "*": settingMetadata
  	        },
  	        services: {
  	          "*": settingMetadata
  	        },
  	        websites: {
  	          "*": settingMetadata
  	        }
  	      };
  	      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
  	    };

  	    // The build process adds a UMD wrapper around this file, which makes the
  	    // `module` variable available.
  	    module.exports = wrapAPIs(chrome);
  	  } else {
  	    module.exports = globalThis.browser;
  	  }
  	});
  	
  } (browserPolyfill));

  var browserPolyfillExports = browserPolyfill.exports;
  const originalBrowser = /*@__PURE__*/getDefaultExportFromCjs(browserPolyfillExports);

  const browser = originalBrowser;

  const definition = defineContentScript({
    main(ctx) {
      const downloadModel = async (modelName) => {
        const ok = confirm(
          `[Page Assist Extension] Do you want to pull the ${modelName} model? This has nothing to do with the huggingface.co website. The model will be pulled locally once you confirm. Make sure Ollama is running.`
        );
        if (ok) {
          alert(
            `[Page Assist Extension] Pulling ${modelName} model. For more details, check the extension icon.`
          );
          await browser.runtime.sendMessage({
            type: "pull_model",
            modelName
          });
          return true;
        }
        return false;
      };
      const downloadSVG = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
          <path d="M12 16l-6-6h4V4h4v6h4l-6 6z"/>
          <path d="M4 20h16v-2H4v2z"/>
        </svg>
      `;
      const injectDownloadButton = (modal) => {
        const copyButton = modal.querySelector(
          'button[title="Copy snippet to clipboard"]'
        );
        if (copyButton && !modal.querySelector(".pageassist-download-button")) {
          const downloadButton = copyButton.cloneNode(true);
          downloadButton.classList.add("pageassist-download-button");
          downloadButton.querySelector("svg").outerHTML = downloadSVG;
          downloadButton.querySelector("span").textContent = "Pull from Page Assist";
          downloadButton.addEventListener("click", async () => {
            const preElement = modal.querySelector("pre");
            if (preElement) {
              let modelCommand = "";
              preElement.childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                  modelCommand += node.textContent;
                } else if (node instanceof HTMLSelectElement) {
                  modelCommand += node.value;
                } else if (node instanceof HTMLElement) {
                  const selectElement = node.querySelector(
                    "select"
                  );
                  if (selectElement) {
                    modelCommand += selectElement.value;
                  } else {
                    modelCommand += node.textContent;
                  }
                }
              });
              modelCommand = modelCommand.trim();
              await downloadModel(
                modelCommand?.replaceAll("ollama run", "")?.replaceAll("ollama pull", "")?.trim()
              );
            }
          });
          const buttonContainer = document.createElement("div");
          buttonContainer.classList.add("mb-3");
          buttonContainer.style.display = "flex";
          buttonContainer.style.justifyContent = "flex-end";
          buttonContainer.appendChild(downloadButton);
          modal.querySelector("pre").insertAdjacentElement("afterend", buttonContainer);
        }
      };
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          mutation.addedNodes.forEach((node) => {
            if (node instanceof HTMLElement) {
              const modal = node.querySelector(".shadow-alternate");
              if (modal) {
                injectDownloadButton(modal);
              }
            }
          });
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
    },
    allFrames: true,
    matches: ["*://huggingface.co/*"]
  });
  _hf_pull;

  function print$1(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger$1 = {
    debug: (...args) => print$1(console.debug, ...args),
    log: (...args) => print$1(console.log, ...args),
    warn: (...args) => print$1(console.warn, ...args),
    error: (...args) => print$1(console.error, ...args)
  };

  const __vite_import_meta_env__ = {"BASE_URL": "/", "BROWSER": "chrome", "CHROME": true, "COMMAND": "serve", "DEV": true, "EDGE": false, "ENTRYPOINT": "hf-pull", "FIREFOX": false, "MANIFEST_VERSION": 3, "MODE": "development", "OPERA": false, "PROD": false, "SAFARI": false, "SSR": false, "VITE_CJS_IGNORE_WARNING": "true"};
  class WxtLocationChangeEvent extends Event {
    constructor(newUrl, oldUrl) {
      super(WxtLocationChangeEvent.EVENT_NAME, {});
      this.newUrl = newUrl;
      this.oldUrl = oldUrl;
    }
    static EVENT_NAME = getUniqueEventName("wxt:locationchange");
  }
  function getUniqueEventName(eventName) {
    const entrypointName = typeof (__vite_import_meta_env__) === "undefined" ? "build" : "hf-pull";
    return `${browser?.runtime?.id}:${entrypointName}:${eventName}`;
  }

  function createLocationWatcher(ctx) {
    let interval;
    let oldUrl;
    return {
      /**
       * Ensure the location watcher is actively looking for URL changes. If it's already watching,
       * this is a noop.
       */
      run() {
        if (interval != null) return;
        oldUrl = new URL(location.href);
        interval = ctx.setInterval(() => {
          let newUrl = new URL(location.href);
          if (newUrl.href !== oldUrl.href) {
            window.dispatchEvent(new WxtLocationChangeEvent(newUrl, oldUrl));
            oldUrl = newUrl;
          }
        }, 1e3);
      }
    };
  }

  class ContentScriptContext {
    constructor(contentScriptName, options) {
      this.contentScriptName = contentScriptName;
      this.options = options;
      this.#abortController = new AbortController();
      if (this.#isTopFrame) {
        this.#listenForNewerScripts({ ignoreFirstEvent: true });
        this.#stopOldScripts();
      } else {
        this.#listenForNewerScripts();
      }
    }
    static SCRIPT_STARTED_MESSAGE_TYPE = "wxt:content-script-started";
    #isTopFrame = window.self === window.top;
    #abortController;
    #locationWatcher = createLocationWatcher(this);
    get signal() {
      return this.#abortController.signal;
    }
    abort(reason) {
      return this.#abortController.abort(reason);
    }
    get isInvalid() {
      if (browser.runtime.id == null) {
        this.notifyInvalidated();
      }
      return this.signal.aborted;
    }
    get isValid() {
      return !this.isInvalid;
    }
    /**
     * Add a listener that is called when the content script's context is invalidated.
     *
     * @returns A function to remove the listener.
     *
     * @example
     * browser.runtime.onMessage.addListener(cb);
     * const removeInvalidatedListener = ctx.onInvalidated(() => {
     *   browser.runtime.onMessage.removeListener(cb);
     * })
     * // ...
     * removeInvalidatedListener();
     */
    onInvalidated(cb) {
      this.signal.addEventListener("abort", cb);
      return () => this.signal.removeEventListener("abort", cb);
    }
    /**
     * Return a promise that never resolves. Useful if you have an async function that shouldn't run
     * after the context is expired.
     *
     * @example
     * const getValueFromStorage = async () => {
     *   if (ctx.isInvalid) return ctx.block();
     *
     *   // ...
     * }
     */
    block() {
      return new Promise(() => {
      });
    }
    /**
     * Wrapper around `window.setInterval` that automatically clears the interval when invalidated.
     */
    setInterval(handler, timeout) {
      const id = setInterval(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearInterval(id));
      return id;
    }
    /**
     * Wrapper around `window.setTimeout` that automatically clears the interval when invalidated.
     */
    setTimeout(handler, timeout) {
      const id = setTimeout(() => {
        if (this.isValid) handler();
      }, timeout);
      this.onInvalidated(() => clearTimeout(id));
      return id;
    }
    /**
     * Wrapper around `window.requestAnimationFrame` that automatically cancels the request when
     * invalidated.
     */
    requestAnimationFrame(callback) {
      const id = requestAnimationFrame((...args) => {
        if (this.isValid) callback(...args);
      });
      this.onInvalidated(() => cancelAnimationFrame(id));
      return id;
    }
    /**
     * Wrapper around `window.requestIdleCallback` that automatically cancels the request when
     * invalidated.
     */
    requestIdleCallback(callback, options) {
      const id = requestIdleCallback((...args) => {
        if (!this.signal.aborted) callback(...args);
      }, options);
      this.onInvalidated(() => cancelIdleCallback(id));
      return id;
    }
    /**
     * Call `target.addEventListener` and remove the event listener when the context is invalidated.
     *
     * Includes additional events useful for content scripts:
     *
     * - `"wxt:locationchange"` - Triggered when HTML5 history mode is used to change URL. Content
     *   scripts are not reloaded when navigating this way, so this can be used to reset the content
     *   script state on URL change, or run custom code.
     *
     * @example
     * ctx.addEventListener(document, "visibilitychange", () => {
     *   // ...
     * });
     * ctx.addEventListener(document, "wxt:locationchange", () => {
     *   // ...
     * });
     */
    addEventListener(target, type, handler, options) {
      if (type === "wxt:locationchange") {
        if (this.isValid) this.#locationWatcher.run();
      }
      target.addEventListener?.(
        type.startsWith("wxt:") ? getUniqueEventName(type) : type,
        // @ts-expect-error: Event don't match, but that's OK, EventTarget doesn't allow custom types in the callback
        handler,
        {
          ...options,
          signal: this.signal
        }
      );
    }
    /**
     * @internal
     * Abort the abort controller and execute all `onInvalidated` listeners.
     */
    notifyInvalidated() {
      this.abort("Content script context invalidated");
      logger$1.debug(
        `Content script "${this.contentScriptName}" context invalidated`
      );
    }
    #stopOldScripts() {
      window.postMessage(
        {
          type: ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE,
          contentScriptName: this.contentScriptName
        },
        "*"
      );
    }
    #listenForNewerScripts(options) {
      let isFirst = true;
      const cb = (event) => {
        if (event.data?.type === ContentScriptContext.SCRIPT_STARTED_MESSAGE_TYPE && event.data?.contentScriptName === this.contentScriptName) {
          const wasFirst = isFirst;
          isFirst = false;
          if (wasFirst && options?.ignoreFirstEvent) return;
          this.notifyInvalidated();
        }
      };
      addEventListener("message", cb);
      this.onInvalidated(() => removeEventListener("message", cb));
    }
  }

  function initPlugins() {

  }

  function print(method, ...args) {
    if (typeof args[0] === "string") {
      const message = args.shift();
      method(`[wxt] ${message}`, ...args);
    } else {
      method("[wxt]", ...args);
    }
  }
  const logger = {
    debug: (...args) => print(console.debug, ...args),
    log: (...args) => print(console.log, ...args),
    warn: (...args) => print(console.warn, ...args),
    error: (...args) => print(console.error, ...args)
  };
  const result = (async () => {
    try {
      initPlugins();
      const { main, ...options } = definition;
      const ctx = new ContentScriptContext("hf-pull", options);
      return await main(ctx);
    } catch (err) {
      logger.error(
        `The content script "${"hf-pull"}" crashed on startup!`,
        err
      );
      throw err;
    }
  })();

  return result;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGYtcHVsbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3NhbmRib3gvZGVmaW5lLWNvbnRlbnQtc2NyaXB0Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93ZWJleHRlbnNpb24tcG9seWZpbGwvZGlzdC9icm93c2VyLXBvbHlmaWxsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2Jyb3dzZXIvaW5kZXgubWpzIiwiLi4vLi4vLi4vc3JjL2VudHJpZXMvaGYtcHVsbC5jb250ZW50LnRzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L3NhbmRib3gvdXRpbHMvbG9nZ2VyLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9jbGllbnQvY29udGVudC1zY3JpcHRzL2N1c3RvbS1ldmVudHMubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2NsaWVudC9jb250ZW50LXNjcmlwdHMvbG9jYXRpb24td2F0Y2hlci5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvY2xpZW50L2NvbnRlbnQtc2NyaXB0cy9jb250ZW50LXNjcmlwdC1jb250ZXh0Lm1qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVmaW5lQ29udGVudFNjcmlwdChkZWZpbml0aW9uKSB7XG4gIHJldHVybiBkZWZpbml0aW9uO1xufVxuIiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFwid2ViZXh0ZW5zaW9uLXBvbHlmaWxsXCIsIFtcIm1vZHVsZVwiXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KG1vZHVsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vZCA9IHtcbiAgICAgIGV4cG9ydHM6IHt9XG4gICAgfTtcbiAgICBmYWN0b3J5KG1vZCk7XG4gICAgZ2xvYmFsLmJyb3dzZXIgPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodHlwZW9mIGdsb2JhbFRoaXMgIT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWxUaGlzIDogdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xuICAvKiB3ZWJleHRlbnNpb24tcG9seWZpbGwgLSB2MC4xMi4wIC0gVHVlIE1heSAxNCAyMDI0IDE4OjAxOjI5ICovXG4gIC8qIC0qLSBNb2RlOiBpbmRlbnQtdGFicy1tb2RlOiBuaWw7IGpzLWluZGVudC1sZXZlbDogMiAtKi0gKi9cbiAgLyogdmltOiBzZXQgc3RzPTIgc3c9MiBldCB0dz04MDogKi9cbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuICAgKiBMaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG4gICAqIGZpbGUsIFlvdSBjYW4gb2J0YWluIG9uZSBhdCBodHRwOi8vbW96aWxsYS5vcmcvTVBMLzIuMC8uICovXG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIGlmICghKGdsb2JhbFRoaXMuY2hyb21lICYmIGdsb2JhbFRoaXMuY2hyb21lLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZS5pZCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGlzIHNjcmlwdCBzaG91bGQgb25seSBiZSBsb2FkZWQgaW4gYSBicm93c2VyIGV4dGVuc2lvbi5cIik7XG4gIH1cbiAgaWYgKCEoZ2xvYmFsVGhpcy5icm93c2VyICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lICYmIGdsb2JhbFRoaXMuYnJvd3Nlci5ydW50aW1lLmlkKSkge1xuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFwiVGhlIG1lc3NhZ2UgcG9ydCBjbG9zZWQgYmVmb3JlIGEgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkLlwiO1xuXG4gICAgLy8gV3JhcHBpbmcgdGhlIGJ1bGsgb2YgdGhpcyBwb2x5ZmlsbCBpbiBhIG9uZS10aW1lLXVzZSBmdW5jdGlvbiBpcyBhIG1pbm9yXG4gICAgLy8gb3B0aW1pemF0aW9uIGZvciBGaXJlZm94LiBTaW5jZSBTcGlkZXJtb25rZXkgZG9lcyBub3QgZnVsbHkgcGFyc2UgdGhlXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcbiAgICAvLyBuZXZlciBhY3R1YWxseSBuZWVkIHRvIGJlIGNhbGxlZCwgdGhpcyBhbGxvd3MgdGhlIHBvbHlmaWxsIHRvIGJlIGluY2x1ZGVkXG4gICAgLy8gaW4gRmlyZWZveCBuZWFybHkgZm9yIGZyZWUuXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcbiAgICAgIC8vIE5PVEU6IGFwaU1ldGFkYXRhIGlzIGFzc29jaWF0ZWQgdG8gdGhlIGNvbnRlbnQgb2YgdGhlIGFwaS1tZXRhZGF0YS5qc29uIGZpbGVcbiAgICAgIC8vIGF0IGJ1aWxkIHRpbWUgYnkgcmVwbGFjaW5nIHRoZSBmb2xsb3dpbmcgXCJpbmNsdWRlXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcbiAgICAgIC8vIEpTT04gZmlsZS5cbiAgICAgIGNvbnN0IGFwaU1ldGFkYXRhID0ge1xuICAgICAgICBcImFsYXJtc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsZWFyQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9va21hcmtzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldENoaWxkcmVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UmVjZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U3ViVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRyZWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlVHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzZXJBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZGlzYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVuYWJsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5Qb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VUZXh0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0SWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VGl0bGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJicm93c2luZ0RhdGFcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ2FjaGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDb29raWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRG93bmxvYWRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlRm9ybURhdGFcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVIaXN0b3J5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlTG9jYWxTdG9yYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGFzc3dvcmRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlUGx1Z2luRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tbWFuZHNcIjoge1xuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29udGV4dE1lbnVzXCI6IHtcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImNvb2tpZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsQ29va2llU3RvcmVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZGV2dG9vbHNcIjoge1xuICAgICAgICAgIFwiaW5zcGVjdGVkV2luZG93XCI6IHtcbiAgICAgICAgICAgIFwiZXZhbFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMixcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYW5lbHNcIjoge1xuICAgICAgICAgICAgXCJjcmVhdGVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDMsXG4gICAgICAgICAgICAgIFwic2luZ2xlQ2FsbGJhY2tBcmdcIjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZWxlbWVudHNcIjoge1xuICAgICAgICAgICAgICBcImNyZWF0ZVNpZGViYXJQYW5lXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImRvd25sb2Fkc1wiOiB7XG4gICAgICAgICAgXCJjYW5jZWxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkb3dubG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImVyYXNlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RmlsZUljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicGF1c2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGaWxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdW1lXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImV4dGVuc2lvblwiOiB7XG4gICAgICAgICAgXCJpc0FsbG93ZWRGaWxlU2NoZW1lQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaGlzdG9yeVwiOiB7XG4gICAgICAgICAgXCJhZGRVcmxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkZWxldGVSYW5nZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFZpc2l0c1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlYXJjaFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImkxOG5cIjoge1xuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBY2NlcHRMYW5ndWFnZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJpZGVudGl0eVwiOiB7XG4gICAgICAgICAgXCJsYXVuY2hXZWJBdXRoRmxvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkbGVcIjoge1xuICAgICAgICAgIFwicXVlcnlTdGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIm1hbmFnZW1lbnRcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0U2VsZlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEVuYWJsZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ1bmluc3RhbGxTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibm90aWZpY2F0aW9uc1wiOiB7XG4gICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFBlcm1pc3Npb25MZXZlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBhZ2VBY3Rpb25cIjoge1xuICAgICAgICAgIFwiZ2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNob3dcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwZXJtaXNzaW9uc1wiOiB7XG4gICAgICAgICAgXCJjb250YWluc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVlc3RcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJydW50aW1lXCI6IHtcbiAgICAgICAgICBcImdldEJhY2tncm91bmRQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGxhdGZvcm1JbmZvXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3Blbk9wdGlvbnNQYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFVwZGF0ZUNoZWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTmF0aXZlTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFVuaW5zdGFsbFVSTFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInNlc3Npb25zXCI6IHtcbiAgICAgICAgICBcImdldERldmljZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRseUNsb3NlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlc3RvcmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzdG9yYWdlXCI6IHtcbiAgICAgICAgICBcImxvY2FsXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibWFuYWdlZFwiOiB7XG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzeW5jXCI6IHtcbiAgICAgICAgICAgIFwiY2xlYXJcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0Qnl0ZXNJblVzZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidGFic1wiOiB7XG4gICAgICAgICAgXCJjYXB0dXJlVmlzaWJsZVRhYlwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRldGVjdExhbmd1YWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGlzY2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImR1cGxpY2F0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImV4ZWN1dGVTY3JpcHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRDdXJyZW50XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvQmFja1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdvRm9yd2FyZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImhpZ2hsaWdodFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImluc2VydENTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJxdWVyeVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbG9hZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNTU1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmRNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFpvb21TZXR0aW5nc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInRvcFNpdGVzXCI6IHtcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYk5hdmlnYXRpb25cIjoge1xuICAgICAgICAgIFwiZ2V0QWxsRnJhbWVzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0RnJhbWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3ZWJSZXF1ZXN0XCI6IHtcbiAgICAgICAgICBcImhhbmRsZXJCZWhhdmlvckNoYW5nZWRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ3aW5kb3dzXCI6IHtcbiAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRMYXN0Rm9jdXNlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVwZGF0ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcIik7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcbiAgICAgICAqIG5vdCBleGlzdCB3aGVuIGFjY2Vzc2VkLCBidXQgYmVoYXZlcyBleGFjdGx5IGFzIGFuIG9yZGluYXJ5IFdlYWtNYXBcbiAgICAgICAqIG90aGVyd2lzZS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjcmVhdGVJdGVtXG4gICAgICAgKiAgICAgICAgQSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCBpbiBvcmRlciB0byBjcmVhdGUgdGhlIHZhbHVlIGZvciBhbnlcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiByZWNlaXZlcywgYXMgaXRzIG9ubHkgYXJndW1lbnQsIHRoZSBrZXkgYmVpbmcgY3JlYXRlZC5cbiAgICAgICAqL1xuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcbiAgICAgICAgY29uc3RydWN0b3IoY3JlYXRlSXRlbSwgaXRlbXMgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzdXBlcihpdGVtcyk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcbiAgICAgICAgfVxuICAgICAgICBnZXQoa2V5KSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLnNldChrZXksIHRoaXMuY3JlYXRlSXRlbShrZXkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBvYmplY3QgaXMgYW4gb2JqZWN0IHdpdGggYSBgdGhlbmAgbWV0aG9kLCBhbmQgY2FuXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IGlzVGhlbmFibGUgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxuICAgICAgICogdGhlIGdpdmVuIHByb21pc2UgYmFzZWQgb24gaG93IGl0IGlzIGNhbGxlZDpcbiAgICAgICAqXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXG4gICAgICAgKiAgIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIHdpdGggdGhhdCB2YWx1ZS5cbiAgICAgICAqIC0gSWYgdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aXRoIGV4YWN0bHkgb25lIGFyZ3VtZW50LCB0aGUgcHJvbWlzZSBpc1xuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxuICAgICAgICogLSBPdGhlcndpc2UsIHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHRvIGFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZVxuICAgICAgICogICBmdW5jdGlvbidzIGFyZ3VtZW50cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gcHJvbWlzZVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSByZXNvbHV0aW9uIGFuZCByZWplY3Rpb24gZnVuY3Rpb25zIG9mIGFcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZXNvbHZlXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZXNvbHV0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlamVjdGlvbiBmdW5jdGlvbi5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICAgKiAgICAgICAgVGhlIGdlbmVyYXRlZCBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiAoLi4uY2FsbGJhY2tBcmdzKSA9PiB7XG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnIHx8IGNhbGxiYWNrQXJncy5sZW5ndGggPD0gMSAmJiBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3NbMF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2tBcmdzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgICAgY29uc3QgcGx1cmFsaXplQXJndW1lbnRzID0gbnVtQXJncyA9PiBudW1BcmdzID09IDEgPyBcImFyZ3VtZW50XCIgOiBcImFyZ3VtZW50c1wiO1xuXG4gICAgICAvKipcbiAgICAgICAqIENyZWF0ZXMgYSB3cmFwcGVyIGZ1bmN0aW9uIGZvciBhIG1ldGhvZCB3aXRoIHRoZSBnaXZlbiBuYW1lIGFuZCBtZXRhZGF0YS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAgICogICAgICAgIFRoZSBuYW1lIG9mIHRoZSBtZXRob2Qgd2hpY2ggaXMgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBtZXRhZGF0YVxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cbiAgICAgICAqIEBwYXJhbSB7aW50ZWdlcn0gbWV0YWRhdGEubWluQXJnc1xuICAgICAgICogICAgICAgIFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgd2hpY2ggbXVzdCBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5tYXhBcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uLiBJZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcbiAgICAgICAqICAgICAgICB3cmFwcGVyIHdpbGwgcmFpc2UgYW4gZXhjZXB0aW9uLlxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xuICAgICAgICogICAgICAgIFdoZXRoZXIgb3Igbm90IHRoZSBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggb25seSB0aGUgZmlyc3RcbiAgICAgICAqICAgICAgICBhcmd1bWVudCBvZiB0aGUgY2FsbGJhY2ssIGFsdGVybmF0aXZlbHkgYW4gYXJyYXkgb2YgYWxsIHRoZVxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIG9ubHkgYSBzaW5nbGUgYXJndW1lbnQsIHRoYXQgd2lsbCBiZVxuICAgICAgICogICAgICAgIHJlc29sdmVkIHRvIHRoZSBwcm9taXNlLCB3aGlsZSBhbGwgYXJndW1lbnRzIHdpbGwgYmUgcmVzb2x2ZWQgYXNcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXG4gICAgICAgKlxuICAgICAgICogQHJldHVybnMge2Z1bmN0aW9uKG9iamVjdCwgLi4uKil9XG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBBc3luY0Z1bmN0aW9uID0gKG5hbWUsIG1ldGFkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IGxlYXN0ICR7bWV0YWRhdGEubWluQXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWluQXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEV4cGVjdGVkIGF0IG1vc3QgJHttZXRhZGF0YS5tYXhBcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5tYXhBcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxuICAgICAgICAgICAgICAvLyBhbmQgc28gdGhlIHBvbHlmaWxsIHdpbGwgdHJ5IHRvIGNhbGwgaXQgd2l0aCBhIGNhbGxiYWNrIGZpcnN0LCBhbmQgaXQgd2lsbCBmYWxsYmFja1xuICAgICAgICAgICAgICAvLyB0byBub3QgcGFzc2luZyB0aGUgY2FsbGJhY2sgaWYgdGhlIGZpcnN0IGNhbGwgZmFpbHMuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MsIG1ha2VDYWxsYmFjayh7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgfSwgbWV0YWRhdGEpKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoY2JFcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcImZhbGxpbmcgYmFjayB0byBjYWxsIGl0IHdpdGhvdXQgYSBjYWxsYmFjazogXCIsIGNiRXJyb3IpO1xuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzKTtcblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSB0aGUgQVBJIG1ldGhvZCBtZXRhZGF0YSwgc28gdGhhdCB0aGUgbmV4dCBBUEkgY2FsbHMgd2lsbCBub3QgdHJ5IHRvXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSB1bnN1cHBvcnRlZCBjYWxsYmFjayBhbnltb3JlLlxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEubm9DYWxsYmFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1ldGFkYXRhLm5vQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXG4gICAgICAgKiBpbnRlcmNlcHRlZCBieSB0aGUgZ2l2ZW4gd3JhcHBlciBmdW5jdGlvbi4gVGhlIHdyYXBwZXIgZnVuY3Rpb24gcmVjZWl2ZXMsXG4gICAgICAgKiBhcyBpdHMgZmlyc3QgYXJndW1lbnQsIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YCBvYmplY3QsIGZvbGxvd2VkIGJ5IGVhY2ggb2ZcbiAgICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxuICAgICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZXRob2RcbiAgICAgICAqICAgICAgICBUaGUgbWV0aG9kIGJlaW5nIHdyYXBwZWQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgdGFyZ2V0IG9mIHRoZSBQcm94eVxuICAgICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHdyYXBwZXJcbiAgICAgICAqICAgICAgICBUaGUgd3JhcHBlciBmdW5jdGlvbiB3aGljaCBpcyBjYWxsZWQgaW4gcGxhY2Ugb2YgYSBkaXJlY3QgaW52b2NhdGlvblxuICAgICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8ZnVuY3Rpb24+fVxuICAgICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIGl0cyBwbGFjZS5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KG1ldGhvZCwge1xuICAgICAgICAgIGFwcGx5KHRhcmdldE1ldGhvZCwgdGhpc09iaiwgYXJncykge1xuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbGV0IGhhc093blByb3BlcnR5ID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIG9iamVjdCBpbiBhIFByb3h5IHdoaWNoIGludGVyY2VwdHMgYW5kIHdyYXBzIGNlcnRhaW4gbWV0aG9kc1xuICAgICAgICogYmFzZWQgb24gdGhlIGdpdmVuIGB3cmFwcGVyc2AgYW5kIGBtZXRhZGF0YWAgb2JqZWN0cy5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIHRhcmdldCBvYmplY3QgdG8gd3JhcC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW3dyYXBwZXJzID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyB3cmFwcGVyIGZ1bmN0aW9ucyBmb3Igc3BlY2lhbCBjYXNlcy4gQW55XG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gdGhlIHNhbWUgbG9jYXRpb24gaW4gdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlLiBUaGVzZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgbWV0aG9kcyBhcmUgaW52b2tlZCBhcyBkZXNjcmliZWQgaW4ge0BzZWUgd3JhcE1ldGhvZH0uXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFttZXRhZGF0YSA9IHt9XVxuICAgICAgICogICAgICAgIEFuIG9iamVjdCB0cmVlIGNvbnRhaW5pbmcgbWV0YWRhdGEgdXNlZCB0byBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlXG4gICAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cbiAgICAgICAqICAgICAgICB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUgd2hpY2ggaGFzIGEgY29ycmVzcG9uZGluZyBtZXRhZGF0YSBvYmplY3RcbiAgICAgICAqICAgICAgICBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYG1ldGFkYXRhYCB0cmVlIGlzIHJlcGxhY2VkIHdpdGggYW5cbiAgICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cbiAgICAgICAqICAgICAgICB7QHNlZSB3cmFwQXN5bmNGdW5jdGlvbn1cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcE9iamVjdCA9ICh0YXJnZXQsIHdyYXBwZXJzID0ge30sIG1ldGFkYXRhID0ge30pID0+IHtcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgbGV0IGhhbmRsZXJzID0ge1xuICAgICAgICAgIGhhcyhwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBnZXQocHJveHlUYXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gY2FjaGVbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xuICAgICAgICAgICAgICAvLyBhbnkgd3JhcHBpbmcuXG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgaGF2ZSBhIHNwZWNpYWwtY2FzZSB3cmFwcGVyIGZvciB0aGlzIG1ldGhvZC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIGFzeW5jIG1ldGhvZCB0aGF0IHdlIGhhdmUgbWV0YWRhdGEgZm9yLiBDcmVhdGUgYVxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXG4gICAgICAgICAgICAgICAgbGV0IHdyYXBwZXIgPSB3cmFwQXN5bmNGdW5jdGlvbihwcm9wLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwTWV0aG9kKHRhcmdldCwgdGFyZ2V0W3Byb3BdLCB3cmFwcGVyKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIHRoYXQgd2UgZG9uJ3Qga25vdyBvciBjYXJlIGFib3V0LiBSZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgLy8gb3JpZ2luYWwgbWV0aG9kLCBib3VuZCB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGFuIG9iamVjdCB0aGF0IHdlIG5lZWQgdG8gZG8gc29tZSB3cmFwcGluZyBmb3IgdGhlIGNoaWxkcmVuXG4gICAgICAgICAgICAgIC8vIG9mLiBDcmVhdGUgYSBzdWItb2JqZWN0IHdyYXBwZXIgZm9yIGl0IHdpdGggdGhlIGFwcHJvcHJpYXRlIGNoaWxkXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtwcm9wXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBcIipcIikpIHtcbiAgICAgICAgICAgICAgLy8gV3JhcCBhbGwgcHJvcGVydGllcyBpbiAqIG5hbWVzcGFjZS5cbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbXCIqXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIFdlIGRvbid0IG5lZWQgdG8gZG8gYW55IHdyYXBwaW5nIGZvciB0aGlzIHByb3BlcnR5LFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXG4gICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwge1xuICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcHJvcF07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhY2hlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXQocHJveHlUYXJnZXQsIHByb3AsIHZhbHVlLCByZWNlaXZlcikge1xuICAgICAgICAgICAgaWYgKHByb3AgaW4gY2FjaGUpIHtcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIGRlc2MpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KGNhY2hlLCBwcm9wKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gUGVyIGNvbnRyYWN0IG9mIHRoZSBQcm94eSBBUEksIHRoZSBcImdldFwiIHByb3h5IGhhbmRsZXIgbXVzdCByZXR1cm4gdGhlXG4gICAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXG4gICAgICAgIC8vIG5vbi1jb25maWd1cmFibGUuIEZvciB0aGlzIHJlYXNvbiwgd2UgY3JlYXRlIGFuIG9iamVjdCB3aXRoIHRoZVxuICAgICAgICAvLyBwcm90b3R5cGUgc2V0IHRvIGB0YXJnZXRgIGluc3RlYWQgb2YgdXNpbmcgYHRhcmdldGAgZGlyZWN0bHkuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XG4gICAgICAgIC8vIGFyZSBkZWNsYXJlZCByZWFkLW9ubHkgYW5kIG5vbi1jb25maWd1cmFibGUsIHN1Y2ggYXMgYGNocm9tZS5kZXZ0b29sc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxuICAgICAgICAvLyBpbnN0ZWFkIG9mIHRoZSBgcHJveHlUYXJnZXRgLCBzbyB0aGF0IHRoZSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIGFyZVxuICAgICAgICAvLyBkZXJlZmVyZW5jZWQgdmlhIHRoZSBvcmlnaW5hbCB0YXJnZXRzLlxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkocHJveHlUYXJnZXQsIGhhbmRsZXJzKTtcbiAgICAgIH07XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHNldCBvZiB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYW4gZXZlbnQgb2JqZWN0LCB3aGljaCBoYW5kbGVzXG4gICAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxuICAgICAgICpcbiAgICAgICAqIEEgc2luZ2xlIHdyYXBwZXIgaXMgY3JlYXRlZCBmb3IgZWFjaCBsaXN0ZW5lciBmdW5jdGlvbiwgYW5kIHN0b3JlZCBpbiBhXG4gICAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxuICAgICAgICogcmV0cmlldmUgdGhlIG9yaWdpbmFsIHdyYXBwZXIsIHNvIHRoYXQgIGF0dGVtcHRzIHRvIHJlbW92ZSBhXG4gICAgICAgKiBwcmV2aW91c2x5LWFkZGVkIGxpc3RlbmVyIHdvcmsgYXMgZXhwZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHtEZWZhdWx0V2Vha01hcDxmdW5jdGlvbiwgZnVuY3Rpb24+fSB3cmFwcGVyTWFwXG4gICAgICAgKiAgICAgICAgQSBEZWZhdWx0V2Vha01hcCBvYmplY3Qgd2hpY2ggd2lsbCBjcmVhdGUgdGhlIGFwcHJvcHJpYXRlIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXG4gICAgICAgKiAgICAgICAgYW4gZXhpc3Rpbmcgb25lIHdoZW4gaXQgZG9lcy5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwRXZlbnQgPSB3cmFwcGVyTWFwID0+ICh7XG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcbiAgICAgICAgICB0YXJnZXQuYWRkTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpLCAuLi5hcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHJldHVybiB0YXJnZXQuaGFzTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xuICAgICAgICAgIHRhcmdldC5yZW1vdmVMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMgPSBuZXcgRGVmYXVsdFdlYWtNYXAobGlzdGVuZXIgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogV3JhcHMgYW4gb25SZXF1ZXN0RmluaXNoZWQgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCB3aWxsIHJldHVybiBhXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjayBBUEkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcbiAgICAgICAgICogICAgICAgIFRoZSBIQVIgZW50cnkgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgbmV0d29yayByZXF1ZXN0LlxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRSZXEgPSB3cmFwT2JqZWN0KHJlcSwge30gLyogd3JhcHBlcnMgKi8sIHtcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgbWluQXJnczogMCxcbiAgICAgICAgICAgICAgbWF4QXJnczogMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxpc3RlbmVyKHdyYXBwZWRSZXEpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhIG1lc3NhZ2UgbGlzdGVuZXIgZnVuY3Rpb24gc28gdGhhdCBpdCBtYXkgc2VuZCByZXNwb25zZXMgYmFzZWQgb25cbiAgICAgICAgICogaXRzIHJldHVybiB2YWx1ZSwgcmF0aGVyIHRoYW4gYnkgcmV0dXJuaW5nIGEgc2VudGluZWwgdmFsdWUgYW5kIGNhbGxpbmcgYVxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcbiAgICAgICAgICogc2VudCB3aGVuIHRoZSBwcm9taXNlIGVpdGhlciByZXNvbHZlcyBvciByZWplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICAgICAgICogICAgICAgIFRoZSBtZXNzYWdlIHNlbnQgYnkgdGhlIG90aGVyIGVuZCBvZiB0aGUgY2hhbm5lbC5cbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHNlbmRlclxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxuICAgICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCopfSBzZW5kUmVzcG9uc2VcbiAgICAgICAgICogICAgICAgIEEgY2FsbGJhY2sgd2hpY2gsIHdoZW4gY2FsbGVkIHdpdGggYW4gYXJiaXRyYXJ5IGFyZ3VtZW50LCBzZW5kc1xuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgICAgICogICAgICAgIFRydWUgaWYgdGhlIHdyYXBwZWQgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCB3aGljaCB3aWxsIGxhdGVyXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgICBsZXQgd3JhcHBlZFNlbmRSZXNwb25zZTtcbiAgICAgICAgICBsZXQgc2VuZFJlc3BvbnNlUHJvbWlzZSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBkaWRDYWxsU2VuZFJlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlciwgd3JhcHBlZFNlbmRSZXNwb25zZSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBpc1Jlc3VsdFRoZW5hYmxlID0gcmVzdWx0ICE9PSB0cnVlICYmIGlzVGhlbmFibGUocmVzdWx0KTtcblxuICAgICAgICAgIC8vIElmIHRoZSBsaXN0ZW5lciBkaWRuJ3QgcmV0dXJuZWQgdHJ1ZSBvciBhIFByb21pc2UsIG9yIGNhbGxlZFxuICAgICAgICAgIC8vIHdyYXBwZWRTZW5kUmVzcG9uc2Ugc3luY2hyb25vdXNseSwgd2UgY2FuIGV4aXQgZWFybGllclxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cbiAgICAgICAgICBpZiAocmVzdWx0ICE9PSB0cnVlICYmICFpc1Jlc3VsdFRoZW5hYmxlICYmICFkaWRDYWxsU2VuZFJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQSBzbWFsbCBoZWxwZXIgdG8gc2VuZCB0aGUgbWVzc2FnZSBpZiB0aGUgcHJvbWlzZSByZXNvbHZlc1xuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXG4gICAgICAgICAgLy8gdG8gdHJhbnNsYXRlIHRoZSBtZXNzYWdlIGludG8gYSByZXNvbHZlZCBwcm9taXNlIG9yIGEgcmVqZWN0ZWRcbiAgICAgICAgICAvLyBwcm9taXNlKS5cbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbihtc2cgPT4ge1xuICAgICAgICAgICAgICAvLyBzZW5kIHRoZSBtZXNzYWdlIHZhbHVlLlxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCBhIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGlmIHRoZSByZWplY3RlZCB2YWx1ZVxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxuICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgaWYgKGVycm9yICYmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yIHx8IHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKSkge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkFuIHVuZXhwZWN0ZWQgZXJyb3Igb2NjdXJyZWRcIjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xuICAgICAgICAgICAgICAgIF9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXzogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgLy8gUHJpbnQgYW4gZXJyb3Igb24gdGhlIGNvbnNvbGUgaWYgdW5hYmxlIHRvIHNlbmQgdGhlIHJlc3BvbnNlLlxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgb25NZXNzYWdlIHJlamVjdGVkIHJlcGx5XCIsIGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIHJldHVybmVkIGEgUHJvbWlzZSwgc2VuZCB0aGUgcmVzb2x2ZWQgdmFsdWUgYXMgYVxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxuICAgICAgICAgIC8vIGNhbGxiYWNrIHRvIHJlc29sdmUgYW5kIHNlbmQgaXQgYXMgYSByZXNwb25zZS5cbiAgICAgICAgICBpZiAoaXNSZXN1bHRUaGVuYWJsZSkge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRQcm9taXNlZFJlc3VsdChzZW5kUmVzcG9uc2VQcm9taXNlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBMZXQgQ2hyb21lIGtub3cgdGhhdCB0aGUgbGlzdGVuZXIgaXMgcmVwbHlpbmcuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICByZXNvbHZlXG4gICAgICB9LCByZXBseSkgPT4ge1xuICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgIC8vIERldGVjdCB3aGVuIG5vbmUgb2YgdGhlIGxpc3RlbmVycyByZXBsaWVkIHRvIHRoZSBzZW5kTWVzc2FnZSBjYWxsIGFuZCByZXNvbHZlXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXG4gICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9pc3N1ZXMvMTMwXG4gICAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSA9PT0gQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFKSB7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcGx5ICYmIHJlcGx5Ll9fbW96V2ViRXh0ZW5zaW9uUG9seWZpbGxSZWplY3RfXykge1xuICAgICAgICAgIC8vIENvbnZlcnQgYmFjayB0aGUgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaW50b1xuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxuICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IocmVwbHkubWVzc2FnZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHdyYXBwZWRDYiA9IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrLmJpbmQobnVsbCwge1xuICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xuICAgICAgICAgIGFwaU5hbWVzcGFjZU9iai5zZW5kTWVzc2FnZSguLi5hcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgY29uc3Qgc3RhdGljV3JhcHBlcnMgPSB7XG4gICAgICAgIGRldnRvb2xzOiB7XG4gICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgb25SZXF1ZXN0RmluaXNoZWQ6IHdyYXBFdmVudChvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcnVudGltZToge1xuICAgICAgICAgIG9uTWVzc2FnZTogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICBzZW5kTWVzc2FnZTogd3JhcHBlZFNlbmRNZXNzYWdlLmJpbmQobnVsbCwgXCJzZW5kTWVzc2FnZVwiLCB7XG4gICAgICAgICAgICBtaW5BcmdzOiAyLFxuICAgICAgICAgICAgbWF4QXJnczogM1xuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XG4gICAgICAgIGNsZWFyOiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGdldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9LFxuICAgICAgICBzZXQ6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGFwaU1ldGFkYXRhLnByaXZhY3kgPSB7XG4gICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2VzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9LFxuICAgICAgICB3ZWJzaXRlczoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHJldHVybiB3cmFwT2JqZWN0KGV4dGVuc2lvbkFQSXMsIHN0YXRpY1dyYXBwZXJzLCBhcGlNZXRhZGF0YSk7XG4gICAgfTtcblxuICAgIC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcbiAgICAvLyBgbW9kdWxlYCB2YXJpYWJsZSBhdmFpbGFibGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB3cmFwQVBJcyhjaHJvbWUpO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsVGhpcy5icm93c2VyO1xuICB9XG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWJyb3dzZXItcG9seWZpbGwuanMubWFwXG4iLCJpbXBvcnQgb3JpZ2luYWxCcm93c2VyIGZyb20gXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcbmV4cG9ydCBjb25zdCBicm93c2VyID0gb3JpZ2luYWxCcm93c2VyO1xuIiwiZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29udGVudFNjcmlwdCh7XG4gIG1haW4oY3R4KSB7XG4gICAgY29uc3QgZG93bmxvYWRNb2RlbCA9IGFzeW5jIChtb2RlbE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgb2sgPSBjb25maXJtKFxuICAgICAgICBgW1BhZ2UgQXNzaXN0IEV4dGVuc2lvbl0gRG8geW91IHdhbnQgdG8gcHVsbCB0aGUgJHttb2RlbE5hbWV9IG1vZGVsPyBUaGlzIGhhcyBub3RoaW5nIHRvIGRvIHdpdGggdGhlIGh1Z2dpbmdmYWNlLmNvIHdlYnNpdGUuIFRoZSBtb2RlbCB3aWxsIGJlIHB1bGxlZCBsb2NhbGx5IG9uY2UgeW91IGNvbmZpcm0uIE1ha2Ugc3VyZSBPbGxhbWEgaXMgcnVubmluZy5gXG4gICAgICApXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgYFtQYWdlIEFzc2lzdCBFeHRlbnNpb25dIFB1bGxpbmcgJHttb2RlbE5hbWV9IG1vZGVsLiBGb3IgbW9yZSBkZXRhaWxzLCBjaGVjayB0aGUgZXh0ZW5zaW9uIGljb24uYFxuICAgICAgICApXG5cbiAgICAgICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiBcInB1bGxfbW9kZWxcIixcbiAgICAgICAgICBtb2RlbE5hbWVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRvd25sb2FkU1ZHID0gYFxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgMTZsLTYtNmg0VjRoNHY2aDRsLTYgNnpcIi8+XG4gICAgICAgICAgPHBhdGggZD1cIk00IDIwaDE2di0ySDR2MnpcIi8+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgYFxuXG4gICAgY29uc3QgaW5qZWN0RG93bmxvYWRCdXR0b24gPSAobW9kYWw6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBjb3B5QnV0dG9uID0gbW9kYWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgJ2J1dHRvblt0aXRsZT1cIkNvcHkgc25pcHBldCB0byBjbGlwYm9hcmRcIl0nXG4gICAgICApXG4gICAgICBpZiAoY29weUJ1dHRvbiAmJiAhbW9kYWwucXVlcnlTZWxlY3RvcihcIi5wYWdlYXNzaXN0LWRvd25sb2FkLWJ1dHRvblwiKSkge1xuICAgICAgICBjb25zdCBkb3dubG9hZEJ1dHRvbiA9IGNvcHlCdXR0b24uY2xvbmVOb2RlKHRydWUpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgIGRvd25sb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwYWdlYXNzaXN0LWRvd25sb2FkLWJ1dHRvblwiKVxuICAgICAgICBkb3dubG9hZEJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpIS5vdXRlckhUTUwgPSBkb3dubG9hZFNWR1xuICAgICAgICBkb3dubG9hZEJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKSEudGV4dENvbnRlbnQgPVxuICAgICAgICAgIFwiUHVsbCBmcm9tIFBhZ2UgQXNzaXN0XCJcbiAgICAgICAgZG93bmxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmVFbGVtZW50ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcInByZVwiKVxuICAgICAgICAgIGlmIChwcmVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgbW9kZWxDb21tYW5kID0gXCJcIlxuICAgICAgICAgICAgcHJlRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgbW9kZWxDb21tYW5kICs9IG5vZGUudGV4dENvbnRlbnRcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBtb2RlbENvbW1hbmQgKz0gbm9kZS52YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdEVsZW1lbnQgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBcInNlbGVjdFwiXG4gICAgICAgICAgICAgICAgKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICBtb2RlbENvbW1hbmQgKz0gc2VsZWN0RWxlbWVudC52YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBtb2RlbENvbW1hbmQgKz0gbm9kZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbW9kZWxDb21tYW5kID0gbW9kZWxDb21tYW5kLnRyaW0oKVxuXG4gICAgICAgICAgICBhd2FpdCBkb3dubG9hZE1vZGVsKFxuICAgICAgICAgICAgICBtb2RlbENvbW1hbmRcbiAgICAgICAgICAgICAgICA/LnJlcGxhY2VBbGwoXCJvbGxhbWEgcnVuXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgPy5yZXBsYWNlQWxsKFwib2xsYW1hIHB1bGxcIiwgXCJcIilcbiAgICAgICAgICAgICAgICA/LnRyaW0oKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtYi0zXCIpXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdmbGV4LWVuZCdcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvd25sb2FkQnV0dG9uKVxuICAgICAgICBtb2RhbC5xdWVyeVNlbGVjdG9yKFwicHJlXCIpIS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJhZnRlcmVuZFwiLCBidXR0b25Db250YWluZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICBmb3IgKGNvbnN0IG11dGF0aW9uIG9mIG11dGF0aW9ucykge1xuICAgICAgICBtdXRhdGlvbi5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IG5vZGUucXVlcnlTZWxlY3RvcihcIi5zaGFkb3ctYWx0ZXJuYXRlXCIpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgaW5qZWN0RG93bmxvYWRCdXR0b24obW9kYWwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBvYnNlcnZlci5vYnNlcnZlKGRvY3VtZW50LmJvZHksIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pXG4gIH0sXG4gIGFsbEZyYW1lczogdHJ1ZSxcbiAgbWF0Y2hlczogW1wiKjovL2h1Z2dpbmdmYWNlLmNvLypcIl1cbn0pXG4iLCJmdW5jdGlvbiBwcmludChtZXRob2QsIC4uLmFyZ3MpIHtcbiAgaWYgKGltcG9ydC5tZXRhLmVudi5NT0RFID09PSBcInByb2R1Y3Rpb25cIikgcmV0dXJuO1xuICBpZiAodHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYXJncy5zaGlmdCgpO1xuICAgIG1ldGhvZChgW3d4dF0gJHttZXNzYWdlfWAsIC4uLmFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIG1ldGhvZChcIlt3eHRdXCIsIC4uLmFyZ3MpO1xuICB9XG59XG5leHBvcnQgY29uc3QgbG9nZ2VyID0ge1xuICBkZWJ1ZzogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUuZGVidWcsIC4uLmFyZ3MpLFxuICBsb2c6ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLmxvZywgLi4uYXJncyksXG4gIHdhcm46ICguLi5hcmdzKSA9PiBwcmludChjb25zb2xlLndhcm4sIC4uLmFyZ3MpLFxuICBlcnJvcjogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUuZXJyb3IsIC4uLmFyZ3MpXG59O1xuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJ3eHQvYnJvd3NlclwiO1xuZXhwb3J0IGNsYXNzIFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQgZXh0ZW5kcyBFdmVudCB7XG4gIGNvbnN0cnVjdG9yKG5ld1VybCwgb2xkVXJsKSB7XG4gICAgc3VwZXIoV3h0TG9jYXRpb25DaGFuZ2VFdmVudC5FVkVOVF9OQU1FLCB7fSk7XG4gICAgdGhpcy5uZXdVcmwgPSBuZXdVcmw7XG4gICAgdGhpcy5vbGRVcmwgPSBvbGRVcmw7XG4gIH1cbiAgc3RhdGljIEVWRU5UX05BTUUgPSBnZXRVbmlxdWVFdmVudE5hbWUoXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5pcXVlRXZlbnROYW1lKGV2ZW50TmFtZSkge1xuICBjb25zdCBlbnRyeXBvaW50TmFtZSA9IHR5cGVvZiBpbXBvcnQubWV0YS5lbnYgPT09IFwidW5kZWZpbmVkXCIgPyBcImJ1aWxkXCIgOiBpbXBvcnQubWV0YS5lbnYuRU5UUllQT0lOVDtcbiAgcmV0dXJuIGAke2Jyb3dzZXI/LnJ1bnRpbWU/LmlkfToke2VudHJ5cG9pbnROYW1lfToke2V2ZW50TmFtZX1gO1xufVxuIiwiaW1wb3J0IHsgV3h0TG9jYXRpb25DaGFuZ2VFdmVudCB9IGZyb20gXCIuL2N1c3RvbS1ldmVudHMubWpzXCI7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25XYXRjaGVyKGN0eCkge1xuICBsZXQgaW50ZXJ2YWw7XG4gIGxldCBvbGRVcmw7XG4gIHJldHVybiB7XG4gICAgLyoqXG4gICAgICogRW5zdXJlIHRoZSBsb2NhdGlvbiB3YXRjaGVyIGlzIGFjdGl2ZWx5IGxvb2tpbmcgZm9yIFVSTCBjaGFuZ2VzLiBJZiBpdCdzIGFscmVhZHkgd2F0Y2hpbmcsXG4gICAgICogdGhpcyBpcyBhIG5vb3AuXG4gICAgICovXG4gICAgcnVuKCkge1xuICAgICAgaWYgKGludGVydmFsICE9IG51bGwpIHJldHVybjtcbiAgICAgIG9sZFVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICBpbnRlcnZhbCA9IGN0eC5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIGxldCBuZXdVcmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAobmV3VXJsLmhyZWYgIT09IG9sZFVybC5ocmVmKSB7XG4gICAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IFd4dExvY2F0aW9uQ2hhbmdlRXZlbnQobmV3VXJsLCBvbGRVcmwpKTtcbiAgICAgICAgICBvbGRVcmwgPSBuZXdVcmw7XG4gICAgICAgIH1cbiAgICAgIH0sIDFlMyk7XG4gICAgfVxuICB9O1xufVxuIiwiaW1wb3J0IHsgYnJvd3NlciB9IGZyb20gXCJ3eHQvYnJvd3NlclwiO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3NhbmRib3gvdXRpbHMvbG9nZ2VyLm1qc1wiO1xuaW1wb3J0IHsgZ2V0VW5pcXVlRXZlbnROYW1lIH0gZnJvbSBcIi4vY3VzdG9tLWV2ZW50cy5tanNcIjtcbmltcG9ydCB7IGNyZWF0ZUxvY2F0aW9uV2F0Y2hlciB9IGZyb20gXCIuL2xvY2F0aW9uLXdhdGNoZXIubWpzXCI7XG5leHBvcnQgY2xhc3MgQ29udGVudFNjcmlwdENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50U2NyaXB0TmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMuY29udGVudFNjcmlwdE5hbWUgPSBjb250ZW50U2NyaXB0TmFtZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuI2Fib3J0Q29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBpZiAodGhpcy4jaXNUb3BGcmFtZSkge1xuICAgICAgdGhpcy4jbGlzdGVuRm9yTmV3ZXJTY3JpcHRzKHsgaWdub3JlRmlyc3RFdmVudDogdHJ1ZSB9KTtcbiAgICAgIHRoaXMuI3N0b3BPbGRTY3JpcHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuI2xpc3RlbkZvck5ld2VyU2NyaXB0cygpO1xuICAgIH1cbiAgfVxuICBzdGF0aWMgU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFID0gXCJ3eHQ6Y29udGVudC1zY3JpcHQtc3RhcnRlZFwiO1xuICAjaXNUb3BGcmFtZSA9IHdpbmRvdy5zZWxmID09PSB3aW5kb3cudG9wO1xuICAjYWJvcnRDb250cm9sbGVyO1xuICAjbG9jYXRpb25XYXRjaGVyID0gY3JlYXRlTG9jYXRpb25XYXRjaGVyKHRoaXMpO1xuICBnZXQgc2lnbmFsKCkge1xuICAgIHJldHVybiB0aGlzLiNhYm9ydENvbnRyb2xsZXIuc2lnbmFsO1xuICB9XG4gIGFib3J0KHJlYXNvbikge1xuICAgIHJldHVybiB0aGlzLiNhYm9ydENvbnRyb2xsZXIuYWJvcnQocmVhc29uKTtcbiAgfVxuICBnZXQgaXNJbnZhbGlkKCkge1xuICAgIGlmIChicm93c2VyLnJ1bnRpbWUuaWQgPT0gbnVsbCkge1xuICAgICAgdGhpcy5ub3RpZnlJbnZhbGlkYXRlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaWduYWwuYWJvcnRlZDtcbiAgfVxuICBnZXQgaXNWYWxpZCgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNJbnZhbGlkO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBsaXN0ZW5lciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb250ZW50IHNjcmlwdCdzIGNvbnRleHQgaXMgaW52YWxpZGF0ZWQuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoZSBsaXN0ZW5lci5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihjYik7XG4gICAqIGNvbnN0IHJlbW92ZUludmFsaWRhdGVkTGlzdGVuZXIgPSBjdHgub25JbnZhbGlkYXRlZCgoKSA9PiB7XG4gICAqICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihjYik7XG4gICAqIH0pXG4gICAqIC8vIC4uLlxuICAgKiByZW1vdmVJbnZhbGlkYXRlZExpc3RlbmVyKCk7XG4gICAqL1xuICBvbkludmFsaWRhdGVkKGNiKSB7XG4gICAgdGhpcy5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGNiKTtcbiAgICByZXR1cm4gKCkgPT4gdGhpcy5zaWduYWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGNiKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IG5ldmVyIHJlc29sdmVzLiBVc2VmdWwgaWYgeW91IGhhdmUgYW4gYXN5bmMgZnVuY3Rpb24gdGhhdCBzaG91bGRuJ3QgcnVuXG4gICAqIGFmdGVyIHRoZSBjb250ZXh0IGlzIGV4cGlyZWQuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGdldFZhbHVlRnJvbVN0b3JhZ2UgPSBhc3luYyAoKSA9PiB7XG4gICAqICAgaWYgKGN0eC5pc0ludmFsaWQpIHJldHVybiBjdHguYmxvY2soKTtcbiAgICpcbiAgICogICAvLyAuLi5cbiAgICogfVxuICAgKi9cbiAgYmxvY2soKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5zZXRJbnRlcnZhbGAgdGhhdCBhdXRvbWF0aWNhbGx5IGNsZWFycyB0aGUgaW50ZXJ2YWwgd2hlbiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHNldEludGVydmFsKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIGhhbmRsZXIoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2xlYXJJbnRlcnZhbChpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5zZXRUaW1lb3V0YCB0aGF0IGF1dG9tYXRpY2FsbHkgY2xlYXJzIHRoZSBpbnRlcnZhbCB3aGVuIGludmFsaWRhdGVkLlxuICAgKi9cbiAgc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgY29uc3QgaWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIGhhbmRsZXIoKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2xlYXJUaW1lb3V0KGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZWAgdGhhdCBhdXRvbWF0aWNhbGx5IGNhbmNlbHMgdGhlIHJlcXVlc3Qgd2hlblxuICAgKiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjaykge1xuICAgIGNvbnN0IGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1ZhbGlkKSBjYWxsYmFjayguLi5hcmdzKTtcbiAgICB9KTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFja2AgdGhhdCBhdXRvbWF0aWNhbGx5IGNhbmNlbHMgdGhlIHJlcXVlc3Qgd2hlblxuICAgKiBpbnZhbGlkYXRlZC5cbiAgICovXG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2soY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmICghdGhpcy5zaWduYWwuYWJvcnRlZCkgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgdGhpcy5vbkludmFsaWRhdGVkKCgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogQ2FsbCBgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXJgIGFuZCByZW1vdmUgdGhlIGV2ZW50IGxpc3RlbmVyIHdoZW4gdGhlIGNvbnRleHQgaXMgaW52YWxpZGF0ZWQuXG4gICAqXG4gICAqIEluY2x1ZGVzIGFkZGl0aW9uYWwgZXZlbnRzIHVzZWZ1bCBmb3IgY29udGVudCBzY3JpcHRzOlxuICAgKlxuICAgKiAtIGBcInd4dDpsb2NhdGlvbmNoYW5nZVwiYCAtIFRyaWdnZXJlZCB3aGVuIEhUTUw1IGhpc3RvcnkgbW9kZSBpcyB1c2VkIHRvIGNoYW5nZSBVUkwuIENvbnRlbnRcbiAgICogICBzY3JpcHRzIGFyZSBub3QgcmVsb2FkZWQgd2hlbiBuYXZpZ2F0aW5nIHRoaXMgd2F5LCBzbyB0aGlzIGNhbiBiZSB1c2VkIHRvIHJlc2V0IHRoZSBjb250ZW50XG4gICAqICAgc2NyaXB0IHN0YXRlIG9uIFVSTCBjaGFuZ2UsIG9yIHJ1biBjdXN0b20gY29kZS5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY3R4LmFkZEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsIFwidmlzaWJpbGl0eWNoYW5nZVwiLCAoKSA9PiB7XG4gICAqICAgLy8gLi4uXG4gICAqIH0pO1xuICAgKiBjdHguYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIiwgKCkgPT4ge1xuICAgKiAgIC8vIC4uLlxuICAgKiB9KTtcbiAgICovXG4gIGFkZEV2ZW50TGlzdGVuZXIodGFyZ2V0LCB0eXBlLCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGUgPT09IFwid3h0OmxvY2F0aW9uY2hhbmdlXCIpIHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIHRoaXMuI2xvY2F0aW9uV2F0Y2hlci5ydW4oKTtcbiAgICB9XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXI/LihcbiAgICAgIHR5cGUuc3RhcnRzV2l0aChcInd4dDpcIikgPyBnZXRVbmlxdWVFdmVudE5hbWUodHlwZSkgOiB0eXBlLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogRXZlbnQgZG9uJ3QgbWF0Y2gsIGJ1dCB0aGF0J3MgT0ssIEV2ZW50VGFyZ2V0IGRvZXNuJ3QgYWxsb3cgY3VzdG9tIHR5cGVzIGluIHRoZSBjYWxsYmFja1xuICAgICAgaGFuZGxlcixcbiAgICAgIHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgc2lnbmFsOiB0aGlzLnNpZ25hbFxuICAgICAgfVxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKiBBYm9ydCB0aGUgYWJvcnQgY29udHJvbGxlciBhbmQgZXhlY3V0ZSBhbGwgYG9uSW52YWxpZGF0ZWRgIGxpc3RlbmVycy5cbiAgICovXG4gIG5vdGlmeUludmFsaWRhdGVkKCkge1xuICAgIHRoaXMuYWJvcnQoXCJDb250ZW50IHNjcmlwdCBjb250ZXh0IGludmFsaWRhdGVkXCIpO1xuICAgIGxvZ2dlci5kZWJ1ZyhcbiAgICAgIGBDb250ZW50IHNjcmlwdCBcIiR7dGhpcy5jb250ZW50U2NyaXB0TmFtZX1cIiBjb250ZXh0IGludmFsaWRhdGVkYFxuICAgICk7XG4gIH1cbiAgI3N0b3BPbGRTY3JpcHRzKCkge1xuICAgIHdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgIHtcbiAgICAgICAgdHlwZTogQ29udGVudFNjcmlwdENvbnRleHQuU0NSSVBUX1NUQVJURURfTUVTU0FHRV9UWVBFLFxuICAgICAgICBjb250ZW50U2NyaXB0TmFtZTogdGhpcy5jb250ZW50U2NyaXB0TmFtZVxuICAgICAgfSxcbiAgICAgIFwiKlwiXG4gICAgKTtcbiAgfVxuICAjbGlzdGVuRm9yTmV3ZXJTY3JpcHRzKG9wdGlvbnMpIHtcbiAgICBsZXQgaXNGaXJzdCA9IHRydWU7XG4gICAgY29uc3QgY2IgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmIChldmVudC5kYXRhPy50eXBlID09PSBDb250ZW50U2NyaXB0Q29udGV4dC5TQ1JJUFRfU1RBUlRFRF9NRVNTQUdFX1RZUEUgJiYgZXZlbnQuZGF0YT8uY29udGVudFNjcmlwdE5hbWUgPT09IHRoaXMuY29udGVudFNjcmlwdE5hbWUpIHtcbiAgICAgICAgY29uc3Qgd2FzRmlyc3QgPSBpc0ZpcnN0O1xuICAgICAgICBpc0ZpcnN0ID0gZmFsc2U7XG4gICAgICAgIGlmICh3YXNGaXJzdCAmJiBvcHRpb25zPy5pZ25vcmVGaXJzdEV2ZW50KSByZXR1cm47XG4gICAgICAgIHRoaXMubm90aWZ5SW52YWxpZGF0ZWQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGNiKTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgY2IpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInRoaXMiLCJwcmludCIsImxvZ2dlciJdLCJtYXBwaW5ncyI6Ijs7O0VBQU8sU0FBUyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUU7RUFDaEQsRUFBRSxPQUFPLFVBQVUsQ0FBQztFQUNwQjs7Ozs7Ozs7Ozs7RUNGQSxDQUFBLENBQUMsVUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFFO0tBR2lCO0VBQzdDLEtBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0VBQ3BCLElBTUc7RUFDSCxFQUFDLEVBQUUsT0FBTyxVQUFVLEtBQUssV0FBVyxHQUFHLFVBQVUsR0FBRyxPQUFPLElBQUksS0FBSyxXQUFXLEdBQUcsSUFBSSxHQUFHQSxjQUFJLEVBQUUsVUFBVSxNQUFNLEVBQUU7QUFRakg7S0FDRSxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRTtFQUN6RixLQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztNQUM5RTtLQUNELElBQUksRUFBRSxVQUFVLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQzVGLEtBQUksTUFBTSxnREFBZ0QsR0FBRyx5REFBeUQsQ0FBQztBQUN2SDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxLQUFJLE1BQU0sUUFBUSxHQUFHLGFBQWEsSUFBSTtFQUN0QztFQUNBO0VBQ0E7U0FDTSxNQUFNLFdBQVcsR0FBRztFQUMxQixTQUFR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QUNsQixRQUFRLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtFQUMzQixPQUFPO0VBQ1AsS0FBSyxDQUFDO0VBQ04sR0FBRztFQUNIO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsRUFBRSxpQkFBaUIsR0FBRztFQUN0QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQztFQUNyRCxJQUFJQyxRQUFNLENBQUMsS0FBSztFQUNoQixNQUFNLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDO0VBQ3RFLEtBQUssQ0FBQztFQUNOLEdBQUc7RUFDSCxFQUFFLGVBQWUsR0FBRztFQUNwQixJQUFJLE1BQU0sQ0FBQyxXQUFXO0VBQ3RCLE1BQU07RUFDTixRQUFRLElBQUksRUFBRSxvQkFBb0IsQ0FBQywyQkFBMkI7RUFDOUQsUUFBUSxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO0VBQ2pELE9BQU87RUFDUCxNQUFNLEdBQUc7RUFDVCxLQUFLLENBQUM7RUFDTixHQUFHO0VBQ0gsRUFBRSxzQkFBc0IsQ0FBQyxPQUFPLEVBQUU7RUFDbEMsSUFBSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7RUFDdkIsSUFBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssS0FBSztFQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEtBQUssb0JBQW9CLENBQUMsMkJBQTJCLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxpQkFBaUIsS0FBSyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7RUFDN0ksUUFBUSxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUM7RUFDakMsUUFBUSxPQUFPLEdBQUcsS0FBSyxDQUFDO0VBQ3hCLFFBQVEsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU87RUFDMUQsUUFBUSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztFQUNqQyxPQUFPO0VBQ1AsS0FBSyxDQUFDO0VBQ04sSUFBSSxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7RUFDcEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sbUJBQW1CLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDakUsR0FBRztFQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJ4X2dvb2dsZV9pZ25vcmVMaXN0IjpbMCwxLDIsNCw1LDYsN119
