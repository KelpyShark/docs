# Comments in KelpyShark


# Comments in KelpyShark

Comments are ignored by the interpreter and are used to explain code, clarify intent, or temporarily disable code.

## Single-line Comments
Start with `#`:
```kelpyshark
# This is a single-line comment
print "Hello"  # This prints Hello
```

## Multi-line Comments
Wrap with `### ... ###`:
```
###
This is a
multi-line comment
###
```

## Commenting Out Code
You can use comments to disable code for testing:
```kelpyshark
# print "This won't run"
```

## Best Practices
- Use comments to explain why, not just what
- Keep comments up to date
- Avoid obvious comments ("increment x by 1" for `x = x + 1`)
- Prefer clear code over excessive comments

## Summary
- Use `#` for single-line, `### ... ###` for multi-line comments.
- Comments help others (and your future self) understand your code.
