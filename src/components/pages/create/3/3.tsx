import React, { FC, Fragment } from 'react'
import { color_primary } from '../../../../styles/theme'
import { Banner } from '../../../atoms/banner/banner'
import { Icon } from '../../../atoms/icon/icon'
import { Stepper } from '../../../templates/stepper/stepper'
import { useSearchParams } from 'react-router-dom'
import { TBanner } from '../../../atoms/banner/banner.types'

export const Three: FC = () => {
	let [searchParams] = useSearchParams()

	const bannerProps: TBanner =
		searchParams.get('status') === 'success'
			? {
					description:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh.',
					title: 'Tu Password Manager ya está creado!',
					type: 'success',
			  }
			: {
					description:
						'No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde.',
					title: 'Ha habido un error',
					type: 'error',
			  }
	const buttonProps =
		searchParams.get('status') === 'success'
			? {
					children: (
						<Fragment>
							Acceder
							<Icon code='navigate_next' color={color_primary} />
						</Fragment>
					),
			  }
			: {
					children: (
						<Fragment>
							Volver a Password Manager
							<Icon code='navigate_next' color={color_primary} />
						</Fragment>
					),
			  }

	return (
		<Stepper
			head={{
				title: 'Password Manager | Proceso finalizado',
			}}
			buttons={[
				{
					...buttonProps,
					link: {
						to: '/',
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
