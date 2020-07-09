const just = require('./functor.js')

test('equational reasoning (identity)', () => {

	expect(
		functorToBe( just(1) )
	).toBe(
		functorToBe( just(1) )
	)

});




function functorToBe (func) {
	let a

	func.fmap(a => b = a)

	return a
}
