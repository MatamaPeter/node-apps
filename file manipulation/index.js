const fs = require('fs').promises;
const { error } = require('console');
const path = require('path');

/*
fs.readFile(path.join(__dirname,'./textFile.txt'), (err, data)=>{
    if (err) throw err;
    console.log(data.toString());  
})
fs.appendFile(path.join(__dirname, './textFile.txt'), '\n\nI am Learning NodeJs', (err) => {
    if (err) throw err;
    console.log('File appended')
})
*/


const ops = async () => {
    try {
        const data = await fs.readFile(path.join(__dirname, './textFile.txt'))
        console.log(data.toString());

        await fs.unlink(path.join(__dirname, './textFile.txt'))
        await fs.writeFile(path.join(__dirname, './newTextFile.txt'), data);
        await fs.appendFile(path.join(__dirname, './newTextFile.txt'), '\n\n This line is appended');
        await fs.rename(path.join(__dirname, './newTextFile.txt'), './textFile.txt');
    }
    catch(err) {
        console.error(err)
    }
    
    
}
ops();