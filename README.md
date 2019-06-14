# send-email
Send Email Modules


const sendService = new MailService({
        sendgrid: {
            apiKey: 'sendgrid-apiKey'
        },
        mandrill: {
            apiKey: 'sendgrid-apiKey'
        },
});