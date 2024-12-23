const fs = require('fs');
const path = require('path')

if (!fs.existsSync('./newDirectory')){
    fs.mkdir(path.join(__dirname, './newDirectory'), (err) => {
        if (err) throw err;
        console.log('Directory Created!');
        
    })
}
else {
    fs.rmdir(path.join(__dirname, './newDirectory'), (err) => {
        if (err) throw err;
        console.log('Directory Deleted!');
        
    })
}

