import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import middleware from './Middleware/logEvents.js';
import cors from 'cors';
import errorHandler from './Middleware/errorHandler.js';

const logger = middleware.logger;

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3500;
const app = express();

app.use(logger);


let whiteList = ['https://www.google.com', 'http://127.0.0.1:3500']; // Add your domain here to bypass
const corsOptions = {
    origin: (origin,callback)=>{
        if(whiteList.indexOf(origin)!==-1 || !origin){
            callback(null,true);
        } else{
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));//cors = Cross origin resource sharing

app.use(express.urlencoded({ extended: false }));

// built-in middleware for json 
app.use(express.json());

//serve static files
app.use(express.static(path.join(__dirname, './public')));//not working

app.get('^/$|/index(.html)?', (req, res) => {
    //res.sendFile('./views/index.html', { root: __dirname });
    console.log(__dirname);
    res.sendFile(path.join(__dirname, 'public','views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','views', 'new-page.html'));
});

app.get('/old-page(.html)?', (req, res) => {
    res.redirect(301, '/new-page.html'); //302 by default
});

// Route handlers
app.get('/hello(.html)?', (req, res, next) => {
    console.log('attempted to load hello.html');
    next()
}, (req, res) => {
    res.send('Hello World!');
});


// chaining route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('three');
    res.send('Finished!');
}

app.get('/chain(.html)?', [one, two, three]);

app.get('/chain(.html)?' , [one,two,three]);

app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'public','views','404.html'));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));