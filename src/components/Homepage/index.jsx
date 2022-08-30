import React from 'react';
import HeadSection from './HeadSection';
import HappyClients from './HappyClients';
import Explore from './Explore';
import Integrations from './Integrations';
import Security from './Security';
import WhatTheySay from './WhatTheySay';
import Footer from './Footer';
import styles from './styles.module.scss';
import { Helmet } from "react-helmet";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <div className={styles.pageLayout}>
                <HeadSection />
                <HappyClients />
                <Explore />
                <Integrations />
                <Security />
                <WhatTheySay />
                <Footer />
            </div>
        </>

    )
}

export default HomePage;