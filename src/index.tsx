import './styles/global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ProductInformation } from './views/productInformation/productInformation'
import { Form } from './views/form/form'
import { Feedback } from './views/feedback/feedback'
import { Head } from './components/head/head'

ReactDOM.render(
	<Fragment>
		<Head />
		<BrowserRouter>
			<Routes>
				<Route path='/1' element={<ProductInformation />} />
				<Route path='/2' element={<Form />} />
				<Route path='/3' element={<Feedback success={false} />} />
			</Routes>
		</BrowserRouter>
	</Fragment>,
	document.getElementById('root')
)

serviceWorker.unregister()
