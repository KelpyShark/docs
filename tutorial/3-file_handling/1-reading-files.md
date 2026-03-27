# Reading Files

Use the standard library function `std.read_file(filename)` to read the contents of a file as a string.

## Example
```kelpyshark
text = std.read_file("example.txt")
print text
```

## Summary
- `std.read_file` returns the file contents as a string.
- Handle errors if the file does not exist.