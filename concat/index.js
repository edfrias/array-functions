'use strict'

/**
 * Function that lets you concatenate an array inside another array
 *
 * @param {Array} args The array and the elements you want to concatenate
 *
 * @returns {Array} The sum of the two arrays.
 */

const concat = (...args) => {
    if (args.length <= 1) {
        throw Error('You must suply two or more arrays in order to concat them')
    }

    args.forEach(_element => {
        if (!(_element instanceof Array)) throw Error('Elements must be arrays')
    })

    let arrayResult = []

    for (let i = 0; i < args.length; i++) {
        let element = args[i]

        for (let j = 0; j < element.length; j++) {
            arrayResult[arrayResult.length] = element[j]
        }
    }

    return arrayResult
}

module.exports = concat
