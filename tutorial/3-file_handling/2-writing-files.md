# Writing Files

Use the standard library function `std.write_file(filename, content)` to write a string to a file.

## Example

```kelpyshark
std.write_file("output.txt", "KelpyShark is awesome!")
```

## Summary

- `std.write_file` writes the given string to the file.
- Overwrites the file if it exists, creates it if not.
