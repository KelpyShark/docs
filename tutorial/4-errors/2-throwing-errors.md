# Throwing Errors

Throwing errors is a fundamental part of error handling in KelpyShark. You can use the `throw` statement to signal that something unexpected has happened, or to enforce constraints in your code.

## Basic Usage

The simplest way to throw an error is to use the `throw` statement with a string message:

```kelpyshark
throw "Something went wrong!"
```

This will immediately stop execution and propagate the error up the call stack until it is caught by a `try-catch` block (see previous section).

## Throwing Custom Error Objects

You can also throw custom error objects for more structured error handling. For example:

```kelpyshark
let err = {
 type: "FileNotFoundError",
 message: "The file 'data.txt' was not found.",
 code: 404
}
throw err
```

This allows you to include additional information about the error, such as a type or error code, which can be checked in a `catch` block.

## Throwing Errors in Functions

Throwing errors is especially useful in functions to indicate invalid input or failed operations:

```kelpyshark
func divide(a, b) {
 if b == 0 {
  throw "Division by zero is not allowed."
 }
 return a / b
}

try {
 let result = divide(10, 0)
} catch (err) {
 print("Error: " + err)
}
```

## Advanced: Throwing with Stack Trace

Some advanced error objects may include a stack trace for debugging:

```kelpyshark
let err = {
 type: "CustomError",
 message: "Something advanced went wrong.",
 stack: getStackTrace() // hypothetical stdlib function
}
throw err
```

## Best Practices

- Use descriptive error messages.
- Prefer throwing structured error objects for complex applications.
- Only throw errors for truly exceptional conditions, not for normal control flow.

## Summary

- Use `throw` to raise an error manually.
- You can throw strings or custom error objects.
- Thrown errors can be caught with `try-catch` blocks.
