import React, { ChangeEvent, FC, Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useImmerReducer } from 'use-immer'
import { services } from '../../../../services/services'
import { theme } from '../../../../styles/theme'
import { Icon } from '../../../atoms/icon/icon'
import { Input } from '../../../atoms/input/input'
import { Stepper } from '../../../templates/stepper/stepper'
import styles from './2.module.scss'
import { initialState, reducer } from './2.reducer'
import { ActionType } from './2.types'

export const Two: FC = () => {
	const navigate = useNavigate()
	const { t } = useTranslation()
	const [state, dispatch] = useImmerReducer(reducer, initialState)
	const { clue, first, second, status } = state
	const isLoading = status === 'loading'

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		if (name === 'clue') {
			dispatch({ type: ActionType.SET_CLUE_VALUE, payload: { value } })
		} else {
			dispatch({
				type: ActionType.SET_PASSWORD_VALUE,
				payload: {
					name: name as 'first' | 'second',
					value,
				},
			})
		}
	}

	const handleNext = async () => {
		try {
			dispatch({
				type: ActionType.SET_STATUS_VALUE,
				payload: { value: 'loading' },
			})

			const response = await services.form.submit(
				first.value,
				second.value,
				clue
			)
			const status = response.status === 200 ? 'success' : 'error'
			navigate(`../3?status=${status}`)
		} catch (error) {
			alert(error)
		}
	}

	const handleShowPassword = (name: 'first' | 'second') => () => {
		dispatch({
			type: ActionType.SWITCH_SHOW_PASSWORD,
			payload: {
				name,
			},
		})
	}

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
						error={first.error}
						icon={{
							code: first.show ? 'visibility_off' : 'visibility',
							color: theme.color.secondary_superlight,
							onClick: handleShowPassword('first'),
						}}
						label={t('Create your Master Password')}
						name='first'
						onChange={handleChange}
						placeholder={t('Password')}
						type={first.show ? 'text' : 'password'}
						value={first.value}
					/>
					<Input
						className={styles.input}
						icon={{
							code: second.show ? 'visibility_off' : 'visibility',
							color: theme.color.secondary_superlight,
							onClick: handleShowPassword('second'),
						}}
						error={second.error}
						label={t('Repeat your Master Password')}
						name='second'
						onChange={handleChange}
						placeholder={t('Repeat your password')}
						type={second.show ? 'text' : 'password'}
						value={second.value}
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
					error={clue.error}
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
					placeholder={t('Enter your hint')}
					value={clue.value}
				/>
			</section>
		</Stepper>
	)
}
