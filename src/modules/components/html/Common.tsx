import { CSSProperties, createElement } from 'react'

interface CommonProps {
    tag: string
    className?: string
    style?: CSSProperties
    children: string | JSX.Element | Array<JSX.Element>
}

function HTML <T>(props: T & CommonProps): JSX.Element {
    const { children, tag, ...rest } = props
    const htmlElement = createElement(tag, rest, children)

    return htmlElement
}

export default HTML