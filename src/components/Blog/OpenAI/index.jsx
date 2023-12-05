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

// export const Response2 = `Analyzing the provided profiling data, we can identify several key areas impacting performance:
// 1. The heavy usage of HTTP-related functions like \`net/http.HandlerFunc.ServeHTTP\`, \`github.com/gorilla/mux.(*Router).ServeHTTP\`, and \`golang.org/x/net/http2.(*serverConn).runHandler\` suggests inefficiencies in handling HTTP requests and responses. This might be due to complex middleware, inefficient routing, or high traffic volume. Optimizing these areas, such as simplifying middleware or enhancing routing logic, could alleviate the bottleneck.
// 2. The significant time spent in regular expressions, particularly in functions like \`regexp.(*Regexp).backtrack\` and \`regexp.(*Regexp).tryBacktrack\`, indicates a potential over-reliance on complex pattern matching. This can be CPU-intensive. Evaluate the necessity of these regular expressions and consider simplifying them or replacing them with more efficient string processing methods. Additionally, caching the results for repeated use cases could reduce the load.
// 3. In light of these findings, several recommendations emerge:
//     - For HTTP processing optimization, consider revising your HTTP request handling pipeline. This may involve reworking the middleware, improving routing, or refining HTTP handler functions. If the system is under high load, load balancing or scaling out could be effective strategies.
//     - For regular expression optimization, a thorough review and potential simplification are advised. If regular expressions are a must, look into optimizing their complexity or leveraging caching mechanisms to lessen their performance impact.
// Remember, optimizations should always be guided by profiling data and tested for their actual impact on the system's performance.`;

export const BaseResponse = `Let's break down the profiling data to address your specific questions:

# Performance Bottleneck
1. **Performance Bottleneck**: The primary bottleneck in the system appears to be centered around the handling of HTTP requests and responses. Functions like \`net/http.HandlerFunc.ServeHTTP\`, \`github.com/gorilla/mux.(*Router).ServeHTTP\`, and \`golang.org/x/net/http2.(*serverConn).runHandler\` are consuming significant time. Additionally, the extensive use of regular expressions, particularly in \`regexp.(*Regexp).backtrack\` and \`regexp.(*Regexp).tryBacktrack\`, is also a notable area of performance impact, suggesting CPU-intensive operations.

# Root Cause
2. **Root Cause**: The root cause of the bottleneck seems to be twofold:
    - Inefficient HTTP Processing: The high utilization of HTTP-related functions could be due to complex middleware, inefficient routing, or a high volume of traffic.
    - Overuse of Regular Expressions: The significant use of complex regular expressions suggests an intensive pattern matching process which is generally CPU-intensive.

# Recommended Fix
3. **Recommended Fix**: Based on the identified bottlenecks, the following optimizations are recommended:
    - For HTTP processing, consider revising your HTTP request handling pipeline. This may involve simplifying middleware, enhancing routing logic, or optimizing HTTP handler functions. If facing high traffic, consider implementing load balancing or scaling the system horizontally.
    - For regular expressions, review their usage in your application. Simplify the expressions or replace them with more efficient string processing methods if possible. Implement caching mechanisms for frequently used patterns to reduce computational load.

Keep in mind that these recommendations should be tailored to your specific application context and tested thoroughly to ensure they effectively address the identified performance issues.`;

export const BeginnerResponse = `Let's understand the profiling data with an analogy of a busy kitchen in a restaurant:

// Performance Bottleneck
1. **Performance Bottleneck**: Imagine your program is like a kitchen. The part called \`net/http.HandlerFunc.ServeHTTP\` is like a chef handling too many orders - this is where your program is dealing with requests from the internet. Then there's another chef, \`regexp.(*Regexp).backtrack\`, who is very slow because he's meticulously decorating each dish, representing the detailed text processing in your program.

// Root Cause
2. **Root Cause**: The issue with \`net/http.HandlerFunc.ServeHTTP\` (our busy chef) could be because it's trying to do too much, similar to a kitchen overwhelmed with orders. The \`regexp.(*Regexp).backtrack\` chef is slow due to using time-consuming methods for detailed tasks, akin to using a tiny paintbrush for each detail on a dish.

// Recommended Fix
3. **Recommended Fix**: To assist the busy chef (\`net/http.HandlerFunc.ServeHTTP\`), you might need to simplify the menu (streamline how web requests are handled) or add more chefs to the kitchen (scale up your program). For the meticulous chef (\`regexp.(*Regexp).backtrack\`), look for simpler ways to decorate dishes (simplify text processing) or prepare some decorations beforehand (implement caching).

This approach aims to make the busy parts of your program (the chefs) work more efficiently by simplifying tasks or distributing the workload better.`;

