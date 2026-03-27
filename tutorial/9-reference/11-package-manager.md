# 11. Package Manager (Quick Reference)

KelpyShark includes a package manager for installing, publishing, and managing libraries.

## Project Structure
```
my_project/
├── kelpy.toml          # Package manifest
├── kelpy.lock          # Pinned dependency versions
├── src/
│   └── main.ks         # Entry point
└── libs/               # Installed dependencies
```

## kelpy.toml Example
```toml
[package]
name = "my_project"
version = "0.1.0"
description = "A cool project"

[dependencies]
http = "1.0.0"
json = "0.2.1"
```

## Common Commands
- `kelpy install` — Install all dependencies
- `kelpy install <package>` — Install a specific package
- `kelpy publish` — Publish your library
- `kelpy new <name>` — Create a new project

## Dependency Resolution
- Topological sort, detects cycles
- All dependencies installed before dependents

## Registry
- User-local: `~/.kelpyshark/registry/` (Windows: `%USERPROFILE%\.kelpyshark\registry\`)
- Libraries are `.kslib` directories with `kelpy.toml` and `src/`
