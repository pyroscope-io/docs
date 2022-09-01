import React from 'react';
import styles from './styles.module.scss';
import Logo from '../shared/Logo';
import ContactUsImage from '/img/homepage/contact-us.svg';
import SectionWrapper from '../shared/SectionWrapper';

const Footer = () => {
    return (
        <SectionWrapper>
            <HelpUsBanner />
            <div className={styles.section}>
                <div className={styles.row}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>
                    <div className={styles.links}>
                        <div className={styles.linksColumn}>
                            <div className={styles.columnTitle}>Docs</div>
                            <a className={styles.pageLink} href='#'>Getting Started</a>
                            <a className={styles.pageLink} href='#'>Downloads</a>
                            <a className={styles.pageLink} href='#'>Deployment Guide</a>
                            <a className={styles.pageLink} href='#'>Schedule a demo call</a>
                        </div>
                        <div className={styles.linksColumn}>
                            <div className={styles.columnTitle}>Community</div>
                            <a className={styles.pageLink} href='#'>Slack</a>
                            <a className={styles.pageLink} href='#'>Twitter</a>
                            <a className={styles.pageLink} href='#'>Github</a>
                            <a className={styles.pageLink} href='#'>Contribute</a>
                            <a className={styles.pageLink} href='#'>Roadmap</a>
                            <a className={styles.pageLink} href='#'>Merch</a>
                        </div>
                        <div className={styles.linksColumn}>
                            <div className={styles.columnTitle}>More</div>
                            <a className={styles.pageLink} href='#'>Blog</a>
                            <a className={styles.pageLink} href='#'>Carreers</a>
                            <a className={styles.pageLink} href='#'>Privacy Policy</a>
                            <a className={styles.pageLink} href='#'>Contact Us</a>
                            <a className={styles.pageLink} href='#'>Status Page</a>
                        </div>
                    </div>

                </div>
                <div className={styles.copyRight}>Copyright © 2020 – 2022  Pyroscope, Inc</div>
            </div>
        </SectionWrapper>
    )
}

const HelpUsBanner = () => (
    <div className={styles.banner}>
        <ContactUsImage />
        <h3 className={styles.title}>Help us build the future of observability <br />for serverless</h3>
        <button className={styles.joinPrivateBeta}>Join Private Beta</button>
    </div>
)

export default Footer;