const http = require('http')


const PORT = process.env.PORT || 3000
//createServer - метод из модуля http для создания http - сервера. Он позволяет обработать входящие http - запросы (req) и отправлять соответствующий http - ответ (res)
// Базовый вариант формирования сервера
const server = http.createServer((req, res) => {
    //req - request - это ОБЪЕКТ запроса, который содержит информацию о запросе, что отправл клиент
    //http://localhost:3333/api/shop
    // console.log(req.url) // путь который запросил клиент - api/posts
    // console.log(req.method); //GET, POST, DELETE, PUT - http методы
    // console.log(req.headers); // метаинформация. Заголовки запроса
    // console.log(req.body); // тело запроса для методов POST/PUT - данные, которые отправил клиент
    // const {} = req.body
    if(req.method !== 'GET') {
        console.log('The method is not get');
    }
    //res - response - это ОБЪЕКТ ответа, который мы используем для отправки ответа обратно клиенту
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello world')
})
//listen - метод прослушивания сервера. На каком порту и какое сообщение передается при запуске сервера
// обработка запросов при создании сервера
server.listen(PORT, () => {
    console.log(`Server is running on ${PORT}, http://127.0.0.1:${PORT }/`);
})


// node server.js 
// node - запуск чтения скрипт файла через среду нод
//frontend example
// fetch('http://127.0.0.1:3000/api/posts', {
//     method: POST,
//     // headers: {''}
//     body: JSON.stringify({
//         id: 1,
//         title: 'hello world',
//         body: 'sdfbvdsvd'
//     })
// })

