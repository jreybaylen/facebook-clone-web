import { StylesProps } from './index.interface'

const styles: StylesProps = {
    nav: {
        width: '100%',
        maxWidth: 850
    },
    ul: {
        maxWidth: 550,
        width: '100%',
        margin: 'auto',
        paddingLeft: 0,
        display: 'flex',
        listStyle: 'none'
    },
    li: {
        flex: 1,
        margin: '0 5px',
        position: 'relative'
    },
    navLink: {
        display: 'flex',
        padding: '10px 0',
        justifyContent: 'center'
    },
    indicator: {
        left: 0,
        right: 0,
        height: 2.5,
        bottom: -4,
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: '#1877f2'
    },
    iconNotActive: {
        fill: '#65676b'
    },
    iconActive: {
        fill: '#1877f2'
    }
}

export { styles }