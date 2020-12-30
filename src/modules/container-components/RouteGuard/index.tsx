import { Redirect } from 'react-router-dom'

import { RouteGuardProps } from './index.interface'

function RouteGuard (props: RouteGuardProps) {
    if (props.config?.authenticate) {
        const authMissing = true

        if (authMissing) {
            return <Redirect to="/sign-in" />
        }
        
        return props.children
    }

    return props.children
}

export { RouteGuard }