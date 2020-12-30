import { CSSProperties } from 'react'

interface DivProps {
    className?: string
    style?: CSSProperties
    children: string | JSX.Element | Array<JSX.Element>
}

function Div <T>(props: T & DivProps) {
    const { children, ...rest } = props
    const divElement = (
        <div { ...rest }>{ children }</div>
    )

    return divElement
}

export default Div