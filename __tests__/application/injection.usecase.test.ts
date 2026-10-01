import { inject } from '../../src/application/injection.usecase.js'

describe('IPU Injection Engine', ()=>{
    const iso = 0.0662

    const poliol = 0.127
    
    test('must calculate the amount of IPU based on the injection time', ()=>{
        const result = inject(iso, poliol)
        
        if(!result.success){
            throw new Error ("Expected sucess")
        }
        expect(result.value).toBeCloseTo(1.38)
    })

    test('must return NEGATIVE_INPUT when Iso is negative', ()=>{
        const result = inject(-1, poliol)

        if(result.success){
            throw new Error("Expected failure")
        }

        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must return NEGATIVE_INPUT when Poliol is negative', ()=>{
        const result = inject(iso, -1)

        if(result.success){
            throw new Error ("Expected Failure")
        }

        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must return ZERO_INPUT when both Iso and Poliol are zero', ()=>{
        const result = inject(0, 0)

        if(result.success){
            throw new Error ("Expected failure")
        }

        expect(result.code).toBe('ZERO_INPUT')
    })

    test('must return ZERO_INPUT when Iso is zero', ()=>{
        const result = inject(0, poliol)

        if(result.success){
            throw new Error ("Expected failure")
        }

        expect(result.code).toBe('ZERO_INPUT')
    })

    test('must return ZERO_INPUT when Poliol is zero', ()=>{
        const result = inject(iso, 0)

        if(result.success){
            throw new Error ("Expected failure")
        }

        expect(result.code).toBe('ZERO_INPUT')
    })
})
