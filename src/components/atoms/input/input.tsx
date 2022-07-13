import React from 'react'
import { FC } from 'react'
import { TInput } from './input.types'
import styles from './input.module.scss'

export const Input: FC<TInput> = ({
	className,
	label,
	name,
	onChange,
	placeholder,
	type = 'text',
	value,
	width,
}) => (
	<label className={`${styles.label} ${className}`} style={{ width }}>
		{label}
		<input
			className={styles.input}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
			value={value}
		/>
	</label>
)
