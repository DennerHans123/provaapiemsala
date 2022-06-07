server.get ('/id'), (req,resp) => {
let resposta ="1";
resp.send(resposta)}

server.get ('/nome')
let resposta ="motoqueiro fantasma";
resp.send(resposta)

server.get ('/descrição')
let resposta ="caveira de fogo";
resp.send(resposta)

server.get ('/voa')
let resposta ="não";
resp.send(resposta)