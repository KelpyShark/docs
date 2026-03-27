# KelpyShark Standard Library Reference

A summary of the most useful functions and modules in the KelpyShark standard library.

## Core Functions

- `print(value)`: Output to console
- `std.input(prompt)`: Read input from user
- `len(obj)`: Get length of list, string, etc.
- `range(n)`: Generate numbers 0 to n-1
- `type(obj)`: Get the type of an object
- `int(str)`, `float(str)`, `str(num)`: Type conversions

## Math Module

- `math.sqrt(x)`: Square root
- `math.pow(a, b)`: Power
- `math.abs(x)`: Absolute value
- `math.sin(x)`, `math.cos(x)`, `math.tan(x)`

## String Methods

- `s.upper()`, `s.lower()`, `s.split(sep)`, `s.join(list)`
- `s.replace(old, new)`, `s.strip()`

## List Methods

- `list.append(x)`, `list.remove(x)`, `list.pop()`
- `list.map(f)`, `list.filter(f)`, `list.reduce(f, init)`
- `list.sort()`, `list.reverse()`

## Dictionary Methods

- `dict.keys()`, `dict.values()`, `dict.items()`
- `dict.get(key, default)`

## File IO

- `open(filename, mode)`: Open a file
- `file.read()`, `file.write(data)`, `file.close()`

## Collections

- `std.set(list)`: Create a set
- `std.queue()`, `std.stack()`: Create queue/stack

## Modules

- `import math`, `import std.net`, etc.

---

See the full tutorial for detailed usage and more modules.
