const fs=require('fs') 

fs.writeFile('welcome.txt','Hello Node',(err)=>{
        if (err) {
            return console.log(err)
        }
       })



