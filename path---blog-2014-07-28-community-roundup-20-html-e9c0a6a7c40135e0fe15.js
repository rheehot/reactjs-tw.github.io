webpackJsonp([83601342165540],{687:function(n,a){n.exports={data:{markdownRemark:{html:'<p>It’s an exciting time for React as there are now more commits from open source contributors than from Facebook engineers! Keep up the good work :)</p>\n<h2 id="atom-moves-to-react"><a href="#atom-moves-to-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Atom moves to React</h2>\n<p><a href="http://blog.atom.io/2014/07/02/moving-atom-to-react.html">Atom, GitHub’s code editor, is now using React</a> to build the editing experience. They made the move in order to improve performance. By default, React helped them eliminate unnecessary reflows, enabling them to focus on architecting the rendering pipeline in order to minimize repaints by using hardware acceleration. This is a testament to the fact that React’s architecture is perfect for high performant applications.</p>\n<p><a href="http://blog.atom.io/2014/07/02/moving-atom-to-react.html"><img src="/gpu-cursor-move-815dd214138d96c3144488df6f6e6c69.gif" style="width: 100%;"></a></p>\n<h2 id="why-does-react-scale"><a href="#why-does-react-scale" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Why Does React Scale?</h2>\n<p>At the last <a href="http://2014.jsconf.us/">JSConf.us</a>, Vjeux talked about the design decisions made in the API that allows it to scale to a large number of developers. If you don’t have 20 minutes, take a look at the <a href="https://speakerdeck.com/vjeux/why-does-react-scale-jsconf-2014">annotated slides</a>.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube-nocookie.com/embed/D-ioDiacTm8" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<h2 id="live-editing"><a href="#live-editing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Live Editing</h2>\n<p>One of the best features of React is that it provides the foundations to implement concepts that were otherwise extremely difficult, like server-side rendering, undo-redo, rendering to non-DOM environments like canvas… <a href="https://twitter.com/dan_abramov">Dan Abramov</a> got hot code reloading working with webpack in order to <a href="https://gaearon.github.io/react-hot-loader/">live edit a React project</a>!</p>\n<iframe src="//player.vimeo.com/video/100010922" width="100%" height="315" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<h2 id="reactintl-mixin-by-yahoo"><a href="#reactintl-mixin-by-yahoo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactIntl Mixin by Yahoo</h2>\n<p>There are a couple of React-related projects that recently appeared on Yahoo’s GitHub, the first one being an  <a href="https://github.com/yahoo/react-intl">internationalization mixin</a>. It’s great to see them getting excited about React and contributing back to the community.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> MyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>ReactIntlMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">intlDate</span><span class="token punctuation">(</span><span class="token number">1390518044403</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> hour<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span><span class="token punctuation">,</span> minute<span class="token punctuation">:</span> <span class="token string">\'numeric\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">intlNumber</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> style<span class="token punctuation">:</span> <span class="token string">\'percent\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReact<span class="token punctuation">.</span><span class="token function">renderComponent</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyComponent</span> <span class="token attr-name">locales</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'fr-FR\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="thinking-and-learning-react"><a href="#thinking-and-learning-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Thinking and Learning React</h2>\n<p>Josephine Hall, working at Icelab, used React to write a mobile-focused application. She wrote a blog post <a href="http://icelab.com.au/articles/thinking-and-learning-reactjs/">“Thinking and Learning React.js”</a> to share her experience with elements they had to use. You’ll learn about routing, event dispatch, touchable components, and basic animations.</p>\n<h2 id="london-react-meetup"><a href="#london-react-meetup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>London React Meetup</h2>\n<p>If you missed the last <a href="http://www.meetup.com/London-React-User-Group/events/191406572/">London React Meetup</a>, the video is available, with lots of great content.</p>\n<ul>\n<li>What’s new in React 0.11 and how to improve performance by guaranteeing immutability</li>\n<li>State handling in React with Morearty.JS</li>\n<li>React on Rails - How to use React with Ruby on Rails to build isomorphic apps</li>\n<li>Building an isomorphic, real-time to-do list with moped and node.js</li>\n</ul>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 48.46153846153846%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="//www.youtube-nocookie.com/embed/CP3lvm5Ppqo" frameborder="0" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p>In related news, the next <a href="http://www.meetup.com/ReactJS-San-Francisco/events/195518392/">React SF Meetup</a> will be from Prezi: <a href="https://medium.com/prezi-engineering/how-and-why-prezi-turned-to-javascript-56e0ca57d135">“Immediate Mode on the Web: How We Implemented the Prezi Viewer in JavaScript”</a>. While not in React, their tech is really awesome and shares a lot of React’s design principles and perf optimizations.</p>\n<h2 id="using-react-and-kendoui-together"><a href="#using-react-and-kendoui-together" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using React and KendoUI Together</h2>\n<p>One of the strengths of React is that it plays nicely with other libraries. Jim Cowart proved it by writing a tutorial that explains how to write <a href="http://www.ifandelse.com/using-reactjs-and-kendoui-together/">React component adapters for KendoUI</a>.</p>\n<figure><a href="http://www.ifandelse.com/using-reactjs-and-kendoui-together/">\n  <a class="gatsby-resp-image-link" href="/static/kendoui-f224061339f4e67b1a4db564e45f0361-21e69.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 248px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 120.96774193548387%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVQ4y5VUSW/TQBT2L+aC1AMSCCQkxAFRcgIhQEIVBxCHUspSVrWFglq12UMWO7YTO7GdeB/vdvjsSROatgdG0WTezHzvfe97b8zMzo0sy8IwdF3XcRzbtjH7vp+m6fmbzAoM90zTAoacDpcQ0zQnk4llWSsuluAkSWicKI6jKHKJS/eBCSPsxXChKEoQBDTMEgwkzgjxsCjMmHiEHsGfSXJAnCTIRZIkil+C4d4PArg3DH2ZRTFrTmR6cb5QVdD2PG84HNIYORg22M4uGS3ZCeJ0IQpm5K+qag6GnWcVhpDqjHjFrJPoSLAKWLGZptACCoiiCAiDBCzLBg3HPRM8LW4fClZ/6i3BWWoYBhaj0UjXdYbW80LCaZZtVpQ4yc4fwQWUY2hJs2L8C8O8zxrPDqSFOT8qSo2Q/X6fQcKe71uW6Qf+Crg5cjsqWXCmf7iJLoLGLMvmYPtyqS8bSBiaMeCM1aIMdAEVsQ+v+IEhTHqKmdJGqVEtBjqPx2PMKFWhuYs+cWzLI27gkcD3AAY7BHALbQ3TBL7b7eJ+3iTT6RTqoW6oPo69MHL8hEQpCVPbj9M01xLNB6ymaUEYIqYgCPMOg6fBYMBxHB4QTFbzXp8oWzVtu6E/+NKVVN21nTCMcAT+0KnRaCDSvMPoLpjABd1FHDxlVBLN4DhoqYhuItVyuYzq0vyXTxI59Hq9TqczmU79vHgWx7KyNMQzhYmc2+12rVajyAs+BhBMluVWq9VsNkFvUAx4rNfr1WqV53lK4QwYxBPUIJs/Bjx8xAFDluN6PZYXBEXNdaLNc9rk2Wrk/x05mNf90o/Bi/L45idu43j88Jf0+LckWQE79Z4fjyqy8+hg+PRIfnIol34OB2YwssMD0ZqDVSe8+rZ77QN7b1e8/ZUv7Q/u74r1sdtUyNp79s434cYOd32H2zgZX9nq3P0u3Prcf1VVT3Oezbb/TNbeddf3xY9t/U1DW98TTySHN/zKyAmT7GVF2WxqWMFsKi5I7fEmgH8BhnlSvWis+KUAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="kendoui" title="" src="/static/kendoui-f224061339f4e67b1a4db564e45f0361-21e69.png" srcset="/static/kendoui-f224061339f4e67b1a4db564e45f0361-9844b.png 210w,\n/static/kendoui-f224061339f4e67b1a4db564e45f0361-21e69.png 248w" sizes="(max-width: 248px) 100vw, 248px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<h2 id="acorn-jsx"><a href="#acorn-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Acorn JSX</h2>\n<p>Ingvar Stepanyan extended the Acorn JavaScript parser to support JSX. The result is a <a href="https://github.com/RReverser/acorn-jsx">JSX parser</a> that’s 1.5–2.0x faster than the official JSX implementation. It is an experiment and is not meant to be used for serious things, but it’s always a good thing to get competition on performance!</p>\n<h2 id="reactscriptloader"><a href="#reactscriptloader" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>ReactScriptLoader</h2>\n<p>Yariv Sadan created <a href="https://github.com/yariv/ReactScriptLoader">ReactScriptLoader</a> to make it easier to write components that require an external script.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">var</span> Foo <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  mixins<span class="token punctuation">:</span> <span class="token punctuation">[</span>ReactScriptLoaderMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>\n  getScriptURL<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">\'http://d3js.org/d3.v3.min.js\'</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  getInitialState<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> scriptLoading<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> scriptLoadError<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onScriptLoaded<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>scriptLoading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  onScriptError<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>scriptLoading<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> scriptLoadError<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> message <span class="token operator">=</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>scriptLoading <span class="token operator">?</span> <span class="token string">\'Loading script...\'</span> <span class="token punctuation">:</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>scriptLoadError <span class="token operator">?</span> <span class="token string">\'Loading failed\'</span> <span class="token punctuation">:</span>\n      <span class="token string">\'Loading succeeded\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="random-tweet"><a href="#random-tweet" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Random Tweet</h2>\n<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p>“<a href="https://twitter.com/apphacker">@apphacker</a>: I take back the mean things I said about <a href="https://twitter.com/reactjs">@reactjs</a> I actually like it.” Summarizing the life of ReactJS in a single tweet.</p>&mdash; Jordan (@jordwalke) <a href="https://twitter.com/jordwalke/statuses/490747339607265280">July 20, 2014</a></blockquote>',excerpt:"It’s an exciting time for React as there are now more commits from open source contributors than from Facebook engineers! Keep up the good work :) Atom moves to React Atom, GitHub’s code editor, is now using React  to build the editing experience. They made the move in order to improve performance. By default, React helped them eliminate unnecessary reflows, enabling them to focus on architecting the rendering pipeline in order to minimize repaints by using hardware acceleration. This is a…",frontmatter:{title:"Community Round-up #20",next:null,prev:null,author:[{frontmatter:{name:"Lou Husson",url:"https://twitter.com/loukan42"}}]},fields:{date:"July 27, 2014",path:"blog/2014-07-28-community-roundup-20.md",slug:"/blog/2014/07/28/community-roundup-20.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2014/07/28/community-roundup-20.html"}}}});
//# sourceMappingURL=path---blog-2014-07-28-community-roundup-20-html-e9c0a6a7c40135e0fe15.js.map