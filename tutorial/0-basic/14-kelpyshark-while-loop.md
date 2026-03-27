# While Loops in KelpyShark

Use `while` to repeat code as long as a condition is true.

## Basic While Loop

```kelpyshark
x = 0
while x < 5 {
    print x
    x = x + 1
}
# Output: 0 1 2 3 4
```

## Infinite Loops

Use `while true` for a loop that never ends (until `break`):

```kelpyshark
while true {
    print "Looping forever!"
    break   # Remove this to loop forever
}
```

## Loop Control: break and continue

Use `break` to exit early, `continue` to skip to the next iteration:

```kelpyshark
x = 0
while x < 10 {
    x = x + 1
    if x % 2 == 0 {
        continue   # Skip even numbers
    }
    if x > 7 {
        break      # Stop loop if x > 7
    }
    print x
}
# Output: 1 3 5 7
```

## Nested While Loops

```kelpyshark
i = 1
while i <= 3 {
    j = 1
    while j <= 2 {
        print "i={$i}, j={$j}"
        j = j + 1
    }
    i = i + 1
}
```

## Common Pitfalls

- Make sure the loop condition eventually becomes false, or you'll get an infinite loop.
- Use `break` to exit if needed.

## Summary

- Use `while` for repeated actions with unknown count.
- Control the loop with `break` and `continue`.
