const path = require('path')

const absolutePath = path.resolve('testDir')
console.log('Absolute path is: ', absolutePath);

const joinedPath = path.join('folder1', 'folder2', 'file.txt')
console.log('Connected way: ', joinedPath);

const fileName = path.basename('/folder1/folder2/file.txt')
console.log('Base file name: ', fileName);

const fileExtension = path.extname('/folder1/folder2/file.txt')
console.log('File extension is: ', fileExtension)

//__dirname - путь к корню файла, откуда применяется данный метод

console.log(__dirname);

const formattedPath = path.join(__dirname, 'output.txt')
console.log(formattedPath);

