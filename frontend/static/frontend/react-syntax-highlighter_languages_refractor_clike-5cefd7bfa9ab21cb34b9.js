"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["react-syntax-highlighter_languages_refractor_clike"],{

/***/ "./frontend/node_modules/refractor/lang/clike.js":
/*!*******************************************************!*\
  !*** ./frontend/node_modules/refractor/lang/clike.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = clike\nclike.displayName = 'clike'\nclike.aliases = []\nfunction clike(Prism) {\n  Prism.languages.clike = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?(?:\\*\\/|$)/,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true,\n        greedy: true\n      }\n    ],\n    string: {\n      pattern: /([\"'])(?:\\\\(?:\\r\\n|[\\s\\S])|(?!\\1)[^\\\\\\r\\n])*\\1/,\n      greedy: true\n    },\n    'class-name': {\n      pattern: /((?:\\b(?:class|interface|extends|implements|trait|instanceof|new)\\s+)|(?:catch\\s+\\())[\\w.\\\\]+/i,\n      lookbehind: true,\n      inside: {\n        punctuation: /[.\\\\]/\n      }\n    },\n    keyword: /\\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\\b/,\n    boolean: /\\b(?:true|false)\\b/,\n    function: /\\w+(?=\\()/,\n    number: /\\b0x[\\da-f]+\\b|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:e[+-]?\\d+)?/i,\n    operator: /--?|\\+\\+?|!=?=?|<=?|>=?|==?=?|&&?|\\|\\|?|\\?|\\*|\\/|~|\\^|%/,\n    punctuation: /[{}[\\];(),.:]/\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./frontend/node_modules/refractor/lang/clike.js?");

/***/ })

}]);