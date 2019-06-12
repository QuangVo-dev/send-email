import * as dotenv from 'dotenv'
import MailchimpService from './mailchimp/mailchimp';
import { sendEmailWithSendgrid } from './sendgrid/sendgrid'
import { MailDTO } from './sendgrid/mail.dto'
dotenv.config()


const sendEmail = (type, inputs: MailDTO) => {
    if (type === 'SENDGRID')
        return sendEmailWithSendgrid(inputs)
    if (type === 'MAILCHIMP') {
        const mailchimp = new MailchimpService()
    }
}

export default sendEmail
