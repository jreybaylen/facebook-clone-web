import { lazy } from 'react'

const Header = lazy(() => import('@modules/containers/Header'))

function Home () {
    const homeElement = (
        <Header />
    )

    return homeElement
}

export default Home