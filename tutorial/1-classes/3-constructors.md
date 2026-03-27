# Constructors

KelpyShark will support constructors in future versions. Currently, you can use functions to initialize dictionaries that represent objects.

## Example: Simulating a Constructor

```kelpyshark
def make_person(name, age) {
    return {"name": name, "age": age}
}

alice = make_person("Alice", 30)
print alice["name"]   # Alice
```

## Planned Syntax (Not Yet Implemented)

```kelpyshark
class Person {
    def __init__(name, age) {
        self.name = name
        self.age = age
    }
}
```

## Summary

- Use functions to create and initialize dictionaries.
- Constructor syntax is planned for future versions.
