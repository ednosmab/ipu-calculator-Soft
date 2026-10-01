import { CalcResult } from "./types.js"
import { calculateCalibration } from "../core/calibration.js"

export function calibrate(
    desiredWeight: number, 
    machineSetting: number, 
    extractedWeight: number): CalcResult {
        
    if(!Number.isFinite(desiredWeight) || !Number.isFinite(machineSetting) || !Number.isFinite(extractedWeight)){
        return {success: false, code: 'INVALID_INPUT'}
    }

    if(desiredWeight < 0 || machineSetting < 0 || extractedWeight < 0 ){
        return {success: false, code: 'NEGATIVE_INPUT'}
    }

    if(extractedWeight === 0){
        return {success: false, code: 'ZERO_INPUT'} 
    } 

    return {success: true, value: calculateCalibration(desiredWeight, machineSetting, extractedWeight)}
}