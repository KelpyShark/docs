<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="4-variables-assignment-quick-reference-">4. Variables &amp; Assignment (Quick Reference)</h1>
<h2 id="declaring-variables">Declaring Variables</h2>
<ul>
<li>Variables are created on assignment</li>
<li>No <code>var</code> or <code>let</code> keyword needed</li>
</ul>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">10</span>
<span class="hljs-attr">y</span> = <span class="hljs-string">"hello"</span>
</code></pre>
<h2 id="naming-rules">Naming Rules</h2>
<ul>
<li>Case-sensitive</li>
<li>Letters, digits, underscores</li>
<li>Cannot start with a digit</li>
</ul>
<h2 id="reassignment">Reassignment</h2>
<ul>
<li>Variables can be reassigned to any type</li>
</ul>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">5</span>
<span class="hljs-attr">x</span> = <span class="hljs-string">"now a string"</span>
</code></pre>
<h2 id="scope">Scope</h2>
<ul>
<li>Variables are block-scoped (curly braces)</li>
<li>Functions create their own scope</li>
</ul>
