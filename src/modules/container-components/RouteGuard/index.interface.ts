import { ConfigProps } from '@routes/index.interface'

interface RouteGuardProps extends Partial<ConfigProps> {
    children: JSX.Element
}

export type { RouteGuardProps }