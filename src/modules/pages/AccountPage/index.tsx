import { lazy } from 'react'

const Header = lazy(() => import('@modules/containers/Header'))

function Pages () {
    const pagesElement = (
        <Header />
    )

    return pagesElement
}

export default Pages