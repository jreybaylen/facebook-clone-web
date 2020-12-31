import { lazy } from 'react'

const Header = lazy(() => import('@modules/containers/Header'))

function Groups () {
    const groupsElement = (
        <Header />
    )

    return groupsElement
}

export default Groups