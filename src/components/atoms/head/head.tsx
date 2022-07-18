import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { THead } from './head.types'
import openGraphPicture from '../../../assets/components/atoms/head/openGraphPicture.jpg'
import { useTranslation } from 'react-i18next'
import { theme } from '../../../styles/theme'

export const Head: FC<THead> = ({
	description = 'Almacene contraseñas, inicios de sesión y registros digitales en sus sitios favoritos. Mantenga sus inicios de sesión seguros.',
	openGraph = {
		description:
			'Almacene contraseñas, inicios de sesión y registros digitales en sus sitios favoritos. Mantenga sus inicios de sesión seguros.',
		link: 'https://www.passwordmanager.com/',
		picture: openGraphPicture,
	},
	title = 'Password Manager',
}) => {
	const { i18n } = useTranslation()
	const { language } = i18n

	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta
				name='msapplication-navbutton-color'
				content={theme.color.primary}
			/>
			<meta
				name='apple-mobile-web-app-status-bar-style'
				content={theme.color.primary}
			/>
			<meta itemProp='description' content={openGraph.description} />
			<meta itemProp='image' content={openGraph.picture} />
			<meta itemProp='name' content={title} />
			<meta name='description' content={openGraph.description} />
			<meta name='image' content={openGraph.picture} />
			<meta name='og:description' content={openGraph.description} />
			<meta name='og:image' content={openGraph.picture} />
			<meta name='og:locale' content={language} />
			<meta name='og:site_name' content={title} />
			<meta name='og:title' content={title} />
			<meta name='og:type' content='website' />
			<meta name='og:url' content={openGraph.link} />
		</Helmet>
	)
}
