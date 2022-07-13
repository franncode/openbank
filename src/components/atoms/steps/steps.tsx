import React, { FC, Fragment } from 'react'
import { TSteps } from './steps.types'
import styles from './steps.module.scss'
import { Icon } from '../icon/icon'
import { color_white } from '../../../styles/theme'

export const Steps: FC<TSteps> = ({ current, steps }) => {
	return (
		<header className={styles.steps}>
			<ul className={styles.list}>
				{steps.map(({ number }) => {
					const isCompleted = number < current
					const isCurrent = number === current
					const isPrevious = number <= current

					return (
						<Fragment>
							{number !== 1 && (
								<li
									className={`${styles.line} ${
										isPrevious ? styles.line__completed : styles.line__previous
									}`}
								>
									<hr />
								</li>
							)}
							<li
								className={`${styles.item} ${
									isCompleted
										? styles.item__completed
										: isCurrent
										? styles.item__current
										: styles.item__previous
								}`}
								key={number}
							>
								{isCompleted ? (
									<Icon code='done' color={color_white} />
								) : (
									number
								)}
							</li>
						</Fragment>
					)
				})}
			</ul>
		</header>
	)
}
