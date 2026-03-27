# Console IO in KelpyShark

Console IO lets your program interact with the user through the terminal or command prompt. This is the most basic and common form of input and output.

## Reading Input

Use `std.input(prompt)` to read a line of text from the user:

```kelpyshark
name = std.input("What is your name? ")
print("Hello, " + name)
```

## Writing Output

Use `print` to display information:

```kelpyshark
print("Welcome to KelpyShark!")
```

## Reading Numbers

All input is read as a string. Convert to a number if needed:

```kelpyshark
age = std.input("Enter your age: ")
age = int(age)
print("Next year, you'll be " + (age + 1))
```

## Multi-line Output

You can print multiple lines:

```kelpyshark
print("Line 1")
print("Line 2")
```

## Formatting Output

Use string concatenation or interpolation:

```kelpyshark
name = "Alice"
print("Hello, " + name)
```

## Best Practices

- Always prompt the user clearly for input.
- Convert input to the correct type before using it in calculations.
- Use `print` for debugging and user messages.

## Summary

- Use `std.input` for reading from the console.
- Use `print` for writing to the console.
- Handle input types carefully.
