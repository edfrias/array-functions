'use strict'

const map = require('.')

describe('map', () => {
    it('should create a new array transformed by the passed callback', () => {
        const array = [1, 5, 10, 15]
        const result = map(array, function (x) { return x * 2 })

        const expected = [2, 10, 20, 30]

        expect(result).toEqual(expected)
    })

    it('should break if the array provided is undefined', () => {
        try {
            map()

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })

    it('should break on undefined callback', () => {
        const array = [1, 2, 3]
        let callback

        try {
            map(array, callback)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not a function')
        }
    })
})
