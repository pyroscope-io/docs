import React from 'react';
import styles from './styles.module.scss';
import LogoIcon from '/img/logo-v3.svg'

const Logo = () => (
    <div className={styles.headerLogoWrapper}>
        <a href='/'>
            <LogoIcon />
            <span className={styles.appName}>Pyroscope</span>
        </a>
    </div>
)

export default Logo;