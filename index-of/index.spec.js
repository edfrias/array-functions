'use strict'

const indexOf = require('.')

describe('indexOf', () => {
    it('returns the first index of the desired element', () => {
        const array = [2, 9, 9, 12, 33, 19]
        const item = 12
        const expected = 3

        const results = indexOf(array, item)
        expect(results).toEqual(expected)
    })

    it('returns -1 if the element to find in the array doesn\'t exists', () => {
        const array = [2, 9, 9, 12, 33, 19]
        const item = 16
        const expected = -1

        const results = indexOf(array, item)
        expect(results).toEqual(expected)
    })

    it('will break if the array passed is undefined', () => {
        try {
            const array = undefined
            const item = 16

            indexOf(array, item)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })

    it('will break if the element passed is undefined', () => {
        try {
            const array = [2, 9, 9, 12, 33, 19]
            const item = undefined

            indexOf(array, item)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not a valid element')
        }
    })

    it('will break if the element passed is not a valid element', () => {
        try {
            const array = [2, 9, 9, 12, 33, 19]
            const item = 'hola'

            indexOf(array, item)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('hola is not a valid element')
        }
    })
})