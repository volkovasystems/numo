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
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var DIGIT = Number;
var SERIALIZE_DIGIT_TAG = "[object Number:Number]";
var META_SERIALIZE_DIGIT_TAG = Meta.create(DIGIT).serialize();var

Digit = function (_Meta) {(0, _inherits3.default)(Digit, _Meta);(0, _createClass3.default)(Digit, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				instance === DIGIT ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			return Meta.create(this, DIGIT);
		} }]);

	function Digit() {(0, _classCallCheck3.default)(this, Digit);return (0, _possibleConstructorReturn3.default)(this, (Digit.__proto__ || (0, _getPrototypeOf2.default)(Digit)).call(this,
		DIGIT, "Digit"));
	}(0, _createClass3.default)(Digit, [{ key: "serialize", value: function serialize(

















		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_DIGIT_TAG;
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			return (
				tag === SERIALIZE_DIGIT_TAG ||
				tag === META_SERIALIZE_DIGIT_TAG);

		} }, { key: Meta.OBJECT, get: function get() {return EMPTY_STRING;} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return 0;} }]);return Digit;}(Meta);


module.exports = Digit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0LnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJFTVBUWV9TVFJJTkciLCJESUdJVCIsIk51bWJlciIsIlNFUklBTElaRV9ESUdJVF9UQUciLCJNRVRBX1NFUklBTElaRV9ESUdJVF9UQUciLCJjcmVhdGUiLCJzZXJpYWxpemUiLCJEaWdpdCIsImluc3RhbmNlIiwiaW5zdGFuY2VPZiIsImRhdGEiLCJwYXJzZXIiLCJibHVlcHJpbnQiLCJ0YWciLCJPQkpFQ1QiLCJCT09MRUFOIiwiU1RSSU5HIiwiTlVNQkVSIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwREEsSUFBTUEsT0FBT0MsUUFBUyxLQUFULEdBQWI7O0FBRUEsSUFBTUMsZUFBZSxFQUFyQjtBQUNBLElBQU1DLFFBQVFDLE1BQWQ7QUFDQSxJQUFNQyxzQkFBc0Isd0JBQTVCO0FBQ0EsSUFBTUMsMkJBQTJCTixLQUFLTyxNQUFMLENBQWFKLEtBQWIsRUFBcUJLLFNBQXJCLEVBQWpDLEM7O0FBRU1DLEs7QUFDMEJDLFUsRUFBVTtBQUN4QztBQUNDQSxpQkFBYVAsS0FBYjtBQUNBSCxTQUFLVyxVQUFMLENBQWlCRCxRQUFqQixFQUEyQixJQUEzQixDQUZEOztBQUlBLEc7O0FBRW1CRSxNLEVBQU1DLE0sRUFBUUMsUyxFQUFXO0FBQzVDOzs7Ozs7Ozs7O0FBVUEsVUFBT2QsS0FBS08sTUFBTCxDQUFhLElBQWIsRUFBbUJKLEtBQW5CLENBQVA7QUFDQSxHOztBQUVELGtCQUFjO0FBQ05BLE9BRE0sRUFDQyxPQUREO0FBRWIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JVVSxRLEVBQVE7QUFDbEI7Ozs7Ozs7O0FBUUEsVUFBT1IsbUJBQVA7QUFDQSxHOztBQUVhVSxLLEVBQUs7QUFDbEI7QUFDQ0EsWUFBUVYsbUJBQVI7QUFDR1UsWUFBUVQsd0JBRlo7O0FBSUEsRyxXQWpDS04sS0FBS2dCLE0sc0JBQVcsQ0FDckIsT0FBT2QsWUFBUCxDQUNBLEMsV0FFS0YsS0FBS2lCLE8sc0JBQVksQ0FDdEIsT0FBTyxLQUFQLENBQ0EsQyxXQUVLakIsS0FBS2tCLE0sc0JBQVcsQ0FDckIsT0FBT2hCLFlBQVAsQ0FDQSxDLFdBRUtGLEtBQUttQixNLHNCQUFXLENBQ3JCLE9BQU8sQ0FBUCxDQUNBLEMsb0JBeENrQm5CLEk7OztBQThEcEJvQixPQUFPQyxPQUFQLEdBQWlCWixLQUFqQiIsImZpbGUiOiJkaWdpdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAc3VibW9kdWxlLWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC1zdWJtb2R1bGUtbGljZW5zZVxuXG5cdEBzdWJtb2R1bGUtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJudW1vXCIsXG5cdFx0XHRcInBhdGhcIjogXCJudW1vL2RpZ2l0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwiZGlnaXQubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcIm51bW9cIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXG5cdFx0XHRdLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL251bW8uZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJudW1vLXRlc3QuanNcIixcblx0XHRcdFwiZ2xvYmFsXCI6IGZhbHNlLFxuXHRcdFx0XCJpbnRlcm5hbFwiOiB0cnVlLFxuXHRcdFx0XCJjbGFzc1wiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLXN1Ym1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QHN1Ym1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdERpZ2l0IGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5jb25zdCBESUdJVCA9IE51bWJlcjtcbmNvbnN0IFNFUklBTElaRV9ESUdJVF9UQUcgPSBcIltvYmplY3QgTnVtYmVyOk51bWJlcl1cIjtcbmNvbnN0IE1FVEFfU0VSSUFMSVpFX0RJR0lUX1RBRyA9IE1ldGEuY3JlYXRlKCBESUdJVCApLnNlcmlhbGl6ZSggKTtcblxuY2xhc3MgRGlnaXQgZXh0ZW5kcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdGluc3RhbmNlID09PSBESUdJVCB8fFxuXHRcdFx0TWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMsIERJR0lUICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggKXtcblx0XHRzdXBlciggRElHSVQsIFwiRGlnaXRcIiApO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5PQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5CT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5TVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfRElHSVRfVEFHO1xuXHR9XG5cblx0aXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGFnID09PSBTRVJJQUxJWkVfRElHSVRfVEFHXG5cdFx0XHR8fCB0YWcgPT09IE1FVEFfU0VSSUFMSVpFX0RJR0lUX1RBR1xuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBEaWdpdDtcbiJdfQ==
//# sourceMappingURL=digit.support.js.map
