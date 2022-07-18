import { render, screen } from '@testing-library/react'
import React from 'react'
import { Banner } from './banner'
import { TBanner } from './banner.types'

describe('<Banner />', () => {
	const types: TBanner['type'][] = ['error', 'success', 'warning']

	const props: TBanner = {
		description: 'This is a description',
		title: 'This is a title',
		type: 'success',
	}

	it('should render title and description', () => {
		render(<Banner {...props} />)

		const title = screen.getByText(props.title)
		const description = screen.getByText(props.description)

		expect(title).toBeInTheDocument()
		expect(description).toBeInTheDocument()
	})

	it('should render correct icon according to type', () => {
		types.forEach((type) => {
			const { unmount } = render(<Banner {...props} type={type} />)

			const icon = screen.getByRole('img')

			expect(icon).toHaveAttribute('alt', type)
			unmount()
		})
	})
})
