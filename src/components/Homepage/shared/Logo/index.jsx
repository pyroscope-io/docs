import React from 'react';
import styles from './styles.module.scss';

const Logo = () => (
    <div className={styles.headerLogoWrapper}>
        <a href='#'>
            <img src='/img/logo-v3-small.png' />
            <span className={styles.appName}>Pyroscope</span>
        </a>
    </div>
)

export default Logo;