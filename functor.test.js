// @ts-check

// https://stackoverflow.com/questions/52082800/how-to-describe-the-interface-of-a-simple-just-functor-in-typescript

const just = require('./functor.js')

test('equational reasoning (identity)', () => {
  expect(just(1)).functorToBe(just(1))
})

expect.extend({
  functorToBe (actual, expected) {
    const actualValue = getFunctorValue(actual)
    const expectedValue = getFunctorValue(expected)
    const pass = Object.is(actualValue, expectedValue)
    return {
      pass,
      message () {
        return `expected ${actualValue} of ${actual} to ${pass ? '' : 'not'} be ${expectedValue} of ${expected}`
      }
    }
  }
})

function getFunctorValue (func) {
	let a

	func.fmap(b => a = b)

	return a
}
