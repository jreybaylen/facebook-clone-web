import { styles } from './index.styles'
import { IconProps } from './index.interfaces'

function ChevronDown (props: IconProps) {
    const { style, ...rest } = props
    const chevronDownElement = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-chevron-down"
            viewBox="0 0 28 28"
            style={{ ...styles, ...style }}
            { ...rest }
        >
            <path d="M6 9L12 15 18 9"></path>
        </svg>
    )

    return chevronDownElement
}

export default ChevronDown
