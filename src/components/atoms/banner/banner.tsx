import React, { FC } from 'react'
import { TBanner } from './banner.types'
import styles from './banner.module.scss'
import error from '../../../assets/components/atoms/banner/error.svg'
import success from '../../../assets/components/atoms/banner/success.svg'
import warning from '../../../assets/components/atoms/banner/warning.svg'

export const Banner: FC<TBanner> = ({
	className,
	description,
	title,
	type,
}) => {
	const icon = {
		error,
		success,
		warning,
	}

	return (
		<section className={`${styles.banner} ${className}`}>
			<img alt={type} className={styles.image} src={icon[type]} />
			<div className={styles.texts}>
				<p className={styles.title}>{title}</p>
				<p className={styles.description}>{description}</p>
			</div>
		</section>
	)
}
