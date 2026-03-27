# Classes Summary

- KelpyShark will support full class syntax in future versions.
- For now, use dictionaries to represent objects and functions to operate on them.
- Simulate attributes, methods, and inheritance using dictionaries and functions.
- Planned features include class definitions, constructors, instance/class/static methods, and inheritance.

## Example Recap
```kelpyshark
def make_person(name, age) {
    return {"name": name, "age": age}
}

def birthday(person) {
    person["age"] = person["age"] + 1
    return person
}

alice = make_person("Alice", 30)
alice = birthday(alice)
print alice["age"]   # 31
```

Stay tuned for future updates to the language!