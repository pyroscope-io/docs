import React, { useState } from 'react';
import HeadSection from './HeadSection';
import HappyClients from './HappyClients';
import Explore from './Explore';
import Integrations from './Integrations';
import Security from './Security';
import WhatTheySay from './WhatTheySay';
import Footer from './Footer';
import styles from './styles.module.scss';
import { Helmet } from "react-helmet";
import clsx from 'clsx';

const HomePage = () => {
    const [isOpenMenu, setIsOpen] = useState(false);

    return (
        <>
            <Helmet>
                <meta name="description" content='Pyroscope - Open Source Continuous Profiling' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preload" href="/static/fonts/Sen-Regular.woff" as="font" type="font/woff2" crossorigin></link>
                <link rel="preload" href="/static/fonts/Sen-Bold.woff" as="font" type="font/woff2" crossorigin></link>
            </Helmet>
            <div className={clsx({
                [styles.pageLayout]: true,
                [styles.hidden]: isOpenMenu
            })}>
                <HeadSection isOpenMenu={isOpenMenu} setIsOpen={setIsOpen} />
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