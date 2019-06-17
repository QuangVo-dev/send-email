import * as sgMail from '@sendgrid/mail'

export const sendEmailWithSendgrid = async (apiKey: string, inputs: any) => {
    sgMail.setApiKey(apiKey)
    const msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        html: inputs.html
    };
    try {
        sgMail.send(msg)
        console.info('Send Email with Sendgrid successfully')
    } catch (err) {
        console.error(err.response.body.errors)
    }
}