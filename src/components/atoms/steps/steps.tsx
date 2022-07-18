import React, { FC, Fragment } from 'react'
import { TSteps } from './steps.types'
import styles from './steps.module.scss'
import { Icon } from '../icon/icon'
import { theme } from '../../../styles/theme'

export const Steps: FC<TSteps> = ({ current, steps }) => {
	return (
		<header className={styles.steps}>
			<ul className={styles.list}>
				{steps.map(({ number }) => {
					const isCompleted = number < current
					const isCurrent = number === current
					const isPrevious = number <= current

					return (
						<Fragment key={number}>
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
							>
								{isCompleted ? (
									<Icon code='done' color={theme.color.white} />
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
