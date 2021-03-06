/*
  0x111111111
    |||||||||
    |||||||||
    |||||||||--ie6 ---------|
    ||||||||--ie7  ---------|
    |||||||--ie8   ---------| ALLIE
    ||||||--ie9+   ---------|
    |||||
    |||||--opera
    ||||--safari   ---------|
    |||--firefox            | WEBKIT
    ||-- chrome    ---------|
    |-- STD
*/

var ORIGIN = parseInt("000000000", 2)

var STD    = parseInt("100000000", 2)
var CHROME = parseInt("010000000", 2)
var FIREFOX= parseInt("001000000", 2)
var SAFARI = parseInt("000100000", 2)
var OPERA  = parseInt("000010000", 2)

var WEBKIT = CHROME | SAFARI 

var NONEIE = CHROME | SAFARI | OPERA | FIREFOX

var IE9PLUS= parseInt("000001000", 2)
var IE8    = parseInt("000000100", 2)
var IE7    = parseInt("000000010", 2)
var IE6    = parseInt("000000001", 2)
var ALLIE  = IE9PLUS | IE8 | IE7 | IE6

var NOIE6  = IE9PLUS | IE8 | IE7 | NONEIE
var NOIE67 = IE9PLUS | IE8 | NONEIE
var NOIE678= IE9PLUS | NONEIE
var NONE   = parseInt("000000000", 2)
var ALL    = parseInt("111111111", 2)

exports.ORIGIN = ORIGIN
exports.STD = STD
exports.CHROME = CHROME
exports.FIREFOX = FIREFOX
exports.SAFARI = SAFARI
exports.OPERA = OPERA

exports.WEBKIT = WEBKIT

exports.NONEIE = NONEIE

exports.IE9PLUS = IE9PLUS
exports.IE8 = IE8
exports.IE7 = IE7
exports.IE6 = IE6
exports.ALLIE = ALLIE

exports.NOIE6 = NOIE6
exports.NOIE67 = NOIE67
exports.NOIE678 = NOIE678
exports.NONE = NONE
exports.ALL = ALL

// if (!module.parent) {
//     console.log(FIREFOX, IE6)
// }
