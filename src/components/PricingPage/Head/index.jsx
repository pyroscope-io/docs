import React from 'react';
import HeaderMenu from '../../shared/HeaderMenu';
import SectionWrapper from '../../shared/SectionWrapper';
import Logo from '../../shared/Logo';
import GetStartedButton from '../../shared/GetStartedButton';
import { ToggleMenuButton, MobileMenu } from '../../shared/HeaderMenuMobile'
import styles from './styles.module.scss';

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

const Head = ({ isOpenMenu, setIsOpen }) => {
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
                        <GetStartedButton />
                    </div>
                    <ToggleMenuButton onClick={() => setIsOpen((prevState) => !prevState)} />
                </div>

            </div>
        </SectionWrapper>
    )
}

export default Head;