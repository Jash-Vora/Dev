import {format} from 'date-fns';
import { v4 as uuid } from 'uuid';
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const logEvents = async(message) => {
    const dateTime = `${format(new Date(), "yyyy/MM/dd\tHH:mm:ss")}`; 
    const logItem = `${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);
    try {
        if(!fs.existsSync(path.join(__dirname,'logs'))) {
            await fsPromises.mkdir(path.join(__dirname,'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'applog.txt'), `\n${logItem}`);
    } catch (error) {
        console.log(error);
    }
}
 
export default logEvents;