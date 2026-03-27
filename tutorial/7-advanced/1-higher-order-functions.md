# Higher-Order Functions

KelpyShark supports first-class functions, which means you can treat functions like any other value. This enables higher-order functions—functions that take other functions as arguments or return them as results.

## Passing Functions as Arguments

You can pass a function to another function:

```kelpyshark
def apply_twice(f, x) {
    return f(f(x))
}
def increment(n) {
    return n + 1
}
print(apply_twice(increment, 3))   # 5
```

## Returning Functions

Functions can return other functions:

```kelpyshark
def make_multiplier(factor) {
    return def(x) { return x * factor }
}
double = make_multiplier(2)
print(double(10))  # 20
```

## Using Anonymous (Lambda) Functions

You can define functions inline:

```kelpyshark
nums = [1, 2, 3]
print(nums.map(def(x) { return x * x }))  # [1, 4, 9]
```

## Common Patterns

- **Map**: Apply a function to each item in a list.
- **Filter**: Select items matching a condition.
- **Reduce**: Combine items into a single value.

```kelpyshark
nums = [1, 2, 3, 4]
squares = nums.map(def(x) { return x * x })
evens = nums.filter(def(x) { return x % 2 == 0 })
sum = nums.reduce(def(a, b) { return a + b }, 0)
print(squares)  # [1, 4, 9, 16]
print(evens)    # [2, 4]
print(sum)      # 10
```

## Best Practices

- Use higher-order functions for concise, expressive code.
- Prefer named functions for clarity in complex logic.
- Use anonymous functions for short, simple operations.

## Summary

- Functions can be passed and returned like values.
- Higher-order functions enable powerful programming patterns.
