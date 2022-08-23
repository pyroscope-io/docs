import React from 'react';
import HeadSection from './HeadSection';
import styles from './styles.module.scss';

const HomePage = () => {
    return (
        <div className={styles.pageLayout}>
            <HeadSection />
        </div>
    )
}

export default HomePage;