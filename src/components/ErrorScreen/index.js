import React from 'react'
import styles from './errorscreen.module.css'


export default function ErrorScreen({ error }) {
	return (
		<h1 className={styles.errorscreen}>{error}</h1>
	)
}
