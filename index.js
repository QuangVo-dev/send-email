"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var mailchimp_1 = require("./mailchimp/mailchimp");
var sendgrid_1 = require("./sendgrid/sendgrid");
dotenv.config();
var mailchimp = new mailchimp_1["default"]();
var sendEmail = function (type, inputs) {
    if (type === 'SENDGRID')
        return sendgrid_1.sendEmailWithSendgrid(inputs);
    if (type === 'MAILCHIMP')
        return;
};
sendEmail('SENDGRID', {
    to: 'vothanhtruongquang@gmail.com',
    from: 'phamlegiabao96@gmail.com',
    subject: 'Test',
    text: '',
    html: '<h1>Test thu xem sao</h1>'
});
exports["default"] = sendEmail;
