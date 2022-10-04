import React, { useState } from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from './styles.module.scss';

const HeaderMenu = ({ menuItems }) => {
    return (
        <div className={styles.menu}>
            {menuItems.map((i) => <MenuItem
                key={i.label}
                label={i.label}
                url={i.url}
                items={i?.items}
            />)}
        </div>
    )
}

const MenuItem = ({ label, url, items }) => {
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
                    <a href={i.url} className={styles.menuDropdownItem} key={i.label}>{i.label}</a>
                ))}</div>
            </div>
        )
    }
    return (
        <a href={url} className={styles.menuItem}>{label}</a>
    )
}

export default HeaderMenu;