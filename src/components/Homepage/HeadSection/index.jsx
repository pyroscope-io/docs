import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Logo from '../../shared/Logo';
import SectionWrapper from '../../shared/SectionWrapper';
import GitHubButton from 'react-github-btn';
import Lottie from "lottie-react";
import frontPageAnimation from "./frontPageAnimation.json";
import HeaderMenu from '../../shared/HeaderMenu';
import GetStartedButton from '../../shared/GetStartedButton';
import { ToggleMenuButton, MobileMenu } from '../../shared/HeaderMenuMobile'

const headerMenuItems = [
    {
        label: 'Docs',
        url: '/docs'
    },
    {
        label: 'Pricing',
        url: '/pricing'
    },
    {
        label: 'Demo',
        url: 'https://demo.pyroscope.io/'
    },
    {
        label: 'Community',
        items: [{
            label: 'Slack',
            url: '/slack'
        }, {
            label: 'GitHub',
            url: 'https://github.com/pyroscope-io/pyroscope'
        }, {
            label: 'Twitter',
            url: 'https://twitter.com/pyroscopeio'
        }]
    },
    {
        label: 'Blog',
        url: '/blog'
    },
]

const HeadSection = ({ isOpenMenu, setIsOpen }) => {
    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <MobileMenu
                menuItems={headerMenuItems}
                isOpenMenu={isOpenMenu}
                toggleMenu={() => setIsOpen((prevState) => !prevState)}
            />
            <div className={styles.section}>
                <div className={styles.sectionBackground} />
                <div className={styles.header}>
                    <Logo />
                    <HeaderMenu menuItems={headerMenuItems} />
                    <div className={styles.rightSideButtons}>
                        <div className={styles.githubButtonWrapper}>
                            <GitHubButton href="https://github.com/pyroscope-io/pyroscope" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star pyroscope-io/pyroscope on GitHub">Star</GitHubButton>
                        </div>
                        <GetStartedButton />
                    </div>
                    <ToggleMenuButton onClick={() => setIsOpen((prevState) => !prevState)} />
                </div>
                <div className={styles.sectionBody}>
                    <div className={styles.bodyLeft}>
                        <h1 className={styles.appTitle}>Open Source <br />Continuous <br />Profiling</h1>
                        <div className={styles.appSubtitle}>Find and debug your most painful performance issues across code,<br /> infrastructure and CI/CD pipelines</div>
                        <div className={styles.plans}>
                            <Plan className={styles.preferred} title='Pyroscope Cloud' subTitle='Try it for free' url='https://pyroscope.cloud/signup' />
                            <Plan title='Pyroscope OSS' subTitle='Use it for free' url='https://github.com/pyroscope-io/pyroscope' />
                        </div>
                    </div>
                    <div className={styles.bodyRight}>
                        <Lottie animationData={frontPageAnimation} loop={true} />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

const Plan = ({ title, subTitle, className, url }) => (
    <a href={url} target="_blank" className={clsx(styles.plan, className)}>
        <div className={styles.planTitle}>{title}</div>
        <div className={styles.planSubtitle}>{subTitle}</div>
    </a>
)

export default HeadSection;
