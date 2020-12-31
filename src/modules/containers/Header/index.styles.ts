import { StylesProps } from './index.interfaces'

const styles: StylesProps = {
    header: {
        boxShadow: '2px 2px #e8eaed'
    },
    nav: {
        height: 56,
        width: '100%',
        margin: 'auto',
        maxWidth: 1400,
        display: 'flex',
        alignItems: 'center'
    },
    leftNav: {
        margin: 0,
        maxWidth: 300,
        paddingLeft: 0,
        display: 'flex',
        listStyle: 'none'
    },
    centerNav: {
        width: '100%',
        maxWidth: 800
    },
    centerNavUl: {
        maxWidth: 590,
        width: '100%',
        margin: 'auto',
        paddingLeft: 0,
        display: 'flex',
        listStyle: 'none'
    },
    centerNavUlLi: {
        flex: 1,
        position: 'relative'
    },
    centerNavUlLiLink: {
        display: 'flex',
        padding: '10px 0',
        justifyContent: 'center'
    },
    rightNav: {
        listStyle: 'none'
    },
    formSearchIcon: {
        marginRight: 10
    },
    formSearchInput: {
        width: '100%',
        boxSizing: 'border-box'
    },
    iconNotActive: {
        fill: '#65676b'
    },
    iconActive: {
        fill: '#1877f2'
    },
    indicator: {
        left: 0,
        right: 0,
        height: 3,
        bottom: -4,
        borderRadius: 5,
        position: 'absolute',
        backgroundColor: '#1877f2'
    }
}

export { styles }