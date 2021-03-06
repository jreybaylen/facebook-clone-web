import { Fragment } from 'react'

import { styles } from './index.styles'
import { IconProps } from './index.interfaces'

interface FacebookProps extends IconProps {
    animation?: boolean
}

function Facebook (props: FacebookProps) {
    const { style, ...rest } = props
    const facebookElement = (
        <svg style={{ ...styles, ...style }} viewBox="0 0 36 36" fill="url(#jsc_s_2)" { ...rest }>
            <defs>
                <linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_2">
                    <stop offset="0%" stopColor="#0062E0" />
                    <stop offset="100%" stopColor="#19AFFF" />
                </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
            <path fill="#fff" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z" />
            { props.animation && (
                <Fragment>
                    <animateTransform attributeType="XML" attributeName="transform" type="scale" values="1;1.4;1" additive="sum" begin="0s" dur="5s" repeatCount="indefinite" />
                    <circle className="innerCircle" cx="50%" cy="50%" r="25%" fill="none" stroke="#b6e4ff">
                        <animate attributeType="SVG" attributeName="r" begin="0s" dur="1.8s" repeatCount="indefinite" from="50%" to="100%" />
                        <animate attributeType="CSS" attributeName="stroke-width" begin="0s" dur="1.8s" repeatCount="indefinite" from="2%" to="0%" />
                        <animate attributeType="CSS" attributeName="opacity" begin="0s" dur="1.8s" repeatCount="indefinite" from="1" to="0" />
                    </circle>
                </Fragment>
            ) }
        </svg>
    )

    return facebookElement
}

export default Facebook