'use strict'

const push = require('.')

describe.only('push', () => {
    it('should add the given element/s to the array and return the longitude of the resulting array', () => {
        const array = [1, 2, 3, 4, 5]
        const result = push(array, 6, 5, 6)
        const expected = 8

        expect(result).toEqual(expected)
    })

    it('should return the same length of the original array if none argument is passed', () => {
        const array = [1, 2, 3, 4, 5]
        const result = push(array)
        const expected = 5

        expect(result).toEqual(expected)
    })

    it('will break if the array provided is undefined', () => {
        try {
            push()

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })
})
