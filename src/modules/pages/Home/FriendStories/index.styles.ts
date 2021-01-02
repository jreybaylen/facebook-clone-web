import { StyleProps } from './index.interfaces'

const styles: StyleProps = {
    ul: {
        display: 'flex',
        listStyle: 'none'
    },
    li: {
        height: 200,
        maxWidth: 111,
        display: 'flex',
        marginRight: 10,
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 1px 2px #00000033'
    },
    overlay: {
        inset: 0,
        zIndex: -1,
        position: 'absolute',
        backgroundImage: 'linear-gradient(0deg, #00000066, transparent)'
    },
    story: {
        width: '100%',
        color: '#fff',
        height: '100%',
        display: 'flex',
        position: 'relative',
        textDecoration: 'none',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    img: (index: number) => ({
        width: '100%',
        display: 'block',
        transition: '.15s',
        height: index ? '100%' : 129
    }),
    name: {
        left: 10,
        bottom: 5,
        margin: 'auto',
        lineHeight: 1.5,
        fontWeight: 500,
        position: 'absolute',
    },
    createContainer: {
        height: '100%',
        display: 'flex',
        position: 'relative',
    },
    create: {
        lineHeight: 1.3,
        fontWeight: 500,
        fontSize: '110%',
        color: '#050505',
        textAlign: 'center',
        padding: '24px 16px 0'
    },
    plusIcon: {
        left: 0,
        top: -20,
        right: 0,
        width: 32,
        height: 32,
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '100%',
        position: 'absolute',
        border: '5px solid #fff',
        justifyContent: 'center',
        backgroundColor: '#1877f2'
    },
    storyHover: {
        inset: 0,
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.15)'
    }
}

export { styles }