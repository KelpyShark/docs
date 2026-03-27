# Lists

Lists are ordered collections of values. They are similar to arrays in other languages and are one of the most commonly used data structures in KelpyShark.

## Creating Lists
Use square brackets to create a list:
```kelpyshark
fruits = ["apple", "banana", "cherry"]
```

## Accessing Elements
Access elements by their index (starting at 0):
```kelpyshark
print(fruits[1])   # banana
```

## Modifying Lists
You can change elements, add new ones, or remove them:
```kelpyshark
fruits[0] = "apricot"   # Change first element
fruits.append("date")   # Add to end
fruits.remove("banana") # Remove by value
print(fruits)           # ["apricot", "cherry", "date"]
```

## Iterating Over Lists
```kelpyshark
for fruit in fruits {
	print(fruit)
}
```

## List Length
```kelpyshark
print(len(fruits))
```

## Slicing Lists
Get a sublist using slicing:
```kelpyshark
nums = [1, 2, 3, 4, 5]
print(nums[1:4])  # [2, 3, 4]
```

## Nested Lists
Lists can contain other lists:
```kelpyshark
matrix = [[1, 2], [3, 4]]
print(matrix[1][0])  # 3
```

## Best Practices
- Use lists for ordered data.
- Remember that indexing starts at 0.
- Use list methods (`append`, `remove`, etc.) for common operations.

## Summary
- Use square brackets for lists.
- Indexing starts at 0.
- Lists are flexible and powerful for storing sequences.