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

    test('must return INVALID_INPUT when Poliol is NaN', ()=>{
        const result = inject(iso, NaN)

        if(result.success){
            throw new Error ('Expected failure')
        }

        expect(result.code).toBe('INVALID_INPUT')
    })

    test('must return INVALID_INPUT when Iso is NaN', ()=>{
        const result = inject(NaN, poliol)

        if(result.success){
            throw new Error ('Expected failure')
        }
        
        expect(result.code).toBe('INVALID_INPUT')
    })

    test('must return INVALID_INPUT when Poliol is Infinity', ()=>{
        const result = inject(iso, Infinity)

        if(result.success){
            throw new Error ('Expected failure')
        }

        expect(result.code).toBe('INVALID_INPUT')
    })

    test('must return INVALID_INPUT when Iso is Infinity', ()=>{
        const result = inject(Infinity, poliol)

        if(result.success){
            throw new Error ('Expected failure')
        }
        
        expect(result.code).toBe('INVALID_INPUT')
    })

    test('must return INVALID_INPUT when Iso is NaN and Iso is zero', ()=>{
        const result = inject(NaN, 0)

        if(result.success){
            throw new Error ('Expected failure')
        }
        
        expect(result.code).toBe('INVALID_INPUT')
    })

    test('must return INVALID_INPUT when Iso is Infinity and Poliol is zero', ()=>{
        const result = inject(Infinity, 0)

        if(result.success){
            throw new Error ('Expected failure')
        }
        
        expect(result.code).toBe('INVALID_INPUT')
    })
})