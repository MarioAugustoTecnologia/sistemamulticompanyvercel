const jsonServer = require("json-server"); // importing json-server module
const server = jsonServer.create();        // Instalar na pasta server: npm i json-server@0.17.0
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; //  chose port from here like 8080, 3001
const cors = require('cors');

server.use(middlewares);

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/usuarios/:resource/:id/show': '/:resource/:id',
    '/vendas/:resource/:id/show': '/:resource/:id',
    '/atual/:resource/:id/show': '/:resource/:id',
    '/catproduto/:resource/:id/show': '/:resource/:id',
    '/produtos/:resource/:id/show': '/:resource/:id',
    '/despesas/:resource/:id/show': '/:resource/:id',
    '/compras/:resource/:id/show': '/:resource/:id',
    '/resultados/:resource/:id/show': '/:resource/:id',
    '/clientes/:resource/:id/show': '/:resource/:id',
    '/fornecedor/:resource/:id/show': '/:resource/:id',
    '/catfornecedor/:resource/:id/show': '/:resource/:id'
}))

server.use(router);

server.use(cors({origin: ["https://sistemamulticompanyvercel.vercel.app/"], 
    methods: ["GET","POST", "PUT", "DELETE"],
    credentials: true 
    }));

server.listen(port);

module.exports = server