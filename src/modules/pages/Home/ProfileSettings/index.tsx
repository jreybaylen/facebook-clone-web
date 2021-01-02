import { lazy } from 'react'

import { styles } from './index.styles'

const HTML = lazy(() => import('@modules/components/html/Common'))

function ProfileSettings () {
    const profileSettingsElement = (
        <HTML tag="section" style={ styles.section }>hello World!</HTML>
    )

    return profileSettingsElement
}

export default ProfileSettings