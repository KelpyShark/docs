# Method Chaining

Method chaining allows you to call multiple methods in a single expression. In KelpyShark, you can chain functions by passing the result of one as the argument to the next.

## Example

```kelpyshark
def set_name(person, name) {
    person["name"] = name
    return person
}
def set_age(person, age) {
    person["age"] = age
    return person
}

bob = {"name": "", "age": 0}
bob = set_age(set_name(bob, "Bob"), 25)
print bob["name"], bob["age"]   # Bob 25
```

## Summary

- Chain functions by nesting calls.
- True method chaining will be available with class support in future versions.
