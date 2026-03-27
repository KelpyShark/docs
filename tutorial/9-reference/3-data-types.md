# 3. Data Types (Quick Reference)

KelpyShark supports the following built-in data types:

| Type      | Example                | Description                  |
|-----------|------------------------|------------------------------|
| Number    | `42`, `3.14`           | Floating-point numbers       |
| String    | `"hello"`              | Text, supports interpolation |
| Boolean   | `true`, `false`        | Logical values               |
| List      | `[1, 2, 3]`            | Ordered collection           |
| Dict      | `{ "a": 1, "b": 2 }`   | Key-value pairs              |
| Null      | `null` (implicit)      | No value                     |

## Type Checking

- Use `type(x)` to get the type name as a string

## Type Conversion

- `str(x)` — Convert to string
- `num(x)` — Convert to number

## Example

```kelpyshark
x = 42
s = "42"
b = true
l = [1, 2, 3]
d = {"a": 1, "b": 2}
print type(x)   # "number"
print type(l)   # "list"
```
