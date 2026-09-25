import { calculateCalibration } from "../../src/core/calibration.js";

describe('IPU Calibration Engine', ()=>{
    test('must correct machine value based on actual vs desired weight', ()=>{
        const desiredWeight = 107.7
        
        const machineSetting = 1.277
        
        const extractedWeight = 107.6

        const result = calculateCalibration(desiredWeight, machineSetting, extractedWeight)

        expect(result).toBeCloseTo(1.278)
    })
})