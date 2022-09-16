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
            <div className={styles.table}>
                <Col className={clsx([styles.plan])}>
                    <Cell className={clsx([styles.title])}>Plan</Cell>
                    <Cell>Number of Users</Cell>
                    <Cell>Number of Services</Cell>
                    <Cell>Storage Limit</Cell>
                    <Cell className={clsx([styles.integrations])}>
                        <span>
                            <span className={styles.highlight}>Language Integrations</span><br />
                            (Go, Python, eBPF, etc)
                        </span>
                    </Cell>
                    <Cell className={clsx([styles.integrations])}>
                        <span>
                            <span className={styles.highlight}>Tracing Integrations</span><br />
                            (Honeycomb, Grafana, etc)
                        </span>
                    </Cell>
                    <Cell>Exemplars</Cell>
                    <Cell>Horizontally Scalable</Cell>
                    <Cell>Support for High Cardinality</Cell>
                    <Cell>Zero-downtime upgrades</Cell>
                    <Cell>Data encryption at rest and in transit</Cell>
                    <Cell>Compliance</Cell>
                    <Cell>AWS PrivateLink</Cell>
                    <Cell>Data Retention</Cell>
                    <Cell>Throughput Limit (per month)</Cell>
                    <Cell className={clsx([styles.support])}>Support</Cell>
                    <Cell>Pricing</Cell>
                    <Cell>Subscription Period</Cell>
                    <Cell className={styles.buttonCell} />
                </Col>
                <Col className={clsx([styles.oss])}>
                    <Cell className={clsx([styles.title, styles.gradient])}>Open Source</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell />
                    <Cell className={clsx([styles.support])}>Slack Community</Cell>
                    <Cell>Free</Cell>
                    <Cell />
                    <Cell className={styles.buttonCell}>
                        <button className={styles.action}>Download</button>
                    </Cell>
                </Col>
                <Col className={clsx([styles.free])}>
                    <Cell className={clsx([styles.title])}>Free</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell />
                    <Cell />
                    <Cell>14 days</Cell>
                    <Cell>100 GB</Cell>
                    <Cell className={clsx([styles.support])}>Slack, Chat</Cell>
                    <Cell>Free</Cell>
                    <Cell>Monthly</Cell>
                    <Cell className={styles.buttonCell}>
                        <button className={styles.action}>Sign Up</button>
                    </Cell>
                </Col>
                <Col className={clsx([styles.pro])}>
                    <Cell className={clsx([styles.title])}>
                        <CrownIcon className={styles.proIcon} />Pro
                    </Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell>SOC 2</Cell>
                    <Cell />
                    <Cell>30 days</Cell>
                    <Cell>1 TB</Cell>
                    <Cell className={clsx([styles.support])}>Slack, Chat & Email</Cell>
                    <Cell>
                        <span><span className={clsx([styles.bold])}>$500</span>/month</span>
                    </Cell>
                    <Cell>Monthly or Annual</Cell>
                    <Cell className={styles.buttonCell}>
                        <button className={styles.action}>Sign Up</button>
                    </Cell>
                </Col>
                <Col className={clsx([styles.enterprise])}>
                    <Cell className={clsx([styles.title])}>Enterprise</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell>Unlimited</Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell className={clsx([styles.integrations])}><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell>SOC 2</Cell>
                    <Cell><CheckmarkIcon /></Cell>
                    <Cell>60 days (and higher)</Cell>
                    <Cell>Scales to any size</Cell>
                    <Cell className={clsx([styles.support])}>Priority chat and email-based support, Private Slack channel for your company</Cell>
                    <Cell>Contact Us</Cell>
                    <Cell>Annual</Cell>
                    <Cell className={styles.buttonCell}>
                        <button className={styles.action}>Sign Up</button>
                    </Cell>
                </Col>
            </div>
        </div>
    )
}

const Col = ({ children, className }) =>
    <div className={clsx([styles.col, className])}>{children}</div>

const Cell = ({ children, className }) =>
    <div className={clsx([styles.cell, className])}>{children}</div>

export default PlansTable;