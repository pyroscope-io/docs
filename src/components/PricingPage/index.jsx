import React, { useState } from 'react';
import clsx from 'clsx';

import Head from './Head';
import TheCloudAdvantage from './TheCloudAdvantage';
import styles from './styles.module.scss';


const PricingPage = () => {
    const [isOpenMenu, setIsOpen] = useState(false);

    return (
        <div className={clsx(styles.forceLightTheme, {
            [styles.pageLayout]: true,
            [styles.hidden]: isOpenMenu
        })}>
            <Head isOpenMenu={isOpenMenu} setIsOpen={setIsOpen} />
            <TheCloudAdvantage />
        </div>
    )
}

export default PricingPage;