<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="kelpyshark-syntax-reference">KelpyShark Syntax Reference</h1>
<p>A summary of KelpyShark&#39;s syntax for quick lookup.</p>
<h2 id="variables">Variables</h2>
<ul>
<li>Assignment: <code>x = 5</code></li>
<li>Multiple assignment: <code>a, b = 1, 2</code></li>
</ul>
<h2 id="data-types">Data Types</h2>
<ul>
<li>Number: <code>42</code>, <code>3.14</code></li>
<li>String: <code>&quot;hello&quot;</code></li>
<li>List: <code>[1, 2, 3]</code></li>
<li>Dictionary: <code>{ &quot;key&quot;: &quot;value&quot; }</code></li>
<li>Boolean: <code>true</code>, <code>false</code></li>
</ul>
<h2 id="comments">Comments</h2>
<ul>
<li>Single line: <code># comment</code></li>
</ul>
<h2 id="functions">Functions</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">name</span><span class="hljs-params">(args)</span></span> {
    <span class="hljs-regexp">//</span> code
    <span class="hljs-keyword">return</span> value
}
</code></pre>
<h2 id="conditionals">Conditionals</h2>
<pre><code class="lang-kelpyshark">if <span class="hljs-class">cond </span>{
    <span class="hljs-comment">// code</span>
} elif <span class="hljs-class">cond2 </span>{
    <span class="hljs-comment">// code</span>
} <span class="hljs-class">else </span>{
    <span class="hljs-comment">// code</span>
}
</code></pre>
<h2 id="loops">Loops</h2>
<ul>
<li>For: <code>for item in list { ... }</code></li>
<li>While: <code>while cond { ... }</code></li>
</ul>
<h2 id="classes">Classes</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">class</span> Name <span class="hljs-comment">{
    def __init__(self, args) {
        // constructor
    }</span>
    def <span class="hljs-function"><span class="hljs-keyword">method</span><span class="hljs-params">(<span class="hljs-keyword">self</span>)</span> <span class="hljs-comment">{
        // code
    }</span>
}</span>
</code></pre>
<h2 id="error-handling">Error Handling</h2>
<ul>
<li>Try-catch: <code>try { ... } catch (err) { ... }</code></li>
<li>Throw: <code>throw &quot;message&quot;</code></li>
</ul>
<h2 id="importing">Importing</h2>
<ul>
<li><code>import module</code></li>
<li><code>from module import name</code></li>
</ul>
<h2 id="file-io">File IO</h2>
<ul>
<li><code>file = open(&quot;file.txt&quot;, &quot;r&quot;)</code></li>
<li><code>file.read()</code>, <code>file.write(data)</code>, <code>file.close()</code></li>
</ul>
<h2 id="list-methods">List Methods</h2>
<ul>
<li><code>append</code>, <code>remove</code>, <code>len</code>, <code>map</code>, <code>filter</code>, <code>reduce</code></li>
</ul>
<h2 id="dictionary-methods">Dictionary Methods</h2>
<ul>
<li><code>keys()</code>, <code>values()</code>, <code>items()</code></li>
</ul>
<h2 id="built-in-functions">Built-in Functions</h2>
<ul>
<li><code>print</code>, <code>len</code>, <code>range</code>, <code>int</code>, <code>float</code>, <code>str</code>, <code>type</code></li>
</ul>
<hr>
<p>For more, see the full tutorial and quick reference.</p>
