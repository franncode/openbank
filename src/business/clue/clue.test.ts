import { clue } from './clue'

describe('Business logic: Clue', () => {
	const validClue = 'This is a clue'

	test('Maximum 255 characters', () => {
		expect(validClue.length).toBeLessThanOrEqual(255)
		expect(clue.respect(validClue)).toBe(true)

		const invalidClue =
			'Ten en cuenta que toda inversión en mercados financieros está sujeta a fluctuaciones del mercado y a determinados riesgos, incluido el riesgo de pérdida del principal invertido y/o de ausencia de rentabilidad. Las rentabilidades pasadas no representan un indicador fiable de resultados futuros.'
		expect(clue.respect(invalidClue)).toBe(false)
	})
})
