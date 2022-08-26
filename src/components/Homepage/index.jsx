import React from 'react';
import HeadSection from './HeadSection';
import HappyClients from './HappyClients';
import Explore from './Explore';
import Integrations from './Integrations';
import Security from './Security';
import Footer from './Footer';
import styles from './styles.module.scss';

const HomePage = () => {
    return (
        <div className={styles.pageLayout}>
            <HeadSection />
            <HappyClients />
            <Explore />
            <Integrations />
            <Security />

            <Footer />
        </div>
    )
}

export default HomePage;