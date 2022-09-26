import finalhandler from 'finalhandler';
import serveStatic from 'serve-static';
import http from 'http';
import fs from 'fs';

const serveHtml = serveStatic('.', {'index': ['index.html']});

const server = http.createServer((req, res) => {
    if (req.url === '/get-small-background-images-paths') {
        res.end(JSON.stringify(fs.readdirSync('nw-crest-designer/images/background/small').map(path => 'nw-crest-designer/images/background/small/' + path)));
    } else if (req.url === '/get-small-foreground-images-paths') {
        res.end(JSON.stringify(fs.readdirSync('nw-crest-designer/images/foreground/small').map(path => 'nw-crest-designer/images/foreground/small/' + path)));
    } else {
        serveHtml(req, res, finalhandler(req, res));
    }
});

server.listen(8080);
