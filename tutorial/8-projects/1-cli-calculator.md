<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="project-command-line-calculator">Project: Command-Line Calculator</h1>
<p>Build a simple calculator that runs in the terminal and performs basic arithmetic operations.</p>
<h2 id="learning-goals">Learning Goals</h2>
<ul>
<li>Practice console input/output</li>
<li>Use conditionals and loops</li>
<li>Organize code into functions</li>
</ul>
<h2 id="step-1-get-user-input">Step 1: Get User Input</h2>
<p>Prompt the user for an operation and two numbers:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">op</span> = std.input(<span class="hljs-string">"Enter operation (+, -, *, /): "</span>)
<span class="hljs-attr">a</span> = float(std.input(<span class="hljs-string">"First number: "</span>))
<span class="hljs-attr">b</span> = float(std.input(<span class="hljs-string">"Second number: "</span>))
</code></pre>
<h2 id="step-2-perform-calculation">Step 2: Perform Calculation</h2>
<p>Use conditionals to perform the correct operation:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">if</span> <span class="hljs-attr">op</span> == <span class="hljs-string">"+"</span> {
    <span class="hljs-attr">result</span> = a + b
} elif <span class="hljs-attr">op</span> == <span class="hljs-string">"-"</span> {
    <span class="hljs-attr">result</span> = a - b
} elif <span class="hljs-attr">op</span> == <span class="hljs-string">"*"</span> {
    <span class="hljs-attr">result</span> = a * b
} elif <span class="hljs-attr">op</span> == <span class="hljs-string">"/"</span> {
    <span class="hljs-keyword">if</span> <span class="hljs-attr">b</span> == <span class="hljs-number">0</span> {
        print(<span class="hljs-string">"Error: Division by zero"</span>)
        exit()
    }
    <span class="hljs-attr">result</span> = a / b
} <span class="hljs-keyword">else</span> {
    print(<span class="hljs-string">"Unknown operation"</span>)
    exit()
}
print(<span class="hljs-string">"Result: "</span> + result)
</code></pre>
<h2 id="step-3-loop-for-multiple-calculations">Step 3: Loop for Multiple Calculations</h2>
<p>Allow the user to perform multiple calculations:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-keyword">while</span> <span class="hljs-literal">true</span> {
    <span class="hljs-comment">// ...input and calculation code...</span>
    again = <span class="hljs-built_in">std</span>.input(<span class="hljs-string">"Another calculation? (y/n): "</span>)
    <span class="hljs-keyword">if</span> again != <span class="hljs-string">"y"</span> {
        <span class="hljs-keyword">break</span>
    }
}
</code></pre>
<h2 id="full-example">Full Example</h2>
<pre><code class="lang-kelpyshark">def calculator() {
    <span class="hljs-keyword">while</span> <span class="hljs-literal">true</span> {
        <span class="hljs-built_in">op</span> = <span class="hljs-built_in">std</span>.input(<span class="hljs-string">"Enter operation (+, -, *, /): "</span>)
        a = <span class="hljs-built_in">float</span>(<span class="hljs-built_in">std</span>.input(<span class="hljs-string">"First number: "</span>))
        b = <span class="hljs-built_in">float</span>(<span class="hljs-built_in">std</span>.input(<span class="hljs-string">"Second number: "</span>))
        <span class="hljs-keyword">if</span> <span class="hljs-built_in">op</span> == <span class="hljs-string">"+"</span> {
            result = a + b
        } elif <span class="hljs-built_in">op</span> == <span class="hljs-string">"-"</span> {
            result = a - b
        } elif <span class="hljs-built_in">op</span> == <span class="hljs-string">"*"</span> {
            result = a * b
        } elif <span class="hljs-built_in">op</span> == <span class="hljs-string">"/"</span> {
            <span class="hljs-keyword">if</span> b == <span class="hljs-number">0</span> {
                <span class="hljs-built_in">print</span>(<span class="hljs-string">"Error: Division by zero"</span>)
                continue
            }
            result = a / b
        } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">print</span>(<span class="hljs-string">"Unknown operation"</span>)
            continue
        }
        <span class="hljs-built_in">print</span>(<span class="hljs-string">"Result: "</span> + result)
        again = <span class="hljs-built_in">std</span>.input(<span class="hljs-string">"Another calculation? (y/n): "</span>)
        <span class="hljs-keyword">if</span> again != <span class="hljs-string">"y"</span> {
            <span class="hljs-built_in">break</span>
        }
    }
}
calculator()
</code></pre>
<h2 id="extensions">Extensions</h2>
<ul>
<li>Add support for more operations (exponent, modulus)</li>
<li>Handle invalid input gracefully</li>
<li>Organize code into separate functions for each operation</li>
</ul>
<h2 id="summary">Summary</h2>
<ul>
<li>This project reinforces input/output, conditionals, loops, and functions.</li>
<li>Try extending it with new features!</li>
</ul>
