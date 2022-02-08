import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import {init} from './../utils/clouds';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faServer, faHdd, faMicrochip, faMemory } from "@fortawesome/free-solid-svg-icons";
import { faDocker } from "@fortawesome/free-brands-svg-icons";

const features = [
  {
    title: 'Lightning Fast',
    imageUrl: 'img/iconfinder_idea_2799205.svg',
    description: (
      <>
        Doesn't matter if you're looking at 10 seconds or 10 months of profiling data — the queries are always fast thanks to our custom designed storage engine.
      </>
    ),
  },
  {
    title: 'Minimum Overhead',
    imageUrl: 'img/iconfinder_management_2799204.svg',
    description: (
      <>
        Pyroscope doesn't affect performance of your applications, thanks to the use of sampling profiling technology.
      </>
    ),
  },
  {
    title: 'Cost-Effective',
    imageUrl: 'img/iconfinder_growing_2799206.svg',
    description: (
      <>
        Pyroscope uses a custom data storage engine and stores profiling data very efficiently, making it economically viable to store profiling data from all of your apps for years.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

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
      className="logo-icon"
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
                        <g id="g70" transform="translate(-0.000091, 0.685815)" fill="#EF2136" fill="url(#myLinearGradient1)">
                            <path d="M 65.3647 571.7393 L 65.4492 571.6989 C 19.5139 506 -5.3246 424.4779 1.0431 336.8775 L 1.0431 336.8775 C 14.0322 158.1794 159.1925 13.7597 338.0598 1.5917 L 338.0598 1.5917 C 419.4184 -3.9389 495.5003 17.3823 558.4565 57.4611 L 558.4565 57.4611 L 607.7708 95.1329 C 680.9368 161.5766 726.9326 257.3642 726.9326 363.947 L 726.9326 363.947 C 726.9326 458.0316 691.1348 543.756 632.4161 608.2718 L 632.4161 608.2718 L 632.4161 608.2757 L 533.5977 748.1228 L 428.6014 617.2038 L 434.7033 646.5634 C 459.453 765.5922 433.6641 889.5439 363.4944 988.8533 L 363.4944 988.8533 L 65.3647 571.723 L 65.3647 571.7393 Z" id="path84"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>

    </svg>
  );
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
  );
}


let terminalTwoStart = false;

function TerminalWindowOne() {
  let ref = React.createRef();

  let lines = [
    '$ brew install pyroscope-io/brew/pyroscope',
    '... updating brew',
    '... installing pyroscope',
    '',
    '',
    '$ pyroscope server',
    '... pyroscope server listening on port :4040',
  ];

  const speed=40;
  let html = '';
  let bold = true;
  let wait = 0;


  function typing(){
    if(!ref.current || lines.length == 0 || !isElementInViewport(ref.current)) {
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
      html += "<span class='command-text'>" + char + "</span>";
    } else {
      html += currentLine;
      currentLine = '';
      lines[0] = currentLine;
      wait = 10;
    }
    let showCursor = lines.length > 1 || currentLine != "";
    if(!showCursor){
      setTimeout(function(){
        terminalTwoStart = true;
      }, 200);
    }
    ref.current.innerHTML = html + (showCursor ? "<span class='cursor'>|</span>" : "");
  }

  setInterval(typing, speed);

  return(
    <div className="terminal-wrapper">
      <div className="step-instructions-container">
        <div className="step-instructions">
          <LogoIcon text="1"/>
          <span className="step-index">1</span>
          <span>Start the server</span>
        </div>
      </div>
      <div className="terminal-bar">
        <div className="terminal-bar-dot red"></div>
        <div className="terminal-bar-dot yellow"></div>
        <div className="terminal-bar-dot green"></div>
      </div>
      <div className="terminal-window">
        <div className="code-box" ref={ref} >

        </div>
      </div>
    </div>
  )
}

