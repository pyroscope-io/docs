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
                        <img className={styles.happyClientLogo} src='/img/homepage/logos/honeycomb.svg' />
                        <img className={styles.happyClientLogo} src='/img/homepage/logos/line.svg' />
                        <img className={styles.happyClientLogo} src='/img/homepage/logos/pingcap.svg' />
                        <img className={styles.happyClientLogo} src='/img/homepage/logos/plaid.svg' />
                    </div>
                    <div className={styles.row}>
                        <img className={styles.happyClientLogo} src='/img/homepage/logos/polkadot.svg' />
                        <img className={styles.happyClientLogo} src='/img/homepage/logos/sensortower.svg' />
                        <img className={styles.happyClientLogo} src='/img/homepage/logos/snapp.svg' />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HappyClients;
