class Foo
	constructor: (digit) ->
		@digit = digit;

	some : {
		a: 1
	}

	foo: () ->
		@some.a

foo = new Foo "Sammy the Python"

console.log(foo.foo())