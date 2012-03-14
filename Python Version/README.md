# Leet

Leet (or "1337"), also known as eleet or leetspeak is an alternative alphabet for the English language that is used primarily on the Internet.

##License
	PSF, MIT

##Synopsis:
```python
class Leet ([Boolean digit = false])
```

## Use
*For example you could use the following code:*

```python

from leet import *

leet = new Leet()

#set the character of a set of default values
leet.item({
   'a': 1, #@
   'b': 2  #ß
})

#extend the existing set of roots:
leet.extend('root', {
   'foo': 1,
   'bar': 2
})

#extends the existing set of ciphers
#Note you'd to escape sequences like ',",\
leet.extend('ciphers', {
   'a': '/-\\',
   'b': '\\>>',
})

#encode
encode = leet.encode('foo is a big bar')

#result
print(encode) #1 !$ @ ß![, 2
```

*An alternative digital view*:
Set positive boolean value in constructor to have an alternative digital view:

```python
leet = new Leet(true)
print(leet.encode('leet')) #073377
```

* License
    The Leet module is licensed under the MIT (MIT_LICENSE.txt) license.

* Copyright (c) 2011 [Alexander Guinness] (https://github.com/monolithed)
