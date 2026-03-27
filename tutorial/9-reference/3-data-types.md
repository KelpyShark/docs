<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="3-data-types-quick-reference-">3. Data Types (Quick Reference)</h1>
<p>KelpyShark supports the following built-in data types:</p>
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
<h2 id="type-checking">Type Checking</h2>
<ul>
<li>Use <code>type(x)</code> to get the type name as a string</li>
</ul>
<h2 id="type-conversion">Type Conversion</h2>
<ul>
<li><code>str(x)</code> — Convert to string</li>
<li><code>num(x)</code> — Convert to number</li>
</ul>
<h2 id="example">Example</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">42</span>
<span class="hljs-attr">s</span> = <span class="hljs-string">"42"</span>
<span class="hljs-attr">b</span> = <span class="hljs-literal">true</span>
<span class="hljs-attr">l</span> = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]
<span class="hljs-attr">d</span> = {<span class="hljs-string">"a"</span>: <span class="hljs-number">1</span>, <span class="hljs-string">"b"</span>: <span class="hljs-number">2</span>}
print type(x)   <span class="hljs-comment"># "number"</span>
print type(l)   <span class="hljs-comment"># "list"</span>
</code></pre>
