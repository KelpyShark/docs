# Project: Command-Line Calculator

Build a simple calculator that runs in the terminal and performs basic arithmetic operations.

## Learning Goals
- Practice console input/output
- Use conditionals and loops
- Organize code into functions

## Step 1: Get User Input
Prompt the user for an operation and two numbers:
```kelpyshark
op = std.input("Enter operation (+, -, *, /): ")
a = float(std.input("First number: "))
b = float(std.input("Second number: "))
```

## Step 2: Perform Calculation
Use conditionals to perform the correct operation:
```kelpyshark
if op == "+" {
    result = a + b
} elif op == "-" {
    result = a - b
} elif op == "*" {
    result = a * b
} elif op == "/" {
    if b == 0 {
        print("Error: Division by zero")
        exit()
    }
    result = a / b
} else {
    print("Unknown operation")
    exit()
}
print("Result: " + result)
```

## Step 3: Loop for Multiple Calculations
Allow the user to perform multiple calculations:
```kelpyshark
while true {
    // ...input and calculation code...
    again = std.input("Another calculation? (y/n): ")
    if again != "y" {
        break
    }
}
```

## Full Example
```kelpyshark
def calculator() {
    while true {
        op = std.input("Enter operation (+, -, *, /): ")
        a = float(std.input("First number: "))
        b = float(std.input("Second number: "))
        if op == "+" {
            result = a + b
        } elif op == "-" {
            result = a - b
        } elif op == "*" {
            result = a * b
        } elif op == "/" {
            if b == 0 {
                print("Error: Division by zero")
                continue
            }
            result = a / b
        } else {
            print("Unknown operation")
            continue
        }
        print("Result: " + result)
        again = std.input("Another calculation? (y/n): ")
        if again != "y" {
            break
        }
    }
}
calculator()
```

## Extensions
- Add support for more operations (exponent, modulus)
- Handle invalid input gracefully
- Organize code into separate functions for each operation

## Summary
- This project reinforces input/output, conditionals, loops, and functions.
- Try extending it with new features!
