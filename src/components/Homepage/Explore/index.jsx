import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CodeExamples from './CodeExamples';

const ExploreSection = () => {
    return (
        <div className={styles.sectionWrapper}>

            <div className={styles.section}>
                <div className={styles.background} />
                <h2 className={styles.sectionTitle}>
                    <span className={styles.gradient}>Explore High-Cardinality</span> profiling<br />data that scales with your needs
                </h2>
                <div className={styles.row}>
                    <LeftSide />
                    <RightSide />
                </div>
                <h2 className={clsx([styles.sectionTitle, styles.bottomTitle])}>
                    <span className={styles.gradient}>Explore High-Cardinality</span> profiling<br />data that scales with your needs
                </h2>
                <CodeExamples />
                <div className={clsx([styles.blueStripe, styles.left])} />
                <div className={clsx([styles.blueStripe, styles.right])} />
                <div className={clsx([styles.orangeStripe, styles.left])} />
                <div className={clsx([styles.orangeStripe, styles.right])} />
                <div className={styles.blueBall} />
            </div>



        </div>
    )
}

const LeftSide = () => (
    <div className={styles.leftSide}>
        <h3 className={styles.subsectTitle}>
            <span className={styles.gradient}>Low-overhead</span> Agents
        </h3>
        <p className={styles.subsectDescription}>let you tag  your data on the dimensions<br />important for your organization</p>
        <h3 className={styles.subsectTitle}>
            <span className={styles.gradient}>Highly-efficient</span> Storage Engine
        </h3>
        <p className={styles.subsectDescription}>Compress your profiles to store billions of profiles for x% their<br />raw size</p>
        <h3 className={styles.subsectTitle}>
            <span className={styles.gradient}>Profile-Specific</span> Query Engine
        </h3>
        <p className={styles.subsectDescription}>FlameQL enables custom queries to select and aggregate<br />profiles quickly and efficiently for easy analysis</p>
    </div>
)

const RightSide = () => (
    <div className={styles.rightSide}>
        <img className={styles.terminalWindow} src='/img/homepage/Group_147.svg' />
    </div>
)

export default ExploreSection;