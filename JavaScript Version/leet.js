// -*- coding: utf-8 -*-

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
 * leet.item({
 *    a: 1, //@
 *    b: 2  //Гџ
 *  });
 *
 * //extend the existing set of roots:
 * leet.extend('root', {
 *    foo: 1,
 *    bar: 2
 * });
 *
 * //extends the existing set of ciphers
 * //Note you'd to escape sequences like ',",\
 * leet.extend('cipher', {
 *    a: '/-\\',
 *    b: '\\>>'
 * });
 *
 * //encode
 * var encode = leet.encode('foo is a big bar');
 *
 * //result
 * console.log(encode); //1 !$ @ Гџ![, 2
 *
 * @author: Alexander Guinness
 * @version: 1.2
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
	* Orthography list of items associated with the characters of Leet
	*/
	cipher : {
		a: ['/-\\', '@', '/*\\', '/=\\', '/\\', '^', 'aye', 'λ', 'ci', '@',
			'Z', '(L', '∂', 4],
		b: ['|3', 'I3', '!3', 'ß', '(3', '/3', ')3', '|-]', ']3', 'j3', 6, 13, 8],
		c: ['[', '(', '<', '¢', '{', '©©', 'sea', 'see', 5],
		d: [')', '|)', '[)', '(|', '∂', '])', '|}', '|]', 'I>', '|>', '?', 'T)', 'I7',
			0, 'ð', 'cl', 2],
		e: ['[-', '£', '&', '€', 'ə', 'ë', '|=-', 3],
		f: ['|=', 'ʃ’', '|#', ']=', '/=', '}', 'ph', '(=', 'ƒ', 'v', 7],
		g: ['[,', '&', '(_+', 'C-', 'gee', 'jee', 'cj', '(?,', '{,', '<-', '(.', 6, 9],
		h: ['|-|', '\\-/', '/-/', '#', ']-[', '[-]', ')-(', '(-)', '|~|',  '|-|', ']~[',
			'!-!', '1-1', ':-:', '}{', '}-{', 'I+I', '{-}', '\\=\\', '|=|', '|.|', '|=|',
			'|*|', 'aych', '?', 6],
		i: ['!', '|', 'eye', '3y3', 'ai', '¡', 1],
		j: ['_|', '_/', ',_|', '_]', ',_]', '._|', '._]', ']', '¿', '</', '_)', 'ʝ', '01'],
		k: ['|<', '>|', '1<', 'X', '|c', '|(', '|X', '|{', '05'],
		l: ['|_', 'ВЈ', '|', '|_', 'lJ', '£', '¬', 1, 7, '07'],
		m: ['/\\/\\', '|\\/|', 'em', '|v|', 'IYI', 'IVI', '[V]', '^^', 'nn',
			'//\\\\//\\\\', '(V)', '(v)', '{V}', '(\\/)', '|\\|\\', '/|\\', '/|/|',
			'<\\/>', '.\\\\', '/^^\\', '/V\\', '|^^|', 'AA', 44, '02'],
		n: ['|\\|', '^/', '/\\/', '//\\\\//', '₪', '[\]', '<\\>', '{\\}', '/V', '//', 'ท',
			'И', '[]\\[]', ']\\[', '~', '03'],
		o: ['()', 'oh', 'p', '<>', '[]', 'Ω', 'Ω', '¤', 0, '08'],
		p: ['|*', '|o', '|º', '|>', '|"', '|^', '?', '9', '[]D', '|7', 'q', '¶', '℗',
			'þ', '|D', 66],
		q: ['0_', '0,', '(,)', '<|', 'cue', '&', 9, 2, 99],
		r: ['|2', '|9', '|?', '/2', 'I2', '|^', '|~', '|-', 'lz', 'В', 'I2', '[z',
			'|`', 'l2', 'ʁ', '.-', 'Я', '®', 2, 44],
		s: ['$', 'z', '§', 'ehs', 'es', 5, 2, 55],
		t: ['+', '-|-', '\'][\'', '†', '~|~', '«|»', 7, 1, 77],
		u: ['|_|', '(_)', 'Y3W', 'M', '[_]', '\_/', '\_\\', '/_/', 'L|', 'v', 'µ', 'บ', 88],
		v: ['\\/', '√', '\\\\//', '007'],
		w: ['\\/\\/', 'vv', '\'//', '\\\\\'', '\\^/', '(n)', '\\X/', '\\|/', '\\_|_/',
			'\\\\//\\\\//', '\\_:_/', ']I[', 'UU', 'dubya', '\\V/', '\\X/', 'UU', '2u',
			'Ш', 'ɰ', '￦', 'JL', '008'],
		x: ['><', '%', 'Р–', '}{', 'ecks', 'Г—', '*', ')(', '][', 'ex', '001'],
		y: ['`/', 'j', '`(', '-/', '\'/', '\\//', 'φ', 'λ', 'Ч', '¥', 'Ψ', 7, '002'],
		z: ['≥', '-/_', '~/_', '-\\_', '-|_', '>_', 's', '%', '7_', 'ʒ', 2, '003']
	},

	/*
	* Orthography list of items associated with the digits of Leet
	*/
	root: {
		'one':  1,     'two':   2,   'to':    2,
		'too':  2,     'tree':  3,   'three': 3,
		'four': 4,     'for':   4,   'five':  5,
		'six':  6,     'seven': 7,   'eight': 8,
		'ait':  8,     'ate':   8,   'eit':   8,
		'nine': 9,     'ks':    'x', 'cs':    'x',
		'and':  7,     'anned': 7,   'ant':   7,
		'yeah': 'ya!', 'you':   'u', 'cool':  'k1'
	},

	/*
	* Creates an object with default values
	* and extends the basic symbols of Leet
	*
	* Number items (String item);
	*/
	items: function(item) {
		var items = {};

		//fill items with default values
		for (var i in this.cipher)
			items[i] = 0;

		//set the item
		var _item = this._item;

		if (_item) {
			for (var i in _item || {})
				items[i] = _item[i];
		}

		return items[item]|0;
	},

	/*
	* Checks to see if an object is a plain object
	* Boolean object (Object object);
	*/
	object: function(object) {
		return Object.prototype.toString.call(object) === '[object Object]';
	},

	/*
	* This method explicitly sets the character of a set of default values
	*
	* Use:
	*	leet.item({
	*		a: 1
	*	});
	*
	* void item (Object object)
	*/
	item: function(object) {
		if (this.object(object))
			this._item = object;
	},

	/*
	* Extends and merges the existing set of ciphers:
	*   - this.cipher
	*   - this.root
	*
	* Use:
	*   leet.extend('root', {
	*       foo: 1,
	*       bar: 2
	*   });
	*
	*  void extend (String item, Object values);
	*/
	extend: function(name, values) {
		if (!this.object(values) && !this.object(name))
			return -1;

		var key = this[name];

		for (var i in values) {
			if (name == 'cipher')
				key[i].unshift(values[i]);

			else if (name == 'root')
				key[i] = values[i];
		}
	},

	/*
	* Encodes the Latin characters in the Leet sequence
	* String encode (String string);
	*/
	encode: function(string) {
		var self = this;

		//First, the roots should be replaced with Leet digits
		for (var i in this.root)
			string = string.replace(RegExp(i, 'g'), this.root[i]);

		//Replace the remaining characters
		return string.replace(/./g, function(item) {
			var cipher = self.cipher[item];
			return item in self.cipher ? cipher[self.digit ? cipher.length - 1 : self.items(item)] : item
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
