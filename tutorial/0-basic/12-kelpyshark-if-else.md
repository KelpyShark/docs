# If / Else in KelpyShark

Control the flow of your program using `if`, `else if`, and `else` statements.

## Basic If/Else

```kelpyshark
x = 10
if x > 5 {
    print "x is big"
} else {
    print "x is small"
}
```

## Chained Conditions (Else If)

Use `else if` to check multiple conditions in order:

```kelpyshark
score = 72
if score >= 90 {
    print "A"
} else if score >= 80 {
    print "B"
} else if score >= 70 {
    print "C"
} else {
    print "D or F"
}
```

## Nested Conditionals

You can nest `if` statements inside each other:

```kelpyshark
age = 20
citizen = true
if age >= 18 {
    if citizen {
        print "Eligible to vote"
    } else {
        print "Not a citizen"
    }
} else {
    print "Too young"
}
```

## Truthiness in Conditions

Any truthy/falsey value can be used in an `if`:

```kelpyshark
if "" {
    print "This will NOT print."
}
if "hello" {
    print "This WILL print."
}
```

## Common Mistakes

- Use `==` for comparison, not `=` (assignment).
- Curly braces are required for code blocks.

## Summary

- Use `if`, `else if`, and `else` for decision making.
- Conditions use booleans or truthy/falsey values.
