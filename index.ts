import * as http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url?.includes("/data/")) {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(fs.readFileSync(__dirname + "/data.json", "utf8"));
  } else {
    res.end("Hello World!");
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,() => console.log(`\nServer running on http://localhost:${PORT}`));
