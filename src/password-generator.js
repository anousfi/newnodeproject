const gen=require('generate-password')

const pass=gen.generate({
    length:8,
    numbers:true
})
console.log(pass)