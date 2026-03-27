# Introduction to File Handling

KelpyShark provides standard library functions for reading and writing files. File handling is essential for working with data stored on disk.

## Example: Reading a File
```kelpyshark
content = std.read_file("data.txt")
print content
```

## Example: Writing a File
```kelpyshark
std.write_file("output.txt", "Hello, world!")
```

## Summary
- Use `std.read_file` and `std.write_file` for basic file operations.