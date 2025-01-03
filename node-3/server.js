const fs = require('fs')

fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err) {
        console.error('Error occured while reading file', err)
        return
    }
    console.log('File contains: ', data)
})

const content = JSON.stringify([
    {
        id: 1,
        title: 2
    }
])
fs.writeFile('output.txt', content, 'utf8', (err) => {
    if(err) {
        console.error('Error occured while reading file', err)
        return
    }
    console.log('File was successfully written')
})