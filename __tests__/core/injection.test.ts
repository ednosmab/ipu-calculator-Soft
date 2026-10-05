import { calculateInjection } from "../../src/core/injection.js";

describe('calculateInjection', ()=>{
    test('must return exactly 1 when total mass equals FLOW_RATE', ()=>{
        expect(calculateInjection(0.07, 0.07)).toBe(1)
    })
})