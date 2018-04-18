webpackJsonp([7295711041989],{860:function(n,s){n.exports={data:{markdownRemark:{html:'<blockquote>\n<p>Note:</p>\n<p><code class="gatsby-code-text">React.PropTypes</code> has moved into a different package since React v15.5. Please use <a href="https://www.npmjs.com/package/prop-types">the <code class="gatsby-code-text">prop-types</code> library instead</a>.</p>\n<p>We provide <a href="/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactproptypes">a codemod script</a> to automate the conversion.</p>\n</blockquote>\n<p>As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like <a href="https://flowtype.org/">Flow</a> or <a href="https://www.typescriptlang.org/">TypeScript</a> to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special <code class="gatsby-code-text">propTypes</code> property:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nGreeting<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p><code class="gatsby-code-text">PropTypes</code> exports a range of validators that can be used to make sure the data you receive is valid. In this example, we’re using <code class="gatsby-code-text">PropTypes.string</code>. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, <code class="gatsby-code-text">propTypes</code> is only checked in development mode.</p>\n<h3 id="proptypes"><a href="#proptypes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>PropTypes</h3>\n<p>Here is an example documenting the different validators provided:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\nMyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// You can declare that a prop is a specific JS type. By default, these</span>\n  <span class="token comment">// are all optional.</span>\n  optionalArray<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>array<span class="token punctuation">,</span>\n  optionalBool<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>bool<span class="token punctuation">,</span>\n  optionalFunc<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">,</span>\n  optionalNumber<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>\n  optionalObject<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>object<span class="token punctuation">,</span>\n  optionalString<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n  optionalSymbol<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>symbol<span class="token punctuation">,</span>\n\n  <span class="token comment">// Anything that can be rendered: numbers, strings, elements or an array</span>\n  <span class="token comment">// (or fragment) containing these types.</span>\n  optionalNode<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>node<span class="token punctuation">,</span>\n\n  <span class="token comment">// A React element.</span>\n  optionalElement<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>element<span class="token punctuation">,</span>\n\n  <span class="token comment">// You can also declare that a prop is an instance of a class. This uses</span>\n  <span class="token comment">// JS\'s instanceof operator.</span>\n  optionalMessage<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Message<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// You can ensure that your prop is limited to specific values by treating</span>\n  <span class="token comment">// it as an enum.</span>\n  optionalEnum<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'News\'</span><span class="token punctuation">,</span> <span class="token string">\'Photos\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// An object that could be one of many types</span>\n  optionalUnion<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">oneOfType</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n    PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">,</span>\n    PropTypes<span class="token punctuation">.</span><span class="token function">instanceOf</span><span class="token punctuation">(</span>Message<span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// An array of a certain type</span>\n  optionalArrayOf<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// An object with property values of a certain type</span>\n  optionalObjectOf<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">objectOf</span><span class="token punctuation">(</span>PropTypes<span class="token punctuation">.</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// An object taking on a particular shape</span>\n  optionalObjectWithShape<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">shape</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>string<span class="token punctuation">,</span>\n    fontSize<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>number\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// You can chain any of the above with `isRequired` to make sure a warning</span>\n  <span class="token comment">// is shown if the prop isn\'t provided.</span>\n  requiredFunc<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>func<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n\n  <span class="token comment">// A value of any data type</span>\n  requiredAny<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>any<span class="token punctuation">.</span>isRequired<span class="token punctuation">,</span>\n\n  <span class="token comment">// You can also specify a custom validator. It should return an Error</span>\n  <span class="token comment">// object if the validation fails. Don\'t `console.warn` or throw, as this</span>\n  <span class="token comment">// won\'t work inside `oneOfType`.</span>\n  customProp<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> propName<span class="token punctuation">,</span> componentName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex">/matchme/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>props<span class="token punctuation">[</span>propName<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>\n        \'Invalid prop <span class="token template-string"><span class="token string">`\' + propName + \'`</span></span> supplied to\' <span class="token operator">+</span>\n        \' <span class="token template-string"><span class="token string">`\' + componentName + \'`</span></span><span class="token punctuation">.</span> Validation failed<span class="token punctuation">.</span>\'\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// You can also supply a custom validator to `arrayOf` and `objectOf`.</span>\n  <span class="token comment">// It should return an Error object if the validation fails. The validator</span>\n  <span class="token comment">// will be called for each key in the array or object. The first two</span>\n  <span class="token comment">// arguments of the validator are the array or object itself, and the</span>\n  <span class="token comment">// current item\'s key.</span>\n  customArrayProp<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span><span class="token function">arrayOf</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>propValue<span class="token punctuation">,</span> key<span class="token punctuation">,</span> componentName<span class="token punctuation">,</span> location<span class="token punctuation">,</span> propFullName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token regex">/matchme/</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>propValue<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>\n        \'Invalid prop <span class="token template-string"><span class="token string">`\' + propFullName + \'`</span></span> supplied to\' <span class="token operator">+</span>\n        \' <span class="token template-string"><span class="token string">`\' + componentName + \'`</span></span><span class="token punctuation">.</span> Validation failed<span class="token punctuation">.</span>\'\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="requiring-single-child"><a href="#requiring-single-child" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Requiring Single Child</h3>\n<p>With <code class="gatsby-code-text">PropTypes.element</code> you can specify that only a single child can be passed to a component as children.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> PropTypes <span class="token keyword">from</span> <span class="token string">\'prop-types\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// This must be exactly one element or it will warn.</span>\n    <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nMyComponent<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  children<span class="token punctuation">:</span> PropTypes<span class="token punctuation">.</span>element<span class="token punctuation">.</span>isRequired\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<h3 id="default-prop-values"><a href="#default-prop-values" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Default Prop Values</h3>\n<p>You can define default values for your <code class="gatsby-code-text">props</code> by assigning to the special <code class="gatsby-code-text">defaultProps</code> property:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Specifies the default values for props:</span>\nGreeting<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Stranger\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Renders "Hello, Stranger":</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Greeting</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'example\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>If you are using a Babel transform like <a href="https://babeljs.io/docs/plugins/transform-class-properties/">transform-class-properties</a> , you can also declare <code class="gatsby-code-text">defaultProps</code> as static property within a React component class. This syntax has not yet been finalized though and will require a compilation step to work within a browser. For more information, see the <a href="https://github.com/tc39/proposal-class-fields">class fields proposal</a>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">Greeting</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    name<span class="token punctuation">:</span> <span class="token string">\'stranger\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>Hello<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>The <code class="gatsby-code-text">defaultProps</code> will be used to ensure that <code class="gatsby-code-text">this.props.name</code> will have a value if it was not specified by the parent component. The <code class="gatsby-code-text">propTypes</code> typechecking happens after <code class="gatsby-code-text">defaultProps</code> are resolved, so typechecking will also apply to the <code class="gatsby-code-text">defaultProps</code>.</p>',frontmatter:{title:"Typechecking With PropTypes",next:null,prev:null},fields:{path:"docs/typechecking-with-proptypes.md",slug:"docs/typechecking-with-proptypes.html"}}},pathContext:{slug:"docs/typechecking-with-proptypes.html"}}}});
//# sourceMappingURL=path---docs-typechecking-with-proptypes-html-6c53bba6700c985b78f3.js.map