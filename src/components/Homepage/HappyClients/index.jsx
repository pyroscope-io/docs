import React from 'react';
import styles from './styles.module.scss';

const HappyClients = () => {
    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.section}>
                <h2 className={styles.title}>Our Happy Clients</h2>
                <p className={styles.description}>Join these industry leaders who have added Pyroscope to their observability suite</p>
                <div className={styles.logoList}>
                    <img src='/img/homepage/Google_logo.svg' />
                    <img src='/img/homepage/Microsoft_logo.svg' />
                    <img src='/img/homepage/Google_logo.svg' />
                    <img src='/img/homepage/Microsoft_logo.svg' />
                </div>
            </div>
        </div>
    )
}

export default HappyClients;