<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="comments-in-kelpyshark">Comments in KelpyShark</h1>
<p>Comments are ignored by the interpreter and are used to explain code, clarify intent, or temporarily disable code.</p>
<h2 id="single-line-comments">Single-line Comments</h2>
<p>Start with <code>#</code>:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-comment"># This is a single-line comment</span>
<span class="hljs-built_in">print</span> <span class="hljs-string">"Hello"</span>  <span class="hljs-comment"># This prints Hello</span>
</code></pre>
<h2 id="multi-line-comments">Multi-line Comments</h2>
<p>Wrap with <code>### ... ###</code>:</p>
<pre><code class="lang-kelpyshark">###
This is a
multi-line comment
###
</code></pre>
<h2 id="commenting-out-code">Commenting Out Code</h2>
<p>You can use comments to disable code for testing:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-comment"># print "This won't run"</span>
</code></pre>
<h2 id="best-practices">Best Practices</h2>
<ul>
<li>Use comments to explain why, not just what</li>
<li>Keep comments up to date</li>
<li>Avoid obvious comments (&quot;increment x by 1&quot; for <code>x = x + 1</code>)</li>
<li>Prefer clear code over excessive comments</li>
</ul>
<h2 id="summary">Summary</h2>
<ul>
<li>Use <code>#</code> for single-line, <code>### ... ###</code> for multi-line comments.</li>
<li>Comments help others (and your future self) understand your code.</li>
</ul>
