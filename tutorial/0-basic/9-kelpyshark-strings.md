# Strings in KelpyShark


# Strings in KelpyShark

Strings are sequences of characters, created with double quotes:
```kelpyshark
s = "Hello, world!"
empty = ""
```

## String Interpolation
Embed expressions in strings using `{$expr}`:
```kelpyshark
name = "Alice"
age = 30
print "Hello, {$name}! You are {$age} years old."
# Output: Hello, Alice! You are 30 years old.
```

## Concatenation
Join strings with `+`:
```kelpyshark
first = "Kelpy"
last = "Shark"
print first + last  # "KelpyShark"
print "Score: " + str(42)
```

## Escape Sequences
Use backslash `\` for special characters:
- `\n` — Newline
- `\t` — Tab
- `\\` — Backslash
- `\"` — Double quote

```kelpyshark
print "Line1\nLine2"   # Prints two lines
print "Tab\tSeparated"
print "She said: \"Hi!\""
```

## String Methods (via std library)
KelpyShark provides string functions in the standard library:
```kelpyshark
import std
print std.upper("hello")    # "HELLO"
print std.lower("HELLO")    # "hello"
print std.len("abc")        # 3
print std.split("a,b,c", ",")  # ["a","b","c"]
print std.join(["a","b"], "-") # "a-b"
```

## Slicing Strings
Get substrings using slice notation:
```kelpyshark
text = "KelpyShark"
print text[0:5]   # "Kelpy"
print text[5:]    # "Shark"
```

## Iterating Strings
```kelpyshark
for ch in "abc" {
	print ch
}
# Output: a b c
```

## Common Pitfalls
- Index out of bounds: `s[10]` errors if string is too short.
- Strings are immutable: use concatenation or slicing to create new strings.

## Summary
- Strings are double-quoted, immutable, and support interpolation.
- Use std library for string operations.
