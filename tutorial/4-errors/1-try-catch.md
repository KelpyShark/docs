# Try-Catch Blocks

The `try` and `catch` statements are used to handle errors in KelpyShark. Code that might fail is placed inside a `try` block. If an error occurs, execution jumps to the `catch` block, where you can respond to the error.

## Basic Example
```kelpyshark
try {
    std.read_file("missing.txt")
} catch (err) {
    print("File not found!")
}
```

## How It Works
- The code inside `try` is executed.
- If no error occurs, the `catch` block is skipped.
- If an error is thrown, the `catch` block runs with the error value assigned to `err`.

## Catching Custom Error Objects
You can throw and catch custom error objects:
```kelpyshark
try {
    throw {
        type: "FileNotFoundError",
        message: "File missing!"
    }
} catch (err) {
    if err.type == "FileNotFoundError" {
        print("File error: " + err.message)
    } else {
        print("Other error: " + err)
    }
}
```

## Nested Try-Catch
You can nest `try-catch` blocks for more granular error handling:
```kelpyshark
try {
    try {
        risky_operation()
    } catch (innerErr) {
        print("Inner error: " + innerErr)
        throw "Outer error triggered"
    }
} catch (outerErr) {
    print("Outer error: " + outerErr)
}
```

## Best Practices
- Keep `try` blocks small—only wrap code that might fail.
- Handle specific error types when possible.
- Avoid empty `catch` blocks; always log or handle the error.

## Summary
- Place risky code in `try`.
- Handle errors in `catch`.
- You can inspect the error value for more details.