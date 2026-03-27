<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="inheritance">Inheritance</h1>
<p>KelpyShark plans to support class inheritance in future versions. Currently, you can simulate inheritance by copying and extending dictionaries and functions.</p>
<h2 id="example-simulating-inheritance">Example: Simulating Inheritance</h2>
<pre><code class="lang-kelpyshark">animal = {"type": "animal"}
dog = animal.copy()
dog["type"] = "dog"
dog["bark"] = def() { print "Woof!" }

dog[<span class="hljs-string">"bark"</span>](<span class="hljs-link"></span>)   # Woof!
</code></pre>
<h2 id="planned-syntax-not-yet-implemented-">Planned Syntax (Not Yet Implemented)</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Dog</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Animal</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">bark</span></span>() {
        print <span class="hljs-string">"Woof!"</span>
    }
}
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Inheritance is not yet available.</li>
<li>Use dictionary copying and extension to simulate inheritance.</li>
</ul>
