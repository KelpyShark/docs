# Break & Continue in KelpyShark

Use `break` to exit a loop early, and `continue` to skip to the next iteration.

## Basic Example

```kelpyshark
for i in [1,2,3,4,5] {
    if i == 3 {
        continue   # Skip 3
    }
    if i == 5 {
        break      # Stop at 5
    }
    print i
}
# Output: 1 2 4
```

## Using in While Loops

```kelpyshark
x = 0
while x < 6 {
    x = x + 1
    if x % 2 == 0 {
        continue   # Skip even numbers
    }
    if x > 5 {
        break      # Stop when x > 5
    }
    print x
}
# Output: 1 3 5
```

## Nested Loops

`break` and `continue` only affect the innermost loop:

```kelpyshark
for i in [1,2,3] {
    for j in [1,2,3] {
        if j == 2 {
            continue
        }
        if i == 3 and j == 3 {
            break
        }
        print i, j
    }
}
```

## Common Pitfalls

- `break` exits only the current loop, not all nested loops.
- Use flags or extra logic to break out of multiple loops if needed.

## Summary

- `break` exits a loop early.
- `continue` skips to the next iteration.
