import { CalcResult } from "./types.js"
import { calculateCalibration } from "../core/calibration.js"
import { validateInputs } from "./validate-inputs.js"

export function calibrate(
    desiredWeight: number, 
    machineSetting: number, 
    extractedWeight: number): CalcResult {

    const error = validateInputs([desiredWeight, machineSetting, extractedWeight])

    if(error){
        return {success: false, code: error}
    }

    return {success: true, value: calculateCalibration(desiredWeight, machineSetting, extractedWeight)}
}