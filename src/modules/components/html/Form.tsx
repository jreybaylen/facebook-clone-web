import { FormEvent, FormHTMLAttributes } from 'react'

interface FormProps {
    onSubmit(param: FormEvent<HTMLFormElement>): void
    children: JSX.Element | Array<JSX.Element> | HTMLFormElement
}

function Form (props: FormProps & FormHTMLAttributes<HTMLFormElement>): JSX.Element {
    const { children, onSubmit, ...rest } = props
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        onSubmit(event)
    }
    const formElement = (
        <form onSubmit={ handleSubmit } { ...rest }>
            { children }
        </form>
    )

    return formElement
}

export default Form