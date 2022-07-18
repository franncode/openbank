import './styles/global.scss'
import { createRoot } from 'react-dom/client'
import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
	Outlet,
} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import React from 'react'
import { One } from './components/pages/create/1/1'
import { Home } from './components/pages/home/home'
import { NotFound } from './components/pages/notFound/notFound'
import { Two } from './components/pages/create/2/2'
import { Three } from './components/pages/create/3/3'
import { Locator } from './components/atoms/locator/locator'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
	<BrowserRouter>
		<Routes>
			<Route index element={<Navigate to='/en' />} />
			<Route path='/:language' element={<Locator />}>
				<Route index element={<Home />} />
				<Route path='create' element={<Outlet />}>
					<Route index element={<Navigate to='1' />} />
					<Route path='1' element={<One />} />
					<Route path='2' element={<Two />} />
					<Route path='3' element={<Three />} />
				</Route>
				<Route path='not-found' element={<NotFound />} />
				<Route path='*' element={<Navigate to='not-found' />} />
			</Route>
		</Routes>
	</BrowserRouter>
)

serviceWorker.unregister()
