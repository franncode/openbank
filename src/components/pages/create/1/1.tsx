import React, { FC, Fragment } from 'react'
import { color_white } from '../../../../styles/theme'
import head from '../../../../assets/components/pages/information/head.svg'
import safe from '../../../../assets/components/pages/information/safe.svg'
import { Icon } from '../../../atoms/icon/icon'
import { Cards } from '../../../molecules/cards/cards'
import { Stepper } from '../../../templates/stepper/stepper'
import styles from './1.module.scss'

export const One: FC = () => {
	const cards = [
		{
			image: {
				src: head,
				alt: 'Head with gears',
			},
			description:
				'Guarda aquí todas tus contraseñas, datos o cualquier informacion, olvida las notas de papel y las aplicaciones no protegidas.',
		},
		{
			image: {
				src: safe,
				alt: 'Safe and padlock',
			},
			description:
				'Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella.',
		},
	]

	return (
		<Stepper
			head={{
				title: 'Password Manager | ¿Qué es Password Manager?',
			}}
			buttons={[
				{
					children: 'Cancelar',
					link: {
						to: '/',
					},
					type: 'secondary',
				},
				{
					children: (
						<Fragment>
							Siguiente
							<Icon code='navigate_next' color={color_white} />
						</Fragment>
					),
					link: {
						to: '/create/2',
					},
					type: 'primary',
				},
			]}
			current={1}
			title='Crea tu Password Manager'
		>
			<Cards cards={cards} className={styles.cards} />
			<p className={styles.texts}>
				<b>Cómo funciona</b>
				En primer lugar, debes crear una contraseña diferente para sus
				pertenencias electrónicas. No podrás recuperar tu contraseña, asi que
				recuérdala bien.
			</p>
			<p className={styles.texts}>
				<b>Qué datos puedes guardar</b>
				Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono
				móvil, el número de serie de alguno de tus dispositivos o cualquier
				infomación que necesites tener en lugar seguro.
			</p>
		</Stepper>
	)
}
