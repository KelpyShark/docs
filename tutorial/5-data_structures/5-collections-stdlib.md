# Collections in the Standard Library

KelpyShark's standard library provides additional collection types and utilities beyond basic lists and dictionaries. These help you work with data more efficiently and safely.

## Common Collection Types
- **Set**: An unordered collection of unique values.
- **Queue**: A first-in, first-out (FIFO) collection.
- **Stack**: A last-in, first-out (LIFO) collection.

## Example: Using a Set
```kelpyshark
myset = std.set([1, 2, 2, 3])
print(myset)  # {1, 2, 3}
```

## Example: Using a Queue
```kelpyshark
queue = std.queue()
queue.enqueue(10)
queue.enqueue(20)
print(queue.dequeue())  # 10
```

## Example: Using a Stack
```kelpyshark
stack = std.stack()
stack.push("a")
stack.push("b")
print(stack.pop())  # b
```

## Utility Functions
- `std.sort(list)`: Sorts a list in place.
- `std.reverse(list)`: Reverses a list in place.
- `std.unique(list)`: Returns a list with duplicates removed.

## Best Practices
- Use sets for unique items.
- Use queues and stacks for specific data processing needs.
- Prefer standard library collections for reliability and performance.

## Summary
- The standard library offers advanced collections for specialized needs.
- Explore the stdlib docs for more utilities and examples.
