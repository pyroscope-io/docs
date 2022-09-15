import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Logo from '../Logo';

export const ToggleMenuButton = ({ onClick }) => (
    <button onClick={onClick} className={styles.toggleButton}>
        <FontAwesomeIcon size='2x' icon={faBars} />
    </button>
)

export const MobileMenu = ({ toggleMenu, isOpenMenu, menuItems }) => {
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
                    {menuItems.map((i) => (
                        <MobileMenuItem
                            key={i.label}
                            url={i.url}
                            label={i.label}
                            items={i?.items}
                        />
                    ))}
                </div>
            </div>
        </Drawer>
    )
}

const MobileMenuItem = ({ label, url, items }) => {
    return (
        <div className={styles.mobileMenuItem}>
            <a href={url}>{label}</a>
            {items?.length ?
                <div>
                    {items.map((i) => (
                        <div className={styles.innerItem} key={i.label}>
                            <a href={i.url}>
                                {i.label}
                            </a>
                        </div>
                    ))}
                </div>
                : null}
        </div>
    )
}