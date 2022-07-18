import { DetailedHTMLProps, ReactNode } from 'react'
import { TIcon } from '../icon/icon.types'

export type TInput = DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	className?: string
	error?: string
	icon?: TIcon
	label?: ReactNode
}
