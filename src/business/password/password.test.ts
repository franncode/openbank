import { password } from './password'

describe('Business logic: Password', () => {
	const validPassword = 'QWERTYuiopasdfghjklzx123'

	test('Password and confirmation must be the same', () => {
		const confirmationPassword = 'QWERTYuiopasdfghjklzx123'
		expect(password.arSame(validPassword, confirmationPassword)).toBe(true)

		const invalidPassword = 'QWERTYuiopasdfghj123'
		expect(password.arSame(validPassword, invalidPassword)).toBe(false)
	})

	test('8 caracteres minimum password length', () => {
		expect(validPassword.length).toBeGreaterThanOrEqual(8)
		expect(password.respect(validPassword)).toBe(true)

		const invalidPassword = 'QWERTY'
		expect(password.respect(invalidPassword)).toBe(false)
	})

	test('24 caracteres maximum password length', () => {
		expect(validPassword.length).toBeLessThanOrEqual(24)
		expect(password.respect(validPassword)).toBe(true)

		const invalidPassword = 'QWERTYuiopasdfghjklzx123QWERTYuiopasdfghjklzx123'
		expect(password.respect(invalidPassword)).toBe(false)
	})

	test('At least one number', () => {
		expect(validPassword.match(/[0-9]/)).toBeTruthy()
		expect(password.respect(validPassword)).toBe(true)

		const invalidPassword = 'QWERTYuiopasdfghjklzx'
		expect(password.respect(invalidPassword)).toBe(false)
	})

	test('At least one uppercase letter', () => {
		expect(validPassword.match(/[A-Z]/)).toBeTruthy()
		expect(password.respect(validPassword)).toBe(true)

		const invalidPassword = 'qwertyuiop123jklzx'
		expect(password.respect(invalidPassword)).toBe(false)
	})
})
