import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import SectionWrapper from '../../shared/SectionWrapper';

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const ShuffleChildren = ({ className, children }) => {
    let childrenArr = React.Children.toArray(children);
    shuffle(childrenArr);
    return <div className={className}>{childrenArr}</div>;
}

const HappyClients = () => {
    return (
        <SectionWrapper>
            <div className={styles.section}>
                <h2 className={styles.title}>Join industry leaders who added Pyroscope<br />to their observability stack</h2>
                <div className={styles.logoList}>
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/honeycomb.svg' alt='Honeycomb' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/sensortower.svg' alt='SensorTower' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/plaid.svg' alt="Plaid" />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/confluent.svg' alt="Confluent" />
                    <img className={clsx(styles.happyClientLogo, styles.happyClientLogoSmaller)} src='/img/homepage/logos/line.svg' alt="Line" />
                    <img className={clsx(styles.happyClientLogo, styles.happyClientLogoSmaller2)} src='/img/homepage/logos/grab.svg' alt="PingCAP" />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/polkadot.svg' alt="Polkadot" />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/snapp.svg' alt="Snapp" />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/alpaca.svg' alt="Alpaca" />
                </div>
            </div>
        </SectionWrapper>
    )
}

export default HappyClients;
