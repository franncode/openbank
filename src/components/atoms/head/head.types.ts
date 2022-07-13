export type OpenGraphType = {
	description: string
	link: string
	picture?: string
}

export type THead = {
	description?: string
	openGraph?: OpenGraphType
	title?: string
}
