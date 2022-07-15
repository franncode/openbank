import { DetailedHTMLProps } from 'react'

export type TIcon = DetailedHTMLProps<
	React.HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
> & {
	code: string
	color?: string
}
