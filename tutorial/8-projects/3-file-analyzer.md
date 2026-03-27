# Project: File Analyzer

Build a program that analyzes a text file and reports statistics such as line count, word count, and character count.

## Learning Goals

- Practice file IO
- Use loops and string operations
- Handle errors gracefully

## Step 1: Get File Name from User

Prompt for the file name:

```kelpyshark
filename = std.input("Enter file name: ")
```

## Step 2: Open and Read the File

Use a try-catch block to handle missing files:

```kelpyshark
try {
    file = open(filename, "r")
    content = file.read()
    file.close()
} catch (err) {
    print("Error: " + err)
    exit()
}
```

## Step 3: Analyze the Content

Count lines, words, and characters:

```kelpyshark
lines = content.split("\n")
line_count = len(lines)
word_count = len(content.split())
char_count = len(content)
```

## Step 4: Display Results

```kelpyshark
print("Lines: " + line_count)
print("Words: " + word_count)
print("Characters: " + char_count)
```

## Full Example

```kelpyshark
def file_analyzer() {
    filename = std.input("Enter file name: ")
    try {
        file = open(filename, "r")
        content = file.read()
        file.close()
    } catch (err) {
        print("Error: " + err)
        return
    }
    lines = content.split("\n")
    line_count = len(lines)
    word_count = len(content.split())
    char_count = len(content)
    print("Lines: " + line_count)
    print("Words: " + word_count)
    print("Characters: " + char_count)
}
file_analyzer()
```

## Extensions

- Report the most common word
- Ignore blank lines or comments
- Analyze multiple files at once

## Summary

- This project reinforces file IO, string processing, and error handling.
- Try extending it for more advanced analysis!
