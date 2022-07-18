import { DetailedHTMLProps } from 'react'

export type TIcon = DetailedHTMLProps<
	React.HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
> & {
	className?: string
	code: string
	color?: string
}
