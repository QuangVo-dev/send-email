import { sendEmailWithSendgrid } from './sendgrid/sendgrid'
import { MailData } from '@sendgrid/helpers/classes/mail';


class MailService {
    config: any;
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
        if (service == 'gmail') {
            
        }
        throw new Error('Mail service currenly not supported')
    }

    sendEmail = (inputs: MailData) => {

        for (let i in this.config) {
            if (this.config[i].apiKey.length == 0) continue;
            else this.sendEmailWithService(i, this.config[i].apiKey, inputs)
        }

    }
}

export default MailService
