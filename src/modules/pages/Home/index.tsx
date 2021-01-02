import { Fragment, lazy } from 'react'

const FriedStories = lazy(() => import('./FriendStories'))
const Header = lazy(() => import('@modules/containers/Header'))
const HTML = lazy(() => import('@modules/components/html/Common'))

function Home () {
    const homeElement = (
        <Fragment>
            <Header />
            <HTML tag="div">
                <FriedStories />
            </HTML>
        </Fragment>
    )

    return homeElement
}

export default Home