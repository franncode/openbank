// Rules:

import { TBusinessRule } from '../business.types'

// Maximum 255 characters
const check = (clue: string): TBusinessRule =>
	clue.length <= 255
		? { ok: true }
		: {
				ok: false,
				error: 'Maximum 255 characters',
		  }

export const clue = {
	check,
}
