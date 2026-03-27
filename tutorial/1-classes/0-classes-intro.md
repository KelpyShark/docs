# Introduction to Classes


KelpyShark is designed to support object-oriented programming (OOP) with classes, inheritance, and methods. As of now, full class syntax is planned for future versions. You can still use OOP concepts by combining dictionaries (for data) and functions (for behavior).

## What is a Class?
A class is a blueprint for creating objects (instances) that share attributes (data) and methods (behavior).

## Example: Simulating a Class
```kelpyshark
person = {"name": "Alice", "age": 30}

def birthday(p) {
    p["age"] = p["age"] + 1
    return p
}

person = birthday(person)
print person["age"]   # 31
```

## Simulating Classes with Dictionaries and Functions
You can represent an object as a dictionary and define functions to operate on it.

### Example: Person Object
```kelpyshark
person = {"name": "Alice", "age": 30}

def birthday(p) {
    p["age"] = p["age"] + 1
    return p
}

person = birthday(person)
print person["age"]   # 31
```

### Example: Multiple Objects
```kelpyshark
alice = {"name": "Alice", "age": 30}
bob = {"name": "Bob", "age": 25}

def birthday(p) {
    p["age"] = p["age"] + 1
    return p
}

alice = birthday(alice)
bob = birthday(bob)
print alice["age"], bob["age"]   # 31 26
```

### Example: Adding Methods
You can store functions in dictionaries to simulate methods:
```kelpyshark
def speak(p) {
    print "Hi, I'm {$p[\"name\"]}!"
}

p = {"name": "Eve", "age": 22, "speak": speak}
p["speak"](p)   # Hi, I'm Eve!
```


## OOP Concepts in KelpyShark (Current State)
- **Encapsulation**: Group data and functions using dictionaries
- **Reusability**: Write functions that work with any object structure
- **Inheritance**: Simulate by copying and extending dictionaries (see later sections)

## Note
Full class and method support is planned for future releases. For now, use dictionaries and functions to model objects and behavior.