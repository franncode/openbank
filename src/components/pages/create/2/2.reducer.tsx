import { business } from '../../../../business/business'
import { ActionType, TAction, TState } from './2.types'

export const initialState: TState = {
	clue: {
		error: '',
		value: '',
	},
	first: {
		error: '',
		show: false,
		value: '',
	},
	second: {
		error: '',
		show: false,
		value: '',
	},
	status: 'disabled',
}

export const reducer = (draft: TState, action: TAction): void => {
	const { payload, type } = action

	switch (type) {
		case ActionType.SET_CLUE_VALUE:
			const isRespectClue = business.clue.check(payload.value)

			if (isRespectClue.ok) {
				draft.clue.error = ''
				draft.clue.value = payload.value
			} else {
				draft.clue.error = isRespectClue.error
			}
			break

		case ActionType.SET_PASSWORD_VALUE:
			const { name, value } = payload
			const isRespectPassword = business.password.check(value)
			const areSamePassword = business.password.arSame(
				name === 'first' ? value : draft.first.value,
				name === 'second' ? value : draft.second.value
			)

			if (isRespectPassword.ok) {
				draft[name].error = ''
			} else {
				draft[name].error = isRespectPassword.error
				draft.status = 'disabled'
			}

			if (areSamePassword.ok) {
				draft.second.error = ''
			} else {
				if (draft.second.value && value) {
					draft.second.error = areSamePassword.error
				}
			}

			if (isRespectPassword.ok && areSamePassword.ok) {
				draft.status = 'idle'
			} else {
				draft.status = 'disabled'
			}

			draft[name].value = value
			break

		case ActionType.SWITCH_SHOW_PASSWORD:
			draft[payload.name].show = !draft[payload.name].show
			break

		case ActionType.SET_STATUS_VALUE:
			draft.status = payload.value
			break

		default:
			break
	}
}
