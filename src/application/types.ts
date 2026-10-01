export type ErrorCode = 'ZERO_INPUT' | 'NEGATIVE_INPUT' | 'INVALID_INPUT'

export type CalcResult = 
{
    success: true, value: number
} | {
    success: false, code: ErrorCode
}