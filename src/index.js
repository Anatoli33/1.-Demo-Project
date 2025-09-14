import http from 'http';
import fs from 'fs/promises';

const port = 1337;

const serve = http.createServer(async (req, res) => {
  try {
    switch (req.url) {
      case "/": {
        const homeHTML = await fs.readFile('./src/views/home/index.html', { encoding: 'utf-8' });
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(homeHTML);
        break;
      }

      case "/styles/site.css": {
        const siteCss = await fs.readFile('./src/styles/site.css', { encoding: 'utf-8' });
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.write(siteCss);
        break;
      }
      case "/cats/add-breed":{
        const addBreedHTML = await fs.readFile('./src/views/addBreed.html', {encoding: 'utf-8'});
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addBreedHTML);
        break;
      }
       case "/cats/add-cat":{
        const addCatHTML = await fs.readFile('./src/views/addCat.html', {encoding: 'utf-8'});
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(addCatHTML);
        break;
      }

      default: {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write("404 Not Found");
      }
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
