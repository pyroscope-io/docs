import React, { useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Prism from 'prismjs';
import Select from 'react-select';
import { languages } from './languages';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript.js';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-ruby';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-python';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

const CodeExamples = () => {
  const [active, setActive] = useState(languages?.[0]);
  const codeRef = useRef(null);

  useEffect(() => {
    if (Prism && codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }

  }, [active.code]);

  const selectOptions = languages.map(l => ({
    label: l.name,
    value: l.name
  }))

  return (
    <>
      <Select
        defaultValue={selectOptions?.[0]}
        className={styles.langSelect}
        options={selectOptions}
        onChange={(e) => setActive(languages.find(l => l.name === e.value))}
      />
      <div className={styles.codeExamples}>
        <div className={styles.tabs}>
          {languages.map(l => (
            <div
              onClick={() => setActive(l)}
              className={clsx({
                [styles.tab]: true,
                [styles.selected]: active.name === l.name
              })}
              key={l.name}
            >{l.name}</div>
          ))}
        </div>
        <div className={styles.code}>
          <pre className="line-numbers">
            <code ref={codeRef} className={`language-${active.highlight}`}>{active.code}</code>
          </pre>
        </div>
      </div>
    </>
  )
}

export default CodeExamples;
