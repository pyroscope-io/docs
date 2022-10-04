import React, { useState } from 'react';
import clsx from 'clsx';
import Head from './Head';
import TheCloudAdvantage from './TheCloudAdvantage';
import Footer from '../shared/Footer';
import styles from './styles.module.scss';
import { Helmet } from "react-helmet";


const PricingPage = () => {
    const [isOpenMenu, setIsOpen] = useState(false);

    return (
        <>
            <Helmet>
                <title>Pricing Pyroscope | Open Source Continuous Profiling Platform</title>
                <meta name="description" content='Pricing Pyroscope | Open Source Continuous Profiling Platform' />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preload" href="/static/fonts/Sen-Regular.woff" as="font" type="font/woff2" crossorigin></link>
                <link rel="preload" href="/static/fonts/Sen-Bold.woff" as="font" type="font/woff2" crossorigin></link>
            </Helmet>
            <div className={clsx(styles.forceLightTheme, {
                [styles.pageLayout]: true,
                [styles.hidden]: isOpenMenu
            })}>
                <Head isOpenMenu={isOpenMenu} setIsOpen={setIsOpen} />
                <TheCloudAdvantage />
                <Footer />
            </div>
        </>
    )
}

export default PricingPage;