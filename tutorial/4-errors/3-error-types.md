<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="error-types">Error Types</h1>
<p>KelpyShark may provide different error types in the future. For now, errors are usually strings or objects describing the problem.</p>
<h2 id="example">Example</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">try</span> {
    throw {<span class="hljs-string">"type"</span>: <span class="hljs-string">"ValueError"</span>, <span class="hljs-string">"message"</span>: <span class="hljs-string">"Invalid value"</span>}
} <span class="hljs-keyword">catch</span> (err) {
    print err[<span class="hljs-string">"type"</span>], err[<span class="hljs-string">"message"</span>]
}
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Errors can be strings or dictionaries.</li>
<li>Future versions may add built-in error types.</li>
</ul>
