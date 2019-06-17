"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendgrid_1 = require("./sendgrid/sendgrid");
const mailchimp_1 = require("./mailchimp/mailchimp");
const mailgun_1 = require("./mailgun/mailgun");
class MailService {
    constructor(config) {
        this.sendEmailWithService = (service, apiKey, data, domain) => {
            if (service == 'sendgrid') {
                return sendgrid_1.sendEmailWithSendgrid(apiKey, data);
            }
            if (service == 'mandrill') {
                return mailchimp_1.sendEmailWithMandrill(apiKey, data);
            }
            if (service == 'mailgun') {
                return mailgun_1.sendEmailWithMailgun(apiKey, data, domain);
            }
            throw new Error('Mail service currenly not supported');
        };
        this.send = (inputs) => {
            for (let service in this.config) {
                if (this.config[service].apiKey.length == 0)
                    continue;
                else if (this.config[service].domain && this.config[service].domain.length > 0) {
                    this.sendEmailWithService(service, this.config[service].apiKey, inputs, this.config[service].domain);
                }
                else
                    this.sendEmailWithService(service, this.config[service].apiKey, inputs);
            }
        };
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
        };
        if (Object.values(config).length > 0)
            this.config = Object.assign({}, this.config, config);
        else
            throw new Error('Config file should be an object with services');
    }
}
exports.default = MailService;
