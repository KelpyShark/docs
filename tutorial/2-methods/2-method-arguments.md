# Method Arguments

In KelpyShark, methods (simulated with functions) can take any number of arguments. The first argument is usually the object (dictionary), followed by other parameters.

## Example
```kelpyshark
def set_age(person, age) {
    person["age"] = age
    return person
}

alice = {"name": "Alice", "age": 30}
alice = set_age(alice, 35)
print alice["age"]   # 35
```

## Summary
- Pass the object as the first argument.
- Add more arguments as needed.