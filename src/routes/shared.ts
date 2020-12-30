import { lazy } from 'react'

import { RoutesProps } from './index.interface'

const LogInPage = lazy(() => import('@modules/shared-components/LogIn'))

const sharedRoutes: Array<RoutesProps> = [
    {
        name: 'login',
        path: '/sign-in',
        component: LogInPage
    }
]

export { sharedRoutes }