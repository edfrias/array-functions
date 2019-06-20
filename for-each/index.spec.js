'use strict'

const forEach = require('.')

describe('forEach', () => {
    it('should itearate an array without altering it', () => {
        let array = [1, 2, 3]

        let result = []

        forEach(array, (v, i) => result[i] = v)
        // 0 1
        // 1 2
        // 2 3

        expect(result).toEqual(array)

        const expected = { 0: 1, 1: 2, 2: 3 }
        expect(array).not.toEqual(expected)
    })

    it('should do nothing if array has not content', () => {
        const array = []

        let result = []

        forEach(array, (v, i) => result[i] = v)

        expect(result).toHaveLength(0)
    })

    it('should break on undefined array', () => {
        try {
            forEach()

            throw Error("You shouldn't get to this point")
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })

    it('should break on undefined callback', () => {
        const array = [1, 2, 3]

        try {
            forEach(array)

            throw Error("You shouldn't get to this point")
        } catch (error) {
            expect(error.message).toBe('undefined is not a function')
        }
    })
})