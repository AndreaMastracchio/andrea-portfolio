"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["react-syntax-highlighter_languages_refractor_javascript"],{

/***/ "./frontend/node_modules/refractor/lang/javascript.js":
/*!************************************************************!*\
  !*** ./frontend/node_modules/refractor/lang/javascript.js ***!
  \************************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = javascript\njavascript.displayName = 'javascript'\njavascript.aliases = ['js']\nfunction javascript(Prism) {\n  Prism.languages.javascript = Prism.languages.extend('clike', {\n    'class-name': [\n      Prism.languages.clike['class-name'],\n      {\n        pattern: /(^|[^$\\w\\xA0-\\uFFFF])[_$A-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\.(?:prototype|constructor))/,\n        lookbehind: true\n      }\n    ],\n    keyword: [\n      {\n        pattern: /((?:^|})\\s*)(?:catch|finally)\\b/,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|[^.])\\b(?:as|async(?=\\s*(?:function\\b|\\(|[$\\w\\xA0-\\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\\b/,\n        lookbehind: true\n      }\n    ],\n    number: /\\b(?:(?:0[xX](?:[\\dA-Fa-f](?:_[\\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\\d(?:_\\d)?)+n|NaN|Infinity)\\b|(?:\\b(?:\\d(?:_\\d)?)+\\.?(?:\\d(?:_\\d)?)*|\\B\\.(?:\\d(?:_\\d)?)+)(?:[Ee][+-]?(?:\\d(?:_\\d)?)+)?/,\n    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)\n    function: /#?[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*(?:\\.\\s*(?:apply|bind|call)\\s*)?\\()/,\n    operator: /-[-=]?|\\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\\|[|=]?|\\*\\*?=?|\\/=?|~|\\^=?|%=?|\\?|\\.{3}/\n  })\n  Prism.languages.javascript[\n    'class-name'\n  ][0].pattern = /(\\b(?:class|interface|extends|implements|instanceof|new)\\s+)[\\w.\\\\]+/\n  Prism.languages.insertBefore('javascript', 'keyword', {\n    regex: {\n      pattern: /((?:^|[^$\\w\\xA0-\\uFFFF.\"'\\])\\s])\\s*)\\/(\\[(?:[^\\]\\\\\\r\\n]|\\\\.)*]|\\\\.|[^/\\\\\\[\\r\\n])+\\/[gimyus]{0,6}(?=\\s*($|[\\r\\n,.;})\\]]))/,\n      lookbehind: true,\n      greedy: true\n    },\n    // This must be declared before keyword because we use \"function\" inside the look-forward\n    'function-variable': {\n      pattern: /#?[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*[=:]\\s*(?:async\\s*)?(?:\\bfunction\\b|(?:\\((?:[^()]|\\([^()]*\\))*\\)|[_$a-zA-Z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)\\s*=>))/,\n      alias: 'function'\n    },\n    parameter: [\n      {\n        pattern: /(function(?:\\s+[_$A-Za-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*)?\\s*\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\))/,\n        lookbehind: true,\n        inside: Prism.languages.javascript\n      },\n      {\n        pattern: /[_$a-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*(?=\\s*=>)/i,\n        inside: Prism.languages.javascript\n      },\n      {\n        pattern: /(\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\)\\s*=>)/,\n        lookbehind: true,\n        inside: Prism.languages.javascript\n      },\n      {\n        pattern: /((?:\\b|\\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\\w\\xA0-\\uFFFF]))(?:[_$A-Za-z\\xA0-\\uFFFF][$\\w\\xA0-\\uFFFF]*\\s*)\\(\\s*)(?!\\s)(?:[^()]|\\([^()]*\\))+?(?=\\s*\\)\\s*\\{)/,\n        lookbehind: true,\n        inside: Prism.languages.javascript\n      }\n    ],\n    constant: /\\b[A-Z](?:[A-Z_]|\\dx?)*\\b/\n  })\n  Prism.languages.insertBefore('javascript', 'string', {\n    'template-string': {\n      pattern: /`(?:\\\\[\\s\\S]|\\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\\${)[^\\\\`])*`/,\n      greedy: true,\n      inside: {\n        'template-punctuation': {\n          pattern: /^`|`$/,\n          alias: 'string'\n        },\n        interpolation: {\n          pattern: /((?:^|[^\\\\])(?:\\\\{2})*)\\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,\n          lookbehind: true,\n          inside: {\n            'interpolation-punctuation': {\n              pattern: /^\\${|}$/,\n              alias: 'punctuation'\n            },\n            rest: Prism.languages.javascript\n          }\n        },\n        string: /[\\s\\S]+/\n      }\n    }\n  })\n  if (Prism.languages.markup) {\n    Prism.languages.markup.tag.addInlined('script', 'javascript')\n  }\n  Prism.languages.js = Prism.languages.javascript\n}\n\n\n//# sourceURL=webpack://frontend/./frontend/node_modules/refractor/lang/javascript.js?");

/***/ })

}]);