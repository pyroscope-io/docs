import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

import IntegrationButton from '../IntegrationButton';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faPen, faFeather } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";


export default function({
  demoURL,
  blogURL,
  youtubeURL,
  sourceURL,
}) {
  return <div>
    {demoURL || blogURL || sourceURL ?
      <div className={styles.buttons}>
        {demoURL ? <IntegrationButton color="demo" url={demoURL} title="Live Demo" icon={faGlobe} /> : null}
        {blogURL ? <IntegrationButton color="blog" url={blogURL} title="Integration Blog Post" icon={faFeather} /> : null}
        {sourceURL ? <IntegrationButton color="github" url={sourceURL} title="Source Code" icon={faGithub} /> : null}
        {/* {youtubeURL ? <IntegrationButton title="Integration Video" icon={faYoutube} /> : null} */}

      </div> : null
    }
    { youtubeURL ?
      <div className={styles.video}>
        {
          youtubeURL ? <iframe src={youtubeURL}></iframe> : null
        }
      </div> : null
    }
    {/* <div className={styles.flamegraph}>
      <iframe src="https://demo.pyroscope.io/render?from=now-1h&until=now&query=frontend.go.cpu%7B%7D&max-nodes=1024&format=html"></iframe>
    </div> */}
  </div>;
};
