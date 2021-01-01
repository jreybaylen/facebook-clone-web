import { StylesProps } from './index.interfaces'

const styles: StylesProps = {
    form: {
        position: 'relative'
    },
    icon: {
        top: 0,
        left: 10,
        bottom: 0,
        margin: 'auto',
        position: 'absolute'
    },
    input: {
        outline: 0,
        width: '100%',
        borderWidth: 0,
        height: '100%',
        color: '#050505',
        borderRadius: '30px',
        boxSizing: 'border-box',
        backgroundColor: '#f0f2f5',
        padding: '12px 15px 12px 35px'
    },
    nav: {
        margin: 0,
        maxWidth: 285,
        width: '100%',
        paddingLeft: 0,
        display: 'flex',
        listStyle: 'none'
    },
    searchIcon: {
        marginRight: 10
    },
    searchInput: {
        width: '100%',
        boxSizing: 'border-box'
    }
}

export { styles }