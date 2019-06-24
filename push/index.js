'use strict'

/**
 *
 * Function that adds a new element/s to the given array and returns the new length of it.
 *
 * @param {Array} array The array where to insert the new element.
 * @param {*} element The desired element to add.
 *a
 * @returns The array's new length.
*/

const push = (array, ...args) => {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array')
    if(array === undefined) throw TypeError(array + ' is not an array')

    if (args.length > 1) {
        for (let i = 0; i < args.length; i++) {
            array = array

            array[array.length] = args[i]
        }
    } else {
        return array.length
    }

    return array.length
}

module.exports = push


// TODO: To implement only with args and spread operator
// const push = (...args) => {
//     if (!(args[0] instanceof Array)) throw TypeError(args[0] + ' is not an array')

//     console.log('array before', args[0])

//     let arrayHelper = []

//     if (args.length > 1) {
//         for (let i = 0; i < args.length; i++) {
//             arrayHelper = args[0]

//             arrayHelper[arrayHelper.length] = args[i]
//         }
//     } else {
//         return arrayHelper.length
//     }

//     console.log('array after', args[0])
//     args[0] = arrayHelper
//     return arrayHelper.length
// }

// module.exports = push
