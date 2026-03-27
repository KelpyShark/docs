# Project: To-Do List Manager

Create a simple to-do list application that lets users add, view, and remove tasks from the command line.

## Learning Goals

- Practice lists and dictionaries
- Use loops and conditionals
- Organize code into functions
- Handle user input and errors

## Step 1: Define the Data Structure

Use a list to store tasks:

```kelpyshark
tasks = []
```

## Step 2: Add Tasks

Prompt the user to add a task:

```kelpyshark
task = std.input("Enter a new task: ")
tasks.append(task)
```

## Step 3: View Tasks

Display all tasks:

```kelpyshark
for i in range(len(tasks)) {
    print((i+1) + ". " + tasks[i])
}
```

## Step 4: Remove Tasks

Remove a task by its number:

```kelpyshark
num = int(std.input("Task number to remove: "))
if num > 0 and num <= len(tasks) {
    tasks.remove(tasks[num-1])
} else {
    print("Invalid task number.")
}
```

## Step 5: Main Loop

Let the user choose actions:

```kelpyshark
while true {
    print("1. Add task\n2. View tasks\n3. Remove task\n4. Quit")
    choice = std.input("Choose an option: ")
    if choice == "1" {
        // add task code
    } elif choice == "2" {
        // view tasks code
    } elif choice == "3" {
        // remove task code
    } elif choice == "4" {
        break
    } else {
        print("Invalid choice.")
    }
}
```

## Full Example

```kelpyshark
def todo_list() {
    tasks = []
    while true {
        print("1. Add task\n2. View tasks\n3. Remove task\n4. Quit")
        choice = std.input("Choose an option: ")
        if choice == "1" {
            task = std.input("Enter a new task: ")
            tasks.append(task)
        } elif choice == "2" {
            for i in range(len(tasks)) {
                print((i+1) + ". " + tasks[i])
            }
        } elif choice == "3" {
            num = int(std.input("Task number to remove: "))
            if num > 0 and num <= len(tasks) {
                tasks.remove(tasks[num-1])
            } else {
                print("Invalid task number.")
            }
        } elif choice == "4" {
            break
        } else {
            print("Invalid choice.")
        }
    }
}
todo_list()
```

## Extensions

- Save/load tasks to a file
- Add task priorities or due dates
- Mark tasks as completed

## Summary

- This project reinforces lists, loops, and user interaction.
- Try adding new features for more practice!
