# Project: Simple Web Server

Build a basic web server that responds to HTTP requests. (Requires KelpyShark's networking/stdlib support.)

## Learning Goals

- Practice network IO
- Work with sockets and protocols
- Organize code for real-world applications

## Step 1: Import Networking Module

```kelpyshark
import std.net
```

## Step 2: Create a Server Socket

```kelpyshark
server = std.net.listen(8080)
print("Server running on port 8080...")
```

## Step 3: Accept and Handle Requests

```kelpyshark
while true {
    client = server.accept()
    request = client.read()
    print("Received request:\n" + request)
    response = "HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello from KelpyShark!"
    client.write(response)
    client.close()
}
```

## Full Example

```kelpyshark
def web_server() {
    import std.net
    server = std.net.listen(8080)
    print("Server running on port 8080...")
    while true {
        client = server.accept()
        request = client.read()
        print("Received request:\n" + request)
        response = "HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello from KelpyShark!"
        client.write(response)
        client.close()
    }
}
web_server()
```

## Extensions

- Serve HTML files or dynamic content
- Log requests to a file
- Add support for multiple routes (URLs)

## Summary

- This project demonstrates networking, sockets, and server logic.
- Try building more complex web apps as you advance!
