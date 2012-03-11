/**
 * Leet
 * Leet (or "1337"), also known as eleet or leetspeak,
 * is an alternative alphabet for the English language
 * that is used primarily on the Internet
 *
 * Object Leet ([Boolean digit = false])
 *
 * Use:
 * var leet = new Leet();
 *
 * //set the character of a set of default values
 * leet.view({
 *    a: 1, //@
 *    b: 2, //ß
 *  });
 *
 * // extend the existing set of roots:
 * leet.append(leet.root, {
 *    foo: 1,
 *    bar: 2
 * });
 *
 * //extends the existing set of ciphers
 * leet.append(leet.ciphers, {
 *    a: '/-\',
 *    b: '\>>',
 * });
 *
 * //encode
 * var encode = leet.encode('foo is a big bar');
 *
 * //result
 * console.log(encode); //1 !$ @ ß![, 2
 *
 * @author: Alexander Guinness
 * @version: 1.1
 * @params: {Boolean} digit - optional boolean parameter
 * to set an alternative digital view
 * @license: MIT
 * @date: 3/24/12 6:34 PM
**/

var Leet = function(digit) {
	this.digit = digit;
};

Leet.prototype = {
	/*
	* A list of items associated with the characters of Leet
	*/
	cipher : {
		a: ['/-\\', '@', '/*\\', '/=\\', '/\\', '^', 'aye', '∂', 'ci', 'λ',
			'Z', '(L', 'Д', 4],
		b: ['|3', 'I3', '!3', 'ß', '(3', '/3', ')3', '|-]', ']3', 'j3', 6, 13, 8],
		c: ['[', '(', '<', '¢', '{', '©', 'sea', 'see', 5],
		d: [')', '|)', '[)', '(|', '∂', '])', '|}', '|]', 'I>', '|>', '?', 'T)', 'I7',
			0, 'ð', 'cl', 2],
		e: ['[-', '£', '&', '€', 'ə', 'ë', , '|=-', 3],
		f: ['|=', 'ƒ', '|#', ']=', '/=', '}', 'ph', '(=', 'ʃ', 'v', 7],
		g: ['[,', '&', '(_+', 'C-', 'gee', 'jee', '(γ,', 'cj', '(?,',
			'{,', '<-', '(.', 6, 9],
		h: ['|-|', '\\-/', '/-/', '#', ']-[', '[-]', ')-(', '(-)', '|~|',  '|-|', ']~[',
			'!-!', '1-1', ':-:', '}{', '}-{', 'I+I', '{-}', '\\=\\', '|=|', '|.|', '|=|',
			'|*|', , 'aych', '?', 6],
		i: ['!', '|', 'eye', '3y3', 'ai', '¡', 1],
		j: ['_|', '_/', ',_|', '_]', ',_]', '._|', '._]', ']', '¿', '</', '_)', 'ʝ', '01'],
		k: ['|<', '>|', '1<', 'X', '|c', '|(', '|X', '|{', 'ɮ', '|_', '£', '|', '|_',
			'lJ', '¬', 1, 7, '05'],
		l: ['|_', '£', '|', '|_', 'lJ', '¬', 1, 7, '07'],
		m: ['/\\/\\', '|\\/|', 'em', '|v|', 'IYI', 'IVI', '[V]', '^^', 'nn',
			'//\\\\//\\\\', '(V)', '(v)', '{V}', '(\\/)', '|\\|\\', '/|\\', '/|/|',
			'<\\/>', '.\\\\', '/^^\\', '/V\\', '|^^|', 'AA', 44, '02'],
		n: ['|\\|', '^/', '/\\/', '//\\\\//', 'И', '[\]', '<\\>', '{\\}', '/V', '//', '₪',
			'ท', '[]\\[]', ']\\[', '~', '03'],
		o: ['()', 'oh', 'p', '<>', '[]', '¤', 'Ω', 'Ø', 0, '08'],
		p: ['|*', '|o', '|º', '|>', '|"', '|^', '?', '9', '[]D', '|7', 'q', 'þ', '¶',
			'℗', '|D', 66],
		q: ['0_', '0,', '(,)', '<|', 'cue', '¶', 9, 2, 99],
		r: ['|2', '|9', '|?', '/2', 'I2', '|^', '|~', '|-', 'lz', '®', 'I2', '[z',
			'|`', 'l2', 'Я', '.-', 'ʁ', '®', 2, 44],
		s: ['$', 'z', '§', 'ehs', 'es', 5, 2, 55],
		t: ['+', '-|-', '\'][\'', '«|»', '~|~', '†', 7, 1, 77],
		u: ['|_|', '(_)', 'Y3W', 'M', 'µ', '[_]', '\_/', '\_\\', '/_/', 'L|', 'v', 'µ',
			'บ', 88],
		v: ['\\/', '√', '\\\\//', '007'],
		w: ['\\/\\/', 'vv', '\'//', '\\\\\'', '\\^/', '(n)', '\\X/', '\\|/', '\\_|_/',
			'\\\\//\\\\//', '\\_:_/', ']I[', 'UU', 'Ш', 'dubya', '\\V/', '\\X/', 'uu',
			'2u', 'ɰ', 'พ', '￦', 'JL', '008'],
		x: ['><', '%', 'Ж', '}{', 'ecks', '×', '*', ')(', '][', 'ex', '001'],
		y: ['`/', 'j', '`(', '-/', '\'/', '\\//', 'Ψ', 'φ', 'λ', 'Ч', '¥', '002'],
		z: ['≥', '-/_', '~/_', '-\\_', '-|_', '>_', 's', '%', 'ʒ', '7_', 2, '003']
	},

	/*
	* A list of items associated with the digits of Leet
	*/
	root: {
		'one':   1, 'two':   2, 'to':    2,
		'too':   2, 'tree':  3, 'three': 3,
		'four':  4, 'for':   4, 'five':  5,
		'six':   6, 'seven': 7, 'eight': 8,
		'ait':   8, 'ate':   8, 'eit':   8,
		'nine':  9, 'ks':   'x', 'cs':  'x'
	},

	/*
	* Extends the existing set of ciphers:
	*   - this.cipher
	*   - this.root
	*
	* Use:
	*   leet.append(leet.root, {
	*       foo: 1,
	*       bar: 2
	*   });
	*
	* Object items (String item);
	*/
	append: function(object, values) {
		if (this.object(object) && this.object(values))
			this.extend(object, values);
	},

	/*
	* Creates an object with default values
	* ​​and extends the basic symbols of Leet
	*
	* Object items (String item);
	*/
	items: function(item) {
		var items = {};

		//fill items with default values
		for (i in this.cipher)
			items[i] = 0;

		return this.extend(items, this.view)[item];
	},

	/*
	* Checks to see if an object is a plain object
	* Boolean object (Object object);
	*/
	object: function(object) {
		return Object.prototype.toString.call(object) == '[object Object]';
	},

	/*
	* This method explicitly sets the character of a set of default values
	*
	* Use:
	*	leet.view({
	*		s: 1
	*	});
	*
	* void view (Object object)
	*/
	view: function(object) {
		if (this.object(object))
			this.view = object;
	},

	/*
	* Merges the contents of two objects together into the first object.
	* Object extend (Object object, [Object values]);
	*/
	extend: function(object, values) {
		if (!this.object(values))
			return object;

		for (i in values)
			object[i] = values[i];

		return object;
	},

	/*
	* Encodes the Latin characters in the Leet sequence
	* String encode (String string);
	*/
	encode: function(string) {
		var self = this;

		//First, the roots should be replaced with Leet digits
		for (i in this.root)
			string = string.replace(RegExp(i, 'g'), this.root[i]);

		//Replace the remaining characters
		return string.replace(/[\w\d]/g, function(item) {
			var array = self.cipher[item];

			try {
				 return array[self.digit ? array.length-1 : self.items(item)];
			}
			catch (error) {
				return item;
			}
		});
	},

	/*
	* Decode Leet sequence
	*/
	decode: function() {
		/*
		* There is no reason to implement this method because:
		*   - very high computational complexity
		*   - very fuzzy search
		*   - low accuracy of the result
		* Also see: https://www.google.com/webhp?hl=xx-hacker
		* But if you still want to implement the one let me know!
		*/
	}
};
