import { CalcResult } from './types.js'
import { calculateInjection } from '../core/injection.js'
import { validateInputs } from './validate-inputs.js'

export function inject(iso: number, poliol: number): CalcResult{
    const error = validateInputs([iso, poliol])

    if(error){
        return {success: false, code: error}
    }

    return {success: true, value: calculateInjection(iso, poliol)}
}