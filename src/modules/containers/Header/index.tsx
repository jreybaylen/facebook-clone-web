import { lazy } from 'react'

import { styles } from './index.styles'

const Search = lazy(() => import('./Search'))
const HTML = lazy(() => import('@modules/components/html/Common'))
const FacebookIcon = lazy(() => import('@modules/components/icons/Facebook'))

function Header () {
    const headerElement = (
        <HTML tag="header" style={ styles.header }>
            <HTML tag="nav" style={ styles.nav }>
                <HTML tag="ul" style={ styles.ul }>
                    <HTML tag="li" style={ styles.formSearchIcon }>
                        <FacebookIcon width={ 40 } height={ 40 } />
                    </HTML>
                    <HTML tag="li" style={ styles.formSearchInput }>
                        <Search />
                    </HTML>
                </HTML>
            </HTML>
        </HTML>
    )

    return headerElement
}

export default Header