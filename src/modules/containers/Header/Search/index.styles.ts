import { CSSProperties } from 'react'

interface StylesProps {
    [ key: string ]: CSSProperties
}

const styles: CSSProperties | StylesProps = {
    outline: 0,
    width: '100%',
    borderWidth: 0,
    height: '100%',
    color: '#050505',
    padding: '10px 15px',
    borderRadius: '30px',
    boxSizing: 'border-box',
    backgroundColor: '#f0f2f5'
}

export { styles }