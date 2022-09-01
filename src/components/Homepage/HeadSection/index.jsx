import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';
import Logo from '../shared/Logo';
import SectionWrapper from '../shared/SectionWrapper';
import GitHubButton from 'react-github-btn';

const headerMenuItems = [{
    label: 'Docs',
    items: [{
        label: 'Menu Item 1'
    }, {
        label: 'Menu Item 2'
    }, {
        label: 'Menu Item 3'
    }]
}, {
    label: 'Community'
}, {
    label: 'Blog'
}, {
    label: 'Careers'
}, {
    label: 'Contact Us'
}]

const HeadSection = () => {
    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <div className={styles.sectionBackground} />
            <div className={styles.section}>
                <div className={styles.header}>
                    <Logo />
                    <div className={styles.menu}>
                        {headerMenuItems.map((i) => <MenuItem
                            key={i.label}
                            label={i.label}
                            items={i?.items}
                        />)}
                    </div>

                    <div className={styles.rightSideButtons}>
                        <div className={styles.githubButtonWrapper}>
                            <GitHubButton href="https://github.com/pyroscope-io/pyroscope" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star pyroscope-io/pyroscope on GitHub">Star</GitHubButton>
                        </div>
                        <GetStarted />
                    </div>
                    <button className={styles.mobileMenuButton}>
                        <FontAwesomeIcon size='2x' icon={faBars} />
                    </button>
                </div>
                <div className={styles.sectionBody}>
                    <div className={styles.bodyLeft}>
                        <h1 className={styles.appTitle}>Open Source <br />Continuous <br />Profiling</h1>
                        <div className={styles.appSubtitle}>Find and debug your most painful performance issues across code,<br /> infrastructure and CI/CD pipelines</div>
                        <div className={styles.plans}>
                            <Plan className={styles.preferred} title='Pyroscope Cloud' subTitle='Try it for free' />
                            <Plan title='Pyroscope OSS' subTitle='Try it for free' />
                        </div>
                    </div>
                    <div className={styles.bodyRight}>
                        <img src='/img/homepage/image-hero@2x.svg' />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

const Plan = ({ title, subTitle, className }) => (
    <a href="https://github.com/pyroscope-io/pyroscope" target="_blank" className={clsx(styles.plan, className)}>
        <div className={styles.planTitle}>{title}</div>
        <div className={styles.planSubtitle}>{subTitle}</div>
    </a>
)

const GetStarted = () => (
    <a href="https://pyroscope.cloud/signup" target="_blank" className={styles.getStartedButton}>Get Started</a>
)

const MenuItem = ({ label, items }) => {
    const [isOpen, toggle] = useState(false);

    if (items) {
        return (
            <div onClick={() => toggle(!isOpen)} className={styles.menuItem}>
                {label}
                <FontAwesomeIcon icon={faChevronDown} />
                <div className={clsx({
                    [styles.menuDropdown]: true,
                    [styles.opened]: isOpen
                })}>{items.map((i) => (
                    <div className={styles.menuDropdownItem} key={i.label}>{i.label}</div>
                ))}</div>
            </div>
        )
    }
    return (
        <div className={styles.menuItem}>{label}</div>
    )
}

export default HeadSection;
