# Math in KelpyShark

KelpyShark supports numbers (integers and floats) and standard math operations.

## Basic Math Operators

```kelpyshark
a = 5
b = 2
print a + b      # 7
print a - b      # 3
print a * b      # 10
print a / b      # 2.5
print a % b      # 1
```

## Integer vs Float

All numbers are floating-point by default. Integer division returns a float:

```kelpyshark
print 7 / 2    # 3.5
print 7 % 2    # 1
```

## Operator Precedence

Multiplication/division happen before addition/subtraction:

```kelpyshark
print 2 + 3 * 4    # 14
print (2 + 3) * 4  # 20
```

## Math Standard Library

Import the `math` module for advanced functions:

```kelpyshark
import math
print math.sqrt(16)   # 4
print math.pow(2, 8)  # 256
print math.abs(-5)    # 5
print math.floor(3.7) # 3
print math.ceil(3.1)  # 4
print math.round(2.718, 2) # 2.72
print math.PI         # 3.14159...
```

## Common Math Functions

- `abs(x)`, `floor(x)`, `ceil(x)`, `round(x, n)`, `sqrt(x)`, `pow(x, y)`, `min(a, b)`, `max(a, b)`, `sin(x)`, `cos(x)`, `tan(x)`

## Math Errors

- Division by zero causes a runtime error.
- `sqrt` of a negative number may error or return `NaN`.

## Summary

- Use standard operators for math.
- Import `math` for advanced functions.
