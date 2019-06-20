'use strict'

/**
 * Iterates an array and evaluates an expression on each of its values.
 *
 * @param {Array} array The array to iterate.
 * @param {Function} callback The expression to evaluate.
 */

const forEach = (array, callback) => {
	if (!(array instanceof Array)) throw TypeError(array + ' is not an array')
	if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

	if (array.length > 0) {
		function forEach(index) {
			callback(array[index], index)

			if (++index < array.length) {
				forEach(index)
			}
		}
		forEach(0)
	}
}

module.exports = forEach
