import React, { ReactNode } from 'react'
import { Button } from '../../atoms/button/button'
import { Icon } from '../../atoms/icon/icon'
import { Blank } from '../../templates/blank/blank'
import logo from '../../../assets/components/pages/home/logo.svg'
import styles from './home.module.scss'
import { useTranslation } from 'react-i18next'
import en from '../../../assets/components/pages/home/en.png'
import es from '../../../assets/components/pages/home/es.png'
import { theme } from '../../../styles/theme'

export const Home = () => {
	const { t } = useTranslation()
	const { i18n } = useTranslation()

	const handleClick = (language: 'es' | 'en') => () => {
		i18n.changeLanguage(language)
	}

	return (
		<Blank
			head={{
				title: `Password Manager | ${t('Welcome')}`,
			}}
		>
			<section className={styles.top}>
				<div className={styles.texts}>
					<img className={styles.logo} src={logo} alt='Logo' />
					<p className={styles.description}>
						{
							t(
								'Create your master password and secure your accounts'
							) as ReactNode
						}
					</p>
				</div>
				<Button className={styles.button} link={{ to: `create/1` }}>
					<>
						{t('Start')} <Icon code='navigate_next' color={theme.color.white} />
					</>
				</Button>
			</section>
			<section className={styles.languages}>
				<Button onClick={handleClick('es')} type='tertiary'>
					<img src={es} alt='Spain flag' />
					ES
				</Button>
				<Button onClick={handleClick('en')} type='tertiary'>
					<img src={en} alt='United Kingdom flag' />
					EN
				</Button>
			</section>
		</Blank>
	)
}
