import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faLinux, faDocker, faWindows } from '@fortawesome/free-brands-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

import packages from '../../../packages.manifest.json';
import styles from './styles.module.scss';

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
        <main className={styles.downloadPage}>
          <div className="container">
            <h1 className={styles.downloadPageTitle}>Download Pyroscope</h1>
            <div className={styles.downloadInfoTable}>
              <div className={styles.downloadInfoRow}>
                <div className={clsx(styles.downloadInfoCol, styles.downloadInfoTitle)}>
                  Version:
                </div>
                <div className={styles.downloadInfoCol}>
                  <select onChange={this.changeHandler.bind(this)}>
                    {
                      Object.keys(packages.releases).map((x) => {
                        return <option key={x} value={x}>{x}</option>
                      })
                    }
                  </select>
                </div>
              </div>

              <div className={styles.downloadInfoRow}>
                <div className={clsx(styles.downloadInfoCol, styles.downloadInfoTitle)}>
                  License:
                </div>
                <div className={styles.downloadInfoCol}>
                  Apache 2
                </div>
              </div>

              <div className={styles.downloadInfoRow}>
                <div className={clsx(styles.downloadInfoCol, styles.downloadInfoTitle)}>
                  Release Date:
                </div>
                <div className={styles.downloadInfoCol}>
                  {packages.releases[this.state.version]}
                </div>
              </div>
            </div>
            <hr />
            <h3>Platforms</h3>
            <Tabs
              itemClassName={styles.tabItem}
              itemActiveClassName={styles.tabItemActive}
              iconClassName={styles.tabsIcon}
              className={styles.tabsPlatforms}
              groupId="platforms"
              defaultValue="linux"
              values={[
                { icon: faLinux, label: 'Linux', value: 'linux' },
                { icon: faApple, label: 'macOS', value: 'macos' },
                { icon: faWindows, label: 'Windows', value: 'windows' },
                { icon: faDocker, label: 'Docker', value: 'docker' },
              ]
              }>
              <TabItem className={styles.tabItem} value="linux">
                <h3>Architecture</h3>
                <Tabs
                  itemClassName={styles.tabItem}
                  itemActiveClassName={styles.tabItemActive}
                  iconClassName={styles.tabsIcon}
                  className={styles.tabsArch}
                  groupId="archs"
                  defaultValue="amd64"
                  values={[
                    { label: 'x86_64 / amd64 / Intel', value: 'amd64' },
                    { label: 'aarch64 / arm64 / ARM', value: 'arm64' },
                  ]
                  }>{
                    ["amd64", "arm64"].map((arch) => {
                      return <TabItem className={styles.tabItem} key={arch} value={arch}>
                        <h3>Package Type</h3>
                        <div className={styles.downloadDetails}>
                          <Tabs
                            itemClassName={styles.tabItem}
                            itemActiveClassName={styles.tabItemActive}
                            iconClassName={styles.tabsIcon}
                            className={styles.tabsPackages}
                            groupId="package-types"
                            defaultValue="standalone"
                            values={[
                              { label: 'Standalone Binaries', value: 'standalone' },
                              { label: 'RHEL / CentOS / Fedora / Amazon Linux (.rpm)', value: 'rpm' },
                              { label: 'Ubuntu / Debian (.deb)', value: 'deb' },
                              { label: 'Arch Linux', value: 'archlinux' },
                            ]
                            }>
                            <TabItem className={styles.tabItem} value="standalone">
                              <hr />
                              <div className={styles.instructionsWrapper}>
                                <h3 className={styles.instructionsHeader}>Instructions</h3><div className={styles.sha}>{packages.shaMapping[`pyroscope-${v(this.state.version)}-linux-${arch}.tar.gz`]}</div>
                              </div>
                              <CodeBlock className="language-shell">{
                                `
                          wget https://dl.pyroscope.io/release/pyroscope-${v(this.state.version)}-linux-${arch}.tar.gz
                          tar -zxvf pyroscope-${v(this.state.version)}-linux-${arch}.tar.gz
                        `.replace(/^\s+/mg, "")
                              }</CodeBlock>
                              <h3 className={styles.instructionsHeader}>Running server</h3>
                              <p>To start pyroscope server run <code>pyroscope server</code></p>
                            </TabItem>
                            <TabItem className={styles.tabItem} value="rpm">
                              <hr />
                              <div className={styles.instructionsWrapper}>
                                <h3 className={styles.instructionsHeader}>Instructions</h3><div className={styles.sha}>{packages.shaMapping[`pyroscope-${v(this.state.version)}-1-${RPM_ARCH[arch]}.rpm`]}</div>
                              </div>
                              <CodeBlock className="language-shell">{
                                `
                          wget https://dl.pyroscope.io/release/pyroscope-${v(this.state.version)}-1-${RPM_ARCH[arch]}.rpm
                          sudo yum localinstall pyroscope-${v(this.state.version)}-1-${RPM_ARCH[arch]}.rpm
                        `.replace(/^\s+/mg, "")
                              }</CodeBlock>
                              <p></p>
                            </TabItem>
                            <TabItem className={styles.tabItem} value="deb">
                              <hr />
                              <div className={styles.instructionsWrapper}>
                                <h3 className={styles.instructionsHeader}>Instructions</h3><div className={styles.sha}>{packages.shaMapping[`pyroscope_${v(this.state.version)}_${arch}.deb`]}</div>
                              </div>
                              <CodeBlock className="language-shell">{
                                `
                          wget https://dl.pyroscope.io/release/pyroscope_${v(this.state.version)}_${arch}.deb
                          sudo apt-get install ./pyroscope_${v(this.state.version)}_${arch}.deb
                        `.replace(/^\s+/mg, "")
                              }</CodeBlock>
                            </TabItem>
                            <TabItem className={styles.tabItem} value="archlinux">
                              <hr />
                              <div className={styles.instructionsWrapper}>
                                <h3 className={styles.instructionsHeader}>Instructions</h3>
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
              <TabItem className={styles.tabItem} value="macos">
                <div className={styles.instructionsWrapper}>
                  <h3 className={styles.instructionsHeader}>Instructions</h3>
                </div>
                <CodeBlock className="language-shell">{
                  `
                    brew install pyroscope-io/brew/pyroscope
                  `.replace(/^\s+/mg, "")
                }</CodeBlock>
              </TabItem>
              <TabItem className={styles.tabItem} value="windows">
                <div className={styles.instructionsWrapper}>
                  <h3 className={styles.instructionsHeader}>Instructions</h3>
                </div>
                <CodeBlock className="language-shell">{
                  `[Net.ServicePointManager]::SecurityProtocol = "tls12"\n` +
                  `wget https://dl.pyroscope.io/release/pyroscope_agent_${v(this.state.version)}_amd64.msi ` +
                  `-outfile pyroscope_agent_${v(this.state.version)}_amd64.msi`.replace(/^\s+/mg, "")
                }</CodeBlock>
                <p>For instruction on how to install <b>Pyroscope Agent</b> on Windows, see our <a href="/docs/agent-install-windows">Documentation</a>.</p>
              </TabItem>
              <TabItem className={styles.tabItem} value="docker">
                <div className={styles.instructionsWrapper}>
                  <h3 className={styles.instructionsHeader}>Instructions</h3>
                </div>
                <CodeBlock className="language-shell">{
                  `
                    docker run -it -p 4040:4040 pyroscope/pyroscope:${v(this.state.version)} server
                  `.replace(/^\s+/mg, "")
                }</CodeBlock>
              </TabItem>
            </Tabs>
          </div>
          <div className={styles.extraSpace}></div>
        </main>
      </Layout>
    );
  }
}

export default Download;
