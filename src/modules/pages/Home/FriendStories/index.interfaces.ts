import { CSSProperties } from 'react'

interface StoriesProps {
    id: string
    name: string
    images: Array<string>
}

interface StyleProps {
    ul: CSSProperties
    li: CSSProperties
    name: CSSProperties
    story: CSSProperties
    create: CSSProperties
    section: CSSProperties
    overlay: CSSProperties
    plusIcon: CSSProperties
    storyHover: CSSProperties
    createContainer: CSSProperties
    img(param: number): CSSProperties
}

export type { StoriesProps, StyleProps }