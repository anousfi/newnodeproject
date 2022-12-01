const { getDefaultNormalizer } = require('@testing-library/react')
const nm=require('nodemailer')

const transport=nm.createTransport({
    service:'gmail',
    auth:{
        user:'anousfi@gmail.com',
        password:'************'
    }
})
const mailOptions={
    from:'anousfi@gmail.com',
    to:'example123@hotmail.com',
    subject:'saying hello',
    text:'hello old friend how are you???'
}
transport.sendMail(mailOptions,(err,data)=>{
    if (err) {
        return console.error(err)
    } else {
        console.log('Email well sent!!'+data.response)
    }
})