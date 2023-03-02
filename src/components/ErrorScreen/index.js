import React from 'react';
import styles from './errorscreen.module.css';

const ErrorScreen = ({ error }) => <h1 className={styles.errorscreen}>{error}</h1>
export default ErrorScreen;