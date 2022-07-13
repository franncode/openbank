import React from 'react'
import { FC, Fragment } from 'react'
import styles from './blank.module.scss'
import { Head } from '../../atoms/head/head'
import { TBlank } from './blank.types'

export const Blank: FC<TBlank> = ({ children, head }) => (
	<Fragment>
		<Head {...head} />
		<main className={styles.blank}>{children}</main>
	</Fragment>
)
