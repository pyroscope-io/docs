import React from 'react';
import styles from './styles.module.scss';
import SectionWrapper from '../shared/SectionWrapper';

const HappyClients = () => {
    return (
        <SectionWrapper>
            <div className={styles.section}>
                <h2 className={styles.title}>Our Happy Clients</h2>
                <p className={styles.description}>Join these industry leaders who have added Pyroscope to their observability suite</p>
                <div className={styles.logoList}>
                    <div className={styles.row}>
                        <img src='/img/homepage/Google_logo.svg' />
                        <img src='/img/homepage/Microsoft_logo.svg' />
                    </div>
                    <div className={styles.row}>
                        <img src='/img/homepage/Google_logo.svg' />
                        <img src='/img/homepage/Microsoft_logo.svg' />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HappyClients;