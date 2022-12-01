let fs=require('fs')
fs.readFile('hello.txt',(err,data)=>{
    if (err) {
        return console.error(err)
    }
    console.log(data.toString())
})

