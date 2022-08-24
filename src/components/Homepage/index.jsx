import React from 'react';
import HeadSection from './HeadSection';
import HappyClients from './HappyClients';
import styles from './styles.module.scss';

const HomePage = () => {
    return (
        <div className={styles.pageLayout}>
            <HeadSection />
            <HappyClients />
        </div>
    )
}

export default HomePage;