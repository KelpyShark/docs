# Type Casting in KelpyShark

Convert between types using built-in functions:

- `str(x)` — Converts any value to a string
- `num(x)` — Converts a value to a number (if possible)

## Examples

```kelpyshark
x = 42
s = str(x)      # "42"
n = num("3.14") # 3.14
print str(true) # "true"
print num("-7") # -7
```

## Converting Lists and Dicts

```kelpyshark
lst = [1,2,3]
print str(lst)   # "[1,2,3]"
dict = {"a": 1}
print str(dict)  # "{\"a\":1}"
```

## Error Handling

If conversion fails, a runtime error is raised:

```kelpyshark
num("abc")   # Error: cannot convert string to number
```

## Checking Types Before Casting

Use `type(x)` to check the type before converting:

```kelpyshark
val = "123"
if type(val) == "string" {
 print num(val)
}
```

## Summary

- Use `str()` and `num()` for conversions.
- Handle errors for invalid conversions.
