import { Fragment, lazy, useState, useEffect, useRef } from 'react'

import { styles } from './index.styles'
import { NavigationProps } from './index.interfaces'

const HTML = lazy(() => import('@modules/components/html/Common'))

const navigations: Array<NavigationProps> = [
    { name: 'plus', icon: lazy(() => import('@modules/components/icons/Plus')) },
    { name: 'messenger', icon: lazy(() => import('@modules/components/icons/Messenger')) },
    { name: 'notification', icon: lazy(() => import('@modules/components/icons/Notification')) },
    { name: 'chevron-down', icon: lazy(() => import('@modules/components/icons/ChevronDown')) }
]

function Controls () {
    const [ profileSrc, setProfileSrc ] = useState('')
    const handleGetProfileSrc = useRef(async () => {
        const profile = await import('@assets/profile.jpg')

        setProfileSrc(profile.default)
    })
    const controlElement = (
        <HTML tag="ul" style={ styles.nav }>
            <HTML tag="li">
                <HTML tag="button" className="controls-profile" style={ styles.profile }>
                    <HTML style={ styles.profilePic } tag="img" src={ profileSrc } />
                    <HTML style={ styles.profileName } tag="span">John Rey</HTML>
                </HTML>
            </HTML>
            <Fragment>
                { navigations.map(({ name, icon: Icon }: NavigationProps) => (
                    <HTML tag="li" key={ name }>
                        <HTML tag="button" className="controls-profile profile-options" style={ styles.profileOption }>
                            <Icon width={ 20 } height={ 20 } />
                        </HTML>
                    </HTML>
                )) }
            </Fragment>
        </HTML>
    )

    useEffect(() => {
        handleGetProfileSrc.current()
    }, [])

    return controlElement
}

export default Controls