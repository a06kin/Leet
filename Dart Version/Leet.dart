// -*- coding: utf-8 -*-

/**
 * Leet
 * Leet (or "1337"), also known as eleet or leetspeak,
 * is an alternative alphabet for the English language
 * that is used primarily on the Internet
 *
 * class Leet ([bool digit = false])
 *
 * Use:
 * Leet leet = new Leet();
 *
 * //set the character of a set of default values
 * leet.item({
 *    'a': '1', //@
 *    'b': '2'  //Гџ
 *  });
 *
 * //extend the existing set of roots:
 * leet.extend('root', {
 *    'foo': '1',
 *    'bar': '2'
 * });
 *
 * //extends the existing set of ciphers
 * //Note you'd to escape sequences like ',",\
 * leet.extend('cipher', {
 *    'a': '/-\\',
 *    'b': '\\>>'
 * });
 *
 * //encode
 * var encode = leet.encode('foo is a big bar');
 *
 * //result
 * print(encode); //1 !$ @ Гџ![, 2
 *
 * @author: Alexander Guinness
 * @version: 1.2
 * @params: {bool} digit - optional boolean parameter
 * to set an alternative digital view
 * @license: MIT
 * @date: 4/06/12 12:27 PM
**/

class Leet {
	bool digit;
	Map<String, String> cipher, root, set_item;

	Leet([this.digit = false]) {
		/*
		* Orthography list of items associated with the characters of Leet
		*/
		cipher = {
			'a': ['/-\\', '@', '/*\\', '/=\\', '/\\', '^', 'aye', 'λ', 'ci', '@',
				'Z', '(L', '∂', '4'],
			'b': ['|3', 'I3', '!3', 'ß', '(3', '/3', ')3', '|-]', ']3', 'j3', '6', '13', '8'],
			'c': ['[', '(', '<', '¢', '{', '©©', 'sea', 'see', '5'],
			'd': [')', '|)', '[)', '(|', '∂', '])', '|}', '|]', 'I>', '|>', '?', 'T)', 'I7',
				'0', '∂', 'cl', '2'],
			'e': ['[-', '£', '&', '€', 'ə', 'ë', '|=-', '3'],
			'f': ['|=', 'ʃ’', '|#', ']=', '/=', '}', 'ph', '(=', 'ƒ', 'v', '7'],
			'g': ['[,', '&', '(_+', 'C-', 'gee', 'jee',  'cj', '(?,', '{,', '<-',
				'(.', '6', '9'],
			'h': ['|-|', '\\-/', '/-/', '#', ']-[', '[-]', ')-(', '(-)', '|~|',	'|-|', ']~[',
				'!-!', '1-1', ':-:', '}{', '}-{', 'I+I', '{-}', '\\=\\', '|=|', '|.|', '|=|',
				'|*|', 'aych', '?', '6'],
			'i': ['!', '|', 'eye', '3y3', 'ai', '¡', '1'],
			'j': ['_|', '_/', ',_|', '_]', ',_]', '._|', '._]', ']', '¿', '</', '_)', 'ʝ', '01'],
			'k': ['|<', '>|', '1<', 'X', '|c', '|(', '|X', '|{', '05'],
			'l': ['|_', 'ВЈ', '|', '|_', 'lJ', '£', '¬', '1', '7', '07'],
			'm': ['/\\/\\', '|\\/|', 'em', '|v|', 'IYI', 'IVI', '[V]', '^^', 'nn',
				'//\\\\//\\\\', '(V)', '(v)', '{V}', '(\\/)', '|\\|\\', '/|\\', '/|/|',
				'<\\/>', '.\\\\', '/^^\\', '/V\\', '|^^|', 'AA', '44', '02'],
			'n': ['|\\|', '^/', '/\\/', '//\\\\//', '₪', '[\]', '<\\>', '{\\}', '/V', '//', 'ท',
				'И', '[]\\[]', ']\\[', '~', '03'],
			'o': ['()', 'oh', 'p', '<>', '[]', 'Ω', 'Ω', '¤', '0', '08'],
			'p': ['|*', '|o', '|º', '|>', '|"', '|^', '?', '9', '[]D', '|7', 'q', '¶', '℗',
				'в„—', '|D', '66'],
			'q': ['0_', '0,', '(,)', '<|', 'cue', '&', '9', '2', '99'],
			'r': ['|2', '|9', '|?', '/2', 'I2', '|^', '|~', '|-', 'lz', 'В', 'I2', '[z',
				'|`', 'l2', 'ʁ', '.-', 'Я', '®', '2', '44'],
			's': ['\$', 'z', '§', 'ehs', 'es', '5', '2', '55'],
			't': ['+', '-|-', '\'][\'', '†', '~|~', '«|»', '7', '1', '77'],
			'u': ['|_|', '(_)', 'Y3W', 'M', '[_]', '\_/', '\_\\', '/_/', 'L|', 'v', 'µ', 'บ', '88'],
			'v': ['\\/', '√', '\\\\//', '007'],
			'w': ['\\/\\/', 'vv', '\'//', '\\\\\'', '\\^/', '(n)', '\\X/', '\\|/', '\\_|_/',
				'\\\\//\\\\//', '\\_:_/', ']I[', 'UU', 'dubya', '\\V/', '\\X/', 'uu', '2u',
				'Ш', 'ɰ', '￦', 'JL', '008'],
			'x': ['><', '%', 'Р–', '}{', 'ecks', 'Г—', '*', ')(', '][', 'ex', '001'],
			'y': ['`/', 'j', '`(', '-/', '\'/', '\\//', 'φ', 'λ', 'Ч', '¥', 'Ψ', '7', '002'],
			'z': ['≥', '-/_', '~/_', '-\\_', '-|_', '>_', 's', '%', '7_', 'ʒ', '2', '003']
		};

		/*
		* Orthography list of items associated with the digits of Leet
		*/
		root = {
			'one':  '1',   'two':   '2',  'to':    '2',
			'too':  '2',   'tree':  '3',  'three': '3',
			'four': '4',   'for':   '4',  'five':  '5',
			'six':  '6',   'seven': '7',  'eight': '8',
			'ait':  '8',   'ate':   '8',  'eit':   '8',
			'nine': '9',   'ks':    'x',  'cs':    'x',
			'and':  '7',   'anned': '7',  'ant':   '7',
			'yeah': 'ya!', 'you':   'u',  'cool':  'k1'
		};
	}

