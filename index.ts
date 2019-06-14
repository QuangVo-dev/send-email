import MailchimpService from './mailchimp/mailchimp';
import { sendEmailWithSendgrid } from './sendgrid/sendgrid'
import { MailDTO } from './sendgrid/mail.dto'


class MailService {
    config;
    constructor(config: object) {
        this.config = {
            mailchimp: {
                apiKey: ''
            },
            sendgrid: {
                apiKey: ''
            }
        }
        if (Object.values(config).length > 0) this.config = Object.assign({}, this.config, config)
        else throw new Error('Config file should be an object with services')
    }

    sendEmailWithService = (service: string, apiKey: string, data: any) => {
        if (service == 'sendgrid') {
            return sendEmailWithSendgrid(apiKey, data)
        }
        if (service == 'mailchimp') {

        }
        throw new Error('Mail service currenly not supported')
    }

    sendEmail = (inputs: MailDTO) => {
        const msg: any = {
            from: inputs.from,
            to: inputs.to,
            subject: inputs.subject,
            content: inputs.content
        }

        for (let i in this.config) {
            if (this.config[i].apiKey.length > 0) this.sendEmailWithService(i, this.config[i].apiKey, msg)
        }

    }
}

export default MailService

