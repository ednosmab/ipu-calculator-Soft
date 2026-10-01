export function calculateCalibration(
    desiredWeight: number, 
    machineSetting: number, 
    extractedWeight: number): number {
        
    return (desiredWeight * machineSetting) / extractedWeight
}