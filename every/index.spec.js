'use strict'

const every = require('.')

describe('every', () => {
    it('should return true on all items matching condition', () => {
        const array = [1, 2, 3]

        const result = every(array, v => v > 0)

        expect(result).toBeTruthy()
    })


    it('should return false on any of the items not matching the condition', () => {
        const array = [1, 2, 3]

        const result = every(array, v => v < 0)

        expect(result).toBeFalsy()
    })

    it('should break on undefined array', () => {
        try {
            every()

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })

    it('should break on undefined callback', () => {
        const array = [1, 2, 3]

        try {
            every(array)

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not a function')
        }
    })
})
