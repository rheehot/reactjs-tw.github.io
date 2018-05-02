webpackJsonp([97130754134062],{758:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We’re excited to announce the release of React v16.0! Among the changes are some long-standing feature requests, including <a href="#new-render-return-types-fragments-and-strings"><strong>fragments</strong></a>, <a href="#better-error-handling"><strong>error boundaries</strong></a>, <a href="#portals"><strong>portals</strong></a>, support for <a href="#support-for-custom-dom-attributes"><strong>custom DOM attributes</strong></a>, improved <a href="#better-server-side-rendering"><strong>server-side rendering</strong></a>, and <a href="#reduced-file-size"><strong>reduced file size</strong></a>.</p>\n<h3 id="new-render-return-types-fragments-and-strings"><a href="#new-render-return-types-fragments-and-strings" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New render return types: fragments and strings</h3>\n<p>You can now return an array of elements from a component’s <code class="gatsby-code-text">render</code> method. Like with other arrays, you’ll need to add a key to each element to avoid the key warning:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// No need to wrap list items in an extra element!</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n    <span class="token comment">// Don\'t forget the keys :)</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>A<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>First item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>B<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Second item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>C<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Third item<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="/blog/2017/11/28/react-v16.2.0-fragment-support.html">Starting with React 16.2.0</a>, we are adding support for a special fragment syntax to JSX that doesn’t require keys.</p>\n<p>We’ve added support for returning strings, too:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">\'Look ma, no spans!\'</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p><a href="/docs/react-component.html#render">See the full list of supported return types</a>.</p>\n<h3 id="better-error-handling"><a href="#better-error-handling" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Better error handling</h3>\n<p>Previously, runtime errors during rendering could put React in a broken state, producing cryptic error messages and requiring a page refresh to recover. To address this problem, React 16 uses a more resilient error-handling strategy. By default, if an error is thrown inside a component’s render or lifecycle methods, the whole component tree is unmounted from the root. This prevents the display of corrupted data. However, it’s probably not the ideal user experience.</p>\n<p>Instead of unmounting the whole app every time there’s an error, you can use error boundaries. Error boundaries are special components that capture errors inside their subtree and display a fallback UI in its place. Think of error boundaries like try-catch statements, but for React components.</p>\n<p>For more details, check out our <a href="/blog/2017/07/26/error-handling-in-react-16.html">previous post on error handling in React 16</a>.</p>\n<h3 id="portals"><a href="#portals" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Portals</h3>\n<p>Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// React does *not* create a new div. It renders the children into `domNode`.</span>\n  <span class="token comment">// `domNode` is any valid DOM node, regardless of its location in the DOM.</span>\n  <span class="token keyword">return</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createPortal</span><span class="token punctuation">(</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span>\n    domNode<span class="token punctuation">,</span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>See a full example in the <a href="/docs/portals.html">documentation for portals</a>.</p>\n<h3 id="better-server-side-rendering"><a href="#better-server-side-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Better server-side rendering</h3>\n<p>React 16 includes a completely rewritten server renderer. It’s really fast. It supports <strong>streaming</strong>, so you can start sending bytes to the client faster. And thanks to a <a href="#reduced-file-size">new packaging strategy</a> that compiles away <code class="gatsby-code-text">process.env</code> checks (Believe it or not, reading <code class="gatsby-code-text">process.env</code> in Node is really slow!), you no longer need to bundle React to get good server-rendering performance.</p>\n<p>Core team member Sasha Aickin wrote a <a href="https://medium.com/@aickin/whats-new-with-server-side-rendering-in-react-16-9b0d78585d67">great article describing React 16’s SSR improvements</a>. According to Sasha’s synthetic benchmarks, server rendering in React 16 is roughly <strong>three times faster</strong> than React 15. “When comparing against React 15 with <code class="gatsby-code-text">process.env</code> compiled out, there’s about a 2.4x improvement in Node 4, about a 3x performance improvement in Node 6, and a full 3.8x improvement in the new Node 8.4 release. And if you compare against React 15 without compilation, React 16 has a full order of magnitude gain in SSR in the latest version of Node!” (As Sasha points out, please be aware that these numbers are based on synthetic benchmarks and may not reflect real-world performance.)</p>\n<p>In addition, React 16 is better at hydrating server-rendered HTML once it reaches the client. It no longer requires the initial render to exactly match the result from the server. Instead, it will attempt to reuse as much of the existing DOM as possible. No more checksums! In general, we don’t recommend that you render different content on the client versus the server, but it can be useful in some cases (e.g. timestamps). <strong>However, it’s dangerous to have missing nodes on the server render as this might cause sibling nodes to be created with incorrect attributes.</strong></p>\n<p>See the <a href="/docs/react-dom-server.html">documentation for <code class="gatsby-code-text">ReactDOMServer</code></a> for more details.</p>\n<h3 id="support-for-custom-dom-attributes"><a href="#support-for-custom-dom-attributes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Support for custom DOM attributes</h3>\n<p>Instead of ignoring unrecognized HTML and SVG attributes, React will now <a href="/blog/2017/09/08/dom-attributes-in-react-16.html">pass them through to the DOM</a>. This has the added benefit of allowing us to get rid of most of React’s attribute whitelist, resulting in reduced file sizes.</p>\n<h3 id="reduced-file-size"><a href="#reduced-file-size" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Reduced file size</h3>\n<p>Despite all these additions, React 16 is actually <strong>smaller</strong> compared to 15.6.1!</p>\n<ul>\n<li><code class="gatsby-code-text">react</code> is 5.3 kb (2.2 kb gzipped), down from 20.7 kb (6.9 kb gzipped).</li>\n<li><code class="gatsby-code-text">react-dom</code> is 103.7 kb (32.6 kb gzipped), down from 141 kb (42.9 kb gzipped).</li>\n<li><code class="gatsby-code-text">react</code> + <code class="gatsby-code-text">react-dom</code> is 109 kb (34.8 kb gzipped), down from 161.7 kb (49.8 kb gzipped).</li>\n</ul>\n<p>That amounts to a combined <strong>32% size decrease compared to the previous version (30% post-gzip)</strong>.</p>\n<p>The size difference is partly attributable to a change in packaging. React now uses <a href="https://rollupjs.org/">Rollup</a> to create flat bundles for each of its different target formats, resulting in both size and runtime performance wins. The flat bundle format also means that React’s impact on bundle size is roughly consistent regardless of how you ship your app, whether it’s with Webpack, Browserify, the pre-built UMD bundles, or any other system.</p>\n<h3 id="mit-licensed"><a href="#mit-licensed" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>MIT licensed</h3>\n<p><a href="https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/">In case you missed it</a>, React 16 is available under the MIT license. We’ve also published React 15.6.2 under MIT, for those who are unable to upgrade immediately.</p>\n<h3 id="new-core-architecture"><a href="#new-core-architecture" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New core architecture</h3>\n<p>React 16 is the first version of React built on top of a new core architecture, codenamed “Fiber.” You can read all about this project over on <a href="https://code.facebook.com/posts/1716776591680069/react-16-a-look-inside-an-api-compatible-rewrite-of-our-frontend-ui-library/">Facebook’s engineering blog</a>. (Spoiler: we rewrote React!)</p>\n<p>Fiber is responsible for most of the new features in React 16, like error boundaries and fragments. Over the next few releases, you can expect more new features as we begin to unlock the full potential of React.</p>\n<p>Perhaps the most exciting area we’re working on is <strong>async rendering</strong>—a strategy for cooperatively scheduling rendering work by periodically yielding execution to the browser. The upshot is that, with async rendering, apps are more responsive because React avoids blocking the main thread.</p>\n<p>This demo provides an early peek at the types of problems async rendering can solve:</p>\n<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Ever wonder what &quot;async rendering&quot; means? Here&#39;s a demo of how to coordinate an async React tree with non-React work <a href="https://t.co/3snoahB3uV">https://t.co/3snoahB3uV</a> <a href="https://t.co/egQ988gBjR">pic.twitter.com/egQ988gBjR</a></p>&mdash; Andrew Clark (@acdlite) <a href="https://twitter.com/acdlite/status/909926793536094209">September 18, 2017</a></blockquote>\n<p><em>Tip: Pay attention to the spinning black square.</em></p>\n<p>We think async rendering is a big deal, and represents the future of React. To make migration to v16.0 as smooth as possible, we’re not enabling any async features yet, but we’re excited to start rolling them out in the coming months. Stay tuned!</p>\n<h2 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h2>\n<p>React v16.0.0 is available on the npm registry.</p>\n<p>To install React 16 with Yarn, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash">yarn add react@^16.0.0 react-dom@^16.0.0</code></pre>\n      </div>\n<p>To install React 16 with npm, run:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-bash"><code class="gatsby-code-bash"><span class="token function">npm</span> <span class="token function">install</span> --save react@^16.0.0 react-dom@^16.0.0</code></pre>\n      </div>\n<p>We also provide UMD builds of React via a CDN:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react@16/umd/react.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">crossorigin</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>https://unpkg.com/react-dom@16/umd/react-dom.production.min.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script language-javascript"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>Refer to the documentation for <a href="/docs/installation.html">detailed installation instructions</a>.</p>\n<h2 id="upgrading"><a href="#upgrading" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Upgrading</h2>\n<p>Although React 16 includes significant internal changes, in terms of upgrading, you can think of this like any other major React release. We’ve been serving React 16 to Facebook and Messenger.com users since earlier this year, and we released several beta and release candidate versions to flush out additional issues. With minor exceptions, <strong>if your app runs in 15.6 without any warnings, it should work in 16.</strong></p>\n<p>For deprecations listed in <a href="#packaging">packaging</a> below, codemods are provided to automatically transform your deprecated code.\nSee the <a href="/blog/2017/04/07/react-v15.5.0.html">15.5.0</a> blog post for more information, or browse the codemods in the <a href="https://github.com/reactjs/react-codemod">react-codemod</a> project.</p>\n<h3 id="new-deprecations"><a href="#new-deprecations" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New deprecations</h3>\n<p>Hydrating a server-rendered container now has an explicit API. If you’re reviving server-rendered HTML, use <a href="/docs/react-dom.html#hydrate"><code class="gatsby-code-text">ReactDOM.hydrate</code></a> instead of <code class="gatsby-code-text">ReactDOM.render</code>. Keep using <code class="gatsby-code-text">ReactDOM.render</code> if you’re just doing client-side rendering.</p>\n<h3 id="react-addons"><a href="#react-addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Addons</h3>\n<p>As previously announced, we’ve <a href="/blog/2017/04/07/react-v15.5.0.html#discontinuing-support-for-react-addons">discontinued support for React Addons</a>. We expect the latest version of each addon (except <code class="gatsby-code-text">react-addons-perf</code>; see below) to work for the foreseeable future, but we won’t publish additional updates.</p>\n<p>Refer to the previous announcement for <a href="/blog/2017/04/07/react-v15.5.0.html#discontinuing-support-for-react-addons">suggestions on how to migrate</a>.</p>\n<p><code class="gatsby-code-text">react-addons-perf</code> no longer works at all in React 16. It’s likely that we’ll release a new version of this tool in the future. In the meantime, you can <a href="/docs/optimizing-performance.html#profiling-components-with-the-chrome-performance-tab">use your browser’s performance tools to profile React components</a>.</p>\n<h3 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking changes</h3>\n<p>React 16 includes a number of small breaking changes. These only affect uncommon use cases and we don’t expect them to break most apps.</p>\n<ul>\n<li>React 15 had limited, undocumented support for error boundaries using <code class="gatsby-code-text">unstable_handleError</code>. This method has been renamed to <code class="gatsby-code-text">componentDidCatch</code>. You can use a codemod to <a href="https://github.com/reactjs/react-codemod#error-boundaries">automatically migrate to the new API</a>.</li>\n<li><code class="gatsby-code-text">ReactDOM.render</code> and <code class="gatsby-code-text">ReactDOM.unstable_renderSubtreeIntoContainer</code> now return null if called from inside a lifecycle method. To work around this, you can use <a href="https://github.com/facebook/react/issues/10309#issuecomment-318433235">portals</a> or <a href="https://github.com/facebook/react/issues/10309#issuecomment-318434635">refs</a>.</li>\n<li>\n<p><code class="gatsby-code-text">setState</code>:</p>\n<ul>\n<li>Calling <code class="gatsby-code-text">setState</code> with null no longer triggers an update. This allows you to decide in an updater function if you want to re-render.</li>\n<li>Calling <code class="gatsby-code-text">setState</code> directly in render always causes an update. This was not previously the case. Regardless, you should not be calling setState from render.</li>\n<li><code class="gatsby-code-text">setState</code> callbacks (second argument) now fire immediately after <code class="gatsby-code-text">componentDidMount</code> / <code class="gatsby-code-text">componentDidUpdate</code> instead of after all components have rendered.</li>\n</ul>\n</li>\n<li>When replacing <code class="gatsby-code-text">&lt;A /&gt;</code> with <code class="gatsby-code-text">&lt;B /&gt;</code>,  <code class="gatsby-code-text">B.componentWillMount</code> now always happens before  <code class="gatsby-code-text">A.componentWillUnmount</code>. Previously, <code class="gatsby-code-text">A.componentWillUnmount</code> could fire first in some cases.</li>\n<li>Previously, changing the ref to a component would always detach the ref before that component’s render is called. Now, we change the ref later, when applying the changes to the DOM.</li>\n<li>It is not safe to re-render into a container that was modified by something other than React. This worked previously in some cases but was never supported. We now emit a warning in this case. Instead you should clean up your component trees using <code class="gatsby-code-text">ReactDOM.unmountComponentAtNode</code>. <a href="https://github.com/facebook/react/issues/10294#issuecomment-318820987">See this example.</a></li>\n<li><code class="gatsby-code-text">componentDidUpdate</code> lifecycle no longer receives <code class="gatsby-code-text">prevContext</code> param. (See <a href="https://github.com/facebook/react/issues/8631">#8631</a>)</li>\n<li>Shallow renderer no longer calls <code class="gatsby-code-text">componentDidUpdate</code> because DOM refs are not available. This also makes it consistent with <code class="gatsby-code-text">componentDidMount</code> (which does not get called in previous versions either).</li>\n<li>Shallow renderer does not implement <code class="gatsby-code-text">unstable_batchedUpdates</code> anymore.</li>\n<li><code class="gatsby-code-text">ReactDOM.unstable_batchedUpdates</code> now only takes one extra argument after the callback.</li>\n</ul>\n<h3 id="packaging"><a href="#packaging" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Packaging</h3>\n<ul>\n<li>There is no <code class="gatsby-code-text">react/lib/*</code> and <code class="gatsby-code-text">react-dom/lib/*</code> anymore. Even in CommonJS environments, React and ReactDOM are precompiled to single files (“flat bundles”). If you previously relied on undocumented React internals, and they don’t work anymore, let us know about your specific case in a new issue, and we’ll try to figure out a migration strategy for you.</li>\n<li>There is no <code class="gatsby-code-text">react-with-addons.js</code> build anymore. All compatible addons are published separately on npm, and have single-file browser versions if you need them.</li>\n<li>The deprecations introduced in 15.x have been removed from the core package. <code class="gatsby-code-text">React.createClass</code> is now available as <code class="gatsby-code-text">create-react-class</code>, <code class="gatsby-code-text">React.PropTypes</code> as <code class="gatsby-code-text">prop-types</code>, <code class="gatsby-code-text">React.DOM</code> as <code class="gatsby-code-text">react-dom-factories</code>, <code class="gatsby-code-text">react-addons-test-utils</code> as <code class="gatsby-code-text">react-dom/test-utils</code>, and shallow renderer as <code class="gatsby-code-text">react-test-renderer/shallow</code>. See <a href="/blog/2017/04/07/react-v15.5.0.html">15.5.0</a> and <a href="/blog/2017/06/13/react-v15.6.0.html">15.6.0</a> blog posts for instructions on migrating code and automated codemods.</li>\n<li>\n<p>The names and paths to the single-file browser builds have changed to emphasize the difference between development and production builds. For example:</p>\n<ul>\n<li><code class="gatsby-code-text">react/dist/react.js</code> → <code class="gatsby-code-text">react/umd/react.development.js</code></li>\n<li><code class="gatsby-code-text">react/dist/react.min.js</code> → <code class="gatsby-code-text">react/umd/react.production.min.js</code></li>\n<li><code class="gatsby-code-text">react-dom/dist/react-dom.js</code> → <code class="gatsby-code-text">react-dom/umd/react-dom.development.js</code></li>\n<li><code class="gatsby-code-text">react-dom/dist/react-dom.min</code>.js → <code class="gatsby-code-text">react-dom/umd/react-dom.production.min.js</code></li>\n</ul>\n</li>\n</ul>\n<h2 id="javascript-environment-requirements"><a href="#javascript-environment-requirements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JavaScript Environment Requirements</h2>\n<p>React 16 depends on the collection types <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Map</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set">Set</a>. If you support older browsers and devices which may not yet provide these natively (e.g. IE &#x3C; 11), consider including a global polyfill in your bundled application, such as <a href="https://github.com/zloirock/core-js">core-js</a> or <a href="https://babeljs.io/docs/usage/polyfill/">babel-polyfill</a>.</p>\n<p>A polyfilled environment for React 16 using core-js to support older browsers might look like:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token string">\'core-js/es6/map\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token string">\'core-js/es6/set\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">\'react-dom\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> world<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>React also depends on <code class="gatsby-code-text">requestAnimationFrame</code> (even in test environments).<br>\nYou can use the <a href="https://www.npmjs.com/package/raf">raf</a> package to shim <code class="gatsby-code-text">requestAnimationFrame</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token string">\'raf/polyfill\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="acknowledgments"><a href="#acknowledgments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acknowledgments</h2>\n<p>As always, this release would not have been possible without our open source contributors. Thanks to everyone who filed bugs, opened PRs, responded to issues, wrote documentation, and more!</p>\n<p>Special thanks to our core contributors, especially for their heroic efforts over the past few weeks during the prerelease cycle: <a href="https://twitter.com/aweary">Brandon Dail</a>, <a href="https://twitter.com/monasticpanic">Jason Quense</a>, <a href="https://twitter.com/natehunzaker">Nathan Hunzaker</a>, and <a href="https://twitter.com/xander76">Sasha Aickin</a>.</p>',
excerpt:"We’re excited to announce the release of React v16.0! Among the changes are some long-standing feature requests, including  fragments ,  error boundaries ,  portals , support for  custom DOM attributes , improved  server-side rendering , and  reduced file size . New render return types: fragments and strings You can now return an array of elements from a component’s   method. Like with other arrays, you’ll need to add a key to each element to avoid the key warning: Starting with React 16.2.…",frontmatter:{title:"React v16.0",next:null,prev:null,author:[{frontmatter:{name:"Andrew Clark",url:"https://twitter.com/acdlite"}}]},fields:{date:"September 25, 2017",path:"blog/2017-09-26-react-v16.0.md",slug:"/blog/2017/09/26/react-v16.0.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2017/09/26/react-v16.0.html"}}}});
//# sourceMappingURL=path---blog-2017-09-26-react-v-16-0-html-2ab516a86b42cc1c9783.js.map