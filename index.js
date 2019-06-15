"use strict";
exports.__esModule = true;
// import MailchimpService from './mailchimp/mailchimp';
var sendgrid_1 = require("./sendgrid/sendgrid");
var MailService = /** @class */ (function () {
    function MailService(config) {
        var _this = this;
        this.sendEmailWithService = function (service, apiKey, data) {
            if (service == 'sendgrid') {
                return sendgrid_1.sendEmailWithSendgrid(apiKey, data);
            }
            if (service == 'mailchimp') {
            }
            throw new Error('Mail service currenly not supported');
        };
        this.sendEmail = function (inputs) {
            var msg = {
                from: inputs.from,
                to: inputs.to,
                subject: inputs.subject,
                content: inputs.content
            };
            for (var i in _this.config) {
                if (_this.config[i].apiKey.length == 0)
                    continue;
                else
                    _this.sendEmailWithService(i, _this.config[i].apiKey, msg);
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
    return MailService;
}());
exports["default"] = MailService;
