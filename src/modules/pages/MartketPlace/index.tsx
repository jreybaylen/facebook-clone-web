import { lazy } from 'react'

const Header = lazy(() => import('@modules/containers/Header'))

function MarketPlace () {
    const marketPlaceElement = (
        <Header />
    )

    return marketPlaceElement
}

export default MarketPlace