import { DetailedHTMLProps, MouseEventHandler, ReactNode } from 'react'
import { LinkProps } from 'react-router-dom'

export type TButton = DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	className?: string
	children: ReactNode
	link?: LinkProps
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined
	variant?: 'disabled' | 'loading' | 'primary' | 'secondary' | 'tertiary'
}
