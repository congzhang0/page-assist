var _ollama_pull = (function () {
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
          `[Page Assist Extension] Do you want to pull ${modelName} model? This has nothing to do with Ollama.com website. The model will be pulled locally once you confirm.`
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
      const downloadSVG = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 pageasssist-icon">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
    `;
      const codeDiv = document.querySelectorAll("div.language-none");
      for (let i = 0; i < codeDiv.length; i++) {
        const button = codeDiv[i].querySelector("button");
        const command = codeDiv[i].querySelector("input");
        if (button && command) {
          const newButton = document.createElement("button");
          newButton.innerHTML = downloadSVG;
          newButton.className = `border-l ${button.className}`;
          newButton.id = `download-${i}-pageassist`;
          const modelName = command?.value.replace("ollama run", "").replace("ollama pull", "").trim();
          newButton.addEventListener("click", () => {
            downloadModel(modelName);
          });
          const span = document.createElement("span");
          span.title = "Download model via Page Assist";
          span.appendChild(newButton);
          if (button.parentNode) {
            button.parentNode.appendChild(span);
          }
        }
      }
    },
    allFrames: true,
    matches: ["*://ollama.com/*"]
  });
  _ollama_pull;

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

  const __vite_import_meta_env__ = {"BASE_URL": "/", "BROWSER": "chrome", "CHROME": true, "COMMAND": "serve", "DEV": true, "EDGE": false, "ENTRYPOINT": "ollama-pull", "FIREFOX": false, "MANIFEST_VERSION": 3, "MODE": "development", "OPERA": false, "PROD": false, "SAFARI": false, "SSR": false, "VITE_CJS_IGNORE_WARNING": "true"};
  class WxtLocationChangeEvent extends Event {
    constructor(newUrl, oldUrl) {
      super(WxtLocationChangeEvent.EVENT_NAME, {});
      this.newUrl = newUrl;
      this.oldUrl = oldUrl;
    }
    static EVENT_NAME = getUniqueEventName("wxt:locationchange");
  }
  function getUniqueEventName(eventName) {
    const entrypointName = typeof (__vite_import_meta_env__) === "undefined" ? "build" : "ollama-pull";
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
      const ctx = new ContentScriptContext("ollama-pull", options);
      return await main(ctx);
    } catch (err) {
      logger.error(
        `The content script "${"ollama-pull"}" crashed on startup!`,
        err
      );
      throw err;
    }
  })();

  return result;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2xsYW1hLXB1bGwuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9zYW5kYm94L2RlZmluZS1jb250ZW50LXNjcmlwdC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2Rpc3QvYnJvd3Nlci1wb2x5ZmlsbC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9icm93c2VyL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9lbnRyaWVzL29sbGFtYS1wdWxsLmNvbnRlbnQudHMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3Qvc2FuZGJveC91dGlscy9sb2dnZXIubWpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3d4dC9kaXN0L2NsaWVudC9jb250ZW50LXNjcmlwdHMvY3VzdG9tLWV2ZW50cy5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvd3h0L2Rpc3QvY2xpZW50L2NvbnRlbnQtc2NyaXB0cy9sb2NhdGlvbi13YXRjaGVyLm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy93eHQvZGlzdC9jbGllbnQvY29udGVudC1zY3JpcHRzL2NvbnRlbnQtc2NyaXB0LWNvbnRleHQubWpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkZWZpbmVDb250ZW50U2NyaXB0KGRlZmluaXRpb24pIHtcbiAgcmV0dXJuIGRlZmluaXRpb247XG59XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcIiwgW1wibW9kdWxlXCJdLCBmYWN0b3J5KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZhY3RvcnkobW9kdWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kKTtcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xuICB9XG59KSh0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAobW9kdWxlKSB7XG4gIC8qIHdlYmV4dGVuc2lvbi1wb2x5ZmlsbCAtIHYwLjEyLjAgLSBUdWUgTWF5IDE0IDIwMjQgMTg6MDE6MjkgKi9cbiAgLyogLSotIE1vZGU6IGluZGVudC10YWJzLW1vZGU6IG5pbDsganMtaW5kZW50LWxldmVsOiAyIC0qLSAqL1xuICAvKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xuICAvKiBUaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG4gICAqIExpY2Vuc2UsIHYuIDIuMC4gSWYgYSBjb3B5IG9mIHRoZSBNUEwgd2FzIG5vdCBkaXN0cmlidXRlZCB3aXRoIHRoaXNcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgaWYgKCEoZ2xvYmFsVGhpcy5jaHJvbWUgJiYgZ2xvYmFsVGhpcy5jaHJvbWUucnVudGltZSAmJiBnbG9iYWxUaGlzLmNocm9tZS5ydW50aW1lLmlkKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlwiKTtcbiAgfVxuICBpZiAoIShnbG9iYWxUaGlzLmJyb3dzZXIgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUgJiYgZ2xvYmFsVGhpcy5icm93c2VyLnJ1bnRpbWUuaWQpKSB7XG4gICAgY29uc3QgQ0hST01FX1NFTkRfTUVTU0FHRV9DQUxMQkFDS19OT19SRVNQT05TRV9NRVNTQUdFID0gXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXCI7XG5cbiAgICAvLyBXcmFwcGluZyB0aGUgYnVsayBvZiB0aGlzIHBvbHlmaWxsIGluIGEgb25lLXRpbWUtdXNlIGZ1bmN0aW9uIGlzIGEgbWlub3JcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcbiAgICAvLyBjb250ZW50cyBvZiBhIGZ1bmN0aW9uIHVudGlsIHRoZSBmaXJzdCB0aW1lIGl0J3MgY2FsbGVkLCBhbmQgc2luY2UgaXQgd2lsbFxuICAgIC8vIG5ldmVyIGFjdHVhbGx5IG5lZWQgdG8gYmUgY2FsbGVkLCB0aGlzIGFsbG93cyB0aGUgcG9seWZpbGwgdG8gYmUgaW5jbHVkZWRcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cbiAgICBjb25zdCB3cmFwQVBJcyA9IGV4dGVuc2lvbkFQSXMgPT4ge1xuICAgICAgLy8gTk9URTogYXBpTWV0YWRhdGEgaXMgYXNzb2NpYXRlZCB0byB0aGUgY29udGVudCBvZiB0aGUgYXBpLW1ldGFkYXRhLmpzb24gZmlsZVxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcImluY2x1ZGVcIiB3aXRoIHRoZSBjb250ZW50IG9mIHRoZVxuICAgICAgLy8gSlNPTiBmaWxlLlxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XG4gICAgICAgIFwiYWxhcm1zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xlYXJBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJib29rbWFya3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q2hpbGRyZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRSZWNlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTdWJUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VHJlZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVUcmVlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiYnJvd3NlckFjdGlvblwiOiB7XG4gICAgICAgICAgXCJkaXNhYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZW5hYmxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib3BlblBvcHVwXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3JcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRCYWRnZVRleHRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRJY29uXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0UG9wdXBcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRUaXRsZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImJyb3dzaW5nRGF0YVwiOiB7XG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVDYWNoZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUNvb2tpZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVEb3dubG9hZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVGb3JtRGF0YVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUhpc3RvcnlcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVMb2NhbFN0b3JhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQYXNzd29yZHNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVQbHVnaW5EYXRhXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0dGluZ3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tYW5kc1wiOiB7XG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb250ZXh0TWVudXNcIjoge1xuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiY29va2llc1wiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxDb29raWVTdG9yZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJkZXZ0b29sc1wiOiB7XG4gICAgICAgICAgXCJpbnNwZWN0ZWRXaW5kb3dcIjoge1xuICAgICAgICAgICAgXCJldmFsXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyLFxuICAgICAgICAgICAgICBcInNpbmdsZUNhbGxiYWNrQXJnXCI6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInBhbmVsc1wiOiB7XG4gICAgICAgICAgICBcImNyZWF0ZVwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAzLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMyxcbiAgICAgICAgICAgICAgXCJzaW5nbGVDYWxsYmFja0FyZ1wiOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJlbGVtZW50c1wiOiB7XG4gICAgICAgICAgICAgIFwiY3JlYXRlU2lkZWJhclBhbmVcIjoge1xuICAgICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZG93bmxvYWRzXCI6IHtcbiAgICAgICAgICBcImNhbmNlbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRvd25sb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXJhc2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGaWxlSWNvblwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJwYXVzZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlbW92ZUZpbGVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXN1bWVcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZWFyY2hcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzaG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiZXh0ZW5zaW9uXCI6IHtcbiAgICAgICAgICBcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJpc0FsbG93ZWRJbmNvZ25pdG9BY2Nlc3NcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJoaXN0b3J5XCI6IHtcbiAgICAgICAgICBcImFkZFVybFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZUFsbFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImRlbGV0ZVJhbmdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGVsZXRlVXJsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0VmlzaXRzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VhcmNoXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaTE4blwiOiB7XG4gICAgICAgICAgXCJkZXRlY3RMYW5ndWFnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEFjY2VwdExhbmd1YWdlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcImlkZW50aXR5XCI6IHtcbiAgICAgICAgICBcImxhdW5jaFdlYkF1dGhGbG93XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwiaWRsZVwiOiB7XG4gICAgICAgICAgXCJxdWVyeVN0YXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibWFuYWdlbWVudFwiOiB7XG4gICAgICAgICAgXCJnZXRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRBbGxcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRTZWxmXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0RW5hYmxlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInVuaW5zdGFsbFNlbGZcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJub3RpZmljYXRpb25zXCI6IHtcbiAgICAgICAgICBcImNsZWFyXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0UGVybWlzc2lvbkxldmVsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwicGFnZUFjdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlkZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldEljb25cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRQb3B1cFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNldFRpdGxlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDEsXG4gICAgICAgICAgICBcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2hvd1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJmYWxsYmFja1RvTm9DYWxsYmFja1wiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInBlcm1pc3Npb25zXCI6IHtcbiAgICAgICAgICBcImNvbnRhaW5zXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWVzdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInJ1bnRpbWVcIjoge1xuICAgICAgICAgIFwiZ2V0QmFja2dyb3VuZFBhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRQbGF0Zm9ybUluZm9cIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJvcGVuT3B0aW9uc1BhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1ZXN0VXBkYXRlQ2hlY2tcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZW5kTWVzc2FnZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInNlbmROYXRpdmVNZXNzYWdlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0VW5pbnN0YWxsVVJMXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwic2Vzc2lvbnNcIjoge1xuICAgICAgICAgIFwiZ2V0RGV2aWNlc1wiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFJlY2VudGx5Q2xvc2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVzdG9yZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcInN0b3JhZ2VcIjoge1xuICAgICAgICAgIFwibG9jYWxcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJtYW5hZ2VkXCI6IHtcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInN5bmNcIjoge1xuICAgICAgICAgICAgXCJjbGVhclwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZXRCeXRlc0luVXNlXCI6IHtcbiAgICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZW1vdmVcIjoge1xuICAgICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInNldFwiOiB7XG4gICAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWJzXCI6IHtcbiAgICAgICAgICBcImNhcHR1cmVWaXNpYmxlVGFiXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZGV0ZWN0TGFuZ3VhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJkaXNjYXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZHVwbGljYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZXhlY3V0ZVNjcmlwdFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldEN1cnJlbnRcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDAsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29CYWNrXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ29Gb3J3YXJkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaGlnaGxpZ2h0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiaW5zZXJ0Q1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwibW92ZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMixcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInF1ZXJ5XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVsb2FkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlQ1NTXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2VuZE1lc3NhZ2VcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDIsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogM1xuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJzZXRab29tXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwic2V0Wm9vbVNldHRpbmdzXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwidG9wU2l0ZXNcIjoge1xuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDBcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwid2ViTmF2aWdhdGlvblwiOiB7XG4gICAgICAgICAgXCJnZXRBbGxGcmFtZXNcIjoge1xuICAgICAgICAgICAgXCJtaW5BcmdzXCI6IDEsXG4gICAgICAgICAgICBcIm1heEFyZ3NcIjogMVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJnZXRGcmFtZVwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMSxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndlYlJlcXVlc3RcIjoge1xuICAgICAgICAgIFwiaGFuZGxlckJlaGF2aW9yQ2hhbmdlZFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgIFwiY3JlYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0XCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0QWxsXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZ2V0Q3VycmVudFwiOiB7XG4gICAgICAgICAgICBcIm1pbkFyZ3NcIjogMCxcbiAgICAgICAgICAgIFwibWF4QXJnc1wiOiAxXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImdldExhc3RGb2N1c2VkXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAwLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAxLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwidXBkYXRlXCI6IHtcbiAgICAgICAgICAgIFwibWluQXJnc1wiOiAyLFxuICAgICAgICAgICAgXCJtYXhBcmdzXCI6IDJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBpZiAoT2JqZWN0LmtleXMoYXBpTWV0YWRhdGEpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJhcGktbWV0YWRhdGEuanNvbiBoYXMgbm90IGJlZW4gaW5jbHVkZWQgaW4gYnJvd3Nlci1wb2x5ZmlsbFwiKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBBIFdlYWtNYXAgc3ViY2xhc3Mgd2hpY2ggY3JlYXRlcyBhbmQgc3RvcmVzIGEgdmFsdWUgZm9yIGFueSBrZXkgd2hpY2ggZG9lc1xuICAgICAgICogbm90IGV4aXN0IHdoZW4gYWNjZXNzZWQsIGJ1dCBiZWhhdmVzIGV4YWN0bHkgYXMgYW4gb3JkaW5hcnkgV2Vha01hcFxuICAgICAgICogb3RoZXJ3aXNlLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNyZWF0ZUl0ZW1cbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxuICAgICAgICogICAgICAgIGtleSB3aGljaCBkb2VzIG5vdCBleGlzdCwgdGhlIGZpcnN0IHRpbWUgaXQgaXMgYWNjZXNzZWQuIFRoZVxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVzLCBhcyBpdHMgb25seSBhcmd1bWVudCwgdGhlIGtleSBiZWluZyBjcmVhdGVkLlxuICAgICAgICovXG4gICAgICBjbGFzcyBEZWZhdWx0V2Vha01hcCBleHRlbmRzIFdlYWtNYXAge1xuICAgICAgICBjb25zdHJ1Y3RvcihjcmVhdGVJdGVtLCBpdGVtcyA9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUl0ZW0gPSBjcmVhdGVJdGVtO1xuICAgICAgICB9XG4gICAgICAgIGdldChrZXkpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaGFzKGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0KGtleSwgdGhpcy5jcmVhdGVJdGVtKGtleSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0KGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cbiAgICAgICAqIHRoZXJlZm9yZSBiZSBhc3N1bWVkIHRvIGJlaGF2ZSBhcyBhIFByb21pc2UuXG4gICAgICAgKlxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAgICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB0aGVuYWJsZS5cbiAgICAgICAqL1xuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcbiAgICAgICAgcmV0dXJuIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgZnVuY3Rpb24gd2hpY2gsIHdoZW4gY2FsbGVkLCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0XG4gICAgICAgKiB0aGUgZ2l2ZW4gcHJvbWlzZSBiYXNlZCBvbiBob3cgaXQgaXMgY2FsbGVkOlxuICAgICAgICpcbiAgICAgICAqIC0gSWYsIHdoZW4gY2FsbGVkLCBgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yYCBjb250YWlucyBhIG5vbi1udWxsIG9iamVjdCxcbiAgICAgICAqICAgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQgd2l0aCB0aGF0IHZhbHVlLlxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXG4gICAgICAgKiAgIHJlc29sdmVkIHRvIHRoYXQgdmFsdWUuXG4gICAgICAgKiAtIE90aGVyd2lzZSwgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgdG8gYW4gYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwcm9taXNlXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxuICAgICAgICogICAgICAgIHByb21pc2UuXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlc29sdmVcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcm9taXNlLnJlamVjdFxuICAgICAgICogICAgICAgIFRoZSBwcm9taXNlJ3MgcmVqZWN0aW9uIGZ1bmN0aW9uLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIHdyYXBwZWQgbWV0aG9kIHdoaWNoIGhhcyBjcmVhdGVkIHRoZSBjYWxsYmFjay5cbiAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmdcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XG4gICAgICAgKiAgICAgICAgYXJndW1lbnQgb2YgdGhlIGNhbGxiYWNrLCBhbHRlcm5hdGl2ZWx5IGFuIGFycmF5IG9mIGFsbCB0aGVcbiAgICAgICAqICAgICAgICBjYWxsYmFjayBhcmd1bWVudHMgaXMgcmVzb2x2ZWQuIEJ5IGRlZmF1bHQsIGlmIHRoZSBjYWxsYmFja1xuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcbiAgICAgICAqICAgICAgICByZXNvbHZlZCB0byB0aGUgcHJvbWlzZSwgd2hpbGUgYWxsIGFyZ3VtZW50cyB3aWxsIGJlIHJlc29sdmVkIGFzXG4gICAgICAgKiAgICAgICAgYW4gYXJyYXkgaWYgbXVsdGlwbGUgYXJlIGdpdmVuLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgICAqICAgICAgICBUaGUgZ2VuZXJhdGVkIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICovXG4gICAgICBjb25zdCBtYWtlQ2FsbGJhY2sgPSAocHJvbWlzZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuICguLi5jYWxsYmFja0FyZ3MpID0+IHtcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSkpO1xuICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgfHwgY2FsbGJhY2tBcmdzLmxlbmd0aCA8PSAxICYmIG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb21pc2UucmVzb2x2ZShjYWxsYmFja0FyZ3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFwiYXJndW1lbnRcIiA6IFwiYXJndW1lbnRzXCI7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ3JlYXRlcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIGEgbWV0aG9kIHdpdGggdGhlIGdpdmVuIG5hbWUgYW5kIG1ldGFkYXRhLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICAgKiAgICAgICAgVGhlIG5hbWUgb2YgdGhlIG1ldGhvZCB3aGljaCBpcyBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXG4gICAgICAgKiAgICAgICAgTWV0YWRhdGEgYWJvdXQgdGhlIG1ldGhvZCBiZWluZyB3cmFwcGVkLlxuICAgICAgICogQHBhcmFtIHtpbnRlZ2VyfSBtZXRhZGF0YS5taW5BcmdzXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggZmV3ZXIgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcbiAgICAgICAqICAgICAgICBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHdoaWNoIG1heSBiZSBwYXNzZWQgdG8gdGhlXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiB0aGlzIG51bWJlciBvZiBhcmd1bWVudHMsIHRoZVxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXG4gICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1ldGFkYXRhLnNpbmdsZUNhbGxiYWNrQXJnXG4gICAgICAgKiAgICAgICAgV2hldGhlciBvciBub3QgdGhlIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCBvbmx5IHRoZSBmaXJzdFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXG4gICAgICAgKiAgICAgICAgY2FsbGJhY2sgYXJndW1lbnRzIGlzIHJlc29sdmVkLiBCeSBkZWZhdWx0LCBpZiB0aGUgY2FsbGJhY2tcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBpcyBpbnZva2VkIHdpdGggb25seSBhIHNpbmdsZSBhcmd1bWVudCwgdGhhdCB3aWxsIGJlXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xuICAgICAgICogICAgICAgIGFuIGFycmF5IGlmIG11bHRpcGxlIGFyZSBnaXZlbi5cbiAgICAgICAqXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cbiAgICAgICAqICAgICAgIFRoZSBnZW5lcmF0ZWQgd3JhcHBlciBmdW5jdGlvbi5cbiAgICAgICAqL1xuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGFzeW5jRnVuY3Rpb25XcmFwcGVyKHRhcmdldCwgLi4uYXJncykge1xuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICAvLyBUaGlzIEFQSSBtZXRob2QgaGFzIGN1cnJlbnRseSBubyBjYWxsYmFjayBvbiBDaHJvbWUsIGJ1dCBpdCByZXR1cm4gYSBwcm9taXNlIG9uIEZpcmVmb3gsXG4gICAgICAgICAgICAgIC8vIGFuZCBzbyB0aGUgcG9seWZpbGwgd2lsbCB0cnkgdG8gY2FsbCBpdCB3aXRoIGEgY2FsbGJhY2sgZmlyc3QsIGFuZCBpdCB3aWxsIGZhbGxiYWNrXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cbiAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncywgbWFrZUNhbGxiYWNrKHtcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICB9LCBtZXRhZGF0YSkpO1xuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGAke25hbWV9IEFQSSBtZXRob2QgZG9lc24ndCBzZWVtIHRvIHN1cHBvcnQgdGhlIGNhbGxiYWNrIHBhcmFtZXRlciwgYCArIFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcIiwgY2JFcnJvcik7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBBUEkgbWV0aG9kIG1ldGFkYXRhLCBzbyB0aGF0IHRoZSBuZXh0IEFQSSBjYWxscyB3aWxsIG5vdCB0cnkgdG9cbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXG4gICAgICAgICAgICAgICAgbWV0YWRhdGEuZmFsbGJhY2tUb05vQ2FsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YS5ub0NhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWV0YWRhdGEubm9DYWxsYmFjaykge1xuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICAvKipcbiAgICAgICAqIFdyYXBzIGFuIGV4aXN0aW5nIG1ldGhvZCBvZiB0aGUgdGFyZ2V0IG9iamVjdCwgc28gdGhhdCBjYWxscyB0byBpdCBhcmVcbiAgICAgICAqIGludGVyY2VwdGVkIGJ5IHRoZSBnaXZlbiB3cmFwcGVyIGZ1bmN0aW9uLiBUaGUgd3JhcHBlciBmdW5jdGlvbiByZWNlaXZlcyxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxuICAgICAgICogdGhlIGFyZ3VtZW50cyBwYXNzZWQgdG8gdGhlIG9yaWdpbmFsIG1ldGhvZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XG4gICAgICAgKiAgICAgICAgVGhlIG9yaWdpbmFsIHRhcmdldCBvYmplY3QgdGhhdCB0aGUgd3JhcHBlZCBtZXRob2QgYmVsb25ncyB0by5cbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG1ldGhvZFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XG4gICAgICAgKiAgICAgICAgb2JqZWN0IHdoaWNoIGlzIGNyZWF0ZWQgdG8gd3JhcCB0aGUgbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gd3JhcHBlclxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXG4gICAgICAgKiAgICAgICAgb2YgdGhlIHdyYXBwZWQgbWV0aG9kLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XG4gICAgICAgKiAgICAgICAgQSBQcm94eSBvYmplY3QgZm9yIHRoZSBnaXZlbiBtZXRob2QsIHdoaWNoIGludm9rZXMgdGhlIGdpdmVuIHdyYXBwZXJcbiAgICAgICAqICAgICAgICBtZXRob2QgaW4gaXRzIHBsYWNlLlxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwTWV0aG9kID0gKHRhcmdldCwgbWV0aG9kLCB3cmFwcGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkobWV0aG9kLCB7XG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcHBlci5jYWxsKHRoaXNPYmosIHRhcmdldCwgLi4uYXJncyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgaGFzT3duUHJvcGVydHkgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICAgIC8qKlxuICAgICAgICogV3JhcHMgYW4gb2JqZWN0IGluIGEgUHJveHkgd2hpY2ggaW50ZXJjZXB0cyBhbmQgd3JhcHMgY2VydGFpbiBtZXRob2RzXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0YXJnZXRcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbd3JhcHBlcnMgPSB7fV1cbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcbiAgICAgICAqICAgICAgICBmdW5jdGlvbiBwcmVzZW50IGluIHRoaXMgb2JqZWN0IHRyZWUgaXMgY2FsbGVkIGluIHBsYWNlIG9mIHRoZVxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiB0aGUgc2FtZSBsb2NhdGlvbiBpbiB0aGUgYHRhcmdldGAgb2JqZWN0IHRyZWUuIFRoZXNlXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gW21ldGFkYXRhID0ge31dXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcbiAgICAgICAqICAgICAgICBQcm9taXNlLWJhc2VkIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhc3luY2hyb25vdXMuIEFueSBmdW5jdGlvbiBpblxuICAgICAgICogICAgICAgIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZSB3aGljaCBoYXMgYSBjb3JyZXNwb25kaW5nIG1ldGFkYXRhIG9iamVjdFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxuICAgICAgICogICAgICAgIGF1dG9tYXRpY2FsbHktZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24sIGFzIGRlc2NyaWJlZCBpblxuICAgICAgICogICAgICAgIHtAc2VlIHdyYXBBc3luY0Z1bmN0aW9ufVxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxvYmplY3Q+fVxuICAgICAgICovXG4gICAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xuICAgICAgICBsZXQgY2FjaGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICBsZXQgaGFuZGxlcnMgPSB7XG4gICAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQgfHwgcHJvcCBpbiBjYWNoZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGlmIChwcm9wIGluIGNhY2hlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYWNoZVtwcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gdGFyZ2V0KSkge1xuICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbHVlID0gdGFyZ2V0W3Byb3BdO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2Qgb24gdGhlIHVuZGVybHlpbmcgb2JqZWN0LiBDaGVjayBpZiB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAgIC8vIGFueSB3cmFwcGluZy5cblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIHdyYXBwZXJzW3Byb3BdID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxuICAgICAgICAgICAgICAgIHZhbHVlID0gd3JhcE1ldGhvZCh0YXJnZXQsIHRhcmdldFtwcm9wXSwgd3JhcHBlcnNbcHJvcF0pO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhhc093blByb3BlcnR5KG1ldGFkYXRhLCBwcm9wKSkge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXG4gICAgICAgICAgICAgICAgLy8gUHJvbWlzZSB3cmFwcGVyIGZvciBpdC5cbiAgICAgICAgICAgICAgICBsZXQgd3JhcHBlciA9IHdyYXBBc3luY0Z1bmN0aW9uKHByb3AsIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBtZXRob2QgdGhhdCB3ZSBkb24ndCBrbm93IG9yIGNhcmUgYWJvdXQuIFJldHVybiB0aGVcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmJpbmQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwgJiYgKGhhc093blByb3BlcnR5KHdyYXBwZXJzLCBwcm9wKSB8fCBoYXNPd25Qcm9wZXJ0eShtZXRhZGF0YSwgcHJvcCkpKSB7XG4gICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gb2JqZWN0IHRoYXQgd2UgbmVlZCB0byBkbyBzb21lIHdyYXBwaW5nIGZvciB0aGUgY2hpbGRyZW5cbiAgICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcbiAgICAgICAgICAgICAgLy8gbWV0YWRhdGEuXG4gICAgICAgICAgICAgIHZhbHVlID0gd3JhcE9iamVjdCh2YWx1ZSwgd3JhcHBlcnNbcHJvcF0sIG1ldGFkYXRhW3Byb3BdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFwiKlwiKSkge1xuICAgICAgICAgICAgICAvLyBXcmFwIGFsbCBwcm9wZXJ0aWVzIGluICogbmFtZXNwYWNlLlxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcIipcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXG4gICAgICAgICAgICAgIC8vIHNvIGp1c3QgZm9yd2FyZCBhbGwgYWNjZXNzIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cbiAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCB7XG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNldChwcm94eVRhcmdldCwgcHJvcCwgdmFsdWUsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xuICAgICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHByb3h5VGFyZ2V0LCBwcm9wLCBkZXNjKSB7XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShjYWNoZSwgcHJvcCwgZGVzYyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWxldGVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZGVsZXRlUHJvcGVydHkoY2FjaGUsIHByb3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQZXIgY29udHJhY3Qgb2YgdGhlIFByb3h5IEFQSSwgdGhlIFwiZ2V0XCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcbiAgICAgICAgLy8gb3JpZ2luYWwgdmFsdWUgb2YgdGhlIHRhcmdldCBpZiB0aGF0IHZhbHVlIGlzIGRlY2xhcmVkIHJlYWQtb25seSBhbmRcbiAgICAgICAgLy8gbm9uLWNvbmZpZ3VyYWJsZS4gRm9yIHRoaXMgcmVhc29uLCB3ZSBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhlXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cbiAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGNhbm5vdCByZXR1cm4gYSBjdXN0b20gb2JqZWN0IGZvciBBUElzIHRoYXRcbiAgICAgICAgLy8gYXJlIGRlY2xhcmVkIHJlYWQtb25seSBhbmQgbm9uLWNvbmZpZ3VyYWJsZSwgc3VjaCBhcyBgY2hyb21lLmRldnRvb2xzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gVGhlIHByb3h5IGhhbmRsZXJzIHRoZW1zZWx2ZXMgd2lsbCBzdGlsbCB1c2UgdGhlIG9yaWdpbmFsIGB0YXJnZXRgXG4gICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGBwcm94eVRhcmdldGAsIHNvIHRoYXQgdGhlIG1ldGhvZHMgYW5kIHByb3BlcnRpZXMgYXJlXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXG4gICAgICAgIGxldCBwcm94eVRhcmdldCA9IE9iamVjdC5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShwcm94eVRhcmdldCwgaGFuZGxlcnMpO1xuICAgICAgfTtcblxuICAgICAgLyoqXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcbiAgICAgICAqIHdyYXBwaW5nIG9mIGxpc3RlbmVyIGZ1bmN0aW9ucyB0aGF0IHRob3NlIG1lc3NhZ2VzIGFyZSBwYXNzZWQuXG4gICAgICAgKlxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcbiAgICAgICAqIG1hcC4gU3Vic2VxdWVudCBjYWxscyB0byBgYWRkTGlzdGVuZXJgLCBgaGFzTGlzdGVuZXJgLCBvciBgcmVtb3ZlTGlzdGVuZXJgXG4gICAgICAgKiByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgd3JhcHBlciwgc28gdGhhdCAgYXR0ZW1wdHMgdG8gcmVtb3ZlIGFcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge0RlZmF1bHRXZWFrTWFwPGZ1bmN0aW9uLCBmdW5jdGlvbj59IHdyYXBwZXJNYXBcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxuICAgICAgICogICAgICAgIGZvciBhIGdpdmVuIGxpc3RlbmVyIGZ1bmN0aW9uIHdoZW4gb25lIGRvZXMgbm90IGV4aXN0LCBhbmQgcmV0cmlldmVcbiAgICAgICAqICAgICAgICBhbiBleGlzdGluZyBvbmUgd2hlbiBpdCBkb2VzLlxuICAgICAgICpcbiAgICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcbiAgICAgICAgYWRkTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lciwgLi4uYXJncykge1xuICAgICAgICAgIHRhcmdldC5hZGRMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lciksIC4uLmFyZ3MpO1xuICAgICAgICB9LFxuICAgICAgICBoYXNMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldC5oYXNMaXN0ZW5lcih3cmFwcGVyTWFwLmdldChsaXN0ZW5lcikpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVMaXN0ZW5lcih0YXJnZXQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgdGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY29uc3Qgb25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcbiAgICAgICAgICogYGdldENvbnRlbnQoKWAgcHJvcGVydHkgd2hpY2ggcmV0dXJucyBhIGBQcm9taXNlYCByYXRoZXIgdGhhbiB1c2luZyBhXG4gICAgICAgICAqIGNhbGxiYWNrIEFQSS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtvYmplY3R9IHJlcVxuICAgICAgICAgKiAgICAgICAgVGhlIEhBUiBlbnRyeSBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBuZXR3b3JrIHJlcXVlc3QuXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gb25SZXF1ZXN0RmluaXNoZWQocmVxKSB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZFJlcSA9IHdyYXBPYmplY3QocmVxLCB7fSAvKiB3cmFwcGVycyAqLywge1xuICAgICAgICAgICAgZ2V0Q29udGVudDoge1xuICAgICAgICAgICAgICBtaW5BcmdzOiAwLFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9uTWVzc2FnZVdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdyYXBzIGEgbWVzc2FnZSBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IG1heSBzZW5kIHJlc3BvbnNlcyBiYXNlZCBvblxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXG4gICAgICAgICAqIGNhbGxiYWNrLiBJZiB0aGUgbGlzdGVuZXIgZnVuY3Rpb24gcmV0dXJucyBhIFByb21pc2UsIHRoZSByZXNwb25zZSBpc1xuICAgICAgICAgKiBzZW50IHdoZW4gdGhlIHByb21pc2UgZWl0aGVyIHJlc29sdmVzIG9yIHJlamVjdHMuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Kn0gbWVzc2FnZVxuICAgICAgICAgKiAgICAgICAgVGhlIG1lc3NhZ2Ugc2VudCBieSB0aGUgb3RoZXIgZW5kIG9mIHRoZSBjaGFubmVsLlxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXG4gICAgICAgICAqICAgICAgICBEZXRhaWxzIGFib3V0IHRoZSBzZW5kZXIgb2YgdGhlIG1lc3NhZ2UuXG4gICAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb24oKil9IHNlbmRSZXNwb25zZVxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXG4gICAgICAgICAqICAgICAgICB0aGF0IHZhbHVlIGFzIGEgcmVzcG9uc2UuXG4gICAgICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcbiAgICAgICAgICogICAgICAgIHlpZWxkIGEgcmVzcG9uc2UuIEZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICBsZXQgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IGZhbHNlO1xuICAgICAgICAgIGxldCB3cmFwcGVkU2VuZFJlc3BvbnNlO1xuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICB3cmFwcGVkU2VuZFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGRpZENhbGxTZW5kUmVzcG9uc2UgPSB0cnVlO1xuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbGlzdGVuZXIobWVzc2FnZSwgc2VuZGVyLCB3cmFwcGVkU2VuZFJlc3BvbnNlKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpO1xuXG4gICAgICAgICAgLy8gSWYgdGhlIGxpc3RlbmVyIGRpZG4ndCByZXR1cm5lZCB0cnVlIG9yIGEgUHJvbWlzZSwgb3IgY2FsbGVkXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGVyZSB3aWxsIGJlIG5vIHJlc3BvbnNlIHNlbnQgZnJvbSB0aGlzIGxpc3RlbmVyLlxuICAgICAgICAgIGlmIChyZXN1bHQgIT09IHRydWUgJiYgIWlzUmVzdWx0VGhlbmFibGUgJiYgIWRpZENhbGxTZW5kUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXG4gICAgICAgICAgLy8gYW5kIGFuIGVycm9yIGlmIHRoZSBwcm9taXNlIHJlamVjdHMgKGEgd3JhcHBlZCBzZW5kTWVzc2FnZSBoYXNcbiAgICAgICAgICAvLyB0byB0cmFuc2xhdGUgdGhlIG1lc3NhZ2UgaW50byBhIHJlc29sdmVkIHByb21pc2Ugb3IgYSByZWplY3RlZFxuICAgICAgICAgIC8vIHByb21pc2UpLlxuICAgICAgICAgIGNvbnN0IHNlbmRQcm9taXNlZFJlc3VsdCA9IHByb21pc2UgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKG1zZyA9PiB7XG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXG4gICAgICAgICAgICAgIC8vIGlzIGFuIGluc3RhbmNlIG9mIGVycm9yLCBvciB0aGUgb2JqZWN0IGl0c2VsZiBvdGhlcndpc2UuXG4gICAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFwic3RyaW5nXCIpKSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFwiO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7XG4gICAgICAgICAgICAgICAgX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcIiwgZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXG4gICAgICAgICAgLy8gcmVzdWx0LCBvdGhlcndpc2Ugd2FpdCB0aGUgcHJvbWlzZSByZWxhdGVkIHRvIHRoZSB3cmFwcGVkU2VuZFJlc3BvbnNlXG4gICAgICAgICAgLy8gY2FsbGJhY2sgdG8gcmVzb2x2ZSBhbmQgc2VuZCBpdCBhcyBhIHJlc3BvbnNlLlxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XG4gICAgICAgICAgICBzZW5kUHJvbWlzZWRSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2sgPSAoe1xuICAgICAgICByZWplY3QsXG4gICAgICAgIHJlc29sdmVcbiAgICAgIH0sIHJlcGx5KSA9PiB7XG4gICAgICAgIGlmIChleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcbiAgICAgICAgICAvLyB0aGUgcHJvbWlzZSB0byB1bmRlZmluZWQgYXMgaW4gRmlyZWZveC5cbiAgICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvd2ViZXh0ZW5zaW9uLXBvbHlmaWxsL2lzc3Vlcy8xMzBcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVwbHkgJiYgcmVwbHkuX19tb3pXZWJFeHRlbnNpb25Qb2x5ZmlsbFJlamVjdF9fKSB7XG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXG4gICAgICAgICAgLy8gYW4gRXJyb3IgaW5zdGFuY2UuXG4gICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihyZXBseS5tZXNzYWdlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXBseSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjb25zdCB3cmFwcGVkU2VuZE1lc3NhZ2UgPSAobmFtZSwgbWV0YWRhdGEsIGFwaU5hbWVzcGFjZU9iaiwgLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCBtZXRhZGF0YS5taW5BcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiBtZXRhZGF0YS5tYXhBcmdzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7XG4gICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYXJncy5wdXNoKHdyYXBwZWRDYik7XG4gICAgICAgICAgYXBpTmFtZXNwYWNlT2JqLnNlbmRNZXNzYWdlKC4uLmFyZ3MpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgICBjb25zdCBzdGF0aWNXcmFwcGVycyA9IHtcbiAgICAgICAgZGV2dG9vbHM6IHtcbiAgICAgICAgICBuZXR3b3JrOiB7XG4gICAgICAgICAgICBvblJlcXVlc3RGaW5pc2hlZDogd3JhcEV2ZW50KG9uUmVxdWVzdEZpbmlzaGVkV3JhcHBlcnMpXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBydW50aW1lOiB7XG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIG9uTWVzc2FnZUV4dGVybmFsOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgdGFiczoge1xuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcInNlbmRNZXNzYWdlXCIsIHtcbiAgICAgICAgICAgIG1pbkFyZ3M6IDIsXG4gICAgICAgICAgICBtYXhBcmdzOiAzXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IHNldHRpbmdNZXRhZGF0YSA9IHtcbiAgICAgICAgY2xlYXI6IHtcbiAgICAgICAgICBtaW5BcmdzOiAxLFxuICAgICAgICAgIG1heEFyZ3M6IDFcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiB7XG4gICAgICAgICAgbWluQXJnczogMSxcbiAgICAgICAgICBtYXhBcmdzOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHNldDoge1xuICAgICAgICAgIG1pbkFyZ3M6IDEsXG4gICAgICAgICAgbWF4QXJnczogMVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcbiAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgIFwiKlwiOiBzZXR0aW5nTWV0YWRhdGFcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZXM6IHtcbiAgICAgICAgICBcIipcIjogc2V0dGluZ01ldGFkYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHdlYnNpdGVzOiB7XG4gICAgICAgICAgXCIqXCI6IHNldHRpbmdNZXRhZGF0YVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHdyYXBPYmplY3QoZXh0ZW5zaW9uQVBJcywgc3RhdGljV3JhcHBlcnMsIGFwaU1ldGFkYXRhKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJ1aWxkIHByb2Nlc3MgYWRkcyBhIFVNRCB3cmFwcGVyIGFyb3VuZCB0aGlzIGZpbGUsIHdoaWNoIG1ha2VzIHRoZVxuICAgIC8vIGBtb2R1bGVgIHZhcmlhYmxlIGF2YWlsYWJsZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBnbG9iYWxUaGlzLmJyb3dzZXI7XG4gIH1cbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcbiIsImltcG9ydCBvcmlnaW5hbEJyb3dzZXIgZnJvbSBcIndlYmV4dGVuc2lvbi1wb2x5ZmlsbFwiO1xuZXhwb3J0IGNvbnN0IGJyb3dzZXIgPSBvcmlnaW5hbEJyb3dzZXI7XG4iLCJleHBvcnQgZGVmYXVsdCBkZWZpbmVDb250ZW50U2NyaXB0KHtcbiAgbWFpbihjdHgpIHtcbiAgICBjb25zdCBkb3dubG9hZE1vZGVsID0gYXN5bmMgKG1vZGVsTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBvayA9IGNvbmZpcm0oXG4gICAgICAgIGBbUGFnZSBBc3Npc3QgRXh0ZW5zaW9uXSBEbyB5b3Ugd2FudCB0byBwdWxsICR7bW9kZWxOYW1lfSBtb2RlbD8gVGhpcyBoYXMgbm90aGluZyB0byBkbyB3aXRoIE9sbGFtYS5jb20gd2Vic2l0ZS4gVGhlIG1vZGVsIHdpbGwgYmUgcHVsbGVkIGxvY2FsbHkgb25jZSB5b3UgY29uZmlybS5gXG4gICAgICApXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgYWxlcnQoXG4gICAgICAgICAgYFtQYWdlIEFzc2lzdCBFeHRlbnNpb25dIFB1bGxpbmcgJHttb2RlbE5hbWV9IG1vZGVsLiBGb3IgbW9yZSBkZXRhaWxzLCBjaGVjayB0aGUgZXh0ZW5zaW9uIGljb24uYFxuICAgICAgICApXG5cbiAgICAgICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiBcInB1bGxfbW9kZWxcIixcbiAgICAgICAgICBtb2RlbE5hbWVcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRvd25sb2FkU1ZHID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiaC01IHctNSBwYWdlYXNzc2lzdC1pY29uXCI+XG4gICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgZD1cIk0zIDE2LjV2Mi4yNUEyLjI1IDIuMjUgMCAwIDAgNS4yNSAyMWgxMy41QTIuMjUgMi4yNSAwIDAgMCAyMSAxOC43NVYxNi41TTE2LjUgMTIgMTIgMTYuNW0wIDBMNy41IDEybTQuNSA0LjVWM1wiIC8+XG4gICAgPC9zdmc+XG4gICAgYFxuICAgIGNvbnN0IGNvZGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiZGl2Lmxhbmd1YWdlLW5vbmVcIilcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29kZURpdi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYnV0dG9uID0gY29kZURpdltpXS5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpXG4gICAgICBjb25zdCBjb21tYW5kID0gY29kZURpdltpXS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICAgIGlmIChidXR0b24gJiYgY29tbWFuZCkge1xuICAgICAgICBjb25zdCBuZXdCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgICAgIG5ld0J1dHRvbi5pbm5lckhUTUwgPSBkb3dubG9hZFNWR1xuICAgICAgICBuZXdCdXR0b24uY2xhc3NOYW1lID0gYGJvcmRlci1sICR7YnV0dG9uLmNsYXNzTmFtZX1gXG4gICAgICAgIG5ld0J1dHRvbi5pZCA9IGBkb3dubG9hZC0ke2l9LXBhZ2Vhc3Npc3RgXG4gICAgICAgIGNvbnN0IG1vZGVsTmFtZSA9IGNvbW1hbmQ/LnZhbHVlXG4gICAgICAgICAgLnJlcGxhY2UoXCJvbGxhbWEgcnVuXCIsIFwiXCIpXG4gICAgICAgICAgLnJlcGxhY2UoXCJvbGxhbWEgcHVsbFwiLCBcIlwiKVxuICAgICAgICAgIC50cmltKClcbiAgICAgICAgbmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgZG93bmxvYWRNb2RlbChtb2RlbE5hbWUpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgICAgIHNwYW4udGl0bGUgPSBcIkRvd25sb2FkIG1vZGVsIHZpYSBQYWdlIEFzc2lzdFwiXG4gICAgICAgIHNwYW4uYXBwZW5kQ2hpbGQobmV3QnV0dG9uKVxuXG4gICAgICAgIGlmIChidXR0b24ucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGJ1dHRvbi5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHNwYW4pXG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgYWxsRnJhbWVzOiB0cnVlLFxuICBtYXRjaGVzOiBbXCIqOi8vb2xsYW1hLmNvbS8qXCJdLFxuXG59KSIsImZ1bmN0aW9uIHByaW50KG1ldGhvZCwgLi4uYXJncykge1xuICBpZiAoaW1wb3J0Lm1ldGEuZW52Lk1PREUgPT09IFwicHJvZHVjdGlvblwiKSByZXR1cm47XG4gIGlmICh0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmdzLnNoaWZ0KCk7XG4gICAgbWV0aG9kKGBbd3h0XSAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgbWV0aG9kKFwiW3d4dF1cIiwgLi4uYXJncyk7XG4gIH1cbn1cbmV4cG9ydCBjb25zdCBsb2dnZXIgPSB7XG4gIGRlYnVnOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5kZWJ1ZywgLi4uYXJncyksXG4gIGxvZzogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUubG9nLCAuLi5hcmdzKSxcbiAgd2FybjogKC4uLmFyZ3MpID0+IHByaW50KGNvbnNvbGUud2FybiwgLi4uYXJncyksXG4gIGVycm9yOiAoLi4uYXJncykgPT4gcHJpbnQoY29uc29sZS5lcnJvciwgLi4uYXJncylcbn07XG4iLCJpbXBvcnQgeyBicm93c2VyIH0gZnJvbSBcInd4dC9icm93c2VyXCI7XG5leHBvcnQgY2xhc3MgV3h0TG9jYXRpb25DaGFuZ2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IobmV3VXJsLCBvbGRVcmwpIHtcbiAgICBzdXBlcihXeHRMb2NhdGlvbkNoYW5nZUV2ZW50LkVWRU5UX05BTUUsIHt9KTtcbiAgICB0aGlzLm5ld1VybCA9IG5ld1VybDtcbiAgICB0aGlzLm9sZFVybCA9IG9sZFVybDtcbiAgfVxuICBzdGF0aWMgRVZFTlRfTkFNRSA9IGdldFVuaXF1ZUV2ZW50TmFtZShcInd4dDpsb2NhdGlvbmNoYW5nZVwiKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRVbmlxdWVFdmVudE5hbWUoZXZlbnROYW1lKSB7XG4gIGNvbnN0IGVudHJ5cG9pbnROYW1lID0gdHlwZW9mIGltcG9ydC5tZXRhLmVudiA9PT0gXCJ1bmRlZmluZWRcIiA/IFwiYnVpbGRcIiA6IGltcG9ydC5tZXRhLmVudi5FTlRSWVBPSU5UO1xuICByZXR1cm4gYCR7YnJvd3Nlcj8ucnVudGltZT8uaWR9OiR7ZW50cnlwb2ludE5hbWV9OiR7ZXZlbnROYW1lfWA7XG59XG4iLCJpbXBvcnQgeyBXeHRMb2NhdGlvbkNoYW5nZUV2ZW50IH0gZnJvbSBcIi4vY3VzdG9tLWV2ZW50cy5tanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbldhdGNoZXIoY3R4KSB7XG4gIGxldCBpbnRlcnZhbDtcbiAgbGV0IG9sZFVybDtcbiAgcmV0dXJuIHtcbiAgICAvKipcbiAgICAgKiBFbnN1cmUgdGhlIGxvY2F0aW9uIHdhdGNoZXIgaXMgYWN0aXZlbHkgbG9va2luZyBmb3IgVVJMIGNoYW5nZXMuIElmIGl0J3MgYWxyZWFkeSB3YXRjaGluZyxcbiAgICAgKiB0aGlzIGlzIGEgbm9vcC5cbiAgICAgKi9cbiAgICBydW4oKSB7XG4gICAgICBpZiAoaW50ZXJ2YWwgIT0gbnVsbCkgcmV0dXJuO1xuICAgICAgb2xkVXJsID0gbmV3IFVSTChsb2NhdGlvbi5ocmVmKTtcbiAgICAgIGludGVydmFsID0gY3R4LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgbGV0IG5ld1VybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChuZXdVcmwuaHJlZiAhPT0gb2xkVXJsLmhyZWYpIHtcbiAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgV3h0TG9jYXRpb25DaGFuZ2VFdmVudChuZXdVcmwsIG9sZFVybCkpO1xuICAgICAgICAgIG9sZFVybCA9IG5ld1VybDtcbiAgICAgICAgfVxuICAgICAgfSwgMWUzKTtcbiAgICB9XG4gIH07XG59XG4iLCJpbXBvcnQgeyBicm93c2VyIH0gZnJvbSBcInd4dC9icm93c2VyXCI7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vLi4vc2FuZGJveC91dGlscy9sb2dnZXIubWpzXCI7XG5pbXBvcnQgeyBnZXRVbmlxdWVFdmVudE5hbWUgfSBmcm9tIFwiLi9jdXN0b20tZXZlbnRzLm1qc1wiO1xuaW1wb3J0IHsgY3JlYXRlTG9jYXRpb25XYXRjaGVyIH0gZnJvbSBcIi4vbG9jYXRpb24td2F0Y2hlci5tanNcIjtcbmV4cG9ydCBjbGFzcyBDb250ZW50U2NyaXB0Q29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRTY3JpcHROYW1lLCBvcHRpb25zKSB7XG4gICAgdGhpcy5jb250ZW50U2NyaXB0TmFtZSA9IGNvbnRlbnRTY3JpcHROYW1lO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy4jYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgIGlmICh0aGlzLiNpc1RvcEZyYW1lKSB7XG4gICAgICB0aGlzLiNsaXN0ZW5Gb3JOZXdlclNjcmlwdHMoeyBpZ25vcmVGaXJzdEV2ZW50OiB0cnVlIH0pO1xuICAgICAgdGhpcy4jc3RvcE9sZFNjcmlwdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4jbGlzdGVuRm9yTmV3ZXJTY3JpcHRzKCk7XG4gICAgfVxuICB9XG4gIHN0YXRpYyBTQ1JJUFRfU1RBUlRFRF9NRVNTQUdFX1RZUEUgPSBcInd4dDpjb250ZW50LXNjcmlwdC1zdGFydGVkXCI7XG4gICNpc1RvcEZyYW1lID0gd2luZG93LnNlbGYgPT09IHdpbmRvdy50b3A7XG4gICNhYm9ydENvbnRyb2xsZXI7XG4gICNsb2NhdGlvbldhdGNoZXIgPSBjcmVhdGVMb2NhdGlvbldhdGNoZXIodGhpcyk7XG4gIGdldCBzaWduYWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Fib3J0Q29udHJvbGxlci5zaWduYWw7XG4gIH1cbiAgYWJvcnQocmVhc29uKSB7XG4gICAgcmV0dXJuIHRoaXMuI2Fib3J0Q29udHJvbGxlci5hYm9ydChyZWFzb24pO1xuICB9XG4gIGdldCBpc0ludmFsaWQoKSB7XG4gICAgaWYgKGJyb3dzZXIucnVudGltZS5pZCA9PSBudWxsKSB7XG4gICAgICB0aGlzLm5vdGlmeUludmFsaWRhdGVkKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNpZ25hbC5hYm9ydGVkO1xuICB9XG4gIGdldCBpc1ZhbGlkKCkge1xuICAgIHJldHVybiAhdGhpcy5pc0ludmFsaWQ7XG4gIH1cbiAgLyoqXG4gICAqIEFkZCBhIGxpc3RlbmVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRlbnQgc2NyaXB0J3MgY29udGV4dCBpcyBpbnZhbGlkYXRlZC5cbiAgICpcbiAgICogQHJldHVybnMgQSBmdW5jdGlvbiB0byByZW1vdmUgdGhlIGxpc3RlbmVyLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGNiKTtcbiAgICogY29uc3QgcmVtb3ZlSW52YWxpZGF0ZWRMaXN0ZW5lciA9IGN0eC5vbkludmFsaWRhdGVkKCgpID0+IHtcbiAgICogICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKGNiKTtcbiAgICogfSlcbiAgICogLy8gLi4uXG4gICAqIHJlbW92ZUludmFsaWRhdGVkTGlzdGVuZXIoKTtcbiAgICovXG4gIG9uSW52YWxpZGF0ZWQoY2IpIHtcbiAgICB0aGlzLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2IpO1xuICAgIHJldHVybiAoKSA9PiB0aGlzLnNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgY2IpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgbmV2ZXIgcmVzb2x2ZXMuIFVzZWZ1bCBpZiB5b3UgaGF2ZSBhbiBhc3luYyBmdW5jdGlvbiB0aGF0IHNob3VsZG4ndCBydW5cbiAgICogYWZ0ZXIgdGhlIGNvbnRleHQgaXMgZXhwaXJlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogY29uc3QgZ2V0VmFsdWVGcm9tU3RvcmFnZSA9IGFzeW5jICgpID0+IHtcbiAgICogICBpZiAoY3R4LmlzSW52YWxpZCkgcmV0dXJuIGN0eC5ibG9jaygpO1xuICAgKlxuICAgKiAgIC8vIC4uLlxuICAgKiB9XG4gICAqL1xuICBibG9jaygpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnNldEludGVydmFsYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2xlYXJzIHRoZSBpbnRlcnZhbCB3aGVuIGludmFsaWRhdGVkLlxuICAgKi9cbiAgc2V0SW50ZXJ2YWwoaGFuZGxlciwgdGltZW91dCkge1xuICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgaGFuZGxlcigpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjbGVhckludGVydmFsKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBXcmFwcGVyIGFyb3VuZCBgd2luZG93LnNldFRpbWVvdXRgIHRoYXQgYXV0b21hdGljYWxseSBjbGVhcnMgdGhlIGludGVydmFsIHdoZW4gaW52YWxpZGF0ZWQuXG4gICAqL1xuICBzZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICBjb25zdCBpZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgaGFuZGxlcigpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjbGVhclRpbWVvdXQoaWQpKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cbiAgLyoqXG4gICAqIFdyYXBwZXIgYXJvdW5kIGB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgcmVxdWVzdCB3aGVuXG4gICAqIGludmFsaWRhdGVkLlxuICAgKi9cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKC4uLmFyZ3MpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWQpIGNhbGxiYWNrKC4uLmFyZ3MpO1xuICAgIH0pO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkpO1xuICAgIHJldHVybiBpZDtcbiAgfVxuICAvKipcbiAgICogV3JhcHBlciBhcm91bmQgYHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrYCB0aGF0IGF1dG9tYXRpY2FsbHkgY2FuY2VscyB0aGUgcmVxdWVzdCB3aGVuXG4gICAqIGludmFsaWRhdGVkLlxuICAgKi9cbiAgcmVxdWVzdElkbGVDYWxsYmFjayhjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gcmVxdWVzdElkbGVDYWxsYmFjaygoLi4uYXJncykgPT4ge1xuICAgICAgaWYgKCF0aGlzLnNpZ25hbC5hYm9ydGVkKSBjYWxsYmFjayguLi5hcmdzKTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICB0aGlzLm9uSW52YWxpZGF0ZWQoKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkKSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG4gIC8qKlxuICAgKiBDYWxsIGB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGUgY29udGV4dCBpcyBpbnZhbGlkYXRlZC5cbiAgICpcbiAgICogSW5jbHVkZXMgYWRkaXRpb25hbCBldmVudHMgdXNlZnVsIGZvciBjb250ZW50IHNjcmlwdHM6XG4gICAqXG4gICAqIC0gYFwid3h0OmxvY2F0aW9uY2hhbmdlXCJgIC0gVHJpZ2dlcmVkIHdoZW4gSFRNTDUgaGlzdG9yeSBtb2RlIGlzIHVzZWQgdG8gY2hhbmdlIFVSTC4gQ29udGVudFxuICAgKiAgIHNjcmlwdHMgYXJlIG5vdCByZWxvYWRlZCB3aGVuIG5hdmlnYXRpbmcgdGhpcyB3YXksIHNvIHRoaXMgY2FuIGJlIHVzZWQgdG8gcmVzZXQgdGhlIGNvbnRlbnRcbiAgICogICBzY3JpcHQgc3RhdGUgb24gVVJMIGNoYW5nZSwgb3IgcnVuIGN1c3RvbSBjb2RlLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjdHguYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgXCJ2aXNpYmlsaXR5Y2hhbmdlXCIsICgpID0+IHtcbiAgICogICAvLyAuLi5cbiAgICogfSk7XG4gICAqIGN0eC5hZGRFdmVudExpc3RlbmVyKGRvY3VtZW50LCBcInd4dDpsb2NhdGlvbmNoYW5nZVwiLCAoKSA9PiB7XG4gICAqICAgLy8gLi4uXG4gICAqIH0pO1xuICAgKi9cbiAgYWRkRXZlbnRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJ3eHQ6bG9jYXRpb25jaGFuZ2VcIikge1xuICAgICAgaWYgKHRoaXMuaXNWYWxpZCkgdGhpcy4jbG9jYXRpb25XYXRjaGVyLnJ1bigpO1xuICAgIH1cbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcj8uKFxuICAgICAgdHlwZS5zdGFydHNXaXRoKFwid3h0OlwiKSA/IGdldFVuaXF1ZUV2ZW50TmFtZSh0eXBlKSA6IHR5cGUsXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBFdmVudCBkb24ndCBtYXRjaCwgYnV0IHRoYXQncyBPSywgRXZlbnRUYXJnZXQgZG9lc24ndCBhbGxvdyBjdXN0b20gdHlwZXMgaW4gdGhlIGNhbGxiYWNrXG4gICAgICBoYW5kbGVyLFxuICAgICAge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBzaWduYWw6IHRoaXMuc2lnbmFsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEFib3J0IHRoZSBhYm9ydCBjb250cm9sbGVyIGFuZCBleGVjdXRlIGFsbCBgb25JbnZhbGlkYXRlZGAgbGlzdGVuZXJzLlxuICAgKi9cbiAgbm90aWZ5SW52YWxpZGF0ZWQoKSB7XG4gICAgdGhpcy5hYm9ydChcIkNvbnRlbnQgc2NyaXB0IGNvbnRleHQgaW52YWxpZGF0ZWRcIik7XG4gICAgbG9nZ2VyLmRlYnVnKFxuICAgICAgYENvbnRlbnQgc2NyaXB0IFwiJHt0aGlzLmNvbnRlbnRTY3JpcHROYW1lfVwiIGNvbnRleHQgaW52YWxpZGF0ZWRgXG4gICAgKTtcbiAgfVxuICAjc3RvcE9sZFNjcmlwdHMoKSB7XG4gICAgd2luZG93LnBvc3RNZXNzYWdlKFxuICAgICAge1xuICAgICAgICB0eXBlOiBDb250ZW50U2NyaXB0Q29udGV4dC5TQ1JJUFRfU1RBUlRFRF9NRVNTQUdFX1RZUEUsXG4gICAgICAgIGNvbnRlbnRTY3JpcHROYW1lOiB0aGlzLmNvbnRlbnRTY3JpcHROYW1lXG4gICAgICB9LFxuICAgICAgXCIqXCJcbiAgICApO1xuICB9XG4gICNsaXN0ZW5Gb3JOZXdlclNjcmlwdHMob3B0aW9ucykge1xuICAgIGxldCBpc0ZpcnN0ID0gdHJ1ZTtcbiAgICBjb25zdCBjYiA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRhdGE/LnR5cGUgPT09IENvbnRlbnRTY3JpcHRDb250ZXh0LlNDUklQVF9TVEFSVEVEX01FU1NBR0VfVFlQRSAmJiBldmVudC5kYXRhPy5jb250ZW50U2NyaXB0TmFtZSA9PT0gdGhpcy5jb250ZW50U2NyaXB0TmFtZSkge1xuICAgICAgICBjb25zdCB3YXNGaXJzdCA9IGlzRmlyc3Q7XG4gICAgICAgIGlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgaWYgKHdhc0ZpcnN0ICYmIG9wdGlvbnM/Lmlnbm9yZUZpcnN0RXZlbnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5ub3RpZnlJbnZhbGlkYXRlZCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgY2IpO1xuICAgIHRoaXMub25JbnZhbGlkYXRlZCgoKSA9PiByZW1vdmVFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLCBjYikpO1xuICB9XG59XG4iXSwibmFtZXMiOlsidGhpcyIsInByaW50IiwibG9nZ2VyIl0sIm1hcHBpbmdzIjoiOzs7RUFBTyxTQUFTLG1CQUFtQixDQUFDLFVBQVUsRUFBRTtFQUNoRCxFQUFFLE9BQU8sVUFBVSxDQUFDO0VBQ3BCOzs7Ozs7Ozs7OztFQ0ZBLENBQUEsQ0FBQyxVQUFVLE1BQU0sRUFBRSxPQUFPLEVBQUU7S0FHaUI7RUFDN0MsS0FBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEIsSUFNRztFQUNILEVBQUMsRUFBRSxPQUFPLFVBQVUsS0FBSyxXQUFXLEdBQUcsVUFBVSxHQUFHLE9BQU8sSUFBSSxLQUFLLFdBQVcsR0FBRyxJQUFJLEdBQUdBLGNBQUksRUFBRSxVQUFVLE1BQU0sRUFBRTtBQVFqSDtLQUNFLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0VBQ3pGLEtBQUksTUFBTSxJQUFJLEtBQUss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Q0FBQyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLElBQUk7RUFDL0Q7RUFDQSxNQUFNLE9BQU87RUFDYixNQUFNO0VBQ04sUUFBUSxHQUFHLE9BQU87RUFDbEIsUUFBUSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07RUFDM0IsT0FBTztFQUNQLEtBQUssQ0FBQztFQUNOLEdBQUc7RUFDSDtFQUNBO0VBQ0E7RUFDQTtFQUNBLEVBQUUsaUJBQWlCLEdBQUc7RUFDdEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7RUFDckQsSUFBSUMsUUFBTSxDQUFDLEtBQUs7RUFDaEIsTUFBTSxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQztFQUN0RSxLQUFLLENBQUM7RUFDTixHQUFHO0VBQ0gsRUFBRSxlQUFlLEdBQUc7RUFDcEIsSUFBSSxNQUFNLENBQUMsV0FBVztFQUN0QixNQUFNO0VBQ04sUUFBUSxJQUFJLEVBQUUsb0JBQW9CLENBQUMsMkJBQTJCO0VBQzlELFFBQVEsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtFQUNqRCxPQUFPO0VBQ1AsTUFBTSxHQUFHO0VBQ1QsS0FBSyxDQUFDO0VBQ04sR0FBRztFQUNILEVBQUUsc0JBQXNCLENBQUMsT0FBTyxFQUFFO0VBQ2xDLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0VBQ3ZCLElBQUksTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEtBQUs7RUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxLQUFLLG9CQUFvQixDQUFDLDJCQUEyQixJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEtBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFFO0VBQzdJLFFBQVEsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDO0VBQ2pDLFFBQVEsT0FBTyxHQUFHLEtBQUssQ0FBQztFQUN4QixRQUFRLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxPQUFPO0VBQzFELFFBQVEsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7RUFDakMsT0FBTztFQUNQLEtBQUssQ0FBQztFQUNOLElBQUksZ0JBQWdCLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0VBQ3BDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0VBQ2pFLEdBQUc7RUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDQsNSw2LDddfQ==
