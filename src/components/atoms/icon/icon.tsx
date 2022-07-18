import React, { FC } from 'react'
import { TIcon } from './icon.types'

export const Icon: FC<TIcon> = ({ className, code, color, ...spanProps }) => (
	<span
		className={`material-symbols-outlined ${className}`}
		style={{ color }}
		{...spanProps}
	>
		{code}
	</span>
)
