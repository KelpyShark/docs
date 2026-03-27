<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="kelpyshark-standard-library-reference">KelpyShark Standard Library Reference</h1>
<p>A summary of the most useful functions and modules in the KelpyShark standard library.</p>
<h2 id="core-functions">Core Functions</h2>
<ul>
<li><code>print(value)</code>: Output to console</li>
<li><code>std.input(prompt)</code>: Read input from user</li>
<li><code>len(obj)</code>: Get length of list, string, etc.</li>
<li><code>range(n)</code>: Generate numbers 0 to n-1</li>
<li><code>type(obj)</code>: Get the type of an object</li>
<li><code>int(str)</code>, <code>float(str)</code>, <code>str(num)</code>: Type conversions</li>
</ul>
<h2 id="math-module">Math Module</h2>
<ul>
<li><code>math.sqrt(x)</code>: Square root</li>
<li><code>math.pow(a, b)</code>: Power</li>
<li><code>math.abs(x)</code>: Absolute value</li>
<li><code>math.sin(x)</code>, <code>math.cos(x)</code>, <code>math.tan(x)</code></li>
</ul>
<h2 id="string-methods">String Methods</h2>
<ul>
<li><code>s.upper()</code>, <code>s.lower()</code>, <code>s.split(sep)</code>, <code>s.join(list)</code></li>
<li><code>s.replace(old, new)</code>, <code>s.strip()</code></li>
</ul>
<h2 id="list-methods">List Methods</h2>
<ul>
<li><code>list.append(x)</code>, <code>list.remove(x)</code>, <code>list.pop()</code></li>
<li><code>list.map(f)</code>, <code>list.filter(f)</code>, <code>list.reduce(f, init)</code></li>
<li><code>list.sort()</code>, <code>list.reverse()</code></li>
</ul>
<h2 id="dictionary-methods">Dictionary Methods</h2>
<ul>
<li><code>dict.keys()</code>, <code>dict.values()</code>, <code>dict.items()</code></li>
<li><code>dict.get(key, default)</code></li>
</ul>
<h2 id="file-io">File IO</h2>
<ul>
<li><code>open(filename, mode)</code>: Open a file</li>
<li><code>file.read()</code>, <code>file.write(data)</code>, <code>file.close()</code></li>
</ul>
<h2 id="collections">Collections</h2>
<ul>
<li><code>std.set(list)</code>: Create a set</li>
<li><code>std.queue()</code>, <code>std.stack()</code>: Create queue/stack</li>
</ul>
<h2 id="modules">Modules</h2>
<ul>
<li><code>import math</code>, <code>import std.net</code>, etc.</li>
</ul>
<hr>
<p>See the full tutorial for detailed usage and more modules.</p>
