import React from 'react';
import HeadSection from './HeadSection';
import HappyClients from './HappyClients';
import Explore from './Explore';
import Integrations from './Integrations';
import Security from './Security';
import styles from './styles.module.scss';

const HomePage = () => {
    return (
        <div className={styles.pageLayout}>
            <HeadSection />
            <HappyClients />
            <Explore />
            <Integrations />
            <Security />
        </div>
    )
}

export default HomePage;