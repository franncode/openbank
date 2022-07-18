import React from 'react'
import { FC } from 'react'
import { TInput } from './input.types'
import styles from './input.module.scss'
import { Icon } from '../icon/icon'

export const Input: FC<TInput> = ({
	className,
	error,
	icon,
	label,
	...inputProps
}) => (
	<label className={`${styles.label} ${className}`}>
		{label}
		<span className={styles.box}>
			<input className={styles.input} {...inputProps} />
			{icon && <Icon {...icon} />}
		</span>
		{error && <p className={styles.error}>{error}</p>}
	</label>
)
