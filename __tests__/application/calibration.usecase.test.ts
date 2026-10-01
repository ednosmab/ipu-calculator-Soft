import { calibrate } from "../../src/application/calibration.usecase.js";

describe('IPU Calibration Engine', ()=>{
    const desiredWeight = 107.7
    
    const machineSetting = 1.277
    
    const extractedWeight = 107.6

    test('must correct machine value based on actual vs desired weight', ()=>{

        const result = calibrate(desiredWeight, machineSetting, extractedWeight)
 
        if(!result.success){
            throw new Error ('Expected success')
        }
        expect(result.value).toBeCloseTo(1.278, 3)
    })

    test('must lower machine value when extracted weight is above desired', ()=>{
        const result = calibrate(desiredWeight, machineSetting, 108.0)

        if(!result.success){
            throw new Error ('Expected success')
        }

        expect(result.value).toBeLessThan(machineSetting)
    })

    test('must return NEGATIVE_INPUT when desired weight is negative and extracted weight is zero', ()=>{
        const result = calibrate(-1, machineSetting, 0)

        if(result.success){
            throw new Error ("Expected failure")
        }
        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must return NEGATIVE_INPUT when desired weight is negative', ()=>{
        const result = calibrate(-1, machineSetting, extractedWeight)
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must return NEGATIVE_INPUT when machine setting is negative', ()=>{
        const result = calibrate(desiredWeight, -1, extractedWeight)
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('NEGATIVE_INPUT')
    })
    
    test('must return NEGATIVE_INPUT when extracted weight is negative', ()=>{
        const result = calibrate(desiredWeight, machineSetting, -1)
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must return ZERO_INPUT when extracted weight is zero', ()=>{
        const result = calibrate(desiredWeight, machineSetting, 0)
        
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('ZERO_INPUT')
    })
})
