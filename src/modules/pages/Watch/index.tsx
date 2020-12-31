import { lazy } from 'react'

const Header = lazy(() => import('@modules/containers/Header'))

function Watch () {
    const watchElement = (
        <Header />
    )

    return watchElement
}

export default Watch