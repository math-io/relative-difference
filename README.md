Relative Difference
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [relative difference][relative-difference] of two real numbers.

The [relative difference][relative-difference] of two real `numbers` is defined as

<div class="equation" align="center" data-raw-text="\Delta(x,y) = \frac{|x - y|}{|f(x,y)|} = \left|\frac{x - y}{f(x,y)}\right|" data-equation="eq:relative_difference">
	<img src="https://cdn.rawgit.com/math-io/relative-difference/682615ae856109ddb1bf59eb3baea8ba20c9ab56/docs/img/relative_difference.svg" alt="Relative difference">
	<br>
</div>

where `|x-y|` is the [absolute difference][absolute-difference] and `f(x,y)` is a scale function. Common scale functions include

<div class="equation" align="center" data-raw-text="\begin{align*}f(x,y) &amp;= \max(|x|, |y|)\\f(x,y) &amp;= \max(x,y)\\ f(x,y) &amp;= \min(|x|,|y|)\\f(x,y) &amp;= \min(x,y) \\f(x,y) &amp;= \frac{|x|+|y|}{2} \\f(x,y) &amp;= \frac{x + y}{2}\end{align*}" data-equation="eq:scale_functions">
	<img src="https://cdn.rawgit.com/math-io/relative-difference/3251fd85fe26662f1e4e84038923015520177182/docs/img/scale_functions.svg" alt="Scale functions">
	<br>
</div>

The choice of scale function depends on application context.


## Installation

``` bash
$ npm install math-relative-difference
```


## Usage

``` javascript
var diff = require( 'math-relative-difference' );
```

#### diff( x, y[, scale] )

Computes the [relative difference][relative-difference] of two real numbers.

``` javascript
var d = diff( 2, 5 );
// returns 3/5 = 0.6

d = diff( -1, 3.14 );
// returns 4.14/3.14 = ~1.318
```

The following `scale` functions are supported:

*	__max-abs__: maximum [absolute value][absolute-value] of `x` and `y` (*default*).
*	__max__: maximum value of `x` and `y`.
*	__min-abs__: minimum [absolute value][absolute-value] of `x` and `y`.
*	__min__: minimum value of `x` and `y`.
*	__mean-abs__: arithmetic mean of the [absolute values][absolute-value] of `x` and `y`.
*	__mean__: arithmetic mean of `x` and `y`.
*	__x__: `x`.
*	__y__: `y`.

By default, the `function` scales the [absolute difference][absolute-difference] by dividing the [absolute difference][absolute-difference] by the maximum [absolute value][absolute-value] of `x` and `y`. To scale by a different `function`, specify a scale function name. 

``` javascript
var d = diff( -2, 5 );
// returns |-7/5| = 1.4

d = diff( -2, 5, 'max-abs' );
// returns |-7/5| = 1.4

d = diff( -2, 5, 'max' )
// returns |-7/5| = 1.4

d = diff( -2, 5, 'min-abs' );
// returns |-7/2| = 3.5

d = diff( -2, 5, 'min' );
// returns |-7/-2| = 3.5

d = diff( -2, 5, 'mean-abs' );
// returns |-7/3.5| = 2

d = diff( -2, 5, 'mean' );
// returns |-7/1| = 7

d = diff( -2, 5, 'x' );
// returns |-7/-2| = 3.5

d = diff( 5, -2, 'x' );
// returns |7/5| = 1.4

d = diff( -2, 5, 'y' );
// returns |-7/5| = 1.4

d = diff( 5, -2, 'y' );
// returns |7/-2| = 3.5
```

To use a custom scale `function`, provide a `function` which accepts two numeric arguments `x` and `y`.

``` javascript
var abs = require( 'math-abs' );
var EPS = require( 'const-eps-float64' );

function scale( x, y ) {
	var s;
	x = abs( x );
	y = abs( y );
	
	// Maximum absolute value:
	s = (x < y ) ? y : x;

	// Scale in units of epsilon: 
	return s * EPS;
}

var d = diff( 12.15, 12.149999999999999, scale );
// returns ~0.658
```


## Notes

*	If the [absolute difference][absolute-difference] of `x` and `y` is `0`, the relative difference is __always__ `0`.

	``` javascript
	var d = diff( 0, 0 );
	// returns 0

	d = diff( 3.14, 3.14 );
	// returns 0
	```
*	If `|x| = |y| = infinity`, the function returns `NaN`.

	``` javascript
	var PINF = Number.POSITIVE_INFINITY;
	var NINF = Number.NEGATIVE_INFINITY;

	var d = diff( PINF, PINF );
	// returns NaN

	d = diff( NINF, NINF );
	// returns NaN
	``` 
* 	If `|x| = |-y| = infinity`, the relative difference is `+infinity`.

	``` javascript
	var PINF = Number.POSITIVE_INFINITY;
	var NINF = Number.NEGATIVE_INFINITY;

	var d = diff( PINF, NINF );
	// returns +infinity

	d = diff( NINF, PINF );
	// returns +infinity
	```
*	If a `scale` function returns `0`, the function returns `NaN`.

	``` javascript
	var d = diff( 0, 2, 'mean' );
	// returns |2/1| = 1

	d = diff( -1, 1, 'mean' );
	// returns NaN => |2/0|
	```


## Examples

``` javascript
var diff = require( 'math-relative-difference' );

var scales = [ 'max-abs', 'max', 'min-abs', 'min', 'mean-abs', 'mean', 'x', 'y' ];
var x;
var y;
var d;
var i;
var j;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*1e4 - 5e3;
	y = Math.random()*1e4 - 5e3;
	for ( j = 0; j < scales.length; j++ ) {
		d = diff( x, y, scales[j] );
		console.log( 'x = %d. y = %d. d = %d. scale: %s.', x, y, d, scales[j] );
	}
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-relative-difference.svg
[npm-url]: https://npmjs.org/package/math-relative-difference

[build-image]: http://img.shields.io/travis/math-io/relative-difference/master.svg
[build-url]: https://travis-ci.org/math-io/relative-difference

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/relative-difference/master.svg
[coverage-url]: https://codecov.io/github/math-io/relative-difference?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/relative-difference.svg
[dependencies-url]: https://david-dm.org/math-io/relative-difference

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/relative-difference.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/relative-difference

[github-issues-image]: http://img.shields.io/github/issues/math-io/relative-difference.svg
[github-issues-url]: https://github.com/math-io/relative-difference/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[absolute-value]: https://github.com/math-io/abs
[absolute-difference]: https://github.com/math-io/absolute-difference
[relative-difference]: https://en.wikipedia.org/wiki/Relative_change_and_difference
