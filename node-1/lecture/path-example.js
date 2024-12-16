const path = require('path')
//__dirname - путь от жесткого диска (SSD) до файла где вы прописываете данную команду
const fullPath = path.join(__dirname, 'documents', 'file.txt')
console.log(fullPath);
