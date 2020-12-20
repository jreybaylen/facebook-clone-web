import { type } from 'os'
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
    authenticate: boolean
    redirectToIfNotAuth: string
}

interface RoutesProps extends BasicRoutesProps, Partial<OptionalProps> {
    config?: ConfigProps
}

export type { RoutesProps }