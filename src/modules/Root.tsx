import { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { appRoutes } from '@routes/index'
import { RoutesProps } from '@routes/index.interface'

function FacebookCloneApp () {
    const facebookCloneAppElement = (
        <BrowserRouter>
            <Suspense fallback="Facebook Clone Loading...">
                <Switch>
                    { appRoutes.map(
                        (route: RoutesProps) => {
                            const { name, exact, ...rest } = route
                            const isExactRoutePath = exact || false

                            return (
                                <Route
                                    key={ name }
                                    path={ rest.path } 
                                    exact={ isExactRoutePath } 
                                    component={ rest.component }
                                />
                            )
                        }
                    ) }
                </Switch>
            </Suspense>
        </BrowserRouter>
    )

    return facebookCloneAppElement
}

export { FacebookCloneApp }