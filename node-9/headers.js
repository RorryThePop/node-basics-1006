import http from 'http'


// const server1 = http.createServer((req, res) => {
//     console.log(req.headers);
//     res.statusCode = 200
//     if(req.url === '/json') {
//         res.setHeader('Content-Type', 'application/json')
//         res.end(JSON.stringify({message: 'Hello, JSON'}))
//     } else {
//         res.setHeader('Content-Type', 'text/html')
//         res.end('<h1>Hello, World!</h1>')
//     }
// })

// server1.listen(3000, () => {
//     console.log('Server is listening at 3000 port')
// })

// const server2 = http.createServer((req, res) => {
//     res.statusCode = 200
//     //данный заголовок разрешает отправлять запросы с других доменов на наш ресурс
//     res.setHeader('Access-Control-Allow-Origin', '*')

//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify({message: 'CORS enbled'}))
// })

// server2.listen(3333, () => {
//     console.log('Server is listening at 3333 port')
// })

const server3 = http.createServer((req, res) => {
    const {method, url, headers} = req
    console.log('method', method);
    console.log('url', url);
    console.log('headers', headers);
    res.statusCode = 200
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    if(url === '/json') {
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Cache-Control', 'public, max-age=3600')
        res.end(JSON.stringify({message: 'Hello, JSON!'}))
    } else if(req.url === '/html') {
        res.setHeader('Content-Type', 'text/html')
        res.setHeader('Cache-Control', 'public, max-age=3600')
        res.end('<h1>Hello world</h1>')
    } else {
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Cache-Control', 'no-cache')
        res.end('Hello world')
    }
})

server3.listen(4444, () => {
    console.log('Server is listening at 4444 port')
})