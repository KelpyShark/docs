<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="instance-methods">Instance Methods</h1>
<p>KelpyShark will support instance methods in future versions. For now, use functions that take a dictionary (object) as the first argument.</p>
<h2 id="example-simulating-instance-methods">Example: Simulating Instance Methods</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">birthday</span><span class="hljs-params">(person)</span></span> {
    person[<span class="hljs-string">"age"</span>] = person[<span class="hljs-string">"age"</span>] + <span class="hljs-number">1</span>
    <span class="hljs-keyword">return</span> person
}

bob = {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Bob"</span>, <span class="hljs-string">"age"</span>: <span class="hljs-number">25</span>}
bob = birthday(bob)
print bob[<span class="hljs-string">"age"</span>]   <span class="hljs-comment"># 26</span>
</code></pre>
<h2 id="planned-syntax-not-yet-implemented-">Planned Syntax (Not Yet Implemented)</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> {</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">birthday</span><span class="hljs-params">()</span></span> {
        <span class="hljs-keyword">self</span>.age = <span class="hljs-keyword">self</span>.age + <span class="hljs-number">1</span>
    }
}
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Use functions with the object as the first argument.</li>
<li>Instance method syntax is planned for future versions.</li>
</ul>
