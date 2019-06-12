import * as sgMail from '@sendgrid/mail'
import { MailDTO } from './mail.dto'

export const sendEmailWithSendgrid = async (inputs: MailDTO) => {
    const apiKey: any = process.env.SENDGRID_API_KEY
    sgMail.setApiKey(apiKey)
    const msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        html: inputs.html,
    };
    try {
        await sgMail.send(msg)
    } catch (err) {
        console.error(err.response.body.errors)
    }
}