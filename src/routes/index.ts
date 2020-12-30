import { lazy } from 'react'

import { RoutesProps } from './index.interface'

const appRoutes: Array<RoutesProps> = [
    {
        path: '/',
        exact: true,
        name: 'home',
        config: {
            authenticate: true,
            redirectToIfNotAuth: '/sign-in'
        },
        component: lazy(() => import('@modules/pages/Home'))
    },
    {
        name: 'login',
        path: '/sign-in',
        component: lazy(() => import('@modules/pages/LogIn'))
    }
]

export { appRoutes }