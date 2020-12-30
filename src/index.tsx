import { StrictMode } from 'react'
import { render } from 'react-dom'

import { FacebookCloneApp } from '@modules/Root'

render(
	<StrictMode>
		<FacebookCloneApp />
	</StrictMode>,
	document.getElementById('facebook-clone-root')
)
