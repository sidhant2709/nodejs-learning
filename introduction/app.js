const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
        <html>
            <head>
                <title>My First Node.js Server</title>
            </head>
            <body>
                <h1>Welcome to my first Node.js server!</h1>
                <p>This is the home page</p>
                <form action="/message" method="POST">
                    <input type="text" name="message" />
                    <button type="submit">Send Request</button>
                </form>
            </body>
        </html>
        `);
    return res.end();
  }
  if (req.url === "/message" && req.method === "POST") {
    // fs.writeFileSync("message.txt", "DUMMY");
    // res.statusCode = 302;
    // res.setHeader("Location", "/");
    // return res.end();
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.write(`
        <html>
            <head>
                <title>My First Node.js Server</title>
            </head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>
        `);
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
