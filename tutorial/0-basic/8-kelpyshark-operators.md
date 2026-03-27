
# Operators in KelpyShark

Operators let you perform calculations, comparisons, and logic in your code.

## Arithmetic Operators
| Operator | Meaning         | Example         | Result   |
|----------|----------------|-----------------|----------|
| `+`      | Addition       | `5 + 2`         | `7`      |
| `-`      | Subtraction    | `5 - 2`         | `3`      |
| `*`      | Multiplication | `5 * 2`         | `10`     |
| `/`      | Division       | `5 / 2`         | `2.5`    |
| `%`      | Modulo         | `5 % 2`         | `1`      |

## Assignment Operators
Assign values to variables:
```kelpyshark
x = 10
x = x + 1   # 11
```

## Comparison Operators
| Operator | Meaning         | Example         | Result   |
|----------|----------------|-----------------|----------|
| `==`     | Equal          | `2 == 2`        | `true`   |
| `!=`     | Not equal      | `2 != 3`        | `true`   |
| `<`      | Less than      | `2 < 3`         | `true`   |
| `<=`     | Less or equal  | `2 <= 2`        | `true`   |
| `>`      | Greater than   | `3 > 2`         | `true`   |
| `>=`     | Greater or eq. | `3 >= 2`        | `true`   |

## Logical Operators
| Operator | Meaning         | Example         | Result   |
|----------|----------------|-----------------|----------|
| `and`    | Logical AND    | `true and false`| `false`  |
| `or`     | Logical OR     | `true or false` | `true`   |
| `not`    | Logical NOT    | `not true`      | `false`  |

## String Operators
- Concatenation: `+` (e.g. `"a" + "b"`)
- Interpolation: `"Hello, {$name}!"`

## Operator Precedence
Multiplication/division happen before addition/subtraction:
```kelpyshark
print 2 + 3 * 4    # 14
print (2 + 3) * 4  # 20
```

## Combining Operators
```kelpyshark
x = 5

if x < y and y < 20 {
	print "y is between x and 20"
}
```

## Common Pitfalls
- `=` is assignment, `==` is comparison.
- Parentheses can clarify complex expressions.

## Summary
- Use operators for math, comparison, and logic.
- Precedence matters in complex expressions.
