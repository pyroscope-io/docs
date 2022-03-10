import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import TerminalRow from '../components/TerminalRow';
import IndexPageCloud from '../components/IndexPageCloud';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';
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
              <TerminalRow/>
              <p className={styles.terminalNotes}>
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
                  <IndexPageCloud/>
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
