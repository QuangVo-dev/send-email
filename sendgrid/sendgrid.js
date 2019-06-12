"use strict";
exports.__esModule = true;
var sgMail = require("@sendgrid/mail");
exports.sendEmailWithSendgrid = function (inputs) {
    var apiKey = process.env.SENDGRID_API_KEY;
    sgMail.setApiKey(apiKey);
    var msg = {
        to: inputs.to,
        from: inputs.from,
        subject: inputs.subject,
        text: inputs.text,
        html: inputs.html
    };
    var a = sgMail.send(msg);
    console.log(a);
};
