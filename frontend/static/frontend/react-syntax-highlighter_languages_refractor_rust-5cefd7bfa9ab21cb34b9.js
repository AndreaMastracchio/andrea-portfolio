"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["react-syntax-highlighter_languages_refractor_rust"],{

/***/ "./frontend/node_modules/refractor/lang/rust.js":
/*!******************************************************!*\
  !*** ./frontend/node_modules/refractor/lang/rust.js ***!
  \******************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = rust\nrust.displayName = 'rust'\nrust.aliases = []\nfunction rust(Prism) {\n  /* TODO\nAdd support for Markdown notation inside doc comments\nAdd support for nested block comments...\nMatch closure params even when not followed by dash or brace\nAdd better support for macro definition\n*/\n  Prism.languages.rust = {\n    comment: [\n      {\n        pattern: /(^|[^\\\\])\\/\\*[\\s\\S]*?\\*\\//,\n        lookbehind: true\n      },\n      {\n        pattern: /(^|[^\\\\:])\\/\\/.*/,\n        lookbehind: true\n      }\n    ],\n    string: [\n      {\n        pattern: /b?r(#*)\"(?:\\\\.|(?!\"\\1)[^\\\\\\r\\n])*\"\\1/,\n        greedy: true\n      },\n      {\n        pattern: /b?\"(?:\\\\.|[^\\\\\\r\\n\"])*\"/,\n        greedy: true\n      }\n    ],\n    char: {\n      pattern: /b?'(?:\\\\(?:x[0-7][\\da-fA-F]|u{(?:[\\da-fA-F]_*){1,6}|.)|[^\\\\\\r\\n\\t'])'/,\n      alias: 'string'\n    },\n    'lifetime-annotation': {\n      pattern: /'[^\\s>']+/,\n      alias: 'symbol'\n    },\n    keyword: /\\b(?:abstract|alignof|as|async|await|be|box|break|const|continue|crate|do|dyn|else|enum|extern|false|final|fn|for|if|impl|in|let|loop|match|mod|move|mut|offsetof|once|override|priv|pub|pure|ref|return|sizeof|static|self|Self|struct|super|true|trait|type|typeof|union|unsafe|unsized|use|virtual|where|while|yield)\\b/,\n    attribute: {\n      pattern: /#!?\\[.+?\\]/,\n      greedy: true,\n      alias: 'attr-name'\n    },\n    function: [\n      /\\w+(?=\\s*\\()/, // Macros can use parens or brackets\n      /\\w+!(?=\\s*\\(|\\[)/\n    ],\n    'macro-rules': {\n      pattern: /\\w+!/,\n      alias: 'function'\n    },\n    // Hex, oct, bin, dec numbers with visual separators and type suffix\n    number: /\\b(?:0x[\\dA-Fa-f](?:_?[\\dA-Fa-f])*|0o[0-7](?:_?[0-7])*|0b[01](?:_?[01])*|(\\d(?:_?\\d)*)?\\.?\\d(?:_?\\d)*(?:[Ee][+-]?\\d+)?)(?:_?(?:[iu](?:8|16|32|64)?|f32|f64))?\\b/,\n    // Closure params should not be confused with bitwise OR |\n    'closure-params': {\n      pattern: /\\|[^|]*\\|(?=\\s*[{-])/,\n      inside: {\n        punctuation: /[|:,]/,\n        operator: /[&*]/\n      }\n    },\n    punctuation: /->|\\.\\.=|\\.{1,3}|::|[{}[\\];(),:]/,\n    operator: /[-+*\\/%!^]=?|=[=>]?|&[&=]?|\\|[|=]?|<<?=?|>>?=?|[@?]/\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./frontend/node_modules/refractor/lang/rust.js?");

/***/ })

}]);