'use strict'

const lastIndexOf = require('.')

describe('lastIndexOf', () => {
    it('should returns the last index of an element inside the array.', () => {
        const array = ['Dodo', 'Tiger', 'Penguin', 'Dodo']
        const result = lastIndexOf(array, 'Dodo')
        const expected = 3

        expect(result).toEqual(expected)
    })

    it('should return -1 if the element is not inside the given array.', () => {
        const array = ['Dodo', 'Tiger', 'Penguin', 'Dodo']
        const result = lastIndexOf(array, 'Panda')
        const expected = -1

        expect(result).toEqual(expected)
    })

    it('will break if the array provided is undefined', () => {
        try {
            lastIndexOf()

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })

    it('will break if the element provided is undefined', () => {
        try {
            const array = ['Dodo', 'Tiger', 'Penguin', 'Dodo']
            let element

            lastIndexOf(array, element)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not a valid element')
        }
    })
})
