import { StylesProps } from './index.interfaces'

const styles: StylesProps = {
    header: {
        padding: 8,
        boxShadow: '2px 2px #e8eaed'
    },
    nav: {
        width: '100%',
        margin: 'auto',
        maxWidth: 1400
    },
    ul: {
        margin: 0,
        maxWidth: 300,
        paddingLeft: 0,
        display: 'flex'
    },
    formSearchIcon: {
        marginRight: 10,
        listStyle: 'none'
    },
    formSearchInput: {
        width: '100%',
        listStyle: 'none',
        boxSizing: 'border-box'
    }
}

export { styles }