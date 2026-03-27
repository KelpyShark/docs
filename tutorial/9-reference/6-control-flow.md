# 6. Control Flow (Quick Reference)

## If / Else
```kelpyshark
if x > 10 {
    print "big"
} else {
    print "small"
}
```

## While Loop
```kelpyshark
x = 0
while x < 5 {
    print x
    x = x + 1
}
```

## For Loop
```kelpyshark
fruits = ["apple", "banana", "cherry"]
for fruit in fruits {
    print fruit
}
```

## Break & Continue
```kelpyshark
for i in [1,2,3,4,5] {
    if i == 3 {
        continue
    }
    if i == 5 {
        break
    }
    print i
}
```
