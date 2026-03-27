# Variables in KelpyShark


# Variables in KelpyShark

Variables store values for later use. They are created by assignment and do not require a type declaration.

## Declaring Variables
```kelpyshark
x = 10
y = "hello"
flag = false
```

## Naming Rules
- Case-sensitive: `myVar` and `myvar` are different
- Letters, digits, underscores (`_`)
- Cannot start with a digit (e.g., `2cool` is invalid)
- Avoid reserved words (like `if`, `for`, `def`)

## Naming Conventions
- Use descriptive names: `total_score`, `userName`
- Use lowercase with underscores for variables, UpperCamelCase for types/classes (future)

## Reassignment and Dynamic Typing
Variables can be reassigned to any type:
```kelpyshark
x = 5
x = "now a string"
```

## Scope
Variables are block-scoped (curly braces) and function-scoped:
```kelpyshark
x = 1
if true {
	x = 2      # modifies outer x
	y = 3      # y exists only in this block
}
print x       # 2
print y       # Error: y is not defined
```

## Shadowing
Inner variables can shadow outer ones:
```kelpyshark
x = 10
if true {
	x = 20   # shadows outer x
	print x  # 20
}
print x      # 20 (same variable, not a new one)
```

## Constants
KelpyShark does not have built-in constants, but you can use naming conventions (e.g., `PI = 3.14`).

## Summary
- Variables are dynamically typed and block-scoped.
- Use clear, descriptive names.
