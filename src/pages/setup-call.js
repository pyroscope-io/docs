import React from 'react';
import Layout from '@theme/Layout';

class SetupCall extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Layout title="Schedule a set up call">
        <main className="">
          <div className="container">
            Please contact us at <a href="mailto:contact@pyroscope.io">contact@pyroscope.io</a>
          </div>
        </main>
      </Layout>
    );
  }
}

export default SetupCall;
