import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
import Prism from 'prismjs'

import 'prismjs/themes/prism-okaidia.css'
import 'prismjs/components/prism-javascript.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const languages = ['Golang', 'Java', 'eBPF', 'Python', 'Ruby', 'NodeJS', '.NET', 'PHP', 'Rust'];

const code = `const canvas = document.getElementById(“canvas”);
const ctx = canvas.getContext(“2d”);

let shift = 0;
while (shift <= 500) {
   const color = shift % 3 ? “#999” : “#111”;
   line(shift, 0, 500, shift, color);
   shift += 25;
}`

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