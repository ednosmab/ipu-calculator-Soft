export function validateField(inputValue: string, labelText: string): string {
    let message = ''
    const toValidate = Number(inputValue.replace(',', '.'))

    if(inputValue.trim() === ''){
        message = `Informe um número para ${labelText}`
        return message
    }

    if(!Number.isFinite(toValidate)){
        message = `Valor inválido para ${labelText}`
        return message
    }

    if(toValidate < 0){
        message = `${labelText} não pode ser negativo`
        return message
    }

    if(toValidate === 0){
        message = `${labelText} não pode ser zero`
        return message
    }
    
    return message
}