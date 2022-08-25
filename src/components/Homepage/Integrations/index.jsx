import React from 'react';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Integrations = () => {
    return (
        <div className={styles.sectionWrapper}>
            <div className={styles.section}>
                <h2 className={styles.title}>Pyroscope Integrations</h2>
                <p className={styles.description}>Enhance your other observability signals with Pyroscope/s Various Integrations</p>
                <div className={styles.integrations}>
                    <Integration image='/img/homepage/integrations/logo-honeycomb.svg' name='Honeycomb' btnCaption='Tracing integration' />
                    <Integration image='/img/homepage/integrations/logo-jaeger.svg' name='Jaeger' btnCaption='Tracing integration' />
                    <Integration image='/img/homepage/integrations/logo-grafana.svg' name='Grafana' btnCaption='Flamegraph plugin' />
                    <Integration image='/img/homepage/integrations/logo-lambda.svg' name='AWS Lambda' btnCaption='Lambda extension' />
                </div>
                <div className={styles.integrations}>
                    <Integration image='/img/homepage/integrations/logo-prometheus.svg' name='Prometheus' btnCaption='Metrics integration' />
                    <Integration image='/img/homepage/integrations/logo-loki.svg' name='Loki' btnCaption='Login plugin' />
                    <Integration image='/img/homepage/integrations/logo-slack.svg' name='Slack' btnCaption='Slackbot extension' />
                </div>
            </div>
        </div>
    )
}

const Integration = ({ image, name, btnCaption }) => (
    <div className={styles.integration}>
        <img src={image} />
        <div className={styles.name}>{name}</div>
        <button>{btnCaption}
            <FontAwesomeIcon size='lg' icon={faLongArrowAltRight} />
        </button>
    </div>
)

export default Integrations;