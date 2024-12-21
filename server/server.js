const fsPromises = require('fs').promises;
const path = require('path');

const Ops = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'text.txt'), 'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'files', 'text.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'newFile.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'newFile.txt'), '\n \nI appended this line');
        await fsPromises.rename(path.join(__dirname, 'files', 'newFile.txt'), path.join(__dirname, 'files', 'renamedFile.txt'));

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'renamedFile.txt'), 'utf8');
        console.log(newData);
    
        
    }
    catch (err) {
        console.error(err);
    }
}
Ops();
    


//     fs.writeFile(path.join(__dirname, 'files', 'writtenFile.txt'), 'Hello, World!', (err) => {
//         if (err) throw err;
//         console.log('File written');

//         fs.appendFile(path.join(__dirname, 'files', 'writtenFile.txt'), `\n \nI am learning Node.js`, (err) => {
//             if (err) throw err;
//             console.log('File appended');

//             fs.rename(path.join(__dirname, 'files', 'writtenFile.txt'), path.join(__dirname, 'files', 'newFile.txt'), (err) => {
//                 if (err) throw err;
//                 console.log('File renamed');
//             })
//         })

//     })
// })
    

process.on('uncaughtException', err => {
    console.error(`Caught exception:, ${err}`);
    process.exit(1);
})