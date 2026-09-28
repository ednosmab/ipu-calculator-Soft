import { calculateInjection } from '../../src/core/injection.js'

describe('IPU Injection Engine', ()=>{
    const iso = 0.0662

    const poliol = 0.127
    
    test('must calculate the amount of IPU based on the injection time', ()=>{
        const result = calculateInjection(iso, poliol)
        
        if(!result.success){
            throw new Error ("Expected sucess")
        }
        expect(result.value).toBeCloseTo(1.38)
    })

    test('must return NEGATIVE_INPUT when Iso is negative', ()=>{
        const result = calculateInjection(-1, poliol)

        if(result.success){
            throw new Error("Expected failure")
        }

        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must return NEGATIVE_INPUT when Poliol is negative', ()=>{
        const result = calculateInjection(iso, -1)

        if(result.success){
            throw new Error ("Expected Failure")
        }

        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must calculate zero when both Iso and Poliol are zero', ()=>{
        const result = calculateInjection(0, 0)

        if(!result.success){
            throw new Error ("Expected success")
        }

        expect(result.value).toBeCloseTo(0)
    })
})