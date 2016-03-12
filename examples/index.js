'use strict';

var diff = require( './../lib' );

var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*1e4 - 1e2;
	y = Math.random()*1e4 - 1e2;

	d = diff( x, y );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'max-abs' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'max' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'min-abs' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'min' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'mean-abs' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'mean' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'x' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );

	d = diff( x, y, 'y' );
	console.log( 'x = %d. y = %d. d = %d.', x, y, d );
}
