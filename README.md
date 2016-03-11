Relative Difference
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [relative difference][relative-difference] of two real numbers.

The [relative difference][relative-difference] of two real `numbers` is defined as

<div class="equation" align="center" data-raw-text="\Delta(x,y) = \frac{|x - y|}{|f(x,y)|} = \left|\frac{x - y}{f(x,y)}\right|" data-equation="eq:relative_difference">
	<img src="" alt="Relative difference">
	<br>
</div>

where `|x-y|` is the [absolute difference][absolute-difference] and `f(x,y)` is a scale function.


## Installation

``` bash
$ npm install math-relative-difference
```


## Usage

``` javascript
var diff = require( 'math-relative-difference' );
```

#### diff( x, y[, method] )

Computes the [relative difference][relative-difference] of two real numbers.

``` javascript

```


## Examples

``` javascript
var diff = require( 'math-relative-difference' );

var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*1e4 - 1e2;
	y = Math.random()*1e4 - 1e2;
	d = diff( x, y );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );
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
[relative-difference]: https://en.wikipedia.org/wiki/Relative_change_and_difference
[absolute-difference]: https://github.com/math-io/absolute-difference
