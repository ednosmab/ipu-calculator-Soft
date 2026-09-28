import { calculateInjection } from '../../src/core/injection.js'

describe('IPU Injection Engine', ()=>{
    
    test('must calculate the amount of IPU based on the injection time', ()=>{
        const iso = 0.0662

        const poliol = 0.127

        const result = calculateInjection(iso, poliol)
        
        expect(result.success).toBe(true)
        if(result.success){
            expect(result.value).toBeCloseTo(1.38)
        }
    })
})