import { CalcResult } from './types.js'
import { calculateInjection } from '../core/injection.js'

export function inject(iso: number, poliol: number): CalcResult{
    if(iso < 0 || poliol < 0){
        return {success: false, code: 'NEGATIVE_INPUT'}
    }
    
    if(iso === 0 || poliol === 0) {
        return {success: false, code: 'ZERO_INPUT'}
    }
    return {success: true, value: calculateInjection(iso, poliol)}
}