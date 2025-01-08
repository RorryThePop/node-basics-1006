import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()


const username = process.env.username
const password = process.env.password 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'random-company@gmail.com',
        pass: '12345'
    }
})
const mailOptions = {
    from: 'random-mail@gmail.com',
    to: 'who-will-receive@gmail.com',
    subject: 'Test mail',
    text: 'This is a text of the email'
}

transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        return console.log('Error sending email: ', error);
    }
    console.log('Email was sent: ', info.response);  
})