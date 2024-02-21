import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3500;
const app = express();

app.get('^/$|index(.html)?', (req, res) => {
    /*res.sendFile('./views/index.html', {root: __dirname});*/
    res.sendFile(path.join(__dirname,'views','index.html'));
});
app.get('/new-page(.html)?',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','new-page.html'));
});
app.get('/old-page(.html)?',(req,res)=>{
    res.redirect(301,'/new-page.html');
});

app.get('/hello(.html)?',(req,res,next)=>{
    console.log('Attempted to load hello.html');
    next();
},(req,res)=>{
    res.send('Hello World');
});

const one = (req,res,next) =>{
    console.log('One');
    next();
}
const two = (req,res,next) => {
    console.log('Two');
    next();
}
const three = (req,res)=>{
    console.log("Three");
    res.send("Finished!");
}

app.get('/chain(.html)?' , [one,two,three]);

app.get('/*',(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));