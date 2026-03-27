<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="break-continue-in-kelpyshark">Break &amp; Continue in KelpyShark</h1>
<p>Use <code>break</code> to exit a loop early, and <code>continue</code> to skip to the next iteration.</p>
<h2 id="basic-example">Basic Example</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> [1,2,3,4,5] {
    <span class="hljs-keyword">if</span> i == 3 {
        <span class="hljs-built_in">continue</span>   <span class="hljs-comment"># Skip 3</span>
    }
    <span class="hljs-keyword">if</span> i == 5 {
        <span class="hljs-built_in">break</span>      <span class="hljs-comment"># Stop at 5</span>
    }
    <span class="hljs-built_in">print</span> i
}
<span class="hljs-comment"># Output: 1 2 4</span>
</code></pre>
<h2 id="using-in-while-loops">Using in While Loops</h2>
<pre><code class="lang-kelpyshark">x = 0
<span class="hljs-keyword">while</span> x &lt; 6 {
    x = x + 1
    <span class="hljs-keyword">if</span> x % 2 == 0 {
        <span class="hljs-built_in">continue</span>   <span class="hljs-comment"># Skip even numbers</span>
    }
    <span class="hljs-keyword">if</span> x &gt; 5 {
        <span class="hljs-built_in">break</span>      <span class="hljs-comment"># Stop when x &gt; 5</span>
    }
    <span class="hljs-built_in">print</span> x
}
<span class="hljs-comment"># Output: 1 3 5</span>
</code></pre>
<h2 id="nested-loops">Nested Loops</h2>
<p><code>break</code> and <code>continue</code> only affect the innermost loop:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">for</span> <span class="hljs-selector-tag">i</span> <span class="hljs-keyword">in</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] {
    <span class="hljs-keyword">for</span> j <span class="hljs-keyword">in</span> [<span class="hljs-number">1</span>,<span class="hljs-number">2</span>,<span class="hljs-number">3</span>] {
        <span class="hljs-keyword">if</span> j == <span class="hljs-number">2</span> {
            continue
        }
        <span class="hljs-keyword">if</span> <span class="hljs-selector-tag">i</span> == <span class="hljs-number">3</span> and j == <span class="hljs-number">3</span> {
            break
        }
        print <span class="hljs-selector-tag">i</span>, j
    }
}
</code></pre>
<h2 id="common-pitfalls">Common Pitfalls</h2>
<ul>
<li><code>break</code> exits only the current loop, not all nested loops.</li>
<li>Use flags or extra logic to break out of multiple loops if needed.</li>
</ul>
<h2 id="summary">Summary</h2>
<ul>
<li><code>break</code> exits a loop early.</li>
<li><code>continue</code> skips to the next iteration.</li>
</ul>
