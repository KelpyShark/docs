# IO Best Practices in KelpyShark

Good IO practices help you write programs that are robust, efficient, and user-friendly.

## 1. Always Handle Errors

Use `try-catch` when working with files or streams to handle missing files, permission errors, etc.

```kelpyshark
try {
    file = open("data.txt")
    // ...
    file.close()
} catch (err) {
    print("File error: " + err)
}
```

## 2. Always Close Streams

Leaving files or streams open can cause data loss or resource leaks. Always close them when done.

## 3. Use the Right Mode

Open files in the correct mode (`"r"`, `"w"`, `"a"`, `"rb"`, etc.) for your needs.

## 4. Validate Input

Check and sanitize user input before using it in your program.

## 5. Avoid Hardcoding Paths

Use variables or configuration files for file paths to make your code portable.

## 6. Buffer Large IO

For large files or data, read and write in chunks to avoid memory issues.

## 7. Document IO Behavior

Explain what files your program reads/writes and any expected formats.

## Summary

- Handle errors and close streams.
- Use the right modes and validate input.
- Write portable, maintainable IO code.
