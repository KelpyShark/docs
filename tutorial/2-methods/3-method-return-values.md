# Method Return Values

Methods (functions) in KelpyShark can return any value, including modified objects, numbers, strings, or collections.

## Example

```kelpyshark
def get_age(person) {
    return person["age"]
}

bob = {"name": "Bob", "age": 22}
age = get_age(bob)
print age   # 22
```

## Summary

- Use `return` to provide a value from a method (function).
- Methods can return any type.
