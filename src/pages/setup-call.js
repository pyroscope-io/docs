import React from 'react';
import { InlineWidget } from "react-calendly";
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faLinux, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import packages from '../../packages.manifest.json';

class SetupCall extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Layout title="Schedule a set up call">
        <main className="">
          <div className="container">
            <InlineWidget url="https://calendly.com/dmitry-pyroscope/setup-call" styles={{height: '700px'}} />
          </div>
        </main>
      </Layout>
    );
  }
}

export default SetupCall;
