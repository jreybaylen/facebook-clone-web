import { styles } from './index.styles'
import { IconProps } from './index.interfaces'

function Search (props: IconProps) {
    const { style, ...rest } = props
    const searchElement = (
        <svg
            style={{ ...styles, ...style }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="feather feather-search"
            viewBox="0 0 24 24"
            { ...rest }
        >
            <circle color="#797e80" cx="11" cy="11" r="8"></circle>
            <path color="#797e80" d="M21 21L16.65 16.65"></path>
        </svg>
    )

    return searchElement
}

export default Search