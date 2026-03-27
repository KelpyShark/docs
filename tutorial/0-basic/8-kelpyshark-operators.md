<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="operators-in-kelpyshark">Operators in KelpyShark</h1>
<p>Operators let you perform calculations, comparisons, and logic in your code.</p>
<h2 id="arithmetic-operators">Arithmetic Operators</h2>
<table>
<thead>
<tr>
<th>Operator</th>
<th>Meaning</th>
<th>Example</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>+</code></td>
<td>Addition</td>
<td><code>5 + 2</code></td>
<td><code>7</code></td>
</tr>
<tr>
<td><code>-</code></td>
<td>Subtraction</td>
<td><code>5 - 2</code></td>
<td><code>3</code></td>
</tr>
<tr>
<td><code>*</code></td>
<td>Multiplication</td>
<td><code>5 * 2</code></td>
<td><code>10</code></td>
</tr>
<tr>
<td><code>/</code></td>
<td>Division</td>
<td><code>5 / 2</code></td>
<td><code>2.5</code></td>
</tr>
<tr>
<td><code>%</code></td>
<td>Modulo</td>
<td><code>5 % 2</code></td>
<td><code>1</code></td>
</tr>
</tbody>
</table>
<h2 id="assignment-operators">Assignment Operators</h2>
<p>Assign values to variables:</p>
<pre><code class="lang-kelpyshark"><span class="hljs-attr">x</span> = <span class="hljs-number">10</span>
<span class="hljs-attr">x</span> = x + <span class="hljs-number">1</span>   # <span class="hljs-number">11</span>
</code></pre>
<h2 id="comparison-operators">Comparison Operators</h2>
<table>
<thead>
<tr>
<th>Operator</th>
<th>Meaning</th>
<th>Example</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>==</code></td>
<td>Equal</td>
<td><code>2 == 2</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>!=</code></td>
<td>Not equal</td>
<td><code>2 != 3</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>&lt;</code></td>
<td>Less than</td>
<td><code>2 &lt; 3</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>&lt;=</code></td>
<td>Less or equal</td>
<td><code>2 &lt;= 2</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>&gt;</code></td>
<td>Greater than</td>
<td><code>3 &gt; 2</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>&gt;=</code></td>
<td>Greater or eq.</td>
<td><code>3 &gt;= 2</code></td>
<td><code>true</code></td>
</tr>
</tbody>
</table>
<h2 id="logical-operators">Logical Operators</h2>
<table>
<thead>
<tr>
<th>Operator</th>
<th>Meaning</th>
<th>Example</th>
<th>Result</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>and</code></td>
<td>Logical AND</td>
<td><code>true and false</code></td>
<td><code>false</code></td>
</tr>
<tr>
<td><code>or</code></td>
<td>Logical OR</td>
<td><code>true or false</code></td>
<td><code>true</code></td>
</tr>
<tr>
<td><code>not</code></td>
<td>Logical NOT</td>
<td><code>not true</code></td>
<td><code>false</code></td>
</tr>
</tbody>
</table>
<h2 id="string-operators">String Operators</h2>
<ul>
<li>Concatenation: <code>+</code> (e.g. <code>&quot;a&quot; + &quot;b&quot;</code>)</li>
<li>Interpolation: <code>&quot;Hello, {$name}!&quot;</code></li>
</ul>
<h2 id="operator-precedence">Operator Precedence</h2>
<p>Multiplication/division happen before addition/subtraction:</p>
<pre><code class="lang-kelpyshark">print <span class="hljs-number">2</span> + <span class="hljs-number">3</span> * <span class="hljs-number">4</span>    # <span class="hljs-number">14</span>
print (<span class="hljs-number">2</span> + <span class="hljs-number">3</span>) * <span class="hljs-number">4</span>  # <span class="hljs-number">20</span>
</code></pre>
<h2 id="combining-operators">Combining Operators</h2>
<pre><code class="lang-kelpyshark">x = <span class="hljs-number">5</span>

<span class="hljs-keyword">if</span> x &lt; y <span class="hljs-keyword">and</span> y &lt; <span class="hljs-number">20</span> {
 <span class="hljs-built_in">print</span> <span class="hljs-string">"y is between x and 20"</span>
}
</code></pre>
<h2 id="common-pitfalls">Common Pitfalls</h2>
<ul>
<li><code>=</code> is assignment, <code>==</code> is comparison.</li>
<li>Parentheses can clarify complex expressions.</li>
</ul>
<h2 id="summary">Summary</h2>
<ul>
<li>Use operators for math, comparison, and logic.</li>
<li>Precedence matters in complex expressions.</li>
</ul>
