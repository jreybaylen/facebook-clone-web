import { ChangeEvent, lazy, useState } from 'react'

import { styles } from './index.styles'

const Form = lazy(() => import('@modules/components/html/Form'))
const Input = lazy(() => import('@modules/components/html/Input'))
const SearchIcon = lazy(() => import('@modules/components/icons/Search'))

function Search (): JSX.Element {
    const [ search, setSearch ] = useState<string>('')
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        console.log(event)
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value as string)
    }
    const searchElement = (
        <Form onSubmit={ handleSubmit } style={ styles.form }>
            <SearchIcon style={ styles.icon } width={ 20 } height={ 20 } />
            <Input
                type="text" 
                value={ search } 
                autoComplete="off"
                style={ styles.input }
                onChange={ handleChange }
                placeholder="Search Facebook"
            />
        </Form>
    )

    return searchElement
}

export default Search