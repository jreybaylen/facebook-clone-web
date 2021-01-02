import { Fragment, lazy } from 'react'

import { styles } from './index.styles'

const FriedStories = lazy(() => import('./FriendStories'))
const ProfileSettings = lazy(() => import('./ProfileSettings'))
const Header = lazy(() => import('@modules/containers/Header'))
const HTML = lazy(() => import('@modules/components/html/Common'))

function Home () {
    const homeElement = (
        <Fragment>
            <Header />
            <HTML tag="section" style={ styles }>
                <ProfileSettings />
                <FriedStories />
            </HTML>
        </Fragment>
    )

    return homeElement
}

export default Home