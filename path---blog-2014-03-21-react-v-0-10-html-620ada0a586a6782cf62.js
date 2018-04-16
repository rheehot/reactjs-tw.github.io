webpackJsonp([0x7ef05b213c67],{678:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Hot on the heels of the <a href="/blog/2014/03/19/react-v0.10-rc1.html">release candidate earlier this week</a>, we’re ready to call v0.10 done. The only major issue we discovered had to do with the <code class="gatsby-code-text">react-tools</code> package, which has been updated. We’ve copied over the changelog from the RC with some small clarifying changes.</p>\n<p>The release is available for download from the CDN:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.10.0.js">https://fb.me/react-0.10.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.10.0.min.js">https://fb.me/react-0.10.0.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.10.0.js">https://fb.me/react-with-addons-0.10.0.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.10.0.min.js">https://fb.me/react-with-addons-0.10.0.min.js</a>  </li>\n<li><strong>In-Browser JSX transformer</strong><br>\n<a href="https://fb.me/JSXTransformer-0.10.0.js">https://fb.me/JSXTransformer-0.10.0.js</a></li>\n</ul>\n<p>We’ve also published version <code class="gatsby-code-text">0.10.0</code> of the <code class="gatsby-code-text">react</code> and <code class="gatsby-code-text">react-tools</code> packages on npm and the <code class="gatsby-code-text">react</code> package on bower.</p>\n<p>Please try these builds out and <a href="https://github.com/facebook/react/issues/new">file an issue on GitHub</a> if you see anything awry.</p>\n<h2 id="clone-on-mount"><a href="#clone-on-mount" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Clone On Mount</h2>\n<p>The main purpose of this release is to provide a smooth upgrade path as we evolve some of the implementation of core. In v0.9 we started warning in cases where you called methods on unmounted components. This is part of an effort to enforce the idea that the return value of a component (<code class="gatsby-code-text">React.DOM.div()</code>, <code class="gatsby-code-text">MyComponent()</code>) is in fact not a reference to the component instance React uses in the virtual DOM. The return value is instead a light-weight object that React knows how to use. Since the return value currently is a reference to the same object React uses internally, we need to make this transition in stages as many people have come to depend on this implementation detail.</p>\n<p>In 0.10, we’re adding more warnings to catch a similar set of patterns. When a component is mounted we clone it and use that object for our internal representation. This allows us to capture calls you think you’re making to a mounted component. We’ll forward them on to the right object, but also warn you that this is breaking. See “Access to the Mounted Instance” on <a href="https://fb.me/react-warning-descriptors">this page</a>. Most of the time you can solve your pattern by using refs.</p>\n<p>Storing a reference to your top level component is a pattern touched upon on that page, but another examples that demonstrates what we see a lot of:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token comment">// This is a common pattern. However instance here really refers to a</span>\n<span class="token comment">// "descriptor", not necessarily the mounted instance.</span>\n<span class="token keyword">var</span> instance <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">/></span></span><span class="token punctuation">;</span>\nReact<span class="token punctuation">.</span><span class="token function">renderComponent</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// ...</span>\ninstance<span class="token punctuation">.</span><span class="token function">setProps</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// The change here is very simple. The return value of renderComponent will be</span>\n<span class="token comment">// the mounted instance.</span>\n<span class="token keyword">var</span> instance <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">renderComponent</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span><span class="token punctuation">/></span></span><span class="token punctuation">)</span>\n<span class="token comment">// ...</span>\ninstance<span class="token punctuation">.</span><span class="token function">setProps</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>These warnings and method forwarding are only enabled in the development build. The production builds continue to work as they did in v0.9. We strongly encourage you to use the development builds to catch these warnings and fix the call sites.</p>\n<p>The plan for v0.11 is that we will go fully to “descriptors”. Method calls on the return value of <code class="gatsby-code-text">MyComponent()</code> will fail hard.</p>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-core"><a href="#react-core" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React Core</h3>\n<h4 id="new-features"><a href="#new-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Features</h4>\n<ul>\n<li>Added warnings to help migrate towards descriptors</li>\n<li>Made it possible to server render without React-related markup (<code class="gatsby-code-text">data-reactid</code>, <code class="gatsby-code-text">data-react-checksum</code>). This DOM will not be mountable by React. <a href="/docs/top-level-api.html#react.rendercomponenttostaticmarkup">Read the docs for <code class="gatsby-code-text">React.renderComponentToStaticMarkup</code></a></li>\n<li>\n<p>Added support for more attributes:</p>\n<ul>\n<li><code class="gatsby-code-text">srcSet</code> for <code class="gatsby-code-text">&lt;img&gt;</code> to specify images at different pixel ratios</li>\n<li><code class="gatsby-code-text">textAnchor</code> for SVG</li>\n</ul>\n</li>\n</ul>\n<h4 id="bug-fixes"><a href="#bug-fixes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Bug Fixes</h4>\n<ul>\n<li>Ensure all void elements don’t insert a closing tag into the markup.</li>\n<li>Ensure <code class="gatsby-code-text">className={false}</code> behaves consistently</li>\n<li>Ensure <code class="gatsby-code-text">this.refs</code> is defined, even if no refs are specified.</li>\n</ul>\n<h3 id="addons"><a href="#addons" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Addons</h3>\n<ul>\n<li><code class="gatsby-code-text">update</code> function to deal with immutable data. <a href="/docs/update.html">Read the docs</a></li>\n</ul>\n<h3 id="react-tools"><a href="#react-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>react-tools</h3>\n<ul>\n<li>Added an option argument to <code class="gatsby-code-text">transform</code> function. The only option supported is <code class="gatsby-code-text">harmony</code>, which behaves the same as <code class="gatsby-code-text">jsx --harmony</code> on the command line. This uses the ES6 transforms from <a href="https://github.com/facebook/jstransform">jstransform</a>.</li>\n</ul>',excerpt:"Hot on the heels of the  release candidate earlier this week , we’re ready to call v0.10 done. The only major issue we discovered had to do with the   package, which has been updated. We’ve copied over the changelog from the RC with some small clarifying changes. The release is available for download from the CDN: React Dev build with warnings:  https://fb.me/react-0.10.0.js Minified build for production:  https://fb.me/react-0.10.0.min.js    React with Add-Ons Dev build with warnings:  https…",frontmatter:{title:"React v0.10",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"March 20, 2014",path:"blog/2014-03-21-react-v0.10.md",slug:"/blog/2014/03/21/react-v0.10.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2014/03/21/react-v0.10.html"}}}});
//# sourceMappingURL=path---blog-2014-03-21-react-v-0-10-html-620ada0a586a6782cf62.js.map