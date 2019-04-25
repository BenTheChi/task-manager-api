const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'afutureemployee@thebestjobever.com',
        subject: 'Thanks for joining our company!',
        text: ` We appreciate your support ${ name }.  You should totally come work for us!`
    })
}

const sendCancelationEmail = (email, name) => {
    console.log(email, name)
    sgMail.send({
        to: email,
        from: 'afutureemployee@thebestjobever.com',
        subject: 'We are sad...',
        text: `Even though you're leaving us we still love you.  A bit broken hearted though... Take care ${ name }.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}