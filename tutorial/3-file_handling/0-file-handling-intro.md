<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="introduction-to-file-handling">Introduction to File Handling</h1>
<p>KelpyShark provides standard library functions for reading and writing files. File handling is essential for working with data stored on disk.</p>
<h2 id="example-reading-a-file">Example: Reading a File</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-built_in">content</span> = <span class="hljs-built_in">std</span>.read_file(<span class="hljs-string">"data.txt"</span>)
<span class="hljs-built_in">print</span> <span class="hljs-built_in">content</span>
</code></pre>
<h2 id="example-writing-a-file">Example: Writing a File</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-built_in">std</span>.write_file(<span class="hljs-string">"output.txt"</span>, <span class="hljs-string">"Hello, world!"</span>)
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Use <code>std.read_file</code> and <code>std.write_file</code> for basic file operations.</li>
</ul>
