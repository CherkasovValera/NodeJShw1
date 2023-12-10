const http = require('http');
let counter = 0;
let count = 0;

const server = http.createServer((req, res) => {
  console.log('Запрос получен');
  if (req.url === "/") {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`<h1>Добро пожаловать на мой сайт!</h1>
    <a href='/about'> About page</a>
    <p> На страницу заходили ${counter++} раз</p>`);
  } else if (req.url === "/about") {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`<h1>About</h1>
    <a href='/'> Вернутся на главную</a>
    <p> На страницу заходили ${count++} раз</p>`);
  } else {
    res.writeHead(404, {
        'Content-Type': 'text/html; charset=UTF-8',
    });
    res.end(`<h1>Страница не найдена!</h1>
    <a href='/'> Вернитесь на главную страницу</a>`);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
