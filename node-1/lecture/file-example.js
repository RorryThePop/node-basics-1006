//fs  модуль используется для чтения системных или серверных файлов
const fs = require('fs')

//создает файл на сервер или систему. Принимает 3 параметра. 1 - название создаваемоего файла, 2 - тело вашего файла, то что вы хотите передать внутрь файла в качестве его содерджимого, 3 - слушатель
fs.writeFile('example.txt', 'Hello world!!!', err => {
    if(err) {
        console.log(err);
        return
    }
    console.log('file has been written');
})
//readFile - считывает файл и выводит его содержимое передаваемое вторым аргументом, data - содержимое созданного файла
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(data);
})