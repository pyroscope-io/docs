import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import SectionWrapper from '../../shared/SectionWrapper';
import PlansTable from './PlansTable';
import SectionImage from '/img/pricing/cloud_adv.svg';
import EnterpriseIcon from '/img/pricing/cloudAdvantages/enterprise.svg'
import GetStartedIcon from '/img/pricing/cloudAdvantages/get_started.svg'
import GrowsIcon from '/img/pricing/cloudAdvantages/grows.svg'
import OperationsIcon from '/img/pricing/cloudAdvantages/operations.svg'
import PrisingIcon from '/img/pricing/cloudAdvantages/pricing.svg'

const TheCloudAdvantage = () => {
    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <div className={styles.section}>
                <div className={styles.background} />
                <h2 className={styles.sectionTitle}>
                    The Cloud Advantage
                </h2>
                <div className={styles.sectImageWrapper}>
                    <SectionImage />
                </div>
                <div className={styles.advantages}>
                    <Advantage title="Predictable pricing with no surprise" description="Pay fixed amount per month. No hidden fees or extra charges." icon={PrisingIcon} />
                    <Advantage title="Worry-free operations" description="Hosted and managed by Pyroscope team." icon={OperationsIcon} />
                    <Advantage title="Get started quickly " description="Start profiling your applications in seconds." icon={GetStartedIcon} />
                    <Advantage title="Grows with you" description="Write millions of profiles per second. Store hundreds of billions of individual profiles." icon={GrowsIcon} />
                    <Advantage title="Enterprise-ready" description="AWS PrivateLink, SOC2 compliance." icon={EnterpriseIcon} />
                </div>
                <h2 className={clsx([styles.sectionTitle, styles.comparePlans])}>
                    Compare Plans
                </h2>
                <div className={styles.stripes}>
                    <div className={styles.blueStripe} />
                    <div className={styles.orangeStripe} />
                </div>
                <p className={styles.sectionSubtitle}>
                    Start with a hobby project, collaborate with a team, and scale to thousands of applications
                </p>
                <PlansTable />
                {/* <div style={{ width: 300, height: 1500 }}>1231231</div> */}
            </div>
        </SectionWrapper>
    )
}

const Advantage = ({ title, description, icon }) => {
    const Icon = icon;
    return (
        <div className={styles.advantage}>
            <Icon className={styles.icon} />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )

}

export default TheCloudAdvantage;