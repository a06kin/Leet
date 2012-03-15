#source('leet.dart');

void main() {
	Leet leet = new Leet();

	//set the character of a set of default values
	leet.item({
		'a': '1', //@
		'b': '2'  //Гџ
	 });

	//extend the existing set of roots:
	leet.extend('root', {
		'foo': '1',
		'bar': '2'
	});

	//extends the existing set of ciphers
	//Note you'd to escape sequences like ',",\
	leet.extend('cipher', {
		'a': '/-\\',
		'b': '\\>>'
	});

	//encode
	var encode = leet.encode('foo is a big bar');

	//result
	print(encode); //1 !$ @ Гџ![, 2
}
