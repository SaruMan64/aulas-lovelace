const jsonfs = require('./jsonfs');

async function readEvents() {
    const dataRead = await jsonfs.readJSON('./registeredevents.json');
    return dataRead;
}

async function organizeObj(obj, event){
    const dataRead = await readEvents();
    const lengthData = dataRead.length;
    if (event != 'admin'){
        if (lengthData === 0) {
            obj.id = 1;
            //console.log('1==========', obj)
            return obj;
        } else {
            obj.id = dataRead[lengthData - 1].id + 1;
            //console.log('1==========', obj)
            return obj;
        }
    }
}

async function signupEvent(obj, event) {
    const eventObj = await organizeObj(obj, event);
    const dataRead = await readEvents();
    dataRead.push(eventObj);
    await jsonfs.writeJSON('./registeredevents.json', dataRead);
}

module.exports = { signupEvent, readEvents };