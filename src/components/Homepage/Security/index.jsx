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

const SecuritySection = () => {
    return (
        <div className={styles.sectionWrapper}>

            <div className={styles.section}>
                <div className={styles.background} />
                <BgRing className={styles.bgRing} />
                <BgSphere className={styles.bgSphere} />
                <BgEllipse className={styles.bgEllipse} />
                <div className={styles.cols}>
                    <div className={styles.left}>
                        <div className={styles.regulators}>
                            <img src='/img/homepage/vanta.png' />
                            <img src='/img/homepage/gdpr.png' />
                        </div>
                        <h2 className={styles.title}>Security & Privacy</h2>
                        <p className={styles.description}>Protecting your information and privacy is our top<br />priority. We are dedicated to keeping your replay<br />sessions secure at all times</p>
                        <button className={styles.learnMore}>Learn more<FontAwesomeIcon size='lg' icon={faLongArrowAltRight} /></button>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.features}>
                            <Feature image={SamlIcon} caption={`SAML / SSO\nIntegration`} />
                            <Feature image={EncryptionIcon} caption={`Encryption at Rest\n& In-Transit`} />
                        </div>
                        <div className={styles.features}>
                            <Feature image={MultifactorIcon} caption={`Multi Factor\nAuthentication`} />
                            <Feature image={ThreatMonitoringIcon} caption={`Intelligent Threat\nMonitoring`} />
                        </div>
                        <div className={styles.features}>
                            <Feature image={AccessControlIcon} caption={`Least Privilege\nAccess Control`} />
                            <Feature image={SecureNetworkIcon} caption={`Secure Architecture\n/Network Design`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Feature = ({ image: Image, caption }) => (
    <div className={styles.feature}>
        <Image />
        <div className={styles.caption}>{caption}</div>
    </div>
)

export default SecuritySection;