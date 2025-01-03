const fs = require('fs')

// const readStream = fs.createReadStream('output.txt', 'utf-8')
// readStream.on('data', (chunk) => {
//     console.log('Chunk of data was received: ', chunk)
// })
// readStream.on('end', () => {
//     console.log('End of reading file')
// })
// readStream.on('error', (error) => {
//     console.error('Error occured while reading file: ', error)
// })

// const writeStream = fs.createWriteStream('writtenStream.txt', 'utf8')

// writeStream.write('This is first string. \n')
// writeStream.write('This is second string. \n')

// writeStream.end('This is last stream.\n')

// writeStream.on('finish', () => {
//     console.log('Just ended writing file')
// })

// writeStream.on('error', (err) => {
//     console.error('Error occured reading file', err)
// })

const readStream = fs.createReadStream('input.txt', 'utf-8')

const writeStream = fs.createWriteStream('output2.txt', 'utf-8')

readStream.pipe(writeStream)

writeStream.on('finish', () => {
    console.log('record is completed');
})

readStream.on('error', (err) => {
    console.error('Error occured reading file: ', err)
})

writeStream.on('error', (err) => {
    console.error('Error occured reading file: ', err)
})

