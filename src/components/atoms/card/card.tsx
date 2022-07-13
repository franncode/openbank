import React, { FC } from 'react'
import { TCard } from './card.types'
import styles from './card.module.scss'

export const Card: FC<TCard> = ({ description, image }) => (
	<article className={styles.card}>
		<img src={image.src} alt={image.alt} />
		<p className={styles.description}>{description}</p>
	</article>
)
