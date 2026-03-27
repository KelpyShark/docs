<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="writing-files">Writing Files</h1>
<p>Use the standard library function <code>std.write_file(filename, content)</code> to write a string to a file.</p>
<h2 id="example">Example</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-built_in">std</span>.write_file(<span class="hljs-string">"output.txt"</span>, <span class="hljs-string">"KelpyShark is awesome!"</span>)
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li><code>std.write_file</code> writes the given string to the file.</li>
<li>Overwrites the file if it exists, creates it if not.</li>
</ul>
