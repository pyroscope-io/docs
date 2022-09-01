import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';

import {TwitterTweetEmbed} from 'react-twitter-embed';

import Marquee from "react-fast-marquee";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faLinux, faDocker, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons';

import indexStyles from '../styles.module.scss';
import styles from './styles.module.scss';

const integrations = [
  'Go',
  'Java',
  'eBPF',
  'Python',
  'Ruby',
  'Rust',
  'NodeJS',
  '.Net',
  'PHP',
  'AWS Lambda',
  // 'Honeycomb',
  // 'Grafana',
  // 'Jaeger',
];

class Pricing extends React.Component {
  render() {
    return (
      <Layout title="Pricing Pyroscope">

        <svg width="0" height="0">
        <linearGradient id="myGradient" gradientTransform="rotate(45)">
          {/* <stop offset="5%"  stop-color="#FE883E" />
          <stop offset="95%" stop-color="#FF5084" /> */}
          <stop offset="5%"  stop-color="#C7F6FC" />
          <stop offset="95%" stop-color="#5CD3E3" />
        </linearGradient>
        </svg>

        <div>
          <section className={styles.heroSection}>
            <h1><span className={styles.highlight}>Simple</span> and <span className={styles.highlight}>Predictable</span> pricing for business of any size</h1>
            <h2>Choose between one of two versions: <span className={styles.highlight}>Open Source</span> or <span className={styles.highlight}>Cloud</span></h2>
            <div className="container">
            <div className={clsx('row', styles.options)}>
                <div className={clsx('col col--3', styles.option)}>
                  <h4>Open Source</h4>

                  <p>Leading continuous profiling database optimized for throughput and minimizing storage costs.</p>
                  <div className={styles.action}>
                    <a href="/downloads/" className={clsx("button button--outline", styles.buttonOutline)}>Download</a>
                  </div>
                </div>
                <div className={clsx('col col--3', styles.option, styles.highlightedOption)}>
                  <div className={styles.recommended}>Recommended</div>
                  <h4>Cloud</h4>
                  <p>Hosted and fully–managed version of Pyroscope, designed for all your deployment and business needs.</p>
                  <p>Horizontally scalable and with first-class support for high cardinality data.</p>
                  <div className={styles.action}>
                    <a target="_blank" href="https://pyroscope.cloud/" className={clsx("button button--action", styles.buttonAction)}>Start Profiling</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={indexStyles.slantedWrapper}>
          <section className={clsx(indexStyles.slantedSection, styles.cloudAdvantage)}>
            <div className="container">
              <div className="row">
                <div className="col col--12">
                  <h2>The Cloud Advantage</h2>
                </div>
              </div>
              <div className="row">
                <div className="col col--5">
                  <div className={styles.point}>
                    <FontAwesomeIcon className={styles.icon} icon={faDollarSign} />
                    <h3>Predictable pricing with no surprises</h3>
                    <p>Pay fixed amount per month. No hidden fees or extra charges.</p>
                  </div>

                  <div className={styles.point}>
                    <FontAwesomeIcon className={styles.icon} icon={faClock} />
                    <h3>Get started quickly</h3>
                    <p>Start profiling your applications in seconds.</p>
                  </div>

                  <div className={styles.point}>
                    <FontAwesomeIcon className={styles.icon} icon={faCity} />
                    <h3>Enterprise-ready</h3>
                    <p>AWS PrivateLink, SOC2 compliance.</p>
                  </div>

                  <div className={styles.point}>
                    <FontAwesomeIcon className={styles.icon} icon={faThumbsUp} />
                    <h3>Worry-free operations</h3>
                    <p>Hosted and managed by Pyroscope team.</p>
                  </div>

                  <div className={styles.point}>
                    <FontAwesomeIcon className={styles.icon} icon={faExpandArrowsAlt} />
                    <h3>Grows with you</h3>
                    <p>Write millions of profiles per second. Store hundreds of billions of individual profiles.</p>
                  </div>
                </div>
                <div className="col col--1"></div>
                <div className="col col--5">
                  <div className={clsx(styles.screenshotWrapper)}>
                    <div className={clsx(styles.screenshot, styles.floating)}>
                      {/* <img src="https://user-images.githubusercontent.com/662636/186038480-9b5fbc76-34bf-40c9-a652-eb756409b4a7.png"></img> */}
                      <img src="https://user-images.githubusercontent.com/662636/186038821-aad941fc-3df8-417a-883c-f77f90ebdfca.png"></img>
                    </div>
                  </div>
                </div>
                <div className="col col--1"></div>
              </div>
            </div>
          </section>
        </div>
        <section className={styles.pricingTableSection}>
          <div className="container">
            <h1>Compare Plans</h1>
            <h2>Start with a hobby project, collaborate with a team, and scale to thousands of applications</h2>
            {/* <h2>Choose between <span className={styles.highlight}>Open Source</span> or <span className={styles.highlight}>Cloud</span> version</h2> */}
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th colSpan={3}><span className={styles.highlight}>Pyroscope Cloud</span></th>
                </tr>
                <tr>
                  <th>Plan</th>
                  <th><span className={styles.highlight}>Open Source</span></th>
                  <th>Free</th>
                  <th>
                    Pro
                    {/* <br></br>
                    [recommended] */}
                  </th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Number of Users</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Number of Services</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr>
                  <td>Storage Limit</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                {/* <>
                  {
                    integrations.map((x, index) => {
                      return (
                        <tr key={index}>
                          <td>{x} Integration</td>
                          <td><FontAwesomeIcon icon={faCheck}/></td>
                          <td><FontAwesomeIcon icon={faCheck}/></td>
                          <td><FontAwesomeIcon icon={faCheck}/></td>
                          <td><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                      )
                    })
                  }
                </> */}
                <tr>
                  <td>
                    <a href="/docs/agent-overview/">
                      Language Integrations
                    </a>
                    <br/>
                    (Go, Python, eBPF, etc)
                  </td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>
                    <a href="/docs/agent-overview/">
                      Tracing Integrations
                    </a>
                    <br/>
                    (Honeycomb, Grafana, etc)
                  </td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>Exemplars</td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>Horizontally Scalable</td>
                  <td></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>Support for High Cardinality</td>
                  <td></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>Zero-downtime upgrades</td>
                  <td></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>Data encryption at rest and in transit</td>
                  <td></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>AWS PrivateLink</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td><FontAwesomeIcon icon={faCheck}/></td>
                </tr>
                <tr>
                  <td>Compliance</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>SOC 2</td>
                </tr>
                <tr>
                  <td>Data Retention</td>
                  <td></td>
                  <td>7 days</td>
                  <td>30 days</td>
                  <td>60 days (and higher)</td>
                </tr>
                <tr>
                  <td>Event Volume Limit</td>
                  <td></td>
                  <td>20 Million</td>
                  <td>100 Million</td>
                  <td>Scales to any size</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>Slack Community</td>
                  <td>Slack, Chat</td>
                  <td>Slack, Chat and Email</td>
                  <td>Priority chat and email-based support, Private Slack channel for your company</td>
                </tr>
                <tr>
                  <td>Pricing</td>
                  <td>Free</td>
                  <td>$0 / month</td>
                  <td>$1,000 / month</td>
                  <td>Contact us</td>
                </tr>
                <tr>
                  <td>Subscription Period</td>
                  <td></td>
                  <td>Monthly</td>
                  <td>Monthly or Annual</td>
                  <td>Annual</td>
                </tr>
                <tr>
                  <th>Plan</th>
                  <th>Open Source</th>
                  <th>Free</th>
                  <th>
                    Pro
                    {/* <br></br>
                    [recommended] */}
                  </th>
                  <th>Enterprise</th>
                </tr>
                <tr>
                  <td></td>
                  <td><a href="/downloads" className={clsx("button button--outline", styles.buttonOutline)}>Download</a></td>
                  <td><a target="_blank" href="https://pyroscope.cloud/" className={clsx("button button--action", styles.buttonAction)}>Start Profiling</a></td>
                  <td><a target="_blank" href="https://pyroscope.cloud/" className={clsx("button button--action button--lg", styles.buttonAction)}>Start Profiling</a></td>
                  <td><a href="mailto:sales@pyroscope.io" className={clsx("button button--action", styles.buttonAction)}>Contact Us</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.extraSpace}></div>
        </section>
        <div className={indexStyles.slantedWrapper}>
          <section className={clsx(indexStyles.slantedSection,styles.faqSection)}>
            <div className="container">
              <h2>FAQ</h2>

              <h4>Do the prices listed include sales tax?</h4>
              <p>No, additional sales tax will be added to the monthly/annual bill in compliance with state guidelines and Pyroscope will remit them on your behalf to the appropriate entity. Please contact sales@pyroscope.io for more information.</p>

              <h4>What is an event when it comes to trace data?</h4>
              <h4>How do I see how many events I’m currently sending to Pyroscope?</h4>
              <h4>When does the counter start on my monthly events limit?</h4>
              <h4>What happens when I am over my monthly event limit?</h4>
              <h4>What happens if I unexpectedly have a spike in traffic?</h4>
              <h4>Are there limits on event size?</h4>
            </div>
          </section>
        </div>
        <section className={clsx(styles.customersSection)}>
          <div className="container">
            <h2>What customers are saying</h2>
          </div>
          <div>
            <Marquee className={styles.tweets} gradient={false}>
              <div className={styles.tweet}><TwitterTweetEmbed options={{hideConversation: 'on'}} tweetId={'1512404078218915848'}/></div>
              <div className={styles.tweet}><TwitterTweetEmbed options={{hideConversation: 'on'}} tweetId={'1556121237184647169'}/></div>
              <div className={styles.tweet}><TwitterTweetEmbed options={{hideConversation: 'on'}} tweetId={'1544218798470971393'}/></div>
              <div className={styles.tweet}><TwitterTweetEmbed options={{hideConversation: 'on'}} tweetId={'1553151622762549248'}/></div>
              <div className={styles.tweet}><TwitterTweetEmbed options={{hideConversation: 'on'}} tweetId={'1534550646946504706'}/></div>
              <div className={styles.tweet}><TwitterTweetEmbed options={{hideConversation: 'on'}} tweetId={'1473042753894375424'}/></div>
            </Marquee>
          </div>
        </section>
        {/* <section className={clsx(styles.lastSection)}></section> */}
      </Layout>
    );
  }
}

export default Pricing;
