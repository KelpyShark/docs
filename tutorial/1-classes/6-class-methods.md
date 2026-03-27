<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="class-methods">Class Methods</h1>
<p>KelpyShark will support class methods in future versions. For now, use standalone functions that operate on dictionaries representing classes or objects.</p>
<h2 id="example-simulating-class-methods">Example: Simulating Class Methods</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">describe_person</span><span class="hljs-params">(person)</span></span> {
    print person[<span class="hljs-string">"name"</span>] + <span class="hljs-string">" is "</span> + person[<span class="hljs-string">"age"</span>] + <span class="hljs-string">" years old."</span>
}

alice = {<span class="hljs-string">"name"</span>: <span class="hljs-string">"Alice"</span>, <span class="hljs-string">"age"</span>: <span class="hljs-number">30</span>}
describe_person(alice)   <span class="hljs-comment"># Alice is 30 years old.</span>
</code></pre>
<h2 id="planned-syntax-not-yet-implemented-">Planned Syntax (Not Yet Implemented)</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Person</span> {</span>
    @classmethod
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">describe</span><span class="hljs-params">(cls)</span></span> {
        print cls.name + <span class="hljs-string">" is "</span> + cls.age + <span class="hljs-string">" years old."</span>
    }
}
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Use standalone functions for class-level operations.</li>
<li>Class method syntax is planned for future versions.</li>
</ul>
