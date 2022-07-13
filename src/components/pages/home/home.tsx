import React from 'react'
import { color_white } from '../../../styles/theme'
import { Button } from '../../atoms/button/button'
import { Icon } from '../../atoms/icon/icon'
import { Blank } from '../../templates/blank/blank'
import logo from '../../../assets/components/pages/home/logo.svg'
import styles from './home.module.scss'

export const Home = () => (
	<Blank
		head={{
			title: 'Password Manager | Welcome',
		}}
	>
		<div className={styles.top}>
			<img className={styles.logo} src={logo} alt='Logo' />
			<p className={styles.text}>
				Crea tu contraseña maestra y asegura tus cuentas
			</p>
		</div>
		<Button className={styles.button} link={{ to: '/create/1' }}>
			Iniciar <Icon code='navigate_next' color={color_white} />
		</Button>
	</Blank>
)
