<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="error-hierarchy-in-kelpyshark">Error Hierarchy in KelpyShark</h1>
<p>While KelpyShark does not enforce a strict error class hierarchy, it is common practice to organize your custom errors by type or category. This helps with structured error handling and makes your code more maintainable.</p>
<h2 id="common-error-types">Common Error Types</h2>
<ul>
<li><code>TypeError</code>: Invalid type encountered.</li>
<li><code>ValueError</code>: Invalid value provided.</li>
<li><code>FileNotFoundError</code>: File operation failed due to missing file.</li>
<li><code>AuthError</code>: Authentication or authorization failure.</li>
<li><code>NetworkError</code>: Network operation failed.</li>
</ul>
<h2 id="example-categorizing-errors">Example: Categorizing Errors</h2>
<pre><code class="lang-kelpyshark">try {
    throw {
        <span class="hljs-keyword">type</span>: <span class="hljs-string">"TypeError"</span>,
        message: <span class="hljs-string">"Expected a string, got a number."</span>
    }
} catch (<span class="hljs-keyword">err</span>) {
    <span class="hljs-keyword">if</span> <span class="hljs-keyword">err</span>.<span class="hljs-keyword">type</span> == <span class="hljs-string">"TypeError"</span> {
        <span class="hljs-keyword">print</span>(<span class="hljs-string">"Type error: "</span> + <span class="hljs-keyword">err</span>.message)
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">print</span>(<span class="hljs-string">"Other error: "</span> + <span class="hljs-keyword">err</span>)
    }
}
</code></pre>
<h2 id="custom-hierarchies">Custom Hierarchies</h2>
<p>You can define your own hierarchy by using a <code>parentType</code> or similar property:</p>
<pre><code class="lang-kelpyshark">let err = {
<span class="hljs-symbol">    type:</span> <span class="hljs-string">"DatabaseConnectionError"</span>,
<span class="hljs-symbol">    parentType:</span> <span class="hljs-string">"DatabaseError"</span>,
<span class="hljs-symbol">    message:</span> <span class="hljs-string">"Could not connect to DB."</span>
}
throw err
</code></pre>
<p>In your <code>catch</code> block, you can check for both <code>type</code> and <code>parentType</code> to handle errors at different levels of specificity.</p>
<h2 id="best-practices">Best Practices</h2>
<ul>
<li>Use consistent naming for error types.</li>
<li>Document your error hierarchy for your team.</li>
<li>Handle general errors at a higher level, and specific errors where needed.</li>
</ul>
<h2 id="summary">Summary</h2>
<ul>
<li>Organize errors by type for clarity.</li>
<li>Use custom properties to create your own error hierarchies.</li>
<li>Check error types in <code>catch</code> blocks for precise handling.</li>
</ul>