function TerminalWindowTwo() {

  let ref = React.createRef();

  let lines = [
    "$ pyroscope exec python server.py",
    "... wrapping server.py with pyroscope agent",
    "... sending data to server over port :4040"
  ];

  const speed=40;
  let html = '';
  let bold = true;
  let wait = 0;


  function typing(){
    if(!ref.current || lines.length == 0 || !terminalTwoStart || !isElementInViewport(ref.current)) {
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
      html += "<span class='command-text'>" + char + "</span>";
    } else {
      html += currentLine;
      currentLine = '';
      lines[0] = currentLine;
      wait = 10;
    }
    let showCursor = lines.length > 1 && currentLine != "";
    ref.current.innerHTML = html + (showCursor ? "<span class='cursor'>|</span>" : "");
  }

  setInterval(typing, speed);

  return(
    <div className="terminal-wrapper">
      <div className="step-instructions-container">
        <div className="step-instructions">
          <LogoIcon text="2"/>
          <span className="step-index">2</span>
          <span>Start the agent</span>
        </div>
      </div>
      <div className="terminal-bar">
        <div className="terminal-bar-dot red"></div>
        <div className="terminal-bar-dot yellow"></div>
        <div className="terminal-bar-dot green"></div>
      </div>
      <div className="terminal-window">
        <div className="code-box" ref={ref} >
        </div>
      </div>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  let canvasRef = React.createRef();

  const [instanceCount, setInstanceCount] = useState(0);

  useEffect(() => {
    init(canvasRef.current);

    fetch("/cloud/special-offer-count")
      .then(res => res.text())
      .then(res => setInstanceCount(res));
  })


  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description="Find bottlenecks in your code and fix performance issues">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title" style={{marginBottom: "0px"}}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--live-demo button--lg',
              )}
              to={"https://demo.pyroscope.io/?name=hotrod.python.frontend%7B%7D"}>
              Live Demo
            </Link>
            &nbsp;
            &nbsp;
            &nbsp;
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
              )}
              to={"/docs/"}>
              Get Started
            </Link>
          </div>

          <video className="demo-video" src="/videos/demo5.mov" preload="auto" controls muted playsInline loop autoPlay width="100%" style={{borderRadius: "11px"}}>
            <source src="/videos/demo5.mov"></source>
          </video>
        </div>
      </header>
      <main >
        <div className="slanted-wrapper">
          <section className={clsx(styles.features, "slanted-section")}>
            <div className="container index-page-section" >
              <h2 className="subsection-title-container">
                <span className="subsection-title">Start profiling your apps in two simple steps</span>
              </h2>
              <div className="terminal-row">
                <TerminalWindowOne />
                <TerminalWindowTwo />
              </div>
              <p className="terminal-notes">
                Using Linux or <FontAwesomeIcon icon={faDocker} color="#0db7ed" /> Docker? Looking for Go or Ruby docs? Check out <a href="/docs">Getting Started</a> guide.
              </p>
            </div>
          </section>
        </div>
        <section className={clsx(styles.features, "brighter-section")}>
          <div className="container index-page-section" >
            <h2 className="subsection-title-container">
              <span className="subsection-title">Why Pyroscope?</span>
            </h2>
            <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
            </div>
          </div>
        </section>

        <div className="cloud-section-wrapper">
          <canvas className="cloud-canvas" ref={canvasRef} ></canvas>
          <section className="cloud-section">
            <div className="container index-page-section" >
              <h2 className="subsection-title-container">
                <span className="subsection-title">&nbsp;</span>
              </h2>
              <div className="row">
                <div className='col col--6'>
                  <div className="terminal-wrapper">
                    <div className="terminal-bar gray-bg">
                      <div className="terminal-bar-dot red"></div>
                      <div className="terminal-bar-dot yellow"></div>
                      <div className="terminal-bar-dot green"></div>
                    </div>
                    <div className="terminal-window white-bg">
                      <h3>Servers:</h3>
                      <div className="server">
                        <div className="server-logo"></div>
                        <div>
                          <span className="server-name">acme-production</span>
                          <span className="server-status"> • running</span>
                        </div>

                        <div className="server-stats">4 CPU / 16 GB RAM / 40 GB Storage</div>
                      </div>
                      <div className="server">
                        <div className="server-logo"></div>
                        <div>
                          <span className="server-name">globex-staging</span>
                          <span className="server-status"> • running</span>
                        </div>

                        <div className="server-stats">8 CPU / 32 GB RAM / 80 GB Storage</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col col--6'>
                  <h2 className="subsection-title align-left">Pyroscope Cloud</h2>
                  <p>A fully-managed, continous profiling service powered by Pyroscope team. The fastest, easiest way to start using Pyroscope.</p>
                  <a className="button button--action button--lg" href="https://pyroscope.io/cloud">Create a Pyroscope Server</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
