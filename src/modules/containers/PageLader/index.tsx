import { lazy } from 'react'

import { styles } from './index.styles'

const HTML = lazy(() => import('@modules/components/html/Common'))
const FacebookIcon = lazy(() => import('@modules/components/icons/Facebook'))

function PageLoader () {
    const pageLoaderElement = (
        <HTML tag="div" style={ styles }>
            <FacebookIcon animation width={ 100 } height={ 100 } />
        </HTML>
    )

    return pageLoaderElement
}

export default PageLoader