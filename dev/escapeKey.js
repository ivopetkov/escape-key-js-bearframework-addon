/*
 * Escape key JS package for Bear Framework
 * https://github.com/ivopetkov/escape-key-js-bearframework-addon
 * Copyright (c) Ivo Petkov
 * Free to use under the MIT license.
 */

/* global clientPackages */

var ivoPetkov = ivoPetkov || {};
ivoPetkov.bearFrameworkAddons = ivoPetkov.bearFrameworkAddons || {};
ivoPetkov.bearFrameworkAddons.escapeKey = ivoPetkov.bearFrameworkAddons.escapeKey || (function () {

    var handlers = [];

    var addHandler = function (handler) {
        handlers.push(handler);
    };

    var removeHandler = function (handler) {
        handlers = handlers.filter(function (h) {
            return h != handler;
        });
    };

    var execute = function () {
        var handlersCount = handlers.length;
        if (handlersCount === 0) {
            return;
        }
        var handlersToRemove = [];
        for (var i = handlersCount - 1; i >= 0; i--) {
            var handler = handlers[i];
            var result = false;
            try {
                result = handler();
            } catch (e) {
                result = null;
            }
            if (result === false) { // Escape cancelled
                return;
            }
            handlersToRemove.push(handler);
            if (result === true) { // Escape handled and something is done
                break;
            }
        }
        for (var i = 0; i < handlersToRemove.length; i++) {
            removeHandler(handlersToRemove[i]);
        }
    };

    var eventAttached = false;
    var attachEvent = function () {
        if (!eventAttached && document.body !== null) {
            eventAttached = true;
            document.body.addEventListener('keydown', function (event) {
                if (event.code === 'Escape') {
                    execute(event);
                }
            });
        }
    };

    document.addEventListener('readystatechange', () => { // interactive or complete
        attachEvent();
    });
    attachEvent();

    return {
        'addHandler': addHandler,
        'removeHandler': removeHandler
    };
}());