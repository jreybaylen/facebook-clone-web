import { CSSProperties, createElement } from 'react'

interface CommonProps {
    tag: string
    className?: string
    style?: CSSProperties
    children: string | JSX.Element | Array<JSX.Element>
}

function HTML <T>(props: T & CommonProps) {
    const { children, tag, ...rest } = props

    return createElement(tag, rest, children)
}

export default HTML