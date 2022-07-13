import { ReactNode } from 'react'
import { TButton } from '../../atoms/button/button.types'
import { THead } from '../../atoms/head/head.types'

export type TStepper = {
	buttons: TButton[]
	children: ReactNode
	current: number
	head?: THead
	title?: string
}
