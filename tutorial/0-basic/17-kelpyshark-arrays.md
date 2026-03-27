# Arrays (Lists) in KelpyShark

KelpyShark uses lists for ordered collections of values. Lists are a fundamental data structure.

## Creating Lists

```kelpyshark
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
empty = []
```

## Accessing Elements

Use zero-based indexing:

```kelpyshark
print fruits[0]      # "apple"
print numbers[2]     # 3
```

## Modifying Lists

Lists are immutable, but you can create new lists with `push`:

```kelpyshark
fruits2 = push(fruits, "date")
print fruits2    # ["apple", "banana", "cherry", "date"]
```

## Removing Elements

Use `pop` to remove the last element:

```kelpyshark
nums = [1,2,3]
nums2 = pop(nums)
print nums2    # [1,2]
```

## Slicing Lists

You can get a sublist (slice):

```kelpyshark
letters = ["a","b","c","d"]
slice = letters[1:3]   # ["b","c"]
```

## Length

```kelpyshark
print len(fruits)    # 3
```

## Iterating Lists

```kelpyshark
for fruit in fruits {
 print fruit
}
```

## Nested Lists

Lists can contain other lists:

```kelpyshark
matrix = [[1,2],[3,4]]
print matrix[1][0]   # 3
```

## Common Pitfalls

- Index out of bounds: `fruits[10]` will cause an error if the index is too large.
- Lists are immutable: use `push`/`pop` to create new lists.

## Summary

- Lists are ordered, zero-indexed, and immutable.
- Use `push`, `pop`, and slicing for list operations.
