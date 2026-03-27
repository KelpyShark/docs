# Error Hierarchy in KelpyShark

While KelpyShark does not enforce a strict error class hierarchy, it is common practice to organize your custom errors by type or category. This helps with structured error handling and makes your code more maintainable.

## Common Error Types

- `TypeError`: Invalid type encountered.
- `ValueError`: Invalid value provided.
- `FileNotFoundError`: File operation failed due to missing file.
- `AuthError`: Authentication or authorization failure.
- `NetworkError`: Network operation failed.

## Example: Categorizing Errors

```kelpyshark
try {
    throw {
        type: "TypeError",
        message: "Expected a string, got a number."
    }
} catch (err) {
    if err.type == "TypeError" {
        print("Type error: " + err.message)
    } else {
        print("Other error: " + err)
    }
}
```

## Custom Hierarchies

You can define your own hierarchy by using a `parentType` or similar property:

```kelpyshark
let err = {
    type: "DatabaseConnectionError",
    parentType: "DatabaseError",
    message: "Could not connect to DB."
}
throw err
```

In your `catch` block, you can check for both `type` and `parentType` to handle errors at different levels of specificity.

## Best Practices

- Use consistent naming for error types.
- Document your error hierarchy for your team.
- Handle general errors at a higher level, and specific errors where needed.

## Summary

- Organize errors by type for clarity.
- Use custom properties to create your own error hierarchies.
- Check error types in `catch` blocks for precise handling.
