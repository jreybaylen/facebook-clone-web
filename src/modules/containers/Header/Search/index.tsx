import { ChangeEvent, lazy, useState } from 'react'

import { styles } from './index.styles'

const Form = lazy(() => import('@modules/components/html/Form'))
const Input = lazy(() => import('@modules/components/html/Input'))

function Search (): JSX.Element {
    const [ search, setSearch ] = useState<string>('')
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        console.log(event)
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value as string)
    }
    const searchElement = (
        <Form onSubmit={ handleSubmit }>
            <Input
                type="text" 
                value={ search } 
                style={ styles }
                onChange={ handleChange }
                placeholder="Search Facebook"
            />
        </Form>
    )

    return searchElement
}

export default Search