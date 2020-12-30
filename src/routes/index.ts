import { RoutesProps } from './index.interface'

import { adminRoutes } from './admin'
import { normalRoutes } from './normal'
import { sharedRoutes } from './shared'

const appRoutes: Array<RoutesProps> = [
    ...adminRoutes,
    ...normalRoutes,
    ...sharedRoutes
]

export { appRoutes }