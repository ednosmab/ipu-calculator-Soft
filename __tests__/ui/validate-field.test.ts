import { validateField } from "../../src/ui/validations/validate-field.js";
describe('Field Validation', () =>{
    test('must return message when input is empty', () => {
        expect(validateField('', 'Poliol')).toBe('Informe um número para Poliol')
    })

    test('must return message when input is space', () => {
        expect(validateField(' ', 'Poliol')).toBe('Informe um número para Poliol')
    })

    test('must return message when input are spaces', () => {
        expect(validateField('  ', 'Isocianato')).toBe('Informe um número para Isocianato')
    })

    test('must return message when input is correct value', () => {
        expect(validateField('12', '')).toBe('')
    })
    
    test('must return message when input is space with value', () => {
        expect(validateField(' 7', '')).toBe('')
    })
    
    test('must return message when input is space enter numbers', () => {
        expect(validateField('1 2', 'Isocianato')).toBe('Valor inválido para Isocianato')
    })
    
    test('must return message when input is letters', () => {
        expect(validateField('abc', 'Poliol')).toBe('Valor inválido para Poliol')
    })

    test('must return message when input is minus sign', () => {
        expect(validateField('-', 'Poliol')).toBe('Valor inválido para Poliol')
    })

    test('must return message when input is infinity', () => {
        expect(validateField('Infinity', 'Poliol')).toBe('Valor inválido para Poliol')
    })

    test('must return message when input is negative infinity', () => {
        expect(validateField('-Infinity', 'Poliol')).toBe('Valor inválido para Poliol')
    })

    test('must return message when input is negative', () => {
        expect(validateField('-1', 'Poliol')).toBe('Poliol não pode ser negativo')
    })

    test('must return message when input is zero', () => {
        expect(validateField('0', 'Poliol')).toBe('Poliol não pode ser zero')
    })
    
    test('must return message when input is negative zero', () => {
        expect(validateField('-0', 'Poliol')).toBe('Poliol não pode ser zero')
    })

    test('must return message when input is decimal separators incorrect', () => {
        expect(validateField('12,5', '')).toBe('')
    })

    test('must return message when input has multiple decimal separators', () => {
        expect(validateField('1.2.5', 'Poliol')).toBe('Valor inválido para Poliol')
    })

})