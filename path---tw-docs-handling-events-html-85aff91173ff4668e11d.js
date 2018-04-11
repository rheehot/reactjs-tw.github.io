webpackJsonp([39756027183079],{932:function(n,s){n.exports={data:{markdownRemark:{html:'<p>React 和 DOM 的事件處理邏輯大致雷同，只有少數幾處不太一樣:</p>\n<ul>\n<li>React 事件採取駝峰式命名(camelCase)，一般 DOM 事件則以小寫命名。</li>\n<li>JSX 中以 javascript function 作為事件處理函式，DOM 則是以字串格式表示。</li>\n</ul>\n<p>以下是一段範例：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>activateLasers()<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Activate Lasers\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>其等價的 React 語式是：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="gatsby-highlight-code-line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>activateLasers<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>  Activate Lasers\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>此外，在 default behavior 的處理上也有所不同。在既有的 DOM 中，你可以回傳 <code class="gatsby-code-text">false</code> 來阻止事件的 default behavior 被執行。但在 React 中，你必須明確的呼叫 <code class="gatsby-code-text">preventDefault</code> 方能達到一樣的結果。下面這個例子中，如果你想阻止 link 的 default behavior - 開啟新頁，你可以這樣編寫：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code class="gatsby-code-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>console.log(<span class="token punctuation">\'</span>The link was clicked.<span class="token punctuation">\'</span>); return false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Click me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>但在 React 中，你必須寫成：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">function</span> <span class="token function">ActionLink</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token keyword">function</span> <span class="token function">handleClick</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'The link was clicked.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>      Click me\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>上面範例裡的 <code class="gatsby-code-text">e</code> 是 React 根據 <a href="https://www.w3.org/TR/DOM-Level-3-Events/">W3C 規範</a> 而模擬的事件，因此你不用擔心不同瀏覽器間的事件有所不同。更多細節請參考 <a href="/docs/events.html"><code class="gatsby-code-text">SyntheticEvent</code></a>。</p>\n<p>當你以 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes">ES6 class</a> 撰寫 React 元件時，我們通常以 class method 的形式撰寫事件的處理函式。舉一個名為 <code class="gatsby-code-text">Toggle</code> 的元件為例，它是一個具有 <code class="gatsby-code-text">ON</code> / <code class="gatsby-code-text">OFF</code> 兩個狀態的按鈕：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Toggle</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>isToggleOn<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="gatsby-highlight-code-line">    <span class="token comment">// This binding is necessary to make `this` work in the callback</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span>  <span class="token punctuation">}</span>\n\n<span class="gatsby-highlight-code-line">  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>prevState <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">      isToggleOn<span class="token punctuation">:</span> <span class="token operator">!</span>prevState<span class="token punctuation">.</span>isToggleOn\n</span><span class="gatsby-highlight-code-line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>        <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>isToggleOn <span class="token operator">?</span> <span class="token string">\'ON\'</span> <span class="token punctuation">:</span> <span class="token string">\'OFF\'</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Toggle</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'root\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><a href="http://codepen.io/gaearon/pen/xEmzGg?editors=0010">跳轉至 CodePen 測試</a></p>\n<p>在這裡你必須特別小心在 JSX 中 <code class="gatsby-code-text">this</code> 的使用。在 JavaScript 中， class method 預設是沒有做 this binding 的 (請參考<a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind">這篇文章</a>)。倘若你忘記替 <code class="gatsby-code-text">this.handleClick</code> 做正確的 this binding 就在 <code class="gatsby-code-text">onClick</code> 中使用，<code class="gatsby-code-text">this</code> 事實上可能會是 <code class="gatsby-code-text">undefined</code>。</p>\n<p>這並非 React 才獨有的問題，更多細節請參閱 <a href="https://www.smashingmagazine.com/2014/01/understanding-javascript-function-prototype-bind/">how functions work in JavaScript</a>。一般來說，如果你想使用 <code class="gatsby-code-text">onClick={this.handleClick}</code> 這種寫法，你應該自己做好 this binding。</p>\n<p>如果你覺得在 class 中都時時注意 this binding 的問題是很麻煩的事，這裡有兩種建議的寫法。其一是遵照 <a href="https://babeljs.io/docs/plugins/transform-class-properties/">public class fields syntax</a>，而這個特性已經被 <a href="https://github.com/facebookincubator/create-react-app">Create React App</a> 預設支援：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">LoggingButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">  <span class="token comment">// This syntax ensures `this` is bound within handleClick.</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token comment">// Warning: this is *experimental* syntax.</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token function-variable function">handleClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n</span><span class="gatsby-highlight-code-line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'this is:\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span><span class="gatsby-highlight-code-line">  <span class="token punctuation">}</span>\n</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        Click me\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>其二是使用 javascript 中的 <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow function</a>：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">LoggingButton</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'this is:\'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="gatsby-highlight-code-line">    <span class="token comment">// This syntax ensures `this` is bound within handleClick</span>\n</span><span class="gatsby-highlight-code-line">    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span>        Click me\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>但這種寫法的缺點是它會在 <code class="gatsby-code-text">LoggingButton</code> 每次 render 都產生新的 callback。假使你將這個 callback 傳遞給子元件，這將造成子元件出現許多無意義的渲染。針對這個缺點，我們建議在 <code class="gatsby-code-text">constructor</code> 就做好這個 callback 或者乾脆採取第一種 class fields syntax 的方法。</p>\n<h2 id="事件處理響應函式的參數傳遞"><a href="#%E4%BA%8B%E4%BB%B6%E8%99%95%E7%90%86%E9%9F%BF%E6%87%89%E5%87%BD%E5%BC%8F%E7%9A%84%E5%8F%83%E6%95%B8%E5%82%B3%E9%81%9E" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>事件處理響應函式的參數傳遞</h2>\n<p>我們常常會想要在多個地方共用同一個事件響應函式。舉例來說，在迴圈中傳遞 row id 是很常見的情況：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">deleteRow</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete Row<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>deleteRow<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Delete Row<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>上述兩個寫法是等價的，並分別用了 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">arrow functions</a> 及 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind"><code class="gatsby-code-text">Function.prototype.bind</code></a>。</p>\n<p>在這兩個寫法中，<code class="gatsby-code-text">e</code> 參數指的是 React 中的事件，他是跟在 ID 之後的第二參數。當我們使用 array function 時，必須明確寫出其傳遞。但第二種 <code class="gatsby-code-text">bind</code> 的寫法它會自動被傳遞。</p>',frontmatter:{title:"事件處理",next:"conditional-rendering.html",prev:"state-and-lifecycle.html"},fields:{path:"docs_tw/handling-events.md",slug:"tw/docs/handling-events.html"}}},pathContext:{slug:"tw/docs/handling-events.html"}}}});
//# sourceMappingURL=path---tw-docs-handling-events-html-85aff91173ff4668e11d.js.map