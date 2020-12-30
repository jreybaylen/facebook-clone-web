import { lazy } from 'react'

import { styles } from './index.styles'

const HTML = lazy(() => import('@modules/components/html/Common'))
const FacebookIcon = lazy(() => import('@modules/components/icons/Facebook'))

function Header () {
    const headerElement = (
        <HTML tag="header" style={ styles.header }>
            <HTML tag="ul" style={ styles.ul }>
                <FacebookIcon width={ 40 } height={ 40 } />
            </HTML>
        </HTML>
    )

    return headerElement
}

export default Header