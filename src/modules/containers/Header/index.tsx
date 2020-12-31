import { lazy } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

import { styles } from './index.styles'
import { NavigationProps } from './index.interfaces'

const Search = lazy(() => import('./Search'))
const HTML = lazy(() => import('@modules/components/html/Common'))
const FacebookIcon = lazy(() => import('@modules/components/icons/Facebook'))

const navigations: Array<NavigationProps> = [
    { path: '/', icon: lazy(() => import('@modules/components/icons/Home')) },
    { path: '/pages', icon: lazy(() => import('@modules/components/icons/Pages')) },
    { path: '/watch', icon: lazy(() => import('@modules/components/icons/Watch')) },
    { path: '/market-place', icon: lazy(() => import('@modules/components/icons/MarketPlace')) },
    { path: '/groups', icon: lazy(() => import('@modules/components/icons/Groups')) }
]

function Header () {
    const { location: { pathname } } = useHistory()
    const getLinkStyle = (needle: string) => {
        const { iconActive, iconNotActive } = styles
        const linkStyle = needle === pathname ? iconActive : iconNotActive

        return linkStyle
    }
    const headerElement = (
        <HTML tag="header" style={ styles.header }>
            <HTML tag="nav" style={ styles.nav }>
                <HTML tag="ul" style={ styles.leftNav }>
                    <HTML tag="li" style={ styles.formSearchIcon }>
                        <FacebookIcon width={ 40 } height={ 40 } />
                    </HTML>
                    <HTML tag="li" style={ styles.formSearchInput }>
                        <Search />
                    </HTML>
                </HTML>
                <HTML className="header-center-nav" tag="nav" style={ styles.centerNav }>
                    <HTML tag="ul" style={ styles.centerNavUl }>
                        { navigations.map(({ path, icon: Icon }: NavigationProps) => (
                            <HTML tag="li" key={ path } style={ styles.centerNavUlLi }>
                                <NavLink to={ path } style={ styles.centerNavUlLiLink }>
                                    <Icon style={ getLinkStyle(path) } width={ 28 } height={ 28 } />
                                    { (pathname === path) && (
                                        <HTML tag="div" style={ styles.indicator } children="" />
                                    ) }
                                </NavLink>
                            </HTML>
                        )) }
                    </HTML>
                </HTML>
                <HTML tag="ul" style={ styles.rightNav }>
                    
                </HTML>
            </HTML>
        </HTML>
    )

    return headerElement
}

export default Header