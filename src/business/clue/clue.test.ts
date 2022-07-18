import { clue } from './clue'

describe('Business logic: Clue', () => {
	const validClue = 'This is a clue'
	const validResponse = { ok: true }

	test('Maximum 255 characters', () => {
		expect(validClue.length).toBeLessThanOrEqual(255)
		expect(clue.check(validClue)).toEqual(validResponse)

		const invalidClue =
			'Ten en cuenta que toda inversión en mercados financieros está sujeta a fluctuaciones del mercado y a determinados riesgos, incluido el riesgo de pérdida del principal invertido y/o de ausencia de rentabilidad. Las rentabilidades pasadas no representan un indicador fiable de resultados futuros.'
		expect(clue.check(invalidClue)).toEqual({
			error: 'Maximum 255 characters',
			ok: false,
		})
	})
})
