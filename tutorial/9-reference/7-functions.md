<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="7-functions-quick-reference-">7. Functions (Quick Reference)</h1>
<h2 id="defining-functions">Defining Functions</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">add</span><span class="hljs-params">(a, b)</span></span> {
    <span class="hljs-keyword">return</span> a + b
}
</code></pre>
<h2 id="calling-functions">Calling Functions</h2>
<pre><code class="lang-kelpyshark">result = <span class="hljs-keyword">add</span><span class="bash">(3, 7)</span>
</code></pre>
<h2 id="return-values">Return Values</h2>
<ul>
<li>Use <code>return</code> to return a value</li>
<li>If no <code>return</code>, function returns <code>null</code></li>
</ul>
<h2 id="parameters">Parameters</h2>
<ul>
<li>Functions can have zero or more parameters</li>
<li>Parameters are positional</li>
</ul>
<h2 id="first-class-functions">First-Class Functions</h2>
<ul>
<li>Functions can be assigned to variables, passed as arguments, and returned</li>
</ul>
<h2 id="scope">Scope</h2>
<ul>
<li>Functions create a new variable scope</li>
</ul>
