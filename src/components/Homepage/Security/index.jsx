import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import SamlIcon from '/img/homepage/security/icon-saml.svg';
import EncryptionIcon from '/img/homepage/security/icon-encryption.svg';
import MultifactorIcon from '/img/homepage/security/icon-multifactor.svg';
import ThreatMonitoringIcon from '/img/homepage/security/icon-threat-monitoring.svg';
import AccessControlIcon from '/img/homepage/security/icon-access-control.svg';
import SecureNetworkIcon from '/img/homepage/security/icon-secure_network.svg';
import BgRing from '/img/homepage/ring1.svg';
import BgSphere from '/img/homepage/sphere.svg';
import BgEllipse from '/img/homepage/Ellipse_bg.svg';
import SectionWrapper from '../shared/SectionWrapper';

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
                            <img src='/img/homepage/vanta.png' />
                        </div>
                        <h2 className={styles.title}>Self-hosted with OSS or managed with Pyroscope Cloud</h2>
                        <p className={styles.description}>Pyroscope Cloud is perfectly suited for handling<br />the security and scalability needs of your organization</p>
                        <button className={styles.learnMore}>Learn more<FontAwesomeIcon size='lg' icon={faLongArrowAltRight} /></button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.features}>
                            <Feature image={SamlIcon} caption={<span>SAML / SSO <br />Integration</span>} />
                            <Feature image={EncryptionIcon} caption={<span>Encryption at Rest <br />& In-Transit</span>} />
                        </div>
                        <div className={styles.features}>
                            <Feature image={MultifactorIcon} caption={<span>Multi Factor <br />Authentication</span>} />
                            <Feature image={ThreatMonitoringIcon} caption={<span>Intelligent Threat <br />Monitoring</span>} />
                        </div>
                        <div className={styles.features}>
                            <Feature image={AccessControlIcon} caption={<span>Least Privilege <br />Access Control</span>} />
                            <Feature image={SecureNetworkIcon} caption={<span>Secure Architecture<br />/Network Design</span>} />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

const Feature = ({ image: Image, caption }) => (
    <div className={styles.feature}>
        <Image />
        <div className={styles.caption}>{caption}</div>
    </div>
)

export default SecuritySection;
