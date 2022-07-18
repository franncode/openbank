import React from 'react'
import { FC } from 'react'
import { TButton } from './button.types'
import styles from './button.module.scss'
import { Link } from 'react-router-dom'

export const Button: FC<TButton> = ({
	className,
	children,
	link,
	variant = 'primary',
	...props
}) => {
	if (link) {
		return (
			<Link
				className={`${styles.button} ${
					styles[`button__${variant}`]
				} ${className}`}
				{...link}
			>
				{children}
			</Link>
		)
	} else {
		return (
			<button
				className={`${styles.button} ${
					styles[`button__${variant}`]
				} ${className}`}
				{...props}
			>
				{children}
			</button>
		)
	}
}
