// Rules:
// Password and confirmation must be the same
const arSame = (password: string, confirmPassword: string): boolean =>
	password === confirmPassword

// Rules:
// 8 caracteres minimum password length
// 24 caracteres maximum password length
// At least one number
// At least one uppercase letter
const respect = (password: string): boolean =>
	Boolean(
		password.length >= 8 &&
			password.length <= 24 &&
			password.match(/[A-Z]/) &&
			password.match(/[0-9]/)
	)

export const password = {
	arSame,
	respect,
}
