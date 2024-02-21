import fs from 'fs';

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if (err) throw err;
        console.log('Directory Created');
    });
}
else{
    fs.rmdir('./new',(err)=>{
        if(err)throw err;
        console.log("Directory Removed");
    })
}