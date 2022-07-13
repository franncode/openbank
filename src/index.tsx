import './styles/global.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import React from 'react'
import ReactDOM from 'react-dom'
import { One } from './components/pages/create/1/1'
import { Home } from './components/pages/home/home'
import { NotFound } from './components/pages/notFound/notFound'
import { Two } from './components/pages/create/2/2'
import { Three } from './components/pages/create/3/3'

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/create/1' element={<One />} />
			<Route path='/create/2' element={<Two />} />
			<Route path='/create/3' element={<Three />} />
			<Route path='*' element={<Navigate to='/not-found' />} />
			<Route path='/not-found' element={<NotFound />} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
)

serviceWorker.unregister()
