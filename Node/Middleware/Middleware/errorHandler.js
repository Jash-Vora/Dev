import middleware from './logEvents.js';
const logEvents = middleware.logEvents;

const errorHandler = function(err,req,res,next){
    logEvents(`${err.name}\t${err.message}`,'errLog.txt');
    console.error(err.stack);
    res.status(500).send(err.message);
}
export default errorHandler;