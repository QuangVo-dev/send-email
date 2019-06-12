import * as dotenv from 'dotenv'
import MailchimpService from './mailchimp/mailchimp';
import { sendEmailWithSendgrid } from './sendgrid/sendgrid'
import { MailDTO } from './sendgrid/mail.dto'
dotenv.config()

const mailchimp = new MailchimpService()

const sendEmail = (type, inputs: MailDTO) => {
    if (type === 'SENDGRID')
        return sendEmailWithSendgrid(inputs)
    if (type === 'MAILCHIMP') return
}

sendEmail('SENDGRID', {
    to: 'vothanhtruongquang@gmail.com',
    from: 'phamlegiabao96@gmail.com',
    subject: 'Test',
    text: '',
    html: '<h1>Test thu xem sao</h1>',
})

export default sendEmail
