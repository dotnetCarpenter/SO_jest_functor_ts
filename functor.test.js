// @ts-check

const just = require('./functor.js')

test('equational reasoning (identity)', () => {
  expect(just(1)).functorToBe(just(1))
})

expect.extend({
  /** Compare the two values inside two functors with Object.is
   * @method
   * @augments jest.Matchers
   * @param {*} actual The functor you want to test.
   * @param {*} expected The functor you expect.
   */
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
