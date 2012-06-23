Useful Functions
================

This is a node.js module to provide useful miscellaneous functions. For
example, min(), max(), and cmp() . Almost all these function are trivially
short.

API
---

### `exit(d)`
Calls `process.exit(d)` on `nextTick`. Useful when you print something out
then immediately call `process.exit()`, because sometimes the program exits
before the message was printed to `stdout`.

### `repeatstr(str, n)`
Returns a string which is `str` repeated `n` times. Basically, it is the
`x` operator from Perl.

### `rand(d, n)`
Returns a random number `[n,n+d)`. If it is called `rand(d)`, then `n=0`.

### `psuedo_foor(d)`
There is a problem with some Math functions. For example,

    Math.log(1000)/Math.LN10 //=> 2.9999999999999996 oops!

Hence, `Math.floor(Math.log(1000)/Math.LN10)` returns 2 which is wrong.
`pseudo_floor(d)` returns `d` if `d` is within `Math.pow(2,-43)` of `d`.
`2^-43` was chosen cuz it works on my `log10()` function for the whole span
of the double float number range.

### `log10(d)`
Return log base 10 of `d`.

### `order10(d)`
Return the base 10 order of magnitude of `d`.

### `min(a,b)`
Returns the smaller value of `a` or `b`.

### `max(a,b)`
Returns the larger value of `a` or `b`.

### `cmp(a,b)`
Returns `1` if `a > b`, `-` if `a < b`, and `0` if `a === b`.

### `bconcat(bufs)`
Returns a new Buffer which is the concatenation of `bufs`, where `bufs`
is an array of Buffer objects.

### `isInt(d)`
Returns true if `d` is an integer number, and false otherwise.

### `isString(s)`
Returns true if `s` is a string, and false otherwise.

### `isNumber(d)`
Returns true if `d` is a Number, and false otherwise.

### `isFunction(d)`
Returns true if `d` is a Function, and false otherwise.
