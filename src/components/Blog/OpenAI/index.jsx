import React, { useState, useEffect } from 'react';

export const Response1 = `Alright, let's go through this profiling data and see what we can deduce.
1. The \`flate.(*compressor).reset\` function indicates compression routines are in use, consuming considerable CPU time. To optimize this, you might want to reconsider how often you compress data or the level of compression if the trade-off between CPU usage and compression ratio is not justified.
2. \`v1.(*Profile).Reset\` function is being heavily utilized. This seems to be related to resetting profile data structures in your code. Consider profiling the Reset method to understand why it's a hotspot and if there's any way to optimize the structures being reset or the frequency of resets.
3. \`symdb.(*PartitionWriter).WriteProfileSymbols\` suggests significant CPU time in writing symbols to a partition. If this relates to disk I/O or memory allocation, examine the data structure sizes and I/O batch sizes to find more efficient ways of handling these operations.
4. \`http2.(*serverConn).serve\` implicates the HTTP/2 server connection in managing requests. Explore your network handling, whether you need HTTP/2 features or if there's excessive resource allocation per connection. HTTP/2 can be more CPU intensive due to its multiplexing nature.
5. With \`v1.(*Location).Reset\` being resource-intensive, the same advice for profile resetting applies here: examine the necessity and frequency of resets to see if there's any room to reduce these costly operations.
6. Usage of the \`bufio.(*Writer).Flush\` function suggests that there might be frequent flushing of buffers which can be optimized. Check if you're flushing buffers more often than needed, and if so, consider reducing the frequency.
7. \`runtime.mallocgc\` points towards garbage collection being triggered by memory allocations. Optimize how your application allocates memory; use sync.Pool for frequently allocated objects or reduce the overall number of allocations.
8. \`runtime.mapassign_fast64\` hints at resource use in map assignments. Profiling map operations might indicate either that the maps are highly contentious or they're growing too large. Check for opportunities to better manage memory and optimize map usage patterns.
9. \`syscall.Syscall\` and \`syscall.Syscall6\` indicate system calls, which can be expensive. If these stem from frequent I/O or network operations, optimize this by reducing the number of calls or batching work to minimize syscalls.
10. \`runtime.scanobject\` points to garbage collection work scanning live objects in the heap. If you can, reduce the amount of global state, intern strings or other large immutables, and use value types where possible to mitigate some of the pressure on the garbage collector. Optimization is about trade-offs, so always consider the implications of the changes you make. Be sure to profile before and after changes to ensure the performance impact is positive and worth any potential increased complexity or maintenance burden.
`;

// import {evaluate} from '@mdx-js/mdx'

import { marked } from 'marked';

// Custom renderer
const renderer = new marked.Renderer();

// Override code block function
renderer.code = (code, infostring, escaped) => {
  const inlineStyle = 'style="color: #fff;"'; // Replace #yourColorCode with your color
  return `<pre ${inlineStyle}><code>${escaped ? code : escape(code, true)}</code></pre>`;
};

marked.setOptions({ renderer });

// marked.use({ renderer });

const MDXRenderer = ({ mdxContent }) => {
  return <div className="chat-bubble" dangerouslySetInnerHTML={{ __html: marked.parse(mdxContent, { renderer: renderer }) }} />;
};

const Container = ({ children }) => {
  return <div style={{
    background: '#8025ff',
    borderRadius: '0.5rem',
    padding: '1rem',
    color: '#fff',
  }}>{children}</div>;
}
const TypingDelay = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const words = text.split(' ');
  const baseTypingSpeed = 50; // milliseconds
  const jitter = 25; // milliseconds

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < words.length) {
        setDisplayedText((prev) => (prev + (index > 0 ? ' ' : '') + words[index]));
        index++;
      } else {
        clearInterval(timer);
      }
    },  baseTypingSpeed + Math.random() * jitter);

    return () => clearInterval(timer);
  }, [text]);

  // return <div className="chat-bubble" dangerouslySetInnerHTML={{ __html: displayedText }} >{}</div>;

  return <MDXRenderer mdxContent={displayedText} />
};
import Link from '@docusaurus/Link';
export const OpenAI = ({response}) => {
  let [explain, setExplain] = useState(false);
  console.log(setExplain)
  return <div style={{
    marginTop: '2rem',
  }}>
    { !explain && <Link disabled={explain} className="button button--warning" style={{
      width: '100%',
      marginBottom: '1rem',
      background: '#8025ff',
      borderColor: '#8025ff',
      color: '#fff',
    }}
    onClick={() => setExplain(true)}
    >Explain this FlameGraph</Link>}
    {explain && <Container><TypingDelay text={response}/></Container>}
  </div>;
};
