const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, './renamedFile.txt'), { encoding: 'utf8' })
const ws = fs.createWriteStream(path.join(__dirname, './copiedFile.txt'))

rs.pipe(ws)