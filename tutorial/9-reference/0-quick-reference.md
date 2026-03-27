# KelpyShark Quick Reference

This quick reference provides a concise summary of KelpyShark's syntax, features, and standard library. Use it as a cheat sheet while coding.

---

## Variables

```kelpyshark
x = 10
y = "hello"
```

## Data Types

- Numbers: `42`, `3.14`
- Strings: `"text"`
- Lists: `[1, 2, 3]`
- Dictionaries: `{ "key": "value" }`
- Booleans: `true`, `false`

## Comments

```kelpyshark
# This is a comment
```

## Functions

```kelpyshark
def add(a, b) {
    return a + b
}
```

## Conditionals

```kelpyshark
if x > 0 {
    print("Positive")
} elif x < 0 {
    print("Negative")
} else {
    print("Zero")
}
```

## Loops

```kelpyshark
for i in range(5) {
    print(i)
}
while x > 0 {
    x = x - 1
}
```

## Classes

```kelpyshark
class Person {
    def __init__(self, name) {
        self.name = name
    }
    def greet(self) {
        print("Hello, " + self.name)
    }
}
```

## Error Handling

```kelpyshark
try {
    risky()
} catch (err) {
    print("Error: " + err)
}
throw "Something went wrong!"
```

## File IO

```kelpyshark
file = open("data.txt", "r")
content = file.read()
file.close()
```

## Importing Modules

```kelpyshark
import math
print(math.sqrt(16))
```

## Standard Library Highlights

- `std.input(prompt)`: Read input from user
- `print(value)`: Output to console
- `len(obj)`: Get length
- `range(n)`: Generate numbers 0 to n-1
- `open(filename, mode)`: Open a file

---

## CLI & Package Manager

- Run a script: `kelpyshark myfile.ks`
- Install package: `kelpyshark pkg install <name>`
- List packages: `kelpyshark pkg list`

---

## Grammar Notes

- Indentation is significant
- Use `{}` for code blocks
- Statements end at line breaks

---

## More

See the full tutorial for detailed explanations and examples of every feature.
