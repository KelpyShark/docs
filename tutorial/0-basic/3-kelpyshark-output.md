# Output in KelpyShark


# Output in KelpyShark

Use the `print` statement to display output to the console.

## Printing Strings and Numbers
```kelpyshark
print "Hello, world!"
print 42
```

## Printing Variables
```kelpyshark
name = "Alice"
score = 99
print name
print "Score: " + str(score)
```

## String Interpolation
```kelpyshark
user = "Bob"
print "Welcome, {$user}!"
```

## Printing Multiple Values
Concatenate values with `+`:
```kelpyshark
x = 5
y = 10
print "x = " + str(x) + ", y = " + str(y)
```

## Printing Lists and Dicts
```kelpyshark
nums = [1,2,3]
print nums   # [1,2,3]
person = {"name": "Alice"}
print person # {"name":"Alice"}
```

## Formatting Output
Use string interpolation for formatted output:
```kelpyshark
name = "Eve"
age = 27
print "{$name} is {$age} years old."
```

## Summary
- Use `print` for output.
- Concatenate or interpolate for complex output.
