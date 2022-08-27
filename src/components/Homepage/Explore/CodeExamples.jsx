import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Prism from 'prismjs'

import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const languages = ['Golang', 'Java', 'eBPF', 'Python', 'Ruby', 'NodeJS', '.NET', 'PHP', 'Rust'];

const golangCode = `
package main
import "github.com/pyroscope-io/client/pyroscope"

func main() {
  pyroscope.Start(pyroscope.Config{
    ApplicationName: "simple.golang.app",
    ServerAddress:   "http://pyroscope-server:4040",
    Logger:          pyroscope.StandardLogger,

    ProfileTypes: []pyroscope.ProfileType{
      // these profile types are enabled by default:
      pyroscope.ProfileCPU,
      pyroscope.ProfileAllocObjects,
      pyroscope.ProfileAllocSpace,
      pyroscope.ProfileInuseObjects,
      pyroscope.ProfileInuseSpace,

      // these profile types are optional:
      pyroscope.ProfileGoroutines,
      pyroscope.ProfileMutexCount,
      pyroscope.ProfileMutexDuration,
      pyroscope.ProfileBlockCount,
      pyroscope.ProfileBlockDuration,
    },
  })
}`

const pythonCode = `
import pyroscope

pyroscope.configure(
  application_name    = "my.python.app",
  server_address      = "http://my-pyroscope-server:4040",
  auth_token          = "{YOUR_API_KEY}",
  sample_rate         = 100,
  detect_subprocesses = False,
  oncpu               = True,
  native              = False,
  gil_only            = True,
  log_level           = "info",
  tags           = {
    "tag_key":   "tag_value",
  }
)`

const rubycode = `
require 'pyroscope'

Pyroscope.configure do |config|
  config.application_name = "my.ruby.app"
  config.server_address   = "http://my-pyroscope-server:4040"

  config.tags = {
    "tagKey" => "tagValue",
  }
end
`

const ebpfCode = `
kubectl apply -f https://pyroscope.io/k8s/pyroscope-agent.yaml
`

const javaCode = `
PyroscopeAgent.start(
    new Config.Builder()
      .setApplicationName("ride-sharing-app-java")
      .setProfilingEvent(EventType.ITIMER)
      .setFormat(Format.JFR)
      .setServerAddress("http://pyroscope-server:4040")
      // .setAuthToken(System.getenv("PYROSCOPE_AUTH_TOKEN"))
      .build()
);
`

const rustCode = `
// Configure Profiling backend
let pprof_config = PprofConfig::new().sample_rate(100);
let pprof_backend = Pprof::new(pprof_config);

// Configure Pyroscope Agent
let agent =
    PyroscopeAgent::builder("http://localhost:4040", "ride-sharing-app-rust")
// Profiling backend
    .backend(pprof_backend)
// Sample rate
    .sample_rate(100)
// Tags
    .tags(vec![("env", "dev")])
// Create the agent
    .build()?;
`

const dotnetCode = `
$env:PYROSCOPE_SPY_NAME="dotnetspy";
$env:PYROSCOPE_APPLICATION_NAME="my.dotnet.app";
$env:PYROSCOPE_SERVER_ADDRESS="http://pyroscope-server:4040";

pyroscope exec dotnet myapp.dll
`

const nodeCode = `
Pyroscope.init({
    serverAddress: 'http://pyroscope:4040',
    appName: 'myNodeService',
    tags: {
      tagKey: 'tagValue'
    }
  });
  
  Pyroscope.start()`


const phpCode = `
export PYROSCOPE_APPLICATION_NAME=my.php.app
export PYROSCOPE_SERVER_ADDRESS=http://pyroscope-server:4040

pyroscope exec php main.php
`

const CodeExamples = () => {
    const [active, setActive] = useState(languages?.[0]);

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <div className={styles.codeExamples}>
            <div className={styles.tabs}>
                {languages.map(l => (
                    <div
                        onClick={() => setActive(l)}
                        className={clsx({
                            [styles.tab]: true,
                            [styles.selected]: active === l
                        })}
                        key={l}
                    >{l}</div>
                ))}
            </div>
            <div className={styles.code}>
                <pre className="line-numbers">
                    <code className={`language-javascript`}>{code}</code>
                </pre>
            </div>
        </div>
    )
}

export default CodeExamples;
