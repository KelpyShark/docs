# Structs in KelpyShark

Structs are user-defined data structures that group related values together under named fields. They are similar to lightweight classes or records in other languages.

## Why Use Structs?

- To represent complex data with named fields.
- To improve code readability and maintainability.
- To avoid using generic dictionaries for structured data.

## Defining a Struct

You can define a struct using a dictionary-like syntax, but with a clear intent to represent a structured record:

```kelpyshark
person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
}
```

## Accessing Struct Fields

Access fields using dot or bracket notation:

```kelpyshark
print(person.name)      # Alice
print(person["email"]) # alice@example.com
```

## Example: Struct in a List

```kelpyshark
people = [
    {name: "Alice", age: 30},
    {name: "Bob", age: 22}
]
print(people[1].name)  # Bob
```

## Best Practices

- Use structs for data with a fixed set of fields.
- Prefer dot notation for clarity when possible.
- Document the fields and purpose of each struct.

## Summary

- Structs group related fields under one variable.
- Use them for clear, maintainable code when working with structured data.
