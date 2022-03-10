import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import tstyles from '../TerminalRow/styles.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faServer, faHdd, faMicrochip, faMemory } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";


export default function({url, icon, title, color}) {
  return <a
    className={clsx(styles.integrationButton, styles[color])}
    title={title}
    href={url}
    target="_blank"
  >
    <FontAwesomeIcon className={styles.icon} icon={icon} size="2x" />
    <span>{title}</span>
  </a>
};
