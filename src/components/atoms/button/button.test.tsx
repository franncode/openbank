import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button } from './button'
import { TButton } from './button.types'
import { MemoryRouter } from 'react-router-dom'

describe('<Banner />', () => {
	const propsWithClick: TButton = {
		children: 'Delete',
		onClick: jest.fn(),
		variant: 'primary',
	}
	const propsWithLink: TButton = {
		children: 'Go to login',
		link: { to: '/login' },
		variant: 'secondary',
	}

	it('should render label', () => {
		render(<Button {...propsWithClick} />)

		const button = screen.getByRole('button')

		expect(button).toHaveTextContent(propsWithClick.children as string)
	})

	it('should have been called onClick', () => {
		render(<Button {...propsWithClick} />)

		const button = screen.getByRole('button')
		button.click()

		expect(propsWithClick.onClick).toHaveBeenCalled()
	})

	it('should not have called onClick when disabled', () => {
		render(<Button {...propsWithClick} disabled={true} />)

		const button = screen.getByRole('button')
		button.click()

		expect(propsWithClick.onClick).not.toHaveBeenCalled()
	})

	it('should render link', () => {
		render(<Button {...propsWithLink} />, { wrapper: MemoryRouter })

		const button = screen.getByRole('link')

		expect(button).toHaveTextContent(propsWithLink.children as string)
		expect(button).toHaveAttribute('href', propsWithLink.link?.to)
	})
})
