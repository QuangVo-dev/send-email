"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailchimp = require("mailchimp-api-v3");
class MailchimpService {
    constructor(API_KEY = process.env.MAILCHIMP) {
        this.test = () => {
            console.log(this.mailchimp);
        };
        this.mailchimp = new Mailchimp(API_KEY);
    }
}
exports.default = MailchimpService;
//# sourceMappingURL=mailchimp.js.map