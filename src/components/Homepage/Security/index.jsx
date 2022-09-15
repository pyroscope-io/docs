import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import SamlIcon from '/img/homepage/security/icon-saml.svg';
import EncryptionIcon from '/img/homepage/security/icon-encryption.svg';
import MultifactorIcon from '/img/homepage/security/icon-multifactor.svg';
import ThreatMonitoringIcon from '/img/homepage/security/icon-threat-monitoring.svg';
import AccessControlIcon from '/img/homepage/security/icon-access-control.svg';
import SecureNetworkIcon from '/img/homepage/security/icon-secure_network.svg';
import HSIcon from '/img/homepage/security/horizontal_scalability_logo_02_3.svg';
import HSIcon2 from '/img/homepage/security/horizontal_scalability_logo_02_4.svg';
import HAIcon from '/img/homepage/security/high_availability.svg';
import UserManagementIcon from '/img/homepage/security/user_management.svg';

import BgRing from '/img/homepage/ring1.svg';
import BgSphere from '/img/homepage/sphere.svg';
import BgEllipse from '/img/homepage/Ellipse_bg.svg';
import SectionWrapper from '../../shared/SectionWrapper';

const SecuritySection = () => {
    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <div className={styles.section}>
                <div className={styles.background} />
                <BgRing className={styles.bgRing} />
                <BgSphere className={styles.bgSphere} />
                <BgEllipse className={styles.bgEllipse} />
                <div className={styles.cols}>
                    <div className={styles.left}>
                        <div className={styles.regulators}>
                            <img alt="SOC 2" src='/img/homepage/vanta.png' />
                        </div>
                        <h2 className={styles.title}>Self-hosted with OSS or managed with Pyroscope Cloud</h2>
                        <p className={styles.description}>
                            Pyroscope Cloud is perfectly suited for handling<br />
                            the security and scalability needs of your organization.
                            {/* Check out our blog post to learn<br /> which option is best for you! */}
                        </p>
                        <a href="/pricing" className={styles.learnMore}>Learn more<FontAwesomeIcon size='lg' icon={faLongArrowAltRight} /></a>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.features}>
                            <Feature image={SamlIcon} caption={<span>SAML / SSO <br />Integration</span>} />
                            <Feature image={EncryptionIcon} caption={<span>Encryption at Rest <br />& In-Transit</span>} />
                        </div>
                        <div className={styles.features}>
                            <Feature image={MultifactorIcon} caption={<span>Multi Factor <br />Authentication</span>} />
                            <Feature smaller image={HSIcon2} caption={<span>Horizontal<br/>Scalability</span>} />
                        </div>
                        <div className={styles.features}>
                            <Feature smaller image={HAIcon} caption={<span>High<br/>Availability</span>} />
                            <Feature smaller image={UserManagementIcon} caption={<span>User<br/>Management</span>} />
                        </div>
                        {/*
                            HSIcon
                            HSIcon2
                            HAIcon
                            UserManagementIcon
                        */}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

const Feature = ({ image: Image, caption, smaller }) => (
    <div className={styles.feature}>
        <div className={clsx(styles.featureImage, {[styles.featureImageSmaller]: smaller})}>
            <Image />
        </div>
        <div className={styles.caption}>{caption}</div>
    </div>
)

export default SecuritySection;
