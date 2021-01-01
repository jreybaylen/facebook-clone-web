import { CSSProperties, LazyExoticComponent } from 'react'

import { IconProps } from '@modules/components/icons/index.interfaces'

interface StylesProps {
    nav: CSSProperties
    header: CSSProperties
}

interface NavigationProps {
    path: '/' | '/pages' | '/watch' | '/market-place' | '/groups'
    icon: LazyExoticComponent<(props: IconProps) => JSX.Element>
}

export type { StylesProps, NavigationProps }