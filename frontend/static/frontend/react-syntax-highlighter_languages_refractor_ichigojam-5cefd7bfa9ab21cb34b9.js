"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["react-syntax-highlighter_languages_refractor_ichigojam"],{

/***/ "./frontend/node_modules/refractor/lang/ichigojam.js":
/*!***********************************************************!*\
  !*** ./frontend/node_modules/refractor/lang/ichigojam.js ***!
  \***********************************************************/
/***/ (function(module) {

eval("\n\nmodule.exports = ichigojam\nichigojam.displayName = 'ichigojam'\nichigojam.aliases = []\nfunction ichigojam(Prism) {\n  // according to the offical reference (EN)\n  // https://ichigojam.net/IchigoJam-en.html\n  Prism.languages.ichigojam = {\n    comment: /(?:\\B'|REM)(?:[^\\n\\r]*)/i,\n    string: {\n      pattern: /\"(?:\"\"|[!#$%&'()*,\\/:;<=>?^_ +\\-.A-Z\\d])*\"/i,\n      greedy: true\n    },\n    number: /\\B#[0-9A-F]+|\\B`[01]+|(?:\\b\\d+\\.?\\d*|\\B\\.\\d+)(?:E[+-]?\\d+)?/i,\n    keyword: /\\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\\$|\\b)/i,\n    function: /\\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\\$|\\b)/i,\n    label: /(?:\\B@[^\\s]+)/i,\n    operator: /<[=>]?|>=?|\\|\\||&&|[+\\-*\\/=|&^~!]|\\b(?:AND|NOT|OR)\\b/i,\n    punctuation: /[\\[,;:()\\]]/\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./frontend/node_modules/refractor/lang/ichigojam.js?");

/***/ })

}]);