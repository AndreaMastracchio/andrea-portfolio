"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["react-syntax-highlighter_languages_refractor_xquery"],{

/***/ "./frontend/node_modules/refractor/lang/xquery.js":
/*!********************************************************!*\
  !*** ./frontend/node_modules/refractor/lang/xquery.js ***!
  \********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = xquery\nxquery.displayName = 'xquery'\nxquery.aliases = []\nfunction xquery(Prism) {\n  ;(function(Prism) {\n    Prism.languages.xquery = Prism.languages.extend('markup', {\n      'xquery-comment': {\n        pattern: /\\(:[\\s\\S]*?:\\)/,\n        greedy: true,\n        alias: 'comment'\n      },\n      string: {\n        pattern: /([\"'])(?:\\1\\1|(?!\\1)[\\s\\S])*\\1/,\n        greedy: true\n      },\n      extension: {\n        pattern: /\\(#.+?#\\)/,\n        alias: 'symbol'\n      },\n      variable: /\\$[\\w-:]+/,\n      axis: {\n        pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,\n        lookbehind: true,\n        alias: 'operator'\n      },\n      'keyword-operator': {\n        pattern: /(^|[^:-])\\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\\b(?=$|[^:-])/,\n        lookbehind: true,\n        alias: 'operator'\n      },\n      keyword: {\n        pattern: /(^|[^:-])\\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\\b(?=$|[^:-])/,\n        lookbehind: true\n      },\n      function: /[\\w-]+(?::[\\w-]+)*(?=\\s*\\()/,\n      'xquery-element': {\n        pattern: /(element\\s+)[\\w-]+(?::[\\w-]+)*/,\n        lookbehind: true,\n        alias: 'tag'\n      },\n      'xquery-attribute': {\n        pattern: /(attribute\\s+)[\\w-]+(?::[\\w-]+)*/,\n        lookbehind: true,\n        alias: 'attr-name'\n      },\n      builtin: {\n        pattern: /(^|[^:-])\\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\\b(?=$|[^:-])/,\n        lookbehind: true\n      },\n      number: /\\b\\d+(?:\\.\\d+)?(?:E[+-]?\\d+)?/,\n      operator: [\n        /[+*=?|@]|\\.\\.?|:=|!=|<[=<]?|>[=>]?/,\n        {\n          pattern: /(\\s)-(?=\\s)/,\n          lookbehind: true\n        }\n      ],\n      punctuation: /[[\\](){},;:/]/\n    })\n    Prism.languages.xquery.tag.pattern = /<\\/?(?!\\d)[^\\s>\\/=$<%]+(?:\\s+[^\\s>\\/=]+(?:=(?:(\"|')(?:\\\\[\\s\\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+))?)*\\s*\\/?>/i\n    Prism.languages.xquery['tag'].inside[\n      'attr-value'\n    ].pattern = /=(?:(\"|')(?:\\\\[\\s\\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\\1)[^\\\\])*\\1|[^\\s'\">=]+)/i\n    Prism.languages.xquery['tag'].inside['attr-value'].inside[\n      'punctuation'\n    ] = /^=\"|\"$/\n    Prism.languages.xquery['tag'].inside['attr-value'].inside['expression'] = {\n      // Allow for two levels of nesting\n      pattern: /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,\n      inside: {\n        rest: Prism.languages.xquery\n      },\n      alias: 'language-xquery'\n    } // The following will handle plain text inside tags\n    var stringifyToken = function(token) {\n      if (typeof token === 'string') {\n        return token\n      }\n      if (typeof token.content === 'string') {\n        return token.content\n      }\n      return token.content.map(stringifyToken).join('')\n    }\n    var walkTokens = function(tokens) {\n      var openedTags = []\n      for (var i = 0; i < tokens.length; i++) {\n        var token = tokens[i]\n        var notTagNorBrace = false\n        if (typeof token !== 'string') {\n          if (\n            token.type === 'tag' &&\n            token.content[0] &&\n            token.content[0].type === 'tag'\n          ) {\n            // We found a tag, now find its kind\n            if (token.content[0].content[0].content === '</') {\n              // Closing tag\n              if (\n                openedTags.length > 0 &&\n                openedTags[openedTags.length - 1].tagName ===\n                  stringifyToken(token.content[0].content[1])\n              ) {\n                // Pop matching opening tag\n                openedTags.pop()\n              }\n            } else {\n              if (token.content[token.content.length - 1].content === '/>') {\n                // Autoclosed tag, ignore\n              } else {\n                // Opening tag\n                openedTags.push({\n                  tagName: stringifyToken(token.content[0].content[1]),\n                  openedBraces: 0\n                })\n              }\n            }\n          } else if (\n            openedTags.length > 0 &&\n            token.type === 'punctuation' &&\n            token.content === '{' && // Ignore `{{`\n            (!tokens[i + 1] ||\n              tokens[i + 1].type !== 'punctuation' ||\n              tokens[i + 1].content !== '{') &&\n            (!tokens[i - 1] ||\n              tokens[i - 1].type !== 'plain-text' ||\n              tokens[i - 1].content !== '{')\n          ) {\n            // Here we might have entered an XQuery expression inside a tag\n            openedTags[openedTags.length - 1].openedBraces++\n          } else if (\n            openedTags.length > 0 &&\n            openedTags[openedTags.length - 1].openedBraces > 0 &&\n            token.type === 'punctuation' &&\n            token.content === '}'\n          ) {\n            // Here we might have left an XQuery expression inside a tag\n            openedTags[openedTags.length - 1].openedBraces--\n          } else if (token.type !== 'comment') {\n            notTagNorBrace = true\n          }\n        }\n        if (notTagNorBrace || typeof token === 'string') {\n          if (\n            openedTags.length > 0 &&\n            openedTags[openedTags.length - 1].openedBraces === 0\n          ) {\n            // Here we are inside a tag, and not inside an XQuery expression.\n            // That's plain text: drop any tokens matched.\n            var plainText = stringifyToken(token) // And merge text with adjacent text\n            if (\n              i < tokens.length - 1 &&\n              (typeof tokens[i + 1] === 'string' ||\n                tokens[i + 1].type === 'plain-text')\n            ) {\n              plainText += stringifyToken(tokens[i + 1])\n              tokens.splice(i + 1, 1)\n            }\n            if (\n              i > 0 &&\n              (typeof tokens[i - 1] === 'string' ||\n                tokens[i - 1].type === 'plain-text')\n            ) {\n              plainText = stringifyToken(tokens[i - 1]) + plainText\n              tokens.splice(i - 1, 1)\n              i--\n            }\n            if (/^\\s+$/.test(plainText)) {\n              tokens[i] = plainText\n            } else {\n              tokens[i] = new Prism.Token(\n                'plain-text',\n                plainText,\n                null,\n                plainText\n              )\n            }\n          }\n        }\n        if (token.content && typeof token.content !== 'string') {\n          walkTokens(token.content)\n        }\n      }\n    }\n    Prism.hooks.add('after-tokenize', function(env) {\n      if (env.language !== 'xquery') {\n        return\n      }\n      walkTokens(env.tokens)\n    })\n  })(Prism)\n}\n\n\n//# sourceURL=webpack://frontend/./frontend/node_modules/refractor/lang/xquery.js?");

/***/ })

}]);