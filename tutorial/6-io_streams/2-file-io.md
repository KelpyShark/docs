# File IO in KelpyShark

File IO lets your program read from and write to files on disk. This is essential for saving data, loading configurations, and processing external information.

## Opening Files
Use `open(filename, mode)` to open a file. Modes include:
- `"r"`: Read (default)
- `"w"`: Write (overwrites file)
- `"a"`: Append (adds to end)

```kelpyshark
file = open("data.txt", "r")
```

## Reading Files
Read the entire file:
```kelpyshark
content = file.read()
print(content)
```

Read line by line:
```kelpyshark
for line in file {
    print(line)
}
```

## Writing Files
```kelpyshark
file = open("output.txt", "w")
file.write("Hello, file!\n")
file.close()
```

## Appending to Files
```kelpyshark
file = open("log.txt", "a")
file.write("New log entry\n")
file.close()
```

## Closing Files
Always close files when done:
```kelpyshark
file.close()
```

## Best Practices
- Use `try-catch` to handle file errors.
- Always close files (or use context managers if available).
- Check if files exist before reading.

## Summary
- Use `open` to access files.
- Read, write, and append with file methods.
- Always close files after use.
