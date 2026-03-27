<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="2-syntax-structure-quick-reference-">2. Syntax &amp; Structure (Quick Reference)</h1>
<h2 id="comments">Comments</h2>
<ul>
<li>Single line: <code># This is a comment</code></li>
<li><p>Multi-line:</p>
<pre><code class="lang-kelpyshark">###
This is a
multi-line comment
###
</code></pre>
</li>
</ul>
<h2 id="program-structure">Program Structure</h2>
<ul>
<li>Statements end at line breaks or block close</li>
<li>Curly braces <code>{ ... }</code> define code blocks</li>
</ul>
<h2 id="example">Example</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-meta"># Variable assignment</span>
greeting = <span class="hljs-string">"Hello, world!"</span>

<span class="hljs-meta"># Function definition</span>
def greet(name) {
    <span class="hljs-keyword">print</span> <span class="hljs-string">"Hello, {$name}!"</span>
}

<span class="hljs-meta"># <span class="hljs-meta-keyword">If</span>/<span class="hljs-meta-keyword">else</span></span>
<span class="hljs-keyword">if</span> greeting == <span class="hljs-string">"Hello, world!"</span> {
    <span class="hljs-keyword">print</span> <span class="hljs-string">"It's a greeting!"</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">print</span> <span class="hljs-string">"Not a greeting."</span>
}
</code></pre>
<h2 id="indentation">Indentation</h2>
<ul>
<li>Indentation is for readability only (not required for syntax)</li>
</ul>
