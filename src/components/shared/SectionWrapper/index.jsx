import React from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';

const SectionWrapper = ({ children, className }) => {
    return (
        <div className={clsx([styles.sectionWrapper, className])}>{children}</div>
    )
}

export default SectionWrapper;
