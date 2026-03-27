# Introduction to Methods

Methods are functions that operate on objects. In KelpyShark, full method support is planned for future versions. For now, use functions that take a dictionary (object) as the first argument.

## Example
```kelpyshark
def birthday(person) {
    person["age"] = person["age"] + 1
    return person
}

alice = {"name": "Alice", "age": 30}
alice = birthday(alice)
print alice["age"]   # 31
```

## Summary
- Methods are not yet available as part of class syntax.
- Use functions to simulate methods.