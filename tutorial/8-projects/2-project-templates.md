# Project Templates

Use these templates to start your own KelpyShark projects.

## 1. Basic Script
```kelpyshark
# main.ks
print "Hello, KelpyShark!"
```

## 2. Modular Project
```kelpyshark
# main.ks
import utils
print utils.greet("Alice")

# utils.ks
def greet(name) {
    return "Hello, " + name
}
```

## Summary
- Use these templates as a starting point for your projects.