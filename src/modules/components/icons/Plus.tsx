import { styles } from './index.styles'
import { IconProps } from './index.interfaces'

function Plus (props: IconProps) {
    const { style, ...rest } = props
    const plusElement = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-plus"
            viewBox="0 0 24 24"
            style={{ ...styles, ...style }}
            { ...rest }
        >
            <path d="M12 5L12 19" />
            <path d="M5 12L19 12" />
        </svg>
    )

    return plusElement
}

export default Plus