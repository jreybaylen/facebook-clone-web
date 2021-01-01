import { lazy } from 'react'

import { styles } from './index.styles'

const HTML = lazy(() => import('@modules/components/html/Common'))

function Control () {
    const controlElement = (
        <HTML tag="ul" style={ styles.nav }>
                    
        </HTML>
    )

    return controlElement
}

export default Control