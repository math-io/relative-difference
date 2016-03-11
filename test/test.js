'use strict';

// MODULES //

var tape = require( 'tape' );
var diff = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof diff, 'function', 'main export is a function' );
	t.end();
});