	/*
	* Creates an object with default values
	* and extends the basic symbols of Leet
	*
	* int items (String i);
	*/
	int items(String i) {
		Map set_cipher = {};

		//fill items with default values
		this.cipher.getKeys().forEach((key) => set_cipher[key] = 0);

	  //set the item
		if (this.set_item is Map)
		  this.set_item.forEach((key, value) => set_cipher[key] = value);
 
		return set_cipher[i] is int ? set_cipher[i] : Math.parseInt(set_cipher[i]);
	}
	
	/*
	* This method explicitly sets the character of a set of default values
	*
	* Use:
	* leet.item({
	*	 'a': '1'
	* });
	*
	* void item (Map object)
	*/
	
	void item(Map object) {
		this.set_item = object;
	}

	/*
	* Extends and merges the existing set of ciphers:
	*	 - this.cipher
	*	 - this.root
	*
	* Use:
	*	leet.extend('root', {
	*		'foo': '1',
	*	 	'bar': '2'
	*	});
	*
	*	void extend (String item, Map object);
	*/
	void extend(String name, Map object) {
		/*
		* Predicate for forEach
		* void predicate(String key, String value);
		*/
		void predicate(String key, String value) {
			if (name == 'cipher')
				this.cipher[key].addLast(value);

			else if (name == 'root')
				this.root[key] = value;
		}

		if (object is Map)
			object.forEach((key, value) => predicate(key, value));
	}

	/*
	* Encodes the Latin characters in the Leet sequence
	* String encode (String string);
	*/
	String encode(String string) {

		//First, the roots should be replaced with Leet digits
		this.root.forEach((key, value) => string = string.replaceAll(key, value));

		//Replace the remaining characters
		 List list = [];

		RegExp re = const RegExp(@'.'); 
		Iterable<Match> matches = re.allMatches(string);
		Iterator it = matches.iterator();

		while (it.hasNext()) {
			final match = it.next().group(0);

			if (this.cipher.containsKey(match))  
				list.add(this.cipher[match][this.digit ? this.cipher[match].length - 1 : this.items(match)]);

			else list.add(match);
		}

		return Strings.join(list, ''); 
	}

	/*
	* Decode Leet sequence
	*/
	void decode() {
		/*
		* There is no reason to implement this method because:
		*	 - very high computational complexity
		*	 - very fuzzy search
		*	 - low accuracy of the result
		* Also see: https://www.google.com/webhp?hl=xx-hacker
		* But if you still want to implement the one let me know!
		*/
	}
}
