<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="project-file-analyzer">Project: File Analyzer</h1>
<p>Build a program that analyzes a text file and reports statistics such as line count, word count, and character count.</p>
<h2 id="learning-goals">Learning Goals</h2>
<ul>
<li>Practice file IO</li>
<li>Use loops and string operations</li>
<li>Handle errors gracefully</li>
</ul>
<h2 id="step-1-get-file-name-from-user">Step 1: Get File Name from User</h2>
<p>Prompt for the file name:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">filename</span> = std.input(<span class="hljs-string">"Enter file name: "</span>)
</code></pre>
<h2 id="step-2-open-and-read-the-file">Step 2: Open and Read the File</h2>
<p>Use a try-catch block to handle missing files:</p>
<pre><code class="lang-kelpyshark">try {
    file = open(filename, <span class="hljs-string">"r"</span>)
    content = file.read()
    file.close()
} catch (err) {
    print(<span class="hljs-string">"Error: "</span> + err)
    <span class="hljs-keyword">exit</span>()
}
</code></pre>
<h2 id="step-3-analyze-the-content">Step 3: Analyze the Content</h2>
<p>Count lines, words, and characters:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">lines</span> = content.split(<span class="hljs-string">"\n"</span>)
<span class="hljs-attr">line_count</span> = len(lines)
<span class="hljs-attr">word_count</span> = len(content.split())
<span class="hljs-attr">char_count</span> = len(content)
</code></pre>
<h2 id="step-4-display-results">Step 4: Display Results</h2>
<pre><code class="lang-kelpyshark"><span class="hljs-function"><span class="hljs-title">print</span><span class="hljs-params">(<span class="hljs-string">"Lines: "</span> + line_count)</span></span>
<span class="hljs-function"><span class="hljs-title">print</span><span class="hljs-params">(<span class="hljs-string">"Words: "</span> + word_count)</span></span>
<span class="hljs-function"><span class="hljs-title">print</span><span class="hljs-params">(<span class="hljs-string">"Characters: "</span> + char_count)</span></span>
</code></pre>
<h2 id="full-example">Full Example</h2>
<pre><code class="lang-kelpyshark">def file_analyzer() {
    filename = std.<span class="hljs-built_in">input</span>(<span class="hljs-string">"Enter file name: "</span>)
    <span class="hljs-keyword">try</span> {
        <span class="hljs-keyword">file</span> = <span class="hljs-keyword">open</span>(filename, <span class="hljs-string">"r"</span>)
        content = <span class="hljs-keyword">file</span>.<span class="hljs-keyword">read</span>()
        <span class="hljs-keyword">file</span>.<span class="hljs-keyword">close</span>()
    } <span class="hljs-keyword">catch</span> (err) {
        <span class="hljs-keyword">print</span>(<span class="hljs-string">"Error: "</span> + err)
        <span class="hljs-keyword">return</span>
    }
    lines = content.<span class="hljs-keyword">split</span>(<span class="hljs-string">"\n"</span>)
    line_count = <span class="hljs-built_in">len</span>(lines)
    word_count = <span class="hljs-built_in">len</span>(content.<span class="hljs-keyword">split</span>())
    char_count = <span class="hljs-built_in">len</span>(content)
    <span class="hljs-keyword">print</span>(<span class="hljs-string">"Lines: "</span> + line_count)
    <span class="hljs-keyword">print</span>(<span class="hljs-string">"Words: "</span> + word_count)
    <span class="hljs-keyword">print</span>(<span class="hljs-string">"Characters: "</span> + char_count)
}
file_analyzer()
</code></pre>
<h2 id="extensions">Extensions</h2>
<ul>
<li>Report the most common word</li>
<li>Ignore blank lines or comments</li>
<li>Analyze multiple files at once</li>
</ul>
<h2 id="summary">Summary</h2>
<ul>
<li>This project reinforces file IO, string processing, and error handling.</li>
<li>Try extending it for more advanced analysis!</li>
</ul>
