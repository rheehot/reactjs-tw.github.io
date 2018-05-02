webpackJsonp([0xe02e0fedb7a2],{665:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Today we’re releasing an update to address a potential XSS vulnerability that can\t arise when using user data as a <code class="gatsby-code-text">key</code>. Typically “safe” data is used for a <code class="gatsby-code-text">key</code>, for example, an id from your database, or a unique hash. However there are cases where it may be reasonable to use user generated content. A carefully crafted piece of content could result in arbitrary JS execution. While we make a very concerted effort to ensure all text is escaped before inserting it into the DOM, we missed one case. Immediately following the discovery of this vulnerability, we performed an audit to ensure we this was the only such vulnerability.</p>\n<p>This only affects v0.5.x and v0.4.x. Versions in the 0.3.x family are unaffected.</p>\n<p>Updated versions are available for immediate download via npm, bower, and on our <a href="/react/downloads.html">download page</a>.</p>\n<p>We take security very seriously at Facebook. For most of our products, users don’t need to know that a security issue has been fixed. But with libraries like React, we need to make sure developers using React have access to fixes to keep their users safe.</p>\n<p>While we’ve encouraged responsible disclosure as part of <a href="https://www.facebook.com/whitehat/">Facebook’s whitehat bounty program</a> since we launched, we don’t have a good process for notifying our users. Hopefully we don’t need to use it, but moving forward we’ll set up a little bit more process to ensure the safety of our users. Ember.js has <a href="http://emberjs.com/security/">an excellent policy</a> which we may use as our model.</p>\n<p>You can learn more about the vulnerability discussed here: <a href="https://groups.google.com/forum/#!topic/reactjs/OIqxlB2aGfU">CVE-2013-7035</a>.</p>',excerpt:"Today we’re releasing an update to address a potential XSS vulnerability that can\t arise when using user data as a  . Typically “safe” data is used for a  , for example, an id from your database, or a unique hash. However there are cases where it may be reasonable to use user generated content. A carefully crafted piece of content could result in arbitrary JS execution. While we make a very concerted effort to ensure all text is escaped before inserting it into the DOM, we missed one case…",frontmatter:{title:"React v0.5.2, v0.4.2",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"December 17, 2013",path:"blog/2013-12-18-react-v0.5.2-v0.4.2.md",slug:"/blog/2013/12/18/react-v0.5.2-v0.4.2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2013/12/18/react-v0.5.2-v0.4.2.html"}}}});
//# sourceMappingURL=path---blog-2013-12-18-react-v-0-5-2-v-0-4-2-html-9f3ee20295e4dbb863af.js.map