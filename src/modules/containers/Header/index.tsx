import { lazy } from 'react'

import { styles } from './index.styles'

const Menu = lazy(() => import('./Menu'))
const Search = lazy(() => import('./Search'))
const Controls = lazy(() => import('./Controls'))
const HTML = lazy(() => import('@modules/components/html/Common'))

function Header () {
    const headerElement = (
        <HTML tag="header" style={ styles.header }>
            <HTML tag="nav" style={ styles.nav }>
                <Search />
                <Menu />
                <Controls/>
            </HTML>
        </HTML>
    )

    return headerElement
}

export default Header