# 9. Modules & Imports (Quick Reference)

## Importing Modules
```kelpyshark
import math
import strings
import my_library
```

- Standard library modules are always available
- User libraries must be installed (see package manager)

## Module Search Order
1. Standard library (math, strings, io, json, sys)
2. Project `libs/` directory
3. User registry

## Dot Notation
- Submodules: `import http.server` loads `http/src/server.ks`

## Exporting Functions
- All top-level functions in a module are exported

## Example
```kelpyshark
import math
print math.PI
print math.pow(2, 8)
```
