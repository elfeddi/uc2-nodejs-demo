const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url === '/healthz') { res.writeHead(200); res.end('ok'); return; }
  if (req.url === '/readyz')  { res.writeHead(200); res.end('ok'); return; }
  if (req.url === '/metrics') { res.writeHead(200); res.end(''); return; }
  res.writeHead(200);
  res.end('UC2 nodejs demo - DxP OK');
});
server.listen(port, () => console.log('Listening on ' + port));
