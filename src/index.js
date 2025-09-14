import http from 'http';
import fs from 'fs/promises';

const port = 1337;

const serve = http.createServer(async (req, res) => {
  try {
    if (req.url === "/") {
      const homeHTML = await fs.readFile('./src/views/home/index.html', { encoding: 'utf-8' });
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(homeHTML);

    } else if (req.url === "/styles/site.css") {
      const siteCss = await fs.readFile('./src/styles/site.css', { encoding: 'utf-8' });
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.write(siteCss);

    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.write("404 Not Found");
    }
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.write("Server Error: " + err.message);
  }
  res.end();
});

serve.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
