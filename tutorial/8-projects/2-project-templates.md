<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="project-templates">Project Templates</h1>
<p>Use these templates to start your own KelpyShark projects.</p>
<h2 id="1-basic-script">1. Basic Script</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-meta"># main.ks</span>
<span class="hljs-built_in">print</span> <span class="hljs-string">"Hello, KelpyShark!"</span>
</code></pre>
<h2 id="2-modular-project">2. Modular Project</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-comment"># main.ks</span>
import utils
print utils.greet(<span class="hljs-string">"Alice"</span>)

<span class="hljs-comment"># utils.ks</span>
<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">greet</span><span class="hljs-params">(name)</span></span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">"Hello, "</span> + name
}
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Use these templates as a starting point for your projects.</li>
</ul>
