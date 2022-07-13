import React, { FC } from 'react'
import { Card } from '../../atoms/card/card'
import { TCards } from './cards.types'
import styles from './cards.module.scss'

export const Cards: FC<TCards> = ({ cards, className }) => (
	<section className={`${styles.cards} ${className}`}>
		{cards.map((card) => (
			<Card
				description={card.description}
				image={card.image}
				key={card.description}
			/>
		))}
	</section>
)
