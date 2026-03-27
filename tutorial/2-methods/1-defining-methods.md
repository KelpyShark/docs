# Defining Methods

KelpyShark will support defining methods inside classes in future versions. For now, define functions that take the object as the first argument.

## Example
```kelpyshark
def set_name(person, name) {
    person["name"] = name
    return person
}

bob = {"name": "", "age": 22}
bob = set_name(bob, "Bob")
print bob["name"]   # Bob
```

## Planned Syntax (Not Yet Implemented)
```kelpyshark
class Person {
    def set_name(name) {
        self.name = name
    }
}
```

## Summary
- Use functions to define methods for now.