'use strict'

const filter = require('.')

describe('filter', () => {
    it('returns a new array with the content filtered', () => {
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

        const result = filter(words, word => word.length > 6)
        const desired = ['exuberant', 'destruction', 'present']

        expect(result.toString()).toEqual(desired.toString())
    })

    it('will break if the entered element is not a valid array', () => {
        const element = 'hola'
        const callback = _element => _element >= 10

        try {
            filter(element, callback)

            throw Error("You shouldn't get to this point")
        } catch (error) {
            expect(error.message).toBe(element + ' is not an array')
        }
    })

    it('will break if the callback entered is not a function', () => {
        const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
        const callback = 'hola'

        try {
            filter(words, callback)

            throw Error("You shouldn't get to this point")
        } catch (error) {
            expect(error.message).toBe(callback + ' is not a function')
        }

    })
})