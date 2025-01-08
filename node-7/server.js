import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3333
const API_KEY = process.env.API_KEY || 'no key'


app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post('/users', (req, res) => {
    const {email, password} = req.body

    if(!email && !password) {
        res.status(403)
    }
    res.send(`User ${email} was successfully registered`)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port and has ${API_KEY}`);
})
