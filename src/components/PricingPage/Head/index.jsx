import React from 'react';
import HeaderMenu from '../../shared/HeaderMenu';
import SectionWrapper from '../../shared/SectionWrapper';
import Logo from '../../shared/Logo';
import GetStartedButton from '../../shared/GetStartedButton';
import { ToggleMenuButton, MobileMenu } from '../../shared/HeaderMenuMobile'
import styles from './styles.module.scss';
import clsx from 'clsx';
import OpensourceIcon from '/img/pricing/plan_icon_opensource.svg';
import CloudIcon from '/img/pricing/plan_icon_cloud.svg';
import LightCircle from '/img/pricing/light_medium_circle.svg';
import BgSphere from '/img/homepage/sphere.svg';
import BgEllipse from '/img/pricing/light_ellipse_header.svg';
import LeftPath from '/img/pricing/path84.svg';
import RightPath from '/img/pricing/path85.svg';

const headerMenuItems = [
    {
        label: 'Docs',
        url: '/docs/'
    },
    {
        label: 'Pricing',
        url: '/pricing/'
    },
    {
        label: 'Demo',
        url: 'https://demo.pyroscope.io/'
    },
    {
        label: 'Community',
        items: [{
            label: 'Slack',
            url: '/slack/'
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
        url: '/blog/'
    },
]

const Head = ({ isOpenMenu, setIsOpen }) => {
    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <LightCircle className={styles.lightCircle} />
            <BgEllipse className={styles.bgEllipse} />
            <LeftPath className={styles.leftPath} />
            <RightPath className={styles.rightPath} />
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
                        <GetStartedButton />
                    </div>
                    <ToggleMenuButton onClick={() => setIsOpen((prevState) => !prevState)} />
                </div>
                <h1 className={styles.pageTitle}>
                    <span className={styles.titleGradient}>Simple </span> and <span className={styles.titleGradient}>Predictable Pricing</span> <br />for Business of any Size
                </h1>
                <p className={styles.choosePlanCaption}>
                    Choose between one of two versions:<br /> <span className={styles.bold}>Open Source</span> or <span className={styles.bold}>Cloud</span>
                </p>
                <div className={styles.plans}>
                    <div className={clsx([styles.plan, styles.oss])}>
                        <OpensourceIcon />
                        <h3 className={clsx([styles.planName, styles.oss])}>
                            Open Source
                        </h3>
                        <p className={clsx([styles.planDescription, styles.oss])}>
                            Leading continuous profiling database optimized for throughput and minimizing storage costs.
                        </p>
                        <a href="/downloads/" className={clsx([styles.chooseButton, styles.oss])}>Download</a>
                    </div>
                    <div className={clsx([styles.plan, styles.cloud])}>
                        <BgSphere className={styles.bgSphere} />
                        <div className={styles.recommended}>RECOMMENDED</div>
                        <CloudIcon />
                        <h3 className={clsx([styles.planName, styles.cloud])}>
                            Cloud
                        </h3>
                        <p className={clsx([styles.planDescription, styles.cloud])}>
                            Hosted and fully–managed version of Pyroscope, designed for all your deployment and business needs.
                            Horizontally scalable and with first-class support for high cardinality data.
                        </p>
                        <a target="_blank" className={clsx([styles.chooseButton, styles.cloud])} href="https://pyroscope.cloud/signup">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        </SectionWrapper >
    )
}

export default Head;
