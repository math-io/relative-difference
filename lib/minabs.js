'use strict';

// MODULES //

var abs = require( 'math-abs' );


// MIN //

/**
* FUNCTION: min( x, y )
*	Returns the minimum value of `|x|` and `|y|`.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @returns {Number} minimum absolute value value
*/
function min( x, y ) {
	x = abs( x );
	y = abs( y );
	return ( x > y ) ? y : x;
} // end FUNCTION min()


// EXPORTS //

module.exports = min;
