class Leet {
	bool digit;
	Map<String, String> cipher, root, set_item;

	Leet([this.digit = false]) {
		 
		/*
		*	A list of items associated with the characters of Leet
		*/
		cipher = {
				'a': ['/-\\', '@', '/*\\', '/=\\', '/\\', '^', 'aye', 'в€‚', 'ci', 'О»',
					'Z', '(L', 'Р”', '4'],
				'b': ['|3', 'I3', '!3', 'Гџ', '(3', '/3', ')3', '|-]', ']3', 'j3', '6', '13', '8'],
				'c': ['[', '(', '<', 'Вў', '{', 'В©', 'sea', 'see', '5'],
				'd': [')', '|)', '[)', '(|', 'в€‚', '])', '|}', '|]', 'I>', '|>', '?', 'T)', 'I7',
					'0', 'Г°', 'cl', '2'],
				'e': ['[-', 'ВЈ', '&', 'в‚¬', 'Й™', 'Г«', '|=-', '3'],
				'f': ['|=', 'Ж’', '|#', ']=', '/=', '}', 'ph', '(=', 'Кѓ', 'v', '7'],
				'g': ['[,', '&', '(_+', 'C-', 'gee', 'jee', '(Оі,', 'cj', '(?,',
					'{,', '<-', '(.', '6', '9'],
				'h': ['|-|', '\\-/', '/-/', '#', ']-[', '[-]', ')-(', '(-)', '|~|',	'|-|', ']~[',
					'!-!', '1-1', ':-:', '}{', '}-{', 'I+I', '{-}', '\\=\\', '|=|', '|.|', '|=|',
					'|*|', 'aych', '?', '6'],
				'i': ['!', '|', 'eye', '3y3', 'ai', 'ВЎ', '1'],
				'j': ['_|', '_/', ',_|', '_]', ',_]', '._|', '._]', ']', 'Вї', '</', '_)', 'Кќ', '01'],
				'k': ['|<', '>|', '1<', 'X', '|c', '|(', '|X', '|{', 'Й®', '|_', 'ВЈ', '|', '|_',
					'lJ', 'В¬', 1, 7, '05'],
				'l': ['|_', 'ВЈ', '|', '|_', 'lJ', 'В¬', 1, '7', '07'],
				'm': ['/\\/\\', '|\\/|', 'em', '|v|', 'IYI', 'IVI', '[V]', '^^', 'nn',
					'//\\\\//\\\\', '(V)', '(v)', '{V}', '(\\/)', '|\\|\\', '/|\\', '/|/|',
					'<\\/>', '.\\\\', '/^^\\', '/V\\', '|^^|', 'AA', '44', '02'],
				'n': ['|\\|', '^/', '/\\/', '//\\\\//', 'Р', '[\]', '<\\>', '{\\}', '/V', '//', 'в‚Є',
					'аё—', '[]\\[]', ']\\[', '~', '03'],
				'o': ['()', 'oh', 'p', '<>', '[]', 'В¤', 'О©', 'Г', '0', '08'],
				'p': ['|*', '|o', '|Вє', '|>', '|"', '|^', '?', '9', '[]D', '|7', 'q', 'Гѕ', 'В¶',
					'в„—', '|D', '66'],
				'q': ['0_', '0,', '(,)', '<|', 'cue', 'В¶', '9', '2', '99'],
				'r': ['|2', '|9', '|?', '/2', 'I2', '|^', '|~', '|-', 'lz', 'В®', 'I2', '[z',
					'|`', 'l2', 'РЇ', '.-', 'КЃ', 'В®', '2', '44'],
				's': ['\$', 'z', 'В§', 'ehs', 'es', '5', '2', '55'],
				't': ['+', '-|-', '\'][\'', 'В«|В»', '~|~', 'вЂ', '7', '1', '77'],
				'u': ['|_|', '(_)', 'Y3W', 'M', 'Вµ', '[_]', '\_/', '\_\\', '/_/', 'L|', 'v', 'Вµ',
					'аёљ', '88'],
				'v': ['\\/', 'в€љ', '\\\\//', '007'],
				'w': ['\\/\\/', 'vv', '\'//', '\\\\\'', '\\^/', '(n)', '\\X/', '\\|/', '\\_|_/',
					'\\\\//\\\\//', '\\_:_/', ']I[', 'UU', 'РЁ', 'dubya', '\\V/', '\\X/', 'uu',
					'2u', 'Й°', 'аёћ', 'пї¦', 'JL', '008'],
				'x': ['><', '%', 'Р–', '}{', 'ecks', 'Г—', '*', ')(', '][', 'ex', '001'],
				'y': ['`/', 'j', '`(', '-/', '\'/', '\\//', 'ОЁ', 'П†', 'О»', 'Р§', 'ВҐ', '002'],
				'z': ['в‰Ґ', '-/_', '~/_', '-\\_', '-|_', '>_', 's', '%', 'К’', '7_', '2', '003']
			};
		
			/*
			* A list of items associated with the digits of Leet
			*/
			root = {
				'one':	 '1', 'two':	 '2', 'to':		 '2',
				'too':	 '2', 'tree':	 '3', 'three': '3',
				'four':	 '4', 'for':	 '4', 'five':	 '5',
				'six':	 '6', 'seven': '7', 'eight': '8',
				'ait':	 '8', 'ate':	 '8', 'eit':	 '8',
				'nine':	 '9', 'ks':		 'x', 'cs':		 'x'
			};
	}		
	
	int items(String i) {
		Map set_cipher = {};

		//fill items with default values
		this.cipher.getKeys().forEach((key) => set_cipher[key] = 0);
		
		//print(this.set_item);
		
		this.set_item.forEach((key, value) => set_cipher[key] = value);
    

		//set the item
		//if(this._item is Map) {
		  //this._item.forEach((key, value) => items[key] = value);
		//}

 
		return Math.parseInt(set_cipher[i]);
	}
	
	/*
	* This method explicitly sets the character of a set of default values
	*
	* Use:
	* leet.item({
	*	 a: 1
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
	*	 leet.extend('root', {
	*		foo: 1,
	*	 	 bar: 2
	*	 });
	*
	*	void extend (String item, Object values);
	*/

/*
	void extend(name, values) {
		if (!object is Map && !object is Map)
			return -1;

		var key = this[name];

		values.forEach((value) => 
			if (name == 'cipher')
				 key[i].unshift(value);

			else if (name == 'root')
				key[i] = value;
		);
	}
*/

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

void main() {
  Leet leet = new Leet();

  leet.item({'a': '1', 'b': '2'});
  
  
var encode = leet.encode('a');

print(encode);
 
}
