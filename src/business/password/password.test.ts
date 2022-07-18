import { password } from './password'

describe('Business logic: Password', () => {
	const validPassword = 'QWERTYuiopasdfghjklzx123'
	const validResponse = {
		ok: true,
		error: undefined,
	}

	test('Password and confirmation must be the same', () => {
		const confirmationPassword = 'QWERTYuiopasdfghjklzx123'
		expect(password.arSame(validPassword, confirmationPassword)).toEqual(
			validResponse
		)

		const invalidPassword = 'QWERTYuiopasdfghj123'
		expect(password.arSame(validPassword, invalidPassword)).toEqual({
			error: 'Password and confirmation must be the same',
			ok: false,
		})
	})

	test('8 caracteres minimum password length', () => {
		expect(validPassword.length).toBeGreaterThanOrEqual(8)
		expect(password.check(validPassword)).toEqual(validResponse)

		const invalidPassword = 'QWERTY'
		expect(password.check(invalidPassword)).toEqual({
			error: 'Password must be at least 8 characters long',
			ok: false,
		})
	})

	test('24 caracteres maximum password length', () => {
		expect(validPassword.length).toBeLessThanOrEqual(24)
		expect(password.check(validPassword)).toEqual(validResponse)

		const invalidPassword = 'QWERTYuiopasdfghjklzx123QWERTYuiopasdfghjklzx123'
		expect(password.check(invalidPassword)).toEqual({
			error: 'Password must be at most 24 characters long',
			ok: false,
		})
	})

	test('At least one number', () => {
		expect(validPassword.match(/[0-9]/)).toBeTruthy()
		expect(password.check(validPassword)).toEqual(validResponse)

		const invalidPassword = 'QWERTYuiopasdfghjklzx'
		expect(password.check(invalidPassword)).toEqual({
			error: 'Password must contain at least one number',
			ok: false,
		})
	})

	test('At least one uppercase letter', () => {
		expect(validPassword.match(/[A-Z]/)).toBeTruthy()
		expect(password.check(validPassword)).toEqual(validResponse)

		const invalidPassword = 'qwertyuiop123jklzx'
		expect(password.check(invalidPassword)).toEqual({
			error: 'Password must contain at least one uppercase letter',
			ok: false,
		})
	})
})
