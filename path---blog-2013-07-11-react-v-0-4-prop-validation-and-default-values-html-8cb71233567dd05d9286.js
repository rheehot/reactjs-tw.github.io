webpackJsonp([0xe47480eba199],{651:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Many of the questions we got following the public launch of React revolved around <code class="gatsby-code-text">props</code>, specifically that people wanted to do validation and to make sure their components had sensible defaults.</p>\n<h2 id="validation"><a href="#validation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Validation</h2>\n<p>Oftentimes you want to validate your <code class="gatsby-code-text">props</code> before you use them. Perhaps you want to ensure they are a specific type. Or maybe you want to restrict your prop to specific values. Or maybe you want to make a specific prop required. This was always possible — you could have written validations in your <code class="gatsby-code-text">render</code> or <code class="gatsby-code-text">componentWillReceiveProps</code> functions, but that gets clunky fast.</p>\n<p>React v0.4 will provide a nice easy way for you to use built-in validators, or to even write your own.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  propTypes<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token comment">// An optional string prop named "description".</span>\n    description<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n\n    <span class="token comment">// A required enum prop named "category".</span>\n    category<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'News\'</span><span class="token punctuation">,</span><span class="token string">\'Photos\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n\n    <span class="token comment">// A prop named "dialog" that requires an instance of Dialog.</span>\n    dialog<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Dialog<span class="token punctuation">)</span><span class="token punctuation">.</span>isRequired\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h2 id="default-values"><a href="#default-values" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Default Values</h2>\n<p>One common pattern we’ve seen with our React code is to do something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  render<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>value <span class="token operator">||</span> <span class="token string">\'default value\'</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Do this for a few <code class="gatsby-code-text">props</code> across a few components and now you have a lot of redundant code. Starting with React v0.4, you can provide default values in a declarative way:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  getDefaultProps<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'default value\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token operator">...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We will use the cached result of this function before each <code class="gatsby-code-text">render</code>. We also perform all validations before each <code class="gatsby-code-text">render</code> to ensure that you have all of the data you need in the right form before you try to use it.</p>\n<hr>\n<p>Both of these features are entirely optional. We’ve found them to be increasingly valuable at Facebook as our applications grow and evolve, and we hope others find them useful as well.</p>',excerpt:"Many of the questions we got following the public launch of React revolved around  , specifically that people wanted to do validation and to make sure their components had sensible defaults. Validation Oftentimes you want to validate your   before you use them. Perhaps you want to ensure they are a specific type. Or maybe you want to restrict your prop to specific values. Or maybe you want to make a specific prop required. This was always possible — you could have written validations in your…",frontmatter:{title:"New in React v0.4: Prop Validation and Default Values",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"July 10, 2013",path:"blog/2013-07-11-react-v0-4-prop-validation-and-default-values.md",slug:"/blog/2013/07/11/react-v0-4-prop-validation-and-default-values.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2013/07/11/react-v0-4-prop-validation-and-default-values.html"}}}});
//# sourceMappingURL=path---blog-2013-07-11-react-v-0-4-prop-validation-and-default-values-html-8cb71233567dd05d9286.js.map