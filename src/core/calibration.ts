import { CalcResult } from "./types.js"

export function calculateCalibration(
    desiredWeight: number, 
    machineSetting: number, 
    extractedWeight: number): CalcResult {

    if(extractedWeight === 0){
        return {success: false, code: 'DIVISION_BY_ZERO'} 
    }

    if(desiredWeight < 0 || machineSetting < 0 || extractedWeight < 0 ){
        return {success: false, code: 'NEGATIVE_INPUT'}
    }

    return {success: true, value: (desiredWeight * machineSetting) / extractedWeight} 
}