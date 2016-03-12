'use strict';

// MODULES //

var abs = require( 'math-abs' );


// MEAN //

/**
* FUNCTION: mean( x, y )
*	Returns the arithmetic mean of `|x|` and `|y|`.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @returns {Number} arithmetic mean
*/
function mean( x, y ) {
	x = abs( x );
	y = abs( y );
	return ( x + y ) / 2.0;
} // end FUNCTION mean()


// EXPORTS //

module.exports = mean;
