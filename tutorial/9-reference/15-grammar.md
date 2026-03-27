# 15. Language Grammar (Quick Reference)

## Program
```
program ::= statement*
```

## Statements
```
statement ::= assignment
           | function_def
           | if_statement
           | while_loop
           | for_loop
           | return_statement
           | import_statement
           | print_statement
           | expression_statement
```

## Assignment
```
assignment ::= IDENTIFIER '=' expression
```

## Function Definition
```
function_def ::= 'def' IDENTIFIER '(' parameters ')' block
parameters ::= IDENTIFIER (',' IDENTIFIER)*
block ::= '{' statement* '}'
```

## If Statement
```
if_statement ::= 'if' expression block ['else' block]
```

## While Loop
```
while_loop ::= 'while' expression block
```

## For Loop
```
for_loop ::= 'for' IDENTIFIER 'in' expression block
```

## Expressions
```
expression ::= literal
            | IDENTIFIER
            | binary_expression
            | unary_expression
            | function_call
            | index_access
            | member_access
            | list_literal
            | dict_literal
            | string_interpolation
```

## Operators
```
binary_expression ::= expression operator expression
operator ::= '+' | '-' | '*' | '/' | '%' | '==' | '!=' | '<' | '<=' | '>' | '>=' | 'and' | 'or'
```

## Function Call
```
function_call ::= IDENTIFIER '(' arguments ')'
arguments ::= expression (',' expression)*
```

## Literals
```
literal ::= STRING | NUMBER | BOOLEAN
```
