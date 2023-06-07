import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import CrownIcon from '/img/pricing/crown.svg'
import CheckmarkIcon from '/img/pricing/pink_checkmark.svg'

const PlansTable = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.overhead}>
                <div className={styles.cloudCaption}>Pyroscope Cloud</div>
            </div>
            <div className={styles.plans}>
                <div className={styles.header}>
                    <Cell className={styles.plan}>Plan</Cell>
                    <Cell className={styles.oss}>
                        <div className={styles.gradient}>Open Source</div>
                    </Cell>
                    <Cell className={styles.free}>Free</Cell>
                    <Cell className={styles.pro}>
                        <CrownIcon className={styles.proIcon} />Pro
                    </Cell>
                    <Cell className={styles.enterprise}>Enterprise</Cell>
                </div>
                <div className={styles.body}>
                    <Row>
                        <Cell className={styles.plan}>Number of Users</Cell>
                        <Cell className={styles.oss}>Unlimited</Cell>
                        <Cell className={styles.free}>Unlimited</Cell>
                        <Cell className={styles.pro}>Unlimited</Cell>
                        <Cell className={styles.enterprise}>Unlimited</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Number of Services</Cell>
                        <Cell className={styles.oss}>Unlimited</Cell>
                        <Cell className={styles.free}>Unlimited</Cell>
                        <Cell className={styles.pro}>Unlimited</Cell>
                        <Cell className={styles.enterprise}>Unlimited</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Storage Limit</Cell>
                        <Cell className={styles.oss}>Unlimited</Cell>
                        <Cell className={styles.free}>Unlimited</Cell>
                        <Cell className={styles.pro}>Unlimited</Cell>
                        <Cell className={styles.enterprise}>Unlimited</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>
                            <span className={styles.double}>
                                <span className={styles.highlight}>Language Integrations</span><br />{" "}
                                (Go, Python, eBPF, etc)
                            </span>
                        </Cell>
                        <Cell className={styles.oss}><CheckmarkIcon /></Cell>
                        <Cell className={styles.free}><CheckmarkIcon /></Cell>
                        <Cell className={styles.pro}><CheckmarkIcon /></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>
                            <span className={styles.double}>
                                <span className={styles.highlight}>Tracing Integrations</span><br />{" "}
                                (Honeycomb, Grafana, etc)
                            </span>
                        </Cell>
                        <Cell className={styles.oss}><CheckmarkIcon /></Cell>
                        <Cell className={styles.free}><CheckmarkIcon /></Cell>
                        <Cell className={styles.pro}><CheckmarkIcon /></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Exemplars</Cell>
                        <Cell className={styles.oss}><CheckmarkIcon /></Cell>
                        <Cell className={styles.free}><CheckmarkIcon /></Cell>
                        <Cell className={styles.pro}><CheckmarkIcon /></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Horizontally Scalable</Cell>
                        <Cell className={styles.oss}><CheckmarkIcon /></Cell>
                        <Cell className={styles.free}><CheckmarkIcon /></Cell>
                        <Cell className={styles.pro}><CheckmarkIcon /></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Support for High Cardinality</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}><CheckmarkIcon /></Cell>
                        <Cell className={styles.pro}><CheckmarkIcon /></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Zero-downtime upgrades</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}><CheckmarkIcon /></Cell>
                        <Cell className={styles.pro}><CheckmarkIcon /></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Data encryption at rest and in transit</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}><CheckmarkIcon /></Cell>
                        <Cell className={styles.pro}><CheckmarkIcon /></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Compliance</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}></Cell>
                        <Cell className={styles.pro}>SOC 2</Cell>
                        <Cell className={styles.enterprise}>SOC 2</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>AWS PrivateLink</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}></Cell>
                        <Cell className={styles.pro}></Cell>
                        <Cell className={styles.enterprise}><CheckmarkIcon /></Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Data Retention</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}>14 days</Cell>
                        <Cell className={styles.pro}>30 days</Cell>
                        <Cell className={styles.enterprise}>60 days (and higher)</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Throughput Limit (per month)</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}>100 GB</Cell>
                        <Cell className={styles.pro}>1 TB</Cell>
                        <Cell className={styles.enterprise}>Scales to any size</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Support</Cell>
                        <Cell className={styles.oss}>Slack Community</Cell>
                        <Cell className={styles.free}>Slack, Chat</Cell>
                        <Cell className={styles.pro}>Slack, Chat & Email</Cell>
                        <Cell className={styles.enterprise}>Priority chat and email-based support, Private Slack channel for your company</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Pricing</Cell>
                        <Cell className={styles.oss}>Free</Cell>
                        <Cell className={styles.free}>Free</Cell>
                        <Cell className={styles.pro}>
                            <span className={styles.bold}>$500</span>/month
                        </Cell>
                        <Cell className={styles.enterprise}>Contact Us</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}>Subscription Period</Cell>
                        <Cell className={styles.oss}></Cell>
                        <Cell className={styles.free}>Monthly</Cell>
                        <Cell className={styles.pro}>Monthly or Annual</Cell>
                        <Cell className={styles.enterprise}>Annual</Cell>
                    </Row>

                    <Row>
                        <Cell className={styles.plan}></Cell>
                        <Cell className={styles.oss}>
                            <a href="https://github.com/pyroscope-io/pyroscope" className={styles.action}>Download</a>
                        </Cell>
                        <Cell className={styles.free}>
                            <a href="https://pyroscope.cloud/signup" className={styles.action}>Sign Up</a>
                        </Cell>
                        <Cell className={styles.pro}>
                            <a href="https://pyroscope.cloud/signup" className={styles.action}>Sign Up</a>
                        </Cell>
                        <Cell className={styles.enterprise}>
                            <a href="mailto:sales@pyroscope.io" className={styles.action}>Contact Us</a>
                        </Cell>
                    </Row>
                </div>
            </div>
        </div>
    )
}

const Row = ({ children, className }) =>
    <div className={clsx([styles.row, className])}>{children}</div>

const Cell = ({ children, className }) =>
    <div className={clsx([styles.cell, className])}>{children}</div>

export default PlansTable;
