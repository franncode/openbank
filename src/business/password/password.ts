// Rules:

import { TBusinessRule } from '../business.types'

// Password and confirmation must be the same
const arSame = (password: string, confirmPassword: string): TBusinessRule =>
	password === confirmPassword
		? { ok: true }
		: {
				ok: false,
				error: 'Password and confirmation must be the same',
		  }

// Rules:
// 8 caracteres minimum password length
// 24 caracteres maximum password length
// At least one number
// At least one uppercase letter
const check = (password: string): TBusinessRule => {
	let error

	switch (true) {
		case password.length < 8:
			error = 'Password must be at least 8 characters long'
			break
		case password.length > 24:
			error = 'Password must be at most 24 characters long'
			break
		case !Boolean(password.match(/[A-Z]/)):
			error = 'Password must contain at least one uppercase letter'
			break
		case !Boolean(password.match(/[0-9]/)):
			error = 'Password must contain at least one number'
			break
		default:
			error = undefined
	}

	return {
		ok: error ? false : true,
		error,
	}
}

export const password = {
	arSame,
	check,
}
