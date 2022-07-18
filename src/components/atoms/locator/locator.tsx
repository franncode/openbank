import { FC, useEffect } from 'react'
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom'
import React from 'react'
import { resources } from '../../../locale/locale'
import { initReactI18next, useTranslation } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	})

export const Locator: FC = () => {
	const { i18n } = useTranslation()
	const { language } = useParams()
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		if (language !== i18n.language) i18n.changeLanguage(language || 'en')
	}, [i18n, language])

	useEffect(() => {
		const route = location.pathname
			.split('/')
			.map((part: string, index) => {
				return index === 1 ? i18n.language : part
			})
			.join('/')
		navigate(route)
	}, [i18n.language])

	return <Outlet />
}
