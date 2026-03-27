<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="variables-in-kelpyshark">Variables in KelpyShark</h1>
<p>Variables store values for later use. They are created by assignment and do not require a type declaration.</p>
<h2 id="declaring-variables">Declaring Variables</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">10</span>
<span class="hljs-attr">y</span> = <span class="hljs-string">"hello"</span>
<span class="hljs-attr">flag</span> = <span class="hljs-literal">false</span>
</code></pre>
<h2 id="naming-rules">Naming Rules</h2>
<ul>
<li>Case-sensitive: <code>myVar</code> and <code>myvar</code> are different</li>
<li>Letters, digits, underscores (<code>_</code>)</li>
<li>Cannot start with a digit (e.g., <code>2cool</code> is invalid)</li>
<li>Avoid reserved words (like <code>if</code>, <code>for</code>, <code>def</code>)</li>
</ul>
<h2 id="naming-conventions">Naming Conventions</h2>
<ul>
<li>Use descriptive names: <code>total_score</code>, <code>userName</code></li>
<li>Use lowercase with underscores for variables, UpperCamelCase for types/classes (future)</li>
</ul>
<h2 id="reassignment-and-dynamic-typing">Reassignment and Dynamic Typing</h2>
<p>Variables can be reassigned to any type:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">5</span>
<span class="hljs-attr">x</span> = <span class="hljs-string">"now a string"</span>
</code></pre>
<h2 id="scope">Scope</h2>
<p>Variables are block-scoped (curly braces) and function-scoped:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">1</span>
<span class="hljs-keyword">if</span> <span class="hljs-literal">true</span> {
 <span class="hljs-attr">x</span> = <span class="hljs-number">2</span>      <span class="hljs-comment"># modifies outer x</span>
 <span class="hljs-attr">y</span> = <span class="hljs-number">3</span>      <span class="hljs-comment"># y exists only in this block</span>
}
print x       <span class="hljs-comment"># 2</span>
print y       <span class="hljs-comment"># Error: y is not defined</span>
</code></pre>
<h2 id="shadowing">Shadowing</h2>
<p>Inner variables can shadow outer ones:</p>
<pre><code class="lang-kelpyshark">x = 10
<span class="hljs-keyword">if</span> <span class="hljs-literal">true</span> {
 x = 20   <span class="hljs-comment"># shadows outer x</span>
 <span class="hljs-built_in">print</span> x  <span class="hljs-comment"># 20</span>
}
<span class="hljs-built_in">print</span> x      <span class="hljs-comment"># 20 (same variable, not a new one)</span>
</code></pre>
<h2 id="constants">Constants</h2>
<p>KelpyShark does not have built-in constants, but you can use naming conventions (e.g., <code>PI = 3.14</code>).</p>
<h2 id="summary">Summary</h2>
<ul>
<li>Variables are dynamically typed and block-scoped.</li>
<li>Use clear, descriptive names.</li>
</ul>
