import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CodeExamples from './CodeExamples';
import SectionWrapper from '../shared/SectionWrapper';
import BgRing from '/img/homepage/ring1.svg';
import BgSphere from '/img/homepage/sphere.svg';

const ExploreSection = () => {
    return (
        <>
            <SectionWrapper className={styles.sectionWrapper}>
                <div className={styles.section}>
                    <div className={styles.background} />
                    <h2 className={styles.sectionTitle}>
                        <span className={styles.gradient}>Explore High-Cardinality</span> profiling<br />data that scales with your needs
                    </h2>
                    <div className={styles.row}>
                        <Features />
                        <Image />
                    </div>
                    <h2 className={clsx([styles.sectionTitle, styles.bottomTitle])}>
                        <span className={styles.gradient}>Analyze application performance</span> profiles<br />using our suite of profiling tools
                    </h2>
                    <CodeExamples />
                    <div className={styles.stripes}>
                        <div className={styles.blueStripe} />
                        <div className={styles.orangeStripe} />
                    </div>
                    <div className={styles.blueBall} />
                </div>
            </SectionWrapper>
            <SectionWrapper className={styles.sectionWrapper}>
                <div className={clsx([styles.section, styles.center])}>
                    <BgRing className={styles.bgRing} />
                    <BgSphere className={styles.bgSphere} />
                    <ProfilingFeatures />
                </div>
            </SectionWrapper>
        </>
    )
}

const Features = () => (
    <div className={styles.features}>
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

const Image = () => (
    <div className={styles.image}>
        <img alt="Terminal Window" className={styles.terminalWindow} src='/img/homepage/Group_147.svg' />
    </div>
)

const ProfilingFeatures = () => (
    <div className={styles.profilingFeatures}>
        <div className={styles.leftSide}>
            <div className={styles.columnSection}>
                <h3 className={styles.subsectTitle}>
                    Whole-system <br />Continuous profiling
                </h3>
                <p className={styles.subsectDescription}>Understand usage of CPU and memory resources at <br />any point in time and identify performance issue <br />before your customer do</p>
            </div>
            <div className={clsx([styles.columnSection, styles.mobileVersion])}>
                <h3 className={styles.subsectTitle}>
                    Adhoc Profiling Scrips
                </h3>
                <p className={styles.subsectDescription}>Collect, store, and analyze profiles from various < br />external profiling tools in one central location</p>
            </div>
            <div className={styles.columnSection}>
                <h3 className={styles.subsectTitle}>
                    Profile Exemplars
                </h3>
                <p className={styles.subsectDescription}>Link yo your Open Telemetry tracing data and Get <br />request-specific or span-specific profiles to enhance <br />other observability data like traces and logs</p>
            </div>
        </div>
        <div className={styles.centerSide}>
            <img alt="Whole-system Continuous profiling" src='/img/homepage/icon-cpu.png' />
            <img alt="Adhoc Profiling Scrips" src='/img/homepage/icon-exemplar.png' />
            <img alt="Profile Exemplars" src='/img/homepage/icon-profiling.png' />
        </div>
        <div className={styles.rightSide}>
            <div className={styles.columnSection}>
                <h3 className={styles.subsectTitle}>
                    Adhoc Profiling Scrips
                </h3>
                <p className={styles.subsectDescription}>Collect, store, and analyze profiles from various < br />external profiling tools in one central location</p>
            </div>
        </div>
    </div>
)

export default ExploreSection;
