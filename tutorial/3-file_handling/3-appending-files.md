# Appending to Files

KelpyShark's standard library may provide an `append_file` function in the future. For now, read the file, concatenate the new content, and write it back.

## Example
```kelpyshark
old = std.read_file("log.txt")
new = old + "\nNew entry."
std.write_file("log.txt", new)
```

## Summary
- Read, concatenate, and write to append content.
- Native append support may be added in future versions.