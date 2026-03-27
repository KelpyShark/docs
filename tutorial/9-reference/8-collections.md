# 8. Collections (Quick Reference)

## Lists
- Ordered, zero-based index
- Created with `[ ... ]`

```kelpyshark
fruits = ["apple", "banana", "cherry"]
print fruits[0]      # "apple"
print len(fruits)    # 3
```

## Dictionaries (Dicts)
- Key-value pairs
- Created with `{ ... }`

```kelpyshark
person = {"name": "Alice", "age": 30}
print person["name"]    # "Alice"
print len(person)       # 2
```

## Indexing
- Lists: `list[index]`
- Dicts: `dict[key]`

## Built-in Functions
- `len(x)` — Length of list, dict, or string
- `push(list, value)` — Returns new list with value appended
