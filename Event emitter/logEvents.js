const { format } = require('date-fns');
const {v4: uuid}  = require ('uuid')

const fs = require('fs')
const fsPromises = require('fs').promises;
const path = require('path');


const logEvents = async (message) => {
    
    const dateTime = `${format(new Date(), 'yyyy/MM/dd\tHH:mm:ss')}`
    const logItem = `${dateTime} \t ${uuid()} \t ${message}\n`

    try {
        if (!fs.existsSync('./logs')) {
            await fsPromises.mkdir('./logs')
        } else {
            await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLogs.txt'), logItem);
        }
    }
    catch(err) {
        console.error(err);
        
    }
} 

module.exports = logEvents;
