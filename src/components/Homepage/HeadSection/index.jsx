import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import clsx from 'clsx';
import Logo from '../shared/Logo';
import SectionWrapper from '../shared/SectionWrapper';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

const headerMenuItems = [{
    label: 'Docs',
    items: [{
        label: 'Getting Started'
    }, {
        label: 'Downloads'
    }, {
        label: 'Deployment Guide'
    }, {
        label: 'Schedule a demo call'
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

const HeadSection = ({ isOpenMenu, setIsOpen }) => {
    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <MobileMenu
                isOpenMenu={isOpenMenu}
                toggleMenu={() => setIsOpen((prevState) => !prevState)}
            />
            <div className={styles.section}>
                <div className={styles.sectionBackground} />
                <div className={styles.header}>
                    <Logo />
                    <div className={styles.menu}>
                        {headerMenuItems.map((i) => <MenuItem
                            key={i.label}
                            label={i.label}
                            items={i?.items}
                        />)}
                    </div>
                    <GetStarted />
                    <button onClick={() => setIsOpen((prevState) => !prevState)} className={styles.mobileMenuButton}>
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
                        <img alt='Pyroscope' src='/img/homepage/image-hero@2x.svg' />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

const MobileMenu = ({ toggleMenu, isOpenMenu }) => {
    return (
        <Drawer
            open={isOpenMenu}
            onClose={toggleMenu}
            direction='top'
            size={'100%'}
            className={styles.drawer}
            duration={200}
        >
            <div className={styles.mobileMenuBody}>
                <div className={styles.logo}>
                    <Logo />
                    <FontAwesomeIcon
                        onClick={toggleMenu}
                        size='2x'
                        icon={faTimes}
                        mask={['fal']}
                    />
                </div>
                <div className={styles.menuList}>
                    {headerMenuItems.map((i) => (
                        <MobileMenuItem
                            key={i.label}
                            label={i.label}
                            items={i?.items}
                        />
                    ))}
                </div>
            </div>
        </Drawer>
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

const MobileMenuItem = ({ label, items }) => {
    return (
        <div className={styles.mobileMenuItem}>
            <a href='#'>{label}</a>
            {items?.length ?
                <div className={styles.innerList}>
                    {items.map((i) => (
                        <div className={styles.innerItem} key={i.label}>
                            <a href='#'>
                                {i.label}
                            </a>
                        </div>
                    ))}
                </div>
                : null}
        </div>
    )
}

export default HeadSection;
