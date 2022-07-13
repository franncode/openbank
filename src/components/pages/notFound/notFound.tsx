import React from 'react'
import { color_white } from '../../../styles/theme'
import { Button } from '../../atoms/button/button'
import { Icon } from '../../atoms/icon/icon'
import { Blank } from '../../templates/blank/blank'
import logo from '../../../assets/components/pages/home/logo.svg'
import styles from './notFound.module.scss'
import { Banner } from '../../atoms/banner/banner'

export const NotFound = () => (
	<Blank
		head={{
			title: 'Password Manager | Welcome',
		}}
	>
		<img className={styles.logo} src={logo} alt='Logo' />
		<Banner
			className={styles.banner}
			description='Esta pagina no existe o ha sido removida, te sugerimos volver al inicio.'
			title='Pagina no encontrada'
			type='warning'
		/>
		<Button className={styles.button} link={{ to: '/' }}>
			Ir al inicio <Icon code='navigate_next' color={color_white} />
		</Button>
	</Blank>
)
