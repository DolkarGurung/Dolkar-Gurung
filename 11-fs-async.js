const {readFile, writeFile} = require('fs') //fs = file System

console.log('start')

readFile('./content/first.txt','utf8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8',(err,result) => {
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            'Here is the result : ${first}, ${second}',
            (err,result) => {
                if(err){
                    console.log(err)
                    return 
                }
                console.log('done with this task')
                //this prints at the end bc this is async, so 
                //some task take some time and this is why we use callback 
            }
        )

    })
})

console.log('starting next task')