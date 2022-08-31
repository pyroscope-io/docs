import React from 'react';
import styles from './styles.module.scss';
import SectionWrapper from '../shared/SectionWrapper';

const HappyClients = () => {
    return (
        <SectionWrapper>
            <div className={styles.section}>
                <h2 className={styles.title}>These industry leaders profile with Pyroscope</h2>
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
