var router = require('./router');

var app = router(3001);

var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

var contatos = [
    {nome: "Thiago", telefone: "9999-8888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
    {nome: "Ana", telefone: "9999-8877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
    {nome: "Maria", telefone: "9999-8866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
    {nome: "Isabella", telefone: "9999-8866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}},
    {nome: "João", telefone: "9999-8866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
];

app.interceptor(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.interceptor(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  next();
});

app.get('/operadoras', function (req, res) {
  res.write(JSON.stringify(operadoras));
  res.end();
});

app.get('/contatos', function (req, res) {
  res.write(JSON.stringify(contatos));
  res.end();
});

app.post('/contatos', function (req, res) {
  var contato = req.body;
  contatos.push(JSON.parse(contato));
  res.end();
});

app.post('/file', function (req, res) {
  console.log(req.body);
  res.end();
});

app.options('/file', function (req, res) {
  res.end();
});

app.options('/contatos', function (req, res) {
  res.end();
});