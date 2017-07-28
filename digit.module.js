"use strict";

/*;
	@submodule-license:
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
	@end-submodule-license

	@submodule-configuration:
		{
			"package": "numo",
			"path": "numo/digit.module.js",
			"file": "digit.module.js",
			"module": "numo",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/numo.git",
			"test": "numo-test.js",
			"global": false,
			"internal": true,
			"class": true
		}
	@end-submodule-configuration

	@submodule-documentation:
		Digit class wrapper.
	@end-submodule-documentation

	@include:
		{
			"ehm": "ehm"
		}
	@end-include
*/

const Meta = require( "ehm" )( );

const EMPTY_STRING = "";
const DIGIT = Number;
const SERIALIZE_DIGIT_TAG = "[object Number:Number]";
const META_SERIALIZE_DIGIT_TAG = Meta.create( DIGIT ).serialize( );

class Digit extends Meta {
	static [ Symbol.hasInstance ]( instance ){
		return (
			instance === DIGIT ||
			Meta.instanceOf( instance, this )
		);
	}

	static deserialize( data, parser, blueprint ){
		/*;
			@meta-configuration:
				{
					"data": "*",
					"parser": "function",
					"blueprint": "function"
				}
			@end-meta-configuration
		*/

		return Meta.create( this, DIGIT );
	}

	constructor( ){
		super( DIGIT, "Digit" );
	}

	get [ Meta.OBJECT ]( ){
		return EMPTY_STRING;
	}

	get [ Meta.BOOLEAN ]( ){
		return false;
	}

	get [ Meta.STRING ]( ){
		return EMPTY_STRING;
	}

	get [ Meta.NUMBER ]( ){
		return 0;
	}

	serialize( parser ){
		/*;
			@meta-configuration:
				{
					"parser": "function"
				}
			@end-meta-configuration
		*/

		return SERIALIZE_DIGIT_TAG;
	}

	isCompatible( tag ){
		return (
			tag === SERIALIZE_DIGIT_TAG
			|| tag === META_SERIALIZE_DIGIT_TAG
		);
	}
}

module.exports = Digit;
