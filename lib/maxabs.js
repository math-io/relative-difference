'use strict';

// MODULES //

var abs = require( 'math-abs' );


// MAX //

/**
* FUNCTION: max( x, y )
*	Returns the maximum value of `|x|` and `|y|`.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @returns {Number} maximum absolute value value
*/
function max( x, y ) {
	x = abs( x );
	y = abs( y );
	return ( x < y ) ? y : x;
} // end FUNCTION max()


// EXPORTS //

module.exports = max;
