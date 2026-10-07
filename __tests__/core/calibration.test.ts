import { calculateCalibration } from "../../src/core/calibration.js";

describe('calculateCalibration', ()=>{
    test('must return exactly 4 when desired weight is 100, setting is 2 and extracted is 50', ()=>{
        expect(calculateCalibration(100, 2, 50)).toBe(4)
    })

    test('must return approximately 1.278 for the reference values', ()=>{
        expect(calculateCalibration(107.7, 1.277, 107.6)).toBeCloseTo(1.278, 3)
    })

    test('must lower the machine setting when extracted weight is above desired', ()=>{
        expect(calculateCalibration(107.7, 1.277, 200)).toBeLessThan(1.277)
    })

    test('must raise the machine setting when extracted weight is below desired', ()=>{
        expect(calculateCalibration(107.7, 1.277, 50)).toBeGreaterThan(1.277)
    })
})