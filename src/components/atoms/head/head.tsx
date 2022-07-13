import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { THead } from './head.types'
import openGraphPicture from '../../../assets/components/atoms/head/openGraphPicture.jpg'

export const Head: FC<THead> = ({
	description = 'Almacene contraseñas, inicios de sesión y registros digitales en sus sitios favoritos. Mantenga sus inicios de sesión seguros.',
	openGraph = {
		description:
			'Almacene contraseñas, inicios de sesión y registros digitales en sus sitios favoritos. Mantenga sus inicios de sesión seguros.',
		link: 'https://www.passwordmanager.com/',
		picture: openGraphPicture,
	},
	title = 'Password Manager',
}) => (
	<Helmet>
		<title>{title}</title>
		<link rel='icon' href='/favicon.png' />
		<meta name='viewport' content='initial-scale=1.0, width=device-width' />
		<meta name='description' content={description} />
		<meta name='theme-color' content='#FF0049' />
		<meta name='msapplication-navbutton-color' content='#FF0049' />
		<meta name='apple-mobile-web-app-status-bar-style' content='#FF0049' />
		<meta itemProp='description' content={openGraph.description} />
		<meta itemProp='image' content={openGraph.picture} />
		<meta itemProp='name' content={title} />
		<meta name='description' content={openGraph.description} />
		<meta name='image' content={openGraph.picture} />
		<meta name='og:description' content={openGraph.description} />
		<meta name='og:image' content={openGraph.picture} />
		<meta name='og:locale' content='es_ES' />
		<meta name='og:site_name' content={title} />
		<meta name='og:title' content={title} />
		<meta name='og:type' content='website' />
		<meta name='og:url' content={openGraph.link} />
	</Helmet>
)
