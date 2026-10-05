import { createNumberField } from "./components/number-field.js";

const form = document.querySelector<HTMLFormElement>('#injection-form')!

const iso = createNumberField('iso', 'Isocianato')
const poliol = createNumberField('poliol', 'Poliol')
const fields = [iso, poliol]

const button = document.createElement('button')
button.type = 'submit'
button.textContent = 'Calcular'

form.append(...fields.map((field) => field.wrapper), button)

form.addEventListener('submit', (e) => {
    e.preventDefault()

    fields.forEach((field) => field.clearError())

    fields.forEach((field) => {
        if(field.input.value.trim() === ''){
            field.setError('Informe um valor')
        }
    })

})