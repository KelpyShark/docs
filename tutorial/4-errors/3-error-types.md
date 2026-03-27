# Error Types

KelpyShark may provide different error types in the future. For now, errors are usually strings or objects describing the problem.

## Example
```kelpyshark
try {
    throw {"type": "ValueError", "message": "Invalid value"}
} catch (err) {
    print err["type"], err["message"]
}
```

## Summary
- Errors can be strings or dictionaries.
- Future versions may add built-in error types.