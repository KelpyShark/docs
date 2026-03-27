<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="strings-in-kelpyshark">Strings in KelpyShark</h1>
<p>Strings are sequences of characters, created with double quotes:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">s</span> = <span class="hljs-string">"Hello, world!"</span>
<span class="hljs-attr">empty</span> = <span class="hljs-string">""</span>
</code></pre>
<h2 id="string-interpolation">String Interpolation</h2>
<p>Embed expressions in strings using <code>{$expr}</code>:</p>
<pre><code class="lang-kelpyshark">name = <span class="hljs-string">"Alice"</span>
age = 30
<span class="hljs-built_in">print</span> <span class="hljs-string">"Hello, {<span class="hljs-variable">$name</span>}! You are {<span class="hljs-variable">$age</span>} years old."</span>
<span class="hljs-comment"># Output: Hello, Alice! You are 30 years old.</span>
</code></pre>
<h2 id="concatenation">Concatenation</h2>
<p>Join strings with <code>+</code>:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-built_in">first</span> = <span class="hljs-string">"Kelpy"</span>
<span class="hljs-built_in">last</span> = <span class="hljs-string">"Shark"</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">first</span> + <span class="hljs-built_in">last</span>  # <span class="hljs-string">"KelpyShark"</span>
<span class="hljs-built_in">print</span> <span class="hljs-string">"Score: "</span> + str(<span class="hljs-number">42</span>)
</code></pre>
<h2 id="escape-sequences">Escape Sequences</h2>
<p>Use backslash <code>\</code> for special characters:</p>
<ul>
<li><code>\n</code> — Newline</li>
<li><code>\t</code> — Tab</li>
<li><code>\\</code> — Backslash</li>
<li><code>\&quot;</code> — Double quote</li>
</ul>
<pre><code class="lang-kelpyshark"><span class="hljs-literal">print</span> <span class="hljs-string">"Line1\nLine2"</span>   <span class="hljs-comment"># Prints two lines</span>
<span class="hljs-literal">print</span> <span class="hljs-string">"Tab\tSeparated"</span>
<span class="hljs-literal">print</span> <span class="hljs-string">"She said: \"</span>Hi!\<span class="hljs-string">""</span>
</code></pre>
<h2 id="string-methods-via-std-library-">String Methods (via std library)</h2>
<p>KelpyShark provides string functions in the standard library:</p>
<pre><code class="lang-kelpyshark">import <span class="hljs-built_in">std</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">std</span>.upper(<span class="hljs-string">"hello"</span>)    # <span class="hljs-string">"HELLO"</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">std</span>.lower(<span class="hljs-string">"HELLO"</span>)    # <span class="hljs-string">"hello"</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">std</span>.len(<span class="hljs-string">"abc"</span>)        # <span class="hljs-number">3</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">std</span>.<span class="hljs-built_in">split</span>(<span class="hljs-string">"a,b,c"</span>, <span class="hljs-string">","</span>)  # [<span class="hljs-string">"a"</span>,<span class="hljs-string">"b"</span>,<span class="hljs-string">"c"</span>]
<span class="hljs-built_in">print</span> <span class="hljs-built_in">std</span>.<span class="hljs-built_in">join</span>([<span class="hljs-string">"a"</span>,<span class="hljs-string">"b"</span>], <span class="hljs-string">"-"</span>) # <span class="hljs-string">"a-b"</span>
</code></pre>
<h2 id="slicing-strings">Slicing Strings</h2>
<p>Get substrings using slice notation:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-built_in">text</span> = <span class="hljs-string">"KelpyShark"</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">text</span>[<span class="hljs-number">0</span>:<span class="hljs-number">5</span>]   # <span class="hljs-string">"Kelpy"</span>
<span class="hljs-built_in">print</span> <span class="hljs-built_in">text</span>[<span class="hljs-number">5</span>:]    # <span class="hljs-string">"Shark"</span>
</code></pre>
<h2 id="iterating-strings">Iterating Strings</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">for</span> ch <span class="hljs-keyword">in</span> <span class="hljs-string">"abc"</span> {
 <span class="hljs-built_in">print</span> ch
}
<span class="hljs-comment"># Output: a b c</span>
</code></pre>
<h2 id="common-pitfalls">Common Pitfalls</h2>
<ul>
<li>Index out of bounds: <code>s[10]</code> errors if string is too short.</li>
<li>Strings are immutable: use concatenation or slicing to create new strings.</li>
</ul>
<h2 id="summary">Summary</h2>
<ul>
<li>Strings are double-quoted, immutable, and support interpolation.</li>
<li>Use std library for string operations.</li>
</ul>
