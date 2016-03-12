'use strict';

// MODULES //

var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var abs = require( 'math-abs' );


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

} // end FUNCTION diff()


// EXPORTS //

module.exports = diff;
