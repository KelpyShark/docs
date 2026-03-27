# Advanced Streams in KelpyShark

Beyond basic console and file IO, KelpyShark supports advanced stream operations for more complex data processing.

## What Are Streams?
Streams are objects that let you read or write data in chunks, rather than all at once. This is useful for large files, network communication, or processing data as it arrives.

## Types of Streams
- **File streams**: Read/write files in chunks.
- **Memory streams**: Work with data in memory as if it were a file.
- **Network streams**: Communicate over sockets or HTTP (if supported by stdlib).

## Example: Reading a File in Chunks
```kelpyshark
file = open("bigdata.bin", "rb")
while not file.eof() {
    chunk = file.read(1024)  # Read 1024 bytes
    process(chunk)
}
file.close()
```

## Example: Writing to a Memory Stream
```kelpyshark
stream = std.memory_stream()
stream.write("Hello, memory!")
print(stream.getvalue())
```

## Example: Network Stream (if supported)
```kelpyshark
sock = std.socket("example.com", 80)
sock.write("GET / HTTP/1.0\r\n\r\n")
response = sock.read()
print(response)
sock.close()
```

## Best Practices
- Use streams for large or continuous data.
- Always close streams when done.
- Handle errors with `try-catch`.

## Summary
- Streams allow efficient, flexible data processing.
- Use them for files, memory, or network IO.
