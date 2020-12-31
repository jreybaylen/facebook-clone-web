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
        path: '/pages',
        name: 'pages',
        config: {
            authenticate: true,
            redirectToIfNotAuth: '/sign-in'
        },
        component: lazy(() => import('@modules/pages/AccountPage'))
    },
    {
        path: '/watch',
        name: 'watch',
        config: {
            authenticate: true,
            redirectToIfNotAuth: '/sign-in'
        },
        component: lazy(() => import('@modules/pages/Watch'))
    },
    {
        path: '/market-place',
        name: 'market-place',
        config: {
            authenticate: true,
            redirectToIfNotAuth: '/sign-in'
        },
        component: lazy(() => import('@modules/pages/MartketPlace'))
    },
    {
        path: '/groups',
        exact: true,
        name: 'groups',
        config: {
            authenticate: true,
            redirectToIfNotAuth: '/sign-in'
        },
        component: lazy(() => import('@modules/pages/Groups'))
    },
    {
        name: 'login',
        path: '/sign-in',
        component: lazy(() => import('@modules/pages/LogIn'))
    }
]

export { appRoutes }