/**
 * Implementation of ECMAScript 5:
 * Object.keys and Array.prototype.forEach
 * @author: Alexander Guinness
 * @version: 1.0
 * @license: MIT
 * @date: 3:14 PM 4/14/12
 **/

(function($) {
	'use strict';

	/**
	 * @param {Object} The object whose enumerable own properties are to be returned
	 * @return {Array} Returns an array of all own enumerable properties found upon a given object,
	 * in the same order as that provided by a for-in loop
	 * @edition ECMA-262 5th Edition, 15.2.3.14
	*/
	if(!Object.keys) {
		Object.keys = function(object) {
			var array = [];
			for(var i in object) {
				if(Object.prototype.hasOwnProperty.call(object, i))
					array.push(i);
			}
			return array
		};
	}

	/**
	 * @param {Function} fn is Callback-function
	 * @param {Object} Object to use as this when executing callback
	 * @return {Array} Executes a provided function once per array element
	 * @edition ECMA-262 5th Edition, 15.4.4.18
	*/
	if(!$.forEach) {
		$.forEach = function(fn, object) {
			var length = this.length, i = -1;
			while(i++ < length) {
				if(this.hasOwnProperty(i))
					fn.call(object, this[i], i, this);
			 }
		};
	}
}(Array.prototype));