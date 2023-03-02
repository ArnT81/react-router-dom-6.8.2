import React from 'react'
import styles from './routemissing.module.css'

export default function RouteMissing() {
  return (
    <div className={styles.routemissing}>
      <div>
        <h1>404</h1>
        <h4>The Route you have entered do not exist on this application!</h4>
      </div>
    </div>
  )
}