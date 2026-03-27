# Nested Data Structures

You can nest lists and dictionaries to create complex data structures. This is useful for representing tables, trees, or any hierarchical data.

## Example: List of Dictionaries

```kelpyshark
people = [
    {"name": "Alice", "age": 30},
    {"name": "Bob", "age": 22}
]
print(people[0]["name"])   # Alice
```

## Example: Dictionary of Lists

```kelpyshark
grades = {
    "math": [90, 85, 88],
    "science": [92, 80, 87]
}
print(grades["science"][1])  # 80
```

## Example: Deep Nesting

```kelpyshark
school = {
    "classes": [
        {"name": "Math", "students": ["Alice", "Bob"]},
        {"name": "Science", "students": ["Charlie"]}
    ]
}
print(school["classes"][1]["students"][0])  # Charlie
```

## Best Practices

- Keep nesting as simple as possible for readability.
- Use comments or documentation to explain complex structures.
- Consider breaking up very complex structures into smaller parts.

## Summary

- Combine lists and dictionaries for nested data.
- Nesting allows you to model real-world data relationships.
