import React from 'react';
import styles from './styles.module.scss';

const GetStartedButton = ({ href }) => (
    <a
        href={href}
        target="_blank"
        className={styles.getStartedButton}
    >
        Get Started
    </a>
)

export default GetStartedButton;
