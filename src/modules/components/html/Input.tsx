import { InputHTMLAttributes } from 'react'

function Input (props: InputHTMLAttributes<HTMLInputElement>): JSX.Element {
    return <input { ...props } />
}

export default Input