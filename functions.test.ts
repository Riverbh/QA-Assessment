const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('should return an array', () =>{
        expect(shuffleArray('utils')).toBeInstanceOf(Array)
    }),

    test('check that all the same items are in the array', () => {
        expect(shuffleArray('utils')).toEqual('array')
    })

})