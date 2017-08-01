"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "numo",
			"path": "numo/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/numo.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"numo": "numo"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const numo = require( "./numo.js" );
//: @end-server

//: @client:
const numo = require( "./numo.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "numo", ( ) => {

	describe( "`numo( 123 )`", ( ) => {
		it( "should return Digit instance", ( ) => {
			let data = numo( 123 );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Digit" );

			assert.equal( data.valueOf( ), 123 );
		} );
	} );

} );

//: @end-server


//: @client:

describe( "numo", ( ) => {

	describe( "`numo( 123 )`", ( ) => {
		it( "should return Digit instance", ( ) => {
			let data = numo( 123 );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "Digit" );

			assert.equal( data.valueOf( ), 123 );
		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "numo", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`numo( 123 )`", ( ) => {
		it( "should return Digit instance", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof numo( 123 ); } ).value, "object" );
			//: @end-ignore

			assert.equal( browser.url( bridgeURL ).execute( ( ) => numo( 123 ).constructor.name ).value, "Digit" );

			assert.equal( browser.url( bridgeURL ).execute( ( ) => `${ numo( 123 ).valueOf( ) }` ).value, 123 );
		} );
	} );

} );

//: @end-bridge
