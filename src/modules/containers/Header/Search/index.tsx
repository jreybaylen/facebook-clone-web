import { Link } from 'react-router-dom'
import { ChangeEvent, lazy, useState } from 'react'

import { styles } from './index.styles'

const Form = lazy(() => import('@modules/components/html/Form'))
const HTML = lazy(() => import('@modules/components/html/Common'))
const Input = lazy(() => import('@modules/components/html/Input'))
const SearchIcon = lazy(() => import('@modules/components/icons/Search'))
const FacebookIcon = lazy(() => import('@modules/components/icons/Facebook'))

function Search (): JSX.Element {
    const [ search, setSearch ] = useState<string>('')
    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        console.log(event)
    }
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value as string)
    }
    const searchElement = (
        <HTML tag="ul" style={ styles.nav }>
            <HTML tag="li" style={ styles.searchIcon }>
                <Link to="/">
                    <FacebookIcon width={ 40 } height={ 40 } />
                </Link>
            </HTML>
            <HTML tag="li" style={ styles.searchInput }>
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
            </HTML>
        </HTML>
    )

    return searchElement
}

export default Search