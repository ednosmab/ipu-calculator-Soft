import { CalcResult } from "./types.js"

export function calculateCalibration(
    desiredWeight: number, 
    machineSetting: number, 
    extractedWeight: number): CalcResult {
        
    if(desiredWeight < 0 || machineSetting < 0 || extractedWeight < 0 ){
        return {success: false, code: 'NEGATIVE_INPUT'}
    }

    if(extractedWeight === 0){
        return {success: false, code: 'ZERO_INPUT'} 
    } 

    return {success: true, value: (desiredWeight * machineSetting) / extractedWeight} 
}