// Zero-dependency static file server for previewing the HTML pages.
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');       // project root, no cwd needed
const PORT = Number(process.env.PORT) || 8731;
const TYPES = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript',
  '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml',
  '.pdf':'application/pdf', '.json':'application/json', '.ico':'image/x-icon' };

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') rel = '/index-preview.html';
  const fp = path.join(ROOT, path.normalize(rel));
  if (!fp.startsWith(ROOT)) { res.writeHead(403).end('Forbidden'); return; }
  fs.stat(fp, (err, st) => {
    if (err || !st.isFile()) {
      if (rel === '/index-preview.html') { res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'}); res.end(index()); return; }
      res.writeHead(404, {'Content-Type':'text/html; charset=utf-8'}); res.end('<h1>404</h1>'+index()); return;
    }
    res.writeHead(200, {'Content-Type': TYPES[path.extname(fp).toLowerCase()] || 'application/octet-stream'});
    fs.createReadStream(fp).pipe(res);
  });
}).listen(PORT, () => console.log('static server on http://localhost:'+PORT));

function index(){
  const pages = fs.readdirSync(ROOT).filter(f => f.endsWith('.html'));
  return '<!doctype html><meta charset="utf-8"><body style="font-family:DM Sans,system-ui,sans-serif;max-width:640px;margin:48px auto;padding:0 20px"><h1>Páginas</h1><ul style="font-size:18px;line-height:2.2">'
    + pages.map(p=>`<li><a href="/${encodeURIComponent(p)}">${p}</a></li>`).join('') + '</ul></body>';
}
