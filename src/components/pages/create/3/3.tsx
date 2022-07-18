import React, { FC, Fragment } from 'react'
import { Banner } from '../../../atoms/banner/banner'
import { Icon } from '../../../atoms/icon/icon'
import { Stepper } from '../../../templates/stepper/stepper'
import { useParams, useSearchParams } from 'react-router-dom'
import { TBanner } from '../../../atoms/banner/banner.types'
import { useTranslation } from 'react-i18next'
import { theme } from '../../../../styles/theme'

export const Three: FC = () => {
	const { language } = useParams()
	const { t } = useTranslation()
	const [searchParams] = useSearchParams()
	const status = searchParams.get('status')

	const bannerProps: TBanner =
		status === 'success'
			? {
					description: t(
						'Your account has been created successfully. You can now log in.'
					),
					title: t('Your Password Manager is already created!'),
					type: 'success',
			  }
			: {
					description: t(
						'We were unable to modify your Master Password. Try again later.'
					),
					title: t('An error has occured'),
					type: 'error',
			  }
	const buttonProps =
		status === 'success'
			? {
					children: (
						<Fragment>
							{t('Log in')}
							<Icon code='navigate_next' color={theme.color.primary} />
						</Fragment>
					),
			  }
			: {
					children: (
						<Fragment>
							{t('Back to Password Manager')}
							<Icon code='navigate_next' color={theme.color.primary} />
						</Fragment>
					),
			  }

	return (
		<Stepper
			head={{
				title: `Password Manager | ${t('Ended process')}`,
			}}
			buttons={[
				{
					...buttonProps,
					link: {
						to: `/${language}`,
					},
					type: 'tertiary',
				},
			]}
			current={3}
		>
			<Banner {...bannerProps} />
		</Stepper>
	)
}
