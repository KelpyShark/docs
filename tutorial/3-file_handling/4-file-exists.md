# Checking if a File Exists

KelpyShark's standard library provides a function to check if a file exists.

## Example
```kelpyshark
if std.file_exists("data.txt") {
    print "File found!"
} else {
    print "File not found."
}
```

## Summary
- Use `std.file_exists(filename)` to check for file existence.