import React, { FC, Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { services } from '../../../../services/services'
import {
	color_cyan,
	color_secondary_light,
	color_white,
} from '../../../../styles/theme'
import { Icon } from '../../../atoms/icon/icon'
import { Input } from '../../../atoms/input/input'
import { Stepper } from '../../../templates/stepper/stepper'
import styles from './2.module.scss'

export const Two: FC = () => {
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [password, setPassword] = useState({
		clue: '',
		first: '',
		second: '',
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setPassword({ ...password, [name]: value })
	}

	const handleNext = async () => {
		try {
			setLoading(true)

			const response = await services.form.submit(
				password.first,
				password.second,
				password.clue
			)
			const status = response.status === 200 ? 'success' : 'error'
			navigate(`/create/3?status=${status}`, { replace: true })
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<Stepper
			head={{
				title: 'Password Manager | Crea tu Contraseña Maestra',
			}}
			buttons={[
				{
					children: 'Volver',
					link: {
						to: '/1',
					},
					type: 'secondary',
				},
				{
					children: (
						<Fragment>
							{loading ? 'Cargando...' : 'Siguiente'}
							<Icon
								code='navigate_next'
								color={loading ? color_secondary_light : color_white}
							/>
						</Fragment>
					),
					onClick: handleNext,
					type: loading ? 'loading' : 'primary',
				},
			]}
			current={2}
			title='Crea tu Password Manager'
		>
			<section className={styles.section}>
				<p className={styles.texts}>
					En primer lugar, debes crear una contraseña diferente para sus
					pertenencias electrónicas. No podrás recuperar tu contraseña, asi que
					recuérdala bien.
				</p>
				<span className={styles.passwords}>
					<Input
						className={styles.input}
						label='Crea tu Contraseña Maestra'
						name='first'
						onChange={handleChange}
						placeholder='Contraseña'
						value={password.first}
					/>
					<Input
						className={styles.input}
						label='Repite tu Contraseña Maestra'
						name='second'
						onChange={handleChange}
						placeholder='Repite tu contraseña'
						value={password.second}
					/>
				</span>
			</section>
			<section className={styles.section}>
				<p className={styles.texts}>
					También puedes crear una pista que te ayude a recordar tu contraseña
					maestra.
				</p>
				<Input
					className={styles.input}
					label={
						<span className={styles.label}>
							<p>Crea tu pista para recordar tu contraseña (opcional)</p>
							<Icon code='info' color={color_cyan} />
						</span>
					}
					name='clue'
					onChange={handleChange}
					placeholder='Introduce tu pista'
					value={password.clue}
				/>
			</section>
		</Stepper>
	)
}
