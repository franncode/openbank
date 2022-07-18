import React, {
	ChangeEvent,
	KeyboardEvent,
	FC,
	Fragment,
	useState,
} from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { business } from '../../../../business/business'
import { services } from '../../../../services/services'
import { theme } from '../../../../styles/theme'
import { Icon } from '../../../atoms/icon/icon'
import { Input } from '../../../atoms/input/input'
import { Stepper } from '../../../templates/stepper/stepper'
import styles from './2.module.scss'

export const Two: FC = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
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
	const isLoading = status === 'loading'

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
				title: `Password Manager | ${t('Create your Master Password')}`,
			}}
			buttons={[
				{
					children: t('Back'),
					onClick: () => navigate(-1),
					variant: 'secondary',
				},
				{
					children: (
						<Fragment>
							{isLoading ? t('Loading') : t('Next')}
							<Icon
								className={isLoading ? styles.loading : ''}
								code={isLoading ? 'autorenew' : 'navigate_next'}
								color={
									status === 'idle'
										? theme.color.white
										: theme.color.secondary_light
								}
							/>
						</Fragment>
					),
					onClick: handleNext,
					variant: isLoading
						? 'loading'
						: status === 'disabled'
						? 'disabled'
						: 'primary',
				},
			]}
			current={2}
			title={t('Create your Password Manager')}
		>
			<section className={styles.section}>
				<p className={styles.texts}>
					{t(
						'First of all, you need to create a different password for your electronic belongings. You will not be able to recover your password, so remember it well.'
					)}
				</p>
				<span className={styles.passwords}>
					<Input
						className={styles.input}
						icon={{
							code: password.first.show ? 'visibility_off' : 'visibility',
							color: theme.color.secondary_superlight,
							onClick: handleShowPassword('first'),
						}}
						label={t('Create your Master Password')}
						name='first'
						onChange={handleChange}
						placeholder={t('Password')}
						type={password.first.show ? 'text' : 'password'}
						value={password.first.value}
					/>
					<Input
						className={styles.input}
						icon={{
							code: password.second.show ? 'visibility_off' : 'visibility',
							color: theme.color.secondary_superlight,
							onClick: handleShowPassword('second'),
						}}
						error={password.second.error}
						label={t('Repeat your Master Password')}
						name='second'
						onBlur={handleBlurSecondPassword}
						onChange={handleChange}
						onKeyDown={handleKeyDownSecondPassword}
						placeholder={t('Repeat your password')}
						type={password.second.show ? 'text' : 'password'}
						value={password.second.value}
					/>
				</span>
			</section>
			<section className={styles.section}>
				<p className={styles.texts}>
					{t(
						'You can also create a hint to help you remember your master password.'
					)}
				</p>
				<Input
					className={styles.input}
					label={
						<span className={styles.label}>
							<p>
								{t('Create your hint to remember your password (optional)')}
							</p>
							<Icon code='info' color={theme.color.cyan} />
						</span>
					}
					name='clue'
					onChange={handleChange}
					onKeyDown={handleKeyDownClue}
					placeholder={t('Enter your hint')}
					value={password.clue}
				/>
			</section>
		</Stepper>
	)
}
