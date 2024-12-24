const logEvents = require('./logEvents.js');

const EventEmitter =require('events')

class MyEmitter extends EventEmitter { };

//initialize object
const myEmitter = new MyEmitter();

//add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
   myEmitter.emit('log', 'Log event emmitted')
},2000)