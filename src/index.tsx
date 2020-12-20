import { StrictMode } from 'react'
import { render } from 'react-dom'

import { FacebookCloneApp } from './modules/Root'

import reportWebVitals from './reportWebVitals'

render(
	<StrictMode>
		<FacebookCloneApp />
	</StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
