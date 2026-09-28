import { CalcResult } from './types.js'

const FLOW_RATE = 0.140

export function calculateInjection(iso: number, poliol: number): CalcResult{
    if(iso < 0 || poliol < 0){
        return {success: false, code: 'NEGATIVE_INPUT'}
    }
    return {success: true, value: (iso + poliol) / FLOW_RATE}
}