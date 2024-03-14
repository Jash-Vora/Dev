const usersDb = {
    users: require('../data/users.json'),
    setUsers: function(data){this.users = data}
}
const bcrypt = require('bcrypt')

const handleLogin = async (req,res)=>{
    const {user,pwd} = req.body;
    if(!user||!pwd){
        res.status(400).json({"message":"Username and password required"});
    }
    const findUsers = usersDb.users.find(person=>person.username===user);
    if(!findUsers){
        return res.sendStatus(401)
    }
    const match = await bcrypt.compare(pwd,findUsers.password);
    if(match){
        res.json({"success":"User is logged in"});
    }
    else{
        res.sendStatus(401);
    }
}
module.exports = {handleLogin};