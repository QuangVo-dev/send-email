import * as sgMail from '@sendgrid/mail'
import { MailDTO } from './mail.dto'

export const sendEmailWithSendgrid = (inputs: MailDTO) => {
    const apiKey: any = process.env.SENDGRID_API_KEY
    sgMail.setApiKey(apiKey)
    const msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        text: inputs.text,
        html: inputs.html,
    };
    const a = sgMail.send(msg)
    console.log(a)
}