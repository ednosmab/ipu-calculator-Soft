const FLOW_RATE = 0.140

export function calculateInjection(iso: number, poliol: number): number{

    return (iso + poliol) / FLOW_RATE
}