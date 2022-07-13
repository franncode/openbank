import React from 'react'
import { FC, Fragment } from 'react'
import { Steps } from '../../atoms/steps/steps'
import { TStepper } from './stepper.types'
import styles from './stepper.module.scss'
import { Button } from '../../atoms/button/button'
import { Head } from '../../atoms/head/head'

export const Stepper: FC<TStepper> = ({
	buttons,
	children,
	current,
	head,
	title,
}) => (
	<Fragment>
		<Head {...head} />
		<Steps
			current={current}
			steps={[
				{
					number: 1,
				},
				{
					number: 2,
				},
				{
					number: 3,
				},
			]}
		/>
		<main className={styles.stepper}>
			<section className={styles.body}>
				{title && (
					<div className={styles.top}>
						<h1 className={styles.title}>{title}</h1>
						<hr className={styles.line} />
					</div>
				)}
				{children}
				<hr className={styles.divider} />
				<span
					className={`${styles.buttons} ${
						buttons.length === 1 && styles.buttons__one
					}`}
				>
					{buttons.map((button, index) => (
						<Button className={styles.button} key={index} {...button} />
					))}
				</span>
			</section>
		</main>
	</Fragment>
)
