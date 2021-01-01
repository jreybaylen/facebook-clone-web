import { CSSProperties, LazyExoticComponent } from 'react'

import { IconProps } from '@modules/components/icons/index.interfaces'

interface StylesProps {
    nav: CSSProperties
    profile: CSSProperties
    profilePic: CSSProperties
    profileName: CSSProperties
    profileOption: CSSProperties
}

interface NavigationProps {
    name: string
    icon: LazyExoticComponent<(props: IconProps) => JSX.Element>
}

export type { StylesProps, NavigationProps }