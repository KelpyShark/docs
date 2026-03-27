<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="classes-summary">Classes Summary</h1>
<ul>
<li>KelpyShark will support full class syntax in future versions.</li>
<li>For now, use dictionaries to represent objects and functions to operate on them.</li>
<li>Simulate attributes, methods, and inheritance using dictionaries and functions.</li>
<li>Planned features include class definitions, constructors, instance/class/static methods, and inheritance.</li>
</ul>
<h2 id="example-recap">Example Recap</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">make_person</span><span class="hljs-params">(name, age)</span></span> {
    <span class="hljs-keyword">return</span> {<span class="hljs-string">"name"</span>: name, <span class="hljs-string">"age"</span>: age}
}

<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">birthday</span><span class="hljs-params">(person)</span></span> {
    person[<span class="hljs-string">"age"</span>] = person[<span class="hljs-string">"age"</span>] + <span class="hljs-number">1</span>
    <span class="hljs-keyword">return</span> person
}

alice = make_person(<span class="hljs-string">"Alice"</span>, <span class="hljs-number">30</span>)
alice = birthday(alice)
print alice[<span class="hljs-string">"age"</span>]   <span class="hljs-comment"># 31</span>
</code></pre>
<p>Stay tuned for future updates to the language!</p>
