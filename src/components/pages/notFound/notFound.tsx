import React from 'react'
import { Button } from '../../atoms/button/button'
import { Icon } from '../../atoms/icon/icon'
import { Blank } from '../../templates/blank/blank'
import logo from '../../../assets/components/pages/home/logo.svg'
import styles from './notFound.module.scss'
import { Banner } from '../../atoms/banner/banner'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { theme } from '../../../styles/theme'

export const NotFound = () => {
	const { language } = useParams()
	const { t } = useTranslation()

	return (
		<Blank
			head={{
				title: 'Password Manager',
			}}
		>
			<img className={styles.logo} src={logo} alt='Logo' />
			<Banner
				className={styles.banner}
				description={t(
					'This page does not exist or has been removed, we suggest you return to the beginning.'
				)}
				title={t('Page not found')}
				type='warning'
			/>
			<Button className={styles.button} link={{ to: `/${language}` }}>
				{t('Go to start')}
				<Icon code='navigate_next' color={theme.color.white} />
			</Button>
		</Blank>
	)
}
