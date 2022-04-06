const {format} = require('date-fns');
const {v4:uiud} = require('uiud');

const fs = require('fs')
const fsPromiss = require('fs').promises;
const path = require('path');

const logEvents = async(messgae) => {
    const dateTime = `${format(new Date(),'yyyyMMdd\tHH:MM:ss')}`;
    comsole.log(logItem);
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            awaitfsPromises.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'logs','eventlog.txt'),logItem);
    }catch(err){
        console.err(err)
    }
}

console.log(uuid())