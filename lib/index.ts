import { sendEmailWithSendgrid } from './sendgrid/sendgrid'
import { sendEmailWithMandrill } from './mailchimp/mailchimp'
import { sendEmailWithMailgun } from './mailgun/mailgun';
import { stringify } from 'querystring';
import { MailDTO } from './mail.dto';



class MailService {
    config: any;
    constructor(config: object) {
        this.config = {
            mandrill: {
                apiKey: ''
            },
            sendgrid: {
                apiKey: ''
            },
            mailgun: {
                apiKey: '',
                domain: ''
            }
        }
        if (Object.values(config).length > 0) this.config = Object.assign({}, this.config, config)
        else throw new Error('Config file should be an object with services')
    }

    sendEmailWithService = (service: string, apiKey: string, data: any, domain?: any) => {
        if (service == 'sendgrid') {
            return sendEmailWithSendgrid(apiKey, data)
        }
        if (service == 'mandrill') {
            return sendEmailWithMandrill(apiKey, data)
        }
        if (service == 'mailgun') {
            return sendEmailWithMailgun(apiKey, data, domain)
        }
        throw new Error('Mail service currenly not supported')
    }

    send = (inputs: MailDTO) => {

        for (let service in this.config) {
            if (this.config[service].apiKey.length == 0) continue;
            else if (this.config[service].domain && this.config[service].domain.length > 0) {
                this.sendEmailWithService(service, this.config[service].apiKey, inputs, this.config[service].domain)
            }
            else this.sendEmailWithService(service, this.config[service].apiKey, inputs)
        }

    }
}

export default MailService
