# Switch/Match in KelpyShark

KelpyShark does not have a built-in `switch` statement, but you can use chained `if`/`else if`/`else` blocks to achieve similar logic.

## Basic Example

```kelpyshark
x = "banana"
if x == "apple" {
    print "It's an apple!"
} else if x == "banana" {
    print "Banana time!"
} else {
    print "Unknown fruit"
}
```

## Multiple Values (Manual Matching)

You can match multiple values using `or`:

```kelpyshark
color = "red"
if color == "red" or color == "blue" {
    print "Primary color"
} else if color == "green" {
    print "Secondary color"
} else {
    print "Other color"
}
```

## Nested Matching

For more complex logic, nest conditionals:

```kelpyshark
shape = "circle"
size = "large"
if shape == "circle" {
    if size == "large" {
        print "Large circle"
    } else {
        print "Small circle"
    }
} else if shape == "square" {
    print "Square"
} else {
    print "Unknown shape"
}
```

## Using Dictionaries for Lookup

For many cases, a dictionary can replace a switch:

```kelpyshark
actions = {
    "run": "You run fast!",
    "jump": "You jump high!",
    "swim": "You swim well!"
}
verb = "jump"
if verb in actions {
    print actions[verb]
} else {
    print "Unknown action"
}
```

## Summary

- Use chained `if`/`else if`/`else` for multi-way branching.
- Use dictionaries for value-to-action lookups.
