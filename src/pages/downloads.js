import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faLinux, faDocker, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import packages from '../../packages.manifest.json';

const RPM_ARCH = {
  "arm64": "aarch64",
  "amd64": "x86_64",
};

function v(str) {
  return str.replace(/^v/, "");
}

class Download extends React.Component {
  constructor() {
    super();
    this.state = { version: Object.keys(packages.releases)[0] };
  }
  changeHandler = (e) => {
    this.setState({ version: e.target.value });
  }
  render() {
    return (
      <Layout title="Download Pyroscope">
        <main className="download-page">
          <div className="container">
            <h1 className="download-page-title">Download Pyroscope</h1>
            <div className="download-info-table">
              <div className="download-info-row">
                <div className="download-info-col download-info-title">
                  Version:
                </div>
                <div className="download-info-col">
                  <select onChange={this.changeHandler.bind(this)}>
                    {
                      Object.keys(packages.releases).map((x) => {
                        return <option key={x} value={x}>{x}</option>
                      })
                    }
                  </select>
                </div>
              </div>

              <div className="download-info-row">
                <div className="download-info-col download-info-title">
                  License:
                </div>
                <div className="download-info-col">
                  Apache 2
                </div>
              </div>

              <div className="download-info-row">
                <div className="download-info-col download-info-title">
                  Release Date:
                </div>
                <div className="download-info-col">
                  {packages.releases[this.state.version]}
                </div>
              </div>
            </div>
            <hr />
            <h3>Platforms</h3>
            <Tabs
              className="tabs-platforms"
              groupId="platforms"
              defaultValue="linux"
              values={[
                { icon: faLinux, label: 'Linux', value: 'linux' },
                { icon: faApple, label: 'macOS', value: 'macos' },
                { icon: faWindows, label: 'Windows', value: 'windows' },
                { icon: faDocker, label: 'Docker', value: 'docker' },
              ]
              }>
              <TabItem value="linux">
                <h3>Architecture</h3>
                <Tabs
                  className="tabs-arch"
                  groupId="archs"
                  defaultValue="amd64"
                  values={[
                    { label: 'x86_64 / amd64 / Intel', value: 'amd64' },
                    { label: 'aarch64 / arm64 / ARM', value: 'arm64' },
                  ]
                  }>{
                    ["amd64", "arm64"].map((arch) => {
                      return <TabItem key={arch} value={arch}>
                        <h3>Package Type</h3>
                        <div className="download-details">
                          <Tabs
                            className="tabs-packages"
                            groupId="package-types"
                            defaultValue="standalone"
                            values={[
                              { label: 'Standalone Binaries', value: 'standalone' },
                              { label: 'RHEL / CentOS / Fedora / Amazon Linux (.rpm)', value: 'rpm' },
                              { label: 'Ubuntu / Debian (.deb)', value: 'deb' },
                              { label: 'Arch Linux', value: 'archlinux' },
                            ]
                            }>
                            <TabItem value="standalone">
                              <hr />
                              <div className="instructions-wrapper">
                                <h3 className="instructions-header">Instructions</h3><div className="sha">{packages.shaMapping[`pyroscope-${v(this.state.version)}-linux-${arch}.tar.gz`]}</div>
                              </div>
                              <CodeBlock className="language-shell">{
                                `
                          wget https://dl.pyroscope.io/release/pyroscope-${v(this.state.version)}-linux-${arch}.tar.gz
                          tar -zxvf pyroscope-${v(this.state.version)}-linux-${arch}.tar.gz
                        `.replace(/^\s+/mg, "")
                              }</CodeBlock>
                              <h3 className="instructions-header">Running server</h3>
                              <p>To start pyroscope server run <code>pyroscope server</code></p>
                            </TabItem>
                            <TabItem value="rpm">
                              <hr />
                              <div className="instructions-wrapper">
                                <h3 className="instructions-header">Instructions</h3><div className="sha">{packages.shaMapping[`pyroscope-${v(this.state.version)}-1-${RPM_ARCH[arch]}.rpm`]}</div>
                              </div>
                              <CodeBlock className="language-shell">{
                                `
                          wget https://dl.pyroscope.io/release/pyroscope-${v(this.state.version)}-1-${RPM_ARCH[arch]}.rpm
                          sudo yum localinstall pyroscope-${v(this.state.version)}-1-${RPM_ARCH[arch]}.rpm
                        `.replace(/^\s+/mg, "")
                              }</CodeBlock>
                              <p></p>
                            </TabItem>
                            <TabItem value="deb">
                              <hr />
                              <div className="instructions-wrapper">
                                <h3 className="instructions-header">Instructions</h3><div className="sha">{packages.shaMapping[`pyroscope_${v(this.state.version)}_${arch}.deb`]}</div>
                              </div>
                              <CodeBlock className="language-shell">{
                                `
                          wget https://dl.pyroscope.io/release/pyroscope_${v(this.state.version)}_${arch}.deb
                          sudo apt-get install ./pyroscope_${v(this.state.version)}_${arch}.deb
                        `.replace(/^\s+/mg, "")
                              }</CodeBlock>
                            </TabItem>
                            <TabItem value="archlinux">
                              <hr />
                              <div className="instructions-wrapper">
                                <h3 className="instructions-header">Instructions</h3>
                              </div>
                              <CodeBlock className="language-shell">{
                                `yay -S pyroscope-bin`
                              }</CodeBlock>
                            </TabItem>
                          </Tabs>
                        </div>
                      </TabItem>
                    })
                  }</Tabs>
              </TabItem>
              <TabItem value="macos">
                <div className="instructions-wrapper">
                  <h3 className="instructions-header">Instructions</h3>
                </div>
                <CodeBlock className="language-shell">{
                  `
                    brew install pyroscope-io/brew/pyroscope
                  `.replace(/^\s+/mg, "")
                }</CodeBlock>
              </TabItem>
              <TabItem value="windows">
                <div className="instructions-wrapper">
                  <h3 className="instructions-header">Instructions</h3>
                </div>
                <CodeBlock className="language-shell">{
                  `[Net.ServicePointManager]::SecurityProtocol = "tls12"\n` +
                  `wget https://dl.pyroscope.io/release/pyroscope_agent_${v(this.state.version)}_amd64.msi ` +
                  `-outfile pyroscope_agent_${v(this.state.version)}_amd64.msi`.replace(/^\s+/mg, "")
                }</CodeBlock>
                <p>For instruction on how to install <b>Pyroscope Agent</b> on Windows, see our <a href="/docs/agent-install-windows">Documentation</a>.</p>
              </TabItem>
              <TabItem value="docker">
                <div className="instructions-wrapper">
                  <h3 className="instructions-header">Instructions</h3>
                </div>
                <CodeBlock className="language-shell">{
                  `
                    docker run -it -p 4040:4040 pyroscope/pyroscope:${v(this.state.version)} server
                  `.replace(/^\s+/mg, "")
                }</CodeBlock>
              </TabItem>
            </Tabs>
          </div>
          <div className="extra-space"></div>
        </main>
      </Layout>
    );
  }
}

export default Download;
