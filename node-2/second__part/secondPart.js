
// const EventEmitter = require('events')
// const x = new EventEmitter()
// const logger = new EventEmitter()
// const asyncOperations = new EventEmitter()
// logger.on('info', (message) => {
//     console.log(`Info: ${message}`)
// })

// logger.on('warning', (message) => {
//     console.warn(`Warning: ${message}`)
// })

// logger.on('error', (error) => {
//     console.error(`Error: ${error}`)
// })

// logger.once('settings', (message) => {
//     console.log(`Settings status: ${message}`);
// })

// asyncOperations.on('operationComplete', (operation) => {
//     console.log(`Operation ${operation} completed successfylly`);
// })


// setTimeout(() => {
//     asyncOperations.emit('operationComplete', 'Download')
// }, 2000)

// logger.emit('info', 'Server has been started')
// logger.emit('warning', 'This message is about an error')
// logger.emit('error', 'Server has been crashed')
// logger.emit('settings', 'settings has been installed successfully')

console.log('start')

setTimeout(() => {
    console.log('second async task (timeout)');
}, 0)

Promise.resolve()
.then(() => {
    console.log('third async task (Promise)');
})

console.log('end')