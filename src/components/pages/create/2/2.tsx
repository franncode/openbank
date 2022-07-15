import React, {
	ChangeEvent,
	KeyboardEvent,
	FC,
	Fragment,
	useState,
} from 'react'
import { useNavigate } from 'react-router-dom'
import { business } from '../../../../business/business'
import { services } from '../../../../services/services'
import {
	color_cyan,
	color_secondary_light,
	color_secondary_superlight,
	color_white,
} from '../../../../styles/theme'
import { Icon } from '../../../atoms/icon/icon'
import { Input } from '../../../atoms/input/input'
import { Stepper } from '../../../templates/stepper/stepper'
import styles from './2.module.scss'

export const Two: FC = () => {
	const navigate = useNavigate()
	const [status, setStatus] = useState<'disabled' | 'idle' | 'loading'>(
		'disabled'
	)
	const [password, setPassword] = useState({
		clue: '',
		first: {
			show: false,
			value: '',
		},
		second: {
			error: '',
			show: false,
			value: '',
		},
	})

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setPassword((password) => ({
			...password,
			[name]: {
				...password[name as 'first' | 'second'],
				value,
			},
		}))

		if (name === 'first' || name === 'second') {
			const isRespectPassword = business.password.respect(value)
			const areSamePassword = business.password.arSame(
				name === 'first' ? value : password.first.value,
				name === 'second' ? value : password.second.value
			)
			setPassword((password) => ({
				...password,
				second: {
					...password.second,
					error: areSamePassword ? '' : 'Tu contraseña maestra no coincide',
				},
			}))
			if (isRespectPassword && areSamePassword) setStatus('idle')
			else setStatus('disabled')
		}
	}

	const handleKeyDownClue = (event: KeyboardEvent<HTMLInputElement>) => {
		if (business.clue.respect(password.clue) && event.key !== 'Backspace') {
			event.preventDefault()
		}
	}

	const handleNext = async () => {
		try {
			setStatus('loading')

			const response = await services.form.submit(
				password.first.value,
				password.second.value,
				password.clue
			)
			const status = response.status === 200 ? 'success' : 'error'
			navigate(`../3?status=${status}`, { replace: true })
		} catch (error) {
			console.log(error)
		} finally {
			setStatus('idle')
		}
	}

	const handleShowPassword = (name: 'first' | 'second') => () => {
		setPassword((password) => ({
			...password,
			[name]: {
				...password[name],
				show: !password[name].show,
			},
		}))
	}

	const handleBlurSecondPassword = () => {
		const areSamePassword = business.password.arSame(
			password.first.value,
			password.second.value
		)
		switch (true) {
			case !areSamePassword:
				setPassword((password) => ({
					...password,
					second: {
						...password.second,
						error: 'Tu contraseña maestra no coincide',
					},
				}))
				break
			case !password.second.value:
				setPassword((password) => ({
					...password,
					second: {
						...password.second,
						error: 'Campo obligatorio',
					},
				}))
				break
			default:
				setPassword((password) => ({
					...password,
					second: {
						...password.second,
						error: '',
					},
				}))
				break
		}
	}

	const handleKeyDownSecondPassword = () =>
		setPassword((password) => ({
			...password,
			second: {
				...password.second,
				error: '',
			},
		}))

	return (
		<Stepper
			head={{
				title: 'Password Manager | Crea tu Contraseña Maestra',
			}}
			buttons={[
				{
					children: 'Volver',
					onClick: () => navigate(-1),
					type: 'secondary',
				},
				{
					children: (
						<Fragment>
							{status === 'loading' ? 'Cargando...' : 'Siguiente'}
							<Icon
								code='navigate_next'
								color={status === 'idle' ? color_white : color_secondary_light}
							/>
						</Fragment>
					),
					onClick: handleNext,
					type:
						status === 'loading'
							? 'loading'
							: status === 'disabled'
							? 'disabled'
							: 'primary',
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
						icon={{
							code: 'visibility',
							color: color_secondary_superlight,
							onClick: handleShowPassword('first'),
						}}
						label='Crea tu Contraseña Maestra'
						name='first'
						onChange={handleChange}
						placeholder='Contraseña'
						type={password.first.show ? 'text' : 'password'}
						value={password.first.value}
					/>
					<Input
						className={styles.input}
						icon={{
							code: 'visibility',
							color: color_secondary_superlight,
							onClick: handleShowPassword('second'),
						}}
						error={password.second.error}
						label='Repite tu Contraseña Maestra'
						name='second'
						onBlur={handleBlurSecondPassword}
						onChange={handleChange}
						onKeyDown={handleKeyDownSecondPassword}
						placeholder='Repite tu contraseña'
						type={password.second.show ? 'text' : 'password'}
						value={password.second.value}
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
					onKeyDown={handleKeyDownClue}
					placeholder='Introduce tu pista'
					value={password.clue}
				/>
			</section>
		</Stepper>
	)
}
