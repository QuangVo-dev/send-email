import * as sgMail from '@sendgrid/mail'
import * as SendGridHelper from '@sendgrid/helpers'
import { MailData } from '@sendgrid/helpers/classes/mail';

export const sendEmailWithSendgrid = async (apiKey: string, inputs: MailData) => {
    sgMail.setApiKey(apiKey)
    const msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        // text: inputs.text,
        html: inputs.html
    };
    // const msg: MailData = {
    //     to: inputs.to,
    //     from: inputs.from,
    //     subject: inputs.subject,
    //     content: [
    //         {
    //             type: 'text/html',
    //             value: inputs.content,
    //         }
    //     ]
    // };
    try {
        await sgMail.send(msg)
        console.info('Send Email with Sendgrid successfully')
    } catch (err) {
        console.error(err.response.body.errors)
    }
}