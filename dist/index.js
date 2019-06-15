"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendgrid_1 = require("./sendgrid/sendgrid");
class MailService {
    constructor(config) {
        this.sendEmailWithService = (service, apiKey, data) => {
            if (service == 'sendgrid') {
                return sendgrid_1.sendEmailWithSendgrid(apiKey, data);
            }
            if (service == 'mailchimp') {
            }
            if (service == 'gmail') {
            }
            throw new Error('Mail service currenly not supported');
        };
        this.sendEmail = (inputs) => {
            for (let i in this.config) {
                if (this.config[i].apiKey.length == 0)
                    continue;
                else
                    this.sendEmailWithService(i, this.config[i].apiKey, inputs);
            }
        };
        this.config = {
            mailchimp: {
                apiKey: ''
            },
            sendgrid: {
                apiKey: ''
            }
        };
        if (Object.values(config).length > 0)
            this.config = Object.assign({}, this.config, config);
        else
            throw new Error('Config file should be an object with services');
    }
}
exports.default = MailService;
