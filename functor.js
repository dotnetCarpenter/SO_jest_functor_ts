// @ts-check
'use strict'

/**
 * @param {*} v Any value
 */
function just(v) {
	return {
		fmap:
			/** @param {(arg0: any) => any} f */
			f => just(f(v))
	}
}

module.exports = just