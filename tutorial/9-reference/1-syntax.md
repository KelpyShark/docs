# KelpyShark Syntax Reference

A summary of KelpyShark's syntax for quick lookup.

## Variables

- Assignment: `x = 5`
- Multiple assignment: `a, b = 1, 2`

## Data Types

- Number: `42`, `3.14`
- String: `"hello"`
- List: `[1, 2, 3]`
- Dictionary: `{ "key": "value" }`
- Boolean: `true`, `false`

## Comments

- Single line: `# comment`

## Functions

```kelpyshark
def name(args) {
    // code
    return value
}
```

## Conditionals

```kelpyshark
if cond {
    // code
} elif cond2 {
    // code
} else {
    // code
}
```

## Loops

- For: `for item in list { ... }`
- While: `while cond { ... }`

## Classes

```kelpyshark
class Name {
    def __init__(self, args) {
        // constructor
    }
    def method(self) {
        // code
    }
}
```

## Error Handling

- Try-catch: `try { ... } catch (err) { ... }`
- Throw: `throw "message"`

## Importing

- `import module`
- `from module import name`

## File IO

- `file = open("file.txt", "r")`
- `file.read()`, `file.write(data)`, `file.close()`

## List Methods

- `append`, `remove`, `len`, `map`, `filter`, `reduce`

## Dictionary Methods

- `keys()`, `values()`, `items()`

## Built-in Functions

- `print`, `len`, `range`, `int`, `float`, `str`, `type`

---

For more, see the full tutorial and quick reference.
