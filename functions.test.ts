const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it('should return an array', () =>{
        const returnValue = shuffleArray('utils')
        expect(returnValue).toBeInstanceOf(Array)
    })
})