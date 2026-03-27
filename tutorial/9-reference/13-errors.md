# 13. Error Handling (Quick Reference)

## Runtime Errors
- Accessing undefined variables
- Calling functions with wrong number of arguments
- Type errors (e.g. adding string to number)
- Division by zero
- Index out of bounds

## Error Messages
- Errors include line and column numbers
- Example:
  ```
  Error at line 3, column 5: Undefined variable 'foo'
  ```

## Handling Errors
- Use `if`/`else` to check for conditions
- No try/catch (yet)

## Warnings
- Unused variables
- Return outside function
