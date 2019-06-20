'use strict';

const isArray = require('.')
// import isArray from './index'

describe('isArray', () => {
    it('should return true if the given element is an array', () => {
        var array = [1, 2, 3]
        var result = isArray(array)

        expect(result).toBeTruthy()
    })

    it('should return false if the given element is not an array', () => {
        var array = { foo: 123 }
        var result = isArray(array)

        expect(result).toBeFalsy()
    })

    it('should break on invalid element', () => {
        try {
            isArray()

            throw Error('should not reach this point')
        } catch (error) {
            expect(error.message).toBe('undefined is not an array')
        }
    })
})
