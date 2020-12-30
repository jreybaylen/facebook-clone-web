import { LazyExoticComponent } from 'react'

interface OptionalProps {
    exact: boolean
}

interface BasicRoutesProps {
    name: string
    path: string
    component: LazyExoticComponent<() => JSX.Element>
}

interface ConfigProps {
    config: {
        authenticate: boolean
        redirectToIfNotAuth: string
    }
}

interface RoutesProps
    extends BasicRoutesProps, Partial<OptionalProps>, Partial<ConfigProps> { }

export type { RoutesProps, ConfigProps }