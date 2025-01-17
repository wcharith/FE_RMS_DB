import jsonServer from 'json-server';
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT ?? 8080;

server.use(middleware);
server.use(router);

server.listen(port);