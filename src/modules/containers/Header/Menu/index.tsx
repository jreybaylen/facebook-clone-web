import { lazy } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { styles } from './index.styles'
import { NavigationProps } from '@modules/containers/Header/index.interfaces'

const HTML = lazy(() => import('@modules/components/html/Common'))

const navigations: Array<NavigationProps> = [
    { path: '/', icon: lazy(() => import('@modules/components/icons/Home')) },
    { path: '/pages', icon: lazy(() => import('@modules/components/icons/Pages')) },
    { path: '/watch', icon: lazy(() => import('@modules/components/icons/Watch')) },
    { path: '/market-place', icon: lazy(() => import('@modules/components/icons/MarketPlace')) },
    { path: '/groups', icon: lazy(() => import('@modules/components/icons/Groups')) }
]

function Menu () {
    const { location: { pathname } } = useHistory()
    const getLinkStyle = (needle: string) => {
        const { iconActive, iconNotActive } = styles
        const linkStyle = needle === pathname ? iconActive : iconNotActive

        return linkStyle
    }
    const menuComponent = (
        <HTML className="header-center-nav" tag="nav" style={ styles.nav }>
            <HTML tag="ul" style={ styles.ul }>
                { navigations.map(({ path, icon: Icon }: NavigationProps) => (
                    <HTML tag="li" key={ path } style={ styles.li }>
                        <NavLink to={ path } style={ styles.navLink }>
                            <Icon style={ getLinkStyle(path) } width={ 28 } height={ 28 } />
                            { (pathname === path) && (
                                <HTML tag="div" style={ styles.indicator } children="" />
                            ) }
                        </NavLink>
                    </HTML>
                )) }
            </HTML>
        </HTML>
    )

    return menuComponent
}

export default Menu