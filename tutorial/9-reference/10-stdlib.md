# 10. Standard Library (Quick Reference)

## math
| Function      | Description                |
|--------------|----------------------------|
| abs(x)       | Absolute value             |
| floor(x)     | Round down                 |
| ceil(x)      | Round up                   |
| round(x)     | Round to nearest           |
| sqrt(x)      | Square root                |
| pow(x, y)    | Exponentiation             |
| min(a, b)    | Minimum                    |
| max(a, b)    | Maximum                    |
| PI           | π constant                 |
| E            | Euler's number             |

## strings
| Function         | Description                |
|------------------|---------------------------|
| upper(s)         | Uppercase                 |
| lower(s)         | Lowercase                 |
| trim(s)          | Remove whitespace         |
| split(s, delim)  | Split into list           |
| join(list, delim)| Join list                 |
| contains(s, sub) | Check substring           |
| replace(s, o, n) | Replace text              |
| starts_with(s, p)| Prefix check              |
| ends_with(s, s)  | Suffix check              |
| char_at(s, i)    | Character at index        |
| substring(s, s, l)| Extract slice            |
| reverse(s)       | Reverse string            |
| length(s)        | String length             |

## io
| Function           | Description                |
|--------------------|---------------------------|
| read_file(path)    | Read file as string        |
| write_file(p, c)   | Write string to file       |
| append_file(p, c)  | Append string to file      |
| file_exists(path)  | Check if file exists       |
| input(prompt)      | Read a line from console   |

## json
| Function         | Description                |
|------------------|---------------------------|
| json_encode(v)   | Value to JSON string       |
| json_decode(s)   | JSON string to value       |

## sys
| Function         | Description                |
|------------------|---------------------------|
| env(name)        | Get environment variable   |
| exit(code)       | Exit with status code      |
| clock()          | Current Unix timestamp     |
| args()           | Command-line arguments     |
| cwd()            | Current working directory  |
| platform()       | OS name                    |
