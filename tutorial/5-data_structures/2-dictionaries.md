# Dictionaries

Dictionaries are collections of key-value pairs. They are sometimes called maps or associative arrays in other languages. Keys are usually strings, and values can be any type.

## Creating Dictionaries

Use curly braces and colons to create a dictionary:

```kelpyshark
person = {"name": "Bob", "age": 22}
```

## Accessing Values

Access values by their key:

```kelpyshark
print(person["name"])   # Bob
```

## Adding and Modifying Entries

```kelpyshark
person["city"] = "London"   # Add new key-value pair
person["age"] = 23          # Update value
```

## Removing Entries

```kelpyshark
del person["city"]
```

## Iterating Over Dictionaries

```kelpyshark
for key in person.keys() {
 print(key + ": " + person[key])
}
```

## Dictionary Methods

- `keys()`: Returns a list of keys.
- `values()`: Returns a list of values.
- `items()`: Returns a list of key-value pairs.

## Nested Dictionaries

Dictionaries can contain other dictionaries or lists:

```kelpyshark
student = {
 "name": "Alice",
 "grades": {"math": 90, "science": 85}
}
print(student["grades"]["math"])  # 90
```

## Best Practices

- Use dictionaries for data with named fields.
- Keys should be unique and usually strings.
- Use dictionary methods for common operations.

## Summary

- Use curly braces for dictionaries.
- Access values by key.
- Dictionaries are ideal for structured, named data.
