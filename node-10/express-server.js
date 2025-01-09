import express from 'express'
// import dotenv from 'dotenv'
import 'dotenv/config'

const app = express()
const PORT =  process.env.PORT || 3333
//все мидлвейр(промежуточные функции - хелперы) используются через use
app.use(express.json())
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({message: 'Internal Server Error'})
})

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.get('/api', (req, res) => {
    const {query, params} = req
    console.log(query);
    res.send(`${query.name}`)
})

app.get('/text', (req, res) => {
    res.send('this is plain text')
    res.json({message: 'THis is json text'})
})

//slug || dynamic routing
app.get('/api/:id', (req, res) => {
    //query параметр - то что идет после знака вопроса в строке URL ?id=5
    //params - это наш уникальный параметр, который мы пишем в :id
    const {query, params} = req
    // тут будет id = 5
    console.log(query);
    console.log(params.id);
    
    res.send(`unique id of api is ${params.id}`)
})

app.get('/error', (req, res) => {
    try {
        const error = new Error('This is an error')
        next(error)
    } catch(e) {
        console.error(e)
    }
})

app.get('/async-error', async(req, res, next) => {
    try {
        throw new Error('Async error occured ')
    } catch(error) {
        next(error)
    }
})

app.listen(PORT, () => {
    console.log(`Serve is working at ${PORT} port`)
})

