# 2. Syntax & Structure (Quick Reference)

## Comments

- Single line: `# This is a comment`
- Multi-line:

  ```kelpyshark
  ###
  This is a
  multi-line comment
  ###
  ```

## Program Structure

- Statements end at line breaks or block close
- Curly braces `{ ... }` define code blocks

## Example

```kelpyshark
# Variable assignment
greeting = "Hello, world!"

# Function definition
def greet(name) {
    print "Hello, {$name}!"
}

# If/else
if greeting == "Hello, world!" {
    print "It's a greeting!"
} else {
    print "Not a greeting."
}
```

## Indentation

- Indentation is for readability only (not required for syntax)
