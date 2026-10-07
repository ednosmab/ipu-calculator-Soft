import { validateInputs } from '../../src/application/validate-inputs.js'

describe('validateInputs', ()=>{
    test('must return null when all values are valid', ()=>{
        const result = validateInputs([0.0662, 0.127])

        expect(result).toBe(null)
    })

    test('must return null when a valid triple is informed', ()=>{
        const result = validateInputs([107.7, 1.277, 106.6])

        expect(result).toBe(null)
    })

    test('must return INVALID_INPUT when one value is zero and another is NaN', ()=>{
        const result = validateInputs([0, NaN])

        expect(result).toBe('INVALID_INPUT')
    })

    test('must return INVALID_INPUT when one value is Infinity and another is zero', ()=>{
        const result = validateInputs([Infinity, 0])

        expect(result).toBe('INVALID_INPUT')
    })

    test('must return NEGATIVE_INPUT when one value is zero and another is negative', ()=>{
        const result = validateInputs([0, -1])

        expect(result).toBe('NEGATIVE_INPUT')
    })

    test('must return ZERO_INPUT when one value is zero and another is valid', ()=>{
        const result = validateInputs([0, 106.7])

        expect(result).toBe('ZERO_INPUT')
    })

    test('must return null when no values are informed', ()=>{
        const result = validateInputs([])

        expect(result).toBe(null)
    })
})