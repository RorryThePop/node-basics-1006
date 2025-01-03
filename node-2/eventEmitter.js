const EventEmitter = require('events')
const emitter = new EventEmitter()

//1 шаг в работе с событиями в ноде - регистрация обработчика для события greet
// emitter.on('greet', () => {
//     console.log('Hello there')
// })

//2 шаг. Генерация события greet
// emitter.emit('greet')
// console.log('event is over');


// emitter.on('data', (data) => {
//     console.log('Data received: ', data)
// })

// emitter.emit('data', {
//     id: 1,
//     title: 'title 1',
//     description: 'desc 1'
// })

//ONCE
// emitter.once('connect', () => {
//     console.log('Connected for the first time')
// })
// emitter.emit('connect')
// emitter.emit('connect')

//removeListener
// const handler = () => {
//     console.log('This will not be logged after removal')
// }

//1. Регистрируем событие removeEvent (придуманное нами)
// emitter.on('removeEvent', handler)
//2. Удаляем событие removeEvent
// emitter.removeListener('removeEvent', handler)
//3. Пытаемся запустить событие removeEvent, но не преуспеваем в этом, так как на 2 шаге событие было удалено
// emitter.emit('removeEvent')

// emitter.on('data', (data) => {
//     console.log('First listener: ', data)
// })

// emitter.on('data', (data) => {
//     console.log('Second listener: ', data)
// })

// emitter.on('data', (data) => {
//     console.log('3 listener: ', data)
// })
// emitter.on('data', (data) => {
//     console.log('4 listener: ', data)
// })
// emitter.on('data', (data) => {
//     console.log('5 listener: ', data)
// })

// emitter.emit('data', {id: 1})
//removeListener
// const handler = (data) => {
//     console.log('This will not be logged after removal: ', data);
// } 
// emitter.on('randomEvent', handler)
// emitter.on('randomEvent', () => {
//     console.log('second listener');
// })
// emitter.emit('randomEvent', {id: 5})
// emitter.removeAllListeners('randomEvent')
// // emitter.removeListener('randomEvent', handler)
// emitter.emit('randomEvent', {id: 5})
// emitter.emit('randomEvent', {id: 5})

const secondHandler = (data) => {
    console.log('second task example 2: ', data);
}

emitter.on('secondTask', (data) => {
    console.log('second task example: ', data);
})

emitter.on('secondTask', secondHandler)
emitter.removeListener('secondTask', secondHandler)

emitter.emit('secondTask', 'example')
//
// class User {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     sayHi() {
//         console.log(`${this.name} says hello`)
//     }
// }

// const Volodymir = new User('Volodymir', 30)