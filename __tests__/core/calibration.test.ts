import { calculateCalibration } from "../../src/core/calibration.js";

describe('IPU Calibration Engine', ()=>{
    const desiredWeight = 107.7
    
    const machineSetting = 1.277
    
    const extractedWeight = 107.6

    test('must correct machine value based on actual vs desired weight', ()=>{

        const result = calculateCalibration(desiredWeight, machineSetting, extractedWeight)
 
        if(!result.success){
            throw new Error ('Expected success')
        }
        expect(result.value).toBeCloseTo(1.278)
    })

    test('must return DIVISION_BY_ZERO when extracted weight is zero', ()=>{
        const result = calculateCalibration(desiredWeight, machineSetting, 0)
        
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('DIVISION_BY_ZERO')
    })

    test('must return NEGATIVE_INPUT when DesiredWeight is negative', ()=>{
        const result = calculateCalibration(-1, machineSetting, extractedWeight)
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('NEGATIVE_INPUT')
    })

    test('must return NEGATIVE_INPUT when MachineSetting is negative', ()=>{
        const result = calculateCalibration(desiredWeight, -1, extractedWeight)
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('NEGATIVE_INPUT')
    })
    
    test('must return NEGATIVE_INPUT when ExtractedWeight is negative', ()=>{
        const result = calculateCalibration(desiredWeight, machineSetting, -1)
        if(result.success){
            throw new Error ('Expected failure')
        }
        expect(result.code).toBe('NEGATIVE_INPUT')
    })
})