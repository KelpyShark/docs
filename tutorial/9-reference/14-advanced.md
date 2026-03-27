# 14. Advanced Features (Quick Reference)

## First-Class Functions
- Assign functions to variables
- Pass functions as arguments
- Return functions from functions

## Closures
- Functions can access variables from outer scopes

## String Interpolation
- Embed expressions in strings: `"Hello, {$name}!"`

## Importing User Libraries
- Place library in `libs/` and use `import mylib`

## Transpilation
- Compile to C, JavaScript, Java, C#
- Example: `kelpy build file.ks --target c`

## Native Compilation
- Compile to binary via C toolchain (GCC/Clang)

## Package Publishing
- `kelpy publish` to share your library
