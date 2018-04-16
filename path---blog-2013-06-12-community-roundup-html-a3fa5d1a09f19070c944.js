webpackJsonp([0x67c0e41b10a5],{645:function(e,t){e.exports={data:{markdownRemark:{html:'<p>React was open sourced two weeks ago and it’s time for a little round-up of what has been going on.</p>\n<h2 id="khan-academy-question-editor"><a href="#khan-academy-question-editor" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Khan Academy Question Editor</h2>\n<p>It looks like <a href="http://sophiebits.com/">Sophie Alpert</a> is the first person outside of Facebook and Instagram to push React code to production. We are very grateful for her contributions in form of pull requests, bug reports and presence on IRC (<a href="irc://chat.freenode.net/reactjs">#reactjs on Freenode</a>). Sophie wrote about her experience using React:</p>\n<blockquote>\n<p>I just rewrote a 2000-line project in React and have now made a handful of pull requests to React. Everything about React I’ve seen so far seems really well thought-out and I’m proud to be the first non-FB/IG production user of React.</p>\n<p>The project that I rewrote in React (and am continuing to improve) is the Khan Academy question editor which content creators can use to enter questions and hints that will be presented to students:</p>\n<figure><a href="http://sophiebits.com/2013/06/09/using-react-to-speed-up-khan-academy.html">\n  <a class="gatsby-resp-image-link" href="/static/khan-academy-editor-6766b99a660aad664aadd0fb63983ebe-f5968.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 485px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 64.94845360824742%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/webp;base64,UklGRmQAAABXRUJQVlA4IFgAAACQAwCdASoUAA0APm0skUWkIqGYBABABsSzgAApfVSHjvhWaH8QAP78mmmd44J+Asa25rbQuNtB8TmUoftf68Do/QBVkmgkaWxO5L/dlau+At2ZVnwFufAA&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="khan academy editor" title="" src="/static/khan-academy-editor-6766b99a660aad664aadd0fb63983ebe-f5968.png" srcset="/static/khan-academy-editor-6766b99a660aad664aadd0fb63983ebe-fd540.png 210w,\n/static/khan-academy-editor-6766b99a660aad664aadd0fb63983ebe-42a71.png 420w,\n/static/khan-academy-editor-6766b99a660aad664aadd0fb63983ebe-f5968.png 485w" sizes="(max-width: 485px) 100vw, 485px">\n    </span>\n  </span>\n  \n  </a>\n    </a></figure>\n<p><a href="http://sophiebits.com/2013/06/09/using-react-to-speed-up-khan-academy.html">Read the full post…</a></p>\n</blockquote>\n<h2 id="pimp-my-backboneview-by-replacing-it-with-react"><a href="#pimp-my-backboneview-by-replacing-it-with-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pimp my Backbone.View (by replacing it with React)</h2>\n<p><a href="https://blog.mayflower.de/">Paul Seiffert</a> wrote a blog post that explains how to integrate React into Backbone applications.</p>\n<blockquote>\n<p>React has some interesting concepts for JavaScript view objects that can be used to eliminate this one big problem I have with Backbone.js.</p>\n<p>As in most MVC implementations (although React is probably just a VC implementation), a view is one portion of the screen that is managed by a controlling object. This object is responsible for deciding when to re-render the view and how to react to user input. With React, these view-controllers objects are called components. A component knows how to render its view and how to handle to the user’s interaction with it.</p>\n<p>The interesting thing is that React is figuring out by itself when to re-render a view and how to do this in the most efficient way.</p>\n<p><a href="https://blog.mayflower.de/3937-Backbone-React.html">Read the full post…</a></p>\n</blockquote>\n<h2 id="using-facebooks-react-with-requirejs"><a href="#using-facebooks-react-with-requirejs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using facebook’s React with require.js</h2>\n<p><a href="http://blog.xenji.com/">Mario Mueller</a> wrote a menu component in React and was able to easily integrate it with require.js, EventEmitter2 and bower.</p>\n<blockquote>\n<p>I recently stumbled upon facebook’s React library, which is a JavaScript library for building reusable frontend components. Even if this lib is only at version 0.3.x it behaves very stable, it is fast and is fun to code. I’m a big fan of require.js, so I tried to use React within the require.js eco system. It was not as hard as expected and here are some examples and some thoughts about it.</p>\n<p><a href="http://blog.xenji.com/2013/06/facebooks-react-require-js.html">Read the full post…</a></p>\n</blockquote>\n<h2 id="origins-of-react"><a href="#origins-of-react" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Origins of React</h2>\n<p><a href="http://www.petehunt.net/blog/">Pete Hunt</a> explained what differentiates React from other JavaScript libraries in <a href="/blog/2013/06/05/why-react.html">a previous blog post</a>. <a href="http://leebyron.com/">Lee Byron</a> gives another perspective on Quora:</p>\n<blockquote>\n<p>React isn’t quite like any other popular JavaScript libraries, and it solves a very specific problem: complex UI rendering. It’s also intended to be used along side many other popular libraries. For example, React works well with Backbone.js, amongst many others.</p>\n<p>React was born out of frustrations with the common pattern of writing two-way data bindings in complex MVC apps. React is an implementation of one-way data bindings.</p>\n<p><a href="https://www.quora.com/React-JS-Library/How-is-Facebooks-React-JavaScript-library/answer/Lee-Byron?srid=3DcX">Read the full post…</a></p>\n</blockquote>',excerpt:"React was open sourced two weeks ago and it’s time for a little round-up of what has been going on. Khan Academy Question Editor It looks like  Sophie Alpert  is the first person outside of Facebook and Instagram to push React code to production. We are very grateful for her contributions in form of pull requests, bug reports and presence on IRC ( #reactjs on Freenode ). Sophie wrote about her experience using React: I just rewrote a 2000-line project in React and have now made a handful of pull…",frontmatter:{title:"Community Round-up #1",next:null,prev:null,author:[{frontmatter:{name:"Vjeux",url:"https://twitter.com/vjeux"}}]},fields:{date:"June 11, 2013",path:"blog/2013-06-12-community-roundup.md",slug:"/blog/2013/06/12/community-roundup.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2013/06/12/community-roundup.html"}}}});
//# sourceMappingURL=path---blog-2013-06-12-community-roundup-html-a3fa5d1a09f19070c944.js.map