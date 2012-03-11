"""
- Leet
- Leet (or "1337"), also known as eleet or leetspeak,
- is an alternative alphabet for the English language
- that is used primarily on the Internet
- 
- class Leet ([boolean digit = false])
-
- Use:
- leet = new Leet()
-
- #set the character of a set of default values
- leet.item({
-    'a': 1, #@
-    'b': 2  #ß
-  })
-
- #extend the existing set of roots:
- leet.extend('root', {
-    'foo': 1,
-    'bar': 2
- })
-
- #extends the existing set of ciphers
- #Note you'd to escape sequences like ',",\
- leet.extend('cipher', {
-    'a': '/-\\',
-    'b': '\\>>'
- })
-
- #encode
- encode = leet.encode 'foo is a big bar'
-
- #result
- console.log encode #1 !$ @ ß![, 2
-
- @author: Alexander Guinness
- @version: 1.1
- @params: {boolean} digit - optional boolean parameter
- to set an alternative digital view
- @license: MIT
- @date: 3/24/12 6:34 PM
"""

import re

__all__ = ["Leet"]

class Leet:
	def __init__(self, digit = 0):
		"""
		- __init__ ([, bool digit = False])
		"""
		self.digit = digit

	"""
	- A list of items associated with the characters of Leet
	"""
	cipher = {
		'a': ['/-\\', '@', '/*\\', '/=\\', '/\\', '^', 'aye', '∂', 'ci', 'λ',
			'Z', '(L', 'Д', 4],
		'b': ['|3', 'I3', '!3', 'ß', '(3', '/3', ')3', '|-]', ']3', 'j3', 6, 13, 8],
		'c': ['[', '(', '<', '¢', '{', '©', 'sea', 'see', 5],
		'd': [')', '|)', '[)', '(|', '∂', '])', '|}', '|]', 'I>', '|>', '?', 'T)', 'I7',
			'0', 'ð', 'cl', 2],
		'e': ['[-', '£', '&', '€', 'ə', 'ë', '|=-', 3],
		'f': ['|=', 'ƒ', '|#', ']=', '/=', '}', 'ph', '(=', 'ʃ', 'v', 7],
		'g': ['[,', '&', '(_+', 'C-', 'gee', 'jee', '(γ,', 'cj', '(?,',
			'{,', '<-', '(.', 6, 9],
		'h': ['|-|', '\\-/', '/-/', '#', ']-[', '[-]', ')-(', '(-)', '|~|',  '|-|', ']~[',
			'!-!', '1-1', ':-:', '}{', '}-{', 'I+I', '{-}', '\\=\\', '|=|', '|.|', '|=|',
			'|*|', 'aych', '?', 6],
		'i': ['!', '|', 'eye', '3y3', 'ai', '¡', 1],
		'j': ['_|', '_/', ',_|', '_]', ',_]', '._|', '._]', ']', '¿', '</', '_)', 'ʝ', '01'],
		'k': ['|<', '>|', '1<', 'X', '|c', '|(', '|X', '|{', 'ɮ', '|_', '£', '|', '|_',
			'lJ', '¬', 1, 7, '05'],
		'l': ['|_', '£', '|', '|_', 'lJ', '¬', 1, 7, '07'],
		'm': ['/\\/\\', '|\\/|', 'em', '|v|', 'IYI', 'IVI', '[V]', '^^', 'nn',
			'//\\\\//\\\\', '(V)', '(v)', '{V}', '(\\/)', '|\\|\\', '/|\\', '/|/|',
			'<\\/>', '.\\\\', '/^^\\', '/V\\', '|^^|', 'AA', 44, '02'],
		'n': ['|\\|', '^/', '/\\/', '//\\\\//', 'И', '[\]', '<\\>', '{\\}', '/V', '//', '₪',
			'ท', '[]\\[]', ']\\[', '~', '03'],
		'o': ['()', 'oh', 'p', '<>', '[]', '¤', 'Ω', 'Ø', 0, '08'],
		'p': ['|*', '|o', '|º', '|>', '|"', '|^', '?', '9', '[]D', '|7', 'q', 'þ', '¶',
			'℗', '|D', 66],
		'q': ['0_', '0,', '(,)', '<|', 'cue', '¶', 9, 2, 99],
		'r': ['|2', '|9', '|?', '/2', 'I2', '|^', '|~', '|-', 'lz', '®', 'I2', '[z',
			'|`', 'l2', 'Я', '.-', 'ʁ', '®', 2, 44],
		's': ['$', 'z', '§', 'ehs', 'es', 5, 2, 55],
		't': ['+', '-|-', '\'][\'', '«|»', '~|~', '†', 7, 1, 77],
		'u': ['|_|', '(_)', 'Y3W', 'M', 'µ', '[_]', '\_/', '\_\\', '/_/', 'L|', 'v', 'µ',
			'บ', 88],
		'v': ['\\/', '√', '\\\\//', '007'],
		'w': ['\\/\\/', 'vv', '\'//', '\\\\\'', '\\^/', '(n)', '\\X/', '\\|/', '\\_|_/',
			'\\\\//\\\\//', '\\_:_/', ']I[', 'UU', 'Ш', 'dubya', '\\V/', '\\X/', 'uu',
			'2u', 'ɰ', 'พ', '￦', 'JL', '008'],
		'x': ['><', '%', 'Ж', '}{', 'ecks', '×', '*', ')(', '][', 'ex', '001'],
		'y': ['`/', 'j', '`(', '-/', '\'/', '\\//', 'Ψ', 'φ', 'λ', 'Ч', '¥', '002'],
		'z': ['≥', '-/_', '~/_', '-\\_', '-|_', '>_', 's', '%', 'ʒ', '7_', 2, '003']
	}

	"""
	- A list of items associated with the digits of Leet
	"""
	root = {
		'one':   1, 'two':   2, 'to':    2,
		'too':   2, 'tree':  3, 'three': 3,
		'four':  4, 'for':   4, 'five':  5,
		'six':   6, 'seven': 7, 'eight': 8,
		'ait':   8, 'ate':   8, 'eit':   8,
		'nine':  9, 'ks':   'x', 'cs':  'x'
	}

	def items(self, item):
		"""
		- Creates {dict} with default values
		- ​​and extends the basic symbols of Leet
		-
		- dict items (string item)
		"""

		items = {}

		#fill items with default values
		for i in self.cipher:
			items[i] = 0

		#set the item
		if hasattr(self, '_item'):
			for i in self._item or {}:
				items[i] = self._item[i]

		return items[item]

	def is_dict(self, data):
		"""
		- boolean is_dict (dict data);
		"""
		return hasattr(data, 'items')

	def item(self, data):
		"""
		- This method explicitly sets the character of a set of default values
		-
		- Use:
		-	leet.item({
		-		a: 1
		-	})
		-
		- void item (dict data)
		"""

		if self.is_dict(data):
			self._item = data

	def extend(self, name, values):
		"""
		- Merges and merges the contents of two dicts together into the first dicts.
		-   - self.cipher
		-   - self.root
		-
		- Use:
		-   leet.append('root', {
		-       foo: 1,
		-       bar: 2
		-   });
		-
		- void items (string name, dict values)
		"""
		if not self.is_dict(name) and not self.is_dict(values):
			return -1

		for i in values:
			if name == 'cipher':
				self.cipher[i].insert(0, values[i])

			elif (name == 'root'):
				self.root[i] = values[i]

	def encode(self, string):
		"""
		- Encodes the Latin characters in the Leet sequence
		- string encode (string string);
		"""

		#First, the roots should be replaced with Leet digits
		for i in self.root:
			string = string.replace(i, str(self.root[i]))

		#Replace the remaining characters
		cipher = []

		for i in re.findall('.', string):
			item = lambda item: item[self.digit and len(item) - 1 or self.items(i)]
			cipher.append(i in self.cipher and item(self.cipher[i]) or i)

		return ''.join(map(str, cipher))

	def decode():
		"""
		- There is no reason to implement this method because:
		-   - very high computational complexity
		-   - very fuzzy search
		-   - low accuracy of the result
		- Also see: https://www.google.com/webhp?hl=xx-hacker
		- But if you still want to implement the one let me know!
		"""
		pass
