# Booleans in KelpyShark


# Booleans in KelpyShark

Booleans represent logical values: `true` or `false`. They are used for logic, conditions, and control flow.

## Declaring Booleans
```kelpyshark
x = true
y = false
print x, y   # true false
```

## Boolean Expressions
Booleans are often the result of comparisons or logical operations:
```kelpyshark
print 5 > 3      # true
print 2 == 3     # false
print 7 <= 7     # true
print "a" != "b" # true
```

## Logical Operators
KelpyShark supports these logical operators:

- `and`: true if both sides are true
- `or`: true if either side is true
- `not`: inverts the value

```kelpyshark
a = true
b = false
print a and b    # false
print a or b     # true
print not a      # false
print not b      # true
```

### Combining Expressions
```kelpyshark
age = 20
citizen = true
if age >= 18 and citizen {
	print "Eligible to vote"
}
```

## Truthiness
Some values are considered "falsey" (evaluate to false in a boolean context):
- `false`
- `0` (zero)
- `""` (empty string)
- `[]` (empty list)
- `{}` (empty dictionary)

Everything else is "truthy" (evaluates to true):
- Nonzero numbers (e.g., `-1`, `3.14`)
- Non-empty strings (e.g., `"hi"`)
- Non-empty lists or dictionaries

### Example: Truthiness in Conditionals
```kelpyshark
if [] {
	print "This will NOT print."
}
if [1,2,3] {
	print "This WILL print."
}
if "" {
	print "No output."
}
if "hello" {
	print "This prints!"
}
```

## Common Pitfalls
- Assignment (`=`) is not comparison (`==`).
- `not` has higher precedence than `and`/`or`.

### Example: Parentheses for Clarity
```kelpyshark
print not true or false    # false (not true) or false => false or false => false
print not (true or false)  # false (true or false is true, not true is false)
```

## Summary
- Use booleans for logic and control flow.
- Understand truthy/falsey values.
- Use logical operators to combine conditions.
