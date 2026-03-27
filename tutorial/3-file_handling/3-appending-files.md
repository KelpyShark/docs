<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="appending-to-files">Appending to Files</h1>
<p>KelpyShark&#39;s standard library may provide an <code>append_file</code> function in the future. For now, read the file, concatenate the new content, and write it back.</p>
<h2 id="example">Example</h2>
<pre><code class="lang-kelpyshark">old = <span class="hljs-built_in">std</span>.read_file(<span class="hljs-string">"log.txt"</span>)
<span class="hljs-keyword">new</span> = old + <span class="hljs-string">"\nNew entry."</span>
<span class="hljs-built_in">std</span>.write_file(<span class="hljs-string">"log.txt"</span>, <span class="hljs-keyword">new</span>)
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Read, concatenate, and write to append content.</li>
<li>Native append support may be added in future versions.</li>
</ul>
