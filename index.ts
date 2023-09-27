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

server.listen(9000);
