'use strict'

const join = require('.')

describe('join', () => {
    it('should create an output with all the items within the array', () => {
        const array = ['Fire', 'Wind', 'Rain']

        const result = join(array)
        const expected = "Fire,Wind,Rain"

        expect(result).toEqual(expected)
    })

    it('should create an output with the items separated by the provided element', () => {
        const array = ['Fire', 'Wind', 'Rain']

        const result = join(array, '-')
        const expected = "Fire-Wind-Rain"

        expect(result).toEqual(expected)
    })

    it('will break if the array provided is undefined', () => {
        try {
            join()

            throw Error('should not arrive here')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })
})
