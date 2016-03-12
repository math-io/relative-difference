'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var abs = require( 'math-abs' );
var SCALE = require( './scale.js' );


// RELATIVE DIFFERENCE //

/**
* FUNCTION: diff( x, y[, scale] )
*	Computes the relative difference.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @param {String|Function} [scale='max-abs'] - scale function
* @returns {Number} relative difference
*/
function diff( x, y, scale ) {
	var f;
	var s;
	if ( x !== x || y !== y ) {
		return NaN;
	}
	if (
		x === PINF ||
		x === NINF ||
		y === PINF ||
		y === NINF
	) {
		if ( x === y ) {
			return NaN;
		}
		return PINF;
	}
	// If the absolute difference is `0`, then so is the relative difference:
	if ( x === y ) {
		return 0.0;
	}
	if ( isFunction( scale ) ) {
		f = scale;
	} else {
		if ( scale === void 0 ) {
			scale = 'max-abs';
		}
		f = SCALE[ scale ];
		if ( f === void 0 ) {
			throw new Error( 'invalid input argument. Unrecognized/unsupported scale function. Value: `' + scale + '`.' );
		}
	}
	s = f( x, y );
	if ( s === 0 ) {
		// Bail. No return value makes sense for all possible scale functions...
		return NaN;
	}
	return abs( (x - y) / s );
} // end FUNCTION diff()


// EXPORTS //

module.exports = diff;
