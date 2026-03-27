<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="data-types-in-kelpyshark">Data Types in KelpyShark</h1>
<p>KelpyShark supports several built-in data types:</p>
<table>
<thead>
<tr>
<th>Type</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Number</td>
<td><code>42</code>, <code>3.14</code></td>
<td>Floating-point numbers</td>
</tr>
<tr>
<td>String</td>
<td><code>&quot;hello&quot;</code></td>
<td>Text, supports interpolation</td>
</tr>
<tr>
<td>Boolean</td>
<td><code>true</code>, <code>false</code></td>
<td>Logical values</td>
</tr>
<tr>
<td>List</td>
<td><code>[1, 2, 3]</code></td>
<td>Ordered collection</td>
</tr>
<tr>
<td>Dict</td>
<td><code>{ &quot;a&quot;: 1, &quot;b&quot;: 2 }</code></td>
<td>Key-value pairs</td>
</tr>
<tr>
<td>Null</td>
<td><code>null</code> (implicit)</td>
<td>No value</td>
</tr>
</tbody>
</table>
<h2 id="examples">Examples</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">num</span> = <span class="hljs-number">3.14</span>
<span class="hljs-attr">text</span> = <span class="hljs-string">"KelpyShark"</span>
<span class="hljs-attr">flag</span> = <span class="hljs-literal">false</span>
<span class="hljs-attr">lst</span> = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]
<span class="hljs-attr">person</span> = {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Alice"</span>, <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>}
<span class="hljs-attr">empty</span> = null
</code></pre>
<h2 id="type-checking">Type Checking</h2>
<p>Use <code>type(x)</code> to get the type name as a string:</p>
<pre><code class="lang-kelpyshark">print <span class="hljs-class"><span class="hljs-keyword">type</span></span>(<span class="hljs-number">42</span>)        # <span class="hljs-string">"number"</span>
print <span class="hljs-class"><span class="hljs-keyword">type</span></span>([<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>])   # <span class="hljs-string">"list"</span>
print <span class="hljs-class"><span class="hljs-keyword">type</span></span>({})        # <span class="hljs-string">"dict"</span>
print <span class="hljs-class"><span class="hljs-keyword">type</span></span>(<span class="hljs-keyword">null</span>)      # <span class="hljs-string">"null"</span>
</code></pre>
<h2 id="type-conversion">Type Conversion</h2>
<ul>
<li><code>str(x)</code> — Convert to string</li>
<li><code>num(x)</code> — Convert to number</li>
</ul>
<h2 id="null-values">Null Values</h2>
<p><code>null</code> represents the absence of a value. Many operations on <code>null</code> will cause errors:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-literal">null</span>
<span class="hljs-keyword">if</span> <span class="hljs-attr">x</span> == <span class="hljs-literal">null</span> {
 print <span class="hljs-string">"No value"</span>
}
</code></pre>
<h2 id="dynamic-typing">Dynamic Typing</h2>
<p>Variables can change type at runtime:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">5</span>
<span class="hljs-attr">x</span> = <span class="hljs-string">"now a string"</span>
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Use <code>type()</code> to inspect types.</li>
<li>Types are dynamic and flexible.</li>
</ul>
