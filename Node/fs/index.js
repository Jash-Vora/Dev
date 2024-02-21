import {promises as fsPromises} from 'fs'
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const fileOps = async() =>{
    try {
        const data = await fsPromises.readFile(path.join( __dirname ,"files", "starter.txt"), 'utf8');  //Reading the text file
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
        await fsPromises.writeFile(path.join(__dirname,'files','text.txt'), data);
        await fsPromises.appendFile(path.join(__dirname,'files','text.txt'), '\n\nNice to meet you');
        await fsPromises.rename(path.join(__dirname,'files','text.txt'), path.join(__dirname,'files','promiseNew.txt'));
        const newData = await fsPromises.readFile(path.join( __dirname ,"files", "promiseNew.txt"), 'utf8');  //Reading the text file
        console.log(newData);
    } catch (error) {
        console.log(error);
    }
}

fileOps();

/*
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf-8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log(data);
    }
});

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Hello this is the reply', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log("Write Complete");
    }
    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\n Ok, got it.', (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log("Append Complete");
        }
        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newName.txt'), (err) => {
            if (err) {
                console.error('Error renaming file:', err);
            } else {
                console.log("Rename Complete");
            }
        }); 
    });
});

console.log('Hello...');
*/

process.on('uncaughtException', err => {
    console.log(err);
    process.exit(1);
});
