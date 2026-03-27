<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="8-collections-quick-reference-">8. Collections (Quick Reference)</h1>
<h2 id="lists">Lists</h2>
<ul>
<li>Ordered, zero-based index</li>
<li>Created with <code>[ ... ]</code></li>
</ul>
<pre><code class="lang-kelpyshark">fruits = [<span class="hljs-string">"apple"</span>, <span class="hljs-string">"banana"</span>, <span class="hljs-string">"cherry"</span>]
<span class="hljs-keyword">print</span> fruits[<span class="hljs-number">0</span>]      <span class="hljs-meta"># <span class="hljs-meta-string">"apple"</span></span>
<span class="hljs-keyword">print</span> len(fruits)    <span class="hljs-meta"># <span class="hljs-number">3</span></span>
</code></pre>
<h2 id="dictionaries-dicts-">Dictionaries (Dicts)</h2>
<ul>
<li>Key-value pairs</li>
<li>Created with <code>{ ... }</code></li>
</ul>
<pre><code class="lang-kelpyshark">person = {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Alice"</span>, <span class="hljs-string">"age"</span>: 30}
<span class="hljs-built_in">print</span> person[<span class="hljs-string">"name"</span>]    <span class="hljs-comment"># "Alice"</span>
<span class="hljs-built_in">print</span> len(person)       <span class="hljs-comment"># 2</span>
</code></pre>
<h2 id="indexing">Indexing</h2>
<ul>
<li>Lists: <code>list[index]</code></li>
<li>Dicts: <code>dict[key]</code></li>
</ul>
<h2 id="built-in-functions">Built-in Functions</h2>
<ul>
<li><code>len(x)</code> — Length of list, dict, or string</li>
<li><code>push(list, value)</code> — Returns new list with value appended</li>
</ul>
