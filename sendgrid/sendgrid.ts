import * as sgMail from '@sendgrid/mail'
import * as SendGridHelper from '@sendgrid/helpers'
import { MailDTO } from './mail.dto'

export const sendEmailWithSendgrid = async (apiKey: string, inputs: MailDTO) => {
    sgMail.setApiKey(apiKey)
    const msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        content: [
            {
                type: 'text/html',
                value: inputs.content,
            },
        ]
    };
    try {
        await sgMail.send(msg)
        console.info('Send Email with Sendgrid successfully')
    } catch (err) {
        console.error(err.response.body.errors)
    }
}