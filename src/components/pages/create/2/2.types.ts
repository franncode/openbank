export type TState = {
	clue: {
		error?: string
		value: string
	}
	first: {
		error?: string
		show: boolean
		value: string
	}
	second: {
		error?: string
		show: boolean
		value: string
	}
	status: 'disabled' | 'idle' | 'loading'
}

export enum ActionType {
	SET_CLUE_VALUE = 'SET_CLUE_VALUE',
	SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE',
	SET_STATUS_VALUE = 'SET_STATUS_VALUE',
	SWITCH_SHOW_PASSWORD = 'SWITCH_SHOW_PASSWORD',
}

export type TAction =
	| {
			type: ActionType.SET_CLUE_VALUE
			payload: {
				value: string
			}
	  }
	| {
			type: ActionType.SET_PASSWORD_VALUE
			payload: {
				error?: string
				name: 'first' | 'second'
				value: string
			}
	  }
	| {
			type: ActionType.SWITCH_SHOW_PASSWORD
			payload: {
				name: 'first' | 'second'
			}
	  }
	| {
			type: ActionType.SET_STATUS_VALUE
			payload: {
				value: 'idle' | 'loading' | 'disabled'
			}
	  }