export const PoemResponse = `Let's dive into profiling data, but with a twist, in a restaurant's kitchen we can't resist:

// Performance Bottleneck
1. **Performance Bottleneck**: 
   "In our program's bustling kitchen scene,
   \`net/http.HandlerFunc.ServeHTTP\`, the chef, reigns supreme.
   Handling too many web orders, his task,
   While \`regexp.(*Regexp).backtrack\`, the decorator, basks
   In adorning each dish with slow, meticulous care,
   Representing text processing done with flair.

// Root Cause
2. **Root Cause**: 
   "Our busy chef, \`ServeHTTP\`, swamped with too much to fry,
   Akin to a kitchen where dishes pile high.
   And then there's \`backtrack\`, so detailed and precise,
   Painting every garnish, each grain of rice.
   His method, so time-consuming, like art with a tiny brush,
   Slowing down the courses, creating a hush.

// Recommended Fix
3. **Recommended Fix**: 
   "To aid our swamped chef, \`ServeHTTP\` in his bustling nook,
   Perhaps it's time to simplify the cookbook.
   Or maybe add more chefs to share the load,
   To cater to the growing customer code.
   For \`backtrack\`, our artist with delicate touch,
   Let's simplify his patterns, not to clutch
   At every detail, or cache some designs,
   To speed up the serving of our program's lines.

A dash of efficiency, a sprinkle of speed,
To make our program chefs excel indeed.
Simplifying tasks, sharing out the feast,
To make our kitchen's output not the least!"`;


export const CustomerSuccessResponse = `Here's a breakdown for understanding and communicating the app's performance issues in your role as a customer success professional:

// For the Customer Success Professional

1. **Performance Bottleneck**: 
   - The flamegraph indicates major slowdowns in areas where the app handles web requests (\`net/http.HandlerFunc.ServeHTTP\`) and processes complex text patterns (\`regexp.(*Regexp).backtrack\`). This is akin to traffic jams in specific operations of the app.

2. **Root Cause**: 
   - These bottlenecks arise from the app taking excessive time for responding to web requests and processing certain text patterns, possibly due to the current handling methods or the inherent complexity of these tasks.

3. **Recommended Fix**: 
   - The technical team will aim to optimize how the app manages web requests and simplify the text pattern processing. This is like clearing the traffic jams or finding faster routes for these operations.

// For Communicating with the Customer

1. **Performance Bottleneck**: 
   - "We have identified key areas in our app that are due for improvements, particularly in how it responds to user actions and manages certain data processing tasks."

2. **Root Cause**: 
   - "Our analysis shows that these issues stem from the complex ways our app processes user requests and certain types of data, leading to less than optimal efficiency."

3. **Recommended Fix**: 
   - "Our technical team is now working on enhancing these aspects. By streamlining user request handling and optimizing data processing, we expect to deliver a smoother and quicker experience in our app. We are committed to making these improvements swiftly and efficiently."
`;

export const SpanishResponse = `Desglosemos los datos de perfil para abordar tus preguntas específicas:

# Cuello de Botella de Rendimiento
1. **Cuello de Botella de Rendimiento**: El principal cuello de botella en el sistema parece estar centrado en el manejo de solicitudes y respuestas HTTP. Funciones como \`net/http.HandlerFunc.ServeHTTP\`, \`github.com/gorilla/mux.(*Router).ServeHTTP\`, y \`golang.org/x/net/http2.(*serverConn).runHandler\` están consumiendo un tiempo significativo. Además, el uso extensivo de expresiones regulares, particularmente en \`regexp.(*Regexp).backtrack\` y \`regexp.(*Regexp).tryBacktrack\`, también es un área notable de impacto en el rendimiento, sugiriendo operaciones intensivas en CPU.

# Causa Raíz
2. **Causa Raíz**: La causa raíz del cuello de botella parece ser doble:
    - Procesamiento HTTP Ineficiente: La alta utilización de funciones relacionadas con HTTP podría deberse a middleware complejo, enrutamiento ineficiente o un alto volumen de tráfico.
    - Uso Excesivo de Expresiones Regulares: El uso significativo de expresiones regulares complejas sugiere un proceso de coincidencia de patrones intensivo en CPU.

# Solución Recomendada
3. **Solución Recomendada**: Basado en los cuellos de botella identificados, se recomiendan las siguientes optimizaciones:
    - Para el procesamiento HTTP, considera revisar tu canalización de manejo de solicitudes HTTP. Esto puede involucrar simplificar el middleware, mejorar la lógica de enrutamiento u optimizar las funciones de manejo HTTP. Si enfrentas un tráfico alto, considera implementar balanceo de carga o escalar el sistema horizontalmente.
    - Para las expresiones regulares, revisa su uso en tu aplicación. Simplifica las expresiones o reemplázalas con métodos de procesamiento de cadenas más eficientes si es posible. Implementa mecanismos de caché para patrones frecuentemente utilizados para reducir la carga computacional.

Ten en cuenta que estas recomendaciones deben adaptarse al contexto específico de tu aplicación y probarse a fondo para asegurar que aborden eficazmente los problemas de rendimiento identificados.`;

