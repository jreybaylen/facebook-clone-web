import { CSSProperties, LazyExoticComponent } from 'react'

import { IconProps } from '@modules/components/icons/index.interfaces'

interface StylesProps {
    nav: CSSProperties
    header: CSSProperties
    leftNav: CSSProperties
    rightNav: CSSProperties
    centerNav: CSSProperties
    indicator: CSSProperties
    iconActive: CSSProperties
    centerNavUl: CSSProperties
    centerNavUlLi: CSSProperties
    iconNotActive: CSSProperties
    formSearchIcon: CSSProperties
    formSearchInput: CSSProperties
    centerNavUlLiLink: CSSProperties
}

interface NavigationProps {
    path: '/' | '/pages' | '/watch' | '/market-place' | '/groups'
    icon: LazyExoticComponent<(props: IconProps) => JSX.Element>
}

export type { StylesProps, NavigationProps }