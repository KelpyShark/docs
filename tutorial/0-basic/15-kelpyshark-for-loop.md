# For Loops in KelpyShark

Use `for` to iterate over lists or other collections.

## Basic For Loop

```kelpyshark
fruits = ["apple", "banana", "cherry"]
for fruit in fruits {
    print fruit
}
# Output: apple banana cherry
```

## Looping with Index

To access both index and value:

```kelpyshark
fruits = ["apple", "banana", "cherry"]
for i in [0, 1, 2] {
    print i, fruits[i]
}
# Output: 0 apple 1 banana 2 cherry
```

## Range Loop Idiom

KelpyShark does not have a built-in `range`, but you can use a list:

```kelpyshark
for i in [1,2,3,4,5] {
    print i
}
```

## Nested For Loops

```kelpyshark
matrix = [[1,2],[3,4]]
for row in matrix {
    for val in row {
        print val
    }
}
# Output: 1 2 3 4
```

## Iterating Dictionaries

```kelpyshark
person = {"name": "Alice", "age": 30}
for key in ["name", "age"] {
    print key, person[key]
}
```

## Common Pitfalls

- Modifying a list while iterating can cause bugs.
- Use a copy if you need to change the list during iteration.

## Summary

- Use `for` for known-length iteration.
- Can iterate lists, strings, or dictionary keys.
