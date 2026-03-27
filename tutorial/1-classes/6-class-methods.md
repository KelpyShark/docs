# Class Methods

KelpyShark will support class methods in future versions. For now, use standalone functions that operate on dictionaries representing classes or objects.

## Example: Simulating Class Methods

```kelpyshark
def describe_person(person) {
    print person["name"] + " is " + person["age"] + " years old."
}

alice = {"name": "Alice", "age": 30}
describe_person(alice)   # Alice is 30 years old.
```

## Planned Syntax (Not Yet Implemented)

```kelpyshark
class Person {
    @classmethod
    def describe(cls) {
        print cls.name + " is " + cls.age + " years old."
    }
}
```

## Summary

- Use standalone functions for class-level operations.
- Class method syntax is planned for future versions.
