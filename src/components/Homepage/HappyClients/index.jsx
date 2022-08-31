import React from 'react';
import styles from './styles.module.scss';
import SectionWrapper from '../shared/SectionWrapper';

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

const ShuffleChildren = ({className, children}) => {
    let childrenArr = React.Children.toArray(children);
    shuffle(childrenArr);
    return <div className={className}>{childrenArr}</div>;
}

const HappyClients = () => {
    return (
        <SectionWrapper>
            <div className={styles.section}>
                <h2 className={styles.title}>These industry leaders profile with Pyroscope</h2>
                <ShuffleChildren className={styles.logoList}>
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/honeycomb.svg' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/line.svg' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/pingcap.svg' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/plaid.svg' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/polkadot.svg' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/sensortower.svg' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/snapp.svg' />
                    <img className={styles.happyClientLogo} src='/img/homepage/logos/confluent.svg' />
                </ShuffleChildren>
            </div>
        </SectionWrapper>
    )
}

export default HappyClients;
