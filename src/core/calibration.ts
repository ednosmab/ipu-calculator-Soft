import { CalcResult } from "./types.js"

export function calculateCalibration(
    desiredWeight: number, 
    machineSetting: number, 
    extractedWeight: number): CalcResult {

    if(extractedWeight === 0){
        return {success: false, code: 'DIVISION_BY_ZERO'} 
    }

    return {success: true, value: (desiredWeight * machineSetting) / extractedWeight} 
}