"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Mailgun = require("mailgun-js");
exports.sendEmailWithMailgun = (apiKey, inputs, domain) => {
    const mailgun = new Mailgun({ apiKey: apiKey, domain: domain });
    const msg = {
        from: inputs.from,
        to: inputs.to,
        subject: inputs.subject,
        html: inputs.html
    };
    return new Promise((resolve, reject) => {
        mailgun.messages().send(msg, (err, body) => {
            if (err) {
                console.error(err);
                reject(err);
            }
            else {
                resolve(body);
            }
        });
    });
};
