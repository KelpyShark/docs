<head><title>KelpyShark Docs</title></head>
<style>@import "../../common.css";</style>
<link rel="icon" type="image/x-icon" href="../../favicon.ico">
<body class="markdown-body">
<h1 id="class-exercises">Class Exercises</h1>
<p>Try these exercises to practice simulating classes in KelpyShark:</p>
<h2 id="1-create-a-rectangle">1. Create a Rectangle</h2>
<ul>
<li>Write a function <code>make_rectangle(width, height)</code> that returns a dictionary with <code>width</code> and <code>height</code>.</li>
<li>Write a function <code>area(rect)</code> that returns the area.<ul>
<li><em>Hint: Use `rect[&quot;width&quot;] </em> rect[&quot;height&quot;]`*</li>
</ul>
</li>
</ul>
<h2 id="2-simulate-a-bank-account">2. Simulate a Bank Account</h2>
<ul>
<li>Write a function <code>make_account(owner, balance)</code>.</li>
<li>Write functions <code>deposit(account, amount)</code> and <code>withdraw(account, amount)</code>.</li>
<li>Print the balance after a deposit and a withdrawal.<ul>
<li><em>Hint: Update the <code>&quot;balance&quot;</code> key in the dictionary.</em></li>
</ul>
</li>
</ul>
<h2 id="3-inheritance-simulation">3. Inheritance Simulation</h2>
<ul>
<li>Create a base dictionary <code>animal</code> with a <code>speak</code> function.</li>
<li>Copy and extend it to make a <code>dog</code> that overrides <code>speak</code> to print &quot;Woof!&quot;.<ul>
<li><em>Hint: Use <code>animal.copy()</code> and assign a new function to <code>&quot;speak&quot;</code>.</em></li>
</ul>
</li>
</ul>
<h2 id="4-static-method-simulation">4. Static Method Simulation</h2>
<ul>
<li>Write a function <code>is_even(n)</code> that returns true if <code>n</code> is even.<ul>
<li><em>Hint: Use <code>n % 2 == 0</code>.</em></li>
</ul>
</li>
</ul>
<h2 id="5-bonus-method-in-object">5. Bonus: Method in Object</h2>
<ul>
<li>Add a <code>describe</code> function to a person dictionary that prints their name and age.</li>
</ul>
<h2 id="solutions">Solutions</h2>
<p>Try to solve these on your own before looking up the answers!</p>
