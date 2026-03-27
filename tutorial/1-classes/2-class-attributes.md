
# Class Attributes

In KelpyShark, class attributes will be supported in future versions. For now, use dictionary keys to represent attributes.

## Example: Simulating Attributes

```kelpyshark
car = {"make": "Toyota", "model": "Corolla", "year": 2020}
print car["make"]   # Toyota
print car["year"]   # 2020
```

## Accessing and Modifying Attributes

```kelpyshark
car["color"] = "blue"   # Add new attribute
print car["color"]      # blue
car["year"] = 2022      # Update attribute
print car["year"]       # 2022
```

## Iterating Over Attributes

```kelpyshark
for key in ["make", "model", "year", "color"] {
    print key, car[key]
}
```

## Planned Syntax (Not Yet Implemented)

```kelpyshark
class Car {
    make
    model
    year
}
```

## Summary

- Use dictionary keys for attributes.
- Class attribute syntax is planned for future releases.
