# 12. CLI & Tooling (Quick Reference)

KelpyShark provides a command-line tool `kelpy` for running, building, and managing projects.

## Common Commands
| Command                              | Description                       |
|--------------------------------------|-----------------------------------|
| `kelpy run file.ks`                  | Run a script                      |
| `kelpy repl`                         | Start interactive REPL            |
| `kelpy build file.ks --target c`     | Compile to C                      |
| `kelpy build file.ks --target js`    | Compile to JavaScript             |
| `kelpy build file.ks --target java`  | Compile to Java                   |
| `kelpy build file.ks --target cs`    | Compile to C#                     |
| `kelpy new myproject`                | Create a new project              |
| `kelpy install`                      | Install dependencies              |
| `kelpy publish`                      | Publish a library                 |

## File Extension
- Source files use `.ks`

## Example
```sh
kelpy run examples/hello.ks
kelpy build examples/hello.ks --target c
```
