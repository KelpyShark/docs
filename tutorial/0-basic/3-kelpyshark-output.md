<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="output-in-kelpyshark">Output in KelpyShark</h1>
<p>Use the <code>print</code> statement to display output to the console.</p>
<h2 id="printing-strings-and-numbers">Printing Strings and Numbers</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-built_in">print</span> <span class="hljs-string">"Hello, world!"</span>
<span class="hljs-built_in">print</span> <span class="hljs-number">42</span>
</code></pre>
<h2 id="printing-variables">Printing Variables</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-built_in">name</span> = <span class="hljs-string">"Alice"</span>
<span class="hljs-built_in">score</span> = <span class="hljs-number">99</span>
print <span class="hljs-built_in">name</span>
print <span class="hljs-string">"Score: "</span> + <span class="hljs-built_in">str</span>(<span class="hljs-built_in">score</span>)
</code></pre>
<h2 id="string-interpolation">String Interpolation</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-literal">user</span> = <span class="hljs-string">"Bob"</span>
<span class="hljs-literal">print</span> <span class="hljs-string">"Welcome, {<span class="hljs-variable">$user</span>}!"</span>
</code></pre>
<h2 id="printing-multiple-values">Printing Multiple Values</h2>
<p>Concatenate values with <code>+</code>:</p>
<pre><code class="lang-kelpyshark">x = <span class="hljs-number">5</span>
y = <span class="hljs-number">10</span>
print <span class="hljs-string">"x = "</span> + str(<span class="hljs-name">x</span>) + <span class="hljs-string">", y = "</span> + str(<span class="hljs-name">y</span>)
</code></pre>
<h2 id="printing-lists-and-dicts">Printing Lists and Dicts</h2>
<pre><code class="lang-kelpyshark">nums = [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]
<span class="hljs-keyword">print</span> nums   <span class="hljs-meta"># [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>]</span>
person = <span class="hljs-string">{"name": "Alice"}</span>
<span class="hljs-keyword">print</span> person <span class="hljs-meta"># {<span class="hljs-meta-string">"name"</span>:<span class="hljs-meta-string">"Alice"</span>}</span>
</code></pre>
<h2 id="formatting-output">Formatting Output</h2>
<p>Use string interpolation for formatted output:</p>
<pre><code class="lang-kelpyshark">name = <span class="hljs-string">"Eve"</span>
age = 27
<span class="hljs-built_in">print</span> <span class="hljs-string">"{<span class="hljs-variable">$name</span>} is {<span class="hljs-variable">$age</span>} years old."</span>
</code></pre>
<h2 id="summary">Summary</h2>
<ul>
<li>Use <code>print</code> for output.</li>
<li>Concatenate or interpolate for complex output.</li>
</ul>