export const ITDepartmentHumorResponse = `Welcome to the IT department's take on the flamegraph - where our humor is as dry as our keyboards are crumb-filled!

# Performance Bottleneck
1. **Performance Bottleneck**: 
   - "Hey, did you see the flamegraph? \`net/http.HandlerFunc.ServeHTTP\` is hogging the CPU like Bob hogged the donuts at the last meeting."
   - "And check out \`regexp.(*Regexp).backtrack\`. That function is moving slower than Frank on a Monday morning before his coffee."

# Root Cause
2. **Root Cause**: 
   - "Looks like \`net/http.HandlerFunc.ServeHTTP\` is trying to multitask more than Sarah when she's on her dual monitors. No wonder it's a bottleneck!"
   - "And our friend \`regexp.(*Regexp).backtrack\`? It's micromanaging bits and bytes like Dave does with his fantasy football team."

# Recommended Fix
3. **Recommended Fix**: 
   - "For \`ServeHTTP\`, let's simplify things. It's time to delegate, like when we convinced management to outsource the coffee runs."
   - "As for \`backtrack\`, let's speed it up by cutting down on the complexity - kind of like how we ‘simplified’ the weekly status reports that nobody read."

Remember, folks, in IT, the only thing we fear more than a network outage is running out of coffee during one!`;

export const MichaelScottExplainsResponse = `Here's how Michael Scott from "The Office" would break down the flamegraph:

# Performance Bottleneck
1. **Performance Bottleneck**: 
   - "Alright everybody, listen up! So, this graph thingy shows us where our computer program is basically goofing off. Think of \`net/http.HandlerFunc.ServeHTTP\` as Dwight – he's trying to do a million things at once, like answering phones and running the branch, all by himself. And then there’s \`regexp.(*Regexp).backtrack\`, which is like Kevin doing math – slow and full of errors. It's funny but not very efficient."

# Root Cause
2. **Root Cause**: 
   - "Here’s the scoop – Dwight, I mean \`ServeHTTP\`, is overwhelmed because he's like the office superhero but without the cape. And Kevin, our \`backtrack\`, he's just... well, Kevin. He loves his chili more than he loves numbers. So, when you put too much on their plates, things get clogged up, like the office printer on a Monday morning."

# Recommended Fix
3. **Recommended Fix**: 
   - "So, here’s what we’re gonna do – we’re gonna give Dwight, the \`ServeHTTP\` guy, some help. Maybe get Jim or Pam to handle some calls. For Kevin, let's simplify his math – maybe use a calculator, or better yet, get Oscar to double-check his work. We'll streamline their tasks like I streamlined my World’s Best Boss mug collection – efficiency is key!"

Remember, a happy office is a productive office, and a happy program... well, it doesn't crash that often!"`;




// import {evaluate} from '@mdx-js/mdx'

import {marked} from 'marked';

const MDXRenderer = ({ mdxContent }) => {
    return <div className="chat-bubble" dangerouslySetInnerHTML={{ __html: marked.parse(mdxContent) }} >{}</div>;
};

const Container = ({ children }) => {
  return <div style={{
    background: '#ffba00A5',
    borderRadius: '0.5rem',
    padding: '1rem',
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
    }}
    onClick={() => setExplain(true)}
    >Explain this FlameGraph</Link>}
    {explain && <Container><TypingDelay text={response}/></Container>}
  </div>;
};