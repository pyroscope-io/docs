import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import tstyles from '../TerminalRow/styles.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faServer, faHdd, faMicrochip, faMemory } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";



export default function IndexPageCloud() {
  return <div className={tstyles.terminalWrapper}>
    <div className={clsx(tstyles.terminalBar, tstyles.grayBg)}>
      <div className={clsx(tstyles.terminalBarDot, tstyles.red)}></div>
      <div className={clsx(tstyles.terminalBarDot, tstyles.yellow)}></div>
      <div className={clsx(tstyles.terminalBarDot, tstyles.green)}></div>
    </div>
    <div className={clsx(tstyles.terminalWindow, tstyles.whiteBg)}>
      <h3>Servers:</h3>
      <div className={styles.server}>
        <div className={styles.serverLogo}></div>
        <div>
          <span className={styles.serverName}>acme-production</span>
          <span className={styles.serverStatus}> • running</span>
        </div>
        <div className={styles.serverStats}>4 CPU / 16 GB RAM / 40 GB Storage</div>
      </div>
      <div className={styles.server}>
        <div className={styles.serverLogo}></div>
        <div>
          <span className={styles.serverName}>globex-staging</span>
          <span className={styles.serverStatus}> • running</span>
        </div>
        <div className={styles.serverStats}>8 CPU / 32 GB RAM / 80 GB Storage</div>
      </div>
    </div>
  </div>
};
