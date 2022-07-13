import { MouseEventHandler, ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

export type TButton = {
	className?: string
	children: ReactNode
	link?: LinkProps
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined
	type?: 'disabled' | 'loading' | 'primary' | 'secondary' | 'tertiary'
}
