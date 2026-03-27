# Inheritance

KelpyShark plans to support class inheritance in future versions. Currently, you can simulate inheritance by copying and extending dictionaries and functions.

## Example: Simulating Inheritance
```kelpyshark
animal = {"type": "animal"}
dog = animal.copy()
dog["type"] = "dog"
dog["bark"] = def() { print "Woof!" }

dog["bark"]()   # Woof!
```

## Planned Syntax (Not Yet Implemented)
```kelpyshark
class Dog extends Animal {
    def bark() {
        print "Woof!"
    }
}
```

## Summary
- Inheritance is not yet available.
- Use dictionary copying and extension to simulate inheritance.