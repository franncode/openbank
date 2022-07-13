import { ReactNode } from 'react'

export type TInput = {
	className?: string
	label?: ReactNode
	name?: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: string
	value: string
	width?: string
}
