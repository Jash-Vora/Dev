const usersDb = {
    users: require('../data/users.json'),
    setUsers: function(data){this.users = data}
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const handleNewUser = async (req,res)=>{
    const {user,pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({"message":"Username and password needed"})
    const duplicate = usersDb.users.find(person=>person.username === user)
    if(duplicate){
        return res.status(400);
    }
    try {
        //hashing the password
        const hashedPwd = await bcrypt.hash(pwd,10);
        //store the new user
        const newUser = {"username":user,"password":hashedPwd};
        usersDb.setUsers([...usersDb.users,newUser]);
        await fsPromises.writeFile(
            path.join(__dirname,'..','data','users.json'),
            JSON.stringify(usersDb.users)
        )
        console.log(usersDb.users);
        res.status(201).json({"success":"The user was created successfully!"});
    } catch (error) {
        
    }
}

module.exports = {handleNewUser};