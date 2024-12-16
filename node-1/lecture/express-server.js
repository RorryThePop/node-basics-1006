const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3333, () => {
    console.log(`Server is running at http://localhost:${3333}`)
})