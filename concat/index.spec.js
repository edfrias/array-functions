'use strict'

const concat = require('.')

describe('concat', () => {
    it('should merge two arrays into one', () => {
        const array1 = ['a', 'b', 'c']
        const array2 = ['a', 'b', 'c']

        const results = ['a', 'b', 'c', 'a', 'b', 'c']
        let concated = concat(array1, array2)

        expect(concated.toString()).toEqual(results.toString())
    })

    it('should merge three arrays into one even if an array argument is an array too', () => {
        const array1 = ['a', 'b', ['a', 'b', 'c']]
        const array2 = ['a', 'b', 'c']

        const results = ['a', 'b', 'a', 'b', 'c', 'a', 'b', 'c']
        let concated = concat(array1, array2)

        expect(concated.toString()).toEqual(results.toString())
    })

    it('should merge two arrays into one even if an array argument is a void array', () => {
        const array1 = ['a', 'b', []]
        const array2 = ['a', 'b', 'c']

        const results = ['a', 'b', , 'a', 'b', 'c']
        let concated = concat(array1, array2)

        expect(concated.toString()).toEqual(results.toString())
    })

    it('will breaks if one value provided is void', () => {
        const array1 = ['a', 'b', 'c']

        try {
            concat(array1)

            throw Error("You shouldn't get to this point")
        } catch (error) {
            expect(error.message).toBe('You must suply two or more arrays in order to concat them')
        }
    })

    it('will breaks if one array is undefined', () => {
        const array1 = ['a', 'b', 'c']
        let array3

        try {
            concat(array3, array1)

            throw Error("You shouldn't get to this point")
        } catch (error) {
            expect(error.message).toBe('Elements must be arrays')
        }
    })

    it('will breaks if elements passed are not arrays', () => {
        const array1 = 'hello'
        const array3 = 'bye'

        try {
            concat(array1, array3)

            throw Error("You shouldn't get to this point")
        } catch (error) {
            expect(error.message).toBe('Elements must be arrays')
        }
    })
})
