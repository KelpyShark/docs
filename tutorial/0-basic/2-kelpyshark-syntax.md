# KelpyShark Syntax Basics

KelpyShark uses a clean, readable syntax designed for clarity and ease of use.

- **Statements** end at line breaks or block close (`}`)
- **Curly braces** `{ ... }` define code blocks (functions, loops, conditionals)
- **Indentation** is for readability only (not required for syntax)
- **Comments** start with `#` or use `### ... ###` for multi-line

## Example: Function Definition

```kelpyshark
# This is a comment
def greet(name) {
    print "Hello, {$name}!"
}

greet("KelpyShark")
```

## Whitespace and Indentation

- Extra spaces and blank lines are ignored.
- Indent code inside blocks for readability:

```kelpyshark
if true {
    print "Indented!"
}
```

## Multi-line Statements

You can split long statements across lines inside parentheses, brackets, or braces:

```kelpyshark
nums = [
    1,
    2,
    3
]
```

## Multi-line Comments

```kelpyshark
###
This is a
multi-line comment
###
```

## Summary

- Use curly braces for blocks, indentation for readability, and comments for clarity.
