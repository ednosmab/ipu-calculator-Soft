export function createNumberField(id: string, labelText: string) {
    const wrapper = document.createElement('div')

    const label = document.createElement('label')
    label.htmlFor = id
    label.textContent = labelText

    const input = document.createElement('input')
    input.id = id
    input.type = 'text'
    input.inputMode = 'decimal'

    const error = document.createElement('span')
    error.setAttribute('aria-live', 'polite')

    error.className = 'field-error'

    wrapper.append(label, input, error)

    function setError(message: string){
        error.textContent = message
        input.setAttribute('aria-invalid', 'true')
    }

    function clearError(){
        error.textContent = ''
        input.removeAttribute('aria-invalid')
    }

    return {wrapper, input, setError, clearError}

}