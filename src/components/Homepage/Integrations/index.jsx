import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import SectionWrapper from '../shared/SectionWrapper';

const Integrations = () => {
    return (
        <SectionWrapper className={styles.sectionWrapper}>
            <div className={styles.section}>
                <h2 className={styles.title}>Pyroscope Integrations</h2>
                <p className={styles.description}>Enhance your other observability signals with Pyroscope/s Various Integrations</p>
                <div className={styles.integrations}>
                    <Integration image='/img/homepage/integrations/logo-honeycomb.svg' name='Honeycomb' btnCaption='Tracing integration' url='https://pyroscope.io/docs/golang-tracing/#examples' />
                    <Integration image='/img/homepage/integrations/logo-jaeger.svg' name='Jaeger' btnCaption='Tracing integration' url='https://pyroscope.io/docs/golang-tracing/#examples' />
                    <Integration image='/img/homepage/integrations/logo-grafana.svg' name='Grafana' btnCaption='Flamegraph plugin' url='https://pyroscope.io/docs/grafana-plugins/' />
                    <Integration image='/img/homepage/integrations/logo-lambda.svg' name='AWS Lambda' btnCaption='Lambda extension' url='https://pyroscope.io/docs/aws-lambda/' />
                    <Integration image='/img/homepage/integrations/logo-prometheus.svg' name='Prometheus' btnCaption='Metrics integration' url='https://pyroscope.io/docs/metrics-export/' />
                    <Integration image='/img/homepage/integrations/logo-slack.svg' name='Slack' btnCaption='Slackbot extension' url='https://slack.com/apps/A02UJVA8A3U-pyroscope' />
                </div>
            </div>
        </SectionWrapper>
    )
}

const Integration = ({ image, name, btnCaption, url }) => (
    <div className={styles.integration}>
        <img alt={name} src={image} />
        <div className={styles.name}>{name}</div>
        <a href={url} target="_blank">{btnCaption}
            <FontAwesomeIcon size='lg' icon={faLongArrowAltRight} />
        </a>
    </div>
)

export default Integrations;
