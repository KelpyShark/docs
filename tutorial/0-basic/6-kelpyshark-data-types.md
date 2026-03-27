# Data Types in KelpyShark


# Data Types in KelpyShark

KelpyShark supports several built-in data types:

| Type      | Example                | Description                  |
|-----------|------------------------|------------------------------|
| Number    | `42`, `3.14`           | Floating-point numbers       |
| String    | `"hello"`              | Text, supports interpolation |
| Boolean   | `true`, `false`        | Logical values               |
| List      | `[1, 2, 3]`            | Ordered collection           |
| Dict      | `{ "a": 1, "b": 2 }`  | Key-value pairs              |
| Null      | `null` (implicit)      | No value                     |

## Examples
```kelpyshark
num = 3.14
text = "KelpyShark"
flag = false
lst = [1,2,3]
person = {"name": "Alice", "age": 30}
empty = null
```

## Type Checking
Use `type(x)` to get the type name as a string:
```kelpyshark
print type(42)        # "number"
print type([1,2,3])   # "list"
print type({})        # "dict"
print type(null)      # "null"
```

## Type Conversion
- `str(x)` — Convert to string
- `num(x)` — Convert to number

## Null Values
`null` represents the absence of a value. Many operations on `null` will cause errors:
```kelpyshark
x = null
if x == null {
	print "No value"
}
```

## Dynamic Typing
Variables can change type at runtime:
```kelpyshark
x = 5
x = "now a string"
```

## Summary
- Use `type()` to inspect types.
- Types are dynamic and flexible.
