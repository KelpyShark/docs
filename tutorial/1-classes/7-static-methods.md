# Static Methods

KelpyShark will support static methods in future versions. For now, use standalone functions that do not depend on object or class state.

## Example: Simulating Static Methods

```kelpyshark
def add(a, b) {
    return a + b
}

result = add(2, 3)
print result   # 5
```

## Planned Syntax (Not Yet Implemented)

```kelpyshark
class Math {
    @staticmethod
    def add(a, b) {
        return a + b
    }
}
```

## Summary

- Use standalone functions for static-like behavior.
- Static method syntax is planned for future versions.
