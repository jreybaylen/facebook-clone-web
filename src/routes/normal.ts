import { lazy } from 'react'

import { RoutesProps } from './routes.interface'

const HomePage = lazy(() => import('../modules/normal-components/Home'))

const normalRoutes: Array<RoutesProps> = [
    {
        path: '/',
        exact: true,
        name: 'home',
        component: HomePage,
        config: {
            authenticate: true,
            redirectToIfNotAuth: '/sign-in'
        }
    }
]

export { normalRoutes }