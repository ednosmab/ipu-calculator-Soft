export type ErrorCode = 'DIVISION_BY_ZERO' | 'NEGATIVE_INPUT'

export type CalcResult = 
{
    success: true, value: number
} | {
    success: false, code: ErrorCode
}