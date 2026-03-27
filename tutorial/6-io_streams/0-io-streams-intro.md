# Introduction to IO Streams

IO (Input/Output) streams are how your KelpyShark programs communicate with the outside world. They let you read data from the user, files, or other sources, and write data back out. Mastering IO is essential for building interactive and useful programs.

KelpyShark provides standard library functions for:

- Console input and output (reading from and writing to the terminal)
- File input and output (reading from and writing to files)
- Advanced streams (working with data in memory, over the network, etc.)

## Example: Console Input

```kelpyshark
name = std.input("Enter your name: ")
print("Hello, " + name)
```

## Example: Console Output

```kelpyshark
print("KelpyShark is fun!")
```

## Why Use IO Streams?

- To interact with users (input/output)
- To read and write files
- To process data from other programs or the internet

## More Examples

Reading a number from the user:

```kelpyshark
age = std.input("Enter your age: ")
print("You are " + age + " years old.")
```

## Summary

- Use `std.input` for input and `print` for output.
- IO streams are the foundation for all program interaction.
