import logEvents from "./logEvents.js";
import EventEmitter from 'events';

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('log',(msg) => logEvents(msg));

setTimeout(()=>{
    myEmitter.emit('log','Log Event emmitted!');
},2000);