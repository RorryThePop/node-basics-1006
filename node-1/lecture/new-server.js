const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome to the home page')
    } else if(req.url === '/about') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Welcome to the About page')
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('Page is not found')
    }
})

server.listen(3000, () => {
    console.log(`Server is running on 3000 PORT`);
})