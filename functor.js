function just(v) {
	'use strict'
	return {
		fmap: f => just(f(v))
	}
}

module.exports = just