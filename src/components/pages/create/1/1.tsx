import React, { FC, Fragment } from 'react'
import { color_white } from '../../../../styles/theme'
import head from '../../../../assets/components/pages/information/head.svg'
import safe from '../../../../assets/components/pages/information/safe.svg'
import { Icon } from '../../../atoms/icon/icon'
import { Cards } from '../../../molecules/cards/cards'
import { Stepper } from '../../../templates/stepper/stepper'
import styles from './1.module.scss'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const One: FC = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	return (
		<Stepper
			head={{
				title: `Password Manager | ${t('What is Password Manager?')}`,
			}}
			buttons={[
				{
					children: t('Cancel') as string,
					onClick: () => navigate(-1),
					type: 'secondary',
				},
				{
					children: (
						<Fragment>
							{t('Next') as string}
							<Icon code='navigate_next' color={color_white} />
						</Fragment>
					),
					link: {
						to: `../2`,
					},
					type: 'primary',
				},
			]}
			current={1}
			title={t('Create your Password Manager')}
		>
			<Cards
				cards={[
					{
						image: {
							src: head,
							alt: 'Head with gears',
						},
						description: t(
							'Save here all your passwords, data or any information, forget paper notes and unprotected applications.'
						),
					},
					{
						image: {
							src: safe,
							alt: 'Safe and padlock',
						},
						description: t(
							'Create your master key: only you can access your secrets with it.'
						),
					},
				]}
				className={styles.cards}
			/>
			<p className={styles.texts}>
				<b>{t('How does it work') as string}</b>
				{
					t(
						'First of all, you need to create a different password for your electronic belongings. You will not be able to recover your password, so remember it well.'
					) as string
				}
			</p>
			<p className={styles.texts}>
				<b>{t('What data can you save') as string}</b>
				{
					t(
						'For example, your card number, the PIN and PUK of your mobile phone, the serial number of one of your devices or any information you need to have in a safe place.'
					) as string
				}
			</p>
		</Stepper>
	)
}
