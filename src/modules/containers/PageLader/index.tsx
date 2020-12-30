import { lazy, CSSProperties } from 'react'

const Div = lazy(() => import('@modules/components/html/Div'))
const FacebookIcon = lazy(() => import('@modules/components/icons/Facebook'))
const styles: CSSProperties = {
    inset: 0,
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'center'
}

function PageLoader () {
    const pageLoaderElement = (
        <Div style={ styles }>
            <FacebookIcon width={ 100 } height={ 100 } />
        </Div>
    )

    return pageLoaderElement
}

export default PageLoader