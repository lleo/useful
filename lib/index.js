
var util = require('util')
  , format = util.format
  , log = console.log

exports.exit = function exit(d) {
  process.nextTick(function(){ process.exit(d) })
}

exports.repeatstr = function repeatstr(x,n) {
  var s=""
  while(n-->0) s+=x
  return s
}

exports.rand = function rand(d, n) {
  if (n===undefined) n = 0
  return d*Math.random() + n
  //return d*Math.random()
}

/** pseudo_floor()
 *  Math.log(1000)/Math.LN10 = 2.9999999999999996 oops!
 *  for b=2.9999999999999996
 *    Math.abs(Math.round(b)-b) < Math.pow(10,-15) => true
 *  Math.pow(10,-15) works for log10(10^3) log10(10^6) but not log10(10^9)
 *  Math.pow(10,-14) works all the way upto log(10^15) [all 32bit ints]
 *  Math.pow(2,-48) works and seems more precice [~3.55x10^-15 approx 10^-14]
 *  To work all the way up to Number.MAX_VALUE we need Math.pow(2,-43)
 *
 *  NOTE: I am sure there is a proper double floating point logic to
 *        solve this but FUCK IT.
 */
exports.pseudo_floor = function pseudo_floor(v) {
  if (v < 0) return Math.floor(v)
  if (Math.abs(Math.round(v)-v) < Math.pow(2,-43))
    return Math.round(v);
  return Math.floor(v)
}

exports.log10 = function log10(v) { return Math.log(v)/Math.LN10 }
exports.order10 = function order10 (v) { return pseudo_floor( log10(v) ) }

exports.max = function max(a,b) { return a>b ? a : b }
exports.min = function min(a,b) { return a>b ? b : a }

exports.cmp = function cmp(a,b) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

exports.bconcat = function bconcat(bufs) {
  var tot=0, i, nbuf, off=0

  for (i=0; i<bufs.length; i++) { tot += bufs[i].length }

  nbuf = new Buffer(tot)
  for (i=0; i< bufs.length; i++) {
    bufs[i].copy(nbuf, off)
    off += bufs[i].length
  }

  return nbuf
}

exports.isInt = function isInt(i) {
  return i%1 === 0
}

//stolen from underscore; sorta...
//  they use '==' I prefer '===' in V8 in don't matter 
exports.isString = function isString(o) {
  return Object.prototype.toString.call(o) === "[object String]"
}

exports.isNumber = function isNumber(o) {
  return Object.prototype.toString.call(o) === "[object Number]"
}

exports.isFunction = function isFunction(o) {
  return Object.prototype.toString.call(o) === "[object Function]"
}
