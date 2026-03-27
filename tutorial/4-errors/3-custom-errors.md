# Custom Errors in KelpyShark

KelpyShark allows you to define and throw custom error objects, making error handling more expressive and robust.

## Why Use Custom Errors?

- To distinguish between different error types.
- To attach additional information (error codes, context, etc.).
- To enable more precise error handling in `catch` blocks.

## Defining a Custom Error Object

A custom error is simply an object with properties describing the error:

```kelpyshark
let err = {
    type: "ValidationError",
    message: "Input must be a positive number.",
    code: 1001,
    context: {
        input: -5
    }
}
throw err
```

## Catching and Handling Custom Errors

You can check the properties of the error object in your `catch` block:

```kelpyshark
try {
    throw {
        type: "AuthError",
        message: "Invalid credentials.",
        code: 401
    }
} catch (err) {
    if err.type == "AuthError" {
        print("Authentication failed: " + err.message)
    } else {
        print("Other error: " + err)
    }
}
```

## Example: Custom Error Class Pattern

For advanced usage, you can define a function to create error objects:

```kelpyshark
func makeError(type, message, code) {
    return {
        type: type,
        message: message,
        code: code
    }
}

throw makeError("NetworkError", "Timeout occurred.", 408)
```

## Best Practices

- Always include a `type` and `message` in your custom errors.
- Use error codes for programmatic handling.
- Document your custom error types for maintainability.

## Summary

- Custom errors are objects with descriptive properties.
- Use them for precise and maintainable error handling.
