import http from 'http'

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    
    const {method, url} = req
    if(method === 'GET') {
        if(url === '/') {
            res.end('This is home page')
        } else if (url === '/about') {
            res.end('this is about page')
        } else if(url === '/contacts') {
            res.end('This is contacts page')
        } else {
            res.statusCode = 404
            res.end('Page not found')
        }
    } else if(method === 'POST') {
        if(url === '/submit') {
            res.end('form submitted')
        } else {
            res.statusCode = 404
            res.end('page not found')
        }
    } else {
        res.statusCode === 405
        res.end('Method is not allowed')
    }
})

server.listen(3000, () => {
    console.log('Server is running at 3000 port')
})
