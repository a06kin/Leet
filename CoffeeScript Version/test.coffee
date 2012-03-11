leet = require './leet.coffee'

leet = new Leet()

leet.append(leet.root, {
   foo: 888,
   bar: 2
})

console.log(leet.encode('one some foo'))