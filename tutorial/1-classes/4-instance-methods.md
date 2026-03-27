# Instance Methods

KelpyShark will support instance methods in future versions. For now, use functions that take a dictionary (object) as the first argument.

## Example: Simulating Instance Methods
```kelpyshark
def birthday(person) {
    person["age"] = person["age"] + 1
    return person
}

bob = {"name": "Bob", "age": 25}
bob = birthday(bob)
print bob["age"]   # 26
```

## Planned Syntax (Not Yet Implemented)
```kelpyshark
class Person {
    def birthday() {
        self.age = self.age + 1
    }
}
```

## Summary
- Use functions with the object as the first argument.
- Instance method syntax is planned for future versions.