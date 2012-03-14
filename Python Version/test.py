# -*- coding: utf-8 -*-

import unittest, logging
from leet import *

logging.basicConfig(level = logging.DEBUG)

leet = Leet()

class test_case(unittest.TestCase):

	#set the character of a set of default values
	def test_item(self):
		leet.item({
			'a': 1, #@
			'b': 2  #?
		})

		#result
		print('set item:\n', leet.encode('ab'), '\n')

	#extend the existing set of roots:
	def test_extend_root(self):
		leet.extend('root', {
			'foo': 1,
			'bar': 2
		})
		
		#result
		print('extend root:\n', leet.encode('foo bar'), '\n')

	#extends the existing set of ciphers
	#Note you'd to escape sequences like ',",\
	def test_extend_cipher(self):

		leet.extend('cipher', {
			'c': '/-\\',
			'd': '\\>>',
		})
		
		#result
		print('extend cipher\n', leet.encode('c d'), '\n')
		
	def test_encode(self):
		#result
		print('test_encode\n', leet.encode('foo is a big bar'), '\n')

if __name__ == '__main__':
	unittest.main()