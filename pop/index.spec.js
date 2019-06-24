'use strict'

const pop = require('.')

describe('pop', () => {
    it('should erase the last value of a given array and then give the resulting array', () => {
        const array = [1, 2, 3, 4, 5]
        const result = pop(array)
        const expected = [1, 2, 3, 4]

        expect(result).toEqual(expected)
    })

    it('should return undefined on empty array', () => {
        let array = []
        const value = pop(array)

        expect(array).toHaveLength(0)
        expect(value).toBeUndefined()
    })

    it('will break if the array provided is undefined', () => {
        try {
            pop()

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })
})
