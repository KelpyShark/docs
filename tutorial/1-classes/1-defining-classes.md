# Defining Classes

KelpyShark will support class definitions in future versions. For now, you can mimic classes using dictionaries and functions.

## Planned Syntax (Not Yet Implemented)

```kelpyshark
class Person {
    name
    age
    
    def birthday() {
        self.age = self.age + 1
    }
}
```

## Current Workaround

Use a dictionary to store attributes and functions to operate on them.

```kelpyshark
person = {"name": "Bob", "age": 25}

def birthday(p) {
    p["age"] = p["age"] + 1
    return p
}
```

## Summary

- Classes are not yet available.
- Use dictionaries and functions to simulate class-like behavior.
