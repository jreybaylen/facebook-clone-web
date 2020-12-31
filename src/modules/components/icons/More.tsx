import { styles } from './index.styles'
import { IconProps } from './index.interfaces'

function More (props: IconProps) {
    const { style, ...rest } = props
    const moreElement = (
        <svg viewBox="0 0 28 28" style={{ ...styles, ...style }} { ...rest }>
            <path d="M23.5 4a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0 18a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19zm0-9a1.5 1.5 0 110 3h-19a1.5 1.5 0 110-3h19z" />
        </svg>
    )

    return moreElement
}

export default More