import { ErrorCode } from "./types.js"

export function validateInputs(values: readonly number[]): ErrorCode | null{
    if(values.some(value => !Number.isFinite(value))){
        return 'INVALID_INPUT'
    }

    if(values.some(value => value < 0)){
        return 'NEGATIVE_INPUT'
    }

    if(values.some(value => value === 0)){
        return 'ZERO_INPUT'
    }

    return null
}