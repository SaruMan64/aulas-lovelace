const jsonfs = require('./jsonfs');

async function readUsers() {
    const dataRead = await jsonfs.readJSON('./registeredusers.json');
    return dataRead;
}

async function organizeObj(obj, user){
    const dataRead = await readUsers();
    const lengthData = dataRead.length;
    if (user != 'admin'){
        if (lengthData === 0) {
            obj.id = 1;
            obj.userType = user;
            //console.log('1==========', obj)
            return obj;
        } else {
            obj.id = dataRead[lengthData - 1].id + 1;
            obj.userType = user;
            //console.log('1==========', obj)
            return obj;
        }
    }
}

async function signupUser(obj, user) {
    const userObj = await organizeObj(obj, user);
    const dataRead = await readUsers();
    dataRead.push(userObj);
    await jsonfs.writeJSON('./registeredusers.json', dataRead);
}

module.exports = { signupUser, readUsers };