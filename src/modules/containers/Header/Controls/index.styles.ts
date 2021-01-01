import { StylesProps } from './index.interfaces'

const styles: StylesProps = {
    nav: {
        display: 'flex',
        listStyle: 'none'
    },
    profile: {
        height: 40,
        marginRight: 3,
        borderWidth: 0,
        display: 'flex',
        paddingRight: 15,
        borderRadius: 25,
        cursor: 'pointer',
        alignItems: 'center'
    },
    profilePic: {
        width: 28,
        height: 28,
        marginRight: 7,
        display: 'block',
        borderRadius: '100%'
    },
    profileName: {
        color: '#050505',
        fontWeight: 500
    },
    profileOption: {
        width: 40,
        height: 40,
        borderWidth: 0,
        display: 'flex',
        margin: '0 4px',
        cursor: 'pointer',
        alignItems: 'center',
        borderRadius: '100%',
        justifyContent: 'center'
    }
}

export { styles }