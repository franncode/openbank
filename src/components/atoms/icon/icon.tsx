import React, { FC } from 'react'
import { TIcon } from './icon.types'

export const Icon: FC<TIcon> = ({ code, color, ...spanProps }) => (
	<span className='material-symbols-outlined' style={{ color }} {...spanProps}>
		{code}
	</span>
)
