<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="checking-if-a-file-exists">Checking if a File Exists</h1>
<p>KelpyShark&#39;s standard library provides a function to check if a file exists.</p>
<h2 id="example">Example</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">if</span> <span class="hljs-built_in">std</span>.file_exists(<span class="hljs-string">"data.txt"</span>) {
    <span class="hljs-built_in">print</span> <span class="hljs-string">"File found!"</span>
} <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">print</span> <span class="hljs-string">"File not found."</span>
}
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Use <code>std.file_exists(filename)</code> to check for file existence.</li>
</ul>
