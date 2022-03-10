import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faServer, faHdd, faMicrochip, faMemory } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";


function LogoIcon(props) {
  let {text} = props;
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"

      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="slack"
      className={styles.logoIcon}
      role="img"
    >
      <defs>
        <linearGradient id="myLinearGradient1"
                        x1="100%" y1="0%"
                        x2="0%" y2="100%"
                        spreadMethod="pad">
          <stop offset="0%"   stopColor="#EF2136" stopOpacity="1"/>
          <stop offset="100%" stopColor="#FFAE10" stopOpacity="1"/>
        </linearGradient>
      </defs>
        <title>logo-filled@2x</title>
        <g id="logo-filled" stroke="none" strokeWidth="1" fillRule="evenodd">
            <g id="fire-part">
                <g transform="translate(148.516736, 0.000000)">
                    <g id="whole-thing" transform="translate(363.983264, 495.000000) scale(-1, 1) rotate(-180.000000) translate(-363.983264, -495.000000) translate(0.483264, -0.000000)" fillRule="nonzero">
                        <g id="g70" transform="translate(-0.000091, 0.685815)" fill="url(#myLinearGradient1)">
                            <path d="M 65.3647 571.7393 L 65.4492 571.6989 C 19.5139 506 -5.3246 424.4779 1.0431 336.8775 L 1.0431 336.8775 C 14.0322 158.1794 159.1925 13.7597 338.0598 1.5917 L 338.0598 1.5917 C 419.4184 -3.9389 495.5003 17.3823 558.4565 57.4611 L 558.4565 57.4611 L 607.7708 95.1329 C 680.9368 161.5766 726.9326 257.3642 726.9326 363.947 L 726.9326 363.947 C 726.9326 458.0316 691.1348 543.756 632.4161 608.2718 L 632.4161 608.2718 L 632.4161 608.2757 L 533.5977 748.1228 L 428.6014 617.2038 L 434.7033 646.5634 C 459.453 765.5922 433.6641 889.5439 363.4944 988.8533 L 363.4944 988.8533 L 65.3647 571.723 L 65.3647 571.7393 Z" id="path84"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>

    </svg>
  );
}

function TerminalWindowWrapper({index, title, lines, onStop, startCondition}) {
  let ref = React.createRef();

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
  }

  const speed=40;
  let html = '';
  let bold = true;
  let wait = 0;

  function typing(){
    if(!ref.current || lines.length == 0 || !startCondition() || !isElementInViewport(ref.current)) {
      return;
    }
    if(wait >0){
      wait-=1;
      return;
    }
    let currentLine = lines[0];
    while (currentLine == "") {
      lines.shift(1);
      bold = lines[0][0] == "$";
      currentLine = lines[0];
      html+="<br/>";
      wait = 3;
      return;
    }
    if(bold){
      let char = currentLine[0];
      currentLine = currentLine.substr(1);
      lines[0] = currentLine;
      html += "<span class='"+styles.commandText+"'>" + char + "</span>";
    } else {
      html += currentLine;
      currentLine = '';
      lines[0] = currentLine;
      wait = 10;
    }
    let showCursor = lines.length > 1 || currentLine != "";
    if(!showCursor){
      setTimeout(onStop, 200);
    }
    ref.current.innerHTML = html + (showCursor ? "<span class='"+styles.cursor+"'>|</span>" : "");
  }

  setInterval(typing, speed);

  return <div className={styles.terminalWrapper}>
    <div className={styles.stepInstructionsContainer}>
      <div className={styles.stepInstructions}>
        <LogoIcon text={index}/>
        <span className={styles.stepIndex}>{index}</span>
        <span>{title}</span>
      </div>
    </div>
    <div className={styles.terminalBar}>
      <div className={clsx(styles.terminalBarDot, styles.red)}></div>
      <div className={clsx(styles.terminalBarDot, styles.yellow)}></div>
      <div className={clsx(styles.terminalBarDot, styles.green)}></div>
    </div>
    <div className={styles.terminalWindow}>
      <div className={styles.codeBox} ref={ref}></div>
    </div>
  </div>;
}

export default function TerminalRow() {
  let terminalTwoStart = false;
  return <div className={styles.terminalRow}>
    <TerminalWindowWrapper
      lines={[
        '$ brew install pyroscope-io/brew/pyroscope',
        '... updating brew',
        '... installing pyroscope',
        '',
        '',
        '$ pyroscope server',
        '... pyroscope server listening on port :4040',
      ]}
      index="1"
      title="Start the server"
      onStop={ () => { terminalTwoStart = true } }
      startCondition={ () => true }
    />;
    <TerminalWindowWrapper
      lines={[
        "$ pyroscope exec python server.py",
        "... wrapping server.py with pyroscope agent",
        "... sending data to server over port :4040",
      ]}
      index="2"
      title="Start the client"
      onStop={ () => { terminalTwoStart = true } }
      startCondition={ () => terminalTwoStart }
    />;
  </div>
}
